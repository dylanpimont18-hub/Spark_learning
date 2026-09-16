/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-signaux.prof.js
   Fiche professeur du chapitre « Signaux et capteurs » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 7, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire. C'est
   le chapitre le PLUS FOURNI du niveau — les autres tirent 27 ou 30 énoncés —
   mais cette abondance ne diversifie rien : les quarante-deux se ramènent à
   DEUX moules, strictement alternés, et tous deux partent d'une relation
   d'étalonnage DÉJÀ CONNUE :
     - moule A (sens direct, $U = a\theta + b$ avec $\theta$ donné) :
       exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (sens inverse, $\theta = (U - b)/a$ avec $U$ donné) :
       exercices PAIRS 2, 4, 6, 8, 10, 12.
   Aucun exercice ne demande de DÉTERMINER la relation d'étalonnage à partir
   de deux points de mesure, alors que c'est la deuxième étape de la méthode
   du cours et l'objet de l'exemple résolu. Aucun ne porte non plus sur la
   chaîne de mesure ni sur le rôle du capteur. Deux des quatre erreurs
   ci-dessous sont donc volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-signaux"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Ce chapitre ouvre le bloc « Ondes et signaux » de la seconde et ne
     dépend d'aucun des sept chapitres qui le précèdent.

     Candidats examinés et écartés un par un :
     - ch. 1 (Description d'un mouvement) : le seul candidat qui mérite une
       vraie discussion. Sa vitesse instantanée approchée
       $v_i \approx (x_{i+1} - x_{i-1})/2\tau$ est un taux d'accroissement,
       et la pente $a = (U_2 - U_1)/(G_2 - G_1)$ de ce chapitre-ci en est un
       autre : c'est exactement le même geste mathématique. Écarté quand même,
       et pour une raison de fond : ce qui est commun aux deux chapitres n'est
       pas un contenu de PHYSIQUE, c'est une technique de mathématiques. Un
       élève qui aurait manqué le chapitre 1 ne comprendrait pas moins bien ce
       chapitre-ci ; un élève qui ne sait pas calculer un quotient de
       différences échouera dans les deux, et ce n'est pas le chapitre 1 qui
       le lui apprendra. Déclarer ce prérequis ferait dire à la colonne
       « S'appuie sur » une dépendance qui n'existe pas dans l'enseignement.
     - ch. 9 (Son) et ch. 10 (Lumière) : ils appartiennent au même bloc
       « Ondes et signaux » et viennent APRÈS. Les déclarer serait de toute
       façon refusé par `validerPrerequis`, et à juste titre : c'est le
       chapitre 9 qui réutilise la notion de signal installée ici.
     - ch. 2 à 7 (mécanique et chimie) : aucun lien. On notera seulement que
       la tension électrique $U$ est manipulée ici sans jamais être définie —
       voir la note, c'est un acquis de collège. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 8, celui du livre. Ce chapitre ouvre
     le bloc « Ondes et signaux » de la seconde (chapitres 8, 9 et 10), et
     c'est le bon ordre : il installe la notion générale de SIGNAL, dont les
     deux chapitres suivants traitent deux cas particuliers — le signal sonore
     au chapitre 9, le signal lumineux au chapitre 10.

     Ce chapitre est en outre indépendant de tous les autres et pourrait
     techniquement se placer n'importe où dans l'année. Le déplacer n'aurait
     pourtant aucun intérêt et coûterait la cohérence du bloc : c'est le seul
     chapitre du niveau qui parle explicitement de chaîne de mesure et
     d'étalonnage, notions qui éclairent rétrospectivement tous les TP de
     l'année. Le placer en ouverture du dernier bloc permet de les présenter
     comme une synthèse de ce que la classe a fait sans le nommer depuis
     septembre.

     Le livre le place aussi en chapitre 8 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 8,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Ondes et signaux », partie « Capteurs électriques ».
     Repris aux mots du programme. */
  attendus: [
    "Citer des exemples de capteurs présents dans les objets de la vie quotidienne",
    "Déterminer expérimentalement la relation entre la grandeur mesurée et la grandeur physique d'entrée dans le cas d'un capteur électrique",
    "Mesurer une grandeur physique à l'aide d'un capteur électrique résistif et exploiter sa courbe d'étalonnage"
  ],

  note: "Le signal, le capteur, la chaîne de mesure, la relation affine d'étalonnage $U = aG + b$ " +
        "et son exploitation dans les deux sens sont au programme de seconde : le chapitre ne " +
        "déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Ce chapitre est le plus fourni du niveau — <strong>quarante-deux</strong> énoncés tirés, " +
        "contre vingt-sept pour la plupart des autres — mais cette abondance ne diversifie rien : " +
        "les quarante-deux se ramènent à deux moules, et tous deux " +
        "<strong>donnent la relation d'étalonnage dans l'énoncé</strong>. L'élève n'a jamais qu'à " +
        "remplacer $\\theta$ pour obtenir $U$, ou à renverser la relation pour obtenir $\\theta$. " +
        "Or l'étalonnage — la <strong>détermination</strong> de $a$ et de $b$ à partir de deux " +
        "points de mesure — est la deuxième étape de la méthode du cours, tout l'objet de son " +
        "exemple résolu, et le cœur du deuxième attendu officiel ci-dessus. Aucun des " +
        "quarante-deux énoncés ne la demande. Aucun ne porte non plus sur la " +
        "<strong>chaîne de mesure</strong> ni sur le rôle du capteur, qui sont pourtant les deux " +
        "premières définitions du cours. <strong>L'exemple résolu du capteur de luminosité, lui, " +
        "fait le travail complet</strong> : il calcule la pente, trouve l'ordonnée à l'origine, " +
        "puis vérifie sur le second point. C'est cet exemple qu'il faut prendre comme modèle de la " +
        "tâche attendue, et prévoir en complément une séance de TP où la classe construit " +
        "elle-même une courbe d'étalonnage, ce que le manuel ne fournit pas.<br/><br/>" +
        "Deux remarques de terrain. La première tient aux valeurs tirées : elles produisent des " +
        "températures <strong>invraisemblables</strong> pour le décor annoncé — un système de " +
        "climatisation à $160{,}6\\ °$C à l'exercice 2, une sonde de température corporelle à " +
        "$95\\ °$C à l'exercice 9. Plutôt qu'un défaut, en faire l'exercice que le chapitre ne " +
        "fournit pas : <strong>« cette valeur est-elle compatible avec le capteur décrit ? »</strong> " +
        "est exactement la compétence <em>valider</em>, et c'est précisément le geste qu'un " +
        "technicien fait devant un afficheur. L'exercice 10, qui donne $-15{,}4\\ °$C pour un " +
        "congélateur de laboratoire, est à l'inverse parfaitement réaliste et mérite d'être " +
        "signalé comme tel. La seconde remarque : la <strong>tension électrique $U$</strong>, " +
        "manipulée du début à la fin, n'est jamais définie ici — c'est un acquis de " +
        "<strong>quatrième</strong> et de <strong>troisième</strong>, et le chapitre suppose " +
        "qu'on sait ce qu'est un volt. Si la classe l'a perdu, le reprendre avant d'entrer dans " +
        "l'étalonnage : la colonne « S'appuie sur » ne peut pas le montrer, puisqu'un prérequis " +
        "ne vise qu'un chapitre du même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (oublier b, traiter l'affine comme une proportionnalité) est
     celle que le cours désigne dans son encadré « piège » ; l'erreur 2 est
     l'erreur de renversement du moule B, la plus coûteuse en points ;
     l'erreur 3 porte sur le calcul de la pente et n'a aucun support dans le
     tirage ; l'erreur 4 est la confusion entre la grandeur mesurée et le
     signal, qui est le contresens de fond du chapitre. */
  erreurs: [
    {
      titre: "Traiter la relation affine comme une proportionnalité",
      eleve: "Sachant qu'un capteur délivre $2$ V à $50\\ °$C, l'élève conclut qu'il délivrera " +
             "$4$ V à $100\\ °$C. Ou il calcule la pente en divisant simplement $U$ par $\\theta$ " +
             "sur un seul point, au lieu de passer par deux points.",
      cause: "Toute la scolarité antérieure a porté sur la <strong>proportionnalité</strong> : " +
             "produit en croix, quatrième proportionnelle, « si je double, ça double ». C'est " +
             "l'outil le plus sûr et le plus utilisé du collège, et rien dans l'énoncé " +
             "n'interdit de le sortir. Le terme $b$, lui, est nouveau et discret — un petit " +
             "nombre ajouté au bout d'une formule — alors qu'il change tout. L'élève applique " +
             "donc l'outil qui a fonctionné pendant quatre ans, ce qui est raisonnable.",
      remede: "Rendre le terme $b$ <strong>physique</strong> plutôt que mathématique, faute de " +
              "quoi il restera un détail d'écriture : $b$, c'est la tension que le capteur " +
              "délivre quand la grandeur mesurée vaut <strong>zéro</strong>. Un capteur de " +
              "luminosité qui sort $0{,}4$ V dans l'obscurité totale, c'est sa " +
              "<strong>tension de repos</strong>. Elle existe, elle se mesure, elle n'est pas une " +
              "commodité de calcul — et c'est elle qui interdit la proportionnalité.<br/><br/>" +
              "Faire ensuite la <strong>vérification qui tranche</strong>, en deux lignes et sans " +
              "discours : calculer $U$ pour $\\theta$, puis pour $2\\theta$, et constater que le " +
              "second n'est pas le double du premier. Avec $U = 0{,}017\\,\\theta + 0{,}29$, on " +
              "obtient $0{,}41$ V à $7\\ °$C et $0{,}53$ V à $14\\ °$C — soit un rapport de " +
              "$1{,}3$ et non de $2$. Le contre-exemple fait ce que la règle ne fait " +
              "pas.<br/><br/>" +
              "Installer enfin un <strong>réflexe de lecture</strong> avant tout calcul : " +
              "regarder si la relation comporte un terme constant. S'il y en a un, le produit en " +
              "croix est interdit, sans exception. Ce n'est le cas que si $b = 0$, et cela " +
              "s'énonce en une phrase : <strong>« pas de $b$, pas de produit en croix »</strong>.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 7) : l'exercice 1 donne
         U = 0,017*theta + 0,29 et theta = 7 °C, réponse 0,41 V. Le renvoi le
         choisit parmi les six du moule A pour une raison chiffrée : c'est le
         tirage où le terme b ÉCRASE le terme a*theta. Ici a*theta = 0,119 V
         contre b = 0,29 V — l'ordonnée à l'origine pèse plus du double du
         terme variable, si bien qu'un élève qui l'oublie annonce 0,12 V au
         lieu de 0,41 V, soit une erreur de plus de 70 %. Sur les autres
         tirages du moule (theta = 103, 3, 77, 95, 58 °C avec des pentes de
         0,027 à 0,048), le terme a*theta domine largement et l'oubli de b ne
         fausse le résultat que de 10 à 30 %, ce qui rend l'erreur beaucoup
         moins spectaculaire. Le tirage 1 est donc le seul où la
         proportionnalité fautive se disqualifie d'elle-même. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Diviser avant de soustraire en renversant la relation",
      eleve: "Pour $U = 0{,}016\\,\\theta + 1{,}33$ et une tension mesurée $U = 3{,}90$ V, l'élève " +
             "calcule $\\dfrac{3{,}90}{0{,}016} - 1{,}33 = 242{,}4\\ °$C au lieu de " +
             "$160{,}6\\ °$C : il a divisé d'abord, soustrait ensuite.",
      cause: "Renverser une relation affine demande de <strong>défaire deux opérations dans " +
             "l'ordre inverse</strong> de celui où elles ont été faites. Dans $U = a\\theta + b$, " +
             "on multiplie PUIS on ajoute ; pour revenir en arrière, il faut donc soustraire PUIS " +
             "diviser. Cet ordre inversé n'a rien d'évident, et l'élève applique spontanément " +
             "l'ordre de lecture de la formule, de gauche à droite. Ce n'est pas une faute de " +
             "calcul : c'est une <strong>faute de chronologie</strong>, et elle est très " +
             "courante.",
      remede: "Employer l'image des <strong>couches de vêtements</strong>, qui rend l'ordre " +
              "inverse évident : pour habiller $\\theta$, on lui a d'abord mis le pull " +
              "(multiplier par $a$), puis le manteau (ajouter $b$). Pour le déshabiller, on " +
              "enlève d'abord le manteau (<strong>soustraire $b$</strong>), puis le pull " +
              "(<strong>diviser par $a$</strong>). On n'enlève pas le pull avant le manteau, et " +
              "personne n'a besoin qu'on le lui explique.<br/><br/>" +
              "Faire ensuite écrire la formule renversée <strong>une fois pour toutes</strong>, " +
              "au tableau et dans le cahier, sous sa forme complète et parenthésée : " +
              "$\\theta = \\dfrac{U - b}{a}$. La barre de fraction fait ici tout le travail — " +
              "elle impose visuellement que la soustraction soit terminée avant que la division " +
              "commence. Un élève qui recopie cette forme ne peut plus intervertir ; un élève qui " +
              "reconstruit de tête, si.<br/><br/>" +
              "Imposer enfin la <strong>vérification par retour</strong>, qui est gratuite et ne " +
              "rate jamais cette erreur : remettre la valeur trouvée dans la relation de départ " +
              "et regarder si l'on retombe sur la tension mesurée. Avec $242{,}4$, on obtient " +
              "$0{,}016 \\times 242{,}4 + 1{,}33 = 5{,}21$ V, très loin des $3{,}90$ V " +
              "annoncés — l'erreur se voit sans correction. Avec $160{,}6$, on retombe sur " +
              "$3{,}90$ V.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         U = 0,016*theta + 1,33 et U mesurée = 3,90 V, réponse 160,6 °C. Le
         renvoi le choisit parmi les six du moule B pour une raison chiffrée :
         c'est le tirage où b est le PLUS GRAND en proportion de U (1,33 sur
         3,90, soit 34 % de la tension mesurée), donc celui où l'ordre des
         opérations pèse le plus lourd. L'erreur y produit 242,4 °C contre
         160,6 attendus, soit un écart de plus de 80 °C, immédiatement visible.
         Sur l'exercice 4 (b = 1,26 pour U = 1,32) l'écart serait
         spectaculaire mais sur une réponse minuscule (1,3 °C), ce qui brouille
         la lecture ; sur les exercices 6 et 8 (b = 0,64 et 0,49) le poids de b
         est faible et l'erreur reste modeste. Le tirage 2 porte en outre, dans
         sa réponse même, l'anomalie de plausibilité signalée dans la note
         — 160,6 °C pour une climatisation — ce qui permet de travailler les
         deux choses d'un même exercice. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Calculer la pente sans diviser par la variation de la grandeur",
      eleve: "Devant deux points d'étalonnage $(0\\ °$C ; $0{,}4$ V$)$ et $(80\\ °$C ; $2{,}0$ V$)$, " +
             "l'élève annonce $a = 1{,}6$ (il a soustrait les tensions et s'est arrêté), ou " +
             "$a = 2{,}0$ (il a lu la seconde ordonnée), au lieu de $0{,}02$ V/$°$C.",
      cause: "Le coefficient directeur est traité comme une <strong>valeur lue</strong> ou comme " +
             "une simple différence, alors que c'est un <strong>rapport de deux variations</strong>. " +
             "La difficulté est mathématique autant que physique : la pente est un objet encore " +
             "neuf, et le tableau d'étalonnage porte des nombres bien lisibles qui invitent à la " +
             "lecture directe. S'y ajoute que l'unité de $a$ — des volts PAR degré — est une " +
             "unité composée, et qu'on ne peut pas l'obtenir sans avoir divisé : l'élève qui " +
             "annonce $1{,}6$ ne peut lui donner aucune unité, et c'est le signe que l'opération " +
             "n'est pas terminée.",
      remede: "Faire toujours <strong>tracer le triangle</strong> entre les deux points " +
              "d'étalonnage, et l'annoter : la base horizontale est $\\Delta G$, la hauteur " +
              "verticale est $\\Delta U$, et $a = \\Delta U / \\Delta G$. Un triangle dessiné " +
              "empêche de confondre une ordonnée avec un rapport, et rend la division " +
              "visible.<br/><br/>" +
              "Utiliser ensuite l'<strong>unité comme contrôle</strong>, ce qui tranche à soi " +
              "seul : la pente d'un capteur de température s'exprime en <strong>V/°C</strong>, " +
              "c'est-à-dire « combien de volts gagne-t-on par degré ». Une réponse qui ne peut " +
              "recevoir aucune unité n'est pas une pente. Et le nombre obtenu doit pouvoir se " +
              "dire en français : « ce capteur gagne $0{,}02$ volt à chaque degré » — une phrase " +
              "qui a un sens là où « la pente vaut $1{,}6$ » n'en a aucun.<br/><br/>" +
              "Terminer enfin systématiquement par la <strong>vérification sur le second " +
              "point</strong>, exactement comme le fait l'exemple résolu du cours : une fois $a$ " +
              "et $b$ trouvés, on recalcule $U$ pour le second couple de valeurs et on vérifie " +
              "qu'on retombe dessus. C'est le geste qui distingue un résultat trouvé d'un " +
              "résultat vérifié, et il ne coûte que deux lignes.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : AUCUN des quarante-deux énoncés ne demande de DÉTERMINER une
         relation d'étalonnage. Les deux moules la donnent tout écrite dans le
         texte de l'énoncé (« un capteur suit la relation d'étalonnage
         U = 0,017 theta + 0,29 »), et ne demandent que de l'appliquer dans un
         sens ou dans l'autre. Aucun énoncé ne fournit deux points de mesure,
         aucun ne fournit de tableau ni de courbe d'étalonnage. Le calcul de
         pente, pourtant deuxième étape de la méthode du cours, objet de son
         exemple résolu et cœur du deuxième attendu officiel, n'a donc aucun
         support dans les exercices — c'est le manque le plus lourd de ce
         chapitre. Pointer un exercice qui applique une pente donnée pour
         remédier à une erreur de CALCUL de pente serait un renvoi faux, ce que
         le projet tient pour pire qu'un renvoi absent. La remédiation se fait
         sur l'exemple résolu du cours, puis en TP, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Confondre la grandeur mesurée et le signal délivré",
      eleve: "L'élève annonce que « le capteur mesure des volts », ou écrit sa réponse en volts " +
             "quand on demandait une température. Devant la question « que fait un capteur ? », " +
             "il répond qu'« il affiche la température ».",
      cause: "Dans la vie courante, le capteur et l'afficheur ne font qu'un : un thermomètre " +
             "numérique montre des degrés, et rien ne laisse deviner qu'une tension a circulé " +
             "entre les deux. La <strong>chaîne de mesure est invisible parce qu'elle est " +
             "encapsulée</strong> dans l'objet. L'élève décrit donc exactement ce qu'il observe, " +
             "et ce qu'il observe est le résultat final, pas le mécanisme. Rien dans son " +
             "expérience ne suggère qu'il y a plusieurs étapes.",
      remede: "Faire <strong>dessiner la chaîne</strong> en trois cases reliées par des flèches, " +
              "et l'exiger à chaque exercice : <strong>grandeur physique</strong> " +
              "$\\rightarrow$ <strong>capteur</strong> $\\rightarrow$ <strong>signal " +
              "électrique</strong>. Trois cases, trois natures différentes. La grandeur d'entrée " +
              "est une température en $°$C ; la sortie est une tension en V ; le capteur est le " +
              "traducteur entre les deux, et un traducteur ne parle pas la même langue des deux " +
              "côtés.<br/><br/>" +
              "Démonter ensuite l'objet du quotidien, au moins en pensée : dans un thermomètre " +
              "numérique, il y a un capteur QUI DÉLIVRE UNE TENSION, puis un circuit qui applique " +
              "la relation d'étalonnage <strong>à l'envers</strong> pour retrouver la " +
              "température, puis un afficheur. L'afficheur montre des degrés parce qu'un calcul a " +
              "été fait, pas parce que le capteur en produisait.<br/><br/>" +
              "Imposer enfin, à chaque réponse, la question <strong>« quelle unité " +
              "attend-on ? »</strong> lue dans l'énoncé avant de commencer. Une réponse en volts " +
              "à une question posée en degrés n'est pas fausse par erreur de calcul : elle " +
              "répond à l'autre bout de la chaîne. Ce test attrape l'erreur sans rien " +
              "comprendre, et il attrape gratuitement la confusion des deux moules du chapitre.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 et vérifiée sur
         le même tirage : les quarante-deux énoncés ne posent AUCUNE question
         sur le rôle du capteur ni sur la chaîne de mesure. Les définitions D1,
         D2 et D3 du cours (signal, capteur, chaîne de mesure) n'ont aucun
         support dans les exercices, qui sont tous des applications numériques
         d'une relation donnée. Il faut ajouter que les deux moules, en
         alternant strictement le sens direct et le sens inverse, EXPOSENT
         l'élève à la confusion des deux bouts de la chaîne sans jamais la
         nommer ni la travailler : c'est le lecteur de l'énoncé qui doit
         décider, à chaque exercice, s'il part de theta ou de U. Un exercice
         qui exige implicitement la distinction ne l'enseigne pas pour autant,
         et pointer l'un d'eux enverrait l'enseignant vers une fausse
         remédiation. Le travail est au tableau, sur le schéma en trois cases,
         et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — deux points d'étalonnage $(0\ °$C ; $0{,}4$ V$)$ et
          $(80\ °$C ; $2{,}0$ V$)$, calculer la pente $a$. C'est la SEULE
          question du chapitre, exercices compris, qui demande de déterminer un
          coefficient directeur à partir de mesures : il faut choisir la
          relation, repérer quelles différences prendre et dans quel ordre, et
          seulement ensuite calculer. C'est un choix de méthode, donc
          « analyser ». C'est aussi l'erreur 3 de cette fiche.
     Q2 — « dans une chaîne de mesure, le rôle du capteur est de : … ». Pure
          restitution de la définition D2 du cours : « s'approprier ».
     Q3 — $U = 0{,}015\,\theta + 0{,}2$, calculer $U$ pour $\theta = 60\ °$C.
          Relation donnée, sens direct, une multiplication et une addition :
          « réaliser ».
     Q4 — $U = 0{,}02\,G + 0{,}5$ et $U = 1{,}7$ V, calculer $G$. Ici la
          relation doit être RENVERSÉE avant d'être utilisée, dans le bon ordre
          d'opérations — c'est exactement l'erreur 2 de cette fiche, et c'est
          un choix de méthode avant d'être un calcul : « analyser ».
     Q5 — avec $b \neq 0$, doubler $G$ double-t-il $U$ ? Le distracteur
          « double toujours exactement » est exactement l'erreur 1 de cette
          fiche. Il faut juger la validité d'une affirmation sur une variation,
          sans aucun calcul à mener : « valider ».

     « Analyser » est donc mobilisé DEUX fois (Q1 et Q4), ce qui est cohérent
     avec un chapitre dont les deux difficultés réelles sont la détermination
     et le renversement d'une relation affine — deux gestes qui exigent de
     choisir une méthode avant d'exécuter. « Communiquer » n'est PAS mobilisé,
     et ce n'est pas un oubli : aucune des cinq questions ne demande de
     produire une explication rédigée — les deux types disponibles dans le
     corpus (`numeric` et `multiple-choice`) ne le permettent pas. */
  competences: {
    evaluation: ["analyser", "s'approprier", "réaliser", "analyser", "valider"]
  }
};
