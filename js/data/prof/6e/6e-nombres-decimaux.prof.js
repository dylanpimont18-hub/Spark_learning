/* =========================================================
   Spark Learning – js/data/prof/6e/6e-nombres-decimaux.prof.js
   Fiche professeur du chapitre « Nombres entiers et décimaux » (sixième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-nombres-decimaux"] = {

  // Aucun prérequis, et c'est un fait vérifié, pas une case laissée vide :
  // le chapitre part de la numération du cycle 3 et ne mobilise aucun autre
  // chapitre de l'ouvrage. C'est ce qui en fait le premier de la progression.
  prerequis: [],

  /* Rang conseillé d'enseignement, distinct du numéro de chapitre du livre
     (2026-09-12). Le livre range les chapitres par DOMAINE, la progression
     conseillée les range par DÉPENDANCE : voir la longue note de
     `progressionLatex` dans scripts/manuel/prof.js, qui explique pourquoi les
     deux ordres coexistent au lieu que l'un remplace l'autre. Écrit à la
     main, jamais dérivé — règle du pipeline.
     Rang 1 : la note ci-dessous disait déjà « chapitre fondateur de l'année,
     il gagnerait à être traité avant les fractions et les volumes ». Aucun
     champ ne pouvait porter ce conseil ; celui-ci le porte. */
  rangConseille: 1,

  /* PAS DE CHAMP `seances` / VOLUME HORAIRE, et c'est une décision, pas un
     oubli (tranchée le 2026-09-12, après un aller-retour). Un champ « 12
     séances » écrit à la main aurait été plausible mais invérifiable : rien
     dans les données du module ne permet de le dériver (les dix chapitres de
     sixième ont le même profil de quiz, d'évaluation et de méthode, et le
     nombre d'exercices est un paramètre de build, pas une propriété du
     chapitre). Un chiffre inventé dans une fiche professeur finit cité en
     conseil d'enseignement. Le découpage en séances dépend de la classe, de
     l'horaire de l'établissement et de l'année : il reste à l'enseignant. */

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Utiliser diverses représentations d'un nombre décimal (fractions décimales, écriture à virgule, décompositions)",
    "Comparer, ranger, encadrer des nombres décimaux, les placer sur une demi-droite graduée",
    "Connaître la valeur de chaque chiffre selon son rang et produire des décompositions"
  ],

  note: "Chapitre fondateur de l'année : la comparaison des décimaux conditionne tous les chapitres " +
        "de calcul qui suivent. Il gagnerait à être traité avant les fractions et les volumes, " +
        "qui s'appuient tous deux sur l'écriture décimale. L'arrondi, présent dans les exercices, " +
        "est un attendu de fin de cycle 3 : il peut se traiter en fin de chapitre.",

  erreurs: [
    {
      titre: "Comparer la partie décimale comme un entier",
      eleve: "« $1{,}12 > 1{,}9$ parce que $12 > 9$ » : la partie après la virgule est lue comme un " +
             "nombre entier à part entière.",
      cause: "Cinq années d'entiers ont installé que « plus de chiffres, plus grand ». La virgule est " +
             "perçue comme un séparateur entre deux nombres indépendants, et non comme le repère " +
             "d'une valeur de position qui continue à décroître.",
      remede: "Revenir aux rangs : faire écrire $1{,}12$ et $1{,}90$ l'un sous l'autre, virgules alignées, " +
              "et comparer colonne par colonne à partir de la gauche. La comparaison s'arrête au " +
              "premier rang qui diffère, ici les dixièmes. Le passage par l'argent ($1{,}12$ € contre " +
              "$1{,}90$ €) sert de contrôle intuitif.",
      // 2026-09-12 : renvoyait à la question 2 de l'ÉVALUATION. Le supplément 3
      // ($2{,}4$ ; $4{,}4$ ; $3{,}3$ ; $3{,}33$) est l'archétype de l'erreur :
      // l'élève qui lit $33 > 3$ choisit $3{,}3$ comme le plus petit, alors que
      // $3{,}30$ et $3{,}33$ se départagent aux centièmes.
      exercice: { type: "supplement", n: 3 }
    },
    {
      titre: "Croire que les zéros à droite changent la valeur",
      eleve: "L'élève affirme que $2{,}5$ et $2{,}50$ sont deux nombres différents, ou hésite à " +
             "compléter $2{,}5$ en $2{,}50$ pour comparer.",
      cause: "Chez les entiers, ajouter un zéro à droite multiplie par dix. La règle est vraie et " +
             "solidement acquise ; l'élève l'applique là où elle ne vaut plus.",
      remede: "Faire lire les deux écritures en toutes lettres : « deux et cinq dixièmes », " +
              "« deux et cinquante centièmes ». Puis faire constater que cinquante centièmes font " +
              "bien cinq dixièmes. La demi-droite graduée montre le même point pour les deux écritures.",
      // 2026-09-12 : l'exercice 2 demande le chiffre des centièmes de $54{,}27$
      // — le rang, pas les zéros à droite : rien n'y travaillait l'erreur
      // décrite. Le supplément 6 ($8{,}5$ ; $5{,}14$ ; $7{,}9$ ; $3{,}33$) exige
      // au contraire de lire $8{,}5$ comme $8{,}50$ pour le comparer aux autres.
      exercice: { type: "supplement", n: 6 }
    },
    {
      titre: "Confondre le rang et le chiffre",
      eleve: "À la question « quel est le chiffre des dixièmes de $56{,}709$ ? », l'élève répond $0$ " +
             "(le rang suivant) ou $709$ (toute la partie décimale).",
      cause: "Les noms de rangs (dixièmes, centièmes, millièmes) se ressemblent et l'ordre est " +
             "l'inverse de celui des entiers, où l'on va des unités vers la gauche. L'élève compte " +
             "dans le mauvais sens ou perd le rang de départ.",
      remede: "Faire tracer un tableau de numération et y placer le nombre avant de répondre, " +
              "pendant tout le chapitre. La question « combien en faut-il pour faire un ? » " +
              "réancre chaque nom : dix dixièmes, cent centièmes.",
      // 2026-09-12 : renvoyait à la question 1 de l'ÉVALUATION. L'exercice 2
      // pose exactement la même chose en entraînement — le chiffre des centièmes
      // de $54{,}27$ — et il est numéroté, donc immédiatement trouvable.
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Chercher un entier là où il n'y en a pas",
      eleve: "À « combien y a-t-il d'entiers entre $5{,}3$ et $5{,}4$ ? », l'élève répond $1$ ou $10$, " +
             "rarement zéro.",
      cause: "Une question qui porte sur un intervalle appelle un comptage, et un comptage qui donne " +
             "zéro semble être un échec plutôt qu'une réponse. L'élève cherche donc un nombre à dire.",
      remede: "Faire placer les deux bornes sur une demi-droite graduée et chercher où tomberait " +
              "l'entier suivant : $6$ est bien au-delà. Valoriser explicitement que zéro est une " +
              "réponse mathématique complète.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION. L'exercice 1
      // (encadrer $7{,}58$ entre deux entiers consécutifs) fait travailler le
      // même geste — situer un décimal entre deux entiers — sans que la note
      // soit en jeu, et il prépare la réponse « aucun » plutôt que de l'exiger
      // d'emblée.
      exercice: { type: "exercice", n: 1 }
    }
  ],

  // Q1 rang d'un chiffre, Q2 QCM rangement, Q3 encadrement,
  // Q4 QCM décomposition, Q5 comptage d'entiers dans un intervalle.
  //
  // 2026-09-12 : Q5 était déclarée « raisonner ». L'élève n'y applique en fait
  // aucune règle : il doit BALAYER l'intervalle $]5{,}3 ; 5{,}4[$ et constater
  // qu'aucun entier n'y tombe. Cette exploration est ce que « chercher » nomme
  // au référentiel — l'énoncé, lui, n'avait pas besoin d'être touché.
  competences: {
    evaluation: ["représenter", "raisonner", "calculer", "représenter", "chercher"]
  }
};
