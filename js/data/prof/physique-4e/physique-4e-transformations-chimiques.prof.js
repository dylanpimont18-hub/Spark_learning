/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-transformations-chimiques.prof.js
   Fiche professeur du chapitre « Les transformations chimiques » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-4e-lois-circuits.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-transformations-chimiques"] = {

  /* ch. 1 (Les atomes et les molécules) est un prérequis strict et non
     négociable : tout ce chapitre-ci s'écrit avec des formules chimiques. Un
     élève qui ne sait pas lire $\text{CH}_4 + 2\,\text{O}_2 \rightarrow
     \text{CO}_2 + 2\,\text{H}_2\text{O}$ ne peut ni vérifier qu'une équation
     est équilibrée, ni comprendre que les atomes se réorganisent sans
     disparaître — qui est le cœur du chapitre.

     ch. 3 à 6 (mécanique, électricité, optique) : aucun lien. */
  prerequis: [1],

  /* Rang conseillé (2026-09-16) : rang 2, juste après le langage chimique
     qu'il consomme. Le bloc chimie de la quatrième (rangs 1 et 2) gagne à
     être traité d'un tenant : la conservation de la masse n'a de sens que si
     l'écriture des formules est encore fraîche.

     Le livre le place aussi en chapitre 2 : les deux ordres coïncident. */
  rangConseille: 2,

  // Attendus de fin d'année, cycle 4 (2020), thème « Organisation et
  // transformations de la matière ». Aux mots du programme.
  attendus: [
    "Interpréter une transformation chimique comme une redistribution des atomes",
    "Écrire et équilibrer l'équation de réaction d'une transformation chimique",
    "Exploiter la conservation de la masse lors d'une transformation chimique"
  ],

  note: "Réactifs et produits, combustions, conservation de la masse et tests d'identification " +
        "des gaz sont au programme du cycle 4.<br/><br/>" +
        "<strong>Un décalage à connaître entre le cours et les exercices.</strong> Le cours et le " +
        "problème traitent l'<strong>équilibrage</strong> d'équations ; les trente exercices " +
        "tirés, eux, ne portent <strong>que</strong> sur des bilans de masse (une addition ou une " +
        "soustraction). L'équilibrage n'est donc pas entraîné par le livre à ce niveau — il le " +
        "sera en troisième, dans « Les réactions chimiques ». Si la classe doit s'y exercer dès " +
        "la quatrième, il faut prévoir les exercices hors du livre.<br/><br/>" +
        "<strong>Le système fermé n'est pas un détail de rédaction.</strong> Tous les énoncés " +
        "précisent « dans un récipient fermé », et c'est ce qui rend la conservation " +
        "vérifiable par pesée. Insister : à l'air libre, la masse mesurée d'un morceau de bois " +
        "qui brûle diminue, et un élève qui a retenu « la masse se conserve » sans la condition " +
        "conclura que la loi est fausse. La tâche 3 du problème pose exactement cette question, " +
        "et c'est la plus formatrice du chapitre.<br/><br/>" +
        "Enfin les valeurs tirées sont des masses de laboratoire plausibles ($4$ à $40$ g) mais " +
        "les couples combustible / comburant ne respectent pas les proportions " +
        "stœchiométriques réelles : on ne peut pas en déduire la composition du produit. Le " +
        "chapitre ne le demande jamais.",

  erreurs: [
    {
      titre: "Croire que la masse diminue pendant une combustion",
      eleve: "« Le bois a brûlé, il ne reste que des cendres, donc la masse a diminué » — et, " +
             "transposé au calcul, l'élève cherche à <strong>soustraire</strong> quelque chose " +
             "alors que l'énoncé demande une somme.",
      cause: "L'expérience quotidienne dit vrai : les cendres pèsent moins que la bûche. L'erreur " +
             "n'est pas dans l'observation, elle est dans le <strong>périmètre</strong> du bilan — " +
             "l'élève ne compte que ce qu'il voit et ne compte pas les gaz, qui sont invisibles et " +
             "qui sont partis. C'est une erreur de raisonnement sur un système, pas une méconnais" +
             "sance de la loi.",
      remede: "Faire l'inventaire à voix haute avant tout calcul, en deux colonnes : " +
              "<strong>tout</strong> ce qui entre, <strong>tout</strong> ce qui sort — gaz " +
              "compris. La question qui débloque est « où est parti le reste ? », et non « quelle " +
              "est la loi ? ».<br/><br/>" +
              "L'expérience décisive tient en une phrase : la même combustion dans un récipient " +
              "<strong>fermé</strong> ne fait pas varier la masse d'un milligramme. Si la matière " +
              "disparaissait vraiment, elle disparaîtrait aussi dans le bocal. Le récipient fermé " +
              "n'est donc pas une précaution d'énoncé, c'est ce qui permet de " +
              "<strong>voir</strong> la loi.<br/><br/>" +
              "Faire enfin remarquer le contre-intuitif complet : un morceau de fer qui rouille " +
              "<strong>gagne</strong> de la masse, parce qu'il fixe l'oxygène de l'air. Un élève " +
              "qui tient « ça brûle, donc ça s'allège » ne peut pas expliquer la rouille, et " +
              "c'est ce qui fait tomber la règle fausse plus sûrement qu'une correction.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 1) : l'exercice 2 est « on fait brûler une
         allumette (masse 15,1 g) avec le dioxygène de l'air (masse 19,7 g) ;
         calcule la masse totale des produits formés ». Le tirage est
         exactement la situation de l'erreur : une allumette qui brûle, dont
         l'élève « voit » qu'elle s'allège, et dont la réponse est 34,8 g —
         soit PLUS que l'allumette de départ, parce que le dioxygène compte. La
         nouvelle figure du chapitre y montre les deux piles de masse à la même
         hauteur, ce qui rend l'égalité visible avant le calcul. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Additionner les masses quand il faut soustraire",
      eleve: "L'énoncé donne un réactif ($34{,}4$ g) et le total des produits ($44{,}8$ g), et " +
             "demande la masse du second réactif. L'élève additionne les deux nombres et annonce " +
             "$79{,}2$ g.",
      cause: "Échec de <strong>s'approprier</strong> avant tout : l'élève reconnaît un exercice de " +
             "conservation de la masse, se souvient que « ça s'additionne », et applique " +
             "l'opération associée au chapitre sans identifier ce qui est " +
             "<strong>donné</strong> et ce qui est <strong>cherché</strong>. Les deux types " +
             "d'énoncé du chapitre se ressemblent beaucoup, ce qui entretient la confusion.",
      remede: "Imposer le tri des données <strong>avant</strong> de choisir l'opération, en une " +
              "seule question : « le total, est-il donné ou cherché ? ». S'il est donné, on " +
              "soustrait ; s'il est cherché, on additionne. Cette question tranche les deux types " +
              "d'exercices du chapitre, et elle est plus économique que deux méthodes à " +
              "retenir.<br/><br/>" +
              "Faire écrire l'égalité complète avec un point d'interrogation à la place de " +
              "l'inconnue, avant tout calcul : $34{,}4 + ? = 44{,}8$. L'égalité posée, l'opération " +
              "n'est plus à choisir, elle se lit — et l'élève retrouve là le geste du calcul " +
              "littéral de quatrième, vu la même année en mathématiques.<br/><br/>" +
              "Ajouter le contrôle de vraisemblance, immédiat ici : un réactif ne peut pas être " +
              "plus lourd que le total des produits. Une réponse de $79{,}2$ g pour un total de " +
              "$44{,}8$ g est fausse sans qu'on ait besoin de refaire le calcul.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 1 est
         précisément le type « réactif inconnu » — un ruban de magnésium de
         34,4 g, un total de produits de 44,8 g, et la masse de dioxygène
         consommée à trouver (10,4 g). C'est le premier exercice du chapitre,
         donc celui où l'élève n'a encore aucune habitude de tri, et la
         nouvelle figure y dessine la pile de gauche INCOMPLÈTE en pointillés
         face à une pile de droite connue : le manque est montré, pas énoncé. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Équilibrer en modifiant les indices",
      eleve: "Pour équilibrer $\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$, " +
             "l'élève écrit $\\text{H}_2\\text{O}_2$ à droite : il change l'indice pour faire " +
             "correspondre les comptes.",
      cause: "L'équilibrage est perçu comme un problème d'<strong>arithmétique</strong> à résoudre " +
             "en ajustant les nombres disponibles, sans que le statut des deux nombres soit " +
             "distingué. Or changer un indice change l'<strong>espèce chimique</strong> : " +
             "$\\text{H}_2\\text{O}_2$ est de l'eau oxygénée, un désinfectant, pas de l'eau. " +
             "L'élève a résolu l'équation en changeant le problème.",
      remede: "Poser la règle comme une interdiction absolue, et l'expliquer : les " +
              "<strong>indices sont intouchables</strong>, parce qu'ils sont l'identité de la " +
              "molécule ; seuls les <strong>coefficients</strong> devant les formules peuvent " +
              "changer, parce qu'ils ne font que compter des molécules. On ajuste " +
              "<strong>combien</strong>, jamais <strong>quoi</strong>.<br/><br/>" +
              "L'exemple de l'eau oxygénée est le plus efficace du chapitre, parce que les élèves " +
              "connaissent le produit : $\\text{H}_2\\text{O}$ se boit, " +
              "$\\text{H}_2\\text{O}_2$ décolore les cheveux et brûle la peau. Un indice changé " +
              "n'est pas une erreur de calcul, c'est une autre substance.<br/><br/>" +
              "Faire ensuite compter les atomes de part et d'autre dans un tableau à deux " +
              "colonnes, élément par élément : c'est le seul moyen de vérifier un équilibrage sans " +
              "se fier à son impression. L'étape 2 de la méthode du cours demande exactement " +
              "cette vérification.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les trente exercices tirés sont TOUS des bilans de masse
         (deux moules : produit inconnu, réactif inconnu) et aucun ne demande
         d'équilibrer quoi que ce soit. L'équilibrage vit dans le cours, dans
         le problème et dans l'évaluation — et une remédiation ne renvoie
         jamais vers l'évaluation notée. Les exercices d'équilibrage sont donc
         à prévoir hors du livre, comme le dit déjà la note du chapitre. */
      exercice: null
    },
    {
      titre: "Confondre transformation chimique et changement d'état",
      eleve: "« La glace qui fond, c'est une transformation chimique, puisque la glace devient de " +
             "l'eau. » Ou l'inverse : « l'eau qui bout produit de la vapeur, donc un nouveau " +
             "produit ».",
      cause: "Le critère utilisé est le <strong>changement d'apparence</strong>, qui est visible, " +
             "au lieu du changement d'<strong>espèce chimique</strong>, qui ne l'est pas. Dans les " +
             "deux cas quelque chose change, et rien dans l'observation directe ne dit lequel des " +
             "deux changements a eu lieu.",
      remede: "Faire porter la question sur les <strong>molécules</strong>, jamais sur l'aspect : " +
              "« après, est-ce que ce sont les mêmes molécules ? ». Dans la glace, l'eau liquide " +
              "et la vapeur, ce sont les mêmes $\\text{H}_2\\text{O}$ — seule leur organisation " +
              "change. Dans une combustion, les molécules de départ n'existent plus.<br/><br/>" +
              "Utiliser le test de <strong>réversibilité</strong> comme indice, en disant qu'il " +
              "n'est qu'un indice : un changement d'état se défait en changeant la température " +
              "(l'eau regèle), une combustion ne se défait pas (les cendres ne redeviennent pas " +
              "du bois). Utile en pratique, mais ce n'est pas la définition — certaines " +
              "transformations chimiques sont réversibles, et il vaut mieux le dire que de " +
              "laisser installer un faux critère.<br/><br/>" +
              "La question 2 de l'évaluation porte là-dessus, avec la fusion de la glace en " +
              "contre-exemple : son distracteur « la masse totale change » est d'ailleurs la " +
              "confusion avec l'erreur 1 de cette fiche. Traiter les deux notions ensemble, en " +
              "classe, avant l'évaluation.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 : aucun des
         trente exercices tirés ne demande de CLASSER une transformation — ils
         calculent tous une masse dans une combustion déjà identifiée comme
         chimique. Le quiz du chapitre porte sur la conservation et sur les
         tests de gaz, pas sur cette distinction. La remédiation se fait sur
         des exemples en classe, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — $8$ g de combustible et $20$ g de dioxygène en récipient fermé,
          masse des produits. Application directe de la loi dans le sens
          donné : « s'approprier ».
     Q2 — ce qui distingue une transformation chimique d'une transformation
          physique. Il faut juger quatre affirmations plausibles, dont une
          reprend l'erreur 1 (« la masse totale change ») : « valider ».
     Q3 — $15$ g d'un réactif, $52$ g de produits, masse du second réactif.
          Il faut trier donné / cherché puis inverser l'opération, ce qui est
          l'erreur 2 de cette fiche : « analyser ».
     Q4 — quel test identifie le dioxygène ? Connaissance d'un protocole
          expérimental : « réaliser » — c'est la seule question de
          l'évaluation qui touche au geste de laboratoire, même
          déclarativement.
     Q5 — que représente la flèche de l'équation ? Il s'agit d'interpréter une
          écriture symbolique et d'en énoncer le sens : « communiquer ».

     Les cinq compétences du référentiel sont donc couvertes par ce chapitre,
     ce qui en fait le plus complet du niveau de ce point de vue. La grille
     imprimée le montrera. */
  competences: {
    evaluation: ["s'approprier", "valider", "analyser", "réaliser", "communiquer"]
  }
};
