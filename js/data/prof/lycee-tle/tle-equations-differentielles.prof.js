/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-equations-differentielles.prof.js
   Fiche professeur du chapitre « Équations Différentielles du 1er Ordre »
   (terminale), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales).

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/tle/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-equations-differentielles"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 2 (intégration et primitives) : résoudre $y' = f$ est exactement
     chercher une primitive, et c'est par là que passe toute justification de
     la solution générale. C'est aussi là qu'a été installée la notion de
     CONDITION INITIALE, qui reparaît ici sous le nom de $y_0$ et qui joue le
     même rôle : choisir une courbe parmi une infinité.

     ch. 6 (fonction logarithme népérien) : dès qu'on demande AU BOUT DE
     COMBIEN DE TEMPS un seuil est atteint — ce que font trois des sept
     tâches de la banque — il faut faire descendre $t$ de l'exposant, donc
     prendre un logarithme. Sans ce chapitre, l'élève sait calculer une
     tension à un instant donné mais reste bloqué dans l'autre sens.

     Le chapitre 1 (exponentielle) n'est PAS déclaré séparément : il est déjà
     un prérequis du chapitre 6, et le déclarer une seconde fois alourdirait
     la liste sans rien ajouter. Le cahier des charges demande les prérequis
     RÉELS, pas la fermeture transitive. */
  prerequis: [2, 6],

  /* Rang conseillé (2026-09-14) : rang 10.

     Ce chapitre est un chapitre de SYNTHÈSE, et il gagne à le rester : il
     mobilise la dérivation (rang 5), l'exponentielle (rang 7), les
     primitives (rang 8) et le logarithme (rang 9), et il ne demande rien
     qui vienne après. Le placer au rang 10 le met exactement là où tous ses
     outils sont disponibles.

     Le LIVRE le range en chapitre 3, ce qui est un rangement par domaine et
     non un conseil d'enseignement : le traiter en troisième position
     obligerait à admettre la solution exponentielle sans que l'élève ait
     jamais rencontré l'exponentielle, et à renoncer à toute question de
     durée faute de logarithme. */
  rangConseille: 10,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse ».
  attendus: [
    "Reconnaître une équation différentielle du premier ordre et vérifier qu'une fonction en est solution",
    "Déterminer la solution générale d'une équation de la forme y' = ay + b",
    "Déterminer la solution vérifiant une condition initiale donnée",
    "Interpréter la constante de temps d'un système évoluant vers un état d'équilibre",
    "Modéliser une évolution dont la vitesse dépend de l'écart à une valeur cible"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Les équations différentielles du premier ordre $y' = ay + b$, leur solution générale et " +
        "la détermination de la solution vérifiant une condition initiale sont au programme de " +
        "terminale, enseignement de spécialité.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord, et c'est le point principal : ce chapitre est écrit dans le vocabulaire de " +
        "l'<strong>électrocinétique</strong>. La forme canonique retenue est " +
        "$\\tau y' + y = y_\\infty$, la constante de temps s'appelle $\\tau$, et l'exemple comme le " +
        "problème portent sur un circuit RC. Le programme de mathématiques, lui, écrit " +
        "$y' = ay + b$ et ne nomme jamais $\\tau$. Les deux écritures sont équivalentes — on passe " +
        "de l'une à l'autre par $a = -\\frac{1}{\\tau}$ et $b = \\frac{y_\\infty}{\\tau}$ — mais un " +
        "élève qui rencontrera $y' = ay + b$ au baccalauréat doit avoir vu ce lien " +
        "<strong>explicitement écrit au tableau</strong>. Il ne l'est nulle part dans le chapitre, " +
        "et c'est la première chose à ajouter. La sixième tâche de la banque (« un modèle de " +
        "production s'écrit $\\tau y' + y = \\ldots$ ») et la quatrième question de l'évaluation " +
        "ont été conçues pour préparer ce passage, en détachant l'équation de tout contexte " +
        "électrique.<br/><br/>" +
        "Ensuite le <strong>circuit RC</strong> lui-même : condensateur, capacité, force " +
        "électromotrice relèvent de la physique-chimie de terminale. La coordination entre les deux " +
        "enseignements est un vrai atout ici, mais en mathématiques seules on gagnera à traiter " +
        "d'abord la tâche de refroidissement (loi de Newton), qui ne suppose aucun prérequis de " +
        "physique et qui est le phénomène sur lequel ouvre le « Découvrir ».<br/><br/>" +
        "Enfin la <strong>convention des $5\\tau$</strong>, qui n'est pas un résultat mathématique " +
        "mais un usage d'ingénieur. Elle mérite d'être présentée comme telle : la valeur finale " +
        "n'est jamais atteinte, et l'on convient de considérer le transitoire terminé quand l'écart " +
        "résiduel passe sous $1\\%$. Présentée comme une règle, elle devient une des choses que les " +
        "élèves récitent sans savoir d'où elles sortent.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
     y répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous
       ont tous été vérifiés contre le tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions plafonnées à 3), le 2026-09-14. */
  erreurs: [
    {
      titre: "Prendre $\\tau$ pour la durée de la charge",
      eleve: "Interrogé sur le temps que met un condensateur à se charger avec $\\tau = 2$ s, " +
             "l'élève répond « $2$ secondes ». À $t = 2$ s, la tension n'est en réalité qu'à " +
             "$63{,}2\\%$ de sa valeur finale.",
      cause: "Le mot « constante de temps » se lit comme « durée du phénomène » : c'est un temps, " +
             "il est associé au système, l'élève en conclut très raisonnablement que c'est LE " +
             "temps du système.<br/><br/>" +
             "Rien dans le nom ne dit ce que $\\tau$ mesure vraiment, et la valeur $63{,}2\\%$ — " +
             "qui n'est ni $50$, ni $100$, ni un nombre rond — n'aide pas : elle ressemble à une " +
             "constante arbitraire de plus, alors qu'elle est simplement $1 - e^{-1}$.",
      remede: "Ne pas commencer par corriger le chiffre : l'élève retiendra « $63$ et pas $100$ » " +
              "sans savoir pourquoi, et l'oubliera. Donner d'abord à $\\tau$ une définition qu'on " +
              "peut VOIR.<br/><br/>" +
              "C'est l'objet du premier schéma secondaire du cours (« La tangente à l'origine " +
              "rencontre l'asymptote exactement à $t = \\tau$ »). On y trace la tangente au départ, " +
              "on la prolonge, et elle coupe la valeur finale précisément en $\\tau$. La phrase à " +
              "faire dire : <strong>$\\tau$ est le temps qu'il faudrait si le système gardait sa " +
              "vitesse de départ</strong>. Or il ne la garde pas — il ralentit — donc il lui faut " +
              "plus longtemps. L'écart entre la droite et la courbe est, littéralement, le " +
              "retard.<br/><br/>" +
              "La propriété se démontre en deux lignes et vaut la peine d'être faite en classe : " +
              "$y'(0) = \\dfrac{E}{\\tau}$, donc une droite partant de $0$ avec cette pente atteint " +
              "$E$ au bout de $\\dfrac{E}{E/\\tau} = \\tau$. Elle est exacte pour tout système, et " +
              "c'est ainsi qu'on mesure $\\tau$ au laboratoire.<br/><br/>" +
              "Le $63{,}2\\%$ cesse alors d'être un nombre à retenir : c'est ce qu'on lit sur la " +
              "courbe au moment où la droite, elle, a déjà fini.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 1
         demande la tension à un instant qui n'est PAS $\tau$ — le rapport
         $t/\tau$ y vaut 0,5, 1,5, 2 ou 3 selon le tirage. L'élève est donc
         obligé de calculer l'exponentielle au lieu de récupérer un
         pourcentage mémorisé, ce qui est exactement le geste manquant. La
         banque d'origine ne demandait QUE la valeur à $\tau$, c'est-à-dire
         qu'elle entretenait la confusion au lieu de la lever. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Multiplier les kilo-ohms par les micro-farads sans convertir",
      eleve: "Pour $R = 4{,}7$ kΩ et $C = 470$ μF, l'élève écrit $\\tau = 4{,}7 \\times 470 = 2209$ " +
             "et annonce $2209$ secondes, soit plus de trente-six minutes. La valeur correcte est " +
             "$2{,}209$ s.",
      cause: "La formule $\\tau = RC$ est visuellement si simple qu'elle ne signale aucune " +
             "précaution : trois lettres, une multiplication. Les préfixes, eux, sont dans " +
             "l'énoncé et pas dans la formule, et rien ne les relie.<br/><br/>" +
             "L'élève ne néglige d'ailleurs pas les unités par principe : il ne les voit pas comme " +
             "faisant partie du calcul. Et le résultat obtenu n'a rien d'absurde en soi — $2209$ " +
             "est un nombre — tant qu'on ne se demande pas ce qu'il représente.",
      remede: "Faire du <strong>test de plausibilité</strong> le premier geste, avant la " +
              "conversion : « une alarme qui met trente-six minutes à s'armer, est-ce que ça " +
              "existe ? ». Un ordre de grandeur mal placé se repère plus vite qu'une erreur de " +
              "conversion, et il conduit à la chercher.<br/><br/>" +
              "Donner ensuite une règle de calcul mental qui évite la conversion plutôt que de la " +
              "répéter : les préfixes se multiplient aussi, et $\\text{kilo} \\times \\text{micro} " +
              "= 10^{3} \\times 10^{-6} = 10^{-3}$, c'est-à-dire <strong>milli</strong>. Donc des " +
              "kΩ multipliés par des μF donnent directement des <strong>millisecondes</strong>. " +
              "Ici : $4{,}7 \\times 470 = 2209$ ms, soit $2{,}2$ s. Le calcul est le même, mais on " +
              "n'a plus rien à convertir.<br/><br/>" +
              "Cette règle se généralise, et c'est ce qui la rend rentable : nano-farads et " +
              "kilo-ohms donnent des microsecondes, méga-ohms et micro-farads donnent des " +
              "secondes. Faire construire le petit tableau une fois pour toutes.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 2
         demande $\tau$ pour $R = 4,7$ kΩ et $C = 470$ μF, c'est-à-dire
         exactement les valeurs citées ci-dessus. Son corrigé fait apparaître
         la puissance $10^{3-6}$ en toutes lettres, et son indication donne
         la règle des préfixes. Tâche créée ce jour : la banque d'origine
         calculait bien $\tau$, mais dans le corrigé seulement — la réponse
         demandée était la tension, si bien que l'élève pouvait se tromper
         de trois ordres de grandeur sans que rien ne le lui dise. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Appliquer la formule de charge à une décharge",
      eleve: "Pour un condensateur chargé à $15$ V qui se décharge, avec $\\tau = 2$ s, l'élève " +
             "écrit $U_C(2) = 15\\left(1 - e^{-1}\\right) \\approx 9{,}48$ V. La bonne réponse est " +
             "$15\\,e^{-1} \\approx 5{,}52$ V : il a donné la tension qui a <strong>disparu</strong> " +
             "au lieu de celle qui reste.",
      cause: "$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ est la formule affichée partout dans le " +
             "chapitre : dans le formulaire, dans l'exemple, dans le schéma principal. Elle " +
             "s'impose comme <strong>la</strong> formule du chapitre, alors qu'elle n'en est qu'un " +
             "cas particulier — celui où la valeur finale est $E$ et la valeur initiale $0$.<br/><br/>" +
             "L'élève n'a donc pas mémorisé une formule fausse : il a mémorisé la bonne, pour le " +
             "mauvais cas.",
      remede: "Remonter à la forme générale, qui contient les deux cas et qu'on peut lire : " +
              "$y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$. Faire identifier les deux valeurs " +
              "AVANT d'écrire quoi que ce soit — « d'où part-on ? où va-t-on ? » — et faire " +
              "constater que la formule du cours en découle : avec $y_0 = 0$ et " +
              "$y_\\infty = E$, on retrouve $E - Ee^{-t/\\tau} = E(1 - e^{-t/\\tau})$.<br/><br/>" +
              "En décharge, les deux valeurs s'échangent : $y_0 = E$ et $y_\\infty = 0$, d'où " +
              "$U_C(t) = E\\,e^{-t/\\tau}$, sans le « $1$ moins ».<br/><br/>" +
              "Installer un contrôle immédiat, qui ne demande aucun calcul : <strong>remplacer $t$ " +
              "par $0$</strong>. Si l'expression écrite ne redonne pas la valeur de départ, elle " +
              "est fausse. Ici, $15(1 - e^{0}) = 0$ : le condensateur serait vide au départ, ce que " +
              "l'énoncé contredit. Ce test attrape l'erreur en trois secondes, et il fonctionne " +
              "aussi pour le refroidissement, le remplissage, et tous les cas où la valeur finale " +
              "n'est pas nulle.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 6
         est une DÉCHARGE, avec une valeur de départ explicite (« chargé à 15
         V ») et une valeur finale nulle. Son indication rappelle que la
         forme générale se réduit ici à une exponentielle seule. Tâche créée
         ce jour : la décharge figurait au quiz et au récapitulatif du
         chapitre, mais aucun exercice ne la faisait travailler. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Rester bloqué quand c'est la DURÉE qui est l'inconnue",
      eleve: "On demande au bout de combien de temps la tension atteint $90\\%$ de sa valeur " +
             "finale, avec $\\tau = 0{,}5$ s. L'élève répond $0{,}45$ s — il a multiplié $\\tau$ " +
             "par $0{,}9$ — ou bien il ne répond pas. La valeur correcte est $1{,}15$ s.",
      cause: "Toutes les questions qu'il a traitées jusque-là allaient dans le même sens : on donne " +
             "un instant, on calcule une valeur. Ici on inverse, et l'inconnue se retrouve " +
             "<strong>dans l'exposant</strong> — position où aucun de ses gestes habituels " +
             "n'opère.<br/><br/>" +
             "La réponse $0{,}45$ n'est d'ailleurs pas absurde : elle applique une " +
             "proportionnalité, réflexe massivement installé et qui marche presque partout " +
             "ailleurs. C'est l'exponentielle qui ne s'y prête pas.",
      remede: "Faire d'abord tomber la proportionnalité par l'absurde, en deux questions : si " +
              "$90\\%$ demandaient $0{,}9\\,\\tau$, alors $100\\%$ demanderaient $\\tau$ — or on " +
              "sait qu'à $\\tau$ on n'est qu'à $63\\%$. La contradiction est immédiate et l'élève " +
              "la voit seul.<br/><br/>" +
              "Poser ensuite l'ordre des gestes, le même que celui du chapitre 6 et qu'il vaut " +
              "mieux ne pas réinventer : <strong>isoler l'exponentielle</strong>, <strong>prendre " +
              "le logarithme des deux membres</strong>, <strong>isoler $t$</strong>. La première " +
              "étape est celle qu'on saute, et sans elle rien ne marche.<br/><br/>" +
              "Faire enfin construire un petit tableau de repères, à garder : $63\\%$ à $\\tau$, " +
              "$86\\%$ à $2\\tau$, $95\\%$ à $3\\tau$, $99{,}3\\%$ à $5\\tau$. Ces quatre nombres " +
              "sont ceux du deuxième schéma secondaire du cours, et ils donnent un encadrement " +
              "avant tout calcul : ici, $90\\%$ est entre $2\\tau$ et $3\\tau$, donc la réponse est " +
              "entre $1$ et $1{,}5$ s. Un élève qui pose cet encadrement élimine d'emblée le " +
              "$0{,}45$.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 7
         demande au bout de combien de secondes la tension atteint un
         pourcentage donné, avec $\tau = 0,5$ s. Son corrigé sépare les trois
         gestes en trois lignes. Tâche créée ce jour ; la banque d'origine
         n'allait jamais dans ce sens-là. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 choisir, parmi quatre écritures, celle qui traduit « la vitesse de
        remplissage est proportionnelle au volume restant ». Aucune formule
        n'est rappelée : l'élève doit reconnaître la dérivée, l'écart à la
        cible et la proportionnalité. C'est « modéliser ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant de
        calculer $\tau = RC$, calcul désormais porté par la question 2.
     Q2 calculer $\tau = RC$ avec la conversion kΩ vers Ω et μF vers F :
        donc « calculer ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant de
        reconnaître la valeur $63{,}2\%$ parmi quatre pourcentages, ce qui
        relevait de la mémoire et non du calcul.
     Q3 comparer deux circuits de constantes de temps différentes, SANS
        calculer aucune tension. L'élève passe de la forme de la solution
        (où $\tau$ n'apparaît qu'à l'exposant) à une conclusion sur la
        rapidité et sur la valeur finale : c'est « raisonner ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant
        $U_C(2)$ pour $E = 12$ V et $\tau = 2$ s, un troisième calcul.
     Q4 déterminer la température d'un four après une heure, à partir d'un
        relevé à trente minutes. L'élève doit décider que c'est l'ÉCART à la
        pièce qui décroît exponentiellement, et non la température : c'est
        le choix de modèle qui fait toute la question. C'est « modéliser ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant après
        combien de $\tau$ le régime permanent est atteint, c'est-à-dire une
        convention à réciter.
     Q5 calculer $y(3)$ pour $y(t) = 5(1 - e^{-t/3})$ : donc « calculer ».

     « Chercher », « représenter » et « communiquer » ne sont PAS déclarées
     ici : aucune des cinq questions ne demande d'explorer une piste sans
     méthode donnée, de lire ou produire une représentation graphique, ni de
     juger un énoncé produit par quelqu'un. Les trois compétences sont
     portées par d'autres chapitres du niveau, où les énoncés ont été écrits
     pour cela. */
  competences: {
    evaluation: ["modéliser", "calculer", "raisonner", "modéliser", "calculer"]
  }
};
