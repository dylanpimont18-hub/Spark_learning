/* Typographie des etiquettes de figures : c'est ici que se joue la difference
   entre un schema d'ecran et un schema de livre. Chaque cas vient d'un texte
   reellement present dans un SVG du corpus. */

const test = require('node:test');
const assert = require('node:assert');
const { etiquette } = require('../svg2tikz.js');

/* --- Noms de points et de segments : le motif le plus frequent -------- */

test('un nom de point isole passe en math', () => {
  assert.strictEqual(etiquette('A'), '$A$');
});

test('un segment prime garde ses primes en math', () => {
  // 3e-thales : « A'B' » compose en romain est le defaut le plus visible.
  assert.strictEqual(etiquette("A'B'"), "$A'B'$");
});

test('un nom de segment a deux lettres passe en math', () => {
  assert.strictEqual(etiquette('OM'), '$OM$');
});

test('une egalite entre segments reste une seule formule', () => {
  assert.strictEqual(etiquette('OM = r'), '$OM = r$');
});

/* --- Mots francais : ils ne doivent jamais basculer en math ----------- */

test('un mot francais reste du texte', () => {
  assert.strictEqual(etiquette('Aigu'), 'Aigu');
});

test('un mot accentue reste du texte et garde ses accents', () => {
  assert.strictEqual(etiquette('Dénominateur'), 'Dénominateur');
});

test('une phrase entiere reste du texte', () => {
  assert.strictEqual(etiquette('moins probable'), 'moins probable');
});

/* --- Melanges texte + math : le cas majoritaire ------------------------ */

test('un mot suivi d une formule ne met en math que la formule', () => {
  assert.strictEqual(etiquette('Sommet (0 ; -3)'), 'Sommet $(0\\,;\\,-3)$');
});

test('les mots autour d un nombre restent du texte', () => {
  assert.strictEqual(etiquette('Univers : 32 cartes'), 'Univers : $32$ cartes');
});

/* --- Notation francaise ------------------------------------------------ */

test('la virgule decimale est protegee', () => {
  // Sans accolades, LaTeX insere une espace apres la virgule : 5, 07
  assert.strictEqual(etiquette('5,07'), '$5{,}07$');
});

test('le tiret d un nombre negatif devient un vrai signe moins', () => {
  assert.strictEqual(etiquette('-3'), '$-3$');
});

/* --- Symboles ---------------------------------------------------------- */

test('le double slash du parallelisme devient le symbole mathematique', () => {
  assert.strictEqual(etiquette('AB // A\'B\''), "$AB \\parallel A'B'$");
});

test('le degre devient un exposant rond', () => {
  assert.strictEqual(etiquette('45°'), '$45^\\circ$');
});

test('une unite est composee en romain, pas en italique', () => {
  assert.strictEqual(etiquette('12 cm'), '$12\\ \\mathrm{cm}$');
});

test('un exposant d unite est conserve', () => {
  assert.strictEqual(etiquette('1 cm³'), '$1\\ \\mathrm{cm}^{3}$');
});

/* --- Fonctions et indices ---------------------------------------------- */

test('une image de fonction reste une formule', () => {
  assert.strictEqual(etiquette('f(2) = 5'), '$f(2) = 5$');
});

test('un chiffre colle a une variable devient un indice', () => {
  // « d1 » et « d2 » designent deux diagonales : ce sont des indices.
  assert.strictEqual(etiquette('d1'), '$d_{1}$');
});

test('un sigle mathematique est compose en romain', () => {
  assert.strictEqual(etiquette('PGCD'), '$\\mathrm{PGCD}$');
});

/* --- Pieges reels du corpus -------------------------------------------- */

test('l abreviation numero ne devient pas un degre', () => {
  // « n°1 » : le ° est ici une abreviation francaise, pas une mesure d angle.
  assert.strictEqual(etiquette('Terme n°1'), 'Terme n\\textsuperscript{o}1');
});

test('un point final ne reste pas en mode math', () => {
  // Le nombre est bien une quantite mathematique, mais le point qui le suit est
  // une ponctuation de liste : il doit sortir du mode math.
  assert.strictEqual(etiquette('1. Parenthèses'), '$1$. Parenthèses');
});

