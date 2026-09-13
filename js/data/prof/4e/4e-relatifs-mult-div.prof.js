/* =========================================================
   Spark Learning – js/data/prof/4e/4e-relatifs-mult-div.prof.js
   Fiche professeur du chapitre « Relatifs : multiplication et division »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit,
   au moment de compiler le livre.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-relatifs-mult-div"] = {

  /* Aucun prérequis DANS CE LIVRE : ce chapitre ouvre la progression conseillée.
     Il s'appuie sur l'addition et la soustraction des relatifs, vues en
     cinquième, donc hors de cet ouvrage — la validation refuse à juste titre un
     renvoi vers un autre niveau, la colonne « s'appuie sur » étant par niveau. */
  prerequis: [],

  /* Rang conseillé 1. La règle des signes conditionne tout le calcul de l'année :
     le calcul littéral (rang 4) manipule des coefficients négatifs, les
     puissances (rang 3) des exposants négatifs, et les coordonnées des
     translations (rang 9) sont des relatifs. Commencer par là évite de faire
     buter les élèves sur les signes au milieu d'un autre chapitre. */
  rangConseille: 1,

  // Attendus de fin d'année de quatrième (cycle 4, 2020), « Nombres et calculs ».
  attendus: [
    "Calculer avec des nombres relatifs : produit et quotient",
    "Utiliser la règle des signes pour un produit de plusieurs facteurs",
    "Calculer le carré d'un nombre relatif et distinguer $(-a)^2$ de $-a^2$"
  ],

  note: "Le produit et le quotient de relatifs sont au programme de quatrième, le carré compris.<br/><br/>" +
        "La distinction entre $(-5)^2$ et $-5^2$, que l'évaluation interroge en question 3, " +
        "relève des priorités opératoires plus que des relatifs eux-mêmes : elle suppose " +
        "que la convention « l'exposant s'applique avant le signe » ait été posée. Elle mérite " +
        "un temps de classe à part entière, pas une remarque en passant.",

  erreurs: [
    {
      titre: "Appliquer la règle d'addition au produit",
      eleve: "$(-3) \\times (-4) = -7$ : l'élève ajoute les valeurs absolues et garde le signe moins, " +
             "comme il le faisait pour $(-3) + (-4)$.",
      cause: "Les deux règles portent sur les mêmes objets et ont été apprises à un an d'intervalle. " +
             "Celle de l'addition, plus ancienne et beaucoup plus exercée, s'impose par habitude dès " +
             "que deux nombres négatifs se présentent.",
      remede: "Traiter les deux opérations côte à côte, sur les mêmes nombres, et faire dire la " +
              "différence à voix haute : $(-3) + (-4) = -7$ mais $(-3) \\times (-4) = +12$.<br/><br/>" +
              "Puis donner un appui au signe du produit, plutôt qu'une règle à retenir : multiplier par " +
              "un nombre négatif, c'est multiplier puis prendre l'opposé. Le faire deux fois ramène au " +
              "point de départ, d'où le signe plus. Les situations de variation du chapitre (une " +
              "température qui baisse de $7°$ par heure, <em>il y a</em> $5$ heures) rendent ce " +
              "renversement concret.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 5 est « la température change de $(-7)°C$ chaque heure pendant
         $(-5)$ heures », réponse $+35$. Deux facteurs négatifs, résultat positif,
         et la situation dit POURQUOI — un élève qui répond $-12$ ou $-35$ voit
         que la température monterait alors qu'on remonte dans le passé. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Perdre le signe en cours de calcul sur trois facteurs",
      eleve: "$(-3) \\times (-4) \\times (-2) = 24$ : l'élève applique correctement « moins par moins " +
             "donne plus » sur les deux premiers, puis oublie le troisième facteur négatif.",
      cause: "Le signe est traité comme une propriété du calcul entier, décidée une fois, et non comme " +
             "le résultat d'un comptage. Dès qu'il y a plus de deux facteurs, la décision prise trop " +
             "tôt n'est plus révisée.",
      remede: "Dissocier les deux questions et les poser dans cet ordre : d'abord « combien de facteurs " +
              "négatifs ? », ensuite « quel est le produit des valeurs absolues ? ».<br/><br/>" +
              "Le comptage devient alors une opération à part entière : un nombre <strong>pair</strong> " +
              "de facteurs négatifs donne un résultat positif, un nombre <strong>impair</strong> un " +
              "résultat négatif. Ici trois facteurs négatifs, donc impair, donc $-24$. Faire entourer " +
              "les signes moins au crayon avant tout calcul coûte trois secondes et supprime l'erreur.",
      /* Volontairement SANS renvoi. Tous les tirages du générateur portent sur
         DEUX facteurs : la tâche à trois facteurs, que l'évaluation pose en
         question 2, n'existe pas dans la banque. Un renvoi faux serait pire
         qu'un renvoi absent — l'enseignant construira l'exercice au tableau, ce
         qui prend une ligne. */
      exercice: null
    },
    {
      titre: "Confondre $(-5)^2$ et $-5^2$",
      eleve: "L'élève écrit $-5^2 = 25$, ou inversement $(-5)^2 = -25$, selon l'expression qu'il a " +
             "rencontrée en dernier.",
      cause: "Les parenthèses sont lues comme un simple habillage, pas comme ce qui délimite ce que " +
             "l'exposant saisit. L'élève voit « un cinq, un carré, un moins » et les combine dans " +
             "l'ordre où il les lit.",
      remede: "Faire écrire chaque expression en toutes lettres avant de la calculer : $(-5)^2$ se lit " +
              "« le carré de moins cinq », donc $(-5) \\times (-5) = +25$ ; $-5^2$ se lit « l'opposé du " +
              "carré de cinq », donc $-(5 \\times 5) = -25$.<br/><br/>" +
              "La règle à retenir tient en une phrase : <strong>l'exposant ne saisit que ce qu'il " +
              "touche</strong>. Sans parenthèses, il ne touche que le $5$. C'est la même règle qui " +
              "distinguera plus tard $\\pi r^2$ de $(\\pi r)^2$.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 10 demande
         $(-6) \times (-6)$, réponse $+36$. C'est le carré d'un relatif écrit
         SOUS SA FORME DÉVELOPPÉE, donc sans la question des parenthèses : il
         installe le résultat positif avant que la notation ne vienne brouiller
         les cartes. À traiter avant l'expression avec exposant, pas après. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Croire qu'un quotient de négatifs suit une autre règle",
      eleve: "Après avoir acquis $(-36) \\times (+9)$, l'élève hésite sur $\\dfrac{-36}{+9}$ et " +
             "cherche une règle séparée pour la division, voire répond $+4$.",
      cause: "Le cours présente la multiplication d'abord et la division ensuite, ce qui laisse croire " +
             "à deux règles de signes. Rien n'a dit que c'était la même.",
      remede: "Le dire explicitement, une fois : la division a exactement la même règle des signes que " +
              "la multiplication, parce que diviser par un nombre, c'est multiplier par son " +
              "inverse — et un nombre et son inverse ont toujours le même signe.<br/><br/>" +
              "Vérification immédiate et convaincante : $\\dfrac{-36}{+9} = -4$, et on contrôle en " +
              "multipliant, $-4 \\times (+9) = -36$. Le contrôle par la multiplication doit devenir un " +
              "réflexe : il valide le signe ET la valeur.",
      // Volontairement SANS renvoi : le générateur de ce chapitre ne tire que
      // des PRODUITS. Aucun quotient n'est exercé, alors que l'évaluation en
      // pose un (question 4). À construire au tableau.
      exercice: null
    }
  ],

  /* Q1 et Q2 appliquent la règle des signes : « calculer ».
     Q3 compare deux écritures et demande de dire ce qui les distingue :
     « raisonner ».
     Q4 A ÉTÉ RÉÉCRITE le 2026-09-13 : elle demandait $\dfrac{-36}{+9}$, un
     quotient immédiat. Elle demande maintenant de retrouver un facteur manquant,
     donc de choisir soi-même l'opération — « chercher ».
     Q5 A ÉTÉ RÉÉCRITE : c'était un calcul de variation en situation. Elle
     demande maintenant de juger le raisonnement d'un élève sur le signe, donc de
     produire une explication — « communiquer ». */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "chercher", "communiquer"]
  }
};
