/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-asservis-pid.prof.js
   Fiche professeur du chapitre « Systèmes asservis — Correcteur P/PI/PID »
   (terminale SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 15 (chapitre 16 de l'ouvrage `lycee-si`).

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du corps
   du chapitre. Deux conséquences dures, vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   ATTENTION, PARTICULARITÉ DE CE CHAPITRE : il n'a que QUATRE questions
   d'évaluation, pas cinq. `competences.evaluation` en compte donc exactement
   quatre — compté sur le module chargé.

   TROIS MOULES, relevés un par un, et ils sont tous les trois autour de la
   MÊME relation $\varepsilon = 1/(1+K)$ :
     - $K_p$ à trouver pour une erreur statique imposée
       → exercices 1, 6, 8 ;
     - erreur statique à partir de $K_p$ et $G_0$ → exercices 2, 4, 7 ;
     - gain statique de la FTBF, $K/(1+K)$ → exercices 3, 5, 9.

   LE FAIT LE PLUS IMPORTANT DE CETTE FICHE, et il faut le dire à l'enseignant :
   le chapitre enseigne les correcteurs P, PI et PID, la FTBO, la FTBF, le rôle
   de l'intégrale et de la dérivée, les marges de stabilité — mais les neuf
   exercices ne savent faire QUE DU PROPORTIONNEL. Aucun des neuf ne mentionne
   $K_i$, $K_d$, un correcteur PI ou PID, ni une marge de stabilité. Or DEUX
   des quatre questions du devoir (Q3 : quel correcteur annule l'erreur
   statique ; Q4 : identifier $K_p$, $K_i$, $K_d$ dans $C(p)$) portent
   exclusivement là-dessus. Soit la moitié du devoir sans aucun exercice
   correspondant.

   Le QUIZ sauve une de ces deux questions : sa question 2 porte exactement sur
   l'intégrateur qui annule l'erreur statique. Rien, en revanche, sur
   l'identification des trois coefficients d'un PID — d'où un `exercice: null`
   assumé, le renvoi le mieux motivé de cette fiche.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-asservis-pid"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     AUCUN prérequis DANS CE DOSSIER, et c'est un constat mesuré, pas une
     facilité. Ce chapitre ouvre le BLOC AUTOMATIQUE CONTINUE du niveau, dont
     il est le premier (rang 5, suivi de Bode au rang 6), et rien de ce qui
     précède dans la progression ne lui apporte d'outil :

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Dynamique du solide, PFD) : rang $1$, donc déclarable. Mais
       aucune dépendance réelle : l'automatique de ce chapitre raisonne sur des
       fonctions de transfert et des gains sans jamais écrire l'équation
       mécanique du procédé. Le procédé est donné comme une boîte de gain
       $G_0$, jamais établi. Écarté.
     - ch. 2 (Énergie cinétique) : rang $2$, déclarable. Aucun lien : pas un
       joule dans tout le chapitre. Écarté.
     - ch. 5 (Transmission de puissance) : rang $3$, déclarable, et c'est le
       candidat le plus sérieux — un asservissement de position pilote presque
       toujours un motoréducteur, donc les deux chapitres cohabitent dans tous
       les projets. Mais c'est une adjacence INDUSTRIELLE, pas une dépendance
       pédagogique : aucun des neuf exercices d'ici n'utilise de rapport de
       transmission, de couple ni de rendement, et la notion de FTBO ne suppose
       rien de la mécanique. Écarté, comme le chapitre pilote écarte le
       chapitre 7 pour le GRAFCET.
     - ch. 4 (GRAFCET) : rang $4$, déclarable. Les deux parlent de commande,
       mais un GRAFCET ordonne des actions DISCRÈTES et un asservissement
       régule une grandeur CONTINUE. Aucun vocabulaire, aucun outil
       mathématique en commun. Écarté (le chapitre pilote fait la même analyse
       en sens inverse).
     - ch. 6 (Bode) et ch. 7 (Réseaux) : rangs $6$ et $7$, donc supérieurs au
       rang $5$ de ce chapitre — non déclarables de toute façon. Et pour Bode,
       la dépendance joue dans l'AUTRE sens : c'est lui qui s'appuie sur
       celui-ci.

     LE VRAI PRÉREQUIS EST EN PREMIÈRE, et c'est dit dans la `note` imprimée :
     ce chapitre suppose la notion de SYSTÈME BOUCLÉ vue en première
     (`si-1re-asservissement`) — la chaîne d'information, le capteur de retour,
     le comparateur, le schéma-blocs. Ce chapitre-ci ne réintroduit pas le
     bouclage : il l'algébrise. `prerequis` ne pouvant désigner qu'un chapitre
     du même niveau, cette dépendance ne peut pas être déclarée en donnée : la
     colonne « S'appuie sur » affichera un tiret. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 5 dans le dossier `si-tle`, alors que
     le livre le range en 3e position (chapitre 16 de l'ouvrage).

     LES DEUX ORDRES DIFFÈRENT ICI, et c'est délibéré : le tableau imprimé
     affichera un triangle d'alerte sur ce chapitre. Trois raisons, dans
     l'ordre d'importance.

     1. L'OUTIL MATHÉMATIQUE. Ce chapitre manipule des fonctions de transfert
        en $p$ — $\text{FTBF} = C G/(1 + C G)$, $C(p) = K_p + K_i/p + K_d p$ —
        c'est-à-dire des fractions rationnelles d'une variable complexe. C'est,
        avec le chapitre 6 (Bode) qu'il précède, le chapitre le plus exigeant
        du niveau en formalisme. Le placer au rang 3 (comme le livre) supposait
        que les élèves manipulent déjà l'algèbre des fractions rationnelles ;
        le placer au rang 5 laisse le temps aux mathématiques d'installer cela.
     2. LE BLOC AUTOMATIQUE. Ce chapitre et le chapitre 6 (Bode) forment un
        ensemble : le PID donne le comportement en régime PERMANENT (erreur
        statique, gain statique), Bode donne le comportement FRÉQUENTIEL et les
        marges de stabilité que ce chapitre-ci ne fait qu'annoncer. Les
        enseigner de suite (rangs 5 puis 6) évite d'ouvrir deux fois le même
        formalisme.
     3. LA MATURITÉ DU GROUPE. C'est le chapitre le plus abstrait de l'année —
        aucun objet à toucher, une boîte de gain $G_0$ et des lettres. Il est
        plus facile à aborder en seconde moitié d'année, quand les élèves ont
        déjà vu des systèmes réels dans les chapitres mécaniques.

     Contrainte de compilation vérifiée : ce chapitre ne déclare aucun
     prérequis, donc la règle « rang du prérequis strictement inférieur » n'a
     rien à contraindre ici. En revanche le chapitre 6 (Bode) déclare
     celui-ci : son rang est $6 > 5$. Cohérent.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 5,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 3 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     partie « Modéliser et résoudre : comportement des systèmes asservis ».

     Bornés à ce que le chapitre traite RÉELLEMENT : le schéma-blocs, la FTBO
     et la FTBF, l'erreur statique d'un correcteur proportionnel, et le rôle
     respectif des trois actions P, I et D. Rien sur le calcul d'une marge de
     phase (seulement annoncée), rien sur les méthodes de réglage
     (Ziegler-Nichols), rien sur la réponse temporelle du second ordre — que
     le corpus n'aborde pas. */
  attendus: [
    "Établir la fonction de transfert en boucle fermée d'un système asservi à partir de son schéma-blocs",
    "Déterminer l'erreur statique d'un système corrigé proportionnellement et en déduire le gain nécessaire à une précision imposée",
    "Identifier le rôle respectif des actions proportionnelle, intégrale et dérivée sur la précision, la rapidité et la stabilité d'un asservissement"
  ],

  note: "Le schéma-blocs, la FTBO et la FTBF, l'erreur statique, les trois actions du correcteur " +
        "PID : le chapitre donne le formalisme de la <strong>régulation</strong>, celui qui " +
        "explique comment un système corrige tout seul ses propres écarts. C'est le chapitre le " +
        "plus abstrait du niveau — et le plus utile en projet, dès qu'un asservissement de " +
        "position ou de vitesse entre en jeu.<br/><br/>" +
        "<strong>Le prérequis principal de ce chapitre est en première, et la colonne « S'appuie " +
        "sur » affiche un tiret.</strong> Il suppose la notion de <strong>système bouclé</strong> " +
        "vue en première (<em>Systèmes asservis et régulation</em>) : la chaîne d'information, le " +
        "capteur de retour, le comparateur, la lecture d'un schéma-blocs. Ce chapitre-ci ne " +
        "réintroduit pas le bouclage, il l'<strong>algébrise</strong>. Un prérequis ne pouvant " +
        "désigner qu'un chapitre du même niveau, cette dépendance ne peut pas figurer dans le " +
        "tableau ; vérifiez-la vous-même avant de commencer, en particulier le sens du " +
        "comparateur — sans quoi le $1 + CG$ du dénominateur restera une " +
        "formule.<br/><br/>" +
        "<strong>Attention à l'ordre : ce chapitre est déplacé par rapport au livre, et le " +
        "tableau le signale.</strong> Le livre le range en 3e position de la partie terminale ; la " +
        "progression conseillée le place au rang $5$, juste avant Bode. C'est une question " +
        "d'<strong>outils mathématiques</strong> : les fonctions de transfert en $p$ sont des " +
        "fractions rationnelles d'une variable complexe, et c'est le formalisme le plus lourd de " +
        "l'année. Les <strong>nombres complexes</strong> sont nécessaires dès qu'on veut donner un " +
        "sens à $p$ et à $j\\omega$ ; l'algèbre des fractions l'est pour manipuler " +
        "$\\dfrac{CG}{1+CG}$. Placé au rang $5$, ce chapitre laisse aux mathématiques le temps " +
        "d'installer cela — et il forme un bloc avec le chapitre 6 (Bode), qui reprend le même " +
        "formalisme. Suivez l'ordre du livre si votre groupe est prêt, mais sachez ce que " +
        "cela suppose.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les " +
        "exercices.</strong> Le tirage comporte <strong>9 énoncés</strong>, en trois moules — mais " +
        "les trois tournent autour de la <strong>même relation</strong>, " +
        "$\\varepsilon = \\dfrac{1}{1+K}$ : trouver $K_p$ pour une erreur imposée (exercices 1, 6, " +
        "8), calculer l'erreur à partir de $K_p$ et $G_0$ (2, 4, 7), calculer le gain statique de " +
        "la FTBF (3, 5, 9). Autrement dit, <strong>les neuf exercices du livre ne savent faire que " +
        "du proportionnel</strong>. Aucun ne mentionne $K_i$, aucun ne mentionne $K_d$, aucun ne " +
        "parle de correcteur PI ou PID, aucun ne calcule de marge de stabilité — alors que ce sont " +
        "les trois quarts du cours.<br/><br/>" +
        "Ce chapitre n'a par ailleurs que <strong>quatre</strong> questions d'évaluation, et " +
        "<strong>deux d'entre elles</strong> (la question $3$ sur le correcteur qui annule " +
        "l'erreur statique, la question $4$ sur l'identification de $K_p$, $K_i$ et $K_d$) portent " +
        "exclusivement sur ce que les exercices ne travaillent jamais : <strong>la moitié du " +
        "devoir noté est sans support d'entraînement</strong>. Le quiz rattrape la question $3$ " +
        "(son énoncé $2$ porte exactement sur l'intégrateur). Pour la question $4$, il faut " +
        "apporter vos propres énoncés : trois ou quatre expressions $C(p)$ à décomposer suffisent, " +
        "c'est cinq minutes de préparation et cela vaut deux points au devoir.",

  erreurs: [
    {
      titre: "Confondre le gain du correcteur $K_p$ et le gain de boucle $K$",
      eleve: "Sur un système de $G_0 = 17$ corrigé par $K_p = 8$, l'élève calcule " +
             "$\\varepsilon = \\dfrac{1}{1 + 8} = 11\\%$ au lieu de " +
             "$\\dfrac{1}{1 + 136} = 0{,}7\\%$. Il a pris le gain du correcteur pour le gain de " +
             "boucle.",
      cause: "Les deux grandeurs portent la même lettre à un indice près, et la formule de " +
             "l'erreur statique s'écrit avec le $K$ nu : $\\varepsilon = \\dfrac{1}{1+K}$. Rien " +
             "dans cette écriture ne rappelle que $K$ est un PRODUIT — $K = K_p \\times G_0$ — " +
             "c'est-à-dire le gain de <strong>toute la boucle</strong> et non celui du seul " +
             "correcteur. L'élève applique la formule avec le nombre le plus proche de la lettre, " +
             "et c'est un réflexe de lecture, pas un défaut de compréhension du bouclage. Le " +
             "cours signale d'ailleurs ce piège explicitement, ce qui confirme qu'il est fréquent.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 15, deuxième
         tirage) : retour unitaire, G_0 = 17, K_p = 8, donc K = 136 et
         epsilon = 1/137 = 0,0073 = 0,7 %.
         POURQUOI L'EXERCICE 2 ET NON 4 NI 7 (même moule) : c'est le tirage où
         l'ÉCART entre la réponse juste et la réponse erronée est le plus
         spectaculaire, mesuré sur les trois :
           - exercice 2 (G_0 = 17, K_p = 8) : juste 0,7 %, erroné 1/9 = 11 %
             → facteur 15 ;
           - exercice 4 (G_0 = 11, K_p = 8) : juste 1,1 %, erroné 11 %
             → facteur 10 ;
           - exercice 7 (G_0 = 13, K_p = 15) : juste 0,5 %, erroné 1/16 = 6 %
             → facteur 12.
         L'exercice 2 est donc le plus démonstratif. Son second avantage : son
         énoncé DONNE les deux nombres séparément (G_0 et K_p) et sa
         correction écrit la ligne intermédiaire « Gain de boucle :
         K = K_p × G_0 = 8 × 17 = 136 » AVANT d'appliquer la formule. C'est
         exactement la ligne que l'élève saute, et le livre l'écrit déjà :
         il suffit de la lui faire recopier.
         Le moule « FTBF » (3, 5, 9) a été écarté : ses énoncés donnent K
         déjà calculé (« K = K_p × G_0 = 9 × 33 = 297 »), donc l'erreur ne
         peut pas s'y produire. Le moule « K_p à trouver » (1, 6, 8) a été
         écarté aussi : l'erreur y prendrait une autre forme (oublier de
         diviser par G_0), qui est le sujet de l'erreur 2 de cette fiche. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 ($G_0 = 17$, $K_p = 8$, réponse $0{,}7\\%$) en exigeant " +
              "la <strong>ligne intermédiaire que la correction du livre écrit déjà</strong> : " +
              "« gain de boucle $K = K_p \\times G_0 = 8 \\times 17 = 136$ », sur sa propre ligne, " +
              "AVANT toute application de la formule. C'est précisément cette ligne que l'élève " +
              "saute, et le manuel la fournit — il suffit de la lui faire recopier.<br/><br/>" +
              "Le tirage est le mieux choisi des trois pour cette erreur : l'élève qui confond " +
              "trouve $11\\%$ au lieu de $0{,}7\\%$, soit un facteur $15$. Sur l'exercice 4, le " +
              "même oubli ne donnerait qu'un facteur $10$, et sur le 7 un facteur $12$. Ici, " +
              "<strong>l'erreur se voit</strong>.<br/><br/>" +
              "La question à faire poser avant chaque calcul d'erreur statique, et elle règle tout : " +
              "« <em>de quel $K$ parle-t-on ?</em> ». Le $K$ de la formule est le gain de " +
              "<strong>tout le tour de boucle</strong> : correcteur, procédé, capteur. Faites " +
              "dessiner la boucle et <strong>suivre le signal du doigt</strong> en multipliant les " +
              "gains rencontrés — c'est ce parcours qui donne $K$, et le dessin le rend " +
              "impossible à confondre avec le seul correcteur.<br/><br/>" +
              "Le système réel qui donne du sens à ce produit : un <strong>asservissement de " +
              "température de four</strong>. Le correcteur envoie une commande en volts, le four " +
              "convertit ces volts en degrés (c'est $G_0$, plusieurs dizaines de degrés par volt), " +
              "la sonde reconvertit les degrés en volts. <strong>Ce qui compte pour la précision, " +
              "c'est le gain de la chaîne entière</strong>, pas celui du seul régulateur — sinon " +
              "changer de four ne changerait rien à la précision, ce qui est manifestement faux."
    },
    {
      titre: "Ne pas savoir inverser la relation de l'erreur statique pour trouver le gain nécessaire",
      eleve: "On demande le $K_p$ qui donne $5\\%$ d'erreur avec $G_0 = 15$. L'élève écrit " +
             "$K_p = \\dfrac{1}{0{,}05} = 20$ et s'arrête — il a trouvé $1+K$, pas $K_p$. Ou il " +
             "écrit $K_p = 0{,}05 \\times 15 = 0{,}75$, en multipliant au lieu de diviser.",
      cause: "La relation $\\varepsilon = \\dfrac{1}{1+K_p G_0}$ demande, pour être inversée, trois " +
             "gestes successifs : passer à l'inverse, retrancher $1$, diviser par $G_0$. Chacun " +
             "est élémentaire, l'enchaînement ne l'est pas — et l'élève s'arrête au premier, qui " +
             "lui donne déjà un nombre plausible. C'est une difficulté purement algébrique posée " +
             "au milieu d'un chapitre d'automatique : elle n'a rien à voir avec la compréhension " +
             "de la boucle, et il est important de le dire à l'élève, qui croit souvent qu'il « ne " +
             "comprend pas l'asservissement ».",
      /* RENVOI VÉRIFIÉ. Exercice 8 du livre (graine 20260816 + 15, huitième
         tirage) : G_0 = 7, erreur voulue 2 %, donc 1 + 7 K_p = 50,
         7 K_p = 49, K_p = 7 EXACTEMENT.
         POURQUOI L'EXERCICE 8 ET NON 1 NI 6 (même moule) : c'est le seul des
         trois tirages dont la réponse soit un ENTIER, et c'est décisif ici.
         Mesure des trois :
           - exercice 1 (G_0 = 15, 5 %) : K_p = 19/15 = 1,27 arrondi à 1,3 ;
           - exercice 6 (G_0 = 7, 10 %)  : K_p = 9/7 = 1,29 arrondi à 1,3 ;
           - exercice 8 (G_0 = 7, 2 %)   : K_p = 49/7 = 7 exactement.
         Les exercices 1 et 6 donnent tous deux 1,3 après arrondi — valeur
         proche de 1, donc l'élève qui aurait oublié de diviser par G_0 ou de
         retrancher 1 obtiendrait un nombre du même ordre et ne verrait rien.
         Pire : leurs deux réponses sont IDENTIQUES (1,3) alors que les
         énoncés diffèrent, ce qui brouille encore la discussion.
         Sur l'exercice 8, la chaîne est limpide : 1/0,02 = 50, puis 50 - 1 =
         49, puis 49/7 = 7. Chaque étape donne un nombre net et l'élève qui
         s'arrête à 50 voit immédiatement que 50 n'est pas 7. C'est le seul
         tirage du chapitre où l'algèbre est lisible de bout en bout. */
      exercice: { type: "exercice", n: 8 },
      remede: "Faites traiter l'exercice 8 ($G_0 = 7$, erreur voulue $2\\%$, réponse $K_p = 7$), et " +
              "choisissez-le précisément : c'est le <strong>seul des trois tirages du moule dont " +
              "la réponse soit un entier</strong>. Les exercices 1 et 6 donnent tous deux " +
              "$1{,}3$ après arrondi — trop proche de $1$ pour qu'une étape oubliée se remarque. " +
              "Ici la chaîne est nette : $\\dfrac{1}{0{,}02} = 50$, puis $50 - 1 = 49$, puis " +
              "$\\dfrac{49}{7} = 7$. L'élève qui s'arrête à $50$ voit tout de suite que ce n'est " +
              "pas $7$.<br/><br/>" +
              "Imposez la résolution <strong>en trois lignes numérotées</strong>, une par geste : " +
              "(1) je passe à l'inverse, (2) je retranche $1$, (3) je divise par $G_0$. Et " +
              "nommez ce qu'on obtient à chaque ligne : à la ligne 1 on a $1+K$, à la ligne 2 on a " +
              "$K$ (le gain de <strong>boucle</strong>), à la ligne 3 seulement on a $K_p$ (le " +
              "gain du <strong>correcteur</strong>). Nommer les intermédiaires empêche de les " +
              "prendre pour la réponse.<br/><br/>" +
              "Dites-le à l'élève, parce que cela change son rapport au chapitre : " +
              "<strong>cette difficulté est algébrique, pas automatique</strong>. Celui qui bute " +
              "ici a très bien compris l'asservissement — il bute sur une inversion de fraction. " +
              "C'est rassurant et c'est vrai.<br/><br/>" +
              "Le contrôle de vraisemblance à installer, et il est immédiat : <strong>plus on veut " +
              "de précision, plus il faut de gain</strong>. Faites vérifier en comparant " +
              "l'exercice 8 ($2\\%$ → $K_p = 7$) et l'exercice 6 ($10\\%$ → $K_p = 1{,}3$) : cinq " +
              "fois plus de précision demande cinq fois plus de gain. Si le calcul donne un $K_p$ " +
              "plus petit pour une erreur plus petite, il est faux.<br/><br/>" +
              "Le système réel qui rend l'enjeu concret : le <strong>positionnement d'un axe de " +
              "machine à commande numérique</strong>. On ne demande pas « un bon asservissement », " +
              "on demande « $\\pm 0{,}05$ mm sur $100$ mm de course », c'est-à-dire une erreur " +
              "statique imposée. Le gain n'est pas un réglage libre : <strong>il se calcule à " +
              "partir de la précision exigée par le cahier des charges</strong>. C'est exactement " +
              "le sens de cet exercice, et c'est ce que fait un technicien de mise en service."
    },
    {
      titre: "Croire qu'un gain proportionnel suffisamment grand annule l'erreur statique",
      eleve: "« Si $K$ est très grand, $\\dfrac{1}{1+K}$ devient nul : avec un $K_p$ assez élevé, " +
             "l'erreur disparaît. Le PI ne sert à rien. »",
      cause: "Le raisonnement est mathématiquement presque juste — la limite est bien nulle — et " +
             "c'est ce qui le rend si tenace. Ce qui manque, c'est la distinction entre " +
             "<strong>tendre vers zéro</strong> et <strong>valoir zéro</strong> : " +
             "$\\dfrac{1}{1+K}$ est strictement positif pour tout $K$ fini. Et surtout, l'élève " +
             "ignore la contrepartie physique : augmenter $K$ indéfiniment rend le système " +
             "<strong>instable</strong>, ce que le cours signale mais qu'aucun exercice ne lui " +
             "fait rencontrer. Les neuf tirages ne font que des gains sages, et ils confirment " +
             "tous que plus de gain donne moins d'erreur.",
      /* RENVOI VÉRIFIÉ, et VOLONTAIREMENT VERS LE QUIZ. Mesure faite : les
         neuf exercices ne mentionnent JAMAIS de correcteur PI ni PID, ni K_i,
         ni K_d — les trois moules ne font que du proportionnel. Renvoyer vers
         l'un d'eux confirmerait au contraire l'idée fausse : tous montrent
         que plus de gain donne moins d'erreur, ce qui est exactement ce que
         l'élève a retenu. Ce serait un renvoi non seulement inutile mais
         CONTRE-PRODUCTIF.
         Le quiz 2 traite exactement cette erreur : « Quel type de correcteur
         annule l'erreur statique pour une entrée échelon ? », bonne réponse
         « PI ou PID (grâce au terme intégral K_i/p) », et surtout une
         correction qui énonce le point manquant mot pour mot : « Un
         correcteur P seul ne peut que la réduire sans jamais l'annuler
         (epsilon = 1/(1+K) > 0) ». Le distracteur « P seul, à condition
         d'augmenter K_p suffisamment » est précisément l'erreur de l'élève,
         explicitement écartée par la correction.
         Renvoi retenu et vérifié sur le contenu réel du quiz. Le remède
         l'appuie sur le quiz 1 (K = 9, epsilon = 10 %, dont la correction
         ajoute « elle ne s'annule jamais avec un simple correcteur P ») pour
         que la chose soit dite deux fois. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le quiz 2 est exactement la question manquante — « <em>quel type de correcteur " +
              "annule l'erreur statique pour une entrée échelon ?</em> » — et son distracteur " +
              "« <em>P seul, à condition d'augmenter $K_p$ suffisamment</em> » est mot pour mot " +
              "l'erreur de l'élève. Sa correction l'écarte explicitement : « <em>un correcteur P " +
              "seul ne peut que la réduire sans jamais l'annuler</em> ». Enchaînez avec le quiz 1 " +
              "($K = 9$ → $\\varepsilon = 10\\%$), dont la correction redit la même chose : c'est " +
              "un point qui mérite d'être entendu deux fois.<br/><br/>" +
              "N'utilisez <strong>aucun exercice</strong> du livre pour cette erreur, et c'est " +
              "important : les neuf énoncés tirés ne font que du proportionnel et confirment tous " +
              "que plus de gain donne moins d'erreur. Ils <strong>renforceraient</strong> l'idée " +
              "fausse au lieu de la corriger.<br/><br/>" +
              "L'argument mathématique, en une ligne au tableau : $\\dfrac{1}{1+K}$ " +
              "<strong>tend</strong> vers zéro mais ne l'<strong>atteint</strong> jamais. Faites " +
              "calculer $K = 1000$ : $\\varepsilon = 0{,}1\\%$, ce qui est petit mais non nul. Puis " +
              "$K = 10^6$ : $0{,}0001\\%$. Toujours positif. On ne peut pas annuler une erreur en " +
              "divisant par un nombre de plus en plus grand — <strong>il faut un mécanisme " +
              "différent</strong>, et c'est l'intégrateur.<br/><br/>" +
              "L'argument physique, plus important encore, parce qu'il montre que la stratégie " +
              "« plus de gain » ne se contente pas d'être insuffisante, elle est " +
              "<strong>dangereuse</strong> : un gain trop grand rend le système " +
              "<strong>instable</strong>. Le cours le signale, aucun exercice ne le fait " +
              "rencontrer, et c'est le chapitre 6 (Bode) qui donnera l'outil pour le quantifier — " +
              "annoncez-le, cela motive le chapitre suivant.<br/><br/>" +
              "Le système réel qui installe l'idée d'intégrateur, et il est dans toutes les " +
              "voitures : le <strong>régulateur de vitesse</strong>. En montée, un correcteur " +
              "proportionnel se stabiliserait à $126$ km/h pour une consigne de $130$ — il faut un " +
              "écart pour produire une commande, donc l'écart ne peut pas disparaître. " +
              "L'intégrateur, lui, <strong>accumule l'erreur passée</strong> : tant qu'il reste " +
              "$4$ km/h d'écart, sa contribution continue de monter, et elle ne s'arrête de " +
              "monter que quand l'écart est exactement nul. Dit ainsi, le terme $K_i/p$ n'est plus " +
              "une formule : c'est un mécanisme dont on comprend pourquoi il marche. " +
              "<strong>L'intégrale a de la mémoire, le proportionnel n'en a pas.</strong>"
    },
    {
      titre: "Ne pas savoir identifier $K_p$, $K_i$ et $K_d$ dans l'expression d'un correcteur PID",
      eleve: "Sur $C(p) = 3 + \\dfrac{2}{p} + 0{,}5\\,p$, l'élève ne sait pas lequel des trois " +
             "nombres est $K_i$. Il annonce $K_i = 0{,}5$ (le coefficient du terme en $p$) et " +
             "$K_d = 2$, ou additionne les trois sans savoir ce qu'il additionne.",
      cause: "L'identification suppose de reconnaître la <strong>forme</strong> de chaque terme — " +
             "une constante, un $1/p$, un $p$ — et d'y associer un rôle. Or les trois coefficients " +
             "sont écrits de la même manière, et rien dans la lettre $K$ ne dit à quelle action " +
             "elle appartient : il faut avoir compris que $1/p$ est l'intégration et $p$ la " +
             "dérivation, ce qui est une convention de calcul opérationnel que les élèves de " +
             "terminale SI n'ont pas établie. Et comme aucun exercice du livre ne leur fait " +
             "manipuler un PID, ils n'ont jamais eu l'occasion de la pratiquer : ce n'est pas un " +
             "défaut de travail, c'est un manque d'entraînement que le corpus ne comble pas.",
      /* exercice: null ASSUMÉ, et c'est le null le mieux motivé de cette
         fiche. MESURE FAITE sur les neuf tirages, relus un par un : AUCUN ne
         mentionne un correcteur PI ou PID, ni K_i, ni K_d, ni le moindre
         terme en 1/p ou en p.
           - moule « K_p à trouver » (1, 6, 8) : proportionnel seul ;
           - moule « erreur statique » (2, 4, 7) : proportionnel seul ;
           - moule « gain statique FTBF » (3, 5, 9) : proportionnel seul.
         Les neuf énoncés tirés font donc, sans exception, du PROPORTIONNEL.
         Le QUIZ ne comble pas ce trou non plus, vérifié : sa question 2
         MENTIONNE le terme intégral K_i/p mais ne demande aucune
         identification de coefficients, et ses questions 1 et 3 portent sur
         epsilon = 1/(1+K) et sur la formule de Black.
         Le seul support du livre est la question 4 de l'évaluation notée
         (C(p) = 3 + 2/p + 0,5p, somme K_p + K_i + K_d = 5,5), et une
         remédiation ne renvoie JAMAIS vers le devoir noté.
         C'est donc un vrai trou du corpus, à signaler franchement : sur un
         devoir de QUATRE questions, celle-ci n'a aucun entraînement. D'où
         exercice: null, et un remède qui fournit à l'enseignant trois
         expressions prêtes à écrire au tableau pour combler le manque en cinq
         minutes. */
      exercice: null,
      remede: "Aucun exercice du livre ne peut servir ici, et c'est le fait le plus important de " +
              "cette fiche : <strong>aucun des neuf énoncés tirés ne mentionne un correcteur PI ou " +
              "PID</strong>, ni $K_i$, ni $K_d$, ni le moindre terme en $1/p$ ou en $p$. Les neuf " +
              "font du proportionnel. Le quiz évoque le terme intégral mais ne demande aucune " +
              "identification. Le seul support du livre est la question $4$ du devoir noté — donc " +
              "hors de portée pour une remédiation. Sur un devoir de <strong>quatre</strong> " +
              "questions, celle-ci est sans entraînement : autant le savoir avant, pas " +
              "après.<br/><br/>" +
              "<strong>Le geste de substitution, et il coûte cinq minutes de préparation pour deux " +
              "points au devoir.</strong> Écrivez trois expressions au tableau et faites remplir " +
              "un tableau à trois colonnes ($K_p$, $K_i$, $K_d$) :<br/><br/>" +
              "$C_1(p) = 5 + \\dfrac{3}{p}$ (un PI : $K_p = 5$, $K_i = 3$, $K_d = 0$) ;<br/>" +
              "$C_2(p) = 2 + 0{,}1\\,p$ (un PD : $K_p = 2$, $K_i = 0$, $K_d = 0{,}1$) ;<br/>" +
              "$C_3(p) = 4 + \\dfrac{1}{p} + 0{,}2\\,p$ (un PID complet).<br/><br/>" +
              "L'intérêt des deux premières est de comporter un <strong>zéro</strong> : c'est en " +
              "constatant qu'un PI n'a pas d'action dérivée que l'élève comprend que les trois " +
              "termes sont indépendants et que la lettre ne suffit pas à les distinguer — c'est la " +
              "<strong>forme</strong> qui décide.<br/><br/>" +
              "La règle de lecture à faire écrire une fois, en regardant la puissance de $p$ : " +
              "<strong>pas de $p$ → proportionnel ; $p$ au dénominateur → intégral ; $p$ au " +
              "numérateur → dérivé</strong>. Trois formes, trois actions, dans cet ordre.<br/><br/>" +
              "Et pour que ce ne soit pas qu'une convention à mémoriser, donnez le sens en " +
              "reprenant le <strong>régulateur de vitesse</strong> du chapitre : le terme " +
              "<strong>P</strong> réagit à l'écart <em>maintenant</em> ; le terme " +
              "<strong>I</strong> accumule ce qui s'est <em>passé</em> (c'est lui qui finit par " +
              "annuler l'erreur) ; le terme <strong>D</strong> anticipe ce qui <em>va</em> arriver " +
              "(il freine avant le dépassement). <strong>Présent, passé, futur</strong> — dit " +
              "ainsi, l'ordre des trois termes ne s'oublie plus, et l'identification des " +
              "coefficients devient une lecture plutôt qu'un exercice de mémoire."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. QUATRE questions
     ici et non cinq — COMPTÉ sur le module chargé : c'est l'un des chapitres
     de l'ouvrage à n'en avoir que 4 (comme `si-tle-grafcet`), et `validerProf`
     exige exactement autant de compétences que de questions.

     Q1 ($K = 19$ → $\varepsilon = 5\%$) → résoudre : application directe de
        $\varepsilon = 1/(1+K)$, une seule division, et le gain de boucle est
        DÉJÀ donné (pas de produit à faire).
     Q2 (FTBO $= 20/(1+4p)$ → gain statique de la FTBF $\approx 0{,}95$) →
        modéliser : c'est la question la plus exigeante du devoir. Il faut
        d'abord reconnaître que le gain statique s'obtient en posant $p = 0$,
        puis appliquer la formule de Black à une fonction de transfert
        FRACTIONNAIRE — soit deux décisions de modélisation que l'énoncé ne
        guide pas. C'est la seule question du devoir où l'élève manipule une
        expression en $p$ et non un nombre.
     Q3 (quel correcteur annule l'erreur statique → PI ou PID) → analyser :
        restitution d'une propriété d'un constituant (le rôle de
        l'intégrateur), à distinguer de trois distracteurs. Aucun calcul.
        Rattachée à `analyser` selon la convention du référentiel SI de
        l'ouvrage (voir REFERENTIELS.si dans prof.js : les questions de
        restitution y sont rattachées à `analyser`, « identifier et
        caractériser une grandeur ou un constituant »).
     Q4 ($C(p) = 3 + 2/p + 0{,}5p$ → $K_p + K_i + K_d = 5{,}5$) → analyser :
        la tâche réelle est d'IDENTIFIER trois coefficients par lecture de la
        forme des termes ; l'addition qui suit est triviale et n'est là que
        pour rendre la réponse numérique. Ce n'est pas `résoudre` : il n'y a
        aucune relation à appliquer, seulement une structure à reconnaître.
        C'est bien « identifier et caractériser un constituant ».

     RÉPARTITION DE CE CHAPITRE : résoudre 1, modéliser 1, analyser 2.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés. Le cas
     de `expérimenter` est particulièrement frappant sur ce chapitre : régler
     un PID est par excellence une tâche de TP (on observe une réponse, on
     ajuste, on réobserve), et le corpus n'en propose rien — ni exercice, ni
     question. Voir la note de REFERENTIELS.si dans prof.js : sur les
     96 questions de l'ouvrage, `expérimenter` et `concevoir` ne sont JAMAIS
     tirés.

     À SIGNALER, et c'est écrit dans la `note` : Q3 et Q4 — soit LA MOITIÉ de
     ce devoir de quatre questions — portent sur les correcteurs PI et PID, que
     les neuf exercices du livre ne travaillent JAMAIS. Le quiz rattrape Q3
     (son énoncé 2). Q4 n'a aucun support d'entraînement dans tout le
     chapitre. */
  competences: {
    evaluation: ['résoudre', 'modéliser', 'analyser', 'analyser']
  }
};
