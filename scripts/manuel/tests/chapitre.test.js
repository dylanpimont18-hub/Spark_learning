const test = require('node:test');
const assert = require('node:assert');
const { composerChapitre, objectifs, prerequis } = require('../chapitre.js');
const C = require('../chapitre.js');

/* `chapitre.js` n'avait aucun test. Les trois defauts corriges le 2026-08-16
   ont tous atteint le PDF imprime sans qu'une seule erreur LaTeX ne les
   signale : ils ne cassent pas la compilation, ils composent faux. */

function module_(extra) {
  return Object.assign({
    id: 'test-module',
    title: 'Fractions',
    keywords: ['Numérateur', 'Dénominateur'],
    cours: {
      intro: 'Une fraction.',
      definitions: [
        { term: 'Fraction', def: 'Écriture $\\dfrac{a}{b}$.' },
        { term: 'Fraction irréductible', def: 'On ne peut plus la simplifier.' },
        { term: 'Diviseur commun', def: 'Divise les deux termes.' }
      ],
      method: { title: 'En 3 étapes', steps: ['Un.', 'Deux.', 'Trois.'] },
      formulas: ['$a = b$'],
      recap: ['Point clé.'],
      piege: 'Attention.'
    },
    evaluation: {
      duration: '20 min',
      questions: [
        { statement: 'Combien ?', type: 'numeric', answer: 3, tolerance: 0,
          unit: '', points: 2, correction: 'Trois.' },
        { statement: 'Avec unité ?', type: 'numeric', answer: 12, tolerance: 0,
          unit: 'cm', points: 2, correction: 'Douze centimètres.' },
        { statement: 'Laquelle ?', type: 'multiple-choice', options: ['A', 'B'],
          answer: 1, points: 2, correction: 'La seconde.' }
      ]
    }
  }, extra || {});
}

const exercice = {
  statement: 'Simplifie.', hint: 'Divise par 2.',
  solution: ['Étape.'], answer: 0.5, unit: ''
};

/* ---- La double conversion LaTeX ---- */

test('objectifs et prerequis renvoient du texte brut, jamais du LaTeX', () => {
  /* C'est le contrat qui empeche la double conversion : `liste()` convertit,
     eux non. Les faire convertir aussi imprimait « \{}ensuremath{\{}to} » en
     clair dans le bloc « Pour l'enseignant ». */
  const mod = module_({ physics: 'Masse volumique $\\rho = m/V$ → trouver $m$' });
  for (const ligne of [...objectifs(mod), ...prerequis(mod)]) {
    assert.ok(!ligne.includes('\\ensuremath'), 'LaTeX deja converti : ' + ligne);
    assert.ok(!ligne.includes('\\textbf'), 'LaTeX deja converti : ' + ligne);
  }
});

test('un symbole Unicode du bloc professeur ne fuit pas en LaTeX imprime', () => {
  const mod = module_({ physics: 'Transformer $\\rho = m/V$ → trouver $m$' });
  const tex = composerChapitre(mod, [exercice], { professeur: true });
  assert.ok(!tex.includes('textbackslash'), 'un antislash a ete echappe deux fois');
  assert.ok(!/\\\{\}ensuremath/.test(tex), 'la commande ensuremath s\'imprime au lieu de s\'executer');
  assert.ok(tex.includes('\\ensuremath{\\to}'), 'la fleche n\'a pas ete traduite');
});

/* ---- Les objectifs auto-generes ---- */

test('les definitions donnent UN objectif, pas un par terme', () => {
  // Trois puces « Definir et employer correctement : X. » quasi identiques
  // se suivaient dans chacun des 48 chapitres.
  const buts = objectifs(module_());
  const definir = buts.filter(b => b.startsWith('Définir et employer'));
  assert.strictEqual(definir.length, 1, 'un objectif par definition subsiste');
  for (const terme of ['Fraction', 'Fraction irréductible', 'Diviseur commun']) {
    assert.ok(definir[0].includes(terme), 'terme absent de l\'objectif : ' + terme);
  }
});

/* ---- L'unite absente ---- */

test('un corrige sans unite ne laisse pas d espace avant la parenthese', () => {
  // « Corrigé (3 ) » : 83 fois dans college-maths.
  const tex = composerChapitre(module_(), [exercice], { professeur: true });
  assert.ok(!/ \)/.test(tex), 'espace parasite avant une parenthese fermante');
  assert.ok(tex.includes('Corrigé ($3$)'), 'le corrige numerique a change de forme');
  assert.ok(tex.includes('Corrigé ($12$ cm)'), 'l\'unite presente doit rester separee');
});

