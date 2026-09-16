/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-oxydoreduction.prof.js
   Fiche professeur du chapitre « Oxydoréduction et piles électrochimiques »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 7 : 30 énoncés tirés, dont 12 numérotés et 18 en
   banque supplémentaire. Deux moules strictement alternés :
     - moule QUANTITÉ D'ÉLECTRICITÉ (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : I et
       dt donnés, on demande $Q = I\Delta t$ en coulombs ;
     - moule LOI DE FARADAY (exercices PAIRS 2, 4, 6, 8, 10, 12) : I, dt et z
       donnés, on demande $n = I\Delta t/(zF)$ en millimoles.
   Le moule pair est précieux : le tirage couvre z = 1, 2 et 3, ce qui permet
   des renvois précis sur l'oubli de z. En revanche AUCUN exercice ne fait
   intervenir de chimie — pas de demi-équation à écrire, pas de couple à
   identifier, pas de polarité à déterminer, pas de masse déposée à calculer —
   alors que ce sont les deux premiers attendus officiels. C'est ce qui
   contraint les erreurs 3 et 4 à rester sans renvoi, et ce qui rend la
   remarque de la `note` sévère : le chapitre s'intitule « oxydoréduction et
   piles », et ses exercices sont d'électricité pure.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-oxydoreduction"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     ch. 6 (Évolution spontanée d'un système chimique) : RETENU. Une pile ne
     fonctionne que parce que la réaction d'oxydoréduction qu'elle abrite est
     SPONTANÉE — c'est le mot même de la définition D2 du cours (« une réaction
     d'oxydoréduction spontanée »). Or « spontanée » n'a de sens que rapporté
     au critère du chapitre 6 : le système évolue parce que son quotient de
     réaction est loin de la constante d'équilibre. C'est aussi ce qui explique
     qu'une pile s'use : elle s'arrête quand l'équilibre est atteint, c'est-à-
     dire quand $Q_r = K$, et non quand elle « n'a plus d'électricité ». Sans le
     chapitre 6, cette explication est hors de portée et la pile devient une
     boîte noire. La notion de COUPLE, introduite au chapitre 6 sous la forme
     de l'équilibre entre deux espèces, est ici reprise telle quelle.

     ch. 7 (Acides et bases) : ÉCARTÉ, et c'est le candidat le plus discutable
     car les deux chapitres traitent d'un couple ($AH/A^-$ là-bas, $Ox/Red$
     ici) et d'un transfert de particule (un proton, un électron). Le
     parallèle est pédagogiquement précieux et vaut d'être fait en classe —
     mais ce n'est pas une DÉPENDANCE : rien dans ce chapitre-ci n'utilise le
     pH, le $pK_a$, le logarithme ni le diagramme de prédominance. Un élève qui
     n'aurait pas fait le chapitre 7 suivrait celui-ci sans gêne. Le déclarer
     contraindrait l'ordre sans nécessité.

     ch. 5 (Thermodynamique) : ÉCARTÉ malgré la collision de notation sur la
     lettre $Q$ — signalée dans la `note`, mais une collision n'est pas une
     dépendance.
     ch. 1 à 4, 9 à 11 : aucun lien.

     UN PRÉREQUIS ÉLECTRIQUE N'EST PAS DÉCLARABLE : la relation $Q = I\Delta t$
     entre intensité, durée et charge, vue en PREMIÈRE et au collège. Elle
     porte la moitié des exercices sans jamais être redémontrée. Elle est
     traitée dans `note`, qui est imprimée. */
  prerequis: [6],

  /* Rang conseillé (2026-09-17) : rang 8, celui du livre.

     Contrainte dure : ce chapitre doit suivre le chapitre 6, dont il utilise
     la notion de réaction spontanée. Le bloc chimie de la terminale se tient
     donc dans l'ordre 6 -> 7 -> 8, et le livre le respecte déjà.

     Le placer en 8 plutôt qu'en 7 (c'est-à-dire après les acides-bases plutôt
     qu'avant) n'est pas contraint mais fortement recommandé : l'élève arrive
     alors avec une expérience de la notion de couple, acquise sur
     $AH/A^-$, et le passage au couple $Ox/Red$ devient une analogie plutôt
     qu'une nouveauté. Les deux chapitres se répondent, et cet ordre-là est le
     plus économique.

     PRÉREQUIS MATHÉMATIQUE : très léger, une multiplication et une division.
     La seule difficulté réelle est la <strong>notation scientifique</strong> et
     les conversions d'échelle : $F \approx 96\,500$ C/mol face à des quantités
     de matière en millimoles, ce qui fait travailler sur sept ordres de
     grandeur d'écart. Ce n'est pas du calcul, c'est de la lecture de nombre,
     et c'est pourtant là que les copies se perdent. */
  rangConseille: 8,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Identifier les couples oxydant-réducteur mis en jeu et écrire les demi-équations électroniques correspondantes",
    "Modéliser le fonctionnement d'une pile électrochimique et déterminer la polarité de ses électrodes",
    "Relier la quantité d'électricité débitée par une pile à la quantité de matière transformée aux électrodes"
  ],

  note: "Les couples oxydant/réducteur, les demi-équations électroniques, la pile, sa force " +
        "électromotrice et la loi de Faraday sont au programme de spécialité de terminale : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>Deux prérequis comptent, et un seul est visible.</strong> Le chapitre s'appuie sur " +
        "le chapitre 6 (« Évolution spontanée d'un système chimique ») : une pile ne fonctionne que " +
        "parce que la réaction qu'elle abrite est <strong>spontanée</strong>, et c'est aussi ce qui " +
        "explique qu'elle s'use — elle s'arrête quand l'équilibre est atteint, non quand elle " +
        "« n'a plus d'électricité ». Cela, la colonne « S'appuie sur » l'affiche. Mais le chapitre " +
        "suppose aussi acquise la relation <strong>$Q = I \\times \\Delta t$</strong> entre " +
        "intensité, durée et charge, vue en <strong>première</strong> et même au collège, qui porte " +
        "la moitié des exercices sans jamais être redémontrée : un prérequis ne pouvant viser qu'un " +
        "chapitre du même niveau, <strong>rien ne le montrera</strong>.<br/><br/>" +
        "<strong>Attention à une collision de notation, sérieuse dans ce chapitre.</strong> La " +
        "lettre $Q$ désigne ici une <strong>quantité d'électricité</strong>, en coulombs ; au " +
        "chapitre 5 elle désignait un <strong>transfert thermique</strong> en joules, et au " +
        "chapitre 6 le <strong>quotient de réaction</strong>, sans dimension. Trois sens pour une " +
        "lettre en une année, dont deux dans le même bloc chimie : le signaler explicitement au " +
        "début du chapitre évite des confusions en épreuve.<br/><br/>" +
        "<strong>Le prérequis mathématique est léger, mais la lecture des nombres ne l'est " +
        "pas.</strong> Une multiplication et une division suffisent. En revanche le chapitre fait " +
        "cohabiter $F \\approx 96\\,500$ C/mol avec des quantités de matière en " +
        "<strong>millimoles</strong>, soit sept ordres de grandeur d'écart : c'est là que les " +
        "copies se perdent, sur la lecture du résultat et non sur le calcul. Prévoir un repère " +
        "explicite — une pile de laboratoire transforme quelques millimoles, jamais quelques " +
        "moles.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas — et c'est la limite la plus sérieuse du " +
        "chapitre.</strong> Les trente énoncés tirés sont des exercices d'<strong>électricité " +
        "pure</strong> : $Q = I\\Delta t$, ou $n = I\\Delta t/(zF)$. <strong>Aucun</strong> ne " +
        "demande d'écrire une demi-équation, d'identifier un couple, de déterminer la polarité " +
        "d'une électrode, de dire où circulent les électrons, ni de calculer une masse déposée — " +
        "alors que ce sont les deux premiers attendus officiels et l'objet du piège du cours. Le " +
        "nombre $z$ y est toujours <strong>donné</strong> par l'énoncé, jamais déduit d'une " +
        "demi-équation. Prévoir un travail spécifique sur la chimie du chapitre, que le manuel ne " +
        "fournit pas sous forme d'exercice : sans cela, l'élève traversera « Oxydoréduction et " +
        "piles » sans jamais avoir écrit une demi-équation.",

  erreurs: [
    {
      titre: "Oublier le nombre d'électrons échangés dans la loi de Faraday",
      eleve: "Pour $I = 1{,}5$ A pendant $45$ min avec $z = 3$, l'élève écrit " +
             "$n = \\dfrac{Q}{F}$ et annonce $41{,}97$ mmol au lieu de $13{,}99$ mmol : le résultat " +
             "est exactement trois fois trop grand. Il a confondu la quantité d'électricité avec " +
             "la quantité de matière transformée.",
      cause: "La constante de Faraday est présentée comme « la charge d'une mole d'électrons », " +
             "formulation qui suggère une conversion directe entre charge et matière. Mais $F$ " +
             "convertit une charge en moles d'<strong>électrons</strong>, pas en moles " +
             "d'<strong>espèce transformée</strong> — et il faut $z$ électrons pour transformer une " +
             "seule entité. Diviser par $F$ seul, c'est compter les électrons et croire avoir " +
             "compté les atomes. Le piège du cours nomme exactement cette erreur, mais l'élève ne " +
             "le lit qu'après l'avoir commise.",
      remede: "Faire lire la <strong>demi-équation comme une recette</strong>, ce qui rend $z$ " +
              "évident : $Cu^{2+} + 2e^- \\rightarrow Cu$ signifie « il faut DEUX électrons pour " +
              "fabriquer UN atome de cuivre ». Deux fois plus d'électrons que d'atomes : donc si " +
              "l'on a compté les électrons, il faut diviser par deux pour avoir les atomes. C'est " +
              "un raisonnement de proportionnalité, pas une formule.<br/><br/>" +
              "Imposer ensuite un <strong>calcul en deux temps séparés</strong>, écrits sur deux " +
              "lignes distinctes : d'abord $Q = I\\Delta t$ en coulombs, puis " +
              "$n = \\dfrac{Q}{zF}$ en moles. L'exemple résolu du cours procède exactement ainsi. " +
              "Le $z$ oublié se repère alors d'un coup d'œil sur la copie, alors qu'il disparaît " +
              "dans un calcul en une ligne.<br/><br/>" +
              "Donner enfin le <strong>contrôle de sens</strong>, qui rejette l'erreur sans " +
              "refaire le calcul : plus il faut d'électrons par entité, <strong>moins</strong> on " +
              "transforme d'entités avec la même électricité. Un résultat qui ne change pas quand " +
              "$z$ passe de $1$ à $3$ est forcément faux, et un résultat trop grand signale un $z$ " +
              "oublié. Le faire vérifier une fois sur deux exercices de même courant suffit à " +
              "l'installer.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 7) : l'exercice 10 donne I = 1,5 A,
         dt = 45 min, z = 3, réponse 13,99 mmol. C'est le plus grand z du
         tirage, donc celui où l'oubli est le plus spectaculaire : l'élève qui
         divise par F seul trouve 41,97 mmol, exactement le triple. Le tirage
         permet en outre de vérifier le contrôle de sens énoncé dans le
         remède : l'exercice 6 (I = 0,5 A, 30 min, z = 1) donne 9,33 mmol et le
         supplément S2 tire EXACTEMENT les mêmes I et dt avec z = 2, pour
         4,66 mmol — la moitié. Deux énoncés identiques au z près, avec un
         rapport de 2 sur la réponse : la démonstration est dans le livre, il
         suffit de la faire lire. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Oublier de convertir les heures et les minutes en secondes",
      eleve: "Pour $I = 0{,}5$ A pendant $\\Delta t = 2{,}0$ h, l'élève écrit " +
             "$Q = 0{,}5 \\times 2 = 1$ C au lieu de $3\\,600$ C. Le résultat est faux d'un facteur " +
             "$3\\,600$, et l'élève annonce qu'une pile a fait circuler un coulomb en deux heures " +
             "sans que cela l'étonne.",
      cause: "L'ampère est un coulomb <strong>par seconde</strong> : l'information est dans " +
             "l'unité, pas dans le symbole. Les énoncés du chapitre alternent délibérément les " +
             "heures ($2{,}0$ h, $1{,}5$ h, $0{,}5$ h) et les minutes ($60$ min, $45$ min, " +
             "$10$ min), ce qui est réaliste — une pile se décharge en heures, une électrolyse se " +
             "chronomètre en minutes — mais empêche toute routine. L'élève qui a converti une fois " +
             "sans comprendre pourquoi ne convertira pas la suivante.",
      remede: "Faire du <strong>décodage de l'unité</strong> un réflexe, comme au chapitre 5 avec " +
              "le watt : « ampère » se lit « coulomb par seconde ». Si la charge doit sortir en " +
              "coulombs, la durée doit entrer en secondes. C'est la définition de l'ampère, pas une " +
              "consigne supplémentaire.<br/><br/>" +
              "Imposer une <strong>ligne de conversion séparée</strong> avant la formule, sur le " +
              "modèle de l'exemple résolu qui écrit $2{,}0 \\times 3\\,600 = 7\\,200$ s. Deux " +
              "facteurs seulement à retenir : $\\times 60$ pour les minutes, $\\times 3\\,600$ pour " +
              "les heures. Tant que la ligne n'est pas écrite, on n'ouvre pas " +
              "$Q = I\\Delta t$.<br/><br/>" +
              "Donner enfin un <strong>repère d'ordre de grandeur</strong> qui rejette le résultat " +
              "sans le refaire : une pile qui débite pendant des heures fait circuler " +
              "<strong>des milliers</strong> de coulombs. Un coulomb, c'est une seconde à un " +
              "ampère : personne ne monte un dispositif pour cela. Une réponse à un chiffre est " +
              "fausse avant d'être vérifiée.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         I = 0,5 A, dt = 2,0 h, réponse 3 600 C. C'est le premier exercice du
         chapitre, donc celui où le réflexe se prend, et c'est aussi le seul du
         tirage dont les données reproduisent exactement celles de l'exemple
         résolu du cours (0,50 A pendant 2,0 h) : l'élève peut donc confronter
         son calcul à un modèle rédigé, ligne à ligne, y compris la ligne de
         conversion. Le renvoi est choisi pour cela. L'exercice 11
         (I = 1,0 A, dt = 0,5 h, réponse 1 800 C) est l'autre cas piégeux du
         tirage, la durée étant écrite en heures DÉCIMALES : l'élève tenté de
         lire « 0,5 » comme des minutes trouverait 30 C. Les deux se corrigent
         utilement ensemble. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Faire circuler les électrons dans le pont salin ou dans la solution",
      eleve: "Sur un schéma de pile, l'élève trace une flèche d'électrons qui traverse le pont " +
             "salin d'une demi-pile à l'autre. Ou il affirme que « les électrons vont de l'anode à " +
             "la cathode en passant par la solution », sans voir que le circuit extérieur devient " +
             "alors inutile.",
      cause: "L'élève sait que le circuit doit être <strong>fermé</strong>, et il cherche " +
             "légitimement par où passe le retour. Le pont salin est visuellement le chemin le plus " +
             "court, et il le choisit. Le fond du problème est qu'il y a " +
             "<strong>deux porteurs de charge différents</strong> dans une pile : les électrons, " +
             "qui n'existent que dans les métaux, et les ions, qui n'existent que dans les " +
             "solutions. Un électron libre en solution n'existe pas — l'introduction du cours le " +
             "dit d'entrée : « à aucun moment ces électrons n'existent libres en solution ». " +
             "L'élève, lui, imagine un unique courant qui ferait le tour.",
      remede: "Faire tracer le circuit en <strong>deux couleurs</strong>, systématiquement : les " +
              "électrons en rouge dans les fils uniquement, les ions en bleu dans les solutions et " +
              "le pont salin uniquement. Les deux couleurs ne se rencontrent qu'aux " +
              "<strong>électrodes</strong>, et c'est précisément là que la réaction chimique a " +
              "lieu — le relais se fait là, pas ailleurs.<br/><br/>" +
              "Nommer alors le <strong>rôle réel du pont salin</strong>, que l'élève découvre " +
              "souvent tard : il ne transporte pas d'électrons, il fait migrer des " +
              "<strong>ions</strong> pour maintenir l'électroneutralité des deux solutions. Sans " +
              "lui, la demi-pile où se forment des cations se chargerait positivement et la " +
              "réaction s'arrêterait en quelques instants. Le pont salin ne ferme pas le circuit " +
              "des électrons, il ferme le circuit des charges — nuance décisive.<br/><br/>" +
              "Faire enfin poser la <strong>question de bon sens</strong> qui tranche : si les " +
              "électrons pouvaient traverser la solution, à quoi servirait le fil ? Et une pile " +
              "dont les électrons passeraient par l'intérieur serait un court-circuit permanent, " +
              "incapable d'alimenter quoi que ce soit. La fonction de la pile suffit à exclure " +
              "l'erreur.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés tirés sont des exercices d'ÉLECTRICITÉ — I et dt donnés, Q ou
         n demandé. Aucun ne comporte de schéma de pile, aucun ne mentionne le
         pont salin, aucun ne demande où circulent les électrons, aucun ne
         demande de déterminer une polarité. Le fonctionnement de la pile —
         deuxième attendu officiel du chapitre et objet du piège du cours —
         n'est travaillé par AUCUN exercice. Le seul support du livre est la
         question 5 de l'évaluation (rôle du pont salin), mais la règle
         éditoriale du projet interdit de renvoyer vers l'évaluation notée : on
         remédie avant d'évaluer. Le remède s'appuie donc sur le schéma en deux
         couleurs et sur le récapitulatif du cours, qui énonce que les
         électrons ne traversent jamais le pont salin ni la solution. C'est la
         limite signalée dans la `note`. */
      exercice: null
    },
    {
      titre: "Inverser anode et cathode, ou les rattacher au mauvais pôle",
      eleve: "L'élève place l'oxydation à la cathode et la réduction à l'anode. Ou bien il " +
             "raisonne « cathode, ça commence comme catastrophe, donc c'est le pôle négatif » et se " +
             "trompe sur une pile — où la cathode est le pôle <strong>positif</strong>.",
      cause: "Quatre mots à apparier deux à deux (anode/cathode, oxydation/réduction, pôle $+$/pôle " +
             "$-$), et aucun indice dans la langue. Pire : l'appariement " +
             "<strong>s'inverse</strong> entre une pile et une électrolyse, ce que le récapitulatif " +
             "du cours signale explicitement. L'élève qui a mémorisé « anode = pôle $+$ » sur un " +
             "schéma d'électrolyse vu ailleurs se trompe systématiquement sur les piles. Aucune " +
             "mémorisation ne peut tenir sur un appariement à géométrie variable.",
      remede: "Ne mémoriser que <strong>deux</strong> associations, celles qui ne changent " +
              "jamais : <strong>anode = oxydation</strong> et <strong>cathode = réduction</strong>. " +
              "Les deux mots commencent par la même lettre dans chaque paire — <strong>A</strong>node " +
              "et oxid<strong>A</strong>tion, <strong>C</strong>athode et rédu<strong>C</strong>tion " +
              "— et surtout ces deux associations sont vraies dans TOUS les dispositifs, pile comme " +
              "électrolyse. Le reste se déduit.<br/><br/>" +
              "Déduire alors la <strong>polarité par le raisonnement</strong>, jamais par mémoire : " +
              "à l'anode, le réducteur cède des électrons ; ces électrons s'accumulent sur " +
              "l'électrode et la rendent <strong>négative</strong> ; ils partent ensuite dans le " +
              "circuit extérieur vers l'autre électrode, qui est donc positive. Trois phrases " +
              "reconstituent toute la polarité d'une pile en dix secondes, et elles restent valables " +
              "quand la mémoire a lâché.<br/><br/>" +
              "Prévenir enfin explicitement l'<strong>inversion en électrolyse</strong>, que le " +
              "récapitulatif du cours mentionne : dans une électrolyse, c'est un générateur qui " +
              "impose le sens, et l'anode devient le pôle positif. Les deux associations " +
              "fondamentales (anode/oxydation, cathode/réduction) tiennent toujours ; c'est " +
              "seulement la polarité qui s'inverse, parce que la cause du courant a changé de " +
              "côté. Le dire évite qu'un élève croie avoir mal appris.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : aucun des trente
         énoncés ne mentionne une anode, une cathode, une polarité ni une
         demi-équation. Le moule pair DONNE le nombre z (« le couple
         électroactif à l'électrode étudiée échange z = 2 électron(s) ») sans
         jamais demander de quelle électrode il s'agit ni quelle réaction s'y
         produit. La détermination de la polarité — deuxième attendu officiel —
         n'est travaillée par aucun exercice du chapitre. Le seul support du
         livre est la question 4 de l'évaluation (la cathode est le pôle...),
         mais la règle éditoriale du projet interdit de renvoyer vers
         l'évaluation notée. Le remède s'appuie donc sur la méthode 2 du cours,
         qui expose l'appariement complet, et sur un raisonnement de
         reconstitution plutôt que sur une mémorisation. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $I = 1{,}2$ A pendant $10$ min, calculer $Q$. La relation
          $Q = I\Delta t$ est dans les formules du cours et s'applique dans le
          sens direct, la seule difficulté étant la conversion — c'est l'erreur
          2 de cette fiche. Exécution : « réaliser ».
     Q2 — comment s'écrit un couple $Ox/Red$ ? Restitution de la définition D1,
          avec trois écritures fantaisistes en distracteurs :
          « s'approprier ».
     Q3 — $Q = 965$ C et $z = 2$, calculer $n$. La relation $n = Q/(zF)$ est
          donnée telle quelle dans les formules du cours, et $Q$ est déjà
          fourni : il ne reste qu'à substituer. Exécution, « réaliser » — même
          si c'est là que se joue l'erreur 1 de cette fiche.
     Q4 — la cathode est quel pôle, siège de quoi ? Restitution du
          récapitulatif du cours, l'appariement étant explicitement donné :
          « s'approprier ». C'est l'erreur 4 de cette fiche.
     Q5 — quel est le rôle du pont salin ? Il faut juger quatre affirmations
          dont la première (« laisser passer les électrons ») est précisément
          l'erreur 3 de cette fiche, et reconnaître que la bonne réponse
          combine deux fonctions. C'est un contrôle de cohérence sur le
          fonctionnement du dispositif, pas une récitation : « valider ».

     « Analyser » et « communiquer » ne sont pas mobilisés. Aucune des cinq
     questions ne demande de renverser une relation ni de choisir une méthode :
     les deux calculs appliquent des formules données, dans le sens direct, et
     Q3 fournit même $Q$ tout calculé. Et aucune ne demande d'explication
     rédigée — particulièrement coûteux ici, où le baccalauréat demande
     régulièrement d'ÉCRIRE les demi-équations et de JUSTIFIER la polarité,
     tâches que ni les exercices ni l'évaluation de ce chapitre ne proposent
     jamais. On ne maquille pas cette absence en étiquetant « communiquer » un
     QCM. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "réaliser", "s'approprier", "valider"]
  }
};
