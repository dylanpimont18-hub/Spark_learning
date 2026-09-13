/* =========================================================
   Spark Learning – js/data/prof/4e/4e-fractions-mult-div.prof.js
   Fiche professeur du chapitre « Fractions : multiplication et division »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-fractions-mult-div"] = {

  /* ch. 5 (relatifs, multiplication et division) : la règle des signes
     s'applique aussi aux fractions, et surtout la notion d'INVERSE — centrale
     ici — se construit par contraste avec celle d'opposé, installée au chapitre
     des relatifs. L'erreur 3 de cette fiche porte précisément sur cette
     confusion. */
  prerequis: [5],

  /* Rang conseillé 2, juste après les relatifs. Les fractions fournissent
     ensuite les coefficients du calcul littéral (rang 4) et les probabilités
     (rang 12) ne sont que des fractions d'effectifs. */
  rangConseille: 2,

  attendus: [
    "Calculer le produit et le quotient de deux nombres écrits sous forme fractionnaire",
    "Prendre une fraction d'une quantité",
    "Reconnaître l'inverse d'un nombre et l'utiliser pour diviser",
    "Simplifier une fraction avant de calculer, pour éviter les grands nombres"
  ],

  note: "Le produit et le quotient de fractions sont au programme de quatrième.<br/><br/>" +
        "Le chapitre demande plusieurs fois un résultat sous forme DÉCIMALE, ce qui " +
        "n'est pas l'attendu principal du programme — celui-ci privilégie la fraction " +
        "irréductible. Ce choix vient de la correction automatique sur le site, qui compare " +
        "des nombres ; à l'écrit, exiger la forme fractionnaire irréductible est préférable, " +
        "et les corrigés la donnent toujours avant la valeur décimale.",

  erreurs: [
    {
      titre: "Chercher un dénominateur commun pour multiplier",
      eleve: "Pour $\\dfrac{2}{3} \\times \\dfrac{4}{5}$, l'élève met d'abord au même dénominateur, " +
             "écrit $\\dfrac{10}{15} \\times \\dfrac{12}{15}$, puis ne sait plus quoi faire.",
      cause: "L'addition de fractions, vue en cinquième et longuement exercée, a installé un réflexe : " +
             "« devant deux fractions, dénominateur commun ». Le réflexe précède la lecture du signe " +
             "opératoire.",
      remede: "Faire énoncer la règle du produit en une phrase, et la contraster immédiatement avec " +
              "celle de la somme : pour multiplier, <strong>aucun dénominateur commun n'est " +
              "nécessaire</strong> — on multiplie les numérateurs entre eux et les dénominateurs entre " +
              "eux.<br/><br/>" +
              "Donner ensuite le sens, qui rend la règle évidente : $\\dfrac{2}{3} \\times \\dfrac{4}{5}$ " +
              "se lit « les deux tiers des quatre cinquièmes ». Découper un rectangle en trois bandes " +
              "horizontales et cinq bandes verticales donne $15$ cases, dont $2 \\times 4 = 8$ sont " +
              "doublement hachurées. La règle se lit sur le dessin.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 est « une quantité qui vaut $\dfrac{3}{2}$ d'un lot de
         $\dfrac{4}{4}$ », un produit pur. Le dénominateur commun n'y sert à rien
         et l'élève qui le cherche s'en aperçoit tout seul. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Retourner la première fraction au lieu de la seconde",
      eleve: "$\\dfrac{3}{4} \\div \\dfrac{3}{5} = \\dfrac{4}{3} \\times \\dfrac{3}{5} = \\dfrac{12}{15}$ : " +
             "la règle « on multiplie par l'inverse » est connue, mais appliquée à la mauvaise fraction.",
      cause: "La règle est retenue comme « il faut retourner une fraction », sans que la place de celle " +
             "qu'on retourne fasse partie de l'énoncé mémorisé. Comme le produit est commutatif, rien " +
             "dans l'écriture ne signale l'erreur.",
      remede: "Formuler la règle avec son sujet explicite : <strong>diviser par</strong> une fraction, " +
              "c'est multiplier par l'inverse <strong>de celle-là</strong> — celle qui suit le signe de " +
              "division, jamais celle qui le précède.<br/><br/>" +
              "Puis donner un contrôle qui fonctionne sans refaire le calcul : diviser par un nombre " +
              "plus petit que $1$ AUGMENTE le résultat. Ici on divise par $\\dfrac{3}{5} = 0{,}6$, donc " +
              "le résultat doit dépasser $\\dfrac{3}{4} = 0{,}75$. L'élève qui obtient $0{,}8$ est tout " +
              "près, mais celui qui obtient $\\dfrac{12}{15}$ au lieu de $\\dfrac{15}{12}$ voit que " +
              "l'écart va dans le mauvais sens dès qu'il compare aux deux bornes.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 9 demande
         $\dfrac{5}{2} \div \dfrac{3}{4}$, réponse $\approx 3{,}33$. Retourner la
         première fraction donnerait $\dfrac{2}{5} \times \dfrac{3}{4} = 0{,}3$,
         soit dix fois moins : l'erreur est alors énorme et visible au contrôle
         d'ordre de grandeur, puisqu'on divise par un nombre inférieur à 1. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Confondre l'inverse et l'opposé",
      eleve: "« L'inverse de $\\dfrac{7}{3}$ est $-\\dfrac{7}{3}$ » : l'élève change le signe au lieu " +
             "d'échanger les deux termes.",
      cause: "Les deux mots désignent « l'autre » nombre associé, et ils ont été rencontrés à quelques " +
             "semaines d'intervalle. Rien ne les distingue dans le langage courant, où « l'inverse de » " +
             "signifie d'ailleurs plutôt « le contraire de ».",
      remede: "Définir chacun par l'opération qui le caractérise, et les faire écrire côte à côte : " +
              "l'<strong>opposé</strong> est celui dont la SOMME vaut $0$ ($\\dfrac{7}{3} + " +
              "\\left(-\\dfrac{7}{3}\\right) = 0$) ; l'<strong>inverse</strong> est celui dont le " +
              "PRODUIT vaut $1$ ($\\dfrac{7}{3} \\times \\dfrac{3}{7} = 1$).<br/><br/>" +
              "Le test se fait alors tout seul : l'élève propose un candidat, le multiplie, et voit s'il " +
              "obtient $1$. C'est pourquoi l'énoncé de la question 4 de l'évaluation rappelle désormais " +
              "cette propriété : elle est le moyen de vérifier, pas une information à retenir en plus.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 demande
         l'inverse de $\dfrac{9}{4}$, réponse $\approx 0{,}444$. La réponse étant
         POSITIVE et inférieure à 1, un élève qui donne l'opposé ($-2{,}25$) se
         trompe à la fois de signe et d'ordre de grandeur. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Soustraire au lieu de multiplier devant « les deux tiers de »",
      eleve: "« Un réservoir contient $\\dfrac{3}{5}$ de litre, on en utilise les $\\dfrac{2}{3}$ » : " +
             "l'élève calcule $\\dfrac{3}{5} - \\dfrac{2}{3}$ et obtient un nombre négatif, sans " +
             "s'en étonner.",
      cause: "« On en utilise » évoque un retrait, et le mot « des » qui porte la multiplication passe " +
             "inaperçu. L'élève traduit le VERBE de la situation, pas la structure mathématique.",
      remede: "Installer une règle de lecture : dans ce type d'énoncé, « les $\\dfrac{a}{b}$ de » se " +
              "traduit toujours par une <strong>multiplication</strong> par $\\dfrac{a}{b}$, quel que " +
              "soit le verbe employé.<br/><br/>" +
              "La vérifier sur un cas où l'élève n'a aucun doute, avec des nombres entiers : « la " +
              "moitié de $8$ », c'est $\\dfrac{1}{2} \\times 8 = 4$, et non $8 - \\dfrac{1}{2}$. " +
              "Puis exiger le contrôle de plausibilité : une fraction inférieure à $1$ d'une quantité " +
              "donne toujours un résultat PLUS PETIT que cette quantité, et jamais un nombre négatif.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est « un
         récipient contient 30 litres de sirop, on en utilise les 3/5 », réponse
         18. Les valeurs sont entières, donc l'élève qui soustrait obtient
         29{,}4 — un résultat à peine inférieur au total, ce qui contredit
         visiblement « on en utilise les trois cinquièmes ». */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Q1 et Q2 calculent un produit et un quotient : « calculer ».
     Q3 a été PRÉCISÉE le 2026-09-13 (« les $\frac{2}{3}$ ») pour que la tâche
     soit bien la mise en opération d'une situation : « modéliser ».
     Q4 a été COMPLÉTÉE par le rappel de la propriété caractéristique : l'élève
     produit l'autre écriture du même nombre et la contrôle par le produit,
     c'est-à-dire qu'il met deux représentations en correspondance :
     « représenter ».
     Q5 a été RÉÉCRITE : c'était un calcul en chaîne, elle demande maintenant
     d'expliquer l'effet d'une erreur de méthode — « communiquer ». */
  competences: {
    evaluation: ["calculer", "calculer", "modéliser", "représenter", "communiquer"]
  }
};
