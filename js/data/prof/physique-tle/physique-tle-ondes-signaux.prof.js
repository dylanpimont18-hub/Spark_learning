/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-ondes-signaux.prof.js
   Fiche professeur du chapitre « Ondes et signaux : diffraction et
   interférences » (terminale spécialité), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 8 : 30 énoncés tirés, dont 12 numérotés et 18 en
   banque supplémentaire. Deux moules strictement alternés :
     - moule DIFFRACTION (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : lambda en nm et
       largeur de fente a en mm, on demande l'écart angulaire
       $\theta = \lambda/a$ en MILLIRADIANS ;
     - moule INTERFÉRENCES (exercices PAIRS 2, 4, 6, 8, 10, 12) : lambda en nm,
       distance entre fentes a en mm, distance D en m, on demande l'interfrange
       $i = \lambda D/a$ en MILLIMÈTRES.
   FAIT CENTRAL POUR CETTE FICHE : les deux moules emploient la MÊME LETTRE $a$
   pour deux grandeurs physiques différentes (largeur d'une fente unique ;
   écartement de deux fentes), et ils alternent une page sur deux. C'est
   exactement le piège du cours, et le tirage le maximise. L'erreur 1 en
   découle et reçoit deux renvois croisés.
   Aucun exercice ne fait intervenir la différence de marche $\delta$, ni ne
   demande de discuter une VARIATION (« si l'on rapproche les fentes… ») :
   c'est ce qui contraint l'erreur 4 à rester sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-ondes-signaux"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale ne précède celui-ci dans l'ordre des
     dépendances : il ouvre le bloc « ondes et quantique » de fin d'année, et
     tout ce qu'il suppose vient de première.

     ch. 10 (Physique quantique) : ÉCARTÉ, et la dépendance va dans l'AUTRE
     sens — c'est le point d'architecture le plus important de la fin de
     l'année. La dualité onde-particule du ch. 10 ne se comprend que si l'élève
     a d'abord vu ce que « comportement ondulatoire » veut dire concrètement :
     diffraction et interférences. La définition D2 du ch. 10 cite d'ailleurs
     ces deux phénomènes comme la MANIFESTATION de l'aspect ondulatoire. La
     fiche du ch. 10 déclare donc le 9 en prérequis ; l'inverse serait un
     cycle.

     ch. 1 à 8, 11 : aucun lien. Le ch. 11 (radioactivité) partage la lettre
     lambda (longueur d'onde ici, constante radioactive là-bas) mais ce n'est
     qu'une collision de notation, signalée dans la `note`.

     LE PRÉREQUIS LE PLUS LOURD N'EST PAS DÉCLARABLE : c'est le chapitre
     « La lumière : modèle ondulatoire » de PREMIÈRE, qui installe la longueur
     d'onde, la fréquence, la relation $\lambda = c/f$ et le spectre visible.
     Sans lui, « une lumière de longueur d'onde 650 nm » n'est qu'un nombre. Il
     est traité dans `note`, qui est imprimée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 9, celui du livre.

     Contrainte dure dans l'autre sens : ce chapitre doit PRÉCÉDER le chapitre
     10 (physique quantique), qui en dépend — la dualité onde-particule n'a de
     sens que pour un élève qui sait ce qu'est un comportement ondulatoire. Le
     bloc de fin d'année se tient donc dans l'ordre 9 -> 10, et le livre le
     respecte déjà.

     Rien n'obligerait en revanche à le placer en fin d'année : le chapitre ne
     dépend d'aucun chapitre de terminale et n'exige aucun outil mathématique
     tardif. Le placer plus tôt est parfaitement possible, et même défendable
     si l'on veut mener l'expérience des fentes de Young en travaux pratiques à
     une période moins chargée.

     PRÉREQUIS MATHÉMATIQUE : léger sur le fond, exigeant sur la forme. Deux
     divisions, rien de plus. Mais tout le chapitre se joue en
     <strong>notation scientifique</strong> et en préfixes multiplicateurs :
     des nanomètres au numérateur, des millimètres au dénominateur, des
     milliradians ou des millimètres en sortie. Un élève qui n'est pas à l'aise
     avec les puissances de dix ne passera pas, non par incompréhension de la
     physique mais par accumulation d'erreurs de facteur mille. C'est le vrai
     facteur limitant du chapitre, et il mérite une séance dédiée avant. */
  rangConseille: 9,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Ondes et signaux ». Repris aux mots du
     programme. */
  attendus: [
    "Caractériser le phénomène de diffraction et exploiter la relation entre l'écart angulaire, la longueur d'onde et la dimension de l'ouverture",
    "Exploiter la relation donnant l'interfrange dans le cas d'interférences obtenues avec deux fentes de Young",
    "Établir les conditions d'interférences constructives et destructives à partir de la différence de marche"
  ],

  note: "La diffraction, les interférences par des fentes de Young, l'interfrange et la condition " +
        "de cohérence sont au programme de spécialité de terminale : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Ce chapitre ouvre le bloc de fin d'année : la colonne « S'appuie sur » affichera " +
        "un tiret, et c'est exact.</strong> Aucun chapitre de terminale ne le précède — au " +
        "contraire, il est la <strong>source</strong> du chapitre 10 (« Physique quantique »), dont " +
        "la dualité onde-particule ne se comprend que si l'élève sait d'abord ce qu'est un " +
        "comportement ondulatoire. Mais il suppose entièrement acquis <strong>« La lumière : " +
        "modèle ondulatoire »</strong>, chapitre de <strong>première</strong>, qui installe la " +
        "longueur d'onde, la fréquence et le spectre visible : un prérequis ne pouvant viser qu'un " +
        "chapitre du même niveau, <strong>rien ne le montrera</strong>. Si la classe ne sait plus " +
        "qu'une longueur d'onde de $650$ nm correspond à du rouge et $450$ nm à du bleu, le " +
        "reprendre avant : toute la lecture physique des résultats en dépend.<br/><br/>" +
        "<strong>Le prérequis mathématique est le vrai facteur limitant, et il n'est pas où on " +
        "l'attend.</strong> Le chapitre ne demande que deux divisions. Mais il se joue entièrement " +
        "en <strong>notation scientifique</strong> et en préfixes : des nanomètres " +
        "($10^{-9}$) divisés par des millimètres ($10^{-3}$), pour un résultat en milliradians ou " +
        "en millimètres. Quatre changements d'échelle dans un seul calcul. Un élève fragile sur " +
        "les puissances de dix échouera, non parce qu'il n'a pas compris la physique mais parce " +
        "qu'il aura perdu un facteur mille — et le piège du cours prévient explicitement du " +
        "facteur $10^9$. Prévoir une séance de mise au point avant d'entrer dans le chapitre : " +
        "c'est le meilleur investissement possible ici.<br/><br/>" +
        "<strong>Attention à une collision de notation.</strong> La lettre $\\lambda$ désigne ici " +
        "une <strong>longueur d'onde</strong>, en mètres ; au chapitre 11 (« Radioactivité »), elle " +
        "désignera la <strong>constante radioactive</strong>, en s$^{-1}$. Le signaler avant le " +
        "chapitre 11 évite une confusion classique en épreuve.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés " +
        "alternent deux moules : écart angulaire de diffraction, et interfrange. Aucun ne fait " +
        "intervenir la <strong>différence de marche $\\delta$</strong> ni les conditions " +
        "d'interférences constructives et destructives — pourtant troisième attendu officiel —, " +
        "aucun ne demande de <strong>discuter une variation</strong> (« si l'on rapproche les " +
        "fentes, l'interfrange… »), et aucun ne demande de choisir entre les deux formules à " +
        "partir d'une description : le moule est toujours annoncé par l'énoncé. Prévoir un travail " +
        "spécifique sur la différence de marche et sur les raisonnements de variation, que le " +
        "manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Appliquer la formule de diffraction à un problème d'interférences",
      eleve: "Devant deux fentes de Young distantes de $a = 0{,}30$ mm éclairées par " +
             "$\\lambda = 450$ nm à $D = 1{,}5$ m, l'élève calcule $\\theta = \\lambda/a$ et " +
             "annonce $1{,}5$ mrad au lieu de l'interfrange $2{,}25$ mm. Il a reconnu la lettre " +
             "$a$ et appliqué la première formule qui la contient.",
      cause: "Les deux formules du chapitre partagent la lettre $a$, qui y désigne pourtant deux " +
             "grandeurs physiquement différentes : la <strong>largeur d'une fente unique</strong> " +
             "pour la diffraction, l'<strong>écartement entre deux fentes</strong> pour les " +
             "interférences. Le piège du cours le dit explicitement — « deux grandeurs " +
             "physiquement différentes qui portent la même notation par convention » — et les " +
             "exercices alternent les deux moules une page sur deux, ce qui maximise le risque. " +
             "L'élève trie sur les symboles parce que rien ne l'invite à trier sur le phénomène.",
      remede: "Faire trier sur la <strong>présence de $D$</strong>, critère infaillible et " +
              "immédiat : si l'énoncé donne une distance à l'écran, c'est un problème " +
              "d'<strong>interférences</strong> (on cherche un interfrange, en millimètres) ; s'il " +
              "n'en donne pas, c'est de la <strong>diffraction</strong> (on cherche un angle, en " +
              "milliradians). Un seul coup d'œil aux données suffit, avant même de lire " +
              "l'énoncé.<br/><br/>" +
              "Faire ensuite compter les <strong>fentes</strong>, ce qui ancre le tri sur la " +
              "physique et non sur une astuce : <strong>une</strong> fente diffracte, " +
              "<strong>deux</strong> fentes interfèrent. C'est la différence entre « la lumière " +
              "s'étale en contournant un bord » et « deux ondes se superposent ». Le mot " +
              "« fentes » au pluriel dans l'énoncé est un signal, et il mérite d'être " +
              "souligné.<br/><br/>" +
              "Imposer enfin la vérification par l'<strong>unité de la réponse</strong>, qui " +
              "attrape l'erreur même quand le tri a échoué : $\\theta = \\lambda/a$ est un rapport " +
              "de deux longueurs, donc un nombre sans dimension — un angle en radians. " +
              "$i = \\lambda D/a$ est une longueur divisée par une longueur, multipliée par une " +
              "longueur : c'est une longueur, en mètres. Si l'énoncé demande des millimètres et " +
              "qu'on a calculé un angle, l'erreur se voit sans refaire le calcul.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 8) : le tirage offre la confusion à l'état pur.
         L'exercice 2 (fentes de Young, a = 0,30 mm, lambda = 450 nm,
         D = 1,5 m, réponse 2,25 mm) et l'exercice 7 (fente unique,
         a = 0,08 mm, lambda = 450 nm, réponse 5,625 mrad) tirent la MÊME
         longueur d'onde et des grandeurs a homonymes, à cinq pages d'écart :
         seule la présence de D distingue les deux situations. Le renvoi pointe
         le 2 parce que c'est celui où l'erreur est possible (appliquer
         theta = lambda/a à des données d'interférences donne 1,5 mrad, un
         nombre plausible) alors que l'inverse ne l'est pas — sur le 7, il
         manque D et l'élève se bloque au lieu de se tromper. Faire lire les
         deux énoncés côte à côte à la correction est le meilleur usage
         possible de ce tirage. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier de convertir les nanomètres, ou n'en convertir qu'une partie",
      eleve: "Pour $\\lambda = 500$ nm et une fente de $a = 0{,}05$ mm, l'élève écrit " +
             "$\\theta = 500 / 0{,}05 = 10\\,000$ et annonce $10\\,000$ rad — un angle de " +
             "$570\\,000$ degrés. Ou bien il convertit la longueur d'onde et oublie la fente, et " +
             "trouve $10^{-5}$ rad au lieu de $10^{-2}$.",
      cause: "Chaque calcul du chapitre demande <strong>deux conversions dans des sens " +
             "différents</strong> — le nanomètre vers le mètre ($\\times 10^{-9}$), le millimètre " +
             "vers le mètre ($\\times 10^{-3}$) — et l'élève n'en fait souvent qu'une. La cause " +
             "n'est pas l'ignorance des préfixes mais la <strong>charge mentale</strong> : " +
             "converti l'un, on croit avoir fait le travail. Le piège du cours prévient du facteur " +
             "$10^9$, mais il ne dit pas que le risque principal est de convertir à " +
             "moitié.",
      remede: "Imposer une <strong>ligne de conversion complète</strong>, séparée du calcul, où " +
              "TOUTES les données sont réécrites en unités SI et en notation scientifique, comme " +
              "le fait l'exemple résolu du cours : « $\\lambda = 5{,}0 \\times 10^{-7}$ m ; " +
              "$a = 5{,}0 \\times 10^{-4}$ m ». Deux lignes écrites, deux conversions vérifiables. " +
              "Le calcul ne commence qu'ensuite.<br/><br/>" +
              "Donner ensuite les <strong>deux repères d'ordre de grandeur</strong> du chapitre, " +
              "qui rejettent presque toutes les erreurs de facteur mille sans refaire le calcul : " +
              "un écart angulaire de diffraction se compte en <strong>milliradians</strong>, jamais " +
              "en radians — un faisceau qui s'ouvrirait de $1$ rad ne serait plus un faisceau ; et " +
              "un interfrange se compte en <strong>millimètres</strong>, ce qui est justement ce " +
              "qui rend l'expérience de Young observable à l'œil nu. Deux repères, et tout " +
              "résultat aberrant se repère.<br/><br/>" +
              "Faire enfin remarquer la <strong>structure du calcul</strong>, qui aide à " +
              "l'anticiper : on divise $10^{-7}$ par $10^{-4}$, donc on attend $10^{-3}$. L'élève " +
              "qui pose d'abord l'ordre de grandeur des puissances, avant de sortir la " +
              "calculatrice, sait déjà à quoi ressemble sa réponse — et une calculatrice qui " +
              "affiche autre chose devient un signal d'alerte au lieu d'une autorité.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         lambda = 500 nm, a = 0,05 mm, réponse 10 mrad. C'est le premier
         exercice du chapitre, donc celui où le réflexe se prend, et surtout
         celui dont la réponse est la plus RONDE du tirage : 10 mrad exactement
         (0,01 rad). Cette rondeur est précieuse pour le diagnostic, car chaque
         erreur de conversion produit un nombre lisible — l'élève qui ne
         convertit rien trouve 10 000, celui qui ne convertit que lambda trouve
         0,00001, celui qui fait tout bien trouve 0,01. Trois puissances de dix
         franches, immédiatement classables à la correction. L'exercice 9 tire
         exactement les mêmes valeurs sous un autre habillage (pointeur laser),
         ce qui permet de revérifier sans changer de nombres. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que les franges sombres sont des zones sans lumière",
      eleve: "L'élève explique qu'« aux franges sombres, la lumière n'arrive pas », ou demande où " +
             "est passée l'énergie lumineuse. Il conclut parfois que « la lumière plus la lumière " +
             "peut faire de l'obscurité, donc l'énergie disparaît », et bute sur une contradiction " +
             "réelle qu'il ne sait pas résoudre.",
      cause: "L'élève applique un modèle de <strong>flux</strong> — la lumière est quelque chose " +
             "qui arrive ou n'arrive pas — alors que le chapitre demande un modèle " +
             "d'<strong>onde</strong>, où deux amplitudes s'additionnent avec leur signe. Deux " +
             "ondes en opposition de phase arrivent bel et bien toutes les deux, et leurs " +
             "amplitudes se compensent : $+A$ et $-A$ donnent zéro. Rien dans l'expérience " +
             "quotidienne de la lumière ne prépare à cela, et la question de l'énergie que pose " +
             "l'élève est parfaitement légitime — elle mérite une réponse, pas une esquive.",
      remede: "Passer par une <strong>onde qu'on peut voir</strong>, ce qui lève l'obstacle en une " +
              "minute : deux vagues à la surface de l'eau, l'une avec une crête, l'autre avec un " +
              "creux, s'annulent là où elles se rencontrent — et personne ne demande où est passée " +
              "l'eau. La surface est plate, mais l'eau est toujours là. C'est exactement ce qui se " +
              "passe sur une frange sombre.<br/><br/>" +
              "Répondre ensuite <strong>franchement à la question de l'énergie</strong>, car " +
              "l'élève a raison de la poser : l'énergie n'est pas détruite, elle est " +
              "<strong>redistribuée</strong>. Les franges brillantes reçoivent plus de lumière que " +
              "ce que chaque fente enverrait seule, exactement de quoi compenser ce que les franges " +
              "sombres ne reçoivent pas. Le total sur tout l'écran est conservé. Cette réponse " +
              "transforme une objection en confirmation du modèle.<br/><br/>" +
              "Faire enfin le lien avec la <strong>condition de cohérence</strong>, qui devient " +
              "alors évidente au lieu d'être une contrainte arbitraire : pour que les annulations " +
              "restent aux mêmes endroits, il faut que le déphasage entre les deux ondes ne varie " +
              "pas — c'est la définition D2. Deux lampes ordinaires ne produisent pas de franges " +
              "parce que leur déphasage change des millions de fois par seconde : les franges " +
              "existent, mais elles bougent trop vite pour être vues.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne des
         fentes de Young distantes de a = 0,10 mm, lambda = 650 nm,
         D = 3,0 m, réponse i = 19,5 mm. C'est le plus GRAND interfrange du
         tirage — près de deux centimètres —, ce qui en fait le meilleur
         support pour cette erreur : l'élève doit se représenter une figure
         réelle sur un écran, avec des bandes larges de deux centimètres,
         alternativement brillantes et sombres. Sur l'exercice 6 (i = 2,5 mm),
         la figure est trop fine pour qu'on se demande ce qui se passe entre
         les franges. Le renvoi sert donc de support de DISCUSSION — que voit-on
         exactement sur l'écran, et où est passée la lumière entre deux bandes
         brillantes ? —, pas d'entraînement au calcul : l'énoncé, lui, ne
         demande que l'interfrange. La correction gagne à faire dessiner la
         figure à l'échelle. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Se tromper de sens de variation quand une grandeur change",
      eleve: "L'élève affirme que « si on rapproche les deux fentes, l'interfrange diminue, " +
             "puisque tout devient plus serré ». Ou que « la lumière bleue donne un interfrange " +
             "plus grand que la rouge, puisque le bleu est plus énergétique ».",
      cause: "L'élève raisonne par <strong>analogie géométrique</strong> — des fentes rapprochées " +
             "donneraient une figure resserrée — au lieu de lire la formule. Or " +
             "$i = \\lambda D / a$ met $a$ au <strong>dénominateur</strong> : rapprocher les " +
             "fentes AUGMENTE l'interfrange. Le résultat est contre-intuitif, et c'est justement " +
             "ce qui rend l'expérience spectaculaire. Le récapitulatif du cours l'énonce — « plus " +
             "l'ouverture ou l'écart entre les fentes est petit, plus les effets sont marqués » — " +
             "mais cette phrase se lit sans convaincre, parce qu'elle heurte l'intuition.",
      remede: "Faire lire la formule comme une <strong>machine à trois boutons</strong>, en " +
              "distinguant le haut et le bas : $\\lambda$ et $D$ sont au numérateur, donc les " +
              "augmenter <strong>augmente</strong> $i$ ; $a$ est au dénominateur, donc l'augmenter " +
              "<strong>diminue</strong> $i$. C'est une propriété des fractions, connue depuis le " +
              "collège, et il suffit d'autoriser l'élève à s'en servir ici plutôt que de raisonner " +
              "par image.<br/><br/>" +
              "Faire ensuite <strong>vérifier sur deux valeurs réelles</strong> plutôt que " +
              "d'argumenter, car un calcul tranche là où un discours convainc à moitié : le tirage " +
              "du chapitre fournit deux fois $\\lambda = 650$ nm et $D = 2{,}0$ m, une fois avec " +
              "$a = 0{,}15$ mm ($i = 8{,}67$ mm) et une fois avec $a = 0{,}10$ mm " +
              "($i = 13$ mm). Fentes plus rapprochées, interfrange plus grand : c'est écrit dans " +
              "le livre.<br/><br/>" +
              "Nommer enfin le <strong>principe général</strong>, qui vaut pour tout le chapitre et " +
              "se retient bien : plus l'obstacle est <strong>petit</strong> par rapport à la " +
              "longueur d'onde, plus les effets ondulatoires sont <strong>marqués</strong>. C'est " +
              "vrai pour la diffraction comme pour les interférences, et cela explique pourquoi on " +
              "n'observe ces phénomènes qu'avec des fentes très fines : à l'échelle d'une porte " +
              "ouverte, la lumière semble se propager en ligne droite.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés tirés donnent TOUS un jeu complet de valeurs et demandent UN
         nombre. Aucun ne demande ce qui se passe « si l'on rapproche les
         fentes », « si l'on change de couleur », « si l'on éloigne l'écran ».
         Le raisonnement de variation — qui est pourtant ce que le
         baccalauréat demande le plus souvent sur ce chapitre — n'est travaillé
         par aucun exercice. Le seul support du livre est la question 4 de
         l'évaluation (« si l'on rapproche les fentes, l'interfrange... »),
         mais la règle éditoriale du projet interdit de renvoyer vers
         l'évaluation notée : on remédie avant d'évaluer. Le remède s'appuie
         donc sur la comparaison des exercices 8 et 12, qui tirent les mêmes
         lambda et D avec deux valeurs de a — ce qui reconstitue une expérience
         de variation à partir de deux énoncés indépendants. C'est la limite
         signalée dans la `note`. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $\lambda = 400$ nm, fente $a = 0{,}05$ mm, calculer $\theta$. La
          relation $\theta = \lambda/a$ est dans les formules du cours et
          s'applique dans le sens direct, la difficulté étant la conversion —
          erreur 2 de cette fiche. Exécution : « réaliser ».
     Q2 — fentes de Young, calculer $i$. Même structure, avec
          $i = \lambda D/a$ également donnée : « réaliser ». Le tri entre les
          deux formules (erreur 1) est ici désamorcé par l'énoncé, qui annonce
          « fentes de Young ».
     Q3 — à quelle différence de marche correspond une frange sombre ?
          Restitution de la condition donnée dans les formules du cours, avec
          $\delta = k\lambda$ (la condition constructive) en distracteur
          symétrique : « s'approprier ».
     Q4 — si l'on rapproche les fentes, l'interfrange... Il faut juger un sens
          de variation contre une intuition contraire, ce qui est exactement
          l'erreur 4 de cette fiche : « valider ».
     Q5 — de quel comportement la diffraction est-elle caractéristique ?
          Restitution du récapitulatif du cours, avec le comportement
          corpusculaire en distracteur — distracteur qui prend tout son sens au
          chapitre 10 : « s'approprier ».

     « Analyser » et « communiquer » ne sont pas mobilisés. Aucune des cinq
     questions ne demande de choisir entre les deux formules du chapitre à
     partir d'une description — ce qui aurait été la question « analyser »
     naturelle, et qui correspond à l'erreur 1, la plus fréquente : les deux
     calculs annoncent leur moule. Et aucune ne demande d'explication rédigée.
     C'est coûteux sur un chapitre où le baccalauréat demande régulièrement
     d'EXPLIQUER pourquoi la diffraction prouve le caractère ondulatoire de la
     lumière. */
  competences: {
    evaluation: ["réaliser", "réaliser", "s'approprier", "valider", "s'approprier"]
  }
};
