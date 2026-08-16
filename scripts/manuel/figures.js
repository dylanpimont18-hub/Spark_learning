/* =========================================================
   Spark Learning – scripts/manuel/figures.js
   Prepare les schemas des modules pour l'impression.

   Regle de provenance : une figure n'entre dans un ouvrage que si sa geometrie
   vient d'une source verifiable. Ici « svg-exact » : les coordonnees sont
   celles du SVG deja publie sur le site, reprises sans reinterpretation, avec
   l'empreinte du source pour le prouver. Toute figure sans provenance est
   refusee et remonte au tableau de bord.

   Le rendu passe par TikZ et non par une image : la geometrie du SVG etait
   deja juste, mais ses etiquettes etaient du texte de navigateur. En rendant
   la main a TeX, « A'B' » redevient une vraie expression mathematique, et les
   epaisseurs de trait se choisissent en points typographiques plutot qu'en
   unites de viewBox. Effet de bord appreciable : plus de navigateur a lancer,
   la preparation des 48 figures d'un ouvrage devient instantanee.
   ========================================================= */

const { versTikz } = require('./svg2tikz.js');

/* Largeur physique des figures, en millimetres. Fixe et non proportionnelle a
   \textwidth : la gouttiere change entre les deux passes de compilation, et
   une figure qui changerait de taille avec elle ferait bouger toute la
   pagination entre la passe qui la mesure et celle qui la fixe. */
const LARGEUR_FIGURE_MM = 128;

function matiereDe(mod) {
  const s = String(mod.subject || 'maths');
  if (/physique|chimie/.test(s)) return 'physique';
  if (/fed/.test(s)) return 'fed';
  if (/si|ingenieur|ingénieur/.test(s)) return 'si';
  return 'maths';
}

/* Convertit les schemas d'une liste de modules. Purement synchrone : rien
   n'est ecrit sur le disque, le TikZ part directement dans le .tex du chapitre. */
function preparerFigures(modules, options) {
  const opts = options || {};
  const resultats = {};

  for (const mod of modules) {
    const svg = mod.cours && mod.cours.diagram && mod.cours.diagram.svg;
    if (!svg) { resultats[mod.id] = { provenance: null, raison: 'aucun schema' }; continue; }

    let r;
    try {
      r = versTikz(svg, {
        largeurMm: opts.largeurMm || LARGEUR_FIGURE_MM,
        matiere: matiereDe(mod),
        origine: mod.id
      });
    } catch (e) {
      r = { provenance: null, raison: 'conversion impossible : ' + e.message };
    }
    resultats[mod.id] = r;
  }
  return resultats;
}

/* Garde-fou : seule une figure portant une provenance peut etre inseree. */
function figureUtilisable(entree) {
  return !!(entree && entree.provenance && entree.tikz);
}

module.exports = { preparerFigures, figureUtilisable, LARGEUR_FIGURE_MM };
