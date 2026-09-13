/* Contrat de scripts/manuel/prof.js : la couche professeur v2.

   Ce qui se teste sans compiler : la repartition de l'annee (la somme des
   ordre du livre et les prerequis, valides a l echelle de l ouvrage),
   la validation des fiches (une competence hors referentiel est refusee),
   les totaux de la grille, et le chargement de la fiche pilote. */

const test = require('node:test');
const assert = require('node:assert');
const P = require('../prof.js');

function item(numero, dossier, titre, prof) {
  return { numero, dossier, prof: prof || null,
    mod: { id: dossier + '-' + numero, title: titre, subtitle: 'notions ' + numero } };
}

const MATHS = P.REFERENTIELS.maths;

/* Les dix modules de sixieme, DANS L'ORDRE DU LIVRE (celui de js/loader.js).
   L'ouvrage de reference du projet : quelques tests portent sur ses fiches
   reelles et pas seulement sur des doubles, parce que certaines regles ne se
   verifient que sur des donnees ecrites a la main — l'absence de champ de
   volume horaire, ou la coherence de la progression conseillee. La liste est
   redite ici plutot que relue depuis loader.js : un test doit echouer quand la
   realite change, pas suivre la realite en silence. */
const MODULES_6E = ['6e-fractions', '6e-volumes', '6e-angles', '6e-nombres-decimaux',
  '6e-addition-soustraction', '6e-multiplication', '6e-division',
  '6e-figures-geometriques', '6e-symetrie-axiale', '6e-perimetres-aires'];

// ── ordonner ──

test('les chapitres gardent l ordre du livre, numerotes a partir de 1 par niveau', () => {
  const items = [1, 2, 3].map(n => item(n, '5e', 'Chapitre ' + n));
  const lignes = P.ordonner(items);
  assert.deepStrictEqual(lignes.map(l => l.rang), [1, 2, 3]);
  assert.deepStrictEqual(lignes.map(l => l.titre), ['Chapitre 1', 'Chapitre 2', 'Chapitre 3']);
});

test('aucun calendrier ne subsiste dans les lignes de progression', () => {
  const lignes = P.ordonner([item(1, '6e', 'A', { seances: 8 })]);
  for (const cle of ['seances', 'semaineDebut', 'semaineFin', 'hebdo', 'budget']) {
    assert.ok(!(cle in lignes[0]), 'la ligne ne doit plus porter « ' + cle + ' »');
  }
});

test('les prerequis d une fiche sont repris avec le titre du chapitre vise', () => {
  const items = [item(1, '6e', 'Décimaux'), item(2, '6e', 'Fractions', { prerequis: [1] })];
  const lignes = P.ordonner(items);
  assert.strictEqual(lignes[0].prerequis, null);
  assert.deepStrictEqual(lignes[1].prerequis, [{ numero: 1, titre: 'Décimaux' }]);
});

test('deux niveaux sont numerotes separement, chacun repart de 1', () => {
  const lignes = P.ordonner([item(1, '6e', 'A'), item(2, '5e', 'B')]);
  assert.strictEqual(lignes[0].rang, 1);
  assert.strictEqual(lignes[1].rang, 1);
});

