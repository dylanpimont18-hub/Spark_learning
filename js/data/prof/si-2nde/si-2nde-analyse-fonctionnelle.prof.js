/* =========================================================
   Spark Learning – js/data/prof/si-2nde/si-2nde-analyse-fonctionnelle.prof.js
   Fiche professeur du chapitre « Analyse fonctionnelle d'un système »
   (seconde SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE du dossier `si-2nde` (2026-09-17) : les conventions des
   quatre autres fiches du dossier y sont calées.

   RÉFÉRENTIEL SCIENCES DE L'INGÉNIEUR — NOUVEAU, ajouté le 2026-09-17 en même
   temps que cette fiche : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer (programme de spécialité SI, 2019).
   Jusqu'ici `lycee-si` retombait sur le référentiel des mathématiques, faute
   d'une branche dans `referentielDe()` — et « Selon la règle R2, une
   transition est franchie quand : » n'est ni du `calculer` ni du `modéliser`
   mathématique. Le référentiel est restreint au SEUL ouvrage `lycee-si`, par
   clé d'ouvrage et non par collection : `bts-si` porte la MÊME collection
   (« Collection Sciences de l'ingénieur ») et décidera sur ses propres
   mesures. Voir le commentaire de `REFERENTIELS.si` dans prof.js.

   DEUX COMPÉTENCES RESTERONT VIDES DANS TOUT L'OUVRAGE, et c'est assumé :
   `expérimenter` et `concevoir`. Le corpus SI de Spark ne contient ni travail
   pratique ni tâche de conception — que des questions à réponse fermée. Les
   inscrire quand même serait faux ; les retirer du référentiel serait ne plus
   employer les mots du programme, ce que prof.js interdit explicitement.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 0 (ce chapitre ouvre l'ouvrage).

   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire. MAIS —
   et c'est le fait déterminant — un SEUL MOULE, répété quarante-deux fois :
   « le diagramme pieuvre comporte N éléments du milieu extérieur, on a
   identifié a FS et b FC, quel est le nombre total de fonctions ? », dont la
   réponse est toujours l'addition $a + b$. Seuls les contextes changent
   (borne de recharge, trottinette, robot aspirateur, portail, ascenseur,
   drone, station météo, distributeur). Vérifié énoncé par énoncé sur les
   quatorze premiers tirages.

   Conséquence directe et inconfortable : le chapitre le plus riche de
   l'ouvrage en NOMBRE d'énoncés est l'un des plus pauvres en VARIÉTÉ de
   tâches. Une seule des quatre erreurs ci-dessous peut donc recevoir un
   renvoi vers un exercice ; les trois autres sont des confusions de
   VOCABULAIRE (FS/FC, fonction de service/fonction technique, matière
   d'œuvre) qu'aucun des 42 énoncés ne met en défaut, puisqu'ils fournissent
   tous le décompte a et b déjà fait. Elles renvoient au QUIZ, qui les traite
   réellement — c'est le seul renvoi honnête disponible.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-2nde-analyse-fonctionnelle"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-2nde`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 5 chapitres, donc les numéros vont de 1 à 5.

     AUCUN prérequis, et c'est un choix argumenté, pas un oubli.

     Ce chapitre est la PORTE D'ENTRÉE de la spécialité : il précède
     délibérément toute technique. L'analyse fonctionnelle part du besoin de
     l'utilisateur et n'exige rien d'autre que de savoir lire un énoncé et
     additionner deux entiers. Les 42 énoncés tirés le confirment : la seule
     opération demandée est $a + b$ avec $a$ et $b$ inférieurs à 10.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Chaîne d'énergie et chaîne d'information) : le candidat le plus
       tentant, parce que les deux chapitres décomposent un système. Mais ils
       le décomposent selon DEUX LOGIQUES ÉTRANGÈRES l'une à l'autre :
       l'analyse fonctionnelle décrit le BESOIN (« à quoi ça sert »), sans
       jamais ouvrir le produit ; les chaînes décrivent la STRUCTURE INTERNE
       (« comment c'est fait »). Le cours dit lui-même que l'analyse
       fonctionnelle reste au niveau du « quoi ». C'est même l'inverse d'une
       dépendance : traiter les chaînes d'abord installerait le réflexe de
       penser solution, c'est-à-dire précisément le piège que ce chapitre
       cherche à désamorcer. Écarté, et volontairement placé APRÈS.
     - ch. 5 (Principes mécaniques de base) : aucun lien. L'analyse
       fonctionnelle ne calcule ni force ni moment. Écarté.
     - ch. 3 et 4 (capteurs-actionneurs, programmation) : des composants et du
       code, donc du « comment ». Même raison que le ch. 2. Écartés. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1, celui du livre.

     C'est le seul rang défendable. L'analyse fonctionnelle est la démarche
     qui ouvre tout projet industriel — on identifie le besoin avant de
     choisir une solution — et la progression de la spécialité SI la place
     traditionnellement en ouverture d'année. Le livre le range aussi en
     chapitre 1 : les deux ordres coïncident et la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte.

     RAPPEL SUR `rangConseille`, tout ou rien par dossier : tant qu'une seule
     fiche de `si-2nde` le porte, l'ouvrage REFUSE de compiler. Les cinq
     fiches du dossier le portent donc toutes (rangs 1 à 5, permutation
     complète), sans quoi le contrôle sur PDF serait impossible. */
  rangConseille: 1,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 1 de seconde) et le
     programme de spécialité Sciences de l'ingénieur (2019), complétés par la
     norme que le cours cite lui-même, NF X 50-151.

     Les trois attendus sont strictement bornés à ce que le chapitre traite
     réellement : les deux diagrammes (bête à cornes, pieuvre), la distinction
     FS/FC, et les trois caractéristiques d'une fonction au CdCF. Rien sur la
     conception ni sur le prototypage, que le corpus n'aborde pas. */
  attendus: [
    "Identifier le besoin auquel répond un produit et le formaliser à l'aide du diagramme « bête à cornes »",
    "Distinguer fonction de service et fonction de contrainte sur un diagramme pieuvre, et dénombrer les fonctions",
    "Caractériser une fonction dans un cahier des charges fonctionnel par son critère, son niveau et sa flexibilité"
  ],

  note: "Le besoin, les deux diagrammes de la méthode APTE (bête à cornes et pieuvre), la distinction " +
        "entre fonction de service et fonction de contrainte, et la caractérisation d'une fonction au " +
        "cahier des charges fonctionnel (critère, niveau, flexibilité) : le chapitre ouvre la " +
        "spécialité par la démarche qui ouvre tout projet industriel.<br/><br/>" +
        "<strong>Pourquoi ce chapitre vient en premier, et pourquoi il ne s'appuie sur rien.</strong> " +
        "La colonne « S'appuie sur » de la progression affiche un tiret, et c'est voulu : l'analyse " +
        "fonctionnelle décrit le <strong>besoin</strong> — le « quoi » — sans jamais ouvrir le " +
        "produit. Les chaînes d'énergie et d'information du chapitre 2, elles, décrivent la " +
        "<strong>structure interne</strong> — le « comment ». Traiter les chaînes d'abord " +
        "installerait le réflexe de penser solution, c'est-à-dire exactement le piège que ce " +
        "chapitre cherche à désamorcer.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas.</strong> Les " +
        "42 énoncés tirés pour ce chapitre reposent sur <strong>une seule tâche</strong> : additionner " +
        "un nombre de $FS$ et un nombre de $FC$ déjà identifiés, dans des contextes variés (portail " +
        "automatique, drone de livraison, station météo...). Ils entraînent le dénombrement, " +
        "<strong>pas la classification</strong> : à aucun moment l'élève n'a lui-même à décider si " +
        "une fonction est $FS$ ou $FC$. Or c'est là que se joue la difficulté réelle du chapitre. " +
        "Prévoyez donc un temps de classification à l'oral ou au tableau, sur un objet apporté en " +
        "classe — le quiz du chapitre est le seul support du livre qui travaille ce geste.",

  /* Les erreurs fréquentes. Quatre, dont UNE SEULE reçoit un renvoi vers un
     exercice : c'est la conséquence directe du moule unique documenté en
     en-tête, et non un manque de recherche. */
  erreurs: [
    {
      titre: "Compter les éléments du milieu extérieur au lieu des fonctions",
      eleve: "Le diagramme pieuvre comporte 8 éléments du milieu extérieur, donc il y a 8 fonctions.",
      cause: "L'élève assimile un élément extérieur à une fonction, parce que les deux se dessinent " +
             "comme des objets autour du produit. Or un même élément peut porter plusieurs traits, et " +
             "un trait de fonction de service en relie DEUX à la fois : il n'y a aucune raison pour " +
             "que les deux décomptes coïncident.",
      /* RENVOI VÉRIFIÉ, et c'est le seul possible pour ce chapitre.
         Exercice 2 du livre (graine 20260816 + 0, deuxième tirage) : borne de
         recharge pour véhicule électrique, 8 éléments du milieu extérieur,
         2 FS et 5 FC, total 7 fonctions. Les valeurs sont CHOISIES POUR
         PIÉGER exactement cette erreur : 8 éléments mais 7 fonctions, donc un
         élève qui compte les éléments répond 8 et se trompe d'une unité.
         La correction du tirage le dit noir sur blanc (« Remarque : le nombre
         d'éléments du milieu extérieur n'est pas le nombre de fonctions »).
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 4 (7 éléments, 6 fonctions)
         et l'exercice 8 (8 éléments, 6 fonctions) piègent aussi, mais avec un
         écart de 2 sur le huitième, moins lisible. L'exercice 3 (7 éléments,
         7 fonctions) serait le PIRE choix possible : les deux décomptes y
         coïncident par hasard, et l'élève verrait sa méthode fausse
         confirmée. D'où l'exercice 2, où l'écart vaut 1 et se voit. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites recompter l'exercice 2 en surlignant deux fois le même schéma, avec deux " +
              "couleurs : une pour les éléments (8), une pour les traits (7). L'écart d'une unité " +
              "saute aux yeux et se discute.<br/><br/>" +
              "Le geste qui installe la règle : <strong>on ne compte pas les objets, on compte les " +
              "traits</strong>. Un trait qui touche deux éléments extérieurs est une $FS$ ; un trait " +
              "qui n'en touche qu'un est une $FC$. Sur un portail automatique, « laisser passer le " +
              "véhicule » relie la voiture ET le propriétaire au portail : un seul trait, une seule " +
              "fonction, deux éléments."
    },
    {
      titre: "Confondre fonction de service et fonction de contrainte",
      eleve: "« Résister à l'humidité de la salle de bain », c'est utile à l'utilisateur, donc c'est " +
             "une fonction de service.",
      cause: "L'élève classe selon l'UTILITÉ ressentie (« ça sert à quelqu'un ») alors que le critère " +
             "de la méthode APTE est purement GÉOMÉTRIQUE sur le diagramme : combien d'éléments " +
             "extérieurs le trait relie-t-il ? Deux, c'est une $FS$ ; un seul, c'est une $FC$. " +
             "Presque toute contrainte peut se raconter comme un service rendu, d'où l'erreur.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 42 énoncés tirés FOURNISSENT tous le décompte déjà fait (« on a
         identifié 2 FS et 5 FC ») : aucun ne demande à l'élève de classer
         lui-même une fonction, donc aucun ne peut mettre cette confusion en
         défaut. Renvoyer vers l'un d'eux serait un renvoi faux.
         Le QUIZ, lui, la traite de front : sa question 3 propose « résister à
         l'humidité de la salle de bain » avec la bonne réponse « fonction de
         contrainte, car elle relie le produit à un seul élément extérieur ».
         C'est le seul renvoi honnête du livre pour cette erreur. */
      exercice: { type: "quiz", n: 3 },
      remede: "Passez par le quiz 3, bâti exactement sur cette confusion : « résister à l'humidité de " +
              "la salle de bain » est une $FC$, et la justification donnée est géométrique, pas " +
              "morale.<br/><br/>" +
              "La question à poser systématiquement : <strong>« ce trait touche combien de choses " +
              "en dehors du produit ? »</strong> Deux, c'est une $FS$. Une seule, c'est une $FC$. " +
              "Sur un téléphone, « respecter la réglementation sur le DAS » ne relie le produit qu'à " +
              "la législation : une $FC$, même si la santé de l'utilisateur est en jeu — parce que " +
              "l'utilisateur n'est pas au bout du trait."
    },
    {
      titre: "Répondre par la solution technique au lieu de la fonction",
      eleve: "La fonction du portail, c'est « faire tourner le moteur électrique ».",
      cause: "Réflexe naturel et même valorisé ailleurs : l'élève de SI aime les mécanismes et va " +
             "spontanément vers le composant. Mais nommer le moteur, c'est déjà avoir choisi une " +
             "solution — et fermer la porte aux autres (vérin, contrepoids, manivelle). L'analyse " +
             "fonctionnelle exige de rester au « quoi » tant que le besoin n'est pas stabilisé.",
      /* exercice: null — même raison structurelle que l'erreur précédente :
         les 42 énoncés ne demandent jamais de FORMULER une fonction, seulement
         d'en additionner deux nombres. Le quiz 2, en revanche, porte sur les
         trois caractéristiques du CdCF (critère, niveau, flexibilité), qui
         sont précisément ce qui force à rester au niveau du besoin : un
         critère mesurable n'a pas besoin de nommer le composant. Renvoi
         retenu faute de mieux, et le remède ne s'y limite pas. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le test qui tranche en une phrase : <strong>« et si on enlevait ce composant, le " +
              "besoin existerait-il encore ? »</strong> Sans moteur, on veut toujours ouvrir le " +
              "portail sans descendre de voiture — donc le moteur n'est pas la fonction, c'en est " +
              "une réponse possible.<br/><br/>" +
              "Faites reformuler à l'infinitif, sans aucun nom de pièce : « permettre l'ouverture du " +
              "portail à distance ». Puis demandez trois solutions différentes pour cette même " +
              "fonction. L'élève voit alors de lui-même que la fonction survit au changement de " +
              "solution, et le quiz 2 (critère, niveau, flexibilité) montre qu'on peut même la " +
              "chiffrer sans rien décider du « comment »."
    },
    {
      titre: "Confondre la matière d'œuvre et l'utilisateur dans la bête à cornes",
      eleve: "Pour un lave-linge, « sur quoi le produit agit-il ? », c'est la famille qui l'utilise.",
      cause: "Les deux premières questions de la bête à cornes se ressemblent à l'oreille : « à qui " +
             "rend-il service ? » et « sur quoi agit-il ? ». L'élève rabat la seconde sur la " +
             "première, d'autant que l'utilisateur est la figure la plus saillante du problème. Or " +
             "la matière d'œuvre est ce que le produit TRANSFORME, et un lave-linge ne transforme " +
             "pas la famille.",
      /* exercice: null — ASSUMÉ. Aucun des 42 tirages ne porte sur la bête à
         cornes : le moule unique ne concerne que le diagramme pieuvre. Et le
         quiz (3 questions : dénombrement FS/FC, caractéristiques du CdCF,
         classement d'une FC) ne l'aborde pas davantage.
         La seule occurrence de la bête à cornes dans tout le chapitre est la
         question 1 de l'ÉVALUATION — et une remédiation ne renvoie JAMAIS
         vers l'évaluation notée : ce serait donner la réponse du contrôle.
         Donc `null`, franchement. */
      exercice: null,
      remede: "Aucun exercice ni quiz du livre ne porte sur la bête à cornes — le tirage de ce " +
              "chapitre ne traite que le diagramme pieuvre. À construire à l'oral, donc, et c'est " +
              "l'affaire de cinq minutes.<br/><br/>" +
              "La formulation qui lève l'ambiguïté : remplacez « sur quoi agit-il ? » par " +
              "<strong>« qu'est-ce qui ressort transformé ? »</strong>. Pour un lave-linge, il entre " +
              "du linge sale et il sort du linge propre : la matière d'œuvre est le linge. La famille " +
              "ne ressort pas transformée de la machine — elle est au bout de l'autre question.<br/><br/>" +
              "Faites le tour de la classe avec trois objets (grille-pain : le pain ; ascenseur : les " +
              "personnes ; perceuse : le matériau). Le cas de l'ascenseur est le plus formateur, " +
              "parce que l'utilisateur EST la matière d'œuvre — ce qui montre que les deux questions " +
              "sont bien distinctes même quand elles ont la même réponse."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ, pas supposé : `validerProf` refuse toute autre longueur.

     Référentiel SI (2019). Rappel du fait mesuré, qui explique les trois
     `analyser` : ce chapitre ne demande jamais de concevoir ni d'expérimenter,
     et une question sur cinq seulement comporte un calcul.

     Q1 (bête à cornes, matière d'œuvre) → analyser : identifier le besoin et
        caractériser ce que le système transforme.
     Q2 (5 traits doubles + 4 traits simples → 9 fonctions) → modéliser :
        l'élève passe du schéma pieuvre à un décompte structuré FS/FC ; c'est
        la lecture d'un modèle, pas une application de formule.
     Q3 (repérer une FC parmi quatre propositions) → analyser : caractériser
        une fonction par sa position sur le diagramme.
     Q4 (fonction de service vs fonction technique, le « quoi » et le
        « comment ») → communiquer : la question porte sur la formulation
        juste, c'est-à-dire sur le vocabulaire normalisé de la méthode APTE.
     Q5 (flexibilité $\pm 5°$C au CdCF) → résoudre : la seule question du
        chapitre qui exige d'extraire une valeur numérique d'un énoncé. */
  competences: {
    evaluation: ['analyser', 'modéliser', 'analyser', 'communiquer', 'résoudre']
  }
};
