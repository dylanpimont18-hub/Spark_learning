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

/* Convertit un seul schema (mod.cours.diagram ou une entree de
   mod.cours.diagrams[]) en TikZ. suffixeOrigine distingue les schemas d'un
   meme module dans les messages d'erreur (« caractere inconnu dans X#2 »). */
function convertirUneFigure(mod, diagram, opts, suffixeOrigine) {
  const svg = diagram && diagram.svg;
  if (!svg) return { provenance: null, raison: 'aucun schema' };
  try {
    return versTikz(svg, {
      largeurMm: opts.largeurMm || LARGEUR_FIGURE_MM,
      matiere: matiereDe(mod),
      origine: mod.id + (suffixeOrigine || '')
    });
  } catch (e) {
    return { provenance: null, raison: 'conversion impossible : ' + e.message };
  }
}

/* Convertit les schemas d'une liste de modules. Purement synchrone : rien
   n'est ecrit sur le disque, le TikZ part directement dans le .tex du chapitre.

   Un module peut porter un schema principal (cours.diagram) et, depuis que
   plusieurs modules BTS/physique en ont besoin pour couvrir tout un chapitre,
   des schemas secondaires (cours.diagrams[], meme mecanisme d'affichage que
   coursDiagramList() cote site). resultats[mod.id] garde EXACTEMENT la forme
   historique (provenance/tikz/raison) pour le schema principal — rien ne
   casse cote appelant existant — et gagne un champ .secondaires (tableau,
   meme forme, un element par entree de cours.diagrams[]) quand il y en a. */
function preparerFigures(modules, options) {
  const opts = options || {};
  const resultats = {};

  for (const mod of modules) {
    resultats[mod.id] = convertirUneFigure(mod, mod.cours && mod.cours.diagram, opts);

    const diagrammes = (mod.cours && Array.isArray(mod.cours.diagrams)) ? mod.cours.diagrams : [];
    if (diagrammes.length) {
      resultats[mod.id].secondaires = diagrammes.map((d, i) =>
        convertirUneFigure(mod, d, opts, '#' + (i + 2)));
    }
  }
  return resultats;
}

/* Garde-fou : seule une figure portant une provenance peut etre inseree. */
function figureUtilisable(entree) {
  return !!(entree && entree.provenance && entree.tikz);
}

module.exports = { preparerFigures, figureUtilisable, LARGEUR_FIGURE_MM };