test('la progression imprimee annonce l ordre et les prerequis, jamais des semaines', () => {
  const items = [item(1, '6e', 'Décimaux'), item(2, '6e', 'Fractions', { prerequis: [1] })];
  const tex = P.progressionLatex(P.ordonner(items), { '6e': 'Sixième' });
  assert.ok(tex.includes("S'appuie sur"));
  assert.ok(tex.includes('ch.~1'));
  // La phrase d'introduction dit pourquoi il n'y a pas de calendrier ; ce
  // qui ne doit plus exister, c'est une colonne ou une valeur de calendrier.
  assert.ok(!/textbf\{Sem/.test(tex), 'plus de colonne « Sem. »');
  assert.ok(!/textbf\{Séances\}/.test(tex), 'plus de colonne « Séances »');
  assert.ok(!/h par semaine/.test(tex), 'plus d horaire hebdomadaire');
  assert.ok(!/séances de cours/.test(tex), 'plus de budget de séances');
});

// ── validerPrerequis ──

function itemsAvecPrerequis(prerequis, dossier) {
  const a = item(1, '6e', 'Décimaux');
  const b = item(2, dossier || '6e', 'Fractions', { prerequis });
  a.numero = 1; b.numero = 2;
  return [a, b];
}

test('un prerequis vers un chapitre anterieur du meme niveau est accepte', () => {
  assert.deepStrictEqual(P.validerPrerequis(itemsAvecPrerequis([1])), []);
});

test('un prerequis vers un chapitre absent du niveau est refuse', () => {
  const pb = P.validerPrerequis(itemsAvecPrerequis([9]));
  assert.strictEqual(pb.length, 1);
  // Le reproche nomme le NIVEAU depuis 2026-09-13 : les numeros de prerequis y
  // sont resolus, et « absent de cet ouvrage » aurait ete faux sur un ouvrage
  // de cycle ou le chapitre 9 existe, mais dans un autre niveau.
  assert.match(pb[0], /absent du niveau 6e/);
});

/* REGLE CHANGEE LE 2026-09-12. Ce test disait « un prerequis vers un chapitre
   posterieur DANS LE LIVRE est refuse ». Il ne peut plus dire cela : la
   contrainte porte desormais sur la PROGRESSION CONSEILLEE, precisement pour
   qu'un chapitre place tot dans le livre puisse declarer un prerequis vers un
   chapitre place plus loin — c'est le cas de quatre chapitres de sixieme sur
   dix (Fractions, Volumes, Angles, Symetrie), qui etaient jusque-la contraints
   de mentir par omission. Ce qui reste refuse, c'est le prerequis qui ne
   PRECEDE PAS dans l'ordre d'enseignement : voir les deux tests suivants. */
test('un prerequis vers un chapitre posterieur DANS LE LIVRE est accepte s il precede dans la progression', () => {
  // ch. 1 (rang conseille 2) s'appuie sur ch. 2 (rang conseille 1) : c'est
  // exactement la situation « Fractions s'appuie sur les decimaux ».
  const a = item(1, '6e', 'Fractions', { prerequis: [2], rangConseille: 2 });
  const b = item(2, '6e', 'Décimaux', { rangConseille: 1 });
  assert.deepStrictEqual(P.validerPrerequis([a, b]), []);
});

test('un prerequis qui ne precede pas dans la progression conseillee est refuse', () => {
  const a = item(1, '6e', 'Fractions', { prerequis: [2], rangConseille: 1 });
  const b = item(2, '6e', 'Décimaux', { rangConseille: 2 });
  const pb = P.validerPrerequis([a, b]);
  assert.strictEqual(pb.length, 1);
  assert.match(pb[0], /progression conseillée/);
  // Le message doit nommer les DEUX ordres : le lecteur a le livre sous les
  // yeux et chercherait sinon une erreur inexistante dans la numerotation.
  assert.match(pb[0], /rang conseillé/);
});

test('sans rangConseille nulle part, la regle redevient celle de l ordre du livre', () => {
  /* Compatibilite des 19 autres ouvrages du catalogue, qui n'ont pas encore
     de progression conseillee ecrite : le rang conseille retombe sur le rang
     dans le livre, et un renvoi vers l'aval redevient un reproche. */
  const items = itemsAvecPrerequis([]);
  items[0].prof = { prerequis: [2] };
  const pb = P.validerPrerequis(items);
  assert.strictEqual(pb.length, 1);
  assert.match(pb[0], /progression conseillée/);
});

test('un cycle de prerequis est nomme en un seul reproche', () => {
  /* Theoriquement inatteignable via la contrainte de rang, qui est un ordre
     total strict. Le controle existe pour survivre a un relachement futur de
     cette contrainte, et parce qu'un cycle nomme « ch. 1 -> ch. 2 -> ch. 1 »
     vaut mieux que trois reproches de rang exacts et opaques. On le teste donc
     sans rang conseille, la ou il peut se produire. */
  const a = item(1, '6e', 'A', { prerequis: [2] });
  const b = item(2, '6e', 'B', { prerequis: [1] });
  const pb = P.validerPrerequis([a, b]);
  const cycle = pb.filter(m => /cycle de prérequis/.test(m));
  assert.strictEqual(cycle.length, 1, 'le cycle doit etre signale une fois');
  assert.match(cycle[0], /ch\. 1 → ch\. 2 → ch\. 1/);
});

test('un rang conseille en double est refuse', () => {
  const a = item(1, '6e', 'A', { rangConseille: 1 });
  const b = item(2, '6e', 'B', { rangConseille: 1 });
  const pb = P.validerPrerequis([a, b]);
  assert.ok(pb.some(m => /déjà pris/.test(m)), 'un rang en double doit etre refuse');
});

test('un rang conseille hors de 1..n est refuse', () => {
  const a = item(1, '6e', 'A', { rangConseille: 1 });
  const b = item(2, '6e', 'B', { rangConseille: 7 });
  const pb = P.validerPrerequis([a, b]);
  assert.ok(pb.some(m => /attendu un entier de 1 à 2/.test(m)));
});

test('une progression conseillee partielle est refusee', () => {
  // Un ordre conseille qui ne classe que la moitie des chapitres ne classe
  // rien : le tableau afficherait des rangs incoherents.
  const a = item(1, '6e', 'A', { rangConseille: 1 });
  const b = item(2, '6e', 'B', {});
  const pb = P.validerPrerequis([a, b]);
  assert.ok(pb.some(m => /un ordre conseillé partiel ne classe rien/.test(m)));
});

test('rangsConseilles retombe sur l ordre du livre, par niveau', () => {
  const l = P.rangsConseilles([item(1, '6e', 'A'), item(2, '6e', 'B'), item(3, '5e', 'C')]);
  assert.strictEqual(l.get(1), 1);
  assert.strictEqual(l.get(2), 2);
  assert.strictEqual(l.get(3), 1, 'le second niveau repart de 1');
});

test('un chapitre qui se cite lui-meme est refuse', () => {
  const pb = P.validerPrerequis(itemsAvecPrerequis([2]));
  assert.strictEqual(pb.length, 1);
  assert.match(pb[0], /se cite lui-même/);
});

/* 2026-09-13 — CONTRAT CHANGE. Un numero de `prerequis` se lit desormais DANS
   LE NIVEAU de la fiche qui l'ecrit, et non dans la numerotation du livre.

   L'ancien contrat refusait tout renvoi qui, resolu globalement, tombait sur un
   autre niveau. Il tenait tant que le seul ouvrage a fiches etait la 6e,
   premier niveau du cycle, ou les deux numerotations coincident. Des que la 4e
   a recu ses fiches, `college-maths` a cesse de compiler : ses « ch. 3 »
   visaient des chapitres de 6e. Or une fiche de 4e ne PEUT pas connaitre le
   numero global de son chapitre, qui depend des niveaux empiles avant lui.

   Ici, le second item est un chapitre de 5e portant `prerequis: [1]`. Comme il
   est le seul de son niveau, son propre numero local vaut 1 : il se cite donc
   lui-meme, et c'est bien ce reproche-la qui doit sortir. */
test('un prerequis se resout dans le niveau de la fiche, pas dans le livre', () => {
  const pb = P.validerPrerequis(itemsAvecPrerequis([1], '5e'));
  assert.strictEqual(pb.length, 1);
  assert.match(pb[0], /se cite lui-même/);
});

/* Le cas qui motivait le changement : deux niveaux empiles, et le second
   chapitre du SECOND niveau renvoie a son propre chapitre 1. Numerote
   globalement il porte le numero 3 et son prerequis « 1 » designerait un
   chapitre du premier niveau — ce que l'ancienne regle refusait. */
test('un renvoi interne au second niveau d un ouvrage de cycle est accepte', () => {
  const a = item(1, '6e', 'Décimaux');
  const b = item(2, '4e', 'Relatifs', { rangConseille: 1 });
  const c = item(3, '4e', 'Puissances', { prerequis: [1], rangConseille: 2 });
  a.numero = 1; b.numero = 2; c.numero = 3;
  assert.deepStrictEqual(P.validerPrerequis([a, b, c]), []);
});

test('une fiche sans prerequis ne provoque aucun reproche', () => {
  const items = itemsAvecPrerequis(undefined);
  items[1].prof = { attendus: ['x'] };
  assert.deepStrictEqual(P.validerPrerequis(items), []);
});

// ── validerProf ──

function modAvecEvaluation(n) {
  return { id: 'x', evaluation: { questions: Array.from({ length: n }, () => ({ points: 2 })) }, quiz: [1, 2, 3] };
}

test('une competence hors referentiel est refusee en nommant la question', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r' }],
    competences: { evaluation: ['calculer', 'deviner'] } };
  const pb = P.validerProf(fiche, modAvecEvaluation(2), MATHS);
  assert.ok(pb.some(p => /question 2/.test(p) && /deviner/.test(p)));
});

