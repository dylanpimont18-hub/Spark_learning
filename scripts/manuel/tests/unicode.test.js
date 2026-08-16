const test = require('node:test');
const assert = require('node:assert');
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
