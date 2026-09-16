/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-reactions-chimiques.prof.js
   Fiche professeur du chapitre « Les réactions chimiques (équilibrage) »
   (troisième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-3e-resistance-ohm.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-reactions-chimiques"] = {

  /* ch. 1 (Structure de l'atome et ions) est le prérequis de ce chapitre, et
     il l'est par un lien précis : tout l'équilibrage repose sur l'idée que les
     ATOMES se conservent — ni ne disparaissent, ni n'apparaissent. Or c'est le
     chapitre 1 qui a fait de l'atome une entité composée, dont le noyau est
     intouchable en chimie. Un élève qui n'a pas cette image n'a aucune raison
     de croire qu'on ne peut pas « ajouter un atome » pour équilibrer.

     ch. 3 à 6 (énergie, électricité, gravitation) : aucun lien. */
  prerequis: [1],

  /* Rang conseillé (2026-09-16) : rang 2, celui du livre. Le chapitre ferme le
     bloc chimie de la troisième, juste après la structure de l'atome dont il
     consomme la conservation des atomes.

     Les deux chapitres de chimie gagnent à être traités d'un tenant en début
     d'année : ils forment la reprise de la quatrième et ne conditionnent
     aucun des quatre chapitres de physique qui suivent. */
  rangConseille: 2,

  // Attendus de fin d'année, cycle 4 (2020), thème « Organisation et
  // transformations de la matière ». Aux mots du programme.
  attendus: [
    "Interpréter une transformation chimique comme une redistribution des atomes",
    "Écrire et équilibrer l'équation de réaction d'une transformation chimique",
    "Exploiter la loi de conservation de la masse au cours d'une réaction chimique"
  ],

  note: "Équation de réaction, coefficients stœchiométriques et conservation de la masse sont au " +
        "programme du cycle 4.<br/><br/>" +
        "<strong>C'est le chapitre qui entraîne enfin l'équilibrage.</strong> La quatrième " +
        "l'abordait dans son cours mais ne l'entraînait pas : ses trente exercices ne portaient " +
        "que sur des bilans de masse. Ici, la moitié des exercices tirés demandent de " +
        "<strong>déterminer un coefficient manquant</strong>, ce qui est le geste attendu au " +
        "brevet. Si la classe n'a pas vu l'équilibrage en quatrième, prévoir une reprise du " +
        "vocabulaire (indice contre coefficient) avant de commencer.<br/><br/>" +
        "<strong>Les exercices d'équilibrage sont partiels, et c'est un choix.</strong> Le " +
        "générateur donne une équation où un <strong>seul</strong> coefficient manque " +
        "($C_3H_8 + x\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O$) : l'élève n'a jamais à équilibrer " +
        "une équation entièrement nue. C'est une bonne progression pédagogique, mais ce n'est " +
        "pas l'exercice complet du brevet, qui peut demander tous les coefficients. Les équations " +
        "à équilibrer intégralement sont à prévoir en complément.<br/><br/>" +
        "<strong>Les réactions utilisées sont réelles</strong> — combustion du propane, synthèse " +
        "de l'ammoniac, oxydation du fer — avec leurs coefficients exacts. On peut donc s'appuyer " +
        "dessus sans réserve, et faire remarquer qu'il s'agit de la rouille ou de l'engrais " +
        "azoté, ce qui ancre le chapitre dans le réel.",

  erreurs: [
    {
      titre: "Équilibrer en modifiant un indice",
      eleve: "Pour équilibrer $H_2 + O_2 \\rightarrow H_2O$, l'élève écrit $H_2O_2$ à droite, ou " +
             "transforme $O_2$ en $O$ à gauche. Les comptes tombent juste et la substance a changé.",
      cause: "L'équilibrage est traité comme un problème d'<strong>arithmétique</strong> : il faut " +
             "égaliser deux colonnes de nombres, et tous les nombres visibles semblent " +
             "disponibles. La distinction de statut entre l'indice — qui appartient à " +
             "l'identité de la molécule — et le coefficient — qui ne fait que compter — n'est pas " +
             "encore acquise, alors qu'elle est tout le chapitre.",
      remede: "Poser l'interdiction et la justifier, dans cet ordre : les <strong>indices sont " +
              "intouchables</strong>, parce qu'ils disent <strong>quelle</strong> molécule c'est ; " +
              "seuls les <strong>coefficients</strong> changent, parce qu'ils disent " +
              "<strong>combien</strong>. On ajuste des quantités, jamais des identités. La " +
              "définition D4 du cours le dit mot pour mot : le coefficient est « le " +
              "<strong>seul</strong> élément que l'on peut modifier ».<br/><br/>" +
              "L'exemple de l'eau oxygénée emporte l'adhésion, parce que les élèves connaissent " +
              "le produit : $H_2O$ se boit, $H_2O_2$ décolore les cheveux et brûle la peau. " +
              "Changer un indice n'est pas une erreur de calcul, c'est écrire une autre " +
              "substance — et l'équation obtenue décrit alors une réaction qui n'a pas " +
              "lieu.<br/><br/>" +
              "Faire ensuite compter les atomes dans un <strong>tableau à deux colonnes</strong>, " +
              "élément par élément, avant et après. C'est la seule vérification fiable d'un " +
              "équilibrage : tant que les deux colonnes ne sont pas égales ligne par ligne, " +
              "l'équation n'est pas équilibrée, et le tableau montre immédiatement quel élément " +
              "pose problème.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 1) : l'exercice 1 est la combustion du propane,
         $C_3H_8 + x\,O_2 \rightarrow 3\,CO_2 + 4\,H_2O$, où seul le
         coefficient x manque (réponse 5). Le format même de l'exercice est la
         remédiation : la place du coefficient est marquée par x, DEVANT la
         formule, si bien que l'élève ne peut pas confondre l'endroit où
         écrire. Les indices sont tous déjà posés et n'ont pas à être touchés. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Compter les atomes sans multiplier par le coefficient",
      eleve: "Dans $3\\,H_2$, l'élève compte $2$ atomes d'hydrogène (il lit l'indice et ignore le " +
             "coefficient), ou $5$ en additionnant les deux nombres au lieu de les multiplier.",
      cause: "Même racine que l'erreur de quatrième sur $3\\,O_2$, et elle survit à un an de " +
             "distance : deux nombres encadrent le symbole, rien dans leur apparence ne dit " +
             "qu'ils se <strong>multiplient</strong>. L'élève applique l'opération qui lui vient, " +
             "et l'addition vient plus spontanément que la multiplication.",
      remede: "Faire dire la formule en français, en commençant par le coefficient et en " +
              "prononçant le mot « chaque » : « <strong>trois</strong> molécules, et " +
              "<strong>chaque</strong> molécule contient <strong>deux</strong> atomes " +
              "d'hydrogène ». Le mot « chaque » impose la multiplication sans qu'on ait à la " +
              "nommer.<br/><br/>" +
              "Exiger le calcul en <strong>deux temps séparés</strong>, sur deux lignes : le " +
              "contenu d'une molécule d'abord, la multiplication par le coefficient ensuite. " +
              "Écrits sur la même ligne, les deux nombres invitent à l'addition ; écrits sur deux " +
              "lignes, ils ne peuvent plus se confondre.<br/><br/>" +
              "Faire dessiner les molécules dans les cas difficiles, ce qui reste plus rapide " +
              "qu'une règle en début de chapitre : trois paires de ronds, on compte six ronds. " +
              "L'élève vérifie alors sa multiplication au lieu de la deviner.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 2 est la
         synthèse de l'ammoniac, $N_2 + 3\,H_2 \rightarrow 2\,NH_3$, et demande
         combien d'atomes d'AZOTE sont présents côté réactifs (réponse 2). Le
         tirage est intéressant pour cette erreur : l'azote y porte un indice
         (2) et aucun coefficient, alors que l'hydrogène voisin porte les deux
         (3 et 2). L'élève doit donc traiter deux cas différents dans la même
         équation, ce qui est exactement le discernement que le remède
         installe. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire qu'un coefficient fractionnaire est acceptable",
      eleve: "Pour équilibrer la combustion du propane, l'élève propose $x = 2{,}5$, ou laisse " +
             "$\\dfrac{5}{2}$ dans sa réponse.",
      cause: "Le raisonnement est mathématiquement juste : en cherchant l'égalité des atomes " +
             "d'oxygène, la division peut tomber sur une valeur non entière selon l'ordre dans " +
             "lequel on équilibre. L'élève applique une résolution d'équation et n'a aucune " +
             "raison de refuser une fraction — rien ne lui a dit que le résultat doit être " +
             "entier, ni <strong>pourquoi</strong>.",
      remede: "Donner la raison physique, qui est ce qui manque : un coefficient compte des " +
              "<strong>molécules</strong>, et il n'existe pas de demi-molécule. Une demi-molécule " +
              "d'eau, ce n'est ni de l'eau ni rien — c'est un atome d'oxygène et un atome " +
              "d'hydrogène séparés, soit autre chose. L'exigence d'entiers n'est pas une " +
              "convention scolaire, c'est une contrainte du réel.<br/><br/>" +
              "Donner ensuite le geste de sortie, qui rend la règle utilisable : quand un " +
              "coefficient fractionnaire apparaît, on <strong>multiplie toute l'équation</strong> " +
              "par le dénominateur. C'est légitime — l'équation garde son sens, on décrit " +
              "simplement deux fois plus de molécules — et c'est la manipulation que le lycée " +
              "utilisera.<br/><br/>" +
              "Ajouter une méthode d'ordre qui évite le problème en amont : équilibrer d'abord " +
              "les éléments qui n'apparaissent qu'une fois de chaque côté (le carbone, puis " +
              "l'hydrogène), et garder l'<strong>oxygène pour la fin</strong>. C'est ce que fait " +
              "la méthode du cours, et c'est ce qui donne $x = 5$ directement sur le propane.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les quarante-deux exercices tirés ont TOUS une réponse
         entière par construction — le générateur part d'équations réelles déjà
         équilibrées et efface un coefficient. Aucun ne peut donc produire la
         situation de l'erreur. Celle-ci apparaît en revanche dès qu'un élève
         équilibre dans un ordre défavorable, ce qui est fréquent en devoir :
         elle se remédie sur la méthode d'ordre, en classe, et le remède le
         dit. */
      exercice: null
    },
    {
      titre: "Confondre conservation des atomes et conservation des molécules",
      eleve: "« Il y a $4$ molécules à gauche et $3$ à droite, donc l'équation est fausse. » " +
             "L'élève cherche à égaliser le nombre de molécules au lieu du nombre d'atomes.",
      cause: "La loi a été retenue comme « tout se conserve », sans préciser " +
             "<strong>quoi</strong>. Or la réaction chimique consiste précisément à " +
             "<strong>défaire</strong> des molécules pour en <strong>refaire</strong> d'autres : " +
             "le nombre de molécules n'a aucune raison d'être conservé, et il ne l'est " +
             "généralement pas. Seuls les atomes le sont.",
      remede: "Nommer systématiquement ce qui se conserve, et refuser l'énoncé abrégé : ce sont " +
              "les <strong>atomes</strong>, jamais les molécules. Les molécules sont des " +
              "assemblages qu'on démonte et remonte ; les atomes sont les briques, et on ne peut " +
              "ni les créer ni les détruire dans une réaction chimique.<br/><br/>" +
              "L'analogie des briques de construction est ici exacte, et pas seulement " +
              "illustrative : avec les briques d'une maison on peut bâtir deux cabanes — le " +
              "nombre de bâtiments a changé, le nombre de briques non. C'est très précisément ce " +
              "que fait une réaction chimique.<br/><br/>" +
              "Faire vérifier un équilibrage <strong>élément par élément</strong>, dans un " +
              "tableau, et jamais globalement. Sur $C_3H_8 + 5\\,O_2 \\rightarrow 3\\,CO_2 + " +
              "4\\,H_2O$ : six molécules à gauche, sept à droite, et pourtant l'équation est " +
              "juste — le constater sur un cas réel vaut mieux que de l'affirmer.",
      /* Volontairement SANS renvoi. Les quarante-deux exercices tirés ne
         demandent jamais de compter des molécules : le générateur ne produit
         que deux moules (trouver un coefficient, compter les atomes d'un
         élément). L'erreur se manifeste dans le commentaire oral de l'élève,
         pas dans une réponse chiffrée, et aucun exercice du livre ne peut donc
         la prendre. Le tableau de vérification demandé par le remède est la
         remédiation, et il se fait en classe. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — dans $N_2 + 3\,H_2 \rightarrow 2\,NH_3$, combien d'atomes
          d'hydrogène côté réactifs ? Il faut articuler coefficient et indice,
          ce qui est l'erreur 2 de cette fiche : « analyser ».
     Q2 — ce que signifie la loi de Lavoisier. Restitution d'un énoncé du
          cours : « s'approprier ».
     Q3 — équilibrer la combustion du propane, trouver $x$. C'est le geste
          central du chapitre, qui demande de raisonner sur la conservation
          élément par élément : « analyser ».
     Q4 — que peut-on modifier pour équilibrer ? Il faut juger quatre
          propositions dont trois sont fausses, et écarter celle qui touche
          aux indices — l'erreur 1 de cette fiche : « valider ».
     Q5 — $m_r = 15$ g donne deux produits dont $m_1 = 9$ g : calculer $m_2$.
          Application directe de la conservation de la masse : « s'approprier ».

     Ni « réaliser » ni « communiquer » ne sont mobilisés : le chapitre est
     entièrement symbolique, aucune manipulation n'y est demandée et aucune
     question n'exige une explication rédigée. La grille imprimée le montrera.
     Un enseignant qui veut couvrir « réaliser » sur la chimie de troisième le
     fera sur les tests d'identification d'ions, qui relèvent du chapitre 1. */
  competences: {
    evaluation: ["analyser", "s'approprier", "analyser", "valider", "s'approprier"]
  }
};
