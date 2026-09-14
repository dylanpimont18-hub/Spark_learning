/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-information-chiffree.prof.js
   Fiche professeur du chapitre « Information chiffrée » (première), pour
   l'édition du professeur. JAMAIS chargée par le site : seul
   scripts/manuel/prof.js la lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote 1re-derivation.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-information-chiffree"] = {

  /* Prérequis : AUCUN chapitre de ce niveau.

     Ce n'est pas un oubli, c'est le fait qui justifie son rang 1. Ce chapitre
     ne demande que des multiplications et des divisions de décimaux, toutes
     acquises au collège : il n'a besoin d'aucun autre chapitre de première.
     Il est même le seul du niveau dans ce cas.

     Le cahier des charges demande les prérequis RÉELS : déclarer le second
     degré ou les suites parce qu'ils sont « importants » serait un prérequis
     décoratif, et rendrait la colonne de la progression annuelle inutilisable.
     Une liste vide est ici la bonne réponse. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 1.

     Le LIVRE le place en DERNIÈRE position, comme chapitre 10 — l'ordre du
     livre venant de `DATA_FILES` dans js/loader.js, et non de l'ordre
     alphabétique des fichiers. L'écart entre les deux positions est donc
     maximal, et c'est le cas le plus net du niveau : la progression conseillée
     l'ouvre en tête de l'année, pour trois raisons.

     D'abord parce qu'il est autonome, comme dit ci-dessus : c'est le seul
     chapitre qu'on puisse traiter en septembre sans rien devoir installer
     avant.

     Ensuite parce qu'il sert ailleurs. Les probabilités conditionnelles
     donnent leurs énoncés en pourcentages, les suites géométriques
     s'introduisent naturellement par un taux d'évolution constant, et les
     variables aléatoires manipulent des proportions. Le traiter tôt, c'est
     rendre service à trois autres chapitres.

     Enfin parce qu'il rassure. C'est le chapitre le plus concret de l'année,
     le moins abstrait, et celui où les élèves qui doutent de leur choix de
     spécialité retrouvent le plus vite de la confiance. */
  rangConseille: 1,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Algèbre », sous-partie « Évolutions et
  // pourcentages » (le programme la rattache aussi à l'enseignement
  // scientifique).
  attendus: [
    "Calculer un taux d'évolution et l'exprimer en pourcentage",
    "Passer d'un taux d'évolution à un coefficient multiplicateur, et réciproquement",
    "Composer plusieurs évolutions successives par produit des coefficients",
    "Déterminer le taux d'évolution réciproque, qui ramène à la valeur initiale",
    "Calculer un taux d'évolution moyen sur plusieurs périodes",
    "Lire et interpréter un indice en base 100"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Le taux d'évolution, le coefficient multiplicateur, les évolutions successives, le taux " +
        "réciproque et les indices sont au programme de première.<br/><br/>" +
        "<strong>Un point déborde nettement, et un second mérite attention.</strong><br/><br/>" +
        "Le <strong>taux d'évolution moyen</strong>, travaillé par une tâche de la banque, se calcule " +
        "par une racine $n$-ième, c'est-à-dire par une puissance d'exposant fractionnaire. Les " +
        "puissances à exposant réel ne sont pas au programme de première : elles relèvent de la " +
        "terminale, avec la fonction exponentielle. L'exercice reste entièrement faisable à la " +
        "calculatrice, et il est utile — c'est une compétence attendue en enseignement scientifique " +
        "comme en SES — mais il constitue une <strong>ouverture</strong>, pas un attendu. On le " +
        "signalera comme tel, ou on le réservera aux élèves à l'aise.<br/><br/>" +
        "Les <strong>indices en base 100</strong>, eux, sont bien au programme, mais ils sont " +
        "souvent traités en cours de SES avant de l'être en mathématiques. Il vaut la peine de " +
        "demander à la classe qui les a déjà rencontrés : la moitié d'une classe de première " +
        "générale suit la spécialité SES, et ces élèves-là gagneront à faire le lien plutôt qu'à " +
        "réapprendre la même chose sous un autre nom.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-14), APRÈS l'élargissement de la banque : un
     renvoi écrit contre l'ancien tirage aurait été décalé par les nouveaux
     rangs.

     DEUX RÈGLES ÉDITORIALES respectées sans exception : une remédiation ne
     renvoie jamais vers l'évaluation notée, et un renvoi faux est pire qu'un
     renvoi absent. */
  erreurs: [
    {
      titre: "Additionner les taux d'évolutions successives",
      eleve: "Après une hausse de $20\\%$ puis une baisse de $20\\%$, l'élève conclut qu'« on revient " +
             "au prix de départ », alors que le prix a baissé de $4\\%$.",
      cause: "C'est l'erreur structurante du chapitre, et elle n'est pas une étourderie : elle vient " +
             "d'une propriété que l'élève tient pour acquise depuis l'école primaire, celle que les " +
             "grandeurs de même nature s'additionnent. Ce qui lui manque est que le pourcentage " +
             "n'est pas une grandeur : c'est un RAPPORT, et un rapport a toujours une base. Les deux " +
             "$20\\%$ de l'exemple ne portent pas sur la même somme, donc ils ne représentent pas la " +
             "même quantité d'argent.",
      remede: "Ne jamais commencer par « les taux ne s'additionnent pas », qui est une interdiction " +
              "sans raison : l'élève la retient une semaine.<br/><br/>" +
              "Faire calculer sur $100$ €, de tête, et faire dire à voix haute le montant retiré à " +
              "chaque étape. La hausse ajoute $20$ € et porte le prix à $120$ € ; la baisse retire " +
              "$20\\%$ de $120$ €, c'est-à-dire $24$ € et non $20$. L'élève a alors sous les yeux " +
              "deux pourcentages identiques qui valent des sommes différentes, et la conclusion se " +
              "fait toute seule.<br/><br/>" +
              "Introduire seulement ENSUITE le coefficient multiplicateur, en le présentant pour ce " +
              "qu'il est : un moyen de se débarrasser du problème. Les coefficients, eux, se " +
              "multiplient toujours, quelle que soit la base, et c'est précisément l'intérêt de " +
              "changer d'outil.<br/><br/>" +
              "Le « Découvrir » du chapitre est construit sur cette même vérification à $100$ €, et " +
              "peut servir d'entrée dès la première séance.",
      /* Vérifié contre le tirage réel (2026-09-14, ordre de DATA_FILES) :
         l'exercice 7 compose une hausse de 30 % et une baisse de 20 %, et son
         corrigé se termine en opposant explicitement le résultat exact à celui
         que donnerait une addition des taux. C'est la tâche « successives »,
         ajoutée le 2026-09-14 : la banque d'origine ne tirait qu'une seule
         tâche, et la composition d'évolutions — pourtant le cœur du chapitre —
         n'y était jamais travaillée.

         RENVOI CORRIGÉ le 2026-09-14 : les quatre renvois de cette fiche
         avaient d'abord été vérifiés contre un tirage obtenu en classant les
         chapitres par ordre alphabétique. Or le livre les numérote dans l'ordre
         de `DATA_FILES` (js/loader.js), ce qui change le rang du chapitre —
         l'information chiffrée est le chapitre 10 et non le chapitre 3 — donc
         la graine, donc les exercices tirés. Les renvois visaient des exercices
         qui existaient, que la validation acceptait, et qui parlaient d'autre
         chose. C'est exactement le symptôme décrit dans le cahier des
         charges. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Soustraire au lieu de diviser pour remonter à la valeur initiale",
      eleve: "Pour retrouver le prix d'avant une hausse de $25\\%$ ayant abouti à $120$ €, l'élève " +
             "calcule $120 - 30 = 90$ € au lieu de $120 \\div 1{,}25 = 96$ €.",
      cause: "L'élève applique correctement l'idée qu'il faut « défaire » l'opération, mais il " +
             "défait la mauvaise : il retire un pourcentage du prix FINAL alors que le pourcentage " +
             "de l'énoncé portait sur le prix INITIAL. C'est encore la question de la base, mais " +
             "sous une forme plus difficile à voir, parce que le prix initial est justement " +
             "l'inconnue — l'élève ne peut pas calculer $25\\%$ de quelque chose qu'il cherche.",
      remede: "Poser l'écriture directe de l'énoncé, sans chercher à inverser : " +
              "« prix initial $\\times 1{,}25 =$ prix final ». Écrite ainsi, l'équation est celle " +
              "d'une multiplication à trou, et l'élève sait depuis longtemps qu'on y répond par une " +
              "division. Il n'y a plus de règle nouvelle à retenir.<br/><br/>" +
              "Exiger ensuite la vérification systématique, qui coûte dix secondes : reprendre la " +
              "réponse trouvée et lui appliquer la hausse. Avec $96 \\times 1{,}25 = 120$, c'est " +
              "juste ; avec $90 \\times 1{,}25 = 112{,}5$, l'élève voit lui-même que ce n'est pas " +
              "le compte.<br/><br/>" +
              "Cette vérification mérite d'être installée comme un réflexe permanent du chapitre : " +
              "elle rattrape aussi l'erreur du taux réciproque, plus loin dans l'année.",
      /* Vérifié contre le tirage réel (2026-09-14, ordre de DATA_FILES) :
         l'exercice 5 donne une valeur APRÈS une hausse de 20 % et demande celle
         d'avant, et son corrigé calcule explicitement ce que donnerait la
         soustraction fautive pour montrer qu'elle ne convient pas. L'indication
         nomme le piège sans donner la réponse. C'est la tâche « initiale »,
         ajoutée le 2026-09-14. Seul renvoi des quatre que la correction de
         l'ordre des chapitres n'a pas déplacé. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Croire qu'une baisse du même taux annule une hausse",
      eleve: "Après une hausse de $25\\%$, l'élève affirme qu'une baisse de $25\\%$ ramène au prix de " +
             "départ, au lieu d'une baisse de $20\\%$.",
      cause: "C'est la même racine que l'erreur précédente, mais elle résiste plus longtemps parce " +
             "qu'elle est renforcée par une intuition de symétrie : ce qui monte de tant devrait " +
             "redescendre de tant. L'élève ne raisonne pas sur des bases, il raisonne sur un " +
             "aller-retour, et l'aller-retour est une image juste pour les distances et fausse pour " +
             "les pourcentages.",
      remede: "Attaquer l'image plutôt que le calcul. Faire remarquer que la hausse s'applique au " +
              "petit prix et la baisse au grand : la baisse a « plus de matière » sur laquelle " +
              "s'appliquer, donc elle retire davantage. Un élève qui a compris cela prévoit le sens " +
              "de l'écart avant même de calculer, ce qui est le vrai objectif.<br/><br/>" +
              "Introduire ensuite le taux réciproque comme la réponse à la question « par quoi " +
              "multiplier pour revenir à $1$ ? ». Formulée ainsi, elle appelle l'inverse, et " +
              "l'inverse de $1{,}25$ se calcule sans nouvelle formule.<br/><br/>" +
              "Signaler enfin le cas des petits taux, qui explique pourquoi l'erreur survit si " +
              "bien : pour $2\\%$, la réciproque vaut $1{,}96\\%$, et l'approximation est " +
              "excellente. L'élève a donc souvent eu raison par accident, et il faut le lui dire " +
              "plutôt que de lui laisser croire qu'il se trompait depuis toujours.",
      /* Vérifié contre le tirage réel (2026-09-14, ordre de DATA_FILES) :
         l'exercice 6 demande justement de quel pourcentage il faut baisser
         après une hausse de 20 % pour revenir au départ, et son corrigé montre
         explicitement que la baisse du même taux ne convient pas, en calculant
         le coefficient global qu'elle donnerait. C'est la tâche « reciproque »,
         ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Diviser par la valeur d'arrivée pour calculer un taux",
      eleve: "Pour un loyer passant de $800$ € à $856$ €, l'élève calcule " +
             "$\\dfrac{856 - 800}{856}$ et annonce $6{,}5\\%$ au lieu de $7\\%$.",
      cause: "La formule a été retenue comme « la différence divisée par une des deux valeurs », " +
             "sans que le rôle du dénominateur soit compris. Or l'écart entre les deux résultats est " +
             "faible — ici un demi-point — ce qui est le pire des cas : l'erreur ne produit jamais " +
             "de résultat absurde, elle ne se signale donc jamais d'elle-même, et elle survit " +
             "plusieurs années.",
      remede: "Faire reformuler la question en français avant tout calcul : « de combien a augmenté " +
              "le loyer, PAR RAPPORT À quoi ? ». La réponse « par rapport à ce qu'il était avant » " +
              "désigne le dénominateur sans ambiguïté, et c'est l'élève qui la produit.<br/><br/>" +
              "Utiliser ensuite un exemple où l'erreur devient visible, parce que les deux valeurs " +
              "sont très éloignées : un prix qui passe de $10$ € à $30$ € a augmenté de $200\\%$, " +
              "et certainement pas de $67\\%$. Un doublement, un triplement, l'élève sait les " +
              "reconnaître — et c'est là que la mauvaise formule devient franchement fausse au lieu " +
              "d'être légèrement décalée.<br/><br/>" +
              "Fixer enfin une formulation courte à répéter : « on divise toujours par ce qu'on " +
              "avait au départ ».",
      /* Vérifié contre le tirage réel (2026-09-14, ordre de DATA_FILES) :
         l'exercice 2 donne deux valeurs (21 000 puis 22 680 habitants) et
         demande le taux d'évolution, et son corrigé insiste dans sa première
         ligne sur le fait que le dénominateur est toujours la valeur de départ.
         C'est la tâche « taux », ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions. Référentiel des MATHÉMATIQUES uniquement : chercher,
     modéliser, représenter, raisonner, calculer, communiquer.

     Q1 appliquer une hausse de 12 % à un prix : application directe du
        coefficient multiplicateur, donc « calculer ».
     Q2 retrouver un prix initial après une baisse : l'élève doit d'abord
        décider quelle opération défait la baisse, alors que l'énoncé ne le lui
        dit pas et que l'intuition propose la mauvaise. C'est « raisonner ».
     Q3 coefficient multiplicateur global de deux évolutions : application de
        la règle du produit, donc « calculer ».
     Q4 taux d'évolution entre deux loyers : application de la formule, donc
        « calculer ».
     Q5 répondre à un commerçant qui affirme que ses prix sont revenus au
        niveau de départ : l'élève doit choisir une explication destinée à
        convaincre quelqu'un d'autre, et non produire un résultat. C'est
        « communiquer ».

     QUESTION 5 RÉÉCRITE le 2026-09-14, et c'est de la rédaction, pas un
     changement d'étiquette. Elle demandait le taux global de deux hausses de
     10 %, c'est-à-dire exactement le même geste que la question 3 : le devoir
     évaluait deux fois la même chose, et ses cinq questions relevaient toutes
     de « calculer ». La nouvelle question porte sur la même notion, mais elle
     demande d'expliquer un raisonnement faux plutôt que d'exécuter un calcul.

     « Chercher », « modéliser » et « représenter » ne sont pas déclarées ici :
     aucune des cinq questions ne demande d'explorer une piste sans méthode
     donnée, de traduire une situation nouvelle en modèle, ni de lire une
     figure. L'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["chercher", "raisonner", "calculer", "calculer", "communiquer"]
  }
};
