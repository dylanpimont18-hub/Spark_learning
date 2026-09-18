/* =========================================================
   Spark Learning – js/data/prof/si-2nde/si-2nde-capteurs-actionneurs.prof.js
   Fiche professeur du chapitre « Capteurs et actionneurs » (seconde SI), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le CHAPITRE PILOTE du dossier,
   `si-2nde-analyse-fonctionnelle.prof.js`.

   RÉFÉRENTIEL SCIENCES DE L'INGÉNIEUR : analyser, modéliser, résoudre,
   expérimenter, concevoir, communiquer (programme de spécialité SI, 2019).
   `expérimenter` et `concevoir` ne seront jamais tirés par cet ouvrage — le
   corpus ne contient ni travail pratique ni tâche de conception. C'est
   particulièrement frustrant SUR CE CHAPITRE-CI, qui est celui où le programme
   officiel attend le plus de manipulation (brancher un LM35, relever une
   caractéristique, comparer deux capteurs au banc). Le livre ne peut pas le
   fournir ; la `note` le dit à l'enseignant plutôt que de le masquer par un
   étiquetage complaisant.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 2 (ce chapitre est le troisième de l'ouvrage).

   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire — moitié
   moins que les chapitres 1 et 2. Et là encore UN SEUL MOULE, répété
   vingt-quatre fois : « <capteur> est connecté à <carte> équipé d'un CAN de
   $n$ bits, la plage de tension va de $0$ V à $V_{max}$, calcule le quantum
   $q$ en millivolts ». Vérifié énoncé par énoncé sur les quatorze premiers
   tirages.

   LA COMBINATOIRE EXACTE, qui détermine tous les renvois ci-dessous. Le moule
   croise trois familles de valeurs, et rien d'autre :
     - $n \in \{8, 10, 12\}$ bits, donc $2^n \in \{256, 1024, 4096\}$ ;
     - $V_{max} \in \{3{,}3 ; 5{,}0\}$ V ;
     - le capteur, purement décoratif (LM35, HC-SR04 absent du tirage,
       piézorésistif, LDR, potentiomètre) : il ne change AUCUN calcul.
   Six combinaisons possibles, six réponses possibles, et les douze exercices
   numérotés les parcourent toutes deux fois : $1{,}22$ mV (12 bits / 5 V,
   Ex1 et Ex9), $3{,}22$ mV (10 bits / 3,3 V, Ex2 et Ex10), $19{,}53$ mV
   (8 bits / 5 V, Ex3 et Ex11), $0{,}81$ mV (12 bits / 3,3 V, Ex4 et Ex12),
   $4{,}88$ mV (10 bits / 5 V, Ex5 et Ex7), $12{,}89$ mV (8 bits / 3,3 V,
   Ex6 et Ex8). C'est une richesse RÉELLE pour l'erreur sur $2^n$ : on peut
   choisir la paire d'exercices qui isole exactement la variable fautive.

   L'ANGLE MORT DU TIRAGE. Le cours couvre quatre choses ; le tirage n'en
   travaille qu'une. Ne sont touchés par AUCUN des 24 énoncés :
     - la distinction capteur / actionneur elle-même, qui donne son titre au
       chapitre (traitée par la seule question 3 de l'évaluation) ;
     - la conversion inverse $N \to V$ ou $V \to N$, c'est-à-dire l'usage
       réel de `analogRead()` (traitée par le quiz 1 et par les questions 2
       et 5 de l'évaluation) ;
     - le capteur ultrason HC-SR04 et le calcul de durée d'écho, pourtant
       cité dans le cours ET dans l'encadré « piège » (traité par la seule
       question 2 de l'évaluation).
   Deux des quatre erreurs ci-dessous en découlent directement et renvoient au
   quiz, qui est le seul support d'entraînement à traiter la conversion.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-2nde-capteurs-actionneurs"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-2nde`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 5 chapitres, donc les numéros vont de 1 à 5.

     ch. 2 (Chaîne d'énergie et chaîne d'information) : RETENU, et c'est le
     prérequis dur. Un capteur n'est pas un objet isolé : c'est le bloc
     « Acquérir » de la chaîne d'information, et un actionneur est le bloc
     « Convertir » de la chaîne d'énergie. Le cours de ce chapitre-ci le
     suppose acquis sans le redire — il parle de « signal exploitable par un
     microcontrôleur » sans redéfinir le bloc « Traiter », et le mot
     « actionneur » y apparaît déjà comme une notion connue (il figure même
     dans les définitions du chapitre 2). Sans cette place dans la chaîne, le
     chapitre se réduit à une liste de composants à mémoriser.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Programmation) : le candidat le plus tentant, parce que
       `analogRead()` revient dans les deux chapitres et que la question 5 de
       l'évaluation d'ici demande littéralement « quelle valeur retourne
       analogRead() ». Mais la dépendance va dans l'AUTRE SENS : c'est le
       chapitre 4 qui a besoin de savoir ce qu'est un CAN pour expliquer
       pourquoi `analogRead()` rend un entier entre $0$ et $1023$, et sa
       propre question 5 reprend exactement le calcul d'ici. Le quantum doit
       donc être vu AVANT le code, sinon le $1023$ reste un nombre magique.
       Écarté, et volontairement placé AVANT.
     - ch. 1 (Analyse fonctionnelle) : appui lointain, déjà porté par le
       chapitre 2 qui le déclare. Le redéclarer ici n'ajouterait aucune
       information à la colonne « S'appuie sur » et alourdirait le tableau.
       Écarté.
     - ch. 5 (Principes mécaniques de base) : aucun lien. Le chapitre ne
       calcule ni force ni moment ; le potentiomètre rotatif du tirage n'est
       cité que comme contexte, sans aucune grandeur mécanique. Écarté. */
  prerequis: [2],

  /* Rang conseillé (2026-09-17) : rang 3, celui du livre.

     La place est imposée par le prérequis (après le chapitre 2) et par le
     chapitre 4 qui en dépend (avant la programmation). Elle correspond aussi
     à la progression classique de seconde SI : on décrit le besoin, puis la
     structure, puis les composants, puis leur pilotage. Le livre le range
     aussi en chapitre 3 : les deux ordres coïncident et la colonne « Chap. »
     de la progression ne portera pas le triangle d'alerte.

     RAPPEL SUR `rangConseille`, tout ou rien par dossier : tant qu'une seule
     fiche de `si-2nde` le porte, l'ouvrage REFUSE de compiler. Les cinq
     fiches du dossier le portent donc toutes, et leurs rangs forment une
     permutation complète de 1 à 5. */
  rangConseille: 3,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 3 de seconde), qui ne
     donne que des titres de chapitres — vérifié — et le programme de
     spécialité Sciences de l'ingénieur (2019).

     Formulés en VERBES D'ACTION vérifiables, à la manière du chapitre pilote,
     et strictement bornés à ce que le chapitre traite RÉELLEMENT : la
     distinction capteur/actionneur, la nature analogique ou numérique d'un
     signal, et le quantum d'un CAN dans les deux sens de conversion. Rien sur
     le conditionnement du signal, le filtrage, ni le choix d'un capteur sur
     cahier des charges, que le corpus n'aborde pas. */
  attendus: [
    "Distinguer un capteur d'un actionneur, et un signal analogique d'un signal numérique, sur des composants réels du laboratoire de SI",
    "Calculer le quantum d'un convertisseur analogique-numérique à partir de sa résolution en bits et de sa plage de tension",
    "Convertir une tension en valeur numérique, et réciproquement, pour interpréter la sortie d'une chaîne d'acquisition"
  ],

  note: "Le capteur et l'actionneur, le signal analogique et le signal numérique, le convertisseur " +
        "analogique-numérique et son quantum $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$ : " +
        "le chapitre descend au niveau du composant, après le besoin (chapitre 1) et la structure " +
        "(chapitre 2).<br/><br/>" +
        "<strong>Ce que la colonne « S'appuie sur » affiche, et pourquoi.</strong> Un seul " +
        "prérequis, le <strong>chapitre 2</strong> : un capteur n'est pas un objet isolé, c'est le " +
        "bloc <strong>Acquérir</strong> de la chaîne d'information, et un actionneur le bloc " +
        "<strong>Convertir</strong> de la chaîne d'énergie. Sans cette place dans la chaîne, le " +
        "chapitre se réduit à une liste de composants à mémoriser.<br/><br/>" +
        "<strong>Les dépendances que la colonne ne peut pas montrer.</strong> Un prérequis ne vise " +
        "qu'un chapitre du même niveau, or l'obstacle réel de ce chapitre est " +
        "<strong>mathématique</strong> : les <strong>puissances de deux</strong> ($2^8 = 256$, " +
        "$2^{10} = 1024$, $2^{12} = 4096$) et la <strong>division par une puissance</strong>. Un " +
        "élève qui calcule $2^{10} = 20$ ne terminera aucun des douze exercices, quelle que soit sa " +
        "compréhension du CAN — et c'est l'erreur 1 ci-dessous, de loin la plus fréquente. " +
        "S'ajoutent les <strong>préfixes milli et micro</strong>, vus en physique-chimie : tous les " +
        "énoncés demandent une réponse en millivolts alors que la formule rend des volts.<br/><br/>" +
        "<strong>L'angle mort du livre, à connaître avant de composer un devoir.</strong> Les " +
        "24 énoncés tirés demandent <strong>tous</strong> la même chose : le quantum, dans le sens " +
        "direct. Trois notions du cours ne sont travaillées par <strong>aucun exercice</strong> : " +
        "la distinction capteur/actionneur qui donne son titre au chapitre, la conversion inverse " +
        "$N \\to V$ (l'usage réel de `analogRead()`), et le capteur ultrason HC-SR04 avec sa durée " +
        "d'écho — pourtant cité dans le cours et dans l'encadré « piège ». Le quiz couvre les deux " +
        "premières ; la troisième n'apparaît que dans l'évaluation. Prévoyez donc un temps dédié à " +
        "la conversion inverse, qui est le geste que l'élève rencontrera vraiment dès le chapitre 4." +
        "<br/><br/>" +
        "<strong>Enfin, la limite la plus visible pour un enseignant de SI.</strong> Ce chapitre est " +
        "celui où le programme attend le plus de <strong>manipulation</strong> : brancher un LM35, " +
        "relever sa caractéristique, comparer deux capteurs au banc. Le livre ne peut fournir aucun " +
        "support de travail pratique — la compétence <em>expérimenter</em> reste vide dans la " +
        "grille, et c'est un constat, pas un oubli. Une séance au laboratoire reste indispensable.",

  /* Les quatre erreurs fréquentes. DEUX reçoivent un renvoi vers un exercice
     numéroté, DEUX vers le quiz — et cette répartition n'est pas un manque de
     recherche : elle découle du moule unique documenté en en-tête, qui ne
     demande jamais la conversion inverse ni le tri capteur/actionneur.

     Les erreurs sont propres à la culture du chapitre : ce sont des confusions
     de CHAÎNE D'ACQUISITION (bit, quantum, résolution, niveaux), pas des
     erreurs de calcul plaquées d'un autre domaine. */
  erreurs: [
    {
      titre: "Calculer $2n$ ou $n^2$ au lieu de $2^n$ pour le nombre de niveaux",
      eleve: "Pour un CAN $10$ bits sur $0$–$5$ V, l'élève écrit $q = \\dfrac{5}{20}$ et annonce " +
             "$250$ mV, ou $q = \\dfrac{5}{100} = 50$ mV. La bonne réponse est $4{,}88$ mV.",
      cause: "Trois écritures se ressemblent à l'œil — $2n$, $n^2$, $2^n$ — et la notation " +
             "exponentielle est encore récente en seconde. Surtout, l'élève n'a aucun moyen " +
             "INTERNE de repérer son erreur : $250$ mV est un nombre plausible pour une tension, " +
             "rien ne le signale comme faux. L'erreur passe donc jusqu'au bout du calcul sans " +
             "résistance, ce qui est la pire configuration pédagogique.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17, graine 20260816 + 2).
         Exercice 3 : photorésistance (LDR), CAN de 8 BITS, plage 0-5,0 V,
         réponse 19,53 mV. Le corrigé écrit explicitement
         « Nombre de niveaux de quantification : 2^8 = 256 ».
         POURQUOI CELUI-LÀ. C'est le tirage où les trois écritures fautives
         donnent les résultats les PLUS ÉCARTÉS de la bonne réponse, donc les
         plus faciles à confronter : 2^8 = 256 donne 19,53 mV, alors que
         2n = 16 donnerait 312,5 mV et n^2 = 64 donnerait 78,1 mV. Un facteur
         16 et un facteur 4 : les trois réponses ne peuvent pas se confondre.
         Avec un CAN 12 bits, au contraire, l'écart serait si grand que
         l'élève rejetterait sa propre réponse sans comprendre pourquoi.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 11 est le MÊME couple
         (8 bits / 5,0 V, réponse 19,53 mV) et fait un second support
         immédiat. Les exercices 6 et 8 sont aussi en 8 bits mais sur 3,3 V
         (12,89 mV), donc deux variables changent à la fois si on les enchaîne
         — moins lisible pour isoler la faute sur 2^n. Les exercices 1, 4, 9 et
         12 (12 bits) seraient les PIRES choix : leur réponse est déjà
         inférieure à 1,3 mV, et un élève qui se trompe sur 2^n y obtient un
         nombre si absurde qu'il change de méthode au hasard sans identifier
         l'erreur. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites d'abord établir le <strong>tableau des trois valeurs</strong> une fois pour " +
              "toutes, au tableau et dans le cahier : $2^8 = 256$, $2^{10} = 1024$, " +
              "$2^{12} = 4096$. Ce sont les seules résolutions que le chapitre utilise, et les " +
              "connaître supprime l'erreur à la source plutôt que de la corriger après.<br/><br/>" +
              "Donnez ensuite le <strong>sens du nombre de bits</strong>, qui rend le tableau " +
              "reconstructible : <strong>chaque bit ajouté DOUBLE le nombre de niveaux</strong>. " +
              "Un bit distingue $2$ états, deux bits en distinguent $4$, trois bits $8$... On " +
              "compte les combinaisons de $0$ et de $1$, pas les bits. L'élève qui a compris cela " +
              "retrouve $1024$ en doublant depuis $256$, sans rien mémoriser.<br/><br/>" +
              "Sur l'exercice 3, faites <strong>calculer les trois réponses concurrentes</strong> " +
              "côte à côte : $19{,}53$ mV avec $2^8 = 256$, $312{,}5$ mV avec $2n = 16$, " +
              "$78{,}1$ mV avec $n^2 = 64$. Trois nombres sans rapport, donc l'élève voit que le " +
              "choix de l'écriture n'est pas un détail de forme. Enchaînez sur l'exercice 11, même " +
              "couple $8$ bits / $5$ V, pour confirmer.<br/><br/>" +
              "Le repère de contrôle à installer : <strong>plus le CAN a de bits, plus le quantum " +
              "est PETIT</strong>. Une réponse de $250$ mV pour un CAN $10$ bits est plus grossière " +
              "que celle d'un CAN $8$ bits ($19{,}53$ mV) : c'est impossible, et l'élève peut le " +
              "dire seul."
    },
    {
      titre: "Confondre le quantum et la résolution en bits, ou croire que « plus de bits » agrandit le quantum",
      eleve: "« On passe de $8$ à $12$ bits, donc on gagne $4$ bits, donc le quantum est multiplié " +
             "par $16$ : la mesure est plus précise. » Ou, sur deux exercices enchaînés : « celui-là " +
             "donne $0{,}81$ mV et celui-là $19{,}53$ mV, donc le second capteur est meilleur ».",
      cause: "Les deux grandeurs varient en SENS INVERSE, et le vocabulaire courant pousse dans le " +
             "mauvais sens : une « haute résolution » est une bonne chose, un « grand quantum » est " +
             "une mauvaise chose, alors que les deux mots évoquent la finesse. L'élève associe " +
             "spontanément « plus grand nombre » à « meilleur », ce qui est vrai des bits et faux " +
             "du quantum. Ce n'est pas un défaut d'attention : c'est une inversion que rien dans le " +
             "vocabulaire ne signale.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 24 énoncés tirés demandent chacun UN quantum pour UNE résolution
         donnée. Aucun ne demande de COMPARER deux résolutions, ni de dire dans
         quel sens le quantum varie : la comparaison n'est jamais l'objet de la
         question, donc aucun exercice ne peut mettre l'inversion en défaut.
         Renvoyer vers l'un d'eux serait un renvoi faux.
         Le QUIZ, lui, la traite de front et c'est sa raison d'être. Sa
         question 3 demande : « en passant d'un CAN 8 bits à un CAN 12 bits
         (même plage 0-5 V), le quantum est : » avec les quatre options
         « divisé par 4 / divisé par 16 / multiplié par 16 / inchangé ». La
         bonne réponse est « divisé par 16 », et la DISTRACTION « multiplié par
         16 » est exactement l'erreur décrite ici — le quiz a donc été écrit
         contre elle. La correction fait le calcul complet
         (q12/q8 = 256/4096 = 1/16) et nomme la raison (4 bits gagnés, donc
         2^4 = 16 fois plus de niveaux).
         C'est le seul renvoi honnête du livre pour cette erreur. */
      exercice: { type: "quiz", n: 3 },
      remede: "Passez par le quiz 3, écrit exactement contre cette inversion : ses quatre options " +
              "sont « divisé par $4$ », « divisé par $16$ », « multiplié par $16$ » et " +
              "« inchangé », et la mauvaise réponse tentante est précisément « multiplié par " +
              "$16$ ». L'élève doit trancher le sens, pas seulement le facteur.<br/><br/>" +
              "Le raisonnement à faire dire à voix haute, parce qu'il est plus solide que la " +
              "formule : <strong>on découpe toujours la même tarte</strong>. La plage " +
              "$0$–$5$ V ne change pas ; on la coupe en $256$ parts avec $8$ bits, en $4096$ parts " +
              "avec $12$ bits. Plus il y a de parts, <strong>plus chaque part est petite</strong>. " +
              "Le quantum EST la taille d'une part.<br/><br/>" +
              "Puis nommez les deux mots séparément, pour de bon : la " +
              "<strong>résolution</strong> ($n$, en bits) dit <em>combien de parts</em> ; le " +
              "<strong>quantum</strong> ($q$, en volts) dit <em>quelle taille fait une part</em>. " +
              "Ils sont inverses l'un de l'autre, et « haute résolution » signifie donc " +
              "« <strong>petit</strong> quantum ».<br/><br/>" +
              "Le geste à faire en classe, deux minutes au tableau : mettez côte à côte les " +
              "réponses de l'exercice 4 ($12$ bits / $3{,}3$ V, $0{,}81$ mV) et de l'exercice 6 " +
              "($8$ bits / $3{,}3$ V, $12{,}89$ mV). Même plage, même capteur familier, seule la " +
              "résolution change — et le rapport $\\dfrac{12{,}89}{0{,}81} = 16$ apparaît de " +
              "lui-même. L'élève lit l'inversion sur deux exercices qu'il vient de faire."
    },
    {
      titre: "Rendre la réponse en volts quand l'énoncé demande des millivolts, ou inversement",
      eleve: "L'élève trouve correctement $q = 0{,}004883$ V, puis écrit « $q = 0{,}004883$ mV » " +
             "ou « $q \\approx 0{,}00$ mV » après arrondi au centième. Ou bien il multiplie par " +
             "$1000$ deux fois et annonce $4883$ mV.",
      cause: "La formule rend des volts, l'énoncé demande des millivolts, et l'arrondi « au " +
             "centième » demandé achève le piège : arrondi en volts, $0{,}004883$ devient $0{,}00$ " +
             "et toute l'information disparaît. L'élève a fait le bon calcul et perd son résultat " +
             "sur la dernière ligne — ce qui est doublement décourageant, et vaut la peine d'être " +
             "dit tel quel en classe.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17).
         Exercice 4 : capteur LM35, carte STM32, CAN 12 bits, plage 0-3,3 V,
         réponse 0,81 mV. Le corrigé détaille les trois lignes :
         2^12 = 4096, puis q = 3,3/4096 = 0,000806 V, puis
         « Conversion en millivolts : q = 0,000806 x 1000 = 0,81 mV ».
         POURQUOI CELUI-LÀ. C'est le tirage où l'oubli de conversion est
         LÉTAL, et pas seulement faux : 0,000806 V arrondi au centième donne
         0,00, c'est-à-dire un résultat vide. L'élève ne peut pas rendre sa
         copie en volts sans voir que quelque chose a disparu, ce qui rend la
         leçon autoportante.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 12 est le même couple
         (12 bits / 3,3 V, 0,81 mV) et fait un second support immédiat.
         L'exercice 1 (12 bits / 5 V, 1,22 mV) et l'exercice 9 (idem) sont
         presque aussi bons, mais 0,001221 V arrondi donne 0,00 également : la
         démonstration est identique, sans être plus nette. Les exercices 3 et
         11 (8 bits, 19,53 mV) seraient les PIRES choix : 0,0195 V arrondi au
         centième donne 0,02, un nombre non nul et plausible — l'élève garde
         une réponse fausse sans rien remarquer, et le piège ne se referme
         pas. */
      exercice: { type: "exercice", n: 4 },
      remede: "Prenez l'exercice 4 et faites-le <strong>arrondir volontairement en volts</strong> " +
              "avant de convertir : $0{,}000806$ V arrondi au centième donne $0{,}00$. Le résultat " +
              "a disparu. C'est la démonstration la plus courte que l'unité n'est pas une " +
              "décoration en fin de ligne — ici, elle contient toute l'information.<br/><br/>" +
              "Installez ensuite l'ordre des opérations comme une <strong>règle de rédaction</strong> " +
              "et non comme un conseil : <strong>on convertit d'abord, on arrondit ensuite</strong>. " +
              "Jamais l'inverse. Et on garde les chiffres intermédiaires complets tant que l'unité " +
              "finale n'est pas atteinte.<br/><br/>" +
              "Le repère d'ordre de grandeur qui sert de garde-fou, et qui est facile à retenir " +
              "parce qu'il encadre tout le chapitre : <strong>le quantum des CAN étudiés ici vaut " +
              "entre $0{,}8$ mV et $20$ mV</strong>, soit toujours quelques millivolts. Une réponse " +
              "en $0{,}004$ ou en $4883$ « mV » sort de cette plage : elle signale une conversion " +
              "manquante ou doublée, avant même de vérifier le calcul.<br/><br/>" +
              "Enchaînez sur l'exercice 12, même couple $12$ bits / $3{,}3$ V, pour vérifier que " +
              "la règle de rédaction est passée dans la main."
    },
    {
      titre: "Croire qu'un capteur analogique donne directement une valeur numérique, et confondre $N$ et $V$",
      eleve: "« Le LM35 mesure $45°$C, donc l'Arduino lit $45$. » Ou, dans l'autre sens : « la " +
             "carte affiche $512$, donc la tension est $512$ V » — ou encore « $N = 512$, donc " +
             "$V = 512 / 5 = 102{,}4$ V ».",
      cause: "Rien dans le montage ne montre le CAN : l'élève voit un capteur, un fil, une carte, " +
             "et une valeur qui s'affiche. Le convertisseur est INVISIBLE, donc l'élève suppose " +
             "que le nombre affiché est la grandeur physique — ce qui est d'ailleurs vrai sur un " +
             "multimètre, appareil qu'il connaît. L'erreur est une hypothèse raisonnable sur un " +
             "système dont une étape est cachée, et non un défaut de lecture de l'énoncé.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 24 énoncés tirés demandent TOUS le quantum, c'est-à-dire la
         CARACTÉRISTIQUE du convertisseur. Aucun ne demande de CONVERTIR une
         valeur : pas un seul « quelle tension pour N = 512 ? », pas un seul
         « quelle valeur retourne analogRead() ? ». L'usage réel de la chaîne
         d'acquisition — le chemin grandeur physique -> tension -> nombre — est
         l'angle mort du tirage, et aucun exercice ne peut donc mettre cette
         confusion en défaut.
         Le QUIZ la traite, et il est même le seul support d'entraînement à le
         faire, sur deux de ses trois questions. Sa question 1 donne
         « un Arduino Uno (CAN 10 bits, plage 0-5 V) lit la valeur N = 512,
         quelle est la tension ? » et propose comme distractions exactement les
         deux erreurs décrites ici : « V = 512/5 = 102,4 V » et
         « V = 5/512 = 0,01 V ». Sa question 2 traite l'étape amont
         (LM35 à 10 mV/°C, 45 °C -> 0,45 V), avec les quatre options
         0,045 / 0,45 / 4,5 / 45 V, c'est-à-dire l'erreur de facteur mille que
         fait l'élève qui croit lire des degrés.
         Renvoi retenu sur la question 1, qui porte le cœur de la confusion
         N/V ; le remède mobilise aussi la question 2. */
      exercice: { type: "quiz", n: 1 },
      remede: "Passez par le quiz 1, dont les distractions sont exactement les deux versions de " +
              "cette erreur : $V = 512/5 = 102{,}4$ V et $V = 5/512 \\approx 0{,}01$ V. La bonne " +
              "réponse, $V = N \\times q = 512 \\times \\dfrac{5}{1024} = 2{,}5$ V, se contrôle en " +
              "outre par le sens : $512$ est la moitié de $1024$, donc la tension est la moitié de " +
              "$5$ V.<br/><br/>" +
              "Le geste qui installe la compréhension, et qui mérite un quart d'heure de cours : " +
              "faites tracer la <strong>chaîne à trois cases</strong>, avec l'unité sous chacune. " +
              "<strong>Grandeur physique</strong> (°C, lux, bar) $\\to$ <strong>tension</strong> " +
              "(V, c'est le capteur qui traduit) $\\to$ <strong>nombre</strong> (sans unité, c'est " +
              "le CAN qui traduit). Deux traductions, deux coefficients : la sensibilité du capteur " +
              "($10$ mV/°C pour le LM35) puis le quantum. Sauter une case, c'est l'erreur.<br/><br/>" +
              "Faites parcourir la chaîne complète sur le LM35, dans le sens direct : $45°$C donne " +
              "$0{,}45$ V (c'est le quiz 2, dont les options $0{,}045$ / $0{,}45$ / $4{,}5$ / $45$ " +
              "isolent le facteur mille), puis $0{,}45$ V donne " +
              "$N = 0{,}45 / 0{,}00488 \\approx 92$. Puis demandez le trajet inverse à partir de " +
              "$N = 92$. Faire l'aller-retour une fois suffit généralement à fixer la " +
              "chose.<br/><br/>" +
              "Le contrôle de vraisemblance à retenir : <strong>$N$ est un entier compris entre " +
              "$0$ et $2^n - 1$</strong> — jamais négatif, jamais au-delà de $1023$ sur un Arduino " +
              "Uno, et jamais porteur d'une unité. Une « tension de $512$ V » ou un " +
              "« analogRead() de $45°$C » se rejettent sans calcul."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ avec `voir-module.js`, pas supposé : `validerProf` refuse
     toute autre longueur. (Le chapitre 2 du même dossier n'en a que quatre :
     la règle n'est pas uniforme, il faut compter à chaque fiche.)

     Référentiel SI (2019). ÉTIQUETAGE HONNÊTE (règle du projet) : la
     compétence est lue sur la tâche RÉELLEMENT demandée par l'énoncé, jamais
     choisie pour équilibrer la grille.

     Q1 (CAN $12$ bits, $0$–$3{,}3$ V, calculer $q$ en mV : $0{,}81$)
        → résoudre : application directe de la formule du cours, suivie d'une
        conversion d'unité. Rien à choisir ni à traduire.
     Q2 (HC-SR04 mesure $1{,}5$ m, $v = 340$ m/s, durée de l'écho en $\mu$s :
        $8824$) → modéliser : aucune formule du cours ne donne ce résultat. Il
        faut comprendre que l'onde fait l'ALLER-RETOUR, donc doubler la
        distance avant d'appliquer $t = d/v$. Le facteur $2$ n'est ni dans
        l'énoncé ni dans le cours : c'est une traduction du phénomène
        physique, et c'est le seul vrai pas de modélisation du chapitre.
     Q3 (lequel de ces composants est un actionneur : le servomoteur SG90)
        → analyser : identifier et caractériser un constituant. Restitution
        appliquée, sans calcul — et seule question du chapitre sur la
        distinction qui lui donne son titre.
     Q4 (CAN $10$ bits : combien de niveaux ? $1024$) → résoudre : évaluation
        de $2^{10}$, une seule opération sur un nombre donné.
     Q5 (LM35 à $10$ mV/°C, $T = 37°$C, Arduino $10$ bits : quelle valeur rend
        `analogRead()` ? $75$) → modéliser : deux traductions successives que
        l'énoncé n'articule pas — la température vers la tension par la
        sensibilité du capteur, puis la tension vers l'entier par le quantum,
        avec une troncature à la fin. C'est la chaîne d'acquisition complète,
        et c'est l'élève qui doit la reconstituer.

     RÉPARTITION DE CE CHAPITRE : résoudre 2, modéliser 2, analyser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont PAS mobilisés. Le cas
     d'`expérimenter` mérite d'être souligné plutôt que masqué : c'est LE
     chapitre où le programme officiel en attendrait, et le corpus n'offre
     aucun support de travail pratique. Constat, pas oubli. */
  competences: {
    evaluation: ['résoudre', 'modéliser', 'analyser', 'résoudre', 'modéliser']
  }
};
