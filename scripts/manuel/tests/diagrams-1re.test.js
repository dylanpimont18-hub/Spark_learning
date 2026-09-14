/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-1re.test.js

   Garde les SCHEMAS SECONDAIRES de la premiere (2026-09-14) par le CALCUL.

   Ces schemas sont ecrits a la main, en SVG, dans js/data/lycee-1re/. Rien ne
   les verifie a la compilation : svg2tikz accorde la mention « conforme a la
   source » des qu'une forme quelconque a ete produite, sans regarder si le
   dessin dit la verite. Une figure fausse traverse donc tout le pipeline sans
   la moindre alerte.

   LA PROPRIETE PROPRE A CE NIVEAU est la TANGENTE. Une tangente qui ne touche
   pas la courbe au bon point, ou dont la pente ne vaut pas le nombre derive
   annonce, est fausse dans le manuel et INVISIBLE a l'oeil : une pente de
   -3,00034 annoncee -3 se relit sans que rien n'attire l'attention. Sur les
   cinq ouvrages deja traites, plus de vingt erreurs de figures n'ont ete
   trouvees que par le calcul.

   Ce fichier protege aussi le travail de la vague TERMINALE, qui s'appuie sur
   la derivation, les suites et le second degre de la premiere : une figure
   cassee ici sortirait dans l'ouvrage de cycle sans alerte.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chargerModule } = require('../extract.js');

function schemas(idModule) {
  const r = chargerModule(path.join('js/data/lycee-1re', idModule + '.js'), { graine: 0, tirages: 1 });
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
function classeDe(tag) {
  const m = tag.match(/\bclass="([^"]*)"/);
  return m ? m[1].trim() : '';
}
function viewBox(svg) {
  const m = svg.match(/viewBox="([^"]*)"/);
  assert.ok(m, 'la figure declare un viewBox');
  const [x, y, w, h] = m[1].trim().split(/\s+/).map(Number);
  return { x, y, w, h };
}
function polyPoints(svg) {
  const out = [];
  const re = /<polyline\b[^>]*\bpoints="([^"]*)"/g;
  let m;
  while ((m = re.exec(svg))) {
    out.push(m[1].trim().split(/\s+/).map(p => {
      const [x, y] = p.split(',').map(Number);
      return { x, y };
    }));
  }
  return out;
}

/* Pente d'un segment EN COORDONNEES MATHEMATIQUES, a partir des coordonnees
   d'ecran. L'axe des ordonnees du SVG est inverse, d'ou le signe : une pente
   d'ecran negative est une pente mathematique positive. Les deux echelles sont
   passees en parametre parce qu'elles different d'un schema a l'autre. */
function penteMath(tag, ux, uy) {
  const dx = attr(tag, 'x2') - attr(tag, 'x1');
  const dy = attr(tag, 'y2') - attr(tag, 'y1');
  return -(dy / uy) / (dx / ux);
}

const DERIV = schemas('1re-derivation');

test('1re-derivation : le chapitre porte bien ses trois schemas secondaires', () => {
  assert.strictEqual(DERIV.length, 3);
  for (const d of DERIV) {
    assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
    assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
    assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
    assert.ok(d.reading && d.reading.trim(), 'chaque schema porte sa lecture');
  }
});

/* --- Regle generale : origine du viewBox a 0 0 -------------------------
   Un viewBox du type « 0 92 430 180 » recadre par decalage de fenetre. Le
   convertisseur fige la boite TikZ sur le viewBox et ne suit pas ce decalage :
   la figure sortirait translatee. On recadre en DEPLACANT les coordonnees. */
test('1re-derivation : tous les viewBox ont une origine 0 0', () => {
  for (const d of DERIV) {
    const vb = viewBox(d.svg);
    assert.strictEqual(vb.x, 0, 'origine x du viewBox');
    assert.strictEqual(vb.y, 0, 'origine y du viewBox');
  }
});

/* --- Regle generale : rien ne sort du cadre ----------------------------
   Un element hors cadre s'imprime par-dessus le texte voisin, sans le moindre
   Overfull de LaTeX : c'est le defaut le plus frequent et le plus silencieux
   du pipeline. */
test('1re-derivation : aucun trait ni point ne sort de son viewBox', () => {
  for (const d of DERIV) {
    const vb = viewBox(d.svg);
    const dans = (x, y, quoi) => {
      assert.ok(x >= -0.5 && x <= vb.w + 0.5, quoi + ' : x=' + x + ' hors [0 ; ' + vb.w + ']');
      assert.ok(y >= -0.5 && y <= vb.h + 0.5, quoi + ' : y=' + y + ' hors [0 ; ' + vb.h + ']');
    };
    for (const l of balises(d.svg, 'line')) {
      dans(attr(l, 'x1'), attr(l, 'y1'), d.title + ' / debut de trait');
      dans(attr(l, 'x2'), attr(l, 'y2'), d.title + ' / fin de trait');
    }
    for (const c of balises(d.svg, 'circle')) {
      dans(attr(c, 'cx'), attr(c, 'cy'), d.title + ' / point');
    }
    for (const pts of polyPoints(d.svg)) {
      for (const p of pts) dans(p.x, p.y, d.title + ' / point de courbe');
    }
  }
});

