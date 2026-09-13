/* =========================================================
   Spark Learning – js/data/prof/5e/5e-proportionnalite.prof.js
   Fiche professeur du chapitre « Proportionnalité appliquée » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-proportionnalite"] = {

  /* ch. 4 (opérations sur les fractions) : un pourcentage est une fraction de
     dénominateur $100$, une échelle est une fraction, et le coefficient de
     proportionnalité est un quotient. Les trois objets du chapitre sont donc des
     fractions sous un autre nom, et un élève qui ne sait pas encore multiplier
     par une fraction ne peut que réciter des procédures. */
  prerequis: [4],

  /* Rang conseillé 5 sur 14, après les fractions dont le chapitre est
     l'application, et avant le littéral qui s'appuie sur ses formules
     ($P = 5x + 2$, $v = \dfrac{d}{t}$). Le livre le range aussi en 5e position :
     ici, les deux ordres coïncident exactement. */
  rangConseille: 5,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaines « Nombres et calculs » et « Grandeurs et mesures ».
  attendus: [
    "Reconnaître une situation de proportionnalité et utiliser un coefficient de proportionnalité",
    "Calculer et appliquer un pourcentage d'augmentation ou de diminution, et retrouver un taux",
    "Utiliser une échelle, et calculer une vitesse moyenne en contrôlant la cohérence des unités"
  ],

  note: "Pourcentages, échelles et vitesse moyenne sont tous au programme de cinquième. Trois réserves. " +
        "Le fait qu'une hausse de $10\\%$ suivie d'une baisse de $10\\%$ ne redonne pas le prix initial est " +
        "au programme en tant que CONSTAT sur un exemple numérique ; sa justification par le produit des " +
        "coefficients ($0{,}9 \\times 1{,}1 = 0{,}99$) relève de la quatrième, où les coefficients " +
        "multiplicateurs sont formalisés. On l'installe donc en faisant calculer deux fois de suite sur un " +
        "prix concret, jamais en posant le produit. " +
        "La conversion $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s, mentionnée dans le cours, n'est pas exigible en " +
        "cinquième et peut dérouter : la réserver aux élèves à l'aise. " +
        "Enfin, la vitesse est ici toujours CONSTANTE ; la vitesse moyenne d'un trajet à allures variables, " +
        "qui n'est pas la moyenne des vitesses, est un piège classique que le chapitre n'aborde pas et " +
        "qu'il vaut mieux traiter explicitement en classe.",

  erreurs: [
    {
      titre: "Soustraire le taux au lieu du montant de la réduction",
      eleve: "Un article à $150$ € soldé à $-30\\%$ : l'élève répond $120$ €, en retirant $30$ au lieu de " +
             "retirer $30\\%$ de $150$.",
      cause: "Le symbole $\\%$ est lu comme une décoration du nombre, non comme une opération à effectuer. " +
             "L'élève voit « $-30$ » et soustrait $30$. L'erreur est renforcée par le fait que le résultat " +
             "obtenu reste plausible, et qu'elle donne même le bon résultat quand le prix vaut $100$ €.",
      remede: "Faire systématiquement calculer la réduction EN EUROS avant toute soustraction, sur deux " +
              "lignes séparées : d'abord $30\\%$ de $150$, soit $45$ €, puis $150 - 45 = 105$ €. " +
              "Faire constater ensuite que le même taux ne donne pas le même montant selon le prix : " +
              "$30\\%$ de $50$ € vaut $15$ €, pas $30$ €. C'est ce qui montre qu'un pourcentage n'est pas " +
              "un nombre d'euros mais une PROPORTION, et donc qu'il dépend de ce à quoi il s'applique.",
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier la conversion d'unités dans une échelle",
      eleve: "Sur une carte au $\\dfrac{1}{25\\,000}$, pour $6$ cm mesurés, l'élève répond " +
             "$150\\,000$ mètres au lieu de $1\\,500$ mètres.",
      cause: "Le calcul de proportionnalité est juste — $6 \\times 25\\,000 = 150\\,000$ — mais le résultat " +
             "est en CENTIMÈTRES, l'échelle comparant des longueurs de même unité. L'élève ne voit pas que " +
             "l'unité de son résultat est celle de sa mesure, et répond dans l'unité que la question " +
             "demande sans convertir.",
      remede: "Imposer l'écriture de l'unité à CHAQUE ligne, ce qui rend l'oubli visible : " +
              "$6$ cm $\\times 25\\,000 = 150\\,000$ cm, puis $150\\,000$ cm $= 1\\,500$ m. " +
              "Ajouter un contrôle de vraisemblance que l'élève peut faire seul : $150$ km entre deux " +
              "villages distants de $6$ cm sur une carte, c'est absurde pour une carte de randonnée. " +
              "Un ordre de grandeur faux signale l'oubli d'une conversion, sans qu'on ait à refaire le calcul.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Rapporter la baisse au prix d'arrivée",
      eleve: "Un prix passe de $200$ € à $170$ € ; l'élève calcule " +
             "$\\dfrac{30}{170} \\times 100 \\approx 17{,}6\\%$ au lieu de $15\\%$.",
      cause: "La baisse, $30$ €, est correctement trouvée, mais le dénominateur est pris au hasard parmi " +
             "les deux nombres disponibles. Rien dans la formule mémorisée ne dit lequel choisir, et " +
             "l'élève n'a pas en tête qu'un pourcentage se rapporte toujours à la situation de DÉPART.",
      remede: "Formuler la question dans l'ordre du temps : « par rapport à quoi la baisse est-elle " +
              "mesurée ? par rapport à ce qu'on payait AVANT ». Le dénominateur est donc toujours le prix " +
              "initial. Faire vérifier à l'envers, ce qui est le contrôle le plus convaincant : " +
              "$15\\%$ de $200$ vaut bien $30$, tandis que $17{,}6\\%$ de $200$ vaut $35{,}2$, ce qui ne " +
              "correspond pas à la baisse observée. L'élève peut ainsi trancher seul entre ses deux " +
              "candidats.",
      exercice: { type: "exercice", n: 3 }
      /* 2026-09-13 : cette tache (le probleme INVERSE, retrouver le taux) a ete
         AJOUTEE au generateur pour cette remediation. Le chapitre ne produisait
         que des prix soldes, alors que la question 4 de l'evaluation demande un
         taux : la remediation n'avait nulle part ou renvoyer. */
    },
    {
      titre: "Multiplier au lieu de diviser dans une vitesse",
      eleve: "Pour un trajet de $45$ km en $2{,}5$ h, l'élève répond $112{,}5$ km/h ; ou inversement, " +
             "pour $18$ km/h pendant $2{,}5$ h, il répond $7{,}2$ km.",
      cause: "La relation $v = \\dfrac{d}{t}$ est mémorisée comme un triplet de lettres dont on ne sait plus, " +
             "au moment du calcul, laquelle est cherchée. L'élève choisit alors l'opération qui « tombe " +
             "juste » ou la première qui vient.",
      remede: "Travailler sur l'UNITÉ plutôt que sur la formule : « km/h » se lit « kilomètres PAR heure », " +
              "donc une vitesse s'obtient en divisant des kilomètres par des heures, et la barre de " +
              "l'unité donne l'opération. Inversement, des km/h multipliés par des heures donnent des " +
              "kilomètres, les heures se simplifiant. Ajouter le contrôle de vraisemblance : à vélo, " +
              "$112$ km/h est impossible, et parcourir $7$ km en $2{,}5$ h à $18$ km/h est trop peu. " +
              "L'ordre de grandeur suffit presque toujours à détecter l'inversion.",
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Q1 prix soldé                      -> calculer
     Q2 échelle et conversion           -> modéliser
     Q3 vitesse et distance             -> calculer
     Q4 retrouver un taux               -> chercher
     Q5 hausse puis baisse de 10 %      -> raisonner

     Q2 relève de « modéliser » : la difficulté est de traduire une échelle, qui
     est un rapport abstrait, en une relation entre deux longueurs d'unités
     différentes. Q4 est « chercher » : c'est le problème inverse, où l'élève
     doit reconstituer la démarche au lieu d'appliquer une formule donnée.
     Q5 est « raisonner » : aucun calcul n'est demandé, il s'agit de conclure sur
     un enchaînement de deux variations, et la bonne réponse est contre-intuitive. */
  competences: {
    evaluation: ["calculer", "modéliser", "calculer", "chercher", "raisonner"]
  }
};
