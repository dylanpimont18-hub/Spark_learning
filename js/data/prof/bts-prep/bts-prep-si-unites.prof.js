/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-si-unites.prof.js
   Fiche professeur du chapitre « Système International d'Unités » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».
   C'est important ici : le chapitre parle de newtons, de pascals et de moles,
   donc la tentation est forte d'employer les mots du référentiel de physique
   (« s'approprier », « réaliser », « valider »). Ils seraient REFUSÉS à la
   validation. Le chapitre est dans un ouvrage de mathématiques.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 8. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - km/h vers m/s                        : exercices 1 et 9 ;
     - bar vers kPa                         : exercices 2 et 10 ;
     - nF vers pF                           : exercices 3 et 8 ;
     - masse et masse molaire vers moles    : exercices 4 et 7 ;
     - kW pendant t heures vers MJ          : exercices 5 et 11 ;
     - $P = F \times v$ en watts            : exercices 6 et 12.
   UNE ABSENCE DÉCISIVE POUR CETTE FICHE : aucun des douze exercices numérotés
   ne demande de DÉCOMPOSER une unité dérivée en unités de base, alors que la
   définition D2 y consacre un tableau entier et que DEUX des quatre questions
   de l'évaluation (Q3 sur l'ohm, et l'esprit de Q2) reposent dessus. C'est
   dit dans la `note` et cela commande le `null` de l'erreur 4.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-si-unites"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 4 (Puissances de 10 & notation scientifique) : RETENU, et c'est un
     prérequis dur, pas un confort. Le chapitre entier fonctionne par
     multiplication et division par des puissances de dix : $10\ \text{bar}
     = 10 \times 10^5$ Pa, $4{,}7$ nF $= 4{,}7 \times 10^{-9}$ F à convertir
     en $10^{-12}$ F, $15$ kW $\times$ $4$ h en mégajoules. La définition D3 du
     cours EST un tableau de puissances de dix. Un stagiaire qui n'est pas à
     l'aise avec $10^{-9}/10^{-12}$ ne fait pas l'exercice 3, ni le 8, ni le 5,
     ni le 11 — c'est-à-dire un tiers du chapitre, et la partie la plus
     spécifique.

     Candidats examinés et ÉCARTÉS :
     - ch. 11 (Conversions d'unités techniques) : c'est le chapitre jumeau, et
       le recouvrement est important (bar, kWh, km/h y reviennent). Mais son
       rang est SUPÉRIEUR, et la dépendance va logiquement dans l'autre sens :
       le chapitre 11 traite les conversions de métier (kcal/h, ch, psi,
       tr/min) en s'appuyant sur la logique SI installée ici. En faire un
       prérequis créerait un cycle. Écarté fermement.
     - ch. 1 (Calcul littéral) : les exercices 6 et 12 appliquent
       $P = F \times v$, formule donnée dans le sens du calcul direct — rien à
       isoler. Écarté.
     - ch. 10 (Analyse dimensionnelle) : c'est le prolongement naturel du
       tableau D2, mais son rang est supérieur et il dépend de celui-ci, pas
       l'inverse. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [4],

  /* Rang conseillé (2026-09-17) : rang 9, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 9 est doublement contraint. En amont, il doit être supérieur à 4
     (les puissances, son prérequis) : c'est le cas. En aval, le chapitre 10
     (Analyse dimensionnelle) déclare celui-ci en prérequis, donc 9 doit rester
     strictement inférieur à 10 : c'est le cas, mais de justesse — les deux
     chapitres sont voisins, et c'est cohérent, ils se lisent à la suite. Le
     livre les range dans le même ordre : la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 9,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Convertir une grandeur d'une unité avec préfixe vers une autre, y compris entre deux préfixes non consécutifs",
    "Ramener les données d'un énoncé en unités de base SI avant d'appliquer une formule technique",
    "Distinguer les unités SI des unités pratiques du terrain (bar, kWh, km/h, °C) et passer des unes aux autres"
  ],

  note: "Les sept grandeurs de base, les unités dérivées, les préfixes et les unités pratiques du " +
        "terrain : le chapitre installe la langue commune dans laquelle se lisent toutes les " +
        "fiches techniques, et le premier contrôle de validité de tout calcul.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose les <strong>puissances de dix</strong> " +
        "acquises (chapitre 4), et c'est une contrainte réelle : tout le chapitre est une suite " +
        "de multiplications par $10^n$, et le tableau des préfixes n'est rien d'autre qu'un " +
        "tableau de puissances de dix. À l'inverse, le <strong>chapitre 10</strong> (Analyse " +
        "dimensionnelle) dépend de celui-ci et se lit naturellement juste après. Le " +
        "<strong>chapitre 11</strong> (Conversions techniques) le prolonge côté métier : " +
        "un lien réel, non déclarable dans ce sens-là.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Le déséquilibre est important et doit être connu. <strong>Aucun des " +
        "douze exercices numérotés ne demande de décomposer une unité dérivée en unités de " +
        "base</strong> — le newton en kg·m·s⁻², le volt en kg·m²·s⁻³·A⁻¹ — alors que la " +
        "définition D2 y consacre un tableau entier, que l'exemple résolu en fait sa première " +
        "illustration, et que la <strong>question 3 de l'évaluation</strong> l'exige pour " +
        "identifier le volt à partir de $R \\times I$. L'écart entre ce que les exercices " +
        "entraînent (des conversions numériques) et ce que l'évaluation demande (une " +
        "décomposition symbolique) est le plus marqué du recueil : si vous notez sur " +
        "l'évaluation, entraînez d'abord la décomposition à part.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null` : la décomposition en
     unités de base n'est travaillée par aucun des 42 énoncés tirés. Le remède
     le dit et donne une sortie.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Sur les unités, le conflit est
     particulier — l'usage professionnel qu'ils maîtrisent (bar, kWh, tr/min)
     est précisément celui que le calcul leur demande d'abandonner. Le champ
     `cause` en tient compte : leur habitude n'est pas une faute, c'est une
     compétence dans un autre contexte. */
  erreurs: [
    {
      titre: "Sauter d'un préfixe à l'autre sans compter les ordres de grandeur",
      eleve: "Pour convertir $4{,}7$ nF en pF, l'élève répond $4{,}7$ pF, ou $47$ pF, ou " +
             "$0{,}0047$ pF. La bonne réponse est $4700$ pF, soit trois ordres de grandeur.",
      cause: "Les préfixes sont mémorisés comme une LISTE de noms — nano, pico, micro, milli — sans " +
             "que l'écart entre deux voisins soit conscient. Or cet écart vaut mille, pas dix : la " +
             "liste des préfixes SI saute de trois en trois ($10^{-3}$, $10^{-6}$, $10^{-9}$, " +
             "$10^{-12}$), à l'inverse complet des unités de longueur du collège (déci, centi, " +
             "milli) qui, elles, avancent de un en un. Un adulte qui a appris le tableau " +
             "kilomètre/hectomètre/décamètre transpose légitimement ce pas de dix, et se trompe " +
             "d'un facteur cent à chaque saut. Ce n'est pas une confusion : c'est un transfert " +
             "raisonnable d'une règle apprise, vers un tableau qui ne fonctionne pas pareil — et " +
             "personne ne lui a jamais signalé la différence.",
      remede: "Faire <strong>passer systématiquement par l'unité de base</strong> plutôt que de " +
              "sauter directement d'un préfixe à l'autre : $4{,}7$ nF $= 4{,}7 \\times 10^{-9}$ F, " +
              "puis $4{,}7 \\times 10^{-9}$ F $= 4700 \\times 10^{-12}$ F $= 4700$ pF. Deux " +
              "étapes au lieu d'une, aucune soustraction d'exposants à faire de tête, et c'est " +
              "exactement la « règle du passage par le SI » que le chapitre 11 énoncera.<br/><br/>" +
              "Faire <strong>écrire la liste verticalement</strong>, une fois, avec les exposants " +
              "en face : T($12$), G($9$), M($6$), k($3$), base($0$), m($-3$), μ($-6$), n($-9$), " +
              "p($-12$). Le pas de trois devient visible, et l'écart entre deux préfixes " +
              "consécutifs cesse d'être une devinette.<br/><br/>" +
              "Ancrer enfin un <strong>repère de métier</strong> qui rend l'erreur impossible : " +
              "un condensateur de découplage se compte en <strong>nanofarads ou en centaines de " +
              "picofarads</strong>. Passer de nF à pF fait toujours GRANDIR le nombre, jamais " +
              "rétrécir. Une réponse plus petite que le point de départ signale le sens inversé, " +
              "sans qu'il y ait rien à recalculer.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 8) :
         l'exercice 3 demande de convertir 4,7 nF en pF, réponse 4700 pF.
         Choisi plutôt que l'exercice 8 (1 nF -> 1000 pF) pour une raison
         décisive : sur le 8, le point de départ vaut 1, donc la réponse
         (1000) EST le facteur de conversion — un élève peut l'écrire sans
         avoir rien converti, simplement parce qu'il « sait qu'il y a mille ».
         Sur le 3, le 4,7 oblige à faire réellement l'opération, et les
         erreurs possibles (4,7 / 47 / 0,0047) sont toutes distinctes de la
         bonne réponse. C'est le même piège du coefficient unité déjà
         rencontré aux chapitres 1 et 5 : l'exercice 8 reste un bon
         entraînement, mais il ne diagnostique rien. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Mélanger les unités du terrain et les unités de calcul dans une même formule",
      eleve: "Sur $E = P \\times t$ avec $P = 15$ kW et $t = 4$ h, l'élève multiplie $15 \\times 4$ " +
             "et annonce $60$ MJ au lieu de $216$ MJ. Il a calculé des kilowattheures et les a " +
             "étiquetés mégajoules.",
      cause: "Le kilowattheure est l'unité que ce public connaît le mieux au monde — c'est celle de " +
              "sa facture d'électricité, celle des compteurs, celle des rapports d'exploitation. " +
              "Elle est si familière qu'elle ne se donne pas pour une unité « pratique » mais pour " +
              "l'unité naturelle de l'énergie. Le joule, lui, n'apparaît nulle part sur le " +
              "terrain. Un alternant qui multiplie des kW par des heures fait donc un calcul " +
              "professionnellement juste, dont le seul défaut est de ne pas être dans l'unité " +
              "demandée. Lui dire qu'il s'est trompé serait faux : il a bien calculé, il a manqué " +
              "une conversion — et la nuance compte pour quelqu'un qui doute de sa légitimité en " +
              "cours de mathématiques.",
      remede: "Faire <strong>écrire l'unité obtenue avant de lire celle qui est demandée</strong> : " +
              "« $15$ kW $\\times$ $4$ h $= 60$ kWh ». Une fois ce nombre posé avec son unité " +
              "réelle, la question devient « comment passer de kWh à MJ ? », qui est une " +
              "conversion simple et que le cours donne ($1$ kWh $= 3{,}6$ MJ). Le calcul et la " +
              "conversion sont deux gestes séparés ; les mélanger est ce qui produit l'erreur.<br/><br/>" +
              "Rappeler ensuite la <strong>voie alternative, entièrement SI</strong>, qui évite " +
              "toute conversion finale : tout ramener en unités de base d'entrée — $15\\,000$ W " +
              "et $14\\,400$ s — puis multiplier. On obtient directement $216 \\times 10^6$ J. " +
              "Deux conversions au début plutôt qu'une à la fin ; laisser l'élève choisir sa " +
              "voie, les deux sont justes.<br/><br/>" +
              "Ancrer enfin le <strong>facteur $3{,}6$ comme repère de métier</strong> : un " +
              "kilowattheure vaut $3{,}6$ mégajoules, toujours. C'est le pont entre le monde de " +
              "la facture et celui du bilan thermique, et c'est le seul nombre de ce chapitre " +
              "qu'un technicien utilisera toute sa carrière — notamment pour comparer une " +
              "consommation électrique en kWh à un apport de chaleur en MJ dans un bilan " +
              "énergétique de bâtiment.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne
         P = 15 kW pendant t = 4 h et demande l'énergie en MJ, réponse 216 MJ.
         Le tirage est le plus diagnostique du chapitre pour cette erreur
         parce que le produit brut (15 x 4 = 60) et la bonne réponse (216)
         sont deux nombres nettement distincts, dans un rapport exactement
         égal à 3,6 — ce qui permet, à la correction, d'IDENTIFIER l'erreur
         plutôt que de seulement la constater : un rapport de 3,6 dit
         immédiatement « facteur kWh/MJ oublié ». Préféré à l'exercice 11
         (7,5 kW pendant 12 h, réponse 324 MJ) parce que sur le 11 le produit
         brut vaut 90 et la bonne réponse 324, même rapport mais sur des
         nombres moins ronds, donc un diagnostic moins lisible. L'exercice 11
         fait un bon second support. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Convertir dans le mauvais sens une vitesse ou une pression",
      eleve: "Pour $36$ km/h, l'élève MULTIPLIE par $3{,}6$ et annonce $130$ m/s au lieu de " +
             "$10$ m/s. Ou, sur $10$ bar, il divise par $100$ et annonce $0{,}1$ kPa au lieu de " +
             "$1000$ kPa.",
      cause: "Le facteur est connu — $3{,}6$ pour les vitesses, $10^5$ pour les bars — et c'est " +
             "précisément parce qu'il est connu qu'on ne réfléchit plus au sens. Or le sens est " +
             "la seule vraie difficulté : rien dans « $3{,}6$ » ne dit s'il faut multiplier ou " +
             "diviser, et les deux opérations sont également disponibles. La mémoire seule ne " +
             "tranche pas, et un adulte qui récite un facteur sans l'avoir reconstruit se trompe " +
             "une fois sur deux, sans aucun moyen de s'en apercevoir — parce que les deux " +
             "résultats sont des nombres, et qu'un nombre ne proteste pas.",
      remede: "Remplacer la mémoire du facteur par une <strong>question sur la taille de " +
              "l'unité</strong>, posée avant tout calcul : une vitesse en m/s doit-elle être " +
              "exprimée par un nombre plus grand ou plus petit qu'en km/h ? Un mètre par seconde " +
              "est une unité BEAUCOUP plus grande qu'un kilomètre par heure — on en parcourt " +
              "moins dans la même durée — donc le NOMBRE doit être plus petit. $36$ devient " +
              "$10$, pas $130$. Cette règle vaut pour toutes les conversions du recueil : " +
              "<strong>unité plus grande, nombre plus petit</strong>.<br/><br/>" +
              "Ancrer ensuite <strong>deux couples de référence</strong> qui couvrent la " +
              "quasi-totalité des cas : $36$ km/h $= 10$ m/s, et $3{,}6$ km/h $= 1$ m/s. Les " +
              "reconnaître dispense de toute conversion et signale immédiatement une erreur de " +
              "sens — c'est la même stratégie que les $314$ rad/s du chapitre 6.<br/><br/>" +
              "Nommer enfin le <strong>repère de vraisemblance de métier</strong>, qui tranche " +
              "sans aucun calcul : un chariot de manutention en atelier roule à quelques mètres " +
              "par seconde, pas à cent trente. Un alternant sait ce que vaut $130$ m/s — c'est " +
              "$470$ km/h. Lui rappeler qu'il possède déjà ce jugement, et qu'il a le droit de " +
              "s'en servir contre sa calculatrice, débloque plus que n'importe quelle règle.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         36 km/h à convertir en m/s, réponse 10 m/s. C'est le meilleur support
         du chapitre pour cette erreur, pour deux raisons. D'abord, 36 et 3,6
         entretiennent un rapport visible de 10, donc la bonne réponse (10)
         est un nombre rond que l'élève reconnaîtra comme « propre » — alors
         que l'erreur (129,6) est un nombre sale, ce qui donne un signal
         supplémentaire. Ensuite et surtout, 130 m/s est absurde pour un
         véhicule de livraison : le contrôle de vraisemblance du remède
         tranche immédiatement. Préféré à l'exercice 9 (54 km/h -> 15 m/s)
         parce que sur le 9 l'erreur donne 194 m/s, tout aussi absurde mais
         sur un couple de nombres moins mémorable — 36/10 est le repère cité
         dans le remède, et travailler dessus l'installe. L'exercice 2
         (10 bar -> 1000 kPa) illustre la seconde moitié de l'erreur, sur les
         pressions, et fait un excellent complément. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'une unité dérivée est un objet primitif, sans décomposition possible",
      eleve: "Devant « que vaut $[R \\times I]$ en unités de base ? », l'élève reste bloqué : il " +
             "sait que des ohms fois des ampères font des volts, mais il ne voit pas comment " +
             "l'écrire en kg, m, s et A. Ou il répond « des ohms-ampères ».",
      cause: "Un volt, un pascal, un watt sont vécus comme des unités ATOMIQUES : ce sont des mots " +
             "du métier, ils désignent des grandeurs qu'on mesure avec des appareils dédiés, et " +
             "rien dans l'usage quotidien ne suggère qu'ils se décomposent. Cette perception est " +
             "d'ailleurs juste sur le plan pratique — personne n'a jamais eu besoin de savoir " +
             "qu'un volt vaut des kg·m²·s⁻³·A⁻¹ pour câbler une armoire. La décomposition est un " +
             "outil de VÉRIFICATION, pas de mesure, et c'est un usage que ce public n'a jamais " +
             "rencontré. Le blocage n'est donc pas une lacune de calcul : c'est l'absence d'une " +
             "pratique dont on ne lui a jamais montré l'utilité.",
      remede: "Montrer d'abord <strong>à quoi ça sert</strong>, avant toute technique, parce que " +
              "c'est ce qui manque : la décomposition permet de vérifier une formule dont on " +
              "n'est pas sûr, sans se souvenir de la formule. Si les deux membres ne se " +
              "décomposent pas pareil, la formule est fausse — c'est tout l'objet du " +
              "<strong>chapitre 10</strong>, et le dire ici motive l'effort.<br/><br/>" +
              "Faire ensuite <strong>construire la décomposition à partir d'une définition " +
              "familière</strong>, jamais la faire apprendre : un newton, c'est ce qui donne " +
              "$1$ m/s² à $1$ kg, donc kg·m·s⁻². Un pascal, c'est un newton par mètre carré, " +
              "donc kg·m⁻¹·s⁻². Un joule, c'est un newton-mètre. Chaque unité dérivée se " +
              "reconstruit depuis la précédente, en une ligne — il n'y a rien à mémoriser, il y " +
              "a une chaîne à suivre.<br/><br/>" +
              "Faire enfin <strong>écrire la chaîne complète une seule fois</strong>, sur une " +
              "feuille qu'on garde : N → Pa → J → W → V → Ω. Une demi-page construite une fois " +
              "vaut mieux qu'un tableau recopié dix fois, et elle sert ensuite tout le " +
              "chapitre 10.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille cette décomposition</strong> : les " +
              "douze sont des conversions numériques (préfixes, facteurs) ou des applications de " +
              "formule. C'est l'angle mort du chapitre, et il est d'autant plus gênant que la " +
              "question 3 de l'évaluation, elle, l'exige. Traitez-le sur l'<strong>exemple " +
              "résolu du cours</strong> (qui décompose le watt et le pascal) puis enchaînez sur " +
              "le <strong>chapitre 10</strong>, dont c'est l'objet entier.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés ne demande de décomposition en unités de base. Les six
         moules sont : km/h -> m/s (ex. 1, 9), bar -> kPa (ex. 2, 10),
         nF -> pF (ex. 3, 8), n = m/M (ex. 4, 7), kW.h -> MJ (ex. 5, 11) et
         P = F.v (ex. 6, 12). Tous rendent un NOMBRE dans une unité donnée ;
         aucun ne demande d'écrire une unité en fonction des sept grandeurs de
         base. La banque supplémentaire (30 énoncés, S1 à S6 relevés) reprend
         exactement les mêmes moules. Un renvoi serait donc FAUX : il
         enverrait l'enseignant vers un énoncé incapable de produire l'erreur.
         D'où `null`, assumé et documenté, avec la sortie donnée dans le
         remède — l'exemple résolu du cours, puis le chapitre 10. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier (huit chapitres sur
     quatorze), mais pas une règle. Compter dans le dump avant d'écrire.

     RAPPEL IMPORTANT POUR CE CHAPITRE : le référentiel est celui des
     MATHÉMATIQUES (chercher, modéliser, représenter, raisonner, calculer,
     communiquer), pas celui de la démarche scientifique. Les mots
     « s'approprier », « réaliser » et « valider » seraient refusés à la
     validation, même si le chapitre parle de pascals et de moles.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — exprimer $2{,}5$ MPa en bar. Deux facteurs connus, une division.
          Exécution d'une procédure du cours. « calculer ».
     Q2 — contrainte $\sigma = F/S$ avec $F = 15$ kN et $S = 50$ mm², résultat
          en MPa. La formule est donnée et la division est triviale, mais le
          travail réel est ailleurs : il faut décider de ramener les DEUX
          données en unités de base avant de diviser (les mm² au carré, donc
          $10^{-6}$), puis de remonter en MPa. C'est un enchaînement de
          conversions dont l'énoncé ne donne pas l'ordre, et dont chaque
          maillon conditionne le suivant. « raisonner ».
     Q3 — décomposer $[R \times I]$ en unités de base, parmi quatre
          propositions (volt, ohm, watt, joule). Aucun nombre : il faut
          décomposer l'ohm, multiplier par l'ampère, simplifier les exposants
          de A, et RECONNAÎTRE le volt dans le résultat. Une déduction
          symbolique en plusieurs pas avec un verdict à établir.
          « raisonner ».
     Q4 — convertir $350$ K en °C. Une soustraction de $273{,}15$. Exécution.
          « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2.
     « chercher », « modéliser », « représenter » et « communiquer » ne sont
     PAS mobilisés : aucune question ne demande de tâtonner, de traduire une
     situation concrète en relation (les formules sont fournies), de tracer ni
     de rédiger. Constat sur les quatre énoncés, non corrigé par complaisance. */
  competences: {
    evaluation: ["calculer", "raisonner", "raisonner", "calculer"]
  }
};
