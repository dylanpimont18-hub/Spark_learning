/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-denombrement.prof.js
   Fiche professeur du chapitre « Dénombrement et combinatoire » (terminale),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau.

   CE CHAPITRE NE PORTE AUCUN SCHÉMA SECONDAIRE, et c'est un choix assumé.
   Le cahier des charges est explicite : « une figure par malentendu, pas une
   figure par formule », et « on n'ajoute pas de figure pour faire du
   chiffre ». Les malentendus de ce chapitre sont de nature logique — l'ordre
   compte-t-il, peut-on répéter — et non géométrique : ils se traitent par
   l'énumération exhaustive d'un petit cas, pas par un dessin. Le brief du
   niveau le classait d'ailleurs parmi les chapitres les moins demandeurs en
   figures. Pour la même raison, la banque ne porte aucune figure d'exercice.

   Écrit le 2026-09-14. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-denombrement"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7).

     Ce chapitre n'a AUCUN prérequis parmi les onze autres, et c'est un
     résultat mesuré, pas un oubli. Le dénombrement ne demande ni limite, ni
     dérivée, ni intégrale, ni géométrie : il se suffit à lui-même, et c'est
     précisément ce qui en fait un bon chapitre de début d'année.

     Ce qu'il suppose vient d'avant la terminale : savoir multiplier, et
     avoir déjà rencontré un arbre de dénombrement en probabilités. Rien de
     plus. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 1.

     Le LIVRE le range en neuvième position, avec les probabilités, mais
     c'est un rangement par domaine et non un conseil d'enseignement.

     Trois raisons d'ouvrir l'année par lui. D'abord il est totalement
     INDÉPENDANT du reste du niveau, donc il ne bloque rien et rien ne le
     bloque. Ensuite il ne suppose aucune technique de première, ce qui
     permet de démarrer sans attendre les révisions de rentrée — un atout
     rare. Enfin il PRÉPARE les lois continues (rang 11), qui reposent sur
     une aisance combinatoire acquise longtemps avant.

     C'est aussi un chapitre où les élèves faibles peuvent réussir dès la
     première semaine, ce qui n'est pas indifférent en début de terminale. */
  rangConseille: 1,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Combinatoire et
  // dénombrement ».
  attendus: [
    "Dénombrer les listes, avec ou sans répétition, d'éléments d'un ensemble fini",
    "Reconnaître une situation de permutation et utiliser la factorielle",
    "Calculer un nombre de combinaisons à l'aide du coefficient binomial",
    "Utiliser la relation de symétrie du coefficient binomial et la relation de Pascal",
    "Passer par l'événement contraire pour dénombrer les situations du type « au moins un »"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Les listes, permutations, combinaisons et coefficients binomiaux sont au programme de " +
        "terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la notation <strong>$A_n^k$</strong> pour les arrangements, employée dans le cours " +
        "et dans la banque. Le programme de 2019 ne l'exige plus : il parle de « listes sans " +
        "répétition » et les fait compter directement par le produit $n(n-1)\\cdots$. La notation " +
        "reste utile et figure dans la plupart des manuels, mais on peut légitimement s'en passer " +
        "et n'exiger que le produit — auquel cas il faut le dire clairement aux élèves, qui la " +
        "rencontreront ailleurs.<br/><br/>" +
        "Ensuite la <strong>relation de Pascal</strong> et le triangle qui en découle, mentionnés " +
        "dans les définitions du cours mais non travaillés par les exercices. Ils sont au " +
        "programme, notamment pour établir la formule du binôme : ils demandent une séance " +
        "distincte, et la banque n'en propose pas de support.<br/><br/>" +
        "Enfin la <strong>formule du binôme de Newton</strong>, présente dans les définitions. " +
        "Elle est au programme, mais son emploi effectif relève plutôt du chapitre de probabilités " +
        "(loi binomiale) que de celui-ci. Aucun exercice de la banque ne la suppose, et il est " +
        "raisonnable de la reporter.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     Renvois vérifiés contre le tirage réel de la graine du livre le
     2026-09-14, et protégés par le test de mots-clés
     (scripts/manuel/tests/prof-tle.test.js). */
  erreurs: [
    {
      titre: "Diviser par k! quand l'ordre compte",
      eleve: "Pour compter les podiums possibles parmi $8$ coureurs, l'élève écrit " +
             "$\\binom{8}{3} = 56$ au lieu de $A_8^3 = 336$.",
      cause: "C'est L'ERREUR du chapitre, et elle est structurelle : la combinaison est la formule " +
             "la plus enseignée, la plus reconnaissable, et celle que l'élève associe au mot " +
             "« choisir ». Or « choisir trois coureurs » et « choisir un podium » commencent tous " +
             "les deux par ce mot.<br/><br/>" +
             "Le français n'aide pas : rien dans la langue courante ne distingue un choix ordonné " +
             "d'un choix non ordonné. L'élève ne dispose donc d'aucun indice linguistique, et il " +
             "applique la formule dont il se souvient le mieux.",
      remede: "Interdire provisoirement toute formule, et faire ÉNUMÉRER un petit cas à la main. " +
              "Avec trois coureurs seulement — Alice, Bob, Chloé — et deux places sur le podium : " +
              "combien de podiums ? On les écrit tous, il y en a six. Combien de duos ? Trois. Le " +
              "rapport est $2$, c'est-à-dire $2!$.<br/><br/>" +
              "L'énumération fait ce qu'aucune formule ne fait : elle montre que le même groupe " +
              "apparaît plusieurs fois quand l'ordre compte, et exactement $k!$ fois. La " +
              "division par $k!$ cesse alors d'être un détail de formule pour devenir une " +
              "correction de doublons.<br/><br/>" +
              "Fixer ensuite la question préalable, à poser AVANT tout calcul et à écrire sur la " +
              "copie : <strong>est-ce que changer l'ordre change le résultat ?</strong> Si oui, " +
              "arrangement ; si non, combinaison. Une seule question, deux réponses, et aucune " +
              "formule à reconnaître.<br/><br/>" +
              "Faire remarquer enfin qu'une combinaison est toujours PLUS PETITE que l'arrangement " +
              "correspondant : un résultat plus grand que prévu signale qu'on a compté l'ordre " +
              "sans le vouloir, et inversement.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-14) :
         l'exercice 1 demande les lauréats « du premier au dernier rang » et
         précise « Ici l'ordre compte », tandis que l'exercice 2 pose la même
         question de choix en précisant « sans tenir compte de l'ordre ». Les
         deux tâches se répondent dans la banque, ce qui est le dispositif de
         remédiation lui-même. La tâche « arrangement » a été créée ce jour :
         la banque d'origine ne contenait QUE des combinaisons, et ne pouvait
         donc pas entraîner la seule décision du chapitre. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre « sans répétition » et « avec répétition »",
      eleve: "Pour un code de $4$ chiffres où les répétitions sont autorisées, l'élève écrit " +
             "$10 \\times 9 \\times 8 \\times 7 = 5040$ au lieu de $10^4 = 10\\,000$.",
      cause: "Le produit décroissant $n(n-1)(n-2)\\cdots$ est le geste appris en premier, et il " +
             "devient le geste par défaut dès qu'on compte des positions successives. L'élève " +
             "l'applique sans revenir à la question de savoir si l'on retire quelque chose entre " +
             "deux choix.<br/><br/>" +
             "Les énoncés entretiennent la confusion : un code PIN et un podium se décrivent dans " +
             "les mêmes termes — des positions à remplir — alors que l'un autorise les répétitions " +
             "et l'autre non.",
      remede: "Faire reformuler la situation avec une image matérielle : tire-t-on dans une urne " +
              "<strong>avec</strong> ou <strong>sans</strong> remise ? Avec remise, le nombre de " +
              "possibilités ne bouge pas d'un choix à l'autre, donc c'est une <strong>puissance</strong>. " +
              "Sans remise, il diminue de $1$ à chaque fois, donc c'est un <strong>produit " +
              "décroissant</strong>.<br/><br/>" +
              "Faire écrire le produit en toutes lettres avant de calculer : " +
              "$10 \\times 10 \\times 10 \\times 10$ d'un côté, $10 \\times 9 \\times 8 \\times 7$ " +
              "de l'autre. Écrite ainsi, la différence saute aux yeux, alors que $10^4$ et " +
              "$A_{10}^4$ se ressemblent.<br/><br/>" +
              "Terminer par une comparaison de tailles : avec répétition, on obtient toujours " +
              "davantage de possibilités, puisqu'on s'interdit moins de choses. Un résultat plus " +
              "petit que prévu signale donc qu'on a interdit des répétitions autorisées.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 12 pose un
         code où « les répétitions sont autorisées », tandis que l'exercice 3
         pose un code de chiffres « tous différents ». Les deux tâches sont
         volontairement habillées du même décor (un code) pour que seule la
         contrainte les distingue — c'est ce qui en fait un dispositif de
         remédiation, et non deux exercices indépendants. */
      exercice: { type: "exercice", n: 12 }
    },
    {
      titre: "Additionner les cas au lieu de passer par le contraire",
      eleve: "Pour « au moins une pièce défectueuse » parmi $2$ tirées, l'élève additionne " +
             "laborieusement les cas « exactement une » et « exactement deux », se trompe dans l'un " +
             "des deux, et n'a aucun moyen de s'en apercevoir.",
      cause: "L'addition des cas favorables est la méthode enseignée, et elle n'est pas fausse : " +
             "elle donne le bon résultat quand elle est menée correctement. Le problème est " +
             "qu'elle demande d'énumérer sans oubli ni doublon, ce qui devient impraticable dès " +
             "trois ou quatre cas.<br/><br/>" +
             "L'élève ne voit pas que « au moins un » a un contraire d'une seule pièce — " +
             "« aucun » — parce que rien dans l'énoncé ne l'invite à retourner la question.",
      remede: "Faire compter les deux façons sur un cas volontairement petit, et chronométrer. " +
              "Avec $4$ pièces conformes et $5$ défectueuses, tirer $2$ : par addition, deux " +
              "sous-cas à calculer ; par le contraire, une soustraction. Le gain se voit " +
              "immédiatement, et il se voit mieux encore si l'on refait l'exercice avec $3$ pièces " +
              "tirées.<br/><br/>" +
              "Installer ensuite le repère de vocabulaire, qui est ce que l'élève retiendra " +
              "vraiment : <strong>dès que tu lis « au moins », pense « total moins aucun »</strong>. " +
              "Les mots déclenchent la méthode, sans qu'il y ait à reconnaître une structure.<br/><br/>" +
              "Faire vérifier enfin que le contraire est bien le bon : le contraire de « au moins " +
              "une » n'est pas « au plus une », c'est « aucune ». Cette confusion-là coûte cher, " +
              "et elle se corrige en faisant écrire les deux ensembles côte à côte une seule fois.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 demande
         exactement un dénombrement « au moins une », et son corrigé sépare les
         trois étapes — total, cas contraires, soustraction. L'indication
         explique pourquoi la voie directe est plus longue, sans donner le
         résultat. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Recalculer un coefficient binomial déjà connu",
      eleve: "Sachant que $\\binom{14}{4} = 1001$, l'élève recalcule intégralement " +
             "$\\binom{14}{10}$ — quatre lignes de produits et une factorielle de $10$ — au lieu " +
             "de répondre $1001$ immédiatement.",
      cause: "L'élève ne fait rien de faux : il obtient le bon résultat, plus lentement. C'est " +
             "pourquoi l'erreur passe inaperçue en correction, et pourquoi elle persiste jusqu'au " +
             "jour de l'épreuve, où elle coûte du temps.<br/><br/>" +
             "La symétrie $\\binom{n}{k} = \\binom{n}{n-k}$ est enseignée comme une propriété " +
             "algébrique à vérifier, et non comme un raccourci à employer. Rien n'a jamais mis " +
             "l'élève en situation d'en avoir besoin.",
      remede: "Ne pas démontrer la symétrie par le calcul sur les factorielles, qui la rend vraie " +
              "sans la rendre évidente. La faire découvrir par le SENS : choisir $4$ personnes " +
              "parmi $14$, c'est exactement décider lesquelles des $10$ autres on laisse de côté. " +
              "À chaque choix correspond un rejet, et un seul.<br/><br/>" +
              "Faire formuler cette phrase par les élèves, puis leur demander de prédire " +
              "$\\binom{20}{17}$ sachant $\\binom{20}{3} = 1140$. Ceux qui ont compris répondent " +
              "en deux secondes ; les autres se lancent dans le calcul, et l'écart de temps est " +
              "la démonstration.<br/><br/>" +
              "Ajouter le réflexe pratique : quand $k$ dépasse la moitié de $n$, on passe " +
              "systématiquement à $n - k$ avant de calculer. C'est toujours plus court, et cela " +
              "évite les grandes factorielles où les erreurs s'accumulent.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 11 donne
         $\binom{14}{4} = 1001$ et demande $\binom{14}{10}$ en précisant
         « sans refaire le calcul ». La consigne interdit explicitement la voie
         longue, ce qui force le raisonnement au lieu de le suggérer. Tâche
         créée ce jour. */
      exercice: { type: "exercice", n: 11 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions.

     Q1 calculer $\binom{8}{3}$ : application directe de la formule, donc
        « calculer ».
     Q2 codes de $4$ chiffres distincts parmi dix : l'élève doit d'abord
        traduire une situation concrète — un code, des chiffres qui ne se
        répètent pas — en objet mathématique, et décider que c'est un
        arrangement avant tout calcul. C'est « modéliser ».
     Q3 valeur de $\binom{n}{0}$ pour tout $n$ : aucun nombre particulier
        n'est donné, et la réponse se conclut du SENS (il n'y a qu'une seule
        façon de ne rien choisir) ou de la convention $0! = 1$. C'est
        « raisonner ».
     Q4 répartir $12$ élèves en un groupe de $5$ et un groupe de $7$ :
        l'élève doit voir que le second groupe est entièrement déterminé par
        le premier, donc qu'il n'y a rien à multiplier. C'est « calculer »,
        mais au prix d'une décision — le calcul lui-même reste le cœur de la
        question.
     Q5 juger la démarche d'un camarade dont le calcul de $\binom{8}{3}$ est
        exact mais dont l'outil est mal choisi, et nommer ce qui cloche.
        Aucun nombre à produire : l'élève évalue une explication et en
        formule une autre. C'est « communiquer ».
        CETTE QUESTION A ÉTÉ RÉÉCRITE dans js/data/lycee-tle/tle-denombrement.js
        le 2026-09-14 : elle demandait auparavant de reconnaître l'arrangement
        parmi quatre situations, ce qui faisait doublon avec Q3 et laissait
        « communiquer » absente des cinq questions. L'étiquette suit
        l'énoncé, jamais l'inverse.

     « Chercher » et « représenter » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni
     de lire ou produire une représentation. Les deux compétences sont
     portées par d'autres chapitres du niveau. */
  competences: {
    evaluation: ["calculer", "modéliser", "raisonner", "calculer", "communiquer"]
  }
};
