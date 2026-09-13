/* =========================================================
   Spark Learning – scripts/manuel/tests/figures-4e.test.js
   Les figures parametriques ajoutees pour la QUATRIEME (2026-09-13).

   POURQUOI UN FICHIER A PART plutot que des tests ajoutes a
   figures-exercices.test.js : celui-la verifie une propriete unique, « toute
   valeur cotee figure aussi dans l'enonce ». Les figures de quatrieme demandent
   deux verifications de plus, d'une autre nature :

     1. L'ANGLE DROIT EST-IL REELLEMENT DROIT ? On le teste au PRODUIT SCALAIRE
        des deux cotes, jamais a l'oeil. Onze erreurs de figure ont ete trouvees
        sur la sixieme par le seul calcul — un angle de 35 degres dessine a 36,
        un point place a 7,803 au lieu de 7,83 — et aucune n'etait visible a la
        relecture.

     2. LA FIGURE SE TAIT-ELLE SUR CE QU'ELLE DEMANDE ? Une figure qui cote la
        reponse ne pose plus de question. Pire, une figure qui cote une donnee
        ABSENTE de l'enonce permet de contourner l'exercice : c'est le defaut
        trouve le 2026-09-13 sur le chapitre cosinus, ou le cote oppose etait
        cote alors que l'enonce ne le donnait pas, si bien qu'un eleve pouvait
        conclure par Pythagore sans employer le cosinus. Ce test-la garde le
        correctif.

   TOLERANCES. nb2() arrondit chaque coordonnee du SVG a 0,01 unite de viewBox.
   Sur un cote de l'ordre de 100 unites, l'erreur relative est donc bornee vers
   2e-4. On verifie a 5e-4 : exiger la precision machine apres un arrondi a 0,01
   reviendrait a tester l'arrondi, pas la geometrie.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chargerModule, RACINE } = require('../extract.js');

const TOL = 5e-4;

/* Contexte minimal donnant acces aux helpers hors navigateur. */
function bacAFigures() {
  const bac = { window: { MODULES: [] }, console, Math };
  vm.createContext(bac);
  const lire = (p) => fs.readFileSync(path.join(RACINE, p), 'utf8');
  vm.runInContext(lire('js/data/helpers.js') + '\n' + lire('js/data/figures-exercices.js'), bac);
  return bac;
}
const BAC = bacAFigures();
const appeler = (expr) => vm.runInContext(expr, BAC);

function polygone(svg) {
  const m = /<polygon[^>]*points="([^"]+)"/.exec(svg);
  return m ? m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)) : null;
}
function etiquettes(svg) {
  return [...svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1].trim());
}
// Nombres d'une chaine, virgule francaise {,} comprise.
function nombres(t) {
  return (String(t).replace(/\{,\}/g, '.').match(/\d+(?:\.\d+)?/g) || []).map(Number);
}
const dist = (p, q) => Math.hypot(q[0] - p[0], q[1] - p[1]);
// Cosinus de l'angle entre les vecteurs sommet->a et sommet->b.
function cosAngle(sommet, a, b) {
  const u = [a[0] - sommet[0], a[1] - sommet[1]];
  const v = [b[0] - sommet[0], b[1] - sommet[1]];
  return (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(u[0], u[1]) * Math.hypot(v[0], v[1]));
}

const TRIPLETS = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29], [12, 16, 20]];

test('figureTriangleRectangle : l angle droit est droit au produit scalaire', () => {
  for (const [a, b, c] of TRIPLETS) {
    for (const inc of ['hypotenuse', 'vertical', 'horizontal']) {
      const svg = appeler(`figureTriangleRectangle(${a}, ${b}, ${c}, {inconnu:"${inc}"})`);
      const P = polygone(svg);
      assert.ok(P, `pas de polygone pour ${a}-${b}-${c}`);
      // P[0] est le sommet de l'angle droit, par construction du helper.
      const cos = Math.abs(cosAngle(P[0], P[1], P[2]));
      assert.ok(cos < TOL, `triangle ${a}-${b}-${c} (${inc}) : cos = ${cos}, attendu 0`);
    }
  }
});