test('un mot de grandeur employe comme variable est compose en romain', () => {
  // 6e-perimetres-aires : « base » est ici une longueur, pas un mot de phrase.
  assert.strictEqual(etiquette('A = base × h / 2'),
    '$A = \\mathrm{base} \\times h / 2$');
});

test('le meme mot isole reste un mot de phrase', () => {
  assert.strictEqual(etiquette('Base'), 'Base');
});

test('les entites HTML sont decodees avant composition', () => {
  assert.strictEqual(etiquette('5,007 &lt; 5,07'), '$5{,}007 < 5{,}07$');
});

test('une abreviation ponctuee reste du texte', () => {
  assert.strictEqual(etiquette('Diz.'), 'Diz.');
});

test('un caractere special LaTeX est echappe hors des maths', () => {
  assert.strictEqual(etiquette('100 % réussite'), '$100$ \\% réussite');
});

test('une chaine vide ne produit rien', () => {
  assert.strictEqual(etiquette(''), '');
});

/* --- Cas trouves en relisant les 615 etiquettes du college -------------- */

test('un accent circonflexe ASCII devient un vrai exposant', () => {
  // 4e-pythagore ecrit « c^2 » et non « c² » : sans traitement, le manuel
  // afficherait un accent circonflexe isole au milieu de la formule.
  assert.strictEqual(etiquette('c^2 = a^2 + b^2'), '$c^{2} = a^{2} + b^{2}$');
});

test('une unite entre parentheses reste une unite', () => {
  assert.strictEqual(etiquette('Profondeur (m)'), 'Profondeur $(\\mathrm{m})$');
});

test('un mot de grandeur precede d une virgule n est pas une variable', () => {
  // 4e-cosinus : « angle » est ici un mot de phrase, pas un facteur.
  assert.strictEqual(etiquette('échelle de 5 m, angle 60° au sol'),
    'échelle de $5\\ \\mathrm{m}$, angle $60^\\circ$ au sol');
});

test('un mot de grandeur hors formule reste du texte', () => {
  // puissances : « Taille / distance (m) » est un intitule d axe, pas un quotient.
  assert.strictEqual(etiquette('Taille / distance (m)'),
    'Taille / distance $(\\mathrm{m})$');
});

test('un nom de fonction sans argument reste un mot', () => {
  assert.strictEqual(etiquette('échelle log'), 'échelle log');
});

test('un nom de fonction avec argument reste une fonction', () => {
  assert.strictEqual(etiquette('cos(60°)'), '$\\cos(60^\\circ)$');
});

/* --- Deux bugs de composition trouves sur le corpus BTS ----------------- */

test('une commande suivie d une lettre ne l avale pas', () => {
  // « A→B » donnait « A\toB » : commande inconnue, compilation en echec.
  assert.strictEqual(etiquette('A→B'), '$A\\to{}B$');
});

test('une espace des milliers ne casse pas la virgule decimale', () => {
  // « 74 850 » donnait « 74\{,}850 » : l espace fine \, etait ensuite relue
  // comme une virgule decimale, ce qui refermait une accolade fantome.
  assert.strictEqual(etiquette('74 850'), '$74\\,850$');
});

test('le micro des unites est un vrai mu', () => {
  // « \mathrm{µm} » reste en mode math : le µ y tombe sur un « ţ ».
  assert.strictEqual(etiquette('12 µm'), '$12\\ \\mu\\mathrm{m}$');
});

test('l ohm des unites est une vraie majuscule grecque', () => {
  assert.strictEqual(etiquette('50 Ω'), '$50\\ \\Omega$');
});

test('un exposant entre parentheses est compose en exposant', () => {
  assert.strictEqual(etiquette('10^(L/10)'), '$10^{L/10}$');
});

test('une suite d exposants ne fait qu un seul exposant', () => {
  // « 10⁻¹² » en trois caracteres separes donnait 10^{-}^{1}^{2},
  // que TeX refuse : « Double superscript ».
  assert.strictEqual(etiquette('10⁻¹²'), '$10^{-12}$');
});

test('une suite d indices ne fait qu un seul indice', () => {
  assert.strictEqual(etiquette('u₁₂'), '$u_{12}$');
});

