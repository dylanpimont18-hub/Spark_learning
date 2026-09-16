/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-lumiere.prof.js
   Fiche professeur du chapitre « La lumière (réfraction, spectre) »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 9, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés :
     - moule A (indice de réfraction, $n = c/v$) : exercices IMPAIRS 1, 3, 5,
       7, 9, 11 ;
     - moule B (Snell-Descartes dans un seul sens, air → milieu dense, avec
       $i_2 = \arcsin(n_1 \sin(i_1)/n_2)$) : exercices PAIRS 2, 4, 6, 8, 10,
       12.
   Le moule B ne fait JAMAIS le trajet inverse (milieu dense → air), ne fait
   jamais chercher $n_2$ à partir des deux angles, et ne fait jamais approcher
   l'angle limite de réfraction totale. Aucun exercice, par ailleurs, ne porte
   sur la DISPERSION ni sur le spectre — pourtant la définition D4 du cours et
   la moitié du titre du chapitre. Deux des quatre erreurs ci-dessous sont
   donc volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-lumiere"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Ce chapitre ferme le bloc « Ondes et signaux » et, comme les deux
     autres du bloc, se traite sans aucun chapitre de seconde en amont.

     Candidats examinés et écartés un par un :
     - ch. 9 (Émission et perception du son) : le candidat le plus tentant,
       puisque les deux chapitres traitent d'ondes et que le contraste « le
       son a besoin d'un milieu, la lumière non » est un moment
       d'enseignement précieux. Écarté quand même, et c'est important de le
       dire : ce contraste est un ENRICHISSEMENT, pas une dépendance. Rien
       dans ce chapitre-ci — ni l'indice de réfraction, ni Snell-Descartes,
       ni la dispersion — n'utilise la moindre notion du chapitre 9 : ni
       période, ni fréquence, ni amplitude. Un élève qui aurait manqué le
       chapitre 9 suivrait celui-ci sans difficulté. Le déclarer ferait dire
       à la colonne « S'appuie sur » une dépendance que l'enseignement ne vit
       pas, et le projet préfère une colonne honnête à une colonne remplie.
     - ch. 8 (Signaux et capteurs) : la lumière y est citée comme exemple de
       signal, mais ce chapitre-ci n'exploite aucune chaîne de mesure ni
       aucune relation d'étalonnage. Écarté.
     - ch. 1 (Description d'un mouvement) : la vitesse $v$ de la définition
       D2 est bien une vitesse, et $n = c/v$ est un quotient de deux
       vitesses. Mais on n'y calcule ni trajectoire ni durée, et la vitesse y
       est une donnée d'énoncé jamais mesurée. La parenté est de forme, pas
       de contenu. Écarté.
     - ch. 2 à 7 (mécanique et chimie) : aucun lien. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 10, celui du livre. Ce chapitre ferme
     le bloc « Ondes et signaux » et, avec lui, l'année.

     Sa place après le chapitre 9 se justifie par le sens de la difficulté
     conceptuelle : le son est une onde MÉCANIQUE, une vibration de matière
     qu'on peut toucher sur un haut-parleur ; la lumière, elle, traverse le
     vide et ne s'incarne dans rien de palpable. Aller du tangible vers
     l'intangible est le bon ordre, et le contraste « le son a besoin d'un
     milieu, la lumière non » n'a sa force que dans ce sens-là — c'est
     d'ailleurs par cette phrase que s'ouvre l'introduction du chapitre 9.

     Il y a une seconde raison, plus pratique : ce chapitre est le seul du
     niveau à exiger la fonction $\arcsin$ de la calculatrice, et donc une
     aisance technique qu'il vaut mieux demander en fin d'année qu'en
     septembre.

     Le livre le place aussi en chapitre 10 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 10,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Ondes et signaux », partie « Vision et image » /
     « Signaux et capteurs » — sous-partie « Réfraction et dispersion de la
     lumière ». Repris aux mots du programme. */
  attendus: [
    "Exploiter les lois de Snell-Descartes pour la réfraction, y compris dans le cas de milieux d'indices différents",
    "Tester les lois de Snell-Descartes à partir d'une série de mesures et déterminer l'indice de réfraction d'un milieu",
    "Exploiter un schéma de décomposition de la lumière blanche par un prisme et relier la dispersion à la variation de l'indice de réfraction avec la longueur d'onde"
  ],

  note: "La réfraction, l'indice de réfraction, les lois de Snell-Descartes et la dispersion de la " +
        "lumière blanche sont au programme de seconde : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés ne travaillent que <strong>deux</strong> gestes : calculer " +
        "$n = c/v$, et appliquer Snell-Descartes <strong>toujours dans le même sens</strong>, de " +
        "l'air ($n_1 = 1{,}00$) vers un milieu plus dense. Trois manques comptent. D'abord, " +
        "<strong>le trajet inverse n'est jamais traité</strong> : sortir d'un milieu dense vers " +
        "l'air, c'est le cas où le rayon s'éloigne de la normale, où l'angle peut devenir " +
        "impossible, et où apparaît la réflexion totale — celle qui fait fonctionner les fibres " +
        "optiques. Ensuite, aucun exercice ne demande de <strong>déterminer un indice à partir de " +
        "deux angles mesurés</strong>, alors que c'est exactement le deuxième attendu officiel " +
        "ci-dessus et le geste du TP de réfraction. Enfin, et c'est le plus frappant : " +
        "<strong>aucun des vingt-sept énoncés ne porte sur la dispersion</strong>, ni sur le " +
        "prisme, ni sur le spectre — qui occupent pourtant la définition D4 du cours, le troisième " +
        "attendu officiel, et la moitié du titre du chapitre. Prévoir donc, en complément du " +
        "manuel, au moins un exercice de réfraction « en sortie » et une observation du spectre au " +
        "prisme.<br/><br/>" +
        "Deux remarques de terrain. La première tient à la calculatrice : ce chapitre est le seul " +
        "du niveau à exiger la fonction <strong>$\\arcsin$</strong> (touche $\\sin^{-1}$), et " +
        "l'expérience montre qu'une partie non négligeable de la classe la cherche encore en fin " +
        "de séance, ou travaille en <strong>radians</strong> sans le savoir. Vérifier le mode " +
        "DEGRÉ de chaque machine avant le premier calcul fait gagner vingt minutes ; un " +
        "$\\arcsin(0{,}383)$ qui rend $0{,}39$ au lieu de $22{,}5$ est un problème de réglage, pas " +
        "de compréhension, et il vaut mieux qu'un élève le sache. La seconde : la " +
        "<strong>dispersion</strong> ne s'explique complètement qu'avec la longueur d'onde, qui " +
        "est une notion de <strong>première</strong> — ici, on se contente de dire que l'indice " +
        "« dépend de la couleur », ce qui est vrai mais laisse l'élève sans mécanisme. La colonne " +
        "« S'appuie sur » ne peut pas le montrer, puisqu'un prérequis ne vise qu'un chapitre du " +
        "même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (angles mesurés par rapport à la surface) est celle que le
     cours désigne dans son encadré « piège » et c'est la plus coûteuse en
     points ; l'erreur 2 est l'inversion du quotient $n = c/v$ ; l'erreur 3 est
     l'erreur de calculatrice, purement technique mais massive ; l'erreur 4
     porte sur la dispersion, et n'a aucun support dans le tirage. */
  erreurs: [
    {
      titre: "Mesurer les angles par rapport à la surface",
      eleve: "Devant un rayon qui arrive à $26°$ de la normale, l'élève relève l'angle entre le " +
             "rayon et la surface du dioptre, soit $64°$, et l'utilise dans la formule. Sur un " +
             "schéma, il trace ses angles en partant du trait horizontal qui sépare les deux " +
             "milieux.",
      cause: "La surface de séparation est ce que l'élève <strong>voit</strong> : c'est un trait " +
             "franc, dessiné, qui structure toute la figure. La normale, elle, est une droite " +
             "<strong>imaginaire</strong> qu'il faut tracer soi-même, en pointillés, et dont rien " +
             "n'indique l'existence tant qu'on ne l'a pas dessinée. Mesurer par rapport à ce qui " +
             "est visible plutôt que par rapport à ce qui est construit est un réflexe " +
             "raisonnable — d'autant que la géométrie du collège mesure habituellement les angles " +
             "par rapport aux droites tracées.",
      remede: "Imposer un <strong>geste matériel préalable</strong>, avant toute mesure et avant " +
              "tout calcul : tracer la normale en pointillés au point d'incidence, " +
              "systématiquement, sur chaque figure. Un angle ne se mesure qu'à partir d'un trait " +
              "qui existe ; tant que la normale n'est pas tracée, il n'y a rien à mesurer. Le " +
              "rituel vaut mieux que la consigne.<br/><br/>" +
              "Donner ensuite la <strong>raison</strong> de cette convention, sans quoi elle " +
              "restera arbitraire et s'oubliera : la normale est la seule direction " +
              "<strong>privilégiée</strong> par la physique du phénomène — c'est la direction " +
              "selon laquelle un rayon ne serait pas dévié du tout. Prendre l'angle par rapport à " +
              "elle, c'est mesurer « de combien la lumière s'écarte du trajet sans " +
              "déviation ».<br/><br/>" +
              "Installer enfin un <strong>test de cohérence</strong> qui attrape l'erreur sans " +
              "rien comprendre : les deux angles sont toujours " +
              "<strong>complémentaires</strong> — si l'on a $26°$ d'un côté, on a $64°$ de " +
              "l'autre, et la somme fait $90°$. En entrant dans un milieu plus dense, le rayon se " +
              "<strong>rapproche</strong> de la normale, donc $i_2 < i_1$. Un résultat où l'angle " +
              "réfracté est plus grand que l'angle d'incidence, alors qu'on entre dans un verre, " +
              "signale une confusion avant toute vérification du calcul.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 9) : l'exercice 2 donne n_1 = 1,00, n_2 = 1,50
         et i_1 = 26°, réponse i_2 = 17,0°. Le renvoi le choisit parmi les six
         du moule B pour une raison chiffrée : c'est le tirage avec le PLUS
         PETIT angle d'incidence, donc celui où l'erreur produit l'écart le
         plus spectaculaire. En prenant 64° au lieu de 26°, l'élève obtient
         arcsin(sin(64)/1,50) = 36,8° — c'est-à-dire un angle réfracté PLUS
         GRAND que l'angle d'incidence de 26° qu'il croit traiter, ce qui est
         impossible en entrant dans un milieu plus dense et se disqualifie par
         le seul test de cohérence du remède. Sur l'exercice 8 (i_1 = 52°) ou
         l'exercice 10 (i_1 = 44°), les angles sont proches de 45°, si bien que
         le complémentaire est du même ordre et que l'absurdité est beaucoup
         moins visible. Le tirage 2 est donc le plus démonstratif, et il est en
         outre le premier du moule que l'élève rencontre. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Inverser le quotient dans $n = c/v$",
      eleve: "Pour une lumière se propageant à $v = 1{,}92 \\times 10^8$ m/s, l'élève calcule " +
             "$n = \\dfrac{1{,}92}{3{,}00} = 0{,}64$ au lieu de $1{,}56$. Il annonce un indice " +
             "inférieur à $1$ sans que cela l'alerte.",
      cause: "Le quotient est mémorisé comme « une vitesse divisée par une autre », sans que " +
             "l'ordre soit ancré à quoi que ce soit : les deux nombres sont du même type, dans la " +
             "même unité, et rien dans la lettre $n$ ne dit lequel va au numérateur. L'élève " +
             "reconstruit donc le rapport au moment du calcul, et une chance sur deux le place à " +
             "l'envers. Surtout, rien dans le résultat ne l'alerte, parce qu'il n'a pas encore de " +
             "repère de ce qu'est un indice « normal ».",
      remede: "Ancrer l'ordre sur un <strong>fait physique</strong> plutôt que sur une position " +
              "dans la formule : <strong>rien ne va plus vite que la lumière dans le vide</strong>. " +
              "Donc $v \\leqslant c$ toujours, donc le numérateur $c$ est toujours le plus grand, " +
              "donc <strong>$n \\geqslant 1$ toujours</strong>. Un indice inférieur à $1$ est " +
              "impossible, comme une probabilité supérieure à $1$ : il s'écarte sans même être " +
              "vérifié.<br/><br/>" +
              "Faire ensuite <strong>annoncer l'encadrement avant le calcul</strong>, à voix " +
              "haute et systématiquement : « l'indice sera supérieur à $1$ ». Un élève qui a " +
              "annoncé l'encadrement ne rend pas $0{,}64$ : il voit lui-même que quelque chose " +
              "cloche, ce qui vaut infiniment mieux qu'une correction reçue.<br/><br/>" +
              "Donner enfin du <strong>sens</strong> au nombre, ce qui est le plus sûr moyen de ne " +
              "plus l'inverser : $n = 1{,}56$ signifie « dans ce milieu, la lumière va $1{,}56$ " +
              "fois moins vite que dans le vide ». C'est un facteur de ralentissement, et un " +
              "facteur de ralentissement est forcément supérieur à $1$. Installer au passage les " +
              "repères que la classe doit garder : l'air vaut $1{,}00$, l'eau $1{,}33$, le verre " +
              "environ $1{,}50$, le diamant $2{,}42$ — les indices usuels tiennent tous entre $1$ " +
              "et $2{,}5$.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         v = 1,92 * 10^8 m/s et c = 3,00 * 10^8 m/s, réponse n = 1,56. Le
         renvoi le choisit parmi les six du moule A parce que c'est le tirage
         où l'inversion donne le résultat le plus PROCHE d'une valeur plausible
         en apparence : 0,64 est un nombre propre, qui ne choque pas un élève
         sans repère — contrairement à l'exercice 11 (v = 1,73 * 10^8, inverse
         0,58) ou à l'exercice 7 (v = 2,27 * 10^8, inverse 0,76), qui donnent
         des inverses du même ordre mais sur des réponses correctes (1,73 et
         1,32) moins représentatives des milieux réels. Ici la bonne réponse,
         1,56, tombe dans la plage du verre optique que le remède installe
         comme repère (environ 1,50), ce qui permet de conclure l'exercice par
         une identification : « ce plastique se comporte comme du verre ».
         L'exercice 1 est en outre le premier du chapitre, donc celui où le pli
         de l'encadrement n >= 1 se prend. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Oublier l'arcsinus, ou calculer en radians",
      eleve: "Après avoir trouvé $\\sin(i_2) = 0{,}383$, l'élève annonce $i_2 = 0{,}383°$ : il a " +
             "livré le sinus au lieu de l'angle. Ou, calculatrice en mode radian, il obtient " +
             "$i_2 = 0{,}39$ au lieu de $22{,}5°$.",
      cause: "Deux causes distinctes se superposent, et il faut les traiter séparément. La " +
             "première est <strong>conceptuelle</strong> : $\\sin(i_2)$ et $i_2$ sont deux " +
             "nombres différents, mais l'écriture $\\sin(i_2) = 0{,}383$ ressemble tellement à " +
             "une réponse achevée que l'élève s'arrête. La seconde est purement " +
             "<strong>technique</strong> : la calculatrice ne signale pas son mode, et un " +
             "résultat en radians a exactement la même tête qu'un résultat en degrés — un nombre, " +
             "sans unité affichée. Ni l'une ni l'autre ne relève de la physique.",
      remede: "Traiter d'abord le point technique, une bonne fois pour toutes et pour toute la " +
              "classe : <strong>vérifier le mode DEG</strong> de chaque machine avant le premier " +
              "calcul, et faire le test de contrôle qui ne prend que trois secondes — " +
              "$\\sin(30°)$ doit rendre exactement $0{,}5$. Si la machine rend $-0{,}99$, elle " +
              "est en radians. Ce test vaut la peine d'être affiché au tableau toute la " +
              "séance.<br/><br/>" +
              "Séparer ensuite les deux quantités par le <strong>vocabulaire</strong> et les " +
              "écrire sur deux lignes distinctes : ligne 1, « le sinus de l'angle vaut " +
              "$0{,}383$ » ; ligne 2, « donc l'angle vaut $22{,}5°$ ». Un sinus est un nombre " +
              "compris entre $-1$ et $1$, sans unité ; un angle se compte en degrés. " +
              "<strong>Une réponse comprise entre $0$ et $1$ n'est jamais un angle</strong> dans " +
              "ce chapitre — c'est le test le plus rapide, et il attrape les deux erreurs à la " +
              "fois.<br/><br/>" +
              "Faire enfin <strong>vérifier par retour</strong>, ce qui est gratuit et ne rate " +
              "jamais : reprendre l'angle trouvé, calculer $n_2 \\sin(i_2)$ et vérifier qu'on " +
              "retombe sur $n_1 \\sin(i_1)$. Avec $i_2 = 22{,}5°$ et $n_2 = 1{,}50$ : " +
              "$1{,}50 \\times 0{,}383 = 0{,}574 = \\sin(35°)$, conforme. C'est exactement ce que " +
              "fait l'exemple résolu du cours dans sa dernière ligne.",
      /* Volontairement SANS renvoi, et pour une raison de fond : l'erreur est
         de MANIPULATION de la calculatrice, pas de physique, et un exercice
         sur papier ne peut pas évaluer un réglage de machine. Vérifié sur le
         tirage : les six exercices du moule B (2, 4, 6, 8, 10, 12) exigent
         tous un arcsinus et sont donc tous également exposés à l'erreur —
         aucun ne la travaille plus qu'un autre, et aucun ne demande de
         vérifier le mode ni de distinguer un sinus d'un angle. Désigner l'un
         d'eux serait arbitraire et donnerait à l'enseignant l'illusion d'une
         remédiation ciblée là où il n'y a qu'un exercice de plus. La
         remédiation se fait machine en main, par le test sin(30°) = 0,5, et le
         remède le dit. */
      exercice: null
    },
    {
      titre: "Croire que le prisme colore la lumière blanche",
      eleve: "L'élève explique que « le prisme ajoute des couleurs à la lumière », ou que « le " +
             "verre du prisme est coloré ». Devant un arc-en-ciel, il affirme que « les gouttes " +
             "d'eau fabriquent les couleurs ».",
      cause: "L'expérience quotidienne dit que ce qui est blanc n'a pas de couleur, et que " +
             "colorer, c'est ajouter — un feutre, une peinture, un filtre ajoutent de la couleur " +
             "à ce qui n'en avait pas. L'idée que le blanc <strong>contienne déjà</strong> toutes " +
             "les couleurs est contre-intuitive au sens fort : elle inverse la logique de " +
             "l'ajout. Historiquement, c'est exactement la thèse que Newton a dû défendre contre " +
             "ses contemporains, qui tenaient pour évident que le prisme « modifiait » la " +
             "lumière.",
      remede: "Refaire l'<strong>expérience décisive de Newton</strong>, qui tranche et que rien " +
              "ne remplace : placer un <strong>second prisme</strong> retourné derrière le " +
              "premier. Les couleurs se recombinent et redonnent du blanc. Si le prisme " +
              "fabriquait les couleurs, le second en fabriquerait encore plus — il en enlève. " +
              "L'expérience prouve donc que le prisme ne fait que <strong>séparer</strong> ce qui " +
              "était déjà là. Le disque de Newton, qu'on fait tourner, donne le même résultat de " +
              "façon plus spectaculaire encore.<br/><br/>" +
              "Expliquer ensuite le <strong>mécanisme</strong>, qui rattache la dispersion à tout " +
              "le reste du chapitre : l'indice de réfraction $n$ dépend légèrement de la couleur " +
              "de la lumière — il vaut environ $1{,}53$ pour le violet et $1{,}51$ pour le rouge " +
              "dans un verre ordinaire. D'après Snell-Descartes, un indice plus grand dévie " +
              "davantage : le violet est donc le plus dévié, le rouge le moins, et les couleurs " +
              "s'étalent. La dispersion n'est pas un phénomène à part, c'est " +
              "<strong>la réfraction appliquée couleur par couleur</strong>.<br/><br/>" +
              "Distinguer enfin la <strong>dispersion</strong> de l'<strong>absorption</strong>, " +
              "que les élèves confondent souvent et qui explique l'erreur sur le verre " +
              "« coloré » : un filtre rouge est rouge parce qu'il ABSORBE les autres couleurs — " +
              "il en enlève. Un prisme n'absorbe rien, il sépare. Deux mécanismes opposés, deux " +
              "résultats visuellement proches.",
      /* Volontairement SANS renvoi, et pour la raison la plus nette de cette
         fiche : AUCUN des vingt-sept énoncés tirés ne porte sur la dispersion.
         Les mots « prisme », « spectre », « couleur » et « lumière blanche »
         n'apparaissent dans aucun des douze exercices numérotés ni dans les
         quinze supplémentaires — le mot « prisme » ne figure que comme DÉCOR
         de deux énoncés du moule B (« pour un prisme d'optique en salle de
         travaux pratiques »), qui demandent ensuite un banal angle de
         réfraction sur une lumière non colorée. La définition D4 du cours et
         le troisième attendu officiel du programme n'ont donc aucun support
         dans les exercices, alors qu'ils occupent la moitié du titre du
         chapitre. Pointer un exercice d'angle pour remédier à une conception
         sur les couleurs serait un renvoi faux, ce que le projet tient pour
         pire qu'un renvoi absent. La remédiation se fait au prisme et au
         disque de Newton, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — « les angles se mesurent par rapport à : … », avec « la surface de
          séparation » en distracteur, qui est exactement l'erreur 1 de cette
          fiche. Pure restitution de la définition D3 du cours :
          « s'approprier ».
     Q2 — air → eau, $i_1 = 50°$, calculer $i_2$. La loi est donnée par le
          cours sous forme d'égalité $n_1\sin(i_1) = n_2\sin(i_2)$ et doit être
          RENVERSÉE pour isoler $\sin(i_2)$, puis l'arcsinus appliqué : c'est
          une suite de transformations à décider avant tout calcul, donc
          « analyser ». C'est le moule B du chapitre.
     Q3 — « l'indice de réfraction vérifie toujours : … », avec « $n \leqslant 1$ »
          et « $n$ peut être négatif » en distracteurs. Il faut juger la
          validité de quatre affirmations sur un encadrement, et c'est
          exactement le test que l'erreur 2 de cette fiche installe :
          « valider ».
     Q4 — $v = 2{,}00 \times 10^8$ m/s, calculer $n$. Relation donnée, sens
          direct, une division : « réaliser ».
     Q5 — la décomposition par un prisme s'explique par … ? Les distracteurs
          (réflexion totale, absorption, diffraction) sont tous des phénomènes
          optiques réels, et il faut identifier lequel rend compte de
          l'observation en le reliant au mécanisme du cours — l'indice qui
          dépend de la couleur. C'est une interprétation de phénomène, pas une
          restitution de définition : « analyser ». C'est aussi l'erreur 4 de
          cette fiche.

     « Analyser » est donc mobilisé DEUX fois (Q2 et Q5), ce qui est cohérent
     avec un chapitre dont les deux difficultés réelles sont le renversement
     de la loi de Snell-Descartes et l'interprétation de la dispersion.
     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. */
  competences: {
    evaluation: ["s'approprier", "analyser", "valider", "réaliser", "analyser"]
  }
};
