// Vérifie un lot d'exercices destiné à la banque du module devoir (onglet « Devoirs »).
// Usage : node scripts/devoir-verifier-lot.js <lot.json> [autre-lot.json …]
// Un lot = { chapitre, sources: [..], exercices: [ exercice au format DevoirEngine + origine ] }.
// Les lots contiennent les corrigés : ils vivent dans le dépôt BTS FED (privé, sans remote),
// jamais dans ce dépôt, qui est public.
// Pour chaque exercice : validation complète (schéma, expressions, toutes les combinaisons,
// garde-fou sur les valeurs d'origine), puis affichage d'une variante tirée pour relecture.
const fs = require('fs');
const path = require('path');
const math = require('mathjs');
const E = require('../js/devoir/devoirEngine.js');

const calc = E.creerCalculateur(math);
const fichiers = process.argv.slice(2);
if (!fichiers.length) { console.error('Usage : node scripts/devoir-verifier-lot.js <lot.json> …'); process.exit(2); }

let total = 0, ko = 0;
const ids = new Map();
for (const f of fichiers) {
  let lot;
  try { lot = JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.error('✗ ' + f + ' : JSON illisible — ' + e.message); ko++; continue; }
  console.log('\n══ ' + path.basename(f) + ' — chapitre ' + lot.chapitre + ' (' + (lot.exercices || []).length + ' exercices)');
  for (const ex of lot.exercices || []) {
    total++;
    const r = E.valider(ex, calc);
    if (ids.has(ex.id)) r.erreurs.push('id « ' + ex.id + ' » déjà utilisé dans ' + ids.get(ex.id));
    ids.set(ex.id, path.basename(f));
    if (lot.chapitre !== 'tous' && ex.chapitre !== lot.chapitre) r.erreurs.push('chapitre « ' + ex.chapitre + ' » différent de celui du lot (' + lot.chapitre + ')');
    const tag = r.erreurs.length ? '✗' : (r.avertissements.length ? '!' : '✓');
    if (r.erreurs.length) ko++;
    console.log('\n' + tag + ' ' + ex.id + ' — ' + ex.titre + '  [' + E.nombreVariantes(ex) + ' variantes]');
    r.erreurs.forEach(m => console.log('    ERREUR  ' + m));
    r.avertissements.forEach(m => console.log('    avert.  ' + m));
    if (!r.erreurs.length) {
      const g = ex.origine ? E.verifierOrigine(ex, calc) : null;
      if (g) console.log('    garde-fou : ' + ex.corrige.resultat + ' = ' + +g.obtenu.toFixed(6) + ' (corrigé d\'origine : ' + ex.origine.resultat + ')');
      const v = E.instancier(ex, calc);
      console.log('    variante : ' + v.enonce.replace(/<br\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 400));
      console.log('    corrigé  : ' + v.corrige.resultat + ' = ' + v.corrige.valeur_affichee + ' ' + v.corrige.unite);
    }
  }
}
console.log('\n' + total + ' exercice(s), ' + ko + ' en erreur.');
process.exit(ko ? 1 : 0);
