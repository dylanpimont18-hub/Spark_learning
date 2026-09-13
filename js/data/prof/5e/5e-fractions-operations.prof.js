/* =========================================================
   Spark Learning – js/data/prof/5e/5e-fractions-operations.prof.js
   Fiche professeur du chapitre « Opérations sur les fractions »
   (cinquième). JAMAIS chargée par le site : seul scripts/manuel/prof.js
   la lit, au moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-fractions-operations"] = {

  /* ch. 3 (priorités) : additionner deux fractions, c'est enchaîner une
     amplification puis une addition, puis parfois une simplification — une suite
     d'opérations dont l'ordre n'est pas libre. La question 5 de l'évaluation,
     $\dfrac{3}{4} + \dfrac{1}{4} - \dfrac{1}{2}$, est littéralement un exercice
     de priorités déguisé en exercice de fractions. */
  prerequis: [3],

  /* Rang conseillé 3 sur 14. Le chapitre suit les priorités (rang 1) et les
     relatifs (rang 2), et précède le repérage graphique (rang 4) puis la
     proportionnalité (rang 5), dont les pourcentages et les échelles sont des
     fractions. Le livre le range en 4e position, soit un décalage d'un rang
     seulement — sans conséquence pédagogique. */
  rangConseille: 3,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Additionner et soustraire des fractions, en particulier lorsque l'un des dénominateurs est un multiple de l'autre",
    "Comparer deux fractions, notamment en les ramenant à un même dénominateur",
    "Multiplier deux fractions et reconnaître une fraction égale à une autre"
  ],

  note: "L'addition et la soustraction de fractions sont au cœur du programme de cinquième, et le cas " +
        "où un dénominateur est multiple de l'autre y est explicitement prioritaire. Deux points vont " +
        "au-delà de l'année. " +
        "La DIVISION de fractions (multiplier par l'inverse), mentionnée dans le cours, relève de la " +
        "quatrième : elle ne doit pas être évaluée ici, et l'évaluation du chapitre ne la teste " +
        "effectivement pas. " +
        "Les additions de fractions à dénominateurs PREMIERS ENTRE EUX, que le générateur produit " +
        "abondamment (par exemple $\\dfrac{1}{4} + \\dfrac{3}{5}$), sont à la limite haute du programme : " +
        "le cas attendu en cinquième est celui où un dénominateur est multiple de l'autre. Elles restent " +
        "très formatrices et le cycle 4 les rencontre, mais un élève en difficulté doit d'abord sécuriser " +
        "le cas simple — c'est un point de différenciation utile. " +
        "Noter enfin que l'évaluation demande des résultats sous forme DÉCIMALE arrondie, ce qui " +
        "ajoute une étape de calcul à chaque question et peut masquer la maîtrise des fractions " +
        "elle-même : un élève qui trouve $\\dfrac{11}{15}$ et se trompe dans l'arrondi perd le point.",

  erreurs: [
    {
      titre: "Additionner les numérateurs et les dénominateurs",
      eleve: "$\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{7}$ : l'élève additionne « en ligne », " +
             "numérateurs ensemble et dénominateurs ensemble.",
      cause: "Transfert de l'addition des entiers, où l'on additionne ce qui est écrit. Le dénominateur " +
             "est perçu comme un second nombre à traiter, et non comme le NOM de l'unité utilisée. " +
             "La règle de la multiplication, elle, fonctionne ainsi — ce qui renforce l'erreur dès que " +
             "les deux opérations sont vues.",
      remede: "Faire d'abord constater l'absurdité par la taille du résultat : $\\dfrac{2}{7}$ est plus " +
              "petit que $\\dfrac{1}{3}$, alors qu'on vient d'AJOUTER quelque chose. Une somme ne peut " +
              "pas être inférieure à l'un de ses termes, et l'élève peut faire ce contrôle seul. " +
              "Revenir ensuite au sens de l'unité : des tiers et des quarts ne sont pas la même chose, " +
              "comme des mètres et des litres ; il faut une unité commune avant d'additionner. " +
              "Le schéma « Pourquoi il faut le même dénominateur » montre les deux barres découpées " +
              "différemment, puis redécoupées en douzièmes.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Amplifier un seul des deux termes de la fraction",
      eleve: "Pour amener $\\dfrac{2}{5}$ au dénominateur $15$, l'élève écrit $\\dfrac{2}{15}$ : le " +
             "dénominateur est multiplié par $3$, le numérateur est oublié.",
      cause: "L'attention se porte sur le dénominateur, qui est l'objet de la consigne (« mettre au même " +
             "dénominateur »). L'élève fait exactement ce qu'on lui a dit et ne voit pas qu'il a changé " +
             "la VALEUR de la fraction au lieu de changer son écriture.",
      remede: "Distinguer explicitement les deux idées, ce qui est le cœur du chapitre : changer " +
              "l'ÉCRITURE sans changer la VALEUR. Exiger l'écriture intermédiaire " +
              "$\\dfrac{2 \\times 3}{5 \\times 3}$ à chaque amplification, le facteur apparaissant en " +
              "haut et en bas. Contrôler par la valeur décimale : $\\dfrac{2}{5} = 0{,}4$ et " +
              "$\\dfrac{6}{15} = 0{,}4$, alors que $\\dfrac{2}{15} \\approx 0{,}13$ — l'écart est trop " +
              "grand pour passer inaperçu.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Comparer deux fractions par leur numérateur ou leur dénominateur seul",
      eleve: "« $\\dfrac{3}{5} > \\dfrac{5}{8}$ car $5 < 8$ donc les cinquièmes sont plus gros » — " +
             "raisonnement juste sur les parts, mais conclusion fausse car les numérateurs diffèrent aussi.",
      cause: "L'élève a retenu, à bon droit, qu'à numérateur égal la fraction de plus petit dénominateur " +
             "est la plus grande. Il applique cette règle hors de sa condition d'emploi, les numérateurs " +
             "n'étant pas égaux ici. C'est une erreur de surgénéralisation, pas d'ignorance.",
      remede: "Nommer la condition manquante : la règle sur les dénominateurs ne vaut qu'à NUMÉRATEUR " +
              "ÉGAL, et celle sur les numérateurs qu'à dénominateur égal. Dès que les deux diffèrent, " +
              "aucune comparaison directe n'est possible et il faut ramener au même dénominateur — ici " +
              "$\\dfrac{24}{40}$ contre $\\dfrac{25}{40}$, donc $\\dfrac{5}{8}$ est la plus grande. " +
              "La valeur décimale ($0{,}6$ contre $0{,}625$) fournit un contrôle rapide, utile parce que " +
              "l'écart est ici très faible et que l'intuition ne suffit pas.",
      exercice: null
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE. Les dix moules du generateur
         produisent tous des ADDITIONS de deux fractions en situation ; aucun ne
         demande de COMPARER deux fractions. La comparaison n'est travaillee que
         par la question 4 de l'evaluation, donc le devoir note, vers lequel une
         remediation ne renvoie jamais. Le remede s'appuie donc sur le retour au
         meme denominateur conduit au tableau, et non sur un exercice d'addition
         qui ne traiterait pas l'erreur. */
    }
  ],

  /* Q1 addition, dénominateurs premiers entre eux -> calculer
     Q2 soustraction, un multiple de l'autre       -> calculer
     Q3 juger une égalité parmi quatre             -> communiquer
     Q4 comparer deux fractions                    -> raisonner
     Q5 encadrer une somme par estimation           -> raisonner

     Q3 est « communiquer » : l'élève doit juger quatre écritures proposées, dont
     trois fausses de trois façons différentes (somme en ligne, dénominateur
     conservé, numérateur non amplifié) — c'est l'analyse d'une production
     écrite, pas un calcul. Q4 est « raisonner » parce que la comparaison exige
     de choisir une stratégie valide, la comparaison directe étant ici un piège. */
  competences: {
    evaluation: ["calculer", "calculer", "communiquer", "raisonner", "raisonner"]
  }
};
