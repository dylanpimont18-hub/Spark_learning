/* =========================================================
   Spark Learning – scripts/manuel/tests/prof-2nde.test.js

   Garde les FICHES PROFESSEUR de la seconde (2026-09-13).

   Le pipeline vérifie déjà qu'un renvoi pointe vers un exercice qui EXISTE
   (scripts/manuel/prof.js, testé par prof.test.js). Il ne vérifie pas que le
   renvoi pointe vers un exercice PERTINENT — or le cahier des charges pose
   qu'« un renvoi faux est pire qu'un renvoi absent », et un renvoi vers un
   exercice existant mais hors sujet est exactement un renvoi faux.

   Ce fichier ajoute les gardes que le pipeline ne peut pas poser lui-même :

     1. les quatorze rangs conseillés forment une suite complète de 1 à 14,
        sans trou ni doublon (le pipeline refuse un ordre partiel, mais il
        accepterait 1..13 plus un doublon) ;
     2. aucune remédiation ne renvoie vers l'évaluation notée (règle
        éditoriale absolue : on remédie AVANT d'évaluer) ;
     3. chaque renvoi tombe sur un exercice dont le corrigé parle réellement
        du sujet de l'erreur — vérifié par mots-clés sur le TIRAGE RÉEL de la
        graine du livre, et non sur la foi de la fiche ;
     4. toute compétence déclarée appartient au référentiel de mathématiques.

   La garde 3 est la seule qui aurait attrapé l'erreur commise pendant la
   rédaction de ce niveau : quatre renvois de 2nde-fonctions-reference
   pointaient vers les bons exercices de l'ANCIENNE banque, et l'élargissement
   de celle-ci les avait décalés sans qu'aucun contrôle ne s'en aperçoive.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chargerModule } = require('../extract.js');
const { REFERENTIELS } = require('../prof.js');

const RACINE = path.resolve(__dirname, '..', '..', '..');
const DOSSIER_DATA = 'js/data/lycee-2nde';
const DOSSIER_PROF = path.join(RACINE, 'js/data/prof/lycee-2nde');

/* Les quatorze modules de seconde, dans l'ordre du livre (celui de
   js/loader.js). L'indice + 1 est le numéro de chapitre imprimé. */
const MODULES = [
  'vecteurs', 'fonctions-affines', '2nde-ensembles-nombres', '2nde-calcul-algebrique',
  '2nde-equations-inequations', '2nde-fonctions-generalites', '2nde-fonctions-reference',
  '2nde-reperage-plan', '2nde-droites-systemes', '2nde-geometrie-plane',
  '2nde-statistiques', '2nde-probabilites', '2nde-echantillonnage', '2nde-algorithmique'
];

function chargerFiche(id) {
  const chemin = path.join(DOSSIER_PROF, id + '.prof.js');
  if (!fs.existsSync(chemin)) return null;
  const bac = { window: {}, console };
  vm.createContext(bac);
  vm.runInContext(fs.readFileSync(chemin, 'utf8'), bac, { filename: chemin });
  return (bac.window.SPARK_PROF || {})[id] || null;
}

/* Le tirage du livre : même graine et même plafond de répétitions que la
   compilation, sans quoi les numéros d'exercice ne correspondraient pas. */
function exercicesDuLivre(id) {
  return chargerModule(path.join(DOSSIER_DATA, id + '.js'),
    { graine: 0, tirages: 300, repetitionsMax: 3 }).exercices;
}

const FICHES = new Map();
for (const id of MODULES) {
  const f = chargerFiche(id);
  if (f) FICHES.set(id, f);
}

test('les quatorze modules de seconde portent une fiche professeur', () => {
  const manquants = MODULES.filter((id) => !FICHES.has(id));
  assert.deepStrictEqual(manquants, [], 'fiches manquantes : ' + manquants.join(', '));
});

