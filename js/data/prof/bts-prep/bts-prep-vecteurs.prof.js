/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-vecteurs.prof.js
   Fiche professeur du chapitre « Vecteurs & Géométrie » (remise à niveau BTS),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 7. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - angle entre deux vecteurs donnés en composantes : exercices 1 et 12 ;
     - résultante de deux forces orientées par un angle : exercices 2 et 11 ;
     - norme d'un vecteur donné en composantes          : exercices 3 et 9 ;
     - trouver $y$ pour que deux vecteurs soient perpendiculaires : exercices 4 et 8 ;
     - travail $W = Fd\cos\theta$ (forme géométrique)   : exercices 5 et 7 ;
     - travail $W = \vec F \cdot \vec d$ (composantes)  : exercices 6 et 10.
   Chapitre RICHE et bien équilibré : six moules, deux tirages chacun, et
   surtout DEUX PAIRES JUMELLES précieuses pour l'enseignement — le travail
   calculé des deux manières (5/7 contre 6/10), ce qui permet de montrer que
   les deux formes du produit scalaire donnent le même nombre. Les quatre
   erreurs ci-dessous reçoivent toutes un renvoi vérifié.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-vecteurs"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 6 (Trigonométrie) : RETENU, et c'est le prérequis dur. Quatre des
     douze exercices numérotés en dépendent directement et ne peuvent pas être
     commencés sans lui. Les exercices 2 et 11 donnent des forces par leur
     INTENSITÉ et leur ANGLE ($1000$ N à $60°$, $800$ N à $30°$) : il faut
     décomposer en $F\cos\theta$ et $F\sin\theta$ avant de pouvoir additionner
     quoi que ce soit. Les exercices 5 et 7 appliquent $W = Fd\cos\theta$ avec
     un angle en degrés. Et les exercices 1 et 12, qui remontent à l'angle
     depuis un produit scalaire, exigent l'arccosinus. Un stagiaire sans
     SOH-CAH-TOA ne résout que la moitié du chapitre — et pas la moitié la
     plus utile en mécanique.

     Candidats examinés et ÉCARTÉS :
     - ch. 12 (Équations à transformations) : l'exercice 4 demande de trouver
       $y$ tel que $\vec u \cdot \vec v = 0$, soit de résoudre $60 + 5y = 0$.
       C'est une équation du premier degré, mais elle se résout en une ligne et
       le chapitre 12 traite tout autre chose (racines, exponentielles,
       logarithmes). Écarté — et son rang est de toute façon supérieur.
     - ch. 1 (Calcul littéral) : même remarque, l'isolation de $y$ est
       immédiate. Écarté.
     - ch. 5 (Fonctions) : aucun lien opératoire. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [6],

  /* Rang conseillé (2026-09-17) : rang 8, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 8 place ce chapitre après la trigonométrie (rang 6), ce qu'exige
     son prérequis. Le livre le range aussi en chapitre 8 : les deux ordres
     coïncident, la colonne « Chap. » de la progression ne portera pas le
     triangle d'alerte. */
  rangConseille: 8,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Calculer la norme d'un vecteur donné par ses composantes et décomposer une force donnée par son intensité et son angle",
    "Déterminer la résultante de plusieurs forces en additionnant leurs composantes",
    "Calculer un produit scalaire sous ses deux formes et l'exploiter pour obtenir un angle, un travail ou une condition de perpendicularité"
  ],

  note: "Composantes, norme, addition vectorielle, produit scalaire sous ses deux formes, travail " +
        "d'une force : le chapitre installe l'outil qui transforme tout problème de forces " +
        "orientées en additions de nombres — résultante sur un nœud de treillis, effort sur un " +
        "point d'accrochage, travail d'un chariot de manutention.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose la <strong>trigonométrie</strong> acquise " +
        "(chapitre 6), et c'est une contrainte forte : six des douze exercices donnent les forces " +
        "par leur intensité et leur angle, ou demandent de remonter à un angle — sans SOH-CAH-TOA " +
        "ni arccosinus, la moitié du chapitre est hors de portée. Notez un lien non déclarable : " +
        "l'exercice 4 résout une petite équation du premier degré ($60 + 5y = 0$), ce que le " +
        "<strong>chapitre 1</strong> éclaire, sans que ce soit nécessaire.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Deux absences. D'abord, tout le chapitre reste en <strong>deux " +
        "dimensions</strong> : aucun vecteur à trois composantes n'apparaît, alors que " +
        "l'introduction du cours annonce « parfois en 3D ». Ensuite, aucun exercice ne demande de " +
        "<strong>tracer</strong> une résultante ni de construire un parallélogramme des forces — " +
        "tout est numérique. En revanche, le chapitre offre une ressource pédagogique rare que " +
        "vous auriez tort de ne pas exploiter : les exercices 5 et 7 calculent un travail par " +
        "$W = Fd\\cos\\theta$ tandis que les exercices 6 et 10 le calculent par " +
        "$\\vec F \\cdot \\vec d = F_x d_x + F_y d_y$. Les donner à la suite montre que les deux " +
        "formes du produit scalaire sont bien la même chose — ce que le cours affirme et que " +
        "rien d'autre ne fait éprouver.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI : avec six moules et 42 énoncés, chaque erreur
     trouve un support qui la déclenche vraiment.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Beaucoup ont par ailleurs une
     expérience de terrain qui entre en conflit avec le formalisme — sur les
     forces, cette expérience est souvent juste et c'est le formalisme qui leur
     paraît arbitraire. Le champ `cause` en tient compte. */
  erreurs: [
    {
      titre: "Additionner les intensités des forces au lieu de leurs composantes",
      eleve: "Devant $F_1 = 1000$ N à $60°$ et $F_2 = 600$ N à $90°$, l'élève annonce $1600$ N. " +
             "La bonne réponse est $1549$ N — proche, ce qui est le pire des cas : l'erreur passe " +
             "inaperçue.",
      cause: "Additionner deux mesures est le geste le plus naturel qui soit, et il est juste pour " +
             "toutes les grandeurs que ce public manipule au quotidien — des masses, des " +
             "longueurs, des débits, des puissances. Les forces sont l'exception, et rien dans " +
             "leur unité (des newtons, comme des newtons) ne l'annonce. S'y ajoute un renfort " +
             "d'expérience : sur un palan à deux brins verticaux, les forces S'ADDITIONNENT " +
             "effectivement, parce qu'elles sont colinéaires — un alternant a donc vécu des " +
             "situations où la règle simple marchait. Il ne généralise pas à tort par paresse : " +
             "il généralise à partir de cas réels où il avait raison.",
      remede: "Faire tracer le <strong>parallélogramme des forces</strong>, même grossièrement, " +
              "avant tout calcul. Sur un dessin, la diagonale est visiblement PLUS COURTE que la " +
              "somme des deux côtés dès que les forces ne sont pas alignées. L'élève voit " +
              "l'inégalité au lieu de l'apprendre, et il voit du même coup POURQUOI elle devient " +
              "une égalité quand les deux forces ont la même direction.<br/><br/>" +
              "Imposer ensuite la <strong>chaîne en quatre temps</strong> du cours, toujours la " +
              "même et toujours écrite : décomposer chaque force, sommer les $x$, sommer les $y$, " +
              "reprendre la norme. Quatre lignes, aucune décision à prendre — c'est la méthode 2 " +
              "du cours, et sa vertu est précisément d'être mécanique.<br/><br/>" +
              "Installer enfin l'<strong>encadrement de contrôle</strong>, qui rejette l'erreur " +
              "sans refaire le calcul : la résultante est toujours comprise entre la DIFFÉRENCE " +
              "et la SOMME des deux intensités. Ici, entre $400$ et $1600$ N. Une réponse de " +
              "$1600$ N n'est atteignable que si les deux forces sont parfaitement alignées — ce " +
              "qui n'est pas le cas à $60°$ et $90°$. Sur un nœud de treillis, cette borne " +
              "supérieure est exactement ce qu'un projeteur utilise pour dimensionner en " +
              "sécurité : additionner les intensités n'est pas faux au sens du danger, c'est " +
              "seulement très coûteux en matière.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 7) :
         l'exercice 2 donne F1 = 1000 N à 60° et F2 = 600 N à 90°, réponse
         1549 N. Le tirage est retenu justement parce que l'erreur y est
         SUBTILE : 1600 contre 1549, soit 3 % d'écart, donc un élève ne peut
         pas s'en sortir au flair et doit poser la décomposition. C'est un
         choix délibéré — l'exercice 11 (800 N à 30° et 400 N à 135°, réponse
         796 N) offre l'écart spectaculaire (1200 contre 796, soit 50 %) et
         fait donc un excellent DEUXIÈME support, à donner juste après pour
         montrer que l'angle entre les forces commande tout. Les donner dans
         cet ordre — le 2 d'abord, qui installe la méthode parce que rien
         d'autre ne marche, puis le 11, qui montre l'ampleur de l'enjeu — est
         la progression la plus efficace du chapitre. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que le produit scalaire est un vecteur, ou le confondre avec le produit des normes",
      eleve: "Sur $\\vec F = (200, 100)$ N et $\\vec d = (2, 3)$ m, l'élève répond $(400, 300)$ — un " +
             "vecteur — au lieu de $700$ J. Ou il calcule $\\|\\vec F\\| \\times \\|\\vec d\\| = 806$ J, " +
             "en oubliant le cosinus.",
      cause: "Le mot « produit » induit en erreur, et il le fait légitimement : partout ailleurs en " +
             "mathématiques, multiplier deux objets de même nature donne un objet de même nature. " +
             "Le produit scalaire est la première opération que ce public rencontre qui change la " +
             "nature de ce qu'elle manipule — deux vecteurs entrent, un nombre sort. Rien dans la " +
             "notation $\\vec u \\cdot \\vec v$ ne le signale, et les deux flèches au-dessus " +
             "suggèrent même le contraire. Quant à l'oubli du cosinus, il vient de la forme " +
             "géométrique lue trop vite : on retient « produit des normes » et le facteur " +
             "angulaire, qui est pourtant l'essentiel, se perd. Ce n'est pas de l'inattention : " +
             "c'est une notation qui ment sur ce qu'elle fait.",
      remede: "Faire nommer le <strong>résultat par son unité</strong> avant de le calculer, parce " +
              "que l'unité tranche sans discussion : le travail d'une force se mesure en JOULES, " +
              "qui est une unité de nombre, pas de vecteur. Une réponse écrite avec deux " +
              "composantes est disqualifiée avant d'être vérifiée.<br/><br/>" +
              "Ancrer ensuite le <strong>sens physique du cosinus</strong>, qui est ce qui " +
              "manque : seule la part de la force qui va DANS LE SENS du déplacement travaille. " +
              "Une force perpendiculaire au déplacement ne travaille pas du tout — c'est pour " +
              "cela qu'on ne se fatigue pas à porter une valise sur un chemin horizontal, alors " +
              "qu'on se fatigue à la monter. L'image est triviale, elle installe définitivement " +
              "le cosinus.<br/><br/>" +
              "Faire enfin <strong>vérifier les deux formes l'une par l'autre</strong>, ce que ce " +
              "chapitre permet et que presque aucun manuel n'offre : le même travail se calcule " +
              "par $F_x d_x + F_y d_y$ et par $Fd\\cos\\theta$, et les deux doivent donner le même " +
              "nombre. Le constater une fois vaut toutes les démonstrations. Sur une note de " +
              "calcul de manutention, c'est aussi le contrôle croisé qu'on attend d'un technicien.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 donne
         F = (200, 100) N et d = (2, 3) m et demande W, réponse 700 J. C'est
         LE tirage qui sanctionne les deux variantes de l'erreur : la réponse
         est un NOMBRE (700), donc l'élève qui rend un vecteur (400, 300) se
         voit immédiatement ; et comme les deux vecteurs ne sont pas
         colinéaires, le produit des normes (223,6 x 3,6 = 806) diffère
         nettement du produit scalaire (700), donc l'oubli du cosinus se
         détecte aussi. Préféré à l'exercice 10 (F = (150, 80), d = (3, 2),
         réponse 610 J) parce que sur le 10 le produit des normes vaut 613,
         soit un écart de 0,5 % avec la bonne réponse : l'erreur y serait
         invisible à la correction. C'est ce qui départage les deux, et cela
         vaut d'être connu — l'exercice 10 reste un bon entraînement, mais il
         ne diagnostique rien sur le cosinus. Les exercices 5 et 7, qui
         calculent le même travail par la forme géométrique, sont le
         complément indispensable évoqué dans le remède. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Ne pas gérer le signe des composantes hors du premier quadrant",
      eleve: "Pour une force de $400$ N à $135°$, l'élève calcule $F_x = 400\\cos 135° = +283$ N " +
             "au lieu de $-283$ N, parce qu'il a pris le cosinus « en valeur ». La résultante en " +
             "sort fausse de plusieurs centaines de newtons.",
      cause: "SOH-CAH-TOA a été appris dans le TRIANGLE RECTANGLE, où tous les côtés sont des " +
             "longueurs, donc des nombres positifs. L'extension au cercle trigonométrique — où " +
             "cosinus et sinus deviennent des COORDONNÉES, donc des nombres signés — est un " +
             "changement de statut, pas une simple généralisation, et il n'est presque jamais " +
             "explicité comme tel. Un adulte qui a solidement retenu le triangle rectangle " +
             "applique donc ce qu'il sait, et ce qu'il sait est juste dans son domaine de " +
             "validité. S'y ajoute que la calculatrice, elle, rend bien un nombre négatif : " +
             "l'élève voit le signe moins, ne comprend pas d'où il sort, et le supprime en " +
             "croyant corriger une anomalie.",
      remede: "Faire <strong>situer le vecteur sur un croquis avant de calculer</strong> — un " +
              "simple repère et une flèche approximative suffisent. Une force à $135°$ pointe vers " +
              "le haut ET vers la gauche, donc sa composante horizontale est forcément négative. " +
              "Le signe se décide sur le dessin, pas sur la calculatrice, et il est alors " +
              "impossible de se tromper.<br/><br/>" +
              "Faire ensuite <strong>faire confiance à la machine</strong>, ce qui mérite d'être " +
              "dit explicitement à ce public : $\\cos(135°) = -0{,}707$, et ce signe moins est la " +
              "bonne réponse, pas une erreur d'affichage. Beaucoup d'adultes « corrigent » un " +
              "signe qu'ils ne comprennent pas ; leur dire qu'il est juste débloque plus qu'une " +
              "explication théorique.<br/><br/>" +
              "Nommer enfin la <strong>conséquence de terrain</strong>, qui est la plus grave du " +
              "chapitre : deux forces qui s'OPPOSENT partiellement donnent une résultante bien " +
              "plus faible que deux forces qui coopèrent. Perdre un signe, c'est transformer un " +
              "équilibre en déséquilibre sur une note de calcul — et, sur un point d'accrochage " +
              "d'équipement suspendu, conclure à tort que le montage tient.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 11 donne
         F1 = 800 N à 30° et F2 = 400 N à 135°, résultante 796 N. C'est le
         SEUL exercice numéroté du chapitre dont un angle dépasse 90° : les
         exercices 2 (60° et 90°), 5 (30°), 6, 7 (20°), 10 et 12 restent tous
         dans le premier quadrant ou pile sur l'axe. Il n'y a donc pas
         d'alternative, et le tirage est de toute façon excellent : l'élève
         qui garde F2x positif trouve environ 1140 N au lieu de 796 N, soit
         43 % d'erreur. Le résultat correct (796 N) est par ailleurs
         INFÉRIEUR à la plus grande des deux forces additionnées de la
         seconde (1200 N) et même proche de F1 seule (800 N), ce qui illustre
         magnifiquement le remède : la force à 135° annule presque la
         composante horizontale de la première au lieu de s'y ajouter.
         L'exercice 1 (vecteurs (2,4) et (1,-1), angle 108,4°) touche au sujet
         par un autre biais — une composante négative donnée en clair — et
         fait un bon complément. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Chercher la perpendicularité en égalant les composantes plutôt qu'en annulant le produit scalaire",
      eleve: "Pour que $\\vec v = (15, y)$ soit perpendiculaire à $\\vec u = (4, 5)$, l'élève " +
             "propose $y = 15 \\times 5/4$, ou cherche un vecteur « à l'envers » et écrit " +
             "$y = -15$. La bonne réponse est $y = -12$.",
      cause: "La perpendicularité est une notion GÉOMÉTRIQUE — un angle droit, ça se voit — et elle " +
             "est ici testée par une condition ALGÉBRIQUE dont le lien avec l'image n'est pas " +
             "évident. L'élève cherche donc dans le registre qu'il comprend, celui du dessin, et " +
             "tente d'inverser ou de retourner les composantes « à vue ». Sa démarche n'est pas " +
             "absurde : il existe bel et bien une recette géométrique (échanger les deux " +
             "composantes et changer un signe), mais elle donne un vecteur perpendiculaire " +
             "PARTICULIER, pas celui dont la première composante vaut $15$. Le stagiaire est donc " +
             "sur une piste correcte qu'il applique hors de son domaine — c'est beaucoup plus " +
             "encourageant à entendre que « c'est faux », et c'est exact.",
      remede: "Poser la <strong>condition comme une équation à résoudre</strong>, en une ligne : " +
              "$\\vec u \\cdot \\vec v = 0$ s'écrit $4 \\times 15 + 5y = 0$, donc $60 + 5y = 0$, " +
              "donc $y = -12$. Le problème géométrique est devenu une équation du premier degré, " +
              "c'est-à-dire quelque chose que l'élève sait faire depuis le chapitre 1. Nommer " +
              "explicitement ce transfert : c'est toute la puissance du calcul vectoriel, et " +
              "c'est ce qui le rend utile en BTS.<br/><br/>" +
              "Faire ensuite <strong>vérifier en recalculant le produit scalaire</strong> : " +
              "$4 \\times 15 + 5 \\times (-12) = 60 - 60 = 0$. Une vérification qui tient en une " +
              "ligne et qui ne laisse aucun doute — le cours la présente comme « le test le plus " +
              "rapide pour vérifier une perpendicularité », et c'est vrai.<br/><br/>" +
              "Relier enfin au <strong>geste de métier</strong>, qui donne son sens à l'exercice : " +
              "positionner un renfort perpendiculaire à un tirant, une équerre sur une poutre, un " +
              "bras de levier sur un arbre — c'est exactement ce que fait le calcul. Le produit " +
              "scalaire nul est la version calculable de l'équerre du charpentier, et elle a " +
              "l'avantage de fonctionner sur un plan avant que la pièce existe.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 demande y
         tel que (15, y) soit perpendiculaire à (4, 5), réponse -12. Choisi
         plutôt que l'exercice 8 ((8, y) perpendiculaire à (6, 4), réponse
         -12 également) pour une raison de diagnostic : sur le 8, le rapport
         6/4 se simplifie en 3/2 et 8 est un multiple de 4, de sorte qu'un
         élève peut retrouver -12 par proportionnalité mentale sans jamais
         poser le produit scalaire — l'exercice valide alors une méthode
         fausse. Sur le 4, les nombres 4, 5 et 15 ne se simplifient pas :
         il faut écrire 60 + 5y = 0. Coïncidence notable du tirage, relevée
         ici pour l'enseignant : les deux exercices ont la MÊME réponse
         (-12), et S1 de la banque supplémentaire aussi. Ne les donnez pas à
         la suite dans un devoir, un élève pourrait recopier. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — c'est le cas le plus fréquent du dossier (huit
     chapitres sur quatorze), mais pas une règle : la trigonométrie en a huit
     et cinq chapitres en ont cinq. Compter dans le dump avant d'écrire.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — norme de $\vec F = (350, -200)$ N. Application directe de
          $\sqrt{F_x^2 + F_y^2}$ sur deux nombres donnés, la formule étant au
          programme du cours. Exécution. « calculer ».
     Q2 — trois forces s'appliquent en un point ; le système est-il en
          équilibre ? Parmi quatre propositions. La question ne demande pas un
          nombre mais un JUGEMENT sur une propriété physique, et il faut
          l'établir : sommer composante par composante, constater que la
          résultante n'est pas nulle, conclure au déséquilibre, et rejeter
          trois distracteurs dont l'un est un piège (« impossible à dire sans
          les points d'application »). C'est une déduction en plusieurs pas
          suivie d'un verdict. « raisonner ».
     Q3 — travail d'une palette tirée sur $12$ m avec $300$ N à $25°$. La
          formule $W = Fd\cos\theta$ est celle du cours ; les trois nombres
          sont fournis dans l'ordre. Exécution. « calculer ».
     Q4 — angle entre $\vec{T_1} = (0, 800)$ et $\vec{T_2} = (600, 0)$. La
          correction révèle ce qui est attendu : constater que le produit
          scalaire est nul et EN DÉDUIRE que l'angle vaut $90°$, sans passer
          par l'arccosinus. Ce n'est pas un calcul mais une inférence à partir
          d'une propriété — « un produit scalaire nul entre deux vecteurs non
          nuls signifie qu'ils sont perpendiculaires ». « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2.
     « chercher », « modéliser », « représenter » et « communiquer » ne sont
     PAS mobilisés. L'absence de « représenter » est notable dans un chapitre
     de géométrie : aucune des quatre questions ne demande de tracer une
     résultante ni de lire un schéma — tout est donné en composantes. C'est un
     constat sur les quatre énoncés, non corrigé par complaisance. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner"]
  }
};
