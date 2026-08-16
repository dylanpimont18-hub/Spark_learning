const test = require('node:test');
const assert = require('node:assert');
const { listerModules, verifierCorpus } = require('../verifier-corpus.js');

test('le corpus contient les 203 modules attendus', () => {
  assert.strictEqual(listerModules().length, 203);
});

test('tous les modules se chargent et se convertissent', () => {
  const r = verifierCorpus({ graine: 1, tirages: 1 });
  assert.deepStrictEqual(r.echecs, [], 'echecs : ' + JSON.stringify(r.echecs, null, 1));
  assert.strictEqual(r.valides, r.total);
});

test('aucun symbole Unicode inconnu sur le corpus', () => {
  const r = verifierCorpus({ graine: 1, tirages: 1 });
  assert.deepStrictEqual(r.symbolesInconnus, [],
    'symboles a ajouter dans unicode.js : ' + r.symbolesInconnus.join(' '));
});
