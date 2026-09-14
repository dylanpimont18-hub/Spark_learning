/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-suites-complements.prof.js
   Fiche professeur du chapitre « Suites — compléments » (terminale), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
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

window.SPARK_PROF["tle-suites-complements"] = {

  /* Prérequis : AUCUN chapitre du niveau.

     Comme les limites de fonctions, ce chapitre ouvre l'année. Tout ce qu'il
     suppose appartient à la PREMIÈRE — la définition d'une suite
     arithmétique ou géométrique, le terme général, la somme des premiers
     termes — et le champ `prerequis` ne référence que des chapitres du même
     niveau.

     On pourrait être tenté de déclarer les limites de fonctions (ch. 4),
     puisqu'on parle de convergence. Ce serait un prérequis FAUX au sens
     chronologique autant que logique : la limite d'une SUITE se définit
     indépendamment de celle d'une fonction, elle est plus simple (la
     variable est entière), et ce chapitre est justement celui où l'élève
     rencontre la notion pour la première fois. Le déclarer obligerait à
     traiter les fonctions d'abord, ce qui est l'inverse de la progression
     souhaitable. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 2.

     Très tôt dans l'année, et c'est délibéré pour trois raisons.

     D'abord parce que le chapitre ne dépend de rien : il se suffit à
     lui-même, et il réactive des objets de première que la classe connaît.
     C'est un bon chapitre de rentrée.

     Ensuite parce que le RAISONNEMENT PAR RÉCURRENCE, qui en est le cœur, ne
     sert pas qu'aux suites : il servira toute l'année, en analyse comme en
     arithmétique. Le placer tard reviendrait à s'en priver pendant des mois.

     Enfin parce que la notion de convergence y prend une forme simple — une
     suite converge ou ne converge pas, la variable est entière, il n'y a pas
     de limite à gauche ni à droite. L'élève qui l'a stabilisée ici aborde
     beaucoup mieux les limites de fonctions au rang 4.

     Le rang 1 est laissé à l'exponentielle, qui est traditionnellement le
     chapitre de rentrée et qui rassure davantage une classe. */
  rangConseille: 2,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Suites ».
  attendus: [
    "Démontrer une propriété par récurrence, en rédigeant l'initialisation, l'hérédité et la conclusion",
    "Étudier le sens de variation d'une suite et démontrer qu'elle est majorée ou minorée",
    "Déterminer la limite d'une suite géométrique selon la valeur de sa raison",
    "Appliquer le théorème de la limite monotone pour établir qu'une suite converge",
    "Utiliser une suite auxiliaire géométrique pour exprimer le terme général d'une suite définie par récurrence"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Le raisonnement par récurrence, les limites de suites, le théorème de la limite monotone, " +
        "les suites géométriques et la technique de la suite auxiliaire sont tous au programme de " +
        "terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord le <strong>« Découvrir »</strong>, qui s'appuie sur le polynôme d'Euler " +
        "$n^2 + n + 41$ : il produit quarante nombres premiers consécutifs avant de tomber sur " +
        "$1681 = 41^2$. C'est une entrée efficace — elle prouve qu'une vérification, même massive, " +
        "n'est pas une démonstration — mais elle suppose que la classe sache ce qu'est un nombre " +
        "premier. C'est acquis depuis le collège, et l'on n'attend aucune propriété d'arithmétique : " +
        "seulement de reconnaître une factorisation. Si la classe est fragile, on remplacera " +
        "avantageusement par une conjecture géométrique tout aussi fausse.<br/><br/>" +
        "Ensuite les <strong>théorèmes de comparaison et des gendarmes</strong> pour les suites. Ils " +
        "sont au programme, mais ce chapitre ne les traite pas : ni le cours, ni la banque, ni " +
        "l'évaluation ne les mobilisent. Ils devront faire l'objet d'un prolongement, en général au " +
        "moment où l'on traite les limites de fonctions.<br/><br/>" +
        "Enfin la <strong>récurrence dans la banque d'exercices</strong>. Le cours et l'évaluation " +
        "la travaillent — la quatrième question demande de corriger une démonstration incomplète — " +
        "mais aucune des sept tâches de la banque ne demande de RÉDIGER une récurrence complète. " +
        "C'est un choix assumé : une récurrence rédigée n'est pas une réponse numérique, et la " +
        "banque est à réponse numérique. L'entraînement à la rédaction devra donc venir d'ailleurs, " +
        "et c'est le point sur lequel les copies de baccalauréat perdent le plus de points.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions au plus 3) le 2026-09-14.

     UNE ERREUR SUR CINQ N'A PAS DE RENVOI, et c'est dit explicitement dans
     son remède : la banque est à réponse numérique, elle ne peut donc pas
     contenir de rédaction de récurrence. Un renvoi approximatif aurait été
     pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire qu'on doit démontrer l'hypothèse de récurrence",
      eleve: "Dans l'hérédité, l'élève écrit « or on ne sait pas si $u_n > 0$, donc on ne peut pas " +
             "continuer » — ou, à l'inverse, il passe dix lignes à essayer de prouver $u_n > 0$ " +
             "avant de commencer.",
      cause: "Le mot « supposons » heurte tout ce qu'on lui a appris. Depuis quatre ans, on lui " +
             "répète qu'en mathématiques on ne suppose rien et qu'on démontre tout. Voilà qu'on lui " +
             "demande d'admettre exactement ce qu'il cherche à établir : cela ressemble à un " +
             "raisonnement circulaire, et sa méfiance est intellectuellement saine.<br/><br/>" +
             "Ce qui lui manque, ce n'est pas la règle — il la récite — c'est de voir que " +
             "l'hérédité ne démontre pas $P(n)$ : elle démontre une <strong>implication</strong>, " +
             "qui est un objet différent.",
      remede: "Prendre au sérieux l'objection plutôt que de la corriger : elle mérite une réponse, " +
              "pas une consigne. Faire écrire ce que l'hérédité démontre EXACTEMENT, sous forme " +
              "d'une phrase avec « si » et « alors » : « si la propriété est vraie au rang $n$, " +
              "alors elle est vraie au rang $n+1$ ».<br/><br/>" +
              "Faire remarquer qu'une telle phrase peut être <strong>vraie</strong> alors même que " +
              "ses deux moitiés sont fausses. « S'il pleut, le sol est mouillé » reste vraie un jour " +
              "de grand soleil. On ne démontre donc rien sur la pluie en démontrant cette " +
              "phrase.<br/><br/>" +
              "Imposer ensuite une rédaction qui rend la structure visible : commencer l'hérédité " +
              "par « <strong>Soit $n$ un entier tel que $P(n)$ est vraie</strong> », plutôt que par " +
              "« supposons ». La formulation supprime à elle seule l'impression de circularité, " +
              "parce qu'elle désigne un rang particulier au lieu d'affirmer quoi que ce soit.<br/><br/>" +
              "Le schéma des dominos aide ici : l'hérédité, c'est « ce domino-là touche le suivant ». " +
              "On peut le vérifier sans qu'aucun domino ne soit jamais tombé.",
      /* AUCUN RENVOI POSSIBLE, et c'est un résultat, pas un échec : la
         banque du chapitre est à réponse NUMÉRIQUE, elle ne peut donc pas
         contenir de rédaction de récurrence. Les sept tâches ont toutes été
         relues contre le tirage réel (graine 0, 60 tirages) : aucune ne
         demande d'écrire une hérédité. Renvoyer vers une tâche voisine
         « qui parle de récurrence » aurait été un renvoi faux. */
      exercice: null
    },
    {
      titre: "Conclure sans avoir initialisé",
      eleve: "L'élève rédige une hérédité impeccable, écrit « donc la propriété est vraie pour tout " +
             "$n$ », et n'a jamais vérifié le rang de départ. Sa démonstration établirait aussi bien " +
             "que $3^n$ est multiple de $5$.",
      cause: "L'hérédité est la partie difficile : elle demande du calcul, elle prend de la place, " +
             "elle ressemble à du travail. L'initialisation tient en une ligne et se vérifie de " +
             "tête. L'élève en conclut, très naturellement, que l'une est la démonstration et que " +
             "l'autre est une formalité.<br/><br/>" +
             "Le déséquilibre est renforcé par les corrigés, où l'initialisation occupe une ligne " +
             "sur vingt. Rien ne signale qu'elle porte la moitié de la preuve.",
      remede: "Ne pas rappeler la règle : elle est connue, et la rappeler n'a jamais suffi. Montrer " +
              "plutôt ce qu'on peut « démontrer » sans initialisation, et le faire faire par la " +
              "classe.<br/><br/>" +
              "L'exemple à donner est $3^n$ multiple de $5$ : l'hérédité s'écrit en deux lignes et " +
              "elle est <strong>parfaitement correcte</strong> ($3 \\times 5k = 5 \\times 3k$). La " +
              "propriété, elle, est fausse à tous les rangs. Les élèves cherchent l'erreur dans le " +
              "calcul, ne la trouvent pas, et finissent par comprendre qu'elle n'y est pas.<br/><br/>" +
              "S'appuyer alors sur le premier schéma du cours, « La file de dominos, avec et sans le " +
              "premier geste » : les deux rangées ont le même espacement, donc la même hérédité, et " +
              "une seule tombe.<br/><br/>" +
              "Installer enfin une contrainte de forme : la copie doit porter les <strong>trois " +
              "titres</strong> — initialisation, hérédité, conclusion — écrits avant même de " +
              "commencer à calculer. Une section vide se voit ; une section oubliée, non.",
      /* AUCUN RENVOI POSSIBLE, pour la même raison que l'erreur précédente :
         vérifier une initialisation ne produit pas de réponse numérique. La
         QUATRIÈME QUESTION DE L'ÉVALUATION traite précisément cette erreur
         (l'exemple de $3^n$ y est développé), mais la règle éditoriale
         interdit de renvoyer une remédiation vers l'évaluation notée : on
         remédie AVANT d'évaluer. L'activité de remédiation est donc à
         conduire au tableau, à partir du schéma des dominos. */
      exercice: null
    },
    {
      titre: "Prendre le point fixe pour une preuve de convergence",
      eleve: "L'élève résout $\\ell = f(\\ell)$, trouve un nombre, et écrit « donc la suite converge " +
             "vers $\\ell$ ». Sur $u_{n+1} = 3u_n - 4$ avec $u_0 = 1$, il annonce ainsi une " +
             "convergence vers $2$ alors que la suite s'effondre vers $-\\infty$.",
      cause: "La méthode du point fixe est spectaculaire : trois lignes, un nombre, et l'exercice " +
             "semble terminé. L'élève l'applique partout parce qu'elle a toujours donné le bon " +
             "résultat — dans tous les exercices d'entraînement, la suite converge effectivement, " +
             "puisqu'on la choisit ainsi.<br/><br/>" +
             "Plus profondément, il n'a pas vu que le raisonnement est une <strong>implication à " +
             "sens unique</strong> : « si elle converge, alors la limite vaut $\\ell$ ». Il le lit " +
             "comme une équivalence, ce que la rédaction habituelle n'aide pas à éviter.",
      remede: "Faire calculer les premiers termes d'une suite <strong>divergente</strong> dont le " +
              "point fixe existe. $u_{n+1} = 3u_n - 4$ avec $u_0 = 1$ donne $1$, $-1$, $-7$, $-25$, " +
              "$-79$ : le point fixe vaut $2$, et la suite s'en éloigne à toute vitesse. " +
              "L'expérience dure deux minutes et vaut tous les avertissements.<br/><br/>" +
              "Faire ensuite formuler ce que le calcul prouve RÉELLEMENT : il <strong>élimine</strong> " +
              "tous les autres candidats. Si la suite converge, ce ne peut être que vers $2$. C'est " +
              "une information utile, mais conditionnelle.<br/><br/>" +
              "Imposer alors une rédaction en deux temps, dans cet ordre : d'abord établir la " +
              "convergence (monotonie et bornage, ou suite auxiliaire géométrique de raison " +
              "$|q| < 1$), ensuite seulement identifier la limite. <strong>On cherche le point fixe " +
              "après avoir prouvé la convergence, jamais à sa place.</strong><br/><br/>" +
              "Le troisième schéma du cours prolonge utilement : deux suites de même point fixe $6$ " +
              "y convergent de deux façons si différentes — escalier monotone d'un côté, spirale de " +
              "l'autre — que le point fixe ne peut visiblement pas contenir toute l'information.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 3 fait
         passer par la SUITE AUXILIAIRE $v_n = u_n - \ell$, c'est-à-dire par
         la technique qui établit vraiment la convergence au lieu de la
         supposer. Son corrigé montre que la raison de $(v_n)$ est
         $\frac{1}{4}$, donc de valeur absolue inférieure à 1 : c'est CE
         fait, et non le point fixe, qui prouve la convergence. Tâche créée
         ce jour. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Oublier que le nombre de termes vaut $n+1$",
      eleve: "Pour $S = u_0 + u_1 + \\cdots + u_{10}$, l'élève multiplie par $10$ au lieu de $11$, " +
             "et annonce $170$ au lieu de $187$.",
      cause: "L'indice du dernier terme est $10$, il est écrit dans l'énoncé, et c'est lui que l'œil " +
             "attrape. Compter les termes suppose de se souvenir qu'on a commencé à $u_0$ et non à " +
             "$u_1$ — une information qui, elle, n'est pas sous les yeux au moment du calcul.<br/><br/>" +
             "S'ajoute que les suites de première commençaient souvent à $u_1$, où le compte et " +
             "l'indice coïncident. L'élève applique une habitude qui était correcte dans son " +
             "contexte d'origine.",
      remede: "Faire compter à la main sur un cas minuscule, avant toute formule : combien de termes " +
              "de $u_0$ à $u_3$ ? On les écrit, on les compte — il y en a quatre. La formule ne sert " +
              "à rien tant que ce compte n'est pas évident.<br/><br/>" +
              "Rapprocher ensuite d'une situation que les élèves connaissent : du $1^{\\text{er}}$ " +
              "au $31$ décembre, il y a $31$ jours ; mais d'une borne kilométrique $0$ à une borne " +
              "$10$, il y a $11$ bornes et seulement $10$ kilomètres. C'est le même piège, et il a " +
              "un nom hors des mathématiques.<br/><br/>" +
              "Installer enfin une écriture qui rend le compte visible : écrire la formule sous la " +
              "forme $S = \\dfrac{(\\text{nombre de termes}) \\times (\\text{premier} + " +
              "\\text{dernier})}{2}$, en toutes lettres, plutôt que sous la forme symbolique où le " +
              "$n+1$ se recopie sans être compris.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 demande la
         somme d'une suite arithmétique de $u_0$ à $u_{12}$, et son
         indication dit explicitement « compte bien les termes : de $u_0$ à
         $u_{12}$, il y en a 13, pas 12 ». Le corrigé isole le compte sur une
         ligne propre. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Retenir « $q^n$ tend vers zéro » sans la condition",
      eleve: "L'élève affirme qu'une suite géométrique converge toujours vers $0$, y compris pour " +
             "$q = 1{,}35$ — ou, symétriquement, qu'elle diverge toujours parce que « les " +
             "géométriques explosent ».",
      cause: "La formule a été rencontrée avec sa condition, mais la condition est écrite entre " +
             "parenthèses, en plus petit, après le résultat. C'est le résultat que la mémoire " +
             "conserve.<br/><br/>" +
             "Le mot « raison » n'aide pas : il ne suggère rien de quantitatif, et surtout rien qui " +
             "invite à le comparer à $1$. Un élève peut manipuler des suites géométriques toute " +
             "l'année sans jamais avoir eu à regarder où se situe $q$ par rapport à $1$.",
      remede: "Faire calculer, à la calculatrice, les sept premiers termes de $0{,}7^n$ et de " +
              "$1{,}35^n$ côte à côte. Les deux partent de $1$ ; au rang $6$, l'une vaut $0{,}118$ " +
              "et l'autre $6{,}053$. L'écart se constate, il ne se raconte pas.<br/><br/>" +
              "Le deuxième schéma du cours, « Deux suites géométriques, deux destins », porte " +
              "exactement ces deux séries sur un même repère, aux mêmes rangs.<br/><br/>" +
              "Faire ensuite éprouver que le premier terme <strong>ne change rien</strong> : une " +
              "suite de raison $0{,}99$ partie d'un milliard finit sous $1$ ; une suite de raison " +
              "$1{,}01$ partie d'un millionième finit au-dessus d'un million. Il suffit d'attendre. " +
              "Le premier terme règle la vitesse, jamais la destination.<br/><br/>" +
              "Installer enfin le réflexe en une question unique, à poser avant tout calcul : " +
              "<strong>« $|q|$ est-il plus petit ou plus grand que $1$ ? »</strong> Insister sur la " +
              "valeur absolue, sans quoi le cas $q = -0{,}6$ sera mal traité — il converge pourtant " +
              "vers $0$, en alternant de signe.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 donne une
         suite géométrique et demande sa NATURE (convergente, divergente, ou
         oscillante) — pas la valeur d'un terme. L'élève est donc forcé de
         regarder |q|, et le tirage propose aussi bien des raisons négatives
         de module inférieur à 1 que des raisons supérieures à 1. Tâche créée
         ce jour. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 $u_5$ pour une géométrique de raison $0{,}5$ : application directe du
        terme général. C'est « calculer ».
     Q2 de « croissante » et « majorée » à « converge », sans expression et
        sans aucun nombre à produire : l'élève combine deux propriétés pour
        en obtenir une troisième, et doit en même temps voir que la limite
        n'est PAS le majorant. C'est « raisonner ».
        CETTE QUESTION A ÉTÉ RÉÉCRITE le 2026-09-14 (elle demandait la limite
        d'une géométrique avec $|q| < 1$, qui se cochait à la
        reconnaissance).
     Q3 traduire « l'organisme élimine $40\%$ de ce qu'il contient » en
        $u_{n+1} = 0{,}6\,u_n + 30$ — avec le piège du complément à $1$ —
        puis interpréter l'équilibre trouvé comme une accumulation. C'est
        « modéliser ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (c'était une somme arithmétique,
        donc un deuxième calcul).
     Q4 corriger la copie d'un camarade dont l'hérédité est juste et dont la
        conclusion est fausse, et dire précisément ce qui manque. Aucun
        nombre à produire : l'élève évalue un énoncé et en formule un autre.
        C'est « communiquer ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (l'ancienne demandait quelle étape
        manque, et se cochait en reconnaissant le mot « initialisation »).
     Q5 dire ce que le calcul du point fixe prouve et ce qu'il ne prouve pas,
        devant un cas où la suite diverge. L'élève passe d'une implication à
        sa portée logique, sans produire de nombre. C'est « raisonner ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (c'était une troisième résolution de
        $\ell = f(\ell)$, identique à la première tâche de la banque).

     « Chercher » et « représenter » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni
     de lire ou produire une représentation graphique. Les deux compétences
     sont portées par d'autres chapitres du niveau, où les énoncés ont été
     écrits pour cela. */
  competences: {
    evaluation: ["calculer", "raisonner", "modéliser", "communiquer", "raisonner"]
  }
};
