/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-travail-energie.prof.js
   Fiche professeur du chapitre « Travail d'une force et énergie » (première
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 4, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Deux
   moules alternés :
     - moule A (travail d'une force constante, $W = Fd\cos\theta$) : exercices
       IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (conservation de l'énergie mécanique, $v = \sqrt{2gh_0}$) :
       exercices PAIRS 2, 4, 6, 8, 10, 12.
   Fait remarquable et exploité ci-dessous : le moule A balaie SIX angles
   distincts et couvre tous les cas de figure du cours — $0°$ (ex. 1, travail
   maximal), $30°$ (ex. 11) et $45°$ (ex. 7) moteurs, $90°$ (ex. 5, travail
   RIGOUREUSEMENT NUL), $120°$ (ex. 3) et $180°$ (ex. 9) résistants, donc
   négatifs. C'est la série la plus complète du niveau, et les erreurs 1 et 2
   s'y appuient l'une et l'autre.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-travail-energie"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     ch. 3 (Le mouvement et ses descriptions) : RETENU. L'énergie cinétique
     $E_c = \frac{1}{2}mv^2$ suppose qu'on sache ce qu'est $v$, et surtout que
     $v$ y désigne la NORME du vecteur vitesse — distinction que seul le
     chapitre 3 construit. Un élève qui n'a pas vu la cinématique lit $v$ comme
     un nombre scalaire tombé du ciel ; il ne comprendra pas pourquoi l'énergie
     cinétique d'un objet en orbite circulaire reste constante alors que son
     vecteur vitesse change à chaque instant (c'est la question 2 de
     l'évaluation). Le chapitre 3 est donc un prérequis de SENS, pas seulement
     de calcul.

     ch. 4 (Lois de Newton) : candidat sérieux, et ÉCARTÉ après examen. Le
     théorème de l'énergie cinétique est bien une conséquence du principe
     fondamental de la dynamique, mais le chapitre ne le démontre pas : il
     l'énonce et l'applique. Aucun des vingt-sept énoncés tirés n'utilise
     $\sum \vec{F} = m\vec{a}$, aucune ligne du cours n'y renvoie. Le déclarer
     ferait croire à une dépendance de calcul qui n'existe pas. C'est un
     voisinage conceptuel utile — les deux chapitres donnent deux lectures du
     même mouvement — que la `note` signale, mais le voisinage n'est pas la
     dépendance.

     ch. 1 (Champ gravitationnel) : ÉCARTÉ de justesse. Le chapitre utilise
     $g = 10$ m/s² comme une donnée numérique fournie par l'énoncé, jamais
     comme un champ à calculer ; $E_p = mgz$ n'a pas besoin de savoir d'où
     vient $g$. On perd un peu de sens (l'énergie potentielle est celle du
     champ de pesanteur), et la `note` le dit. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre.

     Ce chapitre ferme le bloc mécanique de la première : champs (1-2) qui
     donnent les forces, cinématique (3) qui donne la vitesse, Newton (4) qui
     relie forces et accélération, énergie (5) qui donne du même mouvement une
     seconde lecture, globale au lieu d'instantanée. Le placer AVANT le 4 est
     techniquement possible — le prérequis déclaré est le 3, pas le 4 — mais
     c'est une mauvaise idée pédagogique : l'intérêt de l'approche énergétique
     n'apparaît que par contraste avec l'approche dynamique qu'on vient de
     pratiquer. Le rang 5 est donc un choix, pas une contrainte technique, et
     il tient au fait qu'on enseigne ici un CHANGEMENT DE POINT DE VUE.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER, et c'est le plus lourd du niveau
     avec celui du chapitre 3. Trois outils sont nécessaires, et aucun n'est
     acquis en début de première : le <strong>produit scalaire</strong>, dont
     $W(\vec F) = \vec F \cdot \vec d$ est littéralement une application ; le
     <strong>cosinus d'un angle obtus</strong>, seul moyen de comprendre
     pourquoi un travail devient négatif au-delà de $90°$ ; et la
     <strong>racine carrée</strong> dans une résolution d'équation, pour
     extraire $v$ de $\frac{1}{2}mv^2$. Le produit scalaire est enseigné en
     mathématiques de première, mais rarement avant le mois de janvier :
     placer ce chapitre plus tôt dans l'année le rendrait INABORDABLE, ou le
     réduirait à une recette (« on multiplie par cos de l'angle »). Le rang 5,
     en pratique en milieu d'année, est le premier rang soutenable. */
  rangConseille: 5,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser l'expression du travail d'une force constante et distinguer un travail moteur d'un travail résistant",
    "Utiliser le théorème de l'énergie cinétique pour déterminer une vitesse, une distance ou une force",
    "Identifier des situations de conservation et de non-conservation de l'énergie mécanique"
  ],

  note: "Le travail d'une force constante, le théorème de l'énergie cinétique, l'énergie " +
        "potentielle de pesanteur et la conservation de l'énergie mécanique sont au programme de " +
        "spécialité de première : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Un prérequis de PREMIÈRE, déclaré, un voisinage qui n'en est pas un, et un " +
        "prérequis de SECONDE non déclarable.</strong> Le chapitre s'appuie sur le chapitre 3 " +
        "(« Le mouvement et ses descriptions »), qui donne le sens de la vitesse — cela, la " +
        "colonne « S'appuie sur » le montre. Le chapitre 4 (lois de Newton) n'est " +
        "<strong>pas</strong> déclaré, et c'est délibéré : le théorème de l'énergie cinétique " +
        "est admis ici, jamais démontré à partir du principe fondamental. Les deux chapitres " +
        "offrent en revanche deux lectures du même mouvement, et le dire aux élèves est un des " +
        "moments forts de l'année. Le chapitre suppose enfin acquise la notion d'" +
        "<strong>énergie cinétique</strong> vue en <strong>seconde</strong> : un prérequis ne " +
        "pouvant viser qu'un chapitre du même niveau, rien ne l'affichera.<br/><br/>" +
        "<strong>Le vrai obstacle est mathématique, et il commande la place du " +
        "chapitre.</strong> $W(\\vec F) = \\vec F \\cdot \\vec d$ est un " +
        "<strong>produit scalaire</strong> : sans lui, la formule $F d \\cos\\theta$ est une " +
        "recette dont le $\\cos\\theta$ paraît décoratif. Il faut aussi que le " +
        "<strong>cosinus d'un angle obtus</strong> soit connu comme négatif — c'est la seule " +
        "explication du travail résistant — et que l'extraction d'une " +
        "<strong>racine carrée</strong> dans une équation soit un geste sûr. Le produit scalaire " +
        "n'étant enseigné en mathématiques qu'en cours d'année, placer ce chapitre avant " +
        "janvier le rendrait inabordable. Si la progression l'impose malgré tout, le dire " +
        "franchement à la classe : on admet $\\cos\\theta$ et l'on y reviendra.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt-sept énoncés tirés alternent deux gestes seulement : calculer " +
        "$W = F d \\cos\\theta$ pour une force unique, et calculer $v = \\sqrt{2gh_0}$ par " +
        "conservation de l'énergie mécanique. La série des angles est excellente et couvre tous " +
        "les cas ($0°$, $30°$, $45°$, $90°$, $120°$, $180°$) ; c'est le reste qui manque. " +
        "Le <strong>théorème de l'énergie cinétique</strong> — deuxième attendu officiel — " +
        "n'est appliqué dans <strong>aucun</strong> exercice : le moule B passe directement par " +
        "la conservation de $E_m$, et aucun énoncé ne demande de sommer plusieurs travaux. " +
        "La <strong>NON-conservation</strong> de l'énergie mécanique — troisième attendu " +
        "officiel — n'apparaît nulle part : tous les énoncés du moule B précisent " +
        "« sans frottement », si bien qu'un élève peut traverser le chapitre entier sans " +
        "rencontrer une seule situation dissipative. Et aucun exercice ne fait le " +
        "<strong>bilan de plusieurs forces</strong> : $W$ est toujours calculé pour une force " +
        "isolée. Ces trois travaux sont à construire ; le manuel ne les fournit pas.",

  erreurs: [
    {
      titre: "Croire qu'une force intense fournit toujours un travail important",
      eleve: "Pour une valise tirée par une poignée <strong>perpendiculaire</strong> au " +
             "déplacement, l'élève annonce $W = 50 \\times 2 = 100$ J : il multiplie la force par " +
             "la distance et néglige le $\\cos\\theta$, qu'il traite comme un détail. Devant la " +
             "réponse $0$ J, il proteste : « mais la force existe, elle est même grande ! ».",
      cause: "Le facteur $\\cos\\theta$ est perçu comme un <strong>coefficient correcteur</strong> " +
             "alors qu'il porte tout le sens de la formule. L'élève pense le travail comme une " +
             "propriété de la force seule — « une grosse force travaille beaucoup » — au lieu " +
             "d'une propriété du <strong>couple</strong> force-déplacement. Rien dans son " +
             "expérience ne le prépare : porter une valise lourde sur un trajet horizontal est " +
             "épuisant, et pourtant le travail du bras est nul. Le mot « travail » lui-même " +
             "trahit, puisqu'il désigne en physique tout autre chose que la fatigue.",
      remede: "Faire du $\\cos\\theta$ ce qu'il est : la mesure de ce que la force " +
              "<strong>accompagne</strong> le déplacement. Une force perpendiculaire " +
              "n'accompagne rien — elle ne pousse ni dans le sens du mouvement ni contre lui — " +
              "donc elle ne transfère aucune énergie. Ce n'est pas une force « faible », c'est " +
              "une force qui ne travaille pas.<br/><br/>" +
              "Faire calculer le cosinus <strong>en premier</strong>, avant même d'écrire le " +
              "produit, et le commenter à voix haute : « $\\cos 90° = 0$, donc le travail sera " +
              "nul quelle que soit l'intensité ». L'ordre des opérations fait ici tout le travail " +
              "pédagogique : un élève qui a écrit $0$ avant de multiplier ne peut plus produire " +
              "$100$ J.<br/><br/>" +
              "Multiplier enfin les cas où le résultat est <strong>rigoureusement nul</strong>, " +
              "parce qu'ils sont partout et qu'ils rendent la règle mémorable : la réaction " +
              "normale d'un support, la force gravitationnelle sur un satellite en orbite " +
              "circulaire (c'est la question 2 de l'évaluation), la tension d'un fil de pendule. " +
              "Dans les trois cas la force est intense, permanente, et son travail est nul — " +
              "et c'est d'ailleurs pourquoi un satellite garde une vitesse constante.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 4) : l'exercice 5 donne F = 50 N, theta = 90°,
         d = 2 m, réponse W = 0 J. C'est le SEUL des vingt-sept énoncés tirés
         où le travail est rigoureusement nul, le renvoi est donc contraint —
         et c'est précisément le tirage qu'il fallait : la force (50 N) est
         franchement plus grande que celle de l'exercice 7 (10 N) qui, lui,
         travaille 28,3 J. Mis côte à côte, les deux énoncés démolissent
         l'erreur sans un mot : la force cinq fois plus grande fournit un
         travail nul, la petite fournit trente joules. À signaler à
         l'enseignant : si l'exercice 5 n'est pas donné, le cas theta = 90° ne
         sera jamais rencontré dans le livre. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Refuser ou effacer un travail négatif",
      eleve: "L'exercice donne $F = 30$ N, $\\theta = 120°$, $d = 3$ m. L'élève calcule " +
             "$W = -45$ J, puis barre le signe et répond $45$ J, « parce qu'une énergie ne peut " +
             "pas être négative ». D'autres remplacent $\\cos 120°$ par $\\cos 60°$ pour " +
             "« redresser » le résultat.",
      cause: "Double malentendu. Le premier vient du collège, où l'énergie était toujours une " +
             "quantité stockée, donc positive : une énergie négative semble dépourvue de sens. Or " +
             "le travail n'est pas une énergie stockée, c'est un <strong>transfert</strong>, et " +
             "un transfert a un sens — le signe indique lequel. Le second est trigonométrique : " +
             "beaucoup d'élèves ne se représentent pas le cosinus au-delà de $90°$, et le cercle " +
             "trigonométrique n'est pas encore un réflexe en première. C'est une erreur de " +
             "<strong>signe</strong>, caractéristique du lycée : elle ne pouvait pas exister au " +
             "collège, où toutes les grandeurs étaient positives.",
      remede: "Traduire le signe en <strong>phrase physique</strong>, systématiquement, avant de " +
              "poursuivre : $W > 0$, la force <strong>fournit</strong> de l'énergie au système, " +
              "elle est motrice ; $W < 0$, la force en <strong>retire</strong>, elle est " +
              "résistante. Le signe n'est pas un accident de calcul, c'est la moitié du résultat. " +
              "Le faire écrire en toutes lettres sous chaque valeur numérique.<br/><br/>" +
              "Régler ensuite la question du cosinus obtus <strong>une fois pour toutes</strong>, " +
              "avec un cercle trigonométrique au tableau : au-delà de $90°$, le cosinus devient " +
              "négatif. On peut le mémoriser par le cas extrême, qui est limpide : à $180°$, la " +
              "force est exactement opposée au déplacement, elle s'oppose au mouvement de toutes " +
              "ses forces, et $\\cos 180° = -1$ donne bien le travail le plus négatif " +
              "possible.<br/><br/>" +
              "Rattacher enfin le signe à ce qu'il produit, via le théorème de l'énergie " +
              "cinétique : une somme de travaux négative signifie que le système " +
              "<strong>ralentit</strong> ($\\Delta E_c < 0$). C'est exactement le rôle d'un " +
              "frottement ou d'un freinage. Un nombre négatif qui raconte un ralentissement n'est " +
              "plus un nombre suspect — c'est l'information la plus utile de l'exercice.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 3 donne
         F = 30 N, theta = 120°, d = 3 m, réponse W = -45 J. Deux des
         vingt-sept énoncés produisent un travail négatif (l'exercice 3 à 120°
         et l'exercice 9 à 180°, W = -150 J) ; l'exercice 3 est préféré parce
         qu'il est le plus difficile des deux et donc le plus révélateur.
         À 180°, l'élève peut « voir » que la force freine et accepter le signe
         par le sens physique, sans jamais affronter la trigonométrie ; à 120°,
         il n'y a aucune échappatoire — il FAUT savoir que cos(120°) = -0,5.
         L'élève qui remplace par cos(60°) trouve exactement +45 J, soit
         l'opposé : le diagnostic est immédiat à la correction. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Croire que la vitesse en bas dépend de la masse ou de la pente",
      eleve: "Devant deux objets lâchés de la même hauteur, l'élève affirme que « le plus lourd " +
             "arrive plus vite ». Ou, devant un plan incliné, il cherche la longueur de la pente " +
             "et son angle, et déclare l'exercice incomplet sans eux.",
      cause: "Deux intuitions solides se conjuguent. La première — le lourd tombe plus vite — est " +
             "aristotélicienne, universelle, et contredite par l'expérience seulement lorsqu'on " +
             "supprime l'air. La seconde est plus subtile : l'élève pense qu'un trajet " +
             "<strong>plus long</strong> doit produire un résultat différent, parce qu'il " +
             "confond la distance parcourue avec la hauteur perdue. Or le travail du poids ne " +
             "dépend <strong>que</strong> de la différence d'altitude, jamais du chemin suivi — " +
             "propriété remarquable que le cours énonce mais que rien n'oblige l'élève à " +
             "utiliser.",
      remede: "Faire l'algèbre <strong>avant</strong> les nombres, parce qu'elle règle les deux " +
              "objections d'un coup : $\\frac{1}{2}mv^2 = mgh_0$ donne " +
              "$v = \\sqrt{2gh_0}$ — la masse $m$ <strong>se simplifie</strong>. Elle disparaît " +
              "de la réponse. Ce n'est pas une approximation, c'est un résultat exact, et il " +
              "explique pourquoi Galilée obtenait le même temps de chute pour deux boulets " +
              "différents.<br/><br/>" +
              "Traiter ensuite la pente par le travail du poids, qui est le cœur du chapitre : " +
              "$W(\\vec P) = mgh$ ne contient <strong>aucune</strong> longueur de trajet, aucun " +
              "angle. Un objet qui descend de $5$ m arrive à la même vitesse qu'il ait glissé sur " +
              "une pente douce et longue ou sur une pente raide et courte — tant qu'il n'y a pas " +
              "de frottement. La pente change la <strong>durée</strong> du trajet, jamais la " +
              "vitesse finale.<br/><br/>" +
              "Nommer enfin explicitement la condition, qui est ce que l'élève retiendra de " +
              "travers si on ne la dit pas : ce résultat vaut <strong>sans frottement</strong>. " +
              "Avec frottement, la pente longue dissipe davantage et l'objet arrive plus lentement " +
              "— et l'intuition de l'élève redevient juste. Lui donner raison dans le cas réel est " +
              "ce qui lui permet d'accepter le cas idéal.",
      /* Vérifié contre le tirage réel (2026-09-17) : les six énoncés du
         moule B (exercices 2, 4, 6, 8, 10, 12) donnent tous une masse qui ne
         sert à RIEN dans le calcul. L'exercice 10 est choisi parce qu'il est
         le plus démonstratif de la série : m = 8,0 kg et h_0 = 1,5 m donnent
         v = 5,48 m/s, tandis que l'exercice 2 — masse presque identique,
         m = 10,0 kg, mais h_0 = 8,0 m — donne v = 12,65 m/s. Deux masses
         voisines, deux vitesses très différentes : seule la hauteur a compté.
         La confrontation est encore plus nette avec l'exercice 4 (m = 1,5 kg,
         h_0 = 4,0 m, v = 8,94 m/s) : la masse la plus PETITE du chapitre
         arrive plus vite que celle de 8 kg, parce qu'elle part de plus haut.
         Trois énoncés suffisent à démolir l'intuition, sans un mot de cours. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Appliquer la conservation de l'énergie mécanique en présence de frottement",
      eleve: "Pour un skieur qui descend une piste réelle, l'élève écrit $v = \\sqrt{2gh_0}$ et " +
             "annonce une vitesse de $50$ m/s en bas d'une pente de $130$ m. Il applique la " +
             "formule sans vérifier l'hypothèse qui la rend valable.",
      cause: "L'élève a mémorisé une <strong>formule</strong> là où le cours donnait un " +
             "<strong>raisonnement sous condition</strong>. Le générateur d'exercices l'y aide " +
             "involontairement : les douze énoncés du moule B commencent tous par « dans le cas " +
             "simplifié (sans frottement) », si bien que la condition devient un ornement " +
             "d'énoncé qu'on saute pour aller au calcul. Après vingt exercices identiques, " +
             "personne ne lit plus la clause — et rien n'a jamais montré ce qui se passe quand " +
             "elle tombe.",
      remede: "Faire de la vérification une <strong>étape écrite</strong>, obligatoire et " +
              "numérotée : « étape 0 — y a-t-il des frottements ? ». Si oui, l'énergie mécanique " +
              "ne se conserve pas et il faut passer par le théorème de l'énergie cinétique en " +
              "comptant le travail (négatif) des frottements. Si non, on peut conserver " +
              "$E_m$. Une étape zéro qu'on écrit même quand la réponse est « non » est une étape " +
              "qu'on n'oublie pas le jour où la réponse est « oui ».<br/><br/>" +
              "Donner ensuite un <strong>contrôle de vraisemblance</strong> chiffré, que le " +
              "chapitre ne fournit pas : $50$ m/s, c'est $180$ km/h. Aucun skieur ne descend une " +
              "piste à cette vitesse — le record du monde de vitesse à ski est de l'ordre de " +
              "$250$ km/h sur une piste spécialement préparée. L'écart entre le modèle sans " +
              "frottement et la réalité est donc énorme, et c'est une excellente " +
              "nouvelle : il rend le frottement visible.<br/><br/>" +
              "Utiliser enfin cet écart pour <strong>mesurer</strong> ce qui est dissipé, ce qui " +
              "est le seul usage intéressant du modèle idéal : si la vitesse réelle en bas vaut " +
              "$20$ m/s au lieu des $50$ m/s prédits, la différence d'énergie cinétique donne " +
              "directement l'énergie perdue par frottement. Le modèle sans frottement n'est pas " +
              "un mensonge à réciter, c'est une <strong>référence</strong> à laquelle comparer.",
      /* Volontairement SANS renvoi, et vérifié : les vingt-sept énoncés tirés
         précisent TOUS « sans frottement » (moule B) ou portent sur une force
         unique dont le travail est demandé isolément (moule A). Pas un seul
         n'introduit de force dissipative, et aucun ne demande de sommer
         plusieurs travaux. Pointer un exercice du moule B pour remédier à
         cette erreur serait exactement contre-productif : c'est la répétition
         de ces énoncés qui la fabrique. C'est la limite la plus sérieuse du
         chapitre, signalée dans la `note` — le troisième attendu officiel
         (« identifier des situations de conservation ET DE NON-CONSERVATION »)
         n'est travaillé par aucun exercice, et l'évaluation ne le travaille
         pas davantage. Le remède donne le matériel d'un exercice à écrire :
         reprendre le skieur de l'exercice 6 (h_0 = 3,0 m, v = 7,75 m/s sans
         frottement) et annoncer une vitesse mesurée de 6,0 m/s ; la
         différence d'énergie cinétique, sur m = 4,0 kg, donne 48 J dissipés. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $F = 40$ N, $\theta = 60°$, $d = 5$ m : calculer $W$. La relation est
          donnée au cours et s'applique dans le sens direct, avec un cosinus
          d'angle aigu : exécution, donc « réaliser ».
     Q2 — satellite en orbite circulaire, force perpendiculaire à la vitesse :
          travail sur un tour complet ? Rien à calculer ; il faut juger quatre
          affirmations et reconnaître le cas $\cos 90° = 0$, qui est l'erreur 1
          de cette fiche : « valider ».
     Q3 — $m = 3$ kg, $v = 6$ m/s : calculer $E_c$. Sens direct de
          $E_c = \frac{1}{2}mv^2$ : « réaliser ».
     Q4 — $m = 4$ kg, $h_0 = 3{,}0$ m : calculer $v$ en bas. Il faut poser la
          conservation de $E_m$, écrire $\frac{1}{2}mv^2 = mgh_0$, constater
          que $m$ se simplifie et RENVERSER la relation pour extraire $v$ par
          une racine carrée. La masse donnée est même un distracteur — elle ne
          sert pas. Trois décisions avant le calcul : « analyser ».
     Q5 — somme des travaux négative : que se passe-t-il ? Il faut juger quatre
          conséquences d'un SIGNE, ce qui est l'erreur 2 de cette fiche, et
          écarter « sa masse diminue » : « valider ».

     « Valider » est mobilisé DEUX fois, et honnêtement : ce chapitre est celui
     du niveau où le signe et la vraisemblance portent le plus d'information —
     travail moteur ou résistant, $\Delta E_c$ positive ou négative, travail nul
     d'une force pourtant intense. C'est un contraste net avec les chapitres 1
     et 2, où la compétence dominante est « réaliser ». « Communiquer » n'est
     pas mobilisé : aucune des cinq questions ne demande de produire une
     explication rédigée. */
  competences: {
    evaluation: ["réaliser", "valider", "réaliser", "analyser", "valider"]
  }
};
