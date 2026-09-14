/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-second-degre.prof.js
   Fiche professeur du chapitre « Second degré » (première), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni
   dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit,
   au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote de la première
   (1re-derivation.prof.js), conventions et commentaires compris.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-second-degre"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE. Le chapitre visé doit avoir un
     rang conseillé STRICTEMENT INFÉRIEUR à celui du chapitre courant (rang 3),
     sinon la validation échoue.

     ATTENTION, PIÈGE VÉRIFIÉ LE 2026-09-14 : la numérotation des chapitres du
     livre vient de l'ordre de `DATA_FILES` dans js/loader.js, et NON de
     l'ordre alphabétique des fichiers. Les suites sont le chapitre 2 du livre,
     et non le chapitre 8. Une première version de cette fiche déclarait [8],
     c'est-à-dire les probabilités conditionnelles, dont ce chapitre n'a aucun
     besoin. Le test scripts/manuel/tests/renvois-1re.test.js a trouvé
     l'erreur.

     ch. 2 (suites, rang conseillé 2) : c'est le seul prérequis retenu, et il
     l'est pour une raison précise. Le second degré est le premier chapitre où
     une même question admet DEUX réponses également valables. Les suites ont
     déjà installé l'idée qu'un objet mathématique peut se décrire par une
     relation plutôt que par un nombre unique, et surtout elles ont entraîné le
     calcul avec des puissances et des carrés, qui est l'ordinaire de ce
     chapitre.

     L'information chiffrée (ch. 10, rang conseillé 1) n'est PAS retenue : rien
     du second degré n'y puise. Taux d'évolution et indices ne servent nulle
     part ici, et le déclarer serait un prérequis décoratif — exactement ce que
     la fiche de la dérivation refuse de faire avec la géométrie repérée. */
  prerequis: [2],

  /* Rang conseillé (2026-09-14) : rang 3.

     Le LIVRE range ce chapitre en septième position, un rangement par thème et
     non un conseil d'enseignement. En classe, le second degré doit venir TÔT :
     il est l'outil du chapitre 4 (signe d'un trinôme, rang 4) et, plus loin,
     celui de la dérivation (rang 6), dont l'usage principal — étudier le signe
     de $f'$ — revient à étudier le signe d'un trinôme.

     Le placer au rang 3 laisse cependant passer devant lui l'information
     chiffrée, qui remet en route le calcul numérique après l'été, et les
     suites, qui ne dépendent de rien. C'est le premier chapitre véritablement
     nouveau de l'année. */
  rangConseille: 3,

  /* Attendus de fin d'année de première générale, spécialité mathématiques
     (programme de 2019), partie « Algèbre », sous-partie « Équations,
     fonctions polynômes du second degré ».

     CE CHAPITRE PRÉPARE DIRECTEMENT LA TERMINALE. Les lignes ci-dessous sont
     écrites pour être lues par la session qui traitera la terminale : ce que
     l'élève doit maîtriser EN SORTIE, et sur quoi la terminale s'appuiera sans
     le réexpliquer. Concrètement, la terminale mobilisera le signe d'un
     trinôme dans toute étude de convexité (signe de $f''$, qui est un trinôme
     dès que $f$ est un polynôme de degré 4) et dans toute étude de variations
     d'une fonction rationnelle ou exponentielle-polynôme. Un élève qui sort de
     première sans savoir factoriser et sans lire le signe d'un trinôme de tête
     ne pourra pas suivre ces chapitres-là. */
  attendus: [
    "Calculer le discriminant d'un trinôme du second degré et en déduire le nombre de racines réelles",
    "Résoudre une équation du second degré, y compris après l'avoir ramenée à la forme $ax^2+bx+c=0$",
    "Factoriser un trinôme sous la forme $a(x-x_1)(x-x_2)$ lorsque le discriminant est positif",
    "Déterminer les coordonnées du sommet d'une parabole et reconnaître s'il s'agit d'un maximum ou d'un minimum",
    "Passer de la forme développée à la forme canonique et interpréter cette dernière comme un extremum",
    "Modéliser une situation concrète par une équation du second degré et interpréter les deux racines obtenues"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Le discriminant, la résolution, la factorisation, le sommet et le lien entre le signe de $a$ et " +
        "le sens de la parabole sont tous au programme de première.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord le statut des racines <strong>non entières</strong>. Toutes les tâches de la banque sont " +
        "construites pour que $\\sqrt{\\Delta}$ tombe juste et que les racines soient des entiers : c'est un " +
        "choix qui rend le calcul lisible, mais qui donne une image fausse du cas général. Une racine " +
        "irrationnelle est parfaitement au programme, et il est utile de traiter au moins un exemple " +
        "où la réponse s'écrit $\\dfrac{3+\\sqrt{5}}{2}$ et reste sous cette forme — sans valeur " +
        "décimale approchée, qui n'est pas la réponse.<br/><br/>" +
        "Ensuite le lien avec le <strong>chapitre du signe</strong> (ch. 4). Ce chapitre-ci s'arrête aux " +
        "racines ; il ne dit rien du signe du trinôme entre elles et hors d'elles. L'élève qui demande " +
        "« et entre les deux racines, c'est positif ou négatif ? » pose exactement la question du " +
        "chapitre suivant : c'est une bonne occasion de l'annoncer plutôt que d'y répondre tout de " +
        "suite.<br/><br/>" +
        "Enfin le cas $\\Delta < 0$. Dire « pas de solution » est correct <strong>dans $\\mathbb{R}$</strong>, " +
        "et c'est tout ce qu'exige le programme. Les nombres complexes n'existent pas en première et " +
        "n'existeront pas davantage en terminale générale : inutile de promettre à l'élève que « plus " +
        "tard, il y en aura quand même », promesse qui n'est tenue qu'en enseignement de spécialité " +
        "post-bac ou en maths expertes.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre
       (2026-09-14), APRÈS l'élargissement de la banque : un renvoi écrit
       contre l'ancien tirage aurait été décalé par les nouveaux rangs. */
  erreurs: [
    {
      titre: "Perdre un signe dans le calcul du discriminant",
      eleve: "Pour $2x^2 - 8x - 1$, l'élève écrit $\\Delta = -8^2 - 4\\times 2\\times 1 = -64 - 8 = -72$ et " +
             "conclut qu'il n'y a pas de solution, là où $\\Delta = 64 + 8 = 72$.",
      cause: "Deux fautes de signe indépendantes se cumulent, et chacune a sa propre origine. La " +
             "première est typographique : $-3^2$ et $(-3)^2$ s'écrivent presque pareil, et la " +
             "convention qui donne $-9$ au premier n'a jamais été un obstacle avant, faute " +
             "d'occasion. La seconde est plus profonde : l'élève recopie $c = 1$ au lieu de $c = -1$ " +
             "parce qu'il lit les coefficients sur l'expression <strong>écrite</strong>, où le signe " +
             "moins est un opérateur entre deux termes, alors que la formule les demande " +
             "<strong>signés</strong>, chacun avec son moins attaché.<br/><br/>" +
             "Ce n'est donc pas de l'étourderie : c'est un changement de lecture de l'écriture " +
             "algébrique que personne ne lui a demandé d'opérer explicitement.",
      remede: "Ne pas commencer par recommander « d'être attentif aux signes » : l'élève l'est déjà, et " +
              "ce conseil ne lui donne aucun geste.<br/><br/>" +
              "Imposer pendant deux séances une <strong>étape d'identification écrite séparément</strong>, " +
              "avant tout calcul : trois lignes, « $a = \\ldots$ », « $b = \\ldots$ », « $c = \\ldots$ », " +
              "avec obligation d'écrire le signe même quand il est positif. L'élève qui écrit " +
              "« $c = -1$ » sur sa propre ligne ne le perd plus ensuite ; celui qui saute l'étape le " +
              "perd systématiquement.<br/><br/>" +
              "Exiger ensuite les <strong>parenthèses de substitution</strong> : $\\Delta = (-3)^2 - 4 " +
              "\\times 2 \\times (-1)$. Faire remarquer que les parenthèses ne sont pas une décoration " +
              "de professeur : elles disent que le nombre entier, signe compris, prend la place de la " +
              "lettre.<br/><br/>" +
              "Une vérification rapide aide enfin à attraper le cas le plus dangereux : quand $a$ et " +
              "$c$ sont de signes contraires, $-4ac$ est positif, donc $\\Delta$ est forcément positif " +
              "et il y a forcément deux racines. Un élève qui annonce $\\Delta < 0$ dans cette " +
              "situation sait, sans recalculer, qu'il doit reprendre.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), dans l'ORDRE DES
         CHAPITRES DE `DATA_FILES` et non dans l'ordre alphabétique du dossier :
         le second degré est le chapitre 4, donc sa graine est 20260816+3, et
         le tirage n'est pas celui qu'on obtient en classant les fichiers par
         nom. Un premier jeu de renvois écrit contre le tirage alphabétique
         était entièrement décalé.

         L'exercice 6 porte sur $2x^2 - 8x + 2$ et ne demande QUE le
         discriminant : l'élève ne peut pas masquer une faute de signe derrière
         une résolution qui tomberait juste par ailleurs. Le $b$ négatif à
         élever au carré y est bien présent, qui est la moitié du piège.

         Réserve honnête : dans ce tirage-ci, les trois exercices de la tâche
         « delta » (6, 12 et le supplément) ont tous un $c$ positif, si bien
         que la seconde moitié du piège — reporter un $c$ négatif dans $-4ac$ —
         n'est travaillée par aucun d'eux. Le renvoi reste juste sur la
         compétence visée, mais l'enseignant gagnera à compléter d'un exemple
         à $c$ négatif de son cru. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Ne donner qu'une seule solution",
      eleve: "Pour $x^2 = 9$, l'élève écrit $x = \\sqrt{9} = 3$ et s'arrête là, sans voir que $-3$ " +
             "convient aussi.",
      cause: "L'élève applique une règle qui a toujours marché : « pour trouver $x$, j'annule " +
             "l'opération ». Soustraire annule ajouter, diviser annule multiplier, et la racine " +
             "carrée annule le carré. Sauf que les trois premières opérations sont " +
             "<strong>réversibles</strong> et que le carré ne l'est pas : deux nombres différents ont " +
             "le même carré, et aucune fonction ne peut les rendre tous les deux.<br/><br/>" +
             "Le renforcement vient de la calculatrice, qui ne rend jamais qu'un seul nombre, et de " +
             "toute la scolarité antérieure, où une équation avait une réponse et une seule. Ce n'est " +
             "pas la règle du carré qui manque : c'est l'idée qu'une question puisse avoir deux " +
             "réponses toutes les deux justes.",
      remede: "Attaquer l'unicité elle-même, pas la technique.<br/><br/>" +
              "Partir du schéma « Pourquoi $x^2 = 9$ a deux solutions et non une », qui trace la " +
              "courbe de $y = x^2$ et la droite horizontale de hauteur $9$. Faire glisser le doigt le " +
              "long de la droite et compter les rencontres : il y en a deux, et l'élève les voit " +
              "toutes les deux avant qu'on ait prononcé le mot « solution ».<br/><br/>" +
              "Poser ensuite la question qui tranche : « combien de nombres ont pour carré $9$ ? » " +
              "plutôt que « que vaut la racine de $9$ ? ». Les deux questions ont des réponses " +
              "différentes, et c'est la première qui correspond à l'équation posée.<br/><br/>" +
              "Faire enfin remarquer que le discriminant compte les solutions <strong>avant</strong> " +
              "de les calculer : c'est précisément parce que ce nombre existe qu'on sait combien en " +
              "chercher. Un élève qui calcule $\\Delta$ puis n'écrit qu'une racine se contredit " +
              "lui-même, et il peut s'en apercevoir seul.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 9 porte sur $x^2 - 4x + 3 = 0$ et demande UNIQUEMENT le
         nombre de solutions, sans les calculer. C'est le bon angle de revers :
         la question ne peut pas se traiter par une technique de résolution,
         elle porte exactement sur le comptage, et la réponse attendue est
         $2$ — un élève qui n'écrit jamais qu'une solution ne peut pas la
         produire.

         On préfère le 9 au 1, qui est de la même tâche mais tire le cas
         $\Delta < 0$ : ce cas-là ne dérange pas l'erreur visée, puisqu'il n'y
         a alors aucune solution à oublier. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Résoudre une équation qui n'est pas encore sous la forme « $=0$ »",
      eleve: "Pour trouver à quels instants une balle de hauteur $h(t) = -5t^2 + 35t + 5$ atteint " +
             "$65$ m, l'élève calcule directement $\\Delta$ sur les coefficients $-5$, $35$ et $5$, " +
             "sans avoir soustrait $65$.",
      cause: "La formule du discriminant a été apprise en même temps qu'un gabarit visuel : trois " +
             "nombres alignés, un $x^2$, un $x$, une constante. Dès que l'élève reconnaît ce gabarit, " +
             "il applique. Ce qui manque n'est pas la formule mais sa <strong>condition " +
             "d'emploi</strong> : $\\Delta$ ne compte les racines que d'une expression comparée à " +
             "zéro, et rien dans l'écriture $-5t^2 + 35t + 5$ ne signale qu'on n'est pas dans ce " +
             "cas.<br/><br/>" +
             "C'est le même mécanisme que l'oubli du facteur dans une dérivée composée : une règle " +
             "correctement retenue, appliquée hors de son domaine, parce que le domaine n'a jamais " +
             "été rendu visible.",
      remede: "Rendre la condition d'emploi impossible à sauter, en séparant nettement deux phrases " +
              "que l'élève confond.<br/><br/>" +
              "Écrire au tableau « résoudre $h(t) = 65$ » et, en dessous, « résoudre $h(t) - 65 = 0$ » " +
              "et demander si ce sont les mêmes solutions. La réponse est oui, et c'est justement ce " +
              "qui rend l'étape indolore : on ne change pas le problème, on change son " +
              "<strong>écriture</strong> pour pouvoir appliquer un outil qui n'accepte qu'une seule " +
              "forme.<br/><br/>" +
              "Imposer ensuite, pendant quelques séances, d'entourer le zéro du membre de droite " +
              "avant d'écrire la moindre lettre grecque. Pas de zéro entouré, pas de discriminant. Le " +
              "geste paraît rituel ; il transforme une condition invisible en quelque chose qu'on " +
              "voit sur sa propre copie.<br/><br/>" +
              "Signaler enfin que le même réflexe resservira au chapitre suivant, où une inéquation " +
              "$f(x) > k$ devra elle aussi être ramenée à $f(x) - k > 0$ avant tout tableau de signe.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 4 pose exactement cette situation — « la balle se trouve à
         $51$ m » pour $h(t) = -5t^2 + 35t + 1$ — et son corrigé commence par la
         ligne de transposition, avant tout calcul de discriminant. C'est la
         tâche « hauteur », ajoutée le 2026-09-14 : elle n'existait pas dans la
         banque d'origine, qui ne tirait qu'une seule tâche, déjà écrite sous
         la forme « = 0 ». C'est le seul exercice de cette tâche dans les douze
         numérotés du chapitre. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Rendre l'abscisse du sommet à la place de la valeur de l'extremum",
      eleve: "Interrogé sur le bénéfice maximal d'un atelier modélisé par $f(x) = -2x^2 + 4x + 7$, " +
             "l'élève calcule $x_S = 1$ et annonce « le maximum vaut $1$ », alors que $1$ est la " +
             "production qui réalise ce maximum, dont la valeur est $f(1) = 9$.",
      cause: "L'élève a fait le calcul difficile — celui du sommet — et s'arrête au moment où il " +
             "obtient un nombre. Rien dans la formule $x_S = -\\dfrac{b}{2a}$ ne prévient qu'elle ne " +
             "rend qu'une <strong>coordonnée sur deux</strong>, et l'indice $S$ ne dit pas grand-chose " +
             "à qui ne l'a pas décodé.<br/><br/>" +
             "Il y a plus qu'une étourderie : c'est le même malentendu que « nombre dérivé contre " +
             "image » en dérivation. Un point du plan porte deux nombres, et l'élève n'a pas encore " +
             "l'habitude de se demander lequel des deux la question lui réclame. Dans un contexte " +
             "concret, les deux nombres n'ont d'ailleurs même pas la même unité — des centaines de " +
             "pièces d'un côté, des milliers d'euros de l'autre — ce qui rend la confusion " +
             "repérable, à condition de regarder les unités.",
      remede: "Faire porter la correction sur la <strong>question</strong> plutôt que sur le calcul, " +
              "qui est juste.<br/><br/>" +
              "Exiger que toute réponse à un problème d'optimisation soit rédigée en une phrase " +
              "complète avec ses unités : « le bénéfice est maximal pour $300$ pièces produites, et " +
              "il vaut alors $24\\,000$ euros ». Un élève qui écrit « le maximum est $3$ » ne peut pas " +
              "produire cette phrase sans s'apercevoir qu'il lui manque la moitié de la réponse, et " +
              "que l'unité qu'il a sous la main n'est pas celle qu'on lui demande.<br/><br/>" +
              "Reprendre ensuite le schéma « Le sommet est toujours à mi-chemin entre les racines », " +
              "où le sommet est marqué par un point dont on lit les DEUX coordonnées, $4$ en abscisse " +
              "et $-4$ en ordonnée. Demander laquelle des deux est « le minimum » : la question " +
              "devient concrète dès qu'on désigne un point sur un dessin.<br/><br/>" +
              "Nommer enfin les deux nombres à voix haute et systématiquement : « la valeur QUI donne " +
              "le maximum » et « la valeur DU maximum ». Deux formulations différentes pour deux " +
              "nombres différents.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 10 donne l'abscisse du sommet ($x_S = 1$) et demande
         explicitement la VALEUR de l'extremum, $f(1)$. L'élève ne peut pas
         répondre en recopiant l'abscisse : elle lui est fournie dans l'énoncé,
         donc la seule réponse possible est l'autre nombre. C'est la tâche
         « extremum », ajoutée le 2026-09-14 pour ce diagnostic précis.
         L'exercice 5 est son jumeau et convient aussi bien.

         Ce renvoi doit rester distinct de celui de la première erreur : deux
         remédiations d'une même fiche qui pointent le même exercice sont
         refusées par scripts/manuel/tests/renvois-1re.test.js. */
      exercice: { type: "exercice", n: 10 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     L'évaluation porte bien CINQ questions pour un total de DIX points
     (2 points chacune), vérifié sur le tirage réel le 2026-09-14 : aucune
     correction n'a été nécessaire de ce côté.

     Q1 calculer le discriminant de $2x^2 - 7x + 3$ : application directe de la
        formule, avec un $b$ négatif à élever au carré. C'est « calculer », et
        rien d'autre — aucune décision n'est laissée à l'élève.
     Q2 résoudre la même équation et donner la plus grande racine : de nouveau
        une application de formule, sur un discriminant déjà obtenu. C'est
        « calculer ». Les deux premières questions sont volontairement de la
        même compétence : elles forment une progression technique, et
        l'étiqueter autrement serait habiller une répétition.
     Q3 dire ce qu'admet $x^2 + 2x + 5 = 0$ : l'élève calcule un discriminant,
        constate qu'il est négatif, et doit en TIRER une conclusion sur
        l'existence des solutions — le calcul ne donne pas la réponse, il donne
        un signe dont il faut déduire autre chose. C'est « raisonner ».
     Q4 reconnaître la forme factorisée de $x^2 - 6x + 8$ parmi quatre
        propositions : l'élève passe de l'écriture développée à l'écriture
        factorisée, c'est-à-dire d'un registre d'écriture à un autre pour le
        même objet. C'est « représenter » — et c'est la seule question de
        l'évaluation où le changement de registre est le travail demandé.
     Q5 abscisse du sommet de $f(x) = -3x^2 + 12x - 7$ : application de
        $x_S = -\dfrac{b}{2a}$, avec un $a$ négatif. C'est « calculer ».

     « Chercher » et « communiquer » ne sont pas déclarées ici : aucune des cinq
     questions ne demande d'explorer une piste sans méthode donnée, ni de
     rédiger une explication — les questions 3 et 4 sont à choix multiples,
     donc sans rédaction. Les deux compétences sont portées par d'autres
     chapitres du niveau, où les énoncés ont été écrits pour cela.

     « Modéliser » n'y figure pas non plus, et c'est le point dont je suis le
     moins satisfait : le chapitre s'y prête particulièrement — la banque
     compte désormais une tâche entière de mise en équation — mais aucune des
     cinq questions de l'évaluation ne part d'une situation concrète. Y
     remédier demanderait de RÉÉCRIRE une question, pas de renommer une
     étiquette, et l'évaluation étant déjà conforme (cinq questions, dix
     points), je ne l'ai pas fait de ma propre initiative. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "représenter", "modéliser"]
  }
};
