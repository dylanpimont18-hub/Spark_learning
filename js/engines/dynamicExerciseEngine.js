// js/engines/dynamicExerciseEngine.js
// Générateur d’exercices dynamiques (énoncés/contextes variés)
// Strictement logique, aucune manipulation DOM

const dynamicExerciseEngine = {
  // Génère un exercice dynamique à partir d’un module data
  generate(moduleData, options = {}) {
    // moduleData doit contenir une fonction generate()
    if (typeof moduleData.generate !== 'function') return null;
    // options peut contenir des contextes, prénoms, objets, etc.
    return moduleData.generate(options);
  }
};

export default dynamicExerciseEngine;
