/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-lois-circuits.prof.js
   Fiche professeur du chapitre « Les lois des circuits (série et dérivation) »
   (quatrième), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la quatrième physique-chimie (2026-09-16) : c'est sur
   lui qu'ont été calées les conventions reprises dans les cinq autres fiches
   du niveau, et c'est lui qui a servi à vérifier la chaîne complète jusqu'au
   PDF avant de dérouler le reste. Même méthode qu'en sixième, puis en
   quatrième maths.

   RÉFÉRENTIEL PHYSIQUE, et non maths : s'approprier, analyser, réaliser,
   valider, communiquer (REFERENTIELS.physique dans scripts/manuel/prof.js).
   `réaliser` couvre le geste expérimental — monter un circuit, placer un
   appareil de mesure — et c'est lui qui porte les erreurs les plus
   intéressantes du collège en électricité.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-lois-circuits"] = {

  /* Chapitres de CE NIVEAU sur lesquels celui-ci s'appuie, par numéro de
     chapitre du niveau (voir la longue note de `validerPrerequis`,
     scripts/manuel/prof.js : « ch. 4 » dans une fiche de 4e désigne le
     quatrième chapitre de la quatrième, pas celui du livre de cycle).

     ch. 4 (L'intensité et la tension électrique) est le seul prérequis, et il
     est indispensable : tout ce chapitre-ci consiste à comparer des intensités
     et des tensions entre elles. Un élève qui n'a pas encore rencontré
     l'ampèremètre et le voltmètre ne peut pas lire l'énoncé « l'ampèremètre
     placé près du générateur indique $I = 1{,}77$ A », et encore moins décider
     si cette valeur se conserve ou se partage.

     ch. 1 et ch. 2 (chimie) ne sont PAS retenus : aucun lien de dépendance.
     ch. 3 (La vitesse) ne l'est pas non plus — l'électricité de quatrième
     n'utilise ni la notion de mouvement ni la relation $v = d/t$. */
  prerequis: [4],

  /* Rang conseillé (2026-09-16) : rang 5. Le chapitre vient juste après
     l'intensité et la tension (rang 4), dont il est la suite immédiate : on
     définit les deux grandeurs, puis on regarde comment elles se répartissent
     dans un circuit. Les séparer dans l'année serait un contresens.

     Le LIVRE le place aussi en chapitre 5 : ici les deux ordres coïncident,
     parce que la progression naturelle de la physique de quatrième (chimie,
     puis mécanique, puis électricité, puis optique) est déjà celle du
     sommaire. Le signal « à ne pas prendre dans l'ordre du livre » ne se
     déclenche donc sur aucun chapitre de ce niveau, et c'est un fait sur la
     matière, pas un oubli des fiches. */
  rangConseille: 5,

  /* Attendus de fin d'année, programme du cycle 4 (2020), thème « L'énergie et
     ses conversions », partie « Réaliser des circuits électriques simples et
     exploiter les lois de l'électricité ». Repris aux mots du programme : ce
     sont eux qui deviennent la grille de suivi des notions du livre. */
  attendus: [
    "Réaliser des circuits électriques simples et exploiter les lois de l'électricité",
    "Exploiter les lois de l'intensité et de la tension dans un circuit en série et dans un circuit en dérivation",
    "Élaborer et mettre en œuvre un protocole de mesure d'une intensité et d'une tension"
  ],

  // Là où le chapitre déborde du programme de l'année, ou s'en tient
  // volontairement en retrait, on le dit à l'enseignant plutôt que de le lui
  // laisser découvrir en classe.
  note: "Les quatre lois du chapitre — unicité et additivité de l'intensité, unicité et " +
        "additivité de la tension — sont exactement au programme du cycle 4, et le chapitre " +
        "ne va pas au-delà.<br/><br/>" +
        "Deux limites sont assumées et méritent d'être connues. D'abord, tous les circuits " +
        "traités n'ont que <strong>deux</strong> dipôles ou <strong>deux</strong> branches : le " +
        "problème du chapitre généralise à quatre lampes, mais en supposant un partage " +
        "<strong>égal</strong>, ce qui n'est vrai que pour des dipôles identiques. Le dire à " +
        "l'oral évite d'installer l'idée fausse « la tension se divise toujours par le nombre " +
        "de lampes » — elle ne se partage également que si les lampes sont les mêmes, et c'est " +
        "la loi d'Ohm de troisième qui l'expliquera.<br/><br/>" +
        "Ensuite, la <strong>résistance</strong> n'apparaît pas, donc aucune question ne demande " +
        "pourquoi le partage est inégal. C'est cohérent avec le programme, qui réserve $U = RI$ " +
        "à la troisième : les exercices ne donnent jamais deux dipôles différents avec des " +
        "tensions à prévoir.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre.

     Les erreurs retenues sont des CONFUSIONS DE GRANDEURS et des échecs de
     `réaliser` ou de `valider`, pas des erreurs de calcul : l'arithmétique du
     chapitre est une addition ou une soustraction à une décimale. Un élève qui
     se trompe ici ne se trompe pas de calcul, il se trompe de loi. */
  erreurs: [
    {
      titre: "Appliquer la loi de l'autre montage",
      eleve: "Sur un circuit série où $U = 7$ V et $U_1 = 4{,}5$ V, l'élève écrit « $U_2 = 7$ V, " +
             "la tension est la même partout » — ou, sur un circuit en dérivation, additionne les " +
             "tensions au lieu des intensités.",
      cause: "Les quatre lois ont été mémorisées comme quatre formules à retenir, sans le couple " +
             "qui les gouverne : <strong>quelle grandeur</strong> et <strong>quelle structure</strong>. " +
             "L'élève retient « unicité » et « additivité », mais pas à quoi chacune s'applique, et " +
             "tire au hasard entre deux formules qui lui semblent aussi plausibles l'une que l'autre.",
      remede: "Ne jamais faire réciter une loi seule. Exiger systématiquement la phrase complète en " +
              "deux temps : « circuit <strong>série</strong>, donc l'<strong>intensité</strong> est " +
              "unique et la <strong>tension</strong> s'additionne ». Tant que la structure n'est pas " +
              "nommée à voix haute avant la loi, l'erreur reviendra.<br/><br/>" +
              "Le schéma du cours est construit exactement pour cela : les deux circuits y sont côte " +
              "à côte, et ce qui est unique à gauche devient additif à droite. Faire formuler le " +
              "contraste par l'élève, dans ses mots, coûte deux minutes et vaut mieux qu'un tableau " +
              "de quatre lignes recopié.<br/><br/>" +
              "Le nouveau schéma d'exercice aide aussi : chaque énoncé porte désormais le circuit " +
              "dessiné, avec ses nœuds marqués en dérivation et sa boucle unique en série. La " +
              "structure se lit alors sur la figure au lieu de se déduire du texte.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 4) : l'exercice 1 est un circuit SÉRIE
         ($U = 7$ V, $U_1 = 4{,}5$ V) et l'exercice 2 un circuit en DÉRIVATION
         ($I = 1{,}77$ A, $I_1 = 0{,}61$ A). Le générateur alterne strictement
         les deux montages, si bien que deux exercices consécutifs demandent
         deux lois différentes — c'est précisément le va-et-vient qui entraîne
         le choix de la loi, et non son application. On renvoie au 2, le
         premier qui force à CHANGER de loi après le 1. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que la tension « se partage » en dérivation",
      eleve: "Deux lampes en dérivation sous $6$ V : l'élève répond $3$ V par lampe, « puisqu'il y " +
             "en a deux ».",
      cause: "Analogie avec le partage d'une quantité, renforcée par le cas série vu juste avant, " +
             "où la tension se partage réellement. L'élève transporte le mot « partager » d'un " +
             "montage à l'autre sans voir que ce qui se partage en dérivation, c'est le " +
             "<strong>courant</strong>. La formulation « se partager » est d'ailleurs celle du " +
             "distracteur du quiz 2, et c'est délibéré.",
      remede: "Faire toucher le fil. Sur une maquette, deux lampes en dérivation sont reliées " +
              "<strong>chacune directement aux deux bornes du générateur</strong> : suivre le fil du " +
              "doigt, de la borne à la lampe, montre qu'il n'y a rien entre elles pour prélever une " +
              "part de tension. Chaque branche « voit » le générateur entier.<br/><br/>" +
              "L'argument décisif est domestique, et les élèves le connaissent : brancher une " +
              "seconde lampe chez soi ne fait pas passer les ampoules à $115$ V. Si la tension se " +
              "partageait, chaque appareil supplémentaire affaiblirait tous les autres — c'est " +
              "exactement ce qui n'arrive pas.<br/><br/>" +
              "Le quiz 2 du chapitre pose la question en ces termes et sa correction dit " +
              "explicitement que « la tension ne se partage pas comme le fait l'intensité en " +
              "dérivation » : le poser en classe avant tout exercice écrit est le moyen le plus " +
              "rapide d'attraper l'erreur.",
      /* Renvoi vers le QUIZ et non vers un exercice, en toute connaissance de
         cause. Aucun des douze exercices tirés ne demande la tension d'une
         branche en dérivation : le générateur ne produit que deux moules —
         additivité des tensions en série, additivité des intensités en
         dérivation. Un renvoi vers un exercice « de dérivation » enverrait
         l'enseignant vers un calcul d'intensité, qui ne travaille pas cette
         erreur. Le quiz 2, lui, la travaille exactement. */
      exercice: { type: "quiz", n: 2 }
    },
    {
      titre: "Placer l'ampèremètre en dérivation, le voltmètre en série",
      eleve: "Au moment de câbler, l'élève branche l'ampèremètre aux bornes de la lampe, comme il " +
             "vient de le faire avec le voltmètre, et le montage disjoncte ou le fusible de " +
             "l'appareil fond.",
      cause: "Échec de <strong>réaliser</strong>, et non d'analyse : l'élève sait souvent énoncer la " +
             "règle et se trompe pourtant en câblant. Les deux appareils se ressemblent, les deux " +
             "mots se ressemblent, et le geste est fait dans l'ordre inverse du raisonnement — on " +
             "branche d'abord, on vérifie ensuite.",
      remede: "Ancrer la règle sur ce que mesure l'appareil, non sur son nom. L'ampèremètre mesure " +
              "ce qui le <strong>traverse</strong> : il doit donc être <strong>dans</strong> le " +
              "circuit, inséré dans le fil, et l'on ouvre le circuit pour le poser. Le voltmètre " +
              "mesure une différence <strong>entre deux points</strong> : il se pose donc " +
              "<strong>à côté</strong>, aux bornes, sans rien ouvrir.<br/><br/>" +
              "D'où un geste à faire adopter : pour l'ampèremètre, on <strong>coupe</strong> ; pour " +
              "le voltmètre, on <strong>pose</strong>. Un élève qui n'a pas eu à débrancher un fil " +
              "n'est pas en train de mesurer une intensité.<br/><br/>" +
              "Avant toute séance de TP, faire annoncer à voix haute où va chaque appareil et " +
              "pourquoi, l'alimentation encore éteinte. C'est la seule remédiation qui protège le " +
              "matériel, et elle prend moins d'une minute.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les douze exercices du chapitre DONNENT tous les mesures
         (« l'ampèremètre indique $I = 1{,}77$ A »), aucun ne demande de
         décider où brancher l'appareil. L'erreur est un geste, elle se remédie
         sur la table et non sur une feuille — le remède le dit explicitement,
         comme le font déjà six remédiations de la sixième. */
      exercice: null
    },
    {
      titre: "Ne pas voir qu'un résultat est impossible",
      eleve: "Sur un circuit série où $U = 13$ V et $U_1 = 10{,}8$ V, l'élève additionne au lieu de " +
             "soustraire, annonce $U_2 = 23{,}8$ V et passe à la question suivante sans " +
             "s'interroger.",
      cause: "Échec de <strong>valider</strong>. Le calcul est traité comme une fin en soi : une " +
             "fois un nombre obtenu, la tâche est perçue comme terminée. Rien dans l'habitude de " +
             "l'élève ne déclenche la question « ce nombre est-il possible ? », alors qu'ici " +
             "l'impossibilité est flagrante — une seule lampe recevrait presque le double de ce que " +
             "fournit le générateur.",
      remede: "Installer un encadrement AVANT le calcul, et en deux mots : en série, chaque tension " +
              "partielle est forcément <strong>plus petite</strong> que celle du générateur, et " +
              "leur somme fait exactement celle du générateur. Un élève qui annonce $23{,}8$ V " +
              "sous $13$ V n'a pas besoin qu'on lui corrige son calcul : il a besoin qu'on lui " +
              "fasse relire les deux nombres côte à côte.<br/><br/>" +
              "Même encadrement en dérivation : chaque intensité de branche est plus petite que " +
              "l'intensité totale. La question « ma réponse est-elle plus petite que le total ? » " +
              "attrape l'erreur de signe dans les deux montages, et c'est la même question dans " +
              "les deux cas.<br/><br/>" +
              "Faire ensuite vérifier par report : réinjecter la valeur trouvée dans " +
              "$U_1 + U_2 = U$. La vérification coûte une addition et rend l'erreur visible par " +
              "l'élève lui-même, ce qui vaut mieux qu'une correction au tableau.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 7 est « une
         guirlande de décoration à deux lampes montées en série », $U = 13$ V
         et $U_1 = 10{,}8$ V. C'est le tirage où l'écart est le plus serré des
         six exercices série ($U_2 = 2{,}2$ V) : un élève qui additionne trouve
         $23{,}8$ V, presque le double de la tension du générateur, et
         l'absurdité est maximale. La figure du nouveau schéma y porte
         « $U_2 = ?$ » juste à côté de « $U = 13$ V », ce qui met les deux
         nombres à comparer dans le même regard. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question de l'évaluation, dans
     l'ordre des questions (s'approprier, analyser, réaliser, valider,
     communiquer). Autant de compétences que de questions, sinon `validerProf`
     refuse.

     L'évaluation du chapitre compte cinq questions :
     Q1 — circuit série, $U = 15$ V et $U_1 = 9$ V, calculer $U_2$. L'élève
          doit reconnaître la structure puis choisir la loi : c'est « analyser »
          (le calcul lui-même est une soustraction d'entiers).
     Q2 — « Dans un circuit série, l'intensité : … », choix multiple. Restituer
          une propriété du cours sur une situation donnée : « s'approprier ».
     Q3 — dérivation, $I = 1{,}2$ A et $I_1 = 0{,}7$ A, calculer $I_2$. Même
          geste qu'en Q1 mais sur l'autre montage et l'autre grandeur : c'est
          le va-et-vient qui est évalué, donc « analyser » de nouveau.
     Q4 — « la tension aux bornes de chaque branche est : … ». La question
          porte sur l'erreur 2 de cette fiche (le faux partage) et demande de
          juger une affirmation plausible : « valider ».
     Q5 — juger le raisonnement d'un élève qui étend l'unicité de l'intensité
          à la tension. RÉÉCRITE le 2026-09-16 : elle demandait la tension
          d'une lampe dans une guirlande série de cinq, soit le geste de Q1
          refait sur cinq dipôles au lieu de deux. Elle porte maintenant sur
          l'erreur 1 de cette fiche — la plus fréquente du chapitre — et
          demande de produire une explication : « communiquer ». Le partage
          égal reste dans l'énoncé, donc le calcul demeure nécessaire.

     Aucune question ne mobilise « réaliser » : l'évaluation est écrite, et le
     geste expérimental ne s'évalue pas sur copie. C'est un choix, pas un
     oubli — et c'est la raison pour laquelle l'erreur 3 de cette fiche n'a
     pas de renvoi. La grille imprimée le montrera : `réaliser` est la
     compétence non couverte de ce chapitre, ce qui est l'information utile
     pour un enseignant qui veut compléter par une évaluation pratique. Le
     chapitre 4 du niveau, lui, l'évalue deux fois. */
  competences: {
    evaluation: ["analyser", "s'approprier", "analyser", "valider", "communiquer"]
  }
};
