/* =========================================================
   Spark Learning – js/data/prof/4e/4e-statistiques.prof.js
   Fiche professeur du chapitre « Statistiques : médiane et quartiles »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-statistiques"] = {

  /* ch. 4 (fractions) : la médiane d'une série de longueur paire est une
     DEMI-SOMME, et les quartiles en sont une aussi. C'est la seule dépendance
     calculatoire du chapitre, mais elle est réelle : un élève qui ne sait pas
     que $\dfrac{5 + 7}{2}$ vaut 6 échoue sur la médiane sans que la statistique
     y soit pour quelque chose. */
  prerequis: [4],

  /* Rang conseillé 11 : le chapitre est indépendant de tout le reste du
     programme et se place traditionnellement en fin d'année, avec les
     probabilités (rang 12) dont il partage le domaine. L'ordre
     statistiques puis probabilités est le bon : la FRÉQUENCE observée, installée
     ici, donne ensuite du sens à la PROBABILITÉ. */
  rangConseille: 11,

  attendus: [
    "Calculer et interpréter la médiane d'une série statistique",
    "Déterminer les quartiles d'une série et l'écart interquartile",
    "Calculer l'étendue d'une série",
    "Choisir un indicateur pertinent selon la série, et comparer médiane et moyenne"
  ],

  note: "La médiane, les quartiles et l'étendue sont au programme de quatrième, ainsi que la " +
        "comparaison avec la moyenne.<br/><br/>" +
        "ATTENTION, point de vigilance réel : il existe plusieurs conventions pour calculer les " +
        "quartiles, et elles ne donnent pas toujours le même résultat. Ce chapitre emploie la " +
        "convention « médiane de chaque moitié », qui est la plus répandue au collège et la plus " +
        "facile à justifier. D'autres manuels, et la plupart des tableurs, utilisent une " +
        "définition par position ($Q_1$ est la valeur de rang $\\frac{n}{4}$ arrondi par excès) : " +
        "les élèves qui vérifient au tableur peuvent donc obtenir un autre nombre. Annoncer la " +
        "convention retenue en début de chapitre évite une discussion stérile.<br/><br/>" +
        "Les exercices de la banque tirent des séries de longueur multiple de $4$ pour les " +
        "quartiles, afin que ceux-ci tombent sur des valeurs simples : la difficulté porte alors " +
        "sur la DÉFINITION, et non sur un cas limite de convention.",

  erreurs: [
    {
      titre: "Oublier d'ordonner la série",
      eleve: "Devant la série $12, 5, 19, 7, 3$, l'élève annonce que la médiane vaut $19$ parce que " +
             "c'est la valeur du milieu de la LISTE telle qu'elle est écrite.",
      cause: "La médiane est retenue comme « la valeur du milieu », et le mot « milieu » renvoie " +
             "naturellement à la position dans la liste lue. L'ordre croissant, qui est une condition " +
             "de la définition, n'est pas perçu comme tel.",
      remede: "Reformuler la définition en y intégrant sa condition : la médiane est la valeur qui " +
              "PARTAGE LA SÉRIE ORDONNÉE en deux groupes de même effectif. Sans ordre, il n'y a pas " +
              "de partage possible, et le mot « milieu » n'a aucun sens.<br/><br/>" +
              "Imposer un geste systématique : réécrire la série rangée avant tout calcul, sur une " +
              "ligne, et barrer la liste de départ. C'est trois secondes et cela supprime l'erreur " +
              "définitivement.<br/><br/>" +
              "Les énoncés de la banque précisent « déjà rangées dans l'ordre croissant » pour les " +
              "tâches de médiane, ce qui neutralise la difficulté : c'est un choix assumé, pour que " +
              "l'élève travaille la définition. L'enseignant qui veut exercer le tri doit brouiller " +
              "une série lui-même, au tableau.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 2 est une tâche « etendue » dont l'énoncé ne dit PAS que la
         série est rangée (« voici les températures relevées à midi : 3, 6, 9, 9,
         10, 11, 26 »). L'étendue demande d'identifier la plus grande et la plus
         petite valeur, ce qui oblige à parcourir la série au lieu de lire une
         position : c'est la même vigilance que la médiane exige. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Prendre une seule valeur centrale quand la série est de longueur paire",
      eleve: "Pour $1, 2, 4, 6, 11, 16, 18, 20$, l'élève annonce une médiane de $6$ ou de $11$, en " +
             "choisissant l'une des deux valeurs centrales.",
      cause: "La règle a été installée sur des séries de longueur impaire, où une valeur est " +
             "effectivement seule au milieu. Le cas pair n'a pas été rencontré assez souvent pour " +
             "que l'élève sache qu'il demande autre chose.",
      remede: "Faire constater le problème avant de donner la solution : avec huit valeurs, " +
              "« autant avant qu'après » ne désigne aucune valeur de la série. Prendre $6$ laisse " +
              "trois valeurs avant et quatre après : le partage n'est pas équilibré.<br/><br/>" +
              "D'où la convention, qui est une réponse à ce problème et non une règle de plus : on " +
              "prend la DEMI-SOMME des deux valeurs centrales, $\\dfrac{6 + 11}{2} = 8{,}5$. Le " +
              "partage est alors exact, quatre de chaque côté.<br/><br/>" +
              "Dire explicitement que la médiane peut ne pas figurer dans la série, et que ce n'est " +
              "pas une anomalie : $8{,}5$ n'est pas une des notes, et c'est bien la médiane. Beaucoup " +
              "d'élèves rejettent le résultat pour cette seule raison.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 7 est une tâche
         « mediane-paire » — série de 8 notes, réponse 8{,}5. La réponse ne figure
         PAS dans la série, ce qui est exactement ce que l'élève doit accepter, et
         la solution imprimée le dit en toutes lettres.

         NOTE SUR LA BANQUE : avant le 2026-09-13, le générateur ne tirait que des
         séries de longueur IMPAIRE (n dans 5, 7, 9). La médiane d'une série paire
         — que l'évaluation pose en question 2 — n'était donc JAMAIS exercée : le
         chapitre évaluait une technique que ses exercices ne faisaient pas
         travailler. La tâche « mediane-paire » a été ajoutée pour cela. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Croire que la médiane est la moyenne des valeurs extrêmes",
      eleve: "Pour $2, 4, 5, 6, 8, 12, 13$, l'élève calcule $\\dfrac{2 + 13}{2} = 7{,}5$ au lieu de " +
             "lire la quatrième valeur, $6$.",
      cause: "Le mot « milieu » est interprété au sens d'un milieu de SEGMENT, entre les deux bornes, " +
             "et non d'une position dans un effectif. La demi-somme apprise pour le cas pair renforce " +
             "la confusion, puisqu'elle ressemble à ce calcul.",
      remede: "Opposer les deux notions sur un exemple où elles diffèrent beaucoup. La médiane " +
              "dépend du RANG des valeurs, pas de leur grandeur : déplacer la valeur extrême de $13$ " +
              "à $130$ ne change PAS la médiane, qui reste $6$, alors qu'elle changerait " +
              "complètement la demi-somme des extrêmes.<br/><br/>" +
              "C'est d'ailleurs précisément la qualité de la médiane, et la raison pour laquelle on " +
              "l'enseigne : elle résiste aux valeurs aberrantes. Faire cette manipulation une fois " +
              "installe à la fois la définition et son intérêt.<br/><br/>" +
              "Donner enfin le geste sûr pour une série impaire : compter l'effectif, diviser par " +
              "deux, arrondir par excès, et lire la valeur de ce rang. Ici $7$ valeurs, rang $4$, " +
              "valeur $6$.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 11 est une tâche
         « mediane-impaire » — série de 9 notes, réponse 7. La demi-somme des
         extrêmes donnerait 10, nettement plus haut, et la solution imprimée
         détaille le comptage du RANG plutôt qu'un calcul sur les valeurs. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Confondre l'étendue et l'écart interquartile",
      eleve: "Interrogé sur la dispersion, l'élève donne l'étendue quand on attend l'écart " +
             "interquartile, ou calcule $Q_3 - Q_1$ en croyant calculer l'étendue.",
      cause: "Les deux nombres sont des différences entre deux valeurs de la série et décrivent tous " +
             "deux la dispersion. Rien dans leur forme ne les distingue.",
      remede: "Distinguer par CE QU'ILS MESURENT, pas par leur formule. L'<strong>étendue</strong> " +
              "couvre TOUTE la série, extrêmes compris : elle dit l'amplitude maximale, et elle est " +
              "donc très sensible à une valeur aberrante. L'<strong>écart interquartile</strong> ne " +
              "couvre que la moitié CENTRALE des valeurs : il dit comment le gros de la série est " +
              "groupé, en ignorant les extrêmes.<br/><br/>" +
              "Le faire voir sur la série des salaires de la question 5 de l'évaluation : l'étendue " +
              "y vaut $10\\,300$ euros à cause d'un seul salaire, alors que l'écart interquartile " +
              "reste de quelques centaines d'euros. Les deux nombres décrivent la même série et " +
              "racontent deux histoires différentes — c'est cela qu'il faut que l'élève comprenne.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est une tâche
         « quartile » (premier quartile d'une série de 8 valeurs, réponse 12) et
         l'exercice 2 une tâche « etendue » sur une série comportant une valeur
         nettement détachée (26 contre des valeurs entre 3 et 11). Le renvoi
         pointe le quartile, car c'est la notion neuve ; traiter les deux
         exercices à la suite met le contraste sous les yeux. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Q1 et Q2 calculent une médiane, en série impaire puis paire : « calculer ».
     Q3 a été ALLÉGÉE le 2026-09-13 : son énoncé donnait le découpage en moitiés,
     c'est-à-dire le travail demandé. Sans ce découpage, la tâche consiste à
     SITUER une position dans une série ordonnée, sans calcul nouveau :
     « représenter ».
     Q4 demande quel indicateur résiste aux valeurs extrêmes : conclure d'une
     propriété à un choix, sans calcul — « raisonner ».
     Q5 a été RÉÉCRITE : c'était une soustraction dont l'énoncé fournissait $Q_1$
     ET le découpage. Elle demande maintenant de justifier le choix d'un
     indicateur devant une série à valeur extrême — « communiquer ». Ses nombres
     ont été corrigés le même jour : une première version annonçait une moyenne de
     2 711 euros calculée sur une somme fausse, erreur trouvée par le contrôle
     arithmétique systématique et non à la relecture. */
  competences: {
    evaluation: ["calculer", "calculer", "représenter", "raisonner", "communiquer"]
  }
};
