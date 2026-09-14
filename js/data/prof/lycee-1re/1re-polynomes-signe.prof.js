/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-polynomes-signe.prof.js
   Fiche professeur du chapitre « Signe d'un trinôme du second degré »
   (première), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote de la première
   (1re-derivation.prof.js), conventions et commentaires compris.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-polynomes-signe"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE. Le chapitre visé doit avoir un
     rang conseillé STRICTEMENT INFÉRIEUR à celui du chapitre courant (rang 4),
     sinon la validation échoue.

     ATTENTION, PIÈGE VÉRIFIÉ LE 2026-09-14 : la numérotation des chapitres du
     livre vient de l'ordre de `DATA_FILES` dans js/loader.js, et NON de
     l'ordre alphabétique des fichiers. Le second degré est le chapitre 4 du
     livre, et non le chapitre 7. Une première version de cette fiche déclarait
     [7], c'est-à-dire la géométrie repérée, dont ce chapitre n'a aucun besoin.
     Le test scripts/manuel/tests/renvois-1re.test.js a trouvé l'erreur.

     ch. 4 (second degré, rang conseillé 3) : prérequis absolu, et le plus
     immédiatement mobilisé de tout le niveau. Ce chapitre ne fait RIEN d'autre
     que reprendre le trinôme là où le précédent l'a laissé : celui-ci trouve
     les racines, celui-là lit le signe entre elles et hors d'elles. Sans
     discriminant ni racines, il n'y a même pas de tableau à dresser.

     La dérivation (ch. 1) serait un contresens de progression — elle est au
     rang 6, donc APRÈS ce chapitre, et c'est elle qui a besoin de lui, non
     l'inverse. Le déclarer ferait d'ailleurs échouer la validation. */
  prerequis: [4],

  /* Rang conseillé (2026-09-14) : rang 4.

     Le LIVRE range ce chapitre en quatrième position, et pour une fois le
     rangement du livre et le conseil d'enseignement coïncident presque : le
     chapitre vient juste après le second degré (rang 3), dont il est la suite
     immédiate.

     Le placer ailleurs n'aurait pas de sens. Trop tôt, l'élève n'a pas de
     racines à mettre dans son tableau ; trop tard, la dérivation (rang 6)
     arrive sans l'outil dans lequel le signe de $f'$ doit se déverser. Ces
     deux chapitres consécutifs — le 7 puis le 4 du livre — forment en réalité
     un seul bloc, et il est utile de le dire aux élèves. */
  rangConseille: 4,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Algèbre », sous-partie « Signe du trinôme,
  // inéquations du second degré ».
  attendus: [
    "Déterminer le signe d'un trinôme du second degré à partir du signe de $a$ et de celui du discriminant",
    "Dresser le tableau de signe d'un trinôme, en y plaçant correctement les racines",
    "Résoudre une inéquation du second degré et exprimer l'ensemble solution en intervalles",
    "Traiter le cas d'un discriminant négatif, où le signe est constant sur $\\mathbb{R}$",
    "Dresser le tableau de signe d'un produit de deux facteurs du premier degré",
    "Interpréter un intervalle solution dans un contexte concret, par exemple un seuil de rentabilité"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Le signe du trinôme, le tableau de signe et les inéquations du second degré sont tous au " +
        "programme de première.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>continuité</strong>. La raison profonde pour laquelle un trinôme ne change " +
        "de signe qu'en ses racines est qu'une fonction continue ne peut pas passer du positif au " +
        "négatif sans s'annuler. Ce théorème — celui des valeurs intermédiaires — relève de la " +
        "terminale. Le schéma « Le tableau de signe est la courbe recopiée ligne par ligne » et sa " +
        "note finale disent l'argument en français, sans le nommer, et c'est le bon niveau de " +
        "traitement ici : l'élève doit comprendre pourquoi une case du tableau porte un seul signe, " +
        "pas démontrer le théorème.<br/><br/>" +
        "Ensuite le <strong>produit de deux facteurs du premier degré</strong>, qu'une des sept tâches " +
        "de la banque demande de traiter. C'est bien au programme, mais l'ordre d'exposition varie " +
        "selon les manuels : certains l'abordent avant le trinôme, comme cas simple, d'autres après, " +
        "comme application. Si la classe n'a pas encore vu le tableau de signe d'un produit, la tâche " +
        "reste faisable — chaque facteur change de signe une fois, et la règle des signes fait le " +
        "reste — mais elle demande alors une mise en route explicite.<br/><br/>" +
        "Enfin les <strong>bornes ouvertes ou fermées</strong>. Le chapitre manipule à la fois des " +
        "inégalités strictes et larges, et les crochets qui vont avec. Ce n'est pas une subtilité " +
        "d'écriture : dans la tâche qui fait compter les entiers d'un intervalle solution, la réponse " +
        "change si l'élève inclut les racines. Ce point mérite une minute explicite, sans quoi la " +
        "faute sera attribuée au tableau de signe alors qu'elle vient des crochets.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre
       (2026-09-14), APRÈS l'élargissement de la banque : un renvoi écrit
       contre l'ancien tirage aurait été décalé par les nouveaux rangs. */
  erreurs: [
    {
      titre: "Appliquer « négatif entre les racines » sans regarder le signe de $a$",
      eleve: "Pour $-x^2 + 9$, de racines $-3$ et $3$, l'élève annonce que le trinôme est négatif " +
             "entre $-3$ et $3$, alors qu'il y est positif — en $x = 0$, il vaut $9$.",
      cause: "La phrase « négatif entre les racines » est vraie, mais seulement quand $a > 0$ — et " +
             "tous les premiers exemples rencontrés ont $a > 0$, parce que $x^2$ y apparaît sans " +
             "coefficient. L'élève a donc mémorisé une règle générale à partir d'une collection de " +
             "cas particuliers, ce qui est un raisonnement normal et ici trompeur.<br/><br/>" +
             "Plus profondément, l'élève retient une <strong>phrase</strong> au lieu d'une " +
             "<strong>image</strong>. Qui se représente la parabole n'a aucune règle à retenir : il " +
             "voit où elle passe sous l'axe. Qui récite la phrase n'a aucun moyen interne de " +
             "s'apercevoir qu'elle ne s'applique pas.",
      remede: "Ne pas ajouter une seconde phrase — « et si $a$ est négatif, c'est l'inverse » — qui " +
              "doublerait simplement la charge à mémoriser, et qu'il faudrait à son tour se rappeler " +
              "d'appliquer.<br/><br/>" +
              "Remplacer la phrase par un <strong>geste de la main</strong> : dessiner en l'air " +
              "l'orientation de la parabole avant d'écrire quoi que ce soit. Vers le haut si $a$ est " +
              "positif, vers le bas sinon. L'élève qui fait ce geste lit ensuite le signe sur sa " +
              "propre main, sans règle intermédiaire.<br/><br/>" +
              "Appuyer sur le schéma du cours « Comparer le signe d'un trinôme selon $a>0$ ou $a<0$ », " +
              "qui montre les deux cas côte à côte avec les zones coloriées, puis sur le schéma " +
              "secondaire « Le tableau de signe est la courbe recopiée ligne par ligne » : on y voit " +
              "que la bande de signes n'est pas une convention à apprendre, c'est la courbe " +
              "elle-même, résumée.<br/><br/>" +
              "Imposer enfin, pendant deux séances, d'écrire le signe de $a$ <strong>en premier, " +
              "entouré</strong>, avant la moindre racine. Un élève qui a écrit « $a = -1 < 0$ » en " +
              "haut de sa copie ne récite plus la phrase par défaut : il a sous les yeux la raison de " +
              "ne pas le faire.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), dans l'ORDRE DES
         CHAPITRES DE `DATA_FILES` et non dans l'ordre alphabétique du dossier :
         ce chapitre est le 5 du livre, donc sa graine est 20260816+4, et le
         tirage n'est pas celui qu'on obtient en classant les fichiers par nom.
         Un premier jeu de renvois écrit contre le tirage alphabétique était
         entièrement décalé.

         L'exercice 11 porte sur $P(x) = -x^2 + 9$, avec $a = -1 < 0$, et donne
         les racines $-3$ et $3$ : la seule difficulté restante est précisément
         le sens de lecture. Un élève qui récite « négatif entre les racines »
         répond à côté de façon nette et repérable, puisque la question porte
         sur l'intervalle où le trinôme est POSITIF. */
      exercice: { type: "exercice", n: 11 }
    },
    {
      titre: "Conclure qu'un trinôme sans racine n'a pas de signe",
      eleve: "Pour $-2x^2 + 4x - 6$, l'élève calcule $\\Delta = -32$, écrit « pas de solution » et " +
             "laisse la question du signe sans réponse — ou répond que le signe est « impossible à " +
             "déterminer », alors que ce trinôme est négatif sur $\\mathbb{R}$ tout entier.",
      cause: "L'élève confond deux questions qui portent sur le même objet : « où le trinôme " +
             "s'annule-t-il ? » et « quel est son signe ? ». Le chapitre précédent n'a traité que la " +
             "première, et il a installé l'équation $\\Delta < 0 \\Rightarrow$ « rien ». Ce " +
             "« rien » est correct pour les racines et se reporte abusivement sur le signe.<br/><br/>" +
             "Le tableau de signe renforce la confusion par sa forme même : un tableau, pour l'élève, " +
             "sert à ranger des changements. S'il n'y a aucune racine, il n'y a rien à ranger, donc " +
             "aucun tableau, donc — croit-il — aucune réponse. Le cas le plus simple du chapitre lui " +
             "paraît ainsi le plus insoluble.",
      remede: "Renverser l'ordre habituel et traiter ce cas en PREMIER, avant les trinômes à deux " +
              "racines, plutôt qu'en dernier comme un cas résiduel.<br/><br/>" +
              "Partir du schéma « Un discriminant négatif ne veut pas dire rien à dire », qui montre " +
              "deux paraboles sans racine, l'une entièrement au-dessus de sa ligne, l'autre " +
              "entièrement en dessous. Demander à l'élève de désigner un endroit où la première " +
              "courbe serait négative : il n'y en a pas, et c'est lui qui le constate.<br/><br/>" +
              "Faire remarquer que les deux paraboles du schéma ont exactement le <strong>même</strong> " +
              "discriminant, $-12$. Ce n'est donc pas lui qui décide du signe : il décide seulement " +
              "qu'il n'y a pas de <strong>changement</strong> de signe. Une fois cette phrase posée, " +
              "l'élève cherche de lui-même ce qui décide du signe, et il ne reste que $a$.<br/><br/>" +
              "Reformuler enfin la règle sous une forme qui contienne sa propre justification : " +
              "« sans racine, la courbe ne traverse jamais l'axe, donc elle reste du côté où elle a " +
              "commencé — et le côté où elle finit est celui que donne le signe de $a$ ».",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 6 porte sur $-2x^2 + 4x - 6$, de discriminant $-32$, et
         demande explicitement le SIGNE après avoir fait constater que le
         discriminant est négatif. La question ne peut pas se répondre par
         « pas de solution » : elle réclame $1$ ou $-1$, donc un signe.

         On préfère le 6 au 8 ($x^2 - 2x + 5$, où $a > 0$) parce que son $a$
         est négatif : l'élève qui répondrait « positif » par défaut, sans
         regarder $a$, se trompe, alors que sur le 8 il tomberait juste sans
         avoir raisonné. C'est la tâche « constant », ajoutée le 2026-09-14 :
         la banque d'origine ne tirait jamais de discriminant négatif. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Dresser le tableau de signe avant d'avoir ramené l'inéquation à zéro",
      eleve: "Pour résoudre $x^2 + 4x + 9 > 6$, l'élève cherche les racines de $x^2 + 4x + 9$, ne " +
             "trouve rien ($\\Delta = -20$), et conclut que l'inéquation n'a pas de solution — alors " +
             "qu'après transposition, $x^2 + 4x + 3 > 0$ a pour discriminant $4$ et deux racines.",
      cause: "C'est le prolongement direct de l'erreur du chapitre précédent, et elle est ici plus " +
             "coûteuse : la réponse obtenue est non seulement fausse, elle est " +
             "<strong>plausible</strong>. L'élève trouve un discriminant négatif, ce qui est exact " +
             "pour le trinôme qu'il a écrit, et l'absence de solution lui semble cohérente. Rien ne " +
             "l'alerte.<br/><br/>" +
             "Le mécanisme est le même : un outil dont la condition d'emploi — être comparé à zéro — " +
             "n'a jamais été rendue visible, appliqué dès que son gabarit est reconnu. La différence " +
             "est que le second membre non nul se voit encore moins dans une inéquation, où " +
             "l'attention de l'élève est absorbée par le sens de l'inégalité.",
      remede: "Traiter la transposition comme une étape à part entière, avec sa propre ligne, et non " +
              "comme un préliminaire qu'on ferait de tête.<br/><br/>" +
              "Faire calculer les deux discriminants côte à côte sur un même exemple : celui de " +
              "$x^2 + 4x + 9$, qui vaut $-20$, et celui de $x^2 + 4x + 3$ obtenu après soustraction " +
              "de $5$, qui vaut $4$. Deux nombres de signes opposés pour ce que l'élève croit être la " +
              "même question. C'est cet écart, et non un rappel de règle, qui installe " +
              "l'étape.<br/><br/>" +
              "Imposer ensuite le même rituel qu'au chapitre du second degré : entourer le zéro du " +
              "membre de droite avant d'écrire la moindre racine. Pas de zéro entouré, pas de tableau " +
              "de signe.<br/><br/>" +
              "Prévenir enfin d'un piège de signe qui apparaît quand on déplace un terme dans une " +
              "inéquation : déplacer ne change jamais le sens de l'inégalité, seule la multiplication " +
              "ou la division par un nombre négatif le change. Les deux opérations sont souvent " +
              "confondues à ce moment précis du programme.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 1 est exactement l'énoncé décrit — « Résoudre l'inéquation
         $x^2 + 4x + 9 > 6$ » — et son corrigé commence par la ligne de
         transposition, qui fait apparaître $x^2 + 4x + 3 > 0$. Le contraste y
         est maximal : le trinôme de gauche a un discriminant négatif
         ($16 - 36 = -20$), celui d'après transposition un discriminant positif
         ($16 - 12 = 4$). Un élève qui saute l'étape conclut donc « pas de
         solution » sur une inéquation qui en a.

         L'exercice 10, sur $2x^2 - 4x + 3 > 9$, est son jumeau. C'est la tâche
         « transposer », ajoutée le 2026-09-14 : la banque d'origine donnait
         toujours le trinôme déjà isolé, et fournissait même ses racines. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Écrire une réunion de deux intervalles comme s'il n'y en avait qu'un",
      eleve: "Pour $f(x) > 0$ avec $a > 0$ et des racines $-1$ et $3$, l'élève écrit " +
             "$]-\\infty\\,;\\,-1[ \\cup ]3\\,;\\,+\\infty[$ sous la forme $]-1\\,;\\,3[$ avec les " +
             "crochets retournés, ou bien $]-\\infty\\,;\\,3[$, en gardant une seule borne.",
      cause: "L'élève a correctement déterminé le signe : ce n'est pas le tableau qui est en cause, " +
             "c'est son passage à l'écriture. Il cherche à produire un objet de la forme « un " +
             "intervalle », parce que c'est la seule forme de réponse qu'il ait jamais eu à écrire, " +
             "et il force le résultat dans ce moule.<br/><br/>" +
             "Le symbole $\\cup$ n'aide pas : il ressemble à un ornement de notation plus qu'à une " +
             "information. Beaucoup d'élèves le lisent comme un « et » de liaison, alors qu'il dit " +
             "quelque chose de fort — que l'ensemble a deux morceaux séparés, et qu'aucun nombre " +
             "entre les deux n'y appartient.",
      remede: "Faire dessiner l'ensemble solution sur une droite numérique <strong>avant</strong> de " +
              "l'écrire en intervalles. Un élève qui a colorié deux morceaux séparés ne peut pas " +
              "ensuite en écrire un seul sans voir qu'il perd la moitié de son dessin.<br/><br/>" +
              "Utiliser le schéma « Changer le sens de l'inégalité change la forme de la réponse », " +
              "qui superpose les deux cas sur deux droites numériques identiques : en haut deux " +
              "segments qui s'éloignent vers les bords, en bas un seul segment coincé entre les " +
              "racines. Les racines sont aux mêmes endroits sur les deux lignes — seule la " +
              "disposition des morceaux change.<br/><br/>" +
              "Poser ensuite un test de relecture que l'élève peut mener seul : choisir un nombre " +
              "franchement à l'extérieur, comme $100$, et un nombre entre les racines, comme $0$, " +
              "puis vérifier que l'ensemble écrit contient bien le premier et pas le second. Une " +
              "réponse à un seul intervalle échoue à ce test en deux secondes.<br/><br/>" +
              "Lire enfin $\\cup$ à voix haute comme « ou » et non comme « et » : $x$ est solution " +
              "s'il est <strong>ou bien</strong> avant $-1$, <strong>ou bien</strong> après $3$.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 4 porte sur $2x^2 - 8$, de racines $-2$ et $2$, et demande
         de compter les ENTIERS de l'ensemble solution de $f(x) < 0$. C'est le
         bon angle de revers : un élève qui se trompe de côté du tableau
         obtiendrait une infinité d'entiers, donc aucun nombre à rendre, et il
         s'en aperçoit seul. La question force en outre à lire les DEUX bornes,
         là où la tâche d'origine n'en demandait qu'une. C'est la tâche
         « entiers », ajoutée le 2026-09-14. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Traiter le tableau de signe d'un produit en multipliant les racines",
      eleve: "Pour $(4x + 8)(3x - 12)$, l'élève développe d'abord en $12x^2 - 48x + 24x - 96$, puis " +
             "calcule un discriminant sur l'expression développée — souvent avec une erreur au " +
             "passage — au lieu de lire directement les racines $-2$ et $4$ sur les deux facteurs.",
      cause: "Ce n'est pas une faute de raisonnement : le chemin choisi est valide, seulement long et " +
             "fragile. L'élève le prend parce que le chapitre lui a appris une méthode — calculer " +
             "$\\Delta$ — et qu'il ne dispose d'aucun signal lui disant qu'une expression déjà " +
             "factorisée n'en a pas besoin.<br/><br/>" +
             "Il y a là un renversement d'habitude difficile : depuis le collège, développer est le " +
             "geste par défaut, celui qui « simplifie ». Ici, la forme factorisée est la forme " +
             "<strong>utile</strong>, et développer revient à détruire l'information qu'on cherche. " +
             "Personne ne le lui a encore dit dans ces termes.",
      remede: "Faire d'abord constater, sur un exemple, que les deux chemins donnent le même résultat " +
              "— sinon l'élève croira qu'on lui interdit une méthode juste.<br/><br/>" +
              "Poser ensuite la question qui déplace l'habitude : « à quelle condition un produit " +
              "est-il nul ? ». L'élève sait répondre depuis la classe de troisième : quand l'un des " +
              "facteurs l'est. Les racines se lisent donc directement, un facteur à la fois, sans " +
              "aucun discriminant.<br/><br/>" +
              "Étendre alors la même idée au signe, qui est l'objet du chapitre : chaque facteur du " +
              "premier degré change de signe une seule fois, à l'endroit où il s'annule, et la règle " +
              "des signes fait le reste. Le tableau à deux lignes plus une ligne de produit rend le " +
              "raisonnement visible ligne par ligne.<br/><br/>" +
              "Installer enfin un réflexe de tri en début d'exercice : « est-ce que mon expression " +
              "est déjà factorisée ? ». Si oui, ne rien développer. Ce réflexe resservira en " +
              "terminale, où l'on factorise justement pour étudier un signe.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         les exercices 7 et 9 portent tous deux sur un produit de deux facteurs
         du premier degré, $(4x+8)(3x-12)$ et $(4x+4)(x-3)$, et leur corrigé
         lit les racines facteur par facteur sans jamais développer. C'est la
         tâche « produit », ajoutée le 2026-09-14 : elle n'existait pas dans la
         banque d'origine, qui ne travaillait que des trinômes développés.
         On renvoie au 7, le premier des deux, dont les deux coefficients sont
         différents de $1$ — développer y est donc nettement plus coûteux que
         lire, ce qui rend l'argument du remède visible. */
      exercice: { type: "exercice", n: 7 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     L'évaluation porte bien CINQ questions pour un total de DIX points
     (2 points chacune), vérifié sur le tirage réel le 2026-09-14 : aucune
     correction n'a été nécessaire de ce côté.

     Q1 signe de $x^2 - 4x - 5$ sur un intervalle, racines données : l'élève
        part d'une propriété du coefficient $a$ et en déduit une position
        relative, sans calculer la moindre image. La chaîne « $a > 0$, donc
        parabole vers le haut, donc négative entre les racines » est une
        déduction, pas un calcul : c'est « raisonner ».
     Q2 même exercice avec $a = -2 < 0$ : l'élève doit refaire la déduction
        en sens inverse, et c'est précisément ce que la question teste — la
        capacité à ne PAS appliquer la règle du cas précédent. C'est encore
        « raisonner », et les deux questions se répondent l'une l'autre : ce
        doublon est voulu, il isole l'unique variable qui change.
     Q3 résoudre $x^2 + 3x + 5 > 0$ : le discriminant doit être calculé
        ($\Delta = -11$) avant toute conclusion. C'est la seule question de
        l'évaluation où un calcul numérique conditionne la réponse, donc
        « calculer ».
     Q4 calculer le discriminant de $2x^2 - 10x + 12$ : application directe de
        la formule, donc « calculer ».
     Q5 trouver la valeur qui annule $-x^2 + 6x - 9$, sachant que le trinôme
        est négatif ou nul partout : l'élève doit comprendre que cette
        information signifie un discriminant nul, donc une racine double, et
        remonter de là à $x_0 = -\dfrac{b}{2a}$. Il part d'une propriété de
        signe pour conclure à une propriété de racine : c'est « raisonner ».

     « Chercher », « modéliser », « représenter » et « communiquer » ne sont pas
     déclarées ici : aucune des cinq questions ne demande d'explorer une piste
     sans méthode donnée, de traduire une situation concrète, de changer de
     registre d'écriture, ni de rédiger une explication — trois des cinq
     questions sont à choix multiples. Ces compétences sont portées par
     d'autres chapitres du niveau, où les énoncés ont été écrits pour cela.

     C'EST LE POINT DONT JE SUIS LE MOINS SATISFAIT sur ce chapitre, et je le
     signale plutôt que de le maquiller. « Représenter » est la compétence
     naturelle d'un chapitre dont l'objet même est un tableau de signe lu sur
     une courbe, et l'évaluation ne la mobilise nulle part : aucune question ne
     demande de lire un signe sur un graphique ni de passer de la courbe au
     tableau. Y remédier demanderait de RÉÉCRIRE une question autour d'une
     figure, pas de renommer une étiquette. L'évaluation étant déjà conforme
     (cinq questions, dix points), je ne l'ai pas fait de ma propre initiative. */
  competences: {
    evaluation: ["raisonner", "raisonner", "calculer", "communiquer", "raisonner"]
  }
};
