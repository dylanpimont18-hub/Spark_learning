/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-resistance-ohm.prof.js
   Fiche professeur du chapitre « La résistance électrique et la loi d'Ohm »
   (troisième), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la troisième physique-chimie (2026-09-16), au même titre
   que physique-4e-lois-circuits pour la quatrième : les conventions des cinq
   autres fiches du niveau y sont calées.

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Ce chapitre est celui où `réaliser` (brancher un ampèremètre
   en série, un voltmètre en dérivation) et `valider` (un ordre de grandeur,
   une unité) portent le plus d'erreurs — c'est ce qui en fait un bon pilote.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-resistance-ohm"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (troisième), et non du livre de
     cycle — voir la note de `validerPrerequis` dans scripts/manuel/prof.js.

     Aucun chapitre de troisième ne précède celui-ci dans l'ordre des
     dépendances. Le vrai prérequis de la loi d'Ohm est « L'intensité et la
     tension électrique », qui est un chapitre de QUATRIÈME (ch. 4 de ce
     niveau-là) : la structure de données ne permet pas de le déclarer, et
     c'est cohérent — une fiche de troisième ne peut pas viser un chapitre
     d'un autre niveau, puisque le numéro se résout dans le niveau qui
     l'écrit.

     On le dit donc ici, en commentaire, et surtout dans le champ `note`, qui
     est imprimé : l'enseignant de troisième doit savoir que ce chapitre
     suppose l'intensité et la tension acquises, même si la colonne
     « S'appuie sur » du tableau de progression affichera un tiret.

     ch. 1 (Structure de l'atome) et ch. 2 (Réactions chimiques) : aucun lien.
     ch. 3 (Énergie cinétique et potentielle) : aucun lien non plus — l'énergie
     électrique est le chapitre 5, qui vient APRÈS celui-ci et s'appuie sur
     lui. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 4, celui du livre. La loi d'Ohm ouvre
     le bloc électricité de la troisième et doit précéder « Puissance et
     énergie électrique » (rang 5), qui réutilise $U$, $I$ et la relation
     entre les deux.

     Le placer plus tôt dans l'année est possible — le chapitre ne dépend
     d'aucun chapitre de troisième — mais sans intérêt : la chimie des
     chapitres 1 et 2 sert de reprise de la quatrième en début d'année, et
     l'électricité gagne à être traitée d'un bloc avec le chapitre 5.

     Le livre le place aussi en chapitre 4 : les deux ordres coïncident. */
  rangConseille: 4,

  /* Attendus de fin d'année, programme du cycle 4 (2020), thème « L'énergie et
     ses conversions ». Repris aux mots du programme. */
  attendus: [
    "Exploiter la loi d'Ohm pour un résistor et la relation entre tension, intensité et résistance",
    "Exploiter une caractéristique tension-courant et identifier un comportement proportionnel",
    "Élaborer et mettre en œuvre un protocole de mesure d'une résistance électrique"
  ],

  note: "La loi d'Ohm, la caractéristique tension-courant d'un résistor et la mesure de $R$ sont " +
        "au programme du cycle 4 : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Un prérequis n'est pas déclarable dans le tableau, et il compte.</strong> Ce " +
        "chapitre suppose acquis « L'intensité et la tension électrique », qui est un chapitre de " +
        "<strong>quatrième</strong> : la colonne « S'appuie sur » de la progression affichera donc " +
        "un tiret, faute de pouvoir viser un chapitre d'un autre niveau. Si la classe a perdu " +
        "l'usage de l'ampèremètre et du voltmètre, le reprendre <strong>avant</strong> d'entrer " +
        "dans la loi d'Ohm : le chapitre ne le refait pas.<br/><br/>" +
        "Deux limites assumées. Les résistors sont toujours pris " +
        "<strong>seuls</strong> : aucune association en série ou en dérivation, ce qui est conforme " +
        "au programme mais laisse de côté la question « que vaut la résistance de l'ensemble ? » " +
        "que les élèves posent souvent. Et les valeurs tirées par le générateur peuvent donner " +
        "des tensions élevées — jusqu'à $491$ V pour un résistor de $330\\ \\Omega$ parcouru par " +
        "$1{,}49$ A. Mathématiquement correct, mais physiquement peu réaliste pour un montage de " +
        "collège : l'occasion d'un mot sur les ordres de grandeur réels, et surtout de ne pas " +
        "laisser croire qu'on manipule de telles tensions en salle de sciences.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     Les erreurs sont des CONFUSIONS DE GRANDEURS, des ERREURS D'UNITÉ et des
     échecs de `réaliser` — pas des erreurs de calcul. Le calcul du chapitre
     est une multiplication ou une division ; ce n'est jamais là que l'élève
     de troisième échoue. */
  erreurs: [
    {
      titre: "Inverser la loi d'Ohm",
      eleve: "L'élève écrit $I = R \\times U$, ou cherche $R$ en calculant $R = I \\div U$ : pour " +
             "$U = 12$ V et $I = 0{,}024$ A, il annonce $R = 0{,}002\\ \\Omega$ au lieu de " +
             "$500\\ \\Omega$.",
      cause: "Les trois lettres sont mémorisées comme un triangle de formules interchangeables, sans " +
             "que l'une d'elles soit la définition. L'élève reconstruit la relation de mémoire au " +
             "moment du calcul, et une chance sur deux le place du mauvais côté de la division. " +
             "Rien dans le résultat ne l'alerte, parce qu'il ne sait pas encore ce qu'est une " +
             "résistance « normale ».",
      remede: "Faire de la loi une <strong>phrase</strong> avant d'en faire une formule : « la " +
              "tension est le produit de la résistance par l'intensité ». Une phrase ne s'inverse " +
              "pas au hasard, contrairement à un triangle mnémotechnique.<br/><br/>" +
              "Puis imposer le <strong>contrôle par les unités</strong>, qui tranche à lui seul : " +
              "des ohms multipliés par des ampères donnent des volts. Si l'élève écrit " +
              "$I = R \\times U$, il obtient des ohms-volts, qui ne sont l'unité de rien. C'est la " +
              "vérification la plus rapide du chapitre et elle ne demande aucune mémoire.<br/><br/>" +
              "Ajouter enfin un repère d'ordre de grandeur : les résistors d'une boîte de collège " +
              "vont de la dizaine à quelques centaines d'ohms. Une réponse en millièmes d'ohm ou en " +
              "mégohms est fausse avant d'être vérifiée.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 3) : l'exercice 1 donne $R = 47\ \Omega$ et
         $I = 1{,}32$ A et demande $U$. C'est le sens DIRECT de la loi
         ($U = R \times I$), donc le tirage où l'inversion se voit le mieux :
         un élève qui divise trouve $35{,}6$, un nombre plausible, mais que le
         contrôle d'unités (ohms divisés par ampères) refuse immédiatement. Le
         nouveau schéma de cet exercice porte le montage de mesure, avec R
         annoté, ce qui rappelle quelle grandeur est donnée. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Lire la pente comme une valeur du graphique",
      eleve: "Sur une caractéristique où l'on mesure $U_1 = 6$ V pour $I_1 = 0{,}06$ A, l'élève " +
             "annonce $R = 6\\ \\Omega$ (il lit l'ordonnée), ou $R = 30$ en soustrayant " +
             "$36 - 6$ sans diviser par la variation d'intensité.",
      cause: "Le coefficient directeur est traité comme un point du graphique, alors que c'est un " +
             "<strong>rapport de deux variations</strong>. La difficulté est mathématique autant " +
             "que physique : la pente d'une droite est un objet de troisième encore neuf, et le " +
             "graphique porte des nombres lisibles qui invitent à la lecture directe.",
      remede: "Toujours faire tracer le <strong>triangle</strong> entre les deux points de mesure, " +
              "et l'annoter : la base est $\\Delta I$, la hauteur est $\\Delta U$, et " +
              "$R = \\Delta U / \\Delta I$. Un triangle dessiné empêche de confondre une ordonnée " +
              "avec un rapport.<br/><br/>" +
              "Utiliser ensuite la propriété que la droite passe par l'<strong>origine</strong>, ce " +
              "qui est le fait du chapitre : on peut donc prendre $\\Delta U = U$ et " +
              "$\\Delta I = I$ pour <strong>n'importe quel</strong> point, et vérifier que le " +
              "rapport $U/I$ donne la même valeur sur les deux points mesurés. C'est exactement ce " +
              "que fait l'exemple du cours, qui calcule $5/0{,}1$ puis $10/0{,}2$ et trouve " +
              "$50\\ \\Omega$ les deux fois.<br/><br/>" +
              "Les nouveaux schémas d'exercice tracent ce triangle en pointillés sur les deux " +
              "points réellement tirés : l'élève n'a plus à l'imaginer, il a à le lire.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 2 donne
         $(I_1 = 0{,}06 ; U_1 = 6{,}00)$ et $(I_2 = 0{,}36 ; U_2 = 36{,}00)$.
         Le tirage est particulièrement parlant pour cette erreur : l'élève qui
         lit l'ordonnée annonce 6 ou 36, celui qui soustrait sans diviser
         annonce 30 — et la bonne réponse est 100. Les trois erreurs donnent
         trois nombres distincts, tous présents sur la figure, ce qui rend le
         diagnostic immédiat à la correction. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Brancher l'ampèremètre en dérivation",
      eleve: "Au moment de mesurer, l'élève place l'ampèremètre aux bornes du résistor, comme le " +
             "voltmètre : il court-circuite le dipôle, l'aiguille part en butée ou le fusible de " +
             "l'appareil fond.",
      cause: "Échec de <strong>réaliser</strong>. L'élève connaît souvent la règle et se trompe " +
             "quand même, parce que le geste précède le raisonnement : on câble d'abord, on " +
             "réfléchit après. La confusion est d'autant plus facile que les deux appareils sont " +
             "physiquement identiques sur beaucoup de multimètres — seule la position du sélecteur " +
             "et la borne utilisée changent.",
      remede: "Faire reposer la règle sur ce que l'appareil mesure, pas sur son nom. L'ampèremètre " +
              "mesure ce qui le <strong>traverse</strong> : on doit donc <strong>ouvrir</strong> le " +
              "circuit et l'insérer dans le fil. Le voltmètre mesure une différence " +
              "<strong>entre deux points</strong> : on le <strong>pose</strong> aux bornes, sans " +
              "rien ouvrir. « Pour l'ampèremètre, je coupe ; pour le voltmètre, je pose. »<br/><br/>" +
              "Expliquer aussi le <strong>pourquoi</strong>, qui rend la règle mémorable : un " +
              "ampèremètre a une résistance quasi nulle. Branché aux bornes d'un résistor, il offre " +
              "au courant un chemin sans résistance — c'est la définition d'un court-circuit. Un " +
              "élève qui a compris cela ne refait pas l'erreur, là où la règle seule s'oublie.<br/><br/>" +
              "Faire enfin annoncer le montage à voix haute, alimentation éteinte, avant toute " +
              "mise sous tension. Le schéma de cours du montage de mesure sert de référence : " +
              "l'ampèremètre y est dans la boucle, le voltmètre dans une dérivation aux bornes du " +
              "résistor, et les nouveaux schémas d'exercice reprennent la même disposition.",
      /* Volontairement SANS renvoi, et pour une raison de fond : les
         vingt-sept exercices tirés DONNENT tous les mesures (« un résistor de
         résistance R = 47 ohms est parcouru par un courant d'intensité
         I = 1,32 A »). Aucun ne demande de décider où brancher un appareil,
         parce qu'un exercice sur papier ne peut pas évaluer un geste. Pointer
         l'un d'eux enverrait l'enseignant vers une remédiation qui n'en est
         pas une. L'erreur se remédie sur la table, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Mesurer une résistance sans couper l'alimentation",
      eleve: "L'élève pose l'ohmmètre aux bornes d'un résistor encore alimenté, ou le laisse dans " +
             "le circuit monté : la valeur affichée est fausse, instable, et l'appareil peut être " +
             "endommagé.",
      cause: "L'ohmmètre est rangé mentalement avec les deux autres appareils de mesure — on " +
             "« mesure » avec les trois, donc on les utilise de la même façon. Or l'ampèremètre et " +
             "le voltmètre mesurent un circuit <strong>en fonctionnement</strong>, tandis que " +
             "l'ohmmètre envoie <strong>son propre</strong> courant : il ne peut travailler que sur " +
             "un composant isolé et hors tension. Rien dans le nom ne le signale.",
      remede: "Distinguer deux familles d'appareils, et les nommer comme telles : ceux qui " +
              "<strong>observent</strong> un circuit qui fonctionne (ampèremètre, voltmètre) et " +
              "celui qui <strong>interroge</strong> un composant isolé (ohmmètre). Deux familles, " +
              "deux usages, et la condition « hors tension, composant sorti du circuit » devient " +
              "une conséquence plutôt qu'une consigne à retenir.<br/><br/>" +
              "La définition D4 du cours l'énonce exactement ainsi — l'ohmmètre « mesure " +
              "directement $R$, mais uniquement hors tension, sur un composant isolé du " +
              "circuit » : la relire à voix haute au moment du TP, et non à l'avance, est ce qui " +
              "la rend opérante.<br/><br/>" +
              "Donner enfin l'alternative, qui est la vraie méthode du chapitre : quand on ne peut " +
              "pas isoler le résistor, on ne sort pas l'ohmmètre — on mesure $U$ et $I$ en " +
              "fonctionnement et on calcule $R = U/I$. C'est ce que font la moitié des exercices " +
              "du chapitre, et c'est pédagogiquement supérieur : la loi d'Ohm devient un " +
              "instrument de mesure, pas seulement une formule à appliquer.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 : aucun des
         vingt-sept exercices tirés ne met en scène un ohmmètre. Le générateur
         ne produit que deux moules — loi d'Ohm directe, et pente d'une
         caractéristique — tous deux sur des valeurs déjà mesurées. L'erreur
         appartient à la séance de travaux pratiques, et le remède y renvoie
         explicitement plutôt que de désigner un exercice qui ne la travaille
         pas. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     Q1 — choisir le protocole de mesure d'une résistance dans un circuit
          alimenté. RÉÉCRITE le 2026-09-16 : elle appliquait $U = RI$ dans le
          sens direct, ce que fait déjà la moitié des vingt-sept exercices du
          chapitre. Elle porte maintenant sur le troisième attendu officiel
          (« élaborer et mettre en œuvre un protocole de mesure ») et sur
          l'erreur 4 de cette fiche : « réaliser ».
     Q2 — « La loi d'Ohm pour un résistor s'écrit : … », choix multiple entre
          trois écritures dont deux ne correspondent à aucune loi. Il faut
          juger la validité d'une relation, pas l'appliquer : « valider ».
     Q3 — $U = 12$ V, $I = 0{,}024$ A, calculer $R$. Ici la loi doit être
          RÉÉCRITE dans l'autre sens avant d'être utilisée, ce qui est
          exactement l'erreur 1 de cette fiche : « analyser ».
     Q4 — le coefficient directeur de la caractéristique donne quoi ? Relier
          une propriété graphique à une grandeur physique : « analyser ».
     Q5 — où brancher le voltmètre ? La question porte sur le protocole de
          mesure, donc sur le geste : « réaliser ».

     « Réaliser » est donc évalué DEUX fois (Q1 et Q5), ce qui est cohérent
     avec un chapitre dont le troisième attendu est un protocole de mesure et
     qui porte deux erreurs de geste (erreurs 3 et 4 de cette fiche). Les deux
     questions ne peuvent l'évaluer que déclarativement — c'est la limite
     d'une évaluation écrite, et c'est pourquoi ces deux erreurs restent sans
     renvoi vers un exercice. « Communiquer » n'est pas mobilisé : aucune
     question ne demande de produire une explication rédigée. */
  competences: {
    evaluation: ["réaliser", "valider", "analyser", "analyser", "réaliser"]
  }
};
