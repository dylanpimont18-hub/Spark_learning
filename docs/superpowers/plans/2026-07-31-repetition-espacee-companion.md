# Répétition espacée (Spark Companion) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire réapparaître automatiquement, à intervalles croissants, les modules sur lesquels un élève s'est trompé — au lieu de compter sur lui pour y revenir seul — et relier cette relance à la gamification existante (points Spark Companion).

**Architecture:** Un moteur de répétition espacée à échelle fixe (`SRS_LADDER_DAYS`) vit dans `js/engines/companionEngine.js`, au même endroit que le reste de la logique de remédiation. Les trois moteurs qui connaissent déjà le résultat réel d'une tentative (`quizEngine.js`, `exerciceEngine.js`, `evaluationEngine.js`) appellent `scheduleReview(moduleId, isCorrect)` au moment où ils calculent le résultat. Le résultat est lu par un nouveau bandeau sur la page d'accueil (`getDueReviews()`) et synchronisé vers Firestore via `SyncService` pour survivre au changement d'appareil.

**Tech Stack:** Vanilla JS (aucun bundler, aucun import/export dans `js/engines/`), `localStorage` via `Storage`/`state.companionState`, Firestore (sync existante), Node core (`fs`/`vm`/`assert`) pour les tests du moteur — pas de framework de test, conformément à l'absence de npm sur ce projet.

## Global Constraints

- Aucun `export`/`import` dans `js/engines/` ou `js/data/` — fichiers chargés en `<script>` globaux (voir CLAUDE.md §1).
- Séparation stricte : logique dans `js/engines/companionEngine.js` (pas de manipulation DOM) ; le rendu du bandeau reste dans `js/views/home.js`.
- Toute décimale affichée à l'élève doit utiliser `fr()`/la virgule française — non applicable ici (aucune décimale affichée), mais à garder en tête si un chiffre de progression est ajouté plus tard.
- Cache-busting : incrémenter le suffixe `?v=N` sur **toutes** les balises `<script>`/`<link>` locales de `index.html` dès qu'un fichier `js/` change (CLAUDE.md §1). Version actuelle : `?v=38` → cible `?v=39`.
- Pas de bundler/npm pour le site lui-même : toute vérification automatisée doit tourner avec `node` seul, sans dépendance à installer.

---

## File Structure

- **Modify `js/state.js`** — ajoute `srs: {}` à `defaultCompanionState()`. C'est la seule modification du modèle de données.
- **Modify `js/engines/companionEngine.js`** — ajoute `SRS_LADDER_DAYS`, `scheduleReview(moduleId, isCorrect)`, `getDueReviews()`. Toute la logique de calcul de date vit ici, testable indépendamment du DOM.
- **Create `scripts/test-companion-srs.js`** — harnais de test Node (sans dépendance) qui charge `companionEngine.js` dans un contexte `vm` avec des stubs (`state`, `getModule`, `localStorage`, etc.) et vérifie le comportement de l'échelle de répétition. Suit la convention déjà en place avec `scripts/check-decimal-notation.js` (script de vérification lancé à la main après une modification).
- **Modify `js/engines/quizEngine.js`** — dans `nextQuizQuestion`, appelle `scheduleReview` une fois le score final connu.
- **Modify `js/engines/exerciceEngine.js`** — dans `submitExerciceAnswer`, appelle `scheduleReview` sur la branche correcte et sur la branche incorrecte.
- **Modify `js/engines/evaluationEngine.js`** — dans `_advanceEvaluation`, appelle `scheduleReview` une fois le score final connu.
- **Modify `js/views/home.js`** — ajoute `renderSrsReviewWidget()` et l'insère dans `renderHome()`, juste avant `renderContinueSection()`. Réutilise la classe CSS `.hw-assignment-widget` déjà stylée (aucun CSS nouveau).
- **Modify `js/sync/syncService.js`** — ajoute `sparkCompanionState` aux clés synchronisées (`_SYNC_KEYS`) et au bloc de restauration dans `init()`, pour que la planification de révision survive à un changement d'appareil.
- **Modify `index.html`** — bascule tous les `?v=38` locaux en `?v=39` (dernière tâche, une fois le reste vérifié).

---

