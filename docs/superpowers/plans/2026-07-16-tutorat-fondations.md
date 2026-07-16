# Tutorat privé — Fondations (Phase 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a private, 2-person (Dylan + Simon) tutoring-tracking space inside Spark Learning: student profiles, session history, and manual post-session ratings — no AI generation yet (that's Phase 2, spec'd separately).

**Architecture:** Reuses the existing Firebase Auth/Firestore stack. Access is gated by a new boolean field `tutorAccess` on the existing `users/{uid}` doc (independent from the existing `role` enum, so an `admin` account can also be a tutor). Two new Firestore collections (`tutoringStudents`, `tutoringSessions`) and two new views (`TutoringHome`, `TutoringStudent`) follow the exact object/render pattern already used by `TeacherDashboard`/`AdminPanel`.

**Tech Stack:** Vanilla JS (no bundler), Firebase Auth + Firestore (compat SDK via CDN, already loaded), existing CSS variable system (`css/styles.css`).

## Global Constraints

- No bundler, no npm, no `export`/`import` in any new file — plain global objects/functions (`var X = { ... }`), exactly like `js/views/teacherDashboard.js` and `js/auth/authService.js`.
- No automated test framework exists in this repo — every task's validation is a manual browser check (matches the project's existing convention; see `docs/superpowers/specs/2026-07-16-tutorat-fondations-design.md` §6).
- Decimal French notation / KaTeX rules from `CLAUDE.md` do not apply here (no pedagogical content in this phase).
- Cache-busting: every local `<script>`/`<link>` tag in `index.html` carries `?v=N`. New script tags added mid-plan are added at the **current** version (`v=19`); the bump to `v=20` across **every** local tag happens once, in Task 7, right before this feature is considered deployment-ready (matches `CLAUDE.md`'s "bump once per deployment", not once per commit).
- Firestore collections `tutoringStudents`/`tutoringSessions` must be fully closed to non-tutor accounts — no public read, no student/teacher/admin-without-tutorAccess access.
- Styling reuses existing CSS variables only (`var(--primary)`, `var(--error)`, `var(--bg-card)`, `var(--text-muted, #9090b0)`, etc.) — no hardcoded colors.

---

### Task 1: Firestore security rules + tutor access provisioning

**Files:**
- Modify: `firestore.rules:21-24` (add `isTutor()` after `isTeacherOrAdmin()`), `firestore.rules:114-124` (add two new `match` blocks after the `assignments` block)

**Interfaces:**
- Produces: Firestore rule function `isTutor()` — used by no other rule in this phase, but is the security boundary every later task's manual Firestore calls depend on.

- [ ] **Step 1: Add the `isTutor()` helper function**

In `firestore.rules`, right after the closing brace of `isTeacherOrAdmin()` (currently lines 21-24) and before the `isOwningTeacher` comment, insert:

```
    function isTutor() {
      return isSignedIn() && getUserData().tutorAccess == true;
    }
```

- [ ] **Step 2: Add rules for the two new collections**

In `firestore.rules`, right after the closing brace of the `assignments` match block (currently ending at line 124) and before the final two closing braces of the file, insert:

```
    // ─── tutoringStudents (suivi cours particuliers, privé à 2 comptes) ───
    match /tutoringStudents/{studentId} {
      allow read, write: if isTutor();
    }

    // ─── tutoringSessions (suivi cours particuliers, privé à 2 comptes) ───
    match /tutoringSessions/{sessionId} {
      allow read, write: if isTutor();
    }
```

- [ ] **Step 3: Deploy the rules**

Run: `firebase deploy --only firestore:rules`
Expected output: `✔ Deploy complete!` with `firestore: released rules firestore.rules`.

- [ ] **Step 4: Grant `tutorAccess` to the two tutor accounts (manual, Firebase Console)**

1. Open the Firebase Console → Firestore Database → `users` collection.
2. Find Dylan's existing account document (the one with `role: "admin"`). Add a new field: `tutorAccess` (type **boolean**) = `true`.
3. If Simon does not yet have a Spark Learning account, have him sign up once through the existing site (`AuthView`, email + password, role doesn't matter — `student` is fine as a placeholder). Then find his new `users/{uid}` doc in the console and add the same field: `tutorAccess` (boolean) = `true`.

- [ ] **Step 5: Verify the rule manually**

1. Sign in to the site as Dylan (the account with `tutorAccess: true`).
2. Open the browser DevTools console and run:
   ```js
   await firebase.firestore().collection('tutoringStudents').add({ test: true })
   ```
   Expected: resolves with a `DocumentReference`, no error.
3. Delete that test doc from the Firebase Console (Firestore Database → `tutoringStudents` → the doc you just created → delete).
4. Sign out, then sign in with any account that does **not** have `tutorAccess` (e.g. a student test account). Run the same command.
   Expected: rejects with `FirebaseError: Missing or insufficient permissions.`

- [ ] **Step 6: Commit**

```bash
git add firestore.rules
git commit -m "feat: ajoute les règles Firestore pour le tutorat privé (tutorAccess)"
```

---

### Task 2: `AuthGuard.isTutor()` + state field

**Files:**
- Modify: `js/auth/authGuard.js:34-35`
- Modify: `js/state.js:164`

**Interfaces:**
- Consumes: `AuthGuard._currentProfile` (already populated by `AuthGuard.init()`, unchanged).
- Produces: `AuthGuard.isTutor()` — returns `boolean`, used by `js/app.js` (Task 4) to gate routing and nav visibility. `state.tutoringStudentId` — `string | null`, used by `js/app.js` (Task 4) to remember which student's fiche is open.

- [ ] **Step 1: Add `isTutor()` to `AuthGuard`**

In `js/auth/authGuard.js`, after the `isStudent` line:
```js
  isStudent: function() { return !!(this._currentProfile && this._currentProfile.role === 'student'); },
```
add:
```js
  isTutor:   function() { return !!(this._currentProfile && this._currentProfile.tutorAccess === true); },
```

- [ ] **Step 2: Add `tutoringStudentId` to global state**

In `js/state.js`, the `state` object currently ends with:
```js
  playlistBuilder: null,
  homeworkState: null
};
```
Change it to:
```js
  playlistBuilder: null,
  homeworkState: null,
  tutoringStudentId: null
};
```

- [ ] **Step 3: Verify manually**

1. Open the site signed in as the tutor account from Task 1.
2. In DevTools console, run `AuthGuard.isTutor()` → expect `true`.
3. Sign out, sign in with a non-tutor account, run `AuthGuard.isTutor()` → expect `false`.
4. Run `state.tutoringStudentId` → expect `null`.

- [ ] **Step 4: Commit**

```bash
git add js/auth/authGuard.js js/state.js
git commit -m "feat: ajoute AuthGuard.isTutor() et state.tutoringStudentId"
```

---

### Task 3: `TutoringService` (Firestore data layer)

**Files:**
- Create: `js/tutoring/tutoringService.js`
- Modify: `index.html` (add script tag)

**Interfaces:**
- Consumes: `AuthService.getDb()`, `AuthService.getCurrentUser()` (existing, unchanged), global `firebase` (Firestore compat SDK, already loaded before this script).
- Produces: global `TutoringService` object with methods `getStudents()`, `getStudent(studentId)`, `createStudent(data)`, `updateStudent(studentId, patch)`, `archiveStudent(studentId)`, `getStudentSessions(studentId)`, `createSession(studentId, data)`, `rateSession(sessionId, rating, remarks)` — all `async`, all consumed by `TutoringHome`/`TutoringStudent` in Tasks 4-6.

- [ ] **Step 1: Create the service file**

Create `js/tutoring/tutoringService.js`:

```js
/* =========================================================
   Spark Learning – tutoringService.js
   Firestore CRUD pour le suivi de cours particuliers (tutorat privé)
   ========================================================= */

var TutoringService = {
  _db: function() { return AuthService.getDb(); },

  /* ── Élèves ── */
  getStudents: async function() {
    var snap = await this._db().collection('tutoringStudents')
      .where('archived', '==', false)
      .get();
    return snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .sort(function(a, b) { return (a.lastName || '').localeCompare(b.lastName || '', 'fr'); });
  },

  getStudent: async function(studentId) {
    var doc = await this._db().collection('tutoringStudents').doc(studentId).get();
    return doc.exists ? Object.assign({ id: doc.id }, doc.data()) : null;
  },

  createStudent: async function(data) {
    var uid = AuthService.getCurrentUser().uid;
    var ref = await this._db().collection('tutoringStudents').add({
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      level: data.level || '',
      subjects: data.subjects || [],
      contact: data.contact || { parentEmail: null, parentPhone: null, studentEmail: null },
      generalNotes: data.generalNotes || '',
      archived: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: uid
    });
    return ref.id;
  },

  updateStudent: async function(studentId, patch) {
    await this._db().collection('tutoringStudents').doc(studentId).update(patch);
  },

  archiveStudent: async function(studentId) {
    await this.updateStudent(studentId, { archived: true });
  },

  /* ── Séances ── */
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

  createSession: async function(studentId, data) {
    var uid = AuthService.getCurrentUser().uid;
    var dateValue = data.date
      ? firebase.firestore.Timestamp.fromDate(new Date(data.date))
      : firebase.firestore.Timestamp.now();
    var ref = await this._db().collection('tutoringSessions').add({
      studentId: studentId,
      tutorUid: uid,
      date: dateValue,
      subject: data.subject || '',
      topic: data.topic || '',
      difficultiesObserved: data.difficultiesObserved || '',
      status: 'draft',
      rating: null,
      ratingRemarks: null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return ref.id;
  },

  rateSession: async function(sessionId, rating, remarks) {
    await this._db().collection('tutoringSessions').doc(sessionId).update({
      rating: rating,
      ratingRemarks: remarks || '',
      status: 'rated'
    });
  }
};
```

- [ ] **Step 2: Wire the script into `index.html`**

In `index.html`, after the line `<script src="js/views/adminPanel.js?v=19"></script>` (currently line 50), add:
```html
  <script src="js/tutoring/tutoringService.js?v=19"></script>
```

- [ ] **Step 3: Verify manually**

1. Reload the site signed in as a tutor account.
2. In DevTools console:
   ```js
   var id = await TutoringService.createStudent({ firstName: 'Test', lastName: 'Élève', level: '1re', subjects: ['Maths'] });
   var students = await TutoringService.getStudents();
   students.some(s => s.id === id) // expect true
   ```
3. ```js
   await TutoringService.archiveStudent(id);
   var students2 = await TutoringService.getStudents();
   students2.some(s => s.id === id) // expect false — soft-deleted, no longer listed
   ```
4. Manually delete the leftover test doc from the Firebase Console (Firestore Database → `tutoringStudents` → the test doc).

- [ ] **Step 4: Commit**

```bash
git add js/tutoring/tutoringService.js index.html
git commit -m "feat: ajoute TutoringService (CRUD Firestore élèves/séances)"
```

---

### Task 4: `TutoringHome` + `TutoringStudent` views, routing, nav link

**Files:**
- Create: `js/views/tutoring/tutoringHome.js`
- Create: `js/views/tutoring/tutoringStudent.js`
- Modify: `js/app.js` (`buildPath`, `_parseRouteParts`, `navigate`, render dispatcher, `updatePageTitle`, `updateNavActive`, `_setupCommonListeners`)
- Modify: `index.html` (nav button, script tags)
- Modify: `css/styles.css` (new `.tt-*` classes)

**Interfaces:**
- Consumes: `TutoringService.*` (Task 3), `AuthGuard.isTutor()`/`isAuthenticated()` (Task 2 / existing), `showToast(msg, type)` (existing, `js/app.js`), `navigate(view, data)` (existing, extended here).
- Produces: global `TutoringHome` object (`render()`, `_renderList(filter)`, `_showAddForm()`, `_submitAddForm(e)`); global `TutoringStudent` object (`render(studentId)`, `_renderFiche()`, `_saveNotes()`, `_archive()`) — `_renderFiche()`'s sessions block and `TutoringStudent` are extended in Task 5.

- [ ] **Step 1: Create `TutoringHome`**

Create `js/views/tutoring/tutoringHome.js`:

```js
/* =========================================================
   Spark Learning – tutoringHome.js
   Liste des élèves de cours particuliers (tutorat privé)
   ========================================================= */

var TutoringHome = {
  _students: [],

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function() {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringHome._students = await TutoringService.getStudents();
      TutoringHome._renderList('');
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },

  _renderList: function(filter) {
    var q = (filter || '').toLowerCase().trim();
    var students = TutoringHome._students.filter(function(s) {
      if (!q) return true;
      return (s.firstName + ' ' + s.lastName).toLowerCase().indexOf(q) !== -1;
    });

    var cardsHtml = students.length === 0
      ? '<p class="tt-empty">Aucun élève pour l\'instant.</p>'
      : students.map(function(s) {
          return '<div class="tt-student-card" onclick="navigate(\'tutoringStudent\', {studentId: \'' + s.id + '\'})">' +
            '<h3 class="tt-student-name">' + TutoringHome._esc(s.firstName) + ' ' + TutoringHome._esc(s.lastName) + '</h3>' +
            '<div class="tt-student-level">' + TutoringHome._esc(s.level) + '</div>' +
            '<div class="tt-student-subjects">' + (s.subjects || []).map(TutoringHome._esc).join(' · ') + '</div>' +
          '</div>';
        }).join('');

    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<h1 class="tt-title">Tutorat privé</h1>' +
          '<button class="tt-add-btn" onclick="TutoringHome._showAddForm()">+ Ajouter un élève</button>' +
        '</div>' +
        '<input type="text" class="tt-search" placeholder="Rechercher un élève..." ' +
          'oninput="TutoringHome._renderList(this.value)" value="' + TutoringHome._esc(q) + '"/>' +
        '<div class="tt-students-grid">' + cardsHtml + '</div>' +
      '</div>';
  },

  _showAddForm: function() {
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringHome._renderList(\'\')">← Retour</button>' +
          '<h1 class="tt-title">Ajouter un élève</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringHome._submitAddForm(event)">' +
          '<label class="tt-label">Prénom<input type="text" id="tt-new-firstname" class="tt-input" required/></label>' +
          '<label class="tt-label">Nom<input type="text" id="tt-new-lastname" class="tt-input" required/></label>' +
          '<label class="tt-label">Niveau<input type="text" id="tt-new-level" class="tt-input" placeholder="ex: 1re, Tle, BTS 1"/></label>' +
          '<label class="tt-label">Matières (séparées par une virgule)<input type="text" id="tt-new-subjects" class="tt-input" placeholder="Maths, Physique-Chimie"/></label>' +
          '<label class="tt-label">Email parent (optionnel)<input type="email" id="tt-new-parent-email" class="tt-input"/></label>' +
          '<button type="submit" class="tt-submit-btn">Créer la fiche élève</button>' +
        '</form>' +
      '</div>';
    document.getElementById('tt-new-firstname').focus();
  },

  _submitAddForm: function(e) {
    e.preventDefault();
    var firstName = document.getElementById('tt-new-firstname').value.trim();
    var lastName = document.getElementById('tt-new-lastname').value.trim();
    var level = document.getElementById('tt-new-level').value.trim();
    var subjects = document.getElementById('tt-new-subjects').value
      .split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    var parentEmail = document.getElementById('tt-new-parent-email').value.trim();

    if (!firstName || !lastName) {
      showToast('Prénom et nom sont obligatoires.', 'error');
      return false;
    }

    TutoringService.createStudent({
      firstName: firstName,
      lastName: lastName,
      level: level,
      subjects: subjects,
      contact: { parentEmail: parentEmail || null, parentPhone: null, studentEmail: null }
    }).then(function() {
      showToast('Élève ajouté !', 'success');
      TutoringHome.render();
    }).catch(function() {
      showToast('Erreur lors de la création.', 'error');
    });

    return false;
  }
};
```

- [ ] **Step 2: Create `TutoringStudent`**

Create `js/views/tutoring/tutoringStudent.js`:

```js
/* =========================================================
   Spark Learning – tutoringStudent.js
   Fiche élève de cours particuliers : notes, historique séances
   ========================================================= */

var TutoringStudent = {
  _student: null,
  _sessions: [],

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: async function(studentId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringStudent._student = await TutoringService.getStudent(studentId);
      if (!TutoringStudent._student) {
        app.innerHTML = '<div class="tt-error">Élève introuvable.</div>';
        return;
      }
      TutoringStudent._sessions = [];
      TutoringStudent._renderFiche();
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },

  _renderFiche: function() {
    var s = TutoringStudent._student;
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="navigate(\'tutoring\')">← Retour</button>' +
          '<h1 class="tt-title">' + TutoringStudent._esc(s.firstName) + ' ' + TutoringStudent._esc(s.lastName) + '</h1>' +
          '<button class="tt-archive-btn" onclick="TutoringStudent._archive()">Archiver</button>' +
        '</div>' +
        '<div class="tt-student-meta">' +
          '<span class="tt-student-level">' + TutoringStudent._esc(s.level) + '</span>' +
          '<span class="tt-student-subjects">' + (s.subjects || []).map(TutoringStudent._esc).join(' · ') + '</span>' +
        '</div>' +
        '<div class="tt-notes-block">' +
          '<h2 class="tt-section-title">Notes générales</h2>' +
          '<textarea class="tt-notes-textarea" id="tt-general-notes">' + TutoringStudent._esc(s.generalNotes) + '</textarea>' +
          '<button class="tt-save-notes-btn" onclick="TutoringStudent._saveNotes()">Enregistrer les notes</button>' +
        '</div>' +
        '<div class="tt-sessions-block">' +
          '<h2 class="tt-section-title">Historique des séances</h2>' +
          '<p class="tt-empty">Aucune séance pour l\'instant.</p>' +
        '</div>' +
      '</div>';
  },

  _saveNotes: async function() {
    var notes = document.getElementById('tt-general-notes').value;
    try {
      await TutoringService.updateStudent(TutoringStudent._student.id, { generalNotes: notes });
      TutoringStudent._student.generalNotes = notes;
      showToast('Notes enregistrées.', 'success');
    } catch (e) {
      showToast('Erreur lors de l\'enregistrement.', 'error');
    }
  },

  _archive: async function() {
    var s = TutoringStudent._student;
    if (!confirm('Archiver ' + s.firstName + ' ' + s.lastName + ' ? Son historique restera consultable mais il/elle disparaîtra de la liste.')) return;
    try {
      await TutoringService.archiveStudent(s.id);
      showToast('Élève archivé.', 'success');
      navigate('tutoring');
    } catch (e) {
      showToast('Erreur lors de l\'archivage.', 'error');
    }
  }
};
```

- [ ] **Step 3: Wire routing in `js/app.js`**

In `buildPath` (`js/app.js`), after the `case 'confidentialite':` line, add:
```js
    case 'tutoring':        return '/tutorat';
    case 'tutoringStudent': return `/tutorat/${data.studentId || state.tutoringStudentId}`;
```

In `_parseRouteParts` (`js/app.js`), after the `case 'confidentialite':` line, add:
```js
    case 'tutorat':
      return parts[1] ? { view: 'tutoringStudent', studentId: parts[1] } : { view: 'tutoring' };
```

In `navigate()` (`js/app.js`), the existing guest guard reads:
```js
  if ((view === 'teacher' || view === 'homework' || view === 'admin') &&
      typeof AuthGuard !== 'undefined' && !AuthGuard.isAuthenticated()) {
    view = 'home';
  }
```
Replace it with:
```js
  if ((view === 'teacher' || view === 'homework' || view === 'admin' || view === 'tutoring' || view === 'tutoringStudent') &&
      typeof AuthGuard !== 'undefined' && !AuthGuard.isAuthenticated()) {
    view = 'home';
  }

  // Tutorat réservé aux comptes tutorAccess (défense en profondeur, en plus des règles Firestore)
  if ((view === 'tutoring' || view === 'tutoringStudent') &&
      typeof AuthGuard !== 'undefined' && !AuthGuard.isTutor()) {
    view = 'home';
  }
```

Still in `navigate()`, right after:
```js
  if (data.moduleId !== undefined) state.moduleId = data.moduleId;
  if (data.tab !== undefined) state.tab = data.tab;
```
add:
```js
  if (data.studentId !== undefined) state.tutoringStudentId = data.studentId;
```

In the render dispatcher `render()` (`js/app.js`), after the line `case 'admin':      AdminPanel.render(); return;`, add:
```js
    case 'tutoring':        TutoringHome.render(); return;
    case 'tutoringStudent': TutoringStudent.render(state.tutoringStudentId); return;
```

In `updatePageTitle()` (`js/app.js`), before the `default:` line, add:
```js
    case 'tutoring':        document.title = `Tutorat — ${base}`; break;
    case 'tutoringStudent': {
      const s = TutoringStudent._student;
      document.title = s ? `${s.firstName} ${s.lastName} — Tutorat — ${base}` : `Tutorat — ${base}`;
      break;
    }
```

In `updateNavActive()` (`js/app.js`), add a third line:
```js
  document.getElementById('nav-tutoring')?.classList.toggle('active', ['tutoring','tutoringStudent'].includes(state.view));
```

- [ ] **Step 4: Wire the nav link in `_setupCommonListeners()` (`js/app.js`)**

Right after:
```js
  var loginBtn = document.getElementById('nav-login');
  if (loginBtn) loginBtn.style.display = isGuest ? 'inline-flex' : 'none';
```
add:
```js
  var tutoringNav = document.getElementById('nav-tutoring');
  if (tutoringNav) tutoringNav.style.display = (typeof AuthGuard !== 'undefined' && AuthGuard.isTutor()) ? '' : 'none';
```

Then, in the one-time listener block (after `if (_setupCommonListeners._done) return;`), right after:
```js
  document.getElementById('nav-teacher')?.addEventListener('click', () => { ... });
```
add:
```js
  document.getElementById('nav-tutoring')?.addEventListener('click', () => navigate('tutoring'));
```

- [ ] **Step 5: Add the nav button in `index.html`**

After the `nav-teacher` button (currently line 67):
```html
<button class="nav-link" id="nav-tutoring" aria-label="Tutorat"><span class="nav-full">Tutorat</span><span class="nav-short" aria-hidden="true">🎯</span></button>
```

- [ ] **Step 6: Add the script tags in `index.html`**

After the `tutoringService.js` line added in Task 3, add:
```html
  <script src="js/views/tutoring/tutoringHome.js?v=19"></script>
  <script src="js/views/tutoring/tutoringStudent.js?v=19"></script>
```

- [ ] **Step 7: Add CSS classes in `css/styles.css`**

Append at the end of the file:
```css
/* ── Tutorat privé (TutoringHome / TutoringStudent) ── */
.tt-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
}

.tt-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.tt-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  flex: 1;
}

.tt-back-btn {
  background: none;
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--text-muted, #9090b0);
  transition: all 0.2s;
}
.tt-back-btn:hover { background: var(--bg-card); }

.tt-add-btn, .tt-submit-btn, .tt-save-notes-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
.tt-add-btn:hover, .tt-submit-btn:hover, .tt-save-notes-btn:hover { opacity: 0.9; }

.tt-archive-btn {
  background: none;
  border: 1px solid var(--error);
  color: var(--error);
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  cursor: pointer;
}
.tt-archive-btn:hover { background: var(--error); color: #fff; }

.tt-search {
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  background: var(--bg-card);
  color: var(--text);
}

.tt-students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.tt-student-card {
  background: var(--bg-card);
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: transform 0.15s;
}
.tt-student-card:hover { transform: translateY(-2px); }

.tt-student-name { font-family: 'Poppins', sans-serif; font-weight: 700; margin-bottom: 0.25rem; }
.tt-student-level { color: var(--text-muted, #9090b0); font-size: 0.85rem; }
.tt-student-subjects { font-size: 0.85rem; margin-top: 0.5rem; color: var(--secondary); }

.tt-student-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-muted, #9090b0);
  font-size: 0.9rem;
}

.tt-section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 1.5rem 0 0.75rem;
}

.tt-notes-textarea {
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.9rem;
  background: var(--bg-card);
  color: var(--text);
  resize: vertical;
  margin-bottom: 0.75rem;
}

.tt-form { display: flex; flex-direction: column; gap: 1rem; max-width: 480px; }
.tt-label { display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; font-weight: 600; }
.tt-input {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-card);
  color: var(--text);
}

.tt-loading, .tt-error, .tt-empty {
  text-align: center;
  padding: 3rem;
  color: var(--text-muted, #9090b0);
}
.tt-error { color: var(--error); }
```

- [ ] **Step 8: Verify manually**

1. Reload the site signed in as the tutor account. Confirm a "Tutorat 🎯" nav button appears.
2. Sign in as a non-tutor account. Confirm the button does **not** appear, and manually navigating to `/tutorat` redirects to home.
3. As the tutor: click "Tutorat" → the list view loads (empty or shows existing test data). Click "+ Ajouter un élève", fill the form, submit → toast "Élève ajouté !", back on the list, the new card appears.
4. Click the new student card → fiche loads with name, level, subjects, an editable notes textarea, and "Aucune séance pour l'instant."
5. Type something in notes, click "Enregistrer les notes" → toast "Notes enregistrées." Reload the page, navigate back to the same fiche → notes persisted.
6. Click "Archiver", confirm → toast "Élève archivé.", redirected to the list, the student no longer appears.

- [ ] **Step 9: Commit**

```bash
git add js/views/tutoring/tutoringHome.js js/views/tutoring/tutoringStudent.js js/app.js index.html css/styles.css
git commit -m "feat: ajoute les vues Tutorat (liste élèves + fiche élève) et le routage"
```

---

### Task 5: "Nouvelle séance" form + session history display

**Files:**
- Modify: `js/views/tutoring/tutoringStudent.js`
- Modify: `css/styles.css`

**Interfaces:**
- Consumes: `TutoringService.getStudentSessions`, `TutoringService.createSession` (Task 3).
- Produces: `TutoringStudent._sessions` populated on `render()`; `TutoringStudent._renderSessionsList()`, `_showSessionForm()`, `_submitSessionForm(e)` — the rating button added in Task 6 reads `sess.status` from this same list rendering.

- [ ] **Step 1: Fetch sessions alongside the student in `render()`**

In `js/views/tutoring/tutoringStudent.js`, replace:
```js
  render: async function(studentId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringStudent._student = await TutoringService.getStudent(studentId);
      if (!TutoringStudent._student) {
        app.innerHTML = '<div class="tt-error">Élève introuvable.</div>';
        return;
      }
      TutoringStudent._sessions = [];
      TutoringStudent._renderFiche();
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },
```
with:
```js
  render: async function(studentId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      var results = await Promise.all([
        TutoringService.getStudent(studentId),
        TutoringService.getStudentSessions(studentId)
      ]);
      TutoringStudent._student = results[0];
      TutoringStudent._sessions = results[1];
      if (!TutoringStudent._student) {
        app.innerHTML = '<div class="tt-error">Élève introuvable.</div>';
        return;
      }
      TutoringStudent._renderFiche();
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Erreur de chargement.</div>';
    }
  },
```

- [ ] **Step 2: Render the real session list**

In `_renderFiche()`, replace:
```js
        '<div class="tt-sessions-block">' +
          '<h2 class="tt-section-title">Historique des séances</h2>' +
          '<p class="tt-empty">Aucune séance pour l\'instant.</p>' +
        '</div>' +
```
with:
```js
        '<div class="tt-sessions-block">' +
          '<div class="tt-sessions-header">' +
            '<h2 class="tt-section-title">Historique des séances</h2>' +
            '<button class="tt-add-btn" onclick="TutoringStudent._showSessionForm()">+ Nouvelle séance</button>' +
          '</div>' +
          TutoringStudent._renderSessionsList() +
        '</div>' +
```

- [ ] **Step 3: Add `_renderSessionsList`, `_showSessionForm`, `_submitSessionForm`**

Add these three methods to the `TutoringStudent` object (after `_archive`, separated by a comma):
```js
  ,
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
      '</div>';
    }).join('');
  },

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
          '<button type="submit" class="tt-submit-btn">Enregistrer la séance</button>' +
        '</form>' +
      '</div>';
    document.getElementById('tt-session-date').valueAsDate = new Date();
  },

  _submitSessionForm: function(e) {
    e.preventDefault();
    var date = document.getElementById('tt-session-date').value;
    var subject = document.getElementById('tt-session-subject').value.trim();
    var topic = document.getElementById('tt-session-topic').value.trim();
    var difficulties = document.getElementById('tt-session-difficulties').value.trim();

    if (!date || !subject || !topic) {
      showToast('Date, matière et sujet sont obligatoires.', 'error');
      return false;
    }

    TutoringService.createSession(TutoringStudent._student.id, {
      date: date,
      subject: subject,
      topic: topic,
      difficultiesObserved: difficulties
    }).then(function() {
      showToast('Séance enregistrée !', 'success');
      TutoringStudent.render(TutoringStudent._student.id);
    }).catch(function() {
      showToast('Erreur lors de l\'enregistrement.', 'error');
    });

    return false;
  }
```

- [ ] **Step 4: Add CSS for the sessions block and form textarea**

Append to `css/styles.css`:
```css
.tt-textarea {
  width: 100%;
  min-height: 80px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.9rem;
  background: var(--bg-card);
  color: var(--text);
  resize: vertical;
}

.tt-sessions-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.tt-session-card {
  background: var(--bg-card);
  border: 1px solid var(--border, rgba(0,0,0,0.1));
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
}

.tt-session-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted, #9090b0);
  margin-bottom: 0.4rem;
}

.tt-session-topic { font-weight: 600; margin-bottom: 0.3rem; }
.tt-session-difficulties { font-size: 0.85rem; color: var(--text-muted, #9090b0); }
```

- [ ] **Step 5: Verify manually**

1. Open a student fiche. Click "+ Nouvelle séance". Fill date/matière/sujet/difficultés, submit.
2. Expect toast "Séance enregistrée !" and to land back on the fiche with the new session card showing at the top of the history (date, matière, sujet, difficultés).
3. Add a second session with an earlier date than the first → confirm it's sorted below the more recent one.
4. Reload the page, navigate back to the fiche → both sessions still there, same order.

- [ ] **Step 6: Commit**

```bash
git add js/views/tutoring/tutoringStudent.js css/styles.css
git commit -m "feat: ajoute le formulaire Nouvelle séance et l'historique sur la fiche élève"
```

---

### Task 6: Post-session rating (1-10 + remarks)

**Files:**
- Modify: `js/views/tutoring/tutoringStudent.js`
- Modify: `css/styles.css`

**Interfaces:**
- Consumes: `TutoringService.rateSession(sessionId, rating, remarks)` (Task 3), `TutoringStudent._sessions` (Task 5).
- Produces: `TutoringStudent._showRatingForm(sessionId)`, `_submitRating(e, sessionId)`.

- [ ] **Step 1: Show the rating button (or the existing rating) per session**

In `_renderSessionsList`, replace the closing of each session card:
```js
        (sess.difficultiesObserved ? '<p class="tt-session-difficulties">' + TutoringStudent._esc(sess.difficultiesObserved) + '</p>' : '') +
      '</div>';
```
with:
```js
        (sess.difficultiesObserved ? '<p class="tt-session-difficulties">' + TutoringStudent._esc(sess.difficultiesObserved) + '</p>' : '') +
        (sess.status === 'draft'
          ? '<button class="tt-rate-btn" onclick="TutoringStudent._showRatingForm(\'' + sess.id + '\')">Noter cette séance</button>'
          : '<div class="tt-session-rating">Note : ' + sess.rating + '/10' + (sess.ratingRemarks ? ' — ' + TutoringStudent._esc(sess.ratingRemarks) : '') + '</div>'
        ) +
      '</div>';
```

- [ ] **Step 2: Add `_showRatingForm` and `_submitRating`**

Add these two methods to the `TutoringStudent` object (after `_submitSessionForm`, separated by a comma):
```js
  ,
  _showRatingForm: function(sessionId) {
    document.getElementById('app').innerHTML =
      '<div class="tt-container">' +
        '<div class="tt-header">' +
          '<button class="tt-back-btn" onclick="TutoringStudent._renderFiche()">← Retour</button>' +
          '<h1 class="tt-title">Noter la séance</h1>' +
        '</div>' +
        '<form class="tt-form" onsubmit="return TutoringStudent._submitRating(event, \'' + sessionId + '\')">' +
          '<label class="tt-label">Note (1 à 10)<input type="number" id="tt-rating-value" class="tt-input" min="1" max="10" required/></label>' +
          '<label class="tt-label">Remarques<textarea id="tt-rating-remarks" class="tt-textarea"></textarea></label>' +
          '<button type="submit" class="tt-submit-btn">Enregistrer la note</button>' +
        '</form>' +
      '</div>';
  },

  _submitRating: function(e, sessionId) {
    e.preventDefault();
    var rating = parseInt(document.getElementById('tt-rating-value').value, 10);
    var remarks = document.getElementById('tt-rating-remarks').value.trim();

    if (!rating || rating < 1 || rating > 10) {
      showToast('La note doit être comprise entre 1 et 10.', 'error');
      return false;
    }

    TutoringService.rateSession(sessionId, rating, remarks).then(function() {
      showToast('Séance notée !', 'success');
      TutoringStudent.render(TutoringStudent._student.id);
    }).catch(function() {
      showToast('Erreur lors de l\'enregistrement de la note.', 'error');
    });

    return false;
  }
```

- [ ] **Step 3: Add CSS for the rating button/display**

Append to `css/styles.css`:
```css
.tt-rate-btn {
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 8px;
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
.tt-rate-btn:hover { background: var(--primary); color: #fff; }

.tt-session-rating {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--secondary);
}
```

- [ ] **Step 4: Verify manually**

1. Open a fiche with a `draft` session (from Task 5). Confirm the "Noter cette séance" button appears.
2. Click it, enter a rating of `7` and a remark, submit.
3. Expect toast "Séance notée !", back on the fiche, that session now shows "Note : 7/10 — <remark>" instead of the button.
4. Try submitting a rating of `0` or `11` on another draft session → expect the toast "La note doit être comprise entre 1 et 10." and no Firestore write (the form stays open).

- [ ] **Step 5: Commit**

```bash
git add js/views/tutoring/tutoringStudent.js css/styles.css
git commit -m "feat: ajoute la notation manuelle des séances (1-10 + remarques)"
```

---

### Task 7: Documentation + cache-busting version bump

**Files:**
- Modify: `CODEBASE_MAP.md`
- Modify: `contenu.md`
- Modify: `index.html` (bump every `?v=19` to `?v=20`)

**Interfaces:**
- Consumes: nothing new — this task only documents Tasks 1-6 and finalizes the deployable version.

- [ ] **Step 1: Update `CODEBASE_MAP.md`**

Add a bullet to the existing `## firestore.rules` section:
```
- `tutoringStudents/{studentId}` / `tutoringSessions/{sessionId}` — lecture/écriture réservées aux comptes `tutorAccess: true` (`isTutor()`), fermé à tous les autres rôles
```

Add a bullet to the existing `## js/auth/authGuard.js` section:
```
- `AuthGuard.isTutor()` — accesseur : `tutorAccess === true` sur le profil chargé (tutorat privé, indépendant du champ `role`)
```

Add a new section (after the `js/views/gradingPanel.js` section):
```
## js/tutoring/tutoringService.js
Firestore CRUD pour le suivi de cours particuliers (tutorat privé, réservé aux comptes `tutorAccess: true`).
- `getStudents()` / `getStudent(id)` — liste (non archivés) / détail d'un élève
- `createStudent(data)` / `updateStudent(id, patch)` / `archiveStudent(id)` — CRUD élève (soft delete via `archived`)
- `getStudentSessions(studentId)` / `createSession(studentId, data)` — historique et création de séance (`status: 'draft'`)
- `rateSession(sessionId, rating, remarks)` — note une séance 1-10 + remarques, passe en `status: 'rated'`

## js/views/tutoring/tutoringHome.js
Liste des élèves de cours particuliers (route `/tutorat`), réservée aux comptes tutor.
- `TutoringHome.render()` — charge et affiche la grille des élèves
- `TutoringHome._renderList(filter)` — recherche client-side par nom
- `TutoringHome._showAddForm()` / `_submitAddForm(e)` — formulaire de création d'élève

## js/views/tutoring/tutoringStudent.js
Fiche élève (route `/tutorat/:studentId`) : notes générales, historique des séances, notation.
- `TutoringStudent.render(studentId)` — charge élève + séances en parallèle
- `TutoringStudent._saveNotes()` / `_archive()` — édition notes générales / soft delete élève
- `TutoringStudent._showSessionForm()` / `_submitSessionForm(e)` — création d'une séance (`status: 'draft'`)
- `TutoringStudent._showRatingForm(sessionId)` / `_submitRating(e, sessionId)` — notation d'une séance (1-10 + remarques)
```

- [ ] **Step 2: Update `contenu.md`**

Add a new section (after `## Composants d'Interface (js/components/)`):
```
## Tutorat privé (réservé à 2 comptes, js/tutoring/ + js/views/tutoring/)
| Fichier | Rôle |
|---------|------|
| js/tutoring/tutoringService.js | CRUD Firestore élèves/séances de cours particuliers |
| js/views/tutoring/tutoringHome.js | Liste des élèves (route /tutorat) |
| js/views/tutoring/tutoringStudent.js | Fiche élève : notes, historique séances, notation |
```

- [ ] **Step 3: Bump the cache-busting version**

In `index.html`, replace every occurrence of `?v=19` with `?v=20` (this covers all local `<script>`/`<link>` tags, including the three added in Tasks 3-4).

Run: a project-wide search for `?v=19` in `index.html` to confirm zero remain, e.g. `grep -c "v=19" index.html` → expected `0`.

- [ ] **Step 4: Final manual smoke test**

1. Hard-refresh the site (bypass cache) signed in as the tutor account.
2. Confirm the "Tutorat" nav still works, the full loop (add student → add session → rate session → archive student) still behaves as verified in Tasks 4-6.
3. Confirm no console errors on any of the existing views (home, a module, teacher dashboard if applicable) — the version bump touches every script tag, so a typo here would break the entire site, not just tutoring.

- [ ] **Step 5: Commit**

```bash
git add CODEBASE_MAP.md contenu.md index.html
git commit -m "docs: documente le tutorat privé et bump le cache-busting (v20)"
```

---

## Self-Review Notes

- **Spec coverage:** §2 access control → Task 1-2. §3 data model → Task 3. §4 views/nav → Task 4. Session creation (§4) → Task 5. Rating (§4, user-added requirement) → Task 6. §5 error handling (empty state, soft delete, non-blocking rating) → covered across Tasks 4-6. §6 validation → manual steps in every task. Documentation mandate (`CLAUDE.md`, `dev-guidelines.md`) → Task 7.
- **Type consistency checked:** `TutoringService` methods (`getStudents`, `getStudent`, `createStudent`, `updateStudent`, `archiveStudent`, `getStudentSessions`, `createSession`, `rateSession`) are named identically everywhere they're called across Tasks 4-6. `state.tutoringStudentId` name matches between Task 2, `js/app.js` routing (Task 4), and is never renamed later.
- **No placeholders:** every step has complete, runnable code — no "add validation" or "similar to Task N" shortcuts.
