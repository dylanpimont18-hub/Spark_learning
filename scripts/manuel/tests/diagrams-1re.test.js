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

/* =========================================================================
   TESTS AJOUTES le 2026-09-14 pour les trois chapitres de la seconde vague de
   la premiere : second degre, signe d'un trinome, suites.

   Ils reutilisent les utilitaires definis en haut du fichier (balises, attr,
   classeDe, viewBox, polyPoints, schemas) et ne touchent a aucun test existant.

   LA PROPRIETE PROPRE A CES TROIS CHAPITRES est la PARABOLE : une parabole qui
   ne passe pas par les racines annoncees, ou dont le sommet n'est pas a
   mi-chemin entre elles, est fausse dans le manuel et parfaitement invisible a
   la relecture. On relit donc le DESSIN et on recalcule le trinome a partir des
   points imprimes, jamais une variable intermediaire.
   ========================================================================= */

const SD = schemas('1re-second-degre');
const PS = schemas('1re-polynomes-signe');
const SU = schemas('1re-suites');

/* Regles generales, appliquees aux trois chapitres d'un coup. Ce sont les
   memes que pour la derivation, mais il faut les redeclarer : DERIV ne couvre
   pas ces schemas-la, et un schema non couvert est un schema non protege. */
const VAGUE2 = [
  { id: '1re-second-degre', d: SD, attendus: 3 },
  { id: '1re-polynomes-signe', d: PS, attendus: 3 },
  /* DEUX schemas pour les suites, et c'est delibere. La raison et le terme
     general sont des relations arithmetiques, pas des objets geometriques, et
     le schema principal du module couvre deja la comparaison des deux natures.
     Ce nombre est fige ici pour qu'une troisieme figure ajoutee sans raison
     fasse echouer le test au lieu de passer inapercue. */
  { id: '1re-suites', d: SU, attendus: 2 }
];

test('vague 2 : chaque chapitre porte le nombre de schemas decide', () => {
  for (const { id, d, attendus } of VAGUE2) {
    assert.strictEqual(d.length, attendus, id + ' : ' + d.length + ' schemas au lieu de ' + attendus);
    for (const s of d) {
      assert.ok(s.svg && s.svg.includes('<svg'), id + ' : schema sans source SVG');
      assert.ok(s.caption && s.caption.trim(), id + ' : schema sans legende');
      assert.ok(s.notes && s.notes.length >= 2, id + ' : schema sans notes');
      assert.ok(s.reading && s.reading.trim(), id + ' : schema sans lecture');
      assert.ok(s.description && s.description.trim(), id + ' : schema sans description');
    }
  }
});

test('vague 2 : tous les viewBox ont une origine 0 0', () => {
  for (const { id, d } of VAGUE2) {
    for (const s of d) {
      const vb = viewBox(s.svg);
      assert.strictEqual(vb.x, 0, id + ' / ' + s.title + ' : origine x du viewBox');
      assert.strictEqual(vb.y, 0, id + ' / ' + s.title + ' : origine y du viewBox');
    }
  }
});

test('vague 2 : rien ne sort du viewBox', () => {
  for (const { id, d } of VAGUE2) {
    for (const s of d) {
      const vb = viewBox(s.svg);
      const dans = (x, y, quoi) => {
        assert.ok(x >= -0.5 && x <= vb.w + 0.5, quoi + ' : x=' + x + ' hors [0 ; ' + vb.w + ']');
        assert.ok(y >= -0.5 && y <= vb.h + 0.5, quoi + ' : y=' + y + ' hors [0 ; ' + vb.h + ']');
      };
      const ou = id + ' / ' + s.title;
      for (const l of balises(s.svg, 'line')) {
        dans(attr(l, 'x1'), attr(l, 'y1'), ou + ' / debut de trait');
        dans(attr(l, 'x2'), attr(l, 'y2'), ou + ' / fin de trait');
      }
      for (const c of balises(s.svg, 'circle')) dans(attr(c, 'cx'), attr(c, 'cy'), ou + ' / point');
      for (const pts of polyPoints(s.svg)) for (const p of pts) dans(p.x, p.y, ou + ' / point de courbe');
      /* Les etiquettes aussi : un texte hors cadre s'imprime par-dessus le
         texte voisin exactement comme un trait, et sans aucune alerte. */
      const re = /<text\b[^>]*\bx="([-\d.]+)"[^>]*\by="([-\d.]+)"/g;
      let m;
      while ((m = re.exec(s.svg))) dans(parseFloat(m[1]), parseFloat(m[2]), ou + ' / etiquette');
    }
  }
});

test('vague 2 : aucune couleur en dur', () => {
  for (const { id, d } of VAGUE2) {
    for (const s of d) {
      assert.ok(!/(?:stroke|fill)="#/.test(s.svg),
        id + ' / ' + s.title + ' : couleur ecrite en dur au lieu d une variable du projet');
    }
  }
});

test('vague 2 : pas d etiquette en capitales', () => {
  for (const { id, d } of VAGUE2) {
    for (const s of d) {
      const re = /<text\b[^>]*>([^<]*)<\/text>/g;
      let m;
      while ((m = re.exec(s.svg))) {
        const lettres = m[1].trim().replace(/[^A-Za-z\u00C0-\u00FF]/g, '');
        if (lettres.length >= 3) {
          assert.ok(lettres !== lettres.toUpperCase(),
            id + ' : etiquette entierement en capitales : ' + m[1].trim());
        }
      }
    }
  }
});

/* --- Outil commun aux paraboles ----------------------------------------
   Retrouve le trinome a partir de la POLYLINE DESSINEE, par resolution du
   systeme sur trois points bien separes, puis verifie que la courbe entiere le
   suit. On ne fait confiance a aucune valeur annoncee ailleurs : si le dessin
   ment, c'est ici qu'on l'apprend. */
