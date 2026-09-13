/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-probabilites.prof.js
   Fiche professeur du chapitre « Probabilités » (seconde), pour l'édition
   du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE OÙ L'INTUITION TROMPE SYSTÉMATIQUEMENT, et c'est ce qui le rend
   différent de tous les autres. Ailleurs, l'élève ignore ; ici, il CROIT
   SAVOIR — il a des convictions fortes sur le hasard, forgées hors de
   l'école, et elles sont fausses. L'enseignement consiste donc moins à
   installer des connaissances qu'à démonter des croyances, ce qui demande
   d'autres gestes : confronter à l'expérience plutôt qu'énoncer la règle.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-probabilites"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 3 (ensembles de nombres) : les opérations sur les événements sont
     littéralement des opérations sur des ENSEMBLES — réunion, intersection,
     complémentaire. Le vocabulaire et les symboles $\cup$, $\cap$ viennent
     de là, et l'élève qui ne les a pas stabilisés lit $P(A \cup B)$ sans
     savoir de quoi on parle.

     ch. 11 (statistiques) : la probabilité se stabilise autour de la
     fréquence observée quand on répète l'expérience. Sans la notion de
     fréquence, la probabilité reste une convention arbitraire.

     Le chapitre 5 (équations) n'est PAS retenu : les calculs de ce chapitre
     sont des quotients et des additions, jamais des équations à résoudre. */
  prerequis: [3, 11],

  /* Rang conseillé (2026-09-13) : rang 12.

     Après les statistiques (rang 11), dont il prolonge la notion de
     fréquence, et avant l'échantillonnage (rang 13) qui suppose les deux.
     Le bloc « données » se traite donc d'un seul tenant en fin d'année,
     ce qui est aussi l'ordre du livre.

     Le LIVRE le range en chapitre 12 : les deux ordres coïncident
     exactement ici. */
  rangConseille: 12,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Statistiques et probabilités », sous-partie « Probabilités ».
  attendus: [
    "Décrire l'univers d'une expérience aléatoire et y dénombrer les issues",
    "Calculer une probabilité dans une situation d'équiprobabilité",
    "Utiliser la probabilité de l'événement contraire",
    "Calculer la probabilité d'une réunion, avec ou sans intersection",
    "Reconnaître deux événements incompatibles et en tirer les conséquences"
  ],

  note: "Tout le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>C'est le chapitre où l'intuition trompe le plus, et cela change la manière " +
        "de l'enseigner.</strong> Dans les autres chapitres, l'élève ne sait pas ; ici, il " +
        "croit savoir. Il arrive avec des convictions solides sur le hasard — « ça va finir " +
        "par tomber », « après cinq rouges, le noir est plus probable » — qui ne viennent pas " +
        "de l'école et que l'école ne suffit pas à déloger. Énoncer la règle correcte ne sert " +
        "presque à rien : il faut faire constater l'écart entre la croyance et le fait.<br/><br/>" +
        "<strong>La simulation est donc l'outil central du chapitre</strong>, et non un " +
        "supplément. Faire lancer réellement des pièces, ou exécuter une boucle Python de " +
        "mille tirages, produit un argument que l'élève ne peut pas récuser. C'est aussi " +
        "l'occasion d'un lien direct avec le chapitre d'algorithmique.<br/><br/>" +
        "<strong>Sur la part de reprise.</strong> Les probabilités sont abordées dès la " +
        "troisième, et l'élève sait en général calculer une probabilité simple sur un dé. Ce " +
        "qui est neuf en seconde, c'est le VOCABULAIRE ENSEMBLISTE — univers, événement, " +
        "réunion, intersection, contraire — et la formule de la réunion avec son terme " +
        "correctif. On peut aller vite sur le dé, pas sur les ensembles.<br/><br/>" +
        "<strong>Un point de vigilance.</strong> La question 2 de l'évaluation porte sur deux " +
        "tirages successifs avec remise, et fournit la probabilité de « aucun as » pour que " +
        "l'élève n'ait qu'à passer au contraire. C'est bien dosé, mais il faut savoir que " +
        "l'élève ne peut PAS calculer ce $0{,}64$ lui-même : le produit de probabilités " +
        "d'événements indépendants n'est pas au programme de seconde. Ne pas le lui demander.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire que le hasard se corrige de lui-même",
      eleve: "Après vingt « pile » consécutifs, l'élève affirme que « face » a plus de chances " +
             "de sortir au lancer suivant, « parce qu'il est en retard ».",
      cause: "C'est l'erreur la plus universelle du chapitre, et elle porte un nom — le " +
             "sophisme du joueur. Elle vient d'une confusion entre deux énoncés qui se " +
             "ressemblent : sur un TRÈS GRAND nombre de lancers, les fréquences s'équilibrent " +
             "effectivement ; l'élève en déduit qu'une compensation agit lancer par " +
             "lancer.<br/><br/>" +
             "La croyance est renforcée par le langage courant — « la loi des séries », " +
             "« la chance tourne » — et par le fait qu'elle a l'air d'invoquer une loi " +
             "mathématique. Elle n'est donc pas perçue comme une superstition.",
      remede: "Poser la question qui déplace le problème : « la pièce se souvient-elle des " +
              "vingt lancers précédents ? ». Elle n'a ni mémoire ni mécanisme pour le faire. " +
              "L'argument est concret et l'élève ne peut pas y répondre autrement que par " +
              "non.<br/><br/>" +
              "Faire ensuite constater par simulation ce qui se passe réellement : les " +
              "fréquences se rapprochent de $0{,}5$ non pas parce que « face rattrape », mais " +
              "parce que l'écart initial devient NÉGLIGEABLE devant le nombre total de " +
              "lancers. Vingt piles d'avance sur dix lancers, c'est énorme ; sur dix mille, " +
              "c'est invisible. C'est une dilution, pas une compensation, et cette " +
              "distinction est le cœur du remède.<br/><br/>" +
              "Nommer enfin l'erreur et son nom d'usage. Un élève qui sait qu'il s'agit d'un " +
              "piège classique, partagé par des millions de joueurs, s'en méfie mieux que " +
              "s'il croit avoir simplement mal appris sa leçon.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 pose
         exactement la situation (quinze 6 consécutifs, quelle probabilité au
         lancer suivant), et son corrigé s'ouvre sur « les lancers successifs
         sont indépendants ». L'exercice 7 est du même type avec une pièce. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Additionner les probabilités sans retirer l'intersection",
      eleve: "Dans une classe de $30$ élèves où $18$ font du sport et $12$ de la musique, " +
             "l'élève annonce $P(S \\cup M) = \\dfrac{18 + 12}{30} = 1$, alors que $6$ élèves " +
             "pratiquent les deux et que la réponse est $0{,}8$.",
      cause: "L'élève traduit « ou » par « plus », ce qui fonctionne tant que les deux " +
             "événements ne se chevauchent pas — et c'est le cas de la plupart des exemples " +
             "vus en troisième. La règle marche donc souvent, ce qui la rend " +
             "difficile à corriger.<br/><br/>" +
             "Le point qu'il ne voit pas, c'est que les élèves qui font les deux sont comptés " +
             "DEUX FOIS dans l'addition : une fois parmi les sportifs, une fois parmi les " +
             "musiciens.",
      remede: "Faire dessiner deux patates qui se chevauchent et faire écrire le nombre " +
              "d'élèves dans chacune des trois zones — sport seul, les deux, musique seule. " +
              "L'élève constate lui-même que la zone centrale a été comptée deux fois, et le " +
              "terme $-P(A \\cap B)$ cesse d'être une bizarrerie de formule.<br/><br/>" +
              "Faire ensuite la vérification par les effectifs, qui ne se discute pas : " +
              "$12 + 6 + 6 = 24$ élèves concernés sur $30$, soit $0{,}8$. Le résultat " +
              "confirme la formule sans passer par elle.<br/><br/>" +
              "Installer un contrôle de vraisemblance utilisable seul : une probabilité ne " +
              "dépasse jamais $1$. Un élève qui trouve $1$ pile ou davantage sait qu'il doit " +
              "reprendre son calcul, même s'il ne sait pas encore pourquoi.<br/><br/>" +
              "Traiter enfin le cas des événements <strong>incompatibles</strong> comme le " +
              "cas PARTICULIER où l'intersection est vide, et non comme une seconde formule. " +
              "L'élève retient une règle au lieu de deux.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est
         exactement cette situation (32 élèves, 18 sportifs, 10 musiciens, 5
         les deux) et son corrigé imprime la soustraction de l'intersection.
         L'exercice 8 est du même type. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Chercher directement une probabilité de « au moins un »",
      eleve: "Pour « au moins un as en deux tirages », l'élève tente d'énumérer les cas " +
             "favorables, s'embrouille dans les combinaisons, et abandonne ou additionne des " +
             "probabilités qui se recouvrent.",
      cause: "« Au moins un » se traduit spontanément par une énumération — un as, ou deux as, " +
             "ou l'as au premier tirage... — et l'élève s'y engage naturellement parce que " +
             "c'est la démarche qui a toujours marché pour compter des cas favorables.<br/><br/>" +
             "Or cette énumération est précisément celle qui produit des doubles comptages, " +
             "et elle dépasse vite ce qu'on peut mener à la main. L'élève échoue non par " +
             "manque de méthode mais parce qu'il en applique une qui ne passe pas à l'échelle.",
      remede: "Installer le réflexe du <strong>contraire</strong> comme premier geste devant " +
              "toute formulation « au moins » : le contraire de « au moins un as » est " +
              "« aucun as », qui est un cas UNIQUE et donc simple à traiter. Un élève qui " +
              "acquiert ce réflexe gagne un outil qu'il utilisera jusqu'en terminale.<br/><br/>" +
              "Faire écrire systématiquement la phrase contraire en français AVANT tout " +
              "calcul, et la faire vérifier par la classe. C'est là qu'est la difficulté " +
              "réelle : le contraire de « au moins un » n'est pas « au plus un », ni " +
              "« exactement un », et les élèves s'y trompent souvent.<br/><br/>" +
              "Rappeler enfin que la formule $P(\\overline{A}) = 1 - P(A)$ n'est pas " +
              "réservée aux cas difficiles : c'est la même que celle utilisée pour un simple " +
              "dé, appliquée à un événement plus riche.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 demande la
         probabilité de l'événement CONTRAIRE, dans sa forme la plus simple
         et sur un seul tirage. C'est l'exercice d'entraînement du geste, et
         c'est ce qu'il faut pour remédier : la question « au moins un » de
         l'évaluation (Q2) est l'application, pas l'entraînement. L'exercice
         9 est du même type. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Confondre « incompatibles » et « indépendants »",
      eleve: "L'élève affirme que deux événements incompatibles sont indépendants, « puisque " +
             "l'un n'a rien à voir avec l'autre ».",
      cause: "Les deux mots appartiennent au langage courant, où ils disent à peu près la même " +
             "chose : deux choses sans rapport. En mathématiques, ils décrivent pourtant des " +
             "propriétés différentes, et même presque opposées — deux événements " +
             "incompatibles sont fortement liés, puisque savoir que l'un s'est produit " +
             "garantit que l'autre ne s'est pas produit.<br/><br/>" +
             "L'élève n'a donc pas mal appris une définition : il est trompé par le sens " +
             "ordinaire des mots, ce qui est bien plus difficile à corriger.",
      remede: "Traiter les deux notions sur des exemples concrets et opposés, plutôt que par " +
              "leurs définitions. « Obtenir un $6$ » et « obtenir un $3$ » au même lancer sont " +
              "incompatibles. « Obtenir un $6$ au premier lancer » et « obtenir un $6$ au " +
              "second » sont indépendants. L'élève voit que ce sont deux situations sans " +
              "rapport entre elles.<br/><br/>" +
              "Faire ensuite formuler ce que chaque mot dit, en une phrase : incompatibles, " +
              "ils ne peuvent pas arriver <strong>ensemble</strong> ; indépendants, l'un " +
              "n'<strong>influence</strong> pas l'autre. Ce ne sont pas les mêmes " +
              "questions.<br/><br/>" +
              "Se limiter enfin à ce qui est exigible : en seconde, seule " +
              "l'incompatibilité est au programme, et elle se reconnaît à " +
              "$P(A \\cap B) = 0$. L'indépendance est mentionnée à propos des lancers " +
              "successifs, mais sa définition formelle relève de la première. Le dire " +
              "clairement évite que les élèves cherchent à en faire quelque chose.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 porte sur
         deux événements INCOMPATIBLES, son énoncé glose le mot (« ils ne
         peuvent pas se produire en même temps ») et son corrigé montre que
         la formule de la réunion s'y simplifie en une addition. L'exercice
         10 est du même type. Aucun exercice ne porte sur l'indépendance, ce
         qui est volontaire : elle n'est pas exigible en seconde. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 probabilité d'un nombre pair sur un dé : dénombrement immédiat des
        issues favorables puis quotient. « calculer ».
     Q2 RÉÉCRITE le 2026-09-13 par la session précédente : « au moins un as »
        dont il faut trouver l'événement contraire. L'élève doit identifier
        une piste — passer par le contraire — que l'énoncé ne lui indique
        pas. C'est « chercher ».
     Q3 vingt piles puis probabilité de face : aucune donnée à manipuler,
        seulement une conclusion à tirer de l'indépendance des lancers,
        contre une intuition forte. « raisonner ».
     Q4 réunion de deux événements qui se chevauchent, à partir d'effectifs :
        application de la formule, avec le terme correctif. « calculer ».
     Q5 ce que signifie « incompatibles », parmi quatre écritures : l'élève
        doit relier un mot du langage à l'écriture symbolique qui lui
        correspond. Employer à bon escient le langage mathématique, c'est
        « communiquer ».

     « Modéliser » et « représenter » ne sont PAS déclarées : aucune des cinq
     questions ne demande de traduire une situation nouvelle en modèle ni de
     lire une configuration. Elles sont portées par d'autres chapitres du
     niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "chercher", "raisonner", "calculer", "communiquer"]
  }
};