### Task 1: Modèle de données — ajouter `srs` à l'état Companion

**Files:**
- Modify: `js/state.js:130`

**Interfaces:**
- Produces: `defaultCompanionState()` retourne désormais un objet avec une clé `srs: {}` (map `moduleId → { intervalIndex, dueAt, lastResult }`), consommée par `companionEngine.js` (Task 3).

- [ ] **Step 1: Ajouter le champ `srs` à la factory**

Dans `js/state.js`, ligne 130 :

```js
function defaultCompanionState()  { return { points: 0, badges: [], objectives: { completed: [], inProgress: [] }, remediation: { moduleId: null, lacunes: [], attempts: {} }, freeMode: { enabled: false, level: null }, srs: {} }; }
```

- [ ] **Step 2: Vérifier la syntaxe**

Run: `node --check js/state.js`
Expected: aucune sortie (succès silencieux).

- [ ] **Step 3: Commit**

```bash
git add js/state.js
git commit -m "feat(companion): ajoute le champ srs à l'état par défaut"
```

---

### Task 2: Écrire le test (qui doit échouer) du moteur de répétition espacée

**Files:**
- Create: `scripts/test-companion-srs.js`

**Interfaces:**
- Consumes: `js/engines/companionEngine.js` chargé dynamiquement via `vm.runInContext` — aucune fonction n'y existe encore à ce stade, le test doit échouer.
- Produces: rien (script de vérification, pas de module exporté).

- [ ] **Step 1: Écrire le harnais de test complet**

Créer `scripts/test-companion-srs.js` :

```js
/* =========================================================
   Spark Learning – scripts/test-companion-srs.js
   Vérifie le moteur de répétition espacée de companionEngine.js
   sans dépendance externe (fs/vm/assert du cœur Node).
   Lancer : node scripts/test-companion-srs.js
   ========================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

function loadCompanionEngine(sandbox) {
  const code = fs.readFileSync(
    path.join(__dirname, '..', 'js', 'engines', 'companionEngine.js'),
    'utf8'
  );
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox;
}

function freshSandbox(modules) {
  const stored = {};
  const sandbox = {
    console,
    Date,
    Math,
    Object,
    JSON,
    localStorage: {
      setItem: (k, v) => { stored[k] = v; },
      getItem: (k) => (k in stored ? stored[k] : null)
    },
    state: {
      companionState: {
        points: 0,
        badges: [],
        objectives: { completed: [], inProgress: [] },
        remediation: { moduleId: null, lacunes: [], attempts: {} },
        srs: {}
      }
    },
    window: { MODULES: modules },
    getModule: (id) => modules.find(m => m.id === id),
    isModuleUnavailable: () => false,
    pick: (arr) => arr[0],
    showToast: () => {}
  };
  loadCompanionEngine(sandbox);
  return sandbox;
}

const MODULES = [{ id: 'mod-1', title: 'Équations du premier degré', icon: '📐' }];
let passed = 0;

function check(label, fn) {
  fn();
  passed++;
  console.log('OK: ' + label);
}

check('une mauvaise réponse planifie la révision à l\'échelon 0 (~1 jour)', () => {
  const sb = freshSandbox(MODULES);
  const before = Date.now();
  const entry = sb.scheduleReview('mod-1', false);
  assert.strictEqual(entry.intervalIndex, 0);
  assert.strictEqual(entry.lastResult, 'wrong');
  const dueMs = new Date(entry.dueAt).getTime();
  assert.ok(dueMs > before, 'dueAt doit être dans le futur');
  assert.ok(dueMs <= before + 2 * 86400000, 'dueAt doit être proche de +1 jour');
});

check('des bonnes réponses consécutives font monter l\'échelle', () => {
  const sb = freshSandbox(MODULES);
  sb.scheduleReview('mod-1', true);
  const second = sb.scheduleReview('mod-1', true);
  assert.strictEqual(second.intervalIndex, 1);
});

check('un échec après progression revient à l\'échelon 0', () => {
  const sb = freshSandbox(MODULES);
  sb.scheduleReview('mod-1', true);
  sb.scheduleReview('mod-1', true);
  const lapsed = sb.scheduleReview('mod-1', false);
  assert.strictEqual(lapsed.intervalIndex, 0);
});

check('getDueReviews ne retourne que les modules dont l\'échéance est passée', () => {
  const sb = freshSandbox(MODULES);
  sb.state.companionState.srs['mod-1'] = {
    intervalIndex: 0,
    dueAt: new Date(Date.now() - 3600000).toISOString(),
    lastResult: 'wrong'
  };
  const due = sb.getDueReviews();
  assert.strictEqual(due.length, 1);
  assert.strictEqual(due[0].moduleId, 'mod-1');

  sb.state.companionState.srs['mod-1'].dueAt = new Date(Date.now() + 3 * 86400000).toISOString();
  assert.strictEqual(sb.getDueReviews().length, 0);
});

check('réussir une révision en retard rapporte +15 points Companion', () => {
  const sb = freshSandbox(MODULES);
  sb.state.companionState.srs['mod-1'] = {
    intervalIndex: 0,
    dueAt: new Date(Date.now() - 3600000).toISOString(),
    lastResult: 'wrong'
  };
  const before = sb.state.companionState.points;
  sb.scheduleReview('mod-1', true);
  assert.strictEqual(sb.state.companionState.points, before + 15);
});

console.log('\n' + passed + '/5 tests passés.');
```

