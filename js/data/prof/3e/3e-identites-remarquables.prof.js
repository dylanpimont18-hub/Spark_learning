/* =========================================================
   Spark Learning – js/data/prof/3e/3e-identites-remarquables.prof.js
   Fiche professeur du chapitre « Identités remarquables » (troisième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote du niveau
   (3e-thales.prof.js) : mêmes conventions, même niveau de détail, mêmes deux
   règles éditoriales.

   CE QUE LA TROISIÈME CHANGE. C'est l'année du brevet, et la démonstration y
   devient un attendu et non un ornement. Ce chapitre en offre une forme
   particulière : ici, démontrer ne veut pas dire citer un théorème, cela veut
   dire justifier qu'une égalité est vraie POUR TOUTES les valeurs, ce qu'aucun
   exemple ne peut faire. L'erreur 5 de cette fiche porte exactement là-dessus,
   et la question 3 de l'évaluation a été réécrite pour l'évaluer.

   UN CHAPITRE PARTICULIÈREMENT BIEN OUTILLÉ. Son générateur d'exercices a été
   élargi le 2026-09-13 à sept familles de tâches (voir le commentaire de
   `generate()` dans js/data/3e/3e-identites-remarquables.js), et deux d'entre
   elles ont été écrites POUR prendre à revers des erreurs de cette fiche —
   'carreparfait' pour l'erreur 2, 'mental' pour l'erreur 1. Quatre des cinq
   remédiations ci-dessous ont donc un renvoi solide, ce qui est rare.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève, vouvoiement neutre de
   l'enseignant dans les fiches.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-identites-remarquables"] = {

  /* AUCUN prérequis parmi les chapitres de troisième, et c'est un choix
     assumé (2026-09-13). Les identités remarquables ne demandent que la
     distributivité double, $(a+b)(c+d) = ac + ad + bc + bd$, acquise en
     quatrième : elles n'attendent rien du reste de l'année.

     C'est même l'inverse qui est vrai, et c'est ce qui fixe le rang ci-dessous :
     ce chapitre est le FOURNISSEUR de toute l'algèbre de l'année. Les équations
     s'en servent pour factoriser, les fonctions pour développer une expression
     avant de la représenter. Le placer tôt n'est donc pas un confort, c'est une
     nécessité de progression.

     On aurait pu inscrire ici la distributivité de quatrième, mais la contrainte
     du champ `prerequis` porte sur les chapitres DE CE NIVEAU (voir
     `validerPrerequis`, scripts/manuel/prof.js) : une dépendance vers une autre
     année ne s'y écrit pas. Elle est signalée dans la note à la place. */
  prerequis: [],

  /* Rang conseillé (2026-09-13) : rang 2, juste après l'arithmétique.

     La raison tient en une phrase : ce chapitre outille tous les suivants.
     Factoriser une différence de carrés est le geste qui permet de résoudre une
     équation-produit (rang 3), et développer un carré est le geste qui permet
     de simplifier une expression avant de l'étudier comme fonction. Un chapitre
     placé en janvier laisserait tous ceux qui le précèdent se débrouiller sans
     lui, et il faudrait y revenir.

     Pourquoi pas rang 1 : parce que l'arithmétique ne dépend de rien du tout et
     réactive les acquis du cycle 3 en douceur, ce qui convient mieux à la
     première semaine de septembre. Les identités, elles, demandent une algèbre
     de quatrième encore fraîche, et gagnent à être abordées une fois la classe
     lancée.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 2,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Nombres et calculs », partie « Calcul littéral ».
  attendus: [
    "Développer et réduire une expression littérale à l'aide des trois identités remarquables",
    "Factoriser une expression littérale en reconnaissant un carré parfait ou une différence de deux carrés",
    "Utiliser une identité remarquable pour mener un calcul numérique astucieux, sans calculatrice",
    "Passer d'une forme développée à une forme factorisée selon la question posée, et justifier le choix",
    "Démontrer qu'une égalité littérale est vraie pour toutes les valeurs, en distinguant une preuve algébrique d'une vérification sur des exemples"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Les <strong>trois identités remarquables</strong> sont au programme de troisième, dans les " +
        "deux sens : développer et factoriser. C'est le cœur du chapitre, et l'un des contenus les " +
        "plus systématiquement évalués au brevet.<br/><br/>" +
        "Deux points vont au-delà de l'année. D'abord l'écriture " +
        "<strong>$x^2 - k = (x - \\sqrt{k})(x + \\sqrt{k})$ lorsque $k$ n'est pas un carré " +
        "parfait</strong>, annoncée dans l'introduction du cours : elle suppose de manipuler une " +
        "racine carrée comme un nombre ordinaire, ce qui relève de la seconde. En troisième, on se " +
        "limite aux différences de carrés PARFAITS — $x^2 - 9$, $25x^2 - 36$ — et l'on répond " +
        "« elle ne se factorise pas ici » dans les autres cas. Traitez ce passage en ouverture " +
        "orale, jamais en exigence.<br/><br/>" +
        "Ensuite la <strong>factorisation complète en plusieurs étapes</strong>, celle de la " +
        "question 4 de l'évaluation, où $x^4 - 16$ demande d'appliquer l'identité deux fois de " +
        "suite. Le programme demande de factoriser ; il ne demande pas explicitement d'itérer " +
        "jusqu'à épuisement. C'est une excellente question de recherche et une bonne préparation " +
        "au lycée, mais elle se situe au-dessus de l'attendu ordinaire : considérez-la comme la " +
        "question qui distingue, pas comme celle qui valide.<br/><br/>" +
        "Un mot enfin sur le <strong>prérequis hors année</strong> : tout ce chapitre repose sur la " +
        "distributivité double vue en quatrième. Un élève qui bute sur " +
        "$(a+b)(c+d) = ac + ad + bc + bd$ ne bute pas sur les identités, il bute en amont — et " +
        "quinze minutes de révision de la double distributivité avant d'ouvrir le chapitre valent " +
        "mieux que trois séances de remédiation après.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Oublier le double produit",
      eleve: "L'élève écrit $(x + 5)^2 = x^2 + 25$, ou, pour $x = 3$ : " +
             "$(3 + 5)^2 = 3^2 + 5^2 = 9 + 25 = 34$, alors que $8^2 = 64$.",
      cause: "C'est la généralisation abusive d'une règle qui, elle, est vraie : le carré d'un " +
             "PRODUIT est bien le produit des carrés, $(ab)^2 = a^2 b^2$, et l'élève l'a pratiquée " +
             "toute la quatrième. Rien dans l'écriture ne distingue $(ab)^2$ de $(a+b)^2$ sinon un " +
             "signe, et l'élève transporte la règle avec la notation. Ce n'est pas un oubli de " +
             "formule : c'est une analogie qui marche ailleurs et qui échoue ici.",
      remede: "Montrer ce que coûte l'oubli, en surface visible. Le schéma « Ce que coûte le double " +
              "produit oublié » du cours pose deux carrés identiques côte à côte, avec $a = 6$ et " +
              "$b = 4$ : à gauche le carré entier vaut $100$, à droite les deux rectangles laissés " +
              "vides ramènent le total à $52$. L'écriture $(a+b)^2 = a^2 + b^2$ perd " +
              "<strong>$48\\%$ du carré</strong>, et ce n'est pas une petite imprécision.<br/><br/>" +
              "Installer ensuite le contrôle qui règle l'affaire définitivement, et qui ne coûte " +
              "qu'un calcul : <strong>quand la valeur des lettres est connue, calculer la parenthèse " +
              "d'abord</strong>. Ici $3 + 5 = 8$, donc $8^2 = 64$. L'écart avec $34$ saute aux yeux, " +
              "sans avoir à relire une seule ligne d'algèbre.<br/><br/>" +
              "Un geste de classe rapide : faire tester $a = 1$ et $b = 1$ sur toute formule dont on " +
              "doute. $(1+1)^2 = 4$, alors que $1^2 + 1^2 = 2$. Deux secondes, et la question est " +
              "tranchée. Les élèves adoptent volontiers ce réflexe parce qu'il ne demande rien " +
              "d'autre que de savoir compter.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « sans calculatrice, calcule $97^2$, avec l'indication
         $97 = 100 - 3$ ». C'est la tâche 'mental' du générateur, et elle prend
         l'erreur à revers de la meilleure manière possible : l'élève qui
         oublie le double produit trouve $10\,009$ au lieu de $9\,409$, soit un
         résultat PLUS GRAND que $100^2$ alors qu'il élève au carré un nombre
         plus petit que $100$. L'absurdité est visible sans vérification. Mieux
         encore, la troisième ligne de la solution imprimée le dit
         explicitement : « sans le double produit on aurait trouvé 10 009, un
         résultat plus grand — le signe que le terme central avait été
         oublié ». La remédiation est donc dans l'exercice lui-même. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Reconnaître un carré parfait sur les seuls termes extrêmes",
      eleve: "Devant $9x^2 + 28x + 25$, l'élève écrit « c'est $(3x + 5)^2$ », parce que $9x^2$ est le " +
             "carré de $3x$ et $25$ celui de $5$. Il ne vérifie pas que le terme du milieu devrait " +
             "valoir $30x$ et non $28x$.",
      cause: "La reconnaissance de forme se fait sur les extrémités, parce que ce sont elles qui " +
             "« ressemblent » à des carrés — ce sont elles qui portent la signature visuelle. Le " +
             "terme central, lui, n'a l'air de rien de particulier, et l'élève le traite comme un " +
             "détail d'accompagnement. Or c'est exactement l'inverse : les termes extrêmes ne " +
             "prouvent rien, et seul le double produit décide.",
      remede: "Inverser l'ordre de la vérification, et l'imposer : <strong>on regarde le terme du " +
              "milieu EN PREMIER</strong>. Les extrémités indiquent quels sont les candidats $a$ et " +
              "$b$ ; le double produit dit si la factorisation est vraie.<br/><br/>" +
              "Rendre cette vérification mécanique en trois temps écrits : je lis $a$ à gauche, je " +
              "lis $b$ à droite, je calcule $2ab$ et je compare. Sur $9x^2 + 28x + 25$ : $a = 3x$, " +
              "$b = 5$, $2ab = 30x \\neq 28x$. Ce n'est pas un carré parfait, et la réponse « ce " +
              "trinôme ne se factorise pas avec les identités du chapitre » est une réponse " +
              "complète, pas un aveu.<br/><br/>" +
              "Un geste de classe efficace et rapide : projeter six trinômes dont trois sont truqués " +
              "d'aussi peu que possible — $28$ au lieu de $30$, $12$ au lieu de $14$ — et demander de " +
              "trier sans rien rédiger. L'écart est trop petit pour que l'œil tranche, et les élèves " +
              "constatent par eux-mêmes qu'il n'y a pas d'autre moyen que de calculer $2ab$.<br/><br/>" +
              "Une remarque à faire passer : refuser une factorisation est un acte mathématique à " +
              "part entière. L'élève qui écrit « ce n'est pas un carré parfait car le double produit " +
              "vaudrait $30x$ » a produit une démonstration complète, et il mérite tous les points.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est
         « un camarade affirme que $9x^2 + 28x + 25$ est le carré d'une somme,
         factorisé en $(3x+5)^2$ ; cette factorisation est-elle correcte ? ».
         C'est la tâche 'carreparfait' du générateur, écrite POUR cette erreur :
         le générateur truque le terme central d'aussi peu que possible (ici 28
         au lieu de 30) pour que l'oeil ne puisse pas décider, et la solution
         imprimée dit mot pour mot « les termes extrêmes concordent dans les
         deux cas, c'est le double produit qui décide ». L'exercice 9
         ($4x^2 + 4x + 4$ présenté comme $(2x+2)^2$) est le second tirage de la
         même famille et sert de support supplémentaire. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Vouloir factoriser une somme de deux carrés",
      eleve: "Pour $x^2 + 9$, l'élève écrit $(x + 3)(x - 3)$, ou bien $(x + 3)^2$, ou encore " +
             "$(x + 3)(x + 3)$ — selon les jours, mais toujours quelque chose.",
      cause: "La troisième identité est si efficace qu'elle crée une attente de symétrie : si la " +
             "différence se factorise, la somme devrait bien se factoriser aussi. S'ajoute à cela une " +
             "pression de contrat scolaire — on m'a demandé de factoriser, donc il existe une " +
             "réponse, donc je dois écrire un produit. Répondre « c'est impossible » est perçu comme " +
             "un abandon, alors que c'est la bonne réponse.",
      remede: "Faire voir POURQUOI le signe décide, plutôt que de l'affirmer. Le schéma « Une " +
              "différence de carrés se factorise, une somme non » du cours met les deux " +
              "redéveloppements l'un sous l'autre : dans la différence, les termes croisés $-3x$ et " +
              "$+3x$ s'annulent ; dans la somme, ils valent tous deux $+3x$ et laissent un $6x$ " +
              "parasite qui n'existait pas au départ. La seule différence entre les deux lignes est " +
              "un signe, et c'est lui qui fait tout le travail.<br/><br/>" +
              "Installer ensuite le contrôle universel du chapitre : <strong>toute factorisation se " +
              "vérifie en redéveloppant</strong>. C'est gratuit, c'est à la portée de tous depuis la " +
              "quatrième, et cela tranche à tous les coups. Un élève qui redéveloppe $(x+3)(x+3)$ " +
              "trouve $x^2 + 6x + 9$ et voit de lui-même que ce n'est pas $x^2 + 9$.<br/><br/>" +
              "Et surtout, dire explicitement à la classe que <strong>« cette expression ne se " +
              "factorise pas » est une réponse complète</strong>, qui vaut ses points entiers quand " +
              "elle est justifiée. Beaucoup d'élèves écrivent n'importe quoi uniquement parce qu'ils " +
              "croient qu'une case vide est toujours perdante. Lever ce malentendu règle une bonne " +
              "part de l'erreur à lui seul.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur, et c'est cohérent avec sa " +
              "nature : toutes les tâches du générateur attendent une réponse numérique, alors " +
              "qu'ici la bonne réponse est un refus argumenté, que rien de numérique ne peut " +
              "recueillir. L'entraînement utile est le schéma cité ci-dessus, et une série de " +
              "factorisations à trier en classe où l'on glisse volontairement deux sommes de carrés " +
              "parmi les différences.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : le générateur du chapitre produit sept familles de tâches
         (vérifié sur douze tirages, 2026-09-13), toutes à réponse numérique,
         et aucune ne présente de somme de deux carrés. Le seul support du
         livre où le cas apparaît est la correction de la question 4 de
         l'ÉVALUATION — qui note que $x^2 + 4$ ne se factorise pas —, et une
         remédiation ne renvoie jamais vers l'évaluation notée. Le remède dit
         donc explicitement où chercher l'entraînement utile, comme le font
         déjà six remédiations de la sixième et une de la quatrième. */
      exercice: null
    },
    {
      titre: "Perdre le signe du double produit dans $(a - b)^2$",
      eleve: "L'élève écrit $(2x - 3)^2 = 4x^2 - 12x - 9$, en propageant le signe moins jusqu'au " +
             "dernier terme. Ou, symétriquement, $(2x - 3)^2 = 4x^2 + 12x + 9$, en le perdant " +
             "complètement.",
      cause: "Le signe moins est traité comme une propriété de l'expression entière — « il y a un " +
             "moins, donc tout est en moins » — plutôt que comme la valeur d'une lettre. L'élève ne " +
             "voit pas qu'il applique $(a+b)^2$ avec $b = -3$, et que $b^2 = (-3)^2 = +9$ tandis que " +
             "$2ab = 2 \\times 2x \\times (-3) = -12x$. La deuxième identité, présentée comme une " +
             "formule distincte, l'encourage même à croire qu'il s'agit d'un cas à part.",
      remede: "Réduire trois formules à une seule. Il n'y a pas deux identités de carré, il y en a " +
              "une : $(a + b)^2 = a^2 + 2ab + b^2$, et le cas de la différence s'obtient en prenant " +
              "$b$ négatif. Faire écrire au moins une fois, explicitement, " +
              "$(2x - 3)^2 = (2x + (-3))^2$ avec $a = 2x$ et $b = -3$, puis dérouler la formule sans " +
              "y penser. Le carré rend $b$ positif tout seul, et l'élève n'a plus aucun signe à " +
              "arbitrer.<br/><br/>" +
              "Ajouter un contrôle de bon sens qui tient en une phrase et qui détecte la moitié des " +
              "erreurs : <strong>le dernier terme d'un carré est toujours positif</strong>, puisque " +
              "c'est un carré. Un développement qui se termine par $-9$ est faux avant même d'être " +
              "relu.<br/><br/>" +
              "Et conserver le contrôle numérique du chapitre, qui vaut ici aussi : pour $x = 1$, " +
              "$(2 - 3)^2 = 1$, tandis que $4 - 12 - 9 = -17$. Un carré négatif est impossible, et " +
              "l'élève n'a besoin d'aucune formule pour le savoir.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 6 est
         « développer $(3x + 4)^2$ et donner le coefficient $\beta$ du terme en
         $x$ ». C'est la tâche 'developper' du générateur, et elle ne demande
         QUE le coefficient du double produit — précisément le terme dont le
         signe se perd. Le générateur tire le signe au hasard entre '+' et '-'
         (voir `const signe = pick(['+', '-'])` dans generate()), si bien que
         la variante en différence, à réponse NÉGATIVE, apparaît une fois sur
         deux : c'est le seul endroit du livre où l'élève doit rendre un signe
         de double produit, isolé de tout le reste. La solution imprimée
         détaille le calcul de $2ab$ terme à terme. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Croire que deux exemples démontrent une égalité littérale",
      eleve: "Invité à justifier que retirer $2$ cm d'un côté d'un carré et en ajouter $2$ à l'autre " +
             "fait toujours perdre $4$ cm², l'élève écrit : « j'ai essayé avec $12$ et avec $20$, ça " +
             "fait $4$ les deux fois, donc c'est vrai ». Aucune lettre n'apparaît sur sa copie.",
      cause: "Pendant tout le collège, vérifier sur des exemples a été la manière légitime de " +
             "s'assurer d'un résultat, et c'est même ce que le cours recommande comme contrôle. " +
             "L'élève applique donc une méthode qu'on lui a enseignée. Ce qui a changé, sans qu'on " +
             "le lui dise, c'est le statut de la question : on ne lui demande plus de se " +
             "CONVAINCRE, on lui demande de PROUVER, et pour une propriété portant sur tous les " +
             "nombres, aucune collection finie d'exemples n'y suffira jamais.",
      remede: "Rendre le contrat explicite, et le nommer : un exemple <strong>illustre</strong>, " +
              "une lettre <strong>démontre</strong>. Les deux ont leur place, et pas au même " +
              "moment.<br/><br/>" +
              "Le faire éprouver plutôt que l'asséner. Un exercice de classe redoutablement " +
              "efficace, et qui tient en dix minutes : proposer l'affirmation « $n^2 + n + 41$ est " +
              "premier pour tout entier $n$ », la faire tester pour $n = 0$, $1$, $2$, $3$… Elle " +
              "tient jusqu'à $n = 39$, puis tombe à $n = 40$. Quarante exemples justes ne prouvaient " +
              "rien. Aucun discours sur la rigueur n'obtient ce résultat aussi vite.<br/><br/>" +
              "Puis montrer la contrepartie, qui est la bonne nouvelle du chapitre : la preuve " +
              "littérale, elle, traite tous les cas d'un coup et tient en deux lignes. " +
              "$(a + 2)(a - 2) = a^2 - 4$, donc la perte vaut $a^2 - (a^2 - 4) = 4$, <strong>et la " +
              "lettre $a$ a disparu</strong>. C'est cette disparition qu'il faut faire remarquer et " +
              "faire commenter : elle est le signe visible que le résultat ne dépend plus de la " +
              "taille du carré.<br/><br/>" +
              "Exiger enfin, dans toute justification rendue, que la phrase de conclusion reprenne " +
              "le mot « quel que soit » ou « pour tout ». C'est la formulation que le brevet attend, " +
              "et l'écrire oblige à vérifier qu'on a bien démontré ce qu'on annonce.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 7 est
         « une plaque carrée de 9 cm de côté est retaillée en rectangle : un
         côté gagne 5 cm, l'autre en perd 5 ; quelle aire a-t-elle perdue ? ».
         C'est la tâche 'gain' du générateur, et sa troisième ligne de solution
         imprimée porte exactement le point de la remédiation : « la perte ne
         dépend PAS de 9 ; avec un carré de n'importe quel côté, allonger d'un
         côté et raccourcir de l'autre de la même longueur fait toujours perdre
         $b^2$ ». L'élève calcule un cas, et la correction lui montre le
         général — ce qui est la bonne progression avant d'exiger la preuve
         littérale. La question 3 de l'évaluation évalue ensuite cette même
         compétence, mais on ne s'en sert pas ici : on remédie avant
         d'évaluer. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     TROIS QUESTIONS ONT ÉTÉ RÉÉCRITES dans js/data/3e/3e-identites-remarquables.js
     le 2026-09-13, parce que déclarer une compétence ne suffit pas : la
     question doit réellement la mobiliser. Les cinq questions étaient
     auparavant cinq applications de formule, dont quatre strictement
     identiques dans leur démarche. Le détail de chaque réécriture est
     commenté dans le module lui-même ; on n'en donne ici que le résultat.

     Q1 (développer $(3x+5)^2$ et donner le coefficient du terme en $x$) :
     application directe de la première identité. C'est « calculer ».
     Q2 (factoriser $x^2 - 16$, QCM) : reconnaître une différence de carrés et
     lire l'identité à l'envers. C'est « calculer » aussi — la reconnaissance
     est immédiate, l'expression est donnée sous sa forme la plus lisible.
     Q3 (deux essais chiffrés de Youssef, que peut-on affirmer avec
     certitude ?) : la question porte sur le STATUT d'un exemple, et la bonne
     option est celle qui invoque l'algèbre. C'est « raisonner », et c'est
     l'erreur 5 de cette fiche.
     Q4 (factoriser complètement $x^4 - 16$) : rien dans l'énoncé ne signale
     que $x^4$ est un carré, ni qu'il faudra appliquer l'identité une SECONDE
     fois. L'élève doit trouver une route qu'on ne lui indique pas. C'est
     « chercher ».
     Q5 (expliquer pourquoi le calcul de Nora échoue) : produire une
     explication et non un nombre, en nommant à la fois la cause et le contrôle
     qui l'aurait évitée. C'est « communiquer », et l'erreur soumise au
     jugement est l'erreur 1 de cette fiche — ce qui referme la boucle entre le
     diagnostic et l'évaluation.

     CONSTAT À ASSUMER : « modéliser » et « représenter » ne sont évaluées
     nulle part dans ce chapitre, et leurs colonnes resteront vides sur la
     grille. C'est cohérent avec sa nature — le calcul littéral n'est ni une
     mise en équation ni une représentation. La modélisation est en revanche
     largement travaillée par les EXERCICES (les tâches 'aire', 'gain' et
     'difference' du générateur sont toutes des situations concrètes) : si
     vous voulez l'évaluer, prenez l'un d'eux en devoir plutôt que de renommer
     une étiquette ici. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "chercher", "communiquer"]
  }
};
