/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-fonctions-reference.prof.js
   Fiche professeur du chapitre « Fonctions de référence » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE ENTIÈREMENT NOUVEAU, sans équivalent au collège : les fonctions
   carré, inverse et racine carrée n'y sont jamais étudiées COMME FONCTIONS.
   L'élève a rencontré les opérations (élever au carré, prendre l'inverse),
   jamais les objets. Cette fiche insiste donc sur ce qui distingue une
   opération d'une fonction : une fonction a des variations, un signe, une
   allure, et c'est cela qu'il faut faire installer.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-fonctions-reference"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 4 (calcul algébrique) : manipuler $\sqrt{a}$, reconnaître qu'un
     carré est positif et développer $(a+b)^2$ sont des gestes constamment
     mobilisés ici, notamment pour comparer sans calculatrice.

     ch. 6 (généralités sur les fonctions) : tout le vocabulaire employé —
     image, antécédent, domaine de définition, sens de variation — est posé
     là. C'est le prérequis décisif : sans lui, ce chapitre se réduit à trois
     courbes à mémoriser.

     Le chapitre 3 (ensembles de nombres) n'est PAS retenu, bien que les
     domaines s'écrivent en intervalles : cette compétence est portée par le
     chapitre 6, qui l'a déjà exigée pour les valeurs interdites. Le
     déclarer une seconde fois alourdirait la chaîne sans rien y ajouter. */
  prerequis: [4, 6],

  /* Rang conseillé (2026-09-13) : rang 6.

     Après les généralités sur les fonctions (rang 4) et les fonctions
     affines (rang 5). L'ordre est important : les affines sont le cas le
     plus simple, où variations et signe se lisent sur un seul coefficient.
     Les fonctions de référence introduisent le premier cas où une fonction
     CHANGE de sens de variation, et il faut avoir vu le cas simple avant.

     Le LIVRE le range en chapitre 7, juste après les généralités : les deux
     ordres coïncident presque. */
  rangConseille: 6,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Fonctions », sous-partie « Fonctions de référence ».
  attendus: [
    "Connaître l'allure des courbes des fonctions carré, inverse et racine carrée",
    "Connaître le sens de variation de ces trois fonctions sur chaque intervalle concerné",
    "Déterminer le domaine de définition d'une fonction comportant une racine ou un quotient",
    "Comparer deux nombres en utilisant les variations d'une fonction de référence",
    "Résoudre graphiquement une équation ou une inéquation du type $f(x) = k$"
  ],

  note: "Le contenu de ce chapitre est au programme de seconde, à une réserve près signalée " +
        "plus bas.<br/><br/>" +
        "<strong>C'est, avec les vecteurs, l'un des deux chapitres de l'année qui n'ont AUCUN " +
        "équivalent au collège, et c'est ce qu'il faut savoir avant de le préparer.</strong> " +
        "L'élève sait élever au carré depuis la cinquième et prendre une racine depuis la " +
        "quatrième, mais il a toujours manipulé des OPÉRATIONS, jamais des FONCTIONS. Passer " +
        "de « je calcule $(-3)^2$ » à « la fonction carré est décroissante sur $]-\\infty ; 0]$ » " +
        "est un saut d'abstraction réel, et il ne se fait pas en une séance.<br/><br/>" +
        "<strong>Le point le plus difficile de l'année se trouve ici</strong>, et il mérite " +
        "d'être annoncé : la fonction inverse est décroissante sur $]-\\infty ; 0[$ et " +
        "décroissante sur $]0 ; +\\infty[$, mais elle n'est <strong>pas</strong> décroissante " +
        "sur la réunion des deux. Presque tous les élèves énoncent la propriété globale, et " +
        "presque aucun ne comprend spontanément pourquoi elle est fausse. Il faut y consacrer " +
        "un temps propre, et le contre-exemple $-1$ et $1$ suffit à trancher.<br/><br/>" +
        "<strong>Un point à arbitrer avant la séance.</strong> La question 5 de l'évaluation " +
        "demande de simplifier $\\sqrt{(-5)^2}$. C'est une excellente question — elle sépare " +
        "$\\sqrt{x^2}$ de $x$ — mais l'égalité générale $\\sqrt{x^2} = |x|$ suppose la valeur " +
        "absolue, qui n'est pas au programme de seconde. On traitera donc le cas " +
        "numériquement ($\\sqrt{25} = 5$) sans énoncer la formule générale, sous peine " +
        "d'introduire une notion hors programme dans un devoir noté.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13), après élargissement de la banque.

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire que la fonction inverse est décroissante sur tout son domaine",
      eleve: "Comme $-2 < 3$ et que « la fonction inverse est décroissante », l'élève conclut " +
             "que $\\dfrac{1}{-2} > \\dfrac{1}{3}$, c'est-à-dire que $-0{,}5$ serait supérieur " +
             "à environ $0{,}33$.",
      cause: "C'est l'erreur la plus coûteuse du chapitre, et elle vient d'un raccourci de " +
             "cours : on dit « la fonction inverse est décroissante » sans toujours préciser " +
             "« sur chacun des deux intervalles ». L'élève retient l'énoncé court.<br/><br/>" +
             "S'y ajoute une difficulté de fond : une fonction ne peut être croissante ou " +
             "décroissante que sur un INTERVALLE, et $\\mathbb{R}^*$ n'en est pas un — c'est " +
             "une réunion de deux intervalles. Cette subtilité est réelle, et l'élève n'a " +
             "aucun moyen de la deviner.",
      remede: "Trancher par un contre-exemple numérique que l'élève vérifie lui-même, et non " +
              "par une correction de l'énoncé : $\\dfrac{1}{-2} = -0{,}5$ est " +
              "<strong>négatif</strong>, tandis que $\\dfrac{1}{3} \\approx 0{,}33$ est " +
              "<strong>positif</strong>. Un nombre négatif n'est jamais supérieur à un nombre " +
              "positif, donc la conclusion annoncée est fausse.<br/><br/>" +
              "Montrer ensuite la raison sur la courbe, qui rend l'affaire évidente : la " +
              "courbe est en <strong>deux morceaux séparés</strong> par l'axe vertical, et " +
              "l'un est entièrement sous l'axe horizontal, l'autre entièrement au-dessus. " +
              "Comparer un point de chaque branche n'a rien à voir avec les variations : il " +
              "suffit de regarder les signes.<br/><br/>" +
              "Installer enfin une règle de sécurité utilisable seule, qui règle tous les " +
              "cas : <strong>avant de comparer deux inverses, vérifier qu'ils sont du même " +
              "côté de zéro</strong>. S'ils le sont, la décroissance s'applique ; sinon, le " +
              "signe suffit à conclure.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 présente
         exactement ce raisonnement fautif, attribué à « un élève », et
         demande de le juger. La tâche a été AJOUTÉE ce jour : avant cela, la
         banque ne contenait aucun exercice sur la fonction inverse, alors
         qu'elle est l'une des trois fonctions du chapitre. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire que la fonction carré est croissante partout",
      eleve: "Comme $-5 < -2$, l'élève conclut que $(-5)^2 < (-2)^2$, c'est-à-dire $25 < 4$.",
      cause: "Toutes les fonctions étudiées jusqu'ici — linéaires, affines — avaient un sens " +
             "de variation UNIQUE sur tout leur domaine. L'idée qu'une même fonction puisse " +
             "descendre puis monter est neuve, et rien dans l'expression $x^2$ ne la " +
             "signale.<br/><br/>" +
             "L'élève applique donc la règle qui a toujours marché : l'ordre se conserve. " +
             "Elle est effectivement vraie pour les nombres positifs, ce qui explique que " +
             "l'erreur ne se manifeste que sur les négatifs et survive longtemps.",
      remede: "Faire calculer trois carrés de nombres négatifs en descendant — $(-1)^2 = 1$, " +
              "$(-2)^2 = 4$, $(-3)^2 = 9$ — et faire constater que les images " +
              "<strong>augmentent</strong> pendant que les nombres diminuent. L'élève produit " +
              "lui-même le renversement.<br/><br/>" +
              "Faire ensuite tracer la parabole et poser le doigt sur le point le plus bas : " +
              "le sommet en $0$ est l'endroit où la fonction change de sens. Une fonction qui " +
              "descend puis remonte ne peut pas avoir un seul sens de variation, et le dessin " +
              "le dit mieux qu'un tableau.<br/><br/>" +
              "Exiger enfin, à chaque comparaison, la question préalable : « ces deux nombres " +
              "sont-ils du même côté de zéro ? ». C'est la même règle de sécurité que pour la " +
              "fonction inverse, ce qui en fait un réflexe unique pour les deux cas au lieu " +
              "de deux règles à retenir.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 compare
         deux carrés de nombres NÉGATIFS en demandant explicitement d'utiliser
         les variations de la fonction carré, et son indication rappelle la
         décroissance sur les négatifs. C'est précisément le cas où la règle
         fautive échoue. L'exercice 10 est du même type. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier qu'un nombre positif a deux antécédents par la fonction carré",
      eleve: "Pour résoudre $x^2 = 49$, l'élève répond $x = 7$ et s'arrête, sans voir que " +
             "$-7$ convient également.",
      cause: "L'élève applique la racine carrée comme une opération réciproque automatique — " +
             "« pour défaire un carré, je prends la racine » — alors que la racine carrée ne " +
             "rend QUE la solution positive, par convention.<br/><br/>" +
             "Plus profondément, il traite l'antécédent comme s'il était unique, à l'image de " +
             "l'image. C'est la même dissymétrie que celle du chapitre précédent, mais elle " +
             "se manifeste ici sur un cas où elle a une conséquence chiffrée.",
      remede: "Revenir à la courbe et tracer la droite horizontale $y = 49$ : elle coupe la " +
              "parabole en <strong>deux</strong> points, symétriques par rapport à l'axe " +
              "vertical. Le nombre de solutions se lit sur le dessin, avant tout calcul, et " +
              "l'élève n'a plus à s'en souvenir.<br/><br/>" +
              "Faire vérifier que $(-7)^2 = 49$ aussi. La vérification prend trois secondes et " +
              "ferme la discussion sans que l'enseignant ait à trancher.<br/><br/>" +
              "Faire ensuite compter les solutions dans les trois cas, pour que la règle soit " +
              "complète : $x^2 = 49$ en a deux, $x^2 = 0$ en a une seule, $x^2 = -4$ n'en a " +
              "aucune. Un élève qui a rangé les trois cas ne répond plus mécaniquement.<br/><br/>" +
              "Distinguer enfin explicitement les deux écritures : $\\sqrt{49} = 7$ (un seul " +
              "nombre, positif par définition) et « les solutions de $x^2 = 49$ sont $-7$ et " +
              "$7$ » (deux nombres). Ce ne sont pas les mêmes questions.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 demande
         COMBIEN d'antécédents possède un carré parfait, puis lesquels. La
         question « combien ? » interdit la réponse automatique. Tâche
         ajoutée ce jour ; la banque n'en contenait aucune de ce type. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Chercher le domaine de définition seulement quand on y pense",
      eleve: "Devant $f(x) = \\sqrt{3x - 12}$, l'élève calcule directement $f(1)$ et annonce " +
             "$\\sqrt{-9} = -3$, ou bien $3$.",
      cause: "Le domaine de définition est perçu comme une question SÉPARÉE, posée par " +
             "certains énoncés et pas par d'autres. Quand l'énoncé ne la pose pas, l'élève ne " +
             "se la pose pas non plus.<br/><br/>" +
             "Quant à annoncer $\\sqrt{-9} = -3$, c'est la trace d'une confusion entre la " +
             "racine et le carré : l'élève cherche un nombre qui, élevé au carré, donne $-9$, " +
             "et propose $-3$ sans vérifier que $(-3)^2 = 9$ et non $-9$.",
      remede: "Faire de la recherche du domaine un <strong>préalable systématique</strong> et " +
              "non une question parmi d'autres : devant toute expression, avant tout calcul, " +
              "repérer les racines et les dénominateurs. Ce sont les deux seuls cas au " +
              "programme de seconde, ce qui rend la vérification rapide et donc " +
              "tenable.<br/><br/>" +
              "Traiter séparément la confusion sur $\\sqrt{-9}$, qui est une erreur " +
              "différente : faire chercher un nombre dont le carré vaut $-9$. L'élève essaie " +
              "$3$, puis $-3$, et constate que les deux donnent $9$. Aucun nombre ne convient, " +
              "donc la racine d'un négatif n'existe pas — ce n'est pas une interdiction " +
              "arbitraire, c'est une impossibilité qu'il vient de constater.<br/><br/>" +
              "Faire enfin écrire le domaine AVANT la première image demandée, même quand " +
              "l'énoncé ne le réclame pas. La consigne coûte une ligne et évite la totalité " +
              "de ces erreurs.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 6 impose
         l'ordre recommandé — « 1. Vérifier que x appartient au domaine de
         définition. 2. Calculer g(x) » — et son corrigé écrit la vérification
         des DEUX conditions (radicande positif et dénominateur non nul) avant
         tout calcul. Les exercices 2 et 9 portent sur le domaine seul. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 calculer $\sqrt{81}$ : application directe. « calculer ».
     Q2 intervalle de croissance de $x \mapsto x^2$, à choisir parmi quatre :
        l'élève doit se représenter l'allure de la parabole et y localiser la
        branche montante. Aucun calcul. « représenter ».
     Q3 calculer $\sqrt{4 \times 25}$ : application, avec l'occasion de voir
        que la racine d'un produit est le produit des racines.
        « calculer ».
     Q4 domaine de $f(x) = \dfrac{1}{x-2}$ parmi quatre écritures : l'élève
        doit conclure de la condition « dénominateur non nul » à l'écriture
        $\mathbb{R} \setminus \{2\}$, en écartant notamment
        $\mathbb{R} \setminus \{0\}$ qui est le piège. C'est « raisonner ».
     Q5 simplifier $\sqrt{(-5)^2}$ : question de vigilance sur l'ordre des
        opérations et sur le fait qu'une racine est positive. L'élève doit
        produire un résultat correct là où l'automatisme donne $-5$.
        « calculer ».

     « Chercher », « modéliser » et « communiquer » ne sont PAS déclarées :
     aucune des cinq questions ne demande d'explorer une piste, de traduire
     une situation concrète ni de rédiger une explication. Ce devoir est
     technique, et l'étiquette suit l'énoncé, jamais l'inverse. Les trois
     compétences sont portées par d'autres chapitres du niveau. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "raisonner", "calculer"]
  }
};
