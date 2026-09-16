/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-forces.prof.js
   Fiche professeur du chapitre « Modélisation d'une action mécanique
   (forces) » (seconde), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la seconde physique-chimie (2026-09-17), au même titre
   que physique-3e-resistance-ohm pour la troisième : les conventions des neuf
   autres fiches du niveau y sont calées.

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 1, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, et cela décide de tout le reste de la
   fiche :
     - moule A ($P = m \times g$) : exercices pairs 2, 4, 6, 8, 10, 12 ;
     - moule B ($m = P / g$)     : exercices impairs 1, 3, 5, 7, 9, 11.
   Aucun exercice ne demande de REPRÉSENTER un vecteur, d'inventorier un bilan
   de forces, ni de raisonner sur l'équilibre — alors que ce sont trois des
   quatre points du cours. Deux des quatre erreurs ci-dessous sont donc
   volontairement SANS renvoi : pointer un calcul de poids pour remédier à une
   erreur de vecteur enverrait l'enseignant vers une fausse remédiation.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-forces"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     ch. 1 (Description d'un mouvement) : RETENU. Le chapitre se termine sur
     l'équilibre — « à l'équilibre, la somme vectorielle des forces est
     nulle » — et la méthode du cours conclut que des vecteurs opposés
     « se compensent » quand le système est immobile. Or « immobile » et
     « rectiligne uniforme » ne sont distingués que par le chapitre 1, qui
     installe le vecteur vitesse et la notion de référentiel. Sans lui, la
     phrase « le système est immobile » n'a pas de contenu physique : immobile
     par rapport à quoi ? C'est un vrai prérequis, pas une politesse.

     Écarté en revanche : le chapitre 3 (Principe d'inertie), qui est le
     RÉCIPROQUE de ce chapitre-ci et vient donc après — c'est lui qui s'appuie
     sur les forces, pas l'inverse. Le déclarer ici créerait le cycle que
     `validerPrerequis` refuse, et à juste titre.

     Aucun des chapitres 4 à 10 (chimie, signaux, son, lumière) n'a de lien. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2, celui du livre. Le bloc mécanique de
     la seconde se tient en trois chapitres qui s'enchaînent strictement —
     décrire un mouvement (1), modéliser ce qui le cause (2), énoncer le lien
     entre les deux (3) — et cet ordre n'admet pas de permutation : le principe
     d'inertie ne peut pas être énoncé avant qu'on sache ce qu'est une force
     qui « se compense ».

     Le livre le place aussi en chapitre 2 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera donc pas le triangle
     d'alerte. */
  rangConseille: 2,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Modéliser l'action d'un système extérieur sur le système étudié par une force et caractériser cette force",
    "Distinguer les actions de contact et les actions à distance, et exploiter l'expression du poids P = mg",
    "Identifier les conditions d'équilibre d'un système soumis à deux forces et les exploiter"
  ],

  note: "Le vecteur force, la distinction contact / distance, la relation $P = m\\,g$ et l'équilibre à " +
        "deux forces sont au programme de seconde : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés ne travaillent que <strong>deux</strong> gestes : calculer $P$ " +
        "à partir de $m$, et calculer $m$ à partir de $P$. C'est utile mais étroit — aucun exercice ne " +
        "demande de <strong>tracer</strong> un vecteur à l'échelle, d'<strong>inventorier</strong> les " +
        "forces d'un système, ni de <strong>conclure</strong> sur un équilibre, alors que ce sont les " +
        "trois quarts du cours et deux des trois attendus officiels ci-dessus. L'exemple résolu du " +
        "cours (le colis suspendu au peson) est, lui, complet : il fait le bilan des deux forces, " +
        "applique l'équilibre, puis vérifie la cohérence de la lecture. <strong>C'est cet exemple, " +
        "et non les exercices, qu'il faut prendre comme modèle de la tâche attendue</strong> ; " +
        "prévoir en complément un travail au tableau ou sur feuille à petits carreaux pour le tracé " +
        "à l'échelle, que le manuel ne fournit pas.<br/><br/>" +
        "Deux remarques de terrain. Le mot <strong>« force »</strong> arrive chargé du sens courant " +
        "(« avoir de la force ») : le premier quart d'heure gagne à séparer explicitement l'action " +
        "mécanique, qui est un phénomène entre <strong>deux</strong> systèmes, de la qualité d'un " +
        "seul. Et la valeur $g \\approx 9{,}8$ N/kg est ici une donnée d'énoncé, jamais à retrouver : " +
        "la gravitation, qui l'explique, est un chapitre de <strong>troisième</strong> déjà vu et un " +
        "chapitre de <strong>première</strong> à venir — la colonne « S'appuie sur » ne peut pas le " +
        "montrer, puisqu'un prérequis ne vise qu'un chapitre du même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (masse / poids) est celle que le cours lui-même désigne dans
     son encadré « piège » ; les erreurs 2 et 3 sont les deux erreurs
     spécifiquement VECTORIELLES du chapitre, nouvelles par rapport au collège
     et sans renvoi possible ; l'erreur 4 est l'erreur d'unité, qui reste au
     lycée la plus coûteuse en points. */
  erreurs: [
    {
      titre: "Confondre la masse et le poids",
      eleve: "L'élève annonce « le poids de l'objet est de $67{,}7$ kg », ou écrit $P = 67{,}7$ N " +
             "pour une masse de $67{,}7$ kg en oubliant purement et simplement le facteur $g$. " +
             "Sur la Lune, il affirme que la masse diminue.",
      cause: "Le mot <strong>« poids »</strong> désigne, dans la langue courante et sur toutes les " +
             "étiquettes de supermarché, ce que la physique appelle la <strong>masse</strong> : " +
             "l'élève n'a pas une lacune, il a une définition concurrente, installée depuis dix ans " +
             "et renforcée chaque jour. La confusion ne vient donc pas d'un défaut d'attention, et " +
             "elle ne se dissipe pas en la signalant une fois.",
      remede: "Opposer les deux grandeurs sur ce qui les sépare <strong>opérationnellement</strong>, " +
              "c'est-à-dire l'instrument : la masse se mesure à la <strong>balance</strong> et " +
              "s'exprime en kilogrammes ; le poids se mesure au <strong>dynamomètre</strong> et " +
              "s'exprime en newtons. Deux instruments différents ne mesurent pas la même " +
              "grandeur.<br/><br/>" +
              "Puis utiliser l'<strong>expérience de pensée lunaire</strong>, qui est l'argument " +
              "décisif et que le cours porte déjà : le même objet emporté sur la Lune garde sa " +
              "masse — il contient autant de matière — mais son poids y est divisé par six, parce " +
              "que $g_{Lune} \\approx 1{,}6$ N/kg. Une grandeur qui change quand on déménage et une " +
              "grandeur qui ne change pas ne peuvent pas être la même chose.<br/><br/>" +
              "Imposer enfin l'<strong>unité comme test systématique</strong> : un résultat en kg " +
              "n'est jamais un poids, un résultat en N n'est jamais une masse. C'est mécanique, ça " +
              "ne demande aucune compréhension, et ça attrape l'erreur à tous les coups.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 1) : l'exercice 2 donne m = 67,7 kg et demande
         P, l'exercice 1 donne P = 810 N et demande m. Le COUPLE 1 + 2 est
         volontairement préféré à un exercice seul, et le renvoi pointe le 2 :
         c'est le sens direct, celui où l'unité de la réponse (N) diffère de
         l'unité de la donnée (kg), donc celui où la confusion produit une
         faute visible. L'exercice 1 sert de contre-épreuve immédiate, avec le
         chemin inverse. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Traiter la force comme un simple nombre",
      eleve: "Interrogé sur une force de $500$ N, l'élève répond que « la force vaut $500$ N » et " +
             "s'arrête là. Sur un schéma, il écrit la valeur à côté de l'objet sans flèche, ou " +
             "trace une flèche dont la longueur ne respecte aucune échelle et dont le point de " +
             "départ est choisi au hasard.",
      cause: "Toute la physique du collège a porté sur des grandeurs <strong>scalaires</strong> — " +
             "une masse, une durée, une température sont entièrement décrites par un nombre et une " +
             "unité. Le vecteur est la première grandeur qui ne l'est pas, et l'élève applique " +
             "spontanément l'habitude qui a fonctionné pendant quatre ans. Le cours annonce bien " +
             "quatre caractéristiques, mais une liste apprise ne modifie pas un réflexe.",
      remede: "Exiger les <strong>quatre</strong> caractéristiques à chaque fois, dans le même " +
              "ordre, jusqu'à ce que l'énumération devienne automatique : <strong>point " +
              "d'application</strong>, <strong>direction</strong>, <strong>sens</strong>, " +
              "<strong>valeur</strong>. Une réponse qui n'en donne qu'une n'est pas fausse, elle " +
              "est incomplète — et c'est ainsi qu'il faut la rendre, plutôt qu'en la barrant.<br/><br/>" +
              "Montrer ensuite <strong>pourquoi</strong> les trois autres sont indispensables, par " +
              "un contre-exemple qui se passe de discours : deux forces de $500$ N appliquées au " +
              "même objet, l'une vers le haut et l'autre vers le bas, se compensent et il ne se " +
              "passe rien ; les deux vers le bas, l'objet part. Même nombre, même unité, résultats " +
              "opposés : le nombre seul ne pouvait donc pas suffire.<br/><br/>" +
              "Faire enfin systématiquement <strong>annoncer l'échelle</strong> avant de tracer " +
              "(« $1$ cm $\\leftrightarrow 5$ N », comme le fait la méthode du cours), et la " +
              "réutiliser pour relire le schéma dans l'autre sens : une flèche de $3$ cm vaut " +
              "$15$ N. Un tracé qu'on sait relire est un tracé qu'on a compris.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : les vingt-sept énoncés du chapitre DONNENT tous une valeur
         numérique et n'en demandent qu'une autre (« calcule la masse »,
         « calcule la valeur de son poids »). Aucun ne demande de citer les
         quatre caractéristiques ni de tracer un vecteur à l'échelle — un
         exercice à réponse numérique unique ne peut pas évaluer un tracé.
         Pointer l'un d'eux serait un renvoi faux, ce que le projet tient pour
         pire qu'un renvoi absent. La remédiation est au tableau ou sur feuille
         à carreaux, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Croire qu'un objet immobile ne subit aucune force",
      eleve: "Devant un livre posé sur une table, l'élève affirme qu'« il ne se passe rien, donc il " +
             "n'y a pas de force ». Ou, sur un colis suspendu immobile, il ne dessine que le poids " +
             "et oublie la tension du fil — puis s'étonne que l'objet ne tombe pas.",
      cause: "Confusion entre <strong>« aucune force »</strong> et <strong>« des forces qui se " +
             "compensent »</strong>, deux situations que l'immobilité rend indiscernables à l'œil. " +
             "L'intuition quotidienne associe la force au mouvement — on pousse pour faire " +
             "avancer — si bien que l'absence de mouvement se lit spontanément comme l'absence de " +
             "cause. C'est l'obstacle épistémologique central de la mécanique, et il survit " +
             "largement au-delà de la seconde.",
      remede: "Rendre les forces <strong>sensibles</strong> avant de les nommer : demander à un " +
              "élève de tenir son sac à bout de bras et d'attendre. Rien ne bouge, et pourtant " +
              "quelque chose s'épuise — la force existe donc bien, indépendamment du " +
              "mouvement.<br/><br/>" +
              "Puis faire raisonner par l'<strong>absurde</strong>, qui tranche : si la table " +
              "n'exerçait réellement aucune action sur le livre, seul le poids agirait et le livre " +
              "tomberait. Il ne tombe pas ; il existe donc une seconde force, exactement opposée. " +
              "L'immobilité ne prouve pas l'absence de forces — elle prouve leur " +
              "<strong>compensation</strong>.<br/><br/>" +
              "Imposer enfin le <strong>bilan écrit avant tout calcul</strong> : lister les forces " +
              "une par une en nommant, pour chacune, <strong>qui</strong> l'exerce et " +
              "<strong>sur quoi</strong> (« la Terre sur le colis », « le fil sur le colis »). Une " +
              "force qui n'a pas d'auteur n'existe pas, et une force dont on cherche l'auteur ne " +
              "s'oublie plus. C'est exactement la première étape de la méthode du cours.",
      /* Volontairement SANS renvoi, même raison que l'erreur 2 et vérifiée sur
         le même tirage. L'équilibre n'apparaît dans les vingt-sept énoncés que
         comme un DÉCOR (« un objet suspendu et immobile »), jamais comme la
         question posée : la tâche demandée reste, dans tous les cas, de
         diviser ou de multiplier par g. Un élève peut donc réussir les douze
         exercices numérotés en conservant intacte l'erreur décrite ici — c'est
         précisément ce qui la rend dangereuse et ce qui interdit de la
         renvoyer à l'un d'eux. L'exemple résolu du cours, lui, la travaille
         réellement : c'est vers lui qu'il faut ramener l'élève. */
      exercice: null
    },
    {
      titre: "Oublier l'unité, ou la choisir au hasard",
      eleve: "L'élève écrit « $P = 663{,}5$ » sans unité, ou « $663{,}5$ kg » pour un poids. " +
             "Interrogé, il sait souvent que le poids est en newtons : l'unité a été omise à " +
             "l'écriture, pas ignorée.",
      cause: "L'unité est vécue comme une <strong>décoration</strong> ajoutée après coup au vrai " +
             "travail, qui serait le calcul. Rien dans l'habitude scolaire ne la rend nécessaire " +
             "tant que les exercices ne portent que sur une seule grandeur : c'est au moment où " +
             "deux unités coexistent — ici des kg et des N — qu'elle devient discriminante, et " +
             "l'élève n'a pas encore franchi ce cap.",
      remede: "Renverser le statut de l'unité : elle n'est pas un ornement de la réponse, elle est " +
              "un <strong>outil de contrôle</strong> qui travaille pendant le calcul. Faire écrire " +
              "les unités <strong>dans</strong> la ligne de calcul et non seulement au bout : " +
              "$P = 67{,}7\\ \\text{kg} \\times 9{,}8\\ \\text{N/kg} = 663{,}5\\ \\text{N}$. Les " +
              "kilogrammes se simplifient avec ceux de N/kg, et il ne reste que des newtons — le " +
              "résultat porte alors son unité tout seul, sans qu'on ait à s'en souvenir.<br/><br/>" +
              "Ce même geste attrape gratuitement l'erreur inverse : pour retrouver une masse à " +
              "partir d'un poids, on divise des N par des N/kg, et il reste des kg. L'élève qui " +
              "aurait multiplié verrait apparaître des $\\text{N}^2/\\text{kg}$, qui ne sont " +
              "l'unité de rien. Le contrôle dimensionnel remplace ici la mémoire de la " +
              "formule.<br/><br/>" +
              "Donner enfin un <strong>ordre de grandeur de référence</strong> : sur Terre, un " +
              "poids en newtons vaut à peu près <strong>dix fois</strong> la masse en kilogrammes. " +
              "Un élève de $60$ kg pèse environ $600$ N. Une réponse qui s'en écarte d'un facteur " +
              "dix signale une erreur avant même toute vérification.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne
         m = 26,4 kg et demande P arrondi au dixième, soit 258,7 N. Le renvoi
         le préfère à l'exercice 2 (déjà utilisé par l'erreur 1) pour que
         l'enseignant dispose de deux supports distincts, et parce que ses
         valeurs rendent le contrôle d'ordre de grandeur immédiat : 26,4 kg
         donne « environ 264 N » à la louche, et la réponse exacte 258,7 N en
         est proche — l'élève qui aurait trouvé 2,7 ou 2 587 voit tout de suite
         que quelque chose ne va pas. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille. C'est ce qui rend la répartition mesurée publiable telle quelle.

     Q1 — $m = 4{,}0$ kg, $g \approx 9{,}8$ N/kg, calculer $P$. La relation est
          donnée par le cours et s'applique dans le sens direct, sans
          transformation : le travail est d'exécuter un calcul correct avec la
          bonne unité, soit « réaliser ».
     Q2 — « laquelle N'EST PAS une des quatre caractéristiques d'un vecteur
          force ? », avec « la masse du système » en distracteur. Il faut
          mobiliser la définition du cours et la confronter à quatre
          propositions : « s'approprier ».
     Q3 — $P = 68{,}6$ N, calculer $m$. Ici la relation doit être RENVERSÉE
          avant d'être utilisée ($m = P/g$), ce qui est un choix de méthode et
          non une exécution : « analyser ».
     Q4 — la tension d'un fil est-elle une action de contact ou à distance ?
          Classer une situation physique dans une catégorie du cours :
          « analyser ».
     Q5 — un objet suspendu est immobile : que conclure sur les forces ? Le
          distracteur « aucune force ne s'exerce » est exactement l'erreur 3 de
          cette fiche. Il faut juger la validité de quatre conclusions tirées
          d'une même observation : « valider ».

     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. Le constat vaut pour les 160 questions d'évaluation des
     32 chapitres du lycée physique-chimie ; il est mesuré et écrit dans
     CODEBASE_MAP.md plutôt que masqué par un étiquetage complaisant. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "analyser", "valider"]
  }
};
