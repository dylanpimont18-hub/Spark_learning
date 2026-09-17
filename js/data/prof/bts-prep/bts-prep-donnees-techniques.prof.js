/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-donnees-techniques.prof.js
   Fiche professeur du chapitre « Données Techniques & Catalogues » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   DERNIER CHAPITRE DU DOSSIER, et le plus « métier » des quatorze : il ne
   présente aucune notion mathématique nouvelle, il applique celles des treize
   autres à des documents professionnels. C'est ce qui commande son rang (14,
   en clôture) et sa liste de prérequis, qui a demandé un arbitrage exposé
   ci-dessous.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 13. 42 énoncés tirés, dont 12 numérotés et 30 en
   banque supplémentaire. SIX MOULES parmi les douze numérotés :
     - NPSH disponible, $h_{atm} - h_v - h_s - J_a$      : exercices 1 et 10 ;
     - surface d'un panneau photovoltaïque depuis $P$ et $\eta$ : exercices 2 et 11 ;
     - puissance combustible depuis $P_{utile}$ et $\eta$ : exercices 3 et 8 ;
     - courant absorbé d'un moteur triphasé              : exercices 4 et 9 ;
     - puissance absorbée d'une pompe, $\rho g Q H/\eta$ : exercices 5 et 7 ;
     - puissance frigorifique depuis COP et $P_{élec}$   : exercices 6 et 12.
   UNE ABSENCE MASSIVE, la plus importante de tout le recueil : le chapitre
   s'intitule « Données techniques & catalogues » et sa méthode décrit en huit
   étapes comment SÉLECTIONNER un équipement dans un abaque — or AUCUN des
   douze exercices ne comporte de fiche technique, de tableau ni d'abaque. Tous
   donnent les données en clair dans l'énoncé et demandent un calcul. Le
   chapitre enseigne les CALCULS qui accompagnent la lecture d'un catalogue,
   jamais la lecture elle-même. C'est dit dans la `note` et cela commande le
   `null` de l'erreur 4.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-donnees-techniques"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     L'ARBITRAGE A ÉTÉ DÉLICAT ICI, et il mérite d'être exposé. Ce chapitre
     étant le dernier et le plus applicatif, on pourrait lui attribuer une
     demi-douzaine de prérequis — il mobilise en effet des rendements
     (ch. 3), des conversions (ch. 9 et 11), des puissances de dix, de
     l'isolation littérale (ch. 1) et même une racine de trois. Déclarer six
     prérequis reviendrait pourtant à dire « traitez tout le livre avant » :
     ce serait vrai en pédagogie idéale, inutile en pratique, et cela
     rendrait le tableau de progression illisible. Deux prérequis ont donc été
     retenus, ceux SANS LESQUELS UN EXERCICE EST IMPOSSIBLE, pas ceux qui
     aident.

     ch. 3 (Proportionnalité & pourcentages) : RETENU. Huit des douze
     exercices reposent entièrement sur la notion de rendement — divisé pour
     remonter à l'absorbé (exercices 3, 5, 7, 8), multiplié pour descendre à
     l'utile (exercices 2, 6, 11, 12). Le rendement EST la définition D3 du
     chapitre 3, et le COP y est explicitement discuté dans le récapitulatif.
     Sans cette notion, le stagiaire ne sait pas dans quel sens diviser, ce
     qui est exactement l'erreur 1 ci-dessous.

     ch. 11 (Conversions d'unités techniques) : RETENU. Les exercices 5 et 7
     appliquent $P_{utile} = \rho g Q H$ avec un débit donné en m³/h : sans la
     conversion en m³/s, le résultat est faux d'un facteur $3600$, et rien
     dans l'énoncé ne le signale. C'est la conversion la plus meurtrière du
     chapitre, et elle vient du chapitre 11 (D2, débits).

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Calcul littéral) : les exercices 4 et 9 exigent d'isoler $I$
       dans $P = \sqrt 3 UI\cos\varphi\eta$, ce qui est une vraie manipulation
       littérale. C'est le candidat le plus défendable des écartés. Mais deux
       exercices sur douze ne justifient pas un troisième prérequis, et le
       chapitre 3 (retenu) ne peut lui-même s'aborder sans un minimum
       d'aisance calculatoire. Écarté au titre de l'économie du tableau,
       pas de l'absence de lien — un enseignant qui donne les exercices 4 et 9
       à un groupe qui n'a pas vu le chapitre 1 doit s'attendre à devoir
       accompagner l'isolation.
     - ch. 9 (Système International) et ch. 4 (Puissances) : le chapitre 11,
       retenu, les suppose déjà. Écartés par transitivité.
     - ch. 5 (Fonctions) et ch. 13 (Graphiques) : très défendables SI le
       chapitre faisait lire des abaques — mais aucun exercice n'en comporte
       (voir la `note`). Écartés faute de support réel. */
  prerequis: [3, 11],

  /* Rang conseillé (2026-09-17) : rang 14, celui du livre — et le dernier.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 14 est le seul défendable, et pour une fois le raisonnement ne
     tient pas qu'aux prérequis déclarés (3 et 11, tous deux inférieurs) : ce
     chapitre n'apporte AUCUNE notion mathématique nouvelle. Il applique
     celles des treize autres à des documents professionnels. Le placer
     ailleurs qu'en clôture priverait les stagiaires de la moitié des outils
     qu'il mobilise. C'est aussi le chapitre qui donne rétrospectivement leur
     sens aux treize précédents : un groupe qui le traite en dernier comprend
     enfin pourquoi il a converti des m³/h en m³/s pendant douze séances. Le
     livre le range aussi en chapitre 14 : la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 14,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Exploiter un rendement, un COP ou une efficacité de fiche technique pour passer d'une puissance à une autre",
    "Calculer une puissance absorbée, un courant de ligne ou une surface à partir des caractéristiques nominales d'un équipement",
    "Vérifier une condition de fonctionnement chiffrée, telle que le NPSH disponible d'une installation de pompage"
  ],

  note: "Fiches techniques, abaques de sélection, paramètres nominaux, NPSH, indices de " +
        "protection : le chapitre clôt le recueil en appliquant tout ce qui précède aux documents " +
        "que le technicien a réellement entre les mains — catalogues de pompes, de groupes froids, " +
        "de disjoncteurs, de panneaux photovoltaïques.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier — mais ce chapitre-ci est vraiment le " +
        "dernier.</strong> Dans une remise à niveau, on pioche : l'ordre des quatorze chapitres " +
        "décrit des <strong>dépendances techniques</strong>, pas un déroulé annuel. Celui-ci fait " +
        "exception, parce qu'il <strong>n'apporte aucune notion nouvelle</strong> : il applique " +
        "celles des treize autres. Deux prérequis sont déclarés — la " +
        "<strong>proportionnalité</strong> (chapitre 3), sans laquelle le rendement n'a pas de " +
        "sens, et les <strong>conversions</strong> (chapitre 11), sans lesquelles le débit en " +
        "m³/h donne une puissance fausse d'un facteur $3600$. Mais beaucoup d'autres liens " +
        "existent sans être déclarables sous peine d'illisibilité : les exercices 4 et 9 " +
        "demandent d'isoler un courant (<strong>chapitre 1</strong>), et tout le chapitre " +
        "suppose les puissances de dix. Traitez-le quand les autres sont faits : il leur donne " +
        "rétrospectivement leur sens.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — c'est l'écart le plus important " +
        "de tout le recueil, à connaître impérativement.</strong> Le chapitre s'intitule " +
        "« Données techniques & catalogues » et sa méthode décrit en huit étapes comment " +
        "sélectionner un équipement sur un abaque. Or <strong>aucun des douze exercices ne " +
        "comporte de fiche technique, de tableau ni d'abaque</strong> : tous donnent les données " +
        "en clair et demandent un calcul. Le chapitre entraîne donc les CALCULS qui accompagnent " +
        "la lecture d'un catalogue, jamais la lecture ni la sélection elles-mêmes. " +
        "<strong>Apportez de vrais documents</strong> — une courbe Grundfos, une fiche Daikin, " +
        "un catalogue Schneider : c'est indispensable, et c'est facile, ce sont des documents " +
        "publics. Les exercices deviennent alors les calculs de vérification qui suivent la " +
        "sélection, ce qui est exactement leur place dans le métier.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null` : la lecture d'une
     fiche technique ou d'un abaque n'est travaillée par aucun des 42 énoncés
     tirés, alors que c'est le titre du chapitre. Le remède le dit et donne
     une sortie concrète.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Sur ce chapitre s'ajoute une
     particularité précieuse : beaucoup d'entre eux CONNAISSENT ces documents
     par leur travail, parfois mieux que le formateur. Leurs erreurs portent
     alors sur le calcul, pas sur le métier — et le dire explicitement change
     le climat de la séance. */
  erreurs: [
    {
      titre: "Multiplier par le rendement là où il faut diviser",
      eleve: "Une chaudière de rendement $85\\ \\%$ fournit $200$ kW utiles ; l'élève annonce " +
             "$170$ kW de puissance combustible au lieu de $235{,}3$ kW. Il a multiplié au lieu " +
             "de diviser, et trouve une consommation INFÉRIEURE à ce qui est produit.",
      cause: "Le rendement est retenu comme « le nombre par lequel on multiplie », parce que c'est " +
             "le sens le plus fréquemment rencontré : de l'absorbé vers l'utile. Or la moitié des " +
             "situations de terrain vont dans l'autre sens — on connaît le besoin et on cherche " +
             "ce qu'il faudra fournir, ce qui est précisément la question du dimensionnement. " +
             "L'élève applique donc le sens qu'il a pratiqué. S'y ajoute une difficulté " +
             "arithmétique bien réelle chez ce public : diviser par un nombre inférieur à $1$ " +
             "AUGMENTE le résultat, ce qui contredit l'intuition de la division construite sur " +
             "des entiers depuis l'école primaire. Les deux difficultés se cumulent, et elles " +
             "n'ont rien à voir avec la compréhension du rendement lui-même — qu'un alternant " +
             "maîtrise souvent très bien.",
      remede: "Faire poser la <strong>question du sens en français</strong>, avant tout calcul et à " +
              "voix haute : « est-ce que je cherche ce qui SORT ou ce qui ENTRE ? ». Si l'on " +
              "cherche la sortie, on multiplie ; si l'on cherche l'entrée, on divise. Une phrase, " +
              "et le sens est décidé sans qu'il y ait rien à retenir.<br/><br/>" +
              "Installer ensuite un <strong>contrôle imparable</strong>, qui rejette l'erreur " +
              "sans aucun calcul : <strong>ce qui entre est TOUJOURS plus grand que ce qui " +
              "sort</strong>, puisque la différence est perdue en chaleur et en frottements. Une " +
              "puissance combustible de $170$ kW pour $200$ kW utiles décrirait une chaudière " +
              "qui produit plus qu'elle ne consomme. C'est impossible, et cela se voit avant de " +
              "vérifier quoi que ce soit.<br/><br/>" +
              "Signaler enfin la <strong>seule exception, qui est celle du COP</strong>, parce " +
              "qu'elle sème une confusion légitime et que le cours l'annonce : une pompe à " +
              "chaleur ou un groupe froid affiche un COP supérieur à $1$ — $4{,}5$ pour " +
              "l'exercice 6 — et produit donc plus de froid ou de chaud qu'elle ne consomme " +
              "d'électricité. Ce n'est pas un rendement : c'est un rapport entre deux grandeurs " +
              "différentes, la machine ne CRÉE pas d'énergie, elle en DÉPLACE. Le dire une fois " +
              "clairement évite qu'un élève croie avoir trouvé une contradiction dans le cours.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 13) :
         l'exercice 3 donne une chaudière biomasse de rendement 85 % fournissant
         200 kW utiles, et demande la puissance combustible, réponse
         235,3 kW. C'est le meilleur support du chapitre pour cette erreur,
         parce que la multiplication naïve donne 170 kW, une valeur
         INFÉRIEURE à la puissance utile — donc physiquement impossible, ce
         qui déclenche le contrôle du remède sans calcul. Préféré à
         l'exercice 8 (rendement 90 %, 150 kW utiles, réponse 166,7 kW) parce
         que sur le 8 l'erreur donne 135 kW : également inférieur à 150, donc
         également absurde, mais l'écart relatif y est plus faible (10 %
         contre 15 %) et surtout 166,7 est un nombre moins net que 235,3 pour
         une correction rapide. Les exercices 6 et 12 (COP) sont le contrepoint
         indispensable évoqué dans le remède : ils vont dans l'autre sens
         (multiplier) et sur un rapport supérieur à 1 — les donner juste après
         le 3 est la meilleure façon d'installer la distinction. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Calculer une puissance hydraulique avec un débit en mètres cubes par heure",
      eleve: "Pour $Q = 5$ m³/h et $H = 40$ m, l'élève applique $\\rho g Q H$ avec $Q = 5$ et " +
             "trouve $1{,}96$ MW au lieu de $545$ W de puissance utile. Il annonce une pompe de " +
             "circulation de deux mégawatts.",
      cause: "La formule $P_{utile} = \\rho g Q H$ ne porte aucune indication d'unité, et le débit " +
             "arrive de la fiche technique en mètres cubes par heure parce que c'est l'unité des " +
             "catalogues — celle que le technicien lit, écrit et prononce toute la journée. " +
             "Substituer directement est donc le geste naturel, et il est même " +
             "professionnellement cohérent : on utilise les données telles qu'elles sont " +
             "publiées. Ce qui manque est l'information que la formule, elle, est écrite en " +
             "unités SI et exige des m³/s. Le facteur d'erreur est de $3600$, c'est-à-dire assez " +
             "grand pour être visible — encore faut-il avoir un ordre de grandeur de référence " +
             "pour le voir, et beaucoup de stagiaires n'en ont pas encore pour la puissance " +
             "hydraulique.",
      remede: "Imposer la <strong>conversion en ligne séparée, avant la formule</strong> : " +
              "$Q = \\dfrac{5}{3600} = 1{,}39 \\times 10^{-3}$ m³/s. Une ligne écrite, jamais " +
              "faite de tête, jamais intégrée à la formule — c'est le seul endroit où la " +
              "conversion est visible et donc vérifiable.<br/><br/>" +
              "Ancrer ensuite un <strong>ordre de grandeur de métier</strong> que les stagiaires " +
              "n'ont pas encore et qui les protégera longtemps : une pompe de circulation de " +
              "chauffage consomme entre quelques dizaines et quelques milliers de watts, jamais " +
              "des mégawatts. Un mégawatt, c'est l'ordre de grandeur d'une station de pompage " +
              "d'eau potable pour une ville. L'écart est tel qu'il ne demande aucune expertise " +
              "pour être flairé.<br/><br/>" +
              "Faire enfin le <strong>rapprochement avec le rendement</strong>, qui est la " +
              "seconde moitié de ces exercices et où l'erreur 1 revient : une fois la puissance " +
              "utile obtenue, on DIVISE par le rendement pour avoir l'absorbée. Deux pièges dans " +
              "le même exercice — la conversion puis le sens du rendement — ce qui en fait le " +
              "meilleur exercice de synthèse du recueil, et celui à corriger le plus " +
              "soigneusement.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne
         Q = 5 m³/h, H = 40 m et eta = 60 %, et demande la puissance absorbée,
         réponse 908 W. C'est le meilleur support du chapitre — et sans doute
         du recueil — pour cette erreur, pour trois raisons. D'abord, la
         conversion n'est PAS donnée dans l'énoncé (contrairement à la
         question 1 de l'évaluation, qui l'explicite dans sa correction) :
         l'élève doit y penser seul. Ensuite, le facteur d'erreur (3600) est
         assez grand pour rendre le résultat spectaculairement absurde
         (1,96 MW pour une pompe de circulation de chauffage). Enfin,
         l'exercice cumule la conversion ET le rendement, donc il diagnostique
         les deux premières erreurs de cette fiche d'un coup — ce qui en fait
         l'exercice de synthèse à corriger en priorité. L'exercice 7
         (Q = 12 m³/h, H = 20 m, eta = 65 %, réponse 1006 W) est le même moule
         et fait un bon second support ; les valeurs y sont plus grandes, donc
         l'absurdité du résultat erroné (2,36 MW) est encore plus nette. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier le $\\sqrt{3}$, le $\\cos\\varphi$ ou le rendement dans le courant d'un moteur triphasé",
      eleve: "Pour un moteur de $5{,}5$ kW sous $400$ V, l'élève calcule $I = P/U = 13{,}75$ A au " +
             "lieu de $10{,}5$ A. Ou il oublie seulement le rendement et trouve $9{,}5$ A — un " +
             "écart assez faible pour passer inaperçu.",
      cause: "La formule $P = \\sqrt 3\\, U I \\cos\\varphi\\, \\eta$ empile QUATRE facteurs " +
             "multiplicatifs dont chacun a une origine différente : le $\\sqrt 3$ vient du " +
             "couplage triphasé, le $\\cos\\varphi$ du déphasage entre tension et courant, le " +
             "$\\eta$ des pertes dans la machine. Aucun n'est déductible des trois autres, et " +
             "aucun n'est visible sur un appareil — on ne « voit » ni la racine de trois ni le " +
             "facteur de puissance. La mémorisation est donc pure, et une mémoire pure perd ses " +
             "éléments un par un, en commençant par les moins ancrés. S'y ajoute que la formule " +
             "monophasée ($P = UI\\cos\\varphi$) est plus simple et parfois plus familière : " +
             "l'élève y revient sans s'en apercevoir. Ce n'est pas de la négligence, c'est une " +
             "charge cognitive que rien ne soulage.",
      remede: "Faire <strong>nommer chaque facteur avant de calculer</strong>, en une ligne qui " +
              "tient lieu de liste de vérification : « triphasé, donc $\\sqrt 3$ ; charge " +
              "inductive, donc $\\cos\\varphi$ ; machine réelle, donc $\\eta$ ». Trois questions " +
              "posées dans l'ordre, et aucun facteur ne peut manquer — c'est la seule méthode " +
              "qui remplace une mémoire par une procédure.<br/><br/>" +
              "Ancrer ensuite la <strong>règle du kilowatt et demi</strong>, qui est le repère de " +
              "métier le plus utile de tout le chapitre : sous $400$ V triphasé, un moteur " +
              "consomme environ <strong>deux ampères par kilowatt</strong>. Un moteur de " +
              "$5{,}5$ kW tire donc autour de $11$ A — $10{,}5$ convient, $13{,}75$ est trop " +
              "haut. Tous les électriciens l'utilisent, et il permet de vérifier n'importe quel " +
              "calcul en deux secondes.<br/><br/>" +
              "Rappeler enfin la <strong>conséquence de terrain</strong>, qui est celle du " +
              "calibrage : le courant calculé sert à choisir le disjoncteur moteur et la section " +
              "du câble. Un courant surestimé donne une protection trop lâche qui ne déclenchera " +
              "pas en cas de surcharge ; un courant sous-estimé donne un déclenchement " +
              "intempestif à chaque démarrage. Dans les deux cas, c'est l'installation qu'on " +
              "revient modifier.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne
         P = 5,5 kW, U = 400 V triphasé, cos(phi) = 0,84 et eta = 90 %, et
         demande le courant absorbé, réponse 10,5 A. C'est le meilleur support
         du chapitre pour cette erreur parce qu'il présente les QUATRE
         facteurs à la fois, donc les trois oublis possibles y produisent
         trois résultats distincts : sans le rendement 9,5 A, sans le
         cos(phi) 8,8 A, sans la racine de trois 18,2 A. La correction dit
         donc exactement quel facteur a été perdu. Surtout, la bonne réponse
         (10,5 A) tombe pile sur le repère des deux ampères par kilowatt cité
         dans le remède (5,5 x 2 = 11), ce qui rend ce contrôle immédiatement
         convaincant. Préféré à l'exercice 9 (2,2 kW, cos(phi) = 0,88,
         eta = 86 %, réponse 4,2 A) parce que sur le 9 les écarts entre les
         variantes fausses sont plus resserrés (3,6 / 3,7 / 7,2 A) et que le
         repère métier y est moins net. L'exercice 9 fait un bon second
         support. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Prendre les performances d'un catalogue pour les performances réelles de l'installation",
      eleve: "L'élève lit « COP $= 5{,}0$ » sur une fiche Daikin et dimensionne son installation " +
             "dessus, sans voir la mention des conditions de référence. Ou il choisit une pompe " +
             "dont la courbe passe pile sur le point demandé, sans marge.",
      cause: "Une valeur imprimée sur un document de constructeur a l'autorité d'un fait, et cette " +
             "confiance est raisonnable : le chiffre est vrai, il a été mesuré, il est normé. Ce " +
             "que l'élève ne sait pas, c'est qu'il a été mesuré dans des CONDITIONS " +
             "PARTICULIÈRES — l'EN 14511 pour un groupe froid, les conditions STC pour un " +
             "panneau photovoltaïque, une altitude et une température de référence pour un " +
             "compresseur — et que l'installation réelle ne s'y trouvera jamais tout à fait. " +
             "Cette culture de l'écart entre l'essai et le terrain ne s'acquiert que par la " +
             "pratique ou par un enseignement explicite ; elle n'a rien d'une évidence, et " +
             "personne ne l'apprend en mathématiques. C'est d'ailleurs le seul point de ce " +
             "recueil où les alternants en poste sont souvent plus avancés que les stagiaires " +
             "en formation initiale : ils ont déjà vu une machine ne pas tenir ses promesses.",
      remede: "Faire <strong>chercher les conditions de référence sur le document</strong>, " +
              "systématiquement, avant d'utiliser le moindre chiffre : elles sont toujours " +
              "écrites, souvent en petit, parfois en note de bas de page. Un COP sans ses " +
              "conditions n'est pas une donnée exploitable — c'est un argument commercial. Le " +
              "geste de les chercher est le premier réflexe professionnel du chapitre.<br/><br/>" +
              "Installer ensuite la <strong>marge de sécurité comme une habitude</strong>, pas " +
              "comme une option : $10$ à $20\\ \\%$ sur le débit, c'est l'étape 5 de la méthode " +
              "du cours. Choisir un équipement dont la courbe passe EXACTEMENT sur le point " +
              "demandé, c'est choisir un équipement qui sera insuffisant dès le premier " +
              "encrassement de filtre.<br/><br/>" +
              "Nommer enfin les <strong>écarts typiques par famille</strong>, parce que c'est " +
              "ce qui donne le sens de la marge : un groupe froid perd du COP quand il fait " +
              "chaud dehors (c'est-à-dire exactement quand on en a besoin) ; un panneau " +
              "photovoltaïque perd du rendement quand il chauffe ; un compresseur perd du débit " +
              "en altitude. La performance annoncée est un maximum de laboratoire, pas une " +
              "promesse.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille ce point</strong>, et c'est l'écart " +
              "majeur du chapitre : les douze exercices donnent des données en clair et " +
              "demandent un calcul, aucun ne présente de fiche technique, de note de bas de " +
              "page ni de choix d'équipement. Traitez-le sur de <strong>vrais documents</strong> " +
              "— ils sont publics et gratuits — en faisant chercher les conditions de référence " +
              "sur une fiche Daikin ou une courbe Grundfos. C'est la séance la plus utile du " +
              "chapitre, et elle ne demande aucune préparation mathématique.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés ne comporte de fiche technique, de tableau, d'abaque ni de
         choix d'équipement. Les six moules — NPSH (ex. 1, 10), surface PV
         (ex. 2, 11), puissance combustible (ex. 3, 8), courant moteur
         (ex. 4, 9), puissance absorbée pompe (ex. 5, 7), COP (ex. 6, 12) —
         donnent tous leurs données en clair dans l'énoncé et demandent un
         nombre. Aucun ne mentionne de conditions de référence, de marge de
         sécurité ni d'écart essai/terrain. La banque supplémentaire
         (30 énoncés, S1 à S6 relevés) reprend exactement les mêmes moules. Le
         cas des exercices 2 et 11 mérite d'être signalé : ils citent bien les
         « conditions STC », mais seulement pour donner G = 1000 W/m², c'est-
         à-dire comme une donnée de calcul et non comme une réserve à
         interroger — les utiliser pour cette erreur serait donc un renvoi
         trompeur. D'où `null`, assumé et documenté, avec une sortie concrète
         dans le remède : de vrais documents constructeur, qui sont publics.
         À noter que la question 3 de l'évaluation (pouvoir de coupure d'un
         disjoncteur) touche enfin à ce registre — mais c'est l'évaluation
         notée, donc un renvoi y est interdit par la règle du projet. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier (huit chapitres
     sur quatorze), mais pas une règle. Compter dans le dump avant d'écrire.

     RAPPEL : le référentiel est celui des MATHÉMATIQUES, même si ce chapitre
     est le plus « métier » du recueil et parle de NPSH, de COP et de pouvoir
     de coupure. « s'approprier », « analyser » et « valider » appartiennent au
     référentiel de physique et seraient REFUSÉS à la validation.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — puissance absorbée d'une pompe depuis $Q_n = 15$ m³/h, $H_n = 28$ m
          et $\eta_n = 65\ \%$. La correction annonce elle-même « deux étapes,
          dans cet ordre » : convertir le débit en m³/s, calculer la puissance
          hydraulique, puis diviser par le rendement. Rien de cela n'est donné
          par l'énoncé — ni la nécessité de la conversion, ni le sens du
          rendement — et chaque maillon conditionne le suivant. C'est une
          chaîne de déductions, pas une substitution. « raisonner ».
     Q2 — puissance frigorifique depuis EER $= 3{,}2$ et
          $P_{élec} = 3$ kW. Une multiplication sur deux nombres donnés ; la
          mention du COP dans la correction est un commentaire et non une
          demande. Exécution. « calculer ».
     Q3 — que signifie $I_{cu} = 50$ kA sur une fiche de disjoncteur, et
          comment le choisir ? Parmi quatre propositions. Aucun calcul : il
          faut identifier la bonne définition parmi quatre grandeurs
          électriques voisines (pouvoir de coupure, courant nominal, réglage
          thermique, courant de fuite) et énoncer la règle de choix. Juger la
          validité de quatre affirmations concurrentes. « raisonner ».
     Q4 — surface active d'un panneau photovoltaïque depuis $P_{\max}$,
          $\eta$ et $G$. La correction pose la relation
          $\eta = P_{\max}/(G \times S)$ puis isole $S$. Le rendement d'un
          panneau se définit ici comme un rapport entre une puissance produite
          et une puissance REÇUE par unité de surface — une relation que
          l'énoncé ne fournit pas et qu'il faut construire à partir de la
          situation décrite. La mise en relation est le travail, l'isolation
          suit. « modéliser ».

     RÉPARTITION DE CE CHAPITRE : raisonner 2, calculer 1, modéliser 1.
     « chercher », « représenter » et « communiquer » ne sont PAS mobilisés :
     aucune question ne demande de tâtonner, de lire un abaque ni de rédiger.
     L'absence de « représenter » est particulièrement notable dans un
     chapitre consacré aux catalogues et aux abaques — c'est le même constat
     que pour les exercices, et il est cohérent avec le corpus : sur les 130
     questions du BTS, aucune ne comporte de figure. */
  competences: {
    evaluation: ["raisonner", "calculer", "raisonner", "modéliser"]
  }
};
