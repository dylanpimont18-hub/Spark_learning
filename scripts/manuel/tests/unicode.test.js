const test = require('node:test');
const assert = require('node:assert');

/* Les caracteres de la plage Latin-1 se composent correctement en mode TEXTE,
   et faux en mode MATH : la police mathematique en T1 porte tout autre chose a
   ces positions. Le corpus ecrit ses formules en $...$, donc en mode math.

   Verifie a la sonde le 2026-08-16 : ° donnait « ř », × donnait « Ö »,
   ÷ « ö », ² « š », ³ « ş », ¹ « ź », ± « ś », ¬ « ň », µ « ţ ».
   Aucun de ces cas ne provoque d'erreur de compilation : le manuel sortait
   « 0 erreur » avec des milliers de symboles faux. D'ou ce test. */
const CAS_LATIN1 = [
  ['°', '^\\circ'], ['×', '\\times'], ['÷', '\\div'], ['²', '^2'], ['³', '^3'],
  ['¹', '^1'], ['±', '\\pm'], ['¬', '\\neg'], ['µ', '\\mu'], ['·', '\\cdot']
];

for (const [caractere, commande] of CAS_LATIN1) {
  test(`le caractere ${caractere} est traduit et non laisse brut`, () => {
    const { enMath } = require('../unicode.js');
    assert.strictEqual(enMath('5' + caractere, 'test'), '5\\ensuremath{' + commande + '}');
  });
}
const { enMath, enTexte, nonMappes } = require('../unicode.js');

const brut = (s) => s;                 // emetteur neutre pour les tests

test('un symbole grec devient une commande math', () => {
  assert.match(enMath('R = 5 Ω', 'test'), /\\Omega/);
});

test('en mode math, le symbole est enveloppe dans ensuremath', () => {
  // Une formule contient souvent \text{...}, qui rebascule en mode texte :
  // une commande math nue y provoque "Missing $ inserted".
  assert.match(enMath('1\\,\\text{μm}', 'test'), /\\ensuremath\{\\mu\}/);
});

test('en mode texte, un symbole math passe par ensuremath', () => {
  assert.match(enTexte('vitesse → constante', 'test', brut), /\\ensuremath\{\\to\}/);
});

test('la coche est traitee comme une commande math, pas texte', () => {
  // \checkmark et \times sont des commandes math : en mode texte nu,
  // elles cassent la compilation.
  assert.match(enTexte('acquis ✓', 'test', brut), /\\ensuremath\{\\checkmark\}/);
});

test('la fleche vectorielle combinante porte sur le symbole precedent', () => {
  assert.match(enMath('AB⃗', 'test'), /\\vec\{AB\}/);
});

test('les indices et exposants sont traduits', () => {
  assert.match(enMath('CO₂', 'test'), /_2/);
  assert.match(enMath('10⁻⁶', 'test'), /\^-/);
});

test('les caracteres francais courants sont laisses intacts', () => {
  assert.strictEqual(enTexte('théorème « croisé »', 'test', brut), 'théorème « croisé »');
});

test('les emoji sont retires sans bruit', () => {
  assert.strictEqual(enTexte('objectif \u{1F52D} atteint', 'test', brut), 'objectif  atteint');
});

test('un caractere inconnu est signale et conserve', () => {
  nonMappes.clear();
  const sortie = enTexte('symbole ⸮ rare', 'mon-module', brut);
  assert.ok(sortie.includes('⸮'), 'le caractere doit etre conserve, pas avale');
  assert.strictEqual(nonMappes.size, 1);
  const [cle] = [...nonMappes.keys()];
  assert.match(cle, /U\+2E2E/);
  assert.ok(nonMappes.get(cle).has('mon-module'));
});

/* Deuxieme famille du meme piege, trouvee le 2026-08-16 dans le .log de
   college-maths : « LaTeX Warning: Command \` invalid in math mode », 13 fois
   en edition eleve, 17 en edition prof.

   Une lettre accentuee placee en mode math se decompose en \`a, \'e, \c c...
   et ces commandes d'accent N'EXISTENT PAS en mode math : LaTeX emet un
   simple avertissement et IMPRIME LA LETTRE SANS SON ACCENT. Le corpus ecrit
   $\mathtt{pour}\; i\; \mathtt{de}\; 1\; \mathtt{à}\; n$ : le livre sortait
   « de 1 a n ». Comme pour ° et ×, zero erreur de compilation.

   La reponse LaTeX correcte est \text{...}, qui rouvre un mode texte. */
test('une lettre accentuee en mode math passe par text', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('à', 'test'), '\\text{à}');
});

test('une lettre accentuee reste brute en mode texte', () => {
  const { enTexte } = require('../unicode.js');
  assert.strictEqual(enTexte('à', 'test', (x) => x), 'à');
});

test('les accents dans mathtt sont proteges', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('\\mathtt{de} 1 \\mathtt{à} n', 'test'),
    '\\mathtt{de} 1 \\mathtt{\\text{à}} n');
});

test('une suite de lettres accentuees ne fait qu-un seul text', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('éàû', 'test'), '\\text{éàû}');
});

test('la cedille et les majuscules accentuees sont couvertes', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('ça', 'test'), '\\text{ç}a');
  assert.strictEqual(enMath('Étude', 'test'), '\\text{É}tude');
  assert.strictEqual(enMath('sœur', 'test'), 's\\text{œ}ur');
});

/* Le piege du piege : × et ÷ tombent au milieu de la plage des lettres
   accentuees (U+00D7 et U+00F7). Les avaler dans un \text{} rendrait « × »
   et « ÷ » en romain au lieu des operateurs mathematiques. */
test('les operateurs times et div ne sont pas pris pour des lettres', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('3×4', 'test'), '3\\ensuremath{\\times}4');
  assert.strictEqual(enMath('8÷2', 'test'), '8\\ensuremath{\\div}2');
  assert.strictEqual(enMath('é×é', 'test'), '\\text{é}\\ensuremath{\\times}\\text{é}');
});
