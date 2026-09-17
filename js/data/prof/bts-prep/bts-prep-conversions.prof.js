/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-conversions.prof.js
   Fiche professeur du chapitre « Conversions d'Unités Techniques » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 10. 42 énoncés tirés, dont 12 numérotés et 30 en
   banque supplémentaire. SIX MOULES parmi les douze numérotés :
     - kW vers kcal/h (facteur 860)        : exercices 1 et 9 ;
     - °C vers °F                          : exercices 2 et 7 ;
     - tr/min vers rad/s                   : exercices 3 et 8 ;
     - HMT en mètres vers bar ($\rho g h$) : exercices 4 et 10 ;
     - ch vers kW (facteur 736)            : exercices 5 et 11 ;
     - m³/h vers l/min (facteur 16,67)     : exercices 6 et 12.
   Six moules, deux tirages chacun : le chapitre est parfaitement équilibré, et
   c'est l'un des plus riches du recueil en variété de FACTEURS (860, 736,
   16,67, $2\pi/60$, $\rho g$, et la formule affine du Fahrenheit). Chacune des
   quatre erreurs ci-dessous trouve donc un support réel, sans aucun `null`.
   UNE ABSENCE À SIGNALER : le cours donne les conversions kWh → MJ, kcal → J,
   BTU, tep et psi, mais AUCUN exercice ne les travaille. Dit dans la `note`.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-conversions"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 4 (Puissances de 10 & notation scientifique) : RETENU. Le chapitre
     manipule en permanence des facteurs en puissances de dix — $1$ bar
     $= 10^5$ Pa, $1$ kWh $= 3{,}6 \times 10^6$ J, le passage bar/kPa/MPa — et
     surtout l'exercice 4 calcule $\rho g h = 1000 \times 9{,}81 \times 50$ pour
     le rendre EN BAR, ce qui exige de diviser par $10^5$ sans se tromper
     d'ordre de grandeur. Un stagiaire qui n'est pas à l'aise avec les
     puissances de dix produit des pressions fausses d'un facteur mille, et il
     ne s'en aperçoit pas.

     Candidats examinés et ÉCARTÉS :
     - ch. 9 (Système International) : c'est le candidat le plus sérieux, et le
       lien est profond — la « règle du passage par le SI » énoncée dans la
       méthode d'ici EST la logique du chapitre 9, et les deux chapitres
       partagent le bar, le kWh et les km/h. Mais le chapitre 9 déclare déjà
       le chapitre 4 en prérequis, et l'essentiel de ce qui est requis ici est
       justement le chapitre 4. Le déclarer en plus alourdirait la progression
       sans rien garantir de neuf : les douze exercices d'ici se résolvent par
       un facteur multiplicatif, sans jamais décomposer une unité dérivée en
       M, L, T. Écarté au titre de la redondance — mais c'est le chapitre
       jumeau, et les traiter à la suite est fortement recommandé. La `note`
       le dit.
     - ch. 6 (Trigonométrie) : les exercices 3 et 8 utilisent $2\pi/60$, mais
       il s'agit d'un simple facteur numérique — aucun sinus, aucun angle, rien
       de trigonométrique. Écarté.
     - ch. 1 (Calcul littéral) : toutes les formules sont données dans le sens
       du calcul direct. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [4],

  /* Rang conseillé (2026-09-17) : rang 11, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 11 respecte la seule contrainte déclarée (être supérieur à 4) et
     place ce chapitre après le Système International (rang 9) et l'analyse
     dimensionnelle (rang 10), ce qui est l'ordre pédagogique naturel : on
     installe d'abord la logique des unités, on en fait un outil de
     vérification, puis on descend dans les conversions de métier — kcal/h,
     chevaux-vapeur, tours par minute — qui sont les plus dépaysantes. Le livre
     range les trois dans le même ordre : la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 11,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Convertir une pression, un débit, une puissance ou une température entre l'unité d'un catalogue et l'unité de calcul",
    "Convertir une vitesse de rotation de tours par minute en radians par seconde et l'exploiter dans un calcul de couple",
    "Traduire une hauteur manométrique en pression à l'aide de la relation hydrostatique"
  ],

  note: "Pression, débit, énergie, puissance, température, vitesse de rotation : le chapitre " +
        "rassemble les conversions dont un technicien a besoin chaque jour pour passer des unités " +
        "d'un catalogue fabricant (kcal/h, chevaux, bar, tr/min, l/min) à celles du calcul.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose les <strong>puissances de dix</strong> " +
        "acquises (chapitre 4) : sans elles, le passage des pascals aux bars produit des erreurs " +
        "d'un facteur mille invisibles. Un lien non déclarable mais important : le " +
        "<strong>chapitre 9</strong> (Système International) est le chapitre jumeau de " +
        "celui-ci — il installe la logique du « passage par le SI » que la méthode d'ici " +
        "réutilise telle quelle. Les traiter à la suite fait gagner beaucoup de temps, même si " +
        "l'un n'est pas indispensable à l'autre.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Le cours donne cinq conversions d'ÉNERGIE (kWh → MJ, kcal → J, BTU, " +
        "tep) et le psi pour les pressions, mais <strong>aucun des douze exercices numérotés ne " +
        "porte sur l'énergie</strong> ni sur le psi : les six moules tirés couvrent la puissance, " +
        "la température, la rotation, la hauteur manométrique et le débit, jamais l'énergie. " +
        "L'évaluation ne comble pas non plus. Or le kWh est l'unité la plus fréquente des " +
        "factures et des rapports d'exploitation : si vos étudiants doivent le manipuler, " +
        "empruntez au <strong>chapitre 9</strong>, dont les exercices 5 et 11 convertissent des " +
        "kW·h en mégajoules.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI : six moules bien répartis et six facteurs de
     natures différentes (multiplicatif simple, affine, irrationnel,
     physique), chaque erreur trouve un support qui la déclenche vraiment.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Sur les conversions, le conflit
     est particulier — les unités du terrain qu'ils maîtrisent (le bar, le kWh,
     le cheval) sont précisément celles que le calcul leur demande de quitter.
     Le champ `cause` en tient compte : leur habitude professionnelle n'est
     jamais traitée comme une faute. */
  erreurs: [
    {
      titre: "Multiplier au lieu de diviser (ou l'inverse) parce que le facteur est su mais pas son sens",
      eleve: "Pour convertir $50$ ch en kW, l'élève multiplie par $736$ et annonce $36\\,800$ kW au " +
             "lieu de $36{,}8$ kW. Ou, sur $9$ m³/h à passer en l/min, il divise par $16{,}67$ et " +
             "trouve $0{,}54$ l/min au lieu de $150$.",
      cause: "Le facteur est retenu — $736$, $860$, $16{,}67$ — et c'est justement parce qu'il est " +
             "retenu qu'on cesse de réfléchir au sens. Or rien dans un nombre ne dit s'il faut " +
             "multiplier ou diviser : les deux opérations sont également disponibles et " +
             "produisent toutes deux un résultat qui a l'air d'un résultat. Une mémoire de " +
             "facteur sans ancrage donne donc un coup sur deux. S'y ajoute une difficulté " +
             "spécifique à ce chapitre : les facteurs y sont NOMBREUX et de tailles très " +
             "différentes ($736$, $860$, $16{,}67$, $0{,}1047$), de sorte que le stagiaire ne " +
             "peut même pas s'appuyer sur une habitude unique. Ce n'est pas de l'étourderie : " +
             "c'est une charge de mémoire qui n'a jamais été remplacée par un raisonnement.",
      remede: "Remplacer la mémoire du facteur par la <strong>question sur la taille de " +
              "l'unité</strong>, posée en une phrase avant tout calcul : un cheval-vapeur est-il " +
              "plus grand ou plus petit qu'un kilowatt ? Il est PLUS PETIT ($736$ W contre " +
              "$1000$ W). Donc, pour la même puissance, le nombre de chevaux est PLUS GRAND que " +
              "le nombre de kilowatts. $50$ ch doit donner moins de $50$ kW. La règle générale, " +
              "qui vaut pour toutes les conversions du recueil : <strong>unité plus grande, " +
              "nombre plus petit</strong>.<br/><br/>" +
              "Faire écrire ensuite la conversion comme une <strong>multiplication par un</strong>, " +
              "ce qui est la méthode 1 du cours et la seule qui soit auto-vérifiante : " +
              "$50\\ \\text{ch} \\times \\dfrac{736\\ \\text{W}}{1\\ \\text{ch}}$. Les « ch » se " +
              "simplifient visiblement, il reste des watts, et le sens de l'opération est " +
              "imposé par la simplification au lieu d'être choisi.<br/><br/>" +
              "Ancrer enfin un <strong>repère de métier par famille</strong> : un moteur de " +
              "voiture de $100$ ch fait environ $75$ kW, un groupe électrogène de $300$ ch fait " +
              "environ $220$ kW. Ces ordres de grandeur traînent sur toutes les plaques " +
              "signalétiques, et un alternant les a déjà vus — les lui nommer transforme une " +
              "conversion en reconnaissance.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 10) :
         l'exercice 5 donne P = 50 ch à convertir en kW, réponse 36,8 kW. Le
         tirage est le plus diagnostique du chapitre pour cette erreur : la
         bonne réponse (36,8) et l'erreur (36 800) diffèrent d'un facteur
         exactement 1000, donc la faute se lit d'un coup à la correction et se
         NOMME (« il a multiplié au lieu de diviser, et il a oublié le
         kilo »). Surtout, 36 800 kW est absurde pour un compresseur mobile —
         c'est la puissance d'une petite centrale — donc le contrôle de
         vraisemblance du remède tranche sans calcul. Préféré à l'exercice 11
         (150 ch -> 110,4 kW) parce que sur le 11 la proximité entre 150 et
         110 rend l'erreur de SENS moins visible : un élève qui divise par
         736 sans convertir en kW trouve 0,2, un nombre si petit qu'il le
         corrigera au flair. Le 5 force le raisonnement. L'exercice 6
         (9 m³/h -> 150 l/min) illustre la même erreur dans l'autre sens
         (multiplier là où on croit devoir diviser) et fait un excellent
         second support : les donner en paire installe la règle générale. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Traiter la conversion des degrés Fahrenheit comme une simple multiplication",
      eleve: "Pour $50\\ °$C, l'élève annonce $90\\ °$F (il a seulement multiplié par $1{,}8$) au " +
             "lieu de $122\\ °$F. Ou il ajoute $32$ sans multiplier et trouve $82\\ °$F.",
      cause: "Toutes les autres conversions du chapitre — et de tout le recueil — sont des " +
             "MULTIPLICATIONS par un facteur. Une seule ne l'est pas : le Fahrenheit, qui est " +
             "une transformation affine parce que son zéro n'est pas le même que celui du " +
             "Celsius. L'élève applique donc le modèle unique qu'il a construit sur toutes les " +
             "autres conversions, ce qui est une généralisation raisonnable et non une " +
             "négligence. La difficulté profonde est d'ailleurs conceptuelle et jamais énoncée : " +
             "une VALEUR de température et un ÉCART de température ne se convertissent pas " +
             "pareil — le piège du cours le signale pour le couple °C/K, mais le cas Fahrenheit " +
             "est plus déroutant encore puisqu'il combine un changement d'origine ET un " +
             "changement de pas.",
      remede: "Faire <strong>nommer les deux opérations séparément</strong>, dans l'ordre et à voix " +
              "haute : « je change d'abord la TAILLE du degré ($\\times 1{,}8$), puis je change " +
              "l'ORIGINE de l'échelle ($+32$) ». Deux gestes de natures différentes ; les " +
              "distinguer est tout le remède, parce que l'oubli porte toujours sur l'un des deux " +
              "et jamais sur les deux.<br/><br/>" +
              "Ancrer ensuite <strong>deux points de contrôle</strong> que tout le monde " +
              "connaît : $0\\ °$C $= 32\\ °$F (la glace fond) et $100\\ °$C $= 212\\ °$F (l'eau " +
              "bout). Une formule qui ne redonne pas ces deux valeurs est fausse — et le premier " +
              "point suffit à démasquer l'oubli du $+32$, le second à démasquer l'oubli du " +
              "$\\times 1{,}8$.<br/><br/>" +
              "Nommer enfin la <strong>conséquence de terrain</strong>, qui devient fréquente : " +
              "les documentations d'équipements américains — compresseurs, groupes froids, " +
              "automates — donnent leurs plages de fonctionnement en °F. Lire « $122\\ °$F » " +
              "comme « $90\\ °$C » sur une consigne de four ou une limite d'huile, c'est se " +
              "tromper de plus de trente degrés sur un seuil de sécurité.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         T = 50 °C à convertir en °F, réponse 122 °F. Le tirage est le plus
         diagnostique des deux du moule parce que les trois réponses possibles
         sont nettement distinctes et toutes plausibles pour une consigne de
         four : 122 (correct), 90 (facteur seul), 82 (décalage seul). La
         correction identifie donc immédiatement LAQUELLE des deux opérations
         a été oubliée, ce qui oriente la remédiation. Préféré à l'exercice 7
         (60 °C -> 140 °F) parce que sur le 7, le facteur seul donne 108 et le
         décalage seul 92 : trois nombres également distincts, mais 140 est
         une valeur si ronde qu'un élève peut la reconnaître de mémoire (c'est
         une température de consigne usuelle en process). Le 2 exige vraiment
         le calcul. L'exercice 7 fait un bon second support, et S4
         (100 °C -> 212 °F) de la banque supplémentaire est le point de
         contrôle cité dans le remède — le donner en vérification est
         particulièrement efficace. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre tours par minute et radians par seconde, ou oublier le $2\\pi$",
      eleve: "Pour un moteur à $3000$ tr/min, l'élève divise seulement par $60$ et annonce " +
             "$50$ rad/s au lieu de $314{,}2$. Ou il multiplie par $2\\pi$ sans diviser par $60$ " +
             "et trouve $18\\,850$.",
      cause: "La conversion combine DEUX changements en une seule formule — l'unité de temps " +
             "(minutes vers secondes) et l'unité d'angle (tours vers radians) — et l'élève n'en " +
             "fait qu'un, presque toujours celui qui lui est familier : la division par $60$. " +
             "C'est logique, parce que le passage minute/seconde est le seul des deux qu'il " +
             "pratique depuis l'enfance. Le $2\\pi$, lui, n'a aucun ancrage : personne sur un " +
             "site industriel ne parle en radians par seconde, alors que les tours par minute " +
             "sont écrits sur toutes les plaques moteur. Le radian est une unité purement " +
             "calculatoire, et une unité qu'on n'emploie jamais ne se retient pas par l'usage. " +
             "Ce n'est pas une lacune d'attention : c'est une grandeur sans existence " +
             "professionnelle.",
      remede: "Faire <strong>décomposer la conversion en deux gestes nommés</strong>, dans l'ordre " +
              "et écrits : « $3000$ tours par minute, c'est $50$ tours par SECONDE ; et $50$ " +
              "tours par seconde, c'est $50 \\times 2\\pi$ radians par seconde ». Chacun des deux " +
              "passages se justifie tout seul, aucune formule n'est mémorisée, et l'oubli " +
              "devient impossible parce qu'il manquerait une phrase.<br/><br/>" +
              "Ancrer ensuite le <strong>repère du 1500 tr/min</strong>, qui est celui de tous " +
              "les moteurs asynchrones quadripôles : $1500$ tr/min donne environ $157$ rad/s. " +
              "Autrement dit, la valeur en rad/s est à peu près le DIXIÈME de la valeur en " +
              "tr/min — un contrôle mental instantané ($3000 \\to 314$, $1000 \\to 105$) qui " +
              "rejette $50$ comme $18\\,850$ sans aucun calcul.<br/><br/>" +
              "Nommer enfin ce <strong>à quoi la conversion sert</strong>, car c'est ce qui la " +
              "rend acceptable : on ne convertit pas pour convertir, mais parce que le couple se " +
              "calcule par $C = P/\\omega$ et que cette formule exige des radians par seconde. " +
              "Un couple calculé avec des tours par minute est faux d'un facteur dix — sur le " +
              "dimensionnement d'un accouplement ou d'un réducteur, c'est une pièce qui casse.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 donne
         n = 3000 tr/min et demande omega, réponse 314,2 rad/s. Choisi plutôt
         que l'exercice 8 (1000 tr/min -> 104,7 rad/s) pour une raison de
         diagnostic nette : sur le 3, les trois réponses possibles sont 314,2
         (correct), 50 (division par 60 seule) et 18 850 (multiplication par
         2pi seule) — trois ordres de grandeur distincts, donc la correction
         dit immédiatement quelle moitié de la conversion a été omise. Sur le
         8, la division seule donne 16,7 et la multiplication seule 6283 : le
         diagnostic est possible mais les nombres sont moins parlants, et
         surtout 1000 tr/min n'est pas une vitesse de plaque courante alors
         que 3000 tr/min est celle de tous les moteurs bipolaires. Le repère
         de métier du remède s'appuie dessus. L'exercice 8 fait un bon second
         support, et la question 3 de l'évaluation prolonge en demandant le
         couple, c'est-à-dire l'usage réel de la conversion. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Convertir une hauteur d'eau en pression avec un facteur de tête",
      eleve: "Pour une HMT de $50$ m, l'élève annonce $5$ bar (il a divisé par dix, « puisque " +
             "1 bar = 10 m ») au lieu de $4{,}91$ bar. Ou il applique $\\rho g h$ et rend " +
             "$490\\,500$ — des pascals étiquetés « bar ».",
      cause: "Deux savoirs coexistent et se contredisent légèrement : la règle de terrain " +
             "« $1$ bar $\\approx 10$ mètres de colonne d'eau », que tout hydraulicien connaît et " +
             "utilise, et la relation exacte $p = \\rho g h$, qui donne $9{,}81$ mètres et non " +
             "$10$. L'écart est de $2\\ \\%$ — assez petit pour que la règle de terrain soit " +
             "excellente en pratique, assez grand pour qu'elle soit fausse dans un exercice " +
             "arrondi au centième. L'élève qui répond $5$ bar n'a donc pas tort " +
             "professionnellement : il a appliqué la bonne heuristique dans un contexte qui " +
             "demandait la formule. Le lui dire ainsi compte, parce que c'est vrai et parce que " +
             "cela valorise un savoir de terrain au lieu de le nier. La seconde variante — rendre " +
             "des pascals en croyant rendre des bars — est l'erreur d'unité finale du chapitre " +
             "10, qui revient ici.",
      remede: "Faire <strong>écrire la chaîne complète</strong>, avec l'unité à chaque étape : " +
              "$p = \\rho g h = 1000 \\times 9{,}81 \\times 50 = 490\\,500$ Pa, puis " +
              "$490\\,500 / 10^5 = 4{,}91$ bar. Deux lignes, dont la seconde est la conversion " +
              "vers l'unité demandée — c'est elle qu'on saute, et c'est elle qui vaut le point.<br/><br/>" +
              "Situer ensuite explicitement la <strong>règle des 10 mètres par rapport à la " +
              "formule</strong>, sans l'invalider : elle donne $2\\ \\%$ de plus que la réalité " +
              "et c'est un excellent ordre de grandeur pour vérifier — mais quand l'énoncé " +
              "demande deux décimales, il faut la formule. Dire aux stagiaires qu'ils gardent " +
              "leur repère de terrain ET qu'ils apprennent quand il ne suffit pas est plus " +
              "efficace que de leur demander de l'oublier.<br/><br/>" +
              "Utiliser enfin ce repère comme <strong>contrôle systématique</strong> : $50$ m de " +
              "colonne d'eau, c'est « environ $5$ bar ». Une réponse de $490\\,500$ « bar » est " +
              "cent mille fois trop grande et se rejette instantanément. Sur le choix d'une " +
              "pompe de relevage ou le réglage d'un pressostat, c'est exactement le contrôle " +
              "qu'un technicien fait de tête avant de valider une note de calcul.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 donne une
         HMT de h = 50 m et demande la pression en bar, réponse 4,91 bar.
         Choisi plutôt que l'exercice 10 (h = 20 m -> 1,96 bar) pour deux
         raisons. D'abord, sur 50 m la règle de terrain donne 5 bar contre
         4,91 réels : l'écart (0,09 bar) est parfaitement visible avec
         l'arrondi au centième demandé, donc l'exercice permet de DISCUTER la
         règle des 10 mètres au lieu de l'ignorer — c'est tout l'objet du
         remède. Sur le 10, la règle donne 2 bar contre 1,96 : l'écart est
         deux fois et demie plus petit en valeur absolue, donc la discussion
         porte moins. Ensuite, 50 m est une HMT réaliste de pompe de relevage,
         ce qui ancre le contrôle de métier. L'exercice 10 fait un bon second
         support. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier, mais pas une
     règle (la trigonométrie en a huit). Compter dans le dump avant d'écrire.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — exprimer $4{,}5$ bar en kPa. Deux facteurs connus du cours, une
          multiplication. Exécution. « calculer ».
     Q2 — convertir $8000$ m³/h en m³/s. Une division par $3600$. Exécution.
          « calculer ».
     Q3 — couple sur l'arbre d'un moteur, $C = P/\omega$, avec $P = 7{,}5$ kW
          et $n = 1450$ tr/min. Ici l'énoncé ne donne PAS $\omega$ : il faut
          comprendre que la formule du couple exige des radians par seconde,
          donc insérer soi-même une conversion que rien n'annonce, puis penser
          à passer les kW en watts. C'est un enchaînement de déductions dont
          l'énoncé ne donne pas l'ordre et dont chaque maillon conditionne le
          suivant. « raisonner ».
     Q4 — exprimer $P_f = 7$ kW en kcal/h. Un facteur donné par le cours, une
          multiplication. La mention du COP dans la correction est un
          commentaire, pas une demande de l'énoncé. Exécution. « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 1.
     « chercher », « modéliser », « représenter » et « communiquer » ne sont
     PAS mobilisés : aucune question ne demande de tâtonner, de traduire une
     situation concrète en relation (les formules sont fournies), de tracer ni
     de rédiger. C'est cohérent avec la nature du chapitre — une conversion est
     par construction l'exécution d'une procédure connue — et ce n'est pas
     corrigé par un étiquetage complaisant. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "calculer"]
  }
};