/* ---- L'edition eleve ---- */

test('l espace de reponse eleve est annonce et borne', () => {
  // Un \vspace nu suivi d'un filet se lit comme un trou de composition.
  const tex = composerChapitre(module_(), [exercice], { professeur: false });
  assert.ok(tex.includes('Ta réponse :'), 'l\'espace de redaction n\'est pas annonce');
  assert.ok(!tex.includes('Réponse :} $'), 'l\'edition eleve porte une reponse');
});

test('le bareme n ecrit jamais en blanc sur un fond clair', () => {
  // ardoise!25 + texte blanc : moins de 1,5:1 de contraste.
  const tex = composerChapitre(module_(), [exercice], { professeur: true });
  assert.ok(!/\\node\[font=\\tiny, white\]/.test(tex), 'libelle blanc sur fond clair');
});

/* ---- Schemas principal et secondaires (cours.diagram / cours.diagrams[]) ---
   Ajoutes le 2026-08-20 en meme temps que le support de cours.diagrams[] dans
   figures.js/chapitre.js : avant cette date-la composerChapitre() n'avait
   aucun test sur ce chemin, primaire compris. */

function moduleAvecSchema(diagram, diagrams) {
  return module_({ cours: Object.assign({}, module_().cours, { diagram, diagrams }) });
}

const diagramUtilisable = {
  caption: 'Le schema principal', notes: ['Une note.'], reading: 'Lis la courbe de gauche a droite.'
};
const figUtilisable = { provenance: 'svg-exact', tikz: '\\draw (0,0) -- (1,1);' };
const figBloquee = { provenance: null, raison: 'conversion impossible' };

test('un schema principal utilisable ouvre la section Schema', () => {
  const mod = moduleAvecSchema(diagramUtilisable);
  const tex = composerChapitre(mod, [exercice], { figure: figUtilisable });
  assert.ok(tex.includes('\\section{Schéma}'), 'section Schema absente');
  assert.ok(tex.includes(figUtilisable.tikz), 'le TikZ du schema principal manque');
  assert.ok(tex.includes('Le schema principal'), 'la legende du schema principal manque');
});

test('un schema principal bloque (sans provenance) ne laisse aucune trace dans le chapitre', () => {
  // figureUtilisable() est le seul garde-fou : rien d\'autre ne doit inserer
  // une figure qui ne l\'a pas passe.
  const mod = moduleAvecSchema(diagramUtilisable);
  const tex = composerChapitre(mod, [exercice], { figure: figBloquee });
  assert.ok(!tex.includes('\\section{Schéma}'), 'section Schema presente malgre le blocage');
  assert.ok(!tex.includes('begin{figure}'), 'figure inseree malgre le blocage');
});

test('les schemas secondaires (cours.diagrams[]) s inserent apres le principal', () => {
  const diagramSecondaire = { caption: 'Le schema secondaire', reading: 'Regarde le second axe.' };
  const figSecondaire = { provenance: 'svg-exact', tikz: '\\draw (2,2) -- (3,3);' };
  const mod = moduleAvecSchema(diagramUtilisable, [diagramSecondaire]);
  const tex = composerChapitre(mod, [exercice],
    { figure: Object.assign({}, figUtilisable, { secondaires: [figSecondaire] }) });

  assert.ok(tex.includes(figUtilisable.tikz), 'le schema principal manque');
  assert.ok(tex.includes(figSecondaire.tikz), 'le schema secondaire manque');
  assert.ok(tex.includes('Le schema secondaire'), 'la legende du schema secondaire manque');
  assert.strictEqual((tex.match(/\\section\{Schéma\}/g) || []).length, 1,
    'la section Schema doit apparaitre une seule fois, meme avec plusieurs schemas');
});

test('un schema secondaire bloque est omis sans faire disparaitre le principal', () => {
  const diagramSecondaire = { caption: 'Le schema secondaire' };
  const mod = moduleAvecSchema(diagramUtilisable, [diagramSecondaire]);
  const tex = composerChapitre(mod, [exercice],
    { figure: Object.assign({}, figUtilisable, { secondaires: [figBloquee] }) });

  assert.ok(tex.includes(figUtilisable.tikz), 'le schema principal doit rester present');
  assert.ok(!tex.includes('Le schema secondaire'), 'le schema secondaire bloque ne doit pas apparaitre');
});

