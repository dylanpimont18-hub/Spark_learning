/* =========================================================
   Spark Learning – js/data/prof/bts/bts-fonctions-reelles.prof.js
   Fiche professeur du chapitre « Fonctions d'une variable réelle »
   (programme BTS), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 18 (ce chapitre est le dix-neuvième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   21 énoncés tirés, dont 12 numérotés et 9 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et un moule réduit à l'extrême. Chacun
   donne une homographique $f(x) = \dfrac{ax + b}{x + 1}$ et demande
   $\lim_{x \to +\infty} f(x)$ — dont la réponse est TOUJOURS $a$, le
   coefficient du numérateur, puisque le dénominateur est invariablement
   $x + 1$. Seuls le contexte (vitesse limite, rendement, coût moyen,
   tension, température, débit, concentration) et le couple $(a,b)$ changent,
   avec $a \in \{2, 4, 6\}$ et $b \in \{1, 2, 3\}$.

   Conséquence qu'il faut avoir en tête avant d'écrire la moindre
   remédiation : un étudiant attentif repère en trois exercices que la
   réponse est « le nombre devant le $x$ du haut », et traite les neuf
   suivants sans faire aucune mathématique. La règle des termes dominants
   n'est jamais mise à l'épreuve : le degré est toujours 1 en haut et 1 en
   bas, le coefficient du dénominateur toujours 1.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : le DOMAINE DE DÉFINITION (D1 ; conditions du logarithme
   et de la racine), la limite en un point fini, l'ASYMPTOTE VERTICALE (D3),
   la DISCONTINUITÉ EFFAÇABLE (D4, qui est le piège du cours), le TABLEAU DE
   VARIATIONS et le signe de $f'$ (méthode 3), l'asymptote oblique. Or
   quatre des cinq questions de l'évaluation portent là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-fonctions-reelles"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli. Ce
     chapitre ouvre le bloc analyse et se veut lui-même une REMISE À NIVEAU
     interne (son sous-titre le dit : « Révisions et compléments ») : il ne
     s'appuie sur rien du dossier, il fournit au contraire l'appui des
     chapitres 6 et 7.

     Candidats examinés et ÉCARTÉS :
     - ch. 6 (Dérivation appliquée) et ch. 7 (Intégrales appliquées) : le
       lien est massif mais il joue dans l'AUTRE sens — ce sont eux qui
       s'appuient sur ce chapitre-ci, et leurs fiches portent le prérequis
       vers le 5. Le déclarer ici créerait un cycle que `validerPrerequis`
       refuse, à juste titre.
     - ch. 13 (Transformée de Laplace) : la fonction de transfert $H(p)$ est
       une fraction rationnelle et ses PÔLES sont exactement les valeurs
       exclues du domaine étudiées ici. Le lien est réel et rarement fait en
       classe — mais, là encore, c'est Laplace qui s'appuie sur ce
       chapitre-ci, et son rang (13) est bien supérieur.
     - ch. 1 (Complexes), ch. 2 (Équations différentielles), ch. 3
       (Statistiques), ch. 4 (Loi normale) : ce sont les quatre seuls
       chapitres que le rang conseillé autoriserait, et aucun n'intervient
       dans l'étude d'une fonction d'une variable réelle.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : les fractions et le
     calcul littéral, la résolution d'inéquations (pour le domaine :
     $3x - 6 > 0$), le LOGARITHME et l'EXPONENTIELLE (cités dans D1, dans les
     formules de dérivation et dans la question 1 du devoir) viennent tous de
     la REMISE À NIVEAU (`bts-prep`), qui est dans un AUTRE dossier.
     `prerequis` ne vise qu'un chapitre du même dossier, donc rien ne les
     affichera. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 5 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 19 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 5 est celui du livre, et les deux ordres coïncident.

     Le placement ouvre le bloc analyse : fonctions (5), dérivation appliquée
     (6), intégrales appliquées (7). Il doit précéder les deux suivants, qui
     réutilisent immédiatement la dérivée et le signe de $f'$ sans les
     redéfinir — et le chapitre 6 le déclare explicitement en prérequis. Le
     déplacer plus tard obligerait à déplacer tout le bloc. */
  rangConseille: 5,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et l'étude de fonctions est l'un des rares points
     présents dans tous les groupements — mais avec des exigences très
     inégales sur les limites et les formes indéterminées.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« domaine », « limites et asymptotes », « variations ») et n'inventent
     aucune spécialité. La `note` le signale explicitement, pour qu'un
     enseignant vérifie le référentiel de SA filière avant de les citer. */
  attendus: [
    "Déterminer le domaine de définition d'une fonction et justifier les valeurs exclues",
    "Calculer les limites aux bornes du domaine et en déduire les asymptotes de la courbe",
    "Établir le tableau de variations d'une fonction à partir du signe de sa dérivée"
  ],

  note: "L'étude d'une fonction d'une variable réelle — domaine, limites, asymptotes, tableau de " +
        "variations — relève du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. L'étude de fonctions figure partout, mais les exigences sur les formes " +
        "indéterminées et la règle de L'Hôpital — citée dans le cours — varient beaucoup d'un " +
        "groupement à l'autre.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Ce chapitre ouvre le " +
        "bloc analyse et ne s'appuie sur aucun chapitre qui le précède : la colonne « S'appuie " +
        "sur » y portera un tiret, ce qui est exact pour cette partie-là. Il suppose en revanche " +
        "de savoir résoudre une <strong>inéquation</strong> ($3x - 6 > 0$ dans le devoir), manier " +
        "les <strong>fractions</strong>, et connaître le <strong>logarithme</strong> et " +
        "l'<strong>exponentielle</strong>, qui sont dans la <strong>remise à niveau</strong>, " +
        "l'autre partie de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même " +
        "partie, <strong>rien ne le montrera</strong> : si le groupe bute sur le domaine de " +
        "$\\ln(3x - 6)$, c'est là qu'il faut revenir, pas dans ce chapitre.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "elle est sévère.</strong> Les douze énoncés numérotés sont <strong>tous le même " +
        "exercice</strong> : une homographique $\\dfrac{ax + b}{x + 1}$ est donnée et l'on demande " +
        "sa limite en $+\\infty$. Le dénominateur est <strong>invariablement $x + 1$</strong>, si " +
        "bien que la réponse est <strong>toujours $a$</strong>, le nombre écrit devant le $x$ du " +
        "haut. Un étudiant attentif le repère au troisième exercice et traite les neuf suivants " +
        "sans faire une seule mathématique — et il aura raison douze fois sur douze.<br/><br/>" +
        "Ne sont travaillés nulle part : le <strong>domaine de définition</strong>, la limite en " +
        "un point fini, l'<strong>asymptote verticale</strong>, la <strong>discontinuité " +
        "effaçable</strong> (le piège du cours !), le <strong>tableau de variations</strong> et le " +
        "signe de $f'$. Or ce sont <strong>quatre des cinq questions du devoir noté</strong>. " +
        "L'exemple résolu du cours (le rendement $\\eta(x) = 100x/(x+5)$) fait, lui, le chemin " +
        "complet : domaine, limite, asymptote, dérivée, sens de variation, interprétation. " +
        "<strong>C'est lui qu'il faut prendre comme modèle de la tâche attendue</strong>, et non " +
        "les exercices. Prévoir impérativement trois ou quatre énoncés à dénominateur non trivial " +
        "et à domaine contraint, que le manuel ne fournit pas.",

  erreurs: [
    {
      titre: "Simplifier les $x$ dans une fraction, ou remplacer $\\infty$ par un nombre",
      eleve: "Sur $\\dfrac{4x + 2}{x + 1}$, l'élève « simplifie les $x$ » et annonce " +
             "$\\dfrac{4 + 2}{1 + 1} = 3$. Ou bien il écrit $\\dfrac{\\infty}{\\infty} = 1$. Ou " +
             "encore il remplace $x$ par un très grand nombre choisi au hasard et rend une valeur " +
             "approchée, $3{,}99$, qu'il donne comme résultat exact.",
      cause: "La simplification est un geste ancien, puissant et le plus souvent juste : on barre " +
             "ce qui est en haut et en bas. Ce qui manque n'est pas le geste mais sa " +
             "<strong>condition</strong> — on ne simplifie que des FACTEURS, jamais des termes " +
             "d'une somme. Cette condition, apprise il y a longtemps, s'est effacée alors que le " +
             "geste est resté. Quant à $\\infty/\\infty = 1$, il vient d'une intuition raisonnable : " +
             "si le haut et le bas deviennent tous deux immenses, on croit qu'ils se compensent. " +
             "L'idée qu'<strong>il faut regarder à quelle VITESSE</strong> chacun grandit ne vient " +
             "pas spontanément — c'est précisément ce que le chapitre doit installer.",
      remede: "Faire <strong>factoriser par le terme dominant</strong>, méthode unique et toujours " +
              "valable, plutôt que de faire mémoriser un cas particulier : " +
              "$\\dfrac{4x + 2}{x + 1} = \\dfrac{x(4 + 2/x)}{x(1 + 1/x)} = \\dfrac{4 + 2/x}{1 + 1/x}$. " +
              "Là, le $x$ est bien un <strong>facteur</strong> : il se simplifie légitimement. Les " +
              "termes en $2/x$ et $1/x$ tendent vers $0$, et il reste $4/1 = 4$. Écrite ainsi, la " +
              "règle des termes dominants n'est plus une recette, c'est un résultat.<br/><br/>" +
              "Faire <strong>tester numériquement</strong> avant de conclure, machine en main : " +
              "$x = 10$ donne $3{,}82$, $x = 100$ donne $3{,}98$, $x = 1000$ donne $3{,}998$. La " +
              "valeur <strong>monte vers $4$ sans jamais l'atteindre</strong> — et cela règle deux " +
              "choses à la fois : la réponse $3$ est éliminée sans discussion, et l'étudiant " +
              "comprend qu'une valeur approchée ne se rend PAS comme résultat, elle confirme une " +
              "limite qui, elle, vaut exactement $4$.<br/><br/>" +
              "Relier enfin au <strong>sens métier</strong>, qui est l'intérêt réel du calcul : la " +
              "limite est une <strong>valeur de saturation</strong>. Un rendement qui tend vers " +
              "$4$, une vitesse limite, une température de consigne — ce sont des valeurs " +
              "<strong>jamais atteintes mais approchées d'aussi près qu'on veut</strong>. C'est " +
              "exactement ce que dit une asymptote horizontale, et c'est ce qui intéresse le " +
              "technicien : il n'y a pas de gain à espérer au-delà.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 18) : l'exercice 1 est la vitesse d'un mobile
         freiné, v(x) = (4x + 2)/(x + 1), limite 4. C'est le meilleur support
         de cette erreur, et les coefficients le justifient précisément :
           - la simplification fautive donne (4 + 2)/(1 + 1) = 3, un nombre
             ENTIER et plausible, distinct de la bonne réponse 4 mais pas
             absurde : l'erreur ne se voit donc pas à l'ordre de grandeur, ce
             qui est exactement ce qu'il faut pour justifier la factorisation.
             Sur l'exercice 4 ou 5 — (2x + 2)/(x + 1), limite 2 — la
             simplification fautive donnerait (2 + 2)/(1 + 1) = 2, soit LA
             BONNE RÉPONSE par accident : le support serait catastrophique,
             puisqu'il validerait la méthode fausse. Ce piège du tirage mérite
             d'être signalé à l'enseignant, et c'est la raison principale de
             ce choix ;
           - a = 4 et b = 2 sont distincts l'un de l'autre et du 1 du
             dénominateur, donc chaque nombre de la réponse est traçable ;
           - le contexte, une vitesse limite, rend la lecture par saturation
             immédiate : personne ne croit qu'un mobile freiné accélère
             indéfiniment.
         C'est en outre le premier énoncé du chapitre, donc celui sur lequel
         l'enseignant peut imposer la factorisation dès le départ. Distinct du
         renvoi de l'erreur 4 (exercice 3), conformément à la règle du
         projet. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'une valeur exclue du domaine donne toujours une asymptote verticale",
      eleve: "Sur $f(x) = \\dfrac{x^2 - 9}{x - 3}$, l'élève constate que $3$ annule le dénominateur " +
             "et conclut « asymptote verticale en $x = 3$ ». Il n'a pas remarqué que le numérateur " +
             "s'annule aussi : la fonction vaut $x + 3$ partout ailleurs, et sa limite en $3$ est " +
             "$6$, une valeur finie.",
      cause: "La règle « dénominateur nul, donc valeur interdite, donc la courbe explose » est " +
             "enseignée telle quelle au lycée, et elle est vraie dans l'immense majorité des cas " +
             "rencontrés. Elle a donc été validée des dizaines de fois avant d'être prise en " +
             "défaut. Ce qui manque est une <strong>distinction fine</strong> : « exclu du " +
             "domaine » et « la limite est infinie » sont deux choses différentes, et la première " +
             "n'entraîne pas la seconde. Cette distinction demande de regarder le NUMÉRATEUR, " +
             "c'est-à-dire de faire un pas de plus là où la règle apprise dit qu'on a fini. Chez un " +
             "public qui cherche des procédures fiables — et c'est rationnel quand on reprend des " +
             "études —, une règle qui a toujours marché ne se remet pas en question " +
             "spontanément.",
      remede: "Imposer un <strong>réflexe en deux temps</strong>, qui remplace la règle par une " +
              "vérification : quand une valeur annule le dénominateur, regarder aussitôt ce que " +
              "fait le <strong>numérateur</strong> en ce point. S'il ne s'annule pas, c'est bien " +
              "une asymptote verticale. S'il s'annule aussi, il y a un facteur commun à simplifier, " +
              "et l'on obtient un <strong>trou</strong> et non une asymptote. Deux cas, une " +
              "question.<br/><br/>" +
              "Faire <strong>factoriser systématiquement</strong> avant de conclure : " +
              "$\\dfrac{x^2 - 9}{x - 3} = \\dfrac{(x-3)(x+3)}{x - 3} = x + 3$ pour $x \\neq 3$. Une " +
              "fois la simplification écrite, il n'y a plus rien à discuter — la courbe est une " +
              "droite percée d'un point. Le tracé au tableau, avec le petit cercle vide en " +
              "$(3\\,;\\,6)$, ancre l'image mieux que n'importe quelle " +
              "formulation.<br/><br/>" +
              "Donner enfin la <strong>lecture en ingénierie</strong>, qui rend la distinction " +
              "utile plutôt que tatillonne : une asymptote verticale signale une " +
              "<strong>divergence physique</strong> — un courant qui explose à la résonance, une " +
              "pression qui s'emballe. Un trou signale au contraire une <strong>indétermination " +
              "de calcul sans conséquence physique</strong> : le système passe par là sans rien " +
              "remarquer, seule la formule refuse d'y répondre. Confondre les deux, c'est déclarer " +
              "critique un point de fonctionnement parfaitement sain — ou l'inverse.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés portent TOUS sur (ax + b)/(x + 1) et ne demandent
         que la limite en +∞. Le dénominateur x + 1 s'annule en x = -1, mais
           - aucun énoncé ne pose la question du domaine ni de la valeur
             interdite ;
           - aucun ne demande de limite en un point fini ;
           - x = -1 est de toute façon hors du domaine physique de tous les
             contextes (un temps, une charge, un nombre d'unités produites
             sont positifs), donc la question ne se pose même pas ;
           - et surtout, AUCUN des douze n'a de numérateur qui s'annule en
             même temps que le dénominateur : le cas du trou, qui est l'objet
             même de cette erreur, est structurellement absent du générateur.
         Pointer l'un des douze enverrait l'enseignant vers une remédiation
         qui n'en est pas une. La question 2 de l'évaluation la travaille
         exactement (c'est même l'énoncé cité ci-dessus), mais une remédiation
         ne renvoie jamais vers le devoir noté. Le remède ramène donc au cours
         — D4 et le piège du cours, qui portent tous deux sur ce point — et
         demande à l'enseignant de fabriquer le support. */
      exercice: null
    },
    {
      titre: "Lire le signe de $f'$ à l'envers, ou le lire sur $f$ au lieu de $f'$",
      eleve: "L'élève calcule $\\eta'(x) = \\dfrac{500}{(x+5)^2}$, constate qu'elle est positive, " +
             "et conclut que la fonction est décroissante. Ou bien il dresse son tableau de " +
             "variations en regardant le signe de $\\eta$ elle-même au lieu de celui de sa " +
             "dérivée.",
      cause: "Le lien « $f' > 0$ donc $f$ croissante » est une <strong>convention de lecture</strong> " +
             "entre deux objets différents, et rien dans les symboles ne la rend évidente : $f$ et " +
             "$f'$ se ressemblent à une apostrophe près, et le tableau de variations les fait " +
             "cohabiter sur deux lignes voisines. Pour quelqu'un qui n'a plus pratiqué depuis " +
             "plusieurs années, il reste souvent une association vague — « signe et variations, ça " +
             "va ensemble » — sans que le SENS de l'association soit mémorisé. S'y ajoute une " +
             "difficulté propre au tableau : on y écrit un signe sur une ligne et une flèche sur " +
             "l'autre, et il faut savoir laquelle se déduit de laquelle.",
      remede: "Revenir au <strong>sens physique de la dérivée</strong>, une fois, et l'écrire au " +
              "tableau : $f'$ est la <strong>vitesse de variation</strong>. Une vitesse positive, " +
              "c'est quelque chose qui <strong>augmente</strong> — comme un compteur kilométrique " +
              "dont l'aiguille de vitesse est positive. Formulé ainsi, le lien n'est plus une " +
              "convention à retenir mais une évidence, et il ne peut plus s'inverser.<br/><br/>" +
              "Imposer la <strong>discipline du tableau</strong> : ligne du signe de $f'$ " +
              "<strong>d'abord</strong>, flèches de $f$ <strong>ensuite</strong>, jamais " +
              "l'inverse. L'ordre d'écriture reproduit l'ordre de la déduction, et un tableau " +
              "rempli dans le bon ordre ne peut pas être faux dans ce sens-là.<br/><br/>" +
              "Utiliser enfin le <strong>cas particulier confortable</strong> que ce chapitre " +
              "offre et qu'il faut exploiter : quand la dérivée est une fraction de " +
              "<strong>carré</strong> — comme $\\dfrac{500}{(x+5)^2}$ — son signe est celui du seul " +
              "numérateur, puisqu'un carré est toujours positif. Ici $500 > 0$ : la fonction est " +
              "croissante sur tout son domaine, sans le moindre tableau. C'est un raccourci " +
              "légitime, et il revient très souvent sur les homographiques du BTS.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : aucun des
         douze exercices numérotés ne demande de dériver quoi que ce soit, ni
         de dresser un tableau de variations, ni de conclure sur un sens de
         variation. Les mots « dérivée », « croissante », « décroissante » et
         « variations » n'apparaissent dans AUCUN des douze énoncés : ils
         demandent tous une limite en +∞, et rien d'autre. L'élève ne peut
         donc pas rencontrer cette erreur en faisant les exercices — elle ne
         surgit qu'au devoir (question 4) et au chapitre 6, où le signe de f'
         devient l'outil principal. Pointer l'un des douze serait exactement
         le contresens que le projet interdit. Le seul support du livre est
         l'exemple résolu du cours (le rendement 100x/(x+5), dont la dérivée
         500/(x+5)² est justement une fraction de carré) : c'est vers lui que
         le remède ramène, et il porte en outre le raccourci du troisième
         paragraphe. */
      exercice: null
    },
    {
      titre: "Rendre une limite nue, sans la lire comme une saturation",
      eleve: "L'élève écrit « $4$ » et s'arrête là. Interrogé sur ce que ce nombre représente, il " +
             "ne sait pas dire s'il s'agit de m/s, de pourcents ou d'euros, ni si la vitesse " +
             "atteint réellement cette valeur ou s'en approche seulement — alors que l'énoncé " +
             "annonce explicitement qu'on cherche « sa vitesse limite ».",
      cause: "L'énoncé demande une limite et l'élève donne une limite : il répond exactement à ce " +
             "qu'on lui demande, et l'habitude scolaire veut que la réponse soit le résultat du " +
             "calcul. Ce n'est pas une négligence, c'est un <strong>contrat implicite</strong>. " +
             "Mais il y a une seconde cause, plus spécifique à cette notion : le mot « limite » " +
             "est employé en français courant dans le sens de « maximum qu'on atteint » (la " +
             "limitation de vitesse, on la touche). En mathématiques il désigne une valeur dont on " +
             "<strong>s'approche indéfiniment sans jamais y arriver</strong>. Les deux sens " +
             "s'opposent sur le point précis qui compte, et rien ne prévient l'étudiant du " +
             "changement.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur, son <strong>unité métier</strong>, et le mot " +
              "<strong>saturation</strong> ou son équivalent. « La vitesse du mobile tend vers " +
              "$4$ m/s sans jamais l'atteindre : c'est sa vitesse limite » plutôt que « $4$ ». " +
              "C'est ce que l'épreuve attend, et c'est ce qu'un rapport d'essai " +
              "contient.<br/><br/>" +
              "Faire nommer l'<strong>asymptote horizontale</strong> à chaque fois, même quand " +
              "l'énoncé ne le demande pas : la droite $y = 4$ est l'objet géométrique qui traduit " +
              "le résultat, et c'est sous ce nom que la question reviendra au devoir. Dix secondes " +
              "de plus, et l'exercice travaille deux notions au lieu d'une.<br/><br/>" +
              "Poser enfin la <strong>question de la valeur atteinte</strong>, qui a des " +
              "conséquences très concrètes : « à partir de quand est-on à moins de $1\\,\\%$ de la " +
              "limite ? ». C'est la vraie question du technicien — un système n'atteint jamais sa " +
              "valeur finale, on décide donc conventionnellement qu'il y est à $95\\,\\%$ ou à " +
              "$99\\,\\%$. Le temps de réponse d'un capteur, la montée en température d'un four, " +
              "la charge d'un condensateur : tous se spécifient ainsi, et jamais par la limite " +
              "elle-même.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 est le coût
         moyen de fabrication, c(x) = (4x + 3)/(x + 1) en euros, limite 4. Le
         renvoi est utilisable pour cette erreur alors même que tous les
         exercices partagent le même moule, et c'est assumé : l'erreur ne
         porte pas sur le RÉSULTAT (4 sera juste) mais sur la LECTURE, et
         l'enseignant peut exiger la phrase de conclusion sur cet énoncé
         précis. L'énoncé demande d'ailleurs littéralement « pour estimer le
         coût moyen en grande série », c'est-à-dire qu'il réclame déjà
         l'interprétation que l'élève omet : le renvoi est donc légitime au
         sens strict du projet, l'exercice EXIGE ce qu'on reproche à l'élève
         de ne pas faire.
         Choix du 3 plutôt que du 1 (déjà pris par l'erreur 1) et plutôt que
         des autres, pour une raison de contenu : c'est le seul contexte
         ÉCONOMIQUE du tirage, et le seul où la limite a une lecture de
         gestion immédiatement parlante — « en grande série, chaque pièce
         revient à 4 €, et descendre en dessous est impossible quel que soit
         le volume ». Cette conclusion-là, un étudiant de BTS tertiaire la
         formule spontanément, ce qui en fait un bon point de départ pour
         exiger la même chose sur les contextes physiques. Les exercices 2, 6,
         11 et 12 ont aussi a = 4 ou 6, mais leurs contextes (rendement, débit,
         température) se prêtent moins à une phrase courte. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — domaine de $f(x) = \ln(3x - 6)$, borne inférieure ? Le travail est
          de poser la condition d'existence du logarithme, puis de résoudre
          l'inéquation $3x - 6 > 0$. C'est une procédure connue appliquée à
          une expression donnée : « calculer ».
     Q2 — $\dfrac{x^2 - 9}{x - 3}$ admet-elle une asymptote verticale en $3$ ?
          Les quatre options sont autant de justifications concurrentes, dont
          deux sont vraies comme faits mais fausses comme raisons (« $f$ n'est
          pas définie en $3$ » est exact et ne prouve rien). Il faut donc
          juger la validité d'arguments, pas calculer : « raisonner ». C'est
          la question la plus exigeante du devoir.
     Q3 — $\lim_{x \to +\infty} \dfrac{5x^2 - 3x + 1}{2x^2 + x - 4}$. C'est la
          tâche des douze exercices, sur des degrés 2 au lieu de 1 : repérer
          les termes dominants et faire le quotient. Exécution d'une procédure
          connue : « calculer ».
     Q4 — si $f'(x) > 0$ sur $]a\,;\,b[$, alors $f$ est : les quatre options
          sont « décroissante », « croissante », « constante », « concave ».
          Il faut relier le signe de la dérivée aux variations, sans aucun
          calcul — c'est la déduction élémentaire du chapitre, et la quatrième
          option (« concave ») est là pour piéger celui qui confond $f'$ et
          $f''$. Jugement de validité : « raisonner ».
     Q5 — asymptote horizontale de $\dfrac{4x + 1}{x - 2}$ en $+\infty$. Même
          tâche que la Q3 et que les douze exercices, avec un dénominateur
          légèrement différent : « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 2. « chercher »,
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés.
     Le cas de « représenter » mérite un mot, parce qu'il est frappant : ce
     chapitre est celui des ASYMPTOTES et des TABLEAUX DE VARIATIONS,
     c'est-à-dire l'un des plus visuels du programme — et pas une seule de ses
     cinq questions ne demande de lire ni de produire un graphique ou un
     tableau. La Q4 elle-même, qui porterait naturellement sur un tableau de
     variations, est posée en pur énoncé verbal. C'est un constat sur les cinq
     questions, pas un choix d'étiquetage : le corpus entier est composé de
     questions `numeric` et à choix multiple, format qui exclut de fait le
     graphique. Un enseignant qui veut évaluer « représenter » devra ajouter
     sa propre question — un tableau de variations à compléter suffit. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "calculer"]
  }
};
