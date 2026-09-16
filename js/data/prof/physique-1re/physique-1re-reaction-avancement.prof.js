/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-reaction-avancement.prof.js
   Fiche professeur du chapitre « La réaction chimique : avancement et
   stœchiométrie » (première spécialité), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 5, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire — c'est,
   avec la cinématique, le chapitre le mieux fourni du niveau. UN SEUL moule,
   contrairement à tous les autres chapitres : « calcule l'avancement maximal
   x_max » à partir de deux quantités initiales et d'une équation équilibrée.
   Cinq équations reviennent en rotation :
     2 H2 + O2 -> 2 H2O        (ex. 1, 10)
     Zn + 2 H3O+ -> ...        (ex. 2, 9, 11)
     CH4 + 2 O2 -> ...         (ex. 3, 6, 12)
     N2 + 3 H2 -> 2 NH3        (ex. 4, 8)
     2 Al + 3 Cl2 -> 2 AlCl3   (ex. 5, 7)
   Fait remarquable et exploité ci-dessous : DEUX énoncés seulement mettent en
   défaut l'intuition « le plus petit n_i est limitant » — l'exercice 1
   (n(H2) = 1,0 contre n(O2) = 5,6, et c'est bien H2 qui limite, mais avec un
   rapport 1,0/2 = 0,5 contre 5,6/1 = 5,6 : l'intuition donne ici la BONNE
   réponse pour une mauvaise raison) et surtout l'exercice 12 (n(CH4) = 3,3
   contre n(O2) = 1,6 : le rapport 1,6/2 = 0,8 l'emporte sur 3,3/1 = 3,3).
   L'erreur 1 s'appuie sur ce point précis.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-reaction-avancement"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et il faut le dire, parce que c'est le premier chapitre de
     chimie du niveau : les chapitres 1 à 5 forment un bloc de MÉCANIQUE
     entièrement disjoint. Il n'existe littéralement aucun lien de contenu —
     ni une grandeur, ni une loi, ni un outil — entre le travail d'une force
     et un tableau d'avancement.

     ch. 7 (Titrage) et ch. 8 (Structure des entités chimiques) : ÉCARTÉS,
     et pour deux raisons opposées. Le chapitre 7 est l'INVERSE — c'est lui
     qui s'appuie sur celui-ci, puisqu'un titrage est une réaction totale dont
     on exploite la stœchiométrie à l'équivalence. Le chapitre 8 (Lewis) est
     sans rapport : il porte sur la structure des molécules, jamais sur leur
     transformation ; on peut l'enseigner avant ou après sans rien y changer.

     Le vrai prérequis du chapitre — la quantité de matière et la mole — est un
     chapitre de SECONDE, non déclarable ici. La `note` le dit. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 6, celui du livre.

     Le chapitre ouvre le bloc de chimie de la première, et il doit l'ouvrir :
     le chapitre 7 (titrage) réutilise directement sa stœchiométrie, et tout le
     programme de chimie de l'année s'écrit ensuite en quantités de matière.
     C'est le socle du bloc.

     Il pourrait être placé beaucoup plus tôt — rien dans le niveau ne le
     précède en dépendance, et il n'a besoin d'aucun outil mathématique nouveau.
     On ne le fait pas, parce que couper le bloc mécanique (1-5) en deux pour
     y insérer un chapitre de chimie ferait perdre à la mécanique sa continuité,
     qui est son principal atout. Le rang 6 est donc un choix de cohérence,
     non une contrainte.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : le plus léger du niveau, et c'est à
     souligner. Une division, une comparaison de deux quotients, une
     soustraction. Aucun vecteur, aucune dérivée, aucune puissance de dix, pas
     même de racine carrée. Rien dans l'outillage mathématique n'interdit de
     placer ce chapitre en septembre — la difficulté est entièrement
     conceptuelle, et elle porte sur le SENS du quotient $n_i / \text{coeff}$,
     jamais sur sa mécanique. */
  rangConseille: 6,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Établir l'équation de la réaction support de la transformation à partir de l'identification des espèces chimiques",
    "Déterminer, à partir de l'état initial et de l'équation de réaction, la composition du système dans l'état final",
    "Déterminer le réactif limitant et l'avancement maximal d'une transformation chimique"
  ],

  note: "L'équation de réaction, le tableau d'avancement, le réactif limitant et l'avancement " +
        "maximal sont au programme de spécialité de première : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Aucun prérequis de première, un prérequis de SECONDE non déclarable et " +
        "indispensable.</strong> La colonne « S'appuie sur » affichera un tiret, et c'est " +
        "exact : ce chapitre ouvre le bloc de chimie de l'année, sans aucun lien avec les cinq " +
        "chapitres de mécanique qui le précèdent. Il suppose en revanche parfaitement acquise la " +
        "<strong>quantité de matière</strong> et la <strong>mole</strong>, qui sont de " +
        "<strong>seconde</strong> : un prérequis ne pouvant viser qu'un chapitre du même niveau, " +
        "rien ne l'affichera. C'est pourtant LE prérequis dont dépend tout le chapitre — un " +
        "élève qui n'a pas de représentation de ce qu'est une mole manipule ici des nombres " +
        "sans objet. S'il subsiste un doute, une demi-heure de reprise ($n = m/M$, $n = C\\times " +
        "V$, l'ordre de grandeur du nombre d'Avogadro) est un investissement rentable " +
        "<strong>avant</strong> d'entrer dans le tableau d'avancement.<br/><br/>" +
        "<strong>Les prérequis mathématiques sont ici les plus légers de l'année.</strong> Une " +
        "division, une comparaison de deux quotients, une soustraction : aucun vecteur, aucune " +
        "dérivée, aucune racine, pas même de puissance de dix. Rien n'interdirait de placer ce " +
        "chapitre dès septembre. La difficulté est entièrement <strong>conceptuelle</strong>, et " +
        "elle tient tout entière au sens du quotient $n_i / \\text{coefficient}$, jamais à son " +
        "calcul. Le dire soulage les élèves qui se croient « mauvais en maths » : ici, ce n'est " +
        "pas le sujet.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> " +
        "Particularité du chapitre, unique dans le niveau : les quarante-deux énoncés tirés ont " +
        "<strong>un seul et même moule</strong> — calculer $x_{max}$ à partir de deux quantités " +
        "initiales et d'une équation déjà équilibrée. C'est massif et bien ciblé sur le " +
        "troisième attendu, mais cela laisse deux attendus officiels sans aucun exercice. " +
        "<strong>Équilibrer une équation</strong> (premier attendu) n'est demandé " +
        "<strong>nulle part</strong> : les cinq équations tirées arrivent toutes équilibrées, " +
        "l'élève n'a jamais à placer un coefficient. Et le " +
        "<strong>tableau d'avancement complet</strong> (deuxième attendu : « déterminer la " +
        "composition du système dans l'état final ») n'est jamais construit : on demande " +
        "$x_{max}$, jamais les quantités finales de chaque espèce — les questions 3 et 5 de " +
        "l'évaluation sont les seules du chapitre à le faire. Ces deux travaux sont à " +
        "construire ; le manuel ne les fournit pas. Bonne nouvelle en revanche : la banque " +
        "supplémentaire compte trente énoncés, de quoi différencier largement.",

  erreurs: [
    {
      titre: "Désigner comme limitant le réactif le moins abondant",
      eleve: "Pour $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$ avec $n(CH_4)_i = 3{,}3$ mol et " +
             "$n(O_2)_i = 1{,}6$ mol, l'élève annonce $x_{max} = 1{,}6$ mol « puisque " +
             "le dioxygène est le moins abondant ». Il compare les quantités initiales sans " +
             "jamais regarder les coefficients.",
      cause: "C'est l'obstacle central du chapitre, et il est parfaitement raisonnable : dans la " +
             "vie courante, celui qui manque le plus est bien celui qui limite. Ce que l'élève " +
             "n'a pas encore intégré, c'est que les réactifs ne se consomment " +
             "<strong>pas au même rythme</strong> — pour une mole de $CH_4$, il en part " +
             "<strong>deux</strong> de $O_2$. Comparer $3{,}3$ et $1{,}6$ revient à comparer des " +
             "grandeurs qui ne sont pas dans la même unité de progression. La difficulté est " +
             "d'autant plus sournoise que la méthode intuitive donne souvent la bonne réponse " +
             "par accident, quand les coefficients sont proches — ce qui l'installe durablement.",
      remede: "Donner l'image qui déplace le raisonnement, et y revenir à chaque exercice : la " +
              "<strong>recette de cuisine</strong>. Si un gâteau demande $1$ œuf et " +
              "$2$ cuillères de farine, avec $3$ œufs et $4$ cuillères, le réactif limitant " +
              "n'est pas la farine parce qu'il y en a « moins », c'est la farine parce qu'elle ne " +
              "permet que $2$ gâteaux quand les œufs en permettraient $3$. On ne compare jamais " +
              "des stocks, on compare des <strong>nombres de gâteaux possibles</strong>.<br/><br/>" +
              "Imposer alors une <strong>ligne de calcul par réactif</strong>, sans exception, " +
              "même quand le résultat paraît évident : $\\dfrac{n(CH_4)}{1} = 3{,}3$ et " +
              "$\\dfrac{n(O_2)}{2} = 0{,}80$. Deux quotients écrits l'un sous l'autre, puis la " +
              "conclusion : le plus petit gagne. Écrire la ligne même quand le coefficient vaut " +
              "$1$ est ce qui la rend disponible quand il vaut $3$.<br/><br/>" +
              "Vérifier enfin par la <strong>conséquence absurde</strong>, qui est le contrôle le " +
              "plus rapide : si $x_{max}$ valait $1{,}6$ mol, il faudrait $2 \\times 1{,}6 = " +
              "3{,}2$ mol de $O_2$ alors qu'on n'en a que $1{,}6$ — la quantité finale serait " +
              "<strong>négative</strong>, ce qui est physiquement impossible. Le cours le dit " +
              "d'ailleurs explicitement, et c'est ce qui borne la réaction.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 5) : l'exercice 12 donne n(CH4)_i = 3,3 mol,
         n(O2)_i = 1,6 mol sur CH4 + 2 O2 -> CO2 + 2 H2O, réponse
         x_max = 0,8 mol. C'est LE tirage du chapitre pour cette erreur, et il
         est presque unique : l'élève qui compare les quantités initiales
         désigne bien O2 comme limitant (il a raison sur le réactif !) mais
         annonce x_max = 1,6 au lieu de 0,8 — exactement le double. L'erreur
         n'est donc pas masquée par une bonne réponse accidentelle, comme elle
         l'est sur l'exercice 6 (n(CH4) = 2,0 contre n(O2) = 5,5, où la
         méthode naïve et la méthode correcte désignent toutes deux CH4).
         Le facteur 2 exact rend le diagnostic immédiat à la correction. */
      exercice: { type: "exercice", n: 12 }
    },
    {
      titre: "Oublier de multiplier l'avancement par le coefficient stœchiométrique",
      eleve: "Après avoir trouvé $x_{max} = 2$ mol pour $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$, " +
             "l'élève annonce $n(H_2O)_f = 2$ mol au lieu de $4$ mol, ou " +
             "$n(H_2)_f = 5 - 2 = 3$ mol au lieu de $5 - 2\\times2 = 1$ mol. Il traite " +
             "l'avancement comme s'il était directement une quantité de matière d'espèce.",
      cause: "Le mot « avancement » ne dit pas ce qu'il désigne. L'élève le lit comme " +
             "« la quantité qui a réagi », alors que $x$ compte le nombre de " +
             "<strong>fois</strong> où l'équation s'est produite. Les deux ne coïncident que " +
             "lorsque le coefficient vaut $1$ — c'est-à-dire dans les cas les plus simples, ceux " +
             "sur lesquels on démarre. L'unité entretient le malentendu : $x$ s'exprime en moles, " +
             "exactement comme les quantités de matière, alors que ce n'est pas la même chose " +
             "qu'on compte.",
      remede: "Nommer $x$ par ce qu'il compte, et le répéter : c'est le nombre de " +
              "<strong>« paquets de réaction »</strong> qui ont eu lieu. Chaque paquet consomme " +
              "et produit ce que dit l'équation — deux $H_2$, un $O_2$, deux $H_2O$. Deux " +
              "paquets consomment donc quatre $H_2$. Le coefficient est le " +
              "<strong>contenu du paquet</strong>, jamais un détail d'écriture.<br/><br/>" +
              "Imposer le <strong>tableau d'avancement complet</strong>, en colonnes, même quand " +
              "la question ne demande que $x_{max}$ : une colonne par espèce, une ligne pour " +
              "l'état initial, une pour l'état intermédiaire ($n_i - 2x$, $n_i - x$, $+2x$) et " +
              "une pour l'état final. Le tableau <strong>porte</strong> les coefficients ; sans " +
              "lui, ils s'évaporent entre deux lignes de calcul.<br/><br/>" +
              "Vérifier enfin par une règle de contrôle qui ne coûte rien : à l'état final, le " +
              "réactif limitant doit valoir exactement <strong>zéro</strong>, et aucune quantité " +
              "ne doit être négative. Si l'un des deux tests échoue, c'est un coefficient qui a " +
              "été oublié. Faire écrire ces deux vérifications sous chaque tableau.",
      /* Volontairement SANS renvoi, et vérifié : les quarante-deux énoncés
         tirés demandent TOUS et uniquement x_max. Pas un seul ne demande une
         quantité finale, ni de produit formé, ni de réactif en excès — le
         moule unique du générateur s'arrête au calcul de l'avancement maximal.
         L'erreur est pourtant la plus fréquente du chapitre en devoir, et elle
         porte sur le DEUXIÈME attendu officiel. Les questions 3 et 5 de
         l'évaluation la travaillent (n(H2O)_f = 2 x_max, puis
         n(H2)_f = 5 - 2 x_max), mais une remédiation ne renvoie jamais vers
         l'évaluation notée (règle du projet). Le travail est donc à
         construire, et c'est facile : reprendre n'importe lequel des douze
         exercices numérotés et ajouter deux questions après x_max — « que
         reste-t-il du réactif en excès ? », « combien de produit s'est-il
         formé ? ». Le tirage fournit les données, il ne fournit pas les
         questions. */
      exercice: null
    },
    {
      titre: "Croire que le réactif limitant est celui de plus grand coefficient",
      eleve: "Ayant compris que les coefficients comptent, l'élève sur-corrige : pour " +
             "$N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$, il désigne d'emblée $H_2$ comme limitant " +
             "« parce que son coefficient est $3$, donc il s'en consomme plus ». Il ne calcule " +
             "plus rien.",
      cause: "C'est une erreur de <strong>rattrapage</strong>, et elle est le signe d'un élève " +
             "qui progresse — il a renoncé à comparer les $n_i$ bruts, ce qui est déjà un " +
             "acquis. Mais il a remplacé une règle mécanique par une autre, au lieu de retenir " +
             "le <strong>rapport</strong> des deux grandeurs. Le raisonnement n'est d'ailleurs " +
             "pas absurde : à quantités initiales égales, le réactif de plus grand coefficient " +
             "EST limitant. Ce qui manque, c'est que les quantités initiales ne sont " +
             "précisément jamais égales.",
      remede: "Valoriser explicitement le progrès avant de corriger — « tu as raison, le " +
              "coefficient compte » — puis montrer qu'il compte " +
              "<strong>en rapport avec la quantité</strong>, jamais seul. Le quotient " +
              "$n_i / \\text{coefficient}$ contient les deux informations ; c'est pour cela " +
              "qu'il est la seule comparaison valide, et pas parce que ce serait la formule à " +
              "retenir.<br/><br/>" +
              "Administrer le <strong>contre-exemple</strong> qui tranche, en deux lignes, à " +
              "partir d'une même équation : avec $n(N_2) = 2{,}9$ et $n(H_2) = 5{,}3$, les " +
              "quotients valent $2{,}9$ et $1{,}77$ — c'est $H_2$ qui limite. Avec " +
              "$n(N_2) = 1{,}1$ et $n(H_2) = 6{,}6$, ils valent $1{,}1$ et $2{,}2$ — c'est " +
              "$N_2$. Même équation, même coefficient $3$, et deux réactifs limitants " +
              "différents. Aucune règle sur les seuls coefficients ne peut expliquer cela.<br/><br/>" +
              "Faire enfin CALCULER les deux quotients dans tous les cas, sans exception, y " +
              "compris quand la réponse paraît évidente. L'économie de calcul est ici le " +
              "véritable piège : deux divisions coûtent dix secondes et suppriment à elles " +
              "seules les trois erreurs de cette fiche.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne
         n(N2)_i = 2,9 mol et n(H2)_i = 3,5 mol sur N2 + 3 H2 -> 2 NH3, réponse
         x_max = 1,17 mol. Le tirage est idéal pour cette erreur et pour son
         contraire : l'élève qui conclut « H2 limite car son coefficient est
         3 » trouve ici la BONNE réponse (3,5/3 = 1,17 contre 2,9/1 = 2,9) — sa
         règle fausse marche. C'est précisément l'intérêt du renvoi : mettre
         l'exercice 4 en face de l'exercice 8, même équation, n(N2) = 2,9 et
         n(H2) = 5,3, où H2 limite encore (1,77), PUIS du supplément S8
         (n(N2) = 1,1, n(H2) = 1,4) où c'est N2 qui limite avec 0,47 contre
         1,1. La règle des coefficients s'effondre au troisième cas. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Équilibrer une équation en modifiant les formules chimiques",
      eleve: "Pour équilibrer la combustion du méthane, l'élève écrit " +
             "$CH_4 + O_4 \\rightarrow CO_2 + H_4O_2$ : il ajuste les " +
             "<strong>indices</strong> à l'intérieur des formules au lieu de placer des " +
             "coefficients devant elles. L'équation est numériquement équilibrée, et " +
             "chimiquement fausse.",
      cause: "L'élève traite l'équation comme une <strong>égalité arithmétique</strong> à " +
             "satisfaire, et tous les nombres visibles lui semblent disponibles. Rien dans " +
             "l'apparence d'une écriture chimique ne distingue le $2$ de $2\\,H_2O$ (un " +
             "coefficient, qui compte des molécules) du $2$ de $H_2O$ (un indice, qui décrit la " +
             "molécule). La difficulté est de nature <strong>sémiotique</strong> avant d'être " +
             "chimique : deux chiffres à deux places différentes ne veulent pas dire la même " +
             "chose, et personne ne le dit jamais explicitement.",
      remede: "Séparer les deux nombres par leur <strong>fonction</strong>, et le faire nommer à " +
              "voix haute : l'indice <strong>décrit</strong> la molécule (l'eau, c'est " +
              "$H_2O$, et rien d'autre ne s'appelle de l'eau) ; le coefficient " +
              "<strong>compte</strong> combien on en prend. Changer un indice, c'est changer de " +
              "substance — $H_4O_2$ n'est pas de l'eau, ce n'est rien du tout.<br/><br/>" +
              "Imposer la règle d'or en une phrase, à afficher : on n'ajuste " +
              "<strong>jamais</strong> ce qui est écrit à l'intérieur d'une formule, " +
              "<strong>seulement</strong> ce qui est écrit devant. Les formules sont des données " +
              "de l'énoncé, au même titre que les nombres ; les coefficients sont les seules " +
              "inconnues.<br/><br/>" +
              "Faire enfin <strong>compter les atomes</strong> dans un tableau à deux colonnes " +
              "(avant / après), élément par élément, jusqu'à ce que les deux colonnes " +
              "coïncident. C'est lent et c'est fait pour l'être : l'équilibrage à vue fonctionne " +
              "sur $2\\,H_2 + O_2$ et échoue dès $2\\,Al + 3\\,Cl_2$. Le tableau est ce qui " +
              "permet de traiter les cas où l'intuition ne suffit plus.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des quarante-deux
         énoncés tirés ne demande d'équilibrer quoi que ce soit. Les cinq
         équations du générateur (2 H2 + O2, Zn + 2 H3O+, CH4 + 2 O2,
         N2 + 3 H2, 2 Al + 3 Cl2) sont TOUTES fournies déjà équilibrées dans
         l'énoncé — l'élève n'a jamais un seul coefficient à placer. C'est la
         limite la plus nette du chapitre, signalée dans la `note` : le PREMIER
         attendu officiel (« établir l'équation de la réaction support ») n'est
         travaillé par aucun exercice, et l'évaluation ne le travaille pas
         davantage. Pointer un exercice d'avancement pour remédier à une erreur
         d'équilibrage serait un renvoi faux. Le travail est entièrement à
         construire — et le remède en donne la méthode : le tableau de comptage
         des atomes, sur les cinq équations du chapitre données brutes. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $2\,H_2+O_2$, $n(H_2)_i = 5$ et $n(O_2)_i = 2$ : calculer $x_{max}$.
          Ce n'est pas une substitution dans une formule : il faut former DEUX
          quotients, décider lequel retenir, et savoir pourquoi c'est le plus
          petit. Le choix de la relation précède le calcul — c'est l'erreur 1
          de cette fiche : « analyser ».
     Q2 — définition du réactif limitant, choix multiple. Restitution de la
          définition telle que le cours l'énonce, avec les distracteurs
          « quantité initiale la plus grande » et « plus petit nombre
          stœchiométrique » : « s'approprier ».
     Q3 — $x_{max} = 2$ mol donné : calculer $n(H_2O)_f$. L'avancement est
          FOURNI et la relation s'applique dans le sens direct
          ($n = 2\,x_{max}$) : exécution, donc « réaliser ».
     Q4 — que faut-il comparer pour déterminer le réactif limitant ? Question
          de méthode qui exige de juger quatre procédures concurrentes, dont
          celle (« directement les $n_i$ ») qui est l'erreur 1. Ce n'est pas
          une restitution de définition mais un choix de démarche :
          « analyser ».
     Q5 — RÉÉCRITE le 2026-09-17. L'ancien énoncé ($n(H_2)_i = 5$ et
          $x_{max} = 2$ donnés, calculer $n(H_2)_f$) était la TROISIÈME
          question du devoir portant sur le même tableau d'avancement
          ($2\,H_2 + O_2$, $x_{max} = 2$ mol) : la Q1 y calcule $x_{max}$ et la
          Q3 la quantité d'eau formée. Retrancher $2\,x_{max}$ de $n(H_2)_i$
          n'ajoutait rien au diagnostic.
          Le nouvel énoncé change de réaction ($CH_4 + 2\,O_2$, données de
          l'exercice 12 du tirage) et demande de juger Malo, qui désigne le BON
          réactif limitant pour une mauvaise raison et annonce exactement le
          DOUBLE du bon avancement. Il faut EXPLIQUER qu'on ne compare pas des
          stocks mais des quotients $n_i/\text{coefficient}$ : produire une
          explication, donc « communiquer ».
          Le calcul reste nécessaire, et il est double : former les deux
          quotients ($3{,}3$ et $0{,}80$), puis mener le contrôle par
          l'absurde ($2\times1{,}6 = 3{,}2 > 1{,}6$, quantité finale négative)
          qui écarte le distracteur 3.
          La question porte désormais sur l'erreur 1 de cette fiche —
          « désigner comme limitant le réactif le moins abondant » —
          l'obstacle central du chapitre, d'autant plus tenace que la méthode
          intuitive donne souvent la bonne réponse par accident.

     « Valider » est ABSENT de ce chapitre, et c'est un constat honnête, pas un
     oubli : aucune des cinq questions ne demande de juger une vraisemblance,
     un ordre de grandeur ou un signe. C'est cohérent avec un chapitre où les
     nombres sont de petites moles sans repère physique fort — contrairement
     aux chapitres de mécanique, où l'ordre de grandeur porte beaucoup. Un
     devoir maison gagnerait à ajouter une question du type « une quantité
     finale peut-elle être négative ? » — que la Q5 réécrite mobilise
     désormais au titre du contrôle par l'absurde, sans en faire la tâche
     principale. « Communiquer » est mobilisé une fois depuis cette réécriture,
     sur le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique. */
  competences: {
    evaluation: ["analyser", "s'approprier", "réaliser", "analyser", "communiquer"]
  }
};