function trinomeDeLaCourbe(pts, px, py) {
  const m = pts.map(p => ({ x: px(p.x), y: py(p.y) }));
  const A = m[0], B = m[Math.floor(m.length / 2)], C = m[m.length - 1];
  const d = (A.x - B.x) * (A.x - C.x) * (B.x - C.x);
  const a = (C.x * (B.y - A.y) + B.x * (A.y - C.y) + A.x * (C.y - B.y)) / d;
  const b = (C.x * C.x * (A.y - B.y) + B.x * B.x * (C.y - A.y) + A.x * A.x * (B.y - C.y)) / d;
  const c = (B.x * C.x * (B.x - C.x) * A.y + C.x * A.x * (C.x - A.x) * B.y
           + A.x * B.x * (A.x - B.x) * C.y) / d;
  for (const p of m) {
    assert.ok(Math.abs(a * p.x * p.x + b * p.x + c - p.y) < 0.02,
      'la polyline ne suit pas une parabole en x=' + p.x.toFixed(3));
  }
  return { a, b, c };
}

/* --- 1re-second-degre, schema 1 : les trois positions -------------------
   Le schema ANNONCE ses discriminants en toutes lettres. C'est la figure la
   plus exigeante des trois chapitres : une parabole dessinee un peu trop haut
   rendrait les etiquettes mensongeres sans que rien ne le signale.

   Les trois panneaux partagent la meme echelle (20 unites de viewBox par unite
   d'abscisse, 16 par unite d'ordonnee) et la meme ligne de base a y=150 ; leurs
   milieux de panneau sont les abscisses ou x vaut 3. */
test('1re-second-degre / trois positions : chaque parabole a le discriminant annonce', () => {
  const d = SD[0];
  const UX = 20, UY = 16, AXE = 150;
  const centres = [82, 237, 392];
  const attendus = [16, 0, -16];
  const courbes = polyPoints(d.svg);
  assert.strictEqual(courbes.length, 3, 'trois paraboles, une par panneau');

  courbes.forEach((pts, i) => {
    const px = (X) => 3 + (X - centres[i]) / UX;
    const py = (Y) => (AXE - Y) / UY;
    const { a, b, c } = trinomeDeLaCourbe(pts, px, py);
    assert.ok(Math.abs(a - 1) < 0.01, 'panneau ' + i + ' : a=' + a.toFixed(4) + ' attendu 1');
    assert.ok(Math.abs(b + 6) < 0.02, 'panneau ' + i + ' : b=' + b.toFixed(4) + ' attendu -6');
    const delta = b * b - 4 * a * c;
    assert.ok(Math.abs(delta - attendus[i]) < 0.35,
      'panneau ' + i + ' : discriminant dessine ' + delta.toFixed(3) + ' annonce ' + attendus[i]);
    const ys = c - b * b / (4 * a);
    if (attendus[i] > 0) assert.ok(ys < -0.1, 'panneau ' + i + ' : delta positif mais sommet pas sous l axe');
    if (attendus[i] === 0) assert.ok(Math.abs(ys) < 0.05, 'panneau ' + i + ' : delta nul mais sommet hors de l axe');
    if (attendus[i] < 0) assert.ok(ys > 0.1, 'panneau ' + i + ' : delta negatif mais sommet pas au-dessus');
  });
});

test('1re-second-degre / trois positions : le nombre de racines marquees suit le signe du discriminant', () => {
  const d = SD[0];
  const AXE = 150;
  /* Les racines sont les points pleins poses SUR la ligne de base. Les sommets
     sont marques en point secondaire : on ne les compte pas ici. */
  const surLAxe = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .filter(c => Math.abs(attr(c, 'cy') - AXE) < 0.5)
    .map(c => attr(c, 'cx'))
    .sort((x, y) => x - y);
  assert.strictEqual(surLAxe.length, 3,
    'trois points de racine en tout : deux puis un puis aucun, or ' + surLAxe.length);
  assert.ok(surLAxe[0] < 152 && surLAxe[1] < 152, 'les deux premieres racines sont dans le panneau 1');
  assert.ok(surLAxe[2] > 167 && surLAxe[2] < 307, 'la racine double est dans le panneau 2');
  assert.ok(Math.abs((surLAxe[0] + surLAxe[1]) / 2 - 82) < 0.05,
    'les deux racines du panneau 1 ne sont pas symetriques autour du sommet');
});

/* --- 1re-second-degre, schema 2 : x carre egal 9 a deux solutions -------
   Ce que la figure affirme : la droite de hauteur 9 rencontre la parabole en
   DEUX points, symetriques par rapport a l'axe des ordonnees. Une droite posee
   a la mauvaise hauteur, ou des points poses a cote de la courbe, casseraient
   la demonstration en silence. */
test('1re-second-degre / deux solutions : les deux points sont sur la courbe ET sur la droite', () => {
  const d = SD[1];
  const O = { x: 210, y: 232 }, UX = 38, UY = 20.5;
  const px = (X) => (X - O.x) / UX, py = (Y) => (O.y - Y) / UY;

  const droite = balises(d.svg, 'line').find(l => classeDe(l) === 'focus-line');
  assert.ok(droite, 'la droite de hauteur 9 est tracee en trait fort');
  assert.strictEqual(attr(droite, 'y1'), attr(droite, 'y2'), 'la droite doit etre horizontale');
  const hauteur = py(attr(droite, 'y1'));
  assert.ok(Math.abs(hauteur - 9) < 0.02, 'hauteur dessinee ' + hauteur.toFixed(4) + ' attendue 9');

  const points = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .map(c => ({ x: px(attr(c, 'cx')), y: py(attr(c, 'cy')) }))
    .sort((p, q) => p.x - q.x);
  assert.strictEqual(points.length, 2, 'deux points de rencontre, pas un');

  for (const p of points) {
    assert.ok(Math.abs(p.y - p.x * p.x) < 0.03,
      'le point d abscisse ' + p.x.toFixed(3) + ' n est pas sur la courbe de la fonction carre');
    assert.ok(Math.abs(p.y - 9) < 0.03, 'le point n est pas a la hauteur 9');
  }
  assert.ok(Math.abs(points[0].x + 3) < 0.02, 'abscisse gauche ' + points[0].x.toFixed(4) + ' attendue -3');
  assert.ok(Math.abs(points[1].x - 3) < 0.02, 'abscisse droite ' + points[1].x.toFixed(4) + ' attendue 3');
  assert.ok(Math.abs(points[0].x + points[1].x) < 1e-9,
    'les deux solutions doivent etre opposees : c est tout le propos de la figure');
});

