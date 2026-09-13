/* =========================================================
   Spark Learning – js/data/prof/3e/3e-stats-probas.prof.js
   Fiche professeur du chapitre « Statistiques et probabilités
   (approfondissement) » (troisième), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote 3e-thales.prof.js.

   LE CHAPITRE LE PLUS HORS-PROGRAMME DU NIVEAU, ET IL FAUT LE DIRE D'EMBLÉE.
   Les probabilités conditionnelles et l'indépendance ne sont PAS au programme
   du collège : elles appartiennent à la première. La `note` ci-dessous le dit
   franchement et détaille ce qui reste exigible. L'enseignant qui prépare un
   contrôle de troisième doit savoir, avant d'ouvrir le chapitre, qu'une partie
   substantielle de ce qu'il y lira ne peut pas être évaluée.

   Cela ne rend pas le chapitre inutile — il est même précieux pour les élèves
   destinés à une seconde générale, et le vocabulaire « parmi les… » se travaille
   très bien en troisième sans aucune notation savante. Mais la ligne de partage
   doit être tracée par le professeur, pas découverte par l'élève le jour du
   brevet.

   ORIENTATION DES ERREURS. Quatre des cinq erreurs ci-dessous portent sur une
   seule et même difficulté, déclinée : savoir PAR QUOI ON DIVISE. C'est la
   difficulté réelle du chapitre, et c'est aussi celle qui survit au collège —
   un adulte qui lit mal une statistique médicale commet exactement l'erreur 1.

   ATTENTION, POINT DE VIGILANCE SUR LA BANQUE. Vérifié le 2026-09-13 sur le
   tirage réel de la graine du livre : les douze exercices tirés sont tous la
   MÊME tâche — « n(A) et n(A∩B) sont donnés, calcule f(B|A) » — dans six décors
   (entreprise, hôpital, festival, élevage, lycée, bibliothèque). Aucun ne
   demande une fréquence globale, aucun ne fait lire un tableau croisé à double
   entrée, aucun ne teste l'indépendance. Trois remédiations sont donc SANS
   RENVOI, et le disent.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-stats-probas"] = {

  /* AUCUN prérequis parmi les chapitres de troisième, et c'est un choix
     défendu, pas un oubli.

     Ce chapitre ne mobilise rien de ce que la troisième enseigne : ni calcul
     littéral, ni équation, ni fonction, ni géométrie. Ce dont il a besoin —
     fractions, proportions, pourcentages, notion de fréquence — a été construit
     au cycle 4 et n'appartient à aucun chapitre de l'année.

     Conséquence pratique, et c'est une bonne nouvelle pour l'enseignant : ce
     chapitre est LIBRE dans la progression. Il peut se placer tôt pour occuper
     une période où le socle calculatoire n'est pas encore installé, servir de
     respiration après un bloc algébrique, ou se traiter en fin d'année. Aucun
     autre chapitre du niveau n'en dépend non plus.

     Le rang 7 proposé ci-dessous n'est donc pas une contrainte de dépendance,
     mais un équilibre de progression. */
  prerequis: [],

  /* Rang conseillé (2026-09-13) : rang 7. Le chapitre s'intercale entre le bloc
     des fonctions (rangs 5 et 6) et l'ouverture de la géométrie (Thalès au
     rang 8, homothéties au rang 9).

     Cette place se justifie par un argument de rythme plutôt que de contenu.
     Les rangs 1 à 6 forment une longue séquence algébrique — calcul littéral,
     équations, fonctions — qui demande beaucoup aux élèves fragiles. Le
     chapitre de statistiques offre une respiration : il se travaille sur des
     effectifs entiers, il parle de situations concrètes, et il permet de
     reprendre confiance avant d'entamer la géométrie.

     Il gagne aussi à ne pas être relégué en fin d'année, où il serait traité
     vite. Les confusions qu'il installe — ou qu'il corrige — sur la lecture des
     proportions sont parmi les plus durables de la scolarité, et méritent le
     temps qu'une place en milieu d'année permet de leur donner.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 7,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Organisation et gestion de données, probabilités ».
  attendus: [
    "Recueillir, organiser et lire des données dans un tableau à double entrée, en utilisant correctement les marges",
    "Calculer et interpréter des effectifs, des fréquences et des proportions, en précisant toujours la population de référence",
    "Calculer des probabilités dans des situations simples d'équiprobabilité, et les exprimer sous forme de fraction, de décimal ou de pourcentage",
    "Déterminer la probabilité d'une réunion ou d'une intersection d'événements dans des cas simples, sans double comptage"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. Ici le
     débordement est massif, et la note est donc plus longue que celle des
     autres chapitres : c'est le service le plus utile que cette fiche puisse
     rendre. */
  note: "Ce chapitre est <strong>le plus hors-programme du niveau</strong>, et il vaut mieux " +
        "le savoir avant de préparer une évaluation.<br/><br/>" +
        "Ce qui est bien au programme de troisième : la lecture et la construction d'un " +
        "<strong>tableau à double entrée</strong>, le calcul de <strong>fréquences</strong> et " +
        "de proportions, le calcul de probabilités dans des situations d'équiprobabilité, et " +
        "la probabilité d'une réunion ou d'une intersection dans des cas simples. Tout cela " +
        "peut et doit être évalué.<br/><br/>" +
        "Ce qui <strong>déborde largement</strong>, en revanche, ce sont les " +
        "<strong>probabilités conditionnelles</strong> et l'<strong>indépendance</strong>. La " +
        "notation $P(A|B)$, la formule $P(A \\cap B) = P(A|B) \\times P(B)$ et le critère " +
        "$P(A|B) = P(A)$ appartiennent au programme de <strong>première</strong>, pas au " +
        "collège. Ils figurent ici — définitions, formules, récapitulatif, et la totalité de " +
        "la banque d'exercices — parce qu'ils donnent au chapitre sa cohérence, mais ils ne " +
        "peuvent être exigés ni au brevet, ni dans une évaluation de troisième.<br/><br/>" +
        "La ligne de partage est heureusement simple à tenir, et elle est " +
        "<strong>linguistique</strong>. La <em>question</em> « parmi les filles, quelle " +
        "proportion fait du sport ? » est parfaitement légitime en troisième : c'est une " +
        "fréquence calculée sur une sous-population, rien de plus. C'est la " +
        "<em>notation</em> $P(S|F)$ et le <em>vocabulaire</em> de probabilité conditionnelle " +
        "qui débordent. On peut donc travailler toute la substance du chapitre en disant " +
        "« parmi les… » et en écrivant des fractions d'effectifs, sans jamais introduire la " +
        "barre verticale.<br/><br/>" +
        "Recommandation pratique : traiter les tableaux croisés et les fréquences " +
        "conditionnelles <strong>en français</strong>, garder la notation $P(A|B)$ comme " +
        "ouverture orale pour les élèves qui iront en seconde générale, et ne jamais " +
        "l'évaluer. L'<strong>indépendance</strong>, elle, est à réserver entièrement à une " +
        "ouverture : le critère est subtil, il se confond avec l'incompatibilité, et un élève " +
        "de troisième n'a aucun moyen de trancher.<br/><br/>" +
        "Un mot enfin sur le <strong>diagramme de Venn</strong> du cours. Il n'est pas un " +
        "objet du programme, mais il n'est pas non plus hors-programme : c'est un outil de " +
        "représentation, et il est le meilleur support pour faire comprendre pourquoi on " +
        "soustrait l'intersection dans un calcul de réunion. À utiliser sans hésiter, sans en " +
        "faire un objet à maîtriser pour lui-même.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     TROIS SONT SANS RENVOI. La banque du chapitre ne contient qu'une tâche —
     calculer f(B|A) à partir de n(A) et n(A∩B) —, si bien qu'elle ne fait
     jamais lire un tableau croisé, jamais calculer une fréquence globale,
     jamais dénombrer une réunion. Les erreurs portant sur ces gestes n'ont
     donc aucun support d'entraînement, et chaque remède le dit en indiquant
     où trouver la remédiation utile.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les deux renvois ci-dessous
       ont été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Diviser par le total général au lieu de la sous-population",
      eleve: "Sur $200$ personnes dont $80$ boivent du café et $20$ boivent café et thé, on " +
             "demande la proportion de buveurs de thé parmi les buveurs de café. L'élève écrit " +
             "$\\dfrac{20}{200} = 0{,}1$, soit $10\\%$, au lieu de " +
             "$\\dfrac{20}{80} = 0{,}25$, soit $25\\%$.",
      cause: "Depuis le cycle 3, une fréquence se calcule en divisant par l'effectif total. La " +
             "règle a toujours été vraie, elle n'a jamais eu d'exception, et le total général " +
             "est de surcroît le nombre le plus visible de l'énoncé — c'est souvent le premier " +
             "donné. L'élève applique une règle solide à une question qui en demande une " +
             "autre.<br/><br/>" +
             "Le déclencheur précis est le mot « <strong>parmi</strong> », qui change la " +
             "population de référence et qui passe inaperçu : c'est un mot de trois syllabes " +
             "dans une phrase longue, sans mise en forme, sans symbole. Toute l'information " +
             "qui distingue les deux calculs tient dans ce mot, et rien ne le signale.<br/><br/>" +
             "C'est l'erreur la plus durable du chapitre, et elle survit très largement au " +
             "collège : elle est la source ordinaire des contresens sur les statistiques " +
             "médicales ou sociales dans la presse.",
      remede: "Faire du mot « parmi » un <strong>signal typographique</strong> et non un mot " +
              "comme un autre : le faire souligner ou entourer dans chaque énoncé, avant tout " +
              "calcul. Puis exiger de dire à voix haute la phrase complète : « parmi les " +
              "<strong>buveurs de café</strong>, donc je divise par le nombre de buveurs de " +
              "café ». La population de référence est nommée avant que le stylo ne bouge.<br/><br/>" +
              "Installer une <strong>règle d'écriture</strong> qui rend l'erreur impossible : " +
              "on écrit toujours le dénominateur EN PREMIER, en le nommant. « Référence : les " +
              "$80$ buveurs de café. » Ensuite seulement on cherche le numérateur. L'ordre " +
              "habituel — numérateur d'abord — laisse le dénominateur se remplir par défaut " +
              "avec le nombre le plus disponible, qui est le total.<br/><br/>" +
              "Un geste de classe qui frappe, et qui prend un quart d'heure : donner UN tableau " +
              "croisé et SIX questions qui portent toutes sur la même case, en changeant " +
              "seulement la référence — « quelle proportion de la classe ? », « parmi les " +
              "filles ? », « parmi les sportifs ? ». Les six réponses diffèrent, la case n'a " +
              "pas bougé. Les élèves découvrent que le numérateur n'est pas ce qui fait la " +
              "réponse.<br/><br/>" +
              "Terminer par le <strong>contrôle de vraisemblance</strong> : une proportion " +
              "calculée sur une sous-population est toujours plus grande que la même quantité " +
              "rapportée au total. Trouver $10\\%$ là où on attendait « parmi les buveurs de " +
              "café » doit alerter avant même la relecture.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « dans un élevage de 153 animaux, 61 ont été vaccinés
         (A), dont 12 portent aussi une puce (B) ; quelle est la fréquence
         conditionnelle de B parmi les animaux vaccinés ? ». C'est exactement la
         configuration qui déclenche l'erreur : le total général (153) est donné
         en premier, il est le plus grand nombre de l'énoncé, et il ne sert
         strictement à rien dans le calcul. L'élève qui divise par 153 au lieu
         de 61 produit la faute type. La solution imprimée affiche la fraction
         complète, dénominateur nommé, ce qui rend la comparaison immédiate.
         Les huit exercices numérotés sont tous bâtis sur ce même modèle, avec
         un total général inutile : n'importe lequel conviendrait. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Additionner les effectifs sans retirer l'intersection",
      eleve: "Dans une classe de $40$ élèves, $24$ font du sport, $10$ jouent d'un instrument, " +
             "$6$ font les deux. L'élève écrit « $24 + 10 = 34$, donc $40 - 34 = 6$ élèves ne " +
             "font ni l'un ni l'autre », au lieu de $24 + 10 - 6 = 28$ puis $40 - 28 = 12$.",
      cause: "Le mot « et » de « $6$ font les deux » est lu comme une information " +
             "supplémentaire, alors qu'il signale un <strong>double comptage déjà commis</strong>. " +
             "Les $6$ élèves concernés figurent une fois dans les $24$ sportifs et une fois dans " +
             "les $10$ musiciens : les additionner les compte deux fois.<br/><br/>" +
             "La difficulté est que l'addition d'effectifs est un réflexe toujours correct " +
             "jusque-là — les groupes rencontrés au cycle 3 et 4 sont disjoints (les filles et " +
             "les garçons, les demi-pensionnaires et les externes). C'est la première fois que " +
             "l'élève rencontre des catégories qui <strong>se chevauchent</strong>, et rien dans " +
             "l'énoncé ne l'avertit du changement de situation.",
      remede: "Ne jamais traiter cette erreur par la formule, toujours par le " +
              "<strong>dessin</strong>. Le diagramme de Venn du cours — $55$ sportifs seuls, " +
              "$25$ dans les deux, $35$ musiciens seuls, $85$ ni l'un ni l'autre — rend le " +
              "double comptage visible : la zone centrale appartient aux deux cercles, donc " +
              "additionner les deux cercles la compte deux fois.<br/><br/>" +
              "Exiger ensuite le <strong>remplissage en partant du centre</strong>, qui est le " +
              "geste qui règle définitivement le problème : on place d'abord l'intersection, " +
              "puis on la retranche de chaque groupe pour obtenir les zones exclusives, puis on " +
              "complète l'extérieur. Fait dans cet ordre, aucun élève ne double-compte — parce " +
              "que chaque personne est placée dans une zone et une seule.<br/><br/>" +
              "Installer aussi un <strong>contrôle par la somme</strong>, qui coûte dix " +
              "secondes : les quatre zones doivent redonner le total. " +
              "$55 + 25 + 35 + 85 = 200$. Si la somme ne tombe pas, le diagramme est faux, et " +
              "on le sait avant de répondre.<br/><br/>" +
              "La formule $|A \\cup B| = |A| + |B| - |A \\cap B|$ peut alors être énoncée — " +
              "mais comme le RÉSUMÉ du dessin, jamais comme son point de départ. Un élève qui " +
              "l'apprend sans avoir vu le chevauchement l'applique à l'envers dès que l'énoncé " +
              "change de tournure.<br/><br/>" +
              "Aucun exercice de la banque ne travaille cette erreur : tous portent sur une " +
              "fréquence conditionnelle, aucun ne fait dénombrer une réunion. La remédiation se " +
              "conduit sur le diagramme de Venn du cours, ou sur le deuxième quiz du chapitre, " +
              "qui pose exactement la question du « ni l'un ni l'autre ».",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), les huit exercices numérotés
         sont tous la même tâche — une division n(A∩B)/n(A) — et aucun ne
         demande de dénombrer une réunion ni de trouver un effectif « ni l'un ni
         l'autre ». Renvoyer à l'un d'eux enverrait l'enseignant vers un
         exercice où le double comptage ne peut structurellement pas se
         produire. Le remède indique les deux supports réels : le diagramme de
         Venn du cours et le quiz 2. */
      exercice: null
    },
    {
      titre: "Inverser les deux termes de la fréquence conditionnelle",
      eleve: "Sur $100$ élèves dont $60$ ont un animal et $40$ font du sport, avec $30$ dans " +
             "les deux, on demande la proportion de sportifs parmi les propriétaires d'animaux. " +
             "L'élève écrit $\\dfrac{30}{40}$ — la proportion de propriétaires parmi les " +
             "sportifs — au lieu de $\\dfrac{30}{60}$.",
      cause: "Cette erreur n'est pas la première déclinée : l'élève a compris qu'il faut " +
             "diviser par une sous-population et non par le total, ce qui est déjà un progrès " +
             "réel. Ce qui lui manque, c'est de savoir <strong>laquelle des deux</strong>.<br/><br/>" +
             "La cause est syntaxique. Dans « la proportion de sportifs parmi les " +
             "propriétaires », les deux groupes apparaissent dans l'ordre inverse de leur rôle " +
             "dans la fraction : le premier nommé va au numérateur mais c'est le second qui " +
             "commande le calcul. La notation $P(A|B)$ reproduit exactement le même piège, " +
             "puisqu'elle écrit aussi la référence en second.<br/><br/>" +
             "Il y a une cause de fond que le professeur gagne à connaître : cette " +
             "<strong>asymétrie n'est pas intuitive</strong>. Rien dans le langage ordinaire ne " +
             "prépare à ce que « proportion de A parmi les B » et « proportion de B parmi les " +
             "A » soient deux nombres différents. C'est précisément cette confusion qui, chez " +
             "l'adulte, fait mal interpréter un test médical.",
      remede: "Faire toujours <strong>reformuler la question en une phrase</strong> avant de " +
              "calculer, en isolant explicitement le groupe de référence : « je ne regarde que " +
              "les $60$ propriétaires d'animaux ; parmi eux, combien font du sport ? ». Le mot " +
              "« <strong>je ne regarde que</strong> » est celui qui fixe le dénominateur, et il " +
              "est plus parlant que « parmi ».<br/><br/>" +
              "Utiliser ensuite un <strong>contraste spectaculaire</strong>, qui est le meilleur " +
              "outil pédagogique disponible sur cette question. Presque tous les joueurs de " +
              "basket professionnels mesurent plus de $1{,}90$ m ; presque aucune personne de " +
              "plus de $1{,}90$ m n'est joueur de basket professionnel. Les deux proportions " +
              "portent sur les mêmes gens et l'une est proche de $100\\%$, l'autre proche de " +
              "zéro. Aucun élève n'oublie cet exemple, et il vaut toutes les définitions.<br/><br/>" +
              "Appuyer enfin sur le <strong>tableau croisé</strong> : les deux fréquences " +
              "conditionnelles sont la même case divisée par deux marges différentes — le total " +
              "de sa ligne, ou le total de sa colonne. Faire entourer la marge utilisée avant " +
              "le calcul transforme une question de vocabulaire en un geste visuel.<br/><br/>" +
              "Un geste de classe efficace : donner un tableau croisé et faire calculer " +
              "SYSTÉMATIQUEMENT les deux fréquences conditionnelles de la même case, côte à " +
              "côte, avec leur phrase. Les élèves constatent qu'elles diffèrent, et comprennent " +
              "que la phrase n'est pas un habillage du calcul : elle EST le calcul.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est « lors
         d'un festival de 119 spectateurs, 60 ont un pass VIP (A), dont 18
         publient des photos (B) ; fréquence conditionnelle de B parmi les
         détenteurs du pass VIP ». Le renvoi est utile ici pour une raison
         précise : l'énoncé nomme explicitement le groupe de référence (« parmi
         les détenteurs du pass VIP ») et sa solution écrit la fraction avec le
         dénominateur nommé, ce qui permet de vérifier l'appariement. La limite,
         à connaître : cette banque ne donne jamais n(B) séparément, donc
         l'élève ne peut pas matériellement inverser les deux termes — il ne
         dispose pas du mauvais dénominateur. L'exercice sert donc à ancrer le
         geste correct, pas à mettre l'erreur à l'épreuve ; le contraste
         « basket » du remède reste le support qui la traite de front. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre « incompatible » et « indépendant »",
      eleve: "Devant deux événements qui ne peuvent pas se produire en même temps — tirer un " +
             "roi et tirer une dame —, l'élève affirme « ils sont indépendants, puisqu'ils n'ont " +
             "rien à voir l'un avec l'autre ». Variante : il écrit " +
             "$P(A \\cap B) = P(A) + P(B)$.",
      cause: "Les deux mots appartiennent au langage courant, où ils veulent dire à peu près la " +
             "même chose : « sans rapport ». En mathématiques ils désignent deux propriétés " +
             "opposées, et l'intuition langagière conduit exactement au contresens — deux " +
             "événements incompatibles sont, au contraire, fortement dépendants, puisque savoir " +
             "que l'un s'est produit garantit que l'autre ne s'est pas produit.<br/><br/>" +
             "Le second symptôme vient d'une confusion de formules : $P(A \\cup B) = P(A) + P(B)$ " +
             "vaut pour des événements <strong>incompatibles</strong>, et " +
             "$P(A \\cap B) = P(A) \\times P(B)$ pour des événements " +
             "<strong>indépendants</strong>. Quatre symboles, deux formules, deux conditions : " +
             "l'élève mémorise les formules et perd les conditions.<br/><br/>" +
             "Il faut ajouter une cause qui n'est pas l'élève : cette notion " +
             "<strong>n'est pas au programme du collège</strong>. La confusion est ici le " +
             "symptôme normal d'un contenu de première abordé en troisième, et non un déficit " +
             "de compréhension.",
      remede: "Avant tout, <strong>décider du statut de la notion</strong>. Comme l'indique la " +
              "place dans le programme, l'indépendance relève de la première : la traiter en " +
              "ouverture orale, pour les élèves qui iront en seconde générale, et ne jamais " +
              "l'évaluer en troisième. Beaucoup de la difficulté disparaît si l'on ne l'exige " +
              "pas.<br/><br/>" +
              "Pour les élèves à qui on l'ouvre, séparer les deux mots par un exemple où la " +
              "réponse est évidente. Deux dés lancés côte à côte : le résultat du premier ne " +
              "renseigne en rien sur le second, ils sont <strong>indépendants</strong>, et ils " +
              "peuvent parfaitement donner $6$ tous les deux. Un seul dé, « faire $2$ » et " +
              "« faire $5$ » : ils ne peuvent pas se produire ensemble, ils sont " +
              "<strong>incompatibles</strong>, et savoir que l'un est arrivé m'apprend " +
              "immédiatement que l'autre n'est pas arrivé — donc ils ne sont pas indépendants " +
              "du tout.<br/><br/>" +
              "Donner la formulation qui tranche, et n'en donner qu'une : " +
              "<strong>incompatibles</strong> = ne peuvent pas arriver ensemble ; " +
              "<strong>indépendants</strong> = savoir que l'un est arrivé ne change rien à la " +
              "probabilité de l'autre. La première parle de ce qui est possible, la seconde de " +
              "ce qu'on apprend.<br/><br/>" +
              "Éviter absolument, en troisième, de faire manipuler les deux formules en " +
              "parallèle : c'est le plus sûr moyen de créer la confusion qu'on cherche à " +
              "éviter. Un seul énoncé à la fois, avec sa condition dite en français.<br/><br/>" +
              "Aucun exercice du chapitre ne porte sur l'indépendance ni sur l'incompatibilité, " +
              "et c'est cohérent avec le fait que la notion n'est pas exigible : la banque ne " +
              "contient que des calculs de fréquence conditionnelle. La remédiation se fait " +
              "entièrement à l'oral, sur les deux exemples de dés ci-dessus.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         vérifié sur le tirage réel (2026-09-13), aucun des huit exercices
         numérotés ne mentionne l'indépendance ni l'incompatibilité — tous
         calculent une seule fréquence conditionnelle. C'est ici un accord
         heureux entre la banque et le programme : la notion n'étant pas
         exigible au collège, il est normal qu'aucun exercice ne l'entraîne.
         Le remède le dit et renvoie à un travail oral. */
      exercice: null
    },
    {
      titre: "Donner une fraction sans dire de quelle population elle parle",
      eleve: "L'élève rend « $\\dfrac{45}{150} = 0{,}30$ » et rien d'autre. Aucune phrase ne " +
             "dit de qui ces $30\\%$ sont la proportion, ni pourquoi c'est $150$ qui figure au " +
             "dénominateur plutôt que $60$.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que " +
             "le résultat EST le travail. Or le brevet évalue un raisonnement écrit, et une " +
             "proportion sans sa population de référence n'est pas une réponse incomplète — " +
             "c'est une réponse <strong>inexploitable</strong>.<br/><br/>" +
             "Sur ce chapitre, l'omission est plus grave qu'ailleurs, et pour une raison " +
             "spécifique : le même nombre au numérateur peut donner trois proportions " +
             "parfaitement correctes selon la référence choisie. $\\dfrac{45}{150}$, " +
             "$\\dfrac{45}{60}$ et $\\dfrac{45}{90}$ sont toutes trois des réponses " +
             "légitimes à trois questions différentes. Sans la phrase, ni le correcteur ni " +
             "l'élève lui-même ne peut savoir laquelle a été calculée — et l'élève ne peut " +
             "donc pas se relire.<br/><br/>" +
             "C'est la difficulté typique de l'année du brevet : le calcul est juste, la " +
             "réponse ne l'est pas, parce qu'il manque la phrase qui lui donne un sens.",
      remede: "Exiger une <strong>phrase d'interprétation</strong> sur chaque proportion, " +
              "courte et toujours bâtie sur le même modèle : « <strong>$30\\%$ des $150$ " +
              "élèves du collège sont en troisième et ont choisi sciences.</strong> » Une " +
              "ligne, jamais plus, mais toujours — et elle doit contenir le mot qui nomme la " +
              "population.<br/><br/>" +
              "Le geste de classe qui convainc le mieux, parce qu'il ne coûte rien et qu'il " +
              "frappe : donner un tableau croisé et trois phrases d'interprétation, dont deux " +
              "fausses, toutes appuyées sur le même calcul juste. Les élèves doivent dire " +
              "laquelle correspond réellement à la fraction écrite. Ils découvrent que le " +
              "calcul ne suffit pas à identifier la réponse.<br/><br/>" +
              "Exiger aussi, dans les situations de tableau, que le " +
              "<strong>dénominateur soit nommé avant le calcul</strong> : « référence : les " +
              "$150$ élèves ». Écrit en premier, il ne peut plus être choisi par défaut, et la " +
              "phrase finale s'écrit toute seule.<br/><br/>" +
              "Un dernier point à faire passer, et c'est celui qui prépare la vie adulte : une " +
              "proportion citée sans sa population de référence n'est pas une information, " +
              "c'est un chiffre. Les élèves rencontreront cette faute toute leur vie dans la " +
              "presse ; savoir la repérer vaut largement le temps qu'on y consacre.<br/><br/>" +
              "Accepter toute formulation personnelle, mais jamais l'absence de formulation : " +
              "on évalue un raisonnement écrit, pas un résultat.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 est « dans un
         lycée, sur 225 élèves, 135 sont inscrits au club théâtre (A), dont 54
         pratiquent aussi la danse (B) ». Trois nombres sont disponibles et deux
         dénominateurs sont plausibles (225 et 135), donc la fraction seule ne
         dit pas quelle question a été traitée : c'est exactement la situation
         qui rend la phrase indispensable. Sa solution imprimée écrit la
         fraction AVEC son interprétation en pourcentage du groupe A (« soit
         40 % du groupe A »), ce qui fournit à l'élève le modèle de phrase que
         le remède demande d'exiger. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     REMARQUE PRÉALABLE, ET ELLE COMPTE : les cinq questions de cette évaluation
     restent toutes DANS le programme de troisième. Aucune ne porte sur
     l'indépendance, aucune n'utilise la notation P(A|B). La question 2 emploie
     l'expression « fréquence conditionnelle », mais le calcul demandé est une
     fréquence sur sous-population, parfaitement exigible. L'évaluation est donc
     utilisable telle quelle, ce qui n'allait pas de soi vu la note ci-dessus.

     Q1 donne trois effectifs et demande combien d'élèves ne pratiquent ni sport
     ni instrument. La démarche n'est PAS annoncée : rien ne dit qu'il faut
     d'abord calculer la réunion, ni surtout qu'il faut retirer l'intersection
     pour éviter un double comptage. L'élève doit reconnaître le chevauchement
     des deux groupes avant tout calcul. C'est « chercher ».

     Q2 demande la fréquence de boire du thé parmi les buveurs de café, avec les
     deux nombres utiles fournis et le mot « parmi » présent. Une fois la
     référence identifiée, c'est une division. « calculer ».

     Q3 demande la probabilité d'obtenir un nombre premier sur un dé. Il faut
     d'abord établir quels nombres de 1 à 6 sont premiers — un travail de
     décision sur une définition, où le cas de 1 sépare les élèves — puis
     conclure. Ce n'est pas une application de formule mais une déduction à
     partir d'une propriété. « raisonner ».

     Q4 oppose quatre fractions toutes calculables et toutes plausibles, et
     demande laquelle est la fréquence GLOBALE. Aucun calcul : il faut décider
     de la population de référence en interprétant le mot « globale ». C'est
     « raisonner », et c'est la question qui évalue le mieux l'erreur 1 de cette
     fiche.

     Q5 demande la probabilité de tirer un as OU un cœur. Le piège est l'as de
     cœur, compté dans les deux ensembles, et rien dans l'énoncé ne le signale.
     Trois des quatre options proposées correspondent à des erreurs de
     dénombrement classiques. L'élève doit voir le chevauchement puis le
     corriger. « raisonner ».

     TROIS « raisonner » : c'est beaucoup, mais c'est honnête. Ce chapitre
     évalue presque exclusivement la capacité à décider PAR QUOI ON DIVISE et à
     repérer un double comptage — deux gestes de raisonnement, pas de calcul.
     Les gonfler en « modéliser » ou « communiquer » serait déclarer des
     compétences que les questions ne mobilisent pas. Les chapitres de
     fonctions (rangs 5 et 6) et de géométrie portent « représenter »,
     « modéliser » et « communiquer » pour le niveau. */
  competences: {
    evaluation: ["chercher", "calculer", "raisonner", "raisonner", "raisonner"]
  }
};