test('les rangs conseilles forment une suite complete de 1 a 14', () => {
  const rangs = MODULES.map((id) => (FICHES.get(id) || {}).rangConseille);
  assert.ok(rangs.every((r) => Number.isInteger(r)), 'tous les rangs sont des entiers');
  const tries = rangs.slice().sort((a, b) => a - b);
  assert.deepStrictEqual(tries, Array.from({ length: 14 }, (_, i) => i + 1),
    'les rangs doivent couvrir 1..14 sans trou ni doublon, obtenu : ' + tries.join(','));
});

test('aucune remediation ne renvoie vers l evaluation notee', () => {
  for (const [id, fiche] of FICHES) {
    for (const e of (fiche.erreurs || [])) {
      if (e.exercice) {
        assert.notStrictEqual(e.exercice.type, 'evaluation',
          id + ' : « ' + e.titre + ' » renvoie vers l evaluation, or on remedie AVANT d evaluer');
      }
    }
  }
});

test('chaque fiche porte au moins trois erreurs completes', () => {
  for (const [id, fiche] of FICHES) {
    const err = fiche.erreurs || [];
    assert.ok(err.length >= 3, id + ' : ' + err.length + ' erreur(s), trois au minimum');
    for (const e of err) {
      for (const champ of ['titre', 'eleve', 'cause', 'remede']) {
        assert.ok(e[champ] && String(e[champ]).trim(),
          id + ' : « ' + e.titre + ' » n a pas de ' + champ);
      }
    }
  }
});

/* Mots-clés attendus dans le corrigé de l'exercice visé, par erreur. Le
   rapprochement se fait sur le SUJET, pas sur la formulation : il s'agit de
   détecter un renvoi qui a glissé vers un exercice hors sujet, pas de juger
   la qualité pédagogique du renvoi.

   Une entrée par renvoi non nul, repérée par (module, titre de l'erreur).
   Un renvoi sans entrée ici n'est pas jugé — la table se complète au fil des
   vagues plutôt que de bloquer sur un module non couvert. */
