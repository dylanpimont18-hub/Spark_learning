/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-geometrie-reperee.prof.js
   Fiche professeur du chapitre « Géométrie repérée » (première), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

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

window.SPARK_PROF["1re-geometrie-reperee"] = {

  /* Prérequis, en NUMÉROS DE CHAPITRES DU LIVRE, résolus dans le niveau de la
     fiche (voir `indexerParNiveau`, scripts/manuel/prof.js).

     ATTENTION — la numérotation des chapitres est celle de `js/loader.js`, et
     elle ne suit ni l'ordre alphabétique ni la progression conseillée. Pour ce
     niveau : 1 dérivation, 2 suites, 3 produit scalaire, 4 second degré,
     5 polynômes et signe, 6 trigonométrie, 7 géométrie repérée,
     8 probabilités conditionnelles, 9 variables aléatoires,
     10 information chiffrée.

     ch. 1 (dérivation, rang conseillé 6) : le chapitre manipule en permanence
     le coefficient directeur d'une droite, et la dérivation vient justement
     d'installer ce nombre comme une PENTE lisible sur un dessin, à travers la
     tangente. L'élève qui arrive ici après la dérivation sait déjà ce que
     mesure un $m$ ; celui qui arrive avant devra apprendre deux choses à la
     fois.

     C'est le SEUL prérequis retenu, et c'est volontaire. Le chapitre ne
     mobilise ni le second degré, ni les probabilités, ni la trigonométrie : il
     ne demande que des vecteurs et des coordonnées, tous deux acquis en
     seconde. Déclarer davantage serait décoratif. */
  prerequis: [1],

  /* Rang conseillé (2026-09-14) : rang 7.

     Le LIVRE place la géométrie repérée au chapitre 7, par regroupement
     thématique — un rangement par domaine, pas un conseil d'enseignement.

     La progression conseillée retient le rang 7, c'est-à-dire juste après la
     dérivation (rang 6) et juste avant le produit scalaire (rang 8). Ce
     placement n'est pas un compromis : il tient à ce que le chapitre est un
     PIVOT. Il reçoit de la dérivation la notion de pente, et il fournit au
     produit scalaire les coordonnées de vecteurs dans un repère orthonormé,
     sans lesquelles la formule $x_1x_2 + y_1y_2$ n'aurait aucun support.

     Le mettre plus tôt priverait l'élève de la lecture géométrique de la
     pente ; le mettre plus tard le placerait après le chapitre qui en
     dépend. */
  rangConseille: 7,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Géométrie », sous-partie « Géométrie
  // repérée ».
  attendus: [
    "Caractériser la colinéarité de deux vecteurs par la nullité de leur déterminant",
    "Déterminer si trois points sont alignés à l'aide de vecteurs colinéaires",
    "Déterminer une équation cartésienne de droite à partir d'un point et d'un vecteur directeur",
    "Reconnaître un vecteur normal et un vecteur directeur dans une équation cartésienne",
    "Passer de l'équation réduite à l'équation cartésienne d'une droite, et réciproquement",
    "Déterminer une équation de cercle à partir de son centre et de son rayon"
  ],

  /* Là où le chapitre déborde du programme de l'année, ou reste en deçà, on le
     dit à l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La colinéarité par le déterminant, l'alignement de trois points, les équations de " +
        "droite sous leurs deux formes et la distinction vecteur normal / vecteur directeur " +
        "sont tous au programme de première.<br/><br/>" +
        "<strong>Deux points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord l'<strong>équation de cercle</strong>, qui figure au programme officiel de " +
        "première. Le cours ne la traite pas dans son texte, et aucune tâche de la banque ni " +
        "aucune question d'évaluation ne la mobilise. Elle n'est présente que dans le schéma " +
        "« L'équation d'un cercle ne dit qu'une chose : une distance », ajouté le 2026-09-14 " +
        "précisément pour combler ce vide — le schéma pose l'équation, la justifie par " +
        "Pythagore et la fait vérifier sur quatre points à coordonnées entières. C'est un " +
        "appui solide pour une séance, mais <strong>cela ne remplace pas des exercices</strong> : " +
        "si le cercle doit être évalué, il faudra un apport extérieur.<br/><br/>" +
        "Ensuite la <strong>distance entre deux points</strong> et le milieu d'un segment, " +
        "qui relèvent de la seconde et que le chapitre réemploie sans les réintroduire. Une " +
        "question du quiz porte d'ailleurs sur le milieu. Sur une classe fragile, un rappel " +
        "de cinq minutes en ouverture évite que la difficulté du jour soit confondue avec une " +
        "lacune de l'année précédente.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. La quatrième remédiation
       ci-dessous est DÉLIBÉRÉMENT sans renvoi, et le remède le dit : aucun
       exercice de la banque ne travaille l'équation de cercle. Les renvois des
       trois autres ont été vérifiés contre le tirage réel de la graine du
       livre (2026-09-14). La banque n'a pas été élargie — elle portait déjà
       sept tâches distinctes, au-dessus du seuil — donc les rangs n'ont pas
       bougé. */
  erreurs: [
    {
      titre: "Prendre le vecteur normal pour le vecteur directeur",
      eleve: "Pour la droite $3x + 2y - 6 = 0$, l'élève annonce que « le vecteur directeur est " +
             "$\\vec{u}(3\\,;\\,2)$ », en lisant directement les coefficients de $x$ et de $y$.",
      cause: "La lecture est immédiate, elle ne demande aucun calcul, et elle donne bien un " +
             "vecteur attaché à la droite : tout invite à s'y arrêter. Rien dans l'écriture " +
             "$ax + by + c = 0$ ne signale que ces deux nombres décrivent la direction " +
             "<strong>perpendiculaire</strong> et non la direction de la droite.<br/><br/>" +
             "Plus profondément, l'élève n'a aucune raison d'imaginer qu'on caractérise une " +
             "droite par une direction qu'elle ne suit pas. Jusqu'ici, décrire une droite " +
             "voulait dire dire où elle va. L'idée qu'on puisse la décrire par ce à quoi elle " +
             "est perpendiculaire est une nouveauté conceptuelle, pas une convention " +
             "d'écriture.",
      remede: "Ne pas commencer par la règle d'échange des coordonnées : elle se retient mal " +
              "parce qu'elle ne s'appuie sur rien. Commencer par faire " +
              "<strong>vérifier</strong>, sur un cas concret, lequel des deux vecteurs est " +
              "parallèle à la droite.<br/><br/>" +
              "Méthode : prendre deux points de la droite, calculer le vecteur qui les joint, " +
              "et le comparer aux deux candidats. Sur $2x + 3y - 12 = 0$, les points " +
              "$(0\\,;\\,4)$ et $(3\\,;\\,2)$ donnent $(3\\,;\\,-2)$ — qui est colinéaire à " +
              "$(-3\\,;\\,2)$ et <strong>pas</strong> à $(2\\,;\\,3)$. L'élève tranche " +
              "lui-même, par le calcul, au lieu de faire confiance à une règle.<br/><br/>" +
              "Le schéma « Une seule droite, deux écritures » montre cette configuration avec " +
              "le vecteur normal tracé depuis un point de la droite et l'angle droit codé par " +
              "un carré. Le contrôle $\\vec{n} \\cdot \\vec{u} = 0$ y est posé explicitement.<br/><br/>" +
              "Installer enfin le réflexe de vérification : deux vecteurs perpendiculaires ont " +
              "un produit scalaire nul. C'est un contrôle de trois secondes, et il rend la " +
              "confusion impossible à conserver.",
      /* Vérifié contre le tirage réel du livre (2026-09-14, graine 20260816 +
         rang de chapitre) : l'exercice 1 demande la PENTE puis l'ordonnée à
         l'origine de la droite passant par A(3 ; 1) et B(7 ; 5). L'élève y
         construit la direction de la droite à partir de deux de ses points —
         exactement le geste qui départage le directeur du normal — au lieu de
         lire des coefficients. Le renvoi vise donc la cause, pas le symptôme. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Conclure de l'aspect du dessin à l'alignement",
      eleve: "Devant trois points presque alignés, l'élève trace la droite à la règle et " +
             "conclut « ils sont alignés, on le voit », sans calculer le déterminant.",
      cause: "Pendant tout le collège, le dessin a été un outil de preuve légitime : on " +
             "vérifiait un angle droit à l'équerre, un milieu au compas. L'élève transpose " +
             "cette habitude sans se douter qu'elle vient d'expirer.<br/><br/>" +
             "Le problème n'est pas qu'il fasse confiance à ses yeux — c'est raisonnable — " +
             "mais qu'il ne dispose d'aucune expérience où le dessin l'ait trompé. Tant qu'il " +
             "n'a pas rencontré deux figures indiscernables et de réponses opposées, le " +
             "déterminant restera à ses yeux une vérification facultative, une formalité " +
             "scolaire.",
      remede: "Fabriquer l'expérience qui manque, plutôt que d'interdire le dessin. Donner " +
              "les deux triplets du schéma « Alignés ou presque » : $A(0\\,;\\,1)$, " +
              "$B(3\\,;\\,3)$, et $C(6\\,;\\,5)$ d'un côté, $C(6\\,;\\,6)$ de l'autre. Faire " +
              "tracer les deux au crayon, sur quadrillage, et demander lequel est aligné. La " +
              "classe hésite, se partage, et c'est exactement le résultat recherché.<br/><br/>" +
              "Faire calculer alors les deux déterminants : $0$ et $3$. La réponse tombe " +
              "sans discussion possible, et l'écart d'un seul carreau suffisait à tout " +
              "changer.<br/><br/>" +
              "Poser enfin la conclusion qui vaut pour tout le reste de l'année : " +
              "<strong>un dessin sert à voir, jamais à prouver</strong>. On garde le dessin " +
              "pour deviner la réponse, on garde le calcul pour l'affirmer.",
      /* Vérifié contre le tirage réel du livre (2026-09-14, graine 20260816 +
         rang de chapitre) : l'exercice 8 porte sur A(3 ; 0), B(6 ; 4) et
         C(7 ; 5), dont le déterminant vaut 3 x 5 - 4 x 4 = -1. C'est le cas
         limite idéal pour cette erreur : le point C n'est qu'à 0,2 carreau de
         la droite (AB), donc STRICTEMENT indiscernable à l'œil, et pourtant
         les trois points ne sont pas alignés. L'élève qui répond au coup
         d'œil se trompe nécessairement, et seul le calcul le détrompe.

         Les autres exercices d'alignement du tirage sont moins probants : les
         exercices 2, 4, 6 et 10 écartent C de 1,6 à 2,2 carreaux, ce qui se
         voit, et l'exercice 12 est le seul cas réellement aligné — utile en
         contraste, une fois la remédiation faite. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Croire que la forme réduite et la forme cartésienne sont deux droites",
      eleve: "Ayant trouvé $y = -\\dfrac{2}{3}x + 4$, l'élève est incapable de dire si le " +
             "point $(3\\,;\\,2)$ appartient à la droite $2x + 3y - 12 = 0$, et refait tout " +
             "le calcul depuis le début, persuadé qu'il s'agit d'une autre droite.",
      cause: "Les deux écritures arrivent à des moments différents de la scolarité — $y = mx+p$ " +
             "en seconde, $ax+by+c = 0$ en première — et rien ne vient jamais dire " +
             "explicitement qu'elles décrivent le même objet. L'élève les range donc dans deux " +
             "cases séparées de sa mémoire, avec chacune ses exercices types.<br/><br/>" +
             "Le symptôme est un surcoût de travail plus qu'une faute : l'élève recalcule tout " +
             "au lieu de substituer. Mais la conséquence de fond est plus gênante — il ne " +
             "choisit jamais l'écriture la plus commode pour la question posée, puisqu'il ne " +
             "sait pas qu'il a le choix.",
      remede: "Faire le passage dans les deux sens sur une SEULE droite, au tableau, en " +
              "gardant les deux écritures côte à côte tout du long. De $2x + 3y - 12 = 0$, " +
              "isoler $y$ donne $y = -\\dfrac{2}{3}x + 4$ ; réciproquement, tout ramener d'un " +
              "même côté redonne la forme cartésienne. Aucune information n'a été perdue ni " +
              "ajoutée.<br/><br/>" +
              "Faire ensuite tester un même point dans les deux équations. Le schéma « Une " +
              "seule droite, deux écritures » fournit trois points à coordonnées entières, " +
              "$(0\\,;\\,4)$, $(3\\,;\\,2)$ et $(6\\,;\\,0)$, qui vérifient l'une et l'autre. " +
              "C'est cette vérification, faite à la main, qui convainc.<br/><br/>" +
              "Terminer par ce que chaque écriture apporte de mieux : la forme réduite donne " +
              "la pente d'un coup d'œil, la forme cartésienne donne un vecteur normal et sait " +
              "décrire les droites verticales — que $y = mx+p$ ne peut pas écrire. On choisit " +
              "selon la question, pas au hasard.",
      /* Vérifié contre le tirage réel du livre (2026-09-14, graine 20260816 +
         rang de chapitre) : l'exercice 3 part de deux POINTS, A(1 ; 4) et
         B(3 ; 3), et demande la pente puis l'ordonnée à l'origine — donc
         construit la forme réduite. Son corrigé pose explicitement
         m = -1/2 puis p, et l'élève peut ensuite réécrire le résultat sous
         forme cartésienne et vérifier que les deux points la satisfont. Le
         va-et-vient demandé par le remède s'appuie donc sur un exercice
         existant, sans rien inventer. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Développer l'équation du cercle et en perdre le centre",
      eleve: "Partant de $(x-3)^2 + (y-2)^2 = 25$, l'élève développe en " +
             "$x^2 + y^2 - 6x - 4y - 12 = 0$, puis annonce que « le centre est " +
             "$(-6\\,;\\,-4)$ », en lisant les coefficients comme il le ferait pour une " +
             "droite.",
      cause: "Le réflexe de développer est installé depuis la classe de troisième et il est " +
             "généralement récompensé. Ici il détruit précisément l'information cherchée : la " +
             "forme $(x-a)^2 + (y-b)^2 = r^2$ <strong>affiche</strong> le centre et le rayon, " +
             "la forme développée les cache.<br/><br/>" +
             "S'y ajoute un transfert depuis le début du chapitre : l'élève vient d'apprendre " +
             "que dans $ax + by + c = 0$ les coefficients se lisent directement. Il applique " +
             "la même lecture à une équation de degré deux, où elle n'a aucun sens. L'erreur " +
             "est donc le signe d'une règle apprise, pas d'un oubli.",
      remede: "Poser la règle de conduite avant tout automatisme : devant une équation de " +
              "cercle, <strong>on ne développe pas</strong>. On garde la forme " +
              "$(x-a)^2 + (y-b)^2 = r^2$, qui est déjà la réponse à toutes les questions " +
              "usuelles.<br/><br/>" +
              "Revenir ensuite au sens, en s'appuyant sur le schéma « L'équation d'un cercle " +
              "ne dit qu'une chose : une distance ». Cette équation n'est rien d'autre que le " +
              "théorème de Pythagore écrit pour un point courant : l'écart horizontal au " +
              "carré, plus l'écart vertical au carré, égale le rayon au carré. Faire " +
              "vérifier les quatre points à coordonnées entières du schéma, sur le cercle de " +
              "centre $\\Omega(3\\,;\\,2)$ et de rayon $5$ : pour $(-1\\,;\\,5)$, " +
              "$(-4)^2 + 3^2 = 25$. Aucune racine carrée à poser, tout se fait de tête.<br/><br/>" +
              "<strong>Aucun exercice de la banque ne travaille cette erreur, et aucun renvoi " +
              "n'est donné ici pour cette raison</strong> : l'équation de cercle est absente " +
              "des douze exercices comme de l'évaluation (voir la note sur le programme). " +
              "Renvoyer vers un exercice d'alignement ou de droite serait un faux renvoi, plus " +
              "coûteux qu'une absence. Si l'équation de cercle doit être travaillée, elle " +
              "demande un apport extérieur — le schéma du cours en fournit le support, pas " +
              "l'entraînement.",
      // Délibérément sans renvoi : voir le dernier paragraphe du remède.
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

     Q1 déterminant de $\vec{u}(3\,;\,5)$ et $\vec{v}(6\,;\,10)$ : application
        directe de la formule $ad - bc$, sans choix à faire. C'est « calculer ».
     Q2 reconnaître un vecteur directeur de $2x - 3y + 6 = 0$ parmi quatre
        propositions : l'élève ne calcule rien. Il doit lire une équation comme
        une description de direction, identifier le normal, puis en déduire le
        directeur. C'est une lecture de l'objet géométrique derrière l'écriture,
        donc « représenter ».
     Q3 ordonnée à l'origine de la droite passant par $A(2\,;\,5)$ et
        $B(4\,;\,11)$ : deux applications de formules enchaînées, la pente puis
        la substitution. C'est « calculer ».
     Q4 les points $A(1\,;\,3)$, $B(3\,;\,7)$, $C(5\,;\,12)$ sont-ils alignés ?
        Les quatre propositions ne diffèrent pas par leur conclusion seule mais
        par le MOTIF invoqué : deux d'entre elles avancent une justification
        fausse pour une conclusion plausible. L'élève doit donc évaluer la
        validité d'un argument, et non produire un résultat. C'est
        « raisonner ».
     Q5 équation de la droite passant par $M(1\,;\,2)$ de vecteur directeur
        $\vec{u}(2\,;\,-1)$, sous la forme $ax+by+c=0$ avec $a>0$ : l'élève doit
        choisir seul son chemin — passer par le vecteur normal, ou éliminer le
        paramètre — puis se conformer à une contrainte de forme imposée. Aucune
        méthode n'est donnée dans l'énoncé. C'est « chercher ».

     « Chercher » est donc bien portée ici, et « représenter » aussi : ce sont
     les deux compétences que le niveau peine à couvrir ailleurs, et ce
     chapitre géométrique est le bon endroit pour elles.

     « Modéliser » et « communiquer » ne sont pas déclarées : aucune des cinq
     questions ne part d'une situation en langue naturelle à traduire, ni ne
     demande de rédiger une explication. « Modéliser » est portée par le
     produit scalaire (Q4) et par la dérivation (Q2) ; « communiquer » est
     portée par la trigonométrie (Q5), dont l'énoncé a été écrit pour cela. */
  competences: {
    evaluation: ["calculer", "représenter", "modéliser", "raisonner", "chercher"]
  }
};
