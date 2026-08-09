#!/usr/bin/env node
/* =========================================================
   Spark Learning – scripts/prerender.js
   Pré-rend en HTML statique chaque URL de sitemap.xml via un
   navigateur headless (Puppeteer), pour que Google indexe le
   vrai contenu sans dépendre de l'exécution JS côté crawler.
   Voir docs/superpowers/specs/2026-08-09-prerendu-seo-design.md
   Usage : node scripts/prerender.js [--base-url URL] [--sitemap-file PATH]
   ========================================================= */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const DEFAULT_BASE_URL = 'https://sparklearning.fr';
const MIN_APP_TEXT_LENGTH = 200;
const MAX_FAILURE_RATIO = 0.2;
const NAV_TIMEOUT_MS = 15000;
const CONTENT_WAIT_TIMEOUT_MS = 15000;
// Doit rester synchronisé avec la variable `base` de updatePageMeta() dans js/app.js
// (`const base = 'Spark Learning';`, début de la fonction) : c'est le titre que l'app
// affiche tant qu'aucun contenu de route n'a été rendu. Si ce titre change là-bas, le
// changer ici aussi, sinon la détection de rendu manqué ne détecte plus rien.
const GENERIC_TITLE = 'Spark Learning';

function parseArgs(argv) {
  const args = {
    baseUrl: DEFAULT_BASE_URL,
    sitemapFile: path.join(root, 'sitemap.xml')
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--base-url' && argv[i + 1]) {
      args.baseUrl = argv[i + 1].replace(/\/+$/, '');
      i++;
    } else if (argv[i] === '--sitemap-file' && argv[i + 1]) {
      args.sitemapFile = path.resolve(argv[i + 1]);
      i++;
    } else {
      // Un argument inconnu n'est jamais anodin ici : `--baseurl http://localhost:5177`
      // (typo) serait silencieusement ignoré et le script crawlerait la PRODUCTION.
      throw new Error(`Argument inconnu : ${argv[i]}\nUsage : node scripts/prerender.js [--base-url URL] [--sitemap-file PATH]`);
    }
  }
  return args;
}

// Classe de route déduite de la FORME du chemin (1er segment), pas d'une liste d'URLs
// figée : '/' , '/subjects', '/confidentialite' sont des routes uniques, tandis que
// '/levels/<matiere>', '/modules/<matiere>/<niveau>' et '/module/<id>/cours' sont des
// familles. Sert au bilan par classe et à la règle stricte "aucune page hors /module/*
// ne doit échouer" (ces pages-là sont peu nombreuses et à forte valeur : '/' sert en
// plus de page de repli pour toute URL absente du sitemap via le rewrite `**`).
function routeClass(routePath) {
  const segments = routePath.replace(/^\/+/, '').replace(/\/+$/, '').split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  if (segments.length === 1) return '/' + segments[0];
  return '/' + segments[0] + '/*';
}

