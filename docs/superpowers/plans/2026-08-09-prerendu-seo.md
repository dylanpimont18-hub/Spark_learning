# Pré-rendu statique pour l'indexation Google — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire en sorte que le HTML brut renvoyé pour chaque URL publique du site contienne déjà le vrai contenu (titre, meta, corps du cours), sans dépendre de l'exécution JS par Google, pour corriger le fait que 216/220 pages restent "Détectée, actuellement non indexée" dans Search Console.

**Architecture:** Le pipeline de déploiement Firebase Hosting passe de 1 à 2 phases. Phase 1 : déploiement dynamique inchangé (le site reste toujours pleinement fonctionnel après cette étape). Phase 2 : un script Node (`scripts/prerender.js`) pilote Puppeteer pour visiter chaque URL de `sitemap.xml` sur le site fraîchement déployé, capturer le HTML une fois le contenu réel rendu, et écrire ce HTML dans l'arborescence de fichiers statiques correspondant à chaque route. Un second déploiement (Phase 2b) envoie ces fichiers, qui priment sur la règle de rewrite SPA pour leurs routes exactes (comportement par défaut de Firebase Hosting).

**Tech Stack:** Node.js (déjà utilisé pour `scripts/`), Puppeteer (nouvelle devDependency npm, premier `package.json` du projet, scope strictement limité à ce script de build CI), GitHub Actions (workflow existant `firebase-hosting-merge.yml`), Firebase Hosting.

**Spec:** `docs/superpowers/specs/2026-08-09-prerendu-seo-design.md`

## Global Constraints

- Le site ne doit jamais devenir indisponible à cause de ce chantier : la Phase 1 (déploiement dynamique) doit toujours réussir et rendre le site pleinement fonctionnel avant que le pré-rendu ne démarre.
- La dépendance npm `puppeteer` est strictement scopée à ce script de build CI — jamais requise pour développer ou exécuter l'application elle-même (qui reste 100% vanilla JS sans build, voir `CLAUDE.md`).
- Aucun fichier généré par le pré-rendu (dossiers de routes, `index.html` ré-écrit) n'est commité dans git — régénéré à chaque run CI.
- Source unique des URLs à pré-rendre : `sitemap.xml` (jamais de liste dupliquée dans le script).
- Garde-fou anti-régression : si plus de 20% des pages échouent la vérification de contenu, le job échoue bruyamment plutôt que de déployer silencieusement un pré-rendu dégradé.
- Les modules verrouillés/en maintenance peuvent apparaître avec leur contenu complet dans le HTML statique généré (décision actée avec l'utilisateur — le verrouillage sert d'indicateur UI, pas de protection de contenu confidentiel).

---

### Task 1: Scaffolding npm (package.json, .gitignore)

**Files:**
- Create: `package.json`
- Create: `package-lock.json` (généré par `npm install`, à committer)
- Modify: `.gitignore`

**Interfaces:**
- Produces: `node_modules/puppeteer` installé et importable via `require('puppeteer')` dans les tâches suivantes.

- [ ] **Step 1: Créer `package.json`**

```json
{
  "name": "spark-learning-build-tools",
  "private": true,
  "description": "Outils de build CI uniquement (pré-rendu SEO). L'application elle-même reste 100% vanilla JS sans build — voir CLAUDE.md.",
  "devDependencies": {
    "puppeteer": "^25.0.0"
  }
}
```

- [ ] **Step 2: Mettre à jour `.gitignore`**

Ajouter ces lignes à la fin du fichier `.gitignore` existant :

```
node_modules/
/module/
/modules/
/levels/
/subjects/
/confidentialite/
/scripts/fixtures/
```

