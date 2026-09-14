/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-trigonometrie.prof.js
   Fiche professeur du chapitre « Trigonométrie — cercle trigonométrique »
   (première), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (1re-derivation.prof.js), conventions comprises.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-trigonometrie"] = {

  /* Prérequis, en NUMÉROS DE CHAPITRES DU LIVRE, résolus dans le niveau de la
     fiche (voir `indexerParNiveau`, scripts/manuel/prof.js).

     LISTE VOLONTAIREMENT VIDE, et ce n'est pas un oubli.

     Ce chapitre est placé au rang conseillé 5. Les quatre chapitres qui le
     précèdent dans la progression sont l'information chiffrée (rang 1), les
     suites (rang 2), le second degré (rang 3) et les polynômes et leur signe
     (rang 4). Aucun des quatre n'est mobilisé ici : la trigonométrie de
     première ne demande ni suite, ni trinôme, ni tableau de signes, ni
     statistique.

     Ses vrais prérequis sont ailleurs — le cosinus et le sinus dans le
     triangle rectangle, et la lecture de coordonnées dans un repère —, et ils
     relèvent tous deux de la SECONDE. Le champ `prerequis` ne sait désigner
     que des chapitres du même niveau : il ne peut donc pas les exprimer, et
     une liste vide est ici la réponse honnête.

     Déclarer un chapitre de première sans rapport, pour « ne pas laisser le
     champ vide », produirait exactement le défaut relevé sur la 6e : un
     prérequis décoratif, qui fait perdre confiance dans tous les autres. Le
     rappel de seconde qui est réellement nécessaire est signalé dans `note`. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 5.

     Le LIVRE place la trigonométrie au chapitre 6, par regroupement
     thématique — un rangement par domaine, pas un conseil d'enseignement.

     La progression conseillée retient le rang 5, au milieu de l'année, pour
     deux raisons.

     D'abord parce que ce chapitre ne dépend d'aucun autre chapitre de
     première : il pourrait, en théorie, être traité dès septembre. Le placer
     tout au début serait pourtant maladroit, car c'est un chapitre exigeant en
     abstraction — on y généralise une définition que l'élève croyait acquise.

     Ensuite et surtout parce qu'il est ATTENDU PLUS TARD : le produit scalaire
     (rang 8) a besoin du cosinus des angles obtus, que seul ce chapitre
     installe. Le rang 5 le place confortablement avant, avec deux chapitres
     d'écart, ce qui laisse le temps aux valeurs remarquables de se déposer
     avant d'être réemployées. */
  rangConseille: 5,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Géométrie », sous-partie « Trigonométrie ».
  attendus: [
    "Convertir une mesure d'angle des degrés vers les radians et réciproquement",
    "Placer un point sur le cercle trigonométrique à partir d'une mesure d'angle",
    "Déterminer le cosinus et le sinus d'un réel à partir du cercle trigonométrique",
    "Connaître et utiliser les valeurs remarquables des cosinus et sinus",
    "Utiliser la relation $\\cos^2 x + \\sin^2 x = 1$",
    "Exploiter la parité et la périodicité des fonctions cosinus et sinus, ainsi que les symétries du cercle"
  ],

  /* Là où le chapitre déborde du programme de l'année, ou s'appuie sur l'année
     précédente, on le dit à l'enseignant plutôt que de le lui laisser
     découvrir en classe. */
  note: "Le radian, le cercle trigonométrique, les valeurs remarquables, la relation " +
        "fondamentale, la parité et la périodicité sont tous au programme de " +
        "première.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord un <strong>prérequis de seconde</strong> qui n'est pas rappelé par le " +
        "cours : le cosinus et le sinus y ont été définis comme des rapports de longueurs " +
        "dans un triangle rectangle. Tout ce chapitre consiste à élargir cette définition, " +
        "et le « Découvrir » est bâti sur cet élargissement. Un élève qui a oublié la " +
        "définition de seconde ne verra pas ce qu'on élargit : dix minutes de rappel en " +
        "ouverture changent la réception de la séance entière.<br/><br/>" +
        "Ensuite la <strong>dérivée de $\\sin$ et $\\cos$</strong>, évoquée dans le cours " +
        "(« les formules de dérivée ne sont valides qu'en radians ») pour justifier le " +
        "choix de l'unité. L'argument est juste et il est le bon, mais ces dérivées sont au " +
        "programme de <strong>terminale</strong> : il s'agit d'une ouverture, à présenter " +
        "comme telle, et non d'un résultat à faire apprendre.<br/><br/>" +
        "Enfin les <strong>fonctions</strong> cosinus et sinus, c'est-à-dire leurs courbes " +
        "sur $\\mathbb{R}$ et leur étude, que le programme de première mentionne. Le " +
        "chapitre reste entièrement sur le cercle et ne trace aucune sinusoïde : il prépare " +
        "cette étude sans l'aborder.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent.

     LES QUATRE RENVOIS ONT ÉTÉ VÉRIFIÉS APRÈS L'ÉLARGISSEMENT DE LA BANQUE,
     jamais avant : le chapitre est passé de 3 à 12 tâches distinctes le
     2026-09-14, ce qui a entièrement redistribué les rangs. Un renvoi écrit
     contre l'ancien tirage aurait visé un exercice qui n'est plus au même
     numéro — c'est précisément le genre de faux renvoi que la règle interdit. */
  erreurs: [
    {
      titre: "Perdre le signe en sortant de la racine",
      eleve: "Sachant $\\cos\\theta = 0{,}6$ avec $\\theta$ dans le quatrième quadrant, " +
             "l'élève écrit $\\sin^2\\theta = 0{,}64$ puis $\\sin\\theta = 0{,}8$, sans " +
             "jamais envisager $-0{,}8$.",
      cause: "Le calcul est irréprochable et c'est ce qui rend l'erreur difficile à " +
             "déloger : l'élève a appliqué correctement la relation fondamentale, et le " +
             "symbole $\\sqrt{\\phantom{x}}$ désigne effectivement, depuis la quatrième, la " +
             "racine <strong>positive</strong>. Il ne se trompe pas sur la racine carrée.<br/><br/>" +
             "Ce qui lui manque est ailleurs : l'équation $\\sin^2\\theta = 0{,}64$ a " +
             "<strong>deux</strong> solutions, et choisir entre elles n'est pas une question " +
             "de calcul mais de position sur le cercle. C'est une étape de raisonnement que " +
             "rien, dans l'écriture, ne réclame — l'élève ne l'omet pas, il ignore qu'elle " +
             "existe.<br/><br/>" +
             "Tant que les exercices restent dans le premier quadrant, où tout est positif, " +
             "l'oubli ne coûte rien et se consolide.",
      remede: "Interdire, pendant plusieurs séances, d'écrire directement $\\sin\\theta = \\ldots$ " +
              "après un carré. Exiger la ligne intermédiaire " +
              "$\\sin\\theta = 0{,}8$ <strong>ou</strong> $\\sin\\theta = -0{,}8$, puis une " +
              "phrase qui tranche en nommant le quadrant. La case vide entre les deux " +
              "possibilités est ce qui rend l'étape visible.<br/><br/>" +
              "Faire systématiquement placer le point sur le cercle AVANT de conclure. Le " +
              "signe ne se déduit pas d'une règle mémorisée, il se lit : le point est-il " +
              "au-dessus ou au-dessous de l'axe horizontal ? Le schéma « Quatre angles, deux " +
              "valeurs, rien qu'un signe qui change » est construit exactement pour cette " +
              "lecture.<br/><br/>" +
              "Cette erreur est également mise en scène dans la cinquième question de " +
              "l'évaluation, où l'élève doit diagnostiquer le raisonnement d'un camarade : " +
              "elle peut servir de support de discussion collective une fois la remédiation " +
              "faite.",
      /* Vérifié APRÈS élargissement, contre le tirage réel du livre
         (2026-09-14, graine 20260816 + rang de chapitre) : l'exercice 4 donne
         $\sin\theta = 0{,}28$ avec $\theta$ dans le DEUXIÈME quadrant, et
         demande $\cos\theta$. La réponse attendue est négative, et le corrigé
         consacre sa troisième ligne au seul choix du signe. Un élève qui
         oublie le signe obtient une réponse refusée par le champ numérique :
         la question porte exactement sur l'étape manquante.
         L'exercice 8, de même tâche mais dans le PREMIER quadrant, sert de
         contraste utile — là, l'oubli ne se voit pas, et c'est précisément ce
         qui laisse l'erreur s'installer. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Intervertir les valeurs de $\\frac{\\pi}{6}$ et de $\\frac{\\pi}{3}$",
      eleve: "L'élève annonce $\\cos\\dfrac{\\pi}{6} = \\dfrac{1}{2}$ et " +
             "$\\cos\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$, soit exactement l'inverse des " +
             "valeurs correctes.",
      cause: "Les deux angles se ressemblent à l'écrit, leurs valeurs sont prises dans le " +
             "même petit jeu de nombres, et l'élève les a mémorisées comme une liste — " +
             "c'est-à-dire sans aucun moyen de contrôle interne. Une liste de huit valeurs " +
             "apprise par cœur se dégrade en quelques semaines, et elle se dégrade justement " +
             "en échangeant les éléments voisins.<br/><br/>" +
             "Il y a en outre une fausse intuition à l'œuvre, et elle est très répandue : " +
             "« angle plus grand, donc valeurs plus grandes ». Elle est vraie pour le sinus " +
             "et <strong>fausse</strong> pour le cosinus, qui décroît. L'élève qui s'y fie " +
             "obtient donc une réponse sur deux correcte, ce qui l'encourage à continuer.",
      remede: "Ne pas faire réapprendre la liste : elle se re-dégradera de la même façon. " +
              "Remplacer la mémoire par une lecture, à l'aide du schéma « Pourquoi le cosinus " +
              "de $\\frac{\\pi}{6}$ est le grand ».<br/><br/>" +
              "Sur ce schéma, les trois points remarquables du premier quadrant sont projetés " +
              "sur l'axe horizontal, et leurs pieds se succèdent de droite à gauche à mesure " +
              "que l'angle augmente. Le cosinus <strong>diminue</strong>, et cela se voit. " +
              "Faire reproduire ce croquis à main levée, en dix secondes, en début de chaque " +
              "exercice concerné.<br/><br/>" +
              "Donner enfin le contrôle de bon sens qui suffit à trancher sans schéma : " +
              "$\\dfrac{\\pi}{6}$ vaut $30°$, un petit angle, donc le point reste " +
              "<strong>bas et très à droite</strong> — abscisse grande, ordonnée petite. Un " +
              "élève qui se pose cette question ne peut plus intervertir, parce qu'il ne " +
              "récite plus : il déduit.",
      /* Vérifié APRÈS élargissement, contre le tirage réel du livre
         (2026-09-14, graine 20260816 + rang de chapitre) : l'exercice 10
         demande $\cos(-\pi/6)$. L'angle de base est exactement celui de la
         confusion, et la réponse attendue, $0{,}866$, est refusée si l'élève
         répond $0{,}5$. Le corrigé rappelle en outre la symétrie, ce qui fait
         travailler la lecture sur le cercle plutôt que la récitation. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Traiter le radian comme une simple autre unité",
      eleve: "L'élève convertit tout en degrés avant chaque calcul, ou demande « à quoi ça " +
             "sert, les radians, puisqu'on peut travailler en degrés ».",
      cause: "La question est légitime, et le cours n'y répond souvent que par une formule de " +
             "conversion — ce qui la confirme au lieu de la traiter : si la seule chose qu'on " +
             "sache faire du radian est de le convertir, alors il n'est effectivement qu'une " +
             "unité de plus, plus pénible que les degrés puisqu'elle traîne un $\\pi$.<br/><br/>" +
             "Ce que l'élève n'a jamais vu, c'est que le radian <strong>mesure une " +
             "longueur</strong>. Tant qu'il l'ignore, il n'a aucune raison de le préférer, et " +
             "il a raison de résister : on lui impose une complication sans contrepartie " +
             "visible.<br/><br/>" +
             "Le coût réel n'apparaît qu'en terminale, quand $(\\sin x)' = \\cos x$ cessera " +
             "d'être vraie en degrés — mais c'est trop tard pour fonder l'habitude.",
      remede: "Répondre à la question au lieu de la contourner, avec le schéma « Un radian, " +
              "c'est une longueur ». Sur le cercle de rayon $1$, l'angle et l'arc parcouru " +
              "sont <strong>le même nombre</strong> : ce n'est pas une convention, c'est une " +
              "égalité de longueurs, et le radian est la seule unité qui la rende vraie.<br/><br/>" +
              "Enchaîner sur l'usage qui en découle immédiatement : la longueur d'un arc vaut " +
              "$\\ell = R \\times \\theta$, à condition que $\\theta$ soit en radians. En " +
              "degrés, il faudrait passer par une proportion du périmètre. L'élève constate " +
              "alors que le radian <strong>simplifie</strong> un calcul au lieu de le " +
              "compliquer, ce qui est le seul argument qui porte.<br/><br/>" +
              "Signaler enfin l'ouverture, sans la faire apprendre : c'est la même raison qui " +
              "rendra les formules de dérivation valables en terminale.",
      /* Vérifié APRÈS élargissement, contre le tirage réel du livre
         (2026-09-14, graine 20260816 + rang de chapitre) : l'exercice 2 fait
         calculer la longueur d'un arc, $\ell = R\theta$, pour une aiguille de
         5 m pivotant de $\pi/3$. C'est la tâche « arc », AJOUTÉE le
         2026-09-14 : elle n'existait pas dans la banque d'origine, qui ne
         proposait aucun exercice où le radian serve à autre chose qu'à être
         converti. Le corrigé se termine en disant explicitement ce que le
         radian épargne. L'exercice 9 est la même tâche, utile en reprise. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Chercher une valeur remarquable pour un angle qui n'en est pas un",
      eleve: "Devant $\\cos(570°)$ ou $\\sin\\left(\\dfrac{13\\pi}{6}\\right)$, l'élève " +
             "déclare que « l'angle n'est pas dans le tableau » et laisse la question " +
             "blanche.",
      cause: "Les valeurs remarquables ont été présentées comme une table à consulter, et une " +
             "table ne contient qu'un nombre fini d'entrées. L'élève cherche donc une entrée, " +
             "ne la trouve pas, et conclut logiquement qu'il lui manque une donnée.<br/><br/>" +
             "Ce qui n'a pas été installé, c'est que le cercle se parcourt <strong>en " +
             "boucle</strong> : au-delà d'un tour, on repasse exactement par les mêmes points. " +
             "La périodicité n'est pas perçue comme un moyen de RAMENER un angle inconnu à un " +
             "angle connu, mais comme une propriété de plus à mémoriser.<br/><br/>" +
             "Le blocage est donc un blocage de méthode : l'élève ne sait pas qu'il a le " +
             "droit de transformer l'angle avant de chercher.",
      remede: "Installer un réflexe en deux temps, systématique et énoncé comme tel : " +
              "d'abord <strong>ramener</strong> l'angle dans $[0\\,;\\,2\\pi[$ en retranchant " +
              "des tours entiers, ensuite seulement le décomposer à partir d'un angle " +
              "remarquable. Les deux gestes sont distincts et l'élève doit les écrire sur " +
              "deux lignes séparées.<br/><br/>" +
              "Faire la démonstration au tableau sur un cas volontairement extravagant, " +
              "$\\cos(1110°)$ par exemple : retrancher trois tours donne $30°$, et la réponse " +
              "tombe. L'effet est net, et c'est ce qui fait comprendre qu'aucun angle n'est " +
              "hors d'atteinte.<br/><br/>" +
              "Reformuler pour finir ce que le tableau est réellement : non pas la liste des " +
              "angles qu'on sait traiter, mais la liste des angles auxquels on " +
              "<strong>ramène</strong> tous les autres. Il n'y a pas d'angle absent du " +
              "tableau, il n'y a que des angles pas encore réduits.",
      /* Vérifié APRÈS élargissement, contre le tirage réel du livre
         (2026-09-14, graine 20260816 + rang de chapitre) : l'exercice 1 porte
         sur un moteur ayant tourné de 510° et demande d'abord de ramener
         l'angle dans $[0° ; 360°[$, puis d'en déduire une valeur
         trigonométrique. L'énoncé impose donc les DEUX TEMPS du remède, dans
         l'ordre, et l'élève ne peut pas sauter la réduction. C'est la tâche
         « periode », AJOUTÉE le 2026-09-14 : aucun exercice de la banque
         d'origine ne sortait de l'intervalle de base, et cette erreur n'avait
         donc aucune remédiation possible avant cette vague. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 convertir $\frac{5\pi}{6}$ en degrés : application directe de la
        conversion, sans choix à faire. C'est « calculer ».
     Q2 calculer $\cos^2\frac{\pi}{4} + \sin^2\frac{\pi}{3}$ : l'élève doit
        mobiliser deux valeurs remarquables, les élever au carré et les
        additionner. Le piège est qu'il s'agit de DEUX angles différents, donc
        que la relation fondamentale ne s'applique pas — mais la tâche reste
        une exécution. C'est « calculer ».
     Q3 l'égalité $\cos(-\theta) = -\cos\theta$ est-elle vraie ? Aucun calcul
        numérique n'est demandé : l'élève doit examiner une affirmation
        générale, la confronter à la parité du cosinus, et déterminer le cas
        exceptionnel où elle tient. C'est du « raisonner ».
     Q4 valeur de $\sin\frac{7\pi}{6}$ : l'élève place l'angle sur le cercle,
        identifie le troisième quadrant et lit le signe de l'ordonnée. Le
        chemin passe par la figure, non par une formule. C'est
        « représenter ».
     Q5 diagnostiquer l'erreur dans le raisonnement rédigé d'un camarade :
        l'élève ne produit aucun résultat, il doit lire une démonstration,
        localiser l'étape fautive et l'expliciter — sachant que le calcul y est
        juste et que seule la justification est fausse. C'est « communiquer ».

     QUESTION 5 RÉÉCRITE le 2026-09-14, et « communiquer » avec elle. L'énoncé
     d'origine demandait de calculer $\sin\theta$ connaissant $\cos\theta$ :
     c'était un cinquième calcul, et il redoublait presque mot pour mot la
     cinquième question du quiz. Aucune des cinq questions n'évaluait alors la
     capacité à lire et critiquer un raisonnement, alors que c'est exactement
     ce que l'erreur de signe — la plus coûteuse du chapitre — demande. L'énoncé
     a été écrit pour la compétence, l'étiquette n'a pas été posée sur un
     énoncé existant.

     « Chercher » et « modéliser » ne sont pas déclarées : aucune des cinq
     questions ne demande d'explorer une piste sans méthode donnée, ni de
     traduire une situation concrète en objet mathématique. Les deux sont
     portées par d'autres chapitres du niveau — « chercher » par la géométrie
     repérée (Q5), « modéliser » par le produit scalaire (Q4) et la dérivation
     (Q2). */
  competences: {
    evaluation: ["calculer", "chercher", "raisonner", "représenter", "communiquer"]
  }
};
