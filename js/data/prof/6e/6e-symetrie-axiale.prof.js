/* =========================================================
   Spark Learning – js/data/prof/6e/6e-symetrie-axiale.prof.js
   Fiche professeur du chapitre « Symétrie axiale » (sixième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-symetrie-axiale"] = {

  /* ch. 4 (décimaux) : les exercices passent par des coordonnées et une
     soustraction pouvant donner un négatif.
     ch. 8 (figures) AJOUTÉ le 2026-09-12 : construire un symétrique, c'est
     tracer une perpendiculaire à l'axe et reporter une longueur au compas,
     sur des segments nommés avec les notations du chapitre 8. Ce prérequis
     était vrai depuis toujours, mais le chapitre 8 vient APRÈS le chapitre 9
     dans le livre et l'ancienne règle de validation le refusait pour cette
     seule raison. La règle porte désormais sur le rang de la progression
     conseillée (voir `validerPrerequis`, scripts/manuel/prof.js). */
  prerequis: [4, 8],

  // Rang conseillé (2026-09-12) : rang 8, après les figures (ch. 8) dont il
  // reprend les instruments. Troisième étape du fil géométrique.
  rangConseille: 8,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Compléter une figure par symétrie axiale et construire le symétrique d'un point, d'un segment, d'une figure",
    "Identifier les axes de symétrie d'une figure et reconnaître une figure symétrique",
    "Savoir que la symétrie axiale conserve les longueurs, les angles et les aires"
  ],

  note: "Attention à la marche : le programme de sixième traite la symétrie axiale par PLIAGE et " +
        "par CONSTRUCTION à l'équerre et au compas. Les exercices et l'évaluation de ce chapitre " +
        "la traitent par COORDONNÉES ($x' = 2k - x$), ce qui relève du cycle 4 et suppose les " +
        "nombres relatifs, hors programme de sixième. En classe de sixième, faire précéder ces " +
        "exercices d'un travail sur papier quadrillé et au pliage ; la formule ne vient qu'après, " +
        "comme raccourci de ce qui a été construit. L'ordonnée négative de l'exercice 9.2 " +
        "($y' = -4$) demande en particulier d'avoir introduit les relatifs, ou d'être écartée.",

  erreurs: [
    {
      titre: "Croire que l'axe doit être vertical ou horizontal",
      eleve: "Face à un axe oblique, l'élève rabat la figure « à plat », vers la gauche ou vers le bas, " +
             "sans tenir compte de l'inclinaison.",
      cause: "Tous les exemples introductifs (miroir, pliage d'une feuille, lettres de l'alphabet) " +
             "utilisent des axes droits. L'élève généralise à partir de ce qu'il a vu.",
      remede: "Faire plier une feuille selon un pli oblique et percer un point à l'aiguille : le " +
              "symétrique apparaît là où le pli l'envoie, pas là où on l'attendait. Puis systématiser " +
              "le geste : perpendiculaire à l'axe, même distance de l'autre côté. " +
              "Les exercices du chapitre n'emploient que des axes verticaux ou horizontaux : " +
              "l'axe oblique demande une figure à construire, à prévoir hors du livre.",
      exercice: null
    },
    {
      titre: "Changer le signe au lieu de réfléchir sur l'axe",
      eleve: "Le point $A(5 ; 2)$ réfléchi par rapport à $x = 3$ donne $A'(-5 ; 2)$ : l'élève applique " +
             "la règle de l'axe des ordonnées à un axe qui n'est pas en $0$.",
      cause: "Le cas $x = 0$ est traité en premier et sa règle ($x' = -x$) est simple à retenir. " +
             "Elle s'installe comme la règle générale, l'axe particulier étant oublié.",
      remede: "Faire dessiner l'axe et compter les carreaux de part et d'autre, avant toute formule : " +
              "$A$ est à $2$ carreaux à droite de l'axe, donc $A'$ est à $2$ carreaux à gauche, " +
              "en $1$. Le décompte donne la réponse et montre que la formule $x' = 2k - x$ " +
              "ne fait que l'abréger.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier qu'un point de l'axe ne bouge pas",
      eleve: "Interrogé sur le symétrique d'un point situé SUR l'axe, l'élève cherche à le déplacer " +
             "et propose un autre point.",
      cause: "La symétrie est comprise comme un déplacement systématique : chaque point doit aller " +
             "ailleurs. Le point fixe apparaît comme un cas sans réponse plutôt que comme une " +
             "réponse.",
      remede: "Revenir au pliage : un point posé sur le pli retombe exactement sur lui-même. " +
              "La distance à l'axe vaut zéro des deux côtés. Faire formuler que le point est " +
              "son propre symétrique. Aucun des énoncés d'entraînement de ce chapitre ne " +
              "place le point SUR l'axe : la situation se construit au tableau, en un trait, " +
              "avant de la faire écrire.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION. Tous les énoncés
      // d'entraînement du chapitre placent le point à distance non nulle de
      // l'axe : aucun ne travaille le point fixe. On le dit plutôt que de
      // renvoyer à côté, comme le fait déjà l'erreur 1 pour l'axe oblique.
      exercice: null
    },
    {
      titre: "Croire que la symétrie déforme la figure",
      eleve: "L'élève hésite à affirmer que les longueurs sont conservées, ou construit un symétrique " +
             "visiblement plus petit que l'original.",
      cause: "Le mot « réflexion » évoque le miroir, et l'expérience quotidienne des miroirs " +
             "déformants ou des reflets dans l'eau suggère que l'image peut changer de taille.",
      remede: "Faire mesurer les deux figures après construction, systématiquement : mêmes longueurs, " +
              "mêmes angles. Le pliage rend la propriété évidente, puisque les deux moitiés se " +
              "superposent exactement.",
      // 2026-09-12 : renvoyait à la question 4 de l'ÉVALUATION. L'exercice 10
      // est justement formulé en termes de pliage (« en pliant une feuille le
      // long de la droite $y = 5$ ») : c'est l'énoncé du chapitre qui parle le
      // même langage que le remède. Son ordonnée reste positive, contrairement à
      // d'autres tirages, donc il n'exige pas les nombres relatifs.
      exercice: { type: "exercice", n: 10 }
    }
  ],

  // Q1 réflexion sur x = 0, Q2 réflexion sur x = 4, Q3 CHERCHER les axes du
  // carré par pliage, Q4 JUGER une justification, Q5 QCM point situé sur l'axe.
  //
  // 2026-09-12 : deux énoncés ont été RÉÉCRITS dans
  // js/data/6e/6e-symetrie-axiale.js. Q3 posait un résultat qui se retient (« un
  // carré a quatre axes ») et ne notait donc qu'une mémoire ; la consigne
  // demande maintenant d'essayer les plis un par un, ce qui est la démarche du
  // programme — et « chercher » au référentiel. Q4 se tranchait au mot
  // « isométrie », non exigible en sixième ; les quatre options répondent
  // désormais « oui » et seule la justification, formulée en termes de pliage,
  // les sépare : « communiquer ».
  competences: {
    evaluation: ["calculer", "calculer", "chercher", "communiquer", "raisonner"]
  }
};
