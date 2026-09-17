/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-equations.prof.js
   Fiche professeur du chapitre « Équations & Systèmes » (remise à niveau BTS),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 1. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - équation du 1er degré $ax + b = 0$        : exercices 4 et 8 ;
     - système $3x + 2y = c$ / $x + y = d$       : exercices 2 et 7 ;
     - système $x + y = s$ / $x - y = d$         : exercices 6 et 10 ;
     - discriminant seul, à calculer             : exercices 5 et 12 ;
     - plus grande racine d'un trinôme unitaire  : exercices 1 et 11 ;
     - point de fonctionnement, deux droites     : exercices 3 et 9.
   Deux remarques que cette liste impose. D'abord, les deux moules de second
   degré (5/12 et 1/11) ont TOUS un discriminant positif et des racines
   entières : aucun exercice numéroté ne présente $\Delta = 0$ ni $\Delta < 0$,
   alors que le cours (D2, D4) en fait le cœur de la théorie. Ensuite, la
   « solution physiquement impossible » annoncée par le piège du cours
   n'apparaît nulle part dans les tirages — les racines sont toutes positives.
   Les deux faits sont dits dans la `note`.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-equations"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 1 (Calcul littéral & isolation de l'inconnue) : RETENU, et c'est le
     seul. Résoudre $4x - 24 = 0$, c'est exactement le geste du chapitre 1 —
     opérer identiquement sur les deux membres — appliqué à une inconnue
     numérique au lieu d'une lettre à isoler. Plus décisif encore : la méthode
     par combinaison des systèmes (D3, et les quatre exercices 2, 6, 7, 10)
     suppose qu'on sache multiplier une équation entière par un coefficient
     sans casser l'égalité, ce que seul le chapitre 1 installe. Un stagiaire
     qui n'a pas ce geste ne résout aucun des douze exercices, pas même le
     plus simple.

     Candidats examinés et ÉCARTÉS :
     - ch. 5 (Fonctions & lecture graphique) : très tentant, parce que les
       exercices 3 et 9 cherchent un « point de fonctionnement », c'est-à-dire
       l'intersection de deux droites, et que le chapitre 5 enseigne
       précisément à lire une intersection sur un graphique. Mais l'énoncé
       fournit les deux équations et ne demande aucune lecture graphique : le
       travail est purement algébrique (poser $H_{pompe} = H_{réseau}$, isoler
       $Q$). Le lien est thématique, pas opératoire. Écarté — mais c'est le
       candidat le plus défendable, et traiter les deux ensemble éclaire les
       deux.
     - ch. 4 (Puissances) : aucun exercice numéroté ne contient de puissance
       de dix ni de préfixe. Les nombres sont entiers ou à une décimale.
       Écarté sans hésitation.
     Les autres chapitres n'ont aucun lien. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé de septembre à juin — c'est
     dit dans la `note`, qui est imprimée.

     Le rang 2 place ce chapitre juste après le calcul littéral (rang 1), ce
     qu'exige son prérequis, et avant le chapitre 12 (Équations à
     transformations) qui le prolonge. Le livre le range aussi en chapitre 2 :
     les deux ordres coïncident, la colonne « Chap. » ne portera pas le
     triangle d'alerte. */
  rangConseille: 2,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont donc formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent réellement. La `note` le dit explicitement pour que l'enseignant
     ne les cite pas comme des items de référentiel. */
  attendus: [
    "Résoudre une équation du premier degré issue d'un bilan technique",
    "Calculer un discriminant et en déduire les solutions réelles d'une équation du second degré",
    "Résoudre un système de deux équations à deux inconnues par combinaison ou substitution"
  ],

  note: "Équations du premier et du second degré, discriminant, systèmes $2\\times2$ : le chapitre " +
        "rassemble les trois outils de résolution dont le BTS suppose la maîtrise acquise, dans " +
        "leurs contextes d'emploi réels (point de fonctionnement pompe/réseau, bilan de courants " +
        "à un nœud, dimensionnement d'une poutre).<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose le <strong>calcul littéral</strong> acquis " +
        "(chapitre 1), et c'est la seule contrainte réelle : la méthode par combinaison exige de " +
        "savoir multiplier une équation entière sans casser l'égalité. Notez un lien non " +
        "déclarable : les exercices 3 et 9 cherchent un point de fonctionnement, notion que le " +
        "<strong>chapitre 5</strong> éclaire graphiquement — le lien est fécond, mais il n'est " +
        "pas nécessaire pour trouver les réponses.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Deux absences comptent. D'abord, <strong>tous les seconds degrés tirés " +
        "ont un discriminant strictement positif et des racines entières</strong> : ni " +
        "$\\Delta = 0$, ni $\\Delta < 0$ n'apparaît dans les douze exercices numérotés, alors que " +
        "la discussion du signe de $\\Delta$ est le cœur du cours. Ensuite, aucune racine tirée " +
        "n'est <strong>physiquement impossible</strong> (toutes positives), alors que le piège du " +
        "cours insiste précisément sur l'obligation d'écarter une solution négative. Si vous " +
        "voulez faire travailler la discussion du discriminant ou le tri des solutions, " +
        "composez vos propres énoncés : l'évaluation ne les couvre pas davantage.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI : avec six moules et quarante-deux énoncés, le
     chapitre est assez riche pour que chaque erreur trouve un support qui la
     déclenche vraiment.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance, pas des défauts d'attention.
     Le champ `cause` l'explique à chaque fois. */
  erreurs: [
    {
      titre: "Mettre tout du même côté sans changer les signes",
      eleve: "Sur $4x - 24 = 0$, l'élève écrit $4x = -24$ puis $x = -6$. Ou, sur $5x - 20 = 0$, il " +
             "annonce $-4$ au lieu de $4$. Le mécanisme est juste, le signe est perdu.",
      cause: "C'est la formule « <strong>on met tout du même côté</strong> » — l'une des phrases les " +
             "plus répandues et les plus abîmées de l'enseignement des mathématiques. Elle a été " +
             "retenue comme un ordre de rangement (déplacer les nombres à droite, les $x$ à " +
             "gauche) alors qu'elle décrit une opération (soustraire la même chose aux deux " +
             "membres). Dix ans après, il ne reste que le rangement. Et la règle fonctionne une " +
             "fois sur deux, ce qui est le pire des cas : elle n'est jamais assez fausse pour " +
             "être abandonnée. L'élève n'est pas distrait ; il applique fidèlement une consigne " +
             "incomplète qu'on lui a donnée.",
      remede: "Remplacer le rangement par l'<strong>opération écrite en marge</strong> : « $+24$ » à " +
              "gauche de la ligne, puis $4x = 24$. On n'affirme plus que le $-24$ « passe de " +
              "l'autre côté » ; on ajoute $24$ aux deux membres, et le $-24$ disparaît de " +
              "lui-même parce que $-24 + 24 = 0$. La règle devient un calcul, et un calcul ne se " +
              "corrompt pas avec le temps.<br/><br/>" +
              "Imposer ensuite la <strong>vérification par substitution</strong>, systématiquement " +
              "et pas seulement quand on doute : réinjecter la solution dans l'équation de " +
              "départ. $4 \\times (-6) - 24 = -48 \\neq 0$, l'erreur est trouvée en cinq secondes. " +
              "Le cours le dit déjà dans son récapitulatif ; c'est le conseil que les élèves " +
              "sautent le plus systématiquement, et celui qui leur rendrait le plus de points.<br/><br/>" +
              "Rappeler enfin la <strong>conséquence de terrain</strong> : ces équations sortent " +
              "de bilans de puissance ou de bilans thermiques. Un signe raté donne une puissance " +
              "négative, c'est-à-dire un équipement qui fournirait de l'énergie au lieu d'en " +
              "consommer. Sur une feuille de calcul de dimensionnement, personne ne le voit ; en " +
              "salle des machines, cela se traduit par un appareil sous-dimensionné.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 1) :
         l'exercice 4 est « Résoudre 4x + (-24) = 0 », réponse 6. Le tirage
         est idéal pour cette erreur précise parce que l'énoncé est imprimé
         avec le signe explicitement entre parenthèses — « + (-24) » — ce qui
         est exactement la forme où l'élève qui range au lieu d'opérer se
         trompe : il voit un « + » et retient « donc ça devient - ». L'exercice
         8 (5x + (-20) = 0, réponse 4) est le même moule ; l'exercice 4 a été
         retenu parce que sa réponse (6) et l'erreur (-6) sont deux nombres
         également plausibles, alors que sur le 8 la différence 4 / -4 est
         plus vite flairée. Les donner l'un après l'autre est un bon
         entraînement. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier le signe moins dans $\\Delta = b^2 - 4ac$, ou le carré du $b$",
      eleve: "Sur $x^2 - 5x + 6 = 0$, l'élève calcule $\\Delta = 25 + 24 = 49$ (signe perdu) ou " +
             "$\\Delta = -5 - 24 = -29$ (carré oublié). Il conclut à deux racines fausses, ou à " +
             "l'absence de solution.",
      cause: "La formule du discriminant est l'une des rares choses que ce public a réellement " +
             "MÉMORISÉE au lycée — et c'est le problème. Elle a été apprise comme une suite de " +
             "symboles, « bé deux moins quatre a cé », sans qu'aucun sens ne s'y attache : rien " +
             "dans l'expression ne dit pourquoi il y a un carré, ni pourquoi il y a un moins. Une " +
             "mémoire sans appui se dégrade par le milieu, et c'est exactement ce qu'on observe : " +
             "le $b^2$ et le $4ac$ survivent, l'opération qui les relie se perd. S'y ajoute que " +
             "$b$ est ici négatif ($-5$), donc que $b^2$ est positif : deux signes à gérer dans " +
             "la même ligne, sur une formule qu'on récite.",
      remede: "Faire écrire les <strong>trois coefficients en colonne AVANT tout calcul</strong>, " +
              "avec leur signe : $a = 1$, $b = -5$, $c = 6$. L'immense majorité des erreurs de " +
              "discriminant se produit dans la lecture des coefficients, pas dans la formule. " +
              "Trois lignes recopiées, et la source de l'erreur disparaît.<br/><br/>" +
              "Rappeler ensuite que <strong>$b^2$ est toujours positif</strong>, quel que soit le " +
              "signe de $b$ — ce point n'est presque jamais dit explicitement, et il lève à lui " +
              "seul la moitié des confusions. Un $\\Delta$ obtenu par $-5 - 24$ contient " +
              "forcément une faute : on n'a pas élevé au carré.<br/><br/>" +
              "Installer enfin un <strong>contrôle a posteriori gratuit</strong> : une fois les " +
              "deux racines trouvées, leur somme doit valoir $-b/a$ et leur produit $c/a$. Sur " +
              "$x^2 - 5x + 6$, les racines $2$ et $3$ donnent bien $2 + 3 = 5$ et " +
              "$2 \\times 3 = 6$. Deux additions mentales, et l'ensemble du calcul est validé — " +
              "c'est le contrôle que les correcteurs de BTS attendent et que presque personne " +
              "ne fait.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 12 demande le
         discriminant de x^2 + (-5)x + 6 = 0, réponse 1. C'est LE tirage qui
         diagnostique les deux variantes de l'erreur d'un coup : avec b = -5,
         a = 1, c = 6, le bon calcul donne 25 - 24 = 1, le signe perdu donne
         49 et le carré oublié donne -29. Trois résultats radicalement
         distincts, donc une correction qui dit immédiatement laquelle des
         deux fautes a été commise. Préféré à l'exercice 5
         (x^2 + (-4)x + 3 = 0, Delta = 4) parce que sur le 5 le résultat
         correct (4) et le carré de b (16) sont tous deux des nombres ronds
         plausibles, ce qui rend le diagnostic moins net. L'exercice 5 fait un
         bon second support une fois l'erreur identifiée. */
      exercice: { type: "exercice", n: 12 }
    },
    {
      titre: "Additionner les deux équations d'un système sans les avoir rendues compatibles",
      eleve: "Devant $\\begin{cases} 3x + 2y = 17 \\\\ x + y = 7 \\end{cases}$, l'élève additionne " +
             "directement et écrit $4x + 3y = 24$ — une équation vraie, mais qui ne fait " +
             "disparaître aucune inconnue. Il s'arrête, ou soustrait au hasard.",
      cause: "La méthode par combinaison a été résumée en une phrase — « <strong>on additionne les " +
             "deux équations</strong> » — qui omet sa condition d'emploi : il faut d'abord obtenir " +
             "des coefficients OPPOSÉS sur l'inconnue qu'on veut éliminer. La phrase raccourcie " +
             "marche effectivement sur les systèmes du type $x + y = s$ / $x - y = d$, qui sont " +
             "ceux qu'on rencontre d'abord et qu'on retient donc comme le cas général. C'est une " +
             "généralisation d'expérience, pas une négligence : l'élève a vu la méthode fonctionner " +
             "ainsi, plusieurs fois, et il en a tiré une règle.",
      remede: "Faire énoncer l'<strong>objectif avant le geste</strong>, en une phrase : « je veux " +
              "faire disparaître $y$, donc il me faut $+2y$ d'un côté et $-2y$ de l'autre ». La " +
              "multiplication à faire ($\\times(-2)$ sur la deuxième ligne) découle alors " +
              "mécaniquement de l'objectif. C'est l'étape 2 de la méthode du cours, et c'est " +
              "exactement celle qui est sautée.<br/><br/>" +
              "Proposer systématiquement la <strong>voie de substitution comme secours</strong>, " +
              "car sur ces systèmes elle est souvent plus courte : la deuxième équation donne " +
              "$y = 7 - x$ immédiatement, qu'on reporte dans la première. Aucun coefficient à " +
              "ajuster, aucun signe à gérer. Beaucoup d'adultes préfèrent cette voie et ont " +
              "raison de la préférer — la sûreté vaut mieux que l'élégance.<br/><br/>" +
              "Imposer enfin la <strong>vérification dans LES DEUX équations</strong>, pas une " +
              "seule. Un couple $(x, y)$ faux vérifie souvent l'une des deux par hasard ; il ne " +
              "vérifie presque jamais les deux. Sur un bilan de courants à un nœud — contexte " +
              "réel de l'exercice 7 — un couple faux qui vérifie une seule loi de Kirchhoff est " +
              "précisément ce qui fait passer une erreur de câblage inaperçue.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 est le
         système 3x + 2y = 17 / x + y = 7, réponse x = 3. C'est le moule qui
         PIÈGE, et c'est pour cela qu'il est retenu : les coefficients de y
         (2 et 1) ne sont ni égaux ni opposés, donc l'addition naïve ne
         simplifie rien et l'élève est obligé de découvrir qu'il manque une
         étape. Les exercices 6 et 10 (x + y = s / x - y = d) sont l'inverse
         exact : l'addition naïve y FONCTIONNE, ce qui renforce l'erreur au
         lieu de la révéler — ne surtout pas les utiliser pour cette
         remédiation, même s'ils sont d'excellents exercices d'entraînement.
         L'exercice 7 (3x + 2y = 20 / x + y = 7, réponse 6) est le même moule
         que le 2 et fait un second support immédiat. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "S'arrêter au discriminant, ou garder la mauvaise racine",
      eleve: "L'élève calcule correctement $\\Delta$, écrit « $\\Delta = 4$ » et rend sa copie — la " +
             "question demandait une solution. Ou bien, sur un trinôme à deux racines, il donne " +
             "la première venue au lieu de la plus grande, ou il additionne les deux.",
      cause: "Le discriminant occupe une place démesurée dans le souvenir scolaire : c'est l'objet " +
             "qu'on a fait calculer cent fois, et il finit par être perçu comme la RÉPONSE plutôt " +
             "que comme une étape intermédiaire. Chez un adulte, ce souvenir est souvent le seul " +
             "qui reste du second degré — il se raccroche à ce qu'il sait faire, et il s'arrête " +
             "là où sa mémoire s'arrête. Quant au tri des racines, il suppose de relire l'énoncé " +
             "après avoir calculé, ce qui est un geste de vérification qu'on n'installe jamais " +
             "explicitement. Ce n'est ni de la paresse ni de l'inattention : c'est une " +
             "connaissance sincèrement incomplète.",
      remede: "Faire <strong>souligner la question avant de commencer</strong>, et y revenir avant " +
              "d'écrire la réponse finale. « Calcule le discriminant » et « calcule la plus grande " +
              "solution » ne demandent pas le même objet, et les énoncés du chapitre alternent " +
              "délibérément les deux. Trente secondes de relecture valent plusieurs points.<br/><br/>" +
              "Installer ensuite la <strong>chaîne complète en trois temps</strong>, toujours la " +
              "même : $\\Delta$, puis $\\sqrt{\\Delta}$, puis les deux racines " +
              "$\\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$. Écrire les trois lignes même quand la " +
              "question s'arrête à la première : l'habitude protège le jour où elle ne s'y arrête " +
              "pas.<br/><br/>" +
              "Rappeler enfin la <strong>règle de tri du terrain</strong>, que le cours donne dans " +
              "son piège et qui vaut bien au-delà de ce chapitre : une équation technique a " +
              "souvent deux solutions mathématiques et une seule solution physique. Une vitesse " +
              "négative, une section négative, un débit négatif n'existent pas. Sur le point de " +
              "fonctionnement d'une machine, l'exemple résolu du cours le montre bien : des deux " +
              "racines ($20$ et $2{,}5$ rad/s), une seule est stable en pratique.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 demande la
         PLUS GRANDE solution de x^2 + (-9)x + 14 = 0, réponse 7. C'est le
         tirage qui sanctionne l'erreur de la manière la plus nette : Delta
         vaut 25, sqrt(Delta) = 5, et les deux racines sont 7 et 2 — l'élève
         qui s'arrête au discriminant écrit 25, celui qui prend la première
         racine venue écrit 2, celui qui les additionne écrit 9. Quatre
         réponses possibles, toutes distinctes, donc un diagnostic sans
         ambiguïté à la correction. Préféré à l'exercice 11
         (x^2 + (-5)x + 4 = 0, racines 4 et 1, réponse 4) parce que sur le 11
         le discriminant (9) et la plus grande racine (4) sont plus proches et
         moins discriminants, et surtout parce que l'écart entre les deux
         racines y est plus faible. Les exercices 5 et 12, qui demandent
         explicitement le discriminant SEUL, sont le contrepoint utile : les
         donner juste après le 1 fait sentir que la question commande. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     CINQ questions ici — mais attention, ce n'est PAS la règle du dossier :
     huit des quatorze chapitres de `bts-prep` n'en ont que quatre et
     `bts-prep-trigonometrie` en a huit. Compter, ne pas supposer.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — RÉÉCRITE le 2026-09-17. Elle demandait de résoudre $4x - 20 = 0$ :
          une addition et une division, aucune décision à prendre, 1 point —
          la question la plus légère du devoir, et le doublon de la Q5, qui
          résout elle aussi une équation du premier degré après l'avoir posée.
          Elle demande maintenant de juger le raisonnement de Lucas, qui
          récite « on met tout du même côté », écrit $4x = -20$ et conclut
          $x = -5$, et d'EXPLIQUER que déplacer un terme n'est pas le ranger
          ailleurs mais ajouter la même quantité aux deux membres : produire
          une explication, donc « communiquer ».
          Le calcul reste nécessaire, et l'énoncé est bâti pour cela : la
          vérification par substitution ($4 \times (-5) - 20 = -40 \neq 0$)
          est le seul moyen de trancher entre les quatre propositions, et
          c'est précisément le geste que le `remede` de l'erreur 1 réclame.
          La question porte sur l'erreur 1 de cette fiche — la consigne
          « on met tout du même côté », que cette fiche décrit comme la phrase
          la plus abîmée de l'enseignement des mathématiques, et qui donne le
          bon résultat une fois sur deux : elle n'est jamais assez fausse
          pour être abandonnée, ce qui la rend invisible en évaluation
          numérique. Il fallait une question qui la fasse dire.
     Q2 — calculer le discriminant de $x^2 - 5x + 6 = 0$. Substitution dans une
          formule donnée par le cours. « calculer ».
     Q3 — résoudre $x^2 - 5x + 6 = 0$ et donner la plus grande solution, parmi
          quatre propositions. Le calcul a déjà été fait en Q2 : ce qui reste
          est d'enchaîner $\Delta$ → $\sqrt{\Delta}$ → les deux racines → le
          tri, et de juger laquelle des quatre propositions est valide. La
          déduction en plusieurs pas est le vrai travail. « raisonner ».
     Q4 — RÉÉCRITE le 2026-09-17. Elle demandait de résoudre le système
          $2x + y = 7$ / $x + y = 5$ par soustraction : exécution d'une
          procédure connue, déjà mobilisée par la Q1 (résoudre $4x - 20 = 0$)
          et répétée par la moitié des quarante-deux exercices du chapitre.
          La question était redondante, et elle étiquetait « calculer » une
          troisième exécution dans un devoir qui en comptait déjà deux.
          Elle demande maintenant de juger le raisonnement de Nadia, qui
          ADDITIONNE les deux lignes, obtient la somme juste $3x + 2y = 12$,
          puis en tire $x = 4$ comme si le $2y$ valait zéro — et d'EXPLIQUER
          pourquoi combiner deux équations ne sert que si la combinaison fait
          disparaître une inconnue : produire une explication, donc
          « communiquer ».
          Le calcul reste nécessaire pour trancher : il faut vérifier que la
          somme de Nadia est bien $12$ et non $13$ (ce qui écarte le premier
          distracteur), puis résoudre correctement par soustraction ($x = 2$,
          $y = 3$) pour mesurer l'écart.
          La question porte désormais sur l'erreur 3 de cette fiche —
          additionner deux équations sans les avoir rendues compatibles —
          que l'exercice 2 travaille numériquement mais jamais comme un
          raisonnement à juger.
     Q5 — point de fonctionnement d'un réseau hydraulique. L'énoncé donne la
          CONDITION en français (« $H_{pompe} = H_{réseau}$ ») et les deux
          expressions ; il faut comprendre que l'égalité des deux hauteurs
          définit le point de fonctionnement, puis traduire cette situation
          technique en une équation à résoudre. La mise en équation est le
          travail. « modéliser ».

     RÉPARTITION DE CE CHAPITRE : calculer 1, raisonner 1, modéliser 1,
     communiquer 2.
     « chercher » et « représenter » ne sont PAS mobilisés : aucune question
     ne demande de tâtonner ni de lire une représentation. Ce n'est pas un
     oubli mais un constat sur les cinq énoncés.
     Les deux « communiquer » (Q1 et Q4) ne font pas doublon : la Q1 porte
     sur le premier degré et la transposition de terme, la Q4 sur les
     systèmes et le choix de la combinaison. Ce sont les deux erreurs les
     plus tenaces de cette fiche (1 et 3), prises chacune à l'endroit où
     elle se produit. */
  competences: {
    evaluation: ["communiquer", "calculer", "raisonner", "communiquer", "modéliser"]
  }
};
