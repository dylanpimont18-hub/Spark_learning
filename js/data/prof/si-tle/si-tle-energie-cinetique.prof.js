/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-energie-cinetique.prof.js
   Fiche professeur du chapitre « Énergie cinétique et théorème de l'énergie
   cinétique » (terminale SI), pour l'édition du professeur. JAMAIS chargée par
   le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 14 (chapitre 15 de l'ouvrage `lycee-si`).

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du corps
   du chapitre. Deux conséquences dures, vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   TROIS MOULES, relevés un par un :
     - énergie cinétique de ROTATION, $E_c = \frac{1}{2}J\omega^2$
       → exercices 1, 4, 7 ;
     - distance d'arrêt au freinage (TEC avec un seul travail négatif)
       → exercices 2, 6, 9 ;
     - vitesse finale d'un chariot poussé avec frottements (TEC avec DEUX
       travaux de signes opposés) → exercices 3, 5, 8.

   CE QUE LE CORPUS COUVRE BIEN, ET C'EST RARE DANS CE DOSSIER : trois moules
   pour cinq questions d'évaluation, et les questions 1, 2, 4 et 5 ont chacune
   un moule voisin. Ce chapitre est le MIEUX DOTÉ des six que cette campagne
   traite : trois renvois vers des exercices sont possibles et vérifiés.

   LE SEUL VRAI TROU : la question 3 du devoir (travail d'une force
   perpendiculaire → nul) n'a AUCUN exercice correspondant. Aucun des neuf
   énoncés ne fait intervenir d'angle : dans les trois moules, force et
   déplacement sont toujours colinéaires, et le $\cos\alpha$ vaut $\pm 1$ sans
   jamais être écrit. Le quiz ne la traite pas non plus (ses trois questions
   portent sur $E_c$, sur la proportionnalité en $v^2$ et sur $E_c$ de
   rotation). D'où un `exercice: null` assumé sur l'erreur correspondante.

   DÉFAUT DE NOTATION DÉCIMALE : CORRIGÉ LE 2026-09-18, dans js/data/ et non
   ici. Le `generate()` de ce module interpolait ses résultats sans passer par
   `fr()` — « d = 313.7 m » à l'exercice 2, « -156132.5 J » — et les deux
   branches « rotation » et « accélération » employaient encore le
   `.replace('.', '{,}')` à la main que CLAUDE.md (§2) proscrit. Les valeurs
   TIRÉES sont inchangées (la graine ne bouge pas, seul l'affichage est
   corrigé) : les renvois de cette fiche restent valides.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-energie-cinetique"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     ch. 1 (Dynamique du solide, PFD) : RETENU, et c'est une dépendance forte,
     pas une parenté lointaine. Deux raisons mesurées sur les contenus :
     - le MOMENT D'INERTIE $J$ est défini au chapitre 1 et REPRIS TEL QUEL
       ici, dans $E_{c,\text{rot}} = \frac{1}{2}J\omega^2$. Ce chapitre ne le
       redéfinit pas : sa définition ne dit que « $J$ est le moment d'inertie ».
       Trois des neuf exercices (1, 4, 7) l'utilisent d'entrée.
     - le BILAN DES FORCES, installé au chapitre 1, est le préalable du calcul
       des travaux : on ne peut pas sommer les $W(\vec{F})$ sans avoir
       d'abord recensé les $\vec{F}$. Les exercices 3, 5 et 8 (force motrice
       ET frottements) le supposent explicitement.
     Le rang conseillé du chapitre 1 est $1$, strictement inférieur au rang $2$
     de celui-ci : la contrainte de `validerPrerequis` est satisfaite.

     Candidats examinés et ÉCARTÉS :
     - ch. 5 (Transmission de puissance) : partage la notion de puissance et le
       rendement, et le lien est réel ($P = C\omega$, $P = Fv$). Mais il joue
       dans l'autre sens ou en parallèle : la transmission raisonne en régime
       ÉTABLI (vitesse constante), l'énergie cinétique en régime VARIÉ
       (accélération, freinage). Aucun des neuf exercices d'ici n'utilise de
       rapport de transmission. Écarté.
     - ch. 3 et 6 (PID, Bode) : automatique continue, aucun outil commun.
       Écartés.
     - ch. 4 (GRAFCET) et ch. 7 (Réseaux) : autres domaines. Écartés.

     PRÉREQUIS NON DÉCLARABLE, traité dans la `note` : ce chapitre suppose la
     notion d'ÉNERGIE et de RENDEMENT vue en première
     (`si-1re-energie-rendement`), qui installe le joule, la conservation de
     l'énergie et la chaîne énergétique. `prerequis` ne visant qu'un chapitre
     du même niveau, la colonne « S'appuie sur » n'en montrera rien. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2 dans le dossier `si-tle`, celui du
     livre (chapitre 15 de l'ouvrage, 2e du dossier).

     Le rang 2 est contraint par le haut : le chapitre 1 (PFD) doit précéder,
     puisqu'il définit le moment d'inertie que celui-ci réutilise. Il est
     contraint par le bas, plus faiblement, par l'intérêt de garder le BLOC
     MÉCANIQUE d'un seul tenant — PFD (1), énergie cinétique (2), transmission
     (5) — plutôt que de l'entrecouper d'automatique. Le rang 3 serait une
     permutation acceptable si l'on voulait traiter le PID plus tôt ; mais
     séparer le PFD de son théorème intégré par un chapitre d'automatique fait
     perdre le fil du raisonnement énergétique, qui est le vrai gain de ce
     chapitre.

     Les deux ordres — livre et progression — coïncident : pas de triangle
     d'alerte dans le tableau imprimé.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 2,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 2 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser les flux et les transferts d'énergie ».

     Bornés à ce que le chapitre traite RÉELLEMENT : l'énergie cinétique de
     translation et de rotation, le travail d'une force constante, et le
     théorème de l'énergie cinétique. Rien sur l'énergie potentielle ni la
     conservation de l'énergie mécanique (que le corpus n'aborde pas), rien sur
     les puissances instantanées. */
  attendus: [
    "Calculer l'énergie cinétique d'un solide en translation ($\\frac{1}{2}mv^2$) et en rotation ($\\frac{1}{2}J\\omega^2$) en identifiant la grandeur cinématique pertinente",
    "Déterminer le travail d'une force constante et en établir le signe selon qu'elle est motrice, résistante ou perpendiculaire au déplacement",
    "Appliquer le théorème de l'énergie cinétique pour déterminer une vitesse, une distance ou un effort, et valider le résultat par son ordre de grandeur"
  ],

  note: "L'énergie cinétique en translation et en rotation, le travail d'une force constante, le " +
        "théorème de l'énergie cinétique : le chapitre donne la voie <strong>énergétique</strong>, " +
        "celle qui relie directement une vitesse à une distance sans passer par le temps. C'est " +
        "l'outil qui permet de répondre à « quelle distance pour s'arrêter ? » en une ligne, là où " +
        "le PFD demanderait d'intégrer.<br/><br/>" +
        "<strong>Un prérequis compte et ne sera pas affiché.</strong> La colonne « S'appuie sur » " +
        "montre bien le chapitre 1 (Dynamique du solide), qui définit le moment d'inertie $J$ " +
        "repris ici sans être redéfini. Mais ce chapitre suppose aussi la notion d'" +
        "<strong>énergie et de rendement</strong> vue en première " +
        "(<em>Énergie, puissance et rendement</em>) : le joule, la chaîne énergétique, l'idée que " +
        "l'énergie se conserve aux pertes près. Un prérequis ne pouvant désigner qu'un chapitre du " +
        "même niveau, <strong>rien ne le montrera</strong> : si le groupe ne sait pas ce qu'est un " +
        "joule, c'est là qu'il faut revenir, pas ici.<br/><br/>" +
        "Côté mathématiques, l'exigence est modeste — et c'est ce qui fait de ce chapitre un bon " +
        "second : il faut savoir élever au carré, extraire une racine carrée ($v_f = \\sqrt{2W/m}$) " +
        "et manipuler un cosinus. Aucune dérivée, contrairement au chapitre 1. Si le groupe a " +
        "peiné sur le PFD faute d'outils mathématiques, <strong>ce chapitre est le bon endroit " +
        "pour reprendre confiance</strong>.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas.</strong> Le tirage " +
        "comporte <strong>9 énoncés</strong>, répartis en trois moules bien distincts : énergie " +
        "cinétique de rotation (exercices 1, 4, 7), distance d'arrêt au freinage (2, 6, 9) et " +
        "vitesse finale d'un chariot poussé avec frottements (3, 5, 8). C'est le chapitre le " +
        "<strong>mieux doté</strong> de la partie terminale, et quatre des cinq questions du devoir " +
        "y trouvent un exercice voisin.<br/><br/>" +
        "Le trou unique, mais net : <strong>aucun des neuf énoncés ne fait intervenir d'angle</strong>. " +
        "Force et déplacement y sont toujours colinéaires, le $\\cos\\alpha$ vaut $\\pm 1$ et n'est " +
        "jamais écrit. La question $3$ du devoir noté (« le travail d'une force perpendiculaire au " +
        "déplacement est... ») n'a donc <strong>aucun support</strong> dans le livre, ni dans les " +
        "exercices ni dans le quiz. Prévoyez deux minutes au tableau là-dessus : la réaction " +
        "normale du sol sur un chariot qui avance à l'horizontale est l'exemple qui règle la " +
        "question.",

  erreurs: [
    {
      titre: "Oublier le carré de la vitesse, ou raisonner comme si l'énergie était proportionnelle à $v$",
      eleve: "Pour un véhicule de $1716$ kg à $28$ m/s, l'élève écrit " +
             "$E_c = \\frac{1}{2} \\times 1716 \\times 28 = 24\\,024$ J au lieu de " +
             "$672\\,672$ J. Ou, interrogé sur le doublement de la vitesse, il répond que la " +
             "distance de freinage double.",
      cause: "L'écriture $\\frac{1}{2}mv^2$ se lit de gauche à droite, et l'exposant $2$ est " +
             "typographiquement le plus petit caractère de la formule : il disparaît à la " +
             "recopie. Plus profondément, l'intuition quotidienne est linéaire — « deux fois plus " +
             "vite, deux fois plus loin » est la structure de raisonnement par défaut, et elle est " +
             "juste pour la distance parcourue à vitesse constante. Elle est fausse pour l'énergie, " +
             "et c'est précisément là que se joue la sécurité routière.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 14, deuxième
         tirage) : véhicule m = 1716 kg à v_i = 28 m/s, freinage à
         F_f = 2144 N jusqu'à l'arrêt, donc
         Delta E_c = -½ × 1716 × 28² = -672 672 J puis d = 672672/2144 ≈ 313,7 m.
         POURQUOI L'EXERCICE 2 ET NON 6 NI 9 (mêmes moule) : c'est le tirage
         dont la VITESSE est la plus grande (28 m/s contre 24 pour le 6 et 19
         pour le 9) et dont la force de freinage est la plus FAIBLE (2144 N
         contre 7123 et 3082). Conséquence mesurée : sa distance d'arrêt
         (≈ 313,7 m) est de très loin la plus spectaculaire des trois — le 6
         donne 78,8 m et le 9 donne 50,7 m. Or c'est exactement l'effet du
         carré qu'on veut rendre visible : un chiffre de 300 m frappe, un
         chiffre de 50 m passe inaperçu. L'élève qui oublie le carré trouve
         11,2 m au lieu de 313,7 m, soit un facteur 28 — c'est-à-dire v
         lui-même, ce que le remède fait remarquer.
         Le moule « rotation » (1, 4, 7) travaillerait aussi le carré, mais
         sur omega, et sans conséquence physique parlante : écarté au profit
         du freinage, dont l'enjeu se raconte. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 (véhicule de $1716$ kg à $28$ m/s, freinage à " +
              "$2144$ N) et <strong>écrivez les deux résultats côte à côte au tableau</strong> : " +
              "avec le carré, $d \\approx 313{,}7$ m ; sans le carré, $d \\approx 11{,}2$ m. Le " +
              "rapport entre les deux vaut $28$ — c'est-à-dire la vitesse elle-même, ce qui n'est " +
              "pas un hasard et mérite d'être dit : oublier le carré, c'est diviser par " +
              "$v$.<br/><br/>" +
              "Le raisonnement à faire produire ensuite, sans calculatrice : <strong>si la vitesse " +
              "double, l'énergie est multipliée par $4$, donc la distance d'arrêt aussi</strong>. " +
              "C'est la question 2 du quiz, dont la correction pose l'écriture complète " +
              "$d' = m(2v)^2/(2F_f) = 4d$. Faites-la traiter juste après l'exercice : le calcul " +
              "d'abord, la loi ensuite.<br/><br/>" +
              "Le système réel qui donne son poids à tout cela, et vos élèves y sont sensibles : " +
              "les <strong>panneaux de distance de sécurité</strong> sur autoroute, ou la " +
              "<strong>course d'arrêt d'un chariot élévateur</strong> en entrepôt. À $30$ km/h un " +
              "chariot chargé s'arrête en quelques mètres ; à $60$ km/h il lui en faut " +
              "<strong>quatre fois plus</strong>, pas deux. C'est pour cela que les allées sont " +
              "limitées en vitesse, et c'est une décision de bureau d'études fondée exactement sur " +
              "ce calcul."
    },
    {
      titre: "Se tromper de signe sur le travail, ou additionner les frottements au lieu de les retrancher",
      eleve: "Sur le chariot poussé par $F = 323$ N sur $19$ m avec des frottements $f = 42$ N, " +
             "l'élève écrit $\\Delta E_c = 6137 + 798 = 6935$ J. Ou, sur un freinage, il pose " +
             "$\\Delta E_c = +F_f \\times d$ et obtient une distance négative sans s'en étonner.",
      cause: "Le théorème de l'énergie cinétique est une somme ALGÉBRIQUE, et rien dans l'écriture " +
             "$\\Delta E_c = \\sum W$ ne rappelle que certains termes sont négatifs. L'élève " +
             "calcule chaque travail en valeur absolue — ce sont des multiplications toutes " +
             "positives — puis les additionne, parce qu'une somme s'additionne. Le signe se décide " +
             "avant le calcul, à partir du SENS de la force par rapport au déplacement, et c'est " +
             "une étape purement qualitative que la mise en équation ne réclame pas visiblement.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 14, troisième
         tirage) : chariot m = 63 kg au repos, F = 323 N sur d = 19 m avec
         f = 42 N, donc W_F = +6137 J, W_f = -798 J,
         Delta E_c = 6137 - 798 = 5339 J, v_f ≈ 13 m/s.
         POURQUOI CE MOULE (3, 5, 8) : c'est le SEUL des trois à faire
         intervenir DEUX travaux de signes OPPOSÉS dans la même ligne — le
         moule « rotation » n'a aucun travail, le moule « freinage » n'en a
         qu'un. C'est donc le seul endroit du livre où l'erreur de signe
         PRODUIT un résultat faux qu'on peut comparer au bon.
         POURQUOI L'EXERCICE 3 ET NON 5 NI 8 : c'est le tirage où l'écart
         entre F et f est le plus GRAND (323 contre 42, soit un rapport de
         7,7 ; l'exercice 5 donne 309 contre 66 et le 8 donne 272 contre 67,
         rapports de 4,7 et 4,1). Conséquence : chez l'élève qui additionne,
         l'erreur sur v_f est petite en pourcentage (13 m/s deviendrait
         14,8 m/s), ce qui EST le point pédagogique — le remède le retourne en
         argument : sur ce tirage l'erreur de signe ne se voit PAS dans le
         résultat, et c'est pourquoi il faut la traquer dans la RÉDACTION et
         non dans la réponse. Le remède demande ensuite l'exercice 8, dont
         l'écart est le plus faible, pour la comparaison.
         Sa correction affiche déjà les deux travaux signés séparément
         (« W_F = 323 × 19 = 6137 J, W_f = -42 × 19 = -798 J »), ce qui est
         exactement la disposition à imposer. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 ($m = 63$ kg, $F = 323$ N sur $19$ m, $f = 42$ N) en " +
              "imposant la disposition que la correction du livre emploie déjà : " +
              "<strong>un travail par ligne, avec son signe écrit avant son calcul</strong> — " +
              "$W_F = +323 \\times 19 = +6137$ J, puis $W_f = -42 \\times 19 = -798$ J, puis " +
              "seulement la somme $5339$ J. Le signe se décide en regardant la flèche, pas la " +
              "calculatrice.<br/><br/>" +
              "Attention, et c'est utile à savoir avant la séance : sur ce tirage, l'erreur ne se " +
              "voit <strong>presque pas dans le résultat</strong>. En additionnant, l'élève trouve " +
              "$14{,}8$ m/s au lieu de $13$ m/s — c'est faux, mais c'est plausible. Raison de plus " +
              "pour contrôler la <strong>rédaction</strong> et non la seule réponse. Enchaînez " +
              "avec l'exercice 8 ($272$ N contre $67$ N de frottements) où l'écart relatif est plus " +
              "grand : l'erreur y devient visible.<br/><br/>" +
              "La règle à faire formuler par les élèves eux-mêmes, en français avant les " +
              "mathématiques : <strong>ce qui va dans le sens du mouvement apporte de l'énergie " +
              "($W > 0$), ce qui s'y oppose en enlève ($W < 0$)</strong>.<br/><br/>" +
              "Le système réel qui ne trompe personne : un <strong>convoyeur à bande</strong> qui " +
              "monte des cartons. Le moteur fournit, les frottements des rouleaux prélèvent. Si les " +
              "deux s'additionnaient, le convoyeur accélérerait tout seul indéfiniment — " +
              "<strong>le carton arriverait plus vite qu'il n'a été poussé</strong>. C'est " +
              "l'absurdité à faire constater : elle est plus convaincante qu'une règle de signes."
    },
    {
      titre: "Confondre énergie cinétique de translation et de rotation, ou utiliser la vitesse angulaire dans la mauvaise formule",
      eleve: "Sur le volant d'inertie de $J = 1{,}3$ kg·m² tournant à $\\omega = 52$ rad/s, l'élève " +
             "écrit $E_c = \\frac{1}{2} \\times 1{,}3 \\times 52^2$ mais en appelant $1{,}3$ « la " +
             "masse » et $52$ « la vitesse ». Ou bien il cherche la masse du volant dans l'énoncé " +
             "et se bloque parce qu'elle n'y est pas.",
      cause: "Les deux formules sont volontairement parallèles — $\\frac{1}{2}mv^2$ et " +
             "$\\frac{1}{2}J\\omega^2$ — et ce parallélisme, qui est un cadeau pour la mémoire, " +
             "est un piège pour la compréhension : l'élève retient la FORME et croit avoir compris " +
             "les grandeurs. Beaucoup calculent juste en appelant tout « masse » et " +
             "« vitesse » — ce qui passe inaperçu à la correction, puisque le résultat est bon, " +
             "jusqu'au jour où l'énoncé donne à la fois une masse ET un moment d'inertie et qu'il " +
             "faut choisir. La confusion vient aussi des unités, rarement regardées : kg contre " +
             "kg·m², m/s contre rad/s.",
      /* RENVOI VÉRIFIÉ. Exercice 7 du livre (graine 20260816 + 14, septième
         tirage) : volant d'inertie J = 1,0 kg·m² à omega = 72 rad/s, donc
         E_c,rot = ½ × 1,0 × 72² = 0,50 × 5184 = 2592 J.
         POURQUOI L'EXERCICE 7 ET NON 1 NI 4 (même moule) : c'est le tirage où
         J = 1,0 kg·m² EXACTEMENT. Le coefficient valant 1, l'élève qui
         confond J et m ne peut pas se rattraper au résultat — le nombre 1,0
         ne ressemble ni à une masse plausible de volant (plusieurs
         kilogrammes) ni à rien d'autre : la seule façon de comprendre ce
         qu'est 1,0, c'est de lire son unité. C'est donc le meilleur support
         pour un travail SUR LES UNITÉS, qui est le cœur de cette erreur.
         L'exercice 1 (J = 1,3, omega = 52, E_c = 1758 J) et l'exercice 4
         (J = 1,5, omega = 83, E_c = 5167 J) conviendraient au calcul mais pas
         à la discussion : leurs valeurs de J pourraient passer pour des
         masses et l'élève n'aurait aucune raison de s'interroger. L'exercice 7
         est donc retenu, et le remède demande de le mettre EN REGARD de la
         question 1 du quiz (véhicule de 800 kg à 10 m/s, translation) pour
         que les deux formules soient traitées dans la même minute. */
      exercice: { type: "exercice", n: 7 },
      remede: "Faites traiter l'exercice 7 ($J = 1{,}0$ kg·m², $\\omega = 72$ rad/s, réponse " +
              "$2592$ J) en exigeant que <strong>chaque nombre soit recopié avec son unité</strong>. " +
              "Le tirage est bien choisi pour cela : $J = 1{,}0$ kg·m² ne ressemble à aucune masse " +
              "de volant plausible, donc l'élève ne peut pas s'en tirer par l'intuition — il doit " +
              "lire l'unité. Et $\\text{kg}\\cdot\\text{m}^2$ n'est pas $\\text{kg}$ : c'est là que " +
              "tout se décide.<br/><br/>" +
              "Puis, dans la même minute, faites traiter la question 1 du quiz (véhicule de " +
              "$800$ kg à $10$ m/s, réponse $40\\,000$ J), qui est la version " +
              "<strong>translation</strong> du même calcul. Les deux au tableau l'un sous l'autre, " +
              "avec les unités : $\\text{kg} \\times (\\text{m/s})^2$ d'un côté, " +
              "$\\text{kg}\\cdot\\text{m}^2 \\times (\\text{rad/s})^2$ de l'autre. Les deux donnent " +
              "des joules, et c'est le seul point commun.<br/><br/>" +
              "Le tri à faire poser à l'élève <strong>avant</strong> de choisir la formule : " +
              "« <em>qu'est-ce qui bouge, et comment ?</em> ». Un solide qui se déplace en bloc → " +
              "translation → $m$ et $v$. Un solide qui tourne autour d'un axe → rotation → $J$ et " +
              "$\\omega$.<br/><br/>" +
              "Le système réel qui les contient tous les deux, et il est sur toutes les " +
              "routes : une <strong>roue de véhicule</strong>. Elle avance (translation de son " +
              "centre) ET elle tourne (rotation autour de son axe) : son énergie cinétique est la " +
              "<strong>somme des deux termes</strong>, comme le cours le signale. Faites poser la " +
              "question à l'oral — « <em>combien de termes dans l'énergie cinétique d'une roue qui " +
              "roule ?</em> » — parce que le livre ne propose aucun exercice sur ce cas combiné, " +
              "et que c'est pourtant le cas de tous les véhicules."
    },
    {
      titre: "Croire que toute force appliquée travaille, et oublier le $\\cos\\alpha$",
      eleve: "L'élève inclut le poids et la réaction du sol dans le bilan des travaux d'un chariot " +
             "qui avance à l'horizontale, et obtient une énergie cinétique fausse. Ou, sur une " +
             "force inclinée, il écrit $W = F \\times d$ sans le cosinus.",
      cause: "Le mot « travail » a en physique un sens beaucoup plus étroit que dans la langue " +
             "courante : une force peut être intense, permanente, indispensable — et ne " +
             "<strong>rien</strong> apporter en énergie, si elle est perpendiculaire au " +
             "déplacement. C'est contre-intuitif : la réaction du sol « porte » tout le chariot, " +
             "elle a l'air de faire l'essentiel du travail. Et comme les neuf énoncés du livre " +
             "n'ont jamais d'angle, l'élève n'a jamais eu à écrire un $\\cos\\alpha$ : il ignore " +
             "moins la formule qu'il n'a pas eu l'occasion de la pratiquer.",
      /* exercice: null ASSUMÉ, et MESURÉ. Les neuf tirages ont été relus un
         par un : dans les trois moules, force et déplacement sont TOUJOURS
         colinéaires.
           - moule rotation (1, 4, 7) : aucun travail ne figure, on ne calcule
             qu'une énergie cinétique ;
           - moule freinage (2, 6, 9) : un seul travail, celui du freinage,
             colinéaire et opposé au mouvement (cos = -1, jamais écrit) ;
           - moule chariot (3, 5, 8) : deux travaux, tous deux colinéaires
             (cos = +1 et cos = -1, jamais écrits).
         Aucun des neuf ne mentionne d'angle, de plan incliné, de force
         oblique, ni le poids et la réaction du sol. Le cos(alpha) du cours
         n'est donc JAMAIS mis en oeuvre par un exercice.
         Le QUIZ ne le fait pas non plus, vérifié : ses trois questions portent
         sur E_c (translation), sur la proportionnalité de la distance de
         freinage en v², et sur E_c de rotation.
         Le seul support du livre est la question 3 de l'évaluation notée
         (« Le travail d'une force perpendiculaire au déplacement est : »
         → Nul), et une remédiation ne renvoie JAMAIS vers le devoir noté.
         D'où exercice: null, et un remède qui donne à l'enseignant le geste
         de substitution avec les valeurs prêtes. */
      exercice: null,
      remede: "Aucun exercice du livre ne peut servir ici, et il vaut mieux le savoir en préparant " +
              "la séance : les neuf énoncés tirés ont tous force et déplacement " +
              "<strong>colinéaires</strong>. Le $\\cos\\alpha$ y vaut $+1$ ou $-1$ et n'est jamais " +
              "écrit ; aucun ne parle de plan incliné, de force oblique, ni du poids et de la " +
              "réaction du sol. Le quiz ne le traite pas davantage. Le seul support du livre est la " +
              "question $3$ du devoir noté — donc hors de portée pour une remédiation.<br/><br/>" +
              "<strong>Le geste de substitution, en deux minutes de tableau.</strong> Reprenez " +
              "l'exercice 3 du livre (chariot de $63$ kg poussé par $323$ N sur $19$ m) et " +
              "demandez le bilan COMPLET des forces : il y en a <strong>quatre</strong>, pas deux — " +
              "la poussée, les frottements, le poids et la réaction du sol. Puis posez la question " +
              "une par une : « <em>celle-là, elle travaille ?</em> ». Le poids et la réaction sont " +
              "verticaux, le déplacement est horizontal, $\\cos 90° = 0$ : leur travail est " +
              "<strong>nul</strong>. Ils ne disparaissent pas du bilan des forces — ils " +
              "disparaissent du bilan des <strong>travaux</strong>, et c'est une distinction que " +
              "les exercices du livre ne font jamais paraître, puisqu'ils ne mentionnent même pas " +
              "ces deux forces.<br/><br/>" +
              "Puis ajoutez l'angle, sur le même énoncé : « <em>et si on tirait le chariot avec une " +
              "sangle inclinée à $30°$ ?</em> ». Le travail devient " +
              "$W = 323 \\times 19 \\times \\cos 30° \\approx 5315$ J au lieu de $6137$ J — " +
              "<strong>on a perdu $13\\%$ de l'effort</strong>. C'est un chiffre qui parle, et il " +
              "fait le lien avec le geste de l'atelier.<br/><br/>" +
              "Le système réel qui règle la question définitivement : <strong>tirer une palette " +
              "avec une sangle</strong>. Plus on tire vers le haut, moins on avance pour le même " +
              "effort — les manutentionnaires le savent d'expérience et tirent au plus près de " +
              "l'horizontale. Et à l'inverse : un <strong>satellite en orbite circulaire</strong> " +
              "subit en permanence l'attraction terrestre, perpendiculaire à sa trajectoire ; " +
              "elle ne travaille pas, et c'est pourquoi sa vitesse ne change jamais. " +
              "<strong>Une force perpendiculaire dévie sans accélérer.</strong>"
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ sur le module chargé ; `validerProf` exige exactement autant
     de compétences que de questions.

     Q1 ($m = 5$ kg, $v = 6$ m/s → $E_c = 90$ J) → résoudre : application
        directe de $\frac{1}{2}mv^2$, une seule étape.
     Q2 ($m = 2$ kg, $v_i = 3$, $v_f = 7$ → $\Delta E_c = 40$ J) → résoudre :
        deux évaluations et une soustraction, mais aucune décision de méthode.
        Ce n'est pas `analyser` : la question ne demande pas d'interpréter le
        signe, seulement la valeur.
     Q3 (travail d'une force perpendiculaire → nul) → analyser : restitution
        d'une propriété du modèle, à partir de $\cos 90° = 0$. Aucun calcul
        numérique. Rattachée à `analyser` selon la convention du référentiel
        SI de l'ouvrage (voir REFERENTIELS.si dans prof.js : les questions de
        restitution y sont rattachées à `analyser`, « identifier et
        caractériser une grandeur ou un constituant »).
     Q4 (moto de $200$ kg à $20$ m/s, arrêt en $50$ m → $F = 800$ N) →
        modéliser : c'est la question la plus exigeante du devoir, et la seule
        où l'inconnue n'est pas une énergie. Il faut écrire le TEC, y placer
        un travail NÉGATIF pour une force dont le sens n'est pas donné, puis
        isoler $F$. Le choix du signe est une décision de modélisation, pas
        une exécution.
     Q5 ($J = 0{,}5$ kg·m², $\omega = 100$ rad/s → $2500$ J) → résoudre :
        application directe de $\frac{1}{2}J\omega^2$, symétrique de Q1.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés, et
     c'est un constat mesuré sur les cinq énoncés : aucune question ne demande
     de mesurer, de concevoir, ni de rédiger une explication. Voir la note de
     REFERENTIELS.si dans prof.js : sur les 96 questions de l'ouvrage,
     `expérimenter` et `concevoir` ne sont JAMAIS tirés.

     À SIGNALER, et c'est écrit dans la `note` : Q3 est la seule question du
     devoir sans aucun support dans les neuf exercices ni dans le quiz, faute
     du moindre énoncé comportant un angle. Les quatre autres ont chacune un
     moule voisin — ce qui fait de ce chapitre le mieux couvert des six que
     cette campagne traite. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'modéliser', 'résoudre']
  }
};
