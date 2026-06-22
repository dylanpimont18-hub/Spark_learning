# Auth System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter l'authentification Firebase + synchronisation Firestore à Spark Learning — login par téléphone/email, 3 rôles (student/teacher/admin), codes de classe, tableau de bord enseignant, panel admin.

**Architecture:** Hybride localStorage + Firestore. `storage.js` inchangé dans son API publique ; `syncService.js` monkey-patche ses méthodes write post-chargement. `authGuard.js` gate l'app au DOMContentLoaded. Routage basé sur le rôle dans `app.js` (lignes 1038–1125). Les routes `#teacher` et `#admin` existantes dans `render()` (ligne 319) sont réutilisées pour les nouvelles vues.

**Tech Stack:** Firebase 10.12.2 compat (CDN), Firestore, Firebase Auth (Phone OTP + Email/Password), Vanilla JS, pas de bundler.

## Global Constraints

- Aucun `export`/`import` — tous les objets sont globaux via `window`
- Firebase compat SDK (pas modular) — syntaxe `firebase.auth()`, `firebase.firestore()`
- CSS uniquement via variables de `css/styles.css` — aucune couleur hardcodée sauf dans les fallbacks
- API publique de `storage.js` non modifiée (signatures des méthodes inchangées)
- Config Firebase dans `js/auth/firebase-config.js` — jamais inline dans les fichiers logiques
- La fonction de navigation s'appelle `navigate()` dans app.js (pas `navigateTo`) — utiliser `navigate()` dans tous les nouveaux fichiers
- Le SDK Firebase doit être chargé en **premier** dans `index.html`, avant tous les autres scripts

---

### Task 1: Firebase Project Setup (Étapes manuelles)

**Files:** Aucun — configuration Firebase Console uniquement

**Interfaces:**
- Produit: objet `FIREBASE_CONFIG` avec `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`

- [ ] **Step 1: Créer le projet Firebase**

  Aller sur https://console.firebase.google.com → "Ajouter un projet" → nommer `spark-learning` → désactiver Google Analytics → Créer.

- [ ] **Step 2: Activer Authentication**

  Firebase Console → Build → Authentication → Commencer.

  Activer **Email/Mot de passe** : onglet Méthodes de connexion → Email/Mot de passe → Activer.

  Activer **Téléphone** : onglet Méthodes de connexion → Téléphone → Activer.

  Ajouter le domaine GitHub Pages : Authentication → Paramètres → Domaines autorisés → Ajouter → `dylanpimont18-hub.github.io`

- [ ] **Step 3: Activer Firestore**

  Firebase Console → Build → Firestore Database → Créer une base de données → Démarrer en **mode test** (les règles de sécurité seront ajoutées en Task 9) → Choisir région `eur3` (Europe).

- [ ] **Step 4: Récupérer la config Firebase**

  Firebase Console → Paramètres du projet (icône engrenage) → Vos applications → Ajouter une application → Web → Enregistrer → Copier l'objet `firebaseConfig`. Format :
  ```js
  {
    apiKey: "AIzaSy...",
    authDomain: "spark-learning-xxxxx.firebaseapp.com",
    projectId: "spark-learning-xxxxx",
    storageBucket: "spark-learning-xxxxx.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
  }
  ```

- [ ] **Step 5: Ajouter un numéro de test (développement)**

  Firebase Console → Authentication → Méthodes de connexion → Téléphone → Numéros de téléphone pour les tests → Ajouter : `+33600000001` avec code `123456`.

  Cela permet de tester l'auth téléphone sans vrai SMS.

- [ ] **Step 6: Commit**
  ```bash
  git add .
  git commit -m "docs: Firebase project setup complete"
  ```

---

### Task 2: Firebase SDK + Config + Suppression maintenance

**Files:**
- Créer: `js/auth/firebase-config.js`
- Modifier: `index.html` (ajouter SDK, supprimer redirect maintenance)

**Interfaces:**
- Consomme: valeurs de la Task 1 Step 4
- Produit: `window.FIREBASE_CONFIG`, globals SDK `firebase.auth`, `firebase.firestore`

- [ ] **Step 1: Créer `js/auth/firebase-config.js`**

  ```js
  const FIREBASE_CONFIG = {
    apiKey: "REPLACE_WITH_YOUR_API_KEY",
    authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
    projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
    storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
    messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
    appId: "REPLACE_WITH_YOUR_APP_ID"
  };
  ```

  Remplir avec les valeurs de la Task 1 Step 4.

- [ ] **Step 2: Supprimer le redirect maintenance de `index.html`**

  Trouver et supprimer la ligne suivante (ligne 4 du `<head>`) :
  ```html
  <script>window.location.replace("maintenance.html");</script>
  ```

- [ ] **Step 3: Ajouter les scripts Firebase SDK dans `index.html`**

  Dans `index.html`, dans `<head>`, **après les liens CSS existants et AVANT tous les autres `<script>`**, ajouter :
  ```html
  <!-- Firebase SDK (doit être le premier script) -->
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>

  <!-- Firebase Config -->
  <script src="js/auth/firebase-config.js"></script>
  ```

- [ ] **Step 4: Vérifier dans le navigateur**

  Ouvrir `index.html` via Live Server. Ouvrir la console.
  
  Vérification attendue : l'app s'affiche normalement (plus de page maintenance). Dans la console :
  ```js
  console.log(typeof firebase);        // "object"
  console.log(FIREBASE_CONFIG.projectId); // votre project ID
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add js/auth/firebase-config.js index.html
  git commit -m "feat: add Firebase SDK and remove maintenance redirect"
  ```

---

### Task 3: authService.js

**Files:**
- Créer: `js/auth/authService.js`
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `FIREBASE_CONFIG` (Task 2), global `firebase`
- Produit: `AuthService` global avec méthodes : `init()`, `getDb()`, `getAuth()`, `sendOTP(phone, recaptchaVerifier)→Promise<ConfirmationResult>`, `confirmOTP(confirmationResult, code)→Promise<UserCredential>`, `signInWithEmail(email, password)→Promise`, `signUpWithEmail(email, password)→Promise`, `signOut()→Promise`, `onAuthStateChanged(cb)→unsubscribe`, `getCurrentUser()→User|null`, `getUserProfile(uid)→Promise<profile|null>`, `createUserProfile(uid, data)→Promise`, `updateUserProfile(uid, patch)→Promise`, `getClass(code)→Promise<class|null>`, `joinClass(uid, code)→Promise`, `createClass(teacherUid, name)→Promise<code>`, `getTeacherClasses(teacherUid)→Promise<class[]>`, `getStudentProgress(uid)→Promise<progress|null>`, `getPendingTeachers()→Promise<user[]>`, `approveTeacher(uid)→Promise`, `rejectTeacher(uid)→Promise`, `getAllUsers()→Promise<user[]>`

