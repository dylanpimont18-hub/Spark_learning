/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-probas-conditionnelles.prof.js
   Fiche professeur du chapitre « Probabilités conditionnelles » (première),
   pour l'édition du professeur. JAMAIS chargée par le site : seul
   scripts/manuel/prof.js la lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote 1re-derivation.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-probas-conditionnelles"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU. Le chapitre visé doit
     avoir un rang conseillé STRICTEMENT INFÉRIEUR à celui-ci (rang 9).

     ch. 3 (information chiffrée, rang 1) : tout le chapitre manipule des
     pourcentages, des proportions et des sous-populations. L'élève qui n'a pas
     stabilisé « pourcentage de quoi ? » ne peut pas comprendre qu'une
     probabilité conditionnelle change de dénominateur — c'est exactement la
     même difficulté, un cran plus loin.

     Aucun autre prérequis n'est retenu. Ce chapitre est remarquablement
     autonome sur le plan technique : il ne demande que des multiplications et
     des divisions de décimaux. Sa difficulté est entièrement conceptuelle, et
     déclarer le second degré ou la dérivation serait un prérequis décoratif. */
  prerequis: [3],

  /* Rang conseillé (2026-09-14) : rang 9.

     Le LIVRE place ce chapitre en cinquième position, par rangement
     thématique. La progression conseillée le place en fin d'année, et pour une
     raison précise : il prépare directement les variables aléatoires et la loi
     binomiale (rang 10), qui en sont la suite immédiate — une épreuve de
     Bernoulli répétée n'a de sens qu'une fois l'indépendance installée.

     Le placer tôt serait par ailleurs risqué : c'est le chapitre où
     l'intuition trompe le plus, et il gagne à être traité quand la classe a
     déjà pris l'habitude de se méfier de ses évidences. */
  rangConseille: 9,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Probabilités ».
  attendus: [
    "Construire un arbre pondéré et l'associer à une situation donnée",
    "Calculer une probabilité conditionnelle et l'interpréter comme un changement de population de référence",
    "Utiliser la formule des probabilités totales pour calculer la probabilité d'un événement",
    "Reconnaître deux événements indépendants et le vérifier par le calcul",
    "Passer d'un arbre pondéré à un tableau croisé d'effectifs, et réciproquement"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La probabilité conditionnelle, l'arbre pondéré, la formule des probabilités totales et " +
        "l'indépendance sont au programme de première.<br/><br/>" +
        "<strong>Deux points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>formule de Bayes</strong>, nommée comme telle dans les définitions et " +
        "mobilisée par une tâche de la banque ainsi que par le problème du test médical. Elle n'est " +
        "pas exigible en première sous ce nom : le programme demande seulement de savoir calculer " +
        "$P_B(A)$ à partir d'un arbre, ce qui revient au même geste sans la formule. On gagnera à la " +
        "faire pratiquer comme un simple quotient lu sur l'arbre — « ce chemin-là, sur tous les " +
        "chemins qui aboutissent au même endroit » — plutôt qu'à la faire apprendre par cœur. La " +
        "nommer reste utile, parce que l'élève la rencontrera en terminale.<br/><br/>" +
        "Ensuite la <strong>notation</strong>. Le cours emploie $P(A|B)$, courante dans les " +
        "ouvrages d'enseignement supérieur, alors que le programme français de première écrit " +
        "$P_B(A)$. Les deux écritures coexistent dans ce chapitre, l'énoncé des exercices employant " +
        "plutôt la seconde. Ce n'est pas une incohérence à corriger — l'élève rencontrera les deux — " +
        "mais c'est à signaler explicitement en classe, faute de quoi certains croiront à deux " +
        "notions différentes.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-14), APRÈS l'élargissement de la banque : un
     renvoi écrit contre l'ancien tirage aurait été décalé par les nouveaux
     rangs.

     DEUX RÈGLES ÉDITORIALES respectées sans exception : une remédiation ne
     renvoie jamais vers l'évaluation notée, et un renvoi faux est pire qu'un
     renvoi absent. */
  erreurs: [
    {
      titre: "Inverser le conditionnement",
      eleve: "Sachant qu'un test détecte $95\\%$ des malades, l'élève conclut qu'« un test positif " +
             "signifie $95\\%$ de risque d'être malade », alors que la réponse est d'environ " +
             "$16\\%$.",
      cause: "C'est l'erreur du procureur, et elle n'est pas une étourderie : la langue courante " +
             "ne distingue pas les deux énoncés. « Le test est fiable à $95\\%$ » se comprend " +
             "spontanément comme une propriété du test, valable dans les deux sens. Il manque à " +
             "l'élève l'idée qu'une probabilité conditionnelle n'est pas une propriété d'un objet, " +
             "mais un rapport entre DEUX populations — et que ces deux populations n'ont aucune " +
             "raison d'avoir la même taille.",
      remede: "Ne jamais commencer par la formule de Bayes : elle donne le bon résultat sans " +
              "dissiper l'illusion, et l'élève retombe dans l'erreur dès qu'il raisonne sans " +
              "écrire.<br/><br/>" +
              "Passer par les <strong>effectifs</strong>, sur une population de $1000$. Sur $1000$ " +
              "personnes, $10$ sont malades et $9$ d'entre elles sont détectées ; mais parmi les " +
              "$990$ personnes saines, $50$ sont positives à tort. L'élève compte alors $59$ tests " +
              "positifs pour $9$ vrais malades, et il n'y a plus rien à démontrer — la réponse est " +
              "sous ses yeux, en nombres entiers.<br/><br/>" +
              "Le schéma « Même numérateur, deux dénominateurs » sert ensuite à fixer le " +
              "mécanisme : les deux barres y portent la <strong>même</strong> portion colorée, et " +
              "seule la barre de référence change. Faire verbaliser : « sachant quoi ? », c'est-à-dire " +
              "« sur quelle barre je me place ? ».<br/><br/>" +
              "Le « Découvrir » du chapitre est construit sur cette même expérience, et l'élève y " +
              "est invité à parier avant de savoir : c'est ce pari, plus que la correction, qui rend " +
              "le résultat mémorable.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 9 donne
         justement une maladie rare (1 %) avec un test à 95 %, et demande la
         probabilité d'être malade sachant le test positif. L'élève qui inverse
         répond 0,95 ; la bonne réponse est bien plus basse, et l'écart est trop
         grand pour passer pour une erreur d'arrondi. C'est la tâche « bayes »,
         ajoutée le 2026-09-14 : elle n'existait pas dans la banque d'origine,
         qui ne tirait qu'une seule tâche. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Diviser par la mauvaise population",
      eleve: "Devant un tableau croisé, l'élève calcule une probabilité conditionnelle en divisant " +
             "par l'effectif TOTAL au lieu du total de la ligne ou de la colonne concernée.",
      cause: "Depuis la classe de troisième, toute probabilité se calcule en divisant par l'effectif " +
             "total : c'est même la définition qu'on lui a donnée. Le mot « sachant » ne lui apparaît " +
             "pas comme une instruction de calcul, mais comme une précision de contexte — quelque " +
             "chose qui décrit la situation sans changer l'opération. L'élève n'applique pas mal une " +
             "règle : il applique la seule qu'il connaisse.",
      remede: "Faire entourer physiquement, au crayon, la population de référence sur le tableau " +
              "AVANT tout calcul. Tant que ce geste n'est pas automatique, le calcul se fait sur la " +
              "mauvaise base sans que rien ne l'indique.<br/><br/>" +
              "Faire ensuite calculer, sur un même tableau, les trois nombres $P(A \\cap B)$, " +
              "$P_A(B)$ et $P_B(A)$, avec le <strong>même</strong> numérateur à chaque fois et trois " +
              "dénominateurs différents. Les trois résultats diffèrent, et c'est en les voyant " +
              "coexister que l'élève comprend que le dénominateur porte toute l'information.<br/><br/>" +
              "Le schéma « Le tableau croisé redonne exactement l'arbre » est utile ici : les totaux " +
              "de ligne y sont explicitement identifiés aux nœuds de l'arbre, ce qui donne au " +
              "dénominateur un sens et non un rang dans une formule.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 donne quatre
         effectifs et demande une probabilité « parmi les demi-pensionnaires ».
         L'élève qui divise par l'effectif du lycée entier obtient un nombre
         nettement trop petit, et l'énoncé ne lui souffle pas le dénominateur :
         il doit le construire lui-même en additionnant deux cases. C'est la
         tâche « tableau », ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre indépendant et incompatible",
      eleve: "Interrogé sur deux événements indépendants, l'élève affirme qu'« ils ne peuvent pas se " +
             "produire en même temps », et en déduit $P(A \\cap B) = 0$.",
      cause: "Les deux mots disent, dans la langue courante, à peu près la même chose : deux choses " +
             "indépendantes sont deux choses qui n'ont rien à voir, donc qui ne vont pas ensemble. " +
             "Le vocabulaire mathématique prend ici le contre-pied exact de l'usage — deux " +
             "événements indépendants se produisent au contraire très souvent ensemble, avec une " +
             "probabilité qui est justement le produit. L'obstacle est lexical avant d'être " +
             "mathématique.",
      remede: "Prendre un exemple où l'élève ne peut pas se tromper : « il pleut » et « je tire un as " +
              "dans un jeu de cartes ». Les deux sont manifestement indépendants, et il est " +
              "manifestement possible qu'ils se produisent tous les deux. L'affirmation " +
              "$P(A \\cap B) = 0$ tombe d'elle-même.<br/><br/>" +
              "Opposer ensuite explicitement les deux mots, au tableau, dans deux colonnes : " +
              "incompatibles veut dire $P(A \\cap B) = 0$, indépendants veut dire " +
              "$P(A \\cap B) = P(A) \\times P(B)$. Faire remarquer que deux événements de " +
              "probabilité non nulle ne peuvent pas être les deux à la fois — ce qui est une bonne " +
              "petite démonstration, et qui ancre la différence mieux qu'une définition.<br/><br/>" +
              "Le schéma « L'indépendance se voit sur la découpe » sert de support : dans les deux " +
              "carrés, la zone colorée n'est jamais vide, et sa note le dit explicitement.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 donne
         P(A)=0,5, P(B)=0,5 et P(A inter B)=0,25, et demande si les événements
         sont indépendants. La réponse est OUI alors que l'intersection est non
         nulle : l'élève qui croit qu'indépendant signifie incompatible répond
         non, et se trompe. La tâche tire aléatoirement des cas indépendants et
         des cas dépendants, pour qu'on ne puisse pas répondre sans calculer. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Additionner le long d'un chemin",
      eleve: "Pour un chemin d'arbre portant $0{,}4$ puis $0{,}25$, l'élève annonce $0{,}65$ au lieu " +
             "de $0{,}1$.",
      cause: "L'arbre ressemble à un parcours, et parcourir deux étapes s'additionne naturellement — " +
             "comme des distances. Rien dans le dessin ne dit que l'opération est une " +
             "multiplication. Par ailleurs l'élève a bien retenu qu'on additionne quelque part sur " +
             "un arbre, et c'est vrai : mais on additionne ENTRE les chemins, pas LE LONG d'un " +
             "chemin. Les deux règles se ressemblent trop pour rester distinctes sans un critère.",
      remede: "Donner un critère de taille plutôt qu'une règle de plus : le résultat d'un chemin est " +
              "toujours <strong>plus petit</strong> que chacune des probabilités qu'il porte, " +
              "puisqu'on restreint deux fois de suite. Un élève qui trouve $0{,}65$ à partir de " +
              "$0{,}4$ et $0{,}25$ peut donc rejeter sa réponse sans savoir la bonne, ce qui est " +
              "exactement ce qu'on cherche.<br/><br/>" +
              "Revenir ensuite aux effectifs, qui rendent la multiplication évidente : sur $100$ " +
              "personnes, $40$ franchissent la première étape, et un quart d'entre elles, soit " +
              "$10$, franchissent la seconde. Personne ne propose $65$ en comptant des " +
              "personnes.<br/><br/>" +
              "Formuler enfin la distinction en une phrase à faire répéter : « le long d'un chemin " +
              "je multiplie, entre les chemins j'additionne ».",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 12 donne
         directement les deux branches d'un même chemin (0,4 puis 0,25) et
         demande la probabilité que les deux se produisent. L'élève qui
         additionne obtient 0,65, soit une probabilité SUPÉRIEURE à celle de la
         première étape seule — ce qui est impossible et se repère par le seul
         critère de taille donné dans le remède. C'est la tâche « intersection »,
         ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 12 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions. Référentiel des MATHÉMATIQUES uniquement (voir REFERENTIELS
     dans scripts/manuel/prof.js) : chercher, modéliser, représenter, raisonner,
     calculer, communiquer. Une étiquette hors liste est refusée à la
     validation.

     Q1 calculer P(A|B) à partir de P(A inter B) et P(B) : application directe
        de la définition, donc « calculer ».
     Q2 tester l'indépendance de deux événements : l'élève doit comparer deux
        nombres qu'il calcule lui-même, puis CONCLURE. Aucune formule ne donne
        la réponse, c'est une décision argumentée. C'est « raisonner ».
     Q3 traduire « parmi ceux qui font de l'anglais, 30 % font de l'espagnol »
        en une multiplication : l'énoncé est en français courant et ne nomme
        aucune opération. Traduire la situation en écriture mathématique est du
        « modéliser ».
     Q4 tirage avec remise, deux boules rouges : application de la formule des
        événements indépendants, donc « calculer ».
     Q5 formule des probabilités totales : application directe de la formule du
        cours, donc « calculer ».

     TROIS « calculer » sur cinq questions, soit 60 % pour ce seul chapitre.
     C'est assumé et ce n'est PAS un déséquilibre du niveau : le plafond de
     35 % porte sur l'ensemble des cinquante questions des dix chapitres, et
     ce chapitre est compensé par les chapitres géométriques, qui portent
     « représenter » et « communiquer ». L'équilibre se mesure sur le niveau
     entier, jamais chapitre par chapitre — le forcer ici obligerait à
     réécrire des énoncés qui sont bons.

     « Chercher », « représenter » et « communiquer » ne sont pas déclarées
     ici : aucune des cinq questions ne demande d'explorer une piste sans
     méthode donnée, de lire une figure, ni de rédiger une explication.
     L'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "modéliser", "calculer", "calculer"]
  }
};
