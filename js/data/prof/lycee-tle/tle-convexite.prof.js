/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-convexite.prof.js
   Fiche professeur du chapitre « Convexité » (terminale), pour l'édition du
   professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni dans
   index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit, au
   moment de compiler le livre.

   Écrite le 2026-09-14 sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales.prof.js), dont elle reprend toutes les
   conventions sans exception.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/tle/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-convexite"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 5 (compléments sur la dérivation) : c'est le seul prérequis RÉEL, et
     il l'est totalement. La dérivée seconde n'est rien d'autre qu'une
     dérivée de plus, et tout le chapitre consiste à dériver deux fois de
     suite des polynômes, des exponentielles et des logarithmes. Un élève qui
     hésite encore sur $(\ln x)' = \frac{1}{x}$ ne peut pas écrire
     $f''(x) = -\frac{1}{x^2}$, donc ne peut pas conclure que $\ln$ est
     concave.

     Aucun autre chapitre n'est déclaré. On pourrait être tenté d'ajouter le
     chapitre sur l'exponentielle (ch. 1) ou sur le logarithme (ch. 6),
     puisque la banque d'exercices les mobilise : ce serait un prérequis
     DÉCORATIF. Les seules propriétés utilisées sont $(e^x)' = e^x$ et
     $(\ln x)' = \frac{1}{x}$, qui appartiennent au formulaire de dérivation
     et non à l'étude de ces fonctions. Le cahier des charges demande les
     prérequis réels. */
  prerequis: [5],

  /* Rang conseillé (2026-09-14) : rang 6.

     La convexité vient nécessairement APRÈS la dérivation (rang 5), dont
     elle est une application directe : sans dérivée seconde, le chapitre n'a
     littéralement aucun contenu.

     Elle vient aussi après les limites (rang 4), parce que l'étude complète
     d'une fonction — celle où la convexité prend son sens — suppose qu'on
     sache déjà décrire les branches infinies.

     La placer plus tôt reviendrait à demander une dérivée de dérivée à des
     élèves qui ne posent pas encore la première sans hésiter. La placer plus
     tard la couperait de l'étude de fonctions à laquelle elle sert. */
  rangConseille: 6,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse », sous-partie
  // « Convexité ».
  attendus: [
    "Étudier la convexité d'une fonction à partir du signe de sa dérivée seconde",
    "Déterminer les intervalles sur lesquels une fonction est convexe ou concave",
    "Déterminer les points d'inflexion d'une courbe, en justifiant le changement de signe de la dérivée seconde",
    "Reconnaître la convexité sur une représentation graphique, par la position des tangentes ou des cordes",
    "Exploiter la position de la courbe par rapport à ses tangentes et à ses cordes"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La convexité et la concavité à partir du signe de $f''$, les points d'inflexion, la " +
        "position de la courbe par rapport à ses tangentes et l'inégalité de convexité sont tous " +
        "au programme de terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>définition retenue</strong>. Le programme définit la convexité par la " +
        "position de la courbe par rapport à ses <strong>cordes</strong>, puis la caractérise par le " +
        "signe de $f''$. Le cours de ce chapitre fait l'inverse : il part de $f''$, qui est " +
        "opératoire, et rattache ensuite les cordes et les tangentes. C'est un choix pédagogique " +
        "défendable, mais il faut le savoir si l'on veut que le vocabulaire de la classe coïncide " +
        "avec celui du sujet de baccalauréat, qui emploie volontiers « au-dessus de ses " +
        "tangentes ».<br/><br/>" +
        "Ensuite l'<strong>inégalité de convexité</strong>, mobilisée par la septième tâche de la " +
        "banque et par la deuxième question de l'évaluation. Elle figure au programme, mais " +
        "seulement dans sa version au milieu — $f\\left(\\frac{a+b}{2}\\right) \\leq " +
        "\\frac{f(a)+f(b)}{2}$. La version générale, avec un barycentre quelconque, n'est pas " +
        "exigible et n'apparaît nulle part dans ce chapitre.<br/><br/>" +
        "Enfin le <strong>lien avec l'étude de fonctions</strong>. Tel qu'il est écrit, le chapitre " +
        "traite la convexité isolément, alors qu'au baccalauréat elle arrive presque toujours comme " +
        "une question au sein d'un problème d'analyse plus large. On gagnera à reprendre, en fin de " +
        "séquence, une étude complète déjà faite en classe et à lui ajouter la question de " +
        "convexité : c'est là que l'élève voit à quoi elle sert.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions au plus 3) le 2026-09-14. */
  erreurs: [
    {
      titre: "Confondre le signe de $f'$ et celui de $f''$",
      eleve: "On donne le tableau de signes de $f''$ : négative, puis positive. L'élève annonce que " +
             "« $f$ décroît puis croît », alors que la question portait sur la courbure. Il lit un " +
             "tableau de convexité comme un tableau de variations.",
      cause: "Depuis un an, un tableau de signes avec un $f$ et une apostrophe dedans signifie " +
             "toujours la même chose : le sens de variation. Le geste est devenu automatique, et " +
             "l'apostrophe supplémentaire ne se voit pas — typographiquement, $f'$ et $f''$ " +
             "diffèrent d'un signe de deux millimètres.<br/><br/>" +
             "Ce n'est donc pas une méconnaissance du cours : c'est un défaut de <strong>lecture</strong>, " +
             "et il persiste chez des élèves qui savent parfaitement réciter la règle.",
      remede: "Ne pas réénoncer la règle : elle est connue. Installer plutôt une <strong>question " +
              "systématique</strong> à poser avant tout tableau : « de quelle fonction ce tableau " +
              "donne-t-il le signe ? ». Le faire écrire en toutes lettres en haut du tableau — " +
              "« signe de la dérivée seconde » — plutôt qu'en symboles.<br/><br/>" +
              "Ensuite, faire construire le contre-exemple qui tranche : une fonction " +
              "<strong>croissante et concave</strong>. L'élève cherche, et finit par proposer " +
              "$\\ln$. C'est exactement le bon exemple, et il règle la confusion pour l'année : " +
              "$\\ln$ monte partout, et sa courbure est pourtant négative partout.<br/><br/>" +
              "Formuler enfin le contraste en une phrase : <strong>la dérivée première dit si ça " +
              "monte, la dérivée seconde dit comment ça monte</strong>. Une fonction peut monter en " +
              "s'emballant ou monter en s'essoufflant ; le sens de variation ne les distingue pas.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 demande
         $f''(1)$ pour $f(x) = 3\ln(x)$. L'élève y obtient un nombre NÉGATIF
         sur une fonction manifestement CROISSANTE — le contre-exemple se
         produit sous ses doigts, sans qu'on ait eu à le lui désigner. Le
         corrigé de la tâche dit explicitement « croître et être convexe sont
         deux choses différentes ». */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire que $f''(a) = 0$ suffit à donner un point d'inflexion",
      eleve: "Pour $f(x) = 2x^4 + 3$, l'élève écrit $f''(x) = 24x^2$, résout $f''(x) = 0$, trouve " +
             "$x = 0$ et conclut : « il y a un point d'inflexion en $0$ ». La courbe n'en a aucun.",
      cause: "Toute l'année, résoudre une équation a suffi à répondre : on annule la dérivée, on " +
             "trouve l'extremum. L'élève applique le même schéma, et il a de bonnes raisons — c'est " +
             "celui qui a toujours marché.<br/><br/>" +
             "Le cours dit bien « nécessaire mais pas suffisant », mais cette formule est du " +
             "vocabulaire de logicien : elle ne produit aucune image mentale, et elle ne dit pas ce " +
             "qu'il faut FAIRE en plus. L'élève la retient sans qu'elle modifie son geste.",
      remede: "Ne pas répéter la formule. La remplacer par un geste : <strong>après avoir résolu " +
              "$f'' = 0$, on dresse le tableau de signes de $f''$</strong> — pas seulement ses " +
              "zéros. La conclusion se lit alors sur le tableau, jamais sur l'équation.<br/><br/>" +
              "Pour installer l'image, s'appuyer sur le deuxième schéma du cours, « Quand la dérivée " +
              "seconde touche zéro sans changer de signe » : il empile $x^4$ et sa dérivée seconde " +
              "$12x^2$, et l'on VOIT la parabole du bas descendre, effleurer l'axe, et remonter sans " +
              "jamais passer dessous.<br/><br/>" +
              "Faire alors dire à l'élève la différence entre <strong>toucher</strong> et " +
              "<strong>traverser</strong>. C'est ce seul mot qui manque, et il vaut mieux qu'une " +
              "formule logique : il décrit ce que fait la courbe.<br/><br/>" +
              "Mettre enfin côte à côte $x^3$ et $x^4$, deux fonctions dont la dérivée seconde " +
              "s'annule en $0$, et dont une seule a un point d'inflexion. La comparaison fixe la " +
              "distinction plus durablement que n'importe quelle règle.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 est
         construit exactement sur cette erreur — il met en scène un élève qui
         conclut trop vite, et demande le NOMBRE réel de points d'inflexion.
         La réponse attendue est 0, ce qui oblige à trancher au lieu de
         calculer. Cette tâche n'existait pas avant ce jour : la banque ne
         contenait que des dérivations de cubiques. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Répondre par un point quand on demande un intervalle",
      eleve: "On demande sur quel intervalle $f(x) = 2x^3 - 4x^2$ est convexe. L'élève résout " +
             "$f''(x) = 0$, trouve $x \\approx 0{,}67$, et répond « convexe en $0{,}67$ ». La " +
             "réponse attendue est $[0{,}67\\,;\\,+\\infty[$.",
      cause: "L'élève a bien travaillé : il a dérivé deux fois et résolu correctement. Ce qui lui " +
             "manque n'est pas une technique, c'est la conscience que la convexité est une " +
             "propriété <strong>d'intervalle</strong> et non de point.<br/><br/>" +
             "Le vocabulaire l'y aide peu : on dit « le point d'inflexion », au singulier et au " +
             "point, juste avant de demander un intervalle. Et l'habitude de résoudre des équations " +
             "plutôt que des inéquations achève de fixer la réponse ponctuelle.",
      remede: "Faire porter le travail sur la <strong>lecture de la question</strong> avant le " +
              "calcul : entourer le mot « sur quel intervalle » ou « pour quelles valeurs », et " +
              "écrire la forme de la réponse AVANT de calculer — « la réponse sera de la forme " +
              "$[m\\,;\\,+\\infty[$ ». L'élève sait alors ce qu'il cherche.<br/><br/>" +
              "Techniquement, faire passer de l'équation à l'<strong>inéquation</strong> : ce n'est " +
              "pas $f'' = 0$ qu'il faut résoudre mais $f'' \\geq 0$. Le zéro n'est que la frontière, " +
              "et le tableau de signes donne directement les deux intervalles.<br/><br/>" +
              "Un rapprochement utile : c'est exactement ce qui s'est passé en première avec le " +
              "signe d'un trinôme. On y cherchait aussi les intervalles, pas les racines — les " +
              "racines n'étaient que le moyen. La convexité rejoue la même partition.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 6 demande
         explicitement la borne $m$ d'un intervalle de convexité de la forme
         $[m ; +\infty[$, et son énoncé nomme cette forme. L'indication
         insiste sur l'inéquation. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Croire que « croissante » et « convexe » vont ensemble",
      eleve: "L'élève affirme que $\\ln$ est convexe « puisqu'elle est croissante », ou qu'une " +
             "fonction décroissante est forcément concave. Il se trompe dans les deux cas.",
      cause: "Les deux mots désignent, dans la langue courante, la même impression : une courbe qui " +
             "« monte bien » est à la fois croissante et bombée vers le haut. Rien dans l'usage " +
             "ordinaire ne sépare les deux idées.<br/><br/>" +
             "S'ajoute une raison scolaire : les premiers exemples rencontrés sont $x^2$ sur les " +
             "positifs (croissante ET convexe) et $e^x$ (croissante ET convexe). Les deux notions " +
             "coïncident dans tous les cas vus, donc l'élève les identifie — c'est une " +
             "généralisation raisonnable à partir d'exemples mal choisis.",
      remede: "Construire avec la classe le <strong>tableau à quatre cases</strong> : croissante et " +
              "convexe, croissante et concave, décroissante et convexe, décroissante et concave. " +
              "Puis chercher un exemple pour CHACUNE.<br/><br/>" +
              "Les quatre existent, et c'est cela qui règle la question : $e^x$ pour la première, " +
              "$\\ln$ ou $\\sqrt{x}$ pour la deuxième, $e^{-x}$ pour la troisième, $-x^2$ sur les " +
              "positifs pour la quatrième. Tant que les quatre cases ne sont pas remplies, la " +
              "confusion revient ; une fois qu'elles le sont, elle ne revient plus.<br/><br/>" +
              "Faire ensuite formuler la distinction en termes concrets, par exemple sur une " +
              "épidémie : le nombre total de cas peut augmenter — c'est la croissance — tout en " +
              "augmentant de <strong>moins en moins vite</strong> — c'est la concavité. C'est la " +
              "situation que décrit le « Découvrir » du chapitre, et c'est celle où la distinction " +
              "compte vraiment.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 10 demande
         $f''(2)$ pour $f(x) = 3\ln(x)$, et son corrigé conclut explicitement
         que la fonction est concave « alors même qu'elle est croissante ».
         C'est le contre-exemple produit par le calcul de l'élève lui-même.
         (L'exercice 4 porte la même tâche sur une autre valeur ; on renvoie
         ici au second pour ne pas doubler le renvoi de la première erreur.) */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Substituer avant de dériver",
      eleve: "Pour calculer $f''(1)$ avec $f(x) = 2x^3 + 4x^2$, l'élève remplace d'abord $x$ par " +
             "$1$, obtient $f(1) = 6$, puis « dérive » ce nombre et annonce $0$.",
      cause: "L'écriture $f''(1)$ contient un $1$ bien visible, et l'élève traite les symboles dans " +
             "l'ordre où il les lit. Rien dans la notation ne dit que la dérivation doit venir " +
             "d'abord.<br/><br/>" +
             "L'erreur est plus fréquente sur la dérivée SECONDE que sur la première, parce que la " +
             "double apostrophe allonge la chaîne d'opérations et que l'élève cherche à raccourcir. " +
             "Elle apparaît surtout chez ceux qui travaillent vite et de tête.",
      remede: "Nommer l'objet à chaque étape, à voix haute : « $f''$ est une <strong>fonction</strong>, " +
              "$f''(1)$ est un <strong>nombre</strong> ». Tant que l'élève n'a pas écrit la fonction " +
              "$f''(x)$ en toutes lettres, il n'a pas le droit de remplacer $x$.<br/><br/>" +
              "Imposer donc une présentation en trois lignes, sans exception : la ligne $f'(x) = ...$, " +
              "la ligne $f''(x) = ...$, et seulement ensuite la substitution. C'est une contrainte " +
              "d'écriture, pas une contrainte de pensée, et elle supprime l'erreur mécaniquement.<br/><br/>" +
              "Le contre-argument à faire trouver par la classe : si l'on pouvait substituer d'abord, " +
              "toute dérivée seconde vaudrait $0$, puisqu'on dériverait toujours un nombre. " +
              "L'absurdité est immédiate, et elle vaut mieux qu'une consigne.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 demande
         $f''(1)$ pour $f(x) = 2x^3 + 4x^2$ — exactement la situation
         décrite — et son corrigé impose les trois lignes dans l'ordre.
         L'indication dit mot pour mot « dériver avant de substituer, jamais
         l'inverse ». Tâche créée ce jour. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 lire un tableau de signes de $f''$ et en déduire la structure de la
        courbe. Aucune expression n'est donnée, donc rien à dériver : l'élève
        interprète une représentation. C'est « représenter ».
        CETTE QUESTION A ÉTÉ RÉÉCRITE le 2026-09-14 : elle demandait
        auparavant de calculer $f''(x)$ pour $x^3 - 3x$, c'est-à-dire un
        calcul de plus dans une évaluation qui n'en comptait déjà que.
     Q2 de « $f$ est convexe » à « $f(5) \leq 8$ », sans expression de $f$ et
        sans aucun calcul de dérivée : l'élève passe d'une propriété à une
        autre. C'est « raisonner ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (c'était un vrai/faux sur la
        convexité de l'exponentielle, résolu en deux dérivations).
     Q3 déterminer les abscisses d'inflexion de $x^4 - 6x^2$ : deux
        dérivations, une factorisation, une lecture de signe. C'est
        « calculer ».
     Q4 juger le raisonnement d'un camarade dont le calcul de $f''$ est juste
        mais dont le « donc » ne l'est pas. Aucun nombre à produire : l'élève
        évalue un énoncé et en formule un autre. C'est « communiquer ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 : l'ancienne posait la règle à
        l'envers et se cochait en reconnaissant la formulation du cours.
     Q5 calculer $g''(1)$ pour $\ln$ : deux dérivations et une substitution.
        C'est « calculer ».

     « Chercher » et « modéliser » ne sont PAS déclarées ici : aucune des cinq
     questions ne demande d'explorer une piste sans méthode donnée, ni de
     traduire une situation concrète en écriture mathématique. Les deux
     compétences sont portées par d'autres chapitres du niveau, où les
     énoncés ont été écrits pour cela. */
  competences: {
    evaluation: ["représenter", "raisonner", "calculer", "communiquer", "calculer"]
  }
};
