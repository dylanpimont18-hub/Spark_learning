/* =========================================================
   Spark Learning – positioningTest.js
   Page publique (non authentifiée) du test de positionnement
   ========================================================= */

var PT_STAIRCASE_STEPS = [4, 2, 1, 1, 1, 1];
var PT_START_PALIER = 5;
var PT_MIN_PALIER = 1;
var PT_MAX_PALIER = 9;

function _ptClampPalier(v) { return Math.max(PT_MIN_PALIER, Math.min(PT_MAX_PALIER, v)); }

var PositioningTest = {
  _token: null,
  _linkInfo: null,
  _studentName: '',
  _studentLevel: '',
  _subject: null,
  _bank: null,
  _themeIds: [],
  _themeIndex: 0,
  _stepIndex: 0,
  _palier: PT_START_PALIER,
  _answers: [],
  _currentQuestion: null,

  // escapeHtml (js/utils/ui-helpers.js) charge après ce fichier dans index.html :
  // wrapper nécessaire, une référence directe échouerait au chargement (ReferenceError).
  _esc: function(str) { return escapeHtml(str); },

  render: async function(token) {
    PositioningTest._token = token;
    var app = document.getElementById('app');
    app.innerHTML = '<div class="tt-loading">Chargement...</div>';
    try {
      PositioningTest._linkInfo = await PositioningClient.getLinkInfo(token);
    } catch (e) {
      app.innerHTML = '<div class="tt-error">Ce lien de test n\'est pas valide.</div>';
      return;
    }
    if (PositioningTest._linkInfo.studentNameKnown) {
      PositioningTest._renderSubjectChoice();
    } else {
      PositioningTest._renderIntro();
    }
  },

  _renderIntro: function() {
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<h1 class="pt-title">Test de positionnement</h1>' +
        '<p class="pt-intro-text">Avant de commencer, dis-nous qui tu es.</p>' +
        '<form class="tt-form" onsubmit="return PositioningTest._submitIntro(event)">' +
          '<label class="tt-label">Prénom et nom<input type="text" id="pt-intro-name" class="tt-input" required/></label>' +
          '<label class="tt-label">Classe (ex: 3e, 1re, Tle, BTS 1)<input type="text" id="pt-intro-level" class="tt-input" required/></label>' +
          '<button type="submit" class="tt-submit-btn">Continuer</button>' +
        '</form>' +
      '</div>';
  },

  _submitIntro: function(e) {
    e.preventDefault();
    var name = document.getElementById('pt-intro-name').value.trim();
    var level = document.getElementById('pt-intro-level').value.trim();
    if (!name || !level) {
      showToast('Prénom/nom et classe sont obligatoires.', 'error');
      return false;
    }
    PositioningTest._studentName = name;
    PositioningTest._studentLevel = level;
    PositioningTest._renderSubjectChoice();
    return false;
  },

  _renderSubjectChoice: function() {
    var completed = PositioningTest._linkInfo.alreadyCompleted;
    if (completed.maths && completed.physique) {
      document.getElementById('app').innerHTML =
        '<div class="pt-container"><p class="pt-intro-text">Les deux matières ont déjà été testées avec ce lien. Merci !</p></div>';
      return;
    }
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<h1 class="pt-title">Quelle matière veux-tu tester ?</h1>' +
        '<div class="pt-subject-choice">' +
          (completed.maths ? '' : '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'maths\')">Maths</button>') +
          (completed.physique ? '' : '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'physique\')">Physique-Chimie</button>') +
        '</div>' +
      '</div>';
  },

  _chooseSubject: async function(subject) {
    document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-loading">Chargement des questions...</div></div>';
    try {
      PositioningTest._subject = subject;
      PositioningTest._bank = await PositioningClient.getQuestionBank(subject);
      PositioningTest._themeIds = Object.keys(PositioningTest._bank.themes);
      PositioningTest._themeIndex = 0;
      PositioningTest._stepIndex = 0;
      PositioningTest._palier = PT_START_PALIER;
      PositioningTest._answers = [];
      PositioningTest._renderQuestion();
    } catch (e) {
      document.getElementById('app').innerHTML =
        '<div class="pt-container"><div class="tt-error">Erreur de chargement des questions.' +
          '<button type="button" class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'' + subject + '\')">Réessayer</button>' +
        '</div></div>';
    }
  },

  _renderQuestion: function() {
    var themeId = PositioningTest._themeIds[PositioningTest._themeIndex];
    var theme = PositioningTest._bank.themes[themeId];
    var pool = theme.levels[PositioningTest._palier];
    var candidates = pool;
    if (PositioningTest._currentQuestion && pool.length > 1) {
      var prevId = PositioningTest._currentQuestion.id;
      var filtered = pool.filter(function(item) { return item.id !== prevId; });
      if (filtered.length > 0) candidates = filtered;
    }
    var q = candidates[Math.floor(Math.random() * candidates.length)];
    PositioningTest._currentQuestion = q;

    var totalQuestions = PositioningTest._themeIds.length * PT_STAIRCASE_STEPS.length;
    var doneQuestions = PositioningTest._themeIndex * PT_STAIRCASE_STEPS.length + PositioningTest._stepIndex;
    var progressPct = Math.round((doneQuestions / totalQuestions) * 100);

    // Le contenu source met souvent la bonne réponse en position 0 (c'est autorisé,
    // voir Content Authoring Guide) : on mélange l'ordre d'affichage ici pour que ça
    // ne soit jamais visible/devinable côté élève. onclick reçoit l'index ORIGINAL
    // (celui qui correspond à q.correctIndex et sera soumis au serveur), pas la
    // position affichée.
    var displayOrder = [0, 1, 2, 3];
    for (var i = displayOrder.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = displayOrder[i]; displayOrder[i] = displayOrder[j]; displayOrder[j] = tmp;
    }
    var optionsHtml = displayOrder.map(function(originalIndex) {
      return '<button class="pt-option-btn" onclick="PositioningTest._answerQuestion(' + originalIndex + ')">' + q.options[originalIndex] + '</button>';
    }).join('');

    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<div class="pt-progress-bar"><div class="pt-progress-fill" style="width:' + progressPct + '%"></div></div>' +
        '<p class="pt-theme-label">' + PositioningTest._esc(theme.label) + '</p>' +
        '<div class="pt-question">' + q.question + '</div>' +
        '<div class="pt-options">' + optionsHtml + '</div>' +
      '</div>';
    if (typeof renderMath === 'function') renderMath();
  },

  _answerQuestion: function(selectedOption) {
    var themeId = PositioningTest._themeIds[PositioningTest._themeIndex];
    var q = PositioningTest._currentQuestion;
    PositioningTest._answers.push({ themeId: themeId, questionId: q.id, selectedOption: selectedOption });

    var correct = selectedOption === q.correctIndex;
    var step = PT_STAIRCASE_STEPS[PositioningTest._stepIndex];
    PositioningTest._palier = _ptClampPalier(PositioningTest._palier + (correct ? step : -step));
    PositioningTest._stepIndex++;

    if (PositioningTest._stepIndex >= PT_STAIRCASE_STEPS.length) {
      PositioningTest._themeIndex++;
      PositioningTest._stepIndex = 0;
      PositioningTest._palier = PT_START_PALIER;
    }

    if (PositioningTest._themeIndex >= PositioningTest._themeIds.length) {
      PositioningTest._finishSubject();
      return;
    }
    PositioningTest._renderQuestion();
  },

  _finishSubject: async function() {
    document.getElementById('app').innerHTML = '<div class="pt-container"><div class="tt-loading">Envoi en cours...</div></div>';
    try {
      await PositioningClient.submitResult(PositioningTest._token, PositioningTest._subject, {
        studentName: PositioningTest._studentName || undefined,
        studentLevel: PositioningTest._studentLevel || undefined,
        answers: PositioningTest._answers
      });
      PositioningTest._linkInfo.alreadyCompleted[PositioningTest._subject] = true;
      PositioningTest._renderThankYou();
    } catch (e) {
      // Les réponses (_answers) restent en mémoire : on retente juste l'envoi,
      // pas besoin de refaire tout le test adaptatif (~24 questions).
      document.getElementById('app').innerHTML =
        '<div class="pt-container"><div class="tt-error">Une erreur est survenue lors de l\'envoi de tes réponses. Vérifie ta connexion et réessaie.' +
          '<button type="button" class="tt-submit-btn" onclick="PositioningTest._finishSubject()">Réessayer l\'envoi</button>' +
        '</div></div>';
    }
  },

  _renderThankYou: function() {
    var completed = PositioningTest._linkInfo.alreadyCompleted;
    var otherSubject = PositioningTest._subject === 'maths' ? 'physique' : 'maths';
    var otherLabel = otherSubject === 'maths' ? 'Maths' : 'Physique-Chimie';
    var offerOther = !completed[otherSubject]
      ? '<button class="tt-submit-btn" onclick="PositioningTest._chooseSubject(\'' + otherSubject + '\')">Tester aussi ' + otherLabel + '</button>'
      : '';
    document.getElementById('app').innerHTML =
      '<div class="pt-container">' +
        '<p class="pt-intro-text">Merci, ton résultat a bien été transmis !</p>' +
        offerOther +
      '</div>';
  }
};
