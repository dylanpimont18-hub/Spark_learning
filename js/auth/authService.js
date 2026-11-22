/* =========================================================
   Spark Learning – authService.js
   Firebase init + toutes les opérations auth et Firestore
   ========================================================= */

const AuthService = {
  _auth: null,
  _db: null,

  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
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

  /* ── Email auth ── */
  async signInWithEmail(email, password) {
    return await this._auth.signInWithEmailAndPassword(email, password);
  },

  /* ── Firestore : profils utilisateurs ── */
  async getUserProfile(uid) {
    const doc = await this._db.collection('users').doc(uid).get();
    return doc.exists ? { uid: doc.id, ...doc.data() } : null;
  },

  async updateUserProfile(uid, patch) {
    await this._db.collection('users').doc(uid).update(patch);
  },

  /* ── Admin ── */
  async getAllUsers() {
    const snap = await this._db.collection('users').get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  },

  /* ── Admin : rôles ── */
  async setUserRole(uid, role) {
    await this.updateUserProfile(uid, { role });
  },

  /* ── Admin : annonce globale ── */
  async getAnnouncement() {
    const doc = await this._db.collection('config').doc('announcement').get();
    return doc.exists ? doc.data() : null;
  },

  async setAnnouncement(text) {
    const uid = this.getCurrentUser().uid;
    await this._db.collection('config').doc('announcement').set({
      text,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: uid
    });
  },

  async clearAnnouncement() {
    await this._db.collection('config').doc('announcement').delete();
  },

  // Écoute en temps réel : dès que l'admin publie/dépublie, tous les utilisateurs déjà
  // sur l'app (invités compris) voient l'annonce apparaître/disparaître sans recharger.
  // Retourne la fonction unsubscribe (à appeler avant de re-souscrire, pour ne jamais empiler
  // plusieurs listeners — cf. bug d'AuthGuard corrigé précédemment).
  watchAnnouncement(callback) {
    return this._db.collection('config').doc('announcement').onSnapshot(
      function(doc) { callback(doc.exists ? doc.data() : null); },
      function(e) { console.warn('[AuthService] watchAnnouncement error:', e); }
    );
  },

  /* ── Admin : paramètres plateforme ── */
  async getPlatformSettings() {
    const doc = await this._db.collection('config').doc('settings').get();
    return doc.exists ? doc.data() : { maintenanceMode: false, maxStudentsPerClass: 35 };
  },

  async savePlatformSettings(data) {
    await this._db.collection('config').doc('settings').set(data, { merge: true });
  },

  /* ── Admin : verrouillage/maintenance des modules (source de vérité serveur) ── */
  async getModuleAccess() {
    const doc = await this._db.collection('config').doc('moduleAccess').get();
    return doc.exists ? (doc.data().statuses || {}) : {};
  },

  async saveModuleAccess(statuses) {
    const user = this.getCurrentUser();
    await this._db.collection('config').doc('moduleAccess').set({
      statuses: statuses,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: user ? user.uid : null
    });
  },

  /* ── Admin : audit log ── */
  async logAdminAction(action, targetUid, details) {
    const user = this.getCurrentUser();
    await this._db.collection('adminLogs').add({
      action,
      targetUid: targetUid || null,
      details: details || null,
      adminUid: user.uid,
      adminName: user.displayName || user.email || user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getAdminLogs(limitCount) {
    const snap = await this._db.collection('adminLogs')
      .orderBy('createdAt', 'desc')
      .limit(limitCount || 50)
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
};
