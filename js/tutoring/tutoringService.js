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