test('un nombre de competences different du nombre de questions est refuse', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r' }],
    competences: { evaluation: ['calculer'] } };
  assert.ok(P.validerProf(fiche, modAvecEvaluation(3), MATHS).some(p => /3 question/.test(p)));
});

test('un renvoi vers une question d evaluation inexistante est refuse', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'evaluation', n: 9 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS).some(p => /question 9/.test(p)));
});

test('un renvoi vers un exercice au-dela des exercices numerotes est refuse', () => {
  // Depuis que generate() tire plusieurs taches distinctes, un renvoi vers un
  // rang que le tirage n'a pas atteint viserait un exercice jamais imprime.
  // Les nombres suivent EXERCICES_NUMEROTES, passe de 3 a 12 le 2026-09-12 :
  // c'est desormais le TIRAGE (6) qui borne, pas le seuil.
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'exercice', n: 9 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  const six = Array.from({ length: 6 }, () => ({ statement: 'x' }));
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS, six).some(p => /portent un numéro/.test(p)));
});

test('un renvoi vers un exercice numerote est accepte', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'exercice', n: 2 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  const six = Array.from({ length: 6 }, () => ({ statement: 'x' }));
  assert.deepStrictEqual(P.validerProf(fiche, modAvecEvaluation(2), MATHS, six), []);
});

test('sans la liste des exercices, le renvoi n est pas juge (appelant sans contexte)', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'exercice', n: 9 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  assert.deepStrictEqual(P.validerProf(fiche, modAvecEvaluation(2), MATHS), []);
});

test('une erreur sans remede est refusee', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c' }],
    competences: { evaluation: ['calculer', 'calculer'] } };
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS).some(p => /remede/.test(p)));
});

// ── grille ──

test('les totaux par competence suivent l ordre du referentiel et somment les points', () => {
  const evaluation = { questions: [{ points: 2 }, { points: 3 }, { points: 2 }] };
  const fiche = { competences: { evaluation: ['raisonner', 'calculer', 'calculer'] } };
  const totaux = P.totauxCompetences(evaluation, fiche, MATHS);
  assert.deepStrictEqual(totaux, [
    { competence: 'raisonner', questions: [1], points: 2 },
    { competence: 'calculer', questions: [2, 3], points: 5 }
  ]);
});

test('la grille imprimee porte le total et des cases a cocher', () => {
  const evaluation = { questions: [{ points: 2 }, { points: 3 }] };
  const fiche = { competences: { evaluation: ['raisonner', 'calculer'] } };
  const tex = P.grilleCompetences(evaluation, fiche, MATHS);
  assert.ok(tex.includes('\\textbf{5}'));
  assert.ok(tex.includes('$\\square$'));
  assert.ok(tex.includes('Raisonner'));
});

test('le renvoi de remediation nomme l exercice, la question du quiz ou de l evaluation', () => {
  assert.strictEqual(P.renvoi({ type: 'exercice', n: 2 }), 'Exercice \\thechapter.2');
  assert.strictEqual(P.renvoi({ type: 'evaluation', n: 4 }), "Question 4 de l'évaluation");
  assert.strictEqual(P.renvoi({ type: 'quiz', n: 1 }), 'Question 1 du quiz');
  assert.strictEqual(P.renvoi(null), '');
});

