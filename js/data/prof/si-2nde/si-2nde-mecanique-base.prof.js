/* =========================================================
   Spark Learning – js/data/prof/si-2nde/si-2nde-mecanique-base.prof.js
   Fiche professeur du chapitre « Principes mécaniques de base (forces,
   moments) » (seconde SI), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le CHAPITRE PILOTE du dossier,
   `si-2nde-analyse-fonctionnelle.prof.js`.

   RÉFÉRENTIEL SCIENCES DE L'INGÉNIEUR : analyser, modéliser, résoudre,
   expérimenter, concevoir, communiquer (programme de spécialité SI, 2019).
   `expérimenter` et `concevoir` ne seront jamais tirés par cet ouvrage — le
   corpus ne contient ni travail pratique ni tâche de conception.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 4 (ce chapitre ferme l'ouvrage de seconde).

   33 énoncés tirés, dont 12 numérotés et 21 en banque supplémentaire. Et,
   pour la première fois dans ce dossier, DEUX MOULES et non un seul —
   alternés strictement sur les douze exercices numérotés :
     - moule A, MOMENT D'UNE FORCE, sur les exercices IMPAIRS (1, 3, 5, 7, 9,
       11) : « on exerce une force $F$ perpendiculairement sur <objet>, le bras
       de levier vaut $d$, calcule le moment ». Réponse $M = F \times d$.
     - moule B, PRINCIPE DU LEVIER, sur les exercices PAIRS (2, 4, 6, 8, 10,
       12) : « une charge $F_1$ est à $d_1$ du pivot, on veut l'équilibrer par
       $F_2$ à $d_2$ de l'autre côté, calcule $F_2$ ». Réponse
       $F_2 = F_1 d_1 / d_2$.
   Valeurs relevées sur les douze numérotés :
     Ex1  A  F=188 N, d=1,5 m      -> 282,0 N·m
     Ex2  B  F1=82 N,  d1=0,5 m, d2=1,6 m -> 25,6 N
     Ex3  A  F=173 N, d=2,1 m      -> 363,3 N·m
     Ex4  B  F1=228 N, d1=0,1 m, d2=1,8 m -> 12,7 N
     Ex5  A  F=109 N, d=2,2 m      -> 239,8 N·m
     Ex6  B  F1=138 N, d1=1,0 m, d2=2,5 m -> 55,2 N
     Ex7  A  F=159 N, d=2,1 m      -> 333,9 N·m
     Ex8  B  F1=219 N, d1=0,4 m, d2=1,1 m -> 79,6 N
     Ex9  A  F=114 N, d=1,5 m      -> 171,0 N·m
     Ex10 B  F1=382 N, d1=0,3 m, d2=2,1 m -> 54,6 N
     Ex11 A  F=36 N,  d=2,0 m      -> 72,0 N·m
     Ex12 B  F1=94 N,  d1=0,8 m, d2=1,9 m -> 39,6 N

   L'ANGLE MORT DU TIRAGE, et il est large. Le cours couvre quatre choses ; le
   tirage n'en travaille que deux. Ne sont touchés par AUCUN des 33 énoncés :
     - le POIDS $P = mg$, donc tout lien entre masse et force — traité par la
       seule question 4 de l'évaluation et par la question 3 du quiz ;
     - la CONDITION D'ÉQUILIBRE $\sum \vec{F} = \vec{0}$, c'est-à-dire la
       première des deux conditions du cours — traitée par la question 3 du
       quiz et la question 2 de l'évaluation ;
     - la définition même du BRAS DE LEVIER comme distance PERPENDICULAIRE, et
       le cas de la force inclinée ($M = F L \sin\alpha$) que l'encadré
       « piège » du cours annonce pourtant — traité par la seule question 5 de
       l'évaluation ;
     - la CONVENTION DE SIGNE (+ antihoraire, - horaire), présente dans les
       définitions du cours et dans l'encadré « piège » — traitée par AUCUNE
       question, ni de quiz, ni d'évaluation.
   Tous les énoncés d'exercice précisent en effet « perpendiculairement » et
   « distance perpendiculaire au pivot », ce qui désamorce d'avance la
   difficulté que le cours signale comme la principale.

   Conséquence sur les renvois : le chapitre est le mieux doté du dossier en
   supports (deux moules, 21 suppléments), donc trois erreurs sur quatre
   reçoivent un renvoi vers un exercice numéroté. La quatrième porte sur le
   poids, qu'aucun exercice ne calcule : renvoi au quiz, qui le traite.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-2nde-mecanique-base"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-2nde`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 5 chapitres, donc les numéros vont de 1 à 5.

     AUCUN prérequis, et c'est un choix argumenté, pas un oubli.

     Ce chapitre est le seul du dossier à être entièrement AUTOPORTANT. Ses
     deux moules ne demandent qu'un produit et un quotient de nombres donnés ;
     son vocabulaire (force, moment, bras de levier, pivot, équilibre) est
     défini dans son propre cours, sans emprunt aux quatre autres chapitres.
     Il n'existe aucun composant à situer dans une chaîne, aucun signal à
     convertir, aucun code à lire.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Chaîne d'énergie et chaîne d'information) : le candidat le plus
       tentant, parce que les deux chapitres parlent de la même mécanique —
       réducteur, engrenage, courroie — et qu'un moteur qui fournit un couple
       est bien le bloc « Convertir ». Mais l'articulation MOMENT / PUISSANCE
       ($P = M \omega$) n'est enseignée ni dans l'un ni dans l'autre : les
       exercices du chapitre 2 travaillent des rendements de puissance sans
       jamais mentionner une force, et ceux d'ici travaillent des moments sans
       jamais mentionner un watt. Le lien est thématique, pas opératoire, et
       le déclarer laisserait croire à une continuité de calcul qui n'existe
       pas dans le livre. Écarté — mais c'est le candidat le plus défendable,
       et un enseignant qui a le temps gagnera à faire le pont.
     - ch. 1 (Analyse fonctionnelle) : aucun lien opératoire. Le chapitre
       pilote l'écarte symétriquement de SES prérequis en expliquant que
       l'analyse fonctionnelle ne calcule ni force ni moment. Écarté.
     - ch. 3 et 4 (capteurs-actionneurs, programmation) : aucun énoncé d'ici
       ne fait intervenir un capteur, un signal ni une ligne de code. Écartés.

     CONSÉQUENCE POUR LE TABLEAU : la colonne « S'appuie sur » de la
     progression affichera un TIRET pour ce chapitre, comme pour le
     chapitre 1. Deux chapitres sans appui sur cinq, et les deux le sont pour
     de bonnes raisons opposées : le premier parce qu'il précède toute
     technique, celui-ci parce qu'il n'en emprunte aucune. La `note` le dit,
     pour qu'un lecteur du tableau ne croie pas à une fiche inachevée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre.

     Le rang mérite un mot, parce qu'il ne découle PAS d'une dépendance : ce
     chapitre n'a aucun prérequis et pourrait, techniquement, être traité en
     premier. Trois raisons le placent quand même en fin d'année.

     D'abord la cohérence de la progression : les quatre premiers chapitres
     forment une descente continue du système vers le composant (besoin,
     structure, composants, pilotage), et interrompre cette descente par un
     chapitre de statique casserait le fil que les élèves suivent.

     Ensuite le fait que la mécanique OUVRE l'année suivante : les moments et
     l'équilibre sont le socle de la RDM et de la cinématique de première, et
     les placer en fin de seconde crée une continuité utile avec le chapitre
     qui suivra en septembre.

     Enfin, et c'est la raison la plus pratique, ce chapitre est le SEUL du
     dossier à pouvoir être déplacé sans rien casser. Un enseignant qui perd
     des semaines peut donc le décaler, l'alléger ou le traiter en projet sans
     compromettre les quatre autres — ce qui n'est vrai d'aucun des trois
     chapitres du milieu, enchaînés par leurs prérequis. La `note` le signale.

     Le livre le range aussi en chapitre 5 : les deux ordres coïncident et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte.

     RAPPEL SUR `rangConseille`, tout ou rien par dossier : tant qu'une seule
     fiche de `si-2nde` le porte, l'ouvrage REFUSE de compiler. Les cinq
     fiches du dossier le portent donc toutes, et leurs rangs forment une
     permutation complète de 1 à 5. */
  rangConseille: 5,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 5 de seconde), qui ne
     donne que des titres de chapitres — vérifié — et le programme de
     spécialité Sciences de l'ingénieur (2019).

     Formulés en VERBES D'ACTION vérifiables, à la manière du chapitre pilote,
     et strictement bornés à ce que le chapitre traite RÉELLEMENT : la force
     et ses quatre caractéristiques, le moment d'une force perpendiculaire, le
     principe du levier, et les deux conditions d'équilibre. RIEN sur la
     résolution d'un système de forces concourantes, sur le frottement, ni sur
     le calcul d'une résultante par projection : le corpus ne les aborde pas.
     Rien non plus sur la force inclinée, que seule la question 5 de
     l'évaluation effleure. */
  attendus: [
    "Caractériser une action mécanique par son point d'application, sa direction, son sens et sa norme, et distinguer la masse du poids",
    "Calculer le moment d'une force perpendiculaire par rapport à un point à partir de son bras de levier",
    "Appliquer le principe du levier pour déterminer la force d'équilibre d'un mécanisme simple, et énoncer les deux conditions de l'équilibre statique"
  ],

  note: "La force et ses quatre caractéristiques, le moment $M_O(\\vec{F}) = F \\times d$, le " +
        "principe du levier $F_1 d_1 = F_2 d_2$ et les deux conditions de l'équilibre statique : le " +
        "chapitre ferme la seconde par les outils qui ouvriront la première.<br/><br/>" +
        "<strong>Pourquoi la colonne « S'appuie sur » affiche un tiret.</strong> C'est un choix, " +
        "pas un oubli : ce chapitre est le seul du dossier à être <strong>entièrement " +
        "autoportant</strong>. Ses deux familles d'exercices ne demandent qu'un produit et un " +
        "quotient de nombres donnés, et tout son vocabulaire est défini dans son propre cours. Le " +
        "lien avec le chapitre 2 existe bien — un moteur fournit un couple, un réducteur le " +
        "transforme — mais l'articulation $P = M\\omega$ n'est enseignée <strong>nulle part dans " +
        "l'ouvrage</strong> : le déclarer en prérequis laisserait croire à une continuité de calcul " +
        "qui n'y est pas. C'est en revanche un excellent pont à faire à l'oral.<br/><br/>" +
        "<strong>Conséquence pratique, et elle est utile en fin d'année.</strong> Comme il " +
        "n'emprunte rien, ce chapitre est <strong>le seul du dossier qu'on peut déplacer sans rien " +
        "casser</strong>. Les chapitres 2, 3 et 4 sont enchaînés par leurs prérequis ; celui-ci " +
        "peut être décalé, allégé ou traité en projet si les semaines manquent. À l'inverse, un " +
        "enseignant qui veut commencer l'année par du concret peut le placer très tôt : rien ne " +
        "s'y oppose techniquement. Le rang 5 tient à la cohérence du fil (du système vers le " +
        "composant) et à la continuité avec la première, pas à une dépendance.<br/><br/>" +
        "<strong>Les dépendances que la colonne ne peut pas montrer.</strong> Un prérequis ne vise " +
        "qu'un chapitre du même niveau, or les deux appuis réels sont ailleurs. En mathématiques, " +
        "la <strong>proportionnalité et l'équation-produit</strong> : isoler $F_2$ dans " +
        "$F_1 d_1 = F_2 d_2$ est une manipulation du premier degré, et c'est là que butent les " +
        "élèves, pas sur la physique. En physique-chimie, le <strong>poids $P = mg$</strong> et la " +
        "<strong>distinction masse/poids</strong>, que le cours mobilise sans les " +
        "redémontrer.<br/><br/>" +
        "<strong>L'angle mort du livre, à connaître avant de composer un devoir.</strong> Les " +
        "33 énoncés tirés se répartissent en <strong>deux moules seulement</strong> — le moment " +
        "(exercices impairs) et le levier (exercices pairs) — et <strong>tous</strong> précisent " +
        "« perpendiculairement » et « distance perpendiculaire au pivot ». Quatre points du cours " +
        "ne sont donc travaillés par <strong>aucun exercice</strong> : le <strong>poids</strong> " +
        "$P = mg$, la condition <strong>$\\sum \\vec{F} = \\vec{0}$</strong>, le cas de la " +
        "<strong>force inclinée</strong> ($M = F L \\sin\\alpha$) et la " +
        "<strong>convention de signe</strong> ($+$ antihoraire, $-$ horaire) — cette dernière " +
        "n'apparaissant ni dans le quiz ni dans l'évaluation, alors que l'encadré « piège » du " +
        "cours la mentionne. Les exercices désamorcent d'avance la difficulté que le cours " +
        "annonce comme principale. Prévoyez donc au moins un cas de force inclinée au tableau, et " +
        "une convention de signe imposée à l'écrit dès le premier exercice à deux forces " +
        "opposées.",

  /* Les quatre erreurs fréquentes. TROIS reçoivent un renvoi vers un exercice
     numéroté — c'est le meilleur taux du dossier, et il est dû aux DEUX moules
     documentés en en-tête. La quatrième porte sur le poids, qu'aucun exercice
     ne calcule : renvoi au quiz.

     Les erreurs sont propres à la culture du chapitre : confusion force/moment,
     inversion des distances dans le levier, unités du moment, masse contre
     poids. Aucune n'est plaquée d'un autre domaine. */
  erreurs: [
    {
      titre: "Confondre la force et le moment : additionner $F$ et $d$, ou croire que la force suffit à décrire l'effet de rotation",
      eleve: "Sur une force de $36$ N à $2{,}0$ m du pivot, l'élève annonce $38$ N$\\cdot$m " +
             "($36 + 2$) ou $18$ ($36 \\div 2$). Ou, devant deux situations, il affirme que « la " +
             "force la plus grande fait forcément tourner le plus ».",
      cause: "Force et moment se ressemblent dangereusement : les deux décrivent une action " +
             "mécanique, les deux se mesurent, et l'élève n'a pas encore d'expérience de la " +
             "différence entre POUSSER et FAIRE TOURNER. Rien dans l'énoncé ne dit lequel des deux " +
             "nombres domine. Le geste d'addition, lui, est celui que l'école entraîne le plus pour " +
             "« combiner deux grandeurs », et il est ici sans signification physique — additionner " +
             "des newtons et des mètres ne produit rien.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17, graine 20260816 + 4).
         Exercice 11 (moule A, moment) : porte autour de ses gonds,
         F = 36 N, d = 2,0 m, réponse 72,0 N·m.
         POURQUOI CELUI-LÀ. C'est le seul des six exercices du moule A dont
         les valeurs rendent les trois calculs concurrents TOUS DISTINCTS ET
         TOUS SIMPLES à faire de tête : le produit donne 72, la somme 38, le
         quotient 18. Trois nombres sans rapport, calculables sans
         calculatrice, donc la confrontation se fait à l'oral en dix secondes
         et l'élève constate lui-même que le choix de l'opération n'est pas un
         détail. Sa force (36 N) est en outre la plus FAIBLE du moule A, alors
         que son moment (72 N·m) n'est pas le plus faible — ce qui casse
         l'idée que « plus de force, plus de rotation ».
         COMPARÉ AUX AUTRES CANDIDATS DU MOULE A : les exercices 1 (188 N ;
         1,5 m), 3 (173 N ; 2,1 m), 5 (109 N ; 2,2 m), 7 (159 N ; 2,1 m) et
         9 (114 N ; 1,5 m) ont tous des forces à trois chiffres, donc la somme
         F + d (par exemple 175,1 pour l'exercice 3) reste NUMÉRIQUEMENT
         PROCHE de la force elle-même et l'absurdité du calcul est moins
         visible : l'élève peut croire à un arrondi. L'exercice 9 serait par
         ailleurs un mauvais choix pour une autre raison : son produit (171,0)
         est très proche de sa force (114), ce qui brouille la lecture. */
      exercice: { type: "exercice", n: 11 },
      remede: "Faites d'abord poser les <strong>trois calculs concurrents</strong> sur " +
              "l'exercice 11, dont les nombres sont assez petits pour se faire de tête : le " +
              "produit donne $72$, la somme $38$, le quotient $18$. Puis posez la question qui " +
              "tranche sans physique : <strong>« quelle unité obtient-on en additionnant des " +
              "newtons et des mètres ? »</strong>. Aucune. L'addition n'est pas fausse d'un peu, " +
              "elle est dépourvue de sens.<br/><br/>" +
              "Installez ensuite l'expérience qui fait comprendre la différence, et qui se fait " +
              "sur la porte de la salle : <strong>pousser une porte près de la poignée, puis près " +
              "des gonds, avec la même force</strong>. La force est identique, l'effet de rotation " +
              "ne l'est pas. Ce qui a changé, c'est le bras de levier — donc le moment. Les élèves " +
              "s'en souviennent longtemps.<br/><br/>" +
              "Nommez enfin les deux grandeurs séparément, avec leurs unités : la " +
              "<strong>force</strong> se mesure en <strong>newtons</strong> et dit « avec quelle " +
              "intensité on pousse » ; le <strong>moment</strong> se mesure en " +
              "<strong>newtons-mètres</strong> et dit « quel effet de rotation on obtient ». " +
              "L'unité composée du moment <em>est</em> la formule : $F$ (N) fois $d$ (m).<br/><br/>" +
              "Pour achever de démonter l'idée que « plus de force, plus de rotation », comparez " +
              "l'exercice 11 ($36$ N sur $2{,}0$ m, soit $72$ N$\\cdot$m) et l'exercice 9 " +
              "($114$ N sur $1{,}5$ m, soit $171$ N$\\cdot$m) : la force triple, le moment ne " +
              "double même pas. Ce n'est pas la force seule qui décide."
    },
    {
      titre: "Inverser les distances dans le principe du levier, et multiplier au lieu de diviser",
      eleve: "Sur une charge de $82$ N à $0{,}5$ m que l'on veut équilibrer à $1{,}6$ m, l'élève " +
             "écrit $F_2 = \\dfrac{82 \\times 1{,}6}{0{,}5} = 262{,}4$ N au lieu de $25{,}6$ N. Ou " +
             "bien $F_2 = 82 \\times 0{,}5 \\times 1{,}6 = 65{,}6$ N.",
      cause: "La formule $F_1 d_1 = F_2 d_2$ est symétrique à l'œil, donc rien dans son écriture ne " +
             "dit quelle distance va au numérateur. Isoler $F_2$ demande une manipulation " +
             "algébrique — diviser les deux membres par $d_2$ — et c'est là, en mathématiques et " +
             "non en physique, que se joue l'erreur. L'élève sait souvent parfaitement à quoi sert " +
             "un levier ; il perd le résultat sur le passage de l'égalité à l'expression de " +
             "$F_2$.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17).
         Exercice 4 (moule B, levier) : brouette, F1 = 228 N à d1 = 0,1 m,
         d2 = 1,8 m, réponse 12,7 N. Le corrigé écrit les deux lignes :
         « F1 x d1 = F2 x d2 », puis « On isole F2 : F2 = F1 x d1 / d2 ».
         POURQUOI CELUI-LÀ. C'est le tirage où le RAPPORT DES BRAS est le plus
         grand de tout le moule B : d2/d1 = 1,8/0,1 = 18. La bonne réponse
         (12,7 N) est donc dix-huit fois plus PETITE que la charge (228 N),
         tandis que l'inversion des distances donne 4104 N, soit dix-huit fois
         plus GRANDE. Deux ordres de grandeur séparent les deux réponses : le
         contrôle de vraisemblance du remède (« la force au bout du long bras
         est la PLUS PETITE ») tranche instantanément, ce qui n'est pas le cas
         des autres tirages.
         Et le contexte aide : une brouette, c'est l'objet dont tout le monde
         sait qu'il ALLÈGE la charge. Annoncer 4104 N pour soulever 228 N est
         absurde même sans physique.
         COMPARÉ AUX AUTRES CANDIDATS DU MOULE B : l'exercice 10 (382 N à
         0,3 m, d2 = 2,1 m, rapport 7, réponse 54,6 N) est le second meilleur
         et fait un bon exercice de consolidation. Les exercices 8
         (219 N ; 0,4 m ; 1,1 m, rapport 2,75) et 12 (94 N ; 0,8 m ; 1,9 m,
         rapport 2,4) seraient de mauvais premiers supports : leur rapport de
         bras est si faible que la réponse inversée reste PLAUSIBLE — sur
         l'exercice 12, la bonne réponse est 39,6 N et l'inversée 223 N, deux
         nombres qu'un élève de seconde n'a aucune raison de trouver absurdes
         pour une pince coupante. L'exercice 6 est le PIRE choix possible :
         d1 = 1,0 m, donc la division par d1 est invisible et un élève qui
         inverse les distances obtiendrait un calcul dont il ne verrait pas
         l'erreur de structure. */
      exercice: { type: "exercice", n: 4 },
      remede: "Prenez l'exercice 4, celui de la brouette, parce que ses nombres rendent l'erreur " +
              "impossible à ignorer : la charge vaut $228$ N, le bras long est dix-huit fois le " +
              "bras court, donc la réponse juste est $12{,}7$ N — et la réponse inversée serait " +
              "$4104$ N. Demandez simplement : <strong>« est-ce qu'une brouette rend la charge " +
              "plus lourde ou plus légère ? »</strong>. L'élève rejette $4104$ N tout seul, sans " +
              "physique.<br/><br/>" +
              "Puis installez le <strong>contrôle de vraisemblance</strong> comme premier réflexe, " +
              "avant tout calcul : <strong>la force qui s'exerce au bout du bras le plus long est " +
              "toujours la plus petite</strong>. C'est tout l'intérêt d'un levier, et c'est " +
              "vérifiable d'un coup d'œil sur n'importe quel énoncé. Une réponse plus grande que " +
              "la charge, alors que $d_2 > d_1$, est fausse avant d'être vérifiée.<br/><br/>" +
              "Pour la mécanique du calcul lui-même, imposez la <strong>méthode en deux " +
              "temps</strong> que le corrigé écrit déjà : d'abord calculer le " +
              "<strong>moment de la charge</strong> ($228 \\times 0{,}1 = 22{,}8$ N$\\cdot$m), " +
              "ensuite le <strong>répartir sur le bras long</strong> " +
              "($22{,}8 \\div 1{,}8 = 12{,}7$ N). Passer par le moment intermédiaire, qui a un " +
              "sens physique, évite la manipulation algébrique où l'erreur se produit.<br/><br/>" +
              "Consolidez sur l'exercice 10 (casse-noix, rapport de bras $7$, réponse $54{,}6$ N), " +
              "puis seulement ensuite sur l'exercice 12 — dont le rapport de bras est faible " +
              "($2{,}4$) et où la réponse inversée reste plausible : c'est le bon exercice pour " +
              "vérifier que la méthode tient quand le contrôle de vraisemblance ne suffit plus."
    },
    {
      titre: "Rendre un moment en newtons, ou une force en newtons-mètres",
      eleve: "L'élève trouve $282$ et écrit « $M = 282$ N ». Ou, à l'inverse, il répond " +
             "« $F_2 = 25{,}6$ N$\\cdot$m » à une question qui demandait une force. Ou il convertit " +
             "les centimètres en mètres... après avoir calculé.",
      cause: "Les deux moules du chapitre s'enchaînent en alternance — un moment, puis une force, " +
             "puis un moment — et les deux manipulent exactement les mêmes symboles $F$ et $d$. " +
             "L'élève finit par écrire l'unité qu'il a écrite au précédent exercice. Ce n'est pas " +
             "de la négligence : c'est la conséquence directe d'un enchaînement où seule la " +
             "question change, et où rien dans le calcul ne rappelle la nature du résultat.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17).
         Exercice 1 (moule A, moment) : levier de frein à main, F = 188 N,
         d = 1,5 m, réponse 282,0 N·m.
         POURQUOI CELUI-LÀ, ET C'EST UN CHOIX DE POSITION AUTANT QUE DE
         VALEURS. C'est le PREMIER exercice du chapitre, donc celui où
         l'exigence d'unité s'installe avant que la mauvaise habitude ne soit
         prise — remédier à l'exercice 1 est préventif, pas curatif. Et il
         ouvre immédiatement sur l'exercice 2 (moule B, une FORCE en N) :
         la paire 1-2 met les deux unités en regard sur deux énoncés voisins,
         ce qui est exactement la confrontation dont l'erreur a besoin.
         Sa réponse (282,0 N·m) porte en outre un zéro décimal significatif,
         ce qui donne l'occasion d'exiger la forme complète de la réponse
         (valeur, décimale, unité).
         COMPARÉ AUX AUTRES CANDIDATS DU MOULE A : les exercices 3, 5, 7, 9 et
         11 conviendraient tout aussi bien sur le fond — l'unité est la même —
         mais aucun n'a l'avantage de la position initiale ni du voisinage
         immédiat avec un exercice de l'autre moule (l'exercice 11 est suivi de
         l'exercice 12, ce qui marcherait aussi, mais en fin de série, quand
         l'habitude est déjà installée). L'exercice 11 est donc le bon support
         de CONTRÔLE en fin de chapitre, et l'exercice 1 le bon support
         d'INSTALLATION. */
      exercice: { type: "exercice", n: 1 },
      remede: "Prenez l'exercice 1 — le tout premier du chapitre — et installez-y la règle avant " +
              "que l'habitude ne se prenne : <strong>toute réponse s'écrit valeur $+$ " +
              "unité</strong>, et l'unité s'annonce AVANT le calcul, en lisant la question. " +
              "« Calcule le moment » : la réponse sera en N$\\cdot$m. « Calcule la force » : elle " +
              "sera en N.<br/><br/>" +
              "Puis exploitez la <strong>paire 1-2</strong>, que le livre place côte à côte : " +
              "l'exercice 1 demande un <strong>moment</strong> ($282{,}0$ N$\\cdot$m), l'exercice 2 " +
              "une <strong>force</strong> ($25{,}6$ N). Mêmes symboles, mêmes gestes, deux unités " +
              "différentes. Faites-les enchaîner en exigeant l'unité écrite, et la distinction se " +
              "fixe d'elle-même.<br/><br/>" +
              "Donnez ensuite le moyen de <strong>reconstruire l'unité</strong> plutôt que de la " +
              "mémoriser, parce qu'il rend l'élève autonome : <strong>l'unité se lit dans la " +
              "formule</strong>. $M = F \\times d$ multiplie des newtons par des mètres, donc le " +
              "résultat est en N$\\cdot$m. Dans $F_2 = \\dfrac{F_1 d_1}{d_2}$, les mètres se " +
              "simplifient entre eux, donc il ne reste que des newtons. Un élève qui suit les " +
              "unités dans son calcul ne peut plus se tromper.<br/><br/>" +
              "Enfin, la vigilance qui vaut d'être dite avant l'évaluation : <strong>les " +
              "centimètres se convertissent AVANT le calcul, jamais après</strong>. Les douze " +
              "exercices numérotés donnent tous leurs distances en mètres, donc le chapitre " +
              "n'entraîne pas ce geste — mais la question 3 de l'évaluation, elle, donne $3$ cm et " +
              "$30$ cm. Faites-le pratiquer au moins une fois au tableau."
    },
    {
      titre: "Confondre la masse et le poids, ou croire qu'un objet immobile ne subit aucune force",
      eleve: "« Un objet de $8{,}5$ kg pèse $8{,}5$ N. » Ou : « la masse est en newtons, le poids en " +
             "kilogrammes ». Ou encore, sur un objet posé sur une table : « il ne bouge pas, donc " +
             "il n'y a pas de force ».",
      cause: "La langue courante est ici franchement trompeuse, et il ne faut pas le reprocher à " +
             "l'élève : on dit « je pèse $60$ kilos » alors qu'on énonce une masse, et une balance " +
             "de cuisine affiche des grammes en mesurant une force. Quant à l'objet immobile, " +
             "l'intuition est forte et ancienne : pas de mouvement, donc pas d'action. C'est " +
             "précisément ce que la première condition d'équilibre contredit — les forces sont là, " +
             "elles se compensent.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 33 énoncés tirés se partagent en deux moules (moment et levier) et
         AUCUN des deux ne fait intervenir une masse : toutes les charges sont
         données directement en newtons (« une charge de F1 = 228 N »). Le
         poids P = mg n'apparaît dans aucun énoncé d'exercice, ni la condition
         somme des forces nulle. Aucun exercice ne peut donc mettre cette
         confusion en défaut ; renvoyer vers l'un d'eux serait un renvoi faux.
         Le QUIZ, lui, traite les DEUX moitiés de l'erreur en une seule
         question, sa question 3 : « un objet de masse m = 5 kg est posé sur
         une table, le poids et la réaction normale se compensent, que vaut la
         réaction normale ? (g = 9,81 N/kg) ». La bonne réponse est 49,05 N,
         et les distractions sont exactement les deux erreurs décrites ici :
         « R_N = 5 N » (masse prise pour un poids) et « R_N = 0 N (l'objet ne
         bouge pas donc aucune force) ». La correction est explicite sur le
         second point : « l'objet ne bouge pas PARCE QUE les forces se
         compensent, pas parce qu'il n'y a pas de force ».
         C'est le seul renvoi honnête du livre pour cette erreur. La question 4
         de l'évaluation porte aussi sur le poids (8,5 kg, g = 9,81) mais on ne
         renvoie jamais vers l'évaluation notée. */
      exercice: { type: "quiz", n: 3 },
      remede: "Aucun des 33 exercices du chapitre ne fait intervenir une masse : toutes les charges " +
              "sont données directement en newtons. Passez donc par le <strong>quiz 3</strong>, " +
              "qui traite les deux moitiés de l'erreur en une seule question — ses distractions " +
              "sont précisément « $R_N = 5$ N » (la masse prise pour un poids) et « $R_N = 0$ N " +
              "car l'objet ne bouge pas ».<br/><br/>" +
              "Pour la première moitié, séparez les deux grandeurs par ce qui les distingue " +
              "vraiment, et pas seulement par leur unité : la <strong>masse</strong> (en kg) est " +
              "une <strong>quantité de matière</strong> — elle ne change pas si l'on déménage sur " +
              "la Lune ; le <strong>poids</strong> (en N) est la <strong>force</strong> avec " +
              "laquelle un astre attire cette matière — il est six fois plus faible sur la Lune. " +
              "L'exemple lunaire est ce qui rend la distinction inoubliable, parce qu'il montre " +
              "que l'une peut changer sans l'autre.<br/><br/>" +
              "Le repère numérique à retenir, qui suffit à attraper l'erreur : <strong>en newtons, " +
              "un poids vaut à peu près dix fois la masse en kilogrammes</strong> " +
              "($g \\approx 9{,}81 \\approx 10$ N/kg). Un objet de $8{,}5$ kg pèse donc environ " +
              "$85$ N, jamais $8{,}5$ N. Un facteur dix se repère sans calculatrice.<br/><br/>" +
              "Pour la seconde moitié — l'objet immobile — faites l'expérience en trois secondes, " +
              "parce qu'elle vaut mieux qu'une explication : demandez à un élève de " +
              "<strong>tenir son cartable à bout de bras sans bouger</strong>. Rien ne se déplace, " +
              "et pourtant l'effort est bien réel. La table fait le même travail, sans se " +
              "fatiguer : elle <strong>pousse vers le haut</strong> exactement autant que le poids " +
              "tire vers le bas. L'immobilité n'est pas l'absence de forces, c'est leur " +
              "<strong>compensation</strong> — et c'est le sens exact de " +
              "$\\sum \\vec{F} = \\vec{0}$."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ avec `voir-module.js`, pas supposé : `validerProf` refuse
     toute autre longueur. (Le chapitre 2 du même dossier n'en a que quatre.)

     Référentiel SI (2019). ÉTIQUETAGE HONNÊTE (règle du projet) : la
     compétence est lue sur la tâche RÉELLEMENT demandée par l'énoncé, jamais
     choisie pour équilibrer la grille.

     Q1 ($F = 120$ N à $d = 0{,}25$ m d'un boulon : moment ? $30$ N$\cdot$m)
        → résoudre : application directe de $M = F \times d$ sur deux nombres
        donnés, avec le mot « perpendiculaire » déjà dans l'énoncé. C'est le
        moule A des exercices, à l'identique.
     Q2 (quelles sont les deux conditions d'équilibre statique ?) → analyser :
        restitution d'une règle formelle, sans calcul. Rattachée à `analyser`
        comme le prévoit le commentaire de `REFERENTIELS.si` pour les
        questions de restitution, qui n'ont d'équivalent exact dans aucun
        référentiel officiel.
     Q3 (pied-de-biche, $P = 600$ N à $3$ cm, effort à $30$ cm : $60$ N)
        → modéliser : et c'est le seul de la série. Deux choses que ni
        l'énoncé ni le cours ne donnent : il faut identifier le pied-de-biche
        comme un levier — le mot « levier » n'apparaît pas dans la question —
        et convertir les centimètres en mètres AVANT de calculer, geste
        qu'aucun des 33 exercices n'entraîne (tous donnent des mètres). La
        situation doit donc être traduite en relation avant tout calcul.
     Q4 ($m = 8{,}5$ kg, $g = 9{,}81$ : poids ? $83{,}4$ N) → résoudre :
        produit de deux nombres donnés. La seule difficulté est de ne pas
        confondre masse et poids, mais l'opération elle-même est une
        exécution.
     Q5 (définition du bras de levier parmi quatre propositions) → analyser :
        caractériser une grandeur géométrique, sans calcul. Même nature que
        Q2 — et seule question de tout le chapitre à porter sur la
        perpendicularité, que les exercices désamorcent tous d'avance.

     RÉPARTITION DE CE CHAPITRE : résoudre 2, analyser 2, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont PAS mobilisés — aucune
     question ne demande de manipuler, de concevoir, ni de rédiger une
     explication. Ce n'est pas un oubli mais un constat sur les cinq énoncés. */
  competences: {
    evaluation: ['résoudre', 'analyser', 'modéliser', 'résoudre', 'analyser']
  }
};