- [ ] **Step 2: Lancer le test et vérifier qu'il échoue**

Run: `node scripts/test-companion-srs.js`
Expected: `TypeError: sb.scheduleReview is not a function` (ou équivalent) — `scheduleReview`/`getDueReviews` n'existent pas encore dans `companionEngine.js`.

- [ ] **Step 3: Commit**

```bash
git add scripts/test-companion-srs.js
git commit -m "test(companion): ajoute le harnais de test du moteur SRS (échoue, pas encore implémenté)"
```

---

### Task 3: Implémenter le moteur de répétition espacée

**Files:**
- Modify: `js/engines/companionEngine.js` (ajouter à la fin du fichier, après `trackRemediationAttempt`)
- Test: `scripts/test-companion-srs.js` (déjà écrit, Task 2)

**Interfaces:**
- Consumes: `state.companionState.srs` (Task 1), `getModule(id)`, `isModuleUnavailable(id)` (déjà globaux via `state.js`), `saveCompanionState()` et `addCompanionPoints(amount)` (déjà présents dans ce fichier), `showToast(msg, type)` (global, déjà utilisé ailleurs dans le projet).
- Produces: `scheduleReview(moduleId, isCorrect) → { intervalIndex, dueAt, lastResult }`, `getDueReviews() → [{ moduleId, title, icon, overdueDays }]` (triés du plus en retard au moins en retard, 5 max) — consommés par `quizEngine.js`/`exerciceEngine.js`/`evaluationEngine.js` (Task 4) et `home.js` (Task 5).

- [ ] **Step 1: Ajouter le moteur SRS à `companionEngine.js`**

À la fin de `js/engines/companionEngine.js`, après la fonction `trackRemediationAttempt` :

```js
/**
 * Échelle de répétition espacée (en jours). Un échec ramène toujours à l'échelon 0 ;
 * une réussite fait avancer d'un cran, plafonné au dernier échelon.
 */
const SRS_LADDER_DAYS = [1, 3, 7, 16, 35];

/**
 * Planifie (ou replanifie) la prochaine révision d'un module en fonction du résultat
 * réel d'une tentative (quiz, exercice ou évaluation). Si le module était déjà en retard
 * de révision et que la réponse est correcte, ajoute un bonus de points Companion pour
 * relier explicitement la répétition espacée à la gamification existante.
 */
function scheduleReview(moduleId, isCorrect) {
  if (!state.companionState.srs) state.companionState.srs = {};
  const srs = state.companionState.srs;
  const prev = srs[moduleId];
  const wasDue = !!(prev && new Date(prev.dueAt).getTime() <= Date.now());

  const intervalIndex = isCorrect
    ? Math.min((prev ? prev.intervalIndex + 1 : 0), SRS_LADDER_DAYS.length - 1)
    : 0;
  const dueAt = new Date(Date.now() + SRS_LADDER_DAYS[intervalIndex] * 86400000).toISOString();

  srs[moduleId] = { intervalIndex, dueAt, lastResult: isCorrect ? 'correct' : 'wrong' };
  saveCompanionState();

  if (isCorrect && wasDue) {
    addCompanionPoints(15);
    if (typeof showToast === 'function') {
      showToast('Révision réussie ! +15 points 🔁', 'achievement');
    }
  }

  return srs[moduleId];
}

/**
 * Retourne les modules dont la révision est due aujourd'hui (ou en retard),
 * triés du plus en retard au moins en retard. Exclut les modules verrouillés
 * ou introuvables (module supprimé/renommé depuis la planification).
 */
function getDueReviews() {
  const srs = (state.companionState && state.companionState.srs) || {};
  const now = Date.now();

  return Object.keys(srs)
    .filter(moduleId => new Date(srs[moduleId].dueAt).getTime() <= now)
    .filter(moduleId => getModule(moduleId) && !isModuleUnavailable(moduleId))
    .map(moduleId => {
      const mod = getModule(moduleId);
      const overdueDays = Math.max(0, Math.floor((now - new Date(srs[moduleId].dueAt).getTime()) / 86400000));
      return { moduleId, title: mod.title, icon: mod.icon, overdueDays };
    })
    .sort((a, b) => b.overdueDays - a.overdueDays)
    .slice(0, 5);
}
```