/* --- 1re-second-degre, schema 3 : le sommet a mi-chemin -----------------
   La figure affirme deux ecarts EGAUX entre chaque racine et l'axe de symetrie,
   et les etiquette tous deux par le meme nombre. Des ecarts inegaux d'un pixel
   ne se verraient pas et rendraient les deux etiquettes fausses. */
test('1re-second-degre / sommet : les deux ecarts racine-sommet sont rigoureusement egaux', () => {
  const d = SD[2];
  const AXE = 150;
  const racines = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .filter(c => Math.abs(attr(c, 'cy') - AXE) < 0.5)
    .map(c => attr(c, 'cx'))
    .sort((x, y) => x - y);
  assert.strictEqual(racines.length, 2, 'deux racines sur l axe');

  const sommet = balises(d.svg, 'circle').find(c => classeDe(c) === 'plot-point-alt');
  assert.ok(sommet, 'le sommet est marque en point secondaire');
  const xs = attr(sommet, 'cx');

  const gauche = xs - racines[0], droite = racines[1] - xs;
  assert.ok(Math.abs(gauche - droite) < 1e-9,
    'ecarts inegaux : ' + gauche + ' a gauche contre ' + droite + ' a droite');
  assert.ok(Math.abs(xs - (racines[0] + racines[1]) / 2) < 1e-9,
    'le sommet n est pas exactement a mi-chemin des deux racines');
  assert.ok(attr(sommet, 'cy') > AXE, 'le sommet devrait etre sous l axe des abscisses');

  const verticales = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'guide-line')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9);
  assert.strictEqual(verticales.length, 1, 'un seul axe de symetrie');
  assert.ok(Math.abs(attr(verticales[0], 'x1') - xs) < 1e-9,
    'l axe de symetrie ne passe pas par le sommet');
});

test('1re-second-degre / sommet : la courbe dessinee est bien le trinome annonce', () => {
  const d = SD[2];
  const O = { x: 60, y: 150 }, UX = 48, UY = 17;
  const pts = polyPoints(d.svg);
  assert.strictEqual(pts.length, 1, 'une seule courbe');
  const { a, b, c } = trinomeDeLaCourbe(pts[0], (X) => (X - O.x) / UX, (Y) => (O.y - Y) / UY);
  assert.ok(Math.abs(a - 1) < 0.01, 'a=' + a.toFixed(4) + ' attendu 1');
  assert.ok(Math.abs(b + 8) < 0.02, 'b=' + b.toFixed(4) + ' attendu -8');
  assert.ok(Math.abs(c - 12) < 0.05, 'c=' + c.toFixed(4) + ' attendu 12');
  const rac = [(-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a), (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)];
  assert.ok(Math.abs(rac[0] - 2) < 0.02 && Math.abs(rac[1] - 6) < 0.02,
    'racines dessinees ' + rac.map(r => r.toFixed(3)).join(' et ') + ' attendues 2 et 6');
});

/* --- 1re-polynomes-signe, schema 1 : le tableau sous la courbe ----------
   Tout le propos du schema est l'ALIGNEMENT : les separations du tableau
   doivent tomber exactement sous les racines. Si elles ne coincidaient pas, la
   figure affirmerait un lien qu'elle ne montrerait pas. C'est le meme controle
   que pour le schema du signe de la derivation, et pour la meme raison. */
test('1re-polynomes-signe / tableau : les separations tombent sous les racines', () => {
  const d = PS[0];
  const AXE = 170;
  const racines = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .filter(c => Math.abs(attr(c, 'cy') - AXE) < 0.5)
    .map(c => attr(c, 'cx'))
    .sort((x, y) => x - y);
  assert.strictEqual(racines.length, 2, 'deux racines sur l axe');

  const verticalesCadre = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'frame-line')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9)
    .map(l => attr(l, 'x1'))
    .sort((x, y) => x - y);
  assert.strictEqual(verticalesCadre.length, 4, 'deux bords et deux separations');
  const separations = verticalesCadre.slice(1, 3);

  separations.forEach((x, i) => {
    assert.ok(Math.abs(x - racines[i]) < 1e-9,
      'separation a x=' + x + ' au lieu de la racine a x=' + racines[i]);
  });

  const liaisons = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'guide-line')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9)
    .sort((l, m) => attr(l, 'x1') - attr(m, 'x1'));
  assert.strictEqual(liaisons.length, 2, 'deux verticales de liaison');
  liaisons.forEach((l, i) => {
    assert.ok(Math.abs(attr(l, 'x1') - racines[i]) < 1e-9, 'la liaison ne part pas de la racine');
    assert.ok(Math.abs(attr(l, 'y1') - AXE) < 0.5, 'la liaison ne part pas de l axe');
  });
});

test('1re-polynomes-signe / tableau : la courbe dessinee est bien le trinome annonce', () => {
  const d = PS[0];
  const O = { x: 150, y: 170 }, UX = 38, UY = 13;
  const pts = polyPoints(d.svg);
  assert.strictEqual(pts.length, 1, 'une seule courbe');
  const { a, b, c } = trinomeDeLaCourbe(pts[0], (X) => (X - O.x) / UX, (Y) => (O.y - Y) / UY);
  assert.ok(Math.abs(a + 1) < 0.01, 'a=' + a.toFixed(4) + ' attendu -1');
  assert.ok(Math.abs(b - 2) < 0.02, 'b=' + b.toFixed(4) + ' attendu 2');
  assert.ok(Math.abs(c - 8) < 0.05, 'c=' + c.toFixed(4) + ' attendu 8');
  assert.ok(a < 0, 'le coefficient dominant doit etre negatif : la figure montre une parabole renversee');

  const f = (x) => a * x * x + b * x + c;
  assert.ok(f(1) > 0, 'le trinome devrait etre positif entre ses racines');
  assert.ok(f(-3) < 0 && f(5) < 0, 'le trinome devrait etre negatif a l exterieur');
});