/* Trouve en Phase 4 (2026-08-20) : makeindex trie par code Unicode brut, pas
   par ordre alphabetique linguistique — « Diffusion » sortait avant
   « Décomposition ». La syntaxe `\index{cle@texte}` separe desormais la cle
   de tri (repliee sur ASCII) du texte affiche (inchange, toujours accentue). */
test('un mot-cle accentue porte une cle de tri sans accent, le texte affiche reste accentue', () => {
  const mod = module_({ keywords: ['Décomposition', 'Mélange'] });
  const tex = composerChapitre(mod, [exercice], { professeur: false });
  assert.ok(tex.includes('\\index{Decomposition@Décomposition}'), 'entree d index incorrecte pour Décomposition : ' + tex.match(/\\index\{[^}]*\}/g));
  assert.ok(tex.includes('\\index{Melange@Mélange}'), 'entree d index incorrecte pour Mélange : ' + tex.match(/\\index\{[^}]*\}/g));
});

test('un module sans schema principal mais avec un secondaire utilisable ouvre quand meme la section', () => {
  // Cas limite : jamais rencontre dans le corpus actuel (tous les modules
  // corriges en Phase 2 gardent leur schema principal), mais le code ne doit
  // pas supposer sa presence.
  const diagramSecondaire = { caption: 'Seul schema disponible' };
  const mod = moduleAvecSchema(null, [diagramSecondaire]);
  const tex = composerChapitre(mod, [exercice],
    { figure: Object.assign({}, figBloquee, { secondaires: [figUtilisable] }) });

  assert.ok(tex.includes('\\section{Schéma}'), 'section Schema absente malgre un secondaire utilisable');
  assert.ok(tex.includes(figUtilisable.tikz), 'le seul schema utilisable manque');
});

/* --- Banque du professeur : regroupement par tache ---------------------- */

test('la banque se groupe sur la methode, pas sur le contexte de l enonce', () => {
  // Meme methode, trois habillages differents : un seul groupe attendu.
  const memeTache = [
    { statement: 'Un chimiste note une proportion : simplifie 14/6.',
      solution: ['Cherchons un diviseur commun au numerateur et au denominateur.'], answer: 1 },
    { statement: 'En cuisine, une recette impose une proportion : simplifie 21/9.',
      solution: ['Cherchons un diviseur commun aux deux termes.'], answer: 2 },
    { statement: 'Un cartographe releve une echelle : simplifie 18/12.',
      solution: ['Cherchons un diviseur commun, ici 6.'], answer: 3 }
  ];
  const g = C.grouperParTache(memeTache);
  assert.strictEqual(g.length, 1, 'trois contextes d une meme methode = un groupe');
  assert.strictEqual(g[0].exercices.length, 3);
});

test('deux methodes distinctes donnent deux groupes', () => {
  const deux = [
    { statement: 'Simplifie 14/6.', solution: ['Cherchons un diviseur commun.'], answer: 1 },
    { statement: 'Simplifie 21/9.', solution: ['Cherchons un diviseur commun.'], answer: 2 },
    { statement: 'Compare 2/3 et 3/5.', solution: ['Deux fractions ont des denominateurs differents.'], answer: 3 },
    { statement: 'Compare 1/4 et 2/7.', solution: ['Deux fractions ont des denominateurs differents.'], answer: 4 }
  ];
  const g = C.grouperParTache(deux);
  assert.strictEqual(g.length, 2);
});

test('les enonces isoles sont rassembles, jamais un titre par enonce', () => {
  const eparpilles = [
    { statement: 'A', solution: ['Premiere methode tout a fait unique.'], answer: 1 },
    { statement: 'B', solution: ['Seconde approche completement distincte.'], answer: 2 },
    { statement: 'C', solution: ['Troisieme voie encore differente ailleurs.'], answer: 3 }
  ];
  const g = C.grouperParTache(eparpilles);
  assert.strictEqual(g.length, 1);
  assert.strictEqual(g[0].titre, 'Exercices variés');
  assert.strictEqual(g[0].exercices.length, 3);
});

