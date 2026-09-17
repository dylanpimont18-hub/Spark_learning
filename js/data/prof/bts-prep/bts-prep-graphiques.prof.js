/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-graphiques.prof.js
   Fiche professeur du chapitre « Lecture et Exploitation de Graphiques »
   (remise à niveau BTS), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».
   C'est le chapitre du recueil où « représenter » serait le plus tentant :
   c'est aussi celui où il faut le plus se retenir. Voir la note d'étiquetage
   en bas de fiche : aucune question de l'évaluation ne fait TRACER ni LIRE un
   graphique, elles donnent toutes des couples de nombres.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 12. 42 énoncés tirés, dont 12 numérotés et 30 en
   banque supplémentaire. SIX MOULES parmi les douze numérotés :
     - interpolation sur une courbe de rendement : exercices 1 et 11 ;
     - extrapolation hors de la plage mesurée    : exercices 2 et 10 ;
     - interpolation sur une courbe de pompe     : exercices 3 et 12 ;
     - incertitude de lecture (±0,5 graduation)  : exercices 4 et 7 ;
     - pente entre deux points lus               : exercices 5 et 9 ;
     - exposant d'une loi puissance en log-log   : exercices 6 et 8.
   UNE REMARQUE STRUCTURANTE, à relier à celle de la fiche du chapitre 5 :
   comme au chapitre 5, AUCUN des douze exercices ne comporte de graphique
   imprimé. Tous décrivent une courbe en donnant deux points numériques, et
   demandent un calcul. Le chapitre enseigne donc les OPÉRATIONS de la lecture
   graphique (interpoler, extrapoler, estimer une pente, lire une incertitude)
   sans jamais faire lire un graphe réel. C'est dit dans la `note`.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-graphiques"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 5 (Fonctions & lecture graphique) : RETENU. Le lien est opératoire et
     non thématique. L'interpolation linéaire enseignée ici (D2) N'EST que
     l'équation d'une droite passant par deux points, et les exercices 5 et 9
     calculent littéralement la pente $\Delta y/\Delta x$ définie au
     chapitre 5 (D4). Plus décisif : l'exercice 2 extrapole en prolongeant une
     droite, ce qui suppose d'avoir compris qu'une droite est entièrement
     déterminée par deux points — la notion de fonction affine du chapitre 5.
     Un stagiaire qui n'a pas la pente ne fait ni l'interpolation, ni
     l'extrapolation, ni bien sûr les exercices 5 et 9 : soit huit des douze
     exercices.

     Candidats examinés et ÉCARTÉS :
     - ch. 7 (Logarithmes & exponentielles) : sérieux candidat pour les
       exercices 6 et 8, qui portent sur une loi puissance lue en log-log et
       dont la définition D5 énonce $\log y = n\log x + \log a$. MAIS le
       tirage rend le logarithme évitable : sur l'exercice 8, les points sont
       $(2, 2)$ et $(10, 10)$, donc $n = 1$ se voit sans aucun calcul ; sur le
       6, $(10, 500)$ et $(20, 4000)$ donnent $x$ doublé et $y$ multiplié par
       $8 = 2^3$, donc $n = 3$ par reconnaissance de puissance. L'élève peut
       résoudre les deux en raisonnant sur des rapports, sans jamais écrire un
       $\log$. Écarté — mais c'est le candidat le plus défendable, et un
       enseignant qui a traité le chapitre 7 donnera à ces deux exercices une
       tout autre profondeur. La `note` le signale.
     - ch. 2 (Équations) : aucun exercice ne pose d'équation. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [5],

  /* Rang conseillé (2026-09-17) : rang 13, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 13 respecte la contrainte déclarée (être supérieur à 5) avec une
     large marge, et il place ce chapitre après le chapitre 7 (Logarithmes,
     rang 7), ce qui n'est pas exigé mais rend les exercices 6 et 8 (échelle
     log-log) beaucoup plus intelligibles. Le livre le range aussi en
     chapitre 13 : les deux ordres coïncident, la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 13,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Estimer une valeur intermédiaire entre deux points d'une courbe par interpolation linéaire",
    "Calculer la pente d'une portion de courbe et l'exprimer avec son unité",
    "Distinguer une interpolation d'une extrapolation et signaler les limites de validité d'une estimation hors plage"
  ],

  note: "Interpolation linéaire, extrapolation, pente, incertitude de lecture, échelles " +
        "logarithmiques : le chapitre enseigne à tirer une valeur chiffrée d'une courbe de " +
        "catalogue — courbe de pompe, courbe de rendement, abaque de pertes de charge, diagramme " +
        "de Moody.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose les <strong>fonctions</strong> acquises " +
        "(chapitre 5) : l'interpolation linéaire n'est rien d'autre que l'équation d'une droite " +
        "passant par deux points, et huit des douze exercices en dépendent. Un lien non " +
        "déclarable mais utile : le <strong>chapitre 7</strong> (Logarithmes) éclaire les " +
        "exercices 6 et 8 sur les échelles log-log — le tirage permet de s'en passer, mais la " +
        "compréhension y gagne beaucoup.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — et c'est à savoir absolument " +
        "avant de préparer la séance.</strong> Comme au chapitre 5, <strong>aucun des douze " +
        "exercices numérotés ne comporte de graphique imprimé</strong> : tous décrivent une " +
        "courbe en donnant deux points sous forme numérique et demandent un calcul. Le chapitre " +
        "enseigne donc les OPÉRATIONS de la lecture graphique — interpoler, extrapoler, estimer " +
        "une pente — sans jamais faire lire un graphe réel. Or lire un abaque est une compétence " +
        "distincte : projeter, choisir la bonne courbe parmi plusieurs, apprécier une position " +
        "entre deux graduations. <strong>Apportez vos propres documents</strong> (une courbe " +
        "Grundfos, un diagramme de Moody, une caractéristique moteur) : c'est indispensable, et " +
        "les exercices du chapitre deviennent alors le calcul qui suit la lecture.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI, y compris celle qui porte sur la prudence de
     l'extrapolation — ce qui n'allait pas de soi pour une erreur de jugement,
     mais le moule 2/10 le permet parce qu'il fait explicitement sortir de la
     plage mesurée.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Sur ce chapitre, une nuance
     compte : beaucoup d'entre eux LISENT des abaques au travail et le font
     bien — leur difficulté n'est pas la lecture, c'est le formalisme qu'on
     pose dessus. Le champ `cause` en tient compte. */
  erreurs: [
    {
      titre: "Interpoler en faisant la moyenne des deux valeurs, quel que soit le point cherché",
      eleve: "Pour un rendement de $72\\ \\%$ à $40\\ \\%$ de charge et $88\\ \\%$ à $50\\ \\%$, " +
             "l'élève estime le rendement à $43\\ \\%$ de charge par la moyenne, soit " +
             "$80\\ \\%$, au lieu de $76{,}8\\ \\%$.",
      cause: "La moyenne est le seul outil d'estimation que ce public ait solidement installé, et " +
             "il est JUSTE — pour le point milieu exactement. L'élève l'applique donc à un cas " +
             "où elle fonctionnait, sans percevoir que la position du point cherché à " +
             "l'intérieur de l'intervalle change tout. La difficulté profonde est une notion de " +
             "PROPORTION dans un intervalle, qui n'est presque jamais nommée : à $43\\ \\%$ de " +
             "charge, on a parcouru trois dixièmes du chemin entre $40$ et $50$, donc il faut " +
             "récupérer trois dixièmes de l'écart de rendement. Ce raisonnement n'est difficile " +
             "pour personne une fois énoncé ; il est simplement absent de la formule, qui le " +
             "cache derrière une fraction.",
      remede: "Faire lire la <strong>formule comme une phrase</strong> plutôt que comme un modèle à " +
              "remplir : « je pars de la valeur de gauche, et j'ajoute la PART de l'écart qui " +
              "correspond à la part du chemin que j'ai parcourue ». La fraction " +
              "$\\dfrac{x - x_1}{x_2 - x_1}$ devient alors ce qu'elle est — une proportion entre " +
              "$0$ et $1$ — et non un rapport mystérieux.<br/><br/>" +
              "Faire <strong>calculer cette fraction seule, avant tout le reste</strong>, et la " +
              "commenter : ici $\\dfrac{43 - 40}{50 - 40} = 0{,}3$, donc « trois dixièmes du " +
              "chemin ». Une fois ce nombre posé, l'élève voit immédiatement que la moyenne " +
              "(qui suppose $0{,}5$) est hors sujet, et le reste du calcul suit tout seul.<br/><br/>" +
              "Installer enfin un <strong>encadrement de contrôle</strong> qui ne coûte rien : le " +
              "résultat d'une interpolation est toujours COMPRIS entre les deux valeurs connues, " +
              "et plus proche de celle dont l'abscisse est la plus proche. Ici, $43$ est près de " +
              "$40$, donc le rendement doit être près de $72\\ \\%$ — $76{,}8$ convient, " +
              "$80$ est trop haut. Sur une sélection de pompe ou de moteur, ce réflexe évite de " +
              "surestimer un rendement et donc de sous-dimensionner l'entraînement.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 12) :
         l'exercice 11 donne 72 % à 40 % de charge et 88 % à 50 %, et demande
         le rendement à 43 %, réponse 76,8 %. C'est LE tirage du chapitre qui
         sanctionne la moyenne : le point cherché est à 0,3 de l'intervalle,
         donc franchement décentré, et la moyenne (80 %) diffère nettement de
         la bonne réponse (76,8 %). Préféré à l'exercice 1 (78 % à 50 % et
         85 % à 70 %, rendement à 60 %) pour une raison qui disqualifie
         complètement le 1 comme diagnostic : 60 est EXACTEMENT le milieu de
         50 et 70, donc la moyenne donne 81,5 — c'est-à-dire la BONNE
         RÉPONSE. Un élève qui applique la moyenne valide sur l'exercice 1 et
         se croit compétent. L'ordre à donner est donc impératif : le 11
         d'abord, pour installer la proportion ; le 1 ensuite, éventuellement,
         en faisant remarquer que le cas du milieu est le cas particulier où
         la moyenne marche. Les exercices 3 et 12 (courbes de pompe, points à
         0,5 et 0,6 de l'intervalle) sont de bons compléments. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Extrapoler comme on interpole, sans signaler qu'on sort de la plage mesurée",
      eleve: "À partir de deux points mesurés à $x = 5$ et $x = 10$, l'élève annonce la valeur en " +
             "$x = 25$ sans un mot, avec la même confiance que pour une valeur intermédiaire. Le " +
             "calcul donne $105$ ; la réserve, elle, manque.",
      cause: "Le calcul est identique dans les deux cas — même droite, même formule — et rien dans " +
             "l'opération ne signale qu'on a franchi une frontière. C'est une différence de " +
             "STATUT, pas de technique : à l'intérieur de la plage, on estime entre des mesures " +
             "qui encadrent ; à l'extérieur, on parie que la tendance se prolonge, ce que rien ne " +
             "garantit. Chez un adulte, cette distinction se heurte à une confiance légitime dans " +
             "les mathématiques : « le calcul est juste, donc le résultat est bon ». Il n'a pas " +
             "tort sur le calcul. Ce qui lui manque est une culture de l'incertitude, qui " +
             "s'enseigne rarement et qui est pourtant le cœur du métier de technicien — un " +
             "constructeur ne garantit ses courbes que dans une plage, et c'est écrit sur ses " +
             "catalogues.",
      remede: "Faire <strong>écrire la plage de validité à côté du résultat</strong>, toujours, " +
              "comme une partie de la réponse et non comme un commentaire : « $105$, extrapolé " +
              "au-delà de la plage mesurée $[5\\ ;\\ 10]$ ». Un résultat extrapolé qui ne porte " +
              "pas cette mention est incomplet, même s'il est numériquement juste. C'est une " +
              "règle de rédaction, et c'est la seule qui fasse changer le comportement.<br/><br/>" +
              "Faire ensuite <strong>nommer ce qui pourrait casser la tendance</strong>, ce qui " +
              "transforme la prudence abstraite en réflexe technique : une pompe cavite au-delà " +
              "d'un certain débit, un moteur sature, un rendement passe par un maximum puis " +
              "REDESCEND. La linéarité n'est jamais une propriété du monde, seulement du modèle " +
              "local.<br/><br/>" +
              "Rappeler enfin la <strong>bonne pratique professionnelle</strong>, qui est celle " +
              "que la question 4 de l'évaluation attend : signaler explicitement " +
              "l'extrapolation, interroger le fabricant si c'est possible, et vérifier que le " +
              "point reste physiquement valide. Un technicien qui extrapole sans le dire engage " +
              "sa responsabilité sur une zone que personne n'a garantie.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne deux
         points de mesure (5, 25) et (10, 45) sur une courbe puissance/charge,
         et demande d'extrapoler en x = 25, réponse 105. Le tirage est le
         meilleur support possible pour cette erreur, pour une raison
         quantitative : le point demandé (25) est à TROIS FOIS la largeur de
         l'intervalle mesuré au-delà de son bord (l'intervalle fait 5 unités,
         on en sort de 15). L'extrapolation est donc massive, ce qui rend la
         réserve indispensable et non théorique. Préféré à l'exercice 10
         (points (5, 25) et (13, 49), extrapolation en x = 23, réponse 79)
         parce que sur le 10 la sortie de plage n'est que de 10 unités pour un
         intervalle de 8, soit un dépassement d'à peine plus d'une largeur :
         l'enjeu y paraît moindre. Sur le 2, il saute aux yeux. L'exercice 10
         fait un bon second support. À noter : les deux énoncés disent
         explicitement « hors de la plage mesurée », ce qui donne à
         l'enseignant l'occasion de demander POURQUOI l'énoncé prend la peine
         de le préciser. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Rendre une pente sans son unité, ou avec l'unité inversée",
      eleve: "Sur une courbe tension/courant, l'élève annonce « la pente vaut $3$ » sans préciser " +
             "$3$ V/A, c'est-à-dire $3\\ \\Omega$. Ou il écrit « $3$ A/V », ce qui désigne une " +
             "conductance et non une résistance.",
      cause: "La pente est enseignée comme un NOMBRE — le coefficient directeur — et son unité " +
             "passe pour un ornement facultatif, à ajouter si l'on y pense. C'est une lecture " +
             "purement mathématique, parfaitement cohérente avec ce qu'on a appris au lycée, où " +
             "les axes s'appelaient $x$ et $y$ et n'avaient pas d'unité. En technique, la pente " +
             "EST une grandeur physique à part entière : sur une caractéristique tension/courant, " +
             "c'est une résistance ; sur une courbe puissance/température, c'est une " +
             "déperdition ; sur une courbe de pompe, c'est une raideur de réseau. L'élève n'omet " +
             "donc pas une décoration : il ignore que la pente a un NOM dans son métier. " +
             "Personne ne le lui a dit.",
      remede: "Faire <strong>écrire l'unité en même temps que le calcul</strong>, dans la même " +
              "fraction : $\\dfrac{105 - 60\\ \\text{V}}{25 - 10\\ \\text{A}} = 3$ V/A. L'unité " +
              "de la pente est toujours celle de l'ordonnée DIVISÉE par celle de l'abscisse, et " +
              "l'écrire dans la fraction rend l'ordre impossible à inverser — c'est le même " +
              "remède que pour la pente du chapitre 5, et le rappeler économise une " +
              "explication.<br/><br/>" +
              "Faire ensuite <strong>nommer la grandeur obtenue</strong>, systématiquement : " +
              "des volts par ampère, ce sont des ohms, donc cette pente EST une résistance. " +
              "Cette étape transforme un exercice de mathématiques en lecture technique, et " +
              "c'est elle qui donne son sens au chapitre.<br/><br/>" +
              "Ancrer enfin la <strong>conséquence de terrain</strong> : inverser l'unité d'une " +
              "pente, c'est confondre une résistance et une conductance, ou une déperdition " +
              "(W/°C) avec son inverse. Sur une note de calcul thermique ou un relevé de " +
              "caractéristique, la valeur numérique seule n'est pas exploitable — c'est l'unité " +
              "qui dit ce qu'on a mesuré.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne deux
         points lus sur une courbe tension/courant, (10, 60) et (25, 105), et
         demande la pente « en V/A = Ω », réponse 3. Le tirage est le meilleur
         du chapitre pour cette erreur parce que l'énoncé POSE lui-même
         l'équivalence V/A = ohm : il offre donc à l'enseignant l'occasion de
         faire expliciter pourquoi, et de montrer que la pente d'une
         caractéristique EST la résistance. C'est exactement le geste du
         remède, et aucun autre exercice ne l'appelle aussi directement.
         Préféré à l'exercice 9 (puissance/température, points (20, 150) et
         (40, 250), réponse 5 W/°C) qui est un bon second support — la
         grandeur y est une déperdition thermique, donc un autre nom de métier
         à faire découvrir — mais dont l'unité composée est moins parlante
         qu'un ohm pour un public majoritairement issu de filières
         électrotechniques ou énergétiques. Les donner l'un après l'autre
         montre que la pente change de NOM selon les axes, ce qui est
         l'essentiel. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Lire une échelle logarithmique comme une échelle linéaire",
      eleve: "Sur un abaque log-log où une droite passe par $(10, 500)$ et $(20, 4000)$, l'élève " +
             "calcule une pente ordinaire $\\dfrac{4000 - 500}{20 - 10} = 350$ et l'annonce comme " +
             "l'exposant, au lieu de $n = 3$.",
      cause: "L'apparence d'un graphe log-log est celle d'un graphe ordinaire : des axes, des " +
             "graduations, une droite. Rien ne prévient que les graduations sont espacées en " +
             "proportion de $\\log x$ et non de $x$, sauf un détail qu'il faut savoir repérer — " +
             "les décades qui se répètent ($1$, $10$, $100$, $1000$) avec des intervalles " +
             "resserrés à l'intérieur de chacune. L'élève applique donc la procédure qu'il vient " +
             "d'apprendre, la pente $\\Delta y/\\Delta x$, à un support où elle n'a pas de sens : " +
             "sur une échelle logarithmique, la pente se calcule sur les LOGARITHMES. La faute " +
             "n'est pas d'avoir mal calculé, c'est d'avoir manqué une information sur la nature " +
             "du support — et cette information, le cours la donne dans sa méthode (« identifier " +
             "les axes, les unités et les ÉCHELLES »), à l'étape 1 que tout le monde saute.",
      remede: "Faire de la <strong>nature de l'échelle la première question</strong>, avant même " +
              "les unités : les graduations sont-elles régulières, ou reprennent-elles à chaque " +
              "puissance de dix ? Trente secondes de vérification qui décident de toute la " +
              "méthode à employer. C'est l'étape 1 de la méthode du cours, et elle n'est pas " +
              "facultative.<br/><br/>" +
              "Donner ensuite la <strong>règle de lecture des log-log</strong>, qui rend le " +
              "calcul immédiat : une droite y signifie une loi puissance $y = a x^n$, et " +
              "l'exposant se lit en RAPPORTS, pas en différences. Ici, $x$ est multiplié par " +
              "$2$ ($10 \\to 20$) et $y$ par $8$ ($500 \\to 4000$) ; or $8 = 2^3$, donc $n = 3$. " +
              "Aucun logarithme n'a été écrit, et le raisonnement tient en une ligne.<br/><br/>" +
              "Nommer enfin le <strong>repère de métier</strong> qui rend le résultat " +
              "vraisemblable : les lois puissance des abaques techniques ont des exposants " +
              "PETITS — $1$, $2$, $3$, parfois $1{,}8$ ou $2{,}5$. Une perte de charge varie en " +
              "gros comme le carré du débit, une puissance dissipée comme le carré du courant. " +
              "Un exposant de $350$ n'a aucun sens physique, et cela suffit à rejeter la " +
              "réponse avant toute vérification.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 donne un
         abaque log-log (puissance dissipée en fonction du courant) passant
         par (10, 500) et (20, 4000), et demande l'exposant n, réponse 3. Le
         tirage est le meilleur du chapitre pour cette erreur, et de loin :
         d'abord parce que le rapport des abscisses est 2 et celui des
         ordonnées 8, soit exactement 2³ — le raisonnement par rapports du
         remède fonctionne sans calculatrice ; ensuite parce que la pente
         linéaire naïve donne 350, un nombre absurde comme exposant, ce qui
         déclenche le contrôle de vraisemblance. Préféré à l'exercice 8
         (points (2, 2) et (10, 10), réponse n = 1) pour une raison qui
         disqualifie le 8 comme diagnostic : sur des points où y = x, la pente
         linéaire vaut AUSSI 1, donc l'élève qui ignore l'échelle log trouve
         la bonne réponse et ne se corrige jamais. C'est le quatrième piège de
         ce type rencontré dans le recueil, après les exercices 12 du chap. 1,
         2 et 5 du chap. 5 : un tirage dont le résultat vaut 1 ne valide rien.
         L'exercice 8 est utilisable en entraînement, jamais en diagnostic. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier, mais pas une
     règle (la trigonométrie en a huit). Compter dans le dump avant d'écrire.

     AVERTISSEMENT D'ÉTIQUETAGE PROPRE À CE CHAPITRE. C'est ici que la
     tentation d'écrire « représenter » est la plus forte : le chapitre
     s'intitule « Lecture et exploitation de graphiques », et « représenter »
     couvre justement « produire ou lire un graphique ». Il faut résister
     pour trois des quatre questions : les Q1, Q3 et Q4 ne présentent aucune
     représentation, elles donnent des couples de nombres en clair et
     demandent un calcul ou un jugement. Les étiqueter « représenter » serait
     décrire le TITRE du chapitre au lieu de la tâche demandée — exactement
     ce que la règle d'étiquetage honnête interdit.
     Seule la Q2, réécrite le 2026-09-17, fait réellement LIRE une graduation
     logarithmique ; elle est donc la seule à porter « représenter », et elle
     le porte parce que la tâche a changé, pas parce que l'étiquette a été
     redéclarée sur un énoncé inchangé.

     Q1 — interpolation linéaire entre $(5\ ;\ 1{,}8)$ et $(9\ ;\ 2{,}6)$ pour
          $Q = 7$. La formule est celle du cours (D2), les points sont donnés,
          la correction déroule la substitution. Exécution d'une procédure
          connue. « calculer ».
     Q2 — RÉÉCRITE le 2026-09-17. Elle donnait deux points d'un abaque log-log
          et demandait $y$ en $x = 1000$ : une chaîne de calculs (pente par le
          rapport des logarithmes, puis application), c'est-à-dire le même
          type d'exécution chaînée que la Q1 (interpolation) et la Q3 (pente)
          du même devoir, toujours sur des couples fournis en clair. Aucun
          axe n'était lu.
          Elle demande maintenant de LIRE une graduation logarithmique : les
          graduations $10$ et $100$ sont à $60$ mm l'une de l'autre, où tombe
          le point situé à $30$ mm ? Il faut comprendre qu'une distance égale
          y représente un RAPPORT égal et non une différence, donc que le
          milieu vaut la moyenne géométrique $\sqrt{10 \times 100} \approx
          31{,}6$ et non $55$. Lire une représentation graduée, c'est bien
          « représenter ».
          Le calcul reste nécessaire pour trancher : il faut former
          $10\sqrt{10} \approx 31{,}6$ et vérifier la symétrie des rapports
          ($31{,}6/10 = 100/31{,}6 = 3{,}16$) que $55$ ne respecte pas.
          C'est la première question du chapitre à faire lire un axe, et elle
          porte sur l'erreur 4 de cette fiche — lire une échelle logarithmique
          comme une échelle linéaire.
     Q3 — pente d'une caractéristique courant/vitesse, de $(2, 1000)$ à
          $(8, 800)$. Application de $\Delta y/\Delta x$ sur deux points
          donnés, avec un résultat négatif qui ne demande aucune justification
          écrite. Exécution. « calculer ».
     Q4 — quelle précaution prendre en extrapolant une courbe de pompe au-delà
          du catalogue ? Parmi quatre propositions. Aucun calcul : il faut
          juger de la validité de quatre conduites professionnelles, dont
          l'une affirme qu'une extrapolation est aussi fiable qu'une
          interpolation. C'est un verdict à établir sur des affirmations
          concurrentes. « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 1, représenter 1.
     « chercher », « modéliser » et « communiquer » ne sont PAS mobilisés :
     aucune des quatre questions ne demande de tâtonner, de traduire une
     situation en relation, ni de rédiger une explication. C'est un constat
     sur les quatre énoncés.
     Le format reste contraignant : les questions du BTS sont toutes
     `numeric` ou `multiple-choice` et aucune ne comporte de figure. C'est
     pourquoi la Q2 fait lire une graduation DÉCRITE dans son énoncé plutôt
     qu'un axe dessiné — la tâche de lecture est réelle, le support est
     textuel. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "raisonner"]
  }
};
