/* =========================================================
   Spark Learning – js/data/prof/3e/trigonometrie.prof.js
   Fiche professeur du chapitre « Trigonométrie dans le triangle rectangle »
   (troisième), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU NOM. L'identifiant de ce module est exactement `trigonometrie`,
   SANS le préfixe `3e-` que portent les douze autres chapitres du niveau. Ce
   n'est pas un oubli à corriger : l'identifiant est celui sous lequel le module
   est publié sur le site et référencé par les URL, et le renommer casserait
   l'indexation. Le fichier de fiche doit donc porter le même nom nu.

   Conventions reprises du CHAPITRE PILOTE du niveau, js/data/prof/3e/
   3e-thales.prof.js (2026-09-13) : KaTeX inline, virgule décimale en {,}, ton
   jamais punitif, remèdes longs et gestes de classe réalisables, renvois
   vérifiés contre le tirage réel de la graine du livre.

   CE CHAPITRE EN PARTICULIER. C'est le chapitre de troisième dont la seconde
   dépend le plus directement : le cercle trigonométrique, les vecteurs, la
   projection et toute la physique du lycée se posent sur SOH-CAH-TOA. Les
   `attendus` ci-dessous ont donc été rédigés comme un contrat de sortie
   d'année, lisible tel quel par la progression de seconde.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["trigonometrie"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js).

     ch. 3 (théorème de Thalès, rang 8) : la trigonométrie repose entièrement
     sur une propriété que Thalès établit, à savoir que dans deux triangles de
     mêmes angles les rapports de côtés sont égaux. C'est CE fait qui autorise
     à parler du cosinus d'un angle sans parler d'un triangle particulier —
     autrement dit, c'est ce qui fait exister $\cos(30°)$ comme un nombre. Un
     élève qui n'a pas vu ce lien croit que $\cos$ est une touche de la
     calculatrice, et le chapitre entier devient de la manipulation aveugle.

     Le théorème de Pythagore de quatrième n'est pas listé, bien qu'il soit
     utilisé dans la vérification de l'exemple du cours et qu'il fonde la
     relation $\sin^2 + \cos^2 = 1$ : il n'est jamais nécessaire pour appliquer
     SOH-CAH-TOA, et l'afficher en prérequis ferait perdre du temps en révision
     là où il n'en manque pas. */
  prerequis: [3],

  /* Rang conseillé (2026-09-13) : rang 10, juste après les homothéties. Les
     trois chapitres 8, 9 et 10 forment un bloc cohérent qui gagne beaucoup à
     être traité d'affilée : Thalès pose l'égalité des rapports, l'homothétie
     en fait une transformation, la trigonométrie en tire des fonctions de
     l'angle. C'est la même idée, énoncée trois fois avec de plus en plus de
     puissance, et l'enchaînement le rend visible.

     Placer la trigonométrie en fin d'année, comme le veut l'habitude, prive
     l'élève de ce lien et la réduit à trois formules à apprendre. Elle mérite
     mieux : c'est le chapitre du collège qui sert le plus au lycée.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. */
  rangConseille: 10,

  /* Attendus de fin d'année de troisième (programme du cycle 4, 2020), domaine
     « Espace et géométrie ».

     CES LIGNES SONT UN CONTRAT DE SORTIE, et elles sont écrites pour être lues
     par la progression de SECONDE : ce qui figure ici est ce sur quoi le lycée
     peut s'appuyer sans reprendre. Le cercle trigonométrique, les angles
     obtus, les vecteurs et la projection de seconde supposent tous ces quatre
     points acquis — et rien de plus. */
  attendus: [
    "Connaître et utiliser les relations $\\cos$, $\\sin$ et $\\tan$ dans le triangle rectangle, en sachant identifier l'hypoténuse, le côté opposé et le côté adjacent à un angle donné",
    "Calculer la longueur d'un côté d'un triangle rectangle à partir d'un angle aigu et d'une autre longueur",
    "Déterminer la mesure d'un angle aigu à partir de deux longueurs, en utilisant les touches $\\arccos$, $\\arcsin$ ou $\\arctan$ de la calculatrice",
    "Choisir, dans une situation concrète, le rapport trigonométrique adapté aux données de l'énoncé et rédiger la justification du choix",
    "Savoir que ces rapports ne dépendent que de l'angle et non de la taille du triangle, conséquence directe du théorème de Thalès"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "La trigonométrie de troisième porte <strong>exclusivement sur le triangle rectangle</strong> " +
        "et sur les <strong>angles aigus</strong>. Le cosinus était déjà au programme de quatrième ; " +
        "la troisième ajoute le sinus, la tangente, et la détermination d'un angle à partir de deux " +
        "longueurs.<br/><br/>" +
        "Plusieurs points du cours <strong>dépassent nettement l'année</strong>, et il faut le savoir " +
        "avant d'entrer en classe.<br/><br/>" +
        "D'abord, tout ce qui concerne le <strong>triangle quelconque</strong>. La " +
        "<strong>loi des sinus</strong> et la loi des cosinus (Al-Kashi) ne sont <strong>pas au " +
        "programme du collège</strong> : elles relèvent de la première. Un élève de troisième qui " +
        "rencontre un triangle non rectangle doit d'abord y <strong>tracer une hauteur</strong> pour " +
        "faire apparaître deux triangles rectangles — c'est la seule méthode exigible, et c'est " +
        "d'ailleurs un excellent exercice de raisonnement.<br/><br/>" +
        "Ensuite la <strong>relation fondamentale</strong> $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$, " +
        "qui figure dans les formules et dans une question de l'évaluation. Elle relève de la " +
        "<strong>seconde</strong>. Sa présence ici se défend : elle se démontre en deux lignes avec " +
        "Pythagore, et c'est une belle occasion de montrer que deux chapitres se parlent. Mais elle " +
        "est à traiter en <strong>ouverture</strong>, pas en exigence, et une évaluation de " +
        "troisième qui la sanctionnerait serait hors programme.<br/><br/>" +
        "Enfin les <strong>applications à la physique</strong> — décomposition d'une force, plan " +
        "incliné, loi de Snell-Descartes — qui occupent le quiz et le problème guidé. La " +
        "décomposition vectorielle relève de la <strong>seconde</strong>, et Snell-Descartes de la " +
        "<strong>première</strong>. Ce sont d'excellents ancrages pour montrer à quoi sert le " +
        "chapitre, et un très bon terrain de travail commun avec le collègue de physique-chimie, " +
        "mais rien de tout cela n'est exigible en mathématiques cette année.<br/><br/>" +
        "<strong>Ce qui est réellement exigible</strong> tient en peu de choses : identifier les " +
        "trois côtés par rapport à un angle, choisir le bon rapport, calculer une longueur, " +
        "retrouver un angle. C'est peu, et c'est ce qu'il faut consolider jusqu'à l'automatisme, " +
        "car la seconde s'appuie dessus dès les premières semaines.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent.

     ÉTAT DE LA BANQUE (vérifié contre le tirage réel de la graine du livre,
     2026-09-13) : les huit exercices numérotés posent tous la même tâche,
     « adjacent $=$ hypoténuse $\times \cos(\theta)$ », dans six habillages
     différents (échelle, rampe, toboggan, tyrolienne, chemin, hauban).
     L'angle est toujours $30°$, $45°$ ou $60°$, l'hypoténuse est toujours
     donnée, et c'est toujours le côté adjacent qui est demandé. Ni sinus, ni
     tangente, ni recherche d'angle. Deux des quatre remédiations ci-dessous
     sont donc SANS RENVOI, et chacune dit où trouver l'entraînement utile. */
  erreurs: [
    {
      titre: "Confondre le côté opposé et le côté adjacent",
      eleve: "Pour une échelle de $5$ m formant un angle de $60°$ avec le sol, l'élève cherche la " +
             "hauteur atteinte sur le mur et écrit $h = 5 \\times \\cos(60°) = 5 \\times 0{,}5 = 2{,}5$ m, " +
             "au lieu de $h = 5 \\times \\sin(60°) \\approx 4{,}33$ m. Il a choisi le bon triangle, la " +
             "bonne hypoténuse, et le mauvais rapport.",
      cause: "« Opposé » et « adjacent » ne sont pas des propriétés des côtés, ce sont des " +
             "<strong>rôles relatifs à un angle</strong> : le même côté est opposé à l'un des angles " +
             "aigus et adjacent à l'autre. Or l'élève les a mémorisés comme des étiquettes fixes, " +
             "souvent associées à la position sur le dessin du cours — « l'adjacent, c'est celui du " +
             "bas ». Dès que la figure tourne, ou qu'il n'y a pas de figure du tout, l'étiquette ne " +
             "suit plus. Ce n'est pas un défaut de mémoire : c'est que rien, dans les mots eux-mêmes, " +
             "ne rappelle qu'ils dépendent d'un angle.",
      remede: "Imposer un <strong>rituel de repérage en trois temps, toujours le même</strong>, avant " +
              "d'écrire la moindre formule. Un : où est l'angle droit ? L'hypoténuse est le côté " +
              "d'en face, et elle est fixée une fois pour toutes. Deux : où est l'angle $\\theta$ " +
              "dont on parle ? Trois : parmi les deux côtés restants, celui qui <strong>touche</strong> " +
              "$\\theta$ est l'adjacent, celui qui ne le touche pas est l'opposé.<br/><br/>" +
              "Faire <strong>coder la figure</strong> à chaque fois : un trait de couleur sur " +
              "l'hypoténuse, l'angle marqué d'un arc, et les deux mots écrits directement le long des " +
              "côtés. Le schéma « SOH-CAH-TOA : repérer opposé, adjacent et hypoténuse » du cours est " +
              "exactement ce codage, et il faut le faire <strong>reproduire</strong>, pas seulement " +
              "regarder : c'est en écrivant les mots sur sa propre figure que l'élève cesse de les " +
              "confondre.<br/><br/>" +
              "L'exercice de classe qui règle le point, et qui prend cinq minutes : donner UN seul " +
              "triangle rectangle, nommer ses deux angles aigus $\\alpha$ et $\\beta$, et demander de " +
              "remplir un tableau à deux lignes — opposé et adjacent, pour $\\alpha$ puis pour " +
              "$\\beta$. Les élèves constatent que les deux lignes sont <strong>échangées</strong>. " +
              "Une seule figure, et l'idée de rôle relatif est acquise.<br/><br/>" +
              "Un repère de vraisemblance utile à installer en parallèle : dans un triangle " +
              "rectangle, l'hypoténuse est le plus grand côté, donc un côté calculé qui dépasse " +
              "l'hypoténuse est forcément faux.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 8 est « une rampe d'accès de 19 m à 60° avec le sol, calcule
         la distance horizontale ». C'est le seul des huit à 60°, et c'est le
         plus utile ici : à 60°, cos vaut 0,5 et sin vaut environ 0,866, si bien
         que confondre les deux rapports donne 16,45 m au lieu de 9,5 m — un
         écart énorme et immédiatement visible. L'énoncé demande explicitement
         la distance HORIZONTALE, c'est-à-dire le côté qui touche l'angle : la
         solution imprimée nomme le rapport avant de calculer, ce que le remède
         demande d'exiger. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Diviser au lieu de multiplier quand l'inconnue est au numérateur",
      eleve: "De $\\cos(30°) = \\dfrac{\\text{adj}}{8}$, l'élève écrit " +
             "$\\text{adj} = \\dfrac{8}{\\cos(30°)} = \\dfrac{8}{0{,}866} \\approx 9{,}24$ m, et " +
             "obtient un côté plus long que l'hypoténuse sans que cela l'alerte.",
      cause: "La difficulté n'est pas trigonométrique, elle est <strong>calculatoire</strong> : " +
             "c'est la même que celle du produit en croix dans le chapitre sur Thalès. L'élève " +
             "manipule l'égalité comme un geste appris — « je divise par ce qui reste » — sans " +
             "identifier si l'inconnue est au numérateur ou au dénominateur. La présence du mot " +
             "« cosinus » et d'une valeur décimale à rallonge brouille le repérage : l'égalité " +
             "$\\cos(30°) = \\dfrac{x}{8}$ ne ressemble plus à $\\dfrac{3}{4} = \\dfrac{x}{8}$, " +
             "alors que c'est exactement la même équation.",
      remede: "Faire disparaître la trigonométrie le temps de la remédiation. Écrire au tableau " +
              "$0{,}866 = \\dfrac{x}{8}$, sans aucun symbole $\\cos$, et faire résoudre. Presque tous " +
              "les élèves y arrivent. Puis réécrire la même ligne avec $\\cos(30°)$ à la place de " +
              "$0{,}866$ et faire constater que rien n'a changé : le cosinus n'est qu'un nombre.<br/><br/>" +
              "Installer ensuite l'<strong>écriture produit</strong> comme forme de référence, et " +
              "l'exiger systématiquement : $\\text{adjacent} = \\text{hypoténuse} \\times " +
              "\\cos(\\theta)$. Sous cette forme, il n'y a plus de choix à faire, plus de diagonale à " +
              "suivre, et le sens du calcul ne se joue plus sur une intuition. Faire écrire les trois " +
              "formes produits au dos du cahier : opposé $=$ hyp $\\times \\sin$, adjacent $=$ hyp " +
              "$\\times \\cos$, opposé $=$ adj $\\times \\tan$.<br/><br/>" +
              "Ajouter le <strong>contrôle de vraisemblance</strong> qui coûte deux secondes : " +
              "puisque $\\cos(\\theta)$ et $\\sin(\\theta)$ sont toujours compris entre $0$ et $1$ " +
              "pour un angle aigu, un côté calculé à partir de l'hypoténuse est toujours " +
              "<strong>plus petit</strong> qu'elle. Un résultat de $9{,}24$ m pour une hypoténuse de " +
              "$8$ m se repère alors sans relire une ligne.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est « une
         rampe d'accès de 8 m à 30° avec le sol, calcule la distance
         horizontale ». C'est le premier du livre, et sa solution imprimée est
         découpée en trois lignes : la formule en quotient, puis la forme
         PRODUIT (adj = hyp × cos), puis le résultat. C'est précisément
         l'étape intermédiaire que le remède demande d'exiger, déjà écrite.
         L'élève qui divise trouve ici 9,24 m pour une hypoténuse de 8 m et se
         contredit lui-même. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Chercher un angle avec $\\cos$ au lieu de $\\arccos$",
      eleve: "Connaissant l'adjacent $6$ cm et l'hypoténuse $10$ cm, l'élève écrit " +
             "$\\cos(\\theta) = 0{,}6$, puis tape $\\cos(0{,}6)$ à la calculatrice, lit $0{,}999$ et " +
             "répond $\\theta \\approx 1°$. Ou bien il écrit directement $\\theta = 0{,}6°$.",
      cause: "L'élève connaît une seule touche et une seule direction : de l'angle vers le rapport. " +
             "L'opération inverse n'a pas d'existence dans son répertoire, et il fait donc la seule " +
             "chose disponible. S'y ajoute un piège de machine bien réel : la calculatrice répond " +
             "sans broncher à $\\cos(0{,}6)$, en interprétant $0{,}6$ comme un angle, et affiche un " +
             "résultat d'apparence normale. Rien n'avertit l'élève. Et la notation " +
             "$\\cos^{-1}$ de beaucoup de machines n'aide pas : elle ressemble à un inverse " +
             "multiplicatif, ce qu'elle n'est pas.",
      remede: "Nommer explicitement les deux sens, et les écrire côte à côte au tableau : " +
              "<strong>j'ai l'angle, je veux le rapport</strong> → touche $\\cos$ ; " +
              "<strong>j'ai le rapport, je veux l'angle</strong> → touche $\\arccos$ (souvent " +
              "obtenue par SHIFT puis $\\cos$, et affichée $\\cos^{-1}$). Faire écrire cette double " +
              "flèche sur la première page du chapitre.<br/><br/>" +
              "Consacrer <strong>dix minutes à la calculatrice elle-même</strong>, machine en main, " +
              "ce qui n'est pas du temps perdu : vérifier que le mode est bien en <strong>degrés</strong> " +
              "(le mode radians est la cause d'un tiers des résultats aberrants du chapitre), puis " +
              "faire calculer $\\cos(60°) = 0{,}5$, et immédiatement après $\\arccos(0{,}5) = 60°$. " +
              "L'aller-retour rend l'idée de fonction inverse concrète en trente secondes.<br/><br/>" +
              "Donner enfin un <strong>garde-fou de lecture</strong> : un cosinus ou un sinus est " +
              "toujours entre $0$ et $1$ pour un angle aigu, un angle aigu est toujours entre $0°$ " +
              "et $90°$. Un résultat de $0{,}6°$ ou de $1°$ pour une figure manifestement inclinée " +
              "est donc à rejeter d'emblée. Et si la machine affiche une erreur pour " +
              "$\\arcsin(1{,}4)$, ce n'est pas une panne : c'est que le rapport demandé est " +
              "impossible, donc qu'une donnée a été mal placée.<br/><br/>" +
              "Aucun exercice numéroté du chapitre ne demande de retrouver un angle : les huit " +
              "donnent l'angle et demandent une longueur. L'entraînement est à prendre dans le " +
              "chapitre sur Pythagore pour les triangles support, ou à fabriquer en retournant " +
              "l'un des huit énoncés — donner les deux longueurs, demander l'angle.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés fournissent tous l'angle (30°, 45° ou 60°)
         et l'hypoténuse, et demandent le côté adjacent. Aucun ne va dans le
         sens inverse. Renvoyer vers l'un d'eux pour une erreur de fonction
         réciproque serait un renvoi faux : l'élève ferait l'exercice juste sans
         jamais toucher la touche arccos. Le remède dit comment fabriquer la
         tâche manquante. */
      exercice: null
    },
    {
      titre: "Poser le bon calcul sans jamais justifier le choix du rapport",
      eleve: "L'élève écrit directement « $= 5 \\times \\sin(60°) = 4{,}33$ m », sans phrase. Aucune " +
             "mention du triangle rectangle utilisé, aucune identification de l'hypoténuse ni du côté " +
             "cherché, aucune justification du choix du sinus, aucune unité. Le résultat est juste, " +
             "et la copie perd la majorité des points.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que le " +
             "résultat EST le travail. Le contrat change en troisième sans être annoncé, et il change " +
             "plus fortement ici qu'ailleurs, parce que le <strong>choix du rapport</strong> est " +
             "précisément ce que le correcteur cherche à évaluer. Un calcul juste avec un rapport " +
             "choisi au hasard et un calcul juste avec un rapport justifié se ressemblent sur la " +
             "copie, et c'est pour cela que la justification est demandée.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : une " +
              "résolution trigonométrique tient en trois lignes, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. Le cadre</strong> : « dans le triangle $ABC$ rectangle en $B$ ».<br/><br/>" +
              "<strong>2. Le choix justifié</strong> : « je connais l'hypoténuse et je cherche le " +
              "côté opposé à l'angle de $60°$, j'utilise donc le sinus ». C'est la ligne que les " +
              "élèves suppriment en premier, et c'est celle qui porte le plus de points.<br/><br/>" +
              "<strong>3. Le calcul et la conclusion</strong>, avec l'unité et l'arrondi demandé.<br/><br/>" +
              "Un exercice de classe rapide et redoutablement efficace : distribuer trois copies " +
              "fictives d'un même exercice — l'une avec le bon résultat et aucune phrase, l'une avec " +
              "les trois lignes mais une erreur de calcul dans la dernière, l'une complète. Demander " +
              "aux élèves de les <strong>noter eux-mêmes</strong> sur $4$ points et de défendre leur " +
              "barème. Ils découvrent par eux-mêmes que la deuxième copie vaut plus que la première, " +
              "ce qu'aucun discours sur la rigueur n'obtient aussi vite.<br/><br/>" +
              "Exiger enfin la <strong>précision de l'arrondi</strong> systématiquement, et pas " +
              "seulement quand l'énoncé le demande : en trigonométrie les valeurs sont presque " +
              "toujours décimales, et « $\\approx$ » à la place de « $=$ » est aussi une part de la " +
              "rédaction.<br/><br/>" +
              "Les huit exercices numérotés sont à réponse numérique seule, mais leurs solutions " +
              "imprimées sont, elles, rédigées en trois lignes : elles servent de modèle à imiter, " +
              "et c'est ainsi qu'il faut les faire lire.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est « une
         échelle de 13 m à 45° avec le sol, calcule la distance entre le pied
         de l'échelle et le mur ». Sa solution imprimée est découpée en trois
         étapes — formule nommée, forme produit, résultat avec unité — soit
         exactement la rédaction attendue, sur une situation dont la figure est
         facile à tracer. C'est le meilleur support du chapitre pour faire
         RECOPIER une rédaction complète avant d'en exiger une. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     HONNÊTETÉ DU RELEVÉ (2026-09-13). L'évaluation de ce chapitre est
     majoritairement technique : quatre questions sur cinq consistent à
     appliquer un rapport à des données déjà mises en forme. On déclare ce que
     la question mobilise, pas ce qu'on aimerait qu'elle mobilise.

     Q1 (hyp 13, opposé 5, calculer sin) : application directe de la définition,
     sans figure et sans choix. « calculer ».

     Q2 (cos = 0,6 et hyp = 10, trouver l'adjacent) : l'élève doit isoler
     l'inconnue au numérateur, c'est-à-dire retrouver la forme produit. La
     technique est la même qu'en Q1 mais dans l'autre sens. « calculer ».

     Q3 (échelle de 5 m à 60°, hauteur atteinte) : c'est la seule question dont
     l'énoncé est une situation réelle sans figure. L'élève doit construire le
     triangle rectangle — mur, sol, échelle —, placer l'angle, reconnaître que
     la hauteur est le côté opposé. Toute la difficulté est dans cette
     traduction, le calcul qui suit est immédiat. « modéliser ».

     Q4 (QCM sur sin² + cos² = 1) : aucun calcul, aucune donnée. L'élève doit
     trancher entre quatre relations d'apparence voisine, en écartant celles
     qu'un contre-exemple simple invalide. C'est un jugement sur la validité
     d'un énoncé. « raisonner ».

     Q5 (opposé 7, adjacent 7, calculer tan) : application directe de la
     définition de la tangente. « calculer ».

     Bilan : calculer ×3, modéliser, raisonner. Le chapitre est intrinsèquement
     calculatoire et il serait malhonnête de le déguiser ; « représenter » et
     « communiquer » ne sont pas déclarées parce qu'aucune question ne demande
     de produire une figure ni une explication. Q3 aurait pu porter
     « représenter » si l'élève devait tracer la figure, mais l'énoncé ne le
     demande pas : c'est bien la mise en équation qui est évaluée. */
  competences: {
    /* DEUX QUESTIONS ONT ÉTÉ RÉÉCRITES dans js/data/3e/trigonometrie.js le
       2026-09-13, parce que déclarer une compétence ne suffit pas : la
       question doit réellement la mobiliser. Trois des cinq questions étaient
       la même tâche — poser un rapport et le calculer — sur trois habillages.

       Q2 donnait $\cos(\theta)$ et l'hypoténuse et demandait l'adjacent, soit
       une multiplication. Elle demande maintenant de CHOISIR le rapport dans
       une situation où l'hypoténuse est inconnue et inutile : rien dans
       l'énoncé ne dit lequel des trois convient, et une des propositions
       fausses suggère un détour par Pythagore qui aboutirait quand même.
       C'est « chercher », et c'est la difficulté réelle du chapitre — l'élève
       sait calculer, mais choisit mal.

       Q5 demandait $\tan(\theta)$ avec un opposé et un adjacent tous deux
       égaux à 7, division dont le résultat se voyait sans calcul. Elle demande
       maintenant d'EXPLIQUER pourquoi un sinus de 1,25 est impossible :
       produire un argument, non un nombre. C'est « communiquer », la
       compétence la moins évaluée de l'ouvrage, et l'argument attendu est un
       contrôle de vraisemblance réutilisable sur tout le chapitre.

       Q1 pose un rapport et le calcule : « calculer ».
       Q3 est la situation de l'échelle : l'élève doit reconnaître que la
       hauteur est le côté opposé avant tout calcul, ce que rien ne signale.
       C'est « modéliser ».
       Q4 identifie la relation fondamentale parmi quatre écritures voisines,
       donc conclut d'une propriété générale : « raisonner ». */
    evaluation: ["calculer", "chercher", "modéliser", "raisonner", "communiquer"]
  }
};