test('le titre d un groupe vient du corrige, pas du contexte de l enonce', () => {
  const g = C.grouperParTache([
    { statement: 'Un chimiste note une proportion : simplifie 14/6.',
      solution: ['Cherchons un diviseur commun aux deux termes.'], answer: 1 },
    { statement: 'En cuisine, une recette impose une proportion : simplifie 21/9.',
      solution: ['Cherchons un diviseur commun aux deux termes.'], answer: 2 }
  ]);
  assert.strictEqual(g.length, 1);
  assert.strictEqual(g[0].titre, 'Cherchons un diviseur commun aux deux termes');
  assert.ok(!/chimiste|cuisine/.test(g[0].titre), 'le titre ne doit pas porter le contexte');
});

test('le titre d un groupe ne porte aucune formule mathematique', () => {
  // Une formule en gras dans un intertitre est illisible : elle doit sauter.
  const f1 = 'Une fraction ne change pas quand on multiplie $\\dfrac{4}{5}$ par $4$.';
  const f2 = 'Une fraction ne change pas quand on multiplie $\\dfrac{2}{3}$ par $5$.';
  const g = C.grouperParTache([
    { statement: 'A', solution: [f1], answer: 1 },
    { statement: 'B', solution: [f2], answer: 2 }
  ]);
  assert.ok(!g[0].titre.includes('$'), 'titre = ' + g[0].titre);
  assert.ok(!g[0].titre.includes('\\'), 'titre = ' + g[0].titre);
  assert.ok(g[0].titre.startsWith('Une fraction ne change pas'));
});

test('le titre coupe a la premiere phrase et retire la ponctuation flottante', () => {
  const g = C.grouperParTache([
    { statement: 'A', solution: ['Propriete : la somme des angles vaut $180$. On applique.'], answer: 1 },
    { statement: 'B', solution: ['Propriete : la somme des angles vaut $90$. On applique.'], answer: 2 }
  ]);
  assert.strictEqual(g[0].titre, 'Propriete : la somme des angles vaut');
});

test('un titre long est tronque sur un mot entier', () => {
  const long = 'Une propriete tres longue enoncee completement dans le corrige de cet exercice particulier sans point';
  const g = C.grouperParTache([
    { statement: 'A', solution: [long + '. Suite.'], answer: 1 },
    { statement: 'B', solution: [long + '. Suite.'], answer: 2 }
  ]);
  assert.ok(g[0].titre.length <= 64, 'longueur = ' + g[0].titre.length);
  assert.ok(g[0].titre.endsWith('…'));
  assert.ok(!/\s…$/.test(g[0].titre), 'pas d espace avant les points de suspension');
});

test('tous les exercices de la banque se retrouvent dans les groupes, une seule fois', () => {
  const banque = [];
  for (let i = 0; i < 15; i++) {
    banque.push({ statement: 'Enonce ' + i, solution: ['Methode numero ' + (i % 4) + ' appliquee.'], answer: i });
  }
  const g = C.grouperParTache(banque);
  const vus = g.flatMap(x => x.exercices);
  assert.strictEqual(vus.length, 15, 'aucun exercice perdu ni duplique');
  assert.strictEqual(new Set(vus.map(e => e.statement)).size, 15);
});


/* =========================================================================
   Corrections du 2026-09-12 : volume d'exercices eleve, paliers de
   difficulte, bareme conditionnel, renvoi vers les chapitres prerequis.
   ========================================================================= */

/* Fabrique des exercices dont le corrige compte le nombre d'etapes voulu. Le
   nombre d'etapes est le SEUL critere de palier : le reste est habillage. */
function exercicesEtapes(etapesParExercice) {
  return etapesParExercice.map((n, i) => ({
    statement: 'Énoncé ' + (i + 1) + '.', hint: 'Coup de pouce.',
    solution: Array.from({ length: n }, (_, k) => 'Étape ' + (k + 1) + ' de la méthode.'),
    answer: i + 1, unit: ''
  }));
}

/* ---- Volume d'exercices dans l'edition eleve (defaut 1) ---- */

test('l edition eleve porte 12 exercices, pas 3', () => {
  // A 3 exercices, l'eleve qui travaille seul etait a sec apres trois
  // questions alors que la banque en contenait quinze de plus.
  assert.strictEqual(C.EXERCICES_VISIBLES, 12);
  const tex = composerChapitre(module_(), exercicesEtapes(Array(18).fill(3)),
    { professeur: false });
  assert.ok(tex.includes('Exercice \\thechapter.12'), 'le 12e exercice manque a l eleve');
  assert.ok(!tex.includes('Exercice \\thechapter.13'), 'l eleve ne doit pas depasser le seuil');
});

