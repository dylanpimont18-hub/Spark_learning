/* =========================================================
   Spark Learning – scripts/check-decimal-notation.js
   Détecte les régressions du bug de notation décimale française
   dans js/data (tous fichiers .js, récursif) : accolade fermante
   manquante après "{," (casse le rendu KaTeX) et .toFixed(n)
   interpolé sans passer par fr()/.replace('.', '{,}') (notation
   anglaise qui fuite à l'écran).
   Voir CLAUDE.md section 2 — à lancer après toute modification
   d'un exercice.generate().
   Usage : node scripts/check-decimal-notation.js
   ========================================================= */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'js', 'data');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.js')) files.push(full);
  }
  return files;
}

const MISSING_BRACE = /\{,(?!\})/;
const RAW_TOFIXED = /\.toFixed\([1-9]\d*\)\s*\}/;

const files = walk(ROOT);
let errorCount = 0;
let warningCount = 0;

for (const file of files) {
  const rel = path.relative(path.join(__dirname, '..'), file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (MISSING_BRACE.test(line)) {
      errorCount++;
      console.error(`ERREUR ${rel}:${i + 1} — accolade fermante manquante après "{," (casse le rendu KaTeX)\n  ${line.trim()}`);
    }
    if (RAW_TOFIXED.test(line)) {
      warningCount++;
      console.warn(`AVERTISSEMENT ${rel}:${i + 1} — .toFixed(n) interpolé sans fr()/.replace('.', '{,}') : vérifier la notation décimale\n  ${line.trim()}`);
    }
  });
}

console.log(`\n${errorCount} erreur(s), ${warningCount} avertissement(s) sur ${files.length} fichiers.`);
process.exit(errorCount > 0 ? 1 : 0);