test('figureTriangleRectangle : l hypotenuse dessinee est le plus long cote', () => {
  for (const [a, b, c] of TRIPLETS) {
    const svg = appeler(`figureTriangleRectangle(${a}, ${b}, ${c})`);
    const P = polygone(svg);
    const hyp = dist(P[1], P[2]);
    assert.ok(hyp > dist(P[0], P[1]) && hyp > dist(P[0], P[2]),
      `triangle ${a}-${b}-${c} : l hypotenuse n est pas le plus long cote du dessin`);
  }
});

test('figureTriangleRectangle : le rapport des cotes dessines est celui des valeurs', () => {
  for (const [a, b, c] of TRIPLETS) {
    const svg = appeler(`figureTriangleRectangle(${a}, ${b}, ${c})`);
    // Une figure comprimee le DECLARE : on ne lui demande pas d etre a l echelle.
    if (/non a l echelle/.test(svg)) continue;
    const P = polygone(svg);
    const dessine = dist(P[0], P[1]) / dist(P[0], P[2]);
    assert.ok(Math.abs(dessine - a / b) / (a / b) < TOL,
      `triangle ${a}-${b}-${c} : rapport dessine ${dessine}, attendu ${a / b}`);
  }
});

test('figureTriangleRectangle : un seul cote porte le point d interrogation', () => {
  for (const inc of ['hypotenuse', 'vertical', 'horizontal']) {
    const svg = appeler(`figureTriangleRectangle(6, 8, 10, {inconnu:"${inc}"})`);
    const pts = etiquettes(svg).filter(t => t === '?');
    assert.strictEqual(pts.length, 1, `inconnu=${inc} : ${pts.length} point(s) d interrogation`);
  }
});

test('figureTriangleRectangle : la valeur cherchee n est jamais cotee', () => {
  for (const [a, b, c] of TRIPLETS) {
    const cas = [['hypotenuse', c], ['vertical', b], ['horizontal', a]];
    for (const [inc, cachee] of cas) {
      const svg = appeler(`figureTriangleRectangle(${a}, ${b}, ${c}, {inconnu:"${inc}"})`);
      const cotees = etiquettes(svg).flatMap(nombres);
      // La valeur cachee peut coincider avec une autre donnee (triangle
      // isocele) : on ne verifie que les triplets ou elle est unique.
      if ([a, b, c].filter(v => v === cachee).length > 1) continue;
      assert.ok(!cotees.some(v => Math.abs(v - cachee) < 1e-9),
        `triangle ${a}-${b}-${c} (${inc}) : la figure cote la reponse ${cachee}`);
    }
  }
});

test('figureTriangleRectangle : l option masquer laisse le cote sans etiquette', () => {
  /* Garde le correctif du 2026-09-13. Sans cette option, la figure du chapitre
     cosinus cotait le cote oppose, que l'enonce ne donne pas : l'eleve pouvait
     conclure par Pythagore sans employer le cosinus. */
  const svg = appeler('figureTriangleRectangle(6, 8, 10, {inconnu:"hypotenuse", masquer:["vertical"]})');
  const cotees = etiquettes(svg).flatMap(nombres);
  assert.ok(!cotees.includes(8), 'le cote masque est encore cote');
  assert.ok(cotees.includes(6), 'le cote adjacent devrait rester cote');
  // Le cote masque reste DESSINE : il existe, il se tait seulement.
  const P = polygone(svg);
  assert.ok(dist(P[0], P[2]) > 1, 'le cote masque n est plus trace');
  // Aucune balise <text> vide : un noeud TikZ sans contenu poserait quand meme
  // sa reserve blanche et effacerait le trait dessous.
  assert.ok(!/<text[^>]*><\/text>/.test(svg), 'une balise text vide subsiste');
});

