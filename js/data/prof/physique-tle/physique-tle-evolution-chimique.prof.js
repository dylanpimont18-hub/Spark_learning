/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-evolution-chimique.prof.js
   Fiche professeur du chapitre « Évolution spontanée d'un système chimique »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 5 : 27 énoncés tirés — le tirage le plus court du
   niveau avec la radioactivité —, dont 12 numérotés et 15 en banque
   supplémentaire. Deux moules strictement alternés :
     - moule CONCENTRATIONS (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : réaction
       générique $A+B \rightleftharpoons C+D$, quatre concentrations données,
       on demande $Q_{r,i} = [C][D]/([A][B])$ ;
     - moule ESTÉRIFICATION (exercices PAIRS 2, 4, 6, 8, 10, 12) : quatre
       quantités de matière données et $K = 4{,}0$ rappelé dans l'énoncé, on
       demande $Q_{r,i} = n_{ester}n_{eau}/(n_{acide}n_{alcool})$.
   FAIT CENTRAL POUR CETTE FICHE : tous les exercices s'arrêtent au CALCUL de
   $Q_{r,i}$. Aucun ne demande de le comparer à $K$ ni de conclure sur le sens
   d'évolution — alors que c'est le titre du chapitre, sa définition D4 et son
   premier attendu officiel. Le moule pair rappelle même $K = 4{,}0$ dans
   l'énoncé sans jamais s'en servir. C'est ce qui contraint les erreurs 3 et 4 à
   rester sans renvoi, et ce qui rend la remarque de la `note` sévère.
   L'exercice 12 est le seul dont la réponse (4) ÉGALE K : il est précieux.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-evolution-chimique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale ne précède celui-ci dans l'ordre des
     dépendances : il ouvre le bloc chimie de l'année, et tout ce qu'il suppose
     vient de première.

     ch. 7 (Acides et bases) et ch. 8 (Oxydoréduction) : ÉCARTÉS, la dépendance
     va dans l'AUTRE sens, et c'est le point d'architecture le plus important
     du bloc chimie. La constante d'acidité $K_a$ du ch. 7 n'est rien d'autre
     que la constante d'équilibre $K$ définie ICI, appliquée à la réaction de
     l'acide sur l'eau — la fiche du ch. 7 déclare d'ailleurs le 6 en prérequis
     et l'explique. Le ch. 8 réutilise de même la notion de couple et
     d'équilibre. Ce chapitre-ci est donc la SOURCE du bloc, jamais sa
     conséquence.

     ch. 1 à 5 : aucun lien. Le ch. 5 (thermodynamique) partage la lettre Q
     ($Q$ transfert thermique là-bas, $Q_r$ quotient de réaction ici) mais
     ce n'est qu'une collision de notation, signalée dans la `note`.
     ch. 9 à 11 : aucun lien.

     LE PRÉREQUIS LE PLUS LOURD N'EST PAS DÉCLARABLE : c'est le chapitre
     « Réaction chimique et avancement » de PREMIÈRE, qui installe l'équation
     de réaction, les coefficients stœchiométriques, l'avancement et le tableau
     d'avancement — sans lesquels ni $Q_r$ ni l'idée de réaction non totale
     n'ont de sens. Il est traité dans `note`, qui est imprimée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 6, celui du livre.

     Contrainte dure dans l'autre sens : ce chapitre doit PRÉCÉDER les
     chapitres 7 (acides-bases) et 8 (oxydoréduction), qui déclarent l'un et
     l'autre en dépendre. Le bloc chimie se tient donc dans l'ordre
     6 -> 7 -> 8, et le livre le respecte déjà. C'est la seule contrainte
     réelle ; rien n'empêcherait de placer le bloc chimie plus tôt dans
     l'année, en ouverture par exemple, si l'on souhaitait alterner physique et
     chimie plutôt que les traiter en blocs.

     PRÉREQUIS MATHÉMATIQUE : très léger, et c'est ce qui autorise une grande
     liberté de placement. Le chapitre ne demande qu'un quotient de produits —
     quatre multiplications et une division — et la comparaison de deux
     nombres. Ni logarithme (il arrivera au chapitre 7), ni exponentielle, ni
     dérivée. Une seule vigilance : les résultats s'expriment souvent en
     nombres décimaux inférieurs à $1$ (le tirage donne $0{,}125$, $0{,}15$,
     $0{,}187$), et beaucoup d'élèves lisent mal un quotient plus petit que
     l'unité. C'est une difficulté de lecture, pas de calcul. */
  rangConseille: 6,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Déterminer le sens d'évolution spontanée d'un système chimique par comparaison du quotient de réaction à la constante d'équilibre",
    "Exprimer le quotient de réaction d'une transformation chimique et déterminer sa valeur dans un état donné",
    "Identifier un état d'équilibre chimique et le caractériser par l'égalité du quotient de réaction et de la constante d'équilibre"
  ],

  note: "Le quotient de réaction, la constante d'équilibre, le critère d'évolution spontanée et " +
        "l'état d'équilibre sont au programme de spécialité de terminale : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Ce chapitre ouvre le bloc chimie : la colonne « S'appuie sur » affichera un " +
        "tiret, et c'est exact.</strong> Aucun chapitre de terminale ne le précède — au contraire, " +
        "il est la <strong>source</strong> du bloc : le chapitre 7 (« Acides et bases ») et le " +
        "chapitre 8 (« Oxydoréduction ») en dépendent tous deux, puisque la constante d'acidité " +
        "$K_a$ n'est que la constante d'équilibre $K$ définie ici, appliquée à une réaction " +
        "particulière. Le placer après l'un des deux rendrait ces chapitres incompréhensibles. En " +
        "revanche il suppose entièrement acquis <strong>« Réaction chimique et avancement »</strong>, " +
        "chapitre de <strong>première</strong>, qui installe l'équation de réaction, les " +
        "coefficients stœchiométriques et l'idée qu'une réaction puisse ne pas être totale : un " +
        "prérequis ne pouvant viser qu'un chapitre du même niveau, <strong>rien ne le " +
        "montrera</strong>. Si la classe ne sait plus lire une équation équilibrée, le reprendre " +
        "avant : l'écriture de $Q_r$ en dépend directement.<br/><br/>" +
        "<strong>Le prérequis mathématique est léger, ce qui laisse le bloc chimie libre de sa " +
        "place dans l'année.</strong> Quatre multiplications, une division, et la comparaison de " +
        "deux nombres. Ni logarithme — il n'arrivera qu'au chapitre 7 —, ni exponentielle, ni " +
        "dérivée. Une seule vigilance : la plupart des résultats sont des décimaux " +
        "<strong>inférieurs à 1</strong> ($0{,}125$, $0{,}15$, $0{,}187$), et un quotient plus " +
        "petit que l'unité se lit mal. Faire dire à voix haute ce que signifie " +
        "« $Q_r = 0{,}15$ » — il y a beaucoup moins de produits que de réactifs — vaut mieux que " +
        "de le supposer acquis.<br/><br/>" +
        "<strong>Attention à une collision de notation.</strong> La lettre $Q$ désigne ici un " +
        "<strong>quotient de réaction</strong>, sans dimension ; au chapitre 5, elle désignait un " +
        "<strong>transfert thermique</strong> en joules ; au chapitre 8, ce sera une " +
        "<strong>quantité d'électricité</strong> en coulombs. L'indice $r$ de $Q_r$ est donc " +
        "essentiel et mérite d'être exigé à l'écrit.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas — et c'est la limite la plus sérieuse du " +
        "chapitre.</strong> Les vingt-sept énoncés tirés s'arrêtent tous au <strong>calcul</strong> " +
        "de $Q_{r,i}$. <strong>Aucun</strong> ne demande de le comparer à $K$, ni de conclure sur " +
        "le sens d'évolution — alors que c'est le titre du chapitre, sa définition D4 et son " +
        "premier attendu officiel. Les énoncés du moule estérification rappellent même " +
        "$K = 4{,}0$ sans jamais s'en servir, ce qui peut laisser croire à l'élève que la donnée " +
        "est décorative. Aucun exercice non plus ne fait intervenir de coefficient " +
        "stœchiométrique différent de $1$, ni de solide pur à exclure de $Q_r$. Prévoir un travail " +
        "spécifique sur la conclusion — « $Q_{r,i}$ vaut tant, $K$ vaut tant, donc le système " +
        "évolue dans le sens… » — que le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Écrire le quotient à l'envers",
      eleve: "Pour $[A] = 0{,}50$, $[B] = 0{,}10$, $[C] = 0{,}20$ et $[D] = 0{,}10$, l'élève écrit " +
             "$Q_r = \\dfrac{[A][B]}{[C][D]}$ et annonce $2{,}5$ au lieu de $0{,}4$. Le résultat " +
             "est l'inverse exact du bon, et rien dans sa forme ne l'alerte.",
      cause: "L'équation se lit de gauche à droite — réactifs d'abord, produits ensuite — et " +
             "l'élève transcrit dans cet ordre : ce qu'il lit en premier, il l'écrit en haut. La " +
             "convention chimique est pourtant l'inverse : les <strong>produits au " +
             "numérateur</strong>, les réactifs au dénominateur. Rien ne l'explique dans la " +
             "notation, et le résultat de l'erreur est un nombre parfaitement plausible — c'est " +
             "même exactement l'inverse du bon, donc toujours dans un ordre de grandeur crédible. " +
             "Aucun contrôle numérique ne peut l'attraper.",
      remede: "Faire comprendre la convention plutôt que la faire mémoriser, car elle a une " +
              "<strong>raison</strong> : $Q_r$ est construit pour <strong>augmenter</strong> quand " +
              "la réaction avance dans le sens direct. Plus on forme de produits, plus $Q_r$ " +
              "grimpe. C'est ce qui rend lisible le critère d'évolution — si $Q_r < K$, il faut " +
              "que $Q_r$ monte, donc que la réaction avance vers les produits. Avec le quotient " +
              "inversé, tout le critère se retournerait et deviendrait ingérable.<br/><br/>" +
              "Donner ensuite un <strong>moyen mnémotechnique qui s'appuie sur du connu</strong> : " +
              "c'est la même convention que pour $K_a$ au chapitre 7, où " +
              "$K_a = \\dfrac{[A^-][H_3O^+]}{[AH]}$ met la base et l'ion hydronium — les produits — " +
              "au-dessus. Une seule règle pour tout le bloc chimie, énoncée une fois et " +
              "réutilisée.<br/><br/>" +
              "Imposer enfin un <strong>ordre de rédaction</strong> qui rend l'erreur difficile : " +
              "écrire d'abord la barre de fraction, puis remplir le <strong>numérateur</strong> en " +
              "cherchant les produits <strong>à droite</strong> de la flèche, puis le dénominateur " +
              "avec les réactifs. On lit l'équation dans le désordre, à dessein, et c'est " +
              "justement ce qui casse le réflexe de transcription linéaire.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 5) : l'exercice 1 donne [A] = 0,50 ;
         [B] = 0,10 ; [C] = 0,20 ; [D] = 0,10, réponse 0,4. C'est le premier
         exercice du chapitre, donc celui où le réflexe d'écriture se prend, et
         ses nombres rendent l'erreur maximalement lisible : l'élève qui
         inverse trouve exactement 2,5, l'inverse de 0,4. Deux nombres ronds et
         inverses l'un de l'autre se repèrent d'un coup d'œil à la correction,
         ce qui n'est pas le cas de l'exercice 3 (0,187 contre 5,33) ni du 9
         (0,125 contre 8). Le renvoi est donc choisi pour le diagnostic autant
         que pour l'entraînement. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'un grand nombre de produits signifie que la réaction va continuer",
      eleve: "Devant un système contenant $0{,}6$ mol d'ester et $0{,}4$ mol d'eau pour seulement " +
             "$0{,}3$ mol d'acide et $0{,}2$ mol d'alcool, l'élève annonce que « la réaction va " +
             "continuer dans le sens direct, puisqu'il y a beaucoup de produits et que ça marche " +
             "bien ». Ou, à l'inverse, que « la réaction va s'inverser, puisqu'il reste peu de " +
             "réactifs ».",
      cause: "L'élève raisonne sur des <strong>quantités absolues</strong> et sur une intuition de " +
             "« réussite » de la réaction, alors que le critère ne porte que sur la " +
             "<strong>comparaison de deux nombres</strong>, $Q_{r,i}$ et $K$. Une même " +
             "composition peut évoluer dans un sens ou dans l'autre selon la valeur de $K$, " +
             "c'est-à-dire selon la température — et c'est ce qui rend l'intuition inopérante. Le " +
             "piège du cours le dit explicitement, mais l'élève n'a aucune raison spontanée de " +
             "penser qu'un système « riche en produits » puisse encore en former davantage.",
      remede: "Faire du critère une <strong>comparaison à un repère</strong>, et ne jamais l'en " +
              "détacher : $K$ est la valeur d'arrivée, $Q_r$ la position actuelle. Le système se " +
              "déplace toujours <strong>vers</strong> $K$, comme un thermostat ramène une pièce " +
              "vers sa consigne. La question n'est jamais « y a-t-il beaucoup de produits ? » mais " +
              "« $Q_r$ est-il au-dessus ou en dessous de $K$ ? ».<br/><br/>" +
              "Faire calculer sur le <strong>même énoncé deux conclusions opposées</strong>, en " +
              "changeant seulement $K$ : avec $Q_{r,i} = 4$ et $K = 4{,}0$, le système n'évolue " +
              "pas ; avec le même $Q_{r,i} = 4$ et un $K = 10$ (autre température), il évoluerait " +
              "dans le sens direct. La composition n'a pas changé, la conclusion si. Aucun " +
              "discours ne remplace cette manipulation.<br/><br/>" +
              "Insister enfin sur le fait que <strong>$K$ ne dépend que de la " +
              "température</strong> — ni des quantités initiales, ni du volume, comme le dit la " +
              "définition D2. C'est ce qui fait de $K$ un repère fiable : il ne bouge pas quand le " +
              "système évolue, alors que $Q_r$, lui, se déplace jusqu'à le rejoindre. Deux " +
              "grandeurs, deux statuts, et c'est toute la différence entre les deux.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 12 donne
         n_acide = 0,3 ; n_alcool = 0,2 ; n_ester = 0,6 ; n_eau = 0,4 et
         réponse Q_r = 4 — avec K = 4,0 rappelé dans l'énoncé. C'est le SEUL
         exercice des vingt-sept où Q_r ÉGALE exactement K, donc le seul où le
         système est déjà à l'équilibre et n'évolue PAS. Il est précieux et
         doit être exploité en classe : une composition manifestement « riche
         en produits » (0,6 et 0,4 contre 0,3 et 0,2) dans un système qui
         n'évoluera plus du tout. C'est le contre-exemple parfait à
         l'intuition décrite, et le tirage le fournit gratuitement. Attention
         cependant : l'exercice ne DEMANDE pas de conclure — il s'arrête au
         calcul de Q_r —, donc la conclusion doit être ajoutée oralement à la
         correction. C'est exactement la limite signalée dans la `note`. */
      exercice: { type: "exercice", n: 12 }
    },
    {
      titre: "Chercher une unité pour le quotient de réaction",
      eleve: "L'élève écrit $Q_r = 0{,}4$ mol/L, ou bien s'inquiète : « les concentrations sont en " +
             "mol/L, donc le quotient doit bien être en quelque chose ». Il hésite à répondre parce " +
             "qu'il ne sait pas quelle unité mettre, et perd du temps sur une question qui n'en " +
             "est pas une.",
      cause: "Toutes les grandeurs manipulées depuis la seconde ont une unité, et l'élève a été " +
              "— à juste titre — entraîné à ne jamais l'oublier. Ici, la division fait disparaître " +
             "l'unité : des mol/L divisés par des mol/L donnent un nombre nu. C'est une propriété " +
             "du <strong>quotient</strong>, pas une exception de la chimie, mais l'élève n'a " +
             "encore jamais rencontré de grandeur physique sans dimension. La définition D1 " +
             "précise pourtant « sans dimension » dès sa première ligne.",
      remede: "Faire <strong>écrire les unités dans le calcul</strong>, une fois, et les simplifier " +
              "au tableau comme on simplifie des nombres : " +
              "$\\dfrac{\\text{mol/L} \\times \\text{mol/L}}{\\text{mol/L} \\times \\text{mol/L}}$. " +
              "Il ne reste rien, et cela se voit. Une simplification vue ne se conteste pas, " +
              "contrairement à une affirmation.<br/><br/>" +
              "Nommer alors les <strong>autres grandeurs sans dimension</strong> que l'élève " +
              "connaît déjà sans le savoir : un rendement, un pourcentage, un indice de réfraction, " +
              "le rapport $[A^-]/[AH]$ du chapitre 7. Ce n'est donc pas une bizarrerie isolée, " +
              "c'est une famille — et appartenir à une famille rassure.<br/><br/>" +
              "Prévenir enfin l'erreur <strong>symétrique</strong>, qui coûte des points en " +
              "épreuve : une grandeur sans unité n'est pas une grandeur sans " +
              "<strong>valeur de référence</strong>. Dire « $Q_r = 0{,}4$ » n'a de sens que " +
              "rapporté à $K$. Un nombre nu ne se commente jamais seul, et c'est justement pourquoi " +
              "la comparaison à $K$ est indispensable — ce qui ramène à l'erreur précédente.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les vingt-sept
         énoncés précisent TOUS « (sans unité, arrondie au millième) » dans leur
         consigne. L'erreur est donc désamorcée par la rédaction même des
         énoncés : un élève qui suit la consigne ne peut pas la commettre dans
         les exercices du chapitre. Pointer l'un d'eux enverrait l'enseignant
         vers une remédiation qui n'en est pas une, puisque l'énoncé donne
         déjà la réponse à la question que l'élève se pose. L'erreur se produit
         en revanche en devoir libre et au baccalauréat, où la consigne
         n'accompagne pas l'énoncé : c'est là qu'elle se remédie, et le remède
         le dit en s'appuyant sur la définition D1 du cours. */
      exercice: null
    },
    {
      titre: "Croire qu'un système à l'équilibre a fini de réagir",
      eleve: "L'élève affirme qu'« à l'équilibre, la réaction est terminée, plus rien ne se " +
             "passe ». Il en déduit qu'un système à l'équilibre ne contient plus de réactifs, ou " +
             "s'étonne de trouver $0{,}3$ mol d'acide résiduel dans un système à l'équilibre : " +
             "« il aurait dû être consommé ».",
      cause: "Le mot « équilibre » évoque l'immobilité, et la définition D3 parle en effet de " +
             "quantités qui « n'évoluent plus ». Mais elle précise " +
             "<strong>macroscopiquement</strong>, et c'est ce mot que l'élève saute. À l'échelle " +
             "microscopique, les deux réactions — directe et indirecte — continuent à la même " +
             "vitesse : ce qui se forme d'un côté se défait de l'autre, et le bilan est nul. " +
             "L'élève n'a aucune raison de deviner cette dynamique cachée, d'autant que toute sa " +
             "scolarité en chimie, jusqu'en première, a porté sur des réactions " +
             "<strong>totales</strong> où les réactifs disparaissent effectivement.",
      remede: "Donner une <strong>image dynamique</strong> qui remplace l'image statique : un " +
              "escalator qu'on descend à la vitesse où il monte. On ne bouge pas, et pourtant rien " +
              "n'est immobile. C'est exactement la situation d'un équilibre chimique, et l'image " +
              "vaut mieux qu'une définition parce qu'elle contient la dynamique.<br/><br/>" +
              "Faire ensuite la différence explicite entre <strong>réaction totale</strong> (celle " +
              "de première : un réactif limitant disparaît, l'avancement atteint son maximum) et " +
              "<strong>réaction limitée</strong> (celle de ce chapitre : les quatre espèces " +
              "coexistent indéfiniment). C'est un changement de modèle, pas un détail, et il vaut " +
              "la peine d'être annoncé comme tel — sans quoi l'élève croit avoir mal compris la " +
              "première.<br/><br/>" +
              "Ancrer enfin sur un <strong>fait expérimental</strong>, qui est le plus convaincant : " +
              "l'estérification étudiée dans tout le chapitre ne dépasse jamais environ " +
              "$67\\%$ de rendement, quelle que soit la patience du chimiste. On peut attendre " +
              "cent ans, il restera de l'acide et de l'alcool. Ce n'est pas une lenteur, c'est une " +
              "limite thermodynamique — et c'est pourquoi l'industrie déplace l'équilibre en " +
              "retirant l'eau au fur et à mesure.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les vingt-sept
         énoncés demandent TOUS de calculer Q_{r,i} dans un état donné, et
         s'arrêtent là. Aucun ne décrit un système à l'équilibre, aucun ne
         demande ce qui s'y passe, aucun n'oppose réaction totale et réaction
         limitée, et aucun ne demande un rendement. L'erreur porte sur une
         représentation du phénomène, pas sur un calcul, et aucun exercice du
         chapitre ne la met en jeu. L'exercice 12 (Q_r = 4 = K) est le seul
         système du tirage effectivement à l'équilibre, mais il est déjà
         mobilisé par l'erreur 2 et, surtout, il ne demande rien sur ce qui s'y
         passe : le renvoyer ici serait pointer un exercice qui ne travaille pas
         l'erreur. Le remède s'appuie donc sur la définition D3 du cours — le
         mot « macroscopiquement » — et sur le fait expérimental du rendement
         limité de l'estérification. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — quatre concentrations données, calculer $Q_{r,i}$. L'expression est
          dans les formules du cours et s'applique dans le sens direct :
          exécution, « réaliser ».
     Q2 — un système évolue dans le sens direct lorsque… Restitution du critère
          d'évolution (définition D4 et formules), avec $Q_{r,i} > K$ en
          distracteur symétrique : « s'approprier ».
     Q3 — estérification, quatre quantités de matière, calculer $Q_{r,i}$. Même
          structure que Q1, avec l'expression en moles également donnée dans
          les formules du cours : « réaliser ».
     Q4 — de quoi dépend $K$ ? Il faut juger quatre affirmations sur ce qui
          influence $K$ et ce qui ne l'influence pas — quantités initiales,
          volume, température, sens d'écriture — ce qui est un contrôle de
          cohérence et non une récitation : « valider ». C'est l'erreur 2 de
          cette fiche.
     Q5 — qu'omet-on toujours dans $Q_r$ ? Restitution de la propriété énoncée
          dans la définition D1, le récapitulatif et le piège du cours :
          « s'approprier ».

     « Analyser » et « communiquer » ne sont pas mobilisés. Aucune des cinq
     questions ne demande de choisir une méthode ou de renverser une relation :
     les deux calculs sont des applications directes d'expressions données. Et
     aucune ne demande d'explication rédigée — ce qui est particulièrement
     coûteux ici, puisque le premier attendu officiel du chapitre (« déterminer
     le sens d'évolution ») appelle une CONCLUSION rédigée, que ni les
     exercices ni l'évaluation ne demandent jamais. C'est la même limite que
     celle signalée dans la `note`, et on ne la maquille pas en étiquetant
     « communiquer » une question qui ne le mérite pas. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "réaliser", "valider", "s'approprier"]
  }
};
