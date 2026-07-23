# Tutorat — cycle de vie du PDF généré : Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let a tutor regenerate an already-successful course PDF (keeping the last 3 versions), recover manually from a generation stuck in `"generating"` past 10 minutes, and stop transient Anthropic API errors from being treated as real content-generation failures.

**Architecture:** Extends the existing `functions/src/generateCourse.js` Cloud Function and `js/views/tutoring/tutoringStudent.js` UI — no new services. Adds three fields to `tutoringSessions/{id}` (`generationVersion`, `generationRequestedAt`, `generationHistory`), versions the Storage paths for generated PDFs/MD files, and wraps the Anthropic SDK call with a local retry.

**Tech Stack:** Node.js (Cloud Functions v2, `node:test` for backend tests), vanilla JS (frontend, no build/test runner), Firebase Firestore + Storage, `@anthropic-ai/sdk` 0.32.1.

## Global Constraints

- Zero-error tolerance: this is a professional tool used with paying students (from `docs/superpowers/specs/2026-07-23-tutorat-cycle-vie-pdf-design.md`) — no behavior change may silently hide a real generation failure.
- No new npm dependencies — retry/backoff implemented with built-in `setTimeout`, no library.
- Backend tests run with `cd functions && node --test test/*.test.js` (the glob is required — `node --test test/` alone fails on Windows/Git Bash, per prior project notes).
- Frontend (`js/`) has no automated test runner — validate with `node -c <file>` for syntax and manual browser verification, matching existing project convention.
- Any change touching `js/` or `css/styles.css` requires bumping the `?v=N` cache-busting suffix on **every** local `<script>`/`<link>` tag in `index.html` (project convention, `CLAUDE.md`).
- All new user-facing strings are in French, matching the existing tone (socratique, jamais punitif) — not applicable to error/log strings meant for the tutor only, which can be direct/technical.
- Commit after each task; every commit ends with `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.

---

## File Structure Overview

- `functions/src/storagePaths.js` (modify) — `pdfPath`/`mdPath` gain a required `version` parameter.
- `functions/test/storagePaths.test.js` (modify) — updated for the new signature.
- `functions/src/anthropicClient.js` (modify) — adds `isTransientError`, `RETRY_DELAYS_MS`, and a `streamWithRetry` wrapper used by `runMessageWithPauseHandling`.
- `functions/test/anthropicClient.test.js` (modify) — adds retry-behavior tests.
- `functions/src/generateCourse.js` (modify) — delivery block computes `generationVersion`, appends to `generationHistory`, evicts+cleans up beyond 3 entries.
- `functions/test/generateCourse.test.js` (modify) — `baseDeps()` gains a `storageBucket.delete` mock; new rotation tests.
- `functions/index.js` (modify) — wires a real `storageBucket.delete` to the Cloud Function deps.
- `storage.rules` (modify) — match pattern gains the `{version}` path segment.
- `js/tutoring/tutoringService.js` (modify) — `requestGeneration` stamps `generationRequestedAt`; new `forceFailGeneration`.
- `js/views/tutoring/tutoringStudent.js` (modify) — `_renderGenerationBadge` gains a "Régénérer" button + version history + a conditional "forcer l'échec" button; three new methods.
- `css/styles.css` (modify) — styles for the version-history list.
- `index.html` (modify) — cache-busting bump.
- `CODEBASE_MAP.md` (modify) — entries for every file above.

---

### Task 1: Versioned Storage paths

**Files:**
- Modify: `functions/src/storagePaths.js`
- Test: `functions/test/storagePaths.test.js`

**Interfaces:**
- Produces: `pdfPath(sessionId, version)` and `mdPath(sessionId, version)` — both now require a `version` (number) argument. Consumed by Task 3 (`generateCourse.js`).

- [ ] **Step 1: Write the failing test**

Replace the full contents of `functions/test/storagePaths.test.js` with:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { pdfPath, mdPath } = require('../src/storagePaths');

test('pdfPath includes the version segment', function () {
  assert.equal(pdfPath('sess123', 1), 'tutoringSessions/sess123/v1/cours.pdf');
});

test('mdPath includes the version segment', function () {
  assert.equal(mdPath('sess123', 2), 'tutoringSessions/sess123/v2/cours.md');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd functions && node --test test/storagePaths.test.js`
