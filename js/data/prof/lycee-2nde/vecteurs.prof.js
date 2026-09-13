/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/vecteurs.prof.js
   Fiche professeur du chapitre « Vecteurs 2D et projection orthogonale »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE DE LA SECONDE (2026-09-13), et premier chapitre de LYCÉE
   à recevoir une fiche. C'est sur lui qu'ont été calées les conventions
   reprises dans les treize autres fiches du niveau, et c'est lui qui a servi
   à vérifier la chaîne complète jusqu'au PDF.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-2nde`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/2nde/` ne serait jamais trouvée par le pipeline, et
   l'ouvrage compilerait en se déclarant simplement « sans fiche » — sans le
   moindre message d'erreur. Même remarque pour le nom du fichier : ce module
   n'a pas de préfixe de niveau, son identifiant est `vecteurs` tout court.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["vecteurs"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7 ; le numéro imprimé reste celui du
     livre).

     ch. 3 (ensembles de nombres) : les composantes d'un vecteur sont des
     réels quelconques, souvent négatifs et souvent irrationnels dès qu'une
     norme apparaît ($\sqrt{13}$). Un élève qui n'a pas stabilisé les
     ensembles lit « $F_y = -6$ » comme une anomalie.

     ch. 4 (calcul algébrique) : toute la fin du chapitre manipule
     $\|\vec{F}\| = \sqrt{F_x^2 + F_y^2}$, donc des carrés à développer et une
     racine à isoler.

     ch. 10 (géométrie plane) n'est PAS retenu, bien que le sujet soit
     géométrique : le chapitre n'utilise aucune configuration du plan, ni
     Thalès, ni triangle semblable. Le déclarer serait un prérequis décoratif,
     et le cahier des charges demande les prérequis RÉELS. */
  prerequis: [3, 4],

  /* Rang conseillé (2026-09-13) : rang 8.

     Le LIVRE ouvre sur les vecteurs, qui sont son chapitre 1. C'est un choix
     de rangement par domaine, pas un conseil d'enseignement : commencer
     l'année de seconde par les vecteurs reviendrait à demander des racines
     carrées et des composantes négatives à des élèves qui sortent du collège.

     La progression conseillée les place donc au rang 8, après tout le socle
     calculatoire (ensembles, calcul algébrique, équations) et après les
     fonctions, et juste AVANT le repérage dans le plan (rang 9) qui s'appuie
     sur eux pour les distances et les milieux.

     Les deux ordres diffèrent, et c'est normal. */
  rangConseille: 8,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Géométrie », sous-partie « Vecteurs ».
  attendus: [
    "Représenter un vecteur par une flèche, et reconnaître deux représentants d'un même vecteur",
    "Lire et calculer les coordonnées d'un vecteur dans un repère du plan",
    "Utiliser la relation de Chasles pour additionner deux vecteurs",
    "Calculer la norme d'un vecteur à partir de ses coordonnées",
    "Projeter un vecteur sur les axes d'un repère orthonormé"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe.

     CE CHAPITRE EST LE PLUS ATYPIQUE DE L'OUVRAGE, et l'enseignant doit le
     savoir avant de le préparer : tel qu'il est écrit, il traite la PROJECTION
     de forces (une entrée de physique) là où le programme de seconde attend
     d'abord la NOTION de vecteur (égalité, Chasles, coordonnées). Le cours,
     les schémas et le « Découvrir » installent bien la notion ; l'évaluation
     et le problème, eux, restent entièrement tournés vers la mécanique. */
  note: "Les vecteurs du plan, leurs coordonnées, la relation de Chasles et la norme sont au " +
        "programme de seconde.<br/><br/>" +
        "<strong>Trois points débordent, et méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord l'orientation générale : ce chapitre aborde les vecteurs par la <strong>projection " +
        "de forces</strong>, ce qui est une entrée de physique-chimie et non l'entrée du programme de " +
        "mathématiques. Les schémas du cours et la section « Découvrir » installent la notion " +
        "mathématique (égalité de vecteurs, Chasles, composantes) ; l'évaluation et le problème, en " +
        "revanche, portent sur la mécanique. En classe de mathématiques seule, on gagnera à traiter " +
        "les trois schémas et à remplacer le problème du skieur par une construction vectorielle.<br/><br/>" +
        "Ensuite l'$\\arctan$, employé dans la banque d'exercices pour retrouver un angle à partir des " +
        "composantes : la trigonométrie inverse n'est pas exigible en seconde. L'exercice reste " +
        "faisable à la calculatrice, mais c'est une ouverture, pas un attendu.<br/><br/>" +
        "Enfin la deuxième loi de Newton, mobilisée par le problème : elle relève de la " +
        "physique-chimie de seconde, et suppose donc une coordination entre les deux enseignements.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Confondre le point et le vecteur",
      eleve: "L'élève écrit « $\\vec{AB} = (7\\,;\\,1)$ » en recopiant les coordonnées du point $B$, " +
             "au lieu de $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ obtenu par différence.",
      cause: "Les deux objets s'écrivent avec deux nombres entre parenthèses, et rien dans la " +
             "notation ne les distingue. L'élève applique donc ce qu'il connaît depuis la " +
             "troisième : « deux nombres, c'est un point ». Il ne lui manque pas une règle, il lui " +
             "manque la distinction entre une POSITION et un DÉPLACEMENT.",
      remede: "Ne pas commencer par la formule $\\vec{AB} = (x_B - x_A\\,;\\,y_B - y_A)$ : elle se " +
              "retient sans être comprise, et se réapplique à l'envers dès la semaine suivante.<br/><br/>" +
              "Partir du schéma « Un point dit où ; un vecteur dit comment on bouge », qui pose côte " +
              "à côte, à la <strong>même échelle</strong>, le point $A$ et le vecteur $\\vec{AB}$. " +
              "Le test à faire verbaliser est celui du schéma : déplacer la flèche ailleurs dans le " +
              "plan ne change pas le vecteur, déplacer le rond change le point.<br/><br/>" +
              "Ensuite seulement, faire lire la différence sur le dessin : « de $A$ à $B$, j'avance " +
              "de $3$ et je descends de $2$ ». La formule apparaît alors comme l'écriture de ce " +
              "comptage, et non comme une règle de plus.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 6 donne des composantes ($F_x = 5$, $F_y = -12$) et demande
         le QUADRANT. L'élève qui confond avec un point y répond par des
         coordonnées et se retrouve sans réponse possible, puisque la question
         attend un numéro de quadrant : l'erreur se manifeste au lieu de passer
         inaperçue, et c'est ce qui en fait une remédiation. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Croire que le vecteur est attaché à son point de départ",
      eleve: "Devant deux flèches identiques tracées à deux endroits du quadrillage, l'élève affirme " +
             "que « ce sont deux vecteurs différents, puisqu'ils ne partent pas du même point ».",
      cause: "Toutes les flèches rencontrées jusque-là partaient d'un point précis et le désignaient " +
             "— une force appliquée en un point, une translation d'un point vers un autre. Rien n'a " +
             "jamais mis à l'épreuve l'idée que le point d'application ferait partie de l'objet, " +
             "donc elle tient lieu de définition.",
      remede: "Faire énoncer les trois caractéristiques d'un vecteur — direction, sens, norme — puis " +
              "demander laquelle des trois change quand on déplace la flèche. Aucune. C'est la " +
              "démonstration la plus courte du chapitre, et l'élève la produit lui-même.<br/><br/>" +
              "Le schéma « Un même vecteur, trois endroits différents » est fait pour cela : les " +
              "trois flèches y ont des composantes <strong>strictement</strong> égales, $3$ à droite " +
              "et $2$ vers le bas, et le quadrillage permet de le vérifier en comptant plutôt qu'en " +
              "croyant.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille réellement cette erreur : la banque porte " +
              "entièrement sur des calculs de composantes, de norme et d'angle, jamais sur la " +
              "reconnaissance de deux représentants d'un même vecteur. La remédiation demande une " +
              "activité de construction sur quadrillage, à prévoir hors du livre.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : pointer un exercice de projection n'aiderait en rien un élève
         qui doute de l'égalité de deux représentants. Le remède le dit
         explicitement, comme le font déjà six remédiations de la sixième et
         une de la quatrième. */
      exercice: null
    },
    {
      titre: "Appliquer le cosinus sans regarder d'où part l'angle",
      eleve: "Pour une force de $30$ N faisant $40°$ <strong>avec la verticale</strong>, l'élève écrit " +
             "$F_x = 30\\cos(40°) \\approx 23$ N, alors que la réponse est $30\\sin(40°) \\approx 19$ N.",
      cause: "La formule a été mémorisée sous la forme « horizontale égale cosinus », c'est-à-dire " +
             "comme une correspondance entre un AXE et une fonction. Or la correspondance réelle est " +
             "entre la POSITION DU CÔTÉ par rapport à l'angle — adjacent ou opposé — et la fonction. " +
             "Tant que tous les énoncés mesurent l'angle depuis l'horizontale, les deux règles " +
             "donnent le même résultat et rien ne les départage.",
      remede: "Interdire provisoirement les mots « horizontale » et « verticale » dans la phrase de " +
              "méthode, et exiger à la place : « le côté qui <strong>touche</strong> l'angle, c'est " +
              "le cosinus ; celui d'en face, c'est le sinus ». La règle devient alors vraie dans " +
              "tous les cas, y compris sur le plan incliné.<br/><br/>" +
              "Faire ensuite traiter le <strong>même</strong> énoncé deux fois, une fois l'angle " +
              "mesuré depuis l'horizontale et une fois depuis la verticale, et faire constater que " +
              "les deux résultats sont différents. Tant que l'élève n'a pas vu les deux réponses " +
              "coexister, il croit que l'une des deux est « la » bonne.",
      /* Vérifié contre le tirage réel (2026-09-13) : la banque tire désormais
         une tâche « angle mesuré depuis la VERTICALE » (« un hauban de mât
         retient un voilier », « un pendule est écarté de sa position
         d'équilibre »), qui n'existait pas avant ce jour. L'exercice 1 du
         tirage courant est exactement de ce type, et son indication nomme le
         piège sans donner la réponse. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Additionner les normes au lieu des composantes",
      eleve: "Pour $F_x = 8$ et $F_y = -6$, l'élève annonce une norme de $14$ N, en additionnant les " +
             "deux valeurs sans tenir compte du signe ni de Pythagore.",
      cause: "L'addition est l'opération par défaut dès que deux nombres décrivent la même grandeur " +
             "physique. L'élève ne perçoit pas que les deux composantes sont portées par des " +
             "directions <strong>perpendiculaires</strong>, et que c'est précisément ce qui interdit " +
             "de les additionner directement.",
      remede: "Revenir au dessin plutôt qu'à la formule : tracer le rectangle dont les deux " +
              "composantes sont les côtés, et faire constater que la norme en est la " +
              "<strong>diagonale</strong>. Une diagonale est toujours plus courte que la somme des " +
              "deux côtés, ce qui condamne le $14$ sans aucun calcul.<br/><br/>" +
              "Poser ensuite la question de bon sens : « peux-tu marcher $8$ m à l'est puis $6$ m " +
              "au sud et te retrouver à $14$ m de ton point de départ ? ». L'élève répond non " +
              "immédiatement, et c'est le même raisonnement.<br/><br/>" +
              "Le schéma « La relation de Chasles se lit sur le dessin » sert ici de rappel : les " +
              "<strong>composantes</strong> s'additionnent, les <strong>longueurs</strong> non, et " +
              "sa lecture le dit explicitement.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 donne
         $F_x = 3$ et $F_y = -4$ et demande la norme. Le triplet est
         pythagoricien, donc la bonne réponse ($5$) tombe juste, tandis que
         l'élève qui additionne obtient $-1$ ou $7$ — deux nombres dont aucun
         n'est plausible pour une longueur. L'erreur se voit sans qu'on la
         désigne. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » n'existe : une étiquette hors liste est
     refusée à la validation.

     Q1 projeter une force depuis l'horizontale : application directe de la
        formule, donc « calculer ».
     Q2 projeter un poids sur un plan incliné : l'élève doit d'abord décider
        quel axe est concerné et quelle fonction s'applique, alors que
        l'énoncé ne le lui dit pas. C'est « modéliser » — traduire une
        situation physique en écriture mathématique.
     Q3 norme à partir des composantes : Pythagore appliqué, donc « calculer ».
     Q4 signe des composantes selon le quadrant : lire une information
        géométrique sur une configuration, donc « représenter ».
     Q5 choisir la bonne fonction pour la composante perpendiculaire :
        l'élève conclut d'une propriété géométrique (le côté adjacent) à une
        formule, sans aucun nombre à manipuler. C'est « raisonner ».

     « Chercher » et « communiquer » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste ni de produire une
     explication. Les deux compétences sont portées par d'autres chapitres du
     niveau, où les énoncés ont été écrits pour cela — l'étiquette suit
     l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "modéliser", "calculer", "représenter", "raisonner"]
  }
};
