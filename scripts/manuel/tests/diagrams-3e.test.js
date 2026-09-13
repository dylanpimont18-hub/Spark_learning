/* =========================================================
   Spark Learning – scripts/manuel/tests/diagrams-3e.test.js
   Les SCHÉMAS SECONDAIRES de la troisième (`cours.diagrams[]`), ajoutés le
   2026-09-13.

   POURQUOI CE FICHIER, distinct de figures-3e.test.js : celui-là couvre les
   figures d'EXERCICE produites par les helpers paramétriques de
   js/data/figures-exercices.js. Ici il s'agit des figures de COURS, écrites à
   la main en SVG dans les modules. Elles ne passent par aucun helper, donc
   aucun test ne les couvrait, et ce sont précisément celles qui AFFIRMENT des
   propriétés géométriques — « ces deux droites sont parallèles », « ce rapport
   vaut 2 », « ces deux configurations sont la même ».

   CE QU'ON VÉRIFIE, ET POURQUOI. Une figure de cours qui ment est pire que pas
   de figure : l'élève mesure à la règle et lit l'inverse de ce que le texte
   affirme. Sur les trois ouvrages précédents, vingt et une erreurs de ce type
   ont été trouvées, TOUTES par le calcul et AUCUNE à la relecture.

   La troisième ajoute une difficulté propre : le parallélisme. Un écart de
   deux degrés entre deux droites annoncées parallèles se relit sans broncher,
   alors qu'il rend la figure fausse — et c'est la figure qui illustre le
   théorème de Thalès. C'est donc la première chose testée ici.

   TOLÉRANCE. Les coordonnées des schémas de cours sont écrites à la main, au
   centième d'unité de viewBox. Sur des longueurs de l'ordre de 40 à 100
   unités, on vérifie le parallélisme à 5e-4 en sinus (soit 0,03 degré) : assez
   serré pour attraper toute droite posée à vue, assez lâche pour ne pas tester
   l'arrondi d'écriture.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const { chargerModule } = require('../extract.js');

const TOL_PARALLELE = 5e-4;   // sinus de l'écart angulaire, soit 0,03 degré
const TOL_RAPPORT = 5e-3;

function diagrammes(fichier) {
  const { module: mod } = chargerModule('js/data/3e/' + fichier, { tirages: 1 });
  return (mod.cours && mod.cours.diagrams) || [];
}
function parTitre(fichier, fragment) {
  const d = diagrammes(fichier).find(x => x.title.includes(fragment));
  assert.ok(d, 'schéma introuvable : « ' + fragment + ' » dans ' + fichier);
  return d;
}

// Toutes les <line> d'un SVG, avec leur classe.
function lignes(svg) {
  return [...svg.matchAll(/<line[^>]*class="([^"]+)"[^>]*x1="([-\d.]+)"[^>]*y1="([-\d.]+)"[^>]*x2="([-\d.]+)"[^>]*y2="([-\d.]+)"/g)]
    .map(m => ({ cls: m[1], a: [+m[2], +m[3]], b: [+m[4], +m[5]] }));
}
function cercles(svg) {
  return [...svg.matchAll(/<circle[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"/g)]
    .map(m => [+m[1], +m[2]]);
}
const vect = (A, B) => [B[0] - A[0], B[1] - A[1]];
const croix = (u, v) => u[0] * v[1] - u[1] * v[0];
const scal = (u, v) => u[0] * v[0] + u[1] * v[1];
const norme = (u) => Math.hypot(u[0], u[1]);
// Sinus de l'écart angulaire : nul si et seulement si les vecteurs sont
// colinéaires. Indépendant de toute échelle, donc c'est LE test de
// parallélisme.
const ecartParallele = (u, v) => Math.abs(croix(u, v)) / (norme(u) * norme(v));
const longueur = (l) => norme(vect(l.a, l.b));

/* --- Thalès : « Le papillon est une configuration de Thalès » ---------- */
test('Thalès, schéma du papillon : les quatre droites fortes sont parallèles deux à deux', () => {
  const d = parTitre('3e-thales.js', 'papillon');
  const fortes = lignes(d.svg).filter(l => l.cls === 'curve-main');
  assert.strictEqual(fortes.length, 4,
    'quatre segments forts attendus : deux parallèles à gauche, deux à droite');

  // Gauche : configuration emboîtée, les deux premiers segments forts.
  const eg = ecartParallele(vect(fortes[0].a, fortes[0].b), vect(fortes[1].a, fortes[1].b));
  assert.ok(eg < TOL_PARALLELE,
    'configuration emboîtée : écart au parallélisme ' + eg.toExponential(2) +
    ' (sinus). Une figure de Thalès dont les droites ne sont pas parallèles ' +
    'contredit le théorème qu\'elle illustre.');

  // Droite : papillon, les deux derniers.
  const ed = ecartParallele(vect(fortes[2].a, fortes[2].b), vect(fortes[3].a, fortes[3].b));
  assert.ok(ed < TOL_PARALLELE,
    'configuration en papillon : écart au parallélisme ' + ed.toExponential(2) + ' (sinus)');
});

test('Thalès, schéma du papillon : le rapport dessiné vaut 2 à gauche et 1,6 à droite', () => {
  /* Le texte du schéma n'annonce pas ces rapports explicitement, mais les
     notes affirment que « l'égalité s'écrit et se calcule à l'identique dans
     les deux cas ». Un dessin dont les deux parallèles ne seraient pas dans un
     rapport constant rendrait cette phrase fausse. */
  const d = parTitre('3e-thales.js', 'papillon');
  const f = lignes(d.svg).filter(l => l.cls === 'curve-main');
  const kg = longueur(f[1]) / longueur(f[0]);
  const kd = longueur(f[3]) / longueur(f[2]);
  assert.ok(Math.abs(kg - 2) < TOL_RAPPORT,
    'emboîtée : rapport dessiné ' + kg.toFixed(5) + ', 2 attendu');
  assert.ok(Math.abs(kd - 1.6) < TOL_RAPPORT,
    'papillon : rapport dessiné ' + kd.toFixed(5) + ', 1,6 attendu');
});

test('Thalès, schéma du papillon : à droite, O est réellement ENTRE les deux parallèles', () => {
  /* C'est TOUTE la différence entre les deux dessins, et la raison d'être du
     schéma. Si O se retrouvait du même côté des deux parallèles, la figure de
     droite serait une seconde configuration emboîtée et le schéma ne montrerait
     plus rien. */
  const d = parTitre('3e-thales.js', 'papillon');
  const pts = cercles(d.svg);
  // Cinq cercles par configuration, dans l'ordre O, A, B, M, N.
  assert.strictEqual(pts.length, 10, 'dix points attendus (cinq par configuration)');

  const [Og, Ag, , Mg] = pts.slice(0, 5);
  const [Od, Ad, , Md] = pts.slice(5);

  const psG = scal(vect(Og, Ag), vect(Og, Mg));
  assert.ok(psG > 0,
    'configuration emboîtée : A et M doivent être du MÊME côté de O ' +
    '(produit scalaire ' + psG.toFixed(1) + ', positif attendu)');

  const psD = scal(vect(Od, Ad), vect(Od, Md));
  assert.ok(psD < 0,
    'papillon : A et M doivent être de part et d\'autre de O ' +
    '(produit scalaire ' + psD.toFixed(1) + ', négatif attendu)');
});

/* --- Thalès : « Rapports égaux ou droites parallèles » ---------------- */
test('Thalès, schéma de la réciproque : à gauche parallèles, à droite réellement sécantes', () => {
  /* Le schéma oppose deux configurations et affirme que la seconde n'est PAS
     parallèle, avec un écart « de près de 18 degrés ». Si le dessin de droite
     était parallèle par inadvertance, le schéma enseignerait le contraire de
     son propre texte — et c'est exactement le type de défaut qu'aucune
     relecture n'attrape. */
  const d = parTitre('3e-thales.js', 'Rapports égaux');
  const f = lignes(d.svg).filter(l => l.cls === 'curve-main');
  assert.strictEqual(f.length, 4, 'quatre segments forts attendus');

  const eg = ecartParallele(vect(f[0].a, f[0].b), vect(f[1].a, f[1].b));
  assert.ok(eg < TOL_PARALLELE,
    'rapports égaux : les droites doivent être parallèles (écart ' + eg.toExponential(2) + ')');

  const ed = ecartParallele(vect(f[2].a, f[2].b), vect(f[3].a, f[3].b));
  const deg = Math.asin(Math.min(1, ed)) * 180 / Math.PI;
  assert.ok(deg > 10,
    'rapports inégaux : les droites doivent être VISIBLEMENT sécantes, ' +
    'or l\'écart mesuré ne vaut que ' + deg.toFixed(2) + ' degrés');
});

test('Thalès, schéma de la réciproque : les deux rapports annoncés sont ceux du dessin', () => {
  /* Les notes annoncent 2 et 2 à gauche, 2 et 1,45 à droite. Ces valeurs se
     mesurent sur les sécantes, en comparant OM à OA et ON à OB. */
  const d = parTitre('3e-thales.js', 'Rapports égaux');
  const pts = cercles(d.svg);
  assert.strictEqual(pts.length, 10, 'dix points attendus');
  const dist = (A, B) => Math.hypot(A[0] - B[0], A[1] - B[1]);

  const [Og, Ag, Bg, Mg, Ng] = pts.slice(0, 5);
  assert.ok(Math.abs(dist(Og, Mg) / dist(Og, Ag) - 2) < TOL_RAPPORT,
    'gauche, première sécante : rapport ' + (dist(Og, Mg) / dist(Og, Ag)).toFixed(5) + ', 2 attendu');
  assert.ok(Math.abs(dist(Og, Ng) / dist(Og, Bg) - 2) < TOL_RAPPORT,
    'gauche, seconde sécante : rapport ' + (dist(Og, Ng) / dist(Og, Bg)).toFixed(5) + ', 2 attendu');

  const [Od, Ad, Bd, Md, Nd] = pts.slice(5);
  assert.ok(Math.abs(dist(Od, Md) / dist(Od, Ad) - 2) < TOL_RAPPORT,
    'droite, première sécante : rapport ' + (dist(Od, Md) / dist(Od, Ad)).toFixed(5) + ', 2 attendu');
  assert.ok(Math.abs(dist(Od, Nd) / dist(Od, Bd) - 1.45) < TOL_RAPPORT,
    'droite, seconde sécante : rapport ' + (dist(Od, Nd) / dist(Od, Bd)).toFixed(5) + ', 1,45 attendu');
});

