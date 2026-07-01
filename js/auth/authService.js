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

    // Dénormalise le prof propriétaire sur le doc progress de l'élève,
    // nécessaire aux règles Firestore pour autoriser la lecture de sa progression.
    if (cls.teacherId) {
      await this._db.collection('progress').doc(uid).set({
        teacherIds: firebase.firestore.FieldValue.arrayUnion(cls.teacherId)
      }, { merge: true });
    }
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
      .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  },

  /* ── Firestore : progression élèves ── */
  async getStudentProgress(uid) {
    const doc = await this._db.collection('progress').doc(uid).get();
    return doc.exists ? doc.data() : null;
  },

  async removeStudentFromClass(studentUid, classCode) {
    const cls = await this.getClass(classCode);
    const batch = this._db.batch();
    batch.update(this._db.collection('users').doc(studentUid), {
      classes: firebase.firestore.FieldValue.arrayRemove(classCode)
    });
    batch.update(this._db.collection('classes').doc(classCode), {
      students: firebase.firestore.FieldValue.arrayRemove(studentUid)
    });
    await batch.commit();

    // Retire le prof de la liste dénormalisée sur le doc progress (perte d'accès à cette progression).
    // Note : si l'élève reste dans une autre classe du même enseignant, cet enseignant
    // perdra l'accès à tort — cas limite acceptable tant qu'un enseignant a rarement
    // plusieurs classes avec le même élève.
    if (cls && cls.teacherId) {
      try {
        await this._db.collection('progress').doc(studentUid).update({
          teacherIds: firebase.firestore.FieldValue.arrayRemove(cls.teacherId)
        });
      } catch (e) { /* le doc progress peut ne pas exister si l'élève n'a rien fait */ }
    }
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

  /* ── Admin : migration ── */
  // À exécuter une seule fois après déploiement des nouvelles règles Firestore :
  // reconstruit le champ progress/{uid}.teacherIds pour tous les élèves déjà inscrits
  // dans une classe (nécessaire pour que les enseignants gardent l'accès à leur progression).
  async backfillProgressTeacherIds() {
    const classesSnap = await this._db.collection('classes').get();
    let updated = 0;
    for (const doc of classesSnap.docs) {
      const cls = doc.data();
      if (!cls.teacherId || !Array.isArray(cls.students) || !cls.students.length) continue;
      for (const studentUid of cls.students) {
        try {
          await this._db.collection('progress').doc(studentUid).set({
            teacherIds: firebase.firestore.FieldValue.arrayUnion(cls.teacherId)
          }, { merge: true });
          updated++;
        } catch (e) { console.warn('[backfillProgressTeacherIds] échec pour', studentUid, e); }
      }
    }
    return updated;
  },

  /* ── Admin ── */
  async getPendingTeachers() {
    const snap = await this._db.collection('users')
      .where('role', '==', 'teacher')
      .where('status', '==', 'pending')
      .get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
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
    const snap = await this._db.collection('users').get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  },

  /* ── Admin : stats ── */
  async getAdminStats() {
    const [usersSnap, classesSnap, progressSnap] = await Promise.all([
      this._db.collection('users').get(),
      this._db.collection('classes').get(),
      this._db.collection('progress').get()
    ]);
    const users = usersSnap.docs.map(d => d.data());
    return {
      totalStudents: users.filter(u => u.role === 'student').length,
      activeTeachers: users.filter(u => u.role === 'teacher' && u.status === 'active').length,
      totalClasses: classesSnap.size,
      totalProgressDocs: progressSnap.size
    };
  },

  /* ── Admin : classes orphelines ── */
  async getOrphanClasses() {
    const classesSnap = await this._db.collection('classes').get();
    const classes = classesSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      .filter(c => !c.status || c.status !== 'archived');
    if (!classes.length) return [];
    const teacherUids = [...new Set(classes.map(c => c.teacherId).filter(Boolean))];
    if (!teacherUids.length) return classes;
    const teacherDocs = await Promise.all(
      teacherUids.map(uid => this._db.collection('users').doc(uid).get())
    );
    const teacherMap = {};
    teacherDocs.forEach(d => { if (d.exists) teacherMap[d.id] = d.data(); });
    return classes.filter(cls => {
      const t = teacherMap[cls.teacherId];
      return !t || t.status !== 'active';
    });
  },

  async archiveClass(classId) {
    await this._db.collection('classes').doc(classId).update({ status: 'archived' });
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
    return doc.exists ? doc.data() : { teacherSignupEnabled: true, maintenanceMode: false, maxStudentsPerClass: 35 };
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
