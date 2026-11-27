// Tests du moteur de variantes du module « devoir » (js/devoir/devoirEngine.js).
// Usage : node scripts/test-devoir-engine.js
// mathjs est une devDependency épinglée sur la même version que le CDN chargé par le panneau admin.
const assert = require('assert');
const math = require('mathjs');
const E = require('../js/devoir/devoirEngine.js');

let passes = 0;
function test(nom, fn) {
  try { fn(); passes++; console.log('  ok  ' + nom); }
  catch (e) { console.error('  ÉCHEC  ' + nom + '\n        ' + e.message); process.exitCode = 1; }
}

const calc = E.creerCalculateur(math);

function exerciceOhm() {
  return {
    id: 'loi-ohm-resistance',
    titre: "Résistance d'un radiateur",
    chapitre: '01',
    tags: ['électricité'],
    difficulte: 1,
    enonce_modele: 'Un radiateur est alimenté sous {{U}} V et absorbe {{I}} A.<br/><br/>Calculer sa résistance $R$, sachant que $I = {{I}}\\ \\text{A}$.',
    parametres: [
      { nom: 'U', min: 200, max: 240, pas: 10, unite: 'V', decimales: 0 },
      { nom: 'I', min: 2.5, max: 4, pas: 0.5, unite: 'A' }
    ],
    donnees_calculees: [
      { nom: 'R', expression: 'U / I', unite: 'Ω', decimales: 2 }
    ],
    blocs_reponse: E.blocsParDefaut(),
    corrige: { resultat: 'R', unite: 'Ω', etapes: ['$R = \\dfrac{U}{I} = \\dfrac{{{U}}}{{{I}}} = {{R}}\\ \\Omega$'] },
    medias: []
  };
}

console.log('Validation');
test('un exercice correct ne produit aucune erreur', () => {
  const r = E.valider(exerciceOhm(), calc);
  assert.deepStrictEqual(r.erreurs, []);
});
test('une variable inconnue dans une expression est refusée', () => {
  const ex = exerciceOhm(); ex.donnees_calculees[0].expression = 'U / J';
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('J')));
});
test("un nom d'unité mathjs non déclaré (m) n'est pas résolu silencieusement", () => {
  const ex = exerciceOhm(); ex.donnees_calculees[0].expression = 'U / m';
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('m')));
});
test('une fonction hors liste blanche est refusée', () => {
  const ex = exerciceOhm(); ex.donnees_calculees[0].expression = 'evaluate("1+1")';
  assert.ok(E.valider(ex, calc).erreurs.length > 0);
});
test('une affectation est refusée', () => {
  const ex = exerciceOhm(); ex.donnees_calculees[0].expression = 'x = 3';
  assert.ok(E.valider(ex, calc).erreurs.length > 0);
});
test('un placeholder inconnu dans l’énoncé est refusé', () => {
  const ex = exerciceOhm(); ex.enonce_modele += ' {{P}}';
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('P')));
});
test('corrige.resultat doit désigner une variable', () => {
  const ex = exerciceOhm(); ex.corrige.resultat = 'Z';
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('Z')));
});
test('une plage dont le pas ne tombe pas juste est refusée', () => {
  const ex = exerciceOhm(); ex.parametres[0].pas = 15;
  assert.ok(E.valider(ex, calc).erreurs.length > 0);
});
test('un barème qui ne fait pas 100 donne un avertissement, pas une erreur', () => {
  const ex = exerciceOhm(); ex.blocs_reponse[0].points = 50;
  const r = E.valider(ex, calc);
  assert.deepStrictEqual(r.erreurs, []);
  assert.ok(r.avertissements.length > 0);
});
test('une division par zéro possible est détectée', () => {
  const ex = exerciceOhm(); ex.parametres[1] = { nom: 'I', min: 0, max: 2, pas: 1, unite: 'A' };
  assert.ok(E.valider(ex, calc).erreurs.some(m => /fini/.test(m)));
});
test("sans chapitre, l'exercice est refusé", () => {
  const ex = exerciceOhm(); delete ex.chapitre;
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.startsWith('chapitre')));
});
test("un chapitre que Dylan n'enseigne pas (ou pas encore migré) est refusé", () => {
  for (const c of ['11', '14', '17', '21', '22', 'S8-A', 5]) {
    const ex = exerciceOhm(); ex.chapitre = c;
    assert.ok(E.valider(ex, calc).erreurs.some(m => m.startsWith('chapitre')), String(c));
  }
});
test('les 16 chapitres du dossier cours/Dylan sont acceptés', () => {
  const ids = E.CHAPITRES.map(c => c.id);
  assert.deepStrictEqual(ids, ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10a', '10b', '10c', '12', '13', '15', '16']);
  for (const c of ids) {
    const ex = exerciceOhm(); ex.chapitre = c;
    assert.deepStrictEqual(E.valider(ex, calc).erreurs, [], c);
  }
});
test("l'exercice de départ est valide et relève du chapitre 05", () => {
  const ex = E.nouvelExercice();
  assert.deepStrictEqual(E.valider(ex, calc).erreurs, []);
  assert.strictEqual(E.libelleChapitre(ex.chapitre), '05 · Bilan thermique (S8-A, A2-3)');
  const inst = E.instancier(ex, calc, { rng: E.rngGraine(2) });
  const v = inst.valeurs;
  assert.strictEqual(inst.corrige.valeur, v.U * v.A * (v.Ti - v.Tb));
});
test('une commande LaTeX qui a perdu sa barre oblique (tabulation) est refusée', () => {
  const ex = exerciceOhm(); ex.corrige.etapes = ['$R = U \times I$'];  // « \t » JS = tabulation
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('caractère de contrôle')));
  const ex2 = exerciceOhm(); ex2.enonce_modele = 'Vitesse $\nu$';
  assert.ok(E.valider(ex2, calc).erreurs.some(m => m.includes('caractère de contrôle')));
});
test('un identifiant invalide est refusé', () => {
  const ex = exerciceOhm(); ex.id = 'Loi Ohm';
  assert.ok(E.valider(ex, calc).erreurs.length > 0);
});

