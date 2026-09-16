/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-satellites.prof.js
   Fiche professeur du chapitre « Mouvements des satellites et des planètes »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 1 : 30 énoncés tirés, dont 12 numérotés et 18 en
   banque supplémentaire. Deux moules alternés, identiques dans leurs données :
     - moule PÉRIODE (exercices IMPAIRS 1, 3, 5, 7, 9, 11... en fait 1, 3, 5,
       7, 10, 12) : on donne l'altitude h, on demande T en minutes ;
     - moule VITESSE (exercices 2, 4, 6, 8, 9, 11) : on donne h, on demande v
       en km/s.
   TOUS les énoncés donnent l'ALTITUDE h et jamais le rayon r : la conversion
   $r = R_{Terre} + h$ est donc exigée trente fois de suite, ce qui en fait
   l'erreur numéro un du chapitre et lui vaut deux renvois croisés.
   Aucun exercice ne fait intervenir la masse du satellite, ni la troisième
   loi de Kepler comme rapport entre deux orbites : c'est ce qui contraint
   l'erreur 4 à rester sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-satellites"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     ch. 1 (Mouvement dans un champ uniforme) : RETENU. Ce chapitre-ci est le
     second épisode d'une même histoire, et il ne se comprend qu'en contraste
     avec le premier. Le ch. 1 installe la méthode complète — définir le
     système, choisir un référentiel galiléen, faire le bilan des forces,
     appliquer le PFD, projeter — sur le cas le plus simple, celui d'une force
     CONSTANTE. Le ch. 2 applique exactement la même méthode à une force dont
     la direction change en permanence, et c'est tout l'intérêt : l'élève
     découvre qu'une accélération peut exister alors que la NORME de la vitesse
     ne change pas. Cette idée est inaccessible sans le point de comparaison
     qu'est le mouvement parabolique. La méthode 1 du cours reprend d'ailleurs
     mot pour mot la formulation du ch. 1 (« système, référentiel supposé
     galiléen, bilan des forces »).

     ch. 3 (Dynamique newtonienne) : ÉCARTÉ, et c'est le candidat sérieux —
     le chapitre invoque le PFD. Mais le PFD sous la forme $\sum\vec F = m\vec a$
     vient de PREMIÈRE ; le ch. 3 n'apporte que la quantité de mouvement et la
     conservation, dont ce chapitre-ci n'a aucun usage. Le déclarer
     contraindrait à placer le ch. 3 avant le ch. 2 sans bénéfice.

     ch. 4 (Énergie mécanique) : ÉCARTÉ. Le chapitre ne fait aucun bilan
     énergétique — ni énergie potentielle gravitationnelle, ni vitesse de
     libération, qui sont hors programme ici.
     ch. 5 à 11 : aucun lien.

     LE PRÉREQUIS LE PLUS LOURD N'EST PAS DÉCLARABLE : c'est le chapitre
     « Champ gravitationnel » de PREMIÈRE, qui installe $F = GmM/r^2$. Il est
     traité dans `note`, qui est imprimée. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2, celui du livre.

     Contrainte dure : ce chapitre doit suivre le chapitre 1, dont il est le
     prolongement direct (champ uniforme -> champ non uniforme). Le bloc
     mécanique de la terminale se tient donc dans l'ordre 1 -> 2 -> 3 -> 4, et
     le livre le respecte déjà.

     PRÉREQUIS MATHÉMATIQUE, à vérifier avant de lancer le chapitre : la
     <strong>racine carrée</strong> et surtout la <strong>racine cubique</strong>,
     qui apparaît dès qu'on inverse $T = 2\pi\sqrt{r^3/GM}$ pour trouver $r$
     (cas du satellite géostationnaire, traité dans l'exemple résolu). Beaucoup
     d'élèves n'ont jamais utilisé la touche correspondante sur leur
     calculatrice, et la puissance $1/3$ n'est pas une notation familière. Une
     mise au point de dix minutes évite une heure perdue. Le chapitre n'exige
     en revanche ni dérivée, ni équation différentielle : rien n'empêche donc
     de le placer tôt dans l'année. */
  rangConseille: 2,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser les lois de Newton pour établir l'expression de la vitesse et de la période d'un satellite en orbite circulaire",
    "Exploiter la troisième loi de Kepler dans le cas d'un mouvement circulaire",
    "Établir et exploiter l'expression de l'accélération d'un système en mouvement circulaire uniforme"
  ],

  note: "La gravitation universelle, le mouvement circulaire uniforme, la vitesse et la période " +
        "orbitales, le satellite géostationnaire et la troisième loi de Kepler sont au programme de " +
        "spécialité de terminale : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Deux prérequis comptent, et un seul est visible.</strong> Le chapitre s'appuie sur " +
        "le chapitre 1 (« Mouvement dans un champ uniforme »), qui installe la méthode — système, " +
        "référentiel galiléen, bilan des forces, PFD — et fournit le contraste indispensable entre " +
        "force constante et force de direction variable ; cela, la colonne « S'appuie sur » " +
        "l'affiche. Mais il suppose aussi acquis le <strong>« Champ gravitationnel »</strong> de " +
        "<strong>première</strong>, qui installe $F = G\\dfrac{mM}{r^2}$ et la notion de champ : un " +
        "prérequis ne pouvant viser qu'un chapitre du même niveau, <strong>rien ne le " +
        "montrera</strong>. Si la classe ne sait plus que la force gravitationnelle varie en " +
        "$1/r^2$, le reprendre avant, car le chapitre ne le redémontre pas.<br/><br/>" +
        "<strong>Le prérequis mathématique à vérifier est la racine cubique.</strong> Inverser " +
        "$T = 2\\pi\\sqrt{r^3/GM}$ pour trouver le rayon d'une orbite géostationnaire demande " +
        "$r = \\sqrt[3]{GMT^2/4\\pi^2}$ : beaucoup d'élèves n'ont jamais utilisé cette touche de " +
        "leur calculatrice, et la notation en puissance $1/3$ ne leur est pas familière. Dix " +
        "minutes de mise au point avant l'exemple résolu évitent une heure perdue. Le chapitre " +
        "n'exige ni dérivée ni équation différentielle : il peut donc être placé tôt dans " +
        "l'année.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés donnent " +
        "<strong>tous</strong> une altitude $h$ et demandent une vitesse ou une période : la " +
        "conversion $r = R_{Terre} + h$ y est exigée trente fois, ce qui est un bon entraînement " +
        "mais un entraînement étroit. Aucun ne fait intervenir la <strong>masse du " +
        "satellite</strong> — le fait le plus contre-intuitif du chapitre —, aucun n'exploite la " +
        "<strong>troisième loi de Kepler</strong> comme rapport entre deux orbites, alors que c'est " +
        "le deuxième attendu officiel, et aucun ne porte sur le satellite " +
        "<strong>géostationnaire</strong> pourtant traité dans l'exemple résolu. Prévoir un travail " +
        "spécifique sur ces trois points, que le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Utiliser l'altitude à la place du rayon de l'orbite",
      eleve: "Pour un satellite à $h = 800$ km, l'élève calcule directement " +
             "$v = \\sqrt{GM/h}$ avec $r = 8{,}0\\times10^5$ m et trouve environ $22$ km/s au lieu " +
             "de $7{,}45$ km/s. Ou, pour la période, il annonce quelques minutes au lieu de " +
             "$100{,}8$ min.",
      cause: "L'énoncé donne une altitude, les formules demandent un rayon, et les deux sont des " +
             "longueurs exprimées en kilomètres : rien ne distingue visuellement les deux " +
             "grandeurs. Le fond du problème est géométrique — la <strong>vitesse orbitale est " +
             "gouvernée par la distance au CENTRE de la Terre</strong>, parce que c'est de là que " +
             "vient l'attraction, alors que l'altitude se mesure depuis la surface. Le rayon " +
             "terrestre, $6\\,371$ km, n'est pas une correction négligeable : pour un satellite à " +
             "$800$ km, il représente près de <strong>neuf dixièmes</strong> du rayon de l'orbite. " +
             "L'erreur ne produit donc pas un petit écart, mais un résultat sans rapport.",
      remede: "Faire tracer le <strong>schéma</strong> une fois pour toutes, et l'annoter : le " +
              "centre de la Terre, la surface, le satellite. $R_{Terre}$ va du centre à la surface, " +
              "$h$ de la surface au satellite, $r$ du centre au satellite. La relation " +
              "$r = R_{Terre} + h$ se lit alors sur la figure, elle ne se mémorise pas.<br/><br/>" +
              "Imposer ensuite une <strong>ligne de calcul séparée</strong> avant toute formule : " +
              "« $r = 6\\,371 + 800 = 7\\,171$ km $= 7{,}171\\times10^6$ m ». Tant que cette ligne " +
              "n'est pas écrite, on n'ouvre pas la formule. Le piège du cours signale explicitement " +
              "cette confusion — la relire au moment de l'erreur, et non avant, est ce qui la rend " +
              "opérante.<br/><br/>" +
              "Donner enfin un <strong>repère d'ordre de grandeur</strong> qui rejette l'erreur " +
              "sans calcul : tous les satellites en orbite basse vont à peu près à " +
              "<strong>$8$ km/s</strong>, et font le tour de la Terre en environ " +
              "<strong>90 minutes</strong>. C'est vrai de la Station spatiale comme d'un satellite " +
              "météorologique. Une vitesse de $22$ km/s ou une période de dix minutes est fausse " +
              "avant d'être vérifiée.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 1) : l'exercice 1 donne h = 800 km et demande
         la période, réponse 100,8 min. C'est la plus grande altitude du
         tirage (les autres tirent 300 à 700 km), donc le cas où l'erreur est
         la MOINS punitive en proportion — et pourtant l'élève qui prend
         r = 800 km trouve environ 3,8 min au lieu de 100,8 min, soit un
         facteur 26. Le renvoi pointe le 1 parce qu'il ouvre le chapitre et
         que son résultat, une centaine de minutes, est exactement le repère
         « un tour en une heure et demie » que donne le remède. L'exercice 7
         tire la même altitude et la même réponse : les deux se corrigent
         ensemble. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'un satellite plus lourd doit aller plus vite",
      eleve: "L'élève affirme qu'« un gros satellite de télécommunication doit aller plus vite qu'un " +
             "micro-satellite sur la même orbite, puisqu'il est plus lourd ». Ou bien il cherche la " +
             "masse du satellite dans l'énoncé pour pouvoir calculer $v$, et se bloque quand elle " +
             "n'y est pas.",
      cause: "L'intuition terrestre dit qu'un objet lourd est plus difficile à mettre en mouvement, " +
             "et elle n'est pas fausse — elle est simplement <strong>compensée</strong> ici. Un " +
             "satellite deux fois plus lourd subit une attraction deux fois plus grande, mais " +
             "résiste aussi deux fois plus à l'accélération : les deux effets se neutralisent " +
             "exactement. Algébriquement, le $m$ du premier membre de " +
             "$G\\dfrac{mM}{r^2} = m\\dfrac{v^2}{r}$ se simplifie avec celui du second. L'élève ne " +
             "voit pas cette simplification parce qu'on la lui présente comme un résultat, pas " +
             "comme un calcul.",
      remede: "Faire écrire l'équation du mouvement <strong>avant</strong> de la simplifier, et " +
              "faire barrer le $m$ des deux côtés au tableau, à la craie. La simplification doit " +
              "être <strong>vue</strong>, pas racontée : c'est un geste de trente secondes qui " +
              "remplace un paragraphe de cours.<br/><br/>" +
              "Nommer alors le fait physique que cette simplification traduit, et qui est l'un des " +
              "plus profonds de la mécanique : la masse qui apparaît dans la force de gravitation " +
              "est la <strong>même</strong> que celle qui apparaît dans le PFD. C'est aussi la " +
              "raison pour laquelle tous les corps tombent à la même vitesse — le lien avec le " +
              "chapitre 1 est direct et vaut d'être fait explicitement.<br/><br/>" +
              "Utiliser enfin les <strong>énoncés eux-mêmes comme argument</strong> : aucun des " +
              "exercices du chapitre ne donne la masse du satellite, et pourtant tous ont une " +
              "réponse unique et déterminée. Si la masse comptait, la question serait impossible. " +
              "C'est l'argument le plus court et le plus convaincant dont dispose l'enseignant, et " +
              "il ne coûte rien.",
      /* Vérifié contre le tirage réel (2026-09-17) : les exercices 4 et 8
         tirent tous deux h = 300 km et donnent la même réponse, 7,73 km/s —
         mais le 4 porte sur « un micro-satellite de télécommunication » et le
         8 sur « un satellite d'observation de la Terre ». Le tirage offre donc
         GRATUITEMENT la démonstration : deux satellites de natures et de
         masses manifestement différentes, même altitude, même vitesse au
         centième près. Le renvoi pointe le 4 (le micro-satellite, le plus
         léger des deux par son nom) et la correction gagne à faire lire les
         deux énoncés côte à côte. Aucun des trente énoncés ne donne de masse
         de satellite : la question « combien pèse-t-il ? » n'a jamais de
         réponse dans ce chapitre, et c'est exactement le point. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire qu'une orbite plus haute demande d'aller plus vite",
      eleve: "L'élève classe les satellites en affirmant qu'« un satellite à $800$ km va plus vite " +
             "qu'un satellite à $300$ km, puisqu'il doit parcourir un plus grand cercle ». Il est " +
             "surpris de trouver $7{,}45$ km/s contre $7{,}73$ km/s, et soupçonne une erreur de " +
             "calcul là où il n'y en a pas.",
      cause: "Deux raisonnements justes se contredisent dans la tête de l'élève, et il n'a pas les " +
             "moyens de les départager. Le premier est géométrique : un cercle plus grand a une " +
             "circonférence plus grande. Le second est dynamique : plus loin, l'attraction est plus " +
             "faible, donc il faut moins de vitesse pour rester en orbite. C'est le second qui " +
             "gouverne la vitesse — $v = \\sqrt{GM/r}$ décroît quand $r$ croît — tandis que le " +
             "premier gouverne la <strong>période</strong>, qui elle augmente bel et bien. L'élève " +
             "a raison sur la période et tort sur la vitesse, et personne ne le lui a dit.",
      remede: "Séparer explicitement les <strong>deux questions</strong> que l'élève confond : " +
              "« va-t-il plus vite ? » (non : $v$ diminue) et « met-il plus de temps ? » (oui : $T$ " +
              "augmente). Les deux réponses tiennent ensemble sans contradiction — le satellite plus " +
              "haut est plus lent ET a plus de chemin à faire, donc sa période augmente doublement. " +
              "Le récapitulatif du cours l'énonce en une ligne ; la faire vérifier sur deux valeurs " +
              "numériques vaut mieux que de la lire.<br/><br/>" +
              "Faire lire la <strong>formule comme une phrase</strong> : dans " +
              "$v = \\sqrt{GM/r}$, le $r$ est au <strong>dénominateur</strong>. Un dénominateur qui " +
              "grandit fait un quotient qui diminue. Ce n'est pas une propriété de la gravitation, " +
              "c'est une propriété des fractions, et l'élève la connaît depuis le collège : il faut " +
              "seulement l'autoriser à s'en servir ici.<br/><br/>" +
              "Ancrer enfin sur un <strong>cas extrême parlant</strong> : le satellite " +
              "géostationnaire, à $35\\,800$ km d'altitude, ne va qu'à environ $3$ km/s — moins de " +
              "la moitié de la vitesse d'un satellite en orbite basse — et pourtant sa période est " +
              "de $24$ heures au lieu de $90$ minutes. Un seul exemple bien choisi ancre la " +
              "double conclusion mieux qu'une règle abstraite.",
      /* Vérifié contre le tirage réel (2026-09-17) : les exercices 4
         (h = 300 km, v = 7,73 km/s) et 2 (h = 700 km, v = 7,5 km/s) encadrent
         la plage d'altitudes du tirage sur le moule VITESSE, et donnent bien
         une vitesse DÉCROISSANTE quand l'altitude croît. Le renvoi pointe le 2
         parce que c'est le plus haut des deux et donc celui qui produit la
         surprise. La comparaison est d'autant plus lisible que le tirage
         couvre six altitudes (300, 400, 500, 600, 700, 800 km) avec des
         vitesses régulièrement décroissantes (7,73 ; 7,67 ; 7,61 ; 7,56 ;
         7,50 ; 7,45 km/s) : faire reporter ces six couples au tableau après
         correction rend la décroissance indiscutable, et le même exercice
         montre l'inverse sur la période (90,4 -> 100,8 min). */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Appliquer la troisième loi de Kepler comme une proportionnalité simple",
      eleve: "Pour deux satellites dont le second orbite quatre fois plus loin, l'élève annonce une " +
             "période quatre fois plus grande — $8$ h au lieu de $16$ h — en raisonnant « quatre " +
             "fois plus loin, quatre fois plus long ». Ou bien il écrit $T_2 = T_1 \\times 4^2$ et " +
             "trouve $32$ h, en confondant le carré et la puissance $3/2$.",
      cause: "La loi $T^2/r^3 = $ constante fait intervenir deux exposants différents, et l'élève " +
             "n'en manipule qu'un à la fois. Le passage correct demande de " +
             "<strong>déplacer un exposant d'un membre à l'autre</strong> : de " +
             "$T^2 \\propto r^3$ on tire $T \\propto r^{3/2}$, ce qui suppose d'accepter une " +
             "puissance fractionnaire. Or les puissances fractionnaires ne sont pas encore une " +
             "évidence en terminale. L'élève retombe donc sur le seul modèle qu'il maîtrise, la " +
             "proportionnalité directe, qui est le réflexe le plus solide de sa scolarité.",
      remede: "Faire travailler la loi sous sa forme de <strong>rapport</strong>, qui évite " +
              "complètement les puissances fractionnaires : " +
              "$\\dfrac{T_2^2}{T_1^2} = \\dfrac{r_2^3}{r_1^3}$. On calcule le rapport des rayons, on " +
              "l'élève au cube, et on prend la racine carrée du résultat. Trois opérations " +
              "élémentaires, aucune notation nouvelle.<br/><br/>" +
              "Faire ensuite <strong>encadrer avant de calculer</strong> : puisque $T$ croît plus " +
              "vite que $r$ (exposant $3/2 > 1$), un rapport de rayons de $4$ doit donner un " +
              "rapport de périodes <strong>supérieur à $4$</strong>. Une réponse de $8$ h (rapport " +
              "$4$) est trop petite, une réponse de $32$ h (rapport $16$) est trop grande : le bon " +
              "rapport est $4^{1{,}5} = 8$, donc $T_2 = 16$ h. L'encadrement ne donne pas la " +
              "réponse mais élimine les deux erreurs.<br/><br/>" +
              "Vérifier enfin sur un <strong>cas connu</strong>, ce qui est la meilleure façon " +
              "d'installer une confiance dans la loi : Mars est environ $1{,}5$ fois plus loin du " +
              "Soleil que la Terre, et son année dure environ $1{,}9$ an — soit $1{,}5^{1{,}5}$. " +
              "Une loi qu'on a vue fonctionner sur une planète réelle se retient autrement qu'une " +
              "formule de cours.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés tirés donnent TOUS une altitude unique et demandent la vitesse
         ou la période d'UN SEUL satellite, calculées par v = racine(GM/r) ou
         T = 2*pi*racine(r^3/GM). Aucun ne met deux orbites en relation, aucun
         ne mentionne Kepler, aucun ne demande de rapport. La troisième loi de
         Kepler — deuxième attendu officiel du chapitre — n'est donc travaillée
         nulle part dans les exercices, alors qu'elle figure dans les formules
         du cours. Les seuls supports du livre sont les questions 3 et 5 de
         l'évaluation (la 3 réécrite le 2026-09-17 : r2/r1 = 3 et un
         raisonnement à juger ; la 5 : r1 = 8 000 km, T1 = 2 h,
         r2 = 32 000 km), mais la règle éditoriale du
         projet interdit de renvoyer vers l'évaluation notée : on remédie avant
         d'évaluer. C'est la limite signalée dans la `note`, et elle appelle un
         exercice écrit par l'enseignant. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $r = 7{,}0\times10^6$ m donné, calculer $v$. La relation
          $v = \sqrt{GM/r}$ est dans les formules du cours, et — fait notable —
          l'énoncé donne directement $r$, pas l'altitude : aucune conversion,
          aucun choix. Exécution pure : « réaliser ».
     Q2 — la force de gravitation joue le rôle de quelle force ? Restitution de
          la propriété centrale du cours, avec « force centrifuge » en
          distracteur classique : « s'approprier ».
     Q3 — RÉÉCRITE le 2026-09-17. L'ancien énoncé ($r = 8{,}0\times10^6$ m,
          calculer $T$ en minutes) avait exactement la structure de la Q1 —
          une formule du cours appliquée à un satellite unique dont $r$ est
          donné — et la Q5 traite déjà les périodes par les rapports de
          Kepler : trois questions sur cinq appliquaient la même relation au
          même satellite.
          Le nouvel énoncé met DEUX orbites en relation et demande de juger
          Rayan, qui annonce une période trois fois plus grande pour un rayon
          trois fois plus grand. Il faut EXPLIQUER que $T^2/r^3$ constant n'est
          pas une proportionnalité : produire une explication, donc
          « communiquer ».
          Le calcul reste nécessaire : cuber le rapport des rayons, en prendre
          la racine ($3^{1{,}5} \approx 5{,}2$, soit $T_2 \approx 10{,}4$ h) et
          encadrer le résultat entre les deux erreurs classiques — $6$ h
          (proportionnalité) et $18$ h (distracteur 1, qui confond le carré et
          la puissance $3/2$). Le rapport choisi est $3$, et non $4$ comme en
          Q5, pour ne pas dupliquer la dernière question du devoir.
          La question porte désormais sur l'erreur 4 de cette fiche —
          « appliquer la troisième loi de Kepler comme une proportionnalité
          simple » — explicitement SANS renvoi parce que les trente énoncés
          tirés donnent tous une altitude unique et ne mettent jamais deux
          orbites en relation.
     Q4 — de quoi dépend la vitesse orbitale ? Il faut juger quatre
          affirmations sur ce qui intervient et ce qui n'intervient pas, ce qui
          est un contrôle de cohérence sur la formule, pas une restitution :
          « valider ». C'est l'erreur 2 de cette fiche.
     Q5 — $r_1$, $T_1$, $r_2$ donnés, trouver $T_2$ par Kepler. La relation
          n'est pas utilisable telle quelle : il faut la mettre en rapport et
          manipuler un exposant $3/2$, ce qui est un choix de méthode —
          « analyser ». C'est l'erreur 4 de cette fiche, qu'elle partage
          désormais avec la Q3 réécrite — les deux seules questions du livre à
          travailler Kepler, les exercices n'en proposant aucune.

     « Communiquer » est mobilisé une fois depuis la réécriture de la Q3, sur
     le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique. Reste un manque, à combler en devoir maison :
     justifier À L'ÉCRIT que la masse du satellite n'intervient pas est un
     attendu récurrent du baccalauréat, et la Q4 ne le fait que sous forme de
     jugement. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "communiquer", "valider", "analyser"]
  }
};
