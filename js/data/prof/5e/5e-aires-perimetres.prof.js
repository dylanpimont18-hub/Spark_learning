/* =========================================================
   Spark Learning – js/data/prof/5e/5e-aires-perimetres.prof.js
   Fiche professeur du chapitre « Aires et périmètres (approfondissement) »
   (cinquième). JAMAIS chargée par le site : seul scripts/manuel/prof.js
   la lit, au moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-aires-perimetres"] = {

  /* ch. 3 (priorités) : une aire composée est une somme ou une DIFFÉRENCE
     d'aires, chacune étant elle-même un produit. La question 4 de l'évaluation,
     l'aire d'un terrain dont on retire un disque, est une expression à
     priorités : l'élève qui soustrait avant de multiplier se trompe.
     ch. 9 (parallélogrammes) : les figures composées se décomposent en
     rectangles, triangles et quadrilatères dont l'aire doit être connue. */
  prerequis: [3, 9],

  /* Rang conseillé 11 sur 14, après tous les chapitres de géométrie plane dont
     il réutilise les aires, et juste avant les volumes (rang 12) qui s'appuient
     sur l'aire d'une base. Le livre le range aussi en 11e position. */
  rangConseille: 11,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Grandeurs et mesures ».
  attendus: [
    "Calculer l'aire d'un disque et la longueur d'un cercle à partir du rayon ou du diamètre",
    "Calculer l'aire d'une figure composée en la décomposant en figures simples, par somme ou par différence",
    "Effectuer des conversions d'unités d'aire, en tenant compte du carré du facteur de conversion"
  ],

  note: "L'aire du disque, le périmètre du cercle, les figures composées et les conversions d'aires sont " +
        "tous au programme de cinquième. Deux remarques importantes. " +
        "La valeur $\\pi \\approx 3{,}14$ est imposée dans toutes les questions, ce qui est conforme au " +
        "cycle 4, mais il faut dire aux élèves que $\\pi$ n'EST PAS $3{,}14$ : c'est une approximation, et " +
        "les résultats sont donc eux aussi approchés. Le signe $\\approx$ devrait apparaître dans les " +
        "copies, et le chapitre ne l'exige pas partout. " +
        "Le générateur d'exercices a été élargi le 2026-09-13 : il ne produisait que des aires de disque à " +
        "partir du rayon, alors que l'évaluation teste aussi les conversions d'aires (deux questions sur " +
        "cinq), le périmètre à partir du diamètre et une figure composée par différence. Ces quatre tâches " +
        "sont désormais toutes travaillées dans les exercices, et les remédiations ci-dessous y renvoient.",

  erreurs: [
    {
      titre: "Convertir une aire comme une longueur",
      eleve: "$2{,}5$ m² devient $250$ cm² au lieu de $25\\,000$ cm² : l'élève multiplie par $100$ " +
             "comme pour des mètres.",
      cause: "Le facteur de conversion des longueurs est mémorisé, et l'exposant $2$ de l'unité n'est pas " +
             "relié au facteur. L'élève convertit l'unité sans voir que l'aire met en jeu DEUX longueurs, " +
             "donc deux conversions successives.",
      remede: "Faire dessiner le carré de $1$ m de côté et le découper mentalement en carrés de $1$ cm : " +
              "il y en a $100$ dans la largeur ET $100$ dans la longueur, donc $100 \\times 100 = 10\\,000$. " +
              "C'est le raisonnement qui produit le facteur, et non une règle à retenir. " +
              "Écrire ensuite $1$ m² $= (100\\ \\text{cm})^2 = 100^2$ cm² $= 10\\,000$ cm², où l'exposant " +
              "se lit directement sur l'unité. Ajouter le contrôle de vraisemblance : une conversion vers " +
              "une unité PLUS PETITE donne toujours un nombre PLUS GRAND, ce qui écarte déjà les erreurs " +
              "de sens.",
      /* 2026-09-13 : le generateur ne produisait QUE des aires de disque, et ce
         renvoi devait rester vide. Une tache de conversion d'aire a donc ete
         ajoutee pour cette remediation : l'exercice 1 du tirage convertit une
         aire, et sa correction fait apparaitre le facteur au CARRE a partir du
         facteur des longueurs, ce qui est exactement le raisonnement manquant. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Élever le produit $\\pi r$ au carré",
      eleve: "Pour un disque de rayon $5$ cm, l'élève calcule $(3{,}14 \\times 5)^2 = 246{,}49$ cm² au " +
             "lieu de $3{,}14 \\times 25 = 78{,}5$ cm².",
      cause: "Dans l'écriture $\\pi r^2$, l'exposant est collé au $r$ mais l'élève lit le groupe " +
             "« $\\pi r$ » comme un tout, d'autant que les deux symboles sont accolés sans signe " +
             "d'opération. C'est la même erreur de portée d'exposant que dans le chapitre des priorités.",
      remede: "Faire énoncer la formule dans l'ordre des opérations : « le rayon au carré, PUIS fois " +
              "$\\pi$ » — ce qui place le carré avant la multiplication et rend l'erreur impossible. " +
              "Exiger les deux lignes séparées : $r^2 = 5^2 = 25$, puis $\\mathcal{A} = 3{,}14 \\times 25$. " +
              "Contrôle d'ordre de grandeur que l'élève peut faire seul : l'aire du disque vaut un peu " +
              "plus de trois fois le carré du rayon, donc un peu plus de $75$ cm² ici. $246$ cm² est " +
              "manifestement trop grand — c'est d'ailleurs presque l'aire du carré de côté $15{,}7$ cm.",
      /* 2026-09-13 : renvoi verifie contre le tirage et CORRIGE (l'exercice 1
         est desormais une conversion). L'exercice 4 donne le RAYON et demande
         l'aire, et sa correction calcule le carre du rayon sur une ligne
         separee — ce qui est le remede a l'erreur de portee de l'exposant. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Confondre rayon et diamètre dans la formule",
      eleve: "Pour un cercle de diamètre $10$ cm, l'élève calcule $2 \\times 3{,}14 \\times 10 = 62{,}8$ cm " +
             "au lieu de $31{,}4$ cm ; ou bien utilise le diamètre dans $\\pi r^2$.",
      cause: "Les deux grandeurs décrivent le même cercle et leurs noms sont également familiers. " +
             "L'énoncé donne parfois l'un, parfois l'autre, et la formule n'en accepte qu'un : l'élève " +
             "applique la formule au nombre disponible sans vérifier de quelle grandeur il s'agit.",
      remede: "Imposer une étape d'identification écrite AVANT tout calcul : « on me donne le diamètre, " +
              "donc $r = d \\div 2 = 5$ cm ». La conversion devient un réflexe et la formule n'est " +
              "appliquée qu'à la bonne grandeur. Faire remarquer que $2\\pi r$ et $\\pi d$ sont la même " +
              "formule écrite deux fois, ce qui permet de contrôler : avec $d = 10$, " +
              "$\\pi d = 31{,}4$ cm, identique à $2\\pi r$ avec $r = 5$. Un résultat double ou moitié du " +
              "résultat attendu est la signature de cette confusion.",
      /* 2026-09-13 : renvoi verifie contre le tirage et CORRIGE. L'exercice 3 du
         tirage donne le DIAMETRE et demande le perimetre ; sa figure trace le
         diametre d'un bord a l'autre en passant par le centre, et sa correction
         montre que $2\pi r$ et $\pi d$ donnent le meme resultat. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Q1 aire d'un disque            -> calculer
     Q2 conversion m² vers cm²      -> représenter
     Q3 périmètre à partir du diamètre -> calculer
     Q4 figure composée par différence -> modéliser
     Q5 conversion cm² vers mm²     -> raisonner

     Q2 et Q5 portent tous deux sur une conversion mais ne mobilisent pas la même
     chose : Q2 demande d'EFFECTUER la conversion (registre des unités, donc
     « représenter »), tandis que Q5 est un choix parmi quatre propositions dont
     il faut écarter trois par un raisonnement sur l'ordre de grandeur — sans
     calcul posé. Q4 est « modéliser » : la difficulté n'est pas le calcul des
     deux aires mais la décision de les SOUSTRAIRE, c'est-à-dire la traduction de
     la situation en une opération. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "modéliser", "raisonner"]
  }
};
