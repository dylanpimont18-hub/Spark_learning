/* =========================================================
   Spark Learning – js/data/prof/3e/3e-systemes.prof.js
   Fiche professeur du chapitre « Systèmes d'équations » (troisième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote du niveau
   (3e-thales.prof.js) : mêmes conventions, même niveau de détail, mêmes deux
   règles éditoriales.

   CE QUE LA TROISIÈME CHANGE. C'est l'année du brevet, et la démonstration y
   devient un attendu et non un ornement. Ici, la rédaction attendue tient en
   deux gestes que les élèves omettent en premier : déclarer ce que désignent
   les DEUX inconnues avant d'écrire le système, et vérifier le couple trouvé
   dans les DEUX équations. L'erreur 4 de cette fiche porte exactement
   là-dessus, et l'erreur 1 en est la contrepartie calculatoire.

   CHAPITRE CHARNIÈRE VERS LA SECONDE. Les attendus ci-dessous sont écrits pour
   être lus par qui préparera le niveau seconde : ils nomment explicitement ce
   que l'élève doit maîtriser EN SORTIE de troisième, puisque le lycée reprend
   les systèmes presque tels quels, en y ajoutant seulement la lecture
   graphique comme intersection de deux droites.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève, vouvoiement neutre de
   l'enseignant dans les fiches.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-systemes"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 6 (équations et inéquations) : c'est LE prérequis du chapitre, et il
     est massif. Les deux méthodes du cours — substitution et combinaison — se
     terminent toutes deux sur une équation du premier degré à une inconnue,
     qu'il faut savoir résoudre sans y penser. Un élève qui hésite encore sur
     $3x = 9$ ne bute pas sur les systèmes : il bute une marche plus bas, et
     l'erreur se manifeste ici dans un habillage qui la rend illisible.

     Les identités remarquables ne sont PAS un prérequis, contrairement à ce
     qu'on pourrait attendre d'un chapitre d'algèbre : un système du premier
     degré ne contient aucun carré et aucun produit à développer. Le dire évite
     une révision inutile. */
  prerequis: [6],

  /* Rang conseillé (2026-09-13) : rang 4, immédiatement après les équations.

     La proximité est voulue, et elle est le principal levier pédagogique du
     chapitre : un système n'est pas un objet nouveau, c'est la même équation
     menée deux fois de front. Enchaîner les deux chapitres permet de présenter
     la substitution comme « ce qu'on sait déjà faire, appliqué deux fois »
     plutôt que comme une technique de plus. Séparer les deux de trois mois
     oblige à réapprendre ce qui n'aurait eu qu'à se prolonger.

     Il vient en revanche AVANT les fonctions affines, et pas après, alors que
     la lecture graphique d'un système — deux droites, un point d'intersection —
     est le pont naturel entre les deux. Ce choix est délibéré : en troisième,
     un système se résout algébriquement, et la figure du cours vient éclairer
     un résultat déjà trouvé, pas le produire. Les fonctions affines pourront
     ensuite relire ce qui est acquis, ce qui est plus confortable que
     l'inverse.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 4,

  /* Attendus de fin d'année de troisième (programme du cycle 4, 2020),
     domaine « Nombres et calculs », partie « Calcul littéral et équations ».

     CES LIGNES SONT ÉCRITES POUR ÊTRE LUES PAR LA SECONDE : elles nomment ce
     que l'élève doit maîtriser en sortie, puisque le lycée reprend l'objet
     presque à l'identique et n'y ajoute d'abord que l'interprétation
     graphique. */
  attendus: [
    "Résoudre un système de deux équations du premier degré à deux inconnues, par substitution comme par combinaison",
    "Choisir la méthode la plus économique selon la forme des coefficients, et justifier ce choix",
    "Mettre un problème concret en système en nommant explicitement les deux inconnues avec leur unité",
    "Vérifier systématiquement le couple solution dans les deux équations de départ, et interpréter le résultat dans le contexte du problème",
    "Reconnaître qu'un système peut admettre une solution unique, aucune solution ou une infinité de solutions, et relier ces trois cas aux positions relatives de deux droites"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Sont pleinement au programme de troisième : la <strong>résolution algébrique</strong> d'un " +
        "système de deux équations du premier degré à deux inconnues, par substitution ou par " +
        "combinaison, et la <strong>mise en système</strong> d'un problème concret. C'est le cœur " +
        "du chapitre, et un exercice classique du brevet.<br/><br/>" +
        "Un point demande de la mesure : les <strong>cas particuliers</strong> — aucune solution, " +
        "une infinité —, qui font l'objet de la question 5 de l'évaluation. Le programme du cycle 4 " +
        "attend la résolution des systèmes qui ont une solution unique ; la discussion générale du " +
        "nombre de solutions relève de la seconde. Le cas d'une infinité de solutions se traite " +
        "très bien en troisième quand il se voit à l'œil nu (une équation double de l'autre), et " +
        "c'est une belle occasion de faire réfléchir ; ne le rendez pas exigible sous une forme " +
        "générale, et n'introduisez surtout pas de critère de proportionnalité des coefficients à " +
        "retenir par cœur.<br/><br/>" +
        "Le lien avec les <strong>droites</strong> — deux équations, deux droites, un point " +
        "d'intersection — est présent dans le schéma du cours et il est précieux, mais il suppose " +
        "de savoir tracer la droite d'équation $ax + by = c$, qui n'est pas une forme travaillée " +
        "au collège (on y voit $y = mx + p$). Utiliser la figure pour <strong>illustrer</strong> " +
        "une solution déjà trouvée algébriquement, pas pour demander une résolution " +
        "graphique.<br/><br/>" +
        "Enfin, le problème du chapitre mobilise les <strong>lois de Kirchhoff</strong>. C'est de " +
        "la physique-chimie de troisième, et c'est une excellente occasion de travail " +
        "interdisciplinaire avec le collègue de physique — mais cela ne peut pas être exigé dans " +
        "une évaluation de mathématiques.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre.

     UNE PARTICULARITÉ DU GÉNÉRATEUR, à connaître avant de lire la suite : les
     douze tirages produisent tous la même tâche — un problème d'achats à deux
     articles, dont le système est DONNÉ dans l'énoncé, et dont on ne demande
     que $x$ (vérifié le 2026-09-13). Cela a deux conséquences directes sur les
     renvois ci-dessous. D'une part la mise en système n'est jamais à la charge
     de l'élève, donc l'erreur 4 ne peut pas être renvoyée de plein fouet.
     D'autre part, comme seul $x$ est demandé, l'erreur 1 — s'arrêter après la
     première inconnue — n'est pas pénalisée par le livre alors qu'elle l'est
     au brevet : c'est un point de vigilance à signaler aux élèves. */
  erreurs: [
    {
      titre: "Trouver la première inconnue et s'arrêter là",
      eleve: "Sur $\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}$, l'élève additionne, trouve " +
             "$x = 4$, et annonce « la solution est $4$ ». Ou bien il écrit le couple $(4\\,;\\,4)$, " +
             "en recopiant $x$ à la place de $y$ faute d'avoir refait le calcul.",
      cause: "Toute la scolarité antérieure a associé « résoudre » à « trouver LE nombre » : une " +
             "équation, une réponse. L'idée que la solution soit un COUPLE, et qu'un seul de ses " +
             "deux termes ne soit pas une réponse partielle mais une réponse fausse, est neuve. " +
             "S'ajoute un effet de fatigue bien réel : la deuxième inconnue s'obtient après le plus " +
             "gros du travail, au moment où l'élève se croit arrivé.",
      remede: "Nommer la solution par sa forme, et le faire dès la première séance : la solution " +
              "d'un système est un <strong>couple $(x\\,;\\,y)$</strong>, avec ses deux parenthèses " +
              "et son point-virgule. Une copie qui rend un seul nombre n'a pas répondu à la " +
              "question posée, quelle que soit la qualité du calcul qui précède.<br/><br/>" +
              "Un geste de classe qui règle l'affaire presque à lui seul : faire écrire le couple " +
              "vide $(\\ \\ ;\\ \\ )$ au BROUILLON, avant de commencer, et le compléter au fur et à " +
              "mesure. Une case restée vide se voit, là où une ligne manquante ne se voit pas.<br/><br/>" +
              "Rappeler enfin que le calcul de la seconde inconnue est le plus rapide des deux : " +
              "une fois $x$ connu, il suffit de le remplacer dans l'équation la plus simple. Trente " +
              "secondes de travail pour la moitié des points, c'est l'argument qui porte le mieux " +
              "auprès des élèves.<br/><br/>" +
              "Un point de vigilance propre à ce livre : les exercices du chapitre ne demandent que " +
              "$x$, ce qui est confortable pour s'entraîner à la technique mais n'entraîne jamais le " +
              "réflexe du couple. Au brevet, les deux inconnues sont demandées. Quand vous reprenez " +
              "ces exercices en classe, exigez systématiquement $y$ en plus : la solution imprimée " +
              "le donne, ce qui rend la correction immédiate.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « une vis coûte x €, un boulon y € ; un artisan
         achète 1 vis et 1 boulon pour 4 €, un autre 3 et 2 pour 11 € ; quel
         est le prix d'une vis ? ». Ses coefficients (1 et 1 sur la première
         ligne) en font le tirage le plus simple des douze : l'élève atteint x
         en deux lignes, ce qui laisse toute l'attention disponible pour le
         geste travaillé ici. Et sa solution imprimée donne les DEUX valeurs
         (x = 3 et y = 1) puis vérifie les DEUX équations, ce qui permet
         d'exiger le couple complet et de le corriger sans rien recalculer. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Additionner les deux équations sans que rien ne s'élimine",
      eleve: "Sur $\\begin{cases} 3x + 2y = 33 \\\\ 2x + 2y = 26 \\end{cases}$, l'élève additionne et " +
             "obtient $5x + 4y = 59$ — une équation de plus, à deux inconnues, qui ne l'avance en " +
             "rien. Il additionne parce que « la méthode de combinaison, c'est additionner ».",
      cause: "La méthode a été retenue par son geste — additionner — et non par son but — faire " +
              "disparaître une inconnue. Or l'addition n'est qu'un moyen, et elle ne sert que si les " +
              "coefficients d'une même inconnue sont <strong>opposés</strong>. L'élève applique " +
              "fidèlement une recette dont on ne lui a pas donné la condition d'emploi, et son " +
              "erreur est logique : rien dans le mot « addition » ne dit quand elle est utile.",
      remede: "Renommer la méthode par son objectif. Dire « <strong>méthode d'élimination</strong> » " +
              "plutôt que « méthode d'addition » change réellement ce que les élèves en retiennent, " +
              "parce que le nom contient alors la question à se poser : <strong>qu'est-ce que je " +
              "cherche à faire disparaître ?</strong><br/><br/>" +
              "Installer ensuite un réflexe de lecture, avant tout calcul : regarder les deux " +
              "colonnes de coefficients et chercher une paire qui soit égale ou opposée. Si les " +
              "coefficients sont <strong>opposés</strong> ($+2y$ et $-2y$), on additionne. S'ils sont " +
              "<strong>égaux</strong> ($+2y$ et $+2y$), on soustrait. S'ils ne sont ni l'un ni " +
              "l'autre, il faut d'abord multiplier une ligne pour les y amener.<br/><br/>" +
              "La soustraction est le point délicat, et il vaut mieux l'anticiper que la corriger : " +
              "faire écrire explicitement l'opération ligne à ligne, " +
              "$(3x + 2y) - (2x + 2y) = 33 - 26$, avec les parenthèses, avant de réduire. Sans " +
              "elles, le signe du second terme se perd systématiquement.<br/><br/>" +
              "Un geste de classe rapide : projeter six systèmes et ne demander QUE la décision — " +
              "« j'additionne », « je soustrais », « je multiplie d'abord » — sans jamais résoudre. " +
              "Cinq minutes, aucune copie à ramasser, et c'est la seule compétence en jeu ici.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 6 est « un
         marchand vend des pommes à x €/kg et des poires à y €/kg ; 3 kg de
         pommes et 2 kg de poires pour 33 €, 2 kg de pommes et 2 kg de poires
         pour 26 € », soit le système 3x + 2y = 33 / 2x + 2y = 26. Les
         coefficients de y y sont ÉGAUX et non opposés : additionner ne donne
         rien, et seule la soustraction élimine. C'est exactement la situation
         décrite ci-dessus, et c'est le meilleur tirage des douze pour la
         travailler. L'exercice 5 (2x + 3y = 12 / 2x + 2y = 10) présente la
         même structure sur les coefficients de x et sert de second support. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Substituer dans l'équation dont on vient de partir",
      eleve: "De $x + y = 7$, l'élève tire $y = 7 - x$, puis remplace dans la MÊME équation : " +
             "$x + (7 - x) = 7$, ce qui donne $7 = 7$. Il en conclut que « le système est toujours " +
             "vrai », ou qu'il n'a pas de solution, ou qu'il s'est trompé quelque part.",
      cause: "La consigne « remplace $y$ par son expression » ne dit pas OÙ, et l'élève remplace là " +
             "où il vient de travailler, ce qui est le mouvement naturel du regard. Le résultat " +
             "obtenu, $7 = 7$, n'a d'ailleurs rien d'absurde : c'est une identité vraie, et l'élève " +
             "n'a aucun signal lui indiquant qu'il vient de tourner en rond. C'est une erreur qui ne " +
             "se corrige pas toute seule, parce qu'elle ne produit rien de faux.",
      remede: "Donner à l'information la forme qui rend l'erreur impossible : une substitution " +
              "transporte un renseignement d'une équation vers <strong>l'autre</strong>. Faire " +
              "numéroter les deux équations, $(1)$ et $(2)$, et faire annoncer le mouvement à voix " +
              "haute ou dans la marge : « j'isole $y$ dans $(1)$, je le remplace dans " +
              "$(2)$ ».<br/><br/>" +
              "Commenter le résultat $7 = 7$ plutôt que de le barrer, car il est instructif : " +
              "l'égalité obtenue est vraie, et c'est bien le problème. Une information réinjectée " +
              "là d'où elle vient ne peut rien apprendre de neuf — elle se confirme elle-même. " +
              "Les élèves comprennent très bien cette idée quand on la formule ainsi, et ils la " +
              "retiennent.<br/><br/>" +
              "Ajouter un critère de contrôle immédiat, valable à tous les coups : après " +
              "substitution, l'équation obtenue doit contenir <strong>une seule inconnue</strong>, " +
              "et elle doit encore contenir un $x$. Si les $x$ ont disparu en même temps que les " +
              "$y$, c'est qu'on a substitué du mauvais côté.<br/><br/>" +
              "Enfin, aider au choix de l'équation à transformer : on isole dans celle où une " +
              "inconnue a un coefficient de $1$, parce qu'aucune fraction n'apparaît alors. Ce " +
              "réflexe économise la moitié des erreurs de calcul du chapitre.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est « une
         papeterie : 1 cahier et 1 stylo pour 7 €, 1 cahier et 2 stylos pour
         9 € », soit 1x + 1y = 7 / 1x + 2y = 9. C'est le tirage le mieux
         adapté à la substitution parmi les douze : les deux inconnues de la
         première équation ont un coefficient de 1, donc on isole sans
         fraction, et la seconde équation est réellement différente de la
         première — l'élève qui substitue au mauvais endroit obtient 7 = 7 et
         voit le phénomène décrit ici se produire sous ses yeux. La solution
         imprimée donne les deux valeurs (x = 5, y = 2) et vérifie les deux
         équations. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Ne vérifier que dans une seule équation, ou ne pas vérifier du tout",
      eleve: "L'élève trouve $(4\\,;\\,4)$ pour " +
             "$\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}$, contrôle dans la seconde " +
             "équation — $2 \\times 4 - 4 = 4$, ce qui ne fait pas $5$ non plus — ou bien ne " +
             "contrôle rien du tout et rend la copie.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que le " +
             "résultat EST le travail, et la vérification lui apparaît comme une formalité qu'on " +
             "ajoute quand il reste du temps. S'y ajoute une raison de fond, propre aux systèmes : " +
             "l'élève ne perçoit pas qu'un couple puisse satisfaire une équation et pas l'autre, " +
             "parce qu'il pense « la solution » au singulier. Une seule vérification lui semble donc " +
             "logiquement suffisante.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : une " +
              "résolution de système tient en quatre lignes, et les quatre sont exigibles.<br/><br/>" +
              "<strong>1. Les deux inconnues</strong> : « soit $x$ le prix d'une vis en euros et $y$ " +
              "celui d'un boulon en euros ». Deux phrases, avec les unités.<br/><br/>" +
              "<strong>2. Le système</strong>, écrit avec son accolade.<br/><br/>" +
              "<strong>3. La résolution</strong>, avec la méthode annoncée.<br/><br/>" +
              "<strong>4. La double vérification et la conclusion</strong> : le couple est réinjecté " +
              "dans les DEUX équations de départ, puis la réponse est rendue dans les termes du " +
              "problème — « la vis coûte $3$ € et le boulon $1$ € », pas " +
              "« $(3\\,;\\,1)$ ».<br/><br/>" +
              "Faire éprouver la nécessité de la double vérification plutôt que l'imposer : proposer " +
              "le couple $(4\\,;\\,3)$ pour le système ci-dessus. Il vérifie la première équation, " +
              "$4 + 3 = 7$, et pas la seconde, $2 \\times 4 - 3 = 5$ — tiens, elle marche aussi. " +
              "Prendre alors $(5\\,;\\,2)$ : la première équation est vérifiée, la seconde donne " +
              "$8 \\neq 5$. Une équation seule ne distingue pas la bonne réponse de mille autres ; " +
              "c'est la SECONDE qui tranche. L'exemple fait plus que le discours.<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : distribuer une copie fictive " +
              "comportant uniquement le calcul, juste, sans déclaration d'inconnues ni conclusion, " +
              "et demander de la noter avec un barème de brevet sous les yeux. Les élèves " +
              "constatent eux-mêmes le nombre de points perdus.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est « une
         fromagerie : 2 kg de comté et 2 kg de brie pour 24 €, 1 kg de comté et
         3 kg de brie pour 20 € ». Ses DEUX lignes de solution imprimées sont
         précisément les deux vérifications demandées ici — « Vérif éq 1 » puis
         « Vérif éq 2 », chacune détaillée chiffre à chiffre. C'est donc
         l'exercice où la rédaction attendue est déjà écrite sous les yeux de
         l'élève, ce qui en fait le modèle à recopier avant d'être exigé.
         Ses inconnues ont en plus une unité claire (des euros par kilogramme),
         ce qui permet de travailler la ligne 1 et la conclusion dans le même
         mouvement. Noter que l'énoncé fournit le système : c'est ce qu'il faut
         masquer au tableau pour travailler réellement la mise en système. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Conclure « pas de solution » devant une infinité de solutions",
      eleve: "Sur $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$, l'élève soustrait le " +
             "double de la seconde équation à la première, obtient $0 = 0$, et conclut « il n'y a " +
             "pas de solution » — parce que « je n'ai pas trouvé de nombre ».",
      cause: "Deux situations produisent une ligne sans inconnue, et elles se ressemblent " +
             "beaucoup : $0 = 0$ et $0 = 3$. L'élève les confond parce qu'il lit dans les deux " +
             "« il ne reste plus de $x$, donc j'ai échoué ». Rien ne lui a appris qu'une égalité " +
             "sans inconnue est encore une information, et qu'elle en dit même beaucoup : elle est " +
             "soit toujours vraie, soit jamais vraie, et ces deux cas sont opposés.",
      remede: "Traiter les deux lignes côte à côte, et poser une seule question à leur sujet : " +
              "<strong>cette égalité est-elle vraie ?</strong><br/><br/>" +
              "$0 = 0$ est vraie, toujours, quelles que soient les valeurs : toutes les valeurs " +
              "conviennent, donc le système a une <strong>infinité</strong> de solutions. " +
              "$0 = 3$ est fausse, toujours : aucune valeur ne convient, donc le système n'a " +
              "<strong>aucune</strong> solution. La question à poser est la même dans les deux cas, " +
              "et il n'y a rien de plus à retenir.<br/><br/>" +
              "Appuyer sur le schéma de la droite graduée du cours pour donner l'image : deux " +
              "équations, deux droites. Si elles se croisent, il y a un point, donc une solution. Si " +
              "elles sont parallèles et distinctes, il n'y a aucun point commun. Si elles sont " +
              "<strong>confondues</strong>, tous les points conviennent — et c'est exactement le cas " +
              "ici, puisque la première équation est le double exact de la seconde.<br/><br/>" +
              "Un geste de classe qui économise beaucoup de temps : apprendre à repérer le cas " +
              "AVANT de calculer. Faire regarder les deux lignes du système et demander si l'une " +
              "n'est pas un multiple de l'autre. Ici $2x + 4y = 10$ est exactement $2 \\times " +
              "(x + 2y = 5)$ : les deux équations disent la même chose, et une information répétée " +
              "n'apprend rien de neuf.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur, et c'est structurel : le " +
              "générateur écarte explicitement les systèmes dégénérés — il retire tout tirage où " +
              "$ae = bd$, précisément pour garantir une solution unique (voir la boucle " +
              "`do … while` dans son `generate()`). Aucun des douze tirages ne peut donc produire " +
              "$0 = 0$. L'entraînement utile est une série de trois ou quatre systèmes construits " +
              "à la main, dont un dégénéré, à trier sans résoudre.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : le générateur EXCLUT par construction les systèmes à
         déterminant nul (boucle `while (a * e === b * d)` dans generate()),
         si bien qu'aucun tirage ne peut présenter le cas — vérifié sur douze
         tirages le 2026-09-13. Le seul support du livre portant sur les cas
         particuliers est la question 5 de l'ÉVALUATION, et une remédiation ne
         renvoie jamais vers l'évaluation notée : on remédie avant d'évaluer.
         Le remède dit donc explicitement où chercher l'entraînement utile,
         comme le font déjà six remédiations de la sixième et une de la
         quatrième. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Q1 (résoudre $x + y = 10$ / $3x - y = 6$, donner $x$) : les coefficients
     de $y$ sont opposés, l'addition s'impose d'elle-même. Application directe.
     C'est « calculer ».
     Q2 (quelle est la méthode la plus directe pour ce système ?, QCM) : aucune
     résolution n'est demandée — on demande de JUSTIFIER un choix de méthode en
     lisant les coefficients. C'est « raisonner ».
     Q3 (résoudre $5x - 2y = 1$ / $3x + 2y = 15$, donner $y$) : application,
     avec la difficulté supplémentaire d'une réponse décimale, $4{,}5$, qu'il
     faut assumer. C'est « calculer ».
     Q4 (le magasin, 7 articles pour 17 €, combien de cahiers ?) : le système
     n'est PAS donné. L'élève doit choisir ses deux inconnues, traduire deux
     phrases en deux équations, puis revenir au contexte pour rendre un nombre
     de cahiers. C'est « modéliser », et c'est la seule question de
     l'évaluation qui l'évalue.
     Q5 (le système $2x + 4y = 10$ / $x + 2y = 5$ admet…, QCM) : il faut
     reconnaître que les deux équations sont proportionnelles et en déduire le
     nombre de solutions — un raisonnement sur la nature du système, pas une
     résolution. C'est « raisonner » également, et c'est l'erreur 5 de cette
     fiche.

     CONSTAT À ASSUMER : « chercher », « représenter » et « communiquer » ne
     sont évaluées nulle part dans ce chapitre, et leurs colonnes resteront
     vides sur la grille. Le livre en donne pourtant les moyens ailleurs :
     « représenter » est directement travaillée par le schéma des deux droites
     du cours (placer la solution, relier le point d'intersection au couple),
     et « communiquer » par la première question du quiz, où il s'agit
     d'expliquer comment montrer qu'un camarade a tort. Si vous voulez les
     évaluer, construisez la question à partir de ces deux supports plutôt que
     de renommer une étiquette ici — déclarer une compétence ne suffit pas, la
     question doit réellement la mobiliser. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "modéliser", "raisonner"]
  }
};