- [ ] **Step 1: Créer `js/auth/authService.js`**

  ```js
  /* =========================================================
     Spark Learning – authService.js
     Firebase init + toutes les opérations auth et Firestore
     ========================================================= */

  const AuthService = {
    _auth: null,
    _db: null,

    init() {
      firebase.initializeApp(FIREBASE_CONFIG);
      this._auth = firebase.auth();
      this._db = firebase.firestore();
    },

    getAuth() { return this._auth; },
    getDb()   { return this._db; },

    /* ── Auth state ── */
    onAuthStateChanged(callback) {
      return this._auth.onAuthStateChanged(callback);
    },

    getCurrentUser() {
      return this._auth.currentUser;
    },

    async signOut() {
      await this._auth.signOut();
    },

    /* ── Phone auth ── */
    setupRecaptcha(containerId) {
      return new firebase.auth.RecaptchaVerifier(containerId, {
        size: 'invisible',
        callback: function() {}
      });
    },

    async sendOTP(phoneNumber, recaptchaVerifier) {
      return await this._auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
    },

    async confirmOTP(confirmationResult, code) {
      return await confirmationResult.confirm(code);
    },

    /* ── Email auth ── */
    async signInWithEmail(email, password) {
      return await this._auth.signInWithEmailAndPassword(email, password);
    },

    async signUpWithEmail(email, password) {
      return await this._auth.createUserWithEmailAndPassword(email, password);
    },

    /* ── Firestore : profils utilisateurs ── */
    async getUserProfile(uid) {
      const doc = await this._db.collection('users').doc(uid).get();
      return doc.exists ? { uid: doc.id, ...doc.data() } : null;
    },

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

    async updateUserProfile(uid, patch) {
      await this._db.collection('users').doc(uid).update(patch);
    },

    /* ── Firestore : classes ── */
    async getClass(classCode) {
      const doc = await this._db.collection('classes').doc(classCode).get();
      return doc.exists ? { id: doc.id, ...doc.data() } : null;
    },

    async joinClass(uid, classCode) {
      const cls = await this.getClass(classCode);
      if (!cls) throw new Error('Code de classe invalide.');
      const batch = this._db.batch();
      batch.update(this._db.collection('users').doc(uid), {
        classes: firebase.firestore.FieldValue.arrayUnion(classCode)
      });
      batch.update(this._db.collection('classes').doc(classCode), {
        students: firebase.firestore.FieldValue.arrayUnion(uid)
      });
      await batch.commit();
    },

    async createClass(teacherUid, className) {
      const code = this._generateClassCode(className);
      await this._db.collection('classes').doc(code).set({
        teacherId: teacherUid,
        name: className,
        students: [],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      await this.updateUserProfile(teacherUid, {
        classes: firebase.firestore.FieldValue.arrayUnion(code)
      });
      return code;
    },

    _generateClassCode(name) {
      const prefix = name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 4).toUpperCase() || 'CLS';
      const suffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      return prefix + '-' + suffix;
    },

    async getTeacherClasses(teacherUid) {
      const snap = await this._db.collection('classes')
        .where('teacherId', '==', teacherUid)
        .orderBy('createdAt', 'desc')
        .get();
      return snap.docs.map(function(d) { return { id: d.id, ...d.data() }; });
    },

    /* ── Firestore : progression élèves ── */
    async getStudentProgress(uid) {
      const doc = await this._db.collection('progress').doc(uid).get();
      return doc.exists ? doc.data() : null;
    },

    /* ── Admin ── */
    async getPendingTeachers() {
      const snap = await this._db.collection('users')
        .where('role', '==', 'teacher')
        .where('status', '==', 'pending')
        .orderBy('createdAt', 'desc')
        .get();
      return snap.docs.map(function(d) { return { uid: d.id, ...d.data() }; });
    },

    async approveTeacher(uid) {
      const adminUid = this.getCurrentUser().uid;
      await this.updateUserProfile(uid, {
        status: 'active',
        approvedAt: firebase.firestore.FieldValue.serverTimestamp(),
        approvedBy: adminUid
      });
    },

    async rejectTeacher(uid) {
      await this.updateUserProfile(uid, { status: 'rejected' });
    },

    async getAllUsers() {
      const snap = await this._db.collection('users')
        .orderBy('createdAt', 'desc')
        .get();
      return snap.docs.map(function(d) { return { uid: d.id, ...d.data() }; });
    }
  };
  ```

- [ ] **Step 2: Ajouter la balise script dans `index.html`**

  Directement après `<script src="js/auth/firebase-config.js"></script>`, ajouter :
  ```html
  <script src="js/auth/authService.js"></script>
  ```

- [ ] **Step 3: Vérifier dans le navigateur**

  Dans la console du navigateur :
  ```js
  AuthService.init();
  console.log(typeof AuthService.getAuth()); // "object"
  console.log(typeof AuthService.getDb());   // "object"
  ```
  Attendu : pas d'erreur, les deux affichent `"object"`.

- [ ] **Step 4: Commit**
  ```bash
  git add js/auth/authService.js index.html
  git commit -m "feat: add AuthService (Firebase auth + Firestore operations)"
  ```

---

### Task 4: authGuard.js

**Files:**
- Créer: `js/auth/authGuard.js`
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `AuthService` (Task 3)
- Produit: `AuthGuard` global avec : `init()→Promise<profile|null>`, `getCurrentUser()→User|null`, `getCurrentProfile()→profile|null`, `getRole()→string|null`, `getStatus()→string|null`, `isAuthenticated()→bool`, `isAdmin()→bool`, `isTeacher()→bool`, `isStudent()→bool`, `isActive()→bool`

- [ ] **Step 1: Créer `js/auth/authGuard.js`**

  ```js
  /* =========================================================
     Spark Learning – authGuard.js
     Vérifie l'état Firebase auth avant d'afficher l'app
     ========================================================= */

  var AuthGuard = {
    _currentUser: null,
    _currentProfile: null,

    init: function() {
      var self = this;
      return new Promise(function(resolve) {
        AuthService.onAuthStateChanged(async function(user) {
          if (user) {
            self._currentUser = user;
            self._currentProfile = await AuthService.getUserProfile(user.uid);
            resolve(self._currentProfile);
          } else {
            self._currentUser = null;
            self._currentProfile = null;
            resolve(null);
          }
        });
      });
    },

    getCurrentUser:    function() { return this._currentUser; },
    getCurrentProfile: function() { return this._currentProfile; },
    getRole:   function() { return this._currentProfile ? this._currentProfile.role : null; },
    getStatus: function() { return this._currentProfile ? this._currentProfile.status : null; },

    isAuthenticated: function() { return !!this._currentUser; },
    isAdmin:   function() { return !!(this._currentProfile && this._currentProfile.role === 'admin'); },
    isTeacher: function() { return !!(this._currentProfile && (this._currentProfile.role === 'teacher' || this._currentProfile.role === 'admin')); },
    isStudent: function() { return !!(this._currentProfile && this._currentProfile.role === 'student'); },
    isActive:  function() { return !!(this._currentProfile && this._currentProfile.status === 'active'); }
  };
  ```

- [ ] **Step 2: Ajouter la balise script dans `index.html`**

  Après `<script src="js/auth/authService.js"></script>`, ajouter :
  ```html
  <script src="js/auth/authGuard.js"></script>
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add js/auth/authGuard.js index.html
  git commit -m "feat: add AuthGuard (auth state checker)"
  ```

---

### Task 5: authView.js + CSS auth

**Files:**
- Créer: `js/views/authView.js`
- Modifier: `css/styles.css` (ajouter classes auth à la fin)
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `AuthService` (Task 3), `AuthGuard` (Task 4)
- Produit: `AuthView` global avec `render()` et `renderPending()`. En cas de succès d'auth, `onAuthStateChanged` dans app.js (Task 9) prend le relai.

- [ ] **Step 1: Lire les variables CSS existantes**

  Lire `css/styles.css` et identifier les noms exacts des variables pour : fond principal, surface carte, bordure, texte principal, texte secondaire, couleur primaire. Les noms courants dans ce projet selon CODEBASE_MAP : `--primary`, `--secondary`, `--accent`, `--error`. Adapter les classes CSS de l'étape suivante si nécessaire.

