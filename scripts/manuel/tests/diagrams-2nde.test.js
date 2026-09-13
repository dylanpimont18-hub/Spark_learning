/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-2nde.test.js

   Garde les SCHEMAS SECONDAIRES de la seconde (2026-09-13) par le CALCUL.

   Ces schemas sont ecrits a la main, en SVG, dans js/data/lycee-2nde/. Rien
   ne les verifie a la compilation : svg2tikz accorde la mention « conforme a
   la source » des qu'une forme quelconque a ete produite, sans regarder si le
   dessin dit la verite. Une figure fausse traverse donc tout le pipeline sans
   la moindre alerte, et c'est ainsi que vingt et une erreurs de figures ont
   ete trouvees sur les trois ouvrages precedents — uniquement par le calcul.

   Les proprietes verifiees ici sont celles que la SECONDE exige en propre,
   et que le brief de la vague nomme explicitement :
     - les vecteurs EGAUX dessines ont des composantes STRICTEMENT egales,
       et non « visuellement paralleles » ;
     - la relation de Chasles dessinee est exacte ;
     - aucun element ne sort du viewBox declare (un debordement s'imprime
       par-dessus le texte voisin, sans aucun avertissement de LaTeX).
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chargerModule } = require('../extract.js');

function schemas(idModule) {
  const r = chargerModule(path.join('js/data/lycee-2nde', idModule + '.js'), { graine: 0, tirages: 1 });
  return r.module.cours.diagrams || [];
}

/* Lecture des primitives du SVG. On relit le DESSIN, jamais une variable
   intermediaire : seul ce qui est ecrit dans le fichier sera imprime. */
function balises(svg, nom) {
  const out = [];
  const re = new RegExp('<' + nom + '\\b[^>]*>', 'g');
  let m;
  while ((m = re.exec(svg))) out.push(m[0]);
  return out;
}
function attr(tag, nom) {
  const m = tag.match(new RegExp('\\b' + nom + '="([^"]*)"'));
  return m ? parseFloat(m[1]) : null;
}
function viewBox(svg) {
  const m = svg.match(/viewBox="([^"]*)"/);
  assert.ok(m, 'la figure declare un viewBox');
  const [x, y, w, h] = m[1].trim().split(/\s+/).map(Number);
  return { x, y, w, h };
}

const DIAGRAMMES = schemas('vecteurs');

test('vecteurs : le chapitre porte bien ses trois schemas secondaires', () => {
  assert.strictEqual(DIAGRAMMES.length, 3);
  for (const d of DIAGRAMMES) {
    assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
    assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
    assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
  }
});

test('vecteurs, schema 1 : les trois representants ont des composantes STRICTEMENT egales', () => {
  const svg = DIAGRAMMES[0].svg;
  /* Les representants sont les traits qui portent une pointe de fleche et la
     classe curve-main. Les traits de quadrillage (grid-line) en sont exclus. */
  const fleches = balises(svg, 'line').filter(t => t.includes('curve-main') && t.includes('marker-end'));
  assert.strictEqual(fleches.length, 3, 'trois representants dessines');

  const comps = fleches.map(t => ({
    dx: attr(t, 'x2') - attr(t, 'x1'),
    dy: attr(t, 'y2') - attr(t, 'y1')
  }));
  /* EGALITE STRICTE, pas « a peu pres parallele ». Deux fleches paralleles
     mais de longueurs differentes ne representent PAS le meme vecteur, et
     c'est exactement ce que le schema pretend montrer. */
  for (const c of comps) {
    assert.strictEqual(c.dx, comps[0].dx, 'meme composante horizontale');
    assert.strictEqual(c.dy, comps[0].dy, 'meme composante verticale');
  }

  /* Les origines, elles, doivent etre DISTINCTES : trois fleches superposees
     ne montreraient rien. */
  const origines = fleches.map(t => attr(t, 'x1') + ':' + attr(t, 'y1'));
  assert.strictEqual(new Set(origines).size, 3, 'trois origines distinctes');

  /* Les composantes annoncees par la legende sont (3 ; -2), a l'echelle de
     30 unites de viewBox par graduation. On verifie que le dessin les tient :
     +90 en x, +60 en y d'ecran (donc -2 en ordonnee de repere). */
  assert.strictEqual(comps[0].dx, 90, '3 graduations vers la droite');
  assert.strictEqual(comps[0].dy, 60, '2 graduations vers le bas');
});

test('vecteurs, schema 2 : les deux vignettes partagent l echelle et la hauteur de A', () => {
  const svg = DIAGRAMMES[1].svg;
  /* Le point A de gauche est un plot-point, celui de droite un
     plot-point-alt (origine du vecteur). Les deux doivent etre a la MEME
     ordonnee : c'est le patron « comparaison », ou la seule difference
     visible doit etre la nature de l'objet. */
  const ronds = balises(svg, 'circle');
  const gauche = ronds.find(t => t.includes('class="plot-point"'));
  const droite = ronds.filter(t => t.includes('plot-point-alt'));
  assert.ok(gauche, 'le point A de gauche est dessine');
  assert.strictEqual(droite.length, 2, 'A et B sont dessines a droite');

  const yGauche = attr(gauche, 'cy');
  const yA = attr(droite[0], 'cy');
  assert.strictEqual(yGauche, yA, 'A occupe la meme hauteur dans les deux vignettes');

  // Le vecteur AB porte bien les composantes (3 ; -2) a l'echelle 18.
  const vect = balises(svg, 'line').find(t => t.includes('curve-main') && t.includes('marker-end'));
  assert.ok(vect, 'le vecteur AB est trace');
  assert.strictEqual(attr(vect, 'x2') - attr(vect, 'x1'), 54, '3 graduations de 18 unites');
  assert.strictEqual(attr(vect, 'y2') - attr(vect, 'y1'), 36, '2 graduations vers le bas');
});

