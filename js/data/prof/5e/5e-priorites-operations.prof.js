/* =========================================================
   Spark Learning – js/data/prof/5e/5e-priorites-operations.prof.js
   Fiche professeur du chapitre « Priorités des opérations » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-priorites-operations"] = {

  /* Aucun prérequis DANS CE LIVRE, et c'est le propre du chapitre qui ouvre la
     progression : il ne demande que les quatre opérations sur les entiers et
     les décimaux, acquises en sixième. Tout le reste de l'année s'appuie sur
     lui — la colonne « Prépare » du tableau de progression le montre, avec
     quatre chapitres en aval. */
  prerequis: [],

  /* Rang conseillé 1 sur 14. C'est l'outil de calcul de toute l'année : les
     relatifs y ajoutent les signes, les fractions en sont une application
     directe, et la substitution littérale en dépend entièrement. Le livre le
     range en 3e position, derrière le repérage et les relatifs, parce que son
     domaine « Nombres et calculs » s'ouvre ainsi ; la progression le remonte en
     tête, ce qui est le décalage le plus utile à signaler à l'enseignant. */
  rangConseille: 1,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Calculer une expression numérique comportant plusieurs opérations, avec ou sans parenthèses, en respectant les priorités",
    "Utiliser la notation puissance pour un exposant entier positif et l'intégrer dans l'ordre des priorités",
    "Reconnaître que la barre de fraction joue le rôle d'une parenthèse"
  ],

  note: "Le programme de cinquième demande de maîtriser les priorités, y compris avec les puissances " +
        "d'exposant entier positif. Deux remarques. " +
        "Le moyen mnémotechnique « PEMDAS » est d'origine anglo-saxonne et n'a aucun statut officiel : " +
        "il est utile en classe mais ne doit jamais figurer comme justification dans une copie, où l'on " +
        "attend la règle énoncée en français. Le sigle induit de plus une erreur réelle, en suggérant que " +
        "la multiplication précède la division et l'addition la soustraction, alors qu'à l'intérieur d'un " +
        "même niveau on calcule de GAUCHE À DROITE — ce que $12 \\div 3 \\times 2$ suffit à montrer. " +
        "Les exemples de physique ($E_c = \\dfrac{1}{2}mv^2$, $P = RI^2$) sont des illustrations : les " +
        "formules elles-mêmes relèvent du lycée et ne sont pas exigibles ici.",

  erreurs: [
    {
      titre: "Calculer de gauche à droite sans tenir compte des priorités",
      eleve: "$5 + 3 \\times 6 - 2$ donne $46$ : l'élève calcule $5 + 3 = 8$, puis $8 \\times 6 = 48$, " +
             "puis $48 - 2 = 46$.",
      cause: "L'habitude de la lecture, qui va de gauche à droite, et celle du calcul mental en chaîne. " +
             "Rien dans l'écriture ne SIGNALE que la multiplication doit se faire d'abord : la règle est " +
             "une convention, donc invisible, et l'élève qui ne l'a pas intériorisée n'a aucun indice.",
      remede: "Faire ENTOURER au crayon tous les produits et quotients avant d'écrire quoi que ce soit : " +
              "le geste matérialise la priorité sur le papier, là où la convention est muette. " +
              "L'expression devient alors « $5 + (\\text{un nombre}) - 2$ », et l'ordre cesse d'être un " +
              "choix. Montrer ensuite pourquoi la convention existe : sans elle, la même expression aurait " +
              "deux valeurs, et une formule ne voudrait plus rien dire. C'est l'argument qui fait accepter " +
              "la règle au lieu de la subir.",
      /* 2026-09-13 : renvoi verifie contre le tirage reel. L'exercice 4
         (« les pommes coutent ... plus un sac ») est une somme ou un produit
         est prioritaire, donc exactement la configuration de l'erreur. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Appliquer la puissance au produit entier",
      eleve: "$2 \\times 3^2$ donne $36$ : l'élève calcule $(2 \\times 3)^2 = 6^2$.",
      cause: "L'exposant est écrit en haut et à droite, donc APRÈS le $3$ dans l'ordre de lecture, ce qui " +
             "laisse croire qu'il porte sur tout ce qui précède. L'absence de parenthèses n'est pas " +
             "interprétée comme une information, alors qu'elle en est une.",
      remede: "Faire écrire la puissance en toutes lettres avant de calculer : $2 \\times 3^2$ se lit " +
              "« deux fois trois-au-carré », donc $2 \\times 3 \\times 3 = 18$. La lecture orale désambiguïse " +
              "à elle seule. Puis opposer les deux écritures côte à côte, $2 \\times 3^2 = 18$ et " +
              "$(2 \\times 3)^2 = 36$, et faire dire ce que les parenthèses changent : elles ne décorent " +
              "pas, elles désignent ce sur quoi l'exposant porte. Le schéma « L'exposant ne porte que sur " +
              "ce qui le précède immédiatement » est construit pour ce face-à-face.",
      /* 2026-09-13 : tache AJOUTEE au generateur pour cette remediation, qui
         n'avait aucun exercice ou renvoyer — les cinq contextes d'origine ne
         portaient que sur des sommes de produits et des parentheses, jamais sur
         la portee d'un exposant. L'exercice 1 du tirage est desormais
         « Calcule k x n au carre », et sa solution OPPOSE les deux lectures. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ignorer que la barre de fraction regroupe",
      eleve: "$\\dfrac{12 + 8}{4}$ donne $14$ : l'élève calcule $12 + 8 \\div 4 = 12 + 2$.",
      cause: "La barre de fraction est lue comme un simple signe de division, à la même hauteur que les " +
             "autres opérations. Or elle porte en elle un regroupement que le signe $\\div$ ne porte pas : " +
             "c'est une différence d'écriture, pas de calcul, et rien ne la signale à qui ne la connaît pas.",
      remede: "Faire systématiquement RÉÉCRIRE la fraction avec des parenthèses avant de calculer : " +
              "$\\dfrac{12 + 8}{4} = (12 + 8) \\div 4$. La traduction rend la priorité visible et " +
              "transforme une règle à retenir en une manipulation d'écriture. Faire constater l'écart sur " +
              "les deux résultats, $5$ contre $14$ : ils ne sont pas proches, donc l'erreur est " +
              "détectable par un ordre de grandeur. Rappeler que la barre groupe EN HAUT et EN BAS, ce qui " +
              "compte dès que le dénominateur est lui aussi une somme.",
      /* 2026-09-13 : tache AJOUTEE au generateur, meme raison. Aucun des cinq
         contextes d'origine ne comportait de barre de fraction, alors que la
         question 3 de l'evaluation en teste une : la remediation n'avait nulle
         part ou renvoyer. L'exercice 6 du tirage porte desormais sur
         (a + b) / d, avec un quotient entier. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Q1 expression mêlant + et x        -> calculer
     Q2 parenthèses et puissance        -> calculer
     Q3 barre de fraction              -> représenter
     Q4 juger une valeur et sa raison  -> communiquer
     Q5 où placer les parenthèses pour obtenir 16 -> chercher

     Q3 relève de « représenter » : ce qui est évalué n'est pas la division mais
     la lecture d'une ÉCRITURE, la barre de fraction, et la capacité à la
     traduire en parenthèses. Q4, telle qu'elle est rédigée, demande déjà de
     choisir entre quatre justifications formulées en mots et non entre quatre
     résultats : c'est bien « communiquer », et l'énoncé n'a donc pas eu besoin
     d'être réécrit — contrairement à d'autres chapitres de l'ouvrage. */
  competences: {
    evaluation: ["calculer", "calculer", "représenter", "communiquer", "chercher"]
  }
};