Expected: FAIL — both assertions fail because the current implementation ignores the second argument (`pdfPath('sess123', 1)` still returns `'tutoringSessions/sess123/cours.pdf'`, missing `/v1`).

- [ ] **Step 3: Write minimal implementation**

Replace the full contents of `functions/src/storagePaths.js` with:

```js
function pdfPath(sessionId, version) {
  return 'tutoringSessions/' + sessionId + '/v' + version + '/cours.pdf';
}

function mdPath(sessionId, version) {
  return 'tutoringSessions/' + sessionId + '/v' + version + '/cours.md';
}

module.exports = { pdfPath: pdfPath, mdPath: mdPath };
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd functions && node --test test/storagePaths.test.js`
Expected: PASS (2 tests, 0 failures)

- [ ] **Step 5: Commit**

```bash
git add functions/src/storagePaths.js functions/test/storagePaths.test.js
git commit -m "feat: version Storage paths for tutoring course PDFs/MD

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 2: Retry wrapper for transient Anthropic API errors

**Files:**
- Modify: `functions/src/anthropicClient.js`
- Test: `functions/test/anthropicClient.test.js`

**Interfaces:**
- Consumes: nothing new from other tasks.
- Produces: `isTransientError(err)` (boolean), `RETRY_DELAYS_MS` (mutable array, default `[1000, 2000]`) — both newly exported. `runMessageWithPauseHandling(anthropic, requestParams)` keeps its existing signature and return shape (a response object with `.stop_reason`/`.content`), used unchanged by `draftCourse`/`reviewDraft`/`fixCompileError` and by Task 3.

- [ ] **Step 1: Write the failing tests**

At the top of `functions/test/anthropicClient.test.js`, change the require line from:

```js
const { draftCourse, reviewDraft, fixCompileError, runMessageWithPauseHandling } = require('../src/anthropicClient');
```

to:

```js
const anthropicClient = require('../src/anthropicClient');
const { draftCourse, reviewDraft, fixCompileError, runMessageWithPauseHandling } = anthropicClient;

// Ramène les délais de retry réels (~1s/2s) à 0 pour ce fichier de test uniquement —
// mutation en place du tableau exporté, sans changer le comportement de production.
anthropicClient.RETRY_DELAYS_MS[0] = 0;
anthropicClient.RETRY_DELAYS_MS[1] = 0;
```

Then, immediately after the existing `textResponse` helper function (before the first `test(...)` call), add:

```js
function fakeAnthropicWithFailures(sequence) {
  var calls = [];
  var i = 0;
  return {
    calls: calls,
    messages: {
      stream: function (requestParams) {
        calls.push(requestParams);
        var item = sequence[Math.min(i, sequence.length - 1)];
        i++;
        return {
          finalMessage: async function () {
            if (item instanceof Error) throw item;
            return item;
          }
        };
      }
    }
  };
}
```

Then, at the end of the file, append:

```js
test('isTransientError recognizes rate-limit/overload status codes and network error codes', function () {
  assert.equal(anthropicClient.isTransientError({ status: 429 }), true);
  assert.equal(anthropicClient.isTransientError({ status: 529 }), true);
  assert.equal(anthropicClient.isTransientError({ status: 503 }), true);
  assert.equal(anthropicClient.isTransientError({ code: 'ECONNRESET' }), true);
  assert.equal(anthropicClient.isTransientError({ status: 400 }), false);
  assert.equal(anthropicClient.isTransientError(null), false);
});

test('runMessageWithPauseHandling retries once on a transient error then succeeds', async function () {
  var overloadedError = Object.assign(new Error('overloaded'), { status: 529 });
  var client = fakeAnthropicWithFailures([overloadedError, textResponse('done')]);
  var result = await runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  assert.equal(result.stop_reason, 'end_turn');
  assert.equal(client.calls.length, 2);
});

