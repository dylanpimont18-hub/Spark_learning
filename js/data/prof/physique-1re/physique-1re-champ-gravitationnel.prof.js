/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-champ-gravitationnel.prof.js
   Fiche professeur du chapitre « Interactions fondamentales et champ
   gravitationnel » (première spécialité), pour l'édition du professeur.
   JAMAIS chargée par le site : ce fichier n'est référencé ni dans index.html
   ni dans js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de
   compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 0, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   20 énoncés tirés seulement, dont 12 numérotés et 8 en banque
   supplémentaire — le chapitre le plus pauvre du niveau après lewis. Deux
   moules alternés :
     - moule A (loi de gravitation, $F = GMm/r^2$) : exercices IMPAIRS 1, 3, 5,
       7, 9, 11, plus le 12 ;
     - moule B (champ de surface, $g = GM/R^2$)    : exercices PAIRS 2, 4, 6,
       8, 10.
   Fait remarquable et exploité ci-dessous : le moule B tire des astres dont le
   champ de surface est très inférieur à celui de la Terre (Lune $1{,}62$,
   Titan $1{,}36$, Mercure $3{,}7$, Mars $3{,}73$, Vénus $8{,}87$ m/s²). C'est
   la seule série du chapitre qui permette de contrôler un ordre de grandeur
   par comparaison à $9{,}81$ m/s², et l'erreur 2 s'y appuie.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-champ-gravitationnel"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et c'est un fait, pas un oubli : ce chapitre ouvre le bloc
     mécanique. Il n'a besoin ni de la cinématique (ch. 3 — aucun vecteur
     vitesse ni accélération ici), ni des lois de Newton (ch. 4 — la troisième
     loi est REDÉMONTRÉE dans ce chapitre-ci, à son propre compte, sous le nom
     de « principe des actions réciproques » ; c'est le chapitre 4 qui la
     reprend, pas l'inverse), ni du travail (ch. 5), qui vient longtemps après.

     ch. 2 (Champ électrostatique) : ÉCARTÉ, et c'est le candidat le plus
     tentant, parce que la loi de Coulomb a exactement la forme de la loi de
     gravitation. Mais la dépendance joue dans l'AUTRE sens : c'est le
     chapitre 2 qui gagne à s'appuyer sur celui-ci (« même forme en $1/r^2$,
     mais deux signes possibles »), pas celui-ci qui aurait besoin des charges.
     Déclarer le 2 en prérequis créerait en outre un cycle, puisque le 2 se
     déclare appuyé sur le 1. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1, celui du livre.

     C'est le chapitre d'ouverture naturel de la première : il fournit les
     FORCES dont tout le bloc mécanique a besoin ensuite, et il le fait sur le
     terrain le plus familier (le poids, les planètes). Le placer ailleurs
     coûterait cher — le chapitre 2 (champ électrique) est construit par
     analogie avec lui, et le chapitre 4 (Newton) réutilise ses actions
     réciproques.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : les puissances de dix et la notation
     scientifique, rien de plus. Aucun vecteur n'est manipulé en composantes,
     aucune dérivée n'est demandée. C'est ce qui autorise le rang 1 — le
     chapitre est le seul du bloc mécanique à ne dépendre d'aucun outil
     mathématique construit dans l'année. En revanche, l'aisance sur
     $10^{-11}$ et $10^{24}$ n'est PAS acquise en début de première : c'est
     là-dessus que se joue le chapitre, et c'est l'objet de l'erreur 1. */
  rangConseille: 1,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser l'expression vectorielle de la force d'interaction gravitationnelle",
    "Caractériser le champ gravitationnel créé par un astre à une distance de son centre",
    "Utiliser l'expression vectorielle du champ de gravitation et la relation approchée entre poids et champ de gravitation"
  ],

  note: "La loi de gravitation universelle, le vecteur champ de gravitation et la relation " +
        "$\\vec{P} = m\\vec{g}$ sont au programme de spécialité de première : le chapitre ne " +
        "déborde pas. Le principe des actions réciproques y figure aussi, mais comme " +
        "<em>outil</em> de lecture de l'interaction, la troisième loi étant formellement " +
        "traitée au chapitre 4.<br/><br/>" +
        "<strong>Aucun prérequis de première, deux prérequis de SECONDE non déclarables.</strong> " +
        "La colonne « S'appuie sur » de la progression affichera un tiret, et c'est exact : ce " +
        "chapitre ouvre le bloc mécanique de l'année. Il suppose toutefois acquis " +
        "<strong>« Modélisation d'une action mécanique »</strong> et la distinction " +
        "<strong>masse / poids</strong>, qui sont des chapitres de <strong>seconde</strong> : un " +
        "prérequis ne pouvant viser qu'un chapitre du même niveau, rien ne l'affichera. Si la " +
        "classe confond encore les kilogrammes et les newtons, le reprendre " +
        "<strong>avant</strong> : le chapitre ne refait pas cette distinction, il l'utilise à " +
        "chaque ligne.<br/><br/>" +
        "<strong>Le vrai prérequis est mathématique, et il est en début d'année.</strong> Tout le " +
        "chapitre vit dans la <strong>notation scientifique</strong> : $G$ vaut " +
        "$6{,}67\\times10^{-11}$, la masse de la Terre $5{,}97\\times10^{24}$, et un rayon " +
        "orbital $7{,}0\\times10^{6}$ m. Un élève qui ne manipule pas sûrement les puissances de " +
        "dix ne se trompera pas de physique, il se trompera de facteur $10^{6}$ — et il ne le " +
        "verra pas. Prévoir une reprise explicite des règles de calcul sur les puissances " +
        "<strong>avant</strong> le premier exercice, pas après la première copie.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt énoncés tirés (douze numérotés, huit en banque) n'enchaînent que deux gestes : " +
        "calculer $F = G\\dfrac{Mm}{r^2}$ pour un satellite, et calculer $g = G\\dfrac{M}{R^2}$ à " +
        "la surface d'un astre. Trois absences à connaître avant de composer un devoir. Le " +
        "<strong>poids $P = mg$</strong> n'apparaît dans <strong>aucun</strong> exercice, alors " +
        "qu'il est le troisième attendu officiel : il n'est évalué que par la question 5 de " +
        "l'évaluation, et depuis sa réécriture du 2026-09-17 il n'y est plus qu'un calcul " +
        "auxiliaire, au service de la distinction entre le champ et la force. Le " +
        "<strong>principe des actions réciproques</strong> n'apparaît lui non " +
        "plus dans aucun énoncé (seule la question 2 de l'évaluation le porte). Et aucun " +
        "exercice ne demande de <strong>comparer</strong> deux situations ou de discuter une " +
        "variation de distance : la dépendance en $1/r^2$ est appliquée, jamais interrogée. Ces " +
        "trois travaux sont à construire ; le manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Perdre un facteur dix dans la notation scientifique",
      eleve: "Pour un satellite à $r = 7{,}0\\times10^{6}$ m, l'élève tape la parenthèse au carré " +
             "comme $7{,}0\\times10^{12}$ au lieu de $4{,}9\\times10^{13}$ — il élève $10^{6}$ au " +
             "carré mais oublie le $7{,}0$, ou l'inverse. Il annonce alors une force de " +
             "$26\\,000$ N au lieu de $6\\,501$ N, sans être alerté par le résultat.",
      cause: "Le calcul n'est pas difficile, il est <strong>invisible</strong>. Sur une " +
             "calculatrice, $(7{,}0\\times10^6)^2$ mal parenthésé donne un nombre parfaitement " +
             "plausible, et rien à l'écran ne signale la faute. C'est une erreur de " +
             "<strong>notation scientifique</strong>, propre au lycée : au collège, les nombres " +
             "étaient lisibles et une absurdité se voyait. Ici, $2{,}6\\times10^4$ et " +
             "$6{,}5\\times10^3$ se ressemblent beaucoup pour un œil qui n'a pas encore de repère " +
             "sur les forces gravitationnelles.",
      remede: "Imposer la <strong>séparation systématique</strong> du calcul en deux : d'abord " +
              "les nombres, ensuite les puissances de dix. Pour l'exemple du cours : " +
              "$\\dfrac{6{,}67 \\times 5{,}97 \\times 800}{7{,}0^2}$ d'un côté, " +
              "$\\dfrac{10^{-11} \\times 10^{24}}{(10^{6})^2} = 10^{13-13} = 10^{0}$ de l'autre. " +
              "Deux calculs simples remplacent une saisie longue où tout peut " +
              "déraper.<br/><br/>" +
              "Faire ensuite poser l'<strong>ordre de grandeur attendu avant le calcul</strong>, " +
              "au brouillon : « un satellite de quelques centaines de kilogrammes, ça pèse " +
              "quelques milliers de newtons, pas quelques dizaines de milliers ». Un élève qui a " +
              "écrit $10^3$ avant de calculer refuse de lui-même un résultat en " +
              "$10^4$.<br/><br/>" +
              "Rappeler enfin la règle qui sauve, et qu'on oublie de dire tant elle paraît " +
              "évidente : le carré porte sur <strong>tout</strong> le nombre, coefficient " +
              "compris. $(7{,}0\\times10^6)^2 = 49\\times10^{12} = 4{,}9\\times10^{13}$. Faire " +
              "écrire cette ligne séparément, une fois par exercice, tant que l'automatisme " +
              "n'est pas là.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 0) : l'exercice 3 donne m = 800 kg,
         r = 7 000 000 m, réponse F = 6501,2 N. C'est exactement le jeu de
         valeurs de l'exemple résolu du cours, ce qui en fait le meilleur
         support de cette erreur : l'élève peut confronter sa ligne de calcul
         à celle du cours, ligne à ligne, et voir OÙ le facteur se perd — pas
         seulement constater que le résultat diffère. Aucun autre exercice
         numéroté n'offre cette confrontation directe. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Croire que le champ de gravitation dépend de la masse qui le subit",
      eleve: "Pour calculer $g$ à la surface de la Lune, l'élève cherche la masse de l'objet posé " +
             "dessus, et déclare l'exercice impossible « puisqu'on ne la donne pas ». Ou bien il " +
             "affirme qu'un objet lourd « subit un $g$ plus grand » qu'un objet léger placé au " +
             "même endroit.",
      cause: "Confusion entre le champ et la force, entretenue par la relation " +
             "$\\vec{P} = m\\vec{g}$ où les deux cohabitent. L'élève voit une masse dans " +
             "l'expression du poids, et en conclut que la masse intervient partout. Le mot " +
             "« champ » n'aide pas : il désigne une propriété de l'<strong>espace</strong>, créée " +
             "par l'astre et existant même si rien n'y est posé — idée neuve et abstraite, qui " +
             "n'a aucun équivalent au collège.",
      remede: "Lire les deux formules à voix haute et compter les masses : $g = G\\dfrac{M}{r^2}$ " +
              "n'en contient <strong>qu'une</strong>, celle de l'astre qui CRÉE le champ ; " +
              "$P = mg$ en contient une seconde, celle de l'objet qui le SUBIT. Deux masses, deux " +
              "rôles, et jamais dans la même formule.<br/><br/>" +
              "Utiliser l'image qui fait céder l'obstacle : le champ est là " +
              "<strong>avant</strong> qu'on pose quoi que ce soit. À $400$ km d'altitude, $g$ " +
              "existe même si aucun satellite n'y passe — comme la température d'une pièce existe " +
              "avant qu'on y entre. C'est l'objet posé qui révèle le champ, ce n'est pas lui qui " +
              "le fabrique.<br/><br/>" +
              "Faire vérifier enfin par un contrôle d'unités, qui tranche : $g$ s'exprime en N/kg, " +
              "c'est-à-dire en <strong>newtons par kilogramme</strong>. La formulation dit " +
              "elle-même que $g$ est ce qu'on obtient <em>par</em> kilogramme, donc une grandeur " +
              "qui ne dépend pas du nombre de kilogrammes.",
      /* Vérifié contre le tirage réel (2026-09-17) : les exercices 2, 4, 6, 8
         et 10 (moule B) ne donnent AUCUNE masse d'objet — seulement la masse
         M de l'astre et son rayon R. L'exercice 2 (Lune, R = 1,74e6 m,
         M = 7,35e22 kg, réponse g = 1,62 m/s²) est choisi parce que la Lune
         est l'astre dont l'élève a un repère : il sait que le poids y est
         « six fois plus faible », et 9,81/1,62 = 6,05 confirme ce repère au
         dixième près. L'énoncé est donc à la fois le contre-exemple qui fait
         tomber l'erreur (rien à chercher du côté de l'objet) et un contrôle
         de vraisemblance immédiat. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Mesurer la distance depuis la surface au lieu du centre",
      eleve: "Pour un satellite « en orbite à $600$ km d'altitude », l'élève prend " +
             "$r = 6{,}0\\times10^{5}$ m au lieu de $r = 6{,}97\\times10^{6}$ m (rayon terrestre " +
             "$+$ altitude). La force trouvée est alors plus de cent fois trop grande.",
      cause: "L'altitude est la grandeur du langage courant — c'est celle qu'annoncent les " +
             "journaux, celle qu'on lit dans un avion. La loi, elle, exige une distance " +
             "<strong>entre les centres</strong>, ce qui suppose d'accepter qu'on traite la Terre " +
             "entière comme un point situé en son milieu. Cette modélisation est un saut " +
             "conceptuel réel, rarement explicité, et l'élève qui ne l'a pas fait n'a aucune " +
             "raison d'aller chercher le rayon terrestre dans un énoncé qui parle d'altitude.",
      remede: "Faire <strong>dessiner</strong> la situation, systématiquement, avant tout calcul : " +
              "un cercle pour la Terre, un point au centre, le satellite à l'extérieur, et la " +
              "flèche de $r$ tracée depuis le <strong>centre</strong>. Sur un dessin, l'erreur " +
              "devient visible ; dans une ligne de calcul, jamais.<br/><br/>" +
              "Justifier la modélisation plutôt que l'imposer : la loi de Newton s'écrit pour des " +
              "masses <strong>ponctuelles</strong>, et l'on démontre (hors programme, mais on " +
              "peut l'admettre explicitement) qu'une sphère homogène attire comme si toute sa " +
              "masse était concentrée en son centre. C'est exactement pour cela que le champ de " +
              "surface se calcule avec $R$, le rayon : à la surface, on est à une distance $R$ du " +
              "centre, pas à une distance nulle.<br/><br/>" +
              "Installer enfin le réflexe d'écriture $r = R_{Terre} + h$ et le faire poser " +
              "<strong>même quand l'énoncé donne déjà $r$</strong>. Répéter la ligne quand elle " +
              "est inutile est ce qui la rend disponible le jour où elle ne l'est pas.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des vingt énoncés tirés
         ne donne une altitude. Le moule A dit toujours « en orbite à une
         distance r = ... du centre de la Terre » (le mot « centre » est même
         écrit dans l'énoncé), et le moule B donne directement le rayon R de
         l'astre. L'erreur est donc réelle et classique, mais le générateur
         l'écarte par construction — un renvoi vers un de ces exercices
         enverrait l'enseignant vers un énoncé qui ne peut pas la déclencher.
         C'est une limite du chapitre à connaître : l'exercice « altitude »
         est à écrire soi-même, en reprenant par exemple le satellite de
         l'exercice 3 et en donnant 620 km d'altitude au lieu de r, avec
         R_Terre = 6,38e6 m — on retombe sur r = 7,0e6 m et donc sur la
         réponse déjà connue, 6501 N. */
      exercice: null
    },
    {
      titre: "Croire que le plus massif attire plus fort qu'il n'est attiré",
      eleve: "Devant l'attraction Terre-Lune, l'élève affirme que « la Terre attire la Lune " +
             "beaucoup plus fort que la Lune n'attire la Terre, puisqu'elle est " +
             "quatre-vingts fois plus massive ». Il transpose le raisonnement à un objet qui " +
             "tombe : « la Terre attire la pomme, mais la pomme n'attire pas la Terre ».",
      cause: "L'élève confond la <strong>force</strong> et ses <strong>effets</strong>, et son " +
             "observation est juste : la Lune tourne autour de la Terre, la pomme tombe et la " +
             "Terre ne bouge pas. Ce qu'il manque, c'est que des forces ÉGALES appliquées à des " +
             "masses très différentes produisent des accélérations très différentes. La formule " +
             "elle-même le dit d'ailleurs sans ambiguïté — $F = G\\dfrac{m_1m_2}{r^2}$ est " +
             "<strong>symétrique</strong> en $m_1$ et $m_2$ : on ne peut pas en tirer deux " +
             "valeurs différentes selon le sens où on la lit.",
      remede: "Partir de la symétrie de l'écriture, qui est ici l'argument le plus fort et le plus " +
              "court : dans $G\\dfrac{m_1m_2}{r^2}$, rien ne distingue $m_1$ de $m_2$. " +
              "Échanger les deux lettres ne change pas le nombre. Il n'y a donc " +
              "<strong>qu'une seule valeur</strong> de force, et deux vecteurs opposés qui la " +
              "portent.<br/><br/>" +
              "Traiter l'objection de front plutôt que de l'écarter : « tu as raison, la pomme " +
              "tombe et la Terre semble immobile — et pourtant les deux forces sont égales ». " +
              "Puis résoudre la tension : la Terre subit bien la même force, mais avec " +
              "$6\\times10^{24}$ kg, l'accélération qui en résulte est indétectable. Ce sont les " +
              "<strong>effets</strong> qui diffèrent, jamais les forces.<br/><br/>" +
              "Faire nommer les deux systèmes à voix haute pour chaque paire : « la force de la " +
              "Terre <strong>sur</strong> la Lune » et « la force de la Lune " +
              "<strong>sur</strong> la Terre ». La préposition <em>sur</em> porte toute la loi, et " +
              "dès qu'on la prononce, on voit que les deux forces ne s'appliquent pas au même " +
              "objet — donc qu'elles ne se compensent pas, ce qui est l'erreur jumelle à " +
              "surveiller.",
      /* Volontairement SANS renvoi, et vérifié : aucun des vingt énoncés tirés
         ne met en jeu la réciprocité. Le moule A calcule la force « exercée
         par la Terre sur le satellite » et s'arrête là ; le moule B ne fait
         intervenir qu'un seul astre. La question 2 de l'évaluation travaille
         exactement cette erreur (Terre-Lune, avec le distracteur « normes
         différentes, proportionnelles aux masses »), mais une remédiation ne
         renvoie jamais vers l'évaluation notée (règle du projet). Le travail
         est donc à construire, et le remède dit comment : la symétrie de
         l'écriture suffit, aucun matériel n'est nécessaire. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $m = 1\,000$ kg, $r = 8{,}0\times10^6$ m, calculer $F$. La relation
          est donnée au cours et s'applique dans le sens direct, sans choix ni
          renversement : exécution, donc « réaliser ». Que le calcul soit long
          (puissances de dix) ne le rend pas plus qu'une exécution.
     Q2 — actions réciproques Terre-Lune, choix multiple. Restitution du
          principe des actions réciproques, avec le distracteur de masse qui
          est l'erreur 4 de cette fiche : « s'approprier ».
     Q3 — $r$ multipliée par $1{,}5$ : par quel facteur $F$ est-elle
          multipliée ? Rien à calculer numériquement ; il faut juger quatre
          affirmations sur une variation et écarter celle qui ignore le carré :
          « valider ».
     Q4 — $M$ et $R$ de Mars donnés, calculer $g$. Sens direct de
          $g = GM/R^2$ : « réaliser ».
     Q5 — RÉÉCRITE le 2026-09-17. L'ancien énoncé ($g_L$ et $m$ donnés,
          calculer $P$) appliquait $P = mg$, la relation la plus simple du
          chapitre, juste après une Q4 qui calcule déjà un $g$ par
          $g = GM/R^2$ : la question ne faisait que remultiplier par une masse,
          et elle étiquetait « réaliser » une troisième exécution.
          Le nouvel énoncé donne $M$ et $R$ de la Lune, et une élève qui
          déclare l'exercice impossible « puisqu'on ne donne pas la masse de
          l'objet ». Il faut EXPLIQUER que $g = GM/R^2$ ne contient qu'une
          masse, celle de l'astre qui CRÉE le champ, tandis que $P = mg$ en
          contient une seconde, celle de l'objet qui le SUBIT : produire une
          explication, donc « communiquer ».
          Le calcul reste nécessaire, et il est double : il faut mener
          $g_{Lune} = 1{,}62$ N/kg sur les données fournies pour constater
          qu'aucune masse d'objet n'y intervient, puis $P = mg$ sur les deux
          masses ($130$ N et $3{,}2$ N) pour voir ce qui, lui, dépend bien de
          l'objet. Le distracteur 3 est le plus retors : sa formule
          $F = GMm/R^2$ est JUSTE, mais elle décrit une force, pas un champ.
          La question porte désormais sur l'erreur 2 de cette fiche — « croire
          que le champ de gravitation dépend de la masse qui le subit ».

     « Réaliser » était évalué TROIS fois avant la réécriture de la Q5, ce qui
     reflétait fidèlement un chapitre dont les deux moules d'exercice sont deux
     applications directes de formule ; il l'est désormais deux fois, et le
     déséquilibre restant est un CONSTAT, pas un choix : corriger davantage en
     étiquetant Q4 « analyser » serait malhonnête, la relation y étant employée
     dans le sens où le cours l'écrit. « Communiquer » est mobilisé une fois,
     sur le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique. Les cinq compétences du référentiel sont
     désormais toutes représentées dans ce devoir. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "valider", "réaliser", "communiquer"]
  }
};
