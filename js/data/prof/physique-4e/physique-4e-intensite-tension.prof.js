/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-intensite-tension.prof.js
   Fiche professeur du chapitre « L'intensité et la tension électrique »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-4e-lois-circuits.prof.js). Référentiel PHYSIQUE : ce chapitre est
   celui du niveau où `réaliser` — le geste de brancher un appareil — porte le
   plus d'enjeu, matériel compris.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-intensite-tension"] = {

  /* Aucun prérequis de quatrième. Le chapitre ouvre l'électricité du niveau :
     il installe le circuit, les deux grandeurs et les deux appareils, en
     supposant seulement les notions du cycle 3 (circuit qui fonctionne ou non,
     conducteur et isolant), qui ne font pas l'objet d'un chapitre ici.

     C'est lui, en revanche, qui est le prérequis du chapitre 5 (Les lois des
     circuits) : la progression le montrera dans sa colonne « Prépare », et
     c'est la dépendance la plus forte du niveau. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 4, celui du livre. Le chapitre doit
     impérativement précéder « Les lois des circuits » (rang 5), qui compare
     des intensités et des tensions qu'il faut d'abord savoir définir et
     mesurer. Les deux forment un bloc, à traiter d'un tenant.

     Il gagne aussi à être placé à un moment de l'année où le matériel de
     mesure est disponible : c'est le chapitre le plus expérimental du
     niveau, et il perd l'essentiel de son intérêt traité au tableau. */
  rangConseille: 4,

  // Attendus de fin d'année, cycle 4 (2020), thème « L'énergie et ses
  // conversions ». Aux mots du programme.
  attendus: [
    "Réaliser des circuits électriques simples et exploiter les lois de l'électricité",
    "Élaborer et mettre en œuvre un protocole de mesure d'une intensité et d'une tension",
    "Utiliser les unités de l'intensité et de la tension et leurs sous-multiples"
  ],

  note: "Intensité, tension, appareils de mesure, calibre et court-circuit sont au programme du " +
        "cycle 4. Le chapitre s'y tient.<br/><br/>" +
        "<strong>Un décalage important entre le cours et les exercices.</strong> Le cours porte " +
        "sur le <strong>protocole de mesure</strong> — où brancher, quel calibre, pourquoi — et " +
        "c'est là tout son intérêt ; les trente-six exercices tirés, eux, ne portent " +
        "<strong>que</strong> sur des conversions d'unités (mA vers A, mV vers V). L'entraînement " +
        "écrit du livre ne couvre donc pas le cœur du chapitre. Ce n'est pas un défaut à " +
        "corriger : un protocole de mesure ne s'entraîne pas sur une feuille. Mais il faut le " +
        "savoir, et prévoir une séance de travaux pratiques — sans quoi l'élève aura fait trente " +
        "divisions par mille et n'aura jamais branché d'ampèremètre.<br/><br/>" +
        "C'est aussi pourquoi ce chapitre ne reçoit <strong>pas</strong> de schéma sur ses " +
        "exercices, là où cinq autres chapitres du cycle en ont reçu : dessiner un circuit à côté " +
        "d'une conversion d'unité serait décoratif. Le schéma du cours, lui, montre les deux " +
        "branchements côte à côte et c'est celui auquel il faut revenir.<br/><br/>" +
        "<strong>Sur le calibre</strong>, la règle du cours est « toujours commencer par le plus " +
        "grand », et la question 5 de l'évaluation l'évalue. C'est la règle de sécurité usuelle, " +
        "à ne pas confondre avec la recherche de précision : on commence large pour protéger " +
        "l'appareil, on affine ensuite pour lire mieux. L'exemple du cours détaille les deux " +
        "temps.",

  erreurs: [
    {
      titre: "Brancher l'ampèremètre en dérivation",
      eleve: "L'élève pose l'ampèremètre aux bornes de la lampe, comme un voltmètre. Le fusible " +
             "de l'appareil fond, ou l'alimentation se met en sécurité.",
      cause: "Échec de <strong>réaliser</strong>, et c'est l'erreur la plus coûteuse du chapitre — " +
             "la seule qui casse du matériel. Les deux appareils sont souvent le même multimètre, " +
             "les deux mots se ressemblent, et le geste précède le raisonnement : on câble d'abord " +
             "et l'on vérifie après. L'élève connaît fréquemment la règle et se trompe quand même.",
      remede: "Faire reposer la règle sur ce que l'appareil mesure, jamais sur son nom. " +
              "L'ampèremètre mesure ce qui le <strong>traverse</strong> : il faut donc " +
              "<strong>ouvrir</strong> le circuit et l'insérer dans le fil. Le voltmètre mesure " +
              "une différence <strong>entre deux points</strong> : on le <strong>pose</strong> aux " +
              "bornes sans rien débrancher. « Pour l'ampèremètre je coupe, pour le voltmètre je " +
              "pose. »<br/><br/>" +
              "Donner le <strong>pourquoi</strong>, qui rend la règle mémorable là où la règle " +
              "seule s'oublie : la résistance interne d'un ampèremètre est quasi nulle. Branché " +
              "aux bornes d'une lampe, il offre au courant un chemin sans résistance — c'est la " +
              "définition du court-circuit, et c'est la définition D5 du cours.<br/><br/>" +
              "Imposer enfin un rituel avant chaque mise sous tension : l'élève annonce à voix " +
              "haute où va chaque appareil et pourquoi, alimentation éteinte. C'est la seule " +
              "remédiation qui protège le matériel, elle prend moins d'une minute, et elle " +
              "transforme l'erreur en vérification plutôt qu'en accident.",
      /* Renvoi vers le QUIZ, en connaissance de cause et non par défaut. Les
         trente-six exercices tirés sont TOUS des conversions d'unités : le
         générateur ne produit que quatre moules (mA vers A, A vers mA, mV vers
         V, V vers mV) et aucun ne demande où brancher un appareil. Le quiz 1,
         lui, pose exactement la question, et son premier distracteur (« en
         dérivation, aux bornes de la lampe ») est mot pour mot l'erreur. Le
         quiz 3 en donne la conséquence ; les poser tous deux à l'oral avant le
         TP est la remédiation la plus efficace du chapitre. */
      exercice: { type: "quiz", n: 1 }
    },
    {
      titre: "Diviser au lieu de multiplier dans une conversion",
      eleve: "Pour $1{,}51$ A exprimés en milliampères, l'élève divise par mille et annonce " +
             "$0{,}00151$ mA. Ou l'inverse : $200$ mV deviennent $200\\,000$ V.",
      cause: "Le facteur mille est connu, son sens d'application ne l'est pas. L'élève se souvient " +
             "qu'« il faut faire quelque chose avec mille » et tranche au hasard, d'autant que les " +
             "deux opérations sont aussi faciles l'une que l'autre. Rien dans l'énoncé ne " +
             "l'oriente, et le résultat obtenu ne le choque pas.",
      remede: "Faire raisonner sur la <strong>taille de l'unité</strong> et non sur l'opération : " +
              "un milliampère est <strong>mille fois plus petit</strong> qu'un ampère. Pour " +
              "mesurer la même chose avec une unité plus petite, il en faut " +
              "<strong>plus</strong> — donc le nombre augmente. L'élève n'a plus à retenir un " +
              "sens, il a à comparer deux unités.<br/><br/>" +
              "L'analogie des longueurs fonctionne immédiatement, parce qu'elle est déjà acquise : " +
              "$1{,}5$ m fait $1\\,500$ mm, personne n'écrit $0{,}0015$ mm. Le passage de A à mA " +
              "est exactement le même, avec le même préfixe « milli ». Faire le parallèle une " +
              "fois suffit souvent.<br/><br/>" +
              "Ajouter un contrôle d'ordre de grandeur, que l'élève peut poser seul : les " +
              "intensités d'un circuit de collège se comptent en dizaines ou centaines de " +
              "milliampères, soit quelques dixièmes d'ampère. Une réponse en millièmes de " +
              "milliampère ou en milliers d'ampères est fausse avant vérification.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 3) : l'exercice 1 est « un ampèremètre [...]
         affiche une intensité I = 1,51 A ; exprime cette intensité en
         milliampères ». C'est le sens A vers mA, celui où l'erreur donne le
         résultat le plus absurde (0,00151 mA, alors que la réponse est
         1510 mA), et c'est le premier exercice du chapitre — donc celui où
         l'élève n'a encore aucune habitude. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre intensité et tension",
      eleve: "« La pile a une intensité de $4{,}5$ A », ou « la lampe reçoit une tension de " +
             "$0{,}3$ A ». Les deux grandeurs et leurs unités sont employées l'une pour l'autre.",
      cause: "Les deux notions arrivent dans la même séance, portent des lettres voisines, se " +
             "mesurent avec le même boîtier et se disent avec les mêmes mots (« mesurer », " +
             "« aux bornes »). Rien ne les distingue pour un élève qui n'a pas encore de modèle " +
             "physique de ce qui circule et de ce qui pousse.",
      remede: "Séparer les deux grandeurs par ce qu'on en fait, pas par leur définition. " +
              "L'intensité se mesure <strong>en un point</strong> du circuit (ce qui passe " +
              "ici) ; la tension se mesure <strong>entre deux points</strong> (l'écart entre " +
              "ici et là). Un élève qui sait combien de points il faut désigner ne confond plus " +
              "les deux, et les branchements des deux appareils en découlent — un seul endroit " +
              "coupé, ou deux bornes reliées.<br/><br/>" +
              "L'analogie hydraulique aide, à condition de la présenter comme une image et de le " +
              "dire : la tension est la <strong>dénivelée</strong> qui fait couler l'eau, " +
              "l'intensité est le <strong>débit</strong> qui passe. Une hauteur ne se mesure " +
              "jamais qu'entre deux niveaux, un débit se mesure en un endroit du tuyau.<br/><br/>" +
              "Exiger enfin l'<strong>unité</strong> dans chaque réponse, et refuser un nombre " +
              "nu. « $4{,}5$ » ne veut rien dire ; « $4{,}5$ V » nomme la grandeur en même temps " +
              "que la valeur, et une pile de $4{,}5$ A devient visiblement fausse. L'unité est " +
              "le garde-fou le moins coûteux de tout le chapitre.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les trente-six exercices tirés portent chacun sur UNE SEULE
         grandeur, annoncée dans l'énoncé (« un ampèremètre affiche une
         intensité I = ... »). L'élève n'a donc jamais à décider laquelle des
         deux il manipule, et aucun exercice ne peut travailler la confusion.
         Elle se remédie en classe, en exigeant les unités sur chaque réponse,
         et le remède le dit. */
      exercice: null
    },
    {
      titre: "Commencer par le plus petit calibre",
      eleve: "Devant un ampèremètre à trois calibres, l'élève choisit $200$ mA « pour être plus " +
             "précis », sans savoir ce qu'il va mesurer. L'appareil sature, ou son fusible fond.",
      cause: "Le raisonnement est honnête et même louable : un petit calibre donne une lecture " +
             "plus fine, donc il paraît meilleur. Ce qui manque, c'est la prise en compte du " +
             "<strong>risque</strong> — l'élève raisonne sur la qualité de la mesure alors que la " +
             "première contrainte est de ne pas détruire l'appareil.",
      remede: "Énoncer la règle avec sa raison, et dans l'ordre : on commence par le " +
              "<strong>plus grand</strong> calibre parce qu'on ne sait pas encore ce qu'on " +
              "mesure ; on affine <strong>ensuite</strong>, une fois qu'on a une valeur " +
              "approchée. Le grand calibre n'est pas un mauvais choix, c'est une étape.<br/><br/>" +
              "L'analogie de la balance rend la règle évidente : on ne pèse pas un sac de ciment " +
              "sur une balance de cuisine pour « avoir plus de précision ». On regarde d'abord " +
              "l'ordre de grandeur, on choisit l'instrument ensuite.<br/><br/>" +
              "Faire enfin verbaliser l'estimation <strong>avant</strong> la mesure : « je " +
              "m'attends à quelques dixièmes d'ampère ». Un élève qui a estimé choisit son " +
              "calibre par raisonnement, et non par préférence — et l'exemple du cours détaille " +
              "exactement cette démarche en trois temps, sur les calibres $200$ mA, $2$ A et " +
              "$10$ A.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 : aucun des
         trente-six exercices tirés ne parle de calibre — ils convertissent
         tous une valeur déjà lue. La question 5 de l'évaluation porte
         précisément là-dessus, mais une remédiation ne renvoie jamais vers
         l'évaluation notée. La remédiation appartient à la séance de travaux
         pratiques, et le remède y renvoie explicitement. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — $450$ mA en ampères. Conversion dans le sens le plus courant,
          relation du cours appliquée telle quelle : « s'approprier ».
     Q2 — le voltmètre se branche toujours … ? Restitution d'une règle de
          protocole : « réaliser » — même énoncée sur copie, c'est la
          connaissance du geste qui est évaluée.
     Q3 — $2{,}5$ V en millivolts. Sens inverse de Q1 : l'élève doit décider
          du sens, ce qui est l'erreur 2 de cette fiche : « analyser ».
     Q4 — pourquoi ne jamais brancher un ampèremètre en dérivation ? Il faut
          juger une pratique et en donner la conséquence physique
          (court-circuit) : « valider ».
     Q5 — quel calibre choisir en premier, par sécurité ? Décision de
          protocole expérimental : « réaliser ».

     « Communiquer » n'est pas mobilisé : aucune question ne demande de
     produire une explication rédigée. En revanche « réaliser » l'est deux
     fois, ce qui est cohérent — c'est le chapitre le plus expérimental du
     niveau, et la grille imprimée le montrera. */
  competences: {
    evaluation: ["s'approprier", "réaliser", "analyser", "valider", "réaliser"]
  }
};
