const test = require('node:test');
const assert = require('node:assert/strict');
const { validateQuestion, validateTheme, validateBank } = require('../../src/positioningBank/validate');

function validQuestion(suffix) {
  return { id: 'sub-theme-1-' + suffix, question: 'Q?', options: ['a', 'b', 'c', 'd'], correctIndex: 0 };
}

function validTheme() {
  var levels = {};
  for (var p = 1; p <= 9; p++) {
    levels[p] = [validQuestion('a-' + p), validQuestion('b-' + p)];
    levels[p][0].id = 'sub-theme-' + p + '-a';
    levels[p][1].id = 'sub-theme-' + p + '-b';
  }
  return { id: 'theme', label: 'Thème', levels: levels };
}

test('validateQuestion accepts a well-formed question', function () {
  assert.doesNotThrow(function () { validateQuestion(validQuestion('a'), 'ctx'); });
});

test('validateQuestion rejects missing id', function () {
  var q = validQuestion('a'); q.id = '';
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateQuestion rejects wrong option count', function () {
  var q = validQuestion('a'); q.options = ['a', 'b'];
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateQuestion rejects out-of-range correctIndex', function () {
  var q = validQuestion('a'); q.correctIndex = 4;
  assert.throws(function () { validateQuestion(q, 'ctx'); });
});

test('validateTheme accepts a well-formed theme with 9 levels', function () {
  assert.doesNotThrow(function () { validateTheme(validTheme()); });
});

test('validateTheme rejects a missing level', function () {
  var theme = validTheme();
  delete theme.levels[9];
  assert.throws(function () { validateTheme(theme); });
});

test('validateTheme rejects a level with only 1 question', function () {
  var theme = validTheme();
  theme.levels[1] = [theme.levels[1][0]];
  assert.throws(function () { validateTheme(theme); });
});

test('validateTheme rejects duplicate question ids', function () {
  var theme = validTheme();
  theme.levels[2][0].id = theme.levels[1][0].id;
  assert.throws(function () { validateTheme(theme); });
});

test('validateBank rejects a bank missing an expected theme', function () {
  var bank = { themes: { theme: validTheme() } };
  assert.throws(function () { validateBank(bank, ['theme', 'other-theme']); });
});

test('validateBank accepts a bank covering all expected themes', function () {
  var bank = { themes: { theme: validTheme() } };
  assert.doesNotThrow(function () { validateBank(bank, ['theme']); });
});
