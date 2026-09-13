/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-echantillonnage.prof.js
   Fiche professeur du chapitre « Échantillonnage et estimation » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE LE PLUS EXIGEANT DE L'ANNÉE SUR LE PLAN CONCEPTUEL, et
   paradoxalement le plus pauvre en technique : les calculs se réduisent à
   une racine carrée. Toute la difficulté est dans l'interprétation, et
   notamment dans une idée que rien n'a préparée — accepter qu'un résultat
   correct puisse être faux dans cinq pour cent des cas. La fiche insiste
   là-dessus, parce qu'un enseignant qui juge le chapitre facile au vu des
   calculs se trompe de difficulté.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-echantillonnage"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 11 (statistiques) : la fréquence observée sur un échantillon est une
     statistique descriptive, et toute la notion de fluctuation suppose qu'on
     sache ce qu'est une fréquence et une dispersion.

     ch. 12 (probabilités) : l'intervalle de confiance à 95 % n'a de sens que
     si l'on sait ce que signifie « 5 % de risque ». Sans le chapitre des
     probabilités, la phrase est un slogan.

     Ce sont les deux prérequis les plus contraignants de tout l'ouvrage :
     ce chapitre ne peut PAS être traité en avance. */
  prerequis: [11, 12],

  /* Rang conseillé (2026-09-13) : rang 13.

     Après les statistiques (rang 11) et les probabilités (rang 12), dont il
     est la synthèse. C'est le chapitre le plus contraint de l'année quant à
     sa place : il n'a de sens qu'une fois les deux autres traités, et il
     clôt naturellement le bloc « données ».

     Le LIVRE le range aussi en chapitre 13 : les deux ordres coïncident. */
  rangConseille: 13,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Statistiques et probabilités », sous-partie « Échantillonnage ».
  attendus: [
    "Calculer la fréquence observée d'un caractère dans un échantillon",
    "Calculer la marge d'erreur associée à un échantillon de taille n",
    "Déterminer l'intervalle de confiance au niveau de confiance 95 %",
    "Interpréter un intervalle de confiance en termes de risque",
    "Comprendre l'effet de la taille de l'échantillon sur la précision"
  ],

  note: "Le contenu de ce chapitre est au programme de seconde, à une réserve de vocabulaire " +
        "signalée plus bas.<br/><br/>" +
        "<strong>C'est le chapitre le plus difficile de l'année, et sa difficulté n'est pas " +
        "là où les calculs la placent.</strong> Techniquement, tout se réduit à " +
        "$e = \\frac{1}{\\sqrt{n}}$, c'est-à-dire à une racine carrée. Un enseignant qui " +
        "juge le chapitre facile sur ce critère se trompe : la difficulté est entièrement " +
        "conceptuelle, et elle porte sur une idée que rien dans la scolarité n'a préparée — " +
        "<strong>accepter qu'une méthode correcte donne un résultat faux dans cinq pour cent " +
        "des cas</strong>.<br/><br/>" +
        "Jusqu'ici, en mathématiques, un raisonnement juste donnait une réponse juste. Ici, " +
        "on affirme quelque chose en sachant qu'on se trompera parfois, et en mesurant à " +
        "quelle fréquence. C'est un changement de nature, pas de difficulté, et il faut le " +
        "nommer explicitement devant les élèves plutôt que de le laisser passer.<br/><br/>" +
        "<strong>La simulation est ici encore l'outil décisif.</strong> Faire construire " +
        "cent intervalles de confiance à partir de cent échantillons simulés, puis compter " +
        "combien contiennent la vraie proportion — que l'on connaît, puisqu'on a fabriqué " +
        "les données. On en trouve environ quatre-vingt-quinze. Le « 95 % » cesse alors " +
        "d'être un slogan : c'est une propriété de la MÉTHODE, vérifiée sous les yeux des " +
        "élèves.<br/><br/>" +
        "<strong>Deux points à arbitrer avant la séance.</strong><br/><br/>" +
        "D'abord le vocabulaire : le programme de seconde parle d'<strong>intervalle de " +
        "fluctuation</strong> lorsqu'on connaît $p$ et qu'on prévoit $f$, et réserve " +
        "l'<strong>intervalle de confiance</strong> au cas inverse, où l'on estime $p$ à " +
        "partir de $f$. Ce chapitre n'emploie que le second terme. C'est le bon dans le " +
        "contexte des sondages traités ici, mais il faut savoir que la distinction existe et " +
        "qu'elle sera exigée en première.<br/><br/>" +
        "Ensuite la condition de validité : la formule $\\frac{1}{\\sqrt{n}}$ n'est " +
        "légitime que pour $n \\geq 25$ et une proportion pas trop proche de $0$ ou de $1$. " +
        "Le chapitre ne la mentionne pas. On peut s'en passer avec des élèves de seconde, " +
        "mais mieux vaut le savoir que le découvrir sur une question d'élève.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire que l'intervalle de confiance est une garantie certaine",
      eleve: "L'élève affirme que « la vraie proportion est forcément dans l'intervalle », ou " +
             "s'étonne qu'on puisse se tromper alors que le calcul est juste.",
      cause: "Toute la scolarité mathématique a établi qu'un raisonnement correct produit une " +
             "conclusion certaine. L'idée qu'une méthode juste puisse échouer parfois n'a " +
             "aucun précédent, et elle ressemble à un aveu de faiblesse plutôt qu'à un " +
             "résultat.<br/><br/>" +
             "Le mot « confiance » n'aide pas : dans la langue courante, faire confiance " +
             "signifie être sûr. L'élève lit donc « intervalle de confiance » comme " +
             "« intervalle garanti ».",
      remede: "Dire d'emblée ce que le $95$ % qualifie, car c'est le contresens central : il " +
              "ne porte pas sur UN intervalle, il porte sur la <strong>méthode</strong>. Si " +
              "l'on refaisait cent sondages, environ quatre-vingt-quinze des intervalles " +
              "obtenus contiendraient la vraie proportion. Pour celui qu'on a sous les yeux, " +
              "on ne sait pas.<br/><br/>" +
              "Faire la simulation décrite plus haut, qui est le seul argument vraiment " +
              "convaincant : cent échantillons, cent intervalles, on compte les échecs. Les " +
              "quelques intervalles qui ratent la cible sont visibles, et pourtant ils ont " +
              "été calculés correctement.<br/><br/>" +
              "Rattacher enfin à l'actualité, où l'élève rencontrera le problème : les " +
              "sondages annoncent une marge d'erreur, et il arrive qu'un résultat électoral " +
              "en sorte. Cela ne prouve pas que les sondeurs ont mal travaillé — c'est le " +
              "risque annoncé qui s'est réalisé.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 construit
         un intervalle de confiance complet à partir d'une fréquence
         observée, et son corrigé se termine par la phrase d'interprétation
         « on est sûr à 95 % que la vraie proportion est dans cet
         intervalle » — formulation qu'il faut justement faire discuter en
         classe. L'exercice 6 est du même type. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que doubler l'échantillon divise la marge d'erreur par deux",
      eleve: "L'élève annonce qu'en interrogeant deux fois plus de personnes, la marge " +
             "d'erreur est divisée par $2$, alors qu'elle n'est divisée que par " +
             "$\\sqrt{2} \\approx 1{,}41$.",
      cause: "La proportionnalité est le modèle par défaut depuis le collège : si l'on double " +
             "l'effort, on double le résultat. La racine carrée casse cette " +
             "proportionnalité, et rien dans l'énoncé d'un problème de sondage ne signale " +
             "qu'il faudrait s'en méfier.<br/><br/>" +
             "L'élève ne se trompe donc pas de calcul : il applique un modèle qui a toujours " +
             "marché, à une situation où il ne marche pas.",
      remede: "Faire construire un petit tableau de valeurs plutôt qu'énoncer la règle : " +
              "$n = 100$ donne $e = 0{,}1$, $n = 400$ donne $e = 0{,}05$, $n = 900$ donne " +
              "$e \\approx 0{,}033$. L'élève constate qu'il a fallu QUADRUPLER l'échantillon " +
              "pour diviser la marge par deux.<br/><br/>" +
              "Énoncer alors la règle dans le sens où elle sert : pour gagner un facteur $k$ " +
              "sur la précision, il faut multiplier l'échantillon par $k^2$. C'est le sens " +
              "utile, car c'est celui du commanditaire d'un sondage.<br/><br/>" +
              "Donner la conséquence économique, qui frappe et qui se retient : passer de " +
              "$1\\,000$ à $2\\,000$ personnes interrogées double le coût du sondage et " +
              "n'améliore la précision que de trente pour cent environ. C'est la raison pour " +
              "laquelle presque tous les sondages publiés portent sur environ mille " +
              "personnes — l'élève comprend soudain un chiffre qu'il voit partout.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 multiplie
         la taille de l'échantillon et demande par combien la marge d'erreur
         est divisée, et l'exercice 4 pose la question inverse (par combien
         multiplier n pour diviser e par un facteur donné). Les deux sens de
         la relation sont donc travaillés, ce qui est nécessaire ici. Les
         exercices 7 et 8 sont du même type. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre la fréquence observée et la proportion cherchée",
      eleve: "Ayant trouvé $f = 0{,}62$ sur un échantillon, l'élève conclut que « $62$ % de " +
             "la population est satisfaite », sans mentionner d'intervalle.",
      cause: "La fréquence observée est un nombre concret, obtenu par un calcul simple et " +
             "vérifiable ; la proportion réelle est une quantité inconnue, qu'on n'observera " +
             "jamais. L'élève garde naturellement celle qu'il a sous la main.<br/><br/>" +
             "S'y ajoute l'usage courant, qui va dans le même sens : les médias annoncent " +
             "« 62 % des Français pensent que... » sans intervalle, et l'élève n'a jamais " +
             "entendu formuler autrement.",
      remede: "Distinguer les deux objets par leur notation, et s'y tenir toute la séquence : " +
              "$f$ pour ce qu'on a MESURÉ sur l'échantillon, $p$ pour ce qu'on CHERCHE dans " +
              "la population. Deux lettres pour deux choses, systématiquement.<br/><br/>" +
              "Faire constater la fluctuation, qui est l'argument décisif : faire tirer " +
              "plusieurs échantillons dans une même population et faire comparer les " +
              "fréquences obtenues. Elles diffèrent toutes, alors que la population n'a pas " +
              "changé. Aucune d'elles ne peut donc être « la » proportion.<br/><br/>" +
              "Exiger enfin une conclusion rédigée sous forme d'encadrement, jamais d'un " +
              "nombre seul : « la proportion est comprise entre ... et ..., avec un niveau de " +
              "confiance de $95$ % ». Un élève qui a écrit cette phrase dix fois ne conclut " +
              "plus par un pourcentage isolé.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 fait
         calculer la fréquence observée PUIS construire l'intervalle, dans
         cet ordre, ce qui sépare matériellement les deux notions. Son
         corrigé nomme f puis conclut sur la « vraie proportion », en
         distinguant les deux. L'exercice 6 est du même type. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Croire que la taille de la population intervient dans le calcul",
      eleve: "L'élève demande combien d'habitants compte le pays, ou juge qu'un sondage sur " +
             "$1\\,000$ personnes ne peut rien dire de $67$ millions d'habitants.",
      cause: "L'objection est intuitive et, en un sens, raisonnable : une pincée prélevée " +
             "dans une grande marmite semble en dire moins que dans une petite. L'élève " +
             "attend donc que la taille de la population figure dans la formule, et son " +
             "absence lui paraît suspecte.<br/><br/>" +
             "Or la marge d'erreur ne dépend QUE de $n$, la taille de l'échantillon. Ce " +
             "résultat est contre-intuitif au point que beaucoup d'adultes ne l'admettent " +
             "pas.",
      remede: "Prendre l'image de la soupe, qui est la meilleure disponible : pour savoir si " +
              "une soupe est assez salée, une cuillère suffit — à condition d'avoir bien " +
              "remué. Que la marmite contienne deux litres ou deux cents ne change rien à la " +
              "taille de la cuillère nécessaire.<br/><br/>" +
              "Insister sur la condition, car c'est elle qui porte toute la validité : « à " +
              "condition d'avoir bien remué », c'est-à-dire que l'échantillon soit " +
              "<strong>représentatif</strong>. C'est là que se jouent les vrais échecs des " +
              "sondages, et non dans la taille de la population.<br/><br/>" +
              "Faire le lien avec les sondages réels que l'élève voit : ils portent presque " +
              "tous sur environ mille personnes, qu'il s'agisse d'une ville ou d'un pays " +
              "entier. Le chiffre ne varie pas avec la population, et l'élève peut le " +
              "vérifier lui-même dans n'importe quel article.<br/><br/>" +
              "Aucun exercice de la banque ne travaille cette erreur : tous les énoncés " +
              "donnent directement la taille de l'échantillon, et aucun ne mentionne la " +
              "population totale ni ne met en scène un échantillon biaisé. La remédiation " +
              "demande donc une discussion en classe, à partir d'un article de presse " +
              "réel — ce qui est de toute façon le meilleur support pour ce point.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : pointer un calcul de marge d'erreur n'aiderait en rien un
         élève qui doute de la légitimité de la méthode elle-même. Le remède
         le dit explicitement et indique quoi faire à la place, comme le font
         déjà six remédiations de la sixième, une de la quatrième et une des
         vecteurs. */
      exercice: null
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 RÉÉCRITE le 2026-09-13 : l'ancienne appliquait $e = 1/\sqrt{n}$
        pour $n = 400$, ce que la Q2 refaisait déjà. La nouvelle pose la
        question À L'ENVERS — quelle taille d'échantillon pour une précision
        voulue — et oblige à inverser la relation sans qu'aucune formule ne
        la donne dans ce sens. « chercher ». La réponse reste $400$.
     Q2 borne supérieure d'un intervalle de confiance : deux étapes
        enchaînées (marge puis borne), mais techniques. « calculer ».
     Q3 par combien multiplier n pour diviser la marge par 3 : l'élève doit
        remonter de l'effet à la cause, en inversant la relation. Aucune
        formule ne donne directement la réponse. « chercher ».
     Q4 doubler n divise la marge par combien : l'élève doit conclure de la
        forme de la relation (une racine) à un facteur numérique, en
        écartant la réponse proportionnelle qui est le distracteur.
        « raisonner ».
     Q5 l'intervalle garantit-il à 100 % : il faut énoncer correctement ce
        que le niveau de confiance signifie, sans aucun calcul. Employer à
        bon escient le langage mathématique, c'est « communiquer ».

     « Modéliser » et « représenter » ne sont PAS déclarées : aucune des cinq
     questions ne demande de construire un modèle à partir d'une situation
     nouvelle ni de lire une représentation. Elles sont portées par d'autres
     chapitres du niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["chercher", "calculer", "chercher", "raisonner", "communiquer"]
  }
};
