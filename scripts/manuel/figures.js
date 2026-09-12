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

/* Largeur des figures D'EXERCICE (2026-09-12), nettement plus petite que celle
   d'un schema de chapitre. Un chapitre de sixieme porte douze exercices : a
   128 mm chacun, la seule section « Exercices » gagnerait une quinzaine de
   pages et ferait exploser la pagination de l'ouvrage.

   52 mm est la valeur retenue apres essais entre 45 et 60 : a 45 les cotes
   chiffrees tombaient sous le plancher typographique de svg2tikz (CORPS_MIN =
   5,2 pt) et se composaient toutes a la meme taille, ce qui aplatissait la
   hierarchie entre une cote et une graduation ; a 60 le rectangle d'un exercice
   d'aire occupait plus de place que son enonce. 52 mm tient dans un tiers de la
   largeur de justification, laisse l'espace de reponse a sa hauteur, et garde
   les cotes lisibles. */
const LARGEUR_FIGURE_EXERCICE_MM = 52;

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

/* Convertit la figure portee par UN exercice tire (2026-09-12).

   Meme regle de provenance que pour les schemas de chapitre, et c'est le point
   important : la figure d'un exercice est produite par les helpers de
   js/data/figures-exercices.js sous forme de SVG, puis convertie ici. Elle
   passe donc par le meme controle « svg-exact » que les figures de cours —
   rien n'entre dans le livre sans source SVG verifiable.

   Difference unique : la LARGEUR. Une figure d'exercice s'imprime a 52 mm.

   `origine` porte l'identifiant du module et le rang de l'exercice, pour que
   « caractere inconnu dans 6e-volumes/ex3 » nomme l'exercice fautif et pas
   seulement le chapitre. */
function preparerFigureExercice(mod, exercice, rang) {
  if (!exercice || !exercice.figure || !exercice.figure.svg) return null;
  try {
    const r = versTikz(exercice.figure.svg, {
      largeurMm: LARGEUR_FIGURE_EXERCICE_MM,
      matiere: matiereDe(mod),
      origine: mod.id + '/ex' + (rang + 1)
    });
    if (exercice.figure.caption) r.caption = exercice.figure.caption;
    return r;
  } catch (e) {
    return { provenance: null, raison: 'conversion impossible : ' + e.message };
  }
}

/* Convertit les figures de TOUS les exercices tires d'un module. Renvoie un
   tableau parallele a `exercices` : l'entree i vaut null si l'exercice i ne
   porte aucune figure (le cas de la majorite des exercices — un calcul
   d'arithmetique pure n'en a pas besoin, et on n'en met pas pour faire du
   chiffre). */
function preparerFiguresExercices(mod, exercices) {
  return (exercices || []).map((ex, i) => preparerFigureExercice(mod, ex, i));
}

module.exports = {
  preparerFigures, figureUtilisable, LARGEUR_FIGURE_MM,
  preparerFigureExercice, preparerFiguresExercices, LARGEUR_FIGURE_EXERCICE_MM
};
