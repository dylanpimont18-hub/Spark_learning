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
    }
  }
  return args;
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
  return clean === '' ? path.join(root, 'index.html') : path.join(root, clean, 'index.html');
}

function isValidRender(result, routePath) {
  if (result.appTextLength < MIN_APP_TEXT_LENGTH) return false;
  if (routePath !== '/' && result.title.trim() === GENERIC_TITLE) return false;
  return true;
}

async function renderRoute(page, url) {
  // 'domcontentloaded' plutôt que 'networkidle0' : l'app ouvre une connexion
  // Firestore temps réel (bannière d'annonce) qui ne se ferme jamais, donc
  // 'networkidle0' n'atteindrait jamais zéro connexion active et timeout à tous les coups.
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });

  await page.waitForFunction(
    () => {
      const app = document.getElementById('app');
      return !!(app && app.innerText && app.innerText.trim().length > 50);
    },
    { timeout: CONTENT_WAIT_TIMEOUT_MS }
  ).catch(() => { /* on laisse isValidRender trancher sur le contenu obtenu */ });

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
      const result = await renderRoute(page, url);
      if (!isValidRender(result, routePath)) {
        failedRoutes.push(routePath);
        console.warn(`[skip] ${routePath} — contenu insuffisant (title="${result.title}", appTextLength=${result.appTextLength})`);
        continue;
      }
      const outputFile = outputFileForRoute(routePath);
      fs.mkdirSync(path.dirname(outputFile), { recursive: true });
      fs.writeFileSync(outputFile, `<!DOCTYPE html>\n${result.html}\n`, 'utf8');
      succeeded++;
    } catch (e) {
      failedRoutes.push(routePath);
      console.warn(`[skip] ${routePath} — erreur : ${e.message}`);
    }
  }

  await browser.close();

  const failureRatio = failedRoutes.length / routes.length;
  console.log(`Terminé : ${succeeded} générée(s), ${failedRoutes.length} ignorée(s) sur ${routes.length}.`);

  if (failureRatio > MAX_FAILURE_RATIO) {
    console.error(`Taux d'échec ${(failureRatio * 100).toFixed(0)}% > seuil ${MAX_FAILURE_RATIO * 100}% — échec systémique suspecté.`);
    console.error(`Routes en échec : ${failedRoutes.join(', ')}`);
    process.exitCode = 1;
  }
}

module.exports = { root, parseArgs, parseSitemapXml, outputFileForRoute, isValidRender };

if (require.main === module) {
  main().catch(e => {
    console.error(e);
    process.exitCode = 1;
  });
}
