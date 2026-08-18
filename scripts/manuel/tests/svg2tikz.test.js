/* Conversion geometrique SVG -> TikZ.
   L'enjeu n'est pas la beaute du code produit : c'est que pas une coordonnee ne
   bouge. Une figure « exacte » qui a glisse de deux millimetres est pire qu'une
   figure absente, parce que rien ne la signale. */

const test = require('node:test');
const assert = require('node:assert');
const { versTikz } = require('../svg2tikz.js');

const SVG = (corps, vb) =>
  `<svg viewBox="${vb || '0 0 360 240'}">${corps}</svg>`;

function tikz(corps, vb, options) {
  const r = versTikz(SVG(corps, vb), Object.assign({ largeurMm: 120 }, options));
  assert.ok(r.tikz, 'conversion refusee : ' + r.raison);
  return r.tikz;
}

/* --- Repere ------------------------------------------------------------ */

test('l axe y du SVG descend, celui de TikZ monte : les ordonnees sont niees', () => {
  const t = tikz('<line class="axis" x1="10" y1="20" x2="30" y2="40"></line>');
  assert.match(t, /\(10,-20\) -- \(30,-40\)/);
});

test('l echelle rapporte la largeur du viewBox a la largeur demandee', () => {
  // 120 mm pour 360 unites = 1/3 mm par unite.
  const t = tikz('<line class="axis" x1="0" y1="0" x2="1" y2="0"></line>');
  assert.match(t, /x=0\.3333mm/);
  assert.match(t, /y=0\.3333mm/);
});

/* --- Formes ------------------------------------------------------------ */

test('un rectangle garde son coin et ses dimensions', () => {
  const t = tikz('<rect class="frame-line" x="10" y="20" width="100" height="50"></rect>');
  assert.match(t, /\(10,-20\) rectangle \(110,-70\)/);
});

test('un polygone se referme', () => {
  const t = tikz('<polygon class="frame-line" points="0,0 10,0 10,10"></polygon>');
  assert.match(t, /\(0,0\) -- \(10,0\) -- \(10,-10\) -- cycle/);
});

test('une polyligne ne se referme pas', () => {
  const t = tikz('<polyline class="curve-main" points="0,0 10,0 10,10"></polyline>');
  assert.match(t, /\(0,0\) -- \(10,0\) -- \(10,-10\)/);
  assert.ok(!/cycle/.test(t), 'une polyligne ne doit pas se refermer');
});

test('un point de trace devient une marque de taille fixe, pas un disque a l echelle', () => {
  // Sans cela un rayon de 6 unites donne un disque de 4 mm sur le papier.
  const t = tikz('<circle class="plot-point" cx="50" cy="60" r="6"></circle>');
  assert.match(t, /\(50,-60\) circle\[radius=\d+(\.\d+)?pt\]/);
});

test('un cercle de geometrie garde son rayon en unites du dessin', () => {
  const t = tikz('<circle class="frame-line" cx="50" cy="60" r="40"></circle>');
  assert.match(t, /\(50,-60\) circle\[radius=40\]/);
});

/* --- Chemins ----------------------------------------------------------- */

test('un chemin droit devient une suite de segments', () => {
  const t = tikz('<path class="frame-line" d="M 10 20 L 30 40 Z"></path>');
  assert.match(t, /\(10,-20\) -- \(30,-40\) -- cycle/);
});

test('une courbe de Bezier cubique est reprise telle quelle', () => {
  // TikZ sait tracer une cubique : rien a retracer, la provenance reste exacte.
  const t = tikz('<path class="curve-main" d="M 0 0 C 10 0 20 10 30 10"></path>');
  assert.match(t, /\(0,0\) \.\. controls \(10,0\) and \(20,-10\) \.\. \(30,-10\)/);
});

test('une courbe quadratique est convertie en cubique equivalente', () => {
  // Q(0,0 ; 30,0 ; 30,30) : les controles cubiques valent P+2/3(Q-P).
  const t = tikz('<path class="curve-main" d="M 0 0 Q 30 0 30 30"></path>');
  assert.match(t, /\(0,0\) \.\. controls \(20,0\) and \(30,-10\) \.\. \(30,-30\)/);
});

