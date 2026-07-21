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
  },

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
  },

  /* ── Test de positionnement ── */
  createPositioningTest: async function(opts) {
    var uid = AuthService.getCurrentUser().uid;
    var ref = await this._db().collection('positioningTests').add({
      studentId: (opts && opts.studentId) || null,
      studentNameInput: null,
      studentLevelInput: null,
      createdBy: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      results: {},
      reviewed: false
    });
    return ref.id;
  },

  getPendingPositioningTests: async function() {
    var snap = await this._db().collection('positioningTests')
      .where('studentId', '==', null)
      .get();
    return snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); })
      .filter(function(t) {
        if (t.reviewed) return false;
        var r = t.results || {};
        return (r.maths && r.maths.status === 'completed') || (r.physique && r.physique.status === 'completed');
      });
  },

  watchStudentPositioningTests: function(studentId, callback) {
    return this._db().collection('positioningTests')
      .where('studentId', '==', studentId)
      .onSnapshot(function(snap) {
        callback(snap.docs.map(function(d) { return Object.assign({ id: d.id }, d.data()); }));
      });
  },

  markPositioningTestReviewed: async function(token) {
    await this._db().collection('positioningTests').doc(token).update({ reviewed: true });
  },

  attachPositioningTestToNewStudent: async function(token, studentData) {
    var studentId = await this.createStudent(studentData);
    await this._db().collection('positioningTests').doc(token).update({ studentId: studentId, reviewed: true });
    return studentId;
  },

  attachPositioningTestToStudent: async function(token, studentId) {
    await this._db().collection('positioningTests').doc(token).update({ studentId: studentId, reviewed: true });
  }
};
