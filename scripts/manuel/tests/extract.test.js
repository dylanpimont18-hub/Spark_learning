const test = require('node:test');
const assert = require('node:assert');
const { chargerModule } = require('../extract.js');

const THALES = 'js/data/3e/3e-thales.js';

test('charge un module reel et le valide', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 2 });
  assert.strictEqual(r.module.id, '3e-thales');
  assert.strictEqual(r.validation.ok, true, 'erreurs : ' + r.validation.erreurs.join(' | '));
});

test('produit le nombre de tirages demande', () => {
  const r = chargerModule(THALES, { graine: 42, tirages: 3 });
  assert.strictEqual(r.exercices.length, 3);
});

test('la meme graine produit exactement les memes exercices', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 7, tirages: 4 });
  assert.deepStrictEqual(a.exercices, b.exercices);
});

test('deux graines differentes produisent des exercices differents', () => {
  const a = chargerModule(THALES, { graine: 7, tirages: 4 });
  const b = chargerModule(THALES, { graine: 8, tirages: 4 });
  assert.notDeepStrictEqual(a.exercices, b.exercices);
});

test('les exercices sont normalises : solution toujours en tableau', () => {
  const r = chargerModule('js/data/bts-prep/bts-prep-logarithme.js', { graine: 1, tirages: 1 });
  assert.ok(Array.isArray(r.exercices[0].solution));
});

test('un chemin inexistant leve une erreur explicite', () => {
  assert.throws(() => chargerModule('js/data/nexiste-pas.js', { graine: 1, tirages: 1 }),
    /nexiste-pas/);
});

test('2nde-droites-systemes ne plante plus (bug const b2)', () => {
  // Avant correction, 24,5 % des tirages levaient une TypeError.
  for (let g = 0; g < 60; g++) {
    chargerModule('js/data/lycee-2nde/2nde-droites-systemes.js', { graine: g, tirages: 3 });
  }
});