- [ ] **Step 2: Ajouter les classes auth à la fin de `css/styles.css`**

  ```css
  /* ═══════════════════════════════════════════════════════
     AUTH
  ═══════════════════════════════════════════════════════ */
  .auth-overlay {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .auth-card {
    background: var(--card-bg, var(--surface, #1a1a2e));
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 20px;
    padding: 2.5rem 2rem;
    max-width: 480px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  }

  .auth-logo {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    object-fit: cover;
    display: block;
    margin: 0 auto 1rem;
  }

  .auth-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .auth-tabs {
    display: flex;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 1.5rem;
    gap: 4px;
  }

  .auth-tab {
    flex: 1;
    padding: 0.5rem;
    border: none;
    background: transparent;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-muted, #9090b0);
    cursor: pointer;
    transition: all 0.2s;
  }

  .auth-tab.active {
    background: var(--primary);
    color: #fff;
  }

  .auth-method-toggle {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .auth-method-btn {
    flex: 1;
    padding: 0.5rem;
    border: 2px solid var(--border, rgba(255,255,255,0.1));
    background: transparent;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted, #9090b0);
    cursor: pointer;
    transition: all 0.2s;
  }

  .auth-method-btn.active {
    border-color: var(--primary);
    color: var(--primary);
  }

  .auth-field { margin-bottom: 1rem; }

  .auth-label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted, #9090b0);
    margin-bottom: 0.35rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .auth-input {
    width: 100%;
    padding: 0.7rem 0.9rem;
    border: 2px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 10px;
    background: rgba(0,0,0,0.15);
    color: var(--text, #e8e8f0);
    font-size: 0.95rem;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .auth-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .auth-btn-primary {
    width: 100%;
    padding: 0.8rem;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: opacity 0.2s;
    font-family: 'Inter', sans-serif;
  }

  .auth-btn-primary:hover { opacity: 0.9; }
  .auth-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

  .auth-role-select {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .auth-role-btn {
    flex: 1;
    padding: 0.75rem 0.5rem;
    border: 2px solid var(--border, rgba(255,255,255,0.1));
    background: transparent;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted, #9090b0);
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;
  }

  .auth-role-btn .role-icon { font-size: 1.5rem; display: block; margin-bottom: 0.25rem; }

  .auth-role-btn.active {
    border-color: var(--primary);
    color: var(--primary);
  }

  .auth-error {
    background: rgba(239,68,68,0.1);
    border: 1px solid rgba(239,68,68,0.3);
    color: #ef4444;
    border-radius: 8px;
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .auth-pending { text-align: center; padding: 1.5rem 0; }
  .auth-pending-icon { font-size: 3rem; margin-bottom: 1rem; }
  .auth-pending h2 { font-family: 'Poppins', sans-serif; font-weight: 700; margin-bottom: 0.5rem; }
  .auth-pending p { color: var(--text-muted, #9090b0); font-size: 0.9rem; line-height: 1.6; }

  .auth-link {
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    font-size: 0.85rem;
    text-decoration: underline;
    margin-top: 0.75rem;
    display: block;
    text-align: center;
  }

  .auth-class-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(0,0,0,0.15);
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 20px;
    padding: 0.3rem 0.7rem;
    font-size: 0.82rem;
    margin: 0.25rem;
  }

  .auth-class-tag button {
    background: none;
    border: none;
    color: var(--text-muted, #9090b0);
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0;
    line-height: 1;
  }
  ```

