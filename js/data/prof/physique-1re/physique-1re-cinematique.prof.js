/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-cinematique.prof.js
   Fiche professeur du chapitre « Le mouvement et ses descriptions » (première
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 2, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire — c'est,
   avec reaction-avancement, le chapitre le mieux fourni du niveau. Deux moules
   alternés :
     - moule A (accélération à partir de deux vecteurs vitesse encadrants,
       $a_i = \|\vec{v_{i+1}} - \vec{v_{i-1}}\| / 2\tau$) : exercices IMPAIRS
       1, 3, 5, 7, 9, 11 ;
     - moule B (vitesse à partir de deux positions encadrantes,
       $v_i = M_{i-1}M_{i+1} / 2\tau$) : exercices PAIRS 2, 4, 6, 8, 10, 12.
   Fait remarquable et exploité ci-dessous : parmi les six énoncés du moule A,
   TROIS tirent une composante qui DIMINUE ou devient négative — l'exercice 3
   ($v_y$ passe de $0{,}00$ à $-1{,}00$ m/s), l'exercice 9 ($v_y$ passe de
   $0{,}50$ à $-0{,}10$ m/s) et l'exercice 11 ($v_x$ passe de $0{,}50$ à
   $0{,}00$ m/s). Ce sont les seuls énoncés du chapitre où une soustraction
   produit un nombre négatif, et l'erreur 3 s'y appuie.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-cinematique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et il faut le dire explicitement parce que c'est
     contre-intuitif pour un chapitre placé en troisième position : la
     cinématique est une DESCRIPTION du mouvement, pas une explication. Elle ne
     parle jamais de force. Elle peut donc être enseignée avant tout le reste
     de la mécanique — et c'est même ce que font beaucoup de progressions.

     ch. 1 (Champ gravitationnel) et ch. 2 (Champ électrostatique) : ÉCARTÉS,
     et pour une raison de fond. Ils fournissent des FORCES ; ce chapitre-ci ne
     manipule que des positions, des vitesses et des accélérations. Aucune
     ligne du cours, aucun des quarante-deux énoncés tirés ne mentionne une
     force. Les déclarer en prérequis gonflerait la colonne « S'appuie sur »
     d'une dépendance inexistante.

     ch. 4 (Lois de Newton) : c'est l'INVERSE — le chapitre 4 se déclare
     appuyé sur celui-ci, puisqu'il lui faut le vecteur accélération. Même
     chose pour le ch. 5 (travail et énergie), qui a besoin de la vitesse. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 3, celui du livre.

     Le bloc mécanique de la première s'enchaîne strictement : champs (1-2) qui
     donnent les forces, cinématique (3) qui donne l'accélération, Newton (4)
     qui relie les deux, énergie (5) qui en tire une autre lecture. Ce chapitre
     doit précéder le 4 et le 5, et il n'a lui-même besoin de rien : sa place
     n'est donc contrainte que par l'aval.

     On POURRAIT l'avancer en rang 1, et c'est un choix défendable — plusieurs
     progressions ouvrent l'année par la cinématique, qui est un chapitre
     expérimental (vidéo pointée) et engageant. On ne le fait pas ici pour deux
     raisons : les chapitres 1 et 2 forment une paire qu'il serait dommage de
     couper, et surtout le prérequis mathématique ci-dessous n'est pas acquis
     en septembre.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER, et c'est ce qui commande le rang : ce
     chapitre est le PREMIER de l'année à exiger les <strong>vecteurs en
     composantes</strong> — différence de deux vecteurs, multiplication par un
     scalaire, norme par le théorème de Pythagore. Le cours de mathématiques de
     première ne traite pas les vecteurs en début d'année (ils viennent de la
     seconde, mais il faut les réactiver), et la notion de DÉRIVÉE, qui donne
     le sens profond de $\vec{v}$ et $\vec{a}$, est encore plus tardive.
     Placer ce chapitre en rang 1 reviendrait donc à le placer avant son outil
     mathématique : le chapitre deviendrait une suite de recettes. Rang 3 est
     le compromis, et il suppose que les vecteurs aient été réactivés. */
  rangConseille: 3,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Choisir un référentiel d'étude et décrire le mouvement d'un système modélisé par un point dans ce référentiel",
    "Représenter le vecteur vitesse d'un point à partir de positions successives et d'une durée entre ces positions",
    "Représenter le vecteur variation de vitesse et l'exploiter pour caractériser le mouvement"
  ],

  note: "Le référentiel, la trajectoire, et la construction des vecteurs vitesse et accélération " +
        "par la méthode des positions successives sont au programme de spécialité de première : " +
        "le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Aucun prérequis de première, un prérequis de SECONDE non déclarable.</strong> La " +
        "colonne « S'appuie sur » affichera un tiret, et c'est exact : la cinématique décrit le " +
        "mouvement sans jamais parler de force, elle ne dépend donc d'aucun chapitre de " +
        "l'année. Elle suppose en revanche acquis le chapitre " +
        "<strong>« Décrire un mouvement »</strong> de <strong>seconde</strong> (relativité du " +
        "mouvement, vitesse moyenne) : un prérequis ne pouvant viser qu'un chapitre du même " +
        "niveau, rien ne l'affichera. La vitesse moyenne $v = d/\\Delta t$ est le seul acquis " +
        "vraiment nécessaire, et il est solide chez la plupart des élèves.<br/><br/>" +
        "<strong>Le vrai prérequis est mathématique, et il commande la place du " +
        "chapitre.</strong> Ce chapitre est le premier de l'année à exiger les " +
        "<strong>vecteurs en composantes</strong> : soustraire deux vecteurs, diviser un vecteur " +
        "par un nombre, calculer une norme par Pythagore. Si les vecteurs de seconde n'ont pas " +
        "été réactivés, la méthode des positions successives devient une recette de calcul sans " +
        "objet. Plus profondément, $\\vec{v}$ et $\\vec{a}$ sont des " +
        "<strong>dérivées</strong> — de la position, puis de la vitesse — et la dérivation " +
        "n'arrive qu'en cours d'année en mathématiques. Le chapitre est écrit pour s'en passer " +
        "(tout passe par des différences finies sur deux points encadrants), mais il faut le " +
        "savoir : ce qui est enseigné ici est une <strong>approximation</strong> de la dérivée, " +
        "et le dire à voix haute donne du sens à un calcul qui, sinon, paraît " +
        "arbitraire.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "quarante-deux énoncés tirés alternent deux gestes seulement, tous deux " +
        "<strong>numériques</strong> : calculer la norme de $\\vec{v_i}$ à partir de deux " +
        "positions, calculer la norme de $\\vec{a_i}$ à partir de deux vecteurs vitesse. Trois " +
        "absences à connaître avant de composer un devoir. Aucun exercice ne demande de " +
        "<strong>TRACER</strong> un vecteur sur une chronophotographie, alors que c'est " +
        "littéralement le verbe des deuxième et troisième attendus officiels " +
        "(« représenter le vecteur vitesse ») : ce geste-là se travaille sur papier millimétré, " +
        "pas au calcul, et le manuel ne le fournit pas. Aucun exercice ne porte sur le " +
        "<strong>référentiel</strong>, premier attendu officiel (seule la question 2 de " +
        "l'évaluation le fait). Et aucun exercice ne demande de <strong>conclure</strong> sur la " +
        "nature du mouvement à partir des vecteurs obtenus : on calcule une norme, on ne " +
        "l'interprète jamais. Ces trois travaux sont à construire.",

  erreurs: [
    {
      titre: "Construire le vecteur vitesse sur un seul segment",
      eleve: "Pour calculer $\\vec{v_i}$ au point $M_i$, l'élève utilise $\\vec{M_{i-1}M_i}$ et " +
             "divise par $\\tau$, au lieu d'utiliser $\\vec{M_{i-1}M_{i+1}}$ et de diviser par " +
             "$2\\tau$. Il obtient un vecteur qui n'est pas tangent à la trajectoire, et qui est " +
             "souvent faux en norme sur une trajectoire courbe.",
      cause: "La définition de la vitesse moyenne apprise en seconde, $v = d/\\Delta t$, porte sur " +
             "<strong>un</strong> déplacement pendant <strong>une</strong> durée : c'est " +
             "l'écriture que l'élève connaît, et il l'applique. Rien dans sa formation antérieure " +
             "ne l'a préparé à l'idée qu'on puisse encadrer un point pour mieux estimer ce qui s'y " +
             "passe. L'erreur est d'autant plus tenace que la méthode du segment " +
             "<strong>fonctionne</strong> sur une trajectoire rectiligne uniforme : elle ne " +
             "produit une faute visible que dans les cas courbes ou accélérés.",
      remede: "Donner la <strong>raison</strong> de la méthode, qui manque toujours et sans " +
              "laquelle la règle reste arbitraire : $\\vec{M_{i-1}M_i}$ donne la vitesse " +
              "moyenne <em>entre</em> $M_{i-1}$ et $M_i$, c'est-à-dire la vitesse quelque part au " +
              "milieu de ce segment — pas en $M_i$. En prenant les deux points qui " +
              "<strong>encadrent</strong> $M_i$, le point milieu de l'intervalle est " +
              "précisément $M_i$ : c'est pour cela que l'estimation lui " +
              "correspond.<br/><br/>" +
              "Faire toujours écrire les <strong>deux indices en même temps</strong> : " +
              "« $\\vec{v_3}$ se construit avec $M_2$ et $M_4$ » — un avant, un après, et le " +
              "point étudié au milieu. Le faire prononcer ainsi, littéralement, à chaque " +
              "exercice : « deux, quatre, pour trois ». La symétrie des indices autour du point " +
              "est le seul contrôle dont on ait besoin.<br/><br/>" +
              "Contrôler enfin par le <strong>dénominateur</strong>, qui trahit l'erreur à coup " +
              "sûr : deux intervalles ont été franchis, donc on divise par $2\\tau$, jamais par " +
              "$\\tau$. Un élève qui a écrit $2\\tau$ au dénominateur ne peut plus avoir utilisé " +
              "un seul segment au numérateur — les deux se tiennent, et vérifier l'un vérifie " +
              "l'autre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 2) : l'exercice 10 donne tau = 0,10 s,
         M_{i-1}(0,00 ; 0,50) et M_{i+1}(2,00 ; 1,30), réponse v_i = 10,77 m/s.
         Ce tirage est choisi parmi les six du moule B parce que l'écart entre
         la bonne méthode et l'erreur y est maximal et parfaitement lisible :
         l'élève qui divise par tau au lieu de 2tau trouve 21,54 m/s, soit
         exactement le double. Un facteur 2 exact, sur un énoncé aux
         coordonnées rondes, se diagnostique d'un coup d'œil à la correction —
         et se discute en une phrase avec l'élève, qui voit lui-même d'où il
         vient. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Croire qu'une accélération nulle signifie une vitesse nulle",
      eleve: "Devant un mobile dont le vecteur accélération est nul, l'élève conclut « il est " +
             "immobile ». Inversement, devant un objet qui tourne à vitesse constante sur un " +
             "cercle, il affirme que « l'accélération est nulle, puisque la vitesse ne change " +
             "pas ».",
      cause: "Double confusion, et les deux moitiés sont classiques. La première porte sur le mot " +
             "lui-même : dans la langue courante, « accélérer » signifie aller plus vite, donc " +
             "« ne pas accélérer » semble vouloir dire « ne pas aller ». La seconde est plus " +
             "profonde et c'est elle qui compte : l'élève identifie la vitesse à sa " +
             "<strong>norme</strong> et oublie qu'un vecteur porte aussi une " +
             "<strong>direction</strong>. Sur un cercle parcouru à norme constante, la direction " +
             "change en permanence : le vecteur vitesse change donc, et l'accélération n'est pas " +
             "nulle. C'est l'erreur « vecteur confondu avec sa norme », caractéristique du lycée.",
      remede: "Séparer explicitement les deux informations que porte un vecteur vitesse, et le " +
              "faire dire à chaque énoncé : une <strong>norme</strong> (à quelle allure ?) et une " +
              "<strong>direction</strong> (vers où ?). L'accélération traduit la variation de " +
              "<strong>l'un OU de l'autre</strong> — le cours l'écrit littéralement (« traduit " +
              "toute variation de la vitesse, en norme ou en direction »), et c'est la phrase à " +
              "faire recopier.<br/><br/>" +
              "Utiliser le <strong>virage en voiture</strong>, qui règle la question en une " +
              "seconde : à $50$ km/h constants, on est plaqué contre la portière. Quelque chose " +
              "change, donc l'accélération n'est pas nulle — alors que le compteur, lui, " +
              "n'a pas bougé. Le compteur affiche une norme ; le corps ressent un vecteur.<br/><br/>" +
              "Réserver enfin le mot « immobile » à la seule chose qu'il désigne, et le vérifier " +
              "sur le cas limite : un vecteur accélération nul à tout instant signifie un " +
              "mouvement <strong>rectiligne uniforme</strong> — rectiligne parce que la direction " +
              "ne change pas, uniforme parce que la norme ne change pas. L'immobilité n'est qu'un " +
              "cas particulier parmi d'autres, celui où la norme vaut zéro.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des quarante-deux
         énoncés tirés ne demande d'interpréter un résultat. Les deux moules
         demandent « calcule la norme », point final : la réponse attendue est
         un nombre, jamais une nature de mouvement. Le moule A ne produit
         d'ailleurs jamais d'accélération nulle (les douze vecteurs vitesse
         encadrants tirés diffèrent toujours). La question 4 de l'évaluation
         travaille exactement cette erreur (« si le vecteur accélération est
         nul à tout instant… »), mais une remédiation ne renvoie jamais vers
         l'évaluation notée (règle du projet). Le travail est donc à
         construire — et le remède dit avec quoi : le virage en voiture, ou
         une chronophotographie de mouvement circulaire uniforme, que le
         chapitre n'utilise nulle part. */
      exercice: null
    },
    {
      titre: "Ignorer le signe en soustrayant deux vecteurs",
      eleve: "Pour $\\vec{v_{i-1}}(1{,}50~;~0{,}00)$ et $\\vec{v_{i+1}}(2{,}50~;~-1{,}00)$, " +
             "l'élève calcule $\\Delta v_y = 1{,}00 - 0{,}00 = 1{,}00$ au lieu de " +
             "$-1{,}00 - 0{,}00 = -1{,}00$ : il soustrait les valeurs absolues. Ou bien il " +
             "soustrait dans le mauvais sens, $\\vec{v_{i-1}} - \\vec{v_{i+1}}$, et obtient un " +
             "vecteur opposé.",
      cause: "Deux causes se superposent. D'abord, l'habitude scolaire de soustraire « le plus " +
             "petit au plus grand » pour éviter un résultat négatif — réflexe acquis au collège, " +
             "où presque toutes les grandeurs étaient positives, et qui n'a plus cours dès qu'on " +
             "manipule des <strong>composantes</strong>, qui sont algébriques par nature. " +
             "Ensuite, l'ordre des termes : $\\vec{v_{i+1}} - \\vec{v_{i-1}}$ se lit " +
             "« l'après moins l'avant », et l'élève qui recopie la formule de mémoire inverse une " +
             "fois sur deux. C'est une erreur de <strong>signe</strong>, typique du lycée.",
      remede: "Faire écrire la soustraction <strong>composante par composante, en colonnes</strong>, " +
              "avec les signes recopiés tels quels depuis l'énoncé : " +
              "$\\Delta v_x = 2{,}50 - 1{,}50$ sur une ligne, " +
              "$\\Delta v_y = (-1{,}00) - 0{,}00$ sur la suivante, les parenthèses " +
              "<strong>obligatoires</strong> autour de toute composante négative. La parenthèse " +
              "n'est pas un ornement : c'est elle qui empêche la main d'écrire $1{,}00$ au lieu " +
              "de $-1{,}00$.<br/><br/>" +
              "Ancrer ensuite l'ordre des termes sur le <strong>sens physique</strong>, jamais " +
              "sur la mémoire de la formule : une variation, c'est toujours " +
              "<strong>l'état d'arrivée moins l'état de départ</strong>. Ici, $\\vec{v_{i+1}}$ " +
              "est l'après et $\\vec{v_{i-1}}$ l'avant. C'est la même convention que pour " +
              "$\\Delta E_c$ ou $\\Delta T$ ; la nommer une fois pour toutes évite de la " +
              "réapprendre à chaque chapitre.<br/><br/>" +
              "Faire lire enfin ce que le signe <strong>raconte</strong>, puisque c'est là " +
              "l'intérêt : une composante $\\Delta v_y$ négative signifie que le mobile " +
              "descend de plus en plus vite, ou monte de moins en moins vite, selon l'orientation " +
              "choisie. Un signe qui dit quelque chose n'est plus un signe qu'on efface. À noter " +
              "que la NORME finale, elle, est toujours positive — un élève qui trouve une norme " +
              "négative a fait une autre erreur.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 donne
         v_{i-1}(1,50 ; 0,00) et v_{i+1}(2,50 ; -1,00), avec tau = 0,50 s,
         réponse a_i = 1,41 m/s². C'est l'un des trois seuls énoncés du
         chapitre où une composante devient NÉGATIVE (avec les exercices 9 et
         11), et le plus lisible des trois : la composante de départ vaut
         exactement 0,00, de sorte que Delta v_y = -1,00 se lit sans calcul.
         L'élève qui soustrait les valeurs absolues trouve Delta v_y = +1,00,
         donc… exactement la même norme, 1,41 m/s² ! C'est précisément ce qui
         rend ce tirage précieux : il montre qu'une erreur de signe peut
         passer inaperçue quand on ne demande que la norme, et qu'il faut donc
         exiger les composantes intermédiaires sur la copie. À exploiter en
         classe : faire tracer le vecteur accélération, dont la DIRECTION,
         elle, est fausse. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Décrire un mouvement sans préciser de référentiel",
      eleve: "L'élève affirme qu'un passager assis dans un train « est immobile » ou « va à " +
             "$300$ km/h » sans indiquer par rapport à quoi, et tient les deux affirmations pour " +
             "contradictoires. Interrogé, il tranche en faveur d'un mouvement « réel », " +
             "généralement celui par rapport au sol.",
      cause: "Le référentiel terrestre est si universellement sous-entendu dans la vie courante " +
             "qu'il devient invisible : personne ne précise « par rapport au sol » en disant " +
             "qu'une voiture roule. L'élève n'a donc jamais eu à formuler ce choix, et il lui " +
             "prête un caractère absolu. L'obstacle est réel — c'est celui-là même qu'il a fallu " +
             "des siècles pour lever en astronomie — et il ne cède pas à une simple définition.",
      remede: "Donner d'emblée une situation où <strong>les deux descriptions sont vraies</strong> " +
              "et où aucune n'est privilégiée : dans le train, un passager voit sa voisine " +
              "immobile ; depuis le quai, on la voit filer. Aucun des deux observateurs ne se " +
              "trompe. Tant qu'un élève cherche laquelle des deux descriptions est « la bonne », " +
              "l'idée n'est pas passée.<br/><br/>" +
              "Imposer ensuite la <strong>formulation complète</strong> dans toute réponse écrite, " +
              "sans exception : jamais « il est immobile », toujours « il est immobile " +
              "<strong>dans le référentiel</strong> du train ». La contrainte d'écriture fait ici " +
              "tout le travail conceptuel, parce qu'on ne peut pas écrire la phrase complète sans " +
              "avoir choisi.<br/><br/>" +
              "Montrer enfin que la <strong>trajectoire elle-même</strong> change de nature avec " +
              "le référentiel, ce qui est l'argument décisif : la valve d'une roue de vélo décrit " +
              "un cercle dans le référentiel du cycliste, et une cycloïde — une courbe qui " +
              "rebondit — dans le référentiel du sol. Ce n'est pas la vitesse qui change de " +
              "valeur, c'est la <strong>forme même</strong> du mouvement. Une figure au tableau " +
              "suffit, et elle marque durablement.",
      /* Volontairement SANS renvoi, et vérifié : aucun des quarante-deux
         énoncés tirés ne porte sur le référentiel. Les deux moules du
         générateur fournissent directement des coordonnées ou des composantes,
         dans un repère implicite et jamais discuté — le mot « référentiel »
         n'apparaît dans aucun énoncé. C'est la limite signalée dans la `note`
         ci-dessus : le premier attendu officiel du chapitre (« choisir un
         référentiel d'étude ») n'est travaillé que par la question 2 de
         l'évaluation, vers laquelle une remédiation ne renvoie jamais (règle
         du projet). Le travail est à construire, et le remède en donne le
         matériel : le train, puis la valve de la roue de vélo. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $M_1(1{,}0~;~2{,}0)$ et $M_3(2{,}4~;~2{,}6)$, $\tau = 0{,}2$ s :
          calculer $v_2$. Contrairement à une application de formule, l'élève
          doit ici RECONSTRUIRE la relation : identifier que $M_1$ et $M_3$
          encadrent $M_2$, former les composantes du vecteur, choisir le
          dénominateur $2\tau$ (et non $\tau$ — c'est l'erreur 1 de cette
          fiche), puis passer à la norme par Pythagore. Trois décisions avant
          le moindre calcul : « analyser ».
     Q2 — objet immobile pour le sol, mobile pour la voiture : que montre cette
          situation ? Il faut juger quatre interprétations d'une même
          observation et écarter « erreur d'observation » et « mouvement
          absolu » : « valider ».
     Q3 — $\vec{v_2}(4{,}0~;~1{,}0)$ et $\vec{v_4}(2{,}0~;~3{,}0)$,
          $\tau = 0{,}1$ s : calculer $a_3$. Même structure que Q1, avec en
          plus une composante $\Delta v_x$ NÉGATIVE à traiter correctement
          (erreur 3 de cette fiche) : « analyser ».
     Q4 — vecteur accélération nul à tout instant : nature du mouvement ? Il
          faut juger quatre natures de mouvement et écarter « nécessairement
          immobile », qui est l'erreur 2 de cette fiche : « valider ».
     Q5 — quels points utiliser pour construire $\vec{v_3}$ ? Restitution
          directe de la méthode des positions successives, telle que le cours
          l'énonce : « s'approprier ».

     Chapitre remarquablement équilibré, et ce n'est pas un arrangement : les
     deux questions numériques exigent réellement de reconstruire la relation
     (aucune n'est une substitution dans une formule donnée), et les deux QCM
     demandent réellement de juger des affirmations concurrentes. « Réaliser »
     est donc ABSENT, ce qui peut surprendre pour un chapitre où l'on calcule
     beaucoup — mais l'étiqueter par commodité serait malhonnête. C'est le
     signe que les exercices, eux, portent tout le travail d'exécution : les
     quarante-deux énoncés tirés sont des « réaliser » purs.
     « Communiquer » n'est pas mobilisé : aucune question ne demande de
     produire une explication rédigée. */
  competences: {
    evaluation: ["analyser", "valider", "analyser", "valider", "s'approprier"]
  }
};
