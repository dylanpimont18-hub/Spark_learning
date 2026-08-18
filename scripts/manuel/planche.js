/* =========================================================
   Spark Learning – scripts/manuel/planche.js
   Compose une planche de controle : toutes les figures d'un ouvrage, une par
   page, a la taille exacte qu'elles auront dans le livre.

   Raison d'etre : « 0 erreur LaTeX » ne prouve pas qu'une figure est juste.
   Une etiquette posee a l'envers, un arc parti dans le mauvais sens ou un
   point hors du cadre compilent parfaitement. Cette planche existe pour etre
   REGARDEE, page par page, avant de declarer un ouvrage bon a imprimer.

   Usage :
     node scripts/manuel/planche.js college-maths
     node scripts/manuel/planche.js college-maths 6e-fractions 3e-thales
   ========================================================= */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { chargerModule, RACINE } = require('./extract.js');
const { preparerFigures, figureUtilisable, LARGEUR_FIGURE_MM } = require('./figures.js');
const { modulesDeLOuvrage, OUVRAGES, SORTIE } = require('./build.js');
const { versLatex: L, definirOrigine } = require('./latex.js');
const { COULEURS_CHARTE } = require('./ouvrage.js');

const PDFLATEX = process.env.PDFLATEX || 'C:/Program Files/MiKTeX/miktex/bin/x64/pdflatex.exe';

/* Le preambule reprend a l'identique celui de l'ouvrage : une figure qui se
   comporte bien sur la planche mais pas dans le livre ne servirait a rien. */
function preambule() {
  return `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage[T1]{fontenc}
\\usepackage[french]{babel}
\\usepackage{amsmath,amssymb}
\\usepackage{textcomp}
\\usepackage[dvipsnames]{xcolor}
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta}
\\usepackage[paperwidth=170mm,paperheight=244mm,margin=14mm]{geometry}
${COULEURS_CHARTE}\\pagestyle{empty}
\\begin{document}
`;
}

function construire(cle, filtre) {
  const conf = OUVRAGES[cle];
  if (!conf) throw new Error('Ouvrage inconnu : ' + cle);

  const entrees = modulesDeLOuvrage(cle)
    .filter(e => !filtre.length || filtre.includes(path.basename(e.fichier, '.js')));
  if (!entrees.length) throw new Error('Aucun module retenu');

  const mods = entrees.map(e => chargerModule(e.fichier, { graine: 1, tirages: 0 }).module);
  const figures = preparerFigures(mods);

  const pages = [];
  let retenues = 0;
  for (const mod of mods) {
    const f = figures[mod.id];
    definirOrigine(mod.id);
    const titre = `\\noindent{\\small\\bfseries\\color{ardoise}${L(mod.id)}}\\par` +
      `{\\scriptsize\\color{gris}${L(mod.title)}}\\par\\vspace{4mm}`;
    if (!figureUtilisable(f)) {
      pages.push(titre + `\\noindent{\\color{erreur}\\bfseries FIGURE BLOQUEE} --- ${L(f.raison || 'sans provenance')}`);
      continue;
    }
    retenues++;
    const d = mod.cours.diagram;
    pages.push(titre + '\\begin{center}\n' + f.tikz + '\n\\end{center}\n' +
      `\\vspace{3mm}\\noindent{\\scriptsize\\color{gris}${L(d.caption || d.title || '')}}\\par` +
      `\\vspace{1mm}\\noindent{\\scriptsize\\color{gris}${f.elements} traces \\textbullet{} ` +
      `provenance ${f.provenance} \\textbullet{} empreinte ${f.empreinte}}`);
  }

  const dossier = path.join(SORTIE, cle);
  fs.mkdirSync(dossier, { recursive: true });
  const nom = 'planche-figures';
  fs.writeFileSync(path.join(dossier, nom + '.tex'),
    preambule() + pages.join('\n\\newpage\n') + '\n\\end{document}\n', 'utf8');

  cp.spawnSync(PDFLATEX, ['-interaction=nonstopmode', nom + '.tex'],
    { cwd: dossier, encoding: 'utf8', timeout: 600000 });

  const log = fs.readFileSync(path.join(dossier, nom + '.log'), 'utf8');
  const erreurs = log.match(/^! .*$/gm) || [];
  console.log(`planche ${cle} : ${pages.length} figures (${retenues} utilisables), ` +
    `${erreurs.length} erreur(s), largeur ${LARGEUR_FIGURE_MM} mm`);
  erreurs.slice(0, 5).forEach(e => console.log('   ' + e));
  console.log('   ' + path.join(dossier, nom + '.pdf'));
  return path.join(dossier, nom + '.pdf');
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (!args.length) { console.log('usage : node scripts/manuel/planche.js <ouvrage> [module...]'); process.exit(1); }
  construire(args[0], args.slice(1));
}

module.exports = { construire };
