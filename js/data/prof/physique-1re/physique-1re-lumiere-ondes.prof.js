/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-lumiere-ondes.prof.js
   Fiche professeur du chapitre « La lumière : modèle ondulatoire » (première
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 9, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   QUINZE énoncés tirés seulement, dont 12 numérotés et 3 en banque
   supplémentaire — c'est, après lewis (7), le chapitre le plus pauvre du
   niveau. La banque est donc bornée à trois : un renvoi type:"supplement" y
   est valide pour n=1, 2 ou 3, et refusé au-delà.

   Deux moules, mais TRÈS déséquilibrés, et c'est le fait dominant du
   chapitre :
     - moule A (largeur de tache, $L = 2D\lambda/a$) : TROIS exercices
       seulement — 1, 3, 5 ;
     - moule B (écart angulaire, $\theta = \lambda/a$) : NEUF exercices —
       2, 4, 6, 7, 8, 9, 10, 11, 12 — plus les trois suppléments.
   Autrement dit, la question de la tache observée sur l'écran (qui est la
   grandeur réellement mesurable au laboratoire) n'est travaillée que par un
   cinquième du chapitre. L'erreur 4 en tire les conséquences.

   Fait remarquable et exploité ci-dessous : le moule B tire deux fois la MÊME
   réponse (2,17e-3 rad) sur deux énoncés distincts — l'exercice 6
   (lambda = 650 nm, a = 0,30 mm) et l'exercice 12 (mêmes valeurs). Et
   l'exercice 8 (lambda = 450 nm, a = 0,05 mm) produit 9e-3 rad, la plus forte
   diffraction du corps du chapitre, contre le supplément S1 (400 nm,
   0,50 mm) qui produit 0,8e-3 rad, la plus faible — un rapport de onze entre
   les deux extrêmes, exploitable pour l'erreur 2.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-lumiere-ondes"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     ch. 9 (Ondes mécaniques) : RETENU, et c'est le prérequis structurant du
     chapitre. Tout y repose sur un transfert : la diffraction est présentée
     comme « un phénomène caractéristique DES ONDES », et c'est précisément
     parce que l'élève a vu une onde mécanique se comporter ainsi qu'observer
     le même comportement sur la lumière constitue une PREUVE de son caractère
     ondulatoire. Sans le chapitre 9, l'argument central du chapitre s'effondre :
     la diffraction devient une propriété bizarre de la lumière, au lieu d'être
     la signature d'une famille de phénomènes déjà connue. La notion de
     longueur d'onde vient elle aussi de là, où elle a été construite sur du
     concret (une corde, l'eau) avant d'être appliquée à quelque chose qu'on ne
     peut pas voir osciller.

     ch. 2 (Champ électrostatique) : ÉCARTÉ, bien que le cours qualifie la
     lumière d'« onde électromagnétique ». Le mot est employé une fois, sans
     être exploité : aucune ligne du chapitre ne mobilise $\vec{E}$, aucune
     formule ne relie le champ électrique à la lumière. Le déclarer serait
     abusif.

     ch. 3 (Le mouvement et ses descriptions) : ÉCARTÉ, aucun lien — la
     diffraction ne met en jeu ni vecteur vitesse ni trajectoire, et l'optique
     géométrique (les rayons rectilignes) n'est invoquée que pour dire qu'elle
     ne prédit PAS l'étalement observé. */
  prerequis: [9],

  /* Rang conseillé (2026-09-17) : rang 10, celui du livre.

     Immédiatement après le chapitre 9, et le lien est ici plus fort que dans
     n'importe quelle autre paire du niveau : le raisonnement du chapitre est
     un TRANSFERT, et un transfert exige que la source soit fraîche. Un élève
     qui a oublié ce qu'est une onde mécanique ne peut pas comprendre en quoi
     la diffraction de la lumière « prouve » quoi que ce soit — il enregistrera
     une formule de plus.

     Le placer avant le 9 est impossible. Le placer beaucoup plus tard est
     techniquement permis mais détruirait le bénéfice principal du chapitre.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : les <strong>puissances de dix
     négatives</strong>, et c'est ici que tout se joue. Le chapitre fait
     cohabiter en permanence des nanomètres ($10^{-9}$), des millimètres
     ($10^{-3}$) et des mètres, dans un même quotient. Aucun vecteur, aucune
     dérivée, aucune trigonométrie (l'approximation des petits angles permet de
     rester sur un simple rapport). Le rang 10 ne pose donc aucune difficulté
     de calendrier mathématique : à ce stade de l'année, la notation
     scientifique est censée être solide — et si elle ne l'est pas, ce chapitre
     le révélera brutalement (voir l'erreur 1). */
  rangConseille: 10,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Ondes et signaux ». Repris aux mots du
     programme. */
  attendus: [
    "Caractériser le phénomène de diffraction dans des situations variées et identifier les situations physiques où il est significatif",
    "Exploiter la relation exprimant l'angle caractéristique de diffraction en fonction de la longueur d'onde et de la taille de l'ouverture",
    "Décrire et mettre en œuvre une expérience de diffraction de la lumière par une fente"
  ],

  note: "La diffraction, l'écart angulaire $\\theta = \\lambda/a$, la largeur de la tache " +
        "observée et la preuve du caractère ondulatoire de la lumière sont au programme de " +
        "spécialité de première : le chapitre ne déborde pas. Les interférences ne sont pas " +
        "traitées.<br/><br/>" +
        "<strong>Un prérequis de PREMIÈRE, déclaré, et le lien est plus fort qu'une simple " +
        "dépendance.</strong> Le chapitre s'appuie sur le chapitre 9 (« Ondes mécaniques ») — " +
        "cela, la colonne « S'appuie sur » le montre. Mais il faut insister : ce n'est pas un " +
        "prérequis de calcul, c'est un prérequis d'<strong>argument</strong>. Tout le chapitre " +
        "repose sur un raisonnement par transfert — « la diffraction est un comportement " +
        "d'ondes ; la lumière diffracte ; donc la lumière est une onde ». Si le chapitre 9 est " +
        "loin ou mal assuré, cet argument ne passe pas et il ne reste qu'une formule. Prévoir " +
        "cinq minutes de rappel explicite en ouverture, avec la cuve à ondes si " +
        "possible.<br/><br/>" +
        "<strong>Le vrai obstacle est la notation scientifique.</strong> Le chapitre fait " +
        "cohabiter dans un même quotient des <strong>nanomètres</strong> ($10^{-9}$ m) et des " +
        "<strong>millimètres</strong> ($10^{-3}$ m), soit six ordres de grandeur d'écart, et le " +
        "résultat s'exprime en $10^{-3}$ radian. Un élève dont les puissances de dix ne sont pas " +
        "sûres échouera ici, non par incompréhension de la physique mais par accumulation de " +
        "conversions. C'est aussi une occasion : à ce stade de l'année, le chapitre sert de " +
        "révélateur.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas — ce " +
        "chapitre est pauvre, il faut le savoir.</strong> Le tirage ne produit que " +
        "<strong>quinze</strong> énoncés (douze numérotés, trois en banque), contre vingt à " +
        "quarante-deux ailleurs dans le niveau. Et ils sont très déséquilibrés : " +
        "<strong>neuf</strong> exercices sur douze calculent l'écart angulaire " +
        "$\\theta = \\lambda/a$, <strong>trois seulement</strong> (les exercices 1, 3 et 5) " +
        "calculent la largeur $L$ de la tache sur l'écran. Or c'est $L$ que l'on mesure " +
        "réellement au laboratoire — $\\theta$ ne se mesure jamais directement. Prévoir un " +
        "complément sur ce point.<br/><br/>" +
        "Deux autres absences. Aucun exercice ne fait varier <strong>un seul paramètre</strong> " +
        "pour observer l'effet : chaque énoncé est un calcul isolé, jamais une comparaison, " +
        "alors que « plus la fente est étroite, plus la lumière s'étale » est le cœur du premier " +
        "attendu officiel. Et aucun exercice n'exploite la relation à l'<strong>envers</strong> " +
        "— mesurer $L$ pour en déduire $\\lambda$ ou $a$, qui est pourtant l'usage réel de la " +
        "diffraction en travaux pratiques (c'est ainsi qu'on mesure l'épaisseur d'un cheveu). " +
        "Ces travaux sont à construire ; le manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Diviser des nanomètres par des millimètres sans convertir",
      eleve: "Pour $\\lambda = 589$ nm et $a = 0{,}10$ mm, l'élève calcule " +
             "$589/0{,}10 = 5\\,890$ et annonce un écart angulaire de $5\\,890$ rad, ou " +
             "$5{,}89$ après avoir « arrangé » le résultat. La bonne réponse est " +
             "$5{,}89\\times10^{-3}$ rad.",
      cause: "Le quotient $\\lambda/a$ met en présence deux longueurs séparées par " +
             "<strong>six ordres de grandeur</strong>, exprimées dans deux préfixes " +
             "différents — c'est la configuration la plus piégeuse de toute l'année. L'élève " +
             "voit deux longueurs, se dit qu'elles « se simplifient », et divise les nombres " +
             "bruts. Il n'a en outre aucun repère sur ce qu'est un radian : $5\\,890$ rad ne lui " +
             "paraît pas plus absurde que $0{,}00589$ rad, alors que c'est physiquement " +
             "impossible (un tour complet vaut $6{,}28$ rad). L'énoncé du livre atténue le " +
             "problème en demandant le coefficient de $10^{-3}$, mais l'élève doit d'abord " +
             "trouver l'ordre de grandeur pour savoir quoi répondre.",
      remede: "Imposer la <strong>double conversion écrite</strong>, sur deux lignes séparées, " +
              "avant toute division — c'est le geste qui supprime l'erreur, et il n'y en a pas " +
              "d'autre : « $\\lambda = 589$ nm $= 5{,}89\\times10^{-7}$ m » puis " +
              "« $a = 0{,}10$ mm $= 1{,}0\\times10^{-4}$ m ». Les deux longueurs sont alors dans " +
              "la même unité, et la division devient sûre.<br/><br/>" +
              "Faire calculer l'<strong>exposant séparément</strong>, comme au chapitre 1 : " +
              "$10^{-7}/10^{-4} = 10^{-3}$. L'élève sait alors AVANT de calculer que la réponse " +
              "sera de l'ordre du millième de radian, et il ne peut plus accepter $5\\,890$. " +
              "Séparer le coefficient et l'exposant est ici la seule méthode fiable.<br/><br/>" +
              "Donner enfin le <strong>repère physique</strong> qui manque au chapitre : un " +
              "écart angulaire de diffraction vaut typiquement quelques millièmes de radian, " +
              "soit une fraction de degré. C'est un très petit angle — et c'est justement " +
              "pourquoi il faut un écran à plusieurs mètres pour que la tache devienne visible. " +
              "Une réponse supérieure à $1$ rad est fausse avant d'être vérifiée.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 9) : l'exercice 2 donne lambda = 589 nm,
         a = 0,10 mm, réponse 5,89e-3 rad. Ce tirage est le meilleur support du
         chapitre pour cette erreur, pour une raison de lisibilité : le
         coefficient de la réponse (5,89) est EXACTEMENT celui de la longueur
         d'onde en nanomètres (589), parce que a vaut 0,10 mm — le rapport ne
         porte que sur les puissances de dix. L'élève voit donc, sur sa propre
         copie, que tout le travail était dans l'exposant et que le
         « calcul » proprement dit n'existait pas. Le même effet se lit sur
         l'exercice 7 (633 nm, 0,10 mm, réponse 6,33e-3), qui peut servir de
         second entraînement immédiat. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire qu'une fente plus large diffracte davantage",
      eleve: "L'élève affirme qu'« en ouvrant la fente, la tache s'élargit », ou qu'« un gros " +
             "obstacle diffracte plus qu'un petit ». Il prédit que la diffraction sera maximale " +
             "avec une ouverture de plusieurs centimètres.",
      cause: "Confusion entre la <strong>taille de l'ouverture</strong> et la " +
             "<strong>taille du faisceau qui en sort</strong> — deux choses que l'expérience " +
             "courante lie effectivement : une porte plus large laisse passer plus de lumière et " +
             "une tache plus grande sur le sol. Ce que l'élève n'a pas encore : cette tache-là " +
             "n'est pas une figure de diffraction, c'est l'ombre géométrique. La relation " +
             "$\\theta = \\lambda/a$ est en outre une proportionnalité " +
             "<strong>inverse</strong>, et les relations inverses sont systématiquement lues " +
             "comme directes quand l'intuition ne les contredit pas.",
      remede: "Faire lire la formule comme une <strong>fraction</strong>, ce qui est le plus " +
              "économique : $a$ est au <strong>dénominateur</strong>. Quand un dénominateur " +
              "augmente, le résultat diminue. C'est une lecture mathématique qui ne demande " +
              "aucune intuition physique et qui ne tombe jamais en défaut.<br/><br/>" +
              "Administrer ensuite le <strong>cas limite</strong>, qui réconcilie l'élève avec " +
              "son expérience au lieu de la lui refuser : avec une ouverture très grande devant " +
              "$\\lambda$ — une fenêtre, une porte — la diffraction devient " +
              "<strong>imperceptible</strong>, et la lumière se propage en ligne droite comme le " +
              "prédit l'optique géométrique. C'est exactement ce que l'élève observe tous les " +
              "jours, et c'est <strong>cohérent</strong> avec la formule. Son intuition n'était " +
              "pas fausse, elle portait sur un autre phénomène.<br/><br/>" +
              "Faire enfin <strong>l'expérience du variateur</strong>, si le matériel le permet : " +
              "un laser, une fente réglable, et l'on resserre progressivement. La tache s'étale " +
              "à mesure qu'on ferme. C'est spectaculaire, contre-intuitif, et cela se retient " +
              "pour de bon — beaucoup mieux qu'une phrase de cours.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         lambda = 450 nm, a = 0,05 mm, réponse theta = 9e-3 rad. C'est le plus
         petit a du chapitre et, par conséquent, la plus FORTE diffraction des
         douze exercices numérotés. Le renvoi vaut par la comparaison qu'il
         permet, et le tirage la rend possible dans le corps même du
         chapitre : l'exercice 4 tire a = 0,50 mm (avec lambda = 750 nm,
         pourtant bien plus grande) et ne donne que 1,5e-3 rad. Fente dix fois
         plus large, diffraction six fois plus faible, et cela MALGRÉ une
         longueur d'onde presque doublée. Deux exercices mis côte à côte
         démolissent l'erreur sans un mot de cours. Le supplément S1
         (400 nm, 0,50 mm, 0,8e-3 rad) prolonge la série vers l'extrême le plus
         faible du chapitre, si l'on veut un troisième point — la banque de ce
         chapitre ne compte que TROIS suppléments, S1 à S3. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Croire que la diffraction contredit la propagation rectiligne",
      eleve: "L'élève conclut que « la lumière ne va pas en ligne droite », et en déduit que " +
             "l'optique géométrique du collège était fausse. Ou, à l'inverse, il refuse la " +
             "diffraction parce qu'« on voit bien que les rayons sont droits ».",
      cause: "L'élève traite les deux modèles comme deux <strong>affirmations concurrentes</strong> " +
             "dont une seule pourrait être vraie — réflexe légitime, puisque c'est ainsi que " +
             "fonctionne la logique ordinaire. Ce qui lui manque, c'est l'idée qu'un modèle a un " +
             "<strong>domaine de validité</strong>, et que deux modèles peuvent coexister en se " +
             "partageant les situations. C'est un obstacle épistémologique, pas un défaut de " +
             "compréhension de la diffraction : il porte sur ce qu'est un modèle scientifique.",
      remede: "Poser explicitement la <strong>règle de partage</strong>, en une phrase que l'élève " +
              "peut appliquer : quand l'ouverture est grande devant $\\lambda$, l'optique " +
              "géométrique suffit et la lumière se propage en ligne droite ; quand l'ouverture " +
              "devient comparable à $\\lambda$, il faut le modèle ondulatoire. Les deux modèles " +
              "ne se contredisent pas, ils se relaient.<br/><br/>" +
              "Saisir l'occasion de dire ce qu'est un <strong>modèle</strong> en physique, " +
              "puisque c'est un des rares chapitres de l'année où la question se pose " +
              "naturellement : un modèle n'est ni vrai ni faux, il est " +
              "<strong>valable dans un domaine</strong>. L'optique géométrique reste parfaitement " +
              "efficace pour tracer les rayons d'une lentille ou calculer un miroir — personne ne " +
              "conçoit un télescope avec le modèle ondulatoire.<br/><br/>" +
              "Montrer enfin en quoi cela rend l'expérience de diffraction " +
              "<strong>décisive</strong>, ce qui est le vrai contenu du chapitre : l'optique " +
              "géométrique ne prédit <strong>aucun</strong> étalement, le modèle ondulatoire en " +
              "prédit un, et l'expérience tranche. C'est un exemple parfait de la façon dont la " +
              "physique progresse — non pas en abandonnant l'ancien modèle, mais en trouvant la " +
              "situation où les deux ne disent pas la même chose.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des quinze énoncés
         tirés ne met les deux modèles en présence. Les deux moules sont des
         calculs purs (theta = lambda/a, L = 2D theta) qui SUPPOSENT le modèle
         ondulatoire acquis sans jamais le discuter ni le confronter à
         l'optique géométrique. La question 2 de l'évaluation porte sur la
         preuve du caractère ondulatoire, mais une remédiation ne renvoie
         jamais vers l'évaluation notée (règle du projet). L'erreur est
         d'ailleurs de nature épistémologique : elle ne se remédie pas par un
         exercice de calcul, mais par une discussion — le remède en donne le
         contenu. */
      exercice: null
    },
    {
      titre: "Confondre l'écart angulaire et la largeur de la tache",
      eleve: "L'élève annonce que « la tache mesure $6{,}33\\times10^{-3}$ m », en donnant " +
             "l'écart angulaire comme une longueur. Ou bien il calcule $L = D\\theta$ en oubliant " +
             "le facteur $2$, et trouve la moitié de la bonne réponse. Certains oublient que $L$ " +
             "dépend de la distance $D$ à l'écran.",
      cause: "Le tirage du chapitre est en cause autant que l'élève, et il faut le dire : " +
             "<strong>neuf exercices sur douze</strong> s'arrêtent à $\\theta$. L'élève associe " +
             "donc « diffraction » à « calculer $\\theta$ » et ne rencontre que trois fois la " +
             "grandeur réellement observable. S'ajoute une difficulté conceptuelle : $\\theta$ " +
             "est un <strong>demi-angle</strong>, ce qui explique le facteur $2$ dans " +
             "$L = 2D\\theta$ — le faisceau s'étale de $\\theta$ de chaque côté de l'axe. Ce " +
             "« demi » n'est jamais dit à voix haute, et le facteur $2$ devient un détail " +
             "arbitraire qu'on oublie.",
      remede: "Faire <strong>dessiner le triangle</strong>, une fois, proprement : la fente au " +
              "sommet, l'axe horizontal, l'écran à la distance $D$, et le faisceau qui s'ouvre " +
              "de $\\theta$ <strong>au-dessus</strong> et de $\\theta$ " +
              "<strong>au-dessous</strong> de l'axe. Le facteur $2$ apparaît alors sur la " +
              "figure, et il cesse d'être une formule à retenir. Sur le dessin, on voit aussi " +
              "immédiatement que $L$ augmente avec $D$ — plus l'écran est loin, plus la tache " +
              "est large.<br/><br/>" +
              "Séparer les deux grandeurs par leurs <strong>unités</strong>, qui tranchent : " +
              "$\\theta$ est un ANGLE, en radians, et il ne dépend que de la fente et de la " +
              "couleur ; $L$ est une LONGUEUR, en mètres ou en centimètres, et elle dépend en " +
              "plus de la distance à l'écran. Un résultat en radians ne peut jamais répondre à " +
              "« quelle est la largeur de la tache ? ».<br/><br/>" +
              "Rappeler enfin lequel des deux se <strong>mesure</strong> réellement, ce qui " +
              "remet les choses dans l'ordre : au laboratoire, on mesure $L$ avec une règle sur " +
              "l'écran et on mesure $D$ au mètre ruban. $\\theta$ ne se mesure jamais " +
              "directement — on le CALCULE à partir de $L$ et de $D$. C'est d'ailleurs ainsi " +
              "qu'on remonte à l'épaisseur $a$ d'un cheveu, qui est l'application la plus " +
              "parlante du chapitre.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne
         lambda = 500 nm, a = 0,05 mm, D = 4,0 m, réponse L = 8 cm. Le choix
         est contraint — seuls TROIS des douze exercices numérotés (1, 3 et 5)
         calculent une largeur de tache — et c'est le meilleur des trois : sa
         réponse est un nombre entier et « physique » (8 cm, une tache qu'on
         voit et qu'on mesure à la règle), là où l'exercice 1 donne 4,13 cm et
         l'exercice 3 seulement 0,2 cm — deux millimètres, difficiles à
         visualiser. L'exercice 5 permet en outre un aller-retour immédiat avec
         l'exercice 8 du moule B, qui tire le MÊME a = 0,05 mm : theta y vaut
         9e-3 rad pour lambda = 450 nm, contre 10e-3 rad ici pour 500 nm. La
         proximité des deux angles, et la différence de nature des deux
         réponses (un angle, une longueur), est exactement ce qu'il faut pour
         installer la distinction. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\lambda = 500$ nm, $a = 0{,}25$ mm : calculer $\theta$. La relation
          est donnée au cours et s'applique dans le sens direct ; les
          conversions la rendent longue, pas d'une autre nature : « réaliser ».
     Q2 — l'observation de la diffraction prouve quoi ? Rien à calculer ; il
          faut juger quatre conclusions tirées d'une même observation et
          écarter « la lumière ne se propage pas en ligne droite dans le vide »,
          qui est l'erreur 3 de cette fiche : « valider ».
     Q3 — $\theta = 4{,}0\times10^{-3}$ rad et $D = 1{,}5$ m : calculer $L$.
          Sens direct de $L = 2D\theta$, l'angle étant DONNÉ : « réaliser ».
     Q4 — pour une diffraction plus marquée, que faut-il faire ? Il faut juger
          quatre actions concurrentes et reconnaître le sens de variation d'une
          relation inverse — c'est exactement l'erreur 2 de cette fiche, et le
          distracteur « élargir la fente » y correspond : « valider ».
     Q5 — rapport $\theta_R/\theta_V$ pour deux couleurs à travers la MÊME
          fente. La question ne se résout pas en appliquant deux fois
          $\theta = \lambda/a$ : il faut voir que $a$ se simplifie et que le
          rapport des angles vaut celui des longueurs d'onde. C'est un
          raisonnement sur la relation, pas une exécution : « analyser ».

     « Valider » est mobilisé DEUX fois, et honnêtement : ce chapitre est,
     avec travail-energie, celui où le jugement porte le plus — sur la
     vraisemblance d'un ordre de grandeur, sur le sens d'une variation inverse,
     sur la portée d'une preuve expérimentale. C'est aussi le signe que le
     chapitre est plus conceptuel qu'il n'en a l'air.
     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. */
  competences: {
    evaluation: ["réaliser", "valider", "réaliser", "valider", "analyser"]
  }
};