test('figureTriangleTroisCotes : les trois cotes dessines sont proportionnels a l enonce', () => {
  for (const [a, b, c] of [[7, 24, 25], [5, 7, 9], [6, 8, 10], [4, 5, 6], [9, 12, 15], [10, 10, 12]]) {
    const svg = appeler(`figureTriangleTroisCotes(${a}, ${b}, ${c})`);
    const P = polygone(svg);
    const tri = [a, b, c].slice().sort((x, y) => y - x);
    // Le helper pose le plus grand cote en base : AB, puis AC, puis BC.
    const dessinees = [dist(P[0], P[1]), dist(P[0], P[2]), dist(P[1], P[2])];
    const k = dessinees[0] / tri[0];
    tri.forEach((val, i) => {
      assert.ok(Math.abs(dessinees[i] / val - k) / k < TOL,
        `cotes ${a},${b},${c} : le cote ${val} est dessine a ${(dessinees[i] / k).toFixed(4)}`);
    });
  }
});

test('figureTriangleTroisCotes : un triplet pythagoricien sort reellement rectangle', () => {
  /* C'est l'enjeu de la reciproque : l'eleve doit pouvoir poser son equerre sur
     la figure et constater que le calcul disait vrai. */
  for (const [a, b, c] of [[3, 4, 5], [7, 24, 25], [6, 8, 10], [8, 15, 17]]) {
    const svg = appeler(`figureTriangleTroisCotes(${a}, ${b}, ${c})`);
    const P = polygone(svg);
    // Le sommet oppose a la base (le plus grand cote) porte l angle droit.
    const cos = Math.abs(cosAngle(P[2], P[0], P[1]));
    assert.ok(cos < TOL, `triplet ${a},${b},${c} : dessine non rectangle (cos = ${cos})`);
  }
});

test('figureTriangleTroisCotes : un triplet NON pythagoricien ne sort pas rectangle', () => {
  for (const [a, b, c] of [[5, 7, 9], [4, 5, 6], [10, 10, 12], [6, 7, 8]]) {
    const svg = appeler(`figureTriangleTroisCotes(${a}, ${b}, ${c})`);
    const P = polygone(svg);
    const cos = Math.abs(cosAngle(P[2], P[0], P[1]));
    assert.ok(cos > 1e-3, `triplet ${a},${b},${c} : dessine rectangle alors qu il ne l est pas`);
  }
});

test('figureTriangleTroisCotes : aucun angle droit n est code', () => {
  /* La figure ne doit pas repondre a la question qu'elle pose. Coder l'angle
     droit sur un triplet pythagoricien donnerait la reponse de l'exercice de
     reciproque. */
  for (const [a, b, c] of [[3, 4, 5], [7, 24, 25], [5, 7, 9]]) {
    const svg = appeler(`figureTriangleTroisCotes(${a}, ${b}, ${c})`);
    assert.ok(!/<path class="grid-line"/.test(svg),
      `cotes ${a},${b},${c} : un angle droit est code sur la figure`);
  }
});

test('figureTriangleTroisCotes : un triplet qui ne ferme aucun triangle ne rend pas de figure', () => {
  // Inegalite triangulaire violee : mieux vaut aucune figure qu une figure
  // inventee. schema.js traite la chaine vide comme une figure absente.
  assert.strictEqual(appeler('figureTriangleTroisCotes(1, 2, 9)'), '');
  assert.strictEqual(appeler('figureTriangleTroisCotes(3, 4, 20)'), '');
});

