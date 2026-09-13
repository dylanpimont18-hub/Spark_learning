/* =========================================================
   Spark Learning – js/data/prof/3e/3e-fonctions.prof.js
   Fiche professeur du chapitre « Fonctions – notions de base » (troisième),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 3e-thales.prof.js.

   POURQUOI CE CHAPITRE EST LE PLUS DÉLICAT DU NIVEAU. Ce n'est pas un chapitre
   technique : aucune formule n'y est difficile, et tous les calculs demandés
   sont à la portée d'un élève de cinquième. La difficulté est entièrement de
   nature CONCEPTUELLE, et elle tient en une phrase : l'élève passe d'un monde
   où l'on cherche UN nombre à un monde où l'on manipule une RÈGLE qui les
   produit tous. Tant que ce basculement n'a pas eu lieu, $f(x)$ reste une
   multiplication déguisée, et l'élève lit « $f$ fois $x$ ».

   C'est pour cela que cette fiche compte CINQ erreurs et non quatre : quatre
   d'entre elles sont des confusions distinctes entre des objets que l'écriture
   ne distingue pas visuellement (image / antécédent, $f(x)$ produit /
   $f(x)$ image, unicité dans un sens / dans l'autre). Les regrouper les
   rendrait invisibles, alors qu'en classe elles se traitent séparément.

   PRÉPARATION DE LA SECONDE. Les `attendus` ci-dessous nomment explicitement ce
   que l'élève doit maîtriser en SORTIE de troisième, parce que la seconde
   reprend ce vocabulaire sans le réenseigner : elle l'utilise dès la première
   semaine pour étudier des variations, un signe, une résolution graphique.
   Un élève qui confond encore image et antécédent en septembre de seconde ne
   rattrape pas ce retard : il le traîne toute l'année.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-fonctions"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 6 (équations et inéquations) : la moitié du chapitre en dépend
     directement. Chercher un antécédent, c'est résoudre $f(x) = b$ — rien
     d'autre. Un élève qui ne sait pas isoler $x$ dans $4x - 5 = 23$ ne pourra
     pas trouver un antécédent, quel que soit son niveau de compréhension de la
     notion de fonction. C'est exactement l'erreur 2 de cette fiche, et la
     confondre avec une difficulté conceptuelle fait perdre des semaines.

     La proportionnalité du cycle 3 n'est PAS listée comme prérequis, bien
     qu'elle soit le premier exemple de fonction rencontré : elle devient utile
     au chapitre SUIVANT (fonctions affines et linéaires, rang 6), où elle
     s'identifie enfin au cas $b = 0$. Ici elle n'est pas mobilisée. */
  prerequis: [6],

  /* Rang conseillé (2026-09-13) : rang 5. La notion de fonction arrive après
     le socle calculatoire de l'année — calcul littéral, identités remarquables,
     équations — parce qu'elle le CONSOMME sans rien lui apporter : calculer
     une image, c'est substituer dans une expression littérale ; chercher un
     antécédent, c'est résoudre une équation.

     Il précède immédiatement les fonctions affines et linéaires (rang 6), qui
     en sont le cas particulier et qui ne peuvent pas se traiter avant : dire
     « $f(x) = ax + b$ est une fonction affine » n'a aucun sens pour qui ne sait
     pas ce qu'est une fonction.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 5,

  /* Attendus de fin d'année de troisième (programme du cycle 4, 2020),
     domaine « Nombres et calculs » / thème « Organisation et gestion de
     données, fonctions ».

     Les deux derniers sont rédigés en termes de SORTIE de cycle, parce qu'ils
     seront lus par la seconde : ils disent ce sur quoi le lycée s'appuiera
     sans le reprendre. */
  attendus: [
    "Comprendre et utiliser la notion de fonction : à une valeur d'entrée correspond une unique valeur de sortie",
    "Calculer l'image d'un nombre par une fonction donnée par une expression littérale",
    "Déterminer un antécédent en résolvant une équation, et savoir qu'un nombre peut avoir zéro, un ou plusieurs antécédents",
    "Passer d'un mode de représentation à un autre : expression littérale, tableau de valeurs, représentation graphique",
    "Lire et interpréter une image et un antécédent sur un graphique ou un tableau, en maîtrisant la notation $f(x)$ — c'est le socle que la seconde réutilise sans le réenseigner"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "La notion de fonction, le vocabulaire image / antécédent, la notation " +
        "$f(x)$ et les trois modes de représentation — expression, tableau, graphique — " +
        "sont pleinement au programme de troisième. C'est même l'une des rares notions " +
        "véritablement NOUVELLES de l'année, et non un approfondissement du cycle 4.<br/><br/>" +
        "Deux points demandent une vigilance particulière, non parce qu'ils sortent du " +
        "programme, mais parce qu'ils s'en approchent de très près.<br/><br/>" +
        "D'abord le <strong>domaine de définition</strong>, présent dans les définitions du " +
        "cours avec l'exemple $f(x) = \\dfrac{1}{x}$. La notion elle-même n'est pas exigible " +
        "au collège : au brevet, toutes les fonctions proposées sont définies partout. Le " +
        "mentionner en classe est utile — cela évite de laisser croire qu'une expression " +
        "calcule toujours — mais il ne faut ni en faire un objet d'évaluation, ni introduire " +
        "les notations d'intervalles, qui appartiennent à la seconde.<br/><br/>" +
        "Ensuite les <strong>fonctions du second degré</strong>, qui apparaissent dans " +
        "l'exemple du cours ($f(x) = 2x^2 - 3$), dans le schéma de lecture graphique et dans " +
        "une tâche du générateur. Elles ne sont PAS au programme comme objet d'étude : la " +
        "parabole, ses variations, son sommet relèvent de la seconde et de la première. Elles " +
        "figurent ici pour une raison précise et légitime — ce sont les seules fonctions " +
        "simples où un nombre possède <strong>deux</strong> antécédents. Sans elles, l'élève " +
        "sort de troisième en croyant qu'un antécédent est toujours unique, ce qui est faux " +
        "et le gênera immédiatement au lycée. On les utilise donc comme " +
        "<strong>contre-exemple</strong>, jamais comme contenu à maîtriser : on demande de " +
        "résoudre $x^2 = 9$, on ne demande pas d'étudier la fonction carré.<br/><br/>" +
        "Un dernier mot sur le <strong>test de la droite verticale</strong> du second schéma : " +
        "il n'est pas au programme sous ce nom, mais il rend visible l'unicité de l'image, " +
        "qui l'est. À traiter comme un outil de lecture, pas comme un théorème à réciter.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     POURQUOI CINQ ET NON QUATRE. Les quatre premières sont quatre confusions
     DIFFÉRENTES, et les fusionner ferait disparaître ce qui les distingue en
     classe : la 1 porte sur le sens de lecture, la 2 sur la nature de
     l'opération (remplacer / résoudre), la 3 sur la notation elle-même, la 4
     sur le sens dans lequel joue l'unicité. La cinquième, comme dans toutes
     les fiches de troisième, porte sur la RÉDACTION.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Confondre l'image et l'antécédent",
      eleve: "On demande l'antécédent de $17$ par $f(x) = 3x + 2$. L'élève écrit " +
             "$f(17) = 3 \\times 17 + 2 = 53$, et conclut « l'antécédent de $17$ est $53$ ». " +
             "Dans l'autre sens, à la question « quelle est l'image de $2$ ? » sur un tableau, " +
             "il donne la valeur lue sur la ligne du haut au lieu de celle du bas.",
      cause: "Les deux mots désignent les deux extrémités d'une même flèche, et rien dans " +
             "l'énoncé ne dit lequel est donné. L'élève dispose de trois nombres — celui de " +
             "l'énoncé, l'expression, le résultat — et d'une seule opération qu'il sait faire : " +
             "remplacer. Il remplace donc, quelle que soit la question posée. Le calcul est " +
             "exact, et c'est ce qui rend l'erreur invisible pour lui : rien dans sa copie ne " +
             "porte de trace de faute.<br/><br/>" +
             "S'ajoute une difficulté de vocabulaire pure : « antécédent » est un mot rare, " +
             "abstrait, sans appui dans la langue courante, alors qu'« image » évoque une " +
             "photographie — c'est-à-dire un résultat. Le mot le plus opaque désigne l'entrée, " +
             "le mot le plus familier désigne la sortie, et cela ne joue pas en faveur de " +
             "l'élève.",
      remede: "Installer <strong>une seule question réflexe</strong>, à poser avant tout " +
              "calcul : « qu'est-ce qu'on me donne ? ». Si on donne un $x$, la réponse cherchée " +
              "est une image, et on remplace. Si on donne une valeur de $f(x)$, la réponse " +
              "cherchée est un antécédent, et on résout. Cette question tient en cinq mots et " +
              "règle l'erreur dans les deux sens.<br/><br/>" +
              "Le schéma « Une image se lit vers le haut, un antécédent vers le bas » du cours " +
              "est construit exactement pour cela : les <strong>mêmes</strong> points, les " +
              "<strong>mêmes</strong> traits, et pour seule différence le sens de parcours du " +
              "regard. Le faire commenter à voix haute, en faisant suivre le trajet avec le " +
              "doigt, obtient plus que n'importe quelle définition relue.<br/><br/>" +
              "Un geste de classe très rentable, et qui prend dix minutes : distribuer six " +
              "questions mélangées portant sur la même fonction, et demander non pas de les " +
              "résoudre mais de les TRIER en deux colonnes, « image » et « antécédent ». On " +
              "traite le diagnostic séparément du calcul, et l'on découvre souvent que l'élève " +
              "sait parfaitement calculer dès qu'il sait ce qu'on lui demande.<br/><br/>" +
              "Exiger enfin le <strong>contrôle par substitution</strong> : quand on a trouvé un " +
              "antécédent, on le remet dans la fonction et on doit retomber sur la valeur de " +
              "départ. Yanis, qui répond $53$, aurait vu que $f(53) = 161 \\neq 17$.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est la tâche 'antecedent' — « le coût d'une commande est
         $C(x) = 5x + 2$, combien d'articles pour exactement 27 € ? ». C'est
         précisément la question qui déclenche l'erreur, et la solution imprimée
         commence par nommer le piège (« il faut résoudre une équation, et non
         appliquer la fonction à 27 ») puis se termine par le contrôle par
         substitution que le remède demande d'exiger. L'exercice 8 (tâche
         'lecture' sur tableau) travaille la même confusion sans aucun calcul,
         et fait un bon préalable pour les élèves les plus fragiles. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Chercher un antécédent en calculant au lieu de résoudre",
      eleve: "Pour trouver l'antécédent de $23$ par $f(x) = 4x - 5$, l'élève tente de " +
             "« défaire » la fonction de tête et écrit $23 : 4 = 5{,}75$ puis $5{,}75 - 5 = 0{,}75$, " +
             "au lieu de poser l'équation $4x - 5 = 23$.",
      cause: "L'élève a bien compris qu'il faut remonter — il ne confond donc plus les deux " +
             "sens, ce qui est déjà un progrès sur l'erreur précédente. Ce qui lui manque, " +
             "c'est l'ordre : il défait les opérations dans le sens de lecture de l'expression " +
             "plutôt que dans l'ordre inverse, et il oublie de changer chaque opération en son " +
             "contraire. C'est la mécanique du « programme de calcul à l'envers », vue au cycle " +
             "4, appliquée sans sa règle d'inversion.<br/><br/>" +
             "Il y a une raison de fond : personne ne lui a dit que l'équation était OBLIGATOIRE. " +
             "Sur les exemples simples du début de chapitre, remonter de tête marche. L'élève " +
             "en conclut, raisonnablement, que l'équation est une façon lente de faire ce qu'il " +
             "fait vite.",
      remede: "Ne pas interdire le calcul mental, mais le <strong>mettre en échec</strong>. " +
              "Proposer volontairement une fonction où remonter de tête devient pénible : " +
              "$f(x) = 7x + 13$ et l'antécédent de $90$. L'élève qui tente l'inversion mentale " +
              "s'embrouille en trois secondes ; celui qui pose $7x + 13 = 90$ conclut en deux " +
              "lignes. L'argument n'est alors plus l'autorité du professeur mais l'efficacité, " +
              "et il tient.<br/><br/>" +
              "Nommer ensuite clairement ce qui se passe : chercher un antécédent, c'est " +
              "<strong>résoudre une équation</strong>, et ce chapitre n'introduit aucune " +
              "technique nouvelle pour cela. Tout est déjà connu depuis le chapitre sur les " +
              "équations. Le dire soulage beaucoup d'élèves, qui croient devoir apprendre une " +
              "méthode de plus.<br/><br/>" +
              "Le schéma « Un antécédent ne se calcule pas, il se résout » du cours met les deux " +
              "démarches l'une au-dessus de l'autre, avec la même donnée. L'encadré du haut se " +
              "termine par une vérification ; celui du bas n'en a aucune à proposer, et c'est " +
              "l'argument décisif.<br/><br/>" +
              "Pour les élèves qui butent sur l'équation elle-même — et non sur le fait qu'il " +
              "en faut une —, la remédiation utile est de retourner au chapitre sur les " +
              "équations et inéquations : la difficulté n'est pas ici.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 11 est la
         seconde tâche 'antecedent' du tirage (« le nombre de vues suit
         N(x) = 6x + 2, au bout de combien de jours atteint-elle 50 milliers ? »),
         mais il porte un numéro AU-DELÀ de 8 : seuls les huit premiers
         exercices sont numérotés dans le livre, on ne peut donc pas y renvoyer.
         On renvoie donc à l'exercice 1, la tâche 'antecedent' numérotée, dont
         la solution pose explicitement l'équation ligne par ligne — c'est bien
         la démarche que ce remède cherche à installer, et non seulement le
         diagnostic travaillé par l'erreur précédente. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Lire $f(x)$ comme un produit",
      eleve: "L'élève écrit $f(3) = f \\times 3$, ou simplifie $\\dfrac{f(6)}{f(2)}$ en $3$, " +
             "ou encore affirme que $f(a + b) = f(a) + f(b)$ parce que « on distribue ».",
      cause: "Depuis la cinquième, deux symboles accolés avec une parenthèse signifient une " +
             "multiplication : $3(x + 2)$, $a(b - c)$. L'écriture $f(x)$ reprend exactement " +
             "cette forme graphique pour dire tout autre chose, et rien ne prévient l'élève du " +
             "changement de convention. Ce n'est pas une inattention, c'est un conflit réel " +
             "entre deux conventions d'écriture que les mathématiques ont laissé cohabiter.<br/><br/>" +
             "La troisième affirmation est plus profonde : l'élève applique la distributivité, " +
             "qui est une propriété de la multiplication, à un objet qui n'en est pas une. " +
             "Tant que $f$ est perçue comme un facteur, cette généralisation est logique.",
      remede: "Attaquer l'erreur par la <strong>lecture à voix haute</strong>, qui règle le " +
              "conflit en une phrase. On ne lit jamais « $f$ de $x$ » comme « $f$ fois $x$ » : " +
              "on lit « l'image de $x$ par $f$ ». Faire lire ainsi systématiquement pendant " +
              "deux séances, y compris au tableau, y compris dans les corrections.<br/><br/>" +
              "Proposer ensuite un <strong>contre-exemple qui tranche</strong>, car aucun " +
              "discours ne vaut un calcul faux rendu visible. Avec $f(x) = x + 5$ : " +
              "$f(2) = 7$ et $f(3) = 8$, alors que $f(2 + 3) = f(5) = 10$, qui ne vaut " +
              "manifestement pas $7 + 8 = 15$. La règle fautive est réfutée en trois lignes, " +
              "par les élèves eux-mêmes.<br/><br/>" +
              "Un troisième appui, très efficace avec les élèves visuels : dessiner la fonction " +
              "comme une <strong>machine</strong> — une boîte avec une entrée à gauche, une " +
              "sortie à droite, et le nom $f$ écrit SUR la boîte, pas à côté du nombre. Le nom " +
              "de la machine n'est pas un facteur, il est l'étiquette de l'opération.<br/><br/>" +
              "Aucun exercice de ce chapitre ne travaille cette erreur de front, et il faut le " +
              "dire : tous les énoncés donnent une expression explicite, si bien que l'élève " +
              "calcule sans jamais avoir à interpréter la notation seule. La remédiation se " +
              "fait donc au tableau, sur les contre-exemples ci-dessus, ou en lecture à voix " +
              "haute lors des corrections — pas sur une tâche écrite.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         les huit exercices numérotés du chapitre demandent tous de PRODUIRE un
         nombre à partir d'une expression donnée. Aucun ne demande d'interpréter
         l'écriture f(x) elle-même, ni de juger une égalité du type
         f(a+b) = f(a) + f(b). Pointer l'un d'eux enverrait l'enseignant vers un
         exercice que l'élève réussira sans jamais rencontrer sa propre erreur.
         Le remède dit explicitement où la remédiation doit avoir lieu. */
      exercice: null
    },
    {
      titre: "Croire qu'un antécédent est toujours unique",
      eleve: "Pour $f(x) = x^2 - 2$ et les antécédents de $7$, l'élève résout $x^2 = 9$ puis " +
             "écrit « $x = 3$ », et s'arrête. Réciproquement, devant un tableau où la valeur " +
             "$19$ apparaît deux fois, il déclare « ce n'est pas une fonction ».",
      cause: "Toute la scolarité antérieure a entraîné à trouver LA réponse, au singulier. Une " +
             "question de mathématiques a une réponse : c'est un contrat implicite de dix ans, " +
             "et il n'a jamais été contredit avant ce chapitre.<br/><br/>" +
             "S'ajoute une confusion sur le sens dans lequel joue l'unicité. L'élève a bien " +
             "retenu qu'« une fonction, c'est une seule valeur », mais il l'applique dans les " +
             "deux sens. Or la règle est <strong>asymétrique</strong> : une image et une seule " +
             "pour chaque entrée, mais autant d'antécédents qu'on veut pour une même sortie. " +
             "Rien dans l'énoncé de la définition ne signale visuellement cette asymétrie, et " +
             "c'est elle qui produit les deux moitiés de l'erreur.",
      remede: "Faire vivre l'asymétrie plutôt que l'énoncer. Prendre une situation où la " +
              "lecture dans les deux sens est évidente : la température d'une pièce heure par " +
              "heure. À une heure donnée correspond une seule température — sinon le thermomètre " +
              "serait cassé. Mais la même température peut très bien revenir deux fois dans la " +
              "journée, et personne ne trouve cela étrange.<br/><br/>" +
              "Le schéma « Une image se lit vers le haut, un antécédent vers le bas » montre " +
              "exactement cela sur la courbe de $f(x) = x^2 - 1$ : la droite horizontale " +
              "$y = 3$ coupe la courbe en <strong>deux</strong> points, alors que la verticale " +
              "issue de $x = 2$ n'en rencontre qu'un. Deux droites, deux réponses différentes, " +
              "la même courbe.<br/><br/>" +
              "Le schéma « Le test de la droite verticale » complète le dispositif en montrant " +
              "ce qu'une fonction interdit vraiment : une verticale qui coupe deux fois. Faire " +
              "glisser une règle sur les deux dessins, physiquement, vaut mieux que de le " +
              "décrire.<br/><br/>" +
              "Enfin, une <strong>habitude d'écriture</strong> à installer et à exiger : quand " +
              "on résout $x^2 = 9$, on écrit « $x = 3$ <strong>ou</strong> $x = -3$ », jamais " +
              "$x = 3$ seul. Le mot « ou » n'est pas un ornement : il est la réponse.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est la tâche
         'carre' — « l'aire d'un motif carré augmentée d'une bordure fixe,
         f(x) = x² - 2, on cherche les antécédents de 7 ». L'énoncé ANNONCE
         lui-même qu'il y a deux antécédents opposés et demande le plus grand,
         ce qui est exactement le bon niveau pour une remédiation : l'élève
         n'a pas à découvrir la multiplicité ET à la gérer du même coup, il
         l'observe d'abord. Sa solution imprimée se termine par la phrase que
         le remède cherche à faire retenir (« une image est toujours unique,
         mais un antécédent peut être multiple »). L'exercice 10 est la seconde
         occurrence de la même tâche, utilisable en entraînement. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Donner un nombre sans dire de quoi il est la réponse",
      eleve: "À la question « le point $(3\\,;\\,16)$ appartient-il à la courbe de " +
             "$f(x) = 4x + 1$ ? », l'élève écrit seulement « $13$ », ou « oui ». Aucune phrase " +
             "ne dit ce qu'est $13$, ni pourquoi cela répond à la question posée.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que " +
             "le résultat EST le travail. Or le brevet évalue un raisonnement écrit, et une " +
             "réponse exacte sans justification y perd l'essentiel des points. Ce n'est pas de " +
             "la négligence, c'est un contrat implicite qui a changé sans qu'on le dise.<br/><br/>" +
             "Sur ce chapitre précisément, l'omission est aggravée par un fait de langue : les " +
             "nombres manipulés n'ont pas d'unité et se ressemblent tous. Dans une copie, rien " +
             "ne distingue une image d'un antécédent, d'une abscisse ou d'une ordonnée — sauf " +
             "la phrase que l'élève n'a pas écrite. Le correcteur ne peut donc pas savoir si " +
             "l'élève a compris, et l'élève lui-même ne peut plus se relire.",
      remede: "Exiger une <strong>phrase de sortie</strong>, courte, sur chaque réponse, et " +
              "l'écrire au tableau comme un modèle unique : « $f(3) = 13$, donc l'image de $3$ " +
              "est $13$ » ; « $x = 5$, donc l'antécédent de $17$ est $5$ ». Une ligne, jamais " +
              "plus, mais toujours.<br/><br/>" +
              "Sur les questions d'appartenance, la phrase doit contenir la " +
              "<strong>comparaison</strong>, car c'est elle qui démontre : « $f(3) = 13$, or " +
              "l'ordonnée annoncée est $16$ ; les deux diffèrent, donc le point n'appartient " +
              "pas à la courbe ». Un « non » seul n'est pas une réponse fausse, c'est une " +
              "réponse non démontrée — et la nuance est exactement celle que le brevet évalue.<br/><br/>" +
              "Un geste de classe rapide et frappant : projeter trois copies anonymes portant " +
              "le <strong>même</strong> nombre juste, l'une sans phrase, l'une avec une phrase " +
              "vague, l'une avec la comparaison écrite, et faire attribuer les points par les " +
              "élèves eux-mêmes. Ils barèment plus sévèrement que le professeur, et la " +
              "discussion qui suit dispense de tout discours sur la rigueur.<br/><br/>" +
              "Accepter toute formulation personnelle, mais jamais l'absence de formulation : " +
              "on évalue un raisonnement écrit, pas une mise en page.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 est la tâche
         'appartient' — « on a tracé la courbe de f(x) = 4x + 1, le point
         (3 ; 16) appartient-il à cette courbe ? ». C'est le meilleur support du
         chapitre pour exiger la rédaction : la réponse attendue par le site est
         un simple 1 ou 0, donc le nombre seul ne prouve RIEN et l'élève ne peut
         pas s'en tirer par le résultat. Sa solution imprimée commence par la
         phrase de principe (« un point appartient à la courbe lorsque son
         ordonnée est l'image de son abscisse ») puis énonce la comparaison
         complète — soit exactement le modèle de rédaction que le remède
         demande d'obtenir. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     LES QUATRE DERNIÈRES QUESTIONS ONT ÉTÉ RÉÉCRITES dans
     js/data/3e/3e-fonctions.js le 2026-09-13, et les commentaires de ce fichier
     en gardent la trace : l'évaluation était auparavant composée de cinq
     applications numériques, dont trois identiques dans leur démarche. Déclarer
     une compétence ne suffit pas, la question doit la MOBILISER.

     Q1 applique la fonction à un nombre donné : $f(4)$ pour $f(x) = 3x - 7$.
     C'est une substitution, sans aucun choix de méthode. « calculer », et rien
     d'autre — la tentation de l'appeler « raisonner » doit être écartée.

     Q2 donne un tableau de valeurs complet et demande laquelle de quatre
     affirmations le décrit correctement. L'énoncé précise qu'aucun calcul n'est
     nécessaire, et c'est vrai : tout se lit. L'élève doit circuler dans une
     représentation tabulaire dans les deux sens, ligne du haut vers ligne du
     bas et retour. C'est « représenter » au sens plein — passer d'un mode de
     représentation à la lecture d'une information —, et c'est la meilleure
     occasion du niveau de placer honnêtement cette compétence, que les
     chapitres de calcul ne permettent jamais d'évaluer.

     Q3 confronte deux relevés et demande lequel est IMPOSSIBLE pour une
     fonction, et pourquoi. Aucun calcul n'est possible : il faut revenir à la
     définition et voir dans quel sens joue l'unicité. C'est « raisonner ».

     Q4 donne $f(x) = 4x - 5$, dit que $a$ a pour image $23$, et demande l'image
     de $a + 2$. Rien dans l'énoncé n'annonce qu'il faut d'abord retrouver $a$
     par une équation : la donnée utile n'est pas celle qu'on croit, et aucune
     étape n'est signalée. C'est « chercher ».

     Q5 soumet le raisonnement chiffré d'un élève nommé et demande d'expliquer
     pourquoi il échoue. On produit une explication, pas un nombre — et la
     bonne option est précisément celle qui formule correctement la distinction.
     C'est « communiquer ». L'erreur jugée est celle que cette fiche traite en
     premier, ce qui referme la boucle entre le diagnostic, le schéma du cours
     et l'évaluation. */
  competences: {
    evaluation: ["calculer", "représenter", "raisonner", "chercher", "communiquer"]
  }
};
