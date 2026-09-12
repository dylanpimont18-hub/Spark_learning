/* =========================================================
   Spark Learning – js/data/prof/6e/6e-fractions.prof.js
   Fiche professeur du chapitre « Fractions » (sixième), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé
   ni dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js
   le lit, au moment de compiler le livre.

   Contenu écrit à la main et relu par l'enseignant : une fiche engage
   le livre sur le programme officiel. Conventions du projet : KaTeX
   inline, virgule décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-fractions"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro.
     La progression annuelle en fait la colonne « S'appuie sur ».

     2026-09-12 — la liste était VIDE, et le commentaire qu'elle portait
     disait lui-même pourquoi : « Fractions » ouvre l'ouvrage alors que le
     sens de la fraction demande les décimaux, chapitre 4, et l'ancienne règle
     de validation refusait tout renvoi vers un chapitre postérieur dans le
     LIVRE. Un prérequis vrai était donc interdit d'écriture, et la fiche en
     était réduite à le consigner en commentaire. La règle a changé : elle
     porte désormais sur le rang de la PROGRESSION CONSEILLÉE (voir
     `validerPrerequis`, scripts/manuel/prof.js). Les prérequis réels
     s'écrivent enfin.

     ch. 4 (décimaux) : comparer deux fractions passe par leur valeur
     décimale, et l'attendu « fraction vers décimal » suppose l'écriture à
     virgule installée.
     ch. 7 (division) : une fraction EST un quotient — $\\dfrac{3}{4}$ se lit
     $3 \\div 4$. L'erreur « diviser dans le mauvais sens », traitée plus bas
     dans cette fiche, n'est corrigible qu'une fois la division vue. */
  prerequis: [4, 7],

  /* Rang conseillé (2026-09-12) : rang 7, après la division dont la fraction
     est l'écriture. Ouvrir le LIVRE par les fractions est un choix éditorial
     — le domaine « Nombres et calculs » ouvre l'ouvrage — et non un conseil
     de progression : la fiche ne l'a d'ailleurs jamais prétendu. */
  rangConseille: 7,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Utiliser et représenter des fractions simples (demi, tiers, quart, dixième, centième), en lien avec la mesure",
    "Repérer et placer une fraction sur une demi-droite graduée, l'encadrer entre deux entiers consécutifs",
    "Comparer deux fractions de même dénominateur, ou dont l'un des dénominateurs est un multiple de l'autre"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Le programme de sixième travaille le sens de la fraction et l'égalité de fractions simples. " +
        "La fraction irréductible et la comparaison par produits en croix sont formalisées au cycle 4 : " +
        "ce chapitre les anticipe. La troisième méthode (produit en croix) peut être réservée aux élèves à l'aise.",

  // Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
  // y répondre, et l'exercice du livre qui sert de remédiation.
  erreurs: [
    {
      titre: "Simplifier en soustrayant",
      eleve: "$\\dfrac{6+3}{9+3} = \\dfrac{6}{9}$ : l'élève « enlève $3$ en haut et en bas » et pense avoir simplifié.",
      cause: "La règle « on fait la même chose au numérateur et au dénominateur » est retenue sans sa condition : " +
             "elle ne vaut que pour la multiplication et la division. L'élève transfère ce qu'il sait des égalités " +
             "entre nombres entiers.",
      // 2026-09-12 : le remède comparait $9/12$ et $6/9$, deux fractions dont
      // AUCUNE n'est celle que l'élève vient d'écrire. Le contre-exemple ne
      // réfutait donc pas l'égalité affirmée. Il porte désormais sur les deux
      // membres exacts de cette égalité, $\dfrac{6+3}{9+3}$ et $\dfrac{6}{9}$.
      remede: "Faire calculer les deux membres de l'égalité que l'élève vient d'écrire, et eux seuls : " +
              "à gauche $\\dfrac{6+3}{9+3} = \\dfrac{9}{12} = 0{,}75$, à droite $\\dfrac{6}{9} \\approx 0{,}67$. " +
              "Les deux nombres diffèrent, donc l'égalité est fausse — le contre-exemple porte cette fois " +
              "sur l'écriture même de l'élève. Puis revenir au sens : une fraction est un quotient, et un " +
              "quotient ne change que si l'on ajoute, jamais si l'on multiplie ou divise ses deux termes " +
              "par un même nombre. Pour comparer, faire vérifier sur une simplification qui, elle, " +
              "fonctionne : $\\dfrac{6}{9} = \\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$, et $2 \\div 3$ " +
              "redonne bien $0{,}67$.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Comparer les numérateurs seuls",
      eleve: "« $\\dfrac{3}{5} > \\dfrac{2}{3}$ parce que $3 > 2$ » : la fraction au plus grand numérateur est jugée la plus grande.",
      cause: "Raisonnement sur les entiers appliqué aux fractions : l'élève ne voit pas que des cinquièmes et " +
             "des tiers ne sont pas la même unité.",
      remede: "Faire dire les dénominateurs à voix haute (« trois cinquièmes », « deux tiers ») et représenter les " +
              "deux fractions sur deux barres de même longueur. Ensuite seulement, passer au même dénominateur.",
      // 2026-09-12 : renvoyait à la question 3 de l'ÉVALUATION. On remédie
      // avant d'évaluer, jamais avec le devoir noté. L'exercice 6 compare
      // $\dfrac{2}{6}$ et $\dfrac{16}{18}$ : le plus petit numérateur y gagne,
      // ce qui prend l'erreur à revers.
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Diviser un seul des deux termes",
      eleve: "$\\dfrac{18}{24} = \\dfrac{9}{24}$ : le numérateur est divisé par $2$, le dénominateur est oublié.",
      cause: "La simplification est vécue comme une opération sur un nombre, pas sur un couple. L'attention se " +
             "porte sur le numérateur, plus petit et plus familier.",
      remede: "Exiger l'écriture intermédiaire $\\dfrac{18 \\div 2}{24 \\div 2}$ à chaque étape, et vérifier par la " +
              "valeur décimale : $\\dfrac{18}{24} = 0{,}75$ alors que $\\dfrac{9}{24} = 0{,}375$.",
      // 2026-09-12 : pointait l'exercice 1, deja utilise par l'erreur 1 de la
      // meme fiche — deux erreurs distinctes renvoyaient au meme enonce.
      // L'exercice 9 (simplifier $\dfrac{6}{9}$) est une simplification, comme
      // il le faut ici, et le denominateur 9 y interdit de s'arreter au seul
      // numerateur : diviser $6$ par $3$ sans toucher au $9$ ne tombe sur aucun
      // resultat plausible.
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Diviser dans le mauvais sens",
      eleve: "Pour convertir $\\dfrac{3}{4}$ en décimal, l'élève pose $4 \\div 3$ et obtient $1{,}33$.",
      cause: "Réflexe du « plus grand divisé par le plus petit », hérité des divisions d'entiers où l'on cherche " +
             "toujours un quotient supérieur à $1$.",
      remede: "Faire estimer avant de calculer : $\\dfrac{3}{4}$ est plus petit que $1$, le résultat doit l'être " +
              "aussi. Puis fixer la règle : numérateur divisé par dénominateur, dans cet ordre.",
      // 2026-09-12 : renvoyait à la question 4 de l'ÉVALUATION, c'est-à-dire au
      // devoir noté. L'exercice 7 demande la valeur décimale de
      // $\dfrac{14}{6}$, une fraction SUPÉRIEURE à $1$ : l'élève qui inverse
      // obtient un nombre inférieur à $1$ et voit son erreur à la taille du
      // résultat, sans qu'on la lui désigne.
      exercice: { type: "exercice", n: 7 }
    }
  ],

  // Une compétence du référentiel par question de l'évaluation, dans
  // l'ordre des questions (chercher, modéliser, représenter, raisonner,
  // calculer, communiquer).
  //
  // Révisé le 2026-09-12 : sur les 50 questions des dix chapitres, « chercher »
  // et « communiquer » n'étaient déclarées nulle part, alors que la grille de
  // suivi photocopiable en porte les six colonnes — deux d'entre elles seraient
  // restées vides toute l'année. Ici, Q2 (amplifier $\dfrac{5}{8}$ en
  // $\dfrac{15}{24}$) relève de « représenter » : écrire la même quantité
  // autrement, sans rien calculer de nouveau. Q5 a été RÉÉCRITE dans
  // js/data/6e/6e-fractions.js pour demander de juger une explication, ce qui
  // mobilise réellement « communiquer » — l'étiquette suit l'énoncé, jamais
  // l'inverse.
  // Q1 simplifier, Q2 amplifier, Q3 comparer au même dénominateur,
  // Q4 fraction vers décimal, Q5 juger une explication.
  competences: {
    evaluation: ["calculer", "représenter", "raisonner", "calculer", "communiquer"]
  }
};