/* --- 1re-polynomes-signe, schema 2 : discriminant negatif, deux sens ----
   La figure affirme deux choses : aucune des deux courbes ne touche sa ligne,
   et elles sont de signes opposes. Une courbe qui effleurerait son axe
   contredirait son etiquette sans que cela se voie. */
test('1re-polynomes-signe / sans racine : aucune courbe ne touche son axe', () => {
  const d = PS[1];
  const courbes = polyPoints(d.svg);
  assert.strictEqual(courbes.length, 2, 'deux paraboles');
  const axes = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'axis')
    .sort((l, m) => attr(l, 'x1') - attr(m, 'x1'));
  assert.strictEqual(axes.length, 2, 'deux lignes de base');

  const axeG = attr(axes[0], 'y1');
  for (const p of courbes[0]) {
    assert.ok(p.y < axeG - 1,
      'panneau gauche : un point de courbe a y=' + p.y + ' touche ou franchit l axe a y=' + axeG);
  }
  const axeD = attr(axes[1], 'y1');
  for (const p of courbes[1]) {
    assert.ok(p.y > axeD + 1,
      'panneau droit : un point de courbe a y=' + p.y + ' touche ou franchit l axe a y=' + axeD);
  }
  const extremes = balises(d.svg, 'circle').filter(c => classeDe(c) === 'plot-point-alt');
  assert.strictEqual(extremes.length, 2, 'un point extreme par panneau');
});

test('1re-polynomes-signe / sans racine : les deux trinomes ont le meme discriminant', () => {
  const d = PS[1];
  const courbes = polyPoints(d.svg);
  const UX = 30, UY = 13;
  const reperes = [{ x: 105, y: 196 }, { x: 335, y: 84 }];
  const trinomes = courbes.map((pts, i) => {
    const { a, b, c } = trinomeDeLaCourbe(pts,
      (X) => (X - reperes[i].x) / UX, (Y) => (reperes[i].y - Y) / UY);
    return { a, delta: b * b - 4 * a * c };
  });
  trinomes.forEach((t, i) => {
    assert.ok(t.delta < -1,
      'panneau ' + i + ' : discriminant dessine ' + t.delta.toFixed(3) + ', il devrait etre nettement negatif');
    assert.ok(Math.abs(t.delta + 12) < 0.5,
      'panneau ' + i + ' : discriminant ' + t.delta.toFixed(3) + ' attendu -12');
  });
  assert.ok(trinomes[0].a > 0, 'le panneau gauche doit avoir un coefficient dominant positif');
  assert.ok(trinomes[1].a < 0, 'le panneau droit doit avoir un coefficient dominant negatif');
  assert.ok(Math.abs(trinomes[0].delta - trinomes[1].delta) < 0.5,
    'les deux discriminants doivent etre egaux : c est ce qui isole le role du signe du coefficient dominant');
});

/* --- 1re-polynomes-signe, schema 3 : deux formes de solution -----------
   Les deux droites numeriques doivent porter les MEMES racines aux MEMES
   abscisses : c'est un patron comparaison, ou la seule difference visible doit
   etre la disposition des segments epais. */
test('1re-polynomes-signe / deux sens : les deux lignes portent les memes racines', () => {
  const d = PS[2];
  const points = balises(d.svg, 'circle').filter(c => classeDe(c) === 'plot-point');
  assert.strictEqual(points.length, 4, 'deux racines sur chacune des deux lignes');

  const parLigne = {};
  for (const c of points) {
    const y = attr(c, 'cy');
    (parLigne[y] = parLigne[y] || []).push(attr(c, 'cx'));
  }
  const lignes = Object.keys(parLigne).map(Number).sort((a, b) => a - b);
  assert.strictEqual(lignes.length, 2, 'exactement deux lignes numeriques');
  const hautes = parLigne[lignes[0]].sort((a, b) => a - b);
  const basses = parLigne[lignes[1]].sort((a, b) => a - b);
  assert.deepStrictEqual(hautes, basses,
    'les racines ne sont pas aux memes abscisses sur les deux lignes : la comparaison ne tient plus');
});

test('1re-polynomes-signe / deux sens : deux morceaux en haut, un seul en bas', () => {
  const d = PS[2];
  const segments = balises(d.svg, 'line').filter(l => classeDe(l) === 'focus-line');
  const parY = {};
  for (const l of segments) {
    const y = attr(l, 'y1');
    assert.strictEqual(attr(l, 'y2'), y, 'un segment de solution doit etre horizontal');
    (parY[y] = parY[y] || []).push([attr(l, 'x1'), attr(l, 'x2')]);
  }
  const lignes = Object.keys(parY).map(Number).sort((a, b) => a - b);
  assert.strictEqual(lignes.length, 2, 'deux lignes portent des segments');
  assert.strictEqual(parY[lignes[0]].length, 2,
    'la ligne du haut doit porter DEUX morceaux : l inequation stricte positive donne une reunion');
  assert.strictEqual(parY[lignes[1]].length, 1,
    'la ligne du bas doit porter UN seul morceau : l inequation stricte negative donne un intervalle');

  const racines = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .map(c => attr(c, 'cx'));
  const r1 = Math.min.apply(null, racines), r2 = Math.max.apply(null, racines);
  const bas = parY[lignes[1]][0].sort((a, b) => a - b);
  assert.ok(Math.abs(bas[0] - r1) < 1e-9 && Math.abs(bas[1] - r2) < 1e-9,
    'le segment du bas ne relie pas exactement les deux racines');

  const haut = parY[lignes[0]].map(s => s.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0]);
  assert.ok(Math.abs(haut[0][1] - r1) < 1e-9, 'le morceau gauche du haut ne s arrete pas a la racine gauche');
  assert.ok(Math.abs(haut[1][0] - r2) < 1e-9, 'le morceau droit du haut ne demarre pas a la racine droite');
});

/* --- 1re-suites, schema 1 : six termes et cinq pas ---------------------
   La figure existe pour porter UN nombre : la difference de un entre le nombre
   de termes et le nombre de pas. Si les deux comptes coincidaient, elle
   demontrerait le contraire de ce qu'elle affirme. */
