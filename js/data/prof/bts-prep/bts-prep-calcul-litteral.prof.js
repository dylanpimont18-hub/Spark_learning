/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-calcul-litteral.prof.js
   Fiche professeur du chapitre « Calcul Littéral & Isolation de l'Inconnue »
   (remise à niveau BTS), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer. `referentielDe()` ne bascule sur la physique que si
   le nom de la collection contient « physique » ; `bts-maths` porte
   « Collection Mathématiques ». C'est donc bien le référentiel maths qui
   s'applique, malgré les contextes techniques omniprésents.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 0.

   ATTENTION, CE CHAPITRE EST L'EXCEPTION PAUVRE DU DOSSIER : 24 énoncés tirés
   seulement (contre 42 pour les treize autres), dont 12 numérotés et 12 en
   banque supplémentaire. Et surtout, les douze exercices numérotés ne
   couvrent que SIX MOULES, tous du même type « une formule produit à trois
   lettres, on en isole une » :
     - $P = F\cdot v$, isoler $F$        : exercices 1 et 12 ;
     - $V = L\cdot l\cdot h$, isoler $h$ : exercices 2 et 5 ;
     - $\dot V = v\cdot A$, isoler $v$   : exercices 3 et 10 ;
     - $E = P\cdot t$, isoler $t$        : exercices 4 et 11 ;
     - $U = R\cdot I$, isoler $R$        : exercices 6 et 7 ;
     - $C_1V_1 = C_2V_2$, isoler $V_2$   : exercices 8 et 9.
   Autrement dit : AUCUN exercice numéroté ne fait intervenir une somme, un
   carré, une racine ni un dénominateur composé, alors que le cours (D2, la
   méthode, le tableau des formules) en promet. C'est le fait notable du
   chapitre, il est dit dans la `note`, et il commande le champ `exercice` de
   l'erreur 4, qui reste à `null` faute de support réel.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-calcul-litteral"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 14 chapitres, les numéros vont donc de 1 à 14.

     AUCUN PRÉREQUIS, et c'est un choix argumenté, pas un oubli. Ce chapitre
     est la porte d'entrée du recueil : il n'installe qu'un seul geste — faire
     la même opération sur les deux membres d'une égalité — et ce geste ne
     s'appuie sur rien d'autre que les quatre opérations du collège.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Puissances et notation scientifique) : tentant, parce que
       l'exercice 5 demande une conversion de cm² et que la question 4 de
       l'évaluation passe de kN et MPa à des mm². Mais dans les DOUZE exercices
       numérotés, pas un seul ne fait intervenir de puissance de dix : les
       nombres sont $7500$, $3$, $48$, $2$, $0{,}05$. Le préfixe n'apparaît
       qu'à l'évaluation, où il est explicité par l'énoncé. Faire du chapitre 4
       un prérequis interdirait d'ouvrir le recueil par celui-ci, ce qui serait
       une contrainte forte pour un bénéfice nul. Écarté.
     - ch. 9 (Système International) : l'étape 3 de la méthode du cours
       demande de « vérifier l'homogénéité du résultat ». C'est un conseil, pas
       une technique enseignée ici, et aucun exercice ne l'exige pour trouver
       la réponse. Écarté — mais c'est le candidat le plus défendable, et un
       enseignant qui traite les deux gagnera à faire le lien explicitement.
     Les autres chapitres n'ont aucun lien opératoire avec celui-ci. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année scolaire : c'est un recueil dans
     lequel l'enseignant PIOCHE selon les lacunes de son groupe. Le rang n'y
     décrit donc pas un déroulé de septembre à juin mais un ORDRE DE
     DÉPENDANCE TECHNIQUE — « si tu dois traiter ce chapitre, assure-toi
     d'avoir traité ceux d'avant ». C'est dit dans la `note`, qui est imprimée.

     Le rang 1 se défend seul : ce chapitre ne dépend de rien et deux autres
     dépendent de lui (le chapitre 2, Équations, qui reprend le même geste sur
     des inconnues numériques, et par ricochet le chapitre 12). Le livre le
     range aussi en chapitre 1 : les deux ordres coïncident, la colonne
     « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 1,

  /* Attendus. ATTENTION à la nature de la source, et c'est particulier à ce
     dossier : `bts-maths-prep` est une REMISE À NIVEAU, qui ne correspond à
     aucun programme officiel — ni celui du BTS, ni celui du lycée. Ses
     chapitres reprennent des notions de lycée pour un public qui arrive en
     BTS sans les maîtriser.

     Les trois attendus ci-dessous sont donc formulés en VERBES D'ACTION
     vérifiables, calqués sur la forme des attendus officiels et strictement
     limités à ce que les 24 énoncés tirés demandent réellement. Rien n'est
     extrapolé vers le référentiel du BTS. La `note` le dit explicitement, pour
     que l'enseignant ne les cite pas comme des attendus officiels devant un
     inspecteur. */
  attendus: [
    "Isoler une grandeur dans une formule technique en appliquant la même opération aux deux membres",
    "Exprimer chaque grandeur d'une formule produit ou quotient en fonction de toutes les autres",
    "Contrôler la vraisemblance d'un résultat littéral par les unités des deux membres"
  ],

  note: "Manipuler une formule technique à double sens — de $U = R \\cdot I$ vers $R = U/I$, de " +
        "$\\dot{Q} = \\dot{m} c_p \\Delta T$ vers $\\Delta T$ : le chapitre installe le geste " +
        "unique sur lequel repose tout le reste du recueil.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont donc des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong> " +
        "(« ne traitez pas celui-ci avant celui-là »), pas un déroulé annuel. Celui-ci est " +
        "<strong>sans prérequis</strong> : il n'exige que les quatre opérations, et c'est " +
        "délibéré — c'est la porte d'entrée du recueil. Notez toutefois deux liens non " +
        "déclarables : l'exercice 5 demande une conversion de cm² (chapitre 4) et l'étape 3 de la " +
        "méthode invite à vérifier l'homogénéité (chapitre 9). Ni l'un ni l'autre n'est " +
        "indispensable pour trouver les réponses.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Ce chapitre est le plus pauvre du recueil en variété : " +
        "<strong>24 énoncés tirés</strong> (contre 42 ailleurs) et surtout <strong>six moules, " +
        "tous de la même forme</strong> « produit de deux ou trois lettres, on en isole une ». " +
        "Aucun exercice numéroté ne demande d'isoler une grandeur prise dans une <strong>somme</strong>, " +
        "sous une <strong>racine</strong> ou au <strong>carré</strong> — alors que le cours les " +
        "annonce dans son tableau de formules et que l'exemple résolu (la température de sortie " +
        "d'un échangeur) repose précisément sur une soustraction. Les seuls endroits du chapitre " +
        "où ces cas apparaissent sont l'exemple résolu, le piège du cours et les questions 2 et 3 " +
        "de l'évaluation. Si vous voulez les faire travailler, il faudra composer vos propres " +
        "énoncés, ou emprunter au <strong>chapitre 12</strong> (Équations à transformations), qui " +
        "est fait pour cela.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null`, et c'est une absence
     réelle et documentée : aucun des douze exercices numérotés ne fait
     intervenir l'opération (une somme dans la formule) que cette erreur
     concerne. Le remède le dit et propose une sortie.

     LE PUBLIC CHANGE LE TON DES CAUSES. On s'adresse ici à des adultes en
     reprise d'études et à des alternants. Leurs erreurs ne sont pas des
     défauts d'attention : ce sont des procédures anciennes, apprises puis
     mal reconstruites, et appliquées avec assurance. Le champ `cause` le dit
     à chaque fois — un stagiaire à qui l'on explique POURQUOI sa règle est
     fausse la corrige, là où « attention, erreur » le renvoie à son anxiété
     scolaire. */
  erreurs: [
    {
      titre: "Diviser d'un seul côté de l'égalité",
      eleve: "Pour isoler $F$ dans $P = F \\cdot v$, l'élève écrit directement $F = P \\cdot v$ : il a " +
             "déplacé $v$ sans changer l'opération. Sur $P = 7500$ W et $v = 3$ m/s, il annonce " +
             "$22\\,500$ N au lieu de $2500$ N.",
      cause: "C'est la trace d'une <strong>règle mnémotechnique</strong> apprise il y a longtemps et " +
             "reconstruite de travers : « ce qui passe de l'autre côté change de signe ». La règle " +
             "existe, elle est vraie pour l'addition, et c'est justement pourquoi elle est " +
             "dangereuse : elle a été mémorisée comme un déplacement de symbole, sans que le " +
             "SENS de l'opération soit conservé. Pour un adulte qui a quitté les mathématiques " +
             "depuis dix ans, il ne reste souvent que le geste — faire traverser le signe égal — " +
             "et le geste, isolé de sa justification, s'applique indifféremment à un produit. Ce " +
             "n'est pas de l'étourderie : c'est une procédure incomplète, exécutée avec assurance.",
      remede: "Remplacer la règle du déplacement par l'<strong>image de la balance</strong>, qui est " +
              "celle du cours et qui ne peut pas se corrompre : une égalité est une balance en " +
              "équilibre, et toute opération faite d'un côté doit être faite de l'autre, sinon la " +
              "balance penche. On n'écrit plus « $v$ passe de l'autre côté » mais « je divise les " +
              "deux membres par $v$ ». Une ligne de plus, zéro erreur possible.<br/><br/>" +
              "Imposer ensuite d'<strong>écrire l'opération en toutes lettres</strong> à gauche de " +
              "la ligne, pendant les premières séances : « $\\div v$ ». Cela paraît scolaire ; " +
              "c'est pourtant ce qui transforme une manipulation de symboles en un raisonnement " +
              "qu'on peut relire et vérifier.<br/><br/>" +
              "Ancrer enfin le <strong>contrôle par la vraisemblance physique</strong>, qui parle " +
              "immédiatement à ce public : une force de $22\\,500$ N sur un convoyeur, c'est " +
              "$2{,}3$ tonnes de traction pour un moteur de $7{,}5$ kW. Un alternant sait que " +
              "c'est absurde avant même de vérifier le calcul — et c'est ce réflexe-là qui le " +
              "protègera en bureau d'études.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 0) : l'exercice 1 donne P = 7500 W, v = 3 m/s
         et demande F, réponse 2500 N. Choisi plutôt que l'exercice 12
         (P = 11000 W, v = 1 m/s, réponse 11000 N) pour une raison décisive :
         sur l'exercice 12, v vaut 1, donc multiplier et diviser donnent la
         MÊME réponse et l'erreur est invisible. Sur l'exercice 1, la
         confusion produit 22 500 au lieu de 2500, un facteur 9 immédiatement
         repérable à la correction. L'exercice 12 reste un bon entraînement,
         mais il ne diagnostique rien : ne pas l'utiliser pour cette erreur. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Isoler une grandeur qui se trouve au dénominateur en une seule étape",
      eleve: "Dans $\\dot{V} = v \\cdot A$, l'élève cherche $v$ et écrit $v = \\dot{V} \\cdot A$. Ou, " +
             "sur $U = R \\cdot I$ avec $U = 24$ V et $I = 10$ A, il annonce $R = 240\\ \\Omega$ au " +
             "lieu de $2{,}4\\ \\Omega$.",
      cause: "L'élève applique une <strong>procédure en un seul temps</strong> là où il en faut deux, " +
             "et il le fait parce que l'immense majorité des formules qu'il a rencontrées se " +
             "résolvent effectivement en un temps. Plus profondément, un adulte en reprise " +
             "d'études lit une formule comme une <strong>recette</strong> — « on multiplie les deux " +
             "nombres donnés » — et non comme une relation qu'on retourne. Cette lecture a " +
             "fonctionné pendant toute sa scolarité, parce que les énoncés donnaient presque " +
             "toujours les grandeurs dans le sens du calcul direct. En BTS, elles sont données " +
             "dans le sens qui arrange le terrain, pas dans celui du cours.",
      remede: "Faire nommer <strong>la place de l'inconnue avant de calculer</strong>, en une phrase " +
              "et à voix haute : « $v$ multiplie $A$ », ou « $R$ multiplie $I$ ». Cette phrase " +
              "décide de l'opération à faire, et elle la décide sans ambiguïté. C'est l'étape 1 de " +
              "la méthode du cours, et c'est exactement celle que les élèves sautent.<br/><br/>" +
              "Installer ensuite le <strong>contrôle de l'ordre de grandeur</strong>, qui est " +
              "gratuit : si l'on divise par un nombre plus grand que 1, le résultat doit être plus " +
              "petit que le point de départ. $24$ divisé par $10$ ne peut pas donner $240$. Trois " +
              "secondes, et l'erreur est morte avant d'être écrite.<br/><br/>" +
              "Relier enfin à la <strong>conséquence de terrain</strong>, qui est brutale sur ce " +
              "cas précis : confondre $2{,}4\\ \\Omega$ et $240\\ \\Omega$ sur un circuit sous " +
              "$24$ V, c'est confondre $10$ A et $0{,}1$ A. Le premier fait fondre un fusible de " +
              "$6$ A, le second ne fait rien du tout. Ce n'est pas une erreur de copie : c'est un " +
              "diagnostic de panne complètement faux.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 7 donne
         U = 24 V, I = 10 A et demande R, réponse 2,4 ohms. Préféré à
         l'exercice 6 (U = 48 V, I = 2 A, réponse 24 ohms) parce que sur le
         6, l'élève qui multiplie trouve 96 — un nombre qui reste dans une
         plage plausible pour une résistance, donc il ne se corrige pas seul.
         Sur le 7, la multiplication donne 240 ohms, cent fois la bonne
         réponse : le contrôle d'ordre de grandeur du remède tranche
         immédiatement, et l'écart se voit à l'oeil nu à la correction.
         L'exercice 3 (débit / section, réponse 2 m/s) travaille le même
         geste sur une autre formule et fait un excellent second support. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Ne pas convertir les unités avant d'appliquer la formule littérale",
      eleve: "Sur une dilution, l'élève mélange millilitres et litres, ou applique $E = P \\cdot t$ " +
             "avec $P$ en watts et $E$ en wattheures sans s'interroger, et trouve un temps de " +
             "$3600$ h au lieu de $1$ h. Sur une dalle, il mêle centimètres et mètres et sort une " +
             "épaisseur de $20$ m.",
      cause: "L'isolation littérale est réussie — c'est important de le dire à l'élève, car il a " +
             "fait le travail mathématique. Ce qui manque est ailleurs : il a appris les formules " +
             "comme des <strong>relations entre nombres</strong>, jamais comme des relations entre " +
             "grandeurs. Cette lecture vient d'une scolarité où les énoncés étaient " +
             "systématiquement donnés « dans la bonne unité », de sorte que la question ne se " +
             "posait pas. Le terrain, lui, donne des mL, des kWh, des bars et des tours par " +
             "minute, parce que ce sont les unités des catalogues. L'élève n'a donc pas un défaut " +
             "d'attention : il a une habitude qui n'a jamais été mise en défaut.",
      remede: "Imposer une <strong>colonne « unité » à droite de chaque ligne de calcul</strong>. " +
              "L'unité s'écrit, se simplifie et se transporte exactement comme un nombre : " +
              "$\\mathrm{V}/\\mathrm{A} = \\Omega$, $\\mathrm{Wh}/\\mathrm{W} = \\mathrm{h}$. Quand " +
              "la colonne ne se simplifie pas, c'est qu'une conversion manque, et on le voit avant " +
              "d'avoir fait la moindre division.<br/><br/>" +
              "Faire de la <strong>cohérence des deux unités homologues</strong> un réflexe " +
              "d'entrée : dans $C_1V_1 = C_2V_2$, les deux volumes doivent être dans la MÊME unité, " +
              "et peu importe laquelle. Le passage en litres n'est même pas nécessaire — c'est " +
              "l'égalité des unités qui compte, pas leur conformité au SI. Ce point rassure " +
              "beaucoup les élèves qui croient devoir tout ramener en unités de base.<br/><br/>" +
              "Nommer enfin la <strong>conséquence métier</strong>, qui est la plus coûteuse du " +
              "chapitre : une dilution calculée avec une unité mélangée donne une solution dix ou " +
              "mille fois trop concentrée. En laboratoire de contrôle, c'est un lot déclaré non " +
              "conforme ; en traitement de surface, c'est un bain à refaire.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         V1 = 50 mL, C1 = 1 mol/L, C2 = 0,25 mol/L et demande V2 en mL,
         réponse 200 mL. C'est LE tirage du chapitre où l'unité est le vrai
         enjeu : l'énoncé mêle des mL et des mol/L, et l'élève qui convertit
         V1 en litres SANS convertir la réponse retombe sur 0,2 et l'écrit
         tel quel, alors que la question demande des mL. L'exercice 9 (20 mL,
         5 mol/L, 1 mol/L, réponse 100 mL) est le même moule et le même
         piège ; l'exercice 8 a été retenu parce que son rapport de dilution
         (facteur 4) n'est pas un nombre rond en puissance de dix, ce qui
         empêche l'élève de retrouver la réponse « au flair » et l'oblige à
         poser le calcul complet. L'exercice 4 (E = 750 Wh, P = 750 W,
         réponse 1 h) illustre la seconde moitié de l'erreur — la confusion
         Wh / W·s — mais il est trop facile à deviner (les deux nombres sont
         égaux) pour diagnostiquer quoi que ce soit : le garder pour
         l'entraînement, pas pour le diagnostic. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Changer un seul signe en sortant une grandeur d'une différence",
      eleve: "Depuis $\\dot{Q} = \\dot{m} c_p (T_e - T_s)$, l'élève écrit " +
             "$T_s = T_e + \\dfrac{\\dot{Q}}{\\dot{m} c_p}$ au lieu de $T_e - \\dfrac{\\dot{Q}}{\\dot{m} c_p}$. " +
             "Il trouve une température de sortie SUPÉRIEURE à l'entrée sur un refroidisseur.",
      cause: "La difficulté est réelle et n'a rien d'une négligence : il faut ici passer par un " +
             "intermédiaire négatif, $-T_s = \\dfrac{\\dot{Q}}{\\dot{m} c_p} - T_e$, avant de " +
             "multiplier toute la ligne par $-1$. Cette double opération est précisément l'endroit " +
             "où une procédure apprise par cœur casse : l'élève sait qu'« il y a un signe qui " +
             "change », il en change un, et il s'arrête. Chez un adulte en reprise d'études, " +
             "l'arithmétique des nombres relatifs est souvent la lacune la plus ancienne et la " +
             "moins avouée — c'est du collège, on n'ose pas dire qu'on l'a perdue. La traiter " +
             "explicitement, sans ironie, débloque plus d'élèves que n'importe quelle autre " +
             "remédiation de ce chapitre.",
      remede: "Faire multiplier la ligne entière par $-1$ <strong>en une seule opération visible</strong>, " +
              "et l'écrire : « $\\times (-1)$ » à gauche, puis tous les signes retournés d'un coup. " +
              "Le danger vient du traitement terme à terme ; l'interdire supprime le danger.<br/><br/>" +
              "Proposer la <strong>voie de contournement</strong>, qui évite le négatif et que " +
              "beaucoup préfèrent : ajouter $T_s$ aux deux membres pour le rendre positif " +
              "($\\dfrac{\\dot{Q}}{\\dot{m} c_p} + T_s = T_e$), puis soustraire le quotient. Deux " +
              "étapes au lieu d'une, mais aucun signe à retourner. Laisser l'élève choisir sa " +
              "voie : la sûreté compte plus que l'élégance.<br/><br/>" +
              "Ancrer enfin le <strong>contrôle physique</strong>, qui est imparable sur cet " +
              "exemple et que le piège du cours souligne déjà : dans un échangeur qui CÈDE de la " +
              "chaleur, l'eau ressort plus FROIDE qu'elle n'est entrée. Une sortie plus chaude " +
              "que l'entrée signale le signe raté avant toute relecture algébrique. Sur une CTA " +
              "réelle, c'est la différence entre une régulation qui converge et une batterie qu'on " +
              "accuse à tort d'être encrassée.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille ce cas</strong> : les douze sont des " +
              "produits ou des quotients purs, sans aucune somme ni différence. Traitez-le sur " +
              "l'<strong>exemple résolu du cours</strong>, qui est bâti exactement dessus, puis " +
              "renvoyez au <strong>chapitre 12</strong> (Équations à transformations) pour de " +
              "vrais exercices d'isolation dans une expression composée.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés ne contient de somme ni de différence. Les six moules sont
         P = F.v, V = L.l.h, Vdot = v.A, E = P.t, U = R.I et C1V1 = C2V2 —
         tous des produits. La banque supplémentaire (12 énoncés) est faite
         des mêmes moules : S1 à S6 reprennent dalle, débit, résistance,
         force, durée et dilution. Un renvoi vers l'un d'eux serait donc
         FAUX au sens du projet : il enverrait l'enseignant vers un énoncé qui
         ne peut pas produire l'erreur décrite. D'où `null`, assumé et
         documenté, avec la sortie donnée dans le remède (l'exemple résolu du
         cours, puis le chapitre 12). */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — et c'est le cas le plus fréquent du dossier, pas
     l'exception : huit des quatorze chapitres de `bts-prep` ont quatre
     questions d'évaluation. Compter avant d'écrire, ne jamais supposer cinq.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — isoler $\Delta T$ dans $\dot{Q} = \dot{m} c_p \Delta T$, puis
          appliquer. L'isolation est donnée par la question elle-même
          (« Isole $\Delta T$ depuis… ») et la formule est fournie : il reste
          une division sur trois nombres donnés. Exécution d'une procédure
          connue. « calculer ».
     Q2 — calculer $A = \pi d^2/4$ pour $d = 0{,}05$ m. La formule est donnée,
          les nombres aussi, rien à isoler ni à traduire : substitution et
          calcul, avec pour seule difficulté les quatre chiffres significatifs.
          « calculer ».
     Q3 — isoler $R$ dans $P = R I^2$ ET choisir la bonne expression parmi
          quatre propositions voisines ($P \cdot I^2$, $P/I^2$, $P/I$,
          $I^2/P$). Le travail réel n'est pas le calcul final (500/25) mais la
          discrimination entre quatre formes algébriques dont trois sont
          fausses : il faut juger de la validité de chacune. « raisonner ».
     Q4 — section minimale d'un câble à partir de $\sigma = F/A$, avec
          $\sigma_{max} = 200$ MPa et $F = 80$ kN. Ici la formule n'est pas
          appliquée telle quelle : il faut comprendre que la contrainte
          admissible fixe une BORNE, traduire « doit supporter » en une
          égalité à la limite, et rendre le résultat en mm². Le passage de la
          situation technique à la relation mathématique est le vrai travail.
          « modéliser ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 1, modéliser 1.
     « chercher », « représenter » et « communiquer » ne sont PAS mobilisés —
     aucune question ne demande d'essayer une piste, de produire un graphique
     ni de rédiger une explication en français. Ce n'est pas un oubli mais un
     constat sur les quatre énoncés, cohérent avec le corpus : sur les 130
     questions du BTS, aucune n'est ouverte. La répartition globale est
     mesurée et publiée plutôt que corrigée par un étiquetage complaisant. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "modéliser"]
  }
};
