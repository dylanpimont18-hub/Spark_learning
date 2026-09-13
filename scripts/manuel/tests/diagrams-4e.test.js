/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-4e.test.js
   Les SCHEMAS SECONDAIRES de la quatrieme (`cours.diagrams[]`), ajoutes le
   2026-09-13.

   POURQUOI CE FICHIER, distinct de figures-4e.test.js : celui-la couvre les
   figures d'EXERCICE produites par les helpers parametriques de
   js/data/figures-exercices.js. Ici il s'agit des figures de COURS, ecrites a
   la main en SVG dans les modules. Elles ne passent par aucun helper, donc
   aucun test ne les couvrait, et ce sont precisement celles qui affirment des
   proprietes geometriques (« ces deux triangles ont le meme angle », « ce
   triangle est rectangle », « M est a egale distance des trois sommets »).

   CE QU'ON VERIFIE, ET POURQUOI. Une figure de cours qui ment est pire que pas
   de figure : l'eleve mesure a la regle et lit l'inverse de ce que le texte
   affirme. Trois defauts de ce type ont ete trouves le 2026-09-13, tous
   invisibles a la relecture et tous par le calcul :

     1. la 3e vignette du schema « orientations » de Pythagore annoncait une
        hypotenuse horizontale mais dessinait le triangle rectangle a un AUTRE
        sommet — le trait fort designait un cote de l'angle droit, et le carre
        d'angle droit etait pose a 87 unites du vrai sommet rectangle ;
     2. un point annonce sur un cercle de rayon 70 tombait a 69,995 du centre,
        parce que le point rationnel avait ete arrondi a deux decimales : le
        produit scalaire valait alors 90,0082 degres et non 90 ;
     3. deux centres de cercles circonscrits avaient ete poses A VUE, si bien
        que le cercle ne passait par AUCUN des trois sommets.

   Ces tests gardent les correctifs. Ils lisent le SVG reellement present dans
   les modules : ils tombent si quelqu'un deplace un point sans refaire le
   calcul.

   TOLERANCE. Les coordonnees sont ecrites a 0,1 unite de viewBox pres au pire
   (la plupart sont entieres). Sur des longueurs de l'ordre de 60 a 120 unites,
   on verifie donc les angles a 0,05 degre et les longueurs a 0,05 unite —
   assez serre pour attraper les trois defauts ci-dessus, assez lache pour ne
   pas tester l'arrondi d'ecriture.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const { chargerModule } = require('../extract.js');

const TOL_ANGLE = 0.05;   // degres
const TOL_LONG = 0.05;    // unites de viewBox

function diagrammes(fichier) {
  const { module: mod } = chargerModule('js/data/4e/' + fichier, { tirages: 1 });
  return (mod.cours && mod.cours.diagrams) || [];
}
function parTitre(fichier, fragment) {
  const d = diagrammes(fichier).find(x => x.title.includes(fragment));
  assert.ok(d, 'schema introuvable : ' + fragment + ' dans ' + fichier);
  return d;
}
// Tous les polygones d'un SVG, en listes de points [x, y].
function polygones(svg) {
  return [...svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)]
    .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
}
function cercles(svg) {
  return [...svg.matchAll(/<circle[^>]*\bcx="([-\d.]+)"[^>]*\bcy="([-\d.]+)"[^>]*\br="([-\d.]+)"/g)]
    .map(m => ({ x: +m[1], y: +m[2], r: +m[3] }));
}
const dist = (A, B) => Math.hypot(A[0] - B[0], A[1] - B[1]);
// Angle en O dans le triangle (O, U, V), en degres, par le produit scalaire.
function angle(O, U, V) {
  const a = [U[0] - O[0], U[1] - O[1]], b = [V[0] - O[0], V[1] - O[1]];
  const c = (a[0] * b[0] + a[1] * b[1]) / (Math.hypot(...a) * Math.hypot(...b));
  return Math.acos(Math.min(1, Math.max(-1, c))) * 180 / Math.PI;
}
// Le plus grand angle d'un triangle, et le sommet ou il se trouve.
function angleMax(P) {
  const a = [angle(P[0], P[1], P[2]), angle(P[1], P[0], P[2]), angle(P[2], P[0], P[1])];
  const i = a.indexOf(Math.max(...a));
  return { valeur: a[i], sommet: i, angles: a };
}

