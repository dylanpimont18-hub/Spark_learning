/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-quantique.prof.js
   Fiche professeur du chapitre « Physique quantique : dualité et niveaux
   d'énergie » (terminale spécialité), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 9 : 39 énoncés tirés — avec la thermodynamique, le
   chapitre le plus fourni du niveau —, dont 12 numérotés et 27 en banque
   supplémentaire. Deux moules strictement alternés :
     - moule TRANSITION (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : deux niveaux n
       de l'hydrogène donnés par $E_n = -13{,}6/n^2$ eV, on demande la longueur
       d'onde du photon en nm ;
     - moule PHOTON (exercices PAIRS 2, 4, 6, 8, 10, 12) : lambda donnée en nm,
       on demande l'énergie du photon en eV.
   Le moule impair est précieux : le tirage mêle des ABSORPTIONS (1 -> 4,
   1 -> 2, 2 -> 4) et des ÉMISSIONS (4 -> 3, 3 -> 1, 3 -> 2), ce qui permet un
   renvoi précis sur le signe et la valeur absolue. L'exercice 3 (4 -> 3,
   1880,4 nm) et l'exercice 9 (2 -> 4, 487,5 nm) donnent des longueurs d'onde
   hors du visible et dans le visible : utile.
   Aucun exercice, en revanche, ne fait intervenir la LONGUEUR D'ONDE DE DE
   BROGLIE, pourtant définition D3 du cours et objet de la question 5 de
   l'évaluation. Aucun ne demande non plus de dire si une transition est une
   absorption ou une émission : l'énoncé le dit toujours. C'est ce qui contraint
   l'erreur 4 à rester sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-quantique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     ch. 9 (Ondes et signaux : diffraction et interférences) : RETENU, et c'est
     le prérequis le plus nécessaire de toute la terminale. La dualité
     onde-particule ne peut pas s'énoncer devant un élève qui ne sait pas ce
     que « comportement ondulatoire » veut dire concrètement. La définition D2
     du cours de ce chapitre-ci le dit mot pour mot : la lumière se comporte
     « tantôt comme une onde (diffraction, interférences), tantôt comme un flux
     de particules ». Les deux mots entre parenthèses SONT le chapitre 9.
     Présenter la dualité sans eux reviendrait à opposer un modèle connu à un
     modèle vide : l'élève retiendrait une formule (« la lumière est onde et
     particule ») au lieu d'une tension entre deux ensembles de faits
     expérimentaux. Le chapitre 9 fournit la moitié des faits.

     ch. 3 (Dynamique newtonienne) : ÉCARTÉ, bien que la relation de de Broglie
     $\lambda = h/p$ fasse intervenir la quantité de mouvement $p$ définie au
     ch. 3. Deux raisons. D'abord $p = mv$ est une définition d'une ligne, que
     ce chapitre-ci rappelle lui-même dans sa définition D3 : la dépendance est
     de l'ordre du rappel, pas de la construction. Ensuite et surtout, AUCUN
     exercice ni aucune question d'évaluation de ce chapitre ne fait calculer
     une longueur d'onde de de Broglie — seule la question 5 demande de
     reconnaître la formule. Déclarer un prérequis pour une relation jamais
     mise en oeuvre gonflerait le tableau imprimé sans servir l'enseignant.

     ch. 11 (Radioactivité) : ÉCARTÉ. Les deux chapitres parlent de noyaux et
     d'énergies en eV, mais aucun n'utilise l'autre : la radioactivité relève
     du noyau, la quantique des électrons périphériques.
     ch. 1 à 8 : aucun lien.

     UN PRÉREQUIS DE PREMIÈRE N'EST PAS DÉCLARABLE : le chapitre « La lumière :
     modèle ondulatoire », qui installe $\lambda$, $f$ et la relation
     $\lambda = c/f$, indispensable pour passer de $E = hf$ à $E = hc/\lambda$.
     Il est traité dans `note`, qui est imprimée. */
  prerequis: [9],

  /* Rang conseillé (2026-09-17) : rang 10, celui du livre.

     Contrainte dure : ce chapitre doit suivre le chapitre 9, dont il a besoin
     pour donner un contenu au mot « ondulatoire ». Le bloc de fin d'année se
     tient donc dans l'ordre 9 -> 10, et le livre le respecte déjà.

     Le placer en fin d'année n'est pas seulement une conséquence de cette
     contrainte : c'est aussi le bon moment pédagogique. La physique quantique
     demande d'accepter qu'un modèle familier soit insuffisant, ce qui suppose
     que ce modèle ait d'abord été pratiqué. Un élève qui a passé neuf
     chapitres à faire de la physique classique est prêt à en voir les limites ;
     un élève de septembre ne l'est pas.

     PRÉREQUIS MATHÉMATIQUE : aucun outil nouveau, mais une exigence sévère sur
     la <strong>notation scientifique</strong>. Le chapitre fait cohabiter
     $h \approx 6{,}63 \times 10^{-34}$, $c \approx 3{,}00 \times 10^8$,
     $1$ eV $= 1{,}60 \times 10^{-19}$ J et des longueurs d'onde en $10^{-9}$ m :
     quatre ordres de grandeur extrêmes dans un seul calcul, et des résultats
     intermédiaires en $10^{-19}$. Une calculatrice mal utilisée — parenthèses
     oubliées, exposant saisi comme un produit — donne un résultat faux de
     plusieurs dizaines d'ordres de grandeur sans que rien n'alerte. C'est le
     vrai facteur limitant, et il mérite une mise au point explicite. */
  rangConseille: 10,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Ondes et signaux ». Repris aux mots du
     programme. */
  attendus: [
    "Exploiter la relation entre l'énergie d'un photon, sa fréquence et sa longueur d'onde",
    "Exploiter un diagramme de niveaux d'énergie en utilisant la relation entre l'écart d'énergie et la fréquence du photon émis ou absorbé",
    "Décrire un exemple d'expérience mettant en évidence la nécessité de la notion de photon et la dualité onde-particule"
  ],

  note: "Le photon, la dualité onde-particule, la longueur d'onde de de Broglie, la quantification " +
        "de l'énergie et les transitions atomiques sont au programme de spécialité de terminale : " +
        "le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Deux prérequis comptent, et un seul est visible.</strong> Le chapitre s'appuie sur " +
        "le chapitre 9 (« Ondes et signaux ») et cette dépendance est la plus forte de l'année : " +
        "dire que la lumière se comporte « tantôt comme une onde » n'a aucun sens pour un élève qui " +
        "n'a pas vu la diffraction et les interférences. Cela, la colonne « S'appuie sur » " +
        "l'affiche. Mais le chapitre suppose aussi acquis <strong>« La lumière : modèle " +
        "ondulatoire »</strong>, chapitre de <strong>première</strong>, qui installe la relation " +
        "$\\lambda = c/f$ — sans laquelle le passage de $E = hf$ à $E = hc/\\lambda$ est un tour de " +
        "passe-passe : un prérequis ne pouvant viser qu'un chapitre du même niveau, " +
        "<strong>rien ne le montrera</strong>. Signalons aussi que la relation de de Broglie " +
        "$\\lambda = h/p$ mobilise la quantité de mouvement du chapitre 3, mais comme aucun " +
        "exercice ne la met en œuvre, ce lien n'a pas été déclaré.<br/><br/>" +
        "<strong>Le prérequis mathématique est le vrai facteur limitant, et il tient tout entier " +
        "dans la calculatrice.</strong> Aucun outil nouveau : une multiplication, une division. " +
        "Mais le chapitre fait cohabiter $h \\approx 6{,}63\\times10^{-34}$ J·s, " +
        "$c \\approx 3{,}00\\times10^8$ m/s, $1$ eV $= 1{,}60\\times10^{-19}$ J et des longueurs " +
        "d'onde en $10^{-9}$ m, avec des résultats intermédiaires en $10^{-19}$ J. Une parenthèse " +
        "oubliée ou un exposant mal saisi produit un résultat faux de vingt ordres de grandeur " +
        "sans que rien n'alerte. Prévoir une séance de <strong>notation scientifique à la " +
        "calculatrice</strong> avant d'entrer dans le chapitre : c'est le meilleur investissement " +
        "possible ici, et la difficulté n'est pas conceptuelle.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente-neuf énoncés tirés " +
        "alternent deux moules : longueur d'onde d'un photon émis ou absorbé lors d'une transition " +
        "de l'hydrogène, et énergie d'un photon en électronvolts. <strong>Aucun</strong> ne fait " +
        "calculer une <strong>longueur d'onde de de Broglie</strong>, pourtant définition D3 du " +
        "cours et objet de la dernière question d'évaluation : les élèves verront donc cette " +
        "relation sans jamais l'avoir employée. Aucun ne demande non plus de " +
        "<strong>déterminer</strong> si une transition est une absorption ou une émission — " +
        "l'énoncé le dit toujours —, ni de décrire une expérience mettant en évidence la nécessité " +
        "du photon, qui est le troisième attendu officiel. Prévoir un travail spécifique sur ces " +
        "trois points, que le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Croire qu'un photon de grande longueur d'onde est plus énergétique",
      eleve: "L'élève classe les radiations en affirmant que « $650$ nm porte plus d'énergie que " +
             "$400$ nm, puisque $650 > 400$ ». Il annonce donc que la lumière rouge est plus " +
             "énergétique que la bleue, et trouve suspect que le calcul donne $1{,}912$ eV contre " +
             "$3{,}108$ eV.",
      cause: "Deux réflexes se superposent. D'abord l'habitude : partout ailleurs en sciences, une " +
             "grandeur plus grande signale un effet plus intense. Ensuite la lecture de la " +
             "formule : dans $E = hc/\\lambda$, le $\\lambda$ est au " +
             "<strong>dénominateur</strong>, et cette position s'oublie dès qu'on récite la formule " +
             "de mémoire. L'élève se souvient qu'il y a un lien entre $E$ et $\\lambda$, pas de son " +
             "sens. Le piège du cours nomme exactement cette erreur, mais il se lit sans " +
             "convaincre — parce que rien dans l'expérience quotidienne ne dit qu'une lumière bleue " +
             "est « plus énergétique » qu'une rouge.",
      remede: "Faire lire les <strong>deux écritures ensemble</strong>, ce qui lève l'ambiguïté " +
              "d'un coup : $E = hf$ met la fréquence au numérateur (plus de fréquence, plus " +
              "d'énergie — cela, personne ne le conteste), et $E = hc/\\lambda$ met la longueur " +
              "d'onde au dénominateur. Les deux disent la même chose, puisque $\\lambda$ et $f$ " +
              "varient en sens inverse. C'est la relation $\\lambda = c/f$ de première qui fait le " +
              "pont, et la rappeler explicitement vaut mieux que de supposer le lien évident.<br/><br/>" +
              "Ancrer ensuite sur un <strong>fait connu de tous</strong>, qui rend l'ordre " +
              "définitif : les ultraviolets, de courte longueur d'onde, brûlent la peau ; les " +
              "infrarouges, de grande longueur d'onde, réchauffent sans danger. Personne n'a jamais " +
              "attrapé un coup de soleil avec une lampe à infrarouge. L'ordre " +
              "UV $>$ visible $>$ IR est ainsi ancré sur le monde, pas sur une " +
              "formule.<br/><br/>" +
              "Donner enfin un <strong>repère chiffré</strong> qui permet de contrôler tout " +
              "résultat du chapitre : le visible couvre à peu près $400$ à $700$ nm, soit " +
              "$3$ à $1{,}8$ eV. Une énergie de photon visible est donc de l'ordre de " +
              "<strong>deux ou trois électronvolts</strong>, jamais de $0{,}1$ ni de $100$. Deux " +
              "bornes concrètes orientent l'échelle une fois pour toutes.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 9) : le tirage donne les deux extrêmes du moule
         PHOTON à cinq pages d'intervalle. L'exercice 8 tire lambda = 400 nm
         pour 3,108 eV — la plus petite longueur d'onde et la plus forte
         énergie du chapitre — et l'exercice 12 tire lambda = 650 nm pour
         1,912 eV — la plus grande longueur d'onde et la plus faible énergie.
         Le renvoi pointe le 8 parce que c'est celui dont le résultat est le
         plus élevé alors que la donnée est la plus petite : l'inversion s'y
         voit dans le même énoncé. Faire calculer les deux et reporter les
         quatre nombres au tableau (400/3,108 et 650/1,912) rend la relation
         inverse indiscutable, et l'ensemble du tirage la confirme (450 nm ->
         2,762 eV ; 500 -> 2,486 ; 550 -> 2,26 ; 600 -> 2,072). Six couples
         régulièrement décroissants : c'est une table de valeurs toute faite. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Se tromper de signe sur l'écart entre deux niveaux d'énergie",
      eleve: "Pour une transition de $n = 4$ ($E_4 = -0{,}85$ eV) vers $n = 3$ " +
             "($E_3 = -1{,}51$ eV), l'élève calcule $\\Delta E = -1{,}51 - (-0{,}85) = -0{,}66$ eV " +
             "et annonce une énergie de photon négative, ou une longueur d'onde négative. Ou bien " +
             "il additionne les deux valeurs et trouve $-2{,}36$ eV.",
      cause: "Tous les niveaux d'énergie de l'atome sont <strong>négatifs</strong>, ce qui " +
             "déstabilise, et la convention « final moins initial » — correcte pour une variation — " +
             "donne ici un nombre négatif quand l'atome descend. Or l'<strong>énergie du " +
             "photon</strong> n'est pas la variation d'énergie de l'atome : c'est sa valeur " +
             "absolue, parce qu'un photon transporte toujours une énergie positive. Le cours écrit " +
             "d'ailleurs $\\Delta E = |E_f - E_i|$ avec des barres, mais l'élève lit la formule " +
             "sans les voir. S'ajoute la double négation, $-1{,}51 - (-0{,}85)$, qui est une " +
             "difficulté de calcul à part entière.",
      remede: "Imposer une <strong>soustraction toujours orientée</strong>, qui rend la valeur " +
              "absolue inutile : on retranche <strong>toujours le plus petit du plus grand</strong>. " +
              "Ici $-0{,}85 - (-1{,}51) = 0{,}66$ eV. Un photon ne peut pas avoir une énergie " +
              "négative, donc la question du signe ne se pose jamais : on sait avant de calculer " +
              "que la réponse est positive.<br/><br/>" +
              "Faire ensuite <strong>tracer le diagramme</strong> systématiquement, avec les " +
              "niveaux comme des barres horizontales et la transition comme une flèche verticale. " +
              "L'écart d'énergie devient alors une <strong>hauteur</strong> sur le dessin — et une " +
              "hauteur ne peut pas être négative. Le schéma fait le travail que la valeur absolue " +
              "fait dans la formule, et il le fait mieux parce qu'il se voit.<br/><br/>" +
              "Traiter enfin séparément la difficulté du <strong>signe des niveaux</strong>, qui " +
              "mérite une explication et non une consigne : les énergies sont comptées " +
              "négativement parce que le zéro est fixé à l'électron libre, infiniment loin du " +
              "noyau. Un électron lié a moins d'énergie qu'un électron libre : d'où le signe moins. " +
              "Plus le niveau est <strong>bas</strong> (donc négatif de grande valeur absolue), " +
              "plus l'électron est lié. Un élève qui comprend cela lit le diagramme au lieu de le " +
              "subir.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 fait passer
         l'atome du niveau n = 4 au niveau n = 3 PAR ÉMISSION, réponse
         1 880,4 nm. C'est le meilleur support de l'erreur pour deux raisons.
         D'abord c'est la transition au plus PETIT écart d'énergie du tirage
         (0,66 eV), donc celle où les deux niveaux sont les plus proches et où
         la double négation -1,51 - (-0,85) est la plus piégeuse. Ensuite sa
         réponse, 1 880,4 nm, est très supérieure au visible : c'est de
         l'infrarouge, et cela se déduit du petit écart d'énergie — ce qui
         permet de relier cette erreur à l'erreur 1 de cette fiche (petite
         énergie, grande longueur d'onde). L'exercice 11 (3 -> 2, 658,1 nm,
         1,89 eV) est l'autre émission du tirage et donne une raie rouge
         visible : les deux se lisent utilement en vis-à-vis. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Mélanger les électronvolts et les joules",
      eleve: "Pour une transition de $2{,}55$ eV, l'élève calcule directement " +
             "$\\lambda = \\dfrac{hc}{2{,}55}$ et trouve $7{,}8\\times10^{-26}$ m au lieu de " +
             "$487{,}5$ nm. Ou bien, pour une énergie de photon, il annonce " +
             "$3{,}97\\times10^{-19}$ eV au lieu de $2{,}486$ eV : il a donné la valeur en joules " +
             "avec la mauvaise unité.",
      cause: "Le chapitre utilise <strong>deux unités d'énergie</strong> selon le contexte : le " +
             "joule dans les formules ($h$ est en J·s), l'électronvolt dans les énoncés et les " +
             "diagrammes de niveaux. Aucune formule ne signale laquelle elle attend. Le facteur de " +
             "conversion, $1{,}60\\times10^{-19}$, est lui-même une puissance de dix parmi " +
             "d'autres dans un calcul qui en compte déjà quatre : il se confond avec le décor. " +
             "L'élève ne voit pas qu'il a changé d'unité en cours de route.",
      remede: "Poser la <strong>règle unique</strong> du chapitre et s'y tenir : les formules " +
              "travaillent en <strong>joules</strong>, sans exception. On convertit donc " +
              "systématiquement en joules avant d'entrer dans une formule, et on reconvertit en " +
              "électronvolts à la fin si l'énoncé le demande. L'exemple résolu du cours procède " +
              "exactement ainsi, en trois étapes séparées : écart en eV, conversion en J, puis " +
              "longueur d'onde.<br/><br/>" +
              "Faire du <strong>sens de la conversion</strong> une évidence plutôt qu'une mémoire : " +
              "un électronvolt est une <strong>toute petite</strong> énergie " +
              "($1{,}6\\times10^{-19}$ J), donc un nombre d'électronvolts se convertit en joules en " +
              "<strong>multipliant</strong> par ce facteur minuscule — le résultat doit devenir " +
              "beaucoup plus petit. Dans l'autre sens, on divise et le nombre grossit. Poser la " +
              "question « le résultat doit-il grossir ou rapetisser ? » avant de taper évite " +
              "l'inversion.<br/><br/>" +
              "Donner enfin les <strong>deux repères d'ordre de grandeur</strong> qui permettent de " +
              "rejeter presque toute erreur : un photon visible porte quelques " +
              "<strong>électronvolts</strong>, soit quelques $10^{-19}$ <strong>joules</strong>, et " +
              "sa longueur d'onde vaut quelques centaines de <strong>nanomètres</strong>. Une " +
              "longueur d'onde en $10^{-26}$ m — soit un milliard de fois plus petite qu'un noyau " +
              "atomique — est fausse avant d'être vérifiée.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 9 fait passer
         l'atome du niveau n = 2 au niveau n = 4 par absorption, réponse
         487,5 nm. C'est le seul exercice du tirage dont les valeurs
         reproduisent exactement celles de l'exemple résolu du cours (transition
         entre n = 2 et n = 4, écart 2,55 eV, 487,5 nm) : l'élève peut donc
         confronter son calcul à un modèle entièrement rédigé, ligne à ligne, y
         compris l'étape de conversion eV -> J qui est précisément celle qu'il
         saute. Le renvoi est choisi pour cela. Bonus : 487,5 nm tombe dans le
         visible (bleu-vert), ce qui permet de vérifier le repère d'ordre de
         grandeur du remède — quelques centaines de nanomètres pour quelques
         électronvolts — au lieu de le croire sur parole. */
      exercice: { type: "exercice", n: 9 }
    },
    {
      titre: "Croire que l'atome peut absorber n'importe quelle énergie",
      eleve: "L'élève affirme qu'« un atome d'hydrogène éclairé absorbe de l'énergie et chauffe, " +
             "comme n'importe quel objet ». Il ne comprend pas pourquoi un spectre d'absorption " +
             "présente des raies noires fines plutôt qu'une bande continue, ni pourquoi un photon " +
             "d'énergie $1{,}0$ eV traverse l'hydrogène sans être absorbé.",
      cause: "Toute l'expérience de l'élève — et toute la physique classique qu'il a apprise " +
             "jusqu'ici, y compris le chapitre 5 sur la thermodynamique — dit que l'énergie est " +
             "<strong>continue</strong> : on peut chauffer un corps d'autant de degrés qu'on veut. " +
             "La quantification est une rupture, pas une extension. Elle affirme que l'atome ne " +
             "peut accepter qu'une énergie <strong>exactement</strong> égale à un écart entre deux " +
             "de ses niveaux — ni plus, ni moins, même de très peu. Rien dans la scolarité " +
             "antérieure ne prépare à cela, et c'est justement pourquoi cette découverte a " +
             "bouleversé la physique.",
      remede: "Utiliser une <strong>image de monnaie</strong>, qui rend la contrainte immédiate : " +
              "un distributeur qui n'accepte que des pièces de $2$ € rendra une pièce de " +
              "$1{,}80$ € comme une pièce de $5$ €. Ce n'est pas une question de « pas assez » ou " +
              "« trop », c'est une question d'exactitude. L'atome fait de même avec les photons, " +
              "et c'est pourquoi la lumière non absorbée traverse le gaz sans " +
              "l'échauffer.<br/><br/>" +
              "Faire ensuite le lien avec le <strong>fait observable</strong> qui a tout déclenché " +
              "historiquement, et que le récapitulatif du cours mentionne : les spectres atomiques " +
              "sont faits de <strong>raies fines</strong>, pas de bandes continues. Si l'atome " +
              "pouvait absorber n'importe quoi, le spectre solaire serait uniformément sombre — il " +
              "est au contraire percé de raies noires à des longueurs d'onde très précises, dont " +
              "chacune identifie un élément chimique. C'est ainsi qu'on connaît la composition des " +
              "étoiles sans y aller, et cet argument-là emporte l'adhésion.<br/><br/>" +
              "Faire enfin calculer <strong>deux transitions et constater le vide entre elles</strong>, " +
              "ce qui matérialise la quantification : entre la transition $3 \\rightarrow 2$ " +
              "($1{,}89$ eV) et la transition $4 \\rightarrow 3$ ($0{,}66$ eV), aucune énergie " +
              "intermédiaire n'est permise. Le gaz est transparent à tout ce qui se situe entre " +
              "les deux. Deux calculs du chapitre suffisent à le montrer.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente-neuf
         énoncés tirés donnent TOUJOURS la transition (« passe du niveau n = 1
         au niveau n = 4 par absorption ») ou la longueur d'onde, et demandent
         un calcul. Aucun ne demande si une transition est POSSIBLE, aucun ne
         propose une énergie de photon quelconque à confronter aux niveaux,
         aucun ne fait intervenir un spectre de raies. La quantification —
         c'est-à-dire l'idée que seules certaines énergies sont permises — est
         PRÉSUPPOSÉE par tous les énoncés et travaillée par aucun. Le seul
         support du livre est la question 2 de l'évaluation (les niveaux sont-
         ils continus ou discrets ?), mais la règle éditoriale du projet
         interdit de renvoyer vers l'évaluation notée : on remédie avant
         d'évaluer. Le remède s'appuie donc sur l'image de la monnaie, sur les
         spectres de raies, et sur la comparaison de deux transitions du tirage
         (exercices 11 et 3, dont les écarts 1,89 eV et 0,66 eV sont réellement
         calculés dans le chapitre). */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $\lambda = 620$ nm, calculer $E$ en eV. La relation $E = hc/\lambda$
          est dans les formules du cours et s'applique dans le sens direct ; la
          conversion finale en eV est donnée par l'énoncé. Exécution :
          « réaliser ».
     Q2 — les niveaux d'énergie sont-ils continus ou discrets ? Restitution de
          la définition D4 et du récapitulatif : « s'approprier ». C'est
          l'erreur 4 de cette fiche.
     Q3 — transition $n = 2 \to n = 3$, calculer $\lambda$. Ici rien ne
          s'applique directement : il faut d'abord former $|E_f - E_i|$ (erreur
          2 de cette fiche), convertir en joules (erreur 3), puis INVERSER
          $E = hc/\lambda$ en $\lambda = hc/E$. Trois décisions, dont un
          renversement de relation : « analyser ».
     Q4 — une transition vers un niveau supérieur correspond à quoi ? Il faut
          juger quatre propositions sur le sens du transfert d'énergie et
          écarter « ionisation systématique », qui est plausible. C'est un
          contrôle de cohérence sur le modèle : « valider ».
     Q5 — comment s'exprime la longueur d'onde de de Broglie ? Restitution de
          la définition D3, avec $hp$, $p/h$ et $h+p$ en distracteurs :
          « s'approprier ». À noter : c'est la SEULE apparition de de Broglie
          dans tout le chapitre, exercices compris — voir la `note`.

     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. C'est particulièrement coûteux ici,
     où le troisième attendu officiel est explicitement de DÉCRIRE une
     expérience mettant en évidence la dualité onde-particule — un attendu que
     ni les exercices ni l'évaluation ne travaillent, et qui appelle par nature
     une production écrite. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "valider", "s'approprier"]
  }
};
