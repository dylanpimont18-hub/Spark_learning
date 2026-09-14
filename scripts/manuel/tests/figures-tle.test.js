/* =========================================================
   Spark Learning – scripts/manuel/tests/figures-tle.test.js

   Garde les FIGURES D'EXERCICE de la terminale (2026-09-14), par le CALCUL.

   Trois helpers seulement ont ete ajoutes pour ce niveau, et c'est voulu : la
   terminale est majoritairement analytique, et le cahier des charges interdit
   d'ajouter des figures pour faire du chiffre. Les trois sont donc ceux des
   deux chapitres d'espace et de l'integration.

   CE QUE CE FICHIER VERIFIE, et que rien d'autre ne verifie :

     - la PERSPECTIVE CAVALIERE conserve le parallelisme. C'est l'exigence
       propre au niveau : une figure d'espace ou deux aretes paralleles
       cessent de l'etre sur le dessin est inutilisable, et personne ne s'en
       apercoit a la relecture. On verifie les NEUF paires d'aretes
       paralleles du pave, par determinant nul sur les vecteurs projetes ;

     - les SOMMETS sont coherents entre eux : le pave projete forme bien trois
       familles de quatre aretes paralleles et de meme longueur projetee ;

     - l'ANGLE DROIT du projete orthogonal est code par un CARRE dont les deux
       cotes suivent reellement les deux directions concernees ;

     - l'AIRE HACHUREE vaut bien l'integrale de la fonction annoncee, par
       integration numerique sur le polygone REELLEMENT dessine ;

     - aucun element ne sort du viewBox — un debordement s'imprime par-dessus
       le texte voisin sans le moindre avertissement de LaTeX, et douze des
       quatre-vingt-neuf figures d'exercice d'un tirage anterieur debordaient
       ainsi, jusqu'a 3,9 mm.

   PROTECTION CONTRE LA COLLISION DE NOMS (exigence E13). Un test verifie que
   les trois helpers du niveau portent bien le prefixe `figureTle` et
   n'entrent en collision avec aucune declaration anterieure du fichier. Lors
   de la vague 3e/2nde, deux sessions ont declare chacune une `figureThales`
   aux signatures incompatibles : git n'a rien vu, et en JavaScript la
   derniere declaration gagne — les quatre figures de Thales de la troisieme
   seraient sorties vides en production.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RACINE = path.resolve(__dirname, '..', '..', '..');
const SOURCE = fs.readFileSync(path.join(RACINE, 'js/data/figures-exercices.js'), 'utf8');

/* Le fichier est un script GLOBAL : il n'exporte rien et s'appuie sur les
   const de haut niveau de helpers.js (fr, pick, rand). On recree donc le meme
   contexte que scripts/manuel/extract.js. */
const BAC = { window: { MODULES: [] }, console, Math };
vm.createContext(BAC);
vm.runInContext(
  fs.readFileSync(path.join(RACINE, 'js/data/helpers.js'), 'utf8') + '\n' + SOURCE,
  BAC, { filename: 'js/data/figures-exercices.js' });

const HELPERS_TLE = ['figureTlePaveRepere', 'figureTleDistancePlan', 'figureTleAireSousCourbe'];

/* --- Lecture des primitives du SVG ------------------------------------- */