test('vecteurs, schema 3 : la relation de Chasles est EXACTE sur le dessin', () => {
  const svg = DIAGRAMMES[2].svg;
  const pleins = balises(svg, 'line').filter(t => t.includes('curve-main'));
  const tirets = balises(svg, 'line').filter(t => t.includes('guide-line') && t.includes('marker-end'));
  assert.strictEqual(pleins.length, 2, 'les deux etapes AB et BC sont tracees');
  assert.strictEqual(tirets.length, 1, 'le raccourci AC est trace, en tirets');

  const vec = (t) => [attr(t, 'x2') - attr(t, 'x1'), attr(t, 'y2') - attr(t, 'y1')];
  const [ab, bc] = pleins.map(vec);
  const ac = vec(tirets[0]);

  /* AB + BC = AC, au pixel pres et non « a peu pres ». Une somme fausse
     detruirait la seule chose que le schema pretend montrer. */
  assert.strictEqual(ab[0] + bc[0], ac[0], 'composantes horizontales : AB + BC = AC');
  assert.strictEqual(ab[1] + bc[1], ac[1], 'composantes verticales : AB + BC = AC');

  /* Le chemin doit etre CONTINU : l'arrivee de AB est le depart de BC. */
  assert.strictEqual(attr(pleins[0], 'x2'), attr(pleins[1], 'x1'), 'AB arrive ou BC repart');
  assert.strictEqual(attr(pleins[0], 'y2'), attr(pleins[1], 'y1'), 'AB arrive ou BC repart');

  /* Les trois points ne sont pas alignes : un triangle aplati ne montrerait
     aucun detour, donc aucune raison d'ecrire Chasles. */
  const croix = ab[0] * bc[1] - ab[1] * bc[0];
  assert.notStrictEqual(croix, 0, 'A, B et C ne sont pas alignes');
});

test('vecteurs : aucun element ne sort du viewBox declare', () => {
  /* Un debordement s'imprime PAR-DESSUS le texte voisin et ne produit aucun
     avertissement : svg2tikz fige la boite TikZ sur le viewBox entier, donc
     LaTeX ne voit rien. C'est le defaut qui a touche douze figures sur
     quatre-vingt-neuf en sixieme, jusqu'a 3,9 mm. */
  for (const [i, d] of DIAGRAMMES.entries()) {
    const svg = d.svg;
    const vb = viewBox(svg);
    const dans = (x, y, quoi) => {
      assert.ok(x >= vb.x - 0.01 && x <= vb.x + vb.w + 0.01,
        'schema ' + (i + 1) + ' : ' + quoi + ' a l abscisse ' + x + ' sort du viewBox');
      assert.ok(y >= vb.y - 0.01 && y <= vb.y + vb.h + 0.01,
        'schema ' + (i + 1) + ' : ' + quoi + ' a l ordonnee ' + y + ' sort du viewBox');
    };
    for (const t of balises(svg, 'line')) {
      dans(attr(t, 'x1'), attr(t, 'y1'), 'un trait');
      dans(attr(t, 'x2'), attr(t, 'y2'), 'un trait');
    }
    for (const t of balises(svg, 'circle')) {
      dans(attr(t, 'cx'), attr(t, 'cy'), 'un point');
    }
    /* Les etiquettes ne sont bornees que sur leur point d'ancrage : leur
       largeur reelle depend de la fonte. On verifie au moins que l'ancre est
       dans le cadre, ce qui attrape les fautes grossieres. */
    for (const t of balises(svg, 'text')) {
      dans(attr(t, 'x'), attr(t, 'y'), 'une etiquette');
    }
  }
});

test('vecteurs : les etiquettes respectent les contraintes du convertisseur', () => {
  /* Contraintes du cahier des charges (section 9), imposees par svg2tikz :
     pas d etiquette tout en capitales, qui se fracture a la conversion. Les
     noms de points (A, B, C) et de vecteurs sont des cas legitimes d une
     seule ou deux lettres, on ne les compte pas. */
  for (const [i, d] of DIAGRAMMES.entries()) {
    const textes = balises(d.svg, 'text').map(t => {
      const m = d.svg.slice(d.svg.indexOf(t) + t.length).match(/^([^<]*)/);
      return m ? m[1].trim() : '';
    });
    for (const txt of textes) {
      if (txt.length <= 2) continue;               // noms de points
      if (!/[A-Za-z]/.test(txt)) continue;         // purement chiffre
      assert.ok(txt !== txt.toUpperCase() || !/[A-Z]{3,}/.test(txt),
        'schema ' + (i + 1) + ' : etiquette en capitales « ' + txt + ' »');
    }
  }
});

test('vecteurs : une seule pointe de fleche par trait', () => {
  for (const [i, d] of DIAGRAMMES.entries()) {
    for (const t of balises(d.svg, 'line')) {
      const nb = (t.match(/marker-(start|end|mid)=/g) || []).length;
      assert.ok(nb <= 1, 'schema ' + (i + 1) + ' : un trait porte ' + nb + ' pointes');
    }
  }
});
