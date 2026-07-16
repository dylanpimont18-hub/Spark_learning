# Générateur de cours IA (Tutorat Phase 2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Phase 2 course generator — a Firebase Cloud Function that turns a tutor's "Générer un cours" click into a proofread, compiled LaTeX PDF (+ Markdown source) emailed to Dylan and Simon, wired to the existing `tutoringSessions` Firestore documents from Phase 1.

**Architecture:** A single Firebase Cloud Function (2nd gen, Node.js 20) triggered by `tutoringSessions` writes where `generationStatus` transitions to `"generating"`. It orchestrates four steps — drafting (Claude Opus 4.8 with `code_execution` + `web_search` server tools), an independent review pass (Opus 4.8, text + figure images in), LaTeX compilation (Tectonic binary, with a Claude-assisted fix-and-retry loop on compile errors), and delivery (Storage upload + a Firestore `mail` doc for the Trigger Email extension). The orchestrator is built from small, independently unit-tested pure/injectable modules so the retry and lock logic can be verified without hitting the real API, Storage, or a LaTeX toolchain. The frontend adds two fields and a generate button to the existing session form in `tutoringStudent.js`, plus a real-time status badge.

**Tech Stack:** Firebase Cloud Functions (2nd gen, Node.js 20), `firebase-admin`, `@anthropic-ai/sdk` (model `claude-opus-4-8`, tools `code_execution_20260521` + `web_search_20260209`, adaptive thinking, `output_config.effort: "max"`), Tectonic (LaTeX engine, static binary), Firebase Storage, Firebase "Trigger Email" extension, Node's built-in `node:test` runner for backend unit tests (no new test-framework dependency), vanilla JS frontend (existing Firebase compat SDK v10.12.2, no bundler).

## Global Constraints

- Model: `claude-opus-4-8` — exact string, never guess a date-suffixed variant.
- Server tools: `code_execution_20260521` (name `code_execution`) and `web_search_20260209` (name `web_search`), declared together — this app needs code execution for its own purpose (matplotlib figures) independent of web search's internal filtering, so both are legitimate in the same `tools` array.
- Thinking: `{type: "adaptive"}`. Effort: `output_config: {effort: "max"}` on both the drafting and review calls — the spec's "zero erreur" requirement (professional use, paying students) overrides the default cost-conscious "high" recommendation.
- Long calls (code execution + web search can run minutes): always use `client.messages.stream(...)` + `await stream.finalMessage()`, never non-streaming `create()` above ~16000 `max_tokens`.
- Handle `stop_reason === "pause_turn"` by resending `[...priorMessages, {role: "assistant", content: response.content}]` and continuing — do NOT append a "Continue" user message. Cap continuations (5) to avoid infinite loops.
- French decimal comma and LaTeX-native math (no KaTeX brace-escaping trick — that was a KaTeX-only workaround; plain `,` is correct in real LaTeX text and `\,` spacing in math mode where needed).
- Cache-busting: this feature touches `js/` and `css/styles.css` — every local `?v=N` tag in `index.html` must bump from `20` to `21` in the same change.
- No new automated-test framework for the frontend (vanilla JS, no build) — Phase 2 frontend changes are validated manually per the spec's §6 checklist. The **new Node.js backend** (`functions/`) is a fresh codebase where lightweight `node:test` unit tests on pure/injectable logic are appropriate and expected (TDD) — this does not contradict the "no test framework" rule, which was about not introducing a framework into the existing static frontend.
- Risky/costly actions (`firebase deploy`, enabling Blaze billing triggers, installing the Trigger Email extension, setting the real Anthropic API key) are **manual steps for the user** — the plan writes the code and gives exact commands, but the executing agent must not run destructive/billing-affecting commands autonomously without the user's explicit go-ahead in that moment.

---

## File Structure

```
functions/
  package.json                    — deps, engines, postinstall script wiring
  .gitignore                      — node_modules, bin/
  scripts/install-tectonic.js     — postinstall: downloads Tectonic linux-x86_64 binary into functions/bin/
  src/
    lock.js                       — shouldClaim(sessionData, now): anti-double-trigger guard
    errors.js                     — formatGenerationError(rawError): short user-facing message
    storagePaths.js                — pdfPath(sessionId), mdPath(sessionId)
    promptBuilder.js               — buildDraftingPrompt / buildReviewPrompt / buildFixCompilePrompt
    anthropicClient.js              — draftCourse / reviewDraft / fixCompileError (thin SDK wrappers, injected client)
    latexCompiler.js                — buildTectonicArgs, compileTex (child_process wrapper)
    mailer.js                      — queueSuccessEmail / queueFailureEmail (writes to `mail` collection)
    generateCourse.js               — orchestrator: handleGenerationRequest(sessionDoc, deps) — pure w.r.t. injected deps
  index.js                         — real Cloud Function export, wires real Admin SDK / Anthropic / Tectonic / mailer
  test/
    lock.test.js
    errors.test.js
    storagePaths.test.js
    promptBuilder.test.js
    anthropicClient.test.js
    latexCompiler.test.js
    mailer.test.js
    generateCourse.test.js

js/tutoring/tutoringService.js     — MODIFY: add requestGeneration(), switch sessions read to onSnapshot
js/views/tutoring/tutoringStudent.js — MODIFY: form fields, generate button, status badges, realtime wiring
css/styles.css                     — MODIFY: append generation-status badge styles
index.html                         — MODIFY: bump all ?v=20 → ?v=21
firebase.json                      — MODIFY: add "functions" and "storage" keys
storage.rules                      — NEW: isTutor()-gated read, no client write
CODEBASE_MAP.md, contenu.md        — MODIFY: document new/changed files (final task)
```

Each `functions/src/*.js` file has one responsibility and is either pure (testable without I/O) or takes its real dependency (Anthropic client, Firestore, child_process) as a constructor/function argument so `generateCourse.test.js` can inject fakes.

---

### Task 1: Scaffold the Cloud Functions project

**Files:**
- Create: `functions/package.json`
- Create: `functions/.gitignore`
- Create: `functions/scripts/install-tectonic.js`
- Create: `functions/index.js` (stub)
- Modify: `firebase.json`
- Create: `storage.rules`

**Interfaces:**
- Produces: a `functions/` npm package that installs cleanly (`npm install` inside `functions/` succeeds and leaves `functions/bin/tectonic` present and executable), and a `firebase.json` that declares both `functions` and `storage` alongside the existing `firestore` key.

- [ ] **Step 1: Write `functions/package.json`**

```json
{
  "name": "spark-learning-functions",
  "private": true,
  "engines": { "node": "20" },
  "main": "index.js",
  "scripts": {
    "test": "node --test test/",
    "postinstall": "node scripts/install-tectonic.js"
  },
  "dependencies": {
    "firebase-admin": "^12.6.0",
    "firebase-functions": "^6.0.1",
    "@anthropic-ai/sdk": "^0.32.0"
  }
}
```

- [ ] **Step 2: Write `functions/.gitignore`**

```
node_modules/
bin/
.env
```

- [ ] **Step 3: Write `functions/scripts/install-tectonic.js`**

```js
const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { execFileSync } = require('child_process');

const TECTONIC_VERSION = '0.15.0';
const ASSET = `tectonic-${TECTONIC_VERSION}-x86_64-unknown-linux-gnu.tar.gz`;
const URL = `https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%40${TECTONIC_VERSION}/${ASSET}`;
const BIN_DIR = path.join(__dirname, '..', 'bin');
const ARCHIVE_PATH = path.join(BIN_DIR, ASSET);

function download(url, destPath) {
  return new Promise(function (resolve, reject) {
    https.get(url, function (res) {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, destPath).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error('Échec du téléchargement de Tectonic : HTTP ' + res.statusCode));
        return;
      }
      var file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', function () { file.close(resolve); });
    }).on('error', reject);
  });
}

async function main() {
  fs.mkdirSync(BIN_DIR, { recursive: true });
  if (fs.existsSync(path.join(BIN_DIR, 'tectonic'))) {
    return;
  }
  await download(URL, ARCHIVE_PATH);
  execFileSync('tar', ['-xzf', ARCHIVE_PATH, '-C', BIN_DIR]);
  fs.unlinkSync(ARCHIVE_PATH);
  fs.chmodSync(path.join(BIN_DIR, 'tectonic'), 0o755);
}

main().catch(function (err) {
  console.error('install-tectonic: ' + err.message);
  process.exit(1);
});
```

