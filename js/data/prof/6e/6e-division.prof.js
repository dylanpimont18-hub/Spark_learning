/* =========================================================
   Spark Learning – js/data/prof/6e/6e-division.prof.js
   Fiche professeur du chapitre « Division euclidienne et décimale »
   (sixième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-division"] = {

  // La vérification d'une division repose sur la multiplication (ch. 6),
  // et la division décimale sur la valeur des rangs (ch. 4).
  prerequis: [4, 6],

  // Rang conseillé (2026-09-12) : rang 6, après la multiplication (ch. 6)
  // dont la division est l'opération réciproque et dont la table est
  // mobilisée à chaque abaissement. Dernier chapitre du fil numérique avant
  // les fractions, qui en sont l'écriture.
  rangConseille: 6,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Effectuer une division euclidienne et interpréter le quotient et le reste",
    "Calculer le quotient décimal d'un nombre décimal par un entier",
    "Résoudre des problèmes de partage et de groupement, et interpréter le reste dans le contexte"
  ],

  note: "Le programme de sixième traite la division par un entier ; la division PAR un décimal " +
        "relève du cycle 4 et n'est pas abordée ici. Le point le plus formateur du chapitre " +
        "n'est pas la technique posée mais l'interprétation du reste : selon la question, " +
        "on arrondit, on ignore le reste ou on ajoute une part. Les exercices du livre " +
        "distinguent explicitement quotient et reste pour cette raison.",

  erreurs: [
    {
      titre: "Inverser dividende et diviseur",
      eleve: "Pour partager $116$ € entre $8$ personnes, l'élève pose $8 \\div 116$, ou annonce que " +
             "$12 \\div 4$ et $4 \\div 12$ reviennent au même.",
      cause: "L'addition et la multiplication sont commutables sans conséquence, et l'élève a " +
             "intégré que l'ordre des nombres importe peu. La division est la première opération " +
             "où l'ordre change tout.",
      remede: "Revenir au sens du partage : on partage la grande quantité entre les parts, jamais " +
              "l'inverse. L'estimation tranche seule : chacune des $8$ personnes reçoit forcément " +
              "moins que $116$ €. Faire énoncer l'ordre de grandeur avant de poser.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Donner un reste supérieur au diviseur",
      eleve: "Pour $97 \\div 6$, l'élève annonce quotient $15$ et reste $7$ : il a arrêté la division " +
             "trop tôt.",
      cause: "La condition $0 \\leq r < b$ est énoncée mais rarement utilisée comme contrôle. " +
             "L'élève s'arrête quand il « ne voit plus quoi faire », pas quand le reste devient " +
             "assez petit.",
      remede: "Faire de la comparaison reste/diviseur le dernier geste obligatoire de toute division " +
              "posée : si le reste atteint le diviseur, le quotient est trop petit d'au moins un. " +
              "La vérification $b \\times q + r$ du livre confirme.",
      // 2026-09-12 : renvoyait à la question 2 de l'ÉVALUATION. L'exercice 6
      // ($77$ graines en $4$ rangées, reste demandé) fait porter la réponse sur
      // le reste lui-même : un élève qui s'arrête trop tôt annonce $5$ ou plus,
      // c'est-à-dire un reste supérieur au diviseur, et l'erreur se voit.
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Arrêter la division au reste, quand la question demande un décimal",
      eleve: "À « calcule $17{,}5 \\div 4$ », l'élève répond « $4$ reste $1{,}5$ » au lieu de $4{,}375$.",
      cause: "La division euclidienne vient d'être installée et son format de réponse (quotient et " +
             "reste) est devenu le format par défaut. Rien dans l'énoncé ne dit explicitement " +
             "qu'il faut poursuivre.",
      remede: "Faire repérer la consigne avant de calculer : « quotient entier » et « reste » " +
              "appellent la division euclidienne, « calcule » appelle le quotient décimal. " +
              "Traiter les deux formes sur un même dividende pour rendre le contraste visible.",
      // 2026-09-12 : renvoyait à la question 3 de l'ÉVALUATION. L'exercice 8
      // (partager $48{,}75$ € entre $5$ personnes) attend un quotient DÉCIMAL,
      // et le contexte de la monnaie interdit de s'arrêter à un reste : on ne
      // rend pas « $9$ € reste $3{,}75$ ».
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Ignorer le contexte pour interpréter le reste",
      eleve: "« $250$ billes pour $8$ enfants : $31{,}25$ billes chacun » : l'élève donne un résultat " +
             "décimal là où l'objet ne se partage pas.",
      cause: "La calculatrice et la division décimale produisent toujours un nombre, et ce nombre " +
             "passe pour la réponse. La question de savoir si l'objet se coupe en quatre n'est " +
             "jamais posée.",
      remede: "Demander systématiquement « ce qu'on partage, peut-on le couper ? » avant de choisir " +
              "la forme du résultat. Des billes, des cars, des personnes imposent un entier et un " +
              "reste ; des euros, des litres, des mètres admettent un décimal.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION. L'exercice 2
      // ($35$ graines en $2$ rangées, reste demandé) porte sur un objet qui ne
      // se coupe pas : la graine restante impose l'entier et le reste, ce qui
      // est exactement la décision que l'élève omet de prendre.
      exercice: { type: "exercice", n: 2 }
    }
  ],

  // Q1 quotient entier, Q2 reste, Q3 CHERCHER le plus petit nombre de caisses,
  // Q4 QCM sur le rôle de r dans a = bq + r, Q5 QCM partage avec
  // interprétation du reste.
  //
  // 2026-09-12 : la fiche déclarait trois « calculer » d'affilée, ce qui pesait
  // lourd dans le total de l'ouvrage. Q3 était un troisième calcul posé
  // ($17{,}5 \div 4$) ; elle a été RÉÉCRITE dans js/data/6e/6e-division.js et
  // demande maintenant de trouver le plus petit nombre de caisses possible :
  // l'élève essaie, bute sur le reste et en ouvre une de plus. C'est la démarche
  // que « chercher » nomme, et elle travaille au passage l'attendu central du
  // chapitre — interpréter le reste.
  competences: {
    evaluation: ["calculer", "calculer", "chercher", "représenter", "modéliser"]
  }
};
