/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-proportionnalite.prof.js
   Fiche professeur du chapitre « Proportionnalité & Pourcentages » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 2. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - rendements en série, à multiplier      : exercices 1 et 8 ;
     - masse de soluté depuis une concentration : exercices 2 et 10 ;
     - appliquer une réduction en %           : exercices 3 et 11 ;
     - variation en % entre deux valeurs      : exercices 4 et 12 ;
     - puissance utile depuis $\eta$ et $P_{abs}$ : exercices 5 et 7 ;
     - règle de trois sur une masse linéique  : exercices 6 et 9.
   Deux constats que cette liste impose. D'abord, la PROPORTIONNALITÉ INVERSE
   — dont la méthode du cours fait son exemple central (débit et temps de
   remplissage) — n'apparaît dans AUCUN des douze exercices numérotés : les six
   moules sont tous des proportionnalités directes ou des produits. Ensuite,
   les POURCENTAGES SUCCESSIFS, sujet du piège du cours, ne sont travaillés par
   aucun exercice non plus. Les deux absences sont dites dans la `note` et
   commandent le `null` de l'erreur 4.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-proportionnalite"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     AUCUN PRÉREQUIS, et c'est assumé. Les douze exercices numérotés se
     résolvent tous par une multiplication ou une division sur deux ou trois
     nombres donnés : $0{,}95 \times 0{,}8$, $25 \times 0{,}5$,
     $200 \times 0{,}9$, $(300-250)/250$. Aucun ne réclame d'isoler une lettre,
     de poser une équation ni de manipuler une puissance de dix. C'est, avec le
     chapitre 1, l'autre véritable porte d'entrée du recueil — et c'est
     précieux, parce que c'est souvent par celui-ci qu'on commence avec un
     groupe fragile.

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Calcul littéral) : tentant, puisque la règle de trois s'écrit
       $x_1 y_2 = x_2 y_1$ et qu'en tirer $y_2$ est formellement une isolation.
       Mais les énoncés tirés ne présentent jamais cette forme littérale : ils
       donnent trois nombres et demandent le quatrième, ce qui se fait de tête
       ou en une ligne. Le lien est conceptuel, pas opératoire. Écarté — c'est
       toutefois le candidat le plus défendable, et un enseignant qui a traité
       le chapitre 1 gagnera à montrer que la règle de trois n'en est qu'un
       cas particulier.
     - ch. 4 (Puissances) : aucun exercice numéroté ne contient de puissance de
       dix ni de préfixe SI. Écarté.
     Les autres chapitres n'ont aucun lien opératoire. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 3, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 3 est celui du livre, et comme ce chapitre ne dépend de rien, tout
     rang lui conviendrait techniquement. Le garder à 3 évite de créer un écart
     gratuit entre l'ordre du livre et l'ordre conseillé : la colonne « Chap. »
     de la progression ne portera pas le triangle d'alerte. En pratique, un
     enseignant peut parfaitement l'ouvrir en premier avec un groupe en grande
     difficulté — c'est le chapitre le moins intimidant du recueil. */
  rangConseille: 3,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Calculer une quatrième proportionnelle dans une situation technique par la règle de trois",
    "Exploiter un rendement pour passer d'une puissance absorbée à une puissance utile, et composer des rendements en série",
    "Appliquer une variation en pourcentage et calculer le taux de variation entre deux valeurs"
  ],

  note: "Proportionnalité directe et inverse, règle de trois, rendement, variation en pourcentage : " +
        "le chapitre rassemble les quatre outils de calcul les plus utilisés au quotidien en BTS, " +
        "dans leurs contextes d'emploi (rendement d'un moto-pompe, concentration d'un bain, " +
        "réduction d'un débit de ventilation, évolution d'une consommation).<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci est <strong>sans prérequis</strong> : tous ses " +
        "exercices se règlent par une multiplication ou une division sur des nombres donnés. " +
        "C'est, avec le chapitre 1, le plus accessible du recueil, et un bon point de départ avec " +
        "un groupe fragile. Notez un lien non déclarable : la règle de trois est un cas " +
        "particulier de l'isolation enseignée au <strong>chapitre 1</strong> — le montrer " +
        "renforce les deux, sans être nécessaire.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Deux absences importantes. D'abord, la <strong>proportionnalité " +
        "inverse</strong> : aucun des douze exercices numérotés ne la met en jeu, alors que la " +
        "méthode du cours en fait son exemple central (un débit plus grand remplit la cuve plus " +
        "vite) et que c'est l'erreur la plus coûteuse du chapitre. Ensuite, les " +
        "<strong>pourcentages successifs</strong> — une baisse de 20 % suivie d'une hausse de " +
        "20 % ne ramène pas au départ — qui font l'objet du piège du cours mais d'aucun exercice. " +
        "L'évaluation ne comble ni l'une ni l'autre. Si vous voulez les faire travailler, " +
        "composez vos propres énoncés : c'est peu de travail et le gain est réel.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null` : les pourcentages
     successifs ne sont travaillés par aucun des 42 énoncés tirés. Le remède
     le dit et donne une sortie.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Beaucoup ont par ailleurs une
     anxiété installée par un échec scolaire ancien — le champ `cause` explique
     donc toujours d'où vient la procédure fausse, jamais qu'elle serait de
     l'étourderie. */
  erreurs: [
    {
      titre: "Additionner les rendements au lieu de les multiplier",
      eleve: "Devant un moteur à $\\eta_1 = 0{,}95$ entraînant un réducteur à $\\eta_2 = 0{,}8$, " +
             "l'élève annonce $1{,}75$, ou corrige en faisant la moyenne et annonce $0{,}875$. La " +
             "bonne réponse est $0{,}76$.",
      cause: "Les rendements ressemblent à des pourcentages, et les pourcentages, dans la vie " +
             "courante, s'additionnent : une remise de 10 % puis une de 5 %, « ça fait 15 % ». " +
             "Cette intuition est fausse mais elle est partout, et elle a été renforcée pendant " +
             "des années. S'y ajoute une difficulté plus profonde : il faut comprendre que " +
             "$\\eta_2$ ne s'applique pas à la puissance de DÉPART mais à ce qui RESTE après le " +
             "premier étage. Cette idée de chaîne — chacun prélève sa part de ce qui lui arrive — " +
             "n'est jamais enseignée explicitement. Un stagiaire qui additionne ne se trompe pas " +
             "de calcul : il se trompe de modèle, et personne ne lui a montré le bon.",
      remede: "Faire <strong>suivre 100 unités le long de la chaîne</strong>, en nombres et à voix " +
              "haute — c'est ce qui convainc, et c'est immédiat : $100$ kW entrent, le moteur en " +
              "rend $95$, le réducteur en rend $80\\ \\%$, soit $76$ kW. Le rendement global " +
              "$0{,}76$ apparaît tout seul, et la multiplication n'a même plus besoin d'être " +
              "justifiée : elle a été vue.<br/><br/>" +
              "Installer ensuite un <strong>encadrement de contrôle</strong> qui rejette les deux " +
              "erreurs d'un coup : un rendement global est toujours <strong>INFÉRIEUR au plus " +
              "faible des rendements de la chaîne</strong>. Ici il doit être sous $0{,}8$. " +
              "$1{,}75$ est impossible (un rendement dépasserait 100 %), $0{,}875$ aussi " +
              "(supérieur à $0{,}8$). L'élève n'a même pas besoin de refaire le calcul pour " +
              "savoir qu'il s'est trompé.<br/><br/>" +
              "Nommer enfin la <strong>conséquence métier</strong>, qui parle aux alternants : " +
              "c'est en additionnant des rendements qu'on sous-dimensionne un moteur. Sur une " +
              "chaîne moteur + réducteur + pompe, trois étages à $0{,}9$ ne donnent pas $0{,}7$ " +
              "mais $0{,}73$ — et surtout, ajouter un quatrième étage coûte toujours plus qu'on " +
              "ne le croit. C'est exactement ce que le calcul multiplicatif rend visible.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 2) :
         l'exercice 1 donne eta1 = 0,95 et eta2 = 0,8, réponse 0,76. Le tirage
         est idéal pour cette erreur parce que les deux rendements sont très
         DISSEMBLABLES : la somme donne 1,75, c'est-à-dire un rendement
         supérieur à 1, physiquement impossible — l'encadrement du remède
         tranche sans aucun calcul. Sur l'exercice 8 (0,9 et 0,93, réponse
         0,837), la somme donne 1,83, tout aussi impossible, mais la MOYENNE
         (0,915) y est très proche du produit réel (0,837) : l'erreur par
         moyenne, qui est la plus fréquente chez les adultes, y est presque
         invisible à la correction. C'est ce qui départage les deux : sur le
         1, moyenne (0,875) et produit (0,76) sont nettement distincts.
         L'exercice 8 reste un bon second support. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre « diminuer de 20 % » et « le résultat vaut 20 % »",
      eleve: "Sur un ventilateur à $1000$ m³/h auquel on applique une réduction de $20\\ \\%$, " +
             "l'élève répond $200$ m³/h. Ou, sur une réduction de $10\\ \\%$ appliquée à " +
             "$200$ m³/h, il répond $20$ m³/h au lieu de $180$.",
      cause: "Le français est ici réellement ambigu, et le reprocher à l'élève serait injuste : " +
             "« réduire de 20 % » et « réduire à 20 % » ne diffèrent que par une préposition, " +
             "alors qu'ils désignent deux opérations sans rapport. Dans la langue du terrain, on " +
             "dit souvent « on descend à 20 % » pour un variateur de vitesse — donc les deux " +
             "usages coexistent dans le même atelier. Le cours signale la distinction dans son " +
             "récapitulatif, mais un adulte qui lit vite et qui a peur des mathématiques calcule " +
             "le pourcentage le plus simple, celui qu'il sait faire. Ce n'est pas un défaut " +
             "d'attention : c'est une ambiguïté linguistique réelle, à laquelle s'ajoute " +
             "l'anxiété.",
      remede: "Faire traduire l'énoncé en <strong>coefficient multiplicateur AVANT tout calcul</strong>, " +
              "systématiquement : « réduction de $20\\ \\%$ » devient « $\\times 0{,}8$ », " +
              "« augmentation de $20\\ \\%$ » devient « $\\times 1{,}2$ ». Un seul nombre écrit, " +
              "et l'ambiguïté disparaît — parce qu'un coefficient, lui, ne se lit que d'une " +
              "manière.<br/><br/>" +
              "Ancrer ensuite le <strong>contrôle du sens et de l'ampleur</strong>, en deux " +
              "questions posées avant de valider : est-ce que le résultat doit être plus petit ou " +
              "plus grand que le départ ? et de combien, à peu près ? Une réduction de $20\\ \\%$ " +
              "doit retirer un cinquième, pas quatre cinquièmes. $1000 \\to 200$, c'est une " +
              "division par cinq : l'écart avec « un cinquième en moins » saute aux yeux.<br/><br/>" +
              "Relier enfin à la <strong>conséquence de terrain</strong>, qui est immédiate en " +
              "génie climatique : un caisson de ventilation réglé à $200$ m³/h au lieu de $800$, " +
              "c'est un local qui n'est plus renouvelé et un taux de CO₂ qui monte. Les " +
              "alternants reconnaissent la situation : c'est exactement le genre de réglage qu'on " +
              "retrouve en mise en service et qu'on met des heures à diagnostiquer.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 11 donne un
         débit nominal de 1000 m³/h avec une réduction de 20 %, réponse
         800 m³/h. Choisi plutôt que l'exercice 3 (200 m³/h, réduction de
         10 %, réponse 180) pour deux raisons. D'abord, avec 20 % l'écart
         entre la bonne réponse (800) et l'erreur (200) est maximal — un
         facteur 4 immédiatement visible à la correction — alors que sur le 3
         la bonne réponse (180) et l'erreur (20) sont dans un rapport 9 mais
         sur des nombres plus petits, moins parlants. Ensuite et surtout, le
         départ à 1000 rend le calcul mental trivial, donc l'élève qui se
         trompe se trompe VRAIMENT sur le sens de l'énoncé et non sur
         l'arithmétique : le diagnostic est propre. L'exercice 3 est un bon
         second support pour vérifier que la correction a pris. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Diviser par la mauvaise valeur dans un taux de variation",
      eleve: "Une consommation passe de $250$ à $300$ kWh. L'élève calcule $50/300 \\approx 16{,}7\\ \\%$ " +
             "au lieu de $50/250 = 20\\ \\%$. Ou, plus simplement, il annonce « $+50$ kWh » sans " +
             "convertir en pourcentage.",
      cause: "La formule $\\dfrac{V_1 - V_0}{V_0}$ est facile à écrire et difficile à retenir dans " +
             "le bon sens, parce que rien dans son apparence ne dit POURQUOI c'est la valeur de " +
             "départ qui figure au dénominateur. Un adulte qui a perdu la justification retient " +
             "« on divise par l'un des deux » et prend celui qui vient. S'y ajoute un usage " +
             "courant qui brouille tout : dans la vie, on dit « il y a 300, dont 50 de plus " +
             "qu'avant », ce qui suggère spontanément de rapporter à 300. La confusion est " +
             "linguistique avant d'être mathématique, et un stagiaire qui la commet n'a pas été " +
             "distrait : il a appliqué le rapport qui lui semblait décrire la situation.",
      remede: "Donner la <strong>raison du dénominateur</strong>, une fois, clairement : un " +
              "pourcentage de variation répond à la question « combien pour cent DE CE QU'ON " +
              "AVAIT ? ». Le point de comparaison est donc forcément l'état de départ. Une fois " +
              "cette phrase posée, la formule se reconstruit sans être mémorisée.<br/><br/>" +
              "Faire vérifier ensuite par le <strong>chemin inverse</strong>, qui est le contrôle " +
              "le plus rapide : si la hausse est bien de $20\\ \\%$, alors " +
              "$250 \\times 1{,}2 = 300$. Cela tombe juste. Avec $16{,}7\\ \\%$, " +
              "$250 \\times 1{,}167 = 292$, ce qui ne tombe pas : l'erreur est trouvée en une " +
              "multiplication.<br/><br/>" +
              "Signaler enfin la <strong>conséquence de terrain</strong>, qui est celle des " +
              "rapports d'exploitation : un taux de variation calculé sur la mauvaise référence " +
              "sous-estime toujours une hausse et surestime toujours une baisse. Sur un suivi de " +
              "consommation énergétique — le contexte exact de l'exercice — cela revient à " +
              "annoncer une dérive de $17\\ \\%$ là où elle est de $20\\ \\%$, et à passer " +
              "sous le seuil d'alerte contractuel. La différence n'est pas académique.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne une
         consommation passant de 250 à 300 kWh, réponse 20 %. C'est le
         meilleur support du chapitre pour cette erreur parce que les deux
         calculs donnent deux nombres nettement distincts et tous deux
         plausibles : 20 % (correct, 50/250) et 16,7 % (faux, 50/300). Un
         élève ne peut pas trancher au flair ; il doit avoir compris la
         référence. L'exercice 12 (200 -> 260 pièces, réponse 30 %) est le
         même moule, mais l'erreur y donne 23,1 % — un nombre non rond qui
         alerte l'élève par son apparence plus que par son sens, donc un
         diagnostic moins net. Le 12 fait un bon second support. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire qu'une baisse puis une hausse du même taux ramènent au point de départ",
      eleve: "« Le débit a baissé de $20\\ \\%$ puis est remonté de $20\\ \\%$ : on est revenu au " +
             "nominal. » En réalité $0{,}8 \\times 1{,}2 = 0{,}96$ : il manque $4\\ \\%$. Sur " +
             "trois cycles, il manque $12\\ \\%$.",
      cause: "L'intuition repose sur une symétrie qui est vraie pour les ADDITIONS et fausse pour " +
             "les pourcentages : retirer $20$ puis ajouter $20$ ramène bien au départ, retirer " +
             "$20\\ \\%$ puis ajouter $20\\ \\%$ ne le ramène pas. La raison est simple une fois " +
             "dite — les deux pourcentages ne portent pas sur la même base, le second s'applique " +
             "à une valeur déjà diminuée — mais elle n'est presque jamais énoncée en classe. " +
             "Beaucoup d'adultes ont donc traversé toute leur scolarité avec cette croyance " +
             "intacte, et elle est confortée par le langage commercial qui la cultive " +
             "délibérément. Ce n'est ni de l'inattention ni de la naïveté : c'est une " +
             "généralisation raisonnable d'une règle vraie ailleurs.",
      remede: "Faire <strong>calculer les deux coefficients et les multiplier</strong>, une fois, " +
              "sur des nombres : $0{,}8 \\times 1{,}2 = 0{,}96$. Le résultat n'est pas $1$, " +
              "l'élève le constate lui-même, et aucune explication n'a été nécessaire. C'est " +
              "exactement la démarche du piège du cours, et c'est la seule qui emporte " +
              "l'adhésion.<br/><br/>" +
              "Généraliser ensuite en une phrase qui vaut pour toute la suite du BTS : " +
              "<strong>les variations en pourcentage se COMPOSENT par multiplication, jamais par " +
              "addition</strong> — comme les rendements de l'erreur 1, dont c'est exactement le " +
              "même mécanisme. Faire le rapprochement entre les deux erreurs du chapitre " +
              "économise une explication et installe un principe unique.<br/><br/>" +
              "Montrer enfin la <strong>conséquence de terrain</strong>, qui frappe : sur un " +
              "contrat d'exploitation où l'on négocie chaque année une remise de $5\\ \\%$ " +
              "compensée par une indexation de $5\\ \\%$, on perd $0{,}25\\ \\%$ par an — " +
              "invisible sur un exercice, très visible sur dix ans. C'est aussi ce qui explique " +
              "qu'un rendement dégradé de quelques pour cent à chaque étage d'une installation " +
              "finisse par coûter beaucoup.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille les pourcentages successifs</strong> : " +
              "les six moules tirés appliquent une variation UNIQUE, ou calculent un taux entre " +
              "deux valeurs. Traitez ce point sur le <strong>piège du cours</strong>, qui est " +
              "bâti exactement dessus, ou composez deux énoncés à la main — c'est cinq minutes de " +
              "préparation pour l'erreur la plus durablement utile du chapitre.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés n'enchaîne deux variations. Les moules 3/11 appliquent une
         réduction unique (200 -> 180, 1000 -> 800) et les moules 4/12
         calculent un taux entre deux valeurs (250 -> 300, 200 -> 260). La
         banque supplémentaire ne comble pas : S2 est une réduction unique
         (100 kW, -12 %) et S3 un taux unique (100 -> 110 L/min). Les
         rendements en série (exercices 1 et 8) sont le mécanisme MULTIPLICATIF
         le plus proche, mais ils ne sont pas des pourcentages successifs : ils
         ne montrent pas l'asymétrie baisse/hausse, qui est tout l'objet de
         cette erreur. Un renvoi vers eux serait donc trompeur. D'où `null`,
         assumé et documenté, avec la sortie donnée dans le remède. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     CINQ questions ici — ce n'est PAS la règle du dossier (huit chapitres sur
     quatorze n'en ont que quatre, la trigonométrie en a huit). Compter.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — puissance utile depuis $P_{abs} = 5$ kW et $\eta = 0{,}85$. Une
          multiplication sur deux nombres donnés, la relation étant celle du
          cours. Exécution. « calculer ».
     Q2 — variation en % d'une vitesse de convoyeur, de $0{,}8$ à $1{,}0$ m/s.
          Application directe de la formule $\frac{V_1 - V_0}{V_0}$, les deux
          valeurs étant fournies. « calculer ».
     Q3 — rendement global de deux étages, parmi quatre propositions dont
          $0{,}900$, $0{,}810$, $0{,}8096$ et $1{,}80$. Le calcul lui-même est
          une multiplication, mais le travail réel est de trancher entre quatre
          modèles concurrents — somme, moyenne, produit — et de juger lequel
          est valide. L'énoncé le souligne (« Les rendements en série se
          multiplient. »), et la question porte sur la validité, pas sur
          l'arithmétique. « raisonner ».
     Q4 — chute de tension pour 25 m sachant qu'elle vaut $0{,}6$ V pour 3 m.
          Il faut d'abord RECONNAÎTRE que la chute de tension est
          proportionnelle à la longueur — l'énoncé ne le dit pas —, puis poser
          la relation. La mise en relation est le vrai travail, le calcul suit.
          « modéliser ».
     Q5 — interpréter un COP de $4{,}2$ pour 1 kW absorbé, parmi quatre
          propositions. Il ne s'agit pas de calculer ($4{,}2 \times 1$) mais de
          comprendre ce que le COP mesure — le rapport entre froid produit et
          électricité consommée — et de rejeter les distracteurs, notamment
          $0{,}24$ qui correspond à l'inverse. Juger la validité d'une
          interprétation. « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2, modéliser 1.
     « chercher », « représenter » et « communiquer » ne sont PAS mobilisés :
     aucune question ne demande de tâtonner, de tracer, ni de rédiger. Constat
     sur les cinq énoncés, non corrigé par complaisance. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "modéliser", "raisonner"]
  }
};