- [ ] **Step 3: Créer `js/views/authView.js`**

  ```js
  /* =========================================================
     Spark Learning – authView.js
     Pages Inscription / Connexion
     ========================================================= */

  var AuthView = {
    _recaptchaVerifier: null,
    _confirmationResult: null,
    _selectedRole: 'student',
    _selectedMethod: 'phone',
    _joinedClasses: [],

    render: function() {
      var app = document.getElementById('app');
      app.innerHTML =
        '<div class="auth-overlay">' +
          '<div class="auth-card">' +
            '<img src="images/Logo_noir.jpeg" alt="Spark Learning" class="auth-logo" />' +
            '<h1 class="auth-title">Spark Learning</h1>' +
            '<div class="auth-tabs">' +
              '<button class="auth-tab active" data-tab="login" onclick="AuthView._switchTab(\'login\')">Connexion</button>' +
              '<button class="auth-tab" data-tab="register" onclick="AuthView._switchTab(\'register\')">Inscription</button>' +
            '</div>' +
            '<div id="auth-content"></div>' +
          '</div>' +
        '</div>' +
        '<div id="recaptcha-container"></div>';
      this._renderLogin();
    },

    renderPending: function() {
      var app = document.getElementById('app');
      app.innerHTML =
        '<div class="auth-overlay">' +
          '<div class="auth-card">' +
            '<img src="images/Logo_noir.jpeg" alt="Spark Learning" class="auth-logo" />' +
            '<div class="auth-pending">' +
              '<div class="auth-pending-icon">⏳</div>' +
              '<h2>Compte en attente de validation</h2>' +
              '<p>Votre demande de compte enseignant a bien été reçue.<br/>' +
              "L'administrateur validera votre accès prochainement.</p>" +
              '<button class="auth-link" onclick="AuthService.signOut().then(function(){ AuthView.render(); })">Se déconnecter</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    },

    _switchTab: function(tab) {
      document.querySelectorAll('.auth-tab').forEach(function(t) {
        t.classList.toggle('active', t.dataset.tab === tab);
      });
      if (tab === 'login') AuthView._renderLogin();
      else AuthView._renderRegister();
    },

    /* ══ LOGIN ══ */
    _renderLogin: function() {
      this._selectedMethod = 'phone';
      document.getElementById('auth-content').innerHTML =
        '<div class="auth-method-toggle">' +
          '<button class="auth-method-btn active" id="method-phone" onclick="AuthView._setLoginMethod(\'phone\')">📱 Téléphone</button>' +
          '<button class="auth-method-btn" id="method-email" onclick="AuthView._setLoginMethod(\'email\')">✉️ Email</button>' +
        '</div>' +
        '<div id="login-form"></div>';
      this._renderLoginPhone();
    },

    _setLoginMethod: function(method) {
      this._selectedMethod = method;
      document.querySelectorAll('.auth-method-btn').forEach(function(b) { b.classList.remove('active'); });
      document.getElementById('method-' + method).classList.add('active');
      if (method === 'phone') AuthView._renderLoginPhone();
      else AuthView._renderLoginEmail();
    },

    _renderLoginPhone: function() {
      document.getElementById('login-form').innerHTML =
        '<div id="login-error"></div>' +
        '<div id="phone-step">' +
          '<div class="auth-field"><label class="auth-label">Numéro de téléphone</label>' +
          '<input class="auth-input" id="login-phone" type="tel" placeholder="+33 6 00 00 00 00" /></div>' +
          '<button class="auth-btn-primary" onclick="AuthView._loginSendOTP()">Envoyer le code SMS</button>' +
        '</div>' +
        '<div id="otp-step" style="display:none">' +
          '<div class="auth-field"><label class="auth-label">Code reçu par SMS</label>' +
          '<input class="auth-input" id="login-otp" type="text" placeholder="123456" maxlength="6" /></div>' +
          '<button class="auth-btn-primary" onclick="AuthView._loginConfirmOTP()">Confirmer</button>' +
        '</div>';
    },

    _renderLoginEmail: function() {
      document.getElementById('login-form').innerHTML =
        '<div id="login-error"></div>' +
        '<div class="auth-field"><label class="auth-label">Email</label>' +
        '<input class="auth-input" id="login-email" type="email" placeholder="prenom@exemple.fr" /></div>' +
        '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
        '<input class="auth-input" id="login-password" type="password" placeholder="••••••••" /></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._loginEmail()">Se connecter</button>';
    },

    _loginSendOTP: async function() {
      var phone = document.getElementById('login-phone').value.trim();
      if (!phone) return AuthView._showError('login-error', 'Entrez votre numéro de téléphone.');
      try {
        if (!AuthView._recaptchaVerifier) {
          AuthView._recaptchaVerifier = AuthService.setupRecaptcha('recaptcha-container');
        }
        AuthView._confirmationResult = await AuthService.sendOTP(phone, AuthView._recaptchaVerifier);
        document.getElementById('phone-step').style.display = 'none';
        document.getElementById('otp-step').style.display = 'block';
      } catch (e) {
        AuthView._showError('login-error', 'Erreur : ' + (e.message || 'Numéro invalide.'));
      }
    },

    _loginConfirmOTP: async function() {
      var code = document.getElementById('login-otp').value.trim();
      if (!code) return AuthView._showError('login-error', 'Entrez le code SMS.');
      try {
        await AuthService.confirmOTP(AuthView._confirmationResult, code);
        // onAuthStateChanged dans app.js gère la redirection
      } catch (e) {
        AuthView._showError('login-error', 'Code incorrect ou expiré.');
      }
    },

    _loginEmail: async function() {
      var email = document.getElementById('login-email').value.trim();
      var password = document.getElementById('login-password').value;
      if (!email || !password) return AuthView._showError('login-error', 'Remplissez tous les champs.');
      try {
        await AuthService.signInWithEmail(email, password);
      } catch (e) {
        AuthView._showError('login-error', 'Email ou mot de passe incorrect.');
      }
    },

    /* ══ REGISTER ══ */
    _renderRegister: function() {
      AuthView._selectedRole = 'student';
      AuthView._selectedMethod = 'phone';
      AuthView._joinedClasses = [];
      document.getElementById('auth-content').innerHTML =
        '<div id="register-error"></div>' +
        '<div class="auth-role-select">' +
          '<button class="auth-role-btn active" id="role-student" onclick="AuthView._setRole(\'student\')">' +
            '<span class="role-icon">🎓</span>Élève</button>' +
          '<button class="auth-role-btn" id="role-teacher" onclick="AuthView._setRole(\'teacher\')">' +
            '<span class="role-icon">👨‍🏫</span>Enseignant</button>' +
        '</div>' +
        '<div class="auth-method-toggle">' +
          '<button class="auth-method-btn active" id="reg-method-phone" onclick="AuthView._setRegMethod(\'phone\')">📱 Téléphone</button>' +
          '<button class="auth-method-btn" id="reg-method-email" onclick="AuthView._setRegMethod(\'email\')">✉️ Email</button>' +
        '</div>' +
        '<div id="register-form"></div>';
      this._renderRegisterPhone();
    },

    _setRole: function(role) {
      AuthView._selectedRole = role;
      document.querySelectorAll('.auth-role-btn').forEach(function(b) { b.classList.remove('active'); });
      document.getElementById('role-' + role).classList.add('active');
    },

    _setRegMethod: function(method) {
      AuthView._selectedMethod = method;
      document.querySelectorAll('.auth-method-btn').forEach(function(b) { b.classList.remove('active'); });
      document.getElementById('reg-method-' + method).classList.add('active');
      if (method === 'phone') AuthView._renderRegisterPhone();
      else AuthView._renderRegisterEmail();
    },

    _renderRegisterPhone: function() {
      document.getElementById('register-form').innerHTML =
        '<div class="auth-field"><label class="auth-label">Prénom et Nom</label>' +
        '<input class="auth-input" id="reg-name" type="text" placeholder="Marie Curie" /></div>' +
        '<div id="reg-phone-step">' +
          '<div class="auth-field"><label class="auth-label">Numéro de téléphone</label>' +
          '<input class="auth-input" id="reg-phone" type="tel" placeholder="+33 6 00 00 00 00" /></div>' +
          '<button class="auth-btn-primary" onclick="AuthView._registerSendOTP()">Envoyer le code SMS</button>' +
        '</div>' +
        '<div id="reg-otp-step" style="display:none">' +
          '<div class="auth-field"><label class="auth-label">Code reçu par SMS</label>' +
          '<input class="auth-input" id="reg-otp" type="text" placeholder="123456" maxlength="6" /></div>' +
          '<div id="reg-class-section"></div>' +
          '<button class="auth-btn-primary" onclick="AuthView._registerConfirmOTP()">Créer mon compte</button>' +
        '</div>';
    },

    _renderRegisterEmail: function() {
      document.getElementById('register-form').innerHTML =
        '<div class="auth-field"><label class="auth-label">Prénom et Nom</label>' +
        '<input class="auth-input" id="reg-name" type="text" placeholder="Marie Curie" /></div>' +
        '<div class="auth-field"><label class="auth-label">Email</label>' +
        '<input class="auth-input" id="reg-email" type="email" placeholder="prenom@exemple.fr" /></div>' +
        '<div class="auth-field"><label class="auth-label">Mot de passe</label>' +
        '<input class="auth-input" id="reg-password" type="password" placeholder="••••••••" /></div>' +
        '<div id="reg-class-section"></div>' +
        '<button class="auth-btn-primary" onclick="AuthView._registerEmail()">Créer mon compte</button>';
      this._renderClassSection();
    },

    _renderClassSection: function() {
      var container = document.getElementById('reg-class-section');
      if (!container) return;
      if (AuthView._selectedRole !== 'student') { container.innerHTML = ''; return; }
      var tags = AuthView._joinedClasses.map(function(c, i) {
        return '<span class="auth-class-tag">' + c + '<button onclick="AuthView._removeClass(' + i + ')">✕</button></span>';
      }).join('');
      container.innerHTML =
        '<div class="auth-field">' +
          '<label class="auth-label">Code(s) de classe (optionnel)</label>' +
          '<div style="display:flex;gap:0.5rem">' +
            '<input class="auth-input" id="class-code-input" type="text" placeholder="MATHS-TS1" style="flex:1" />' +
            '<button class="auth-btn-primary" style="width:auto;padding:0.7rem 1rem;margin-top:0" onclick="AuthView._addClass()">+</button>' +
          '</div>' +
          '<div style="margin-top:0.5rem">' + tags + '</div>' +
        '</div>';
    },

    _addClass: function() {
      var input = document.getElementById('class-code-input');
      var code = input.value.trim().toUpperCase();
      if (code && AuthView._joinedClasses.indexOf(code) === -1) {
        AuthView._joinedClasses.push(code);
        input.value = '';
        AuthView._renderClassSection();
      }
    },

    _removeClass: function(index) {
      AuthView._joinedClasses.splice(index, 1);
      AuthView._renderClassSection();
    },

    _registerSendOTP: async function() {
      var phone = document.getElementById('reg-phone').value.trim();
      if (!phone) return AuthView._showError('register-error', 'Entrez votre numéro de téléphone.');
      try {
        if (!AuthView._recaptchaVerifier) {
          AuthView._recaptchaVerifier = AuthService.setupRecaptcha('recaptcha-container');
        }
        AuthView._confirmationResult = await AuthService.sendOTP(phone, AuthView._recaptchaVerifier);
        document.getElementById('reg-phone-step').style.display = 'none';
        document.getElementById('reg-otp-step').style.display = 'block';
        AuthView._renderClassSection();
      } catch (e) {
        AuthView._showError('register-error', 'Erreur : ' + (e.message || 'Numéro invalide.'));
      }
    },

    _registerConfirmOTP: async function() {
      var code = document.getElementById('reg-otp').value.trim();
      var name = document.getElementById('reg-name').value.trim();
      if (!code) return AuthView._showError('register-error', 'Entrez le code SMS.');
      if (!name) return AuthView._showError('register-error', 'Entrez votre prénom et nom.');
      try {
        var cred = await AuthService.confirmOTP(AuthView._confirmationResult, code);
        await AuthView._finishRegistration(cred.user, { phone: cred.user.phoneNumber }, name);
      } catch (e) {
        AuthView._showError('register-error', 'Code incorrect ou expiré.');
      }
    },

    _registerEmail: async function() {
      var name = document.getElementById('reg-name').value.trim();
      var email = document.getElementById('reg-email').value.trim();
      var password = document.getElementById('reg-password').value;
      if (!name || !email || !password) return AuthView._showError('register-error', 'Remplissez tous les champs.');
      if (password.length < 6) return AuthView._showError('register-error', 'Mot de passe trop court (6 caractères min).');
      try {
        var cred = await AuthService.signUpWithEmail(email, password);
        await AuthView._finishRegistration(cred.user, { email: email }, name);
      } catch (e) {
        var msg = e.code === 'auth/email-already-in-use'
          ? 'Cet email est déjà utilisé.'
          : (e.message || "Erreur lors de l'inscription.");
        AuthView._showError('register-error', msg);
      }
    },

    _finishRegistration: async function(user, contactData, displayName) {
      var isTeacher = AuthView._selectedRole === 'teacher';
      var profile = {
        role: isTeacher ? 'teacher' : 'student',
        status: isTeacher ? 'pending' : 'active',
        displayName: displayName,
        phone: contactData.phone || null,
        email: contactData.email || null,
        classes: []
      };
      await AuthService.createUserProfile(user.uid, profile);
      if (!isTeacher) {
        for (var i = 0; i < AuthView._joinedClasses.length; i++) {
          try { await AuthService.joinClass(user.uid, AuthView._joinedClasses[i]); } catch (e) { /* code invalide */ }
        }
      }
      // onAuthStateChanged dans app.js gère la redirection
    },

    _showError: function(containerId, message) {
      var el = document.getElementById(containerId);
      if (el) el.innerHTML = '<div class="auth-error">' + message + '</div>';
    }
  };
  ```

