/* =========================================================
   Spark Learning – js/data/prof/4e/puissances.prof.js
   Fiche professeur du chapitre « Puissances de 10 et notation scientifique »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   NOM DU FICHIER : le module s'appelle `puissances.js` et son identifiant est
   `puissances`, sans préfixe de niveau — contrairement à la plupart des modules
   de 4e. La fiche prend le nom de l'IDENTIFIANT, jamais du fichier, et c'est
   bien ce qui est le cas ici. Ne pas renommer : l'identifiant est référencé dans
   js/loader.js et dans les URL du site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["puissances"] = {

  /* ch. 5 (relatifs, multiplication et division) : les exposants sont des
     entiers relatifs, et additionner $-6$ et $+4$ est un prérequis strict du
     produit de puissances. Un élève qui bute sur la somme des exposants ne bute
     pas sur les puissances. */
  prerequis: [5],

  /* Rang conseillé 3 : après les relatifs (rang 1) dont les exposants sont faits,
     après les fractions (rang 2) dont la notion de quotient sert au quotient de
     puissances, et avant le calcul littéral (rang 4) où les puissances
     apparaissent dans les formules. */
  rangConseille: 3,

  attendus: [
    "Utiliser les puissances de 10 d'exposant entier relatif",
    "Écrire un nombre décimal en notation scientifique et passer d'une écriture à l'autre",
    "Calculer le produit et le quotient de deux nombres en notation scientifique",
    "Comparer des ordres de grandeur"
  ],

  note: "Les puissances de $10$ d'exposant entier relatif et la notation scientifique sont au " +
        "programme de quatrième.<br/><br/>" +
        "Les puissances d'un nombre quelconque ($a^n$ pour $a \\neq 10$) ne sont abordées ici " +
        "qu'incidemment : le programme de quatrième les introduit, mais ce chapitre se concentre " +
        "volontairement sur la base $10$, qui est celle dont l'élève a besoin en physique-chimie " +
        "dès cette année. Les règles $a^m \\times a^n = a^{m+n}$ méritent un temps séparé.<br/><br/>" +
        "Plusieurs tâches demandent l'EXPOSANT de l'écriture scientifique plutôt que la valeur " +
        "décimale. Ce n'est pas un contournement : c'est la compétence visée, et cela évite " +
        "d'imprimer des réponses comme $0{,}0000003$, que personne ne lit.",

  erreurs: [
    {
      titre: "Multiplier les exposants au lieu de les additionner",
      eleve: "$10^{3} \\times 10^{4} = 10^{12}$ : l'élève multiplie les exposants parce que " +
             "l'opération entre les deux puissances est une multiplication.",
      cause: "L'élève applique l'opération qu'il voit écrite à ce qu'il voit écrit, c'est-à-dire aux " +
             "exposants. Rien ne lui a montré que la multiplication des nombres correspond à " +
             "l'addition des exposants.",
      remede: "Revenir une fois, et une seule, à l'écriture développée : $10^{3} \\times 10^{2} = " +
              "(10 \\times 10 \\times 10) \\times (10 \\times 10)$. Faire COMPTER les facteurs $10$ : " +
              "il y en a $5$, donc $10^{5}$. L'exposant compte des facteurs, et mettre deux paquets " +
              "ensemble, c'est ajouter leurs effectifs.<br/><br/>" +
              "La règle cesse alors d'être arbitraire : <strong>on multiplie des nombres en " +
              "additionnant les exposants</strong>. Le faire une fois avec de petits exposants vaut " +
              "mieux que dix rappels de la formule.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est une tâche « produit », $8 \times 10^{1} \times 10^{0}$,
         réponse $80$. Le second exposant valant $0$, l'élève qui MULTIPLIE les
         exposants obtient $10^{0} = 1$ et donc $8$ au lieu de $80$ : l'erreur est
         immédiatement visible, et le cas $\times 10^{0}$ est le plus parlant
         pour montrer que l'addition est la bonne opération. La solution imprimée
         pose cette addition en toutes lettres. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Laisser une mantisse supérieure à 10",
      eleve: "L'élève écrit $45 \\times 10^{6}$ et affirme que c'est la notation scientifique.",
      cause: "La forme « un nombre fois une puissance de dix » est retenue, mais la condition sur la " +
             "mantisse ne l'est pas : elle ressemble à un détail de présentation, alors qu'elle est " +
             "la définition même.",
      remede: "Insister sur l'utilité de la condition plutôt que sur la condition elle-même : si la " +
              "mantisse était libre, le même nombre aurait une infinité d'écritures " +
              "($45 \\times 10^{6}$, $4{,}5 \\times 10^{7}$, $450 \\times 10^{5}$...) et deux nombres " +
              "ne seraient plus comparables d'un coup d'oeil. La contrainte $1 \\leqslant a < 10$ rend " +
              "l'écriture <strong>unique</strong>, et c'est tout son intérêt.<br/><br/>" +
              "Puis donner le geste de correction : chaque rang dont on déplace la virgule vers la " +
              "gauche divise la mantisse par $10$, donc augmente l'exposant de $1$ pour compenser. " +
              "Faire énoncer à voix haute « je perds d'un côté, je rattrape de l'autre ».",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est une tâche
         « scientifique » — « une mesure vaut $0{,}008$, quelle est la valeur de
         $n$ ? » — et son énoncé RAPPELLE la condition $1 \leqslant a < 10$.
         L'élève qui laisse une mantisse hors bornes trouve un exposant décalé
         d'une unité, et la solution imprimée détaille le comptage des rangs. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Se tromper de sens dans une conversion d'unité",
      eleve: "Pour convertir $5{,}3 \\times 10^{-6}$ m en nanomètres, l'élève multiplie par " +
             "$10^{-9}$ au lieu de diviser, et obtient un nombre minuscule.",
      cause: "Le facteur de conversion est appliqué mécaniquement, sans que le sens du changement " +
             "d'unité soit anticipé. L'élève ne sait pas, avant de calculer, si le résultat doit être " +
             "plus grand ou plus petit.",
      remede: "Exiger une phrase AVANT tout calcul : « le nanomètre est plus petit que le mètre, donc " +
              "il y en aura beaucoup — mon résultat sera grand ». Cette phrase décide du sens de " +
              "l'opération, et le calcul ne fait plus que donner le nombre.<br/><br/>" +
              "C'est pourquoi l'énoncé de la question 3 de l'évaluation rappelle désormais qu'un " +
              "nanomètre vaut $10^{-9}$ m : sans ce rappel, la question testait la mémoire d'un " +
              "préfixe ; avec lui, elle teste le raisonnement sur le sens, qui est la vraie difficulté.",
      /* Volontairement SANS renvoi. Le générateur de ce chapitre ne tire aucune
         CONVERSION D'UNITÉ : ses quatre tâches portent sur le produit, l'écriture
         scientifique, le quotient et les ordres de grandeur. La question 3 de
         l'évaluation est donc la seule conversion de tout le chapitre, et on ne
         remédie jamais avec le devoir noté. La remédiation se construit au
         tableau, en une ligne, avec le tableau des préfixes. */
      exercice: null
    },
    {
      titre: "Additionner les exposants dans un quotient",
      eleve: "$\\dfrac{10^{6}}{10^{2}} = 10^{8}$ : la règle du produit est transférée à la division.",
      cause: "La règle « on additionne les exposants » est devenue la règle des puissances, sans " +
             "l'opération à laquelle elle est attachée. C'est la même mécanique que pour les relatifs, " +
             "où la règle de l'addition envahit le produit.",
      remede: "Faire le lien avec ce que l'élève sait déjà des fractions : simplifier " +
              "$\\dfrac{10 \\times 10 \\times 10}{10 \\times 10}$ barre deux facteurs en haut et " +
              "deux en bas, et il en reste un. Barrer des facteurs, c'est <strong>retirer</strong> de " +
              "l'exposant : la division soustrait.<br/><br/>" +
              "Le contrôle de bon sens est ici très efficace : diviser par $10^{2}$, c'est diviser par " +
              "$100$, donc le résultat doit être PLUS PETIT que $10^{6}$. Or $10^{8}$ est cent fois " +
              "plus grand. L'erreur se détecte sans refaire le calcul.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est une tâche
         « quotient », $\dfrac{2 \times 10^{2}}{1 \times 10^{4}}$, dont la réponse
         est $n = -2$. Le résultat est PLUS PETIT que le numérateur, ce qui prend
         l'erreur à revers : additionner les exposants donnerait $10^{6}$, un
         nombre plus grand, alors qu'on vient de diviser. Sa solution imprimée
         pose la soustraction en toutes lettres et nomme le piège. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Q1 et Q2 appliquent les règles de calcul : « calculer ».
     Q3 a été COMPLÉTÉE le 2026-09-13 (rappel de la valeur du nanomètre) : la
     tâche est alors bien de choisir le sens de la conversion, donc de mettre la
     situation en modèle — « modéliser ».
     Q4 a été RÉÉCRITE : elle demandait d'élever au carré, application directe
     d'une règle. Elle demande maintenant un RAPPORT sans jamais nommer la
     division — « chercher ».
     Q5 a été RÉÉCRITE : c'était un quotient à poser. Elle demande maintenant de
     distinguer une erreur de forme d'une erreur de valeur et de l'expliquer —
     « communiquer ». */
  competences: {
    evaluation: ["calculer", "calculer", "modéliser", "chercher", "communiquer"]
  }
};