/* --- Renvoi vers la banque supplementaire (2026-09-12) -------------------
   La banque du professeur porte sa propre numerotation, repartant a 1
   (« Supplément N.x » dans chapitre.js). Sans type dedie, une remediation ne
   pouvait viser que les exercices du corps du chapitre. */

test('un renvoi de type supplement reprend le libelle imprime par chapitre.js', () => {
  assert.strictEqual(P.renvoi({ type: 'supplement', n: 4 }), 'Supplément \\thechapter.4');
});

test('un renvoi vers un supplement de la banque est accepte', () => {
  // 18 tirages, 12 numerotes : la banque compte 6 supplements, le 3e existe.
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'supplement', n: 3 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  const dixHuit = Array.from({ length: 18 }, () => ({ statement: 'x' }));
  assert.deepStrictEqual(P.validerProf(fiche, modAvecEvaluation(2), MATHS, dixHuit), []);
});

test('un renvoi au-dela de la banque reellement imprimee est refuse', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'supplement', n: 7 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  const dixHuit = Array.from({ length: 18 }, () => ({ statement: 'x' }));
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS, dixHuit)
    .some(p => /n'en compte que 6/.test(p)));
});

test('un renvoi vers un supplement est refuse quand le chapitre n a pas de banque', () => {
  // Tirage court : les 10 enonces sont tous numerotes, il n'y a aucun supplement.
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'supplement', n: 1 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  const dix = Array.from({ length: 10 }, () => ({ statement: 'x' }));
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS, dix)
    .some(p => /aucune banque supplémentaire/.test(p)));
});

test('le seuil d exercices numerotes de prof.js suit celui de chapitre.js', () => {
  /* prof.js redit la valeur au lieu de l'importer : chapitre.js require()
     prof.js, et l'inverse creerait un cycle. Ce test tient la promesse faite
     en commentaire — sans lui, deplacer EXERCICES_VISIBLES laisserait prof.js
     juger les renvois sur l'ancien seuil, en silence. */
  const { EXERCICES_VISIBLES } = require('../chapitre.js');
  // Un renvoi pile sur le seuil doit passer, le suivant non (tirage large).
  const large = Array.from({ length: EXERCICES_VISIBLES + 6 }, () => ({ statement: 'x' }));
  const avec = (n) => ({ erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'exercice', n } }], competences: { evaluation: ['calculer', 'calculer'] } });
  assert.deepStrictEqual(
    P.validerProf(avec(EXERCICES_VISIBLES), modAvecEvaluation(2), MATHS, large), [],
    'le dernier exercice numerote doit rester citable');
  assert.ok(
    P.validerProf(avec(EXERCICES_VISIBLES + 1), modAvecEvaluation(2), MATHS, large)
      .some(p => /portent un numéro/.test(p)),
    'le premier rang non numerote doit etre refuse');
});

test('un type de renvoi inconnu reste refuse', () => {
  const fiche = { erreurs: [{ titre: 't', eleve: 'e', cause: 'c', remede: 'r',
    exercice: { type: 'annexe', n: 1 } }], competences: { evaluation: ['calculer', 'calculer'] } };
  assert.ok(P.validerProf(fiche, modAvecEvaluation(2), MATHS)
    .some(p => /mal décrit/.test(p)));
});

// ── fiche pilote ──

test('la fiche pilote 6e-fractions se charge et passe la validation contre le module reel', () => {
  const { chargerModule } = require('../extract.js');
  const r = chargerModule('js/data/6e/6e-fractions.js', { graine: 1, tirages: 3 });
  const fiche = P.chargerProf('6e-fractions', '6e');
  assert.ok(fiche && fiche.erreurs.length >= 3);
  assert.deepStrictEqual(P.validerProf(fiche, r.module, MATHS), []);
});

test('un module sans fiche renvoie null, pas une erreur', () => {
  assert.strictEqual(P.chargerProf('6e-inexistant', '6e'), null);
});

/* ---- Progression et grille de suivi, relecture du 2026-09-12 ---- */

test('la colonne « Prépare » est le lien de prerequis lu a l envers', () => {
  /* « S'appuie sur » ne repondait qu'a une moitie de la question : il disait
     ce qu'il faut avoir fait avant, pas ce que le chapitre conditionne — donc
     pas ce qu'il en coute de le sauter. Rien n'est invente : c'est la
     relation deja ecrite dans les fiches, prise dans l'autre sens. */
  const items = [
    item(1, '6e', 'Décimaux'),
    item(2, '6e', 'Addition', { prerequis: [1] }),
    item(3, '6e', 'Division', { prerequis: [1, 2] })
  ];
  const l = P.ordonner(items);
  assert.deepStrictEqual(l[0].prepare.map(p => p.numero), [2, 3], 'ch. 1 prepare 2 et 3');
  assert.deepStrictEqual(l[1].prepare.map(p => p.numero), [3], 'ch. 2 prepare 3');
  assert.strictEqual(l[2].prepare, null, 'le dernier chapitre ne prepare rien');
});

