/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-sysml.prof.js
   Fiche professeur du chapitre « Modélisation des systèmes (SysML) »
   (première SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage — le corpus n'a ni travail pratique ni tâche de conception.
   Voir l'en-tête de REFERENTIELS.si dans scripts/manuel/prof.js.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 5 (chapitre 6 du livre `lycee-si`).

   30 énoncés tirés, dont 12 numérotés et 18 en banque supplémentaire. C'est le
   deuxième chapitre le mieux doté du dossier en volume — et pourtant le plus
   pauvre en VARIÉTÉ de tâche, ce qui est le fait décisif de cette fiche.

   DEUX MOULES, et deux seulement, qui alternent strictement pair/impair :
     - moule « uc » (compter acteurs + cas d'utilisation) : exercices 1, 3, 5,
       7, 9, 11 — donc tous les IMPAIRS ;
     - moule « req » (compter fonctions + contraintes) : exercices 2, 4, 6, 8,
       10, 12 — donc tous les PAIRS.
   Quatre contextes tournent (robot aspirateur, borne de recharge, drone de
   livraison, ascenseur, arrosage automatique).

   LE FAIT QUI CONTRAINT TOUT : les deux moules demandent LA MÊME OPÉRATION,
   une addition de deux petits entiers. La modélisation SysML n'y est qu'un
   habillage lexical — aucun exercice ne demande de CHOISIR un diagramme, de
   distinguer bdd et ibd, de classer un flux, ni de lire un diagramme. Or
   quatre des cinq questions de l'évaluation portent précisément là-dessus
   (Q2 bdd/ibd, Q4 include/extend, Q5 flux information/énergie).
   Conséquence assumée : DEUX des quatre erreurs de cette fiche renvoient au
   QUIZ, pas aux exercices, et une n'a aucun support. Les exercices n'ont
   simplement rien à dire sur la culture du chapitre.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-sysml"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8) — voir la note de `validerPrerequis` dans prof.js.
     Numérotation locale : 1=sysml, 2=cinematique, 3=statique-pfs,
     4=logique-boole, 5=asservissement, 6=energie-rendement, 7=rdm, 8=poo.

     AUCUN prérequis, et c'est un choix mesuré, pas un oubli. SysML est le
     langage dans lequel les autres chapitres se DÉCRIVENT : c'est lui qui
     fournit le schéma-bloc que l'asservissement lit, le vocabulaire de flux
     que l'énergie réutilise, la notion de bloc que la POO retrouvera sous le
     nom de classe. Il est en amont de tout, donc en aval de rien.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Circuits logiques et algèbre de Boole) : tentant parce que les
       deux chapitres relèvent de la culture « information ». Mais SysML ne
       calcule aucune sortie logique et n'emploie aucune porte ; le diagramme
       stm (états) pourrait créer un pont, il n'est pas traité ici. Écarté.
     - ch. 8 (POO) : la parenté bloc/classe est réelle et sera un excellent
       appui EN CLASSE — mais elle joue dans l'autre sens (la POO gagne à
       venir après SysML, pas l'inverse). Le déclarer ici créerait un cycle,
       que `validerPrerequis` refuse à juste titre.
     - ch. 2, 3, 5, 6, 7 : aucun lien opératoire. Écartés.

     PRÉREQUIS NON DÉCLARABLE, traité dans la `note` : le chapitre suppose la
     lecture d'un CAHIER DES CHARGES fonctionnel, c'est-à-dire l'analyse
     fonctionnelle vue en seconde (`si-2nde-analyse-fonctionnelle`). C'est un
     chapitre d'un AUTRE dossier, donc rien ne l'affichera. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1.

     JUSTIFICATION DE L'ORDRE COMPLET du dossier, écrite une fois ici et citée
     par les sept autres fiches. Les huit rangs forment une permutation de
     1..8 :
       1 SysML — le langage de description, prérequis déclaré de plusieurs
         autres chapitres, dépendant d'aucun. Il ouvre l'année.
       2 Cinématique — première physique du solide, indépendante de SysML mais
         placée tôt parce qu'elle fournit les grandeurs (vitesse, rotation) que
         l'asservissement et l'énergie réutiliseront comme consignes.
       3 Statique (PFS) — deuxième bloc mécanique, indépendant de la
         cinématique (l'équilibre n'a pas besoin du mouvement) mais placé
         juste après par continuité de culture, et surtout AVANT la RDM qui en
         dépend.
       4 Logique et Boole — bloc « information », autonome, placé ici pour
         aérer la série mécanique et pour préparer la culture binaire.
       5 Asservissement — rang imposé par la fiche déjà écrite. Il suit SysML
         (son prérequis) et profite de la cinématique.
       6 Énergie et rendement — synthèse système, qui gagne à venir après la
         cinématique (l'énergie cinétique y prend un sens) et après
         l'asservissement (le rendement d'une chaîne de puissance pilotée).
       7 RDM — dépend de la statique (rang 3) : on ne dimensionne pas une
         barre avant de savoir calculer l'effort qu'elle subit.
       8 POO — fin d'année, la programmation objet, qui clôt en réinvestissant
         la notion de bloc de SysML sous le nom de classe.

     Le livre range ce chapitre en chapitre 6 de l'ouvrage (premier du niveau
     `si-1re`), donc rang 1 dans le niveau : les deux ordres coïncident, pas
     de triangle d'alerte dans la colonne « Chap. ». */
  rangConseille: 1,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 1 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser et modéliser les systèmes ».

     Bornés à ce que le chapitre traite VRAIMENT : les neuf diagrammes cités,
     mais seuls req, bdd, ibd et uc réellement travaillés (le récapitulatif du
     cours le dit lui-même : « les 3 diagrammes les plus utilisés en Première
     SI »). Rien sur les diagrammes comportementaux (stm, act, sd) au-delà de
     leur nom, rien sur le diagramme paramétrique. Citer un attendu sur les
     machines à états serait citer ce que le chapitre n'enseigne pas. */
  attendus: [
    "Identifier le diagramme SysML pertinent pour décrire un aspect donné d'un système (exigences, structure, cas d'utilisation)",
    "Traduire un cahier des charges fonctionnel en exigences et en cas d'utilisation exploitables dans un diagramme",
    "Distinguer, dans les échanges entre blocs, un flux de matière, un flux d'énergie et un flux d'information"
  ],

  note: "SysML, ses $9$ diagrammes, le passage d'un cahier des charges textuel à une modélisation " +
        "partagée, et la distinction des flux : le chapitre installe le langage dans lequel toute " +
        "l'année de SI va se dire.<br/><br/>" +
        "<strong>La colonne « S'appuie sur » affichera un tiret, et c'est voulu.</strong> " +
        "Ce chapitre ne dépend d'aucun autre chapitre de première : il est en amont de tous. " +
        "Un prérequis compte néanmoins et ne pourra pas être affiché — la lecture d'un " +
        "<strong>cahier des charges fonctionnel</strong>, vue en seconde avec l'analyse " +
        "fonctionnelle. Un prérequis ne pouvant désigner qu'un chapitre du même niveau, rien ne " +
        "le montrera. Si le groupe ne sait pas ce qu'est une fonction de service, commencez par " +
        "là : les exercices de ce chapitre comptent des exigences sans jamais expliquer d'où " +
        "elles viennent.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les $30$ énoncés tirés se ramènent à <strong>deux moules, et une seule opération</strong> : " +
        "additionner deux petits entiers. Les impairs comptent des acteurs et des cas " +
        "d'utilisation, les pairs des fonctions et des contraintes. Aucun ne demande de " +
        "<strong>choisir</strong> un diagramme, de distinguer bdd et ibd, ni de classer un flux — " +
        "alors que ce sont trois des cinq questions du devoir noté et le cœur de l'encadré " +
        "« piège » du cours. Ces exercices installent le vocabulaire par répétition ; ils ne " +
        "travaillent pas la compétence.<br/><br/>" +
        "<strong>Où trouver la vraie tâche du chapitre, alors.</strong> Dans le " +
        "<strong>quiz</strong>, dont les trois questions portent exactement sur la culture " +
        "SysML (normalisation OMG, distinction exigence/lien deriveReqt, relation include), et " +
        "dans l'exemple résolu du cours. Prévoyez surtout une activité que le manuel ne fournit " +
        "pas : donner un cahier des charges court et faire produire le diagramme au tableau. " +
        "C'est la seule façon de travailler « modéliser », et aucun énoncé tiré ne le demande.",

  erreurs: [
    {
      titre: "Confondre le diagramme bdd et le diagramme ibd",
      eleve: "« Le bdd montre comment les blocs sont reliés entre eux. » L'élève emploie l'un pour " +
             "l'autre, ou dessine des connexions de flux dans un bdd.",
      cause: "Les deux diagrammes parlent des mêmes blocs, avec des rectangles qui se ressemblent, " +
             "et leurs sigles ne se distinguent que d'une lettre. Rien dans le mot « bloc » n'indique " +
             "lequel montre la <strong>hiérarchie de composition</strong> (vue externe, bdd) et lequel " +
             "montre les <strong>connexions par ports et flux</strong> (vue interne, ibd). C'est une " +
             "erreur de culture systémique, pas de raisonnement : l'élève n'a pas encore d'image " +
             "mentale à laquelle accrocher les deux sigles.",
      /* MESURE FAITE, et elle interdit un renvoi d'exercice : aucun des 30
         énoncés tirés ne mentionne bdd ni ibd. Les impairs parlent du seul
         diagramme uc, les pairs du seul diagramme req. Renvoyer à l'un d'eux
         pour une erreur bdd/ibd aurait été un renvoi plausible et FAUX.
         Le quiz ne la traite pas non plus de front (ses trois questions
         portent sur l'OMG, les exigences et la relation include) — y renvoyer
         laisserait croire que la question est couverte. Donc `null`, et le
         remède ramène à l'encadré « piège » du cours, qui est bâti
         EXACTEMENT sur cette confusion et qui est le seul support du livre. */
      exercice: null,
      remede: "Aucun exercice du chapitre ne peut vous aider ici : les $30$ énoncés ne parlent que " +
              "de <em>uc</em> et de <em>req</em>, jamais de bdd ni d'ibd. L'encadré " +
              "<strong>« piège »</strong> du cours est le support, et il est écrit pour cette " +
              "confusion précise.<br/><br/>" +
              "L'image qui fixe la distinction, et elle tient en un objet du quotidien : prenez un " +
              "<strong>vélo</strong>. Le <strong>bdd</strong> répond à « de quoi est-il fait ? » — " +
              "cadre, roues, transmission, freins, en arbre de composition. L'<strong>ibd</strong> " +
              "répond à « comment ça communique dedans ? » — le pédalier envoie un couple à la " +
              "chaîne, qui l'envoie à la roue. Deux questions différentes, deux dessins " +
              "différents.<br/><br/>" +
              "Le moyen mnémotechnique qui marche : <strong>bdd = la liste des courses, " +
              "ibd = le plan de câblage</strong>. Faites-le écrire au tableau et gardez-le " +
              "affiché toute la séquence."
    },
    {
      titre: "Compter les liens entre exigences comme des exigences",
      eleve: "Le cahier des charges donne $5$ fonctions, $3$ contraintes et $2$ liens " +
             "« deriveReqt ». L'élève annonce $10$ exigences à modéliser.",
      cause: "L'élève additionne tout ce que l'énoncé énumère, parce que la tâche répétée trente " +
             "fois dans le chapitre est précisément « additionne les deux nombres de l'énoncé ». " +
             "Le réflexe est donc appris par les exercices eux-mêmes, et il est juste tant qu'il " +
             "n'y a que deux catégories. Il lâche dès qu'un troisième nombre apparaît, parce que " +
             "l'élève n'a jamais eu à se demander ce qu'IL EST : une exigence est un besoin " +
             "à satisfaire, un lien est une relation entre deux besoins déjà comptés.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 2 est bâti sur ce cas exact : « $5$ fonctions principales,
         $3$ contraintes, et $2$ liens deriveReqt — combien d'exigences ? »,
         bonne réponse $8$, avec le distracteur $10$ (fonctions + contraintes
         + liens) qui est exactement l'erreur de l'élève, et une correction
         qui dit « les liens deriveReqt relient des exigences entre elles mais
         ne sont pas des exigences supplémentaires ».
         COMPARÉ AUX CANDIDATS EXERCICES du moule « req » (exercices 2, 4, 6,
         8, 10, 12) : TOUS n'offrent que deux catégories — ex. 2 donne $6$
         fonctions et $1$ contrainte, ex. 10 donne $8$ et $4$. Aucun
         n'introduit de troisième nombre, donc aucun ne peut faire apparaître
         l'erreur. Le quiz 2 est le seul support du livre qui la piège, et il
         la piège avec le distracteur nommé. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le quiz $2$ est fait pour cette erreur, et son distracteur EST la réponse fausse de " +
              "l'élève : $5$ fonctions, $3$ contraintes, $2$ liens <em>deriveReqt</em>, réponse " +
              "$5 + 3 = 8$ et non $10$. Faites-le passer avant les exercices, pas " +
              "après.<br/><br/>" +
              "Le critère de tri, à faire formuler par les élèves eux-mêmes : <strong>une exigence " +
              "se lit comme une phrase « le système doit… »</strong>. « Le système doit recharger " +
              "en moins de $30$ minutes » : c'est une exigence. « Cette exigence-ci découle de " +
              "celle-là » : ce n'est pas un besoin nouveau, c'est une flèche entre deux besoins " +
              "déjà écrits.<br/><br/>" +
              "Attention à ce que les exercices du chapitre installent : leurs $30$ énoncés ne " +
              "donnent jamais que <strong>deux</strong> nombres à additionner. L'élève y apprend à " +
              "additionner sans trier. Posez au moins une fois à l'oral un énoncé à trois " +
              "catégories, sinon le tri ne sera jamais travaillé."
    },
    {
      titre: "Confondre un flux d'information et un flux d'énergie",
      eleve: "« Le courant qui alimente le moteur est un flux d'information, puisqu'il vient de la " +
             "carte de commande. »",
      cause: "Dans un système réel, information et énergie voyagent souvent par le même fil, et " +
             "l'élève suit le CÂBLE plutôt que ce qui circule dedans. S'y ajoute une confusion de " +
             "culture systémique très répandue : le mot « signal » est employé indifféremment pour " +
             "la mesure d'un capteur et pour la tension de puissance. Le critère qui tranche est " +
             "physique, pas électrique — un flux d'information transporte une DONNÉE sans " +
             "transporter d'énergie significative.",
      /* MESURE FAITE : aucun des 30 énoncés tirés ne mentionne de flux, ni ne
         demande d'en classer un. Les deux moules comptent des exigences ou
         des éléments de diagramme uc, point.
         Le quiz ne traite pas non plus les flux (OMG, exigences, include).
         Seule la question 5 de l'ÉVALUATION porte exactement là-dessus
         (« lequel est un flux d'information ? », avec le courant moteur, la
         rotation d'arbre et la pression hydraulique en distracteurs) — mais
         une remédiation ne renvoie JAMAIS vers le devoir noté, c'est une
         règle du projet. Donc `null`, franchement : le seul support restant
         est la définition « Flux (flow) » du cours, et le remède y ramène. */
      exercice: null,
      remede: "Le livre n'a pas de support d'entraînement sur ce point : aucun des $30$ énoncés ne " +
              "parle de flux, et le quiz ne les aborde pas. Appuyez-vous sur la définition " +
              "<strong>« Flux (flow) »</strong> du cours, et surtout sur l'activité orale " +
              "ci-dessous — c'est le geste de substitution.<br/><br/>" +
              "Le test qui tranche, en une question : <strong>si je coupe ce flux, est-ce que le " +
              "système perd de la PUISSANCE ou perd une CONNAISSANCE ?</strong> Couper le courant " +
              "du moteur : il s'arrête, il a perdu de la puissance — flux d'énergie. Couper le fil " +
              "du capteur de température : le moteur tourne toujours, mais la commande ne sait plus " +
              "où elle en est — flux d'information.<br/><br/>" +
              "Faites-le trier à l'oral sur cinq exemples, en trois colonnes matière / énergie / " +
              "information : le câble d'alimentation, le fil du thermocouple, l'eau dans un " +
              "circuit de chauffage, la rotation d'un arbre, la trame envoyée par une " +
              "télécommande. Trois minutes, et la distinction est installée pour l'année — elle " +
              "resservira dans le chapitre sur l'énergie et dans celui sur l'asservissement."
    },
    {
      titre: "Lire « include » comme une relation optionnelle",
      eleve: "« Commander un produit » <em>include</em> « S'authentifier » : l'élève comprend que " +
             "l'utilisateur PEUT s'authentifier, et confond avec « extend ».",
      cause: "Le mot « inclure » n'a rien d'impératif en français courant — « frais inclus » ne " +
             "veut pas dire « frais obligatoires à chaque fois ». La norme SysML/UML, elle, donne à " +
             "<em>include</em> un sens strict : le cas de base ne peut pas s'exécuter sans le cas " +
             "inclus. C'est un faux ami du vocabulaire normalisé, exactement le genre de piège que " +
             "la culture systémique réserve aux débutants, et il n'y a pas de raisonnement à " +
             "corriger : il y a une convention à apprendre et à opposer à sa jumelle.",
      /* RENVOI VÉRIFIÉ, au quiz à nouveau, et pour une raison mesurée.
         Le quiz 3 porte exactement sur cette relation : « la relation include
         entre deux cas d'utilisation signifie : », bonne réponse « le cas de
         base inclut OBLIGATOIREMENT le cas inclus à chaque exécution », avec
         en distracteur n° 1 « peut optionnellement déclencher », qui est
         littéralement l'erreur de l'élève. La correction donne en plus
         l'exemple « Commander un produit include S'authentifier » et oppose
         explicitement extend.
         COMPARÉ AUX CANDIDATS EXERCICES du moule « uc » (exercices 1, 3, 5,
         7, 9, 11) : tous comptent des acteurs et des cas d'utilisation sans
         jamais nommer une seule relation entre cas. Ex. 1 : « $2$ acteurs et
         $4$ cas d'utilisation, combien d'éléments ? ». Aucun ne peut donc
         travailler include/extend. Le quiz 3 est le seul support, et il est
         meilleur que ne l'aurait été un exercice : il piège la confusion par
         son distracteur. Distinct du renvoi de l'erreur 2 (quiz 2),
         conformément à la règle du projet : deux erreurs d'un même chapitre
         ne pointent jamais le même support. */
      exercice: { type: "quiz", n: 3 },
      remede: "Le quiz $3$ est le bon support, et sa première proposition est exactement l'erreur " +
              "à débusquer (« peut optionnellement déclencher »). Faites justifier le rejet de ce " +
              "distracteur à l'oral, pas seulement cocher la bonne case.<br/><br/>" +
              "Le couple à installer ensemble, parce que chacun se définit contre l'autre : " +
              "<strong>include = toujours, extend = parfois</strong>. « Retirer de l'argent » " +
              "<em>include</em> « Saisir son code » — impossible de retirer sans code, à chaque " +
              "fois. « Retirer de l'argent » <em>extend</em> « Imprimer un reçu » — seulement si " +
              "on le demande.<br/><br/>" +
              "Prévenez la contamination du français courant en le disant explicitement : dans un " +
              "diagramme <em>uc</em>, « inclus » ne veut pas dire « compris dans le prix », il veut " +
              "dire <strong>obligatoire</strong>. Les élèves retiennent bien mieux une convention " +
              "quand on leur dit contre quel réflexe elle va."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 (combien de types de diagrammes SysML propose-t-il ? → $9$) →
        analyser : restitution du cadre normatif, rattachée à `analyser`
        comme les 31 questions de restitution de l'ouvrage (voir REFERENTIELS
        dans prof.js). Ce n'est ni un calcul ni une modélisation.
     Q2 (quel diagramme montre la vue interne d'un bloc avec ses ports et
        flux ? → ibd) → modéliser : il faut choisir le bon outil de
        modélisation pour un aspect donné du système. C'est la seule question
        du devoir qui porte sur le CHOIX d'un diagramme, donc la seule qui
        soit vraiment `modéliser` — et c'est la tâche que les 30 exercices ne
        travaillent jamais (voir la `note`).
     Q3 ($4$ sous-systèmes $\times$ $2$ flux, total ? → $8$) → résoudre :
        application numérique directe, la seule du devoir, et le seul écho aux
        exercices tirés.
     Q4 (que signifie la relation « include » ? → obligatoire) →
        communiquer : employer le vocabulaire normalisé du langage avec son
        sens exact. Le programme rattache à `communiquer` l'usage rigoureux
        des langages de description.
     Q5 (lequel est un flux d'information et non d'énergie ? → le signal du
        capteur) → analyser : caractériser la nature d'un flux dans une
        chaîne, en écartant trois flux d'énergie.

     RÉPARTITION DE CE CHAPITRE : analyser 2, modéliser 1, résoudre 1,
     communiquer 1. C'est la fiche la plus équilibrée du dossier, et cela
     reflète un chapitre de langage plutôt que de calcul.
     `expérimenter` et `concevoir` ne sont pas mobilisés : aucune question ne
     demande de manipuler un système réel ni de produire une solution — ce
     qui, sur un chapitre de modélisation, est le manque le plus regrettable
     de l'ouvrage, et la raison de l'activité de production proposée dans la
     `note`. */
  competences: {
    evaluation: ['analyser', 'modéliser', 'résoudre', 'communiquer', 'analyser']
  }
};
