const test = require('node:test');
const assert = require('node:assert');
const O = require('../ouvrage.js');

/* `ouvrage.js` n'avait aucun test : une reference morte a une constante
   renommee n'a explose qu'apres huit minutes de build, une fois le livre
   entier compile. Ces tests rendent la meme faute detectable en deux
   secondes. Ils ne jugent pas l'esthetique, ils verifient que chaque
   fonction produit bien un document et que les regles de charte tiennent. */

function config(extra) {
  return Object.assign({
    titre: 'Mathématiques', sousTitre: 'Collège',
    collection: 'Collection Mathématiques',
    niveaux: 'Sixième • Cinquième • Quatrième • Troisième',
    accroche: 'Tout le programme de la sixième à la troisième.',
    mention: 'Cours, méthodes, exercices et évaluations',
    annee: 2026, nbChapitres: 48, gouttiere: 15.9, pages: 433,
    professeur: false, avantPropos: 'Texte.'
  }, extra || {});
}

/* ---- Chaque fonction doit produire un document, pas lever ---- */

test('chaque fonction de maquette produit du LaTeX sans lever', () => {
  const c = config();
  const sorties = {
    preambule: O.preambule(c),
    couverture: O.couverture(c),
    liminaires: O.liminaires(c),
    ouverturePartie: O.ouverturePartie('Troisième', [{ numero: 1, titre: 'Thalès' }]),
    couvertureSeparee: O.couvertureSeparee(c),
    finOuvrage: O.finOuvrage([], c)
  };
  for (const [nom, s] of Object.entries(sorties)) {
    assert.ok(typeof s === 'string' && s.length > 50, nom + ' : sortie vide');
    // Une interpolation non resolue laisse la trace « ${...} » dans le .tex.
    assert.ok(!/\$\{/.test(s), nom + ' : interpolation non resolue');
    assert.ok(!/undefined|\[object Object\]/.test(s), nom + ' : valeur non definie injectee');
  }
});

test('la couverture imprimeur est un document complet et autonome', () => {
  const s = O.couvertureSeparee(config());
  assert.ok(s.includes('\\begin{document}'), 'pas de begin document');
  assert.ok(s.includes('\\end{document}'), 'pas de end document');
  // C'est la piece qui part chez l'imprimeur : sans la police ni les macros
  // du logo, elle compile en Computer Modern avec un plat muet.
  assert.ok(s.includes('\\usepackage{montserrat}'), 'police de la charte absente');
  assert.ok(s.includes('\\newcommand{\\sparkeclair}'), 'macros du logo absentes');
});

/* ---- La charte ---- */

test('aucune couleur inventee ne subsiste dans la palette', () => {
  for (const invente of ['C9A227', '18806F', 'B03A2E', '16202A', '5C6873', 'F7F5F0']) {
    assert.ok(!O.COULEURS_CHARTE.includes(invente),
      'couleur inventee encore declaree : #' + invente);
  }
});

test('la palette declare bien les variables de css/styles.css', () => {
  for (const charte of ['2C3E50', '48C9B0', 'F4D03F', 'E67E22', 'FF6B6B',
                        '212529', '6C757D', 'F8F9FA']) {
    assert.ok(O.COULEURS_CHARTE.includes(charte), 'couleur de charte absente : #' + charte);
  }
});

test('le preambule et la couverture imprimeur partagent LA meme palette', () => {
  // Deux listes de couleurs recopiees finissent toujours par diverger.
  assert.ok(O.preambule(config()).includes(O.COULEURS_CHARTE), 'preambule : palette absente');
  assert.ok(O.couvertureSeparee(config()).includes(O.COULEURS_CHARTE),
    'couverture imprimeur : palette absente');
});

test("l'accent ne porte jamais de texte dans le corps du livre", () => {
  // #F4D03F sur blanc donne 1,6:1. Pour du texte c'est orfonce, comme le site.
  const s = O.preambule(config());
  assert.ok(!/\\color\{jaune\}/.test(s), 'l\'accent est utilise en couleur de texte');
  assert.ok(s.includes('\\color{orfonce}'), 'orfonce n\'est utilise nulle part');
});

/* Isoler UNE declaration d'encadre. Une regex « du nom jusqu'a title= »
   echouerait : « coltitle= » contient litteralement « title= ». */
function encadre(preambule, nom) {
  const i = preambule.indexOf('\\newtcolorbox{' + nom + '}');
  assert.ok(i >= 0, nom + ' : encadre introuvable');
  const j = preambule.indexOf('\\newtcolorbox', i + 1);
  return preambule.slice(i, j > 0 ? j : i + 400).replace(/\s+/g, ' ');
}

test('les encadres sur fond clair forcent un titre en encre', () => {
  const s = O.preambule(config());
  // Le blanc par defaut de tcolorbox tombe sous 3:1 sur ces trois fonds.
  for (const boite of ['spdef', 'spretenir', 'sppiege', 'spmethode']) {
    assert.ok(encadre(s, boite).includes('coltitle=encre'),
      boite + ' : titre en blanc sur fond clair');
  }
  // Sur les fonds sombres, l'inverse.
  for (const boite of ['spexemple', 'spprof']) {
    assert.ok(encadre(s, boite).includes('coltitle=white'),
      boite + ' : titre sombre sur fond sombre');
  }
});

test('les encadres reprennent la semantique du site', () => {
  const s = O.preambule(config());
  // definitions --secondary (styles.css:1726), a retenir --accent (l. 2021),
  // piege --error (l. 2047). Le manuel les avait interverties.
  assert.ok(encadre(s, 'spdef').includes('colframe=turquoise'), 'definitions : pas en --secondary');
  assert.ok(encadre(s, 'spretenir').includes('colframe=jaune'), 'a retenir : pas en --accent');
  assert.ok(encadre(s, 'sppiege').includes('colframe=erreur'), 'piege : pas en --error');
});

test('toute couleur d accent de figure est declaree par la palette', () => {
  /* Ce test existe parce que le passage a la charte a supprime `olive` et
     `ambre` sans que svg2tikz cesse de les demander : lycee-si, bts-si et
     bts-fed n'auraient plus compile, et college-maths n'aurait rien montre
     puisqu'il n'utilise que l'accent des maths. */
  const { ACCENTS } = require('../svg2tikz.js');
  const noms = Object.keys(ACCENTS);
  assert.deepStrictEqual(noms.sort(), ['fed', 'maths', 'physique', 'si'],
    'une matiere a disparu de la table des accents');
  for (const [matiere, couleur] of Object.entries(ACCENTS)) {
    const declaree = O.COULEURS_CHARTE.includes('{' + couleur + '}');
    assert.ok(declaree, matiere + ' : la couleur ' + couleur + ' n\'est pas declaree');
  }
});

/* ---- Le plat 1 ---- */

test('la page de titre et la couverture imprimeur composent le meme plat', () => {
  // Les laisser diverger, c'est imprimer un livre dont la couverture ne dit
  // pas ce que dit sa page de titre.
  const c = config();
  for (const s of [O.couverture(c), O.couvertureSeparee(c)]) {
    assert.ok(s.includes('\\sparkcycle{pmotif}'), 'cycle absent');
    assert.ok(s.includes('\\sparkeclair{pmotif}'), 'eclair absent');
    assert.ok(s.includes('Mathématiques'), 'titre absent');
  }
});

test('le motif recoit un nom de coordonnee, jamais une expression', () => {
  // TikZ : [shift={...}] exige un nom. Lui passer « ([yshift=2cm]pc) » fait
  // echouer la compilation sur « No shape named `([yshift=2' is known ».
  const s = O.couverture(config());
  assert.ok(s.includes('\\coordinate (pmotif)'), 'pmotif n\'est pas declaree');
  assert.ok(!/\\spark(cycle|eclair)\{\(/.test(s), 'une expression est passee au lieu d\'un nom');
});

test('aucune image n est attendue par la couverture', () => {
  // La couverture est dessinee en TikZ : plus de couverture.png a fournir.
  const s = O.couverture(config()) + O.couvertureSeparee(config());
  assert.ok(!/includegraphics/.test(s), 'la couverture reclame encore une image');
});

/* ---- Les regles de composition du titre ---- */

test('la ligne de niveaux saute quand elle repete le sous-titre', () => {
  const sans = O.couverture(config({ sousTitre: 'BTS', niveaux: 'Programme BTS' }));
  assert.ok(!sans.includes('Programme BTS'), '« BTS » puis « Programme BTS » : redite');

  const avec = O.couverture(config({ sousTitre: 'BTS', niveaux: 'Remise à niveau • Programme BTS' }));
  assert.ok(avec.includes('Remise'), 'une ligne informative a ete supprimee a tort');
});

test('un titre long est compose plus petit et jamais coupe', () => {
  const court = O.couverture(config({ titre: 'Mathématiques' }));
  const long = O.couverture(config({ titre: 'Fluides, Énergies, Domotique' }));
  assert.ok(court.includes('\\fontsize{30}'), 'titre court : corps attendu 30');
  assert.ok(long.includes('\\fontsize{22}'), 'titre long : corps attendu 22');
  assert.ok(long.includes('\\hyphenpenalty=10000'), 'la cesure n\'est pas interdite');
});

test('seule l edition du professeur porte son marqueur', () => {
  // Sans lui, les deux PDF sortiraient avec un plat identique.
  assert.ok(!O.couverture(config()).includes('Édition du professeur'), 'marqueur sur l\'eleve');
  assert.ok(O.couverture(config({ professeur: true })).includes('Édition du professeur'),
    'marqueur absent sur le professeur');
});

/* ---- Les calculs d'impression ---- */

test('la gouttiere suit les paliers d epaisseur', () => {
  assert.strictEqual(O.gouttierePourPages(150), 9.5);
  assert.strictEqual(O.gouttierePourPages(151), 12.7);
  assert.strictEqual(O.gouttierePourPages(433), 15.9);
  assert.strictEqual(O.gouttierePourPages(900), 22.2);
});

test('le dos est calcule sur la pagination', () => {
  assert.strictEqual(O.largeurDosMm(433), 25.8);
  // La feuille imprimeur mesure deux plats plus le dos.
  assert.ok(O.couvertureSeparee(config({ pages: 433 })).includes('paperwidth=365.8mm'));
});
