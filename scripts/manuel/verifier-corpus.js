/* =========================================================
   Spark Learning – scripts/manuel/verifier-corpus.js
   Passe le socle sur les modules reels : chargement, validation
   de schema, conversion LaTeX de tous les champs textuels.
   Sert de filet contre les regressions de conversion.
   Usage : node scripts/manuel/verifier-corpus.js
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { chargerModule, RACINE } = require('./extract.js');
const { versLatex, definirOrigine, nonMappes } = require('./latex.js');

function listerModules() {
  const racineDonnees = path.join(RACINE, 'js', 'data');
  const trouves = [];
  (function parcourir(dossier) {
    for (const e of fs.readdirSync(dossier, { withFileTypes: true })) {
      const complet = path.join(dossier, e.name);
      if (e.isDirectory()) parcourir(complet);
      else if (e.name.endsWith('.js') && e.name !== 'index.js' && e.name !== 'helpers.js') {
        trouves.push(path.relative(RACINE, complet).split(path.sep).join('/'));
      }
    }
  })(racineDonnees);
  return trouves.sort();
}

/* Convertit recursivement toute chaine rencontree, en ignorant le SVG
   (traite par figures.js, pas par le convertisseur de texte). */
function convertirTout(valeur) {
  if (typeof valeur === 'string') { versLatex(valeur); return; }
  if (Array.isArray(valeur)) { valeur.forEach(convertirTout); return; }
  if (valeur && typeof valeur === 'object') {
    for (const cle of Object.keys(valeur)) {
      if (cle === 'svg') continue;
      convertirTout(valeur[cle]);
    }
  }
}

function verifierCorpus(options) {
  const opts = options || {};
  const chemins = listerModules();
  const echecs = [];
  let valides = 0;
  nonMappes.clear();

  for (const chemin of chemins) {
    try {
      const { module: mod, exercices, validation } = chargerModule(chemin, {
        graine: typeof opts.graine === 'number' ? opts.graine : 1,
        tirages: typeof opts.tirages === 'number' ? opts.tirages : 1
      });
      if (!validation.ok) {
        echecs.push({ chemin, raison: validation.erreurs.join(' | ') });
        continue;
      }
      definirOrigine(mod.id);
      convertirTout({ cours: mod.cours, quiz: mod.quiz, probleme: mod.probleme,
                      evaluation: mod.evaluation, exercices });
      valides++;
    } catch (e) {
      echecs.push({ chemin, raison: e.message });
    }
  }

  return { total: chemins.length, valides, echecs, symbolesInconnus: [...nonMappes.keys()] };
}

if (require.main === module) {
  const r = verifierCorpus({ graine: 1, tirages: 2 });
  console.log(`${r.valides} / ${r.total} modules valides`);
  r.echecs.forEach(e => console.error('ECHEC ' + e.chemin + ' : ' + e.raison));
  if (r.symbolesInconnus.length) {
    console.error('Symboles Unicode inconnus : ' + r.symbolesInconnus.join(' '));
  }
  process.exit(r.echecs.length || r.symbolesInconnus.length ? 1 : 0);
}

module.exports = { listerModules, verifierCorpus };
