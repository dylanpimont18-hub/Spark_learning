/* =========================================================
   Spark Learning – js/data/prof/5e/5e-expressions-litterales.prof.js
   Fiche professeur du chapitre « Expressions littérales » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-expressions-litterales"] = {

  /* ch. 3 (priorités) : substituer une valeur ne sert à rien si l'expression
     obtenue n'est pas calculée dans le bon ordre. $2x^2 + 3x - 1$ pour $x = 3$
     (question 4) exige la puissance avant le produit et le produit avant la
     somme : l'erreur la plus fréquente du chapitre est une erreur de priorités,
     pas de lettres.
     ch. 5 (proportionnalité) : les formules que le chapitre manipule — prix à
     l'unité plus frais fixes, $v = \dfrac{d}{t}$ — sont exactement celles
     rencontrées au chapitre 5, qui leur donne leur sens concret. Le littéral
     généralise ce que la proportionnalité a fait cas par cas. */
  prerequis: [3, 5],

  /* Rang conseillé 6 sur 14 : dernier chapitre du bloc numérique, il clôt le
     premier semestre en généralisant ce qui précède, avant le basculement en
     géométrie au rang 7. Le livre le range aussi en 6e position. */
  rangConseille: 6,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Utiliser une lettre pour désigner un nombre inconnu ou variable, et produire une expression littérale",
    "Calculer la valeur d'une expression littérale pour une valeur donnée de la variable",
    "Réduire une expression littérale simple en regroupant les termes semblables"
  ],

  note: "Produire une expression, la calculer pour une valeur donnée et réduire des termes semblables " +
        "sont au programme de cinquième. Trois points du chapitre le dépassent. " +
        "La DISTRIBUTIVITÉ, nécessaire à la question 5 ($5(x + 2) - 3x$ pour $x = 4$), relève de la " +
        "quatrième. La question reste faisable en cinquième si l'élève SUBSTITUE D'ABORD, ce qui donne " +
        "$5 \\times 6 - 12$ et ne demande aucun développement : c'est la méthode à installer, et il faut " +
        "le dire explicitement, sinon les élèves croiront devoir développer. " +
        "Les termes en $x^2$ (question 4) sont à la limite du programme : la notion de degré n'est pas " +
        "formalisée en cinquième, et l'on se contente de constater que $3x$ et $5x^2$ ne s'additionnent pas. " +
        "Les formules de physique citées dans le cours ($E_c = \\dfrac{1}{2}mv^2$, $U = RI$) sont des " +
        "illustrations et ne sont pas exigibles.",

  erreurs: [
    {
      titre: "Additionner un nombre et un terme en x",
      eleve: "$3 + 5x = 8x$ : le nombre seul est absorbé dans le coefficient.",
      cause: "L'habitude de « terminer » un calcul : une expression qui reste en deux morceaux paraît " +
             "inachevée, et l'élève cherche à la réduire à un seul terme. Le symbole $+$ est lu comme un " +
             "ordre d'agir, jamais comme un lien durable entre deux objets de natures différentes.",
      remede: "Faire le test par SUBSTITUTION, qui tranche sans recours à l'autorité : pour $x = 2$, " +
              "$3 + 5 \\times 2 = 13$ alors que $8 \\times 2 = 16$. Les deux écritures ne valent pas la " +
              "même chose, donc l'égalité est fausse — et l'élève l'a établi lui-même. " +
              "Installer ensuite l'image des unités : $5x$ est « cinq paquets de $x$ », $3$ est « trois " +
              "unités », et on n'additionne pas des paquets avec des unités tant qu'on ne sait pas ce " +
              "qu'il y a dans le paquet. Préciser enfin qu'une expression à deux termes EST une réponse " +
              "complète : $3 + 5x$ est réduit.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier les priorités après la substitution",
      eleve: "Pour $2x^2 + 3x - 1$ avec $x = 3$, l'élève écrit $2 \\times 3 = 6$, puis $6^2 = 36$, et " +
             "obtient $36 + 9 - 1 = 44$ au lieu de $26$.",
      cause: "Une fois la lettre remplacée, l'expression redevient un calcul numérique ordinaire — avec " +
             "toutes ses priorités. Mais l'élève, concentré sur la substitution, traite l'expression de " +
             "gauche à droite comme s'il lisait. L'erreur appartient en réalité au chapitre des priorités, " +
             "ce qui explique le prérequis déclaré plus haut.",
      remede: "Exiger les PARENTHÈSES au moment de la substitution : $2x^2$ s'écrit $2 \\times (3)^2$, " +
              "ce qui montre que le carré porte sur le $3$ seul. Le geste est mécanique et supprime " +
              "l'ambiguïté sans qu'il faille se souvenir d'une règle. Faire ensuite recalculer dans " +
              "l'ordre : $(3)^2 = 9$, puis $2 \\times 9 = 18$, puis $18 + 9 - 1 = 26$. " +
              "Rappeler que $2x^2$ n'est pas $(2x)^2$, et que l'écriture, sans parenthèses, dit déjà " +
              "laquelle des deux on veut.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Regrouper des termes de variables différentes",
      eleve: "$7a - 2b + 3a + 5b$ donne $13ab$, ou $10a + 3b$ avec une erreur de signe, ou encore $13$.",
      cause: "Les lettres sont traitées comme des étiquettes interchangeables plutôt que comme des " +
             "grandeurs distinctes. Quand deux lettres cohabitent, l'élève tend à tout réunir pour " +
             "obtenir une réponse unique, par le même besoin de « terminer » que dans la première erreur.",
      remede: "Faire TRIER avant de calculer, en soulignant les termes en $a$ d'une couleur et ceux en $b$ " +
              "d'une autre, signes compris : c'est le tri, et non le calcul, qui pose la difficulté. " +
              "On obtient alors deux regroupements indépendants, $7a + 3a = 10a$ et $-2b + 5b = 3b$, " +
              "et le résultat $10a + 3b$ reste en deux termes. Vérifier par substitution avec deux " +
              "valeurs différentes ($a = 1$, $b = 2$) : l'expression de départ et la forme réduite " +
              "doivent donner le même nombre, ce que $13ab$ ne fait pas.",
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Q1 substitution simple              -> calculer
     Q2 réduire des termes semblables    -> calculer
     Q3 juger quatre simplifications     -> communiquer
     Q4 substitution avec puissance      -> calculer
     Q5 produire une expression à partir d'une situation -> modéliser

     2026-09-13 : la question 5 a été RÉÉCRITE dans
     js/data/5e/5e-expressions-litterales.js. Elle demandait la valeur de
     $5(x + 2) - 3x$ pour $x = 4$, soit une TROISIÈME substitution sur cinq
     questions — et elle reposait sur la distributivité, qui est au programme de
     quatrième. Elle demande maintenant d'ÉCRIRE l'expression qui traduit une
     situation, ce qui est le premier attendu du chapitre (« produire une
     expression littérale ») et n'était évalué nulle part. C'est « modéliser »,
     la compétence que l'ouvrage sous-évaluait le plus après « chercher ». */
  competences: {
    evaluation: ["calculer", "calculer", "communiquer", "calculer", "modéliser"]
  }
};