test('1re-suites / rang : il y a exactement un terme de plus que de pas', () => {
  const d = SU[0];
  const termes = balises(d.svg, 'circle').filter(c => classeDe(c) === 'plot-point');
  const pas = balises(d.svg, 'line').filter(l => classeDe(l) === 'focus-line');
  assert.strictEqual(termes.length, 6, 'six termes, du rang 0 au rang 5');
  assert.strictEqual(pas.length, 5, 'cinq pas entre ces six termes');
  assert.strictEqual(termes.length, pas.length + 1,
    'la relation entre nombre de termes et nombre de pas est ce que la figure demontre : elle doit tenir sur le dessin');
});

test('1re-suites / rang : les termes sont regulierement espaces et les pas les relient', () => {
  const d = SU[0];
  const xs = balises(d.svg, 'circle')
    .filter(c => classeDe(c) === 'plot-point')
    .map(c => attr(c, 'cx'))
    .sort((a, b) => a - b);
  const ecart = xs[1] - xs[0];
  for (let i = 1; i < xs.length; i++) {
    assert.ok(Math.abs((xs[i] - xs[i - 1]) - ecart) < 1e-9,
      'les termes ne sont pas regulierement espaces : ecart ' + (xs[i] - xs[i - 1]) + ' au lieu de ' + ecart);
  }
  const pas = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'focus-line')
    .map(l => [attr(l, 'x1'), attr(l, 'x2')].sort((a, b) => a - b))
    .sort((a, b) => a[0] - b[0]);
  pas.forEach((p, i) => {
    assert.ok(Math.abs(p[0] - xs[i]) < 1e-9 && Math.abs(p[1] - xs[i + 1]) < 1e-9,
      'le pas ' + (i + 1) + ' ne relie pas les termes de rang ' + i + ' et ' + (i + 1));
  });
});

/* --- 1re-suites, schema 2 : une raison de un demi ----------------------
   Deux affirmations a garder : chaque barre vaut exactement la moitie de la
   precedente, et aucune barre n'est de hauteur nulle. La seconde est celle qui
   compte : c'est tout le sens de « la suite s'approche de zero sans l'atteindre »,
   et la vague terminale s'appuiera dessus pour parler de limite. */
test('1re-suites / demi : chaque barre vaut exactement la moitie de la precedente', () => {
  const d = SU[1];
  const AXE = 210;
  const barres = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'focus-line')
    .map(l => ({ x: attr(l, 'x1'), h: AXE - attr(l, 'y1') }))
    .sort((a, b) => a.x - b.x);
  assert.strictEqual(barres.length, 8, 'huit barres, du rang 0 au rang 7');

  for (let i = 1; i < barres.length; i++) {
    const q = barres[i].h / barres[i - 1].h;
    assert.ok(Math.abs(q - 0.5) < 0.005,
      'barre ' + i + ' : quotient dessine ' + q.toFixed(5) + ' attendu un demi');
  }
  assert.ok(Math.abs(barres[0].h - 64 * 2.8) < 0.2,
    'la premiere barre ne mesure pas 64 unites : ' + barres[0].h);
});

test('1re-suites / demi : aucune barre n atteint zero', () => {
  const d = SU[1];
  const AXE = 210;
  const barres = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'focus-line')
    .map(l => AXE - attr(l, 'y1'));
  for (const h of barres) {
    assert.ok(h > 0,
      'une barre de hauteur ' + h + ' touche la ligne : la figure affirmerait que la suite atteint zero');
  }
  const sommets = balises(d.svg, 'circle')
    .filter(c => ['plot-point', 'plot-point-alt'].includes(classeDe(c)))
    .map(c => ({ x: attr(c, 'cx'), y: attr(c, 'cy') }))
    .sort((a, b) => a.x - b.x);
  assert.strictEqual(sommets.length, 8, 'un point par barre');
  const hautsBarres = balises(d.svg, 'line')
    .filter(l => classeDe(l) === 'focus-line')
    .map(l => ({ x: attr(l, 'x1'), y: attr(l, 'y1') }))
    .sort((a, b) => a.x - b.x);
  sommets.forEach((s, i) => {
    assert.ok(Math.abs(s.x - hautsBarres[i].x) < 1e-9 && Math.abs(s.y - hautsBarres[i].y) < 1e-9,
      'le point de rang ' + i + ' n est pas pose au sommet de sa barre');
  });
});

/* =========================================================================
   PROBABILITES CONDITIONNELLES (2026-09-14)

   Le chapitre ou l'intuition trompe le plus. Ce que ces tests gardent est
   precisement ce que l'oeil ne peut PAS verifier : que le tableau croise
   imprime redonne exactement l'arbre pondere du chapitre, et que les deux
   barres de comparaison sont bien a la meme echelle.

   Le calcul a rattrape un defaut pendant la redaction : l'effectif de la case
   commune, obtenu par 0,4 x 0,7 x 1000 en flottant, valait 279,99999999999994.
   Les effectifs sont donc poses en entiers dans la figure, et c'est ce test
   qui verifie qu'ils correspondent bien a l'arbre.
   ========================================================================= */

const PROBAS = schemas('1re-probas-conditionnelles');

function textesDe(svg) {
  const out = [];
  const re = /<text\b[^>]*>([^<]*)<\/text>/g;
  let m;
  while ((m = re.exec(svg))) out.push(m[1].trim());
  return out;
}

test('1re-probas : le chapitre porte bien ses trois schemas secondaires', () => {
  assert.strictEqual(PROBAS.length, 3);
  for (const d of PROBAS) {
    assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
    assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
    assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
    assert.ok(d.reading && d.reading.trim(), 'chaque schema porte sa lecture');
    const vb = viewBox(d.svg);
    assert.strictEqual(vb.x, 0, 'origine x du viewBox');
    assert.strictEqual(vb.y, 0, 'origine y du viewBox');
  }
});

