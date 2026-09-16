/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-ondes-mecaniques.prof.js
   Fiche professeur du chapitre « Ondes mécaniques » (première spécialité),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 8, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire. Deux
   moules alternés :
     - moule A (retard, $\tau = d/v$)                    : exercices IMPAIRS
       1, 3, 5, 7, 9, 11 ;
     - moule B (longueur d'onde, $\lambda = v/f$)        : exercices PAIRS
       2, 4, 6, 8, 10, 12.
   Fait remarquable et exploité ci-dessous : le moule B tire QUATRE célérités
   différentes (air 340, eau 1500, corde 120 m/s) contre des fréquences allant
   de 50 à 1000 Hz, et produit des longueurs d'onde allant de 0,24 m (ex. 12) à
   6,8 m (ex. 2) — soit un facteur 28. Deux exercices du même moule donnent en
   outre la MÊME célérité de 1500 m/s pour des fréquences différentes (ex. 4 à
   800 Hz, lambda = 1,88 m ; ex. 8 à 250 Hz, lambda = 6 m), ce qui permet de
   montrer directement que la célérité, elle, ne bouge pas. L'erreur 2 s'y
   appuie.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-ondes-mecaniques"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et c'est net : ce chapitre ouvre le bloc « ondes et signaux »
     de l'année, qui est disjoint des blocs mécanique (1-5) et chimie (6-8).

     ch. 3 (Le mouvement et ses descriptions) : ÉCARTÉ, et c'est le candidat
     qu'il faut examiner sérieusement puisqu'on y parle de vitesse. Mais la
     célérité d'une onde n'est PAS la vitesse d'un mobile : c'est précisément
     le contraire, puisque rien ne se déplace sur la distance parcourue par
     l'onde (l'erreur 1 de cette fiche porte exactement là-dessus). Aucun
     vecteur, aucune trajectoire, aucune accélération n'intervient ici. Déclarer
     le chapitre 3 laisserait croire à une continuité qui serait pédagogiquement
     NUISIBLE — l'élève transposerait justement ce qu'il ne faut pas
     transposer.

     ch. 5 (Travail et énergie) : ÉCARTÉ malgré l'idée, essentielle ici, qu'une
     onde transporte de l'ÉNERGIE sans transporter de matière. Le chapitre ne
     calcule jamais cette énergie, ne la relie à aucun travail, et
     $E_c = \frac{1}{2}mv^2$ n'y apparaît nulle part. Le rapprochement est
     conceptuel et mérite d'être fait à l'oral ; ce n'est pas une dépendance.

     ch. 10 (La lumière : modèle ondulatoire) : c'est l'INVERSE — c'est lui qui
     se déclare appuyé sur celui-ci, puisqu'il transporte à la lumière les
     notions d'onde et de longueur d'onde construites ici. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 9, celui du livre.

     Ce chapitre ouvre le bloc « ondes et signaux » et doit précéder le
     chapitre 10 (lumière, modèle ondulatoire), qui réutilise la longueur
     d'onde. C'est sa seule contrainte, et elle porte sur l'aval : rien dans le
     niveau ne doit le précéder.

     Il pourrait donc être placé beaucoup plus tôt — c'est même un chapitre
     d'ouverture d'année honorable, très expérimental (cuve à ondes, corde,
     mesure de la célérité du son) et sans prérequis. On le laisse en rang 9
     par cohérence de domaine : la mécanique et la chimie forment deux blocs
     qu'il serait dommage de couper, et le bloc ondes se tient à trois
     chapitres (9, 10, et le 11 pour l'électricité).

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : léger, mais pas nul. Une division,
     un inverse ($T = 1/f$), et surtout l'aisance sur les
     <strong>préfixes et les puissances de dix</strong> — les millisecondes,
     les kilohertz, les nanomètres au chapitre suivant. Aucun vecteur, aucune
     dérivée. Rien n'interdit donc de placer ce chapitre tôt dans l'année. Le
     seul point à surveiller est la manipulation de $T = 1/f$ comme relation
     RÉCIPROQUE, qui n'est pas une évidence pour tous. */
  rangConseille: 9,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Ondes et signaux ». Repris aux mots du
     programme. */
  attendus: [
    "Décrire dans le cas d'une onde mécanique progressive la propagation d'une perturbation sans transport de matière",
    "Exploiter la relation entre la durée de propagation, la distance parcourue et la célérité de l'onde",
    "Exploiter la relation entre la longueur d'onde, la période et la célérité pour une onde progressive périodique"
  ],

  note: "L'onde mécanique progressive, la célérité, le retard, la période et la longueur d'onde " +
        "sont au programme de spécialité de première : le chapitre ne déborde pas. Les " +
        "interférences et les ondes stationnaires n'y figurent pas, et le chapitre ne les " +
        "aborde pas.<br/><br/>" +
        "<strong>Aucun prérequis de première, un prérequis de SECONDE non déclarable.</strong> " +
        "La colonne « S'appuie sur » affichera un tiret, et c'est exact : ce chapitre ouvre le " +
        "bloc « ondes et signaux », disjoint de la mécanique et de la chimie qui précèdent. Il " +
        "suppose acquis les <strong>signaux sonores</strong> et la relation " +
        "<strong>$v = d/\\Delta t$</strong> vus en <strong>seconde</strong> : un prérequis ne " +
        "pouvant viser qu'un chapitre du même niveau, rien ne l'affichera. Ces acquis sont en " +
        "général solides.<br/><br/>" +
        "<strong>Attention à un faux prérequis, qui serait nuisible.</strong> La tentation est " +
        "grande de rattacher ce chapitre au chapitre 3 (« Le mouvement et ses descriptions »), " +
        "puisqu'on y parle de vitesse. C'est exactement ce qu'il ne faut pas faire : la célérité " +
        "d'une onde n'est pas la vitesse d'un mobile, puisque " +
        "<strong>rien ne se déplace</strong> sur la distance parcourue par l'onde. Transposer " +
        "l'un à l'autre installe l'erreur centrale du chapitre. Mieux vaut poser l'opposition " +
        "d'emblée, à l'oral.<br/><br/>" +
        "<strong>Les prérequis mathématiques sont légers</strong> : une division, un inverse " +
        "($T = 1/f$) et les <strong>préfixes</strong> (milli, kilo). Le seul point délicat est " +
        "de manipuler $T = 1/f$ comme une relation réciproque — « la fréquence double, la " +
        "période est divisée par deux » — ce qui n'est pas acquis pour tous.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt-quatre énoncés tirés alternent deux gestes seulement : $\\tau = d/v$ et " +
        "$\\lambda = v/f$, tous deux dans le sens direct. Trois absences à connaître avant de " +
        "composer un devoir. La distinction <strong>transversale / longitudinale</strong> " +
        "n'apparaît dans <strong>aucun</strong> exercice, alors qu'elle structure le premier " +
        "attendu officiel : seule la question 4 de l'évaluation la porte. Le " +
        "<strong>non-transport de matière</strong> — cœur du même attendu et piège du cours — " +
        "n'est travaillé par aucun exercice non plus (question 2 de l'évaluation seulement). Et " +
        "aucun exercice ne demande d'<strong>exploiter un graphique</strong> : ni de mesurer " +
        "une période sur un enregistrement temporel, ni une longueur d'onde sur une photographie " +
        "à un instant donné — geste qui est pourtant le cœur du travail expérimental sur les " +
        "ondes, et qui distingue les deux périodicités. Ces trois travaux sont à construire ; le " +
        "manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Croire que la matière est transportée par l'onde",
      eleve: "L'élève affirme qu'un bouchon flottant est « emporté au loin par la vague », ou " +
             "que « l'air se déplace de la bouche jusqu'à l'oreille » quand on parle. Il " +
             "interprète la célérité comme la vitesse d'un déplacement de matière.",
      cause: "L'onde se voit <strong>avancer</strong> : sur l'eau, sur une corde, la crête " +
             "progresse visiblement de gauche à droite, et rien dans l'observation ne signale " +
             "que ce n'est pas la même eau. L'élève voit un objet en mouvement, et son cerveau " +
             "lui fournit spontanément l'interprétation la plus économique — quelque chose s'est " +
             "déplacé. C'est un obstacle perceptif, pas un défaut d'attention : il faut une " +
             "expérience dédiée pour le lever, l'explication seule n'y suffit pas.",
      remede: "<strong>Marquer un point du milieu</strong> et le suivre du regard, ce qui règle " +
              "la question en dix secondes : un ruban noué sur une corde, un bouchon sur la cuve " +
              "à ondes, une bille sur un ressort. L'onde traverse toute la longueur ; le repère, " +
              "lui, monte et descend sur place et revient exactement où il était. Ce que " +
              "l'expérience montre, aucun discours ne le remplace.<br/><br/>" +
              "Nommer ensuite ce qui se propage réellement : une <strong>perturbation</strong>, " +
              "c'est-à-dire un état (une déformation, une surpression), et l'<strong>énergie</strong> " +
              "qui va avec. On peut prendre l'image de la vague dans un stade — chaque " +
              "spectateur se lève et se rassoit à sa place, et pourtant la vague fait le tour. " +
              "Personne n'a changé de siège.<br/><br/>" +
              "Prolonger enfin par une conséquence qui frappe et qui verrouille l'idée : si le " +
              "son transportait l'air, une conversation créerait un courant d'air permanent, et " +
              "un concert déplacerait l'atmosphère de la salle. Ce n'est pas le cas — parce que " +
              "chaque tranche d'air oscille autour de sa position et y revient.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des vingt-quatre
         énoncés tirés ne porte sur le non-transport de matière. Les deux
         moules du générateur sont purement numériques — « calcule le retard »,
         « calcule la longueur d'onde » — et un calcul de retard ne peut pas
         distinguer une onde d'un projectile, puisque tau = d/v s'écrirait
         pareil pour une balle qui traverserait la pièce. C'est précisément
         ce qui rend cette erreur invisible aux exercices : ils fonctionnent
         tout aussi bien avec la conception fausse. La question 2 de
         l'évaluation la travaille (le ruban sur la corde), mais une
         remédiation ne renvoie jamais vers l'évaluation notée (règle du
         projet). Le travail est à construire, et le remède dit avec quoi :
         un ruban, une corde, dix secondes. */
      exercice: null
    },
    {
      titre: "Croire que la célérité dépend de la fréquence ou de l'amplitude",
      eleve: "L'élève affirme qu'« un son aigu va plus vite qu'un son grave », ou qu'« un cri " +
             "arrive plus vite qu'un chuchotement ». Devant un exercice, il cherche à corriger la " +
             "célérité en fonction de la fréquence donnée.",
      cause: "La relation $\\lambda = v/f$ met trois grandeurs en présence et l'élève les traite " +
             "comme <strong>interchangeables</strong> : si $\\lambda$ dépend de $f$, pourquoi $v$ " +
             "n'en dépendrait-il pas ? Rien dans l'écriture algébrique ne dit qu'une des trois " +
             "grandeurs a un statut différent. Or $v$ est une propriété du " +
             "<strong>milieu</strong>, $f$ une propriété de la <strong>source</strong>, et " +
             "$\\lambda$ la seule qui résulte des deux. L'expérience courante n'aide pas : on " +
             "associe spontanément l'aigu à la rapidité et le grave à la lenteur.",
      remede: "Faire écrire, à côté de chaque grandeur, <strong>qui la fixe</strong> — c'est " +
              "l'exercice qui règle la confusion : $v$ est fixée par le " +
              "<strong>milieu</strong> (l'air, l'eau, l'acier) ; $f$ est fixée par la " +
              "<strong>source</strong> (le haut-parleur, la corde pincée) ; $\\lambda$ est la " +
              "<strong>conséquence</strong> des deux. Trois lignes, et la hiérarchie apparaît. " +
              "La formule n'est pas symétrique, même si son écriture le suggère.<br/><br/>" +
              "Administrer l'<strong>argument expérimental décisif</strong>, qui est à la portée " +
              "de tous : si les aigus allaient plus vite que les graves, un orchestre entendu " +
              "depuis le fond d'une salle arriverait en désordre — les flûtes avant les " +
              "contrebasses. On entendrait de la bouillie. Ce n'est pas le cas, donc toutes les " +
              "fréquences voyagent à la même vitesse dans l'air.<br/><br/>" +
              "Distinguer enfin ce qui change VRAIMENT la célérité, pour que la règle ne paraisse " +
              "pas arbitraire : le <strong>milieu</strong>, et lui seul. Le son va à $340$ m/s " +
              "dans l'air, $1\\,500$ m/s dans l'eau, $5\\,000$ m/s dans l'acier. Un facteur " +
              "quinze entre l'air et l'acier, alors qu'aucune fréquence n'y change quoi que ce " +
              "soit.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 8) : l'exercice 8 donne v = 1500 m/s dans
         l'eau et f = 250 Hz, réponse lambda = 6 m. Ce tirage est choisi parmi
         les six du moule B pour une raison qui n'apparaît qu'en le comparant :
         l'exercice 4 tire la MÊME célérité de 1500 m/s dans l'eau, mais avec
         f = 800 Hz, et donne lambda = 1,88 m. Deux fréquences dans un rapport
         de plus de trois, une longueur d'onde divisée d'autant… et la célérité
         rigoureusement identique, 1500 m/s dans les deux énoncés. La paire
         4 / 8 démontre donc l'indépendance de v par rapport à f sans qu'on ait
         un mot à ajouter. Le même effet se lit sur la paire 6 / 12 (corde,
         120 m/s, f = 200 puis 500 Hz) et sur la paire 2 / 10 (air, 340 m/s,
         f = 50 puis 1000 Hz). Trois paires exploitables : c'est le point fort
         du tirage de ce chapitre, et il mérite d'être signalé à l'enseignant. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Confondre la période temporelle et la longueur d'onde",
      eleve: "Devant un graphique, l'élève lit une longueur d'onde sur un enregistrement " +
             "temporel, ou annonce une période en mètres. Il écrit $\\lambda = T$, ou répond " +
             "« $\\lambda = 0{,}002$ s » à une question sur la longueur d'onde.",
      cause: "Les deux grandeurs sont les <strong>deux périodicités de la même onde</strong> et " +
             "elles sont liées par $\\lambda = vT$, ce qui les rend presque interchangeables dans " +
             "l'esprit de l'élève. Le vocabulaire y contribue lourdement : « longueur d'onde » " +
             "contient le mot <em>longueur</em>, mais « période » ne contient aucun mot qui " +
             "signale le temps. Et les graphiques, qui sont le seul lieu où la distinction " +
             "devient tangible, se ressemblent trait pour trait — deux sinusoïdes identiques dont " +
             "seul l'axe des abscisses diffère.",
      remede: "Faire lire l'<strong>axe des abscisses avant la courbe</strong>, " +
              "systématiquement et à voix haute : « l'axe est en secondes, donc ce que je mesure " +
              "est une <strong>période</strong> » ou « l'axe est en mètres, donc ce que je mesure " +
              "est une <strong>longueur d'onde</strong> ». La règle ne demande aucune mémoire et " +
              "elle ne tombe jamais en défaut.<br/><br/>" +
              "Distinguer les deux <strong>expériences</strong> qui produisent ces deux " +
              "graphiques, ce qui donne du sens à l'opposition : la période se mesure en " +
              "<strong>restant à un endroit</strong> et en regardant passer le temps (un " +
              "microphone fixe) ; la longueur d'onde se mesure en <strong>photographiant tout le " +
              "milieu à un instant donné</strong> (une photo de la surface de l'eau). Un point " +
              "et une durée d'un côté ; un instant et une étendue de l'autre.<br/><br/>" +
              "Contrôler enfin par les <strong>unités</strong>, qui tranchent toujours : $T$ en " +
              "secondes, $\\lambda$ en mètres, $v$ en mètres par seconde. La relation " +
              "$\\lambda = v \\times T$ se vérifie d'elle-même — des mètres par seconde " +
              "multipliés par des secondes donnent des mètres. Un élève qui écrit " +
              "$\\lambda = T$ produit une égalité entre des mètres et des secondes, ce qui n'a " +
              "aucun sens.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         v = 340 m/s et f = 50 Hz, réponse lambda = 6,8 m. Le tirage est choisi
         parmi les six du moule B pour une raison d'ordre de grandeur : à 50 Hz
         la période vaut 0,02 s et la longueur d'onde 6,8 m, soit deux nombres
         séparés par un facteur 340 et qu'aucune confusion ne peut plus
         rapprocher. C'est le contraste maximal du chapitre — sur l'exercice 10
         (1000 Hz, lambda = 0,34 m, T = 0,001 s) les deux nombres sont petits
         tous les deux, et sur l'exercice 12 (corde, 500 Hz, lambda = 0,24 m,
         T = 0,002 s) plus encore. Faire calculer T EN PLUS de lambda sur
         l'exercice 2, puis écrire les deux avec leurs unités côte à côte
         (0,02 s et 6,8 m), suffit à installer la distinction : ce sont deux
         nombres, deux unités, deux mesures — jamais la même chose. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre le retard entre deux points et la durée du trajet total",
      eleve: "Pour deux microphones distants de $8{,}5$ m sur le trajet d'un son émis à $50$ m, " +
             "l'élève calcule $50/340$ au lieu de $8{,}5/340$. Ou bien il additionne les deux " +
             "distances. Il applique $\\tau = d/v$ en prenant pour $d$ la distance à la source " +
             "plutôt que la distance <strong>entre les deux points</strong>.",
      cause: "La lettre $d$ est ambiguë dans un énoncé qui comporte plusieurs distances, et le " +
             "mot « retard » n'aide pas : il évoque spontanément le retard par rapport à " +
             "l'<strong>émission</strong>, alors qu'il désigne ici le décalage entre " +
             "<strong>deux récepteurs</strong>. L'élève applique une formule correcte à la " +
             "mauvaise grandeur, ce qui est l'erreur la plus difficile à détecter : rien dans le " +
             "calcul ne cloche.",
      remede: "Faire <strong>tracer la situation</strong> avant tout calcul, avec les trois " +
              "repères nommés : la source, le point 1, le point 2. Puis faire fléchir la flèche " +
              "de $d$ entre les deux <strong>points</strong>, jamais depuis la source. Un schéma " +
              "annoté rend l'erreur impossible ; une ligne de calcul ne la signale " +
              "jamais.<br/><br/>" +
              "Reformuler la définition dans les termes de l'expérience, ce qui lève " +
              "l'ambiguïté : le retard, c'est le temps que met la perturbation pour aller " +
              "<strong>du premier point au second</strong>. C'est une durée de trajet " +
              "<strong>entre deux récepteurs</strong>, pas depuis la source. La source peut être " +
              "à n'importe quelle distance, cela ne change rien au retard entre les " +
              "deux.<br/><br/>" +
              "Utiliser enfin l'application concrète qui donne tout son sens à la notion, et qui " +
              "est la raison d'être du chapitre : c'est exactement ainsi qu'on " +
              "<strong>localise</strong> un orage (l'écart entre l'éclair et le tonnerre), un " +
              "séisme, ou un banc de poissons au sonar. On mesure un retard entre deux capteurs " +
              "pour en déduire une position. L'élève qui voit à quoi cela sert cesse de confondre " +
              "les deux distances.",
      /* Volontairement SANS renvoi, et vérifié : les douze énoncés du moule A
         (exercices 1, 3, 5, 7, 9, 11 et leurs six suppléments) donnent TOUS
         une distance unique, explicitement présentée comme séparant les deux
         points du milieu (« deux points du milieu sont distants de
         d = 76,0 m »). Aucun n'introduit de source, aucun ne comporte deux
         distances entre lesquelles il faudrait choisir. Le générateur écarte
         donc l'erreur par construction : aucun exercice ne peut la déclencher,
         et pointer l'un d'eux enverrait l'enseignant vers un énoncé où il n'y
         a rien à discriminer. L'évaluation ne la travaille pas davantage (sa
         question 1 est du même moule). Le travail est à construire, et c'est
         court : reprendre l'exercice 7 (air, 340 m/s, d = 255,1 m,
         tau = 0,75 s) et ajouter « la source est à 400 m du premier
         microphone » — la donnée est alors inutile, et c'est tout l'exercice. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $v = 1500$ m/s, $d = 45$ m : calculer $\tau$. La relation est donnée
          au cours et s'applique dans le sens direct : exécution, donc
          « réaliser ».
     Q2 — un ruban attaché à une corde parcourue par une onde : que fait-il ?
          Rien à calculer ; il faut juger quatre descriptions concurrentes du
          même phénomène et écarter « est transporté avec l'onde », qui est
          l'erreur 1 de cette fiche : « valider ».
     Q3 — $f = 250$ Hz, $v = 340$ m/s : calculer $\lambda$. Sens direct de
          $\lambda = v/f$, tel que le cours l'écrit : « réaliser ».
     Q4 — le son dans l'air est une onde longitudinale ou transversale ?
          Restitution d'une définition du cours, appliquée à l'exemple
          canonique : « s'approprier ».
     Q5 — $\lambda = 2{,}0$ m et $T = 0{,}25$ s : calculer $v$. La relation du
          cours est $\lambda = v \times T$ ; il faut la RENVERSER pour isoler
          $v$. Le renversement est modeste mais réel, et c'est la seule
          question du chapitre où la relation n'est pas employée dans le sens
          où elle est écrite : « analyser ».

     Répartition honnête et sans surprise pour un chapitre dont les deux moules
     d'exercice sont deux applications directes de formule. À noter pour la
     composition d'un devoir : l'évaluation ne comporte AUCUNE question de
     lecture graphique, alors que c'est le geste expérimental central du
     chapitre — c'est la même absence que dans les exercices, signalée dans la
     `note`. « Communiquer » n'est pas mobilisé : aucune des cinq questions ne
     demande de produire une explication rédigée. */
  competences: {
    evaluation: ["réaliser", "valider", "réaliser", "s'approprier", "analyser"]
  }
};
