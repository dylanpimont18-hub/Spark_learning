/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-lois-continues.prof.js
   Fiche professeur du chapitre « Lois de probabilité continues »
   (terminale), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14 sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales.prof.js), dont elle reprend toutes les
   conventions sans exception.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/tle/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-lois-continues"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 9 (dénombrement) : c'est le prérequis RÉEL, et il l'est d'une façon
     particulière — il sert de REPOUSSOIR. Tout ce chapitre se construit
     contre le dénombrement : le « Découvrir » montre que compter les cas
     favorables échoue dès que la variable est continue, et la notion de
     densité est précisément ce qui prend le relais. Un élève qui n'a jamais
     éprouvé la méthode par dénombrement ne peut pas éprouver son échec, et
     la densité lui apparaît comme un formalisme arbitraire.

     On pourrait être tenté d'ajouter le chapitre sur l'intégration, puisque
     la définition officielle est $P(a \leq X \leq b) = \int_a^b f(x)\,dx$.
     Ce serait un prérequis EXCESSIF pour ce chapitre tel qu'il est écrit :
     aucune tâche de la banque, aucune question de l'évaluation et aucun
     schéma ne demande de CALCULER une intégrale. Les aires manipulées sont
     des rectangles, ou des valeurs lues dans le formulaire des sigma. Voir
     la note ci-dessous, qui prévient l'enseignant de cet arbitrage. */
  prerequis: [12],

  /* Rang conseillé (2026-09-14) : rang 3.

     Tôt dans l'année, et pour trois raisons.

     D'abord parce que le chapitre suit IMMÉDIATEMENT le dénombrement
     (rang 1), dont il est la suite logique : on y passe du discret au
     continu, et ce passage n'a de sens que si le discret vient d'être
     pratiqué. Plus l'écart est grand entre les deux chapitres, moins l'échec
     du dénombrement — sur lequel ouvre le « Découvrir » — est éprouvé comme
     un échec réel.

     Ensuite parce que le chapitre est INDÉPENDANT de toute l'analyse du
     niveau. Rien n'y demande de limite, de dérivée ni d'intégrale calculée :
     les seules aires manipulées sont des rectangles (loi uniforme) ou des
     valeurs lues dans le formulaire des sigma. Il n'a donc aucune raison
     d'attendre que l'analyse soit installée.

     Enfin parce que, ne servant de prérequis à aucun autre chapitre, il est
     librement plaçable — et qu'il vaut mieux en profiter pour le coller au
     dénombrement que pour le reléguer en fin d'année, où il serait traité
     dans l'urgence des révisions.

     RANG CORRIGÉ le 2026-09-14 : une première version portait le rang 11,
     qui entrait en collision avec la géométrie dans l'espace dans la
     progression complète du niveau. Le rang 3 est meilleur sur le fond, pour
     les raisons ci-dessus. */
  rangConseille: 3,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Probabilités ».
  attendus: [
    "Interpréter une probabilité comme une aire sous la courbe de densité d'une variable aléatoire continue",
    "Calculer une probabilité dans le cadre de la loi uniforme sur un intervalle, et en déterminer l'espérance",
    "Exploiter la symétrie de la loi normale autour de son espérance",
    "Utiliser les valeurs approchées de référence à un, deux et trois écarts-types",
    "Centrer et réduire une variable suivant une loi normale pour se ramener à la loi normale centrée réduite"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La loi uniforme, la loi normale, la notion de densité, la symétrie autour de l'espérance " +
        "et les valeurs de référence à un, deux et trois écarts-types sont tous au programme de " +
        "terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord, et c'est le plus important : ce chapitre <strong>n'utilise jamais l'intégrale " +
        "comme outil de calcul</strong>. Le programme définit pourtant la probabilité par " +
        "$P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$. Ici, toutes les aires manipulées sont soit " +
        "des rectangles (loi uniforme), soit des valeurs lues dans le formulaire des sigma. C'est " +
        "un choix cohérent — l'intégrale de la densité normale n'a pas de primitive élémentaire, " +
        "et le programme ne demande donc aucun calcul explicite — mais l'enseignant doit savoir " +
        "que le lien formel avec le chapitre d'intégration n'est pas fait, et qu'il gagnera à " +
        "l'expliciter au tableau en une phrase.<br/><br/>" +
        "Ensuite l'usage de la <strong>calculatrice</strong>. Le programme attend que l'élève sache " +
        "obtenir $P(a \\leq X \\leq b)$ pour des bornes quelconques, à l'aide des fonctions " +
        "intégrées. Or la banque et l'évaluation s'en tiennent volontairement aux bornes situées " +
        "à un nombre entier d'écarts-types, où la règle des sigma suffit. L'entraînement à la " +
        "calculatrice devra donc être conduit à part : sans lui, les élèves seront démunis devant " +
        "un sujet demandant $P(X \\leq 253)$ pour $\\mu = 250$ et $\\sigma = 3$.<br/><br/>" +
        "Enfin le <strong>théorème central limite</strong> et les intervalles de fluctuation, " +
        "mentionnés dans la définition de la loi normale (« par le théorème central limite, la " +
        "moyenne de nombreuses mesures suit approximativement une loi normale »). L'énoncé est " +
        "donné à titre culturel et n'est pas exigible sous cette forme ; on veillera à ne pas le " +
        "traiter comme un attendu.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions au plus 3) le 2026-09-14. */
  erreurs: [
    {
      titre: "Oublier de diviser par deux sur une queue",
      eleve: "Pour $X \\sim \\mathcal{N}(100\\,;\\,10^2)$, l'élève écrit " +
             "$P(X > 120) = 1 - 0{,}954 = 0{,}046$. La bonne réponse est $0{,}023$.",
      cause: "Le calcul est <strong>à moitié juste</strong>, et c'est ce qui le rend tenace : " +
             "$0{,}046$ est bien la probabilité d'être loin de la moyenne. L'élève a compris la " +
             "règle des sigma et l'a correctement appliquée ; ce qu'il a manqué, c'est que cette " +
             "part se trouve des <strong>deux</strong> côtés.<br/><br/>" +
             "L'écriture symbolique n'aide pas : $1 - 0{,}954$ ne montre aucun côté, aucune " +
             "gauche ni droite. Le passage par le complémentaire fait perdre l'image de la cloche, " +
             "et avec elle l'information de symétrie.",
      remede: "Interdire le calcul purement symbolique tant que la figure n'est pas faite. Imposer " +
              "un <strong>croquis à main levée</strong> de la cloche, avec les deux bornes et la " +
              "zone cherchée hachurée. Cela prend dix secondes, et l'erreur devient visible : la " +
              "zone hachurée est manifestement plus petite que le total des deux queues.<br/><br/>" +
              "Faire ensuite verbaliser le découpage en trois morceaux, dans cet ordre : la part " +
              "centrale ($0{,}954$), ce qui reste ($0{,}046$), et la <strong>répartition</strong> " +
              "de ce reste entre deux côtés égaux ($0{,}023$ chacun). Trois étapes, trois lignes " +
              "écrites — c'est l'étape du milieu qui saute quand on va vite.<br/><br/>" +
              "Un garde-fou d'ordre de grandeur, utile toute l'année : au-delà de $2\\sigma$ d'un " +
              "seul côté, on est autour de $2\\%$, et jamais autour de $5\\%$. Un élève qui annonce " +
              "$0{,}046$ peut s'en apercevoir seul si ce repère est installé.<br/><br/>" +
              "Le troisième schéma du cours porte cette lecture : il montre que $99{,}7\\%$ de " +
              "l'aire est dans $\\pm 3\\sigma$, et que le $0{,}3\\%$ restant se partage entre deux " +
              "queues.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 demande
         $P(X > 96)$ pour $\mathcal{N}(90;6^2)$, c'est-à-dire exactement une
         queue unilatérale à un écart-type. Le corrigé sépare les trois
         étapes et insiste sur « réparti des DEUX côtés ». Tâche créée ce
         jour : la banque ne contenait que des intervalles centrés, où
         l'erreur ne pouvait pas se produire. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Lire la densité comme une probabilité",
      eleve: "Devant la densité d'une loi uniforme sur $[0\\,;\\,0{,}5]$, dont la hauteur vaut $2$, " +
             "l'élève déclare qu'il y a une erreur : « une probabilité ne peut pas dépasser $1$ ».",
      cause: "C'est le malentendu <strong>central</strong> du chapitre, et il est parfaitement " +
             "logique : depuis la seconde, chaque nombre lu sur un graphique de probabilités EST " +
             "une probabilité. Dans un diagramme en bâtons, la hauteur d'un bâton est bien la " +
             "probabilité de la valeur correspondante.<br/><br/>" +
             "Le passage au continu change cela sans prévenir. La hauteur devient une probabilité " +
             "<strong>par unité de longueur</strong>, et c'est l'aire qui reprend le rôle. Rien " +
             "dans l'allure du dessin ne signale ce changement de statut.",
      remede: "Ne pas commencer par la loi normale, dont l'aire ne se vérifie pas à la main. " +
              "Commencer par la loi <strong>uniforme</strong>, où tout est calculable de tête : " +
              "c'est le parti pris du premier schéma du cours, « La probabilité est une aire, pas " +
              "une hauteur ».<br/><br/>" +
              "Faire calculer l'aire du rectangle hachuré, puis comparer au résultat attendu. " +
              "L'égalité se constate, elle ne se récite pas.<br/><br/>" +
              "Donner ensuite l'exemple qui <strong>force</strong> la distinction : une loi " +
              "uniforme sur $[0\\,;\\,0{,}5]$, dont la densité vaut $2$. Si la hauteur était une " +
              "probabilité, ce serait absurde ; comme c'est une densité, tout va bien, et l'aire " +
              "vaut bien $0{,}5 \\times 2 = 1$. Faire chercher par la classe une loi dont la " +
              "densité dépasse $100$ : il suffit d'un intervalle de largeur $0{,}01$.<br/><br/>" +
              "Fixer enfin la question à se poser devant toute densité : <strong>« quelle aire ? » " +
              "et jamais « quelle hauteur ? »</strong>.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 demande
         explicitement la HAUTEUR de la densité d'une loi uniforme, et le
         tirage propose des intervalles de largeur inférieure à 1 — donc des
         hauteurs supérieures à 1. Le corrigé le commente alors en toutes
         lettres : « cette hauteur dépasse 1, c'est possible parce qu'une
         densité n'est PAS une probabilité ». Tâche créée ce jour. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Refuser que $P(X = a)$ soit nul",
      eleve: "L'élève conteste : « si la probabilité est nulle, alors c'est impossible, donc le " +
             "train ne passe jamais ». Ou bien il écrit $P(X = 5) = f(5) = 0{,}1$, en confondant " +
             "la densité avec la probabilité ponctuelle.",
      cause: "L'objection est <strong>intellectuellement juste</strong> dans le cadre où il a " +
             "appris les probabilités. En discret, « probabilité nulle » et « impossible » sont " +
             "effectivement équivalents, et personne ne lui a dit que cette équivalence cessait de " +
             "valoir.<br/><br/>" +
             "Il ne commet donc pas une erreur de calcul : il applique correctement un théorème " +
             "hors de son domaine de validité. C'est un comportement de bon élève, et il faut le " +
             "traiter comme tel.",
      remede: "Prendre l'objection au sérieux et la retourner : <strong>si probabilité nulle " +
              "voulait dire impossible, aucun instant ne serait possible et le train ne passerait " +
              "jamais</strong>. Or il passe. L'implication est donc fausse, et c'est l'élève " +
              "lui-même qui vient de le démontrer.<br/><br/>" +
              "Installer ensuite l'image par le deuxième schéma du cours, « Une largeur qui " +
              "disparaît emporte l'aire avec elle » : les aires y valent $0{,}2$ puis $0{,}02$ " +
              "puis $0{,}002$, et rien n'empêche de continuer. La limite est nulle, et elle se " +
              "voit.<br/><br/>" +
              "Nommer enfin la distinction, qui mérite de l'être : en continu, on dit qu'un " +
              "événement de probabilité nulle est <strong>négligeable</strong>, et non impossible. " +
              "Le mot juste dissipe souvent le malaise mieux qu'une explication.<br/><br/>" +
              "Terminer par la conséquence pratique, qui est celle qui servira en contrôle : " +
              "puisque les points isolés ne pèsent rien, $P(X \\leq a) = P(X < a)$, et l'on peut " +
              "manipuler les inégalités strictes et larges indifféremment.",
      /* AUCUN RENVOI POSSIBLE, et c'est un résultat, pas un échec : la
         banque est à réponse NUMÉRIQUE, et la réponse à cette erreur n'est
         pas un nombre — c'est une distinction conceptuelle entre « nul » et
         « impossible ». Les sept tâches ont été relues contre le tirage réel
         (graine 0, 60 tirages) : aucune ne fait produire cette distinction.
         Renvoyer vers la tâche de densité uniforme (exercice 4), qui est
         voisine mais traite un AUTRE malentendu, aurait été un renvoi faux.
         L'activité de remédiation est à conduire au tableau, à partir du
         deuxième schéma du cours. */
      exercice: null
    },
    {
      titre: "Confondre $\\sigma$ et $\\sigma^2$ dans la notation",
      eleve: "Pour $\\mathcal{N}(100\\,;\\,25)$, l'élève prend $\\sigma = 25$ au lieu de $5$, et " +
             "place ses bornes à $50$ et $150$ au lieu de $90$ et $110$.",
      cause: "La notation $\\mathcal{N}(\\mu\\,;\\,\\sigma^2)$ affiche la <strong>variance</strong> " +
             "en second paramètre, alors que tous les calculs du chapitre utilisent l'écart-type. " +
             "C'est une incohérence réelle de la notation, pas une inattention de l'élève.<br/><br/>" +
             "Elle est aggravée par l'usage des énoncés : certains écrivent $\\mathcal{N}(100;5^2)$ " +
             "— où l'écart-type est visible — et d'autres $\\mathcal{N}(100;25)$ — où il ne l'est " +
             "pas. Les deux notations désignent la même loi, et rien ne prévient du changement.",
      remede: "Imposer une étape d'écriture avant tout calcul, systématiquement : sur la copie, " +
              "<strong>$\\mu = \\ldots$ et $\\sigma = \\ldots$</strong>, en toutes lettres, chacun " +
              "sur sa ligne. Tant que ces deux lignes ne sont pas écrites, aucune borne ne se " +
              "calcule.<br/><br/>" +
              "Faire remarquer que l'écart-type porte une <strong>unité</strong> et la variance " +
              "non : si $X$ est une masse en grammes, $\\sigma$ est en grammes et $\\sigma^2$ en " +
              "grammes carrés. Or on additionne $\\mu + 2\\sigma$, donc des grammes avec des " +
              "grammes. Une variance dans cette somme serait homogènement absurde. C'est un " +
              "contrôle que l'élève peut faire seul.<br/><br/>" +
              "Donner enfin le réflexe de plausibilité : si l'intervalle $[\\mu - 2\\sigma\\,;\\," +
              "\\mu + 2\\sigma]$ obtenu est démesuré par rapport à la situation décrite — des " +
              "masses de sachets allant de $50$ à $150$ g quand la moyenne est $100$ g — c'est " +
              "presque toujours cette confusion.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 3 demande le
         centrage-réduction $z = \frac{x - \mu}{\sigma}$ pour une loi notée
         $\mathcal{N}(50;4^2)$. L'élève qui prendrait 16 pour écart-type
         obtient un z quatre fois trop petit, et le corrigé interprète le
         résultat en « nombre d'écarts-types », ce qui rend l'anomalie
         lisible. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Appliquer la règle des sigma à une loi uniforme",
      eleve: "Sur une loi uniforme sur $[0\\,;\\,20]$, l'élève cherche $\\mu$ et $\\sigma$, puis " +
             "annonce $0{,}683$ pour un intervalle quelconque. Ou bien, devant une loi normale, il " +
             "calcule un rapport de longueurs comme pour une uniforme.",
      cause: "Les deux lois sont traitées dans le même chapitre, avec le même vocabulaire — " +
             "densité, espérance, probabilité d'un intervalle — et le formulaire les présente l'une " +
             "sous l'autre. Rien ne signale que leurs méthodes de calcul n'ont aucun rapport.<br/><br/>" +
             "S'ajoute que la règle des sigma est la plus mémorable des deux : trois nombres " +
             "frappants, qu'on retient sans effort. Elle vient donc à l'esprit en premier, y " +
             "compris quand elle n'a rien à y faire.",
      remede: "Faire porter le travail sur l'<strong>identification de la loi</strong> avant tout " +
              "calcul. Première question à poser devant chaque énoncé : « uniforme ou normale ? », " +
              "et écrire la réponse. Les indices sont nets — « uniformément réparti », « au hasard " +
              "entre » d'un côté ; « $\\mathcal{N}$ », « écart-type », « en cloche » de " +
              "l'autre.<br/><br/>" +
              "Construire ensuite avec la classe un <strong>tableau à deux colonnes</strong> : " +
              "pour l'uniforme, la densité est plate et la probabilité est un rapport de longueurs ; " +
              "pour la normale, la densité est en cloche et la probabilité se lit dans le " +
              "formulaire des sigma. Deux colonnes séparées, jamais mélangées.<br/><br/>" +
              "Insister sur ce qui distingue radicalement les deux situations : dans une loi " +
              "uniforme, <strong>aucune valeur n'est privilégiée</strong> ; dans une loi normale, " +
              "les valeurs proches de la moyenne sont bien plus fréquentes que les autres. Ce " +
              "n'est pas une différence de technique, c'est une différence de <strong>modèle</strong>, " +
              "et elle se décide en lisant la situation, pas en regardant les nombres.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 est une
         loi UNIFORME sur un intervalle, où la probabilité se calcule comme un
         rapport de longueurs — juste après l'exercice 6, qui est une loi
         NORMALE. L'alternance des deux lois dans le tirage force
         l'identification à chaque énoncé, ce qui est exactement le geste
         travaillé. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 $P(42 \leq X \leq 58)$ pour $\mathcal{N}(50;4^2)$ : reconnaissance
        d'un intervalle centré puis lecture du formulaire. C'est
        « calculer ».
     Q2 $P(X > 130)$ pour $\mathcal{N}(100;15^2)$ : le découpage en trois
        étapes, avec la division par deux. C'est « calculer ».
        CETTE QUESTION A ÉTÉ REFORMULÉE le 2026-09-14 : elle demandait
        $P(X \leq \mu)$, dont la réponse $0{,}5$ se devinait sans rien
        comprendre — c'était la seule valeur ronde de la liste.
     Q3 dire ce qu'on lit sur une densité dont la hauteur vaut $2$, et
        pourquoi ce n'est pas une probabilité. Aucun calcul à mener : l'élève
        interprète une représentation. C'est « représenter ».
        RÉÉCRITE le 2026-09-14 (c'était l'espérance d'une loi uniforme, donc
        un troisième calcul).
     Q4 identifier $\mu$ et $\sigma$ dans un texte d'atelier qui ne les nomme
        pas, choisir l'événement à calculer, puis traduire le résultat en
        nombre de sachets rejetés et en conséquence industrielle. C'est
        « modéliser ».
        RÉÉCRITE le 2026-09-14 (c'était $P(X > 90)$, qui aurait fait doublon
        avec la Q2 telle qu'elle est maintenant rédigée).
     Q5 trancher entre « probabilité nulle » et « impossible », en voyant que
        la seconde lecture rendrait la situation contradictoire. Aucun nombre
        à produire : l'élève passe d'une propriété à sa portée logique. C'est
        « raisonner ».
        RÉÉCRITE le 2026-09-14 (c'était $P(1 \leq X \leq 4)$ sur une
        uniforme, donc un quatrième calcul).

     « Chercher » et « communiquer » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni
     de juger l'énoncé produit par quelqu'un d'autre. Les deux compétences
     sont portées par d'autres chapitres du niveau, où les énoncés ont été
     écrits pour cela. */
  competences: {
    evaluation: ["calculer", "calculer", "représenter", "modéliser", "raisonner"]
  }
};
