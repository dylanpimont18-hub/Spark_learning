/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-champ-electrique.prof.js
   Fiche professeur du chapitre « Champ électrostatique » (première
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 1, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Deux
   moules alternés :
     - moule A (champ uniforme, $E = U/d$, $d$ donné en CENTIMÈTRES) :
       exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (loi de Coulomb, $F = k|q_1q_2|/r^2$, charges en MICROCOULOMBS) :
       exercices PAIRS 2, 4, 6, 8, 10, 12.
   Fait structurant et exploité ci-dessous : CHACUN des vingt-sept énoncés
   contient une conversion d'unité obligatoire (cm → m pour le moule A, µC → C
   pour le moule B). Aucun exercice ne fournit les grandeurs directement dans
   le Système international. C'est la caractéristique dominante du chapitre, et
   l'erreur 1 s'y appuie.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-champ-electrique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     ch. 1 (Interactions fondamentales et champ gravitationnel) : RETENU, et
     c'est le prérequis structurant du chapitre. Tout y est construit par
     ANALOGIE : la loi de Coulomb $F = k|q_1q_2|/r^2$ a la forme exacte de la
     loi de gravitation, et le vecteur $\vec{E}$ se définit comme $\vec{g}$ —
     une grandeur créée par une source en tout point de l'espace, qu'on
     multiplie ensuite par la grandeur du système pour obtenir une force
     ($\vec{P} = m\vec{g}$ devient $\vec{F} = q\vec{E}$). L'intro du cours dit
     littéralement « dont la forme rappelle la loi de gravitation
     universelle ». Un élève qui n'a pas vu le chapitre 1 reçoit ici deux
     formules neuves au lieu d'une variation sur une formule connue, et il perd
     l'essentiel : la comparaison des deux interactions (portée infinie pour
     les deux, mais $k$ immensément plus grand que $G$, et un seul signe contre
     deux).

     ch. 3 (Le mouvement et ses descriptions) : ÉCARTÉ. La déviation d'un
     électron entre deux plaques serait un magnifique exercice de cinématique,
     mais le chapitre ne la traite pas — il calcule la force, jamais la
     trajectoire. Aucun vecteur vitesse, aucune accélération.

     ch. 11 (Circuits électriques) : ÉCARTÉ, malgré la tension $U$ commune aux
     deux. Ici $U$ n'est qu'une donnée d'énoncé entre deux plaques ; le
     chapitre 11 ne lui apporte rien et vient d'ailleurs après. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2, celui du livre.

     Immédiatement après le champ gravitationnel, et pour une raison
     pédagogique forte : l'analogie n'est vive que si le chapitre 1 est frais.
     Séparer les deux champs de plusieurs mois reviendrait à enseigner deux
     fois la même structure sans que l'élève la reconnaisse — on perdrait le
     bénéfice principal du chapitre.

     Le placer plus tard est techniquement possible (rien d'autre ne dépend de
     lui dans le niveau), mais coûteux : c'est exactement le genre de chapitre
     qu'on ne devrait jamais repousser en fin d'année.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : les puissances de dix, encore, et
     surtout les préfixes (micro, centi). Aucun vecteur en composantes, aucune
     dérivée. Le rang 2 est donc soutenable très tôt dans l'année, à condition
     d'avoir traité les conversions — voir l'erreur 1, qui est la difficulté
     dominante du chapitre. */
  rangConseille: 2,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser l'expression vectorielle de la force électrostatique entre deux charges ponctuelles",
    "Caractériser les propriétés du champ électrique créé par une charge ponctuelle et par un condensateur plan",
    "Utiliser l'expression de la force électrique subie par une particule chargée placée dans un champ électrique"
  ],

  note: "La loi de Coulomb, le vecteur champ électrostatique, le champ uniforme du condensateur " +
        "plan et la force $\\vec{F} = q\\vec{E}$ sont au programme de spécialité de première : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>Un prérequis de PREMIÈRE, déclaré, et un de SECONDE, non déclarable.</strong> Le " +
        "chapitre s'appuie sur le chapitre 1 (« Interactions fondamentales et champ " +
        "gravitationnel »), dont il reprend la structure trait pour trait — cela, la colonne " +
        "« S'appuie sur » le montre. Il suppose en revanche acquise la notion de " +
        "<strong>charge électrique</strong> et l'électrisation par frottement, vues en " +
        "<strong>seconde</strong> (et même au collège) : un prérequis ne pouvant viser qu'un " +
        "chapitre du même niveau, rien ne l'affichera. Si la classe ne sait pas qu'il existe deux " +
        "signes de charge et que les charges de même signe se repoussent, le reprendre " +
        "<strong>avant</strong>, en dix minutes : le chapitre ne le refait pas.<br/><br/>" +
        "<strong>Enseigner ce chapitre, c'est enseigner une comparaison.</strong> Le seul moyen " +
        "de le rendre économique est de le mettre face au chapitre 1, ligne à ligne : même " +
        "décroissance en $1/r^2$, même construction d'un champ, même passage du champ à la force. " +
        "Trois différences seulement, et ce sont elles qu'il faut faire écrire : l'interaction " +
        "électrique peut être <strong>répulsive</strong>, $k \\approx 9{,}0\\times10^9$ est " +
        "immensément plus grand que $G \\approx 6{,}67\\times10^{-11}$ (d'où sa domination à " +
        "l'échelle atomique), et la force $\\vec{F} = q\\vec{E}$ peut pointer " +
        "<strong>à l'opposé</strong> du champ quand la charge est négative — ce que " +
        "$\\vec{P} = m\\vec{g}$ ne fait jamais, une masse étant toujours positive.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt-sept énoncés tirés alternent deux gestes seulement : $E = U/d$ entre deux plaques, " +
        "et $F = k|q_1q_2|/r^2$ entre deux charges. Trois absences à connaître avant de composer " +
        "un devoir. Le <strong>signe des charges</strong> n'apparaît dans aucun énoncé : toutes " +
        "les charges tirées sont positives, la force n'est jamais qualifiée d'attractive ou de " +
        "répulsive, et le <strong>sens</strong> de $\\vec{F} = q\\vec{E}$ — qui est pourtant le " +
        "piège du cours et le troisième attendu officiel — n'est évalué que par la question 5 de " +
        "l'évaluation. La relation $\\vec{F} = q\\vec{E}$ elle-même n'est " +
        "<strong>jamais</strong> calculée dans un exercice. Et le champ créé par une charge " +
        "ponctuelle, $E = k|q|/r^2$, figure au cours mais dans aucun énoncé. Ces trois travaux " +
        "sont à construire ; le manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Oublier de convertir les centimètres et les microcoulombs",
      eleve: "Pour deux plaques distantes de $d = 5{,}0$ cm sous $U = 200$ V, l'élève écrit " +
             "$E = 200/5 = 40$ V/m au lieu de $4\\,000$ V/m. Ou, pour deux charges de $1$ µC et " +
             "$3$ µC, il calcule $9{,}0\\times10^9 \\times \\dfrac{1\\times3}{2^2} = 6{,}75" +
             "\\times10^9$ N au lieu de $6{,}75\\times10^{-3}$ N.",
      cause: "L'énoncé écrit les grandeurs dans les unités du laboratoire — on mesure des plaques " +
             "en centimètres et des charges en microcoulombs, parce que ce sont les ordres de " +
             "grandeur réels. La formule, elle, exige le Système international. Rien dans la " +
             "formule ne le rappelle, et l'élève lit un nombre, pas une unité. L'erreur sur les " +
             "microcoulombs est la plus coûteuse : elle porte sur $(10^{-6})^2 = 10^{-12}$, soit " +
             "douze ordres de grandeur, et le résultat obtenu ($10^9$ N !) est physiquement " +
             "absurde sans que l'élève ait de repère pour le refuser.",
      remede: "Imposer une <strong>ligne de conversion écrite</strong>, séparée, avant toute " +
              "application numérique : « $d = 5{,}0$ cm $= 5{,}0\\times10^{-2}$ m », " +
              "« $q_1 = 1$ µC $= 1\\times10^{-6}$ C ». Cette ligne prend cinq secondes et " +
              "supprime l'erreur à la racine ; la sauter est le vrai geste fautif, pas le calcul " +
              "qui suit.<br/><br/>" +
              "Donner ensuite un <strong>repère d'ordre de grandeur</strong>, que le chapitre ne " +
              "fournit pas : entre deux plaques de laboratoire, le champ vaut quelques milliers à " +
              "quelques dizaines de milliers de volts par mètre ; la force entre deux charges " +
              "manipulables au laboratoire va du millinewton à la dizaine de newtons. Une réponse " +
              "en $10^9$ N est refusée avant d'être vérifiée — c'est le poids de cent mille " +
              "tonnes.<br/><br/>" +
              "Faire enfin <strong>prononcer le préfixe</strong> à chaque lecture d'énoncé : " +
              "« micro, donc $10^{-6}$ ; centi, donc $10^{-2}$ ». Un préfixe qu'on lit sans le " +
              "traduire est un préfixe qu'on oublie ; un préfixe qu'on prononce en puissance de " +
              "dix est déjà converti.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 1) : l'exercice 2 donne q1 = 1 µC, q2 = 3 µC,
         r = 2,0 m, réponse F = 0,0067 N. Ce tirage est le meilleur support de
         l'erreur pour une raison arithmétique : les coefficients (1 et 3) et
         la distance (2 m) sont si simples que TOUT le travail est dans les
         puissances de dix — l'élève ne peut pas se cacher derrière la
         difficulté du calcul. L'oubli de conversion donne exactement
         6,75e9 N, soit douze ordres de grandeur d'écart avec 6,75e-3 N : le
         diagnostic est immédiat à la correction, et la discussion sur
         l'ordre de grandeur (six millièmes de newton, le poids d'un demi-
         gramme) tient en une phrase. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Tracer la force dans le sens du champ, quelle que soit la charge",
      eleve: "Pour un électron placé dans un champ $\\vec{E}$ dirigé vers la droite, l'élève " +
             "trace $\\vec{F}$ vers la droite lui aussi, « puisque $\\vec{F} = q\\vec{E}$ ». Il " +
             "en conclut que l'électron est attiré vers la plaque négative.",
      cause: "L'élève lit $\\vec{F} = q\\vec{E}$ comme une proportionnalité entre deux vecteurs, " +
             "et un facteur de proportionnalité, dans toute son expérience scolaire, est positif. " +
             "L'idée qu'un nombre puisse RETOURNER un vecteur est neuve : c'est une erreur de " +
             "<strong>signe</strong>, typique du lycée, qui n'avait pas d'occasion d'exister au " +
             "collège. Elle est en outre renforcée par l'analogie avec le chapitre 1, qui vient " +
             "d'être faite et qui est ici piégeuse : $\\vec{P} = m\\vec{g}$ a toujours le sens de " +
             "$\\vec{g}$, parce qu'une masse est toujours positive. L'élève transpose une règle " +
             "vraie dans un cas où elle ne l'est plus.",
      remede: "Casser l'analogie explicitement, là où elle cesse d'être valable, en le disant " +
              "avec des mots : « la masse n'a qu'un signe, la charge en a deux — c'est LA " +
              "différence entre les deux champs ». L'analogie du chapitre 1 est excellente " +
              "partout ailleurs ; c'est justement pour cela qu'il faut nommer le seul endroit où " +
              "elle trahit.<br/><br/>" +
              "Séparer ensuite <strong>norme et sens</strong> dans deux phrases distinctes, " +
              "toujours dans cet ordre : la norme vaut $|q| \\times E$, avec la valeur absolue, " +
              "et elle est toujours positive ; le sens est celui de $\\vec{E}$ si $q > 0$, " +
              "l'opposé si $q < 0$. Tant que les deux informations restent mêlées dans une seule " +
              "écriture vectorielle, l'élève n'en traite qu'une.<br/><br/>" +
              "Ancrer enfin sur le cas concret que tout le monde retient : l'électron, chargé " +
              "négativement, est attiré vers la plaque <strong>positive</strong> — il remonte le " +
              "champ. C'est ce qui fait fonctionner un tube cathodique, et c'est le contre-exemple " +
              "le plus économique. Le faire dessiner une fois, avec les deux plaques annotées " +
              "$+$ et $-$, le vecteur $\\vec{E}$ et le vecteur $\\vec{F}$ en sens opposé.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des vingt-sept énoncés
         tirés ne fait intervenir le signe d'une charge. Le moule B donne des
         charges toutes positives (1, 3, 10, 8, 6, 2, 5, 4 µC) et ne demande
         que l'INTENSITÉ de la force, jamais son sens ni sa nature ; le moule A
         calcule un champ et s'arrête là. La relation F = qE n'est même
         calculée dans aucun exercice. La question 5 de l'évaluation travaille
         exactement cette erreur (électron dans un champ dirigé vers la
         droite), mais une remédiation ne renvoie jamais vers l'évaluation
         notée (règle du projet). Le travail est donc à construire, et le
         remède dit comment : un schéma à deux plaques suffit, aucun calcul. */
      exercice: null
    },
    {
      titre: "Croire que le champ du condensateur dépend de l'endroit où l'on est",
      eleve: "L'élève demande « à quelle distance de la plaque positive ? » avant de calculer " +
             "$E = U/d$, ou affirme que le champ « est plus fort près des plaques et plus faible " +
             "au milieu ». Certains appliquent $E = k|q|/r^2$ entre deux plaques.",
      cause: "Le chapitre présente coup sur coup deux champs de natures opposées : celui d'une " +
             "charge ponctuelle, qui <strong>décroît</strong> en $1/r^2$, et celui d'un " +
             "condensateur plan, qui est <strong>uniforme</strong>. L'élève vient de passer une " +
             "heure sur la décroissance en $1/r^2$ (au chapitre 1 puis au début de celui-ci) et " +
             "la généralise — d'autant que la lettre $d$ de $E = U/d$ ressemble à une distance " +
             "variable, alors qu'elle désigne l'<strong>écartement fixe</strong> des deux plaques.",
      remede: "Faire lire la formule dans le bon sens : dans $E = U/d$, ni $U$ ni $d$ ne " +
              "dépendent du point où l'on se place. Ce sont deux caractéristiques du " +
              "<strong>dispositif</strong>, pas des coordonnées. Le champ a donc la même valeur " +
              "partout entre les plaques — c'est la définition même d'un champ " +
              "<strong>uniforme</strong>.<br/><br/>" +
              "S'appuyer sur la <strong>représentation graphique</strong>, qui porte toute " +
              "l'information et qu'on sous-utilise : les lignes de champ d'un condensateur sont " +
              "<strong>parallèles et équidistantes</strong> (le cours le dit) ; celles d'une " +
              "charge ponctuelle sont divergentes et s'écartent en s'éloignant. Deux dessins " +
              "côte à côte au tableau valent dix minutes d'explication.<br/><br/>" +
              "Donner enfin le critère de choix, à faire écrire en tête de chaque exercice : " +
              "« deux plaques et une tension » ⟹ $E = U/d$ ; « une charge et une distance » ⟹ " +
              "$E = k|q|/r^2$. Les deux situations ne se ressemblent en rien dans l'énoncé ; " +
              "c'est seulement dans la mémoire qu'elles se mélangent.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 11 donne
         d = 0,5 cm et U = 100 V, réponse E = 20 000 V/m. Ce tirage est choisi
         parmi les six du moule A pour une raison précise : c'est le plus
         petit écartement du chapitre (un demi-centimètre), donc celui où
         l'élève est le plus tenté de demander « où, entre les plaques ? »
         alors qu'il n'y a matériellement aucune place pour une variation. La
         confrontation avec l'exercice 5 (d = 1,0 cm, U = 600 V,
         E = 60 000 V/m) est en outre instructive : un écartement deux fois
         plus grand ne divise pas le champ par quatre comme le ferait une
         décroissance en 1/r^2, mais par deux seulement — ce qui montre
         directement que la loi n'est pas celle de la charge ponctuelle. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Croire que la gravitation l'emporte parce qu'on la ressent",
      eleve: "Interrogé sur ce qui tient un atome assemblé, l'élève répond « la gravitation, comme " +
             "pour les planètes ». Ou, à l'inverse, il juge la force électrique « négligeable, " +
             "puisqu'on ne la sent pas » alors que le chapitre vient d'annoncer " +
             "$k \\approx 9{,}0\\times10^9$ contre $G \\approx 6{,}67\\times10^{-11}$.",
      cause: "L'élève classe les interactions selon son <strong>expérience corporelle</strong>, " +
             "où la pesanteur est omniprésente et l'électricité anecdotique. Il ne dispose " +
             "d'aucun repère pour comparer deux constantes séparées de vingt ordres de grandeur — " +
             "$10^9$ et $10^{-11}$ sont pour lui deux nombres également abstraits. C'est une " +
             "erreur d'<strong>ordre de grandeur</strong>, typique du lycée : elle suppose de " +
             "raisonner sur des exposants, ce que le collège ne demandait jamais.",
      remede: "Expliquer d'abord pourquoi l'expérience quotidienne trompe, ce qui évite de la " +
              "disqualifier : à notre échelle, la matière est presque parfaitement " +
              "<strong>neutre</strong> — autant de charges positives que négatives, dont les " +
              "effets s'annulent. La gravitation, elle, ne s'annule jamais, puisqu'il n'existe pas " +
              "de masse négative. Ce n'est donc pas qu'elle soit forte, c'est qu'elle est la seule " +
              "à ne pas se compenser.<br/><br/>" +
              "Faire ensuite le calcul qui tranche, au tableau, une fois pour toutes : pour deux " +
              "protons, le rapport de la force électrique à la force gravitationnelle vaut " +
              "environ $10^{36}$. Écrire le nombre en toutes lettres. C'est un des rares moments " +
              "de l'année où un ordre de grandeur, à lui seul, produit un effet de sidération " +
              "utile — et l'élève retient le classement pour de bon.<br/><br/>" +
              "Conclure sur le partage des rôles, qui est le vrai contenu de l'idée " +
              "d'« interactions fondamentales » : l'interaction électrique gouverne " +
              "l'<strong>atome et la chimie</strong>, la gravitation gouverne les " +
              "<strong>astres</strong>. Chacune domine à son échelle, et aucune des deux n'est " +
              "« la plus forte » dans l'absolu.",
      /* Volontairement SANS renvoi, et vérifié : aucun des vingt-sept énoncés
         tirés ne compare deux interactions. Les deux moules calculent une
         grandeur électrique isolée, sans jamais mettre G et k en présence, et
         aucun exercice du chapitre 1 ne le fait non plus dans l'autre sens.
         L'évaluation du chapitre ne la travaille pas davantage. Pointer un
         exercice de loi de Coulomb pour remédier à une erreur de comparaison
         d'échelles serait un renvoi faux. Le travail est donc entièrement à
         construire — et le remède en donne le contenu complet : le rapport
         10^36 pour deux protons se calcule en trois lignes au tableau. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $q_1 = 4$ µC, $q_2 = 6$ µC, $r = 0{,}3$ m, calculer $F$. Sens direct
          de la loi de Coulomb, avec la conversion des microcoulombs (qui est
          l'erreur 1 de cette fiche) : exécution, donc « réaliser ». La
          conversion rend la question difficile, pas d'une autre nature.
     Q2 — distance divisée par deux : comment évolue $F$ ? Rien à calculer
          numériquement ; il faut juger quatre affirmations sur une variation
          et écarter celles qui ignorent le carré : « valider ».
     Q3 — $d = 4{,}0$ cm, $U = 800$ V, calculer $E$. Sens direct de $E = U/d$ :
          « réaliser ».
     Q4 — proton dans $E = 3{,}0\times10^4$ V/m, calculer $F$. Sens direct de
          $F = |q|E$ : « réaliser ». À noter : c'est la SEULE question de tout
          le chapitre, évaluation comprise, où $F = qE$ est effectivement
          calculée — aucun exercice ne le fait.
     Q5 — électron dans un champ dirigé vers la droite : sens de la force ?
          Il ne s'agit pas de restituer la définition de $\vec{F} = q\vec{E}$
          mais d'en TIRER une conséquence sur un cas particulier, en reliant le
          signe de la charge au sens du vecteur — c'est exactement l'erreur 2
          de cette fiche : « analyser ».

     « Réaliser » est évalué trois fois, ce qui reflète fidèlement un chapitre
     dont les deux moules d'exercice sont deux applications directes de
     formule. « Communiquer » n'est pas mobilisé : aucune des cinq questions ne
     demande de produire une explication rédigée. */
  competences: {
    evaluation: ["réaliser", "valider", "réaliser", "réaliser", "analyser"]
  }
};
