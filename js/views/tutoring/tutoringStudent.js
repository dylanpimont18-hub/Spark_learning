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