const ATTENDUS = {
  /* Les trois modules ci-dessous complètent la table le 2026-09-13 : ils
     étaient les seuls des quatorze à n'être pas gardés, donc les seuls dont un
     renvoi pouvait glisser sans que rien ne le dise. Leurs mots-clés sont tirés
     du corrigé RÉEL de l'exercice visé, relu un par un.

     ATTENTION aux apostrophes : les titres des fiches emploient tous
     l'apostrophe DROITE. Huit clés de cette table portaient l'apostrophe
     courbe « ’ » et ne correspondaient donc à aucun titre : elles étaient des
     gardes inertes, qui donnaient l'apparence d'une couverture sans rien
     vérifier. Le test « aucune cle de la table ne reste inerte » ci-dessous
     interdit désormais que cela se reproduise.

     Cas particulier de « vecteurs » : sa banque est entièrement consacrée à la
     projection de forces et ne contient aucun exercice sur la distinction
     point / vecteur ni sur l'addition. Les deux renvois concernés visent donc
     un exercice où l'erreur se MANIFESTE (une question de quadrant, une norme
     de triplet pythagoricien) faute d'exercice qui la travaille de front ; les
     mots-clés gardent cette intention, et non un sujet que la banque n'a pas. */
  'vecteurs': {
    'Confondre le point et le vecteur': ['quadrant'],
    "Appliquer le cosinus sans regarder d'où part l'angle": ['angle'],
    'Additionner les normes au lieu des composantes': ['norme', 'pythagore']
  },
  '2nde-ensembles-nombres': {
    "Croire qu'un nombre à virgule ne peut pas être rationnel": ['rationnel'],
    'Confondre le crochet ouvert et le crochet fermé': ['intervalle', 'appartient'],
    "Échanger l'intersection et la réunion": ['intervalle']
  },
  '2nde-calcul-algebrique': {
    'Oublier le double produit': ['double produit', 'identité'],
    'Factoriser une somme de deux carrés': ['identité', 'factoris'],
    "Développer alors qu'il fallait garder la forme factorisée": ['factoris']
  },
  '2nde-equations-inequations': {
    "Oublier d'inverser le sens en divisant par un négatif": ['négatif'],
    "Confondre la borne et l'ensemble solution": ['borne', 'intervalle', 'solution'],
    'Traduire « au plus » et « au moins » par le mauvais symbole': ['inéquation'],
    'Changer un terme de membre sans changer son signe': ['membre', 'retire']
  },
  'fonctions-affines': {
    'Inverser le numérateur et le dénominateur de la pente': ['coefficient directeur'],
    'Croire que toute fonction affine est linéaire': ['linéaire'],
    'Lire le sens de variation sur la valeur de la fonction au lieu du signe de la pente': ['variation'],
    "Oublier l'unité de la pente dans un contexte concret": ['ordonnée']
  },
  '2nde-fonctions-generalites': {
    "Échanger l'image et l'antécédent": ['antécédent'],
    'Oublier les parenthèses en substituant un nombre négatif': ['remplace'],
    "Croire qu'une fonction est définie pour tous les nombres": ['dénominateur'],
    'Confondre le sens de variation et le signe de la fonction': ['augmente', 'passe']
  },
  '2nde-fonctions-reference': {
    'Croire que la fonction inverse est décroissante sur tout son domaine': ['inverse'],
    'Croire que la fonction carré est croissante partout': ['carré', 'négatif'],
    "Oublier qu'un nombre positif a deux antécédents par la fonction carré": ['antécédent'],
    'Chercher le domaine de définition seulement quand on y pense': ['condition']
  },
  '2nde-probabilites': {
    'Croire que le hasard se corrige de lui-même': ['indépendant'],
    "Additionner les probabilités sans retirer l'intersection": ['cup'],
    'Chercher directement une probabilité de « au moins un »': ['contraire'],
    'Confondre « incompatibles » et « indépendants »': ['incompatible']
  },
  '2nde-statistiques': {
    'Croire que la moyenne suffit à décrire une série': ['moyenne', 'homogène'],
    'Prendre la valeur du milieu de la liste pour la médiane': ['médiane', 'ordre croissant'],
    "Confondre la variance et l'écart-type, et se tromper d'unité": ['variance', 'écart-type'],
    'Additionner les écarts au lieu de leurs carrés': ['moyenne']
  },
  '2nde-algorithmique': {
    'Croire que range(n) va de 1 à n': ['range'],
    'Ne pas exécuter le code pas à pas et deviner le résultat': ['pas à pas', 'passage'],
    "Croire que les deux branches d'un test s'exécutent": ['branche', 'condition'],
    "Écrire une boucle while qui ne s'arrête jamais": ['while', 'successives']
  },
  '2nde-echantillonnage': {
    "Croire que l'intervalle de confiance est une garantie certaine": ['confiance', 'IC'],
    "Croire que doubler l'échantillon divise la marge d'erreur par deux": ['multiplié', 'divisée'],
    'Confondre la fréquence observée et la proportion cherchée': ['fréquence', 'proportion']
  },
  '2nde-geometrie-plane': {
    'Appliquer le rapport de réduction aux aires comme aux longueurs': ['rapport', 'aire'],
    'Confondre les quatre droites remarquables du triangle': ['médiane', 'hauteur', 'médiatrice'],
    'Appliquer Thalès sans vérifier le parallélisme': ['parallel'],
    "Prendre n'importe quel côté pour base sans changer la hauteur": ['hauteur', 'aire']
  },
  '2nde-reperage-plan': {
    'Se tromper de signe en soustrayant deux coordonnées négatives': ['distance'],
    'Diviser au lieu de multiplier pour retrouver une extrémité': ['symétrique', 'milieu'],
    "Conclure d'un dessin au lieu de conclure d'un calcul": ['isocèle', 'démontre'],
    'Oublier la racine carrée et donner le carré de la distance': ['sqrt', 'distance']
  },
  '2nde-droites-systemes': {
    "Croire qu'un système sans solution est un système raté": ['pente'],
    "Conclure au parallélisme à partir de l'ordonnée à l'origine": ['pente'],
    "Ne donner qu'une seule coordonnée du point d'intersection": ['intersection'],
    "Substituer dans l'équation dont on vient de tirer l'inconnue": ['système']
  }
};

