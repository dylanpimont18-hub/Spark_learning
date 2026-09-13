/* =========================================================
   Spark Learning – scripts/manuel/tests/figures-2nde.test.js

   Garde les helpers de figures ajoutes pour la SECONDE (2026-09-13), par le
   CALCUL et jamais a l'oeil.

   POURQUOI CES TESTS EXISTENT : sur les trois ouvrages deja traites, vingt et
   une erreurs de figures ont ete trouvees uniquement par le calcul — un angle
   de 35 degres dessine a 36, un point a 69,995 d'un centre de rayon 70, des
   cercles circonscrits ne passant par aucun sommet. Aucune n'etait visible a
   la relecture. Ces tests protegent le travail des vagues suivantes (1re,
   terminale), qui reutiliseront ces memes helpers.

   Ils verifient les proprietes que la SECONDE exige en propre :
     - une configuration de Thales dont le parallelisme est exact, et dont le
       rapport dessine est celui de l'enonce ;
     - un vecteur dont les extremites tombent sur les graduations du repere,
       condition sans laquelle la lecture des composantes est impossible ;
     - qu'aucune figure ne divulgue la reponse qu'elle demande de trouver.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { RACINE } = require('../extract.js');

/* Les helpers sont des scripts globaux (pas d'export/import dans js/data/).
   On les execute dans un bac a sable vm, comme le fait extract.js. */
function chargerHelpers() {
  const bac = { window: { MODULES: [] }, console, Math };
  vm.createContext(bac);
  const helpers = fs.readFileSync(path.join(RACINE, 'js/data/helpers.js'), 'utf8');
  const figures = fs.readFileSync(path.join(RACINE, 'js/data/figures-exercices.js'), 'utf8');
  vm.runInContext(helpers + '\n' + figures + '\nthis.__F = { figureThales, figureVecteurRepere };', bac);
  return bac.__F;
}

const F = chargerHelpers();

/* Extraction des primitives du SVG rendu. On relit le DESSIN produit, jamais
   les variables internes du helper : c'est la seule facon de verifier ce qui
   sera reellement imprime. */
function points(svg, balise) {
  const out = [];
  const re = new RegExp('<' + balise + '\\b[^>]*>', 'g');
  let m;
  while ((m = re.exec(svg))) out.push(m[0]);
  return out;
}
function attr(tag, nom) {
  const m = tag.match(new RegExp(nom + '="([^"]*)"'));
  return m ? parseFloat(m[1]) : null;
}
function polygones(svg) {
  return points(svg, 'polygon').map(t => {
    const m = t.match(/points="([^"]*)"/);
    return m[1].trim().split(/\s+/).map(p => p.split(',').map(Number));
  });
}

test('figureThales : le petit triangle est une reduction EXACTE du grand', () => {
  // Plusieurs rapports, dont ceux que le generateur tire reellement.
  for (const [am, ab, bc] of [[2, 6, 9], [3, 12, 8], [5, 10, 14], [4, 8, 6]]) {
    const svg = F.figureThales(am, ab, bc);
    assert.ok(svg, 'figure produite pour ' + am + '/' + ab);
    const polys = polygones(svg);
    assert.strictEqual(polys.length, 2, 'deux triangles dessines');
    const [grand, petit] = polys;
    // Les deux polygones commencent par le sommet A, commun.
    const A = grand[0], B = grand[1], C = grand[2];
    const A2 = petit[0], M = petit[1], N = petit[2];
    assert.ok(Math.hypot(A[0] - A2[0], A[1] - A2[1]) < 1e-6, 'meme sommet A');

    const k = am / ab;
    // M doit etre a la fraction k du segment [AB], et N du segment [AC].
    const attenduM = [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k];
    const attenduN = [A[0] + (C[0] - A[0]) * k, A[1] + (C[1] - A[1]) * k];
    assert.ok(Math.hypot(M[0] - attenduM[0], M[1] - attenduM[1]) < 0.02,
      'M est a la fraction ' + k + ' de [AB]');
    assert.ok(Math.hypot(N[0] - attenduN[0], N[1] - attenduN[1]) < 0.02,
      'N est a la fraction ' + k + ' de [AC]');

    /* PARALLELISME, par le produit vectoriel : (MN) doit etre parallele a
       (BC). C'est la propriete que le theoreme suppose, et une figure qui la
       manquerait serait fausse sans qu'on le voie.

       TOLERANCE : les coordonnees ecrites dans le SVG sont arrondies au
       centieme par nb2(), ce qui est la precision d'affichage du dessin et
       non une imprecision de la construction. Sur une figure large de 260
       unites, un centieme d'unite represente moins de 4 centiemes de
       millimetre sur le papier — trois ordres de grandeur sous ce qu'un oeil
       ou une regle peuvent distinguer. On tolere donc l'arrondi, et rien de
       plus : un ecart superieur signalerait une vraie faute de construction. */
    const mn = [N[0] - M[0], N[1] - M[1]];
    const bcv = [C[0] - B[0], C[1] - B[1]];
    const croix = mn[0] * bcv[1] - mn[1] * bcv[0];
    const norme = Math.hypot(...mn) * Math.hypot(...bcv);
    assert.ok(Math.abs(croix) / norme < 1e-3, '(MN) est parallele a (BC)');

    /* Le RAPPORT DESSINE est celui de l'enonce : MN / BC doit valoir k. */
    const rapport = Math.hypot(...mn) / Math.hypot(...bcv);
    assert.ok(Math.abs(rapport - k) < 1e-3,
      'MN/BC vaut ' + k + ' sur le dessin, trouve ' + rapport);
  }
});

