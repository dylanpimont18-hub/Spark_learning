/* =========================================================
   Spark Learning – scripts/manuel/unicode.js
   Traduit en commandes LaTeX les caracteres que pdflatex/T1
   ne couvre pas (3141 occurrences, 245 caracteres distincts
   dans js/data). Tout caractere inconnu est SIGNALE, jamais
   avale : un symbole disparu d'une formule ne se voit pas.
   ========================================================= */

/* Commandes MATHEMATIQUES. Elles sont toujours emises via \ensuremath :
   neutre en mode math, et retablit le mode math a l'interieur d'un
   \text{...} (cas reel : $1\,\text{µm}$, $\text{L}^2\text{·θ}$). */
const MATH = {
  'α':'\\alpha','β':'\\beta','γ':'\\gamma','δ':'\\delta','ε':'\\varepsilon','ζ':'\\zeta',
  'η':'\\eta','θ':'\\theta','ι':'\\iota','κ':'\\kappa','λ':'\\lambda','μ':'\\mu','ν':'\\nu',
  'ξ':'\\xi','π':'\\pi','ρ':'\\rho','σ':'\\sigma','τ':'\\tau','υ':'\\upsilon','φ':'\\varphi',
  'χ':'\\chi','ψ':'\\psi','ω':'\\omega',
  'Γ':'\\Gamma','Δ':'\\Delta','Θ':'\\Theta','Λ':'\\Lambda','Ξ':'\\Xi','Π':'\\Pi',
  'Σ':'\\Sigma','Φ':'\\Phi','Ψ':'\\Psi','Ω':'\\Omega',

  '→':'\\to','←':'\\leftarrow','↔':'\\leftrightarrow','↑':'\\uparrow','↓':'\\downarrow',
  '⇒':'\\Rightarrow','⇔':'\\Leftrightarrow','⟹':'\\Longrightarrow','⟸':'\\Longleftarrow',
  '⟺':'\\Longleftrightarrow','⟶':'\\longrightarrow','↗':'\\nearrow','↘':'\\searrow',

  '≈':'\\approx','≠':'\\neq','≤':'\\leq','≥':'\\geq','≡':'\\equiv','∝':'\\propto',
  '⊂':'\\subset','⊃':'\\supset','∈':'\\in','∉':'\\notin','⊥':'\\perp','∥':'\\parallel',
  '≃':'\\simeq','≅':'\\cong','∼':'\\sim',
  // Intersection et union : les diagrammes de Venn du corpus ecrivaient le mot
  // « inter » en toutes lettres faute de les trouver ici.
  '∩':'\\cap','∪':'\\cup','∖':'\\setminus',

  '−':'-','×':'\\times','÷':'\\div','±':'\\pm','∓':'\\mp','⋅':'\\cdot','∘':'\\circ',
  '√':'\\surd','∞':'\\infty','♾':'\\infty','∑':'\\sum','∏':'\\prod','∫':'\\int',
  '∂':'\\partial','∇':'\\nabla','∅':'\\emptyset','∀':'\\forall','∃':'\\exists',
  '∧':'\\wedge','∨':'\\vee','¬':'\\neg','△':'\\triangle','◆':'\\blacklozenge','ℓ':'\\ell',
  '⌀':'\\varnothing','‖':'\\|','∠':'\\angle','∆':'\\Delta',

  // Le degre DOIT etre traduit : en mode math, le caractere brut tombe sur la
  // position 0xB0 de T1, qui porte un « ř ». Comme le corpus ecrit ses angles
  // dans des $...$, toutes les mesures sortaient fausses sans que rien ne
  // signale l'erreur — la compilation, elle, reussissait.
  '°':'^\\circ','µ':'\\mu','·':'\\cdot',

  'ℕ':'\\mathbb{N}','ℤ':'\\mathbb{Z}','ℚ':'\\mathbb{Q}','ℝ':'\\mathbb{R}','ℂ':'\\mathbb{C}',

  // \checkmark et \times sont des commandes MATH : les classer en texte
  // provoque "Missing $ inserted". Bug rencontre a l'audit du 2026-08-15.
  '✓':'\\checkmark','✔':'\\checkmark','☑':'\\checkmark','✗':'\\times','✘':'\\times',

  '₀':'_0','₁':'_1','₂':'_2','₃':'_3','₄':'_4','₅':'_5','₆':'_6','₇':'_7','₈':'_8','₉':'_9',
  '₊':'_+','₋':'_-','ₑ':'_e','ₙ':'_n','ₛ':'_s','ₚ':'_p','ₜ':'_t','ₐ':'_a','ᵢ':'_i',
  '⁰':'^0','¹':'^1','²':'^2','³':'^3','⁴':'^4','⁵':'^5','⁶':'^6','⁷':'^7','⁸':'^8','⁹':'^9',
  '⁺':'^+','⁻':'^-','ⁿ':'^n','ˣ':'^x','ᵃ':'^a','ᵇ':'^b','ᶜ':'^c','ᵈ':'^d','ᵐ':'^m','ᵏ':'^k'
};

