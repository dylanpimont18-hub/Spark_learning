/* =========================================================
   Spark Learning – scripts/manuel/figures.js
   Rend les schemas des modules en PDF vectoriel pour l'impression.

   Regle de provenance : une figure n'entre dans un ouvrage que si sa
   geometrie vient d'une source verifiable. Ici « svg-exact » : les
   coordonnees sont celles du SVG deja publie sur le site, reproduites
   sans reinterpretation. Toute figure sans provenance est refusee et
   remonte au tableau de bord.

   Les SVG des modules ne portent que des classes (frame-line, curve-main,
   plot-point...), stylees dans css/styles.css avec des variables CSS et
   color-mix(). Il faut donc reinjecter une feuille de style resolue, sinon
   le schema sort nu.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { RACINE } = require('./extract.js');

const ACCENT_PAR_MATIERE = {
  maths: '#2C3E50', physique: '#18806F', si: '#6B7F3A', fed: '#B4661C'
};

function feuilleDeStyle(matiere) {
  const accent = ACCENT_PAR_MATIERE[matiere] || ACCENT_PAR_MATIERE.maths;
  return `
    @page { margin: 0; }
    html,body { margin:0; padding:0; background:#fff; }
    .scene { padding: 8px; }
    svg { display:block; width:100%; height:auto; overflow:visible; }
    svg .axis, svg .frame-line { stroke:#33414e; stroke-width:2.2; fill:none; }
    svg .curve-main, svg .graph-line { fill:none; stroke:${accent}; stroke-width:4;
      stroke-linecap:round; stroke-linejoin:round; }
    svg .guide-line, svg .focus-line { stroke:#93a1ac; stroke-width:1.8;
      stroke-dasharray:6 5; fill:none; }
    svg .plot-point { fill:${accent}; stroke:#fff; stroke-width:3; }
    svg .plot-point-alt { fill:#fff; stroke:${accent}; stroke-width:3; }
    svg .label, svg .axis-label, svg .tick-label, svg .annotation-label {
      fill:#16202a; font-family: Georgia,'Times New Roman',serif; }
    svg .axis-label, svg .annotation-label { font-size:13px; font-weight:700; }
    svg .tick-label, svg .label-soft { fill:#5c6873; font-size:11px; }
  `;
}

function nettoyer(svg) {
  return svg
    .replace(/fill="color-mix\([^"]*\)"/g, 'fill="#f3f6f8"')
    .replace(/stroke="color-mix\([^"]*\)"/g, 'stroke="#dbe2e8"')
    .replace(/var\(--[a-z-]+\)/g, '#e9edf1');
}

/* Rend toutes les figures d'une liste de modules en une seule session de
   navigateur (48 lancements separes coutent une minute pour rien). */
async function rendreFigures(modules, dossierSortie, options) {
  const opts = options || {};
  const largeurPouces = opts.largeurPouces || 5.2;
  fs.mkdirSync(dossierSortie, { recursive: true });

  const puppeteer = require(path.join(RACINE, 'node_modules', 'puppeteer'));
  const navigateur = await puppeteer.launch({ headless: true });
  const page = await navigateur.newPage();

  const resultats = {};
  try {
    for (const mod of modules) {
      const svg = mod.cours && mod.cours.diagram && mod.cours.diagram.svg;
      if (!svg) { resultats[mod.id] = { provenance: null, raison: 'aucun schema' }; continue; }

      const propre = nettoyer(svg);
      const vb = /viewBox="([\d.\s-]+)"/.exec(propre);
      if (!vb) { resultats[mod.id] = { provenance: null, raison: 'SVG sans viewBox' }; continue; }
      const [, , l, h] = vb[1].trim().split(/\s+/).map(Number);
      if (!l || !h) { resultats[mod.id] = { provenance: null, raison: 'viewBox illisible' }; continue; }

      await page.setContent(
        `<!doctype html><meta charset="utf-8"><style>${feuilleDeStyle(mod.subject)}</style>` +
        `<div class="scene">${propre}</div>`, { waitUntil: 'load' });

      const nom = 'fig-' + mod.id + '.pdf';
      await page.pdf({
        path: path.join(dossierSortie, nom), printBackground: true,
        width: largeurPouces + 'in',
        height: (largeurPouces * (h / l) + 0.14) + 'in', pageRanges: '1'
      });

      resultats[mod.id] = {
        fichier: nom,
        provenance: 'svg-exact',
        empreinte: crypto.createHash('sha1').update(svg).digest('hex').slice(0, 12)
      };
    }
  } finally {
    await navigateur.close();
  }
  return resultats;
}

/* Garde-fou : seule une figure portant une provenance peut etre inseree. */
function figureUtilisable(entree) {
  return !!(entree && entree.provenance && entree.fichier);
}

module.exports = { rendreFigures, figureUtilisable };