/* --- Contrôles de forme, communs à tous les schémas du niveau --------- */
test('les schémas de troisième ne débordent pas de leur viewBox', () => {
  /* Exigence 8 du cahier des charges. Le convertisseur fige la boîte TikZ sur
     le viewBox, donc LaTeX ne signale AUCUN Overfull : un élément hors cadre
     s'imprime par-dessus le texte voisin, en silence. Douze figures de la
     sixième débordaient ainsi, jusqu'à 3,9 mm. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js')) {
    for (const d of diagrammes(f)) {
      const vb = d.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
      assert.ok(vb, f + ' : schéma « ' + d.title + ' » sans viewBox lisible');
      const [W, H] = [+vb[1], +vb[2]];
      const pts = [];
      for (const l of lignes(d.svg)) pts.push(l.a, l.b);
      for (const c of cercles(d.svg)) pts.push(c);
      for (const m of d.svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)) {
        pts.push(...m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
      }
      for (const p of pts) {
        assert.ok(p[0] >= 0 && p[0] <= W && p[1] >= 0 && p[1] <= H,
          f + ' / « ' + d.title + ' » : le point (' + p[0] + ' ; ' + p[1] +
          ') sort du viewBox ' + W + ' x ' + H);
      }
    }
  }
});

test('les schémas de troisième n emploient aucune couleur en dur', () => {
  /* Convention du projet : les teintes passent par les variables CSS, jamais
     par un code hexadécimal ni un nom de couleur. Une couleur en dur casse le
     thème sombre du site et sort du nuancier de l'imprimeur. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js')) {
    for (const d of diagrammes(f)) {
      const dur = d.svg.match(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8}|red|blue|green|orange|purple|yellow|pink|brown|gray|grey|black|white)"/);
      assert.ok(!dur, f + ' / « ' + d.title + ' » : couleur en dur ' + (dur && dur[1]));
    }
  }
});

test('les schémas de troisième portent un titre et une description accessibles', () => {
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  let total = 0;
  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js')) {
    for (const d of diagrammes(f)) {
      total++;
      assert.ok(/<title[^>]*>[^<]+<\/title>/.test(d.svg),
        f + ' / « ' + d.title + ' » : pas de <title>');
      assert.ok(/<desc[^>]*>[^<]{40,}<\/desc>/.test(d.svg),
        f + ' / « ' + d.title + ' » : <desc> absente ou trop courte pour décrire le dessin');
      for (const cle of ['kicker', 'title', 'description', 'caption', 'reading']) {
        assert.ok(String(d[cle] || '').trim(), f + ' / « ' + d.title + ' » : champ « ' + cle + ' » vide');
      }
      assert.ok(Array.isArray(d.notes) && d.notes.length >= 2,
        f + ' / « ' + d.title + ' » : au moins deux notes attendues');
    }
  }
  assert.ok(total >= 3, 'au moins les trois schémas du chapitre pilote attendus, ' + total + ' trouvé(s)');
});

/* =========================================================
   SCHÉMAS COMMITÉS PENDANT LA COUPURE RÉSEAU DU 2026-09-13.

   Les neuf schémas de `3e-fonctions`, `3e-homotheties` et
   `3e-identites-remarquables` ont été écrits et commités en urgence, sans
   passer au build ni au contrôle par le calcul. Les tests ci-dessous ont été
   écrits APRÈS COUP pour vérifier ce qu'ils affirment, et ils l'ont tous
   confirmé — mais ils restent ici parce que la propriété qu'ils contrôlent
   n'est vraie que tant que personne ne retouche une coordonnée.

   UN PIÈGE DE MÉTHODE, rencontré en écrivant ces tests et consigné parce
   qu'il coûterait le même temps à la vague suivante. En vérifiant la parabole
   de `3e-fonctions`, une première lecture a conclu à une figure fausse d'un
   facteur 4 : l'échelle horizontale avait été déduite des LIGNES DE GRILLE,
   espacées de 18 unités, alors que les graduations réelles sont portées par
   les ÉTIQUETTES, espacées de 36. La figure était exacte au millième.

   La leçon n'est pas « la figure était bonne » : c'est qu'un contrôle par le
   calcul doit prendre son repère sur ce que la figure DÉCLARE — ses
   étiquettes, ses points marqués, ses axes — et jamais sur un élément de
   décor. Un test calé sur le mauvais repère produit une fausse alerte, qui
   coûte aussi cher qu'un défaut manqué.
   ========================================================= */

/* --- Fonctions : « Une image se lit vers le haut... » ------------------ */
test('Fonctions, lecture graphique : la courbe est exactement la parabole annoncée', () => {
  const d = parTitre('3e-fonctions.js', 'Une image se lit vers le haut');
  const poly = d.svg.match(/<polyline[^>]*points="([^"]+)"/);
  assert.ok(poly, 'polyline de la courbe introuvable');
  const pts = poly[1].trim().split(/\s+/).map(p => p.split(',').map(Number));

  /* Repère lu sur les ÉTIQUETTES, seul repère que la figure déclare :
     « -2 » sous x = 98, « 0 » sous x = 170, « 2 » sous x = 242 donnent
     36 unités de viewBox par unité d'abscisse ; « 0 » sur l'axe à y = 176 et
     « 3 » à y = 131 donnent 15 unités par unité d'ordonnée. */
  const X0 = 170, ux = 36, Y0 = 176, uy = 15;
  let ecartMax = 0;
  for (const [px, py] of pts) {
    const x = (px - X0) / ux, y = (Y0 - py) / uy;
    ecartMax = Math.max(ecartMax, Math.abs(y - (x * x - 1)));
  }
  assert.ok(ecartMax < 1e-3,
    'la courbe s écarte de f(x) = x² - 1 de ' + ecartMax.toFixed(5) + ' unité');
});

test('Fonctions, lecture graphique : les points marqués sont bien (-2 ; 3) et (2 ; 3)', () => {
  const d = parTitre('3e-fonctions.js', 'Une image se lit vers le haut');
  const X0 = 170, ux = 36, Y0 = 176, uy = 15;
  const marques = cercles(d.svg).map(([px, py]) => [(px - X0) / ux, (Y0 - py) / uy]);
  for (const attendu of [[-2, 3], [2, 3]]) {
    assert.ok(marques.some(m => Math.abs(m[0] - attendu[0]) < 1e-6 && Math.abs(m[1] - attendu[1]) < 1e-6),
      'point (' + attendu + ') absent des points marqués : ' + JSON.stringify(marques));
  }
  // Et ces points sont réellement sur la courbe : f(±2) = 3.
  for (const x of [-2, 2]) assert.strictEqual(x * x - 1, 3);
});

/* --- Homothéties : les trois schémas ---------------------------------- */
/* Rapport mesuré point par point sur le dessin, comparé au rapport ANNONCÉ
   dans le titre du schéma. C'est la vérification que le brief réclame
   explicitement pour ce niveau : « les rapports d'homothétie mesurés sur la
   figure valent le rapport annoncé ». */
test('Homothéties, schéma du signe : les rapports dessinés valent +1,6 et -1,6', () => {
  const d = parTitre('3e-homotheties.js', 'rapport négatif fait basculer');
  const polys = [...d.svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)]
    .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
  assert.strictEqual(polys.length, 4, 'quatre polygones attendus (deux par moitié)');

  const cas = [{ O: [66, 100], src: polys[0], img: polys[1], k: 1.6, cote: 'gauche' },
               { O: [300, 100], src: polys[2], img: polys[3], k: -1.6, cote: 'droite' }];
  for (const c of cas) {
    c.src.forEach((M, j) => {
      const u = vect(c.O, M), v = vect(c.O, c.img[j]);
      const kx = v[0] / u[0], ky = v[1] / u[1];
      assert.ok(Math.abs(kx - c.k) < TOL_RAPPORT,
        c.cote + ' : rapport mesuré ' + kx.toFixed(5) + ', ' + c.k + ' annoncé');
      assert.ok(Math.abs(ky - c.k) < TOL_RAPPORT,
        c.cote + ' : rapport vertical ' + ky.toFixed(5) + ', ' + c.k + ' annoncé');
      assert.ok(ecartParallele(u, v) < TOL_PARALLELE,
        c.cote + ' : le sommet, son image et le centre ne sont pas alignés');
    });
  }
});

test('Homothéties, schéma du signe : le rapport négatif place bien l image de l AUTRE côté', () => {
  const d = parTitre('3e-homotheties.js', 'rapport négatif fait basculer');
  const polys = [...d.svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)]
    .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
  /* Le SIGNE se lit au produit scalaire, pas à l'œil : positif, le centre est
     en dehors du segment [M M'] ; négatif, il est entre les deux, et c'est
     tout ce que le schéma prétend montrer. */
  const cas = [{ O: [66, 100], s: polys[0], i: polys[1], signe: 1 },
               { O: [300, 100], s: polys[2], i: polys[3], signe: -1 }];
  for (const c of cas) {
    c.s.forEach((M, j) => {
      const ps = scal(vect(c.O, M), vect(c.O, c.i[j]));
      assert.strictEqual(Math.sign(ps), c.signe,
        'le côté de l image ne correspond pas au signe du rapport annoncé');
    });
  }
});

test('Homothéties, schéma des aires : quatre copies du petit carré pavent exactement le grand', () => {
  const d = parTitre('3e-homotheties.js', 'surface est multipliée par quatre');
  const rects = [...d.svg.matchAll(/<rect[^>]*x="([\d.]+)"[^>]*y="([\d.]+)"[^>]*width="([\d.]+)"[^>]*height="([\d.]+)"/g)]
    .map(m => ({ x: +m[1], y: +m[2], w: +m[3], h: +m[4] }));
  assert.strictEqual(rects.length, 2, 'deux carrés attendus : le petit et son image');
  const [petit, grand] = rects.slice().sort((a, b) => a.w - b.w);
  assert.strictEqual(petit.w, petit.h, 'le petit n est pas un carré');
  assert.strictEqual(grand.w, grand.h, 'le grand n est pas un carré');
  assert.ok(Math.abs(grand.w / petit.w - 2) < 1e-9,
    'rapport des côtés ' + (grand.w / petit.w) + ', 2 attendu');
  assert.ok(Math.abs((grand.w * grand.h) / (petit.w * petit.h) - 4) < 1e-9,
    'rapport des aires ' + ((grand.w * grand.h) / (petit.w * petit.h)) + ', 4 attendu');
  // Le pavage annoncé : quatre cases du petit remplissent le grand, sans reste.
  assert.strictEqual(4 * petit.w * petit.h, grand.w * grand.h);
});

