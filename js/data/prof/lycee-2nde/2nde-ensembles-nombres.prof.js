/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-ensembles-nombres.prof.js
   Fiche professeur du chapitre « Ensembles de nombres et intervalles »
   (seconde). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-ensembles-nombres"] = {

  /* Aucun prérequis dans le livre : ce chapitre ouvre la progression
     conseillée (rang 1). Tout ce qu'il demande vient du collège — écritures
     fractionnaires, décimaux, racines carrées — et non d'un autre chapitre de
     seconde. Déclarer un prérequis ici serait faux. */
  prerequis: [],

  /* Rang conseillé (2026-09-13) : rang 1. C'est le chapitre qui fixe le
     vocabulaire des nombres et la notation des intervalles, dont TOUS les
     autres se servent ensuite : les ensembles de solutions d'inéquations, les
     domaines de définition, les intervalles de confiance.

     Le LIVRE le place en chapitre 3, derrière les vecteurs et les fonctions
     affines, parce qu'il range par domaine. */
  rangConseille: 1,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Nombres et calculs ».
  attendus: [
    "Connaître les ensembles de nombres N, Z, D, Q et R et leurs inclusions",
    "Utiliser la notation des intervalles et la représenter sur une droite graduée",
    "Déterminer l'intersection et la réunion de deux intervalles",
    "Distinguer un nombre rationnel d'un nombre irrationnel"
  ],

  note: "Les ensembles de nombres, les intervalles, l'intersection et la réunion sont au programme " +
        "de seconde. C'est un chapitre de <strong>reprise autant que de découverte</strong> : les " +
        "nombres eux-mêmes sont connus depuis le collège, seuls la classification et le vocabulaire " +
        "des intervalles sont neufs. On peut donc aller vite sur la nature des nombres et consacrer " +
        "le temps gagné aux intervalles, qui serviront toute l'année.<br/><br/>" +
        "<strong>Un point déborde</strong> : la démonstration de l'irrationalité de $\\sqrt{2}$ n'est " +
        "pas exigible en seconde. Elle est mentionnée dans le cours comme une ouverture, et c'est un " +
        "excellent premier raisonnement par l'absurde — mais il faut l'annoncer comme tel et ne " +
        "jamais l'évaluer.",

  erreurs: [
    {
      titre: "Croire qu'un nombre à virgule ne peut pas être rationnel",
      eleve: "L'élève classe $0{,}25$ et $1{,}5$ parmi les irrationnels, « parce qu'ils ont une virgule », " +
             "et réserve $\\mathbb{Q}$ aux nombres écrits sous forme de fraction.",
      cause: "La classification est lue sur l'ÉCRITURE du nombre et non sur le nombre lui-même. " +
             "Comme les exemples de rationnels sont presque toujours donnés en fractions et les " +
             "exemples d'irrationnels en écriture décimale infinie ($\\pi = 3{,}14\\ldots$), l'élève " +
             "conclut que la virgule est le signe distinctif.",
      remede: "Faire écrire le même nombre des deux façons, au tableau, côte à côte : " +
              "$0{,}25 = \\dfrac{1}{4}$ et $1{,}5 = \\dfrac{3}{2}$.<br/><br/>" +
              "Puis énoncer le critère qui, lui, est vrai : un nombre est rationnel s'il " +
              "<strong>peut</strong> s'écrire comme un quotient de deux entiers — peu importe " +
              "comment il est écrit sur la feuille. Un même nombre a plusieurs écritures, et aucune " +
              "n'est « la vraie ».<br/><br/>" +
              "Terminer par le cas qui surprend le plus : $0{,}\\overline{3} = \\dfrac{1}{3}$ est " +
              "rationnel bien que son écriture décimale soit infinie. Ce n'est donc pas la longueur " +
              "de l'écriture qui tranche, c'est sa périodicité.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 5 demande si $\sqrt{2}$ est rationnel. La tâche « nature
         d'un nombre » a été AJOUTÉE au générateur ce jour — avant cela, la
         banque ne contenait qu'une seule tâche (longueur d'une intersection)
         et aucun exercice ne travaillait cette erreur. Le tirage alterne des
         fractions, des décimaux et des racines, dont $\sqrt{16}$ qui tombe
         juste : l'élève ne peut donc pas répondre au réflexe « racine donc
         irrationnel ». */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Confondre le crochet ouvert et le crochet fermé",
      eleve: "Pour « $x$ strictement inférieur à $5$ », l'élève écrit $]-\\infty ; 5]$, en fermant le " +
             "crochet du côté de la borne stricte.",
      cause: "Le sens du crochet n'a pas été relié à l'inclusion de la borne : il est retenu comme " +
             "un ornement de notation. S'ajoute une difficulté typographique réelle — les deux " +
             "symboles se ressemblent, et rien dans leur forme ne dit lequel inclut.",
      remede: "Donner au crochet un sens physique plutôt qu'une règle : le crochet qui " +
              "<strong>tourne le dos</strong> à l'intervalle exclut la borne, celui qui " +
              "l'<strong>embrasse</strong> l'inclut. L'élève peut le mimer avec sa main.<br/><br/>" +
              "Exiger ensuite systématiquement le tracé sur une droite graduée avant d'écrire " +
              "l'intervalle : un rond vide ou un rond plein à la borne, puis seulement la " +
              "traduction en crochets. Le dessin tranche là où la notation hésite.<br/><br/>" +
              "Rappeler enfin la seule règle sans exception : du côté de l'infini, le crochet est " +
              "<strong>toujours</strong> ouvert, puisque l'infini n'est pas un nombre qu'on puisse " +
              "atteindre.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 demande si
         $4$ appartient à $[4;7]$ — le nombre testé EST la borne, et le crochet
         est fermé. C'est exactement le cas que l'erreur manque, et l'exercice
         12 pose la question symétrique avec un crochet ouvert. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Échanger l'intersection et la réunion",
      eleve: "Pour $[0;4] \\cap [2;7]$, l'élève répond $[0;7]$ : il réunit les deux intervalles au " +
             "lieu de chercher leur partie commune.",
      cause: "Les deux symboles $\\cap$ et $\\cup$ ne diffèrent que par leur orientation, et « et » " +
             "comme « ou » sont tous deux des mots de liaison dans la langue courante. L'élève " +
             "n'entend pas la différence logique, il voit deux intervalles et les met ensemble.",
      remede: "Passer par le dessin, systématiquement : tracer les deux intervalles l'un au-dessus " +
              "de l'autre sur la même droite graduée, puis poser la question en français — " +
              "« quels nombres sont dans les <strong>deux</strong> à la fois ? » pour " +
              "l'intersection, « quels nombres sont dans <strong>au moins un</strong> des deux ? » " +
              "pour la réunion.<br/><br/>" +
              "Faire ensuite vérifier sur un nombre témoin : $1$ appartient-il à $[0;4] \\cap [2;7]$ ? " +
              "Il est dans le premier mais pas dans le second, donc non — ce qui élimine $[0;7]$ " +
              "sans discussion.<br/><br/>" +
              "Un moyen mnémotechnique tient : le $\\cap$ ressemble à un pont, il ne garde que ce " +
              "qui est dessous, c'est-à-dire le terrain commun.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 demande la
         longueur de $I_1 \cap I_2$. L'élève qui réunit au lieu d'intersecter
         trouve une longueur plus grande que chacun des deux intervalles, ce
         qui se repère sans qu'on le lui désigne. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Q1 reconnaître un irrationnel : l'élève conclut d'une propriété (écriture
      décimale non périodique) à une appartenance, sans calculer. « raisonner ».
     Q2 traduire une phrase en notation d'intervalle : changer de registre
      d'écriture sans rien calculer. « représenter ».
     Q3 longueur d'un intervalle : soustraction des bornes. « calculer ».
     Q4 intersection de deux intervalles : lire une configuration sur la droite
      graduée. « représenter ».
     Q5 réunion non simplifiable : l'élève doit JUSTIFIER qu'aucun intervalle
      unique ne convient, c'est-à-dire produire une explication. « communiquer ». */
  competences: {
    evaluation: ["raisonner", "représenter", "calculer", "représenter", "communiquer"]
  }
};
