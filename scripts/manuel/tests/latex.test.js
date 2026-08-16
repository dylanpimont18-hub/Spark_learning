const test = require('node:test');
const assert = require('node:assert');
const { versLatex, nombreFr, definirOrigine } = require('../latex.js');

test('les balises de mise en valeur deviennent des commandes LaTeX', () => {
  assert.strictEqual(versLatex('le <strong>theoreme</strong>'), 'le \\textbf{theoreme}');
});

test('un double saut de ligne devient un changement de paragraphe', () => {
  assert.strictEqual(versLatex('un<br/><br/>deux'), 'un\n\ndeux');
});

test('les fragments mathematiques passent intacts', () => {
  const r = versLatex('on a $\\dfrac{OA\'}{OA} = 1{,}5$ ici');
  assert.ok(r.includes('$\\dfrac{OA\'}{OA} = 1{,}5$'), 'obtenu : ' + r);
});

test("l'apostrophe courbe ne doit jamais entrer en mode mathematique", () => {
  // $A'B'$ : l'apostrophe y est le symbole prime. La remplacer par ’ casse la formule.
  const r = versLatex("l'image $A'B'$ est renversee");
  assert.ok(r.includes("$A'B'$"), 'la formule doit garder son apostrophe droite : ' + r);
  assert.ok(r.includes('l’image'), 'le texte doit avoir une apostrophe courbe : ' + r);
});

test('les caracteres speciaux LaTeX du texte sont echappes', () => {
  assert.strictEqual(versLatex('50 % & plus_encore'), '50 \\% \\& plus\\_encore');
});

test('une commande LaTeX issue du HTML n est pas re-echappee', () => {
  assert.strictEqual(versLatex('<strong>100 %</strong>'), '\\textbf{100 \\%}');
});

test('le display math est converti en environnement LaTeX', () => {
  assert.strictEqual(versLatex('soit $$a = b$$'), 'soit \\[a = b\\]');
});

test('nombreFr rend la virgule francaise', () => {
  assert.strictEqual(nombreFr(7.5), '7{,}5');
  assert.strictEqual(nombreFr(12), '12');
});

test('un symbole Unicode en texte est traduit', () => {
  definirOrigine('module-test');
  assert.match(versLatex('vitesse → limite'), /\\ensuremath\{\\to\}/);
});

test('les entites HTML sont decodees', () => {
  assert.match(versLatex('a&nbsp;b'), /a(~|\\textasciitilde\{\})b/);
});
