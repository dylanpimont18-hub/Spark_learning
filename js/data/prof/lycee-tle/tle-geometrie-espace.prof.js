/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-geometrie-espace.prof.js
   Fiche professeur du chapitre « Géométrie dans l'espace » (terminale), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau.

   CE CHAPITRE EST LE POINT FAIBLE STRUCTUREL DU NIVEAU, et l'enseignant doit
   le savoir avant de le préparer : il demande de représenter en deux
   dimensions un objet qui n'en a pas deux. Les trois schémas du cours ont
   été construits pour cela, et leur perspective cavalière est vérifiée par
   le calcul (scripts/manuel/tests/diagrams-tle.test.js) sur les neuf paires
   d'arêtes parallèles du cube.

   Écrit le 2026-09-14. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-geometrie-espace"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7 ; le numéro imprimé reste celui du
     livre).

     Ce chapitre n'a AUCUN prérequis parmi les onze autres, et c'est un
     résultat, pas un oubli. Tout ce dont il a besoin — vecteurs du plan,
     coordonnées, norme, produit scalaire en deux dimensions — vient de la
     PREMIÈRE, pas de la terminale. Déclarer les limites ou la dérivation
     serait un prérequis décoratif, et le cahier des charges demande les
     prérequis RÉELS.

     Ce que l'enseignant doit vérifier tient donc en une phrase : les
     vecteurs du plan et le produit scalaire de première doivent être
     solides, car tout le chapitre consiste à leur ajouter une coordonnée.
     Un élève qui hésite encore sur $\vec{AB} = (x_B - x_A\,;\,y_B - y_A)$
     ne franchira pas le passage à trois dimensions. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 11, suivi immédiatement de
     l'orthogonalité dans l'espace (rang 12) qui s'appuie entièrement sur lui.

     Ce chapitre est INDÉPENDANT de toute l'analyse du niveau : rien n'y
     demande de limite, de dérivée ni d'intégrale. Il peut donc se placer où
     l'on veut, et c'est cette liberté qui décide de sa position — on le met
     là où il ne gêne personne, c'est-à-dire après la chaîne d'analyse, qui
     elle est fortement contrainte (limites, puis dérivation, puis convexité
     et primitives, puis équations différentielles).

     UN ARBITRAGE À CONNAÎTRE. Une première version proposait le rang 3, au
     motif que ce chapitre prolonge directement la première et qu'il vaut
     mieux en profiter pendant que les vecteurs du plan sont encore frais.
     L'argument reste valable, et un enseignant qui préfère traiter le bloc
     « espace » en octobre ne se trompera pas : il déplacera simplement les
     deux chapitres ensemble, sans rien casser ailleurs.

     Le seul point non négociable est l'ADJACENCE des deux chapitres
     d'espace. Les séparer par plusieurs semaines obligerait à réinstaller
     entièrement les coordonnées de l'espace au moment de reprendre le
     second, ce qui coûte une séance entière.

     Sur ce point, l'ordre du LIVRE (chapitres 11 et 12) et celui de la
     progression coïncident exactement. */
  rangConseille: 11,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Géométrie de l'espace ».
  attendus: [
    "Manipuler les coordonnées d'un point et d'un vecteur dans un repère de l'espace",
    "Calculer la norme d'un vecteur de l'espace et les coordonnées d'un milieu",
    "Reconnaître deux vecteurs colinéaires, et en déduire le parallélisme de deux droites",
    "Calculer un produit scalaire de deux vecteurs de l'espace à partir de leurs coordonnées",
    "Déterminer une représentation paramétrique d'une droite, et une équation cartésienne d'un plan à partir d'un point et d'un vecteur normal",
    "Étudier les positions relatives de droites et de plans, et reconnaître deux droites gauches"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Les vecteurs de l'espace, les représentations paramétriques, les équations de plan et les " +
        "positions relatives sont tous au programme de terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>représentation</strong> elle-même. Le programme n'exige pas que l'élève " +
        "sache dessiner en perspective cavalière, mais il devra en <strong>lire</strong> " +
        "constamment. Les trois schémas du cours emploient la convention scolaire française — $x$ " +
        "vers la droite, $z$ vers le haut, fuyante $y$ à $45°$ réduite de moitié — et il vaut mieux " +
        "l'annoncer explicitement en début de chapitre : les élèves qui ont vu une autre convention " +
        "au collège lisent les figures à l'envers sans le dire.<br/><br/>" +
        "Ensuite la <strong>résolution du système paramétrique</strong> pour décider si deux droites " +
        "se coupent. L'attendu est là, mais la compétence calculatoire qu'il suppose — un système de " +
        "trois équations à deux inconnues, qui peut être incompatible — dépasse ce que beaucoup " +
        "d'élèves maîtrisent en début d'année. On gagnera à traiter d'abord des cas où deux " +
        "équations suffisent, et à ne vérifier la troisième qu'ensuite.<br/><br/>" +
        "Enfin le <strong>produit vectoriel</strong>, qui n'est PAS au programme et qui n'apparaît " +
        "nulle part dans ce chapitre. Il est tentant de l'introduire pour obtenir un vecteur normal " +
        "à partir de deux vecteurs du plan ; c'est une ouverture possible pour les élèves qui " +
        "poursuivront en sciences, mais jamais un attendu, et aucun exercice de la banque ne le " +
        "suppose.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       été vérifiés contre le tirage réel de la graine du livre, ET sont
       protégés par un test qui les rapproche du tirage par MOTS-CLÉS
       (scripts/manuel/tests/prof-tle.test.js). Sans ce test, un renvoi écrit
       contre un tirage donné devient faux dès que la banque s'élargit : les
       rangs se décalent, le renvoi pointe vers un exercice qui existe — donc
       la validation l'accepte — mais qui parle d'autre chose. */
  erreurs: [
    {
      titre: "Conclure du dessin que deux droites se coupent",
      eleve: "Devant une figure en perspective où deux droites se croisent visiblement, l'élève " +
             "écrit « les droites sont sécantes » sans résoudre aucun système.",
      cause: "Depuis la sixième, la géométrie se fait sur des figures où voir et être coïncident : " +
             "deux traits qui se croisent se coupent vraiment. Cette confiance dans le dessin a " +
             "toujours été justifiée, et rien n'a jamais averti l'élève qu'elle cesserait de " +
             "l'être.<br/><br/>" +
             "Or une perspective écrase trois dimensions sur deux, et cet écrasement fabrique des " +
             "intersections qui n'existent pas. Le dessin devient un indice, plus une preuve — " +
             "c'est un changement de statut, pas une règle de plus à retenir.",
      remede: "Faire vivre l'illusion avant de l'expliquer. Le troisième schéma du cours, " +
              "« Un croisement qui n'existe pas », est construit pour cela : les deux segments s'y " +
              "coupent très exactement en leur milieu sur la feuille, alors que l'une des droites " +
              "reste à la cote $z = 0$ et l'autre à la cote $z = 2$. Demander d'abord si elles se " +
              "coupent, laisser répondre oui, puis faire lire les cotes.<br/><br/>" +
              "L'ombre au sol, tracée en pointillés sur ce schéma, est l'élément décisif : c'est " +
              "elle qui rend la hauteur <strong>visible</strong>, et elle manque sur la plupart des " +
              "figures de manuel — ce qui explique pourquoi l'illusion est si tenace.<br/><br/>" +
              "Fixer ensuite la règle de méthode, qui vaut pour toute l'année : <strong>la seule " +
              "preuve acceptable est un calcul</strong>. On écrit les deux représentations " +
              "paramétriques, on cherche un couple de paramètres donnant le même point, et on " +
              "conclut sur l'existence ou non d'une solution.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : la banque du chapitre porte sur des CALCULS de coordonnées
         (norme, produit scalaire, colinéarité, équation de plan), et aucun de
         ses exercices ne présente de figure ni ne demande de trancher une
         position relative. Pointer un exercice de norme n'aiderait en rien un
         élève qui croit ce qu'il voit. La remédiation demande une activité sur
         figure, à prévoir hors du livre — comme le font déjà six remédiations
         de la sixième et une de la seconde. */
      exercice: null
    },
    {
      titre: "Confondre colinéarité et orthogonalité",
      eleve: "Pour tester si deux droites sont parallèles, l'élève calcule le produit scalaire de " +
             "leurs vecteurs directeurs et conclut « parallèles » quand il trouve $0$.",
      cause: "Les deux critères arrivent dans le même chapitre, s'écrivent tous les deux sur les " +
             "coordonnées, et se ressemblent typographiquement. L'élève retient qu'« il y a un " +
             "test », sans retenir lequel teste quoi.<br/><br/>" +
             "L'ordre d'introduction aggrave la chose : le produit scalaire est le calcul le plus " +
             "spectaculaire des deux, donc le plus mémorable, et il finit par occuper la place de " +
             "réponse par défaut.",
      remede: "Opposer les deux critères sur un SEUL exemple, en une phrase chacun. Prendre " +
              "$\\vec{u}(2\\,;\\,1\\,;\\,1)$ et $\\vec{v}(4\\,;\\,2\\,;\\,2)$ : leur produit scalaire " +
              "vaut $8 + 2 + 2 = 12$, qui n'est pas nul, et pourtant les droites sont manifestement " +
              "parallèles puisque $\\vec{v} = 2\\vec{u}$. Le contre-exemple suffit à démolir la " +
              "règle fausse, et l'élève le vérifie lui-même en deux lignes.<br/><br/>" +
              "Installer ensuite la formulation qui ne se confond pas : <strong>colinéaires, c'est " +
              "la même direction ; orthogonaux, c'est un angle droit</strong>. Puis rattacher " +
              "chaque mot à son calcul — un rapport constant entre les coordonnées d'un côté, une " +
              "somme nulle de l'autre.<br/><br/>" +
              "Exiger enfin la vérification sur les trois coordonnées pour la colinéarité. Un " +
              "élève qui trouve le bon $k$ sur la première et s'arrête là aura raison neuf fois " +
              "sur dix et tort la dixième, sans pouvoir savoir laquelle.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-14) :
         l'exercice 1 donne $\vec{u}(2;1;1)$ et $\vec{v}(4;2;2)$ et demande le
         coefficient de colinéarité. L'énoncé affirme la colinéarité, donc
         l'élève qui calcule un produit scalaire obtient 12 et se retrouve
         devant une contradiction qu'il doit résoudre seul — l'erreur se
         manifeste au lieu de passer inaperçue. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Chercher le vecteur normal alors qu'il est déjà écrit",
      eleve: "Devant le plan $2x + 3y - z + 5 = 0$, l'élève cherche deux points, calcule un " +
             "vecteur du plan, puis s'arrête faute de savoir comment obtenir la normale.",
      cause: "L'équation d'un plan ressemble à une équation de droite du plan, où les coefficients " +
             "ne se lisent pas directement comme un objet géométrique. L'élève ne soupçonne donc " +
             "pas que les trois nombres devant $x$, $y$ et $z$ SOIENT quelque chose.<br/><br/>" +
             "Plus profondément, il lui manque le renversement propre au chapitre : décrire un " +
             "plan par la direction qu'il évite, et non par celles qu'il contient. C'est " +
             "contre-intuitif la première fois, et aucune formule ne le fait comprendre.",
      remede: "Commencer par le deuxième schéma du cours, « Le vecteur normal sort du plan ». Il " +
              "pose côte à côte deux vecteurs DU plan, en teinte faible, et la normale en teinte " +
              "forte : la hiérarchie visuelle dit déjà que c'est elle qu'on retient. Faire " +
              "verbaliser que la normale n'appartient pas au plan — c'est ce qui déroute, et c'est " +
              "aussi ce qui rend le critère économique : une direction au lieu d'une " +
              "infinité.<br/><br/>" +
              "Poser ensuite un exercice de lecture pure, sans calcul : donner cinq équations de " +
              "plan et demander uniquement les cinq normales. En deux minutes, l'automatisme est " +
              "installé.<br/><br/>" +
              "Terminer par le sens du quatrième coefficient : $a$, $b$, $c$ donnent l'orientation " +
              "du plan, et $d$ seulement sa position. Deux plans parallèles ont les mêmes trois " +
              "premiers coefficients et diffèrent par le dernier — ce qui se vérifie en un coup " +
              "d'œil et évite bien des calculs.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 5 donne un
         point et un vecteur normal, et demande UNIQUEMENT le coefficient $d$.
         L'énoncé écrit lui-même les trois premiers coefficients, ce qui montre
         à l'élève qu'ils ne se cherchent pas — ils se recopient. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Croire que « ne se coupent pas » veut dire « parallèles »",
      eleve: "Après avoir montré que le système n'a pas de solution, l'élève conclut « donc les " +
             "droites sont parallèles ».",
      cause: "Dans le plan, cette déduction est un THÉORÈME, et elle est vraie : deux droites qui " +
             "ne se coupent pas y sont nécessairement parallèles. L'élève ne fait donc pas une " +
             "erreur de raisonnement, il applique correctement un résultat qui vient de cesser " +
             "d'être valable.<br/><br/>" +
             "C'est ce qui rend l'erreur difficile à corriger : on ne peut pas lui reprocher " +
             "d'avoir mal appris. Il faut lui montrer que le terrain a changé.",
      remede: "Montrer l'objet nouveau avant de parler de la règle. Le premier schéma du cours, " +
              "« Deux droites qui ne se coupent pas, et qui ne sont pas parallèles », isole sur un " +
              "cube deux arêtes dont les directions sont $(3\\,;\\,0\\,;\\,0)$ et " +
              "$(0\\,;\\,0\\,;\\,3)$ : manifestement pas colinéaires, et manifestement sans point " +
              "commun puisque l'une est à $y = 0$ et l'autre à $y = 3$.<br/><br/>" +
              "Faire alors énoncer par la classe qu'il existe en trois dimensions un <strong>cas " +
              "de plus</strong> que dans le plan. C'est la seule chose à retenir du schéma, et " +
              "elle se formule en une phrase.<br/><br/>" +
              "Imposer enfin une méthode en deux temps, dans cet ordre : d'abord tester la " +
              "colinéarité des vecteurs directeurs, ensuite seulement chercher un point commun. " +
              "Cet ordre n'est pas indifférent — il fait apparaître les trois cas comme une " +
              "arborescence (colinéaires : parallèles ou confondues ; non colinéaires : sécantes " +
              "ou gauches), au lieu d'une liste à mémoriser.",
      /* Volontairement SANS renvoi, pour la même raison que la première
         erreur : la banque du chapitre ne contient aucun exercice de position
         relative de deux droites. Elle travaille les OUTILS (colinéarité,
         produit scalaire, équation de plan) qui permettent ensuite de trancher
         une position relative, mais jamais la conclusion elle-même. Un renvoi
         vers l'exercice de colinéarité serait approximatif, et le cahier des
         charges interdit de combler un trou par un exercice approximatif. */
      exercice: null
    },
    {
      titre: "Additionner les coordonnées au lieu d'appliquer Pythagore",
      eleve: "Pour $\\vec{u}(2\\,;\\,3\\,;\\,6)$, l'élève annonce une norme de $11$, en additionnant " +
             "les trois coordonnées.",
      cause: "L'addition est l'opération par défaut dès que plusieurs nombres décrivent la même " +
             "grandeur. L'élève ne perçoit pas que les trois coordonnées sont portées par des " +
             "directions <strong>deux à deux perpendiculaires</strong>, et que c'est précisément " +
             "ce qui interdit de les additionner.<br/><br/>" +
             "La troisième dimension n'a rien créé : la même erreur existait en première sur " +
             "$\\sqrt{x^2 + y^2}$. Elle est seulement moins visible ici, parce que la figure " +
             "n'aide plus.",
      remede: "Revenir à un cas où la réponse se contrôle sans formule. Prendre " +
              "$\\vec{u}(2\\,;\\,3\\,;\\,6)$, dont la norme vaut exactement $7$ puisque " +
              "$4 + 9 + 36 = 49$ : l'élève qui additionne trouve $11$, et l'écart est assez grand " +
              "pour se voir.<br/><br/>" +
              "Poser ensuite la question de bon sens, celle qui règle l'affaire sans calcul : " +
              "« peux-tu marcher $2$ m vers l'est, $3$ m vers le nord et monter de $6$ m, puis te " +
              "retrouver à $11$ m de ton point de départ ? ». Non — parce qu'un chemin en zigzag " +
              "est toujours plus long que la ligne droite qui joint ses extrémités.<br/><br/>" +
              "Retenir la formulation générale, qui vaut en deux comme en trois dimensions : " +
              "<strong>la diagonale est plus courte que la somme des côtés</strong>. C'est un " +
              "encadrement gratuit, à faire poser avant chaque calcul de norme.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 2 donne
         $\vec{u}(0;-3;-2)$ et demande la longueur. Deux coordonnées y sont
         NÉGATIVES : l'élève qui additionne obtient $-5$, un nombre qui ne peut
         pas être une longueur. L'absurdité se voit sans qu'on la désigne, ce
         qui est exactement ce qu'on attend d'une remédiation. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 norme de $\vec{AB}$ à partir de deux points : différence de
        coordonnées puis Pythagore, donc « calculer ».
     Q2 deux vecteurs directeurs non colinéaires : peut-on conclure que les
        droites sont sécantes ? L'élève doit voir qu'il MANQUE une
        information, et que le cas gauche reste ouvert. Aucun nombre n'est
        manipulé : c'est « raisonner ».
     Q3 produit scalaire de deux vecteurs donnés : application directe, donc
        « calculer ».
     Q4 reconnaître l'équation du plan passant par un point donné et de
        normale donnée, parmi quatre propositions. L'élève ne calcule pas, il
        lit une configuration géométrique dans une écriture algébrique et la
        confronte au dessin mental du plan : c'est « représenter ».
     Q5 trouver $a$ tel que $\vec{u}(a;1;2)$ et $\vec{v}(3;-6;a)$ soient
        orthogonaux. L'élève doit décider seul de POSER une équation à partir
        d'une condition géométrique, puis la résoudre — la méthode n'est pas
        donnée, et le paramètre $a$ apparaît des deux côtés. C'est
        « chercher ».

     « Modéliser » et « communiquer » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande de traduire une situation concrète en écriture
     mathématique, ni de juger ou produire une explication. Les deux
     compétences sont portées par d'autres chapitres du niveau, où les
     énoncés ont été écrits pour cela — l'étiquette suit l'énoncé, jamais
     l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "représenter", "chercher"]
  }
};
