var { validateBank } = require('./validate');
var mathsBank = require('./maths');
var physiqueBank = require('./physique');

// Cette liste est intentionnellement dupliquée dans functions/src/positioning.js
// (Task 14) : c'est une petite énumération stable (10 ids), pas du contenu — la
// dupliquer permet de tester positioning.js avec une banque fixture, sans faire
// dépendre ses tests de la validation de toute la banque de contenu réelle.
// Si un thème est ajouté/retiré/renommé ici, reporter le changement dans les deux fichiers.
var THEME_IDS = {
  maths: ['numerique-calcul', 'algebre-equations', 'geometrie', 'fonctions', 'statistiques-probabilites'],
  physique: ['mecanique', 'electricite', 'energie-thermique', 'matiere-chimie', 'ondes-optique']
};

validateBank(mathsBank, THEME_IDS.maths);
validateBank(physiqueBank, THEME_IDS.physique);

var BANKS = { maths: mathsBank, physique: physiqueBank };

function getBank(subject) {
  if (!BANKS[subject]) {
    throw new Error('Matière inconnue : ' + subject);
  }
  return BANKS[subject];
}

module.exports = { getBank: getBank, THEME_IDS: THEME_IDS };
