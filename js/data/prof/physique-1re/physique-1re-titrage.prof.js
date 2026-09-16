/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-titrage.prof.js
   Fiche professeur du chapitre « Titrage » (première spécialité), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 6, ouvrage MONO-NIVEAU `lycee-physique-1re` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Deux
   moules alternés, et la distinction entre eux est LE contenu du chapitre :
     - moule A (diacide, réaction 1:2, $C_A = \dfrac{C_B V_{eq}}{2 V_A}$) :
       exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (acide fort, réaction 1:1, $C_A = \dfrac{C_B V_{eq}}{V_A}$) :
       exercices PAIRS 2, 4, 6, 8, 10, 12.
   Fait remarquable et exploité ci-dessous : les deux moules ne se distinguent
   QUE par le facteur 2, et l'énoncé du moule A donne explicitement l'équation
   support $AH_2 + 2\,HO^- \rightarrow A^{2-} + 2\,H_2O$. Un élève qui applique
   mécaniquement $C_AV_A = C_BV_{eq}$ trouve donc, sur tous les exercices
   impairs, exactement le DOUBLE de la bonne réponse. C'est le diagnostic le
   plus net du niveau, et l'erreur 1 s'y appuie.

   Autre fait, exploité par l'erreur 4 : les volumes sont donnés en millilitres
   des DEUX côtés du quotient. Ils se simplifient, et aucune conversion en
   litres n'est nécessaire — ce qui est vrai ici et faux dès qu'on cherche une
   quantité de matière.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-titrage"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     ch. 6 (La réaction chimique : avancement et stœchiométrie) : RETENU, et
     c'est le prérequis dur du chapitre. Toute la relation d'équivalence en
     découle : à l'équivalence, les réactifs ont été mélangés dans les
     proportions stœchiométriques exactes — autrement dit, ils sont TOUS LES
     DEUX limitants au même moment. Sans le chapitre 6, la relation
     $\dfrac{C_AV_A}{a} = \dfrac{C_BV_{eq}}{b}$ est une formule à trous où l'on
     ne sait pas quoi mettre en a et en b ; avec lui, c'est la traduction
     directe du tableau d'avancement. C'est exactement ce qui sépare un élève
     qui réussit le moule A d'un élève qui ne réussit que le moule B.

     ch. 8 (Structure des entités chimiques) : ÉCARTÉ. Le chapitre 8 porte sur
     la structure des molécules (Lewis, VSEPR) ; aucune ligne de ce chapitre-ci
     n'en dépend, et l'ordre entre les deux est indifférent.

     ch. 11 (Circuits électriques) : ÉCARTÉ, malgré le suivi
     CONDUCTIMÉTRIQUE — qui est une tentation réelle. Mais la conductivité
     $\sigma$ n'est ici qu'une grandeur qu'on relève pour repérer une rupture
     de pente ; elle n'est jamais calculée, jamais reliée à une intensité ni à
     une résistance. Le chapitre 11 ne lui apporte rien, et vient d'ailleurs
     après. */
  prerequis: [6],

  /* Rang conseillé (2026-09-17) : rang 7, celui du livre.

     Immédiatement après le chapitre 6, dont il est l'application
     expérimentale la plus directe : le titrage EST une stœchiométrie qu'on
     mesure. Les séparer de plusieurs semaines ferait perdre le lien, et le
     lien est ici tout le sens du chapitre — sans lui, la relation
     d'équivalence redevient une formule de plus.

     Le placer plus tôt est impossible (le 6 doit précéder). Le placer plus
     tard est possible mais coûteux, pour la raison ci-dessus.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : léger, comme au chapitre 6. Un
     produit en croix et la résolution d'une équation du premier degré à une
     inconnue. Le seul point délicat n'est pas mathématique mais
     d'interprétation : savoir OÙ placer le facteur stœchiométrique dans le
     quotient — ce qui relève du chapitre 6, pas des mathématiques. Aucune
     contrainte de calendrier mathématique ne pèse donc sur ce chapitre. */
  rangConseille: 7,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Relier qualitativement l'évolution de la conductivité d'une solution au cours d'un titrage à la nature des ions présents",
    "Déterminer la concentration d'une espèce par un titrage avec suivi conductimétrique ou colorimétrique",
    "Mettre en œuvre un protocole expérimental d'un titrage avec suivi conductimétrique ou colorimétrique"
  ],

  note: "Le titrage, la réaction support, l'équivalence et le suivi conductimétrique sont au " +
        "programme de spécialité de première : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Un prérequis de PREMIÈRE, déclaré, et deux de SECONDE, non " +
        "déclarables.</strong> Le chapitre s'appuie sur le chapitre 6 (« La réaction chimique : " +
        "avancement et stœchiométrie »), dont il est l'application expérimentale — cela, la " +
        "colonne « S'appuie sur » le montre, et c'est la dépendance la plus forte du bloc de " +
        "chimie. Il suppose en outre acquises la <strong>concentration en quantité de " +
        "matière</strong> ($C = n/V$) et la <strong>dilution</strong>, qui sont de " +
        "<strong>seconde</strong> : un prérequis ne pouvant viser qu'un chapitre du même " +
        "niveau, rien ne l'affichera. La dilution n'est pas un détail — la question 5 de " +
        "l'évaluation porte dessus, et le titrage d'une solution trop concentrée est le cas le " +
        "plus fréquent au laboratoire. Si le facteur de dilution n'est pas sûr, le reprendre " +
        "<strong>avant</strong>.<br/><br/>" +
        "<strong>Les prérequis mathématiques sont légers ; ce n'est pas là que ça " +
        "coince.</strong> Un produit en croix suffit. La difficulté réelle est de décider " +
        "<strong>où placer le coefficient stœchiométrique</strong>, ce qui relève du " +
        "chapitre 6 et non des mathématiques. Le dire évite de faire porter au calcul une " +
        "difficulté qui est de raisonnement.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas.</strong> Les " +
        "vingt-sept énoncés tirés alternent deux moules qui ne diffèrent que par le facteur " +
        "stœchiométrique : diacide ($1{:}2$) sur les impairs, acide fort ($1{:}1$) sur les " +
        "pairs. C'est un excellent entraînement à l'erreur dominante du chapitre, et c'est à peu " +
        "près tout ce que le manuel fournit. Trois absences majeures. Le " +
        "<strong>volume équivalent</strong> n'est jamais à DÉTERMINER : tous les énoncés le " +
        "donnent (« l'équivalence est repérée pour $V_{eq} = \\dots$ »), alors que le repérer sur " +
        "une courbe $\\sigma = f(V)$ est le geste central du deuxième attendu officiel. " +
        "L'<strong>évolution de la conductivité</strong> — premier attendu officiel, « relier " +
        "qualitativement l'évolution de $\\sigma$ à la nature des ions présents » — n'est " +
        "travaillée par <strong>aucun</strong> exercice ni aucune question d'évaluation : c'est " +
        "l'absence la plus grave du chapitre, et elle demande un travail construit sur mesure. " +
        "Et le <strong>protocole</strong> (troisième attendu) ne peut évidemment pas s'évaluer " +
        "sur papier : burette, prise d'essai à la pipette jaugée, agitation, cellule " +
        "conductimétrique — cela se joue en travaux pratiques, et le chapitre ne le remplace " +
        "pas.",

  erreurs: [
    {
      titre: "Appliquer $C_AV_A = C_BV_{eq}$ à une réaction qui n'est pas $1{:}1$",
      eleve: "Pour un diacide titré selon $AH_2 + 2\\,HO^- \\rightarrow A^{2-} + 2\\,H_2O$, avec " +
             "$V_A = 20$ mL, $C_B = 0{,}20$ mol/L et $V_{eq} = 26{,}0$ mL, l'élève écrit " +
             "$C_A = \\dfrac{0{,}20 \\times 26{,}0}{20} = 0{,}26$ mol/L au lieu de " +
             "$0{,}13$ mol/L. Il a pourtant l'équation sous les yeux.",
      cause: "La relation $C_AV_A = C_BV_{eq}$ est <strong>mémorisée comme LA formule du " +
             "titrage</strong>, alors qu'elle n'en est qu'un cas particulier — le plus fréquent, " +
             "ce qui aggrave les choses. L'élève ne la lit pas comme une conséquence de la " +
             "stœchiométrie, mais comme une loi autonome ; dès lors, l'équation de l'énoncé " +
             "devient un décor. Le générateur reflète fidèlement le piège, en alternant les deux " +
             "cas sans prévenir. C'est en réalité un défaut de lecture d'énoncé autant qu'un " +
             "défaut de chimie.",
      remede: "Faire <strong>écrire la relation d'équivalence en quantités de matière avant toute " +
              "concentration</strong>, à chaque exercice : « à l'équivalence, il a été versé " +
              "<strong>deux fois</strong> plus de $HO^-$ qu'il n'y avait de $AH_2$ », soit " +
              "$n(HO^-)_{versé} = 2 \\times n(AH_2)$. Cette phrase se lit directement sur " +
              "l'équation ; la formule en concentrations n'en est que la traduction, et elle " +
              "vient <strong>après</strong>.<br/><br/>" +
              "Installer le réflexe de lecture qui manque : <strong>entourer les coefficients " +
              "de l'équation support</strong> dès la première lecture de l'énoncé, au crayon, " +
              "avant même de relever les données numériques. Un coefficient entouré ne s'oublie " +
              "pas ; un coefficient lu en diagonale, toujours.<br/><br/>" +
              "Contrôler enfin par le <strong>sens physique</strong>, qui tranche sans calcul : " +
              "un diacide libère deux $H_3O^+$ par molécule. Il en faut donc " +
              "<strong>moins</strong> pour consommer un volume donné de base — la concentration " +
              "trouvée doit être <strong>plus petite</strong> que dans le cas $1{:}1$, jamais " +
              "plus grande. Un élève qui a doublé au lieu de diviser par deux obtient un résultat " +
              "quatre fois trop grand, et ce contrôle le lui dit.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 6) : l'exercice 1 donne le diacide avec
         V_A = 20 mL, C_B = 0,20 mol/L, V_eq = 26,0 mL, réponse
         C_A = 0,13 mol/L. Ce tirage est le meilleur support du chapitre pour
         cette erreur, et pour une raison arithmétique précise : la bonne
         réponse (0,13) et l'erreur (0,26) sont toutes deux des nombres ronds
         à deux décimales, dans un rapport de 2 exactement. Aucun des cinq
         autres exercices du moule A n'offre cette lisibilité — l'exercice 3
         donne 0,0668 contre 0,1335, l'exercice 9 donne 0,0333 contre 0,0665.
         Sur l'exercice 1, l'élève VOIT le facteur 2 dans sa propre réponse, ce
         qui rend la remédiation immédiate. À enchaîner avec l'exercice 2
         (acide fort, 1:1, V_A = 10, C_B = 0,10, V_eq = 5,7, réponse 0,057) :
         deux énoncés de structure identique, deux relations différentes. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre le réactif titré et le réactif titrant",
      eleve: "L'élève place $C_A$ (l'inconnue) du côté du volume versé et $C_B$ (la concentration " +
             "connue) du côté de la prise d'essai : il calcule " +
             "$C_A = \\dfrac{C_B \\times V_A}{V_{eq}}$ au lieu de " +
             "$\\dfrac{C_B \\times V_{eq}}{V_A}$. Sur l'exercice 12, il annonce $0{,}198$ au lieu " +
             "de $0{,}202$ mol/L — un écart si faible qu'il ne le voit pas.",
      cause: "Les deux solutions jouent des rôles opposés mais portent des noms qui se " +
             "ressemblent — <em>titré</em> et <em>titrant</em> ne diffèrent que d'une syllabe, et " +
             "la langue courante ne les distingue pas. Or l'un est " +
             "<strong>dans le bécher</strong> en volume connu et concentration inconnue, l'autre " +
             "est <strong>dans la burette</strong> en concentration connue et volume à mesurer. " +
             "L'élève qui n'a pas manipulé n'a aucune image mentale pour ancrer la différence, " +
             "et l'énoncé écrit lui donne quatre nombres sans lui dire lequel va où.",
      remede: "Ancrer sur le <strong>matériel</strong>, qui est la seule mnémotechnique fiable : " +
              "dans la <strong>burette</strong>, ce que je verse, dont je connais la " +
              "concentration et dont je mesure le volume ; dans le <strong>bécher</strong>, ce " +
              "que je cherche, dont je connais le volume (je l'ai prélevé à la pipette) et dont " +
              "j'ignore la concentration. Deux récipients, deux rôles, et jamais " +
              "d'inversion.<br/><br/>" +
              "Imposer un <strong>tableau de tri des données</strong> avant tout calcul, à deux " +
              "colonnes — titré / titrant — dans lequel on range les quatre nombres de l'énoncé. " +
              "L'inconnue apparaît alors visuellement, et la relation se lit d'elle-même. Le tri " +
              "prend trente secondes et supprime l'erreur à la racine.<br/><br/>" +
              "Contrôler enfin par le <strong>sens de variation</strong>, qui est un vrai " +
              "réflexe de chimiste : si l'on a dû verser <strong>beaucoup</strong> de base pour " +
              "atteindre l'équivalence, c'est que l'acide était <strong>concentré</strong>. " +
              "$C_A$ doit donc augmenter avec $V_{eq}$ — et $V_{eq}$ doit se trouver au " +
              "<strong>numérateur</strong>. La formule inversée fait exactement le contraire, et " +
              "ce contrôle la refuse sans calcul.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         V_A = 30 mL, C_B = 0,15 mol/L, V_eq = 37,5 mL sur une réaction 1:1,
         réponse C_A = 0,1875 mol/L. C'est le tirage choisi parmi les six du
         moule B pour une raison précise : c'est le seul où V_eq (37,5 mL) est
         FRANCHEMENT différent de V_A (30 mL), et où l'inversion produit donc
         un résultat nettement distinct — 0,12 mol/L au lieu de 0,1875, soit
         un écart de 36 %. Sur l'exercice 12 (V_A = 10, V_eq = 10,1), les deux
         réponses valent 0,202 et 0,198 : l'erreur est invisible, et
         l'exercice serait un mauvais support de remédiation. La leçon vaut
         d'être dite en classe : quand V_eq est proche de V_A, aucun contrôle
         numérique ne protège — seul le tri des données protège. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Chercher l'équivalence au minimum de la courbe de conductivité",
      eleve: "Sur une courbe $\\sigma = f(V)$ en V descendant puis remontant, l'élève place " +
             "$V_{eq}$ au point le plus bas de la courbe, ou au milieu du palier. Il cherche « le " +
             "moment où la conductivité est la plus faible » plutôt que la rupture de pente.",
      cause: "L'élève transpose une habitude légitime — sur une courbe de pH-métrie, l'équivalence " +
             "est bien au point d'inflexion, c'est-à-dire à un endroit remarquable de la " +
             "<strong>courbe elle-même</strong>. En conductimétrie, le repère n'est pas un point " +
             "de la courbe mais l'<strong>intersection de deux droites</strong> qu'il faut " +
             "tracer soi-même, et qui peut tomber là où aucun point de mesure n'existe. C'est un " +
             "geste graphique neuf, et l'élève cherche naturellement un extremum, qui est le seul " +
             "repère graphique qu'il connaisse.",
      remede: "Faire tracer les <strong>deux droites au crayon, à la règle</strong>, avant toute " +
              "lecture : une sur les points d'avant l'équivalence, une sur ceux d'après. " +
              "Prolonger les deux jusqu'à ce qu'elles se coupent. $V_{eq}$ se lit à " +
              "l'abscisse de l'intersection — et il tombe très souvent " +
              "<strong>entre</strong> deux points de mesure, ce qui est normal et qu'il faut dire " +
              "d'avance.<br/><br/>" +
              "Expliquer <strong>pourquoi</strong> il y a deux droites, ce qui transforme la " +
              "recette en raisonnement : avant l'équivalence, on consomme des ions et on en " +
              "apporte d'autres, la conductivité évolue selon une première pente ; après, on " +
              "ajoute simplement des ions en excès, et la pente change. Le changement de pente " +
              "<strong>est</strong> l'événement chimique — il n'y a rien d'autre à " +
              "chercher.<br/><br/>" +
              "Prévenir enfin l'erreur jumelle, qui vient juste après : la conductivité " +
              "<strong>ne s'annule pas</strong> à l'équivalence, et elle n'est pas " +
              "nécessairement minimale. Elle passe par un minimum dans certains titrages " +
              "acide-base, et pas dans d'autres. Se fier au minimum, c'est se fier à un accident " +
              "de configuration ; se fier à la rupture de pente, c'est se fier à la chimie.",
      /* Volontairement SANS renvoi, et vérifié : AUCUN des vingt-sept énoncés
         tirés ne comporte de courbe ni de tableau de mesures. Les douze
         exercices numérotés donnent tous V_eq directement dans le texte
         (« l'équivalence est repérée pour V_eq = 26,0 mL », « la rupture de
         pente est repérée pour un volume versé de 5,7 mL »), et il ne reste
         qu'à appliquer la relation. Le geste graphique — qui est pourtant le
         cœur du deuxième attendu officiel et la spécificité du suivi
         conductimétrique — n'est travaillé par aucun exercice, et la
         question 4 de l'évaluation ne le travaille que déclarativement (« le
         volume équivalent est repéré : à l'intersection des deux segments »).
         La question 5, réécrite le 2026-09-17, le travaille enfin sur une
         courbe décrite par ses deux repères concurrents, mais la règle
         éditoriale du projet interdit de renvoyer vers l'évaluation notée :
         on remédie avant d'évaluer. Pointer un exercice de calcul pour
         remédier à une erreur de lecture graphique serait un renvoi faux. Le travail est à construire : une
         courbe sigma = f(V) à dix points, avec les deux droites à tracer à la
         règle, occupe utilement vingt minutes et n'existe nulle part dans le
         livre. */
      exercice: null
    },
    {
      titre: "Croire que les millilitres se convertissent toujours",
      eleve: "Deux erreurs symétriques. L'un convertit scrupuleusement $V_A$ en litres et oublie " +
             "$V_{eq}$, obtenant un résultat mille fois trop grand. L'autre, ayant constaté que " +
             "« ça marche sans convertir », applique la même désinvolture à un calcul de " +
             "quantité de matière $n = C \\times V$ et se trompe d'un facteur mille.",
      cause: "Dans la relation d'équivalence, les deux volumes sont au " +
             "<strong>numérateur et au dénominateur d'un même quotient</strong> : leur unité se " +
             "simplifie, et l'on peut travailler en millilitres sans rien convertir. C'est vrai, " +
             "et c'est un piège pédagogique — l'élève en tire une règle générale (« pas besoin " +
             "de convertir ») qui est fausse dès qu'un volume apparaît SEUL dans une formule. " +
             "L'exemple du cours lui-même calcule $\\dfrac{0{,}1 \\times 8{,}0}{10}$ sans " +
             "convertir, sans dire pourquoi c'est légitime.",
      remede: "Dire explicitement <strong>pourquoi</strong> la simplification est permise, au " +
              "lieu de laisser croire à une dispense : les deux volumes sont dans le même " +
              "rapport, donc leur unité s'élimine — à condition qu'ils soient dans " +
              "<strong>la même</strong> unité. C'est une propriété du quotient, pas une " +
              "propriété du titrage.<br/><br/>" +
              "Poser la règle sous sa forme opérante, qui est facile à retenir et toujours " +
              "vraie : un volume qui apparaît <strong>seul</strong> dans une formule doit être " +
              "en litres ; deux volumes <strong>en rapport</strong> peuvent rester en " +
              "millilitres. Le titrage relève du second cas, le calcul de $n = C \\times V$ du " +
              "premier — et les deux se suivent dans la même séance.<br/><br/>" +
              "Faire enfin le calcul <strong>dans les deux unités</strong>, une fois, pour " +
              "montrer qu'on retombe sur le même nombre : l'exemple du cours donne " +
              "$\\dfrac{0{,}1 \\times 8{,}0}{10} = 0{,}08$ mol/L en millilitres, et " +
              "$\\dfrac{0{,}1 \\times 8{,}0\\times10^{-3}}{10\\times10^{-3}} = 0{,}08$ mol/L en " +
              "litres. L'égalité constatée vaut mieux qu'une consigne, et elle clôt le débat " +
              "pour l'année.",
      /* Volontairement SANS renvoi, et vérifié : les vingt-sept énoncés tirés
         donnent TOUS les deux volumes en millilitres, sans exception — jamais
         un litre, jamais un centimètre cube, jamais un mélange d'unités. Aucun
         énoncé ne demande non plus une quantité de matière, qui est le seul
         endroit où la conversion deviendrait obligatoire. Le tirage écarte
         donc l'erreur par construction : aucun exercice ne peut la déclencher,
         et pointer l'un d'eux enverrait l'enseignant vers un énoncé où
         l'élève a raison de ne pas convertir. Le travail est à construire, et
         il est court : reprendre l'exercice 2 (V_A = 10 mL, C_A trouvée
         0,057 mol/L) et demander la quantité de matière d'acide dans la prise
         d'essai — là, il faut 10e-3 L, et la réponse est 5,7e-4 mol. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $V_A = 15$ mL, $C_B = 0{,}2$ mol/L, $V_{eq} = 12$ mL, réaction
          $1{:}1$ : calculer $C_A$. La relation d'équivalence doit être
          RENVERSÉE pour isoler $C_A$, et il faut décider quel volume va au
          numérateur — c'est exactement l'erreur 2 de cette fiche. Ce n'est pas
          une substitution : « analyser ».
     Q2 — définition du point d'équivalence, choix multiple. Restitution de la
          définition telle que le cours l'énonce (« proportions
          stœchiométriques exactes »), avec trois distracteurs :
          « s'approprier ».
     Q3 — diacide, $V_A = 20$ mL, $C_B = 0{,}1$ mol/L, $V_{eq} = 10$ mL :
          calculer $C_A$. Il faut lire l'équation support, en tirer le facteur
          $2$, ADAPTER la relation, puis la renverser. Deux décisions
          enchaînées avant le calcul, et c'est l'erreur 1 de cette fiche :
          « analyser ».
     Q4 — où se repère le volume équivalent en conductimétrie ? Restitution de
          la méthode telle que le cours l'énonce (rupture de pente), avec les
          distracteurs « $pH = 7$ » et « changement de couleur » :
          « s'approprier ».
     Q5 — RÉÉCRITE le 2026-09-17. L'ancien énoncé (solution diluée $5$ fois,
          $C_{dil} = 0{,}04$ mol/L, remonter à la concentration mère) se
          réduisait à une multiplication par le facteur de dilution, et
          l'appareil de raisonnement qu'il mobilisait — reconnaître le sens de
          l'opération sur la relation d'équivalence — est déjà celui de la Q1
          et de la Q3 du même devoir. Trois questions numériques sur cinq
          renversaient la même relation.
          Le nouvel énoncé donne une courbe conductimétrique décrite par ses
          deux repères concurrents (minimum à $11{,}0$ mL, intersection des
          droites à $14{,}0$ mL) et demande d'EXPLIQUER pourquoi Inès se trompe
          de repère et de combien elle fausse $C_A$ : produire une explication,
          donc « communiquer ».
          Le calcul reste nécessaire, et il est doublé : il faut appliquer
          $C_A = C_B V_{eq}/V_A$ sur les DEUX volumes candidats ($0{,}0550$
          contre $0{,}0700$ mol/L) pour mesurer ce que coûte le mauvais repère,
          et écarter le distracteur 1 qui inverse la relation.
          La question porte désormais sur l'erreur 3 de cette fiche —
          « chercher l'équivalence au minimum de la courbe de conductivité » —
          explicitement SANS renvoi parce qu'aucun des vingt-sept énoncés tirés
          ne comporte de courbe ni de tableau de mesures.

     « Réaliser » est ABSENT, et c'est un constat honnête : aucune des cinq
     questions n'applique une relation dans le sens où le cours l'écrit — les
     trois questions numériques exigent toutes un renversement ou une
     adaptation. C'est le miroir exact du chapitre 1, où « réaliser » domine.
     « Valider » est absent aussi : aucune question ne demande de juger une
     vraisemblance, alors que le chapitre s'y prêterait (une concentration
     négative, un V_eq aberrant). Un devoir maison gagnerait à l'ajouter.
     « Communiquer » est mobilisé une fois depuis la réécriture de la Q5, sur
     le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique — et c'est la seule question du chapitre qui
     travaille la lecture graphique. */
  competences: {
    evaluation: ["analyser", "s'approprier", "analyser", "s'approprier", "communiquer"]
  }
};
