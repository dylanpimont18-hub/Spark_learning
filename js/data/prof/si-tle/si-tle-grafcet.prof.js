/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-grafcet.prof.js
   Fiche professeur du chapitre « Modélisation des systèmes séquentiels
   (GRAFCET) » (terminale SI), pour l'édition du professeur. JAMAIS chargée par
   le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   CHAPITRE PILOTE du dossier `si-tle` (2026-09-17) : les conventions des six
   autres fiches du dossier y sont calées. C'est aussi le pilote du CAS
   DIFFICILE de l'ouvrage — corpus pauvre, `exercice: null` fréquent.

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. Voir l'en-tête de
   `si-2nde-analyse-fonctionnelle.prof.js` pour l'historique de son ajout.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 16.

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du
   corps du chapitre. Deux conséquences dures, toutes deux vérifiées contre
   `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   Et surtout : ces neuf énoncés ne couvrent que TROIS MOULES, tous de
   dénombrement, relevés un par un :
     - transitions d'un GRAFCET linéaire NON bouclé ($n - 1$) : ex. 1, 4, 7 ;
     - étapes totales avec divergence en ET (somme des branches) : ex. 2, 5, 8 ;
     - transitions d'un GRAFCET linéaire BOUCLÉ ($n$)          : ex. 3, 6, 9.

   LE FAIT LE PLUS IMPORTANT DE CETTE FICHE : le chapitre enseigne cinq règles
   d'évolution, les réceptivités, les divergences OU/ET et les macro-étapes,
   mais les neuf exercices ne savent faire que COMPTER des étapes et des
   transitions. Les deux questions à choix multiple de l'évaluation (règle R2,
   différence graphique OU/ET) n'ont donc AUCUN exercice correspondant. Le
   QUIZ, lui, traite la règle R2 (question 1) et la règle R5 (question 2) :
   c'est le seul support du livre pour les erreurs conceptuelles, et les deux
   renvois de cette fiche vers le quiz sont vérifiés sur son contenu réel.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-grafcet"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc
     de 1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     AUCUN prérequis DANS CE DOSSIER, et c'est un constat, pas une facilité.

     Le GRAFCET est le seul chapitre de Terminale qui ne relève ni de la
     mécanique (ch. 1 dynamique, ch. 2 énergie cinétique, ch. 5 transmission)
     ni de l'automatique continue (ch. 3 PID, ch. 6 Bode). Il modélise du
     SÉQUENTIEL — des états discrets qui se succèdent — là où tout le reste du
     niveau manipule des grandeurs continues. Aucun des six autres chapitres
     ne lui apporte quoi que ce soit.

     Candidats examinés et ÉCARTÉS :
     - ch. 3 (Systèmes asservis, PID) : le voisin le plus proche en apparence,
       puisque les deux parlent de commande. Mais un asservissement régule une
       grandeur continue par une boucle de retour, un GRAFCET ordonne des
       actions discrètes dans le temps. Les deux formalismes ne partagent ni
       vocabulaire ni outil mathématique. Écarté.
     - ch. 7 (Réseaux et protocoles) : tous deux sont du domaine de
       l'information, et un GRAFCET s'implante dans un automate qui communique
       en réseau. Mais c'est une adjacence industrielle, pas une dépendance
       pédagogique : rien du chapitre 7 n'est nécessaire ici. Écarté.
     - ch. 1, 2, 5, 6 (mécanique et fréquentiel) : aucun lien. Écartés.

     LE VRAI PRÉREQUIS EST HORS DU DOSSIER, et c'est dit dans la `note`
     imprimée : le GRAFCET suppose l'algèbre de Boole de PREMIÈRE
     (`si-1re-logique-boole`), parce qu'une réceptivité EST une expression
     booléenne de capteurs. `prerequis` ne pouvant désigner qu'un chapitre du
     même niveau, cette dépendance ne peut pas être déclarée en donnée : la
     colonne « S'appuie sur » affichera un tiret. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 4 dans le niveau Terminale, celui du
     livre (chapitre 17 de l'ouvrage, 4e du dossier `si-tle`).

     Le rang 4 est un bon compromis et non un rang par défaut. Le GRAFCET
     n'ayant aucun prérequis dans le niveau, il pourrait s'enseigner n'importe
     quand ; deux raisons de ne pas le mettre en ouverture ni en clôture :
     - il offre une RESPIRATION au milieu de l'année, entre la mécanique
       (rangs 1-2) et l'automatique fréquentielle (rangs 3 et 6), qui sont les
       deux blocs les plus calculatoires du niveau ;
     - il précède utilement le chapitre 7 (réseaux), avec lequel il forme la
       partie « information » du programme, sans en dépendre.
     Le livre le range aussi en 4e position de son niveau : les deux ordres
     coïncident, pas de triangle d'alerte.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 4,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 4 de terminale) et le
     programme de spécialité SI (2019), partie « Modéliser le comportement
     séquentiel d'un système ». La norme citée par le cours est IEC 60848.

     Bornés à ce que le chapitre traite : les trois éléments constitutifs, les
     règles d'évolution, et les structures OU/ET. Rien sur l'implantation dans
     un automate (langage Ladder, grafcet en ST), que le corpus n'aborde pas
     malgré la mention des API dans l'introduction du cours. */
  attendus: [
    "Identifier les éléments constitutifs d'un GRAFCET : étapes, transitions, réceptivités et actions associées",
    "Appliquer les règles d'évolution pour déterminer l'état d'un GRAFCET et le franchissement d'une transition",
    "Distinguer une divergence en OU d'une divergence en ET et interpréter la structure d'un GRAFCET donné"
  ],

  note: "Les étapes, les transitions et les réceptivités, les cinq règles d'évolution de la norme " +
        "IEC 60848, les divergences en OU et en ET, les macro-étapes : le chapitre donne le " +
        "formalisme normalisé de la commande séquentielle, celui qu'on programme dans un automate " +
        "industriel.<br/><br/>" +
        "<strong>Le prérequis de ce chapitre est en première, et la colonne « S'appuie sur » " +
        "affiche un tiret.</strong> Le GRAFCET suppose l'algèbre de Boole " +
        "(<em>Circuits logiques et algèbre de Boole</em>, première) : une réceptivité n'est rien " +
        "d'autre qu'une <strong>expression booléenne de capteurs</strong> — " +
        "$départ \\cdot \\overline{sécurité}$. Un prérequis ne pouvant désigner qu'un chapitre du " +
        "même niveau, cette dépendance ne peut pas figurer dans le tableau ; vérifiez-la " +
        "vous-même avant de commencer, en particulier le ET, le OU et la négation.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas — à lire avant de " +
        "préparer votre séance.</strong> Le tirage de ce chapitre ne comporte que " +
        "<strong>9 énoncés</strong> (contre 42 pour les chapitres les mieux dotés), et tous les " +
        "neuf sont des <strong>dénombrements</strong> : compter les transitions d'un GRAFCET " +
        "linéaire, bouclé ou non, ou additionner les étapes des branches d'une divergence en ET. " +
        "Il n'y a donc dans le livre <strong>aucun exercice de lecture de GRAFCET</strong>, aucun " +
        "sur les réceptivités, aucun sur l'application des règles d'évolution — c'est-à-dire " +
        "aucun sur le cœur du chapitre. Le quiz traite les règles R2 et R5, et c'est tout. " +
        "Prévoyez d'apporter vos propres GRAFCET à lire et à faire évoluer jeton par jeton : " +
        "sans cela, vos élèves sauront compter des étapes sans savoir lire un grafcet.",

  erreurs: [
    {
      titre: "Compter les transitions comme s'il y en avait toujours une de moins que les étapes",
      eleve: "Un GRAFCET bouclé de $7$ étapes a $7 - 1 = 6$ transitions.",
      cause: "L'élève applique la règle du GRAFCET linéaire non bouclé ($n - 1$) sans vérifier si le " +
             "cycle se referme. C'est un raisonnement de segment appliqué à un anneau : sur un " +
             "segment, il y a un intervalle de moins que de points, mais sur un anneau il y en a " +
             "autant. Le retour à l'étape initiale est une transition comme les autres, et c'est " +
             "elle qu'on oublie.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 16, troisième
         tirage) : GRAFCET linéaire de 6 étapes (E0 à E5) AVEC retour à E0,
         donc 6 transitions. C'est le premier tirage du moule « bouclé », et sa
         correction énonce la règle explicitement (« Cycle bouclé : autant de
         transitions que d'étapes »).
         COMPARÉ AUX AUTRES CANDIDATS : les exercices 6 (8 étapes bouclé) et 9
         (7 étapes bouclé) conviendraient aussi. L'exercice 9 est même le cas
         EXACT de l'évaluation (7 étapes bouclé), ce qui le disqualifie comme
         remédiation : l'élève y reconnaîtrait la question notée plutôt que la
         règle. L'exercice 3 est donc retenu — même moule, valeurs
         différentes. Le vrai intérêt pédagogique est de le mettre en regard de
         l'exercice 1 (8 étapes NON bouclé, 7 transitions), qui donne presque
         le même nombre pour une structure différente : la comparaison des deux
         est ce qui installe la distinction, et le remède la demande. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 (6 étapes, bouclé → 6 transitions) puis IMMÉDIATEMENT " +
              "l'exercice 1 (8 étapes, non bouclé → 7 transitions), et demandez ce qui change. La " +
              "comparaison des deux structures fait plus que la règle récitée séparément.<br/><br/>" +
              "Le geste qui ne trompe pas : <strong>faire dessiner les transitions et les " +
              "barrer une par une</strong>. Sur un cycle bouclé, la flèche de retour vers E0 est " +
              "une transition, avec sa propre réceptivité — souvent « pièce évacuée » ou « fin de " +
              "course atteinte ».<br/><br/>" +
              "L'image du système réel qui emporte l'adhésion : une chaîne de production en cycle " +
              "tourne indéfiniment. Si la dernière transition n'existait pas, la machine " +
              "s'arrêterait après une seule pièce. <strong>C'est le retour qui fait le cycle.</strong>"
    },
    {
      titre: "Croire qu'une réceptivité vraie suffit à franchir une transition",
      eleve: "Le capteur de fin de course est actif, donc la transition est franchie.",
      cause: "L'élève retient la moitié de la règle R2, celle qui se voit sur le schéma (la " +
             "réceptivité est écrite à côté de la barre), et oublie celle qui ne se voit pas " +
             "(l'étape amont doit être active). C'est l'erreur la plus lourde du chapitre : elle " +
             "conduit à des grafcets qui « sautent » des étapes, et donc à des automatismes " +
             "dangereux en pratique.",
      /* exercice: null aurait été plus honnête qu'un renvoi d'exercice faux :
         MESURE FAITE, aucun des 9 tirages ne porte sur les règles d'évolution
         — les trois moules ne savent que dénombrer. Renvoyer vers l'un d'eux
         serait un renvoi faux.
         Le quiz 1 traite exactement cette erreur : « Selon la règle R2 du
         GRAFCET, une transition est franchie quand : », bonne réponse
         « L'étape amont est active ET la réceptivité est vraie », avec une
         correction qui insiste sur la simultanéité des DEUX conditions.
         Renvoi retenu et vérifié sur le contenu réel du quiz. */
      exercice: { type: "quiz", n: 1 },
      remede: "Le quiz 1 porte précisément là-dessus, et sa correction insiste sur le point qui " +
              "manque : les <strong>deux</strong> conditions sont nécessaires " +
              "<strong>simultanément</strong>.<br/><br/>" +
              "La formulation à faire répéter : <strong>« amont active ET réceptivité vraie »</strong>, " +
              "dans cet ordre, l'étape d'abord. Insistez sur le fait que la condition invisible " +
              "(l'étape) prime sur la condition visible (le capteur).<br/><br/>" +
              "Le contre-exemple qui rend l'enjeu concret, à poser à l'oral puisque le livre n'en " +
              "propose pas : sur une perceuse automatisée, le capteur « perçage terminé » peut très " +
              "bien être actif alors que l'étape « descendre le foret » n'a pas commencé — la pièce " +
              "précédente vient d'être retirée. Si la transition était franchie, le grafcet " +
              "avancerait d'une étape sans avoir percé. C'est la raison d'être de la règle R2, et " +
              "c'est ce qui la rend mémorable : <strong>sans elle, la machine saute des " +
              "étapes.</strong>"
    },
    {
      titre: "Confondre divergence en OU et divergence en ET",
      eleve: "Le GRAFCET se sépare en deux branches, donc le système fait un choix entre les deux.",
      cause: "L'élève lit la séparation comme un aiguillage, parce que c'est l'image intuitive d'un " +
             "chemin qui bifurque. Il ne regarde pas le nombre de traits, qui est le seul indice : " +
             "simple trait pour le OU (choix exclusif), double trait pour le ET (parallélisme). La " +
             "différence est purement graphique et se lit en un coup d'œil — à condition de savoir " +
             "où regarder.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi PARTIEL, ce que le remède dit
         honnêtement plutôt que de le masquer.
         Exercice 2 du livre (graine 20260816 + 16, deuxième tirage) :
         séquence principale de 4 étapes, divergence en ET ouvrant 2 branches
         de 4 et 2 étapes, convergence en ET, retour à l'initiale, total
         $4 + 4 + 2 = 10$ étapes. C'est le seul moule du livre qui manipule une
         divergence, et il fait exactement le geste utile ici : il ADDITIONNE
         les deux branches au lieu d'en choisir une, ce qui n'a de sens que
         parce que la divergence est un ET.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 5 et 8, mêmes
         structures avec 3 étapes en séquence principale) : l'exercice 2 a la
         séquence principale la plus longue et les deux branches les plus
         contrastées (4 et 2), ce qui rend le schéma plus lisible au tableau.
         CE QUE LE RENVOI NE FAIT PAS : aucun exercice du livre ne présente de
         divergence en OU, donc aucun ne permet la COMPARAISON des deux
         structures. Le quiz ne la traite pas non plus. Seule la question 3 de
         l'évaluation porte sur la différence graphique — et on ne renvoie
         jamais à l'évaluation notée. Le remède le dit et propose le geste de
         substitution. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 en exigeant le dessin du GRAFCET avant tout calcul. " +
              "L'élève doit constater qu'on <strong>additionne</strong> les étapes des deux " +
              "branches ($4 + 4 + 2 = 10$) : cette addition n'a de sens que parce que les deux " +
              "branches s'exécutent <strong>toutes les deux</strong>. Si c'était un OU, il faudrait " +
              "choisir, et le total dépendrait du chemin pris.<br/><br/>" +
              "Attention : le livre ne propose <strong>aucun exercice avec divergence en OU</strong>, " +
              "donc aucune comparaison directe. Dessinez-la vous-même au tableau à côté de celle de " +
              "l'exercice 2 — c'est l'affaire de deux minutes et c'est ce qui fixe la " +
              "distinction.<br/><br/>" +
              "Les deux systèmes réels qui ancrent la différence : un " +
              "<strong>tri postal</strong> envoie chaque colis vers UNE destination selon sa taille " +
              "(divergence en OU, simple trait, réceptivités exclusives) ; une " +
              "<strong>machine à laver</strong> chauffe l'eau ET fait tourner le tambour en même " +
              "temps (divergence en ET, double trait). Le moyen mnémotechnique qui tient : " +
              "<strong>deux traits, deux branches actives</strong>."
    },
    {
      titre: "Oublier les étapes des branches parallèles dans le décompte total",
      eleve: "La séquence principale a $4$ étapes et il y a $2$ branches, donc le GRAFCET a " +
             "$4 + 2 = 6$ étapes.",
      cause: "L'élève compte les BRANCHES au lieu des étapes qu'elles contiennent. L'énoncé donne " +
             "deux nombres par branche (leur longueur) et un nombre de branches : il attrape les " +
             "mauvais. L'erreur est de lecture d'énoncé autant que de GRAFCET, et elle est " +
             "fréquente parce que « 2 branches » est le chiffre le plus saillant de la phrase.",
      /* RENVOI VÉRIFIÉ. Exercice 5 du livre (graine 20260816 + 16, cinquième
         tirage) : séquence principale de 3 étapes, divergence en ET ouvrant 2
         branches de 2 et 3 étapes, total $3 + 2 + 3 = 8$ étapes.
         POURQUOI L'EXERCICE 5 ET NON L'EXERCICE 2 : c'est le seul des trois
         tirages du moule où l'erreur donne un résultat DIFFÉRENT de façon
         instructive. En comptant les branches, l'élève obtiendrait
         $3 + 2 = 5$ au lieu de 8. Sur l'exercice 2 (déjà utilisé pour l'erreur
         précédente, ce qui justifie aussi de varier), il obtiendrait
         $4 + 2 = 6$ au lieu de 10. Les deux fonctionnent, mais l'exercice 5 a
         l'avantage que ses deux branches (2 et 3 étapes) ont des longueurs
         proches du nombre de branches (2), ce qui rend la confusion visible et
         donc discutable : l'élève voit qu'il a pris « 2 » pour la mauvaise
         raison. La correction du tirage détaille branche par branche
         (« Branche 1 : 2 étapes, Branche 2 : 3 étapes »), ce qui est
         exactement la décomposition manquante. */
      exercice: { type: "exercice", n: 5 },
      remede: "Faites traiter l'exercice 5 en écrivant la décomposition ligne à ligne, comme le fait " +
              "la correction du livre : séquence principale $3$, branche 1 → $2$, branche 2 → $3$, " +
              "total $3 + 2 + 3 = 8$. Le nombre de branches ($2$) n'apparaît " +
              "<strong>nulle part</strong> dans le calcul, et c'est le point à faire " +
              "remarquer.<br/><br/>" +
              "Le réflexe à installer sur tout énoncé de ce type : <strong>souligner les longueurs " +
              "de branches, entourer le nombre de branches, et ne sommer que ce qui est " +
              "souligné.</strong><br/><br/>" +
              "Puis faites le tour par le dessin : sur un GRAFCET tracé, les étapes se comptent " +
              "carré par carré, et la question ne se pose plus. C'est le meilleur argument pour " +
              "exiger le schéma avant le calcul, dans un chapitre où les neuf exercices du livre " +
              "invitent au contraire à calculer sans dessiner."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. QUATRE questions
     ici et non cinq — COMPTÉ sur le module chargé : c'est l'un des quatre
     chapitres de l'ouvrage à n'en avoir que 4, et `validerProf` exige
     exactement autant de compétences que de questions.

     Q1 (GRAFCET bouclé de 7 étapes → 7 transitions) → résoudre : application
        d'une règle de dénombrement à une structure donnée.
     Q2 (règle R2 : quand une transition est-elle franchie) → analyser :
        caractériser la condition de franchissement, c'est-à-dire le
        comportement du modèle. Ce n'est pas `communiquer` : la question ne
        porte pas sur le vocabulaire mais sur la règle de fonctionnement.
     Q3 (différence graphique OU / ET : simple trait, double trait) →
        communiquer : la question porte sur la CONVENTION de représentation
        normalisée (IEC 60848), donc sur le langage graphique lui-même.
     Q4 (GRAFCET non bouclé de 8 étapes → 7 transitions) → résoudre : même
        nature que Q1, autre structure.
     Aucune question n'est `modéliser` : les quatre portent sur un GRAFCET
     DÉCRIT par l'énoncé, jamais sur sa construction à partir d'un cahier des
     charges — ce que le corpus ne demande nulle part, faute d'exercice de
     lecture ou de tracé. */
  competences: {
    evaluation: ['résoudre', 'analyser', 'communiquer', 'résoudre']
  }
};
