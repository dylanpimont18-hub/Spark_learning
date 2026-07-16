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
          '<div class="tt-sessions-header">' +
            '<h2 class="tt-section-title">Historique des séances</h2>' +
            '<button class="tt-add-btn" onclick="TutoringStudent._showSessionForm()">+ Nouvelle séance</button>' +
          '</div>' +
          TutoringStudent._renderSessionsList() +
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
};
