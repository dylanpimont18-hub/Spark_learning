const test = require('node:test');
const assert = require('node:assert');
const { listerModules, verifierCorpus } = require('../verifier-corpus.js');

/* Le compte est un garde-fou contre la DISPARITION silencieuse d'un module
   (fichier renomme, dossier oublie dans un manifeste). A mettre a jour a chaque
   ajout deliberе : 203 -> 204 le 2026-08-16, ajout de 3e-fonctions-affines ;
   204 -> 248 le 2026-08-20, ajout des 44 modules physique-chimie college/lycee
   (physique-4e, physique-3e, physique-2nde, physique-1re, physique-tle). */
test('le corpus contient les 248 modules attendus', () => {
  assert.strictEqual(listerModules().length, 248);
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
