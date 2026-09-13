/* =========================================================
   Spark Learning – scripts/manuel/tests/figures-3e.test.js
   Les FIGURES D'EXERCICE de la troisieme, produites par les helpers
   parametriques ajoutes a js/data/figures-exercices.js le 2026-09-13
   (bloc « HELPERS AJOUTES POUR LA TROISIEME »).

   POURQUOI CE FICHIER. La troisieme introduit un type de propriete que les
   deux vagues precedentes n'avaient pas a dessiner : non plus « cet angle est
   droit » (quatrieme), mais « ces deux droites sont PARALLELES » et « ce
   rapport vaut exactement k ». Ces deux proprietes-la ont une particularite
   redoutable : elles sont INDETECTABLES A L'OEIL. Un parallelisme faux de deux
   degres se relit sans broncher, et un rapport d'homothetie de 1,9 dessine
   pour 2 annonce passe inapercu. Sur les trois ouvrages deja traites, vingt et
   une erreurs de figures ont ete trouvees UNIQUEMENT par le calcul.

   CE QU'ON VERIFIE, ET POURQUOI :

     1. THALES — les deux paralleles le sont vraiment, au produit vectoriel, et
        le rapport MESURE sur le dessin vaut le rapport OA'/OA annonce. Une
        configuration de Thales dont les droites ne sont pas paralleles est une
        figure qui contredit le theoreme qu'elle illustre.

     2. THALES EN PAPILLON — en plus du parallelisme, O doit etre REELLEMENT
        entre les deux paralleles (produit scalaire OA.OM negatif). C'est toute
        la difference entre les deux configurations, et la dessiner a moitie
        reviendrait a dessiner la configuration emboitee.

     3. HOMOTHETIE — pour chacun des trois sommets, O, M et M' sont alignes,
        le rapport des distances vaut |k|, et le SIGNE du produit scalaire suit
        le signe de k. Ce dernier point est le coeur du chapitre : un rapport
        negatif place l'image de l'autre cote du centre, et c'est precisement
        ce que les eleves ne comprennent jamais. Une figure qui se tromperait
        de cote enseignerait l'inverse de la lecon.

     4. TRIGONOMETRIE — l'angle aigu DESSINE vaut l'angle annonce, l'angle
        droit vaut 90 degres, et le cosinus lu sur le dessin (adjacent sur
        hypotenuse) vaut le cosinus de l'angle. Un eleve de troisieme verifie
        au rapporteur.

     5. DEBORDEMENT — aucun element ne sort du viewBox. Le convertisseur fige
        la boite TikZ sur le viewBox (\useasboundingbox), donc LaTeX ne signale
        AUCUN Overfull et l'element hors cadre s'imprime par-dessus le texte
        voisin, en silence. C'est l'exigence 8 du cahier des charges.

   TOLERANCES, et pourquoi elles ne sont pas a 1e-9. Les coordonnees sont
   ecrites dans le SVG arrondies a deux decimales (nb2). Sur des longueurs de
   l'ordre de 100 unites de viewBox, cet arrondi seul produit un ecart d'environ
   2,6e-4 en sinus d'angle, soit 0,015 degre — mesure le 2026-09-13. Tester a
   1e-9 reviendrait donc a tester l'arrondi d'ecriture, pas la geometrie. Les
   seuils ci-dessous sont cales un ordre de grandeur au-dessus de cet arrondi
   et trois ordres en dessous de tout defaut visible sur le papier : ils
   attrapent une construction fausse, jamais une decimale tronquee.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { RACINE } = require('../extract.js');

/* Seuils. TOL_PARALLELE porte sur le SINUS de l'ecart angulaire : 2e-4
   correspond a 0,011 degre, soit dix fois l'arrondi d'ecriture. */
const TOL_PARALLELE = 2e-4;
const TOL_RAPPORT = 3e-3;    // sur un rapport de l'ordre de 1 a 3
const TOL_ANGLE = 0.02;      // degres
const TOL_COS = 1e-3;

