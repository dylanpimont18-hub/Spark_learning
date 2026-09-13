/* =========================================================
   Spark Learning – js/data/prof/5e/5e-probabilites.prof.js
   Fiche professeur du chapitre « Probabilités (introduction) »
   (cinquième). JAMAIS chargée par le site : seul scripts/manuel/prof.js
   la lit, au moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-probabilites"] = {

  /* ch. 4 (opérations sur les fractions) : une probabilité EST une fraction,
     $\dfrac{\text{cas favorables}}{\text{cas possibles}}$, et l'évaluation en
     demande la valeur décimale arrondie à chaque question. Sans maîtrise du
     quotient, l'élève ne peut que réciter la formule.
     ch. 13 (statistiques) : la notion de FRÉQUENCE y est construite, et c'est
     elle qui donne sens à la probabilité comme fréquence observée sur un grand
     nombre d'essais — notamment pour réfuter le sophisme du joueur. */
  prerequis: [4, 13],

  /* Rang conseillé 14 sur 14 : le chapitre clôt l'année. Il a besoin des
     fractions (rang 4) et des fréquences (rang 13), et ne conditionne aucun
     autre chapitre de cinquième — la colonne « Prépare » de la progression est
     donc vide pour lui, ce qui est un fait et non un oubli. Le livre le range
     aussi en 14e position. */
  rangConseille: 14,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Organisation et gestion de données ».
  attendus: [
    "Exprimer une probabilité par un nombre compris entre 0 et 1, et reconnaître un événement impossible ou certain",
    "Calculer une probabilité dans une situation d'équiprobabilité",
    "Calculer la probabilité de l'événement contraire"
  ],

  note: "L'introduction des probabilités en situation d'équiprobabilité est au programme de cinquième, " +
        "événement contraire compris. Trois réserves. " +
        "L'INDÉPENDANCE des épreuves successives, centrale dans la question 5 (le sophisme du joueur), " +
        "n'est pas un attendu formel du cycle 4 : on la traite comme un fait d'expérience (« la pièce n'a " +
        "pas de mémoire ») et non comme une propriété à énoncer. La question reste excellente et très " +
        "formatrice, mais un élève qui se trompe ne doit pas être pénalisé comme sur un attendu. " +
        "La notation $\\bar{A}$ pour l'événement contraire n'est pas exigible en cinquième : on attend " +
        "« l'événement contraire » en mots, et la barre n'est qu'une commodité d'écriture. " +
        "Noter enfin que le générateur ne produit qu'un seul type de situation (un tirage équiprobable " +
        "parmi des éléments numérotés), alors que l'évaluation aborde aussi l'événement contraire et " +
        "l'événement impossible : voir les remédiations ci-dessous.",

  erreurs: [
    {
      titre: "Croire que deux issues signifient une chance sur deux",
      eleve: "« Il y a deux possibilités, gagner ou perdre, donc $P = 0{,}5$ » — appliqué à un tirage où " +
             "l'on gagne avec $4$ numéros sur $12$.",
      cause: "Le mot « équiprobable » est compris comme « il y a plusieurs cas », sans sa condition : des " +
             "issues de MÊME probabilité. L'élève compte les issues de l'événement (gagner, perdre) au lieu " +
             "de compter les cas élémentaires. L'erreur est renforcée par les jeux de pile ou face, où la " +
             "réponse $0{,}5$ est effectivement juste.",
      remede: "Faire ÉNUMÉRER les cas élémentaires un par un, ici les douze numéros, et entourer ceux qui " +
              "font gagner : quatre sur douze, donc $\\dfrac{4}{12} \\approx 0{,}33$. C'est le comptage, " +
              "et non la formule, qui corrige l'erreur. " +
              "Opposer ensuite deux situations à deux issues dont l'une seulement est équiprobable : " +
              "pile ou face ($0{,}5$), et « tirer le numéro $1$ ou un autre » parmi douze " +
              "($\\dfrac{1}{12}$ contre $\\dfrac{11}{12}$). Deux issues, deux probabilités très " +
              "différentes — l'élève voit alors que le nombre d'issues ne décide de rien.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Soustraire au mauvais total pour l'événement contraire",
      eleve: "Pour $P(\\text{gagner}) = 0{,}35$, l'élève répond $0{,}75$, ou $100 - 0{,}35$, ou encore " +
             "$0{,}35$ lui-même.",
      cause: "La règle $P(\\bar{A}) = 1 - P(A)$ est mémorisée, mais le $1$ n'a pas de signification pour " +
             "l'élève : il ne voit pas que $1$ représente la CERTITUDE, c'est-à-dire tous les cas réunis. " +
             "Quand les probabilités sont exprimées en pourcentage ailleurs dans l'année, il soustrait " +
             "naturellement à $100$.",
      remede: "Installer le sens du $1$ avant la formule : gagner ou perdre, l'un des deux arrive " +
              "forcément, donc les deux probabilités réunies valent la certitude, soit $1$. " +
              "Faire vérifier que la somme des deux fait bien $1$, ce qui est un contrôle que l'élève peut " +
              "mener seul : $0{,}35 + 0{,}65 = 1$ ✓, alors que $0{,}35 + 0{,}75 = 1{,}1$, impossible " +
              "puisqu'aucune probabilité ne dépasse $1$. " +
              "Préciser que $100\\%$ et $1$ sont deux écritures de la même certitude, et qu'on ne mélange " +
              "pas les deux dans un même calcul.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire qu'une série de résultats identiques change la suite",
      eleve: "« Après $10$ faces de suite, la probabilité de face au $11^e$ lancer est presque nulle, " +
             "parce que face est épuisé » — ou, symétriquement, « presque certaine, parce que la pièce " +
             "favorise face ».",
      cause: "C'est le sophisme du joueur, et il ne relève pas d'une lacune de calcul mais d'une intuition " +
             "très robuste : l'élève attend que le hasard « se rééquilibre ». Les deux erreurs opposées " +
             "coexistent en classe, ce qui montre bien qu'aucune des deux ne vient d'un raisonnement.",
      remede: "Faire constater que la pièce n'a aucun moyen PHYSIQUE de se souvenir : elle n'a ni mémoire " +
              "ni compteur, et le onzième lancer est matériellement identique au premier. " +
              "Puis distinguer les deux questions que les élèves confondent : « obtenir $11$ faces de " +
              "suite » est effectivement très improbable AVANT de commencer, mais « obtenir face au " +
              "onzième lancer, sachant que les dix premiers sont faits » vaut toujours $\\dfrac{1}{2}$. " +
              "Le passé est acquis, il ne se recalcule pas. " +
              "Un relevé de lancers en classe, où l'on observe des séries de quatre ou cinq identiques, " +
              "rend la chose tangible : de telles séries sont normales, pas anormales.",
      exercice: null
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE, et le remede le dit. Les quatre
         moules du generateur produisent tous un tirage equiprobable UNIQUE parmi
         des elements numerotes ; aucun exercice ne porte sur une SUITE
         d'epreuves, ce qui est la situation meme du sophisme. L'erreur n'est
         travaillee que par la question 5 de l'evaluation, vers laquelle une
         remediation ne renvoie jamais. Un renvoi vers un tirage unique serait un
         renvoi faux : le remede s'appuie donc sur une experience de lancers
         conduite en classe. */
    }
  ],

  /* Q1 probabilité sur un dé            -> calculer
     Q2 probabilité dans une urne        -> modéliser
     Q3 événement contraire              -> calculer
     Q4 événement impossible             -> raisonner
     Q5 sophisme du joueur               -> raisonner

     Q2 est « modéliser » : l'élève doit d'abord construire le total des cas
     ($4 + 3 + 5 = 12$), qui n'est pas donné dans l'énoncé, avant tout calcul —
     c'est la mise en place du modèle qui fait la difficulté, pas le quotient.
     Q4 et Q5 sont deux « raisonner » de natures bien distinctes : l'un sur les
     bornes d'une probabilité (un événement impossible vaut $0$), l'autre sur
     l'indépendance des épreuves. Aucune des deux ne demande de calcul. */
  competences: {
    evaluation: ["calculer", "modéliser", "calculer", "raisonner", "raisonner"]
  }
};