test('la reserve du professeur est ce que le tirage laisse apres les exercices visibles', () => {
  const tex = composerChapitre(module_(), exercicesEtapes(Array(18).fill(3)),
    { professeur: true });
  assert.ok(tex.includes('Supplément \\thechapter.6'), 'les 6 supplements attendus manquent');
  assert.ok(!tex.includes('Supplément \\thechapter.7'), 'la banque deborde du tirage');
});

test('le decompte annonce par la banque est celui des enonces reellement imprimes', () => {
  // « Ces 15 énoncés » etait ecrit en dur et devenait faux des que le seuil
  // bougeait : c'est arrive.
  const tex = composerChapitre(module_(), exercicesEtapes(Array(18).fill(3)),
    { professeur: true });
  assert.ok(tex.includes('Ces 6 énoncés ne figurent pas'), 'decompte de banque faux');
  assert.ok(!/Ces 15 énoncés/.test(tex), 'le decompte est reste code en dur');
});

test('un tirage plus court que le seuil ne produit aucune banque', () => {
  const tex = composerChapitre(module_(), exercicesEtapes(Array(5).fill(3)),
    { professeur: true });
  assert.ok(!tex.includes("Banque d'exercices supplémentaires"), 'banque vide annoncee');
  assert.ok(tex.includes('Exercice \\thechapter.5'));
});

test('le seuil reste parametrable par l appelant', () => {
  const tex = composerChapitre(module_(), exercicesEtapes(Array(18).fill(3)),
    { professeur: false, exercicesVisibles: 4 });
  assert.ok(tex.includes('Exercice \\thechapter.4'));
  assert.ok(!tex.includes('Exercice \\thechapter.5'));
});

/* ---- Paliers de difficulte (defaut 2) ---- */

test('le palier se derive du nombre d etapes du corrige, par chapitre', () => {
  const paliers = C.classerParDifficulte(exercicesEtapes([2, 3, 4, 2, 4]));
  assert.deepStrictEqual(paliers,
    ['application', 'entrainement', 'approfondissement', 'application', 'approfondissement']);
});

test('quand tous les corriges ont la meme longueur, aucun palier n est invente', () => {
  // Trois modules de sixieme sont dans ce cas (figures-geometriques,
  // symetrie-axiale, perimetres-aires) : la donnee ne discrimine rien.
  assert.strictEqual(C.classerParDifficulte(exercicesEtapes([1, 1, 1, 1])), null);
  const tex = composerChapitre(module_(), exercicesEtapes(Array(12).fill(1)),
    { professeur: false });
  assert.ok(!tex.includes('Approfondissement'), 'palier imprime sans donnee pour le justifier');
  assert.ok(!tex.includes('classés par difficulté'), 'gradation annoncee sans gradation reelle');
  assert.ok(tex.includes('Exercice \\thechapter.12'), 'les exercices doivent rester rendus');
});

test('a deux longueurs de corrige seulement, seuls deux paliers s impriment', () => {
  // Cas majoritaire du corpus (fractions : 4 et 5 etapes). On ne remplit pas
  // un troisieme groupe pour faire joli.
  const tex = composerChapitre(module_(), exercicesEtapes([4, 5, 4, 5]), { professeur: false });
  assert.ok(tex.includes('Application'));
  assert.ok(tex.includes('Approfondissement'));
  assert.ok(!/bfseries\\small Entraînement/.test(tex), 'palier intermediaire vide imprime');
});

test('les paliers regroupent sans jamais renumeroter les exercices', () => {
  /* La numerotation est celle du TIRAGE : \label, la page « Réponses aux
     exercices » et les renvois des fiches professeur y pointent tous. */
  const tex = composerChapitre(module_(), exercicesEtapes([5, 2, 5, 2]), { professeur: false });
  for (let n = 1; n <= 4; n++) {
    assert.ok(tex.includes('\\label{ex:test-module:' + n + '}'), 'label ' + n + ' manquant');
  }
  // L'enonce 2 (2 etapes, application) doit preceder l'enonce 1 (5 etapes)
  // dans la page, tout en gardant son numero 2.
  const i1 = tex.indexOf('Exercice \\thechapter.1');
  const i2 = tex.indexOf('Exercice \\thechapter.2');
  assert.ok(i2 < i1, 'les exercices ne sont pas regroupes par palier');
  assert.ok(tex.includes('Énoncé 2.'), 'l enonce 2 a disparu');
});