- [ ] **Step 4: Ajouter la balise script dans `index.html`**

  Après `<script src="js/auth/authGuard.js"></script>`, ajouter :
  ```html
  <script src="js/views/authView.js"></script>
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add js/views/authView.js css/styles.css index.html
  git commit -m "feat: add AuthView (login/register UI)"
  ```

---

### Task 6: syncService.js

**Files:**
- Créer: `js/sync/syncService.js`
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `AuthService.getDb()` (Task 3), `Storage` (existant), `firebase.firestore.FieldValue`
- Produit: `SyncService` global avec `init(uid)` — wraps les writes de storage.js et pull depuis Firestore au démarrage

- [ ] **Step 1: Créer `js/sync/syncService.js`**

  ```js
  /* =========================================================
     Spark Learning – syncService.js
     Synchro localStorage ↔ Firestore (non-bloquant, offline-safe)
     ========================================================= */

  var SyncService = {
    _db: null,
    _uid: null,
    _pending: false,

    init: function(uid) {
      this._db = AuthService.getDb();
      this._uid = uid;
      this._wrapStorageMethods();
      this._pullFromFirestore();
    },

    _wrapStorageMethods: function() {
      var self = this;
      var methodsToWrap = [
        'saveProgress',
        'trackAttempt',
        'trackQuizScore',
        'trackEvaluationScore',
        'updateStreak',
        'saveFlashcardKnown'
      ];
      methodsToWrap.forEach(function(method) {
        if (typeof Storage[method] !== 'function') return;
        var original = Storage[method].bind(Storage);
        Storage[method] = function() {
          var result = original.apply(Storage, arguments);
          self._pushToFirestore();
          return result;
        };
      });
    },

    _pushToFirestore: function() {
      if (!this._uid || this._pending) return;
      var self = this;
      this._pending = true;
      var data = {
        progress:   Storage.getProgress(),
        tracking:   Storage._get(Storage.KEYS.TRACKING, {}),
        streak:     Storage.getStreak(),
        flashcards: Storage._get(Storage.KEYS.FLASHCARDS, {}),
        lastSync:   firebase.firestore.FieldValue.serverTimestamp()
      };
      this._db.collection('progress').doc(this._uid)
        .set(data, { merge: true })
        .catch(function() { /* offline — Firebase SDK re-essaie automatiquement */ })
        .finally(function() { self._pending = false; });
    },

    _pullFromFirestore: async function() {
      if (!this._uid) return;
      try {
        var doc = await this._db.collection('progress').doc(this._uid).get();
        if (!doc.exists) return;
        var data = doc.data();
        var firestoreTs = data.lastSync ? data.lastSync.toMillis() : 0;
        var localTs = parseInt(localStorage.getItem('sparkLastSync') || '0');
        if (firestoreTs > localTs) {
          if (data.progress)   Storage._set(Storage.KEYS.PROGRESS, data.progress);
          if (data.tracking)   Storage._set(Storage.KEYS.TRACKING, data.tracking);
          if (data.streak)     Storage._set(Storage.KEYS.STREAK, data.streak);
          if (data.flashcards) Storage._set(Storage.KEYS.FLASHCARDS, data.flashcards);
          localStorage.setItem('sparkLastSync', String(firestoreTs));
        }
      } catch (e) {
        // offline — localStorage utilisé
      }
    }
  };
  ```

- [ ] **Step 2: Ajouter la balise script dans `index.html`**

  Ajouter juste **avant** `<script src="js/app.js"></script>` :
  ```html
  <script src="js/sync/syncService.js"></script>
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add js/sync/syncService.js index.html
  git commit -m "feat: add SyncService (localStorage <-> Firestore background sync)"
  ```

---

### Task 7: teacherDashboard.js + CSS dashboard

**Files:**
- Créer: `js/views/teacherDashboard.js`
- Modifier: `css/styles.css` (ajouter classes dashboard à la fin)
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `AuthService` (Task 3), `AuthGuard` (Task 4), `navigate()` de app.js, `showToast()` de app.js
- Produit: `TeacherDashboard` global avec `render()→Promise<void>`, `_viewClass(classCode)→Promise<void>`, `_viewStudent(uid, label, backCode)→Promise<void>`

- [ ] **Step 1: Ajouter les classes dashboard CSS à la fin de `css/styles.css`**

  ```css
  /* ═══════════════════════════════════════════════════════
     TEACHER DASHBOARD & ADMIN PANEL
  ═══════════════════════════════════════════════════════ */
  .dashboard-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .dashboard-header h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .dashboard-btn {
    padding: 0.6rem 1.2rem;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    transition: opacity 0.2s;
  }

  .dashboard-btn:hover { opacity: 0.85; }

  .dashboard-btn-outline {
    padding: 0.5rem 1rem;
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.2s;
  }

  .dashboard-btn-outline:hover { background: var(--primary); color: #fff; }

  .class-card {
    background: var(--card-bg, var(--surface, rgba(255,255,255,0.05)));
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;
  }

  .class-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .class-name { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 1.05rem; }

  .class-code-badge {
    background: rgba(0,0,0,0.15);
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 8px;
    padding: 0.25rem 0.6rem;
    font-size: 0.8rem;
    font-family: monospace;
    color: var(--primary);
    font-weight: 700;
  }

  .class-stats { font-size: 0.85rem; color: var(--text-muted, #9090b0); margin-bottom: 0.75rem; }

  .student-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0;
    border-top: 1px solid var(--border, rgba(255,255,255,0.08));
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .student-name { font-weight: 600; font-size: 0.9rem; }
  .student-meta { font-size: 0.8rem; color: var(--text-muted, #9090b0); }

  .dashboard-empty { text-align: center; padding: 3rem 1.5rem; color: var(--text-muted, #9090b0); }
  .dashboard-empty h3 { font-family: 'Poppins', sans-serif; margin-bottom: 0.5rem; }

  .student-detail-back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0;
  }

  .detail-section {
    background: var(--card-bg, var(--surface, rgba(255,255,255,0.05)));
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 14px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;
  }

  .detail-section h3 { font-family: 'Poppins', sans-serif; font-weight: 700; margin-bottom: 1rem; font-size: 1rem; }

  .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem; }

  .stat-box { background: rgba(0,0,0,0.15); border-radius: 10px; padding: 0.75rem; text-align: center; }
  .stat-box .stat-value { font-size: 1.5rem; font-weight: 800; color: var(--primary); font-family: 'Poppins', sans-serif; }
  .stat-box .stat-label { font-size: 0.75rem; color: var(--text-muted, #9090b0); margin-top: 0.2rem; }

  .module-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border, rgba(255,255,255,0.08));
    font-size: 0.85rem;
  }

  .module-row:last-child { border-bottom: none; }
  .badge-done { color: #22c55e; font-weight: 700; }
  .badge-partial { color: #f59e0b; font-weight: 700; }

  /* ── Admin Panel ── */
  .admin-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--border, rgba(255,255,255,0.1));
  }

  .admin-tab-btn {
    padding: 0.6rem 1.25rem;
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    color: var(--text-muted, #9090b0);
    cursor: pointer;
    font-size: 0.9rem;
    margin-bottom: -2px;
    transition: all 0.2s;
  }

  .admin-tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); }

  .admin-user-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1.25rem;
    background: var(--card-bg, var(--surface, rgba(255,255,255,0.05)));
    border: 1px solid var(--border, rgba(255,255,255,0.1));
    border-radius: 12px;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .admin-user-info { flex: 1; min-width: 200px; }
  .admin-user-name { font-weight: 700; font-size: 0.95rem; }
  .admin-user-meta { font-size: 0.8rem; color: var(--text-muted, #9090b0); margin-top: 0.2rem; }
  .admin-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }

  .btn-approve { padding: 0.4rem 0.9rem; background: #22c55e; color: #fff; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.82rem; }
  .btn-reject  { padding: 0.4rem 0.9rem; background: #ef4444; color: #fff; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.82rem; }

  .role-badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-left: 0.4rem;
  }

  .role-badge.admin   { background: rgba(168,85,247,0.15); color: #a855f7; }
  .role-badge.teacher { background: rgba(99,102,241,0.15); color: var(--primary); }
  .role-badge.student { background: rgba(34,197,94,0.15); color: #22c55e; }

  .status-badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-size: 0.72rem;
    font-weight: 600;
    margin-left: 0.3rem;
  }

  .status-badge.active   { background: rgba(34,197,94,0.12); color: #22c55e; }
  .status-badge.pending  { background: rgba(245,158,11,0.15); color: #f59e0b; }
  .status-badge.rejected { background: rgba(239,68,68,0.12); color: #ef4444; }
  ```

