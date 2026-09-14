/* =========================================================
   Spark Learning – scripts/manuel/tests/renvois-1re.test.js

   RAPPROCHE CHAQUE RENVOI DE REMEDIATION DU TIRAGE REEL DU LIVRE (2026-09-14).

   POURQUOI CE TEST EXISTE. Un renvoi « exercice n » ecrit contre un tirage
   donne devient faux des que quelque chose deplace le tirage : un
   elargissement de banque, un changement de graine, ou — comme cela s'est
   produit le 2026-09-14 sur ce niveau — une erreur sur l'ORDRE des chapitres.

   Le symptome est traitre. La validation du pipeline verifie seulement que le
   numero existe, jamais que l'exercice vise parle du bon sujet. Un renvoi
   decale pointe donc vers un exercice bien reel, l'ouvrage compile sans la
   moindre alerte, et l'enseignant envoie son eleve travailler autre chose que
   ce qu'il doit reviser. Cinq renvois de seconde etaient dans ce cas ; quant a
   la premiere, onze de ses seize renvois l'etaient encore ce matin, parce que
   les fiches avaient ete verifiees contre un tirage obtenu en classant les
   chapitres par ordre alphabetique alors que le livre suit l'ordre de
   DATA_FILES (js/loader.js).

   COMMENT IL PROCEDE. Pour chaque renvoi, on refait le tirage exact du livre,
   on lit l'exercice vise, et on verifie qu'il contient les MOTS-CLES de la
   tache que la remediation entend faire travailler. Les mots-cles sont
   declares ci-dessous, une ligne par renvoi : ce sont eux qui encodent
   l'intention pedagogique, et c'est volontairement a la main, parce qu'aucune
   heuristique ne devinerait qu'une erreur sur l'inversion du conditionnement
   se remedie par un exercice de depistage medical.

   Il verifie aussi les DEUX REGLES EDITORIALES du cahier des charges :
   aucun renvoi vers l'evaluation notee, et pas deux erreurs d'une meme fiche
   qui renvoient au meme exercice.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chargerModule, RACINE } = require('../extract.js');

/* Memes constantes que build.js. Si l'une d'elles y change, ce test le dira
   en echouant, ce qui est exactement le service attendu. */
const GRAINE = 20260816, TIRAGES = 42, REPETITIONS_MAX = 3;
const EXERCICES_NUMEROTES = 12;

/* ORDRE REEL DES CHAPITRES : celui de DATA_FILES, jamais l'ordre alphabetique.
   C'est la source de l'erreur que ce fichier existe pour empecher. */
function chapitresDuNiveau(dossier) {
  const src = fs.readFileSync(path.join(RACINE, 'js/loader.js'), 'utf8');
  const m = /const DATA_FILES\s*=\s*(\{[\s\S]*?\n\};)/.exec(src);
  const DATA_FILES = eval('(' + m[1].slice(0, -1) + ')');
  return [].concat(...Object.values(DATA_FILES))
    .filter((f) => f.indexOf('js/data/' + dossier + '/') === 0);
}

const CHAPITRES = chapitresDuNiveau('lycee-1re');

function ficheDe(moduleId) {
  const chemin = path.join(RACINE, 'js/data/prof/lycee-1re', moduleId + '.prof.js');
  if (!fs.existsSync(chemin)) return null;
  const bac = { window: {}, console };
  vm.createContext(bac);
  vm.runInContext(fs.readFileSync(chemin, 'utf8'), bac, { filename: chemin });
  return bac.window.SPARK_PROF[moduleId] || null;
}

/* Tirage du livre pour un chapitre, a son rang reel. */
const tirages = new Map();
function exercicesDe(rang) {
  if (!tirages.has(rang)) {
    const r = chargerModule(CHAPITRES[rang], {
      graine: GRAINE + rang, tirages: TIRAGES, repetitionsMax: REPETITIONS_MAX
    });
    tirages.set(rang, r.exercices);
  }
  return tirages.get(rang);
}

