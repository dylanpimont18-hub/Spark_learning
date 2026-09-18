/* =========================================================
   Spark Learning – js/data/prof/si-2nde/si-2nde-chaines-energie-info.prof.js
   Fiche professeur du chapitre « Chaîne d'énergie et chaîne d'information »
   (seconde SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le CHAPITRE PILOTE du dossier,
   `si-2nde-analyse-fonctionnelle.prof.js`.

   RÉFÉRENTIEL SCIENCES DE L'INGÉNIEUR : analyser, modéliser, résoudre,
   expérimenter, concevoir, communiquer (programme de spécialité SI, 2019).
   `expérimenter` et `concevoir` ne seront jamais tirés par cet ouvrage — le
   corpus ne contient ni travail pratique ni tâche de conception. C'est assumé
   et documenté dans `REFERENTIELS.si` (prof.js) : on emploie les mots du
   programme, on ne les tronque pas.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 1 (ce chapitre est le deuxième de l'ouvrage).

   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire — le
   chapitre le plus fourni du niveau à égalité avec l'analyse fonctionnelle.
   MAIS, là encore, UN SEUL MOULE, répété quarante-deux fois : « la chaîne
   d'énergie de <système> comporte N blocs en série de rendements
   $\eta_1 \ldots \eta_N$, la puissance absorbée vaut $P_{abs}$, calcule la
   puissance utile ». Vérifié énoncé par énoncé sur les quatorze premiers
   tirages : seuls varient le contexte (pompe hydraulique, convoyeur à bande,
   treuil de chantier, tapis roulant, bras robotisé, portail coulissant), le
   NOMBRE de blocs (2, 3 ou 4) et les valeurs de rendement.

   LE FAIT À CONNAÎTRE AVANT D'ENSEIGNER LE CHAPITRE, et il est structurant :
   les 42 énoncés portent TOUS sur la chaîne d'ÉNERGIE, et plus précisément
   sur le seul calcul de rendement. La chaîne d'INFORMATION — qui occupe la
   moitié du cours, ses trois blocs Acquérir / Traiter / Communiquer, et le
   fait qu'elle PILOTE la chaîne d'énergie — n'apparaît dans AUCUN énoncé
   d'exercice. Elle n'est travaillée que par la question 3 du quiz (ordre des
   trois blocs) et la question 3 de l'évaluation (quel composant acquiert).
   C'est l'angle mort du tirage, et la `note` le dit à l'enseignant.

   Conséquence sur les renvois : le nombre de blocs variable (2, 3 ou 4) est en
   revanche une vraie richesse pour l'erreur du produit contre la moyenne, et
   deux des quatre erreurs reçoivent un renvoi vers un exercice numéroté. Les
   deux autres portent sur la chaîne d'information et sur la nature des pertes,
   que le moule unique n'atteint pas : renvoi au quiz pour l'une, `null` motivé
   pour l'autre.

   ATTENTION — CE CHAPITRE N'A QUE 4 QUESTIONS D'ÉVALUATION, pas 5 comme les
   quatre autres du dossier. Compté avec `voir-module.js`, pas supposé :
   `validerProf` refuse toute autre longueur que 4 pour
   `competences.evaluation`.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-2nde-chaines-energie-info"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-2nde`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 5 chapitres, donc les numéros vont de 1 à 5.

     ch. 1 (Analyse fonctionnelle d'un système) : RETENU, et c'est le seul.
     Le lien n'est pas thématique mais méthodologique, et il est dans le bon
     sens : l'analyse fonctionnelle installe le « quoi » (à quoi sert le
     produit, sur quoi il agit), et ce chapitre-ci ouvre le produit pour
     décrire le « comment ». Les deux chaînes n'ont de sens que pour un
     système dont on a déjà nommé la fonction : sans cela, « Convertir »
     devient un mot de vocabulaire au lieu d'une étape du service rendu. La
     fiche du chapitre 1 dit la même chose depuis l'autre bord — elle écarte
     ce chapitre-ci de SES prérequis en expliquant qu'il doit venir APRÈS —
     et les deux fiches sont donc cohérentes, sans cycle.

     Candidats examinés et ÉCARTÉS :
     - ch. 3 (Capteurs et actionneurs) : le candidat le plus tentant, parce
       que les capteurs sont littéralement le bloc « Acquérir » et les
       actionneurs le bloc « Convertir ». Mais la dépendance va dans l'AUTRE
       SENS : on ne peut pas comprendre à quoi sert un capteur avant d'avoir
       vu la chaîne d'information dans laquelle il s'insère. Le cours du
       chapitre 3 suppose d'ailleurs ce chapitre-ci connu (il parle de
       « signal exploitable par un microcontrôleur » sans redéfinir le bloc
       Traiter). Écarté, et volontairement placé APRÈS.
     - ch. 5 (Principes mécaniques de base) : aucun lien opératoire. Le
       rendement se calcule ici sur des puissances déjà données, jamais à
       partir d'une force ou d'un moment. Écarté.
     - ch. 4 (Programmation) : le bloc « Traiter » contient un
       microcontrôleur, mais aucun énoncé de ce chapitre ne demande de lire
       du code. Écarté. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2, celui du livre.

     C'est la place qu'impose le prérequis ci-dessus — après l'analyse
     fonctionnelle — et elle est aussi celle de la progression classique de
     seconde SI : on décrit d'abord le besoin, puis la structure interne qui y
     répond, et seulement ensuite les composants (ch. 3) et leur pilotage
     (ch. 4). Le livre le range aussi en chapitre 2 : les deux ordres
     coïncident et la colonne « Chap. » de la progression ne portera pas le
     triangle d'alerte.

     RAPPEL SUR `rangConseille`, tout ou rien par dossier : tant qu'une seule
     fiche de `si-2nde` le porte, l'ouvrage REFUSE de compiler. Les cinq
     fiches du dossier le portent donc toutes, et leurs rangs forment une
     permutation complète de 1 à 5 (1 : analyse fonctionnelle, 2 : ce
     chapitre, 3 : capteurs-actionneurs, 4 : programmation, 5 : mécanique). */
  rangConseille: 2,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 2 de seconde), qui ne
     donne que des titres de chapitres — vérifié — et le programme de
     spécialité Sciences de l'ingénieur (2019).

     Les trois attendus sont donc formulés en VERBES D'ACTION vérifiables, à la
     manière du chapitre pilote, et strictement bornés à ce que le chapitre
     traite réellement : les quatre blocs de la chaîne d'énergie, les trois de
     la chaîne d'information, et le rendement comme produit. Rien sur le
     dimensionnement d'un composant ni sur le bilan énergétique d'un bâtiment,
     que le corpus n'aborde pas. */
  attendus: [
    "Identifier, sur un système réel, les blocs de la chaîne d'énergie (Alimenter, Distribuer, Convertir, Transmettre) et ceux de la chaîne d'information (Acquérir, Traiter, Communiquer)",
    "Calculer le rendement global d'une chaîne de blocs en série comme le produit des rendements, et en déduire la puissance utile ou les pertes",
    "Justifier que la chaîne d'information pilote la chaîne d'énergie, et situer un composant donné dans l'une ou l'autre"
  ],

  note: "Les quatre blocs de la chaîne d'énergie (Alimenter, Distribuer, Convertir, Transmettre), les " +
        "trois blocs de la chaîne d'information (Acquérir, Traiter, Communiquer), et le rendement " +
        "comme produit des rendements en série : le chapitre ouvre le produit que le chapitre 1 " +
        "s'était contenté de décrire de l'extérieur.<br/><br/>" +
        "<strong>Ce que la colonne « S'appuie sur » affiche, et pourquoi.</strong> Un seul " +
        "prérequis, le <strong>chapitre 1</strong>, et il est méthodologique plutôt que technique : " +
        "les deux chaînes décrivent le <strong>« comment »</strong> d'un système dont l'analyse " +
        "fonctionnelle a déjà nommé le <strong>« quoi »</strong>. Sans cette étape, « Convertir » " +
        "devient un mot de vocabulaire au lieu d'une étape du service rendu.<br/><br/>" +
        "<strong>Les dépendances que la colonne ne peut pas montrer.</strong> Un prérequis ne " +
        "vise qu'un chapitre du même niveau, donc deux appuis réels restent invisibles dans le " +
        "tableau. D'abord la <strong>multiplication de nombres décimaux inférieurs à 1</strong> : " +
        "les élèves qui butent sur $0{,}93 \\times 0{,}86$ butent sur tout le chapitre, et le " +
        "phénomène « le produit est plus petit que chaque facteur » est ici le cœur du sens, pas un " +
        "détail de calcul. Ensuite la notion de <strong>puissance en watts</strong>, vue en " +
        "physique-chimie : le chapitre la manipule sans la redéfinir.<br/><br/>" +
        "<strong>L'angle mort du livre, à connaître avant de composer un devoir.</strong> Les " +
        "42 énoncés tirés pour ce chapitre portent <strong>tous</strong> sur la chaîne d'énergie, et " +
        "tous sur le même calcul : multiplier des rendements puis appliquer le résultat à " +
        "$P_{\\text{abs}}$. La <strong>chaîne d'information n'apparaît dans aucun exercice</strong> " +
        "— elle n'est travaillée que par la question 3 du quiz et la question 3 de l'évaluation. " +
        "Prévoyez donc un temps dédié : faire tracer les deux chaînes d'un objet apporté en classe, " +
        "en traçant à part la <strong>flèche d'ordre</strong> qui descend de « Traiter » vers " +
        "« Distribuer ». C'est elle qui fait comprendre que les deux chaînes ne sont pas deux " +
        "listes parallèles, mais un système de commande.",

  /* Les erreurs fréquentes. Quatre, dont DEUX reçoivent un renvoi vers un
     exercice numéroté, une vers le quiz et une en `null` motivé — répartition
     entièrement dictée par le moule unique documenté en en-tête. */
  erreurs: [
    {
      titre: "Faire la moyenne des rendements au lieu de leur produit",
      eleve: "Pour trois blocs à $0{,}90$, $0{,}91$ et $0{,}91$, l'élève annonce un rendement global " +
             "de $0{,}91$ — « c'est à peu près $91\\%$ partout, donc $91\\%$ en tout ».",
      cause: "La moyenne est le geste que l'école a le plus entraîné pour « résumer plusieurs " +
             "nombres en un seul », et rien dans l'énoncé ne dit explicitement de multiplier. " +
             "S'ajoute une intuition physique fausse mais séduisante : puisque chaque bloc laisse " +
             "passer « à peu près tout », le total devrait laisser passer « à peu près tout » " +
             "aussi. L'élève ne se trompe pas de calcul, il se trompe de <strong>modèle</strong> — " +
             "il additionne des qualités là où les pertes se composent.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17, graine 20260816 + 1).
         Exercice 2 : convoyeur à bande, TROIS blocs en série,
         eta1 = 0,90 (transformateur), eta2 = 0,91 (variateur),
         eta3 = 0,91 (moteur MAS), P_abs = 150 W. Le corrigé donne
         eta = 0,745 et P_utile = 111,8 W.
         POURQUOI CELUI-LÀ ET PAS UN AUTRE. Les trois rendements sont
         QUASI IDENTIQUES (0,90 / 0,91 / 0,91), donc la moyenne vaut 0,907
         alors que le produit vaut 0,745 : l'écart de 16 points est énorme
         ALORS MÊME que l'élève « ne voit pas de différence » entre les trois
         valeurs. C'est exactement la situation qui rend la moyenne tentante et
         son échec spectaculaire.
         COMPARÉ AUX AUTRES CANDIDATS DU MÊME MOULE : l'exercice 3 et
         l'exercice 12 n'ont que DEUX blocs, donc l'écart moyenne/produit y est
         plus faible et la leçon moins nette. L'exercice 5 (quatre blocs :
         0,94 / 0,90 / 0,85 / 0,93) montrerait un écart encore plus grand
         (0,905 contre 0,669) mais ses valeurs sont DISPERSÉES, ce qui donne à
         l'élève une raison légitime de se méfier de la moyenne : le piège ne
         se referme pas. L'exercice 11 (0,97 / 0,94 / 0,91) est le second
         meilleur choix et fait un excellent exercice de consolidation. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites d'abord constater l'écart sur l'exercice 2, avant toute explication : trois " +
              "blocs presque identiques ($0{,}90$, $0{,}91$, $0{,}91$), une moyenne de $0{,}907$, un " +
              "produit de $0{,}745$. Seize points d'écart sur des nombres qui se ressemblent : " +
              "l'élève voit que le désaccord n'est pas un détail d'arrondi.<br/><br/>" +
              "Puis donnez le <strong>sens physique</strong>, qui est la seule chose qui fait tenir " +
              "la règle : chaque bloc ne reçoit que <strong>ce que le précédent lui a laissé</strong>. " +
              "Sur $100$ W entrants, le premier bloc à $90\\%$ en transmet $90$ ; le deuxième à " +
              "$91\\%$ n'agit donc pas sur $100$ mais sur $90$, et en transmet $81{,}9$. On ne " +
              "résume pas une cascade, on la parcourt.<br/><br/>" +
              "Le repère de contrôle qui attrape l'erreur en une seconde, et qui vaut la peine " +
              "d'être écrit au tableau : <strong>le rendement global est toujours plus petit que le " +
              "plus petit des rendements</strong>. Une réponse égale à la moyenne, ou coincée entre " +
              "les valeurs données, est donc fausse avant même d'être vérifiée."
    },
    {
      titre: "Multiplier les rendements par la puissance sans les avoir d'abord composés",
      eleve: "Pour deux blocs à $0{,}93$ et $0{,}82$ avec $P_{\\text{abs}} = 350$ W, l'élève écrit " +
             "$350 \\times 0{,}93 = 325{,}5$ puis s'arrête, ou bien additionne les deux résultats " +
             "partiels $325{,}5 + 287 = 612{,}5$ W — une puissance utile supérieure à la puissance " +
             "absorbée.",
      cause: "L'énoncé livre une liste de nombres et un mot d'ordre (« calcule »), et l'élève " +
             "applique la première opération plausible au premier couple de nombres qu'il voit. " +
             "Ce n'est pas de la précipitation : c'est l'absence de <strong>représentation du " +
             "trajet</strong>. Tant que la chaîne n'est pas dessinée, les rendements sont des " +
             "coefficients flottants sans ordre ; dès qu'elle l'est, le calcul devient une " +
             "évidence.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17).
         Exercice 12 : pompe hydraulique, DEUX blocs, eta1 = 0,93 (hacheur),
         eta2 = 0,82 (moteur CC), P_abs = 350 W, réponse 267,1 W.
         POURQUOI CELUI-LÀ. C'est le plus court des douze (deux blocs
         seulement), donc l'élève ne peut pas se cacher derrière la longueur du
         calcul : s'il se trompe, c'est bien sur l'ORDRE des opérations et pas
         sur une étape oubliée dans une liste de quatre. Et l'écart entre les
         deux rendements (0,93 contre 0,82) est assez large pour que les deux
         produits partiels intermédiaires soient nettement différents, donc
         reconnaissables à la correction.
         COMPARÉ AUX AUTRES CANDIDATS À DEUX BLOCS : l'exercice 3
         (0,88 / 0,81 sur 150 W) et l'exercice 6 (0,94 / 0,87 sur 500 W) sont
         du même moule. L'exercice 8 serait le PIRE choix : ses deux rendements
         sont ÉGAUX (0,92 et 0,92), donc un élève qui n'en applique qu'un se
         trompe d'une quantité qu'il ne peut pas attribuer à un bloc plutôt
         qu'à l'autre — le diagnostic devient impossible. L'exercice 6 est le
         bon second support, avec un P_abs rond (500 W) qui facilite le calcul
         mental de contrôle. */
      exercice: { type: "exercice", n: 12 },
      remede: "Imposez le <strong>dessin avant le calcul</strong>, systématiquement : une flèche, " +
              "un rectangle par bloc, la puissance écrite SOUS chaque flèche. Sur l'exercice 12, " +
              "cela donne $350$ W $\\to$ [hacheur $0{,}93$] $\\to$ $325{,}5$ W $\\to$ [moteur " +
              "$0{,}82$] $\\to$ $267{,}1$ W. L'élève ne calcule plus une expression, il suit un " +
              "trajet — et un trajet ne se parcourt pas deux fois depuis le départ.<br/><br/>" +
              "Deux contrôles de vraisemblance à installer comme des réflexes, parce qu'ils " +
              "attrapent toutes les variantes de cette erreur : <strong>la puissance utile est " +
              "toujours plus petite que la puissance absorbée</strong> (une réponse de $612{,}5$ W " +
              "pour $350$ W entrants est impossible avant tout calcul, et l'élève peut le dire " +
              "lui-même), et <strong>elle diminue à chaque bloc franchi</strong> (donc jamais " +
              "d'addition de résultats partiels).<br/><br/>" +
              "Enchaînez sur l'exercice 6, même moule mais $P_{\\text{abs}} = 500$ W : le nombre " +
              "rond permet de vérifier chaque étape de tête et de confirmer que la méthode est " +
              "devenue automatique."
    },
    {
      titre: "Ranger un composant dans la mauvaise chaîne, ou dans le mauvais bloc",
      eleve: "« Le moteur du tapis roulant fait avancer les colis, et pour ça il faut bien " +
             "l'information du capteur : donc le moteur est dans la chaîne d'information. » Ou, plus " +
             "fréquent encore : « le réducteur transforme la vitesse, donc c'est le bloc " +
             "Convertir ».",
      cause: "Le verbe de l'énoncé ne suffit pas à trancher, et le vocabulaire des deux chaînes se " +
             "recouvre à l'oreille : « traiter », « transmettre », « convertir », « distribuer » " +
             "sont des mots de la langue courante qui s'appliquent aussi bien à de l'énergie qu'à " +
             "de l'information. Le critère qui tranche est ailleurs — dans la <strong>nature de ce " +
             "qui circule</strong> — et il n'est pas dans le mot, donc l'élève ne peut pas le " +
             "deviner en lisant.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 42 énoncés tirés sont TOUS du même moule, et ce moule est un
         calcul de rendement : il fournit déjà les blocs nommés entre
         parenthèses (« eta2 = 0,93 (hacheur) », « eta4 = 0,91 (engrenage) »)
         et ne demande jamais à l'élève de RANGER un composant. Aucun exercice
         ne peut donc mettre cette confusion en défaut ; renvoyer vers l'un
         d'eux serait un renvoi faux.
         Le QUIZ, lui, la traite de front. Sa question 1 donne « un moteur CC
         12 V / 60 W alimente un réducteur puis une courroie » et demande dans
         quel bloc se situe le moteur ; les quatre options sont les quatre
         blocs, chacune accompagnée de sa justification (« Alimenter — il
         fournit l'énergie », « Transmettre — il transmet le mouvement »), donc
         l'élève doit précisément choisir entre les verbes qui se ressemblent.
         La correction nomme en plus ce qui occupe les deux autres blocs
         (batterie pour Alimenter, réducteur et courroie pour Transmettre) :
         c'est le seul support du livre qui fasse le tri complet.
         La question 3 du quiz (ordre des trois blocs de la chaîne
         d'information) est le complément naturel, et le remède y renvoie. */
      exercice: { type: "quiz", n: 1 },
      remede: "Passez par le quiz 1, bâti exactement sur cette confusion : le moteur CC y est " +
              "proposé dans les quatre blocs à la fois, chaque option portant sa justification. " +
              "L'élève est obligé de choisir entre des verbes qui se ressemblent, et la correction " +
              "range au passage la batterie, le réducteur et la courroie.<br/><br/>" +
              "La question qui tranche, et il n'y en a qu'une : <strong>« qu'est-ce qui circule " +
              "dans ce fil — des watts ou des bits ? »</strong>. Des watts, c'est la chaîne " +
              "d'énergie ; des bits, c'est la chaîne d'information. Un moteur consomme des watts " +
              "même quand un capteur le commande : il reste dans la chaîne d'énergie, et le signal " +
              "de commande n'y change rien.<br/><br/>" +
              "Pour le second cas — le réducteur pris pour « Convertir » — la distinction se dit en " +
              "une phrase : <strong>Convertir change la NATURE de l'énergie</strong> (électrique " +
              "$\\to$ mécanique), <strong>Transmettre n'en change que la FORME</strong> (rotation " +
              "rapide $\\to$ rotation lente). À l'entrée et à la sortie d'un réducteur, c'est de " +
              "la mécanique dans les deux cas : rien n'a été converti. Le quiz 3, sur l'ordre " +
              "Acquérir $\\to$ Traiter $\\to$ Communiquer, complète utilement le tri."
    },
    {
      titre: "Croire que les pertes disparaissent, ou les confondre avec la puissance utile",
      eleve: "Interrogé sur ce que devient la différence entre $750$ W absorbés et $630$ W utiles, " +
             "l'élève répond « c'est de l'énergie qui n'est pas utilisée », « elle reste dans le " +
             "moteur » ou « elle est perdue dans les fils ». Ou bien, sur un rendement de " +
             "$0{,}84$, il annonce que les pertes valent $0{,}84 \\times 750$.",
      cause: "Le mot « perte » suggère une disparition, et rien dans la formule " +
             "$\\eta = P_{\\text{utile}} / P_{\\text{abs}}$ ne dit où va le reste. La conservation " +
             "de l'énergie est par ailleurs une idée abstraite tant qu'on n'a pas touché un " +
             "réducteur chaud après vingt minutes de fonctionnement : l'élève l'a apprise en " +
             "physique-chimie, mais il ne l'a pas encore reliée à ce calcul-ci.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Aucun des 42 énoncés tirés ne demande les PERTES : le moule unique
         demande systématiquement la puissance utile (« Calcule la puissance
         utile P_utile en sortie »), jamais la différence
         P_abs - P_utile ni sa nature thermique.
         Le quiz ne peut pas davantage servir : ses trois questions portent sur
         le bloc d'un moteur (Q1), sur le produit des rendements (Q2) et sur
         l'ordre de la chaîne d'information (Q3). Aucune ne parle de pertes.
         La seule occurrence dans tout le chapitre est la QUESTION 4 DE
         L'ÉVALUATION (750 W absorbés, eta = 0,84, calculer la puissance perdue
         sous forme de chaleur) — et une remédiation ne renvoie JAMAIS vers
         l'évaluation notée : ce serait donner la réponse du contrôle à
         l'avance.
         Donc `null`, franchement, avec le geste de substitution dans le
         remède. À noter pour l'enseignant : l'encadré « piège » du cours et la
         quatrième puce du récapitulatif traitent bien le sujet (effet Joule,
         frottement), mais ce sont des textes de cours, pas des supports
         d'entraînement. */
      exercice: null,
      remede: "Aucun exercice ni quiz du livre ne demande les pertes — le moule unique du chapitre " +
              "ne réclame que la puissance utile, et la seule question qui aborde la chaleur est " +
              "celle de l'évaluation, qu'on ne déflore pas. Le geste de substitution tient en " +
              "trois minutes et se fait sur un exercice déjà corrigé.<br/><br/>" +
              "<strong>Rajoutez une ligne à chaque exercice fait.</strong> Après avoir trouvé " +
              "$P_{\\text{utile}}$, demandez systématiquement : « et les " +
              "$P_{\\text{abs}} - P_{\\text{utile}}$ watts restants, où sont-ils passés ? ». Sur " +
              "l'exercice 12 (pompe hydraulique, $350$ W absorbés, $267{,}1$ W utiles), cela fait " +
              "$82{,}9$ W qui ne se sont pas évaporés : ils <strong>chauffent le hacheur et le " +
              "moteur</strong>. L'élève finit par répondre avant qu'on pose la question.<br/><br/>" +
              "Ancrez ensuite les <strong>deux seules causes</strong> à connaître en seconde, parce " +
              "qu'elles rendent la réponse concrète au lieu d'incantatoire : " +
              "<strong>l'effet Joule</strong> dans tout ce qui conduit le courant (câbles, " +
              "bobinages, électronique de puissance) et le <strong>frottement</strong> dans tout ce " +
              "qui tourne ou glisse (engrenages, courroies, paliers). Les deux produisent de la " +
              "chaleur, et c'est vérifiable à la main.<br/><br/>" +
              "Le contrôle qui prévient l'autre moitié de l'erreur : <strong>les pertes sont " +
              "toujours plus petites que la puissance utile quand le rendement dépasse " +
              "$0{,}5$</strong>. Annoncer $0{,}84 \\times 750 = 630$ W de pertes pour un rendement " +
              "de $84\\%$ revient à dire qu'on perd plus qu'on n'utilise : impossible, et l'élève " +
              "peut le rejeter seul."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. QUATRE questions
     ici, et non cinq — COMPTÉ avec `voir-module.js`, pas supposé : ce chapitre
     est le seul du dossier `si-2nde` à ne pas en avoir cinq, et `validerProf`
     refuse toute autre longueur.

     Référentiel SI (2019). ÉTIQUETAGE HONNÊTE (règle du projet) : la
     compétence est lue sur la tâche RÉELLEMENT demandée par l'énoncé, jamais
     choisie pour équilibrer la grille.

     Q1 (moteur CC relié à un réducteur puis une vis à billes : quel bloc ?)
        → analyser : identifier et caractériser un constituant dans une
        structure donnée. Restitution appliquée, sans calcul.
     Q2 (deux rendements $0{,}82$ et $0{,}91$, $P_{abs} = 500$ W, calculer la
        puissance utile : $373$ W) → résoudre : application directe de la
        formule du cours sur des nombres donnés, rien à modéliser.
     Q3 (quel composant assure « Acquérir » dans un tri postal : le lecteur de
        code-barres) → analyser : même nature que Q1, sur la chaîne
        d'information cette fois.
     Q4 ($750$ W absorbés, $\eta = 0{,}84$ : quelle puissance perdue en
        chaleur ? $120$ W) → modéliser : la formule du cours donne
        $P_{utile}$, pas les pertes. Il faut d'abord comprendre que
        $P_{pertes} = P_{abs} - P_{utile}$, c'est-à-dire écrire soi-même la
        relation absente de l'énoncé ET du cours. C'est le seul pas de
        traduction du chapitre, et c'est précisément l'objet de l'erreur 4
        ci-dessus.

     RÉPARTITION DE CE CHAPITRE : analyser 2, résoudre 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont PAS mobilisés — aucune
     question ne demande de manipuler, de concevoir, ni de rédiger une
     explication. Ce n'est pas un oubli mais un constat sur les quatre énoncés. */
  competences: {
    evaluation: ['analyser', 'résoudre', 'analyser', 'modéliser']
  }
};
