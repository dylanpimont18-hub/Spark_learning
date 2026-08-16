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

/* Troisieme famille du meme piege, trouvee le 2026-08-16 sur la couverture :
   « Sixième • Cinquième » s'imprimait « Sixième \{}textbullet{} Cinquième ».

   Les symboles de la table MATH traversent `emettre`, donc ressortent en
   jeton et echappent a l'echappement LaTeX de l'etape 4. Ceux de la table
   TEXTE etaient ajoutes BRUTS : leur antislash devenait \textbackslash{} et
   leurs accolades \{\}. La commande s'imprimait au lieu de s'executer.

   Concerne •, €, №, ℃ et les chiffres cercles ①..⑨ — donc le corps de texte
   du corpus, pas seulement les figures. Zero erreur de compilation. */
test('une commande de la table TEXTE survit a l echappement LaTeX', () => {
  const { versLatex } = require('../latex.js');
  assert.strictEqual(versLatex('a • b'), 'a \\textbullet{} b');
  assert.strictEqual(versLatex('prix : 12 €'), 'prix : 12 \\texteuro{}');
  assert.strictEqual(versLatex('25 ℃'), '25 \\textcelsius{}');
  assert.strictEqual(versLatex('① premier'), '\\textcircled{1} premier');
});

/* Les symboles de la table MATH passaient deja : le test les verrouille pour
   que la correction de la table TEXTE ne les emporte pas. */
test('les commandes de la table MATH restent protegees', () => {
  const { versLatex } = require('../latex.js');
  assert.strictEqual(versLatex('x ✓ ok'), 'x \\ensuremath{\\checkmark} ok');
  assert.strictEqual(versLatex('θ vaut 5'), '\\ensuremath{\\theta} vaut 5');
});

/* En mode math, une commande de texte est aussi invalide qu'un accent :
   \textbullet n'existe pas plus que \` entre deux dollars. */
test('une commande de texte rencontree en mode math passe par text', () => {
  const { enMath } = require('../unicode.js');
  assert.strictEqual(enMath('a • b', 'test'), 'a \\text{\\textbullet{}} b');
});
