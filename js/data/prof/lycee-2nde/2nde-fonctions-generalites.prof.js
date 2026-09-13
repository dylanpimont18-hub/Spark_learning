/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-fonctions-generalites.prof.js
   Fiche professeur du chapitre « Généralités sur les fonctions » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE LE PLUS IMPORTANT DE L'ANNÉE, et la fiche le dit à l'enseignant
   plutôt que de le laisser le découvrir : tout ce qui suit en seconde, en
   première et en terminale — fonctions de référence, dérivation, suites,
   exponentielle — repose sur le vocabulaire posé ici. Un élève qui sort de
   ce chapitre en confondant image et antécédent traînera la confusion
   pendant trois ans.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-fonctions-generalites"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 3 (ensembles de nombres) : le domaine de définition s'écrit en
     intervalles, et la notion de valeur interdite suppose de savoir ce
     qu'est $\mathbb{R}$ privé d'un point. La banque de ce chapitre demande
     explicitement des valeurs interdites.

     ch. 4 (calcul algébrique) : calculer une image, c'est substituer puis
     réduire, y compris avec des nombres négatifs à parenthéser — geste qui
     échoue systématiquement quand le calcul algébrique n'est pas stabilisé.

     Le chapitre 5 (équations) n'est PAS retenu comme prérequis, bien que
     chercher un antécédent soit résoudre une équation : les équations
     rencontrées ici sont du premier degré le plus simple et se traitent au
     fil du chapitre. Le déclarer imposerait un ordre inutilement rigide. */
  prerequis: [3, 4],

  /* Rang conseillé (2026-09-13) : rang 4.

     Après le socle calculatoire (ensembles, calcul algébrique, équations) et
     AVANT tous les chapitres de fonctions, dont il fournit le vocabulaire :
     fonctions affines (rang 5), fonctions de référence (rang 6), droites et
     systèmes (rang 7).

     Le LIVRE le range en chapitre 6, après les fonctions affines qu'il place
     en chapitre 2. La progression conseillée inverse délibérément les deux :
     traiter les affines d'abord installe l'idée qu'une fonction EST une
     droite, et ce chapitre passe ensuite son temps à la défaire. */
  rangConseille: 4,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Fonctions », sous-partie « Généralités ».
  attendus: [
    "Déterminer l'image d'un nombre par une fonction définie par une expression",
    "Déterminer un antécédent en résolvant une équation",
    "Déterminer le domaine de définition d'une fonction, notamment en écartant les valeurs interdites",
    "Lire sur une représentation graphique images, antécédents et extremums",
    "Décrire le sens de variation d'une fonction et dresser son tableau de variations"
  ],

  note: "Tout le contenu de ce chapitre est au programme de seconde, et il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>C'est le chapitre le plus structurant de l'année, et il mérite qu'on lui " +
        "donne le temps qu'on aura gagné ailleurs.</strong> Le vocabulaire posé ici — image, " +
        "antécédent, domaine de définition, sens de variation, extremum — est utilisé sans " +
        "interruption jusqu'en terminale. Une confusion non traitée entre image et antécédent " +
        "ne se corrige plus d'elle-même : elle réapparaît en première sur les dérivées, puis " +
        "en terminale sur les fonctions réciproques.<br/><br/>" +
        "<strong>Sur la part de reprise.</strong> La notion de fonction est abordée dès la " +
        "troisième, mais bien plus superficiellement que pour les fonctions affines : l'élève " +
        "a surtout rencontré des tableaux de valeurs et le mot « image ». Le domaine de " +
        "définition, les antécédents multiples et le tableau de variations sont, eux, " +
        "réellement nouveaux. On ne peut donc pas traiter ce chapitre comme un rappel.<br/><br/>" +
        "<strong>Deux points de vigilance sur le rythme.</strong> D'abord, la lecture " +
        "graphique doit précéder le calcul et non l'inverse : un élève qui sait lire une " +
        "image sur une courbe comprend ce qu'il calcule ensuite. Ensuite, les fonctions " +
        "utilisées en exemple ici sont souvent du second degré ($-x^2 + 6x - 5$) ; c'est " +
        "légitime pour illustrer variations et extremums, mais il faut être explicite sur le " +
        "fait qu'on ne demande <strong>ni de les résoudre, ni d'en étudier la forme " +
        "canonique</strong>, qui relèvent de la première.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Échanger l'image et l'antécédent",
      eleve: "Sachant que $f(3) = 7$, l'élève affirme que « $7$ est un antécédent de $3$ », ou " +
             "cherche $f(7)$ quand on lui demande un antécédent de $7$.",
      cause: "C'est l'erreur centrale du chapitre, et elle est de vocabulaire avant d'être de " +
             "raisonnement. Les deux mots sont abstraits, aucun des deux n'a de sens dans la " +
             "langue courante, et ils désignent les deux extrémités de la même flèche.<br/><br/>" +
             "L'élève retient qu'il y a « un truc de départ et un truc d'arrivée » mais n'a " +
             "aucun moyen de se rappeler lequel porte quel nom — d'autant que l'écriture " +
             "$f(3) = 7$ met les deux nombres sur la même ligne, sans indiquer de sens de " +
             "lecture.",
      remede: "Ancrer les deux mots dans leur sens ordinaire, une fois pour toutes : un " +
              "<strong>antécédent</strong> est ce qui vient AVANT (comme dans « antérieur »), " +
              "une <strong>image</strong> est ce qu'on obtient APRÈS. Le français porte " +
              "l'information ; il suffit de la rendre visible.<br/><br/>" +
              "Dessiner systématiquement la flèche $3 \\longrightarrow 7$ avec $f$ au-dessus, " +
              "et faire nommer les deux extrémités à voix haute. Le schéma dit le sens de " +
              "lecture que l'écriture $f(3) = 7$ cache.<br/><br/>" +
              "Faire ensuite constater l'asymétrie, qui est la vraie raison de distinguer les " +
              "deux mots : une image est <strong>unique</strong>, un antécédent peut être " +
              "multiple ou ne pas exister. Sur la parabole du cours, $-5$ a deux antécédents " +
              "($0$ et $6$) et $10$ n'en a aucun. Tant que l'élève croit les deux notions " +
              "symétriques, il n'a aucune raison de ne pas les échanger.<br/><br/>" +
              "Exiger enfin la phrase complète — « $7$ est l'image de $3$ par $f$ » — plutôt " +
              "que le seul nombre. La faute apparaît dans la phrase, jamais dans le résultat.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 demande
         l'ANTÉCÉDENT de 1 par $g(x) = 2x - 1$, et son énoncé glose le mot
         (« c'est-à-dire résous $g(x) = 1$ ») : l'élève qui a échangé les
         deux notions voit immédiatement que l'équation ne correspond pas à
         ce qu'il croyait devoir faire. L'exercice 10 est du même type. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier les parenthèses en substituant un nombre négatif",
      eleve: "Pour $f(x) = 2x^2 - 3$, l'élève écrit $f(-2) = 2 \\times -2^2 - 3 = -8 - 3 = -11$ " +
             "au lieu de $2 \\times (-2)^2 - 3 = 5$.",
      cause: "La priorité de l'élévation au carré sur le signe moins est une convention " +
             "d'écriture que rien ne rend intuitive : $-2^2$ vaut $-4$ et non $4$. L'élève " +
             "substitue le nombre tel qu'il le lit, sans percevoir qu'il vient de changer le " +
             "sens de l'expression.<br/><br/>" +
             "L'erreur est d'autant plus tenace qu'elle ne se produit QUE sur les nombres " +
             "négatifs : sur tout le reste des exercices, omettre les parenthèses est sans " +
             "conséquence, donc rien ne vient corriger l'habitude.",
      remede: "Imposer une règle mécanique et sans exception, plus efficace ici qu'une " +
              "explication : <strong>on remplace toujours $x$ par le nombre ENTRE " +
              "PARENTHÈSES</strong>, même quand il est positif. Une règle qui ne souffre " +
              "aucun cas particulier s'applique sans réfléchir, ce qui est exactement ce " +
              "qu'on veut d'un automatisme.<br/><br/>" +
              "Montrer ensuite l'écart sur le cas litigieux, en posant les deux calculs côte " +
              "à côte : $(-2)^2 = 4$ tandis que $-2^2 = -4$. Faire vérifier à la calculatrice, " +
              "qui applique la même convention et tranche sans que l'enseignant ait à " +
              "arbitrer.<br/><br/>" +
              "Donner enfin un contrôle de vraisemblance utilisable seul : un carré est " +
              "toujours positif ou nul. Si le calcul d'un carré produit un nombre négatif, " +
              "c'est qu'une parenthèse manque.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 demande
         $f(-4)$ pour $f(x) = 2x^2 - 3$, donc exactement la substitution
         litigieuse, et son indication nomme le piège sans donner la réponse
         (« $(-4)^2$ et non $-4^2$ »). L'exercice 6 est du même type. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire qu'une fonction est définie pour tous les nombres",
      eleve: "Pour $f(x) = \\dfrac{1}{x - 3}$, l'élève calcule $f(3)$ et répond $0$, ou bien " +
             "annonce que le domaine est $\\mathbb{R}$ sans s'être posé la question.",
      cause: "Toutes les fonctions rencontrées au collège — linéaires, affines, aires en " +
             "fonction d'un côté — acceptaient n'importe quel nombre. L'idée qu'une fonction " +
             "puisse REFUSER une valeur est donc entièrement neuve, et rien dans l'écriture " +
             "$f(x) = \\frac{1}{x-3}$ ne la signale.<br/><br/>" +
             "Quant à répondre $0$, c'est la trace d'une confusion plus ancienne : l'élève " +
             "traite « diviser par zéro » comme « obtenir zéro », faute d'avoir jamais eu à " +
             "le faire.",
      remede: "Faire éprouver l'interdit numériquement plutôt que l'énoncer : faire calculer " +
              "$\\frac{1}{x-3}$ pour $x = 3{,}1$, puis $3{,}01$, puis $3{,}001$. Les valeurs " +
              "explosent — $10$, $100$, $1000$ — et l'élève voit que rien ne stabilise en " +
              "$3$. La division par zéro cesse d'être une règle arbitraire.<br/><br/>" +
              "Installer ensuite un réflexe de recherche en deux questions, à poser devant " +
              "toute expression avant tout calcul : « y a-t-il un dénominateur ? y a-t-il une " +
              "racine carrée ? ». Ce sont les deux seuls cas au programme de seconde, et la " +
              "liste courte rend le réflexe tenable.<br/><br/>" +
              "Exiger que le domaine soit écrit AVANT de calculer la moindre image, et non " +
              "après. Un domaine cherché en fin d'exercice n'est qu'une formalité ; cherché " +
              "d'abord, il oriente le travail.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 demande la
         VALEUR INTERDITE de $f(x) = \dfrac{1}{x - 3}$ — précisément le
         nombre que l'élève voudrait substituer. La question ne peut pas se
         traiter par un calcul automatique, ce qui oblige à poser la
         condition. L'exercice 9 est du même type. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Confondre le sens de variation et le signe de la fonction",
      eleve: "Devant une courbe située entièrement au-dessus de l'axe des abscisses mais qui " +
             "descend, l'élève affirme que la fonction est croissante « puisqu'elle est " +
             "positive ».",
      cause: "Les deux mots décrivent une impression favorable, et rien dans le langage " +
             "courant ne les sépare. L'élève lit la POSITION de la courbe (au-dessus de l'axe) " +
             "là où on lui demande son ÉVOLUTION (elle monte ou elle descend).<br/><br/>" +
             "La confusion est renforcée par les exercices où les deux coïncident, qui sont " +
             "les plus nombreux : tant que les courbes montantes sont positives, aucune " +
             "expérience ne vient départager les deux lectures.",
      remede: "Choisir délibérément le cas qui sépare les deux notions, car c'est le seul qui " +
              "instruise : une courbe qui reste au-dessus de l'axe tout en descendant. " +
              "L'élève doit dire les deux choses à la fois — « positive » et " +
              "« décroissante » — et constater qu'elles ne se contredisent pas.<br/><br/>" +
              "Faire lire les deux informations à des endroits différents du dessin : le " +
              "signe se lit en comparant la courbe à l'AXE, la variation en parcourant la " +
              "courbe DE GAUCHE À DROITE. Deux gestes distincts pour deux questions " +
              "distinctes.<br/><br/>" +
              "Reformuler enfin la croissance sans le mot « croissant », qui est précisément " +
              "ce qui induit en erreur : « quand $x$ augmente, $f(x)$ augmente aussi ». La " +
              "phrase mentionne les deux variables, donc elle interdit de conclure à partir " +
              "de la seule valeur de $f$.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 donne deux
         images d'une fonction monotone ($f(-3) = 4$ et $f(2) = -1$) et
         demande le sens de variation. Aucune courbe n'est fournie, donc la
         stratégie fautive — regarder si les valeurs sont positives — est
         inapplicable : ici l'une est positive et l'autre négative, et seule
         la COMPARAISON des deux répond. L'exercice 8 est du même type. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 calculer $f(-2)$ pour $f(x) = 2x^2 - 3$ : substitution et calcul.
        « calculer ».
     Q2 QCM sur « si $f(3) = 7$ » : les quatre propositions permutent image et
        antécédent. L'élève doit produire un énoncé correct sur le
        vocabulaire, sans aucun calcul : c'est « communiquer », au sens du
        référentiel — employer à bon escient le langage mathématique.
     Q3 encadrer $f(3)$ pour une fonction décroissante dont on connaît les
        valeurs aux bornes : aucune valeur n'est calculable, il faut DÉDUIRE
        l'encadrement de la seule propriété de décroissance. C'est
        « raisonner », et c'est la question la plus exigeante du devoir.
     Q4 antécédent de $3$ par $g(x) = -x + 8$ : mise en équation immédiate
        puis résolution. « calculer ».
     Q5 où le maximum d'une fonction croissante est-il atteint : l'élève doit
        se représenter l'allure d'une courbe croissante sur un intervalle et
        y localiser le point le plus haut. Aucun calcul, une lecture mentale
        de la configuration : « représenter ».

     « Chercher » et « modéliser » ne sont PAS déclarées : aucune des cinq
     questions ne demande d'explorer une piste ni de traduire une situation
     concrète. Elles sont portées par d'autres chapitres du niveau —
     l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "communiquer", "raisonner", "calculer", "représenter"]
  }
};
