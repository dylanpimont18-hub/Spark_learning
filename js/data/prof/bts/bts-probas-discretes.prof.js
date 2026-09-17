/* =========================================================
   Spark Learning – js/data/prof/bts/bts-probas-discretes.prof.js
   Fiche professeur du chapitre « Lois de probabilité discrètes » (programme
   BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 22 (ce chapitre est le vingt-troisième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et ce moule est réduit au cas le plus
   particulier du chapitre. Chacun donne un $\lambda$ entier ($2$, $3$, $4$
   ou $5$) et demande $P(X = 0)$ pour une loi de Poisson — c'est-à-dire
   simplement $e^{-\lambda}$, puisque $\lambda^0/0! = 1$. Seuls le contexte
   (arrivées de clients, appels, requêtes serveur, pannes machine, défauts de
   tôle, sinistres) et la valeur de $\lambda$ changent, et quatre valeurs
   seulement circulent.

   Ce que cela implique et qu'il faut avoir en tête avant d'écrire la moindre
   remédiation : la formule de Poisson $P(X=k) = \dfrac{\lambda^k}{k!}e^{-\lambda}$
   n'est JAMAIS mise en jeu dans sa généralité. Avec $k = 0$ partout, ni la
   puissance $\lambda^k$ ni la factorielle $k!$ n'apparaissent : l'étudiant
   tape $e^{-\lambda}$ à la calculatrice, douze fois.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le chapitre en
   fait son titre : la LOI BINOMIALE (D1) — qui est la première des deux lois
   annoncées et n'apparaît dans aucun exercice —, le COEFFICIENT BINOMIAL
   (D3), l'APPROXIMATION de la binomiale par Poisson (D4), $E(X) = V(X) =
   \lambda$ (D2), et $P(X \geq 1) = 1 - P(X = 0)$ (récapitulatif). Or quatre
   des cinq questions de l'évaluation portent là-dessus.

   Trois des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent. C'est, avec
   `statistiques`, l'une des deux fiches les plus contraintes du dossier.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-probas-discretes"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli — mais
     c'est aussi le choix le plus discutable de la fiche, et il faut donc
     l'exposer complètement.

     Candidats examinés et ÉCARTÉS :
     - ch. 3 (Statistiques et Calculs d'Incertitudes) : c'est le candidat
       sérieux, et il a été écarté après examen. L'ESPÉRANCE $E(X)$ et la
       VARIANCE $V(X)$ de ce chapitre-ci portent les mêmes noms que la moyenne
       et la variance du chapitre 3, ce qui suggère la dépendance. Mais ce
       sont deux notions DIFFÉRENTES : celles du chapitre 3 sont des
       indicateurs calculés sur des données OBSERVÉES ($\bar{x}$ sur $n$
       mesures), celles-ci sont des paramètres d'une loi THÉORIQUE, définis
       avant toute observation. Le chapitre 9 ne reprend aucune formule du
       chapitre 3 : $E(X) = np$ et $E(X) = \lambda$ n'ont rien à voir avec
       $\bar{x} = \frac{1}{n}\sum x_i$. Déclarer le prérequis afficherait un
       appui qui n'existe pas — et il en existe un vrai, développé plus bas.
     - ch. 4 (Loi normale) : le lien est réel et va dans les DEUX sens, ce qui
       oblige à trancher. La loi normale approche la binomiale quand $n$ est
       grand et $p$ pas trop petit, et le théorème central limite cité au
       chapitre 4 parle de sommes de variables discrètes. Mais aucune de ces
       deux directions n'est UTILISÉE : le chapitre 9 ne fait aucune
       approximation normale (il ne fait que l'approximation de Poisson), et
       le chapitre 4 ne calcule aucune probabilité discrète. Un prérequis
       affiché mais non utilisé trompe le lecteur du tableau autant qu'un
       prérequis manquant.
     - ch. 8 (Statistiques à deux variables) : aucun lien.
     - ch. 1, 2, 5, 6, 7 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, et ils sont ici DÉCISIFS — c'est la raison
     pour laquelle `prerequis` reste vide sans que le chapitre soit pour
     autant sans appui. L'EXPONENTIELLE ($e^{-\lambda}$ est la seule chose que
     calculent les douze exercices), les PUISSANCES ($\lambda^k$, $0{,}95^{20}$),
     et le calcul sur les DÉCIMAUX viennent tous de la REMISE À NIVEAU
     (`bts-prep`), qui est dans un AUTRE dossier. Autrement dit : le seul
     vrai prérequis de ce chapitre est dans l'autre partie de l'ouvrage, et
     `prerequis` ne vise qu'un chapitre du même dossier — donc rien ne
     l'affichera. La `note` le dit explicitement, parce que la colonne
     « S'appuie sur » portera un tiret qu'il ne faut pas lire comme « ce
     chapitre ne demande rien ». */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 9 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 23 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 9 est celui du livre, et les deux ordres coïncident.

     Le placement ferme le bloc statistique et probabiliste : statistiques
     (3), loi normale (4), statistiques à deux variables (8), probabilités
     discrètes (9). Aucune contrainte stricte ne le fixe — ce chapitre ne
     déclare aucun prérequis et ne prépare aucun chapitre du dossier, ce que
     les deux colonnes du tableau de progression montreront par des tirets.
     Il est donc, avec les matrices (ch. 11), l'un des chapitres les plus
     libres de placement.
     Deux raisons de le laisser ici plutôt qu'ailleurs. D'abord, le voisinage
     de la loi normale (ch. 4) : l'approximation de la binomiale par Poisson,
     qui est la D4 de ce chapitre, se comprend mieux quand l'idée
     d'approximation d'une loi par une autre a déjà été rencontrée. Ensuite,
     l'exponentielle y est utilisée de façon intensive et sans détour ; la
     placer après les chapitres d'analyse (5 à 7), où elle a resservi, évite
     d'y revenir à froid. */
  rangConseille: 9,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et les lois discrètes sont présentes dans la plupart
     d'entre eux — mais la loi de Poisson, en particulier, est nettement plus
     exigée dans les groupements industriels et qualité que dans les autres.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« reconnaître une loi », « calculer une probabilité », « espérance et
     variance ») et n'inventent aucune spécialité. La `note` le signale
     explicitement, pour qu'un enseignant vérifie le référentiel de SA filière
     avant de les citer. */
  attendus: [
    "Reconnaître une situation relevant d'une loi binomiale ou d'une loi de Poisson et en identifier les paramètres",
    "Calculer une probabilité à l'aide de la loi choisie, y compris par événement contraire",
    "Déterminer l'espérance et la variance d'une loi discrète et les interpréter dans le contexte étudié"
  ],

  note: "Les lois de probabilité discrètes — loi binomiale, loi de Poisson, espérance et variance — " +
        "relèvent du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. La <strong>loi de Poisson</strong> est ici le point de divergence : nettement " +
        "plus exigée dans les groupements industriels et qualité que dans les autres, où la " +
        "binomiale suffit parfois. Vérifiez avant de bâtir votre progression.<br/><br/>" +
        "<strong>Le prérequis le plus important de ce chapitre ne sera pas affiché, et il est " +
        "décisif.</strong> La colonne « S'appuie sur » portera un tiret : c'est exact pour cette " +
        "partie-là, aucun chapitre BTS ne précédant celui-ci. Mais tout le chapitre repose sur " +
        "l'<strong>exponentielle</strong> — $e^{-\\lambda}$ est littéralement la seule chose que " +
        "calculent les douze exercices — et sur les <strong>puissances</strong> ($\\lambda^k$, " +
        "$0{,}95^{20}$). Ces deux notions sont dans la <strong>remise à niveau</strong>, l'autre " +
        "partie de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même partie, " +
        "<strong>rien ne le montrera</strong> : si un étudiant ne sait pas où est la touche $e^x$ " +
        "de sa calculatrice, ce chapitre lui est entièrement fermé, et c'est là qu'il faut " +
        "revenir.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "c'est la plus sévère de toute cette partie.</strong> Le chapitre s'intitule « Lois de " +
        "probabilité discrètes » et son sous-titre annonce « Loi binomiale et loi de Poisson ». " +
        "Or <strong>aucun des douze exercices ne fait de loi binomiale</strong>, et les douze font " +
        "la même chose : $P(X = 0)$ pour une loi de Poisson, c'est-à-dire $e^{-\\lambda}$. Avec " +
        "$k = 0$ partout, ni la puissance $\\lambda^k$ ni la factorielle $k!$ n'apparaissent " +
        "jamais : la formule générale de Poisson <strong>n'est pas mise en jeu une seule " +
        "fois</strong>. Ne sont travaillés nulle part non plus : le <strong>coefficient " +
        "binomial</strong>, l'<strong>approximation</strong> de la binomiale par Poisson, la " +
        "propriété $E(X) = V(X) = \\lambda$, et $P(X \\geq 1) = 1 - P(X = 0)$.<br/><br/>" +
        "Or <strong>quatre des cinq questions du devoir noté</strong> portent précisément " +
        "là-dessus. L'exemple résolu du cours (les $200$ soudures d'un circuit imprimé) fait, lui, " +
        "le chemin complet : reconnaissance de la binomiale, vérification du critère " +
        "d'approximation, passage à Poisson, calcul avec $k = 3$. <strong>C'est lui qu'il faut " +
        "prendre comme modèle de la tâche attendue</strong>, et non les exercices. Prévoir " +
        "impérativement trois ou quatre énoncés binomiaux et deux calculs à $k \\neq 0$, que le " +
        "manuel ne fournit pas — sans quoi les étudiants n'auront rencontré, de tout le chapitre, " +
        "qu'une touche de calculatrice.",

  erreurs: [
    {
      titre: "Choisir la mauvaise loi : binomiale là où il faut Poisson, ou l'inverse",
      eleve: "Devant « une machine tombe en panne $4$ fois par semaine en moyenne », l'élève " +
             "cherche $n$ et $p$ pour appliquer la binomiale, et reste bloqué — il n'y a ni $n$ ni " +
             "$p$ dans l'énoncé. Inversement, devant « on prélève $20$ pièces dans un lot à " +
             "$5\\,\\%$ de défauts », il applique Poisson avec $\\lambda = 20$.",
      cause: "Les deux lois comptent des choses qui arrivent, produisent des probabilités, et " +
             "s'écrivent avec la même lettre $X$ : rien dans le résultat ne les distingue. La " +
             "différence est en amont, dans la <strong>structure de la situation</strong>, et c'est " +
             "précisément ce que l'étudiant n'a pas appris à lire — il a appris deux formules. S'y " +
             "ajoute un fait aggravant, propre à ce chapitre : les douze exercices ne posent " +
             "<strong>jamais</strong> la question du choix, puisqu'ils annoncent tous « loi de " +
             "Poisson » dans l'énoncé. L'étudiant n'a donc aucune occasion de s'entraîner à " +
             "décider, ce qui n'est pas une négligence de sa part mais une lacune du support.",
      remede: "Faire du <strong>repérage des données une étape écrite</strong>, avant tout calcul, " +
              "avec une question unique : <strong>ai-je un nombre d'essais ?</strong> Si l'énoncé " +
              "dit « on prélève $20$ pièces », il y a un $n$ : c'est la binomiale. S'il dit " +
              "« $4$ pannes par semaine », il n'y a pas de nombre d'essais — on ne compte pas les " +
              "occasions de tomber en panne — mais une moyenne par unité de temps : c'est " +
              "Poisson.<br/><br/>" +
              "Donner le <strong>test linguistique</strong>, qui tranche presque toujours en " +
              "lisant l'énoncé : cherchez la préposition <strong>« par »</strong>. « $3$ défauts " +
              "PAR tôle », « $5$ requêtes PAR seconde », « $2$ sinistres PAR jour » — le « par » " +
              "signale une densité d'événements sur un support continu, donc Poisson. « Sur $20$ " +
              "pièces », « parmi $200$ soudures » signalent au contraire un effectif fini, donc " +
              "une binomiale.<br/><br/>" +
              "Traiter enfin explicitement le <strong>cas frontière</strong>, qui est le plus " +
              "instructif et qui est l'objet de la D4 : quand $n \\geq 30$ et $p \\leq 0{,}1$, " +
              "<strong>les deux lois conviennent</strong> et donnent presque le même résultat. On " +
              "choisit alors Poisson pour la seule raison qu'elle est <strong>beaucoup plus " +
              "simple à calculer</strong> — comparez $\\binom{200}{3} \\times 0{,}01^3 \\times " +
              "0{,}99^{197}$ et $\\dfrac{2^3}{6}e^{-2}$. L'étudiant comprend alors que le choix " +
              "d'une loi n'est pas une question de vérité mais de <strong>modélisation</strong> : " +
              "on prend l'outil qui décrit assez bien la situation au moindre coût, ce qui est " +
              "exactement le raisonnement d'ingénieur.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés ANNONCENT tous « (loi de Poisson) » dans leur
         énoncé et donnent lambda directement. Le choix de la loi n'y est donc
         jamais demandé — il est fait par le rédacteur de l'énoncé. Aucun des
         douze ne présente une situation binomiale, aucun ne donne un n et un
         p, aucun ne laisse la question ouverte. Pointer l'un d'eux enverrait
         l'enseignant vers une remédiation qui n'en est pas une : l'exercice
         supprime précisément la difficulté qu'on veut travailler. Les
         questions 1 et 4 de l'évaluation la travaillent, mais une
         remédiation ne renvoie jamais vers le devoir noté. Le remède ramène
         donc à l'exemple résolu du cours (les 200 soudures, qui part d'une
         binomiale et justifie le passage à Poisson) et demande à
         l'enseignant de fabriquer le support — un jeu de six énoncés courts
         où il faut seulement NOMMER la loi, sans calcul, suffit et prend dix
         minutes. */
      exercice: null
    },
    {
      titre: "Oublier le signe moins dans $e^{-\\lambda}$, ou confondre $e^{-\\lambda}$ et $-e^{\\lambda}$",
      eleve: "Sur $\\lambda = 3$, l'élève tape $e^3$ et annonce $P(X = 0) \\approx 20{,}09$. Ou " +
             "bien il obtient $-20{,}09$. Dans les deux cas il rend une valeur impossible pour une " +
             "probabilité, sans s'en apercevoir.",
      cause: "La cause est d'abord matérielle et il faut la traiter comme telle : sur la plupart " +
             "des calculatrices, le signe moins de l'exposant s'obtient avec la touche " +
             "$(-)$ et non avec la touche de soustraction, et la confusion des deux est " +
             "extrêmement fréquente — elle ne relève pas des mathématiques. La seconde cause est " +
             "conceptuelle : l'écriture $e^{-\\lambda}$ demande de comprendre que le moins est " +
             "<strong>dans l'exposant</strong>, donc qu'il ne rend pas le résultat négatif mais " +
             "qu'il l'<strong>inverse</strong> ($e^{-3} = 1/e^3$). Cette lecture suppose d'avoir " +
             "les puissances négatives bien en main, ce qui est rarement le cas chez un public " +
             "revenu aux études après plusieurs années.",
      remede: "Installer un <strong>contrôle de plausibilité absolu</strong>, qui est le plus " +
              "rentable de tout le chapitre : <strong>une probabilité est toujours entre $0$ et " +
              "$1$</strong>. Toujours. Un résultat de $20{,}09$ ou de $-20{,}09$ est faux avant " +
              "même qu'on sache pourquoi, et l'étudiant peut le voir seul, en une seconde, sans " +
              "l'enseignant. C'est la règle de contrôle à écrire au tableau et à ne plus jamais " +
              "effacer.<br/><br/>" +
              "Faire lire $e^{-\\lambda}$ comme un <strong>inverse</strong> : " +
              "$e^{-3} = \\dfrac{1}{e^3} = \\dfrac{1}{20{,}09} \\approx 0{,}0498$. Écrite sous " +
              "forme de fraction, l'expression est calculable même par qui se méfie de la touche " +
              "$(-)$, et surtout elle est <strong>visiblement petite</strong> : on voit qu'on " +
              "divise par un grand nombre. C'est aussi un repli utile en examen, quand la fatigue " +
              "fait douter.<br/><br/>" +
              "Ajouter un <strong>contrôle de sens</strong> qui coûte deux secondes et qui attrape " +
              "d'autres erreurs que celle-là : $P(X = 0)$ est la probabilité qu'il ne se passe " +
              "<strong>rien</strong>. Plus $\\lambda$ est grand — plus il se passe de choses en " +
              "moyenne — <strong>plus cette probabilité est petite</strong>. Avec $\\lambda = 2$ " +
              "on trouve $0{,}135$ ; avec $\\lambda = 5$, $0{,}007$. Si le résultat AUGMENTE quand " +
              "$\\lambda$ augmente, le signe est faux. Lecture métier immédiate : une machine qui " +
              "tombe en panne cinq fois par semaine n'a presque aucune chance de passer une " +
              "semaine entière sans panne, et c'est ce que dit le $0{,}007$.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 22) : l'exercice 3 est le serveur informatique,
         lambda = 5 requêtes par seconde, réponse P(X=0) = 0,007. C'est le
         meilleur support de cette erreur, et lambda = 5 en est la raison
         principale :
           - c'est le plus GRAND lambda du tirage, donc celui où l'oubli du
             signe donne le résultat le plus spectaculairement absurde :
             e^5 ≈ 148,4 contre la bonne réponse 0,007, soit un facteur 20 000.
             Le contrôle « entre 0 et 1 » du remède se démontre dessus sans
             discussion possible. Sur lambda = 2, l'oubli donne 7,39 — faux
             aussi, mais moins violemment ;
           - c'est aussi le lambda qui donne la plus PETITE probabilité du
             tirage (0,007), ce qui permet de démontrer le contrôle de sens du
             troisième paragraphe en comparant directement avec un exercice à
             lambda = 2 (les exercices 1, 6 et 9, réponse 0,135) : quand
             lambda passe de 2 à 5, P(X=0) passe de 0,135 à 0,007. Deux
             énoncés du même chapitre suffisent à faire la démonstration ;
           - l'arrondi à 0,001 demandé par l'énoncé rend le résultat 0,007
             visiblement petit, ce qui renforce la lecture.
         Les exercices 7 et 11 portent aussi lambda = 5 avec la même réponse :
         ils servent de doublons. Choix du 3 parce qu'il vient le premier des
         trois. Distinct du renvoi de l'erreur 4 (exercice 4), conformément à
         la règle du projet. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Calculer $P(X = k)$ pour $k \\neq 0$ en oubliant la factorielle ou la puissance",
      eleve: "Sur $\\lambda = 3$ et $k = 2$, l'élève écrit $P(X = 2) = 3^2 \\times e^{-3} = " +
             "0{,}448$ (il a oublié de diviser par $2!$), ou $\\dfrac{3}{2}e^{-3}$ (il a oublié " +
             "l'exposant), ou encore il divise par $2$ au lieu de $2! = 2$ — ce qui donne la bonne " +
             "réponse par accident, et l'erreur ne se révélera qu'avec $k = 3$.",
      cause: "La formule $P(X=k) = \\dfrac{\\lambda^k}{k!}e^{-\\lambda}$ empile trois opérations " +
             "dans un espace typographique minuscule : une puissance, une factorielle, une " +
             "exponentielle. Mais la cause principale est ailleurs, et elle est structurelle : " +
             "<strong>les douze exercices du chapitre ont tous $k = 0$</strong>. Or avec $k = 0$, " +
             "$\\lambda^0 = 1$ et $0! = 1$ : les deux termes délicats <strong>disparaissent</strong>, " +
             "et l'étudiant pratique douze fois une formule amputée de ses deux difficultés. Il " +
             "n'a donc jamais écrit ni la puissance ni la factorielle avant le jour du devoir. " +
             "L'erreur n'est pas de l'étourderie : c'est l'effet mécanique d'un entraînement qui " +
             "ne couvre pas la tâche. La variante « diviser par $2$ au lieu de $2!$ » est la plus " +
             "traître, puisqu'elle passe inaperçue tant que $k \\leq 2$.",
      remede: "Faire écrire la formule <strong>en trois facteurs séparés</strong>, un par ligne, " +
              "avant toute valeur numérique : (1) $\\lambda^k$, (2) $\\dfrac{1}{k!}$, (3) " +
              "$e^{-\\lambda}$. Puis seulement le produit. Écrite ainsi, l'étape sautée se voit — " +
              "c'est une ligne qui n'existe pas. En une seule expression, elle est " +
              "invisible.<br/><br/>" +
              "Faire calculer une <strong>petite table des factorielles</strong> au tableau, une " +
              "fois pour toutes : $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$. " +
              "Deux choses en sortent, et les deux comptent : que $0! = 1$ (ce qui explique " +
              "pourquoi la formule se simplifie tant sur les douze exercices), et que la " +
              "factorielle <strong>décroche très vite</strong> de la division simple à partir de " +
              "$k = 3$ — ce qui révèle la variante traître.<br/><br/>" +
              "Installer un <strong>contrôle de cohérence par le mode</strong>, propre à Poisson " +
              "et très efficace : la probabilité est <strong>maximale au voisinage de " +
              "$\\lambda$</strong>. Avec $\\lambda = 3$, les valeurs les plus probables sont $2$ " +
              "et $3$, et $P(X = 2)$ doit être bien plus grande que $P(X = 0) = 0{,}05$. Trouver " +
              "$P(X=2) < P(X=0)$ signale une erreur sans qu'il faille relire le calcul. Lecture " +
              "métier : un centre d'appels qui reçoit trois appels par minute en moyenne reçoit le " +
              "plus souvent deux ou trois appels — c'est le dimensionnement des postes, et cela " +
              "n'a rien d'une abstraction.",
      /* Volontairement SANS renvoi, et c'est le cas le plus net de toute la
         fiche, vérifié sur le tirage : les douze exercices numérotés
         demandent TOUS P(X = 0). Pas un seul n'a k ≠ 0. Or c'est précisément
         avec k = 0 que lambda^k et k! valent tous deux 1 et disparaissent de
         la formule. Il est donc structurellement IMPOSSIBLE qu'un de ces
         douze exercices fasse écrire une puissance ou une factorielle, et
         pointer l'un d'eux reviendrait à renvoyer l'enseignant vers le seul
         cas du chapitre où l'erreur ne peut pas se produire. Pire : les douze
         CONSTRUISENT l'erreur, puisqu'ils habituent à une formule sans ses
         deux termes délicats. La question 3 de l'évaluation la travaille
         exactement (lambda = 3, k = 2), mais une remédiation ne renvoie
         jamais vers le devoir noté. Le remède ramène donc au cours (méthode
         3, qui traite lambda = 3 et k = 2, et l'exemple résolu, qui traite
         k = 3) et demande à l'enseignant de fabriquer le support : il suffit
         de reprendre n'importe lequel des douze énoncés et de remplacer
         « aucun » par « exactement deux ». */
      exercice: null
    },
    {
      titre: "Rendre une probabilité sans la traduire, ou passer à côté de l'événement contraire",
      eleve: "L'élève écrit « $0{,}018$ » et s'arrête là. Interrogé, il ne sait pas dire si c'est " +
             "beaucoup ou peu, ni à quoi cela correspond en semaines de production. Et devant " +
             "« quelle est la probabilité qu'il y ait AU MOINS une panne ? », il tente d'additionner " +
             "$P(X=1) + P(X=2) + \\ldots$ au lieu de calculer $1 - P(X = 0)$.",
      cause: "Pour la première moitié, c'est le contrat implicite habituel : l'énoncé demande une " +
             "probabilité, l'élève donne une probabilité, et l'habitude scolaire veut que la " +
             "réponse soit le résultat du calcul. Pour la seconde, la cause est plus intéressante " +
             "et plus profonde : « au moins un » se lit spontanément comme « un, ou deux, ou " +
             "trois... », c'est-à-dire comme une <strong>somme infinie</strong> — et cette lecture " +
             "est exacte, seulement elle est incalculable. L'idée de passer par le " +
             "<strong>contraire</strong> n'est pas naturelle : elle demande de calculer autre chose " +
             "que ce qu'on cherche, ce qui ressemble à un détour plutôt qu'à une méthode. Chez un " +
             "étudiant qui manque de confiance en mathématiques, ce genre de détour est " +
             "spontanément suspect.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion traduite</strong>, " +
              "comportant un ordre de grandeur en langage courant : « $0{,}018$, soit environ " +
              "<strong>deux chances sur cent</strong> : la machine passe une semaine sans panne " +
              "environ une fois par an ». C'est ce que l'épreuve attend, et c'est ce qu'un " +
              "responsable de maintenance peut utiliser — $0{,}018$ tout seul ne décide de " +
              "rien.<br/><br/>" +
              "Installer le <strong>réflexe du contraire</strong> sur un repère verbal simple : " +
              "dès qu'un énoncé contient <strong>« au moins un »</strong>, écrire $1 - P(X = 0)$ " +
              "<strong>avant</strong> tout calcul. Le contraire de « au moins un » est « aucun », " +
              "et « aucun » est le seul cas facile à calculer — c'est justement celui que les douze " +
              "exercices du chapitre font pratiquer. Dit ainsi, le détour devient le chemin " +
              "court.<br/><br/>" +
              "Montrer que cette formule est, <strong>en pratique, la plus utilisée du " +
              "chapitre</strong> : les questions professionnelles sont presque toujours de la " +
              "forme « quelle est la probabilité qu'il se produise au moins un défaut / au moins " +
              "une panne / au moins un dépassement ? ». Un lot est refusé s'il contient au moins " +
              "une pièce non conforme ; une alarme se déclenche au premier événement. " +
              "$P(X \\geq 1) = 1 - e^{-\\lambda}$ tient en une ligne et répond à toutes ces " +
              "questions — c'est la formule à savoir écrire les yeux fermés.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 est la
         machine industrielle, lambda = 4 pannes par semaine, réponse
         P(X=0) = 0,018. Le renvoi est utilisable pour cette erreur alors même
         que tous les exercices partagent le même moule, et c'est assumé :
         l'erreur ne porte pas sur le RÉSULTAT (0,018 sera juste) mais sur la
         LECTURE, et l'enseignant peut exiger la traduction et poser la
         question du contraire sur cet énoncé précis.
         Choix du 4 plutôt qu'un autre, pour trois raisons de contenu :
           - 0,018 est une probabilité PETITE mais pas nulle, donc sa
             traduction en langage courant est réellement instructive
             (« environ deux chances sur cent », soit une semaine par an) — ce
             que 0,135 (lambda = 2) rendrait moins frappant ;
           - le complément 1 - 0,018 = 0,982 est spectaculaire et se calcule
             de tête : « il y a plus de 98 % de chances d'avoir au moins une
             panne cette semaine ». C'est exactement la formule du deuxième
             paragraphe du remède, démontrable sur l'énoncé même ;
           - le contexte, la maintenance d'une machine, est celui où la
             question « au moins une panne ? » se pose réellement en
             entreprise, et où la réponse conditionne un contrat de service.
         L'exercice 8 (serveur, lambda = 4) et le 10 (centre d'appels,
         lambda = 4) portent la même valeur et servent de doublons. Distinct
         du renvoi de l'erreur 2 (exercice 3), conformément à la règle du
         projet. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — lot à $5\,\%$ de défauts, $n = 20$ prélevées, calculer $P(X = 0)$
          avec $\mathcal{B}(20\,;\,0{,}05)$. La loi est NOMMÉE dans l'énoncé et
          ses deux paramètres sont donnés : il ne reste qu'à appliquer
          $0{,}95^{20}$. Aucune modélisation n'est demandée, aucun choix de
          méthode : « calculer ».
     Q2 — quelle propriété caractérise Poisson ? Les quatre options sont
          $E = \lambda$ et $V = \lambda^2$ ; $E = V = \lambda$ ;
          $E = \lambda$ et $V = \sqrt{\lambda}$ ; $E = 0$ et $V = \lambda$.
          Aucun calcul : il faut juger la validité de quatre affirmations
          très voisines, qui ne diffèrent que par un exposant ou une racine.
          « raisonner ».
     Q3 — $\lambda = 3$, calculer $P(X = 2)$, avec $e^{-3}$ fourni.
          Application de la formule de Poisson avec puissance et factorielle.
          Exécution d'une procédure connue sur des nombres donnés :
          « calculer ».
     Q4 — l'approximation de la binomiale par Poisson est valable quand : les
          quatre options proposent des conditions sur $n$ et $p$. Aucun
          calcul : il faut décider si un critère de validité est rempli, ce
          qui suppose de comprendre POURQUOI l'approximation fonctionne
          (événements rares). C'est la question la plus exigeante du devoir, et
          c'est un jugement sur la validité d'un modèle : « raisonner ».
     Q5 — RÉÉCRITE le 2026-09-17. Elle demandait
          $P(X \geq 1) = 1 - P(X = 0)$ avec la loi NOMMÉE, le paramètre
          DONNÉ, $e^{-4}$ FOURNI et la formule du contraire ÉCRITE dans
          l'énoncé : il ne restait qu'une soustraction, après la Q1 et la Q3
          qui appliquaient déjà leurs lois toutes désignées. Troisième
          application dictée du devoir, et la plus pauvre des trois.
          Elle demande maintenant de TESTER une conjecture sur des données
          brutes : un relevé de pannes sur cent jours est donné, et il faut
          confronter quatre lois candidates à ce relevé — binomiale,
          Poisson, uniforme, normale — avant de trancher. Essayer, comparer,
          écarter celles qui échouent : c'est « chercher ».
          Le calcul reste nécessaire et il est multiple : $E = V \approx 2$
          désigne Poisson ; $V = np(1-p) < np$ écarte la binomiale ; cinq
          effectifs voisins de $20$ écarteraient l'uniforme, ce que le relevé
          dément ; et la continuité écarte la normale sur un comptage.
          La question porte désormais sur l'erreur 1 de cette fiche —
          choisir la mauvaise loi, binomiale là où il faut Poisson — que le
          tirage ne travaille pas (`exercice: null`).

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2, chercher 1.
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés.

     L'absence de « modéliser » mérite toujours d'être signalée, même après
     la réécriture de la Q5 : le geste central du chapitre — RECONNAÎTRE
     qu'une situation relève de la binomiale ou de Poisson — est le premier
     attendu officiel, et la Q1 nomme encore sa loi tandis que la Q3 donne
     encore son $\lambda$. La Q5 s'en approche au plus près (elle fait
     choisir la loi) mais elle le fait par ESSAIS sur quatre candidates
     données, ce qui est « chercher » et non « modéliser » : traduire une
     situation en modèle supposerait de produire la loi sans liste. Un
     enseignant qui veut évaluer « modéliser » n'a qu'à reprendre le relevé
     de la Q5 en supprimant les quatre propositions. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "chercher"]
  }
};
