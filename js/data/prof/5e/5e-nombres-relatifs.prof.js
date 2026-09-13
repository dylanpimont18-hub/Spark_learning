/* =========================================================
   Spark Learning – js/data/prof/5e/5e-nombres-relatifs.prof.js
   Fiche professeur du chapitre « Nombres relatifs » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-nombres-relatifs"] = {

  /* ch. 3 (priorités) : dès qu'une expression enchaîne plusieurs signes, comme
     $(-3) + (-8) - (-2)$ à la question 3 de l'évaluation, il faut savoir dans
     quel ordre traiter ce qui s'enchaîne. Les élèves qui n'ont pas les priorités
     installées traitent ces expressions de droite à gauche ou par paquets
     arbitraires, et l'erreur est alors imputée au signe alors qu'elle vient de
     l'ordre. */
  prerequis: [3],

  /* Rang conseillé 2 sur 14, juste après les priorités : les relatifs n'ajoutent
     qu'une chose au calcul déjà connu, le signe. Ils doivent venir tôt parce que
     le repérage graphique (coordonnées négatives), la symétrie centrale et les
     écarts de température en statistiques en dépendent. */
  rangConseille: 2,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Repérer et placer un nombre relatif sur une droite graduée, et comparer deux nombres relatifs",
    "Additionner et soustraire des nombres relatifs, et utiliser l'opposé d'un nombre",
    "Calculer la distance entre deux points d'une droite graduée"
  ],

  note: "Addition, soustraction, repérage et comparaison des relatifs sont pleinement au programme de " +
        "cinquième. Deux points du chapitre le dépassent. " +
        "La MULTIPLICATION et la DIVISION de relatifs relèvent de la quatrième : si un élève les " +
        "rencontre ici, ce ne peut être qu'en prolongement, jamais comme un attendu. " +
        "La notation VALEUR ABSOLUE $|a|$, présente dans le cours, n'est pas au programme du cycle 4 dans " +
        "cette écriture : on attend « la distance à zéro », formulée en mots. La formule $|x_B - x_A|$ pour " +
        "la distance entre deux points est donc à traiter comme un outil de contrôle, et un élève qui " +
        "compte les graduations satisfait entièrement l'attendu. " +
        "L'exemple de la force en newtons relève de la physique de quatrième : il illustre l'idée de sens " +
        "opposé et n'est pas exigible.",

  erreurs: [
    {
      titre: "Traiter la soustraction d'un négatif comme une soustraction ordinaire",
      eleve: "$(-6) - (-11)$ donne $-17$ : l'élève additionne les valeurs et garde le signe moins, ou " +
             "bien répond $-5$ en soustrayant $11$ de $6$.",
      cause: "Deux signes moins se suivent, et l'élève en traite un seul — celui qu'il voit comme " +
             "l'opération. Le second, qui appartient au nombre, est absorbé. La difficulté est " +
             "d'écriture autant que de sens : rien ne distingue visuellement le signe d'opération du " +
             "signe du nombre.",
      remede: "Imposer la réécriture en addition AVANT tout calcul, en appliquant $a - b = a + (-b)$ : " +
              "$(-6) - (-11)$ devient $(-6) + (+11)$, où il ne reste qu'une seule opération et deux " +
              "nombres signés. La règle devient alors mécanique et ne demande plus d'interprétation. " +
              "Contrôler sur la droite graduée : soustraire un nombre négatif, c'est aller vers la " +
              "DROITE, donc augmenter — ce que le résultat $+5$ confirme. C'est contre-intuitif, donc " +
              "cela se constate plutôt que cela s'énonce.",
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre l'écart entre deux nombres et leur somme",
      eleve: "Pour la distance entre $A(-4)$ et $B(+7)$, l'élève répond $3$ (il calcule $7 - 4$ en " +
             "ignorant le signe) ou bien $-11$.",
      cause: "L'élève calcule avec les chiffres qu'il voit sans tenir compte du fait que les deux points " +
             "sont de part et d'autre de zéro. Quand les deux nombres sont de même signe, sa méthode " +
             "marche, ce qui la lui confirme ; elle échoue précisément dans le cas où le zéro est " +
             "traversé, qui est le cas intéressant.",
      remede: "Faire COMPTER les graduations sur la droite, en deux morceaux séparés par zéro : de $-4$ " +
              "à $0$ il y a $4$ unités, de $0$ à $+7$ il y en a $7$, donc $11$ en tout. Le découpage " +
              "par zéro rend le calcul évident et explique pourquoi les signes s'additionnent ici. " +
              "Rappeler qu'une distance est toujours POSITIVE, ce qui permet d'écarter $-11$ sans " +
              "calcul. N'introduire $|x_B - x_A|$ qu'ensuite, comme vérification.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Distribuer le signe moins sur un seul terme",
      eleve: "$-(5 - 8)$ donne $-5 - 8 = -13$ : le signe devant la parenthèse n'est appliqué qu'au " +
             "premier terme.",
      cause: "Le signe moins placé devant une parenthèse est lu comme s'il appartenait au premier nombre " +
             "rencontré, par simple proximité visuelle. L'idée qu'il porte sur le RÉSULTAT de la " +
             "parenthèse — donc sur les deux termes — demande de voir la parenthèse comme un bloc, ce " +
             "qui n'est pas encore automatique en début de cinquième.",
      remede: "Exiger que la parenthèse soit calculée EN PREMIER, comme les priorités l'imposent déjà : " +
              "$5 - 8 = -3$, donc $-(-3) = +3$. Le signe ne rencontre alors qu'un seul nombre et il n'y " +
              "a plus rien à distribuer. Faire vérifier sur un cas où l'erreur est flagrante, " +
              "$-(10 - 1)$ : l'élève qui distribue mal trouve $-11$ quand le résultat est $-9$. " +
              "Rappeler au passage que « moins l'opposé » redonne le nombre de départ.",
      exercice: null
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE. Les vingt-sept moules du
         generateur sont tous des situations contextualisees (temperatures,
         altitudes, soldes, etages) qui n'enchainent jamais un signe devant une
         PARENTHESE : l'erreur decrite ici, purement d'ecriture, ne s'y presente
         donc pas. Elle n'est travaillee que par la question 5 de l'evaluation,
         vers laquelle une remediation ne renvoie jamais. Le remede s'appuie donc
         sur des expressions ecrites au tableau, et non sur un exercice du livre
         qui ne traiterait pas l'erreur. */
    }
  ],

  /* Q1 somme de deux relatifs      -> calculer
     Q2 soustraction d'un négatif   -> calculer
     Q3 expression à trois termes   -> calculer
     Q4 distance sur une droite     -> représenter
     Q5 juger l'effet du signe      -> communiquer

     Q4 est « représenter » : l'attendu porte sur la droite graduée et sur la
     lecture d'un écart comme une longueur, pas sur la soustraction elle-même.
     Q5, telle qu'elle est rédigée, fait déjà choisir entre quatre EXPLICATIONS
     (« $-5 + 8 = 3$ » contre « $-5 - 8 = -13$ ») et non entre quatre résultats
     nus : elle mobilise donc réellement « communiquer », et n'a pas eu besoin
     d'être réécrite.

     Trois « calculer » sur cinq est beaucoup, mais c'est ici légitime : le
     chapitre est un chapitre de technique de calcul, et les trois questions
     portent sur trois configurations de signes distinctes (somme, soustraction
     d'un négatif, enchaînement). Le plafond de 35 % s'apprécie sur l'ouvrage
     entier, où il est respecté. */
  competences: {
    evaluation: ["calculer", "calculer", "calculer", "représenter", "communiquer"]
  }
};
