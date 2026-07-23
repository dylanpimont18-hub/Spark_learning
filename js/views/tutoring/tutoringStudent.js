/* =========================================================
   Spark Learning – tutoringStudent.js
   Fiche élève de cours particuliers : notes, historique séances
   ========================================================= */

var TutoringStudent = {
  _student: null,
  _sessions: [],
  _positioningTests: [],

  _esc: function(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  },

  _unsubscribeSessions: null,
  _unsubscribePositioning: null,

  render: async function(studentId) {
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      TutoringStudent._student = await TutoringService.getStudent(studentId);
      if (!TutoringStudent._student) {
        app.innerHTML = '<div class="tt-error">Élève introuvable.</div>';
        return;
      }
      if (TutoringStudent._unsubscribeSessions) {
        TutoringStudent._unsubscribeSessions();
      }
      TutoringStudent._unsubscribeSessions = TutoringService.watchStudentSessions(studentId, function(sessions) {
        TutoringStudent._sessions = sessions;
        TutoringStudent._renderFiche();
      });
      if (TutoringStudent._unsubscribePositioning) {
        TutoringStudent._unsubscribePositioning();
      }
      TutoringStudent._unsubscribePositioning = TutoringService.watchStudentPositioningTests(studentId, function(tests) {
        TutoringStudent._positioningTests = tests;
        TutoringStudent._renderFiche();
      });
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
          '<button class="tt-add-btn" onclick="TutoringStudent._sendPositioningLink()">Envoyer un test de positionnement</button>' +
          '<button class="tt-archive-btn" onclick="TutoringStudent._archive()">Archiver</button>' +
        '</div>' +
        TutoringStudent._renderPositioningReports() +
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
    updatePageMeta();
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
        TutoringStudent._renderGenerationBadge(sess) +
        (sess.status === 'draft'
          ? '<button class="tt-rate-btn" onclick="TutoringStudent._showRatingForm(\'' + TutoringStudent._esc(sess.id) + '\')">Noter cette séance</button>'
          : '<div class="tt-session-rating">Note : ' + sess.rating + '/10' + (sess.ratingRemarks ? ' — ' + TutoringStudent._esc(sess.ratingRemarks) : '') + '</div>'
        ) +
      '</div>';
    }).join('');
  },

  _renderGenerationBadge: function(sess) {
    if (!sess.generationStatus || sess.generationStatus === 'none') return '';
    if (sess.generationStatus === 'generating') {
      return '<div class="tt-gen-badge tt-gen-generating"><span class="tt-gen-spinner"></span>Génération en cours...</div>';
    }
    if (sess.generationStatus === 'generated') {
      return '<div class="tt-gen-badge tt-gen-generated">Cours généré — <a href="' + TutoringStudent._esc(sess.pdfUrl) + '" target="_blank">Télécharger le PDF</a></div>';
    }
    if (sess.generationStatus === 'failed') {
      return '<div class="tt-gen-badge tt-gen-failed">Échec de la génération : ' + TutoringStudent._esc(sess.generationError || '') +
        '<button class="tt-rate-btn" onclick="TutoringStudent._requestGeneration(\'' + TutoringStudent._esc(sess.id) + '\', \'' + TutoringStudent._esc(sess.contentType || 'cours') + '\', ' + (sess.figuresCount || 0) + ')">Générer un cours</button></div>';
    }
    return '';
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
          '<label class="tt-label">Type de contenu (pour la génération IA)<select id="tt-session-content-type" class="tt-input">' +
            '<option value="cours">Fiche de cours</option>' +
            '<option value="exercices">Exercices corrigés</option>' +
            '<option value="les_deux">Les deux</option>' +
          '</select></label>' +
          '<label class="tt-label">Nombre de figures<input type="number" id="tt-session-figures-count" class="tt-input" min="0" value="2"/></label>' +
          '<div class="tt-form-actions">' +
            '<button type="submit" class="tt-submit-btn">Enregistrer la séance</button>' +
            '<button type="button" class="tt-generate-btn" onclick="TutoringStudent._submitSessionForm(event, true)">Générer un cours</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    document.getElementById('tt-session-date').valueAsDate = new Date();
  },

  _submitSessionForm: function(e, generate) {
    e.preventDefault();
    var date = document.getElementById('tt-session-date').value;
    var subject = document.getElementById('tt-session-subject').value.trim();
    var topic = document.getElementById('tt-session-topic').value.trim();
    var difficulties = document.getElementById('tt-session-difficulties').value.trim();
    var contentType = document.getElementById('tt-session-content-type').value;
    var figuresCount = parseInt(document.getElementById('tt-session-figures-count').value, 10) || 0;

    if (!date || !subject || !topic) {
      showToast('Date, matière et sujet sont obligatoires.', 'error');
      return false;
    }

    TutoringService.createSession(TutoringStudent._student.id, {
      date: date,
      subject: subject,
      topic: topic,
      difficultiesObserved: difficulties
    }).then(function(sessionId) {
      if (!generate) {
        showToast('Séance enregistrée !', 'success');
        TutoringStudent._renderFiche();
        return;
      }
      return TutoringService.requestGeneration(sessionId, { contentType: contentType, figuresCount: figuresCount })
        .then(function() {
          showToast('Génération lancée !', 'success');
          TutoringStudent._renderFiche();
        });
    }).catch(function() {
      showToast('Erreur lors de l\'enregistrement.', 'error');
    });

    return false;
  }
  ,
  _requestGeneration: function(sessionId, contentType, figuresCount) {
    TutoringService.requestGeneration(sessionId, { contentType: contentType, figuresCount: figuresCount })
      .then(function() { showToast('Génération relancée !', 'success'); })
      .catch(function() { showToast('Erreur lors du lancement de la génération.', 'error'); });
  }
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
  ,
  _renderPositioningReports: function() {
    var completedTests = TutoringStudent._positioningTests.filter(function(t) {
      var r = t.results || {};
      return (r.maths && r.maths.status === 'completed') || (r.physique && r.physique.status === 'completed');
    });
    if (completedTests.length === 0) return '';

    var declaredLevel = TutoringStudent._student.level;
    return '<div class="pt-report-block">' +
      '<h2 class="tt-section-title">Test de positionnement</h2>' +
      completedTests.map(function(t) {
        return ['maths', 'physique'].map(function(subject) {
          var r = t.results && t.results[subject];
          if (!r || r.status !== 'completed') return '';
          var themesHtml = Object.keys(r.themes).map(function(themeId) {
            var theme = r.themes[themeId];
            return '<span class="pt-theme-badge">' + TutoringStudent._esc(theme.label || themeId) + ' : ' + TutoringStudent._esc(theme.level) + '</span>';
          }).join('');
          var recommendation = positioningBuildRecommendation(declaredLevel, r.themes);
          return '<div class="pt-subject-report">' +
            '<h3 class="pt-subject-title">' + (subject === 'maths' ? 'Maths' : 'Physique-Chimie') + '</h3>' +
            '<div class="pt-themes-grid">' + themesHtml + '</div>' +
            '<p class="pt-recommendation">' + TutoringStudent._esc(recommendation) + '</p>' +
          '</div>';
        }).join('');
      }).join('') +
    '</div>';
  },

  _sendPositioningLink: async function() {
    try {
      var token = await TutoringService.createPositioningTest({ studentId: TutoringStudent._student.id });
      var url = window.location.origin + '/positionnement/' + token;
      window.prompt('Lien à envoyer à ' + TutoringStudent._student.firstName + ' (Ctrl+C puis Entrée) :', url);
    } catch (e) {
      showToast('Erreur lors de la création du lien.', 'error');
    }
  }
};
