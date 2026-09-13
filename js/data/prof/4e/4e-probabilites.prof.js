/* =========================================================
   Spark Learning – js/data/prof/4e/4e-probabilites.prof.js
   Fiche professeur du chapitre « Probabilités : calcul et événements »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-probabilites"] = {

  /* ch. 4 (fractions) : une probabilité est un quotient d'effectifs, et tout le
     chapitre consiste à écrire, simplifier et comparer des fractions. Les
     exercices de tirage dans un sac sont littéralement des exercices de fractions
     habillés. */
  prerequis: [4],

  /* Rang conseillé 12, dernier de l'année. Le chapitre ferme le domaine
     « Organisation et gestion de données », après les statistiques (rang 11) :
     l'ordre est important, car la FRÉQUENCE observée, installée en statistiques,
     est ce qui donne du sens à la PROBABILITÉ. Commencer par les probabilités
     ferait de la probabilité un nombre décrété. */
  rangConseille: 12,

  attendus: [
    "Calculer des probabilités dans des situations simples d'équiprobabilité",
    "Déterminer la probabilité d'un événement contraire",
    "Calculer la probabilité de la réunion de deux événements",
    "Reconnaître des événements incompatibles"
  ],

  note: "Le calcul de probabilités en situation d'équiprobabilité et l'événement contraire sont au " +
        "programme de quatrième.<br/><br/>" +
        "La formule de la RÉUNION, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, déborde du " +
        "programme de quatrième dans la plupart des progressions : elle est généralement vue en " +
        "troisième, voire en seconde, et les notations $\\cup$ et $\\cap$ avec elle. Ce chapitre " +
        "l'anticipe délibérément, et c'est à signaler avant de l'enseigner.<br/><br/>" +
        "Deux conséquences pratiques. D'abord, les tâches de réunion et d'incompatibilité peuvent " +
        "être réservées aux élèves à l'aise, ou reportées. Ensuite, si l'on traite la formule, il " +
        "vaut mieux l'introduire sans les symboles ensemblistes — « la probabilité que l'un au " +
        "moins des deux se réalise » — puis donner la notation une fois l'idée acquise. La " +
        "question 5 de l'évaluation, qui porte sur le double comptage, est d'ailleurs formulée en " +
        "pourcentages et sans symbole.",

  erreurs: [
    {
      titre: "Additionner les probabilités et dépasser 1",
      eleve: "$60\\,\\%$ des élèves font du sport, $50\\,\\%$ jouent d'un instrument, donc " +
             "« $110\\,\\%$ font l'un ou l'autre » — et l'élève ne s'étonne pas du résultat.",
      cause: "L'addition est l'opération attendue devant « ou », et elle est correcte pour des " +
             "événements incompatibles. L'élève généralise un cas particulier, et surtout il ne " +
             "dispose d'aucun réflexe de contrôle sur l'ordre de grandeur d'une probabilité.",
      remede: "Installer d'abord le garde-fou, qui est la chose la plus utile du chapitre : une " +
              "probabilité est TOUJOURS comprise entre $0$ et $1$, donc un pourcentage entre $0$ et " +
              "$100$. Tout résultat en dehors signale une erreur, sans qu'il soit besoin de savoir " +
              "laquelle.<br/><br/>" +
              "Expliquer ensuite la cause, qui est un double comptage : l'élève qui fait du sport ET " +
              "joue d'un instrument est compté une fois dans chaque groupe. Un schéma à deux " +
              "patates qui se chevauchent le montre immédiatement, et la zone commune est " +
              "exactement ce qu'il faut retrancher.<br/><br/>" +
              "La formule devient alors une correction, pas une règle : " +
              "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, où le terme soustrait répare le double " +
              "comptage.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 2 est une tâche « union » — $P(A) = 0{,}5$, $P(B) = 0{,}3$,
         $P(A \cap B) = 0{,}1$, calculer $P(A \cup B)$, réponse $0{,}7$. La
         solution imprimée explique le double comptage AVANT de poser la formule,
         ce qui est l'ordre de la remédiation. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre la réunion et l'intersection",
      eleve: "L'élève calcule $P(A \\cap B)$ quand on demande $P(A \\cup B)$, ou traduit « ou » par " +
             "l'intersection.",
      cause: "Les deux symboles se ressemblent, et le vocabulaire courant est ambigu : en français, " +
             "« ou » est souvent exclusif (« fromage ou dessert »), alors qu'en mathématiques il est " +
             "inclusif.",
      remede: "Traduire chaque symbole par une phrase, et s'y tenir : $A \\cup B$ se dit " +
              "« <strong>au moins l'un</strong> des deux se réalise » (donc éventuellement les deux) ; " +
              "$A \\cap B$ se dit « <strong>les deux à la fois</strong> ».<br/><br/>" +
              "Donner le moyen de ne jamais se tromper de symbole, qui est purement visuel : le " +
              "$\\cup$ est un récipient OUVERT, il recueille tout — c'est la réunion. Le $\\cap$ est " +
              "fermé en haut, il ne garde que ce qui est sous le chapeau, c'est-à-dire l'intersection.<br/><br/>" +
              "Et le contrôle qui tranche toujours : l'intersection est toujours PLUS PETITE que " +
              "chacun des deux événements, la réunion toujours PLUS GRANDE. Si le résultat ne " +
              "respecte pas cela, les deux ont été échangés.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est une tâche
         « tirage » portant sur un événement contraire (« quelle est la probabilité
         de ne PAS obtenir un objet vert ? »), réponse $\approx 0{,}706$. Elle
         oblige à distinguer ce qu'on compte de ce qu'on exclut, qui est le même
         geste logique que la distinction réunion / intersection — et c'est la
         seule tâche de la banque qui le travaille sans passer par les symboles. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier le contraire quand il serait plus rapide",
      eleve: "Pour « la probabilité de ne pas tirer une bille verte » parmi $5$ rouges, $3$ bleues et " +
             "$2$ vertes, l'élève additionne $5 + 3$ péniblement au lieu de calculer " +
             "$1 - \\dfrac{2}{10}$, et se trompe d'un effectif.",
      cause: "La notion d'événement contraire est connue comme une définition, mais pas comme un " +
             "OUTIL de calcul. L'élève ne se demande pas s'il est plus économique de compter ce qu'il " +
             "veut ou ce qu'il ne veut pas.",
      remede: "Poser la question de méthode à voix haute, systématiquement, avant de calculer : " +
              "« est-il plus court de compter les cas qui m'intéressent, ou ceux qui ne " +
              "m'intéressent pas ? ». Devant un « au moins un » ou un « ne pas », le contraire est " +
              "presque toujours plus court.<br/><br/>" +
              "Le montrer sur un cas où l'écart est spectaculaire : la probabilité d'obtenir au moins " +
              "un $6$ en lançant trois dés demande d'énumérer une foule de cas par la voie directe, " +
              "et un seul calcul par le contraire.<br/><br/>" +
              "Exiger l'écriture $P(\\bar{A}) = 1 - P(A)$ plutôt qu'un recomptage : c'est elle qui " +
              "rend le gain visible.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est une tâche
         « contraire » — « la probabilité de gagner une partie vaut $0{,}72$ :
         quelle est la probabilité de ne pas la gagner ? », réponse $0{,}28$. Le
         calcul direct est impossible ici, puisque aucun effectif n'est donné :
         l'élève est OBLIGÉ de passer par le contraire, ce qui installe l'outil
         avant de le proposer comme raccourci. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Appliquer la formule de la réunion à des événements incompatibles sans le voir",
      eleve: "Pour deux événements qui ne peuvent pas se produire ensemble, l'élève cherche la valeur " +
             "de $P(A \\cap B)$ dans l'énoncé, ne la trouve pas, et reste bloqué.",
      cause: "La formule est appliquée comme un gabarit à remplir : trois cases, trois nombres à " +
             "trouver. Quand une donnée manque, l'élève conclut que l'énoncé est incomplet plutôt que " +
             "de chercher si elle se déduit.",
      remede: "Faire du mot « incompatibles » une DONNÉE et non un commentaire : il dit exactement " +
              "que $P(A \\cap B) = 0$. Le nombre est donné, simplement en français plutôt qu'en " +
              "chiffres.<br/><br/>" +
              "Faire alors constater que la formule se simplifie d'elle-même : " +
              "$P(A \\cup B) = P(A) + P(B) - 0 = P(A) + P(B)$. Il n'y a pas deux formules à retenir, " +
              "mais une formule générale dont le cas incompatible est un cas particulier — ce qui est " +
              "beaucoup moins lourd à mémoriser.<br/><br/>" +
              "Faire enfin repérer les situations incompatibles par le sens, pas par le mot : un dé " +
              "ne peut pas faire $6$ et $1$ au même lancer, un coureur ne peut pas arriver premier et " +
              "dernier. Quand les deux événements s'excluent matériellement, l'intersection est vide.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est une tâche
         « incompatibles » — « arriver premier » et « arriver dernier », $P(A) =
         0{,}2$ et $P(B)$ donné, réponse $0{,}35$. L'énoncé dit « ne peuvent pas se
         produire en même temps » sans jamais donner de valeur d'intersection, et
         sa solution imprimée nomme le mot « incompatibles » puis montre la
         simplification de la formule. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Q1 met une situation concrète en probabilité (un dé, un événement décrit par
     une inégalité) : « modéliser ».
     Q2 applique la formule de la réunion : « calculer ».
     Q3 conclut de $P(A)$ à $P(\bar{A})$ en mobilisant la propriété du contraire,
     sans calcul à poser : « raisonner ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancienne question se répondait par la
     définition même du mot « incompatibles », sans aucune démarche. La nouvelle
     demande de RETOURNER la formule de la réunion pour en tirer l'intersection,
     ce que rien ne suggère — « chercher ».
     Q5 a été RÉÉCRITE : c'était un calcul d'événement contraire à choisir parmi
     quatre fractions. Elle demande maintenant d'expliquer pourquoi une somme de
     probabilités dépasse 100 %, ce qui est l'erreur la plus révélatrice du
     chapitre — « communiquer ». */
  competences: {
    evaluation: ["modéliser", "calculer", "raisonner", "chercher", "communiquer"]
  }
};