(Ces dossiers de routes n'existent pas aujourd'hui dans le repo — ce sont les emplacements où `scripts/prerender.js` écrirait des fichiers s'il était lancé en local par erreur. `index.html` lui-même reste suivi par git : voir la procédure de restauration au Task 3.)

- [ ] **Step 3: Installer et vérifier**

Run: `npm install`

Expected: la commande réussit, un dossier `node_modules/puppeteer` apparaît, et `package-lock.json` est créé à la racine.

Vérifier que git ignore bien `node_modules/` :

Run: `git status`
Expected: `node_modules/` n'apparaît PAS dans la liste des fichiers non suivis ; `package.json`, `package-lock.json` et `.gitignore` apparaissent comme nouveaux/modifiés.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .gitignore
git commit -m "chore(build): ajoute puppeteer en devDependency pour le pré-rendu SEO (scope CI uniquement)"
```

---

### Task 2: `scripts/prerender.js` — fonctions pures + tests

**Files:**
- Create: `scripts/test-prerender.js`
- Create: `scripts/prerender.js`

**Interfaces:**
- Consumes: `puppeteer` (Task 1), rien d'autre en dehors des modules cœur Node (`fs`, `path`).
- Produces (exports de `scripts/prerender.js`, utilisés par `scripts/test-prerender.js` et par la Phase 2 CI en Task 4) :
  - `root: string` — racine absolue du repo
  - `parseArgs(argv: string[]): { baseUrl: string, sitemapFile: string }`
  - `parseSitemapXml(xml: string): string[]` — retourne des chemins de route (`/`, `/module/xxx/cours`, ...)
  - `outputFileForRoute(routePath: string): string` — chemin de fichier absolu
  - `isValidRender(result: { title: string, appTextLength: number }, routePath: string): boolean`
  - `main(): Promise<void>` (utilisé uniquement en CLI, pas testé unitairement — voir Task 3)

- [ ] **Step 1: Écrire les tests (ils doivent échouer, `scripts/prerender.js` n'existe pas encore)**

Créer `scripts/test-prerender.js` :

```js
/* =========================================================
   Spark Learning – scripts/test-prerender.js
   Vérifie les fonctions pures de scripts/prerender.js
   (aucune dépendance réseau/navigateur ici).
   Lancer : node scripts/test-prerender.js
   ========================================================= */
'use strict';
const assert = require('assert');
const path = require('path');
const {
  root,
  parseArgs,
  parseSitemapXml,
  outputFileForRoute,
  isValidRender
} = require('./prerender');

// parseArgs
{
  const defaults = parseArgs([]);
  assert.strictEqual(defaults.baseUrl, 'https://sparklearning.fr');
  assert.strictEqual(defaults.sitemapFile, path.join(root, 'sitemap.xml'));

  const custom = parseArgs(['--base-url', 'https://preview.example.com/', '--sitemap-file', 'scripts/fixtures/verify-sitemap.xml']);
  assert.strictEqual(custom.baseUrl, 'https://preview.example.com', 'la barre oblique finale doit être retirée');
  assert.strictEqual(custom.sitemapFile, path.resolve('scripts/fixtures/verify-sitemap.xml'));
}
console.log('OK parseArgs');

// parseSitemapXml
{
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sparklearning.fr/</loc></url>
  <url><loc>https://sparklearning.fr/module/6e-fractions/cours</loc></url>
  <url><loc>https://sparklearning.fr/modules/maths/1</loc></url>
</urlset>`;
  const routes = parseSitemapXml(xml);
  assert.deepStrictEqual(routes, ['/', '/module/6e-fractions/cours', '/modules/maths/1']);

  assert.throws(() => parseSitemapXml('<urlset></urlset>'), /Aucune URL/);
}
console.log('OK parseSitemapXml');

// outputFileForRoute
{
  assert.strictEqual(path.relative(root, outputFileForRoute('/')), 'index.html');
  assert.strictEqual(
    path.relative(root, outputFileForRoute('/module/6e-fractions/cours')),
    path.join('module', '6e-fractions', 'cours', 'index.html')
  );
  assert.strictEqual(
    path.relative(root, outputFileForRoute('/modules/maths/1/')),
    path.join('modules', 'maths', '1', 'index.html'),
    'une barre oblique finale ne doit pas créer de segment de dossier vide'
  );
}
console.log('OK outputFileForRoute');

// isValidRender
{
  assert.strictEqual(
    isValidRender({ title: 'Spark Learning', appTextLength: 500 }, '/'),
    true,
    'la home page garde légitimement le titre générique'
  );
  assert.strictEqual(
    isValidRender({ title: 'Spark Learning', appTextLength: 500 }, '/module/6e-fractions/cours'),
    false,
    'un titre générique sur une page module = rendu manqué'
  );
  assert.strictEqual(
    isValidRender({ title: '6e — Fractions — Spark Learning', appTextLength: 40 }, '/module/6e-fractions/cours'),
    false,
    'contenu trop court malgré un bon titre'
  );
  assert.strictEqual(
    isValidRender({ title: '6e — Fractions — Spark Learning', appTextLength: 500 }, '/module/6e-fractions/cours'),
    true
  );
}
console.log('OK isValidRender');

console.log('Tous les tests scripts/test-prerender.js sont passés.');
```

- [ ] **Step 2: Lancer les tests pour vérifier l'échec**

Run: `node scripts/test-prerender.js`
Expected: FAIL — `Error: Cannot find module './prerender'`

- [ ] **Step 3: Écrire `scripts/prerender.js`**

```js
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
```

- [ ] **Step 4: Lancer les tests pour vérifier le succès**

Run: `node scripts/test-prerender.js`
Expected: PASS — les 4 blocs affichent `OK ...` et la ligne finale `Tous les tests scripts/test-prerender.js sont passés.` apparaît, aucune erreur.

- [ ] **Step 5: Commit**

```bash
git add scripts/prerender.js scripts/test-prerender.js
git commit -m "feat(seo): scripts/prerender.js — fonctions pures de routage + tests"
```

---

### Task 3: Vérification d'intégration (Puppeteer réel, serveur local)

Cette tâche ne modifie pas le code de production sauf si un bug est découvert. Elle prouve que `main()` (Puppeteer + orchestration, non testé unitairement en Task 2) fonctionne réellement, en utilisant le serveur statique de dev déjà présent dans le repo (`scripts/tmp-static-server.js`) plutôt que de toucher `sparklearning.fr`.

**Files:**
- Create (temporaire, gitignoré) : `scripts/fixtures/verify-sitemap.xml`
- Modify (si un bug est trouvé) : `scripts/prerender.js`

- [ ] **Step 1: Démarrer le serveur statique local dans un terminal séparé**

Run (laisser tourner en arrière-plan) : `node scripts/tmp-static-server.js 5177`
Expected: `Static server on http://localhost:5177`

- [ ] **Step 2: Créer une petite sitemap de test**

Créer `scripts/fixtures/verify-sitemap.xml` (3 routes réelles et variées : home, page de listing, page de module) :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sparklearning.fr/</loc></url>
  <url><loc>https://sparklearning.fr/subjects</loc></url>
  <url><loc>https://sparklearning.fr/module/6e-fractions/cours</loc></url>
</urlset>
```

- [ ] **Step 3: Lancer le pré-rendu contre le serveur local**

Run: `node scripts/prerender.js --base-url http://localhost:5177 --sitemap-file scripts/fixtures/verify-sitemap.xml`

Expected: le script se connecte au vrai Firebase (Auth/Firestore) en arrière-plan (production, lecture seule, comportement invité normal) mais sert les fichiers statiques depuis `localhost:5177`. Sortie attendue :
```
Pré-rendu de 3 route(s) depuis http://localhost:5177 (sitemap : .../scripts/fixtures/verify-sitemap.xml)
Terminé : 3 générée(s), 0 ignorée(s) sur 3.
```

- [ ] **Step 4: Si des routes sont ignorées, diagnostiquer avant de continuer**

Si la sortie montre des lignes `[skip]` :
- Un message d'erreur réseau/timeout → Puppeteer n'a pas pu joindre `localhost:5177` (le serveur du Step 1 tourne-t-il toujours ?) ou pas pu joindre les services Firebase réels (connexion internet requise).
- `appTextLength` proche de 0 → le contenu ne s'est jamais affiché avant le timeout ; augmenter `CONTENT_WAIT_TIMEOUT_MS` dans `scripts/prerender.js` et réessayer.
- Corriger, puis relancer le Step 3 jusqu'à obtenir `0 ignorée(s)`.

- [ ] **Step 5: Vérifier le contenu des fichiers générés**

Run (bash) :
```bash
ls -la index.html module/6e-fractions/cours/index.html subjects/index.html
grep -o '<title>[^<]*</title>' module/6e-fractions/cours/index.html
grep -o '<title>[^<]*</title>' subjects/index.html
```

Expected:
- Les 3 fichiers existent.
- `module/6e-fractions/cours/index.html` fait significativement plus de 11 Ko (taille du `index.html` source d'origine) — le contenu réel du cours a bien été inliné.
- Le `<title>` de `module/6e-fractions/cours/index.html` contient le nom du module (pas juste "Spark Learning").
- Le `<title>` de `subjects/index.html` contient "Matières" (pas juste "Spark Learning").

- [ ] **Step 6: Nettoyer — remettre le working tree dans l'état d'origine**

`index.html` est un fichier suivi par git (contrairement aux dossiers `module/`, `subjects/`, etc. qui sont neufs et gitignorés) : le pré-rendu l'a réécrit localement, il faut le restaurer explicitement.

```bash
git checkout -- index.html
rm -rf module subjects scripts/fixtures
git status
```

Expected: `git status` ne montre plus aucune modification liée à ce test (à part un éventuel correctif fait au Step 4).

- [ ] **Step 7: Commit (seulement si un correctif a été fait au Step 4)**

```bash
git add scripts/prerender.js
git commit -m "fix(seo): ajustement scripts/prerender.js suite à la vérification d'intégration"
```

Si aucun correctif n'a été nécessaire, ne rien committer pour cette tâche.

---

### Task 4: Intégration au pipeline CI Firebase

**Files:**
- Modify: `.github/workflows/firebase-hosting-merge.yml`

**Interfaces:**
- Consumes: `scripts/generate-sitemap.js` (existant, inchangé), `scripts/prerender.js` (Task 2, args par défaut = production), `package-lock.json` (Task 1, pour `npm ci`).

- [ ] **Step 1: Réécrire le workflow**

Remplacer tout le contenu de `.github/workflows/firebase-hosting-merge.yml` par :

```yaml
name: Deploy to Firebase Hosting on push to main

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '24'

      - name: Régénérer sitemap.xml
        run: node scripts/generate-sitemap.js

      - name: Déploiement dynamique (Phase 1)
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_SPARK_LEARNING_7D96B }}'
          channelId: live
          projectId: spark-learning-7d96b

      - name: Installer les dépendances de pré-rendu
        run: npm ci

      - name: Pré-rendu SEO (Phase 2)
        run: node scripts/prerender.js

      - name: Déploiement du pré-rendu statique (Phase 2b)
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_SPARK_LEARNING_7D96B }}'
          channelId: live
          projectId: spark-learning-7d96b
```

Notes :
- Si l'étape "Pré-rendu SEO" échoue (seuil de 20% dépassé, `process.exitCode = 1`), GitHub Actions arrête le job par défaut — l'étape "Déploiement du pré-rendu statique" ne s'exécute pas. Le site reste sur l'état déployé en Phase 1 (fonctionnel, juste sans l'amélioration SEO pour ce déploiement).
- Si Chrome/Puppeteer échoue à démarrer sur le runner `ubuntu-latest` (librairies système manquantes), le message d'erreur de `puppeteer.launch()` l'indiquera explicitement dans les logs CI — à diagnostiquer à ce moment-là plutôt que d'ajouter des dépendances système par anticipation non vérifiée.

- [ ] **Step 2: Relecture manuelle**

Cette tâche ne peut pas être testée localement (dépend de secrets GitHub Actions et du vrai déploiement Firebase). Relire le YAML ligne par ligne pour l'indentation (2 espaces, cohérente avec l'original) avant de committer.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/firebase-hosting-merge.yml
git commit -m "ci(seo): ajoute la phase de pré-rendu statique au pipeline de déploiement"
```

---

### Task 5: Documentation (CLAUDE.md, CODEBASE_MAP.md)

**Files:**
- Modify: `CLAUDE.md`
- Modify: `CODEBASE_MAP.md`

- [ ] **Step 1: Documenter l'exception npm dans `CLAUDE.md`**

Chercher cette ligne (section 1) :
```
- **Vanilla JS SPA** : Aucun bundler, pas de build, pas de npm. Tout passe par `index.html`.
```
La remplacer par :
```
- **Vanilla JS SPA** : Aucun bundler, pas de build, pas de npm. Tout passe par `index.html`. **Exception unique et scopée** : `package.json`/`puppeteer` existent pour `scripts/prerender.js` (pré-rendu SEO en CI, voir section 3bis) — jamais requis pour développer ou exécuter l'app elle-même.
```

- [ ] **Step 2: Mettre à jour l'étape sitemap dans la section workflow**

Chercher cette ligne (section 3, étape 4) :
```
4. Régénérer `sitemap.xml` avec `node scripts/generate-sitemap.js` (lit directement `js/loader.js`, aucune liste à maintenir à la main).
```
La remplacer par :
```
4. `sitemap.xml` est régénéré automatiquement à chaque déploiement (voir `.github/workflows/firebase-hosting-merge.yml`) — pas d'action manuelle nécessaire. Pour le régénérer manuellement en local : `node scripts/generate-sitemap.js` (lit directement `js/loader.js`, aucune liste à maintenir à la main).
```

- [ ] **Step 3: Ajouter une entrée dans `CODEBASE_MAP.md`**

Ajouter, juste après l'entrée existante `## scripts/generate-sitemap.js` :

```
## scripts/prerender.js
Pré-rend en HTML statique chaque URL de `sitemap.xml` via Puppeteer, pour l'indexation Google (voir `docs/superpowers/specs/2026-08-09-prerendu-seo-design.md`).
- `parseSitemapXml(xml)` — extrait les chemins de route des balises `<loc>`, indépendamment du host (utile pour tester contre un serveur local)
- `outputFileForRoute(routePath)` — chemin de fichier statique correspondant à une route (`/module/x/cours` → `module/x/cours/index.html`)
- `isValidRender(result, routePath)` — garde-fou de contenu (titre non générique + longueur minimale) avant d'accepter un rendu
- Usage CI : `node scripts/prerender.js` (voir `.github/workflows/firebase-hosting-merge.yml`) ; usage test local : `--base-url` + `--sitemap-file` (voir `scripts/test-prerender.js`)
```

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md CODEBASE_MAP.md
git commit -m "docs: documente l'exception npm et scripts/prerender.js"
```

---

## Après l'implémentation (hors scope de ce plan, action manuelle utilisateur)

Une fois ce plan mergé sur `main` et un déploiement réel effectué :
1. Search Console → Inspection de l'URL sur quelques pages → vérifier que le HTML brut (pas le rendu) contient déjà le contenu.
2. Resoumettre `sitemap.xml` dans Search Console et surveiller la progression du statut "Détectée, non indexée" sur les jours suivants.

Ces vérifications nécessitent un accès Search Console que je n'ai pas — à faire par vous après déploiement.
