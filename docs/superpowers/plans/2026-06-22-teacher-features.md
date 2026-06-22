# Teacher Features — Dashboard, GradingPanel, Assignments Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Étendre l'espace enseignant avec un mini-dashboard de classe, une progression lisible pour chaque élève, la gestion des devoirs, la suppression d'élèves, et un panneau de notation/export Pronote CSV.

**Architecture:** TeacherDashboard est étendu pour charger progressions + devoirs lors de l'ouverture d'une classe, puis passe `progressMap` et `students` au nouveau GradingPanel sans double requête. Les devoirs utilisent une nouvelle collection Firestore `assignments`. L'encart "Devoir en cours" est injecté dans la page d'accueil élève après un chargement async.

**Tech Stack:** Vanilla JS (pas d'import/export), Firebase Firestore compat SDK 10.12.2, CSS via variables `var(--*)`.

## Global Constraints

- Pas d'`export`/`import` ES6 dans aucun fichier JS du projet
- Pas de npm/build/bundler — les scripts sont déclarés dans `index.html` via `<script src="...">` dans l'ordre exact
- CSS uniquement via variables : `var(--primary)`, `var(--secondary)`, `var(--accent)`, `var(--border)`, `var(--bg-card)`, `var(--text-muted)`
- Préfixe `.td-` pour les classes TeacherDashboard, `.gp-` pour GradingPanel
- `_esc(str)` obligatoire sur toutes les données utilisateur dans `innerHTML`
- Pas d'`orderBy` Firestore sans index composite confirmé — trier côté client
- `getModule(id)` → cherche dans `window.MODULES`, retourne `undefined` si non trouvé

---

## File Map

| Fichier | Action | Contenu ajouté |
|---|---|---|
| `js/auth/authService.js` | Modify | 4 nouvelles méthodes : `removeStudentFromClass`, `createAssignment`, `getClassAssignments`, `deleteAssignment` |
| `firestore.rules` | Modify | Règle collection `assignments` |
| `index.html` | Modify | `<script src="js/views/gradingPanel.js">` avant `adminPanel.js` |
| `css/styles.css` | Modify | 9 nouvelles classes CSS : `.td-stats-bar`, `.td-assignment-section`, `.td-assignment-form`, `.td-assignment-card`, `.gp-container`, `.gp-table`, `.gp-pronote-section`, `.gp-grade-table`, `.gp-grade-input`, `.gp-export-btn` |
| `js/views/teacherDashboard.js` | Modify | Refactor `_viewClass` (load progress), `_renderClassDetail` (stats + devoirs + retirer), `_renderStudentProgress` (titres + détail), `_removeStudent`, `_openGrading`, `_addAssignment`, `_deleteAssignment` |
| `js/views/gradingPanel.js` | Create | Objet global `GradingPanel` : tableau comparatif + export Pronote CSV |
| `js/views/home.js` | Modify | `renderAssignmentWidget()` async + injection dans `renderHome()` |
| `CODEBASE_MAP.md` | Modify | Entrées mises à jour pour les 7 fichiers touchés |

---

## Task 1: AuthService — nouvelles méthodes Firestore

**Files:**
- Modify: `js/auth/authService.js` (après la méthode `getStudentProgress`, ligne ~135)

**Interfaces:**
- Produit :
  - `AuthService.removeStudentFromClass(studentUid: string, classCode: string): Promise<void>`
  - `AuthService.createAssignment(classCode: string, moduleId: string, dueDate: string): Promise<string>` — retourne l'id du document créé
  - `AuthService.getClassAssignments(classCode: string): Promise<Assignment[]>` — `Assignment = { id, classCode, moduleId, dueDate, teacherId, createdAt }`
  - `AuthService.deleteAssignment(assignmentId: string): Promise<void>`

- [ ] **Étape 1 : Ajouter les 4 méthodes après `getStudentProgress`**

Ouvrir `js/auth/authService.js`, localiser la ligne `async getStudentProgress(uid)` (~ligne 131). Insérer le bloc suivant **immédiatement après** la fermeture de cette méthode (après la ligne `}`), avant le commentaire `/* ── Admin ── */` :

```javascript
  async removeStudentFromClass(studentUid, classCode) {
    const batch = this._db.batch();
    batch.update(this._db.collection('users').doc(studentUid), {
      classes: firebase.firestore.FieldValue.arrayRemove(classCode)
    });
    batch.update(this._db.collection('classes').doc(classCode), {
      students: firebase.firestore.FieldValue.arrayRemove(studentUid)
    });
    await batch.commit();
  },

  async createAssignment(classCode, moduleId, dueDate) {
    const ref = await this._db.collection('assignments').add({
      classCode: classCode,
      moduleId: moduleId,
      dueDate: dueDate,
      teacherId: this.getCurrentUser().uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return ref.id;
  },

  async getClassAssignments(classCode) {
    const snap = await this._db.collection('assignments')
      .where('classCode', '==', classCode)
      .get();
    return snap.docs
      .map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .sort(function(a, b) {
        var ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
        var tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
        return tb - ta;
      });
  },

  async deleteAssignment(assignmentId) {
    await this._db.collection('assignments').doc(assignmentId).delete();
  },
```

- [ ] **Étape 2 : Vérification syntaxique**

Ouvrir `js/auth/authService.js` et vérifier :
- Chaque méthode est séparée par une virgule (c'est un objet littéral)
- La méthode `removeStudentFromClass` est bien avant `/* ── Admin ── */`
- Pas de `export` ni d'`import` dans le fichier

- [ ] **Étape 3 : Commit**

```bash
git add js/auth/authService.js
git commit -m "feat: add removeStudentFromClass, createAssignment, getClassAssignments, deleteAssignment to AuthService"
```

---

## Task 2: Firestore Rules — collection assignments

**Files:**
- Modify: `firestore.rules`

**Interfaces:**
- Consomme : fonctions `isSignedIn()`, `isTeacherOrAdmin()`, `isAdmin()` (déjà définies dans le fichier)
- Produit : règle permettant lecture pour tout utilisateur connecté, création/update/delete pour enseignant propriétaire ou admin

- [ ] **Étape 1 : Ajouter la règle assignments**

Ouvrir `firestore.rules`. Avant la fermeture `}` finale (après le bloc `adminLogs`), insérer :

```
    // ─── assignments (devoirs) ───
    match /assignments/{assignmentId} {
      allow read: if isSignedIn();
      allow create: if isTeacherOrAdmin();
      allow update: if isAdmin() || (isTeacherOrAdmin() && resource.data.teacherId == request.auth.uid);
      allow delete: if isAdmin() || (isTeacherOrAdmin() && resource.data.teacherId == request.auth.uid);
    }
```

- [ ] **Étape 2 : Vérifier la structure**

Le fichier doit se terminer par :
```
    // ─── assignments (devoirs) ───
    match /assignments/{assignmentId} {
      ...
    }
  }
}
```
Vérifier que les accolades sont correctement fermées (3 niveaux d'imbrication).

- [ ] **Étape 3 : Déployer les règles** *(si Firebase CLI disponible)*

```bash
firebase deploy --only firestore:rules
```
Sinon, copier le contenu du fichier dans la console Firebase → Firestore → Règles.

- [ ] **Étape 4 : Commit**

```bash
git add firestore.rules
git commit -m "feat: add Firestore security rules for assignments collection"
```

---

## Task 3: index.html — ajouter le script gradingPanel

**Files:**
- Modify: `index.html` (ligne 33, avant `<script src="js/views/adminPanel.js">`)

**Interfaces:**
- Produit : `GradingPanel` disponible comme global avant `AdminPanel` et `app.js`

- [ ] **Étape 1 : Insérer la balise script**

Dans `index.html`, localiser la ligne :
```html
  <script src="js/views/teacherDashboard.js"></script>
  <script src="js/views/adminPanel.js"></script>
```

Modifier pour obtenir :
```html
  <script src="js/views/teacherDashboard.js"></script>
  <script src="js/views/gradingPanel.js"></script>
  <script src="js/views/adminPanel.js"></script>
```

- [ ] **Étape 2 : Commit**

```bash
git add index.html
git commit -m "feat: add gradingPanel.js script to index.html load order"
```

---

## Task 4: CSS — nouvelles classes

**Files:**
- Modify: `css/styles.css` (après les classes `.td-error` existantes, ~ligne 4573)

**Interfaces:**
- Produit : 10 nouvelles classes utilisables dans TeacherDashboard et GradingPanel

- [ ] **Étape 1 : Ajouter les classes TeacherDashboard étendues**

Trouver `.td-error { color: #ef4444; }` (~ligne 4573) dans `css/styles.css`.
Insérer **après** cette ligne :

```css
/* ── TeacherDashboard extensions ── */
.td-stats-bar {
  display: flex;
  gap: var(--space-md);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: var(--space-md) var(--space-lg);
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}
.td-stats-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
}
.td-stats-bar-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
}
.td-stats-bar-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
}
.td-grading-btn {
  background: var(--secondary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: auto;
}
.td-grading-btn:hover { opacity: 0.9; }
.td-remove-btn {
  background: none;
  border: 1px solid #ef4444;
  color: #ef4444;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: var(--space-sm);
}
.td-remove-btn:hover { background: #fef2f2; }
.td-assignment-section {
  margin-top: var(--space-xl);
  border-top: 1px solid var(--border);
  padding-top: var(--space-lg);
}
.td-assignment-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-md);
}
.td-assignment-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-sm);
  flex-wrap: wrap;
}
.td-assignment-card-title { font-weight: 600; flex: 1; }
.td-assignment-card-meta { font-size: 0.82rem; color: var(--text-muted); }
.td-assignment-card-count { font-size: 0.82rem; color: var(--primary); }
.td-delete-btn {
  background: none;
  border: 1px solid #ef4444;
  color: #ef4444;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 0.8rem;
}
.td-delete-btn:hover { background: #fef2f2; }
.td-assignment-form {
  display: flex;
  gap: var(--space-sm);
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: var(--space-md);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-md);
}
.td-assignment-form label {
  display: flex;
  flex-direction: column;
  font-size: 0.82rem;
  color: var(--text-muted);
  gap: 4px;
}
.td-assignment-form select,
.td-assignment-form input[type="date"] {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.9rem;
  background: var(--bg-card);
  color: inherit;
}
.td-assign-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
}
.td-assign-btn:hover { opacity: 0.9; }
.td-module-detail {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 2px;
}

/* ── GradingPanel ── */
.gp-container {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-lg);
}
.gp-table-wrap {
  overflow-x: auto;
  margin-bottom: var(--space-xl);
}
.gp-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.gp-table th {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 6px 10px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
}
.gp-table td {
  border: 1px solid var(--border);
  padding: 6px 10px;
  text-align: center;
}
.gp-table tr:nth-child(even) td { background: var(--bg-card); }
.gp-pronote-section {
  border-top: 1px solid var(--border);
  padding-top: var(--space-lg);
}
.gp-pronote-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-md);
}
.gp-grade-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  margin-top: var(--space-md);
}
.gp-grade-table th {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 8px 12px;
  text-align: left;
}
.gp-grade-table td {
  border: 1px solid var(--border);
  padding: 6px 10px;
}
.gp-grade-input {
  width: 70px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 0.9rem;
  background: var(--bg-card);
  color: inherit;
}
.gp-appreciation-input {
  width: 200px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 0.85rem;
  background: var(--bg-card);
  color: inherit;
}
.gp-export-btn {
  display: inline-block;
  margin-top: var(--space-md);
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
}
.gp-export-btn:hover { opacity: 0.9; }
.gp-module-select {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.9rem;
  background: var(--bg-card);
  color: inherit;
  margin-bottom: var(--space-md);
}

/* ── Encart devoir élève (home) ── */
.hw-assignment-widget {
  background: var(--bg-card);
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: var(--space-md) var(--space-lg);
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  cursor: pointer;
}
.hw-assignment-icon { font-size: 1.6rem; }
.hw-assignment-title { font-weight: 700; font-size: 1rem; }
.hw-assignment-meta { font-size: 0.82rem; color: var(--text-muted); margin-top: 2px; }
```

- [ ] **Étape 2 : Commit**

```bash
git add css/styles.css
git commit -m "feat: add td- and gp- CSS classes for teacher dashboard extensions and GradingPanel"
```

---

## Task 5: teacherDashboard.js — refactoring complet

**Files:**
- Modify: `js/views/teacherDashboard.js`

**Interfaces:**
- Consomme :
  - `AuthService.getUserProfile(uid)` → `{ uid, displayName, ... }`
  - `AuthService.getStudentProgress(uid)` → `{ progress: {moduleId: {completed, score, quiz, exercice, evaluation}}, tracking: {lastActive}, streak: {lastDate, current} }`
  - `AuthService.removeStudentFromClass(studentUid, classCode)` → `Promise<void>`
  - `AuthService.getClassAssignments(classCode)` → `Assignment[]`
  - `AuthService.createAssignment(classCode, moduleId, dueDate)` → `Promise<string>`
  - `AuthService.deleteAssignment(assignmentId)` → `Promise<void>`
  - `getModule(id)` → `{ id, title, ... } | undefined`
  - `window.MODULES` → tableau global de modules
  - `GradingPanel.render({ cls, students, progressMap })` → void
- Produit :
  - `TeacherDashboard._viewClass(classIndex)` — charge profils ET progressions
  - `TeacherDashboard._renderClassDetail(cls, students, progressMap)` — vue classe complète
  - `TeacherDashboard._renderStudentProgress(uid, classId, profile, progress)` — progression lisible
  - `TeacherDashboard._removeStudent(uid, classCode, classIndex)` — suppression élève
  - `TeacherDashboard._openGrading(classIndex)` — ouvre GradingPanel
  - `TeacherDashboard._addAssignment(classIndex)` — crée un devoir
  - `TeacherDashboard._deleteAssignment(assignmentId, classIndex)` — supprime un devoir

**Note:** `_viewClass` est la fonction centrale qui fait le chargement. Elle doit maintenant charger profils + progressions en parallèle, puis passer `progressMap` à `_renderClassDetail`.

- [ ] **Étape 1 : Réécrire `_viewClass` pour charger profils + progressions en parallèle**

Remplacer la méthode `_viewClass` existante (lignes 66-83) par :

```javascript
  _viewClass: async function(classIndex) {
    var cls = TeacherDashboard._classes[parseInt(classIndex)];
    if (!cls) return;
    var app = document.getElementById('app');
    app.innerHTML = '<div class="td-loading">Chargement des élèves...</div>';
    try {
      var students = [];
      var progressMap = {};
      if (cls.students && cls.students.length > 0) {
        var profilePromises = cls.students.map(function(uid) {
          return AuthService.getUserProfile(uid);
        });
        var progressPromises = cls.students.map(function(uid) {
          return AuthService.getStudentProgress(uid);
        });
        var profiles = await Promise.all(profilePromises);
        var progresses = await Promise.all(progressPromises);
        for (var i = 0; i < cls.students.length; i++) {
          var uid = cls.students[i];
          if (profiles[i]) students.push({ uid: uid, profile: profiles[i] });
          progressMap[uid] = progresses[i];
        }
      }
      TeacherDashboard._renderClassDetail(cls, students, progressMap);
    } catch (e) {
      app.innerHTML = '<div class="td-error">Erreur de chargement.</div>';
    }
  },
```

- [ ] **Étape 2 : Réécrire `_renderClassDetail` avec stats, devoirs, bouton grading et retirer**

Remplacer la méthode `_renderClassDetail` existante (lignes 85-104) par :

```javascript
  _renderClassDetail: async function(cls, students, progressMap) {
    // ── Calcul stats ──
    var sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    var totalCompleted = 0;
    var totalModuleSlots = 0;
    var inactiveCount = 0;
    students.forEach(function(s) {
      var prog = progressMap[s.uid];
      var progData = (prog && prog.progress) ? prog.progress : {};
      var keys = Object.keys(progData);
      keys.forEach(function(k) {
        totalModuleSlots++;
        if (progData[k] && progData[k].completed) totalCompleted++;
      });
      var lastActive = null;
      if (prog && prog.tracking && prog.tracking.lastActive) {
        lastActive = prog.tracking.lastActive.toMillis
          ? prog.tracking.lastActive.toMillis()
          : Number(prog.tracking.lastActive);
      } else if (prog && prog.streak && prog.streak.lastDate) {
        lastActive = new Date(prog.streak.lastDate).getTime();
      }
      if (!lastActive || lastActive < sevenDaysAgo) inactiveCount++;
    });
    var avgCompletion = totalModuleSlots > 0
      ? Math.round((totalCompleted / totalModuleSlots) * 100)
      : 0;

    var classIndex = TeacherDashboard._classes.findIndex(function(c) { return c.id === cls.id; });

    // ── Stats bar ──
    var statsBar = '<div class="td-stats-bar">' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + students.length + '</span>' +
        '<span class="td-stats-bar-label">élèves</span>' +
      '</div>' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + avgCompletion + '%</span>' +
        '<span class="td-stats-bar-label">complétion moyenne</span>' +
      '</div>' +
      '<div class="td-stats-bar-item">' +
        '<span class="td-stats-bar-value">' + inactiveCount + '</span>' +
        '<span class="td-stats-bar-label">inactifs +7j</span>' +
      '</div>' +
    '</div>';

    // ── Liste élèves ──
    var studentsHtml = students.length === 0
      ? '<p class="td-empty">Aucun élève dans cette classe.</p>'
      : students.map(function(s) {
          var safeUid = TeacherDashboard._esc(s.uid);
          var safeCode = TeacherDashboard._esc(cls.id);
          return '<div class="td-student-row">' +
            '<span class="td-student-name">' + TeacherDashboard._esc(s.profile.displayName || 'Élève') + '</span>' +
            '<button class="td-view-btn" onclick="TeacherDashboard._viewStudent(\'' + safeUid + '\', \'' + safeCode + '\')">Voir progression →</button>' +
            '<button class="td-remove-btn" onclick="TeacherDashboard._removeStudent(\'' + safeUid + '\', \'' + safeCode + '\', ' + classIndex + ')">Retirer</button>' +
          '</div>';
        }).join('');

    // ── Devoirs ──
    var assignments = [];
    try {
      assignments = await AuthService.getClassAssignments(cls.id);
    } catch(e) { assignments = []; }

    var assignmentsHtml = assignments.length === 0
      ? '<p class="td-empty" style="font-size:0.85rem;">Aucun devoir assigné.</p>'
      : assignments.map(function(a) {
          var mod = getModule(a.moduleId);
          var title = mod ? TeacherDashboard._esc(mod.title) : TeacherDashboard._esc(a.moduleId);
          var due = a.dueDate ? new Date(a.dueDate).toLocaleDateString('fr-FR') : '—';
          var completedCount = students.filter(function(s) {
            var prog = progressMap[s.uid];
            var progData = prog && prog.progress ? prog.progress : {};
            return progData[a.moduleId] && progData[a.moduleId].completed;
          }).length;
          var safeId = TeacherDashboard._esc(a.id);
          return '<div class="td-assignment-card">' +
            '<span class="td-assignment-card-title">' + title + '</span>' +
            '<span class="td-assignment-card-meta">Avant le ' + due + '</span>' +
            '<span class="td-assignment-card-count">✅ ' + completedCount + '/' + students.length + '</span>' +
            '<button class="td-delete-btn" onclick="TeacherDashboard._deleteAssignment(\'' + safeId + '\', ' + classIndex + ')">🗑</button>' +
          '</div>';
        }).join('');

    // ── Formulaire devoir ──
    var moduleOptions = (window.MODULES || []).map(function(m) {
      return '<option value="' + TeacherDashboard._esc(m.id) + '">' + TeacherDashboard._esc(m.title) + '</option>';
    }).join('');
    var assignForm = '<div class="td-assignment-form">' +
      '<label>Module' +
        '<select id="td-assign-module">' + moduleOptions + '</select>' +
      '</label>' +
      '<label>Date limite' +
        '<input type="date" id="td-assign-date" />' +
      '</label>' +
      '<button class="td-assign-btn" onclick="TeacherDashboard._addAssignment(' + classIndex + ')">Assigner</button>' +
    '</div>';

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard.render(TeacherDashboard._backCode)">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(cls.name) + '</h1>' +
          '<span class="td-class-code">Code : ' + TeacherDashboard._esc(cls.id) + '</span>' +
          '<button class="td-grading-btn" onclick="TeacherDashboard._openGrading(' + classIndex + ')">📊 Notes & Pronote</button>' +
        '</div>' +
        statsBar +
        '<div class="td-students">' + studentsHtml + '</div>' +
        '<div class="td-assignment-section">' +
          '<h3>📋 Devoirs</h3>' +
          assignmentsHtml +
          assignForm +
        '</div>' +
      '</div>';

    // Stocker dans l'objet pour que GradingPanel puisse y accéder
    TeacherDashboard._currentStudents = students;
    TeacherDashboard._currentProgressMap = progressMap;
  },
```

- [ ] **Étape 3 : Réécrire `_renderStudentProgress` avec titres lisibles et détail**

Remplacer la méthode `_renderStudentProgress` existante (lignes 118-149) par :

```javascript
  _renderStudentProgress: function(studentUid, classId, profile, progress) {
    var name = profile ? profile.displayName || 'Élève' : 'Élève';
    var prog = (progress && progress.progress) ? progress.progress : {};
    var streak = (progress && progress.streak) ? progress.streak : {};

    var modules = Object.keys(prog).map(function(key) {
      var m = prog[key];
      var completed = m && m.completed ? 1 : 0;
      var hasQuiz = m && m.quiz != null;
      var hasExo = m && m.exercice != null;
      var hasEval = m && m.evaluation != null;
      return { key: key, data: m, completed: completed, hasQuiz: hasQuiz, hasExo: hasExo, hasEval: hasEval };
    });
    // Trier par complétion décroissante
    modules.sort(function(a, b) {
      if (b.completed !== a.completed) return b.completed - a.completed;
      return 0;
    });

    var modulesHtml = modules.length === 0
      ? '<p class="td-empty">Aucun module commencé.</p>'
      : modules.map(function(item) {
          var m = item.data;
          var score = m && m.score != null ? m.score + '%' : (m && m.evaluationScore != null ? m.evaluationScore + '%' : '—');
          var done = item.completed ? '✅' : '⏳';
          var modTitle = (getModule(item.key) && getModule(item.key).title) ? getModule(item.key).title : item.key;
          var quizIcon = item.hasQuiz ? '✅' : '—';
          var exoIcon = item.hasExo ? '✅' : '—';
          var evalIcon = item.hasEval ? '✅' : '—';
          return '<div class="td-module-row">' +
            '<div>' +
              '<span class="td-module-name">' + done + ' ' + TeacherDashboard._esc(modTitle) + '</span>' +
              '<div class="td-module-detail">Quiz ' + quizIcon + ' · Exercice ' + exoIcon + ' · Évaluation ' + evalIcon + '</div>' +
            '</div>' +
            '<span class="td-module-score">' + score + '</span>' +
          '</div>';
        }).join('');

    var streakVal = (streak && streak.current) ? streak.current : 0;
    var classIndex = TeacherDashboard._classes.findIndex(function(c) { return c.id === classId; });

    document.getElementById('app').innerHTML =
      '<div class="td-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + (classIndex >= 0 ? classIndex : 0) + ')">← Retour</button>' +
          '<h1 class="td-title">' + TeacherDashboard._esc(name) + '</h1>' +
          '<span class="td-streak">🔥 Série : ' + streakVal + ' jours</span>' +
        '</div>' +
        '<div class="td-modules">' + modulesHtml + '</div>' +
      '</div>';
  },
```

- [ ] **Étape 4 : Ajouter les méthodes `_removeStudent`, `_openGrading`, `_addAssignment`, `_deleteAssignment`**

Après la méthode `_renderStudentProgress` et avant le `};` de fermeture de l'objet, ajouter :

```javascript
  _removeStudent: async function(studentUid, classCode, classIndex) {
    if (!confirm('Retirer cet élève de la classe ?')) return;
    try {
      await AuthService.removeStudentFromClass(studentUid, classCode);
      showToast('Élève retiré de la classe.', 'success');
      // Mettre à jour la liste locale
      var cls = TeacherDashboard._classes[classIndex];
      if (cls && cls.students) {
        cls.students = cls.students.filter(function(uid) { return uid !== studentUid; });
      }
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de la suppression.', 'error');
    }
  },

  _openGrading: function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    GradingPanel.render({
      cls: cls,
      students: TeacherDashboard._currentStudents || [],
      progressMap: TeacherDashboard._currentProgressMap || {},
      backIndex: classIndex
    });
  },

  _addAssignment: async function(classIndex) {
    var cls = TeacherDashboard._classes[classIndex];
    if (!cls) return;
    var moduleId = document.getElementById('td-assign-module').value;
    var dueDate = document.getElementById('td-assign-date').value;
    if (!moduleId || !dueDate) {
      showToast('Sélectionne un module et une date limite.', 'error');
      return;
    }
    try {
      await AuthService.createAssignment(cls.id, moduleId, dueDate);
      showToast('Devoir assigné !', 'success');
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de l\'assignation.', 'error');
    }
  },

  _deleteAssignment: async function(assignmentId, classIndex) {
    if (!confirm('Supprimer ce devoir ?')) return;
    try {
      await AuthService.deleteAssignment(assignmentId);
      showToast('Devoir supprimé.', 'success');
      TeacherDashboard._viewClass(classIndex);
    } catch (e) {
      showToast('Erreur lors de la suppression.', 'error');
    }
  },

  _currentStudents: [],
  _currentProgressMap: {}
```

**Note:** Ajouter une virgule après `_renderStudentProgress` si ce n'est pas la dernière propriété, et s'assurer que `_currentStudents` et `_currentProgressMap` sont les dernières propriétés avant `};`.

- [ ] **Étape 5 : Vérifier l'intégrité de l'objet TeacherDashboard**

L'objet doit avoir cette structure :
```javascript
var TeacherDashboard = {
  _classes: [],
  _backCode: null,
  _currentStudents: [],
  _currentProgressMap: {},
  _esc: function(str) { ... },
  render: async function(backCode) { ... },
  _renderDashboard: function() { ... },
  _createClass: async function() { ... },
  _viewClass: async function(classIndex) { ... },
  _renderClassDetail: async function(cls, students, progressMap) { ... },
  _viewStudent: async function(studentUid, classId) { ... },
  _renderStudentProgress: function(studentUid, classId, profile, progress) { ... },
  _removeStudent: async function(studentUid, classCode, classIndex) { ... },
  _openGrading: function(classIndex) { ... },
  _addAssignment: async function(classIndex) { ... },
  _deleteAssignment: async function(assignmentId, classIndex) { ... }
};
```
Vérifier que chaque méthode est séparée par une virgule sauf la dernière.

- [ ] **Étape 6 : Commit**

```bash
git add js/views/teacherDashboard.js
git commit -m "feat: teacher dashboard — class stats, readable progress, remove student, assignments, grading button"
```

---

## Task 6: gradingPanel.js — nouveau fichier

**Files:**
- Create: `js/views/gradingPanel.js`

**Interfaces:**
- Consomme :
  - `{ cls, students, progressMap, backIndex }` passé via `GradingPanel.render(...)`
  - `cls` : `{ id: string, name: string, students: string[] }`
  - `students` : `Array<{ uid: string, profile: { displayName: string } }>`
  - `progressMap` : `{ [uid: string]: { progress: { [moduleId: string]: { completed: bool, score: number, evaluationScore: number, quiz: any, exercice: any, evaluation: any } } } }`
  - `getModule(id)` → `{ id, title, evaluation?: any } | undefined`
  - `window.MODULES` → tableau global
  - `TeacherDashboard._viewClass(backIndex)` → retour vers la classe
- Produit :
  - `GradingPanel.render({ cls, students, progressMap, backIndex })` — point d'entrée public

- [ ] **Étape 1 : Créer le fichier `js/views/gradingPanel.js`**

```javascript
var GradingPanel = {
  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  render: function(opts) {
    var cls = opts.cls;
    var students = opts.students || [];
    var progressMap = opts.progressMap || {};
    var backIndex = opts.backIndex != null ? opts.backIndex : 0;

    // ── Collecter tous les moduleIds travaillés par au moins un élève ──
    var moduleIdSet = {};
    students.forEach(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      Object.keys(progData).forEach(function(k) { moduleIdSet[k] = true; });
    });
    var moduleIds = Object.keys(moduleIdSet);

    // ── Tableau comparatif ──
    var theadCols = '<th>Élève</th>' + moduleIds.map(function(id) {
      var mod = getModule(id);
      var title = mod ? GradingPanel._esc(mod.title) : GradingPanel._esc(id);
      return '<th>' + title + '</th>';
    }).join('');

    var tbodyRows = students.map(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      var cells = moduleIds.map(function(id) {
        var m = progData[id];
        if (!m) return '<td>—</td>';
        if (m.completed) return '<td>✅</td>';
        var score = m.evaluationScore != null ? m.evaluationScore : (m.score != null ? m.score : null);
        if (score != null) return '<td>' + score + '%</td>';
        return '<td>⏳</td>';
      }).join('');
      return '<tr><td>' + GradingPanel._esc(s.profile.displayName || 'Élève') + '</td>' + cells + '</tr>';
    }).join('');

    var compTable = '<div class="gp-table-wrap">' +
      '<table class="gp-table"><thead><tr>' + theadCols + '</tr></thead>' +
      '<tbody>' + tbodyRows + '</tbody></table>' +
    '</div>';

    // ── Sélecteur module pour Pronote (uniquement modules avec évaluation) ──
    var evalModules = moduleIds.filter(function(id) {
      var mod = getModule(id);
      return mod && mod.evaluation;
    });
    var moduleSelectOpts = evalModules.map(function(id) {
      var mod = getModule(id);
      return '<option value="' + GradingPanel._esc(id) + '">' + GradingPanel._esc(mod ? mod.title : id) + '</option>';
    }).join('');
    var pronoteSelect = evalModules.length > 0
      ? '<select class="gp-module-select" id="gp-module-select" onchange="GradingPanel._renderGradeTable()">' +
          moduleSelectOpts +
        '</select>'
      : '<p class="td-empty">Aucun module avec évaluation disponible.</p>';

    document.getElementById('app').innerHTML =
      '<div class="gp-container">' +
        '<div class="td-header">' +
          '<button class="td-back-btn" onclick="TeacherDashboard._viewClass(' + backIndex + ')">← Retour</button>' +
          '<h1 class="td-title">📊 ' + GradingPanel._esc(cls.name) + '</h1>' +
        '</div>' +
        '<h2 style="font-size:1rem;margin-bottom:var(--space-md);">Comparaison élèves</h2>' +
        compTable +
        '<div class="gp-pronote-section">' +
          '<h3>⬇️ Export Pronote CSV</h3>' +
          '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-md);">Sélectionne un module d\'évaluation :</p>' +
          pronoteSelect +
          '<div id="gp-grade-table-wrap"></div>' +
          (evalModules.length > 0 ? '<button class="gp-export-btn" onclick="GradingPanel._exportCSV()">⬇️ Télécharger CSV Pronote</button>' : '') +
        '</div>' +
      '</div>';

    // Stocker le contexte pour les callbacks
    GradingPanel._students = students;
    GradingPanel._progressMap = progressMap;
    GradingPanel._evalModules = evalModules;

    if (evalModules.length > 0) GradingPanel._renderGradeTable();
  },

  _students: [],
  _progressMap: {},
  _evalModules: [],

  _renderGradeTable: function() {
    var sel = document.getElementById('gp-module-select');
    if (!sel) return;
    var moduleId = sel.value;
    var students = GradingPanel._students;
    var progressMap = GradingPanel._progressMap;

    var rows = students.map(function(s) {
      var prog = progressMap[s.uid];
      var progData = prog && prog.progress ? prog.progress : {};
      var m = progData[moduleId];
      var rawScore = m && m.evaluationScore != null ? m.evaluationScore : (m && m.score != null ? m.score : '');
      // Convertir score % en note /20
      var note20 = rawScore !== '' ? Math.round(rawScore / 100 * 20 * 2) / 2 : '';
      var safeUid = GradingPanel._esc(s.uid);
      return '<tr>' +
        '<td>' + GradingPanel._esc(s.profile.displayName || 'Élève') + '</td>' +
        '<td><input class="gp-grade-input" type="number" min="0" max="20" step="0.5" value="' + note20 + '" id="gp-note-' + safeUid + '" /></td>' +
        '<td><input class="gp-appreciation-input" type="text" placeholder="Appréciation..." id="gp-app-' + safeUid + '" /></td>' +
      '</tr>';
    }).join('');

    var wrap = document.getElementById('gp-grade-table-wrap');
    if (!wrap) return;
    wrap.innerHTML = '<table class="gp-grade-table">' +
      '<thead><tr><th>Nom</th><th>Note /20</th><th>Appréciation</th></tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
    '</table>';
  },

  _exportCSV: function() {
    var students = GradingPanel._students;
    var lines = ['Nom;Note;Appreciation'];
    students.forEach(function(s) {
      var safeUid = s.uid.replace(/[^a-zA-Z0-9_-]/g, '');
      var noteEl = document.getElementById('gp-note-' + safeUid);
      var appEl = document.getElementById('gp-app-' + safeUid);
      var note = noteEl ? noteEl.value : '';
      var app = appEl ? appEl.value.replace(/;/g, ',') : '';
      var name = (s.profile.displayName || 'Élève').replace(/;/g, ',');
      lines.push(name + ';' + note + ';' + app);
    });
    var csvContent = lines.join('\n');
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'export-pronote.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
```

- [ ] **Étape 2 : Vérifier les contraintes**

- Pas d'`export`/`import` dans le fichier
- `_esc()` utilisé sur toutes les données `displayName`, `cls.name`, `mod.title`
- `URL.createObjectURL` + `revokeObjectURL` correct pour le CSV
- `gp-note-${uid}` utilise `.replace(/[^a-zA-Z0-9_-]/g, '')` pour éviter les IDs invalides

- [ ] **Étape 3 : Commit**

```bash
git add js/views/gradingPanel.js
git commit -m "feat: add GradingPanel with class comparison table and Pronote CSV export"
```

---

## Task 7: home.js — encart devoir en cours pour l'élève

**Files:**
- Modify: `js/views/home.js`

**Interfaces:**
- Consomme :
  - `state.user?.classes?.[0]` → classCode de l'élève
  - `AuthService.getClassAssignments(classCode)` → `Assignment[]`
  - `getModule(id)` → `{ title, ... } | undefined`
  - `navigate('module', {moduleId})` → navigation vers un module
- Produit :
  - `renderAssignmentWidget()` — fonction async qui injecte un encart dans `#home-assignment-widget`
  - `renderHome()` — modifiée pour inclure un `<div id="home-assignment-widget"></div>` dans la section hero

- [ ] **Étape 1 : Ajouter la fonction `renderAssignmentWidget`**

Localiser la fonction `renderHome()` au début du fichier home.js (~ligne 170). **Avant** cette fonction, ajouter :

```javascript
async function renderAssignmentWidget() {
  var widgetEl = document.getElementById('home-assignment-widget');
  if (!widgetEl) return;
  var classCode = state.user && state.user.classes && state.user.classes[0];
  if (!classCode) return;
  try {
    var assignments = await AuthService.getClassAssignments(classCode);
    if (!assignments || assignments.length === 0) return;
    var a = assignments[0]; // Le plus récent
    var mod = getModule(a.moduleId);
    var title = mod ? mod.title : a.moduleId;
    var due = a.dueDate ? new Date(a.dueDate).toLocaleDateString('fr-FR') : '—';
    widgetEl.innerHTML = '<div class="hw-assignment-widget" onclick="navigate(\'module\', {moduleId: \'' + a.moduleId + '\'})" tabindex="0" role="button" aria-label="Aller au devoir">' +
      '<div class="hw-assignment-icon">📋</div>' +
      '<div>' +
        '<div class="hw-assignment-title">Devoir en cours : ' + String(title).replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</div>' +
        '<div class="hw-assignment-meta">À rendre avant le ' + due + '</div>' +
      '</div>' +
    '</div>';
  } catch(e) { /* silencieux si pas de classe ou pas connecté */ }
}
```

- [ ] **Étape 2 : Modifier `renderHome()` pour inclure le placeholder widget**

Dans `renderHome()`, localiser la section après `${renderContinueSection()}` (la section vide avec `style="background: var(--bg-card)..."`). Ajouter un `<div id="home-assignment-widget"></div>` **juste avant** `${renderContinueSection()}` dans le template retourné. Chercher dans `renderHome()` :

```javascript
    ${renderContinueSection()}
```

Et ajouter avant :
```javascript
    <div id="home-assignment-widget" style="padding: 0 var(--space-lg);"></div>
    ${renderContinueSection()}
```

- [ ] **Étape 3 : Appeler `renderAssignmentWidget()` après le rendu de la home**

Dans `js/app.js`, localiser l'endroit où la vue `home` est rendue (recherche de `renderHome()` ou de l'appel `app.innerHTML = renderHome()`). Après cet appel, ajouter :

```javascript
if (typeof renderAssignmentWidget === 'function') renderAssignmentWidget();
```

**Si app.js n'est pas modifiable directement** (cas de routeur hash), localiser plutôt dans `home.js` la logique de rendu et appeler `renderAssignmentWidget()` à la fin.

> **Note:** Vérifier dans `js/app.js` comment la view `home` est montée pour trouver le bon endroit.

- [ ] **Étape 4 : Commit**

```bash
git add js/views/home.js js/app.js
git commit -m "feat: add student assignment widget on home page"
```

---

## Task 8: CODEBASE_MAP.md — mise à jour

**Files:**
- Modify: `CODEBASE_MAP.md`

- [ ] **Étape 1 : Mettre à jour les entrées des fichiers modifiés**

Dans `CODEBASE_MAP.md`, mettre à jour (ou créer) les entrées suivantes :

**Section `js/auth/authService.js`** — ajouter les 4 nouvelles méthodes :
```
- `removeStudentFromClass(studentUid, classCode)` — retire un élève d'une classe (batch update users + classes)
- `createAssignment(classCode, moduleId, dueDate)` — crée un devoir dans la collection assignments
- `getClassAssignments(classCode)` — récupère les devoirs d'une classe, triés par date côté client
- `deleteAssignment(assignmentId)` — supprime un devoir
```

**Section `js/views/teacherDashboard.js`** — remplacer par :
```
## js/views/teacherDashboard.js
Tableau de bord enseignant : classes, élèves, progression, devoirs, grading.
- `TeacherDashboard.render(backCode)` — charge les classes de l'enseignant
- `TeacherDashboard._viewClass(classIndex)` — charge profils + progressions en parallèle
- `TeacherDashboard._renderClassDetail(cls, students, progressMap)` — vue classe : stats, liste, devoirs
- `TeacherDashboard._renderStudentProgress(uid, classId, profile, progress)` — progression lisible par titre de module
- `TeacherDashboard._removeStudent(uid, classCode, classIndex)` — retire un élève
- `TeacherDashboard._openGrading(classIndex)` — ouvre GradingPanel avec les données déjà chargées
- `TeacherDashboard._addAssignment(classIndex)` — crée un devoir pour la classe
- `TeacherDashboard._deleteAssignment(assignmentId, classIndex)` — supprime un devoir
```

**Nouvelle section `js/views/gradingPanel.js`** :
```
## js/views/gradingPanel.js
Panneau de notation enseignant : tableau comparatif élèves × modules + export Pronote CSV.
- `GradingPanel.render({ cls, students, progressMap, backIndex })` — point d'entrée, reçoit les données de TeacherDashboard (pas de double requête Firestore)
- `GradingPanel._renderGradeTable()` — tableau de saisie /20 + appréciation pour le module sélectionné
- `GradingPanel._exportCSV()` — génère et télécharge le CSV via Blob + URL.createObjectURL
```

**Section `js/views/home.js`** — ajouter :
```
- `renderAssignmentWidget()` — async, injecte l'encart "Devoir en cours" pour l'élève connecté à une classe
```

- [ ] **Étape 2 : Commit**

```bash
git add CODEBASE_MAP.md
git commit -m "docs: update CODEBASE_MAP with new teacher features, GradingPanel, and assignment widget"
```

---

## Self-Review

### 1. Couverture spec

| Spec item | Task |
|---|---|
| Feature 1 — Mini-dashboard stats (completion + inactifs) | Task 5 étape 2 |
| Feature 2 — Progression lisible (titre, quiz/exo/eval, tri) | Task 5 étape 3 |
| Feature 5 — Retirer élève (bouton + AuthService) | Task 1 + Task 5 étape 2 + 4 |
| Feature 4 — Devoirs (liste + formulaire + comptage) | Task 1 + Task 5 étape 2 + 4 |
| GradingPanel — tableau comparatif | Task 6 |
| GradingPanel — export Pronote CSV | Task 6 |
| firestore.rules assignments | Task 2 |
| index.html script order | Task 3 |
| CSS classes (.td- et .gp-) | Task 4 |
| Encart devoir élève (home) | Task 7 |
| CODEBASE_MAP.md | Task 8 |

Couverture : **100%**

### 2. Contraintes vérifiées

- ✅ Pas d'`export`/`import` dans aucun fichier
- ✅ `_esc()` utilisé sur toutes les données utilisateur dans `innerHTML`
- ✅ Pas d'`orderBy` Firestore — tri côté client dans `getClassAssignments`
- ✅ `GradingPanel` reçoit `progressMap` de `TeacherDashboard` — pas de double requête
- ✅ CSS via `var(--)` uniquement, préfixes `.td-` et `.gp-` respectés
- ✅ Ordre scripts dans `index.html` : `gradingPanel.js` avant `adminPanel.js`

### 3. Cohérence des interfaces

- `_viewClass(classIndex: number)` → appelle `_renderClassDetail(cls, students, progressMap)` ✅
- `_renderClassDetail` est `async` pour charger les assignments ✅
- `_openGrading(classIndex)` passe `TeacherDashboard._currentStudents` et `._currentProgressMap` à `GradingPanel.render()` ✅
- `GradingPanel.render()` stocke dans `GradingPanel._students` et `._progressMap` pour `_renderGradeTable()` et `_exportCSV()` ✅
- `removeStudentFromClass` retourne `Promise<void>` consommé avec `await` dans `_removeStudent` ✅
