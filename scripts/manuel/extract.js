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

/* Squelette d'un enonce : le texte avec TOUS ses nombres masques. Deux enonces
   de meme squelette sortent du meme moule du generateur — ils ne different que
   par les valeurs tirees.

   Mesure du 2026-09-13 sur les dix chapitres de sixieme (300 tirages chacun) :
   la deduplication par enonce exact ne sature JAMAIS, parce que les valeurs
   numeriques offrent une combinatoire quasi infinie ; le nombre de MOULES, lui,
   plafonne vite — 9 en angles, 12 en fractions et en symetrie, 22 en division.
   Tirer 42 enonces en angles, c'est donc imprimer 9 moules repetes 4,7 fois en
   moyenne, jusqu'a 11 fois pour le pire. C'est cette repetition-la que voit
   l'enseignant qui feuillette la banque, pas la variete des nombres. */
function squeletteEnonce(texte) {
  return String(texte)
    .replace(/\d+(?:[.,{}]+\d+)*/g, '#')
    .replace(/\s+/g, ' ')
    .trim();
}

function chargerModule(cheminRelatif, options) {
  const opts = options || {};
  const graine = typeof opts.graine === 'number' ? opts.graine : 0;
  const tirages = typeof opts.tirages === 'number' ? opts.tirages : 3;
  /* Nombre maximal de fois qu'un MEME moule d'enonce peut ressortir dans la
     banque. `Infinity` desactive le plafond (comportement d'avant le
     2026-09-13, conserve pour les appels qui veulent mesurer la combinatoire
     brute d'un generateur).

     3 est la valeur retenue pour le livre : a 2, la banque de sixieme plafonne
     entre 18 et 44 enonces et plusieurs chapitres restent sous la trentaine
     visee ; a 4, angles depasse 30 enonces pour 9 moules et la page se lit
     comme une photocopie. A 3, un moule revient au plus deux fois apres sa
     premiere apparition — un enseignant y voit trois variantes d'un meme
     exercice, ce qui est exactement l'usage (un pour la classe, un pour le
     devoir, un pour la remediation) et non un remplissage. */
  const repetitionsMax = typeof opts.repetitionsMax === 'number' ? opts.repetitionsMax : Infinity;

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
     vaut une banque plus courte qu'une banque qui se repete.

     Depuis le 2026-09-13, un SECOND plafond s'ajoute au premier : le nombre de
     fois qu'un meme MOULE d'enonce peut ressortir (`repetitionsMax`). Le
     premier interdit deux enonces identiques ; le second interdit dix variantes
     du meme enonce. C'est lui qui dimensionne reellement la banque du
     professeur : le nombre d'enonces retenus par chapitre n'est plus une
     constante devinee, c'est la combinatoire mesuree du generateur, plafonnee.
     Un chapitre riche va au bout des tirages demandes, un chapitre pauvre rend
     une banque plus courte — et c'est le resultat voulu. */
  const exercices = [];
  if (module_.exercice && typeof module_.exercice.generate === 'function') {
    const vus = new Set();
    const parMoule = new Map();
    /* 12 essais par exercice voulu tant que le plafond de moules ne joue pas.
       Quand il joue, il faut BEAUCOUP plus d'essais : une fois les moules
       courants satures, seuls les moules rares font encore avancer le
       compteur, et le generateur les tire par definition rarement. 40 essais
       par exercice voulu suffisent a epuiser la combinatoire des dix chapitres
       de sixieme (verifie le 2026-09-13) tout en gardant le build sous la
       poignee de secondes par module. */
    const budget = tirages * (repetitionsMax === Infinity ? 12 : 40);
    for (let essai = 0; essai < budget && exercices.length < tirages; essai++) {
      const ex = normaliserExercice(module_.exercice.generate());
      const cle = String(ex.statement || '').trim();
      if (vus.has(cle)) continue;
      const moule = squeletteEnonce(cle);
      const deja = parMoule.get(moule) || 0;
      if (deja >= repetitionsMax) continue;
      vus.add(cle);
      parMoule.set(moule, deja + 1);
      exercices.push(ex);
    }
  }

  return { module: module_, exercices, validation };
}

module.exports = { chargerModule, squeletteEnonce, RACINE };
