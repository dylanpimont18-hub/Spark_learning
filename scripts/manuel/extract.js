/* =========================================================
   Spark Learning – scripts/manuel/extract.js
   Charge un module de js/data/ hors navigateur et instancie
   ses exercices de facon REPRODUCTIBLE.

   Les modules sont des scripts globaux : ils appellent
   window.MODULES.push({...}) et utilisent rand/randFloat/pick
   definis dans js/data/helpers.js. On recree donc ce contexte
   avec le module natif vm.

   Reproductibilite : rand/randFloat/pick s'appuient tous sur
   Math.random. En fournissant au contexte un Math.random
   ensemence, tout le tirage devient deterministe sans toucher
   helpers.js ni aucun module. Sans cela, deux compilations du
   meme ouvrage donneraient deux livres differents.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { validerModule, normaliserExercice } = require('./schema.js');

const RACINE = path.resolve(__dirname, '..', '..');

function mulberry32(graine) {
  let a = graine >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function chargerModule(cheminRelatif, options) {
  const opts = options || {};
  const graine = typeof opts.graine === 'number' ? opts.graine : 0;
  const tirages = typeof opts.tirages === 'number' ? opts.tirages : 3;

  const cheminAbsolu = path.join(RACINE, cheminRelatif);
  if (!fs.existsSync(cheminAbsolu)) {
    throw new Error('Module introuvable : ' + cheminRelatif);
  }

  // Math derive, pour ne pas alterer le Math global du processus
  const MathEnsemence = Object.create(Math);
  MathEnsemence.random = mulberry32(graine);

  const bac = { window: { MODULES: [] }, console, Math: MathEnsemence };
  vm.createContext(bac);

  // helpers.js definit window.MODULES et des const de haut niveau
  // (rand, randFloat, pick, fr) : il doit etre execute dans le MEME
  // script que le module pour que ces const lui soient visibles.
  //
  // figures-exercices.js suit la meme regle (2026-09-12) : il declare les
  // generateurs de figures parametriques (figureRectangle, figureTriangle...)
  // que les exercice.generate() appellent pour construire leur figure a partir
  // des valeurs du tirage. Il vient APRES helpers.js, dont il utilise fr().
  const helpers = fs.readFileSync(path.join(RACINE, 'js/data/helpers.js'), 'utf8');
  const figures = fs.readFileSync(path.join(RACINE, 'js/data/figures-exercices.js'), 'utf8');
  const source = fs.readFileSync(cheminAbsolu, 'utf8');
  vm.runInContext(helpers + '\n' + figures + '\n' + source, bac, { filename: cheminRelatif });

  const module_ = bac.window.MODULES[0];
  if (!module_) throw new Error('Aucun module pousse par ' + cheminRelatif);

  const validation = validerModule(module_);

  /* Tirage SANS DOUBLON. Les generateurs piochent dans un espace fini : au-dela
     d'une dizaine de tirages, le meme enonce ressort. Un doublon est benin dans
     l'edition eleve (3 exercices) mais devient visible dans la banque du
     professeur, ou le meme enonce porterait deux numeros differents — exactement
     ce qu'un enseignant reproche a un manuel.

     On retire donc tant que l'enonce est deja vu, avec un budget borne : le
     tirage reste deterministe (meme graine, meme suite) et ne peut pas boucler
     sur un generateur peu varie. Le budget epuise, on rend ce qu'on a : mieux
     vaut une banque plus courte qu'une banque qui se repete. */
  const exercices = [];
  if (module_.exercice && typeof module_.exercice.generate === 'function') {
    const vus = new Set();
    // 12 essais par exercice voulu : large devant le taux de collision observe
    // sur le college (1 doublon sur 18 tirages au pire), assez petit pour que
    // l'echec reste rapide sur un generateur a deux enonces.
    const budget = tirages * 12;
    for (let essai = 0; essai < budget && exercices.length < tirages; essai++) {
      const ex = normaliserExercice(module_.exercice.generate());
      const cle = String(ex.statement || '').trim();
      if (vus.has(cle)) continue;
      vus.add(cle);
      exercices.push(ex);
    }
  }

  return { module: module_, exercices, validation };
}

module.exports = { chargerModule, RACINE };