test('Pythagore : les trois vignettes montrent le MEME triangle 3-4-5, rectangle', () => {
  const d = parTitre('4e-pythagore.js', 'orientation');
  const tris = polygones(d.svg);
  assert.strictEqual(tris.length, 3, 'trois vignettes attendues');
  for (const [i, P] of tris.entries()) {
    const m = angleMax(P);
    assert.ok(Math.abs(m.valeur - 90) < TOL_ANGLE,
      `vignette ${i + 1} : angle le plus grand ${m.valeur.toFixed(4)} degres, 90 attendu`);
    // Rapports 3-4-5 : cotes tries puis normalises par le plus petit.
    const L = [dist(P[0], P[1]), dist(P[1], P[2]), dist(P[2], P[0])].sort((a, b) => a - b);
    assert.ok(Math.abs(L[1] / L[0] - 4 / 3) < 1e-3 && Math.abs(L[2] / L[0] - 5 / 3) < 1e-3,
      `vignette ${i + 1} : rapports ${L.map(v => (v / L[0]).toFixed(4))}, 1 / 1,333 / 1,667 attendus`);
  }
  // MEME echelle : le texte affirme « les trois triangles sont le meme ».
  const tailles = tris.map(P => Math.max(dist(P[0], P[1]), dist(P[1], P[2]), dist(P[2], P[0])));
  for (const t of tailles) {
    assert.ok(Math.abs(t - tailles[0]) < TOL_LONG,
      `echelles differentes entre vignettes : ${tailles.map(v => v.toFixed(2))}`);
  }
});

test('cosinus : les deux triangles ont le meme angle et donc le meme cosinus', () => {
  const d = parTitre('4e-cosinus.js', 'taille du triangle');
  const tris = polygones(d.svg);
  assert.strictEqual(tris.length, 2);
  const cos = tris.map(P => {
    const m = angleMax(P);
    assert.ok(Math.abs(m.valeur - 90) < TOL_ANGLE, 'triangle non rectangle');
    const L = [dist(P[0], P[1]), dist(P[1], P[2]), dist(P[2], P[0])].sort((a, b) => a - b);
    return L[1] / L[2];   // adjacent sur hypotenuse
  });
  assert.ok(Math.abs(cos[0] - cos[1]) < 1e-6,
    `cosinus differents : ${cos.map(v => v.toFixed(6))} — la figure contredirait son titre`);
  assert.ok(Math.abs(cos[0] - 0.8) < 1e-6, `cosinus ${cos[0]}, 0,8 annonce par la figure`);
  // La TAILLE, elle, doit differer : sinon la figure ne montre rien.
  const t = tris.map(P => Math.max(dist(P[0], P[1]), dist(P[1], P[2]), dist(P[2], P[0])));
  assert.ok(Math.abs(t[0] - t[1]) > 10, 'les deux triangles doivent avoir des tailles visiblement differentes');
});

test('angle inscrit : les trois points A sont sur le cercle et voient le diametre a 90 degres', () => {
  const d = parTitre('4e-triangle-rectangle-cercle.js', 'Trois positions');
  const c = cercles(d.svg).find(x => x.r > 50);
  assert.ok(c, 'cercle porteur introuvable');
  const O = [c.x, c.y], B = [c.x - c.r, c.y], C = [c.x + c.r, c.y];
  /* Les sommets A sont les points milieux des chemins « B -> A -> C », donc de
     ceux qui PARTENT de B et ARRIVENT en C. Filtrer sur ces deux extremites est
     indispensable : les carres d'angle droit sont eux aussi des chemins a trois
     points, et une regex plus lache en ramassait six au lieu de trois. */
  const chemins = [...d.svg.matchAll(/d="M([\d.]+) ([\d.]+) L([\d.]+) ([\d.]+) L([\d.]+) ([\d.]+)"/g)]
    .filter(m => dist([+m[1], +m[2]], B) < TOL_LONG && dist([+m[5], +m[6]], C) < TOL_LONG)
    .map(m => [+m[3], +m[4]]);
  assert.strictEqual(chemins.length, 3, 'trois triangles inscrits attendus');
  for (const A of chemins) {
    assert.ok(Math.abs(dist(O, A) - c.r) < TOL_LONG,
      `A(${A}) a ${dist(O, A).toFixed(3)} du centre, rayon ${c.r}`);
    const a = angle(A, B, C);
    assert.ok(Math.abs(a - 90) < TOL_ANGLE, `angle en A = ${a.toFixed(4)} degres, 90 attendu`);
  }
});