test('un chapitre sans prerequis declare ne se voit inventer aucun lien', () => {
  // Cinq des dix chapitres de sixieme ont `prerequis: []`. La colonne doit
  // rester vide plutot que de deviner : c'est la regle du pipeline.
  const l = P.ordonner([item(1, '6e', 'A'), item(2, '6e', 'B')]);
  assert.strictEqual(l[0].prerequis, null);
  assert.strictEqual(l[0].prepare, null);
  const tex = P.progressionLatex(l, { '6e': 'Sixième' });
  /* Depuis le paysage du 2026-09-12, le tableau porte une colonne « Chap. »
     qui ecrit « ch.~N » sur CHAQUE ligne : chercher « ch.~ » ne distingue plus
     un renvoi fabrique d'un simple numero de chapitre. On teste donc ce qui
     compte vraiment — que les deux colonnes de renvoi restent au tiret. */
  const tirets = (tex.match(/\\textcolor\{gris\}\{--\}/g) || []).length;
  assert.strictEqual(tirets, 4, 'deux chapitres x deux colonnes de renvoi vides');
});

test('la legende dit ce que veut dire une case vide dans « S appuie sur »', () => {
  /* Sans cette phrase, l'enseignant lit « ce chapitre ne s'appuie sur rien »
     la ou il faut lire « aucun prerequis n'a encore ete ecrit ». Deux des
     chapitres a case vide portent dans leur propre fiche la note qu'ils
     devraient s'appuyer sur les decimaux. */
  const tex = P.progressionLatex(P.ordonner([item(1, '6e', 'A')]), { '6e': 'Sixième' });
  assert.ok(/aucun prérequis n'est déclaré/.test(tex),
    'la legende ne desambigue pas le tiret');
});

test('la progression n avance aucun volume ni calendrier', () => {
  /* Le calendrier est refuse et documente. Le VOLUME l'est aussi, et pour une
     autre raison : rien dans les donnees ne permet de le deriver honnetement
     (les dix chapitres de sixieme ont le meme profil, et le nombre
     d'exercices est un parametre de build, pas une propriete du chapitre).
     Une estimation fabriquee serait pire que pas d'estimation.
     Reconfirme le 2026-09-12 : un champ `seances` a ete envisage puis ecarte.
     Ce test est ce qui empeche de le reintroduire par inadvertance. */
  const tex = P.progressionLatex(P.ordonner([item(1, '6e', 'A', { attendus: ['x'] })]),
    { '6e': 'Sixième' });
  // La seule mention autorisee est la phrase de la legende qui EXPLIQUE
  // l'absence de calendrier ; on la retire avant de chercher.
  const sansLegende = tex.replace(/Sans calendrier ni volume horaire[^}]*?établissement\./, '');
  for (const mot of [/semaine/i, /séance/i, /heures/i, /volume horaire/i, /trimestre/i]) {
    assert.ok(!mot.test(sansLegende),
      'la progression avance un volume ou un calendrier : ' + mot);
  }
});

test('aucune fiche de sixieme ne porte de champ de volume horaire', () => {
  /* La decision du 2026-09-12 vaut aussi pour les DONNEES : pas de champ
     `seances` dans les fiches, sans quoi la colonne finirait par reapparaitre.
     Verifie sur les fiches reelles, pas sur des doubles. */
  for (const id of MODULES_6E) {
    const fiche = P.chargerProf(id, '6e');
    for (const cle of ['seances', 'volume', 'duree', 'heures', 'semaines']) {
      assert.ok(!(cle in fiche), id + ' porte un champ de volume horaire « ' + cle + ' »');
    }
  }
});

/* Le gabarit d'un longtable en paysage : le nombre de colonnes et leur
   largeur totale. Un gabarit desaccorde du nombre de « & » fait echouer la
   compilation huit minutes plus tard ; une largeur totale trop grande la fait
   REUSSIR en debordant silencieusement, ce qui est pire. On verifie les deux
   en deux secondes. Sert aux deux tableaux paysage (2026-09-12). */
function gabaritPaysage(tex) {
  const m = /\\begin\{longtable\}\{@\{\}((?:(?:>\{[^{}]*(?:\{[^{}]*\})?[^{}]*\})?p\{[\d.]+cm\})+)@\{\}\}/.exec(tex);
  assert.ok(m, 'gabarit du tableau introuvable');
  const largeurs = [...m[1].matchAll(/p\{([\d.]+)cm\}/g)].map(x => parseFloat(x[1]));
  const sep = /\\setlength\{\\tabcolsep\}\{([\d.]+)pt\}/.exec(tex);
  assert.ok(sep, 'tabcolsep non fixe : la largeur du tableau n\'est pas maitrisee');
  // tabcolsep s'applique DE CHAQUE COTE de CHAQUE colonne. C'est l'oubli qui
  // avait fait deborder la grille de suivi de classe de 183,7 pt en 2026-09.
  const total = largeurs.reduce((s, x) => s + x, 0) +
    largeurs.length * 2 * parseFloat(sep[1]) / 28.4527;  // pt -> cm
  return { colonnes: largeurs.length, total };
}

/* 20,8 cm : la hauteur du papier (244 mm) moins les marges haute et basse de
   geometry (18 + 18). Au-dela, le tableau sort de la page tournee. */
const UTILE_PAYSAGE_CM = 20.8;

