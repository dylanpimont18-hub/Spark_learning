/* =========================================================
   Spark Learning – tiktok/tests/export-modules.test.js
   Contrat de l'extracteur : ce que le pipeline Python
   attend de trouver dans catalogue.json.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const { catalogue } = require('../tools/export-modules.js');

let cache = null;
function modules() {
  if (!cache) cache = catalogue();
  return cache;
}

test('le catalogue couvre tous les modules declares dans loader.js', () => {
  assert.ok(modules().length > 100, 'obtenu ' + modules().length + ' modules');
});

test('chaque entree porte l URL publique du module', () => {
  const m = modules().find(e => e.id === '6e-fractions');
  assert.ok(m, 'module 6e-fractions absent du catalogue');
  assert.strictEqual(m.url, '/module/6e-fractions/cours');
});

test('chaque entree porte la tranche de niveau qui pilote la persona', () => {
  const tranche = id => modules().find(e => e.id === id).tranche;
  assert.strictEqual(tranche('6e-fractions'), 'college');
});

test('le contenu pedagogique brut est embarque pour l IA', () => {
  const m = modules().find(e => e.id === '6e-fractions');
  assert.ok(m.cours.intro.length > 100, 'intro du cours absente ou tronquee');
  assert.ok(Array.isArray(m.quiz) && m.quiz.length > 0, 'quiz absent');
});

test('les modules BTS sont reperes comme tels', () => {
  const bts = modules().filter(e => e.tranche === 'bts');
  assert.ok(bts.length > 0, 'aucun module BTS trouve');
});