- [ ] **Step 2: Créer `js/views/teacherDashboard.js`**

  ```js
  /* =========================================================
     Spark Learning – teacherDashboard.js
     Tableau de bord enseignant
     ========================================================= */

  var TeacherDashboard = {
    _classes: [],

    render: async function() {
      var app = document.getElementById('app');
      app.innerHTML = '<div class="dashboard-wrap"><p style="color:var(--text-muted,#9090b0)">Chargement...</p></div>';

      var uid = AuthGuard.getCurrentUser().uid;
      var profile = AuthGuard.getCurrentProfile();
      var isAdmin = AuthGuard.isAdmin();

      try {
        TeacherDashboard._classes = await AuthService.getTeacherClasses(uid);
      } catch (e) {
        TeacherDashboard._classes = [];
      }

      var adminBtn = isAdmin
        ? '<button class="dashboard-btn-outline" onclick="AdminPanel.render()">⚙️ Panel Admin</button>'
        : '';

      app.innerHTML =
        '<div class="dashboard-wrap">' +
          '<div class="dashboard-header">' +
            '<div><h1>Mes classes</h1>' +
            '<p style="color:var(--text-muted,#9090b0);font-size:0.85rem">Bonjour, ' + profile.displayName + '</p></div>' +
            '<div style="display:flex;gap:0.75rem;flex-wrap:wrap">' +
              adminBtn +
              '<button class="dashboard-btn-outline" onclick="navigate(\'home\')">🎓 Accès élève</button>' +
              '<button class="dashboard-btn" onclick="TeacherDashboard._createClass()">+ Créer une classe</button>' +
              '<button class="dashboard-btn-outline" onclick="AuthService.signOut()">Déconnexion</button>' +
            '</div>' +
          '</div>' +
          '<div id="classes-list">' + TeacherDashboard._renderClassesList() + '</div>' +
        '</div>';
    },

    _renderClassesList: function() {
      if (TeacherDashboard._classes.length === 0) {
        return '<div class="dashboard-empty"><h3>Aucune classe pour l\'instant</h3>' +
               '<p>Créez votre première classe pour générer un code et inviter vos élèves.</p></div>';
      }
      return TeacherDashboard._classes.map(function(cls) {
        var count = cls.students ? cls.students.length : 0;
        return '<div class="class-card">' +
          '<div class="class-card-header">' +
            '<span class="class-name">' + cls.name + '</span>' +
            '<span class="class-code-badge">' + cls.id + '</span>' +
          '</div>' +
          '<div class="class-stats">' + count + ' élève(s)</div>' +
          '<button class="dashboard-btn-outline" onclick="TeacherDashboard._viewClass(\'' + cls.id + '\')">Voir les élèves →</button>' +
        '</div>';
      }).join('');
    },

    _createClass: async function() {
      var name = prompt('Nom de la classe (ex: Terminale S1, BTS1) :');
      if (!name || !name.trim()) return;
      try {
        var uid = AuthGuard.getCurrentUser().uid;
        var code = await AuthService.createClass(uid, name.trim());
        showToast('Classe créée ! Code : ' + code, 'success');
        await TeacherDashboard.render();
      } catch (e) {
        showToast('Erreur lors de la création de la classe.', 'error');
      }
    },

    _viewClass: async function(classCode) {
      var app = document.getElementById('app');
      app.innerHTML = '<div class="dashboard-wrap"><p style="color:var(--text-muted,#9090b0)">Chargement...</p></div>';

      var cls = await AuthService.getClass(classCode);
      var students = [];
      var studentUids = cls && cls.students ? cls.students : [];

      for (var i = 0; i < studentUids.length; i++) {
        var profile = await AuthService.getUserProfile(studentUids[i]);
        if (profile) students.push(profile);
      }

      var studentRows = students.length === 0
        ? '<div class="dashboard-empty"><h3>Aucun élève</h3><p>Partagez le code <strong>' + classCode + '</strong> à vos élèves.</p></div>'
        : students.map(function(s) {
            return '<div class="student-row">' +
              '<div><div class="student-name">' + s.displayName + '</div>' +
              '<div class="student-meta">' + (s.phone || s.email || '') + '</div></div>' +
              '<button class="dashboard-btn-outline" onclick="TeacherDashboard._viewStudent(\'' + s.uid + '\', \'' + cls.name.replace(/'/g, "\\'") + '\', \'' + classCode + '\')">Voir la progression →</button>' +
            '</div>';
          }).join('');

      app.innerHTML =
        '<div class="dashboard-wrap">' +
          '<button class="student-detail-back" onclick="TeacherDashboard.render()">← Retour aux classes</button>' +
          '<div class="dashboard-header">' +
            '<div><h1>' + (cls ? cls.name : classCode) + '</h1>' +
            '<span class="class-code-badge">' + classCode + '</span></div>' +
          '</div>' +
          '<div>' + studentRows + '</div>' +
        '</div>';
    },

    _viewStudent: async function(uid, backLabel, backCode) {
      var app = document.getElementById('app');
      app.innerHTML = '<div class="dashboard-wrap"><p style="color:var(--text-muted,#9090b0)">Chargement...</p></div>';

      var profile = await AuthService.getUserProfile(uid);
      var progressData = await AuthService.getStudentProgress(uid);

      var progress  = progressData ? (progressData.progress  || {}) : {};
      var tracking  = progressData ? (progressData.tracking  || {}) : {};
      var streak    = progressData ? (progressData.streak    || {}) : {};

      var completedModules = Object.keys(progress).filter(function(id) {
        var m = progress[id];
        return m && (m.quiz || m.exercice || m.evaluation);
      });

      var totalAttempts = Object.values(tracking).reduce(function(sum, mod) {
        return sum + Object.values(mod).reduce(function(s, sec) { return s + (sec.attempts || 0); }, 0);
      }, 0);

      var bestQuizScores = Object.entries(tracking)
        .filter(function(e) { return e[1].quiz; })
        .map(function(e) { return { id: e[0], bestScore: e[1].quiz.bestScore || 0 }; })
        .sort(function(a, b) { return b.bestScore - a.bestScore; })
        .slice(0, 10);

      var backAction = backCode === '__admin__'
        ? 'AdminPanel.render()'
        : backCode
          ? 'TeacherDashboard._viewClass(\'' + backCode + '\')'
          : 'TeacherDashboard.render()';

      var quizRows = bestQuizScores.length === 0
        ? '<p style="color:var(--text-muted,#9090b0);font-size:0.85rem">Aucun quiz effectué.</p>'
        : bestQuizScores.map(function(q) {
            return '<div class="module-row"><span>' + q.id + '</span>' +
              '<span class="' + (q.bestScore >= 7 ? 'badge-done' : 'badge-partial') + '">' + q.bestScore + '/10</span></div>';
          }).join('');

      var moduleRows = completedModules.length === 0
        ? '<p style="color:var(--text-muted,#9090b0);font-size:0.85rem">Aucun module complété.</p>'
        : completedModules.map(function(id) {
            var m = progress[id];
            var types = ['quiz','exercice','evaluation','probleme','flashcards'].filter(function(t) { return m[t]; });
            return '<div class="module-row"><span>' + id + '</span><span class="badge-done">✓ ' + types.join(', ') + '</span></div>';
          }).join('');

      app.innerHTML =
        '<div class="dashboard-wrap">' +
          '<button class="student-detail-back" onclick="' + backAction + '">← ' + backLabel + '</button>' +
          '<div class="dashboard-header"><h1>' + (profile ? profile.displayName : uid) + '</h1></div>' +
          '<div class="detail-section"><h3>Vue d\'ensemble</h3>' +
            '<div class="stat-grid">' +
              '<div class="stat-box"><div class="stat-value">' + completedModules.length + '</div><div class="stat-label">Modules complétés</div></div>' +
              '<div class="stat-box"><div class="stat-value">' + totalAttempts + '</div><div class="stat-label">Tentatives totales</div></div>' +
              '<div class="stat-box"><div class="stat-value">' + (streak.currentStreak || 0) + '</div><div class="stat-label">Streak actuel</div></div>' +
              '<div class="stat-box"><div class="stat-value">' + (streak.longestStreak || 0) + '</div><div class="stat-label">Meilleur streak</div></div>' +
            '</div>' +
          '</div>' +
          '<div class="detail-section"><h3>Meilleurs scores quiz</h3>' + quizRows + '</div>' +
          '<div class="detail-section"><h3>Modules complétés</h3>' + moduleRows + '</div>' +
        '</div>';
    }
  };
  ```

