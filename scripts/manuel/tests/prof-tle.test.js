/* =========================================================
   Spark Learning – scripts/manuel/tests/prof-tle.test.js

   Garde les FICHES PROFESSEUR de la terminale (2026-09-14).

   Même raison d'être que prof-2nde.test.js : le pipeline vérifie déjà qu'un
   renvoi pointe vers un exercice qui EXISTE (scripts/manuel/prof.js, testé
   par prof.test.js), mais jamais qu'il pointe vers un exercice PERTINENT.
   Or le cahier des charges pose qu'« un renvoi faux est pire qu'un renvoi
   absent », et un renvoi vers un exercice existant mais hors sujet est
   exactement un renvoi faux.

   LE PIÈGE QUE CE FICHIER EXISTE POUR ATTRAPER. Un renvoi `exercice{n}` est
   écrit contre un tirage donné. Dès que la banque du chapitre s'élargit, les
   rangs se décalent et le renvoi devient faux. Le symptôme est traître : le
   renvoi pointe vers un exercice qui existe, donc la validation l'accepte,
   mais qui parle d'autre chose. Cinq renvois de seconde étaient dans ce cas.
   Le risque est ici maximal, puisque les douze banques de terminale ont
   TOUTES été élargies le même jour — certaines de 1 à 59 tâches distinctes.

   Gardes posées :
     1. les douze rangs conseillés forment une suite complète de 1 à 12,
        sans trou ni doublon (le pipeline refuse un ordre partiel, mais il
        accepterait 1..11 plus un doublon) ;
     2. aucune remédiation ne renvoie vers l'évaluation notée ;
     3. chaque renvoi tombe sur un exercice dont l'énoncé ou le corrigé parle
        réellement du sujet de l'erreur, vérifié par mots-clés sur le TIRAGE
        RÉEL de la graine du livre ;
     4. toute compétence déclarée appartient au référentiel de mathématiques,
        et il y en a autant que de questions ;
     5. la RÉPARTITION des soixante compétences du niveau respecte le plafond
        de 35 % et couvre les six compétences — garde propre à ce fichier,
        parce que le défaut qu'elle attrape (une compétence déclarée mais
        jamais mobilisée, dont la grille imprime pourtant la colonne toute
        l'année) ne se voit sur aucun module pris isolément.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chargerModule } = require('../extract.js');
const { REFERENTIELS } = require('../prof.js');

const RACINE = path.resolve(__dirname, '..', '..', '..');
const DOSSIER_DATA = 'js/data/lycee-tle';
const DOSSIER_PROF = path.join(RACINE, 'js/data/prof/lycee-tle');

/* Les douze modules de terminale, dans l'ordre du LIVRE (celui de
   js/loader.js, lignes 83 a 94). L'indice + 1 est le numero de chapitre
   imprime, et c'est lui que les `prerequis` des fiches designent. */
const MODULES = [
  'tle-exponentielle-logarithme', 'tle-primitives-integrales',
  'tle-equations-differentielles', 'tle-limites-continuite',
  'tle-derivation-complements', 'tle-logarithme', 'tle-convexite',
  'tle-suites-complements', 'tle-denombrement', 'tle-lois-continues',
  'tle-geometrie-espace', 'tle-orthogonalite-espace'
];

function chargerFiche(id) {
  const chemin = path.join(DOSSIER_PROF, id + '.prof.js');
  if (!fs.existsSync(chemin)) return null;
  const bac = { window: {}, console };
  vm.createContext(bac);
  vm.runInContext(fs.readFileSync(chemin, 'utf8'), bac, { filename: chemin });
  return (bac.window.SPARK_PROF || {})[id] || null;
}

/* Le tirage du LIVRE : meme graine et meme plafond de repetitions que la
   compilation, sans quoi les numeros d'exercice ne correspondraient pas. */
function exercicesDuLivre(id) {
  return chargerModule(path.join(DOSSIER_DATA, id + '.js'),
    { graine: 0, tirages: 300, repetitionsMax: 3 }).exercices;
}

const FICHES = new Map();
for (const id of MODULES) {
  const f = chargerFiche(id);
  if (f) FICHES.set(id, f);
}

test('les douze modules de terminale portent une fiche professeur', () => {
  const manquants = MODULES.filter((id) => !FICHES.has(id));
  assert.deepStrictEqual(manquants, [], 'fiches manquantes : ' + manquants.join(', '));
});