test('Homothéties, schéma de la symétrie centrale : O est le milieu de chaque segment', () => {
  const d = parTitre('3e-homotheties.js', 'moins un est exactement la symétrie centrale');
  const polys = [...d.svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)]
    .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
  assert.strictEqual(polys.length, 2, 'le triangle et son image attendus');
  const [src, img] = polys;
  // Le centre est le seul cercle de rayon 5 du schéma (les sommets font 3).
  const centre = [...d.svg.matchAll(/<circle[^>]*cx="([\d.]+)"[^>]*cy="([\d.]+)"[^>]*r="5"/g)]
    .map(m => [+m[1], +m[2]])[0];
  assert.ok(centre, 'centre O introuvable');
  src.forEach((M, j) => {
    const milieu = [(M[0] + img[j][0]) / 2, (M[1] + img[j][1]) / 2];
    assert.ok(Math.hypot(milieu[0] - centre[0], milieu[1] - centre[1]) < 1e-6,
      'O n est pas le milieu du segment pour le sommet ' + j);
  });
  // Et les longueurs sont conservées : |k| = 1, ce que « même taille » affirme.
  for (let j = 0; j < 3; j++) {
    const a = Math.hypot(src[(j + 1) % 3][0] - src[j][0], src[(j + 1) % 3][1] - src[j][1]);
    const b = Math.hypot(img[(j + 1) % 3][0] - img[j][0], img[(j + 1) % 3][1] - img[j][1]);
    assert.ok(Math.abs(a - b) < 1e-6,
      'côté ' + j + ' : ' + a.toFixed(4) + ' devient ' + b.toFixed(4) + ', longueur non conservée');
  }
});

/* --- Identités remarquables : le découpage du carré -------------------- */
test('Identités, double produit : les quatre morceaux pavent le carré sans trou ni recouvrement', () => {
  const d = parTitre('3e-identites-remarquables.js', 'double produit oublié');
  /* a = 6 et b = 4, à 17 unités de viewBox par unité de longueur : le carré
     a² mesure 102, le carré b² mesure 68, et le tout 170. On vérifie que les
     aires DESSINÉES valent les aires ANNONCÉES par les étiquettes — 36, 16,
     24 et 24 — et que leur somme est exactement le carré de côté a + b. */
  const u = 17;
  const rects = [...d.svg.matchAll(/<rect[^>]*x="([\d.]+)"[^>]*y="([\d.]+)"[^>]*width="([\d.]+)"[^>]*height="([\d.]+)"/g)]
    .map(m => ({ x: +m[1], y: +m[2], w: +m[3], h: +m[4] }));
  // Moitié gauche seulement : le carré complet et ses quatre morceaux.
  const morceaux = rects.filter(r => r.x < 200 && !(r.w === 170 && r.h === 170));
  assert.strictEqual(morceaux.length, 4, 'quatre morceaux attendus à gauche');
  const aires = morceaux.map(r => (r.w / u) * (r.h / u)).sort((p, q) => p - q);
  assert.deepStrictEqual(aires.map(a => Math.round(a * 1e6) / 1e6), [16, 24, 24, 36],
    'aires dessinées ' + JSON.stringify(aires) + ', [16, 24, 24, 36] attendues');
  assert.strictEqual(aires.reduce((s, a) => s + a, 0), 100,
    'la somme des quatre morceaux doit valoir (a+b)² = 100');
  // Le pavage est exact en unités de viewBox : aucun trou, aucun recouvrement.
  assert.strictEqual(morceaux.reduce((s, r) => s + r.w * r.h, 0), 170 * 170);
});

test('Identités, double produit : ce que a² + b² oublie vaut bien 2ab', () => {
  const d = parTitre('3e-identites-remarquables.js', 'double produit oublié');
  const a = 6, b = 4;
  assert.strictEqual((a + b) * (a + b), 100);
  assert.strictEqual(a * a + b * b, 52);
  assert.strictEqual(2 * a * b, 48);
  assert.strictEqual(a * a + b * b + 2 * a * b, (a + b) * (a + b));
  // Les totaux sont écrits en toutes lettres dans le schéma : ils doivent y
  // figurer, sans quoi le texte et le dessin divergeraient.
  for (const total of ['100', '52', '36', '16']) {
    assert.ok(d.svg.includes('>' + total + '<') || d.svg.includes('total ' + total),
      'le total ' + total + ' n apparaît pas dans le schéma');
  }
});

/* --- Le signe pourcent, qui a deja casse un ouvrage entier --------------- */
test('aucun signe pourcent non echappe dans le texte typographie de la troisieme', () => {
  /* HORS des delimiteurs mathematiques, un % brut ouvre un COMMENTAIRE LaTeX :
     il avale la fin de la ligne, et la compilation casse plus loin, a un
     endroit sans rapport. C'est ce qui est arrive a un ouvrage entier le
     2026-09-13, et c'est arrive une seconde fois le meme jour dans la nouvelle
     introduction de 3e-stats-probas, qui en comptait cinq.

     Ce test regarde le texte REELLEMENT TYPOGRAPHIE — intro, definitions,
     recapitulatif, notes de schemas, enonces, indices et corriges — et non le
     fichier source : les % des attributs SVG (color-mix(... 14%, ...)) et les
     modulos JS sont legitimes et ne traversent jamais le convertisseur. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  const fautes = [];

  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js' && x.endsWith('.js'))) {
    const { module: mod, exercices } = chargerModule('js/data/3e/' + f, { tirages: 6 });
    const textes = [mod.cours.intro || '', mod.cours.piege || ''];
    (mod.cours.definitions || []).forEach(d => textes.push(d.def, d.term));
    (mod.cours.recap || []).forEach(r => textes.push(r));
    (mod.cours.formulas || []).forEach(f => textes.push(f));
    /* L'exemple résolu et la méthode sont imprimés eux aussi : ils ont été
       ajoutés ici après coup (2026-09-13), la première version du test ne
       regardant que l'intro et les exercices. Un test qui ne couvre qu'une
       partie du texte imprimé donne une fausse assurance. */
    if (mod.cours.example) {
      textes.push(mod.cours.example.statement || '', mod.cours.example.answer || '');
      (mod.cours.example.steps || []).forEach(s => textes.push(s));
    }
    if (mod.cours.method) {
      textes.push(mod.cours.method.title || '');
      (mod.cours.method.steps || []).forEach(s => textes.push(s));
    }
    (mod.quiz || []).forEach(q => {
      textes.push(q.q || '', q.correction || '');
      (q.options || []).forEach(o => textes.push(o));
    });
    if (mod.probleme) {
      textes.push(mod.probleme.context || '', mod.probleme.finalAnswer || '');
      (mod.probleme.tasks || []).forEach(t => textes.push(t));
      (mod.probleme.solutions || []).forEach(s => textes.push(s));
    }
    (mod.cours.diagrams || []).forEach(d => {
      textes.push(d.description, d.caption, d.reading);
      (d.notes || []).forEach(n => textes.push(n));
    });
    if (mod.cours.diagram) textes.push(mod.cours.diagram.description, mod.cours.diagram.reading);
    ((mod.evaluation && mod.evaluation.questions) || []).forEach(q => {
      textes.push(q.statement, q.correction || '');
      (q.options || []).forEach(o => textes.push(o));
    });
    exercices.forEach(e => {
      textes.push(e.statement, e.hint || '');
      (e.solution || []).forEach(s => textes.push(s));
    });

    for (const t of textes) {
      const s = String(t || '');
      for (const m of s.matchAll(/%/g)) {
        let k = m.index - 1, n = 0;
        while (k >= 0 && s[k] === '\\') { n++; k--; }
        if (n === 0) {
          fautes.push(mod.id + ' : « …' +
            s.slice(Math.max(0, m.index - 45), m.index + 10).replace(/<[^>]+>/g, '') + '… »');
        }
      }
    }
  }
  assert.deepStrictEqual(fautes, [],
    'signe(s) pourcent non echappe(s) — ecrire \\% dans la chaine JS :\n  ' + fautes.join('\n  '));
});

/* --- Les sauts de ligne, qui rendaient un devoir note illisible --------- */
test('aucun saut de ligne brut dans le texte typographie de la troisieme', () => {
  /* LaTeX traite un saut de ligne isole comme une simple ESPACE. Un algorithme
     ecrit sur cinq lignes s'imprime alors bout a bout, sur une seule ligne —
     ce qui est arrive aux cinq questions d'evaluation de 3e-algorithmique,
     dans le devoir NOTE, jusqu'au 2026-09-13. La convention du projet est
     <br/>.

     Le defaut est invisible partout ailleurs : le texte est valide, le corpus
     le valide, la compilation reussit sans le moindre avertissement. Seule
     une page rendue en image le montrait — et ce test, desormais. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  const fautes = [];

  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js' && x.endsWith('.js'))) {
    const { module: mod, exercices } = chargerModule('js/data/3e/' + f, { tirages: 6 });
    const champs = [];
    const add = (ou, t) => champs.push([ou, String(t || '')]);
    add('intro', mod.cours.intro);
    add('piege', mod.cours.piege);
    (mod.cours.definitions || []).forEach((d, i) => add('definition ' + (i + 1), d.def));
    (mod.cours.recap || []).forEach((r, i) => add('recap ' + (i + 1), r));
    if (mod.cours.example) {
      add('exemple', mod.cours.example.statement);
      (mod.cours.example.steps || []).forEach((s, i) => add('exemple etape ' + (i + 1), s));
    }
    ((mod.cours.method && mod.cours.method.steps) || []).forEach((s, i) => add('methode ' + (i + 1), s));
    ((mod.evaluation && mod.evaluation.questions) || []).forEach((q, i) => {
      add('evaluation Q' + (i + 1), q.statement);
      add('evaluation Q' + (i + 1) + ' corrige', q.correction);
    });
    (mod.quiz || []).forEach((q, i) => {
      add('quiz ' + (i + 1), q.q);
      add('quiz ' + (i + 1) + ' corrige', q.correction);
    });
    exercices.forEach((e, i) => {
      add('exercice ' + (i + 1), e.statement);
      (e.solution || []).forEach((s, j) => add('exercice ' + (i + 1) + ' solution ' + (j + 1), s));
    });
    for (const [ou, t] of champs) {
      if (t.includes('\n')) fautes.push(mod.id + ' / ' + ou);
    }
  }
  assert.deepStrictEqual(fautes, [],
    'saut(s) de ligne brut(s) — employer <br/> :\n  ' + fautes.join('\n  '));
});

/* =====================================================================
   SCHÉMAS SECONDAIRES DES CINQ DERNIERS CHAPITRES, ajoutés le 2026-09-13.

   Les huit chapitres traités avant ceux-ci sont couverts plus haut. Les tests
   qui suivent tiennent les cinq derniers : fonctions affines, statistiques et
   probabilités, équations et inéquations, arithmétique, algorithmique.

   POURQUOI CHACUN. Une figure de repère ment de deux façons, et aucune des
   deux ne se voit à la relecture : le pas peut différer entre les deux axes
   (et alors la pente DESSINÉE n'est plus la pente ANNONCÉE), ou un point
   annoncé sur une droite peut être posé à côté. Les deux sont testées ici en
   repartant des coordonnées écrites dans le SVG, jamais des valeurs annoncées
   dans le texte.
   ===================================================================== */

const TOL_PX = 1e-6;   // les coordonnees sont ecrites au centieme, on compare a l'identique

/* Les <line> d'un SVG SANS exiger l'ordre des attributs ni la presence d'une
   classe : les schemas ci-dessous ecrivent toujours class puis x1 y1 x2 y2,
   mais on ne veut pas qu'un futur reformatage rende le test faussement vert. */
function lignesToutes(svg) {
  return [...svg.matchAll(/<line\b[^>]*>/g)].map(m => {
    const t = m[0];
    const at = n => { const r = new RegExp(n + '="([-\\d.]+)"').exec(t); return r ? +r[1] : null; };
    const c = /class="([^"]+)"/.exec(t);
    return { cls: c ? c[1] : '', x1: at('x1'), y1: at('y1'), x2: at('x2'), y2: at('y2') };
  });
}
// Pente en pixels, comptee dans le sens mathematique (y de l'ecran vers le bas).
const penteEcran = l => (l.y1 - l.y2) / (l.x2 - l.x1);