test("garde-fou : la formule retrouve le résultat du corrigé d'origine", () => {
  const ex = exerciceOhm(); ex.origine = { source: 'x.typ', exercice: 'Ex. 1', valeurs: { U: 230, I: 2.5 }, resultat: 92 };
  assert.deepStrictEqual(E.valider(ex, calc).erreurs, []);
});
test('garde-fou : une formule mal transcrite est refusée', () => {
  const ex = exerciceOhm(); ex.donnees_calculees[0].expression = 'U * I';
  ex.origine = { source: 'x.typ', exercice: 'Ex. 1', valeurs: { U: 230, I: 2.5 }, resultat: 92 };
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.startsWith('Garde-fou')));
});
test("garde-fou : l'arrondi du corrigé d'origine est toléré à 1 %", () => {
  const ex = exerciceOhm(); ex.origine = { source: 'x.typ', exercice: 'Ex. 1', valeurs: { U: 230, I: 3 }, resultat: 76.7 };
  assert.deepStrictEqual(E.valider(ex, calc).erreurs, []);
  ex.origine.resultat = 78;
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.startsWith('Garde-fou')));
});
test("garde-fou : valeur d'origine manquante refusée, hors plage signalée", () => {
  const ex = exerciceOhm(); ex.origine = { source: 'x.typ', exercice: 'Ex. 1', valeurs: { U: 230 }, resultat: 92 };
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('il manque I')));
  ex.origine.valeurs = { U: 250, I: 2.5 }; ex.origine.resultat = 100;
  const r = E.valider(ex, calc);
  assert.deepStrictEqual(r.erreurs, []);
  assert.ok(r.avertissements.some(m => m.includes('sort de la plage')));
});