- [ ] **Step 4: Write the `functions/index.js` stub**

```js
exports.generateCourse = function () {
  // Wired to the real trigger in Task 8.
};
```

- [ ] **Step 5: Add `functions` and `storage` to `firebase.json`**

Read the current file first — it only has a `firestore` key today. Add two siblings:

```json
{
  "firestore": {
    "rules": "firestore.rules"
  },
  "functions": {
    "source": "functions"
  },
  "storage": {
    "rules": "storage.rules"
  }
}
```

- [ ] **Step 6: Write `storage.rules`**

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /tutoringSessions/{sessionId}/{fileName} {
      allow read: if request.auth != null &&
        firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.tutorAccess == true;
      allow write: if false;
    }
  }
}
```

- [ ] **Step 7: Install dependencies and verify the postinstall hook**

Run: `cd functions && npm install`
Expected: exits 0, and `functions/bin/tectonic` exists (`ls functions/bin` shows `tectonic`).

- [ ] **Step 8: Commit**

```bash
git add functions/package.json functions/.gitignore functions/scripts/install-tectonic.js functions/index.js firebase.json storage.rules
git commit -m "feat: scaffold Cloud Functions project for tutorat Phase 2"
```

---

### Task 2: Pure utility modules — lock, errors, storage paths

**Files:**
- Create: `functions/src/lock.js`
- Create: `functions/src/errors.js`
- Create: `functions/src/storagePaths.js`
- Test: `functions/test/lock.test.js`
- Test: `functions/test/errors.test.js`
- Test: `functions/test/storagePaths.test.js`

**Interfaces:**
- Produces:
  - `lock.js` exports `shouldClaim(sessionData: object|null, now: Date): boolean`
  - `errors.js` exports `formatGenerationError(rawError: Error|string|null|undefined): string`
  - `storagePaths.js` exports `pdfPath(sessionId: string): string`, `mdPath(sessionId: string): string`
- Consumes: nothing (pure).

- [ ] **Step 1: Write the failing tests**

`functions/test/lock.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { shouldClaim } = require('../src/lock');

test('no session data -> cannot claim', function () {
  assert.equal(shouldClaim(null, new Date()), false);
});

test('status not generating -> cannot claim', function () {
  assert.equal(shouldClaim({ generationStatus: 'generated' }, new Date()), false);
});

test('generating with no lock yet -> can claim', function () {
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: null }, new Date()), true);
});

test('generating with a fresh lock -> cannot claim (another invocation owns it)', function () {
  var now = new Date('2026-07-16T10:10:00Z');
  var lockAt = { toMillis: function () { return new Date('2026-07-16T10:05:00Z').getTime(); } };
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: lockAt }, now), false);
});

test('generating with a stale lock (>10min) -> can reclaim', function () {
  var now = new Date('2026-07-16T10:20:00Z');
  var lockAt = { toMillis: function () { return new Date('2026-07-16T10:05:00Z').getTime(); } };
  assert.equal(shouldClaim({ generationStatus: 'generating', generationLockAt: lockAt }, now), true);
});
```

`functions/test/errors.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { formatGenerationError } = require('../src/errors');

test('null error -> generic message', function () {
  assert.equal(formatGenerationError(null), 'Erreur inconnue lors de la génération.');
});

test('Error instance -> its message', function () {
  assert.equal(formatGenerationError(new Error('boom')), 'boom');
});

test('string error -> passed through', function () {
  assert.equal(formatGenerationError('boom'), 'boom');
});

test('long message -> truncated to 300 chars with ellipsis', function () {
  var long = 'x'.repeat(400);
  var result = formatGenerationError(new Error(long));
  assert.equal(result.length, 300);
  assert.ok(result.endsWith('...'));
});
```

`functions/test/storagePaths.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { pdfPath, mdPath } = require('../src/storagePaths');

test('pdfPath', function () {
  assert.equal(pdfPath('sess123'), 'tutoringSessions/sess123/cours.pdf');
});