test('mediane vers l hypotenuse : M est a egale distance des trois sommets', () => {
  const d = parTitre('4e-triangle-rectangle-cercle.js', 'moitié de l\'hypoténuse');
  const P = polygones(d.svg)[0];
  const m = angleMax(P);
  assert.ok(Math.abs(m.valeur - 90) < TOL_ANGLE, `triangle non rectangle : ${m.valeur.toFixed(4)}`);
  // Le milieu de l'hypotenuse : les deux sommets qui ne portent PAS l'angle droit.
  const autres = [0, 1, 2].filter(i => i !== m.sommet).map(i => P[i]);
  const M = [(autres[0][0] + autres[1][0]) / 2, (autres[0][1] + autres[1][1]) / 2];
  const d0 = dist(M, P[0]), d1 = dist(M, P[1]), d2 = dist(M, P[2]);
  assert.ok(Math.abs(d0 - d1) < TOL_LONG && Math.abs(d1 - d2) < TOL_LONG,
    `MA=${d0.toFixed(4)} MB=${d1.toFixed(4)} MC=${d2.toFixed(4)} : la figure affirme qu'ils sont egaux`);
});

test('droites remarquables : le centre de gravite est aux deux tiers, et aligne', () => {
  const d = parTitre('4e-droites-remarquables.js', 'deux tiers');
  const P = polygones(d.svg)[0];
  // G annonce par la figure : le point trace (plot-point) sur la mediane.
  const g = cercles(d.svg).find(x => x.r === 5);
  assert.ok(g, 'point G introuvable');
  const G = [g.x, g.y];
  const Gvrai = [(P[0][0] + P[1][0] + P[2][0]) / 3, (P[0][1] + P[1][1] + P[2][1]) / 3];
  assert.ok(dist(G, Gvrai) < TOL_LONG,
    `G dessine en ${G}, centre de gravite reel ${Gvrai.map(v => v.toFixed(2))}`);
  // AG = 2 GM, avec M milieu du cote oppose au sommet de depart de la mediane.
  const A = P[0], M = [(P[1][0] + P[2][0]) / 2, (P[1][1] + P[2][1]) / 2];
  assert.ok(Math.abs(dist(A, G) / dist(G, M) - 2) < 1e-3,
    `AG/GM = ${(dist(A, G) / dist(G, M)).toFixed(6)}, 2 attendu`);
  const cross = (G[0] - A[0]) * (M[1] - A[1]) - (G[1] - A[1]) * (M[0] - A[0]);
  assert.ok(Math.abs(cross) < 1e-6, `A, G et M non alignes (produit vectoriel ${cross})`);
});

test('cercle circonscrit : le centre dessine est equidistant des trois sommets', () => {
  const d = parTitre('4e-droites-remarquables.js', 'sortir du triangle');
  const tris = polygones(d.svg);
  const cs = cercles(d.svg).filter(x => x.r > 20);
  assert.strictEqual(tris.length, 2, 'deux triangles attendus');
  assert.strictEqual(cs.length, 2, 'deux cercles circonscrits attendus');
  tris.forEach((P, i) => {
    const O = [cs[i].x, cs[i].y];
    for (const S of P) {
      assert.ok(Math.abs(dist(O, S) - cs[i].r) < 0.1,
        `figure ${i + 1} : sommet a ${dist(O, S).toFixed(3)} du centre, rayon ${cs[i].r}`);
    }
  });
  // Le premier est aigu, le second franchement obtus : c'est tout le propos.
  assert.ok(angleMax(tris[0]).valeur < 89, 'le premier triangle doit etre acutangle');
  assert.ok(angleMax(tris[1]).valeur > 100,
    `le second doit etre FRANCHEMENT obtus (mesure ${angleMax(tris[1]).valeur.toFixed(1)}) : ` +
    'a 90,8 degres la sortie du centre ne se voit pas');
});

test('translations : les fleches d une meme figure sont rigoureusement egales', () => {
  const d = parTitre('4e-translations.js', 'n\'importe où');
  const traits = [...d.svg.matchAll(
    /<line class="curve-main" x1="([-\d.]+)" y1="([-\d.]+)" x2="([-\d.]+)" y2="([-\d.]+)"/g)]
    .map(m => [+m[3] - +m[1], +m[4] - +m[2]]);
  assert.strictEqual(traits.length, 3, 'trois fleches attendues');
  for (const v of traits) {
    assert.deepStrictEqual(v, traits[0],
      `vecteurs differents ${JSON.stringify(traits)} : la figure affirme qu'ils sont egaux`);
  }
});