/* Les helpers sont un script global (pas de module.exports : js/data/ n'a pas
   de bundler). On les charge dans un bac a sable vm, comme le fait extract.js,
   en fournissant le seul helper exterieur dont ils se servent, fr(). */
function chargerHelpers() {
  const bac = {
    console, Math, isFinite, Number, String, Object, Array, RegExp,
    // fr() de js/data/helpers.js, reduit a ce que les figures en utilisent :
    // la virgule francaise a accolades.
    fr: (v, d) => {
      const s = (d === undefined ? String(v) : Number(v).toFixed(d));
      return s.replace('.', '{' + ',' + '}');
    }
  };
  vm.createContext(bac);
  const chemin = path.join(RACINE, 'js/data/figures-exercices.js');
  vm.runInContext(fs.readFileSync(chemin, 'utf8'), bac, { filename: chemin });
  return bac;
}

const H = chargerHelpers();

// --- Lecture du SVG produit -------------------------------------------
const cercles = (svg) => [...svg.matchAll(/<circle[^>]*cx="([-\d.]+)"[^>]*cy="([-\d.]+)"/g)]
  .map(m => [+m[1], +m[2]]);
const lignes = (svg) => [...svg.matchAll(/<line[^>]*class="([^"]+)"[^>]*x1="([-\d.]+)"[^>]*y1="([-\d.]+)"[^>]*x2="([-\d.]+)"[^>]*y2="([-\d.]+)"/g)]
  .map(m => ({ cls: m[1], a: [+m[2], +m[3]], b: [+m[4], +m[5]] }));
const polygones = (svg) => [...svg.matchAll(/<polygon[^>]*points="([^"]+)"/g)]
  .map(m => m[1].trim().split(/\s+/).map(p => p.split(',').map(Number)));

const dist = (A, B) => Math.hypot(A[0] - B[0], A[1] - B[1]);
const vect = (A, B) => [B[0] - A[0], B[1] - A[1]];
const croix = (u, v) => u[0] * v[1] - u[1] * v[0];
const scal = (u, v) => u[0] * v[0] + u[1] * v[1];
// Sinus de l'ecart angulaire entre deux vecteurs : nul si et seulement si ils
// sont colineaires. C'est le test de parallelisme, et il ne depend d'aucune
// echelle.
const ecartParallele = (u, v) => Math.abs(croix(u, v)) / (Math.hypot(u[0], u[1]) * Math.hypot(v[0], v[1]));
const angle = (O, U, V) => {
  const a = vect(O, U), b = vect(O, V);
  const c = scal(a, b) / (Math.hypot(a[0], a[1]) * Math.hypot(b[0], b[1]));
  return Math.acos(Math.min(1, Math.max(-1, c))) * 180 / Math.PI;
};

/* --- 1. Thales, configuration emboitee -------------------------------- */
test('figureThales : les deux droites annoncees paralleles le sont reellement', () => {
  for (const [OA, OAp, AB] of [[4, 6, 5], [3, 7.5, 2], [5, 8, 6], [6, 9, 4], [2, 9, 3]]) {
    const svg = H.figureThales(OA, OAp, AB, {});
    const fortes = lignes(svg).filter(l => l.cls === 'curve-main');
    assert.strictEqual(fortes.length, 2, `OA=${OA} : deux paralleles attendues`);
    const e = ecartParallele(vect(fortes[0].a, fortes[0].b), vect(fortes[1].a, fortes[1].b));
    assert.ok(e < TOL_PARALLELE,
      `OA=${OA} OAp=${OAp} : ecart au parallelisme ${e.toExponential(2)} (sinus), ${TOL_PARALLELE} tolere`);
  }
});

