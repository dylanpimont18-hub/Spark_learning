/* =========================================================
   Spark Learning – js/data/prof/5e/5e-symetrie-centrale.prof.js
   Fiche professeur du chapitre « Symétrie centrale » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-symetrie-centrale"] = {

  /* ch. 1 (repérage graphique) : toutes les questions d'évaluation et tous les
     exercices du chapitre travaillent le symétrique EN COORDONNÉES, avec des
     abscisses et des ordonnées négatives. Le repère et la lecture de
     coordonnées doivent donc être installés.
     ch. 9 (parallélogrammes) : le parallélogramme est l'exemple canonique de
     figure admettant un centre de symétrie sans axe, et c'est la question 5 de
     l'évaluation. Sans ce chapitre, la question porterait sur un objet inconnu. */
  prerequis: [1, 9],

  /* Rang conseillé 10 sur 14, contre la 7e place dans le LIVRE : c'est le
     décalage le plus net de l'ouvrage, et il est assumé. Le livre range ce
     chapitre avec les transformations, tôt dans le domaine géométrique ; la
     progression le place après les parallélogrammes, dont il a besoin.
     C'est exactement le genre de contradiction que la colonne « rang conseillé »
     du tableau de progression sert à rendre visible. */
  rangConseille: 10,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Construire le symétrique d'un point, d'un segment, d'une droite ou d'une figure par rapport à un point",
    "Identifier le centre de symétrie d'une figure lorsqu'il existe, et savoir qu'une figure peut n'en avoir aucun",
    "Reconnaître que la symétrie centrale conserve les longueurs, les angles et les aires"
  ],

  note: "La symétrie centrale est pleinement au programme de cinquième, construction et propriétés de " +
        "conservation comprises. Deux points du chapitre vont au-delà. " +
        "La FORMULE en coordonnées, $A'(2x_O - x_A \\;; 2y_O - y_A)$, n'est pas exigible : le programme " +
        "demande une construction géométrique (à la règle, au compas ou au quadrillage), et la formule " +
        "n'est ici qu'un outil de vérification rapide. Un élève qui construit juste sans la connaître " +
        "satisfait pleinement l'attendu — c'est à dire explicitement en classe, sans quoi les plus " +
        "fragiles croiront devoir mémoriser une formule de plus. " +
        "L'identification à une ROTATION de $180°$, elle, anticipe le chapitre des rotations de troisième : " +
        "elle éclaire bien le « demi-tour » et peut rester, à condition de ne jamais être évaluée comme telle. " +
        "Noter enfin que les exercices et l'évaluation travaillent tous le symétrique en coordonnées, " +
        "alors que le programme valorise la construction sur figure : un devoir complet devrait comporter " +
        "au moins une construction à la règle, que cet ouvrage ne peut pas générer automatiquement.",

  erreurs: [
    {
      titre: "Confondre symétrie centrale et symétrie axiale",
      eleve: "Pour le symétrique de $A(5 ; 3)$ par rapport à $O(2 ; 1)$, l'élève change le signe d'une " +
             "coordonnée (il répond $A'(-5 ; 3)$ ou $A'(5 ; -3)$), comme s'il pliait la figure le long " +
             "d'un axe.",
      cause: "La symétrie axiale, vue en sixième, est le seul modèle disponible, et elle se traduit " +
             "effectivement par un changement de signe quand l'axe est un axe du repère. L'élève " +
             "transpose ce geste numérique sans voir que le centre $O$ n'est ni l'origine ni un axe.",
      remede: "Faire placer les trois points $A$, $O$ et $A'$ sur un quadrillage et vérifier à la règle " +
              "que $O$ est le MILIEU de $[AA']$ — c'est la définition, et elle se contrôle à la règle " +
              "graduée. Insister sur la différence de nature : un axe est une droite, un centre est un " +
              "point. Faire constater au passage qu'un demi-tour CONSERVE l'orientation de la figure " +
              "(la main droite reste une main droite) alors que le pliage l'inverse, ce qui distingue les " +
              "deux transformations sans aucun calcul.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Calculer l'écart au lieu du symétrique",
      eleve: "Pour $A(5 ; 3)$ et $O(2 ; 1)$, l'élève répond $3$ pour l'abscisse du symétrique, " +
             "c'est-à-dire l'écart $5 - 2$, au lieu de $-1$.",
      cause: "L'élève effectue correctement la première moitié du raisonnement — mesurer l'écart entre " +
             "$A$ et le centre — puis s'arrête, faute de voir qu'il faut REPORTER cet écart de l'autre " +
             "côté du centre. L'erreur est donc un travail inachevé, pas une méconnaissance.",
      remede: "Imposer le trajet en deux étapes, dit à voix haute : « de $A$ je vais jusqu'à $O$, puis je " +
              "continue d'AUTANT ENCORE ». Sur l'axe des abscisses : de $5$ à $2$ je recule de $3$, donc " +
              "je recule encore de $3$ et j'arrive à $-1$. Le contrôle est immédiat et l'élève peut le " +
              "faire seul : $O$ doit se retrouver à égale distance de $A$ et de $A'$. La figure des " +
              "exercices, qui place $A$ et le centre et laisse le symétrique en cercle vide, permet " +
              "précisément de compter ce double report sur la graduation.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que toute figure a un centre de symétrie",
      eleve: "« Un triangle équilatéral a un centre de symétrie, c'est son centre » ; ou inversement, " +
             "« un parallélogramme n'a pas de centre puisqu'il n'a pas d'axe ».",
      cause: "Les deux symétries sont amalgamées en une seule idée vague de « figure bien régulière ». " +
             "Un triangle équilatéral, très symétrique d'aspect, semble devoir tout avoir ; un " +
             "parallélogramme penché, qui n'a aucun axe, semble n'avoir rien. Or c'est exactement " +
             "l'inverse qui est vrai, et c'est contre-intuitif.",
      remede: "Faire le test du demi-tour physiquement : décalquer la figure, planter la pointe du compas " +
              "au centre supposé, faire tourner le calque d'un demi-tour et regarder s'il se superpose. " +
              "Sur le triangle équilatéral, il ne se superpose pas — la pointe remonte là où il y avait " +
              "un côté. Sur le parallélogramme, il se superpose exactement. Conclure par le tableau des " +
              "quatre figures du schéma de cours : avoir des axes et avoir un centre sont deux questions " +
              "indépendantes, et les quatre combinaisons existent.",
      exercice: null
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE. Le generateur du chapitre ne
         produit QUE des symetriques de point en coordonnees ; aucun exercice ne
         demande si une figure POSSEDE un centre de symetrie. La seule question
         qui le fasse est la question 5 de l'evaluation, donc le devoir note,
         vers lequel une remediation ne renvoie jamais. Le remede s'appuie donc
         sur le test du calque et sur le schema de cours, qui traitent
         exactement cela. */
    }
  ],

  /* Q1 abscisse du symétrique          -> calculer
     Q2 retrouver le centre de symétrie -> chercher
     Q3 propriété du milieu             -> raisonner
     Q4 abscisse du milieu d'un segment -> représenter
     Q5 centre de symétrie d'un parallélogramme -> raisonner

     Q4 relève de « représenter » et non de « calculer » : la difficulté n'est
     pas la moyenne de deux nombres mais la lecture du repère et le passage du
     couple de coordonnées à une position — c'est le registre graphique qui est
     évalué. Q3 et Q5 sont bien deux « raisonner » distincts : l'un porte sur la
     propriété caractéristique (le milieu), l'autre sur l'existence d'un centre
     pour une figure donnée, qui est le point le plus souvent manqué. */
  competences: {
    evaluation: ["calculer", "chercher", "raisonner", "représenter", "raisonner"]
  }
};
