/* =========================================================
   Spark Learning – js/data/prof/3e/3e-volumes.prof.js
   Fiche professeur du chapitre « Volumes : sphère et solides composés »
   (troisième), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions reprises du CHAPITRE PILOTE du niveau, js/data/prof/3e/
   3e-thales.prof.js (2026-09-13) : KaTeX inline, virgule décimale en {,}, ton
   jamais punitif, remèdes longs et gestes de classe réalisables, renvois
   vérifiés contre le tirage réel de la graine du livre.

   CE CHAPITRE EN PARTICULIER. Il a l'apparence d'un chapitre de formules, et
   c'est ce qui le rend piégeux : les élèves les apprennent, les appliquent, et
   ratent pourtant l'essentiel. Les vraies difficultés sont ailleurs — dans la
   confusion rayon/diamètre, dans le passage du rapport au rapport au CUBE, et
   dans la lecture d'un solide composé comme une somme. Aucune des trois ne se
   corrige en révisant une formule, et c'est ce que cette fiche met en avant.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-volumes"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js).

     ch. 9 (homothéties, rang 9) : c'est là, et là seulement, que l'élève a
     rencontré pour la première fois l'idée qu'un rapport agit différemment sur
     une longueur, une aire et un volume. « Doubler le rayon multiplie le volume
     par huit » n'est pas une propriété de la sphère, c'est la propriété
     générale des agrandissements appliquée au cas $k = 2$, et l'élève qui a
     compté les quatre cases du schéma des aires accepte les huit cubes sans
     résistance. Traiter ce chapitre sans avoir posé les homothéties oblige à
     réintroduire le facteur $k^3$ comme une formule arbitraire de plus.

     Le calcul littéral n'est pas listé : $\frac{4}{3}\pi r^3$ s'applique, elle
     ne se transforme pas. Ce qui coince ici est numérique — le cube, les
     conversions, la division par trois — pas algébrique. */
  prerequis: [9],

  /* Rang conseillé (2026-09-13) : rang 11. Le chapitre vient après les
     homothéties (rang 9) dont il est une application directe dans l'espace, et
     avant les sections de solides (rang 12) qui supposent qu'on sache déjà
     nommer et manipuler un cône, une pyramide et un cylindre.

     C'est le premier des deux chapitres d'espace de l'année, et il joue un rôle
     de VOCABULAIRE que le suivant exploitera : sphère, boule, génératrice,
     base, hauteur, apex. Un élève qui n'a pas ces mots en bouche ne peut pas
     suivre le chapitre des sections, qui les emploie dans chaque phrase.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. */
  rangConseille: 11,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie », thème des solides.
  attendus: [
    "Calculer le volume d'une boule à partir de son rayon, et connaître la formule $V = \\dfrac{4}{3}\\pi r^3$",
    "Calculer le volume d'un solide composé en décomposant en solides simples, puis en additionnant ou en soustrayant les volumes",
    "Déterminer l'effet d'un agrandissement ou d'une réduction de rapport $k$ sur le volume d'un solide (multiplication par $k^3$)",
    "Choisir une unité de volume ou de contenance adaptée et effectuer les conversions nécessaires",
    "Modéliser un objet réel par un solide usuel ou un assemblage de solides usuels pour estimer son volume"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Le volume de la boule et les solides composés sont au programme de troisième. C'est le " +
        "dernier solide usuel introduit au collège : le cube, le pavé, le cylindre, le prisme, la " +
        "pyramide et le cône l'ont été en cinquième et en quatrième, et la boule complète la " +
        "liste.<br/><br/>" +
        "Le point réellement exigible n'est d'ailleurs pas la formule elle-même — elle est donnée " +
        "dans tous les sujets de brevet — mais le <strong>facteur $k^3$</strong> des " +
        "agrandissements, qui est régulièrement évalué et régulièrement raté.<br/><br/>" +
        "Deux éléments du cours <strong>dépassent l'année</strong>. D'abord la " +
        "<strong>surface de la sphère</strong>, $S = 4\\pi r^2$, qui figure dans les formules : elle " +
        "n'est <strong>pas au programme du collège</strong> et relève du lycée. Elle est très bien " +
        "placée comme culture — c'est l'occasion de faire remarquer que la formule du volume et " +
        "celle de la surface ne diffèrent que par la puissance de $r$ — mais elle ne peut pas être " +
        "exigée en évaluation.<br/><br/>" +
        "Ensuite le rapport <strong>surface sur volume</strong> évoqué dans l'introduction à propos " +
        "de la taille des cellules. L'idée est juste et l'ancrage excellent, mais il relève de la " +
        "SVT et de la culture scientifique, pas d'un attendu de mathématiques.<br/><br/>" +
        "Un mot enfin sur $\\pi$. Le cours et l'ensemble des exercices travaillent avec " +
        "<strong>$\\pi \\approx 3{,}14$</strong>, ce qui est un choix assumé de lisibilité des " +
        "calculs. Au brevet, les énoncés demandent le plus souvent la <strong>valeur exacte</strong> " +
        "en fonction de $\\pi$, puis une valeur approchée obtenue avec la touche $\\pi$ de la " +
        "calculatrice. Il faut donc entraîner explicitement les élèves à écrire un résultat sous la " +
        "forme $\\dfrac{500}{3}\\pi$ cm³ avant de l'arrondir : cette compétence n'est travaillée " +
        "nulle part dans le chapitre, et son absence se paie à l'examen.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent.

     ÉTAT DE LA BANQUE (vérifié contre le tirage réel de la graine du livre,
     2026-09-13) : les huit exercices numérotés posent tous la même tâche,
     « volume d'une boule dont on donne le RAYON », dans six habillages
     différents (ballon, pétanque, mappemonde, boule à neige, bowling, perle).
     Aucun ne donne un diamètre, aucun ne porte sur un solide composé, aucun ne
     fait varier le rayon. Trois des quatre remédiations ci-dessous sont donc
     SANS RENVOI, et chacune dit où trouver l'entraînement utile. */
  erreurs: [
    {
      titre: "Cuber le diamètre au lieu du rayon",
      eleve: "Pour une balle de tennis de diamètre $6{,}8$ cm, l'élève écrit " +
             "$V = \\dfrac{4}{3} \\times 3{,}14 \\times 6{,}8^3 \\approx 1\\,316{,}8$ cm³, au lieu de " +
             "$164{,}6$ cm³. Il se trompe d'un facteur $8$ sans le voir, et rien dans l'ordre de " +
             "grandeur obtenu ne l'alerte — une balle de tennis d'un litre et demi.",
      cause: "L'énoncé donne un diamètre, la formule réclame un rayon, et <strong>rien dans " +
             "l'écriture ne signale le conflit</strong> : $6{,}8$ est un nombre, la formule attend " +
             "un nombre, l'élève le place. L'étape $r = \\dfrac{d}{2}$ n'est pas oubliée par " +
             "négligence, elle n'a simplement jamais été déclenchée, parce qu'aucun signal ne la " +
             "réclame. À cela s'ajoute que l'erreur est <strong>silencieuse</strong> : le résultat " +
             "est un nombre plausible pour qui n'a pas d'intuition des volumes en centimètres cubes, " +
             "et le facteur $8$ passe inaperçu là où un facteur $2$ aurait sauté aux yeux.",
      remede: "Faire de la lecture de l'énoncé une <strong>étape écrite et notée</strong>, avant tout " +
              "calcul. L'élève commence toute résolution par une ligne : « donnée : diamètre " +
              "$d = 6{,}8$ cm, donc rayon $r = 3{,}4$ cm ». Tant que cette ligne n'est pas là, la " +
              "formule ne s'écrit pas. C'est une habitude de trois semaines, et elle tient ensuite " +
              "toute seule.<br/><br/>" +
              "Faire <strong>surligner le mot</strong> — rayon ou diamètre — dans chaque énoncé, au " +
              "fluo, avant de prendre la calculatrice. Le geste paraît enfantin ; il est " +
              "spectaculairement efficace, parce que l'erreur est une erreur de lecture et non de " +
              "calcul.<br/><br/>" +
              "Installer enfin un <strong>ordre de grandeur de référence</strong>, qui est le " +
              "meilleur garde-fou de tout le chapitre : une boule de $1$ cm de rayon fait environ " +
              "$4$ cm³, une balle de tennis environ $165$ cm³, un ballon de basket environ " +
              "$7$ litres. Un résultat qui s'écarte d'un facteur $8$ de ce qu'on attend se repère " +
              "alors sans relire une ligne. Faire annoncer l'ordre de grandeur <strong>avant</strong> " +
              "de calculer, à l'oral, sur trois ou quatre énoncés.<br/><br/>" +
              "Les huit exercices numérotés donnent tous directement le rayon : ils ne déclenchent " +
              "jamais l'erreur et ne peuvent donc pas servir à la corriger. L'entraînement utile est " +
              "dans la deuxième question du quiz, qui donne un diamètre de $6$ cm, et dans les " +
              "énoncés de brevet, où le diamètre est de loin la donnée la plus fréquente.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         le générateur tire un rayon entier entre 2 et 8 et l'annonce
         explicitement comme « un rayon de r cm » dans les six habillages. Aucun
         des huit exercices numérotés ne donne un diamètre. Renvoyer vers l'un
         d'eux pour l'erreur la plus fréquente du chapitre serait un renvoi
         faux : l'élève ferait l'exercice juste sans jamais rencontrer la
         difficulté. Le remède nomme les deux supports qui, eux, la
         travaillent. */
      exercice: null
    },
    {
      titre: "Multiplier le volume par le rapport au lieu de son cube",
      eleve: "« On triple le rayon d'une boule, par quel facteur le volume est-il multiplié ? » " +
             "L'élève répond $\\times 3$. Parfois $\\times 9$, chez ceux qui se souviennent qu'il y " +
             "avait un carré quelque part, au lieu de $\\times 27$.",
      cause: "Même mécanisme que pour les aires dans le chapitre des homothéties, d'un cran plus " +
             "haut : la proportionnalité est le modèle spontané de tout agrandissement. La réponse " +
             "$\\times 9$ est particulièrement instructive — ce n'est pas un hasard, c'est le " +
             "souvenir du <strong>carré</strong> travaillé pour les aires, appliqué à un volume. " +
             "L'élève a retenu qu'il y a une puissance, il n'a pas retenu d'où elle vient. Tant que " +
             "l'exposant n'est pas relié au <strong>nombre de dimensions</strong>, il reste " +
             "arbitraire et donc oubliable.",
      remede: "Relier l'exposant au comptage, comme cela a été fait pour les aires. Un volume " +
              "contient <strong>trois longueurs</strong> — longueur, largeur, hauteur — et chacune " +
              "est multipliée par $k$ : d'où $k \\times k \\times k = k^3$. Une aire en contient " +
              "deux, d'où $k^2$. Une longueur en contient une, d'où $k$. Écrire les trois lignes " +
              "l'une sous l'autre au tableau : la régularité se voit, et l'exposant cesse d'être " +
              "une formule à retenir.<br/><br/>" +
              "Le rendre <strong>matériel</strong>, si l'occasion se présente : huit petits cubes " +
              "identiques assemblés forment un cube dont l'arête est double. Les élèves les " +
              "comptent, comme ils avaient compté les quatre cases du schéma des aires. Deux minutes, " +
              "et le facteur $8$ n'est plus jamais un mystère. À défaut de cubes, un dessin en " +
              "perspective au tableau fait l'affaire.<br/><br/>" +
              "Le schéma « Comparer deux sphères : quand le rayon double, le volume est multiplié " +
              "par 8 » du cours donne la vérification chiffrée qui referme la boucle : les deux " +
              "volumes valent $113{,}04$ et $904{,}32$ cm³, et $904{,}32 \\div 113{,}04 = 8$ " +
              "exactement. Faire poser cette division par les élèves eux-mêmes plutôt que de leur " +
              "annoncer le résultat.<br/><br/>" +
              "Un exercice de tri très rapide, à faire à l'oral : annoncer une série de grandeurs — " +
              "périmètre, aire d'une façade, contenance d'une citerne, longueur d'un câble, surface " +
              "de peinture — et demander à chaque fois « $k$, $k^2$ ou $k^3$ ? ». Aucun calcul, " +
              "trois minutes, et le réflexe de lecture d'énoncé s'installe.<br/><br/>" +
              "Aucun exercice numéroté du chapitre ne fait varier le rayon : tous demandent un " +
              "volume unique. L'entraînement chiffré est dans la première question du quiz et dans " +
              "le chapitre des homothéties, où le rapport d'agrandissement est le sujet même.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés calculent le volume d'UNE boule à partir
         d'UN rayon. Aucun ne compare deux solides, aucun n'applique un rapport
         d'agrandissement. Renvoyer à l'un d'eux pour l'erreur du facteur k³
         serait un renvoi faux. Les supports qui travaillent réellement le point
         sont nommés dans le remède : quiz Q1 et chapitre des homothéties. */
      exercice: null
    },
    {
      titre: "Confondre sphère et boule, et additionner une surface à un volume",
      eleve: "Pour un solide composé d'un cylindre surmonté d'une demi-sphère, l'élève écrit " +
             "$V = \\pi r^2 h + 4\\pi r^2$, c'est-à-dire qu'il ajoute la <strong>surface</strong> de " +
             "la sphère au volume du cylindre. Ailleurs, il oublie de diviser par deux et compte la " +
             "boule entière : $282{,}6 + 113{,}04$ au lieu de $282{,}6 + 56{,}52$.",
      cause: "Deux causes se superposent. D'abord le <strong>vocabulaire</strong> : « sphère » et " +
             "« boule » désignent en langue courante le même objet, et la distinction " +
             "surface/volume que les mathématiques y mettent est une convention scolaire que rien " +
             "dans l'usage ne soutient. Ensuite le fait que <strong>deux formules cohabitent</strong> " +
             "avec le même $r$ et le même $\\pi$, l'une en $r^2$ et l'autre en $r^3$ : au moment de " +
             "choisir, l'élève prend celle dont il se souvient, pas celle dont il a besoin. Il ne " +
             "confond pas des idées, il confond deux lignes de son cahier.",
      remede: "Trancher par les <strong>unités</strong>, qui sont ici un outil de raisonnement et " +
              "pas une formalité de fin de calcul. Une surface se mesure en cm², un volume en cm³ : " +
              "additionner des cm² et des cm³ est impossible, exactement comme additionner des euros " +
              "et des kilomètres. Faire écrire l'unité <strong>à chaque ligne intermédiaire</strong>, " +
              "et l'erreur devient visible avant même d'être calculée.<br/><br/>" +
              "Doubler ce contrôle d'un contrôle sur les <strong>exposants</strong>, qui est plus " +
              "rapide encore : un volume se calcule toujours à partir d'un $r^3$ ou d'un $r^2 \\times h$, " +
              "c'est-à-dire toujours <strong>trois longueurs multipliées</strong>. Une formule qui " +
              "n'en contient que deux ne peut pas donner un volume. Faire vérifier cet exposant sur " +
              "chacune des formules du chapitre, une fois, en début de séquence.<br/><br/>" +
              "Pour le vocabulaire, un geste concret vaut mieux qu'une définition : un ballon de " +
              "baudruche est une sphère — de la matière uniquement sur la surface, et de l'air " +
              "dedans ; une boule de pétanque est une boule — pleine. Faire donner d'autres exemples " +
              "par les élèves, et faire classer.<br/><br/>" +
              "Pour les solides composés, exiger le <strong>schéma légendé avant tout calcul</strong> : " +
              "dessiner le solide, le séparer d'un trait, nommer chaque partie et écrire ses " +
              "dimensions à côté. La demi-sphère apparaît alors comme une <strong>moitié</strong>, ce " +
              "qui est très difficile à oublier une fois dessiné, alors que c'est très facile à " +
              "oublier en ligne de calcul.<br/><br/>" +
              "Aucun exercice numéroté du chapitre ne porte sur un solide composé : les huit sont " +
              "des boules simples. L'entraînement est dans la troisième question du quiz (figurine " +
              "cylindre plus demi-sphère) et dans le problème guidé de la bougie, dont les trois " +
              "tâches successives imposent précisément la décomposition.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés portent tous sur une boule unique, aucun
         sur un assemblage. Renvoyer à l'un d'eux pour une erreur de
         décomposition serait un renvoi faux. Le remède nomme les deux supports
         qui travaillent réellement le point : quiz Q3 et problème guidé. */
      exercice: null
    },
    {
      titre: "Donner un nombre sans formule, sans étapes et sans unité",
      eleve: "L'élève écrit « $904{,}3$ » seul sur sa copie. Pas de formule citée, pas de valeur de " +
             "$r^3$ intermédiaire, pas d'unité, et un arrondi choisi au hasard. Le résultat est " +
             "juste, et la copie perd la majorité des points d'une question notée sur trois ou " +
             "quatre.",
      cause: "La calculatrice enchaîne tout le calcul d'un seul tenant, si bien que les étapes " +
             "<strong>n'existent pas</strong> dans l'expérience de l'élève : il tape, il lit, il " +
             "recopie. Écrire des lignes intermédiaires lui apparaît comme une exigence de forme " +
             "sans objet, puisqu'il ne les a pas parcourues. À cela s'ajoute le contrat implicite " +
             "qui a changé sans être annoncé : depuis la sixième, un résultat juste valait tous les " +
             "points, et le brevet évalue désormais une démarche écrite.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : un calcul " +
              "de volume tient en trois lignes, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. La formule citée</strong>, avec ses lettres : « $V = \\dfrac{4}{3}\\pi r^3$ ».<br/><br/>" +
              "<strong>2. La substitution</strong>, chiffres à la place des lettres, avant tout " +
              "résultat : « $V = \\dfrac{4}{3} \\times 3{,}14 \\times 6^3$ ».<br/><br/>" +
              "<strong>3. Le résultat</strong>, avec son <strong>unité</strong> et l'arrondi " +
              "demandé : « $V \\approx 904{,}3$ cm³ ».<br/><br/>" +
              "Justifier l'exigence par son utilité plutôt que par la règle, ce qui la rend " +
              "acceptable : une ligne de substitution correcte suivie d'une erreur de touche vaut " +
              "presque tous les points, alors qu'un nombre seul et faux n'en vaut aucun. Les étapes " +
              "ne servent pas le correcteur, elles protègent l'élève. Le dire ainsi change " +
              "l'adhésion.<br/><br/>" +
              "Faire travailler l'exigence sur les <strong>solutions imprimées du livre</strong>, qui " +
              "sont rédigées exactement sous cette forme : faire recopier deux d'entre elles, puis " +
              "exiger la même présentation sur un exercice neuf. Imiter avant de produire est ici " +
              "plus efficace que n'importe quelle consigne.<br/><br/>" +
              "Ajouter enfin l'entraînement que le chapitre ne fournit pas et que le brevet réclame : " +
              "écrire la <strong>valeur exacte</strong> en fonction de $\\pi$ — « $V = 288\\pi$ cm³ » — " +
              "avant d'en donner une valeur approchée. C'est la forme attendue à l'examen.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 2 est « une boule de pétanque en acier de rayon 6 cm,
         calcule son volume de métal, pi ≈ 3,14, arrondi à 0,1 cm³ ». Sa
         solution imprimée est écrite en une ligne qui montre TOUTES les étapes
         demandées — la substitution, le cube développé (216), le numérateur
         (2712,96), la division par trois, le résultat arrondi avec son unité.
         C'est le modèle de rédaction que le remède demande de faire recopier,
         et l'énoncé précise lui-même l'arrondi attendu, ce qui permet
         d'exiger la précision sans l'imposer arbitrairement. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     HONNÊTETÉ DU RELEVÉ (2026-09-13). Ce chapitre est calculatoire par nature,
     et son évaluation l'est aussi. On déclare ce que la question mobilise, pas
     ce qu'on aimerait qu'elle mobilise.

     Q1 (boule de rayon 5, volume) : application directe de la formule, donnée
     au cours, sur une donnée déjà au bon format. « calculer ».

     Q2 (balle de tennis, diamètre 6,8) : la question porte tout entière sur le
     passage du diamètre au rayon — c'est le piège du chapitre, et le calcul
     qui suit est le même qu'en Q1. L'élève doit décider quoi faire de la donnée
     avant de calculer. « raisonner ».

     Q3 (QCM, triple du rayon) : aucun calcul numérique possible, aucune donnée
     chiffrée. L'élève doit conclure de la structure de la formule — le rayon
     est au cube — à un facteur sur le volume. C'est une inférence, et un élève
     qui calcule au hasard n'y arrive pas. « raisonner ».

     Q4 (cylindre surmonté d'une demi-sphère) : la difficulté est de lire
     l'objet comme une SOMME de deux solides connus et de traduire « surmonté »
     et « demi » en opérations. La mise en forme du problème est tout le
     travail ; les deux calculs qui suivent sont routiniers. « modéliser ».

     Q5 (récipient sphérique de diamètre 20, rempli à moitié) : trois étapes
     enchaînées — diamètre vers rayon, volume total, moitié — chacune déjà
     travaillée séparément. Rien de nouveau à décider, une chaîne à mener sans
     faute. « calculer ».

     Bilan : raisonner ×2, calculer ×2, modéliser. « représenter » n'est pas
     déclarée : aucune question ne demande de produire ou d'interpréter une
     figure, et les solides y sont décrits par des mots, pas par des dessins.
     « communiquer » ne l'est pas davantage : aucune question ne demande de
     produire une explication. */
  competences: {
    /* UNE QUESTION A ÉTÉ RÉÉCRITE dans js/data/3e/3e-volumes.js le 2026-09-13,
       parce que déclarer une compétence ne suffit pas : la question doit
       réellement la mobiliser.

       Q1 demandait le volume d'une boule de rayon 5 cm, application nue de la
       formule — et la Q2 demandait exactement la même chose sur une balle de
       tennis, à ceci près qu'elle donnait le diamètre. Deux questions pour une
       seule tâche, en ouverture d'évaluation.

       Q1 demande maintenant d'EXPLIQUER pourquoi le calcul de Léa, qui a cubé
       le diamètre, donne un résultat exactement 8 fois trop grand : produire
       un argument, non un nombre. C'est « communiquer », et l'erreur soumise
       au jugement est celle que cette fiche traite en premier. La Q2 conserve
       le calcul direct : la tâche calculatoire reste évaluée une fois, ce qui
       suffit.

       Q2 applique la formule après conversion du diamètre : « calculer ».
       Q3 et Q4 concluent d'une variation de rayon à une variation de volume,
       puis d'un solide composé à son découpage : « raisonner » et
       « modéliser ».
       Q5 demande le volume d'une demi-boule à partir d'un diamètre :
       « calculer ». */
    evaluation: ["communiquer", "calculer", "raisonner", "modéliser", "calculer"]
  }
};
