/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-mouvement-champ.prof.js
   Fiche professeur du chapitre « Mouvement dans un champ uniforme »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 0, ouvrage MONO-NIVEAU `lycee-physique-tle` :
   30 énoncés tirés, dont 12 numérotés et 18 en banque supplémentaire. Deux
   moules strictement alternés :
     - moule ÉLECTRIQUE (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : plaques
       parallèles, on donne d, L, U, v0, e et m_e, on demande la déviation
       verticale en mm ;
     - moule PESANTEUR (exercices PAIRS 2, 4, 6, 8, 10, 12) : lancer
       horizontal, on donne v0 et une distance horizontale d, on demande la
       chute verticale en cm.
   Aucun exercice ne demande le SENS de la déviation, ni ne fait intervenir une
   charge positive : tous les énoncés du moule électrique portent sur des
   électrons. C'est ce qui contraint l'erreur 2 à rester sans renvoi vers un
   exercice, et le remède le dit.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-mouvement-champ"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale ne précède celui-ci dans l'ordre des
     dépendances, et c'est voulu : ce chapitre ouvre l'année.

     ch. 3 (Dynamique newtonienne) : ÉCARTÉ, et c'est le candidat le plus
     tentant — les deux chapitres appliquent le principe fondamental de la
     dynamique. Mais le ch. 3 n'apporte que la quantité de mouvement $\vec p$
     et la conservation dans un système isolé, dont ce chapitre-ci n'a aucun
     besoin : il n'utilise que $\sum\vec F = m\vec a$, forme du PFD installée
     en PREMIÈRE. Déclarer le 3 en prérequis obligerait de plus à le placer
     avant, ce qui repousserait le chapitre le plus concret de l'année.

     ch. 2 (Satellites) : ÉCARTÉ, la dépendance va dans l'autre sens — c'est
     le mouvement dans un champ NON uniforme, qui vient après.
     ch. 4 à 11 : postérieurs, aucun lien de dépendance vers celui-ci.

     LES VRAIS PRÉREQUIS SONT EN PREMIÈRE (« Mouvement et lois de Newton »,
     « Champ électrique ») et en MATHÉMATIQUES. Ils ne sont pas déclarables et
     sont traités dans `note`, qui est imprimée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1, celui du livre.

     Ce chapitre est le bon ouvre-année de la terminale, pour trois raisons.
     D'abord il ne dépend d'aucun chapitre du niveau : rien ne le contraint à
     attendre. Ensuite il reprend, en les prolongeant d'un cran, les deux
     objets de première les plus fragiles à la rentrée — le PFD et le champ
     électrique — ce qui en fait une remise en route utile. Enfin il fournit le
     modèle de raisonnement (bilan des forces, PFD, projection sur deux axes,
     intégration) que réutiliseront les chapitres 2, 3 et 4.

     PRÉREQUIS MATHÉMATIQUE, modeste ici et c'est ce qui autorise le rang 1 :
     le chapitre n'exige qu'une primitive de fonction affine, faite au premier
     trimestre. Il n'a besoin ni d'équation différentielle ni de logarithme.
     C'est précisément pourquoi il peut ouvrir l'année là où le chapitre 11
     (radioactivité, exponentielle) ne le pourrait pas. */
  rangConseille: 1,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Établir et exploiter les équations horaires du mouvement d'un système dans un champ uniforme",
    "Établir l'équation de la trajectoire d'un système dans un champ uniforme et l'exploiter",
    "Discuter de l'influence des grandeurs physiques sur le mouvement d'une particule chargée dans un champ électrique uniforme"
  ],

  note: "La chute libre dans le champ de pesanteur, la déviation d'une particule chargée entre deux " +
        "plaques et la trajectoire parabolique sont au programme de spécialité de terminale : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>Les prérequis de ce chapitre sont invisibles dans le tableau de progression.</strong> " +
        "La colonne « S'appuie sur » affichera un <strong>tiret</strong>, et c'est exact au sens strict " +
        "— aucun chapitre de terminale ne le précède. Mais le chapitre suppose acquis deux chapitres " +
        "de <strong>première</strong> : « Mouvement et lois de Newton » (bilan des forces, " +
        "$\\sum\\vec{F} = m\\vec{a}$, référentiel galiléen) et « Champ électrique » (la relation " +
        "$\\vec{F} = q\\vec{E}$ et le champ $E = U/d$ entre deux plaques). Un prérequis ne pouvant " +
        "viser qu'un chapitre du même niveau, <strong>rien ne le montrera</strong> : si la classe est " +
        "fragile sur le bilan des forces, le reprendre avant, car le chapitre ne le refait pas.<br/><br/>" +
        "<strong>Le prérequis mathématique est léger, et c'est ce qui permet d'ouvrir l'année " +
        "avec.</strong> Il faut savoir primitiver une fonction affine (deux fois) et éliminer le " +
        "paramètre $t$ entre deux équations horaires. Ni équation différentielle ni logarithme : " +
        "contrairement aux chapitres 3 et 11, celui-ci n'attend aucun outil mathématique de fin " +
        "d'année. En revanche la <strong>notation scientifique</strong> est omniprésente " +
        "($e = 1{,}6\\times10^{-19}$ C, $m_e = 9{,}11\\times10^{-31}$ kg, des accélérations en " +
        "$10^{15}$ m/s²) : prévoir une remise en route sur les puissances de dix à la " +
        "calculatrice.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés alternent " +
        "deux moules seulement : déviation d'un <strong>électron</strong> entre deux plaques, et " +
        "chute d'un projectile lancé horizontalement. Aucun ne demande le <strong>sens</strong> de la " +
        "déviation, aucun ne met en scène une charge <strong>positive</strong>, et aucun n'exige " +
        "d'écrire l'équation de la trajectoire $y = f(x)$ — alors que c'est le deuxième attendu " +
        "officiel. Prévoir un travail spécifique sur le signe de la charge et sur la trajectoire, que " +
        "le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Confondre la distance horizontale et la durée du mouvement",
      eleve: "Pour un lancer horizontal à $v_0 = 6$ m/s, l'élève écrit directement " +
             "$y = \\frac{1}{2}g d^2$ avec $d = 0{,}80$ m et trouve $3{,}14$ m au lieu de " +
             "$8{,}72$ cm : il a remplacé le temps $t$ par la distance horizontale $d$ dans " +
             "l'équation horaire verticale.",
      cause: "L'équation $y = \\frac{1}{2}gt^2$ contient un $t$, et l'énoncé ne donne pas de durée : " +
             "l'élève y glisse la seule autre grandeur disponible. Le fond du problème est que les " +
             "deux mouvements sont <strong>couplés par le temps et par rien d'autre</strong>. " +
             "L'horizontale et la verticale sont indépendantes en tant que mouvements, mais " +
             "partagent la même horloge, et c'est ce lien-là — invisible dans l'énoncé — qui doit " +
             "être reconstruit.",
      remede: "Imposer une <strong>étape intermédiaire obligatoire</strong> et la faire écrire : " +
              "$t = d / v_0$. Tant que la durée n'est pas calculée et posée sur la copie, on " +
              "n'écrit pas l'équation verticale. C'est une règle de rédaction, pas de " +
              "compréhension, et elle suffit à supprimer l'erreur.<br/><br/>" +
              "Faire ensuite le <strong>contrôle d'unité</strong>, qui tranche à lui seul : dans " +
              "$\\frac{1}{2}gt^2$, $g$ est en m/s² et $t^2$ en s², le produit donne bien des mètres. " +
              "Si l'élève met des mètres à la place de $t$, il obtient des m³/s², qui ne sont " +
              "l'unité de rien. La vérification ne demande aucune mémoire.<br/><br/>" +
              "Nommer enfin ce que le chapitre affirme vraiment : il y a " +
              "<strong>deux mouvements simultanés</strong>, uniforme à l'horizontale, uniformément " +
              "accéléré à la verticale, et une <strong>seule horloge</strong> pour les deux. " +
              "L'exemple résolu du cours suit exactement cet ordre — il calcule la durée de " +
              "traversée avant la déviation — et il vaut la peine de faire remarquer cet ordre, pas " +
              "seulement le résultat.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 0) : l'exercice 2 donne v0 = 6 m/s,
         d = 0,80 m, réponse 8,72 cm. Choisi parmi les six exercices du moule
         « pesanteur » parce que ses nombres rendent l'erreur maximalement
         visible : t = 0,80/6 = 0,133 s donne 8,72 cm, alors que l'élève qui
         substitue d à t trouve 0,5 x 9,81 x 0,64 = 3,14 m, soit 36 fois trop
         — et surtout un ordre de grandeur absurde (un objet ne tombe pas de
         trois mètres en parcourant 80 cm à 6 m/s). L'exercice 10
         (v0 = 10 m/s, d = 0,92 m) donnerait 4,15 m contre 4,15 cm : la
         coïncidence des chiffres brouillerait le diagnostic. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Suivre les flèches du champ sans regarder le signe de la charge",
      eleve: "L'élève affirme qu'un électron entrant entre deux plaques est dévié vers la plaque " +
             "<strong>négative</strong>, « parce que le champ $\\vec{E}$ va vers le bas ». Il " +
             "confond la direction du champ avec celle de la force subie, et se trompe donc pour " +
             "toute charge négative.",
      cause: "Le schéma porte des flèches de champ, et ces flèches sont la seule information " +
             "visuelle disponible : l'élève les suit. La relation $\\vec{F} = q\\vec{E}$ est " +
             "mémorisée comme « la force est le champ multiplié par la charge », formulation qui " +
             "escamote l'essentiel — que $q$ est un nombre <strong>algébrique</strong>, et qu'un " +
             "coefficient négatif retourne un vecteur. Rien dans l'écriture ne signale ce " +
             "retournement.",
      remede: "Faire de $q$ un objet <strong>signé</strong> avant d'en faire un facteur : écrire au " +
              "tableau $q = -e = -1{,}6\\times10^{-19}$ C pour l'électron, avec le signe moins " +
              "explicitement encadré. Multiplier un vecteur par un nombre négatif le " +
              "<strong>retourne</strong> : c'est une propriété des vecteurs, pas une règle de " +
              "physique à mémoriser en plus.<br/><br/>" +
              "Imposer alors un <strong>ordre de tracé en trois temps</strong>, toujours le même : " +
              "(1) je trace $\\vec{E}$, du $+$ vers le $-$ ; (2) je note le signe de $q$ ; (3) je " +
              "trace $\\vec{F}$, dans le même sens si $q > 0$, dans le sens opposé si $q < 0$. Trois " +
              "flèches distinctes sur le schéma, pas une seule.<br/><br/>" +
              "Ancrer enfin sur un <strong>énoncé mémorable</strong> plutôt que sur une règle : une " +
              "charge est toujours attirée par la plaque de signe <strong>opposé</strong> au sien. " +
              "L'électron, négatif, monte donc vers la plaque positive — ce que dit le piège du " +
              "cours, et ce que l'exemple résolu vérifie explicitement. Un élève qui retient " +
              "« les contraires s'attirent » ne refait pas l'erreur.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés portant sur un champ électrique font TOUS intervenir un
         faisceau d'ÉLECTRONS, et demandent tous une déviation en millimètres
         — c'est-à-dire une NORME. Aucun ne demande le sens de la déviation,
         aucun ne met en scène une charge positive, et aucun ne demande vers
         quelle plaque la particule se dirige. L'erreur ne peut donc pas être
         remédiée par un exercice du chapitre. Le seul support disponible dans
         le livre est la question 2 de l'évaluation (ion POSITIF, vers quelle
         plaque ?) — mais la règle éditoriale du projet interdit de renvoyer
         vers l'évaluation notée : on remédie avant d'évaluer. Le remède
         s'appuie donc sur le piège du cours et sur l'exemple résolu, qui
         justifient l'un et l'autre le sens de la force. */
      exercice: null
    },
    {
      titre: "Perdre un facteur mille sur les centimètres, les millimètres et les micromètres",
      eleve: "Pour des plaques distantes de $d = 2{,}5$ cm sous $U = 250$ V, l'élève calcule " +
             "$E = 250 / 2{,}5 = 100$ V/m au lieu de $10\\,000$ V/m : il a divisé par la valeur en " +
             "centimètres. La déviation finale est alors fausse d'un facteur $100$, et il annonce " +
             "une valeur en mètres là où on attend des millimètres.",
      cause: "Toutes les données de l'énoncé sont en unités pratiques — centimètres pour les " +
             "plaques, millimètres pour la déviation — parce que ce sont les unités du laboratoire. " +
             "Les formules, elles, sont écrites en unités du <strong>système international</strong>. " +
             "L'élève passe de l'une à l'autre sans y penser, et rien ne l'alerte : $100$ V/m est un " +
             "nombre d'apparence honnête. C'est une erreur de conversion, pas de raisonnement, et " +
             "c'est précisément ce qui la rend difficile à repérer à la relecture.",
      remede: "Instaurer une <strong>ligne de conversion</strong> avant tout calcul, séparée du " +
              "reste : réécrire chaque donnée en unités SI, en notation scientifique, sur une ligne " +
              "à part. $2{,}5$ cm devient $2{,}5\\times10^{-2}$ m, $3$ cm devient " +
              "$3\\times10^{-2}$ m. Le calcul ne commence qu'après. L'exemple résolu du cours " +
              "procède exactement ainsi.<br/><br/>" +
              "Donner ensuite deux <strong>repères d'ordre de grandeur</strong> qui permettent de " +
              "rejeter un résultat sans le refaire : entre deux plaques de laboratoire, le champ " +
              "vaut quelques <strong>milliers</strong> de volts par mètre, jamais quelques dizaines ; " +
              "et la déviation d'un électron y est de l'ordre du <strong>millimètre</strong>, jamais " +
              "du mètre. Une déviation annoncée en mètres est fausse avant d'être vérifiée — elle " +
              "dépasserait largement l'écart entre les plaques.<br/><br/>" +
              "Faire enfin vérifier la <strong>cohérence physique finale</strong>, qui est le " +
              "meilleur garde-fou du chapitre : la déviation calculée doit rester inférieure à " +
              "$d/2$, sans quoi l'électron heurterait la plaque et ne sortirait jamais du " +
              "dispositif. C'est un contrôle que l'énoncé ne demande pas mais qui attrape toutes " +
              "les erreurs de conversion d'un coup.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         d = 2,5 cm, L = 3 cm, U = 250 V, v0 = 2,5e7 m/s, réponse 1,26 mm.
         C'est le premier exercice du chapitre et il cumule TROIS conversions
         dans un même énoncé (d en cm, L en cm, la réponse attendue en mm), ce
         qui en fait le meilleur support : l'élève qui oublie la conversion de
         d trouve E = 100 V/m au lieu de 10 000, donc une déviation de
         0,0126 mm — et le contrôle « la déviation doit rester sous
         d/2 = 12,5 mm » ne la rejette PAS, ce qui montre à l'élève que le
         contrôle d'ordre de grandeur ne remplace jamais la ligne de
         conversion. L'exercice 11 (d = 2 cm, U = 300 V, réponse 3,37 mm) est
         le plus proche de la limite d/2 = 10 mm : il se lit utilement en
         second, pour faire sentir que le dispositif a une limite réelle. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que la déviation dépend de la masse comme la chute libre n'en dépend pas",
      eleve: "L'élève affirme qu'« en chute libre la masse ne compte pas, donc pour l'électron non " +
             "plus » et néglige $m_e$ dans le calcul de l'accélération. Ou bien, inversement, il " +
             "cherche à faire intervenir la masse de l'objet lancé dans l'exercice de pesanteur, et " +
             "se bloque quand l'énoncé ne la donne pas.",
      cause: "Le chapitre juxtapose deux situations que la méthode traite de façon identique, ce " +
             "qui suggère que tout s'y comporte pareil. Or la conclusion « la masse ne compte pas » " +
             "n'est vraie que dans le champ de <strong>pesanteur</strong>, et pour une raison " +
             "précise : la force $P = mg$ est elle-même proportionnelle à la masse, donc " +
             "$a = P/m = g$ et $m$ se simplifie. Dans un champ électrique, la force $F = |q|E$ ne " +
             "dépend <strong>pas</strong> de la masse : rien ne se simplifie, et " +
             "$a = |q|E/m$ dépend bel et bien de $m$. L'élève a retenu une conclusion sans le " +
             "mécanisme qui la produit.",
      remede: "Faire écrire les <strong>deux calculs d'accélération l'un sous l'autre</strong>, au " +
              "tableau, et faire constater la différence à l'œil : $a = \\frac{mg}{m} = g$ d'un côté, " +
              "$a = \\frac{|q|E}{m}$ de l'autre. La simplification se voit dans le premier cas et " +
              "pas dans le second. Ce n'est pas une règle à retenir en plus, c'est une observation " +
              "sur deux fractions.<br/><br/>" +
              "Donner ensuite la <strong>raison profonde</strong>, qui vaut la peine d'être dite en " +
              "terminale : le poids est la seule force usuelle proportionnelle à la masse du corps " +
              "qui la subit. C'est ce qui rend la chute libre universelle — et c'est un fait " +
              "remarquable, pas une banalité. Galilée, la plume et le marteau sur la Lune : " +
              "l'anecdote sert ici de repère, pas d'ornement.<br/><br/>" +
              "Utiliser enfin ce que donne chaque énoncé comme <strong>indice de lecture</strong> : " +
              "si la masse est donnée, c'est qu'elle sert ; si elle n'est pas donnée, c'est qu'elle " +
              "se simplifie. Les énoncés du chapitre sont parfaitement cohérents là-dessus — les " +
              "exercices de déviation donnent $m_e$, ceux de pesanteur ne donnent aucune masse — et " +
              "le faire remarquer transforme une donnée en information.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 donne
         v0 = 3 m/s et d = 1,18 m, réponse 75,89 cm, et l'énoncé ne mentionne
         AUCUNE masse — comme les cinq autres exercices du moule pesanteur.
         Le renvoi pointe le 6 plutôt qu'un autre parce que c'est celui dont la
         chute est la plus grande du tirage (75,89 cm, contre 1,82 cm pour le
         4) : l'élève qui cherche la masse constate qu'elle est absente ET que
         le résultat est parfaitement déterminé sans elle, ce qui est
         exactement l'argument. L'exercice 1, du moule électrique, DONNE m_e et
         e : les deux se lisent utilement en vis-à-vis, l'un sans masse et
         l'autre avec, pour faire sentir que la différence est dans la
         physique et non dans la rédaction de l'énoncé. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $d = 4{,}0$ cm, $U = 120$ V, calculer $E$. La relation $E = U/d$ est
          au programme et donnée dans le cours ; il n'y a qu'à convertir et
          diviser, dans le sens direct : exécution, « réaliser ».
     Q2 — un ion POSITIF entre deux plaques, vers laquelle est-il dévié ? Il
          faut relier le signe de la charge au sens de $\vec F = q\vec E$ et
          en déduire une direction : c'est un raisonnement de choix, pas une
          restitution ni un calcul — « analyser ». C'est l'erreur 2 de cette
          fiche, et la seule question du livre à la travailler.
     Q3 — $m$, $q$ et $E$ donnés, calculer $a$. La relation $a = qE/m$ n'est
          pas donnée telle quelle dans les formules : il faut composer
          $\vec F = q\vec E$ avec le PFD avant de calculer, ce qui est un choix
          de méthode — « analyser ».
     Q4 — lancer horizontal, $v_0$ et $d$ donnés, calculer la chute. Le cours
          donne $x(t) = v_0 t$ et $y(t) = \frac12 g t^2$ : l'élève enchaîne
          deux relations connues dans le sens direct. C'est exactement l'erreur
          1 de cette fiche, mais du point de vue de la TÂCHE demandée, c'est
          une exécution en deux temps : « réaliser ».
     Q5 — si $\vec v_0$ est colinéaire à la force, la trajectoire est... Il
          faut juger quelle proposition est compatible avec le modèle, la
          parabole étant le distracteur naturel puisque c'est le titre du
          chapitre : « valider ».

     « S'approprier » et « communiquer » ne sont pas mobilisés. Aucune des cinq
     questions ne se réduit à restituer une définition — les deux QCM demandent
     l'un et l'autre de trancher un cas, pas de réciter — et aucune ne demande
     de produire une explication rédigée. C'est la limite d'une évaluation
     entièrement numérique et à choix multiple, et on ne la maquille pas. */
  competences: {
    evaluation: ["réaliser", "analyser", "analyser", "réaliser", "valider"]
  }
};