/* Ajouté le 2026-09-13. Le test suivant passe silencieusement une erreur dont
   le titre n'est pas dans la table (« if (!mots) continue »), ce qui est voulu :
   la table se remplit vague après vague. Mais l'inverse est un défaut grave —
   une clé de la table qui ne correspond à AUCUN titre de fiche ne garde rien,
   tout en donnant l'apparence d'une couverture.

   Huit clés étaient dans ce cas au moment où ce test a été écrit, toutes à
   cause d'une apostrophe courbe « ’ » là où les fiches écrivent « ' ». Aucun
   contrôle ne pouvait le dire, puisque l'absence de correspondance était
   justement la condition de sortie silencieuse. */
test('aucune cle de la table ne reste inerte', () => {
  const orphelines = [];
  for (const [id, table] of Object.entries(ATTENDUS)) {
    const fiche = FICHES.get(id);
    assert.ok(fiche, 'la table decrit « ' + id +' », qui n a pas de fiche');
    const titres = new Set((fiche.erreurs || []).map((e) => e.titre));
    for (const cle of Object.keys(table)) {
      if (!titres.has(cle)) orphelines.push(id + ' : « ' + cle + ' »');
    }
  }
  assert.deepStrictEqual(orphelines, [],
    'cle(s) ne correspondant a aucun titre d erreur (apostrophe courbe ?) :\n  '
    + orphelines.join('\n  '));
});

test('chaque renvoi tombe sur un exercice qui parle reellement du sujet', () => {
  for (const [id, fiche] of FICHES) {
    const table = ATTENDUS[id];
    if (!table) continue;
    const exercices = exercicesDuLivre(id);
    for (const e of (fiche.erreurs || [])) {
      if (!e.exercice || e.exercice.type !== 'exercice') continue;
      const mots = table[e.titre];
      if (!mots) continue;
      const ex = exercices[e.exercice.n - 1];
      assert.ok(ex, id + ' : « ' + e.titre + ' » renvoie a l exercice '
        + e.exercice.n + ', qui n existe pas dans le tirage du livre');
      const texte = (String(ex.statement) + ' ' + (ex.solution || []).join(' ') + ' '
        + (ex.hint || '')).toLowerCase();
      const trouve = mots.some((m) => texte.includes(m.toLowerCase()));
      assert.ok(trouve, id + ' : « ' + e.titre + ' » renvoie a l exercice ' + e.exercice.n
        + ', dont l enonce ne contient aucun de [' + mots.join(', ')
        + ']. Renvoi probablement decale par un elargissement de la banque.');
    }
  }
});

test('toute competence declaree appartient au referentiel de mathematiques', () => {
  const valides = REFERENTIELS.maths.competences;
  for (const [id, fiche] of FICHES) {
    const liste = (fiche.competences || {}).evaluation || [];
    for (const c of liste) {
      assert.ok(valides.includes(c),
        id + ' : competence « ' + c + ' » hors referentiel de mathematiques');
    }
  }
});

test('chaque fiche declare autant de competences que l evaluation a de questions', () => {
  for (const [id, fiche] of FICHES) {
    const mod = chargerModule(path.join(DOSSIER_DATA, id + '.js'), { graine: 0, tirages: 1 }).module;
    const nbQuestions = ((mod.evaluation || {}).questions || []).length;
    const nbCompetences = ((fiche.competences || {}).evaluation || []).length;
    assert.strictEqual(nbCompetences, nbQuestions,
      id + ' : ' + nbCompetences + ' competence(s) pour ' + nbQuestions + ' question(s)');
  }
});