function balises(svg, nom) {
  const out = [];
  const re = new RegExp('<' + nom + '\\b[^>]*>', 'g');
  let m;
  while ((m = re.exec(svg))) out.push(m[0]);
  return out;
}
function attrNum(tag, nom) {
  const m = tag.match(new RegExp('\\b' + nom + '="([^"]*)"'));
  return m ? parseFloat(m[1]) : null;
}
function points(tag) {
  const m = tag.match(/\bpoints="([^"]*)"/);
  if (!m) return [];
  return m[1].trim().split(/\s+/).map((p) => p.split(',').map(Number));
}
function viewBox(svg) {
  const m = svg.match(/viewBox="([^"]*)"/);
  assert.ok(m, 'la figure declare un viewBox');
  const [x, y, w, h] = m[1].trim().split(/\s+/).map(Number);
  return { x, y, w, h };
}
/* Segments traces, sous forme de vecteurs du plan. */
function segments(svg, classe) {
  return balises(svg, 'line')
    .filter((t) => !classe || t.includes('class="' + classe + '"'))
    .map((t) => ({
      a: [attrNum(t, 'x1'), attrNum(t, 'y1')],
      b: [attrNum(t, 'x2'), attrNum(t, 'y2')]
    }));
}
const vect = (s) => [s.b[0] - s.a[0], s.b[1] - s.a[1]];
const det = (u, v) => u[0] * v[1] - u[1] * v[0];
const longueur = (u) => Math.hypot(u[0], u[1]);

/* --- E13 : pas de collision de noms ------------------------------------ */

test('les helpers de terminale portent le prefixe de niveau', () => {
  for (const n of HELPERS_TLE) {
    assert.match(n, /^figureTle/, n + ' ne porte pas le prefixe de niveau');
    assert.strictEqual(typeof BAC[n], 'function', n + ' n est pas declare');
  }
});

