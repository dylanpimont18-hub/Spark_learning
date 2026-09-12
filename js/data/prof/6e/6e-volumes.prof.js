/* =========================================================
   Spark Learning – js/data/prof/6e/6e-volumes.prof.js
   Fiche professeur du chapitre « Volumes » (sixième), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé
   ni dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js
   le lit, au moment de compiler le livre.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton
   jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-volumes"] = {

  /* 2026-09-12 — la liste était VIDE alors que le commentaire juste au-dessus
     d'elle affirmait le contraire (« les deux s'appuient sur le chapitre
     4 ») : contradiction laissée par l'ancienne règle de validation, qui
     refusait tout renvoi vers un chapitre postérieur dans le livre. Or les
     volumes sont en 2 et leurs prérequis en 4, 6 et 10. La règle porte
     désormais sur le rang de la progression conseillée : voir
     `validerPrerequis` dans scripts/manuel/prof.js.

     ch. 4 (décimaux) : les conversions entre unités de volume et de
     contenance sont des multiplications et divisions par des puissances de
     dix sur des écritures à virgule.
     ch. 6 (multiplication) : le volume du pavé droit est le produit
     $L \\times l \\times h$. Sans la multiplication des décimaux, la formule
     n'est pas calculable — c'est le prérequis le plus dur de l'ouvrage,
     puisque le livre place les volumes quatre chapitres AVANT.
     ch. 10 (périmètres et aires) : le volume du pavé se comprend comme une
     aire de base multipliée par une hauteur. Le déclarer, c'est dire à
     l'enseignant que traiter les volumes avant les aires prive le chapitre de
     son sens géométrique et le réduit à une formule à appliquer. */
  prerequis: [4, 6, 10],

  // Rang conseillé (2026-09-12) : rang 10, dernier de l'année. C'est le
  // chapitre qui dépend du plus grand nombre d'autres, et sa conversion par
  // cube du facteur est, de l'aveu de la note ci-dessous, « le point dur de
  // l'année ».
  rangConseille: 10,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Grandeurs et mesures ».
  attendus: [
    "Comparer, estimer, mesurer des volumes ; exprimer une mesure dans une unité adaptée",
    "Connaître et utiliser les unités de volume (m³, dm³, cm³) et de contenance (L, dL, cL, mL), et leurs relations",
    "Calculer le volume d'un pavé droit et d'un cube dont les dimensions sont données"
  ],

  note: "Le programme de sixième demande le volume du pavé droit et du cube, et la relation entre " +
        "unités de volume et de contenance. La conversion par cube du facteur ($1\\,\\text{cm}^3 = 10^{-6}\\,\\text{m}^3$) " +
        "est le point dur de l'année : elle suppose une puissance de dix, notion du cycle 4. " +
        "La formuler en mots (« mille fois mille fois mille ») plutôt qu'en exposants passe mieux en sixième.",

  erreurs: [
    {
      titre: "Convertir sans cuber le facteur",
      eleve: "« $1\\,\\text{cm} = 0{,}01\\,\\text{m}$, donc $1\\,\\text{cm}^3 = 0{,}01\\,\\text{m}^3$ » : le facteur de " +
             "conversion des longueurs est appliqué tel quel aux volumes.",
      cause: "La conversion linéaire est solidement installée depuis le CM, et rien dans l'écriture " +
             "« cm³ » ne signale à l'élève qu'il faut convertir trois fois. L'exposant est lu comme " +
             "une étiquette d'unité, pas comme une opération.",
      remede: "Faire construire un cube de $1\\,\\text{dm}$ d'arête et le remplir mentalement de cubes de " +
              "$1\\,\\text{cm}$ : il en faut $10$ par arête, donc $10 \\times 10 \\times 10 = 1000$. " +
              "L'élève voit que le facteur $10$ des longueurs devient $1000$ pour les volumes. " +
              "Refaire ensuite le même raisonnement du cm au m.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Multiplier des dimensions d'unités différentes",
      eleve: "Pour un pavé de $2\\,\\text{m}$ sur $30\\,\\text{cm}$ sur $50\\,\\text{cm}$, l'élève écrit " +
             "$2 \\times 30 \\times 50 = 3000$ et annonce un volume, sans unité cohérente.",
      cause: "La formule $V = L \\times l \\times h$ est mémorisée comme une consigne de calcul sur " +
             "trois nombres. L'unité est traitée après coup, comme une décoration, alors qu'elle " +
             "conditionne la multiplication elle-même.",
      remede: "Imposer une ligne « vérification des unités » avant tout calcul, comme le fait le " +
              "corrigé du livre. Le réflexe à installer : on convertit d'abord, on multiplie ensuite. " +
              "Faire constater que les deux ordres de conversion donnent des résultats différents.",
      // 2026-09-12 : l'exercice 1 tire une hauteur de pavé à partir d'un volume,
      // toutes dimensions en cm : aucune conversion n'y est en jeu, donc rien
      // n'y travaille l'erreur décrite. L'exercice 8 (boîte à chaussures en
      // cm, résultat demandé en litres) oblige au contraire à passer d'une unité
      // à l'autre après la multiplication.
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Confondre le cube et le triple",
      eleve: "Pour un cube d'arête $5\\,\\text{cm}$, l'élève calcule $5 \\times 3 = 15$ au lieu de " +
             "$5 \\times 5 \\times 5 = 125$.",
      cause: "L'écriture $a^3$ se lit « a trois » et le mot « trois » appelle la multiplication par trois. " +
             "L'exposant n'est pas encore une notation stable en sixième.",
      remede: "Écrire systématiquement $a \\times a \\times a$ à côté de $a^3$ pendant tout le chapitre, " +
              "et ne réduire à l'exposant qu'une fois le sens acquis. Le contre-exemple du cube " +
              "d'arête $2$ ($8$ contre $6$) suffit souvent.",
      // 2026-09-12 : renvoyait à la question 4 de l'ÉVALUATION. L'exercice 3
      // (cube d'arête $6$ cm) est le même travail, en entraînement : l'élève qui
      // triple obtient $18$ au lieu de $216$, et l'écart est trop grand pour
      // passer inaperçu.
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Perdre la relation entre volume et contenance",
      eleve: "L'élève sait que $1\\,\\text{L} = 1000\\,\\text{cm}^3$ mais ne s'en sert pas : face à un " +
             "récipient en cm³, il cherche une formule plutôt que d'appliquer la relation.",
      cause: "Volumes et contenances sont vécus comme deux mondes séparés, l'un géométrique, l'autre " +
             "de la vie courante. Rien ne signale à l'élève que le même nombre les décrit.",
      remede: "Partir d'une brique de lait d'un litre et faire mesurer ses trois dimensions : le calcul " +
              "tombe sur $1000\\,\\text{cm}^3$. La relation cesse alors d'être une formule à retenir " +
              "pour devenir un constat.",
      // 2026-09-12 : renvoyait à la question 2 de l'ÉVALUATION. L'exercice 7
      // (un arrosoir de $13$ L à exprimer en cm³) demande la relation dans le
      // sens inverse de l'exercice 2, déjà utilisé par l'erreur 1 : les deux
      // erreurs de conversion de la fiche visent ainsi deux énoncés distincts.
      exercice: { type: "exercice", n: 7 }
    }
  ],

  // Une compétence par question de l'évaluation, dans l'ordre.
  // Q1 volume direct, Q2 conversion, Q3 QCM sur les relations d'unités,
  // Q4 arête du cube PAR ESSAIS, Q5 volume puis masse.
  //
  // 2026-09-12 : Q4 était déclarée « raisonner » et sa correction invoquait une
  // racine cubique, notion de lycée. En sixième, cette question se résout par
  // essais successifs ($4^3 = 64$ trop peu, $5^3 = 125$ ✓) : l'énoncé et la
  // correction le disent désormais, et la compétence déclarée est « chercher »,
  // qui nomme exactement cette démarche.
  competences: {
    evaluation: ["calculer", "calculer", "représenter", "chercher", "modéliser"]
  }
};