/* --- Schema 1 : les secantes convergent vers la tangente ---------------
   f(x) = x^2, a = 1, f'(1) = 2. Echelle du schema : 120 unites de viewBox par
   unite d'abscisse, 27,45 par unite d'ordonnee (calculees, pas mesurees).

   Ce qui est verifie : les trois secantes ont exactement les pentes du taux de
   variation pour h = 1,5 ; 0,8 ; 0,3, la tangente a exactement la pente 2, et
   les quatre droites passent toutes par le point A(1 ; 1). Une secante qui ne
   passerait pas par A raconterait une autre histoire que celle du texte. */
test('1re-derivation / secantes : chaque pente vaut exactement le taux de variation', () => {
  const d = DERIV[0];
  const UX = 120, UY = 27.45;           // unites de viewBox par unite du repere
  const AX = 186, AY = 196.2;           // point A(1 ; 1) a l'ecran

  const guides = balises(d.svg, 'line').filter(l => classeDe(l) === 'guide-line');
  assert.strictEqual(guides.length, 3, 'trois secantes en trait tirete');

  const f = (x) => x * x;
  const attendues = [1.5, 0.8, 0.3].map(h => (f(1 + h) - f(1)) / h);   // 3,5 / 2,8 / 2,3
  const obtenues = guides.map(l => penteMath(l, UX, UY)).sort((a, b) => b - a);
  attendues.sort((a, b) => b - a);

  obtenues.forEach((p, i) => {
    assert.ok(Math.abs(p - attendues[i]) < 0.02,
      'pente de secante ' + p.toFixed(4) + ' attendue ' + attendues[i].toFixed(4));
  });

  // Les quatre droites passent par A : on evalue l'equation de chaque droite
  // en x = AX et on verifie qu'elle rend AY.
  const toutes = balises(d.svg, 'line')
    .filter(l => ['guide-line', 'curve-main'].includes(classeDe(l)));
  for (const l of toutes) {
    const x1 = attr(l, 'x1'), y1 = attr(l, 'y1'), x2 = attr(l, 'x2'), y2 = attr(l, 'y2');
    const y = y1 + (y2 - y1) * (AX - x1) / (x2 - x1);
    assert.ok(Math.abs(y - AY) < 1.2,
      'la droite ne passe pas par A : y=' + y.toFixed(2) + ' au lieu de ' + AY);
  }
});

test('1re-derivation / secantes : la tangente a exactement la pente 2', () => {
  const d = DERIV[0];
  const UX = 120, UY = 27.45;
  const t = balises(d.svg, 'line').find(l => classeDe(l) === 'curve-main');
  assert.ok(t, 'la tangente est tracee en trait fort');
  const p = penteMath(t, UX, UY);
  assert.ok(Math.abs(p - 2) < 0.01, 'pente de la tangente ' + p.toFixed(5) + ' attendue 2');
});

/* --- Schema 2 : trois tangentes de pentes 2, 0 et -2 -------------------
   f(x) = -0,5x^2 + 3x, f'(x) = -x + 3. Tangentes en a = 1, 3, 5.
   Echelle : 54,33 unites de viewBox par unite d'abscisse, 30,28 par unite
   d'ordonnee.

   C'est le schema le plus exigeant du chapitre : il ANNONCE ses pentes en
   toutes lettres (« pente 2 », « pente 0 », « pente -2 »). Une tangente
   dessinee a 2,03 rendrait l'etiquette mensongere sans qu'on le voie. */
test('1re-derivation / tangentes : les trois pentes valent exactement f prime de a', () => {
  const d = DERIV[1];
  const UX = 54.33, UY = 30.28;
  const fp = (x) => -x + 3;

  const tangentes = balises(d.svg, 'line').filter(l => classeDe(l) === 'focus-line');
  assert.strictEqual(tangentes.length, 3, 'trois tangentes');

  const attendues = [1, 3, 5].map(fp).sort((a, b) => b - a);   // 2 / 0 / -2
  const obtenues = tangentes.map(l => penteMath(l, UX, UY)).sort((a, b) => b - a);
  obtenues.forEach((p, i) => {
    assert.ok(Math.abs(p - attendues[i]) < 0.01,
      'pente ' + p.toFixed(5) + ' attendue ' + attendues[i]);
  });
});

