/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-gravitation.prof.js
   Fiche professeur du chapitre « La gravitation universelle » (troisième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-3e-resistance-ohm.prof.js). Référentiel PHYSIQUE.

   Douzième et dernière fiche du cycle physique-chimie du collège
   (2026-09-16).
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-gravitation"] = {

  /* Aucun prérequis de troisième. Le chapitre ferme l'année et n'utilise rien
     des cinq chapitres qui le précèdent : ni la chimie, ni l'énergie (le poids
     y est une force, pas une énergie potentielle — le lien existe mais aucune
     formule ne le traverse), ni l'électricité.

     Cette autonomie est utile à connaître : c'est ce qui en fait le chapitre
     le plus déplaçable de l'année, et le moins coûteux à écourter en juin. La
     colonne « Prépare » de la progression l'affichera par un tiret. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 6, celui du livre — le chapitre ferme
     l'année.

     Deux raisons de le laisser là. D'abord il ne conditionne rien : aucun
     autre chapitre de troisième n'en a besoin, et c'est donc le meilleur
     candidat si le temps manque en fin d'année. Ensuite il ouvre sur la
     seconde (mécanique newtonienne) et se termine sur une loi qui dépasse
     largement le collège : c'est un bon dernier chapitre, qui donne le
     sentiment d'une physique qui continue.

     Une raison de l'avancer, si la classe est en avance : il est le plus
     spectaculaire de l'année et demande peu de technique. Placé plus tôt, il
     peut relancer une classe qui décroche — mais il faut alors accepter de
     couper ailleurs. */
  rangConseille: 6,

  // Attendus de fin d'année, cycle 4 (2020), thème « Mouvement et
  // interactions ». Aux mots du programme.
  attendus: [
    "Identifier les interactions mises en jeu et les modéliser par des forces",
    "Exploiter la loi de gravitation universelle et l'expression du poids d'un corps",
    "Distinguer le poids et la masse d'un corps et en connaître les unités"
  ],

  note: "Interaction gravitationnelle, loi de Newton, principe des actions réciproques, poids et " +
        "masse sont au programme du cycle 4.<br/><br/>" +
        "<strong>Un point va nettement au-delà du programme et mérite une décision.</strong> La " +
        "loi $F = G\\dfrac{m_1 m_2}{d^2}$ est donnée dans le cours (définition D2) avec la " +
        "constante $G \\approx 6{,}67\\times10^{-11}$, donc en écriture scientifique avec exposant " +
        "négatif. Le calcul numérique complet de $F$ n'est <strong>jamais demandé</strong> — ni " +
        "par un exercice tiré, ni par une question d'évaluation — et c'est un choix sain : la " +
        "puissance de dix négative relève de la seconde. Les exercices demandent uniquement le " +
        "raisonnement de <strong>proportionnalité</strong> (si la distance est multipliée par $5$, " +
        "par quel facteur la force est-elle divisée ?), ce qui est exactement l'attendu du cycle 4. " +
        "Si vous choisissez de faire le calcul complet, ce sera une ouverture, à assumer comme " +
        "telle.<br/><br/>" +
        "<strong>La distinction poids / masse est le vrai enjeu du chapitre</strong>, plus que la " +
        "loi de Newton. C'est elle qui est évaluée trois fois sur cinq, c'est elle qui persiste " +
        "faussement jusqu'au lycée, et c'est sur elle que porte l'erreur 1 de cette " +
        "fiche.<br/><br/>" +
        "Les valeurs tirées sont réalistes et vérifiables : les intensités de pesanteur de la " +
        "Lune ($1{,}6$), de Mars ($3{,}7$), de la Terre ($9{,}8$), de Vénus ($8{,}9$) et de " +
        "Jupiter ($24{,}8$) sont les vraies. On peut s'appuyer dessus sans réserve.",

  erreurs: [
    {
      titre: "Confondre le poids et la masse",
      eleve: "« Sur la Lune, je pèse $13$ kg » — ou, dans un calcul, l'élève annonce un poids en " +
             "kilogrammes et une masse en newtons.",
      cause: "Le langage courant confond systématiquement les deux : une balance de salle de bain " +
             "affiche des kilogrammes et on dit « je pèse ». L'erreur n'est donc pas scolaire, " +
             "elle est installée par des années d'usage correct du français et incorrect de la " +
             "physique. C'est l'erreur la plus tenace du chapitre, et elle survit souvent au " +
             "lycée.",
      remede: "Séparer les deux par ce qu'elles mesurent, et exiger l'unité comme marqueur : la " +
              "<strong>masse</strong> est une quantité de matière, en <strong>kilogrammes</strong>, " +
              "et elle ne change <strong>jamais</strong> ; le <strong>poids</strong> est une " +
              "force, en <strong>newtons</strong>, et il change d'un astre à l'autre. L'unité " +
              "n'est pas une décoration : elle dit de quelle grandeur on parle.<br/><br/>" +
              "L'expérience de pensée qui emporte l'adhésion est le voyage : un astronaute qui " +
              "part sur la Lune a exactement la même masse au départ et à l'arrivée — il n'a rien " +
              "perdu de son corps — mais son poids est divisé par six. Si la masse changeait, il " +
              "aurait fondu en route.<br/><br/>" +
              "Aller jusqu'au cas de l'<strong>apesanteur</strong>, que les élèves connaissent par " +
              "les images de la station spatiale : en orbite, le poids est quasi nul et la masse " +
              "est intacte. C'est ce qui rend les deux notions définitivement distinctes — et " +
              "l'occasion de dire que la balance de salle de bain, en toute rigueur, mesure un " +
              "poids et affiche une masse, ce qui n'est possible que parce que $g$ est le même " +
              "partout sur Terre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 5) : l'exercice 2 est « sur la Lune (g = 1,6
         N/kg), un sac d'échantillons géologiques a une masse m = 87,3 kg ;
         calcule son poids sur la Lune » — réponse 139,7 N. Le tirage est le
         meilleur du chapitre pour cette erreur : les deux grandeurs
         apparaissent dans le même énoncé avec leurs deux unités distinctes
         (kg pour la donnée, N pour la réponse), et l'écart numérique entre
         87,3 et 139,7 interdit de les confondre par inadvertance. La nouvelle
         figure du chapitre porte la masse à gauche de l'objet et le poids en
         flèche verticale, ce qui montre que l'une est une étiquette et
         l'autre une force. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier le carré de la distance",
      eleve: "« La distance est multipliée par $5$, donc la force est divisée par $5$. » L'élève " +
             "applique une proportionnalité inverse simple au lieu du carré.",
      cause: "La proportionnalité inverse est un modèle familier et raisonnable : plus loin, donc " +
             "plus faible. Le <strong>carré</strong>, lui, est une information supplémentaire " +
             "portée par un exposant discret au dénominateur, que l'élève lit sans le traiter. " +
             "C'est le même mécanisme que l'oubli du carré dans $E_c$, au chapitre 3.",
      remede: "Faire lire la formule à haute voix en nommant l'exposant : « divisé par $d$ " +
              "<strong>au carré</strong> ». Puis faire le calcul en deux temps, comme pour " +
              "l'énergie cinétique : <strong>d'abord</strong> le carré du facteur ($5^2 = 25$), " +
              "ensuite la conclusion (la force est divisée par $25$).<br/><br/>" +
              "Utiliser un tableau de valeurs pour rendre la décroissance sensible, parce que " +
              "c'est ce qui la fait retenir : distance $\\times 2$ donne force $\\div 4$, " +
              "distance $\\times 3$ donne force $\\div 9$, distance $\\times 10$ donne force " +
              "$\\div 100$. La force s'effondre bien plus vite que la distance ne " +
              "croît.<br/><br/>" +
              "Rattacher au réel, ce qui donne son sens au carré : c'est parce que la gravitation " +
              "décroît si vite qu'une sonde spatiale échappe à l'attraction de la Terre, et c'est " +
              "aussi parce qu'elle ne s'annule jamais tout à fait que le Soleil retient des " +
              "planètes à des milliards de kilomètres. Les deux faits tiennent dans le même " +
              "exposant.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 1 est « pour
         deux satellites qui s'éloignent l'un de l'autre, la distance est
         multipliée par 5 ; par quel facteur la force est-elle divisée ? » —
         réponse 25. Le facteur 5 est le plus favorable au diagnostic parmi
         ceux que tire le générateur : l'erreur donne 5 et la bonne réponse 25,
         deux nombres si éloignés qu'aucune confusion de lecture n'est
         possible, contrairement au facteur 2 (2 contre 4) de l'exercice 3. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que le corps le plus massif attire plus fort",
      eleve: "« La Terre attire la Lune plus fort que la Lune n'attire la Terre, puisqu'elle est " +
             "plus grosse. »",
      cause: "L'intuition est massive et elle est fausse : dans la formule, les deux masses " +
             "jouent le <strong>même</strong> rôle — c'est leur <strong>produit</strong> qui " +
             "compte, et un produit ne distingue pas ses facteurs. L'élève raisonne par ailleurs " +
             "sur l'<strong>effet</strong> observé (la Lune tourne autour de la Terre, pas " +
             "l'inverse), qui est réel, et l'attribue à une différence de force, ce qui ne l'est " +
             "pas.",
      remede: "Faire lire la formule comme une <strong>symétrie</strong> : $m_1 \\times m_2$ vaut " +
              "$m_2 \\times m_1$. Rien, dans l'écriture, ne permet de distinguer qui attire qui — " +
              "il n'y a qu'<strong>une</strong> force, ou plutôt deux forces de même intensité, " +
              "qui sont les deux faces d'une même interaction. C'est le principe des actions " +
              "réciproques, définition D3 du cours.<br/><br/>" +
              "Lever l'objection, car elle est légitime et sa réponse est le cœur du sujet : si " +
              "les forces sont égales, pourquoi la Lune tourne-t-elle autour de la Terre ? Parce " +
              "que les <strong>effets</strong> d'une même force diffèrent selon la masse — une " +
              "force donnée déplace beaucoup un objet léger et peu un objet lourd. La Terre " +
              "bouge aussi, mais très peu, et c'est mesurable. Forces égales, effets " +
              "inégaux : c'est la distinction à installer.<br/><br/>" +
              "La nouvelle figure du chapitre est faite pour cela : les deux flèches y sont " +
              "dessinées de <strong>même longueur</strong>, alors que les deux astres sont de " +
              "tailles très différentes. Faire remarquer ce choix de dessin, et demander " +
              "pourquoi, est une bonne entrée en matière — le dessin porte l'argument.",
      /* Renvoi vers le QUIZ 2, qui pose exactement la question sur le couple
         Terre-Lune et dont la bonne réponse énonce l'égalité des intensités.
         Aucun exercice tiré ne peut travailler cette erreur : les
         quarante-deux tirages se répartissent en deux moules (poids sur un
         astre, facteur de variation de la force) et aucun ne met en regard
         deux corps de masses différentes pour comparer les deux forces. Le
         quiz est donc le seul appui du livre, et c'en est un vrai. */
      exercice: { type: "quiz", n: 2 }
    },
    {
      titre: "Croire que l'intensité de pesanteur est une constante universelle",
      eleve: "L'élève applique $g = 9{,}8$ N/kg sur la Lune ou sur Jupiter, parce que « $g$ vaut " +
             "$9{,}8$ ». Ou confond $g$, l'intensité de pesanteur, avec $G$, la constante de " +
             "gravitation.",
      cause: "Double cause, et il faut traiter les deux. D'une part $9{,}8$ est le seul chiffre " +
             "que l'élève ait manipulé jusque-là, ce qui en fait une constante dans son esprit. " +
             "D'autre part la notation est objectivement piégeuse : $g$ et $G$ ne diffèrent que " +
             "par la casse, alors que l'un est une propriété <strong>locale</strong> d'un astre " +
             "et l'autre une constante <strong>universelle</strong>.",
      remede: "Nommer $g$ par ce qu'il est, et l'écrire ainsi au tableau : l'intensité de " +
              "pesanteur <strong>de l'astre où l'on se trouve</strong>. Ce n'est pas une " +
              "constante, c'est une donnée de lieu — et c'est pour cette raison que tous les " +
              "énoncés du chapitre la fournissent, au lieu de la supposer connue. Faire " +
              "remarquer que l'énoncé la donne est le meilleur indice.<br/><br/>" +
              "Faire construire un petit tableau des valeurs réelles, qui sont celles du " +
              "chapitre : Lune $1{,}6$ ; Mars $3{,}7$ ; Vénus $8{,}9$ ; Terre $9{,}8$ ; Jupiter " +
              "$24{,}8$. Cinq valeurs qui varient d'un facteur quinze interdisent de penser que " +
              "$g$ est universel, et le tableau se retient mieux qu'une mise en garde.<br/><br/>" +
              "Séparer explicitement les deux lettres, au tableau et à l'oral : $G$ (majuscule) " +
              "est la constante de gravitation universelle, la même dans tout l'Univers ; $g$ " +
              "(minuscule) dépend de l'astre. Écrire les deux côte à côte une fois, avec leurs " +
              "unités qui diffèrent, évite des mois de confusion.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 4 est « sur
         Jupiter (g = 24,8 N/kg), un rover d'exploration a une masse
         m = 64,9 kg ; calcule son poids » — réponse 1609,5 N. Jupiter est le
         meilleur cas du chapitre pour cette erreur : g y vaut deux fois et
         demie la valeur terrestre, si bien qu'un élève qui applique 9,8 se
         trompe d'un facteur 2,5 — assez pour être visible, et dans le sens qui
         surprend (le poids AUGMENTE). L'exercice 2, sur la Lune, est déjà pris
         par l'erreur 1 et joue dans l'autre sens. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — juger le raisonnement d'un élève qui divise la MASSE par six en
          arrivant sur la Lune. RÉÉCRITE le 2026-09-16 : elle appliquait
          $P = mg$ sur Terre, ce que font déjà la moitié des quarante-deux
          exercices du chapitre. Elle porte maintenant sur l'erreur 1 de cette
          fiche — la plus tenace du chapitre, et celle qui survit souvent
          jusqu'au lycée — et demande de produire une explication :
          « communiquer ». Le calcul reste nécessaire pour écarter les
          distracteurs chiffrés.
     Q2 — la loi de gravitation s'écrit … ? Choix parmi des écritures dont
          deux sont fausses (l'une sans carré, l'autre avec une somme) : il
          faut juger la validité d'une relation, donc « valider ».
     Q3 — distance multipliée par $2$ : la force est divisée par combien ?
          Raisonnement de proportionnalité avec le carré, qui est l'erreur 2
          de cette fiche : « analyser ».
     Q4 — la force du Soleil sur la Terre comparée à celle de la Terre sur le
          Soleil. Il faut appliquer le principe des actions réciproques contre
          l'intuition, ce qui est l'erreur 3 : « analyser ».
     Q5 — la masse d'un objet transporté de la Terre vers la Lune. Il faut
          juger quatre affirmations plausibles et trancher sur l'invariance de
          la masse, ce qui est l'erreur 1 : « valider ».

     « Réaliser » n'est pas mobilisé, et c'est inévitable ici : on ne manipule
     pas la gravitation en salle de classe, et la pesée d'un objet au
     dynamomètre — la seule manipulation possible — n'est pas demandée par
     l'ouvrage. En revanche « valider » est évalué deux fois et
     « communiquer » une, ce qui est cohérent : ce chapitre est celui de
     l'année où les intuitions fausses sont les plus nombreuses, et les
     reconnaître comme fausses — puis savoir dire POURQUOI elles le sont —
     est l'essentiel du travail. */
  competences: {
    evaluation: ["communiquer", "valider", "analyser", "analyser", "valider"]
  }
};
