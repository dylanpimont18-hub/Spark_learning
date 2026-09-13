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
