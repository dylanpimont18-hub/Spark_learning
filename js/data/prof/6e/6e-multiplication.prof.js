/* =========================================================
   Spark Learning – js/data/prof/6e/6e-multiplication.prof.js
   Fiche professeur du chapitre « Multiplication des entiers et décimaux »
   (sixième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-multiplication"] = {

  // Placer la virgule d'un produit suppose de savoir ce que vaut chaque rang.
  prerequis: [4],

  // Rang conseillé (2026-09-12) : rang 4, juste après l'addition dont il
  // reprend la technique posée, et avant tout ce qui multiplie des grandeurs
  // — aires (ch. 10) et volumes (ch. 2), qui le déclarent tous deux en
  // prérequis.
  rangConseille: 4,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Calculer un produit de nombres décimaux de façon exacte, posée ou en ligne, et mentalement",
    "Utiliser les propriétés de la multiplication, dont la distributivité, pour calculer astucieusement",
    "Contrôler la vraisemblance d'un produit par un ordre de grandeur"
  ],

  note: "Le placement de la virgule est le cœur du chapitre et le principal point dur de la " +
        "sixième en calcul. La règle « on additionne les décimales » est efficace mais opaque : " +
        "la faire précéder d'un ordre de grandeur lui donne du sens et permet de la contrôler. " +
        "Le mot « distributivité » n'est pas exigible sous ce terme en sixième, la propriété si.",

  erreurs: [
    {
      titre: "Placer la virgule d'après le plus long facteur",
      eleve: "Pour $0{,}4 \\times 0{,}3$, l'élève calcule $4 \\times 3 = 12$ puis n'ôte qu'une décimale " +
             "et écrit $1{,}2$ au lieu de $0{,}12$.",
      cause: "La règle retenue est « on remet la virgule », sans le décompte. L'élève reproduit " +
             "le nombre de décimales de l'un des facteurs, celui qu'il a sous les yeux, plutôt que " +
             "d'additionner ceux des deux.",
      remede: "Faire précéder tout calcul d'un encadrement : les deux facteurs valent moins de $1$, " +
              "donc le produit aussi. $1{,}2$ est alors éliminé avant même de compter. " +
              "Ensuite seulement, appliquer la somme des décimales comme vérification.",
      // 2026-09-12 : renvoyait à la question 3 de l'ÉVALUATION. L'exercice 7
      // ($6{,}2 \times 2{,}2$) présente deux facteurs à UNE décimale chacun : le
      // produit en demande deux, et l'élève qui recopie la longueur d'un seul
      // facteur se trompe d'un facteur dix.
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Croire que multiplier agrandit toujours",
      eleve: "L'élève refuse un produit plus petit que ses facteurs, ou annonce que " +
             "$8 \\times 0{,}5$ vaut plus que $8$.",
      cause: "Toute l'école élémentaire multiplie par des entiers supérieurs à $1$, où le produit " +
             "grandit systématiquement. « Multiplier, c'est agrandir » est une règle jamais " +
             "contredite avant les décimaux.",
      remede: "Passer par le sens : multiplier par $0{,}5$, c'est prendre la moitié. Faire produire " +
              "plusieurs exemples où le résultat diminue, jusqu'à ce que l'élève formule lui-même " +
              "la condition (le facteur est plus petit que $1$).",
      exercice: { type: "quiz", n: 2 }
    },
    {
      titre: "Poser une multiplication de décimaux comme une addition",
      eleve: "L'élève aligne les virgules avant de multiplier, comme il vient de le faire pour " +
             "l'addition, et se perd dans les colonnes.",
      cause: "Le chapitre précédent a imposé « aligne les virgules » comme règle de pose. Rien " +
             "n'indique que la consigne change d'une opération à l'autre.",
      remede: "Énoncer la différence explicitement au moment de la pose : en multiplication, on " +
              "ignore les virgules pendant tout le calcul et on ne les replace qu'à la fin. " +
              "Faire écrire le produit des entiers d'abord, virgules masquées.",
      // 2026-09-12 : renvoyait à la question 1 de l'ÉVALUATION. Le supplément 2
      // (rectangle $6{,}7$ cm sur $2{,}6$ cm) fait poser une multiplication de
      // deux décimaux en entraînement, et le contexte d'aire fournit en prime
      // l'ordre de grandeur qui sert de contrôle.
      exercice: { type: "supplement", n: 2 }
    },
    {
      titre: "Décomposer en oubliant un terme",
      eleve: "Pour $7 \\times 5{,}2$, l'élève écrit $7 \\times 5 = 35$ et s'arrête, oubliant " +
             "$7 \\times 0{,}2$.",
      cause: "La décomposition crée deux calculs là où l'élève en attendait un. Le premier produit " +
             "est le plus gros et semble constituer la réponse ; le second, petit, paraît " +
             "négligeable.",
      remede: "Faire écrire la décomposition en entier AVANT tout calcul, avec les deux produits " +
              "posés et le signe $+$ entre eux. L'ordre de grandeur aide aussi : $7 \\times 5{,}2$ " +
              "doit dépasser $35$.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION. L'exercice 10
      // ($9{,}9 \times 2$) se prête particulièrement à la décomposition
      // $9 \times 2 + 0{,}9 \times 2$ : l'élève qui oublie le second terme
      // annonce $18$ au lieu de $19{,}8$, et l'ordre de grandeur le rattrape.
      exercice: { type: "exercice", n: 10 }
    }
  ],

  // Q1 produit posé, Q2 décompte des décimales, Q3 JUGER un commentaire de
  // copie, Q4 problème de prix total, Q5 QCM décomposition (distributivité).
  //
  // 2026-09-12 : Q3 se tranchait au seul résultat $0{,}42$, ce qui en faisait un
  // calcul de plus déguisé en analyse. L'énoncé a été RÉÉCRIT dans
  // js/data/6e/6e-multiplication.js : les quatre commentaires proposés portent
  // désormais la même valeur juste, et c'est la qualité de l'explication qui est
  // évaluée — « communiquer ».
  competences: {
    evaluation: ["calculer", "raisonner", "communiquer", "modéliser", "représenter"]
  }
};