test('figureThales : le rapport mesure sur le dessin vaut le rapport OAp/OA annonce', () => {
  for (const [OA, OAp, AB] of [[4, 6, 5], [3, 7.5, 2], [5, 8, 6], [6, 9, 4]]) {
    const svg = H.figureThales(OA, OAp, AB, {});
    const fortes = lignes(svg).filter(l => l.cls === 'curve-main');
    const petite = dist(fortes[0].a, fortes[0].b);
    const grande = dist(fortes[1].a, fortes[1].b);
    const mesure = grande / petite;
    assert.ok(Math.abs(mesure - OAp / OA) < TOL_RAPPORT,
      `OA=${OA} OAp=${OAp} : rapport dessine ${mesure.toFixed(5)}, ${(OAp / OA).toFixed(5)} annonce`);
  }
});

test('figureThales : la figure ne divulgue pas ce qu elle demande de trouver', () => {
  // Le segment declare inconnu porte un point d'interrogation, et un seul.
  for (const inconnu of ['OA', 'OAp', 'AB', 'ABp']) {
    const svg = H.figureThales(4, 6, 5, { inconnu });
    const nb = (svg.match(/>\?</g) || []).length;
    assert.strictEqual(nb, 1, `inconnu=${inconnu} : un seul point d'interrogation attendu, ${nb} trouve(s)`);
  }
});

/* --- 2. Thales en papillon -------------------------------------------- */
test('figureThales croisee : O est reellement ENTRE les deux paralleles', () => {
  for (const [OA, OAp, AB] of [[4, 6, 5], [5, 7.5, 3], [3, 6, 4]]) {
    const svg = H.figureThales(OA, OAp, AB, { croisee: true });
    const fortes = lignes(svg).filter(l => l.cls === 'curve-main');
    const e = ecartParallele(vect(fortes[0].a, fortes[0].b), vect(fortes[1].a, fortes[1].b));
    assert.ok(e < TOL_PARALLELE, `papillon OA=${OA} : ecart au parallelisme ${e.toExponential(2)}`);
    /* Les cercles sont ecrits dans l'ordre O, A, B, A', B'. Si O separe
       vraiment les deux paralleles, les vecteurs OA et OA' pointent en sens
       OPPOSES, donc leur produit scalaire est negatif. Une configuration
       emboitee donnerait un produit positif : c'est exactement la difference
       entre les deux dessins. */
    const C = cercles(svg);
    const ps = scal(vect(C[0], C[1]), vect(C[0], C[3]));
    assert.ok(ps < 0,
      `papillon OA=${OA} : produit scalaire OA.OM = ${ps.toFixed(1)}, negatif attendu ` +
      '(sinon la figure dessine la configuration emboitee, pas le papillon)');
  }
});

test('figureThales : emboitee et papillon sont bien deux dessins differents', () => {
  // Garde-fou contre une regression ou l'option croisee serait ignoree : c'est
  // exactement le type de perte silencieuse decrit a l'exigence 9.
  const C1 = cercles(H.figureThales(4, 6, 5, {}));
  const C2 = cercles(H.figureThales(4, 6, 5, { croisee: true }));
  const ps1 = scal(vect(C1[0], C1[1]), vect(C1[0], C1[3]));
  const ps2 = scal(vect(C2[0], C2[1]), vect(C2[0], C2[3]));
  assert.ok(ps1 > 0 && ps2 < 0,
    `emboitee ${ps1.toFixed(1)} (positif attendu), papillon ${ps2.toFixed(1)} (negatif attendu)`);
});