/* Commandes purement TEXTUELLES (aucun sens mathematique). */
const TEXTE = {
  '•':'\\textbullet{}','€':'\\texteuro{}',
  '№':'n\\textsuperscript{o}','℃':'\\textcelsius{}',
  // Chiffres cercles : utilises pour numeroter des etapes dans quelques modules
  '①':'\\textcircled{1}','②':'\\textcircled{2}','③':'\\textcircled{3}',
  '④':'\\textcircled{4}','⑤':'\\textcircled{5}','⑥':'\\textcircled{6}',
  '⑦':'\\textcircled{7}','⑧':'\\textcircled{8}','⑨':'\\textcircled{9}'
};

/* Retires sans avertir : selecteurs de variante, BOM, espaces de largeur nulle. */
const A_RETIRER = /[︎️﻿​‌‍⁠]/g;

/* Emoji et pictogrammes : decoratifs, retires du rendu imprime. */
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}]/u;

/* Deja couverts par T1 + inputenc : ASCII, francais, ponctuation courante. */
const SUR = /[\t\n\r\x20-\x7E -ÿŒœŸ‘’“”–—…]/;

/* Lettres accentuees. Correctes en mode TEXTE, FAUSSES en mode MATH : « à »
   se decompose en \`a, et \` n'existe pas en mode math. LaTeX se contente
   d'un avertissement et imprime la lettre SANS son accent — le corpus ecrit
   $\mathtt{de}\; 1\; \mathtt{à}\; n$, et le livre sortait « de 1 a n ».
   Meme famille que ° et × : aucune erreur de compilation ne le signale.

   Les bornes evitent U+00D7 (×) et U+00F7 (÷), qui tombent au milieu de la
   plage sans etre des lettres : les avaler dans un \text{} composerait les
   operateurs en romain au lieu de \times et \div. */
const ACCENTUEES = /[À-ÖØ-öø-ÿŒœŸ]+/g;

const nonMappes = new Map();

function signaler(caractere, ou) {
  if (caractere.codePointAt(0) < 0x20) return;   // jetons internes du convertisseur
  const cle = caractere + ' (U+' +
    caractere.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + ')';
  if (!nonMappes.has(cle)) nonMappes.set(cle, new Set());
  nonMappes.get(cle).add(ou);
}

/* U+20D7 est un diacritique COMBINANT : il porte sur ce qui precede.
   `AB⃗` doit donner \vec{AB}, pas deux symboles juxtaposes. */
const VECTEUR = /([A-Za-z0-9]+)⃗/g;

function traduire(texte, ou, envelopper, math, envelopperTexte) {
  let s = String(texte).replace(A_RETIRER, '');
  s = s.replace(VECTEUR, (_, base) => envelopper('\\vec{' + base + '}'));

  // En mode math seulement : rouvrir un mode texte autour des lettres
  // accentuees, par suites entieres pour n'ouvrir qu'un \text{} par mot.
  // Le \text{...} produit ne repasse pas dans les tables : ses caracteres
  // sont soit de l'ASCII, soit les lettres elles-memes, toutes couvertes
  // par la plage sure.
  if (math) s = s.replace(ACCENTUEES, (suite) => '\\text{' + suite + '}');

  let sortie = '';
  for (const c of s) {
    // Les tables passent AVANT la plage sure. Une dizaine de caracteres
    // appartiennent aux deux (° × ÷ ² ³ ¹ ± ¬ µ ·) : ils se composent bien en
    // mode texte, mais la police mathematique en T1 porte de tout autres
    // glyphes a ces positions, et « 3 × 4 » sortait « 3 Ö 4 » sans qu'aucune
    // erreur de compilation ne le signale.
    if (MATH[c] !== undefined) { sortie += envelopper(MATH[c]); continue; }
    // Les commandes de texte ont besoin du meme traitement que celles de math :
    // en mode texte, etre mises a l'abri de l'echappement LaTeX (sans quoi leur
    // antislash devient \textbackslash{} et la commande s'imprime au lieu de
    // s'executer) ; en mode math, etre enveloppees dans un \text{}, ou elles
    // sont aussi invalides qu'un accent.
    if (TEXTE[c] !== undefined) { sortie += envelopperTexte(TEXTE[c]); continue; }
    if (SUR.test(c)) { sortie += c; continue; }
    if (EMOJI.test(c)) continue;
    signaler(c, ou);
    sortie += c;                       // conserve : fera echouer la compilation, visiblement
  }
  return sortie;
}

function enMath(texte, ou) {
  return traduire(texte, ou,
    (latex) => '\\ensuremath{' + latex + '}', true,
    (latex) => '\\text{' + latex + '}');
}

function enTexte(texte, ou, emettre) {
  return traduire(texte, ou,
    (latex) => emettre('\\ensuremath{' + latex + '}'), false,
    (latex) => emettre(latex));
}

/* Acces brut a la table, pour les appelants qui composent eux-memes leur mode
   (les etiquettes de figures savent si elles ecrivent en math ou en texte, et
   n'ont donc pas besoin de l'enveloppe \ensuremath). Une seule table pour tout
   le convertisseur : un symbole ajoute ici profite aux deux chemins. */
function symbole(caractere) {
  if (MATH[caractere] !== undefined) return { latex: MATH[caractere], math: true };
  if (TEXTE[caractere] !== undefined) return { latex: TEXTE[caractere], math: false };
  return null;
}

module.exports = { enMath, enTexte, nonMappes, symbole, signaler, SUR, EMOJI };
