/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-vitesse.prof.js
   Fiche professeur du chapitre « La vitesse (distance, temps, mouvement) »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-4e-lois-circuits.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-vitesse"] = {

  /* Aucun prérequis de quatrième, et c'est un fait sur la matière : le
     chapitre ouvre la mécanique du niveau et ne consomme rien des deux
     chapitres de chimie qui le précèdent dans le livre.

     Son vrai prérequis est mathématique — la proportionnalité et le quotient,
     vus au cycle 3 puis consolidés en cinquième — et il ne se déclare pas ici,
     puisque `prerequis` ne vise que des chapitres du même niveau de la même
     matière. La note l'indique à l'enseignant, qui est souvent le seul à
     pouvoir constater que la division pose plus de problème que la physique. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 3, celui du livre. Le chapitre est
     autonome et peut se placer presque n'importe où dans l'année ; on le
     laisse après le bloc chimie (rangs 1 et 2) et avant le bloc électricité
     (rangs 4 et 5), ce qui alterne les domaines et évite quatre chapitres de
     calcul d'affilée.

     Une raison de ne PAS l'avancer : il vaut mieux que la division de
     décimaux ait été retravaillée en mathématiques avant d'arriver ici. */
  rangConseille: 3,

  // Attendus de fin d'année, cycle 4 (2020), thème « Mouvement et
  // interactions ». Aux mots du programme.
  attendus: [
    "Caractériser un mouvement par sa trajectoire et sa vitesse, relativement à un référentiel",
    "Calculer une vitesse moyenne à partir d'une distance et d'une durée",
    "Exploiter une représentation ou un enregistrement d'un mouvement pour identifier un mouvement uniforme"
  ],

  note: "Référentiel, trajectoire, vitesse moyenne et mouvement uniforme sont au programme du " +
        "cycle 4. Le chapitre s'y tient.<br/><br/>" +
        "<strong>La difficulté réelle est mathématique, pas physique.</strong> La formule " +
        "$v = d/t$ ne pose de problème à personne ; la division d'un entier par un décimal " +
        "($624 \\div 1{,}1$) en pose à beaucoup. Il est utile de savoir, avant la séance, si la " +
        "classe est à l'aise avec ce calcul : sinon le chapitre de physique se transforme en " +
        "séance de mathématiques, et l'élève conclut qu'il n'a pas compris la vitesse alors qu'il " +
        "n'a pas su diviser.<br/><br/>" +
        "<strong>Les conversions ne sont pas entraînées par les exercices.</strong> Le cours, le " +
        "quiz et l'évaluation traitent le facteur $3{,}6$ ; les vingt et un exercices tirés, eux, " +
        "restent toujours <strong>dans une seule unité</strong> — chaque contexte fixe ses unités " +
        "(un piéton en m/s, un TGV en km/h) et l'énoncé ne demande jamais de passer de l'une à " +
        "l'autre. La conversion doit donc être entraînée hors du livre, alors qu'elle est évaluée " +
        "par la question 3.<br/><br/>" +
        "Deux valeurs tirées méritent un mot : le générateur peut proposer un avion à " +
        "$867{,}7$ km/h (plausible) mais aussi un TGV à $567$ km/h (record du monde, pas vitesse " +
        "commerciale). L'occasion d'un contrôle de vraisemblance, qui est justement l'erreur 4 de " +
        "cette fiche.",

  erreurs: [
    {
      titre: "Diviser la durée par la distance",
      eleve: "Pour $289$ m parcourus en $26$ s, l'élève écrit $26 \\div 289 \\approx 0{,}09$ et " +
             "annonce une vitesse de $0{,}09$ m/s pour un piéton.",
      cause: "La formule est reconstruite de mémoire au moment du calcul, et l'ordre des deux " +
             "nombres est choisi au hasard — souvent dans l'ordre où ils apparaissent dans " +
             "l'énoncé, ou du plus petit vers le plus grand par réflexe scolaire. L'élève n'a pas " +
             "de prise sur le sens du quotient, donc rien ne l'oriente.",
      remede: "Faire dire la vitesse en français avant de la calculer : « combien de mètres " +
              "<strong>par</strong> seconde ? ». Le mot « par » donne l'ordre de la division sans " +
              "qu'on ait à retenir une formule — ce qu'on cherche est au numérateur, l'unité de " +
              "temps au dénominateur. L'unité elle-même porte l'information : « m/s » se lit " +
              "« mètres divisés par secondes ».<br/><br/>" +
              "Puis ancrer sur un cas où l'élève sait déjà la réponse : « je marche $10$ m en " +
              "$5$ s, quelle est ma vitesse ? ». Tout le monde répond $2$ m/s, personne ne répond " +
              "$0{,}5$. Faire ensuite remarquer <strong>quelle division</strong> a été faite " +
              "spontanément : c'est celle-là qu'il faut refaire avec des nombres " +
              "moins amicaux.<br/><br/>" +
              "Ajouter le contrôle d'ordre de grandeur, qui attrape l'erreur à coup sûr : un " +
              "piéton marche à environ $1$ à $2$ m/s. Une réponse de $0{,}09$ m/s décrit quelqu'un " +
              "qui met plus de dix secondes à faire un mètre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 2) : l'exercice 6 est « pour un piéton qui se
         promène, on mesure une distance parcourue d = 289 m en une durée
         t = 26 s ; calcule la vitesse moyenne ». Le contexte est le mieux
         choisi pour cette erreur : chacun sait à quelle vitesse marche un
         piéton, donc l'inversion (0,09 m/s) est immédiatement absurde, là où
         la même inversion sur un TGV donnerait un nombre dont l'élève n'a
         aucune intuition. La nouvelle figure porte d au-dessus de t, dans
         l'ordre de la fraction. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Mélanger les unités de temps sans convertir",
      eleve: "Pour $30$ km parcourus en $45$ min, l'élève écrit $30 \\div 45 \\approx 0{,}67$ et " +
             "annonce « $0{,}67$ km/h ».",
      cause: "L'élève applique la formule correctement — le quotient est dans le bon sens — mais " +
             "sur des grandeurs qui ne vont pas ensemble. L'unité du résultat est écrite par " +
             "habitude (« une vitesse, c'est en km/h ») et non déduite du calcul : rien ne " +
             "signale que $30/45$ est en kilomètres par minute.",
      remede: "Exiger que l'unité soit <strong>écrite au fil du calcul</strong>, pas ajoutée à la " +
              "fin. Un élève qui écrit « $\\dfrac{30\\ \\text{km}}{45\\ \\text{min}}$ » voit " +
              "qu'il obtient des km/min, et voit donc qu'il n'a pas répondu à la question posée. " +
              "L'unité cesse d'être une décoration pour devenir un résultat.<br/><br/>" +
              "Installer ensuite le réflexe de conversion <strong>en premier</strong>, avant tout " +
              "calcul : on convertit les durées en heures si la vitesse est demandée en km/h " +
              "($45$ min $= 0{,}75$ h), et le calcul devient $30 \\div 0{,}75 = 40$ km/h. Faire " +
              "vérifier le résultat par le bon sens — $40$ km/h pour une voiture en ville est " +
              "plausible, $0{,}67$ ne l'est pas.<br/><br/>" +
              "Attention au piège de la conversion elle-même, qui est la deuxième moitié de " +
              "l'erreur : $45$ min ne font pas $0{,}45$ h. Faire passer par la fraction " +
              "($45/60$) plutôt que par une intuition décimale, parce que le système sexagésimal " +
              "du temps est la seule exception au décimal que rencontre l'élève.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les vingt et un exercices tirés sont tous COHÉRENTS en
         unités par construction — le générateur associe à chaque contexte son
         couple d'unités (m et s, ou km et h) et ne mélange jamais minutes et
         heures. Aucun exercice ne peut donc travailler cette erreur, qui est
         pourtant la plus fréquente en devoir. Les énoncés à unités mixtes
         sont à prévoir hors du livre. */
      exercice: null
    },
    {
      titre: "Croire qu'un objet est immobile « en soi »",
      eleve: "« Le passager assis dans le train ne bouge pas. » Ou, sur une question de " +
             "référentiel : « la route est immobile, c'est la voiture qui bouge », énoncé comme " +
             "une vérité absolue et non comme un choix.",
      cause: "L'expérience quotidienne se fait dans un seul référentiel, le sol, qui est si " +
             "constant qu'il devient invisible : l'élève ne le perçoit pas comme un choix mais " +
             "comme la réalité. Dire « le passager est immobile » sans préciser " +
             "« par rapport au train » ne lui apparaît donc pas comme une phrase incomplète.",
      remede: "Faire systématiquement compléter la phrase, et refuser l'énoncé nu : « immobile " +
              "<strong>par rapport à quoi</strong> ? ». Tant que le complément n'est pas donné, " +
              "l'affirmation n'a pas de valeur — c'est une exigence de langage avant d'être une " +
              "exigence de physique.<br/><br/>" +
              "Le double énoncé vrai est ce qui installe la notion : le passager est " +
              "<strong>immobile</strong> par rapport au train <strong>et</strong> en mouvement à " +
              "$300$ km/h par rapport au sol. Les deux sont vrais en même temps, et ce n'est pas " +
              "une contradiction : c'est la définition même du référentiel. Faire produire " +
              "d'autres couples par les élèves (un cycliste et sa roue, un passager d'ascenseur, " +
              "la Lune).<br/><br/>" +
              "Aller jusqu'au cas qui dérange, car c'est lui qui emporte l'adhésion : nous sommes " +
              "tous en mouvement à environ $100\\,000$ km/h par rapport au Soleil, assis sur " +
              "notre chaise. Aucun élève ne peut plus penser que l'immobilité est une propriété " +
              "de l'objet.",
      /* Volontairement SANS renvoi. Les vingt et un exercices tirés sont tous
         des calculs de vitesse ou de distance : le générateur ne produit que
         deux moules, et aucun ne pose de question sur le référentiel, qui est
         pourtant le premier attendu du chapitre. La notion vit dans le cours
         et dans l'évaluation (question 2) — et une remédiation ne renvoie
         jamais vers l'évaluation notée. Elle se travaille à l'oral, sur des
         exemples, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Ne pas vérifier la vraisemblance du résultat",
      eleve: "L'élève annonce sans réagir un cycliste à $250$ km/h, ou un TGV à $12$ km/h, parce " +
             "que le calcul l'a donné.",
      cause: "Échec de <strong>valider</strong>. Le calcul est traité comme l'objectif : un " +
             "résultat obtenu est un exercice terminé. Rien dans l'habitude de l'élève ne " +
             "déclenche la confrontation du nombre au monde réel, alors qu'il dispose de toutes " +
             "les connaissances nécessaires pour le faire.",
      remede: "Faire construire, et afficher, une <strong>échelle de référence</strong> que la " +
              "classe garde sous les yeux toute l'année : un piéton à $5$ km/h, un cycliste à " +
              "$20$ km/h, une voiture en ville à $50$ km/h, sur autoroute à $130$ km/h, un TGV à " +
              "$300$ km/h, un avion de ligne à $900$ km/h. Six repères suffisent à juger presque " +
              "tout résultat du chapitre.<br/><br/>" +
              "Exiger ensuite une <strong>phrase de conclusion</strong> à la fin de chaque " +
              "exercice, avec l'unité et un jugement : « le cycliste roule à $12{,}5$ km/h, ce " +
              "qui est plausible pour une piste cyclable ». La phrase force le retour au réel, ce " +
              "qu'un nombre souligné ne fait jamais.<br/><br/>" +
              "Ce contrôle a un bénéfice second qui vaut d'être signalé aux élèves : il attrape " +
              "l'erreur 1 (division inversée) et l'erreur 2 (unités mélangées) sans qu'on ait " +
              "besoin de les chercher, puisque les deux produisent des résultats absurdes. " +
              "Apprendre à douter d'un nombre est plus rentable que retenir trois règles.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 3 est « pour
         un avion de ligne en croisière, v = 867,7 km/h pendant t = 1,4 h ;
         calcule la distance parcourue » — réponse 1214,8 km. C'est le tirage
         le plus exigeant du chapitre en ordre de grandeur : un élève qui
         divise au lieu de multiplier trouve 619,8 km, plausible en apparence,
         et seul un contrôle explicite (un avion vole plus de 800 km en une
         heure, donc plus de 1200 km en 1,4 h) permet de trancher. L'exercice
         entraîne donc exactement le geste que le remède demande. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — $240$ km en $2$ h, vitesse moyenne. Application directe de la
          relation, données déjà cohérentes : « s'approprier ».
     Q2 — le mouvement est toujours décrit par rapport à … ? Restitution d'une
          notion du cours : « s'approprier ».
     Q3 — juger le raisonnement d'un élève qui divise $30$ km par $45$ min
          sans convertir. RÉÉCRITE le 2026-09-16 : elle demandait la
          conversion de $72$ km/h en m/s, soit un calcul déjà couvert par Q1
          et Q4. Elle demande maintenant de produire une explication, et porte
          sur l'erreur 2 de cette fiche, qu'aucune question n'évaluait :
          « communiquer ».
     Q4 — $18$ km/h pendant $0{,}5$ h, distance parcourue. La relation doit
          être réécrite dans l'autre sens ($d = v \times t$) : « analyser ».
     Q5 — points régulièrement espacés sur une chronophotographie : quel
          mouvement ? Il faut interpréter un enregistrement et conclure sur la
          nature du mouvement : « analyser ».

     Ni « réaliser » ni « valider » ne sont mobilisés par l'évaluation écrite.
     C'est un manque réel de ce chapitre : l'erreur 4 de cette fiche montre
     que « valider » est justement la compétence dont l'absence coûte le plus
     cher ici. Un enseignant qui veut la couvrir peut ajouter une question du
     type « ce résultat vous paraît-il plausible ? Justifiez », qui se corrige
     en trente secondes — la question 3 réécrite en donne le modèle, puisque
     son distracteur 4 se réfute précisément par l'ordre de grandeur. */
  competences: {
    evaluation: ["s'approprier", "s'approprier", "communiquer", "analyser", "analyser"]
  }
};