/* --- 3. Homothetie ----------------------------------------------------- */
test('figureHomothetie : O, M et M prime sont alignes et le rapport vaut |k|', () => {
  for (const k of [2, 1.5, 0.5, -0.5, -1, -1.5, -2]) {
    const svg = H.figureHomothetie(k, {});
    const Q = polygones(svg);
    assert.strictEqual(Q.length, 2, `k=${k} : deux triangles attendus (antecedent et image)`);
    const O = cercles(svg)[0];
    for (let i = 0; i < 3; i++) {
      const a = vect(O, Q[0][i]), b = vect(O, Q[1][i]);
      const e = ecartParallele(a, b);
      assert.ok(e < 1e-3,
        `k=${k}, sommet ${i} : O, M et M' non alignes (ecart ${e.toExponential(2)})`);
      const rapport = Math.hypot(b[0], b[1]) / Math.hypot(a[0], a[1]);
      assert.ok(Math.abs(rapport - Math.abs(k)) < TOL_RAPPORT,
        `k=${k}, sommet ${i} : |OM'|/|OM| = ${rapport.toFixed(5)}, ${Math.abs(k)} attendu`);
    }
  }
});

test('figureHomothetie : un rapport negatif place l image de l AUTRE cote du centre', () => {
  /* C'est LA propriete du chapitre, celle que les eleves ne comprennent jamais,
     et donc celle qu'une figure fausse enseignerait a l'envers. */
  for (const k of [2, 1.5, 0.5]) {
    const svg = H.figureHomothetie(k, {});
    const Q = polygones(svg), O = cercles(svg)[0];
    for (let i = 0; i < 3; i++) {
      assert.ok(scal(vect(O, Q[0][i]), vect(O, Q[1][i])) > 0,
        `k=${k} positif, sommet ${i} : l'image doit etre du MEME cote que l'antecedent`);
    }
  }
  for (const k of [-0.5, -1, -1.5, -2]) {
    const svg = H.figureHomothetie(k, {});
    const Q = polygones(svg), O = cercles(svg)[0];
    for (let i = 0; i < 3; i++) {
      assert.ok(scal(vect(O, Q[0][i]), vect(O, Q[1][i])) < 0,
        `k=${k} negatif, sommet ${i} : l'image doit etre de l'AUTRE cote du centre`);
    }
  }
});

/* --- 4. Trigonometrie -------------------------------------------------- */
test('figureTrigo : l angle dessine vaut l angle annonce, et l angle droit vaut 90 degres', () => {
  for (const a of [20, 25, 30, 35, 42, 55, 68, 75]) {
    const svg = H.figureTrigo(a, 10, {});
    const T = polygones(svg)[0];
    assert.strictEqual(T.length, 3, `angle ${a} : un triangle a trois sommets attendu`);
    const [S, D, Ht] = T;   // S = sommet de l'angle aigu, D = angle droit
    const aigu = angle(S, D, Ht);
    assert.ok(Math.abs(aigu - a) < TOL_ANGLE,
      `angle annonce ${a} degres, dessine ${aigu.toFixed(4)} degres`);
    const droit = angle(D, S, Ht);
    assert.ok(Math.abs(droit - 90) < TOL_ANGLE,
      `angle ${a} : l'angle droit dessine vaut ${droit.toFixed(4)} degres`);
  }
});

test('figureTrigo : le cosinus lu sur le dessin vaut le cosinus de l angle', () => {
  /* Un eleve qui mesure adjacent et hypotenuse a la regle doit retrouver le
     cosinus du cours. Sinon la figure contredit la definition qu'elle
     illustre. */
  for (const a of [25, 35, 42, 55, 68]) {
    const svg = H.figureTrigo(a, 10, {});
    const [S, D, Ht] = polygones(svg)[0];
    const cosDessine = dist(S, D) / dist(S, Ht);
    assert.ok(Math.abs(cosDessine - Math.cos(a * Math.PI / 180)) < TOL_COS,
      `angle ${a} : cos dessine ${cosDessine.toFixed(6)}, cos attendu ${Math.cos(a * Math.PI / 180).toFixed(6)}`);
  }
});

test('figureTrigo : refuse un angle hors de la plage des angles aigus', () => {
  // Un angle nul, droit ou obtus ne fait pas de triangle rectangle : la figure
  // se tait plutot que d'inventer un dessin. schema.js traite une chaine vide
  // comme une figure absente.
  for (const a of [0, 90, 120, -10]) {
    assert.strictEqual(H.figureTrigo(a, 10, {}), '', `angle ${a} : figure vide attendue`);
  }
});

