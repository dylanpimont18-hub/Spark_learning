/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-orthogonalite-espace.prof.js
   Fiche professeur du chapitre « Orthogonalité dans l'espace » (terminale),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau.

   CE CHAPITRE NE PORTE QUE DEUX SCHÉMAS SECONDAIRES, et c'est un choix
   assumé. Le troisième malentendu envisagé — le vecteur normal, qui n'est
   pas « dans » le plan — est déjà traité par un schéma du chapitre de
   géométrie dans l'espace. Une figure de plus aurait fait doublon, ce que le
   cahier des charges proscrit explicitement : une figure par malentendu, pas
   une figure par formule.

   Écrit le 2026-09-14. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-orthogonalite-espace"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7 ; le numéro imprimé reste celui du
     livre).

     ch. 11 (géométrie dans l'espace) : tout ce chapitre s'écrit sur les
     objets du précédent — coordonnées de l'espace, produit scalaire en trois
     dimensions, équation cartésienne d'un plan, vecteur normal. La formule
     de distance point-plan a même pour dénominateur la norme du vecteur
     normal, c'est-à-dire un calcul du chapitre 11.

     C'est le seul prérequis, et il est absolu : sans lui, aucune ligne de ce
     chapitre n'a de sens. Aucun autre chapitre du niveau n'est déclaré, car
     rien ici ne demande de limite, de dérivée ni d'intégrale. */
  prerequis: [11],

  /* Rang conseillé (2026-09-14) : rang 4, immédiatement après la géométrie
     dans l'espace (rang 3).

     Les deux chapitres se traitent d'affilée, et c'est le point important :
     les séparer par plusieurs semaines d'analyse obligerait à réinstaller
     entièrement les coordonnées de l'espace au moment de reprendre. Le
     LIVRE les range d'ailleurs côte à côte (chapitres 11 et 12), et sur ce
     point l'ordre du livre et celui de la progression coïncident. */
  rangConseille: 4,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Géométrie de l'espace ».
  attendus: [
    "Caractériser l'orthogonalité de deux vecteurs de l'espace par la nullité de leur produit scalaire",
    "Déterminer si une droite est perpendiculaire à un plan à partir de son vecteur directeur et du vecteur normal du plan",
    "Déterminer le projeté orthogonal d'un point sur une droite ou sur un plan",
    "Calculer la distance d'un point à un plan",
    "Reconnaître deux plans perpendiculaires à partir de leurs vecteurs normaux"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "L'orthogonalité par le produit scalaire, le projeté orthogonal et la distance d'un point à " +
        "un plan sont au programme de terminale.<br/><br/>" +
        "<strong>Deux points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>formule de distance point-plan</strong> elle-même. Le programme demande " +
        "de savoir calculer cette distance, mais la voie attendue passe par le projeté orthogonal : " +
        "on paramètre la droite perpendiculaire au plan passant par le point, on cherche son " +
        "intersection avec le plan, puis on calcule la longueur. La formule directe " +
        "$d = \\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ est un résultat " +
        "<strong>admis</strong> : elle fait gagner beaucoup de temps, et le chapitre s'en sert, " +
        "mais un élève qui ne saurait QUE l'appliquer serait pris en défaut le jour où l'énoncé " +
        "demande explicitement les coordonnées du projeté. Il est prudent de traiter les deux " +
        "chemins au moins une fois sur le même exemple.<br/><br/>" +
        "Ensuite la <strong>distance d'un point à une droite</strong> de l'espace, qui figure aussi " +
        "dans les attendus et que ce chapitre n'aborde pas : elle n'a pas de formule aussi simple " +
        "et se traite par le projeté orthogonal. Elle est à prévoir en prolongement, et aucun " +
        "exercice de la banque ne la suppose.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     Renvois vérifiés contre le tirage réel de la graine du livre le
     2026-09-14, et protégés par le test de mots-clés
     (scripts/manuel/tests/prof-tle.test.js). */
  erreurs: [
    {
      titre: "Appliquer le produit scalaire nul là où il faut la colinéarité",
      eleve: "Pour savoir si une droite est perpendiculaire à un plan, l'élève calcule " +
             "$\\vec{u} \\cdot \\vec{n}$ et conclut « perpendiculaire » quand il trouve $0$. C'est " +
             "exactement l'inverse : un produit scalaire nul signifie ici que la droite est " +
             "<strong>parallèle</strong> au plan.",
      cause: "C'est l'erreur la plus coûteuse du chapitre, et elle est logique. Le chapitre s'ouvre " +
             "sur « l'orthogonalité se teste par le produit scalaire nul », et cette phrase est " +
             "vraie — pour deux VECTEURS. L'élève l'applique alors à une droite et un plan, qui " +
             "sont deux objets d'une autre nature.<br/><br/>" +
             "Le vocabulaire n'aide pas : « droite perpendiculaire au plan » contient le mot qui " +
             "déclenche le réflexe du produit scalaire, alors que la bonne réponse est une " +
             "colinéarité. Le mot dit le contraire du geste à faire.",
      remede: "Ne pas chercher à faire retenir deux règles : faire retenir <strong>ce qu'on " +
              "compare</strong>. Poser systématiquement la question préalable « de quels objets " +
              "parle-t-on ? » et n'écrire aucun calcul avant d'y avoir répondu.<br/><br/>" +
              "Deux vecteurs entre eux : produit scalaire nul. Une droite et un plan : le vecteur " +
              "directeur et la normale sont <strong>colinéaires</strong>, parce que la droite suit " +
              "la même direction que la normale. Deux plans entre eux : leurs deux normales, et on " +
              "revient au produit scalaire nul.<br/><br/>" +
              "Faire dessiner le cas critique plutôt que l'énoncer : une droite dont le vecteur " +
              "directeur est orthogonal à la normale du plan est une droite qui <strong>longe</strong> " +
              "le plan. L'élève voit alors que le produit scalaire nul donne le cas exactement " +
              "opposé à celui qu'il cherchait, et cette image tient mieux qu'une consigne.<br/><br/>" +
              "Un tableau à trois lignes — deux vecteurs, droite et plan, deux plans — construit " +
              "par les élèves eux-mêmes en fin de séance, vaut mieux qu'un encadré fourni.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-14) :
         l'exercice 5 demande le coefficient de colinéarité entre le vecteur
         directeur d'un mât et la normale de la dalle. L'énoncé nomme
         explicitement le bon critère (« C'est le cas lorsque u et n sont
         colinéaires »), ce qui en fait une remédiation et non un piège : on
         remédie en montrant la bonne voie, pas en tendant une embûche. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier la valeur absolue, et annoncer une distance négative",
      eleve: "L'élève calcule $d = \\dfrac{2 \\times 2 + 2 \\times (-1) + (-3) - 4}{3} = -1{,}67$ et " +
             "écrit ce nombre comme réponse.",
      cause: "La formule est appliquée correctement, et le calcul est juste : ce n'est pas une " +
             "erreur de calcul mais une erreur de <strong>lecture de la formule</strong>. Les " +
             "barres de valeur absolue sont fines, elles ressemblent à des parenthèses, et rien " +
             "dans la disposition ne les met en évidence.<br/><br/>" +
             "Surtout, l'élève n'a aucune raison de s'alarmer : les nombres négatifs sont partout " +
             "en terminale, et il n'a jamais eu à se demander si un résultat pouvait l'être.",
      remede: "Installer un réflexe de contrôle plutôt qu'une consigne de vigilance. Avant même de " +
              "calculer, faire annoncer le SIGNE attendu : une distance est une longueur, donc elle " +
              "est positive ou nulle, toujours. Un résultat négatif n'est pas « presque juste », " +
              "c'est un résultat impossible — et l'élève peut le détecter seul.<br/><br/>" +
              "Donner ensuite du sens au signe, au lieu de le supprimer sans explication. Le " +
              "numérateur non barré indique de quel <strong>côté</strong> du plan se trouve le " +
              "point : positif d'un côté, négatif de l'autre. La valeur absolue ne jette donc pas " +
              "une information parasite, elle met de côté une information qu'on ne demande pas " +
              "ici. Un élève qui comprend cela n'oublie plus les barres, parce qu'elles ont une " +
              "raison d'être.<br/><br/>" +
              "Le premier schéma du cours peut servir de rappel : la distance y est une longueur " +
              "portée sur un segment, et un segment n'a pas de longueur négative.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 2 place le
         point M(2;-1;-3) — deux coordonnées négatives — face à un plan dont le
         terme constant est négatif lui aussi. Le numérateur non barré y sort
         négatif, donc l'erreur se produit effectivement sur cet exercice et la
         valeur absolue y est indispensable. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Additionner les coefficients au lieu de les élever au carré",
      eleve: "Pour le plan $3x + 3y + 2z - 7 = 0$, l'élève écrit un dénominateur de $8$ au lieu de " +
             "$\\sqrt{22} \\approx 4{,}69$.",
      cause: "Le dénominateur est la partie de la formule qui ne « fait rien » : elle ne dépend pas " +
             "du point, elle est toujours la même pour un plan donné, et l'élève la traite comme " +
             "une formalité à expédier avant le vrai calcul.<br/><br/>" +
             "Il ne perçoit pas que ce dénominateur EST une norme, c'est-à-dire le même objet " +
             "qu'il a calculé tout le chapitre précédent. Écrit sous la barre de fraction, il " +
             "change d'apparence et cesse d'être reconnu.",
      remede: "Faire nommer l'objet avant de le calculer : « que vaut $\\sqrt{a^2 + b^2 + c^2}$ ? » " +
              "— c'est $\\|\\vec{n}\\|$, la norme du vecteur normal, rien d'autre. Une fois " +
              "l'identification faite, l'erreur disparaît d'elle-même, parce que personne " +
              "n'additionne les coordonnées pour calculer une norme une fois qu'il sait que c'en " +
              "est une.<br/><br/>" +
              "Imposer ensuite de calculer le dénominateur <strong>en premier</strong> et de " +
              "l'écrire à part. Deux bénéfices : il cesse d'être une formalité de fin de calcul, " +
              "et il est réutilisable tel quel si l'énoncé demande la distance de plusieurs points " +
              "au même plan.<br/><br/>" +
              "Contrôler enfin par un ordre de grandeur : la racine d'une somme de carrés est " +
              "toujours PLUS PETITE que la somme des nombres eux-mêmes (dès qu'il y en a au moins " +
              "deux non nuls). Un dénominateur de $8$ là où on attend $4{,}69$ est donc détectable " +
              "sans refaire le calcul.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 3 isole
         exactement ce calcul — il demande UNIQUEMENT la norme du vecteur
         normal, en la nommant « le dénominateur de la formule de distance ».
         C'est la tâche créée ce jour pour cette remédiation précise ; elle
         n'existait pas dans la banque d'origine, qui ne contenait qu'une
         seule tâche. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Chercher les normales au lieu de les lire",
      eleve: "Pour savoir si deux plans sont perpendiculaires, l'élève cherche des points de chaque " +
             "plan, construit des vecteurs, et se perd avant d'avoir posé le moindre produit " +
             "scalaire.",
      cause: "Même racine que l'erreur du chapitre précédent : l'élève ne sait pas que les " +
             "coefficients de l'équation SONT les coordonnées de la normale. Ici la conséquence " +
             "est plus lourde, car il faut deux normales, et le travail inutile double.<br/><br/>" +
             "S'y ajoute un doute légitime : comment deux directions qui n'appartiennent ni à l'un " +
             "ni à l'autre des plans pourraient-elles décider de leur position relative ? Tant que " +
             "ce doute n'est pas levé, l'élève cherche ailleurs — et il a de bonnes raisons de le " +
             "faire.",
      remede: "Lever le doute avant d'installer la méthode, sans quoi la méthode sera appliquée " +
              "sans confiance et abandonnée à la première hésitation. Le deuxième schéma du cours, " +
              "« Deux plans perpendiculaires par leurs normales », montre un plan horizontal et un " +
              "plan vertical, avec leurs deux normales issues d'un même point de leur droite " +
              "d'intersection : la verticale et la fuyante y forment visiblement un angle droit, " +
              "codé par un carré.<br/><br/>" +
              "Faire alors basculer mentalement l'un des deux plans autour de leur arête commune, " +
              "et constater que sa normale bascule exactement du même angle. C'est la " +
              "justification du critère, et elle se voit : l'angle des normales suit l'angle des " +
              "plans.<br/><br/>" +
              "Installer ensuite l'automatisme de lecture, qui prend quinze secondes : devant " +
              "$2x - y + 2z - 3 = 0$, on écrit $\\vec{n}(2\\,;\\,-1\\,;\\,2)$ et on a fini. Un " +
              "exercice de dix équations à transformer en dix normales, sans aucun calcul, ancre " +
              "le geste mieux qu'un rappel de cours.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 donne deux
         équations de plans et demande le produit scalaire de leurs normales.
         L'indication rappelle explicitement que les coefficients SONT les
         coordonnées de la normale et qu'« il n'y a rien d'autre à chercher » —
         ce qui prend l'erreur exactement à revers. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions.

     Q1 produit scalaire de deux vecteurs donnés : application directe de la
        formule en coordonnées, donc « calculer ».
     Q2 les vecteurs $\vec{u}(1;-2;3)$ et $\vec{v}(6;0;-2)$ sont-ils
        orthogonaux ? Le calcul est immédiat, mais la question porte sur la
        CONCLUSION à en tirer : l'élève passe d'une valeur numérique à une
        propriété géométrique. C'est « raisonner ».
     Q3 distance d'un point à un plan : application de la formule, donc
        « calculer ».
     Q4 une droite de vecteur directeur $\vec{u}(3;-6;9)$ est-elle
        perpendiculaire au plan de normale $\vec{n}(1;-2;3)$ ? C'est la
        question qui sépare colinéarité et orthogonalité, et l'élève doit
        d'abord décider QUEL critère s'applique avant de calculer quoi que ce
        soit. C'est « raisonner ».
     Q5 les plans $x + 2y - z + 1 = 0$ et $2x - y + 2z - 3 = 0$ sont-ils
        perpendiculaires ? L'élève doit lire deux normales dans deux
        écritures algébriques, c'est-à-dire reconnaître un objet géométrique
        dans une équation, avant de conclure. C'est « représenter ».

     « Chercher », « modéliser » et « communiquer » ne sont PAS déclarées
     ici : aucune des cinq questions ne demande d'explorer une piste sans
     méthode donnée, de traduire une situation concrète, ni de juger une
     explication. Les trois compétences sont portées par d'autres chapitres
     du niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "représenter"]
  }
};
