const test = require('node:test');
const assert = require('node:assert/strict');
const { buildDraftingPrompt, buildReviewPrompt, buildFixCompilePrompt } = require('../src/promptBuilder');

test('buildDraftingPrompt includes all session fields', function () {
  var prompt = buildDraftingPrompt({
    subject: 'Mathématiques',
    topic: 'Dérivation - étude de fonction',
    level: '1re',
    difficultiesObserved: 'confond dérivée et tangente',
    contentType: 'cours',
    figuresCount: 2
  });
  assert.ok(prompt.includes('Mathématiques'));
  assert.ok(prompt.includes('Dérivation - étude de fonction'));
  assert.ok(prompt.includes('1re'));
  assert.ok(prompt.includes('confond dérivée et tangente'));
  assert.ok(prompt.includes('2 figure'));
  assert.ok(prompt.toLowerCase().includes('latex'));
  assert.ok(prompt.includes('virgule'));
});

test('buildDraftingPrompt with figuresCount 0 says no figure explicitly', function () {
  var prompt = buildDraftingPrompt({
    subject: 'Physique-Chimie', topic: 'Optique', level: 'Tle',
    difficultiesObserved: '', contentType: 'exercices', figuresCount: 0
  });
  assert.ok(prompt.includes('Aucune figure'));
});

test('buildDraftingPrompt contentType "les_deux" mentions cours and exercices', function () {
  var prompt = buildDraftingPrompt({
    subject: 'SI', topic: 'Chaîne d\'énergie', level: 'BTS 1',
    difficultiesObserved: '', contentType: 'les_deux', figuresCount: 1
  });
  assert.ok(prompt.toLowerCase().includes('cours'));
  assert.ok(prompt.toLowerCase().includes('exercice'));
});

test('buildReviewPrompt includes the tex source and figure descriptions', function () {
  var prompt = buildReviewPrompt({ texSource: '\\section{Test}', figureDescriptions: ['Courbe de f(x)=x^2'] });
  assert.ok(prompt.includes('\\section{Test}'));
  assert.ok(prompt.includes('Courbe de f(x)=x^2'));
  assert.ok(prompt.toLowerCase().includes('relis'));
});

test('buildFixCompilePrompt includes tex source and error log', function () {
  var prompt = buildFixCompilePrompt({ texSource: '\\section{Test}', compileErrorLog: 'Undefined control sequence' });
  assert.ok(prompt.includes('\\section{Test}'));
  assert.ok(prompt.includes('Undefined control sequence'));
});
