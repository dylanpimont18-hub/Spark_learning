/* =========================================================
   Spark Learning – js/data/prof/bts/bts-stats-deux-variables.prof.js
   Fiche professeur du chapitre « Statistiques à deux variables » (programme
   BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 21 (ce chapitre est le vingt-deuxième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et ce moule est d'une pauvreté
   remarquable. Chacun donne quatre nombres — $\bar{x}$, $\bar{y}$,
   $\text{Cov}(x,y)$ et $V_x$ — et demande la pente
   $a = \text{Cov}(x,y)/V_x$. La tâche se réduit donc à UNE DIVISION, et,
   détail décisif, les deux moyennes $\bar{x}$ et $\bar{y}$ fournies dans
   l'énoncé sont des DONNÉES PARASITES : elles ne servent jamais au calcul
   demandé.

   Ce que cela implique et qu'il faut avoir en tête avant d'écrire la moindre
   remédiation : l'étudiant peut réussir les douze exercices en repérant
   qu'il faut diviser le troisième nombre par le quatrième. Aucun nuage de
   points n'est tracé, aucune ordonnée à l'origine $b$ n'est calculée, aucun
   coefficient de corrélation $r$ n'est évalué, aucune prévision n'est faite,
   et jamais on ne part de données brutes : la covariance et la variance sont
   TOUJOURS fournies toutes calculées.

   Or quatre des cinq questions de l'évaluation portent sur ce que les
   exercices ne travaillent pas.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-stats-deux-variables"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 3 (Statistiques et Calculs d'Incertitudes, `statistiques`) : RETENU.
     Tout l'appareil de calcul de ce chapitre-ci est construit sur celui du
     chapitre 3, et pas seulement par analogie :
       - la MOYENNE $\bar{x}$ y est définie, et elle intervient ici deux fois
         (dans $\text{Cov} = \overline{xy} - \bar{x}\bar{y}$ et dans
         $b = \bar{y} - a\bar{x}$) ;
       - la VARIANCE $V_x = \overline{x^2} - \bar{x}^2$ est le carré de
         l'écart-type du chapitre 3, et elle est le dénominateur de la pente ;
       - l'écart-type $\sigma_x$ apparaît tel quel dans le coefficient de
         corrélation $r = \text{Cov}/(\sigma_x \sigma_y)$.
     Un étudiant qui n'a pas le chapitre 3 ne peut pas lire la formule de la
     pente : il y voit deux symboles opaques.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Loi normale) : aucun lien opératoire. On pourrait croire que la
       régression suppose une hypothèse de normalité des résidus, ce qui est
       vrai en statistique inférentielle — mais rien de tel n'est abordé ici :
       le chapitre reste entièrement descriptif (moindres carrés, corrélation)
       et ne fait aucun test. Le prérequis serait affiché sans être utilisé,
       ce qui trompe le lecteur du tableau autant qu'un prérequis manquant.
     - ch. 5 (Fonctions réelles) : la droite $y = ax + b$ est une fonction
       affine, mais le chapitre 5 traite de limites, d'asymptotes et de
       tableaux de variations — rien de ce qui sert ici. La fonction affine
       elle-même vient de la remise à niveau, pas du chapitre 5.
     - ch. 6 (Dérivation appliquée) : la droite des moindres carrés MINIMISE
       une somme de carrés, ce qui se démontre par dérivation. Le lien est
       réel mathématiquement — mais la démonstration n'est pas au programme du
       chapitre et n'y figure nulle part : les formules de $a$ et $b$ sont
       données, jamais établies. Prérequis écarté pour la même raison que le
       précédent.
     - ch. 9 (Probabilités discrètes) : aucun lien, et rang supérieur.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la FONCTION AFFINE
     $y = ax + b$ et la lecture de son coefficient directeur, la notion de
     REPÈRE et de coordonnées, et le calcul sur les fractions et les
     décimaux, viennent tous de la REMISE À NIVEAU (`bts-prep`), qui est dans
     un AUTRE dossier. `prerequis` ne vise qu'un chapitre du même dossier,
     donc rien ne les affichera. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 8 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 22 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 8 est celui du livre, et les deux ordres coïncident.

     Le placement est contraint par le chapitre 3 (Statistiques), qui doit
     précéder pour fournir moyenne, variance et écart-type. Il n'est contraint
     par rien d'autre : ce chapitre ne prépare aucun chapitre ultérieur du
     dossier, ce que la colonne « Prépare » du tableau de progression
     montrera par un tiret. C'est donc, avec les matrices (ch. 11), l'un des
     deux chapitres les plus FACILES À DÉPLACER de toute la partie — une
     information utile en mars, quand il faut arbitrer. Le garder ici a
     cependant un avantage : il prolonge naturellement le bloc statistique
     (3, 4) sans en être séparé par trop de chapitres d'analyse. */
  rangConseille: 8,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et l'ajustement affine est présent dans la plupart
     d'entre eux — souvent sous l'angle de la calculatrice ou du tableur
     plutôt que du calcul à la main.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« nuage de points », « droite d'ajustement », « corrélation et
     prévision ») et n'inventent aucune spécialité. La `note` le signale
     explicitement, pour qu'un enseignant vérifie le référentiel de SA filière
     avant de les citer. */
  attendus: [
    "Représenter un nuage de points et apprécier la pertinence d'un ajustement affine",
    "Déterminer l'équation de la droite de régression par la méthode des moindres carrés",
    "Interpréter un coefficient de corrélation et utiliser l'ajustement pour une prévision, en en précisant les limites"
  ],

  note: "Les statistiques à deux variables — nuage de points, covariance, droite des moindres " +
        "carrés, coefficient de corrélation — relèvent du tronc commun de mathématiques du " +
        "BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. Le point de divergence le plus net entre référentiels est ici l'<strong>outil " +
        "attendu</strong> : certains groupements exigent le calcul à la main, d'autres demandent " +
        "explicitement la calculatrice ou le tableur. Vérifiez avant de choisir votre " +
        "progression.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Le chapitre s'appuie " +
        "sur « Statistiques et Calculs d'Incertitudes » (chapitre 3 de cette partie), qui fournit " +
        "moyenne, variance et écart-type — cela, la colonne « S'appuie sur » l'affiche. Mais il " +
        "suppose aussi de savoir lire une <strong>fonction affine</strong> $y = ax + b$ et son " +
        "coefficient directeur, et de se repérer dans un <strong>repère</strong>, qui sont dans la " +
        "<strong>remise à niveau</strong>, l'autre partie de l'ouvrage. Un prérequis ne pouvant " +
        "viser qu'un chapitre de la même partie, <strong>rien ne le montrera</strong> : si le " +
        "groupe ne sait pas ce que « pente » veut dire, c'est là qu'il faut revenir, pas dans ce " +
        "chapitre.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "elle est sévère.</strong> Les douze énoncés numérotés sont <strong>tous le même " +
        "exercice</strong> : quatre nombres sont donnés et l'on demande $a = \\text{Cov}/V_x$. " +
        "La tâche se réduit à <strong>une division</strong>. Pire : $\\bar{x}$ et $\\bar{y}$ sont " +
        "fournis dans les douze énoncés et <strong>ne servent jamais</strong> — ce sont des " +
        "données parasites. Aucun exercice ne trace de <strong>nuage de points</strong>, aucun ne " +
        "calcule l'<strong>ordonnée à l'origine</strong> $b$, aucun n'évalue le <strong>coefficient " +
        "de corrélation</strong> $r$, aucun ne fait de <strong>prévision</strong>, et jamais on ne " +
        "part de données brutes : $\\text{Cov}$ et $V_x$ arrivent toutes calculées.<br/><br/>" +
        "Or <strong>quatre des cinq questions du devoir noté</strong> portent sur ce que les " +
        "exercices ne travaillent pas. L'exemple résolu du cours (les panneaux solaires) fait, lui, " +
        "le chemin complet : moyennes, $\\overline{x^2}$, $\\overline{xy}$, covariance, pente, " +
        "ordonnée, équation, prévision. <strong>C'est lui qu'il faut prendre comme modèle de la " +
        "tâche attendue</strong>, et non les exercices. Prévoir impérativement deux ou trois " +
        "énoncés partant d'un tableau de valeurs brutes, que le manuel ne fournit pas — c'est le " +
        "seul moyen de faire travailler le chapitre pour ce qu'il est.",

  erreurs: [
    {
      titre: "Diviser dans le mauvais sens : $V_x/\\text{Cov}$ au lieu de $\\text{Cov}/V_x$",
      eleve: "Sur $\\text{Cov}(x,y) = 1$ et $V_x = 2$, l'élève annonce $a = 2$ au lieu de " +
             "$a = 0{,}5$. Il a divisé le plus grand par le plus petit, par réflexe, pour éviter " +
             "un résultat inférieur à $1$.",
      cause: "Il y a deux causes distinctes, et elles se renforcent. La première tient à la " +
             "<strong>formule elle-même</strong> : $a = \\text{Cov}(x,y)/V_x$ associe deux " +
             "grandeurs dont rien, dans les symboles, ne dit laquelle est « au-dessus ». Contrairement " +
             "à une vitesse (distance sur temps) ou à un rendement (sortie sur entrée), l'ordre " +
             "n'est pas porté par le sens : il faut le mémoriser. La seconde est une " +
             "<strong>stratégie d'évitement très répandue</strong> chez les adultes en reprise " +
             "d'études : on divise spontanément le grand nombre par le petit, parce qu'un quotient " +
             "inférieur à $1$ « a l'air » d'un résultat raté. Cette stratégie fonctionne dans la " +
             "vie courante, où l'on cherche presque toujours un rapport supérieur à un — et elle " +
             "échoue ici, sans que rien ne prévienne.",
      remede: "Rattacher le dénominateur au <strong>sens de la pente</strong>, une fois, au " +
              "tableau : une pente, c'est « combien $y$ monte quand $x$ augmente de $1$ ». Le " +
              "<strong>« pour un $x$ »</strong> est ce qui met $x$ en bas. C'est la même structure " +
              "que tous les taux que l'étudiant connaît — km par heure, euros par pièce — et, dit " +
              "ainsi, l'ordre cesse d'être arbitraire.<br/><br/>" +
              "Installer un <strong>contrôle de plausibilité par le nuage</strong>, qui ne demande " +
              "aucun calcul : la pente doit être <strong>compatible avec la forme du nuage</strong>. " +
              "Si l'on double $x$ et que $y$ augmente à peine, la pente est petite — inférieure à " +
              "$1$, et c'est parfaitement normal. Une pente de $0{,}5$ n'a rien d'un résultat " +
              "raté : elle dit simplement que $y$ monte deux fois moins vite que " +
              "$x$.<br/><br/>" +
              "Traduire enfin en <strong>langage métier</strong>, ce qui rend l'inversion " +
              "immédiatement absurde : pour la maintenance, la pente s'énonce « le coût annuel " +
              "augmente de $a$ euros <strong>par année d'âge</strong> de la machine ». Le « par " +
              "année d'âge » désigne le dénominateur, et il désigne $x$. Une fois la phrase " +
              "écrite en français, il n'est plus possible de se tromper de sens — et c'est en " +
              "outre exactement ce que l'épreuve demande d'écrire en conclusion.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 21) : l'exercice 3 est l'âge d'une machine contre
         son coût de maintenance, Cov = 1 et V_x = 2, réponse a = 0,5. C'est
         LE support de cette erreur, et il est le seul possible du tirage :
           - c'est le SEUL des douze exercices dont la réponse est INFÉRIEURE
             à 1. Les onze autres donnent 1, 2, 3 ou 4 — c'est-à-dire des
             entiers, sur lesquels l'inversion de la division est soit
             invisible (a = 1 sur les exercices 4, 5, 8, 10, 11, 12, où Cov et
             V_x sont égaux et où l'inversion donne le MÊME résultat), soit
             produit un quotient non entier qui alerte l'élève par lui-même.
             Autrement dit : six des douze exercices ne peuvent PAS révéler
             cette erreur, et sur cinq autres elle se voit trop facilement.
             Ce constat mérite d'être connu de l'enseignant, et c'est la
             raison principale du choix ;
           - l'inversion y donne exactement 2, un entier plausible : l'erreur
             passe donc parfaitement inaperçue à la correction de l'élève, ce
             qui est précisément ce qu'il faut pour justifier le contrôle de
             plausibilité du remède ;
           - le contexte, âge d'une machine contre coût de maintenance, porte
             la phrase « euros par année d'âge » du troisième paragraphe.
         La banque supplémentaire offre un second cas à réponse non entière
         (le S1, a = 1,5, et le S3, a = 0,67), utile en reprise. Distinct du
         renvoi de l'erreur 4 (exercice 9), conformément à la règle du
         projet. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Conclure à une causalité à partir d'une corrélation",
      eleve: "L'élève trouve $r = 0{,}94$ entre la vitesse de rotation d'un moteur et sa " +
             "température, et écrit « donc augmenter la vitesse fait chauffer le moteur ». Sur un " +
             "autre jeu de données, il conclut que les ventes de glaces provoquent les noyades.",
      cause: "Le raisonnement n'est pas absurde, il est <strong>incomplet</strong>, et c'est " +
             "important à dire au groupe : dans l'immense majorité des cas industriels, une forte " +
             "corrélation TRADUIT effectivement un lien physique. L'étudiant a donc raison neuf " +
             "fois sur dix, et son erreur est de croire que le calcul l'a démontré. Or " +
             "$r = 0{,}94$ mesure une <strong>forme</strong> — les points sont alignés — et " +
             "rien de plus : il ne dit ni le sens de la causalité, ni s'il en existe une. S'y " +
             "ajoute une pression de contexte : l'énoncé parle de moteurs et de températures, " +
             "c'est-à-dire d'un domaine où les causes sont connues, ce qui rend la conclusion " +
             "causale irrésistible.",
      remede: "Faire lister à voix haute les <strong>trois explications possibles</strong> d'une " +
              "forte corrélation, systématiquement, avant toute conclusion : (1) $x$ cause $y$ ; " +
              "(2) $y$ cause $x$ ; (3) une <strong>troisième variable</strong> cause les deux. " +
              "Tant que les trois n'ont pas été examinées, aucune n'est démontrée. Trente secondes " +
              "par exercice, et le réflexe est pris.<br/><br/>" +
              "Utiliser un <strong>contre-exemple frappant et bien choisi</strong> : glaces et " +
              "noyades sont corrélées à $r \\approx 0{,}9$, et la cause commune est la chaleur. " +
              "Interdire les glaces ne sauverait personne. L'exemple fait rire, et c'est " +
              "exactement ce qu'il faut pour qu'il soit retenu — mais il faut enchaîner sur un cas " +
              "INDUSTRIEL, faute de quoi les étudiants le classeront en curiosité : deux machines " +
              "d'un atelier dont les pannes sont corrélées, parce qu'elles partagent la même " +
              "alimentation électrique instable. Ni l'une ne casse l'autre : c'est le " +
              "réseau.<br/><br/>" +
              "Montrer enfin la <strong>limite complémentaire, moins connue et tout aussi " +
              "coûteuse</strong> : $r \\approx 0$ ne signifie PAS « aucun lien », mais « aucun lien " +
              "<strong>linéaire</strong> ». Un rendement qui passe par un maximum donne un nuage " +
              "en cloche parfaitement structuré, et un $r$ proche de zéro. Conclure « pas de " +
              "relation » reviendrait à rater précisément le point de fonctionnement optimal — " +
              "l'erreur la plus chère qu'on puisse commettre sur un banc d'essai.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : le coefficient
         de corrélation r n'apparaît dans AUCUN des douze énoncés numérotés.
         Les douze donnent Cov et V_x et demandent la pente ; ni r, ni sigma_x,
         ni sigma_y, ni le mot « corrélation » n'y figurent. L'élève ne peut
         donc pas rencontrer cette erreur en faisant les exercices : il n'y
         calcule jamais de coefficient de corrélation et n'a donc jamais
         l'occasion d'en tirer une conclusion abusive. Pointer l'un des douze
         serait exactement le contresens que le projet interdit. La question 4
         de l'évaluation la travaille (r = -0,92, avec la mise en garde
         explicite dans la correction), mais une remédiation ne renvoie jamais
         vers le devoir noté. Le remède ramène donc au cours — D4
         (corrélation fallacieuse) et le piège du cours, qui portent tous deux
         sur ce point — et demande à l'enseignant de fabriquer le support.
         C'est d'ailleurs la remédiation la moins coûteuse de cette fiche :
         elle se fait entièrement à l'oral, sans énoncé écrit. */
      exercice: null
    },
    {
      titre: "Oublier l'ordonnée à l'origine, ou la calculer avec la mauvaise moyenne",
      eleve: "L'élève trouve $a = 1{,}5$ et annonce la droite $y = 1{,}5x$, sans $b$. Ou bien il " +
             "calcule $b = \\bar{x} - a\\bar{y}$ au lieu de $b = \\bar{y} - a\\bar{x}$, et obtient " +
             "$3 - 1{,}5 \\times 8 = -9$ au lieu de $3{,}5$.",
      cause: "L'oubli pur vient du tirage : les douze exercices s'arrêtent à la pente, si bien que " +
             "l'étudiant a douze fois pratiqué un calcul de régression qui <strong>se termine à " +
             "$a$</strong>. L'habitude est donc construite par le manuel lui-même, et il faut le " +
             "savoir avant de la reprocher. L'inversion des moyennes, elle, a une autre cause : " +
             "$\\bar{x}$ et $\\bar{y}$ se ressemblent à une lettre près et sont donnés côte à côte " +
             "dans tous les énoncés — où, précisément, <strong>ils ne servent à rien</strong>. " +
             "L'étudiant n'a donc jamais eu à distinguer lequel va où : les douze exercices lui ont " +
             "appris que ces deux nombres sont décoratifs.",
      remede: "Faire écrire l'<strong>équation complète</strong> $y = ax + b$ à chaque fois, même " +
              "quand l'énoncé s'arrête à la pente, et considérer qu'un exercice de régression " +
              "n'est pas fini tant que la droite n'est pas écrite. C'est ce que l'épreuve demande, " +
              "et c'est ce que le tirage n'exige jamais : l'exigence doit donc venir de " +
              "l'enseignant.<br/><br/>" +
              "Donner la <strong>raison</strong> de la formule plutôt que la formule : la droite " +
              "passe <strong>toujours</strong> par le point moyen $(\\bar{x}\\,;\\,\\bar{y})$ — " +
              "c'est une propriété, imprimée dans le récapitulatif du cours, et c'est la question " +
              "2 du devoir. Or si le point $(\\bar{x}\\,;\\,\\bar{y})$ est sur la droite, alors " +
              "$\\bar{y} = a\\bar{x} + b$, d'où $b = \\bar{y} - a\\bar{x}$. La formule se " +
              "<strong>retrouve</strong> en deux lignes au lieu de se mémoriser, et l'inversion " +
              "devient impossible.<br/><br/>" +
              "Installer un <strong>contrôle immédiat</strong>, qui coûte cinq secondes : une fois " +
              "$a$ et $b$ trouvés, remplacer $x$ par $\\bar{x}$ dans l'équation. On doit retomber " +
              "sur $\\bar{y}$. Si ce n'est pas le cas, l'un des deux est faux. Et une lecture " +
              "métier pour finir : $b$ est la valeur de $y$ <strong>quand $x = 0$</strong> — le " +
              "coût de maintenance d'une machine neuve, la consommation d'un bâtiment de surface " +
              "nulle. Elle n'a pas toujours de sens physique, et c'est en soi une information sur " +
              "les limites du modèle.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés demandent TOUS la pente a et s'arrêtent là. La
         lettre b n'apparaît dans aucun des douze énoncés, ni les mots
         « ordonnée à l'origine » ou « équation de la droite ». L'élève ne
         peut donc pas rencontrer cette erreur en faisant les exercices — et,
         comme le dit la `cause` ci-dessus, les douze construisent activement
         l'habitude de s'arrêter à a. Pointer l'un d'eux ne remédierait pas à
         l'erreur, il la consoliderait. C'est le cas le plus net de toute
         cette fiche : le seul « support » que le tirage offre pour l'ordonnée
         à l'origine, ce sont les x̄ et ȳ donnés en données parasites, qui sont
         exactement les deux nombres qu'il faudrait utiliser — présents mais
         inemployés dans les douze énoncés. La question 3 de l'évaluation
         demande b, mais une remédiation ne renvoie jamais vers le devoir
         noté. Le remède ramène donc à l'exemple résolu du cours (les panneaux
         solaires, b = 141 - 29,5 × 4 = 23) et demande à l'enseignant
         d'ÉTENDRE la consigne des exercices existants — ce qui est ici
         particulièrement facile, puisque les deux moyennes nécessaires sont
         déjà imprimées dans chaque énoncé. */
      exercice: null
    },
    {
      titre: "Extrapoler sans précaution, ou rendre une pente sans unité ni sens",
      eleve: "L'élève établit $y = 2{,}5x + 1$ à partir de données allant de $x = 1$ à $x = 6$, " +
             "puis annonce sans réserve la valeur prévue pour $x = 100$. Ou bien il rend " +
             "« $a = 4$ » sans pouvoir dire de quoi ce $4$ est la mesure — des euros ? des " +
             "degrés ? par quoi ?",
      cause: "Une fois la droite écrite, elle a l'air de <strong>valoir partout</strong> : une " +
             "équation n'a pas de bornes visibles, et rien dans $y = 2{,}5x + 1$ ne rappelle que " +
             "les données s'arrêtaient à $6$. Le modèle a remplacé les données dans l'esprit de " +
             "l'étudiant, ce qui est précisément le risque de toute modélisation. Quant à l'absence " +
             "d'unité, elle vient du tirage : les douze énoncés demandent un nombre et rien de " +
             "plus, et l'habitude scolaire veut que la réponse soit le résultat du calcul. Ce n'est " +
             "pas de la négligence, c'est un <strong>contrat implicite</strong> — que l'épreuve de " +
             "BTS, elle, ne respecte pas.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui donne à la " +
              "pente son <strong>unité composée</strong> : « chaque année d'âge supplémentaire " +
              "coûte $4$ € de maintenance en plus » plutôt que « $a = 4$ ». L'unité d'une pente est " +
              "toujours un rapport — euros par an, degrés par tour/min, kWh par m² — et l'écrire " +
              "oblige à savoir ce qu'on a calculé. C'est aussi ce que l'épreuve " +
              "évalue.<br/><br/>" +
              "Faire <strong>écrire le domaine de validité à côté de l'équation</strong>, comme on " +
              "écrit le domaine d'une fonction : « $y = 2{,}5x + 1$, valable pour " +
              "$x \\in [1\\,;\\,6]$ ». Hors de cet intervalle, le modèle n'est pas faux — il " +
              "n'est simplement <strong>pas vérifié</strong>, ce qui est différent et plus honnête. " +
              "La nuance vaut d'être enseignée : un technicien ne dit pas « c'est faux », il dit " +
              "« je n'ai pas de donnée ».<br/><br/>" +
              "Ancrer sur une <strong>extrapolation qui tourne mal</strong>, et en choisir une qui " +
              "parle : la consommation d'un bâtiment croît avec sa surface, linéairement, sur les " +
              "données relevées entre $50$ et $500$ m². Extrapolée à $50\\,000$ m², la droite " +
              "ignore que l'installation change complètement de technologie au-delà d'un certain " +
              "seuil. Le calcul reste juste ; c'est le <strong>modèle</strong> qui a cessé d'être " +
              "valable, et aucune formule ne le signale. Seul le technicien peut le savoir.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 9 est
         l'épaisseur d'isolant posé contre la perte thermique d'un local,
         Cov = 4 et V_x = 1, réponse a = 4. Le renvoi est utilisable pour
         cette erreur alors même que tous les exercices partagent le même
         moule, et c'est assumé : l'erreur ne porte pas sur le RÉSULTAT (4
         sera juste) mais sur la LECTURE, et l'enseignant peut exiger la
         phrase de conclusion et l'unité composée sur cet énoncé précis.
         Choix du 9 plutôt que d'un autre, pour trois raisons de contenu :
           - a = 4 est la plus GRANDE pente du tirage, donc celle dont la
             traduction en français est la plus parlante (« chaque centimètre
             d'isolant en plus change la perte de 4 unités ») ;
           - c'est surtout le seul contexte du tirage où la pente devrait
             logiquement être NÉGATIVE : poser de l'isolant DIMINUE la perte
             thermique. Le générateur ne tire que des covariances positives,
             si bien que l'énoncé affirme implicitement qu'isoler fait perdre
             plus de chaleur — une absurdité physique. C'est une occasion
             pédagogique de premier ordre, à saisir plutôt qu'à masquer :
             demander au groupe si le signe obtenu est plausible, et ce qu'il
             faudrait pour qu'il le soit, fait travailler l'interprétation
             bien mieux qu'un énoncé cohérent. L'enseignant doit donc être
             prévenu de cette incohérence avant la séance, et c'est le rôle de
             ce commentaire ;
           - l'exercice 4 porte le même contexte d'isolant avec a = 1 : il
             sert de comparaison utile si l'on veut faire varier la pente sans
             changer le contexte.
         Distinct du renvoi de l'erreur 1 (exercice 3), conformément à la
         règle du projet. */
      exercice: { type: "exercice", n: 9 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\bar{x} = 4$, $\bar{y} = 10$, $\overline{xy} = 45$ : calculer
          $\text{Cov} = \overline{xy} - \bar{x}\bar{y}$. La formule est
          donnée dans l'énoncé, les valeurs aussi : une multiplication et une
          soustraction. Exécution d'une procédure connue : « calculer ».
     Q2 — la droite des moindres carrés passe toujours par : l'origine, le
          point moyen, le maximum du nuage, l'intersection des axes ? Aucun
          calcul : il faut juger la validité de quatre affirmations
          concurrentes sur une propriété de la droite. « raisonner ».
     Q3 — $\text{Cov} = 6$, $V_x = 4$, $\bar{x} = 3$, $\bar{y} = 8$ : calculer
          $a$ puis $b$, donner $b$. Deux étapes enchaînées, les deux formules
          étant au programme du chapitre et sans choix de méthode. C'est la
          seule question du devoir qui va jusqu'à l'ordonnée à l'origine :
          « calculer ».
     Q4 — $r = -0{,}92$ signifie : aucune liaison, forte liaison linéaire
          négative, forte liaison linéaire positive, liaison non linéaire ?
          Aucun calcul : il faut lire un signe ET une valeur absolue, puis
          écarter trois interprétations voisines dont deux ne diffèrent que
          par un mot. Jugement de validité : « raisonner ».
     Q5 — avec $y = 2{,}5x + 1$, estimer $y$ pour $x = 10$. Une multiplication
          et une addition, l'équation étant fournie. Aucune mise en équation
          n'est demandée — le modèle est donné : « calculer ». (La correction
          ajoute une mise en garde sur l'extrapolation, mais elle ne fait pas
          partie de la tâche évaluée.)

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 2. « chercher »,
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés.

     Deux absences méritent d'être signalées, parce qu'elles sont
     particulièrement frappantes ici :
     - « représenter » : ce chapitre est celui du NUAGE DE POINTS et de la
       DROITE D'AJUSTEMENT — l'un des plus graphiques du programme, et le
       premier attendu officiel porte explicitement sur la représentation
       d'un nuage. Aucune des cinq questions ne demande de lire ni de tracer
       quoi que ce soit.
     - « modéliser » : la régression EST l'acte de modélisation par
       excellence — on remplace un nuage de mesures par une droite. Mais les
       cinq questions fournissent toutes les données déjà réduites (Cov, V_x,
       ou l'équation elle-même) : il n'y a jamais rien à traduire.
     C'est un constat sur les cinq questions, pas un choix d'étiquetage : le
     corpus entier est composé de questions `numeric` et à choix multiple,
     format qui exclut de fait le graphique. Un enseignant qui veut évaluer
     ces deux compétences devra ajouter ses propres questions — un nuage à
     tracer et un tableau de données brutes à réduire suffisent, et couvrent
     les deux. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "calculer"]
  }
};
