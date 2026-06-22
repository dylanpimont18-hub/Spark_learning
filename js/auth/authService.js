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
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
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
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
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
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  }
};
