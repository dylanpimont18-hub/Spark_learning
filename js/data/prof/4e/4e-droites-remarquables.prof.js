/* =========================================================
   Spark Learning – js/data/prof/4e/4e-droites-remarquables.prof.js
   Fiche professeur du chapitre « Droites remarquables du triangle » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-droites-remarquables"] = {

  /* ch. 6 (triangle rectangle et cercle circonscrit) : les médiatrices y sont
     déjà mobilisées, puisque le milieu de l'hypoténuse est le centre du cercle
     circonscrit. Ce chapitre généralise ce cas particulier à tout triangle, et
     l'élève qui a vu les deux dans cet ordre reconnaît une propriété qu'il
     connaît déjà. */
  prerequis: [6],

  /* Rang conseillé 8, après le bloc du triangle rectangle (Pythagore 5, cercle
     circonscrit 6, cosinus 7). Les droites remarquables n'ont aucune dépendance
     calculatoire, mais elles prennent tout leur sens quand le cas particulier du
     triangle rectangle a déjà été rencontré. */
  rangConseille: 8,

  attendus: [
    "Connaître et construire les médiatrices, les médianes, les hauteurs et les bissectrices d'un triangle",
    "Connaître les propriétés de concours de ces quatre familles de droites",
    "Caractériser le centre du cercle circonscrit et celui du cercle inscrit",
    "Utiliser la position du centre de gravité sur une médiane"
  ],

  note: "Les quatre familles de droites remarquables et leurs points de concours sont au programme " +
        "de quatrième.<br/><br/>" +
        "Un point déborde nettement : la propriété selon laquelle le centre de gravité est situé aux " +
        "<strong>deux tiers</strong> de chaque médiane n'est pas un attendu de quatrième dans " +
        "toutes les progressions — elle est souvent admise sans démonstration, voire reportée. Le " +
        "chapitre l'utilise abondamment, y compris dans l'évaluation : elle est donc à poser " +
        "explicitement comme une propriété admise, et non à faire démontrer.<br/><br/>" +
        "Le mot « centroïde », employé dans certains énoncés générés, n'est pas le terme du " +
        "programme français : dire « centre de gravité ». Il est conservé dans la banque parce que " +
        "les élèves le rencontrent en physique et dans les logiciels de géométrie.",

  erreurs: [
    {
      titre: "Confondre médiane et médiatrice",
      eleve: "L'élève trace la perpendiculaire à $[BC]$ passant par son milieu et l'appelle « la " +
             "médiane issue de $A$ », ou bien affirme que les deux droites sont confondues puisque " +
             "toutes deux passent par le milieu de $[BC]$.",
      cause: "Les deux mots se ressemblent, et les deux droites passent effectivement par le même " +
             "point. De plus, beaucoup de figures de cours sont des triangles isocèles, où les deux " +
             "droites SONT confondues : l'élève a donc vu des exemples qui confirment sa confusion.",
      remede: "Définir chaque droite par ce qui la détermine entièrement, car un seul point ne " +
              "détermine pas une droite : la <strong>médiane</strong> est définie par DEUX POINTS, le " +
              "sommet et le milieu du côté opposé ; la <strong>médiatrice</strong> par UN POINT ET UNE " +
              "DIRECTION, le milieu du côté et la perpendicularité à ce côté. Rien n'oblige la " +
              "médiatrice à passer par un sommet.<br/><br/>" +
              "Puis traiter le cas particulier de front, car c'est lui qui entretient l'erreur : les " +
              "deux droites coïncident exactement lorsque le triangle est isocèle au sommet " +
              "considéré. Faire construire les deux droites sur un triangle franchement " +
              "<strong>scalène</strong> est l'exercice décisif : elles se séparent visiblement, et " +
              "l'élève voit que le cas isocèle était l'exception.<br/><br/>" +
              "C'est le raisonnement que demande la question 5 de l'évaluation, réécrite pour cela.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 6 est une tâche « mediatrice » — « les trois médiatrices se
         coupent en $O$ et $OA = 9$ cm, que vaut $OC$ ? », réponse 9. La propriété
         mobilisée (équidistance aux trois SOMMETS) est celle de la médiatrice, et
         aucune médiane n'y intervient : l'exercice force la distinction. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Inverser le rapport des deux tiers",
      eleve: "Connaissant $GM = 4$ cm, l'élève calcule $AM = \\dfrac{3}{2} \\times 4 = 6$ cm, en " +
             "prenant $GM$ pour les deux tiers de la médiane.",
      cause: "La propriété est retenue sous la forme « deux tiers », sans que l'élève ait mémorisé " +
             "DE QUOI et À PARTIR D'OÙ. Quand la donnée porte sur l'autre morceau, le rapport est " +
             "appliqué tel quel.",
      remede: "Faire dessiner la médiane et la découper visiblement en TROIS parts égales, en " +
              "marquant $G$ à la deuxième graduation. La figure dit alors tout : $AG$ vaut deux parts, " +
              "$GM$ en vaut une, et la médiane entière en vaut trois.<br/><br/>" +
              "Le calcul devient alors une lecture : si $GM$ vaut une part, la médiane vaut trois fois " +
              "$GM$. Si $AG$ vaut deux parts, la médiane vaut une fois et demie $AG$. Deux relations " +
              "différentes, lues sur le même dessin, et plus rien à retenir.<br/><br/>" +
              "Exiger enfin le contrôle additif, qui ferme la question : $AG + GM$ doit redonner la " +
              "médiane. Avec $AM = 6$ et $GM = 4$, on aurait $AG = 2$, donc $AG$ plus petit que " +
              "$GM$ — impossible, puisque $G$ est plus loin du sommet que du milieu.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est une tâche
         « gm-inverse » — « $GM = 3$ cm, quelle est la longueur de la médiane
         $AM$ ? », réponse 9. C'est exactement la situation de l'erreur, et la
         solution imprimée nomme le piège (multiplier par 3/2 au lieu de 3). */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre hauteur et médiane",
      eleve: "Pour calculer l'aire d'un triangle, l'élève utilise la longueur de la médiane issue de " +
             "$A$ à la place de la hauteur.",
      cause: "Les deux segments partent du même sommet et aboutissent sur le côté opposé. La " +
             "différence — le milieu d'un côté pour la médiane, le pied de la perpendiculaire pour la " +
             "hauteur — porte sur le point d'arrivée, que l'élève ne regarde pas.",
      remede: "Faire tracer les deux segments sur un même triangle scalène, de deux couleurs, et " +
              "MESURER : ils n'ont ni le même pied ni la même longueur. La hauteur est toujours la " +
              "plus courte des deux, ce qui donne un contrôle utile.<br/><br/>" +
              "Rattacher chaque segment à son usage, ce qui fixe le vocabulaire plus sûrement qu'une " +
              "définition : la <strong>hauteur</strong> sert à calculer une AIRE, parce que l'aire " +
              "demande une distance perpendiculaire. La <strong>médiane</strong> sert à trouver le " +
              "centre de gravité, parce que l'équilibre dépend du milieu. Les deux ne se confondent " +
              "que dans un triangle isocèle au sommet considéré.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est une tâche
         « hauteur » — « $[BC]$ mesure 16 cm, la hauteur issue de $A$ mesure 5 cm,
         quelle est l'aire ? », réponse 40. Son énoncé nomme explicitement la
         HAUTEUR et sa solution imprimée avertit de ne pas prendre la médiane à sa
         place. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Attribuer le mauvais cercle au mauvais point de concours",
      eleve: "« Les bissectrices donnent le centre du cercle circonscrit » : les deux cercles, inscrit " +
             "et circonscrit, sont échangés.",
      cause: "Quatre familles de droites et deux cercles sont introduits dans le même chapitre, et " +
             "tous les points de concours sont décrits par la même tournure (« le point où les trois " +
             "... se coupent »). Rien ne distingue les cas dans la formulation.",
      remede: "Ne pas faire retenir l'association « droite → cercle », qui est arbitraire, mais la " +
              "faire RECONSTRUIRE à partir de la propriété de chaque droite, qui est la seule chose à " +
              "savoir :<br/><br/>" +
              "Une <strong>médiatrice</strong> est l'ensemble des points à égale distance de deux " +
              "SOMMETS. Leur point commun est donc à égale distance des trois sommets : c'est le centre " +
              "d'un cercle qui PASSE PAR les sommets, donc le cercle circonscrit.<br/><br/>" +
              "Une <strong>bissectrice</strong> est l'ensemble des points à égale distance de deux " +
              "CÔTÉS. Leur point commun est à égale distance des trois côtés : c'est le centre d'un " +
              "cercle TANGENT aux côtés, donc le cercle inscrit.<br/><br/>" +
              "Sommets ou côtés : c'est le seul mot à retenir, et il se déduit de la définition de " +
              "chaque droite. Faire formuler les deux phrases à voix haute par les élèves, plutôt que " +
              "de leur donner un tableau à mémoriser.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est une tâche
         « bissectrice » — « l'angle $\widehat{A}$ mesure 80° et l'on trace sa
         bissectrice : que vaut chacun des deux angles formés ? », réponse 40. Sa
         solution imprimée rappelle explicitement que le point de concours des
         bissectrices est le centre du cercle INSCRIT, et met en garde contre la
         confusion avec le circonscrit. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Q1 et Q2 demandent de nommer le point de concours des médiatrices puis des
     bissectrices : mettre une configuration en correspondance avec un objet
     nommé — « représenter ».
     Q3 applique le rapport des deux tiers : « calculer ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancienne question demandait de
     reconnaître la médiane parmi quatre droites, soit du vocabulaire. La nouvelle
     donne $GM$ et non $AG$ : l'élève doit repérer lequel des deux morceaux est
     fourni, puis inverser le rapport — « chercher ».
     Q5 a été RÉÉCRITE : elle calculait le milieu d'un segment, ce qui ne relève
     même pas de ce chapitre. Elle demande maintenant d'expliquer la différence
     entre médiane et médiatrice et de dire quand elles coïncident —
     « communiquer ». */
  competences: {
    evaluation: ["représenter", "représenter", "calculer", "chercher", "communiquer"]
  }
};
