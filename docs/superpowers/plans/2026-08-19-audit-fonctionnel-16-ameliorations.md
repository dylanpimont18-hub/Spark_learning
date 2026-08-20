# Audit fonctionnel 2026-08-19 — 16 améliorations — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the 16 improvements identified by the 2026-08-19 functional audit (student/teacher/tutor/admin), grouped A–F per the source doc, each verified with a real browser test against a real test account (production Firebase — no emulator exists in this project).

**Architecture:** Vanilla JS SPA, no bundler, no framework. Every file is a global script loaded in a fixed order from `index.html`. New shared behavior is added as new global objects/files (`ModuleSearch`, `Modal`) following the exact conventions already used by `js/components/globalSearch.js` and `js/components/teacherErrorModal.js` — plain object literals, `onclick="Global.method(...)"` string handlers, manual DOM string-building (no templating engine).

**Tech Stack:** Vanilla JS (ES2017+, `var`/`function` style prevails in most touched files — match the surrounding file's style, don't introduce `const`/arrow functions into files that don't already use them), Firebase JS SDK v10 (compat mode, global `firebase.firestore()`), KaTeX (not touched by this plan — no pedagogical content involved).

**Spec:** `docs/prompt-implementation-audit-fonctionnel-2026-08-19.md` (the audit's own launch prompt — read alongside this plan; it explains *why* each item matters and the guardrails around test accounts / Firestore rules).

## Global Constraints

- **No bundler, no `export`/`import`.** Never introduce them, especially in `js/engines/companionEngine.js` (Task 8) — plain global functions only, per project CLAUDE.md.
- **No automated test runner exists in this codebase.** There is no Jest/Mocha/etc. "Write the failing test" steps below are replaced by concrete **manual verification** steps: a specific URL/route, a specific test account, specific clicks, and the specific expected result — this mirrors exactly how the audit's own "Vérification" section prescribes checking things (real browser test with a real account beats reading the code, because that is literally how the 2 critical bugs in this same audit were found).
- **Production Firebase only.** `firebase.json` declares no emulators. All manual verification hits the real `spark-learning-7d96b` project. Serve locally with `node scripts/tmp-static-server.js <port>` (already exists) instead of relying on deployed hosting.
- **Test accounts:** create new accounts prefixed `impl-audit-2026-08-19-...` (e.g. email `impl-audit-2026-08-19-student1@example.com`). Never use a real user's account. An admin test account is needed for Tasks 6, 10, 11 (admin-visible pieces), 12, 13 — reuse one if it already exists from the original audit session, otherwise a human needs to flip one test account's `role` to `admin` directly in the Firestore console (30-second manual step, not blocked on).
- **Cache-busting is a single final pass (Task 15), not per-task.** Do not bump `?v=N` after every task — it would churn `index.html` 16 times for no reason. The current baseline in `index.html` is `?v=59` (already bumped from `?v=56` for this audit's 2 pre-existing critical-bug fixes, which are in the working tree uncommitted — see below). Confirm the live baseline at Task-15 time with `grep -o "?v=[0-9]*" index.html | sort -u` before computing the next number, in case another session has since bumped it further.
- **`js/data/` is out of scope.** None of these 16 items touch pedagogical content. Do not open files under `js/data/` or `docs/programmes-*.md`.
- **Working tree already contains 2 uncommitted fixes that are correct and must not be touched:** `js/app.js` (admin/teacher route guard, ~line 210-220) and `js/auth/authService.js` (`joinClass` read-after-write fix, ~line 76-104). Leave them exactly as-is; they are prerequisites this plan builds on top of (e.g. Task 3 reuses the now-fixed `joinClass`).
- **The working tree also has unrelated uncommitted changes** (files under `js/data/**`, `scripts/manuel/**`, `docs/manuels/PROGRESSION.md` — a separate content/manuals workstream on the current `manuels-spark` branch). Do not stage, commit, revert, or otherwise touch these files. When staging this plan's work, stage only the exact files each task modifies.
- **Commits:** do not run `git commit` as part of executing this plan unless the user has explicitly asked for commits in this session — per this project's standing operating rule, commits happen only on explicit request. Leave changes staged-or-not as convenient; a human will decide when to commit.
- **French UI, existing tone.** All new user-facing strings are French, matching the terse, non-alarmist tone already used in this codebase's toasts/labels (e.g. "Erreur lors de l'archivage.", not "Une erreur critique est survenue !"). This is app UI copy, not pedagogical content, so the CLAUDE.md decimal/KaTeX/socratic-tone rules for `js/data/` do not apply here — just stay consistent with neighboring strings in the same file.
- **`node scripts/check-decimal-notation.js`** only matters if a task's new UI text interpolates a decimal number. None of the 16 items do (checked during planning) — skip it unless a task deviates from this plan and starts rendering a formatted number.
- **Regression check (run once, after Task 16, or spot-checked earlier if in doubt):** student registration with a class code still works; `/admin` and `/teacher` are still blocked (redirected home) for a logged-in student.

---

### Task 1: Toast vs cookie-consent banner overlap (#1)

Both `.toast` (`js/app.js` `showToast`) and `.consent-banner` (`js/consent.js`) are `position: fixed`, anchored to the viewport bottom, and can be visible simultaneously. Fix: track the actual rendered banner height in a CSS custom property, and have the toast add that height to its own offset — self-adjusting to real content height/viewport width instead of guessing a fixed pixel gap.

**Files:**
- Modify: `js/consent.js:51-77` (`showBanner`, `hideBanner`)
- Modify: `js/consent.js:20-33` (`init`, stale-banner cleanup branch)
- Modify: `css/styles.css:2740-2758` (`.toast`) and `css/styles.css:3368` (mobile override)

- [ ] **Step 1: Set `--consent-banner-h` when the banner becomes visible**

In `js/consent.js`, replace:
```js
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('consent-banner-visible'));
  },

  hideBanner() {
    const el = document.getElementById('consent-banner');
    if (!el) return;
    el.classList.remove('consent-banner-visible');
    setTimeout(() => el.remove(), 300);
  }
```
with:
```js
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.classList.add('consent-banner-visible');
      document.documentElement.style.setProperty('--consent-banner-h', el.offsetHeight + 'px');
    });
  },

  hideBanner() {
    const el = document.getElementById('consent-banner');
    if (!el) return;
    el.classList.remove('consent-banner-visible');
    document.documentElement.style.setProperty('--consent-banner-h', '0px');
    setTimeout(() => el.remove(), 300);
  }
```

- [ ] **Step 2: Clear the var when a stale pre-rendered banner is removed**

In `js/consent.js`, in `init()`, replace:
```js
    const stale = document.getElementById('consent-banner');
    if (stale) stale.remove();
```
with:
```js
    const stale = document.getElementById('consent-banner');
    if (stale) {
      stale.remove();
      document.documentElement.style.setProperty('--consent-banner-h', '0px');
    }
```

- [ ] **Step 3: Make `.toast` offset by the banner height**

In `css/styles.css`, replace:
```css
.toast {
  position: fixed;
  bottom: 28px;
```
with:
```css
.toast {
  position: fixed;
  bottom: calc(28px + var(--consent-banner-h, 0px));
```

- [ ] **Step 4: Same for the mobile override**

In `css/styles.css`, replace:
```css
  .toast { bottom: 72px; padding: 12px 20px; font-size: 0.85rem; }
```
with:
```css
  .toast { bottom: calc(72px + var(--consent-banner-h, 0px)); padding: 12px 20px; font-size: 0.85rem; }
```

- [ ] **Step 5: Manual verification**

Serve locally (`node scripts/tmp-static-server.js 5500`), open in a fresh browser profile (or clear `sparkConsent` in localStorage) so the cookie banner shows. Trigger any toast (e.g. sign out and back in, or any action that calls `showToast`). Confirm the toast appears fully above the banner, not overlapping, at both desktop and mobile viewport widths (DevTools device toolbar, ≤480px). Accept/reject the banner and confirm a subsequent toast returns to the normal (non-offset) position.

---

### Task 2: Hide "Enseignant" nav link from students (#2)

**Files:**
- Modify: `js/app.js:901-913` (`_setupCommonListeners`)

- [ ] **Step 1: Condition `#nav-teacher` on role, not just auth state**

In `js/app.js`, replace:
```js
  var isGuest = !AuthGuard.isAuthenticated();
  var teacherNav = document.getElementById('nav-teacher');
  if (teacherNav) teacherNav.style.display = isGuest ? 'none' : '';
```
with:
```js
  var isGuest = !AuthGuard.isAuthenticated();
  var teacherNav = document.getElementById('nav-teacher');
  if (teacherNav) teacherNav.style.display = (!isGuest && typeof AuthGuard !== 'undefined' && AuthGuard.isTeacher()) ? '' : 'none';
```
(`AuthGuard.isTeacher()` at `js/auth/authGuard.js:33` already returns true for both `role === 'teacher'` and `role === 'admin'`, matching who the button's own click handler at `js/app.js:920-925` already routes correctly — students never had a valid destination here.)

- [ ] **Step 2: Manual verification**

Log in with a **student** test account: confirm the "Enseignant" nav button is gone (desktop and the `👨‍🏫` short mobile variant). Log in with a **teacher** test account: confirm it's still visible and still opens `TeacherDashboard`. Log in with the **admin** test account: confirm it's still visible and opens `AdminPanel`. Log out (guest): confirm it stays hidden.

---

### Task 3: Join a class from an already-logged-in student account (#7)

`AuthService.joinClass(uid, classCode)` (already fixed, do not touch) is currently only called from the registration flow. Add an inline "join another class" form on the student's home page — deliberately **not** a modal (Task 5's modal component doesn't exist yet at this point in the doc's own group ordering, and a one-field inline form is simpler UX anyway than a modal for this).

**Files:**
- Modify: `js/views/home.js:307` (placeholder div next to the existing assignment widget) and add a new function near `renderAssignmentWidget` (`js/views/home.js:181-204`)
- Modify: `js/app.js:508` (call the new render function alongside `renderAssignmentWidget()`)

**Interfaces:**
- Produces: `renderJoinClassWidget()` (global function, no args, async) — populates `#home-join-class-widget`.

- [ ] **Step 1: Add the placeholder container**

In `js/views/home.js`, replace:
```js
		<div id="home-assignment-widget" style="padding: 0 var(--space-lg);max-width:900px;margin:0 auto;"></div>
```
with:
```js
		<div id="home-assignment-widget" style="padding: 0 var(--space-lg);max-width:900px;margin:0 auto;"></div>
		<div id="home-join-class-widget" style="padding: 0 var(--space-lg);max-width:900px;margin:0 auto;"></div>
```

- [ ] **Step 2: Add the render + submit functions**

In `js/views/home.js`, right after the closing brace of `renderAssignmentWidget` (after line 204, before `renderSrsReviewWidget`), insert:
```js
function renderJoinClassWidget() {
  var widgetEl = document.getElementById('home-join-class-widget');
  if (!widgetEl) return;
  if (typeof AuthGuard === 'undefined' || !AuthGuard.isAuthenticated() || AuthGuard.getRole() !== 'student') {
    widgetEl.innerHTML = '';
    return;
  }
  widgetEl.innerHTML =
    '<form class="hw-join-class-form" onsubmit="return submitJoinClassWidget(event)">' +
      '<label class="hw-join-class-label">Rejoindre une classe<input type="text" id="home-join-class-code" class="hw-join-class-input" placeholder="Code de la classe" maxlength="20"/></label>' +
      '<button type="submit" class="hw-join-class-btn">Rejoindre</button>' +
    '</form>';
}

function submitJoinClassWidget(e) {
  e.preventDefault();
  var input = document.getElementById('home-join-class-code');
  var code = input ? input.value.trim() : '';
  if (!code) return false;
  var uid = AuthService.getCurrentUser().uid;
  AuthService.joinClass(uid, code).then(function() {
    showToast('Classe rejointe !', 'success');
    if (input) input.value = '';
    if (typeof renderAssignmentWidget === 'function') renderAssignmentWidget();
  }).catch(function() {
    showToast('Code de classe invalide.', 'error');
  });
  return false;
}
```

- [ ] **Step 3: Wire it into the home route**

In `js/app.js`, replace:
```js
    case 'home':       app.innerHTML = renderHome(); if (typeof renderAssignmentWidget === 'function') renderAssignmentWidget(); break;
```
with:
```js
    case 'home':       app.innerHTML = renderHome(); if (typeof renderAssignmentWidget === 'function') renderAssignmentWidget(); if (typeof renderJoinClassWidget === 'function') renderJoinClassWidget(); break;
```

- [ ] **Step 4: Minimal CSS**

In `css/styles.css`, add near the existing `.hw-assignment-widget` rules (search for that class to find the right neighborhood):
```css
.hw-join-class-form {
  display: flex;
  align-items: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-md);
  flex-wrap: wrap;
}
.hw-join-class-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  color: var(--text-muted);
  flex: 1 1 200px;
}
.hw-join-class-input {
  padding: 8px 12px;
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
  font-size: 0.95rem;
}
.hw-join-class-btn {
  padding: 8px 18px;
  border-radius: var(--radius);
  background: var(--primary);
  color: var(--on-primary);
  border: none;
  font-weight: 600;
  cursor: pointer;
}
```

- [ ] **Step 5: Manual verification**

Log in as a student test account that already belongs to one class. On the home page, enter a **second**, valid class code created by a teacher test account and submit — confirm success toast, confirm (in the Firestore console or by having the teacher account reload their dashboard) the student now appears in both classes. Try an invalid code — confirm the "Code de classe invalide." error toast and that the (still-valid) first class membership is untouched. Log in as a **teacher** or as a **guest** — confirm the widget doesn't render at all.

---

### Task 4: Shared module search component (#3, #12, #14)

Three places each reimplement an unfiltered module list; the playlist one also hard-caps at 50 (`js/playlist.js:264`, `.slice(0, 50)`), silently making modules past #50 impossible to add to a playlist. Build one small filtering utility (`js/components/moduleSearch.js`, mirroring the tokenize/normalize logic already proven in `js/components/globalSearch.js:5-36`) and wire a search input into each of the 3 call sites.

**Files:**
- Create: `js/components/moduleSearch.js`
- Modify: `index.html:207` (new script tag, next to `globalSearch.js`)
- Modify: `js/playlist.js:228-297` (`_builderContentHTML`) — remove the `.slice(0, 50)`
- Modify: `js/views/teacherDashboard.js:391-404` (module `<select>` in `_renderClassDetail`)
- Modify: `js/views/adminPanel.js:261-334` (`_renderModulesTab`)
- Modify: `css/styles.css` (one small `.module-search-input` rule, reused by all 3 call sites)

**Interfaces:**
- Produces: `ModuleSearch.filter(modules, query)` — pure function, returns filtered array (all modules if `query` is empty/whitespace). `ModuleSearch.normalize(str)` — lowercase + accent-stripped, exposed for reuse.

- [ ] **Step 1: Create the shared filter utility**

Write `js/components/moduleSearch.js`. **For the `normalize` function's regex specifically: do not hand-type it.** `js/components/globalSearch.js:6` already has a working, shipped accent-stripping line:
```js
  return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
```
(that's a Unicode escape sequence for the combining-diacritics range — backslash, lowercase u, then the four hex digits `0300`, a hyphen, then backslash-u and `036f`, all inside a `[...]` character class. Hand-retyping this specific kind of regex is exactly where silent corruption creeps in — a stray keystroke or an editor's "smart" Unicode normalization can turn the intended 6-character escape into a literal combining glyph that looks nearly identical but behaves completely differently.) Use your editor's copy function on that exact line from `js/components/globalSearch.js:6` rather than retyping the character class, and adapt only the surrounding parts (drop the trailing `.trim()` here since `filter` already trims separately). Build the file as:
```js
var ModuleSearch = {
  normalize: function(str) {
    // Regex copiée telle quelle depuis js/components/globalSearch.js:6 — ne pas retaper
    // la classe de caractères Unicode à la main (voir note dans le plan d'implémentation).
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  filter: function(modules, query) {
    var q = ModuleSearch.normalize(query).trim();
    if (!q) return modules;
    var terms = q.split(/\s+/).filter(Boolean);
    return modules.filter(function(m) {
      var haystack = ModuleSearch.normalize(
        (m.title || '') + ' ' + (m.subtitle || '') + ' ' + (m.subject || '') + ' ' +
        (m.level || '') + ' ' + (m.keywords || []).join(' ')
      );
      return terms.every(function(t) { return haystack.indexOf(t) !== -1; });
    });
  }
};
```

- [ ] **Step 2: Register the script**

In `index.html`, replace:
```html
  <script src="js/components/globalSearch.js?v=59"></script>
```
with:
```html
  <script src="js/components/globalSearch.js?v=59"></script>
  <script src="js/components/moduleSearch.js?v=59"></script>
```
(cache-bust version stays `?v=59` here — the real bump happens once, in Task 15)

- [ ] **Step 3: Shared CSS for the search inputs**

In `css/styles.css`, add near the other form-input rules:
```css
.module-search-input {
  width: 100%;
  padding: 8px 12px;
  margin-bottom: var(--space-sm);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius);
  font-size: 0.95rem;
  box-sizing: border-box;
}
```

- [ ] **Step 4: Playlist picker — remove the 50-cap, add live filtering**

The picker's module list lives in `state.playlistBuilder` (the file's own `pb` shorthand, `const pb = state.playlistBuilder;`, re-declared at the top of every function in this file that touches it — e.g. `js/playlist.js:229`). Its initial shape is set once in `initPlaylistBuilder()` (`js/playlist.js:147-156`).

In `js/playlist.js`, replace:
```js
    state.playlistBuilder = {
      title: 'Mon parcours',
      steps: [],
      showPicker: false,
      generatedLink: ''
    };
```
with:
```js
    state.playlistBuilder = {
      title: 'Mon parcours',
      steps: [],
      showPicker: false,
      pickerQuery: '',
      generatedLink: ''
    };
```

In `js/playlist.js`, in `_builderContentHTML` (`js/playlist.js:228-297`), replace:
```js
  let pickerHTML = '';
  if (pb.showPicker) {
    const modules = window.MODULES || [];
    pickerHTML = `
      <div class="playlist-add-area">
        <p style="font-weight:600;margin-bottom:var(--space-sm);">Choisir un module et un onglet :</p>
        <div class="playlist-module-picker">
          ${modules.slice(0, 50).map(m => `
```
with:
```js
  let pickerHTML = '';
  if (pb.showPicker) {
    const modules = ModuleSearch.filter(window.MODULES || [], pb.pickerQuery || '');
    pickerHTML = `
      <div class="playlist-add-area">
        <p style="font-weight:600;margin-bottom:var(--space-sm);">Choisir un module et un onglet :</p>
        <input type="text" class="module-search-input" placeholder="Rechercher un module..." value="${(pb.pickerQuery || '').replace(/"/g, '&quot;')}" oninput="setPlaylistPickerQuery(this.value)"/>
        <div class="playlist-module-picker">
          ${modules.map(m => `
```
(the rest of that template literal — the per-module card markup and its closing tags, `js/playlist.js:264-275` — is untouched; only the `const modules = ...` line and the addition of the search `<input>` change.)

Add this new top-level function next to `togglePlaylistPicker` (`js/playlist.js:213-218`), following the same free-function convention every other mutator in this file uses (`addPlaylistStep`, `removePlaylistStep`, `togglePlaylistPicker` — plain functions reading `state.playlistBuilder`, not object methods):
```js
function setPlaylistPickerQuery(value) {
  const pb = state.playlistBuilder;
  if (!pb) return;
  pb.pickerQuery = value;
  _refreshBuilder();
}
```
Note: `_refreshBuilder()` replaces `#playlist-builder-area`'s `innerHTML` wholesale (`js/playlist.js:220-226`), so the search `<input>` itself gets recreated on every keystroke and loses focus — this exactly mirrors the pre-existing live-search pattern already shipped in `js/views/tutoring/tutoringHome.js` (`oninput="TutoringHome._renderList(this.value)"`, same full-`innerHTML`-replace approach). Match that established convention rather than inventing a different (e.g. focus-preserving, partial-DOM-patch) technique for this one input — call this out in Step 7's manual verification rather than treating it as a defect to fix.

- [ ] **Step 5: Teacher dashboard — filter the `<select>` options live**

In `js/views/teacherDashboard.js`, replace:
```js
var moduleOptions = (window.MODULES || [])
  .filter(function(m) { return typeof isModuleUnavailable !== 'function' || !isModuleUnavailable(m.id); })
  .map(function(m) {
    return '<option value="' + TeacherDashboard._esc(m.id) + '">' + TeacherDashboard._esc(m.title) + '</option>';
  }).join('');
var assignForm = '<div class="td-assignment-form">' +
  '<label>Module' +
    '<select id="td-assign-module">' + moduleOptions + '</select>' +
  '</label>' +
```
with:
```js
var allAssignableModules = (window.MODULES || [])
  .filter(function(m) { return typeof isModuleUnavailable !== 'function' || !isModuleUnavailable(m.id); });
TeacherDashboard._assignableModules = allAssignableModules;
var moduleOptions = allAssignableModules.map(function(m) {
    return '<option value="' + TeacherDashboard._esc(m.id) + '">' + TeacherDashboard._esc(m.title) + '</option>';
  }).join('');
var assignForm = '<div class="td-assignment-form">' +
  '<label>Module' +
    '<input type="text" class="module-search-input" placeholder="Rechercher un module..." oninput="TeacherDashboard._filterAssignModules(this.value)"/>' +
    '<select id="td-assign-module">' + moduleOptions + '</select>' +
  '</label>' +
```
Then add this method to the `TeacherDashboard` object (near `_prefillAssignment`, line 286):
```js
  _filterAssignModules: function(query) {
    var select = document.getElementById('td-assign-module');
    if (!select) return;
    var filtered = ModuleSearch.filter(TeacherDashboard._assignableModules || [], query);
    select.innerHTML = filtered.map(function(m) {
      return '<option value="' + TeacherDashboard._esc(m.id) + '">' + TeacherDashboard._esc(m.title) + '</option>';
    }).join('');
  },
```
This deliberately keeps the `<select id="td-assign-module">` element and its `id` — `_addAssignment` (`js/views/teacherDashboard.js:528`) reads `document.getElementById('td-assign-module').value` and needs zero changes.

- [ ] **Step 6: Admin modules tab — filter the grid live**

Read `js/views/adminPanel.js:261-334` (`_renderModulesTab`) in full first. Extract the grid-building portion (the `.map(...)` over all modules that currently builds the lock/maintenance toggle cards) into a new method `_renderModulesGrid(modules)` that returns just that HTML fragment and is assigned into a dedicated container, e.g. `<div id="ap-modules-grid">...</div>`. Add a search input above that container:
```js
'<input type="text" class="module-search-input" placeholder="Rechercher un module..." oninput="AdminPanel._filterModulesGrid(this.value)"/>' +
'<div id="ap-modules-grid">' + AdminPanel._renderModulesGrid(sortedModules) + '</div>'
```
where `sortedModules` is the existing sorted-by-level/subject/title array already built at the top of `_renderModulesTab` — cache it on `AdminPanel._sortedModules` so the filter handler can re-derive from it:
```js
  _filterModulesGrid: function(query) {
    var grid = document.getElementById('ap-modules-grid');
    if (!grid) return;
    grid.innerHTML = AdminPanel._renderModulesGrid(ModuleSearch.filter(AdminPanel._sortedModules || [], query));
  },
```
The KPI counts (`lockedCount`, `maintenanceCount`) and per-subject controls block stay computed from the **full** unfiltered list (they're global stats, not scoped to the search) — only the grid itself gets filtered.

- [ ] **Step 7: Manual verification**

*Playlist:* open the playlist builder, open the picker, type a query matching a module beyond the old 50-item cutoff (e.g. a BTS module, alphabetically/insertion-order past #50) — confirm it now appears and can be added. Clear the query — confirm the full list (>50 modules) renders without the old cap.
*Teacher dashboard:* as a teacher, open a class, type in the new module search above the assignment `<select>` — confirm the select's options shrink to matches; assign one of the filtered modules — confirm `_addAssignment` still works (still reads the right `<select>` value).
*Admin panel:* on the Modules tab, type a query — confirm only matching module cards remain, lock/maintenance toggles on a filtered card still work, and the KPI numbers at the top do **not** change when filtering.

---

### Task 5: Generic modal component, replacing native `prompt()`/`confirm()` (#5)

7 native dialog calls across 4 files (6 `confirm()`, 1 `prompt()`) get replaced by one small reusable modal, built the same way `js/components/teacherErrorModal.js` already builds its overlay (used here purely as a structural template, not modified/merged itself — it stays as-is).

**Files:**
- Create: `js/components/modal.js`
- Modify: `index.html:208` (script tag)
- Modify: `css/styles.css` (new `.app-modal-*` rules, placed after the existing `TEACHER ERROR MODAL` block, `css/styles.css:4118-4173`)
- Modify: `js/app.js:961-963` (sign-out confirm) and `js/app.js:748-750` (Escape-key wiring)
- Modify: `js/views/adminPanel.js:149-150` (backfill confirm), `js/views/adminPanel.js:618` (archive confirm)
- Modify: `js/views/teacherDashboard.js:60` (create-class prompt), `js/views/teacherDashboard.js:499` (remove-student confirm), `js/views/teacherDashboard.js:544` (delete-assignment confirm)
- Modify: `js/views/tutoring/tutoringStudent.js:108` (archive-student confirm)

**Interfaces:**
- Produces: `Modal.open({title, message, inputLabel, inputValue, confirmText, cancelText, onConfirm(value), onCancel})` — `value` passed to `onConfirm` is the trimmed input string when `inputLabel` is set, otherwise `true`. `Modal.close()`.

- [ ] **Step 1: Create the modal component**

Write `js/components/modal.js`:
```js
var Modal = {
  _opts: null,

  open: function(opts) {
    Modal.close();
    Modal._opts = opts || {};
    var overlay = document.createElement('div');
    overlay.id = 'app-modal';
    overlay.className = 'app-modal-overlay';
    var inputHtml = Modal._opts.inputLabel
      ? '<label class="app-modal-label">' + Modal._esc(Modal._opts.inputLabel) +
        '<input type="text" id="app-modal-input" class="app-modal-input" value="' +
        Modal._esc(Modal._opts.inputValue || '') + '"/></label>'
      : '';
    overlay.innerHTML =
      '<div class="app-modal-card" role="dialog" aria-modal="true" aria-label="' + Modal._esc(Modal._opts.title || '') + '">' +
        '<button class="app-modal-close" onclick="Modal._cancelClick()" aria-label="Fermer">×</button>' +
        (Modal._opts.title ? '<h3 class="app-modal-title">' + Modal._esc(Modal._opts.title) + '</h3>' : '') +
        (Modal._opts.message ? '<p class="app-modal-message">' + Modal._esc(Modal._opts.message) + '</p>' : '') +
        inputHtml +
        '<div class="app-modal-actions">' +
          '<button class="btn btn-secondary" onclick="Modal._cancelClick()">' + Modal._esc(Modal._opts.cancelText || 'Annuler') + '</button>' +
          '<button class="btn btn-primary" onclick="Modal._confirmClick()">' + Modal._esc(Modal._opts.confirmText || 'Confirmer') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.onclick = function(e) { if (e.target === overlay) Modal._cancelClick(); };
    var input = document.getElementById('app-modal-input');
    if (input) { input.focus(); input.select(); }
  },

  close: function() {
    var el = document.getElementById('app-modal');
    if (el) el.remove();
    Modal._opts = null;
  },

  _confirmClick: function() {
    var opts = Modal._opts;
    if (!opts) return;
    var value = true;
    if (opts.inputLabel) {
      var input = document.getElementById('app-modal-input');
      value = input ? input.value.trim() : '';
    }
    Modal.close();
    if (opts.onConfirm) opts.onConfirm(value);
  },

  _cancelClick: function() {
    var opts = Modal._opts;
    Modal.close();
    if (opts && opts.onCancel) opts.onCancel();
  },

  _esc: function(str) { return (typeof escapeHtml === 'function') ? escapeHtml(str) : String(str == null ? '' : str); }
};
```

- [ ] **Step 2: Register the script + Escape-key handling**

In `index.html`, replace:
```html
  <script src="js/components/teacherErrorModal.js?v=59"></script>
```
with:
```html
  <script src="js/components/teacherErrorModal.js?v=59"></script>
  <script src="js/components/modal.js?v=59"></script>
```

In `js/app.js`, replace:
```js
    // Close teacher modal first
    const teacherModal = document.getElementById('teacher-modal');
    if (teacherModal) { e.preventDefault(); closeTeacherErrorModal(); return; }
```
with:
```js
    // Close generic app modal first, then the teacher-error modal
    const appModal = document.getElementById('app-modal');
    if (appModal) { e.preventDefault(); Modal._cancelClick(); return; }

    const teacherModal = document.getElementById('teacher-modal');
    if (teacherModal) { e.preventDefault(); closeTeacherErrorModal(); return; }
```

- [ ] **Step 3: CSS**

In `css/styles.css`, after the `TEACHER ERROR MODAL` block (after line 4173), add:
```css
/* ── Generic app modal (replaces native prompt()/confirm()) ── */
.app-modal-overlay {
  position: fixed; inset: 0; z-index: 400;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  padding: var(--space-lg);
}
.app-modal-card {
  background: var(--bg-card); border-radius: var(--radius);
  max-width: 480px; width: 100%; padding: var(--space-xl);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2); position: relative;
}
.app-modal-close {
  position: absolute; top: 12px; right: 12px;
  background: none; border: none; font-size: 1.4rem; line-height: 1;
  cursor: pointer; color: var(--text-muted);
}
.app-modal-title { margin: 0 0 var(--space-md); }
.app-modal-message { margin: 0 0 var(--space-md); color: var(--text-muted); }
.app-modal-label { display: flex; flex-direction: column; gap: 4px; margin-bottom: var(--space-md); }
.app-modal-input {
  padding: 8px 12px; border: var(--border-width) solid var(--border);
  border-radius: var(--radius); font-size: 0.95rem;
}
.app-modal-actions { display: flex; justify-content: flex-end; gap: var(--space-sm); }
```

- [ ] **Step 4: Replace the 6 `confirm()` calls (pure yes/no)**

Each follows the same shape. In `js/views/adminPanel.js`, replace:
```js
    if (!confirm('Lancer la migration des accès enseignants ? Cette opération est sûre et peut être relancée sans risque.')) return;
    try {
```
with:
```js
    Modal.open({
      title: 'Migration des accès enseignants',
      message: 'Lancer la migration des accès enseignants ? Cette opération est sûre et peut être relancée sans risque.',
      confirmText: 'Lancer',
      onConfirm: function() { AdminPanel._runBackfillTeacherIdsConfirmed(); }
    });
  },

  _runBackfillTeacherIdsConfirmed: async function() {
    try {
```
(this moves the rest of the original function body — everything after the removed `if (!confirm...) return;` line — into this new `_runBackfillTeacherIdsConfirmed` method unchanged; `_runBackfillTeacherIds` itself becomes just the confirm-and-delegate wrapper above.)

Apply the exact same restructuring pattern (split into an opener that calls `Modal.open` + a `...Confirmed` method holding the original try/catch body) to the remaining 5 `confirm()` sites, each shown in full below.

In `js/views/adminPanel.js`, replace:
```js
  _archiveClass: async function(classId) {
    var cls = AdminPanel._orphanClassesCache.find(function(c) { return c.id === classId; });
    var label = cls && cls.name ? '« ' + cls.name + ' »' : 'cette classe orpheline';
    var count = cls && cls.students ? cls.students.length : 0;
    var countMsg = count > 0 ? ' (' + count + ' élève' + (count > 1 ? 's' : '') + ' inscrit' + (count > 1 ? 's' : '') + ')' : '';
    if (!confirm('Archiver ' + label + countMsg + ' ? Cette action est irréversible depuis ce panneau.')) return;
    try {
      await AuthService.archiveClass(classId);
```
with:
```js
  _archiveClass: function(classId) {
    var cls = AdminPanel._orphanClassesCache.find(function(c) { return c.id === classId; });
    var label = cls && cls.name ? '« ' + cls.name + ' »' : 'cette classe orpheline';
    var count = cls && cls.students ? cls.students.length : 0;
    var countMsg = count > 0 ? ' (' + count + ' élève' + (count > 1 ? 's' : '') + ' inscrit' + (count > 1 ? 's' : '') + ')' : '';
    Modal.open({
      title: 'Archiver la classe',
      message: 'Archiver ' + label + countMsg + ' ? Cette action est irréversible depuis ce panneau.',
      confirmText: 'Archiver',
      onConfirm: function() { AdminPanel._archiveClassConfirmed(classId, cls); }
    });
  },

  _archiveClassConfirmed: async function(classId, cls) {
    try {
      await AuthService.archiveClass(classId);
```
(the rest of the original body — `await AuthService.logAdminAction(...)` through the closing `catch` — moves unchanged into `_archiveClassConfirmed`; it already only reads `classId` and the local `cls` var, both now passed through.)

In `js/app.js`, replace:
```js
  signOutBtn?.addEventListener('click', function() {
    if (confirm('Se déconnecter ?')) AuthService.signOut();
  });
```
with:
```js
  signOutBtn?.addEventListener('click', function() {
    Modal.open({ title: 'Déconnexion', message: 'Se déconnecter ?', confirmText: 'Se déconnecter', onConfirm: function() { AuthService.signOut(); } });
  });
```

In `js/views/teacherDashboard.js`, replace:
```js
  _removeStudent: async function(studentUid, classCode, classIndex) {
    if (!confirm('Retirer cet élève de la classe ?')) return;
    try {
      await AuthService.removeStudentFromClass(studentUid, classCode);
```
with:
```js
  _removeStudent: function(studentUid, classCode, classIndex) {
    Modal.open({
      title: 'Retirer un élève',
      message: 'Retirer cet élève de la classe ?',
      confirmText: 'Retirer',
      onConfirm: function() { TeacherDashboard._removeStudentConfirmed(studentUid, classCode, classIndex); }
    });
  },

  _removeStudentConfirmed: async function(studentUid, classCode, classIndex) {
    try {
      await AuthService.removeStudentFromClass(studentUid, classCode);
```
(the rest of the original body — local list update through the closing `catch` — moves unchanged into `_removeStudentConfirmed`.)

In `js/views/teacherDashboard.js`, replace:
```js
  _deleteAssignment: async function(assignmentId, classIndex) {
    if (!confirm('Supprimer ce devoir ?')) return;
    try {
      await AuthService.deleteAssignment(assignmentId);
```
with:
```js
  _deleteAssignment: function(assignmentId, classIndex) {
    Modal.open({
      title: 'Supprimer le devoir',
      message: 'Supprimer ce devoir ?',
      confirmText: 'Supprimer',
      onConfirm: function() { TeacherDashboard._deleteAssignmentConfirmed(assignmentId, classIndex); }
    });
  },

  _deleteAssignmentConfirmed: async function(assignmentId, classIndex) {
    try {
      await AuthService.deleteAssignment(assignmentId);
```
(the rest of the original body moves unchanged into `_deleteAssignmentConfirmed`.)

In `js/views/tutoring/tutoringStudent.js`, replace:
```js
  _archive: async function() {
    var s = TutoringStudent._student;
    if (!confirm('Archiver ' + s.firstName + ' ' + s.lastName + ' ? Son historique restera consultable mais il/elle disparaîtra de la liste.')) return;
    try {
      await TutoringService.archiveStudent(s.id);
```
with:
```js
  _archive: function() {
    var s = TutoringStudent._student;
    Modal.open({
      title: 'Archiver l\'élève',
      message: 'Archiver ' + s.firstName + ' ' + s.lastName + ' ? Son historique restera consultable mais il/elle disparaîtra de la liste.',
      confirmText: 'Archiver',
      onConfirm: function() { TutoringStudent._archiveConfirmed(); }
    });
  },

  _archiveConfirmed: async function() {
    var s = TutoringStudent._student;
    try {
      await TutoringService.archiveStudent(s.id);
```
(the rest of the original body — `showToast`/`navigate` through the closing `catch` — moves unchanged into `_archiveConfirmed`.)

- [ ] **Step 5: Replace the 1 `prompt()` call (text input)**

In `js/views/teacherDashboard.js`, replace:
```js
  _createClass: async function() {
    var name = prompt('Nom de la nouvelle classe (ex: Terminale TS1) :');
    if (!name || !name.trim()) return;
    try {
```
with:
```js
  _createClass: function() {
    Modal.open({
      title: 'Nouvelle classe',
      inputLabel: 'Nom de la classe (ex : Terminale TS1)',
      confirmText: 'Créer',
      onConfirm: function(name) {
        if (!name) return;
        TeacherDashboard._createClassConfirmed(name);
      }
    });
  },

  _createClassConfirmed: async function(name) {
    try {
```
(the rest of the original body — everything from `var uid = AuthService.getCurrentUser().uid;` onward — moves unchanged into `_createClassConfirmed`, using the passed-in `name` directly instead of `name.trim()` since `Modal`'s confirm handler already trims the input value.)

- [ ] **Step 6: Manual verification**

For each of the 7 replaced call sites, trigger it in the browser and confirm: the modal opens (styled card, not a native browser dialog), clicking outside the card or the × closes it without side effects, pressing Escape closes it, Cancel closes it without side effects, and Confirm performs the original action (class created / student removed / assignment deleted / class archived / migration run / signed out / student archived). Specifically re-test class creation (previously `prompt()`) end-to-end: type a name, confirm the class appears with the right name and a generated code.

---

### Task 6: Teacher-side class archive (#6)

`AuthService.archiveClass(classId)` (`js/auth/authService.js:302-304`) and the Firestore `classes/{classCode}` `allow update` rule already support a teacher archiving their **own** class (owning-teacher `allow update` has no field whitelist, unlike the student-self-service `students`-only branch) — **no `firestore.rules` change is needed for this task**, only UI wiring. Confirmed by reading the rule: `allow update: if isAdmin() || isOwningTeacher(resource) || (...)`.

**Files:**
- Modify: `js/views/teacherDashboard.js:28-57` (`_renderDashboard` — add archive button per class card)
- Modify: `js/views/teacherDashboard.js` (new `_archiveClass`/`_archiveClassConfirmed` methods, using the `Modal` component from Task 5)
- Modify: `js/auth/authService.js:143-149` (`getTeacherClasses` — exclude archived classes)

- [ ] **Step 1: Exclude archived classes from the teacher's own list**

In `js/auth/authService.js`, replace:
```js
  async getTeacherClasses(teacherUid) {
    const snap = await this._db.collection('classes')
      .where('teacherId', '==', teacherUid)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  },
```
with:
```js
  async getTeacherClasses(teacherUid) {
    const snap = await this._db.collection('classes')
      .where('teacherId', '==', teacherUid)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .filter(c => c.status !== 'archived')
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  },
```

- [ ] **Step 2: Add the archive button to each class card**

In `js/views/teacherDashboard.js`, in `_renderDashboard` (`js/views/teacherDashboard.js:28-57`), replace:
```js
              '<span class="td-student-count">' + (cls.students ? cls.students.length : 0) + ' élève(s)</span>' +
            '</div>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewClass(\'' + i + '\')">Voir les élèves →</button>' +
          '</div>';
```
with:
```js
              '<span class="td-student-count">' + (cls.students ? cls.students.length : 0) + ' élève(s)</span>' +
            '</div>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewClass(\'' + i + '\')">Voir les élèves →</button>' +
            '<button class="td-archive-btn" onclick="TeacherDashboard._archiveClass(\'' + i + '\')">Archiver</button>' +
          '</div>';
```

- [ ] **Step 3: Add the archive methods (own class — no `logAdminAction` call)**

Add near `_removeStudentConfirmed` (from Task 5) in `js/views/teacherDashboard.js`:
```js
  _archiveClass: function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    Modal.open({
      title: 'Archiver la classe',
      message: 'Archiver « ' + cls.name + ' » ? Elle disparaîtra de ton tableau de bord mais reste consultable par un administrateur.',
      confirmText: 'Archiver',
      onConfirm: function() { TeacherDashboard._archiveClassConfirmed(classIndex); }
    });
  },

  _archiveClassConfirmed: async function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    try {
      await AuthService.archiveClass(cls.id);
      showToast('Classe archivée.', 'success');
      TeacherDashboard.render();
    } catch (e) {
      showToast('Erreur lors de l\'archivage.', 'error');
    }
  },
```
Do **not** call `AuthService.logAdminAction(...)` from this flow — that collection's Firestore rule (`firestore.rules:128-131`) restricts both read and write to `isAdmin()`; a non-admin teacher archiving their own class would get a permission-denied error if this were called. (The existing admin-side `AdminPanel._archiveClass` for orphan classes is a separate, admin-only code path and correctly does call it — leave that one untouched.)

- [ ] **Step 4: Minimal CSS**

In `css/styles.css`, near `.td-view-btn`, add:
```css
.td-archive-btn {
  margin-left: var(--space-sm);
  background: transparent;
  border: var(--border-width) solid var(--border);
  color: var(--text-muted);
  border-radius: var(--radius);
  padding: 6px 14px;
  cursor: pointer;
}
.td-archive-btn:hover { color: var(--error); border-color: var(--error); }
```

- [ ] **Step 5: Manual verification**

As a teacher test account with ≥2 classes, archive one via the new button (confirm the Task-5 modal, not a native dialog). Confirm it disappears from the dashboard immediately and on a full reload (`getTeacherClasses` now filters it out). In the Firestore console, confirm the class doc still exists with `status: 'archived'` (not deleted) and its `students` array is untouched. As the **admin** test account, confirm the archived class still shows up wherever admin views classes (e.g. via `getOrphanClasses` if it becomes orphaned, or directly in Firestore) — nothing was deleted.

---

### Task 7: Recent modules derived from tracking timestamps, not a separate localStorage list (#8)

**Revised design vs. the audit doc's literal suggestion:** the doc suggested deriving recency from `progress/{uid}` read fresh from Firestore. Investigation during planning found something better already in place: `Storage.trackQuizScore`/`trackEvaluationScore`/`trackAttempt` (`js/storage.js:67-130`) already stamp a per-section **`lastAttempt` ISO timestamp inside `sparkTracking[moduleId][section]`**, and `sparkTracking` is already one of the 5 keys `SyncService` (`js/sync/syncService.js:6-12`) auto-syncs bidirectionally with `progress/{uid}.tracking` for any logged-in user. So the per-module, cross-device-synced timestamp data the audit was asking for **already exists locally** for connected users — no new Firestore read/write needed, `getRecentModules()` can stay fully synchronous.

**Files:**
- Modify: `js/state.js:234-237` (`getRecentModules`)

**Interfaces:**
- `getRecentModules()` keeps its exact existing signature/return shape (sync, returns up to 3 module objects) — both call sites (`js/views/home.js:7` and `js/views/home.js:231`) need zero changes.

- [ ] **Step 1: Derive recency from `Storage.getTracking()`, falling back to the legacy `sparkRecent` list**

In `js/state.js`, replace:
```js
function getRecentModules() {
  const recent = JSON.parse(localStorage.getItem('sparkRecent') || '[]');
  return recent.map(id => getModule(id)).filter(Boolean).slice(0, 3);
}
```
with:
```js
function getRecentModules() {
  const tracking = (typeof Storage !== 'undefined' && Storage.getTracking) ? Storage.getTracking() : {};
  const trackingRecency = Object.keys(tracking).map(id => {
    const sections = tracking[id] || {};
    const lastAttempt = Object.keys(sections).reduce((max, key) => {
      const ts = sections[key] && sections[key].lastAttempt ? Date.parse(sections[key].lastAttempt) : 0;
      return Math.max(max, ts || 0);
    }, 0);
    return { id, lastAttempt };
  }).filter(r => r.lastAttempt > 0)
    .sort((a, b) => b.lastAttempt - a.lastAttempt)
    .map(r => r.id);

  // Fallback : modules ouverts mais jamais tentés (pas encore de lastAttempt en tracking),
  // et compte invité sans historique de tracking du tout.
  const legacyRecent = JSON.parse(localStorage.getItem('sparkRecent') || '[]');

  const seen = new Set();
  const ordered = trackingRecency.concat(legacyRecent).filter(id => {
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });

  return ordered.map(id => getModule(id)).filter(Boolean).slice(0, 3);
}
```
`trackRecentModule` (`js/state.js:226-232`) and its one call site (`js/app.js:234`) are left untouched — they still populate the fallback list used above.

- [ ] **Step 2: Manual verification**

As a **connected** test account: complete a quiz on module A, then a quiz on module B (B after A). On the home page, confirm "Reprendre ton parcours" shows B before A. Log out, log back in on the **same account from a different browser/incognito profile** (simulating a second device — no local `sparkRecent`/`sparkTracking` yet on this profile): confirm `SyncService.init()` pulls `sparkTracking` from Firestore and the recent-modules list still shows B before A, purely from synced tracking data. As a **guest** (no account): open a module without attempting any quiz/exercise, confirm it still shows up via the `legacyRecent` fallback (since guests have no server sync but `trackRecentModule` still runs locally).

---

### Task 8: Spark Companion state synced across devices (#11)

**Revised design vs. the audit doc's literal suggestion:** the doc suggested manually writing `progress/{uid}` with `.set(..., {merge:true})`, modeled on `joinClass`'s `teacherIds` denormalization. Investigation found the generic sync plumbing for exactly this already exists and is unused by Companion: `SyncService._wrapStorage()` (`js/sync/syncService.js:68-79`) monkey-patches `Storage._set` so that any write through it for one of 5 known keys — including `sparkCompanionState` → Firestore field `companion` — auto-pushes to `progress/{uid}` and auto-pulls on login. `companionEngine.js`'s 5 save sites bypass this entirely by calling raw `localStorage.setItem('sparkCompanionState', ...)` instead of `Storage._set(...)`. The fix is routing those 5 calls through `Storage._set` — a 1-line-per-site change — not building new sync code.

**Files:**
- Modify: `js/engines/companionEngine.js` (5 call sites: lines 175, 190, 201, 250, 262)
- Modify: `js/views/teacherDashboard.js:251-265` (`_renderStudentsSection` — add a Companion usage indicator)
- No `firestore.rules` change: `progress/{uid}` already grants `isOwner(uid)` full write (`firestore.rules:104-118`), and `SyncService._push`/`init` already use `.set(..., {merge:true})`.

- [ ] **Step 1: Route Companion saves through the already-synced `Storage._set`**

In `js/engines/companionEngine.js`, replace **all 5** occurrences (use `replace_all`) of:
```js
  localStorage.setItem('sparkCompanionState', JSON.stringify(state.companionState));
```
with:
```js
  Storage._set('sparkCompanionState', state.companionState);
```
This is functionally identical for a guest (still just `localStorage.setItem` under the hood, since `Storage._set`'s un-wrapped body is exactly `localStorage.setItem(key, JSON.stringify(value))`) and additionally triggers `SyncService`'s push-to-Firestore for any account where `SyncService.init(uid)` has run (i.e. any logged-in user) — this is the "keep localStorage as fallback for guests" requirement, satisfied for free by the existing wrap-only-when-logged-in design, with zero new conditional logic needed.

- [ ] **Step 2: Migration decision for existing users' already-in-localStorage Companion data — documented choice**

**Decision: no explicit backfill/migration code.** Rationale (record this verbatim in the final report): `Storage._set` is wrapped by `SyncService` on every login, and the very next Companion mutation (a badge earned, a point awarded, an objective completed) after this fix ships will push through the now-wrapped function exactly like any other tracked field — no different from how `sparkProgress`/`sparkTracking` already behave. Separately, `SyncService.init()`'s own reconciliation (`js/sync/syncService.js:14-55`) already uploads the **entire** local blob — including whatever is currently sitting in `localStorage['sparkCompanionState']` — the next time a user's local `sparkLastSync` timestamp is ahead of Firestore's, which is the common case for any returning active user (their other synced fields already keep `sparkLastSync` fresh). So existing local Companion data is not lost or stranded — it rides along on the next natural sync event, without any purpose-built migration script. This is the "no rétro-compatibilité active nécessaire" option from the two the audit doc offered, chosen because the alternative (writing a one-off backfill) would duplicate logic `SyncService` already performs generically.

- [ ] **Step 3: Minimal teacher-side visibility**

In `js/views/teacherDashboard.js`, `_renderStudentsSection(cls, students, progressMap, classIndex)` (`js/views/teacherDashboard.js:251-276`) builds `progressMap[s.uid]` from the **whole** `progress/{uid}` document already read for other purposes (tracking/lastActive) — once Step 1 ships, that same doc will also carry a `companion` field for any student who has earned at least one badge/point since. Replace:
```js
          return '<div class="td-student-row">' +
            '<span class="td-student-name">' + TeacherDashboard._esc(s.profile.displayName || 'Élève') + unavailableBadge + '</span>' +
```
with:
```js
          var companion = progressMap[s.uid] && progressMap[s.uid].companion;
          var companionBadge = (companion && companion.badges && companion.badges.length)
            ? '<span class="td-companion-badge" title="Badges Spark Companion">🏅 ' + companion.badges.length + '</span>'
            : '';
          return '<div class="td-student-row">' +
            '<span class="td-student-name">' + TeacherDashboard._esc(s.profile.displayName || 'Élève') + unavailableBadge + companionBadge + '</span>' +
```
(`progressMap` is the function's own 3rd parameter, already in scope inside this `.map(function(s) {...})` callback — no extra plumbing needed.)

Add a small CSS rule near `.td-student-name` in `css/styles.css`:
```css
.td-companion-badge {
  margin-left: 6px;
  font-size: 0.8rem;
  color: var(--text-muted);
}
```

- [ ] **Step 4: Manual verification**

As a **connected student** test account (already a member of a class), trigger at least one Companion badge/point/objective event (whatever surfaces one in the existing Companion UI — e.g. complete a remediation objective). Check the Firestore console: confirm `progress/{uid}.companion` now exists and matches `localStorage['sparkCompanionState']`. Log the same account in on a second browser profile: confirm the Companion state (badges/points) is present from the first interaction, pulled via `SyncService.init()`. As the student's **teacher**, open the class roster and confirm the new 🏅 badge-count indicator appears next to that student's name and updates after a dashboard reload following further Companion activity.

---

### Task 9: Playlist traceability — documented decision, no server tracking built (#13)

`js/playlist.js`'s `encodePlaylist`/`buildPath('playlist', ...)` (`js/playlist.js:28-31, 193-197`) produce a fully client-side, base64-encoded link with no Firestore write. The `assignments` collection (`js/auth/authService.js:181-207`) shows the "creation + completion" pattern the audit offered as option (a), but it only tracks **creation** (`createdAt`, `teacherId`, `classCode`, `moduleId`, `dueDate`) — there is no completion tracking anywhere in this codebase to model a playlist "completion" write on, meaning option (a) would require inventing a new completion-tracking mechanism from scratch, not just reusing an existing one.

- [ ] **Step 1: Decision — option (b), documented as code comments**

**Decision: option (b) — explicitly document playlists as intentionally untracked, build nothing new.** Rationale (record this verbatim in the final report): there is no evidence of real demand for playlist analytics (no completion-tracking precedent exists anywhere else to build on cheaply), and a shareable, no-account-required, fully client-side link is an intentional product property of the playlist feature (consistent with this app's broader "aucun compte requis" positioning visible on the home page hero, `js/views/home.js:274-277`). Building server-side tracking for a feature with no measured usage would be speculative infrastructure.

In `js/playlist.js`, add a short comment directly above `encodePlaylist` (line 28) recording this as a deliberate choice, not an oversight:
```js
// Volontairement hors suivi serveur : une playlist est un lien autonome, décodable sans
// compte ni accès Firestore (cohérent avec le "aucun compte requis" de l'accueil). Décision
// prise lors de l'audit fonctionnel 2026-08-19 (#13) — pas de trace de complétion/consultation
// tant qu'aucun besoin mesuré ne le justifie.
function encodePlaylist(title, steps) {
```

- [ ] **Step 2: Verification**

No behavioral change — confirm the playlist link still generates and opens correctly (regression check only, e.g. build a 2-step playlist, open the generated link in a new tab, confirm both steps load in order).

---

### Task 10: "Enseignants actifs" admin stat — investigate before deciding (#4)

`AuthService.getAdminStats()` (`js/auth/authService.js:268-281`) counts `role === 'teacher' && status === 'active'`, excluding admin accounts that also use the teacher space.

- [ ] **Step 1: Check for external usage before touching anything**

Search for any place this number is referenced outside the admin dashboard itself:
```
grep -rn "activeTeachers" --include=*.js --include=*.md .
grep -rn "Enseignants actifs" --include=*.js --include=*.md .
```
(run from the repo root; also check `docs/` for any communication/report that quotes this figure, e.g. investor updates or LinkedIn campaign content mentioned elsewhere in this project's docs.)

- [ ] **Step 2: Decide based on what Step 1 finds**

- If the grep turns up **no external usage** (only the `adminPanel.js` display call site and the `authService.js` definition): it's safe to broaden the count. Change `js/auth/authService.js:268-281`'s filter from:
  ```js
  activeTeachers: users.filter(u => u.role === 'teacher' && u.status === 'active').length,
  ```
  to:
  ```js
  activeTeachers: users.filter(u => (u.role === 'teacher' || u.role === 'admin') && u.status === 'active').length,
  ```
  and update the label at `js/views/adminPanel.js:76` from `'Enseignants actifs'` to `'Comptes enseignant + admin actifs'` (or similar) so the number and its label stay honest about what it now counts.
- If Step 1 finds **any external reference** (a report, a doc, a past communication quoting this exact figure): make **no code change**. Instead record in the final report: what was found, and that this needs Dylan's explicit decision since changing the number would silently invalidate a past external reference.

- [ ] **Step 3: Manual verification (only if Step 2 changed code)**

As admin, confirm the dashboard stat card now includes an admin test account in its count, and that the updated label renders correctly (not overflowing the stat card).

---

### Task 11: Teacher signup — optional context fields (#9)

**Files:**
- Modify: `js/views/authView.js:82-102` (`_renderRegister`) and `js/views/authView.js:161-186` (`_finishRegistration`)
- Modify: `js/auth/authService.js:52-64` (`createUserProfile`)
- Modify: `js/views/adminPanel.js:337-359` (`_renderPending`)

- [ ] **Step 1: Add the two optional fields to the registration form, teacher-only**

In `js/views/authView.js`, replace:
```js
    '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
    '<input class="auth-input" id="reg-password" type="password" placeholder="••••••••" /></div>' +
    '<div id="reg-class-section"></div>' +
```
with:
```js
    '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
    '<input class="auth-input" id="reg-password" type="password" placeholder="••••••••" /></div>' +
    '<div id="reg-teacher-section"></div>' +
    '<div id="reg-class-section"></div>' +
```
Add a sibling `_renderTeacherSection` next to `_renderClassSection` (`js/views/authView.js:110-127`), following the same conditional-visibility pattern (only rendering content `if (AuthView._selectedRole === 'teacher')`):
```js
  _renderTeacherSection: function() {
    var el = document.getElementById('reg-teacher-section');
    if (!el) return;
    if (AuthView._selectedRole !== 'teacher') { el.innerHTML = ''; return; }
    el.innerHTML =
      '<div class="auth-field"><label class="auth-label">Établissement (optionnel)</label>' +
      '<input class="auth-input" id="reg-school" type="text" placeholder="Ex : Lycée Voltaire" /></div>' +
      '<div class="auth-field"><label class="auth-label">Matière enseignée (optionnel)</label>' +
      '<input class="auth-input" id="reg-subject" type="text" placeholder="Ex : Mathématiques" /></div>';
  },
```
In `js/views/authView.js`, replace:
```js
  _setRole: function(role) {
    AuthView._selectedRole = role;
    document.querySelectorAll('.auth-role-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('role-' + role).classList.add('active');
  },
```
with:
```js
  _setRole: function(role) {
    AuthView._selectedRole = role;
    document.querySelectorAll('.auth-role-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('role-' + role).classList.add('active');
    AuthView._renderTeacherSection();
  },
```
(`_setRole` currently does **not** call `_renderClassSection()` either — that section's own show/hide-on-role-toggle appears to be a separate, pre-existing latent gap unrelated to this task; leave it as-is and only wire up the new `_renderTeacherSection()` call, matching the narrow scope of #9.)

Finally, in `_renderRegister` (`js/views/authView.js:82-102`), replace:
```js
    this._renderClassSection();
  },
```
with:
```js
    this._renderClassSection();
    this._renderTeacherSection();
  },
```
so the teacher-only fields render correctly on first paint too (the default role is `'student'`, so this call is a no-op — empty `#reg-teacher-section` — until the user picks "Enseignant", matching `_renderClassSection`'s own already-established call-once-at-render pattern).

- [ ] **Step 2: Persist the two fields**

In `js/views/authView.js`, in `_finishRegistration`, replace:
```js
    var profile = {
      role: isTeacher ? 'teacher' : 'student',
      status: isTeacher ? 'pending' : 'active',
      displayName: displayName,
      phone: contactData.phone || null,
      email: contactData.email || null,
      classes: []
    };
```
with:
```js
    var profile = {
      role: isTeacher ? 'teacher' : 'student',
      status: isTeacher ? 'pending' : 'active',
      displayName: displayName,
      phone: contactData.phone || null,
      email: contactData.email || null,
      classes: [],
      school: isTeacher ? ((document.getElementById('reg-school') || {}).value || '').trim() || null : null,
      subject: isTeacher ? ((document.getElementById('reg-subject') || {}).value || '').trim() || null : null
    };
```
In `js/auth/authService.js`, replace:
```js
  async createUserProfile(uid, data) {
    await this._db.collection('users').doc(uid).set({
      role: data.role || 'student',
      status: data.status || 'active',
      displayName: data.displayName || '',
      phone: data.phone || null,
      email: data.email || null,
      classes: data.classes || [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      approvedAt: null,
      approvedBy: null
    });
  },
```
with:
```js
  async createUserProfile(uid, data) {
    await this._db.collection('users').doc(uid).set({
      role: data.role || 'student',
      status: data.status || 'active',
      displayName: data.displayName || '',
      phone: data.phone || null,
      email: data.email || null,
      classes: data.classes || [],
      school: data.school || null,
      subject: data.subject || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      approvedAt: null,
      approvedBy: null
    });
  },
```

- [ ] **Step 3: Show the context on the admin "pending" card**

In `js/views/adminPanel.js`, replace:
```js
    var name    = AdminPanel._esc(u.displayName || 'Inconnu');
    var contact = AdminPanel._esc(u.phone || u.email || '—');
    var uid     = AdminPanel._esc(u.uid);
    return '<div class="ap-user-card">' +
      '<div class="ap-user-info">' +
        '<span class="ap-user-name">' + name + '</span>' +
        '<span class="ap-user-contact">' + contact + '</span>' +
      '</div>' +
```
with:
```js
    var name    = AdminPanel._esc(u.displayName || 'Inconnu');
    var contact = AdminPanel._esc(u.phone || u.email || '—');
    var uid     = AdminPanel._esc(u.uid);
    var contextParts = [];
    if (u.school) contextParts.push(AdminPanel._esc(u.school));
    if (u.subject) contextParts.push(AdminPanel._esc(u.subject));
    var context = contextParts.length ? '<span class="ap-user-context">' + contextParts.join(' · ') + '</span>' : '';
    return '<div class="ap-user-card">' +
      '<div class="ap-user-info">' +
        '<span class="ap-user-name">' + name + '</span>' +
        '<span class="ap-user-contact">' + contact + '</span>' +
        context +
      '</div>' +
```
Add a small rule near `.ap-user-contact` in `css/styles.css`:
```css
.ap-user-context {
  font-size: 0.8rem;
  color: var(--text-muted);
}
```

- [ ] **Step 4: Manual verification**

Register a new **teacher** test account, filling both new fields — confirm they appear only for the teacher role toggle (switch back to "Élève" and confirm the fields disappear/aren't submitted). As admin, open the "En attente" tab and confirm the establishment + subject show on that account's pending card. Register a second teacher account leaving both fields blank — confirm no crash, no empty `·` separator artifact, and `school`/`subject` are stored as `null` (check Firestore console). Register a **student** test account — confirm `school`/`subject` are `null` and the fields never appeared in the form.

---

### Task 12: Visibility of un-completed positioning tests (#10)

`TutoringService.getPendingPositioningTests()` (`js/tutoring/tutoringService.js:116-126`) only returns tests that reached `completed` status. Add a second list for tests created but never finished.

**Files:**
- Modify: `js/tutoring/tutoringService.js` (new method, near `getPendingPositioningTests`)
- Modify: `js/views/tutoring/tutoringHome.js:14-28, 30-73` (`render`, `_renderList`)

- [ ] **Step 1: New service method**

In `js/tutoring/tutoringService.js`, add right after `getPendingPositioningTests` (after line 126):
```js
  getUnfinishedPositioningTests: async function() {
    var snap = await this._db().collection('positioningTests')
      .where('studentId', '==', null)
      .get();
    return snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .filter(function(t) {
        if (t.reviewed) return false;
        var r = t.results || {};
        var mathsDone = r.maths && r.maths.status === 'completed';
        var physiqueDone = r.physique && r.physique.status === 'completed';
        return !mathsDone && !physiqueDone;
      })
      .sort(function(a, b) {
        var ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
        var tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
        return tb - ta;
      });
  },
```
(`createdAt` is already written as a `serverTimestamp()` at test creation — `js/tutoring/tutoringService.js:109` — no schema change needed.)

- [ ] **Step 2: Fetch and render the new list**

In `js/views/tutoring/tutoringHome.js`, replace:
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
```
with:
```js
  render: async function() {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      var results = await Promise.all([
        TutoringService.getStudents(),
        TutoringService.getPendingPositioningTests(),
        TutoringService.getUnfinishedPositioningTests()
      ]);
      TutoringHome._students = results[0];
      TutoringHome._pendingTests = results[1];
      TutoringHome._unfinishedTests = results[2];
      TutoringHome._renderList('');
```
Add `_unfinishedTests: []` to the object's initial properties (next to `_pendingTests: []` at the top of the file, line 8).

Then, in `_renderList`, replace:
```js
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
```
with:
```js
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

    var unfinishedHtml = (TutoringHome._unfinishedTests || []).length === 0 ? '' :
      '<div class="pt-pending-block pt-unfinished-block">' +
        '<h2 class="tt-section-title">Tests envoyés, jamais complétés</h2>' +
        TutoringHome._unfinishedTests.map(function(t) {
          var name = t.studentNameInput || 'Lien non encore ouvert';
          var created = t.createdAt && t.createdAt.toDate ? t.createdAt.toDate().toLocaleDateString('fr-FR') : '—';
          return '<div class="pt-pending-card">' +
            '<span class="pt-pending-name">' + TutoringHome._esc(name) + '</span>' +
            '<span class="pt-pending-level">Envoyé le ' + created + '</span>' +
          '</div>';
        }).join('') +
      '</div>';
```
And replace:
```js
        pendingHtml +
        '<input type="text" class="tt-search" placeholder="Rechercher un élève..." ' +
```
with:
```js
        pendingHtml +
        unfinishedHtml +
        '<input type="text" class="tt-search" placeholder="Rechercher un élève..." ' +
```

- [ ] **Step 3: Manual verification**

As the tutor/admin test account, send a positioning-test link (`+ Envoyer un test de positionnement`) but do not complete it — reload the tutoring home page and confirm it now appears under "Tests envoyés, jamais complétés" with the correct send date. Complete that same test's maths or physique section, reload — confirm it moves from the unfinished block to the existing "à traiter" block. Confirm a fully-attached (already turned into a student) test appears in neither block.

---

### Task 13: Teacher "piège fréquent" suggestions traced in Firestore + admin view (#15)

`teacherErrorModal.js`'s `submitTeacherError` only posts to Formspree — the one teacher action in the product with zero admin-visible trace.

**Files:**
- Modify: `js/auth/authService.js` (new `submitTeacherFeedback`/`getTeacherFeedback`, near `logAdminAction`)
- Modify: `js/components/teacherErrorModal.js:37-74` (`submitTeacherError` — add the Firestore write alongside Formspree)
- Modify: `js/views/adminPanel.js` (new "Suggestions" tab: tab button at line ~63, branch in `_loadTab` at line ~230, new `_renderFeedback` method modeled on `_renderLogsList`)
- Modify: `firestore.rules` (new `teacherFeedback` collection block, after the `adminLogs` block)

- [ ] **Step 1: Firestore rule**

In `firestore.rules`, right after the `adminLogs` block (`firestore.rules:128-131`), add:
```
    match /teacherFeedback/{feedbackId} {
      // Lecture réservée à l'admin (suggestions internes, pas publiques).
      // Écriture réservée à un enseignant/admin authentifié, sur son propre uid.
      allow read: if isAdmin();
      allow create: if isTeacherOrAdmin() && request.resource.data.teacherUid == request.auth.uid;
      allow update, delete: if isAdmin();
    }
```
Verified exact anchor — `firestore.rules:127-131` currently reads:
```
    // ─── adminLogs ───
    match /adminLogs/{logId} {
      allow read: if isAdmin();
      allow write: if isAdmin();
    }
```
Insert the new `teacherFeedback` block immediately after this one's closing `}` (before the blank line that precedes `// ─── assignments (devoirs) ───`).

- [ ] **Step 2: Service methods**

In `js/auth/authService.js`, add right after `getAdminLogs` (after the existing `logAdminAction`/`getAdminLogs` pair, `js/auth/authService.js:366-377`):
```js
  async submitTeacherFeedback(moduleId, message) {
    const user = this.getCurrentUser();
    await this._db.collection('teacherFeedback').add({
      teacherUid: user.uid,
      teacherName: user.displayName || user.email || user.uid,
      moduleId: moduleId || null,
      message: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getTeacherFeedback(limitCount) {
    const snap = await this._db.collection('teacherFeedback')
      .orderBy('createdAt', 'desc')
      .limit(limitCount || 100)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
```

- [ ] **Step 3: Write to Firestore alongside the existing Formspree submission**

In `js/components/teacherErrorModal.js`, replace:
```js
  const btn = document.querySelector('#teacher-modal .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Envoi…'; }

  fetch('https://formspree.io/f/xnjgyrjd', {
```
with:
```js
  const btn = document.querySelector('#teacher-modal .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Envoi…'; }

  if (typeof AuthService !== 'undefined' && AuthService.submitTeacherFeedback) {
    AuthService.submitTeacherFeedback(moduleId, textarea.value.trim())
      .catch(e => console.warn('[teacherErrorModal] Firestore write failed (Formspree still sent):', e));
  }

  fetch('https://formspree.io/f/xnjgyrjd', {
```
(the Firestore write is fire-and-forget, deliberately not gating the existing success/error UX which is entirely driven by the Formspree response — a Firestore failure must never block or falsely fail the teacher's existing "Merci pour votre contribution !" flow.)

- [ ] **Step 4: Admin tab**

In `js/views/adminPanel.js`, replace:
```js
          '<button class="ap-tab' + (AdminPanel._tab === 'logs' ? ' active' : '') + '" data-tab="logs" onclick="AdminPanel._switchTab(\'logs\')">Historique</button>' +
        '</div>' +
```
with:
```js
          '<button class="ap-tab' + (AdminPanel._tab === 'logs' ? ' active' : '') + '" data-tab="logs" onclick="AdminPanel._switchTab(\'logs\')">Historique</button>' +
          '<button class="ap-tab' + (AdminPanel._tab === 'feedback' ? ' active' : '') + '" data-tab="feedback" onclick="AdminPanel._switchTab(\'feedback\')">Suggestions</button>' +
        '</div>' +
```
In `_loadTab`, replace:
```js
      } else if (tab === 'logs') {
        var logs = await AuthService.getAdminLogs(50);
        AdminPanel._logsCache = logs;
        AdminPanel._renderLogs(logs);
      }
```
with:
```js
      } else if (tab === 'logs') {
        var logs = await AuthService.getAdminLogs(50);
        AdminPanel._logsCache = logs;
        AdminPanel._renderLogs(logs);
      } else if (tab === 'feedback') {
        var feedback = await AuthService.getTeacherFeedback(100);
        AdminPanel._renderFeedback(feedback);
      }
```
Add a new method near `_renderLogsList` (modeled on it directly — same card-list shape, no filters needed for a first version):
```js
  _renderFeedback: function(feedback) {
    var content = document.getElementById('ap-content');
    if (!content) return;
    if (!feedback.length) {
      content.innerHTML = '<p class="ap-empty">Aucune suggestion pour l\'instant.</p>';
      return;
    }
    content.innerHTML = '<div class="ap-logs-list">' +
      feedback.map(function(f) {
        var mod = (typeof getModule === 'function') ? getModule(f.moduleId) : null;
        var modTitle = mod ? mod.title : (f.moduleId || '—');
        return '<div class="ap-log-card">' +
          '<div class="ap-log-main">' +
            '<span class="ap-log-action">' + AdminPanel._esc(modTitle) + '</span>' +
            '<span class="ap-log-details"> — ' + AdminPanel._esc(f.message) + '</span>' +
          '</div>' +
          '<div class="ap-log-meta">' +
            '<span class="ap-log-admin">' + AdminPanel._esc(f.teacherName || '—') + '</span>' +
            '<span class="ap-log-time">' + AdminPanel._timeAgo(f.createdAt) + '</span>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  },
```

- [ ] **Step 5: Manual verification**

As a **teacher** test account, open any module, submit a "piège fréquent" suggestion. Confirm the existing success toast/Formspree flow is unaffected. In the Firestore console, confirm a new `teacherFeedback` doc exists with the right `teacherUid`/`message`/`moduleId`. As **admin**, open the new "Suggestions" tab and confirm the suggestion appears with module title, message, teacher name, and relative time. As a **student** test account, confirm attempting to write to `teacherFeedback` directly (or simply confirm the UI never exposes this path to students) is rejected by the rule — the teacher-error modal itself isn't shown to students anyway, so this is primarily a rules-level check, not a UI one.

---

### Task 14: Grading panel — warn before losing unsaved grades (#16, minimum level)

`GradingPanel._gradeDrafts` (`js/views/gradingPanel.js:86-98`) is explicitly documented in-code as session-memory-only, never persisted. Implement the minimum fix (`beforeunload` warning); the "better" level-2 fix (Firestore persistence) is explicitly optional per the audit doc ("si le temps le permet") and is **not** included in this task — flag it in the final report as a known follow-up, not silently dropped.

**Files:**
- Modify: `js/views/gradingPanel.js` (add a `beforeunload` listener, gated on `_gradeDrafts` non-empty)

- [ ] **Step 1: Add the warning**

`GradingPanel` (`js/views/gradingPanel.js:1`) is a plain object literal, same convention as `TeacherDashboard`/`AdminPanel`. `render(opts)` (line 6) resets `GradingPanel._gradeDrafts = {}` on every call (line 89), and the object also declares `_gradeDrafts: {}` as a static property (line 98) so it's always defined even before the first `render()`. Add, at module scope (outside the `GradingPanel` object literal, once, anywhere in the file — e.g. right after the closing `};` of the object):
```js
window.addEventListener('beforeunload', function(e) {
  if (typeof GradingPanel === 'undefined') return;
  var drafts = GradingPanel._gradeDrafts;
  if (!drafts || Object.keys(drafts).length === 0) return;
  e.preventDefault();
  e.returnValue = '';
});
```
(a single page-scoped listener registered once at script-load time — not per-render — is correct here since it must fire regardless of which module's grade table is currently shown; it self-gates on `_gradeDrafts` being non-empty, so it's a no-op everywhere else in the app, including for users who never open `GradingPanel`.)

- [ ] **Step 2: Manual verification**

As a teacher, open grading for a class, type a grade/appreciation into at least one student's row (populating `_gradeDrafts` via the existing `_captureCurrentDraft`/module-switch flow — switch to a second module in the selector to force the draft to be captured, per the existing code's own mechanism), then attempt to close the tab or navigate away via the browser's own back/close controls (not the app's in-app navigation, which this task doesn't intercept). Confirm the browser's native "leave site?" prompt appears. Export the CSV (clearing the practical need to leave) or clear the input — confirm the prompt no longer appears when leaving with no unsaved drafts. Confirm navigating **within** the app (e.g. via `_viewClass`) is unaffected — `beforeunload` only fires on actual page unload/close, not in-app SPA navigation, which is expected and fine (in-app navigation between grading views already keeps `_gradeDrafts` in memory).

Note for the final report: level-2 (Firestore persistence of drafts) was not attempted in this pass; recommend it as a follow-up if teachers report losing grading work despite the new warning (e.g. crash, accidental force-quit that skips `beforeunload`).

---

### Task 15: Cache-busting pass (single, final)

**Files:**
- Modify: `index.html` (every local `<script src="...?v=N">` / `<link ... ?v=N">` tag)

- [ ] **Step 1: Determine the current baseline and bump**

```bash
grep -o '?v=[0-9]*' index.html | sort -u
```
Confirm there's a single consistent number across all local tags (if not — i.e. if a concurrent session partially bumped some tags — stop and reconcile manually before proceeding, don't silently pick one). Then bump every local occurrence by 1 (do **not** touch the external CDN URLs like KaTeX/Firebase/`jsdelivr`, which don't carry this app's `?v=` convention):
```bash
CUR=59   # replace with whatever Step 1's grep actually reported
NEXT=$((CUR + 1))
sed -i "s/\?v=$CUR\"/?v=$NEXT\"/g" index.html
grep -c "?v=$NEXT" index.html   # sanity check: should match the count of local tags touched
```

- [ ] **Step 2: Verify nothing was missed and nothing external was touched**

```bash
grep -o '?v=[0-9]*' index.html | sort -u    # should show only the new number now
git diff index.html | grep -E '^\+.*cdn\.jsdelivr|^\+.*gstatic|^\+.*googlesyndication'   # should be empty
```

- [ ] **Step 3: Full-app smoke test**

Serve locally, hard-reload (bypass cache), open DevTools Network tab, confirm every local script/stylesheet loads with the new `?v=` suffix and no 404s. Click through: home → a module → sign in as each of the 3 new-feature-touching roles (student, teacher, admin) → confirm no console errors from a stale/mismatched script version.

---

### Task 16: Final regression verification + structured report

- [ ] **Step 1: Re-run the audit's own regression checklist**

Student registration with a class code still works end-to-end. `/admin` and `/teacher` routes are still blocked (redirected home) for a logged-in student — re-confirm this wasn't accidentally weakened by any of Tasks 1-15 (it shouldn't have been touched at all, but it's cheap to re-check given how central it is).

- [ ] **Step 2: Spot-check cross-task interactions**

The Task-5 `Modal` component and Task-1's toast-offset fix both touch fixed-position overlays — open a modal while the consent banner is visible, confirm no visual conflict (they occupy different z-index layers, `--z-consent: 600` vs `.app-modal-overlay`'s `z-index: 400`, so the consent banner would sit above the modal if both show simultaneously — verify this is acceptable, or bump the modal's z-index above `--z-consent` if a modal action should take priority over the cookie banner in practice, e.g. sign-out confirmation).

- [ ] **Step 3: Write the structured report**

Per the audit doc's own deliverable format — structured by group A–F:
- ✅ what's done and verified (reference each task above)
- 🐛 any regression or side effect found while testing
- 🔍 decisions made on the judgment-call items, with justification: #4 (Task 10), #11 migration (Task 8, already documented above), #13 (Task 9, already documented above)
- Final list of all test accounts/data created during this session (prefix `impl-audit-2026-08-19-...`), so they can be identified and cleaned up later if needed.

- [ ] **Step 4: Leave the working tree for review**

Do not commit (per Global Constraints) unless explicitly asked. Run `git status` and `git diff --stat` and include that output in the handoff to the user, clearly separating this session's files from the pre-existing unrelated uncommitted changes noted in Global Constraints.