test('fonctions affines : les trois droites ont la pente annoncee, au pixel pres', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema affirme que -3 est aussi raide que 3 et
     que 0,5 est la plus douce. Cette affirmation n'est vraie a l'ecran QUE si
     le pas horizontal egale le pas vertical. Un repere a pas inegaux — le
     defaut le plus banal d'une figure de fonction — rendrait le schema faux
     tout en restant parfaitement lisible. On mesure donc la pente REELLE des
     traits, en pixels, et on la compare a 3, -3 et 0,5. */
  const d = parTitre('3e-fonctions-affines.js', 'valeur absolue donne la raideur');
  const traits = lignesToutes(d.svg).filter(l => l.cls === 'curve-main' || l.cls === 'graph-line');
  assert.strictEqual(traits.length, 3, 'trois droites attendues dans le schema des raideurs');
  const pentes = traits.map(penteEcran).sort((a, b) => a - b);
  assert.ok(Math.abs(pentes[0] - (-3)) < TOL_PX, 'pente la plus negative = ' + pentes[0] + ', attendu -3');
  assert.ok(Math.abs(pentes[1] - 0.5) < TOL_PX, 'pente mediane = ' + pentes[1] + ', attendu 0,5');
  assert.ok(Math.abs(pentes[2] - 3) < TOL_PX, 'pente la plus positive = ' + pentes[2] + ', attendu 3');
  // Et le point de concours : les trois droites passent par l'origine dessinee.
  const o = cercles(d.svg)[0];
  for (const t of traits) {
    const num = Math.abs((t.x2 - t.x1) * (t.y1 - o[1]) - (t.y2 - t.y1) * (t.x1 - o[0]));
    const dist = num / Math.hypot(t.x2 - t.x1, t.y2 - t.y1);
    assert.ok(dist < 0.02, 'une droite ne passe pas par l\'origine dessinee : ecart ' + dist + ' px');
  }
});

test('fonctions affines : les deux lectures du quotient portent la meme droite', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema affirme que la droite lue de A vers B et
     celle lue de B vers A sont LA MEME, de coefficient 1,5. Si les deux
     vignettes n'etaient pas des copies exactes a une translation pres, le
     schema demontrerait le contraire de ce qu'il annonce. On verifie donc
     trois choses : que chaque vignette a bien la pente 1,5 ; que les deux
     points marques sont EXACTEMENT sur la droite tracee ; et que le triangle
     des ecarts a bien 4 unites en horizontal pour 6 en vertical. */
  const d = parTitre('3e-fonctions-affines.js', 'sens de lecture');
  const droites = lignesToutes(d.svg).filter(l => l.cls === 'curve-main');
  assert.strictEqual(droites.length, 2, 'une droite par vignette');
  for (const t of droites) {
    assert.ok(Math.abs(penteEcran(t) - 1.5) < 1e-3, 'pente = ' + penteEcran(t) + ', attendu 1,5');
  }
  // Les quatre points marques : deux par vignette, chacun sur sa droite.
  const pts = cercles(d.svg);
  assert.strictEqual(pts.length, 4, 'deux points marques par vignette');
  for (const p of pts) {
    const surUne = droites.some(t => {
      const num = Math.abs((t.x2 - t.x1) * (t.y1 - p[1]) - (t.y2 - t.y1) * (t.x1 - p[0]));
      return num / Math.hypot(t.x2 - t.x1, t.y2 - t.y1) < 0.02;
    });
    assert.ok(surUne, 'le point (' + p + ') n\'est sur aucune des deux droites');
  }
  // Le triangle des ecarts : 4 unites horizontales pour 6 verticales, soit un
  // rapport de 1,5 EN PIXELS puisque le pas est le meme sur les deux axes.
  const guides = lignesToutes(d.svg).filter(l => l.cls === 'guide-line');
  assert.strictEqual(guides.length, 4, 'deux traits de guidage par vignette');
  const hor = guides.filter(l => Math.abs(l.y1 - l.y2) < TOL_PX).map(l => Math.abs(l.x2 - l.x1));
  const ver = guides.filter(l => Math.abs(l.x1 - l.x2) < TOL_PX).map(l => Math.abs(l.y2 - l.y1));
  assert.strictEqual(hor.length, 2); assert.strictEqual(ver.length, 2);
  for (let i = 0; i < 2; i++) {
    assert.ok(Math.abs(ver[i] / hor[i] - 1.5) < TOL_PX,
      'triangle ' + i + ' : vertical/horizontal = ' + (ver[i] / hor[i]) + ', attendu 1,5');
  }
});

test('statistiques : les trois barres sont proportionnelles aux frequences annoncees', () => {
  /* CE QUE CE TEST ATTRAPE. Tout le schema repose sur UNE affirmation
     visuelle : la portion remplie grandit quand la population de reference
     retrecit, et elle grandit DANS LE BON RAPPORT. Une barre posee a vue
     donnerait un dessin plausible et faux — l'eleve mesurerait a la regle et
     lirait autre chose que le pourcentage imprime a cote.

     On reprend donc les quatre effectifs du tableau croise du chapitre
     (25 sur 200, sur 80, sur 60), on recalcule les trois frequences, et on
     verifie que la largeur de chaque rectangle rempli vaut exactement cette
     frequence fois la largeur du cadre. */
  const d = parTitre('3e-stats-probas.js', 'trois dénominateurs');
  const rects = [...d.svg.matchAll(/<rect\b[^>]*>/g)].map(m => {
    const t = m[0];
    const at = n => { const r = new RegExp(n + '="([-\\d.]+)"').exec(t); return r ? +r[1] : null; };
    return { cadre: /frame-line/.test(t), x: at('x'), y: at('y'), w: at('width') };
  });
  const cadres = rects.filter(r => r.cadre).sort((a, b) => a.y - b.y);
  const pleins = rects.filter(r => !r.cadre).sort((a, b) => a.y - b.y);
  assert.strictEqual(cadres.length, 3, 'trois cadres attendus');
  assert.strictEqual(pleins.length, 3, 'trois portions remplies attendues');

  // Les trois populations de reference, dans l'ordre du schema.
  const DENOM = [200, 80, 60];
  const NUM = 25;
  for (let i = 0; i < 3; i++) {
    assert.strictEqual(cadres[i].w, cadres[0].w,
      'les trois cadres doivent avoir la MEME longueur : chacun represente 100 % de sa population');
    assert.strictEqual(pleins[i].x, cadres[i].x, 'la portion ' + i + ' ne part pas du bord du cadre');
    const attendue = cadres[i].w * NUM / DENOM[i];
    assert.ok(Math.abs(pleins[i].w - attendue) < 0.01,
      'barre ' + i + ' (25 sur ' + DENOM[i] + ') : largeur ' + pleins[i].w +
      ' px, attendu ' + attendue.toFixed(2) + ' px');
    assert.ok(pleins[i].w <= cadres[i].w + 1e-9, 'une portion deborde de son cadre');
  }
  // Et l'ordre annonce : la portion grandit quand la population retrecit.
  assert.ok(pleins[0].w < pleins[1].w && pleins[1].w < pleins[2].w,
    'les portions doivent aller croissant quand le denominateur decroit');
});

test('statistiques : l arbre est coherent, chaque paire de branches redonne sa mere', () => {
  /* CE QUE CE TEST ATTRAPE. Un arbre faux se relit sans broncher : les
     nombres sont plausibles un a un, et seule leur SOMME trahit l'erreur.
     On rejoue donc les trois controles qu'un professeur ferait au tableau :
     les effectifs des sous-branches redonnent leur branche, les probabilites
     du premier niveau valent bien l'effectif divise par 200, et le produit le
     long d'un chemin redonne la frequence globale du schema precedent. */
  const d = parTitre('3e-stats-probas.js', 'branche précédente');
  const N = 200, S = 80, NS = 120, SM = 25, SnM = 55, nSM = 35, ni = 85;

  // Les effectifs sont bien ceux du tableau croise du chapitre.
  assert.strictEqual(S + NS, N, 'sportifs + non sportifs doit faire 200');
  assert.strictEqual(SM + SnM, S, '25 + 55 doit redonner les 80 sportifs');
  assert.strictEqual(nSM + ni, NS, '35 + 85 doit redonner les 120 non sportifs');
  assert.strictEqual(SM + SnM + nSM + ni, N, 'les quatre cases doivent faire 200');

  // Chacun de ces nombres doit REELLEMENT figurer dans le schema, sans quoi le
  // test validerait une arithmetique qui n'est pas celle dessinee.
  const txt = d.svg.replace(/<desc[\s\S]*?<\/desc>/, '');
  for (const [valeur, ou] of [[N, 'le total'], [S, 'les sportifs'], [NS, 'les non sportifs'],
                              [SM, 'la case sport et musique'], [SnM, 'sport sans musique'],
                              [nSM, 'musique sans sport'], [ni, 'ni l un ni l autre']]) {
    assert.ok(new RegExp('\\b' + valeur + '\\b').test(txt),
      'l effectif ' + valeur + ' (' + ou + ') est absent du schema');
  }
  // Les probabilites du premier niveau.
  assert.ok(txt.includes('0,4') && txt.includes('0,6'), 'les probabilites 0,4 et 0,6 doivent etre ecrites');
  assert.strictEqual(S / N, 0.4);
  assert.strictEqual(NS / N, 0.6);
  // Le produit le long du chemin haut redonne la frequence globale 12,5 %.
  assert.ok(Math.abs((S / N) * (SM / S) - SM / N) < 1e-12);
  assert.strictEqual(SM / N, 0.125);
  // Les sous-branches partent bien de la hauteur de leur mere.
  const branches = lignesToutes(d.svg);
  const meres = branches.filter(l => l.cls === 'curve-main');
  const filles = branches.filter(l => l.cls === 'graph-line');
  assert.strictEqual(meres.length, 2, 'deux branches de premier niveau');
  assert.strictEqual(filles.length, 4, 'quatre sous-branches');
  for (const f of filles) {
    assert.ok(meres.some(m => Math.abs(m.y2 - f.y1) < 1e-9),
      'une sous-branche part de la hauteur ' + f.y1 + ', qui n est celle d aucune branche mere');
  }
});

