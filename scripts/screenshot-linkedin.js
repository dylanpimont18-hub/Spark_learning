// Script ponctuel : capture un screenshot du module "cours" pour chaque post LinkedIn
// et l'enregistre dans LinkedIn/<jour>/screenshot.png
// Usage : node scripts/screenshot-linkedin.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = 'http://localhost:5177';
const LINKEDIN_DIR = path.join(__dirname, '..', 'LinkedIn');

// jour-folder -> { moduleId, tab } ; tab par défaut 'cours'. moduleId=null => page d'accueil.
const DAYS = [
  { folder: '01-1er-aout', moduleId: 'bts-prep-si-unites' },
  { folder: '02-2-aout', moduleId: 'si-bts-hydraulique' },
  { folder: '03-3-aout', moduleId: '6e-fractions' },
  { folder: '04-4-aout', moduleId: 'complexes' },
  { folder: '05-5-aout', moduleId: 'si-bts-automatique' },
  { folder: '06-6-aout', moduleId: 'bts-prep-logarithme' },
  { folder: '07-7-aout', moduleId: '1re-derivation' },
  { folder: '08-8-aout', moduleId: 'si-2nde-mecanique-base' },
  { folder: '09-9-aout', moduleId: '5e-priorites-operations' },
  { folder: '10-10-aout', moduleId: 'eq-diff-2' },
  { folder: '11-11-aout', moduleId: 'si-bts-electrotechnique' },
  { folder: '12-12-aout', moduleId: 'bts-prep-analyse-dim' },
  { folder: '13-13-aout', moduleId: '4e-pythagore' },
  { folder: '14-14-aout', moduleId: 'si-1re-cinematique' },
  { folder: '15-15-aout', moduleId: null },
  { folder: '16-16-aout', moduleId: 'bts-loi-normale' },
  { folder: '17-17-aout', moduleId: 'si-bts-gestion-energie' },
  { folder: '18-18-aout', moduleId: 'bts-prep-proportionnalite' },
  { folder: '19-19-aout', moduleId: '3e-identites-remarquables' },
  { folder: '20-20-aout', moduleId: 'si-tle-asservis-pid' },
  { folder: '21-21-aout', moduleId: 'tle-logarithme' },
  { folder: '22-22-aout', moduleId: 'statistiques' },
  { folder: '23-23-aout', moduleId: 'si-bts-cao' },
  { folder: '24-24-aout', moduleId: 'bts-prep-equations' },
  { folder: '25-25-aout', moduleId: '3e-thales' },
  { folder: '26-26-aout', moduleId: 'si-bts-mecanique-solides' },
  { folder: '27-27-aout', moduleId: 'bts-derivation-appliquee' },
  { folder: '28-28-aout', moduleId: '1re-suites' },
  { folder: '29-29-aout', moduleId: 'bts-prep-donnees-techniques' },
  { folder: '30-30-aout', moduleId: 'bts-integrales-appliquees' },
  { folder: '31-31-aout', moduleId: null },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const failures = [];

  // Ferme la bannière de consentement une fois pour toutes (persiste en localStorage)
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  try {
    await page.click('.consent-btn-accept', { timeout: 5000 });
  } catch (e) {
    console.log('Pas de bannière de consentement trouvée (déjà acceptée ?)');
  }

  for (const day of DAYS) {
    const url = day.moduleId ? `${BASE}/module/${day.moduleId}/cours` : `${BASE}/`;
    const outDir = path.join(LINKEDIN_DIR, day.folder);
    const outFile = path.join(outDir, 'screenshot.png');

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      if (day.moduleId) {
        await page.waitForSelector('.cours-content', { timeout: 15000 });
        await page.waitForTimeout(600); // laisser KaTeX finir le rendu
      } else {
        await page.waitForTimeout(800);
      }
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      await page.screenshot({ path: outFile });
      console.log('OK  ', day.folder, '->', url);
    } catch (e) {
      failures.push({ folder: day.folder, url, error: e.message });
      console.log('FAIL', day.folder, '->', url, '::', e.message);
    }
  }

  await browser.close();

  if (failures.length) {
    console.log('\n=== ECHECS ===');
    failures.forEach((f) => console.log(f.folder, f.url, f.error));
    process.exitCode = 1;
  } else {
    console.log('\nToutes les captures sont OK.');
  }
})();