test('translations : la figure et son image se deduisent du MEME vecteur', () => {
  const d = parTitre('4e-translations.js', 'sans se déformer');
  const [T1, T2] = polygones(d.svg);
  const v = [T2[0][0] - T1[0][0], T2[0][1] - T1[0][1]];
  T1.forEach((S, i) => {
    assert.deepStrictEqual([T2[i][0] - S[0], T2[i][1] - S[1]], v,
      'un sommet ne suit pas le meme vecteur : ce ne serait pas une translation');
  });
  // Isometrie : les longueurs sont conservees.
  for (let i = 0; i < 3; i++) {
    const a = dist(T1[i], T1[(i + 1) % 3]), b = dist(T2[i], T2[(i + 1) % 3]);
    assert.ok(Math.abs(a - b) < 1e-9, `cote ${i} : ${a} puis ${b}`);
  }
});

test('volumes : hauteur et generatrice forment un triangle rectangle 6-8-10', () => {
  const d = parTitre('4e-volumes.js', 'côté du cône');
  const P = polygones(d.svg)[0];
  const L = [dist(P[0], P[1]), dist(P[1], P[2]), dist(P[2], P[0])].sort((a, b) => a - b);
  // Le cone est isocele : sa coupe porte deux generatrices egales. On verifie
  // le triangle rectangle « demi-coupe » : rayon (moitie de la base), hauteur.
  const base = Math.max(...L);
  const rayon = base / 2;
  const sommet = P.find(S => S[1] === Math.min(...P.map(q => q[1])));
  const hauteur = Math.max(...P.map(q => q[1])) - sommet[1];
  const gen = Math.hypot(rayon, hauteur);
  assert.ok(Math.abs(rayon / (hauteur / 8 * 6) - 1) < 5e-3,
    `rayon ${rayon} et hauteur ${hauteur} ne sont pas dans le rapport 6/8`);
  assert.ok(Math.abs(gen / (hauteur / 8 * 10) - 1) < 5e-3,
    `generatrice ${gen.toFixed(2)} hors du rapport 10/8 attendu`);
});

test('probabilites : les disques annonces incompatibles sont VRAIMENT disjoints', () => {
  const d = parTitre('4e-probabilites.js', 'Incompatibles');
  const cs = cercles(d.svg).filter(x => x.r > 20);
  assert.strictEqual(cs.length, 4, 'quatre disques attendus (deux paires)');
  const ecart = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) - (a.r + b.r);
  assert.ok(ecart(cs[0], cs[1]) > 0,
    'la paire « incompatibles » se recouvre alors que la figure dit le contraire');
  assert.ok(ecart(cs[2], cs[3]) < 0,
    'la paire « compatibles » ne se recouvre pas alors que la figure l\'affirme');
});

test('probabilites : les deux disques du recouvrement se coupent bien', () => {
  const d = parTitre('4e-probabilites.js', 'comptés deux fois');
  const cs = cercles(d.svg).filter(x => x.r > 20);
  assert.strictEqual(cs.length, 2);
  const dd = Math.hypot(cs[0].x - cs[1].x, cs[0].y - cs[1].y);
  assert.ok(dd < cs[0].r + cs[1].r, 'les deux disques doivent se recouvrir');
  assert.ok(dd > Math.abs(cs[0].r - cs[1].r), 'aucun disque ne doit contenir l\'autre');
});

test('tous les schemas de 4e portent les rubriques attendues', () => {
  const fichiers = require('fs').readdirSync(require('path').join(require('../extract.js').RACINE, 'js/data/4e'))
    .filter(f => f.endsWith('.js') && f !== 'index.js');
  let total = 0;
  for (const f of fichiers) {
    for (const d of diagrammes(f)) {
      total++;
      for (const cle of ['theme', 'kicker', 'title', 'description', 'svg', 'reading', 'caption']) {
        assert.ok(String(d[cle] || '').trim(), `${f} : schema « ${d.title} » sans « ${cle} »`);
      }
      assert.ok(Array.isArray(d.notes) && d.notes.length >= 2,
        `${f} : schema « ${d.title} » doit porter au moins deux notes`);
      // Le viewBox est obligatoire : sans lui, la boite TikZ est indeterminee.
      assert.match(d.svg, /viewBox="[-\d.\s]+"/, `${f} : schema « ${d.title} » sans viewBox`);
      // Une figure muette pour le lecteur d'ecran n'est pas acceptable.
      assert.match(d.svg, /<desc\b/, `${f} : schema « ${d.title} » sans <desc>`);
    }
  }
  assert.strictEqual(total, 35, 'la quatrieme porte 35 schemas secondaires');
});