// Extrait le chemin de route de chaque <loc>, indépendamment du host qu'il contient
// (le sitemap référence toujours https://sparklearning.fr, mais --base-url peut
// pointer vers un canal de preview ou un serveur local pendant les tests).
function parseSitemapXml(xml) {
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  if (matches.length === 0) throw new Error('Aucune URL trouvée dans le sitemap');
  return matches.map(m => {
    const loc = m[1].trim();
    const afterProtocol = loc.replace(/^https?:\/\//, '');
    const slashIdx = afterProtocol.indexOf('/');
    const routePath = slashIdx === -1 ? '' : afterProtocol.slice(slashIdx);
    return routePath === '' ? '/' : routePath;
  });
}

function readSitemapRoutes(sitemapFile) {
  const xml = fs.readFileSync(sitemapFile, 'utf8');
  return parseSitemapXml(xml);
}

function outputFileForRoute(routePath) {
  const clean = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const candidate = clean === '' ? path.join(root, 'index.html') : path.join(root, clean, 'index.html');
  const resolved = path.resolve(candidate);
  const rel = path.relative(root, resolved);
  if (rel.startsWith('..')) {
    throw new Error('Impossible de sortir du dossier racine');
  }
  return candidate;
}

function isValidRender(result, routePath) {
  if (result.appTextLength < MIN_APP_TEXT_LENGTH) return false;
  if (routePath !== '/' && result.title.trim() === GENERIC_TITLE) return false;
  return true;
}

// Zéro tolérance = toute classe de route SAUF '/module/*' (12 routes à forte valeur :
// '/', '/subjects', '/confidentialite', les 3 '/levels/*', les 6 '/modules/*'). Extrait
// en fonction nommée pour que renderRoute() (décision : timeout d'attente = échec dur)
// et main() (filtre `criticalFailures`) partagent exactement la même règle au lieu de
// dupliquer la comparaison `!== '/module/*'` à deux endroits.
function isZeroToleranceClass(cls) {
  return cls !== '/module/*';
}

async function renderRoute(page, url, routePath) {
  // 'domcontentloaded' plutôt que 'networkidle0' : l'app ouvre une connexion
  // Firestore temps réel (bannière d'annonce) qui ne se ferme jamais, donc
  // 'networkidle0' n'atteindrait jamais zéro connexion active et timeout à tous les coups.
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });

  // Pourquoi un signal explicite et pas un simple seuil de longueur de texte :
  // un seuil est satisfait par n'importe quel contenu DÉJÀ présent dans le HTML servi,
  // sans qu'aucun rendu JS n'ait eu lieu. C'est exactement ce qui a été observé contre le
  // serveur statique local (scripts/tmp-static-server.js), qui servait les fichiers
  // laissés par un run précédent : #app contenait du texte dès le chargement, le seuil
  // passait instantanément et on re-capturait la page figée au lieu du nouveau rendu.
  // (À noter : en production ce cas de figure n'existe pas, une release Firebase Hosting
  // étant un instantané complet du dossier uploadé — la Phase 1 déploie un checkout propre
  // sans dossiers de routes, donc les fichiers du run précédent ont déjà disparu quand la
  // Phase 2 crawle. Le seuil resterait malgré tout un mauvais critère : il mesure la
  // présence de texte, pas le fait que CETTE route ait été rendue.)
  // On attend donc un signal positif : js/app.js met `window.__sparkRouteReady` à true une
  // fois que render()+updatePageMeta() ont produit le contenu de LA route courante AVEC
  // ses données (voir navigate() et _markRouteReady()). Ce flag vit en mémoire JS — jamais
  // sérialisé dans le HTML capturé, contrairement à un attribut DOM, qui referait remonter
  // le même faux-positif au run suivant — donc il repart toujours à false au chargement de
  // chaque nouvelle page.
  const timedOut = await page.waitForFunction(
    () => {
      const app = document.getElementById('app');
      return !!(window.__sparkRouteReady && app && app.innerText && app.innerText.trim().length > 50);
    },
    { timeout: CONTENT_WAIT_TIMEOUT_MS }
  ).then(() => false).catch(() => true);

  if (timedOut) {
    // Pour les routes hors /module/* (zéro tolérance, voir isZeroToleranceClass), un
    // timeout sur le signal de disponibilité est un échec DUR, pas un simple warning : ce
    // sont exactement les routes pour lesquelles js/app.js laisse volontairement
    // __sparkRouteReady à false quand ensureAllData() échoue (voir son .catch() dans
    // _setupStudentApp()), précisément pour qu'un pré-rendu sans catalogue ne soit jamais
    // publié tel quel. Sans ce garde-fou côté prerender.js, isValidRender() accepterait
    // quand même le résultat (home exemptée du test de titre générique, texte au-dessus du
    // seuil minimal grâce aux zones de page indépendantes du catalogue) et écraserait
    // index.html avec une home au catalogue vide.
    // Les pages /module/* gardent le comportement existant : elles attendent leur propre
    // loadPromise dans navigate() indépendamment de ce signal, sont 149 des 161 routes, et
    // une règle dure ici serait trop fragile — on laisse isValidRender() trancher sur le
    // contenu réellement obtenu, comme avant.
    const cls = routeClass(routePath);
    if (isZeroToleranceClass(cls)) {
      throw new Error(`le signal __sparkRouteReady n'est pas arrivé avant ${CONTENT_WAIT_TIMEOUT_MS}ms (route "${cls}", zéro tolérance : échec dur plutôt qu'une publication douteuse)`);
    }
    console.warn(`[attente] ${url} — le signal __sparkRouteReady n'est pas arrivé avant ${CONTENT_WAIT_TIMEOUT_MS}ms`);
  }

  // Assainissement AVANT sérialisation. Un instantané de DOM capture l'état d'UNE session
  // de navigation (profil neuf, une seule `page` Puppeteer réutilisée pour toutes les
  // routes) ; certains éléments n'ont donc aucun sens dans un HTML statique servi à tout
  // le monde, ou y sont carrément nuisibles :
  //  - `head script[src*="js/data/"]` : injectés à l'exécution par _loadScript() de
  //    js/loader.js dans <head>. Sérialisés, ils re-tournent au prochain chargement AVANT
  //    js/data/helpers.js (script de <body> qui crée `window.MODULES = []`) → chaque
  //    fichier de données ferait `window.MODULES.push(...)` sur `undefined` : TypeError sur
  //    toutes les pages pré-rendues, plus une requête bloquante inutile.
  //  - `#consent-banner` : le profil Puppeteer est neuf, donc la bannière RGPD s'affiche
  //    dès la première route et persiste ensuite dans toutes les captures. Un visiteur
  //    ayant déjà tranché la reverrait figée dans le HTML statique.
  //  - toasts, confettis et bandeaux de célébration : chrome d'UI éphémère lié à une
  //    session (classes réelles : js/app.js showToast()/`.confetti-container`,
  //    js/components/celebration.js).
  const removedCounts = await page.evaluate(() => {
    const selectors = [
      'head script[src*="js/data/"]',
      '#consent-banner',
      '.toast',
      '.confetti-container',
      '.celebration-confetti',
      '.celebration-flash',
      '.celebration-badge'
    ];
    const counts = {};
    selectors.forEach(sel => {
      const nodes = document.querySelectorAll(sel);
      if (nodes.length) counts[sel] = nodes.length;
      nodes.forEach(n => n.remove());
    });
    return counts;
  });
  const removedSummary = Object.keys(removedCounts);
  if (removedSummary.length) {
    console.log(`  [nettoyage] ${removedSummary.map(s => `${s}×${removedCounts[s]}`).join(', ')}`);
  }

  return page.evaluate(() => ({
    html: document.documentElement.outerHTML,
    title: document.title,
    appTextLength: (document.getElementById('app') ? document.getElementById('app').innerText : '').trim().length
  }));
}

