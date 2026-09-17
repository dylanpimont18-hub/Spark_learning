/* =========================================================
   Spark Learning – js/data/prof/bts/bts-fourier.prof.js
   Fiche professeur du chapitre « Séries de Fourier » (programme BTS), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 25 (ce chapitre est le vingt-sixième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   36 énoncés tirés, dont 12 numérotés et 24 en banque supplémentaire —
   c'est de très loin le tirage le PLUS RICHE du dossier, les autres
   chapitres plafonnant à 21. La banque supplémentaire à elle seule fait
   deux fois le corps du chapitre.

   FAIT DÉCISIF, et c'est une bonne nouvelle pour une fois : les douze
   exercices numérotés se répartissent en DEUX MOULES et non un seul,
   parfaitement alternés.
     - Moule A (exercices 1, 3, 5, 7, 9, 11 — les impairs) : un signal
       créneau symétrique est décrit sur ses deux demi-périodes, on demande
       $a_0$. La réponse est TOUJOURS $0$, quelles que soient l'amplitude et
       la période.
     - Moule B (exercices 2, 4, 6, 8, 10, 12 — les pairs) : on donne
       l'amplitude $A$ et le rang $n$, et la formule $b_n = 4A/(n\pi)$ est
       FOURNIE dans l'énoncé ; il reste une application numérique.
   Les rangs $n$ tirés sont 1, 7, 5, 3, 5, 1 — donc tous impairs, ce qui est
   cohérent avec la formule mais empêche de rencontrer le cas $n$ pair, où
   $b_n = 0$.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : le calcul d'un coefficient PAR INTÉGRATION (les
   coefficients sont donnés ou triviaux), le SPECTRE et sa décroissance en
   $1/n$ (D2), la PARITÉ du signal comme outil de simplification (piège du
   cours), le PHÉNOMÈNE DE GIBBS (D4), le théorème de PARSEVAL, la
   convergence en un point de discontinuité, et le lien entre rang $n$ et
   FRÉQUENCE $nf_0$. Or quatre des cinq questions de l'évaluation portent
   là-dessus.

   Une des quatre erreurs ci-dessous est volontairement SANS renvoi : pointer
   un exercice qui ne travaille pas l'erreur serait un renvoi faux, ce que le
   projet tient pour pire qu'un renvoi absent. Cette fiche porte donc TROIS
   renvois, ce qui est le maximum du dossier — c'est directement l'effet de
   la richesse du tirage.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-fourier"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 1 (Les Nombres Complexes, `complexes`) : RETENU, et c'est le
     prérequis le plus naturel de tout le dossier. Trois raisons, dont la
     troisième est décisive :
       - le vocabulaire est rigoureusement commun — pulsation $\omega_0$,
         fréquence, amplitude, déphasage, harmonique — et il est INSTALLÉ au
         chapitre 1 sur le régime sinusoïdal ;
       - l'amplitude d'une harmonique, $c_n = \sqrt{a_n^2 + b_n^2}$ (D2), est
         littéralement le MODULE du complexe $a_n + jb_n$, calculé par la
         formule du chapitre 1 ;
       - et surtout : toute la lecture physique du chapitre suppose qu'on
         sache qu'un signal sinusoïdal se caractérise par une amplitude ET un
         déphasage. Un étudiant qui n'a pas le chapitre 1 lit la série de
         Fourier comme une somme de formules ; celui qui l'a la lit comme une
         superposition de régimes sinusoïdaux, chacun avec son impédance.

     ch. 7 (Primitives et calcul intégral appliqué, `bts-integrales-appliquees`) :
     RETENU aussi, et ce second prérequis est moins évident mais tout aussi
     réel. Les DÉFINITIONS MÊMES des coefficients de Fourier sont des
     intégrales : $a_0 = \frac{1}{T}\int_0^T f(t)dt$,
     $a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega_0 t)dt$, et $b_n$ de même. Un
     étudiant qui ne sait pas ce qu'est $\int_a^b$ ne peut pas lire une seule
     ligne du cadre « Formules ». Mieux : $a_0$ n'est rien d'autre que la
     VALEUR MOYENNE du chapitre 7 (D3 du chapitre 7 et D3 de celui-ci disent
     la même chose), ce qui donne au coefficient $a_0$ — l'objet de six des
     douze exercices — une signification immédiate au lieu d'une définition.

     Candidats examinés et ÉCARTÉS :
     - ch. 13 (Transformée de Laplace) : les deux chapitres transforment un
       signal temporel en une description fréquentielle, et le passage
       $p = j\omega$ fait explicitement le pont — le cours de Laplace le dit.
       Mais c'est une PARENTÉ, pas une dépendance : rien de Laplace n'est
       utilisé ici, et Laplace vient après. Le déclarer créerait un cycle que
       `validerPrerequis` refuse.
     - ch. 2 (Équations différentielles du 2nd ordre) : le lien est séduisant
       — la réponse d'un système du 2nd ordre à chaque harmonique explique le
       filtrage — mais il n'est développé nulle part dans ce chapitre : aucune
       équation différentielle n'y est écrite, aucun régime n'y est calculé.
       Un prérequis affiché mais non utilisé trompe le lecteur du tableau.
     - ch. 5 (Fonctions réelles) et ch. 6 (Dérivation appliquée) : ils sont
       déjà atteints indirectement par le ch. 7, qui les déclare en
       prérequis. Les redéclarer ici alourdirait la colonne « S'appuie sur »
       sans rien apprendre : la transitivité suffit.
     - ch. 3, 4, 8, 9, 10, 11 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, et ils sont ici LOURDS — c'est le chapitre du
     dossier qui en dépend le plus. La TRIGONOMÉTRIE (sinus, cosinus, parité
     de chacun, périodicité), la constante $\pi$, les FRACTIONS et les
     PUISSANCES viennent tous de la REMISE À NIVEAU (`bts-prep`), qui est dans
     un AUTRE dossier. Sans trigonométrie, ce chapitre est entièrement fermé :
     on ne peut pas décomposer en sinusoïdes ce qu'on ne sait pas lire.
     `prerequis` ne vise qu'un chapitre du même dossier, donc rien ne
     l'affichera. La `note` le dit explicitement. */
  prerequis: [1, 7],

  /* Rang conseillé (2026-09-17) : rang 12 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 26 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 12 est celui du livre, et les deux ordres coïncident.

     Le placement est contraint par ses deux prérequis, le chapitre 1
     (Complexes) et le chapitre 7 (Intégrales), qui doivent tous deux
     précéder — le second fixe le plancher à 8. Il l'est aussi, plus
     faiblement, par une raison de maturité : Fourier et Laplace (13) sont les
     deux chapitres les plus abstraits de la partie, et les placer en fin
     d'année laisse le temps d'installer tout le reste. Les garder VOISINS est
     en outre délibéré : ce sont les deux faces d'une même idée — décrire un
     signal autrement que par le temps — et les traiter à la suite permet de
     le dire, ce qui éclaire les deux. */
  rangConseille: 12,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et les séries de Fourier sont, avec Laplace, le point
     le plus nettement RÉSERVÉ des mathématiques de BTS : elles relèvent des
     groupements industriels traitant du signal (électronique, systèmes
     numériques, électrotechnique) et sont absentes de la plupart des autres.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« décomposition », « coefficients », « spectre ») et n'inventent aucune
     spécialité. La `note` insiste plus que d'habitude sur ce point, parce que
     c'est ici que le risque de citer des attendus hors filière est le plus
     élevé de toute la partie. */
  attendus: [
    "Reconnaître un signal périodique et identifier sa période, sa fréquence fondamentale et sa valeur moyenne",
    "Calculer ou exploiter les coefficients de Fourier d'un signal simple et en déduire l'amplitude des harmoniques",
    "Interpréter le spectre d'un signal et relier le rang d'une harmonique à sa fréquence"
  ],

  note: "Les séries de Fourier — décomposition d'un signal périodique en harmoniques, coefficients, " +
        "spectre fréquentiel — s'appuient sur le tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus, " +
        "et plus attentivement ici que partout ailleurs.</strong> Il n'existe pas un programme " +
        "unique de mathématiques en BTS, mais un tronc commun décliné par " +
        "<strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien, et les " +
        "séries de Fourier sont — avec la transformée de Laplace — le point le plus nettement " +
        "<strong>réservé</strong> de tout le programme : elles relèvent des groupements " +
        "industriels traitant du <strong>signal</strong> (électronique, systèmes numériques, " +
        "électrotechnique) et sont <strong>absentes de la plupart des autres</strong>. Avant d'y " +
        "consacrer des séances, assurez-vous qu'elles sont bien au référentiel de votre " +
        "section.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés, et ils sont ici particulièrement " +
        "lourds.</strong> Le chapitre s'appuie sur « Les Nombres Complexes » (chapitre 1) et " +
        "« Primitives et calcul intégral appliqué » (chapitre 7) — cela, la colonne « S'appuie " +
        "sur » l'affiche. Mais il repose tout entier sur la <strong>trigonométrie</strong> : on ne " +
        "peut pas décomposer un signal en sinus et cosinus si l'on ne sait pas ce qu'est un sinus, " +
        "s'il est pair ou impair, et ce que vaut sa période. La constante $\\pi$, les " +
        "<strong>fractions</strong> et les <strong>puissances</strong> sont également " +
        "indispensables. Tout cela est dans la <strong>remise à niveau</strong>, l'autre partie de " +
        "l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même partie, <strong>rien " +
        "ne le montrera</strong> : si le groupe ne sait pas que $\\sin$ est impair, ce chapitre " +
        "lui restera fermé, et c'est là qu'il faut revenir.<br/><br/>" +
        "<strong>Bonne nouvelle sur les exercices, pour une fois.</strong> Ce chapitre est de très " +
        "loin le mieux fourni de la partie : <strong>36 énoncés tirés</strong> contre 18 ou 21 " +
        "ailleurs, dont 24 en banque supplémentaire. Et les douze énoncés numérotés se " +
        "répartissent en <strong>deux moules alternés</strong> : les <strong>impairs</strong> " +
        "(1, 3, 5, 7, 9, 11) demandent la valeur moyenne $a_0$ d'un créneau symétrique — réponse " +
        "toujours $0$ — et les <strong>pairs</strong> (2, 4, 6, 8, 10, 12) demandent l'amplitude " +
        "$b_n$ d'une harmonique, avec la formule fournie. Vous disposez donc de deux tâches " +
        "distinctes et de six énoncés de chaque, ce qui permet de vraies séries " +
        "d'entraînement.<br/><br/>" +
        "<strong>Ce que les exercices ne couvrent toujours pas.</strong> Aucun coefficient n'est " +
        "calculé <strong>par intégration</strong> : ils sont donnés ou triviaux. Ne sont travaillés " +
        "nulle part le <strong>spectre</strong> et sa décroissance en $1/n$, la <strong>parité</strong> " +
        "du signal comme outil de simplification (c'est pourtant le piège du cours), le " +
        "<strong>phénomène de Gibbs</strong>, le théorème de <strong>Parseval</strong>, la " +
        "convergence en un point de discontinuité, et le lien entre rang $n$ et " +
        "<strong>fréquence</strong> $nf_0$ — qui est la question 1 du devoir. Les rangs tirés sont " +
        "en outre <strong>tous impairs</strong> (1, 3, 5, 7), si bien que le cas $n$ pair, où " +
        "$b_n = 0$, n'est jamais rencontré. L'exemple résolu du cours (le variateur de vitesse, " +
        "avec fondamental, harmoniques 3 et 5, et la part de puissance) fait, lui, le chemin " +
        "complet : <strong>c'est lui qu'il faut prendre comme modèle de la tâche attendue</strong>.",

  erreurs: [
    {
      titre: "Confondre le rang $n$ d'une harmonique et sa fréquence",
      eleve: "Sur un signal de fondamental $f_0 = 100$ Hz, l'élève annonce que la $5^e$ harmonique " +
             "a une fréquence de $5$ Hz, ou de $105$ Hz. La bonne réponse est $500$ Hz. Ou bien, " +
             "devant un spectre, il lit l'axe des rangs comme un axe des fréquences.",
      cause: "Le mot « harmonique $5$ » contient un nombre, et l'étudiant ne sait pas de quoi ce " +
             "nombre est la mesure : rien dans l'expression ne dit qu'il s'agit d'un " +
             "<strong>multiplicateur</strong> et non d'une fréquence. La variante $105$ Hz est " +
             "plus révélatrice encore : elle vient d'une lecture ADDITIVE — on ajoute $5$ à $100$ — " +
             "alors que la relation est MULTIPLICATIVE. Cette confusion additif/multiplicatif est " +
             "extrêmement répandue chez les adultes en reprise d'études, et elle ne se limite pas " +
             "à ce chapitre : on la retrouve sur les pourcentages, les échelles et les décibels. " +
             "S'y ajoute que les douze exercices du chapitre manipulent $n$ SANS jamais le relier " +
             "à une fréquence : le lien n'a donc aucune occasion de s'installer.",
      remede: "Faire écrire la relation <strong>avec ses unités</strong>, une fois, au tableau : " +
              "$f_n = n \\times f_0$, où $n$ est un <strong>nombre sans unité</strong> et $f_0$ " +
              "une fréquence en hertz. Le résultat est donc en hertz, et le $n$ ne peut pas être " +
              "une fréquence : ce n'est qu'un rang, c'est-à-dire un numéro d'ordre. Une ligne, et " +
              "la confusion additive disparaît avec.<br/><br/>" +
              "Faire <strong>construire un tableau de spectre</strong> à deux colonnes sur un cas " +
              "concret, par exemple le réseau à $50$ Hz : rang $1 \\to 50$ Hz, rang $3 \\to 150$ Hz, " +
              "rang $5 \\to 250$ Hz, rang $7 \\to 350$ Hz. Les deux colonnes côte à côte rendent la " +
              "distinction impossible à manquer, et le tableau sert ensuite de référence pour tout " +
              "le chapitre.<br/><br/>" +
              "Ancrer sur une <strong>conséquence métier immédiate</strong>, qui rend la " +
              "distinction indispensable : c'est exactement ce calcul qu'on fait pour dimensionner " +
              "un filtre. Sur un réseau à $50$ Hz, l'harmonique $5$ est à $250$ Hz — et c'est à " +
              "$250$ Hz, pas à $5$ Hz, qu'il faut placer la coupure du filtre anti-harmonique. " +
              "Les harmoniques de rang 5 et 7 des variateurs de vitesse sont d'ailleurs celles que " +
              "les normes de compatibilité électromagnétique surveillent en premier : se tromper " +
              "de fréquence, c'est filtrer au mauvais endroit et rester non conforme.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés manipulent bien le rang n (les pairs demandent
         b_1, b_3, b_5 ou b_7), mais AUCUN ne demande la fréquence
         correspondante et aucun ne donne f_0. Les moules impairs donnent
         certes une période T (1, 2 ou 4 s), mais ils demandent a_0 et
         n'exploitent jamais cette période — c'est une donnée parasite, et la
         réponse est 0 quelle que soit T. Il n'existe donc dans le tirage
         aucun énoncé où le rang et la fréquence coexistent, ce qui est
         précisément la condition pour rencontrer la confusion. Pointer l'un
         des douze enverrait l'enseignant vers une remédiation qui n'en est
         pas une. La question 1 de l'évaluation la travaille exactement
         (f_0 = 100 Hz, 5e harmonique), mais une remédiation ne renvoie jamais
         vers le devoir noté. Le remède ramène donc au cours (D1 et la méthode
         1, qui portent la relation et un exemple à 50 Hz) et demande à
         l'enseignant de fabriquer le support — le tableau de spectre du
         deuxième paragraphe suffit et prend cinq minutes. */
      exercice: null
    },
    {
      titre: "Croire qu'une valeur moyenne nulle signifie un signal nul",
      eleve: "L'élève calcule correctement $a_0 = 0$ pour un créneau $\\pm 5$ V, puis écrit " +
             "« donc le signal est nul » ou « donc il n'y a pas de signal ». Ou bien il refait le " +
             "calcul, convaincu qu'un résultat nul signale une erreur.",
      cause: "Dans la plupart des contextes rencontrés jusque-là, <strong>zéro veut dire " +
             "rien</strong> : une force nulle, une vitesse nulle, un solde nul. L'idée qu'une " +
             "grandeur puisse être nulle EN MOYENNE tout en étant partout non nulle demande de " +
             "distinguer la valeur instantanée et la valeur moyennée, ce qui n'est pas spontané. " +
             "S'y ajoute une intuition pratique trompeuse : un multimètre en position continue " +
             "affiche bien $0$ V sur une tension alternative, ce qui semble confirmer que « il n'y " +
             "a rien » — alors que la même tension fait fonctionner un moteur et peut électrocuter. " +
             "L'étudiant a donc une observation réelle qui appuie son erreur.",
      remede: "Substituer le mot <strong>« bilan »</strong> à « valeur moyenne », comme au " +
              "chapitre des intégrales : $a_0$ compte positivement ce qui est au-dessus de l'axe " +
              "et négativement ce qui est en dessous. Sur un créneau symétrique, les deux se " +
              "compensent <strong>exactement</strong> : le bilan est nul, le signal ne l'est " +
              "évidemment pas. Le dessin au tableau — deux rectangles égaux, l'un au-dessus, " +
              "l'autre au-dessous — règle la question définitivement.<br/><br/>" +
              "Opposer explicitement les <strong>deux grandeurs que l'électricien utilise</strong>, " +
              "et c'est l'occasion de les introduire ensemble : la valeur <strong>moyenne</strong> " +
              "d'une tension secteur est $0$ V ; sa valeur <strong>efficace</strong> est " +
              "$230$ V — c'est celle qui figure sur la plaque, qui chauffe la résistance et qui " +
              "électrocute. Les deux sont exactes, elles ne mesurent simplement pas la même chose. " +
              "L'efficace se construit sur le carré du signal, ce qui supprime les " +
              "compensations.<br/><br/>" +
              "Utiliser enfin le <strong>contrôle immédiat</strong> que le chapitre offre et que " +
              "les six exercices impairs rendent évident : pour un signal <strong>symétrique</strong> " +
              "autour de zéro, $a_0 = 0$ <strong>sans calcul</strong>, quelles que soient " +
              "l'amplitude et la période. C'est un raccourci légitime, et le faire remarquer aux " +
              "étudiants transforme six exercices identiques en une propriété : ils voient que la " +
              "réponse ne dépend ni du $5$ V, ni du $3$ A, ni de la période $T = 4$ s. C'est en " +
              "outre ce que le devoir évalue à la question 2.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 25) : l'exercice 5 est le courant de sortie d'un
         variateur de vitesse, +3 A sur [0 ; T/2] et -3 A sur [T/2 ; T] avec
         T = 4 s, réponse a_0 = 0. C'est le meilleur support de cette erreur
         parmi les six exercices du moule A (1, 3, 5, 7, 9, 11), et le choix
         repose sur deux points :
           - l'amplitude 3 A est petite mais le signal est un COURANT de
             variateur de vitesse, c'est-à-dire précisément le cas industriel
             où « moyenne nulle » et « rien » sont le plus dangereusement
             confondus : ce courant chauffe les câbles et pollue le réseau
             malgré sa moyenne nulle. Le troisième paragraphe du remède s'y
             démontre sans effort ;
           - la période T = 4 s y est la plus GRANDE du tirage, ce qui met en
             évidence que la réponse 0 ne dépend pas de T — l'observation du
             troisième paragraphe du remède. Comparé à l'exercice 3
             (T = 1 s) ou 9 (T = 1 s), le contraste est net : quatre fois plus
             long, même résultat.
         Les exercices 1, 7 et 11 portent la même amplitude 5 V que l'exemple
         du cours et servent de doublons ; le 3 (2 V) et le 9 (4 A) complètent
         la série. Distinct des renvois des erreurs 3 (exercice 4) et 4
         (exercice 12), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier le $\\pi$, ou se tromper de rang dans $b_n = \\dfrac{4A}{n\\pi}$",
      eleve: "Sur $A = 8$ V et $n = 7$, l'élève écrit $b_7 = \\dfrac{4 \\times 8}{7} = 4{,}57$ " +
             "(il a oublié le $\\pi$) au lieu de $1{,}46$. Ou bien il calcule " +
             "$\\dfrac{4 \\times 8}{\\pi} = 10{,}19$ en ignorant le rang $7$. Ou encore il divise " +
             "par $n\\pi$ mais multiplie par $n$ quelque part, et rend $10{,}19$ également.",
      cause: "La formule $\\dfrac{4A}{n\\pi}$ contient <strong>quatre symboles au dénominateur " +
             "visuel</strong> — un $n$, un $\\pi$ — et le produit $n\\pi$ se lit mal : rien ne " +
             "signale typographiquement qu'il s'agit de deux facteurs à multiplier avant de " +
             "diviser. L'oubli du $\\pi$ a une seconde cause, matérielle celle-là : sur beaucoup " +
             "de calculatrices, $\\pi$ demande une touche secondaire, et l'étudiant pressé tape " +
             "la division sans lui. L'oubli du rang, lui, vient de l'habitude du fondamental : " +
             "$b_1 = 4A/\\pi$ est le cas le plus souvent écrit au tableau, et sa forme — sans $n$ " +
             "visible — devient la forme mémorisée. Ce n'est pas une erreur de calcul mais une " +
             "formule tronquée qui s'est fixée.",
      remede: "Imposer l'écriture du <strong>dénominateur complet entre parenthèses</strong> avant " +
              "toute valeur : $b_n = \\dfrac{4 \\times 8}{(7 \\times \\pi)}$, puis seulement le " +
              "résultat. Les parenthèses ne sont pas décoratives : tapées telles quelles à la " +
              "calculatrice, elles garantissent que les deux facteurs sont bien tous deux au " +
              "dénominateur, ce qui est la source d'erreur la plus fréquente à la " +
              "machine.<br/><br/>" +
              "Installer un <strong>contrôle par le fondamental</strong>, qui est propre à ce " +
              "chapitre et redoutablement efficace : $b_n$ vaut <strong>$b_1$ divisé par $n$</strong>. " +
              "On calcule donc $b_1 = 4A/\\pi$ une fois, puis on divise par le rang. Sur $A = 8$ : " +
              "$b_1 = 10{,}19$, donc $b_3 = 3{,}40$, $b_5 = 2{,}04$, $b_7 = 1{,}46$. Chaque valeur " +
              "se vérifie contre la précédente, et l'oubli du rang devient " +
              "impossible.<br/><br/>" +
              "Donner enfin le <strong>contrôle de décroissance</strong>, qui ne coûte rien et qui " +
              "porte le sens du chapitre : les amplitudes <strong>décroissent en $1/n$</strong>. " +
              "L'harmonique $7$ est donc <strong>sept fois plus petite</strong> que le fondamental — " +
              "toujours. Si votre $b_7$ n'est pas nettement inférieur à votre $b_1$, il est faux. " +
              "C'est aussi la lecture métier du spectre : les harmoniques de rang élevé sont " +
              "faibles, et c'est pourquoi on n'en filtre en pratique que les premières. Un $b_7$ " +
              "trouvé du même ordre que $b_1$ conduirait à surdimensionner tout le filtre.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 est le
         signal audio carré d'un synthétiseur, A = 8 V, rang n = 7, réponse
         b_7 = 1,46. C'est LE support de cette erreur, et le rang 7 en est la
         raison décisive :
           - c'est le PLUS GRAND rang du tirage (les autres exercices du moule
             B portent n = 1, 5, 5, 3, 1). Or plus n est grand, plus les trois
             fautes se séparent : oublier le pi donne 4,57 ; oublier le rang
             donne 10,19 ; la bonne réponse est 1,46. Trois nombres très
             distincts, donc un diagnostic immédiat à la correction. Sur les
             exercices 2 et 12, qui portent n = 1, l'oubli du rang est
             INVISIBLE (diviser par 1 ne change rien) : ils ne peuvent donc
             pas servir de support à cette erreur, ce qui mérite d'être connu
             de l'enseignant ;
           - le contrôle par le fondamental du deuxième paragraphe se
             démontre parfaitement dessus : b_1 = 10,19 pour A = 8, et
             10,19/7 = 1,46. L'exercice 2 porte justement A = 8 et n = 1,
             réponse 10,19 — les deux énoncés forment donc une PAIRE, même
             amplitude, rangs différents, et se corrigent l'un par l'autre.
             C'est la configuration la plus favorable du tirage et il faut la
             signaler ;
           - le contrôle de décroissance du troisième paragraphe s'y voit
             aussi : 1,46 est bien sept fois plus petit que 10,19.
         Distinct des renvois des erreurs 2 (exercice 5) et 4 (exercice 12),
         conformément à la règle du projet. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Rendre une amplitude sans dire de quelle harmonique, ni ce qu'elle vaut dans le signal",
      eleve: "L'élève écrit « $7{,}64$ » et s'arrête là. Interrogé, il ne sait dire ni l'unité " +
             "(des ampères ? des volts ?), ni à quelle fréquence cette composante se trouve, ni " +
             "si elle est grande ou petite par rapport au signal d'origine — alors que c'est " +
             "l'information que le technicien cherche.",
      cause: "L'énoncé demande une amplitude et l'élève donne une amplitude : il répond exactement " +
             "à ce qu'on lui demande, et l'habitude scolaire veut que la réponse soit le résultat " +
             "du calcul. Ce n'est pas une négligence, c'est un <strong>contrat implicite</strong>. " +
             "Mais il y a ici une cause supplémentaire, propre à Fourier : un coefficient $b_n$ " +
             "est un nombre <strong>abstrait au premier abord</strong> — il ne décrit ni une " +
             "valeur instantanée, ni un maximum du signal, mais l'amplitude d'une composante " +
             "sinusoïdale qu'on ne voit nulle part sur l'oscilloscope. Sans effort explicite " +
             "d'interprétation, il reste un résultat de formule, et l'étudiant n'a aucune image " +
             "mentale à y attacher.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur avec son <strong>unité</strong>, le <strong>rang</strong> " +
              "et sa <strong>fréquence</strong>. « Le fondamental a une amplitude de $7{,}64$ A, à " +
              "la fréquence du réseau » plutôt que « $7{,}64$ ». C'est ce que l'épreuve attend, et " +
              "c'est la forme d'une ligne de relevé spectral.<br/><br/>" +
              "Faire <strong>situer la valeur par rapport au signal d'origine</strong>, ce qui " +
              "donne le seul résultat vraiment surprenant du chapitre : pour un créneau " +
              "d'amplitude $6$ A, le fondamental vaut $7{,}64$ A — c'est-à-dire " +
              "<strong>PLUS</strong> que le créneau lui-même. Cette observation, qui déconcerte " +
              "toujours, est l'occasion de comprendre ce qu'est une décomposition : la somme des " +
              "harmoniques reconstitue le créneau par compensations successives, et rien n'oblige " +
              "le premier terme à être plus petit que le total. Poser la question au groupe : " +
              "« comment une composante peut-elle dépasser le signal ? » vaut mieux qu'une " +
              "explication.<br/><br/>" +
              "Ancrer enfin sur la <strong>lecture métier du spectre</strong>, qui est la raison " +
              "d'être du calcul : en électronique de puissance, on ne s'intéresse pas au " +
              "coefficient pour lui-même mais à ce qu'il coûte — un fondamental de $7{,}64$ A " +
              "porte environ $81\\,\\%$ de la puissance (c'est le chiffre de l'exemple résolu), le " +
              "reste part en harmoniques qui chauffent les conducteurs, font vibrer les " +
              "transformateurs et perturbent les équipements voisins. C'est ce bilan que les " +
              "normes de compatibilité électromagnétique contrôlent, et c'est lui qu'il faut " +
              "savoir présenter.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 12 est le
         relais statique commutant une charge industrielle, créneau
         d'amplitude 6 A, rang n = 1, réponse b_1 = 7,64. Le renvoi est
         utilisable pour cette erreur alors même que l'exercice partage son
         moule avec cinq autres, et c'est assumé : l'erreur ne porte pas sur
         le RÉSULTAT (7,64 sera juste) mais sur la LECTURE, et l'enseignant
         peut exiger la phrase de conclusion sur cet énoncé précis.
         Choix du 12 plutôt qu'un autre du moule B, pour une raison décisive :
         c'est le seul du tirage où le coefficient calculé (7,64 A) DÉPASSE
         l'amplitude du signal (6 A), ce qui est exactement l'observation
         paradoxale du deuxième paragraphe du remède. Sur l'exercice 2
         (A = 8, b_1 = 10,19) le dépassement existe aussi mais l'exercice 2
         est le partenaire naturel de l'exercice 4 dans la paire décrite à
         l'erreur 3, et les quatre autres du moule B portent des rangs 3, 5 ou
         7 dont le coefficient est bien plus petit que A — le paradoxe y
         disparaît. Le 12 est donc le meilleur support disponible, et il est
         en outre le DERNIER exercice du chapitre, ce qui en fait une bonne
         synthèse de fin de série.
         Distinct des renvois des erreurs 2 (exercice 5) et 3 (exercice 4),
         conformément à la règle du projet. */
      exercice: { type: "exercice", n: 12 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $f_0 = 100$ Hz : fréquence de la $5^e$ harmonique ? Application
          directe de $f_n = nf_0$, une multiplication. Exécution d'une
          procédure connue sur des nombres donnés : « calculer ».
     Q2 — le coefficient $a_0$ représente : l'amplitude maximale, la valeur
          moyenne sur une période, la fréquence fondamentale, le déphasage du
          fondamental ? Aucun calcul : il faut identifier ce que la formule
          $\frac{1}{T}\int_0^T f$ mesure et écarter trois grandeurs du
          chapitre qui lui sont voisines. Jugement de validité : « raisonner ».
     Q3 — créneau $\pm 3$, $T = 2$ s : calculer $b_1$, sachant que
          $b_1 = 12/\pi$. La valeur exacte est FOURNIE dans l'énoncé : il ne
          reste qu'une division par $\pi$. C'est la tâche du moule B des
          exercices : « calculer ».
     Q4 — si $f$ est paire, alors : tous les $a_n = 0$, tous les $b_n = 0$,
          tous nuls, $a_0 = 0$ ? Aucun calcul n'est possible. Il faut relier
          la parité de $f$ à celle du produit $f(t)\sin(n\omega_0 t)$, puis
          en déduire la nullité de l'intégrale sur une période. C'est un
          enchaînement de déductions, et les quatre options ne diffèrent que
          par la lettre annulée : « raisonner ».
     Q5 — en un point de discontinuité, la série converge vers : la limite à
          droite, à gauche, la demi-somme, ou elle diverge ? Aucun calcul :
          c'est le théorème de Dirichlet, et il faut comprendre pourquoi la
          série ne peut privilégier ni l'une ni l'autre des deux limites.
          « raisonner ».

     RÉPARTITION DE CE CHAPITRE : raisonner 3, calculer 2. C'est le seul
     chapitre du dossier où « raisonner » l'emporte, et ce n'est pas un
     artefact d'étiquetage : trois des cinq questions sont des questions de
     COMPRÉHENSION du modèle (que mesure $a_0$ ? que fait la parité ? que
     vaut la série sur une discontinuité ?) et aucune ne se règle par un
     calcul. Le devoir de Fourier est nettement plus conceptuel que ceux qui
     l'entourent, ce qui est cohérent avec le contenu du chapitre — mais tout
     à fait décalé par rapport à ses exercices, qui sont eux purement
     calculatoires.

     « chercher », « modéliser » et « communiquer » ne sont pas mobilisés.
     L'absence de « représenter » mérite en revanche d'être signalée : ce
     chapitre est celui du SPECTRE, c'est-à-dire d'un graphique — le troisième
     attendu officiel porte explicitement sur son interprétation — et aucune
     des cinq questions ne demande de le lire ni de le tracer. C'est un
     constat sur les cinq questions, pas un choix d'étiquetage : le corpus
     entier est composé de questions `numeric` et à choix multiple, format qui
     exclut de fait le graphique. Un enseignant qui veut évaluer
     « représenter » devra ajouter sa propre question — un spectre en bâtons à
     compléter à partir de trois coefficients suffit, et il se corrige en
     trente secondes. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "raisonner"]
  }
};
