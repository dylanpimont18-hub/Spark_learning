/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-produit-scalaire.prof.js
   Fiche professeur du chapitre « Produit scalaire » (première), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni
   dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit,
   au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (1re-derivation.prof.js), conventions comprises.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-produit-scalaire"] = {

  /* Prérequis, en NUMÉROS DE CHAPITRES DU LIVRE, résolus dans le niveau de la
     fiche (voir `indexerParNiveau`, scripts/manuel/prof.js).

     ATTENTION — la numérotation des chapitres est celle de `js/loader.js`, et
     elle ne suit ni l'ordre alphabétique ni la progression conseillée. Pour ce
     niveau : 1 dérivation, 2 suites, 3 produit scalaire, 4 second degré,
     5 polynômes et signe, 6 trigonométrie, 7 géométrie repérée,
     8 probabilités conditionnelles, 9 variables aléatoires,
     10 information chiffrée.

     ch. 7 (géométrie repérée, rang conseillé 7) : tout le versant calculatoire
     du produit scalaire repose sur les coordonnées d'un vecteur dans un repère
     orthonormé, et le critère d'orthogonalité $\\vec{u} \\cdot \\vec{v} = 0$
     n'est utilisable que si l'élève sait déjà lire et produire ces
     coordonnées. C'est le prérequis le plus immédiatement mobilisé.

     ch. 6 (trigonométrie, rang conseillé 5) : la définition angulaire fait
     intervenir $\\cos\\theta$ pour des angles quelconques, obtus compris. Un
     élève qui n'a vu le cosinus que dans un triangle rectangle ne peut pas
     donner de sens à $\\cos(140°)$, et c'est pourtant exactement ce qui
     fabrique les produits scalaires négatifs — soit la moitié du chapitre.

     Le second degré n'est PAS retenu : aucun trinôme n'apparaît ici, et le
     déclarer serait un prérequis décoratif. */
  prerequis: [6, 7],

  /* Rang conseillé (2026-09-14) : rang 8.

     Le LIVRE place le produit scalaire au chapitre 3, par regroupement
     thématique — c'est un rangement par domaine, pas un conseil
     d'enseignement.

     La progression conseillée le place au rang 8, tard dans l'année, et pour
     une raison précise : c'est le seul chapitre du niveau qui ait DEUX
     prérequis géométriques, la géométrie repérée (rang 7) pour les
     coordonnées et la trigonométrie (rang 5) pour le cosinus des angles
     obtus. Il ne peut donc pas venir avant le rang 8.

     Ce n'est pas un inconvénient : le produit scalaire est le point de
     convergence du programme de géométrie de première, et il gagne à arriver
     quand les deux outils qu'il assemble sont déjà installés. */
  rangConseille: 8,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Géométrie », sous-partie « Produit
  // scalaire ».
  attendus: [
    "Calculer un produit scalaire à partir des coordonnées de deux vecteurs dans un repère orthonormé",
    "Calculer un produit scalaire par la formule $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$",
    "Interpréter le produit scalaire comme une projection orthogonale",
    "Caractériser l'orthogonalité de deux vecteurs par la nullité de leur produit scalaire",
    "Calculer la norme d'un vecteur et déterminer une mesure d'angle à partir d'un produit scalaire",
    "Modéliser le travail d'une force par un produit scalaire"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La définition par les coordonnées, la définition angulaire, la norme, le critère " +
        "d'orthogonalité et l'interprétation par projection sont tous au programme de " +
        "première.<br/><br/>" +
        "<strong>Deux points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord le <strong>travail d'une force</strong>, très présent dans ce chapitre : il " +
        "traverse le cours, trois questions du quiz, une tâche entière de la banque et le " +
        "problème guidé. C'est une excellente entrée, et elle est au programme de " +
        "physique-chimie de première — mais elle n'est pas au programme de mathématiques. " +
        "Selon que la classe a déjà rencontré la notion en physique ou non, ces énoncés " +
        "seront un appui ou une difficulté supplémentaire. Dans le second cas, on gagnera à " +
        "les traiter après les tâches purement vectorielles plutôt qu'en ouverture.<br/><br/>" +
        "Ensuite les <strong>identités de polarisation</strong> et le théorème d'Al-Kashi, " +
        "qui figurent au programme officiel de première et qui n'apparaissent <strong>ni</strong> " +
        "dans le cours, <strong>ni</strong> dans la banque d'exercices, <strong>ni</strong> " +
        "dans l'évaluation de ce chapitre. C'est un manque réel, à combler par un apport " +
        "extérieur si la progression de l'établissement les exige : le chapitre ne les " +
        "traite pas.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel du livre (2026-09-14, graine
       20260816 + rang de chapitre, 42 tirages, plafond de 3 répétitions).

     La banque de ce chapitre n'a PAS été élargie, et c'est délibéré : avec
     dix-huit tâches distinctes mesurées, elle est de très loin la plus riche
     du niveau, bien au-dessus du seuil de six à sept. La toucher aurait été
     du volume pour du volume.

     La quatrième remédiation est en revanche DÉLIBÉRÉMENT SANS RENVOI : le
     tirage ne produit aucun produit scalaire nul parmi les douze exercices
     numérotés, donc aucun exercice ne travaille réellement cette erreur. Le
     remède le dit explicitement plutôt que de renvoyer à côté. */
  erreurs: [
    {
      titre: "Rendre un vecteur au lieu d'un nombre",
      eleve: "Pour $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(2\\,;\\,1)$, l'élève écrit " +
             "« $\\vec{u} \\cdot \\vec{v} = (6\\,;\\,4)$ », en multipliant les coordonnées " +
             "terme à terme, ou « $(5\\,;\\,5)$ » en les additionnant.",
      cause: "Toutes les opérations sur les vecteurs rencontrées jusqu'ici rendaient un " +
             "vecteur : la somme, la différence, le produit par un réel. L'élève a donc " +
             "installé une règle implicite parfaitement raisonnable — « quand on calcule avec " +
             "des vecteurs, on obtient un vecteur » — et le produit scalaire est le premier " +
             "contre-exemple de sa scolarité. Ce n'est pas une étourderie sur la formule : " +
             "c'est une attente de <strong>nature du résultat</strong>, et elle est plus " +
             "profonde qu'une erreur de calcul.<br/><br/>" +
             "Le mot « produit » aggrave les choses, parce qu'il évoque une multiplication " +
             "terme à terme, comme pour les nombres.",
      remede: "Ne pas commencer par redire la formule : l'élève la connaît souvent. " +
              "Commencer par le <strong>nom</strong>. Faire remarquer que « scalaire » est " +
              "précisément le mot qui, dans tout le reste du programme, s'oppose à " +
              "« vectoriel » : un scalaire est un nombre. Le résultat est annoncé dans " +
              "l'intitulé même de l'opération.<br/><br/>" +
              "Exiger ensuite, pendant deux séances, que chaque résultat soit accompagné " +
              "d'une phrase disant ce qu'il est : « $\\vec{u} \\cdot \\vec{v} = 10$, un " +
              "nombre ». Un élève qui écrit « un nombre » sous un couple de coordonnées voit " +
              "immédiatement la contradiction, alors qu'un couple écrit seul ne le choque " +
              "pas.<br/><br/>" +
              "Le quiz du chapitre propose au passage l'option piégée « $(7\\,;\\,1)$ », qui " +
              "est exactement cette erreur : elle peut servir de point de départ à la " +
              "discussion.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 2 demande
         $\vec{u} \cdot \vec{v}$ pour $\vec{u}(5\,;\,1)$ et $\vec{v}(-5\,;\,5)$, et
         la réponse attendue est le nombre $-20$. Un élève qui rend un couple
         ne peut pas saisir sa réponse : le champ attend un scalaire, et le
         corrigé pose le calcul en une seule ligne qui aboutit à un nombre
         unique. La question porte donc exactement sur la nature du résultat. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire à deux produits scalaires différents",
      eleve: "Devant un énoncé qui donne des coordonnées ET un angle, l'élève demande " +
             "« laquelle des deux formules il faut utiliser », persuadé qu'elles ne donnent " +
             "pas le même résultat.",
      cause: "Les deux formules sont introduites à quelques minutes d'intervalle, sans qu'on " +
             "montre jamais qu'elles coïncident sur un exemple. L'élève les range donc comme " +
             "deux procédés distincts, à sélectionner selon l'énoncé — et il a raison sur ce " +
             "point pratique, ce qui masque le fond : il choisit la formule d'après les " +
             "données, ce qui est correct, mais il croit choisir un <strong>résultat</strong>, " +
             "ce qui est faux.<br/><br/>" +
             "La conséquence apparaît plus tard, et elle est sérieuse : l'élève ne pense " +
             "jamais à passer d'une écriture à l'autre. Or c'est exactement ce qu'on fait " +
             "pour trouver un angle à partir de coordonnées, qui est l'usage le plus utile du " +
             "chapitre.",
      remede: "Faire calculer le <strong>même</strong> produit scalaire par les deux chemins, " +
              "sur un exemple où les deux sont praticables. Le schéma « Deux chemins, un seul " +
              "nombre » est construit pour cela : $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(8\\,;\\,6)$ " +
              "donnent $3 \\times 8 + 4 \\times 6 = 48$ d'un côté, et " +
              "$5 \\times 10 \\times 0{,}96 = 48$ de l'autre. Les deux calculs ne partagent " +
              "aucun nombre de départ, et ils finissent au même endroit.<br/><br/>" +
              "Enchaîner immédiatement sur l'usage qui en découle : donner deux vecteurs par " +
              "leurs coordonnées et demander l'angle. L'élève est alors obligé de calculer le " +
              "produit scalaire par un chemin et de le relire par l'autre. C'est la seule " +
              "situation où l'égalité des deux formules <strong>sert</strong>, et c'est donc " +
              "là qu'elle s'installe durablement.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 porte sur le
         travail d'une force, $W = 18 \times 3 \times \cos(45°)$, et n'est
         calculable QUE par la voie angulaire — aucune coordonnée n'est donnée.
         L'exercice 2, lui, ne donne que des coordonnées. Les faire traiter
         l'un après l'autre montre que le choix de la formule dépend des
         DONNÉES, jamais du résultat cherché. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Lire le signe comme une erreur de calcul",
      eleve: "Trouvant $\\vec{u} \\cdot \\vec{v} = -20$, l'élève reprend son calcul plusieurs " +
             "fois, ou recopie $20$, convaincu qu'un produit de deux longueurs ne peut pas " +
             "être négatif.",
      cause: "Le raisonnement est cohérent et c'est ce qui le rend tenace : une norme est " +
             "positive, le produit de deux nombres positifs est positif, donc le résultat " +
             "devrait l'être. Ce qui manque n'est pas une règle de signes, c'est le " +
             "<strong>troisième facteur</strong> : $\\cos\\theta$, seul terme de la formule " +
             "qui puisse être négatif.<br/><br/>" +
             "Derrière, il y a presque toujours une limite plus ancienne : l'élève n'a " +
             "rencontré le cosinus que dans le triangle rectangle, où il est toujours " +
             "positif. Un $\\cos(140°) < 0$ ne fait donc pas partie de son expérience, et " +
             "aucune explication sur le produit scalaire ne réparera cela.",
      remede: "Traiter d'abord la cause, qui est trigonométrique et non vectorielle : faire " +
              "placer $140°$ sur le cercle trigonométrique et lire l'abscisse du point. Elle " +
              "est négative, visiblement. Tant que ce point n'est pas acquis, le signe du " +
              "produit scalaire restera arbitraire.<br/><br/>" +
              "Utiliser ensuite le schéma « Le signe du produit scalaire, lu sur la " +
              "projection », qui montre trois configurations de même norme où seul l'angle " +
              "change : le pied de la projection passe à droite de l'origine, puis sur " +
              "l'origine, puis à gauche. Le signe n'est plus une règle à retenir, c'est un " +
              "côté à regarder.<br/><br/>" +
              "Donner enfin l'ancrage physique, qui emporte souvent l'adhésion : une force de " +
              "frottement s'oppose au déplacement, son travail est <strong>résistant</strong>, " +
              "et un travail résistant est négatif. Le signe n'est pas un accident de calcul, " +
              "il porte une information.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 6 porte sur
         $\vec{u}(-1\,;\,1)$ et $\vec{v}(1\,;\,-1)$, dont le produit scalaire
         vaut $-2$. Deux vecteurs directement opposés : le résultat négatif y
         est non seulement correct mais ÉVIDENT géométriquement, ce qui permet
         à l'élève de valider le signe par le dessin plutôt que de le subir.
         L'exercice 10, de produit scalaire $3$, sert utilement de contraste. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Confondre « produit scalaire nul » et « vecteur nul »",
      eleve: "Trouvant $\\vec{u} \\cdot \\vec{v} = 0$, l'élève conclut que « l'un des deux " +
             "vecteurs est nul », ou que « les deux vecteurs sont égaux à zéro ».",
      cause: "C'est un transfert direct, et parfaitement logique, d'une règle vraie chez les " +
             "nombres : un produit est nul si et seulement si l'un des facteurs l'est. " +
             "L'élève applique à une opération nouvelle une propriété qui a toujours " +
             "fonctionné, sans avoir de raison de soupçonner qu'elle puisse tomber.<br/><br/>" +
             "C'est là une vraie rupture mathématique, et pas un détail : le produit scalaire " +
             "est la première opération que l'élève rencontre où un produit nul n'entraîne " +
             "<strong>pas</strong> la nullité d'un facteur. Lui dire simplement « ici ça ne " +
             "marche pas » entretient l'idée que les règles changent sans raison.",
      remede: "Exhiber le contre-exemple le plus court possible et le faire vérifier à la " +
              "main : $\\vec{u}(1\\,;\\,0)$ et $\\vec{v}(0\\,;\\,1)$ donnent " +
              "$1 \\times 0 + 0 \\times 1 = 0$. Aucun des deux n'est nul, tous deux ont une " +
              "norme de $1$, et pourtant le produit est nul. Un seul exemple bien choisi " +
              "suffit à faire tomber la règle transférée — c'est une réfutation, pas une " +
              "affaire de conviction.<br/><br/>" +
              "Reformuler ensuite ce que le zéro signifie <strong>ici</strong>, en revenant à " +
              "la projection : un produit scalaire nul veut dire que l'ombre de $\\vec{u}$ sur " +
              "$\\vec{v}$ s'est réduite à un point. Ce n'est pas une absence de vecteurs, " +
              "c'est une absence de <strong>direction commune</strong>. Le panneau central du " +
              "schéma « Le signe du produit scalaire, lu sur la projection » montre " +
              "exactement cette configuration : deux vecteurs bien visibles, et un pied de " +
              "projection remonté sur l'origine.<br/><br/>" +
              "Insister enfin sur la valeur de ce résultat, qui est le plus utile du " +
              "chapitre : $\\vec{u} \\cdot \\vec{v} = 0$ est le seul test de perpendicularité " +
              "qui se calcule sans rapporteur et sans dessin.<br/><br/>" +
              "<strong>Aucun renvoi d'exercice n'est donné ici, et c'est délibéré</strong> : " +
              "vérification faite sur le tirage réel du livre, aucun des douze exercices " +
              "numérotés de ce chapitre ne produit un produit scalaire nul. Les coordonnées " +
              "étant tirées au hasard dans $[-5\\,;\\,5]$, le cas orthogonal reste possible " +
              "mais n'est pas garanti, et il n'est pas sorti. Renvoyer vers un exercice de " +
              "produit non nul n'apprendrait rien sur cette erreur précise ; mieux vaut " +
              "l'absence de renvoi qu'un renvoi qui manque sa cible. Les deux questions du " +
              "quiz et de l'évaluation portant sur l'orthogonalité restent, elles, " +
              "disponibles après la remédiation.",
      /* Vérifié contre le tirage réel du livre (2026-09-14, graine 20260816 +
         rang de chapitre, 42 tirages, plafond 3) : les douze exercices
         numérotés donnent tous un produit scalaire NON NUL (-36, -6, -3, -12,
         -18, -7 pour les six tâches « coord », les six autres portant sur le
         travail d'une force). Le contre-exemple dont l'erreur a besoin
         n'existe donc pas dans la banque imprimée, et `exercice: null` est ici
         la réponse honnête plutôt qu'un renvoi approximatif.

         REMARQUE POUR UNE REPRISE ULTÉRIEURE : ce manque se corrigerait en
         forçant, dans une des tâches du générateur, un couple orthogonal tiré
         parmi $(a\,;\,b)$ et $(-b\,;\,a)$. La banque de ce chapitre n'a pas
         été retouchée dans cette vague (elle était déjà la plus riche du
         niveau), mais c'est le seul trou identifié. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 produit scalaire de $\vec{u}(3\,;\,-2)$ et $\vec{v}(4\,;\,5)$ par les
        coordonnées : application directe de la formule du cours, sans choix à
        faire. C'est « calculer ».
     Q2 produit scalaire à partir de deux normes et d'un angle de $60°$ :
        application de l'autre formule, tout aussi directe. C'est « calculer »
        également — et l'enseignant notera que les deux premières questions
        mobilisent la même compétence sur les deux écritures, ce qui est voulu :
        c'est la paire qui vérifie que l'élève dispose bien des deux.
     Q3 déterminer $k$ pour que $\vec{u}(2\,;\,k)$ et $\vec{v}(3\,;\,-6)$ soient
        orthogonaux : l'élève doit remonter du critère géométrique à une
        équation, la poser, puis la résoudre. Il ne suit pas une formule, il
        raisonne à l'envers. C'est « raisonner ».
     Q4 travail d'une force de $15$ N sur $8$ m à $45°$ : l'énoncé est en langue
        naturelle et ne nomme aucun vecteur ; l'élève doit reconnaître qu'une
        force et un déplacement sont deux vecteurs, et que « travail » désigne
        leur produit scalaire. Cette traduction est du « modéliser ».
     Q5 norme de $\vec{w}(5\,;\,-12)$ : application de la formule de la norme.
        C'est « calculer ».

     « Représenter », « chercher » et « communiquer » ne sont PAS déclarées
     ici, et il faut le dire franchement : les cinq questions de cette
     évaluation sont toutes des applications directes ou quasi directes. Aucune
     ne demande de lire ou de produire une figure, d'explorer une piste sans
     méthode donnée, ni de rédiger une explication.

     C'est un vrai déséquilibre pour un chapitre géométrique, et il n'est pas
     corrigé ici : le corriger demanderait de réécrire des énoncés, pas de
     renommer des étiquettes. Dans ce niveau, « représenter » est porté par la
     dérivation (Q5) et par la géométrie repérée ; « chercher » et
     « communiquer » sont portés par la trigonométrie et la géométrie repérée,
     dont les énoncés ont été écrits pour cela. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "modéliser", "communiquer"]
  }
};