test('un arc devient un arc, pas une corde', () => {
  const t = tikz('<path class="frame-line" d="M 10 0 A 10 10 0 0 1 0 10"></path>');
  assert.match(t, /arc\[/);
  assert.match(t, /x radius=10/);
});

test('les coordonnees relatives sont resolues', () => {
  const t = tikz('<path class="frame-line" d="M 10 10 l 20 0 v 30"></path>');
  assert.match(t, /\(10,-10\) -- \(30,-10\) -- \(30,-40\)/);
});

/* --- Etiquettes -------------------------------------------------------- */

test('une etiquette est ancree sur sa ligne de base, pas sur son centre', () => {
  // En SVG, le y d un <text> est la ligne de base.
  const t = tikz('<text class="annotation-label" x="10" y="20">A</text>');
  assert.match(t, /anchor=base west/);
  assert.match(t, /at \(10,-20\)/);
});

test('un texte centre en SVG est centre en TikZ', () => {
  const t = tikz('<text class="tick-label" x="10" y="20" text-anchor="middle">5</text>');
  assert.match(t, /anchor=base,/);
});

test('un texte aligne a droite est ancre a droite', () => {
  const t = tikz('<text class="tick-label" x="10" y="20" text-anchor="end">5</text>');
  assert.match(t, /anchor=base east/);
});

test('l etiquette passe par le compositeur typographique', () => {
  const t = tikz('<text class="annotation-label" x="0" y="0">A\'B\'</text>');
  assert.match(t, /\$A'B'\$/);
});

test('une rotation SVG tourne dans l autre sens en TikZ', () => {
  const t = tikz('<text class="tick-label" x="10" y="20" transform="rotate(-90 10 20)">t</text>');
  assert.match(t, /rotate=90/);
});

/* --- Ce qui doit etre ignore ------------------------------------------- */

test('le titre et la description accessibles ne sont pas dessines', () => {
  const t = tikz('<title id="a">Titre</title><desc id="b">Description</desc>' +
    '<line class="axis" x1="0" y1="0" x2="1" y2="1"></line>');
  assert.ok(!/Titre|Description/.test(t), 'title/desc ne doivent pas etre composes');
});

/* --- Ce qui ne doit pas etre trace ------------------------------------- */

test('une forme sans classe ni contour n est pas cernee', () => {
  // 3e-fonctions encadre son graphique d un rect transparent sans contour :
  // le tracer par defaut ajoutait un cadre noir absent du site.
  const t = tikz('<rect x="0" y="0" width="10" height="10" fill="transparent"></rect>' +
    '<line class="axis" x1="0" y1="0" x2="1" y2="1"></line>');
  // \useasboundingbox emploie aussi le mot « rectangle » : on vise le trace.
  assert.ok(!/\\draw\[[^\]]*\][^;]*rectangle/.test(t),
    'le rectangle transparent ne doit produire aucun trace');
});

test('une forme sans classe mais avec un aplat est remplie sans contour', () => {
  const t = tikz('<rect x="0" y="0" width="10" height="10" fill="#eef"></rect>');
  assert.match(t, /rectangle/);
  assert.ok(!/draw=/.test(t), 'aucun contour ne doit etre ajoute');
});

/* --- Lisibilite des etiquettes ----------------------------------------- */

test('une etiquette posee sur un trait porte un fond blanc', () => {
  // Les SVG posent leurs graduations SUR les axes : sans reserve blanche,
  // le trait passe au milieu des chiffres.
  const t = tikz('<line class="axis" x1="0" y1="0" x2="100" y2="0"></line>' +
    '<text class="tick-label" x="50" y="0">5</text>');
  assert.match(t, /fill=white/);
});

test('une etiquette posee dans un aplat ne porte pas de fond blanc', () => {
  // Sinon la reserve dessine un rectangle clair au milieu du bandeau colore.
  const t = tikz('<rect x="0" y="0" width="200" height="60" fill="#eef"></rect>' +
    '<text class="annotation-label" x="50" y="30">A</text>');
  assert.ok(!/fill=white/.test(t), 'pas de reserve dans un aplat');
});

/* --- Provenance -------------------------------------------------------- */

test('la conversion porte une provenance et l empreinte du SVG source', () => {
  const r = versTikz(SVG('<line class="axis" x1="0" y1="0" x2="1" y2="1"></line>'),
    { largeurMm: 120 });
  assert.strictEqual(r.provenance, 'svg-exact');
  assert.match(r.empreinte, /^[0-9a-f]{12}$/);
});

test('un SVG sans viewBox est refuse, pas devine', () => {
  const r = versTikz('<svg><line x1="0" y1="0" x2="1" y2="1"></line></svg>', { largeurMm: 120 });
  assert.strictEqual(r.provenance, null);
  assert.match(r.raison, /viewBox/);
});

test('un SVG sans aucune forme exploitable est refuse', () => {
  const r = versTikz(SVG('<title>rien</title>'), { largeurMm: 120 });
  assert.strictEqual(r.provenance, null);
});

/* --- Les declarations ne se dessinent pas ------------------------------- */

test('le contenu d un <defs> n est jamais recopie comme une forme', () => {
  /* Un <marker> declare sa pointe de fleche dans SON repere (viewBox 0 0 10 10).
     Recopiee telle quelle, elle se posait en forme autonome au coin superieur
     gauche de la figure : le petit triangle parasite en tete des figures
     3e-systemes, 3e-equations-inequations et 3e-algorithmique. */
  const t = tikz(
    '<defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5">' +
    '<path d="M0 0 L10 5 L0 10 z"></path></marker></defs>' +
    '<line class="axis" x1="10" y1="20" x2="30" y2="20" marker-end="url(#fl)"></line>');
  // Le \useasboundingbox porte legitimement (0,0) : on ne regarde donc que les
  // instructions de trace.
  const traces = t.split('\n').filter(l => /^\\(draw|fill|path|node)/.test(l));
  assert.strictEqual(traces.length, 1, 'une forme de trop : ' + traces.join(' | '));
  assert.ok(!/\(10,-5\)/.test(traces[0]), 'le chemin du marqueur a ete converti');
  // La pointe reste rendue, mais par TikZ, a partir de l attribut marker-end.
  assert.match(t, /-\{Latex/);
});

test('le viewBox lu est celui du <svg>, pas celui d un marqueur', () => {
  const t = tikz(
    '<defs><marker viewBox="0 0 10 10"><path d="M0 0 L10 5 z"></path></marker></defs>' +
    '<line class="axis" x1="0" y1="0" x2="1" y2="0"></line>');
  assert.match(t, /x=0\.3333mm/);
});
