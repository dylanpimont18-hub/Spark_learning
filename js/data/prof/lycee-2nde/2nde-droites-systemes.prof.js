/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-droites-systemes.prof.js
   Fiche professeur du chapitre « Droites et systèmes d'équations »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE CHARNIÈRE entre l'algèbre et la géométrie : c'est ici que
   l'élève rencontre pour la première fois l'idée qu'un OBJET GÉOMÉTRIQUE
   (une droite) et un OBJET ALGÉBRIQUE (une équation) désignent la même
   chose, et que résoudre un système revient à chercher un point. Cette
   correspondance est le cœur de la géométrie analytique, et tout le
   programme de première s'appuie dessus.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-droites-systemes"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 2 (fonctions affines) : l'équation réduite $y = mx + p$ EST
     l'expression d'une fonction affine. Ce chapitre ne fait qu'en changer le
     point de vue, du fonctionnel au géométrique. C'est le prérequis
     principal, et le chapitre est incompréhensible sans lui.

     ch. 5 (équations et inéquations) : résoudre un système par substitution
     produit une équation du premier degré à une inconnue, qu'il faut savoir
     mener sans faute de signe.

     Le chapitre 8 (repérage dans le plan) n'est PAS retenu : ce chapitre
     utilise des coordonnées, mais aucune distance ni aucun milieu. Le
     déclarer serait un prérequis décoratif. */
  prerequis: [2, 5],

  /* Rang conseillé (2026-09-13) : rang 7.

     Après les fonctions affines (rang 5) et les fonctions de référence
     (rang 6), c'est-à-dire une fois que $y = mx + p$ est un objet familier.
     Placé plus tôt, le chapitre demanderait à l'élève de manipuler
     géométriquement une écriture qu'il ne maîtrise pas encore
     algébriquement.

     Il ouvre ensuite le bloc de géométrie (vecteurs rang 8, repérage rang 9,
     géométrie plane rang 10), auquel il sert de transition naturelle depuis
     l'algèbre.

     Le LIVRE le range en chapitre 9, c'est-à-dire à peu près au même
     endroit : les deux ordres coïncident ici. */
  rangConseille: 7,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Géométrie », sous-partie « Droites du plan », et partie
  // « Nombres et calculs » pour les systèmes.
  attendus: [
    "Déterminer l'équation réduite d'une droite à partir de deux points ou d'un point et d'une pente",
    "Reconnaître que deux droites sont parallèles ou sécantes à partir de leurs équations",
    "Déterminer les coordonnées du point d'intersection de deux droites sécantes",
    "Résoudre un système de deux équations du premier degré à deux inconnues",
    "Modéliser un problème concret par un système de deux équations"
  ],

  note: "Le contenu de ce chapitre est au programme de seconde, à une réserve près signalée " +
        "plus bas.<br/><br/>" +
        "<strong>Ce chapitre est une charnière, et c'est ce qu'il faut lui faire porter.</strong> " +
        "L'élève y découvre qu'une droite — objet qu'il dessine depuis l'école primaire — peut " +
        "s'écrire comme une équation, et que deux objets aussi différents qu'un dessin et une " +
        "égalité désignent exactement la même chose. C'est la première apparition de la " +
        "<strong>géométrie analytique</strong>, sur laquelle repose tout le programme de " +
        "première.<br/><br/>" +
        "Le moment le plus utile de la séquence est celui où l'on fait constater que résoudre " +
        "le système, c'est trouver le point d'intersection, et que les deux démarches — " +
        "calculer et lire sur le graphique — donnent le même couple. Tant que l'élève voit " +
        "deux exercices différents, il n'a pas compris le chapitre.<br/><br/>" +
        "<strong>Sur la part de reprise.</strong> Les systèmes de deux équations à deux " +
        "inconnues sont au programme de troisième, et la substitution y est déjà pratiquée. " +
        "Ce qui est nouveau en seconde, c'est l'INTERPRÉTATION GÉOMÉTRIQUE : un système sans " +
        "solution devient deux droites parallèles, et cesse d'être un accident de calcul. On " +
        "peut donc aller vite sur la technique et lentement sur le sens.<br/><br/>" +
        "<strong>Un point à arbitrer.</strong> Le cours mentionne les droites verticales " +
        "d'équation $x = k$, qui n'ont pas de pente définie et ne s'écrivent pas sous la forme " +
        "$y = mx + p$. C'est exact et utile, mais aucun exercice de la banque ni aucune " +
        "question de l'évaluation ne les traite. Si l'on tient à les faire travailler — et " +
        "c'est défendable, car le cas revient en première —, il faut écrire les énoncés " +
        "à la main.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire qu'un système sans solution est un système raté",
      eleve: "Devant $\\begin{cases} y = 3x + 1 \\\\ y = 3x - 4 \\end{cases}$, l'élève aboutit à " +
             "$1 = -4$, conclut qu'il s'est trompé, et recommence le calcul plusieurs fois.",
      cause: "Toutes les équations rencontrées jusqu'ici avaient une solution. L'élève a donc " +
             "installé l'idée qu'un calcul correct produit toujours un résultat, et qu'une " +
             "absurdité signale une faute de sa part.<br/><br/>" +
             "Il ne lui manque pas une technique : il lui manque l'idée qu'une contradiction " +
             "peut être une RÉPONSE, et non un échec.",
      remede: "Faire tracer les deux droites avant tout calcul. Elles sont visiblement " +
              "parallèles, et l'élève voit qu'il n'existe aucun point commun à trouver. La " +
              "contradiction $1 = -4$ devient alors la traduction algébrique de ce que le " +
              "dessin montre, et non une anomalie.<br/><br/>" +
              "Énoncer ensuite la correspondance dans les deux sens, qui est le cœur du " +
              "chapitre : pentes égales et ordonnées différentes, donc droites parallèles, " +
              "donc système sans solution. Les trois formulations décrivent la même " +
              "situation.<br/><br/>" +
              "Faire enfin produire à l'élève un système sans solution de son invention. " +
              "Celui qui sait en fabriquer un ne le prend plus pour une erreur, et la " +
              "vérification est immédiate.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 donne deux
         droites de MÊME pente ($y = -3x - 4$ et $y = -3x - 2$) et demande si
         elles sont parallèles. La réponse attendue est oui, et le corrigé
         dit explicitement qu'elles n'ont aucun point commun — c'est-à-dire
         que le système correspondant n'a pas de solution. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Conclure au parallélisme à partir de l'ordonnée à l'origine",
      eleve: "Devant $y = 2x + 5$ et $y = 7x + 5$, l'élève affirme que les droites sont " +
             "parallèles « puisqu'elles ont le même $5$ ».",
      cause: "L'élève a retenu qu'un parallélisme se lit sur une égalité de nombres, mais pas " +
             "LEQUEL. Les deux coefficients jouent des rôles très différents alors que rien, " +
             "dans l'écriture $y = mx + p$, ne hiérarchise visuellement $m$ et $p$.<br/><br/>" +
             "Le cas est d'autant plus piégeux que deux droites de même ordonnée à l'origine " +
             "ont bel et bien quelque chose en commun — elles se coupent sur l'axe des " +
             "ordonnées — ce qui donne à l'erreur une apparence de justesse.",
      remede: "Faire tracer le contre-exemple, qui règle la question en une minute : $y = 2x+5$ " +
              "et $y = 7x + 5$ passent toutes deux par $(0\\,;\\,5)$ et se coupent donc " +
              "précisément là. Deux droites qui se coupent ne sont pas parallèles, et l'élève " +
              "le voit.<br/><br/>" +
              "Rattacher ensuite chaque coefficient à ce qu'il décrit, par un geste distinct : " +
              "la pente $m$ dit l'<strong>inclinaison</strong>, donc la direction ; " +
              "l'ordonnée à l'origine $p$ dit la <strong>hauteur</strong> de départ, donc la " +
              "position. Deux droites sont parallèles quand elles ont la même direction, " +
              "quelle que soit leur hauteur.<br/><br/>" +
              "Faire verbaliser le cas complet : même $m$ et même $p$ donnent deux droites " +
              "confondues, même $m$ et $p$ différents deux droites parallèles distinctes. " +
              "L'élève range alors les trois cas au lieu d'en retenir un.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 10 donne
         $y = -2x + 3$ et $y = x - 2$, dont les ordonnées à l'origine ET les
         pentes diffèrent, tandis que l'exercice 5 donne deux droites de même
         pente et d'ordonnées différentes. Les deux tirages ensemble
         couvrent la distinction ; le corrigé de chacun compare explicitement
         les PENTES, et l'indication précise que l'ordonnée à l'origine ne
         joue aucun rôle. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Ne donner qu'une seule coordonnée du point d'intersection",
      eleve: "Après avoir trouvé $x = 2$, l'élève écrit « la solution est $2$ » et s'arrête, " +
             "sans calculer $y$ ni donner le couple.",
      cause: "L'habitude des équations à une inconnue a installé l'idée qu'un problème de ce " +
             "type se termine sur un nombre. Or la solution d'un système est un COUPLE, et " +
             "l'objet cherché est un POINT, qui a toujours deux coordonnées.<br/><br/>" +
             "L'oubli est encouragé par la forme de beaucoup d'énoncés — y compris ceux de ce " +
             "chapitre — qui ne demandent que l'abscisse pour pouvoir corriger automatiquement. " +
             "L'élève n'est alors jamais sanctionné pour son arrêt prématuré.",
      remede: "Exiger la réponse sous forme de <strong>point</strong>, avec ses parenthèses et " +
              "ses deux coordonnées, même lorsque l'énoncé ne demande qu'un nombre. La " +
              "consigne est une convention de classe, mais elle maintient le lien entre le " +
              "système et sa signification géométrique.<br/><br/>" +
              "Faire systématiquement la vérification dans les <strong>deux</strong> équations " +
              "de départ, ce qui est impossible sans avoir calculé $y$. Le contrôle force le " +
              "travail complet au lieu de le recommander.<br/><br/>" +
              "Revenir enfin au dessin : on cherche l'endroit où deux droites se croisent, et " +
              "un endroit dans le plan ne se désigne pas par un seul nombre. La raison est " +
              "géométrique, elle se retient mieux qu'une exigence de présentation.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 demande
         l'abscisse du point d'intersection, mais son corrigé imprime le
         couple complet (« et l'ordonnée correspondante vaut... »). L'élève
         qui s'arrête à x voit dans la correction ce qu'il aurait dû
         produire. L'exercice 8 est du même type. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Substituer dans l'équation dont on vient de tirer l'inconnue",
      eleve: "Ayant tiré $y = 9 - x$ de la première équation, l'élève réinjecte cette " +
             "expression dans cette MÊME première équation et obtient $9 = 9$, une identité " +
             "vraie mais qui ne l'avance en rien.",
      cause: "La méthode a été mémorisée comme une suite de gestes — « j'isole, je remplace » — " +
             "sans que la raison du second geste soit comprise. Or substituer ne sert à " +
             "quelque chose que si l'on apporte une information NOUVELLE, c'est-à-dire si " +
             "l'on utilise l'autre équation.<br/><br/>" +
             "L'élève qui obtient $9 = 9$ ne voit pas d'erreur : il a bien obtenu une égalité " +
             "vraie, et rien ne lui indique qu'il vient de tourner en rond.",
      remede: "Nommer ce que chaque équation APPORTE, avant tout calcul : la première dit " +
              "combien d'articles au total, la seconde combien d'euros au total. Deux " +
              "informations différentes, donc deux équations nécessaires. Réutiliser la " +
              "première deux fois revient à ne connaître qu'une seule information, et il est " +
              "alors normal de ne rien trouver.<br/><br/>" +
              "Faire numéroter les équations $(1)$ et $(2)$ et exiger que chaque ligne du " +
              "calcul indique laquelle est utilisée. Le suivi rend l'erreur visible au moment " +
              "où elle se produit, et non trois lignes plus loin.<br/><br/>" +
              "Traiter l'identité $9 = 9$ comme un signal et non comme une réponse : quand " +
              "l'inconnue disparaît en laissant une égalité vraie, c'est qu'on n'a pas " +
              "utilisé les deux équations — ou, cas plus rare, que les deux droites sont " +
              "confondues.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est un
         problème de traiteur qui exige explicitement de POSER puis de
         résoudre le système de deux équations, et dont le corrigé écrit
         « En substituant dans la SECONDE ». L'énoncé et le corrigé nomment
         donc tous deux l'équation à utiliser. L'exercice 6 est du même type. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 pente à partir de deux points : application de la formule.
        « calculer ».
     Q2 position relative de $y = 3x + 1$ et $y = 3x - 4$ : l'élève doit
        conclure d'une égalité de pentes à une propriété géométrique, sans
        aucun calcul. « raisonner ».
     Q3 système résolu par égalisation des deux expressions de $y$ :
        technique. « calculer ».
     Q4 système $\begin{cases} x + y = 10 \\ 3x - y = 6 \end{cases}$ : la
        forme n'est pas résolue en $y$, donc l'élève doit CHOISIR une
        méthode (substitution ou combinaison) avant de calculer. Décider
        d'une stratégie sans que l'énoncé l'indique, c'est « chercher ».
     Q5 ordonnée à l'origine connaissant un point et la pente : il faut
        d'abord se représenter que le point est SUR la droite, donc que ses
        coordonnées vérifient l'équation, avant de substituer.
        « représenter ».

     « Modéliser » et « communiquer » ne sont PAS déclarées : aucune des cinq
     questions ne part d'une situation concrète à traduire ni ne demande de
     rédiger une explication. Les deux compétences sont portées par d'autres
     chapitres du niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "chercher", "représenter"]
  }
};
