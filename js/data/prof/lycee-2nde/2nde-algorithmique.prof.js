/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-algorithmique.prof.js
   Fiche professeur du chapitre « Algorithmique et programmation (Python) »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE TRANSVERSAL, et c'est la chose la plus importante que cette
   fiche ait à dire : le programme officiel demande explicitement que
   l'algorithmique soit travaillée EN CONTEXTE, dans les autres chapitres,
   et non traitée comme une séquence isolée. Un enseignant qui réserve trois
   semaines au « chapitre Python » respecte le contenu mais manque
   l'intention, et ses élèves ne réinvestissent rien.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-algorithmique"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 5 (équations et inéquations) : les conditions des boucles `while` et
     des tests `if` sont des inégalités, et l'élève doit savoir les évaluer
     sans hésiter sur le sens.

     ch. 6 (généralités sur les fonctions) : une fonction Python et une
     fonction mathématique partagent le même mot et la même idée — une
     entrée, une sortie. Faire le rapprochement explicitement éclaire les
     deux notions ; ne pas le faire laisse l'élève avec deux homonymes.

     Ce sont les seuls prérequis réels : le chapitre est volontairement peu
     dépendant, ce qui est cohérent avec son usage transversal. */
  prerequis: [5, 6],

  /* Rang conseillé (2026-09-13) : rang 14.

     Ce rang est une CONVENTION, et il faut le lire comme telle. Le chapitre
     n'est pas destiné à être traité en fin d'année d'un seul tenant : il est
     rangé en dernier parce qu'il doit être FILÉ tout au long de l'année, à
     raison de séances courtes rattachées aux autres chapitres.

     Le placer au rang 14 signifie donc « à la fin, on aura tout vu », et non
     « à traiter en juin ». La note ci-dessous le dit à l'enseignant, car
     c'est le contresens le plus coûteux qu'on puisse faire sur ce chapitre.

     Le LIVRE le range aussi en chapitre 14, pour la même raison. */
  rangConseille: 14,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Algorithmique et programmation ».
  attendus: [
    "Écrire et exécuter une boucle bornée (for) et une boucle non bornée (while)",
    "Écrire une instruction conditionnelle et en évaluer la condition",
    "Prévoir le résultat d'un programme en l'exécutant pas à pas",
    "Utiliser une variable comme accumulateur ou comme compteur",
    "Écrire une fonction Python et l'appeler avec des arguments"
  ],

  note: "Le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur aucun " +
        "point.<br/><br/>" +
        "<strong>Une recommandation avant toute chose, parce qu'elle change l'organisation " +
        "de l'année : ce chapitre n'est pas fait pour être traité d'un bloc.</strong> Le " +
        "programme officiel demande que l'algorithmique soit travaillée <strong>en " +
        "contexte</strong>, à l'intérieur des autres chapitres, et non comme une séquence " +
        "séparée. Un enseignant qui lui réserve trois semaines en fin d'année respecte le " +
        "contenu mais manque l'intention : les élèves font du Python pendant trois semaines, " +
        "puis n'y reviennent plus.<br/><br/>" +
        "<strong>Les occasions naturelles sont nombreuses</strong>, et les nommer aide à " +
        "construire la progression : simuler mille lancers de dé au chapitre des " +
        "probabilités, où l'argument contre le sophisme du joueur devient imparable ; " +
        "calculer moyenne et écart-type d'une grande série en statistiques, où le calcul à " +
        "la main est impraticable ; tabuler une fonction pour en deviner les variations ; " +
        "tester si trois points sont alignés en géométrie repérée. Dans chacun de ces cas, " +
        "le programme fait quelque chose qu'on ne saurait pas faire autrement, ce qui est la " +
        "meilleure justification possible.<br/><br/>" +
        "<strong>Sur la part de reprise.</strong> L'élève a programmé au collège, le plus " +
        "souvent avec Scratch. Le passage à Python est un changement de forme plus que de " +
        "fond : les boucles et les tests existaient déjà. Ce qui est réellement neuf, c'est " +
        "la syntaxe écrite — l'indentation qui porte du sens, les deux-points — et le fait " +
        "qu'une erreur d'écriture empêche l'exécution. Beaucoup d'élèves bloquent là, sur un " +
        "obstacle qui n'est pas mathématique.<br/><br/>" +
        "<strong>Un point de vigilance sur l'évaluation.</strong> Ce devoir demande " +
        "d'exécuter du code de tête, sans machine. C'est légitime et formateur, mais ce " +
        "n'est qu'une moitié du programme : écrire un programme qui résout un problème est " +
        "un attendu au moins aussi important, et il ne peut s'évaluer que devant un clavier. " +
        "Prévoir une évaluation pratique en complément.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13), après élargissement de la banque.

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire que range(n) va de 1 à n",
      eleve: "Pour $\\texttt{for i in range(5)}$, l'élève annonce que $\\texttt{i}$ prend les " +
             "valeurs $1, 2, 3, 4, 5$, alors qu'elle prend $0, 1, 2, 3, 4$.",
      cause: "C'est l'erreur la plus fréquente du chapitre, et elle a deux causes qui se " +
             "renforcent. D'abord, compter à partir de zéro est contraire à toute " +
             "l'expérience de l'élève, scolaire comme quotidienne. Ensuite, la boucle tourne " +
             "bien $5$ fois : le NOMBRE de passages est correct, seules les VALEURS sont " +
             "décalées.<br/><br/>" +
             "Cette demi-justesse est ce qui rend l'erreur tenace. Tant que $\\texttt{i}$ ne " +
             "sert qu'à compter les tours, tout fonctionne ; l'erreur n'apparaît que le jour " +
             "où $\\texttt{i}$ est utilisée dans un calcul, et l'élève ne comprend alors pas " +
             "d'où vient le décalage.",
      remede: "Faire afficher les valeurs plutôt que les annoncer : deux lignes de Python " +
              "($\\texttt{for i in range(5): print(i)}$) affichent $0$ à $4$, et la machine " +
              "tranche sans que l'enseignant ait à argumenter.<br/><br/>" +
              "Énoncer ensuite la règle sous sa forme utile, qui couvre les deux écritures : " +
              "$\\texttt{range}$ <strong>commence à la borne de gauche et s'arrête avant " +
              "celle de droite</strong>. Avec un seul argument, la borne de gauche est $0$. " +
              "Une seule règle au lieu de deux cas à mémoriser.<br/><br/>" +
              "Faire distinguer explicitement les deux questions, car c'est là qu'est la " +
              "confusion : « combien de tours ? » et « quelles valeurs ? » n'ont pas la même " +
              "réponse. Pour $\\texttt{range(5)}$, c'est cinq tours, et les valeurs vont de " +
              "$0$ à $4$.<br/><br/>" +
              "Exiger enfin, en cas de doute, d'écrire la liste complète en marge. Elle " +
              "coûte cinq secondes et supprime l'erreur.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 porte
         exactement sur les valeurs prises par range, et demande selon les
         tirages la première, la dernière ou le nombre de valeurs. Les DEUX
         tâches sur range ont été ajoutées ce jour : l'évaluation consacrait
         deux questions sur cinq (Q1 et Q4) à ce point, et la banque ne le
         travaillait par aucun exercice. L'exercice 7 est du même type. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Ne pas exécuter le code pas à pas et deviner le résultat",
      eleve: "Devant une boucle qui accumule, l'élève regarde le code, reconnaît vaguement " +
             "une multiplication et annonce un résultat sans jamais suivre les valeurs " +
             "successives de la variable.",
      cause: "L'élève lit le programme comme une formule mathématique — un énoncé statique " +
             "qui décrit un résultat — alors qu'un programme est une SUITE D'ACTIONS dans " +
             "le temps. Rien dans l'apparence du code ne signale cette différence, et " +
             "l'écriture $\\texttt{p = p * 2}$ ressemble d'ailleurs à une équation, qui " +
             "serait fausse en mathématiques.<br/><br/>" +
             "Le geste qui lui manque n'est donc pas un calcul : c'est l'idée qu'une variable " +
             "CHANGE de valeur au fil de l'exécution.",
      remede: "Imposer le <strong>tableau de suivi</strong>, une colonne par variable, une " +
              "ligne par passage de boucle. C'est le seul outil qui rende l'exécution " +
              "visible, et il doit devenir un réflexe avant d'être une consigne.<br/><br/>" +
              "Traiter séparément la ligne $\\texttt{p = p * 2}$, qui est un obstacle en " +
              "soi : ce n'est pas une égalité, c'est une AFFECTATION. On calcule le membre de " +
              "droite avec l'ancienne valeur, puis on range le résultat dans la variable. La " +
              "lire « $\\texttt{p}$ reçoit $\\texttt{p} \\times 2$ » plutôt que " +
              "« $\\texttt{p}$ égale » lève l'ambiguïté durablement.<br/><br/>" +
              "Faire vérifier ensuite sur machine, une fois le tableau rempli. L'élève " +
              "confronte sa prévision au résultat réel, ce qui est exactement la démarche " +
              "attendue et ce qui donne au tableau son utilité.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 demande la
         valeur finale d'un produit accumulé et son énoncé exige explicitement
         d'exécuter le code « à la main » (pas à pas) ; son corrigé imprime
         un passage par ligne, c'est-à-dire le tableau de suivi que le remède
         recommande. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que les deux branches d'un test s'exécutent",
      eleve: "Devant un $\\texttt{if ... else ...}$, l'élève annonce la valeur de la dernière " +
             "ligne écrite, ou additionne les effets des deux branches.",
      cause: "L'élève lit le code de haut en bas, comme un texte, et considère que tout ce " +
             "qui est écrit est exécuté. C'est d'ailleurs vrai partout ailleurs dans un " +
             "programme : le test est la première construction où une partie du code écrit " +
             "ne s'exécute pas.<br/><br/>" +
             "Il ne lui manque donc pas la syntaxe du $\\texttt{if}$, qu'il reconnaît : il " +
             "lui manque l'idée qu'un programme peut contenir des lignes qui, ce jour-là, " +
             "ne serviront pas.",
      remede: "Faire évaluer la condition SÉPARÉMENT, à voix haute, avant de regarder les " +
              "branches : « $18 > 12$, est-ce vrai ou faux ? ». La réponse décide seule de " +
              "la suite, et l'élève n'a plus à choisir.<br/><br/>" +
              "Faire ensuite barrer physiquement la branche non exécutée sur la copie. Le " +
              "geste rend visible ce qui, sinon, reste abstrait, et il évite que l'élève " +
              "revienne y chercher un résultat.<br/><br/>" +
              "Faire varier la donnée d'entrée en gardant le même code, et faire constater " +
              "que le résultat change alors que rien n'a été réécrit. C'est la définition " +
              "même d'un programme qui s'adapte, et c'est ce qui en fait l'intérêt.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est un
         if/else dont une seule branche s'exécute, et son corrigé le dit
         explicitement (« l'autre branche n'est JAMAIS exécutée : ce n'est pas
         la dernière ligne écrite qui gagne »). Tâche ajoutée ce jour : le
         cours traitait le test conditionnel, la banque ne le travaillait par
         aucun exercice. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Écrire une boucle while qui ne s'arrête jamais",
      eleve: "L'élève écrit une boucle $\\texttt{while}$ dont la condition reste " +
             "indéfiniment vraie, parce qu'il a oublié de modifier la variable testée à " +
             "l'intérieur de la boucle.",
      cause: "Dans une boucle $\\texttt{for}$, l'avancement est automatique : le compteur se " +
             "met à jour tout seul, sans que l'élève ait à y penser. Il transporte cette " +
             "habitude au $\\texttt{while}$, où RIEN n'est automatique et où c'est le " +
             "programmeur qui doit faire progresser la condition vers sa fin.<br/><br/>" +
             "L'erreur n'est donc pas une étourderie : c'est une propriété du " +
             "$\\texttt{for}$ qu'il croit générale.",
      remede: "Poser une question systématique avant d'écrire la moindre boucle " +
              "$\\texttt{while}$ : « qu'est-ce qui va faire que la condition finira par " +
              "devenir fausse ? ». Si l'élève ne sait pas répondre, la boucle ne s'arrêtera " +
              "pas, et il le sait avant même de l'exécuter.<br/><br/>" +
              "Faire remplir un tableau de suivi sur trois ou quatre passages et faire " +
              "observer la variable testée. Si elle ne bouge pas, rien ne changera jamais — " +
              "le constat est immédiat.<br/><br/>" +
              "Provoquer enfin une vraie boucle infinie en classe, une fois, et montrer " +
              "comment l'interrompre. C'est rassurant, cela dédramatise une panne que les " +
              "élèves redoutent, et cela ancre le souvenir mieux qu'un avertissement.<br/><br/>" +
              "Donner enfin le critère de choix entre les deux boucles, qui est souvent " +
              "absent : on utilise $\\texttt{for}$ quand on sait à l'avance combien de fois " +
              "répéter, et $\\texttt{while}$ quand on ne le sait pas et qu'on attend une " +
              "condition.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est une
         boucle while dont la variable testée est divisée à chaque passage,
         et son corrigé imprime les valeurs successives de n jusqu'à la
         sortie. L'élève y voit la mécanique d'arrêt — la variable décroît
         donc la condition finit par devenir fausse — qui est exactement ce
         qui manque dans une boucle infinie. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 que produit range(2, 7) : l'élève doit se représenter la suite des
        valeurs engendrées, sans exécuter aucun calcul. « représenter ».
     Q2 valeur finale d'une somme accumulée : exécution pas à pas.
        « calculer ».
     Q3 RÉÉCRITE le 2026-09-13 : l'ancienne demandait la valeur finale
        après exécution, exactement comme la Q2. La nouvelle annonce que le
        programme calcule $3 \times 2^k$ et demande d'EXPLIQUER ce que
        représente $k$ avant de donner la valeur. L'élève doit formuler le
        rôle de la boucle, pas seulement la dérouler. « communiquer ». La
        réponse reste $48$.
     Q4 valeurs prises par i dans range(5) : même nature que Q1 — se
        représenter ce que la boucle engendre. « représenter ».
     Q5 nombre de tours d'une boucle while avec division entière : la boucle
        n'a pas de nombre de tours écrit, il faut suivre la variable jusqu'à
        ce que la condition tombe. L'élève doit conclure d'un mécanisme
        d'arrêt à un compte. « raisonner ».

     « Chercher », « modéliser » et « communiquer » ne sont PAS déclarées, et
     c'est révélateur du devoir : il évalue uniquement la LECTURE de
     programmes, jamais leur ÉCRITURE. Écrire un programme pour résoudre un
     problème mobiliserait « modéliser » et « chercher », mais cela ne
     s'évalue pas sur copie — d'où la recommandation d'une évaluation
     pratique complémentaire, faite dans la note ci-dessus. */
  competences: {
    evaluation: ["représenter", "calculer", "communiquer", "représenter", "raisonner"]
  }
};