test('inequations : le retournement est une symetrie EXACTE autour de zero', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema n'illustre pas la regle, il la DEMONTRE :
     il affirme que multiplier par -1 envoie chaque nombre de l'autre cote de
     zero, a la meme distance. Cette demonstration ne tient que si le dessin est
     une symetrie exacte. Un point pose a vue — -5 un peu trop pres du zero, par
     exemple — et le schema ne prouve plus rien, tout en restant parfaitement
     lisible. On mesure donc les distances au zero DESSINE.

     On verifie aussi que l'ordre est reellement echange : c'est la conclusion
     du schema, et elle doit se lire sur les abscisses, pas seulement dans le
     texte. */
  const d = parTitre('3e-equations-inequations.js', 'retourne la droite graduée');
  const pts = cercles(d.svg);
  assert.strictEqual(pts.length, 4, 'quatre points attendus : 2 et 5 en haut, -2 et -5 en bas');

  // Les deux zeros dessines : les traits de graduation verticaux du milieu.
  const zeros = lignesToutes(d.svg).filter(l => l.cls === 'grid-line' && l.x1 === l.x2);
  assert.strictEqual(zeros.length, 2, 'un trait de zero par droite graduee');
  assert.strictEqual(zeros[0].x1, zeros[1].x1,
    'les deux zeros doivent etre a la MEME abscisse, sans quoi les deux droites ne se comparent pas');
  const zx = zeros[0].x1;

  // Haut et bas, tries par ordonnee.
  const parY = [...pts].sort((a, b) => a[1] - b[1]);
  const haut = parY.slice(0, 2).sort((a, b) => a[0] - b[0]);   // gauche a droite
  const bas = parY.slice(2).sort((a, b) => a[0] - b[0]);
  assert.ok(haut[0][1] === haut[1][1], 'les deux points du haut doivent etre sur la meme ligne');
  assert.ok(bas[0][1] === bas[1][1], 'les deux points du bas doivent etre sur la meme ligne');

  // En haut, les deux points sont A DROITE du zero (2 et 5 sont positifs).
  assert.ok(haut[0][0] > zx && haut[1][0] > zx, '2 et 5 doivent etre a droite du zero');
  // En bas, les deux sont A GAUCHE (-2 et -5 sont negatifs).
  assert.ok(bas[0][0] < zx && bas[1][0] < zx, '-2 et -5 doivent etre a gauche du zero');

  // LA symetrie : le plus proche du zero en haut correspond au plus proche en
  // bas, a la meme distance. En haut l'ordre gauche-droite est 2 puis 5 ; en
  // bas c'est -5 puis -2, donc l'appariement croise les deux listes.
  const dHaut = haut.map(p => Math.abs(p[0] - zx)).sort((a, b) => a - b);
  const dBas = bas.map(p => Math.abs(p[0] - zx)).sort((a, b) => a - b);
  for (let i = 0; i < 2; i++) {
    assert.strictEqual(dHaut[i], dBas[i],
      'la distance au zero doit etre IDENTIQUE avant et apres : ' +
      dHaut[i] + ' px en haut contre ' + dBas[i] + ' px en bas');
  }
  // Et le rapport des deux distances vaut bien 5 sur 2, comme les nombres.
  assert.ok(Math.abs(dHaut[1] / dHaut[0] - 5 / 2) < 1e-9,
    'le rapport des distances vaut ' + (dHaut[1] / dHaut[0]) + ', attendu 2,5 (soit 5 divise par 2)');

  /* L'ORDRE EST ECHANGE. En haut, le point le plus a droite est le PLUS GRAND
     (c'est 5). En bas, le point le plus a droite doit etre celui qui etait le
     plus PETIT (c'est -2, image de 2). On le verifie par les distances : le
     point de droite en bas doit etre le MOINS eloigne du zero. */
  const droiteHaut = Math.abs(haut[1][0] - zx);
  const droiteBas = Math.abs(bas[1][0] - zx);
  assert.strictEqual(droiteHaut, Math.max(...dHaut),
    'en haut, le point de droite doit etre le plus eloigne du zero (c est 5)');
  assert.strictEqual(droiteBas, Math.min(...dBas),
    'en bas, le point de droite doit etre le MOINS eloigne du zero (c est -2) : ' +
    'c est precisement cet echange qui inverse le sens de l inegalite');
});

test('inequations : les deux bornes sont a la meme abscisse, seul le cercle differe', () => {
  /* CE QUE CE TEST ATTRAPE. Tout le schema tient sur une phrase : « la borne
     est la MEME, seul le cercle change ». Si les deux droites graduees etaient
     decalees d'un pixel, ou si les deux traits epais ne partaient pas du meme
     endroit, le schema montrerait deux ensembles differents pour deux raisons
     differentes, et l'eleve n'aurait aucun moyen de savoir laquelle compte.

     On verifie donc : meme abscisse de borne, meme longueur de trait vers la
     droite, et deux cercles de nature DIFFERENTE (l'un rempli, l'autre non). */
  const d = parTitre('3e-equations-inequations.js', 'borne fait partie');

  // Les deux traits epais (l'ensemble solution).
  const traits = lignesToutes(d.svg).filter(l => l.cls === 'curve-main');
  assert.strictEqual(traits.length, 2, 'un trait epais par droite graduee');
  assert.strictEqual(traits[0].x2, traits[1].x2,
    'les deux traits doivent s arreter a la meme abscisse');

  // Les deux graduations « 3 », reperees par leur etiquette d'accent.
  const bornes = [...d.svg.matchAll(/<text class="annotation-label" x="([-\d.]+)" y="([-\d.]+)" text-anchor="middle">3<\/text>/g)]
    .map(m => +m[1]);
  assert.strictEqual(bornes.length, 2, 'la borne 3 doit etre etiquetee sur les deux droites');
  assert.strictEqual(bornes[0], bornes[1],
    'les deux bornes doivent etre a la MEME abscisse : ' + bornes[0] + ' contre ' + bornes[1]);

  // Les deux cercles sont sur cette borne, et ils sont de nature differente.
  const pts = cercles(d.svg);
  assert.strictEqual(pts.length, 2, 'un cercle par droite graduee');
  for (const p of pts) {
    assert.strictEqual(p[0], bornes[0], 'un cercle n est pas pose sur la borne 3');
  }
  /* LE CERCLE OUVERT DOIT PASSER PAR LA CLASSE DU PROJET, jamais par un fill
     ecrit en dur. Releve a l'image le 2026-09-13 : un `fill="var(--bg-card)"`
     inline ne traverse pas le convertisseur, qui retombe sur un aplat gris —
     et le cercle « vide » s'imprimait comme une pastille pleine, detruisant la
     SEULE chose que ce schema enseigne. Le defaut etait invisible dans le SVG,
     invisible dans le .tex, et visible uniquement sur la page rendue.
     `plot-point-alt` est la classe qui porte le remplissage blanc. */
  const classes = [...d.svg.matchAll(/<circle\b[^>]*>/g)].map(m => m[0]);
  const vide = classes.some(c => /class="plot-point-alt"/.test(c) && /cy="56"/.test(c));
  const plein = classes.some(c => /class="plot-point"/.test(c) && /cy="144"/.test(c));
  assert.ok(vide, 'le cercle du haut doit etre VIDE, via la classe plot-point-alt');
  assert.ok(plein, 'le cercle du bas doit etre PLEIN, via la classe plot-point');
  for (const c of classes) {
    assert.ok(!/fill="/.test(c),
      'un cercle porte un remplissage en dur (' + c + ') : le convertisseur ' +
      'l ignore et le cercle s imprime en aplat gris. Employer une classe.');
  }

  /* La difference de depart du trait. Le trait du haut part legerement APRES
     la borne (elle est exclue), celui du bas part DE la borne. C'est la seule
     autre difference autorisee entre les deux dessins. */
  const parY = [...traits].sort((a, b) => a.y1 - b.y1);
  assert.ok(parY[0].x1 > bornes[0],
    'le trait du haut doit partir apres la borne exclue');
  assert.strictEqual(parY[1].x1, bornes[0],
    'le trait du bas doit partir exactement de la borne incluse');
});

test('aucun cercle de schema de troisieme ne porte de remplissage en dur', () => {
  /* GARDE-FOU GENERAL, ajoute le 2026-09-13 apres un defaut releve a l'image
     sur le schema des crochets de 3e-equations-inequations.

     LE PIEGE. Un `<circle fill="var(--bg-card)">` est parfaitement correct en
     SVG et s'affiche comme un cercle ouvert sur le site. Mais le convertisseur
     du manuel ne lit PAS les remplissages inline : il travaille par classes
     (voir STYLES dans svg2tikz.js, ou `plot-point` est plein et
     `plot-point-alt` ouvert). Un fill en dur est donc silencieusement ignore,
     et le cercle s'imprime en aplat gris.

     POURQUOI CE DEFAUT EST GRAVE ET INVISIBLE. Sur une droite graduee, le
     cercle ouvert code la borne EXCLUE et le cercle plein la borne INCLUSE.
     Les confondre, c'est imprimer le contraire de ce que le texte affirme. Or
     rien ne le signale : le SVG est valide, le corpus le valide, la
     compilation ne dit rien, le .tex a l'air normal. Seule la page rendue le
     montrait. Ce test le rend detectable sans rendre d'image.

     PORTEE. Tous les schemas du niveau, pas seulement celui qui a revele le
     probleme : c'est exactement le genre d'erreur qu'on recommet.

     CE QUE LE TEST NE VISE PAS, et pourquoi. Un grand cercle translucide —
     les patates d'un diagramme de Venn, la base d'un cylindre — porte
     legitimement un `fill` en dur : il dessine une ZONE, et le convertisseur
     sait lire un aplat de zone. Le defaut ne concerne que les MARQUEURS DE
     POINT, ou le remplissage n'est pas un decor mais une INFORMATION (borne
     incluse ou exclue). On les distingue par le rayon : un marqueur de point
     de ce corpus vaut 4 a 6 unites de viewBox, une zone en vaut plusieurs
     dizaines. Le seuil est pose a 12, largement au-dessus des marqueurs et
     largement en dessous des zones existantes (la plus petite fait 36). */
  const RAYON_MARQUEUR = 12;
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  const fautes = [];

  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js' && x.endsWith('.js'))) {
    const { module: mod } = chargerModule('js/data/3e/' + f, { tirages: 1 });
    const tous = [];
    if (mod.cours && mod.cours.diagram) tous.push(['figure principale', mod.cours.diagram]);
    ((mod.cours && mod.cours.diagrams) || []).forEach((d, i) =>
      tous.push(['schema ' + (i + 1) + ' (' + d.title + ')', d]));

    for (const [ou, d] of tous) {
      for (const m of String(d.svg || '').matchAll(/<circle\b[^>]*>/g)) {
        const r = /\br="([\d.]+)"/.exec(m[0]);
        const rayon = r ? +r[1] : 0;
        if (rayon > RAYON_MARQUEUR) continue;          // c'est une zone, pas un marqueur
        if (/fill="/.test(m[0]) && !/fill="none"/.test(m[0])) {
          fautes.push(mod.id + ' / ' + ou + ' : ' + m[0].replace(/\s+/g, ' ').slice(0, 110));
        }
      }
    }
  }
  assert.deepStrictEqual(fautes, [],
    'cercle(s) a remplissage en dur — employer les classes plot-point (plein) ' +
    'ou plot-point-alt (ouvert), seules lues par le convertisseur :\n  ' + fautes.join('\n  '));
});