console.log('Tirage');
test('les valeurs tirées restent dans la plage et sur le pas', () => {
  const rng = E.rngGraine(42);
  for (let i = 0; i < 200; i++) {
    const v = E.instancier(exerciceOhm(), calc, { rng }).valeurs;
    assert.ok(v.U >= 200 && v.U <= 240 && v.U % 10 === 0, 'U=' + v.U);
    assert.ok([2.5, 3, 3.5, 4].includes(v.I), 'I=' + v.I);
  }
});
test('les décimales flottantes sont nettoyées (0,1 × 3 = 0,3 et non 0,30000000000000004)', () => {
  const ex = exerciceOhm();
  ex.parametres[1] = { nom: 'I', min: 0.1, max: 0.3, pas: 0.1, unite: 'A' };
  const rng = E.rngGraine(1);
  for (let i = 0; i < 50; i++) {
    const I = E.instancier(ex, calc, { rng }).valeurs.I;
    assert.ok([0.1, 0.2, 0.3].includes(I), 'I=' + I);
  }
});
test('le corrigé est recalculé à partir des valeurs tirées', () => {
  const inst = E.instancier(exerciceOhm(), calc, { rng: E.rngGraine(7) });
  assert.strictEqual(inst.corrige.valeur, inst.valeurs.U / inst.valeurs.I);
});
test('paramètre liste : la valeur vient de la liste', () => {
  const ex = exerciceOhm();
  ex.parametres[1] = { nom: 'I', valeurs: [2, 5, 8], unite: 'A' };
  const rng = E.rngGraine(3);
  for (let i = 0; i < 30; i++) assert.ok([2, 5, 8].includes(E.instancier(ex, calc, { rng }).valeurs.I));
});
test('ligne de catalogue : les colonnes sont tirées ensemble', () => {
  const ex = exerciceOhm();
  ex.parametres.push({
    nom: 'isolant',
    colonnes: [{ nom: 'nom_isolant' }, { nom: 'lambda', unite: 'W/(m·K)', decimales: 3 }],
    lignes: [['PIR', 0.022], ['laine de verre', 0.032], ['polystyrène', 0.038]]
  });
  ex.donnees_calculees.push({ nom: 'Rth', expression: '0.1 / lambda', decimales: 2 });
  ex.enonce_modele += ' Isolant : {{nom_isolant}}.';
  assert.deepStrictEqual(E.valider(ex, calc).erreurs, []);
  const rng = E.rngGraine(5);
  const paires = { PIR: 0.022, 'laine de verre': 0.032, 'polystyrène': 0.038 };
  for (let i = 0; i < 30; i++) {
    const v = E.instancier(ex, calc, { rng }).valeurs;
    assert.strictEqual(v.lambda, paires[v.nom_isolant]);
  }
});
test("une colonne texte ne peut pas servir dans un calcul", () => {
  const ex = exerciceOhm();
  ex.parametres.push({ nom: 'iso', colonnes: [{ nom: 'nom_isolant' }], lignes: [['PIR']] });
  ex.donnees_calculees.push({ nom: 'X', expression: 'nom_isolant * 2' });
  assert.ok(E.valider(ex, calc).erreurs.some(m => m.includes('nom_isolant')));
});
test('nombre de variantes possibles', () => {
  assert.strictEqual(E.nombreVariantes(exerciceOhm()), 5 * 4);
});
test('3 variantes distinctes sont proposées', () => {
  const r = E.variantesDistinctes(exerciceOhm(), calc, 3, { rng: E.rngGraine(11) });
  assert.strictEqual(r.variantes.length, 3);
  const sig = new Set(r.variantes.map(v => JSON.stringify(v.valeurs)));
  assert.strictEqual(sig.size, 3);
});

