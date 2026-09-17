/* =========================================================
   Spark Learning – js/data/prof/bts/bts-laplace.prof.js
   Fiche professeur du chapitre « Transformée de Laplace » (programme BTS),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   DERNIER CHAPITRE du dossier `bts` (rang 13), et dernier chapitre de
   l'ouvrage `bts-maths` (chapitre 27).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 26 (ce chapitre est le vingt-septième et dernier de
   `bts-maths` : les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et ce moule est le plus pauvre du
   dossier rapporté à l'ambition du chapitre. Chacun demande
   $\mathcal{L}\{e^{at}\}$ évalué en une valeur de $p$, c'est-à-dire
   $\dfrac{1}{p - a}$ pour des entiers $a \in \{1,2,3,4\}$ et $p$ compris
   entre 2 et 9. La tâche se réduit donc à UNE SOUSTRACTION suivie d'UNE
   DIVISION — en fait à l'inverse d'un petit entier, puisque $p - a$ vaut 2,
   3, 4 ou 5 dans les douze cas.

   Ce que cela implique et qu'il faut avoir en tête avant d'écrire la moindre
   remédiation : un étudiant peut réussir les douze exercices sans avoir la
   moindre idée de ce qu'est une transformée de Laplace, à quoi elle sert, ni
   pourquoi on s'en donne la peine. Aucun énoncé ne transforme d'équation
   différentielle, ne décompose en éléments simples, ne revient au domaine
   temporel, ne parle de fonction de transfert ni de stabilité.

   Détail à signaler, et il est gênant : les douze énoncés portent tous sur
   $e^{+at}$, exposant POSITIF, décrit comme « un terme transitoire » ou une
   « réponse ». Or $e^{+3t}$ est une exponentielle DIVERGENTE — un système
   dont la réponse contient un tel terme est instable et se détruit. Les
   contextes annoncés (régulateur PID, circuit RC, suspension asservie) sont
   donc physiquement incohérents avec le signe. C'est une occasion
   pédagogique de premier ordre, développée dans l'erreur 3.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : $\mathcal{L}\{f'\} = pF(p) - f(0)$ et les conditions
   initiales (récapitulatif, et « l'erreur la plus fréquente en Laplace » dit
   la correction du devoir), la DÉCOMPOSITION EN ÉLÉMENTS SIMPLES (D4), la
   TRANSFORMÉE INVERSE, la FONCTION DE TRANSFERT (D2), les PÔLES et la
   STABILITÉ (D3), le théorème de la valeur finale. Or quatre des cinq
   questions de l'évaluation portent là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-laplace"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 2 (Équations Différentielles du 2nd Ordre, `eq-diff-2`) : RETENU, et
     c'est le prérequis qui donne au chapitre sa raison d'être. La transformée
     de Laplace n'a d'intérêt que pour RÉSOUDRE des équations
     différentielles : c'est l'annonce de son introduction, c'est l'objet de
     sa méthode en quatre étapes, et c'est l'exemple résolu du cours (le
     circuit RC soumis à un échelon). Un étudiant qui n'a jamais résolu
     d'équation différentielle autrement ne peut pas comprendre ce que Laplace
     apporte : il apprend une seconde méthode sans savoir de quoi elle est la
     méthode. L'ordre pédagogique est ici décisif — on montre le problème
     avant l'outil qui le simplifie, jamais l'inverse.

     ch. 1 (Les Nombres Complexes, `complexes`) : RETENU aussi. La variable
     $p$ de Laplace est explicitement décrite comme COMPLEXE dans la D1 du
     cours, et l'introduction pose $p = j\omega$ pour passer au domaine
     fréquentiel. Surtout, la notion de PÔLE (D3) et le critère de stabilité —
     « tous les pôles ont une partie réelle négative » — sont incompréhensibles
     sans la notion de partie réelle, qui est du chapitre 1. On peut traiter
     les douze exercices sans complexes ; on ne peut pas traiter la stabilité
     sans eux.

     Candidats examinés et ÉCARTÉS :
     - ch. 7 (Primitives et calcul intégral appliqué) : la DÉFINITION même de
       la transformée, $F(p) = \int_0^{+\infty} f(t)e^{-pt}dt$, est une
       intégrale — et c'est le candidat le plus sérieux. Il est écarté après
       examen, pour une raison pratique qui mérite d'être exposée : cette
       intégrale est posée une fois, en D1, et n'est JAMAIS calculée dans le
       chapitre. Toute la pratique passe par le TABLEAU des transformées (les
       quatre formules encadrées), qui dispense précisément d'intégrer. Un
       étudiant sans le chapitre 7 traverse celui-ci sans encombre. Déclarer
       le prérequis afficherait un appui réel en théorie mais inexistant en
       pratique — et la colonne « S'appuie sur » deviendrait moins fiable.
       Signalons toutefois à l'enseignant que le lien existe : si un groupe
       demande « d'où sort cette formule ? », c'est au chapitre 7 qu'il faut
       revenir.
     - ch. 12 (Séries de Fourier) : les deux chapitres décrivent un signal
       autrement que par le temps, et $p = j\omega$ fait le pont. Mais rien de
       Fourier n'est utilisé ici : aucun coefficient, aucun spectre, aucune
       harmonique. C'est une parenté de famille, pas une dépendance. Elle vaut
       d'être dite en classe, elle ne vaut pas d'être déclarée.
     - ch. 5 (Fonctions réelles) : les pôles sont les valeurs qui annulent un
       dénominateur, donc les valeurs exclues du domaine d'une fraction
       rationnelle — le lien avec le chapitre 5 est réel et rarement fait.
       Mais le chapitre 5 est déjà atteint indirectement, et l'ajouter
       alourdirait la colonne sans rien apprendre.
     - ch. 3, 4, 6, 8, 9, 10, 11 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, et ils sont ici DÉCISIFS. L'EXPONENTIELLE —
     $e^{at}$ est l'objet des douze exercices et $e^{-t}$ celui de l'exemple
     résolu —, le calcul sur les FRACTIONS (toute la décomposition en éléments
     simples en dépend), et les ÉQUATIONS du premier degré viennent tous de la
     REMISE À NIVEAU (`bts-prep`), qui est dans un AUTRE dossier. `prerequis`
     ne vise qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [1, 2],

  /* Rang conseillé (2026-09-17) : rang 13 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 27 de l'ouvrage `bts-maths`, c'est-à-dire au
     DERNIER chapitre de l'ouvrage entier.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 13 est celui du livre, et les deux ordres coïncident.

     Le placement en dernier est délibéré et tient à trois raisons. D'abord,
     les prérequis : les chapitres 1 et 2 doivent précéder. Ensuite, la
     maturité : c'est le chapitre le plus abstrait de l'ouvrage — on y
     manipule une fonction d'une variable complexe qui ne représente rien de
     directement observable — et il suppose que tout le reste soit installé.
     Enfin, le voisinage avec Fourier (12) est délibéré : ce sont les deux
     faces d'une même idée, décrire un signal ou un système autrement que par
     le temps. Les traiter à la suite permet de le dire explicitement, ce qui
     éclaire les deux et donne à l'année une conclusion plutôt qu'un arrêt. */
  rangConseille: 13,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et la transformée de Laplace est — avec les séries de
     Fourier — le point le plus nettement RÉSERVÉ des mathématiques de BTS :
     elle relève des groupements industriels traitant de l'automatique et des
     systèmes asservis, et elle est absente de la plupart des autres.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« transformée d'une fonction usuelle », « résolution d'une équation
     différentielle », « transformée inverse ») et n'inventent aucune
     spécialité — en particulier, ils ne mentionnent ni la fonction de
     transfert ni l'analyse de stabilité, qui relèvent clairement de
     l'automatique et non des mathématiques du tronc commun. La `note` insiste
     sur ce point plus que d'habitude. */
  attendus: [
    "Déterminer la transformée de Laplace d'une fonction usuelle à l'aide du tableau des transformées",
    "Transformer une équation différentielle linéaire à coefficients constants en équation algébrique en tenant compte des conditions initiales",
    "Déterminer l'original d'une fonction rationnelle simple, au besoin après décomposition en éléments simples"
  ],

  note: "La transformée de Laplace — tableau des transformées, transformation d'une équation " +
        "différentielle, transformée inverse — s'appuie sur le tronc commun de mathématiques du " +
        "BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus, " +
        "et plus attentivement ici que partout ailleurs.</strong> Il n'existe pas un programme " +
        "unique de mathématiques en BTS, mais un tronc commun décliné par " +
        "<strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien, et la " +
        "transformée de Laplace est — avec les séries de Fourier — le point le plus nettement " +
        "<strong>réservé</strong> de tout le programme : elle relève des groupements industriels " +
        "traitant de l'<strong>automatique</strong> et des systèmes asservis, et elle est absente " +
        "de la plupart des autres. Notez en outre que la <strong>fonction de transfert</strong> et " +
        "l'<strong>analyse de stabilité par les pôles</strong>, présentées dans le cours (D2 et " +
        "D3), relèvent de l'enseignement d'automatique plutôt que des mathématiques : les trois " +
        "attendus ci-dessus ne les mentionnent délibérément pas.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Le chapitre s'appuie " +
        "sur « Les Nombres Complexes » (chapitre 1) et « Équations Différentielles du 2nd Ordre » " +
        "(chapitre 2) — cela, la colonne « S'appuie sur » l'affiche. Mais il repose tout entier " +
        "sur l'<strong>exponentielle</strong> ($e^{at}$ est l'objet des douze exercices) et sur le " +
        "calcul des <strong>fractions</strong> (toute la décomposition en éléments simples en " +
        "dépend). Ces deux notions sont dans la <strong>remise à niveau</strong>, l'autre partie " +
        "de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même partie, " +
        "<strong>rien ne le montrera</strong> : si le groupe ne sait pas additionner " +
        "$\\dfrac{A}{p+1} + \\dfrac{B}{p+3}$, la décomposition en éléments simples lui restera " +
        "fermée, et c'est là qu'il faut revenir.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "c'est la plus sévère de tout l'ouvrage.</strong> Les douze énoncés numérotés sont " +
        "<strong>tous le même exercice</strong> : calculer $\\mathcal{L}\\{e^{at}\\}$ en une " +
        "valeur de $p$, c'est-à-dire $\\dfrac{1}{p-a}$. Comme $p - a$ vaut toujours $2$, $3$, $4$ " +
        "ou $5$, la tâche se réduit à <strong>une soustraction et l'inverse d'un petit " +
        "entier</strong>. Autrement dit : <strong>un étudiant peut réussir les douze exercices " +
        "sans savoir ce qu'est une transformée de Laplace</strong>, ni à quoi elle sert, ni " +
        "pourquoi on s'en donne la peine. Aucun énoncé ne transforme d'équation différentielle, ne " +
        "décompose en éléments simples, ne revient au domaine temporel, n'aborde la fonction de " +
        "transfert ni la stabilité.<br/><br/>" +
        "<strong>Un défaut du tirage qu'il faut connaître, et qui est une occasion.</strong> Les " +
        "douze énoncés portent sur $e^{+at}$, à exposant <strong>positif</strong>, présenté comme " +
        "un « terme transitoire » de régulateur PID ou de circuit RC. Or $e^{+3t}$ " +
        "<strong>diverge</strong> : un système réel dont la réponse contient un tel terme est " +
        "<strong>instable</strong> et se détruit. Les contextes annoncés sont donc physiquement " +
        "incohérents avec le signe. Ne masquez pas ce défaut — <strong>exploitez-le</strong> : " +
        "demander au groupe si une suspension dont la réponse contient $e^{+t}$ est rassurante " +
        "vaut mieux qu'un cours sur la stabilité.<br/><br/>" +
        "Ne sont travaillés nulle part : $\\mathcal{L}\\{f'\\} = pF(p) - f(0)$ et les " +
        "<strong>conditions initiales</strong>, la <strong>décomposition en éléments simples</strong>, " +
        "la <strong>transformée inverse</strong>, la fonction de transfert, les pôles. Or ce sont " +
        "<strong>quatre des cinq questions du devoir noté</strong>. L'exemple résolu du cours (le " +
        "circuit RC soumis à un échelon) fait, lui, le chemin complet, de l'équation " +
        "différentielle à $u_C(t) = 5(1 - e^{-t})$ avec vérification : <strong>c'est lui qu'il " +
        "faut prendre comme modèle de la tâche attendue</strong>, et non les exercices.",

  erreurs: [
    {
      titre: "Oublier le terme $-f(0)$ dans $\\mathcal{L}\\{f'\\} = pF(p) - f(0)$",
      eleve: "Sur $y' + 3y = 6$ avec $y(0) = 2$, l'élève écrit $pY(p) + 3Y(p) = 6/p$ au lieu de " +
             "$pY(p) - 2 + 3Y(p) = 6/p$. Il obtient une solution qui ne part pas de la bonne " +
             "valeur, sans que rien dans son calcul ne le signale.",
      cause: "La règle est présentée comme une correspondance simple — <strong>dériver devient " +
             "multiplier par $p$</strong> — et c'est cette moitié-là que la mémoire retient, parce " +
             "qu'elle est élégante et facile à dire. Le $-f(0)$ ressemble à une correction " +
             "technique accrochée à la formule, pas à une partie de son sens. S'y ajoute un " +
             "renforcement traître : dans l'exemple résolu du cours comme dans la question 3 du " +
             "devoir, la condition initiale vaut <strong>zéro</strong> — le condensateur est " +
             "déchargé, le système part du repos. Le terme oublié vaut alors $0$ et le résultat " +
             "est juste malgré tout. L'étudiant apprend donc, par l'expérience répétée, que la " +
             "formule courte fonctionne, et elle lâche le jour où le système ne part pas du " +
             "repos.",
      remede: "Faire écrire <strong>systématiquement la condition initiale à côté de l'équation</strong>, " +
              "avant toute transformation : « $y(0) = 2$ ». Une donnée qu'on a écrite ne s'oublie " +
              "pas ; une donnée qu'on a seulement lue, si. Et quand elle vaut zéro, l'écrire quand " +
              "même, en disant pourquoi : « $y(0) = 0$, le système part du repos, donc le terme " +
              "disparaît ». L'étape est franchie consciemment au lieu d'être " +
              "sautée.<br/><br/>" +
              "Expliquer <strong>ce que le terme encode</strong>, car c'est ce qui lui donne son " +
              "évidence : une équation différentielle seule ne détermine pas une solution unique — " +
              "il faut savoir d'où le système part. Le $-f(0)$ est précisément " +
              "<strong>l'endroit où cette information entre dans le calcul</strong>. Sans lui, on " +
              "résoudrait le même problème pour tous les états initiaux à la fois, ce qui n'a pas " +
              "de solution. C'est une force de la méthode, pas une complication : là où la " +
              "résolution classique traite les conditions initiales à la fin, en ajustant des " +
              "constantes, Laplace les intègre dès la première ligne.<br/><br/>" +
              "Installer un <strong>contrôle systématique en fin de calcul</strong> : une fois " +
              "$y(t)$ retrouvé, calculer $y(0)$ et vérifier qu'on retombe sur la condition " +
              "initiale de l'énoncé. C'est exactement ce que fait l'exemple résolu du cours " +
              "($u_C(0) = 0$ ✓). Le contrôle coûte cinq secondes et attrape cette erreur à tous " +
              "les coups. En automatique, il a une traduction directe : un modèle qui ne part pas " +
              "de l'état mesuré est un modèle faux, et le régulateur calculé dessus corrigera dans " +
              "le vide.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés demandent la transformée d'une fonction SIMPLE
         (e^at) évaluée en un point. Aucun ne comporte de dérivée, aucun ne
         comporte d'équation différentielle, et aucun ne mentionne de
         condition initiale — les symboles f', y' et f(0) n'apparaissent dans
         aucun des douze énoncés. Il est donc structurellement impossible
         qu'un de ces exercices fasse rencontrer cette erreur : elle exige
         qu'on transforme une dérivée, ce qui n'est jamais demandé. Pointer
         l'un d'eux enverrait l'enseignant vers une remédiation qui n'en est
         pas une. La question 2 de l'évaluation la travaille exactement — et
         sa correction dit même que c'est « l'erreur la plus fréquente en
         Laplace » —, mais une remédiation ne renvoie jamais vers le devoir
         noté. Le remède ramène donc au cours (méthode 1, les formules
         encadrées, le récapitulatif qui dit « ne JAMAIS oublier ») et
         demande à l'enseignant de fabriquer le support. Une précision utile :
         il faut impérativement que cet énoncé ait une condition initiale NON
         NULLE, sans quoi l'erreur reste invisible — c'est le défaut de
         l'exemple du cours et de la question 3 du devoir, qui partent tous
         deux de zéro. */
      exercice: null
    },
    {
      titre: "Se tromper de signe dans $\\mathcal{L}\\{e^{at}\\} = \\dfrac{1}{p-a}$",
      eleve: "Sur $\\mathcal{L}\\{e^{3t}\\}$ évalué en $p = 6$, l'élève écrit $\\dfrac{1}{6+3} = " +
             "0{,}111$ au lieu de $\\dfrac{1}{6-3} = 0{,}333$. Ou, sur $\\mathcal{L}\\{3e^{-2t}\\}$, " +
             "il écrit $\\dfrac{3}{p-2}$ au lieu de $\\dfrac{3}{p+2}$.",
      cause: "La formule $\\dfrac{1}{p-a}$ contient un <strong>double jeu de signes</strong> : le " +
             "$a$ de l'exposant entre au dénominateur avec un signe OPPOSÉ. Quand $a$ est déjà " +
             "négatif, comme dans $e^{-2t}$, les deux moins se composent et donnent un plus — " +
             "$\\dfrac{1}{p+2}$ — ce qui suppose de tenir deux transformations de signe " +
             "simultanées. C'est le genre d'enchaînement qui échoue sous la pression de l'examen " +
             "même chez un étudiant qui le maîtrise au calme. S'y ajoute que le tableau des " +
             "transformées est presque toujours donné avec la lettre $a$ générique, sans exemple " +
             "à $a$ négatif — l'étudiant n'a donc jamais vu écrite la substitution qui pose " +
             "problème.",
      remede: "Faire <strong>écrire la substitution explicitement</strong>, en une ligne " +
              "intermédiaire, avant tout calcul : « ici $a = -2$, donc " +
              "$\\dfrac{1}{p - a} = \\dfrac{1}{p - (-2)} = \\dfrac{1}{p+2}$ ». Les parenthèses " +
              "autour du $-2$ ne sont pas décoratives : elles sont exactement ce qui rend visible " +
              "le double signe. Écrite ainsi, la transformation ne peut plus se " +
              "perdre.<br/><br/>" +
              "Donner la <strong>lecture par le pôle</strong>, qui remplace la mémorisation par " +
              "une observation : le dénominateur $p - a$ s'annule en $p = a$, et $a$ est " +
              "<strong>exactement le coefficient de l'exposant</strong>. Sur $e^{-2t}$, le pôle est " +
              "en $-2$, donc le dénominateur est $p + 2$. Le pôle et l'exposant portent le même " +
              "nombre, avec le même signe : il n'y a plus qu'une chose à retenir au lieu de " +
              "deux.<br/><br/>" +
              "Ajouter le <strong>contrôle de stabilité</strong>, qui donne à ce signe toute son " +
              "importance et qui est l'un des points de fond du chapitre : un exposant " +
              "<strong>négatif</strong> décrit un transitoire qui <strong>s'éteint</strong> (le " +
              "cas physique normal), et son pôle est à partie réelle négative — le système est " +
              "<strong>stable</strong>. Un exposant positif décrit une divergence, et son pôle est " +
              "à droite : le système est <strong>instable</strong>. Se tromper de signe, ce n'est " +
              "donc pas une faute de calcul anodine : c'est déclarer stable un système qui " +
              "s'emballe, ou l'inverse. En automatique, c'est la seule erreur qui casse vraiment " +
              "du matériel.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 26) : l'exercice 1 est le filtre actif,
         L{e^(3t)} évalué en p = 6, réponse 1/(6-3) = 0,3333. C'est le
         meilleur support de cette erreur parmi les douze, et l'écart entre p
         et a le justifie :
           - p - a = 3 alors que p + a = 9 : les deux réponses, 0,3333 et
             0,1111, sont bien distinctes et toutes deux plausibles, donc
             l'erreur ne se voit pas à l'ordre de grandeur. C'est ce qui la
             rend instructive ;
           - le rapport de 3 entre les deux est le plus grand du tirage pour
             un a de cette taille, ce qui rend la correction lisible d'un coup
             d'œil ;
           - c'est le premier énoncé du chapitre, donc celui sur lequel
             l'enseignant peut imposer l'écriture de la substitution dès le
             départ ;
           - le contexte, un filtre actif, porte directement la lecture par le
             pôle du deuxième paragraphe.
         L'exercice 7 (régulateur PID, a = 3, p = 6) porte exactement les
         mêmes valeurs et sert de doublon. Il faut noter que les douze
         exercices ont tous a POSITIF : la variante vraiment difficile de
         l'erreur — celle du double signe sur e^(-2t) — n'est donc PAS
         couverte par le tirage et n'apparaît qu'à la question 1 du devoir.
         Le renvoi reste légitime (l'exercice fait bien appliquer la formule
         et travaille le signe du dénominateur) mais il est PARTIEL, et
         l'enseignant doit le savoir : le remède demande explicitement de
         traiter aussi un cas à exposant négatif, que le manuel ne fournit
         pas. Distinct du renvoi de l'erreur 3 (exercice 5), conformément à la
         règle du projet. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ne pas lire le signe de l'exposant comme un diagnostic de stabilité",
      eleve: "L'élève calcule correctement $\\mathcal{L}\\{e^{1t}\\}$ en $p = 5$ et rend " +
             "$0{,}25$. Interrogé sur ce que fait cette « réponse d'une suspension mécanique " +
             "asservie » au cours du temps, il ne voit pas que $e^{+t}$ <strong>croît sans " +
             "limite</strong> — c'est-à-dire que la suspension décrite se détruirait en quelques " +
             "secondes.",
      cause: "La cause est ici en partie <strong>dans le support et non dans l'étudiant</strong>, " +
             "et il faut le dire clairement : les douze énoncés du chapitre décrivent des " +
             "« termes transitoires » et des « réponses » de systèmes réels avec des exposants " +
             "<strong>positifs</strong>, ce qui est physiquement incohérent. L'étudiant qui " +
             "applique la formule sans réfléchir au sens n'est donc pas démenti par l'énoncé — il " +
             "est au contraire conforté. S'y ajoute la cause habituelle : la tâche demandée " +
             "s'arrête à un nombre, et l'habitude scolaire veut que la réponse soit le résultat du " +
             "calcul. Personne n'a jamais demandé à cet étudiant si le résultat avait un sens " +
             "physique.",
      remede: "Poser la <strong>question du comportement à long terme</strong> à chaque exercice, " +
              "systématiquement et à l'oral : « au bout de dix secondes, ce terme est-il grand ou " +
              "petit ? ». Sur $e^{-t}$, il a pratiquement disparu ; sur $e^{+t}$, il vaut plus de " +
              "vingt-deux mille. La question prend dix secondes et transforme un calcul mécanique " +
              "en lecture de système.<br/><br/>" +
              "Faire du <strong>signe de l'exposant un diagnostic en un coup d'œil</strong> : " +
              "exposant <strong>négatif</strong>, le transitoire s'éteint et le système est " +
              "<strong>stable</strong> — c'est le cas de tout équipement en fonctionnement normal. " +
              "Exposant <strong>positif</strong>, le système <strong>diverge</strong> : moteur qui " +
              "s'emballe, régulateur qui oscille de plus en plus fort, structure qui entre en " +
              "résonance. C'est la D3 du cours, énoncée sur les pôles, mais elle se lit " +
              "directement sur l'exposant.<br/><br/>" +
              "<strong>Exploiter le défaut des énoncés plutôt que le masquer</strong>, et c'est le " +
              "conseil principal de cette remédiation : demander au groupe si une suspension " +
              "mécanique dont la réponse contient $e^{+t}$ est rassurante. La réponse — non, elle " +
              "se détruit — fait comprendre la stabilité mieux qu'un cours entier, et elle apprend " +
              "en prime quelque chose de plus rare et de plus précieux : qu'un résultat " +
              "mathématiquement juste peut décrire une situation physiquement absurde, et que " +
              "c'est au technicien de s'en apercevoir. Aucun calcul ne le signalera jamais à sa " +
              "place.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 est la
         réponse d'une suspension mécanique asservie comportant un terme en
         e^(1t), évalué en p = 5, réponse 0,25. C'est LE support de cette
         erreur, et le choix tient à la force du contraste :
           - l'incohérence physique y est MAXIMALE. Une suspension asservie
             est, par définition, un système dont on attend qu'il revienne à
             l'équilibre : c'est même l'objet du chapitre 2 (régimes
             d'amortissement). Y trouver un terme en e^(+t) est frontalement
             absurde, et chacun peut se représenter une voiture dont les
             oscillations s'amplifient. Sur l'exercice 1 (filtre actif) ou 8
             (filtre actif), l'absurdité est plus abstraite ;
           - l'exposant a = 1 est le plus petit du tirage, ce qui rend le
             calcul du troisième paragraphe du remède immédiat : e^10 ≈ 22 026,
             calculable de tête en ordre de grandeur, contre e^30 pour a = 3
             qui écrase l'intuition ;
           - le lien avec le chapitre 2, déclaré en prérequis, se fait tout
             seul : la suspension y est un contexte d'exercice (l'exercice 5
             du chapitre 2 est lui aussi une suspension de voiture). Faire le
             rapprochement en classe boucle les deux chapitres, ce qui est
             une bonne façon de clore l'ouvrage.
         Les exercices 3, 6 et 10 portent aussi a = 1 et servent de doublons ;
         le 6 (moteur à sa mise sous tension) est le second meilleur contexte,
         un moteur qui s'emballe étant également parlant. Distinct des renvois
         des erreurs 2 (exercice 1) et 4 (exercice 9), conformément à la règle
         du projet. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Rester dans le domaine de $p$ et croire le problème résolu",
      eleve: "L'élève obtient $Y(p) = \\dfrac{6}{p(p+3)}$ et s'arrête là, en annonçant qu'il a " +
             "résolu l'équation différentielle. Ou bien il rend « $0{,}2$ » sans pouvoir dire ce " +
             "que ce nombre représente — ni ce qu'il devient dans le temps, ni ce qu'il dit du " +
             "système.",
      cause: "L'étudiant a raison sur un point, et c'est ce qui rend l'erreur tenace : il a bien " +
             "franchi l'étape difficile. Passer de l'équation différentielle à l'expression " +
             "algébrique est le geste nouveau du chapitre, et il demande un vrai effort. Ce qui " +
             "manque, c'est de comprendre que <strong>$Y(p)$ n'est pas une réponse</strong> : " +
             "c'est une écriture intermédiaire, dans un domaine où la variable $p$ ne représente " +
             "rien d'observable — on ne mesure pas des $p$ à l'oscilloscope. La méthode de Laplace " +
             "est un <strong>aller-retour</strong>, et s'arrêter à mi-chemin revient à traduire " +
             "un texte en une langue tierce sans le ramener. Les douze exercices, qui s'arrêtent " +
             "tous dans le domaine de $p$ et n'en reviennent jamais, renforcent activement cette " +
             "habitude.",
      remede: "Dessiner le <strong>schéma de l'aller-retour</strong> au tableau, une fois, et le " +
              "laisser pendant tout le chapitre : équation différentielle en $t$ → (transformée) → " +
              "équation algébrique en $p$ → (résolution algébrique) → $Y(p)$ → (éléments simples " +
              "puis transformée inverse) → $y(t)$. Le schéma montre d'un coup que $Y(p)$ est " +
              "<strong>au milieu</strong>, et que le travail n'est pas fini. C'est l'outil le plus " +
              "rentable du chapitre.<br/><br/>" +
              "Réclamer une <strong>phrase de conclusion dans le domaine du temps</strong>, " +
              "toujours : « le condensateur se charge exponentiellement vers $5$ V avec une " +
              "constante de temps de $1$ s » plutôt que « $U_C(p) = \\dfrac{5}{p(p+1)}$ ». C'est ce " +
              "que l'épreuve attend, c'est ce que l'exemple résolu du cours écrit en toutes " +
              "lettres, et c'est la seule forme qu'un collègue d'atelier peut " +
              "utiliser.<br/><br/>" +
              "Montrer enfin <strong>l'exception qui confirme la règle</strong>, parce qu'elle est " +
              "au programme et qu'elle est très utile : le <strong>théorème de la valeur " +
              "finale</strong>, $\\lim_{t \\to +\\infty} y(t) = \\lim_{p \\to 0} pY(p)$, permet de " +
              "connaître la valeur d'équilibre <strong>sans revenir</strong> dans le domaine du " +
              "temps. C'est un raccourci légitime — et c'est la question 3 du devoir. Mais il " +
              "donne seulement la valeur finale, pas la façon d'y arriver : pour savoir si le " +
              "système y arrive vite, lentement, ou en oscillant, il faut faire le retour " +
              "complet. En automatique, c'est justement le temps de réponse et le dépassement qui " +
              "font accepter ou refuser un réglage.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 9 est le
         courant transitoire d'un moteur électrique à sa mise sous tension,
         terme en e^(2t), évalué en p = 7, réponse 0,2. Le renvoi est
         utilisable pour cette erreur alors même que tous les exercices
         partagent le même moule, et c'est assumé : l'erreur ne porte pas sur
         le RÉSULTAT (0,2 sera juste) mais sur la LECTURE, et l'enseignant
         peut exiger la traduction dans le domaine du temps sur cet énoncé
         précis.
         Choix du 9 plutôt qu'un autre, pour trois raisons de contenu :
           - le contexte, un courant transitoire de moteur à la mise sous
             tension, est le seul du tirage où la grandeur physique
             observable est NOMMÉE et MESURABLE (un courant en ampères, qu'on
             voit à la pince ampèremétrique). La question « et dans le temps,
             ce courant fait quoi ? » s'y pose donc naturellement, alors
             qu'elle est plus abstraite sur un « filtre actif » ou un
             « système asservi » ;
           - c'est un phénomène que tout étudiant d'électrotechnique a
             observé : l'appel de courant à la mise sous tension d'un moteur,
             qui fait parfois déclencher la protection. Le retour au domaine
             temporel a donc une contrepartie concrète immédiate ;
           - la réponse 0,2 est un nombre rond et sans intérêt en soi, ce qui
             sert le propos : il est manifeste que ce 0,2 ne dit rien sur le
             moteur, et c'est précisément le point du remède.
         Distinct des renvois des erreurs 2 (exercice 1) et 3 (exercice 5),
         conformément à la règle du projet. */
      exercice: { type: "exercice", n: 9 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\mathcal{L}\{3e^{-2t}\}$, valeur en $p = 5$. Application du tableau
          des transformées avec un coefficient et un exposant négatif (donc
          le double signe de l'erreur 2 de cette fiche), puis évaluation
          numérique. Aucun choix de méthode : « calculer ».
     Q2 — $\mathcal{L}\{f'(t)\}$ est : $pF(p)$, $pF(p) - f(0)$, $F(p)/p$,
          $F(p) + f(0)$ ? Aucun calcul : il faut reconnaître la formule
          exacte parmi quatre variantes très proches, dont la première est
          précisément la version tronquée que l'erreur 1 décrit. C'est une
          restitution plus qu'une déduction — la formule est au tableau ou
          elle ne l'est pas — et l'appliquer est une procédure connue :
          « calculer ».
     Q3 — $y' + 3y = 6$, $y(0) = 0$ : exprimer $Y(p)$ puis calculer la limite
          par le théorème de la valeur finale, qui est DONNÉ dans l'énoncé.
          C'est la question la plus complète du devoir : il faut transformer
          l'équation différentielle (donc traduire un problème d'un domaine
          dans un autre), isoler $Y(p)$, puis appliquer le théorème. La mise
          en équation dans le domaine de $p$ est le vrai travail, et c'est la
          seule question du devoir qui la demande : « modéliser ».
     Q4 — $\mathcal{L}^{-1}\{5/(p^2+25)\}$ : $5\cos(5t)$, $\sin(5t)$,
          $5\sin(5t)$, $e^{-5t}$ ? Il faut reconnaître la forme
          $\omega/(p^2+\omega^2)$ dans l'expression donnée, identifier
          $\omega = 5$, et voir que le $5$ du numérateur EST le $\omega$ et non
          un coefficient multiplicateur — c'est exactement ce que les deux
          premiers distracteurs testent. Ce n'est pas un calcul mais un
          appariement de forme suivi d'une déduction : « raisonner ».
     Q5 — $Y(p) = 4/((p+1)(p+3))$ : décomposer en éléments simples et calculer
          $y(1)$. Procédure en trois étapes — décomposition, transformée
          inverse, évaluation numérique — toutes au programme et sans choix de
          méthode : « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, modéliser 1, raisonner 1.
     « chercher », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de produire ou lire un
     graphique, ni de rédiger une explication. C'est un constat sur les cinq
     énoncés, pas un choix — et il rejoint celui du corpus entier, dont les
     130 questions sont toutes `numeric` ou à choix multiple.

     À signaler, et c'est la remarque la plus importante de cette rubrique
     pour le dernier chapitre de l'ouvrage : la Q3 est la SEULE question de
     tout le chapitre à partir d'une équation différentielle, c'est-à-dire la
     seule à évaluer ce pour quoi la transformée de Laplace existe. Les douze
     exercices ne le font jamais (voir la `note`), la Q1 et la Q5 partent
     d'expressions déjà écrites, et la Q4 est un appariement de tableau. Un
     étudiant qui n'aurait fait que les exercices découvrirait donc l'objet du
     chapitre à la troisième question du devoir. */
  competences: {
    evaluation: ["calculer", "calculer", "modéliser", "raisonner", "calculer"]
  }
};