- [ ] **Step 2: Lancer le test et vérifier qu'il passe**

Run: `node scripts/test-companion-srs.js`
Expected: `5/5 tests passés.`

- [ ] **Step 3: Vérifier la syntaxe du fichier modifié**

Run: `node --check js/engines/companionEngine.js`
Expected: aucune sortie.

- [ ] **Step 4: Commit**

```bash
git add js/engines/companionEngine.js
git commit -m "feat(companion): implémente le moteur de répétition espacée (scheduleReview/getDueReviews)"
```

---

### Task 4: Brancher `scheduleReview` sur les trois moteurs qui connaissent le résultat réel

**Files:**
- Modify: `js/engines/quizEngine.js:45-69` (fonction `nextQuizQuestion`)
- Modify: `js/engines/exerciceEngine.js:19-72` (fonction `submitExerciceAnswer`)
- Modify: `js/engines/evaluationEngine.js:51-68` (fonction `_advanceEvaluation`)

**Interfaces:**
- Consumes: `scheduleReview(moduleId, isCorrect)` produit par Task 3.
- Produces: rien de nouveau — ces trois moteurs se contentent d'appeler `scheduleReview` au bon moment ; aucune autre fonction n'en dépend.

- [ ] **Step 1: Quiz — planifier à la fin du quiz, sur un seuil de 80%**

Dans `js/engines/quizEngine.js`, dans `nextQuizQuestion`, juste après l'appel à `Storage.trackQuizScore` :

```js
    state.quizState.complete = true;
    saveProgress(moduleId, 'quiz');
    if (typeof Storage !== 'undefined' && Storage.trackQuizScore) {
      Storage.trackQuizScore(moduleId, qs.score, mod.quiz.length);
    }
    if (typeof scheduleReview === 'function') {
      scheduleReview(moduleId, qs.score / mod.quiz.length >= 0.8);
    }
```

- [ ] **Step 2: Exercice — planifier sur chaque résolution et chaque tentative ratée**

Dans `js/engines/exerciceEngine.js`, dans `submitExerciceAnswer`, branche correcte (après `Storage.updateExerciceStreak(...)`) :

```js
    if (typeof Storage !== 'undefined' && Storage.trackAttempt) {
      Storage.trackAttempt(moduleId, 'exercice', true);
      Storage.updateExerciceStreak(state.exerciceState.attempts === 0);
    }
    if (typeof scheduleReview === 'function') {
      scheduleReview(moduleId, true);
    }
```

Branche incorrecte (après `Storage.trackAttempt(moduleId, 'exercice', false);`) :

```js
    state.exerciceState.attempts++;
    if (typeof Storage !== 'undefined' && Storage.trackAttempt) {
      Storage.trackAttempt(moduleId, 'exercice', false);
    }
    if (typeof scheduleReview === 'function') {
      scheduleReview(moduleId, false);
    }
```

- [ ] **Step 3: Évaluation — planifier à la fin, sur un seuil de 80% des points**

