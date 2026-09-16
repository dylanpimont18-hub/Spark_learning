/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-newton.prof.js
   Fiche professeur du chapitre « Lois de Newton » (première spécialité),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la première physique-chimie (2026-09-17) : les
   conventions des dix autres fiches du niveau y sont calées.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 3, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque. Deux moules alternés :
     - moule A (principe d'inertie, $F = f$)      : exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (PFD, $a = (F-f)/m$)               : exercices PAIRS 2, 4, 6, 8, 10, 12.
   Fait remarquable et exploité ci-dessous : l'exercice 10 tire F = 100 N
   contre f = 150 N, donc une accélération NÉGATIVE ($a = -1$ m/s²). C'est le
   seul énoncé du chapitre où le signe porte l'information physique, et c'est
   sur lui que s'appuie l'erreur 3.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-newton"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     ch. 3 (Le mouvement et ses descriptions) : RETENU, et c'est le prérequis
     dur du chapitre. Le PFD s'écrit $\sum \vec{F} = m\vec{a}$ : sans le
     VECTEUR ACCÉLÉRATION, que seul le chapitre 3 construit (à partir de deux
     vecteurs vitesse encadrant un point), la deuxième loi est une formule
     qu'on récite. Un élève qui n'a pas vu la cinématique peut appliquer
     $a = (F-f)/m$ numériquement sans jamais savoir ce qu'est $a$.

     ch. 1 (Champ gravitationnel) et ch. 2 (Champ électrostatique) : ÉCARTÉS
     comme prérequis, bien qu'ils fournissent des forces. Ce chapitre-ci ne
     manipule que des forces horizontales déjà données en newtons (force
     motrice, frottement) : il n'a besoin ni de la loi de gravitation ni de la
     loi de Coulomb. Les déclarer gonflerait artificiellement la colonne
     « S'appuie sur » et ferait croire à une dépendance qui n'existe pas.

     ch. 5 (Travail et énergie) : c'est l'INVERSE — c'est lui qui s'appuie sur
     ce chapitre. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 4, celui du livre.

     Le bloc mécanique de la première s'enchaîne strictement : champs (1-2) qui
     donnent les forces, cinématique (3) qui donne l'accélération, Newton (4)
     qui relie les deux, énergie (5) qui en tire une autre lecture. Ce chapitre
     est la charnière et ne peut pas bouger : il lui faut l'accélération en
     amont, et il conditionne l'énergie en aval.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER, et c'est ce qui compte pour le rang :
     le chapitre 3 dont celui-ci dépend utilise les vecteurs et la dérivation.
     Placer Newton plus tôt dans l'année reviendrait à le placer avant la
     cinématique, donc avant l'outil mathématique — le chapitre deviendrait
     inabordable. Le livre et la progression coïncident ici. */
  rangConseille: 4,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Exploiter le principe d'inertie ou sa contraposée pour en déduire des informations sur le mouvement ou sur les forces",
    "Utiliser la deuxième loi de Newton pour en déduire le vecteur accélération ou la somme des forces",
    "Exploiter le principe des actions réciproques dans une situation mettant en jeu deux systèmes"
  ],

  note: "Les trois lois de Newton, le référentiel galiléen et l'exploitation du PFD sont au programme " +
        "de spécialité de première : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Un prérequis de PREMIÈRE, déclaré, et un de SECONDE, non déclarable.</strong> Le " +
        "chapitre s'appuie sur le chapitre 3 (« Le mouvement et ses descriptions »), qui donne le " +
        "vecteur accélération — cela, la colonne « S'appuie sur » le montre. Il suppose en revanche " +
        "acquis <strong>« Modélisation d'une action mécanique »</strong> et " +
        "<strong>« Principe d'inertie »</strong>, qui sont des chapitres de " +
        "<strong>seconde</strong> : un prérequis ne pouvant viser qu'un chapitre du même niveau, " +
        "rien ne l'affichera. Si le bilan des forces n'est pas solide, le reprendre " +
        "<strong>avant</strong> : ce chapitre ne refait pas l'inventaire des forces, il l'utilise.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt-sept énoncés tirés alternent deux gestes seulement : trouver $F$ à vitesse constante " +
        "(principe d'inertie) et calculer $a = (F-f)/m$ (PFD) — tous en une dimension, sur un axe " +
        "horizontal, avec les forces verticales déclarées compensées. La <strong>troisième loi</strong> " +
        "n'apparaît dans aucun exercice, alors qu'elle est le troisième attendu officiel : elle n'est " +
        "évaluée que par la question 4 de l'évaluation. Prévoir un travail spécifique (la paire " +
        "action-réaction sur un exemple de collision ou de propulsion), que le manuel ne fournit " +
        "pas.<br/><br/>" +
        "Aucune projection vectorielle n'est demandée non plus : le PFD est utilisé " +
        "<strong>déjà projeté</strong> sur l'axe du mouvement. C'est un choix cohérent avec le " +
        "niveau, mais il faut le savoir avant de composer un devoir — les élèves n'auront jamais " +
        "rencontré, dans les exercices du livre, une force oblique à décomposer.",

  erreurs: [
    {
      titre: "Croire qu'un mouvement exige une force motrice",
      eleve: "Devant un wagonnet qui roule à vitesse constante, l'élève affirme qu'« il avance, donc " +
             "il y a une force qui le pousse, donc la résultante n'est pas nulle ». Il refuse " +
             "d'appliquer le principe d'inertie à un objet qui bouge, et le réserve aux objets " +
             "immobiles.",
      cause: "Conception aristotélicienne spontanée : le mouvement est perçu comme un état qui se " +
             "consomme et qu'il faut entretenir, alors que la mécanique newtonienne en fait un état " +
             "qui se conserve. L'expérience quotidienne la renforce sans cesse — on cesse de pédaler, " +
             "le vélo s'arrête — parce que les frottements y sont toujours présents et jamais " +
             "comptés. C'est l'obstacle le plus résistant de la mécanique ; il survit à la seconde " +
             "et souvent au baccalauréat.",
      remede: "Ne pas nier l'expérience de l'élève, l'<strong>expliquer</strong> : le vélo s'arrête " +
              "parce qu'une force de frottement agit, pas parce que le mouvement s'épuiserait de " +
              "lui-même. Sur un rail à coussin d'air ou sur la glace, où le frottement devient " +
              "négligeable, l'objet ne s'arrête plus. Ce n'est donc pas le mouvement qui a besoin " +
              "d'une cause, c'est son <strong>changement</strong>.<br/><br/>" +
              "Reformuler ensuite le principe d'inertie dans le seul sens qui déloge la conception : " +
              "une force ne produit pas une vitesse, elle produit une <strong>variation</strong> de " +
              "vitesse. L'équation du cours le dit littéralement — $\\sum \\vec{F} = m\\vec{a}$ " +
              "relie les forces à l'<strong>accélération</strong>, jamais à la vitesse. Si $\\vec{a} " +
              "= \\vec{0}$, la vitesse est constante, quelle que soit sa valeur : $0$ m/s et " +
              "$100$ m/s relèvent du même cas.<br/><br/>" +
              "Faire systématiquement énoncer, avant tout calcul : « la vitesse est-elle " +
              "<strong>constante</strong> ou <strong>variable</strong> ? » — et non « l'objet " +
              "bouge-t-il ? ». C'est la seule question qui oriente vers la bonne loi, et elle " +
              "remplace avantageusement le réflexe visuel.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 3) : l'exercice 1 est une remorque tractée qui
         « se déplace à vitesse constante » avec f = 120 N, et demande F. La
         réponse est F = 120 N : les forces se compensent alors même que le
         système AVANCE. C'est exactement la situation que l'erreur refuse
         d'admettre, et le tirage la rend imparable — un élève qui croit qu'un
         mouvement exige une force motrice supérieure au frottement ne peut
         pas produire 120. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre la résultante des forces avec une force du bilan",
      eleve: "Pour un chariot soumis à $F = 300$ N et $f = 200$ N avec $m = 40$ kg, l'élève écrit " +
             "$a = F/m = 300/40 = 7{,}5$ m/s² : il applique le PFD à la force motrice seule, en " +
             "oubliant de retrancher le frottement.",
      cause: "La lettre $F$ désigne dans l'énoncé une force <strong>particulière</strong>, et dans " +
             "la loi $\\sum \\vec{F} = m\\vec{a}$ la <strong>somme</strong> de toutes les forces. " +
             "L'élève lit la même lettre et applique la même formule. Le symbole $\\sum$, " +
             "typographiquement discret, ne suffit pas à signaler qu'il désigne un objet d'une " +
             "autre nature — d'autant qu'en classe on dit « F égale m a » à voix haute, ce qui " +
             "efface complètement la sommation.",
      remede: "Imposer une <strong>notation qui distingue</strong> les deux objets, et s'y tenir : " +
              "les forces du bilan s'appellent $\\vec{F}_{moteur}$, $\\vec{f}$, $\\vec{P}$, " +
              "$\\vec{R}$ ; leur somme s'appelle $\\vec{F}_{r}$ (résultante) et jamais $F$ tout " +
              "court. Dire « la résultante égale $m\\,a$ », jamais « F égale m a ».<br/><br/>" +
              "Faire écrire <strong>trois lignes séparées</strong>, toujours dans cet ordre : " +
              "(1) le bilan des forces, (2) le calcul de la résultante sur l'axe du mouvement, " +
              "(3) seulement ensuite le PFD. La ligne 2 est celle qu'on saute, et c'est celle qui " +
              "porte l'erreur ; la rendre obligatoire suffit à la faire disparaître.<br/><br/>" +
              "Vérifier enfin par un cas limite qui parle : si $F = f$, la résultante est nulle et " +
              "l'accélération aussi — le système garde sa vitesse. Un élève qui a écrit $a = F/m$ " +
              "trouverait au contraire une accélération non nulle pour un objet à vitesse " +
              "constante, ce qui contredit les exercices impairs qu'il vient de traiter.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         m = 40 kg, F = 300 N, f = 200 N, réponse a = 2,5 m/s². Le tirage est
         idéal pour cette erreur, et c'est pourquoi il est préféré aux cinq
         autres exercices du même moule : l'élève qui oublie le frottement
         trouve 300/40 = 7,5, un nombre plausible et distinct de la bonne
         réponse d'un facteur 3 — le diagnostic est immédiat à la correction.
         Sur l'exercice 2 (F = 250, f = 100, m = 80), l'erreur donnerait 3,125
         contre 1,88 : moins lisible. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Refuser ou effacer une accélération négative",
      eleve: "L'exercice donne $F = 100$ N contre $f = 150$ N. L'élève calcule " +
             "$a = (100-150)/50 = -1$ m/s², puis barre le signe et répond $1$ m/s², « parce qu'une " +
             "accélération ne peut pas être négative ». D'autres inversent la soustraction pour " +
             "obtenir un résultat positif.",
      cause: "Double malentendu, l'un sur le vocabulaire et l'autre sur l'algèbre. Dans la langue " +
             "courante, « accélérer » signifie aller plus vite : une accélération négative semble " +
             "donc contradictoire. Et l'habitude scolaire veut qu'un résultat négatif signale une " +
             "erreur de calcul — ce qui est vrai pour une longueur ou une masse, et faux pour toute " +
             "grandeur <strong>algébrique</strong> projetée sur un axe. C'est une erreur de SIGNE, " +
             "typique du lycée : elle n'existait pas au collège, où les grandeurs étaient toutes " +
             "positives.",
      remede: "Rappeler que $a$ est ici la <strong>composante</strong> du vecteur accélération sur " +
              "l'axe choisi, et qu'une composante porte un signe qui indique un " +
              "<strong>sens</strong>, pas une anomalie. Le signe est une information physique : " +
              "$a < 0$ avec une vitesse positive signifie que le système " +
              "<strong>ralentit</strong>. Effacer le signe, c'est effacer le résultat.<br/><br/>" +
              "Faire nommer l'axe <strong>avant</strong> le calcul (« axe orienté dans le sens du " +
              "mouvement »), puis relire le signe obtenu à la lumière de ce choix. Tant que l'axe " +
              "reste implicite, le signe ne peut pas être interprété, et l'élève a raison de s'en " +
              "méfier.<br/><br/>" +
              "Donner enfin la lecture physique complète, qui rend le résultat évident : le " +
              "frottement l'emporte sur la force motrice, donc le système décélère. On peut même " +
              "prolonger — à ce rythme, un wagonnet lancé à $5$ m/s s'arrête en $5$ secondes. Un " +
              "nombre négatif qui raconte quelque chose n'est plus un nombre suspect.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 10 est le SEUL
         des vingt-sept où la résultante est négative — m = 50 kg, F = 100 N,
         f = 150 N, réponse a = -1 m/s². Le renvoi est donc contraint : aucun
         autre énoncé du chapitre ne permet de travailler cette erreur, et sa
         valeur ronde (-1) en fait un excellent support de discussion. À
         signaler à l'enseignant : si cet exercice n'est pas donné, l'erreur ne
         sera jamais rencontrée dans le livre. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Croire que le plus lourd exerce la force la plus grande",
      eleve: "Dans une collision entre un camion et une voiture, l'élève affirme que « le camion " +
             "exerce une force plus grande, puisqu'il est plus lourd ». Ou, pour deux patineurs qui " +
             "se repoussent, que le plus léger subit une force plus forte.",
      cause: "L'élève confond la <strong>force</strong> et ses <strong>effets</strong>. Il observe, " +
             "à juste titre, que la voiture est détruite et pas le camion, et il en déduit une " +
             "inégalité des forces. Le raisonnement est bon ; c'est la prémisse qui manque — les " +
             "deux forces sont égales, mais appliquées à des masses très différentes, elles " +
             "produisent des accélérations très différentes, puisque $a = F/m$. La troisième loi " +
             "heurte ici une intuition solide, et l'affirmer sans traiter l'objection ne la fait " +
             "pas céder.",
      remede: "Traiter l'objection de front plutôt que de l'écarter : « tu as raison, les dégâts ne " +
              "sont pas les mêmes — et pourtant les forces le sont ». Puis résoudre la tension avec " +
              "le PFD, qui est déjà connu : à force égale, $a = F/m$ donne une accélération " +
              "<strong>vingt fois</strong> plus grande pour une masse vingt fois plus petite. Ce " +
              "sont les accélérations qui diffèrent, pas les forces.<br/><br/>" +
              "Insister sur ce que la troisième loi ne dit <strong>pas</strong> : elle ne dit pas " +
              "que les effets sont identiques, ni que rien ne se passe. Les deux forces d'une paire " +
              "s'exercent sur <strong>deux systèmes différents</strong> — elles ne se compensent " +
              "donc jamais entre elles, et c'est l'erreur jumelle à surveiller (« action et réaction " +
              "s'annulent, donc rien ne bouge »).<br/><br/>" +
              "Faire nommer les deux systèmes à voix haute pour chaque paire : « la force du camion " +
              "<strong>sur</strong> la voiture » et « la force de la voiture <strong>sur</strong> le " +
              "camion ». La préposition <em>sur</em> porte toute la loi : dès qu'on la prononce, on " +
              "voit que les deux forces ne s'appliquent pas au même objet.",
      /* Volontairement SANS renvoi, et vérifié : aucun des vingt-sept énoncés
         tirés ne met en jeu DEUX systèmes en interaction. Les deux moules du
         générateur (inertie et PFD) portent sur un système unique soumis à des
         forces données, et la troisième loi n'y apparaît jamais — c'est la
         limite signalée dans la `note` ci-dessus. Pointer un exercice de PFD
         pour remédier à une erreur d'actions réciproques serait un renvoi faux.
         La question 4 de l'évaluation la travaille, mais une remédiation ne
         renvoie jamais vers l'évaluation notée (règle du projet) : le travail
         est donc à construire, et le remède dit comment. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — MRU dans un référentiel galiléen : qu'affirmer ? Il faut écarter
          « il n'est soumis à aucune force » (l'erreur 1 de cette fiche) et
          juger quatre conclusions tirées d'une même observation : « valider ».
     Q2 — $m = 15$ kg, $\sum F = 45$ N, calculer $a$. La résultante est DONNÉE
          et la relation s'applique dans le sens direct : exécution,
          « réaliser ».
     Q3 — vitesse constante, $f = 90$ N, calculer $F$. Il faut d'abord
          reconnaître que le principe d'inertie s'applique, donc choisir la loi
          avant de calculer : « analyser ».
     Q4 — collision entre deux véhicules et troisième loi. Question de
          restitution du principe des actions réciproques, avec les
          distracteurs de masse : « s'approprier ».
     Q5 — $m = 60$ kg, $f = 80$ N, $a = 0{,}5$ m/s², calculer $F$. Le PFD doit
          être RENVERSÉ ($F = ma + f$) et le frottement réintégré, ce qui est
          exactement l'erreur 2 de cette fiche : « analyser ».

     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. Constat mesuré sur les 160 questions
     du lycée physique-chimie et écrit dans CODEBASE_MAP.md. */
  competences: {
    evaluation: ["valider", "réaliser", "analyser", "s'approprier", "analyser"]
  }
};