test('une fraction seule se compose en fraction, pas en quotient oblique', () => {
  // 6e-fractions legende ses trois representations « 1/2 », « 3/6 », « 50/100 » :
  // dans un chapitre sur les fractions, elles doivent en avoir la forme.
  assert.strictEqual(etiquette('1/2'), '$\\frac{1}{2}$');
});

test('un quotient au milieu d une formule reste oblique', () => {
  assert.strictEqual(etiquette('A = 1/2 × b'), '$A = 1/2 \\times b$');
});

test('le point-virgule d un couple de coordonnees porte ses espaces fines', () => {
  assert.strictEqual(etiquette('(0 ; -3)'), '$(0\\,;\\,-3)$');
});

/* Trouve le 2026-08-16 en passant les 3072 etiquettes du corpus dans
   etiquette() : 37 sorties laissaient un ^ ou un _ hors des $...$.

   Deux defauts distincts, tous deux silencieux.

   1. L'indice ASCII n'etait pas reconnu. « u_C » sortait $u$\_$C$ : le
      souligne s'imprimait tel quel au lieu de descendre en indice. Present
      dans 25 etiquettes de bts, bts-prep, physique-bts, si-tle et si-bts —
      toute la notation de l'electrotechnique et de la mecanique.

   2. Un jeton purement mathematique (texte: null) rencontre HORS d'un ilot
      etait recopie brut en mode texte. « ( )ⁿ » sortait « ( )^{n} », et un
      ^ en mode texte est une erreur de compilation, pas un avertissement. */

test('un indice ASCII descend vraiment en indice', () => {
  assert.strictEqual(etiquette('u_C', 'test'), '$u_{C}$');
  assert.strictEqual(etiquette('c_n', 'test'), '$c_{n}$');
});

test('un indice ASCII de plusieurs lettres se compose en romain', () => {
  assert.strictEqual(etiquette('y_max', 'test'), '$y_{\\mathrm{max}}$');
  assert.strictEqual(etiquette('V_eq', 'test'), '$V_{\\mathrm{eq}}$');
});

/* Isolee, une lettre grecque suivie de son indice sort en deux groupes
   \ensuremath juxtaposes plutot qu'en un seul ilot — c'est deja ainsi que le
   convertisseur traite « ωₑ », et le rendu est le meme. Ce qui est verifie
   ici, c'est que le souligne est devenu un vrai indice et non un \_ imprime. */
test('un indice ASCII se pose aussi sur une lettre grecque', () => {
  const isolee = etiquette('θ_confort', 'test');
  assert.match(isolee, /\\theta/);
  assert.match(isolee, /_\{\\mathrm\{confort\}\}/);
  assert.ok(!isolee.includes('\\_'), 'le souligne ne doit pas etre echappe : ' + isolee);

  assert.strictEqual(etiquette('θ_confort = 28 °C', 'test'),
    '$\\theta_{\\mathrm{confort}} = 28 ^\\circ\\mathrm{C}$');
});

/* Les soulignes de __init__ ne sont pas des indices : ils appartiennent au
   nom de la methode Python affichee dans les diagrammes de classes de
   si-1re-poo. Les prendre pour des indices casserait l'etiquette. */
test('les soulignes de __init__ restent des soulignes', () => {
  const sortie = etiquette('+ __init__(nom, unite)', 'test');
  assert.ok(!/_\{/.test(sortie), 'aucun indice ne doit etre fabrique : ' + sortie);
  assert.ok(sortie.includes('\\_\\_init\\_\\_'), sortie);
});

test('un jeton purement math hors ilot est mis a l abri', () => {
  const sortie = etiquette('( )ⁿ → on MULTIPLIE', 'test');
  const horsMath = sortie.replace(/\$[^$]*\$/g, '').replace(/\\ensuremath\{[^{}]*(\{[^{}]*\})?[^{}]*\}/g, '');
  assert.ok(!/[\^_]/.test(horsMath), 'aucun ^ ou _ ne doit rester en mode texte : ' + sortie);
});

test('le degre suivi d une unite ne fuit pas hors du mode math', () => {
  const sortie = etiquette('θ (°C)', 'test');
  const horsMath = sortie.replace(/\$[^$]*\$/g, '').replace(/\\ensuremath\{[\s\S]*?\}(?=\)|$|\s)/g, '');
  assert.ok(!/\^/.test(horsMath), 'le ^ du degre doit rester en mode math : ' + sortie);
});
