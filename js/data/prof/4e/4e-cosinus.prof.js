/* =========================================================
   Spark Learning – js/data/prof/4e/4e-cosinus.prof.js
   Fiche professeur du chapitre « Cosinus d'un angle aigu » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-cosinus"] = {

  /* ch. 3 (Pythagore) : le cosinus suppose qu'un triangle rectangle soit identifié
     et que ses trois côtés soient nommés correctement. Surtout, la question 5 de
     l'évaluation et la tâche « cosinus » du générateur demandent de retrouver
     l'hypoténuse par Pythagore AVANT de pouvoir former le quotient.
     ch. 2 (calcul algébrique) : retrouver l'hypoténuse à partir du cosinus et du
     côté adjacent demande d'isoler une inconnue au dénominateur, ce qui est
     exactement le chapitre 2 appliqué. */
  prerequis: [3, 2],

  /* Rang conseillé 7 : après Pythagore (5) et le cercle circonscrit (6), qui
     installent la géométrie du triangle rectangle. Le cosinus est la dernière
     brique de ce bloc, et la plus abstraite : il introduit un RAPPORT comme
     nouvel objet, là où Pythagore ne manipulait que des longueurs. */
  rangConseille: 7,

  attendus: [
    "Connaître et utiliser la définition du cosinus d'un angle aigu dans un triangle rectangle",
    "Calculer une longueur à partir d'un angle et d'une longueur",
    "Calculer le cosinus d'un angle à partir de deux longueurs",
    "Déterminer la mesure d'un angle à partir de son cosinus"
  ],

  note: "Le cosinus d'un angle aigu dans un triangle rectangle est au programme de quatrième. " +
        "Le sinus et la tangente relèvent de la troisième : ne pas les introduire ici, même en " +
        "remarque, car l'élève qui dispose de trois rapports avant de maîtriser le premier les " +
        "confond durablement.<br/><br/>" +
        "Choix assumé de ce chapitre : les angles employés sont $30°$, $45°$ et $60°$, et leur " +
        "cosinus est DONNÉ dans l'énoncé. La calculatrice trigonométrique n'est donc pas un " +
        "prérequis, et l'attention reste sur le rapport plutôt que sur le maniement des touches. " +
        "Si la classe dispose de calculatrices et qu'on veut travailler la touche $\\cos$, " +
        "c'est une séance à ajouter — le chapitre ne la prépare pas.<br/><br/>" +
        "La question 4 de l'évaluation demande de déterminer un angle à partir de son cosinus. " +
        "Elle ne passe pas par $\\arccos$, qui n'est pas au programme du collège, mais par la " +
        "reconnaissance d'une valeur connue.",

  erreurs: [
    {
      titre: "Inverser le rapport",
      eleve: "L'élève écrit $\\cos(\\widehat{A}) = \\dfrac{\\text{hypoténuse}}{\\text{adjacent}}$ et " +
             "obtient un cosinus supérieur à $1$ sans s'en étonner.",
      cause: "Le cosinus est retenu comme « un rapport entre l'adjacent et l'hypoténuse », et l'ordre " +
             "des deux termes n'est pas mémorisé parce qu'il semble arbitraire.",
      remede: "Donner d'abord le contrôle, qui rend l'erreur auto-détectable : l'hypoténuse est " +
              "toujours le plus long côté, donc le quotient $\\dfrac{\\text{adjacent}}{\\text{hyp}}$ " +
              "est toujours <strong>compris entre $0$ et $1$</strong>. Un cosinus supérieur à $1$ est " +
              "impossible, toujours, et signale immédiatement le rapport inversé.<br/><br/>" +
              "Donner ensuite un sens à l'ordre, pour qu'il cesse d'être arbitraire : le cosinus " +
              "mesure quelle FRACTION de l'hypoténuse se projette à l'horizontale. C'est une " +
              "proportion, donc l'hypoténuse est le tout et se met au dénominateur, comme dans toute " +
              "fraction de quantité.<br/><br/>" +
              "Faire enfin vérifier sur les deux cas extrêmes : un angle presque nul donne un cosinus " +
              "proche de $1$ (le côté se confond avec l'hypoténuse), un angle presque droit un cosinus " +
              "proche de $0$.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 est une tâche « cosinus » — $AC = 8$ cm, $AB = 17$ cm,
         calculer $\cos(\widehat{A})$, réponse $\approx 0{,}471$. Le rapport
         inversé donnerait $2{,}125$, soit plus de $1$ : impossible pour un
         cosinus, et la solution imprimée rappelle cette borne. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Prendre pour adjacent le côté opposé",
      eleve: "Dans un triangle rectangle en $C$, pour l'angle $\\widehat{A}$, l'élève utilise $BC$ " +
             "(le côté opposé) au lieu de $AC$.",
      cause: "« Adjacent » est compris comme « l'un des deux côtés de l'angle droit », sans référence " +
             "à l'angle dont on parle. Or l'adjacent change selon l'angle considéré, dans le même " +
             "triangle.",
      remede: "Attacher le mot à un geste, pas à une position : poser le doigt sur le SOMMET de " +
              "l'angle dont on cherche le cosinus, puis suivre les deux côtés qui en partent. L'un des " +
              "deux est l'hypoténuse ; l'autre est l'adjacent. Le troisième côté, celui que le doigt " +
              "ne touche pas, est l'opposé.<br/><br/>" +
              "Insister sur ce que cela implique : dans un même triangle, l'adjacent à $\\widehat{A}$ " +
              "et l'adjacent à $\\widehat{B}$ ne sont PAS le même côté. Faire calculer les deux " +
              "cosinus du même triangle rectangle est l'exercice qui ancre cela — et les deux " +
              "résultats, dont la somme des carrés vaut $1$, sont une jolie surprise à garder pour la " +
              "troisième.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 8 est une tâche
         « cosinus » sur une équerre, $AC = 5$ cm adjacent et $AB = 13$ cm
         hypoténuse, réponse $\approx 0{,}385$. Son énoncé NOMME explicitement
         lequel des deux côtés est l'adjacent, ce qui en fait l'exercice de
         remédiation : il donne le vocabulaire avant de demander le calcul. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Multiplier par le cosinus au lieu de diviser",
      eleve: "Connaissant $\\cos(\\widehat{A}) = 0{,}6$ et le côté adjacent $= 6$ m, l'élève calcule " +
             "$6 \\times 0{,}6 = 3{,}6$ m pour l'hypoténuse.",
      cause: "Le geste appris — « adjacent égale hypoténuse fois cosinus » — est appliqué dans le " +
             "seul sens où il a été rencontré. L'élève reproduit la multiplication sans regarder " +
             "laquelle des deux longueurs est inconnue.",
      remede: "Faire écrire la relation COMPLÈTE avant de calculer, avec l'inconnue à sa place : " +
              "$0{,}6 = \\dfrac{6}{\\text{hyp}}$. L'inconnue apparaît alors au dénominateur, et " +
              "l'isoler est le chapitre du calcul algébrique, pas une règle nouvelle.<br/><br/>" +
              "Donner ensuite le contrôle décisif : l'hypoténuse est le plus LONG côté, donc le " +
              "résultat doit dépasser $6$. Or $3{,}6$ est plus petit. Multiplier par un nombre " +
              "inférieur à $1$ diminue — on cherche à agrandir, donc on divise.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est une tâche
         « hypotenuse » — $\cos(\widehat{A}) = 0{,}6$, longueur horizontale 9 m,
         trouver l'hypoténuse, réponse 15 m. La figure y porte le point
         d'interrogation sur l'hypoténuse et MASQUE le côté opposé, pour que
         l'élève ne puisse pas contourner par Pythagore. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier que le cosinus ne s'applique qu'au triangle rectangle",
      eleve: "L'élève applique la formule du cosinus dans un triangle quelconque, en désignant " +
             "arbitrairement un côté comme « hypoténuse ».",
      cause: "La définition est mémorisée comme une formule entre trois longueurs, détachée de " +
             "l'hypothèse qui la rend valide. Le mot « hypoténuse » finit par désigner, pour l'élève, " +
             "simplement le plus long côté.",
      remede: "Rappeler que le mot « hypoténuse » n'a de sens QUE dans un triangle rectangle : dans un " +
              "triangle quelconque, il n'y a pas d'hypoténuse, seulement un plus grand côté. Si le " +
              "mot ne s'applique pas, la formule ne s'applique pas.<br/><br/>" +
              "Imposer la même discipline de rédaction qu'en Pythagore : la première ligne nomme " +
              "l'angle droit. « Le triangle $ABC$ est rectangle en $C$, donc... ». Une rédaction qui ne " +
              "peut pas commencer ainsi est une rédaction où la formule n'a pas le droit d'apparaître.",
      /* Volontairement SANS renvoi. Tous les exercices du chapitre portent sur des
         triangles rectangles — c'est la définition du chapitre — et aucun ne
         propose un triangle quelconque où il faudrait REFUSER d'appliquer le
         cosinus. Un renvoi vers un exercice de cosinus ne travaillerait pas
         l'erreur : il la confirmerait. La remédiation demande une figure
         non rectangle, à tracer. */
      exercice: null
    }
  ],

  /* Q1 et Q2 appliquent la définition dans le sens direct : « calculer ».
     Q3 a été MISE EN SITUATION le 2026-09-13 (une rampe d'accès au lieu d'un
     énoncé formel) : l'élève doit d'abord décider laquelle des longueurs joue le
     rôle de l'hypoténuse, ce qui est mettre la situation en modèle —
     « modéliser ».
     Q4 demande de juger l'erreur d'un élève qui a inversé le rapport et
     d'expliquer pourquoi elle est impossible : « communiquer ». Cette question
     était DÉJÀ correctement conçue, elle n'a pas été touchée.
     Q5 a été RÉÉCRITE : l'ancien énoncé se répondait par simple lecture
     ($\cos \hat A = 0{,}5 = \cos 60°$). Le nouveau demande un cosinus dont
     l'hypoténuse n'est pas donnée : il faut passer par Pythagore d'abord, ce que
     rien ne souffle — « chercher ». */
  competences: {
    evaluation: ["calculer", "calculer", "modéliser", "communiquer", "chercher"]
  }
};
