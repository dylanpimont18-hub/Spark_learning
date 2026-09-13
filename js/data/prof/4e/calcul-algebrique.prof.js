/* =========================================================
   Spark Learning – js/data/prof/4e/calcul-algebrique.prof.js
   Fiche professeur du chapitre « Calcul algébrique – isoler une inconnue »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   NOM DU FICHIER : le module s'appelle `calcul-algebrique.js` et son identifiant
   est `calcul-algebrique`, sans préfixe de niveau. La fiche prend le nom de
   l'IDENTIFIANT, jamais du fichier. Ne rien renommer : l'identifiant est
   référencé dans js/loader.js et dans les URL du site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["calcul-algebrique"] = {

  /* ch. 5 (relatifs) : résoudre $-4x + 9 = 1$ demande de diviser par un nombre
     négatif. C'est l'erreur 3 de cette fiche, et elle n'est pas corrigible avant
     que la règle des signes soit installée.
     ch. 4 (fractions) : l'étape « diviser par le coefficient » produit une
     fraction dès que la division ne tombe pas juste, et la tâche « quotient » du
     chapitre demande de multiplier les deux membres par un dénominateur. */
  prerequis: [5, 4],

  /* Rang conseillé 4 : après tout le socle calculatoire (relatifs, fractions,
     puissances) et avant la géométrie, qui s'en sert constamment — isoler une
     longueur dans $c^2 = a^2 + b^2$ (rang 5) ou dans la définition du cosinus
     (rang 7) est exactement ce chapitre appliqué. */
  rangConseille: 4,

  attendus: [
    "Mettre un problème en équation et résoudre une équation du premier degré à une inconnue",
    "Utiliser la distributivité pour développer et réduire une expression littérale",
    "Isoler une lettre dans une formule et l'utiliser pour calculer une grandeur",
    "Contrôler un résultat en remplaçant l'inconnue par la valeur trouvée"
  ],

  note: "La résolution d'équations du premier degré $ax + b = c$ et la mise en équation d'un " +
        "problème sont au programme de quatrième.<br/><br/>" +
        "Deux points vont un peu au-delà de l'attendu minimal. Les équations à inconnue " +
        "<strong>des deux côtés</strong> ($8x + 5 = 3x + 30$) sont bien de quatrième, mais elles " +
        "constituent le saut difficile de l'année et méritent une séance dédiée plutôt qu'un " +
        "exercice glissé parmi les autres. L'isolation d'une lettre dans une formule de physique " +
        "($v = \\frac{d}{t}$) relève davantage de la troisième dans beaucoup de progressions ; " +
        "elle est ici parce qu'elle donne tout son sens au chapitre, et qu'elle sert dès cette " +
        "année en physique-chimie.",

  erreurs: [
    {
      titre: "N'opérer que d'un seul côté de l'égalité",
      eleve: "De $5x - 3 = 27$, l'élève passe directement à $5x = 27$ : il a « fait disparaître » le " +
             "$-3$ sans rien faire à droite.",
      cause: "L'égalité est lue comme une consigne à exécuter de gauche à droite, et non comme un " +
             "équilibre entre deux quantités. Le signe $=$ est compris comme « donne », ce qu'il " +
             "signifiait effectivement dans toutes les opérations posées à l'école primaire.",
      remede: "Changer la lecture du signe égal avant de changer la technique : il ne dit pas " +
              "« donne », il dit « ces deux écritures désignent le même nombre ». Une balance à deux " +
              "plateaux le montre en un geste — retirer $3$ d'un seul plateau fait pencher la " +
              "balance.<br/><br/>" +
              "Imposer ensuite une discipline d'écriture : la même opération s'écrit sous les DEUX " +
              "membres, visiblement, avant d'être effectuée. C'est trois secondes de plus par ligne, " +
              "et cela rend l'oubli impossible.<br/><br/>" +
              "Enfin, installer le contrôle par substitution : remplacer $x$ par la valeur trouvée " +
              "dans l'équation de départ. Ce contrôle attrape cette erreur et toutes les autres du " +
              "chapitre, et il ne coûte qu'une ligne.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 est « $8x + 2 = 98$ », réponse 12. Les nombres sont grands,
         donc l'élève qui oublie de soustraire à droite obtient $98 \div 8 =
         12{,}25$, une valeur décimale là où toutes les réponses du chapitre sont
         entières : l'anomalie se voit sans qu'on la désigne. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Diviser avant d'avoir isolé le terme en x",
      eleve: "De $5x + 10 = 20$, l'élève divise tout par $5$ et écrit $x + 10 = 4$, ou bien " +
             "$x + 2 = 20$.",
      cause: "L'ordre des opérations à défaire n'est pas perçu. L'élève voit un coefficient $5$ et " +
             "s'en débarrasse d'abord, parce que c'est lui qui « colle » au $x$, sans voir que la " +
             "division porte alors sur une somme entière.",
      remede: "Donner la règle comme un ordre de déshabillage : on défait <strong>de l'extérieur vers " +
              "l'intérieur</strong>. Le $+10$ est la dernière chose qu'on a faite à $x$, c'est donc " +
              "la première à défaire ; le $\\times 5$ vient ensuite.<br/><br/>" +
              "Faire verbaliser la fabrication de l'expression avant de la défaire : « je prends $x$, " +
              "je multiplie par $5$, puis j'ajoute $10$ ». Défaire, c'est remonter cette chaîne à " +
              "l'envers. L'image du noeud qu'on dénoue, déjà dans l'introduction du chapitre, est " +
              "exactement cela.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 9 est
         « $8x + 17 = 33$ », réponse 2. Le terme constant 17 n'est pas divisible
         par le coefficient 8 : diviser d'abord donne des fractions immédiatement,
         ce qui bloque l'élève et l'oblige à revoir l'ordre — alors qu'avec
         $5x + 10$ la division prématurée produit des nombres entiers et passe
         inaperçue. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Perdre le signe du coefficient négatif",
      eleve: "De $-4x + 9 = 1$, l'élève obtient correctement $-4x = -8$, puis divise par $4$ au lieu " +
             "de $-4$ et conclut $x = -2$.",
      cause: "Le coefficient est lu comme « $4$ avec un moins devant », et non comme le nombre $-4$. " +
             "Au moment de diviser, l'élève utilise la valeur sans son signe.",
      remede: "Faire ENTOURER le coefficient complet, signe compris, avant de diviser. Le geste " +
              "matérialise que le diviseur est $-4$, pas $4$.<br/><br/>" +
              "Puis exploiter le contrôle par substitution, qui tranche ici en une ligne : avec " +
              "$x = -2$, on obtient $-4 \\times (-2) + 9 = 8 + 9 = 17$, et non $1$ ; avec $x = 2$, " +
              "$-4 \\times 2 + 9 = -8 + 9 = 1$. ✓ C'est exactement le raisonnement que demande la " +
              "question 5 de l'évaluation, réécrite pour cela.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est
         « $-3x + 21 = -3$ », réponse 8. Les deux membres portent un signe moins,
         ce qui est le cas le plus exigeant, et la solution imprimée pose
         explicitement la division par $-3$. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Ne pas savoir par quoi commencer quand l'inconnue est des deux côtés",
      eleve: "Devant $8x + 5 = 3x + 30$, l'élève reste bloqué, ou bien soustrait $5$ et $30$ " +
             "simultanément en espérant que « ça se simplifie ».",
      cause: "Toutes les équations rencontrées jusque-là avaient la forme « expression en $x$ égale " +
             "un nombre », et la technique apprise suppose cette forme. Rien n'a dit qu'on pouvait " +
             "aussi déplacer des termes en $x$.",
      remede: "Ajouter une étape ZÉRO à la méthode, avant tout le reste : rassembler les $x$ d'un " +
              "seul côté. On retire $3x$ aux deux membres, et l'équation redevient " +
              "$5x + 5 = 30$ — une forme déjà connue, que l'élève sait traiter.<br/><br/>" +
              "Insister sur le fait qu'aucune règle nouvelle n'est nécessaire : retirer $3x$ des deux " +
              "côtés est la même opération autorisée que retirer $3$. Ce qui change, c'est seulement " +
              "qu'on retire une quantité qui contient l'inconnue.<br/><br/>" +
              "Choisir le côté où rassembler par le confort : garder les $x$ là où leur coefficient " +
              "est le plus grand évite un coefficient négatif.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 7 est
         « $8x + 5 = 3x + 30$ », réponse 5. C'est exactement la forme de l'erreur,
         et sa solution imprimée détaille l'étape zéro (retirer $3x$ des deux
         membres) avant de retomber sur la méthode connue. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Q1 et Q3 résolvent une équation donnée : « calculer ».
     Q2 exprime une lettre en fonction des autres dans $v = \frac{d}{t}$ : écrire
     la même relation autrement, sans rien calculer — « représenter ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancien énoncé fournissait la formule
     $E_c = \frac{1}{2}mv^2$ et demandait $v$, donc la démarche était donnée. Le
     nouvel énoncé (périmètre et écart de deux côtés) n'offre aucune formule :
     l'élève doit choisir l'inconnue et poser l'équation — « chercher ».
     Q5 a été RÉÉCRITE : elle demandait de reconnaître « la bonne résolution »
     parmi quatre. Elle demande maintenant de nommer l'étape fautive et
     d'expliquer la règle violée — « communiquer ». */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "chercher", "communiquer"]
  }
};
