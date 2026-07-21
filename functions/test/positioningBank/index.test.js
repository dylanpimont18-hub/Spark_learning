const test = require('node:test');
const assert = require('node:assert/strict');
const { getBank, THEME_IDS } = require('../../src/positioningBank');

test('getBank("maths") returns all 5 maths themes', function () {
  var bank = getBank('maths');
  assert.deepEqual(Object.keys(bank.themes).sort(), THEME_IDS.maths.slice().sort());
});

test('getBank("physique") returns all 5 physique themes', function () {
  var bank = getBank('physique');
  assert.deepEqual(Object.keys(bank.themes).sort(), THEME_IDS.physique.slice().sort());
});

test('getBank throws on an unknown subject', function () {
  assert.throws(function () { getBank('svt'); });
});
