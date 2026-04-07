// js/engines/guidedNarrationEngine.js
// Narration guidée (démonstrations pas à pas, style socratique)
// Strictement logique, aucune manipulation DOM

const guidedNarrationEngine = {
  // Décompose une démonstration en étapes
  decompose(demonstration) {
    // demonstration : tableau d'étapes [{question, hint, answer}]
    let current = 0;
    function nextStep(userInput) {
      if (current >= demonstration.length) return null;
      const step = demonstration[current];
      // Optionnel : valider userInput ici
      current++;
      return step;
    }
    return { nextStep };
  }
};

export default guidedNarrationEngine;
