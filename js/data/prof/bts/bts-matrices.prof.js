/* =========================================================
   Spark Learning – js/data/prof/bts/bts-matrices.prof.js
   Fiche professeur du chapitre « Calcul matriciel » (programme BTS), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 24 (ce chapitre est le vingt-cinquième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun donne une matrice $2 \times 2$ à
   coefficients entiers de $0$ à $4$ et demande son DÉTERMINANT. Seuls le
   contexte (répartiteur de charge, bilan matière, atelier de production,
   logiciel de CAO, réseau électrique, circuit à deux mailles) et les quatre
   coefficients changent.

   Le tirage a cependant une vraie qualité qu'il faut exploiter, et c'est la
   seule de tout le dossier à être signalée comme telle : les douze
   déterminants comportent DEUX NÉGATIFS (exercices 1 et 6, valeur -1 ;
   exercice 3, valeur -2) et UN NUL (exercice 2, matrice à lignes
   proportionnelles). Le cas singulier — celui où la matrice n'est pas
   inversible, qui est le point de fond du chapitre et l'objet de la question
   2 du devoir — EST donc présent dans les exercices, ce qui est rare dans ce
   corpus.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : le PRODUIT matriciel et sa NON-COMMUTATIVITÉ (D1,
   méthodes 1 et 2, piège du cours), le calcul de l'INVERSE (D3, méthode 3),
   la RÉSOLUTION d'un système $AX = B$ (méthode 4), les MATRICES DE TRANSITION
   (D4). Or quatre des cinq questions de l'évaluation portent là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-matrices"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli. Le
     calcul matriciel est un objet nouveau, qui ne prolonge aucune notion du
     dossier : on y additionne, on y multiplie et on y inverse des TABLEAUX,
     selon des règles propres. Les coefficients sont des entiers, les
     opérations des additions et des multiplications. Rien de ce qui précède
     dans la partie BTS n'y intervient.

     Candidats examinés et ÉCARTÉS :
     - ch. 9 (Lois de probabilité discrètes) : la D4 mentionne les MATRICES DE
       TRANSITION et les chaînes de Markov, dont les colonnes somment à $1$
       parce que ce sont des probabilités. C'est le seul point de contact
       apparent avec le dossier, et il est écarté pour une raison simple :
       ce chapitre-ci ne calcule aucune probabilité et n'utilise aucune
       propriété des lois discrètes — il se contente de nommer l'application.
       Aucun exercice, aucune méthode, aucune question du devoir ne mobilise
       Markov. Un prérequis affiché mais non utilisé trompe le lecteur du
       tableau autant qu'un prérequis manquant.
     - ch. 1 (Les Nombres Complexes) : les deux chapitres introduisent chacun
       un objet algébrique nouveau avec ses règles propres, et l'analogie
       pédagogique est réelle et utile à signaler en classe ($j^2 = -1$ et
       $AB \neq BA$ demandent le même effort d'acceptation). Mais une analogie
       n'est pas une dépendance : aucun calcul complexe n'intervient ici.
     - ch. 2 (Équations différentielles) : aucun lien opératoire. Les systèmes
       différentiels se traitent matriciellement en théorie, mais le chapitre
       2 est strictement scalaire.
     - ch. 3 à ch. 8, ch. 10 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la RÉSOLUTION D'UN
     SYSTÈME de deux équations à deux inconnues — qui est la raison d'être de
     tout le chapitre, et sans laquelle $AX = B$ n'a aucun sens —, le calcul
     sur les ENTIERS RELATIFS (les déterminants négatifs sont trois sur douze)
     et les FRACTIONS (l'inverse divise par $\det A$) viennent tous de la
     REMISE À NIVEAU (`bts-prep`), qui est dans un AUTRE dossier. `prerequis`
     ne vise qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 11 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 25 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 11 est celui du livre, et les deux ordres coïncident.

     Aucune contrainte stricte ne fixe ce placement : le chapitre ne déclare
     aucun prérequis et ne prépare aucun chapitre du dossier, ce que les deux
     colonnes du tableau de progression montreront par des tirets. C'est donc,
     avec les suites appliquées (ch. 10), l'un des deux chapitres les plus
     LIBREMENT DÉPLAÇABLES de toute la partie — information utile en mars,
     quand il faut arbitrer sur un programme en retard : le sacrifier ou le
     déplacer ne casse rien en aval.
     Une seule raison de le laisser ici plutôt qu'en début d'année, où il
     tiendrait aussi bien : il est court, autonome et calculatoire, ce qui en
     fait une bonne transition entre le bloc financier (10) et les deux
     chapitres les plus lourds de la partie (Fourier et Laplace), qui
     demandent beaucoup plus de maturité. */
  rangConseille: 11,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et le calcul matriciel est l'un des points les plus
     inégalement répartis : présent dans les groupements qui traitent des
     réseaux, des systèmes linéaires et des chaînes de Markov, absent de
     plusieurs autres.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« opérations sur les matrices », « déterminant et inverse », « résolution
     d'un système ») et n'inventent aucune spécialité. La `note` le signale
     explicitement, pour qu'un enseignant vérifie le référentiel de SA filière
     avant de les citer. */
  attendus: [
    "Effectuer les opérations sur les matrices : somme, produit par un réel, produit de deux matrices",
    "Calculer le déterminant d'une matrice carrée d'ordre 2 et en déduire si elle est inversible",
    "Résoudre un système linéaire par la méthode matricielle et interpréter le résultat dans le contexte étudié"
  ],

  note: "Le calcul matriciel — opérations, déterminant, inverse, résolution de systèmes — relève " +
        "du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. Le calcul matriciel est de tous les chapitres de cette partie l'un des plus " +
        "<strong>inégalement répartis</strong> entre groupements : central là où l'on traite des " +
        "réseaux, des systèmes linéaires ou des chaînes de Markov, absent ailleurs. Vérifiez avant " +
        "d'y consacrer des séances.<br/><br/>" +
        "<strong>Le prérequis le plus important de ce chapitre ne sera pas affiché, et c'est celui " +
        "qui lui donne son sens.</strong> La colonne « S'appuie sur » portera un tiret : c'est " +
        "exact pour cette partie-là, aucun chapitre BTS n'étant utilisé ici. Mais tout le chapitre " +
        "n'existe que pour résoudre des <strong>systèmes de deux équations à deux inconnues</strong> — " +
        "sans cela, $AX = B$ n'est qu'un jeu de symboles. Il suppose en outre le calcul sur les " +
        "<strong>entiers relatifs</strong> (trois des douze déterminants tirés sont négatifs) et " +
        "sur les <strong>fractions</strong> (l'inverse divise par $\\det A$). Tout cela est dans " +
        "la <strong>remise à niveau</strong>, l'autre partie de l'ouvrage. Un prérequis ne pouvant " +
        "viser qu'un chapitre de la même partie, <strong>rien ne le montrera</strong> : si le " +
        "groupe ne sait pas résoudre un système par substitution, commencez par là — la méthode " +
        "matricielle serait sinon une procédure sans objet.<br/><br/>" +
        "<strong>Ce que les exercices couvrent, et c'est mieux qu'ailleurs dans cette partie.</strong> " +
        "Les douze énoncés numérotés sont tous le même exercice — calculer $\\det(A)$ pour une " +
        "matrice $2 \\times 2$ — mais le tirage comporte <strong>trois déterminants négatifs et un " +
        "déterminant nul</strong> (exercice 2, matrice à lignes proportionnelles). Le " +
        "<strong>cas singulier</strong>, c'est-à-dire la matrice non inversible, est donc " +
        "réellement rencontré en exercice : c'est le point de fond du chapitre et l'objet de la " +
        "question 2 du devoir. <strong>Saisissez cet exercice 2</strong> : c'est le plus riche des " +
        "douze, et le seul du tirage à valoir une discussion.<br/><br/>" +
        "<strong>Ce que les exercices ne couvrent pas.</strong> Aucun ne fait de <strong>produit " +
        "matriciel</strong>, donc aucun ne peut faire rencontrer la <strong>non-commutativité</strong> — " +
        "qui est le piège du cours et la question 5 du devoir. Aucun ne calcule d'<strong>inverse</strong>, " +
        "aucun ne résout de <strong>système</strong>, aucun n'aborde les <strong>matrices de " +
        "transition</strong>. Or ce sont quatre des cinq questions du devoir noté. L'exemple " +
        "résolu du cours (le circuit à deux mailles, résolu par $X = A^{-1}B$ avec vérification) " +
        "fait, lui, le chemin complet : <strong>c'est lui qu'il faut prendre comme modèle de la " +
        "tâche attendue</strong>. Prévoir impérativement deux produits matriciels et une " +
        "résolution de système, que le manuel ne fournit pas.",

  erreurs: [
    {
      titre: "Multiplier les matrices terme à terme",
      eleve: "Pour $AB$ avec $A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ et " +
             "$B = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, l'élève écrit " +
             "$\\begin{pmatrix}0&2\\\\3&0\\end{pmatrix}$ : il a multiplié chaque case par la case " +
             "de même position. La bonne réponse est $\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$.",
      cause: "L'addition matricielle, elle, se fait <strong>bien</strong> terme à terme — c'est la " +
             "première opération enseignée, elle est simple, et elle installe une intuition " +
             "parfaitement juste. Le produit rompt cette règle sans prévenir, et il la rompt pour " +
             "une raison qu'on n'explique presque jamais : le produit matriciel n'est pas conçu " +
             "pour multiplier des tableaux, il est conçu pour <strong>composer des " +
             "transformations</strong>. Sans cette justification, la règle « ligne par colonne » " +
             "apparaît comme une complication gratuite, et l'étudiant y substitue la règle simple " +
             "qui fonctionnait la semaine précédente. C'est un transfert rationnel, pas de " +
             "l'inattention.",
      remede: "Donner la <strong>raison</strong> avant la règle : une matrice représente une " +
              "TRANSFORMATION (une rotation en CAO, un passage de deux entrées à deux sorties " +
              "dans un répartiteur). Le produit $AB$ signifie « appliquer $B$, <strong>puis</strong> " +
              "$A$ ». Or enchaîner deux transformations mélange nécessairement toutes les " +
              "composantes — c'est pour cela qu'on parcourt une ligne entière et une colonne " +
              "entière. Dit ainsi, la règle cesse d'être une bizarrerie.<br/><br/>" +
              "Faire tracer le <strong>geste physiquement</strong>, avec le doigt : l'index gauche " +
              "parcourt la ligne $i$ de $A$, l'index droit descend la colonne $j$ de $B$, on " +
              "multiplie les paires rencontrées et on additionne. Le résultat va en case $(i,j)$. " +
              "Le geste, répété trois fois, s'installe mieux que la formule " +
              "$c_{ij} = \\sum_k a_{ik}b_{kj}$, que personne ne relit.<br/><br/>" +
              "Installer enfin le <strong>contrôle de dimensions</strong>, qui attrape l'erreur " +
              "avant le calcul et qui est la première chose qu'un professionnel vérifie : $AB$ " +
              "n'existe que si le nombre de <strong>colonnes</strong> de $A$ égale le nombre de " +
              "<strong>lignes</strong> de $B$. Une multiplication terme à terme, elle, exigerait " +
              "des matrices de <strong>mêmes dimensions</strong> — deux règles différentes, donc " +
              "deux opérations différentes. Sur un logiciel de calcul, c'est d'ailleurs l'erreur " +
              "de dimension qui signale la confusion, et il vaut mieux l'avoir comprise avant de " +
              "la rencontrer sous forme de message d'erreur.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés demandent TOUS un déterminant, qui se calcule sur
         UNE SEULE matrice. Aucun des douze énoncés ne comporte deux matrices,
         aucun ne demande de produit, et les mots « produit », « AB » et
         « multiplier » n'y figurent nulle part. L'élève ne peut donc pas
         rencontrer cette erreur en faisant les exercices : il n'y multiplie
         jamais deux matrices. Pointer l'un des douze enverrait l'enseignant
         vers une remédiation qui n'en est pas une. La question 4 de
         l'évaluation la travaille (coefficient (1,2) de AB), mais une
         remédiation ne renvoie jamais vers le devoir noté. Le remède ramène
         donc au cours (méthodes 1 et 2, qui portent le produit et le contrôle
         de compatibilité) et demande à l'enseignant de fabriquer le support —
         deux produits 2×2 suffisent et prennent cinq minutes. */
      exercice: null
    },
    {
      titre: "Se tromper de diagonale ou de signe dans $\\det(A) = ad - bc$",
      eleve: "Sur $A = \\begin{pmatrix}2&1\\\\3&1\\end{pmatrix}$, l'élève écrit " +
             "$\\det(A) = 1 \\times 3 - 2 \\times 1 = 1$ (il a pris l'anti-diagonale en premier) " +
             "au lieu de $2 \\times 1 - 1 \\times 3 = -1$. Ou bien il additionne les deux produits " +
             "au lieu de les soustraire, et rend $5$.",
      cause: "La formule $ad - bc$ est courte, et c'est précisément ce qui la rend fragile : " +
             "l'ordre des deux termes est <strong>purement conventionnel</strong> — rien dans la " +
             "disposition du tableau ne dit que la diagonale descendante vient en premier. " +
             "L'étudiant a donc mémorisé « produit moins produit » sans retenir lequel. Il n'a " +
             "d'ailleurs aucun moyen de le vérifier seul : les deux réponses sont opposées, et " +
             "$-1$ « a l'air » d'une erreur de signe plus que d'un résultat. Chez un public habitué " +
             "à se méfier des nombres négatifs, la tentation de « corriger » vers le positif est " +
             "forte — et elle est renforcée par le contexte des énoncés, où il s'agit de vérifier " +
             "qu'un système est résoluble, ce qui a l'air d'une bonne nouvelle donc d'un nombre " +
             "positif.",
      remede: "Fixer le sens par un <strong>geste de lecture, toujours le même</strong> : on lit " +
              "comme on écrit, de haut à gauche vers bas à droite. La diagonale " +
              "<strong>descendante</strong> ($a$ puis $d$) vient donc en premier et compte " +
              "<strong>positivement</strong> ; l'autre suit et se retranche. Faire tracer les deux " +
              "diagonales au crayon sur la matrice, avec un $+$ et un $-$, pendant les premiers " +
              "exercices : le geste disparaît de lui-même quand il est acquis.<br/><br/>" +
              "Rassurer explicitement sur le <strong>signe négatif</strong>, car c'est là que se " +
              "joue la moitié de l'erreur : un déterminant négatif est <strong>parfaitement " +
              "normal</strong> et ne signale aucune faute. Seul son <strong>caractère nul ou non " +
              "nul</strong> décide de l'inversibilité — $\\det(A) = -1$ est aussi inversible que " +
              "$\\det(A) = +1$. En géométrie, le signe indique simplement que la transformation " +
              "retourne le plan (comme un miroir) : c'est une information, pas un " +
              "défaut.<br/><br/>" +
              "Donner un <strong>contrôle par cas particuliers</strong>, immédiat et mémorisable : " +
              "pour une matrice <strong>diagonale</strong> $\\begin{pmatrix}a&0\\\\0&d\\end{pmatrix}$, " +
              "le déterminant vaut $ad$ — le produit des deux termes visibles. Si votre formule ne " +
              "redonne pas cela, elle est fausse. Le tirage en offre justement plusieurs " +
              "(exercices 7, 8, 11), et ils servent de vérification de la méthode avant de " +
              "l'appliquer aux cas généraux.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 24) : l'exercice 1 est le répartiteur de charge,
         A = (2 1 ; 3 1), det = 2×1 - 1×3 = -1. C'est le meilleur support de
         cette erreur, et les coefficients le justifient précisément :
           - le déterminant est NÉGATIF, ce qui est exactement le cas où
             l'élève doute et « corrige » : le deuxième paragraphe du remède
             (rassurer sur le signe) se démontre donc sur l'énoncé même ;
           - inverser les diagonales donne +1, soit l'OPPOSÉ exact : les deux
             réponses ont la même valeur absolue, si bien que l'élève ne peut
             pas trancher par l'ordre de grandeur. C'est ce qui rend l'erreur
             instructive, et ce qui justifie le geste de lecture imposé ;
           - additionner au lieu de soustraire donne 5, un troisième nombre
             bien distinct : les trois variantes se diagnostiquent donc sans
             ambiguïté à la correction ;
           - c'est le premier énoncé du chapitre, donc celui sur lequel
             l'enseignant peut imposer le tracé des diagonales dès le départ.
         L'exercice 6 (circuit à deux mailles, A = (1 1 ; 3 2), det = -1)
         porte le même déterminant et sert de doublon. Choix du 1 parce qu'il
         vient en premier et que ses coefficients sont tous distincts, ce qui
         rend chaque produit traçable. Distinct du renvoi de l'erreur 3
         (exercice 2), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ne pas savoir quoi conclure d'un déterminant nul",
      eleve: "L'élève calcule correctement $\\det(A) = 0$ sur " +
             "$A = \\begin{pmatrix}1&1\\\\3&3\\end{pmatrix}$, puis écrit « donc le système a une " +
             "solution », ou « donc $x = 0$ et $y = 0$ », ou refait le calcul en cherchant son " +
             "erreur — persuadé qu'un déterminant nul signale une faute.",
      cause: "Dans presque toute la scolarité antérieure, <strong>un résultat nul est un cas " +
             "dégénéré</strong>, souvent le signe qu'on s'est trompé quelque part. Ici c'est " +
             "l'inverse : $0$ est un résultat parfaitement légitime, et c'est même " +
             "l'<strong>information la plus importante</strong> que le déterminant puisse fournir. " +
             "S'y ajoute une difficulté logique réelle, qu'il ne faut pas sous-estimer : la " +
             "conclusion correcte est une <strong>disjonction</strong> — « aucune solution " +
             "<strong>ou</strong> une infinité » — et les étudiants, comme tout le monde, " +
             "préfèrent une réponse unique. Une conclusion qui laisse deux possibilités ouvertes " +
             "ressemble à un travail non terminé, alors que c'est ici la réponse complète.",
      remede: "Renverser la lecture : $\\det(A) = 0$ n'est <strong>pas un échec du calcul, c'est " +
              "un résultat du calcul</strong>. Il dit quelque chose de très précis — la matrice " +
              "n'est pas inversible, on ne peut pas écrire $X = A^{-1}B$ — et c'est exactement ce " +
              "qu'on cherchait à savoir. Le formuler ainsi, dès le premier cas rencontré, évite " +
              "que l'étudiant ne passe cinq minutes à revérifier un calcul juste.<br/><br/>" +
              "Faire <strong>voir la cause</strong>, qui est toujours visible à l'œil sur une " +
              "matrice $2 \\times 2$ : $\\det(A) = 0$ signifie que les deux lignes (ou les deux " +
              "colonnes) sont <strong>proportionnelles</strong>. Sur " +
              "$\\begin{pmatrix}1&1\\\\3&3\\end{pmatrix}$, la seconde ligne est le triple de la " +
              "première. Or deux équations proportionnelles ne sont qu'<strong>une seule " +
              "information répétée</strong> : on a deux inconnues et un seul renseignement, donc " +
              "on ne peut pas conclure. La disjonction cesse alors d'être un embarras : elle " +
              "s'explique.<br/><br/>" +
              "Traduire enfin en <strong>langage métier</strong>, ce qui donne à ce cas toute son " +
              "importance : sur un circuit électrique, $\\det(A) = 0$ signale que les deux mailles " +
              "ne fournissent pas deux équations indépendantes — on a <strong>oublié une " +
              "équation</strong> ou mal posé le problème. Sur un bilan matière, c'est le signe que " +
              "les deux relations écrites disent la même chose. Le déterminant nul est donc, en " +
              "pratique, un <strong>détecteur d'erreur de modélisation</strong> — et c'est à ce " +
              "titre qu'on le calcule AVANT de résoudre, comme le demandent d'ailleurs " +
              "littéralement les douze énoncés du chapitre (« calcule $\\det(A)$ pour vérifier " +
              "que... »).",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 est le
         bilan matière d'un procédé chimique, A = (1 1 ; 3 3), det = 0. C'est
         LE support de cette erreur, et il est le SEUL possible du tirage :
           - c'est le seul des douze exercices dont le déterminant est nul.
             Les onze autres valent -2, -1, 2, 3, 4, 6, 8 ou 12. Sans lui, la
             fiche devrait renoncer au renvoi, et c'est le seul chapitre du
             dossier `bts` où le cas singulier est effectivement tiré : il
             faut donc le saisir ;
           - sa structure est en outre idéale pour le deuxième paragraphe du
             remède : la seconde ligne (3 3) est exactement le TRIPLE de la
             première (1 1), et la proportionnalité se voit sans calcul. Sur
             la matrice S4 de la banque supplémentaire, (2 3 ; 2 3), les
             lignes sont identiques — encore plus visible, mais elle n'est pas
             numérotée donc non renvoyable en type "exercice" ;
           - le contexte, un bilan matière reliant deux réactifs à deux
             produits, porte directement la lecture métier du troisième
             paragraphe : deux relations proportionnelles signifient qu'on a
             écrit deux fois la même conservation, donc qu'il manque une
             équation.
         Distinct du renvoi de l'erreur 2 (exercice 1), conformément à la
         règle du projet. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Inverser l'ordre dans $(AB)^{-1}$, ou croire que $AB = BA$",
      eleve: "L'élève écrit $(AB)^{-1} = A^{-1}B^{-1}$ au lieu de $B^{-1}A^{-1}$. Ou bien, devant " +
             "un produit à simplifier, il permute librement les facteurs comme il le ferait avec " +
             "des nombres, et obtient un résultat faux sans qu'aucune étape ne paraisse suspecte.",
      cause: "La commutativité est acquise depuis l'école primaire : $3 \\times 5 = 5 \\times 3$, " +
             "et cette propriété n'a <strong>jamais</strong> été démentie en quinze ans de " +
             "pratique. Elle n'est même pas perçue comme une propriété — elle fait partie de ce " +
             "que « multiplier » veut dire. Demander de l'abandonner, c'est demander de " +
             "reconsidérer une évidence, ce qui est toujours le plus difficile. S'y ajoute que la " +
             "non-commutativité <strong>ne se voit pas</strong> dans l'écriture : $AB$ et $BA$ " +
             "s'écrivent avec les mêmes lettres, et rien ne signale que l'ordre porte de " +
             "l'information. Chez un adulte en reprise d'études, l'automatisme est d'autant plus " +
             "solide qu'il a servi dans la vie professionnelle sans jamais poser problème.",
      remede: "Faire <strong>constater</strong> plutôt qu'annoncer, sur un exemple minimal et en " +
              "trois minutes : prendre $A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ et " +
              "$B = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, calculer $AB$ puis $BA$, et " +
              "constater qu'ils diffèrent. Un contre-exemple vu de ses propres yeux vaut dix " +
              "affirmations : c'est la seule façon d'ébranler une évidence de quinze " +
              "ans.<br/><br/>" +
              "Donner l'<strong>image des chaussettes et des chaussures</strong>, qui est dans le " +
              "cours et qu'il faut exploiter parce qu'elle est parfaite : on enfile les " +
              "chaussettes puis les chaussures ; pour se déshabiller, on retire les chaussures " +
              "<strong>puis</strong> les chaussettes. L'ordre s'inverse à l'annulation, " +
              "nécessairement. $(AB)^{-1} = B^{-1}A^{-1}$ n'est plus une formule à mémoriser mais " +
              "une évidence de la vie courante.<br/><br/>" +
              "Relier enfin au <strong>sens des transformations</strong>, qui explique pourquoi il " +
              "en va ainsi : une matrice est une opération, et les opérations ne commutent pas en " +
              "général — tourner un objet puis le projeter ne donne pas le même résultat que le " +
              "projeter puis le tourner. Tout logiciel de CAO repose sur cet ordre, et un " +
              "technicien qui permute deux transformations obtient une pièce fausse. Dit ainsi, " +
              "l'ordre des matrices cesse d'être une contrainte formelle : c'est l'ordre des " +
              "gestes.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés portent sur UNE SEULE matrice à la fois et
         demandent son déterminant. Aucun produit, aucun inverse, aucune
         composition. Les notations AB, A^-1 et le mot « inverse » (au sens de
         matrice inverse) n'apparaissent dans aucun des douze énoncés — seul
         l'adjectif « inversible » y figure, mais uniquement comme propriété à
         tester par le déterminant, sans jamais calculer l'inverse. Il est
         donc structurellement impossible qu'un de ces exercices fasse
         rencontrer la non-commutativité : elle exige deux matrices, et il n'y
         en a jamais qu'une. Pointer l'un d'eux enverrait l'enseignant vers
         une remédiation qui n'en est pas une. La question 5 de l'évaluation
         la travaille exactement, mais une remédiation ne renvoie jamais vers
         le devoir noté. Le remède ramène donc au cours (le piège du cours et
         le récapitulatif, qui portent tous deux la non-commutativité) et
         demande à l'enseignant de fabriquer le support — l'exemple donné dans
         le premier paragraphe du remède est justement celui de la question 4
         du devoir, et il se traite en trois minutes au tableau. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\det\begin{pmatrix}5&3\\2&4\end{pmatrix}$. C'est exactement la tâche
          des douze exercices : deux produits, une soustraction. Exécution
          d'une procédure connue sur des nombres donnés : « calculer ».
     Q2 — si $\det(A) = 0$, le système $AX = B$ : admet une solution unique,
          n'en admet aucune ou une infinité, en admet exactement deux, est
          homogène ? Aucun calcul : il faut savoir ce qu'un déterminant nul
          interdit, et accepter une conclusion en disjonction. Jugement de
          validité sur quatre affirmations : « raisonner ».
     Q3 — $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$, calculer le coefficient
          $(1,1)$ de $A^{-1}$. Deux étapes enchaînées — déterminant, puis
          formule de l'inverse — mais toutes deux au programme et sans choix
          de méthode : « calculer ».
     Q4 — RÉÉCRITE le 2026-09-17. Elle demandait le coefficient $(1,2)$ d'un
          produit $AB$ : une ligne fois une colonne, soit deux produits et une
          somme — la même extraction ponctuelle que la Q3, qui allait chercher
          le coefficient $(1,1)$ de $A^{-1}$. Deuxième coefficient isolé du
          même devoir, et troisième « calculer ».
          Elle demande maintenant d'ESSAYER : quatre matrices sont proposées
          et il faut chercher laquelle commute avec $A$, en calculant $AB$
          PUIS $BA$ pour chacune. Tâtonner sur des candidates et produire un
          contre-exemple ($\begin{pmatrix}2&0\\0&3\end{pmatrix}$ est diagonale
          et ne commute pourtant pas) : c'est « chercher ».
          Le calcul reste indispensable et il est bien plus lourd qu'avant —
          deux produits matriciels complets au minimum, là où un seul
          coefficient suffisait.
          La question porte désormais sur l'erreur 1 de cette fiche —
          multiplier les matrices terme à terme — que le tirage ne travaille
          pas (`exercice: null`), et elle la rend auto-détectable : un élève
          qui multiplie case par case trouve $AB = BA$ pour les QUATRE
          candidates et se retrouve incapable de choisir. La correction le lui
          dit explicitement.
     Q5 — $(AB)^{-1} = B^{-1}A^{-1}$ est une conséquence de : la commutativité,
          la NON-commutativité, la distributivité, l'associativité de
          l'addition ? Aucun calcul : il faut identifier la propriété
          structurelle qui force l'inversion de l'ordre, et écarter trois
          propriétés algébriques voisines dont la première est l'exact
          contraire de la bonne réponse. C'est la question la plus exigeante
          du devoir : « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2, chercher 1.
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande de mettre une situation en équation, de lire
     une représentation, ni de rédiger une explication. C'est un constat sur
     les cinq énoncés, pas un choix.
     La Q4 et la Q5 se répondent désormais : la Q5 NOMME la non-commutativité,
     la Q4 la fait ÉPROUVER sur quatre essais. C'est l'ordre inverse de celui
     qu'on attendrait, mais il est pédagogiquement heureux — l'élève tâtonne
     avant qu'on lui donne le mot.

     À signaler : le geste central du chapitre — METTRE UN SYSTÈME sous forme
     matricielle $AX = B$, c'est-à-dire traduire deux équations en un tableau —
     n'est évalué par aucune des cinq questions, alors que c'est le troisième
     attendu officiel et l'objet de l'exemple résolu du cours. Les cinq
     questions partent toutes de matrices déjà écrites. « modéliser » reste
     donc à 0 alors que c'est précisément ce qui donne un intérêt au chapitre.
     Un enseignant qui veut l'évaluer n'a qu'à donner un système de deux
     équations et demander $A$, $X$ et $B$ : deux lignes suffisent. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "chercher", "raisonner"]
  }
};
