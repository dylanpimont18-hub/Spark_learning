/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-variables-aleatoires.prof.js
   Fiche professeur du chapitre « Variables aléatoires et loi binomiale »
   (première), pour l'édition du professeur. JAMAIS chargée par le site :
   seul scripts/manuel/prof.js la lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote 1re-derivation.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-variables-aleatoires"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU. Le chapitre visé doit
     avoir un rang conseillé STRICTEMENT INFÉRIEUR à celui-ci (rang 10).

     ch. 5 (probabilités conditionnelles, rang 9) : c'est le prérequis
     essentiel, et il est immédiat. Une épreuve de Bernoulli répétée suppose
     l'INDÉPENDANCE des répétitions, notion qui est définie et travaillée au
     chapitre précédent. Un élève qui n'a pas compris l'indépendance apprend
     la formule binomiale comme une recette et ne saura jamais dire si elle
     s'applique.

     ch. 3 (information chiffrée, rang 1) : les énoncés donnent les
     probabilités de succès en pourcentages, et l'espérance s'interprète comme
     une moyenne. Le chapitre est aussi le lieu où l'élève a appris qu'une
     proportion ne s'additionne pas naïvement. */
  prerequis: [3, 5],

  /* Rang conseillé (2026-09-14) : rang 10, le dernier.

     C'est le chapitre terminal de l'année, et ce n'est pas un choix de
     commodité : il est le seul qui mobilise réellement un autre chapitre du
     niveau comme outil, et non comme simple culture. L'indépendance vue au
     chapitre 5 y devient une condition d'application vérifiable.

     Il est aussi le point d'appui direct de la terminale, où la loi binomiale
     sert à introduire l'échantillonnage et l'estimation. */
  rangConseille: 10,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Probabilités », sous-partie « Variables
  // aléatoires réelles » et « Modèle de la loi binomiale ».
  attendus: [
    "Définir une variable aléatoire réelle sur un ensemble fini et déterminer sa loi de probabilité",
    "Calculer l'espérance, la variance et l'écart-type d'une variable aléatoire",
    "Reconnaître une situation relevant du schéma de Bernoulli et justifier les trois conditions",
    "Calculer une probabilité du type $P(X = k)$ pour une variable suivant une loi binomiale",
    "Utiliser l'événement contraire pour calculer une probabilité du type $P(X \\geqslant 1)$",
    "Interpréter l'espérance $E(X) = np$ comme un nombre moyen de succès sur un grand nombre de répétitions"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La variable aléatoire, sa loi, son espérance, sa variance, le schéma de Bernoulli et la loi " +
        "binomiale sont tous au programme de première.<br/><br/>" +
        "<strong>Deux points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord le <strong>coefficient binomial</strong>. Le programme de première demande de savoir " +
        "l'utiliser et de le lire dans le triangle de Pascal ou à la calculatrice ; il ne demande pas " +
        "de savoir le calculer par la formule factorielle, qui n'est pas exigible. Le cours de ce " +
        "chapitre l'emploie sans la donner, ce qui est le bon niveau ; en revanche, plusieurs " +
        "corrigés de la banque impriment sa valeur numérique sans dire d'où elle vient. Il faudra " +
        "donc avoir installé la lecture à la calculatrice avant de lancer les exercices, faute de " +
        "quoi l'élève verra un nombre tomber du ciel.<br/><br/>" +
        "Ensuite la <strong>variance</strong>. La formule $V(X) = np(1-p)$ est au programme, mais son " +
        "interprétation l'est beaucoup moins : la variance s'exprime dans le carré de l'unité de " +
        "$X$, ce qui la rend difficile à commenter. C'est l'écart-type $\\sigma$ qui se compare " +
        "à l'espérance, et une des tâches de la banque le demande explicitement pour cette raison. " +
        "On gagnera à ne jamais faire calculer une variance sans faire ensuite calculer l'écart-type " +
        "correspondant.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-14), APRÈS l'élargissement de la banque.

     DEUX RÈGLES ÉDITORIALES respectées sans exception : une remédiation ne
     renvoie jamais vers l'évaluation notée, et un renvoi faux est pire qu'un
     renvoi absent. */
  erreurs: [
    {
      titre: "Oublier le coefficient binomial",
      eleve: "Pour $X \\sim \\mathcal{B}(5\\,;\\,0{,}2)$, l'élève écrit " +
             "$P(X = 2) = 0{,}2^2 \\times 0{,}8^3 \\approx 0{,}020$ au lieu de " +
             "$10 \\times 0{,}2^2 \\times 0{,}8^3 \\approx 0{,}205$.",
      cause: "L'élève calcule très correctement la probabilité d'UNE série précise — deux succès " +
             "puis trois échecs, dans cet ordre. Ce qu'il ne voit pas, c'est que la question ne " +
             "précise aucun ordre, et qu'il existe donc plusieurs séries donnant le même nombre de " +
             "succès. Il ne lui manque pas un facteur dans une formule, il lui manque l'idée qu'il " +
             "faut COMPTER quelque chose.",
      remede: "Ne pas commencer par rappeler la formule : le facteur manquant y est visible, et " +
              "l'élève l'oubliera de nouveau la fois suivante parce qu'il ne sait toujours pas à quoi " +
              "il sert.<br/><br/>" +
              "Faire écrire à la main, sur un cas volontairement petit, toutes les séries possibles : " +
              "avec $n = 4$ et $k = 2$, l'élève en trouve six en quelques minutes, et il constate que " +
              "$\\binom{4}{2} = 6$. Le coefficient cesse alors d'être un facteur de correction pour " +
              "devenir ce qu'il est : un dénombrement.<br/><br/>" +
              "Donner ensuite un réflexe de contrôle utilisable partout : la somme de tous les " +
              "$P(X = k)$ doit faire $1$. Un élève qui oublie systématiquement le coefficient obtient " +
              "une somme très inférieure à $1$, ce qui lui signale l'erreur sans qu'on la lui " +
              "désigne.<br/><br/>" +
              "Le « Découvrir » du chapitre est construit exactement sur cette marche : il part de la " +
              "probabilité d'une série ordonnée, que l'élève sait déjà calculer, et fait apparaître " +
              "le besoin de compter les dispositions.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 demande
         P(X = 1) pour une binomiale, et son corrigé isole le coefficient
         binomial dans une étape à part, en le nommant « le nombre de façons de
         placer les succès parmi les essais ». C'est la tâche « pk », la seule
         de la banque d'origine, conservée et reformulée. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Appliquer la loi binomiale à un tirage sans remise",
      eleve: "Pour un tirage de $3$ boules sans remise dans une urne de $10$, l'élève annonce " +
             "$X \\sim \\mathcal{B}(3\\,;\\,p)$ et applique la formule.",
      cause: "La situation a toutes les apparences du schéma de Bernoulli : un nombre d'essais fixé, " +
             "deux issues par essai, et une question du type « combien de succès ». La seule " +
             "condition qui manque, l'indépendance, ne se voit pas dans l'énoncé — elle se déduit du " +
             "mot « sans remise », que l'élève lit comme un détail de mise en scène et non comme une " +
             "information mathématique.",
      remede: "Exiger, pendant plusieurs séances, que les trois conditions soient écrites et cochées " +
              "une par une AVANT tout calcul : nombre d'essais fixé, essais indépendants, même " +
              "probabilité de succès à chaque essai. Le troisième point est celui qui tombe, et " +
              "l'écrire oblige à le regarder.<br/><br/>" +
              "Faire ensuite calculer explicitement la probabilité de succès au premier puis au " +
              "deuxième tirage, dans un cas sans remise. Les deux nombres diffèrent, et cela suffit à " +
              "faire tomber la troisième condition sans discussion.<br/><br/>" +
              "Signaler enfin le cas limite, qui est celui de la vraie vie : quand la population est " +
              "très grande devant l'échantillon — mille pièces dont on en prélève dix — la " +
              "modification est négligeable et la loi binomiale redevient un bon modèle. C'est une " +
              "approximation assumée, pas une entorse, et le dire évite à l'élève de croire que le " +
              "cours se contredit.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 9 décrit un
         joueur qui tire jusqu'à ce qu'il marque, et demande si la loi est
         binomiale. La réponse est non, et le corrigé nomme la condition qui
         tombe. La tâche « reconnaitre » tire aléatoirement des cas binomiaux et
         des cas qui ne le sont pas, y compris le tirage sans remise : on ne
         peut pas répondre sans vérifier. Elle a été ajoutée le 2026-09-14 —
         la banque d'origine annonçait toujours la loi dans l'énoncé, et ne
         travaillait donc jamais cet attendu du programme. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Sommer terme à terme au lieu de passer au contraire",
      eleve: "Pour $P(X \\geqslant 1)$ avec $n = 8$, l'élève entreprend d'additionner huit " +
             "probabilités, se trompe en route, et rend un résultat faux après vingt minutes.",
      cause: "Ce n'est pas une erreur de raisonnement : sommer les huit cas est parfaitement " +
              "correct, et donnerait la bonne réponse si le calcul allait au bout. Ce qui manque est " +
              "stratégique. L'élève ne s'est jamais demandé s'il existait un chemin plus court, " +
              "parce qu'on ne lui a jamais montré que le choix du chemin faisait partie du travail.",
      remede: "Faire chronométrer les deux méthodes sur le même énoncé, en partageant la classe en " +
              "deux. Le groupe qui passe par l'événement contraire a fini quand l'autre en est au " +
              "troisième terme. L'argument est alors le sien, pas celui du professeur.<br/><br/>" +
              "Installer ensuite le repère de vocabulaire, qui vaut pour toute l'année : dès qu'un " +
              "énoncé contient « au moins un », le premier réflexe est de calculer « aucun ». Le faire " +
              "écrire au tableau et y revenir à chaque occurrence.<br/><br/>" +
              "Attention à un effet de bord fréquent : certains élèves généralisent en croyant que " +
              "l'événement contraire raccourcit toujours le calcul. Faire traiter un cas où il " +
              "n'aide pas — par exemple $P(X = 3)$ — pour que la règle reste attachée à « au moins », " +
              "et non au hasard.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 demande
         P(X >= 1) pour n = 5, et son indication nomme le piège sans donner la
         réponse (« sommer serait très long, l'événement contraire ne demande
         qu'un seul calcul »). C'est la tâche « aumoins », ajoutée le
         2026-09-14 : le geste le plus utile du chapitre était absent de la
         banque d'origine. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Attendre de l'espérance qu'elle soit une valeur possible",
      eleve: "Devant $E(X) = 2{,}4$ pour un nombre de tirs réussis, l'élève corrige de lui-même en " +
             "« $2$ tirs, puisqu'on ne peut pas réussir $2{,}4$ tirs ».",
      cause: "Le mot « espérance » suggère ce qu'on attend, donc ce qui va arriver, donc une issue " +
             "réelle de l'expérience. L'élève applique une exigence de bon sens — un nombre de tirs " +
             "est entier — à un objet qui n'est pas un nombre de tirs mais une MOYENNE sur un grand " +
             "nombre d'expériences. La confusion est la même que pour « $2{,}3$ enfants par " +
             "famille », qu'il accepte pourtant sans difficulté.",
      remede: "Utiliser précisément cette comparaison, qui ne heurte personne : personne n'a jamais " +
              "vu $2{,}3$ enfants, et pourtant la moyenne est juste et utile. L'espérance est de la " +
              "même nature.<br/><br/>" +
              "Faire ensuite simuler, à la calculatrice ou à la main, vingt répétitions de " +
              "l'expérience et calculer la moyenne des résultats obtenus. Elle tombe près de " +
              "$E(X)$ sans jamais valoir exactement une issue : l'élève voit alors ce que la " +
              "grandeur mesure.<br/><br/>" +
              "Bannir enfin la formulation « on s'attend à obtenir $E(X)$ succès », qui entretient " +
              "l'erreur, au profit de « sur un grand nombre de répétitions, on obtiendrait en " +
              "moyenne $E(X)$ succès ». La différence de formulation fait ici tout le travail.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 5 demande
         l'espérance ET ce qu'elle représente concrètement, et son corrigé dit
         explicitement qu'elle n'a pas besoin d'être un nombre entier et qu'elle
         n'est pas la valeur la plus probable. C'est la tâche « esperance »,
         ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions. Référentiel des MATHÉMATIQUES uniquement : chercher,
     modéliser, représenter, raisonner, calculer, communiquer.

     Q1 espérance d'une binomiale donnée : application directe de E(X) = np,
        donc « calculer ».
     Q2 tirage SANS REMISE : l'élève doit confronter la situation aux trois
        conditions du schéma de Bernoulli et trancher. Aucune formule ne donne
        la réponse, et deux des trois conditions sont réunies, ce qui interdit
        de conclure au premier coup d'œil. C'est « raisonner ».
     Q3 traduire un lancer de dé répété en loi binomiale et en donner les
        paramètres : passer du récit à l'écriture mathématique est du
        « modéliser ».
     Q4 calculer P(X = 2) : application de la formule, donc « calculer ».
     Q5 expliquer à un camarade pourquoi une espérance de 2,4 ne s'arrondit
        pas : l'élève doit choisir une explication destinée à être lue et
        comprise par quelqu'un d'autre, sans aucun calcul à produire. C'est
        « communiquer ».

     DEUX QUESTIONS RÉÉCRITES le 2026-09-14, et c'est de la rédaction, pas un
     changement d'étiquette.

     La question 2 demandait la variance juste après l'espérance de la
     question 1, soit une seconde application de formule : QUATRE des cinq
     questions relevaient de « calculer », et « raisonner » comme
     « communiquer » n'étaient évaluées nulle part.

     La question 5 demandait la valeur de $\binom{7}{3}$, et sa correction la
     calculait par la formule factorielle — qui n'est PAS exigible en première,
     comme le dit la rubrique « place dans le programme » de cette même fiche.
     Le devoir noté exigeait donc une notion hors programme, ce qui est le
     défaut le plus grave qu'une évaluation puisse porter. Il est corrigé.

     « Chercher » et « représenter » ne sont pas déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni de
     lire une figure. L'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "modéliser", "calculer", "communiquer"]
  }
};