async function main() {
  const puppeteer = require('puppeteer');
  const { baseUrl, sitemapFile } = parseArgs(process.argv.slice(2));
  const routes = readSitemapRoutes(sitemapFile);
  console.log(`Pré-rendu de ${routes.length} route(s) depuis ${baseUrl} (sitemap : ${sitemapFile})`);

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  let succeeded = 0;
  const failedRoutes = [];

  for (const routePath of routes) {
    const url = baseUrl + (routePath === '/' ? '' : routePath);
    try {
      const result = await renderRoute(page, url, routePath);
      if (!isValidRender(result, routePath)) {
        failedRoutes.push(routePath);
        console.warn(`[skip] ${routePath} — contenu insuffisant (title="${result.title}", appTextLength=${result.appTextLength})`);
        continue;
      }
      const outputFile = outputFileForRoute(routePath);
      fs.mkdirSync(path.dirname(outputFile), { recursive: true });
      fs.writeFileSync(outputFile, `<!DOCTYPE html>\n${result.html}\n`, 'utf8');
      if (routePath === '/') {
        // index.html est un fichier SUIVI par git (la coquille SPA vierge), contrairement
        // aux autres sorties qui atterrissent dans des dossiers git-ignorés. En CI c'est
        // voulu ; en local ça salit le dépôt sans prévenir.
        console.warn('');
        console.warn('  *****************************************************************');
        console.warn('  *  ATTENTION : index.html (fichier SUIVI par git) vient d\'être  *');
        console.warn('  *  ÉCRASÉ par le rendu de la route "/".                         *');
        console.warn('  *  Pour restaurer la coquille SPA vierge :                      *');
        console.warn('  *      git checkout -- index.html                               *');
        console.warn('  *****************************************************************');
        console.warn('');
      }
      succeeded++;
    } catch (e) {
      failedRoutes.push(routePath);
      console.warn(`[skip] ${routePath} — erreur : ${e.message}`);
    }
  }

  await browser.close();

  const failureRatio = failedRoutes.length / routes.length;
  console.log(`Terminé : ${succeeded} générée(s), ${failedRoutes.length} ignorée(s) sur ${routes.length}.`);

  // Bilan par classe de route. Le ratio global seul est trop grossier : les pages module
  // représentent l'écrasante majorité des routes, donc 20% d'échec « acceptable » peut
  // masquer l'échec de TOUTES les pages à forte valeur (la home, les hubs) sans faire
  // rougir le build.
  const totalsByClass = {};
  routes.forEach(r => {
    const c = routeClass(r);
    totalsByClass[c] = totalsByClass[c] || { total: 0, failed: 0 };
    totalsByClass[c].total++;
  });
  failedRoutes.forEach(r => { totalsByClass[routeClass(r)].failed++; });

  console.log('Bilan par classe de route :');
  Object.keys(totalsByClass).sort().forEach(c => {
    const { total, failed } = totalsByClass[c];
    console.log(`  ${c} : ${total - failed}/${total} générée(s)${failed ? ` — ${failed} en échec` : ''}`);
  });

  if (failureRatio > MAX_FAILURE_RATIO) {
    console.error(`Taux d'échec ${(failureRatio * 100).toFixed(0)}% > seuil ${MAX_FAILURE_RATIO * 100}% — échec systémique suspecté.`);
    console.error(`Routes en échec : ${failedRoutes.join(', ')}`);
    process.exitCode = 1;
  }

  // Règle stricte, en plus du ratio global : aucune tolérance hors pages module. Ces
  // routes-là se comptent sur les doigts d'une main, et '/' est en prime la page servie
  // par le rewrite `**` pour toute URL absente du sitemap.
  const criticalFailures = failedRoutes.filter(r => isZeroToleranceClass(routeClass(r)));
  if (criticalFailures.length > 0) {
    console.error(`${criticalFailures.length} route(s) hors /module/* en échec — aucune tolérance sur ces pages : ${criticalFailures.join(', ')}`);
    process.exitCode = 1;
  }
}

module.exports = { root, parseArgs, parseSitemapXml, outputFileForRoute, isValidRender, routeClass, isZeroToleranceClass };

if (require.main === module) {
  main().catch(e => {
    console.error(e);
    process.exitCode = 1;
  });
}
