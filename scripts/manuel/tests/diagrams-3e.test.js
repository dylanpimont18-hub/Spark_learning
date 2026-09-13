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