test('runMessageWithPauseHandling gives up after 3 attempts on a persistent transient error', async function () {
  var overloadedError = Object.assign(new Error('overloaded'), { status: 529 });
  var client = fakeAnthropicWithFailures([overloadedError, overloadedError, overloadedError]);
  await assert.rejects(function () {
    return runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  }, /overloaded/);
  assert.equal(client.calls.length, 3);
});

test('runMessageWithPauseHandling does not retry a non-transient error', async function () {
  var badRequestError = Object.assign(new Error('invalid request'), { status: 400 });
  var client = fakeAnthropicWithFailures([badRequestError]);
  await assert.rejects(function () {
    return runMessageWithPauseHandling(client, { model: 'claude-opus-4-8', messages: [{ role: 'user', content: 'hi' }] });
  }, /invalid request/);
  assert.equal(client.calls.length, 1);
});
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `cd functions && node --test test/anthropicClient.test.js`
Expected: the 6 pre-existing tests still PASS; the 4 new tests FAIL (`anthropicClient.isTransientError is not a function` / `anthropicClient.RETRY_DELAYS_MS` is `undefined`, throwing on the mutation lines before any test even runs — the whole file may fail to execute past the top-level mutation statements).

- [ ] **Step 3: Write minimal implementation**

Replace the full contents of `functions/src/anthropicClient.js` with:

```js
var promptBuilder = require('./promptBuilder');

var MODEL = 'claude-opus-4-8';
var MAX_CONTINUATIONS = 5;
var TRANSIENT_STATUS_CODES = [429, 500, 502, 503, 529];
var TRANSIENT_ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'ECONNREFUSED'];

// Délais de nouvelle tentative après une erreur transitoire de l'API Anthropic (429/5xx/529,
// ou erreur réseau) — 2 tentatives supplémentaires, 3 appels au total. Tableau mutable exposé
// pour que les tests puissent le ramener à [0, 0] et rester rapides sans changer le comportement
// de production (voir functions/test/anthropicClient.test.js).
var RETRY_DELAYS_MS = [1000, 2000];

function isTransientError(err) {
  if (!err) return false;
  if (TRANSIENT_STATUS_CODES.indexOf(err.status) !== -1) return true;
  if (TRANSIENT_ERROR_CODES.indexOf(err.code) !== -1) return true;
  return false;
}

function sleep(ms) {
  return new Promise(function (resolve) { setTimeout(resolve, ms); });
}

async function streamWithRetry(anthropic, requestParams) {
  var attempt = 0;
  while (true) {
    try {
      return await anthropic.messages.stream(requestParams).finalMessage();
    } catch (err) {
      if (!isTransientError(err) || attempt >= RETRY_DELAYS_MS.length) throw err;
      await sleep(RETRY_DELAYS_MS[attempt]);
      attempt++;
    }
  }
}

async function runMessageWithPauseHandling(anthropic, requestParams) {
  var messages = requestParams.messages.slice();
  var continuations = 0;
  var response = await streamWithRetry(anthropic, Object.assign({}, requestParams, { messages: messages }));

  while (response.stop_reason === 'pause_turn' && continuations < MAX_CONTINUATIONS) {
    messages = messages.concat([{ role: 'assistant', content: response.content }]);
    response = await streamWithRetry(anthropic, Object.assign({}, requestParams, { messages: messages }));
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

// Le tool code_execution ne renvoie que des références (file_id) aux fichiers générés
// (figures) : il faut ensuite les récupérer via l'API Files pour pouvoir les inclure
// (\includegraphics) lors de la compilation LaTeX.
async function downloadGeneratedFile(anthropic, fileId) {
  var response = await anthropic.get('/v1/files/' + fileId + '/content', {
    headers: { 'anthropic-beta': 'files-api-2025-04-14' },
    __binaryResponse: true
  });
  var arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

module.exports = {
  draftCourse: draftCourse,
  reviewDraft: reviewDraft,
  fixCompileError: fixCompileError,
  downloadGeneratedFile: downloadGeneratedFile,
  runMessageWithPauseHandling: runMessageWithPauseHandling,
  isTransientError: isTransientError,
  RETRY_DELAYS_MS: RETRY_DELAYS_MS
};
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/anthropicClient.test.js`
Expected: PASS (10 tests, 0 failures)