function texteDe(ex) {
  const sol = Array.isArray(ex.solution) ? ex.solution.join(' ') : String(ex.solution || '');
  return (String(ex.statement || '') + ' ' + String(ex.hint || '') + ' ' + sol)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

/* MOTS-CLES ATTENDUS, par module puis par rang d'erreur dans la fiche.
   Chaque entree dit : « l'exercice vise par cette remediation doit parler de
   ceci ». Un tableau vide signifie qu'on ne verifie que l'existence du renvoi
   (aucun cas ici, mais la porte reste ouverte).

   Ces listes sont ecrites A LA MAIN et relues : elles portent l'intention
   pedagogique de la remediation, que rien d'automatique ne saurait deviner. */
const ATTENDUS = {
  '1re-derivation': [
    ['pente de la tangente', 'fonction dérivée'],   // confondre nombre derive et image
    ['composée avec l\'exponentielle'],             // oublier le facteur u'
    ['taux de variation'],                          // pente moyenne vs instantanee
    ['équation de la tangente', 'ordonnée']         // tangente sans point de tangence
  ],
  '1re-probas-conditionnelles': [
    ['test', 'malade'],                             // inverser le conditionnement
    ['restreint la population', 'colonne'],         // diviser par la mauvaise population
    ['indépend'],                                   // independant vs incompatible
    ['chemin', 'multipli']                          // additionner le long d'un chemin
  ],
  '1re-variables-aleatoires': [
    ['coefficient binomial', 'nombre de façons'],   // oublier le coefficient
    ['sans remise', 'binomiale'],                   // loi binomiale mal appliquee
    ['événement contraire', 'au moins'],            // sommer au lieu du contraire
    ['espérance', 'moyenne']                        // esperance = valeur possible
  ],
  '1re-information-chiffree': [
    ['ne s\'additionnent jamais', 'coefficients multiplicateurs'],  // additionner les taux
    ['divise', 'valeur initiale'],                  // soustraire au lieu de diviser
    ['inverse', 'revenir à la valeur de départ'],   // baisse du meme taux
    ['taux d\'évolution', 'valeur de départ']       // diviser par la valeur d'arrivee
  ],

  /* AJOUTS DU 2026-09-14 : les trois chapitres de la seconde vague.
     Leurs seize renvois ont d'abord ete ecrits contre un tirage obtenu en
     classant les fichiers du dossier par ordre alphabetique, alors que le
     livre suit l'ordre de DATA_FILES. Ils etaient donc tous decales, et
     pointaient vers des exercices bien reels mais hors sujet. C'est
     exactement la famille d'erreurs que ce fichier existe pour attraper :
     on declare ici, a la main, ce dont chaque exercice vise doit parler. */
  '1re-second-degre': [
    ['discriminant'],                               // perdre un signe dans Delta
    ['combien', 'solutions réelles'],               // ne donner qu'une seule solution
    ['hauteur', 'instants'],                        // resoudre sans ramener a zero
    ['sommet', 'extremum']                          // abscisse du sommet vs valeur
  ],
  '1re-polynomes-signe': [
    ['racines', 'tableau de signe'],                // ignorer le signe de a
    ['négatif', 'signe'],                           // Delta<0 sans signe
    ['inéquation', 'même côté'],                    // tableau avant transposition
    ['entiers', 'ensemble solution'],               // reunion ecrite comme un intervalle
    ['annulent', 'facteurs']                        // produit developpe au lieu de lu
  ],
  '1re-suites': [
    ['somme'],                                      // rang contre nombre de termes
    ['nature', 'différences'],                      // tout classer en arithmetique
    ['raison'],                                     // diviser par le rang
    /* Quatrieme erreur (« la suite finit par atteindre zero ») : renvoi
       DELIBEREMENT nul, parce qu'aucun exercice du chapitre ne porte sur le
       comportement a long terme — un eleve qui commet cette erreur reussit
       l'integralite de la banque. La liste doit rester presente pour que le
       compte des erreurs et celui des listes coincident, et elle est vide :
       il n'y a pas d'exercice vise dont on pourrait verifier les mots-cles.
       Si un jour une tache « comportement a long terme » est ajoutee au
       chapitre, c'est ici et dans la fiche qu'il faudra la declarer. */
    []
  ]
};

/* --- Les deux regles editoriales, sur TOUTES les fiches du niveau ------- */

test('1re / renvois : aucune remediation ne renvoie vers l evaluation notee', () => {
  for (const chemin of CHAPITRES) {
    const id = path.basename(chemin, '.js');
    const fiche = ficheDe(id);
    if (!fiche) continue;
    (fiche.erreurs || []).forEach((e, i) => {
      if (!e.exercice) return;
      assert.notStrictEqual(e.exercice.type, 'evaluation',
        id + ' erreur ' + (i + 1) + ' : on remedie AVANT d evaluer, jamais avec le devoir note');
    });
  }
});

test('1re / renvois : deux erreurs d une meme fiche ne visent pas le meme exercice', () => {
  for (const chemin of CHAPITRES) {
    const id = path.basename(chemin, '.js');
    const fiche = ficheDe(id);
    if (!fiche) continue;
    const vus = new Set();
    (fiche.erreurs || []).forEach((e, i) => {
      if (!e.exercice) return;
      const cle = e.exercice.type + ':' + e.exercice.n;
      assert.ok(!vus.has(cle),
        id + ' erreur ' + (i + 1) + ' : deux erreurs distinctes renvoient toutes deux a ' + cle);
      vus.add(cle);
    });
  }
});

test('1re / renvois : tout renvoi vise un exercice reellement imprime', () => {
  CHAPITRES.forEach((chemin, rang) => {
    const id = path.basename(chemin, '.js');
    const fiche = ficheDe(id);
    if (!fiche) return;
    const ex = exercicesDe(rang);
    (fiche.erreurs || []).forEach((e, i) => {
      if (!e.exercice || e.exercice.type !== 'exercice') return;
      assert.ok(e.exercice.n >= 1 && e.exercice.n <= Math.min(ex.length, EXERCICES_NUMEROTES),
        id + ' erreur ' + (i + 1) + ' : renvoi vers l exercice ' + e.exercice.n +
        ', hors des ' + Math.min(ex.length, EXERCICES_NUMEROTES) + ' exercices numerotes du chapitre');
    });
  });
});

/* --- Le rapprochement par mots-cles, fiche par fiche -------------------- */

for (const [id, listes] of Object.entries(ATTENDUS)) {
  test('1re / renvois : ' + id + ' vise bien les bons exercices', () => {
    const rang = CHAPITRES.findIndex((c) => path.basename(c, '.js') === id);
    assert.ok(rang >= 0, 'chapitre ' + id + ' introuvable dans DATA_FILES');

    const fiche = ficheDe(id);
    assert.ok(fiche, 'fiche professeur de ' + id + ' introuvable');

    const exercices = exercicesDe(rang);
    const erreurs = fiche.erreurs || [];
    assert.strictEqual(erreurs.length, listes.length,
      id + ' : ' + erreurs.length + ' erreurs dans la fiche mais ' + listes.length +
      ' listes de mots-cles declarees dans ce test — l une des deux est a mettre a jour');

    erreurs.forEach((e, i) => {
      const mots = listes[i];
      if (!e.exercice) return;                       // renvoi volontairement absent
      if (e.exercice.type !== 'exercice') return;    // quiz ou supplement : hors de ce controle
      const vise = exercices[e.exercice.n - 1];
      assert.ok(vise, id + ' erreur ' + (i + 1) + ' : exercice ' + e.exercice.n + ' non tire');
      const texte = texteDe(vise);
      const trouve = mots.some((m) => texte.includes(m.toLowerCase()));
      assert.ok(trouve,
        id + ' erreur ' + (i + 1) + ' (« ' + e.titre + ' ») renvoie a l exercice ' +
        e.exercice.n + ', qui ne parle d aucun de ces sujets : ' + mots.join(' / ') +
        '\n    enonce vise : ' + texte.slice(0, 190));
    });
  });
}

/* --- Les rangs conseilles, tout ou rien -------------------------------- */

test('1re / progression : les rangs conseilles forment une suite complete', () => {
  const rangs = [];
  let sansRang = 0, fiches = 0;
  for (const chemin of CHAPITRES) {
    const id = path.basename(chemin, '.js');
    const fiche = ficheDe(id);
    if (!fiche) continue;
    fiches++;
    if (typeof fiche.rangConseille === 'number') rangs.push(fiche.rangConseille);
    else sansRang++;
  }
  if (!fiches) return;   // aucune fiche : rien a verifier

  assert.strictEqual(sansRang, 0,
    'le rang conseille est TOUT OU RIEN : ' + sansRang + ' fiche(s) sur ' + fiches + ' n en portent pas');

  rangs.sort((a, b) => a - b);
  const attendu = Array.from({ length: fiches }, (_, i) => i + 1);
  assert.deepStrictEqual(rangs, attendu,
    'les rangs doivent former la suite 1..' + fiches + ' sans trou ni doublon, or on lit ' + rangs.join(','));
});

test('1re / progression : un prerequis precede toujours son chapitre', () => {
  /* Regle du pipeline (validerPrerequis, prof.js) : le chapitre vise doit avoir
     un rang conseille STRICTEMENT INFERIEUR. Ce test la redit ici pour que
     l'echec nomme le couple fautif plutot que de sortir a la compilation. */
  const rangParChapitre = new Map();   // numero de chapitre (1..n) -> rang conseille
  CHAPITRES.forEach((chemin, i) => {
    const fiche = ficheDe(path.basename(chemin, '.js'));
    if (fiche && typeof fiche.rangConseille === 'number') rangParChapitre.set(i + 1, fiche.rangConseille);
  });

  CHAPITRES.forEach((chemin, i) => {
    const id = path.basename(chemin, '.js');
    const fiche = ficheDe(id);
    if (!fiche || typeof fiche.rangConseille !== 'number') return;
    for (const num of (fiche.prerequis || [])) {
      assert.ok(rangParChapitre.has(num),
        id + ' : prerequis vers le chapitre ' + num + ', qui n a pas de fiche');
      assert.ok(rangParChapitre.get(num) < fiche.rangConseille,
        id + ' (rang ' + fiche.rangConseille + ') declare le chapitre ' + num +
        ' en prerequis, mais celui-ci est au rang ' + rangParChapitre.get(num) +
        ' : un prerequis doit PRECEDER dans la progression conseillee');
    }
  });
});