test('arithmetique : le PGCD est bien sous les deux nombres et le PPCM au-dessus', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema n'affirme pas une propriete geometrique
     mais une propriete D'ORDRE, et il la traduit en hauteurs sur la page. Si
     les deux cadres etaient intervertis — ce qui ne se verrait pas, puisque
     leur contenu dit le contraire de leur position — le schema enseignerait
     exactement l'erreur qu'il est cense corriger.

     On recalcule donc le PGCD et le PPCM de 12 et 18, on verifie qu'ils
     encadrent bien les deux nombres, et on verifie que les ORDONNEES du
     dessin respectent cet encadrement. En SVG l'axe vertical descend, donc
     « plus grand » veut dire « ordonnee plus petite ». */
  const d = parTitre('3e-arithmetique.js', 'PGCD se loge sous');

  // Recalcul, sans rien recopier du schema.
  const a = 12, b = 18;
  const pgcd = (x, y) => (y ? pgcd(y, x % y) : x);
  const g = pgcd(a, b), p = a * b / g;
  assert.strictEqual(g, 6, 'PGCD(12, 18)');
  assert.strictEqual(p, 36, 'PPCM(12, 18)');
  assert.strictEqual(g * p, a * b, 'la relation PGCD x PPCM = a x b doit tenir');
  assert.ok(g <= a && g <= b, 'le PGCD doit etre inferieur aux deux nombres');
  assert.ok(p >= a && p >= b, 'le PPCM doit etre superieur aux deux nombres');

  // Les trois valeurs doivent figurer dans le dessin, hors description.
  const dessin = d.svg.replace(/<desc[\s\S]*?<\/desc>/, '');
  for (const v of [g, p, a, b]) {
    assert.ok(new RegExp('\\b' + v + '\\b').test(dessin),
      'la valeur ' + v + ' est absente du dessin');
  }

  // Les deux cadres, et la ligne des deux nombres entre eux.
  const cadres = [...dessin.matchAll(/<rect\b[^>]*>/g)].map(m => {
    const t = m[0];
    const at = n => { const r = new RegExp(n + '="([-\\d.]+)"').exec(t); return r ? +r[1] : null; };
    return { y: at('y'), h: at('height') };
  });
  assert.strictEqual(cadres.length, 2, 'un cadre pour le PPCM, un pour le PGCD');
  const hautCadre = cadres.reduce((m, c) => (c.y < m.y ? c : m));
  const basCadre = cadres.reduce((m, c) => (c.y > m.y ? c : m));

  // Le texte du cadre du haut doit nommer le PPCM, celui du bas le PGCD.
  const etiq = [...dessin.matchAll(/<text class="annotation-label" x="([-\d.]+)" y="([-\d.]+)"[^>]*>([^<]*)<\/text>/g)]
    .map(m => ({ x: +m[1], y: +m[2], t: m[3] }));
  const ppcm = etiq.find(e => e.t.includes('PPCM'));
  const pgcdE = etiq.find(e => e.t.includes('PGCD'));
  assert.ok(ppcm && pgcdE, 'les deux etiquettes PPCM et PGCD doivent etre presentes');
  assert.ok(ppcm.y < pgcdE.y,
    'le PPCM doit etre DESSINE AU-DESSUS du PGCD (ordonnee ' + ppcm.y +
    ' contre ' + pgcdE.y + ') : un axe vertical descend en SVG');
  assert.ok(ppcm.y > hautCadre.y && ppcm.y < hautCadre.y + hautCadre.h,
    'l etiquette PPCM doit tomber dans le cadre du haut');
  assert.ok(pgcdE.y > basCadre.y && pgcdE.y < basCadre.y + basCadre.h,
    'l etiquette PGCD doit tomber dans le cadre du bas');

  // Les deux nombres de depart sont ENTRE les deux cadres.
  const douze = etiq.find(e => e.t.trim() === '12');
  const dixhuit = etiq.find(e => e.t.trim() === '18');
  assert.ok(douze && dixhuit, '12 et 18 doivent etre etiquetes');
  for (const e of [douze, dixhuit]) {
    assert.ok(e.y > hautCadre.y + hautCadre.h,
      'les deux nombres doivent etre SOUS le cadre du PPCM');
    assert.ok(e.y < basCadre.y,
      'les deux nombres doivent etre AU-DESSUS du cadre du PGCD');
  }

  // Et les valeurs annoncees sont bien celles calculees.
  assert.ok(ppcm.t.includes(String(p)), 'le cadre du PPCM doit porter la valeur ' + p);
  assert.ok(pgcdE.t.includes(String(g)), 'le cadre du PGCD doit porter la valeur ' + g);
});

test('algorithmique : la table de suivi est la vraie trace de l algorithme', () => {
  /* CE QUE CE TEST ATTRAPE. Une table de suivi est le seul type de figure de
     ce corpus qu'on puisse verifier ENTIEREMENT par execution : il suffit de
     rejouer l'algorithme et de comparer case a case. Une valeur recopiee de
     travers — un 5 ecrit la ou il faut 4, une ligne oubliee — donnerait un
     tableau parfaitement credible et faux, et l'eleve qui s'en sert pour
     comprendre apprendrait une mecanique qui ne tourne pas.

     On rejoue donc S <- 0, i <- 1, tant que i <= 3 : S <- S + i au carre,
     i <- i + 1. Puis on releve les valeurs du dessin, ligne par ligne, et on
     compare les deux suites. */
  const d = parTitre('3e-algorithmique.js', 'affectation');

  // La trace reelle, calculee ici et nulle part ailleurs.
  const attendu = [];
  let S = 0, i = 1;
  attendu.push([S, i]);                       // au depart
  while (i <= 3) {
    S = S + i * i; attendu.push([S, i]);      // apres l'addition
    i = i + 1;     attendu.push([S, i]);      // apres l'incrementation
  }
  attendu.push([S, i]);                       // ligne de sortie de boucle
  assert.strictEqual(S, 14, '1 + 4 + 9 doit faire 14');
  assert.strictEqual(attendu.length, 8, 'depart, trois tours de deux lignes, sortie');

  /* Les valeurs relevees dans le dessin. Les deux colonnes se distinguent par
     leur abscisse ; la ligne, par l'ordonnee. On ne se fie donc a AUCUN ordre
     d'ecriture dans le fichier. */
  const dessin = d.svg.replace(/<desc[\s\S]*?<\/desc>/, '');
  const cases = [...dessin.matchAll(/<text class="(annotation-label|tick-label)" x="([-\d.]+)" y="([-\d.]+)"[^>]*>([^<]*)<\/text>/g)]
    .map(m => ({ x: +m[2], y: +m[3], t: m[4].trim() }))
    .filter(c => /^\d+$/.test(c.t));

  const COL_SOMME = 286, COL_COMPTEUR = 350;
  const somme = cases.filter(c => c.x === COL_SOMME).sort((a, b) => a.y - b.y);
  const compteur = cases.filter(c => c.x === COL_COMPTEUR).sort((a, b) => a.y - b.y);
  assert.strictEqual(somme.length, attendu.length,
    'la colonne de la somme doit compter ' + attendu.length + ' valeurs, ' +
    'or elle en compte ' + somme.length);
  assert.strictEqual(compteur.length, attendu.length,
    'la colonne du compteur doit compter ' + attendu.length + ' valeurs');

  for (let k = 0; k < attendu.length; k++) {
    assert.strictEqual(+somme[k].t, attendu[k][0],
      'ligne ' + (k + 1) + ' : la somme vaut ' + somme[k].t + ' dans le dessin, ' +
      attendu[k][0] + ' dans l execution reelle');
    assert.strictEqual(+compteur[k].t, attendu[k][1],
      'ligne ' + (k + 1) + ' : le compteur vaut ' + compteur[k].t + ' dans le dessin, ' +
      attendu[k][1] + ' dans l execution reelle');
    // Les deux valeurs d'une ligne doivent etre a la MEME hauteur.
    assert.strictEqual(somme[k].y, compteur[k].y,
      'ligne ' + (k + 1) + ' : les deux colonnes ne sont pas alignees');
  }

  /* UNE SEULE VARIABLE CHANGE PAR LIGNE. C'est la these du schema : la fleche
     remplace la valeur de la variable qu'elle nomme, et d'elle seule. Si deux
     colonnes changeaient d'un coup, le dessin contredirait son propre texte.
     On saute la premiere ligne (le depart) et la derniere (la sortie de
     boucle, qui ne change rien). */
  for (let k = 1; k < attendu.length - 1; k++) {
    const dS = attendu[k][0] !== attendu[k - 1][0];
    const dI = attendu[k][1] !== attendu[k - 1][1];
    assert.ok(dS !== dI,
      'ligne ' + (k + 1) + ' : exactement une des deux variables doit changer');
  }
  // La derniere ligne ne change rien : la boucle s'arrete sans rien affecter.
  assert.deepStrictEqual(attendu[attendu.length - 1], attendu[attendu.length - 2],
    'la ligne de sortie de boucle ne doit modifier aucune variable');
});

/* =====================================================================
   VOLUMES ET TRIGONOMETRIE, verifies le 2026-09-13.

   POURQUOI CES TESTS ARRIVENT APRES LES AUTRES. Ces six schemas ont ete
   commites en urgence (7da30f9) a la fin d'une session interrompue, sans
   jamais passer au build ni au controle. Ils etaient donc les seuls du
   niveau qu'aucun calcul ne couvrait — exactement la situation dans
   laquelle les vingt et une erreurs de figure des ouvrages precedents ont
   prospere. Verification faite : les six sont justes. Les tests ci-dessous
   figent ce constat, pour qu'une retouche ne le defasse pas en silence.
   ===================================================================== */

