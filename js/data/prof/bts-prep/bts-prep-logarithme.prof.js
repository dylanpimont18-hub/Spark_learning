/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-logarithme.prof.js
   Fiche professeur du chapitre « Logarithmes & Exponentielles » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE du dossier `bts-prep` (2026-09-17) : les conventions des
   treize autres fiches du dossier y sont calées.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer. `referentielDe()` ne bascule sur la physique que si
   le nom de la collection contient « physique » ; `bts-maths` porte
   « Collection Mathématiques », donc c'est bien le référentiel maths qui
   s'applique — même si le chapitre est truffé de contextes techniques.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 6. Ce rang est le MÊME dans les deux ouvrages
   (`bts-maths-prep` et `bts-maths`), parce que le dossier `bts-prep` ouvre
   les deux : les renvois ci-dessous valent donc pour les deux livres, ce qui
   a été vérifié mécaniquement avec `modulesDeLOuvrage()`.

   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire, et
   surtout HUIT MOULES distincts parmi les douze numérotés — à comparer aux
   DEUX moules des chapitres de physique du lycée. Les six familles de tâches
   présentes dans le corps du chapitre :
     - pH à partir de $[H^+]$          : exercices 1 et 7 ;
     - combinaison de deux niveaux dB  : exercices 2 et 11 ;
     - charge d'un condensateur à $2{,}5\tau$ : exercices 3 et 12 ;
     - demi-vie d'une réaction d'ordre 1     : exercices 4 et 8 ;
     - rapport de tension depuis une atténuation en dB : exercices 5 et 9 ;
     - résolution de $1 - e^{-x} = \varepsilon$ (NTU, adsorption) : exercices 6 et 10.
   Cette richesse change tout par rapport à la physique : les quatre erreurs
   ci-dessous reçoivent TOUTES un renvoi vérifié, sans aucun `exercice: null`.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-logarithme"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 14 chapitres, donc les numéros vont de 1 à 14.

     ch. 4 (Puissances et notation scientifique) : RETENU, et c'est le
     prérequis dur. Tout le chapitre manipule des puissances de dix — $10^{-5}$
     mol/L pour le pH, $10^{-24/10}$ pour une atténuation, $10^8$ pour combiner
     deux décibels. Un stagiaire qui n'est pas à l'aise avec $10^{-2{,}4}$ ne
     peut pas terminer un seul des douze exercices, quelle que soit sa maîtrise
     du logarithme lui-même. C'est le vrai point de blocage du chapitre, et il
     est en amont.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Équations) : tentant, puisque la définition D4 du cours est une
       méthode de résolution d'équation. Mais les équations du chapitre 2 sont
       du premier degré à coefficients numériques, et la technique qui compte
       ici — « appliquer la même fonction aux deux membres » — n'y est pas
       enseignée. Le lien est thématique, pas opératoire. Écarté.
     - ch. 5 (Fonctions) : donne le vocabulaire (image, antécédent, fonction
       réciproque) qui éclairerait $\ln$ et $\exp$ comme réciproques l'une de
       l'autre. C'est un confort réel, pas une nécessité : le cours redéfinit
       la réciprocité par ses deux identités ($e^{\ln x} = x$ et
       $\ln(e^x) = x$), qui se vérifient à la calculatrice sans théorie des
       fonctions. Écarté, mais c'est le candidat le plus défendable, et un
       enseignant qui a le temps gagnera à faire le lien.
     - ch. 1 (Calcul littéral) : les propriétés algébriques du logarithme
       (D2) sont des règles de manipulation littérale. Mais elles sont
       ÉNONCÉES par ce chapitre-ci et ne dépendent d'aucune technique du
       chapitre 1. Écarté.
     Les autres chapitres (trigonométrie, vecteurs, unités, conversions,
     graphiques, données techniques) n'ont aucun lien. */
  prerequis: [4],

  /* Rang conseillé (2026-09-17) : rang 7, celui du livre.

     ATTENTION — CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang n'y décrit
     donc pas un déroulé de septembre à juin, mais un ORDRE DE DÉPENDANCE
     TECHNIQUE — « si tu dois traiter ce chapitre, assure-toi d'avoir traité
     ceux d'avant ». C'est dit dans la `note`, qui est imprimée, pour qu'un
     enseignant ne se croie pas tenu de suivre les quatorze dans l'ordre.

     Le rang 7 place le chapitre après les puissances (rang 4), ce qu'exige
     son prérequis, et après les fonctions (rang 5), ce qui est un confort.
     Le livre le range aussi en chapitre 7 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 7,

  /* Attendus. ATTENTION à la nature de la source, et c'est particulier à ce
     dossier : `bts-maths-prep` est une REMISE À NIVEAU, qui ne correspond à
     aucun programme officiel — ni celui du BTS, ni celui du lycée. Ses
     chapitres reprennent des notions de lycée pour un public qui arrive en
     BTS sans les maîtriser.

     Les trois attendus ci-dessous sont donc formulés en VERBES D'ACTION
     vérifiables, calqués sur la forme des attendus officiels (« exploiter »,
     « résoudre », « déterminer ») et strictement limités à ce que les 42
     énoncés tirés demandent réellement. Rien n'est extrapolé vers le
     référentiel du BTS, dont ce chapitre n'est pas issu. La `note` le dit
     explicitement pour que l'enseignant ne les cite pas comme des attendus
     officiels devant un inspecteur. */
  attendus: [
    "Utiliser les propriétés algébriques du logarithme et de l'exponentielle pour simplifier une expression",
    "Résoudre une équation de la forme a·e^(bx) = c ou ln(x) = k, et interpréter le résultat",
    "Exploiter une échelle logarithmique dans un contexte technique : décibels, pH, constante de temps"
  ],

  note: "Le logarithme népérien et décimal, l'exponentielle, leurs propriétés algébriques et leurs " +
        "applications techniques (décibels, pH, constante de temps, demi-vie) : le chapitre couvre " +
        "ce que le BTS suppose acquis.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont donc des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong> " +
        "(« ne traitez pas celui-ci avant celui-là »), pas un déroulé annuel. Ce chapitre-ci suppose " +
        "les <strong>puissances de dix</strong> acquises (chapitre 4), et c'est la seule contrainte " +
        "réelle : sans elles, $10^{-2{,}4}$ bloque l'élève avant même que le logarithme " +
        "n'intervienne.<br/><br/>" +
        "<strong>Deux points de vigilance sur le contenu.</strong> D'abord, le chapitre mélange " +
        "délibérément $\\ln$ et $\\log_{10}$, ce qui est fidèle à la pratique technique (les dB et " +
        "le pH sont en base 10, les cinétiques en base $e$) mais constitue la première source " +
        "d'erreur : voir l'erreur 1 ci-dessous. Ensuite, les douze exercices numérotés sont " +
        "<strong>tous</strong> des applications directes d'une formule donnée dans le cours ; " +
        "aucun ne demande de DÉMONTRER une propriété du logarithme ni de choisir entre deux " +
        "modèles. C'est cohérent avec une remise à niveau, mais il faut le savoir avant de composer " +
        "un devoir : la compétence <em>raisonner</em> n'y est travaillée que par la question 3 de " +
        "l'évaluation.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI, et c'est la différence majeure avec les fiches
     de physique du lycée (où 53 renvois sur 128 étaient `null`) : avec huit
     moules et six familles de tâches, chaque erreur trouve un support réel.

     LE PUBLIC CHANGE LE TON DES CAUSES. On s'adresse ici à des adultes en
     reprise d'études et à des alternants. Leurs erreurs ne sont pas des
     défauts d'attention : ce sont des procédures anciennes, apprises puis
     mal reconstruites, appliquées avec assurance. Le champ `cause` le dit
     à chaque fois, parce qu'un stagiaire à qui l'on explique POURQUOI sa
     règle est fausse la corrige, là où « attention, erreur » le renvoie à
     son anxiété scolaire. */
  erreurs: [
    {
      titre: "Confondre $\\ln$ et $\\log_{10}$, ou les prendre l'un pour l'autre à la calculatrice",
      eleve: "Pour calculer un pH, l'élève tape « ln » au lieu de « log » et trouve $10{,}01$ au lieu " +
             "de $4{,}35$. Ou, sur une atténuation de $20$ dB, il calcule $e^{-1}$ au lieu de " +
             "$10^{-1}$ et annonce $0{,}368$ au lieu de $0{,}1$.",
      cause: "Les deux touches sont voisines sur toutes les calculatrices, et surtout leurs NOMS ne " +
             "disent pas leur base : rien dans « log » n'annonce le $10$, rien dans « ln » n'annonce " +
             "le $e$. Pour un adulte qui a appris le logarithme il y a dix ou quinze ans, il ne " +
             "reste souvent qu'un souvenir unique et indifférencié — « le log » — alors que le " +
             "chapitre en utilise deux, dans des contextes différents. Ce n'est pas de " +
             "l'inattention : c'est une distinction qui n'a jamais été installée, ou qui s'est " +
             "effacée faute d'usage.",
      remede: "Associer chaque logarithme à son <strong>domaine technique</strong> plutôt qu'à sa " +
              "base, parce que c'est ainsi qu'on le rencontrera en BTS : <strong>tout ce qui se " +
              "mesure en décibels ou en pH est en base 10</strong> (l'échelle a été construite pour " +
              "que $+20$ dB corresponde à $\\times 10$) ; <strong>tout ce qui décrit une évolution " +
              "dans le temps</strong> — charge, décharge, demi-vie, cinétique — <strong>est en base " +
              "$e$</strong>. Le contexte de l'énoncé désigne la touche, avant tout calcul.<br/><br/>" +
              "Installer ensuite un <strong>contrôle de vraisemblance immédiat</strong>, qui " +
              "attrape l'erreur sans rien connaître : le pH d'une solution aqueuse est compris " +
              "entre $0$ et $14$. Une réponse de $10{,}01$ pour une eau acide est hors du domaine " +
              "attendu ; la chercher AVANT de valider prend trois secondes.<br/><br/>" +
              "Faire enfin vérifier une fois pour toutes, à la calculatrice, que " +
              "$\\log_{10}(1000) = 3$ et que $\\ln(1000) \\approx 6{,}91$. Deux nombres très " +
              "différents sur un cas simple : l'élève voit alors que la confusion ne produit pas un " +
              "petit écart, mais un résultat sans rapport.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 6) : l'exercice 1 donne [H+] = 4,5 x 10^-5 et
         demande le pH, réponse 4,35. Choisi plutôt que l'exercice 7
         ([H+] = 5 x 10^-6, réponse 5,30) pour deux raisons. D'abord son
         résultat n'est pas rond, donc l'élève ne peut pas le deviner et doit
         réellement manipuler la touche. Ensuite l'erreur y est
         spectaculairement visible : ln(4,5e-5) donne -10,01, soit un pH
         NÉGATIF au signe près, impossible pour une eau de process — le
         contrôle de vraisemblance du remède tranche immédiatement. Sur
         l'exercice 7, l'écart existe aussi mais le nombre reste plus proche
         du domaine plausible. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Additionner les décibels comme des nombres",
      eleve: "Devant deux compresseurs à $90$ dB et $93$ dB, l'élève annonce $183$ dB. Ou, plus " +
             "prudemment, il fait la moyenne et annonce $91{,}5$ dB. La bonne réponse est " +
             "$94{,}8$ dB.",
      cause: "Le décibel a l'apparence d'une unité additive : il s'écrit comme une grandeur, il se " +
             "compare comme une grandeur, et rien dans sa notation ne rappelle qu'il mesure un " +
             "<strong>rapport sur une échelle logarithmique</strong>. Additionner deux mesures est " +
             "par ailleurs le geste le plus naturel du monde — c'est vrai pour des longueurs, des " +
             "masses, des durées. L'élève applique une règle qui marche partout ailleurs ; c'est " +
             "l'unité qui est piégeuse, pas lui.",
      remede: "Faire le détour <strong>obligatoire par les puissances</strong>, qui est la seule " +
              "méthode juste et qui explique tout : on ne peut pas additionner des dB, mais on peut " +
              "additionner des <strong>puissances</strong>. On redescend donc en puissance " +
              "($P = 10^{L/10}$), on additionne, puis on remonte en dB. Trois étapes, toujours les " +
              "mêmes.<br/><br/>" +
              "Ancrer ensuite le <strong>repère des +3 dB</strong>, que le cours donne déjà et qui " +
              "rend le résultat prévisible sans calcul : <strong>doubler la puissance ajoute 3 " +
              "dB</strong>. Deux sources identiques de $90$ dB donnent donc $93$ dB, jamais $180$. " +
              "Une fois ce repère installé, l'élève sait avant de calculer que le total de deux " +
              "sources se situe entre la plus forte et la plus forte $+3$ dB — un encadrement qui " +
              "rejette $183$ comme $91{,}5$.<br/><br/>" +
              "Signaler enfin la conséquence de terrain, qui frappe les alternants : sur un site " +
              "industriel, <strong>supprimer la machine la plus bruyante ne réduit presque pas le " +
              "niveau global</strong> si une autre est proche. C'est contre-intuitif, c'est vrai, " +
              "et c'est exactement ce que dit l'échelle logarithmique.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         L1 = 90 dB et L2 = 93 dB, réponse 94,8 dB. Préféré à l'exercice 11
         (75 et 85 dB, réponse 85,4) précisément parce que les deux sources y
         sont PROCHES : le total 94,8 dB est à peine 1,8 dB au-dessus de la
         plus forte, ce qui rend l'erreur d'addition (183) absurde d'un coup
         d'oeil et valide l'encadrement du remède. L'exercice 11, où les
         sources diffèrent de 10 dB, illustre l'autre leçon — la plus faible
         ne compte presque pas (85,4 contre 85) — et fait un excellent second
         exercice à donner juste après. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que $\\ln(a+b) = \\ln a + \\ln b$",
      eleve: "L'élève écrit $\\ln(x + 3) = \\ln x + \\ln 3$, ou développe " +
             "$e^{a+b}$ en $e^a + e^b$. Sur une équation, cela conduit à une réponse qui ne " +
             "vérifie pas l'énoncé.",
      cause: "Surgénéralisation d'une règle vraie. Le cours énonce " +
             "$\\ln(a \\times b) = \\ln a + \\ln b$, et l'élève retient la forme visible — « le log " +
             "transforme en somme » — sans l'opération d'entrée. La confusion est renforcée par la " +
             "<strong>linéarité</strong>, qui est le comportement par défaut attendu de toute " +
             "fonction : $f(a+b) = f(a) + f(b)$ est vrai pour les fonctions linéaires rencontrées " +
             "depuis le collège, et le logarithme est précisément la première fonction courante qui " +
             "y déroge.",
      remede: "Faire tester la règle sur un <strong>contre-exemple numérique</strong> avant toute " +
              "explication, parce que c'est ce qui convainc : $\\ln(2 + 8) = \\ln 10 \\approx " +
              "2{,}30$, tandis que $\\ln 2 + \\ln 8 \\approx 0{,}69 + 2{,}08 = 2{,}77$. Deux " +
              "nombres différents, vérifiables à la calculatrice en dix secondes. La règle est " +
              "fausse, et l'élève l'a constaté lui-même.<br/><br/>" +
              "Puis rattacher la vraie propriété à ce qu'elle <strong>fait</strong> : le logarithme " +
              "<strong>descend d'un cran dans la hiérarchie des opérations</strong>. Il transforme " +
              "un produit en somme, un quotient en différence, une puissance en produit. Une somme " +
              "est déjà au dernier cran : il n'y a rien en dessous, donc rien à simplifier. " +
              "$\\ln(a+b)$ ne se développe pas, et ce n'est pas un manque de la théorie — c'est " +
              "structurel.<br/><br/>" +
              "Faire enfin nommer l'opération à voix haute avant d'appliquer une règle : " +
              "« entre $x$ et $3$, est-ce un produit ou une somme ? ». La question paraît triviale ; " +
              "c'est pourtant l'unique geste qui sépare le bon usage de l'erreur, et il devient " +
              "automatique en quelques exercices.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 demande de
         résoudre 0,9 = 1 - e^(-kt), donc e^(-kt) = 0,1, donc kt = 2,30.
         C'est LE tirage du chapitre où la surgénéralisation se sanctionne
         d'elle-même : l'élève qui « passe au ln » terme à terme sur
         « 1 - e^(-kt) » sans avoir d'abord isolé l'exponentielle produit une
         expression dont il ne sait plus quoi faire. L'exercice impose donc
         l'ordre correct — isoler l'exponentielle, PUIS appliquer ln — qui est
         exactement ce que le remède installe. L'exercice 10 (NTU, epsilon =
         0,7, réponse 1,20) est le même moule et fait un bon second support. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Confondre le coefficient 10 et le coefficient 20 dans les décibels",
      eleve: "Pour une atténuation de $20$ dB <strong>en tension</strong>, l'élève applique " +
             "$10^{-20/10} = 0{,}01$ au lieu de $10^{-20/20} = 0{,}1$. Il se trompe d'un facteur " +
             "dix sur le rapport, sans que rien dans son calcul ne le signale.",
      cause: "Deux formules coexistent — $10\\log(P/P_0)$ pour les puissances, $20\\log(V/V_0)$ " +
             "pour les tensions et les pressions — et le cours les donne toutes deux sans que " +
             "l'élève dispose d'un moyen de choisir. Retenir deux formules jumelles dont une seule " +
             "s'applique est une charge de mémoire pure, et c'est typiquement ce qui lâche en " +
             "situation d'examen. S'y ajoute que l'énoncé doit être LU attentivement pour savoir " +
             "s'il parle de puissance ou de tension : l'erreur est autant de lecture que de calcul.",
      remede: "Donner la <strong>raison</strong> du 20, qui supprime la mémorisation : la puissance " +
              "est proportionnelle au <strong>carré</strong> de la tension ($P = V^2/R$). Or " +
              "$\\log(V^2) = 2\\log V$, et le facteur $2$ appliqué au $10$ donne $20$. Le " +
              "coefficient 20 n'est donc pas une seconde formule à retenir : c'est la même formule, " +
              "vue à travers un carré. Un élève qui a compris cela le reconstruit en dix secondes " +
              "et ne peut plus se tromper.<br/><br/>" +
              "Imposer ensuite le <strong>réflexe de lecture</strong> : entourer dans l'énoncé le " +
              "mot qui désigne la grandeur — « puissance », « tension », « pression » — " +
              "<strong>avant</strong> d'écrire la moindre ligne. Le choix du coefficient est une " +
              "décision de lecture, pas de calcul, et la traiter comme telle la fiabilise.<br/><br/>" +
              "Fournir enfin un <strong>repère de contrôle</strong> : en tension, $-20$ dB divise " +
              "par $10$ ; $-40$ dB divise par $100$. Autrement dit, en tension, on divise par dix " +
              "tous les $20$ dB — contre tous les $10$ dB en puissance. Une réponse qui ne respecte " +
              "pas ce rythme signale le mauvais coefficient.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne une
         atténuation de 20 dB EN TENSION et demande le rapport |Vs/Ve|,
         réponse 0,1. Le tirage est idéal pour cette erreur parce que les deux
         coefficients donnent deux réponses rondes et distinctes — 0,1 avec le
         20 (correct), 0,01 avec le 10 (faux) — soit exactement le facteur dix
         décrit dans le remède, immédiatement visible à la correction.
         L'exercice 9 (40 dB, réponse 0,01) est le même moule et permet de
         vérifier le « rythme » : deux fois 20 dB, donc deux fois divisé par
         dix. Les donner l'un après l'autre installe le repère. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     CINQ questions ici — mais attention, ce n'est PAS la règle dans ce
     dossier : huit des quatorze chapitres de `bts-prep` n'ont que quatre
     questions, et `bts-prep-trigonometrie` en a huit. Compter avant d'écrire.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — résoudre $3e^{2x} = 48$. Suite d'opérations entièrement déterminée
          par la méthode D4 du cours (diviser, appliquer $\ln$, diviser) :
          l'élève exécute une procédure connue sur des nombres donnés, sans
          rien à choisir ni à modéliser. « calculer ».
     Q2 — fibre optique, $0{,}3$ dB/km sur $80$ km. Deux étapes que l'énoncé
          ne donne pas : comprendre que l'atténuation linéique se cumule sur
          la distance ($0{,}3 \times 80$), puis revenir du dB au rapport. Il
          faut traduire une situation technique en relation mathématique :
          « modéliser ».
     Q3 — simplifier $\ln(\sqrt{x}) + \ln(x^2) - \ln(x^{3/2})$. Aucune
          application numérique : il faut enchaîner la propriété
          $\ln(a^n) = n\ln a$ sur trois termes, dont deux exposants
          fractionnaires, et conclure. C'est la seule question du chapitre qui
          demande une déduction en plusieurs pas sur des symboles :
          « raisonner ».
     Q4 — $\tau = RC$ avec $C = 470\ \mu$F et $R = 2{,}2$ k$\Omega$. Produit
          de deux nombres donnés, l'unique difficulté étant les préfixes
          (micro, kilo) : exécution. « calculer ».
     Q5 — après combien de temps la tension tombe-t-elle de $50$ V à $5$ V ?
          Il faut poser l'équation $5 = 50e^{-t/\tau}$ à partir d'une
          situation décrite en français, puis la résoudre. La mise en équation
          est le vrai travail, et elle n'est pas donnée : « modéliser ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, modéliser 2, raisonner 1.
     « chercher », « représenter » et « communiquer » ne sont PAS mobilisés —
     aucune question ne demande d'essayer une piste, de produire un graphique,
     ni de rédiger une explication. Ce n'est pas un oubli mais un constat sur
     les cinq énoncés, et il est cohérent avec le corpus : sur les 130
     questions du BTS, 89 sont `numeric` et 41 à choix multiple, aucune n'est
     ouverte. La répartition globale sera mesurée et publiée dans
     CODEBASE_MAP.md plutôt que corrigée par un étiquetage complaisant. */
  competences: {
    evaluation: ["calculer", "modéliser", "raisonner", "calculer", "modéliser"]
  }
};
