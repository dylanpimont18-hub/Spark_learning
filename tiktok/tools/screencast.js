/* =========================================================
   Spark Learning – tiktok/tools/screencast.js
   Capture animee du site pour servir de fond aux videos TikTok.

   On ne passe pas par Page.startScreencast : ses trames arrivent
   quand la page change, a un rythme irregulier, alors que le montage
   attend une cadence fixe. On pilote donc nous-memes le defilement et
   on prend une capture par trame. C'est plus lent, mais chaque trame
   est a la position voulue, et le nombre de trames est exact.

   Deux modes de tournage :
     - une ou deux URL avec une bascule (videos de modules) ;
     - un PLAN de N segments dates (interviews), calcule cote Python
       par capture.plan_segments() et passe en JSON. Le decoupage vit
       la-bas parce qu'il s'y teste sans lancer un navigateur.

   Usage :
     node tiktok/tools/screencast.js --url https://sparklearning.fr/module/6e-fractions/cours \
          --duree 22 --fps 15 --sortie ./.travail/frames [--bascule 0.72 --url2 <url>]
     node tiktok/tools/screencast.js --plan plan.json --duree 58 --fps 12 \
          --sortie ./.travail/frames --vw 1100 --vh 620 --echelle 0.8 --bureau
   ========================================================= */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

/* Un telephone realiste : le site sert sa mise en page mobile.
   L'echelle est choisie par l'appelant pour que la capture sorte
   EXACTEMENT a la taille de la fenetre du mockup — redimensionner
   333 images au montage coute plus cher que tout le reste. */
const VIEWPORT_LARGEUR = 540;
const VIEWPORT_HAUTEUR = 960;

const ATTENTE_ROUTE_MS = 15000;

/* Chrome d'UI ephemere qui n'a rien a faire dans une capture
   (banniere RGPD, toasts, confettis) — meme liste que
   scripts/prerender.js, plus les emplacements publicitaires.

   Ceux-ci sont a retirer dans les deux etats : le placeholder
   « Emplacement publicitaire (exemple) » est ridicule dans une video
   de presentation, et une vraie annonce AdSense n'y a pas davantage sa
   place — on ne fait pas la promotion du site en filmant la publicite
   de quelqu'un d'autre. */
const A_SUPPRIMER = [
  '#consent-banner',
  '.toast',
  '.confetti-container',
  '.celebration-confetti',
  '.celebration-flash',
  '.celebration-badge',
  '.ad-slot-placeholder',
  'ins.adsbygoogle',
  /* Bandeau cookies de Shopify, sur la boutique. Injecte par l'API
     Customer Privacy une a deux secondes APRES le chargement : le
     retirer une seule fois ne suffit pas, d'ou la regle CSS posee en
     plus du retrait (voir preparer()). */
  '#shopify-pc__banner',
  '#shopify-pc__prefs'
];

function args() {
  const a = {};
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) a[argv[i].slice(2)] = argv[i + 1];
  }
  return a;
}

/* Defilement doux : une vitesse constante trahit la machine. */
function adouci(t) {
  return 0.5 - Math.cos(Math.PI * Math.min(Math.max(t, 0), 1)) / 2;
}

async function preparer(page, url) {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  try {
    await page.waitForFunction('window.__sparkRouteReady === true', { timeout: ATTENTE_ROUTE_MS });
  } catch (e) {
    /* Le signal n'existe pas sur toutes les routes : on continue,
       networkidle2 suffit alors a garantir un rendu complet. */
  }
  await page.evaluate((selecteurs) => {
    selecteurs.forEach(sel => document.querySelectorAll(sel).forEach(n => n.remove()));
    const style = document.createElement('style');
    style.textContent = [
      /* Les animations d'apparition figeraient des elements a moitie
         visibles selon l'instant de la capture. */
      '*,*::before,*::after{animation-duration:0s !important;transition-duration:0s !important}',
      /* Le retrait ci-dessus ne vaut que pour ce qui existe DEJA. Le
         bandeau cookies de Shopify arrive une a deux secondes plus
         tard, en plein milieu du plan. Une regle CSS, elle, s'applique
         aussi a ce qui sera injecte ensuite. */
      selecteurs.join(',') + '{display:none !important}'
    ].join('\n');
    document.head.appendChild(style);
    window.scrollTo(0, 0);
  }, A_SUPPRIMER);
  await new Promise(r => setTimeout(r, 350));
}

/* Tournage sur plan : chaque segment a son URL et ses bornes en
   secondes. On ne navigue qu'aux changements de segment, et le
   defilement repart de zero a chaque fois — un segment est un plan,
   pas la suite du precedent. */
