/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-logarithme.prof.js
   Fiche professeur du chapitre « Fonction logarithme népérien » (terminale),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales).

   POINT D'ATTENTION ÉDITORIAL : ce chapitre RECOUVRE partiellement le
   chapitre 1 du livre (« Fonctions Exponentielle et Logarithme »). Le champ
   `note` ci-dessous dit à l'enseignant, en clair, ce que chacun traite, ce
   qu'il ne traite pas, et dans quel ordre les prendre. La fiche du chapitre
   1 porte le renvoi symétrique. Les deux chapitres sont volontairement
   CONSERVÉS : en supprimer un décalerait la numérotation de tout l'ouvrage.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-logarithme"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 1 (fonctions exponentielle et logarithme) : le logarithme népérien
     est DÉFINI comme la réciproque de l'exponentielle, et chaque résolution
     d'équation du chapitre repose sur $e^{\ln x} = x$. Sans l'exponentielle,
     $\ln$ n'a littéralement pas de définition disponible : ce n'est pas un
     prérequis de confort, c'est le seul prérequis possible.

     Le chapitre 5 (compléments sur la dérivation) n'est PAS déclaré, bien
     que la banque dérive $\ln(ax+b)$ : la règle $(\ln u)' = u'/u$ est donnée
     telle quelle dans le formulaire du chapitre, et l'exercice correspondant
     se traite sans rien connaître d'autre des composées. Le déclarer serait
     un prérequis décoratif, et le cahier des charges demande les prérequis
     RÉELS. */
  prerequis: [1],

  /* Rang conseillé (2026-09-14) : rang 9.

     Le logarithme népérien vient nécessairement APRÈS l'exponentielle
     (rang 7), dont il est la réciproque, et il gagne à venir après que
     l'élève a EU BESOIN de lui — c'est-à-dire après les calculs de demi-vie
     et de temps de doublement du chapitre 1.

     Il vient AVANT les équations différentielles (rang 10), où il sert à
     retrouver une durée à partir d'un état, et avant l'étude de fonctions
     qui mobilise les croissances comparées.

     Le LIVRE le range en chapitre 6, mais l'ordre du livre est un rangement
     par domaine : le prendre en sixième position sans avoir traité
     l'exponentielle du chapitre 1 rendrait la définition même de $\ln$
     inaccessible. */
  rangConseille: 9,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse ».
  attendus: [
    "Utiliser les propriétés algébriques du logarithme népérien : ln(ab), ln(a/b), ln(a^n)",
    "Calculer la dérivée de ln(u) et étudier les variations d'une fonction contenant un logarithme",
    "Résoudre une équation ou une inéquation contenant un logarithme, en précisant le domaine",
    "Utiliser les croissances comparées pour déterminer une limite en plus l'infini",
    "Reconnaître la fonction logarithme népérien comme réciproque de la fonction exponentielle"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe.

     C'EST ICI QUE SE RÈGLE LE CHEVAUCHEMENT avec le chapitre 1. Le texte
     est le pendant de celui de la fiche du chapitre 1 : même partage, même
     ordre conseillé, dit du point de vue de ce chapitre-ci. */
  note: "Les propriétés algébriques du logarithme, sa dérivée, les croissances comparées et la " +
        "résolution d'équations et d'inéquations sont tous au programme de terminale, enseignement " +
        "de spécialité.<br/><br/>" +
        "<strong>Ce chapitre et le chapitre 1 se recouvrent : il faut le savoir avant de préparer " +
        "sa progression.</strong><br/><br/>" +
        "Les deux parlent du logarithme, mais ils n'en parlent pas de la même manière, et aucun des " +
        "deux ne rend l'autre inutile.<br/><br/>" +
        "<strong>Ce chapitre-ci</strong> étudie le logarithme népérien <strong>pour lui-même</strong> : " +
        "d'où viennent $\\ln(ab) = \\ln a + \\ln b$ et ses variantes, pourquoi sa dérivée vaut " +
        "$\\frac{1}{x}$, comment il se comporte face à une puissance (croissances comparées), et " +
        "comment résoudre une équation ou une inéquation qui en contient — domaine de définition " +
        "compris. C'est un chapitre d'ANALYSE.<br/><br/>" +
        "<strong>Le chapitre 1</strong> traite l'exponentielle comme modèle des phénomènes à taux " +
        "proportionnel — demi-vie, décroissance radioactive, croissance de population — et n'appelle " +
        "le logarithme que comme outil d'inversion. Il traite en revanche le logarithme " +
        "<strong>DÉCIMAL</strong>, que celui-ci n'aborde pas : pH, décibels, échelles où une unité " +
        "vaut un facteur $10$. C'est un chapitre de MODÉLISATION.<br/><br/>" +
        "<strong>Ce qui se recouvre réellement</strong> tient en deux points : la relation de " +
        "réciprocité ($\\ln(e^x) = x$ et $e^{\\ln x} = x$), énoncée dans les deux, et la résolution " +
        "de $e^{kt} = c$, présente dans les deux banques d'exercices. Le recouvrement est donc " +
        "réel, mais mince, et il n'est pas une redite : là-bas l'équation sert à trouver une durée, " +
        "ici elle est un exercice de technique.<br/><br/>" +
        "<strong>Ordre conseillé : le chapitre 1 d'abord, celui-ci ensuite.</strong> C'est la " +
        "raison d'être du rang conseillé $9$. Un élève qui a déjà eu besoin du logarithme pour " +
        "trouver au bout de combien de jours il reste $10$ mg d'iode arrive ici avec une question " +
        "posée. Dans l'ordre inverse, les propriétés algébriques de $\\ln$ tombent sans motif, et " +
        "c'est la configuration où l'erreur $\\ln(a+b) = \\ln a + \\ln b$ s'installe le plus " +
        "durablement.<br/><br/>" +
        "<strong>Deux points débordent enfin.</strong> La <strong>dérivée logarithmique</strong>, " +
        "citée dans les définitions comme technique pour dériver des produits complexes, n'est pas " +
        "exigible en terminale : c'est une ouverture, à traiter ou non selon le groupe. Et " +
        "l'échelle de <strong>Richter</strong>, qui ouvre le « Découvrir », emploie en réalité le " +
        "logarithme décimal et non le népérien — la distinction n'a pas d'importance pour " +
        "l'argument développé (une échelle qui change les produits en sommes), mais un élève " +
        "attentif peut la relever, et il aura raison.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
     y répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous
       ont tous été vérifiés contre le tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions plafonnées à 3), le 2026-09-14. */
  erreurs: [
    {
      titre: "Écrire $\\ln(a + b) = \\ln a + \\ln b$",
      eleve: "Pour simplifier $\\ln(5 + e)$, l'élève écrit $\\ln 5 + \\ln e = \\ln 5 + 1$. De même, " +
             "il « simplifie » $\\ln(2 + 3)$ en $\\ln 2 + \\ln 3$, soit $1{,}79$ au lieu de " +
             "$1{,}61$.",
      cause: "La formule correcte, $\\ln(ab) = \\ln a + \\ln b$, a une forme très mémorable : " +
             "« dedans ça se colle, dehors ça s'additionne ». Ce qui ne se retient pas, c'est " +
             "l'<strong>opération</strong> qui se trouve dedans — un signe de multiplication, qu'on " +
             "n'écrit d'ailleurs même pas la plupart du temps, et qu'un signe $+$ remplace sans " +
             "que l'œil s'en alarme.<br/><br/>" +
             "Plus profondément, l'élève applique une règle de <strong>distributivité</strong>, " +
             "réflexe massivement installé depuis la quatrième. Or aucune fonction n'est " +
             "distributive sur l'addition : c'est vrai pour $\\ln$, mais aussi pour la racine, le " +
             "carré, le sinus. Il ne se trompe pas sur le logarithme, il se trompe sur ce qu'est " +
             "une fonction.",
      remede: "Le contre-exemple numérique suffit à réfuter, et il ne coûte rien : $\\ln(1 + 1) = " +
              "\\ln 2 \\approx 0{,}693$, tandis que $\\ln 1 + \\ln 1 = 0$. Le faire calculer, pas " +
              "le montrer.<br/><br/>" +
              "Mais réfuter ne suffit pas à corriger : il faut aussi montrer ce que la formule dit " +
              "<strong>vraiment</strong>, sans quoi l'élève retient seulement « il ne faut pas " +
              "faire ça » et le refera dès qu'il aura oublié l'interdiction. C'est l'objet du " +
              "premier schéma secondaire du cours (« Ce que vaut vraiment $\\ln(2+3)$ ») : on y " +
              "empile les hauteurs $\\ln 2$ et $\\ln 3$, on suit le trait horizontal vers la " +
              "droite, et il touche la courbe en $6$ — pas en $5$. La formule n'est pas fausse, " +
              "elle porte simplement sur $2 \\times 3$.<br/><br/>" +
              "Élargir enfin le propos au-delà du chapitre, pour que la leçon serve : faire " +
              "vérifier que $\\sqrt{9 + 16} \\neq \\sqrt{9} + \\sqrt{16}$ ($5$ contre $7$), et que " +
              "$(2 + 3)^2 \\neq 2^2 + 3^2$ ($25$ contre $13$). La règle générale à énoncer : " +
              "<strong>une fonction ne se distribue pas sur une somme</strong>, jamais.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 2
         demande d'écrire $\ln(5) + \ln(7)$ sous la forme $\ln(N)$. Le
         corrigé donne la bonne réponse (35) ET rappelle explicitement que ce
         n'est pas 12 : les deux nombres sont côte à côte, ce qui est la
         disposition la plus efficace pour fixer la distinction. Tâche créée
         ce jour ; la banque d'origine ne travaillait aucune propriété
         algébrique. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier les conditions d'existence, et garder une racine impossible",
      eleve: "Pour $\\ln(x) + \\ln(x-3) = \\ln(4)$, l'élève trouve correctement $x = 4$ et " +
             "$x = -1$, puis annonce deux solutions. La seule solution est $4$ : en $-1$, " +
             "l'expression de départ n'existe pas.",
      cause: "L'erreur n'est dans <strong>aucune</strong> de ses lignes : chaque étape est exacte. " +
             "Elle est dans une ligne absente, et c'est ce qui la rend si difficile à voir pour " +
             "lui — relire son calcul ne sert à rien.<br/><br/>" +
             "Ce qui se passe est subtil : en regroupant les deux logarithmes puis en identifiant " +
             "les arguments, il obtient un polynôme qui, lui, est défini partout. La contrainte a " +
             "été <strong>effacée par le calcul</strong>, sans laisser de trace. Le polynôme ne " +
             "sait rien du logarithme dont il est issu.",
      remede: "Déplacer le geste, plutôt que d'ajouter une vérification à la fin. Imposer d'écrire " +
              "le domaine en <strong>première ligne</strong>, avant tout calcul, et de l'encadrer. " +
              "Un domaine posé à la fin est un domaine qu'on oublie ou qu'on bâcle ; un domaine " +
              "posé en premier élimine la racine impossible en une seconde, sans qu'on ait à se " +
              "rappeler pourquoi.<br/><br/>" +
              "Pour que la consigne soit comprise et non subie, s'appuyer sur le troisième schéma " +
              "secondaire du cours (« Une solution qui sort du domaine de définition »). On y voit " +
              "les deux courbes commencer l'une après $0$, l'autre après $3$, et toute la zone " +
              "gauche grisée. La racine rejetée y tombe en pleine zone grise : elle ne « ne marche " +
              "pas », elle <strong>n'a pas de sens</strong>. La nuance est celle qui fait retenir " +
              "la règle.<br/><br/>" +
              "Installer enfin le test de contrôle, qui ne coûte que dix secondes : reporter chaque " +
              "racine dans l'équation <strong>initiale</strong>, jamais dans le polynôme. Ici, " +
              "$\\ln(-1) + \\ln(-4)$ ne s'écrit même pas, et l'élève le voit immédiatement.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 5
         est « $\ln(x) + \ln(x-3) = \ln(4)$ », dont les racines sont 4 et -1.
         Son indication demande explicitement de commencer par le domaine, et
         son corrigé affiche la racine rejetée plutôt que de la passer sous
         silence. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier le numérateur en dérivant $\\ln(u)$",
      eleve: "Pour $f(x) = \\ln(4x + 4)$, l'élève écrit $f'(x) = \\dfrac{1}{4x+4}$ et annonce " +
             "$f'(1) = 0{,}125$ au lieu de $0{,}5$ : il a perdu le facteur $4$.",
      cause: "$(\\ln x)' = \\dfrac{1}{x}$ est la formule la plus simple du chapitre, et c'est " +
             "justement pour cela qu'elle s'applique de travers : l'élève la reconnaît d'un coup " +
             "d'œil, il voit un logarithme et écrit $1$ sur son contenu.<br/><br/>" +
             "La forme $\\dfrac{u'}{u}$ demande, elle, de distinguer ce qu'il y a dedans de ce " +
             "qu'il y a dehors — c'est-à-dire de voir une <strong>composée</strong> là où " +
             "l'écriture n'affiche aucun signe d'opération.",
      remede: "Réutiliser le geste de lecture installé au chapitre 5, sans le réinventer : " +
              "« qu'est-ce que je ferais en dernier si je calculais cette valeur à la " +
              "calculatrice ? ». Pour $\\ln(4x+4)$ : je calculerais d'abord $4x + 4$, puis " +
              "j'appliquerais $\\ln$. Deux étapes, donc une composée, donc un facteur à ne pas " +
              "perdre.<br/><br/>" +
              "Donner ensuite un contrôle immédiat, applicable à toute dérivée de logarithme : " +
              "<strong>le numérateur doit être la dérivée du dénominateur</strong>. Si le " +
              "numérateur vaut $1$ alors que le dénominateur contient un $x$ affecté d'un " +
              "coefficient, quelque chose manque. Ce test se fait à l'œil, sans recalculer.<br/><br/>" +
              "Une remarque qui aide certains élèves : $\\ln(4x+4) = \\ln 4 + \\ln(x+1)$ par la " +
              "propriété du produit. En dérivant cette seconde écriture on trouve " +
              "$\\dfrac{1}{x+1}$, qui est bien égal à $\\dfrac{4}{4x+4}$. Les deux chemins " +
              "concordent — et cette concordance est un excellent argument pour montrer que la " +
              "règle $\\dfrac{u'}{u}$ n'est pas une complication arbitraire.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 1
         demande $f'(1)$ pour $f(x) = \ln(4x + 4)$, c'est-à-dire exactement
         la forme décrite. Le coefficient 4 est assez grand pour que l'écart
         entre la bonne valeur (0,5) et la valeur fautive (0,125) soit d'un
         facteur 4, donc visible. Tâche créée ce jour : la règle figurait au
         quiz et dans les définitions, mais aucun exercice ne la faisait
         travailler. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ne pas voir que le logarithme sert à faire descendre une inconnue",
      eleve: "Pour résoudre $4e^{0{,}5x} = 16$, l'élève tente de « diviser par l'exponentielle », " +
             "ou écrit $0{,}5x = 16/4 = 4$ puis $x = 8$. La bonne réponse est " +
             "$x \\approx 2{,}77$.",
      cause: "L'inconnue est <strong>dans l'exposant</strong>, position dans laquelle il n'a jamais " +
             "eu à isoler quoi que ce soit. Tous ses gestes — soustraire, diviser, prendre la " +
             "racine — agissent sur la base, jamais sur l'exposant.<br/><br/>" +
             "Il ne lui manque donc pas une règle de plus. Il lui manque de savoir que le " +
             "logarithme est précisément <strong>l'outil fait pour cela</strong>, et pas seulement " +
             "une fonction de plus à étudier. Tant que $\\ln$ reste pour lui un objet d'étude, il " +
             "ne lui vient pas à l'esprit de s'en servir comme d'un outil.",
      remede: "Faire la démonstration de l'utilité avant la théorie : poser l'équation au tableau, " +
              "laisser chercher deux minutes, laisser constater l'impasse. C'est cette impasse " +
              "vécue qui donne au logarithme son statut d'outil, et non la phrase « $\\ln$ est la " +
              "réciproque de $\\exp$ », qui ne suggère aucun usage.<br/><br/>" +
              "Fixer ensuite un ordre de gestes, toujours le même, et le faire écrire : " +
              "<strong>isoler l'exponentielle</strong> (elle doit être seule d'un côté), " +
              "<strong>prendre le logarithme des deux membres</strong>, <strong>isoler " +
              "$x$</strong>, qui est maintenant un facteur ordinaire. La première étape est celle " +
              "qu'on saute, et sans elle la deuxième ne donne rien.<br/><br/>" +
              "Installer enfin un contrôle de vraisemblance : ici $\\dfrac{16}{4} = 4$, et comme " +
              "$e^1 \\approx 2{,}7$ tandis que $e^{1{,}5} \\approx 4{,}5$, l'exposant $0{,}5x$ doit " +
              "tomber entre $1$ et $1{,}5$, donc $x$ entre $2$ et $3$. Un élève qui pose cet " +
              "encadrement avant de calculer élimine d'emblée la réponse $8$.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 7
         est « $4e^{0,5x} = 16$ », exactement le cas décrit, et son corrigé
         sépare les trois gestes en trois lignes. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 simplifier $\ln(e^5)$ : application directe de la réciprocité, donc
        « calculer ».
     Q2 déduire $a > b$ du seul signe de $\ln a - \ln b$, sans calculer aucun
        logarithme. L'élève passe d'une propriété de la fonction (stricte
        croissance, zéro en 1) à une conclusion sur ses arguments : c'est
        « raisonner ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant de
        simplifier $\ln 12 - \ln 4$, application immédiate d'une propriété.
     Q3 dériver $\ln(3x+2)$ et évaluer en $0$ : donc « calculer ».
     Q4 trouver le couple d'entiers pour lequel l'égalité fautive
        $\ln(a+b) = \ln a + \ln b$ se trouve malgré tout vérifiée. Aucune
        méthode n'est donnée, et rien dans le cours n'y prépare : il faut
        poser $a + b = ab$ et l'explorer, par essais ou par divisibilité.
        C'est « chercher ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant si
        $\ln(a+b) = \ln a + \ln b$ est vraie, avec une bonne réponse
        devinable sans comprendre.
     Q5 dire à un camarade ce qui manque à sa copie, alors que chacune de ses
        lignes de calcul est exacte. L'élève ne produit aucun nombre : il
        localise une étape absente et la formule. C'est « communiquer ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant de
        résoudre $\ln(x) = 3$, un troisième calcul et le plus simple.

     « Modéliser » et « représenter » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande de traduire une situation concrète en écriture
     mathématique, ni de lire ou produire une représentation graphique. Les
     deux compétences sont portées par d'autres chapitres du niveau, et
     notamment par le chapitre 1, où le pH et la radioactivité les appellent
     naturellement. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "chercher", "communiquer"]
  }
};