test('le tableau de progression est en paysage, a six colonnes, et tient dans la page tournee', () => {
  const tex = P.progressionLatex(P.ordonner([item(1, '6e', 'A', { prerequis: [] })]),
    { '6e': 'Sixième' });
  assert.ok(/\\begin\{landscape\}/.test(tex) && /\\end\{landscape\}/.test(tex),
    'la progression doit etre en paysage (pdflscape)');
  // longtable et non tabular : un tabular est insecable, et le tableau des dix
  // chapitres de sixieme peut depasser la page.
  assert.ok(/\\endhead/.test(tex),
    'sans \\endhead, la seconde page du tableau n\'aurait pas d\'en-tete');
  const g = gabaritPaysage(tex);
  assert.strictEqual(g.colonnes, 6,
    'rang, chapitre, titre, s\'appuie sur, prepare, traite');
  assert.ok(g.total <= UTILE_PAYSAGE_CM,
    'le tableau fait ' + g.total.toFixed(2) + ' cm pour ' + UTILE_PAYSAGE_CM + ' utiles');
  const entete = /\\textbf\{Rang\}([^\n]*)/.exec(tex);
  assert.ok(entete, 'en-tete du tableau introuvable');
  assert.strictEqual(entete[0].split('&').length, g.colonnes,
    'en-tete desaccordee du gabarit');
  // La ligne de donnees : celle qui commence par le rang conseille. La
  // chercher plutot que de compter les \hline — depuis longtable il y a
  // \endhead entre l'en-tete et la premiere ligne.
  const ligne = tex.split('\n').find(l => /^1 & ch/.test(l));
  assert.ok(ligne, 'aucune ligne de donnees dans le tableau');
  assert.strictEqual(ligne.split('&').length, g.colonnes,
    'ligne de donnees desaccordee du gabarit');
});

// ── progression conseillee ──

test('les lignes sortent dans l ordre de la progression conseillee, pas dans celui du livre', () => {
  /* LE point du diagnostic : l'ancienne page listait les chapitres dans
     l'ordre du LIVRE, c'est-a-dire la table des matieres avec des colonnes.
     Un enseignant qui ouvre une progression veut l'ordre d'ENSEIGNEMENT. */
  const items = [
    item(1, '6e', 'Fractions', { rangConseille: 3 }),
    item(2, '6e', 'Décimaux', { rangConseille: 1 }),
    item(3, '6e', 'Division', { rangConseille: 2 })
  ];
  const l = P.ordonner(items);
  assert.deepStrictEqual(l.map(x => x.titre), ['Décimaux', 'Division', 'Fractions']);
  assert.deepStrictEqual(l.map(x => x.rang), [1, 2, 3], 'rang = rang conseille');
  assert.deepStrictEqual(l.map(x => x.numero), [2, 3, 1], 'le numero du livre est conserve');
});

test('ordonner ne mute pas la liste que lui passe l appelant', () => {
  // `sort` mute : sans slice(), build.js verrait ses chapitres reordonnes et
  // le corps du livre sortirait dans l'ordre de la progression.
  const items = [item(1, '6e', 'A', { rangConseille: 2 }), item(2, '6e', 'B', { rangConseille: 1 })];
  P.ordonner(items);
  assert.deepStrictEqual(items.map(i => i.numero), [1, 2], 'items a ete reordonne');
});

test('seul le chapitre qui s appuie sur l aval du livre est signale', () => {
  /* Ce que `decale` signale a ete RESTREINT apres controle visuel sur PDF
     (2026-09-12) : marquer tout chapitre dont le rang conseille differe du
     rang du livre marquait les DIX chapitres de sixieme, et un signal qui se
     declenche partout n'est plus un signal. Seule compte la contradiction —
     le chapitre qu'on ne peut PAS traiter a sa place dans le sommaire, parce
     qu'il s'appuie sur un chapitre situe plus loin. */
  const items = [
    // ch. 1 s'appuie sur ch. 2, qui vient APRES lui dans le livre : signale.
    item(1, '6e', 'Fractions', { rangConseille: 2, prerequis: [2] }),
    // ch. 2 n'a pas de prerequis : deplace dans la progression, mais sans
    // contradiction, donc NON signale.
    item(2, '6e', 'Décimaux', { rangConseille: 1 })
  ];
  const l = P.ordonner(items);
  const parNum = new Map(l.map(x => [x.numero, x]));
  assert.strictEqual(parNum.get(1).decale, true, 'ch. 1 s appuie sur son aval');
  assert.strictEqual(parNum.get(2).decale, false,
    'ch. 2 est deplace mais sans contradiction : ne pas le signaler');
  const tex = P.progressionLatex(l, { '6e': 'Sixième' });
  assert.ok(/dont 1 à ne pas prendre dans l'ordre du livre/.test(tex),
    'le titre de niveau doit annoncer le compte');
  // La couleur ne porte JAMAIS seule une information : photocopie en noir et
  // blanc, lecteur daltonien. Le sigle la redouble, et la legende le traduit.
  assert.ok(/triangleright/.test(tex), 'le signal doit exister hors de la couleur');
  assert.ok(/s'appuie sur un chapitre situé plus loin dans le livre/.test(tex),
    'la legende ne traduit pas le sigle');
});

test('sur la sixieme reelle, trois chapitres s appuient sur l aval du livre', () => {
  /* Fractions (ch. 1, s'appuie sur 4 et 7), Volumes (ch. 2, sur 4, 6 et 10)
     et Angles (ch. 3, sur 4 et 8) sont places dans le livre AVANT ce dont ils
     ont besoin : ce sont eux que la page doit signaler.

     Symetrie axiale (ch. 9) faisait partie des quatre chapitres a
     `prerequis: []` du diagnostic, et elle a bien recu ses vrais prerequis
     (ch. 4 et ch. 8) ; mais tous deux la PRECEDENT dans le livre, donc elle ne
     presente aucune contradiction et n'est pas signalee. Deux constats
     distincts qu'il est facile de confondre : « la fiche ne declarait pas ses
     prerequis » et « le livre place le chapitre trop tot ».

     Verifie sur les fiches reelles pour qu'une reecriture de prerequis ne
     fasse pas disparaitre le signal sans qu'on s'en apercoive. */
  const items = MODULES_6E.map((id, i) => ({
    numero: i + 1, dossier: '6e', prof: P.chargerProf(id, '6e'),
    mod: { id, title: id, subtitle: '' }
  }));
  const signales = P.ordonner(items).filter(l => l.decale).map(l => l.numero).sort((a, b) => a - b);
  assert.deepStrictEqual(signales, [1, 2, 3]);
});