console.log('Rendu');
test('virgule française hors maths, {,} dans les maths', () => {
  const ex = exerciceOhm();
  ex.parametres[1] = { nom: 'I', valeurs: [2.5], unite: 'A' };
  const inst = E.instancier(ex, calc, { rng: E.rngGraine(1) });
  assert.ok(inst.enonce.includes('absorbe 2,5 A'), inst.enonce);
  assert.ok(inst.enonce.includes('$I = 2{,}5\\ \\text{A}$'), inst.enonce);
  assert.ok(!/\d\.\d/.test(inst.enonce), 'point décimal anglais : ' + inst.enonce);
});
test('décimales de la donnée calculée appliquées dans le corrigé', () => {
  const ex = exerciceOhm();
  ex.parametres = [{ nom: 'U', valeurs: [230], unite: 'V' }, { nom: 'I', valeurs: [3], unite: 'A' }];
  const inst = E.instancier(ex, calc, { rng: E.rngGraine(1) });
  assert.strictEqual(inst.corrige.etapes[0], '$R = \\dfrac{U}{I} = \\dfrac{230}{3} = 76{,}67\\ \\Omega$');
  assert.strictEqual(inst.corrige.valeur_affichee, '76,67');
});
test('séparateur de milliers au-delà de 4 chiffres', () => {
  assert.strictEqual(E.formaterNombre(12500, 0, true), '12\\,500');
  assert.strictEqual(E.formaterNombre(12500.5, 1, false), '12 500,5');
  assert.strictEqual(E.formaterNombre(2500, 0, false), '2500');
  assert.strictEqual(E.formaterNombre(-0.25, 2, true), '-0{,}25');
});
test('un $ échappé ne bascule pas le mode maths', () => {
  const ex = exerciceOhm();
  ex.parametres[1] = { nom: 'I', valeurs: [2.5], unite: 'A' };
  ex.enonce_modele = 'Coût \\$ : {{I}}';
  assert.strictEqual(E.instancier(ex, calc, { rng: E.rngGraine(1) }).enonce, 'Coût \\$ : 2,5');
});
test('$$ … $$ est bien traité comme du mode maths', () => {
  const ex = exerciceOhm();
  ex.parametres[1] = { nom: 'I', valeurs: [2.5], unite: 'A' };
  ex.enonce_modele = '$$I = {{I}}$$ soit {{I}}';
  assert.strictEqual(E.instancier(ex, calc, { rng: E.rngGraine(1) }).enonce, '$$I = 2{,}5$$ soit 2,5');
});
test('stockage : les lignes de catalogue ne sont plus des tableaux de tableaux, et reviennent à l\'identique', () => {
  const ex = exerciceOhm();
  ex.parametres.push({ nom: 'iso', colonnes: [{ nom: 'nom_isolant' }, { nom: 'lambda' }], lignes: [['PIR', 0.022], ['laine', 0.032]] });
  const avant = JSON.stringify(ex);
  const stocke = E.pourStockage(ex);
  assert.deepStrictEqual(stocke.parametres[2].lignes, [{ v: ['PIR', 0.022] }, { v: ['laine', 0.032] }]);
  assert.strictEqual(JSON.stringify(ex), avant, 'l\'exercice d\'origine n\'est pas modifié');
  assert.strictEqual(JSON.stringify(E.depuisStockage(stocke)), avant);
  assert.strictEqual(JSON.stringify(E.depuisStockage(ex)), avant, 'un exercice déjà au format du moteur est laissé tel quel');
  assert.strictEqual(JSON.stringify(E.pourStockage(stocke)), JSON.stringify(stocke), 'pourStockage est idempotent');
});