test('les rangs conseilles forment une suite complete de 1 a 12', () => {
  const rangs = MODULES.map((id) => (FICHES.get(id) || {}).rangConseille);
  assert.ok(rangs.every((r) => Number.isInteger(r)), 'tous les rangs sont des entiers');
  const tries = rangs.slice().sort((a, b) => a - b);
  assert.deepStrictEqual(tries, Array.from({ length: 12 }, (_, i) => i + 1),
    'les rangs doivent couvrir 1..12 sans trou ni doublon, obtenu : ' + tries.join(','));
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

test('chaque fiche porte ses attendus officiels', () => {
  /* Sans attendus, le suivi des notions ne s'imprime tout simplement pas :
     l'ouvrage compile, se declare publiable, et une rubrique promise manque.
     C'est le defaut diagnostique par l'exigence 1 du cahier des charges. */
  for (const [id, fiche] of FICHES) {
    const a = fiche.attendus || [];
    assert.ok(a.length >= 3,
      id + ' : ' + a.length + ' attendu(s) officiel(s), trois au minimum — ' +
      'sans eux le suivi des notions ne s imprime pas');
  }
});

/* Mots-cles attendus dans l'enonce ou le corrige de l'exercice vise, par
   erreur. Le rapprochement se fait sur le SUJET, pas sur la formulation : il
   s'agit de detecter un renvoi qui a glisse vers un exercice hors sujet, pas
   de juger la qualite pedagogique du renvoi.

   Une entree par renvoi non nul, reperee par (module, titre de l'erreur).
   Les titres emploient tous l'apostrophe DROITE : huit cles de la table de
   seconde portaient l'apostrophe courbe et ne gardaient donc RIEN, tout en
   donnant l'apparence d'une couverture. Le test « aucune cle ne reste
   inerte » ci-dessous interdit que cela se reproduise. */
const ATTENDUS = {
  'tle-primitives-integrales': {
    /* Mots-cles RESSERRES le 2026-09-14. La premiere version acceptait
       « primitive » pour l'erreur « deriver au lieu de primitiver » — mot
       present dans le corrige de PRESQUE TOUS les exercices du chapitre, donc
       une garde inerte en pratique. On exige desormais le signe distinctif de
       l'exercice vise : la racine carree, dont l'exposant fractionnaire est
       ce qui revele l'erreur. */
    'Dériver au lieu de primitiver': ['sqrt'],
    "Confondre l'intégrale et l'aire": ['aire géométrique'],
    'Oublier la constante, ou la croire décorative': ['condition initiale'],
    "Croire que l'intégrale et la valeur moyenne sont le même nombre": ['valeur moyenne'],
    "Appliquer la règle des puissances à l'exponentielle": ['e^{-t}']
  },
  'tle-geometrie-espace': {
    'Confondre colinéarité et orthogonalité': ['colinéaire', 'colinéarité'],
    'Chercher le vecteur normal alors qu il est déjà écrit': ['normal'],
    "Chercher le vecteur normal alors qu'il est déjà écrit": ['normal'],
    'Additionner les coordonnées au lieu d appliquer Pythagore': ['norme'],
    "Additionner les coordonnées au lieu d'appliquer Pythagore": ['norme']
  },
  'tle-orthogonalite-espace': {
    'Appliquer le produit scalaire nul là où il faut la colinéarité': ['colinéaire', 'perpendiculaire'],
    'Oublier la valeur absolue, et annoncer une distance négative': ['distance', 'valeur absolue'],
    'Additionner les coefficients au lieu de les élever au carré': ['norme', 'dénominateur'],
    'Chercher les normales au lieu de les lire': ['normaux', 'normal']
  },
  'tle-denombrement': {
    'Diviser par k! quand l ordre compte': ['ordre compte', 'arrangement'],
    "Diviser par k! quand l'ordre compte": ['ordre compte', 'arrangement'],
    'Confondre « sans répétition » et « avec répétition »': ['répétitions', 'répéter', 'revenir'],
    'Additionner les cas au lieu de passer par le contraire': ['au moins', 'contraire'],
    'Recalculer un coefficient binomial déjà connu': ['binom', 'sans refaire']
  },

  /* CONVEXITE, LIMITES, SUITES, LOIS CONTINUES — entrees ajoutees le
     2026-09-14, en meme temps que les quatre fiches. Une par renvoi NON NUL.

     Les quatre fiches comptent 20 erreurs au total, dont 3 sans renvoi
     (erreur assumee et documentee dans le remede : la banque est a reponse
     numerique et ne peut pas travailler une rédaction de recurrence ni une
     distinction conceptuelle). Il y a donc 17 entrees ici.

     Les mots-cles sont RESSERRES sur le signe distinctif de l'exercice vise,
     jamais sur un mot present dans tout le chapitre : « convexe » aurait ete
     une garde inerte dans le chapitre de convexite. */
  'tle-convexite': {
    // ex. 4 : f''(1) pour 3ln(x) — seule tache du chapitre qui porte un ln.
    "Confondre le signe de $f'$ et celui de $f''$": ['\\ln'],
    // ex. 7 : le zero sans changement de signe, sur x^4.
    "Croire que $f''(a) = 0$ suffit à donner un point d'inflexion": ['x^4', 'nécessaire'],
    // ex. 6 : la borne d'un intervalle de convexite (inequation).
    'Répondre par un point quand on demande un intervalle': ['inéquation', '+\\infty'],
    // ex. 10 : la meme tache que 4, sur une autre valeur — le corrige y
    // oppose explicitement croissance et convexite.
    "Croire que « croissante » et « convexe » vont ensemble": ['concave', '\\ln'],
    // ex. 1 : f''(1), ou l'indication impose de deriver avant de substituer.
    'Substituer avant de dériver': ['substituer']
  },
  'tle-limites-continuite': {
    // ex. 7 : la forme 0/0 levee par factorisation.
    'Traiter une forme indéterminée comme un résultat': ['indéterminée', 'factoris'],
    // ex. 1 : degre du numerateur strictement plus petit.
    'Comparer les coefficients au lieu de comparer les degrés': ['degré'],
    // ex. 5 : l'abscisse d'une asymptote verticale.
    'Échanger les deux sortes d\'asymptotes': ['asymptote verticale'],
    // ex. 4 : le recollement, ou il faut resoudre pour rendre continu.
    'Croire que « définie en $a$ » veut dire « continue en $a$ »': ['continue', 'saut'],
    // ex. 3 : le theoreme des valeurs intermediaires, en nombre garanti.
    'Lire dans le théorème des valeurs intermédiaires une unicité qu\'il ne donne pas':
      ['valeurs intermédiaires', 'changement de signe']
  },
  'tle-suites-complements': {
    // ex. 3 : la suite auxiliaire, qui etablit vraiment la convergence.
    'Prendre le point fixe pour une preuve de convergence': ['point fixe', 'géométrique'],
    // ex. 7 : la somme, ou le compte des termes vaut n+1.
    'Oublier que le nombre de termes vaut $n+1$': ['nombre de termes', 'arithmétique'],
    // ex. 4 : la NATURE de la suite selon |q|.
    "Retenir « $q^n$ tend vers zéro » sans la condition": ['raison', 'nature']
    /* Les deux premieres erreurs de la fiche (« Croire qu'on doit démontrer
       l'hypothèse de récurrence » et « Conclure sans avoir initialisé ») ont
       un renvoi NUL : aucune tache de la banque ne fait rédiger une
       récurrence, la banque etant a reponse numerique. Elles n'ont donc pas
       d'entree ici, et c'est volontaire. */
  },
  'tle-lois-continues': {
    // ex. 1 : la queue unilaterale, ou il faut diviser par deux.
    'Oublier de diviser par deux sur une queue': ['deux', 'symétrie'],
    // ex. 4 : la HAUTEUR d'une densite uniforme, qui peut depasser 1.
    'Lire la densité comme une probabilité': ['densité', 'hauteur'],
    // ex. 3 : le centrage-reduction, ou confondre sigma et sigma^2 se voit.
    'Confondre $\\sigma$ et $\\sigma^2$ dans la notation': ['écart-type'],
    // ex. 7 : une loi UNIFORME, immediatement apres une loi normale.
    'Appliquer la règle des sigma à une loi uniforme': ['uniforme', 'longueur']
    /* La troisieme erreur de la fiche (« Refuser que $P(X = a)$ soit nul »)
       a un renvoi NUL : sa reponse n'est pas un nombre mais une distinction
       entre « nul » et « impossible ». Pas d'entree ici, volontairement. */
  }
};

test('aucune cle de la table ne reste inerte', () => {
  /* Le test suivant passe silencieusement une erreur dont le titre n'est pas
     dans la table (« if (!mots) continue »), ce qui est voulu : la table se
     remplit vague apres vague. Mais l'inverse est un defaut grave — une cle
     qui ne correspond a AUCUN titre de fiche ne garde rien, tout en donnant
     l'apparence d'une couverture.

     Nuance propre a cette table : plusieurs titres y figurent en DOUBLE, une
     fois avec apostrophe droite et une fois sans apostrophe, pour rester
     robustes a une reecriture du titre. On tolere donc qu'une cle sur deux
     d'une telle paire soit orpheline, mais jamais les deux. */
  for (const [id, table] of Object.entries(ATTENDUS)) {
    const fiche = FICHES.get(id);
    assert.ok(fiche, 'la table decrit « ' + id + ' », qui n a pas de fiche');
    const titres = new Set((fiche.erreurs || []).map((e) => e.titre));
    const normal = (s) => s.replace(/['’]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const titresNormes = new Set([...titres].map(normal));
    const orphelines = Object.keys(table).filter((cle) => !titresNormes.has(normal(cle)));
    assert.deepStrictEqual(orphelines, [],
      id + ' : cle(s) ne correspondant a aucun titre d erreur :\n  ' + orphelines.join('\n  '));
  }
});

test('chaque renvoi tombe sur un exercice qui parle reellement du sujet', () => {
  /* LA garde essentielle du fichier. Les douze banques du niveau ont ete
     elargies le 2026-09-14, plusieurs d'un facteur superieur a dix : sans ce
     test, chaque renvoi ecrit avant l'elargissement pointerait vers un
     exercice existant mais sans rapport, et rien ne le dirait. */
  for (const [id, fiche] of FICHES) {
    const table = ATTENDUS[id];
    if (!table) continue;
    const exercices = exercicesDuLivre(id);
    const normal = (s) => s.replace(/['’]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const parTitre = new Map(Object.entries(table).map(([k, v]) => [normal(k), v]));
    for (const e of (fiche.erreurs || [])) {
      if (!e.exercice || e.exercice.type !== 'exercice') continue;
      const mots = parTitre.get(normal(e.titre));
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
    for (const c of ((fiche.competences || {}).evaluation || [])) {
      assert.ok(valides.includes(c),
        id + ' : competence « ' + c + ' » hors referentiel de mathematiques. ' +
        'Aucune competence « lycee » ou « specialite » n existe.');
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

test('la repartition des competences du niveau est equilibree', () => {
  /* Garde propre a ce fichier, et la seule qui attrape le defaut le plus
     couteux de la 6e : deux competences declarees nulle part alors que la
     grille de suivi photocopiable imprimait leurs six colonnes — deux
     seraient restees vides toute l'annee. Le defaut est INVISIBLE sur un
     module pris isolement, puisque chaque fiche n'a que cinq questions et
     qu'aucune ne peut porter les six competences.

     Seuil retenu : aucune competence au-dela de 35 % du total, et les six
     presentes au moins une fois. Corriger un desequilibre demande de
     REECRIRE des enonces, jamais de renommer des etiquettes — une etiquette
     qui ne correspond pas a ce que la question demande est reperee
     immediatement par un enseignant. */
  if (FICHES.size < MODULES.length) return;      // niveau incomplet : rien a mesurer
  const compte = new Map(REFERENTIELS.maths.competences.map((c) => [c, 0]));
  let total = 0;
  for (const [, fiche] of FICHES) {
    for (const c of ((fiche.competences || {}).evaluation || [])) {
      compte.set(c, (compte.get(c) || 0) + 1);
      total++;
    }
  }
  const detail = [...compte.entries()]
    .map(([c, n]) => c + ' ' + n + ' (' + (100 * n / total).toFixed(1) + ' %)').join(', ');

  const absentes = [...compte.entries()].filter(([, n]) => n === 0).map(([c]) => c);
  assert.deepStrictEqual(absentes, [],
    'competence(s) jamais evaluee(s) sur tout le niveau, alors que la grille ' +
    'imprime leur colonne : ' + absentes.join(', ') + '\n  repartition : ' + detail);

  for (const [c, n] of compte) {
    assert.ok(n / total <= 0.35,
      'competence « ' + c + ' » sur ' + (100 * n / total).toFixed(1) + ' % des ' + total +
      ' questions, plafond 35 %\n  repartition : ' + detail);
  }
});