// ── suivi des notions ──

test('le suivi des notions coche les attendus officiels, un par ligne', () => {
  /* Maille retenue : les 30 attendus du programme, et non les 55 keywords des
     modules — on ne coche pas « Pi », qui est une etiquette d'indexation et
     pas une chose qu'on traite ou qu'on ne traite pas. */
  const items = [item(1, '6e', 'Décimaux', { rangConseille: 1, attendus: ['Comparer', 'Ranger', 'Encadrer'] })];
  const tex = P.suiviNotionsLatex(P.ordonner(items), { '6e': 'Sixième' });
  assert.ok(/\\begin\{landscape\}/.test(tex), 'le suivi doit etre en paysage');
  for (const a of ['Comparer', 'Ranger', 'Encadrer']) {
    assert.ok(tex.includes(a), 'attendu absent de la grille : ' + a);
  }
  // Trois etats et une date : « pas vu » et « vu mais pas acquis » n'appellent
  // pas la meme decision en avril, et une grille sans date ne dit plus, six
  // mois apres, si la notion a ete vue en septembre ou la semaine derniere.
  for (const col of ['Vu', 'À revoir', 'Évalué', 'Date']) {
    assert.ok(new RegExp('\\\\textbf\\{' + col + '\\}').test(tex), 'colonne absente : ' + col);
  }
  // Trois cases par attendu, trois attendus.
  assert.strictEqual((tex.match(/\$\\square\$/g) || []).length, 9);
});

test('la grille de suivi des notions tient dans la page tournee', () => {
  const items = [item(1, '6e', 'A', { rangConseille: 1, attendus: ['x'] })];
  const g = gabaritPaysage(P.suiviNotionsLatex(P.ordonner(items), { '6e': 'Sixième' }));
  assert.strictEqual(g.colonnes, 6, 'chapitre, attendu, vu, a revoir, evalue, date');
  assert.ok(g.total <= UTILE_PAYSAGE_CM,
    'la grille fait ' + g.total.toFixed(2) + ' cm pour ' + UTILE_PAYSAGE_CM + ' utiles');
});

test('aucune grille de suivi n est imprimee quand aucun attendu n est ecrit', () => {
  // Les 19 autres ouvrages du catalogue sont dans ce cas au 2026-09-12 : une
  // grille vide serait pire qu'une grille absente.
  assert.strictEqual(P.suiviNotionsLatex(P.ordonner([item(1, '6e', 'A')]), { '6e': 'Sixième' }), '');
});

test('les attendus ne sont plus dans le tableau de pilotage', () => {
  /* Decision du 2026-09-12 : trois phrases de programme par ligne mangeaient
     la moitie du tableau. Elles deviennent la matiere du suivi des notions. */
  const items = [item(1, '6e', 'A', { rangConseille: 1, attendus: ['Comparer et ranger des décimaux'] })];
  const lignes = P.ordonner(items);
  assert.ok(!P.progressionLatex(lignes, { '6e': 'Sixième' }).includes('Comparer et ranger'),
    'un attendu est reste dans le tableau de pilotage');
  assert.ok(P.suiviNotionsLatex(lignes, { '6e': 'Sixième' }).includes('Comparer et ranger'),
    'l attendu n a pas ete repris dans le suivi');
});

// ── la sixieme, ouvrage de reference : verifications sur les fiches reelles ──

test('la progression conseillee de la sixieme est un ordre total coherent', () => {
  /* Verifie sur les DIX fiches reelles, pas sur des doubles : c'est l'ouvrage
     de reference du projet, et un rang en double ou un prerequis qui ne
     precede pas ne se verrait qu'a la compilation. */
  const items = MODULES_6E.map((id, i) => ({
    numero: i + 1, dossier: '6e', prof: P.chargerProf(id, '6e'),
    mod: { id, title: id, subtitle: '' }
  }));
  assert.deepStrictEqual(P.validerPrerequis(items), []);
  const rangs = P.rangsConseilles(items);
  assert.deepStrictEqual([...rangs.values()].sort((a, b) => a - b),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'les rangs doivent former 1..10');
  // Les quatre chapitres que le diagnostic avait identifies comme arrivant
  // avant leurs prerequis portent desormais de vrais prerequis.
  for (const id of ['6e-fractions', '6e-volumes', '6e-angles', '6e-symetrie-axiale']) {
    const f = P.chargerProf(id, '6e');
    assert.ok(f.prerequis.length, id + ' devrait declarer ses prerequis');
  }
});

// ── grille de suivi de classe ──

test('la grille de suivi accueille une classe de 30 et non de 26', () => {
  // 26 etait le nombre que la mise en page laissait passer, pas un effectif :
  // une grille ou il manque quatre eleves se refait a la main.
  const g = P.grilleSuiviClasse(MATHS);
  assert.strictEqual((g.match(/\\rule\{0pt\}\{5\.3mm\}/g) || []).length, 30);
  assert.ok(g.includes('30.'), 'la trentieme ligne n\'est pas numerotee');
});