test('1re-probas : aucun element ne sort de son viewBox', () => {
  for (const d of PROBAS) {
    const vb = viewBox(d.svg);
    for (const l of balises(d.svg, 'line')) {
      for (const paire of [['x1', 'y1'], ['x2', 'y2']]) {
        const x = attr(l, paire[0]), y = attr(l, paire[1]);
        assert.ok(x >= -0.5 && x <= vb.w + 0.5, d.title + ' : x=' + x + ' hors cadre');
        assert.ok(y >= -0.5 && y <= vb.h + 0.5, d.title + ' : y=' + y + ' hors cadre');
      }
    }
    for (const r of balises(d.svg, 'rect')) {
      assert.ok(attr(r, 'x') + attr(r, 'width') <= vb.w + 0.5, d.title + ' : rectangle deborde a droite');
      assert.ok(attr(r, 'y') + attr(r, 'height') <= vb.h + 0.5, d.title + ' : rectangle deborde en bas');
    }
  }
});

/* --- Schema 1 : le tableau croise redonne l'arbre ----------------------
   L'arbre du chapitre porte P(S)=0,4 ; P(M sachant S)=0,7 ; P(M sachant nonS)=0,5.
   Sur 1000 eleves, cela donne 280 / 120 / 300 / 300, de totaux 400, 600, 580,
   420. Si l'une de ces neuf valeurs bougeait, la figure contredirait l'arbre de
   la page precedente sans qu'aucune alerte ne se declenche. */
test('1re-probas / tableau : les neuf effectifs redonnent exactement l arbre', () => {
  const nombres = textesDe(PROBAS[0].svg).filter(x => /^\d+$/.test(x)).map(Number);

  const SM = 280, SMb = 120, SbM = 300, SbMb = 300;
  const attendus = [SM, SMb, SbM, SbMb, SM + SMb, SbM + SbMb, SM + SbM, SMb + SbMb, 1000];
  for (const v of attendus) {
    assert.ok(nombres.includes(v), 'le tableau doit porter la valeur ' + v);
  }

  // Coherence interne : les marges somment au total general.
  assert.strictEqual(SM + SMb + SbM + SbMb, 1000);
  assert.strictEqual((SM + SMb) + (SbM + SbMb), 1000, 'totaux de lignes');
  assert.strictEqual((SM + SbM) + (SMb + SbMb), 1000, 'totaux de colonnes');

  // Coherence avec l'arbre : chaque case est bien un chemin.
  assert.strictEqual(SM, Math.round(0.4 * 0.7 * 1000), 'case S inter M');
  assert.strictEqual(SMb, Math.round(0.4 * 0.3 * 1000), 'case S inter non M');
  assert.strictEqual(SbM, Math.round(0.6 * 0.5 * 1000), 'case non S inter M');
  assert.strictEqual(SbMb, Math.round(0.6 * 0.5 * 1000), 'case non S inter non M');
});

test('1re-probas / tableau : les probabilites de l arbre somment a 1 a chaque noeud', () => {
  assert.strictEqual(0.4 + 0.6, 1, 'noeud racine');
  assert.ok(Math.abs((0.7 + 0.3) - 1) < 1e-12, 'noeud S');
  assert.strictEqual(0.5 + 0.5, 1, 'noeud non S');
});

/* --- Schema 2 : deux barres, meme echelle ------------------------------
   Toute la demonstration repose sur un fait GRAPHIQUE : la portion coloree a
   la meme longueur sur les deux barres, alors que les barres ont des longueurs
   differentes. Si les deux portions differaient ne serait-ce que d'un point,
   la figure dirait le contraire de son texte. */
test('1re-probas / barres : les deux portions colorees ont la meme longueur', () => {
  const rects = balises(PROBAS[1].svg, 'rect');
  assert.strictEqual(rects.length, 2, 'deux portions colorees');
  assert.strictEqual(attr(rects[0], 'width'), attr(rects[1], 'width'),
    'les deux portions representent les MEMES 280 eleves : leurs longueurs doivent etre egales');
  assert.strictEqual(attr(rects[0], 'x'), attr(rects[1], 'x'),
    'les deux portions partent de la meme abscisse');
});

test('1re-probas / barres : les longueurs respectent l echelle des effectifs', () => {
  const svg = PROBAS[1].svg;
  const rects = balises(svg, 'rect');
  const portion = attr(rects[0], 'width');
  const x0 = attr(rects[0], 'x');

  /* Les deux barres de reference sont les traits de cadre horizontaux : on
     releve leurs extremites droites, qui doivent prendre deux valeurs. */
  const bouts = balises(svg, 'line')
    .filter(l => classeDe(l) === 'frame-line')
    .filter(l => Math.abs(attr(l, 'y1') - attr(l, 'y2')) < 1e-9)
    .map(l => attr(l, 'x2'));
  const distincts = Array.from(new Set(bouts)).sort((a, b) => a - b);
  assert.strictEqual(distincts.length, 2, 'deux longueurs de barre distinctes');

  const court = distincts[0] - x0, longue = distincts[1] - x0;
  assert.ok(Math.abs(portion / court - 280 / 400) < 0.01,
    'la portion doit occuper 0,7 de la barre des sportifs, elle occupe ' + (portion / court).toFixed(4));
  assert.ok(Math.abs(portion / longue - 280 / 580) < 0.01,
    'la portion doit occuper environ 0,483 de la barre de la moyenne, elle occupe ' + (portion / longue).toFixed(4));
  assert.ok(Math.abs(court / longue - 400 / 580) < 0.01,
    'les deux barres ne sont pas a la meme echelle');
});

/* --- Schema 3 : independance, par les aires ----------------------------
   A gauche les deux coupures verticales sont alignees (independance), a droite
   non. C'est exactement ce que dit le texte, et c'est verifiable au trait. */
test('1re-probas / independance : les coupures de gauche sont alignees, celles de droite non', () => {
  const coupures = balises(PROBAS[2].svg, 'line')
    .filter(l => classeDe(l) === 'curve-main')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9)
    .map(l => ({ x: attr(l, 'x1'), y1: attr(l, 'y1'), y2: attr(l, 'y2') }))
    .sort((a, b) => a.x - b.x);

  /* A gauche, UNE seule coupure traverse les deux bandes d'un trait : elle est
     par construction alignee avec elle-meme. A droite, DEUX coupures a des
     abscisses differentes. */
  assert.strictEqual(coupures.length, 3, 'une coupure a gauche, deux a droite');
  const gauche = coupures[0];
  const droite = coupures.slice(1);
  assert.notStrictEqual(droite[0].x, droite[1].x,
    'les deux coupures de droite doivent etre DECALEES : c est ce qui montre la dependance');
  assert.ok(Math.abs(gauche.y2 - gauche.y1) > 100,
    'la coupure de gauche doit traverser les deux bandes d un seul trait');
});

