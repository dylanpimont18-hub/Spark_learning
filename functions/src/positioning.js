var { runStaircase, palierToLabel, STAIRCASE_STEPS } = require('./positioningStaircase');

// Dupliqué depuis functions/src/positioningBank/index.js (Task 13) à l'identique,
// délibérément : garder cette liste locale permet de tester ce fichier avec une
// banque fixture (deps.getBank injecté) sans dépendre de la banque de contenu réelle
// ni de sa validation. Si un thème change, reporter le changement dans les deux fichiers.
var THEME_IDS = {
  maths: ['numerique-calcul', 'algebre-equations', 'geometrie', 'fonctions', 'statistiques-probabilites'],
  physique: ['mecanique', 'electricite', 'energie-thermique', 'matiere-chimie', 'ondes-optique']
};

function findQuestion(bank, themeId, questionId) {
  var theme = bank.themes[themeId];
  if (!theme) return null;
  var found = null;
  Object.keys(theme.levels).forEach(function (palier) {
    theme.levels[palier].forEach(function (q) {
      if (q.id === questionId) found = q;
    });
  });
  return found;
}

async function handleGetLinkInfo(testRef) {
  var snap = await testRef.get();
  if (!snap.exists) throw new Error('Lien invalide.');
  var data = snap.data();
  var results = data.results || {};
  return {
    studentNameKnown: !!data.studentId || !!data.studentNameInput,
    alreadyCompleted: {
      maths: !!(results.maths && results.maths.status === 'completed'),
      physique: !!(results.physique && results.physique.status === 'completed')
    }
  };
}

async function handleSubmitResult(testRef, params, deps) {
  var subject = params.subject;
  var themeIds = THEME_IDS[subject];
  if (!themeIds) throw new Error('Matière invalide : ' + subject);

  var snap = await testRef.get();
  if (!snap.exists) throw new Error('Lien invalide.');
  var data = snap.data();
  var existingResults = data.results || {};
  if (existingResults[subject] && existingResults[subject].status === 'completed') {
    throw new Error('Cette matière a déjà été testée avec ce lien.');
  }

  var bank = deps.getBank(subject);
  var answers = Array.isArray(params.answers) ? params.answers : [];
  var byTheme = {};
  themeIds.forEach(function (themeId) { byTheme[themeId] = []; });

  answers.forEach(function (a) {
    if (!byTheme[a.themeId]) throw new Error('Thème inconnu : ' + a.themeId);
    var question = findQuestion(bank, a.themeId, a.questionId);
    if (!question) throw new Error('Question inconnue : ' + a.questionId);
    byTheme[a.themeId].push(question.correctIndex === a.selectedOption);
  });

  var themeResults = {};
  themeIds.forEach(function (themeId) {
    var flags = byTheme[themeId];
    if (flags.length !== STAIRCASE_STEPS.length) {
      throw new Error('Réponses incomplètes pour le thème : ' + themeId);
    }
    themeResults[themeId] = {
      label: bank.themes[themeId].label,
      level: palierToLabel(runStaircase(flags))
    };
  });

  var patch = {};
  patch['results.' + subject] = {
    status: 'completed',
    themes: themeResults,
    completedAt: deps.now()
  };
  if (params.studentName && !data.studentNameInput && !data.studentId) {
    patch.studentNameInput = params.studentName;
  }
  if (params.studentLevel && !data.studentLevelInput && !data.studentId) {
    patch.studentLevelInput = params.studentLevel;
  }

  await testRef.update(patch);
  return { themes: themeResults };
}

module.exports = {
  handleGetLinkInfo: handleGetLinkInfo,
  handleSubmitResult: handleSubmitResult,
  THEME_IDS: THEME_IDS
};