test('1re-derivation / tangentes : chaque tangente passe par son point de tangence', () => {
  const d = DERIV[1];
  const tangentes = balises(d.svg, 'line').filter(l => classeDe(l) === 'focus-line');
  const points = balises(d.svg, 'circle').filter(c => classeDe(c) === 'plot-point');
  assert.strictEqual(points.length, 3, 'trois points de tangence');

  // Chaque point de tangence doit tomber sur une et une seule tangente.
  for (const c of points) {
    const cx = attr(c, 'cx'), cy = attr(c, 'cy');
    const touchee = tangentes.filter(l => {
      const x1 = attr(l, 'x1'), y1 = attr(l, 'y1'), x2 = attr(l, 'x2'), y2 = attr(l, 'y2');
      if (cx < Math.min(x1, x2) - 0.5 || cx > Math.max(x1, x2) + 0.5) return false;
      const y = y1 + (y2 - y1) * (cx - x1) / (x2 - x1);
      return Math.abs(y - cy) < 0.6;
    });
    assert.ok(touchee.length >= 1,
      'le point (' + cx + ' ; ' + cy + ') ne touche aucune tangente');
  }
});

test('1re-derivation / tangentes : la tangente du sommet est rigoureusement horizontale', () => {
  const d = DERIV[1];
  const horiz = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'focus-line')
    .filter(l => Math.abs(attr(l, 'y1') - attr(l, 'y2')) < 1e-9);
  assert.strictEqual(horiz.length, 1,
    'exactement une tangente horizontale, celle du maximum ou f prime vaut 0');
});

/* --- Schema 3 : signe de f' et variations de f -------------------------
   f(x) = x^3/3 - x^2 - 3x + 4, f'(x) = (x-3)(x+1), racines -1 et 3.

   Ce qui est verifie : les deux tangentes sont horizontales (f' y est nulle),
   et les deux changements de signe de la bande du bas tombent EXACTEMENT sous
   les deux points de tangence. C'est tout le propos du schema : si les
   verticales ne coincidaient pas, la figure affirmerait un lien qu'elle ne
   montrerait pas. */
test('1re-derivation / signe : les deux tangentes sont horizontales', () => {
  const d = DERIV[2];
  const tang = balises(d.svg, 'line').filter(l => classeDe(l) === 'focus-line');
  assert.strictEqual(tang.length, 2, 'deux tangentes horizontales');
  for (const l of tang) {
    assert.strictEqual(attr(l, 'y1'), attr(l, 'y2'),
      'une tangente ou f prime est nulle doit etre parfaitement horizontale');
  }
});

test('1re-derivation / signe : les separations du tableau tombent sous les points', () => {
  const d = DERIV[2];
  const points = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .map(c => attr(c, 'cx'))
    .sort((a, b) => a - b);
  assert.strictEqual(points.length, 2, 'deux points de tangence');

  // Les separations verticales de la bande de signes : traits de cadre dont
  // les deux abscisses sont egales et qui ne sont pas les bords du cadre.
  const cadre = balises(d.svg, 'line').filter(l => classeDe(l) === 'frame-line');
  const verticales = cadre
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9)
    .map(l => attr(l, 'x1'))
    .sort((a, b) => a - b);
  // Deux bords + deux separations
  assert.strictEqual(verticales.length, 4, 'deux bords et deux separations');
  const separations = verticales.slice(1, 3);

  separations.forEach((x, i) => {
    assert.ok(Math.abs(x - points[i]) < 0.5,
      'la separation de signe a x=' + x + ' ne tombe pas sous le point de tangence a x=' + points[i]);
  });
});

test('1re-derivation / signe : les verticales de liaison relient bien les deux etages', () => {
  const d = DERIV[2];
  const points = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .map(c => ({ x: attr(c, 'cx'), y: attr(c, 'cy') }))
    .sort((a, b) => a.x - b.x);

  const liaisons = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'guide-line')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9)
    .sort((a, b) => attr(a, 'x1') - attr(b, 'x1'));
  assert.strictEqual(liaisons.length, 2, 'deux verticales de liaison');

  liaisons.forEach((l, i) => {
    assert.ok(Math.abs(attr(l, 'x1') - points[i].x) < 1e-9,
      'la verticale ne part pas du point de tangence');
    assert.ok(Math.abs(attr(l, 'y1') - points[i].y) < 1e-9,
      'la verticale ne part pas de l ordonnee du point de tangence');
  });
});

/* --- Conformite aux contraintes du convertisseur ----------------------- */
test('1re-derivation : aucune couleur en dur dans les schemas', () => {
  for (const d of DERIV) {
    assert.ok(!/(?:stroke|fill)="#/.test(d.svg),
      d.title + ' : une couleur est ecrite en dur au lieu d une variable du projet');
  }
});

test('1re-derivation : pas d etiquette en capitales dans les schemas', () => {
  for (const d of DERIV) {
    const textes = [];
    const re = /<text\b[^>]*>([^<]*)<\/text>/g;
    let m;
    while ((m = re.exec(d.svg))) textes.push(m[1].trim());
    for (const t of textes) {
      const lettres = t.replace(/[^A-Za-zÀ-ÿ]/g, '');
      if (lettres.length >= 3) {
        assert.ok(lettres !== lettres.toUpperCase(),
          d.title + ' : etiquette « ' + t +' » entierement en capitales, qui se fracture a la conversion');
      }
    }
  }
});