test('1re-probas / independance : les proportions dessinees verifient le critere', () => {
  const rects = balises(PROBAS[2].svg, 'rect');
  assert.strictEqual(rects.length, 4, 'deux zones a gauche, deux a droite');

  // Carre de gauche : 150 de large, bandes de 72 et 48 de haut.
  const g = rects.slice(0, 2);
  const pA = 72 / 120;
  const pBA_g = attr(g[0], 'width') / 150;
  const pBAb_g = attr(g[1], 'width') / 150;
  assert.ok(Math.abs(pBA_g - pBAb_g) < 1e-9,
    'a gauche, P_A(B) et P_nonA(B) doivent etre EGALES : c est la definition de l independance');
  const pB_g = pA * pBA_g + (1 - pA) * pBAb_g;
  assert.ok(Math.abs(pA * pBA_g - pA * pB_g) < 1e-9,
    'a gauche, P(A inter B) doit valoir P(A) x P(B)');

  // Carre de droite : meme geometrie, coupures differentes.
  const d = rects.slice(2, 4);
  const pBA_d = attr(d[0], 'width') / 150;
  const pBAb_d = attr(d[1], 'width') / 150;
  assert.ok(Math.abs(pBA_d - pBAb_d) > 0.1,
    'a droite, P_A(B) et P_nonA(B) doivent DIFFERER nettement');
  const pB_d = pA * pBA_d + (1 - pA) * pBAb_d;
  assert.ok(Math.abs(pA * pBA_d - pA * pB_d) > 1e-3,
    'a droite, P(A inter B) doit differer de P(A) x P(B)');

  // Les deux carres ont la MEME taille : patron « comparaison ».
  assert.strictEqual(attr(g[0], 'height') + attr(g[1], 'height'),
    attr(d[0], 'height') + attr(d[1], 'height'), 'les deux carres ont la meme hauteur');
});

test('1re-probas : aucune couleur en dur dans les schemas', () => {
  for (const d of PROBAS) {
    assert.ok(!/(?:stroke|fill)="#/.test(d.svg),
      d.title + ' : une couleur est ecrite en dur au lieu d une variable du projet');
  }
});

/* =========================================================================
   VARIABLES ALEATOIRES ET LOI BINOMIALE (2026-09-14)

   DEUX schemas et non trois, deliberement : le chapitre porte deux
   malentendus qui meritent un dessin, et un troisieme schema n'aurait fait
   que redessiner la formule que le cours ecrit deja.

   Ce que ces tests gardent est ce que l'oeil ne peut PAS verifier : que les
   hauteurs des batons sont proportionnelles aux vraies probabilites de la loi
   annoncee, que le trait de l'esperance tombe bien ENTRE deux batons et non
   sur l'un d'eux, et que les six dispositions du second schema sont les six
   dispositions possibles, sans doublon ni oubli.
   ========================================================================= */

const VA = schemas('1re-variables-aleatoires');

function coefBinom(n, k) {
  let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return Math.round(r);
}

test('1re-variables-aleatoires : le chapitre porte ses deux schemas secondaires', () => {
  assert.strictEqual(VA.length, 2,
    'deux schemas, et non trois : voir le commentaire du fichier de donnees');
  for (const d of VA) {
    assert.ok(d.svg && d.svg.includes('<svg'), 'chaque schema porte une source SVG');
    assert.ok(d.caption && d.caption.trim(), 'chaque schema porte une legende');
    assert.ok(d.notes && d.notes.length >= 2, 'chaque schema porte ses notes');
    assert.ok(d.reading && d.reading.trim(), 'chaque schema porte sa lecture');
    const vb = viewBox(d.svg);
    assert.strictEqual(vb.x, 0, 'origine x du viewBox');
    assert.strictEqual(vb.y, 0, 'origine y du viewBox');
  }
});

test('1re-variables-aleatoires : aucun element ne sort de son viewBox', () => {
  for (const d of VA) {
    const vb = viewBox(d.svg);
    for (const r of balises(d.svg, 'rect')) {
      assert.ok(attr(r, 'x') >= -0.5, d.title + ' : rectangle deborde a gauche');
      assert.ok(attr(r, 'y') >= -0.5, d.title + ' : rectangle deborde en haut');
      assert.ok(attr(r, 'x') + attr(r, 'width') <= vb.w + 0.5, d.title + ' : rectangle deborde a droite');
      assert.ok(attr(r, 'y') + attr(r, 'height') <= vb.h + 0.5, d.title + ' : rectangle deborde en bas');
    }
    for (const l of balises(d.svg, 'line')) {
      for (const paire of [['x1', 'y1'], ['x2', 'y2']]) {
        const x = attr(l, paire[0]), y = attr(l, paire[1]);
        assert.ok(x >= -0.5 && x <= vb.w + 0.5, d.title + ' : x=' + x + ' hors cadre');
        assert.ok(y >= -0.5 && y <= vb.h + 0.5, d.title + ' : y=' + y + ' hors cadre');
      }
    }
  }
});

/* --- Schema 1 : les hauteurs sont les vraies probabilites --------------
   Loi B(10 ; 0,25). Un baton dessine « a peu pres a la bonne hauteur » serait
   invisible a la relecture et faux dans le livre : c'est precisement le genre
   d'erreur que seul le calcul attrape. */