Dans `js/engines/evaluationEngine.js`, dans `_advanceEvaluation`, juste après `Storage.trackEvaluationScore(mod.id, es.score, es.totalPoints);` :

```js
    if (typeof Storage !== 'undefined' && Storage.trackEvaluationScore) {
      Storage.trackEvaluationScore(mod.id, es.score, es.totalPoints);
    }
    if (typeof scheduleReview === 'function') {
      scheduleReview(mod.id, es.totalPoints > 0 && (es.score / es.totalPoints) >= 0.8);
    }
```

- [ ] **Step 4: Vérifier la syntaxe des trois fichiers**

Run: `node --check js/engines/quizEngine.js && node --check js/engines/exerciceEngine.js && node --check js/engines/evaluationEngine.js`
Expected: aucune sortie.

- [ ] **Step 5: Vérification manuelle dans le navigateur**

Lancer le site en local (voir skill `run` du projet, ou un serveur statique simple), puis dans la console DevTools d'un module ouvert :
1. Répondre faux à un quiz jusqu'au bout (score < 80%) → `JSON.parse(localStorage.getItem('sparkCompanionState')).srs` doit contenir une entrée pour ce module avec `intervalIndex: 0` et une `dueAt` proche de +1 jour.
2. Refaire le même quiz en répondant juste à tout (score = 100%) → l'entrée doit passer à `intervalIndex: 1` (`dueAt` ~ +3 jours).
3. Répéter côté exercice (une réponse fausse puis une bonne) et côté évaluation (score ≥ 80% des points) → même comportement.

Expected: dans les trois cas, `sparkCompanionState.srs[moduleId]` reflète le résultat réel, pas un état figé.

- [ ] **Step 6: Commit**

```bash
git add js/engines/quizEngine.js js/engines/exerciceEngine.js js/engines/evaluationEngine.js
git commit -m "feat(companion): branche scheduleReview sur quiz/exercice/évaluation"
```

---

### Task 5: Bandeau élève "À réviser aujourd'hui" sur la page d'accueil

**Files:**
- Modify: `js/views/home.js` (ajouter une fonction, modifier `renderHome()`)

**Interfaces:**
- Consumes: `getDueReviews()` (Task 3), classe CSS `.hw-assignment-widget` / `.hw-assignment-icon` / `.hw-assignment-title` / `.hw-assignment-meta` déjà définies dans `css/styles.css` (réutilisées par `renderAssignmentWidget`, aucun nouveau CSS requis).
- Produces: `renderSrsReviewWidget()` — fonction pure de rendu, appelée uniquement depuis `renderHome()`.

- [ ] **Step 1: Ajouter `renderSrsReviewWidget()`**

Dans `js/views/home.js`, juste avant `function renderHome() {` (donc juste après `renderAssignmentWidget`) :

```js
function renderSrsReviewWidget() {
	const due = (typeof getDueReviews === 'function') ? getDueReviews() : [];
	if (due.length === 0) return '';

	const first = due[0];
	const extra = due.length - 1;
	const suffix = extra > 0 ? ` (+${extra} autre${extra > 1 ? 's' : ''})` : '';

	return `
		<div class="hw-assignment-widget" style="margin-bottom:12px;" onclick="navigate('module', {moduleId: '${first.moduleId}'})" tabindex="0" role="button" aria-label="Réviser ${first.title}">
			<div class="hw-assignment-icon">🔁</div>
			<div>
				<div class="hw-assignment-title">À réviser aujourd'hui : ${first.title}${suffix}</div>
				<div class="hw-assignment-meta">La répétition espacée t'aide à ne pas ré-oublier ce que tu as déjà appris</div>
			</div>
		</div>
	`;
}
```

- [ ] **Step 2: L'insérer dans `renderHome()`**

Dans `js/views/home.js`, dans `renderHome()`, juste avant `${renderContinueSection()}` :

```js
		<div id="home-assignment-widget" style="padding: 0 var(--space-lg);max-width:900px;margin:0 auto;"></div>
		<div style="padding: 0 var(--space-lg);max-width:900px;margin:0 auto;">${renderSrsReviewWidget()}</div>
		${renderContinueSection()}
```

