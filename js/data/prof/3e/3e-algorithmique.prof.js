/* =========================================================
   Spark Learning – js/data/prof/3e/3e-algorithmique.prof.js
   Fiche professeur du chapitre « Algorithmes et programmation » (troisième),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 3e-thales.prof.js.

   UN CHAPITRE OÙ LES ERREURS NE RESSEMBLENT PAS AUX AUTRES. Dans tous les
   autres chapitres du niveau, l'élève se trompe en appliquant mal une règle.
   Ici, il se trompe parce qu'il applique correctement une règle de
   MATHÉMATIQUES à un objet qui n'en relève pas. L'affectation x ← x + 1 est le
   cas d'école : elle est, en tant qu'équation, manifestement impossible, et
   l'élève qui la rejette raisonne juste — dans le mauvais cadre. C'est ce que
   la première erreur de cette fiche traite, et c'est la clé de tout le
   chapitre.

   Le remède général, valable pour presque toutes les erreurs ci-dessous, tient
   en un mot : le TABLEAU DE TRACE. Une colonne par variable, une ligne par
   étape. Ce n'est pas une technique parmi d'autres, c'est l'outil qui rend
   observable le déroulement dans le temps — et l'ignorance du temps est la
   racine commune de toutes les difficultés de ce chapitre. Un élève qui trace
   ne peut pas se tromper sur une affectation ; un élève qui lit ne peut pas
   faire autrement.

   ATTENTION, POINT DE VIGILANCE SUR LA BANQUE. Vérifié le 2026-09-13 sur le
   tirage réel de la graine du livre : les douze exercices tirés sont tous la
   MÊME tâche — « S ← 0 ; pour i de 1 à n ; S ← S + i ; que vaut S ? » — dans six
   décors (Python, professeur, robot, calculatrice, application, jeu vidéo).
   Seul n varie, entre 3 et 8. Aucun exercice ne comporte de condition, de
   boucle « tant que », d'échange de variables, ni d'écriture d'algorithme.
   Trois remédiations sont donc SANS RENVOI, et le disent. À noter que la
   solution imprimée passe directement par la formule de Gauss plutôt que par
   une trace, ce qui limite encore l'usage de ces exercices en remédiation.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-algorithmique"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 6 (équations et inéquations) : le lien n'est pas celui qu'on attend, et
     il vaut la peine d'être explicité. Ce chapitre n'a pas besoin des équations
     pour ses calculs — additionner des entiers suffit. Il en a besoin pour une
     raison inverse et bien plus intéressante : c'est en ayant longuement
     manipulé le signe « = » des équations, où les deux membres désignent le
     même nombre, que l'élève peut mesurer ce que l'affectation change. Le
     prérequis fournit le CONTRASTE, pas l'outil. Sans lui, « x ← x + 1 » n'est
     étrange pour personne, et l'enseignant ne peut pas s'appuyer sur la
     surprise pour installer la notion.

     Les inéquations ont leur utilité propre ici : la condition d'arrêt d'une
     boucle « tant que » ($n > 1$, $i \\leq 3$) est une inégalité, et un élève
     qui hésite sur le sens d'un symbole de comparaison ne peut pas décider si
     la boucle continue. */
  prerequis: [6],

  /* Rang conseillé (2026-09-13) : rang 13, c'est-à-dire le dernier chapitre du
     niveau. Ce n'est PAS une relégation, et la nuance mérite d'être dite parce
     que l'algorithmique est trop souvent le chapitre sacrifié de juin.

     La raison de cette place est que le chapitre gagne énormément à venir
     APRÈS : il rejoue, sous forme exécutable, des notions déjà installées
     ailleurs. Le programme de calcul est une fonction (rang 5) ; la boucle qui
     accumule une somme donne un sens neuf à la formule de Gauss ; la condition
     « si » prolonge les inéquations (rang 3). Placé en fin d'année, il
     fonctionne comme une <em>reprise</em> de l'année entière sous un autre
     angle, ce qu'aucune autre place ne permet.

     Recommandation pratique, qui découle de ce qui précède : ne pas le traiter
     après le brevet blanc, mais lui réserver un vrai créneau. Sa valeur ne
     tient pas au contenu propre — modeste — mais au réinvestissement qu'il
     autorise.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 13,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Algorithmique et programmation ».
  attendus: [
    "Décomposer un problème en sous-problèmes, et écrire un programme comme une suite finie d'instructions non ambiguës",
    "Écrire, mettre au point et exécuter un programme utilisant des variables, des boucles et des instructions conditionnelles",
    "Comprendre la notion d'affectation d'une valeur à une variable, et la distinguer de l'égalité mathématique",
    "Déterminer l'effet d'un programme sur les valeurs des variables en traçant son exécution pas à pas",
    "Utiliser une boucle bornée quand le nombre de répétitions est connu à l'avance, et une boucle non bornée sinon"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "L'algorithmique et la programmation sont au programme du cycle 4, et la " +
        "troisième en est l'année d'aboutissement : variables, affectation, boucles bornées " +
        "et non bornées, instructions conditionnelles, mise au point d'un programme. Tout " +
        "cela est exigible, y compris au brevet, où un exercice d'algorithmique figure " +
        "régulièrement.<br/><br/>" +
        "Un point déborde nettement, et il est visible dès le sous-titre du chapitre : " +
        "<strong>Python</strong>. Le langage de référence au collège est " +
        "<strong>Scratch</strong>, c'est-à-dire une programmation par blocs, et c'est " +
        "Scratch qui est utilisé dans les sujets de brevet. Python relève du " +
        "<strong>lycée</strong> — il apparaît en seconde, en SNT et en mathématiques. Les " +
        "énoncés du chapitre qui mettent en scène « Léa débute en programmation Python » " +
        "sont donc à traiter comme un décor, non comme une exigence : aucun élève de " +
        "troisième ne doit être évalué sur une syntaxe Python.<br/><br/>" +
        "Cela dit, ce débordement est sans danger tant qu'on le connaît, et il a même un " +
        "mérite. Le <strong>pseudo-code</strong> employé dans tout le chapitre " +
        "($S \\leftarrow 0$, $\\mathtt{pour}\\ i\\ \\mathtt{de}\\ 1\\ \\mathtt{à}\\ n$) est " +
        "indépendant de tout langage : il se traduit en blocs Scratch aussi bien qu'en " +
        "Python, et il est exactement ce que les sujets de brevet appellent « le programme " +
        "ci-contre ». C'est donc le bon niveau d'abstraction pour la classe. On peut " +
        "montrer la version Python à l'écran pour les élèves curieux, sans jamais la faire " +
        "écrire.<br/><br/>" +
        "Deux autres points méritent une mise au point, plus mineurs. La " +
        "<strong>formule de Gauss</strong> $\\dfrac{n(n+1)}{2}$, utilisée dans les solutions " +
        "de la banque d'exercices, n'est pas au programme du collège : elle sert ici de " +
        "raccourci de correction, mais l'élève doit pouvoir répondre en déroulant la boucle, " +
        "et c'est d'ailleurs ce qu'on veut évaluer. Ne pas l'exiger.<br/><br/>" +
        "Enfin la <strong>division entière</strong>, présente dans la quatrième question " +
        "d'évaluation ($100 \\to 50 \\to 25 \\to 12$). La notion de quotient euclidien est " +
        "bien au programme du cycle 4, mais l'énoncé doit toujours préciser explicitement " +
        "« division entière », comme c'est le cas ici : sans cette mention, la suite des " +
        "valeurs devient incalculable pour l'élève.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     TROIS SONT SANS RENVOI. La banque du chapitre ne contient qu'une tâche —
     dérouler « S ← S + i » dans une boucle bornée —, si bien qu'elle ne fait
     jamais rencontrer de condition, de boucle « tant que », ni d'échange de
     variables. Les erreurs portant sur ces structures n'ont donc aucun support
     d'entraînement, et chaque remède le dit en indiquant où trouver la
     remédiation utile.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les deux renvois ci-dessous
       ont été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Lire une affectation comme une égalité",
      eleve: "Devant $x \\leftarrow x + 1$, l'élève écrit « c'est impossible », ou « en " +
             "simplifiant, $0 = 1$ ». Sur la séquence $x \\leftarrow 3$ puis " +
             "$x \\leftarrow x + 5$, il répond que $x$ vaut $3$, parce que « $x$ a déjà été " +
             "défini ».",
      cause: "L'élève raisonne juste, mais dans le mauvais cadre — et c'est ce qui rend cette " +
             "erreur si intéressante et si tenace. Depuis la cinquième, un signe entre deux " +
             "expressions affirme qu'elles désignent le même nombre, et cette affirmation ne " +
             "dépend pas du temps : $2x + 3 = 11$ est vrai ou faux, il ne devient pas vrai.<br/><br/>" +
             "L'affectation introduit exactement ce que l'égalité exclut : la " +
             "<strong>succession</strong>. $x \\leftarrow x + 1$ n'affirme rien, elle ORDONNE " +
             "quelque chose — lire la valeur actuelle, ajouter $1$, ranger le résultat. Le " +
             "$x$ de gauche et celui de droite ne désignent pas le même instant.<br/><br/>" +
             "Le moteur principal de l'erreur est donc l'absence de la dimension " +
             "<strong>temps</strong> dans tout ce que l'élève a appris des mathématiques. Rien " +
             "dans sa scolarité ne l'a préparé à un symbole dont le sens dépende du moment où " +
             "on le lit.",
      remede: "Ne jamais chercher à convaincre par le raisonnement : on ne convaincra pas, " +
              "puisque le raisonnement de l'élève est correct. Il faut " +
              "<strong>changer de cadre</strong>, et pour cela il n'existe qu'un seul outil " +
              "efficace, le <strong>tableau de trace</strong> : une colonne par variable, une " +
              "ligne par étape. Le tableau matérialise le temps que la notation cache, et " +
              "l'erreur devient impossible à commettre — on ne peut pas écrire deux valeurs " +
              "dans la même case.<br/><br/>" +
              "Verbaliser ensuite l'instruction comme un ordre, toujours dans le même sens de " +
              "lecture, de <strong>droite à gauche</strong> : « je calcule $x + 1$ avec la " +
              "valeur que $x$ a maintenant, et je range le résultat dans $x$ ». Faire dire " +
              "cette phrase à voix haute pendant deux séances, y compris au tableau.<br/><br/>" +
              "Utiliser la <strong>flèche</strong> plutôt que le signe égal chaque fois que " +
              "c'est possible. La flèche est orientée, elle dit d'elle-même où va le résultat, " +
              "et elle ne se lit pas dans les deux sens. C'est précisément pourquoi le cours " +
              "l'emploie.<br/><br/>" +
              "Un geste de classe très efficace, et physique : donner à chaque élève une " +
              "petite boîte étiquetée $x$ et un papier portant un nombre. L'instruction " +
              "$x \\leftarrow x + 1$ se joue alors — on sort le papier, on lit, on écrit un " +
              "nouveau papier, on remplace. Les élèves constatent que l'ancienne valeur est " +
              "<strong>détruite</strong>, ce qu'aucune notation ne montre.<br/><br/>" +
              "Aucun exercice de la banque ne travaille cette erreur : tous portent sur une " +
              "boucle d'accumulation dont la solution imprimée court-circuite la trace par la " +
              "formule de Gauss. La remédiation se conduit au tableau, sur le schéma du cours " +
              "et sur des séquences de deux ou trois affectations construites en classe.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), les huit exercices numérotés
         sont tous « S ← 0 ; pour i de 1 à n ; S ← S + i », et leur solution
         imprimée répond par la formule de Gauss (« S = n(n+1)/2 ») sans jamais
         dérouler une seule affectation. Renvoyer à l'un d'eux pour une
         difficulté d'affectation serait doublement faux : l'exercice ne met pas
         l'erreur à l'épreuve, et sa correction évite précisément le geste à
         installer. Le remède dit où la remédiation doit avoir lieu. */
      exercice: null
    },
    {
      titre: "Oublier d'initialiser, ou initialiser à la mauvaise valeur",
      eleve: "Pour calculer un produit, l'élève écrit $S \\leftarrow 0$ puis " +
             "$S \\leftarrow S \\times i$ dans la boucle, et trouve $0$ quel que soit $n$. " +
             "Variante : il omet complètement la ligne d'initialisation et commence directement " +
             "par la boucle.",
      cause: "L'initialisation est la ligne qui ne fait rien de visible : elle ne calcule pas, " +
             "elle ne boucle pas, elle précède le vrai travail. Elle est donc perçue comme une " +
             "formalité recopiable, et $S \\leftarrow 0$ est recopié par habitude — parce que " +
             "c'est la valeur vue dans tous les exemples de somme.<br/><br/>" +
             "Ce qui manque est la compréhension du rôle de l'<strong>élément neutre</strong> : " +
             "on initialise à la valeur qui ne perturbe pas l'opération qu'on va répéter. $0$ " +
             "pour une addition, $1$ pour une multiplication. Cette notion n'est jamais nommée " +
             "explicitement, si bien que le choix paraît arbitraire et se mémorise au lieu de " +
             "se comprendre.<br/><br/>" +
             "L'oubli complet, lui, a une cause différente : dans un langage à blocs comme " +
             "Scratch, la variable existe avant le programme et porte souvent une valeur " +
             "résiduelle. L'élève a donc l'expérience de programmes qui marchent sans " +
             "initialisation explicite — jusqu'au jour où ils ne marchent plus.",
      remede: "Faire découvrir l'erreur plutôt que de l'annoncer : proposer volontairement un " +
              "algorithme de produit initialisé à $0$ et demander de le tracer. Le tableau se " +
              "remplit de zéros ligne après ligne, et le résultat absurde est produit par " +
              "l'élève lui-même. Aucune explication préalable n'obtient le même effet.<br/><br/>" +
              "Nommer ensuite la règle, une fois pour toutes : on initialise avec la valeur " +
              "qui <strong>ne change rien</strong> à l'opération répétée. Ajouter $0$ ne " +
              "change rien ; multiplier par $1$ ne change rien. La règle couvre tous les cas " +
              "et remplace deux mémorisations séparées.<br/><br/>" +
              "Ajouter une <strong>question de contrôle</strong> avant toute exécution : " +
              "« qu'est-ce que $S$ vaut avant le premier tour ? ». Si l'élève ne peut pas " +
              "répondre, c'est que l'initialisation manque — et le diagnostic est posé avant " +
              "d'avoir écrit une ligne.<br/><br/>" +
              "Un geste de classe rapide et parlant : faire tracer côte à côte, au tableau, la " +
              "somme de $1$ à $4$ et le produit de $1$ à $4$, avec leurs deux initialisations. " +
              "Les deux tableaux ont la même forme, la même boucle, et deux premières lignes " +
              "différentes. La comparaison rend le rôle de l'initialisation visible en une " +
              "minute.<br/><br/>" +
              "Le quiz du chapitre, dont la deuxième question porte exactement sur une boucle " +
              "de produit initialisée à $1$, fournit un support d'entraînement complémentaire " +
              "immédiat.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « Léa teste cet algorithme avec n = 4 : S ← 0 ; pour i
         de 1 à 4 ; S ← S + i ». Le renvoi est utile ici pour une raison précise
         et limitée : la ligne d'initialisation S ← 0 y est écrite, isolée, et
         c'est le bon support pour poser la question de contrôle du remède
         (« que vaut S avant le premier tour ? ») sur un cas où la réponse est
         juste. La limite, à connaître : l'exercice ne met PAS l'erreur à
         l'épreuve, puisque l'initialisation correcte est fournie, et sa
         solution passe par la formule de Gauss sans dérouler la trace. Il sert
         à ancrer le geste, pas à révéler la faute ; c'est le tracé du produit
         initialisé à 0, mené au tableau, qui la révèle. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Se tromper d'un tour sur le nombre de répétitions",
      eleve: "Pour « $\\mathtt{pour}\\ i\\ \\mathtt{de}\\ 1\\ \\mathtt{à}\\ 5$ », l'élève " +
             "compte $4$ tours (« de $1$ à $5$, il y a $4$ écarts »). Sur une boucle " +
             "« $\\mathtt{tant\\ que}\\ n > 1$ », il exécute un tour de trop et fait descendre " +
             "$n$ jusqu'à $0$, ou s'arrête un tour trop tôt à $n = 2$.",
      cause: "Sur la boucle bornée, l'erreur vient d'un transfert légitime : dans la vie " +
             "courante et en géométrie, « de $1$ à $5$ » désigne un intervalle, donc un écart " +
             "de $4$. En algorithmique, la même formule désigne une <strong>liste de " +
             "valeurs</strong>, et il y en a $5$. Ce sont les bornes incluses qui font la " +
             "différence, et rien dans la formulation ne les signale.<br/><br/>" +
             "Sur la boucle non bornée, la difficulté est autre et plus profonde : l'élève " +
             "n'a pas identifié le <strong>moment</strong> où la condition est testée. Le test " +
             "a lieu AVANT chaque tour, ce qui veut dire que la dernière valeur ayant permis " +
             "d'entrer est la dernière traitée — et que la valeur qui fait sortir n'est jamais " +
             "utilisée. Cette chronologie est invisible dans le texte du programme, où la " +
             "condition est écrite en haut mais s'exécute plusieurs fois.",
      remede: "Séparer les deux cas, car ils ne se soignent pas de la même façon.<br/><br/>" +
              "Pour la boucle <strong>bornée</strong>, faire écrire la liste des valeurs prises " +
              "par le compteur avant toute exécution : « $i$ prend $1$, $2$, $3$, $4$, $5$, " +
              "donc $5$ tours ». La question du nombre de tours disparaît, parce qu'on ne " +
              "compte plus : on énumère. C'est un geste de dix secondes, et il est infaillible.<br/><br/>" +
              "Pour la boucle <strong>non bornée</strong>, le tableau de trace doit comporter " +
              "une colonne supplémentaire, « <strong>la condition est-elle vraie ?</strong> », " +
              "remplie AVANT chaque ligne. La chronologie devient alors matérielle : on voit " +
              "la dernière ligne où la condition est vraie, puis celle où elle devient fausse " +
              "et où plus rien ne s'exécute.<br/><br/>" +
              "L'algorigramme du cours sert exactement à cela : le losange « $i \\leq 3$ ? » y " +
              "est placé AVANT le bloc, et la flèche de retour y revient. Faire suivre le " +
              "chemin avec le doigt, tour par tour, en disant à voix haute la valeur testée, " +
              "installe la chronologie mieux que n'importe quelle explication.<br/><br/>" +
              "Un contrôle utile à installer : faire toujours nommer la " +
              "<strong>valeur qui fait sortir</strong> de la boucle. Pour " +
              "« $\\mathtt{tant\\ que}\\ n > 1$ » avec division entière depuis $100$, c'est " +
              "$n = 1$. Cette valeur n'est pas traitée — et savoir la nommer suffit à éviter " +
              "le tour de trop.<br/><br/>" +
              "Aucun exercice de la banque ne comporte de boucle non bornée : tous sont des " +
              "boucles bornées de $1$ à $n$. La remédiation sur la boucle « tant que » se " +
              "conduit donc sur l'algorigramme du cours et sur des traces construites en " +
              "classe.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 7 est la même
         tâche que les autres, mais tiré avec n = 3 — le plus petit n de la
         banque. C'est ce qui le rend utile ici et c'est la seule raison de ce
         renvoi : la boucle est assez courte pour être tracée intégralement à la
         main en trois lignes, et l'élève peut VÉRIFIER que le compteur prend
         bien trois valeurs (1, 2, 3) et non deux. Sur un n de 7 ou 8, la trace
         devient fastidieuse et l'élève retombe sur la formule. La limite, à
         connaître : cet exercice ne travaille que la boucle BORNÉE, qui est la
         première moitié de l'erreur ; la boucle « tant que » n'a aucun support
         dans la banque, et le remède le dit. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Écraser une valeur dont on aura encore besoin",
      eleve: "Pour échanger les contenus de $x$ et $y$, l'élève écrit $x \\leftarrow y$ puis " +
             "$y \\leftarrow x$, et obtient deux variables contenant la même valeur. Il ne " +
             "comprend pas pourquoi, puisque « chaque ligne est juste ».",
      cause: "Chaque ligne EST juste, prise isolément, et c'est tout le problème : l'erreur ne " +
             "se situe dans aucune instruction mais dans leur <strong>ordre</strong>. La " +
             "première affectation détruit l'ancienne valeur de $x$, qui n'existe plus quand " +
             "la seconde en a besoin.<br/><br/>" +
             "La cause de fond est la même que pour la première erreur de cette fiche, poussée " +
             "un cran plus loin : une variable est perçue comme un NOM — une étiquette stable — " +
             "et non comme un CONTENANT dont le contenu est remplacé. Tant que « $x$ » désigne " +
             "une valeur plutôt qu'un emplacement, écraser n'a pas de sens, et rien ne signale " +
             "qu'une information a été perdue.<br/><br/>" +
             "Il faut noter que l'élève ne dispose d'aucun retour : le programme ne produit " +
             "pas d'erreur, il donne simplement un résultat faux. Rien ne l'alerte, ce qui " +
             "rend cette difficulté particulièrement coûteuse en autonomie.",
      remede: "Le tableau de trace règle l'affaire en trois lignes, et il faut le faire faire " +
              "avant toute explication. Avec $x = 3$ et $y = 5$ : après $x \\leftarrow y$, le " +
              "tableau porte $x = 5$ et $y = 5$. L'élève VOIT que le $3$ a disparu, et il n'a " +
              "plus besoin qu'on lui dise pourquoi la suite échoue.<br/><br/>" +
              "Poser ensuite la question qui prévient l'erreur, et en faire un réflexe : " +
              "« <strong>ai-je encore besoin de ce que je suis en train de remplacer ?</strong> ». " +
              "Si oui, il faut le mettre à l'abri avant — c'est la variable temporaire. Cette " +
              "question est le vrai contenu de l'erreur, et elle vaut bien au-delà de ce " +
              "chapitre.<br/><br/>" +
              "L'image physique des deux verres et du troisième verre vide est la plus " +
              "efficace, et il faut la jouer réellement plutôt que la décrire : on ne peut pas " +
              "échanger le contenu de deux verres pleins sans en emprunter un troisième. Les " +
              "élèves qui l'ont manipulée ne réécrivent plus l'échange à deux lignes.<br/><br/>" +
              "Pour les plus avancés, l'échange sans variable temporaire " +
              "($x \\leftarrow x + y$ puis $y \\leftarrow x - y$ puis $x \\leftarrow x - y$) " +
              "constitue une excellente ouverture — c'est d'ailleurs exactement l'algorithme de " +
              "la première question de l'évaluation. À proposer comme défi, en fin de séance, " +
              "et à faire tracer : c'est seulement dans le tableau qu'on comprend pourquoi " +
              "ça marche.<br/><br/>" +
              "Aucun exercice de la banque ne manipule deux variables : tous n'en utilisent " +
              "que deux au sens technique ($S$ et le compteur $i$), sans jamais que l'une " +
              "doive être préservée. La remédiation se conduit au tableau, sur les verres et " +
              "sur des traces d'échange construites en classe.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), les huit exercices numérotés
         manipulent uniquement l'accumulateur S et le compteur i d'une boucle
         bornée. Aucun ne demande de préserver une valeur, aucun ne comporte
         d'échange. Il existe bien un algorithme d'échange dans ce chapitre,
         mais c'est la PREMIÈRE QUESTION DE L'ÉVALUATION NOTÉE : y renvoyer
         violerait la règle éditoriale (on remédie avant d'évaluer), et le
         signaler ici évite qu'une relecture rapide croie à un oubli. Le remède
         renvoie donc au travail de classe. */
      exercice: null
    },
    {
      titre: "Dire ce que l'algorithme calcule sans expliquer comment",
      eleve: "À la question « quel est le rôle de cet algorithme ? » pour " +
             "$S \\leftarrow 1$ ; $\\mathtt{pour}\\ i\\ \\mathtt{de}\\ 1\\ \\mathtt{à}\\ n$ ; " +
             "$S \\leftarrow S \\times 2$, l'élève répond « $8$ ». Ou bien il répond « $2^n$ » " +
             "sans un mot de justification, après avoir reconnu la forme.",
      cause: "La question change de nature sans prévenir. Toutes les questions précédentes " +
             "demandaient une VALEUR ; celle-ci demande une DESCRIPTION, c'est-à-dire de dire " +
             "ce que le programme fait pour n'importe quel $n$, et non ce qu'il donne pour un " +
             "$n$ particulier. L'élève qui répond $8$ a fait le travail — il a tracé " +
             "correctement pour $n = 3$ — mais il a répondu à l'autre question.<br/><br/>" +
             "Le passage du cas particulier au cas général est le geste le plus exigeant du " +
             "chapitre, et il n'est jamais nommé comme tel. Il suppose de repérer un motif " +
             "dans une trace, puis de l'exprimer en français ou en formule.<br/><br/>" +
             "Quant à la réponse juste sans justification, elle relève du contrat implicite " +
             "de toute la scolarité : une réponse juste vaut tous les points. Or en troisième, " +
             "année du brevet, une affirmation non justifiée perd l'essentiel — et sur ce type " +
             "de question, reconnaître $2^n$ par sa forme sans savoir pourquoi ne se distingue " +
             "pas d'une réponse devinée parmi quatre propositions.",
      remede: "Rendre visible le passage du particulier au général, en imposant un " +
              "<strong>ordre de travail en deux temps</strong>. Premier temps : tracer pour " +
              "deux ou trois valeurs de $n$, ce que l'élève sait faire. Second temps : " +
              "observer ce qui se répète d'un tour à l'autre, et seulement alors formuler. " +
              "L'élève ne saute plus l'étape qu'il sautait, parce qu'elle est devenue une " +
              "consigne.<br/><br/>" +
              "Exiger ensuite une <strong>phrase de rôle</strong>, courte, construite sur un " +
              "modèle unique écrit au tableau : « à chaque tour, $S$ est multiplié par $2$ ; " +
              "après $n$ tours, $S$ a donc été multiplié $n$ fois par $2$, ce qui donne " +
              "$2^n$ ». Trois propositions : ce qui se passe à chaque tour, combien de tours, " +
              "ce qu'on obtient. C'est la structure de toutes les justifications de ce type, " +
              "et elle se réutilise telle quelle.<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : donner un algorithme et " +
              "<strong>quatre</strong> descriptions en français, dont trois fausses mais " +
              "plausibles, et demander non pas de choisir mais de JUSTIFIER l'élimination de " +
              "chacune des trois. On travaille la justification sans exiger encore la " +
              "production, ce qui rend l'exercice accessible aux élèves fragiles.<br/><br/>" +
              "Un autre geste, plus ambitieux et très formateur : donner deux algorithmes " +
              "différents qui produisent le même résultat, et demander lequel travaille le " +
              "moins. La question force à décrire le mécanisme, puisqu'on ne peut pas les " +
              "comparer sur leur seul résultat.<br/><br/>" +
              "Accepter toute formulation personnelle, mais jamais l'absence de formulation : " +
              "on évalue un raisonnement écrit, pas une reconnaissance de forme.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est
         « ton professeur d'informatique te demande de TRACER L'EXÉCUTION de ce
         programme avec n = 6 ». Le renvoi porte sur la formulation de l'énoncé,
         qui est le seul de la banque à demander explicitement le geste de
         trace plutôt que le seul résultat : c'est donc le support qui se prête
         le mieux à l'exigence de rédaction, en demandant à l'élève de rendre le
         tableau et non le nombre. La limite, à connaître et à dire : la
         solution imprimée répond par la formule de Gauss sans dérouler la
         trace, elle ne fournit donc pas le modèle de rédaction attendu — c'est
         au professeur de l'écrire au tableau, selon le modèle en trois
         propositions du remède. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     REMARQUE PRÉALABLE. Ce chapitre est structurellement pauvre en
     « représenter » et en « modéliser » : ses cinq questions donnent toutes un
     algorithme écrit et demandent ce qu'il produit. Aucune ne part d'une
     situation à traduire en programme, aucune ne fait lire ni construire un
     algorigramme. Le dire franchement vaut mieux que d'étiqueter au jugé ;
     l'évaluation gagnerait à ce qu'une question parte d'un programme de calcul
     en français, mais ce n'est pas l'état actuel du module.

     Q1 donne quatre affectations successives et demande la valeur finale de $y$.
     C'est une exécution pas à pas : on déroule, on tient à jour deux valeurs.
     « calculer ». La tentation de l'étiqueter « raisonner » parce qu'il s'agit
     d'un échange doit être écartée — la question ne demande pas d'identifier
     l'échange, seulement de dérouler.

     Q2 demande le RÔLE de l'algorithme, et non une valeur. Il faut passer du
     particulier au général : observer ce qui se répète, puis reconnaître que
     $n$ multiplications par $2$ donnent $2^n$. Les trois distracteurs ($2n$,
     $n!$, $n^2$) sont tous des réponses plausibles d'un élève qui a mal
     identifié le motif. « raisonner ».

     Q3 déroule une boucle bornée contenant une condition. Le travail est
     mécanique une fois la condition comprise : on parcourt $1$ à $5$, on ne
     retient que les pairs, on additionne. « calculer ».

     Q4 est la question la plus exigeante de l'évaluation, et la seule où la
     démarche n'est pas donnée. La boucle est non bornée, la division est
     entière, et rien ne dit comment s'y prendre : il faut décider de simuler,
     comprendre que le test précède chaque tour, repérer où s'arrêter
     ($n = 1$), et compter les passages et non les valeurs. Les distracteurs
     $5$ et $7$ sont précisément les erreurs d'un tour en plus ou en moins.
     « chercher ».

     Q5 déroule une boucle bornée qui accumule des carrés jusqu'à $n = 6$. Rien
     n'est caché, la méthode est celle du cours, le travail est arithmétique.
     « calculer ».

     TROIS « calculer » : c'est une description honnête. Dérouler une trace EST
     un calcul, même quand l'objet manipulé est un programme, et gonfler ces
     questions en « raisonner » fausserait l'agrégation du niveau. Les chapitres
     de fonctions (rangs 5 et 6) portent « représenter » et « modéliser », et
     les chapitres de géométrie portent « communiquer ». */
  competences: {
    /* Q1 RECLASSÉE en « représenter » le 2026-09-13, sans modifier son énoncé
       — et c'est une distinction qui mérite d'être expliquée, parce qu'elle
       est facile à contester.

       Q1 fait exécuter quatre affectations dont deux écrasent une variable
       ($x \leftarrow x + y$, puis $y \leftarrow x - y$). Les opérations
       arithmétiques y sont triviales : $3 + 5$ et $8 - 5$. Toute la difficulté
       est de tenir à jour l'ÉTAT des deux variables, et notamment de voir que
       la seconde ligne utilise le $x$ DÉJÀ MODIFIÉ par la première. Un élève
       qui échoue ici ne se trompe pas dans une soustraction : il se
       représente mal l'exécution.

       C'est exactement ce que le référentiel appelle « représenter » —
       construire et utiliser une représentation d'un objet, ici l'état de la
       mémoire au fil du programme. La trace d'exécution, que le cours présente
       sous forme de tableau, EST cette représentation.

       On ne reclasse pas pour autant Q3 et Q5, qui font elles aussi exécuter
       un algorithme : leur boucle accumule une somme, et l'élève y passe
       réellement son temps à calculer ($1 + 4 + 9 + ...$). L'étiquette suit ce
       que la question fait faire, pas la famille à laquelle elle appartient.

       Q2 identifie le rôle d'un algorithme à partir de son texte : « raisonner ».
       Q4 demande combien de fois une boucle tourne, sans qu'aucune méthode ne
       soit indiquée : « chercher ». */
    evaluation: ["représenter", "raisonner", "calculer", "chercher", "calculer"]
  }
};
