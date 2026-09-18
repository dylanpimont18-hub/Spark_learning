/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-statique-pfs.prof.js
   Fiche professeur du chapitre « Statique : PFS » (première SI), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage.

   ATTENTION, PARTICULARITÉ DE CE CHAPITRE : son évaluation ne compte que
   QUATRE questions, alors que les sept autres chapitres du dossier en ont
   cinq. `competences.evaluation` porte donc quatre entrées, et non cinq —
   compté avec voir-module.js, pas supposé. C'est le seul chapitre du dossier
   dans ce cas.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 7 (chapitre 8 du livre `lycee-si`).

   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire.

   DEUX MOULES, qui alternent strictement impair/pair, et qui sont en réalité
   LE MÊME problème vu des deux bouts :
     - calculer $R_A$ (moments écrits en $B$) : exercices 1, 3, 5, 7, 9, 11
       (les IMPAIRS) ;
     - calculer $R_B$ (moments écrits en $A$) : exercices 2, 4, 6, 8, 10, 12
       (les PAIRS).
   Quatre contextes tournent (passerelle piétonne, bras de grue, poutre de
   pont roulant, étagère industrielle).

   POINT DE VIGILANCE SUR LA LECTURE DES ÉNONCÉS : la charge est toujours
   située à $d$ de $A$, mais pour calculer $R_A$ le générateur écrit les
   moments en $B$, donc avec le bras de levier $L - d$. Exemple mesuré,
   exercice 1 : $L = 5$ m, $d = 1$ m, et la correction pose
   $R_A \times 5 - 220 \times 4 = 0$. Le $4$ est bien $L - d$. C'est correct,
   mais c'est aussi la source de l'erreur la plus intéressante du chapitre
   (voir l'erreur 2 ci-dessous).

   CE QUE LE TIRAGE NE TRAVAILLE JAMAIS, et qui est dans le cours : les forces
   OBLIQUES (donc la projection et le vrai bras de levier perpendiculaire, qui
   est l'objet de l'encadré « piège »), les liaisons autres que l'appui simple
   (pivot, encastrement, cités dans les définitions), l'hyperstatisme, et
   l'équation $\sum F_x = 0$, qui n'a jamais rien à faire puisque toutes les
   charges sont verticales.

   DÉFAUT DE NOTATION DÉCIMALE : CORRIGÉ LE 2026-09-18, dans js/data/ et non
   ici. Le `generate()` de ce module interpolait ses réactions d'appui sans
   passer par `fr()`, ce qui imprimait « $R_B = 296.7$ N » au lieu de
   $296{,}7$ dans huit des douze exercices du chapitre — bug récurrent décrit
   dans CLAUDE.md (§2). Les valeurs TIRÉES sont inchangées (la graine ne bouge
   pas, seul l'affichage est corrigé) : les renvois de cette fiche, qui citent
   $296{,}7$ N à l'exercice 2 et $526{,}7$ N à l'exercice 3, restent valides.
   `node scripts/check-decimal-notation.js` rend désormais 0 erreur sur tout
   le corpus.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-statique-pfs"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     AUCUN prérequis de SI. La statique est autonome dans ce dossier : elle
     n'emprunte rien aux sept autres chapitres de première. Elle est en amont
     de la RDM (ch. 7), qui a besoin de l'effort calculé ici pour en déduire
     une contrainte — mais ce lien joue dans l'autre sens.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Cinématique du solide) : c'est LE candidat qu'on écrirait par
       réflexe, puisque les deux chapitres sont de la mécanique du solide et
       se suivent dans le livre. MESURE FAITE, et elle tranche : la statique
       étudie l'ÉQUILIBRE, donc l'absence de mouvement. Aucun des 24 énoncés
       ne comporte de vitesse, d'accélération ni de temps ; aucune formule du
       chapitre précédent n'y est réutilisée. Le lien est de culture
       (vocabulaire du solide, notion de point d'application), pas de
       dépendance opératoire. Écarté — mais un enseignant gagnera à réutiliser
       le même système mécanique dans les deux chapitres.
     - ch. 1 (SysML) : aucun des 24 énoncés ne s'appuie sur un diagramme.
       Écarté.
     - ch. 7 (RDM) : dépendance réelle mais INVERSE. La déclarer ici créerait
       un cycle, refusé par `validerPrerequis`.
     - ch. 4 (Boole), ch. 5 (Asservissement), ch. 6 (Énergie), ch. 8 (POO) :
       aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note`, et ce sont les plus
     lourds du dossier : la notion de VECTEUR (le cours écrit
     $\sum \vec{F} = \vec{0}$ dès sa deuxième ligne), la résolution d'une
     équation du premier degré, et la TRIGONOMÉTRIE pour projeter une force
     oblique — que l'encadré « piège » du cours exige explicitement. Tous
     relèvent des mathématiques et ne peuvent pas être déclarés. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 3. L'ordre complet des huit rangs du
     dossier est justifié une fois dans `si-1re-sysml.prof.js` (rang 1).

     Rang 3 pour une raison de contrainte et une raison de confort. La
     contrainte : la RDM (rang 7) déclare ce chapitre en prérequis, donc il
     doit lui être strictement antérieur — et le rang 3 lui laisse quatre
     chapitres d'avance, ce qui est confortable pour un professeur qui veut
     revenir sur les réactions d'appui avant d'attaquer les contraintes. Le
     confort : placer la statique juste après la cinématique garde ensemble le
     bloc mécanique de début d'année (mouvement puis équilibre), ce qui évite
     de changer trois fois de culture en trois chapitres.

     Le livre le range en chapitre 8 de l'ouvrage, soit le 3e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 3,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 3 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Modéliser et résoudre le comportement statique des systèmes ».

     Bornés à ce que le chapitre traite VRAIMENT : l'isolement, le bilan des
     actions, les trois équations du PFS en 2D, et la résolution d'un cas
     isostatique. Rien sur la statique en 3D (le cours dit « en 2D » et s'y
     tient), rien sur les frottements, rien sur la résolution graphique — non
     cités par le cours. Citer un attendu sur le frottement de Coulomb serait
     citer ce que le chapitre n'enseigne pas. */
  attendus: [
    "Isoler un solide et dresser le bilan complet des actions mécaniques extérieures qui lui sont appliquées",
    "Écrire les trois équations d'équilibre du PFS en deux dimensions et choisir un point de moment qui simplifie la résolution",
    "Déterminer les actions de liaison inconnues d'un mécanisme isostatique et vérifier la cohérence du résultat obtenu"
  ],

  note: "Le Principe Fondamental de la Statique, l'isolement du solide, le bilan des actions, les " +
        "trois équations en 2D ($\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_A = 0$) et le calcul " +
        "des réactions d'appui : le chapitre installe la méthode qui permettra, plus tard, de " +
        "dimensionner une pièce.<br/><br/>" +
        "<strong>La colonne « S'appuie sur » affichera un tiret, et c'est exact</strong> — mais " +
        "trompeur si on ne lit que cette colonne. Ce chapitre ne dépend d'aucun autre chapitre de " +
        "SI de première, en revanche il dépend lourdement des " +
        "<strong>mathématiques</strong>, et rien ne l'affichera : la notion de " +
        "<strong>vecteur</strong> (le cours écrit $\\sum \\vec{F}_{\\text{ext}} = \\vec{0}$ dès sa " +
        "deuxième ligne), la résolution d'une équation du premier degré, et surtout la " +
        "<strong>trigonométrie</strong> dès qu'une force est oblique — ce que l'encadré « piège » " +
        "du cours exige. Vérifiez ces trois acquis avant de commencer.<br/><br/>" +
        "<strong>Ce chapitre est le socle de la Résistance des matériaux</strong> (chapitre " +
        "suivant de cette partie, qui le déclare en prérequis) : on ne calcule pas une contrainte " +
        "sans connaître l'effort, et l'effort vient d'ici. Traitez-le sérieusement, la RDM ne " +
        "reviendra pas dessus.<br/><br/>" +
        "<strong>Ce que les $24$ exercices travaillent, et ce qu'ils ne travaillent " +
        "jamais.</strong> Tous les énoncés sont le même problème : une poutre horizontale sur " +
        "<strong>deux appuis simples</strong>, une <strong>charge verticale unique</strong>, et on " +
        "demande $R_A$ (énoncés impairs) ou $R_B$ (énoncés pairs). Ce moule fait très bien " +
        "travailler l'équation des moments, par répétition. Mais il laisse de côté quatre choses " +
        "du cours : les <strong>forces obliques</strong> et donc la projection (l'encadré " +
        "« piège » !), les <strong>liaisons</strong> autres que l'appui simple (pivot, " +
        "encastrement, pourtant définies dans le cours), l'<strong>hyperstatisme</strong>, et " +
        "l'équation $\\sum F_x = 0$, qui n'a jamais rien à faire puisqu'aucune charge n'est " +
        "horizontale. Le <strong>quiz</strong> comble deux de ces trous (isostatisme, choix " +
        "stratégique du point de moment) : faites-le passer, il ne double aucun " +
        "exercice.<br/><br/>" +
        "Dernier point, utile en correction : les réactions d'appui tombent rarement juste " +
        "($R_B = 296{,}7$ N pour une charge de $890$ N sur une poutre de $3$ m). Exigez la " +
        "<strong>virgule française</strong> et un arrondi au dixième, comme le fait le corrigé, " +
        "et profitez-en pour faire vérifier la cohérence : $R_A + R_B$ doit redonner exactement " +
        "la charge, ce que chaque corrigé du chapitre montre en dernière ligne.",

  erreurs: [
    {
      titre: "Confondre une force et un moment, ou additionner les deux",
      eleve: "Pour trouver $R_A$, l'élève écrit $R_A + R_B = F$ puis, dans la même équation, " +
             "ajoute $F \\times d$. Ou bien il annonce une réaction « en N·m ».",
      cause: "Les deux grandeurs se calculent avec la même force $F$ et se notent avec les mêmes " +
             "lettres, mais elles ne mesurent pas la même chose : la force est une " +
             "<strong>poussée</strong> (en N), le moment une <strong>capacité à faire " +
             "tourner</strong> (en N·m). Le PFS donne DEUX équations séparées, l'une sur les " +
             "forces, l'autre sur les moments, et l'élève qui n'a pas séparé les deux mondes " +
             "mélange leurs termes. C'est l'erreur fondatrice de la culture mécanique, et elle " +
             "n'est pas un manque d'attention : c'est un défaut d'image mentale.",
      /* RENVOI VÉRIFIÉ. Exercice 1 du livre (graine 20260816 + 7, premier
         tirage) : passerelle piétonne, $L = 5$ m, $F = 220$ N appliqué à
         $d = 1$ m de $A$, on demande $R_A$. La correction du tirage est le
         support IDÉAL pour cette erreur précise, parce qu'elle fait les deux
         opérations l'une après l'autre et de façon étiquetée : elle écrit
         d'abord l'équation des MOMENTS en $B$ ($R_A \times 5 - 220 \times 4
         = 0$, d'où $R_A = 176$ N), puis une ligne « Vérification » qui
         utilise l'équation des FORCES ($R_A + R_B = F$). Les deux équations
         sont donc visibles séparément sur la même correction — c'est
         exactement ce qu'il faut montrer.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 3, 5, 7, 9,
         11) : tous ont la même structure, mais leurs divisions ne tombent pas
         juste (ex. 3 : $526{,}7$ ; ex. 5 : $206{,}7$ ; ex. 7 : $466{,}7$ ;
         ex. 11 : $96{,}2$), ce qui ajoute une décimale parasite — et,
         actuellement, une décimale mal écrite (point au lieu de virgule).
         L'exercice 1 donne $176$ N tout rond, et l'exercice 9 donne $330$ N :
         ce sont les deux seuls candidats propres. L'exercice 1 est retenu
         parce qu'il est le premier du livre et que ses valeurs restent
         petites ($220$ N, $5$ m), donc l'attention va sur la STRUCTURE des
         deux équations et non sur l'arithmétique. */
      exercice: { type: "exercice", n: 1 },
      remede: "Faites traiter l'<strong>exercice $1$</strong> en imposant le " +
              "<strong>tableau à deux colonnes</strong> : à gauche les forces (en N), à droite les " +
              "moments (en N·m). Aucun terme ne traverse la ligne de séparation. La correction du " +
              "livre le fait déjà — elle écrit l'équation des moments en $B$ " +
              "($R_A \\times 5 - 220 \\times 4 = 0$, donc $R_A = 176$ N), PUIS la vérification par " +
              "les forces ($R_A + R_B = 220$ N). Deux équations, deux lignes, deux " +
              "unités.<br/><br/>" +
              "L'image qui installe la différence, et elle est physique : <strong>la porte</strong>. " +
              "Pousser une porte contre son bâti, c'est une force — elle ne s'ouvre pas. Pousser " +
              "la même porte loin de ses gonds, c'est un moment — elle tourne. Même force, effet " +
              "différent, parce que le <strong>bras de levier</strong> a changé.<br/><br/>" +
              "Installez enfin le <strong>contrôle par les unités</strong>, qui est gratuit et " +
              "infaillible : une réaction s'exprime en <strong>N</strong>, un moment en " +
              "<strong>N·m</strong>. Un élève qui additionne $220$ et $220 \\times 4$ additionne " +
              "des newtons et des newtons-mètres : l'unité le lui dit avant le professeur."
    },
    {
      titre: "Prendre la distance de l'énoncé comme bras de levier, quel que soit le point de moment",
      eleve: "La charge est à $d = 1$ m de $A$ sur une poutre de $L = 5$ m. L'élève écrit les " +
             "moments en $B$ et utilise quand même $1$ m : $R_A \\times 5 - 220 \\times 1 = 0$, " +
             "donc $R_A = 44$ N au lieu de $176$ N.",
      cause: "L'énoncé ne donne qu'une distance, et elle est mesurée depuis $A$ — l'élève la " +
             "reprend telle quelle. Or le bras de levier n'est pas une propriété de la force : " +
             "c'est une distance <strong>relative au point de moment choisi</strong>. Vu de $B$, " +
             "la même charge est à $L - d = 4$ m. L'élève n'a pas encore compris que changer de " +
             "point change tous les bras de levier ; il croit que le « $1$ m » appartient à la " +
             "charge. C'est le contresens central du chapitre, et il produit une réponse " +
             "plausible, donc difficile à détecter.",
      /* RENVOI VÉRIFIÉ, et c'est le renvoi le plus utile de cette fiche.
         Exercice 3 du livre (graine 20260816 + 7, troisième tirage) : poutre
         de pont roulant, $L = 6$ m, $F = 790$ N à $d = 2$ m de $A$, on
         demande $R_A$. La correction écrit les moments en $B$ avec le bras
         $L - d = 4$ m : $R_A \times 6 - 790 \times 4 = 0$. La distance
         UTILISÉE ($4$) est donc différente de la distance DONNÉE ($2$), ce
         qui est précisément le point à faire voir — et la correction affiche
         les deux nombres, ce qui permet de les confronter.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 1, 5, 7, 9,
         11) : l'exercice 9 est DISQUALIFIÉ, car $L = 4$ et $d = 2$ donnent
         $L - d = 2$ — la distance donnée et le bras de levier sont ÉGAUX,
         l'erreur y passe inaperçue et donne la bonne réponse. L'exercice 1
         ($d = 1$, bras $4$) conviendrait, mais il porte déjà le renvoi de
         l'erreur 1, et la règle du projet veut que deux erreurs d'un même
         chapitre ne pointent jamais le même énoncé. Restent 5 ($d = 2$,
         bras $1$), 7 ($d = 1$, bras $2$) et 11 ($d = 1$, bras $7$).
         L'exercice 3 est retenu parce que son écart est le plus lisible sur
         des valeurs simples ($2$ contre $4$, soit un facteur $2$ exact sur le
         résultat : $263$ au lieu de $527$), et parce que son $L = 6$ rend le
         complément $L - d$ facile à calculer de tête. L'exercice 11 aurait un
         écart encore plus spectaculaire ($1$ contre $7$) mais ses valeurs
         ($110$ N, $L = 8$) donnent un $96{,}2$ décimal qui détourne
         l'attention. */
      exercice: { type: "exercice", n: 3 },
      remede: "L'<strong>exercice $3$</strong> est le support à prendre, et pour une raison " +
              "précise : l'énoncé donne $d = 2$ m, mais la correction utilise " +
              "<strong>$4$ m</strong> — parce qu'elle écrit les moments en $B$, et que vu de $B$ " +
              "la charge est à $L - d = 6 - 2 = 4$ m. Faites lire les deux nombres à voix haute et " +
              "demandez pourquoi ils diffèrent : toute l'erreur est là.<br/><br/>" +
              "Imposez le <strong>schéma coté avant tout calcul</strong>, et la règle qui va avec : " +
              "<strong>on écrit la distance depuis le point de moment, jamais depuis le point " +
              "de l'énoncé</strong>. Un trait, les deux appuis, la flèche de la charge, et les " +
              "cotes mesurées depuis le point choisi. Trente secondes de dessin qui suppriment " +
              "l'erreur.<br/><br/>" +
              "Donnez le <strong>contrôle de plausibilité</strong>, qui rattrape tout seul : " +
              "<strong>l'appui le plus proche de la charge supporte le plus</strong>. Dans " +
              "l'exercice $3$, la charge est à $2$ m de $A$ et à $4$ m de $B$, donc $R_A$ doit " +
              "être la PLUS GRANDE des deux réactions, et supérieure à la moitié de $790$ N. Un " +
              "élève qui trouve $263$ N (moins d'un tiers) tient une réponse incohérente et peut " +
              "le voir seul. Posez la question à chaque correction : « ta réaction, elle est du " +
              "bon côté ? »"
    },
    {
      titre: "Choisir un point de moment qui ne simplifie rien",
      eleve: "Pour une poutre sur deux appuis, l'élève écrit les moments au milieu de la poutre, ou " +
             "au point d'application de la charge. Il obtient une équation à DEUX inconnues " +
             "($R_A$ et $R_B$) et se retrouve bloqué.",
      cause: "L'élève applique correctement la méthode — le PFS est vrai en tout point, il ne " +
             "commet aucune faute de mathématiques. Ce qui lui manque est " +
             "<strong>stratégique</strong> : il ne sait pas encore que le choix du point est un " +
             "levier de simplification, parce que personne ne lui a dit qu'il y avait un choix à " +
             "faire. Le cours l'énonce (« le choix du point de moment est stratégique »), mais " +
             "c'est le genre d'astuce de métier qui ne s'apprend pas en la lisant : elle s'apprend " +
             "en constatant, une fois, qu'un autre choix fait disparaître une inconnue.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 3 est bâti exactement sur cette question : « pourquoi est-il
         judicieux de choisir un point de moment où passe une force
         inconnue ? », bonne réponse « parce que le moment de cette force y
         est NUL (bras de levier = 0), ce qui simplifie l'équation », avec une
         correction qui pose $M_A = F \times 0 = 0$ et conclut « cette inconnue
         disparaît de l'équation des moments ». C'est le seul support du livre
         qui traite le CHOIX du point plutôt que son application.
         COMPARÉ AUX CANDIDATS EXERCICES : les 24 énoncés IMPOSENT le point de
         moment dans leur correction (moments en $B$ pour les impairs, en $A$
         pour les pairs) sans jamais justifier ce choix ni en montrer
         d'alternative. L'élève y voit un point de moment tomber du ciel, ce
         qui est exactement le contraire de ce qu'il faut pour cette erreur :
         renvoyer à un exercice reviendrait à lui remontrer une méthode
         appliquée sans délibération. Le quiz 3, lui, met le choix au centre.
         Distinct des renvois des erreurs 1 et 2 (exercices 1 et 3). */
      exercice: { type: "quiz", n: 3 },
      remede: "Le <strong>quiz $3$</strong> est le bon support, et le seul : les $24$ exercices " +
              "imposent leur point de moment sans jamais expliquer pourquoi celui-là. Le quiz, lui, " +
              "pose la question de front et donne la raison — si la force inconnue passe par le " +
              "point choisi, son bras de levier est nul, donc son moment aussi, donc " +
              "<strong>elle disparaît de l'équation</strong>.<br/><br/>" +
              "Faites vivre le choix plutôt que l'énoncer. Prenez l'exercice $1$ et faites écrire " +
              "les moments <strong>deux fois</strong> : une fois au milieu de la poutre (deux " +
              "inconnues, impasse), une fois en $B$ (une seule inconnue, $R_A = 176$ N en trois " +
              "lignes). Le contraste fait le cours à votre place, et il ne s'oublie " +
              "pas.<br/><br/>" +
              "Donnez ensuite la règle sous forme de réflexe, à écrire en marge du cahier : " +
              "<strong>« je choisis le point où passe l'inconnue que je ne cherche pas »</strong>. " +
              "Je cherche $R_A$ ? J'écris les moments en $B$, et $R_B$ s'évapore. Formulé ainsi, " +
              "le choix n'est plus une astuce à retenir mais une conséquence de la question posée."
    },
    {
      titre: "Oublier de projeter une force oblique avant de calculer son moment",
      eleve: "Un câble tire la poutre à $30°$ de l'horizontale avec $F = 500$ N, à $2$ m de $A$. " +
             "L'élève écrit $M_A = 500 \\times 2 = 1000$ N·m, sans toucher à l'angle.",
      cause: "La formule $M = F \\times d$ est vraie, mais $d$ y désigne le bras de levier " +
             "<strong>perpendiculaire</strong> à la ligne d'action — pas la distance entre les deux " +
             "points. Tant que toutes les forces sont verticales et toutes les distances " +
             "horizontales, les deux coïncident, et l'élève peut travailler des mois sans jamais " +
             "rencontrer la différence. Le jour où une force penche, la formule mémorisée donne un " +
             "résultat faux d'un facteur $\\cos\\theta$ ou $\\sin\\theta$. Ce n'est pas une " +
             "étourderie : c'est une définition tronquée, apprise sur des cas particuliers.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ, sur mesure.
         MESURE FAITE : les 24 énoncés tirés ont TOUS une charge VERTICALE sur
         une poutre HORIZONTALE. Le moule dit « repose sur deux appuis simples
         A (gauche) et B (droite) [...] est appliqué(e) à d m de A » — pas un
         seul angle, pas une seule force oblique, pas une seule projection.
         Le bras de levier y est toujours égal à la distance horizontale, donc
         l'erreur ne peut PAS s'y manifester : un élève qui la commet obtient
         quand même la bonne réponse sur les 24 énoncés.
         Le quiz ne la traite pas non plus : ses trois questions portent sur
         l'isostatisme, un calcul de $R_B$ vertical, et le choix du point de
         moment.
         L'évaluation ne la traite pas davantage (sa Q4 calcule
         $M = 50 \times 0{,}8$, encore une force perpendiculaire) — et de
         toute façon une remédiation ne renvoie jamais vers le devoir noté.
         Le SEUL support du livre est l'encadré « piège » du cours, qui dit
         exactement cela : « le bras de levier n'est PAS la distance entre le
         point d'application et le point de moment [...] pour une force
         oblique, il faut projeter ! ». Donc `null`, franchement, et le remède
         donne le geste de substitution. */
      exercice: null,
      remede: "Le livre n'a aucun exercice pour cette erreur, et il faut le savoir : les $24$ " +
              "énoncés ont <strong>tous</strong> une charge verticale sur une poutre horizontale, " +
              "où le bras de levier est égal à la distance donnée. Un élève qui confond les deux " +
              "notions réussit quand même les $24$. L'encadré <strong>« piège »</strong> du cours " +
              "est le seul support, et il est écrit pour ce cas précis.<br/><br/>" +
              "Le geste de substitution, et il coûte deux minutes : reprenez l'exercice $1$ " +
              "(passerelle, $F = 220$ N à $1$ m de $A$) et <strong>faites pencher la " +
              "charge</strong> — « et si le piéton tirait sur une rampe inclinée à $60°$ ? ». " +
              "L'élève doit alors projeter : seule la composante verticale " +
              "$F\\sin 60° \\approx 190$ N crée un moment autour de $A$. Comparez les deux " +
              "résultats au tableau.<br/><br/>" +
              "Installez la bonne définition en la faisant DESSINER, parce qu'elle ne s'apprend " +
              "pas par la formule : <strong>le bras de levier est la distance du point de moment " +
              "à la LIGNE D'ACTION de la force</strong>, mesurée perpendiculairement. Faites " +
              "prolonger la flèche de la force en une droite, puis abaisser la perpendiculaire " +
              "depuis le point. Sur une force verticale et une distance horizontale, on retombe " +
              "sur la distance de l'énoncé — et l'élève comprend enfin POURQUOI cela marchait " +
              "jusque-là."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. QUATRE
     questions ici, et non cinq — COMPTÉ sur le module chargé avec
     voir-module.js. C'est le seul chapitre du dossier `si-1re` dans ce cas,
     et `validerProf` refuserait une cinquième entrée.

     Q1 (quelle est la condition d'équilibre en moment en 2D ? →
        $\sum \vec{M}_A = \vec{0}$ en un point quelconque) → modéliser :
        il faut reconnaître l'ÉCRITURE correcte du modèle d'équilibre parmi
        quatre formulations concurrentes, dont une qui nie le rôle des moments
        et une qui ne garde que les forces. C'est une question sur le modèle
        lui-même, pas sur son application.
     Q2 (poutre de $5$ m, charge de $800$ N à $2$ m de $A$, calculer $R_B$ →
        $320$ N) → résoudre : application de l'équation des moments, exactement
        le moule des exercices pairs.
     Q3 (calculer $R_A$ pour la même poutre, sachant $R_B = 320$ N → $480$ N)
        → résoudre : application de l'équation des forces. Même nature, autre
        équation — et c'est la seule question de tout le chapitre où
        $\sum F_y = 0$ sert à trouver une inconnue plutôt qu'à vérifier.
     Q4 (moment d'une force de $50$ N avec un bras de levier de $0{,}8$ m →
        $40$ N·m) → résoudre : application directe de $M = F \times d$.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, modéliser 1.
     `analyser` n'est pas mobilisé, ce qui est notable : aucune des quatre
     questions ne demande d'isoler un solide ni de dresser un bilan d'actions,
     alors que c'est le premier attendu du chapitre et la première étape de la
     méthode du cours. Le devoir évalue la RÉSOLUTION, pas la mise en place —
     si vous voulez évaluer l'isolement, il faudra ajouter votre propre
     question, par exemple faire dresser le bilan des actions sur un schéma
     avant tout calcul.
     `communiquer`, `expérimenter` et `concevoir` ne sont pas mobilisés non
     plus, comme dans tout l'ouvrage pour les deux derniers. */
  competences: {
    evaluation: ['modéliser', 'résoudre', 'résoudre', 'résoudre']
  }
};
