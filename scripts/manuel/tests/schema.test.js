const test = require('node:test');
const assert = require('node:assert');
const { validerModule, normaliserExercice } = require('../schema.js');

function moduleValide() {
  return {
    id: '3e-exemple', title: 'Exemple', subject: 'maths', level: 1,
    cours: { intro: 'Texte', definitions: [{ term: 'T', def: 'D' }], formulas: ['$a$'], recap: ['R'] },
    quiz: [{ q: 'Q ?', options: ['a', 'b'], answer: 0, correction: 'C' }],
    exercice: { generate() { return {}; } },
    evaluation: { title: 'E', duration: '30 min', questions: [
      { statement: 'S', type: 'numeric', answer: 1, points: 2, correction: 'C' }
    ] }
  };
}

test('un module conforme ne produit aucune erreur', () => {
  const r = validerModule(moduleValide());
  assert.strictEqual(r.ok, true);
  assert.deepStrictEqual(r.erreurs, []);
});

test('un champ obligatoire manquant est une erreur nommee', () => {
  const mod = moduleValide();
  delete mod.cours;
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('cours')), 'l erreur doit nommer le champ manquant');
});

test('exercice.generate absent est une erreur', () => {
  const mod = moduleValide();
  mod.exercice = {};
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('generate')));
});

test('une reponse de quiz hors bornes est une erreur', () => {
  const mod = moduleValide();
  mod.quiz[0].answer = 5;
  const r = validerModule(mod);
  assert.strictEqual(r.ok, false);
  assert.ok(r.erreurs.some(e => e.includes('quiz')));
});

test('normaliserExercice transforme une solution en chaine en tableau', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: 'une seule etape' });
  assert.deepStrictEqual(ex.solution, ['une seule etape']);
});

test('normaliserExercice preserve une solution deja en tableau', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: ['a', 'b'] });
  assert.deepStrictEqual(ex.solution, ['a', 'b']);
});

test('normaliserExercice remplit les champs optionnels absents', () => {
  const ex = normaliserExercice({ statement: 'S', answer: 2, hint: 'H', solution: [] });
  assert.strictEqual(ex.unit, '');
  assert.strictEqual(ex.tolerance, 0);
});