test('mdPath', function () {
  assert.equal(mdPath('sess123'), 'tutoringSessions/sess123/cours.md');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/lock.test.js test/errors.test.js test/storagePaths.test.js`
Expected: FAIL — `Cannot find module '../src/lock'` (and same for the other two).

- [ ] **Step 3: Write `functions/src/lock.js`**

```js
function shouldClaim(sessionData, now) {
  if (!sessionData || sessionData.generationStatus !== 'generating') {
    return false;
  }
  var lockAt = sessionData.generationLockAt;
  if (!lockAt) {
    return true;
  }
  var lockMillis = typeof lockAt.toMillis === 'function' ? lockAt.toMillis() : new Date(lockAt).getTime();
  var ageMs = now.getTime() - lockMillis;
  return ageMs >= 10 * 60 * 1000;
}

module.exports = { shouldClaim: shouldClaim };
```

- [ ] **Step 4: Write `functions/src/errors.js`**

```js
function formatGenerationError(rawError) {
  if (!rawError) {
    return 'Erreur inconnue lors de la génération.';
  }
  var message = typeof rawError === 'string' ? rawError : (rawError.message || String(rawError));
  if (message.length > 300) {
    message = message.slice(0, 297) + '...';
  }
  return message;
}

module.exports = { formatGenerationError: formatGenerationError };
```

- [ ] **Step 5: Write `functions/src/storagePaths.js`**

```js
function pdfPath(sessionId) {
  return 'tutoringSessions/' + sessionId + '/cours.pdf';
}

function mdPath(sessionId) {
  return 'tutoringSessions/' + sessionId + '/cours.md';
}

module.exports = { pdfPath: pdfPath, mdPath: mdPath };
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `cd functions && node --test test/lock.test.js test/errors.test.js test/storagePaths.test.js`
Expected: PASS, all 9 tests green.

- [ ] **Step 7: Commit**

```bash
git add functions/src/lock.js functions/src/errors.js functions/src/storagePaths.js functions/test/lock.test.js functions/test/errors.test.js functions/test/storagePaths.test.js
git commit -m "feat: pure utility modules for generation lock, error formatting, storage paths"
```

---

### Task 3: Prompt builder

**Files:**
- Create: `functions/src/promptBuilder.js`
- Test: `functions/test/promptBuilder.test.js`

**Interfaces:**
- Produces:
  - `buildDraftingPrompt({subject, topic, level, difficultiesObserved, contentType, figuresCount}): string`
  - `buildReviewPrompt({texSource, figureDescriptions}): string`
  - `buildFixCompilePrompt({texSource, compileErrorLog}): string`
- Consumes: nothing (pure string builders).

- [ ] **Step 1: Write the failing tests**

`functions/test/promptBuilder.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { buildDraftingPrompt, buildReviewPrompt, buildFixCompilePrompt } = require('../src/promptBuilder');

test('buildDraftingPrompt includes all session fields', function () {
  var prompt = buildDraftingPrompt({
    subject: 'Mathématiques',
    topic: 'Dérivation - étude de fonction',
    level: '1re',
    difficultiesObserved: 'confond dérivée et tangente',
    contentType: 'cours',
    figuresCount: 2
  });
  assert.ok(prompt.includes('Mathématiques'));
  assert.ok(prompt.includes('Dérivation - étude de fonction'));
  assert.ok(prompt.includes('1re'));
  assert.ok(prompt.includes('confond dérivée et tangente'));
  assert.ok(prompt.includes('2 figure'));
  assert.ok(prompt.toLowerCase().includes('latex'));
  assert.ok(prompt.includes('virgule'));
});

test('buildDraftingPrompt with figuresCount 0 says no figure explicitly', function () {
  var prompt = buildDraftingPrompt({
    subject: 'Physique-Chimie', topic: 'Optique', level: 'Tle',
    difficultiesObserved: '', contentType: 'exercices', figuresCount: 0
  });
  assert.ok(prompt.includes('Aucune figure'));
});

test('buildDraftingPrompt contentType "les_deux" mentions cours and exercices', function () {
  var prompt = buildDraftingPrompt({
    subject: 'SI', topic: 'Chaîne d\'énergie', level: 'BTS 1',
    difficultiesObserved: '', contentType: 'les_deux', figuresCount: 1
  });
  assert.ok(prompt.toLowerCase().includes('cours'));
  assert.ok(prompt.toLowerCase().includes('exercice'));
});

test('buildReviewPrompt includes the tex source and figure descriptions', function () {
  var prompt = buildReviewPrompt({ texSource: '\\section{Test}', figureDescriptions: ['Courbe de f(x)=x^2'] });
  assert.ok(prompt.includes('\\section{Test}'));
  assert.ok(prompt.includes('Courbe de f(x)=x^2'));
  assert.ok(prompt.toLowerCase().includes('relis'));
});

test('buildFixCompilePrompt includes tex source and error log', function () {
  var prompt = buildFixCompilePrompt({ texSource: '\\section{Test}', compileErrorLog: 'Undefined control sequence' });
  assert.ok(prompt.includes('\\section{Test}'));
  assert.ok(prompt.includes('Undefined control sequence'));
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/promptBuilder.test.js`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `functions/src/promptBuilder.js`**

```js
var CONTENT_TYPE_LABELS = {
  cours: 'une fiche de cours (rappels de méthode, pas d\'exercices)',
  exercices: 'une série d\'exercices corrigés (pas de rappel de cours détaillé)',
  les_deux: 'un document combinant une fiche de cours ET une série d\'exercices corrigés'
};

function buildDraftingPrompt(params) {
  var figuresInstruction = params.figuresCount > 0
    ? 'Le document doit inclure exactement ' + params.figuresCount + ' figure(s) ou courbe(s), générée(s) avec l\'outil code execution (Python/matplotlib), et intégrée(s) au document LaTeX final via \\includegraphics.'
    : 'Aucune figure n\'est demandée pour ce document — n\'en génère aucune.';

  return [
    'Tu es un formateur particulier de ' + params.subject + ' qui prépare un document pédagogique pour un·e élève de niveau ' + params.level + '.',
    'Sujet de la séance : ' + params.topic + '.',
    params.difficultiesObserved
      ? 'Difficultés observées chez l\'élève à cibler en priorité : ' + params.difficultiesObserved + '.'
      : 'Aucune difficulté particulière n\'a été notée — traite le sujet de façon standard.',
    'Type de document demandé : ' + (CONTENT_TYPE_LABELS[params.contentType] || params.contentType) + '.',
    figuresInstruction,
    'Utilise l\'outil web search si besoin pour retrouver un schéma ou une référence pertinente existante.',
    'Rédige le document intégralement en LaTeX (pas de Markdown, pas de KaTeX). Utilise la virgule française pour les nombres décimaux (ex: 1,5 et jamais 1.5).',
    'Ton socratique, encourageant, jamais punitif — pas de mot "faux" ou "erreur" adressé à l\'élève.',
    'Produis un document LaTeX complet et compilable (préambule, packages nécessaires, \\begin{document}...\\end{document}).'
  ].join('\n');
}

function buildReviewPrompt(params) {
  var figuresBlock = (params.figureDescriptions || []).length
    ? 'Figures produites (à vérifier visuellement contre les images jointes) :\n- ' + params.figureDescriptions.join('\n- ')
    : 'Aucune figure produite pour ce document.';

  return [
    'Tu es un relecteur indépendant. Relis intégralement le document LaTeX suivant, rédigé par un autre agent pour un usage professionnel avec des élèves payants — aucune erreur n\'est tolérée.',
    'Vérifie : la cohérence mathématique (calculs, notations), l\'exactitude scientifique, l\'orthographe et la grammaire françaises, et la cohérence entre le texte et les figures.',
    figuresBlock,
    'Document à relire :',
    params.texSource,
    'Renvoie la version corrigée complète du document LaTeX (même si aucune correction n\'est nécessaire, renvoie-le identique). Ne renvoie que le code LaTeX, sans commentaire ni explication autour.'
  ].join('\n\n');
}

function buildFixCompilePrompt(params) {
  return [
    'La compilation LaTeX du document suivant a échoué. Corrige la ou les erreurs indiquées par le log de compilation, sans changer le contenu pédagogique.',
    'Document LaTeX :',
    params.texSource,
    'Log d\'erreur de compilation :',
    params.compileErrorLog,
    'Renvoie uniquement le document LaTeX corrigé, complet, sans commentaire ni explication autour.'
  ].join('\n\n');
}

module.exports = {
  buildDraftingPrompt: buildDraftingPrompt,
  buildReviewPrompt: buildReviewPrompt,
  buildFixCompilePrompt: buildFixCompilePrompt
};
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/promptBuilder.test.js`
Expected: PASS, all 5 tests green.

- [ ] **Step 5: Commit**

```bash
git add functions/src/promptBuilder.js functions/test/promptBuilder.test.js
git commit -m "feat: prompt builders for drafting, review, and compile-fix passes"
```

---

### Task 4: Anthropic client wrapper

**Files:**
- Create: `functions/src/anthropicClient.js`
- Test: `functions/test/anthropicClient.test.js`

**Interfaces:**
- Consumes: `buildDraftingPrompt`, `buildReviewPrompt`, `buildFixCompilePrompt` from Task 3 (`../src/promptBuilder`).
- Produces:
  - `draftCourse(anthropic, params): Promise<{tex: string, figures: Array<{filename: string, fileId: string}>, response: object}>`
  - `reviewDraft(anthropic, {texSource, figureDescriptions}): Promise<{tex: string, response: object}>`
  - `fixCompileError(anthropic, {texSource, compileErrorLog}): Promise<{tex: string, response: object}>`
  - `runMessageWithPauseHandling(anthropic, requestParams): Promise<object>` — internal helper, also exported for testing, handles `stop_reason: "pause_turn"` by resending message history (max 5 continuations).
  - All three take `anthropic` as their first argument (a fake with a `.messages.stream(...)` method is injected in tests — no real network call in this test file).

- [ ] **Step 1: Write the failing tests**

`functions/test/anthropicClient.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { draftCourse, reviewDraft, fixCompileError, runMessageWithPauseHandling } = require('../src/anthropicClient');

function fakeAnthropic(responses) {
  var calls = [];
  var i = 0;
  return {
    calls: calls,
    messages: {
      stream: function (requestParams) {
        calls.push(requestParams);
        var resp = responses[Math.min(i, responses.length - 1)];
        i++;
        return { finalMessage: async function () { return resp; } };
      }
    }
  };
}

function textResponse(text, stopReason) {
  return { stop_reason: stopReason || 'end_turn', content: [{ type: 'text', text: text }] };
}

test('runMessageWithPauseHandling returns immediately on end_turn', async function () {
  var client = fakeAnthropic([textResponse('done')]);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'end_turn');
  assert.equal(client.calls.length, 1);
});

test('runMessageWithPauseHandling resumes once on pause_turn then stops on end_turn', async function () {
  var client = fakeAnthropic([textResponse('partial', 'pause_turn'), textResponse('final')]);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'end_turn');
  assert.equal(client.calls.length, 2);
  // second call must NOT append a "Continue" user message — only assistant content is added
  var secondCallMessages = client.calls[1].messages;
  assert.equal(secondCallMessages[secondCallMessages.length - 1].role, 'assistant');
});

test('runMessageWithPauseHandling gives up after 5 continuations', async function () {
  var always_pause = [];
  for (var i = 0; i < 10; i++) always_pause.push(textResponse('x', 'pause_turn'));
  var client = fakeAnthropic(always_pause);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'pause_turn');
  assert.equal(client.calls.length, 6); // 1 initial + 5 continuations
});

test('draftCourse extracts tex text and passes drafting tools/model', async function () {
  var client = fakeAnthropic([textResponse('\\section{Cours}')]);
  var result = await draftCourse(client, {
    subject: 'Maths', topic: 'Dérivation', level: '1re',
    difficultiesObserved: '', contentType: 'cours', figuresCount: 0
  });
  assert.equal(result.tex, '\\section{Cours}');
  assert.equal(client.calls[0].model, 'claude-opus-4-8');
  var toolTypes = client.calls[0].tools.map(function (t) { return t.type; });
  assert.ok(toolTypes.includes('code_execution_20260521'));
  assert.ok(toolTypes.includes('web_search_20260209'));
  assert.deepEqual(client.calls[0].thinking, { type: 'adaptive' });
  assert.equal(client.calls[0].output_config.effort, 'max');
});

test('reviewDraft extracts corrected tex text', async function () {
  var client = fakeAnthropic([textResponse('\\section{Corrigé}')]);
  var result = await reviewDraft(client, { texSource: '\\section{Brouillon}', figureDescriptions: [] });
  assert.equal(result.tex, '\\section{Corrigé}');
});

test('fixCompileError extracts corrected tex text', async function () {
  var client = fakeAnthropic([textResponse('\\section{Corrigé}')]);
  var result = await fixCompileError(client, { texSource: '\\section{Brouillon}', compileErrorLog: 'erreur' });
  assert.equal(result.tex, '\\section{Corrigé}');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/anthropicClient.test.js`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `functions/src/anthropicClient.js`**

```js
var promptBuilder = require('./promptBuilder');

var MODEL = 'claude-opus-4-8';
var MAX_CONTINUATIONS = 5;

async function runMessageWithPauseHandling(anthropic, requestParams) {
  var messages = requestParams.messages.slice();
  var continuations = 0;
  var response = await anthropic.messages.stream(Object.assign({}, requestParams, { messages: messages })).finalMessage();

  while (response.stop_reason === 'pause_turn' && continuations < MAX_CONTINUATIONS) {
    messages = messages.concat([{ role: 'assistant', content: response.content }]);
    response = await anthropic.messages.stream(Object.assign({}, requestParams, { messages: messages })).finalMessage();
    continuations++;
  }

  return response;
}

function extractText(response) {
  return response.content
    .filter(function (block) { return block.type === 'text'; })
    .map(function (block) { return block.text; })
    .join('\n');
}

function extractGeneratedFiles(response) {
  var files = [];
  response.content.forEach(function (block) {
    if (block.type !== 'bash_code_execution_tool_result') return;
    var result = block.content;
    if (!result || result.type !== 'bash_code_execution_result' || !result.content) return;
    result.content.forEach(function (item) {
      if (item.type === 'bash_code_execution_output' && item.file_id) {
        files.push({ filename: item.filename || item.file_id, fileId: item.file_id });
      }
    });
  });
  return files;
}

async function draftCourse(anthropic, params) {
  var prompt = promptBuilder.buildDraftingPrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'max' },
    tools: [
      { type: 'code_execution_20260521', name: 'code_execution' },
      { type: 'web_search_20260209', name: 'web_search', max_uses: 5 }
    ],
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), figures: extractGeneratedFiles(response), response: response };
}

async function reviewDraft(anthropic, params) {
  var prompt = promptBuilder.buildReviewPrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'max' },
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), response: response };
}

async function fixCompileError(anthropic, params) {
  var prompt = promptBuilder.buildFixCompilePrompt(params);
  var response = await runMessageWithPauseHandling(anthropic, {
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'high' },
    messages: [{ role: 'user', content: prompt }]
  });
  return { tex: extractText(response), response: response };
}

module.exports = {
  draftCourse: draftCourse,
  reviewDraft: reviewDraft,
  fixCompileError: fixCompileError,
  runMessageWithPauseHandling: runMessageWithPauseHandling
};
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/anthropicClient.test.js`
Expected: PASS, all 7 tests green.

- [ ] **Step 5: Commit**

```bash
git add functions/src/anthropicClient.js functions/test/anthropicClient.test.js
git commit -m "feat: Anthropic client wrapper with pause_turn handling for drafting/review/fix passes"
```

**Note for later verification:** `extractGeneratedFiles` assumes `bash_code_execution_tool_result.content.content[].file_id` — this exact shape should be confirmed against a live API response during Task 12's manual end-to-end test (the Anthropic code-execution response schema for `code_execution_20260521` is the one part of this integration not independently verifiable without a real API call).

---

### Task 5: LaTeX compiler wrapper

**Files:**
- Create: `functions/src/latexCompiler.js`
- Test: `functions/test/latexCompiler.test.js`

**Interfaces:**
- Produces:
  - `buildTectonicArgs(texFilePath: string): string[]` — pure, testable.
  - `compileTex({tectonicPath, workDir, texFilename}): Promise<{success: boolean, pdfPath: string|null, errorLog: string|null}>` — spawns the real binary; only the argument-building is unit tested here, the actual spawn is exercised in the manual end-to-end test (Task 12).

- [ ] **Step 1: Write the failing test**

`functions/test/latexCompiler.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { buildTectonicArgs } = require('../src/latexCompiler');

test('buildTectonicArgs targets pdf output and keeps logs', function () {
  var args = buildTectonicArgs('/tmp/work/cours.tex');
  assert.ok(args.includes('/tmp/work/cours.tex'));
  assert.ok(args.includes('--outfmt'));
  assert.ok(args.includes('pdf'));
  assert.ok(args.includes('--keep-logs'));
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd functions && node --test test/latexCompiler.test.js`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `functions/src/latexCompiler.js`**

```js
var path = require('path');
var fs = require('fs');
var { execFile } = require('child_process');

function buildTectonicArgs(texFilePath) {
  return ['--outfmt', 'pdf', '--keep-logs', texFilePath];
}

function compileTex(options) {
  var texFilePath = path.join(options.workDir, options.texFilename);
  var args = buildTectonicArgs(texFilePath);

  return new Promise(function (resolve) {
    execFile(options.tectonicPath, args, { cwd: options.workDir, timeout: 5 * 60 * 1000 }, function (err, stdout, stderr) {
      if (err) {
        resolve({ success: false, pdfPath: null, errorLog: (stderr || '') + '\n' + (stdout || '') });
        return;
      }
      var pdfPath = texFilePath.replace(/\.tex$/, '.pdf');
      resolve({ success: fs.existsSync(pdfPath), pdfPath: fs.existsSync(pdfPath) ? pdfPath : null, errorLog: null });
    });
  });
}

module.exports = { buildTectonicArgs: buildTectonicArgs, compileTex: compileTex };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd functions && node --test test/latexCompiler.test.js`
Expected: PASS, 1 test green.

- [ ] **Step 5: Commit**

```bash
git add functions/src/latexCompiler.js functions/test/latexCompiler.test.js
git commit -m "feat: Tectonic LaTeX compiler wrapper"
```

---

### Task 6: Mailer

**Files:**
- Create: `functions/src/mailer.js`
- Test: `functions/test/mailer.test.js`

**Interfaces:**
- Consumes: nothing external at call time except an injected `db` (Firestore-like object exposing `collection(name).add(doc)`).
- Produces:
  - `queueSuccessEmail(db, {session, pdfUrl}): Promise<void>` — writes one doc to `mail` collection addressed to Dylan+Simon.
  - `queueFailureEmail(db, {session, errorMessage}): Promise<void>` — writes one doc to `mail` addressed to `session.generationRequestedBy`'s email (looked up via `db.collection('users').doc(uid).get()`).

- [ ] **Step 1: Write the failing tests**

`functions/test/mailer.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { queueSuccessEmail, queueFailureEmail } = require('../src/mailer');

function fakeDb(userEmail) {
  var added = [];
  return {
    added: added,
    collection: function (name) {
      return {
        add: async function (doc) { added.push({ collection: name, doc: doc }); },
        doc: function (id) {
          return { get: async function () { return { data: function () { return { email: userEmail }; } }; } };
        }
      };
    }
  };
}

test('queueSuccessEmail addresses Dylan and Simon with the PDF link', async function () {
  var db = fakeDb();
  await queueSuccessEmail(db, {
    session: { studentId: 'stu1', subject: 'Maths', topic: 'Dérivation' },
    pdfUrl: 'https://storage.example/cours.pdf'
  });
  assert.equal(db.added.length, 1);
  assert.equal(db.added[0].collection, 'mail');
  assert.ok(db.added[0].doc.to.length >= 2);
  assert.ok(db.added[0].doc.message.html.includes('https://storage.example/cours.pdf'));
});

test('queueFailureEmail addresses only the requester with the error', async function () {
  var db = fakeDb('simon@example.com');
  await queueFailureEmail(db, {
    session: { studentId: 'stu1', subject: 'Maths', topic: 'Dérivation', generationRequestedBy: 'uid-simon' },
    errorMessage: 'Échec de compilation'
  });
  assert.equal(db.added.length, 1);
  assert.deepEqual(db.added[0].doc.to, ['simon@example.com']);
  assert.ok(db.added[0].doc.message.html.includes('Échec de compilation'));
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/mailer.test.js`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `functions/src/mailer.js`**

```js
var TUTOR_EMAILS = ['dylan@spark-learning.example', 'simon@spark-learning.example'];

async function queueSuccessEmail(db, params) {
  await db.collection('mail').add({
    to: TUTOR_EMAILS,
    message: {
      subject: 'Cours généré : ' + params.session.subject + ' — ' + params.session.topic,
      html: 'Le cours demandé est prêt : <a href="' + params.pdfUrl + '">' + params.pdfUrl + '</a>'
    }
  });
}

async function queueFailureEmail(db, params) {
  var requesterDoc = await db.collection('users').doc(params.session.generationRequestedBy).get();
  var requesterEmail = requesterDoc.data().email;

  await db.collection('mail').add({
    to: [requesterEmail],
    message: {
      subject: 'Échec de génération : ' + params.session.subject + ' — ' + params.session.topic,
      html: 'La génération du cours a échoué après plusieurs tentatives.<br/>Détail : ' + params.errorMessage
    }
  });
}

module.exports = { queueSuccessEmail: queueSuccessEmail, queueFailureEmail: queueFailureEmail };
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/mailer.test.js`
Expected: PASS, 2 tests green.

- [ ] **Step 5: Commit**

```bash
git add functions/src/mailer.js functions/test/mailer.test.js
git commit -m "feat: mailer module writing to the Trigger Email extension collection"
```

---

### Task 7: Orchestrator — `generateCourse.js`

**Files:**
- Create: `functions/src/generateCourse.js`
- Test: `functions/test/generateCourse.test.js`

**Interfaces:**
- Consumes: `shouldClaim` (Task 2, `../src/lock`), `formatGenerationError` (Task 2, `../src/errors`), `pdfPath`/`mdPath` (Task 2, `../src/storagePaths`), `draftCourse`/`reviewDraft`/`fixCompileError` (Task 4, `../src/anthropicClient`), `compileTex` (Task 5, `../src/latexCompiler`), `queueSuccessEmail`/`queueFailureEmail` (Task 6, `../src/mailer`).
- Produces: `handleGenerationRequest(sessionRef, deps): Promise<void>` where `deps = {anthropicClient, tectonicPath, workDirFor, storageBucket, db, now, getStudentLevel}` — everything the function needs is injected, making this fully unit-testable with fakes. `sessionRef` is a Firestore-doc-like object exposing `.id`, `.get()`, `.update(patch)`. `getStudentLevel(studentId): Promise<string>` is required because `tutoringSessions` (per the Phase 1 schema) has no `level` field — it lives on `tutoringStudents` — but `promptBuilder.buildDraftingPrompt` needs it.

- [ ] **Step 1: Write the failing tests**

`functions/test/generateCourse.test.js`:
```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { handleGenerationRequest } = require('../src/generateCourse');

function fakeSessionRef(initialData) {
  var data = Object.assign({}, initialData);
  var updates = [];
  return {
    id: 'sess1',
    updates: updates,
    get: async function () { return { data: function () { return data; }, exists: true }; },
    update: async function (patch) { Object.assign(data, patch); updates.push(patch); }
  };
}

function baseDeps(overrides) {
  var uploaded = [];
  return Object.assign({
    anthropicClient: {},
    tectonicPath: '/fake/tectonic',
    workDirFor: function () { return '/tmp/fake'; },
    storageBucket: {
      upload: async function (localPath, remotePath) { uploaded.push({ localPath: localPath, remotePath: remotePath }); return 'https://storage.example/' + remotePath; }
    },
    uploaded: uploaded,
    db: { collection: function () { return { add: async function () {} }; } },
    now: function () { return new Date('2026-07-16T10:00:00Z'); },
    draftCourse: async function () { return { tex: '\\section{Draft}', figures: [] }; },
    reviewDraft: async function () { return { tex: '\\section{Reviewed}' }; },
    fixCompileError: async function () { return { tex: '\\section{Fixed}' }; },
    compileTex: async function () { return { success: true, pdfPath: '/tmp/fake/cours.pdf', errorLog: null }; },
    queueSuccessEmail: async function () {},
    queueFailureEmail: async function () {},
    writeTexFile: async function () {},
    getStudentLevel: async function () { return '1re'; }
  }, overrides || {});
}

test('skips when lock already held (shouldClaim false)', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: { toMillis: function () { return Date.now(); } } });
  var deps = baseDeps();
  await handleGenerationRequest(ref, deps);
  assert.equal(ref.updates.length, 0);
});

test('happy path: draft -> review -> compile -> generated status + success email', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1', subject: 'Maths', topic: 'Dérivation', studentId: 'stu1' });
  var successEmailCalls = [];
  var draftCalls = [];
  var deps = baseDeps({
    queueSuccessEmail: async function (db, params) { successEmailCalls.push(params); },
    draftCourse: async function (anthropic, params) { draftCalls.push(params); return { tex: '\\section{Draft}', figures: [] }; },
    getStudentLevel: async function (studentId) { assert.equal(studentId, 'stu1'); return '1re'; }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
  assert.ok(last.pdfUrl);
  assert.ok(last.mdUrl);
  assert.equal(successEmailCalls.length, 1);
  // level must be fetched from the student doc and merged into the drafting params,
  // since tutoringSessions itself has no "level" field
  assert.equal(draftCalls[0].level, '1re');
  assert.equal(draftCalls[0].subject, 'Maths');
});

test('compile fails 3 times -> failed status + failure email to requester', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var failureEmailCalls = [];
  var compileAttempts = 0;
  var deps = baseDeps({
    compileTex: async function () { compileAttempts++; return { success: false, pdfPath: null, errorLog: 'boom' }; },
    queueFailureEmail: async function (db, params) { failureEmailCalls.push(params); }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'failed');
  assert.ok(last.generationError);
  assert.equal(failureEmailCalls.length, 1);
  // 1 initial compile + up to 3 fix-retries = 4 total attempts
  assert.equal(compileAttempts, 4);
});

test('compile fails then succeeds on retry -> generated status', async function () {
  var ref = fakeSessionRef({ generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1' });
  var attempt = 0;
  var deps = baseDeps({
    compileTex: async function () {
      attempt++;
      if (attempt < 2) return { success: false, pdfPath: null, errorLog: 'boom' };
      return { success: true, pdfPath: '/tmp/fake/cours.pdf', errorLog: null };
    }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd functions && node --test test/generateCourse.test.js`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `functions/src/generateCourse.js`**

```js
var path = require('path');
var fs = require('fs');
var { shouldClaim } = require('./lock');
var { formatGenerationError } = require('./errors');
var { pdfPath: pdfPathFor, mdPath: mdPathFor } = require('./storagePaths');

var MAX_COMPILE_ATTEMPTS = 4; // 1 initial + 3 Claude-assisted fixes

async function handleGenerationRequest(sessionRef, deps) {
  var snap = await sessionRef.get();
  var sessionData = snap.data();

  if (!shouldClaim(sessionData, deps.now())) {
    return;
  }

  await sessionRef.update({ generationLockAt: deps.now() });

  var texSource;
  var figures;
  try {
    var level = await deps.getStudentLevel(sessionData.studentId);
    var draft = await deps.draftCourse(deps.anthropicClient, Object.assign({}, sessionData, { level: level }));
    texSource = draft.tex;
    figures = draft.figures;

    var reviewed = await deps.reviewDraft(deps.anthropicClient, {
      texSource: texSource,
      figureDescriptions: figures.map(function (f) { return f.filename; })
    });
    texSource = reviewed.tex;
  } catch (draftError) {
    await failSession(sessionRef, deps, sessionData, draftError);
    return;
  }

  var workDir = deps.workDirFor(sessionRef.id);
  var texFilename = 'cours.tex';
  var compileResult = null;

  for (var attempt = 0; attempt < MAX_COMPILE_ATTEMPTS; attempt++) {
    await deps.writeTexFile(path.join(workDir, texFilename), texSource);
    compileResult = await deps.compileTex({ tectonicPath: deps.tectonicPath, workDir: workDir, texFilename: texFilename });
    if (compileResult.success) break;
    if (attempt < MAX_COMPILE_ATTEMPTS - 1) {
      try {
        var fixed = await deps.fixCompileError(deps.anthropicClient, { texSource: texSource, compileErrorLog: compileResult.errorLog });
        texSource = fixed.tex;
      } catch (fixError) {
        await failSession(sessionRef, deps, sessionData, fixError);
        return;
      }
    }
  }

  if (!compileResult.success) {
    await failSession(sessionRef, deps, sessionData, new Error(compileResult.errorLog || 'Échec de compilation LaTeX.'));
    return;
  }

  var pdfUrl = await deps.storageBucket.upload(compileResult.pdfPath, pdfPathFor(sessionRef.id));
  var mdLocalPath = path.join(workDir, 'cours.md');
  await deps.writeTexFile(mdLocalPath, texSource);
  var mdUrl = await deps.storageBucket.upload(mdLocalPath, mdPathFor(sessionRef.id));

  await sessionRef.update({
    generationStatus: 'generated',
    pdfUrl: pdfUrl,
    mdUrl: mdUrl,
    generatedAt: deps.now(),
    generationError: null
  });

  await deps.queueSuccessEmail(deps.db, { session: sessionData, pdfUrl: pdfUrl });
}

async function failSession(sessionRef, deps, sessionData, error) {
  var message = formatGenerationError(error);
  await sessionRef.update({ generationStatus: 'failed', generationError: message });
  await deps.queueFailureEmail(deps.db, { session: sessionData, errorMessage: message });
}

module.exports = { handleGenerationRequest: handleGenerationRequest };
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/generateCourse.test.js`
Expected: PASS, all 4 tests green.

- [ ] **Step 5: Commit**

```bash
git add functions/src/generateCourse.js functions/test/generateCourse.test.js
git commit -m "feat: generation orchestrator with retry, lock, and success/failure email routing"
```

---

### Task 8: Wire the real Cloud Function trigger

**Files:**
- Modify: `functions/index.js`

**Interfaces:**
- Consumes: `handleGenerationRequest` (Task 7), real `firebase-admin` (Firestore + Storage), real `@anthropic-ai/sdk` client, `functions/bin/tectonic` (Task 1), `firebase-functions/v2/firestore` `onDocumentWritten`.
- Produces: the exported `generateCourse` Cloud Function, ready to `firebase deploy --only functions`. No new unit tests — this file is thin wiring, validated by the manual end-to-end test in Task 12 (per the spec's own validation section, which calls for manual testing here rather than mocking the whole Firebase Functions runtime).

- [ ] **Step 1: Write the real `functions/index.js`**

```js
var path = require('path');
var os = require('os');
var fs = require('fs/promises');
var { onDocumentWritten } = require('firebase-functions/v2/firestore');
var { defineSecret } = require('firebase-functions/params');
var admin = require('firebase-admin');
var Anthropic = require('@anthropic-ai/sdk');

var { handleGenerationRequest } = require('./src/generateCourse');
var { queueSuccessEmail, queueFailureEmail } = require('./src/mailer');
var { compileTex } = require('./src/latexCompiler');
var { draftCourse, reviewDraft, fixCompileError } = require('./src/anthropicClient');

admin.initializeApp();

var ANTHROPIC_API_KEY = defineSecret('ANTHROPIC_API_KEY');

exports.generateCourse = onDocumentWritten(
  { document: 'tutoringSessions/{sessionId}', secrets: [ANTHROPIC_API_KEY], memory: '2GiB', timeoutSeconds: 540 },
  async function (event) {
    var after = event.data.after;
    if (!after || !after.exists) return;
    var data = after.data();
    if (data.generationStatus !== 'generating') return;

    var db = admin.firestore();
    var bucket = admin.storage().bucket();
    var anthropicClient = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });
    var workDir = path.join(os.tmpdir(), event.params.sessionId);
    await fs.mkdir(workDir, { recursive: true });

    await handleGenerationRequest(after.ref, {
      anthropicClient: anthropicClient,
      tectonicPath: path.join(__dirname, 'bin', 'tectonic'),
      workDirFor: function () { return workDir; },
      storageBucket: {
        upload: async function (localPath, remotePath) {
          await bucket.upload(localPath, { destination: remotePath });
          var file = bucket.file(remotePath);
          var signed = await file.getSignedUrl({ action: 'read', expires: '2100-01-01' });
          return signed[0];
        }
      },
      db: db,
      now: function () { return admin.firestore.Timestamp.now(); },
      draftCourse: draftCourse,
      reviewDraft: reviewDraft,
      fixCompileError: fixCompileError,
      compileTex: compileTex,
      queueSuccessEmail: queueSuccessEmail,
      queueFailureEmail: queueFailureEmail,
      writeTexFile: async function (filePath, content) { await fs.writeFile(filePath, content, 'utf8'); },
      getStudentLevel: async function (studentId) {
        var studentDoc = await db.collection('tutoringStudents').doc(studentId).get();
        return studentDoc.exists ? studentDoc.data().level : '';
      }
    });
  }
);
```

- [ ] **Step 2: Verify the module loads without throwing**

Run: `cd functions && node -e "require('./index.js'); console.log('OK')"`
Expected: prints `OK` (this only checks requires resolve and the export is defined — it does not invoke the function, which needs a live Firestore event and is exercised in Task 12's manual test).

- [ ] **Step 3: Commit**

```bash
git add functions/index.js
git commit -m "feat: wire generateCourse Cloud Function trigger to the orchestrator"
```

---

### Task 9: Frontend service layer — `TutoringService`

**Files:**
- Modify: `js/tutoring/tutoringService.js`

**Interfaces:**
- Consumes: existing `AuthService.getDb()`, `AuthService.getCurrentUser()`, `firebase.firestore.FieldValue`/`Timestamp` (Firebase compat SDK, already loaded globally as `firebase`).
- Produces:
  - `TutoringService.requestGeneration(sessionId, {contentType, figuresCount}): Promise<void>`
  - `TutoringService.watchStudentSessions(studentId, callback): () => void` — new realtime listener, returns an unsubscribe function; `callback` receives the same array shape as the existing `getStudentSessions()`.
  - `getStudentSessions` is removed: `tutoringStudent.js` (Task 10) is its only caller, and Task 10 replaces that call site with `watchStudentSessions` — after this task, `getStudentSessions` has zero remaining callers, so per this project's dead-code convention it is deleted rather than left in place.

- [ ] **Step 1: Remove `getStudentSessions` and add `requestGeneration` and `watchStudentSessions` to `js/tutoring/tutoringService.js`**

Delete the existing `getStudentSessions` method entirely:

```js
  getStudentSessions: async function(studentId) {
    var snap = await this._db().collection('tutoringSessions')
      .where('studentId', '==', studentId)
      .get();
    return snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .sort(function(a, b) {
        var ta = a.date && a.date.toMillis ? a.date.toMillis() : 0;
        var tb = b.date && b.date.toMillis ? b.date.toMillis() : 0;
        return tb - ta;
      });
  },
```

Then insert `requestGeneration` and `watchStudentSessions` after the existing `rateSession` method (before the closing `};` of the `TutoringService` object):

```js
  requestGeneration: async function(sessionId, opts) {
    var uid = AuthService.getCurrentUser().uid;
    await this._db().collection('tutoringSessions').doc(sessionId).update({
      generationStatus: 'generating',
      generationRequestedBy: uid,
      generationError: null,
      contentType: opts.contentType,
      figuresCount: opts.figuresCount
    });
  },

  watchStudentSessions: function(studentId, callback) {
    return this._db().collection('tutoringSessions')
      .where('studentId', '==', studentId)
      .onSnapshot(function(snap) {
        var sessions = snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
          .sort(function(a, b) {
            var ta = a.date && a.date.toMillis ? a.date.toMillis() : 0;
            var tb = b.date && b.date.toMillis ? b.date.toMillis() : 0;
            return tb - ta;
          });
        callback(sessions);
      });
  }
```

- [ ] **Step 2: Commit**

```bash
git add js/tutoring/tutoringService.js
git commit -m "feat: add requestGeneration and realtime session listener to TutoringService"
```

---

### Task 10: Frontend UI — form, badges, realtime wiring

**Files:**
- Modify: `js/views/tutoring/tutoringStudent.js`

**Interfaces:**
- Consumes: `TutoringService.requestGeneration` and `TutoringService.watchStudentSessions` (Task 9).
- Produces: updated `TutoringStudent.render`, `_showSessionForm`, `_submitSessionForm`, `_renderSessionsList` — no new public methods beyond `_requestGeneration(sessionId, e)` (new) and `_unsubscribeSessions` (internal state).

- [ ] **Step 1: Switch `render` to the realtime listener and track the unsubscribe function**

Replace the existing `render` method:

```js
  _unsubscribeSessions: null,

  render: async function(studentId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringStudent._student = await TutoringService.getStudent(studentId);
      if (!TutoringStudent._student) {
        app.innerHTML = '<div class="tt-error">Élève introuvable.</div>';
        return;
      }
      if (TutoringStudent._unsubscribeSessions) {
        TutoringStudent._unsubscribeSessions();
      }
      TutoringStudent._unsubscribeSessions = TutoringService.watchStudentSessions(studentId, function(sessions) {
        TutoringStudent._sessions = sessions;
        TutoringStudent._renderFiche();
      });
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },
```

- [ ] **Step 2: Add the two new form fields and the "Générer un cours" button in `_showSessionForm`**

Replace the existing form body inside `_showSessionForm`:

```js
  _showSessionForm: function() {
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringStudent._renderFiche()">← Retour</button>' +
          '<h1 class="tt-title">Nouvelle séance</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringStudent._submitSessionForm(event)">' +
          '<label class="tt-label">Date<input type="date" id="tt-session-date" class="tt-input" required/></label>' +
          '<label class="tt-label">Matière<input type="text" id="tt-session-subject" class="tt-input" placeholder="Maths, Physique-Chimie, SI" required/></label>' +
          '<label class="tt-label">Sujet<input type="text" id="tt-session-topic" class="tt-input" placeholder="ex: Dérivation - étude de fonction" required/></label>' +
          '<label class="tt-label">Difficultés observées<textarea id="tt-session-difficulties" class="tt-textarea"></textarea></label>' +
          '<label class="tt-label">Type de contenu (pour la génération IA)<select id="tt-session-content-type" class="tt-input">' +
            '<option value="cours">Fiche de cours</option>' +
            '<option value="exercices">Exercices corrigés</option>' +
            '<option value="les_deux">Les deux</option>' +
          '</select></label>' +
          '<label class="tt-label">Nombre de figures<input type="number" id="tt-session-figures-count" class="tt-input" min="0" value="2"/></label>' +
          '<div class="tt-form-actions">' +
            '<button type="submit" class="tt-submit-btn">Enregistrer la séance</button>' +
            '<button type="button" class="tt-generate-btn" onclick="TutoringStudent._submitSessionForm(event, true)">Générer un cours</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    document.getElementById('tt-session-date').valueAsDate = new Date();
  },
```

- [ ] **Step 3: Update `_submitSessionForm` to accept a `generate` flag and call `requestGeneration`**

Replace `_submitSessionForm`:

```js
  _submitSessionForm: function(e, generate) {
    e.preventDefault();
    var date = document.getElementById('tt-session-date').value;
    var subject = document.getElementById('tt-session-subject').value.trim();
    var topic = document.getElementById('tt-session-topic').value.trim();
    var difficulties = document.getElementById('tt-session-difficulties').value.trim();
    var contentType = document.getElementById('tt-session-content-type').value;
    var figuresCount = parseInt(document.getElementById('tt-session-figures-count').value, 10) || 0;

    if (!date || !subject || !topic) {
      showToast('Date, matière et sujet sont obligatoires.', 'error');
      return false;
    }

    TutoringService.createSession(TutoringStudent._student.id, {
      date: date,
      subject: subject,
      topic: topic,
      difficultiesObserved: difficulties
    }).then(function(sessionId) {
      if (!generate) {
        showToast('Séance enregistrée !', 'success');
        TutoringStudent._renderFiche();
        return;
      }
      return TutoringService.requestGeneration(sessionId, { contentType: contentType, figuresCount: figuresCount })
        .then(function() {
          showToast('Génération lancée !', 'success');
          TutoringStudent._renderFiche();
        });
    }).catch(function() {
      showToast('Erreur lors de l\'enregistrement.', 'error');
    });

    return false;
  }
  ,
  _requestGeneration: function(sessionId, contentType, figuresCount) {
    TutoringService.requestGeneration(sessionId, { contentType: contentType, figuresCount: figuresCount })
      .then(function() { showToast('Génération relancée !', 'success'); })
      .catch(function() { showToast('Erreur lors du lancement de la génération.', 'error'); });
  }
```

- [ ] **Step 4: Add the generation badge to `_renderSessionsList`**

Replace the return block inside the `.map(...)` in `_renderSessionsList`:

```js
  _renderSessionsList: function() {
    if (TutoringStudent._sessions.length === 0) return '<p class="tt-empty">Aucune séance pour l\'instant.</p>';
    return TutoringStudent._sessions.map(function(sess) {
      var dateLabel = sess.date && sess.date.toDate ? sess.date.toDate().toLocaleDateString('fr-FR') : '';
      return '<div class="tt-session-card">' +
        '<div class="tt-session-header">' +
          '<span class="tt-session-date">' + dateLabel + '</span>' +
          '<span class="tt-session-subject">' + TutoringStudent._esc(sess.subject) + '</span>' +
        '</div>' +
        '<p class="tt-session-topic">' + TutoringStudent._esc(sess.topic) + '</p>' +
        (sess.difficultiesObserved ? '<p class="tt-session-difficulties">' + TutoringStudent._esc(sess.difficultiesObserved) + '</p>' : '') +
        TutoringStudent._renderGenerationBadge(sess) +
        (sess.status === 'draft'
          ? '<button class="tt-rate-btn" onclick="TutoringStudent._showRatingForm(\'' + TutoringStudent._esc(sess.id) + '\')">Noter cette séance</button>'
          : '<div class="tt-session-rating">Note : ' + sess.rating + '/10' + (sess.ratingRemarks ? ' — ' + TutoringStudent._esc(sess.ratingRemarks) : '') + '</div>'
        ) +
      '</div>';
    }).join('');
  },

  _renderGenerationBadge: function(sess) {
    if (!sess.generationStatus || sess.generationStatus === 'none') return '';
    if (sess.generationStatus === 'generating') {
      return '<div class="tt-gen-badge tt-gen-generating"><span class="tt-gen-spinner"></span>Génération en cours...</div>';
    }
    if (sess.generationStatus === 'generated') {
      return '<div class="tt-gen-badge tt-gen-generated">Cours généré — <a href="' + TutoringStudent._esc(sess.pdfUrl) + '" target="_blank">Télécharger le PDF</a></div>';
    }
    if (sess.generationStatus === 'failed') {
      return '<div class="tt-gen-badge tt-gen-failed">Échec de la génération : ' + TutoringStudent._esc(sess.generationError || '') +
        '<button class="tt-rate-btn" onclick="TutoringStudent._requestGeneration(\'' + TutoringStudent._esc(sess.id) + '\', \'' + TutoringStudent._esc(sess.contentType || 'cours') + '\', ' + (sess.figuresCount || 0) + ')">Générer un cours</button></div>';
    }
    return '';
  },
```

- [ ] **Step 2: Commit**

```bash
git add js/views/tutoring/tutoringStudent.js
git commit -m "feat: add generation form fields, status badges, and realtime session listener to the fiche élève"
```

---

### Task 11: CSS badges and cache-bust bump

**Files:**
- Modify: `css/styles.css`
- Modify: `index.html`

**Interfaces:**
- Produces: `.tt-gen-badge`, `.tt-gen-generating`, `.tt-gen-generated`, `.tt-gen-failed`, `.tt-gen-spinner`, `.tt-generate-btn`, `.tt-form-actions` CSS classes; all local `?v=20` tags become `?v=21`.

- [ ] **Step 1: Append badge styles to `css/styles.css`**

Add after the existing `.tt-session-rating` rule (end of the tutoring section):

```css

.tt-form-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.tt-generate-btn {
  background: none;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
.tt-generate-btn:hover { background: var(--secondary); color: #fff; }

.tt-gen-badge {
  margin-top: 0.5rem;
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tt-gen-generating {
  background: color-mix(in srgb, var(--secondary) 16%, transparent);
  color: var(--secondary);
}

.tt-gen-generated {
  background: color-mix(in srgb, var(--success) 16%, transparent);
  color: var(--success);
}
.tt-gen-generated a { color: inherit; font-weight: 700; text-decoration: underline; }

.tt-gen-failed {
  background: color-mix(in srgb, var(--error) 16%, transparent);
  color: var(--error);
  flex-direction: column;
  align-items: flex-start;
}

.tt-gen-spinner {
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: tt-spin 0.8s linear infinite;
}

@keyframes tt-spin { to { transform: rotate(360deg); } }
```

- [ ] **Step 2: Bump every local cache-busting tag in `index.html` from `?v=20` to `?v=21`**

There are 26 tags total (lines 32, 43-53, 151-152, 155-188). Use a project-wide find/replace within `index.html` only: every occurrence of `?v=20"` becomes `?v=21"`.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css index.html
git commit -m "feat: generation status badge styles; bump cache-busting to v21"
```

---

### Task 12: Manual configuration and end-to-end validation

**Files:** none (operational steps + validation checklist — no code changes).

**Interfaces:** none — this task validates Tasks 1–11 together against real Firebase/Anthropic infrastructure.

- [ ] **Step 1: Configure the Anthropic API key secret (user must confirm before running)**

Run: `firebase functions:secrets:set ANTHROPIC_API_KEY`
Expected: prompts for the key value, stores it as a Cloud Functions secret — never commit the key itself.

- [ ] **Step 2: Install and configure the Firebase "Trigger Email" extension (Firebase Console)**

In the Firebase Console → Extensions → install "Trigger Email", point it at a `mail` collection, and configure SMTP (a dedicated Gmail account or SendGrid). This is a console-only step with no CLI equivalent in this plan.

- [ ] **Step 3: Deploy (user must confirm before running — this affects the production Firebase project)**

Run: `firebase deploy --only functions,firestore:rules,storage`
Expected: `generateCourse` function deployed, `firestore.rules` and `storage.rules` published.

- [ ] **Step 4: End-to-end success test**

In the app, open a student's fiche, fill the "+ Nouvelle séance" form with 1-2 figures requested, click "Générer un cours". Verify: badge shows "Génération en cours..." within seconds, then flips to "Cours généré" with a working PDF download link, and Dylan+Simon both receive the email.

- [ ] **Step 5: End-to-end failure test**

Temporarily revoke or corrupt the `ANTHROPIC_API_KEY` secret value, repeat Step 4. Verify: badge flips to "Échec de la génération" with a short error message, only the account that clicked "Générer un cours" receives an email, and the "Générer un cours" button reappears on that session card. Restore the correct key afterward.

- [ ] **Step 6: Regeneration test**

On a session already `generated`, click "Générer un cours" again. Verify the new PDF replaces the old one at the same Storage path (no duplicate file), and `generatedAt` updates.

- [ ] **Step 7: Manual PDF audit**

Read the actual generated PDF content (maths, French, figures) for at least one real test generation before using this with real students, per the spec's zero-error requirement.

---

### Task 13: Update navigation docs

**Files:**
- Modify: `CODEBASE_MAP.md`
- Modify: `contenu.md`

**Interfaces:** none — documentation only, per the project's CLAUDE.md rule to update `CODEBASE_MAP.md` after touching files, and the dev-guidelines.md rule to update `contenu.md` after adding new scripts.

- [ ] **Step 1: Add the `functions/` entries to `CODEBASE_MAP.md`**

Add a new section after the existing `js/tutoring/tutoringService.js` entry:

```markdown
## functions/ (Cloud Functions — générateur de cours IA, tutorat Phase 2)
- `TutoringService.requestGeneration(sessionId, opts)` / `watchStudentSessions(studentId, cb)` — ajoutés à js/tutoring/tutoringService.js
- `functions/index.js` — trigger `generateCourse` (onDocumentWritten sur tutoringSessions)
- `functions/src/generateCourse.js` — orchestrateur : lock, rédaction, relecture, compilation (retry), livraison
- `functions/src/anthropicClient.js` — appels Claude Opus 4.8 (code execution + web search), gestion pause_turn
- `functions/src/promptBuilder.js` — construction des prompts rédaction/relecture/fix-compile
- `functions/src/latexCompiler.js` — compilation via Tectonic
- `functions/src/mailer.js` — écriture dans la collection `mail` (extension Trigger Email)
- `functions/src/lock.js`, `errors.js`, `storagePaths.js` — utilitaires purs
```

- [ ] **Step 2: Update the `js/tutoring/tutoringService.js` and `tutoringStudent.js` entries in `CODEBASE_MAP.md`**

Replace the line `- getStudentSessions(studentId) / createSession(studentId, data) — historique et création de séance (status: 'draft')` with:
```markdown
- `watchStudentSessions(studentId, callback)` / `createSession(studentId, data)` — écoute temps réel de l'historique et création de séance (`status: 'draft'`)
- `requestGeneration(sessionId, opts)` — déclenche la génération IA (Cloud Function)
```
and for `tutoringStudent.js`:
```markdown
- `_renderGenerationBadge(sess)` — badge d'état de génération (generating/generated/failed)
- `_requestGeneration(sessionId, contentType, figuresCount)` — relance la génération sur une séance existante
```

- [ ] **Step 3: Update `contenu.md`**

Add a line under the existing "Tutorat privé" section noting the new `functions/` backend:
```markdown
- Phase 2 (générateur IA) : backend `functions/` (Cloud Functions) — voir docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md
```

- [ ] **Step 4: Commit**

```bash
git add CODEBASE_MAP.md contenu.md
git commit -m "docs: document Phase 2 generator files in CODEBASE_MAP and contenu.md"
```