- [ ] **Step 3: Vérifier la syntaxe**

Run: `node --check js/views/home.js`
Expected: aucune sortie.

- [ ] **Step 4: Vérification manuelle dans le navigateur**

1. Avec un `sparkCompanionState.srs` vide (ou sans entrée en retard) → le bandeau ne doit pas apparaître sur la page d'accueil.
2. Injecter manuellement une entrée en retard dans la console DevTools :
   ```js
   var cs = JSON.parse(localStorage.getItem('sparkCompanionState'));
   cs.srs['<un-id-de-module-existant>'] = { intervalIndex: 0, dueAt: new Date(Date.now() - 3600000).toISOString(), lastResult: 'wrong' };
   localStorage.setItem('sparkCompanionState', JSON.stringify(cs));
   ```
   puis recharger la page d'accueil → le bandeau "À réviser aujourd'hui" doit apparaître, avec le bon titre de module, et cliquer dessus doit naviguer vers ce module.

Expected: comportement conforme aux deux points ci-dessus, style visuellement identique au bandeau "Devoir en cours" existant (même classe CSS).

- [ ] **Step 5: Commit**

```bash
git add js/views/home.js
git commit -m "feat(companion): ajoute le bandeau d'accueil des révisions dues"
```

---

### Task 6: Synchroniser l'état Companion (SRS + points + badges) vers Firestore

**Files:**
- Modify: `js/sync/syncService.js`

**Interfaces:**
- Consumes: rien de nouveau, réutilise le mécanisme existant (`Storage._set` wrapping).
- Produces: le champ `companion` dans le document Firestore `progress/{uid}`, restauré dans `localStorage['sparkCompanionState']` à la connexion sur un nouvel appareil.

**Contexte :** `SyncService._SYNC_KEYS` ne liste aujourd'hui que `sparkProgress`, `sparkTracking`, `sparkStreak`, `sparkFlashcards`. `sparkCompanionState` (où vit `srs`, avec les points et badges) n'est pas synchronisé — un élève qui change d'appareil perdrait sa planification de révision. Ce n'est pas un bug introduit par ce plan, mais un manque préexistant qui rendrait la fonctionnalité peu fiable si on ne le corrige pas maintenant.

- [ ] **Step 1: Ajouter la clé à `_SYNC_KEYS`**

Dans `js/sync/syncService.js`, ligne 6-11 :

```js
  _SYNC_KEYS: {
    sparkProgress:  'progress',
    sparkTracking:  'tracking',
    sparkStreak:    'streak',
    sparkFlashcards:'flashcards',
    sparkCompanionState: 'companion'
  },
```

- [ ] **Step 2: Restaurer le champ dans `init()` (pull distant → local)**

Dans `js/sync/syncService.js`, dans le bloc `if (remoteTs > localTs && remote) { ... }` :

```js
      if (remoteTs > localTs && remote) {
        // Firestore plus récent → écraser localStorage
        if (remote.progress)   localStorage.setItem('sparkProgress',  JSON.stringify(remote.progress));
        if (remote.tracking)   localStorage.setItem('sparkTracking',  JSON.stringify(remote.tracking));
        if (remote.streak)     localStorage.setItem('sparkStreak',    JSON.stringify(remote.streak));
        if (remote.flashcards) localStorage.setItem('sparkFlashcards',JSON.stringify(remote.flashcards));
        if (remote.companion)  localStorage.setItem('sparkCompanionState', JSON.stringify(remote.companion));
        localStorage.setItem('sparkLastSync', String(remoteTs));
```

- [ ] **Step 3: Inclure le champ dans le push initial (local → distant)**

Dans le même fichier, bloc `else if (localTs > 0) { ... }` :

```js
        var lp = localStorage.getItem('sparkProgress');
        var lt = localStorage.getItem('sparkTracking');
        var ls = localStorage.getItem('sparkStreak');
        var lf = localStorage.getItem('sparkFlashcards');
        var lc = localStorage.getItem('sparkCompanionState');
        if (lp) localData.progress   = JSON.parse(lp);
        if (lt) localData.tracking   = JSON.parse(lt);
        if (ls) localData.streak     = JSON.parse(ls);
        if (lf) localData.flashcards = JSON.parse(lf);
        if (lc) localData.companion  = JSON.parse(lc);
```