- [ ] **Step 5: Commit**

```bash
git add functions/src/anthropicClient.js functions/test/anthropicClient.test.js
git commit -m "feat: retry transient Anthropic API errors instead of failing the session

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 3: Version rotation on successful delivery

**Files:**
- Modify: `functions/src/generateCourse.js`
- Test: `functions/test/generateCourse.test.js`

**Interfaces:**
- Consumes: `pdfPath(sessionId, version)` / `mdPath(sessionId, version)` from Task 1; adds a new dependency `deps.storageBucket.delete(remotePath)` (async, no return value used).
- Produces: on success, `sessionRef.update(...)` now includes `generationVersion` (number) and `generationHistory` (array of `{version, pdfUrl, mdUrl, generatedAt, contentType, figuresCount}`, max length 3) in addition to the existing `generationStatus`/`pdfUrl`/`mdUrl`/`generatedAt`/`generationError` fields. Consumed by Task 6 (frontend rendering).

- [ ] **Step 1: Write the failing tests**

In `functions/test/generateCourse.test.js`, change the `storageBucket` entry inside `baseDeps()` from:

```js
    storageBucket: {
      upload: async function (localPath, remotePath) { uploaded.push({ localPath: localPath, remotePath: remotePath }); return 'https://storage.example/' + remotePath; }
    },
```

to:

```js
    storageBucket: {
      upload: async function (localPath, remotePath) { uploaded.push({ localPath: localPath, remotePath: remotePath }); return 'https://storage.example/' + remotePath; },
      delete: async function () {}
    },