console.log('Questions rédigées et exercices mixtes');
function exerciceRedige() {
  return {
    id: 'condensation-rendement-pci', type: 'redige', titre: 'Rendement supérieur à 100 % sur PCI', chapitre: '16', difficulte: 2,
    enonce_modele: 'Une chaudière à condensation affiche un rendement de {{eta}} % sur PCI.<br/><br/>Expliquer pourquoi ce n\'est pas contraire à la conservation de l\'énergie.',
    parametres: [{ nom: 'eta', valeurs: [103, 105.5, 107], unite: '%' }],
    blocs_reponse: E.blocsRedige(),
    corrige: {
      elements: [
        { id: 'latente', label: 'Chaleur latente non comptée dans le PCI', points: 60, attendu: 'Le PCI ne compte pas la chaleur latente de la vapeur d\'eau des fumées ; la condensation en récupère une partie, d\'où {{eta}} %.' },
        { id: 'pcs', label: 'Rapporté au PCS, moins de 100 %', points: 40, attendu: 'Rapporté au PCS, le rendement reste inférieur à 100 %.' }
      ],
      reponse_modele: 'Le rendement de {{eta}} % est rapporté au PCI.'
    },
    origine: { source: 'x.typ', exercice: 'Exercice 2, question 1' },
    medias: []
  };
}
function exerciceMixte() {
  const ex = exerciceOhm();
  ex.id = 'loi-ohm-conclure'; ex.type = 'mixte';
  ex.enonce_modele += ' Conclure : le disjoncteur de {{cal}} A convient-il ?';
  ex.parametres.push({ nom: 'cal', valeurs: [10, 16], unite: 'A' });
  ex.blocs_reponse = E.blocsMixte(40);
  ex.corrige.elements = [{ id: 'conclusion', label: 'Comparaison au calibre', points: 40, attendu: 'L\'intensité de {{I}} A est inférieure au calibre de {{cal}} A : le disjoncteur convient.' }];
  return ex;
}
test('un exercice sans champ type reste « chiffre » : même corrigé, même barème de quatre blocs', () => {
  const ex = exerciceOhm();
  assert.strictEqual(E.typeExercice(ex), 'chiffre');
  const v = E.instancier(ex, calc, { rng: E.rngGraine(7) });
  assert.deepStrictEqual(Object.keys(v.corrige), ['resultat', 'valeur', 'valeur_affichee', 'unite', 'etapes']);
  assert.deepStrictEqual(v.bareme, [
    { id: 'methode', label: 'Méthode ou formule', points: 40 }, { id: 'calcul', label: 'Calcul', points: 30 },
    { id: 'resultat', label: 'Résultat', points: 20 }, { id: 'unite', label: 'Unité', points: 10 }]);
  assert.strictEqual(v.type, 'chiffre');
});
test('question rédigée : valide sans résultat numérique, barème porté par les éléments attendus', () => {
  const ex = exerciceRedige();
  const r = E.valider(ex, calc);
  assert.deepStrictEqual(r.erreurs, []);
  assert.deepStrictEqual(r.avertissements, []);
  const v = E.instancier(ex, calc, { rng: E.rngGraine(3) });
  assert.strictEqual(v.type, 'redige');
  assert.deepStrictEqual([v.corrige.resultat, v.corrige.valeur, v.corrige.valeur_affichee], [null, null, '']);
  assert.deepStrictEqual(v.bareme.map((c) => [c.id, c.points, c.nature]), [['latente', 60, 'element'], ['pcs', 40, 'element']]);
  assert.ok(!/\{\{/.test(v.corrige.elements[0].attendu), 'valeurs remplacées dans l\'élément attendu');
  assert.ok(v.bareme[0].attendu === v.corrige.elements[0].attendu);
  assert.ok(/^Le rendement de 10[357](,5)? % est rapporté/.test(v.corrige.reponse_modele), v.corrige.reponse_modele);
});
test('question rédigée sans paramètre : une seule variante, sans avertissement', () => {
  const ex = E.nouvelExerciceRedige();
  const r = E.valider(ex, calc);
  assert.deepStrictEqual([r.erreurs, r.avertissements], [[], []]);
  assert.strictEqual(E.nombreVariantes(ex), 1);
  assert.strictEqual(E.instancier(ex, calc).bareme.length, 2);
});
test('question rédigée : refus sans élément, avec un résultat numérique, ou avec un élément mal formé', () => {
  let ex = exerciceRedige(); ex.corrige.elements = [];
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('corrige.elements')));
  ex = exerciceRedige(); ex.corrige.resultat = 'eta';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('corrige.resultat')));
  ex = exerciceRedige(); ex.corrige.elements[0].points = 0;
  assert.ok(E.valider(ex, calc).erreurs.some((m) => /points strictement positifs/.test(m)));
  ex = exerciceRedige(); ex.corrige.elements[1].id = 'latente';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => /en double/.test(m)));
  ex = exerciceRedige(); ex.corrige.elements[0].attendu = 'Voir {{inconnue}}';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.includes('inconnue')));
  ex = exerciceRedige(); ex.corrige.elements[0].attendu = 'Formule $\frac{1}{2}$';   // « \f » JS = saut de page
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.includes('caractère de contrôle')));
  ex = exerciceRedige(); delete ex.origine.exercice;
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('origine')));
  ex = exerciceRedige(); ex.type = 'dissertation';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('type')));
});
test('question rédigée : un barème qui ne fait pas 100 est signalé', () => {
  const ex = exerciceRedige(); ex.corrige.elements[1].points = 30;
  const r = E.valider(ex, calc);
  assert.deepStrictEqual(r.erreurs, []);
  assert.ok(r.avertissements.some((m) => /90 points/.test(m)));
});
test('exercice chiffré : des éléments attendus sans champ type sont refusés', () => {
  const ex = exerciceOhm(); ex.corrige.elements = [{ id: 'a', label: 'A', attendu: 'x', points: 10 }];
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('corrige.elements')));
});
test('exercice mixte : résultat calculé, garde-fou, blocs de calcul et élément rédigé au barème (100 points)', () => {
  const ex = exerciceMixte();
  ex.origine = { source: 'x.typ', exercice: 'Ex. 1', valeurs: { U: 230, I: 2.5, cal: 10 }, resultat: 92 };
  const r = E.valider(ex, calc);
  assert.deepStrictEqual([r.erreurs, r.avertissements], [[], []]);
  const v = E.instancier(ex, calc, { rng: E.rngGraine(5) });
  assert.strictEqual(v.corrige.valeur, v.valeurs.U / v.valeurs.I);
  assert.deepStrictEqual(v.bareme.map((c) => [c.id, c.points]), [['methode', 24], ['calcul', 18], ['resultat', 12], ['unite', 6], ['conclusion', 40]]);
  assert.strictEqual(v.bareme.reduce((s, c) => s + c.points, 0), 100);
  assert.ok(new RegExp('inférieure au calibre de ' + v.valeurs.cal + ' A').test(v.corrige.elements[0].attendu));
  ex.donnees_calculees[0].expression = 'U * I';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('Garde-fou')), 'le garde-fou s\'applique au calcul d\'un exercice mixte');
});
test('exercice mixte : refus sans résultat numérique ou si un élément reprend l\'id d\'un bloc', () => {
  let ex = exerciceMixte(); delete ex.corrige.resultat;
  assert.ok(E.valider(ex, calc).erreurs.some((m) => m.startsWith('corrige.resultat')));
  ex = exerciceMixte(); ex.corrige.elements[0].id = 'calcul';
  assert.ok(E.valider(ex, calc).erreurs.some((m) => /déjà celui d'un bloc/.test(m)));
});
test('blocs mixtes : le calcul se partage le reste des points, quel que soit le poids de la rédaction', () => {
  for (const p of [20, 30, 40, 50, 60]) {
    const b = E.blocsMixte(p);
    assert.strictEqual(b.reduce((s, x) => s + x.points, 0), 100 - p, String(p));
    assert.deepStrictEqual([b[4].id, b[4].long, b[4].points], ['redaction', true, 0]);
  }
});
test('stockage : un exercice rédigé traverse pourStockage / depuisStockage sans changement', () => {
  const ex = exerciceRedige();
  assert.strictEqual(JSON.stringify(E.depuisStockage(E.pourStockage(ex))), JSON.stringify(ex));
});

console.log('\n' + passes + ' test(s) réussi(s)' + (process.exitCode ? ' — DES TESTS ÉCHOUENT' : ''));
