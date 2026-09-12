/* =========================================================
   Spark Learning – js/data/prof/6e/6e-angles.prof.js
   Fiche professeur du chapitre « Angles » (sixième). JAMAIS chargée par
   le site : seul scripts/manuel/prof.js la lit, au moment de compiler
   le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-angles"] = {

  /* 2026-09-12 — liste VIDE jusqu'ici, et pas parce que le chapitre n'avait
     pas de prérequis : ses deux prérequis réels sont des chapitres
     POSTÉRIEURS dans le livre (les angles y sont en 3), ce que l'ancienne
     règle de validation interdisait d'écrire. La règle porte désormais sur le
     rang de la progression conseillée, pas sur l'ordre du livre : voir
     `validerPrerequis` dans scripts/manuel/prof.js.

     ch. 4 (décimaux) : mesurer un angle, c'est lire un nombre sur une
     graduation ; les mesures du chapitre se comparent, s'additionnent et se
     soustraient (somme des angles du triangle).
     ch. 8 (figures) : un angle se note $\\widehat{ABC}$ et se trace à partir
     de deux demi-droites de même origine. Sans le vocabulaire et les
     notations du chapitre 8, l'énoncé même des exercices d'angles n'est pas
     lisible. */
  prerequis: [4, 8],

  // Rang conseillé (2026-09-12) : rang 5, une fois les décimaux installés et
  // le vocabulaire de la figure acquis. Deuxième étape du fil géométrique.
  rangConseille: 5,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaines « Grandeurs et mesures » et « Espace et géométrie ».
  attendus: [
    "Comparer des angles, estimer et mesurer un angle en degrés avec un rapporteur",
    "Identifier un angle droit, aigu, obtus, plat, et construire un angle de mesure donnée",
    "Utiliser la somme des angles d'un triangle pour trouver une mesure manquante"
  ],

  note: "Le programme de sixième installe la mesure au rapporteur et le vocabulaire des angles. " +
        "Les angles complémentaires et supplémentaires, ainsi que l'usage d'une inconnue " +
        "($2x + 5°$), relèvent du cycle 4 : le chapitre les anticipe. Les questions 4 du quiz " +
        "et de l'évaluation peuvent être réservées aux élèves à l'aise, ou traitées " +
        "arithmétiquement (« par essais ») plutôt que par équation.",

  erreurs: [
    {
      titre: "Croire qu'un angle dépend de la longueur des côtés",
      eleve: "Devant deux angles de même écartement dont l'un est dessiné avec des côtés plus longs, " +
             "l'élève affirme que le second est « plus grand ».",
      cause: "Toutes les grandeurs rencontrées jusqu'ici (longueur, aire, volume) croissent avec la " +
             "taille du dessin. L'angle est la première grandeur qui ne change pas quand la figure " +
             "s'agrandit, et rien dans le dessin ne le dit.",
      remede: "Prolonger au tableau les côtés d'un angle déjà tracé, sous les yeux des élèves, et " +
              "remesurer : la mesure ne bouge pas. Puis faire formuler que l'angle mesure " +
              "un écartement, pas une longueur. Aucune question du chapitre n'isole ce point : " +
              "le classement d'un angle par sa seule mesure (question 3 de l'évaluation) est " +
              "l'occasion la plus proche pour le faire dire.",
      // 2026-09-12 : renvoyait à la question 3 de l'ÉVALUATION. L'exercice 8
      // (un triangle tracé sur un plan de construction, dont deux angles valent
      // $22°$ et $66°$) donne le même appui en entraînement : les côtés y sont
      // dessinés à des longueurs quelconques, ce qui permet de faire dire que la
      // mesure n'en dépend pas.
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Lire la mauvaise graduation du rapporteur",
      eleve: "Un angle de $60°$ est annoncé à $120°$ : l'élève a suivi la graduation extérieure au lieu " +
             "de l'intérieure.",
      cause: "Le rapporteur porte deux séries de nombres en sens inverse, sans indication de celle " +
             "qu'il faut lire. L'élève choisit celle dont le chiffre tombe sous le trait.",
      remede: "Faire estimer AVANT de mesurer : « cet angle est-il plus petit ou plus grand qu'un " +
              "angle droit ? ». L'estimation élimine seule la mauvaise graduation. " +
              "C'est un réflexe à exiger à chaque mesure, pas seulement en cas d'erreur. " +
              "Attention : les exercices du chapitre sont tous numériques et aucun ne fait " +
              "manipuler le rapporteur. Cette erreur se remédie sur figures, à prévoir à part.",
      exercice: null
    },
    {
      titre: "Confondre complémentaires et supplémentaires",
      eleve: "« Ces deux angles sont complémentaires, leur somme fait $180°$ » : les deux mots sont " +
             "intervertis.",
      cause: "Les deux termes se ressemblent, sont introduits ensemble, et aucun des deux ne porte " +
             "en lui-même la valeur qu'il désigne. Rien n'aide la mémoire.",
      remede: "Ancrer chaque mot sur une figure plutôt que sur sa définition : complémentaire au coin " +
              "de la feuille (l'angle droit), supplémentaire sur la ligne droite (l'angle plat). " +
              "L'ordre alphabétique aide aussi : complémentaire avant supplémentaire, $90$ avant $180$.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier que le triangle isocèle a deux angles égaux",
      eleve: "Dans un triangle isocèle d'angle au sommet $76°$, l'élève répond $180 - 76 = 104°$ et " +
             "s'arrête, donnant la somme des deux angles de base pour un seul.",
      cause: "La soustraction à $180°$ est le geste appris, et il aboutit à un nombre plausible. " +
             "Rien dans le résultat ne signale qu'une étape manque.",
      remede: "Exiger un contrôle de vraisemblance : $76 + 104 + 104$ dépasse largement $180$. " +
              "Faire nommer les trois angles avant de calculer, pour que l'élève voie qu'il en " +
              "cherche deux et non un.",
      exercice: { type: "exercice", n: 1 }
    }
  ],

  // Q1 somme des angles, Q2 JUGER une justification écrite, Q3 QCM
  // classification, Q4 mise en équation, Q5 QCM horloge (modélisation).
  //
  // 2026-09-12 : Q2 était une soustraction de plus ($180 - 118$) dans un
  // chapitre qui en comptait déjà une en Q1. Elle a été RÉÉCRITE dans
  // js/data/6e/6e-angles.js : les quatre options donnent maintenant le même
  // résultat $62°$ et seule la justification les sépare, ce qui mobilise
  // réellement « communiquer ».
  competences: {
    evaluation: ["calculer", "communiquer", "représenter", "raisonner", "modéliser"]
  }
};
