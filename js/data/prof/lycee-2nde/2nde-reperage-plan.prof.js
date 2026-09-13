/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-reperage-plan.prof.js
   Fiche professeur du chapitre « Repérage dans le plan » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE SANS ÉQUIVALENT AU COLLÈGE, avec les vecteurs et les fonctions
   de référence. L'élève sait placer un point depuis la cinquième, mais il
   n'a jamais CALCULÉ sur des coordonnées. Le saut n'est pas technique — les
   deux formules sont simples — il est méthodologique : on démontre une
   propriété géométrique sans dessiner. C'est la première apparition de la
   géométrie analytique, et la fiche insiste sur ce basculement plutôt que
   sur les formules, qui s'apprennent en une séance.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-reperage-plan"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 1 (vecteurs) : le chapitre précédent dans la progression conseillée
     installe les coordonnées dans un repère et l'écart entre deux points.
     Le repérage s'appuie directement dessus pour les distances et les
     milieux.

     ch. 4 (calcul algébrique) : la formule de la distance enchaîne une
     soustraction de nombres relatifs, deux carrés et une racine. Chacune de
     ces étapes est une source d'erreur classique, et le chapitre 4 est celui
     qui les stabilise.

     Le chapitre 10 (géométrie plane) n'est PAS retenu, bien que les preuves
     portent sur des triangles : les propriétés utilisées (isocèle,
     rectangle, parallélogramme) sont connues depuis le collège, et aucune
     configuration du chapitre 10 n'est mobilisée ici. */
  prerequis: [1, 4],

  /* Rang conseillé (2026-09-13) : rang 9.

     Juste après les vecteurs (rang 8), dont il réutilise le repère et les
     écarts de coordonnées, et avant la géométrie plane (rang 10) à laquelle
     il fournit un outil de démonstration supplémentaire.

     Le LIVRE le range en chapitre 8, juste avant les droites et systèmes :
     les deux ordres sont voisins. */
  rangConseille: 9,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Géométrie », sous-partie « Repérage ».
  attendus: [
    "Calculer la distance entre deux points d'un repère orthonormé",
    "Déterminer les coordonnées du milieu d'un segment",
    "Déterminer les coordonnées du symétrique d'un point par rapport à un autre",
    "Démontrer par le calcul qu'un triangle est isocèle ou rectangle",
    "Démontrer qu'un quadrilatère est un parallélogramme à partir des coordonnées de ses sommets"
  ],

  note: "Tout le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>C'est, avec les vecteurs et les fonctions de référence, l'un des chapitres " +
        "de l'année sans équivalent au collège</strong>, et la nouveauté n'est pas là où on " +
        "l'attend. L'élève sait placer un point dans un repère depuis la cinquième, et les " +
        "deux formules du chapitre s'apprennent en une séance. Ce qui est neuf, c'est la " +
        "<strong>méthode</strong> : démontrer une propriété géométrique par le calcul, sans " +
        "dessiner. Un élève qui sort du chapitre en sachant appliquer les deux formules mais " +
        "qui continue de conclure « c'est isocèle parce que ça se voit » n'a pas compris ce " +
        "qu'on lui demandait.<br/><br/>" +
        "<strong>Le moment décisif de la séquence</strong> est celui où l'on fait constater " +
        "qu'un dessin peut tromper et qu'un calcul non : proposer un triangle presque " +
        "isocèle, où l'œil dit oui et où les longueurs disent non. C'est l'argument qui " +
        "justifie toute la démarche, et il faut le faire vivre plutôt que l'affirmer.<br/><br/>" +
        "<strong>Un point de vigilance sur les racines.</strong> Les distances tombent " +
        "rarement juste : $\\sqrt{52}$ apparaît dès l'exemple du cours. Il faut décider à " +
        "l'avance si l'on exige la forme exacte simplifiée ($2\\sqrt{13}$) ou la valeur " +
        "approchée, et s'y tenir. La banque d'exercices, elle, a été construite sur des " +
        "triplets pythagoriciens pour que les distances soient entières : la difficulté " +
        "porte ainsi sur la méthode et non sur l'arrondi, mais l'enseignant doit savoir que " +
        "les énoncés réels du baccalauréat ne seront pas aussi accommodants.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13), après élargissement de la banque.

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Se tromper de signe en soustrayant deux coordonnées négatives",
      eleve: "Pour $A(-3\\,;\\,5)$ et $B(2\\,;\\,-1)$, l'élève écrit $x_B - x_A = 2 - 3 = -1$ " +
             "au lieu de $2 - (-3) = 5$.",
      cause: "L'élève lit « moins trois » et soustrait trois : il applique le signe qu'il VOIT " +
             "au lieu de soustraire le nombre qui est là. La parenthèse, qui est ce qui rend " +
             "l'opération lisible, n'est pas écrite parce qu'elle paraît superflue.<br/><br/>" +
             "L'erreur est particulièrement traître dans ce chapitre : comme la formule élève " +
             "ensuite l'écart au CARRÉ, le résultat reste positif et plausible. Rien ne " +
             "signale la faute, et l'élève obtient une distance fausse mais crédible.",
      remede: "Imposer une règle mécanique et sans exception, la même que pour la substitution " +
              "dans une fonction : <strong>on écrit toujours la coordonnée entre " +
              "parenthèses</strong>, même positive. $2 - (-3)$ est alors lisible, et la règle " +
              "des signes s'applique d'elle-même.<br/><br/>" +
              "Faire ensuite contrôler l'écart sur un dessin rapide, ce qui est le seul " +
              "garde-fou vraiment efficace : de $-3$ à $2$, on avance de cinq graduations. Un " +
              "élève qui a trouvé $-1$ voit immédiatement que son écart ne correspond à " +
              "rien.<br/><br/>" +
              "Rappeler enfin que le SENS de la soustraction n'importe pas, puisque le carré " +
              "efface le signe. Ce point rassure les élèves qui hésitent sur l'ordre et leur " +
              "évite de chercher une règle supplémentaire là où il n'y en a pas.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 donne
         $A(-2 ; 3)$ et $B(7 ; -9)$, donc des coordonnées négatives dans les
         deux positions, et son corrigé imprime les parenthèses à l'endroit
         litigieux : $(7 - (-2))^2 + (-9 - (3))^2$. L'exercice 3 est du même
         type. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Diviser au lieu de multiplier pour retrouver une extrémité",
      eleve: "Sachant que $M(3\\,;\\,4)$ est le milieu de $[AB]$ et que $A(-1\\,;\\,2)$, " +
             "l'élève calcule $x_B = \\dfrac{3}{2}$ ou $x_B = 3 - (-1) = 4$, au lieu de " +
             "$2 \\times 3 - (-1) = 7$.",
      cause: "La formule du milieu comporte une division par deux, et l'élève la réapplique " +
             "telle quelle alors que la question est posée À L'ENVERS. Il exécute la formule " +
             "qu'il connaît au lieu de résoudre l'équation qu'elle définit.<br/><br/>" +
             "C'est le même mécanisme que pour l'antécédent d'une fonction : tant que la " +
             "formule est vue comme une recette à appliquer dans un sens, la question inverse " +
             "n'a pas de méthode.",
      remede: "Écrire l'égalité complète avant tout calcul — $3 = \\dfrac{-1 + x_B}{2}$ — et la " +
              "traiter comme une équation ordinaire, ce qu'elle est. L'élève sait résoudre " +
              "cela depuis la quatrième ; il ne savait simplement pas qu'il fallait le " +
              "faire.<br/><br/>" +
              "Multiplier d'abord les deux membres par $2$, ce qui fait disparaître la " +
              "fraction et lève l'hésitation entre diviser et multiplier.<br/><br/>" +
              "Faire ensuite contrôler sur un dessin, ce qui est immédiat pour un milieu : " +
              "$M$ doit être <strong>entre</strong> $A$ et $B$, et à égale distance des deux. " +
              "Une réponse de $1{,}5$ pour un milieu situé en $3$ avec $A$ en $-1$ est " +
              "visiblement du mauvais côté, et l'élève peut le voir seul.<br/><br/>" +
              "Donner enfin la formule directe comme CONSÉQUENCE et non comme règle " +
              "supplémentaire : $x_B = 2x_M - x_A$. Elle se retient parce qu'on l'a démontrée.",
      /* Vérifié contre le tirage réel (2026-09-13) : la tâche « symétrique
         d'un point » a été AJOUTÉE au générateur ce jour ; avant cela, la
         banque ne posait jamais la question inverse, alors que l'évaluation
         la pose (Q3). Son indication nomme explicitement le piège
         (« ne divise pas, c'est l'erreur classique ici ») et son corrigé
         multiplie par 2 en première étape. Elle apparaît au rang 10 du
         tirage courant, et de nouveau au rang 14. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Conclure d'un dessin au lieu de conclure d'un calcul",
      eleve: "Devant trois points à placer, l'élève trace la figure, annonce « on voit que " +
             "c'est isocèle » et s'arrête, sans calculer aucune longueur.",
      cause: "Neuf années de géométrie ont appris à l'élève que la figure est le lieu du " +
             "raisonnement. Il n'a jamais eu besoin d'autre chose, et personne ne lui a " +
             "montré de cas où le dessin se trompe.<br/><br/>" +
             "Le problème n'est donc pas la paresse : c'est que l'élève ne perçoit pas ce " +
             "qu'un calcul apporterait de plus. Tant qu'il ne l'a pas vu, exiger un calcul " +
             "ressemble à une lubie de l'enseignant.",
      remede: "Faire vivre le défaut du dessin, une fois, sérieusement : donner un triangle " +
              "aux longueurs très proches mais inégales — par exemple des côtés de $5$ et " +
              "$5{,}1$ — et faire voter la classe sur « isocèle ou pas ». Le vote se partage, " +
              "puis le calcul tranche. L'argument est acquis pour l'année.<br/><br/>" +
              "Exiger ensuite une structure de preuve fixe, en trois temps : je calcule les " +
              "trois longueurs, je les compare, je conclus en nommant la propriété. Un élève " +
              "qui a écrit trois longueurs ne peut plus conclure d'un coup d'œil.<br/><br/>" +
              "Maintenir la figure, mais en changer le statut : elle sert à ANTICIPER le " +
              "résultat et à repérer une erreur grossière, pas à le démontrer. Le dire " +
              "explicitement évite que les élèves croient le dessin interdit.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 6 demande de
         démontrer « PAR LE CALCUL » qu'un triangle est isocèle, et son
         corrigé se termine par « aucun dessin n'a été nécessaire : c'est
         tout l'intérêt de la géométrie analytique ». Les trois tâches de
         preuve ont été ajoutées ce jour ; avant cela, la banque ne demandait
         de démontrer AUCUNE propriété, alors que le chapitre annonce la
         géométrie analytique. Les exercices 7 et 8 sont du même type. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Oublier la racine carrée et donner le carré de la distance",
      eleve: "Pour $A(1\\,;\\,3)$ et $B(4\\,;\\,7)$, l'élève calcule $9 + 16 = 25$ et annonce " +
             "$AB = 25$ au lieu de $AB = 5$.",
      cause: "Le calcul sous la racine est le plus long, donc c'est lui qui occupe " +
             "l'attention. Une fois $25$ obtenu, le travail SEMBLE fini : la dernière " +
             "opération est la plus simple, et c'est précisément pour cela qu'elle " +
             "s'oublie.<br/><br/>" +
             "S'y ajoute que le résultat intermédiaire est souvent un nombre rond et " +
             "plausible, qui ne déclenche aucun soupçon.",
      remede: "Faire écrire la formule en entier, racine comprise, AVANT de remplacer le " +
              "moindre nombre. La racine est alors déjà là, et il ne reste qu'à calculer " +
              "dessous — l'oubli devient matériellement difficile.<br/><br/>" +
              "Nommer explicitement le résultat intermédiaire $AB^2$ plutôt que de l'écrire " +
              "sans étiquette. Un élève qui a écrit « $AB^2 = 25$ » ne peut pas conclure " +
              "« $AB = 25$ » : la ligne qu'il vient d'écrire le contredit.<br/><br/>" +
              "Installer un contrôle d'ordre de grandeur sur la figure : la distance $AB$ ne " +
              "peut pas dépasser la somme des deux écarts ($3 + 4 = 7$ ici), ni être " +
              "inférieure au plus grand des deux ($4$). Une réponse de $25$ sort largement " +
              "de cet encadrement, et l'élève peut le voir sans refaire le calcul. " +
              "C'est le même raisonnement de diagonale que pour la norme d'un vecteur, au " +
              "chapitre 1 : l'occasion de faire le lien.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est un
         problème de plan de ville dont le corrigé déroule la chaîne complète
         jusqu'à la racine ($\sqrt{289} = 17$), en faisant apparaître le
         carré puis sa racine sur deux lignes distinctes. L'exercice 4 est du
         même type. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 distance entre deux points : application de la formule. « calculer ».
     Q2 RÉÉCRITE le 2026-09-13 par la session précédente : le point $M$ est
        présenté comme le CENTRE DE SYMÉTRIE du segment, et non comme son
        milieu. L'élève doit reconnaître qu'il s'agit du même point avant de
        pouvoir calculer : lire une configuration géométrique, c'est
        « représenter ».
     Q3 retrouver une extrémité connaissant le milieu : question inverse,
        donc une équation à poser puis à résoudre. « calculer ».
     Q4 le triangle est-il isocèle : l'élève doit décider de la méthode
        (calculer les trois longueurs, puis comparer) et conclure d'une
        égalité numérique à une propriété géométrique. « raisonner ».
     Q5 RÉÉCRITE le 2026-09-13 : l'ancienne, « calculer la distance entre
        $P(-2;5)$ et $Q(3;-7)$ », doublait la Q1 du même devoir. La nouvelle
        pose une ville quadrillée et un drone qui la traverse en ligne
        droite : l'élève doit reconnaître que la situation se ramène à une
        distance entre deux points avant de pouvoir calculer quoi que ce
        soit. « modéliser ». La réponse reste $13$.

     « Chercher », « modéliser » et « communiquer » ne sont PAS déclarées :
     aucune des cinq questions ne demande d'explorer une piste, de traduire
     une situation concrète ni de rédiger une explication. Elles sont portées
     par d'autres chapitres du niveau — l'étiquette suit l'énoncé, jamais
     l'inverse. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "raisonner", "modéliser"]
  }
};
