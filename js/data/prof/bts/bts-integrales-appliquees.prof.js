/* =========================================================
   Spark Learning – js/data/prof/bts/bts-integrales-appliquees.prof.js
   Fiche professeur du chapitre « Primitives et calcul intégral appliqué »
   (programme BTS), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 20 (ce chapitre est le vingt et unième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun demande $\int_a^b x^n\,dx$ avec
   $n \in \{1, 2, 3\}$ et des bornes entières. Seuls le contexte (production,
   débit, vitesse, vérin, puissance dissipée, flux thermique) et le triplet
   $(n, a, b)$ changent.

   Le tirage n'est cependant pas dénué de variété utile, et c'est un point à
   relever pour l'enseignant : il couvre les trois exposants 1, 2 et 3, et
   quatre des douze résultats sont DÉCIMAUX (1,5 ; 50,67 ; 43,75 ; 303,75),
   ce qui interdit de croire que l'intégrale rend toujours un entier.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : l'intégrale NÉGATIVE et la distinction aire algébrique /
   aire géométrique (D2 et le piège du cours), la VALEUR MOYENNE (D3),
   l'INTÉGRATION PAR PARTIES (D4), les primitives de $e^x$ et de $1/x$ (deux
   des quatre formules encadrées). Or quatre des cinq questions de
   l'évaluation portent là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-integrales-appliquees"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 5 (Fonctions d'une variable réelle, `bts-fonctions-reelles`) :
     RETENU. C'est lui qui installe la DÉRIVÉE, et la primitive n'est
     définissable qu'à partir d'elle : D1 dit mot pour mot « fonction $F$
     telle que $F'(x) = f(x)$ ». Chercher une primitive, c'est chercher une
     fonction dont on connaît la dérivée — un étudiant qui ne sait pas
     dériver $x^4$ ne peut pas vérifier que $x^4/4$ est une primitive de
     $x^3$, et il est donc condamné à appliquer $\int x^n dx = x^{n+1}/(n+1)$
     comme une formule magique. Le chapitre 5 fournit en outre les formules
     $(e^x)' = e^x$ et $(\ln x)' = 1/x$, qui sont exactement les deux
     primitives encadrées ici.

     ch. 6 (Dérivation appliquée, `bts-derivation-appliquee`) : RETENU aussi,
     et ce second prérequis mérite sa justification, car il est moins évident
     que le premier. Le chapitre 6 n'apporte pas de technique nouvelle — il
     apporte l'habitude de LIRE une dérivée comme une grandeur physique ou
     économique (coût marginal, recette marginale). Or l'intégrale se lit
     exactement dans l'autre sens : ce chapitre-ci pose $\int v\,dt$ = distance,
     $\int i\,dt$ = charge, $\int p\,dt$ = énergie. L'un ne prend son sens que
     contre l'autre : dériver, c'est passer de la grandeur au taux ;
     intégrer, c'est revenir du taux à la grandeur. Traiter les intégrales
     sans avoir installé cette lecture au chapitre 6 revient à enseigner un
     aller sans son retour.

     Candidats examinés et ÉCARTÉS :
     - ch. 12 (Séries de Fourier) : les coefficients $a_n$ et $b_n$ sont
       définis par des intégrales, et le lien est donc réel et fort — mais il
       joue dans l'AUTRE sens. C'est Fourier qui s'appuie sur ce chapitre-ci,
       pas l'inverse ; le déclarer ici créerait un cycle que
       `validerPrerequis` refuse, à juste titre.
     - ch. 13 (Transformée de Laplace) : même raisonnement. La définition
       $F(p) = \int_0^{+\infty} f(t)e^{-pt}dt$ est une intégrale, mais c'est
       Laplace qui en dépend.
     - ch. 2 (Équations différentielles du 2nd ordre) : on pourrait croire au
       lien, une équation différentielle se résolvant « par intégration ».
       Mais la méthode du chapitre 2 est purement algébrique (équation
       caractéristique, discriminant) : aucune intégrale n'y est calculée. Le
       prérequis serait affiché sans être utilisé.
     - ch. 1, 3, 4 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : les PUISSANCES et
     leurs règles de calcul (l'exposant $n+1$ est partout ici), les fractions,
     et l'EXPONENTIELLE et le LOGARITHME qui apparaissent dans les formules
     encadrées et dans la question 3 du devoir, viennent tous de la REMISE À
     NIVEAU (`bts-prep`), qui est dans un AUTRE dossier. `prerequis` ne vise
     qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [5, 6],

  /* Rang conseillé (2026-09-17) : rang 7 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 21 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 7 est celui du livre, et les deux ordres coïncident.

     Le placement ferme le bloc analyse : fonctions (5), dérivation appliquée
     (6), intégrales appliquées (7). Il est contraint par ses deux prérequis,
     qui doivent précéder. Le déplacer plus tard le séparerait de la dérivée,
     dont il est l'opération inverse et contre laquelle il se définit — c'est
     le moment où la symétrie se voit le mieux. Le déplacer plus tôt est
     impossible : on ne peut pas chercher une fonction dont on connaît la
     dérivée avant de savoir dériver. */
  rangConseille: 7,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et le calcul intégral est présent dans la plupart
     d'entre eux — mais l'intégration par parties, citée dans le cours, n'est
     exigée que de certains.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« primitive », « intégrale définie », « valeur moyenne ») et n'inventent
     aucune spécialité. La `note` le signale explicitement, pour qu'un
     enseignant vérifie le référentiel de SA filière avant de les citer. */
  attendus: [
    "Déterminer une primitive d'une fonction usuelle et reconnaître qu'elle est définie à une constante près",
    "Calculer une intégrale définie et l'interpréter comme une aire algébrique",
    "Déterminer la valeur moyenne d'une fonction sur un intervalle et lui donner un sens dans le contexte étudié"
  ],

  note: "Les primitives et le calcul intégral appliqué — intégrale définie, aire algébrique, valeur " +
        "moyenne — relèvent du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. L'<strong>intégration par parties</strong>, présentée dans le cours (D4), est " +
        "un point où les référentiels divergent nettement : exigée dans certains groupements, " +
        "absente dans d'autres. Vérifiez avant de la traiter.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Le chapitre s'appuie " +
        "sur « Fonctions d'une variable réelle » (chapitre 5) et « Dérivation appliquée » " +
        "(chapitre 6) — cela, la colonne « S'appuie sur » l'affiche. Mais il suppose aussi de " +
        "maîtriser les <strong>puissances</strong> (l'exposant $n+1$ est partout), les " +
        "<strong>fractions</strong>, et de connaître l'<strong>exponentielle</strong> et le " +
        "<strong>logarithme</strong>, qui figurent dans deux des quatre formules encadrées et dans " +
        "la question 3 du devoir. Tout cela est dans la <strong>remise à niveau</strong>, l'autre " +
        "partie de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même partie, " +
        "<strong>rien ne le montrera</strong> : si le groupe bute sur $\\int e^{2x}dx$, c'est là " +
        "qu'il faut revenir.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les douze énoncés numérotés sont <strong>tous le même exercice</strong> : " +
        "$\\int_a^b x^n\\,dx$ avec $n \\in \\{1 ; 2 ; 3\\}$ et des bornes entières positives. Le " +
        "tirage a deux qualités qu'il faut exploiter — les trois exposants sont représentés, et " +
        "<strong>quatre des douze résultats sont décimaux</strong> ($1{,}5$ ; $50{,}67$ ; " +
        "$43{,}75$ ; $303{,}75$), ce qui empêche de croire qu'une intégrale rend toujours un " +
        "entier.<br/><br/>" +
        "Mais rien d'autre n'est travaillé. Aucun exercice n'a de fonction <strong>négative</strong>, " +
        "donc aucun ne peut faire apparaître une <strong>intégrale négative</strong> ni la " +
        "distinction entre aire algébrique et aire géométrique — qui est pourtant le " +
        "<strong>piège du cours</strong>. Aucun ne demande de <strong>valeur moyenne</strong> " +
        "(D3), aucun n'intègre une <strong>exponentielle</strong> ou un $1/x$, aucun ne fait " +
        "d'<strong>intégration par parties</strong>. Or ce sont <strong>quatre des cinq questions " +
        "du devoir noté</strong>. L'exemple résolu du cours (la charge $Q = \\int i\\,dt$ d'un " +
        "courant sinusoïdal) va, lui, nettement plus loin : <strong>c'est lui qu'il faut prendre " +
        "comme modèle de la tâche attendue</strong>. Prévoir impérativement un énoncé à fonction " +
        "négative et un calcul de valeur moyenne, que le manuel ne fournit pas.",

  erreurs: [
    {
      titre: "Dériver au lieu d'intégrer, ou se tromper de sens sur l'exposant",
      eleve: "Sur $\\int_1^4 x^2\\,dx$, l'élève écrit la primitive $2x$ (il a dérivé) ou " +
             "$\\dfrac{x^3}{2}$ (il a bien augmenté l'exposant mais divisé par l'ancien). Ou " +
             "encore $x^3$, sans diviser du tout.",
      cause: "Les deux opérations sont <strong>symétriques et se ressemblent typographiquement</strong> : " +
             "dans les deux cas on touche à l'exposant et on multiplie ou divise par un nombre " +
             "voisin. La dérivation a de plus été pratiquée bien plus longtemps — elle vient du " +
             "chapitre 5, elle a été utilisée intensivement au chapitre 6 — et c'est donc elle qui " +
             "s'impose sous la pression. Ce n'est pas un défaut de mémoire : c'est une procédure " +
             "plus ancienne et mieux consolidée qui prend la place de la nouvelle, phénomène " +
             "classique et d'autant plus marqué chez un adulte qui reconstruit ses automatismes. " +
             "La variante $x^3/2$ est plus intéressante encore : elle montre que l'étudiant a " +
             "retenu « augmenter et diviser », mais pas <strong>par quoi</strong> diviser.",
      remede: "Installer la <strong>vérification par dérivation</strong> comme réflexe obligatoire, " +
              "et la compter dans le barème : une fois la primitive écrite, on la dérive " +
              "mentalement et on doit retomber sur la fonction de départ. $(x^3/3)' = 3x^2/3 = x^2$ " +
              "— c'est juste. $(x^3/2)' = 3x^2/2 \\neq x^2$ — c'est faux, et l'étudiant l'a vu " +
              "seul, en cinq secondes. <strong>Aucune autre notion du programme n'offre une " +
              "autovérification aussi simple</strong> : il serait dommage de ne pas " +
              "l'exploiter.<br/><br/>" +
              "Formuler la règle dans le <strong>bon ordre des gestes</strong> : « j'augmente " +
              "l'exposant de $1$, PUIS je divise par le <strong>nouvel</strong> exposant ». " +
              "L'adverbe « nouvel » est tout l'enjeu, et c'est lui qu'il faut faire répéter. Écrire " +
              "la formule générale $\\int x^n dx = \\dfrac{x^{n+1}}{n+1}$ au tableau en entourant " +
              "les DEUX occurrences de $n+1$ rend la chose visible.<br/><br/>" +
              "Rappeler enfin le <strong>sens des deux opérations</strong>, qui empêche de les " +
              "confondre : dériver, c'est passer d'une grandeur à son taux de variation " +
              "(de la distance à la vitesse) ; intégrer, c'est <strong>accumuler</strong> un taux " +
              "pour retrouver la grandeur (de la vitesse à la distance). Devant un énoncé qui dit " +
              "« calcule la distance parcourue à partir de la vitesse », le sens du calcul ne fait " +
              "plus de doute — on remonte, donc on intègre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 20) : l'exercice 3 est la vitesse d'un mobile en
         accélération, v(x) = x², intégrale de 1 à 4, réponse 21. C'est le
         meilleur support de cette erreur, et l'exposant 2 en est la raison
         principale :
           - avec n = 2, les trois fautes donnent trois résultats DISTINCTS et
             tous plausibles : dériver donne 2x puis [x²] = 15 ; diviser par
             l'ancien exposant donne [x³/2] = 31,5 ; ne pas diviser donne
             [x³] = 63. La bonne réponse est 21. Quatre nombres différents,
             donc le diagnostic de l'erreur est immédiat à la correction, ce
             qui n'est pas vrai pour n = 1 (où dériver donne une constante,
             erreur trop visible pour être instructive) ;
           - la vérification par dérivation du remède se démontre dessus en
             une ligne : (x³/3)' = x², et l'étudiant retombe sur l'énoncé ;
           - le contexte, « vitesse → distance », est exactement celui du
             troisième paragraphe du remède : il dit le sens du calcul.
         L'exercice 12 porte aussi n = 2 avec les mêmes bornes 1 et 4 et la
         même réponse 21 (flux thermique) : c'est son doublon parfait et il
         sert de deuxième support. Choix du 3 parce qu'il vient en premier et
         que son contexte cinématique est le plus parlant. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Croire qu'une intégrale est toujours positive, ou la confondre avec une aire",
      eleve: "L'élève obtient $\\int_a^b f(x)\\,dx = -12$ et conclut « j'ai dû me tromper, une aire " +
             "ne peut pas être négative ». Il refait le calcul, retrouve $-12$, et met un signe " +
             "plus. Ou bien, sur une fonction qui change de signe, il annonce l'intégrale comme " +
             "étant l'aire alors que les deux diffèrent.",
      cause: "L'intégrale est presque toujours présentée comme « l'aire sous la courbe », et cette " +
             "formule — commode, imagée, pédagogiquement efficace — est <strong>fausse dès que la " +
             "fonction passe sous l'axe</strong>. L'étudiant a donc mémorisé une définition " +
             "approximative, ce qui n'est pas sa faute. S'y ajoute une évidence géométrique très " +
             "solide : depuis l'école primaire, une aire se mesure en unités carrées et ne peut " +
             "pas être négative. Il faudrait donc, pour accepter le résultat, remettre en cause " +
             "quelque chose qui n'a jamais été démenti — et l'étudiant préfère, logiquement, " +
             "soupçonner son calcul.",
      remede: "Substituer le mot <strong>« bilan »</strong> au mot « aire », partout, dès le début " +
              "du chapitre : l'intégrale compte <strong>positivement</strong> ce qui est au-dessus " +
              "de l'axe et <strong>négativement</strong> ce qui est en dessous. Ce n'est pas une " +
              "surface, c'est un <strong>solde</strong>. Avec ce mot-là, un résultat négatif ne " +
              "surprend plus personne.<br/><br/>" +
              "Séparer explicitement les <strong>deux questions</strong>, qui n'ont pas la même " +
              "réponse : « quel est le bilan ? » se calcule par $\\int_a^b f$ et peut être négatif ; " +
              "« quelle est l'aire géométrique ? » se calcule par $\\int_a^b |f|$, en découpant " +
              "l'intervalle aux points où $f$ change de signe, et reste toujours positive. Un " +
              "énoncé de BTS demande presque toujours la première.<br/><br/>" +
              "Ancrer sur des <strong>bilans métier</strong> où le signe est l'information " +
              "principale : le débit net d'une cuve qu'on remplit puis qu'on vide (un volume total " +
              "négatif signifie qu'elle s'est vidée plus qu'elle ne s'est remplie) ; la trésorerie " +
              "cumulée d'une entreprise ; la charge d'un condensateur qui se charge puis se " +
              "décharge. Dans chaque cas, <strong>effacer le signe détruit l'information</strong> — " +
              "et c'est exactement ce que fait l'étudiant qui « corrige » son moins en plus.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés intègrent x^n avec n = 1, 2 ou 3 sur des bornes
         ENTIÈRES POSITIVES (de 1 à 7 selon les énoncés). La fonction x^n y
         est donc positive sur tout l'intervalle, sans exception, et les douze
         résultats tirés sont positifs. Il est structurellement IMPOSSIBLE
         qu'un de ces exercices produise une intégrale négative : l'élève ne
         peut pas rencontrer l'erreur en les faisant, et — c'est pire — les
         douze CONFIRMENT la fausse règle « une intégrale est positive ».
         Pointer l'un d'eux ne remédierait donc pas à l'erreur, il la
         renforcerait. La question 4 de l'évaluation la travaille exactement,
         mais une remédiation ne renvoie jamais vers le devoir noté. Le remède
         ramène donc au cours (D2 et le piège du cours, qui portent tous deux
         sur ce point) et demande à l'enseignant de fabriquer le support : un
         seul énoncé à fonction négative suffit, par exemple l'intégrale de
         x - 3 entre 0 et 2. */
      exercice: null
    },
    {
      titre: "Oublier de soustraire $F(a)$, ou inverser $F(b)$ et $F(a)$",
      eleve: "Sur $\\int_3^7 x^1\\,dx$, l'élève calcule $F(7) = 24{,}5$ et rend $24{,}5$ au lieu de " +
             "$24{,}5 - 4{,}5 = 20$. Ou bien il écrit $F(3) - F(7) = -20$ et rend un résultat " +
             "négatif sur une grandeur positive.",
      cause: "La notation $[F(x)]_a^b$ est une <strong>consigne écrite en abrégé</strong>, et " +
             "l'abréviation est mal choisie pour qui la découvre : les deux bornes y figurent en " +
             "petits caractères, à droite d'un crochet, sans aucun symbole d'opération entre elles. " +
             "Rien à l'écran ne dit « soustrais ». L'étudiant qui a calculé $F(7)$ a le sentiment " +
             "d'avoir fini son travail — il a trouvé une primitive et l'a évaluée. L'inversion " +
             "$F(a) - F(b)$, elle, vient de l'ordre de LECTURE : on lit $a$ en bas puis $b$ en " +
             "haut, donc on écrit $a$ d'abord, alors que la convention veut l'inverse.",
      remede: "Faire écrire la soustraction <strong>en toutes lettres et sur sa propre ligne</strong>, " +
              "avant tout calcul numérique : « $= F(7) - F(3)$ », puis seulement les valeurs. " +
              "L'étape ne peut plus être sautée parce qu'elle est devenue une ligne à écrire, et " +
              "l'ordre est fixé au moment où on l'écrit, pas au moment où on lit les " +
              "bornes.<br/><br/>" +
              "Donner le <strong>moyen mnémotechnique de l'ordre</strong>, qui est aussi sa " +
              "justification : <strong>le haut moins le bas</strong>, comme pour une variation — " +
              "état final moins état initial. C'est exactement la même convention que pour un écart " +
              "de température ou une variation de stock, et l'étudiant l'a déjà pratiquée " +
              "ailleurs.<br/><br/>" +
              "Installer un <strong>contrôle de signe</strong> qui attrape les deux fautes d'un " +
              "coup : quand la fonction intégrée est positive et que $b > a$, le résultat " +
              "<strong>doit</strong> être positif. Un volume écoulé, une énergie dissipée, une " +
              "distance parcourue ne sont jamais négatifs — si le calcul en rend un, les bornes " +
              "sont inversées. Et si le résultat est <strong>égal à $F(b)$ tout rond</strong>, " +
              "c'est que $F(a)$ a été oublié : le vérifier prend deux secondes.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 est le
         débit d'une pompe de relevage, Q(x) = x, intégrale de 3 à 7, réponse
         20. C'est le meilleur support de cette erreur, et les bornes le
         justifient précisément :
           - F(x) = x²/2, donc F(7) = 24,5 et F(3) = 4,5. Oublier F(a) donne
             24,5, un nombre BIEN DISTINCT de la bonne réponse 20 et
             plausible : l'erreur ne se voit pas à l'ordre de grandeur, ce qui
             la rend instructive ;
           - la borne inférieure 3 est assez GRANDE pour que F(3) = 4,5 pèse
             visiblement dans le résultat (près d'un cinquième). Sur un
             exercice dont la borne basse serait 1 (l'exercice 3 ou 12,
             bornes 1 et 4), F(a) est petit et l'oublier change peu le
             résultat : l'erreur passerait inaperçue ;
           - inverser les bornes donne -20, négatif, donc immédiatement
             détecté par le contrôle de signe du remède — ce qui permet de
             démontrer ce contrôle sur l'énoncé même ;
           - le contexte, un volume écoulé, est une grandeur dont chacun sait
             qu'elle ne peut pas être négative.
         Distinct du renvoi de l'erreur 1 (exercice 3), conformément à la
         règle du projet : deux erreurs d'un même chapitre ne pointent jamais
         le même énoncé. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre l'intégrale et la valeur moyenne",
      eleve: "Sur $f(x) = 6x^2$ entre $0$ et $2$, l'élève calcule $\\int_0^2 6x^2 dx = 16$ et " +
             "annonce que la valeur moyenne est $16$. Il a oublié de diviser par la longueur de " +
             "l'intervalle : $\\bar{f} = 16/2 = 8$.",
      cause: "L'intégrale est le calcul long, celui qui demande de trouver une primitive et " +
             "d'évaluer deux bornes ; la division finale par $(b - a)$ est une seule opération " +
             "triviale, arrivant après tout le travail. Elle a donc <strong>tout du détail " +
             "décoratif</strong>, et c'est ce qui la fait sauter. S'y ajoute que le mot " +
             "« moyenne » est associé, depuis toujours, à « somme divisée par le NOMBRE de " +
             "valeurs » : ici il n'y a pas de nombre de valeurs, il y a une longueur d'intervalle, " +
             "et le lien entre les deux n'est pas évident. Enfin, les douze exercices du chapitre " +
             "s'arrêtant tous à l'intégrale, l'étudiant a douze fois pratiqué le calcul SANS la " +
             "division finale — l'habitude est donc activement construite par le manuel lui-même.",
      remede: "Faire du <strong>mot « moyenne » un déclencheur systématique</strong> : partout où " +
              "il apparaît, un $\\dfrac{1}{b-a}$ doit apparaître aussi. La consigne est simple, se " +
              "vérifie d'un coup d'œil sur la copie, et couvre tous les cas du " +
              "programme.<br/><br/>" +
              "Donner la <strong>lecture géométrique</strong>, qui rend la division évidente au " +
              "lieu d'arbitraire : la valeur moyenne est la <strong>hauteur du rectangle</strong> " +
              "qui aurait la même aire sur le même intervalle. Or aire $=$ hauteur $\\times$ " +
              "largeur, donc hauteur $=$ aire $\\div$ largeur. Un rectangle dessiné au tableau par " +
              "dessus la courbe, de même aire, et la formule se retrouve sans la " +
              "retenir.<br/><br/>" +
              "Installer un <strong>contrôle d'encadrement</strong> très efficace ici : la valeur " +
              "moyenne est nécessairement <strong>comprise entre le minimum et le maximum</strong> " +
              "de la fonction sur l'intervalle. Sur $6x^2$ entre $0$ et $2$, la fonction va de $0$ " +
              "à $24$ : une moyenne de $16$ est possible, $8$ aussi — mais une moyenne de $32$ " +
              "serait aberrante. Sur un intervalle long, ce contrôle attrape immédiatement l'oubli " +
              "de la division, puisque l'intégrale y dépasse largement le maximum de la fonction. " +
              "La lecture métier va dans le même sens : la <strong>valeur efficace</strong> d'une " +
              "tension alternative, celle qu'affiche le multimètre et qui figure sur toutes les " +
              "plaques signalétiques, est construite exactement sur ce principe — sans la division " +
              "par la période, elle grandirait avec la durée d'observation, ce qui n'aurait aucun " +
              "sens.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés demandent tous une INTÉGRALE et jamais une valeur
         moyenne. Les mots « moyenne » et « valeur moyenne » n'apparaissent
         dans AUCUN des douze énoncés, et le facteur 1/(b-a) n'y figure nulle
         part. L'élève ne peut donc pas rencontrer cette erreur en faisant les
         exercices — et, comme le dit la `cause` ci-dessus, les douze
         construisent au contraire l'habitude de s'arrêter avant la division.
         Pointer l'un d'eux ne remédierait pas à l'erreur, il la
         consoliderait. La question 2 de l'évaluation la travaille exactement
         (valeur moyenne de 6x² sur [0 ; 2], avec 16 en distracteur — c'est-à-
         dire l'intégrale non divisée, preuve que le concepteur du devoir a vu
         l'erreur), mais une remédiation ne renvoie jamais vers le devoir
         noté. Le remède ramène donc au cours (D3 et la méthode 3, qui portent
         la formule et un exemple chiffré) et demande à l'enseignant de
         fabriquer le support : il suffit de reprendre n'importe lequel des
         douze énoncés et d'ajouter « quel est le débit MOYEN sur la
         période ? ». */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\int_1^3 2x\,dx$. C'est exactement la tâche des douze exercices :
          primitive d'un monôme, évaluation aux deux bornes, soustraction.
          Exécution d'une procédure connue sur des nombres donnés :
          « calculer ».
     Q2 — valeur moyenne de $6x^2$ sur $[0\,;\,2]$, à choix multiple, avec
          $16$ en distracteur (c'est-à-dire l'intégrale non divisée). Il faut
          calculer l'intégrale PUIS diviser : c'est une procédure en deux
          temps, mais les deux temps sont connus et aucun choix de méthode ne
          se pose. « calculer ».
     Q3 — $\int_0^1 e^{2x}dx$, avec $e^2 \approx 7{,}389$ fourni. La primitive
          de $e^{2x}$ n'est pas dans les quatre formules encadrées (qui
          donnent $\int e^x dx$, sans coefficient) : il faut voir qu'il faut
          diviser par $2$. On pourrait y voir un raisonnement, mais la
          correction montre que le geste attendu est l'application directe
          d'une primitive composée, procédure connue : « calculer ».
     Q4 — « $\int_a^b f$ peut être négative. Cela signifie que : », avec « le
          calcul est faux », « l'aire géométrique est négative » et « les
          bornes sont inversées » en distracteurs. Aucun calcul : il faut
          juger la validité de quatre interprétations concurrentes, dont deux
          sont des confusions classiques (aire algébrique vs géométrique).
          « raisonner ».
     Q5 — $i(t) = 4t$ sur $[0\,;\,3]$, calculer la charge $Q = \int_0^3 i\,dt$.
          La formule $Q = \int i\,dt$ est DONNÉE dans l'énoncé, et le calcul
          est celui des douze exercices. Il n'y a rien à traduire : le modèle
          est fourni. « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 4, raisonner 1. « chercher »,
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés.

     Le cas de « représenter » mérite un mot, comme au chapitre 5 : l'intégrale
     est DÉFINIE comme une aire (D2), le cours en parle en termes de courbe et
     d'axe, la valeur moyenne se lit comme la hauteur d'un rectangle — et
     aucune des cinq questions ne demande de lire ni de produire un graphique.
     La Q4, qui porte précisément sur le signe d'une aire, est posée en pur
     énoncé verbal alors qu'un schéma trancherait en une seconde. C'est un
     constat sur les cinq questions, pas un choix d'étiquetage : le corpus
     entier est composé de questions `numeric` et à choix multiple, format qui
     exclut de fait le graphique. Un enseignant qui veut évaluer
     « représenter » devra ajouter sa propre question — une courbe à hachurer
     suffit. */
  competences: {
    evaluation: ["calculer", "calculer", "calculer", "raisonner", "calculer"]
  }
};
