/* =========================================================
   Spark Learning – scripts/check-decimal-notation.js
   Détecte les régressions de notation décimale française dans js/data.

   TROIS familles, dont deux ajoutées le 2026-08-16 après l'audit du
   manuel college-maths, où le PDF imprimé portait encore les deux :

     1. STATIQUE — accolade fermante manquante après "{," (casse KaTeX),
        et .toFixed(n) interpolé sans fr()/.replace().
     2. STATIQUE — "{,}" dans une étiquette <text> d'un SVG. KaTeX ne
        s'exécute JAMAIS dans un noeud SVG : les accolades s'impriment
        telles quelles, à l'écran comme sur le papier.
     3. DYNAMIQUE — la seule qui attrape le vrai bug récurrent. Un
        `${aire}` interpolé nu vaut 31.5 dès que le tirage tombe sur un
        demi-entier : rien dans le SOURCE ne le montre, il faut EXÉCUTER
        generate(). C'est ainsi que « = 31.5 cm2 » a atteint la page 191
        du manuel alors que ce script passait au vert.

   Voir CLAUDE.md section 2 — à lancer après toute modification
   d'un exercice.generate().
   Usage : node scripts/check-decimal-notation.js
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { chargerModule } = require('./manuel/extract.js');
const { listerModules } = require('./manuel/verifier-corpus.js');

const RACINE = path.join(__dirname, '..');
const ROOT = path.join(RACINE, 'js', 'data');

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
/* Un <text> SVG sur une seule ligne source : c'est ainsi que les figures du
   corpus sont écrites (une balise par ligne). */
const SVG_TEXT_KATEX = /<text\b[^>]*>[^<]*\{,\}/;

let errorCount = 0;
let warningCount = 0;

function erreur(ou, message, extrait) {
  errorCount++;
  console.error(`ERREUR ${ou} — ${message}` + (extrait ? `\n  ${extrait}` : ''));
}

/* ---- 1 et 2 : lecture du source --------------------------------------- */

const files = walk(ROOT);
for (const file of files) {
  const rel = path.relative(RACINE, file).split(path.sep).join('/');
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (MISSING_BRACE.test(line)) {
      erreur(`${rel}:${i + 1}`,
        'accolade fermante manquante après "{," (casse le rendu KaTeX)', line.trim());
    }
    if (SVG_TEXT_KATEX.test(line)) {
      erreur(`${rel}:${i + 1}`,
        'virgule KaTeX "{,}" dans une étiquette <text> SVG : KaTeX ne s\'y exécute pas, ' +
        'les accolades s\'impriment. Écrire la virgule nue', line.trim());
    }
    if (RAW_TOFIXED.test(line)) {
      warningCount++;
      console.warn(`AVERTISSEMENT ${rel}:${i + 1} — .toFixed(n) interpolé sans fr()/.replace('.', '{,}') : vérifier la notation décimale\n  ${line.trim()}`);
    }
  });
}

/* ---- 3 : exécution des generate() -------------------------------------- */

/* Champs réellement lus par un élève. `answer` est un Number : il passe par
   fr() côté application et par nombreFr() côté manuel, il n'est donc jamais
   interpolé tel quel — l'inclure ferait crier sur chaque exercice à réponse
   décimale, qui est pourtant correct. */
const CHAMPS = ['statement', 'hint', 'unit', 'solution', 'correction'];

/* Le balisage porte ses propres décimales légitimes (stroke-width="1.5",
   viewBox, src d'image) : il sort du champ avant l'examen. */
function texteVisible(s) {
  return String(s).replace(/<[^>]*>/g, ' ');
}

const DECIMALE_ANGLAISE = /(?<![\d.,])\d+\.\d+(?![\d.])/g;

function examiner(valeur, ou, trouve) {
  if (typeof valeur === 'string') {
    for (const m of texteVisible(valeur).matchAll(DECIMALE_ANGLAISE)) trouve.push({ ou, valeur: m[0] });
    return;
  }
  if (Array.isArray(valeur)) { valeur.forEach(v => examiner(v, ou, trouve)); return; }
}

const GRAINES = [1, 7, 20260816];
const TIRAGES = 40;

const chemins = listerModules();
let modulesExamines = 0;
let tiragesExamines = 0;

for (const chemin of chemins) {
  const trouve = [];
  let charge = false;
  for (const graine of GRAINES) {
    let exercices;
    try {
      ({ exercices } = chargerModule(chemin, { graine, tirages: TIRAGES }));
    } catch (e) {
      // Un module qui ne se charge pas relève de verifier-corpus.js, pas d'ici.
      break;
    }
    charge = true;
    tiragesExamines += exercices.length;
    exercices.forEach((ex, i) => {
      for (const champ of CHAMPS) {
        if (ex[champ] != null) examiner(ex[champ], `tirage ${i + 1}, ${champ}`, trouve);
      }
    });
  }
  if (charge) modulesExamines++;
  if (!trouve.length) continue;

  // Une seule ligne par module : le même `${aire}` fautif ressort sur des
  // dizaines de tirages, les énumérer tous noierait le rapport.
  const echantillon = [...new Set(trouve.map(t => t.valeur))].slice(0, 5);
  erreur(chemin,
    `notation décimale anglaise produite par exercice.generate() ` +
    `(${trouve.length} occurrence(s) sur ${GRAINES.length * TIRAGES} tirages) : ` +
    `utiliser fr(valeur)`,
    'exemples : ' + echantillon.join(', ') + ' — ' + trouve[0].ou);
}

console.log(`\n${files.length} fichiers lus, ${modulesExamines} modules exécutés ` +
  `(${tiragesExamines} tirages).`);
console.log(`${errorCount} erreur(s), ${warningCount} avertissement(s).`);
process.exit(errorCount > 0 ? 1 : 0);