/* --- 5. Debordement du cadre ------------------------------------------ */
test('les figures de troisieme restent dans leur cadre', () => {
  /* Exigence 8 du cahier des charges. Le convertisseur fige la boite TikZ sur
     le viewBox, donc LaTeX ne signale AUCUN Overfull : un element hors cadre
     s'imprime par-dessus le texte voisin sans le moindre avertissement. Douze
     figures de la sixieme debordaient ainsi, jusqu'a 3,9 mm. */
  const cas = [
    ['thales 4-6', H.figureThales(4, 6, 5, {})],
    ['thales rapport fort', H.figureThales(2, 9, 3, {})],
    ['thales papillon', H.figureThales(4, 6, 5, { croisee: true })],
    ['thales inconnu OA', H.figureThales(4, 6, 5, { inconnu: 'OA' })],
    ['homothetie 2', H.figureHomothetie(2, {})],
    ['homothetie -2', H.figureHomothetie(-2, {})],
    ['homothetie 0,5', H.figureHomothetie(0.5, {})],
    ['trigo 20', H.figureTrigo(20, 12, {})],
    ['trigo 75', H.figureTrigo(75, 12, {})],
    ['section pave vertical', H.figureSection('pave-vertical', 8, 5, 4, {})],
    ['section pave horizontal', H.figureSection('pave-horizontal', 8, 5, 4, {})],
    ['section cylindre', H.figureSection('cylindre-horizontal', 3, 9, 0, {})]
  ];
  for (const [nom, svg] of cas) {
    assert.ok(svg, nom + ' : figure vide');
    const pts = [];
    for (const p of polygones(svg)) pts.push(...p);
    for (const p of cercles(svg)) pts.push(p);
    for (const l of lignes(svg)) pts.push(l.a, l.b);
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    assert.ok(Math.min(...xs) >= 0 && Math.max(...xs) <= 260,
      `${nom} : deborde horizontalement [${Math.min(...xs).toFixed(1)} ; ${Math.max(...xs).toFixed(1)}]`);
    assert.ok(Math.min(...ys) >= 0 && Math.max(...ys) <= 170,
      `${nom} : deborde verticalement [${Math.min(...ys).toFixed(1)} ; ${Math.max(...ys).toFixed(1)}]`);
  }
});

test('les figures de troisieme respectent les contraintes d etiquettes du convertisseur', () => {
  /* Section 9 : pas d'etiquette en CAPITALES (elle se fracture a la
     conversion), pas d'article elide ni de lettre isolee suivie d'un espace
     (italique parasite). Les noms de points, eux, sont des lettres isolees
     legitimes — ils sont dans des <text class="tick-label"> d'un seul
     caractere, ce que le convertisseur compose en mathematique. */
  const cas = [
    H.figureThales(4, 6, 5, {}),
    H.figureHomothetie(-1.5, {}),
    H.figureTrigo(35, 10, {}),
    H.figureSection('pave-vertical', 8, 5, 4, {}),
    H.figureSection('cylindre-horizontal', 3, 9, 0, {})
  ];
  for (const svg of cas) {
    for (const m of svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)) {
      const t = m[1].trim();
      if (t.length <= 1) continue;      // nom de point
      assert.ok(!/^[A-ZÀ-Ý\s]{3,}$/.test(t), 'etiquette en capitales : ' + t);
      assert.ok(!/\b[ldjnmtsc]'/i.test(t), 'article elide dans une etiquette : ' + t);
    }
  }
});