// Les sommets d'un <polygon>, dans l'ordre d'ecriture.
function polygones(svg) {
  return [...svg.matchAll(/<polygon\b[^>]*points="([^"]+)"/g)]
    .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));
}
// Angle au sommet A d'un triangle ABC, en degres.
function angleEn(A, B, C) {
  const u = [B[0] - A[0], B[1] - A[1]], v = [C[0] - A[0], C[1] - A[1]];
  const cos = (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v));
  return Math.acos(Math.min(1, Math.max(-1, cos))) * 180 / Math.PI;
}

test('volumes : le grand cube est l homothetique EXACT du petit, de rapport 2', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema demande a l'eleve de COMPTER huit cases
     dans le grand cube. Ce comptage n'a de sens que si le grand cube est
     vraiment le double du petit — arete ET fuite. Si la fuite n'etait pas
     doublee, le dessin ne serait plus une perspective coherente : les huit
     cases ne paveraient pas, et la figure demanderait de verifier a l'oeil
     une egalite qu'elle aurait elle-meme cassee.

     On verifie donc les deux echelles separement, puis l'egalite des volumes
     8 x a^3 = (2a)^3 en nombres entiers, sans arrondi. */
  const d = parTitre('3e-volumes.js', 'huit cubes');
  const f = lignesToutes(d.svg).filter(l => l.cls === 'frame-line');

  // Les aretes horizontales : deux longueurs seulement, dans un rapport de 2.
  const horiz = [...new Set(f.filter(l => l.y1 === l.y2)
    .map(l => Math.abs(l.x2 - l.x1)))].sort((a, b) => a - b);
  assert.strictEqual(horiz.length, 2,
    'deux longueurs d arete attendues (le petit cube et le grand), ' + horiz.length + ' trouvees');
  const [a, deuxA] = horiz;
  assert.strictEqual(deuxA, 2 * a,
    'l arete du grand cube doit valoir exactement le double : ' + deuxA + ' contre ' + (2 * a));

  // Les fuites : deux vecteurs seulement, eux aussi dans un rapport de 2.
  const fuites = [...new Set(f.filter(l => l.x1 !== l.x2 && l.y1 !== l.y2)
    .map(l => (l.x2 - l.x1) + ';' + (l.y2 - l.y1)))]
    .map(s => s.split(';').map(Number));
  assert.strictEqual(fuites.length, 2,
    'deux vecteurs de fuite attendus, ' + fuites.length + ' trouves : ' + JSON.stringify(fuites));
  const petitF = fuites.reduce((m, v) => (Math.hypot(...v) < Math.hypot(...m) ? v : m));
  const grandF = fuites.reduce((m, v) => (Math.hypot(...v) > Math.hypot(...m) ? v : m));
  assert.strictEqual(grandF[0], 2 * petitF[0], 'la fuite horizontale doit etre doublee');
  assert.strictEqual(grandF[1], 2 * petitF[1], 'la fuite verticale doit etre doublee');

  // Et la these du schema, en entiers exacts.
  assert.strictEqual(8 * Math.pow(a, 3), Math.pow(deuxA, 3),
    'huit cubes d arete ' + a + ' doivent remplir exactement un cube d arete ' + deuxA);

  // Les six medianes qui decoupent les trois faces visibles en quatre.
  const med = lignesToutes(d.svg).filter(l => l.cls === 'curve-main');
  assert.strictEqual(med.length, 6,
    'six medianes attendues : deux par face visible, ' + med.length + ' trouvees');

  // Les quatre cases de devant sont bien numerotees 1 a 4.
  const nums = [...d.svg.matchAll(/<text class="tick-label"[^>]*>(\d)<\/text>/g)]
    .map(m => +m[1]).sort((x, y) => x - y);
  assert.deepStrictEqual(nums, [1, 2, 3, 4],
    'les quatre cases visibles doivent porter les numeros 1 a 4');
});

test('trigonometrie : le triangle du schema des roles est rectangle et identique deux fois', () => {
  /* CE QUE CE TEST ATTRAPE. Toute la these du schema tient en une phrase :
     « un seul triangle, dessine deux fois a l'identique ; seul l'angle de
     reference change ». Si les deux triangles differaient — ne serait-ce que
     d'un pixel — le schema n'aurait plus rien a demontrer, puisque l'eleve
     pourrait attribuer le changement de role au changement de dessin. On
     verifie donc que les deux sont superposables par translation, et qu'ils
     sont bien rectangles (sans quoi aucune des trois formules ne s'applique). */
  const d = parTitre('trigonometrie.js', 'adjacent pour un angle');
  const tri = polygones(d.svg);
  assert.strictEqual(tri.length, 2, 'deux triangles attendus, un par vignette');

  for (const [k, t] of tri.entries()) {
    const angles = [0, 1, 2].map(i => angleEn(t[i], t[(i + 1) % 3], t[(i + 2) % 3]));
    const droit = angles.find(x => Math.abs(x - 90) < 1e-6);
    assert.ok(droit !== undefined,
      'triangle ' + (k + 1) + ' : aucun angle droit (angles ' +
      angles.map(x => x.toFixed(3)).join(', ') + ') — les formules ne s y appliquent pas');
    assert.ok(Math.abs(angles.reduce((s, x) => s + x, 0) - 180) < 1e-6,
      'triangle ' + (k + 1) + ' : les angles ne totalisent pas 180 degres');
  }

  // Les deux triangles doivent etre superposables par TRANSLATION : meme
  // forme, meme taille, meme orientation.
  const v = [tri[1][0][0] - tri[0][0][0], tri[1][0][1] - tri[0][0][1]];
  for (let i = 0; i < 3; i++) {
    assert.strictEqual(tri[1][i][0] - tri[0][i][0], v[0],
      'sommet ' + (i + 1) + ' : les deux triangles ne se deduisent pas d une seule translation');
    assert.strictEqual(tri[1][i][1] - tri[0][i][1], v[1],
      'sommet ' + (i + 1) + ' : les deux triangles ne se deduisent pas d une seule translation');
  }
  assert.strictEqual(v[1], 0, 'les deux vignettes doivent etre cote a cote, a la meme hauteur');
});

test('trigonometrie : les trois rapports annonces sont ceux du triangle dessine', () => {
  /* CE QUE CE TEST ATTRAPE. Le schema imprime trois valeurs — 0,87, 0,50 et
     1,73 — et affirme que les deux premieres ne peuvent pas depasser 1 tandis
     que la troisieme le peut. Si le triangle dessine ne donnait pas ces
     rapports, l'eleve qui mesure a la regle lirait autre chose que ce qui est
     ecrit, et c'est precisement le type d'erreur qu'aucune relecture
     n'attrape. On recalcule donc les trois rapports depuis les sommets.

     TOLERANCE. Les sommets sont ecrits au centieme de pixel, ce qui laisse un
     ecart de l'ordre de 3 millièmes sur l'hypotenuse. On compare donc a 5e-3,
     assez serre pour attraper un cote pose a vue. */
  const d = parTitre('trigonometrie.js', 'tangente peut valoir');
  const tri = polygones(d.svg);
  assert.strictEqual(tri.length, 1, 'un seul triangle attendu');
  const t = tri[0];

  const angles = [0, 1, 2].map(i => angleEn(t[i], t[(i + 1) % 3], t[(i + 2) % 3]));
  const iDroit = angles.findIndex(x => Math.abs(x - 90) < 1e-3);
  assert.ok(iDroit >= 0, 'le triangle doit etre rectangle');

  // L'angle de reference est celui que le dessin etiquette 60 degres.
  const iRef = angles.findIndex((x, i) => i !== iDroit && Math.abs(x - 60) < 5e-3);
  assert.ok(iRef >= 0,
    'un angle de 60 degres doit figurer, or les angles valent ' +
    angles.map(x => x.toFixed(3)).join(', '));

  const A = t[iRef];                       // sommet de l'angle de reference
  const D = t[iDroit];                     // sommet de l'angle droit
  const C = t[3 - iRef - iDroit];          // le troisieme
  const adjacent = Math.hypot(D[0] - A[0], D[1] - A[1]);
  const oppose = Math.hypot(C[0] - D[0], C[1] - D[1]);
  const hypotenuse = Math.hypot(C[0] - A[0], C[1] - A[1]);

  assert.ok(hypotenuse > adjacent && hypotenuse > oppose,
    'l hypotenuse doit etre le plus long des trois cotes — c est l argument meme du schema');
  assert.ok(Math.abs(oppose / hypotenuse - 0.866) < 5e-3,
    'sinus dessine = ' + (oppose / hypotenuse).toFixed(4) + ', 0,87 annonce');
  assert.ok(Math.abs(adjacent / hypotenuse - 0.5) < 5e-3,
    'cosinus dessine = ' + (adjacent / hypotenuse).toFixed(4) + ', 0,50 annonce');
  assert.ok(Math.abs(oppose / adjacent - 1.732) < 5e-3,
    'tangente dessinee = ' + (oppose / adjacent).toFixed(4) + ', 1,73 annonce');

  // LA these du schema : les deux premiers sont sous 1, le troisieme au-dessus.
  assert.ok(oppose / hypotenuse < 1 && adjacent / hypotenuse < 1,
    'sinus et cosinus doivent rester sous 1');
  assert.ok(oppose / adjacent > 1,
    'la tangente doit DEPASSER 1 sur ce dessin, sans quoi le schema ne montre rien');

  // Et les longueurs etiquetees correspondent au dessin.
  const etiq = d.svg.replace(/<desc[\s\S]*?<\/desc>/, '');
  assert.ok(/adjacent 60/.test(etiq), 'le cote adjacent doit etre etiquete 60');
  assert.ok(/hyp 120/.test(etiq), 'l hypotenuse doit etre etiquetee 120');
  assert.ok(Math.abs(adjacent - 60) < 5e-3, 'adjacent dessine = ' + adjacent + ', 60 annonce');
  assert.ok(Math.abs(hypotenuse - 120) < 5e-3, 'hypotenuse dessinee = ' + hypotenuse + ', 120 annonce');
});

