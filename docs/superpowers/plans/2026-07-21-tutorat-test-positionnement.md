# Test de positionnement (tutorat privé) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let Dylan/Simon send a new tutoring student a link to an adaptive placement test (Maths and/or Physique-Chimie, 6e→BTS), then read a per-theme level report to decide between a remediation plan or following the class syllabus directly.

**Architecture:** Public, unauthenticated client view runs the adaptive "staircase" test entirely in memory (bank fetched from a Cloud Function, no client-side content duplication); a second Cloud Function re-grades server-side from its own bank copy and writes the authoritative result to Firestore; tutors consult results manually inside the existing tutorat privé space (`TutoringHome`/`TutoringStudent`), which stays Firestore-only (no callable functions needed on the tutor side).

**Tech Stack:** Vanilla JS (no bundler), Firebase Firestore + Cloud Functions v2 (`onCall`), Firebase Auth (compat SDK), `node --test` for `functions/`.

**Spec:** `docs/superpowers/specs/2026-07-21-tutorat-test-positionnement-design.md`

## Global Constraints

- Zéro tolérance erreur sur le contenu (français/maths/physique) — même exigence que la Phase 2 générateur IA.
- Décimales françaises avec accolades dans tout contenu pédagogique : `1{,}5`, jamais `1.5`.
- Aucune règle Firestore publique sur `positioningTests` — le seul accès non authentifié passe par les 3 Cloud Functions `onCall`.
- Le client (`js/`) n'a **aucune** suite de tests automatisée dans ce dépôt (pas de bundler/npm à la racine) — seul `functions/` a des tests (`node --test test/*.test.js`, le glob est obligatoire sous Windows/Git Bash). Les tâches côté client sont donc vérifiées manuellement (checklist en Task 27), pas par TDD — comme pour les Phases 1 et 2 déjà en prod.
- Cache-busting : toute tâche qui touche un fichier sous `js/` ou `css/styles.css` doit être suivie, en fin de plan, du bump `?v=21` → `?v=22` sur **toutes** les balises `<script>`/`<link>` locales d'`index.html` (Task 24) — pas de bump partiel.
- ⚠️ **`.git/hooks/post-commit` redéploie automatiquement `firestore.rules` en prod (n'importe quelle branche) dès qu'un commit le modifie.** Prévenir explicitement avant de committer la Task 15 (qui touche ce fichier).
- Palier ↔ classe (échelle utilisée par l'algorithme et le contenu) : `1=6e, 2=5e, 3=4e, 4=3e, 5=2nde, 6=1re, 7=Tle, 8=BTS1, 9=BTS2`.
- Style de code : les fichiers `functions/src/*.js` utilisent `var`/`function` + `module.exports` (jamais ESM). Les fichiers `js/tutoring/`, `js/views/tutoring/` utilisent `var Nom = { méthode: function() {...} }` avec échappement HTML systématique via `_esc()`. Suivre ces conventions à l'identique dans tout nouveau fichier de ces dossiers.

---

## Content Authoring Guide (référencée par les Tasks 3–12)

Chaque thème est un fichier `functions/src/positioningBank/<subject>/<theme-id>.js` :

```js
module.exports = {
  id: 'theme-id',
  label: 'Nom affiché',
  levels: {
    1: [ { id: 'maths-theme-id-1-a', question: '...', options: ['...', '...', '...', '...'], correctIndex: 0 }, { /* ...b */ } ],
    2: [ /* 2 ou 3 questions */ ],
    3: [ /* ... */ ], 4: [ /* ... */ ], 5: [ /* ... */ ],
    6: [ /* ... */ ], 7: [ /* ... */ ], 8: [ /* ... */ ], 9: [ /* ... */ ]
  }
};
```

Règles strictes (vérifiées par `validateTheme`, Task 2) :
- Exactement 9 paliers (clés `1` à `9`), chacun avec **2 ou 3** questions.
- QCM uniquement : `options` = exactement 4 chaînes, `correctIndex` entier 0-3.
- `id` de question unique dans tout le fichier, format `<subject>-<theme-id>-<palier>-<a|b|c>` (ex: `maths-algebre-equations-4-a`).
- Décimales françaises avec accolades (`1{,}5`), jamais `1.5`. KaTeX autorisé dans `question`/`options` (`$...$`), il sera rendu côté client.
- Aucun retour "bonne/mauvaise réponse" n'est jamais affiché pendant le test — la formulation reste neutre, sans ton punitif ni encourageant (ce n'est pas un module pédagogique, c'est une évaluation).
- `correctIndex` n'a pas besoin d'être varié à la main entre les questions (mettre systématiquement la bonne réponse en position 0 est acceptable) : la page publique du test (Task 22) mélange l'ordre des options à l'affichage, donc la position dans le fichier source n'est jamais ce que l'élève voit.
- Le palier doit correspondre à une notion réellement enseignée à ce niveau ; se référer à `contenu.md` / `docs/programmes-maths.md` en cas de doute sur le programme officiel.

**Exemple travaillé complet** (thème `algebre-equations`, paliers 4 et 9 — les deux extrêmes du rubric ci-dessous) :

```js
4: [
  {
    id: 'maths-algebre-equations-4-a',
    question: 'Résoudre l\'équation suivante :<br/><br/>$$3x - 5 = 16$$<br/><br/>Quelle est la valeur de $x$ ?',
    options: ['$x = 7$', '$x = 3{,}67$', '$x = 21$', '$x = 11$'],
    correctIndex: 0
  },
  {
    id: 'maths-algebre-equations-4-b',
    question: 'Un système de deux équations à deux inconnues est donné par :<br/><br/>$$\\begin{cases} x + y = 10 \\\\ x - y = 2 \\end{cases}$$<br/><br/>Quelle est la valeur de $x$ ?',
    options: ['$x = 6$', '$x = 4$', '$x = 8$', '$x = 5$'],
    correctIndex: 0
  }
]
// ...
9: [
  {
    id: 'maths-algebre-equations-9-a',
    question: 'Résoudre l\'équation suivante, où $x$ est réel :<br/><br/>$$2e^{x} - 3 = 7$$<br/><br/>Quelle est la valeur exacte de $x$ ?',
    options: ['$x = \\ln 5$', '$x = \\ln 10$', '$x = 5\\ln 2$', '$x = e^{5}$'],
    correctIndex: 0
  },
  {
    id: 'maths-algebre-equations-9-b',
    question: 'Dans $\\mathbb{C}$, quelle est la solution de l\'équation $z^{2} + 4 = 0$ avec $\\text{Im}(z) > 0$ ?',
    options: ['$z = 2i$', '$z = -2i$', '$z = 2$', '$z = 4i$'],
    correctIndex: 0
  }
]
```

Chaque tâche de contenu (Tasks 3–12) donne le rubric palier→notion spécifique au thème ; le reste des paliers (1, 2, 3, 5, 6, 7, 8) suit le même niveau de rigueur et de format que l'exemple ci-dessus.

**Validation après écriture d'un thème :**
```bash
cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/<subject>/<theme-id>.js')); console.log('OK');"
```
Sortie attendue : `OK`.

---

### Task 1: Algorithme adaptatif par palier (staircase)

**Files:**
- Create: `functions/src/positioningStaircase.js`
- Test: `functions/test/positioningStaircase.test.js`

**Interfaces:**
- Produces: `STAIRCASE_STEPS` (array, 6 entiers), `START_PALIER` (5), `MIN_PALIER` (1), `MAX_PALIER` (9), `LEVEL_LABELS` (array de 9 chaînes `['6e','5e','4e','3e','2nde','1re','Tle','BTS1','BTS2']`), `applyStep(currentPalier, stepIndex, correct)`, `runStaircase(correctFlags)`, `palierToLabel(palier)`.

- [ ] **Step 1: Write the failing tests**

```js
// functions/test/positioningStaircase.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  STAIRCASE_STEPS, START_PALIER, MIN_PALIER, MAX_PALIER, LEVEL_LABELS,
  applyStep, runStaircase, palierToLabel
} = require('../src/positioningStaircase');

test('STAIRCASE_STEPS has 6 steps and LEVEL_LABELS has 9 entries', function () {
  assert.equal(STAIRCASE_STEPS.length, 6);
  assert.equal(LEVEL_LABELS.length, 9);
  assert.equal(START_PALIER, 5);
});

test('runStaircase with all correct answers reaches MAX_PALIER', function () {
  assert.equal(runStaircase([true, true, true, true, true, true]), MAX_PALIER);
});

test('runStaircase with all wrong answers reaches MIN_PALIER', function () {
  assert.equal(runStaircase([false, false, false, false, false, false]), MIN_PALIER);
});

test('runStaircase with alternating answers converges to a mid palier', function () {
  var palier = runStaircase([true, false, true, false, true, false]);
  assert.equal(palier, 7);
});

test('runStaircase throws on wrong-length input', function () {
  assert.throws(function () { runStaircase([true, false]); });
});

test('applyStep clamps at MIN_PALIER and MAX_PALIER', function () {
  assert.equal(applyStep(MIN_PALIER, 0, false), MIN_PALIER);
  assert.equal(applyStep(MAX_PALIER, 0, true), MAX_PALIER);
});

test('palierToLabel maps 1..9 to the school-level scale', function () {
  assert.equal(palierToLabel(1), '6e');
  assert.equal(palierToLabel(4), '3e');
  assert.equal(palierToLabel(9), 'BTS2');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/positioningStaircase.test.js`
Expected: FAIL (`Cannot find module '../src/positioningStaircase'`)

- [ ] **Step 3: Write the implementation**

```js
// functions/src/positioningStaircase.js
var STAIRCASE_STEPS = [4, 2, 1, 1, 1, 1];
var START_PALIER = 5;
var MIN_PALIER = 1;
var MAX_PALIER = 9;
var LEVEL_LABELS = ['6e', '5e', '4e', '3e', '2nde', '1re', 'Tle', 'BTS1', 'BTS2'];

function clampPalier(value) {
  return Math.max(MIN_PALIER, Math.min(MAX_PALIER, value));
}

function applyStep(currentPalier, stepIndex, correct) {
  var step = STAIRCASE_STEPS[stepIndex];
  return clampPalier(currentPalier + (correct ? step : -step));
}

function runStaircase(correctFlags) {
  if (!Array.isArray(correctFlags) || correctFlags.length !== STAIRCASE_STEPS.length) {
    throw new Error('runStaircase attend exactement ' + STAIRCASE_STEPS.length + ' réponses graduées.');
  }
  var palier = START_PALIER;
  for (var i = 0; i < STAIRCASE_STEPS.length; i++) {
    palier = applyStep(palier, i, !!correctFlags[i]);
  }
  return palier;
}

function palierToLabel(palier) {
  return LEVEL_LABELS[clampPalier(palier) - 1];
}

module.exports = {
  STAIRCASE_STEPS: STAIRCASE_STEPS,
  START_PALIER: START_PALIER,
  MIN_PALIER: MIN_PALIER,
  MAX_PALIER: MAX_PALIER,
  LEVEL_LABELS: LEVEL_LABELS,
  applyStep: applyStep,
  runStaircase: runStaircase,
  palierToLabel: palierToLabel
};
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/positioningStaircase.test.js`
Expected: PASS (7/7)

- [ ] **Step 5: Commit**

```bash
git add functions/src/positioningStaircase.js functions/test/positioningStaircase.test.js
git commit -m "feat: add adaptive staircase algorithm for positioning test"
```

---

### Task 2: Schéma et validateur de la banque de questions

**Files:**
- Create: `functions/src/positioningBank/validate.js`
- Test: `functions/test/positioningBank/validate.test.js`

**Interfaces:**
- Consumes: none.
- Produces: `validateQuestion(q, context)`, `validateTheme(theme)`, `validateBank(bank, expectedThemeIds)` — all throw `Error` with a descriptive message on the first violation found, return `undefined` on success.

- [ ] **Step 1: Write the failing tests**

```js
// functions/test/positioningBank/validate.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const { validateQuestion, validateTheme, validateBank } = require('../../src/positioningBank/validate');

function validQuestion(suffix) {
  return { id: 'sub-theme-1-' + suffix, question: 'Q?', options: ['a', 'b', 'c', 'd'], correctIndex: 0 };
}

function validTheme() {
  var levels = {};
  for (var p = 1; p <= 9; p++) {
    levels[p] = [validQuestion('a-' + p), validQuestion('b-' + p)];
    levels[p][0].id = 'sub-theme-' + p + '-a';
    levels[p][1].id = 'sub-theme-' + p + '-b';
  }
  return { id: 'theme', label: 'Thème', levels: levels };
}

test('validateQuestion accepts a well-formed question', function () {
  assert.doesNotThrow(function () { validateQuestion(validQuestion('a'), 'ctx'); });
});

test('validateQuestion rejects missing id', function () {
  var q = validQuestion('a'); q.id = '';
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateQuestion rejects wrong option count', function () {
  var q = validQuestion('a'); q.options = ['a', 'b'];
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateQuestion rejects out-of-range correctIndex', function () {
  var q = validQuestion('a'); q.correctIndex = 4;
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateTheme accepts a well-formed theme with 9 levels', function () {
  assert.doesNotThrow(function () { validateTheme(validTheme()); });
});

test('validateTheme rejects a missing level', function () {
  var theme = validTheme();
  delete theme.levels[9];
  assert.throws(function () { validateTheme(theme); });
});

test('validateTheme rejects a level with only 1 question', function () {
  var theme = validTheme();
  theme.levels[1] = [theme.levels[1][0]];
  assert.throws(function () { validateTheme(theme); });
});

test('validateTheme rejects duplicate question ids', function () {
  var theme = validTheme();
  theme.levels[2][0].id = theme.levels[1][0].id;
  assert.throws(function () { validateTheme(theme); });
});

test('validateBank rejects a bank missing an expected theme', function () {
  var bank = { themes: { theme: validTheme() } };
  assert.throws(function () { validateBank(bank, ['theme', 'other-theme']); });
});

test('validateBank accepts a bank covering all expected themes', function () {
  var bank = { themes: { theme: validTheme() } };
  assert.doesNotThrow(function () { validateBank(bank, ['theme']); });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/positioningBank/validate.test.js`
Expected: FAIL (`Cannot find module '../../src/positioningBank/validate'`)

- [ ] **Step 3: Write the implementation**

```js
// functions/src/positioningBank/validate.js
var REQUIRED_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function validateQuestion(q, context) {
  if (!q || typeof q.id !== 'string' || !q.id) {
    throw new Error(context + ': id de question manquant');
  }
  if (typeof q.question !== 'string' || !q.question.trim()) {
    throw new Error(context + ' (' + q.id + '): champ question manquant');
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(context + ' (' + q.id + '): il faut exactement 4 options');
  }
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) {
    throw new Error(context + ' (' + q.id + '): correctIndex doit être un entier entre 0 et 3');
  }
}

function validateTheme(theme) {
  if (!theme || typeof theme.id !== 'string' || !theme.id) {
    throw new Error('Thème sans id valide');
  }
  if (typeof theme.label !== 'string' || !theme.label) {
    throw new Error(theme.id + ': label manquant');
  }
  if (!theme.levels || typeof theme.levels !== 'object') {
    throw new Error(theme.id + ': levels manquant');
  }

  var seenIds = {};
  REQUIRED_LEVELS.forEach(function (palier) {
    var pool = theme.levels[palier];
    if (!Array.isArray(pool) || pool.length < 2 || pool.length > 3) {
      throw new Error(theme.id + ': palier ' + palier + ' doit contenir 2 ou 3 questions');
    }
    pool.forEach(function (q) {
      validateQuestion(q, theme.id + ' palier ' + palier);
      if (seenIds[q.id]) {
        throw new Error(theme.id + ': id de question dupliqué (' + q.id + ')');
      }
      seenIds[q.id] = true;
    });
  });
}

function validateBank(bank, expectedThemeIds) {
  if (!bank || !bank.themes) {
    throw new Error('Banque invalide : champ themes manquant');
  }
  expectedThemeIds.forEach(function (themeId) {
    if (!bank.themes[themeId]) {
      throw new Error('Thème manquant dans la banque : ' + themeId);
    }
    validateTheme(bank.themes[themeId]);
  });
}

module.exports = {
  validateQuestion: validateQuestion,
  validateTheme: validateTheme,
  validateBank: validateBank
};
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/positioningBank/validate.test.js`
Expected: PASS (10/10)

- [ ] **Step 5: Commit**

```bash
git add functions/src/positioningBank/validate.js functions/test/positioningBank/validate.test.js
git commit -m "feat: add positioning question bank schema validator"
```

---

### Task 3: Contenu Maths — thème Numérique-Calcul

**Files:**
- Create: `functions/src/positioningBank/maths/numerique-calcul.js`

**Interfaces:**
- Consumes: `validateTheme` from Task 2 (used only to check the file after writing it, not imported by the file itself).
- Produces: a module matching the schema in the Content Authoring Guide, `id: 'numerique-calcul'`.

Rubric palier → notion (Numérique-Calcul) :
1=6e nombres décimaux et opérations posées, 2=5e nombres relatifs (addition/soustraction), 3=4e puissances et notation scientifique, 4=3e racines carrées et calcul littéral simple, 5=2nde calcul numérique avec ensembles de nombres (ℕ, ℤ, ℚ, ℝ), 6=1re manipulation d'expressions algébriques complexes (identités remarquables), 7=Tle calculs avec exponentielles et logarithmes simples, 8=BTS1 calcul numérique appliqué (unités SI, précision, chiffres significatifs), 9=BTS2 calcul complexe et matriciel de base.

- [ ] **Step 1: Write the 9 levels (2-3 questions each) following the Content Authoring Guide and the rubric above**

Use the exact schema and worked-example format shown in the Content Authoring Guide. Write all 9 paliers for `id: 'numerique-calcul'`, `label: 'Numérique - Calcul'`.

- [ ] **Step 2: Validate the file**

Run: `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/maths/numerique-calcul.js')); console.log('OK');"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add functions/src/positioningBank/maths/numerique-calcul.js
git commit -m "feat: add positioning bank content — maths numerique-calcul"
```

---

### Task 4: Contenu Maths — thème Algèbre-Équations

**Files:**
- Create: `functions/src/positioningBank/maths/algebre-equations.js`

Rubric palier → notion : 1=6e équations simples type $x+3=7$, 2=5e équations à une étape avec relatifs, 3=4e équations à deux étapes / développement, 4=3e équations produit nul et systèmes simples (voir exemple travaillé), 5=2nde équations et inéquations du premier degré, 6=1re équations du second degré et factorisation, 7=Tle équations avec exponentielle/logarithme, 8=BTS1 systèmes linéaires appliqués, 9=BTS2 équations différentielles et complexes (voir exemple travaillé).

Les paliers 4 et 9 sont déjà entièrement rédigés dans le Content Authoring Guide — les reprendre tels quels dans ce fichier.

- [ ] **Step 1: Write the 9 levels** (`id: 'algebre-equations'`, `label: 'Algèbre - Équations'`) — reprendre les paliers 4 et 9 de l'exemple travaillé, écrire les 7 autres selon le rubric.
- [ ] **Step 2: Validate** — `node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/maths/algebre-equations.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/maths/algebre-equations.js && git commit -m "feat: add positioning bank content — maths algebre-equations"`

---

### Task 5: Contenu Maths — thème Géométrie

**Files:**
- Create: `functions/src/positioningBank/maths/geometrie.js`

Rubric : 1=6e figures planes, périmètres et aires, 2=5e angles et triangles, 3=4e théorème de Pythagore, 4=3e théorème de Thalès et trigonométrie dans le triangle rectangle, 5=2nde géométrie repérée (coordonnées, vecteurs), 6=1re produit scalaire, 7=Tle géométrie dans l'espace, 8=BTS1 trigonométrie appliquée (calculs d'angles/longueurs techniques), 9=BTS2 nombres complexes en géométrie (impédances, forme exponentielle).

- [ ] **Step 1: Write the 9 levels** (`id: 'geometrie'`, `label: 'Géométrie'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/maths/geometrie.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/maths/geometrie.js && git commit -m "feat: add positioning bank content — maths geometrie"`

---

### Task 6: Contenu Maths — thème Fonctions

**Files:**
- Create: `functions/src/positioningBank/maths/fonctions.js`

Rubric : 1=6e proportionnalité, 2=5e proportionnalité avancée et représentation graphique, 3=4e fonctions linéaires et affines (introduction), 4=3e fonctions affines complètes, 5=2nde généralités sur les fonctions, 6=1re dérivation, 7=Tle étude complète de fonctions (limites, asymptotes), 8=BTS1 fonctions usuelles appliquées, 9=BTS2 dérivation et intégration appliquées.

- [ ] **Step 1: Write the 9 levels** (`id: 'fonctions'`, `label: 'Fonctions'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/maths/fonctions.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/maths/fonctions.js && git commit -m "feat: add positioning bank content — maths fonctions"`

---

### Task 7: Contenu Maths — thème Statistiques-Probabilités

**Files:**
- Create: `functions/src/positioningBank/maths/statistiques-probabilites.js`

Rubric : 1=6e moyennes simples, 2=5e effectifs et fréquences, 3=4e statistiques à une variable, 4=3e probabilités simples, 5=2nde statistiques descriptives avancées, 6=1re probabilités conditionnelles, 7=Tle lois de probabilité continues, 8=BTS1 statistiques à deux variables, 9=BTS2 loi normale appliquée.

- [ ] **Step 1: Write the 9 levels** (`id: 'statistiques-probabilites'`, `label: 'Statistiques - Probabilités'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/maths/statistiques-probabilites.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/maths/statistiques-probabilites.js && git commit -m "feat: add positioning bank content — maths statistiques-probabilites"`

---

### Task 8: Contenu Physique-Chimie — thème Mécanique

**Files:**
- Create: `functions/src/positioningBank/physique/mecanique.js`

Rubric : 1=6e notion de mouvement et vitesse simple, 2=5e vitesse et distances parcourues, 3=4e notion de force (le poids), 4=3e principe d'inertie et forces, 5=2nde forces et mouvement (approche qualitative), 6=1re travail d'une force, 7=Tle deuxième loi de Newton (approche quantitative), 8=BTS1 mécanique appliquée (statique, équilibre), 9=BTS2 dynamique appliquée aux systèmes techniques.

- [ ] **Step 1: Write the 9 levels** (`id: 'mecanique'`, `label: 'Mécanique'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/physique/mecanique.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/physique/mecanique.js && git commit -m "feat: add positioning bank content — physique mecanique"`

---

### Task 9: Contenu Physique-Chimie — thème Électricité

**Files:**
- Create: `functions/src/positioningBank/physique/electricite.js`

Rubric : 1=6e circuit simple série/dérivation, 2=5e tension et intensité (notions de base), 3=4e loi d'Ohm (introduction), 4=3e loi d'Ohm et résistances série/parallèle, 5=2nde puissance électrique, 6=1re circuits RC, 7=Tle régimes transitoire et alternatif, 8=BTS1 puissance en régime alternatif, 9=BTS2 impédances complexes.

- [ ] **Step 1: Write the 9 levels** (`id: 'electricite'`, `label: 'Électricité'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/physique/electricite.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/physique/electricite.js && git commit -m "feat: add positioning bank content — physique electricite"`

---

### Task 10: Contenu Physique-Chimie — thème Énergie-Thermique

**Files:**
- Create: `functions/src/positioningBank/physique/energie-thermique.js`

Rubric : 1=6e sources d'énergie, 2=5e formes d'énergie, 3=4e énergie et puissance, 4=3e transformations d'énergie, 5=2nde énergie mécanique, 6=1re transferts thermiques, 7=Tle premier principe de la thermodynamique, 8=BTS1 bilans énergétiques appliqués, 9=BTS2 cycles thermodynamiques (COP, rendement).

- [ ] **Step 1: Write the 9 levels** (`id: 'energie-thermique'`, `label: 'Énergie - Thermique'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/physique/energie-thermique.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/physique/energie-thermique.js && git commit -m "feat: add positioning bank content — physique energie-thermique"`

---

### Task 11: Contenu Physique-Chimie — thème Matière-Chimie

**Files:**
- Create: `functions/src/positioningBank/physique/matiere-chimie.js`

Rubric : 1=6e états de la matière, 2=5e mélanges et corps purs, 3=4e transformations chimiques, 4=3e réactions chimiques et équations bilan, 5=2nde structure atomique et mole, 6=1re concentration et dosages, 7=Tle équilibres acido-basiques, 8=BTS1 chimie appliquée (solutions techniques), 9=BTS2 chimie industrielle appliquée.

- [ ] **Step 1: Write the 9 levels** (`id: 'matiere-chimie'`, `label: 'Matière - Chimie'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/physique/matiere-chimie.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/physique/matiere-chimie.js && git commit -m "feat: add positioning bank content — physique matiere-chimie"`

---

### Task 12: Contenu Physique-Chimie — thème Ondes-Optique

**Files:**
- Create: `functions/src/positioningBank/physique/ondes-optique.js`

Rubric : 1=6e lumière et ombres, 2=5e propagation de la lumière, 3=4e réflexion et réfraction simple, 4=3e lentilles et vision, 5=2nde ondes mécaniques, 6=1re ondes sonores et lumineuses, 7=Tle interférences et diffraction, 8=BTS1 optique appliquée, 9=BTS2 ondes appliquées aux capteurs.

- [ ] **Step 1: Write the 9 levels** (`id: 'ondes-optique'`, `label: 'Ondes - Optique'`).
- [ ] **Step 2: Validate** — `cd functions && node -e "var {validateTheme}=require('./src/positioningBank/validate'); validateTheme(require('./src/positioningBank/physique/ondes-optique.js')); console.log('OK');"` → `OK`
- [ ] **Step 3: Commit** — `git add functions/src/positioningBank/physique/ondes-optique.js && git commit -m "feat: add positioning bank content — physique ondes-optique"`

---

### Task 13: Assemblage de la banque (maths.js, physique.js, getBank)

**Files:**
- Create: `functions/src/positioningBank/maths/index.js`
- Create: `functions/src/positioningBank/physique/index.js`
- Create: `functions/src/positioningBank/index.js`
- Test: `functions/test/positioningBank/index.test.js`

**Interfaces:**
- Consumes: the 10 theme files from Tasks 3–12, `validateBank` from Task 2.
- Produces: `getBank(subject)` → `{ themes: { themeId: theme, ... } }`; `THEME_IDS` → `{ maths: [...5 ids], physique: [...5 ids] }`. Both are the shape `functions/src/positioning.js` (Task 14) and `functions/index.js` (Task 15) depend on.

- [ ] **Step 1: Write the failing test**

```js
// functions/test/positioningBank/index.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const { getBank, THEME_IDS } = require('../../src/positioningBank');

test('getBank("maths") returns all 5 maths themes', function () {
  var bank = getBank('maths');
  assert.deepEqual(Object.keys(bank.themes).sort(), THEME_IDS.maths.slice().sort());
});

test('getBank("physique") returns all 5 physique themes', function () {
  var bank = getBank('physique');
  assert.deepEqual(Object.keys(bank.themes).sort(), THEME_IDS.physique.slice().sort());
});

test('getBank throws on an unknown subject', function () {
  assert.throws(function () { getBank('svt'); });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd functions && node --test test/positioningBank/index.test.js`
Expected: FAIL (`Cannot find module '../../src/positioningBank'`)

- [ ] **Step 3: Write the implementation**

```js
// functions/src/positioningBank/maths/index.js
module.exports = {
  themes: {
    'numerique-calcul': require('./numerique-calcul'),
    'algebre-equations': require('./algebre-equations'),
    'geometrie': require('./geometrie'),
    'fonctions': require('./fonctions'),
    'statistiques-probabilites': require('./statistiques-probabilites')
  }
};
```

```js
// functions/src/positioningBank/physique/index.js
module.exports = {
  themes: {
    'mecanique': require('./mecanique'),
    'electricite': require('./electricite'),
    'energie-thermique': require('./energie-thermique'),
    'matiere-chimie': require('./matiere-chimie'),
    'ondes-optique': require('./ondes-optique')
  }
};
```

```js
// functions/src/positioningBank/index.js
var { validateBank } = require('./validate');
var mathsBank = require('./maths');
var physiqueBank = require('./physique');

// Cette liste est intentionnellement dupliquée dans functions/src/positioning.js
// (Task 14) : c'est une petite énumération stable (10 ids), pas du contenu — la
// dupliquer permet de tester positioning.js avec une banque fixture, sans faire
// dépendre ses tests de la validation de toute la banque de contenu réelle.
// Si un thème est ajouté/retiré/renommé ici, reporter le changement dans les deux fichiers.
var THEME_IDS = {
  maths: ['numerique-calcul', 'algebre-equations', 'geometrie', 'fonctions', 'statistiques-probabilites'],
  physique: ['mecanique', 'electricite', 'energie-thermique', 'matiere-chimie', 'ondes-optique']
};

validateBank(mathsBank, THEME_IDS.maths);
validateBank(physiqueBank, THEME_IDS.physique);

var BANKS = { maths: mathsBank, physique: physiqueBank };

function getBank(subject) {
  if (!BANKS[subject]) {
    throw new Error('Matière inconnue : ' + subject);
  }
  return BANKS[subject];
}

module.exports = { getBank: getBank, THEME_IDS: THEME_IDS };
```

- [ ] **Step 4: Run to verify it passes**

Run: `cd functions && node --test test/positioningBank/index.test.js`
Expected: PASS (3/3). If it fails with a `validateTheme` error, that pinpoints exactly which theme file (Tasks 3–12) has a malformed palier — fix that file, not this one.

- [ ] **Step 5: Commit**

```bash
git add functions/src/positioningBank/maths/index.js functions/src/positioningBank/physique/index.js functions/src/positioningBank/index.js functions/test/positioningBank/index.test.js
git commit -m "feat: assemble positioning question bank (maths + physique)"
```

---

### Task 14: Logique métier (getLinkInfo / submitResult)

**Files:**
- Create: `functions/src/positioning.js`
- Test: `functions/test/positioning.test.js`

**Interfaces:**
- Consumes: `runStaircase`, `palierToLabel` (Task 1); a `getBank`-shaped function injected via `deps` (Task 13's `getBank`, or a test fixture).
- Produces: `handleGetLinkInfo(testRef)` → `Promise<{studentNameKnown: boolean, alreadyCompleted: {maths: boolean, physique: boolean}}>`; `handleSubmitResult(testRef, params, deps)` → `Promise<{themes: object}>`, writes `results.<subject>` on `testRef`; `THEME_IDS` (re-exported, same shape as Task 13).

- [ ] **Step 1: Write the failing tests**

```js
// functions/test/positioning.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const { handleGetLinkInfo, handleSubmitResult, THEME_IDS } = require('../src/positioning');

function fakeQuestion(id, correctIndex) {
  return { id: id, question: 'Q?', options: ['a', 'b', 'c', 'd'], correctIndex: correctIndex };
}

function fixtureBank() {
  var themes = {};
  THEME_IDS.maths.forEach(function (themeId) {
    themes[themeId] = {
      id: themeId,
      label: themeId,
      levels: { 1: [
        fakeQuestion(themeId + '-q1', 0), fakeQuestion(themeId + '-q2', 0),
        fakeQuestion(themeId + '-q3', 0), fakeQuestion(themeId + '-q4', 0),
        fakeQuestion(themeId + '-q5', 0), fakeQuestion(themeId + '-q6', 0)
      ] }
    };
  });
  return { themes: themes };
}

function fakeTestRef(initialData) {
  var data = Object.assign({ results: {} }, initialData);
  return {
    get: async function () { return { exists: true, data: function () { return data; } }; },
    update: async function (patch) {
      Object.keys(patch).forEach(function (key) {
        if (key.indexOf('results.') === 0) {
          data.results = data.results || {};
          data.results[key.slice('results.'.length)] = patch[key];
        } else {
          data[key] = patch[key];
        }
      });
    },
    _data: function () { return data; }
  };
}

function allCorrectAnswers(bank, themeId) {
  return bank.themes[themeId].levels[1].map(function (q) {
    return { themeId: themeId, questionId: q.id, selectedOption: q.correctIndex };
  });
}

test('handleGetLinkInfo reports no completed subject on a fresh test', async function () {
  var ref = fakeTestRef({ studentId: 'stu1' });
  var info = await handleGetLinkInfo(ref);
  assert.equal(info.studentNameKnown, true);
  assert.equal(info.alreadyCompleted.maths, false);
  assert.equal(info.alreadyCompleted.physique, false);
});

test('handleGetLinkInfo reports studentNameKnown=false for a fully standalone link', async function () {
  var ref = fakeTestRef({ studentId: null, studentNameInput: null });
  var info = await handleGetLinkInfo(ref);
  assert.equal(info.studentNameKnown, false);
});

test('handleSubmitResult grades all-correct answers as MAX_PALIER for every theme', async function () {
  var bank = fixtureBank();
  var ref = fakeTestRef({ studentId: 'stu1' });
  var answers = [];
  THEME_IDS.maths.forEach(function (themeId) {
    answers = answers.concat(allCorrectAnswers(bank, themeId));
  });
  var result = await handleSubmitResult(ref, { subject: 'maths', answers: answers }, {
    getBank: function () { return bank; },
    now: function () { return 'TIMESTAMP'; }
  });
  THEME_IDS.maths.forEach(function (themeId) {
    assert.equal(result.themes[themeId].level, 'BTS2');
  });
  assert.equal(ref._data().results.maths.status, 'completed');
});

test('handleSubmitResult rejects a second submission for an already-completed subject', async function () {
  var ref = fakeTestRef({ studentId: 'stu1', results: { maths: { status: 'completed', themes: {} } } });
  await assert.rejects(function () {
    return handleSubmitResult(ref, { subject: 'maths', answers: [] }, { getBank: fixtureBank, now: function () { return 'T'; } });
  }, /déjà été testée/);
});

test('handleSubmitResult rejects an unknown questionId', async function () {
  var bank = fixtureBank();
  var ref = fakeTestRef({ studentId: 'stu1' });
  var answers = [{ themeId: THEME_IDS.maths[0], questionId: 'does-not-exist', selectedOption: 0 }];
  await assert.rejects(function () {
    return handleSubmitResult(ref, { subject: 'maths', answers: answers }, { getBank: function () { return bank; }, now: function () { return 'T'; } });
  }, /Question inconnue/);
});
```

- [ ] **Step 2: Run to verify they fail**

Run: `cd functions && node --test test/positioning.test.js`
Expected: FAIL (`Cannot find module '../src/positioning'`)

- [ ] **Step 3: Write the implementation**

```js
// functions/src/positioning.js
var { runStaircase, palierToLabel, STAIRCASE_STEPS } = require('./positioningStaircase');

// Dupliqué depuis functions/src/positioningBank/index.js (Task 13) à l'identique,
// délibérément : garder cette liste locale permet de tester ce fichier avec une
// banque fixture (deps.getBank injecté) sans dépendre de la banque de contenu réelle
// ni de sa validation. Si un thème change, reporter le changement dans les deux fichiers.
var THEME_IDS = {
  maths: ['numerique-calcul', 'algebre-equations', 'geometrie', 'fonctions', 'statistiques-probabilites'],
  physique: ['mecanique', 'electricite', 'energie-thermique', 'matiere-chimie', 'ondes-optique']
};

function findQuestion(bank, themeId, questionId) {
  var theme = bank.themes[themeId];
  if (!theme) return null;
  var found = null;
  Object.keys(theme.levels).forEach(function (palier) {
    theme.levels[palier].forEach(function (q) {
      if (q.id === questionId) found = q;
    });
  });
  return found;
}

async function handleGetLinkInfo(testRef) {
  var snap = await testRef.get();
  if (!snap.exists) throw new Error('Lien invalide.');
  var data = snap.data();
  var results = data.results || {};
  return {
    studentNameKnown: !!data.studentId || !!data.studentNameInput,
    alreadyCompleted: {
      maths: !!(results.maths && results.maths.status === 'completed'),
      physique: !!(results.physique && results.physique.status === 'completed')
    }
  };
}

async function handleSubmitResult(testRef, params, deps) {
  var subject = params.subject;
  var themeIds = THEME_IDS[subject];
  if (!themeIds) throw new Error('Matière invalide : ' + subject);

  var snap = await testRef.get();
  if (!snap.exists) throw new Error('Lien invalide.');
  var data = snap.data();
  var existingResults = data.results || {};
  if (existingResults[subject] && existingResults[subject].status === 'completed') {
    throw new Error('Cette matière a déjà été testée avec ce lien.');
  }

  var bank = deps.getBank(subject);
  var answers = Array.isArray(params.answers) ? params.answers : [];
  var byTheme = {};
  themeIds.forEach(function (themeId) { byTheme[themeId] = []; });

  answers.forEach(function (a) {
    if (!byTheme[a.themeId]) throw new Error('Thème inconnu : ' + a.themeId);
    var question = findQuestion(bank, a.themeId, a.questionId);
    if (!question) throw new Error('Question inconnue : ' + a.questionId);
    byTheme[a.themeId].push(question.correctIndex === a.selectedOption);
  });

  var themeResults = {};
  themeIds.forEach(function (themeId) {
    var flags = byTheme[themeId];
    if (flags.length !== STAIRCASE_STEPS.length) {
      throw new Error('Réponses incomplètes pour le thème : ' + themeId);
    }
    themeResults[themeId] = {
      label: bank.themes[themeId].label,
      level: palierToLabel(runStaircase(flags))
    };
  });

  var patch = {};
  patch['results.' + subject] = {
    status: 'completed',
    themes: themeResults,
    completedAt: deps.now()
  };
  if (params.studentName && !data.studentNameInput && !data.studentId) {
    patch.studentNameInput = params.studentName;
  }
  if (params.studentLevel && !data.studentLevelInput && !data.studentId) {
    patch.studentLevelInput = params.studentLevel;
  }

  await testRef.update(patch);
  return { themes: themeResults };
}

module.exports = {
  handleGetLinkInfo: handleGetLinkInfo,
  handleSubmitResult: handleSubmitResult,
  THEME_IDS: THEME_IDS
};
```

- [ ] **Step 4: Run to verify they pass**

Run: `cd functions && node --test test/positioning.test.js`
Expected: PASS (5/5)

- [ ] **Step 5: Run the full functions test suite to check nothing else broke**

Run: `cd functions && node --test test/*.test.js test/positioningBank/*.test.js`
Expected: all tests pass (existing Phase 2 tests + new ones).

- [ ] **Step 6: Commit**

```bash
git add functions/src/positioning.js functions/test/positioning.test.js
git commit -m "feat: add positioning test business logic (link info + server-side regrade)"
```

---

### Task 15: Cloud Functions onCall + règles Firestore

**Files:**
- Modify: `functions/index.js`
- Modify: `firestore.rules`

**Interfaces:**
- Consumes: `getBank` (Task 13), `handleGetLinkInfo`/`handleSubmitResult` (Task 14).
- Produces: exported Cloud Functions `getPositioningLinkInfo`, `getPositioningQuestionBank`, `submitPositioningResult` (all `onCall`, callable from the client as `firebase.functions().httpsCallable('<name>')`).

⚠️ **Avant l'étape 3 (commit), prévenir explicitement l'utilisateur que ce commit va déclencher un déploiement réel de `firestore.rules` en production via le hook local `post-commit`** (voir contrainte globale). Attendre confirmation avant de committer cette tâche précise, même si le reste du plan s'exécute sans confirmation.

- [ ] **Step 1: Add the three callable functions to `functions/index.js`**

Add these requires near the top, alongside the existing ones:
```js
var { onCall, HttpsError } = require('firebase-functions/v2/https');
var { getBank } = require('./src/positioningBank');
var { handleGetLinkInfo, handleSubmitResult } = require('./src/positioning');
```

Add these exports (anywhere after `admin.initializeApp();`):
```js
exports.getPositioningLinkInfo = onCall(async function (request) {
  var token = request.data && request.data.token;
  if (!token) throw new HttpsError('invalid-argument', 'token manquant.');
  try {
    return await handleGetLinkInfo(admin.firestore().collection('positioningTests').doc(token));
  } catch (e) {
    throw new HttpsError('not-found', 'Lien invalide.');
  }
});

exports.getPositioningQuestionBank = onCall(async function (request) {
  var subject = request.data && request.data.subject;
  try {
    return getBank(subject);
  } catch (e) {
    throw new HttpsError('invalid-argument', 'Matière invalide.');
  }
});

exports.submitPositioningResult = onCall(async function (request) {
  var token = request.data && request.data.token;
  if (!token) throw new HttpsError('invalid-argument', 'token manquant.');
  try {
    return await handleSubmitResult(admin.firestore().collection('positioningTests').doc(token), request.data, {
      getBank: getBank,
      now: function () { return admin.firestore.Timestamp.now(); }
    });
  } catch (e) {
    throw new HttpsError('invalid-argument', e.message || 'Soumission invalide.');
  }
});
```

- [ ] **Step 2: Verify the file is syntactically valid**

Run: `cd functions && node -c index.js`
Expected: no output (success).

- [ ] **Step 3: Add the `positioningTests` rule to `firestore.rules`**

Add after the `tutoringSessions` block (before the final two closing braces):
```
    // ─── positioningTests (test de positionnement, envoyé aux nouveaux élèves) ───
    // Aucun accès public : l'élève non authentifié passe exclusivement par les
    // Cloud Functions onCall (SDK Admin, contourne ces règles).
    match /positioningTests/{token} {
      allow read, write: if isTutor();
    }
```

- [ ] **Step 4: Tell the user what's about to happen, then commit only after they confirm**

State explicitly: "Ce commit modifie `firestore.rules` et va déclencher un déploiement automatique en production via le hook local. Je continue ?" Wait for confirmation before running the commit below.

```bash
git add functions/index.js firestore.rules
git commit -m "feat: expose positioning test Cloud Functions and Firestore rule"
```

---

### Task 16: Client — accès à Firebase Functions

**Files:**
- Modify: `index.html`
- Modify: `js/auth/authService.js`

**Interfaces:**
- Produces: `AuthService.getFunctions()` → the Firebase Functions client instance, usable via `.httpsCallable(name)`.

- [ ] **Step 1: Add the Functions compat SDK script tag**

In `index.html`, right after the `firebase-firestore-compat.js` line (currently line 40):
```html
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-functions-compat.js"></script>
```

- [ ] **Step 2: Initialize Functions in `AuthService.init()`**

In `js/auth/authService.js`, add `_functions: null,` next to `_db: null,`, and in `init()`:
```js
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    this._auth = firebase.auth();
    this._db = firebase.firestore();
    this._functions = firebase.functions();
  },

  getAuth() { return this._auth; },
  getDb()   { return this._db; },
  getFunctions() { return this._functions; },
```

- [ ] **Step 3: Manual check**

Open the site locally (or in prod after deploy), open the browser console, run `AuthService.getFunctions()` — expect a Functions instance object, not `undefined`.

- [ ] **Step 4: Commit**

```bash
git add index.html js/auth/authService.js
git commit -m "feat: wire Firebase Functions client SDK"
```

---

### Task 17: Client — wrapper des Cloud Functions publiques

**Files:**
- Create: `js/positioning/positioningClient.js`
- Modify: `index.html` (script tag)

**Interfaces:**
- Consumes: `AuthService.getFunctions()` (Task 16).
- Produces: `PositioningClient.getLinkInfo(token)`, `PositioningClient.getQuestionBank(subject)`, `PositioningClient.submitResult(token, subject, payload)` — all return Promises resolving to the callable's `.data`.

- [ ] **Step 1: Write the file**

```js
/* =========================================================
   Spark Learning – positioningClient.js
   Appels aux Cloud Functions publiques du test de positionnement
   ========================================================= */

var PositioningClient = {
  _call: function(name, data) {
    var fn = AuthService.getFunctions().httpsCallable(name);
    return fn(data).then(function(result) { return result.data; });
  },

  getLinkInfo: function(token) {
    return PositioningClient._call('getPositioningLinkInfo', { token: token });
  },

  getQuestionBank: function(subject) {
    return PositioningClient._call('getPositioningQuestionBank', { subject: subject });
  },

  submitResult: function(token, subject, payload) {
    return PositioningClient._call('submitPositioningResult', Object.assign({ token: token, subject: subject }, payload));
  }
};
```

- [ ] **Step 2: Register the script tag**

In `index.html`, right after `js/views/tutoring/tutoringStudent.js` (currently line 53):
```html
  <script src="js/positioning/positioningClient.js?v=21"></script>
```
(version bump to `v22` happens once, for all files, in Task 24 — leave `v=21` here for now.)

- [ ] **Step 3: Commit**

```bash
git add js/positioning/positioningClient.js index.html
git commit -m "feat: add client wrapper for positioning Cloud Functions"
```

---

### Task 18: Client — TutoringService, gestion des liens de positionnement

**Files:**
- Modify: `js/tutoring/tutoringService.js`

**Interfaces:**
- Produces: `TutoringService.createPositioningTest(opts)` → `Promise<token>`; `TutoringService.getPendingPositioningTests()` → `Promise<Array>` (tests `completed`, non `reviewed`, sans `studentId`); `TutoringService.watchStudentPositioningTests(studentId, callback)` → unsubscribe function; `TutoringService.markPositioningTestReviewed(token)`; `TutoringService.attachPositioningTestToNewStudent(token, studentData)` → `Promise<studentId>`; `TutoringService.attachPositioningTestToStudent(token, studentId)`.

- [ ] **Step 1: Add the methods**

Add after `watchStudentSessions` (before the closing `}` of the `TutoringService` object), separated by a comma:

```js
  ,

  /* ── Test de positionnement ── */
  createPositioningTest: async function(opts) {
    var uid = AuthService.getCurrentUser().uid;
    var ref = await this._db().collection('positioningTests').add({
      studentId: (opts && opts.studentId) || null,
      studentNameInput: null,
      studentLevelInput: null,
      createdBy: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      results: {},
      reviewed: false
    });
    return ref.id;
  },

  getPendingPositioningTests: async function() {
    var snap = await this._db().collection('positioningTests')
      .where('studentId', '==', null)
      .get();
    return snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .filter(function(t) {
        if (t.reviewed) return false;
        var r = t.results || {};
        return (r.maths && r.maths.status === 'completed') || (r.physique && r.physique.status === 'completed');
      });
  },

  watchStudentPositioningTests: function(studentId, callback) {
    return this._db().collection('positioningTests')
      .where('studentId', '==', studentId)
      .onSnapshot(function(snap) {
        callback(snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); }));
      });
  },

  markPositioningTestReviewed: async function(token) {
    await this._db().collection('positioningTests').doc(token).update({ reviewed: true });
  },

  attachPositioningTestToNewStudent: async function(token, studentData) {
    var studentId = await this.createStudent(studentData);
    await this._db().collection('positioningTests').doc(token).update({ studentId: studentId, reviewed: true });
    return studentId;
  },

  attachPositioningTestToStudent: async function(token, studentId) {
    await this._db().collection('positioningTests').doc(token).update({ studentId: studentId, reviewed: true });
  }
```

- [ ] **Step 2: Verify syntax**

Run: `node -c js/tutoring/tutoringService.js`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add js/tutoring/tutoringService.js
git commit -m "feat: add positioning test CRUD to TutoringService"
```

---

### Task 19: Client — logique de recommandation partagée

**Files:**
- Create: `js/positioning/positioningReport.js`
- Modify: `index.html` (script tag)

**Interfaces:**
- Produces: `positioningNormalizeLevel(raw)` → palier `1..9` ou `null`; `positioningBuildRecommendation(declaredLevel, themeResults)` → chaîne de texte.

- [ ] **Step 1: Write the file**

```js
/* =========================================================
   Spark Learning – positioningReport.js
   Comparaison niveau déclaré / niveaux estimés par thème
   ========================================================= */

var POSITIONING_LEVEL_LABELS = ['6e', '5e', '4e', '3e', '2nde', '1re', 'Tle', 'BTS1', 'BTS2'];

function positioningNormalizeLevel(raw) {
  var s = String(raw || '').trim().toLowerCase().replace(/\s+/g, '');
  var idx = POSITIONING_LEVEL_LABELS.findIndex(function(l) { return l.toLowerCase() === s; });
  return idx === -1 ? null : idx + 1;
}

function positioningBuildRecommendation(declaredLevel, themeResults) {
  var declaredPalier = positioningNormalizeLevel(declaredLevel);
  if (declaredPalier === null) {
    return 'Compare le niveau estimé par thème ci-dessous à la classe réellement suivie par l\'élève pour juger de l\'écart.';
  }

  var behindLabels = Object.keys(themeResults || {}).filter(function(themeId) {
    var themePalier = positioningNormalizeLevel(themeResults[themeId].level);
    return themePalier !== null && themePalier <= declaredPalier - 2;
  }).map(function(themeId) { return themeResults[themeId].label || themeId; });

  if (behindLabels.length > 0) {
    return 'Lacunes probables sur ' + behindLabels.join(', ') + ' — envisager une remise à niveau avant d\'attaquer le programme de l\'année.';
  }
  return 'Pas de lacune bloquante détectée par rapport à la classe déclarée — peut suivre directement le programme de la classe.';
}
```

- [ ] **Step 2: Register the script tag**

In `index.html`, right after `js/positioning/positioningClient.js` (added in Task 17):
```html
  <script src="js/positioning/positioningReport.js?v=21"></script>
```

- [ ] **Step 3: Manual check**

In the browser console: `positioningBuildRecommendation('Tle', { algebre: { level: '4e', label: 'Algèbre' } })` should return the "Lacunes probables sur Algèbre..." string (4e is 3 paliers below Tle). `positioningBuildRecommendation('Tle', { algebre: { level: '1re', label: 'Algèbre' } })` should return the "Pas de lacune bloquante..." string.

- [ ] **Step 4: Commit**

```bash
git add js/positioning/positioningReport.js index.html
git commit -m "feat: add positioning report recommendation helper"
```

---

### Task 20: Client — TutoringHome, envoi de lien et liste des tests à traiter

**Files:**
- Modify: `js/views/tutoring/tutoringHome.js`

**Interfaces:**
- Consumes: `TutoringService.createPositioningTest`, `TutoringService.getPendingPositioningTests`, `TutoringService.attachPositioningTestToNewStudent`, `TutoringService.attachPositioningTestToStudent` (Task 18), `positioningBuildRecommendation` (Task 19).

- [ ] **Step 1: Add state + fetch pending tests in `render()`**

Add `_pendingTests: [],` near `_students: [],`. In `render()`, fetch both in parallel before calling `_renderList`:

```js
  render: async function() {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      var results = await Promise.all([
        TutoringService.getStudents(),
        TutoringService.getPendingPositioningTests()
      ]);
      TutoringHome._students = results[0];
      TutoringHome._pendingTests = results[1];
      TutoringHome._renderList('');
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },
```

- [ ] **Step 2: Render the pending-tests section and the "send link" button in `_renderList`**

Replace the header/button block and add a pending-tests block before `tt-students-grid`:

```js
  _renderList: function(filter) {
    var q = (filter || '').toLowerCase().trim();
    var students = TutoringHome._students.filter(function(s) {
      if (!q) return true;
      return (s.firstName + ' ' + s.lastName).toLowerCase().indexOf(q) !== -1;
    });

    var cardsHtml = students.length === 0
      ? '<p class="tt-empty">Aucun élève pour l\'instant.</p>'
      : students.map(function(s) {
          return '<div class="tt-student-card" onclick="navigate(\'tutoringStudent\', {studentId: \'' + TutoringHome._esc(s.id) + '\'})">' +
            '<h3 class="tt-student-name">' + TutoringHome._esc(s.firstName) + ' ' + TutoringHome._esc(s.lastName) + '</h3>' +
            '<div class="tt-student-level">' + TutoringHome._esc(s.level) + '</div>' +
            '<div class="tt-student-subjects">' + (s.subjects || []).map(TutoringHome._esc).join(' · ') + '</div>' +
          '</div>';
        }).join('');

    var pendingHtml = TutoringHome._pendingTests.length === 0 ? '' :
      '<div class="pt-pending-block">' +
        '<h2 class="tt-section-title">Tests de positionnement à traiter</h2>' +
        TutoringHome._pendingTests.map(function(t) {
          var name = t.studentNameInput || 'Élève sans nom renseigné';
          return '<div class="pt-pending-card">' +
            '<span class="pt-pending-name">' + TutoringHome._esc(name) + '</span>' +
            (t.studentLevelInput ? '<span class="pt-pending-level">' + TutoringHome._esc(t.studentLevelInput) + '</span>' : '') +
            '<button class="tt-add-btn" onclick="TutoringHome._showAttachForm(\'' + TutoringHome._esc(t.id) + '\')">Créer la fiche élève</button>' +
            '<button class="tt-back-btn" onclick="TutoringHome._showAttachToExistingForm(\'' + TutoringHome._esc(t.id) + '\')">Rattacher à un élève existant</button>' +
          '</div>';
        }).join('') +
      '</div>';

    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<h1 class="tt-title">Tutorat privé</h1>' +
          '<button class="tt-add-btn" onclick="TutoringHome._showAddForm()">+ Ajouter un élève</button>' +
          '<button class="tt-add-btn" onclick="TutoringHome._sendPositioningLink()">+ Envoyer un test de positionnement</button>' +
        '</div>' +
        pendingHtml +
        '<input type="text" class="tt-search" placeholder="Rechercher un élève..." ' +
          'oninput="TutoringHome._renderList(this.value)" value="' + TutoringHome._esc(q) + '"/>' +
        '<div class="tt-students-grid">' + cardsHtml + '</div>' +
      '</div>';
  },
```

- [ ] **Step 3: Add `_sendPositioningLink` and `_showAttachForm`/`_submitAttachForm`**

```js
  _sendPositioningLink: async function() {
    try {
      var token = await TutoringService.createPositioningTest({ studentId: null });
      var url = window.location.origin + '/positionnement/' + token;
      window.prompt('Lien à envoyer au nouvel élève (Ctrl+C puis Entrée) :', url);
    } catch (e) {
      showToast('Erreur lors de la création du lien.', 'error');
    }
  },

  _showAttachForm: function(token) {
    var test = TutoringHome._pendingTests.find(function(t) { return t.id === token; });
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringHome._renderList(\'\')">← Retour</button>' +
          '<h1 class="tt-title">Créer la fiche élève</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringHome._submitAttachForm(event, \'' + TutoringHome._esc(token) + '\')">' +
          '<label class="tt-label">Prénom<input type="text" id="tt-attach-firstname" class="tt-input" value="' + TutoringHome._esc((test && test.studentNameInput) || '') + '" required/></label>' +
          '<label class="tt-label">Nom<input type="text" id="tt-attach-lastname" class="tt-input" required/></label>' +
          '<label class="tt-label">Niveau<input type="text" id="tt-attach-level" class="tt-input" value="' + TutoringHome._esc((test && test.studentLevelInput) || '') + '"/></label>' +
          '<label class="tt-label">Matières (séparées par une virgule)<input type="text" id="tt-attach-subjects" class="tt-input" placeholder="Maths, Physique-Chimie"/></label>' +
          '<button type="submit" class="tt-submit-btn">Créer la fiche et rattacher le test</button>' +
        '</form>' +
      '</div>';
  },

  _submitAttachForm: function(e, token) {
    e.preventDefault();
    var firstName = document.getElementById('tt-attach-firstname').value.trim();
    var lastName = document.getElementById('tt-attach-lastname').value.trim();
    var level = document.getElementById('tt-attach-level').value.trim();
    var subjects = document.getElementById('tt-attach-subjects').value
      .split(',').map(function(s) { return s.trim(); }).filter(Boolean);

    if (!firstName || !lastName) {
      showToast('Prénom et nom sont obligatoires.', 'error');
      return false;
    }

    TutoringService.attachPositioningTestToNewStudent(token, {
      firstName: firstName, lastName: lastName, level: level, subjects: subjects,
      contact: { parentEmail: null, parentPhone: null, studentEmail: null }
    }).then(function(studentId) {
      showToast('Fiche créée !', 'success');
      navigate('tutoringStudent', { studentId: studentId });
    }).catch(function() {
      showToast('Erreur lors de la création.', 'error');
    });

    return false;
  },

  _showAttachToExistingForm: function(token) {
    var optionsHtml = TutoringHome._students.map(function(s) {
      return '<option value="' + TutoringHome._esc(s.id) + '">' + TutoringHome._esc(s.firstName) + ' ' + TutoringHome._esc(s.lastName) + '</option>';
    }).join('');
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringHome._renderList(\'\')">← Retour</button>' +
          '<h1 class="tt-title">Rattacher le test à un élève existant</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringHome._submitAttachToExisting(event, \'' + TutoringHome._esc(token) + '\')">' +
          '<label class="tt-label">Élève<select id="tt-attach-existing-select" class="tt-input">' + optionsHtml + '</select></label>' +
          '<button type="submit" class="tt-submit-btn">Rattacher</button>' +
        '</form>' +
      '</div>';
  },

  _submitAttachToExisting: function(e, token) {
    e.preventDefault();
    var studentId = document.getElementById('tt-attach-existing-select').value;
    TutoringService.attachPositioningTestToStudent(token, studentId).then(function() {
      showToast('Test rattaché !', 'success');
      navigate('tutoringStudent', { studentId: studentId });
    }).catch(function() {
      showToast('Erreur lors du rattachement.', 'error');
    });
    return false;
  }
```

(Insert these four methods after `_sendPositioningLink`, separated by commas, before the closing `}` of `TutoringHome`.)

- [ ] **Step 4: Verify syntax**

Run: `node -c js/views/tutoring/tutoringHome.js`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add js/views/tutoring/tutoringHome.js
git commit -m "feat: send positioning links and list pending tests on TutoringHome"
```

---

### Task 21: Client — TutoringStudent, envoi de lien et rapport

**Files:**
- Modify: `js/views/tutoring/tutoringStudent.js`

**Interfaces:**
- Consumes: `TutoringService.createPositioningTest`, `TutoringService.watchStudentPositioningTests`, `TutoringService.markPositioningTestReviewed` (Task 18), `positioningBuildRecommendation` (Task 19).

- [ ] **Step 1: Subscribe to positioning tests alongside sessions**

Add `_unsubscribePositioning: null,` and `_positioningTests: [],` near the other state fields. In `render()`, after subscribing to sessions, add a second subscription:

```js
      if (TutoringStudent._unsubscribePositioning) {
        TutoringStudent._unsubscribePositioning();
      }
      TutoringStudent._unsubscribePositioning = TutoringService.watchStudentPositioningTests(studentId, function(tests) {
        TutoringStudent._positioningTests = tests;
        TutoringStudent._renderFiche();
      });
```
(Add this right after the existing `TutoringService.watchStudentSessions(...)` subscription block, inside the same `try`.)

- [ ] **Step 2: Add "Envoyer un test de positionnement" button and a report block in `_renderFiche`**

Add the button next to "Archiver" in `tt-header`, and a new block before `tt-notes-block`:

```js
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="navigate(\'tutoring\')">← Retour</button>' +
          '<h1 class="tt-title">' + TutoringStudent._esc(s.firstName) + ' ' + TutoringStudent._esc(s.lastName) + '</h1>' +
          '<button class="tt-add-btn" onclick="TutoringStudent._sendPositioningLink()">Envoyer un test de positionnement</button>' +
          '<button class="tt-archive-btn" onclick="TutoringStudent._archive()">Archiver</button>' +
        '</div>' +
        TutoringStudent._renderPositioningReports() +
```

- [ ] **Step 3: Implement `_renderPositioningReports` and `_sendPositioningLink`**

Add these methods (comma-separated, before the closing `}` of `TutoringStudent`):

```js
  _renderPositioningReports: function() {
    var completedTests = TutoringStudent._positioningTests.filter(function(t) {
      var r = t.results || {};
      return (r.maths && r.maths.status === 'completed') || (r.physique && r.physique.status === 'completed');
    });
    if (completedTests.length === 0) return '';

    var declaredLevel = TutoringStudent._student.level;
    return '<div class="pt-report-block">' +
      '<h2 class="tt-section-title">Test de positionnement</h2>' +
      completedTests.map(function(t) {
        return ['maths', 'physique'].map(function(subject) {
          var r = t.results && t.results[subject];
          if (!r || r.status !== 'completed') return '';
          var themesHtml = Object.keys(r.themes).map(function(themeId) {
            var theme = r.themes[themeId];
            return '<span class="pt-theme-badge">' + TutoringStudent._esc(theme.label || themeId) + ' : ' + TutoringStudent._esc(theme.level) + '</span>';
          }).join('');
          var recommendation = positioningBuildRecommendation(declaredLevel, r.themes);
          return '<div class="pt-subject-report">' +
            '<h3 class="pt-subject-title">' + (subject === 'maths' ? 'Maths' : 'Physique-Chimie') + '</h3>' +
            '<div class="pt-themes-grid">' + themesHtml + '</div>' +
            '<p class="pt-recommendation">' + TutoringStudent._esc(recommendation) + '</p>' +
          '</div>';
        }).join('');
      }).join('') +
    '</div>';
  },

  _sendPositioningLink: async function() {
    try {
      var token = await TutoringService.createPositioningTest({ studentId: TutoringStudent._student.id });
      var url = window.location.origin + '/positionnement/' + token;
      window.prompt('Lien à envoyer à ' + TutoringStudent._student.firstName + ' (Ctrl+C puis Entrée) :', url);
    } catch (e) {
      showToast('Erreur lors de la création du lien.', 'error');
    }
  }
```

- [ ] **Step 4: Verify syntax**

Run: `node -c js/views/tutoring/tutoringStudent.js`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add js/views/tutoring/tutoringStudent.js
git commit -m "feat: send positioning links and show report on TutoringStudent"
```

---

### Task 22: Client — page publique du test de positionnement

**Files:**
- Create: `js/views/positioning/positioningTest.js`
- Modify: `index.html` (script tag)

**Interfaces:**
- Consumes: `PositioningClient` (Task 17), global helpers `showToast`, `renderMath` (existing, from `js/utils/ui-helpers.js` / KaTeX setup), `navigate` (existing, `js/app.js`, used only if the user re-navigates away — not required for the core flow).
- Produces: `PositioningTest.render(token)` — entry point called by the router (Task 23).

- [ ] **Step 1: Write the file**

```js
/* =========================================================
   Spark Learning – positioningTest.js
   Page publique (non authentifiée) du test de positionnement
   ========================================================= */

var PT_STAIRCASE_STEPS = [4, 2, 1, 1, 1, 1];
var PT_START_PALIER = 5;
var PT_MIN_PALIER = 1;
var PT_MAX_PALIER = 9;

function _ptClampPalier(v) { return Math.max(PT_MIN_PALIER, Math.min(PT_MAX_PALIER, v)); }

var PositioningTest = {
  _token: null,
  _linkInfo: null,
  _studentName: '',
  _studentLevel: '',
  _subject: null,
  _bank: null,
  _themeIds: [],
  _themeIndex: 0,
  _stepIndex: 0,
  _palier: PT_START_PALIER,
  _answers: [],
  _currentQuestion: null,

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function(token) {
    PositioningTest._token = token;
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      PositioningTest._linkInfo = await PositioningClient.getLinkInfo(token);
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Ce lien de test n\'est pas valide.</div>';
      return;
    }
    if (PositioningTest._linkInfo.studentNameKnown) {
      PositioningTest._renderSubjectChoice();
    } else {
      PositioningTest._renderIntro();
    }
  },

  _renderIntro: function() {
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<h1 class="pt-title">Test de positionnement</h1>' +
        '<p class="pt-intro-text">Avant de commencer, dis-nous qui tu es.</p>' +
        '<form class="tt-form" onsubmit="return PositioningTest._submitIntro(event)">' +
          '<label class="tt-label">Prénom et nom<input type="text" id="pt-intro-name" class="tt-input" required/></label>' +
          '<label class="tt-label">Classe (ex: 3e, 1re, Tle, BTS 1)<input type="text" id="pt-intro-level" class="tt-input" required/></label>' +
          '<button type="submit" class="tt-submit-btn">Continuer</button>' +
        '</form>' +
      '</div>';
  },

  _submitIntro: function(e) {
    e.preventDefault();
    var name = document.getElementById('pt-intro-name').value.trim();
    var level = document.getElementById('pt-intro-level').value.trim();
    if (!name || !level) {
      showToast('Prénom/nom et classe sont obligatoires.', 'error');
      return false;
    }
    PositioningTest._studentName = name;
    PositioningTest._studentLevel = level;
    PositioningTest._renderSubjectChoice();
    return false;
  },

  _renderSubjectChoice: function() {
    var completed = PositioningTest._linkInfo.alreadyCompleted;
    if (completed.maths && completed.physique) {
      document.getElementById('app').innerHTML =
        '<div class="pt-container"><p class="pt-intro-text">Les deux matières ont déjà été testées avec ce lien. Merci !</p></div>';
      return;
    }
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<h1 class="pt-title">Quelle matière veux-tu tester ?</h1>' +
        '<div class="pt-subject-choice">' +
          (completed.maths ? '' : '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'maths\')">Maths</button>') +
          (completed.physique ? '' : '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'physique\')">Physique-Chimie</button>') +
        '</div>' +
      '</div>';
  },

  _chooseSubject: async function(subject) {
    document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-loading">Chargement des questions...</div></div>';
    try {
      PositioningTest._subject = subject;
      PositioningTest._bank = await PositioningClient.getQuestionBank(subject);
      PositioningTest._themeIds = Object.keys(PositioningTest._bank.themes);
      PositioningTest._themeIndex = 0;
      PositioningTest._stepIndex = 0;
      PositioningTest._palier = PT_START_PALIER;
      PositioningTest._answers = [];
      PositioningTest._renderQuestion();
    } catch (e) {
      document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-error">Erreur de chargement des questions.</div></div>';
    }
  },

  _renderQuestion: function() {
    var themeId = PositioningTest._themeIds[PositioningTest._themeIndex];
    var theme = PositioningTest._bank.themes[themeId];
    var pool = theme.levels[PositioningTest._palier];
    var q = pool[Math.floor(Math.random() * pool.length)];
    PositioningTest._currentQuestion = q;

    var totalQuestions = PositioningTest._themeIds.length * PT_STAIRCASE_STEPS.length;
    var doneQuestions = PositioningTest._themeIndex * PT_STAIRCASE_STEPS.length + PositioningTest._stepIndex;
    var progressPct = Math.round((doneQuestions / totalQuestions) * 100);

    // Le contenu source met souvent la bonne réponse en position 0 (c'est autorisé,
    // voir Content Authoring Guide) : on mélange l'ordre d'affichage ici pour que ça
    // ne soit jamais visible/devinable côté élève. onclick reçoit l'index ORIGINAL
    // (celui qui correspond à q.correctIndex et sera soumis au serveur), pas la
    // position affichée.
    var displayOrder = [0, 1, 2, 3];
    for (var i = displayOrder.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = displayOrder[i]; displayOrder[i] = displayOrder[j]; displayOrder[j] = tmp;
    }
    var optionsHtml = displayOrder.map(function(originalIndex) {
      return '<button class="pt-option-btn" onclick="PositioningTest._answerQuestion(' + originalIndex + ')">' + q.options[originalIndex] + '</button>';
    }).join('');

    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<div class="pt-progress-bar"><div class="pt-progress-fill" style="width:' + progressPct + '%"></div></div>' +
        '<p class="pt-theme-label">' + PositioningTest._esc(theme.label) + '</p>' +
        '<div class="pt-question">' + q.question + '</div>' +
        '<div class="pt-options">' + optionsHtml + '</div>' +
      '</div>';
    if (typeof renderMath === 'function') renderMath();
  },

  _answerQuestion: function(selectedOption) {
    var themeId = PositioningTest._themeIds[PositioningTest._themeIndex];
    var q = PositioningTest._currentQuestion;
    PositioningTest._answers.push({ themeId: themeId, questionId: q.id, selectedOption: selectedOption });

    var correct = selectedOption === q.correctIndex;
    var step = PT_STAIRCASE_STEPS[PositioningTest._stepIndex];
    PositioningTest._palier = _ptClampPalier(PositioningTest._palier + (correct ? step : -step));
    PositioningTest._stepIndex++;

    if (PositioningTest._stepIndex >= PT_STAIRCASE_STEPS.length) {
      PositioningTest._themeIndex++;
      PositioningTest._stepIndex = 0;
      PositioningTest._palier = PT_START_PALIER;
    }

    if (PositioningTest._themeIndex >= PositioningTest._themeIds.length) {
      PositioningTest._finishSubject();
      return;
    }
    PositioningTest._renderQuestion();
  },

  _finishSubject: async function() {
    document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-loading">Envoi en cours...</div></div>';
    try {
      await PositioningClient.submitResult(PositioningTest._token, PositioningTest._subject, {
        studentName: PositioningTest._studentName || undefined,
        studentLevel: PositioningTest._studentLevel || undefined,
        answers: PositioningTest._answers
      });
      PositioningTest._linkInfo.alreadyCompleted[PositioningTest._subject] = true;
      PositioningTest._renderThankYou();
    } catch (e) {
      document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-error">Une erreur est survenue lors de l\'envoi. Recharge la page pour réessayer.</div></div>';
    }
  },

  _renderThankYou: function() {
    var completed = PositioningTest._linkInfo.alreadyCompleted;
    var otherSubject = PositioningTest._subject === 'maths' ? 'physique' : 'maths';
    var otherLabel = otherSubject === 'maths' ? 'Maths' : 'Physique-Chimie';
    var offerOther = !completed[otherSubject]
      ? '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'' + otherSubject + '\')">Tester aussi ' + otherLabel + '</button>'
      : '';
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<p class="pt-intro-text">Merci, ton résultat a bien été transmis !</p>' +
        offerOther +
      '</div>';
  }
};
```

- [ ] **Step 2: Register the script tag**

In `index.html`, right after `js/positioning/positioningReport.js` (Task 19):
```html
  <script src="js/views/positioning/positioningTest.js?v=21"></script>
```

- [ ] **Step 3: Verify syntax**

Run: `node -c js/views/positioning/positioningTest.js`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add js/views/positioning/positioningTest.js index.html
git commit -m "feat: add public positioning test view"
```

---

### Task 23: Routage public `/positionnement/:token`

**Files:**
- Modify: `js/app.js`

**Interfaces:**
- Consumes: `PositioningTest.render(token)` (Task 22).

- [ ] **Step 1: Add the route to `buildPath`**

In `js/app.js`, in the `buildPath` switch (near the `tutoring`/`tutoringStudent` cases, ~line 76):
```js
    case 'positioning':      return `/positionnement/${data.token || state.positioningToken || ''}`;
```

- [ ] **Step 2: Add the route to `_parseRouteParts`**

In `_parseRouteParts`, near the `tutorat` case (~line 104):
```js
    case 'positionnement':
      return { view: 'positioning', token: parts[1] };
```

- [ ] **Step 3: Store the token in `navigate()`**

Near the existing `if (data.studentId !== undefined) state.tutoringStudentId = data.studentId;` (~line 170):
```js
  if (data.token !== undefined) state.positioningToken = data.token;
```

- [ ] **Step 4: Add the render dispatch case**

In the `render()` switch (~line 356, next to `tutoring`/`tutoringStudent`):
```js
    case 'positioning':      PositioningTest.render(state.positioningToken); return;
```

- [ ] **Step 5: Verify syntax**

Run: `node -c js/app.js`
Expected: no output.

- [ ] **Step 6: Manual check**

Locally (or after deploy), visit `/positionnement/anything` while logged out — expect the "lien invalide" error screen to render (not a redirect to `/`), confirming the route isn't caught by the protected-views guard.

- [ ] **Step 7: Commit**

```bash
git add js/app.js
git commit -m "feat: add /positionnement/:token public route"
```

---

### Task 24: Câblage `index.html` + bump du cache-busting

**Files:**
- Modify: `index.html`

**Interfaces:** none (wiring only).

- [ ] **Step 1: Confirm all new script tags are present**

Verify `index.html` now has, in this relative order (added across Tasks 16/17/19/22): `firebase-functions-compat.js` (after firestore-compat), `js/positioning/positioningClient.js`, `js/positioning/positioningReport.js`, `js/views/positioning/positioningTest.js` (all after `js/views/tutoring/tutoringStudent.js`).

- [ ] **Step 2: Bump cache-busting on every local tag**

Replace **every** `?v=21` with `?v=22` in `index.html` — this covers `css/styles.css` and all local `<script src="js/...">` tags (external CDN URLs like `gstatic.com` are untouched, they have no `?v=` param).

Run to confirm no `v=21` remains on local assets and no external URL was accidentally touched:
```bash
grep -c "?v=21" index.html
```
Expected: `0`

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "chore: bump cache-busting to v22 for positioning test feature"
```

---

### Task 25: CSS — page publique et badges de rapport

**Files:**
- Modify: `css/styles.css`

**Interfaces:** none (styling only). Classes introduced: `.pt-container`, `.pt-title`, `.pt-intro-text`, `.pt-subject-choice`, `.pt-progress-bar`, `.pt-progress-fill`, `.pt-theme-label`, `.pt-question`, `.pt-options`, `.pt-option-btn`, `.pt-pending-block`, `.pt-pending-card`, `.pt-pending-name`, `.pt-pending-level`, `.pt-report-block`, `.pt-subject-report`, `.pt-subject-title`, `.pt-themes-grid`, `.pt-theme-badge`, `.pt-recommendation`.

- [ ] **Step 1: Add the styles**

Append after the existing `tt-gen-*` block (after line 5621, `@keyframes tt-spin`):

```css
/* ── Test de positionnement (page publique) ── */
.pt-container {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--space-lg, 1.5rem) 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.pt-title { font-size: 1.5rem; font-weight: 800; color: var(--primary); }
.pt-intro-text { font-size: 1.05rem; }

.pt-subject-choice { display: flex; gap: 1rem; flex-wrap: wrap; }

.pt-progress-bar {
  width: 100%;
  height: 0.5rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--primary) 12%, transparent);
  overflow: hidden;
}
.pt-progress-fill { height: 100%; background: var(--primary); transition: width 0.3s ease; }

.pt-theme-label { font-size: 0.85rem; font-weight: 700; color: var(--secondary); text-transform: uppercase; letter-spacing: 0.03em; }
.pt-question { font-size: 1.15rem; line-height: 1.6; }

.pt-options { display: flex; flex-direction: column; gap: 0.75rem; }
.pt-option-btn {
  text-align: left;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
  background: none;
  font-size: 1rem;
  cursor: pointer;
}
.pt-option-btn:hover { background: color-mix(in srgb, var(--primary) 10%, transparent); }

.pt-pending-block { margin: 1rem 0; }
.pt-pending-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--secondary) 25%, transparent);
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}
.pt-pending-name { font-weight: 700; }
.pt-pending-level { color: var(--secondary); font-size: 0.85rem; }

.pt-report-block { margin: 1rem 0; display: flex; flex-direction: column; gap: 1rem; }
.pt-subject-report {
  padding: 1rem;
  border-radius: 10px;
  background: color-mix(in srgb, var(--primary) 6%, transparent);
}
.pt-subject-title { font-size: 1rem; font-weight: 800; margin-bottom: 0.5rem; }
.pt-themes-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem; }
.pt-theme-badge {
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: color-mix(in srgb, var(--secondary) 16%, transparent);
  color: var(--secondary);
}
.pt-recommendation { font-size: 0.95rem; font-style: italic; }
```

- [ ] **Step 2: Manual check**

Open the public test page and the fiche élève report section in a browser, confirm layout looks reasonable in both light and dark theme (site already supports a theme toggle — check `--primary`/`--secondary` render correctly in both).

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: style public positioning test page and tutor report"
```

---

### Task 26: Documentation (CODEBASE_MAP.md, contenu.md)

**Files:**
- Modify: `CODEBASE_MAP.md`
- Modify: `contenu.md`

**Interfaces:** none (docs only).

- [ ] **Step 1: Add entries to `CODEBASE_MAP.md`**

Following the existing format for the tutoring section (see entries around `js/tutoring/tutoringService.js`, `js/views/tutoring/`, `functions/`), add entries for: `functions/src/positioningStaircase.js`, `functions/src/positioningBank/` (validate.js + the 10 theme files + assembly), `functions/src/positioning.js`, the 3 new `onCall` exports in `functions/index.js`, `js/positioning/positioningClient.js`, `js/positioning/positioningReport.js`, `js/views/positioning/positioningTest.js`, and the additions to `js/tutoring/tutoringService.js`, `js/views/tutoring/tutoringHome.js`, `js/views/tutoring/tutoringStudent.js`, `js/app.js` (route), `firestore.rules` (`positioningTests` match block).

- [ ] **Step 2: Update `contenu.md`**

Add a subsection under "Tutorat privé" documenting the new `positioningTests` collection, the public route, and the 3 Cloud Functions — mirroring how the Phase 2 generator section is documented.

- [ ] **Step 3: Commit**

```bash
git add CODEBASE_MAP.md contenu.md
git commit -m "docs: document positioning test feature in CODEBASE_MAP and contenu.md"
```

---

### Task 27: Vérification manuelle de bout en bout (checklist, pas de code)

Pas d'accès navigateur pour l'agent qui exécute ce plan — cette tâche est une checklist pour Dylan/Simon, à faire après déploiement (`firebase deploy --only functions,firestore:rules` — coût réel, à confirmer avant exécution comme pour la Phase 2).

- [ ] Depuis `TutoringHome`, cliquer "+ Envoyer un test de positionnement", copier le lien généré.
- [ ] Ouvrir le lien dans une fenêtre de navigation privée (non connecté) : l'écran prénom/nom + classe s'affiche.
- [ ] Choisir Maths, répondre au test complet (30 questions), vérifier qu'aucun feedback bonne/mauvaise réponse n'apparaît en cours de route.
- [ ] Vérifier que l'ordre des options change d'une question à l'autre (la bonne réponse n'est pas toujours en première position) — le contenu source la met souvent en position 0, c'est le mélange à l'affichage (Task 22) qui doit la masquer.
- [ ] Vérifier l'écran de remerciement, avec proposition de tester aussi Physique-Chimie.
- [ ] Tester aussi Physique-Chimie jusqu'au bout.
- [ ] Recharger le même lien : les deux matières doivent apparaître comme déjà complétées (pas de retest possible).
- [ ] Dans `TutoringHome`, vérifier que ce test apparaît dans "Tests de positionnement à traiter" avec le nom/classe saisis.
- [ ] Cliquer "Créer la fiche élève", vérifier la redirection vers la fiche avec le rapport (niveaux par thème + texte de recommandation) affiché pour les deux matières.
- [ ] Répéter le test avec un troisième lien standalone, puis utiliser "Rattacher à un élève existant" au lieu de "Créer la fiche élève" : vérifier que le rapport apparaît sur la fiche de l'élève choisi.
- [ ] Depuis une fiche élève existante, cliquer "Envoyer un test de positionnement", répéter le test avec ce second lien : vérifier que le résultat apparaît directement sur la fiche sans passer par "tests à traiter".
- [ ] Relire manuellement un échantillon de questions par thème (au moins 2 paliers par thème) pour vérifier l'absence d'erreur mathématique/physique/orthographe — exigence zéro-erreur du sous-système tutorat.
- [ ] Vérifier l'affichage en thème clair et sombre.

---