test('les figures de quatrieme ne debordent jamais de leur viewBox', () => {
  /* Un element hors cadre s'imprime PAR-DESSUS le texte voisin, et le
     convertisseur fige la boite TikZ sur le viewBox : LaTeX ne signale aucun
     Overfull. Douze figures sur quatre-vingt-neuf debordaient ainsi sur la
     sixieme, jusqu'a 3,9 mm, sans le moindre avertissement. */
  const appels = [];
  for (const [a, b, c] of TRIPLETS) {
    for (const inc of ['hypotenuse', 'vertical', 'horizontal']) {
      appels.push(`figureTriangleRectangle(${a}, ${b}, ${c}, {inconnu:"${inc}"})`);
    }
    appels.push(`figureTriangleRectangle(${a}, ${b}, ${c}, {inconnu:"hypotenuse", masquer:["vertical"]})`);
    appels.push(`figureTriangleTroisCotes(${a}, ${b}, ${c})`);
  }
  for (const appel of appels) {
    const svg = appeler(appel);
    if (!svg) continue;
    const vb = /viewBox="([^"]+)"/.exec(svg);
    assert.ok(vb, 'figure sans viewBox : elle serait refusee par le convertisseur');
    const [vx, vy, vw, vh] = vb[1].trim().split(/\s+/).map(Number);
    const xs = [], ys = [];
    for (const m of svg.matchAll(/\b(?:x|cx|x1|x2)="(-?[\d.]+)"/g)) xs.push(Number(m[1]));
    for (const m of svg.matchAll(/\b(?:y|cy|y1|y2)="(-?[\d.]+)"/g)) ys.push(Number(m[1]));
    for (const p of polygone(svg) || []) { xs.push(p[0]); ys.push(p[1]); }
    assert.ok(Math.min(...xs) >= vx - 0.5 && Math.max(...xs) <= vx + vw + 0.5,
      `${appel} : debordement horizontal (${Math.min(...xs)} a ${Math.max(...xs)} pour ${vx}..${vx + vw})`);
    assert.ok(Math.min(...ys) >= vy - 0.5 && Math.max(...ys) <= vy + vh + 0.5,
      `${appel} : debordement vertical (${Math.min(...ys)} a ${Math.max(...ys)} pour ${vy}..${vy + vh})`);
  }
});

/* --- Les figures telles qu'elles sortent des generateurs reels --------- */

test('les figures tirees par les modules de 4e sont fideles a leur enonce', () => {
  /* Le test unitaire ci-dessus verifie les helpers ; celui-ci verifie leur
     EMPLOI. C'est lui qui a pris le defaut du chapitre cosinus : le helper etait
     juste, l'appel lui passait une donnee que l'enonce ne fournissait pas. */
  const modules = [
    ['js/data/4e/4e-pythagore.js', 20260818],
    ['js/data/4e/4e-cosinus.js', 20260824]
  ];
  for (const [fichier, graine] of modules) {
    const r = chargerModule(fichier, { graine, tirages: 60, repetitionsMax: Infinity });
    let vues = 0;
    r.exercices.forEach((ex, i) => {
      if (!ex.figure) return;
      vues++;
      const svg = typeof ex.figure === 'string' ? ex.figure : String(ex.figure.svg || '');
      const dansEnonce = nombres(ex.statement);
      for (const t of etiquettes(svg)) {
        for (const v of nombres(t)) {
          assert.ok(dansEnonce.some(x => Math.abs(x - v) < 1e-6),
            `${fichier} tirage ${i} : la figure cote ${v}, absent de l enonce [${dansEnonce.join(', ')}]`);
        }
      }
    });
    assert.ok(vues > 0, fichier + ' : aucune figure d exercice tiree');
  }
});

test('aucune figure d exercice de 4e ne cote sa propre reponse', () => {
  for (const [fichier, graine] of [['js/data/4e/4e-pythagore.js', 20260818], ['js/data/4e/4e-cosinus.js', 20260824]]) {
    const r = chargerModule(fichier, { graine, tirages: 60, repetitionsMax: Infinity });
    r.exercices.forEach((ex, i) => {
      if (!ex.figure || typeof ex.answer !== 'number') return;
      const svg = typeof ex.figure === 'string' ? ex.figure : String(ex.figure.svg || '');
      const cotees = etiquettes(svg).flatMap(nombres);
      const dansEnonce = nombres(ex.statement);
      // Si la reponse figure deja dans l'enonce, la coter ne divulgue rien.
      if (dansEnonce.some(x => Math.abs(x - ex.answer) < 1e-6)) return;
      assert.ok(!cotees.some(v => Math.abs(v - ex.answer) < 1e-6),
        `${fichier} tirage ${i} : la figure cote la reponse ${ex.answer}`);
    });
  }
});
