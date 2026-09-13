/* =========================================================
   Spark Learning – js/data/prof/3e/3e-fonctions-affines.prof.js
   Fiche professeur du chapitre « Fonctions affines et linéaires » (troisième),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 3e-thales.prof.js.

   CE QUE CE CHAPITRE JOUE VRAIMENT. En apparence, il ajoute deux mots de
   vocabulaire — coefficient directeur, ordonnée à l'origine — à un objet déjà
   connu. En réalité il opère une soudure que toute la suite de la scolarité
   suppose acquise : il identifie une ÉCRITURE ($ax + b$), une SITUATION (un
   rythme constant à partir d'une valeur de départ) et un DESSIN (une droite).
   Un élève qui sait calculer $f(5)$ mais qui ne voit pas que le $b$ de
   l'écriture est la hauteur du point de départ sur le dessin n'a pas fait le
   chapitre : il a fait le précédent une seconde fois.

   La quasi-totalité des erreurs ci-dessous naissent de cette soudure
   manquante, pas d'une faiblesse de calcul. C'est pourquoi presque tous les
   remèdes proposés font circuler l'élève entre les trois registres plutôt que
   de le faire recalculer.

   ATTENTION, POINT DE VIGILANCE MAJEUR SUR CE CHAPITRE. Sa banque d'exercices
   ne contient qu'UNE seule tâche — « on donne la valeur de départ et le tarif
   unitaire, calcule le prix pour x unités » — habillée de six décors
   différents (taxi, salle de sport, vélos, poterie, transporteur, étang).
   Vérifié le 2026-09-13 sur le tirage réel de la graine du livre : les douze
   exercices tirés ont tous la même solution à trois lignes près. Aucun ne
   demande de tracer, aucun ne demande de lire un graphique, aucun ne compare
   deux tarifs, aucun ne part de deux points. Trois des cinq remédiations
   ci-dessous sont donc SANS RENVOI, et le disent. Ce n'est pas une négligence :
   c'est le constat honnête d'une banque à élargir, et l'enseignant doit le
   savoir avant de préparer sa séance de remédiation.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-fonctions-affines"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 7 (fonctions – notions de base) : prérequis absolu et unique. Une
     fonction affine EST une fonction ; tout le vocabulaire de ce chapitre —
     image, antécédent, notation $f(x)$, courbe représentative — est supposé
     acquis dès la première ligne. Traiter les affines avant les fonctions
     revient à enseigner un cas particulier d'un objet inconnu, et produit
     invariablement des élèves qui manipulent $ax + b$ sans savoir ce que $f$
     désigne.

     Le chapitre sur les équations n'est PAS listé, bien qu'il soit mobilisé
     dans les problèmes de comparaison de tarifs ($2x + 4 = 3x$). La raison est
     qu'il est déjà prérequis du chapitre 7 : la chaîne équations → fonctions →
     affines le rend disponible sans qu'on ait à le répéter ici. */
  prerequis: [7],

  /* Rang conseillé (2026-09-13) : rang 6, immédiatement après les fonctions
     (rang 5). Le mot « immédiatement » est important et mérite d'être défendu :
     l'enchaînement gagne beaucoup à être serré, parce que les deux chapitres
     partagent leur vocabulaire et que les affines donnent enfin aux fonctions
     des exemples qu'on peut dessiner. Un élève qui découvre la notion abstraite
     en octobre et son premier exemple manipulable en février a oublié la
     première.

     Il vient aussi après les équations (rang 3), dont il a besoin dès que deux
     tarifs se comparent — la situation la plus fréquente du chapitre.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 6,

  /* Attendus de fin d'année de troisième (programme du cycle 4, 2020),
     domaine « Organisation et gestion de données, fonctions ».

     Les deux derniers sont rédigés en termes de SORTIE de cycle, parce qu'ils
     seront lus par la seconde : le lycée ouvre sur l'étude des variations et la
     résolution graphique en supposant ces deux points acquis, et ne les
     réenseigne pas. */
  attendus: [
    "Reconnaître et utiliser une fonction affine, une fonction linéaire, et identifier le cas de la proportionnalité",
    "Déterminer une fonction affine à partir de deux nombres et de leurs images, ou à partir d'un graphique",
    "Représenter graphiquement une fonction affine, et interpréter le coefficient directeur comme un taux d'accroissement",
    "Modéliser une situation de rythme constant par une fonction affine, puis comparer deux tarifs par le calcul ou par lecture graphique",
    "Passer sans hésitation de l'écriture $f(x) = ax + b$ à la droite qui la représente, et inversement lire $a$ et $b$ sur un graphique — c'est ce que la seconde mobilise dès les premières semaines, sans le réenseigner"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Les fonctions affines et linéaires sont au cœur du programme de troisième, " +
        "avec leur représentation graphique par une droite, la lecture et l'interprétation " +
        "de $a$ et de $b$, et le lien entre fonction linéaire et proportionnalité. Rien " +
        "d'essentiel dans ce chapitre ne sort de l'année.<br/><br/>" +
        "Deux points appellent cependant une mise au point, car ils touchent au vocabulaire " +
        "plutôt qu'aux techniques.<br/><br/>" +
        "D'abord la formule $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$, donnée dans la méthode " +
        "et évaluée. Elle est bien exigible en troisième pour <strong>déterminer</strong> une " +
        "fonction affine à partir de deux images. Ce qui ne l'est pas, c'est de la nommer " +
        "<strong>taux d'accroissement</strong> et d'en faire une notion autonome : cette " +
        "lecture appartient à la seconde, où elle prépare la dérivation. On l'utilise donc " +
        "comme un moyen de trouver $a$, et non comme un objet d'étude.<br/><br/>" +
        "Ensuite le critère « deux droites de même $a$ sont <strong>parallèles</strong> », " +
        "présent dans le récapitulatif et dans le quiz. Il est parfaitement légitime et très " +
        "utile en troisième. Sa réciproque et surtout la condition de " +
        "<strong>perpendicularité</strong> ($aa' = -1$) relèvent en revanche du lycée : ne " +
        "pas les introduire, même en réponse à une question d'élève curieux — ou alors " +
        "explicitement comme une ouverture, hors évaluation.<br/><br/>" +
        "Un dernier mot sur la <strong>résolution graphique</strong> des comparaisons de " +
        "tarifs. Lire le point d'intersection de deux droites pour trouver le seuil de " +
        "rentabilité est au programme et doit être travaillé. En revanche, la rédaction par " +
        "intervalles de solutions (« pour tout $x > 20$, … ») relève de la seconde : en " +
        "troisième, on conclut en français, « au-delà de $20$ DVD, la formule A est plus " +
        "avantageuse ».",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     TROIS D'ENTRE ELLES SONT SANS RENVOI, et c'est le fait marquant de cette
     fiche. La banque du chapitre ne contient qu'une seule tâche calculatoire
     (voir l'en-tête du fichier) : elle ne fait ni tracer, ni lire un
     graphique, ni partir de deux points. Les erreurs qui portent sur ces
     gestes n'ont donc aucun support d'entraînement dans le livre, et chaque
     remède le dit explicitement en indiquant où trouver la remédiation utile.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les deux renvois ci-dessous
       ont été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Confondre le coefficient directeur et l'ordonnée à l'origine",
      eleve: "Pour $g(x) = -2x + 11$, on demande l'ordonnée à l'origine et l'élève répond " +
             "$-2$. Dans une situation de tarif — « $8$ € par mois plus $0{,}30$ € par SMS » —, " +
             "il écrit $f(x) = 8x + 0{,}3$ au lieu de $f(x) = 0{,}3x + 8$.",
      cause: "Les deux nombres arrivent dans l'énoncé dans l'ordre inverse de leur place dans " +
             "l'écriture. On dit « $8$ € puis $0{,}30$ € par SMS » ; on écrit " +
             "$f(x) = 0{,}3x + 8$. L'élève qui recopie dans l'ordre d'apparition se trompe " +
             "systématiquement, et il se trompe pour une raison rationnelle : il a suivi " +
             "l'énoncé.<br/><br/>" +
             "Le second moteur est l'ordre de l'écriture elle-même. $a$ est écrit " +
             "<strong>en premier</strong> dans $ax + b$, alors qu'il désigne ce qui vient " +
             "<strong>ensuite</strong> dans le temps, et $b$ est écrit en dernier alors qu'il " +
             "désigne le départ. Rien dans la notation n'aide, et le mot « origine » — qui " +
             "évoque le début — est attaché au nombre écrit à la fin.",
      remede: "Rendre la question temporelle plutôt que positionnelle. Poser à chaque fois " +
              "deux questions dans cet ordre : « <strong>combien paie-t-on avant de " +
              "commencer ?</strong> » — c'est $b$ —, puis « <strong>combien ajoute chaque " +
              "unité de plus ?</strong> » — c'est $a$. Ces deux questions, posées à voix haute, " +
              "suppriment la dépendance à l'ordre de l'énoncé.<br/><br/>" +
              "Faire ensuite <strong>contrôler par $f(0)$</strong>, qui règle la question en " +
              "une ligne et sans mémoire : calculer $f(0)$ redonne toujours $b$. Un élève qui " +
              "a écrit $f(x) = 8x + 0{,}3$ calcule $f(0) = 0{,}3$ et constate immédiatement " +
              "que son abonnement ne coûterait que trente centimes sans aucun SMS. L'absurdité " +
              "se voit, alors que l'inversion ne se voyait pas.<br/><br/>" +
              "Le schéma « Ce que $a$ et $b$ font à la droite » ancre la distinction " +
              "visuellement : $b$ est une <strong>hauteur</strong>, l'endroit où la droite " +
              "coupe l'axe vertical ; $a$ est une <strong>pente</strong>, lue en escalier par " +
              "un pas de $1$ vers la droite. Une hauteur et une inclinaison ne se confondent " +
              "pas à l'œil, alors que deux nombres dans une écriture se confondent très bien.<br/><br/>" +
              "Insister enfin sur les <strong>unités</strong>, qui départagent sans erreur : " +
              "$b$ est en euros, $a$ est en euros <em>par</em> SMS. Le mot « par » est la " +
              "signature du coefficient directeur.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « un taxi facture 2 € de prise en charge, puis 1,2 €
         par kilomètre ; exprime f(x) puis calcule le prix de 7 km ». L'énoncé
         demande explicitement d'ÉCRIRE la fonction avant de calculer, et c'est
         ce qui en fait le bon support : l'erreur d'inversion se produit à
         l'écriture, pas au calcul. Sa solution imprimée sépare les deux rôles
         en deux lignes distinctes (« la valeur de départ est b », « chaque
         unité supplémentaire ajoute a ») avant d'assembler l'expression, ce
         qui est exactement le geste que le remède demande d'installer. Tous
         les exercices numérotés 1 à 8 relèvent de cette même tâche, dans six
         décors différents : n'importe lequel conviendrait, on renvoie au
         premier. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que toute fonction affine traduit une proportionnalité",
      eleve: "Pour $f(x) = 2x + 3$, l'élève affirme « si je double $x$, je double $f(x)$ », ou " +
             "calcule un prix pour $20$ unités en doublant le prix trouvé pour $10$. Il désigne " +
             "aussi $f(x) = 6x + 2$ comme la fonction traduisant une proportionnalité.",
      cause: "La proportionnalité est, depuis le cycle 3, le modèle par défaut de toute " +
             "situation numérique : plus de kilomètres, plus cher. L'élève dispose d'un " +
             "réflexe puissant — la règle de trois — qui a toujours fonctionné, et rien dans " +
             "l'apparence de $2x + 3$ ne l'avertit qu'il vient de cesser de fonctionner.<br/><br/>" +
             "Le vocabulaire n'aide pas : on enseigne que la fonction linéaire est un cas " +
             "particulier de la fonction affine, ce qui est vrai, et l'élève en tire " +
             "spontanément que leurs propriétés se transmettent — alors que l'inclusion va " +
             "dans l'autre sens. Toute linéaire est affine ; l'inverse est faux.",
      remede: "Ne jamais réfuter par la définition, toujours par le <strong>calcul que " +
              "l'élève fait lui-même</strong>. Avec $f(x) = 2x + 3$ : $f(1) = 5$, et si la " +
              "proportionnalité valait, $f(2)$ devrait valoir $10$. Or $f(2) = 7$. L'élève " +
              "produit la contradiction en deux calculs qu'il maîtrise, et elle ne se discute " +
              "pas.<br/><br/>" +
              "Nommer ensuite le coupable : c'est le $3$, c'est-à-dire ce qu'on paie " +
              "<strong>avant de commencer</strong>. On ne le paie qu'une fois, donc il ne " +
              "double jamais. Cette phrase, en langue courante, convainc immédiatement sur un " +
              "tarif de taxi — personne ne s'attend à payer deux fois la prise en charge pour " +
              "une course deux fois plus longue.<br/><br/>" +
              "Le schéma « Ce que $a$ et $b$ font à la droite » donne le critère visuel " +
              "définitif : la droite de $g(x) = 2x$ <strong>passe par l'origine</strong>, celle " +
              "de $f(x) = 2x + 3$ non. Proportionnalité et passage par l'origine sont la même " +
              "chose, vue de deux façons.<br/><br/>" +
              "Un geste de classe qui règle l'affaire durablement : faire construire un tableau " +
              "de valeurs de $f(x) = 2x + 3$ et faire chercher le « coefficient » " +
              "$\\dfrac{f(x)}{x}$ colonne par colonne. Il vaut $5$, puis $3{,}5$, puis " +
              "environ $3{,}67$… Il ne se stabilise jamais, et c'est précisément ce qu'un " +
              "coefficient de proportionnalité devrait faire.<br/><br/>" +
              "Aucun exercice de ce chapitre ne travaille cette erreur : les huit exercices " +
              "numérotés demandent tous de calculer un prix pour UNE valeur de $x$, si bien " +
              "que la question du doublement ne se pose jamais. La remédiation se fait donc " +
              "au tableau, sur le contre-calcul ci-dessus, ou sur le problème du chapitre, qui " +
              "compare deux formules dont l'une est linéaire et l'autre non.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         les huit exercices numérotés sont tous la même tâche — une valeur de
         départ, un tarif unitaire, un prix à calculer pour un x donné. Un élève
         qui croit à la proportionnalité les réussit TOUS sans jamais rencontrer
         son erreur, puisqu'on ne lui demande jamais de comparer deux valeurs de
         x. Pointer l'un d'eux donnerait à l'enseignant l'illusion d'une
         remédiation. Le remède indique les deux supports qui travaillent
         réellement la question : le contre-calcul mené en classe, et le
         problème du chapitre (formules A et B de la médiathèque), qui oppose
         une affine à une linéaire. */
      exercice: null
    },
    {
      titre: "Calculer le coefficient directeur en oubliant l'écart des abscisses",
      eleve: "Avec $h(1) = 4$ et $h(6) = 24$, l'élève écrit $a = 24 - 4 = 20$. Variante " +
             "fréquente : il divise dans le mauvais sens et écrit " +
             "$a = \\dfrac{6 - 1}{24 - 4} = \\dfrac{5}{20} = 0{,}25$.",
      cause: "La définition la plus retenue du coefficient directeur est « ce que $f(x)$ gagne " +
             "quand $x$ augmente de $1$ ». Elle est juste, elle est même la meilleure pour " +
             "comprendre — mais elle contient implicitement une division par $1$, que l'élève " +
             "ne voit donc jamais. Quand $x$ augmente de $5$ et non de $1$, il applique la " +
             "formule mémorisée : il soustrait.<br/><br/>" +
             "La variante inversée vient d'ailleurs : la fraction " +
             "$\\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$ est mémorisée comme un assemblage de " +
             "lettres sans que son sens — « de combien ça monte pour chaque pas vers la " +
             "droite » — ait été verbalisé. Deux façons d'empiler les mêmes quatre nombres " +
             "paraissent alors également plausibles.",
      remede: "Verbaliser la division avant de l'écrire. « De $1$ à $6$, on avance de $5$ pas. " +
              "Pendant ces $5$ pas, la fonction a monté de $20$. Donc chaque pas monte de " +
              "$20 : 5 = 4$. » Formulée ainsi, la division est évidente et l'ordre de la " +
              "fraction ne fait plus question — on divise ce qui monte par le nombre de pas, " +
              "jamais l'inverse.<br/><br/>" +
              "Le schéma « Ce que $a$ et $b$ font à la droite » montre l'escalier pour un pas " +
              "de $1$ ; le geste de remédiation consiste à le refaire au tableau pour un pas de " +
              "$5$, en traçant les cinq marches une à une. L'élève voit alors que les cinq " +
              "marches font la même hauteur, et qu'il faut donc partager la montée totale " +
              "entre elles.<br/><br/>" +
              "Installer aussi un <strong>contrôle de vraisemblance</strong> qui coûte cinq " +
              "secondes : la valeur trouvée pour $a$ doit permettre de retrouver la seconde " +
              "image. Avec $a = 20$, on aurait $h(6) = h(1) + 5 \\times 20 = 104$, très loin " +
              "des $24$ annoncés. L'erreur se repère sans relire le calcul.<br/><br/>" +
              "Aucun exercice du chapitre ne part de deux points : tous donnent directement le " +
              "tarif unitaire, c'est-à-dire $a$. L'entraînement sur cette erreur doit donc être " +
              "pris ailleurs — dans le quiz du chapitre, dont la troisième question porte " +
              "exactement sur ce calcul, ou dans des exercices construits en classe.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), les huit exercices numérotés
         donnent TOUS le coefficient directeur dans l'énoncé, sous forme de
         tarif unitaire (« 1,2 € par kilomètre »). Aucun ne le fait calculer à
         partir de deux images. Renvoyer à l'un d'eux pour cette erreur serait
         un contresens : l'élève y trouverait a écrit noir sur blanc. Le remède
         indique le quiz du chapitre, dont la question 3 travaille exactement
         ce calcul. */
      exercice: null
    },
    {
      titre: "Tracer la droite en la faisant partir de l'origine",
      eleve: "Pour représenter $f(x) = 2x + 3$, l'élève place correctement le point " +
             "$(0\\,;\\,3)$, puis trace la droite en la faisant passer par l'origine du repère — " +
             "ou bien il calcule $f(1) = 5$, place $(1\\,;\\,5)$, et relie ce point à l'origine.",
      cause: "Le tracé de la droite d'une fonction <strong>linéaire</strong> a été appris au " +
             "cycle 4 comme un geste : un point, l'origine, on relie. Le geste est correct pour " +
             "$f(x) = ax$ et il est très ancré, car il a toujours marché. La fonction affine " +
             "ajoute une hauteur de départ que le geste ne prévoit pas, et l'ancien réflexe " +
             "reprend la main.<br/><br/>" +
             "S'ajoute une cause de fond : l'élève trace en cherchant à obtenir une droite, pas " +
             "en cherchant à placer des points de la fonction. Il utilise donc l'origine comme " +
             "<strong>second point commode</strong> sans se demander si elle appartient à la " +
             "courbe. La question « est-ce que $f(0)$ vaut bien $0$ ? » ne se pose pas, parce " +
             "que le point n'a pas été calculé mais choisi.",
      remede: "Interdire provisoirement de relier, et n'autoriser que le " +
              "<strong>placement de points calculés</strong>. Faire calculer trois valeurs — " +
              "$f(0)$, $f(1)$, $f(3)$ —, faire placer les trois points, puis constater qu'ils " +
              "sont alignés AVANT de tracer. La droite devient alors un résultat observé et " +
              "non un dessin à produire, et l'origine perd son statut de point gratuit.<br/><br/>" +
              "Poser ensuite, systématiquement, la question de contrôle : « <strong>le point " +
              "$(0\\,;\\,0)$ est-il sur la droite ?</strong> ». La réponse est oui si et " +
              "seulement si $f(0) = 0$, donc si et seulement si $b = 0$. En une question, " +
              "l'élève distingue les deux cas — et redécouvre au passage ce qui sépare une " +
              "fonction linéaire d'une affine.<br/><br/>" +
              "Le schéma « Ce que $a$ et $b$ font à la droite » est construit pour cette " +
              "erreur : il montre deux droites de <strong>même</strong> coefficient directeur, " +
              "l'une passant par l'origine et l'autre non. Elles sont parallèles, donc elles " +
              "ne se confondent jamais, et l'écart entre les deux est exactement $b$.<br/><br/>" +
              "Un geste de classe utile en fin de séance : projeter quatre droites tracées et " +
              "quatre expressions, et demander de les apparier sans aucun calcul, uniquement " +
              "par la hauteur de départ et le sens de la montée. On travaille la lecture du " +
              "graphique, qui est ce que le tracé suppose.<br/><br/>" +
              "Aucun exercice de ce chapitre ne demande de tracer ni de lire un graphique : " +
              "la remédiation doit être conduite sur papier millimétré en classe, à partir des " +
              "expressions du cours.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         la banque du chapitre est entièrement numérique (vérifié sur le tirage
         réel, 2026-09-13 : les huit exercices numérotés demandent un prix en
         euros, aucun ne comporte de repère ni de tracé). Le site attend d'ailleurs
         une réponse numérique, ce qui exclut structurellement toute tâche de
         construction graphique. Pointer un exercice de calcul pour une erreur de
         tracé enverrait l'enseignant vers une remédiation qui n'en est pas une.
         Le remède dit où le travail doit avoir lieu : au tableau et sur papier
         millimétré. */
      exercice: null
    },
    {
      titre: "Donner le seuil sans justifier lequel des deux tarifs l'emporte",
      eleve: "Sur la comparaison de deux formules, l'élève résout correctement " +
             "$x + 30 = 2{,}5x$ et écrit « $x = 20$ ». Puis il s'arrête, ou conclut au hasard " +
             "« donc la formule A est plus avantageuse », sans dire à partir de quand ni " +
             "pourquoi.",
      cause: "L'équation a été posée comme la tâche à accomplir, et sa solution ressemble à une " +
             "fin. Or $x = 20$ ne répond à AUCUNE des questions posées : il donne le point où " +
             "les deux formules coûtent la même chose, c'est-à-dire précisément le seul cas où " +
             "il n'y a rien à conseiller.<br/><br/>" +
             "Le geste manquant est celui d'un raisonnement en deux temps : d'abord trouver le " +
             "seuil, ensuite décider de quel côté du seuil chaque formule gagne. Ce second " +
             "temps n'est jamais un calcul — c'est une comparaison qu'il faut argumenter —, et " +
             "c'est exactement pour cela que l'élève l'omet : rien à calculer lui apparaît " +
             "comme rien à faire.<br/><br/>" +
             "C'est la difficulté typique de l'année du brevet : le résultat est juste, la " +
             "réponse ne l'est pas, parce qu'il manque la phrase qui relie l'un à l'autre.",
      remede: "Faire de la conclusion une <strong>troisième étape obligatoire</strong>, écrite " +
              "au tableau comme un modèle : (1) je pose l'égalité des deux tarifs, (2) je " +
              "résous et je trouve le seuil, (3) je teste une valeur de chaque côté et je " +
              "conclus en français.<br/><br/>" +
              "Le geste décisif est le <strong>test d'un cas de part et d'autre</strong>. Pour " +
              "$10$ DVD : $40$ € contre $25$ €, la formule B gagne. Pour $30$ DVD : $60$ € " +
              "contre $75$ €, la formule A gagne. Deux calculs que tous les élèves savent " +
              "faire, et qui transforment un nombre nu en un conseil utilisable.<br/><br/>" +
              "Donner ensuite l'argument qui se passe de tout calcul, et qui est celui qu'on " +
              "veut entendre au brevet : au-delà du seuil, c'est le tarif au " +
              "<strong>coefficient directeur le plus grand</strong> qui devient le plus cher, " +
              "parce que chaque unité supplémentaire lui coûte davantage. Le $a$ décide de ce " +
              "qui se passe loin, le $b$ de ce qui se passe au départ.<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : donner une conclusion rédigée " +
              "complète et correcte, puis demander aux élèves de barrer tout ce qui pourrait " +
              "être supprimé sans perdre de points. Ils découvrent que la phrase de " +
              "comparaison est la seule ligne indispensable, ce qu'aucun discours sur la " +
              "rigueur n'obtient aussi vite.<br/><br/>" +
              "Aucun exercice de la banque ne compare deux tarifs : la remédiation se conduit " +
              "sur le problème du chapitre (formules A et B de la médiathèque), dont les " +
              "quatre tâches suivent exactement cette progression, ou sur l'exemple résolu du " +
              "cours (les deux taxis).",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), les huit exercices numérotés
         ne mettent en scène qu'UN seul tarif et demandent un prix. Il n'y a
         donc ni comparaison, ni seuil, ni conclusion à rédiger — et la réponse
         attendue est un nombre, ce qui exclut toute exigence de rédaction. Le
         remède indique les deux supports qui travaillent réellement le
         raisonnement complet : le problème du chapitre et l'exemple résolu du
         cours. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     AVERTISSEMENT ASSUMÉ SUR CETTE ÉVALUATION. Trois des cinq questions sont
     étiquetées « calculer », et c'est une description honnête de ce qu'elles
     demandent, non un défaut de cette fiche. La règle posée pour le niveau est
     claire : on ne déclare une compétence que si la question la MOBILISE.

     Q1 demande $f(5)$ pour $f(x) = 3x - 7$ : une substitution. « calculer ».

     Q2 demande l'ordonnée à l'origine de $g(x) = -2x + 11$. On pourrait être
     tenté d'y voir « représenter », puisque $b$ est une hauteur sur un
     graphique — mais aucun graphique n'est fourni, et la réponse s'obtient en
     lisant le terme constant ou en calculant $g(0)$. C'est « calculer », et le
     dire évite de gonfler artificiellement une compétence rare.

     Q3 applique la formule du coefficient directeur à deux images données.
     Les quatre nombres sont fournis, la formule est au programme et figure
     dans le cours : c'est une application. « calculer ».

     Q4 demande laquelle de quatre fonctions traduit une proportionnalité. Rien
     n'est à calculer : il faut revenir à la caractérisation ($b = 0$) et
     écarter trois cas voisins — une affine non linéaire, une constante, un
     carré. C'est un travail sur la définition et ses frontières :
     « raisonner ».

     Q5 part d'une situation en français — un abonnement à $8$ € par mois plus
     $0{,}30$ € par SMS — que rien ne présente comme une fonction. L'élève doit
     reconnaître la structure affine, identifier ce qui joue le rôle de $a$ et
     de $b$ (dans l'ordre inverse de l'énoncé, ce qui est exactement l'erreur 1
     de cette fiche), écrire $f(x) = 0{,}3x + 8$ puis l'appliquer. Le calcul y
     est trivial ; le travail est la mise en équation. C'est « modéliser ».

     La compétence « représenter » n'est PAS déclarée ici, bien que ce chapitre
     soit graphique par nature : aucune des cinq questions ne fournit de
     graphique à lire ni n'en demande la construction. C'est une occasion
     manquée, et le dire vaut mieux que de l'étiqueter à tort. Le chapitre
     « Fonctions – notions de base » (rang 5) porte cette compétence pour le
     niveau, sur sa question 2. */
  competences: {
    /* DEUX QUESTIONS ONT ÉTÉ RÉÉCRITES dans js/data/3e/3e-fonctions-affines.js
       le 2026-09-13, parce que déclarer une compétence ne suffit pas : la
       question doit réellement la mobiliser. Les cinq questions étaient
       auparavant quatre applications numériques et un QCM, dans un chapitre
       pourtant graphique par nature — et aucune ne faisait lire un graphique.

       Q2 demandait l'ordonnée à l'origine de $g(x) = -2x + 11$, c'est-à-dire
       de recopier le terme constant. Elle demande maintenant de relier une
       ÉCRITURE à une ALLURE de droite, sans aucun calcul : le signe de $a$
       donne le sens de variation, $b$ donne le point de départ. C'est
       « représenter », la compétence la plus rare de l'ouvrage.

       Q3 appliquait la formule du coefficient directeur à deux points. Elle
       demande maintenant de juger le raisonnement de Malo, qui trouve la BONNE
       valeur par une méthode fausse, et d'expliquer pourquoi : produire une
       explication, non un nombre. C'est « communiquer ». L'erreur soumise au
       jugement — confondre un rapport de valeurs avec un rapport
       d'accroissements — est celle que cette fiche traite, ce qui referme la
       boucle entre le diagnostic et l'évaluation.

       Q1 applique la fonction à une valeur : « calculer ».
       Q4 distingue linéaire et affine, donc conclut d'une forme algébrique à
       une propriété : « raisonner ».
       Q5 traduit une situation d'abonnement en fonction affine avant tout
       calcul : « modéliser ». */
    evaluation: ["calculer", "représenter", "communiquer", "raisonner", "modéliser"]
  }
};
