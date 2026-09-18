/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-bode.prof.js
   Fiche professeur du chapitre « Analyse fréquentielle (Bode) » (terminale
   SI), pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 18 (chapitre 19 de l'ouvrage `lycee-si`).

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du corps
   du chapitre. Deux conséquences dures, vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   TROIS MOULES, relevés un par un :
     - conversion pulsation → fréquence, $f_c = \omega_c/2\pi$
       → exercices 1, 5, 9 ;
     - gain en décibels, $G_{\text{dB}} = 20\log|H|$ → exercices 2, 4, 7 ;
     - module à la coupure, $|H| = H_0/\sqrt{2}$ → exercices 3, 6, 8.

   DEUX FAITS DÉCISIFS, tous deux mesurés sur le tirage.

   1. LES NEUF EXERCICES NE CALCULENT LE GAIN EN dB QUE DANS UN SEUL SENS. Les
      trois tirages du moule « décibels » (2, 4, 7) donnent $|H|$ et demandent
      $G_{\text{dB}}$. Aucun ne fait l'inverse — donner un gain en dB et
      demander le rapport d'amplitude — alors que c'est la question 4 du devoir
      noté ($-6$ dB → $|H| = 0{,}5$). Ce sens-là, celui qui demande
      $|H| = 10^{G/20}$, n'est travaillé nulle part.

   2. AUCUN DES NEUF N'EST UNE LECTURE DE DIAGRAMME. Le chapitre s'appelle
      « Analyse fréquentielle (Bode) », le cours décrit les deux courbes, les
      asymptotes, les pentes en dB/décade et la phase — et les neuf exercices
      sont NEUF CALCULS NUMÉRIQUES sans le moindre graphique à lire. Ni pente,
      ni phase, ni asymptote, ni résonance. Or la question 3 du devoir porte
      sur la pente asymptotique et la question 5 sur le facteur de qualité.

   Le QUIZ rattrape en partie le second point : sa question 2 porte sur la
   pente du second ordre ($-40$ dB/décade) et sa question 3 sur la phase à la
   coupure ($-45°$). Ce sont les deux seuls endroits du livre où le
   comportement asymptotique et la phase sont interrogés, et les renvois de
   cette fiche vers eux sont vérifiés sur le contenu réel du quiz.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-bode"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     ch. 3 (Systèmes asservis, correcteur P/PI/PID) : RETENU, et c'est une
     dépendance forte, mesurée sur les contenus.
     - La FONCTION DE TRANSFERT est installée au chapitre 3 (FTBO, FTBF,
       formule de Black) et REPRISE TELLE QUELLE ici : ce chapitre écrit
       $H(j\omega)$ sans jamais expliquer ce qu'est une fonction de transfert.
       Sa première définition suppose la notion acquise.
     - Le GAIN STATIQUE $H_0$ de ce chapitre EST le gain statique du chapitre 3
       (celui de la FTBF) : trois des neuf exercices (3, 6, 8) le manipulent
       d'entrée.
     - Surtout, ce chapitre-ci n'a de sens que comme SUITE du chapitre 3 : les
       marges de gain et de phase, annoncées sans outil au chapitre 3, sont
       précisément ce que le diagramme de Bode permet de lire. Sans le
       chapitre 3, Bode n'est qu'un exercice de tracé ; avec lui, c'est
       l'instrument qui répond à la question laissée ouverte (« jusqu'où
       peut-on monter le gain sans rendre le système instable ? »).
     Rang conseillé du chapitre 3 : $5$, strictement inférieur au rang $6$ de
     celui-ci. Contrainte satisfaite.

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (PFD) et ch. 2 (Énergie cinétique) : rangs $1$ et $2$, donc
       déclarables. Aucun lien : ni force, ni énergie dans tout le chapitre.
       On pourrait invoquer le fait qu'un système du second ordre décrit une
       masse-ressort-amortisseur — c'est vrai, mais le corpus ne le fait
       jamais : le second ordre y est purement formel, donné par sa fonction de
       transfert. Écartés.
     - ch. 5 (Transmission de puissance) : rang $3$, déclarable. Aucun lien.
       Écarté.
     - ch. 4 (GRAFCET) : rang $4$, déclarable. Le séquentiel discret n'a rien
       de commun avec l'analyse fréquentielle d'un système continu. Écarté.
     - ch. 7 (Réseaux) : rang $7 > 6$, non déclarable. Et la parenté
       (bande passante, débit) est une homonymie, pas une dépendance.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : ce chapitre suppose
     l'ÉLECTRONIQUE ANALOGIQUE de première (le filtre RC, la notion de bande
     passante), et surtout deux outils mathématiques lourds — le LOGARITHME
     DÉCIMAL et les NOMBRES COMPLEXES. `prerequis` ne visant qu'un chapitre du
     même niveau, rien ne les affichera. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 6 dans le dossier `si-tle`, celui du
     livre (chapitre 19 de l'ouvrage, 6e du dossier).

     Le rang 6 est contraint par le haut : le chapitre 3 (Systèmes asservis)
     doit précéder, puisqu'il installe la fonction de transfert et le gain
     statique que celui-ci réutilise, et parce que Bode répond à la question de
     stabilité que le chapitre 3 laisse ouverte. Les deux forment le BLOC
     AUTOMATIQUE, à enseigner de suite (rangs 5 puis 6).

     Le rang 6 est aussi le plus tardif possible pour un chapitre calculatoire,
     et c'est voulu : c'est, avec le chapitre 3, le plus exigeant du niveau en
     OUTILS MATHÉMATIQUES (logarithme décimal pour les décibels, nombres
     complexes pour $H(j\omega)$). Le placer en fin d'année maximise les
     chances que les mathématiques aient installé les deux. La `note` le dit
     explicitement : un chapitre placé avant son outil mathématique est
     inabordable, et le logarithme est ici non négociable — sans lui, un
     décibel n'est qu'un mot.

     Le livre le range aussi en 6e position de son niveau : les deux ordres
     coïncident, pas de triangle d'alerte.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 6,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 6 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser et caractériser le comportement fréquentiel d'un
     système ».

     Bornés à ce que le chapitre traite RÉELLEMENT : le gain en décibels, la
     fréquence de coupure, le comportement asymptotique des premier et second
     ordres, et le facteur de qualité. Rien sur le tracé point par point d'un
     diagramme réel, rien sur les marges de gain et de phase (seulement
     mentionnées), rien sur l'identification d'un système à partir d'un relevé
     expérimental — que le corpus n'aborde pas. */
  attendus: [
    "Convertir un rapport d'amplitude en gain en décibels et réciproquement, et passer d'une pulsation à une fréquence",
    "Caractériser un filtre par sa fréquence de coupure à $-3$ dB et son comportement asymptotique en gain et en phase",
    "Distinguer un système du premier ordre d'un système du second ordre par sa pente asymptotique et identifier la condition de résonance"
  ],

  note: "Le gain en décibels, la fréquence de coupure à $-3$ dB, les pentes asymptotiques, la " +
        "phase, le facteur de qualité : le chapitre donne l'outil qui décrit un système " +
        "<strong>fréquence par fréquence</strong>, et c'est lui qui permet de répondre à la " +
        "question laissée ouverte par le chapitre 3 — jusqu'où peut-on monter le gain d'un " +
        "asservissement sans le rendre instable.<br/><br/>" +
        "<strong>Les prérequis mathématiques sont ici non négociables, et ils décident du moment " +
        "où le chapitre est abordable.</strong> Il en faut deux, et ce sont les plus lourds de " +
        "l'année. D'abord le <strong>logarithme décimal</strong> : un décibel n'est rien d'autre " +
        "que $20\\log$ d'un rapport, et sans le logarithme, « $26$ dB » est un mot, pas un nombre. " +
        "Il faut aussi savoir que $\\log(10) = 1$, $\\log(100) = 2$, et que le logarithme d'un " +
        "produit est la somme des logarithmes — c'est ce qui rend l'échelle en décades lisible. " +
        "Ensuite les <strong>nombres complexes</strong> : $H(j\\omega)$ est une fonction à valeurs " +
        "complexes, dont on prend le <strong>module</strong> pour le gain et l'" +
        "<strong>argument</strong> pour la phase. Un élève qui n'a pas vu $j$ ne peut pas donner " +
        "de sens à $\\dfrac{H_0}{1 + j\\omega/\\omega_c}$. Ce chapitre est placé au rang $6$, le " +
        "plus tardif de la partie, précisément pour laisser aux mathématiques le temps " +
        "d'installer les deux : <strong>un chapitre placé avant son outil mathématique est " +
        "inabordable, quelle que soit la qualité de la séance</strong>.<br/><br/>" +
        "<strong>Un prérequis compte et ne sera pas affiché.</strong> La colonne « S'appuie sur » " +
        "montre bien le chapitre 3 (Systèmes asservis), qui installe la fonction de transfert " +
        "reprise ici sans être redéfinie. Mais ce chapitre suppose aussi l'" +
        "<strong>électronique analogique</strong> de première — le filtre RC, l'idée de bande " +
        "passante, le fait qu'un condensateur ne laisse pas passer les mêmes fréquences qu'une " +
        "résistance. Un prérequis ne pouvant désigner qu'un chapitre du même niveau, rien ne le " +
        "montrera.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les " +
        "exercices, et elle est franche.</strong> Le chapitre s'appelle « Analyse fréquentielle " +
        "(Bode) », mais <strong>aucun des neuf énoncés tirés ne comporte de diagramme à " +
        "lire</strong>. Les neuf sont des calculs numériques : convertir $\\omega_c$ en $f_c$ " +
        "(exercices 1, 5, 9), calculer $20\\log|H|$ (2, 4, 7), diviser $H_0$ par $\\sqrt{2}$ " +
        "(3, 6, 8). Pas une pente, pas une phase, pas une asymptote, pas une résonance — c'est-à " +
        "-dire rien de ce qui fait un diagramme de Bode. <strong>Prévoyez d'apporter vos propres " +
        "diagrammes à lire</strong> : sans cela, vos élèves sauront convertir des décibels sans " +
        "savoir lire une courbe de réponse, et ils découvriront les questions $3$ et $5$ du devoir " +
        "le jour du devoir. Le quiz sauve le minimum (sa question $2$ porte sur la pente du second " +
        "ordre, sa question $3$ sur la phase à la coupure) : c'est votre seule ressource " +
        "imprimée.<br/><br/>" +
        "Second manque, plus discret : les trois exercices de décibels vont tous dans le " +
        "<strong>même sens</strong> — de $|H|$ vers les dB. Aucun ne demande l'inverse " +
        "($|H| = 10^{G/20}$), qui est pourtant la question $4$ du devoir.",

  erreurs: [
    {
      titre: "Confondre pulsation et fréquence, ou oublier le facteur $2\\pi$",
      eleve: "Sur un filtre de pulsation de coupure $\\omega_c = 50$ rad/s, l'élève annonce " +
             "$f_c = 50$ Hz. Ou il multiplie par $2\\pi$ au lieu de diviser et trouve $314$ Hz.",
      cause: "Les deux grandeurs décrivent la même chose — la rapidité d'une oscillation — et " +
             "portent des noms que la langue courante confond volontiers. L'élève retient qu'il " +
             "y a un $2\\pi$ quelque part, mais rien dans l'écriture ne dit de quel côté : " +
             "$\\omega = 2\\pi f$ et $f = \\omega/2\\pi$ sont la même relation, et il en retient " +
             "une sur deux. Le cours signale ce piège explicitement, ce qui confirme qu'il est " +
             "fréquent. L'origine réelle est que $\\omega$ n'a pas de représentation intuitive : " +
             "on compte des tours par seconde (des hertz), pas des radians par seconde.",
      /* RENVOI VÉRIFIÉ. Exercice 9 du livre (graine 20260816 + 18, neuvième
         tirage) : omega_c = 200 rad/s, donc f_c = 200/(2 pi) ≈ 31,8 Hz.
         POURQUOI L'EXERCICE 9 ET NON 1 NI 5 (même moule) : mesure des trois
         tirages et de l'écart que produit l'erreur.
           - exercice 1 (omega_c = 50)  : juste 8 Hz ; en oubliant la division,
             50 Hz ; en multipliant, 314 Hz ;
           - exercice 5 (omega_c = 10)  : juste 1,6 Hz ; en oubliant, 10 Hz ;
           - exercice 9 (omega_c = 200) : juste 31,8 Hz ; en oubliant, 200 Hz ;
             en multipliant, 1257 Hz.
         L'exercice 9 est retenu pour deux raisons.
         D'abord son ordre de grandeur : 31,8 Hz est une fréquence de coupure
         PLAUSIBLE pour un système mécanique ou un filtre d'entrée, donc
         discutable physiquement (le remède s'en sert), là où 1,6 Hz
         (exercice 5) est très bas et 8 Hz (exercice 1) sans repère.
         Ensuite, et surtout, l'exercice 1 est ÉCARTÉ parce que son
         omega_c = 50 produit exactement le piège inverse du devoir : la
         question 2 de l'évaluation donne omega_c = 314 rad/s pour f_c = 50 Hz.
         Un élève travaillant sur l'exercice 1 verrait passer le nombre 50 des
         deux côtés de la relation, ce qui est la pire configuration possible
         pour une erreur de confusion. L'exercice 9 n'a pas ce défaut. */
      exercice: { type: "exercice", n: 9 },
      remede: "Faites traiter l'exercice 9 ($\\omega_c = 200$ rad/s, réponse $31{,}8$ Hz) en " +
              "exigeant <strong>l'unité écrite à chaque ligne</strong> : rad/s en entrée, Hz en " +
              "sortie. Le $2\\pi$ n'est pas un coefficient décoratif, c'est " +
              "<strong>l'unité qui change</strong> — on passe de radians par seconde à tours par " +
              "seconde, et il y a $2\\pi$ radians dans un tour.<br/><br/>" +
              "Évitez l'exercice 1 comme remédiation : son $\\omega_c = 50$ rad/s croise " +
              "malencontreusement la question $2$ du devoir noté, où $50$ est la " +
              "<strong>fréquence</strong> ($\\omega_c = 314$ rad/s). Voir le même nombre des deux " +
              "côtés de la relation est la pire configuration pour un élève qui les " +
              "confond.<br/><br/>" +
              "Le contrôle de sens qui tranche sans réfléchir : <strong>$f$ est toujours plus " +
              "petit que $\\omega$</strong>, environ six fois. Si le résultat est plus grand, on a " +
              "multiplié au lieu de diviser. Faites-le vérifier : $31{,}8 < 200$, " +
              "cohérent.<br/><br/>" +
              "Le système réel qui donne un repère durable : les <strong>$50$ Hz du réseau " +
              "électrique</strong>. Tout le monde connaît ce chiffre — c'est une " +
              "<strong>fréquence</strong>, $50$ alternances par seconde. La pulsation " +
              "correspondante est $\\omega = 2\\pi \\times 50 \\approx 314$ rad/s, et c'est " +
              "exactement l'ordre de grandeur de l'exercice 9. Faites retenir ce couple " +
              "($50$ Hz $\\leftrightarrow$ $314$ rad/s) : c'est un point d'ancrage qui permet de " +
              "vérifier n'importe quelle conversion de tête pour le reste de l'année. " +
              "<strong>Un moteur qui tourne à $50$ tours par seconde, c'est $314$ rad/s — le " +
              "radian n'est qu'une façon de compter les tours.</strong>"
    },
    {
      titre: "Confondre le gain en décibels et le rapport d'amplitude, ou ne savoir faire la conversion que dans un sens",
      eleve: "« Un gain de $20$ dB, c'est un gain de $20$. » Ou, quand on demande le rapport " +
             "d'amplitude correspondant à $-6$ dB, l'élève ne sait pas par quel bout prendre la " +
             "question — il connaît $G = 20\\log|H|$ mais pas $|H| = 10^{G/20}$.",
      cause: "Le décibel n'est pas une unité comme les autres : c'est une " +
             "<strong>échelle</strong>, et l'élève ne voit pas pourquoi on en changerait. Il lit " +
             "« $26$ dB » comme il lirait « $26$ mètres ». Plus profondément, le décibel demande " +
             "de penser en ordres de grandeur ($\\times 10$ pour $+20$ dB) plutôt qu'en écarts, " +
             "ce qui est un renversement d'habitude. Et le corpus n'aide pas : les trois " +
             "exercices de décibels vont tous de $|H|$ vers les dB, jamais l'inverse. L'élève " +
             "n'a donc jamais eu à écrire la formule réciproque, alors que le devoir la lui " +
             "demande.",
      /* RENVOI VÉRIFIÉ, avec une limite explicitement dite dans le remède
         plutôt que masquée.
         Exercice 2 du livre (graine 20260816 + 18, deuxième tirage) :
         |H| = 2, donc G_dB = 20 log(2) = 20 × 0,301 = 6 dB.
         POURQUOI L'EXERCICE 2 ET NON 4 NI 7 (même moule) : c'est le tirage
         dont la valeur est la plus PETITE (|H| = 2, contre 20 pour
         l'exercice 4 et 50 pour le 7), et c'est celui qui donne le repère le
         plus utile de tout le chapitre — 2 ↔ 6 dB, le fameux « doublement =
         +6 dB ». C'est aussi le SEUL des trois dont le résultat soit
         exactement l'opposé de la question 4 du devoir (-6 dB → |H| = 0,5) :
         l'élève qui a établi que 2 vaut +6 dB peut en déduire que 0,5 vaut
         -6 dB, ce qui est précisément le raisonnement que la question notée
         attend. Le remède le fait faire explicitement.
         L'exercice 4 (|H| = 20 → 26 dB) a été ÉCARTÉ malgré son intérêt
         (26 dB = 20 dB + 6 dB, décomposable) : le raccord avec la question 4
         du devoir y est moins direct. L'exercice 7 (|H| = 50 → 34 dB) est
         écarté pour la même raison.
         CE QUE LE RENVOI NE FAIT PAS, et le remède le dit : aucun des neuf
         exercices ne demande la conversion INVERSE (dB → |H|), qui est
         pourtant la question 4 du devoir. Le quiz ne le fait pas non plus
         (sa question 1 va aussi de |H| = 100 vers 40 dB). Le remède fournit
         donc le geste de substitution. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 ($|H| = 2$, réponse $6$ dB) : c'est le tirage le plus " +
              "utile du chapitre, parce qu'il installe <strong>le repère qui sert toute " +
              "l'année</strong> — <strong>doubler l'amplitude, c'est $+6$ dB</strong>. Exigez " +
              "ensuite qu'on complète le tableau de correspondance au tableau, et faites-le " +
              "apprendre : $|H| = 1 \\leftrightarrow 0$ dB ; $|H| = 2 \\leftrightarrow +6$ dB ; " +
              "$|H| = 10 \\leftrightarrow +20$ dB ; $|H| = 100 \\leftrightarrow +40$ dB ; et les " +
              "symétriques négatifs : $|H| = 0{,}5 \\leftrightarrow -6$ dB, " +
              "$|H| = 0{,}1 \\leftrightarrow -20$ dB.<br/><br/>" +
              "<strong>Attention, et c'est le manque le plus coûteux du chapitre :</strong> les " +
              "trois exercices de décibels du livre (2, 4, 7) vont tous de $|H|$ vers les dB. " +
              "<strong>Aucun ne fait l'inverse</strong>, et le quiz non plus. Or la question $4$ " +
              "du devoir noté demande exactement l'inverse ($-6$ dB → $|H| = 0{,}5$). Le geste de " +
              "substitution est immédiat et il découle de l'exercice 2 : puisque l'élève vient " +
              "d'établir que $|H| = 2$ donne $+6$ dB, demandez-lui « <em>et alors, $-6$ dB, " +
              "c'est quel rapport ?</em> ». Un signe moins sur un logarithme, c'est " +
              "l'<strong>inverse</strong> du rapport : $1/2$. Il a trouvé la réponse du devoir en " +
              "raisonnant, pas en appliquant $10^{G/20}$.<br/><br/>" +
              "Écrivez quand même la formule réciproque une fois, parce que l'épreuve peut la " +
              "demander sur une valeur non ronde : <strong>$|H| = 10^{G/20}$</strong>. Faites-la " +
              "vérifier sur le cas connu : $10^{6/20} = 10^{0{,}3} \\approx 2$. Cohérent avec " +
              "l'exercice.<br/><br/>" +
              "Le système réel qui explique pourquoi cette échelle existe, et il est dans leurs " +
              "oreilles : le <strong>bouton de volume d'un amplificateur</strong>, gradué en dB. " +
              "L'oreille humaine perçoit les rapports, pas les écarts : passer de $1$ à $2$ watts " +
              "s'entend autant que passer de $50$ à $100$. Les décibels comptent des " +
              "<strong>rapports</strong>, et c'est pour cela qu'un potentiomètre de volume est " +
              "logarithmique et non linéaire. Même raison en automatique : sur un diagramme de " +
              "Bode, on veut voir d'un seul coup d'œil un gain de $100$ et un gain de $0{,}01$. " +
              "<strong>Le décibel comprime quatre décades dans une page.</strong>"
    },
    {
      titre: "Croire que la pente asymptotique et la phase dépendent de la fréquence de coupure plutôt que de l'ordre du système",
      eleve: "« Ce filtre coupe à $31{,}8$ Hz, donc sa pente est de $-31{,}8$ dB/décade. » Ou, " +
             "plus fréquemment : l'élève ne sait pas distinguer un premier ordre d'un second " +
             "ordre, et attribue $-20$ dB/décade à tout ce qui coupe.",
      cause: "Le chapitre présente deux familles de systèmes avec des propriétés qui se " +
             "ressemblent beaucoup — les deux ont un gain statique, une coupure, une phase qui " +
             "chute — et une seule chose les distingue : l'<strong>ordre</strong>, c'est-à-dire la " +
             "puissance de $p$ au dénominateur. L'élève voit les similitudes et non le critère. " +
             "Et rien dans les exercices ne l'y aide : les neuf énoncés tirés ne mentionnent " +
             "jamais une pente ni une phase. La confusion n'est pas de l'inattention, c'est " +
             "l'absence de toute occasion de faire le tri.",
      /* RENVOI VÉRIFIÉ, et VOLONTAIREMENT VERS LE QUIZ. Mesure faite : les
         neuf exercices tirés sont NEUF CALCULS NUMÉRIQUES.
           - moule f_c (1, 5, 9) : une division par 2 pi ;
           - moule dB (2, 4, 7)  : un 20 log ;
           - moule module à la coupure (3, 6, 8) : une division par racine 2.
         Aucun ne mentionne une pente en dB/décade, une phase en degrés, une
         asymptote, ni l'ordre du système. Aucun ne comporte de diagramme.
         Renvoyer vers l'un d'eux serait un renvoi FAUX au sens du projet :
         l'exercice ne travaille pas la notion.
         Le quiz 2 traite exactement cette erreur : « Pour un passe-bas du
         2nd ordre, la pente asymptotique au-delà de la pulsation propre
         est : », bonne réponse -40 dB/décade, avec une correction qui donne
         les DEUX cas côte à côte (« Un système du 2nd ordre atténue de
         -40 dB/décade (soit -12 dB/octave) en haute fréquence. Un 1er ordre
         atténue de -20 dB/décade. ») — c'est le tableau de comparaison qui
         manque aux exercices.
         Le remède l'appuie sur le quiz 3 (phase à la coupure = -45°, dont la
         correction précise que la phase va de 0° à -90° pour un premier
         ordre), qui est le seul endroit du livre où la PHASE est interrogée.
         Les deux renvois sont vérifiés sur le contenu réel du quiz. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le quiz 2 fait exactement le travail que les exercices ne font pas : il demande la " +
              "pente d'un <strong>second ordre</strong>, et sa correction donne les deux cas côte " +
              "à côte — $-40$ dB/décade pour le second ordre, $-20$ dB/décade pour le premier. " +
              "C'est le tableau de comparaison qui manque au chapitre. Enchaînez avec le quiz 3 " +
              "(phase à la coupure $= -45°$), qui est le <strong>seul endroit du livre où la phase " +
              "est interrogée</strong>.<br/><br/>" +
              "N'utilisez <strong>aucun exercice</strong> du livre pour cette erreur, et il vaut " +
              "mieux le savoir avant la séance : les neuf énoncés tirés sont neuf calculs " +
              "numériques — une division par $2\\pi$, un $20\\log$, une division par $\\sqrt{2}$. " +
              "<strong>Aucun ne mentionne une pente, une phase, une asymptote ni l'ordre du " +
              "système</strong>, et aucun ne comporte de diagramme. Sur un chapitre qui s'appelle " +
              "« Analyse fréquentielle », c'est le manque le plus " +
              "surprenant.<br/><br/>" +
              "Le critère à faire écrire une fois pour toutes, et il est purement structurel : " +
              "<strong>la pente et la phase finale ne dépendent QUE de l'ordre</strong>, jamais de " +
              "$\\omega_c$ ni de $H_0$. Premier ordre : $-20$ dB/décade, phase de $0°$ à $-90°$. " +
              "Second ordre : $-40$ dB/décade, phase de $0°$ à $-180°$. Le <strong>double dans les " +
              "deux cas</strong>, et c'est logique — un second ordre, c'est deux premiers ordres " +
              "l'un derrière l'autre, donc deux fois la pente et deux fois le déphasage. Dit " +
              "ainsi, il n'y a plus qu'un chiffre à retenir.<br/><br/>" +
              "$\\omega_c$, lui, ne dit <strong>que l'endroit</strong> où la courbe se casse. " +
              "Faites dessiner au tableau deux asymptotes pour deux $\\omega_c$ différents : la " +
              "cassure se déplace, la <strong>pente reste</strong>. C'est le dessin qui règle la " +
              "question, et il coûte trente secondes.<br/><br/>" +
              "Le système réel qui rend le second ordre visible, et il est audible : " +
              "l'<strong>enceinte acoustique</strong> ou la <strong>suspension de voiture</strong>. " +
              "Une suspension est un second ordre (masse, ressort, amortisseur) : au-delà de sa " +
              "fréquence propre, elle filtre les bosses <strong>beaucoup plus fort</strong> qu'un " +
              "simple amortisseur — c'est la pente à $-40$. Et si l'amortisseur est usé " +
              "($m$ petit, donc $Q$ grand), la voiture <strong>rebondit</strong> à une fréquence " +
              "précise : c'est la résonance du cours, et c'est le contrôle technique qui la " +
              "mesure. Faites faire l'essai du rebond sur une aile : <strong>une suspension saine " +
              "ne rebondit qu'une fois.</strong>"
    },
    {
      titre: "Croire que la fréquence de coupure est la fréquence où le signal ne passe plus",
      eleve: "« À $\\omega_c$, le filtre coupe : le gain est nul et la sortie est nulle. » L'élève " +
             "est alors dérouté par l'exercice qui lui demande le module à la coupure et trouve " +
             "$H_0/\\sqrt{2}$ — une valeur non nulle qu'il croit être une erreur.",
      cause: "Le mot « coupure » est trompeur, et c'est le vocabulaire qui fabrique l'erreur, pas " +
             "l'élève : on attend d'une coupure qu'elle coupe. Or à $\\omega_c$ le gain n'a chuté " +
             "que de $3$ dB, c'est-à-dire que l'amplitude vaut encore $71\\%$ de sa valeur " +
             "initiale — il passe encore les trois quarts du signal. La convention du $-3$ dB est " +
             "de plus arbitraire en apparence (pourquoi $3$ et pas $10$ ?) et sa justification " +
             "— c'est le point où la <strong>puissance</strong> est divisée par deux — n'est pas " +
             "dans le cours. D'où une notion mémorisée sans être comprise.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 18, troisième
         tirage) : H_0 = 10, donc |H(j omega_c)| = 10/racine(2) = 10/1,414
         ≈ 7,07.
         POURQUOI L'EXERCICE 3 ET NON 6 NI 8 (même moule) : c'est le tirage où
         H_0 = 10, et c'est décisif pour cette erreur précise. Mesure des
         trois :
           - exercice 3 (H_0 = 10) : réponse 7,07 ;
           - exercice 6 (H_0 = 4)  : réponse 2,83 ;
           - exercice 8 (H_0 = 8)  : réponse 5,66.
         Avec H_0 = 10, le rapport se LIT directement en pourcentage :
         7,07 sur 10, soit 71 %. C'est le seul des trois où l'élève voit le
         chiffre clé du chapitre sans calcul supplémentaire — sur les
         exercices 6 et 8 il faudrait encore diviser (2,83/4 et 5,66/8) pour
         retrouver 71 %, ce qui noie le point pédagogique dans un calcul de
         plus.
         Second avantage de H_0 = 10 : il vaut exactement +20 dB, ce qui
         permet d'enchaîner immédiatement sur la lecture en décibels
         (20 dB - 3 dB = 17 dB), et donc de relier ce moule au moule
         « décibels » de l'erreur 2. Le remède le fait. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 ($H_0 = 10$, réponse $|H| \\approx 7{,}07$), et " +
              "choisissez-le précisément : c'est le seul des trois tirages du moule où " +
              "$H_0 = 10$, donc où le rapport <strong>se lit directement en pourcentage</strong> — " +
              "$7{,}07$ sur $10$, c'est $71\\%$. Sur les exercices 6 ($H_0 = 4$) et 8 " +
              "($H_0 = 8$), il faudrait un calcul de plus pour retrouver ce chiffre, et le point " +
              "se perdrait.<br/><br/>" +
              "Puis posez la question qui démonte l'erreur : « <em>à la fréquence de coupure, " +
              "quelle proportion du signal passe encore ?</em> ». La réponse est " +
              "<strong>$71\\%$</strong>, pas $0$. Une coupure à $-3$ dB laisse passer les trois " +
              "quarts de l'amplitude : <strong>ce n'est pas un mur, c'est le début d'une " +
              "pente</strong>. Le mot « coupure » est un abus de langage historique, et il vaut la " +
              "peine de le dire aux élèves — ils ont raison de trouver le mot mal " +
              "choisi.<br/><br/>" +
              "Profitez de $H_0 = 10$ pour faire le pont avec les décibels : $H_0 = 10$ vaut " +
              "$+20$ dB, donc à la coupure on est à $20 - 3 = 17$ dB. Faites vérifier que " +
              "$20\\log(7{,}07) \\approx 17$. Les deux lectures — en rapport et en " +
              "décibels — décrivent la même chose, et c'est l'occasion de le montrer sur un " +
              "exemple où les deux nombres sont propres.<br/><br/>" +
              "Donnez enfin la justification du $-3$ dB, qui manque au cours et qui rend la " +
              "convention non arbitraire : $-3$ dB en amplitude, c'est la " +
              "<strong>puissance divisée par deux</strong> (puisque la puissance varie comme le " +
              "carré de l'amplitude, et $0{,}71^2 \\approx 0{,}5$). La fréquence de coupure est " +
              "donc le point où le filtre laisse passer <strong>la moitié de la " +
              "puissance</strong> : c'est une définition physique, pas un seuil décoratif.<br/><br/>" +
              "Le système réel qui enlève tout mystère, et vos élèves l'utilisent : " +
              "l'<strong>égaliseur d'une enceinte Bluetooth</strong>, ou le réglage des graves " +
              "d'un autoradio. Quand on coupe les aigus, ils ne <strong>disparaissent pas</strong> " +
              "d'un coup à une fréquence donnée : ils s'atténuent progressivement, de plus en plus " +
              "haut en fréquence. Et c'est heureux — un filtre qui couperait net produirait des " +
              "artefacts audibles. <strong>Un filtre réel a toujours une pente, jamais une " +
              "falaise.</strong>"
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ sur le module chargé ; `validerProf` exige exactement autant
     de compétences que de questions.

     Q1 ($|H| = 10$ → $20$ dB) → résoudre : application directe de
        $G = 20\log|H|$, avec $\log 10 = 1$.
     Q2 ($\omega_c = 314$ rad/s → $f_c = 50$ Hz) → résoudre : application
        directe de $f_c = \omega_c/2\pi$.
     Q3 (pente asymptotique d'un premier ordre → $-20$ dB/décade) → analyser :
        restitution d'une propriété structurelle du modèle, à distinguer de
        trois distracteurs plausibles ($-40$, $-6$, $-10$). Aucun calcul.
        Rattachée à `analyser` selon la convention du référentiel SI de
        l'ouvrage (voir REFERENTIELS.si dans prof.js : les questions de
        restitution y sont rattachées à `analyser`, « identifier et
        caractériser une grandeur ou un constituant »).
     Q4 ($G = -6$ dB → $|H| = 0{,}5$) → modéliser : c'est la seule question du
        devoir qui demande d'INVERSER une relation que le cours donne dans un
        seul sens, et c'est le geste que les neuf exercices ne font jamais.
        L'élève doit reconnaître qu'il faut passer de $G = 20\log|H|$ à
        $|H| = 10^{G/20}$, décision que rien dans l'énoncé ne guide. Ce n'est
        pas `résoudre` : il n'y a pas de formule à appliquer telle quelle, il y
        a une formule à retourner.
     Q5 ($m = 0{,}25$ → $Q = 2$) → résoudre : application directe de
        $Q = 1/(2m)$. La correction ajoute une interprétation ($m < 0{,}707$,
        donc résonance) mais la question ne la demande pas.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés, et le
     cas de `expérimenter` est particulièrement frappant ici : un diagramme de
     Bode est, dans la pratique industrielle, un RELEVÉ — on injecte un signal
     sinusoïdal à fréquence variable et on mesure. Le corpus n'en propose rien,
     ni exercice, ni question. Voir la note de REFERENTIELS.si dans prof.js :
     sur les 96 questions de l'ouvrage, `expérimenter` et `concevoir` ne sont
     JAMAIS tirés.

     À SIGNALER, et c'est écrit dans la `note` : ce devoir interroge la pente
     asymptotique (Q3) et le facteur de qualité (Q5) alors que les neuf
     exercices du livre ne mentionnent NI pente NI phase NI résonance — aucun
     ne comporte de diagramme. Q4 demande de plus la conversion dB → $|H|$,
     que les trois exercices de décibels ne font jamais (ils vont tous dans
     l'autre sens). Trois des cinq questions sont donc sans exercice
     correspondant ; le quiz couvre la pente (son énoncé 2) et la phase (son
     énoncé 3), et rien d'autre. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'modéliser', 'résoudre']
  }
};
