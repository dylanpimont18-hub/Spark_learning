/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/fonctions-affines.prof.js
   Fiche professeur du chapitre « Fonctions affines et linéaires »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   ATTENTION AU NOM DU FICHIER : ce module n'a pas de préfixe de niveau, son
   identifiant est `fonctions-affines` tout court (comme `vecteurs`). Une
   fiche nommée `2nde-fonctions-affines.prof.js` ne serait jamais trouvée, et
   l'ouvrage compilerait en se déclarant simplement « sans fiche », sans le
   moindre message d'erreur.

   CHAPITRE DE REPRISE, le plus franc de l'ouvrage : la fonction affine est
   au programme de troisième. Ce qui est neuf en seconde n'est pas l'objet
   mais le REGARD porté sur lui — on cesse de voir « une droite qu'on trace »
   pour voir « une fonction qu'on étudie ».
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["fonctions-affines"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 5 (équations et inéquations) : chercher un antécédent, c'est résoudre
     $ax + b = k$. La technique doit être disponible, sans quoi le chapitre
     bute sur un obstacle qui ne lui appartient pas.

     ch. 6 (généralités sur les fonctions) : le vocabulaire image /
     antécédent / sens de variation est posé là, et ce chapitre-ci n'en est
     que la première instanciation. C'est le prérequis le plus important des
     deux.

     Le chapitre 3 (ensembles de nombres) n'est PAS retenu : les coefficients
     manipulés ici sont des entiers ou des décimaux simples, et aucune
     question ne porte sur la nature des nombres. */
  prerequis: [5, 6],

  /* Rang conseillé (2026-09-13) : rang 5.

     Juste après les généralités sur les fonctions (rang 4), dont ce chapitre
     est le PREMIER EXEMPLE CONCRET. L'ordre inverse — affines d'abord,
     généralités ensuite — est tentant parce que l'élève connaît déjà les
     droites, mais il installe l'idée qu'une fonction est une droite, ce que
     le chapitre suivant passe ensuite son temps à défaire.

     Le LIVRE le range en chapitre 2, très en amont : c'est un rangement par
     difficulté apparente, pas une progression. L'écart entre les deux ordres
     est ici de trois rangs, le plus grand de l'ouvrage avec celui des
     vecteurs. */
  rangConseille: 5,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Fonctions », sous-partie « Fonctions affines ».
  attendus: [
    "Reconnaître une fonction affine et une fonction linéaire à partir de son expression",
    "Déterminer le coefficient directeur d'une droite à partir de deux points",
    "Déterminer l'ordonnée à l'origine et écrire l'équation réduite d'une droite",
    "Déduire le sens de variation d'une fonction affine du signe de son coefficient directeur",
    "Modéliser une situation de proportionnalité ou de tarif par une fonction affine"
  ],

  note: "Le contenu mathématique de ce chapitre est intégralement au programme de seconde, et " +
        "il n'en déborde sur aucun point.<br/><br/>" +
        "<strong>C'est en revanche le chapitre de reprise le plus marqué de l'année, et c'est " +
        "ce qu'il faut savoir avant de le préparer.</strong><br/><br/>" +
        "La fonction affine, son coefficient directeur et son ordonnée à l'origine sont au " +
        "programme de troisième. L'élève arrive donc en sachant, le plus souvent, calculer " +
        "$a = \\frac{\\Delta y}{\\Delta x}$ et tracer une droite. Refaire ce travail à " +
        "l'identique occupe trois semaines pour un bénéfice nul.<br/><br/>" +
        "<strong>Ce qui change réellement en seconde tient au regard, pas à l'objet.</strong> " +
        "En troisième, $y = ax + b$ était une droite que l'on TRAÇAIT. En seconde, c'est une " +
        "FONCTION que l'on étudie : elle a un sens de variation qu'on démontre au lieu de le " +
        "lire, des images et des antécédents qu'on nomme comme tels, et elle sert de premier " +
        "exemple à tout le vocabulaire du chapitre sur les fonctions. C'est là qu'il faut " +
        "mettre le temps gagné ailleurs.<br/><br/>" +
        "<strong>Un point de vigilance sur le contenu du chapitre, à arbitrer avant la " +
        "séance.</strong> La question 5 de l'évaluation et l'exemple du cours portent sur la " +
        "<strong>loi de Beer-Lambert</strong> ($A = \\varepsilon l c$) et demandent de " +
        "manipuler une concentration en $10^{-3}$ mol/L. La modélisation affine d'une " +
        "situation physique est bien au programme, mais cette loi précise relève de la " +
        "spécialité physique-chimie de première, et la notation en puissances de dix ajoute " +
        "une difficulté qui n'est pas celle du chapitre. En classe de mathématiques seule, on " +
        "gagnera à remplacer l'étalonnage par un tarif ou une vitesse, sans rien perdre du " +
        "raisonnement.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13), après élargissement de la banque.

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Inverser le numérateur et le dénominateur de la pente",
      eleve: "Pour $A(2\\,;\\,5)$ et $B(6\\,;\\,13)$, l'élève écrit $a = \\dfrac{6 - 2}{13 - 5} = " +
             "\\dfrac{4}{8} = 0{,}5$ au lieu de $\\dfrac{13 - 5}{6 - 2} = 2$.",
      cause: "La formule est mémorisée comme « la différence sur la différence », c'est-à-dire " +
             "sans que l'ordre des deux différences porte de sens. Rien dans l'écriture " +
             "$\\frac{\\Delta y}{\\Delta x}$ ne rappelle POURQUOI le $y$ est en haut.<br/><br/>" +
             "Le résultat obtenu reste un nombre plausible, souvent l'inverse du bon, et aucun " +
             "garde-fou numérique ne signale l'erreur.",
      remede: "Revenir à ce que la pente MESURE, et l'énoncer en français avant tout symbole : " +
              "« de combien $y$ monte quand $x$ avance de $1$ ». La grandeur que l'on cherche " +
              "est une variation de $y$, donc elle est au numérateur. L'ordre cesse d'être " +
              "arbitraire dès qu'on peut dire la phrase.<br/><br/>" +
              "Faire ensuite dessiner le <strong>triangle de pente</strong> sur le repère : on " +
              "avance horizontalement, puis on monte. Le geste se fait dans cet ordre, et " +
              "l'écriture le reproduit.<br/><br/>" +
              "Installer enfin un contrôle de vraisemblance que l'élève peut faire seul : si " +
              "la droite monte vite, la pente est grande. Une pente de $0{,}5$ sur une droite " +
              "qui monte de $8$ pour $4$ d'avance est visiblement fausse, et l'élève peut le " +
              "voir sans refaire le calcul.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 donne deux
         points ($A(0;3)$ et $B(5;-2)$) et demande le coefficient directeur,
         tâche AJOUTÉE ce jour au générateur — la banque ne contenait avant
         cela aucune tâche de pente entre deux points, alors que c'est
         l'attendu principal du chapitre. L'exercice 9 est du même type. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que toute fonction affine est linéaire",
      eleve: "Interrogé sur $f(x) = 3x + 1$, l'élève affirme qu'il y a proportionnalité entre " +
             "$x$ et $f(x)$, et calcule $f(6)$ en doublant $f(3)$.",
      cause: "Au collège, « fonction linéaire » et « proportionnalité » ont occupé presque tout " +
             "le terrain, et la fonction affine est arrivée ensuite comme une variante. " +
             "L'élève a donc rangé les deux objets dans la même case.<br/><br/>" +
             "S'y ajoute un fait de langue : « affine » et « linéaire » sont deux mots savants " +
             "que rien ne distingue à l'oreille, et dont l'élève ne connaît pas le sens hors " +
             "du cours.",
      remede: "Ne pas opposer deux définitions, mais faire constater l'échec du raisonnement " +
              "sur un cas : avec $f(x) = 3x + 1$, on a $f(3) = 10$ et $f(6) = 19$, qui n'est " +
              "pas le double. Le contre-exemple tranche en une ligne et l'élève le produit " +
              "lui-même.<br/><br/>" +
              "Donner ensuite la raison, qui est géométrique et se retient mieux qu'une " +
              "règle : une proportionnalité est une droite qui passe par " +
              "l'<strong>origine</strong>. Dès que $b \\neq 0$, la droite est décalée, et le " +
              "rapport $\\frac{f(x)}{x}$ n'est plus constant.<br/><br/>" +
              "Exiger le réflexe de regarder $f(0)$ : si ce n'est pas $0$, la fonction n'est " +
              "pas linéaire. C'est un test d'une seconde, et il est infaillible.<br/><br/>" +
              "Rattacher enfin la distinction à un tarif : un prix au kilo est linéaire, un " +
              "prix au kilo AVEC frais de port fixes est affine. L'élève a l'intuition du " +
              "second cas depuis longtemps.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 compare
         explicitement $f(x) = 5x$ (linéaire) et $g(x) = p_2 x + fixe$
         (affine non linéaire), et son corrigé nomme la différence en
         indiquant que la droite de $f$ passe par l'origine. La tâche a été
         ajoutée ce jour. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Lire le sens de variation sur la valeur de la fonction au lieu du signe de la pente",
      eleve: "Pour $f(x) = -2x + 7$, l'élève répond « croissante », parce que $f(1) = 5$ et " +
             "$f(0) = 7$ sont deux nombres positifs, ou parce que le $7$ est grand.",
      cause: "L'élève cherche le sens de variation dans les VALEURS de la fonction plutôt que " +
             "dans leur ÉVOLUTION. La confusion entre « $f$ est positive » et « $f$ est " +
             "croissante » est classique et survit longtemps, parce que les deux mots " +
             "décrivent une impression favorable.<br/><br/>" +
             "Elle est aggravée par les expressions écrites dans l'autre ordre, comme " +
             "$f(x) = 9 - 2x$, où le coefficient directeur n'est pas le premier nombre lu.",
      remede: "Faire calculer deux images et les COMPARER, plutôt que les regarder une par " +
              "une : $f(0) = 7$ puis $f(1) = 5$. La valeur a diminué alors que $x$ a augmenté, " +
              "donc la fonction décroît — quand bien même les deux nombres sont " +
              "positifs.<br/><br/>" +
              "Énoncer ensuite la règle sous la forme qui la rend utilisable : le sens de " +
              "variation d'une fonction affine ne dépend <strong>que du signe de $a$</strong>, " +
              "et de rien d'autre. Ni de $b$, ni de l'intervalle, ni des valeurs.<br/><br/>" +
              "Traiter explicitement les écritures inversées, du type $9 - 2x$, en faisant " +
              "réécrire sous la forme $-2x + 9$ avant toute conclusion. C'est là que se " +
              "concentrent les erreurs des élèves qui ont pourtant compris la règle.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 demande le
         sens de variation SANS AUCUN CALCUL de valeurs, ce qui interdit
         précisément la stratégie fautive. Le générateur tire aussi des
         expressions écrites dans l'autre ordre ($9 - 2x$, $6 + 3x$), qui
         sont le cas difficile. Tâche ajoutée ce jour. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier l'unité de la pente dans un contexte concret",
      eleve: "Après avoir trouvé $a = 2$ pour un réservoir qui se remplit, l'élève écrit " +
             "« $a = 2$ » sans unité, et se trouve incapable de dire ce que ce $2$ signifie.",
      cause: "En mathématiques pures, un coefficient directeur est un nombre sans dimension, et " +
             "quatre années d'exercices abstraits ont installé ce réflexe. Dès que la situation " +
             "est concrète, la pente devient pourtant un DÉBIT, une VITESSE ou un PRIX " +
             "UNITAIRE, c'est-à-dire un quotient de deux grandeurs.<br/><br/>" +
             "L'élève ne néglige pas une convention d'écriture : il n'a pas vu que la pente " +
             "était elle-même une grandeur physique.",
      remede: "Exiger que l'unité soit écrite au moment même du calcul, en la lisant sur la " +
              "fraction : $\\frac{\\text{litres}}{\\text{minutes}}$ donne des L/min. L'unité se " +
              "déduit alors du calcul, elle ne s'ajoute pas après coup.<br/><br/>" +
              "Faire systématiquement traduire le résultat en une phrase : « le réservoir se " +
              "remplit de $2$ litres par minute ». Un élève qui ne peut pas produire cette " +
              "phrase n'a pas terminé l'exercice, même si son nombre est juste.<br/><br/>" +
              "Utiliser l'unité comme contrôle : si l'on trouve des minutes par litre, c'est " +
              "que la fraction a été écrite à l'envers. L'unité rattrape alors l'erreur de la " +
              "première remédiation de cette fiche, et les deux se renforcent.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est un
         contexte d'altitude ($h(4) = 21$ m, $h(9) = 31$ m) dont le corrigé
         imprime la pente AVEC son unité (m/km). L'exercice 8 est du même
         type avec une température. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 pente à partir de deux points : application directe de la formule.
        « calculer ».
     Q2 ordonnée à l'origine de $y = 3x - 7$ : il n'y a rien à calculer, il
        faut LIRE le rôle de chaque nombre dans l'écriture réduite.
        Reconnaître ce qu'un élément d'une écriture représente, c'est
        « représenter ».
     Q3 $f(5)$ connaissant un point et la pente : il faut d'abord reconstituer
        l'équation, puis l'appliquer. Deux étapes enchaînées, mais toutes deux
        techniques. « calculer ».
     Q4 reconnaître la fonction linéaire parmi quatre expressions : l'élève
        doit conclure d'un critère (l'absence de terme constant) à un
        classement, sans effectuer aucun calcul. « raisonner ».
     Q5 spectrophotométrie : traduire une loi physique en fonction linéaire
        et en extraire une grandeur. C'est « modéliser ».

     « Chercher » et « communiquer » ne sont PAS déclarées : aucune des cinq
     questions ne demande d'explorer une piste ni de rédiger une explication.
     Elles sont portées par d'autres chapitres du niveau. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "raisonner", "modéliser"]
  }
};