test('1re-variables-aleatoires / batons : les hauteurs sont proportionnelles aux probabilites', () => {
  const n = 10, p = 0.25;
  const P = [];
  for (let k = 0; k <= n; k++) P.push(coefBinom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k));

  // Les onze probabilites somment bien a 1 : la loi dessinee est une vraie loi.
  const somme = P.reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(somme - 1) < 1e-12, 'les probabilites doivent sommer a 1, elles somment a ' + somme);

  // Batons dessines : k = 0 a 8 (au-dela, P < 0,0004, invisible a l'impression).
  const rects = balises(VA[0].svg, 'rect').sort((a, b) => attr(a, 'x') - attr(b, 'x'));
  assert.strictEqual(rects.length, 8, 'huit batons dessines, de k=0 a k=7 : au-dela ils seraient invisibles');

  const hauteurs = rects.map(r => attr(r, 'height'));
  const hmax = Math.max(...hauteurs);
  const pmax = Math.max(...P);

  hauteurs.forEach((h, k) => {
    const attendue = P[k] / pmax * hmax;
    assert.ok(Math.abs(h - attendue) < 0.6,
      'baton k=' + k + ' : hauteur ' + h + ' au lieu de ' + attendue.toFixed(2) +
      ' (P=' + P[k].toFixed(5) + ')');
  });

  // Les batons decroissent bien apres le mode, et croissent avant.
  const mode = hauteurs.indexOf(hmax);
  assert.strictEqual(mode, P.indexOf(pmax), 'le baton le plus haut doit etre celui de plus forte probabilite');
  assert.strictEqual(mode, 2, 'pour B(10 ; 0,25) le mode vaut 2');
});

test('1re-variables-aleatoires / batons : le trait de l esperance tombe ENTRE deux batons', () => {
  /* C'est TOUT le propos du schema : si le trait tombait sur un baton, la
     figure dirait le contraire de son texte. */
  const svg = VA[0].svg;
  const trait = balises(svg, 'line')
    .filter(l => classeDe(l) === 'guide-line')
    .filter(l => Math.abs(attr(l, 'x1') - attr(l, 'x2')) < 1e-9);
  assert.strictEqual(trait.length, 1, 'un seul trait vertical, celui de l esperance');
  const xE = attr(trait[0], 'x1');

  const rects = balises(svg, 'rect').sort((a, b) => attr(a, 'x') - attr(b, 'x'));
  const centres = rects.map(r => attr(r, 'x') + attr(r, 'width') / 2);

  // Le trait ne coincide avec AUCUN centre de baton.
  for (const c of centres) {
    assert.ok(Math.abs(xE - c) > 5,
      'le trait de E(X) tombe sur le baton centre en ' + c + ' : il doit tomber ENTRE deux batons');
  }

  // Et il tombe bien entre le baton k=2 et le baton k=3, puisque E(X) = 2,5.
  assert.ok(xE > centres[2] && xE < centres[3],
    'E(X) = 2,5 doit tomber entre le baton k=2 et le baton k=3');

  // Position exacte : a mi-chemin, puisque 2,5 est le milieu de 2 et 3.
  const milieu = (centres[2] + centres[3]) / 2;
  assert.ok(Math.abs(xE - milieu) < 0.5,
    'E(X) = 2,5 doit tomber a mi-chemin exactement, soit x=' + milieu.toFixed(1) + ', et non ' + xE);
});

/* --- Schema 2 : les six dispositions sont les six possibles ------------
   Une disposition repetee, ou une disposition manquante, rendrait le
   denombrement faux — et le texte affirme justement qu'il est complet. */
test('1re-variables-aleatoires / dispositions : six lignes, deux cases pleines chacune', () => {
  const rects = balises(VA[1].svg, 'rect');
  assert.strictEqual(rects.length, 12, 'six lignes de deux cases pleines, soit douze cases');

  // Regroupement par ligne : meme ordonnee.
  const parLigne = new Map();
  for (const r of rects) {
    const y = attr(r, 'y');
    const x = attr(r, 'x');
    // Les deux colonnes de vignettes ont des origines differentes.
    const colonne = x < 200 ? 'g' : 'd';
    const cle = colonne + ':' + y;
    if (!parLigne.has(cle)) parLigne.set(cle, []);
    parLigne.get(cle).push(x);
  }
  assert.strictEqual(parLigne.size, 6, 'six lignes distinctes');
  for (const [cle, xs] of parLigne) {
    assert.strictEqual(xs.length, 2, 'la ligne ' + cle + ' doit porter exactement deux cases pleines');
  }
});

test('1re-variables-aleatoires / dispositions : les six sont distinctes et epuisent les cas', () => {
  const rects = balises(VA[1].svg, 'rect');
  const COLS_G = [40, 70, 100, 130];
  const COLS_D = [220, 250, 280, 310];

  const parLigne = new Map();
  for (const r of rects) {
    const x = attr(r, 'x'), y = attr(r, 'y');
    const gauche = x < 200;
    const cols = gauche ? COLS_G : COLS_D;
    const pos = cols.indexOf(x) + 1;
    assert.ok(pos >= 1 && pos <= 4,
      'une case pleine est posee a x=' + x + ', qui ne correspond a aucune colonne du tableau');
    const cle = (gauche ? 'g' : 'd') + ':' + y;
    if (!parLigne.has(cle)) parLigne.set(cle, []);
    parLigne.get(cle).push(pos);
  }

  const dispositions = new Set();
  for (const [, pos] of parLigne) dispositions.add(pos.sort((a, b) => a - b).join('-'));

  assert.strictEqual(dispositions.size, 6,
    'les six dispositions doivent etre DISTINCTES, or il y en a ' + dispositions.size);

  /* Et ce sont bien les six possibles : C(4,2) = 6, et on les enumere. */
  const attendues = ['1-2', '1-3', '1-4', '2-3', '2-4', '3-4'];
  assert.deepStrictEqual([...dispositions].sort(), attendues,
    'les dispositions dessinees doivent epuiser les six cas possibles');
  assert.strictEqual(coefBinom(4, 2), 6, 'le coefficient binomial annonce vaut bien 6');
});

test('1re-variables-aleatoires : aucune couleur en dur dans les schemas', () => {
  for (const d of VA) {
    assert.ok(!/(?:stroke|fill)="#/.test(d.svg),
      d.title + ' : une couleur est ecrite en dur au lieu d une variable du projet');
  }
});
