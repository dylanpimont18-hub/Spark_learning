const test = require('node:test');
const assert = require('node:assert');
const { composerChapitre, objectifs, prerequis } = require('../chapitre.js');

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
