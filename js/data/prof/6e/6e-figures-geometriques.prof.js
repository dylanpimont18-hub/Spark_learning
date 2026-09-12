/* =========================================================
   Spark Learning – js/data/prof/6e/6e-figures-geometriques.prof.js
   Fiche professeur du chapitre « Figures géométriques de base » (sixième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-figures-geometriques"] = {

  /* Aucun prérequis, et c'est un fait vérifié le 2026-09-12, pas une case
     laissée vide faute de pouvoir l'écrire : le chapitre est du vocabulaire,
     des notations et du tracé aux instruments. Il ne mobilise aucun calcul,
     donc aucun autre chapitre de l'ouvrage. C'est précisément ce qui permet
     de le placer très tôt dans l'année. */
  prerequis: [],

  /* Rang conseillé (2026-09-12) : rang 2, en parallèle des décimaux.
     La géométrie de sixième se mène en fil entrelacé avec le numérique, pas
     en bloc de fin d'année, et ce chapitre est le SEUL des dix à n'attendre
     aucun prérequis : il ouvre donc le fil géométrique dès les premières
     semaines pendant que le fil numérique installe les décimaux.
     Il conditionne ensuite les angles (ch. 3), la symétrie (ch. 9) et le
     cercle des périmètres et aires (ch. 10) — trois chapitres qui le
     déclarent en prérequis. Le placer en 8 dans le livre est un choix
     éditorial de regroupement par domaine ; ce n'est pas un conseil de
     progression. */
  rangConseille: 2,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Utiliser le vocabulaire et les notations : point, droite, segment, demi-droite, cercle, rayon, diamètre",
    "Reconnaître, nommer, décrire et reproduire des figures à partir d'un programme de construction",
    "Utiliser la règle, l'équerre et le compas pour construire des figures et reporter des longueurs"
  ],

  note: "Chapitre de vocabulaire et de notation avant tout : l'essentiel de l'évaluation porte sur " +
        "la lecture correcte des écritures $(AB)$, $[AB]$, $[AB)$. C'est aussi le premier chapitre " +
        "où l'erreur n'est pas un calcul faux mais une notation mal lue, ce qui demande un autre " +
        "type de correction. Prévoir des temps de construction au compas : les exercices du livre, " +
        "numériques, ne les remplacent pas.",

  erreurs: [
    {
      titre: "Confondre les trois notations d'une même paire de points",
      eleve: "L'élève écrit « la droite $[AB]$ mesure $5$ cm » : la notation du segment est employée " +
             "pour une droite, et une longueur est attribuée à un objet infini.",
      cause: "Les trois écritures ne diffèrent que par des crochets et des parenthèses, signes qui " +
             "n'ont jamais rien signifié pour l'élève jusqu'ici. Rien dans leur forme ne rappelle " +
             "ce qu'elles désignent.",
      remede: "Ancrer le signe sur le dessin : un crochet ferme le trait, une parenthèse le laisse " +
              "filer. $[AB]$ est fermé des deux côtés, $[AB)$ d'un seul, $(AB)$ d'aucun. " +
              "Faire dessiner les trois objets côte à côte sous leurs notations, une fois, " +
              "et s'y référer ensuite. Attention : tous les énoncés d'entraînement de ce " +
              "chapitre portent sur le rayon et le diamètre ; aucun ne fait manipuler " +
              "les notations $(AB)$, $[AB]$, $[AB)$. Cette erreur se remédie sur figures et " +
              "à l'oral, à prévoir hors du livre.",
      // 2026-09-12 : renvoyait à la question 2 de l'ÉVALUATION — on ne remédie
      // pas avec le devoir noté. Aucun exercice d'entraînement du chapitre ne
      // travaille les notations : plutôt qu'un renvoi qui tomberait à côté, la
      // fiche le dit dans le remède, comme elle le fait déjà ailleurs pour le
      // rapporteur (chapitre « Angles ») et pour l'axe oblique (« Symétrie »).
      exercice: null
    },
    {
      titre: "Prendre le diamètre pour le rayon",
      eleve: "Pour un CD de $14$ cm de diamètre, l'élève annonce un rayon de $14$ cm, ou double " +
             "au lieu de diviser.",
      cause: "Les deux mots désignent la même figure et diffèrent d'un facteur deux : l'élève sait " +
             "qu'il faut multiplier ou diviser par $2$, mais rien ne lui dit dans quel sens, " +
             "et les deux réponses semblent également plausibles.",
      remede: "Faire tracer le cercle et repérer les deux longueurs sur le dessin avant tout calcul : " +
              "le rayon va du centre au bord, le diamètre traverse. Le rayon est toujours le plus " +
              "petit, ce qui tranche seul le sens de l'opération.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ne pas savoir situer un point par rapport au cercle",
      eleve: "Pour un point à $5{,}2$ cm du centre d'un cercle de rayon $5{,}2$ cm, l'élève répond " +
             "« à l'intérieur » ou « à l'extérieur », rarement « sur le cercle ».",
      cause: "Le cercle est perçu comme une surface (le disque) plutôt que comme une ligne. " +
             "L'égalité exacte $OP = r$ n'apparaît pas comme un cas distinct, mais comme une " +
             "frontière floue.",
      remede: "Faire énoncer la définition avant de répondre : le cercle est l'ensemble des points " +
              "situés à la distance $r$ du centre, exactement. Distinguer explicitement cercle " +
              "(la ligne) et disque (la surface), au tableau, sur deux dessins. Là encore, " +
              "aucun énoncé d'entraînement du chapitre ne porte sur la position d'un point : " +
              "prévoir une figure au compas, avec trois points à placer — un dedans, un " +
              "dessus, un dehors.",
      // 2026-09-12 : renvoyait à la question 3 de l'ÉVALUATION. Même raison
      // qu'à l'erreur 1 : la banque du chapitre ne tire que des conversions
      // rayon/diamètre. Un renvoi honnête vaut mieux qu'un renvoi qui existe.
      exercice: null
    },
    {
      titre: "Attribuer une longueur à une droite",
      eleve: "Interrogé sur « la longueur de la droite $(AB)$ », l'élève mesure sur la figure et " +
             "donne un nombre.",
      cause: "Sur le papier, la droite est bien un trait de longueur finie : le dessin contredit " +
             "la définition. L'élève mesure ce qu'il voit.",
      remede: "Faire prolonger le trait au-delà de la feuille, en parlant : « et si la feuille " +
              "continuait ? ». Exiger les flèches aux deux extrémités dans tous les tracés de " +
              "droite, pour que le dessin cesse de mentir. Comme pour les erreurs 1 et 3, " +
              "cela se joue au tableau et sur le cahier, pas sur les énoncés numériques du " +
              "chapitre.",
      // 2026-09-12 : renvoyait à la question 5 de l'ÉVALUATION, réécrite depuis
      // et devenue une question de formulation. Aucun exercice d'entraînement du
      // chapitre ne porte sur la droite : pas de renvoi plutôt qu'un faux.
      exercice: null
    }
  ],

  // Q1 diamètre vers rayon, Q2 QCM notation de la droite, Q3 QCM position
  // d'un point, Q4 CHERCHER le rayon d'un cercle inscrit, Q5 JUGER une
  // définition du cercle.
  //
  // 2026-09-12 : deux énoncés ont été RÉÉCRITS dans
  // js/data/6e/6e-figures-geometriques.js. Q4 doublait la Q1 (même relation,
  // sens inverse) et faisait deux « calculer » sur cinq questions ; elle donne
  // maintenant une contrainte — un cercle qui touche les quatre côtés d'un carré
  // de $12$ cm — que l'élève résout en cherchant. Q5 alignait quatre
  // affirmations sans rapport, dont trois grossièrement fausses ; les quatre
  // options portent désormais sur le même objet et seule la précision du
  // vocabulaire les sépare, ce que le référentiel appelle « communiquer ».
  competences: {
    evaluation: ["calculer", "représenter", "raisonner", "chercher", "communiquer"]
  }
};