async function capturerPlan(page, plan, total, duree, fps, sortie) {
  let courant = -1;

  for (let i = 0; i < total; i++) {
    const instant = total === 1 ? 0 : (i / fps);
    let index = plan.findIndex(s => instant < s.fin);
    if (index < 0) index = plan.length - 1;

    if (index !== courant) {
      await preparer(page, plan[index].url);
      courant = index;
    }

    const segment = plan[index];
    const etendue = Math.max(0.001, segment.fin - segment.debut);
    const avancement = Math.min(1, Math.max(0, (instant - segment.debut) / etendue));

    await page.evaluate((progression, plafond) => {
      const max = Math.max(0, document.body.scrollHeight - window.innerHeight);
      window.scrollTo(0, max * plafond * progression);
    }, adouci(avancement), typeof segment.defilement === 'number' ? segment.defilement : 0.85);

    const nom = path.join(sortie, 'f-' + String(i).padStart(5, '0') + '.jpg');
    await page.screenshot({ path: nom, type: 'jpeg', quality: 78 });
  }
}

async function capturer(options) {
  const { url, url2, duree, fps, sortie, bascule, echelle, plan, bureau } = options;
  const largeur = options.vw || VIEWPORT_LARGEUR;
  const hauteur = options.vh || VIEWPORT_HAUTEUR;
  const viewport = {
    width: largeur,
    height: hauteur,
    deviceScaleFactor: echelle,
    isMobile: !bureau,
    hasTouch: !bureau
  };
  fs.mkdirSync(sortie, { recursive: true });
  for (const f of fs.readdirSync(sortie)) fs.unlinkSync(path.join(sortie, f));

  const navigateur = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1']
  });

  try {
    const page = await navigateur.newPage();
    await page.setViewport(viewport);

    const total = Math.max(1, Math.ceil(duree * fps));

    if (plan) {
      await capturerPlan(page, plan, total, duree, fps, sortie);
      console.log(JSON.stringify({ trames: total, fps, dossier: sortie, segments: plan.length,
        taille: [Math.round(largeur * echelle), Math.round(hauteur * echelle)] }));
      return;
    }

    await preparer(page, url);
    let bascule_faite = false;

    for (let i = 0; i < total; i++) {
      const t = total === 1 ? 0 : i / (total - 1);

      /* Changement de page a mi-parcours : la capture est mise en
         pause pendant la navigation, donc aucune trame blanche. */
      if (url2 && !bascule_faite && t >= bascule) {
        await preparer(page, url2);
        bascule_faite = true;
      }

      /* Le defilement repart de zero apres la bascule. */
      const debut_phase = bascule_faite ? bascule : 0;
      const fin_phase = bascule_faite ? 1 : (url2 ? bascule : 1);
      const avancement = fin_phase > debut_phase ? (t - debut_phase) / (fin_phase - debut_phase) : 0;

      await page.evaluate((progression) => {
        const max = Math.max(0, document.body.scrollHeight - window.innerHeight);
        window.scrollTo(0, max * 0.85 * progression);
      }, adouci(avancement));

      const nom = path.join(sortie, 'f-' + String(i).padStart(5, '0') + '.jpg');
      await page.screenshot({ path: nom, type: 'jpeg', quality: 72 });
    }

    console.log(JSON.stringify({ trames: total, fps, dossier: sortie, bascule: bascule_faite,
      taille: [Math.round(VIEWPORT_LARGEUR * echelle), Math.round(VIEWPORT_HAUTEUR * echelle)] }));
  } finally {
    await navigateur.close();
  }
}

if (require.main === module) {
  const a = args();
  if ((!a.url && !a.plan) || !a.duree || !a.sortie) {
    console.error('usage : (--url <url> | --plan <fichier.json>) --duree <secondes> --sortie <dossier>'
      + ' [--fps 12] [--echelle 1.148] [--url2 <url> --bascule 0.72] [--vw 1100 --vh 620 --bureau]');
    process.exit(1);
  }
  capturer({
    url: a.url,
    url2: a.url2 || null,
    plan: a.plan ? JSON.parse(fs.readFileSync(a.plan, 'utf8')) : null,
    bureau: 'bureau' in a,
    vw: a.vw ? parseInt(a.vw, 10) : null,
    vh: a.vh ? parseInt(a.vh, 10) : null,
    duree: parseFloat(a.duree),
    fps: parseInt(a.fps || '15', 10),
    sortie: a.sortie,
    bascule: parseFloat(a.bascule || '0.72'),
    echelle: parseFloat(a.echelle || '2')
  }).catch(e => {
    console.error('capture impossible : ' + e.message);
    process.exit(1);
  });
}

module.exports = { capturer };
