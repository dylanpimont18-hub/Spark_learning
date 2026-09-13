/* =========================================================
   Spark Learning – js/data/prof/3e/3e-arithmetique.prof.js
   Fiche professeur du chapitre « Arithmétique » (troisième), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni
   dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit,
   au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote du niveau
   (3e-thales.prof.js) : mêmes conventions, même niveau de détail, mêmes deux
   règles éditoriales.

   CE QUE LA TROISIÈME CHANGE. C'est l'année du brevet, et la démonstration y
   devient un attendu et non un ornement. L'arithmétique en offre l'occasion la
   plus nette de toute l'année : c'est le seul chapitre où l'élève rencontre un
   théorème d'existence et d'unicité, et où « justifier qu'un nombre est
   premier » demande un raisonnement complet et non un calcul. L'erreur 4 de
   cette fiche porte exactement là-dessus.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève, vouvoiement neutre de
   l'enseignant dans les fiches.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-arithmetique"] = {

  /* AUCUN prérequis parmi les chapitres de troisième, et c'est un choix
     assumé (2026-09-13). L'arithmétique ne mobilise que la division
     euclidienne et les tables, toutes deux acquises au cycle 3 : elle
     n'attend donc rien du reste de l'année, et c'est précisément ce qui en
     fait un chapitre de rentrée.

     On aurait pu y accrocher les fractions de cinquième, puisque le PGCD sert
     à rendre une fraction irréductible. Mais la contrainte du champ `prerequis`
     porte sur les chapitres DE CE NIVEAU (voir `validerPrerequis`,
     scripts/manuel/prof.js) : une dépendance vers une autre année ne s'y écrit
     pas, et elle est signalée dans la note ci-dessous à la place. */
  prerequis: [],

  /* Rang conseillé (2026-09-13) : rang 1, c'est-à-dire l'ouverture de l'année.
     Trois raisons convergentes.

     D'abord le chapitre ne dépend de rien, ce qui est rare et précieux en
     septembre, quand les acquis de l'année précédente sont encore instables.

     Ensuite il réactive la division euclidienne et les tables sans le dire,
     sous couvert d'une notion nouvelle : l'élève révise en croyant découvrir,
     ce qui vaut mieux qu'une semaine de révisions annoncées comme telles.

     Enfin le PGCD rend service tout de suite après : simplifier une fraction
     est le geste qui revient dans tous les chapitres de calcul de l'année, et
     l'avoir outillé dès la première semaine évite d'y revenir dix fois.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 1,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Déterminer si un entier est premier, et décomposer un entier en produit de facteurs premiers",
    "Calculer le PGCD de deux entiers, par la décomposition en facteurs premiers ou par l'algorithme d'Euclide",
    "Rendre une fraction irréductible en simplifiant par le PGCD du numérateur et du dénominateur",
    "Modéliser une situation de partage équitable ou de synchronisation de cycles par un calcul de PGCD ou de PPCM",
    "Rédiger et justifier un raisonnement arithmétique simple, en particulier pour établir qu'un nombre est premier"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Sont pleinement au programme de troisième : les <strong>nombres premiers</strong>, la " +
        "<strong>décomposition en facteurs premiers</strong>, le <strong>PGCD</strong> et la " +
        "simplification de fractions qui en découle. C'est le cœur du chapitre, et c'est ce que " +
        "le brevet évalue.<br/><br/>" +
        "Deux contenus vont au-delà. D'abord le <strong>PPCM</strong> : il n'est pas un attendu du " +
        "cycle 4, où l'on ne nomme que le PGCD. Il figure ici parce qu'il donne au chapitre sa " +
        "symétrie et parce qu'il éclaire la décomposition en facteurs premiers — décomposer sert " +
        "à lire les DEUX. Traitez-le en enrichissement, et n'en faites pas une exigence " +
        "d'évaluation : la question 4 de l'évaluation du chapitre est, de ce point de vue, un " +
        "bonus plus qu'un attendu.<br/><br/>" +
        "Ensuite la <strong>relation $\\text{PGCD}(a,b) \\times \\text{PPCM}(a,b) = a \\times b$</strong>, " +
        "qui relève du lycée. Elle est belle et vérifiable sur des exemples, ce qui en fait une " +
        "excellente activité de recherche ; elle ne peut pas être exigée.<br/><br/>" +
        "Un mot enfin sur l'<strong>algorithme d'Euclide</strong> : il est au programme, et il " +
        "constitue le pont naturel vers le chapitre d'algorithmique de l'année. Le faire " +
        "programmer en Scratch ou en Python après l'avoir posé à la main donne au même objet " +
        "deux éclairages, et c'est du temps gagné sur les deux chapitres.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre.

     UNE DIFFICULTÉ PROPRE À CE CHAPITRE, à connaître avant de lire la suite :
     le générateur d'exercices ne produit qu'UNE SEULE tâche, « calculer le
     PGCD de deux entiers », habillée de six décors différents. Vérifié sur
     douze tirages consécutifs (2026-09-13) : douze énoncés, une seule tâche.
     Aucun exercice du chapitre ne porte donc sur la primalité, sur la
     décomposition, ni sur le PPCM. Trois des cinq remédiations ci-dessous sont
     par conséquent délibérément sans renvoi, et le disent. */
  erreurs: [
    {
      titre: "Confondre le PGCD et le PPCM dans un problème",
      eleve: "Pour « un fleuriste dispose de $12$ roses et $8$ tulipes et veut composer des bouquets " +
             "identiques sans reste », l'élève répond $24$ — le PPCM — alors que la question demande " +
             "le nombre maximal de bouquets, donc le PGCD, c'est-à-dire $4$.",
      cause: "Les deux sigles se ressemblent, les deux méthodes passent par la décomposition, et " +
             "l'énoncé ne contient jamais le mot « PGCD ». L'élève choisit donc au hasard entre deux " +
             "objets qu'il sait tous deux calculer. Ce n'est pas un défaut de calcul : c'est que rien " +
             "ne lui a appris à lire dans l'énoncé lequel des deux est demandé.",
      remede: "Donner un critère de lecture qui tienne en une question, et l'écrire au tableau : " +
              "<strong>« est-ce que je découpe, ou est-ce que j'attends ? »</strong>.<br/><br/>" +
              "Si on découpe une quantité existante en parts égales — des bouquets, des sachets, des " +
              "carreaux, des morceaux de ruban — la réponse est plus petite que les données, donc " +
              "c'est le <strong>PGCD</strong>. Si on attend que deux cycles se retrouvent — deux bus " +
              "qui repassent, deux engrenages qui reviennent en face — la réponse est plus grande que " +
              "les données, donc c'est le <strong>PPCM</strong>.<br/><br/>" +
              "Le contrôle de grandeur suffit alors à trancher sans rien calculer : un nombre de " +
              "bouquets supérieur au nombre de roses est impossible, et l'élève le voit seul.<br/><br/>" +
              "Un geste de classe rapide et efficace : projeter cinq énoncés courts, sans jamais " +
              "demander de calcul, et faire lever la main gauche pour « PGCD », la droite pour " +
              "« PPCM ». Cinq minutes, aucune copie à ramasser, et le tri se fait.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 6 est « un fleuriste veut confectionner des bouquets
         identiques à partir de 12 roses et 8 tulipes, sans qu'il ne reste
         aucune fleur ». C'est le seul tirage du chapitre où les deux nombres
         sont dans le rapport le plus tentant pour l'erreur : le PGCD vaut 4,
         le PPCM 24, et 24 dépasse les 12 roses disponibles. Le contrôle de
         grandeur que le remède demande d'installer tranche donc ici sans
         aucun calcul, ce qui en fait le support idéal de la remédiation. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Compter $1$ parmi les nombres premiers",
      eleve: "Invité à décomposer $18$, l'élève écrit $18 = 1 \\times 2 \\times 3 \\times 3$, et ajoute " +
             "volontiers que « $1$ est premier, il n'est divisible que par lui-même ».",
      cause: "La définition est mémorisée sous une forme abrégée — « divisible seulement par $1$ et " +
             "par lui-même » — dans laquelle $1$ passe sans difficulté, puisque pour lui les deux " +
             "diviseurs annoncés n'en font qu'un. L'élève applique correctement une définition qu'il a " +
             "correctement retenue, mais amputée du mot qui décide : <strong>deux diviseurs " +
             "distincts</strong>.",
      remede: "Ne pas répéter la définition plus fort : la reformuler en comptant. Écrire au tableau la " +
              "liste des diviseurs de quelques nombres, et faire compter :<br/><br/>" +
              "$1$ a UN diviseur ; $7$ en a DEUX ; $12$ en a SIX. Un nombre premier est celui qui en a " +
              "exactement <strong>deux</strong>. Sous cette forme, $1$ est écarté par le comptage et " +
              "non par une règle à croire.<br/><br/>" +
              "Puis donner la vraie raison, car elle intéresse les élèves et se comprend en trois " +
              "lignes : si $1$ était premier, on pourrait écrire $18 = 2 \\times 3 \\times 3$, ou " +
              "$18 = 1 \\times 2 \\times 3 \\times 3$, ou $1 \\times 1 \\times 2 \\times 3 \\times 3$, " +
              "et ainsi de suite sans fin. La décomposition ne serait plus <strong>unique</strong>, et " +
              "c'est son unicité qui fait toute sa valeur. Exclure $1$ n'est pas une coquetterie de " +
              "mathématicien, c'est ce qui rend le théorème vrai.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur : le générateur ne produit que des " +
              "calculs de PGCD, et la primalité n'y apparaît jamais. L'entraînement utile est du côté " +
              "du quiz, dont deux questions sur trois portent précisément là-dessus, et d'un crible " +
              "d'Ératosthène jusqu'à $100$ fait en classe — où l'élève constate de ses yeux que $1$ " +
              "n'est ni rayé ni entouré, parce qu'il n'est ni l'un ni l'autre.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les douze tirages du générateur sont tous des calculs de
         PGCD (vérifié le 2026-09-13), et pointer l'un d'eux pour une erreur de
         définition enverrait l'enseignant vers une remédiation qui n'en est
         pas une. Le remède dit explicitement où chercher l'entraînement
         utile, comme le font déjà six remédiations de la sixième et une de la
         quatrième. */
      exercice: null
    },
    {
      titre: "Arrêter l'algorithme d'Euclide une division trop tôt",
      eleve: "Pour $\\text{PGCD}(12, 8)$, l'élève écrit $12 = 8 \\times 1 + 4$ puis conclut " +
             "« le PGCD est $4$… non, $8$ ». Ou bien, pour $\\text{PGCD}(84, 56)$, il s'arrête à " +
             "$84 = 56 \\times 1 + 28$ et annonce $56$.",
      cause: "L'algorithme comporte deux nombres qui changent de rôle à chaque ligne, et l'élève ne " +
             "sait pas lequel des trois — dividende, diviseur, reste — il devra lire à la fin. Il " +
             "s'arrête donc au premier moment où un nombre lui semble candidat. La règle « le dernier " +
             "reste non nul » est difficile à tenir parce qu'elle désigne une ligne qui n'existe pas " +
             "encore au moment où on la lit.",
      remede: "Imposer une <strong>mise en page en colonnes</strong>, la même pour tous, tenue jusqu'à " +
              "la ligne de reste nul. Trois colonnes : le nombre divisé, le diviseur, le reste. On " +
              "recopie le diviseur et le reste sur la ligne suivante, et on s'arrête quand la colonne " +
              "de droite affiche $0$.<br/><br/>" +
              "La règle devient alors visuelle et non verbale : <strong>le PGCD est le nombre juste " +
              "au-dessus du $0$, dans la colonne du milieu</strong>. Il n'y a plus rien à retenir, il " +
              "y a un endroit à regarder.<br/><br/>" +
              "Ajouter systématiquement la vérification, qui coûte dix secondes et referme le doute : " +
              "le PGCD trouvé doit diviser les deux nombres de départ. Pour $28$ : " +
              "$84 = 28 \\times 3$ et $56 = 28 \\times 2$. Si l'une des deux divisions ne tombe pas " +
              "juste, l'algorithme a été arrêté trop tôt, et l'élève le sait avant de rendre.<br/><br/>" +
              "Un point de vigilance à connaître : quand le premier nombre est plus petit que le " +
              "second, la première division s'écrit $a = b \\times 0 + a$ et ne fait que les " +
              "échanger. C'est correct, mais déroutant. Dites-le avant, plutôt que de le corriger " +
              "vingt fois.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 9 est
         « un traiteur veut préparer des sachets identiques à partir de 12
         chocolats et 8 bonbons ». Sa solution imprimée commence par
         « $12 = 8 \times 1 + 4$ », donc une division à reste NON NUL : c'est
         le seul type de tirage du chapitre qui oblige réellement à enchaîner
         une seconde ligne, et donc le seul où l'erreur peut se produire.
         Dans les autres tirages, le premier nombre est plus petit que le
         second et la première ligne est un simple échange. L'exercice 6
         (12 roses et 8 tulipes) a la même structure et sert de second
         support si besoin. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Affirmer qu'un nombre est premier sans le justifier",
      eleve: "À la question « $83$ est-il premier ? », l'élève répond « oui » et s'arrête là. Ou bien " +
             "il écrit « $83$ est premier car il est impair », ou encore « car il ne finit ni par " +
             "$0$ ni par $5$ ».",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que le " +
             "résultat EST le travail. Or établir qu'un nombre est premier demande de démontrer une " +
             "<strong>absence</strong> — aucun diviseur —, ce qui ne peut pas se faire en exhibant un " +
             "exemple. C'est la première fois de sa scolarité qu'il rencontre ce type de preuve, et " +
             "rien ne l'y a préparé. Ce n'est pas de la négligence, c'est un contrat implicite qui a " +
             "changé sans qu'on le dise.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : une " +
              "justification de primalité tient en trois lignes, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. La borne</strong> : « $\\sqrt{83} \\approx 9{,}1$, il suffit donc de tester " +
              "les nombres premiers inférieurs à $9{,}1$ ».<br/><br/>" +
              "<strong>2. Les essais</strong> : « $83$ n'est divisible ni par $2$, ni par $3$, ni par " +
              "$5$, ni par $7$ ».<br/><br/>" +
              "<strong>3. La conclusion</strong> : « donc $83$ est premier ».<br/><br/>" +
              "La première ligne est celle qui manque toujours, et c'est pourtant elle qui fait la " +
              "démonstration : sans elle, la liste d'essais est arbitraire et ne prouve rien. " +
              "Justifiez-la une fois devant la classe — si $83 = a \\times b$ avec $a \\leq b$, alors " +
              "$a \\leq \\sqrt{83}$, sinon le produit dépasserait $83$ — puis exigez-la sans la " +
              "redémontrer.<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : distribuer une justification complète " +
              "et correcte, et demander de barrer tout ce qui pourrait être supprimé sans perdre de " +
              "points. Les élèves découvrent qu'on ne peut presque rien enlever, ce qu'aucun discours " +
              "sur la rigueur n'obtient aussi vite.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur : le générateur ne produit que " +
              "des calculs de PGCD, tâche à réponse numérique où aucune rédaction n'est demandée. " +
              "L'entraînement utile est la troisième question du quiz et la dernière question de " +
              "l'évaluation, à faire précéder d'une justification écrite au brouillon plutôt que " +
              "traitée comme un simple choix multiple.",
      /* Volontairement SANS renvoi, et pour deux raisons cumulées. D'abord
         aucun exercice du chapitre ne demande de rédiger quoi que ce soit :
         tous attendent un nombre. Ensuite le seul support du livre qui porte
         sur la primalité est la question 5 de l'ÉVALUATION, et une remédiation
         ne renvoie jamais vers l'évaluation notée — on remédie avant
         d'évaluer. Le remède indique donc comment utiliser ce support
         autrement, en amont et sans note. */
      exercice: null
    },
    {
      titre: "Simplifier une fraction par étapes et s'arrêter en chemin",
      eleve: "Pour rendre $\\dfrac{48}{72}$ irréductible, l'élève écrit " +
             "$\\dfrac{48}{72} = \\dfrac{24}{36} = \\dfrac{12}{18}$ et s'arrête, en annonçant que la " +
             "fraction est irréductible.",
      cause: "Simplifier par $2$ tant que c'est possible est une stratégie apprise au cycle 3 et " +
             "parfaitement légitime : elle fonctionne, simplement elle ne dit jamais quand s'arrêter. " +
             "L'élève cesse quand il ne « voit » plus de diviseur commun, ce qui dépend entièrement de " +
             "ce qu'il connaît de ses tables. Le PGCD est justement l'outil qui remplace ce flair par " +
             "un critère, mais il ne remplace rien tant que l'élève ne voit pas ce qu'il apporte.",
      remede: "Faire mesurer la différence plutôt que l'annoncer. Donner la même fraction à traiter " +
              "deux fois : à gauche en simplifiant pas à pas, à droite en divisant d'un seul coup par " +
              "le PGCD. Pour $\\dfrac{48}{72}$, la colonne de gauche prend trois ou quatre lignes et " +
              "s'arrête où elle veut ; celle de droite donne $\\dfrac{2}{3}$ en une ligne, puisque " +
              "$\\text{PGCD}(48, 72) = 24$.<br/><br/>" +
              "Puis énoncer le critère d'arrêt, qui est le vrai apport du chapitre : une fraction est " +
              "<strong>irréductible</strong> quand le PGCD de son numérateur et de son dénominateur " +
              "vaut $1$. Ce n'est plus « je ne vois plus rien », c'est un calcul qui répond par oui " +
              "ou par non.<br/><br/>" +
              "Un geste qui règle l'affaire durablement : exiger que toute simplification soit suivie " +
              "de la mention du PGCD trouvé. L'élève qui écrit $\\dfrac{12}{18}$ doit alors calculer " +
              "$\\text{PGCD}(12, 18) = 6$, et constate lui-même qu'il n'a pas fini.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur : le générateur ne produit que " +
              "des situations de partage, jamais de fraction à simplifier. L'entraînement utile se " +
              "trouve dans les chapitres de calcul fractionnaire, où la question revient à chaque " +
              "addition — ce qui est aussi la meilleure raison de placer l'arithmétique en début " +
              "d'année.",
      /* Volontairement SANS renvoi. Les douze tirages du générateur sont des
         problèmes de partage à réponse entière (vérifié le 2026-09-13) :
         aucune fraction n'y apparaît. Le seul support du livre portant sur la
         simplification est la question 3 de l'ÉVALUATION, qu'une remédiation
         ne peut pas viser. Le remède renvoie donc vers l'usage réel de la
         notion, qui est ailleurs dans l'année. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     L'évaluation du chapitre compte cinq questions, et quatre d'entre elles
     sont des applications directes : c'est la nature de l'arithmétique
     élémentaire, où presque tout se ramène à un calcul. Les compétences
     déclarées ci-dessous décrivent donc ce que les questions mobilisent
     RÉELLEMENT, sans enjoliver.

     Q1 (PGCD de 84 et 56 par l'algorithme d'Euclide) : la méthode est nommée
     dans l'énoncé, il n'y a rien à choisir. C'est « calculer ».
     Q2 (décomposition de 180, QCM) : les quatre propositions sont des
     écritures dont il faut décider laquelle respecte la définition — la
     réponse d, $4 \times 9 \times 5$, donne bien 180 mais n'est pas une
     décomposition en facteurs PREMIERS. Trancher demande de revenir à la
     définition, pas de calculer. C'est « raisonner ».
     Q3 (rendre 48/72 irréductible) : application du PGCD, « calculer ».
     Q4 (PPCM de 12 et 18) : application, « calculer ». Voir la note : cette
     question déborde du programme de l'année.
     Q5 (lequel de 91, 87, 83, 93 est premier) : il faut organiser une
     recherche — tester des diviseurs jusqu'à une borne, sur quatre nombres —
     sans qu'aucune méthode ne soit indiquée. C'est « chercher ».

     CONSTAT À ASSUMER : « modéliser », « représenter » et « communiquer » ne
     sont évaluées nulle part dans ce chapitre. La grille de compétences
     imprimera donc des colonnes vides pour lui. C'est un fait, et il vaut
     mieux le lire ici que le découvrir en remplissant la grille : la
     modélisation, elle, est massivement travaillée par les EXERCICES du
     chapitre, qui sont tous des situations concrètes à traduire en calcul de
     PGCD. Si vous voulez l'évaluer, prenez un de ces exercices en devoir
     plutôt que de renommer une étiquette ici. */
  competences: {
    /* UNE QUESTION A ÉTÉ RÉÉCRITE dans js/data/3e/3e-arithmetique.js le
       2026-09-13, parce que déclarer une compétence ne suffit pas : la
       question doit réellement la mobiliser. Les cinq questions étaient cinq
       tâches purement techniques, et « modéliser » n'était jamais évaluée dans
       ce chapitre — ce qui est d'autant plus gênant que l'arithmétique du
       collège ne vit, en pratique, que par ses problèmes de partage.

       Q3 demandait de rendre $\frac{48}{72}$ irréductible : un PGCD suivi
       d'une division, soit la deuxième application de l'algorithme d'Euclide
       dans la même évaluation, après une Q1 qui le nommait déjà. Elle pose
       maintenant une situation de bouquets où ni le mot « PGCD » ni le mot
       « diviseur » n'apparaissent : l'élève doit reconnaître que « des parts
       identiques, sans reste, et le plus grand nombre possible » EST la
       définition du PGCD. C'est « modéliser ».

       Q1 applique l'algorithme d'Euclide, qui est nommé : « calculer ».
       Q2 identifie une décomposition parmi quatre, donc conclut d'une
       propriété : « raisonner ».
       Q4 calcule un PPCM : « calculer ».
       Q5 demande de trouver le nombre premier parmi quatre, ce qui suppose de
       tester des divisibilités sans qu'aucune méthode soit indiquée :
       « chercher ». */
    evaluation: ["calculer", "raisonner", "modéliser", "calculer", "chercher"]
  }
};
