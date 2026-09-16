/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-kirchhoff.prof.js
   Fiche professeur du chapitre « Circuits électriques (lois de Kirchhoff) »
   (première spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 10, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire. Deux
   moules alternés :
     - moule A (deux résistances en parallèle, $I = U/R_1 + U/R_2$) : exercices
       IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (loi des nœuds pure, $I_3 = I_1 + I_2$) : exercices PAIRS
       2, 4, 6, 8, 10, 12.
   Fait structurant et exploité ci-dessous : le moule B est une simple ADDITION
   de deux nombres décimaux — c'est, sans comparaison possible, le moule le
   plus facile des onze chapitres du niveau. Le moule A, lui, enchaîne deux
   lois (Ohm puis nœuds) et demande trois opérations. Le chapitre est donc
   d'une difficulté très inégale d'un exercice à l'autre, ce qui est une
   information utile pour différencier, et l'erreur 4 s'y appuie.

   Autre fait, exploité par l'erreur 2 : le moule A tire deux fois un couple où
   R_1 vaut le DOUBLE de R_2 — l'exercice 3 (50 et 100 ohms) et l'exercice 11
   (100 et 50 ohms) — ce qui permet de montrer que la branche de plus faible
   résistance reçoit exactement deux fois plus de courant, quel que soit
   l'ordre dans lequel l'énoncé les présente.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-kirchhoff"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et c'est un fait qui mérite d'être explicité pour un chapitre
     placé en dernière position : l'électrocinétique de première est
     entièrement bâtie sur des acquis de COLLÈGE et de SECONDE (intensité,
     tension, loi d'Ohm), pas sur les dix chapitres qui la précèdent.

     ch. 2 (Champ électrostatique) : ÉCARTÉ, et c'est le candidat qu'il faut
     examiner, puisque les deux chapitres parlent d'électricité et que la
     tension U y figure des deux côtés. Mais les objets n'ont rien de commun :
     le chapitre 2 traite des charges au repos et des forces qu'elles
     subissent, celui-ci du courant qui circule et de sa répartition. Aucune
     ligne de ce chapitre ne mobilise la loi de Coulomb, le champ E ni la
     force qE ; réciproquement, U n'est ici qu'une donnée d'énoncé aux bornes
     d'un dipôle. Le déclarer ferait croire à une continuité inexistante — la
     seule idée réellement partagée est la conservation de la charge, qui
     n'est pas construite au chapitre 2.

     ch. 5 (Travail et énergie) : ÉCARTÉ, bien que la puissance électrique
     figure dans les formules du cours et que P = UI relève d'une logique
     énergétique. Le chapitre ne la calcule dans aucun exercice, aucune
     question d'évaluation, et ne la relie à aucun travail. Le rapprochement
     est à faire à l'oral (« c'est l'énergie qui est dissipée, jamais le
     courant » — c'est le piège du cours) ; ce n'est pas une dépendance. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 11, celui du livre.

     Ce chapitre ferme l'année, et il le fait sans contrainte : rien dans le
     niveau ne le précède en dépendance, rien ne le suit. Il est, avec le
     chapitre 8 (Lewis), le plus mobile du niveau.

     Le rang 11 est donc un choix, et il se défend de deux façons. D'abord,
     l'électricité forme avec les chapitres 9 et 10 un bloc « ondes et
     signaux » cohérent au sens du programme. Ensuite — et c'est l'argument
     pratique — c'est un chapitre qu'on peut ÉCOURTER sans dommage si l'année
     a pris du retard, puisque rien ne s'appuie dessus. Le placer en dernier
     est donc un choix prudent, pas un déclassement.

     Un avertissement tout de même : « rien ne s'appuie dessus EN PREMIÈRE »
     ne signifie pas « rien ne s'appuie dessus ». Les lois de Kirchhoff sont
     un outil de terminale et d'enseignement supérieur ; les sacrifier en juin
     se paie l'année suivante. Si le temps manque, mieux vaut réduire le moule
     A (associations) que sauter le chapitre.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : le plus léger du niveau, avec celui
     du chapitre 8. Une addition, une division, et le calcul d'une somme de
     deux quotients. Aucun vecteur, aucune puissance de dix, aucune racine.
     Rien n'interdirait de placer ce chapitre en septembre. */
  rangConseille: 11,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Ondes et signaux ». Repris aux mots du
     programme. */
  attendus: [
    "Exploiter la loi des mailles et la loi des nœuds dans un circuit électrique comportant au plus deux mailles",
    "Représenter les tensions par des flèches sur un schéma de circuit et exploiter la convention récepteur",
    "Citer les expressions de la puissance et de l'énergie électriques reçues par un dipôle et les exploiter"
  ],

  note: "La loi des nœuds, la loi des mailles, les associations de résistances et la puissance " +
        "électrique sont au programme de spécialité de première : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Aucun prérequis de première, deux prérequis non déclarables et " +
        "indispensables.</strong> La colonne « S'appuie sur » affichera un tiret, et c'est " +
        "exact : l'électrocinétique de première ne s'appuie sur aucun des dix chapitres qui la " +
        "précèdent. Elle suppose en revanche acquises l'<strong>intensité et la tension " +
        "électrique</strong> (chapitre de <strong>quatrième</strong>) et surtout la " +
        "<strong>loi d'Ohm</strong> $U = RI$ (chapitre de <strong>troisième</strong>), qu'un " +
        "prérequis ne peut pas viser depuis une fiche de première : rien ne les affichera. La " +
        "loi d'Ohm est pourtant utilisée dans la moitié des exercices, et sans elle le moule des " +
        "associations est inabordable. Si la classe hésite à écrire $I = U/R$, le reprendre " +
        "<strong>avant</strong> : ce chapitre ne refait pas la loi d'Ohm, il la " +
        "combine.<br/><br/>" +
        "<strong>Aucun prérequis mathématique notable</strong> : une addition, une division, une " +
        "somme de deux quotients. Rien n'interdit de placer ce chapitre tôt dans l'année — il " +
        "est, avec le chapitre 8, le plus mobile du niveau, et c'est une souplesse à connaître " +
        "quand la progression se tend.<br/><br/>" +
        "<strong>Un chapitre à difficulté très inégale, à exploiter pour différencier.</strong> " +
        "Les vingt-quatre énoncés tirés alternent deux moules dont la difficulté n'a rien de " +
        "comparable. Les <strong>exercices pairs</strong> sont une simple addition de deux " +
        "intensités : c'est le moule le plus facile de toute l'année de première, et il convient " +
        "aux élèves à qui il faut d'abord rendre confiance. Les <strong>exercices " +
        "impairs</strong> enchaînent la loi d'Ohm dans deux branches puis la loi des nœuds, soit " +
        "trois opérations et deux lois : c'est un vrai exercice de première. Constituer les " +
        "groupes en conséquence plutôt que de distribuer la série en bloc.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Trois absences franches, sur " +
        "les trois attendus officiels. La <strong>loi des mailles</strong> n'est appliquée dans " +
        "<strong>aucun</strong> exercice ni aucune question d'évaluation, alors qu'elle figure " +
        "au premier attendu à égalité avec la loi des nœuds : tous les énoncés portent sur des " +
        "branches en parallèle, où la tension est donnée et commune. C'est l'absence la plus " +
        "grave du chapitre. La <strong>convention récepteur</strong> et les flèches de tension " +
        "(deuxième attendu) n'apparaissent nulle part : aucun schéma n'est à fléchier. Et la " +
        "<strong>puissance électrique</strong> (troisième attendu), pourtant présente dans les " +
        "formules du cours, n'est calculée par aucun exercice ni aucune question. Ces trois " +
        "travaux sont à construire ; le manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Croire que le courant s'use en traversant un composant",
      eleve: "L'élève affirme qu'« il y a moins de courant après la lampe qu'avant », ou qu'« une " +
             "grosse résistance consomme plus de courant et en laisse moins passer ». Il " +
             "représente des intensités décroissantes le long d'une même branche.",
      cause: "L'analogie de l'eau, si utile ailleurs, trahit ici — un tuyau qui se rétrécit fait " +
             "« moins passer d'eau », et l'élève transpose. S'ajoute une confusion de " +
             "vocabulaire que personne ne dissipe : on dit couramment qu'un appareil " +
             "« consomme », et l'élève en conclut qu'il consomme du <strong>courant</strong>, " +
             "alors qu'il consomme de l'<strong>énergie</strong>. Le mot manque, donc l'idée " +
             "manque. C'est l'obstacle le plus documenté de toute l'électrocinétique, et il " +
             "survit au collège, à la seconde, et souvent au-delà.",
      remede: "Nommer précisément ce qui est consommé, et corriger le vocabulaire chaque fois " +
              "qu'il dérape : un dipôle consomme de l'<strong>ÉNERGIE</strong>, jamais du " +
              "courant. Le courant, lui, <strong>traverse</strong> — il entre et il ressort " +
              "identique. Le cours le dit littéralement dans son piège : « c'est l'énergie qui " +
              "est dissipée dans la résistance, jamais le courant lui-même ».<br/><br/>" +
              "Fonder la règle sur la <strong>conservation de la charge</strong>, qui lui donne " +
              "sa nécessité : les électrons ne disparaissent pas dans la résistance et ne s'y " +
              "accumulent pas. S'il en entrait plus qu'il n'en sort, la résistance se chargerait " +
              "indéfiniment, ce qu'aucune expérience ne montre. Une règle qui découle d'un " +
              "principe s'oublie moins qu'une règle décrétée.<br/><br/>" +
              "Corriger enfin l'analogie de l'eau plutôt que de l'abandonner, car elle reste " +
              "excellente une fois réglée : dans un circuit de chauffage, il sort du radiateur " +
              "exactement autant d'eau qu'il n'en entre — c'est la " +
              "<strong>chaleur</strong> qui est cédée à la pièce, pas l'eau. Le débit se " +
              "conserve, l'énergie non. L'image devient alors exactement juste.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des vingt-quatre
         énoncés tirés ne suit un courant à travers un composant. Le moule B
         additionne deux intensités en un nœud, le moule A calcule deux
         courants de branche puis leur somme : dans les deux cas, on n'observe
         jamais « ce qui entre » et « ce qui sort » d'un même dipôle. Un
         exercice de calcul ne peut d'ailleurs pas déclencher cette erreur,
         puisqu'il ne demande jamais de comparer l'intensité en amont et en
         aval. La question 4 de l'évaluation la travaille exactement (« un
         courant I = 2 A entre dans une résistance, quel courant en
         ressort ? »), mais une remédiation ne renvoie jamais vers
         l'évaluation notée (règle du projet). Le travail se fait au
         laboratoire, deux ampèremètres de part et d'autre d'une lampe — et le
         remède le dit. */
      exercice: null
    },
    {
      titre: "Croire que le courant se partage également entre les branches",
      eleve: "Pour deux résistances en parallèle sous $12$ V, l'élève divise le courant total par " +
             "deux et attribue la même intensité à chaque branche. Ou bien il applique le " +
             "raisonnement inverse à celui qu'il faut : « la plus grande résistance reçoit le " +
             "plus de courant, puisqu'elle est plus grosse ».",
      cause: "Deux causes se relaient. La première est une <strong>symétrie supposée</strong> : " +
             "un embranchement évoque un partage équitable, et rien dans le schéma ne signale le " +
             "contraire. La seconde est la confusion entre « grande résistance » et « grand " +
             "passage » — le mot <em>résistance</em> devrait pourtant suffire à l'écarter, mais " +
             "l'élève retient surtout que $R$ est un « gros nombre ». L'erreur est masquée par " +
             "le fait que la moitié des exercices du moule A tirent des résistances proches " +
             "(220 et 150, 330 et 470), où le partage est <em>presque</em> équitable et où " +
             "l'approximation ne se voit pas.",
      remede: "Faire calculer <strong>chaque branche séparément</strong>, par la loi d'Ohm, avant " +
              "toute addition — et interdire tout raccourci : $I_1 = U/R_1$ sur une ligne, " +
              "$I_2 = U/R_2$ sur la suivante, la somme seulement ensuite. Le partage n'est " +
              "<strong>jamais</strong> une donnée du problème, c'est toujours un résultat de " +
              "calcul.<br/><br/>" +
              "Fonder le sens de variation sur le mot lui-même, ce qui est ici décisif : une " +
              "<strong>résistance</strong>, ça <strong>résiste</strong>. Plus $R$ est grande, " +
              "plus elle s'oppose au passage, donc <strong>moins</strong> il y passe de courant. " +
              "Le cours l'écrit dans son récapitulatif : « la branche de plus faible résistance " +
              "reçoit le courant le plus élevé ». Faire recopier la phrase, elle contient tout " +
              "le chapitre.<br/><br/>" +
              "Utiliser enfin la <strong>proportion inverse</strong> comme contrôle rapide, une " +
              "fois le calcul fait : si $R_2$ est deux fois plus petite que $R_1$, elle reçoit " +
              "exactement deux fois plus de courant. Un rapport de résistances donne le rapport " +
              "inverse des intensités — c'est vérifiable en une seconde et cela attrape toutes " +
              "les erreurs de sens.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 10) : l'exercice 3 donne R_1 = 50 ohms,
         R_2 = 100 ohms sous U = 12 V, réponse I = 0,36 A. Ce tirage est le
         meilleur des six du moule A pour cette erreur, et pour une raison
         arithmétique : le rapport des résistances vaut exactement 2, donc
         I_1 = 0,24 A et I_2 = 0,12 A — le double, très exactement. Le partage
         est massivement inégal (deux tiers / un tiers) et parfaitement rond,
         là où les exercices 5 (220 et 150 ohms) ou 7 (330 et 470 ohms)
         donneraient des intensités trop proches pour que l'inégalité saute aux
         yeux. L'élève qui divise par deux annonce 0,18 A dans chaque branche,
         et l'écart avec 0,24 se voit. À enchaîner avec l'exercice 11
         (R_1 = 100 et R_2 = 50 sous 15 V), où les valeurs sont INVERSÉES dans
         l'énoncé : c'est alors la seconde branche qui reçoit le double, ce qui
         montre que ce n'est pas la position dans l'énoncé qui compte mais la
         valeur de R. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Additionner les résistances en parallèle comme en série",
      eleve: "Pour $R_1 = 50$ Ω et $R_2 = 100$ Ω en parallèle sous $12$ V, l'élève calcule " +
             "$R = 150$ Ω puis $I = 12/150 = 0{,}08$ A, au lieu de $0{,}36$ A. Il obtient un " +
             "courant total plus faible que celui d'une seule des deux branches.",
      cause: "L'addition est l'opération par défaut : mettre deux choses ensemble, c'est " +
             "ajouter. Rien dans l'expérience de l'élève ne suggère qu'ajouter un chemin puisse " +
             "<strong>diminuer</strong> la résistance de l'ensemble. La règle de la série " +
             "($R = R_1 + R_2$) est en outre apprise en premier et souvent la seule mémorisée. " +
             "C'est ici qu'il faut noter un point du programme : le cours de ce chapitre " +
             "n'enseigne <strong>pas</strong> la formule de la résistance équivalente en " +
             "parallèle — il passe par les courants de branche, ce qui est le choix du " +
             "programme de première. L'élève qui « connaît » une formule de résistance " +
             "équivalente l'a donc apprise ailleurs, souvent de travers.",
      remede: "Refuser d'emblée le détour par une résistance équivalente et " +
              "<strong>imposer la méthode du chapitre</strong>, qui est celle du programme : " +
              "même tension aux bornes des deux branches, loi d'Ohm dans chacune, puis loi des " +
              "nœuds. Trois lignes, aucune formule à mémoriser, et cela marche pour un nombre " +
              "quelconque de branches. C'est le chemin le plus sûr, et c'est celui qu'attend " +
              "l'évaluation.<br/><br/>" +
              "Donner ensuite le <strong>contrôle de vraisemblance</strong> qui refuse l'erreur " +
              "sans calcul : ajouter une branche, c'est ouvrir un chemin " +
              "<strong>supplémentaire</strong> au courant. Le courant total ne peut donc " +
              "qu'<strong>augmenter</strong>, et la résistance de l'ensemble ne peut que " +
              "diminuer — elle est forcément plus petite que la plus petite des deux. Un élève " +
              "qui trouve $0{,}08$ A alors que la seule branche de $50$ Ω en laisserait déjà " +
              "passer $0{,}24$ tient là un résultat impossible.<br/><br/>" +
              "Utiliser enfin l'image de l'<strong>autoroute</strong>, qui rend l'idée " +
              "immédiate : ouvrir une deuxième voie ne ralentit pas le trafic, elle en laisse " +
              "passer davantage. La série, c'est deux péages l'un après l'autre (on additionne " +
              "les obstacles) ; le parallèle, c'est deux routes côte à côte (on additionne les " +
              "débits).",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 11 donne
         R_1 = 100 ohms, R_2 = 50 ohms sous U = 15 V, réponse I = 0,45 A. Le
         tirage est choisi parce que le contrôle de vraisemblance y est
         particulièrement net : la branche de 50 ohms laisse déjà passer
         15/50 = 0,30 A à elle seule, alors que l'addition fautive des
         résistances (150 ohms) donnerait 0,10 A pour l'ENSEMBLE du circuit —
         trois fois moins qu'une seule de ses branches. L'absurdité est
         visible sans connaître la bonne réponse, ce qui est exactement ce
         qu'on cherche pour cette erreur. Sur l'exercice 5 (220 et 150 ohms,
         9 V), l'écart serait moins spectaculaire. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Appliquer la loi des nœuds sans regarder le sens des courants",
      eleve: "L'élève additionne systématiquement toutes les intensités d'un nœud, y compris " +
             "lorsque l'une d'elles en repart. Devant un nœud où $I_1$ arrive et $I_2$ repart, " +
             "il écrit $I_3 = I_1 + I_2$ au lieu de $I_3 = I_1 - I_2$.",
      cause: "Les douze exercices du chapitre qui portent sur la loi des nœuds ont " +
             "<strong>tous</strong> la même configuration : deux courants arrivent, un repart. " +
             "L'élève n'a donc jamais rencontré d'autre cas, et il retient une " +
             "<strong>recette d'addition</strong> au lieu d'une loi de conservation. Ce n'est " +
             "pas un défaut d'attention mais une généralisation légitime à partir de tout ce " +
             "qu'on lui a montré — le tirage du chapitre fabrique l'erreur en même temps qu'il " +
             "entraîne au calcul.",
      remede: "Énoncer la loi sous sa forme <strong>complète</strong> dès le début, et non sous " +
              "sa forme additive : la somme des intensités qui <strong>arrivent</strong> est " +
              "égale à la somme de celles qui <strong>repartent</strong>. Deux sommes, pas une " +
              "addition. Tant que la loi est écrite « $I_3 = I_1 + I_2$ », elle ne décrit qu'un " +
              "cas particulier.<br/><br/>" +
              "Faire <strong>flécher le schéma</strong> avant tout calcul, et compter séparément " +
              "les deux camps : une colonne « ce qui entre », une colonne « ce qui sort », puis " +
              "l'égalité entre les deux totaux. Le fléchage est le geste qui manque, et il " +
              "coûte dix secondes.<br/><br/>" +
              "Revenir enfin au sens physique, qui rend la règle imperdable : la charge " +
              "électrique ne peut ni s'accumuler ni disparaître en un point du circuit — le " +
              "cours l'écrit. Ce qui arrive doit repartir, ni plus ni moins. Formulée ainsi, la " +
              "loi se reconstruit toute seule dans n'importe quelle configuration, y compris " +
              "celles que le chapitre ne montre pas.",
      /* Volontairement SANS renvoi, et vérifié : les douze énoncés du moule B
         (exercices 2, 4, 6, 8, 10, 12 et leurs six suppléments) ont TOUS
         exactement la même structure — « deux courants I_1 et I_2 arrivent en
         un nœud, d'où repart un unique courant I_3 » — et se résolvent tous
         par une addition. Pas un seul n'inverse un sens, pas un seul ne
         comporte trois branches ou un courant sortant à retrancher. Le tirage
         ne peut donc PAS déclencher l'erreur ; pointer l'un de ces exercices
         reviendrait à pointer sa cause. La question 1 de l'évaluation est du
         même moule, et la question 2 ne porte que sur l'interprétation
         physique de la loi. Le travail est entièrement à construire, et il est
         simple : reprendre l'exercice 6 (I_1 = 0,76 A et I_2 = 0,44 A, réponse
         1,20 A) et le réécrire avec I_2 qui REPART du nœud — la réponse
         devient 0,32 A. Deux énoncés presque identiques, deux opérations
         différentes : c'est tout ce qu'il faut. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $I_1 = 0{,}45$ A et $I_2 = 0{,}25$ A arrivent, $I_3$ repart :
          calculer $I_3$. Addition directe, dans la configuration exacte du
          cours : « réaliser ». C'est la question la plus simple de toute
          l'évaluation du niveau, et c'est assumé — le chapitre ferme l'année.
     Q2 — que traduit physiquement la loi des nœuds ? Restitution de
          l'interprétation donnée par le cours (conservation de la charge),
          avec le distracteur « conservation de l'énergie » qui est le piège
          classique : « s'approprier ».
     Q3 — $R_1 = 60$ Ω sous $U = 6$ V : calculer $I_1$. Application directe de
          la loi d'Ohm dans une branche, la valeur de $R_2$ étant un
          distracteur qui ne sert pas : « réaliser ».
     Q4 — $I = 2$ A entre dans une résistance, que ressort-il ? Rien à
          calculer ; il faut juger quatre affirmations concurrentes et écarter
          « moins de 2 A, car une partie est consommée », qui est l'erreur 1 de
          cette fiche : « valider ».
     Q5 — $R_1 = 200$ Ω et $R_2 = 400$ Ω en parallèle sous $8$ V : calculer le
          courant TOTAL. Contrairement à Q3, il faut ici enchaîner deux lois :
          la loi d'Ohm dans chaque branche, PUIS la loi des nœuds. Le choix de
          la démarche précède le calcul, et c'est ce qui sépare les exercices
          impairs des exercices pairs du chapitre : « analyser ».

     Répartition honnête : ce chapitre est le plus facile du niveau, et son
     évaluation le reflète — deux « réaliser » sur des applications immédiates.
     À noter avant de composer un devoir : aucune des cinq questions ne porte
     sur la loi des MAILLES ni sur la puissance électrique, qui figurent
     pourtant aux attendus officiels. C'est la même absence que dans les
     exercices, signalée dans la `note`.
     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "réaliser", "valider", "analyser"]
  }
};
