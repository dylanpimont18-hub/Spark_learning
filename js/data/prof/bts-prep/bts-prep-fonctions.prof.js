/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-fonctions.prof.js
   Fiche professeur du chapitre « Fonctions & Lecture Graphique » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 4. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - fonction affine, calculer $\Delta P$ pour un débit : exercices 1 et 11 ;
     - fonction inverse $R = k/S$                         : exercices 2 et 8 ;
     - retrouver l'ordonnée à l'origine $b$               : exercices 3 et 10 ;
     - sommet d'une parabole, $x_s = -b/(2a)$             : exercices 4 et 12 ;
     - pente entre deux points                            : exercices 5 et 7 ;
     - point de fonctionnement pompe/réseau, calculer H   : exercices 6 et 9.
   UNE ANOMALIE DE TITRE À SIGNALER, et elle est importante pour l'enseignant :
   le chapitre s'intitule « Fonctions & Lecture Graphique », mais AUCUN des
   douze exercices numérotés ne comporte de graphique ni ne demande de lire
   une courbe. Tous donnent les points ou l'expression sous forme numérique et
   demandent un calcul. La lecture graphique proprement dite est traitée au
   chapitre 13. C'est dit dans la `note` et cela commande le `null` de
   l'erreur 4.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-fonctions"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     AUCUN PRÉREQUIS, après examen sérieux du candidat le plus évident.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Équations & systèmes) : c'est le candidat sérieux, et il mérite
       d'être discuté. Les exercices 6 et 9 cherchent un point de
       fonctionnement, ce que le chapitre 2 apprend à faire en posant
       $H_p = H_r$ et en résolvant. MAIS — et c'est décisif — les énoncés
       tirés ici DONNENT le débit du point de fonctionnement
       (« Au point de fonctionnement ($Q = 5$ m³/h), calculer la HMT ») : il
       n'y a aucune équation à résoudre, seulement une substitution dans l'une
       des deux expressions. De même, l'exercice 3 « retrouver $b$ » se règle
       par une soustraction, pas par une mise en équation. Le prérequis serait
       donc déclaré pour une difficulté que le tirage ne présente pas. Écarté —
       mais c'est le lien le plus fécond du chapitre, et la question 2 de
       l'évaluation, elle, exige bel et bien un discriminant : un enseignant
       qui compose un devoir sur cette base devra avoir traité le chapitre 2.
       La `note` le signale.
     - ch. 1 (Calcul littéral) : l'exercice 3 demande d'isoler $b$ dans
       $U = aP + b$. C'est une soustraction sur des nombres donnés, pas une
       manipulation littérale. Écarté.
     - ch. 13 (Graphiques) : traite la lecture de courbe, mais son rang est
       supérieur — ce serait un cycle inversé. C'est le chapitre 13 qui
       gagnerait à dépendre de celui-ci, et c'est ce qu'il fait. Écarté. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 5 est contraint par l'aval : le chapitre 13 (Lecture et
     exploitation de graphiques) déclare celui-ci en prérequis, donc le rang
     de ce chapitre doit rester strictement inférieur à 13 — ce que 5
     respecte largement. Le livre le range en chapitre 5 : les deux ordres
     coïncident, la colonne « Chap. » de la progression ne portera pas le
     triangle d'alerte. */
  rangConseille: 5,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Calculer l'image d'une valeur par une fonction affine, carré ou inverse donnée par son expression",
    "Déterminer la pente et l'ordonnée à l'origine d'une droite à partir de deux points ou d'un point et de la pente",
    "Reconnaître la famille de fonctions qui décrit une caractéristique technique et en exploiter la propriété (sommet, produit constant)"
  ],

  note: "Fonctions affine, carré, inverse et racine, pente, ordonnée à l'origine, sommet de " +
        "parabole, point de fonctionnement : le chapitre installe le vocabulaire des courbes " +
        "techniques que le BTS manipule quotidiennement (caractéristique de pompe, couple/vitesse " +
        "d'un moteur, perte de charge d'un réseau).<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci est <strong>sans prérequis déclaré</strong> parce " +
        "que ses douze exercices se règlent tous par substitution ou par une soustraction. " +
        "Attention toutefois à un lien non déclarable mais bien réel : la <strong>question 2 de " +
        "l'évaluation</strong> demande de résoudre $-Q^2 + 16 = 2Q + 4$, donc un discriminant — " +
        "elle suppose le <strong>chapitre 2</strong> traité, alors que les exercices, eux, ne " +
        "l'exigent jamais. Si vous composez un devoir à partir de l'évaluation, vérifiez que " +
        "votre groupe a vu le second degré. Le <strong>chapitre 13</strong> dépend en revanche " +
        "de celui-ci.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — et c'est le fait notable de ce " +
        "chapitre.</strong> Le titre annonce « Lecture graphique », mais <strong>aucun des douze " +
        "exercices numérotés ne comporte de graphique</strong>, ni ne demande de lire une courbe, " +
        "de projeter une valeur, ou de repérer une intersection à l'œil. Tous fournissent les " +
        "points ou l'expression sous forme numérique et demandent un calcul. Même les exercices " +
        "6 et 9, qui parlent de « point de fonctionnement », <strong>donnent le débit</strong> et " +
        "ne demandent qu'une substitution. La lecture graphique proprement dite — projeter, " +
        "interpoler, estimer une incertitude — est le sujet du <strong>chapitre 13</strong>. " +
        "N'attendez pas de ce chapitre-ci qu'il la fasse travailler.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null` : la lecture graphique
     n'est travaillée par aucun des 42 énoncés tirés, malgré le titre du
     chapitre. Le remède le dit et renvoie au chapitre 13.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Le champ `cause` explique
     toujours d'où vient la procédure fausse. */
  erreurs: [
    {
      titre: "Confondre la pente et l'ordonnée à l'origine",
      eleve: "Sur $\\Delta P = 4\\dot{V} + 1$, l'élève dit que la pente vaut $1$ et l'ordonnée à " +
             "l'origine $4$. Ou, invité à calculer $\\Delta P$ pour $\\dot{V} = 2$, il écrit " +
             "$4 + 1 \\times 2 = 6$ au lieu de $4 \\times 2 + 1 = 9$.",
      cause: "Dans $ax + b$, les deux coefficients sont deux nombres écrits côte à côte et rien dans " +
             "leur position ne dit lequel joue quel rôle — il faut savoir que c'est celui " +
             "ACCOLÉ au $x$ qui est la pente. Cette information est purement conventionnelle et " +
             "s'oublie vite. S'y ajoute une difficulté d'ordre : dans l'écriture $4\\dot V + 1$, " +
             "le $4$ vient en PREMIER, et beaucoup d'élèves lisent le premier nombre comme la " +
             "valeur de départ — ce qui est d'ailleurs l'ordre naturel en français (« on part de " +
             "4, puis on ajoute »). Chez un adulte, cette lecture est renforcée par l'usage des " +
             "tarifs (« un abonnement de 4 euros plus 1 euro par unité »), où le premier nombre " +
             "EST bien le fixe. L'erreur est donc cohérente avec l'expérience du monde.",
      remede: "Faire nommer les deux coefficients par leur <strong>rôle physique</strong> plutôt que " +
              "par leur nom mathématique, parce que le rôle, lui, ne s'oublie pas : $b$ est ce " +
              "qu'on a <strong>quand $x$ vaut zéro</strong> (débit nul, charge nulle), $a$ est ce " +
              "qu'on <strong>ajoute chaque fois que $x$ augmente de un</strong>. Poser ces deux " +
              "questions en français suffit à trancher, sans se souvenir d'aucune " +
              "convention.<br/><br/>" +
              "Faire ensuite <strong>tester en $x = 0$</strong>, toujours, comme réflexe " +
              "d'ouverture : $\\Delta P(0) = 1$. Le nombre qui reste quand tout le reste " +
              "s'annule, c'est l'ordonnée à l'origine. Un calcul de trois secondes qui rend " +
              "l'erreur impossible.<br/><br/>" +
              "Relier enfin au <strong>sens technique</strong>, qui est parlant sur cet exemple : " +
              "sur un réseau, l'ordonnée à l'origine est la perte de charge résiduelle à débit " +
              "nul (un clapet, une hauteur statique), la pente est la sensibilité du réseau au " +
              "débit. Confondre les deux, c'est confondre un défaut permanent et un " +
              "comportement — deux diagnostics opposés lors d'une mise en service.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 4) :
         l'exercice 1 donne Delta P = 4.Vdot + 1 avec Vdot = 2, réponse 9 Pa.
         Le tirage est diagnostique parce que les deux lectures donnent deux
         nombres distincts et tous deux plausibles : 9 Pa (correct) contre
         6 Pa (pente et ordonnée échangées). Aucune des deux valeurs n'est
         absurde pour une perte de charge, donc l'élève ne peut pas se
         corriger au flair : il doit avoir compris la structure. Préféré à
         l'exercice 11 (4.Vdot + 2 avec Vdot = 4, réponse 18) parce que sur le
         11 l'échange donne 4 + 2x4 = 12, soit un écart plus faible et une
         erreur moins visible ; et surtout parce que sur le 1, les nombres 4,
         2 et 1 sont assez petits pour que tout le calcul se fasse de tête, ce
         qui isole complètement la difficulté conceptuelle. L'exercice 11 fait
         un bon second support. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Traiter une fonction inverse comme une fonction affine",
      eleve: "Sur $R = k/S$ avec $k = 68$, l'élève voit une proportionnalité et répond que si $S$ " +
             "double, $R$ double. Ou il calcule $R = 68 \\times 1$ au lieu de $68/1$, ce qui donne " +
             "par chance la bonne réponse — et masque l'erreur jusqu'au prochain exercice.",
      cause: "La proportionnalité directe est de très loin le modèle le plus fréquenté : quand deux " +
             "grandeurs sont liées, l'intuition installée dit « si l'une augmente, l'autre " +
             "augmente ». Le chapitre 3 vient d'ailleurs de le renforcer. La fonction inverse " +
             "demande de suspendre cette attente, et rien dans l'écriture $k/S$ ne la signale " +
             "assez fort. S'y ajoute, pour un adulte, un souvenir souvent confus entre « inverse » " +
             "(le contraire, ça descend) et « inverse » (le nombre $1/x$) — deux sens du même mot " +
             "qui ne se recoupent qu'en partie. Ce n'est pas un défaut de logique : c'est un mot " +
             "ambigu posé sur une intuition dominante.",
      remede: "Faire <strong>tabuler trois valeurs</strong> avant toute théorie, parce que le " +
              "comportement se voit avant de s'expliquer : pour $k = 68$, on a $S = 1 \\to 68$, " +
              "$S = 2 \\to 34$, $S = 4 \\to 17$. L'élève constate lui-même que doubler la section " +
              "DIVISE la résistance par deux. Aucune définition n'a été nécessaire.<br/><br/>" +
              "Nommer ensuite l'<strong>invariant qui caractérise l'hyperbole</strong> et qui la " +
              "distingue de tout le reste : c'est le PRODUIT $S \\times R$ qui reste constant " +
              "($= k$), là où dans une proportionnalité c'est le QUOTIENT. Une question suffit " +
              "alors pour trancher entre les deux familles : « qu'est-ce qui ne bouge pas, le " +
              "produit ou le quotient ? ».<br/><br/>" +
              "Ancrer enfin le <strong>repère de métier</strong>, qui est vérifiable en atelier : " +
              "un câble deux fois plus GROS a deux fois MOINS de résistance. C'est pour cela " +
              "qu'on augmente la section quand la chute de tension est trop forte. Un alternant " +
              "connaît le geste sans en connaître la loi — la lui nommer transforme une routine " +
              "en compréhension.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         R = k/S avec k = 50 et S = 2, réponse 25 ohms. Choisi plutôt que
         l'exercice 2 (k = 68, S = 1, réponse 68) pour une raison qui rend le
         2 impropre au diagnostic : sur le 2, S vaut 1, donc multiplier et
         diviser donnent la MÊME réponse (68), et l'élève qui a le mauvais
         modèle valide quand même. C'est le piège classique du coefficient
         unité, déjà rencontré au chapitre 1. Sur l'exercice 8, la confusion
         donne 100 au lieu de 25 : un facteur 4, immédiatement visible à la
         correction. L'exercice 2 reste utilisable comme entraînement, jamais
         comme diagnostic. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Calculer une pente en inversant $\\Delta y$ et $\\Delta x$, ou en oubliant le signe",
      eleve: "Entre $(1, 3)$ et $(4, 12)$, l'élève écrit $\\dfrac{4-1}{12-3} = \\dfrac{1}{3}$ au " +
             "lieu de $3$. Ou, sur une courbe descendante, il annonce une pente positive parce " +
             "qu'il a soustrait dans l'ordre qui l'arrangeait.",
      cause: "La formule $\\dfrac{y_2 - y_1}{x_2 - x_1}$ est symétrique d'apparence : deux " +
             "différences superposées, rien ne dit visuellement laquelle va en haut. Or le sens " +
             "est entièrement déterminé — la pente mesure combien $y$ varie QUAND $x$ varie, donc " +
             "$y$ au numérateur. Cette justification n'est presque jamais donnée ; la formule est " +
             "apprise comme une disposition à recopier. Pour le signe, la difficulté est " +
             "différente et plus insidieuse : l'ordre des deux points est libre (on peut prendre " +
             "$(x_1,y_1)$ et $(x_2,y_2)$ dans n'importe quel sens), mais il doit être LE MÊME en " +
             "haut et en bas. Un adulte qui soustrait « le plus grand moins le plus petit » par " +
             "habitude arithmétique casse cette cohérence sans le savoir, et il a même " +
             "l'impression de bien faire.",
      remede: "Ancrer la formule sur son <strong>unité</strong>, qui la reconstruit toute seule : une " +
              "pente de caractéristique s'exprime en volts par ampère, en mètres par mètre cube " +
              "par heure, en watts par degré. L'unité de la grandeur qui VARIE EN RÉPONSE est " +
              "toujours au numérateur. Une fois l'unité écrite, l'ordre de la fraction n'est plus " +
              "une convention à retenir.<br/><br/>" +
              "Imposer ensuite d'<strong>écrire les deux différences avec leur signe</strong> " +
              "avant de diviser : $\\Delta y = 12 - 3 = 9$ et $\\Delta x = 4 - 1 = 3$, en " +
              "prenant les deux points dans le MÊME ordre. Deux lignes qui suppriment les erreurs " +
              "de signe, parce qu'elles rendent la cohérence visible.<br/><br/>" +
              "Faire enfin <strong>prédire le signe avant de calculer</strong>, en une seconde : " +
              "la courbe monte-t-elle ou descend-elle ? Sur une caractéristique de pompe, la HMT " +
              "DIMINUE quand le débit augmente, donc la pente est négative — c'est exactement le " +
              "sens de la question 5 de l'évaluation. Un signe positif sur une courbe de pompe " +
              "signale une erreur d'ordre, sans qu'il y ait rien à refaire.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 7 donne les
         points (1, 3) et (4, 12) sur une courbe de perte de charge, réponse
         pente 3. Le tirage est diagnostique parce que l'inversion donne 1/3,
         c'est-à-dire l'INVERSE exact de la bonne réponse : la faute se lit
         d'un coup d'oeil à la correction, sans ambiguïté sur sa nature.
         Préféré à l'exercice 5 (points (2, 7) et (4, 9), réponse 1) pour une
         raison qui disqualifie complètement le 5 comme diagnostic : sa pente
         vaut 1, donc l'inversion donne AUSSI 1 et l'erreur est parfaitement
         invisible. L'exercice 5 est utilisable en entraînement, jamais pour
         repérer cette erreur — c'est le troisième piège de coefficient unité
         rencontré dans ce recueil, après l'exercice 12 du chapitre 1 et
         l'exercice 2 de ce chapitre-ci. Le signaler aux élèves comme une
         règle de vérification générale : un tirage où le résultat vaut 1 ne
         valide rien. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Lire une courbe sans avoir lu ses axes",
      eleve: "Devant une caractéristique de pompe, l'élève lit « 8 » et l'annonce sans son unité, " +
             "ou confond l'axe des débits et celui des hauteurs. Sur un abaque à deux courbes, il " +
             "lit la mauvaise et croit avoir le bon point de fonctionnement.",
      cause: "Un graphique donne l'impression d'être IMMÉDIAT — c'est une image, on croit la " +
             "comprendre d'un regard — alors qu'il demande en réalité une lecture préalable aussi " +
             "méthodique qu'un texte. Cette impression d'évidence est précisément ce qui fait " +
             "sauter l'étape des axes. Chez un adulte en reprise d'études, elle est renforcée " +
             "par un rapport apaisé aux images et anxieux aux formules : le graphique est le " +
             "terrain où il se sent enfin à l'aise, et il y baisse la garde. Le récapitulatif du " +
             "cours l'annonce d'ailleurs sans détour — « un débit en m³/h n'est pas un débit en " +
             "L/s » — mais la mise en garde arrive après l'habitude.",
      remede: "Imposer un <strong>rituel d'ouverture en trois questions</strong>, avant toute " +
              "lecture et sans exception : quelle grandeur sur chaque axe ? dans quelle unité ? " +
              "avec quelle échelle (linéaire ou logarithmique) ? Trente secondes qui rendent la " +
              "suite fiable, et qui sont exactement l'étape 1 de la méthode du cours.<br/><br/>" +
              "Faire ensuite <strong>annoter le graphique au crayon</strong> : entourer la courbe " +
              "qu'on utilise quand il y en a plusieurs, tracer les deux traits de projection, " +
              "écrire l'unité à côté de la valeur lue. Un graphique sur lequel on a écrit est un " +
              "graphique qu'on a vraiment lu.<br/><br/>" +
              "Rappeler enfin la <strong>conséquence de terrain</strong>, qui est immédiate : un " +
              "point de fonctionnement lu sur la mauvaise courbe d'un abaque Grundfos, c'est une " +
              "pompe d'un calibre au-dessus ou en dessous. Trop petite, le débit n'est jamais " +
              "atteint ; trop grosse, elle travaille hors de sa plage de rendement et consomme " +
              "pour rien.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille cette erreur</strong>, et c'est le " +
              "fait notable du chapitre : malgré son titre, les douze exercices donnent tous les " +
              "points sous forme numérique et ne comportent aucun graphique à lire. Traitez ce " +
              "point sur les <strong>abaques réels de votre filière</strong> (courbe de pompe, " +
              "diagramme de Mollier, caractéristique moteur), puis renvoyez au " +
              "<strong>chapitre 13</strong> (Lecture et exploitation de graphiques), qui est " +
              "entièrement construit pour cela.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés ne comporte de graphique. Les six moules donnent tous les
         données en clair : une expression algébrique (ex. 1, 2, 4, 8, 11, 12),
         deux points numériques (ex. 5, 7), un couple mesuré (ex. 3, 10), ou
         un débit fourni avec les deux courbes (ex. 6, 9). La banque
         supplémentaire (30 énoncés, dont S1 à S6 relevés) reprend exactement
         les mêmes moules, sans graphique non plus. Un renvoi serait donc
         FAUX : il enverrait l'enseignant vers un énoncé incapable de produire
         l'erreur décrite. D'où `null`, assumé et documenté, avec une sortie
         précise dans le remède — le chapitre 13 travaille cela, et lui seul. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     CINQ questions ici — ce n'est PAS la règle du dossier (huit chapitres sur
     quatorze n'en ont que quatre, la trigonométrie en a huit). Compter.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — pente de la droite passant par $(0, 2)$ et $(5, 12)$. Application
          directe de la formule du cours sur deux points donnés. Exécution.
          « calculer ».
     Q2 — intersection de $H_p = -Q^2 + 16$ et $H_r = 2Q + 4$. Contrairement
          aux exercices 6 et 9, qui DONNENT le débit, la question exige ici de
          poser l'égalité, de la ramener à $Q^2 + 2Q - 12 = 0$, de calculer un
          discriminant, puis d'écarter la racine négative parce qu'un débit ne
          peut pas l'être. C'est un enchaînement de déductions avec un tri
          final à justifier. « raisonner ».
     Q3 — RÉÉCRITE le 2026-09-17. Elle demandait $f(3)$ pour $f(x) = 6/x$,
          soit une division sur deux entiers — le même geste d'exécution que
          la Q1 (pente sur deux points donnés) et la Q4 (une multiplication),
          sur des nombres encore plus simples. La question était la plus
          redondante et la moins exigeante du devoir.
          Elle demande maintenant de LIRE un tableau de valeurs
          ($Q$ : 1, 2, 3, 6 / $H$ : 12, 6, 4, 2) et d'identifier la loi qu'il
          porte — affine ou inverse — en calculant d'abord les écarts (non
          constants) puis les produits (constants à $12$). Lire une
          représentation tabulée et l'associer à sa loi, c'est
          « représenter ».
          C'est la première question de ce chapitre à mériter son titre :
          « Fonctions & lecture graphique » ne comportait AUCUNE tâche de
          lecture, toutes ses questions fournissant les points en clair.
          Le calcul reste nécessaire : sans les quatre produits $Q \times H$,
          les distracteurs 1 et 3 restent également plausibles.
          La question porte désormais sur l'erreur 2 de cette fiche — traiter
          une fonction inverse comme une fonction affine — dont le tableau de
          valeurs est le meilleur révélateur.
     Q4 — RÉÉCRITE le 2026-09-17. Elle demandait $H = 4 \times 2{,}5$ avec
          quatre distracteurs qui n'étaient que des variantes numériques :
          une multiplication sur deux nombres donnés, la formule étant
          fournie — le geste d'exécution le plus nu du devoir, et le doublon
          de la Q1, qui appliquait déjà une formule donnée sur des nombres
          donnés.
          Elle demande maintenant de CHERCHER le point de fonctionnement en
          testant quatre débits candidats : pour chacun il faut évaluer
          $H_p = -2Q + 24$ et $H_r = 4Q$, puis retenir le seul débit qui les
          égalise. Essayer, comparer, écarter : « chercher ». C'est aussi la
          manière dont on relève un point de fonctionnement sur une
          installation réelle, par approches successives.
          Le calcul reste nécessaire et il est huit fois plus long qu'avant :
          quatre débits, deux hauteurs à chaque fois.
          Elle porte sur l'erreur 1 de cette fiche — confondre la pente et
          l'ordonnée à l'origine — car le troisième distracteur ($Q = 6$)
          est exactement celui que retient l'élève qui reconnaît le $24$ de
          $H_p$ dans son $H_r$ sans voir qu'il compare deux grandeurs prises
          à des débits différents.
          Cette question et la Q2 se répondent : la Q2 résout l'intersection
          par le discriminant, la Q4 la trouve par essais. Les deux voies du
          point de fonctionnement sont ainsi évaluées dans le même devoir.
     Q5 — RÉÉCRITE le 2026-09-17. Elle demandait la pente d'une portion de
          courbe pompe, de $(3, 8)$ à $(4, 5)$ : exactement la formule
          appliquée en Q1 du même devoir, sur deux points tout aussi
          explicites. Deuxième exécution du même geste, et l'ancienne fiche
          refusait déjà de la surclasser en « raisonner » faute de
          justification demandée — c'était le signe qu'il fallait la
          réécrire, pas la réétiqueter.
          Elle demande maintenant de juger le raisonnement de Sarah, qui
          calcule $\dfrac{8-5}{4-3} = 3$ en prenant ses deux différences
          dans des sens OPPOSÉS, puis conclut que la pompe « monte » de $3$ m
          par m³/h — et d'EXPLIQUER pourquoi le signe négatif porte tout le
          sens technique de la caractéristique : produire une explication,
          donc « communiquer ».
          Le calcul reste nécessaire et il est double : la pente correcte
          ($-3$) pour voir que le nombre est bon mais le signe faux, et la
          fraction renversée ($\Delta Q/\Delta H = -1/3$) pour écarter le
          premier distracteur.
          La question porte désormais sur l'erreur 3 de cette fiche —
          inverser $\Delta y$ et $\Delta x$, ou perdre le signe — la plus
          coûteuse du chapitre puisqu'elle retourne le sens physique de la
          courbe.

     RÉPARTITION DE CE CHAPITRE : calculer 1, raisonner 1, représenter 1,
     chercher 1, communiquer 1 — cinq compétences différentes sur cinq
     questions, cas unique du recueil.
     « modéliser » n'est PAS mobilisé : les quatre relations du devoir sont
     toutes fournies par leurs énoncés, il n'y a jamais rien à traduire. C'est
     le constat qui reste à corriger sur ce chapitre, et un enseignant qui
     veut l'évaluer n'a qu'à reprendre la Q4 en décrivant la pompe et le
     réseau en français au lieu de donner $H_p$ et $H_r$.
     « représenter », dont l'absence était le défaut le plus criant de ce
     chapitre intitulé « Lecture graphique », est désormais évalué par la
     Q3. */
  competences: {
    evaluation: ["calculer", "raisonner", "représenter", "chercher", "communiquer"]
  }
};
