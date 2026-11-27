// Tests de l'agrégation du suivi dans le temps (js/devoir/devoirSuivi.js, fonction pure agreger).
// Usage : node scripts/test-devoir-suivi.js
const assert = require('assert');
global.DevoirAdmin = { _esc: (s) => String(s) };   // seul l'écran s'en sert ; agreger n'y touche pas
const S = require('../js/devoir/devoirSuivi.js');

let passes = 0;
function test(nom, fn) {
  try { fn(); passes++; console.log('  ok  ' + nom); }
  catch (e) { console.error('  ÉCHEC  ' + nom + '\n        ' + e.message); process.exitCode = 1; }
}

const sessions = [
  { id: 's1', titre: 'Devoir — Bilan thermique', classe_id: 'c1', lancee_a: 1000 },
  { id: 's2', titre: 'Devoir — DJU', classe_id: 'c1', lancee_a: 2000 },
  { id: 's3', titre: 'Devoir — Combustion', classe_id: 'c1', lancee_a: 3000 }
];
function fiche(etu, session, chapitre, criteres, erreurs, plus) {
  return Object.assign({
    id: etu + session + chapitre + Math.random(), etudiant_id: etu, session_id: session, exercice_id: 'ex-' + chapitre, chapitre,
    titre: 'Exercice ' + chapitre, statut: 'validee', compte_dans_note: true,
    finale: {
      criteres, erreurs: erreurs || [],
      note: criteres.reduce((s, c) => s + c.points_obtenus, 0), note_max: criteres.reduce((s, c) => s + c.points_max, 0)
    }
  }, plus || {});
}
const calcul = (m, c, r, u) => [
  { critere_id: 'methode', label: 'Méthode ou formule', points_obtenus: m, points_max: 40 },
  { critere_id: 'calcul', label: 'Calcul', points_obtenus: c, points_max: 30 },
  { critere_id: 'resultat', label: 'Résultat', points_obtenus: r, points_max: 20 },
  { critere_id: 'unite', label: 'Unité', points_obtenus: u, points_max: 10 }
];
const unite = { etiquette: 'Unité oubliée', description: 'Résultat sans unité.', gravite: 'mineure' };
const conversion = { etiquette: 'conversion d\'unités', description: 'kW pris pour des W.', gravite: 'majeure' };

const fiches = [
  fiche('alice', 's1', '05', calcul(40, 30, 20, 0), [unite]),
  fiche('alice', 's1', '05', calcul(40, 15, 0, 0), [Object.assign({}, unite, { etiquette: 'unité oubliée.' }), conversion]),
  fiche('alice', 's2', '06', calcul(20, 30, 20, 0), [{ etiquette: '  Unité   oubliée ', description: 'Encore sans unité.', gravite: 'mineure' }]),
  fiche('alice', 's3', '09', [
    { critere_id: 'exces', label: 'Rôle de l\'excès d\'air', points_obtenus: 10, points_max: 60, nature: 'element' },
    { critere_id: 'co', label: 'Risque de CO', points_obtenus: 40, points_max: 40, nature: 'element' }
  ], []),
  fiche('bilal', 's1', '05', calcul(40, 30, 20, 10), [conversion]),
  // Ne comptent pas : fiche non validée, exercice écarté de la note.
  fiche('bilal', 's2', '06', calcul(0, 0, 0, 0), [unite], { statut: 'brouillon' }),
  fiche('bilal', 's2', '06', calcul(0, 0, 0, 0), [unite], { compte_dans_note: false }),
  // Fiche ancienne, sans chapitre : retrouvé par la banque.
  fiche('bilal', 's2', null, calcul(20, 15, 10, 5), [], { exercice_id: 'ex-ancien', chapitre: undefined })
];
const copies = [
  { id: 's1_alice', session_id: 's1', etudiant_id: 'alice', correction: { statut: 'validee', note_finale: 12, note_sur: 20 } },
  { id: 's2_alice', session_id: 's2', etudiant_id: 'alice', correction: { statut: 'validee', note_finale: 14, note_sur: 20 } },
  { id: 's3_alice', session_id: 's3', etudiant_id: 'alice', correction: { statut: 'validee', note_finale: 10, note_sur: 20 } },
  { id: 's1_bilal', session_id: 's1', etudiant_id: 'bilal', correction: { statut: 'validee', note_finale: 20, note_sur: 20 } },
  { id: 's2_bilal', session_id: 's2', etudiant_id: 'bilal', correction: { statut: 'pre_corrigee', note_finale: null } }
];
const D = S.agreger(fiches, copies, sessions, [{ id: 'ex-ancien', chapitre: '06' }], (t) => t || 0);

