/* =========================================================
   Spark Learning – js/data/prof/bts/statistiques.prof.js
   Fiche professeur du chapitre « Statistiques et Calculs d'Incertitudes »
   (programme BTS), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU NOM DU FICHIER. L'`id` du module est `statistiques`, SANS le
   préfixe `bts-` que portent la plupart des autres chapitres du dossier.
   `chargerProf()` construit le chemin de la fiche à partir de l'`id`, pas du
   nom du fichier de données : un fichier nommé `bts-statistiques.prof.js` ne
   serait JAMAIS trouvé, et l'ouvrage compilerait « 12 fiches sur 13 » sans
   le moindre message d'erreur. Deux autres chapitres du dossier sont dans ce
   cas : `complexes` et `eq-diff-2`.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 16 (ce chapitre est le dix-septième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés seulement, dont 12 numérotés et 6 en banque
   supplémentaire — c'est le format le plus pauvre du dossier, partagé avec
   six autres chapitres.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et c'est le plus élémentaire du
   chapitre. Chacun donne quatre entiers entre 5 et 15 et demande leur
   MOYENNE. Seuls le contexte (enceinte climatique, tôle au pied à coulisse,
   pesée de connecteurs, résistance au multimètre, alimentation stabilisée,
   circuit hydraulique) et les quatre valeurs changent.

   Autrement dit : le chapitre s'appelle « Statistiques et Calculs
   d'Incertitudes », et AUCUN de ses douze exercices ne calcule
   d'incertitude. L'écart-type $s$ (D2), l'incertitude type A $u_A$ (D3), la
   correction de Bessel (D4), le facteur d'élargissement $k$ et l'écriture
   $\bar{x} \pm k u_A$ ne sont jamais travaillés — alors que ce sont quatre
   des cinq questions du devoir noté. C'est l'écart le plus large entre
   exercices et évaluation de tout le dossier `bts`, et la `note` le dit sans
   détour.

   Trois des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["statistiques"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli. Ce
     chapitre est le premier du bloc statistique et n'a besoin de rien de ce
     qui le précède : la moyenne, l'écart-type et la division par $\sqrt{n}$
     ne demandent ni complexes (ch. 1) ni équations différentielles (ch. 2),
     qui sont les deux seuls chapitres de rang inférieur.

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Complexes) et ch. 2 (Équations différentielles) : aucun lien.
       Ce sont les deux seuls chapitres que le rang conseillé autoriserait, et
       ni l'un ni l'autre n'intervient dans une moyenne ou un écart-type.
     - ch. 4 (Loi normale) : le lien est fort et constant — l'intervalle de
       confiance à $95\,\%$ de ce chapitre-ci REPOSE sur les quantiles de la
       loi normale, et le facteur $k = 2$ n'est rien d'autre que le $1{,}96$
       arrondi de la loi de Gauss — mais il joue dans l'AUTRE sens dans la
       progression retenue. Le déclarer ici créerait un cycle que
       `validerPrerequis` refuse, à juste titre : c'est la fiche de la loi
       normale (ch. 4) qui porte le prérequis vers ce chapitre-ci.
       L'enseignant qui préférerait l'ordre inverse (Gauss d'abord, métrologie
       ensuite) peut le faire, et la `note` le signale.
     - ch. 8 (Statistiques à deux variables) : même raisonnement inversé.
       C'est lui qui s'appuie sur les moyennes et variances définies ici.
     - ch. 5 à ch. 13 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la racine carrée, les
     puissances et surtout le calcul d'une MOYENNE viennent de la REMISE À
     NIVEAU (`bts-prep`), qui est dans un AUTRE dossier. `prerequis` ne vise
     qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 3 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 17 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 3 est celui du livre, et les deux ordres coïncident.

     Le placement ouvre le bloc statistique : statistiques (3), loi normale
     (4), puis plus loin statistiques à deux variables (8) et probabilités
     discrètes (9). Il doit précéder les deux premiers, qui réutilisent
     immédiatement la moyenne, l'écart-type et la division par $\sqrt{n}$ sans
     les redéfinir. Le déplacer plus tard obligerait à déplacer aussi le
     chapitre 4, sans gain. */
  rangConseille: 3,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et le calcul d'incertitude selon le GUM relève
     typiquement des groupements industriels et des BTS de laboratoire, mais
     la statistique descriptive elle-même est partout.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« indicateurs de position et de dispersion », « incertitude type A »,
     « expression d'un résultat de mesure ») et n'inventent aucune
     spécialité. La `note` le signale explicitement, pour qu'un enseignant
     vérifie le référentiel de SA filière avant de les citer. */
  attendus: [
    "Calculer la moyenne et l'écart-type expérimental d'une série de mesures",
    "Évaluer une incertitude type A à partir d'un échantillon de mesures répétées",
    "Exprimer un résultat de mesure avec son incertitude élargie et le niveau de confiance associé"
  ],

  note: "La statistique descriptive appliquée à la mesure — moyenne, écart-type expérimental, " +
        "incertitude type A, incertitude élargie — relève du tronc commun de mathématiques du " +
        "BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Ce chapitre ouvre le " +
        "bloc statistique et ne s'appuie sur aucun chapitre qui le précède : la colonne " +
        "« S'appuie sur » y portera un tiret, ce qui est exact pour cette partie-là. Il suppose en " +
        "revanche de savoir calculer une <strong>moyenne</strong>, manier une <strong>racine " +
        "carrée</strong> et une <strong>puissance</strong>, qui sont dans la <strong>remise à " +
        "niveau</strong>, l'autre partie de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre " +
        "de la même partie, <strong>rien ne le montrera</strong>.<br/><br/>" +
        "<strong>Un mot sur l'ordre avec la loi normale (chapitre 4).</strong> Les deux chapitres " +
        "se tiennent : le facteur $k = 2$ de l'incertitude élargie n'est rien d'autre que le " +
        "$1{,}96$ de Gauss arrondi. La progression conseillée met la métrologie d'abord et la loi " +
        "normale ensuite, parce qu'on mesure avant de modéliser. <strong>L'ordre inverse se " +
        "défend</strong> tout aussi bien ; si vous le choisissez, annoncez simplement le $k = 2$ " +
        "comme une convention provisoire, à justifier au chapitre suivant.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "elle est sévère.</strong> Le chapitre s'intitule « Statistiques et Calculs " +
        "d'Incertitudes », et <strong>aucun de ses douze exercices ne calcule d'incertitude</strong>. " +
        "Les douze énoncés numérotés sont tous le même : quatre entiers sont donnés, on demande " +
        "leur <strong>moyenne</strong>. Ni écart-type, ni $u_A = s/\\sqrt{n}$, ni correction de " +
        "Bessel, ni écriture $\\bar{x} \\pm k \\cdot u_A$ — alors que ce sont les définitions D2, " +
        "D3 et D4 du cours et <strong>quatre des cinq questions du devoir noté</strong>. C'est " +
        "l'écart le plus large de toute cette partie de l'ouvrage entre ce que les exercices " +
        "entraînent et ce que l'évaluation demande. L'exemple résolu du cours (les cinq mesures de " +
        "la pièce usinée) fait, lui, le chemin complet, de la moyenne au résultat " +
        "$50{,}02 \\pm 0{,}07$ mm : <strong>c'est lui qu'il faut prendre comme modèle de la tâche " +
        "attendue</strong>, et non les exercices. Prévoir impérativement trois ou quatre énoncés " +
        "allant jusqu'à $u_A$, que le manuel ne fournit pas — sans quoi les étudiants découvriront " +
        "l'objet du chapitre le jour du devoir.",

  erreurs: [
    {
      titre: "Diviser par $n$ au lieu de $(n-1)$ pour l'écart-type",
      eleve: "Sur cinq mesures, l'élève calcule la somme des carrés des écarts, obtient $0{,}025$, " +
             "puis divise par $5$ au lieu de $4$ : il annonce $s = \\sqrt{0{,}005} \\approx 0{,}071$ " +
             "mm au lieu de $0{,}079$ mm. Le résultat est systématiquement trop petit, donc " +
             "l'incertitude annoncée est systématiquement trop optimiste.",
      cause: "Diviser par le nombre de termes, c'est la définition même d'une moyenne, et l'étudiant " +
             "vient précisément de le faire pour calculer $\\bar{x}$ deux lignes plus haut. Il " +
             "applique donc, avec cohérence, le geste qu'on lui a demandé juste avant. S'y ajoute " +
             "que <strong>la calculatrice lui donne raison une fois sur deux</strong> : toutes les " +
             "machines proposent deux touches, $\\sigma_n$ et $\\sigma_{n-1}$, et rien sur l'écran " +
             "ne dit laquelle correspond à un échantillon. Enfin, le mot « correction de Bessel » " +
             "n'aide pas : il nomme la règle sans l'expliquer, et une règle sans raison ne résiste " +
             "pas trois semaines.",
      remede: "Donner la <strong>raison</strong> plutôt que la règle, en une phrase concrète : la " +
              "moyenne $\\bar{x}$ a été calculée <strong>sur les mêmes mesures</strong>. Elle est " +
              "donc déjà « collée » à elles, et les écarts à cette moyenne-là sont " +
              "<strong>artificiellement petits</strong>. Diviser par $(n-1)$ au lieu de $n$ " +
              "compense exactement ce biais. Dit ainsi, l'étudiant comprend qu'il ne s'agit pas " +
              "d'une convention mais d'une correction.<br/><br/>" +
              "Faire une <strong>expérience de pensée en trente secondes</strong>, qui emporte " +
              "l'adhésion mieux qu'une démonstration : avec UNE seule mesure ($n = 1$), quelle est " +
              "la dispersion ? On l'ignore totalement — une mesure ne dit rien de la dispersion. " +
              "Avec la division par $n$, on obtiendrait $s = 0$, c'est-à-dire « mesure parfaite » ; " +
              "avec $(n-1)$, on obtient $0/0$, c'est-à-dire « indéterminé », qui est la bonne " +
              "réponse. La formule refuse de répondre là où il n'y a rien à " +
              "dire.<br/><br/>" +
              "Faire enfin <strong>identifier les deux touches de la calculatrice</strong> en " +
              "séance, machine en main, sur les données de l'exemple du cours : celle qui rend " +
              "$0{,}079$ est la bonne, l'autre non. Cinq minutes passées là évitent des mois " +
              "d'erreur silencieuse — et en métrologie, une incertitude sous-évaluée fait " +
              "<strong>déclarer conforme une pièce qui ne l'est pas</strong>, ce qui est le seul " +
              "type de non-conformité que le client découvre à votre place.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés demandent TOUS une moyenne de quatre entiers, et
         rien d'autre. Le mot « écart-type » n'apparaît dans aucun des douze
         énoncés, la lettre s non plus, et aucun ne comporte de division par
         n-1. L'élève ne peut donc pas rencontrer cette erreur en faisant les
         exercices : elle ne surgit qu'au devoir (question 2) et en atelier.
         Pointer l'un des douze enverrait l'enseignant vers une remédiation
         qui n'en est pas une. Le seul support du livre est l'exemple résolu
         du cours (cinq mesures de 50,12 à 49,94 mm), qui divise bien par 4 et
         non par 5 : c'est vers lui que le remède ramène. Le piège du cours,
         imprimé, dit la même chose en deux lignes. */
      exercice: null
    },
    {
      titre: "Confondre l'écart-type $s$ et l'incertitude sur la moyenne $u_A$",
      eleve: "L'élève a trouvé $s = 0{,}8$ V sur $16$ mesures et annonce « l'incertitude est de " +
             "$0{,}8$ V ». Il donne la dispersion des mesures individuelles là où la question porte " +
             "sur l'incertitude de la MOYENNE, qui vaut $u_A = 0{,}8/\\sqrt{16} = 0{,}2$ V — quatre " +
             "fois moins.",
      cause: "Les deux grandeurs se mesurent dans la même unité, décrivent toutes deux « à combien " +
             "près on connaît la chose », et $s$ a l'avantage d'être le résultat du calcul " +
             "précédent. L'étudiant prend donc celle qu'il a sous la main, ce qui est rationnel. " +
             "Mais il y a plus profond : l'idée qu'<strong>en répétant une mesure on la connaît " +
             "mieux</strong> n'est pas spontanée. Beaucoup d'adultes en reprise d'études ont " +
             "l'intuition inverse — « plus je mesure, plus je vois que ça bouge, donc plus c'est " +
             "incertain ». Cette intuition n'est pas absurde : elle confond justement la " +
             "<strong>dispersion des mesures</strong> (qui, elle, ne diminue pas) et " +
             "l'<strong>incertitude sur leur moyenne</strong> (qui diminue en $1/\\sqrt{n}$). C'est " +
             "exactement la distinction à construire.",
      remede: "Séparer les deux questions en les faisant <strong>formuler en français</strong> " +
              "avant toute écriture : « à combien près une mesure isolée tombe-t-elle ? » " +
              "($s$, la dispersion, qui ne change pas si l'on mesure plus souvent) et « à combien " +
              "près est-ce que je connais la valeur vraie ? » ($u_A$, qui diminue avec $n$). Deux " +
              "questions différentes, donc deux nombres différents.<br/><br/>" +
              "Montrer la <strong>loi en $1/\\sqrt{n}$ et son prix</strong>, qui frappe toujours : " +
              "pour diviser l'incertitude par $2$, il ne faut pas deux fois plus de mesures mais " +
              "<strong>quatre fois plus</strong>. Pour la diviser par $10$, cent fois plus. C'est " +
              "un rendement décroissant, et c'est ce qui explique qu'on ne mesure pas mille fois " +
              "en atelier : le gain ne paie plus le temps machine.<br/><br/>" +
              "Relier enfin à la <strong>décision métier</strong>, qui rend la confusion coûteuse : " +
              "un contrôle de réception se prononce sur la MOYENNE d'un échantillon, pas sur une " +
              "pièce isolée. Annoncer $0{,}8$ V au lieu de $0{,}2$ V, c'est élargir l'intervalle " +
              "d'un facteur quatre et <strong>refuser un lot parfaitement conforme</strong> — une " +
              "erreur qui se chiffre en euros et en relation client, pas en points.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices s'arrêtent à la moyenne. Aucun ne calcule s, aucun ne
         calcule u_A, et le nombre de mesures est TOUJOURS n = 4 dans les
         douze énoncés — donc même la dépendance en n, qui est le cœur de
         cette erreur, ne peut pas apparaître. C'est le constat le plus net du
         tirage : n étant constant, la loi en 1/sqrt(n) est rigoureusement
         inobservable dans les exercices du chapitre. Pointer l'un d'eux
         serait un contresens. Les questions 1 et 5 de l'évaluation la
         travaillent bien, mais une remédiation ne renvoie jamais vers le
         devoir noté. Le remède ramène donc à l'exemple résolu du cours
         (s = 0,079 mm puis u_A = 0,035 mm : les deux nombres y sont côte à
         côte) et demande à l'enseignant de fabriquer le support. */
      exercice: null
    },
    {
      titre: "Se tromper en calculant la moyenne elle-même : mauvais diviseur, ou somme fausse",
      eleve: "Sur $\\{11;\\ 12;\\ 10;\\ 8\\}$, l'élève additionne correctement ($41$) puis divise " +
             "par $5$ au lieu de $4$, ou oublie une valeur dans la somme et rend $10{,}33$. Ou " +
             "encore il obtient $10{,}25$ et l'écrit $10.25$, avec un point.",
      cause: "La moyenne est le calcul que l'étudiant croit le mieux maîtriser, et c'est justement " +
             "pour cela qu'il ne le vérifie pas : il l'exécute de tête, vite, en fin d'exercice. " +
             "L'erreur de diviseur vient souvent d'un report — on vient de travailler sur cinq " +
             "mesures dans le cours, on en a quatre dans l'exercice. L'oubli d'un terme vient de " +
             "l'accolade : $\\{11;\\ 12;\\ 10;\\ 8\\}$ se lit d'un coup d'œil et on ne compte pas " +
             "toujours ce qu'on a lu d'un coup d'œil. Quant au point décimal, ce n'est pas une " +
             "étourderie mais un réflexe de calculatrice et de tableur, qui affichent tous deux le " +
             "point : l'étudiant recopie ce qu'il voit.",
      remede: "Imposer d'<strong>écrire le quotient avant de le calculer</strong> : " +
              "$\\bar{x} = \\dfrac{11 + 12 + 10 + 8}{4}$, puis seulement la valeur. Le diviseur est " +
              "alors posé en même temps qu'on compte les termes du numérateur, et les deux ne " +
              "peuvent plus diverger. C'est trente secondes qui suppriment les deux premières " +
              "variantes de l'erreur.<br/><br/>" +
              "Installer un <strong>contrôle d'encadrement</strong>, qui coûte trois secondes et " +
              "attrape toutes les sommes fausses : la moyenne est toujours comprise entre la plus " +
              "petite et la plus grande valeur. Sur $\\{11;\\ 12;\\ 10;\\ 8\\}$, elle est entre $8$ " +
              "et $12$ — $10{,}25$ passe, $12{,}8$ non. Et si toutes les valeurs sont proches, la " +
              "moyenne doit l'être aussi.<br/><br/>" +
              "Rappeler enfin la <strong>convention d'écriture</strong>, qui n'est pas une " +
              "coquetterie sur une copie d'examen français : la virgule décimale, " +
              "$10{,}25$ et non $10.25$. La calculatrice et le tableur affichent un point, c'est " +
              "leur convention anglo-saxonne ; la copie et le rapport de contrôle s'écrivent avec " +
              "une virgule. Le dire une fois, en montrant l'écran de la machine à côté du cahier, " +
              "suffit généralement.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 16) : l'exercice 1 est l'enceinte climatique,
         mesures {11 ; 12 ; 10 ; 8} en °C, somme 41, moyenne 10,25 °C. C'est
         le meilleur support de cette erreur, et les valeurs le justifient
         précisément :
           - la somme 41 n'est PAS divisible par 4, donc la réponse est
             décimale (10,25) : la question de l'écriture avec virgule se pose
             donc réellement, ce qui ne serait pas le cas sur l'exercice 4
             (moyenne 8) ou l'exercice 7 (moyenne 12), tous deux entiers ;
           - une division erronée par 5 donne 8,2, qui reste DANS l'intervalle
             [8 ; 12] des données : le contrôle d'encadrement du remède ne
             l'attrape pas, ce qui est pédagogiquement précieux — il montre
             que l'encadrement est nécessaire mais pas suffisant, et justifie
             d'écrire le quotient avant de le calculer ;
           - c'est le premier énoncé du chapitre, donc celui sur lequel
             l'enseignant peut imposer la disposition dès le départ.
         Les autres candidats à moyenne décimale sont les exercices 2 (8,25),
         3 (9,75), 5 (11,5), 8 (10,75), 10 (9,75), 11 (10,5) et 12 (9,75) ;
         aucun n'ajoute d'avantage sur le 1, qui est en outre le premier. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Rendre une moyenne nue, sans unité ni incertitude",
      eleve: "L'élève écrit « $\\bar{x} = 10{,}25$ » et s'arrête là. Interrogé, il ne précise ni " +
             "les degrés Celsius, ni combien de chiffres sont significatifs, ni à combien près la " +
             "valeur est connue. Sur le devoir, il écrit $R = 47{,}0$ Ω sans l'intervalle, alors " +
             "que la question demande explicitement la demi-largeur.",
      cause: "L'énoncé demande « calcule la moyenne » et l'élève calcule la moyenne : il répond " +
             "exactement à ce qu'on lui demande, et l'habitude scolaire veut que la réponse soit le " +
             "résultat du calcul. Ce n'est pas une négligence, c'est un <strong>contrat " +
             "implicite</strong>. Mais il y a une seconde raison, plus spécifique au public : pour " +
             "quelqu'un qui n'a pas encore travaillé en métrologie, un résultat de mesure EST un " +
             "nombre — l'idée qu'un nombre seul soit <strong>inexploitable</strong> est " +
             "contre-intuitive, et elle ne s'installe qu'en voyant à quoi sert l'incertitude.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur, son <strong>unité</strong>, et l'incertitude avec son " +
              "niveau de confiance. « La température moyenne est de $10{,}25$ °C » plutôt que " +
              "« $10{,}25$ », et dès que l'incertitude est calculable, " +
              "« $L = 50{,}02 \\pm 0{,}07$ mm à $95\\,\\%$ ». C'est ce que l'épreuve attend, et " +
              "c'est la forme exacte d'un procès-verbal de contrôle.<br/><br/>" +
              "Faire sentir pourquoi le nombre nu ne sert à rien, par un <strong>cas de décision " +
              "réelle</strong> : une pièce doit mesurer $50 \\pm 0{,}1$ mm ; vous mesurez " +
              "$50{,}02$ mm. Conforme ? Impossible à dire. Avec $\\pm 0{,}07$, l'intervalle " +
              "$[49{,}95 ; 50{,}09]$ tient dans la tolérance : conforme. Avec $\\pm 0{,}5$, il en " +
              "sort : <strong>on ne peut pas conclure</strong>, et il faut mesurer mieux. Le même " +
              "$50{,}02$ conduit donc à trois décisions différentes selon l'incertitude — c'est " +
              "elle qui décide, pas la moyenne.<br/><br/>" +
              "Surveiller enfin les <strong>chiffres significatifs</strong>, qui trahissent la même " +
              "confusion : une moyenne de quatre entiers ne peut pas être annoncée avec six " +
              "décimales sous prétexte que la calculatrice les affiche. Une règle simple et " +
              "suffisante en BTS : l'incertitude s'écrit avec <strong>un ou deux chiffres " +
              "significatifs</strong>, et la moyenne s'arrondit au même rang.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 est le test
         d'une alimentation stabilisée, tensions {5 ; 11 ; 15 ; 15} en V,
         moyenne 11,5 V. Le renvoi est utilisable pour cette erreur alors même
         que tous les exercices partagent le même moule, et c'est assumé :
         l'erreur ne porte pas sur le RÉSULTAT (11,5 sera juste) mais sur la
         RÉDACTION, et l'enseignant peut exiger l'unité et la conclusion sur
         cet énoncé précis.
         Choix du 5 plutôt que du 1 (déjà pris par l'erreur 3, et deux erreurs
         d'un même chapitre ne pointent jamais le même énoncé) et plutôt que
         des autres, pour une raison de contenu : ses quatre valeurs
         {5 ; 11 ; 15 ; 15} sont les plus DISPERSÉES du tirage — de 5 à 15,
         soit un rapport de 3. Annoncer « 11,5 V » sur des mesures aussi
         éparpillées est visiblement insuffisant, et la question « à combien
         près ? » se pose d'elle-même, sans que l'enseignant ait à la forcer.
         Sur l'exercice 7 ({14 ; 10 ; 10 ; 14}, moyenne 12) la dispersion est
         faible et l'argument porte moins. L'exercice a en outre l'avantage
         d'une unité familière (le volt) et d'un contexte — une alimentation
         stabilisée — dont le nom même promet la stabilité que les mesures
         démentent. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $n = 16$, $s = 0{,}8$ V, calculer $u_A = s/\sqrt{n}$. La formule est
          donnée dans l'énoncé, les valeurs aussi : exécution d'une procédure
          connue sur des nombres donnés. « calculer ».
     Q2 — « on divise par $(n-1)$ car : », avec « cela simplifie les calculs »,
          « convention arbitraire » et « diviser par $n$ donnerait une valeur
          trop grande » en distracteurs. Aucun calcul : il faut juger la
          validité de quatre justifications concurrentes, dont la dernière est
          fausse d'un signe (diviser par $n$ sous-estime, pas surestime).
          C'est un jugement de validité : « raisonner ».
     Q3 — cinq masses données, calculer la moyenne. C'est la tâche des douze
          exercices, sur cinq valeurs au lieu de quatre : « calculer ».
     Q4 — RÉÉCRITE le 2026-09-17. Elle demandait à quel niveau de confiance
          correspond $k = 2$, parmi quatre pourcentages : une correspondance
          apprise par cœur, qu'aucun calcul ne permettait d'établir — et que
          la Q5 du même devoir donnait DÉJÀ en clair dans son énoncé (« à
          $95\,\%$, $k = 2$ »). La question livrait sa réponse deux lignes
          plus bas : c'était la plus redondante du devoir.
          Elle demande maintenant de LIRE un tableau de facteurs
          d'élargissement — celui que porte tout rapport d'étalonnage — et
          d'y entrer par la bonne colonne : un capteur donné avec $u = 0{,}3$
          bar et $U = 0{,}9$ bar a été élargi à quel niveau ? Lire une donnée
          dans une représentation tabulée et l'interpréter, c'est
          « représenter ».
          Le calcul reste nécessaire, là où il était impossible : il faut
          former $k = U/u = 0{,}9/0{,}3 = 3$ pour savoir quelle ligne lire,
          sans quoi les quatre colonnes se valent.
          La question porte désormais sur l'erreur 4 de cette fiche — rendre
          une moyenne nue, sans unité ni incertitude — par son revers : elle
          oblige à distinguer une incertitude EN UNITÉS PHYSIQUES ($0{,}9$
          bar) d'un niveau de confiance en pourcentage, confusion que le
          deuxième distracteur met en scène.
     Q5 — RÉÉCRITE le 2026-09-17. Elle demandait $u_A = s/\sqrt{n}$ puis
          $k \times u_A$, avec $k = 2$ fourni — or la Q1 du même devoir fait
          déjà exactement $u_A = s/\sqrt{n}$. La question ne rajoutait qu'une
          multiplication par $2$ : troisième exécution du même geste dans un
          devoir qui en comptait déjà quatre.
          Elle demande maintenant de juger le raisonnement de Maxime, qui
          rend $R = 47{,}0 \pm 2{,}0$ Ω en élargissant l'ÉCART-TYPE au lieu de
          l'incertitude sur la moyenne, et d'EXPLIQUER que la dispersion des
          mesures ne diminue pas quand on mesure davantage, alors que
          l'incertitude sur la moyenne, elle, diminue en $\sqrt{n}$ :
          produire une explication, donc « communiquer ».
          Le calcul reste nécessaire et il est complet : $u_A = 1{,}0/5
          = 0{,}2$ Ω puis $2 \times 0{,}2 = 0{,}4$ Ω, pour constater que le
          $\pm 2{,}0$ Ω annoncé est cinq fois trop large ; et il faut mener
          $1{,}0/25 = 0{,}04$ pour écarter le distracteur qui divise par $n$.
          La question porte désormais sur l'erreur 2 de cette fiche —
          confondre l'écart-type $s$ et l'incertitude sur la moyenne $u_A$ —
          qui est l'erreur conceptuelle centrale du chapitre et l'une des
          deux qu'AUCUN exercice du tirage ne travaille (`exercice: null`).

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 1, représenter 1,
     communiquer 1. « chercher » et « modéliser » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste ni de mettre une situation
     en équation. C'est un constat sur les cinq énoncés, pas un choix.

     Ce devoir était, avant le 2026-09-17, le plus déséquilibré du recueil :
     quatre « calculer » sur cinq questions, toutes formules fournies. Il
     n'évaluait à aucun moment la capacité à décider QUELLE incertitude
     calculer ni à l'interpréter — le geste professionnel du chapitre. Les
     réécritures des Q4 et Q5 portent précisément là : la Q5 oppose
     dispersion et incertitude sur la moyenne, la Q4 fait entrer dans un
     tableau d'élargissement par le bon bout. Les deux visent des erreurs que
     le tirage d'exercices ne travaille pas. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "représenter", "communiquer"]
  }
};
