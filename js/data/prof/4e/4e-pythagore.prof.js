/* =========================================================
   Spark Learning – js/data/prof/4e/4e-pythagore.prof.js
   Fiche professeur du chapitre « Théorème de Pythagore » (quatrième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la quatrième (2026-09-13) : c'est sur lui qu'ont été
   calées les conventions reprises dans les onze autres fiches du niveau, et
   c'est lui qui a servi à vérifier la chaîne complète jusqu'au PDF avant de
   dérouler le reste.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-pythagore"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre. La progression annuelle en fait la colonne « S'appuie sur ».

     La contrainte porte sur le rang de la PROGRESSION CONSEILLÉE, pas sur
     l'ordre du livre (voir `validerPrerequis`, scripts/manuel/prof.js) : le
     livre range par domaine, une progression range par dépendance.

     ch. 4 (fractions, multiplication et division) n'est PAS retenu : Pythagore
     de quatrième ne manipule que des entiers et des racines carrées, et aucun
     exercice du chapitre ne demande d'opérer sur des fractions.

     ch. 2 (calcul algébrique) : tout le chapitre consiste à isoler une
     longueur dans $c^2 = a^2 + b^2$. L'élève qui ne sait pas passer de
     $a^2 = c^2 - b^2$ à $a = \sqrt{c^2 - b^2}$ n'échoue pas sur Pythagore,
     il échoue sur la transformation d'égalité — et c'est l'erreur 1 de cette
     fiche. */
  prerequis: [2],

  /* Rang conseillé (2026-09-13) : rang 5. Pythagore ouvre la géométrie de
     l'année, après le socle calculatoire (relatifs, fractions, puissances,
     calcul littéral) dont il a besoin pour isoler une inconnue sous un carré.
     Il précède le triangle rectangle inscrit dans un cercle (rang 6) et le
     cosinus (rang 7), qui s'appuient tous deux sur lui.

     Le LIVRE, lui, le place en chapitre 3, parce qu'il range par domaine. Les
     deux ordres diffèrent, et c'est normal. */
  rangConseille: 5,

  // Attendus de fin d'année de quatrième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Mener des raisonnements et démontrer en utilisant le théorème de Pythagore et sa réciproque",
    "Calculer une longueur dans un triangle rectangle à partir des deux autres",
    "Déterminer si un triangle dont on connaît les trois côtés est rectangle",
    "Calculer la distance entre deux points d'un repère orthonormé"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Le théorème de Pythagore et sa réciproque sont au programme de quatrième, " +
        "distance entre deux points d'un repère comprise.<br/><br/>" +
        "Deux points vont au-delà. D'abord la question 3 du problème, qui demande un " +
        "$\\arctan$ : la trigonométrie inverse n'est pas au programme du collège, et cette " +
        "question est à réserver à une ouverture orale ou à supprimer selon la classe. " +
        "Ensuite les valeurs exactes sous forme de radical non entier ($\\sqrt{13}$, par " +
        "exemple) : le chapitre les évite volontairement en ne tirant que des triplets " +
        "pythagoriciens, ce qui laisse l'élève concentré sur le sens de l'opération. " +
        "Les introduire est possible, mais c'est un choix à faire sciemment.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Additionner pour chercher un côté de l'angle droit",
      eleve: "Pour une hypoténuse de $13$ et un côté de $5$, l'élève écrit $\\sqrt{13^2 + 5^2} = \\sqrt{194} \\approx 13{,}9$ " +
             "et ne s'étonne pas d'avoir trouvé un côté plus long que l'hypoténuse.",
      cause: "Le théorème est mémorisé comme une formule unique, « on additionne les carrés », sans son rôle : " +
             "l'addition ne vaut que lorsque l'inconnue est l'hypoténuse. L'élève applique la forme écrite au " +
             "tableau, pas la relation entre les trois longueurs.",
      remede: "Installer un contrôle de grandeur AVANT tout calcul : demander systématiquement « la longueur que " +
              "je cherche est-elle la plus grande ou non ? ». Si elle n'est pas la plus grande, le résultat doit " +
              "être plus petit que l'hypoténuse, donc on soustrait.<br/><br/>" +
              "Le schéma « On additionne pour l'hypoténuse, on soustrait pour un petit côté » du cours est fait " +
              "pour cela : les deux triangles y sont le <strong>même</strong> $6$-$8$-$10$, seule la place du " +
              "point d'interrogation change. Y revenir coûte dix secondes et règle l'erreur plus sûrement qu'une " +
              "règle supplémentaire à retenir.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 2 est « un câble tendu de 10 m relie le sommet d'un poteau
         vertical à un piquet planté à 8 m du pied ; quelle est la hauteur du
         poteau ? ». L'hypoténuse est donnée, un côté de l'angle droit est
         cherché : c'est exactement la situation de l'erreur, et la figure y
         porte le point d'interrogation sur le côté vertical. Un élève qui
         additionne trouve 12,8, plus grand que le câble lui-même. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Prendre pour hypoténuse le côté « qui monte »",
      eleve: "Sur un triangle rectangle dessiné avec l'angle droit en haut, l'élève désigne comme hypoténuse " +
             "le côté vertical, ou simplement le plus incliné du dessin.",
      cause: "L'hypoténuse a été identifiée à une POSITION sur la feuille, parce que tous les triangles vus " +
             "en classe sont dessinés dans la même orientation. Rien n'a jamais mis cette association à " +
             "l'épreuve, donc elle tient lieu de définition.",
      remede: "Faire tourner la feuille. C'est le geste le plus efficace du chapitre : le triangle ne change " +
              "pas, la position de l'hypoténuse sur la table change, donc la position n'est pas le bon " +
              "critère.<br/><br/>" +
              "Puis fixer la définition par un geste : poser le doigt sur le petit carré de l'angle droit, et " +
              "chercher le côté que le doigt ne touche pas. Le schéma « L'hypoténuse ne dépend pas de " +
              "l'orientation du triangle » propose le même triangle $3$-$4$-$5$ dans trois orientations, dont " +
              "une où l'hypoténuse est horizontale et en haut.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille réellement cette erreur : tous donnent les longueurs " +
              "en toutes lettres, ou les placent dans une situation où le côté droit est physiquement évident " +
              "— un mur est vertical, un terrain a des coins droits. La remédiation demande une figure à " +
              "construire, d'orientation inhabituelle, à prévoir hors du livre.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         pointer un exercice qui ne demande jamais d'IDENTIFIER l'hypoténuse
         enverrait l'enseignant vers une remédiation qui n'en est pas une. Le
         remède le dit explicitement, comme le font déjà six remédiations de la
         sixième. */
      exercice: null
    },
    {
      titre: "Conclure « presque rectangle »",
      eleve: "Pour les côtés $6$, $8$ et $9$ : « $6^2 + 8^2 = 100$ et $9^2 = 81$, c'est assez proche, donc " +
             "le triangle est rectangle. »",
      cause: "Transfert d'une habitude légitime ailleurs : en mesure, on arrondit, et deux longueurs proches " +
             "sont « les mêmes ». L'élève ne perçoit pas que la réciproque est un test logique, pas une " +
             "comparaison de mesures.",
      remede: "Montrer ce que coûte l'approximation. Le schéma « Presque rectangle ne veut rien dire » du cours " +
              "porte sur le triangle $5$-$7$-$9$, dont le plus grand angle vaut $95{,}7°$ : l'écart entre " +
              "$74$ et $81$ se traduit par près de $6°$, ce qui est visible à l'équerre.<br/><br/>" +
              "Faire ensuite construire le triangle au compas et poser l'équerre : l'élève constate lui-même " +
              "que l'angle dépasse. Le calcul et le dessin disent alors la même chose, et c'est le calcul qui " +
              "a tranché le premier.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 donne trois
         piquets à 20 m, 21 m et 28 m, et la réponse est NON. Le générateur tire
         une fois sur deux un triplet faux obtenu en décalant le plus grand côté
         d'une seule unité — ici 29 devenu 28 — si bien que l'écart est trop
         petit pour que l'oeil tranche. L'exercice prend donc l'erreur à revers :
         841 contre 784, c'est « proche », et c'est faux. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier la racine carrée",
      eleve: "L'élève calcule correctement $c^2 = 36 + 64 = 100$, puis écrit « $c = 100$ » et passe à la " +
             "question suivante.",
      cause: "Le calcul des carrés occupe toute l'attention et constitue, pour l'élève, la difficulté du " +
             "problème. Une fois $100$ obtenu, le sentiment d'avoir fini est complet : la dernière étape " +
             "n'est pas oubliée par négligence, elle est oubliée parce qu'elle ne ressemble pas à du travail.",
      remede: "Exiger que la ligne de calcul commence toujours par « $c^2 = $ » et non par « $c = $ ». " +
              "L'égalité écrite porte alors le carré, et conclure sur $c$ sans racine devient visiblement " +
              "faux sur la feuille de l'élève, sans qu'on ait à le lui dire.<br/><br/>" +
              "Ajouter un contrôle d'ordre de grandeur : une longueur de $100$ pour un triangle dont les " +
              "côtés mesurent $6$ et $8$ est absurde. Faire formuler « ma réponse est-elle plausible ? » " +
              "attrape cette erreur et beaucoup d'autres.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est un bateau
         qui navigue 3 km à l'est puis 4 km au nord — une tâche « hypoténuse ».
         Sa solution imprimée détaille les deux lignes séparément, « c² = 9 + 16
         = 25 » puis « c = racine(25) = 5 », ce qui donne exactement le modèle
         d'écriture que le remède demande d'exiger. Un élève qui s'arrête à 25
         annonce un bateau à 25 km alors qu'il n'a parcouru que 7 km en tout. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     DEUX QUESTIONS ONT ÉTÉ RÉÉCRITES dans js/data/4e/4e-pythagore.js le
     2026-09-13, parce que déclarer une compétence ne suffit pas : la question
     doit réellement la mobiliser.

     Q4 demandait à quelle hauteur une échelle touche un mur — un Pythagore
     inverse dont l'énoncé donnait toute la démarche. Elle demande maintenant le
     PÉRIMÈTRE d'un rectangle dont on connaît la longueur et la diagonale :
     l'élève doit découvrir seul qu'il faut d'abord retrouver la largeur, ce que
     rien ne lui signale. C'est « chercher ».

     Q5 demandait la distance entre deux points d'un repère, soit du calcul pur.
     Elle demande maintenant de juger le raisonnement d'une élève et de dire
     pourquoi il échoue : produire une explication, non un nombre. C'est
     « communiquer », et c'était la compétence la moins évaluée de l'ouvrage.

     Q1 et Q2 appliquent le théorème dans les deux sens : « calculer ».
     Q3 applique la réciproque, donc conclut d'un calcul à une propriété
     géométrique : « raisonner ». */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "chercher", "communiquer"]
  }
};
