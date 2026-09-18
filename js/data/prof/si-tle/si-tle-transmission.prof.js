/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-transmission.prof.js
   Fiche professeur du chapitre « Transmission de puissance » (terminale SI),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 17 (chapitre 18 de l'ouvrage `lycee-si`).

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du corps
   du chapitre. Deux conséquences dures, vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   TROIS MOULES, relevés un par un :
     - vitesse de sortie d'un engrenage simple, $N_s = (Z_e/Z_s) N_e$
       → exercices 1, 5, 8 ;
     - couple de sortie d'un réducteur AVEC rendement,
       $C_s = (\eta/|r|) C_e$ → exercices 2, 4, 7 ;
     - rapport global d'un train à deux étages, $r = r_1 r_2$
       → exercices 3, 6, 9.

   COUVERTURE MESURÉE : quatre des cinq questions du devoir (Q1, Q2, Q4, Q5)
   ont un moule voisin — c'est une bonne couverture pour ce dossier. Le trou
   unique est la question 3 (« la relation entre couple, puissance et vitesse
   angulaire est : » → $C = P/\omega$) : aucun des neuf énoncés ne calcule ni
   ne mentionne une PUISSANCE en watts. Les trois moules manipulent des
   rapports de vitesses, des couples et un rendement, jamais $P = C\omega$. Le
   quiz ne la traite pas non plus (ses trois questions portent sur $|r|$, sur
   le sens de rotation et sur le couple avec $\eta = 1$). D'où un
   `exercice: null` assumé sur l'erreur correspondante.

   FAIT UTILE, ET IL SAUVE UNE ERREUR : le quiz 3 est le SEUL endroit du livre
   où le rendement vaut $\eta = 1$. Mis en regard de l'exercice 2 ($\eta =
   0{,}85$), il donne exactement la comparaison « avec / sans pertes » que le
   corpus ne propose nulle part ailleurs.

   DÉFAUT PRÉEXISTANT MESURÉ, hors du périmètre de cette fiche : le
   `generate()` de ce module produit de la notation décimale ANGLAISE dans les
   corrections du moule « couple » (« C_s = 47.6 N·m » à l'exercice 2,
   « 71.3 » au 4, « 19.8 » au 7). À corriger par `fr()` dans js/data/, pas ici.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-transmission"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     ch. 1 (Dynamique du solide, PFD) : RETENU. C'est lui qui installe le
     COUPLE et le MOMENT, qui sont l'objet central de ce chapitre. La notion de
     « couple de sortie $C_s$ » n'a aucun sens pour un élève qui n'a pas vu
     qu'un moment est un effort de rotation, et le chapitre ne la redéfinit
     pas : sa définition du couple de sortie donne directement la formule
     $C_s = (\eta/|r|)C_e$ sans revenir sur la grandeur elle-même. Les trois
     exercices du moule « couple » (2, 4, 7) la supposent d'entrée. Rang
     conseillé du chapitre 1 : $1 < 3$. Contrainte satisfaite.

     ch. 2 (Énergie cinétique) : RETENU, et c'est le prérequis le moins
     évident des deux, donc celui qui mérite d'être justifié. Ce chapitre-ci
     repose entièrement sur la CONSERVATION DE LA PUISSANCE aux pertes près
     ($P_s = \eta P_e$) : c'est de là que sort le fait qu'un réducteur
     multiplie le couple. Or l'idée qu'une grandeur énergétique se conserve,
     se transfère et se perd est installée au chapitre 2, avec le travail et
     le théorème de l'énergie cinétique — c'est là que les élèves rencontrent
     pour la première fois, dans ce niveau, un bilan énergétique signé.
     Sans lui, « le couple augmente parce que la puissance se conserve » est
     une incantation. Rang conseillé du chapitre 2 : $2 < 3$. Contrainte
     satisfaite.

     Candidats examinés et ÉCARTÉS :
     - ch. 3 (Systèmes asservis, PID) : un asservissement de position pilote
       très souvent un motoréducteur, donc l'adjacence industrielle est
       réelle. Mais c'est une adjacence, pas une dépendance : rien du chapitre
       3 (FTBO, erreur statique, correcteur) n'est nécessaire pour calculer un
       rapport de réduction. Et le rang de 3 ($5$) étant supérieur à celui-ci
       ($3$), le déclarer serait de toute façon refusé. Écarté.
     - ch. 4 (GRAFCET) : un GRAFCET commande des actionneurs qui transmettent
       de la puissance, mais les deux formalismes n'ont rien en commun.
       Écarté.
     - ch. 6 (Bode) et ch. 7 (Réseaux) : aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLE, mentionné dans la `note` : la lecture d'un
     DESSIN TECHNIQUE et l'identification des liaisons mécaniques, vues en
     seconde et en première, sont supposées dès qu'on demande d'identifier un
     pignon et une roue sur un plan. Rien ne l'affichera. */
  prerequis: [1, 2],

  /* Rang conseillé (2026-09-17) : rang 3 dans le dossier `si-tle`, alors que
     le livre le range en 5e position (chapitre 18 de l'ouvrage).

     LES DEUX ORDRES DIFFÈRENT ICI, et c'est délibéré : le tableau imprimé
     affichera donc un triangle d'alerte sur ce chapitre. La raison est
     simple. Le livre range par DOMAINE et place la transmission après le bloc
     automatique (PID, GRAFCET) ; une progression range par DÉPENDANCE, et la
     transmission appartient au BLOC MÉCANIQUE qu'elle clôt naturellement :
     - le chapitre 1 donne le couple et le moment ;
     - le chapitre 2 donne la conservation de l'énergie et le rendement ;
     - ce chapitre-ci les applique à la chaîne de transmission réelle
       (engrenages, courroies, vis-écrou) et à la notion de motoréducteur.
     Enseigner les trois de suite fait un ensemble cohérent de six à huit
     séances ; les séparer par l'automatique oblige à rappeler deux fois ce
     qu'est un couple.

     Placer ce chapitre au rang 3 a un second avantage, celui-là très concret
     en SI : le MOTORÉDUCTEUR est le composant que les élèves manipulent le
     plus en projet (portail, convoyeur, robot suiveur de ligne). L'avoir vu
     tôt dans l'année rend les séances de projet immédiatement plus riches.

     Contrainte de compilation vérifiée : les deux prérequis déclarés ont un
     rang conseillé strictement inférieur ($1$ et $2$, contre $3$ ici).

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 3,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 5 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser et modéliser la transmission de puissance ».

     Bornés à ce que le chapitre traite RÉELLEMENT : le rapport de
     transmission, les trois familles de systèmes (engrenages, courroies,
     vis-écrou), la conservation de la puissance avec rendement, et le train à
     plusieurs étages. Rien sur le dimensionnement des dentures, rien sur les
     efforts sur les arbres, rien sur les trains épicycloïdaux — que le corpus
     n'aborde pas. */
  attendus: [
    "Déterminer le rapport de transmission d'un engrenage, d'une courroie ou d'un train à plusieurs étages, et en déduire la vitesse de sortie",
    "Établir le couple de sortie d'un réducteur en tenant compte du rendement, et interpréter le compromis vitesse/couple",
    "Identifier la nature d'un mécanisme de transmission (réducteur ou multiplicateur, sens de rotation conservé ou inversé) à partir de sa description ou de son schéma"
  ],

  note: "Le rapport de transmission, les engrenages, les courroies et le système vis-écrou, la " +
        "conservation de la puissance aux pertes près : le chapitre donne l'outil qui explique " +
        "pourquoi on met un réducteur derrière un moteur. C'est le composant que vos élèves " +
        "rencontrent dans <strong>tous</strong> leurs projets — portail, convoyeur, robot — et " +
        "celui dont ils peinent le plus à justifier la présence.<br/><br/>" +
        "<strong>Attention à l'ordre : ce chapitre est déplacé par rapport au livre, et le " +
        "tableau le signale.</strong> Le livre le range en 5e position de la partie terminale " +
        "(après l'automatique) ; la progression conseillée le place au rang $3$, immédiatement " +
        "après le PFD et l'énergie cinétique. La raison est de <strong>dépendance</strong> : ce " +
        "chapitre n'est que l'application du couple (chapitre 1) et de la conservation de " +
        "l'énergie (chapitre 2) à une chaîne réelle. Les trois enseignés de suite forment un bloc " +
        "mécanique cohérent ; séparés par l'automatique, ils obligent à redéfinir deux fois ce " +
        "qu'est un couple. Suivez l'ordre du livre si vous préférez, mais sachez ce que " +
        "cela coûte.<br/><br/>" +
        "<strong>Un prérequis ne sera pas affiché.</strong> La colonne « S'appuie sur » montre bien " +
        "les chapitres 1 et 2. Mais ce chapitre suppose aussi la <strong>lecture d'un dessin " +
        "technique</strong> et l'identification des <strong>liaisons mécaniques</strong>, vues en " +
        "seconde et en première : dès qu'on demande de repérer le pignon d'entrée et la roue de " +
        "sortie sur un plan, c'est cela qu'on mobilise. Un prérequis ne pouvant désigner qu'un " +
        "chapitre du même niveau, rien ne le montrera.<br/><br/>" +
        "Côté mathématiques, l'exigence est la plus faible du niveau, et c'est une bonne nouvelle : " +
        "il suffit de manipuler des <strong>fractions</strong> et des produits de fractions. " +
        "Aucune dérivée, aucun logarithme, aucun complexe. Le seul obstacle réel est " +
        "$\\dfrac{\\eta}{|r|}$, où il faut diviser par une fraction — c'est-à-dire multiplier par " +
        "son inverse. Prévoyez un rappel de trente secondes là-dessus : c'est la seule difficulté " +
        "calculatoire du chapitre, et elle fait rater des exercices justes " +
        "par ailleurs.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas.</strong> Le tirage " +
        "comporte <strong>9 énoncés</strong>, en trois moules : vitesse de sortie d'un engrenage " +
        "(exercices 1, 5, 8), couple de sortie avec rendement (2, 4, 7), rapport global d'un train " +
        "à deux étages (3, 6, 9). Quatre des cinq questions du devoir y trouvent un exercice " +
        "voisin.<br/><br/>" +
        "Le trou, unique mais net : <strong>aucun des neuf énoncés ne calcule de puissance en " +
        "watts</strong>. Les trois moules manipulent des rapports, des couples et un rendement — " +
        "jamais $P = C\\omega$. La question $3$ du devoir noté porte pourtant exactement là-dessus " +
        "($C = P/\\omega$), et le quiz ne la traite pas davantage. Il faut donc apporter vous-même " +
        "un énoncé numérique avec des watts : une plaque de moteur suffit, et c'est " +
        "l'occasion de faire lire un document constructeur.",

  erreurs: [
    {
      titre: "Inverser le rapport de transmission",
      eleve: "Sur un pignon de $11$ dents entraînant une roue de $44$ dents, l'élève écrit " +
             "$|r| = Z_s/Z_e = 44/11 = 4$ et annonce une vitesse de sortie de " +
             "$1402 \\times 4 = 5608$ tr/min — c'est-à-dire un moteur qui accélère en traversant " +
             "un réducteur.",
      cause: "Rien dans la formule ne dit dans quel sens la lire, et les deux écritures " +
             "($Z_e/Z_s$ et $Z_s/Z_e$) sont également plausibles à l'œil. L'élève choisit " +
             "souvent celle qui donne un nombre « propre » — $4$ plutôt que $1/4$ — parce que les " +
             "entiers rassurent. S'y ajoute une intuition trompeuse : la grande roue « a l'air " +
             "plus puissante », donc plus rapide. L'erreur n'est pas de calcul, c'est une erreur " +
             "d'orientation du raisonnement, et elle ne se corrige pas en répétant la formule.",
      /* RENVOI VÉRIFIÉ. Exercice 1 du livre (graine 20260816 + 17, premier
         tirage) : N_e = 1402 tr/min, Z_e = 11 dents, Z_s = 44 dents, donc
         |r| = 11/44 = 1/4 et N_s = 351 tr/min (arrondi du 350,5).
         POURQUOI L'EXERCICE 1 ET NON 5 NI 8 (même moule) : c'est le tirage
         dont le rapport de dentures est le plus GRAND des trois — 11/44 donne
         1/4, contre 10/20 = 1/2 pour l'exercice 5 et 25/125 = 1/5 pour le 8.
         Mesure faite de l'écart produit par l'erreur :
           - exercice 1 : le juste est 351 tr/min, l'inversé 5608 tr/min
             (facteur 16) ;
           - exercice 5 : juste 1948, inversé 7790 (facteur 4 seulement) ;
           - exercice 8 : juste 308, inversé 7700 (facteur 25, encore plus
             grand).
         L'exercice 8 produirait donc un écart encore plus visible que le 1.
         Il est pourtant ÉCARTÉ, pour une raison qui compte plus : son rapport
         1/5 est celui de la question 4 du devoir noté (|r| = 1/5), et
         l'exercice 1 offre un 1/4 qui ne rejoue aucune valeur de
         l'évaluation. On évite ainsi que l'élève reconnaisse la question notée
         dans sa remédiation. L'exercice 5 (1/2) est écarté parce que son
         facteur 4 est le moins parlant des trois.
         Le remède fait ensuite comparer avec l'exercice 8, ce qui donne deux
         réducteurs de rapports différents dans la même séance. */
      exercice: { type: "exercice", n: 1 },
      remede: "Faites traiter l'exercice 1 ($N_e = 1402$ tr/min, $Z_e = 11$ dents, $Z_s = 44$ " +
              "dents) en exigeant une <strong>prévision avant tout calcul</strong> : " +
              "« <em>la sortie va-t-elle tourner plus vite ou moins vite ?</em> ». La grande roue " +
              "est en sortie, donc la sortie ralentit — la réponse doit être inférieure à " +
              "$1402$. L'élève qui inverse trouve $5608$ tr/min et sa propre prévision le " +
              "contredit : il n'a pas besoin qu'on le corrige.<br/><br/>" +
              "Le contrôle qui règle définitivement la question : <strong>la grande roue tourne " +
              "toujours plus lentement que la petite</strong>. C'est vrai sans exception, et cela " +
              "suffit à orienter la fraction : $|r| < 1$ quand la sortie est la plus grande roue. " +
              "Enchaînez avec l'exercice 8 ($25$ dents vers $125$ dents, $|r| = 1/5$) : deux " +
              "rapports différents, même conclusion.<br/><br/>" +
              "Le système réel qui ne trompe personne, et vos élèves l'ont sous les yeux tous les " +
              "jours : le <strong>dérailleur d'un vélo</strong>. Petit plateau devant, grand pignon " +
              "derrière : ça monte les côtes, mais on avance lentement. Grand plateau, petit " +
              "pignon : on va vite en terrain plat. <strong>Faites-le raconter avant de faire " +
              "écrire la formule</strong> — ils savent déjà tout, il ne manque que la " +
              "notation.<br/><br/>" +
              "Et pour ancrer l'ordre de grandeur industriel : un moteur asynchrone tourne à " +
              "$1500$ tr/min, un portail met une dizaine de secondes à s'ouvrir. Le réducteur " +
              "divise par <strong>plusieurs centaines</strong>. Un mécanisme qui accélérerait la " +
              "sortie d'un facteur $4$ n'existe presque jamais en machine : quand le calcul le " +
              "donne, c'est le calcul qu'il faut relire."
    },
    {
      titre: "Oublier le rendement, ou le placer du mauvais côté",
      eleve: "Sur le réducteur ($|r| = 1/4$, $\\eta = 0{,}85$) recevant $C_e = 14$ N·m, l'élève " +
             "écrit $C_s = 4 \\times 14 = 56$ N·m en oubliant $\\eta$. Ou bien il écrit " +
             "$C_s = 14 \\times 4 / 0{,}85 = 65{,}9$ N·m, en DIVISANT par le rendement, et obtient " +
             "plus que le maximum théorique.",
      cause: "Le rendement est un facteur correctif : il n'intervient pas dans le raisonnement " +
             "principal (« un réducteur multiplie le couple par $1/|r|$ ») mais vient l'atténuer " +
             "ensuite. Ce qui est second dans le raisonnement est premier à disparaître. Quant au " +
             "sens de la division, l'élève n'a aucun moyen de le retrouver s'il n'a pas compris " +
             "que $\\eta < 1$ signifie <strong>une perte</strong> : la formule $\\eta/|r|$ mêle " +
             "une multiplication et une division dans la même fraction, et sans contrôle " +
             "physique, une chance sur deux de se tromper.",
      /* RENVOI VÉRIFIÉ, et il est doublé d'un renvoi au quiz dans le remède —
         pour une raison mesurée qui mérite d'être notée.
         Exercice 2 du livre (graine 20260816 + 17, deuxième tirage) :
         réducteur |r| = 1/4, eta = 0,85, C_e = 14 N·m, donc
         C_s = 0,85 × 4 × 14 = 47,6 N·m.
         POURQUOI L'EXERCICE 2 ET NON 4 NI 7 (même moule) : c'est le tirage
         dont le rendement est le PLUS BAS des trois — 0,85 contre 0,95 pour
         l'exercice 4 et 0,90 pour le 7. Conséquence directement utile :
         l'écart entre la réponse juste et la réponse sans rendement y est le
         plus grand possible (47,6 contre 56 N·m, soit 15 % ; sur l'exercice 4
         ce ne serait que 5 %, invisible dans un arrondi). C'est donc le seul
         des trois où l'oubli du rendement se voit à coup sûr.
         Son |r| = 1/4 ne rejoue pas non plus la valeur de la question 4 du
         devoir (|r| = 1/5, eta = 0,9) : pas de risque de reconnaissance.
         CE QUE LE RENVOI NE FAIT PAS, et le remède le dit : aucun des neuf
         exercices ne propose eta = 1, donc aucun ne permet la COMPARAISON
         « avec / sans pertes ». Le quiz 3 est le seul endroit du livre où
         eta = 1 (réducteur |r| = 1/4, C_e = 2 N·m, C_s = 8 N·m), et sa
         correction énonce le cas idéal (« réduire la vitesse d'un facteur 4
         multiplie le couple par 4, conservation de la puissance avec eta = 1 »).
         Vérifié sur le contenu réel du quiz. La paire exercice 2 / quiz 3 est
         donc le dispositif complet, et c'est ce que le remède demande. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 ($|r| = 1/4$, $\\eta = 0{,}85$, $C_e = 14$ N·m, réponse " +
              "$47{,}6$ N·m), qui est le tirage <strong>le mieux choisi du chapitre</strong> pour " +
              "cette erreur : son rendement est le plus faible des trois ($0{,}85$), donc l'oubli " +
              "se voit — $56$ N·m au lieu de $47{,}6$, soit $15\\%$ d'écart. Sur les exercices 4 " +
              "($\\eta = 0{,}95$) et 7 ($\\eta = 0{,}90$), le même oubli disparaîtrait presque dans " +
              "l'arrondi.<br/><br/>" +
              "Puis, et c'est le geste décisif, faites traiter <strong>immédiatement la question 3 " +
              "du quiz</strong> : même mécanisme ($|r| = 1/4$), mais $\\eta = 1$. C'est le " +
              "<strong>seul endroit du livre où le rendement vaut $1$</strong> — aucun des neuf " +
              "exercices ne le propose. Les deux côte à côte donnent la comparaison que le corpus " +
              "ne fournit nulle part : le cas idéal, puis le cas réel. L'écart, c'est " +
              "exactement ce que le rendement mesure.<br/><br/>" +
              "Le contrôle physique qui interdit l'erreur de sens, et il vaut mieux que n'importe " +
              "quelle règle : <strong>la puissance de sortie est toujours inférieure à celle " +
              "d'entrée</strong>. Donc le rendement <strong>diminue</strong> le résultat. Si le " +
              "calcul donne plus que le cas idéal ($\\eta = 1$), il est faux — on aurait fabriqué " +
              "de l'énergie. Faites-le vérifier à chaque fois : $47{,}6 < 56$, c'est cohérent ; " +
              "$65{,}9 > 56$, c'est impossible.<br/><br/>" +
              "Le système réel qui rend les pertes tangibles : un <strong>réducteur de portail " +
              "après une heure de manœuvres</strong>. Il est <strong>chaud</strong> — et cette " +
              "chaleur, ce sont les $15\\%$ manquants. Le rendement n'est pas un coefficient de " +
              "correction scolaire : c'est de la chaleur qu'on peut toucher. Dans un train à " +
              "plusieurs étages, les rendements se <strong>multiplient</strong> : trois étages à " +
              "$0{,}9$ donnent $0{,}73$, soit plus d'un quart de la puissance perdue. C'est " +
              "pour cela qu'on ne cascade pas les réducteurs à la légère."
    },
    {
      titre: "Croire qu'un réducteur « perd » de la puissance parce qu'il ralentit, ou qu'il en gagne parce que le couple augmente",
      eleve: "« Le réducteur multiplie le couple par $4$, donc il multiplie la puissance par $4$ : " +
             "c'est un amplificateur. » Ou l'inverse : « il divise la vitesse par $4$, donc il " +
             "divise la puissance par $4$. »",
      cause: "L'élève suit UNE des deux grandeurs et en conclut sur la puissance, parce qu'il n'a " +
             "pas encore intégré que la puissance est un PRODUIT : $P = C\\omega$. Or dans un " +
             "réducteur, les deux facteurs varient en sens opposés et se compensent presque " +
             "exactement — le couple est multiplié par $1/|r|$, la vitesse divisée par le même " +
             "facteur. Ce qui reste, c'est le rendement seul. C'est une des idées les plus " +
             "importantes de la mécanique, et elle est invisible tant qu'on regarde les grandeurs " +
             "une par une.",
      /* exercice: null ASSUMÉ, et MESURÉ. Les neuf tirages ont été relus un
         par un : AUCUN ne calcule ni ne mentionne une puissance en watts.
           - moule engrenage (1, 5, 8) : uniquement N_e et N_s en tr/min ;
           - moule couple (2, 4, 7) : uniquement C_e et C_s en N·m avec eta ;
           - moule train (3, 6, 9) : uniquement des rapports et des tr/min.
         La relation P = C·omega, qui est pourtant au cours et qui EST la
         question 3 de l'évaluation notée, n'est mise en oeuvre par aucun
         exercice du livre.
         Le QUIZ ne la traite pas non plus, vérifié : ses trois questions
         portent sur |r| = Z_e/Z_s, sur le sens de rotation d'un engrenage
         extérieur, et sur le couple de sortie avec eta = 1 — cette dernière
         ÉVOQUE la conservation de la puissance dans sa correction, mais ne la
         calcule pas et ne demande aucun watt.
         Renvoyer à l'exercice 2 serait tentant (il porte sur le couple) mais
         serait un renvoi FAUX : l'exercice ne fait jamais apparaître de
         puissance, donc il ne peut pas montrer qu'elle se conserve. Et la
         seule question du livre qui porte là-dessus est dans le devoir noté.
         D'où exercice: null, et un remède qui donne le calcul complet, prêt à
         écrire au tableau, sur les valeurs de l'exercice 2 que les élèves
         connaissent déjà. */
      exercice: null,
      remede: "Aucun exercice du livre ne peut servir ici, et c'est le fait le plus utile à savoir " +
              "en préparant la séance : <strong>aucun des neuf énoncés tirés ne calcule ni ne " +
              "mentionne une puissance en watts</strong>. Ils manipulent des tours par minute, des " +
              "newtons-mètres et un rendement — jamais $P = C\\omega$. Le quiz ne la calcule pas " +
              "davantage. Le seul support du livre est la question $3$ du devoir noté, donc hors " +
              "de portée pour une remédiation.<br/><br/>" +
              "<strong>Le geste de substitution, et il tient en un tableau à trois colonnes.</strong> " +
              "Reprenez l'exercice 2, que les élèves ont déjà traité ($|r| = 1/4$, " +
              "$\\eta = 0{,}85$, $C_e = 14$ N·m, $C_s = 47{,}6$ N·m), ajoutez une vitesse " +
              "d'entrée — disons $N_e = 1500$ tr/min, soit $\\omega_e = 157$ rad/s — et faites " +
              "compléter :<br/><br/>" +
              "<strong>Entrée</strong> : $C_e = 14$ N·m, $\\omega_e = 157$ rad/s, donc " +
              "$P_e = 14 \\times 157 \\approx 2200$ W.<br/>" +
              "<strong>Sortie</strong> : $C_s = 47{,}6$ N·m, $\\omega_s = 157/4 = 39{,}3$ rad/s, " +
              "donc $P_s = 47{,}6 \\times 39{,}3 \\approx 1870$ W.<br/>" +
              "<strong>Bilan</strong> : $1870 / 2200 = 0{,}85$ — c'est le rendement, et rien " +
              "d'autre.<br/><br/>" +
              "C'est le calcul le plus formateur du chapitre : le couple a été multiplié par " +
              "$3{,}4$, la vitesse divisée par $4$, et la <strong>puissance est restée à peu près " +
              "la même</strong>. Un réducteur n'amplifie rien : il " +
              "<strong>échange</strong> de la vitesse contre du couple, et prélève sa commission " +
              "en chaleur.<br/><br/>" +
              "La formule à faire retenir sous forme parlée : <strong>puissance = couple × vitesse " +
              "angulaire</strong>. Les trois écritures $P = C\\omega$, $C = P/\\omega$ et " +
              "$\\omega = P/C$ sont la même relation, et la question $3$ du devoir demande " +
              "précisément la deuxième — faites-les écrire toutes les trois une " +
              "fois.<br/><br/>" +
              "Le système réel qui installe l'idée en une phrase : sur la " +
              "<strong>plaque d'un motoréducteur</strong>, le constructeur écrit une puissance " +
              "(par exemple $0{,}37$ kW) — <strong>une seule</strong>, pas deux. Parce que c'est " +
              "elle qui traverse le mécanisme. Le réducteur change la répartition entre couple et " +
              "vitesse, pas le total. Faites-leur lire une vraie plaque : c'est deux minutes, et " +
              "c'est le meilleur document du chapitre."
    },
    {
      titre: "Additionner les rapports d'un train à étages au lieu de les multiplier",
      eleve: "Sur un train à deux étages de $r_1 = 1/4$ et $r_2 = 1/2$, l'élève écrit " +
             "$r = 1/4 + 1/2 = 3/4$ et annonce $N_s = 1728 \\times 3/4 = 1296$ tr/min au lieu de " +
             "$216$ tr/min. Ou il retient seulement le plus petit des deux rapports.",
      cause: "L'addition est l'opération par défaut quand on « met deux choses bout à bout » — on " +
             "additionne des longueurs, des durées, des masses. Un rapport, lui, se compose par " +
             "MULTIPLICATION, parce que chaque étage agit sur ce que le précédent lui a déjà " +
             "transmis. L'élève ne manque pas d'une formule, il manque d'une image de " +
             "l'enchaînement : ce n'est pas deux réducteurs côte à côte, c'est un réducteur " +
             "<em>dans</em> un réducteur.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 17, troisième
         tirage) : train à 2 étages, r_1 = 1/4 et r_2 = 1/2, N_e = 1728 tr/min,
         donc r_total = 1/8 et N_s = 216 tr/min.
         POURQUOI L'EXERCICE 3 ET NON 6 NI 9 (même moule) : deux raisons
         mesurées.
           - Son N_e (1728 tr/min) est le seul des trois qui soit divisible
             exactement par r_total : 1728/8 = 216 pile. L'exercice 6
             (2214/20 = 110,7 arrondi à 111) et l'exercice 9 (2323/12 = 193,58
             arrondi à 194) donnent tous deux un arrondi, ce qui ajoute un
             bruit inutile quand on veut discuter d'une opération. Un résultat
             exact laisse toute l'attention sur le 1/4 × 1/2.
           - Son r_total (1/8) est le plus facile à recomposer mentalement :
             l'élève voit que 4 × 2 = 8 sans calculatrice, ce qui rend la
             multiplication ÉVIDENTE et l'addition (3/4) manifestement absurde
             (un réducteur qui diviserait par 1,33 seulement après deux
             étages).
         L'exercice 9 (r_1 = 1/3, r_2 = 1/4, donc 1/12) est de plus la valeur
         EXACTE de la question 5 du devoir noté (r_1 = 1/3, r_2 = 1/4) : il est
         donc disqualifié comme remédiation, l'élève y reconnaîtrait la
         question notée au lieu de la règle. Le remède le signale pour que
         l'enseignant ne le choisisse pas par inadvertance. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 ($r_1 = 1/4$, $r_2 = 1/2$, $N_e = 1728$ tr/min, réponse " +
              "$216$ tr/min) en imposant le calcul <strong>étage par étage, sans formule " +
              "globale</strong> : après le premier étage, $1728/4 = 432$ tr/min ; après le second, " +
              "$432/2 = 216$ tr/min. On retrouve $1/8$, et l'élève a vu POURQUOI : le second étage " +
              "travaille sur la sortie du premier, pas sur l'entrée.<br/><br/>" +
              "Ce tirage est le mieux choisi des trois pour cela : $1728$ se divise exactement par " +
              "$8$, donc aucun arrondi ne vient brouiller la discussion, et $4 \\times 2 = 8$ se " +
              "voit de tête. L'élève qui additionne trouve $3/4$, soit un réducteur à deux étages " +
              "qui ne diviserait la vitesse que par $1{,}33$ : <strong>manifestement absurde, et " +
              "c'est lui qui doit le dire</strong>.<br/><br/>" +
              "À éviter comme remédiation : l'exercice 9 ($r_1 = 1/3$, $r_2 = 1/4$) reprend les " +
              "valeurs <strong>exactes</strong> de la question $5$ du devoir noté. L'élève y " +
              "reconnaîtrait la question plutôt que la règle.<br/><br/>" +
              "Le contrôle qui ne trompe jamais : <strong>chaque étage ne peut que réduire " +
              "davantage</strong>. Le rapport global est donc plus petit que le plus petit des " +
              "rapports élémentaires. Ici $1/8 < 1/4$ : cohérent. Une addition donnerait " +
              "$3/4 > 1/2$, donc plus grand que les deux : impossible.<br/><br/>" +
              "Le système réel qui règle la question, et vos élèves l'ont dans les mains : la " +
              "<strong>boîte de vitesses</strong> ou le <strong>réducteur à trois trains d'un " +
              "treuil</strong>. On empile les étages justement <strong>parce que les rapports se " +
              "multiplient</strong> : c'est le seul moyen d'atteindre $1/1000$ sans construire une " +
              "roue de deux mètres de diamètre. Trois étages à $1/10$ tiennent dans le creux de la " +
              "main. Et — à faire remarquer dans la même phrase — les " +
              "<strong>rendements se multiplient aussi</strong> : trois étages à $0{,}9$ ne " +
              "donnent que $0{,}73$. C'est le prix du compactage, et c'est un vrai arbitrage " +
              "d'ingénieur."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ sur le module chargé ; `validerProf` exige exactement autant
     de compétences que de questions.

     Q1 ($20$ dents vers $80$ dents → $|r| = 0{,}25$) → résoudre : application
        directe de $|r| = Z_e/Z_s$, une seule division.
     Q2 ($2400$ tr/min, $|r| = 1/6$ → $400$ tr/min) → résoudre : application
        directe de $N_s = |r| N_e$.
     Q3 (relation entre $C$, $P$ et $\omega$ → $C = P/\omega$) → analyser :
        restitution d'une relation formelle, à choisir parmi quatre écritures
        de même forme. Aucun calcul, aucune donnée numérique. Rattachée à
        `analyser` selon la convention du référentiel SI de l'ouvrage (voir
        REFERENTIELS.si dans prof.js : les questions de restitution y sont
        rattachées à `analyser`, « identifier et caractériser une grandeur ou
        un constituant »).
     Q4 ($C_e = 10$ N·m, $|r| = 1/5$, $\eta = 0{,}9$ → $C_s = 45$ N·m) →
        résoudre : deux opérations enchaînées, mais la formule
        $C_s = (\eta/|r|)C_e$ est donnée par le cours. Ce n'est pas
        `modéliser` : rien n'est à construire ni à décider.
     Q5 (train à deux étages, $r_1 = 1/3$, $r_2 = 1/4$ → $0{,}083$) →
        modéliser : c'est la seule question du devoir où l'élève doit DÉCIDER
        de la façon dont les deux étages se composent — multiplier et non
        additionner. L'énoncé ne fournit pas la loi de composition ; c'est
        elle qui est interrogée, et c'est exactement ce que `modéliser`
        désigne. La suite (la division) est triviale.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés, et
     c'est un constat mesuré sur les cinq énoncés : aucune question ne demande
     de mesurer sur un mécanisme réel, de choisir un réducteur pour un cahier
     des charges, ni de rédiger une explication. C'est d'autant plus notable
     sur un chapitre dont l'objet — choisir une transmission — est par nature
     une tâche de conception : le corpus n'en propose aucune. Voir la note de
     REFERENTIELS.si dans prof.js.

     À SIGNALER, et c'est écrit dans la `note` : Q3 est la seule question du
     devoir sans aucun support dans les neuf exercices ni dans le quiz, faute
     du moindre énoncé faisant apparaître une puissance en watts. Les quatre
     autres ont chacune un moule voisin. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'résoudre', 'modéliser']
  }
};
