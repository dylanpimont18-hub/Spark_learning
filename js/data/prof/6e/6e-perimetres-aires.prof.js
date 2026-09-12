/* =========================================================
   Spark Learning – js/data/prof/6e/6e-perimetres-aires.prof.js
   Fiche professeur du chapitre « Périmètres et aires » (sixième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-perimetres-aires"] = {

  // Les aires se calculent par multiplication de décimaux (ch. 6), l'aire
  // du triangle par une division (ch. 7), et le cercle réutilise rayon et
  // diamètre du chapitre 8.
  prerequis: [6, 7, 8],

  // Rang conseillé (2026-09-12) : rang 9. Chapitre de synthèse, comme le dit
  // la note ci-dessous ; ses trois prérequis (multiplication, division,
  // figures) sont placés avant lui dans la progression conseillée comme dans
  // le livre. Il précède les volumes, qui s'appuient sur l'aire de base.
  rangConseille: 9,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Grandeurs et mesures ».
  attendus: [
    "Calculer le périmètre d'un polygone et la longueur d'un cercle",
    "Calculer l'aire d'un carré, d'un rectangle, d'un triangle et d'un disque",
    "Distinguer aire et périmètre, et utiliser les unités adaptées à chaque grandeur"
  ],

  note: "Chapitre de synthèse de l'année : il mobilise la multiplication, la division et le " +
        "vocabulaire du cercle. La distinction périmètre/aire est l'attendu central et résiste " +
        "longtemps ; elle se travaille mieux par des comparaisons (deux figures de même périmètre " +
        "et d'aires différentes) que par la répétition des formules. L'aire du disque " +
        "($\\mathcal{A} = \\pi r^2$) figure au programme de sixième avec une valeur approchée de $\\pi$.",

  erreurs: [
    {
      titre: "Confondre périmètre et aire",
      eleve: "L'élève calcule $L \\times l$ quand on demande le périmètre, ou rend un périmètre " +
             "exprimé en cm².",
      cause: "Les deux grandeurs portent sur la même figure, se calculent à partir des mêmes " +
             "nombres, et les formules se ressemblent. Seule l'unité les distingue, et l'unité " +
             "est écrite en dernier, quand le choix est déjà fait.",
      remede: "Faire choisir l'unité AVANT de calculer : une longueur de contour se mesure en cm, " +
              "une surface en cm². L'unité annoncée impose alors l'opération. L'image du " +
              "grillage (le tour du champ) et de la pelouse (le champ lui-même) sert de repère " +
              "durable.",
      // 2026-09-12 : renvoyait à la question 4 de l'ÉVALUATION. L'exercice 7
      // (carte de visite de $15$ cm sur $11$ cm, AIRE demandée) porte sur un
      // rectangle dont on pourrait tout aussi bien calculer le périmètre : c'est
      // le cas où l'élève doit choisir, et l'unité demandée (cm²) tranche. Faire
      // calculer les deux grandeurs de suite sur cette même carte est le plus
      // efficace.
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Élever $\\pi r$ au carré au lieu de $r$",
      eleve: "Pour un disque de rayon $4$ cm, l'élève calcule $\\pi \\times 4 = 12{,}56$, ou " +
             "$(\\pi \\times 4)^2$, au lieu de $\\pi \\times 16$.",
      cause: "L'écriture $\\pi r^2$ ne montre pas sur quoi porte le carré : sans parenthèses, " +
             "l'élève lit de gauche à droite et applique l'exposant à ce qu'il vient d'écrire. " +
             "La priorité des puissances sur la multiplication n'est pas encore stable.",
      remede: "Faire écrire $\\pi \\times r \\times r$ pendant tout le chapitre, et ne revenir à " +
              "l'exposant qu'ensuite. Le contrôle par ordre de grandeur confirme : l'aire d'un " +
              "disque de rayon $4$ dépasse celle du carré de côté $4$ inscrit, donc $16$.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier de diviser par deux pour le triangle",
      eleve: "Pour une base de $7$ cm et une hauteur de $9$ cm, l'élève annonce $63$ cm² au lieu " +
             "de $31{,}5$ cm².",
      cause: "La formule du rectangle vient d'être longuement travaillée et le produit " +
             "base × hauteur en est la reprise exacte. La division finale est une étape de plus, " +
             "sans contrepartie visible dans le calcul.",
      remede: "Montrer le triangle comme la moitié d'un rectangle : tracer le rectangle autour, " +
              "faire constater la découpe en deux triangles égaux. La division par deux cesse " +
              "alors d'être une règle arbitraire.",
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Utiliser le diamètre comme rayon dans une formule",
      eleve: "Pour un cercle de diamètre $8$ cm, l'élève calcule $2 \\times \\pi \\times 8$ au lieu " +
             "de $\\pi \\times 8$, doublant un diamètre déjà donné.",
      cause: "La formule $\\mathcal{P} = 2\\pi r$ est mémorisée avec son $2$, et ce $2$ s'applique " +
             "à la valeur présente dans l'énoncé, quelle qu'elle soit. L'élève ne vérifie pas " +
             "si le nombre donné est un rayon ou un diamètre.",
      remede: "Imposer une première ligne qui identifie la donnée : « on me donne le diamètre, " +
              "donc $r = 4$ cm ». Le calcul ne commence qu'après. Le rappel $d = 2r$ du " +
              "chapitre 8 sert de pont. Attention : les énoncés d'entraînement de ce " +
              "chapitre donnent tous un rayon, jamais un diamètre — ils ne peuvent donc pas " +
              "déclencher l'erreur. La reprendre à partir des énoncés du chapitre 8, qui " +
              "eux fournissent des diamètres.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION, seul énoncé du
      // livre à donner un diamètre — c'est-à-dire que le devoir noté était le
      // premier endroit où l'élève rencontrait le piège. Aucun exercice
      // d'entraînement du chapitre ne le fournit : on le signale au lieu de
      // renvoyer à un énoncé qui ne travaille pas l'erreur.
      exercice: null
    }
  ],

  // Q1 périmètre du rectangle, Q2 aire du triangle, Q3 aire du disque,
  // Q4 FORMULER la distinction périmètre/aire, Q5 périmètre à partir du
  // diamètre.
  //
  // 2026-09-12 : Q4 était déclarée « représenter » alors qu'elle se tranchait
  // sur les unités, trois options étant absurdes. L'énoncé a été RÉÉCRIT dans
  // js/data/6e/6e-perimetres-aires.js : il demande de choisir la phrase qui
  // explique le mieux la distinction à un camarade, et les quatre options sont
  // désormais des formulations plausibles. C'est « communiquer ».
  competences: {
    evaluation: ["calculer", "calculer", "calculer", "communiquer", "raisonner"]
  }
};
