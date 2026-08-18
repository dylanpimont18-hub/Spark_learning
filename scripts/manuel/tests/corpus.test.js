const test = require('node:test');
const assert = require('node:assert');
const { listerModules, verifierCorpus } = require('../verifier-corpus.js');

/* Le compte est un garde-fou contre la DISPARITION silencieuse d'un module
   (fichier renomme, dossier oublie dans un manifeste). A mettre a jour a chaque
   ajout deliberе : 203 -> 204 le 2026-08-16, ajout de 3e-fonctions-affines. */
test('le corpus contient les 204 modules attendus', () => {
  assert.strictEqual(listerModules().length, 204);
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
