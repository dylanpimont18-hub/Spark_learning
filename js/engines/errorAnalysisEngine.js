// js/engines/errorAnalysisEngine.js
// Analyse des erreurs et recommandations personnalisées
// Strictement logique, aucune manipulation DOM

const errorAnalysisEngine = {
  // Analyse les réponses et retourne les difficultés récurrentes
  analyze(userHistory) {
    // userHistory : [{moduleId, success, attempts, errors:[]}, ...]
    const difficulties = {};
    userHistory.forEach(entry => {
      if (!entry.success) {
        difficulties[entry.moduleId] = (difficulties[entry.moduleId] || 0) + 1;
      }
    });
    return difficulties;
  },
  // Propose des recommandations ciblées
  recommend(difficulties, modules) {
    // modules : liste des modules disponibles
    return Object.keys(difficulties)
      .sort((a, b) => difficulties[b] - difficulties[a])
      .map(moduleId => modules.find(m => m.id === moduleId));
  }
};

export default errorAnalysisEngine;
