// js/engines/progressionEngine.js
// Générateur de parcours progressifs pour Spark Learning
// Respecte la séparation stricte : aucune manipulation DOM ici

const progressionEngine = {
  // Lance un parcours progressif sur une liste de modules
  startProgressivePath({modules, niveau, onStep}) {
    // modules : array d'identifiants de modules (ex: ['3e-thales', '3e-systemes'])
    // niveau : difficulté initiale
    // onStep : callback appelée à chaque étape
    let current = 0;
    function nextStep(userState) {
      if (current >= modules.length) return null;
      const moduleId = modules[current];
      current++;
      if (onStep) onStep(moduleId, userState, current);
      return moduleId;
    }
    return { nextStep };
  },
  // Génère un parcours par niveau
  generatePathByLevel(level) {
    // À compléter : sélection intelligente selon le niveau
    return [];
  }
};

export default progressionEngine;
