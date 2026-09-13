/* =========================================================
   Spark Learning – js/data/prof/5e/5e-statistiques.prof.js
   Fiche professeur du chapitre « Statistiques descriptives » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-statistiques"] = {

  /* ch. 4 (opérations sur les fractions) : une moyenne est un quotient, et une
     moyenne pondérée est une somme de produits divisée par une somme — soit une
     fraction dont le numérateur et le dénominateur sont eux-mêmes calculés.
     ch. 5 (proportionnalité) : une fréquence EST un pourcentage, et la question 4
     de l'évaluation la demande explicitement sous cette forme. */
  prerequis: [4, 5],

  /* Rang conseillé 13 sur 14 : le chapitre réutilise les fractions et les
     pourcentages, et précède immédiatement les probabilités (rang 14) dont il
     fournit la notion de fréquence. Le livre le range aussi en 13e position. */
  rangConseille: 13,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Organisation et gestion de données ».
  attendus: [
    "Calculer la moyenne et l'étendue d'une série de données",
    "Calculer une moyenne pondérée par des effectifs ou des coefficients",
    "Calculer et interpréter une fréquence, et l'exprimer en pourcentage"
  ],

  note: "Moyenne, moyenne pondérée, étendue et fréquence sont tous au programme de cinquième. " +
        "Deux points du cours le dépassent. " +
        "La MÉDIANE, mentionnée comme « parfois plus représentative », est un attendu de quatrième : elle " +
        "peut être évoquée pour justifier les limites de la moyenne, mais ne doit pas être calculée ni " +
        "évaluée ici. L'évaluation du chapitre ne la teste effectivement pas. " +
        "Le vocabulaire de la DISPERSION (« l'étendue ne dit rien sur la répartition ») est une remarque " +
        "juste, mais la notion de dispersion elle-même n'est pas formalisée au cycle 4 : s'en tenir au " +
        "constat sur un exemple. " +
        "Le générateur d'exercices a été élargi le 2026-09-13 : il ne produisait que des moyennes simples, " +
        "alors que l'évaluation teste aussi l'étendue, la moyenne pondérée et la fréquence. Ces quatre " +
        "tâches sont désormais toutes travaillées dans les exercices. Au passage, le thème « tailles des " +
        "élèves » tirait ses valeurs entre $5$ et $18$, ce qui produisait des collégiens de $13$ cm : " +
        "chaque thème a maintenant son propre intervalle.",

  erreurs: [
    {
      titre: "Diviser par le nombre de valeurs distinctes au lieu de l'effectif total",
      eleve: "Pour la série $8, 11, 13, 15, 9, 14$, l'élève divise la somme par $5$ au lieu de $6$ ; ou, " +
             "sur une série avec répétitions comme $13, 13, 5, 11$, il divise par $3$ parce qu'il ne " +
             "compte qu'une fois la valeur répétée.",
      cause: "Le dénominateur de la moyenne est compté sur ce que l'élève VOIT comme des valeurs " +
             "différentes, et non sur le nombre de données. Une valeur répétée est perçue comme une seule " +
             "information, alors qu'elle compte autant de fois qu'elle apparaît.",
      remede: "Faire compter les données AVANT d'additionner, et écrire l'effectif à part, entouré : " +
              "« $6$ notes », puis la somme, puis la division. Le dénominateur cesse d'être un nombre " +
              "retrouvé de mémoire au moment de diviser. Sur une série avec répétitions, faire pointer du " +
              "doigt chaque donnée en comptant à voix haute : deux $13$ comptent pour deux. " +
              "Contrôle de vraisemblance que l'élève peut faire seul : la moyenne doit toujours tomber " +
              "ENTRE la plus petite et la plus grande des valeurs — diviser par un nombre trop petit donne " +
              "un résultat supérieur au maximum, ce qui se voit immédiatement.",
      /* 2026-09-13 : renvoi verifie contre le tirage et CORRIGE. L'exercice 1
         est une etendue depuis l'elargissement du generateur ; la moyenne simple,
         ou cette erreur se produit, est en exercice 3. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Faire la moyenne des moyennes sans tenir compte des effectifs",
      eleve: "Pour $4$ élèves à $12$ et $6$ élèves à $16$, l'élève répond $14$, c'est-à-dire " +
             "$\\dfrac{12 + 16}{2}$, au lieu de $14{,}4$.",
      cause: "Les deux notes sautent aux yeux, les effectifs sont perçus comme un décor de l'énoncé. " +
             "L'élève applique la moyenne qu'il connaît — celle de deux nombres — aux deux nombres qu'il " +
             "voit. L'erreur est d'autant plus difficile à détecter que le résultat obtenu est proche du " +
             "bon, ici à $0{,}4$ près.",
      remede: "Faire écrire la série EN ENTIER une première fois, les dix notes alignées : " +
              "$12, 12, 12, 12, 16, 16, 16, 16, 16, 16$. La moyenne redevient alors une moyenne simple et " +
              "le rôle des effectifs apparaît sans qu'on ait à l'expliquer. Passer ensuite à l'écriture " +
              "abrégée $\\dfrac{4 \\times 12 + 6 \\times 16}{4 + 6}$ en montrant qu'elle dit la même chose. " +
              "Installer le contrôle : la moyenne pondérée se rapproche toujours de la note du groupe le " +
              "PLUS NOMBREUX — ici du $16$, donc elle doit dépasser $14$.",
      /* 2026-09-13 : le generateur ne produisait que des moyennes SIMPLES, et ce
         renvoi devait rester vide. Une tache de moyenne PONDEREE par des
         effectifs a donc ete ajoutee pour cette remediation : l'exercice 2 du
         tirage en est une, avec deux effectifs DIFFERENTS — condition necessaire,
         sans quoi l'erreur donnerait le bon resultat par hasard. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre l'étendue avec la moyenne ou avec l'effectif",
      eleve: "Pour les tailles $152, 148, 165, 170, 155$, l'élève répond $158$ (la moyenne) ou $5$ " +
             "(le nombre de valeurs) au lieu de $22$.",
      cause: "Trois nombres différents se calculent sur la même série — moyenne, étendue, effectif — et " +
             "les mots qui les désignent ne disent pas l'opération. « Étendue » n'évoque spontanément " +
             "aucun calcul, là où « moyenne » est familière : l'élève produit donc le calcul qu'il connaît.",
      remede: "Rattacher le mot au geste : l'étendue, c'est « de combien ça s'étend », donc du plus petit " +
              "au plus grand — une SOUSTRACTION, et une seule. Faire entourer le minimum et le maximum " +
              "sur la série avant de calculer ; le reste des données ne sert pas, ce qui distingue " +
              "nettement l'étendue de la moyenne qui, elle, les utilise toutes. " +
              "Faire remarquer que l'étendue ne dit rien de ce qui se passe entre les deux extrêmes : " +
              "deux séries très différentes peuvent avoir la même étendue, ce qui est la limite de cet " +
              "indicateur et justifie qu'on en calcule plusieurs.",
      /* 2026-09-13 : tache « etendue » AJOUTEE au generateur pour cette
         remediation, qui n'avait aucun exercice ou renvoyer. L'exercice 1 du
         tirage demande une etendue, et sa correction insiste sur le fait que
         seules DEUX valeurs de la serie servent — ce qui distingue l'etendue de
         la moyenne, objet meme de la confusion. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Q1 moyenne simple             -> calculer
     Q2 étendue                    -> représenter
     Q3 moyenne pondérée           -> modéliser
     Q4 fréquence en pourcentage   -> calculer
     Q5 juger une affirmation      -> communiquer

     Q2 est « représenter » : l'étendue est un indicateur de la DISPERSION, et la
     question porte sur le choix des deux valeurs extrêmes dans la série, donc sur
     la lecture des données plus que sur la soustraction.
     Q3 est « modéliser » : il faut traduire « 4 élèves ont 12 » en une
     pondération, ce qui est la construction d'un modèle de calcul, non son
     exécution.
     Q5, déjà rédigée comme le jugement d'une affirmation d'élève avec sa
     justification, mobilise réellement « communiquer » : elle n'a pas eu besoin
     d'être réécrite. */
  competences: {
    evaluation: ["calculer", "représenter", "modéliser", "calculer", "communiquer"]
  }
};