```

Then append these two tests at the end of the file:

```js
test('regenerating a session rotates history to the last 3 versions and cleans up the evicted Storage files', async function () {
  var ref = fakeSessionRef({
    generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1',
    generationVersion: 3,
    generationHistory: [
      { version: 1, pdfUrl: 'https://storage.example/v1.pdf', mdUrl: 'https://storage.example/v1.md', generatedAt: new Date('2026-07-01'), contentType: 'cours', figuresCount: 0 },
      { version: 2, pdfUrl: 'https://storage.example/v2.pdf', mdUrl: 'https://storage.example/v2.md', generatedAt: new Date('2026-07-05'), contentType: 'cours', figuresCount: 0 },
      { version: 3, pdfUrl: 'https://storage.example/v3.pdf', mdUrl: 'https://storage.example/v3.md', generatedAt: new Date('2026-07-10'), contentType: 'cours', figuresCount: 0 }
    ]
  });
  var deletedPaths = [];
  var deps = baseDeps({
    storageBucket: {
      upload: async function (localPath, remotePath) { return 'https://storage.example/' + remotePath; },
      delete: async function (remotePath) { deletedPaths.push(remotePath); }
    }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationVersion, 4);
  assert.equal(last.generationHistory.length, 3);
  assert.deepEqual(last.generationHistory.map(function (h) { return h.version; }), [2, 3, 4]);
  assert.equal(last.pdfUrl, 'https://storage.example/tutoringSessions/sess1/v4/cours.pdf');
  assert.deepEqual(deletedPaths.sort(), ['tutoringSessions/sess1/v1/cours.md', 'tutoringSessions/sess1/v1/cours.pdf']);
});

test('a Storage deletion failure during rotation does not fail the generation', async function () {
  var ref = fakeSessionRef({
    generationStatus: 'generating', generationLockAt: null, generationRequestedBy: 'uid1',
    generationVersion: 3,
    generationHistory: [
      { version: 1, pdfUrl: 'a', mdUrl: 'a.md', generatedAt: new Date(), contentType: 'cours', figuresCount: 0 },
      { version: 2, pdfUrl: 'b', mdUrl: 'b.md', generatedAt: new Date(), contentType: 'cours', figuresCount: 0 },
      { version: 3, pdfUrl: 'c', mdUrl: 'c.md', generatedAt: new Date(), contentType: 'cours', figuresCount: 0 }
    ]
  });
  var deps = baseDeps({
    storageBucket: {
      upload: async function (localPath, remotePath) { return 'https://storage.example/' + remotePath; },
      delete: async function () { throw new Error('already deleted'); }
    }
  });
  await handleGenerationRequest(ref, deps);
  var last = ref.updates[ref.updates.length - 1];
  assert.equal(last.generationStatus, 'generated');
});
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `cd functions && node --test test/generateCourse.test.js`
Expected: the 6 pre-existing tests still PASS; the 2 new tests FAIL — `last.generationVersion` is `undefined` (not `4`), `last.generationHistory` is `undefined`.

- [ ] **Step 3: Write minimal implementation**

In `functions/src/generateCourse.js`, replace the delivery block:

```js
  try {
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
  } catch (deliveryError) {
    await failSession(sessionRef, deps, sessionData, deliveryError);
  }
```

with:

```js
  try {
    var newVersion = (sessionData.generationVersion || 0) + 1;
    var pdfUrl = await deps.storageBucket.upload(compileResult.pdfPath, pdfPathFor(sessionRef.id, newVersion));
    var mdLocalPath = path.join(workDir, 'cours.md');
    await deps.writeTexFile(mdLocalPath, texSource);
    var mdUrl = await deps.storageBucket.upload(mdLocalPath, mdPathFor(sessionRef.id, newVersion));

    var newEntry = {
      version: newVersion,
      pdfUrl: pdfUrl,
      mdUrl: mdUrl,
      generatedAt: deps.now(),
      contentType: sessionData.contentType || null,
      figuresCount: sessionData.figuresCount || 0
    };
    var history = (sessionData.generationHistory || []).concat([newEntry]);
    var evicted = history.length > 3 ? history.shift() : null;

    if (evicted) {
      try {
        await deps.storageBucket.delete(pdfPathFor(sessionRef.id, evicted.version));
        await deps.storageBucket.delete(mdPathFor(sessionRef.id, evicted.version));
      } catch (cleanupError) {
        console.warn('[generateCourse] échec suppression de la version évincée', evicted.version, cleanupError);
      }
    }

    await sessionRef.update({
      generationStatus: 'generated',
      generationVersion: newVersion,
      generationHistory: history,
      pdfUrl: pdfUrl,
      mdUrl: mdUrl,
      generatedAt: newEntry.generatedAt,
      generationError: null
    });

    await deps.queueSuccessEmail(deps.db, { session: sessionData, pdfUrl: pdfUrl });
  } catch (deliveryError) {
    await failSession(sessionRef, deps, sessionData, deliveryError);
  }
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd functions && node --test test/generateCourse.test.js`
Expected: PASS (8 tests, 0 failures)

Then run the full backend suite to confirm no regressions elsewhere:

Run: `cd functions && node --test test/*.test.js`
Expected: PASS (all tests, 0 failures)

- [ ] **Step 5: Commit**

```bash
git add functions/src/generateCourse.js functions/test/generateCourse.test.js
git commit -m "feat: rotate generated course PDFs, keeping the last 3 versions

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 4: Wire real Storage deletion + update Storage security rules

**Files:**
- Modify: `functions/index.js`
- Modify: `storage.rules`

**Interfaces:**
- Consumes: `deps.storageBucket.delete` contract defined by Task 3 (`async function(remotePath)`, no meaningful return value, may throw — caller already catches).
- Produces: nothing new consumed by later tasks (this is the production wiring for Task 3's dependency).

- [ ] **Step 1: Wire the real deletion function**

In `functions/index.js`, replace:

```js
      storageBucket: {
        upload: async function (localPath, remotePath) {
          await bucket.upload(localPath, { destination: remotePath });
          var file = bucket.file(remotePath);
          var signed = await file.getSignedUrl({ action: 'read', expires: '2100-01-01' });
          return signed[0];
        }
      },
```

with:

```js
      storageBucket: {
        upload: async function (localPath, remotePath) {
          await bucket.upload(localPath, { destination: remotePath });
          var file = bucket.file(remotePath);
          var signed = await file.getSignedUrl({ action: 'read', expires: '2100-01-01' });
          return signed[0];
        },
        delete: async function (remotePath) {
          await bucket.file(remotePath).delete();
        }
      },
```

- [ ] **Step 2: Verify syntax and full backend suite**

Run: `node -c functions/index.js`
Expected: no output (valid syntax)

Run: `cd functions && node --test test/*.test.js`
Expected: PASS (all tests, 0 failures — `index.js` has no dedicated test file, this just confirms nothing else broke)

- [ ] **Step 3: Update the Storage security rule for the new path shape**

Replace the full contents of `storage.rules` with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /tutoringSessions/{sessionId}/{version}/{fileName} {
      allow read: if request.auth != null &&
        firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.tutorAccess == true;
      allow write: if false;
    }
  }
}
```

(Only change: the match pattern gains the `{version}` path segment, since generated files now live at `tutoringSessions/{sessionId}/v{n}/cours.pdf` instead of `tutoringSessions/{sessionId}/cours.pdf`.)

- [ ] **Step 4: Commit**

```bash
git add functions/index.js storage.rules
git commit -m "feat: wire Storage cleanup for evicted PDF versions, update rules path

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

- [ ] **Step 5: Deploy the updated pieces**

Run: `firebase deploy --only functions,storage --project spark-learning-7d96b`
Expected: `Deploy complete!` — deploys the updated `generateCourse` function and the new `storage.rules` path pattern.

---

### Task 5: Client-side service methods (`generationRequestedAt` + force-fail)

**Files:**
- Modify: `js/tutoring/tutoringService.js`

**Interfaces:**
- Produces: `TutoringService.requestGeneration(sessionId, opts)` keeps its existing signature but now also stamps `generationRequestedAt`. New method `TutoringService.forceFailGeneration(sessionId)` — consumed by Task 6.

- [ ] **Step 1: Update `requestGeneration` and add `forceFailGeneration`**

In `js/tutoring/tutoringService.js`, replace:

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
```

with:

```js
  requestGeneration: async function(sessionId, opts) {
    var uid = AuthService.getCurrentUser().uid;
    await this._db().collection('tutoringSessions').doc(sessionId).update({
      generationStatus: 'generating',
      generationRequestedBy: uid,
      generationRequestedAt: firebase.firestore.FieldValue.serverTimestamp(),
      generationError: null,
      contentType: opts.contentType,
      figuresCount: opts.figuresCount
    });
  },

  // "Forcer l'échec" manuel : recours si une génération reste bloquée en "generating"
  // (ex. la Cloud Function a subi un timeout dur sans jamais écrire de statut final).
  forceFailGeneration: async function(sessionId) {
    await this._db().collection('tutoringSessions').doc(sessionId).update({
      generationStatus: 'failed',
      generationError: 'Marqué en échec manuellement après 10 minutes sans réponse.'
    });
  },
```

- [ ] **Step 2: Verify syntax**

Run: `node -c js/tutoring/tutoringService.js`
Expected: no output (valid syntax)

- [ ] **Step 3: Commit**

```bash
git add js/tutoring/tutoringService.js
git commit -m "feat: stamp generationRequestedAt and add forceFailGeneration

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

---

### Task 6: UI — Régénérer, version history, and force-fail button

**Files:**
- Modify: `js/views/tutoring/tutoringStudent.js`
- Modify: `css/styles.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: `TutoringService.requestGeneration(sessionId, opts)` and `TutoringService.forceFailGeneration(sessionId)` from Task 5. Reads `sess.generationVersion`/`generationHistory`/`generationRequestedAt` produced by Task 3.
- Produces: no new interfaces consumed elsewhere (leaf UI change).

- [ ] **Step 1: Replace `_renderGenerationBadge` and add three new methods**

In `js/views/tutoring/tutoringStudent.js`, replace:

```js
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

with:

```js
  _renderGenerationBadge: function(sess) {
    if (!sess.generationStatus || sess.generationStatus === 'none') return '';
    if (sess.generationStatus === 'generating') {
      var stuckLongEnough = sess.generationRequestedAt && sess.generationRequestedAt.toMillis &&
        (Date.now() - sess.generationRequestedAt.toMillis() > 10 * 60 * 1000);
      return '<div class="tt-gen-badge tt-gen-generating"><span class="tt-gen-spinner"></span>Génération en cours...' +
        (stuckLongEnough
          ? '<button class="tt-rate-btn" onclick="TutoringStudent._forceFailGeneration(\'' + TutoringStudent._esc(sess.id) + '\')">Ça prend trop de temps ? Forcer l\'échec</button>'
          : '') +
        '</div>';
    }
    if (sess.generationStatus === 'generated') {
      var history = (sess.generationHistory || []).slice();
      var previousVersions = history.slice(0, -1).reverse();
      var historyHtml = previousVersions.length === 0 ? '' :
        '<details class="tt-gen-history"><summary>Versions précédentes (' + previousVersions.length + ')</summary>' +
          previousVersions.map(function(v) {
            var dateLabel = v.generatedAt && v.generatedAt.toDate ? v.generatedAt.toDate().toLocaleDateString('fr-FR') : '';
            return '<div class="tt-gen-history-item"><span>' + TutoringStudent._esc(dateLabel) + ' (v' + v.version + ')</span>' +
              '<a href="' + TutoringStudent._esc(v.pdfUrl) + '" target="_blank">Télécharger</a></div>';
          }).join('') +
        '</details>';
      return '<div class="tt-gen-badge tt-gen-generated">Cours généré — <a href="' + TutoringStudent._esc(sess.pdfUrl) + '" target="_blank">Télécharger le PDF</a>' +
        '<button class="tt-rate-btn" onclick="TutoringStudent._showRegenerateForm(\'' + TutoringStudent._esc(sess.id) + '\', \'' + TutoringStudent._esc(sess.contentType || 'cours') + '\', ' + (sess.figuresCount || 0) + ')">Régénérer</button>' +
        historyHtml +
      '</div>';
    }
    if (sess.generationStatus === 'failed') {
      return '<div class="tt-gen-badge tt-gen-failed">Échec de la génération : ' + TutoringStudent._esc(sess.generationError || '') +
        '<button class="tt-rate-btn" onclick="TutoringStudent._requestGeneration(\'' + TutoringStudent._esc(sess.id) + '\', \'' + TutoringStudent._esc(sess.contentType || 'cours') + '\', ' + (sess.figuresCount || 0) + ')">Générer un cours</button></div>';
    }
    return '';
  },

  _showRegenerateForm: function(sessionId, contentType, figuresCount) {
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringStudent._renderFiche()">← Retour</button>' +
          '<h1 class="tt-title">Régénérer le cours</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringStudent._submitRegenerateForm(event, \'' + TutoringStudent._esc(sessionId) + '\')">' +
          '<label class="tt-label">Type de contenu<select id="tt-regen-content-type" class="tt-input">' +
            '<option value="cours"' + (contentType === 'cours' ? ' selected' : '') + '>Fiche de cours</option>' +
            '<option value="exercices"' + (contentType === 'exercices' ? ' selected' : '') + '>Exercices corrigés</option>' +
            '<option value="les_deux"' + (contentType === 'les_deux' ? ' selected' : '') + '>Les deux</option>' +
          '</select></label>' +
          '<label class="tt-label">Nombre de figures<input type="number" id="tt-regen-figures-count" class="tt-input" min="0" value="' + figuresCount + '"/></label>' +
          '<button type="submit" class="tt-submit-btn">Régénérer</button>' +
        '</form>' +
      '</div>';
  },

  _submitRegenerateForm: function(e, sessionId) {
    e.preventDefault();
    var contentType = document.getElementById('tt-regen-content-type').value;
    var figuresCount = parseInt(document.getElementById('tt-regen-figures-count').value, 10) || 0;
    TutoringService.requestGeneration(sessionId, { contentType: contentType, figuresCount: figuresCount })
      .then(function() {
        showToast('Régénération lancée !', 'success');
        TutoringStudent._renderFiche();
      })
      .catch(function() {
        showToast('Erreur lors du lancement de la régénération.', 'error');
      });
    return false;
  },

  _forceFailGeneration: function(sessionId) {
    TutoringService.forceFailGeneration(sessionId)
      .then(function() { showToast('Génération marquée en échec.', 'info'); })
      .catch(function() { showToast('Erreur lors de la mise à jour.', 'error'); });
  },
```

- [ ] **Step 2: Verify syntax**

Run: `node -c js/views/tutoring/tutoringStudent.js`
Expected: no output (valid syntax)

- [ ] **Step 3: Add CSS for the version-history list**

In `css/styles.css`, immediately after the existing `.tt-gen-generated a { ... }` rule (around line 5810, right before the `.tt-gen-failed` block), insert:

```css
.tt-gen-history { width: 100%; margin-top: 0.4rem; font-size: 0.8rem; }
.tt-gen-history summary { cursor: pointer; font-weight: 600; }
.tt-gen-history-item { display: flex; justify-content: space-between; gap: 0.5rem; padding: 0.25rem 0; }
.tt-gen-history-item a { color: inherit; }
```

- [ ] **Step 4: Bump cache-busting version in `index.html`**

Run this to find the current version number used on every local script/link tag:

```bash
grep -o '?v=[0-9]*' index.html | sort -u
```

Expected: a single value, e.g. `?v=30`. Then bump every occurrence by 1 (replace `N` and `N+1` with the actual numbers found):

```bash
sed -i 's/?v=30"/?v=31"/g' index.html
grep -c '?v=31"' index.html   # should match the total tag count
grep -c '?v=30"' index.html   # should be 0
```

- [ ] **Step 5: Commit**

```bash
git add js/views/tutoring/tutoringStudent.js css/styles.css index.html
git commit -m "feat: add Régénérer button, version history, and force-fail recovery to the UI

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

- [ ] **Step 6: Manual browser verification (no automated frontend test runner in this project)**

- Open a student's fiche with a session already `generationStatus: "generated"` — confirm the "Régénérer" button appears next to the download link.
- Click "Régénérer", change the figure count, submit — confirm the badge returns to "Génération en cours..." and, once done, the version count under "Versions précédentes" increases and the previous PDF is still downloadable.
- Regenerate 4 times total on the same session — confirm "Versions précédentes" never shows more than 3 entries.
- On a session manually set to `generationStatus: "generating"` with `generationRequestedAt` more than 10 minutes in the past (edit directly in the Firebase console for this test), confirm the "Forcer l'échec" button appears and, once clicked, the badge switches to the failed state with the expected message.

---

### Task 7: Update `CODEBASE_MAP.md`

**Files:**
- Modify: `CODEBASE_MAP.md`

**Interfaces:**
- Consumes: nothing (documentation only).
- Produces: nothing (terminal task).

- [ ] **Step 1: Update the entries touched by this plan**

In `CODEBASE_MAP.md`, update the `functions/` section bullet for `generateCourse.js` to mention version rotation, the `anthropicClient.js` bullet to mention the retry wrapper, and the `js/tutoring/tutoringService.js` / `js/views/tutoring/tutoringStudent.js` bullets to mention `forceFailGeneration`/`_showRegenerateForm`/version history, matching the existing one-line-per-function style already used in that file (see the `## functions/` and `## js/tutoring/tutoringService.js` sections for the current format to extend).

- [ ] **Step 2: Commit**

```bash
git add CODEBASE_MAP.md
git commit -m "docs: update CODEBASE_MAP for the PDF versioning/retry changes

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```
