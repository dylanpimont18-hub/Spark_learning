/* =========================================================
   Spark Learning – js/data/prof/5e/5e-triangles.prof.js
   Fiche professeur du chapitre « Triangles » (cinquième). JAMAIS chargée
   par le site : seul scripts/manuel/prof.js la lit, au moment de compiler
   le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-triangles"] = {

  /* Aucun prérequis DANS CE LIVRE, et c'est un fait, pas un oubli.
     Le chapitre ouvre la géométrie de l'année : il ne demande que le tracé à la
     règle et au compas et la mesure au rapporteur, tous deux acquis en sixième.
     Rien de ce qui le précède dans la progression (priorités, relatifs,
     fractions, repérage, proportionnalité, littéral) n'y est mobilisé — y
     inscrire un renvoi ferait un tableau plus rempli, pas plus vrai. */
  prerequis: [],

  /* Rang conseillé 7 sur 14 : premier chapitre de géométrie, placé après le
     bloc numérique et algébrique du premier semestre. Il conditionne à lui seul
     les deux chapitres suivants — les parallélogrammes s'y découpent, et la
     somme des angles s'y démontre par les angles alternes-internes —, ce que la
     colonne « Prépare » de la progression rend visible. */
  rangConseille: 7,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Construire un triangle connaissant trois longueurs, deux longueurs et un angle, ou une longueur et deux angles",
    "Utiliser la somme des angles d'un triangle pour déterminer une mesure d'angle manquante",
    "Déterminer si trois longueurs données permettent ou non de construire un triangle (inégalité triangulaire)"
  ],

  note: "La somme des angles et l'inégalité triangulaire sont pleinement au programme de cinquième. " +
        "En revanche, la DÉMONSTRATION de la somme des angles par les angles alternes-internes, esquissée " +
        "dans le « Découvrir », suppose le chapitre 10 : si la progression conseillée est suivie, elle " +
        "n'est disponible qu'après. On peut donc l'annoncer ici comme une promesse (« nous le prouverons »), " +
        "et la conduire réellement au chapitre 10 — c'est d'ailleurs un bon usage de la progression. " +
        "Les cas d'égalité et de similitude des triangles, eux, relèvent de la quatrième et de la troisième : " +
        "ce chapitre ne les aborde pas.",

  erreurs: [
    {
      titre: "Ne tester l'inégalité triangulaire que sur une seule somme",
      eleve: "Pour $3$ cm, $5$ cm et $9$ cm, l'élève vérifie $3 + 9 = 12 > 5$, conclut que « ça passe » " +
             "et annonce que le triangle est constructible.",
      cause: "La règle est retenue comme « la somme de deux côtés doit dépasser le troisième », sans que " +
             "le rôle particulier du PLUS GRAND côté soit compris. Or deux des trois inégalités sont " +
             "toujours vraies dès qu'un côté domine : seule celle qui porte sur le plus grand est " +
             "informative, et c'est précisément celle que l'élève ne teste pas.",
      remede: "Faire matérialiser l'échec avec trois bandes de papier : posée sur la plus longue, la somme " +
              "des deux autres est visiblement trop courte pour se rejoindre. Puis fixer le geste en une " +
              "phrase : on repère d'abord le plus grand côté, et on ne teste QUE lui contre la somme des " +
              "deux autres — une seule inégalité, jamais trois. Faire enfin remarquer que le cas d'égalité " +
              "($9 = 4 + 5$) donne un triangle « plat », donc pas un triangle : la condition est stricte.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'un triangle isocèle a deux angles de base égaux au sommet",
      eleve: "Pour un triangle isocèle d'angle au sommet $40°$, l'élève répond que les angles de base " +
             "valent $40°$ chacun, ou bien $\\dfrac{180 - 40}{1} = 140°$.",
      cause: "Confusion entre les deux angles qui sont égaux (ceux de la BASE) et celui qui ne l'est pas " +
             "(celui du SOMMET). Sur une figure isocèle dessinée pointe en haut, les trois angles se " +
             "ressemblent, et rien ne distingue visuellement lequel est le sommet si le codage des côtés " +
             "égaux n'est pas lu.",
      remede: "Exiger que le codage des deux côtés égaux soit tracé AVANT tout calcul : les deux angles " +
              "égaux sont ceux qui s'appuient sur ces côtés, donc ceux de la base. Puis dérouler le calcul " +
              "en deux temps explicites, jamais en un seul : on retire d'abord l'angle du sommet " +
              "($180 - 40 = 140$), et on partage ensuite ce qui reste entre les DEUX angles de base " +
              "($140 \\div 2 = 70$). Vérifier pour finir que $70 + 70 + 40 = 180$, ce qui referme le contrôle.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Additionner les deux angles connus au lieu de les retrancher",
      eleve: "Deux angles mesurent $54°$ et $42°$ ; l'élève répond $96°$ pour le troisième.",
      cause: "L'élève a retenu que « la somme fait $180°$ » et exécute l'addition qui se présente, sans " +
             "identifier ce qui est cherché. L'erreur est un automatisme de calcul, pas une méconnaissance " +
             "de la propriété : interrogé, l'élève sait souvent énoncer la règle correctement.",
      remede: "Faire estimer AVANT de calculer : le troisième angle est-il plus grand ou plus petit que " +
              "les deux autres réunis ? La figure de l'exercice, qui dessine les deux angles connus à leur " +
              "vraie mesure et laisse le troisième marqué d'un point d'interrogation, permet de le voir " +
              "sans rien calculer. Puis écrire systématiquement l'opération sous la forme " +
              "$180 - (54 + 42)$, avec la parenthèse, qui dit dans quel ordre lire. Contrôle final : " +
              "les trois angles doivent redonner $180°$, et un élève qui a répondu $96°$ trouve $192°$.",
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Q1 troisième angle par la somme          -> calculer
     Q2 inégalité triangulaire, cas impossible -> raisonner
     Q3 reconnaître un triangle équilatéral    -> représenter
     Q4 angles de base d'un isocèle            -> calculer
     Q5 inégalité triangulaire, cas limite     -> chercher

     2026-09-13 : la question 5 a été RÉÉCRITE dans js/data/5e/5e-triangles.js.
     Elle posait à nouveau une inégalité triangulaire à trancher, exactement
     comme Q2, avec des nombres différents — un doublon qui n'ajoutait aucune
     information sur l'élève. Elle demande maintenant de TROUVER les valeurs
     entières possibles du troisième côté, ce qui n'a pas de réponse immédiate
     et s'obtient par essais encadrés : c'est « chercher », la compétence que
     l'ouvrage n'évaluait presque nulle part. */
  competences: {
    evaluation: ["calculer", "raisonner", "représenter", "calculer", "chercher"]
  }
};
