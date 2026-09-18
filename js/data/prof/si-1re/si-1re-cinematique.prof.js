/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-cinematique.prof.js
   Fiche professeur du chapitre « Cinématique du solide » (première SI), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage — le corpus n'a ni travail pratique ni tâche de conception.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 6 (chapitre 7 du livre `lycee-si`).

   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire.

   DEUX MOULES, qui alternent strictement impair/pair :
     - distance en MRUA, $x = v_0 t + \frac{1}{2}at^2$ : exercices 1, 3, 5, 7,
       9, 11 (les IMPAIRS) ;
     - vitesse finale, $v = v_0 + at$ : exercices 2, 4, 6, 8, 10, 12 (les
       PAIRS).
   Cinq contextes tournent (véhicule électrique, chariot de manutention, tapis
   de convoyeur, ascenseur).

   LE FAIT DÉCISIF, ET IL DÉSÉQUILIBRE LE CHAPITRE : les 24 énoncés sont TOUS
   en TRANSLATION rectiligne. Pas un seul ne traite la ROTATION — ni
   $\omega = 2\pi N/60$, ni $v = R\omega$, ni $a_n = R\omega^2$. Or la moitié
   du cours porte sur la rotation, l'encadré « piège » du cours porte sur la
   conversion tr/min → rad/s (« l'erreur la plus fréquente en cinématique ! »),
   et TROIS des cinq questions de l'évaluation (Q3, Q4, Q5) sont des questions
   de rotation.
   Deuxième manque mesuré : les 24 énoncés ont tous $a > 0$ (accélération).
   Aucun ne freine, alors que Q1 et Q2 du devoir sont des questions de
   freinage ($a = -4$ m/s²).
   Conséquence : sur quatre erreurs, DEUX renvoient au quiz (le seul support
   du livre sur la rotation) et une n'a aucun support d'exercice.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-cinematique"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     AUCUN prérequis de SI, et c'est mesuré. La cinématique est le premier
     chapitre de physique du solide de l'année : elle ne réutilise aucune
     notion des autres chapitres de première. Elle en ALIMENTE plusieurs —
     l'asservissement y prend ses consignes de vitesse, l'énergie y prend la
     vitesse de $E_c = \frac{1}{2}mv^2$ — mais ces liens vont dans l'autre
     sens.

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (SysML) : aucun des 24 énoncés ne comporte de diagramme, et la
       chaîne cinématique n'est pas décrite en blocs ici. Un enseignant peut
       relier les deux en classe (le bdd d'un convoyeur), mais le chapitre ne
       le demande jamais. Écarté.
     - ch. 3 (Statique, PFS) : culture mécanique commune, et c'est le
       candidat le plus tentant. Mais la cinématique étudie le mouvement
       SANS les forces, ce que son introduction dit dans sa première phrase.
       Aucune force, aucun moment, aucun équilibre n'apparaît dans les 24
       énoncés. Lien de culture, pas de dépendance. Écarté.
     - ch. 5 (Asservissement), ch. 6 (Énergie) : dépendances réelles mais
       INVERSES — ce sont eux qui s'appuient sur la cinématique. Les déclarer
       ici créerait un cycle, refusé par `validerPrerequis`.
     - ch. 4 (Boole), ch. 7 (RDM), ch. 8 (POO) : aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : ils sont
     MATHÉMATIQUES et lourds — la dérivation (le cours définit $v = dx/dt$),
     le calcul littéral avec une puissance ($\frac{1}{2}at^2$), la valeur de
     $\pi$ et la proportionnalité pour les conversions d'unités, et les
     nombres relatifs pour une décélération. Aucun ne peut être déclaré :
     `prerequis` ne vise qu'un chapitre de SI du même niveau. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 2. L'ordre complet des huit rangs du
     dossier est justifié une fois dans `si-1re-sysml.prof.js` (rang 1).

     Rang 2 parce que ce chapitre n'a besoin de rien et que deux chapitres
     placés après lui y gagnent beaucoup : l'asservissement (rang 5), dont la
     moitié des énoncés prennent une vitesse pour consigne, et l'énergie
     (rang 6), dont l'énergie cinétique demande une vitesse maîtrisée. Le
     placer plus tard priverait ces deux chapitres d'un appui concret ; le
     placer avant SysML n'apporterait rien, puisque SysML n'a besoin de rien
     non plus et fournit le langage du reste de l'année.

     Le livre le range en chapitre 7 de l'ouvrage, soit le 2e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 2,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 2 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Modéliser et résoudre le comportement cinématique des
     systèmes ».

     Bornés à ce que le chapitre traite VRAIMENT : translation rectiligne,
     rotation autour d'un axe FIXE, et le lien $v = R\omega$. Rien sur les
     mouvements plans quelconques, rien sur les centres instantanés de
     rotation, rien sur la composition de mouvements — le cours ne les cite
     même pas. Citer un attendu sur le CIR serait citer ce que le chapitre
     n'enseigne pas. */
  attendus: [
    "Caractériser un mouvement de translation rectiligne et calculer position, vitesse et accélération en régime uniformément accéléré",
    "Caractériser un mouvement de rotation autour d'un axe fixe et convertir une fréquence de rotation en vitesse angulaire",
    "Relier vitesse linéaire et vitesse angulaire d'un point d'un solide en rotation, en respectant les unités du système international"
  ],

  note: "Position, vitesse, accélération en translation rectiligne ; angle, vitesse angulaire et " +
        "accélération angulaire en rotation ; le lien $v = R\\omega$ et l'accélération centripète " +
        "$a_n = R\\omega^2$ : le chapitre installe la description du mouvement, sans jamais parler " +
        "des forces qui le produisent.<br/><br/>" +
        "<strong>La colonne « S'appuie sur » affichera un tiret, et c'est exact.</strong> " +
        "Ce chapitre ne dépend d'aucun autre chapitre de SI de première. Mais " +
        "<strong>il dépend lourdement des mathématiques</strong>, et rien ne l'affichera : la " +
        "dérivation (le cours définit $v = \\dfrac{dx}{dt}$ dès sa première ligne), le calcul " +
        "littéral avec un carré ($\\frac{1}{2}at^2$), la valeur de $\\pi$, et les nombres relatifs " +
        "pour une décélération. Un prérequis ne pouvant désigner qu'un chapitre du même niveau de " +
        "SI, vérifiez ces acquis avant de commencer — un élève qui ne dérive pas subira tout le " +
        "chapitre comme une liste de formules.<br/><br/>" +
        "<strong>Ce chapitre alimente un chapitre de Terminale.</strong> " +
        "<em>Énergie cinétique et dynamique</em> réutilise directement la vitesse et " +
        "l'accélération d'ici. La dépendance est réelle mais non déclarable — un prérequis ne " +
        "vise qu'un chapitre du même niveau.<br/><br/>" +
        "<strong>LE DÉSÉQUILIBRE À CONNAÎTRE AVANT DE DISTRIBUER LES EXERCICES, et il est " +
        "sérieux.</strong> Les $24$ énoncés tirés sont <strong>tous en translation</strong>, " +
        "répartis sur deux moules seulement : distance parcourue (impairs) et vitesse finale " +
        "(pairs). <strong>Aucun</strong> ne traite la rotation — ni la conversion tr/min → rad/s, " +
        "ni $v = R\\omega$, ni $a_n = R\\omega^2$. Or la rotation occupe la moitié du cours, " +
        "l'encadré « piège » lui est consacré, et <strong>trois des cinq questions du devoir " +
        "noté</strong> en relèvent. Un élève qui n'aurait fait que les exercices découvrirait la " +
        "rotation le jour de l'évaluation.<br/><br/>" +
        "Second manque, moins spectaculaire mais réel : les $24$ énoncés ont tous une " +
        "<strong>accélération positive</strong>. Aucun ne freine, alors que les deux premières " +
        "questions du devoir sont des questions de freinage avec $a = -4$ m/s². Le " +
        "<strong>quiz</strong> est votre seul recours du côté de la rotation : ses trois questions " +
        "portent sur le MRUA, la conversion de $3000$ tr/min et l'accélération centripète. " +
        "Prévoyez en complément trois ou quatre énoncés de rotation et un de freinage, que le " +
        "manuel ne fournit pas.",

  erreurs: [
    {
      titre: "Utiliser $v = R\\omega$ avec $\\omega$ en tours par minute",
      eleve: "Un moteur tourne à $N = 1500$ tr/min, la roue a un rayon $R = 0{,}2$ m : l'élève " +
             "écrit $v = 0{,}2 \\times 1500 = 300$ m/s. Une vitesse de $1080$ km/h pour une roue.",
      cause: "La relation $v = R\\omega$ ne porte aucune trace des unités qu'elle exige, et le " +
             "chiffre en tr/min est celui que l'énoncé donne — l'élève l'utilise tel quel, sans " +
             "malveillance. C'est l'erreur d'unités classique de la culture mécanique : la formule " +
             "est juste, la grandeur substituée n'est pas la bonne. Le cours la signale lui-même " +
             "comme « l'erreur la plus fréquente en cinématique ».",
      /* MESURE FAITE, et elle interdit tout renvoi d'exercice : les 24
         énoncés tirés sont TOUS en translation rectiligne. Pas un seul ne
         mentionne $\omega$, une fréquence de rotation ni un rayon. Renvoyer à
         l'un d'eux aurait été un renvoi faux.
         Le quiz 2 est bâti exactement sur la conversion : « un moteur tourne
         à $N = 3000$ tr/min, sa vitesse angulaire en rad/s est environ : »,
         bonne réponse $100\pi \approx 314$ rad/s, avec en distracteurs $3000$
         rad/s (la valeur brute, c'est-à-dire l'erreur) et $50$ rad/s (division
         par 60 sans le $2\pi$). Sa correction énonce la méthode : « on divise
         par $60$ et on multiplie par $2\pi$ ». C'est le seul support du livre
         sur ce point, et il vise juste. */
      exercice: { type: "quiz", n: 2 },
      remede: "Les exercices ne vous serviront à rien ici : les $24$ énoncés sont tous en " +
              "translation et aucun ne contient de $\\omega$. Le <strong>quiz $2$</strong> est le " +
              "support du livre, et ses distracteurs sont les deux erreurs réelles — $3000$ rad/s " +
              "(la valeur brute) et $50$ rad/s (on a divisé par $60$ en oubliant le " +
              "$2\\pi$).<br/><br/>" +
              "Installez la conversion comme un <strong>réflexe d'écriture, pas de calcul</strong> : " +
              "dès qu'un énoncé donne des tr/min, la première ligne de la copie est " +
              "$\\omega = \\dfrac{2\\pi N}{60}$, avant toute autre chose. Sur $1500$ tr/min : " +
              "$\\omega = \\dfrac{2\\pi \\times 1500}{60} = 50\\pi \\approx 157$ rad/s, et alors " +
              "seulement $v = R\\omega$.<br/><br/>" +
              "Donnez le <strong>contrôle de plausibilité</strong> qui rattrape l'oubli tout seul : " +
              "une roue de $0{,}2$ m de rayon sur un moteur ordinaire ne roule pas à $300$ m/s, " +
              "c'est-à-dire $1080$ km/h. Demandez systématiquement « ta vitesse, ça fait combien en " +
              "km/h, et est-ce que c'est croyable ? ». Sur un facteur $2\\pi/60$ oublié, l'écart est " +
              "d'un facteur $10$ : il se voit."
    },
    {
      titre: "Confondre vitesse angulaire et vitesse linéaire",
      eleve: "« Le point au bord du disque et le point près du centre tournent à la même vitesse, " +
             "puisque c'est le même disque. » Ou l'inverse : l'élève donne $\\omega$ en m/s.",
      cause: "L'élève a raison sur un point et le généralise à tort : tous les points d'un solide " +
             "en rotation ont bien la même vitesse ANGULAIRE — c'est la définition du mouvement. " +
             "Mais leur vitesse LINÉAIRE dépend de leur distance à l'axe, et $v = R\\omega$ dit " +
             "exactement cela. Le mot « vitesse », employé seul pour deux grandeurs d'unités " +
             "différentes (rad/s et m/s), fait tout le travail de la confusion. C'est une erreur de " +
             "vocabulaire mécanique, pas de calcul.",
      /* MESURE FAITE : aucun des 24 énoncés tirés ne met en scène deux points
         d'un même solide, ni un rayon, ni une vitesse angulaire — ils sont
         tous en translation, où la question ne se pose pas (tous les points
         d'un solide en translation ont la même vitesse, ce que dit la
         définition du cours).
         Le quiz 3 est le seul support qui approche : il calcule
         $a_n = R\omega^2$ sur un disque de rayon $R = 0{,}5$ m à
         $\omega = 10$ rad/s, et sa correction donne EN PLUS la vitesse
         linéaire du point ($v = R\omega = 5$ m/s), ce qui met les deux
         grandeurs côte à côte avec leurs unités — exactement le geste qui
         manque. Retenu pour cela, et parce que c'est le seul endroit du livre
         où $\omega$ en rad/s et $v$ en m/s cohabitent dans un même calcul.
         Distinct du renvoi de l'erreur 1 (quiz 2) : deux erreurs d'un même
         chapitre ne pointent jamais le même support. */
      exercice: { type: "quiz", n: 3 },
      remede: "Aucun exercice du chapitre ne peut aider : ils sont tous en translation, où tous les " +
              "points vont à la même vitesse et où la question n'existe pas. Le <strong>quiz " +
              "$3$</strong> est le seul endroit du livre où $\\omega$ en rad/s et $v$ en m/s " +
              "apparaissent dans un même calcul — sa correction donne $v = R\\omega = 0{,}5 " +
              "\\times 10 = 5$ m/s à côté de $a_n = 50$ m/s².<br/><br/>" +
              "L'image qui règle la confusion, et elle est physique : <strong>un manège</strong>. " +
              "Tous les chevaux font un tour dans le même temps — même $\\omega$. Mais le cheval du " +
              "bord parcourt un cercle bien plus grand : il va plus vite en m/s. " +
              "<strong>Même vitesse angulaire, vitesses linéaires différentes.</strong> Faites " +
              "calculer les deux sur un disque unique, à $R = 0{,}1$ m puis $R = 0{,}5$ m, avec le " +
              "même $\\omega$.<br/><br/>" +
              "Imposez enfin l'<strong>unité comme garde-fou</strong> : $\\omega$ s'écrit toujours " +
              "en rad/s, $v$ toujours en m/s. Un élève qui annonce « $\\omega = 5$ m/s » a mélangé " +
              "les deux, et l'unité le lui dit avant le professeur. C'est le contrôle le moins " +
              "coûteux du chapitre."
    },
    {
      titre: "Oublier le terme $v_0 t$ quand la vitesse initiale n'est pas nulle",
      eleve: "Un véhicule part à $v_0 = 6$ m/s et accélère à $3{,}8$ m/s² pendant $9$ s. L'élève " +
             "écrit $x = \\frac{1}{2} \\times 3{,}8 \\times 9^2 = 153{,}9$ m, et oublie les " +
             "$54$ m déjà acquis par la vitesse initiale.",
      cause: "La formule la plus souvent rencontrée au collège et au lycée est le cas particulier " +
             "$v_0 = 0$, où le terme disparaît : $x = \\frac{1}{2}at^2$. L'élève a mémorisé ce cas " +
             "comme LA formule. Le tirage renforce d'ailleurs le réflexe, puisque plusieurs énoncés " +
             "du chapitre partent effectivement du repos ($v_0 = 0$) et donnent raison à la formule " +
             "tronquée. Ce n'est donc pas de la négligence : c'est une généralisation apprise, qui " +
             "lâche dès que le mobile est déjà lancé.",
      /* RENVOI VÉRIFIÉ. Exercice 1 du livre (graine 20260816 + 6, premier
         tirage) : véhicule électrique, $v_0 = 6$ m/s, $a = 3{,}8$ m/s²,
         $t = 9$ s, donc $x = 6 \times 9 + \frac{1}{2} \times 3{,}8 \times 81
         = 54{,}0 + 153{,}9$. La correction du tirage sépare explicitement les
         DEUX termes dans son avant-dernière ligne, ce qui est exactement le
         geste manquant.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 3, 5, 7, 9,
         11) : les exercices 3, 7 et 11 ont $v_0 = 0$ et sont donc
         DISQUALIFIÉS — l'erreur y donne la bonne réponse, ils ne peuvent rien
         remédier. Restent 5 ($v_0 = 5$, $a = 1{,}7$, $t = 6$, soit
         $30{,}0 + 30{,}6$) et 9 ($v_0 = 9$, $a = 3{,}3$, $t = 9$, soit
         $81{,}0 + 133{,}7$). L'exercice 1 est retenu sur deux critères : il
         est le premier du livre, donc celui sur lequel on peut imposer la
         disposition en deux termes dès le départ ; et ses deux termes sont
         nettement inégaux ($54$ contre $154$), donc l'oubli change le
         résultat de façon très visible. L'exercice 5 aurait été le pire choix
         des trois : ses deux termes sont presque égaux ($30{,}0$ et $30{,}6$),
         et l'élève qui en oublie un obtient un nombre plausible. */
      exercice: { type: "exercice", n: 1 },
      remede: "Faites traiter l'<strong>exercice $1$</strong> en écrivant la formule en " +
              "<strong>deux morceaux séparés</strong>, une ligne chacun, avant d'additionner : " +
              "« distance due à la vitesse initiale : $6 \\times 9 = 54$ m », puis « distance due à " +
              "l'accélération : $\\frac{1}{2} \\times 3{,}8 \\times 81 = 153{,}9$ m », puis le " +
              "total. La correction du livre fait exactement ce découpage.<br/><br/>" +
              "Attention à ce que le tirage installe : plusieurs énoncés du chapitre partent du " +
              "<strong>repos</strong> ($v_0 = 0$), et la formule tronquée y donne la bonne réponse. " +
              "L'élève a donc raison plusieurs fois de suite avec une formule fausse. Choisissez " +
              "délibérément un énoncé où $v_0 \\neq 0$ pour le diagnostic — l'exercice $1$ en est " +
              "un, les exercices $3$, $7$ et $11$ n'en sont pas.<br/><br/>" +
              "Donnez le sens physique, qui rend l'oubli impossible à commettre deux fois : " +
              "<strong>un mobile déjà lancé n'attend pas d'accélérer pour avancer</strong>. " +
              "Pendant les $9$ secondes, il aurait parcouru $54$ m même sans toucher à " +
              "l'accélérateur. L'accélération AJOUTE $154$ m à ce trajet, elle ne le remplace pas."
    },
    {
      titre: "Traiter une décélération comme une accélération positive",
      eleve: "Un véhicule roule à $20$ m/s et freine à $4$ m/s². L'élève écrit " +
             "$v = 20 + 4t$ et cherche quand la vitesse s'annule — ou conclut que le véhicule " +
             "accélère.",
      cause: "Le mot « décélération » est donné en valeur absolue dans le langage courant (« il " +
             "freine à $4$ m/s² »), alors que la formule $v = v_0 + at$ attend un $a$ SIGNÉ. " +
             "L'élève reporte le nombre de l'énoncé sans se demander dans quel sens il agit. Le " +
             "tirage aggrave la chose : les $24$ énoncés ont tous $a > 0$, donc l'élève n'a jamais " +
             "eu à poser la question. Erreur de convention de signe, la plus fréquente à la " +
             "frontière entre la mécanique et les mathématiques.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ, sur mesure.
         Les 24 énoncés tirés ont TOUS une accélération strictement positive :
         pas un seul freinage, pas un seul $a < 0$. Les moules disent
         « démarre avec une vitesse initiale $v_0$ et accélère uniformément » —
         le générateur ne produit que ce cas. Un renvoi d'exercice aurait donc
         été plausible et faux.
         Le quiz ne la traite pas non plus : ses trois questions portent sur un
         MRUA depuis le repos, une conversion tr/min et une accélération
         centripète, tous avec des valeurs positives.
         Les questions 1 et 2 de l'ÉVALUATION portent exactement sur le
         freinage ($v_0 = 20$ m/s, $a = -4$ m/s², temps d'arrêt puis distance
         de freinage) — mais une remédiation ne renvoie JAMAIS vers le devoir
         noté, c'est une règle du projet. Donc `null`, franchement, et le
         remède donne le geste de substitution : fabriquer l'énoncé manquant. */
      exercice: null,
      remede: "Le livre n'a aucun support pour cette erreur, et c'est le manque le plus " +
              "embarrassant du chapitre : les $24$ énoncés ont <strong>tous une accélération " +
              "positive</strong> et le quiz aussi. Le geste de substitution est simple — " +
              "<strong>réécrivez un énoncé du chapitre en freinage</strong>. Reprenez l'exercice " +
              "$2$ (chariot à $2$ m/s, $a = 3{,}5$ m/s²) et demandez : « le même chariot roule à " +
              "$30$ m/s et freine à $3{,}5$ m/s², au bout de combien de temps s'arrête-t-il ? ». " +
              "Cela prend trente secondes à préparer et comble le trou.<br/><br/>" +
              "Imposez la <strong>ligne de signe</strong> avant tout calcul : l'élève écrit " +
              "explicitement « le véhicule freine, donc $a = -4$ m/s² », en toutes lettres, avant " +
              "de toucher à la formule. Tant que cette ligne n'est pas là, le signe se décide " +
              "au hasard.<br/><br/>" +
              "Le contrôle de cohérence, à faire formuler par les élèves : <strong>si un mobile " +
              "freine, sa vitesse doit diminuer</strong>. Un élève qui trouve une vitesse plus " +
              "grande qu'au départ, ou un temps d'arrêt négatif, tient une réponse impossible et " +
              "peut le voir seul. Demandez systématiquement « ta vitesse finale est plus grande ou " +
              "plus petite, et est-ce cohérent avec ce que fait la pédale ? »"
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 ($v_0 = 20$ m/s, $a = -4$ m/s², temps d'arrêt → $5$ s) → résoudre :
        application de $v = v_0 + at$ avec la condition $v = 0$. Le seul choix
        est celui de la formule ; l'exécution est directe.
     Q2 (distance de freinage du même véhicule → $50$ m) → résoudre :
        application de $v^2 = v_0^2 + 2ad$. Même nature, autre formule.
     Q3 (la relation $v = R\omega$ est valable lorsque… → $\omega$ en rad/s et
        $R$ en m) → analyser : il faut caractériser le DOMAINE DE VALIDITÉ
        d'un modèle, pas l'appliquer. Aucun calcul n'est demandé ; c'est une
        question sur la condition d'emploi de la relation, donc `analyser` au
        sens du programme (identifier et caractériser).
     Q4 ($N = 1500$ tr/min, calculer $\omega$ en rad/s → $157$) → résoudre :
        conversion, application directe de $\omega = 2\pi N/60$.
     Q5 ($R = 0{,}3$ m, $\omega = 20$ rad/s, accélération centripète → $120$
        m/s²) → résoudre : application directe de $a_n = R\omega^2$.

     RÉPARTITION DE CE CHAPITRE : résoudre 4, analyser 1. C'est la fiche la
     plus déséquilibrée du dossier, et le déséquilibre est un CONSTAT sur les
     cinq énoncés, pas un choix : quatre des cinq questions sont des
     applications numériques de formule.
     `modéliser` n'est pas mobilisé, ce qui est notable sur un chapitre dont
     le programme parle de « modéliser le comportement cinématique » : aucune
     question ne demande de construire un modèle de mouvement à partir d'une
     situation. `expérimenter` et `concevoir` non plus, comme dans tout
     l'ouvrage. Si vous voulez évaluer `modéliser`, il faudra ajouter votre
     propre question — par exemple demander quel type de mouvement modélise le
     démarrage d'un ascenseur, et pourquoi. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'résoudre', 'résoudre']
  }
};
