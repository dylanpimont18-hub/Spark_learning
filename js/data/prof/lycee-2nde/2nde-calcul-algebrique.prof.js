/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-calcul-algebrique.prof.js
   Fiche professeur du chapitre « Calcul algébrique » (seconde).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-calcul-algebrique"] = {

  /* ch. 3 (ensembles de nombres) : tout le chapitre manipule des réels
     quelconques, et les racines carrées y apparaissent dès la factorisation
     de $x^2 - 5$. Le vocabulaire des ensembles doit être posé avant. */
  prerequis: [3],

  /* Rang conseillé (2026-09-13) : rang 2, juste après les ensembles de
     nombres et avant les équations, qui ne sont que du calcul algébrique
     appliqué à une égalité. C'est l'outil dont tout le reste de l'année se
     sert : fonctions, droites, géométrie repérée.

     Le LIVRE le place en chapitre 4, par rangement de domaine. */
  rangConseille: 2,

  attendus: [
    "Développer, factoriser et réduire une expression algébrique",
    "Reconnaître et utiliser les trois identités remarquables",
    "Choisir la forme (développée ou factorisée) la mieux adaptée au problème posé",
    "Résoudre une équation produit-nul"
  ],

  note: "Le développement, la factorisation et les identités remarquables sont au programme de " +
        "seconde. C'est un chapitre de <strong>reprise</strong> : les trois identités ont été vues " +
        "en troisième, et une partie de la classe les connaît. La nouveauté de seconde est ailleurs — " +
        "elle tient au <strong>choix</strong> de la forme selon la question posée, et c'est là qu'il " +
        "faut passer le temps.<br/><br/>" +
        "<strong>Un point déborde</strong> : la factorisation d'un trinôme du type $x^2 + 7x + 12$, " +
        "présente dans la banque d'exercices, relève en toute rigueur du programme de première " +
        "(discriminant). Elle reste faisable en seconde par recherche de deux nombres dont on " +
        "connaît la somme et le produit, ce que le corrigé détaille — mais c'est une méthode " +
        "artisanale, à présenter comme telle et non comme une technique générale.",

  erreurs: [
    {
      titre: "Oublier le double produit",
      eleve: "$(x - 4)^2 = x^2 - 16$ : l'élève élève chaque terme au carré séparément, comme si le " +
             "carré se distribuait sur une soustraction.",
      cause: "La distributivité fonctionne pour la multiplication, et l'élève l'étend au carré sans " +
             "que rien ne l'en empêche. Le résultat obtenu a l'air d'une identité remarquable — il " +
             "ressemble à $a^2 - b^2$ — ce qui lui donne un air de vérité.",
      remede: "Trancher par un contre-exemple numérique, qui ne se discute pas : pour $x = 10$, " +
              "$(10-4)^2 = 6^2 = 36$, alors que $x^2 - 16 = 84$. Les deux nombres diffèrent, donc " +
              "l'égalité écrite est fausse.<br/><br/>" +
              "Puis montrer d'où vient le terme manquant en repassant par la double distributivité " +
              "complète : $(x-4)(x-4) = x^2 - 4x - 4x + 16$. Les deux $-4x$ sont visibles, et leur " +
              "somme est le double produit.<br/><br/>" +
              "Exiger enfin l'écriture en trois morceaux — carré, double produit, carré — à chaque " +
              "usage de l'identité. Un élève qui écrit toujours trois termes ne peut plus en oublier " +
              "un sans le voir.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 demande le COEFFICIENT DU TERME EN x de $(6x-7)^2$,
         c'est-à-dire précisément le double produit. Un élève qui l'oublie n'a
         aucune réponse à donner : l'erreur se manifeste au lieu de se cacher
         dans un résultat d'apparence plausible. La tâche « développer un
         carré » a été ajoutée au générateur ce jour ; avant cela, la banque ne
         contenait que de la factorisation et aucun exercice ne travaillait
         cette erreur. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Factoriser une somme de deux carrés",
      eleve: "$x^2 + 9 = (x+3)(x-3)$ : l'élève applique l'identité de la différence de deux carrés " +
             "à une somme.",
      cause: "L'identité $a^2 - b^2 = (a+b)(a-b)$ est mémorisée par sa forme — deux carrés, deux " +
             "parenthèses — et non par sa condition. Le signe moins n'est pas perçu comme faisant " +
             "partie de l'identité, mais comme un détail d'écriture.",
      remede: "Faire développer la proposition de l'élève : $(x+3)(x-3) = x^2 - 9$, et non $x^2 + 9$. " +
              "La vérification est immédiate et se fait sans intervention de l'enseignant.<br/><br/>" +
              "Puis donner la raison de fond, qui vaut mieux qu'une interdiction à retenir : $x^2 + 9$ " +
              "est une somme de deux quantités positives, donc elle ne s'annule jamais. Si elle se " +
              "factorisait en deux facteurs du premier degré, elle aurait des racines. Elle n'en a " +
              "pas, donc elle ne se factorise pas.<br/><br/>" +
              "Installer le réflexe de contrôle : après toute factorisation, redévelopper. C'est le " +
              "seul chapitre de l'année où l'élève peut vérifier lui-même l'intégralité de son " +
              "travail, et il faut en profiter.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 factorise
         $16x^2 - 36$, une VRAIE différence de carrés. En la traitant, l'élève
         voit le rôle du signe moins à l'endroit même où il opère. Aucun
         exercice ne propose de somme de carrés à factoriser, ce qui est
         volontaire : on ne fait pas travailler une tâche impossible. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Développer alors qu'il fallait garder la forme factorisée",
      eleve: "Pour résoudre $(2x-3)(x+5) = 0$, l'élève développe en $2x^2 + 7x - 15 = 0$, puis se " +
             "trouve devant une équation qu'il ne sait pas résoudre.",
      cause: "« Développer » a été enseigné comme l'opération normale, celle qui « simplifie ». " +
             "L'élève développe donc par réflexe, sans se demander à quoi sert la forme obtenue. " +
             "Personne ne lui a dit qu'une forme factorisée pouvait être le <strong>but</strong> et " +
             "non l'étape intermédiaire.",
      remede: "Poser la question avant tout calcul, systématiquement : « qu'est-ce que je cherche ? ». " +
              "Pour une racine, la forme factorisée répond directement, par la règle du " +
              "produit nul. Pour une valeur en un point ou une comparaison de coefficients, c'est la " +
              "forme développée.<br/><br/>" +
              "Faire l'expérience côte à côte au tableau : la même équation résolue par les deux " +
              "voies, factorisée en trois lignes, développée en impasse. L'argument porte parce que " +
              "l'élève voit le coût de son réflexe, au lieu qu'on le lui interdise.<br/><br/>" +
              "Retenir la formule : on ne développe pas pour développer, on développe pour répondre " +
              "à une question précise.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 factorise
         $x^2 + 8x + 16$ PUIS résout $C = 0$. L'énoncé impose donc l'ordre que
         le remède recommande, et la solution imprimée applique la règle du
         produit nul sur la forme factorisée. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Q1 développer $(3x+5)^2$ et donner un coefficient : application de
      l'identité. « calculer ».
     Q2 RÉÉCRITE le 2026-09-13 : reconnaître qu'une aire s'écrit de deux
      façons, sans rien calculer de neuf. « représenter ».
     Q3 développer un produit et donner le terme constant. « calculer ».
     Q4 RÉÉCRITE le 2026-09-13 : juger un raisonnement faux et expliquer
      pourquoi il échoue. « communiquer ».
     Q5 identifier l'identité qui permet de factoriser : l'élève conclut de la
      forme de l'expression à la règle applicable, sans calcul. « raisonner ». */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "communiquer", "raisonner"]
  }
};
