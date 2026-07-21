var REQUIRED_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function validateQuestion(q, context) {
  if (!q || typeof q.id !== 'string' || !q.id) {
    throw new Error(context + ': id de question manquant');
  }
  if (typeof q.question !== 'string' || !q.question.trim()) {
    throw new Error(context + ' (' + q.id + '): champ question manquant');
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(context + ' (' + q.id + '): il faut exactement 4 options');
  }
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) {
    throw new Error(context + ' (' + q.id + '): correctIndex doit être un entier entre 0 et 3');
  }
}

function validateTheme(theme) {
  if (!theme || typeof theme.id !== 'string' || !theme.id) {
    throw new Error('Thème sans id valide');
  }
  if (typeof theme.label !== 'string' || !theme.label) {
    throw new Error(theme.id + ': label manquant');
  }
  if (!theme.levels || typeof theme.levels !== 'object') {
    throw new Error(theme.id + ': levels manquant');
  }

  var seenIds = {};
  REQUIRED_LEVELS.forEach(function (palier) {
    var pool = theme.levels[palier];
    if (!Array.isArray(pool) || pool.length < 2 || pool.length > 3) {
      throw new Error(theme.id + ': palier ' + palier + ' doit contenir 2 ou 3 questions');
    }
    pool.forEach(function (q) {
      validateQuestion(q, theme.id + ' palier ' + palier);
      if (seenIds[q.id]) {
        throw new Error(theme.id + ': id de question dupliqué (' + q.id + ')');
      }
      seenIds[q.id] = true;
    });
  });
}

function validateBank(bank, expectedThemeIds) {
  if (!bank || !bank.themes) {
    throw new Error('Banque invalide : champ themes manquant');
  }
  expectedThemeIds.forEach(function (themeId) {
    if (!bank.themes[themeId]) {
      throw new Error('Thème manquant dans la banque : ' + themeId);
    }
    validateTheme(bank.themes[themeId]);
  });
}

module.exports = {
  validateQuestion: validateQuestion,
  validateTheme: validateTheme,
  validateBank: validateBank
};
