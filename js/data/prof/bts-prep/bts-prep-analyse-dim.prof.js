/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-analyse-dim.prof.js
   Fiche professeur du chapitre « Analyse Dimensionnelle » (remise à niveau
   BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».
   À surveiller ici plus qu'ailleurs : ce chapitre est le plus « physique » du
   recueil (dimensions M, L, T, nombre de Reynolds, loi de Stefan-Boltzmann) et
   la tentation d'employer « valider » ou « analyser » est réelle. Ces mots
   seraient REFUSÉS : le référentiel est celui des mathématiques.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE — ET C'EST LE FAIT LE PLUS
   IMPORTANT DU CHAPITRE. Relevé le 2026-09-17, graine du livre 20260816 +
   rang 9. 42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire.
   SIX MOULES parmi les douze numérotés :
     - énergie thermique $Q = mc\Delta T$ en kJ        : exercices 1 et 8 ;
     - pression $p = F/A$ avec A en cm², rendue en MPa : exercices 2 et 9 ;
     - énergie cinétique avec v en km/h                : exercices 3 et 11 ;
     - puissance $P = Fv$ avec v en km/h               : exercices 4 et 7 ;
     - concentration $c = n/V$                         : exercices 5 et 10 ;
     - débit $Q = vA$ avec A en cm², rendu en m³/h     : exercices 6 et 12.
   ÉCART MAJEUR ENTRE LES EXERCICES ET L'ÉVALUATION : les douze exercices
   numérotés sont TOUS des applications numériques de formules données, avec
   conversions. AUCUN ne demande d'écrire une équation aux dimensions, alors
   que TROIS des quatre questions de l'évaluation le font, et que c'est le
   titre même du chapitre. Le chapitre s'intitule « Analyse dimensionnelle »
   mais ses exercices font du calcul avec conversions — c'est le décalage le
   plus marqué du recueil. Il est dit dans la `note` et commande le `null` de
   l'erreur 4.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-analyse-dim"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 9 (Système International d'unités) : RETENU, et c'est le prérequis
     dur. L'analyse dimensionnelle consiste à écrire chaque grandeur en
     fonction de M, L, T, I — ce qui suppose de savoir DÉJÀ qu'un newton est
     un kg·m·s⁻² et qu'un pascal est un N/m². Or c'est précisément le tableau
     D2 du chapitre 9. Sans lui, le chapitre 10 n'a pas de matière : on ne
     peut pas vérifier l'homogénéité d'une formule si l'on ne sait pas
     décomposer ses unités. Les exercices le confirment autrement : les douze
     tirages exigent tous une conversion (cm² en m², km/h en m/s, kJ, MPa),
     c'est-à-dire exactement ce que le chapitre 9 installe.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Puissances de 10) : très défendable, car convertir 20 cm² en m²
       ($2 \times 10^{-3}$) ou rendre un résultat en MPa demande des puissances
       de dix. Mais le chapitre 9, qui est retenu, les suppose déjà — le
       déclarer une seconde fois ici alourdirait la progression sans rien
       garantir de plus. Écarté au titre de la transitivité, pas de
       l'absence de lien.
     - ch. 1 (Calcul littéral) : toutes les formules des douze exercices sont
       données dans le sens du calcul direct ; rien à isoler. Écarté.
     - ch. 11 (Conversions techniques) : rang supérieur, et le recouvrement
       (km/h, MPa) est déjà couvert par le chapitre 9. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [9],

  /* Rang conseillé (2026-09-17) : rang 10, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 10 place ce chapitre juste après le Système International
     (rang 9), ce qu'exige son prérequis, et c'est la lecture naturelle : les
     deux se lisent d'affilée, le 9 installant les unités dérivées et le 10 en
     faisant un outil de vérification. Le livre les range dans le même ordre :
     la colonne « Chap. » de la progression ne portera pas le triangle
     d'alerte. */
  rangConseille: 10,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     ET les quatre questions d'évaluation demandent. La `note` le dit pour que
     l'enseignant ne les cite pas comme des items de référentiel. */
  attendus: [
    "Écrire la dimension d'une grandeur technique en fonction de M, L, T et I",
    "Vérifier l'homogénéité d'une formule et en conclure qu'elle est fausse lorsqu'elle ne l'est pas",
    "Ramener toutes les données d'un énoncé en unités cohérentes avant d'appliquer une formule et de rendre le résultat dans l'unité demandée"
  ],

  note: "Principe d'homogénéité, dimensions fondamentales, nombres adimensionnels : le chapitre " +
        "installe le contrôle le moins coûteux et le plus puissant de tout le BTS — celui qui " +
        "permet de rejeter une formule fausse sans la connaître.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices et l'évaluation demandent " +
        "réellement — et <strong>non des items d'un référentiel</strong>. Ne les citez pas comme " +
        "tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose le <strong>Système International</strong> " +
        "acquis (chapitre 9), et la contrainte est absolue : on ne peut pas vérifier " +
        "l'homogénéité d'une formule sans savoir qu'un newton vaut kg·m·s⁻². Les deux chapitres " +
        "se lisent d'affilée. Notez un lien non déclarable : les conversions de cm² en m² " +
        "supposent les puissances de dix (<strong>chapitre 4</strong>), déjà requises en amont " +
        "par le chapitre 9.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — et c'est le décalage le plus " +
        "marqué de tout le recueil.</strong> Le chapitre s'intitule « Analyse dimensionnelle », " +
        "mais <strong>aucun des douze exercices numérotés n'écrit la moindre équation aux " +
        "dimensions</strong> : tous appliquent une formule donnée à des nombres, avec des " +
        "conversions d'unités. Or <strong>trois des quatre questions de l'évaluation</strong> " +
        "demandent au contraire une décomposition symbolique en M, L, T, I, sans aucun nombre. " +
        "Les exercices entraînent donc une compétence (convertir et calculer proprement) et " +
        "l'évaluation en note une autre (décomposer et juger l'homogénéité). Si vous notez sur " +
        "l'évaluation, <strong>entraînez la décomposition à part</strong> : l'exemple résolu du " +
        "cours en donne quatre modèles complets, et c'est votre meilleure ressource.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     TROIS RENVOIS SUR QUATRE. Le quatrième est `null` : l'écriture d'une
     équation aux dimensions n'est travaillée par aucun des 42 énoncés tirés,
     alors que c'est le sujet du chapitre. Le remède le dit et donne une
     sortie précise.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Sur ce chapitre s'ajoute une
     difficulté propre : l'analyse dimensionnelle est un outil de VÉRIFICATION,
     usage que personne ne leur a jamais montré — ils croient qu'on leur
     demande un calcul de plus alors qu'on leur offre une assurance. */
  erreurs: [
    {
      titre: "Élever au carré une vitesse sans l'avoir convertie en m/s",
      eleve: "Sur un véhicule de $2000$ kg à $90$ km/h, l'élève calcule " +
             "$\\frac{1}{2} \\times 2000 \\times 90^2 = 8\\,100\\,000$ et annonce $8100$ kJ au " +
             "lieu de $625$ kJ — treize fois trop.",
      cause: "La formule est sue, appliquée correctement, et c'est justement ce qui rend l'erreur " +
             "invisible à celui qui la commet : tout le geste mathématique est juste. Ce qui " +
             "manque est en amont, et il est doublement piégeux. D'abord, $90$ km/h est une " +
             "valeur si familière qu'elle ne se donne pas pour une donnée à traiter — c'est un " +
             "chiffre de compteur, pas un nombre de calcul. Ensuite et surtout, le CARRÉ amplifie " +
             "la conversion manquée : l'erreur de $3{,}6$ sur la vitesse devient $12{,}96$ sur " +
             "l'énergie, donc un résultat qui n'a plus aucun rapport. Un adulte qui vérifie son " +
             "ordre de grandeur sur la vitesse (« $90$, oui, c'est bien ça ») ne peut pas " +
             "anticiper qu'il se trompera d'un facteur treize sur le résultat. Ce n'est pas de " +
             "l'inattention : c'est un effet non linéaire qu'aucune intuition ne prévoit.",
      remede: "Imposer la <strong>colonne de conversion avant toute formule</strong>, sans " +
              "exception et même quand la donnée paraît propre : $m = 2000$ kg, " +
              "$v = 90/3{,}6 = 25$ m/s. Trois secondes d'écriture, et la formule ne peut plus " +
              "être alimentée par une donnée du terrain.<br/><br/>" +
              "Nommer ensuite explicitement l'<strong>effet du carré</strong>, parce que c'est " +
              "l'information qui manque et qu'elle change le rapport au risque : une conversion " +
              "manquée sur une grandeur au carré coûte le CARRÉ du facteur. Oublier le $3{,}6$ " +
              "sur une vitesse coûte $13$, pas $3{,}6$. Sur un cube, ce serait $47$. C'est " +
              "pourquoi les erreurs d'unité sur les vitesses et les sections sont les plus " +
              "coûteuses de tout le BTS.<br/><br/>" +
              "Ancrer enfin un <strong>repère de vraisemblance de métier</strong> : l'énergie " +
              "cinétique d'un véhicule de deux tonnes à vitesse de route se compte en quelques " +
              "centaines de kilojoules — c'est l'ordre de grandeur que les concepteurs de " +
              "glissières et de butoirs de quai manipulent. $8100$ kJ, ce serait l'énergie d'un " +
              "camion lancé à $180$ km/h. Un alternant le sent, encore faut-il lui dire qu'il a " +
              "le droit de s'en servir contre sa calculatrice.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 9) :
         l'exercice 3 donne m = 2000 kg et v = 90 km/h, réponse 625 kJ. C'est
         le meilleur support du chapitre pour cette erreur, pour deux raisons.
         D'abord 90 km/h donne exactement 25 m/s, donc la bonne réponse est
         ronde (625 kJ) : l'élève qui convertit obtient un nombre « propre »,
         signal supplémentaire qu'il est sur la bonne voie. Ensuite l'écart
         avec l'erreur (8100 contre 625, facteur 12,96) est assez grand pour
         être criant à la correction, et le rapport 12,96 = 3,6² permet
         d'IDENTIFIER la faute, pas seulement de la constater. Préféré à
         l'exercice 11 (1000 kg à 54 km/h, réponse 112,5 kJ) parce que sur le
         11 la réponse n'est pas ronde et que 54/3,6 = 15 est un calcul moins
         familier. L'exercice 11 fait un bon second support, et les exercices
         4 et 7 (P = F.v avec v en km/h) travaillent la même conversion SANS
         carré — les donner avant permet d'isoler la difficulté de la
         conversion, puis d'ajouter l'effet du carré. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Convertir une section en cm² comme une longueur en cm",
      eleve: "Sur une force de $25$ kN appliquée à $20$ cm², l'élève divise par " +
             "$20 \\times 10^{-2}$ et annonce $0{,}125$ MPa au lieu de $12{,}5$ MPa. Cent fois " +
             "trop petit.",
      cause: "C'est la même racine que l'erreur du chapitre 4 — le préfixe porte sur la LONGUEUR, " +
             "et une surface en contient deux — mais elle revient ici avec un enjeu différent : " +
             "elle ne produit plus une conversion fausse, elle produit une CONTRAINTE fausse, " +
             "c'est-à-dire un dimensionnement. L'élève applique une règle qu'il maîtrise ($1$ cm " +
             "$= 10^{-2}$ m) à un objet auquel elle ne s'applique pas telle quelle, et rien dans " +
             "la notation « cm² » ne le signale : le carré semble porter sur l'unité, pas sur le " +
             "facteur. Le fait que cette erreur revienne au chapitre 10 après le chapitre 4 " +
             "n'est pas un signe de mauvaise volonté — c'est la preuve qu'elle est structurelle " +
             "et qu'une seule remédiation ne suffit pas.",
      remede: "Faire <strong>écrire la conversion au niveau de la longueur AVANT de l'élever</strong>, " +
              "toujours : $1$ cm $= 10^{-2}$ m, donc $1$ cm² $= (10^{-2})^2 = 10^{-4}$ m², donc " +
              "$20$ cm² $= 20 \\times 10^{-4} = 2 \\times 10^{-3}$ m². La ligne intermédiaire est " +
              "tout le remède : c'est elle qu'on saute, et c'est en la sautant qu'on perd deux " +
              "ordres de grandeur.<br/><br/>" +
              "Faire ensuite <strong>contrôler par l'unité finale</strong>, ce qui est l'apport " +
              "propre de ce chapitre : des newtons divisés par des mètres carrés donnent des " +
              "pascals, et $25\\,000 / 2 \\times 10^{-3}$ vaut $1{,}25 \\times 10^7$ Pa, " +
              "c'est-à-dire $12{,}5$ MPa. Le passage Pa → MPa est une seconde occasion de " +
              "se tromper : la faire écrire aussi.<br/><br/>" +
              "Ancrer enfin le <strong>repère de résistance des matériaux</strong>, qui est le " +
              "contrôle le plus rapide et celui qu'un technicien garde toute sa vie : les " +
              "contraintes admissibles se comptent en <strong>dizaines ou centaines de " +
              "mégapascals</strong> (l'acier courant travaille vers $200$ MPa). Une contrainte " +
              "de $0{,}125$ MPa sous un socle de machine-outil est mille fois trop faible pour " +
              "être vraie — c'est le genre de résultat qui, non détecté, conduit à valider un " +
              "appui très sous-dimensionné.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         F = 25 kN sur A = 20 cm² et demande p en MPa, réponse 12,5 MPa. Le
         tirage cumule DEUX conversions, ce qui en fait le meilleur support du
         chapitre : la section en cm² (facteur 10^-4) et le résultat en MPa
         (facteur 10^6), plus les kN en entrée. C'est donc l'exercice où la
         chaîne complète du remède se joue vraiment. Préféré à l'exercice 9
         (10 kN sur 25 cm², réponse 4 MPa) parce que sur le 9 la réponse est
         un petit entier qu'un élève peut atteindre par plusieurs chemins
         faux qui se compensent, alors que 12,5 est plus discriminant ; et
         parce que 25 kN sur 20 cm² se prête au calcul mental une fois les
         conversions faites (25 000 / 0,002), ce qui isole la difficulté sur
         la conversion elle-même. Les exercices 6 et 12 (débit avec A en cm²)
         font travailler la même conversion de surface dans un autre contexte
         et constituent d'excellents seconds supports. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Rendre le résultat dans l'unité du calcul plutôt que dans celle qui est demandée",
      eleve: "Sur un ballon d'eau chaude, l'élève trouve $627\\,750$ J et écrit $627\\,750$ kJ, ou " +
             "bien il écrit « $627\\,750$ » sans unité. La réponse attendue est $628$ kJ.",
      cause: "Une fois le calcul terminé, l'attention retombe : le travail intellectuel est fait, " +
             "le nombre est là, et la conversion finale paraît une formalité administrative. " +
             "C'est une erreur de FIN DE TÂCHE, et elle n'a rien à voir avec les compétences " +
             "mathématiques — c'est un phénomène d'attention, pas de compréhension. Elle est " +
             "aggravée chez ce public par un facteur précis : un adulte en reprise d'études a " +
             "souvent une conception du calcul comme épreuve, dont la fin est le soulagement. " +
             "Le geste de relecture n'est pas installé parce que personne n'a jamais dit qu'il " +
             "FAISAIT PARTIE du calcul. S'y ajoute que l'unité demandée est écrite en fin " +
             "d'énoncé, là où l'œil revient le moins.",
      remede: "Faire <strong>entourer l'unité demandée AVANT de commencer</strong>, dans l'énoncé. " +
              "C'est un geste de dix secondes, il paraît scolaire, et il supprime une catégorie " +
              "entière d'erreurs. Le faire faire collectivement pendant trois séances suffit à " +
              "l'installer durablement.<br/><br/>" +
              "Imposer ensuite le <strong>triplet de fin de calcul</strong>, toujours le même : " +
              "le nombre, son unité, puis la comparaison avec l'unité demandée. Trois regards, " +
              "dans cet ordre. Tant que la comparaison n'est pas faite, le calcul n'est pas " +
              "terminé — c'est la règle qu'il faut poser, et elle vaut pour tout le BTS.<br/><br/>" +
              "Nommer enfin la <strong>conséquence professionnelle</strong>, qui est celle des " +
              "documents transmis : une note de calcul dont le résultat porte la mauvaise unité " +
              "est refusée en bureau d'études, quelle que soit la qualité du raisonnement en " +
              "amont. C'est aussi ce qui se passe sur un rapport d'essai ou une fiche " +
              "d'autocontrôle — la valeur est juste, le document est inexploitable. Le dire sans " +
              "dramatiser : ce n'est pas une faute grave, c'est une faute qui coûte cher pour " +
              "rien.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         m = 10 kg, c = 4185 J/(kg.K), Delta T = 15 K et demande Q en kJ,
         réponse 628 kJ. Le tirage est retenu parce que la formule produit
         NATURELLEMENT des joules (c est donné en J/(kg.K)) alors que la
         question demande des kilojoules : l'écart entre le résultat brut
         (627 750) et la réponse attendue (628) est d'un facteur mille, et il
         est entièrement dû à l'unité — aucune autre difficulté ne vient
         brouiller le diagnostic, puisque le calcul lui-même est une simple
         multiplication de trois nombres donnés. Préféré à l'exercice 8
         (2 kg, Delta T = 40 K, réponse 335 kJ) parce que sur le 8 le produit
         brut (334 800) est moins « rond » et que l'arrondi masque en partie
         la question de l'unité. Les exercices 6 et 12 (débit rendu en m³/h
         alors que le calcul donne des m³/s) posent le même problème sous une
         autre forme et complètent bien. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Conclure qu'une formule homogène est forcément juste",
      eleve: "Devant $E_c = mv^2$ (sans le facteur $\\frac{1}{2}$) ou $f = \\sqrt{g/l}$ (sans le " +
             "$\\frac{1}{2\\pi}$), l'élève vérifie les dimensions, les trouve correctes, et " +
             "conclut que la formule est exacte. Elle est homogène et fausse.",
      cause: "L'analyse dimensionnelle est présentée — à juste titre — comme un outil de " +
             "vérification, et un outil de vérification qui dit « oui » est spontanément compris " +
             "comme un outil qui dit « c'est juste ». La logique du test à sens unique n'est " +
             "pourtant pas familière : il faut comprendre qu'un échec est CONCLUANT (non " +
             "homogène donc faux) alors qu'une réussite ne l'est PAS (homogène ne dit rien). " +
             "Cette asymétrie est une structure logique que la scolarité n'enseigne presque " +
             "jamais explicitement, et un adulte qui ne l'a pas rencontrée la reconstruit " +
             "naturellement en équivalence. Il n'est pas naïf : il applique la lecture par " +
             "défaut de tout test, qui est de croire son verdict dans les deux sens.",
      remede: "Faire <strong>expérimenter l'asymétrie sur un contre-exemple</strong> avant toute " +
              "explication, parce que c'est cela qui convainc : $E = mv^2$ est parfaitement " +
              "homogène (M·L²·T⁻²) et pourtant fausse d'un facteur deux. L'élève vérifie " +
              "lui-même, constate que le test passe, et découvre que le test ne dit rien du " +
              "facteur numérique.<br/><br/>" +
              "Formuler ensuite la règle dans ses <strong>deux sens séparément</strong>, et " +
              "toujours dans cet ordre : une formule <strong>non homogène est certainement " +
              "fausse</strong> ; une formule <strong>homogène est peut-être juste</strong>. " +
              "C'est ce que dit le récapitulatif du cours, mot pour mot, et c'est la seule " +
              "formulation qui protège.<br/><br/>" +
              "Nommer enfin ce que l'outil <strong>vaut malgré cette limite</strong>, pour qu'il " +
              "ne soit pas dévalué : il ne dit pas si la formule est juste, mais il attrape " +
              "gratuitement les erreurs les plus coûteuses — une puissance confondue avec une " +
              "énergie, un carré oublié, un terme ajouté qui n'a pas la bonne nature. Sur une " +
              "copie de BTS comme sur une note de calcul, c'est le contrôle qui coûte trente " +
              "secondes et rattrape les fautes qui font perdre des points entiers.<br/><br/>" +
              "<strong>Aucun exercice numéroté ne travaille ce point</strong>, et c'est le " +
              "décalage majeur du chapitre : les douze exercices sont des applications " +
              "numériques avec conversions, aucun ne demande d'écrire une équation aux " +
              "dimensions ni de juger une formule. Traitez-le sur l'<strong>exemple résolu du " +
              "cours</strong>, dont les exemples 1 et 2 sont bâtis exactement là-dessus (une " +
              "formule vérifiée, une formule démasquée), et sur le <strong>piège du cours</strong>, " +
              "qui énonce « homogène ≠ correct » en toutes lettres.",
      /* Vérifié contre le tirage réel (2026-09-17) : AUCUN des douze exercices
         numérotés n'écrit d'équation aux dimensions ni ne demande de juger
         une formule. Les six moules — Q = mc.DeltaT (ex. 1, 8), p = F/A
         (ex. 2, 9), Ec = mv²/2 (ex. 3, 11), P = F.v (ex. 4, 7), c = n/V
         (ex. 5, 10), Q = v.A (ex. 6, 12) — donnent tous la formule et
         demandent un nombre. La banque supplémentaire (30 énoncés, S1 à S6
         relevés) reprend exactement les mêmes moules. Un renvoi serait donc
         FAUX : il enverrait l'enseignant vers un énoncé incapable de produire
         l'erreur décrite, qui porte sur le STATUT LOGIQUE d'un test et non
         sur un calcul. D'où `null`, assumé et documenté, avec une sortie
         précise dans le remède — l'exemple résolu et le piège du cours, qui
         sont les seuls endroits du chapitre où le sujet est traité. À noter
         pour l'enseignant : les questions 1, 2 et 3 de l'évaluation portent
         justement là-dessus, ce qui rend cette absence d'autant plus gênante. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier, mais pas une
     règle. Compter dans le dump avant d'écrire.

     RAPPEL POUR CE CHAPITRE, qui est le plus « physique » du recueil : le
     référentiel reste celui des MATHÉMATIQUES. « analyser », « valider » et
     « s'approprier » appartiennent au référentiel de physique et seraient
     REFUSÉS à la validation, même si les questions parlent de newtons et de
     Stefan-Boltzmann.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — dimension de $[m \times a]$, parmi quatre propositions (newton,
          joule, watt, pascal). Il faut décomposer l'accélération en L·T⁻²,
          multiplier par M, puis RECONNAÎTRE le newton et rejeter trois unités
          voisines. Déduction symbolique avec verdict. « raisonner ».
     Q2 — dimension de $U^2/R$, parmi quatre propositions. Même démarche, en
          plus long : décomposer le volt, l'élever au carré, décomposer l'ohm,
          diviser, simplifier les I, et identifier le watt. Enchaînement de
          déductions. « raisonner ».
     Q3 — « un étudiant écrit $f = \sqrt{g/l}$, que peut-on conclure ? », parmi
          quatre propositions. C'est la question la plus exigeante des quatre :
          il faut vérifier l'homogénéité, la trouver correcte, ET NE PAS en
          conclure que la formule est juste — c'est-à-dire tenir l'asymétrie
          logique du test. Juger la validité d'une affirmation. « raisonner ».
     Q4 — loi de Stefan-Boltzmann, $\varphi = \sigma T^4$ avec $T = 500$ K. La
          formule et la constante sont données ; il reste à élever à la
          puissance quatre et multiplier. Exécution d'une procédure sur des
          nombres donnés. « calculer ».

     RÉPARTITION DE CE CHAPITRE : raisonner 3, calculer 1.
     C'est le chapitre le plus « raisonner » du recueil, et ce n'est pas un
     effet d'étiquetage : trois de ses quatre questions sont à choix multiple
     et portent sur un JUGEMENT (cette formule est-elle homogène ? peut-on en
     conclure qu'elle est juste ?), sans aucun nombre à calculer. C'est
     cohérent avec la nature du chapitre — l'analyse dimensionnelle EST un
     outil de jugement. « chercher », « modéliser », « représenter » et
     « communiquer » ne sont pas mobilisés : aucune question ne demande de
     tâtonner, de traduire une situation concrète en relation (les formules
     sont fournies), de tracer ni de rédiger. */
  competences: {
    evaluation: ["raisonner", "raisonner", "raisonner", "calculer"]
  }
};
