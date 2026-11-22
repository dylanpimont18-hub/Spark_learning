// Liste les fichiers de modules de js/data/ (hors index.js et bibliothèques partagées).
const fs = require('fs');
const path = require('path');
const { RACINE } = require('./extract.js');

function listerModules() {
  const trouves = [];
  (function parcourir(dossier) {
    for (const e of fs.readdirSync(dossier, { withFileTypes: true })) {
      const complet = path.join(dossier, e.name);
      if (e.isDirectory()) parcourir(complet);
      else if (e.name.endsWith('.js') && !['index.js', 'helpers.js', 'figures-exercices.js'].includes(e.name)) {
        trouves.push(path.relative(RACINE, complet).split(path.sep).join('/'));
      }
    }
  })(path.join(RACINE, 'js', 'data'));
  return trouves.sort();
}

module.exports = { listerModules };