console.log('Suivi — agrégation');
test('notes finales : seules les copies validées, dans l\'ordre des devoirs, avec la moyenne', () => {
  const a = D.etudiants.alice;
  assert.deepStrictEqual(a.devoirs.map((d) => [d.titre, d.note]), [['Devoir — Bilan thermique', 12], ['Devoir — DJU', 14], ['Devoir — Combustion', 10]]);
  assert.strictEqual(a.moyenne, 12);
  assert.deepStrictEqual(D.etudiants.bilal.devoirs.map((d) => d.note), [20], 'la copie seulement pré-corrigée ne compte pas');
});
test('par chapitre : points cumulés, nombre d\'exercices et de devoirs', () => {
  const c = D.etudiants.alice.chapitres;
  assert.deepStrictEqual([c['05'].points, c['05'].max, c['05'].n, Object.keys(c['05'].sessions).length], [145, 200, 2, 1]);
  assert.strictEqual(S.sur20(c['05'].points, c['05'].max), 14.5);
  assert.deepStrictEqual(D.chapitres, ['05', '06', '09']);
});
test('une fiche non validée ou écartée de la note ne compte pas ; le chapitre d\'une fiche ancienne vient de la banque', () => {
  const b = D.etudiants.bilal;
  assert.deepStrictEqual(Object.keys(b.chapitres).sort(), ['05', '06']);
  assert.deepStrictEqual([b.chapitres['06'].points, b.chapitres['06'].n], [50, 1]);
  assert.strictEqual(Object.keys(b.erreurs).length, 1, 'les erreurs des fiches écartées ne remontent pas');
});
test('critères : part des points par critère du barème, éléments rédigés regroupés', () => {
  const k = D.etudiants.alice.criteres;
  assert.deepStrictEqual([k.unite.points, k.unite.max, k.unite.n], [0, 30, 3]);
  assert.deepStrictEqual([k.methode.points, k.methode.max], [100, 120]);
  assert.deepStrictEqual([k[S.CLE_ELEMENTS].points, k[S.CLE_ELEMENTS].max, k[S.CLE_ELEMENTS].n, k[S.CLE_ELEMENTS].label], [50, 100, 2, 'Éléments rédigés']);
});
test('erreur qui revient : même étiquette (casse, espaces, point final) sur au moins deux devoirs', () => {
  const a = D.etudiants.alice;
  assert.strictEqual(a.recurrentes.length, 1);
  const r = a.recurrentes[0];
  assert.deepStrictEqual([r.etiquette, r.n, r.devoirs, Object.keys(r.chapitres).sort(), r.derniere_ms], ['Unité oubliée', 3, 2, ['05', '06'], 2000]);
  assert.deepStrictEqual(r.exemples, ['Résultat sans unité.', 'Encore sans unité.']);
  assert.deepStrictEqual(a.isolees.map((x) => [x.etiquette, x.majeures, x.recurrent]), [['conversion d\'unités', 1, false]]);
});
test('deux fois dans le même devoir ne fait pas une erreur « qui revient »', () => {
  const d = S.agreger([fiche('chloe', 's1', '05', calcul(0, 0, 0, 0), [unite]), fiche('chloe', 's1', '05', calcul(0, 0, 0, 0), [unite])], [], sessions, [], (t) => t || 0);
  assert.deepStrictEqual([d.etudiants.chloe.recurrentes.length, d.etudiants.chloe.isolees[0].n], [0, 2]);
  assert.strictEqual(d.etudiants.chloe.moyenne, null);
});
test('argument attendu non acquis : élément rédigé sous la moitié de ses points', () => {
  const m = D.etudiants.alice.manquants;
  assert.deepStrictEqual(m.map((x) => [x.label, x.chapitre, x.points, x.max]), [['Rôle de l\'excès d\'air', '09', 10, 60]]);
});
test('erreurs partagées dans la classe : classées par nombre d\'étudiants', () => {
  const f = S.frequentes(D, ['alice', 'bilal', 'inconnu']);
  assert.deepStrictEqual(f.map((g) => [g.etiquette, g.etudiants, g.occurrences]), [['conversion d\'unités', 2, 2], ['Unité oubliée', 1, 3]]);
});
test('démarche du technicien : étapes relevées par l\'IA, comptées sur les copies validées seulement', () => {
  const etapes = (a, b, c) => ({ etapes: [{ libelle: 'Choisir la méthode', statut: a }, { libelle: 'Calculer', statut: b }, { libelle: 'Contrôler', statut: c }, { libelle: 'Étape libre d\'une ancienne fiche', statut: 'validee' }] });
  const d = S.agreger([
    fiche('dina', 's1', '05', calcul(40, 20, 15, 25), [], { ia: etapes('validee', 'validee', 'absente') }),
    fiche('dina', 's2', '06', calcul(20, 20, 0, 0), [], { ia: etapes('erreur', 'validee', 'absente') }),
    fiche('dina', 's3', '09', calcul(40, 20, 15, 25), [], { ia: etapes('validee', 'validee', 'validee') }),
    fiche('dina', 's3', '09', calcul(0, 0, 0, 0), [], { ia: etapes('absente', 'absente', 'absente'), statut: 'brouillon' }),
    fiche('dina', 's3', '09', calcul(10, 0, 0, 0), [], { ia: null })
  ], [], sessions, [], (t) => t || 0).etudiants.dina.demarche;
  assert.deepStrictEqual(Object.keys(d), ['Choisir la méthode', 'Calculer', 'Contrôler'], 'seuls les cinq libellés de la grille comptent');
  assert.deepStrictEqual([d['Choisir la méthode'].validee, d['Choisir la méthode'].erreur, d['Choisir la méthode'].n], [2, 1, 3]);
  assert.deepStrictEqual([d['Contrôler'].validee, d['Contrôler'].absente, d['Contrôler'].n], [1, 2, 3], 'ne contrôle son résultat qu\'une fois sur trois');
  assert.deepStrictEqual(S.ETAPES, ['Analyser', 'Choisir la méthode', 'Calculer', 'Contrôler', 'Conclure']);
});
test('aucune donnée : structure vide, sans erreur', () => {
  assert.deepStrictEqual(S.agreger([], [], [], []), { etudiants: {}, chapitres: [] });
});

console.log('\n' + passes + ' test(s) réussi(s)' + (process.exitCode ? ' — DES TESTS ÉCHOUENT' : ''));