- [ ] **Step 3: Ajouter la balise script dans `index.html`**

  Après `<script src="js/views/authView.js"></script>`, ajouter :
  ```html
  <script src="js/views/teacherDashboard.js"></script>
  ```

- [ ] **Step 4: Commit**
  ```bash
  git add js/views/teacherDashboard.js css/styles.css index.html
  git commit -m "feat: add TeacherDashboard view"
  ```

---

### Task 8: adminPanel.js

**Files:**
- Créer: `js/views/adminPanel.js`
- Modifier: `index.html` (ajouter balise script)

**Interfaces:**
- Consomme: `AuthService` (Task 3), `AuthGuard` (Task 4), `TeacherDashboard._viewStudent()` (Task 7), `showToast()` de app.js
- Produit: `AdminPanel` global avec `render()→Promise<void>`

- [ ] **Step 1: Créer `js/views/adminPanel.js`**

  ```js
  /* =========================================================
     Spark Learning – adminPanel.js
     Panel d'administration
     ========================================================= */

  var AdminPanel = {
    _activeTab: 'pending',
    _allUsers: [],

    render: async function() {
      var app = document.getElementById('app');
      app.innerHTML =
        '<div class="dashboard-wrap">' +
          '<div class="dashboard-header">' +
            '<h1>⚙️ Panel Admin</h1>' +
            '<div style="display:flex;gap:0.75rem;flex-wrap:wrap">' +
              '<button class="dashboard-btn-outline" onclick="TeacherDashboard.render()">Mes classes</button>' +
              '<button class="dashboard-btn-outline" onclick="navigate(\'home\')">🎓 App</button>' +
              '<button class="dashboard-btn-outline" onclick="AuthService.signOut()">Déconnexion</button>' +
            '</div>' +
          '</div>' +
          '<div class="admin-tabs">' +
            '<button class="admin-tab-btn active" id="tab-pending" onclick="AdminPanel._switchTab(\'pending\')">En attente</button>' +
            '<button class="admin-tab-btn" id="tab-all" onclick="AdminPanel._switchTab(\'all\')">Tous les comptes</button>' +
          '</div>' +
          '<div id="admin-content"></div>' +
        '</div>';
      await AdminPanel._loadTab('pending');
    },

    _switchTab: function(tab) {
      AdminPanel._activeTab = tab;
      document.querySelectorAll('.admin-tab-btn').forEach(function(b) {
        b.classList.toggle('active', b.id === 'tab-' + tab);
      });
      AdminPanel._loadTab(tab);
    },

    _loadTab: async function(tab) {
      var content = document.getElementById('admin-content');
      content.innerHTML = '<p style="color:var(--text-muted,#9090b0)">Chargement...</p>';
      if (tab === 'pending') await AdminPanel._renderPending(content);
      else await AdminPanel._renderAll(content);
    },

    _renderPending: async function(container) {
      var users = await AuthService.getPendingTeachers();
      if (users.length === 0) {
        container.innerHTML = '<div class="dashboard-empty"><h3>Aucune demande en attente</h3><p>Toutes les demandes enseignants ont été traitées.</p></div>';
        return;
      }
      container.innerHTML = users.map(function(u) {
        var date = u.createdAt ? new Date(u.createdAt.toMillis()).toLocaleDateString('fr-FR') : '—';
        return '<div class="admin-user-row" id="user-row-' + u.uid + '">' +
          '<div class="admin-user-info">' +
            '<div class="admin-user-name">' + u.displayName + '</div>' +
            '<div class="admin-user-meta">' + (u.phone || u.email || '—') + ' · Inscrit le ' + date + '</div>' +
          '</div>' +
          '<div class="admin-actions">' +
            '<button class="btn-approve" onclick="AdminPanel._approve(\'' + u.uid + '\')">✓ Approuver</button>' +
            '<button class="btn-reject" onclick="AdminPanel._reject(\'' + u.uid + '\')">✕ Refuser</button>' +
          '</div>' +
        '</div>';
      }).join('');
    },

    _renderAll: async function(container) {
      var users = await AuthService.getAllUsers();
      AdminPanel._allUsers = users;
      container.innerHTML =
        '<input class="auth-input" type="text" placeholder="Rechercher par nom, email, téléphone..." ' +
          'style="margin-bottom:1rem" oninput="AdminPanel._filterUsers(this.value)" />' +
        '<div id="users-list">' + AdminPanel._renderUserRows(users) + '</div>';
    },

    _renderUserRows: function(users) {
      if (users.length === 0) return '<p style="color:var(--text-muted,#9090b0)">Aucun résultat.</p>';
      return users.map(function(u) {
        var pendingBtns = u.status === 'pending'
          ? '<button class="btn-approve" onclick="AdminPanel._approve(\'' + u.uid + '\')">✓</button>' +
            '<button class="btn-reject" onclick="AdminPanel._reject(\'' + u.uid + '\')">✕</button>'
          : '';
        var progressBtn = u.role !== 'admin'
          ? '<button class="dashboard-btn-outline" onclick="AdminPanel._viewProgress(\'' + u.uid + '\', \'' + u.displayName.replace(/'/g, "\\'") + '\')">Progression</button>'
          : '';
        return '<div class="admin-user-row">' +
          '<div class="admin-user-info">' +
            '<div class="admin-user-name">' + u.displayName +
              '<span class="role-badge ' + u.role + '">' + u.role + '</span>' +
              '<span class="status-badge ' + u.status + '">' + u.status + '</span>' +
            '</div>' +
            '<div class="admin-user-meta">' + (u.phone || u.email || '—') + '</div>' +
          '</div>' +
          '<div class="admin-actions">' + pendingBtns + progressBtn + '</div>' +
        '</div>';
      }).join('');
    },

    _filterUsers: function(query) {
      var q = query.toLowerCase();
      var filtered = AdminPanel._allUsers.filter(function(u) {
        return u.displayName.toLowerCase().indexOf(q) !== -1 ||
               (u.email || '').toLowerCase().indexOf(q) !== -1 ||
               (u.phone || '').indexOf(q) !== -1;
      });
      var list = document.getElementById('users-list');
      if (list) list.innerHTML = AdminPanel._renderUserRows(filtered);
    },

    _approve: async function(uid) {
      try {
        await AuthService.approveTeacher(uid);
        showToast('Enseignant approuvé.', 'success');
        var row = document.getElementById('user-row-' + uid);
        if (row) row.remove();
      } catch (e) {
        showToast("Erreur lors de l'approbation.", 'error');
      }
    },

    _reject: async function(uid) {
      if (!confirm('Refuser ce compte enseignant ?')) return;
      try {
        await AuthService.rejectTeacher(uid);
        showToast('Demande refusée.', 'info');
        var row = document.getElementById('user-row-' + uid);
        if (row) row.remove();
      } catch (e) {
        showToast('Erreur.', 'error');
      }
    },

    _viewProgress: async function(uid, name) {
      // Réutilise la vue détail élève avec retour vers le panel admin
      // '__admin__' est une sentinelle : _viewStudent l'intercepte pour appeler AdminPanel.render()
      await TeacherDashboard._viewStudent(uid, 'Panel Admin', '__admin__');
    }
  };
  ```