test('chaque devoir note de troisieme est bareme sur 10, comme les trois autres niveaux', () => {
  /* POURQUOI CE TEST. Les 36 chapitres de sixieme, cinquieme et quatrieme
     baremer tous leur evaluation sur 10, sans une seule exception. Deux
     chapitres de troisieme y derogeaient — fonctions sur 13, Thales sur 12 —
     jusqu'au 2026-09-13.

     CE QUE CA CASSE. La grille de competences imprime un total en bas de
     colonne. Un enseignant qui suit une classe additionne ou moyenne les
     notes de plusieurs chapitres ; si l'un est sur 13 et l'autre sur 10, la
     moyenne est fausse et rien sur la page ne l'en avertit — les deux
     grilles se ressemblent trait pour trait. Le defaut ne se voit qu'en
     comparant deux pages eloignees, ce qu'aucune relecture ne fait.

     PORTEE. Le niveau entier, pour que l'ecriture d'une future evaluation ne
     puisse pas reintroduire l'ecart. Le total de 10 n'est pas une preference
     de style : c'est la convention etablie par les trois niveaux deja au
     niveau de reference, et la seule qui rende les chapitres comparables. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const dossier = path.join(RACINE, 'js/data/3e');
  const fautes = [];

  for (const f of fs.readdirSync(dossier).filter(x => x !== 'index.js' && x.endsWith('.js'))) {
    const { module: mod } = chargerModule('js/data/3e/' + f, { tirages: 1 });
    const qs = (mod.evaluation && mod.evaluation.questions) || [];
    if (!qs.length) continue;
    const pts = qs.map(q => q.points || 0);
    const total = pts.reduce((a, b) => a + b, 0);
    if (total !== 10) {
      fautes.push(mod.id + ' : total ' + total + ' (bareme [' + pts.join(', ') + '])');
    }
    for (const [i, p] of pts.entries()) {
      assert.ok(Number.isInteger(p) && p >= 1,
        mod.id + ' : la question ' + (i + 1) + ' vaut ' + p + ' point(s) — un entier positif est attendu');
    }
  }
  assert.deepStrictEqual(fautes, [],
    'devoir(s) note(s) hors du bareme sur 10 :\n  ' + fautes.join('\n  '));
});

test('les abreviations ordinales de troisieme suivent l usage francais', () => {
  /* POURQUOI CE TEST. L'abreviation francaise correcte est 1re, 2e, 3e — et
     jamais 1ere, 1ère, 2eme, 2ème. Les 36 chapitres de sixieme, cinquieme et
     quatrieme n'en portaient AUCUNE forme fautive ; la troisieme en portait
     douze, jusqu'au 2026-09-13, dont une a cote d'un « 2e » correct dans la
     meme phrase de 3e-systemes.

     POURQUOI CA COMPTE DANS CE LIVRE PARTICULIER. Un manuel scolaire est lu
     par des enseignants de francais autant que de mathematiques, et il sert de
     modele d'ecriture a des eleves de troisieme. Une abreviation fautive
     repetee y est un defaut de fabrication visible, pas une coquette.

     Le defaut est invisible a la relecture parce qu'il est BANAL : « 1ère »
     est la forme que tout le monde ecrit dans un courriel, et l'oeil ne la
     signale pas. Seule une recherche systematique la trouve.

     PORTEE. Le niveau entier, edition eleve et fiches professeur. */
  const fs = require('fs');
  const path = require('path');
  const { RACINE } = require('../extract.js');
  const fautes = [];

  // Les formes fautives, ancrees sur un chiffre pour ne pas attraper les mots
  // ordinaires (« deuxieme », « systeme », « theoreme »).
  const FAUTIF = /\d\s*(?:ère|ere|ème|eme|ieme|ième)\b/g;

  for (const dossier of ['js/data/3e', 'js/data/prof/3e']) {
    const complet = path.join(RACINE, dossier);
    if (!fs.existsSync(complet)) continue;
    for (const f of fs.readdirSync(complet).filter(x => x !== 'index.js' && x.endsWith('.js'))) {
      const texte = fs.readFileSync(path.join(complet, f), 'utf8');
      for (const m of texte.matchAll(FAUTIF)) {
        const ligne = texte.slice(0, m.index).split('\n').length;
        fautes.push(dossier + '/' + f + ':' + ligne + ' : « ' + m[0] + ' »');
      }
    }
  }
  assert.deepStrictEqual(fautes, [],
    'abreviation(s) ordinale(s) fautive(s) — ecrire 1re, 2e, 3e :\n  ' + fautes.join('\n  '));
});

test('systemes : les trois vignettes montrent reellement trois cas differents', () => {
  /* CE QUE CE TEST ATTRAPE. Ce schema n'illustre pas un calcul, il fait une
     CLASSIFICATION : il affirme qu'il existe exactement trois positions pour
     deux droites du plan, et que les trois vignettes en montrent une chacune.
     Cette affirmation est fausse des qu'un trait est pose a vue — deux droites
     annoncees paralleles qui se coupent hors du cadre restent parfaitement
     credibles a la relecture, et le schema enseigne alors le contraire de son
     texte.

     On mesure donc, pour chaque vignette, la PENTE REELLE des deux traits en
     pixels, et on verifie :
       - vignette 1 : pentes differentes, donc secantes, et le point marque est
         bien sur les deux droites ;
       - vignette 2 : pentes egales et droites DISTINCTES ;
       - vignette 3 : pentes egales et droites CONFONDUES (a l'epaisseur du
         decalage de lisibilite pres).

     On verifie en plus que le cadrage est identique d'une vignette a l'autre :
     sans cela, comparer les trois positions n'aurait pas de sens. */
  const d = parTitre('3e-systemes.js', 'aucune solution');
  const tous = lignesToutes(d.svg);
  const axes = tous.filter(l => l.cls === 'axis');
  const droites = tous.filter(l => l.cls === 'curve-main' || l.cls === 'graph-line');
  assert.strictEqual(axes.length, 6, 'deux axes par vignette');
  assert.strictEqual(droites.length, 6, 'deux droites par vignette');

  // Les trois vignettes, decoupees par l'abscisse de leur axe horizontal.
  const horiz = axes.filter(l => l.y1 === l.y2).sort((a, b) => a.x1 - b.x1);
  assert.strictEqual(horiz.length, 3, 'un axe horizontal par vignette');
  for (const a of horiz) {
    assert.strictEqual(a.y1, horiz[0].y1,
      'les trois axes horizontaux doivent etre a la MEME hauteur : sinon les ' +
      'trois vignettes ne se comparent pas');
    assert.strictEqual(a.x2 - a.x1, horiz[0].x2 - horiz[0].x1,
      'les trois vignettes doivent avoir la meme largeur de cadre');
  }

  // Chaque droite est rattachee a la vignette dont le cadre la contient.
  const vignettes = horiz.map(a => droites.filter(l => l.x1 >= a.x1 - 1 && l.x2 <= a.x2 + 1));
  vignettes.forEach((v, i) =>
    assert.strictEqual(v.length, 2, 'vignette ' + (i + 1) + ' : deux droites attendues, ' + v.length + ' trouvees'));

  const pente = l => (l.y1 - l.y2) / (l.x2 - l.x1);
  // Ordonnee a l'origine du trait, dans le repere de l'ecran.
  const ordonnee = l => l.y1 + pente(l) * l.x1;

  // --- Vignette 1 : SECANTES, et le point marque est leur intersection.
  const [p1, p2] = vignettes[0].map(pente);
  assert.ok(Math.abs(p1 - p2) > 0.2,
    'vignette 1 : les deux droites doivent etre nettement secantes, ' +
    'or leurs pentes valent ' + p1.toFixed(3) + ' et ' + p2.toFixed(3));
  const pts = cercles(d.svg);
  assert.strictEqual(pts.length, 1, 'un seul point marque, celui de l intersection');
  for (const l of vignettes[0]) {
    const num = Math.abs((l.x2 - l.x1) * (l.y1 - pts[0][1]) - (l.y2 - l.y1) * (l.x1 - pts[0][0]));
    const dist = num / Math.hypot(l.x2 - l.x1, l.y2 - l.y1);
    assert.ok(dist < 0.6,
      'le point marque doit etre sur les DEUX droites : il est a ' +
      dist.toFixed(3) + ' px de l une d elles');
  }

  // --- Vignette 2 : PARALLELES et DISTINCTES.
  const [q1, q2] = vignettes[1].map(pente);
  assert.ok(Math.abs(q1 - q2) < 1e-9,
    'vignette 2 : les deux droites doivent avoir la MEME pente, ' +
    'or elles valent ' + q1 + ' et ' + q2);
  const ecart2 = Math.abs(ordonnee(vignettes[1][0]) - ordonnee(vignettes[1][1]));
  assert.ok(ecart2 > 20,
    'vignette 2 : les deux paralleles doivent etre VISIBLEMENT distinctes, ' +
    'or elles ne different que de ' + ecart2.toFixed(2) + ' px');

  // --- Vignette 3 : CONFONDUES.
  const [r1, r2] = vignettes[2].map(pente);
  assert.ok(Math.abs(r1 - r2) < 1e-9,
    'vignette 3 : les deux droites doivent avoir la meme pente, ' +
    'or elles valent ' + r1 + ' et ' + r2);
  const ecart3 = Math.abs(ordonnee(vignettes[2][0]) - ordonnee(vignettes[2][1]));
  assert.ok(ecart3 > 0 && ecart3 < 8,
    'vignette 3 : les deux droites doivent se LIRE comme confondues — un ' +
    'leger decalage les rend visibles toutes les deux, mais au-dela elles ' +
    'passent pour paralleles distinctes. Ecart mesure : ' + ecart3.toFixed(2) + ' px');
  assert.ok(ecart3 < ecart2 / 4,
    'le decalage des droites confondues doit etre sans commune mesure avec ' +
    'l ecart des paralleles, sans quoi les vignettes 2 et 3 se ressemblent');

  /* LA CLASSIFICATION EST EXACTE, verifiee sur les systemes eux-memes et non
     sur le dessin : determinant non nul = une solution ; determinant nul avec
     constantes non proportionnelles = aucune ; determinant nul avec constantes
     proportionnelles = une infinite. */
  const SYS = [
    { s: [[2, 1, 7], [1, -1, 2]], cas: 'une' },
    { s: [[1, 1, 2], [1, 1, 5]], cas: 'aucune' },
    { s: [[1, 1, 3], [2, 2, 6]], cas: 'infinite' }
  ];
  for (const { s, cas } of SYS) {
    const [[a1, b1, c1], [a2, b2, c2]] = s;
    const det = a1 * b2 - a2 * b1;
    if (cas === 'une') {
      assert.notStrictEqual(det, 0, 'le premier systeme doit avoir un determinant non nul');
      assert.strictEqual((c1 * b2 - c2 * b1) / det, 3, 'la solution doit etre x = 3');
      assert.strictEqual((a1 * c2 - a2 * c1) / det, 1, 'la solution doit etre y = 1');
    } else {
      assert.strictEqual(det, 0, 'les deux autres systemes doivent avoir un determinant nul');
      const proportionnel = a1 * c2 === a2 * c1 && b1 * c2 === b2 * c1;
      assert.strictEqual(proportionnel, cas === 'infinite',
        'le cas « ' + cas + ' » se distingue par la proportionnalite des constantes');
    }
  }
});