/* =========================================================
   DEUX DEFAUTS VUS SEULEMENT A L'EPREUVE (2026-09-13).

   Les tests precedents verifient la GEOMETRIE des figures : parallelisme,
   rapports, angles. Ils ne voient pas ce qui se lit sur une page imprimee,
   et c'est le controle visuel de la banque de troisieme qui a trouve les
   deux defauts ci-dessous. Ils sont transcrits ici en tests pour que la
   vague suivante ne les reintroduise pas.
   ========================================================= */

test('figureTrigo : les cotes sont au centieme, comme les enonces du niveau', () => {
  /* DEFAUT 1. La figure cotait au DIXIEME (« 11,3 m ») alors que l'enonce
     juste au-dessus annoncait la meme longueur au CENTIEME (« 11,26 m »).
     Deux nombres differents pour une meme longueur sur une meme page :
     l'eleve n'a aucun moyen de savoir lequel fait foi. */
  const svg = H.figureTrigo(30, 13, { inconnu: 'angle' });
  const exact = 13 * Math.cos(Math.PI / 6);          // 11,2583...
  const attendu = (Math.round(exact * 100) / 100).toString().replace('.', '{,}');
  assert.ok(svg.includes(attendu),
    'la cote de l adjacent devrait etre ' + attendu + ' (au centieme) dans :\n' + svg);
  // Et surtout : l'ancienne valeur au dixieme ne doit plus apparaitre.
  assert.ok(!/>11\{,\}3 m</.test(svg), 'cote encore arrondie au dixieme');
});

test('figureTrigo a 45 degres : adjacent et oppose sont egaux, donc la figure divulgue l angle', () => {
  /* DEFAUT 2, et c'est le plus grave des deux : a 45 degres les deux cotes de
     l'angle droit sont egaux. Une figure qui les cote tous les deux montre un
     triangle visiblement isocele et REPOND a la question « quel est l'angle ? »
     — or une figure ne doit jamais resoudre ce qu'elle illustre (section 9 du
     cahier des charges).

     Ce test ne corrige pas le helper, qui a raison de dessiner ce qu'on lui
     demande : il documente la propriete, pour que l'auteur d'un generateur
     sache qu'il ne doit pas tirer 45 degres quand l'angle est l'inconnue.
     C'est ce que fait desormais la tache 'angle' de trigonometrie.js, qui se
     limite a 30 et 60 degres. */
  const a = 10 * Math.cos(Math.PI / 4), o = 10 * Math.sin(Math.PI / 4);
  assert.ok(Math.abs(a - o) < 1e-9,
    'a 45 degres, adjacent et oppose doivent etre egaux — sinon ce test n a plus d objet');

  // La garde reelle : le generateur ne doit jamais produire un enonce
  // « quel est l angle » dont la reponse soit 45.
  const { chargerModule } = require('../extract.js');
  const { exercices } = chargerModule('js/data/3e/trigonometrie.js',
    { tirages: 60, repetitionsMax: 6 });
  const anglesDemandes = exercices.filter(e => e.unit === '°').map(e => e.answer);
  assert.ok(anglesDemandes.length > 0, 'aucune tache de recherche d angle tiree');
  assert.ok(!anglesDemandes.includes(45),
    'la tache « angle » a tire 45 degres, ou la figure divulgue la reponse : ' +
    JSON.stringify(anglesDemandes));
});

test('figureTrigo : la cote de la grandeur cherchee est un point d interrogation', () => {
  // Regle generale de la section 9, verifiee sur les quatre inconnues possibles.
  for (const [inconnu, interdit] of [['angle', '35'], ['hypotenuse', '10'],
                                     ['vertical', null], ['horizontal', null]]) {
    const svg = H.figureTrigo(35, 10, { inconnu });
    assert.ok(svg.includes('>?<'), 'aucun point d interrogation pour inconnu = ' + inconnu);
    if (interdit) {
      assert.ok(!new RegExp('>' + interdit + '(\{,\}\d+)? ?(cm|°)?<').test(svg),
        'la figure divulgue la valeur cherchee (' + interdit + ') pour inconnu = ' + inconnu);
    }
  }
});