/* Le gabarit d'UNE moitie de grille : la grille en compte deux, avec le meme
   gabarit. Les compter ensemble donnerait le double de colonnes. */
function gabaritGrille(g) {
  const m = /\\begin\{tabular\}\{\|(p\{[\d.]+mm\})\|((?:[^{}]|\{[^{}]*\})*)\}/.exec(g);
  assert.ok(m, 'gabarit de la grille introuvable');
  // La colonne du nom est relue telle quelle, jamais recopiee : c'est le
  // chiffre qu'on ajuste quand la grille deborde d'un millimetre.
  return [...(m[1] + m[2]).matchAll(/p\{([\d.]+)mm\}/g)].map(x => parseFloat(x[1]));
}

test('la grille suit chaque competence sur les trois trimestres', () => {
  /* Une seule case par competence enregistrait un etat, alors que la question
     posee devant une grille de competences est « est-ce que ca progresse ».
     Trois colonnes y repondent sur une meme feuille. Chaque moitie porte son
     en-tete complete, donc chacune reste lisible seule : d'ou le x2. */
  const g = P.grilleSuiviClasse(MATHS);
  const n = MATHS.competences.length, moities = 2;
  assert.strictEqual((g.match(/\{\\tiny T1\}/g) || []).length, n * moities, 'colonnes T1');
  assert.strictEqual((g.match(/\{\\tiny T3\}/g) || []).length, n * moities, 'colonnes T3');
  // La competence coiffe ses trois trimestres : sans multicolumn, l'en-tete
  // tournee se repeterait dix-huit fois et la grille serait illisible.
  assert.strictEqual((g.match(/\\multicolumn\{3\}/g) || []).length, n * moities);
});

test('la grille ne peut pas deborder de la largeur utile de la page', () => {
  /* Contrainte mesuree, pas estimee : le premier essai a rendu « Overfull
     \hbox (183,7 pt too wide) » a la compilation, parce que le calcul avait
     oublie \tabcolsep — 6 pt de CHAQUE COTE de chacune des 19 colonnes, soit
     80 mm de marge interne avant la moindre colonne. D'ou le \tabcolsep a
     1,5 pt, sans lequel ce test passerait alors que la grille deborde. */
  const g = P.grilleSuiviClasse(MATHS);
  assert.ok(/\\setlength\{\\tabcolsep\}\{1\.5pt\}/.test(g),
    'sans tabcolsep reduit, les 19 colonnes ajoutent 80 mm de marge interne');
  const largeurs = gabaritGrille(g);
  const colonnes = largeurs.length;
  // 143 mm utiles = 170 de page - 12,7 de gouttiere - 14 de marge exterieure.
  // On compte tout : les p{}, les 2 x 1,5 pt de chaque colonne (0,53 mm) et
  // les filets verticaux (0,4 pt chacun).
  const filets = 2 + MATHS.competences.length;
  const total = largeurs.reduce((s, x) => s + x, 0) +
    colonnes * 2 * 1.5 * 0.3515 + filets * 0.4 * 0.3515;
  assert.ok(total < 143, 'la grille reclame ' + total.toFixed(1) + ' mm pour 143 mm utiles');
  assert.strictEqual(colonnes, 1 + 3 * MATHS.competences.length);
});

test('la grille se coupe en deux pages plutot que de deborder en hauteur', () => {
  /* 30 lignes a 5,3 mm plus l'en-tete tournee demandaient 181 mm pour le seul
     tableau, dans une page qui en offre 208 titre et chapeau compris : le
     premier essai a rendu « Overfull \vbox (85,0 pt too high) ». La coupure
     est explicite — laisser LaTeX trancher un tabular non breakable est
     precisement ce qui produisait le debordement. */
  const g = P.grilleSuiviClasse(MATHS);
  assert.strictEqual((g.match(/\\begin\{tabular\}/g) || []).length, 2,
    'la grille doit tenir sur deux tableaux, un par page');
  assert.ok(g.includes('\\clearpage'), 'la coupure de page n\'est pas explicite');
  // La seconde moitie doit reprendre a 16, pas a 1 : deux pages numerotees
  // pareil ne servent a rien.
  assert.ok(/Élèves 16 à 30/.test(g), 'la seconde moitie ne dit pas quels eleves elle porte');
  assert.ok(g.includes('16.') && g.includes('30.'), 'la seconde moitie ne va pas de 16 a 30');
});

test('la grille reste accordee au referentiel de la matiere', () => {
  // Le referentiel de physique n'a que cinq competences : la grille doit
  // suivre, pas rester calee sur les six des mathematiques.
  const g = P.grilleSuiviClasse(P.REFERENTIELS.physique);
  assert.strictEqual(gabaritGrille(g).length,
    1 + 3 * P.REFERENTIELS.physique.competences.length);
  assert.ok(g.includes('Analyser'), 'une competence du referentiel manque');
});

test('la grille ne tutoie pas et dit a quoi servent les trois colonnes', () => {
  const g = P.grilleSuiviClasse(MATHS);
  assert.ok(!/\btu\b|\bton\b/i.test(g), 'la grille tutoie son lecteur');
  assert.ok(/progression sur l'année/.test(g),
    'la grille ne dit pas pourquoi les trois colonnes sont cote a cote');
});
