/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-inertie.prof.js
   Fiche professeur du chapitre « Principe d'inertie » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 2, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés :
     - moule A ($x = x_0 + v\,t$, position après une durée) : exercices
       IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B ($v = d/\tau$, vitesse d'un mobile en MRU) : exercices PAIRS
       2, 4, 6, 8, 10, 12.
   Les deux moules ANNONCENT dans leur énoncé que les forces se compensent ou
   que les frottements sont négligeables, puis demandent un calcul cinématique.
   Autrement dit : le principe d'inertie y est une DONNÉE, jamais la question.
   Aucun exercice ne demande de faire un bilan de forces, de conclure sur la
   compensation à partir d'un mouvement observé, ni de distinguer un MRU d'un
   mouvement courbe à vitesse constante — c'est-à-dire aucun des trois gestes
   propres au chapitre. Deux des quatre erreurs ci-dessous sont donc
   volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-inertie"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     ch. 1 (Description d'un mouvement) : RETENU, et c'est le plus fort des
     deux. L'énoncé du principe d'inertie se termine sur « immobile ou animé
     d'un mouvement rectiligne uniforme », et la définition D3 insiste sur le
     fait que le MRU combine DEUX conditions (trajectoire droite ET vitesse
     de valeur constante). Ces deux conditions sont exactement ce que le
     chapitre 1 installe : trajectoire d'un côté, vitesse de l'autre. Sans
     lui, « MRU » n'est qu'un sigle. La définition D2 (référentiel galiléen)
     enfonce le clou : elle suppose la notion de référentiel, qui est la
     définition D1 du chapitre 1.

     ch. 2 (Modélisation d'une action mécanique, forces) : RETENU également.
     Le principe d'inertie est la RÉCIPROQUE du chapitre 2 : il part de
     forces qui « se compensent » — une notion vectorielle que seul le
     chapitre 2 définit — pour conclure sur le mouvement. Le pilote (ch. 2)
     dit d'ailleurs explicitement de ce chapitre-ci qu'il « s'appuie sur les
     forces, pas l'inverse » et refuse donc de le déclarer en prérequis.
     Les deux fiches se répondent, et la chaîne 1 → 2 → 3 est cohérente,
     sans cycle.

     Écartés : les chapitres 4 à 10 (chimie, signaux, son, lumière), aucun
     lien. Et le ch. 8 (Signaux), malgré la relation affine $U = aG + b$ qui
     ressemble formellement à $x = x_0 + v\,t$ du moule A : la ressemblance
     est mathématique et non physique, elle joue dans l'autre sens
     chronologique, et un élève n'a jamais besoin des capteurs pour
     comprendre l'inertie. */
  prerequis: [1, 2],

  /* Rang conseillé (2026-09-17) : rang 3, celui du livre. C'est le troisième
     et dernier maillon du bloc mécanique de la seconde — décrire un mouvement
     (1), modéliser ce qui le cause (2), énoncer le lien entre les deux (3) —
     et cet ordre n'admet aucune permutation : le principe d'inertie relie deux
     objets qui doivent exister avant lui.

     Un argument supplémentaire, souvent négligé : ce chapitre est le SEUL du
     niveau qui demande de raisonner dans les deux sens (forces compensées ⇒
     MRU, et réciproquement). Le placer en clôture du bloc permet de le
     présenter comme une synthèse plutôt que comme une notion de plus, ce qui
     change beaucoup la façon dont la classe le reçoit.

     Le livre le place aussi en chapitre 3 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 3,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Mouvement et interactions », partie « Principe
     d'inertie ». Repris aux mots du programme. */
  attendus: [
    "Exploiter le principe d'inertie ou sa contraposée pour en déduire des informations soit sur la nature du mouvement d'un système modélisé par un point matériel, soit sur les forces",
    "Relier la variation entre deux instants voisins du vecteur vitesse d'un système modélisé par un point matériel à l'existence d'actions extérieures modélisées par des forces dont la somme est non nulle",
    "Utiliser le principe d'inertie pour interpréter des situations de la vie courante"
  ],

  note: "Le principe d'inertie, sa réciproque, le référentiel galiléen et le mouvement rectiligne " +
        "uniforme sont au programme de seconde : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés <strong>donnent</strong> le principe d'inertie au lieu de le " +
        "faire travailler. Chacun annonce d'emblée que « les forces se compensent » ou que « les " +
        "frottements sont négligeables », puis demande un calcul purement cinématique : une " +
        "position $x = x_0 + v\\,t$, ou une vitesse $v = d/\\tau$. Le principe y est un " +
        "<strong>décor qui justifie l'énoncé</strong>, jamais la question posée. Aucun exercice ne " +
        "demande de <strong>faire le bilan</strong> des forces, de <strong>conclure</strong> sur " +
        "leur compensation à partir d'un mouvement observé, ni de <strong>distinguer</strong> un " +
        "MRU d'une trajectoire courbe parcourue à vitesse constante en valeur — alors que ce sont " +
        "les trois gestes propres au chapitre, et les trois attendus officiels ci-dessus. Un élève " +
        "peut donc réussir les douze exercices numérotés sans avoir compris le principe d'inertie. " +
        "<strong>L'exemple résolu du mobile autoporteur, lui, est complet</strong> : il constate le " +
        "MRU sur les mesures, fait le bilan des deux forces verticales, et ne conclut qu'ensuite. " +
        "C'est cet exemple qu'il faut prendre comme modèle de la tâche attendue, et prévoir en " +
        "complément quelques situations à débattre à l'oral (le virage, le freinage, la ceinture) " +
        "que le manuel ne fournit pas.<br/><br/>" +
        "Deux remarques de terrain. La première : ce chapitre est celui où l'<strong>obstacle " +
        "aristotélicien</strong> est le plus vif — l'idée qu'il faut une force pour entretenir un " +
        "mouvement est, historiquement, ce que l'humanité a cru pendant deux mille ans. Ce n'est " +
        "donc pas une distraction d'élève, c'est une conception dont Galilée lui-même a eu du mal à " +
        "sortir ; la traiter comme telle change tout au climat de la séance. La seconde : le mot " +
        "<strong>« galiléen »</strong> n'est défini ici que circulairement (« référentiel dans " +
        "lequel le principe d'inertie est vérifié »), et c'est assumé par le programme. Toute la " +
        "portée physique de la notion — référentiels en rotation, forces d'inertie — relève de la " +
        "<strong>première</strong> et de la <strong>terminale</strong> ; la colonne « S'appuie " +
        "sur » ne peut pas le montrer, puisqu'un prérequis ne vise qu'un chapitre du même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 est l'obstacle épistémologique central, celui que le cours
     désigne dans son encadré « piège » ; l'erreur 2 est l'erreur sur la
     DOUBLE condition du MRU, la plus discriminante du chapitre ; l'erreur 3
     est une erreur de calcul réellement présente dans le moule A ; l'erreur 4
     est la confusion vitesse constante / immobilité, spécifique au passage du
     collège au lycée. */
  erreurs: [
    {
      titre: "Croire qu'il faut une force pour entretenir un mouvement",
      eleve: "Devant un palet qui glisse sur la glace, l'élève affirme qu'« il y a une force qui le " +
             "pousse vers l'avant », et la dessine. Sur un objet lancé, il trace une flèche dans le " +
             "sens du mouvement qui « s'épuise » peu à peu. Il conclut qu'un objet s'arrête « parce " +
             "que la force du lancer se termine ».",
      cause: "Ce n'est pas une inattention, c'est la <strong>physique d'Aristote</strong>, celle que " +
             "l'humanité a tenue pour vraie pendant deux mille ans, et elle est parfaitement " +
             "rationnelle au vu de l'expérience quotidienne : dans notre monde, tout finit " +
             "effectivement par s'arrêter, et il faut effectivement pédaler sans cesse pour " +
             "maintenir sa vitesse. L'élève généralise donc une observation exacte. Ce qui lui " +
             "manque, c'est de savoir que les <strong>frottements</strong> sont la cause de l'arrêt, " +
             "et qu'ils sont si universels qu'ils passent inaperçus.",
      remede: "Ne pas commencer par contredire, mais par <strong>donner raison</strong> : oui, sur " +
              "une table de classe, tout s'arrête. La question n'est donc pas « pourquoi ça " +
              "s'arrête », elle est « <strong>qu'est-ce qui arrête</strong> ? ». Reformulée ainsi, " +
              "la classe trouve elle-même les frottements, et l'obstacle se retourne en " +
              "levier.<br/><br/>" +
              "Faire ensuite <strong>diminuer</strong> le frottement par étapes visibles, et non " +
              "l'annuler d'un coup : un palet sur la table de la salle (il s'arrête vite), sur une " +
              "patinoire ou une table à coussin d'air (il va très loin), et enfin la sonde Voyager, " +
              "lancée en 1977, qui file toujours sans le moindre moteur. Moins il y a de " +
              "frottement, plus le mouvement dure — la limite est claire, et le principe d'inertie " +
              "n'est que cette limite.<br/><br/>" +
              "Imposer enfin, à chaque schéma, la question <strong>« qui exerce cette force ? »</strong>. " +
              "Une flèche « force du lancer » ne survit pas à la question : la main n'est plus en " +
              "contact, elle n'exerce donc plus rien. Une force qui n'a pas d'auteur PRÉSENT " +
              "n'existe pas, et ce test attrape l'erreur à tous les coups.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 2) : l'exercice 1 met en scène « une luge
         lancée sur un lac gelé parfaitement plat », donne v = 6,4 m/s et
         x_0 = 10,6 m, et demande la position après t = 11 s (réponse 81 m).
         Le renvoi le choisit pour une raison précise, et non parce qu'il est
         le premier : c'est le tirage où la DURÉE est la plus longue des six du
         moule A (11 s, à égalité avec l'exercice 7), donc celui où la question
         « et au bout de onze secondes, qu'est-ce qui la pousse encore ? » a le
         plus de force. L'énoncé pose que les forces se compensent ; le calcul
         montre que la luge a parcouru plus de 70 mètres sans rien pour
         l'entretenir. C'est le support le plus économique pour faire toucher
         du doigt que le mouvement n'a pas besoin de cause. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier que le MRU demande DEUX conditions",
      eleve: "Devant une voiture qui aborde un virage à $50$ km/h constants, l'élève conclut que « la " +
             "vitesse ne change pas, donc les forces se compensent ». Inversement, sur une " +
             "trajectoire bien droite mais parcourue en accélérant, il conclut aussi qu'elles se " +
             "compensent, parce que « c'est rectiligne ».",
      cause: "Le sigle <strong>MRU</strong> est retenu comme un mot unique, et l'élève en active la " +
             "moitié qui lui saute aux yeux : la vitesse s'il lit un nombre constant, la trajectoire " +
             "s'il voit une ligne droite. La difficulté de fond est ailleurs : pour que « vitesse " +
             "constante » ait le sens exigé ici, il faut penser le <strong>vecteur</strong> " +
             "vitesse — direction comprise — et non seulement sa valeur. Or un virage à vitesse " +
             "constante en valeur est justement le cas où le vecteur change alors que le nombre ne " +
             "change pas. C'est subtil, et personne ne le trouve seul.",
      remede: "Séparer explicitement les deux conditions et les faire vérifier " +
              "<strong>l'une après l'autre</strong>, à voix haute, dans cet ordre : « la " +
              "trajectoire est-elle une droite ? » puis « la valeur de la vitesse est-elle " +
              "constante ? ». Deux « oui » et seulement deux : c'est un MRU. Un seul « oui » ne " +
              "conclut rien.<br/><br/>" +
              "Faire ensuite travailler le tableau des <strong>quatre cas</strong>, qui rend " +
              "l'oubli impossible : droite + vitesse constante (MRU, forces compensées) ; droite + " +
              "vitesse variable (pas un MRU) ; courbe + vitesse constante (pas un MRU non plus, et " +
              "c'est le cas piège) ; courbe + vitesse variable (pas un MRU). Trois cas sur quatre " +
              "ne sont pas des MRU — le MRU est l'exception, pas la règle.<br/><br/>" +
              "Revenir enfin au <strong>vecteur</strong> vitesse du chapitre 1, qui tranche d'un " +
              "mot : dans un virage, la direction du vecteur tourne, donc le vecteur change, donc " +
              "quelque chose le fait changer, donc les forces ne se compensent pas. « La vitesse ne " +
              "change pas » est une phrase ambiguë ; « le vecteur vitesse ne change pas » ne l'est " +
              "plus.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : les vingt-sept énoncés ne mettent en scène QUE des
         trajectoires rectilignes (lac gelé plat, rail rectiligne, table à
         coussin d'air, patinoire) et QUE des vitesses constantes, toutes deux
         posées comme données de l'énoncé. Le cas piège — la trajectoire courbe
         à vitesse constante en valeur — n'apparaît dans aucun des douze
         exercices numérotés ni dans les quinze supplémentaires. Un exercice où
         les deux conditions sont vraies par construction ne peut pas révéler
         qu'on en a oublié une. Pointer l'un d'eux serait un renvoi faux, ce
         que le projet tient pour pire qu'un renvoi absent : la remédiation se
         fait sur le tableau des quatre cas, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Oublier la position de départ $x_0$ dans le calcul de position",
      eleve: "Pour un mobile en MRU à $v = 9{,}4$ m/s partant de $x_0 = 8{,}5$ m, l'élève annonce " +
             "$x = 9{,}4 \\times 3 = 28{,}2$ m au lieu de $36{,}7$ m : il a calculé la " +
             "<strong>distance parcourue</strong> et l'a livrée comme une position.",
      cause: "Distance parcourue et position sont deux grandeurs différentes que le collège n'a " +
             "jamais eu besoin de distinguer, parce qu'on y partait toujours de zéro. L'élève " +
             "applique donc $d = v \\times t$, qui est exact — mais qui répond à une autre " +
             "question que celle posée. Ce n'est pas un oubli d'étourderie : c'est une " +
             "<strong>question mal lue parce qu'elle n'avait jamais eu besoin d'être lue</strong>, " +
             "l'origine ayant toujours coïncidé avec le départ.",
      remede: "Faire <strong>dessiner l'axe</strong> avant d'écrire la moindre formule, avec son " +
              "origine $0$, la position de départ $x_0$ marquée d'une croix, et la flèche du " +
              "déplacement $v \\times t$ posée à partir de cette croix. La position finale se lit " +
              "alors sur le dessin : elle est <strong>là où la flèche arrive</strong>, pas là où " +
              "elle mesure. Un schéma fait une fois rend l'erreur beaucoup plus difficile.<br/><br/>" +
              "Faire ensuite dire la formule <strong>en français</strong> avant de la poser : " +
              "« la position d'arrivée, c'est la position de départ, PLUS ce qu'on a parcouru ». " +
              "Une phrase qui contient le mot « plus » ne se réduit pas à une multiplication, " +
              "contrairement à une formule mémorisée comme un bloc.<br/><br/>" +
              "Installer enfin un <strong>contrôle de cohérence systématique</strong> : si le " +
              "mobile avance dans le sens de l'axe, la position finale doit être " +
              "<strong>plus grande</strong> que $x_0$. Une réponse inférieure à $x_0$ signale une " +
              "erreur avant toute relecture du calcul ; une réponse égale à $v \\times t$ tout " +
              "rond, alors que $x_0$ ne valait pas zéro, la signale tout autant.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 donne
         v = 9,4 m/s, x_0 = 8,5 m, t = 3 s, réponse 36,7 m. Le renvoi le
         préfère à l'exercice 1 (déjà utilisé par l'erreur 1) et, surtout, aux
         quatre autres tirages du même moule, pour une raison chiffrée : c'est
         celui où x_0 pèse le plus lourd dans le résultat. La durée est la plus
         courte des six (3 s), donc le déplacement v*t = 28,2 m est du même
         ordre que x_0 = 8,5 m — l'oubli de x_0 fait perdre près d'un quart du
         résultat, et l'écart est immédiatement visible. Aux exercices 1 ou 7
         (t = 11 s), x_0 se noie dans un déplacement quatre à sept fois plus
         grand et l'erreur passerait beaucoup plus facilement inaperçue à la
         relecture. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre « vitesse constante » et « immobile »",
      eleve: "L'élève énonce le principe d'inertie ainsi : « si les forces se compensent, l'objet ne " +
             "bouge pas ». Devant un mobile qui file en ligne droite à vitesse constante, il " +
             "cherche donc quelle force manque, puisque l'objet bouge manifestement.",
      cause: "Le principe d'inertie offre <strong>deux</strong> conclusions reliées par un " +
             "« ou » — immobile OU en MRU — et l'élève n'en retient qu'une : la plus intuitive, " +
             "celle qui colle à l'image de l'équilibre héritée du chapitre 2 (le livre posé, le " +
             "colis suspendu). Tous les exemples d'équilibre vus jusque-là étant statiques, la " +
             "seconde branche du « ou » n'a encore jamais servi. L'omission est donc logique, pas " +
             "distraite.",
      remede: "Rendre le <strong>« ou »</strong> physiquement visible en montrant que les deux " +
              "branches sont <strong>le même cas vu de deux endroits</strong> : un passager assis " +
              "dans un TGV en ligne droite à vitesse constante est immobile pour son voisin, et en " +
              "MRU pour un observateur au sol. Mêmes forces compensées, deux conclusions " +
              "différentes — parce que le référentiel a changé. L'immobilité n'est donc pas " +
              "« mieux » que le MRU, c'est le MRU d'un référentiel où l'on se déplace " +
              "avec.<br/><br/>" +
              "Faire ensuite énoncer le principe <strong>en entier, à voix haute</strong>, à " +
              "chaque conclusion d'exercice, jusqu'à ce que le « ou » vienne tout seul : « donc le " +
              "système est immobile ou en mouvement rectiligne uniforme ». Une conclusion tronquée " +
              "n'est pas fausse, elle est incomplète, et c'est ainsi qu'il faut la rendre.<br/><br/>" +
              "Utiliser enfin l'<strong>argument de l'expérience de pensée</strong> : rien, à bord " +
              "d'un avion de ligne en vol stabilisé, ne permet de savoir qu'on file à $900$ km/h — " +
              "on y verse son café exactement comme au sol. Si l'immobilité et le MRU étaient des " +
              "états physiquement différents, on pourrait les distinguer de l'intérieur. On ne " +
              "peut pas : ils sont le même état.",
      /* Volontairement SANS renvoi, même raison que l'erreur 2 et vérifiée sur
         le même tirage. Aucun des vingt-sept énoncés ne met en scène un
         système IMMOBILE : les deux moules décrivent tous deux un mobile qui
         avance (une luge lancée, un palet propulsé, un chariot qui roule), et
         demandent une position ou une vitesse. La confrontation des deux
         branches du « ou », qui est le seul geste capable de remédier à cette
         erreur, n'y a donc aucun support. L'exemple résolu du cours, lui, ne
         travaille que la branche MRU. La remédiation est orale, sur le TGV ou
         l'avion, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — « le principe d'inertie s'applique dans un référentiel dit : … »,
          avec « accéléré », « curviligne » et « terrestre uniquement » en
          distracteurs. Pure restitution de la définition D2 du cours :
          « s'approprier ».
     Q2 — un mobile en MRU avance de $1{,}5$ m toutes les $0{,}3$ s, calculer
          $v$. La relation $v = d/\tau$ est donnée par le cours et s'applique
          dans le sens direct : « réaliser ».
     Q3 — un bloc de glace glisse en ligne droite à vitesse constante : que
          dire des forces ? Il faut partir d'une observation, reconnaître un
          MRU, puis appliquer la RÉCIPROQUE du principe pour conclure sur les
          forces. C'est un raisonnement à rebours du sens habituel, et le
          distracteur « on ne peut pas savoir sans la masse » teste précisément
          la solidité de ce raisonnement : « analyser ».
     Q4 — $v = 3$ m/s, $x_0 = 2$ m, calculer $x$ après $t = 4$ s. Relation
          donnée, sens direct, une addition et une multiplication : « réaliser ».
          C'est le moule A du chapitre, et l'erreur 3 de cette fiche.
     Q5 — une voiture aborde un virage à vitesse constante EN VALEUR : que
          conclure ? Le distracteur « elles se compensent, puisque la valeur ne
          change pas » est exactement l'erreur 2 de cette fiche. Il faut juger
          quatre conclusions tirées d'une même observation et écarter celle qui
          ne retient qu'une des deux conditions du MRU : « valider ».

     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. */
  competences: {
    evaluation: ["s'approprier", "réaliser", "analyser", "réaliser", "valider"]
  }
};