- [ ] **Step 2: Ajouter la balise script dans `index.html`**

  Après `<script src="js/views/teacherDashboard.js"></script>`, ajouter :
  ```html
  <script src="js/views/adminPanel.js"></script>
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add js/views/adminPanel.js index.html
  git commit -m "feat: add AdminPanel view"
  ```

---

### Task 9: Intégration app.js + Création compte admin + Règles Firestore

**Files:**
- Modifier: `js/app.js` (ajouter auth gate dans DOMContentLoaded, mettre à jour render())
- Manuel: créer le compte admin dans Firestore, publier les règles de sécurité

**Interfaces:**
- Consomme: tout (Tasks 2–8)
- Produit: app entièrement gatée derrière l'auth, routage selon le rôle fonctionnel

- [ ] **Step 1: Modifier le début du DOMContentLoaded dans `js/app.js`**

  Trouver la ligne 1038 :
  ```js
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  ```

  Remplacer ces deux lignes par :
  ```js
  document.addEventListener('DOMContentLoaded', () => {
    // Firebase init — doit être en tout premier
    AuthService.init();

    const savedTheme = localStorage.getItem('sparkTheme') || 'light';
  ```

- [ ] **Step 2: Remplacer les lignes 1114–1125 de `js/app.js`**

  Trouver le bloc final du DOMContentLoaded (à partir de `// Restore route from hash`) :
  ```js
    // Restore route from hash
    const route = parseHash(window.location.hash);
    navigate(route.view, route, { skipUrlSync: true });

    // Preload all data in background for home stats and search
    if (typeof ensureAllData === 'function') {
      ensureAllData().then(() => {
        // Re-render home if we're still on it, so stats appear
        if (state.view === 'home') render();
      }).catch(() => {});
    }
  });
  ```

  Remplacer par :
  ```js
    // Auth gate — détermine quelle vue afficher
    AuthGuard.init().then(function(profile) {
      if (!profile) {
        AuthView.render();
        // Réagir aux connexions ultérieures
        AuthService.onAuthStateChanged(async function(user) {
          if (!user) { AuthView.render(); return; }
          const p = await AuthService.getUserProfile(user.uid);
          AuthGuard._currentUser = user;
          AuthGuard._currentProfile = p;
          _handleAuthUser(p);
        });
        return;
      }
      _handleAuthUser(profile);
    });
  });

  function _handleAuthUser(profile) {
    if (!profile || profile.status === 'pending' || profile.status === 'rejected') {
      AuthView.renderPending();
      return;
    }
    // Init sync Firestore en arrière-plan
    SyncService.init(AuthGuard.getCurrentUser().uid);

    if (profile.role === 'admin') {
      AdminPanel.render();
    } else if (profile.role === 'teacher') {
      TeacherDashboard.render();
    } else {
      // Élève — routage hash normal
      const route = parseHash(window.location.hash);
      navigate(route.view, route, { skipUrlSync: true });
      if (typeof ensureAllData === 'function') {
        ensureAllData().then(function() {
          if (state.view === 'home') render();
        }).catch(function() {});
      }
    }
  }
  ```

- [ ] **Step 3: Mettre à jour le render() dispatcher dans `js/app.js` (ligne 319)**

  Trouver :
  ```js
    case 'admin':      app.innerHTML = (typeof renderAdminPage === 'function') ? renderAdminPage() : ''; break;
    case 'teacher':    app.innerHTML = (typeof renderTeacherBuilder === 'function') ? renderTeacherBuilder() : ''; break;
  ```

  Remplacer par :
  ```js
    case 'admin':   AdminPanel.render(); return;
    case 'teacher': TeacherDashboard.render(); return;
  ```

  Note: `return` au lieu de `break` pour court-circuiter le `renderMath()` et `updateNavActive()` qui suivent, car ces vues async gèrent leur propre rendu.

- [ ] **Step 4: Vérifier dans le navigateur**

  Ouvrir l'app localement. Résultats attendus :
  1. Page auth apparaît (onglets Connexion / Inscription)
  2. Aucune erreur JS dans la console
  3. Onglet Inscription → formulaire avec sélection rôle (Élève / Enseignant)
  4. Choisir Téléphone → champ numéro de téléphone affiché

- [ ] **Step 5: Créer le compte admin**

  a. S'inscrire via l'UI avec votre téléphone ou email. Choisir le rôle **Élève** (on upgradera manuellement).

  b. Aller dans Firebase Console → Firestore → collection `users` → trouver votre document (l'uid est l'identifiant du document).

  c. Modifier le document : changer `role` en `admin`, `status` en `active`.

  d. Se déconnecter et se reconnecter → le Panel Admin doit s'afficher.

- [ ] **Step 6: Publier les règles de sécurité Firestore**

  Firebase Console → Firestore → Règles → Remplacer le contenu par :
  ```
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      function isAdmin() {
        return request.auth != null &&
          get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
      }
      function isTeacher() {
        return request.auth != null &&
          get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['teacher', 'admin'];
      }

      match /users/{uid} {
        allow read:   if request.auth != null && (request.auth.uid == uid || isAdmin());
        allow create: if request.auth != null && request.auth.uid == uid;
        allow update: if request.auth != null && (request.auth.uid == uid || isAdmin());
      }

      match /classes/{classCode} {
        allow read:   if request.auth != null;
        allow create: if isTeacher();
        allow update: if request.auth != null &&
          (resource.data.teacherId == request.auth.uid || isAdmin());
      }

      match /progress/{uid} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
        allow read:        if isTeacher();
      }
    }
  }
  ```
  Cliquer **Publier**.

- [ ] **Step 7: Test bout-en-bout**

  Tester dans l'ordre :
  1. **Inscription élève** → choisir Élève → s'inscrire → app Spark normale s'affiche
  2. **Inscription enseignant** → choisir Enseignant → écran "en attente" affiché
  3. **Admin approuve** → Panel Admin → onglet "En attente" → Approuver
  4. **Enseignant reconnecté** → tableau de bord enseignant affiché
  5. **Créer classe** → bouton "+ Créer une classe" → code généré et affiché
  6. **Élève rejoint classe** → se connecter en élève → (à implémenter : profil élève pour rejoindre des classes après inscription — non bloquant pour la v1, l'élève peut entrer le code à l'inscription)
  7. **Prof voit élève** → classe → "Voir la progression →"
  8. **Sync Firestore** → faire un quiz en élève → vérifier dans Firestore Console → `progress/{uid}` mis à jour

- [ ] **Step 8: Commit final et push**
  ```bash
  git add js/app.js
  git commit -m "feat: integrate Firebase auth gate and role-based routing into app.js"
  git push origin main
  ```
