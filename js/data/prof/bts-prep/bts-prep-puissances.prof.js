/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-puissances.prof.js
   Fiche professeur du chapitre « Puissances de 10 & Notation Scientifique »
   (remise à niveau BTS), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CHAPITRE STRUCTURANT DU RECUEIL. C'est le seul dont deux autres fiches
   déclarent dépendre : le chapitre 7 (Logarithmes, le pilote) et le chapitre
   11 (Conversions). Le chapitre 9 (SI) en dépend aussi. Son rang conseillé
   n'est donc pas indifférent : il doit rester bas.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 3. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. CINQ MOULES parmi les douze numérotés :
     - résistance d'un câble, $R = \rho L/S$ avec S en mm² : exercices 1, 9, 12 ;
     - écrire un nombre en notation scientifique, donner $n$ : exercices 2 et 7 ;
     - produit de deux puissances, donner l'exposant       : exercices 3, 6, 11 ;
     - convertir un préfixe SI vers l'unité de base        : exercices 4 et 8 ;
     - convertir une surface ou un volume (cm², mm³)       : exercices 5 et 10.
   Trois exercices sur le premier moule et trois sur le troisième : le tirage
   est ici plus déséquilibré qu'ailleurs, ce qui est plutôt une chance —
   le moule « résistance de câble » est celui où toutes les erreurs du
   chapitre se composent en une seule tâche.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-puissances"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     AUCUN PRÉREQUIS, et c'est une décision structurante pour tout le recueil.
     Trois autres chapitres dépendent de celui-ci (7 Logarithmes, 9 SI,
     11 Conversions) : lui donner un prérequis reculerait mécaniquement les
     trois. Or rien ne l'exige. Les douze exercices numérotés demandent
     d'additionner ou de soustraire des exposants, de déplacer une virgule et
     de connaître les préfixes — aucune isolation littérale, aucune équation,
     aucune fonction.

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Calcul littéral) : les exercices 1, 9 et 12 appliquent
       $R = \rho L/S$, ce qui ressemble à une formule technique à manipuler.
       Mais la formule est donnée dans le sens du calcul direct : on substitue
       et on divise, il n'y a rien à isoler. Écarté.
     - ch. 9 (Système International) : c'est le chapitre jumeau, et le
       recouvrement est réel — les préfixes SI y sont redéfinis (D3 ici, D3
       là-bas). Mais la dépendance, si elle existait, irait dans l'autre sens :
       le chapitre 9 suppose les puissances de dix, pas l'inverse. En faire un
       prérequis créerait un cycle. Écarté fermement.
     - ch. 3 (Proportionnalité) : aucun lien opératoire.
     Aucun autre candidat sérieux. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 4, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 4 est ici plus contraint qu'ailleurs, parce que TROIS chapitres
     s'appuient sur celui-ci : le 7 (Logarithmes) le déclare en prérequis, le 9
     (SI) et le 11 (Conversions) le déclarent aussi. Son rang doit donc rester
     strictement inférieur à 7, 9 et 11 — ce que 4 respecte largement. Le livre
     le range en chapitre 4 : les deux ordres coïncident, la colonne « Chap. »
     de la progression ne portera pas le triangle d'alerte. Un enseignant
     pressé qui ne traiterait qu'un seul chapitre de calcul devrait choisir
     celui-ci : c'est le seul dont l'absence bloque trois autres. */
  rangConseille: 4,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Écrire un nombre technique en notation scientifique et en identifier l'exposant",
    "Multiplier et diviser des puissances de dix en additionnant ou soustrayant les exposants",
    "Convertir une grandeur avec préfixe SI vers l'unité de base, y compris pour une surface ou un volume"
  ],

  note: "Puissances de dix, notation scientifique, préfixes SI et leurs règles de calcul : le " +
        "chapitre installe le vocabulaire numérique dans lequel s'écrivent toutes les grandeurs " +
        "techniques, de la résistivité du cuivre ($1{,}7 \\times 10^{-8}$ $\\Omega$·m) à la " +
        "puissance d'une centrale.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier — mais ici, il compte plus " +
        "qu'ailleurs.</strong> Dans une remise à niveau, on pioche : l'ordre des quatorze " +
        "chapitres décrit des <strong>dépendances techniques</strong>, pas un déroulé annuel. Ce " +
        "chapitre-ci est <strong>sans prérequis</strong>, mais <strong>trois autres dépendent de " +
        "lui</strong> : le chapitre 7 (Logarithmes), le chapitre 9 (Système International) et le " +
        "chapitre 11 (Conversions). Si vous ne deviez traiter qu'un seul chapitre de calcul " +
        "numérique avec un groupe, ce serait celui-ci — c'est le seul dont l'absence en bloque " +
        "trois autres. Notez un lien non déclarable dans l'autre sens : le chapitre 9 redéfinit " +
        "les mêmes préfixes SI ; les traiter à la suite fait gagner du temps, mais l'ordre est " +
        "imposé (les puissances d'abord).<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Les douze exercices numérotés ne contiennent aucune " +
        "<strong>division</strong> de puissances de dix : les trois exercices de calcul (3, 6, 11) " +
        "sont tous des PRODUITS, donc tous des additions d'exposants. Or la règle qui casse est " +
        "presque toujours celle de la soustraction, et c'est elle que l'évaluation retient à sa " +
        "question 2. De même, aucun exercice ne présente d'exposant négatif dans un " +
        "<strong>dénominateur</strong>. Si vous voulez faire travailler la division, empruntez à " +
        "l'évaluation ou composez deux énoncés : c'est l'angle mort du chapitre.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI. Le moule « résistance de câble » (exercices 1,
     9, 12) est particulièrement précieux : il compose une conversion de mm²,
     une division de puissances et un résultat à trois chiffres significatifs,
     donc il déclenche trois des quatre erreurs à lui seul. On l'utilise donc
     deux fois, sur deux tirages différents choisis pour ce qu'ils révèlent.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Le champ `cause` explique
     toujours d'où vient la procédure fausse et pourquoi elle a pu marcher
     ailleurs. */
  erreurs: [
    {
      titre: "Additionner les exposants dans une division (ou les multiplier dans un produit)",
      eleve: "Sur $\\dfrac{6 \\times 10^{-4}}{3 \\times 10^{-7}}$, l'élève écrit $2 \\times 10^{-11}$ " +
             "au lieu de $2 \\times 10^{3}$. Ou, sur $(2 \\times 10^{6}) \\times (3 \\times 10^{3})$, " +
             "il annonce $10^{18}$ au lieu de $10^{9}$.",
      cause: "Deux règles voisines coexistent — on ADDITIONNE les exposants pour un produit, on les " +
             "SOUSTRAIT pour un quotient — et rien dans leur écriture ne dit laquelle va avec " +
             "quoi. L'élève retient qu'« on fait quelque chose aux exposants » et choisit " +
             "l'opération la plus disponible, qui est presque toujours l'addition. La confusion " +
             "avec $(10^a)^b = 10^{ab}$ ajoute une troisième règle au même endroit de la mémoire. " +
             "S'y ajoute un piège de signe : soustraire $-7$, c'est ajouter $7$, ce qui donne " +
             "l'impression qu'on a « additionné » alors qu'on a bien soustrait. Un adulte qui a " +
             "perdu l'aisance sur les relatifs bute donc deux fois sur la même ligne, et il n'a " +
             "aucun moyen de savoir laquelle des deux fautes il commet.",
      remede: "Faire <strong>reconstruire la règle sur un cas trivial</strong> plutôt que la " +
              "réciter, parce que c'est cela qui la rend indestructible : $10^3 / 10^2$, c'est " +
              "$1000 / 100 = 10$, donc $10^1$, donc on a bien SOUSTRAIT. Dix secondes, aucune " +
              "mémorisation, et la règle est retrouvée à volonté même dans dix ans.<br/><br/>" +
              "Traiter séparément le <strong>signe de l'exposant du dénominateur</strong>, qui est " +
              "l'autre moitié du problème : $10^{-4} / 10^{-7} = 10^{-4-(-7)} = 10^{+3}$. Faire " +
              "écrire la parenthèse, toujours. C'est laid, c'est lent, et cela supprime " +
              "l'intégralité des erreurs de signe.<br/><br/>" +
              "Installer enfin le <strong>contrôle par l'ordre de grandeur</strong>, qui ne coûte " +
              "rien : diviser un très petit nombre par un nombre encore plus petit donne un " +
              "GRAND nombre. $10^{-4}$ divisé par $10^{-7}$ ne peut pas être minuscule. En " +
              "métrologie, c'est exactement ce raisonnement qui permet de repérer une erreur de " +
              "calibre avant de valider une mesure.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 3) :
         l'exercice 6 demande l'exposant de (5 x 10^-6) x (4 x 10^-3),
         réponse -8. Le tirage est le plus diagnostique des trois exercices de
         calcul du chapitre, et pour une raison précise : le coefficient
         5 x 4 = 20 DÉPASSE 10, donc la réponse n'est pas -9 (la somme brute
         des exposants) mais -8, après renormalisation en 2 x 10^-8. L'élève
         qui additionne mécaniquement sans regarder le coefficient écrit -9 ;
         celui qui multiplie les exposants écrit 18. Trois réponses possibles
         et distinctes. Les exercices 3 (4e-3 x 2e3, réponse 0) et 11
         (2e6 x 3e3, réponse 9) n'ont pas ce dépassement : sur eux,
         l'addition naïve donne la bonne réponse et l'erreur reste invisible.
         C'est ce qui départage. Attention toutefois : aucun des trois n'est
         une DIVISION — voir la note sur l'angle mort du chapitre. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Convertir une surface ou un volume comme une longueur",
      eleve: "Pour $S = 20$ cm², l'élève écrit $20 \\times 10^{-2} = 0{,}2$ m² au lieu de " +
             "$20 \\times 10^{-4} = 0{,}002$ m². Sur $2$ mm³, il annonce $2 \\times 10^{-3}$ m³ au " +
             "lieu de $2 \\times 10^{-9}$.",
      cause: "L'élève applique une règle qu'il maîtrise parfaitement — 1 cm = $10^{-2}$ m — à un " +
             "objet auquel elle ne s'applique pas telle quelle. Ce n'est pas une lacune : c'est " +
             "une extension de bon sens d'une connaissance solide. La difficulté réelle est " +
             "conceptuelle et rarement énoncée : le préfixe porte sur la LONGUEUR, et une surface " +
             "contient deux longueurs, un volume trois. Le facteur se retrouve donc élevé au " +
             "carré ou au cube, alors que rien dans la notation « cm² » ne le signale — le carré " +
             "semble porter sur l'unité, pas sur le facteur de conversion. Pour un adulte, " +
             "l'erreur est d'autant plus tenace qu'elle est cohérente avec tout ce qu'il sait.",
      remede: "Faire <strong>écrire la conversion au niveau de la longueur AVANT de l'élever</strong>, " +
              "en une ligne visible : $1$ cm $= 10^{-2}$ m, donc $1$ cm² $= (10^{-2})^2 = 10^{-4}$ " +
              "m². La ligne intermédiaire est tout le remède — c'est elle que les élèves sautent, " +
              "et c'est en la sautant qu'ils perdent l'exposant.<br/><br/>" +
              "Ancrer ensuite un <strong>repère mémorisable</strong> parce qu'il est concret : un " +
              "mètre carré contient $10\\,000$ centimètres carrés, pas $100$ — c'est visible sur " +
              "un carrelage de $10\\times10$ cm. Une fois cette image installée, l'élève ne peut " +
              "plus se tromper de deux ordres de grandeur, et il n'a rien eu à apprendre.<br/><br/>" +
              "Nommer enfin la <strong>conséquence de terrain</strong>, qui est la plus chère du " +
              "chapitre : une section de câble convertie avec deux ordres de grandeur d'erreur " +
              "fait sortir une résistance cent fois trop grande ou trop petite. Sur un calcul de " +
              "chute de tension en installation, c'est un câble de $2{,}5$ mm² choisi à la place " +
              "d'un $25$ mm² — un défaut qui ne se voit qu'à l'échauffement, en charge, des mois " +
              "plus tard.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 10 demande de
         convertir 2 mm³ en m³, réponse 2e-9 m³. Choisi plutôt que l'exercice
         5 (20 cm² -> 0,002 m²) pour une raison décisive : sur un VOLUME,
         l'écart entre l'erreur (10^-3) et la bonne réponse (10^-9) est de six
         ordres de grandeur, donc absolument impossible à ne pas voir à la
         correction. Sur le 5, l'écart n'est que de deux ordres (0,2 contre
         0,002) et les deux nombres restent « plausibles » pour une section :
         l'élève peut valider son erreur sans sourciller. L'exercice 5 est
         néanmoins le meilleur SECOND support, parce que les cm² sont l'unité
         réellement rencontrée en section de câble, et parce qu'il fait
         travailler le carré après le cube. Les donner dans cet ordre —
         10 puis 5 — installe la règle générale avant son cas d'usage. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Déplacer la virgule dans le mauvais sens en notation scientifique",
      eleve: "Pour $0{,}000\\,009\\,1$, l'élève annonce $n = +6$ au lieu de $-6$. Ou, sur $6\\,700$, " +
             "il compte les chiffres au lieu des déplacements et écrit $n = 4$ au lieu de $3$.",
      cause: "La notation scientifique a été enseignée comme une procédure de comptage — « on " +
             "compte les zéros », « on compte les chiffres » — et ces deux formulations ne " +
             "donnent pas le même résultat, ni l'une ni l'autre n'étant tout à fait juste. Sur " +
             "$6\\,700$, il y a deux zéros, quatre chiffres, et l'exposant vaut $3$ : aucune des " +
             "deux recettes ne tombe dessus. Quant au signe, il repose sur une convention " +
             "arbitraire à retenir — vers la gauche ou vers la droite ? — sans appui logique. Un " +
             "adulte qui a oublié la convention et gardé la recette de comptage se trompe donc " +
             "sur les deux tableaux à la fois, et il n'a aucun moyen de s'en apercevoir.",
      remede: "Remplacer le comptage par une <strong>question sur la taille du nombre</strong>, " +
              "posée avant tout calcul : ce nombre est-il grand ou petit ? S'il est plus grand " +
              "que $10$, l'exposant est positif ; s'il est plus petit que $1$, il est négatif. La " +
              "convention devient une conséquence, elle n'a plus à être mémorisée, et le signe est " +
              "juste avant même qu'on ait compté quoi que ce soit.<br/><br/>" +
              "Faire ensuite <strong>compter les DÉPLACEMENTS de la virgule</strong>, pas les " +
              "chiffres ni les zéros : sur $6\\,700$, la virgule part d'après le dernier zéro et " +
              "vient se placer après le $6$, soit trois crans — donc $6{,}7 \\times 10^3$. C'est " +
              "un geste physique sur la feuille, pas un décompte abstrait, et il donne toujours " +
              "le bon exposant.<br/><br/>" +
              "Imposer enfin la <strong>vérification par retour</strong>, qui est gratuite : " +
              "$6{,}7 \\times 10^3$, est-ce bien $6\\,700$ ? Si le nombre reconstruit ne " +
              "ressemble pas au nombre de départ, l'exposant est faux. Dix secondes. Sur une " +
              "fiche de mesure de résistivité ou de pression, c'est le seul contrôle qui attrape " +
              "un facteur mille avant qu'il ne parte en note de calcul.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 7 demande
         l'exposant de 0,000 009 1, réponse -6. Retenu plutôt que l'exercice 2
         (6 700, réponse 3) parce qu'il diagnostique les DEUX moitiés de
         l'erreur là où le 2 n'en diagnostique qu'une. Sur le 7 : l'élève qui
         se trompe de sens écrit +6, celui qui compte les zéros après la
         virgule (cinq zéros) écrit -5, celui qui compte tous les chiffres
         décimaux (sept) écrit -7. Trois erreurs possibles, trois valeurs
         distinctes, donc un diagnostic net. Sur le 2, le nombre est grand
         donc la question du signe ne se pose pas, et seule l'erreur de
         comptage (4 au lieu de 3) peut apparaître. L'exercice 2 reste un bon
         second support, à donner après, pour vérifier le comptage sur un
         grand nombre. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Calculer sans convertir les préfixes, ou rendre un résultat dans la mauvaise unité",
      eleve: "Sur $R = \\rho L / S$ avec $\\rho = 1{,}7 \\times 10^{-8}$ $\\Omega$·m, $L = 50$ m et " +
             "$S = 1{,}5$ mm², l'élève divise par $1{,}5$ au lieu de $1{,}5 \\times 10^{-6}$ et " +
             "trouve $5{,}7 \\times 10^{-7}$ $\\Omega$ au lieu de $0{,}567$ $\\Omega$ — un million " +
             "de fois trop petit.",
      cause: "Le préfixe est perçu comme une <strong>étiquette</strong> et non comme un facteur : " +
             "« des millimètres carrés », c'est le nom de l'unité dans laquelle on travaille, pas " +
             "une multiplication à faire. Cette lecture est parfaitement fonctionnelle sur le " +
             "terrain — un électricien parle de « du 2,5 » sans jamais convertir, et il a raison, " +
             "parce que tous ses interlocuteurs utilisent la même unité. Le calcul, lui, exige " +
             "qu'on redescende en unités de base, ce qui est une exigence du CALCUL et non de " +
             "l'usage. Un alternant applique donc en cours le réflexe qui est juste en atelier. " +
             "Le lui reprocher serait doublement injuste : c'est sa compétence professionnelle " +
             "qui parle.",
      remede: "Imposer la <strong>recopie en unités de base avant toute opération</strong>, en une " +
              "colonne à part : $\\rho = 1{,}7 \\times 10^{-8}$, $L = 50$, " +
              "$S = 1{,}5 \\times 10^{-6}$. C'est l'étape 2 de la méthode du cours, et c'est celle " +
              "qu'on saute quand on est pressé. Trois lignes recopiées valent mieux qu'un " +
              "résultat faux d'un facteur $10^6$.<br/><br/>" +
              "Faire ensuite <strong>reconvertir explicitement à la fin</strong>, parce que " +
              "l'erreur symétrique existe : on calcule juste en unités de base puis on rend un " +
              "résultat sans repasser dans l'unité demandée. Quand l'énoncé demande des mΩ et " +
              "qu'on a des Ω, il reste une multiplication à faire.<br/><br/>" +
              "Ancrer enfin un <strong>ordre de grandeur de métier</strong>, qui protège mieux " +
              "que n'importe quelle règle : la résistance d'un câble d'installation se compte en " +
              "<strong>dixièmes d'ohm</strong>, jamais en microhms ni en kilohms. Un résultat de " +
              "$5{,}7 \\times 10^{-7}$ $\\Omega$ pour cinquante mètres de $1{,}5$ mm² est " +
              "absurde : ce serait un supraconducteur. Les alternants ont ce repère sans le " +
              "savoir — il suffit de le leur nommer.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         rho = 1,7e-8, L = 50 m, S = 1,5 mm² et demande R à trois chiffres
         significatifs, réponse 0,567 ohm. C'est le meilleur support du
         chapitre pour cette erreur, et de loin : la conversion de mm² en m²
         n'est PAS donnée dans l'énoncé (contrairement à la question 4 de
         l'évaluation, qui l'explicite), donc l'élève doit y penser seul.
         L'écart entre la bonne réponse et l'erreur est d'un facteur 10^6,
         impossible à manquer. Préféré à l'exercice 9 (L = 10 m, S = 4 mm²,
         réponse 0,043 ohm) parce que sur le 9 la bonne réponse est déjà
         petite, ce qui rend l'absurdité du résultat erroné moins frappante ;
         et préféré à l'exercice 12 (L = 30 m, S = 2,5 mm², réponse 0,204)
         parce que sur le 1 le résultat 0,567 tombe pile dans l'ordre de
         grandeur de métier cité dans le remède (quelques dixièmes d'ohm),
         ce qui rend le contrôle de vraisemblance parlant. Les exercices 9 et
         12 sont d'excellents seconds supports, à donner ensuite. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     CINQ questions ici — ce n'est PAS la règle du dossier (huit chapitres sur
     quatorze n'en ont que quatre, la trigonométrie en a huit). Compter.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — RÉÉCRITE le 2026-09-17. Elle demandait d'exprimer $47\,000\ \Omega$
          en kΩ : une division par $10^3$ sur un nombre rond, 1 point — la
          question la plus légère du devoir, et le doublon du geste que la Q2
          (quotient de puissances) et la Q5 (sortie en milli) refont chacune
          à leur manière.
          Elle demande maintenant de CHERCHER, parmi quatre écritures d'une
          capacité de $0{,}000\,047$ F, la seule qui soit correcte : il faut
          convertir les quatre candidates ($47$ mF, $4{,}7$ nF, $47\ \mu$F,
          $47$ MF) et écarter les trois qui se trompent de préfixe. Essayer,
          comparer, écarter : « chercher ».
          Le calcul reste nécessaire et il est quadruple là où il était
          unique : quatre conversions avant de pouvoir trancher.
          La question porte sur l'erreur 3 de cette fiche — déplacer la
          virgule dans le mauvais sens — déclinée sur les deux préfixes que
          les élèves confondent le plus, le micro et le méga ; et le
          quatrième distracteur ($47$ MF, faux d'un facteur $10^{12}$) vise
          en même temps l'erreur 4, rendre un résultat dans une unité
          absurde sans s'en apercevoir.
     Q2 — calculer $\dfrac{6 \times 10^{-4}}{3 \times 10^{-7}}$ et donner $a$.
          Application de la règle du quotient sur des nombres donnés.
          Exécution. « calculer ».
     Q3 — convertir $6$ mm² en m², parmi quatre propositions ($10^{-3}$,
          $10^{-6}$, $10^{-4}$, $10^{-9}$). Le travail n'est pas de calculer
          mais de trancher entre quatre conversions concurrentes, dont trois
          sont des extensions plausibles de la règle des longueurs. Il faut
          justifier pourquoi le facteur s'élève au carré et rejeter les
          autres. « raisonner ».
     Q4 — RÉÉCRITE le 2026-09-17. Elle demandait la résistance d'un câble
          avec la conversion de $S$ DONNÉE dans l'énoncé ($4$ mm²
          $= 4 \times 10^{-6}$ m²) : la seule difficulté conceptuelle étant
          levée par le rédacteur, il ne restait qu'à substituer, diviser et
          rendre en mΩ. Or la Q2 du même devoir fait déjà exactement ce
          quotient de puissances et la Q5 refait déjà la sortie en milli : la
          question était redondante, et elle étiquetait « calculer » une
          troisième exécution.
          Elle demande maintenant de juger le raisonnement de Yanis, qui
          ADDITIONNE les exposants dans la division ($10^{-8}/10^{-6}
          = 10^{-14}$ au lieu de $10^{-2}$) et conclut à une résistance
          « quasi nulle », et d'EXPLIQUER que la division soustrait les
          exposants : produire une explication, donc « communiquer ».
          Le calcul reste nécessaire, et plus lourd qu'avant : il faut mener
          le quotient correct ($127{,}5$ mΩ) pour mesurer l'écart d'un
          facteur $10^{12}$, vérifier que $1{,}7 \times 30 = 51$ et non $5{,}1$
          (premier distracteur), et confirmer que $1$ mm² $= 10^{-6}$ m² et
          non $10^{-3}$ (quatrième distracteur).
          La question porte désormais sur l'erreur 1 de cette fiche —
          additionner les exposants dans une division — que l'exercice 6
          travaille numériquement, jamais comme un raisonnement à corriger.
     Q5 — énergie stockée dans un condensateur, $E = \frac{1}{2}CU^2$ avec
          $C = 220\ \mu$F, résultat en mJ. La formule est donnée, mais
          l'énoncé enchaîne trois conversions que rien n'annonce (micro en
          entrée, carré sur la tension, milli en sortie) et il faut décider
          soi-même de l'ordre dans lequel les mener. C'est une chaîne de
          déductions sur les unités, pas une substitution. « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 1, raisonner 2, chercher 1,
     communiquer 1.
     « modéliser » et « représenter » ne sont PAS mobilisés : aucune question
     ne demande de traduire une situation en relation (les formules sont
     toutes fournies) ni de lire une représentation. Constat sur les cinq
     énoncés, non corrigé par complaisance.
     Les trois erreurs les plus fréquentes de cette fiche sont désormais
     évaluées chacune par une question : la 3 (sens de la virgule) en Q1, la
     2 (conversion de surface) en Q3, la 1 (exposants d'une division) en Q4. */
  competences: {
    evaluation: ["chercher", "calculer", "raisonner", "communiquer", "raisonner"]
  }
};