- [ ] **Step 4: Vérifier la syntaxe**

Run: `node --check js/sync/syncService.js`
Expected: aucune sortie.

- [ ] **Step 5: Vérification manuelle (compte élève existant)**

1. Connecté avec un compte élève de test, planifier une révision (Task 4, étape 5), attendre quelques secondes (le push Firestore se fait en arrière-plan via `Storage._set` wrappé).
2. Dans la console Firebase (ou via `firebase.firestore().collection('progress').doc(uid).get()` dans la console DevTools), vérifier que le document contient désormais un champ `companion.srs`.
3. Ouvrir une session dans un autre navigateur (ou navigation privée) avec le même compte → après connexion, `localStorage.getItem('sparkCompanionState')` doit contenir la même entrée `srs`, et le bandeau "À réviser aujourd'hui" doit apparaître si la révision est due.

Expected: la planification de révision survit au changement d'appareil.

- [ ] **Step 6: Commit**

```bash
git add js/sync/syncService.js
git commit -m "fix(sync): synchronise l'état Companion (srs/points/badges) vers Firestore"
```

---

### Task 7: Cache-busting et vérification finale

**Files:**
- Modify: `index.html` (tous les `<script src="js/...">` et `<link ... css/styles.css>` locaux)

**Interfaces:**
- Consumes: rien.
- Produces: rien — bascule de version uniquement.

- [ ] **Step 1: Incrémenter `?v=38` → `?v=39` sur toutes les balises locales**

Dans `index.html`, remplacer chaque occurrence de `?v=38` par `?v=39` (balises `<link rel="stylesheet" href="css/styles.css?v=38">` et tous les `<script src="js/...?v=38">`, soit ~45 occurrences).

- [ ] **Step 2: Vérifier qu'il ne reste plus de `?v=38` sur des ressources locales**

Run: `grep -c "v=38" index.html`
Expected: `0` (ou uniquement des occurrences sur des URLs externes non concernées, à vérifier manuellement s'il y en a).

- [ ] **Step 3: Test de fumée dans le navigateur**

Ouvrir le site en local, vérifier dans la console qu'aucune erreur `is not defined` n'apparaît au chargement (signe d'un ordre de script cassé), puis rejouer le parcours complet d'un module (cours → quiz → exercice → évaluation) pour confirmer qu'aucune régression n'a été introduite par les Tasks 4-5.

Expected: aucune erreur console, le module se termine normalement, le bandeau de révision se comporte comme vérifié en Task 5.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "chore: bump cache-busting v38 -> v39 (répétition espacée Companion)"
```

---

## Self-Review

**Spec coverage** — les 3 points retenus dans la portée validée par l'utilisateur sont couverts :
1. Moteur de répétition espacée (planification J+1/J+3/J+7/J+16/J+35, reset sur échec) → Tasks 1-3.
2. Widget élève "à réviser aujourd'hui" → Task 5.
3. Lien avec la gamification existante (points Companion) → intégré directement dans `scheduleReview` (Task 3), pas une tâche séparée car c'est une seule ligne de logique au même endroit.

Ajout non demandé explicitement mais nécessaire pour que la fonctionnalité tienne la route : la synchronisation Firestore de `sparkCompanionState` (Task 6), sans quoi la planification ne survivrait pas à un changement d'appareil — signalé comme tel dans la tâche plutôt que caché.

**Placeholder scan** — chaque step contient du code exact, aucun "TODO"/"gérer les cas limites" générique.

**Type consistency** — `scheduleReview(moduleId, isCorrect)` et `getDueReviews()` gardent la même signature entre Task 3 (définition), Task 4 (appelants) et Task 5 (consommateur). `srs[moduleId]` a la même forme `{ intervalIndex, dueAt, lastResult }` partout.

**Hors périmètre (rappel)** — les points 3 et 4 de la conclusion du brainstorm (alertes enseignant, parcours assignables) ne sont **pas** couverts par ce plan : ils s'appuient sur des fonctionnalités déjà existantes (`_computeWeakPoints` dans `teacherDashboard.js`, `AuthService.getClassAssignments`) et méritent un plan séparé, plus court, une fois celui-ci livré.