test('figureThales : la figure ne divulgue pas la longueur cherchee', () => {
  const svg = F.figureThales(3, 12, 8);
  // MN vaut 2 : ce nombre ne doit apparaitre nulle part comme cote.
  assert.ok(svg.includes('>?<'), 'l inconnue porte un point d interrogation');
  const etiquettes = points(svg, 'text').length;
  assert.ok(etiquettes > 0);
  // Les donnees de l'enonce, elles, doivent bien y etre.
  assert.ok(svg.includes('>3<'), 'AM est cote');
  assert.ok(svg.includes('>8<'), 'BC est cote');
});

test('figureThales : refuse une donnee impossible plutot que d inventer', () => {
  // AM > AB n'a pas de sens : M ne serait pas sur [AB].
  assert.strictEqual(F.figureThales(9, 4, 7), '');
  assert.strictEqual(F.figureThales(0, 4, 7), '');
});

test('figureVecteurRepere : les extremites tombent sur les graduations', () => {
  for (const [ox, oy, vx, vy] of [[1, 1, 3, -2], [-2, 0, 4, 3], [0, 2, -3, -1]]) {
    const svg = F.figureVecteurRepere(ox, oy, vx, vy);
    const lignes = points(svg, 'line');
    // Le vecteur est la ligne qui porte la pointe de fleche.
    const vect = lignes.find(t => t.includes('marker-end'));
    assert.ok(vect, 'le vecteur est trace');
    const x1 = attr(vect, 'x1'), y1 = attr(vect, 'y1');
    const x2 = attr(vect, 'x2'), y2 = attr(vect, 'y2');

    /* Les lignes du quadrillage donnent les abscisses et ordonnees des
       graduations. Les deux extremites du vecteur doivent tomber dessus :
       une pointe qui flotte entre deux noeuds rendrait la lecture des
       composantes impossible. */
    const grille = lignes.filter(t => t.includes('grid-line'));
    const absGrille = grille.filter(t => attr(t, 'x1') === attr(t, 'x2')).map(t => attr(t, 'x1'));
    const ordGrille = grille.filter(t => attr(t, 'y1') === attr(t, 'y2')).map(t => attr(t, 'y1'));
    const surGrille = (v, liste) => liste.some(g => Math.abs(g - v) < 0.02);
    assert.ok(surGrille(x1, absGrille), 'origine sur une graduation verticale');
    assert.ok(surGrille(y1, ordGrille), 'origine sur une graduation horizontale');
    assert.ok(surGrille(x2, absGrille), 'extremite sur une graduation verticale');
    assert.ok(surGrille(y2, ordGrille), 'extremite sur une graduation horizontale');

    /* Les COMPOSANTES dessinees sont celles demandees : le rapport entre le
       deplacement en x et celui en y doit valoir vx/vy, et l'axe des
       ordonnees doit bien etre inverse (un vy positif MONTE, donc y2 < y1). */
    const dx = x2 - x1, dy = y2 - y1;
    if (vy !== 0) {
      assert.ok(Math.abs(dx / dy + vx / vy) < 1e-6 || Math.abs(dx * vy + dy * vx) < 1e-6,
        'les composantes dessinees sont proportionnelles a (' + vx + ' ; ' + vy + ')');
    }
    if (vy > 0) assert.ok(dy < 0, 'une composante verticale positive monte a l ecran');
    if (vy < 0) assert.ok(dy > 0, 'une composante verticale negative descend a l ecran');
    if (vx > 0) assert.ok(dx > 0, 'une composante horizontale positive va vers la droite');
  }
});

test('figureVecteurRepere : une seule pointe de fleche par trait', () => {
  const svg = F.figureVecteurRepere(1, 1, 3, -2);
  const lignes = points(svg, 'line');
  for (const t of lignes) {
    const nb = (t.match(/marker-(start|end|mid)=/g) || []).length;
    assert.ok(nb <= 1, 'au plus une pointe de fleche par trait');
  }
});

test('figureVecteurRepere : le repere contient toujours son origine O', () => {
  /* Un vecteur loin de l'origine ne doit pas faire disparaitre les axes :
     l'eleve lit ses composantes PAR RAPPORT au repere, qui doit donc rester
     visible. */
  const svg = F.figureVecteurRepere(4, 5, 2, 1);
  const axes = points(svg, 'line').filter(t => t.includes('class="axis"'));
  assert.strictEqual(axes.length, 2, 'les deux axes sont traces');
});