test('aucun nom de helper n est declare deux fois dans le fichier', () => {
  /* LE test qui aurait attrape la collision figureThales de la vague
     3e/2nde. En JavaScript la derniere declaration gagne, silencieusement :
     les figures de la premiere session seraient sorties vides en production,
     sans erreur de compilation ni conflit git. */
  const noms = [];
  const re = /^function\s+([A-Za-z0-9_]+)\s*\(/gm;
  let m;
  while ((m = re.exec(SOURCE))) noms.push(m[1]);
  const vus = new Set(), doubles = [];
  for (const n of noms) {
    if (vus.has(n)) doubles.push(n);
    vus.add(n);
  }
  assert.deepStrictEqual(doubles, [],
    'fonction(s) declaree(s) deux fois, la seconde ecrase la premiere en ' +
    'silence : ' + doubles.join(', '));
});

/* --- Garde-fous communs aux trois helpers ------------------------------ */

const ECHANTILLONS = [
  ['figureTlePaveRepere', [6, 4, 3, { unite: 'cm' }]],
  ['figureTlePaveRepere', [12, 3, 8, { unite: 'm' }]],
  ['figureTlePaveRepere', [4, 4, 4, {}]],
  ['figureTleDistancePlan', [1.6, 1.2, 2.5, {}]],
  ['figureTleDistancePlan', [2.4, 0.8, 1.2, {}]],
  ['figureTleAireSousCourbe', [1, 1, 3, {}]],
  ['figureTleAireSousCourbe', [2, 0, 4, {}]],
  ['figureTleAireSousCourbe', [0.5, 2, 5, {}]]
];

test('aucun element ne sort du viewBox', () => {
  const M = 2;
  for (const [nom, args] of ECHANTILLONS) {
    const svg = BAC[nom].apply(null, args);
    assert.ok(svg && svg.includes('<svg'), nom + ' n a rien produit pour ' + JSON.stringify(args));
    const vb = viewBox(svg);
    assert.strictEqual(vb.x, 0, nom + ' : origine x du viewBox');
    assert.strictEqual(vb.y, 0, nom + ' : origine y du viewBox');
    const dedans = (x, y, quoi) => {
      assert.ok(x >= -M && x <= vb.w + M,
        nom + ' ' + JSON.stringify(args) + ' : ' + quoi + ' x=' + x + ' hors de [0 ; ' + vb.w + ']');
      assert.ok(y >= -M && y <= vb.h + M,
        nom + ' ' + JSON.stringify(args) + ' : ' + quoi + ' y=' + y + ' hors de [0 ; ' + vb.h + ']');
    };
    for (const t of balises(svg, 'line')) {
      dedans(attrNum(t, 'x1'), attrNum(t, 'y1'), 'line');
      dedans(attrNum(t, 'x2'), attrNum(t, 'y2'), 'line');
    }
    for (const t of balises(svg, 'circle')) dedans(attrNum(t, 'cx'), attrNum(t, 'cy'), 'circle');
    for (const n of ['polygon', 'polyline']) {
      for (const t of balises(svg, n)) for (const [x, y] of points(t)) dedans(x, y, n);
    }
  }
});

test('une seule pointe de fleche par trait', () => {
  for (const [nom, args] of ECHANTILLONS) {
    const svg = BAC[nom].apply(null, args);
    for (const n of ['line', 'polyline', 'path']) {
      for (const t of balises(svg, n)) {
        assert.ok(!(/marker-start=/.test(t) && /marker-end=/.test(t)),
          nom + ' : deux pointes sur un meme trait');
      }
    }
  }
});

/* --- Perspective cavaliere : LA verification propre au niveau ----------- */

test('le pave conserve le parallelisme apres projection', () => {
  /* Les douze aretes du pave se rangent en TROIS familles de quatre aretes
     parallelles dans l'espace. Apres projection, chaque famille doit rester
     une famille de quatre vecteurs COLINEAIRES et de MEME LONGUEUR — une
     projection affine le garantit, mais une seule coordonnee tapee a la main
     suffirait a casser la propriete sans que rien ne le signale. */
  for (const args of [[6, 4, 3, {}], [12, 3, 8, {}], [4, 4, 4, {}]]) {
    const svg = BAC.figureTlePaveRepere.apply(null, args);
    const tous = segments(svg, 'frame-line').concat(segments(svg, 'guide-line'))
      .map(vect).filter((u) => longueur(u) > 0.5);
    assert.strictEqual(tous.length, 12,
      'douze aretes attendues pour ' + JSON.stringify(args) + ', obtenu ' + tous.length);

    // Regroupement par direction (colinearite au flottant pres).
    const familles = [];
    for (const u of tous) {
      const f = familles.find((g) => Math.abs(det(g[0], u)) < 1e-6);
      if (f) f.push(u); else familles.push([u]);
    }
    assert.strictEqual(familles.length, 3,
      'trois familles de directions attendues, obtenu ' + familles.length +
      ' — le parallelisme n est pas conserve');
    for (const f of familles) {
      assert.strictEqual(f.length, 4, 'quatre aretes par famille, obtenu ' + f.length);
      const L0 = longueur(f[0]);
      for (const u of f) {
        /* 0,05 unite de viewBox : c'est l'arrondi a deux decimales de nb2()
           sur les deux extremites, pas une approximation du dessin. La
           COLINEARITE, elle, reste exigee au flottant pres — mesure sur cinq
           paves : determinant 0,000000 a chaque fois, la projection affine la
           garantit reellement. */
        assert.ok(Math.abs(longueur(u) - L0) < 0.05,
          'aretes paralleles de longueurs projetees differentes : ' +
          longueur(u).toFixed(4) + ' contre ' + L0.toFixed(4));
        assert.ok(Math.abs(det(f[0], u)) < 1e-6, 'aretes non colineaires apres projection');
      }
    }
  }
});

test('les trois dimensions du pave sont a la meme echelle', () => {
  /* Deux echelles differentes etireraient le solide et feraient mentir la
     forme : un cube 4x4x4 doit sortir avec ses trois familles d'aretes de
     longueurs projetees dans le rapport 1 : 1 : k, ou k est le SEUL
     coefficient de reduction de la fuyante. */
  const svg = BAC.figureTlePaveRepere(4, 4, 4, {});
  const tous = segments(svg, 'frame-line').concat(segments(svg, 'guide-line'))
    .map(vect).filter((u) => longueur(u) > 0.5);
  const familles = [];
  for (const u of tous) {
    const f = familles.find((g) => Math.abs(det(g[0], u)) < 1e-6);
    if (f) f.push(u); else familles.push([u]);
  }
  const L = familles.map((f) => longueur(f[0])).sort((a, b) => a - b);
  /* TOLERANCE : les coordonnees sont arrondies a deux decimales par nb2()
     avant d'etre ecrites dans le SVG — c'est voulu, un « 83.33333333333333 »
     alourdirait le TikZ autant que le SVG. L'ecart residuel est donc de
     l'ordre de 0,01 unite de viewBox sur des longueurs d'une centaine
     d'unites, soit 1e-4 en relatif. Un seuil a 1e-6 refusait une figure
     PARFAITEMENT juste (mesure : 0,499929 au lieu de 0,5) : c'est le test
     qui etait faux, pas la figure. */
  assert.ok(Math.abs(L[1] - L[2]) < 0.05,
    'sur un cube, les aretes x et z doivent avoir la meme longueur projetee : ' + L.join(', '));
  assert.ok(Math.abs(L[0] / L[2] - 0.5) < 1e-3,
    'coefficient de reduction de la fuyante attendu 0,5, obtenu ' + (L[0] / L[2]).toFixed(6));
});

test('la distance point-plan code un angle droit par un carre', () => {
  for (const args of [[1.6, 1.2, 2.5, {}], [2.4, 0.8, 1.2, {}]]) {
    const svg = BAC.figureTleDistancePlan.apply(null, args);
    // Le segment [MH] est le seul trait en teinte forte.
    const mh = segments(svg, 'curve-main');
    assert.strictEqual(mh.length, 1, 'un seul segment de distance');
    // Il est VERTICAL sur le dessin : la cote est le seul axe non fuyant.
    assert.ok(Math.abs(mh[0].a[0] - mh[0].b[0]) < 1e-6,
      'le segment [MH] doit etre vertical sur le dessin');

    // Le carre de l'angle droit : une polyline de trois points.
    const carres = balises(svg, 'polyline').map(points).filter((p) => p.length === 3);
    assert.strictEqual(carres.length, 1, 'un carre d angle droit');
    const [p1, p2, p3] = carres[0];
    const u = [p2[0] - p1[0], p2[1] - p1[1]];
    const v = [p3[0] - p2[0], p3[1] - p2[1]];
    // Les deux cotes du carre ont la meme longueur, et le second suit la
    // direction du segment [MH] : c'est ce qui rend le codage honnete.
    assert.ok(Math.abs(longueur(u) - longueur(v)) < 0.5,
      'les deux cotes du carre doivent avoir la meme longueur : ' +
      longueur(u).toFixed(3) + ' contre ' + longueur(v).toFixed(3));
    /* Le carre est trace q1 -> q2 -> q3 en partant du cote horizontal : c'est
       donc son PREMIER cote qui suit [MH] et le second qui suit l'axe des x,
       ou l'inverse selon l'ordre de construction. On exige seulement que
       l'UN des deux suive [MH] et que les deux soient perpendiculaires entre
       eux — c'est cela qui fait du codage un angle droit honnete, et non
       l'ordre des points. */
    const dirMH = vect(mh[0]);
    const suitMH = Math.abs(det(u, dirMH)) < 1e-6 || Math.abs(det(v, dirMH)) < 1e-6;
    assert.ok(suitMH, 'un cote du carre doit suivre la direction de [MH]');
    const perpendiculaires = Math.abs(u[0] * v[0] + u[1] * v[1]) < 0.6;
    assert.ok(perpendiculaires,
      'les deux cotes du carre doivent etre perpendiculaires : produit scalaire ' +
      (u[0] * v[0] + u[1] * v[1]).toFixed(4));

    // La figure ne divulgue pas la reponse : un point d'interrogation, pas
    // la valeur de la distance.
    assert.ok(svg.includes('>?<'), 'la longueur cherchee doit porter un point d interrogation');
    assert.ok(!svg.includes('>' + args[2] + '<'),
      'la figure ne doit pas ecrire la valeur de la distance cherchee');
  }
});

test('l aire hachuree vaut l integrale de la fonction annoncee', () => {
  /* LA verification propre au chapitre d'integration. On integre
     numeriquement le polygone REELLEMENT dessine, apres retour aux unites du
     repere, et on compare a l'integrale exacte de a x^2 + b sur [0 ; borne],
     qui vaut a*borne^3/3 + b*borne. */
  for (const [a, b, borne] of [[1, 1, 3], [2, 0, 4], [0.5, 2, 5]]) {
    const svg = BAC.figureTleAireSousCourbe(a, b, borne, {});
    const poly = balises(svg, 'polygon').map(points)[0];
    assert.ok(poly && poly.length > 40, 'la courbe est echantillonnee finement');

    // Echelle relue sur le DESSIN : l'axe des abscisses et l'axe des
    // ordonnees donnent l'origine, la graduation de la borne donne le pas.
    const axes = segments(svg, 'axis');
    assert.strictEqual(axes.length, 2, 'deux axes');
    const horizontal = axes.find((s) => Math.abs(s.a[1] - s.b[1]) < 1e-6);
    const vertical = axes.find((s) => Math.abs(s.a[0] - s.b[0]) < 1e-6);
    assert.ok(horizontal && vertical, 'un axe horizontal et un axe vertical');
    const y0 = horizontal.a[1], x0 = vertical.a[0];

    // Le bord droit du polygone donne l'abscisse de la borne, donc l'echelle.
    const xDroite = Math.max.apply(null, poly.map((p) => p[0]));
    const e = (xDroite - x0) / borne;
    assert.ok(e > 1, 'echelle plausible');

    // Integration par trapezes sur la partie « courbe » du polygone.
    let aire = 0;
    for (let i = 1; i < poly.length; i++) {
      const [X0, Y0] = poly[i - 1], [X1, Y1] = poly[i];
      if (Math.abs(X1 - X0) < 1e-9) continue;                 // bords verticaux
      aire += (X1 - X0) * ((y0 - Y0) + (y0 - Y1)) / 2;
    }
    aire = aire / (e * e);                                    // retour aux unites du repere

    const exact = a * Math.pow(borne, 3) / 3 + b * borne;
    assert.ok(Math.abs(aire - exact) / exact < 0.002,
      'aire dessinee ' + aire.toFixed(4) + ' contre integrale exacte ' + exact.toFixed(4) +
      ' pour a=' + a + ' b=' + b + ' borne=' + borne);

    // La figure ne divulgue pas la reponse.
    assert.ok(svg.includes('aire ?'), 'l aire cherchee doit porter un point d interrogation');
  }
});

test('la courbe dessinee est bien la parabole annoncee', () => {
  /* Une courbe « qui ressemble a une parabole » ne suffit pas : on verifie
     point par point que l'ordonnee dessinee est bien a x^2 + b a l'echelle
     du dessin. */
  for (const [a, b, borne] of [[1, 1, 3], [0.5, 2, 5]]) {
    const svg = BAC.figureTleAireSousCourbe(a, b, borne, {});
    const courbe = balises(svg, 'polyline').map(points).find((p) => p.length > 40);
    assert.ok(courbe, 'la courbe est tracee comme une polyline echantillonnee');
    const axes = segments(svg, 'axis');
    const y0 = axes.find((s) => Math.abs(s.a[1] - s.b[1]) < 1e-6).a[1];
    const x0 = axes.find((s) => Math.abs(s.a[0] - s.b[0]) < 1e-6).a[0];
    const xDroite = Math.max.apply(null, courbe.map((p) => p[0]));
    const e = (xDroite - x0) / borne;
    let pire = 0;
    for (const [X, Y] of courbe) {
      const x = (X - x0) / e;
      const attendu = y0 - (a * x * x + b) * e;
      pire = Math.max(pire, Math.abs(Y - attendu));
    }
    assert.ok(pire < 0.05,
      'ecart maximal a la vraie parabole : ' + pire.toFixed(4) + ' unites de viewBox');
  }
});