test('chaque exercice porte le libelle de son palier', () => {
  const tex = composerChapitre(module_(), exercicesEtapes([2, 3, 4]), { professeur: false });
  assert.ok(/Exercice \\thechapter\.1\\hfill [^\n]*Application/.test(tex), 'badge du palier absent');
  assert.ok(tex.includes('Entraînement'));
  assert.ok(tex.includes('Approfondissement'));
});

test('aucun exercice n est perdu ni duplique par le regroupement en paliers', () => {
  const tex = composerChapitre(module_(), exercicesEtapes([2, 5, 3, 5, 2, 4, 3]),
    { professeur: false });
  for (let n = 1; n <= 7; n++) {
    assert.strictEqual((tex.match(new RegExp('Énoncé ' + n + '\\.', 'g')) || []).length, 1,
      'énoncé ' + n + ' absent ou duplique');
  }
});

/* ---- Bareme conditionnel (defaut 13) ---- */

test('un bareme uniforme ne dessine pas cinq barres identiques', () => {
  // Toutes les questions du corpus valent 2 points : les barres etaient
  // rigoureusement egales sous une legende qui annoncait une repartition.
  const tex = composerChapitre(module_(), [exercice], { professeur: true });
  assert.ok(!tex.includes('Répartition des'), 'le graphique inutile est encore dessine');
  assert.ok(tex.includes('3 questions à $2$ points.'), 'mention textuelle absente');
});

test('un bareme inegal dessine bien le graphique, qui porte alors une information', () => {
  const mod = module_();
  mod.evaluation.questions[0].points = 6;
  const tex = composerChapitre(mod, [exercice], { professeur: true });
  assert.ok(tex.includes('Répartition des 10 points sur les 3 questions'),
    'le graphique doit revenir des que les points different');
  assert.ok(tex.includes('\\fill[ardoise!18]'), 'les barres manquent');
});

test('le bareme uniforme garde la virgule francaise si les points sont decimaux', () => {
  const mod = module_();
  mod.evaluation.questions.forEach(q => { q.points = 1.5; });
  const tex = composerChapitre(mod, [exercice], { professeur: true });
  assert.ok(tex.includes('$1{,}5$ points'), 'notation decimale anglaise');
});

/* ---- Renvoi vers les chapitres prerequis (defaut 19) ---- */

test('le chapitre rappelle en ouverture ce sur quoi il s appuie', () => {
  const tex = composerChapitre(module_(), [exercice],
    { prerequis: [{ numero: 6, titre: 'Division' }] });
  assert.ok(tex.includes("Ce chapitre s'appuie sur le chapitre 6~(Division)."), 'renvoi absent');
});

test('plusieurs prerequis s enumerent a la francaise', () => {
  const tex = composerChapitre(module_(), [exercice],
    { prerequis: [{ numero: 6, titre: 'A' }, { numero: 7, titre: 'B' }, { numero: 8, titre: 'C' }] });
  assert.ok(tex.includes('les chapitres 6~(A), 7~(B) et 8~(C).'), 'enumeration incorrecte');
});

test('le renvoi de prerequis s imprime aussi dans l edition eleve', () => {
  // C'est l'eleve bloque qui en a le plus besoin : le front-matter le disait
  // deja, mais il ne le relit pas en ouvrant le chapitre 10.
  const eleve = composerChapitre(module_(), [exercice],
    { professeur: false, prerequis: [{ numero: 6, titre: 'Division' }] });
  assert.ok(eleve.includes("s'appuie sur le chapitre 6"), 'renvoi absent cote eleve');
});

test('sans prerequis declares, rien ne s imprime', () => {
  const tex = composerChapitre(module_(), [exercice], {});
  assert.ok(!tex.includes("s'appuie sur"), 'renvoi imprime sans donnee');
  const vide = composerChapitre(module_(), [exercice], { prerequis: [] });
  assert.ok(!vide.includes("s'appuie sur"), 'renvoi imprime sur une liste vide');
});

test('un prerequis mal forme est ignore, jamais imprime tel quel', () => {
  const tex = composerChapitre(module_(), [exercice],
    { prerequis: [{ numero: null, titre: 'X' }, { numero: 6, titre: 'Division' }] });
  assert.ok(!tex.includes('chapitre null'), 'un numero absent a ete imprime');
  assert.ok(tex.includes('le chapitre 6~(Division)'), 'le prerequis valide doit rester');
});
