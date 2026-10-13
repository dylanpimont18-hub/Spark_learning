/* =========================================================
   Spark Learning – data/lycee-1re/1re-trigonometrie.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-trigonometrie',
    level: 2, subject: 'maths',
    icon: '🔄',
    title: 'Trigonométrie — cercle trigonométrique',
    subtitle: 'Radians, cos, sin, valeurs remarquables',
    keywords: ['Radian', 'Cercle trigonométrique', 'Cosinus', 'Sinus', 'Valeurs remarquables'],
    physics: 'Mouvement circulaire uniforme, signal sinusoïdal du courant alternatif, décomposition d\'une onde',
    cours: {
      intro: 'En seconde, tu as défini le cosinus et le sinus dans un <strong>triangle rectangle</strong>, comme des rapports de longueurs. Cette définition a une limite dont on parle rarement : un angle de triangle rectangle est forcément compris entre $0°$ et $90°$.<br/><br/>Or une nacelle de grande roue ne s\'arrête pas à $90°$. Elle passe au sommet, redescend de l\'autre côté, revient en bas, repart. Quelle est sa hauteur après $210°$ de rotation ? Et après trois tours et demi ?<br/><br/><strong>Aucun triangle rectangle ne contient un angle de $210°$</strong>, et pourtant la nacelle est bien quelque part. Les longueurs ne peuvent pas être négatives, alors que la nacelle passe sous son point de départ.<br/><br/>Il faut donc une définition plus large, qui redonne les anciennes valeurs entre $0°$ et $90°$ mais continue d\'avoir un sens au-delà, et qui accepte les nombres négatifs. C\'est le <strong>cercle trigonométrique</strong>, et il apporte au passage une unité d\'angle qui va s\'imposer pour toute la suite de tes études : le <strong>radian</strong>.',
      definitions: [
        { term: 'Radian', def: 'Le <strong>radian</strong> est l\'unité naturelle de mesure d\'angle : $\\pi$ rad $= 180°$. Un tour complet vaut $2\\pi$ rad. Conversion : $\\alpha_{\\text{rad}} = \\alpha_{\\text{deg}} \\times \\dfrac{\\pi}{180}$.' },
        { term: 'Cercle trigonométrique', def: 'Le <strong>cercle trigonométrique</strong> est le cercle de centre $O$ et de rayon $1$. Tout point du cercle a pour coordonnées $(\\cos\\theta\\,;\\,\\sin\\theta)$.' },
        { term: 'Cosinus et sinus', def: 'Pour un angle $\\theta$, $\\cos\\theta$ est l\'<strong>abscisse</strong> et $\\sin\\theta$ l\'<strong>ordonnée</strong> du point associé sur le cercle trigonométrique. On a toujours $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
        { term: 'Valeurs remarquables', def: 'Les angles $0$, $\\dfrac{\\pi}{6}$, $\\dfrac{\\pi}{4}$, $\\dfrac{\\pi}{3}$, $\\dfrac{\\pi}{2}$ ont des cosinus et sinus exacts à connaître par cœur : ils forment la base de tous les calculs trigonométriques.' }
      ],
      method: {
        title: 'Conversion et valeurs remarquables',
        steps: [
          '<strong>Conversion</strong> : $\\text{rad} = \\text{degrés} \\times \\dfrac{\\pi}{180}$.',
          '<strong>Valeurs remarquables</strong> : $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$.',
          '<strong>Symétrie par rapport à l\'axe des ordonnées</strong> : un angle du deuxième quadrant s\'écrit $\\pi - \\alpha$ avec $\\alpha$ remarquable. Son point est le symétrique de celui de $\\alpha$ par rapport à l\'axe vertical, donc $\\cos(\\pi-\\alpha) = -\\cos\\alpha$ et $\\sin(\\pi-\\alpha) = \\sin\\alpha$.<br/><br/><strong>Exemple :</strong> $\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$, donc $\\cos\\dfrac{2\\pi}{3} = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$.',
          '<strong>Les deux autres symétries</strong>, une fois la première comprise : $\\pi + \\alpha$ (troisième quadrant, symétrie par rapport à $O$) change les <strong>deux</strong> signes : $\\cos(\\pi+\\alpha) = -\\cos\\alpha$ et $\\sin(\\pi+\\alpha) = -\\sin\\alpha$.<br/><br/>$2\\pi - \\alpha$ (quatrième quadrant, symétrie par rapport à l\'axe des abscisses) ne change que le signe du sinus : $\\cos(2\\pi-\\alpha) = \\cos\\alpha$ et $\\sin(2\\pi-\\alpha) = -\\sin\\alpha$.<br/><br/>Dans tous les cas, la valeur absolue est celle de $\\alpha$ : <strong>seul le signe se lit sur le cercle</strong>.',
          '<strong>Périodicité</strong> : $\\cos(\\theta+2\\pi)=\\cos\\theta$, $\\sin(\\theta+2\\pi)=\\sin\\theta$.',
          '<strong>Parité</strong> : $\\cos(-\\theta)=\\cos\\theta$ (pair) ; $\\sin(-\\theta)=-\\sin\\theta$ (impair).'
        ]
      },
      example: {
        statement: 'Calculer les coordonnées exactes du point $M$ sur le cercle trigonométrique pour $\\theta = \\dfrac{5\\pi}{6}$.',
        steps: [
          'On décompose : $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$. On utilise les formules de symétrie.',
          '$\\cos\\left(\\pi - \\alpha\\right) = -\\cos\\alpha$ et $\\sin\\left(\\pi - \\alpha\\right) = \\sin\\alpha$.',
          '$\\cos\\dfrac{5\\pi}{6} = -\\cos\\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$ et $\\sin\\dfrac{5\\pi}{6} = \\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$.'
        ],
        answer: '$M\\left(-\\dfrac{\\sqrt{3}}{2}\\,;\\,\\dfrac{1}{2}\\right)$. Le point est dans le 2e quadrant (abscisse négative, ordonnée positive).'
      },
      formulas: [
        '$\\cos^2\\theta+\\sin^2\\theta=1$',
        '$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$',
        '$\\cos\\frac{\\pi}{4}=\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$',
        '$\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$',
        '$\\cos(\\pi-\\alpha)=-\\cos\\alpha$, $\\sin(\\pi-\\alpha)=\\sin\\alpha$',
        '$\\cos(\\pi+\\alpha)=-\\cos\\alpha$, $\\sin(\\pi+\\alpha)=-\\sin\\alpha$',
        '$\\cos(2\\pi-\\alpha)=\\cos\\alpha$, $\\sin(2\\pi-\\alpha)=-\\sin\\alpha$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Cercle trigonométrique',
        title: 'Placer un angle et lire directement cosinus et sinus',
        description: 'Le point M associé à l\'angle θ a pour abscisse cos θ et pour ordonnée sin θ. Ici θ = 5π/6, l\'angle de l\'exemple traité dans le cours.',
        svg: `
          <svg viewBox="0 0 340 340" role="img" aria-labelledby="trigo-graph-title trigo-graph-desc">
            <title id="trigo-graph-title">Cercle trigonometrique, angle theta = 5 pi/6</title>
            <desc id="trigo-graph-desc">Cercle de rayon 1 centre en O. Le point M associe a l'angle 5 pi/6 (150 degres) a pour coordonnees moins racine de 3 sur 2 et un demi. Des pointilles projettent M sur les deux axes pour lire le cosinus et le sinus.</desc>

            <!-- axes -->
            <line class="axis" x1="25" y1="175" x2="315" y2="175"></line>
            <line class="axis" x1="170" y1="30" x2="170" y2="320"></line>
            <text class="annotation-label" x="318" y="179">x</text>
            <text class="annotation-label" x="176" y="26">y</text>
            <text class="annotation-label" x="178" y="192">O</text>

            <!-- cercle trigonometrique (rayon 1) -->
            <circle class="frame-line" cx="170" cy="175" r="120" fill="none"></circle>

            <!-- reperes des angles remarquables du 1er quadrant -->
            <circle class="plot-point-alt" cx="290.0" cy="175.0" r="3"></circle>
            <circle class="plot-point-alt" cx="273.9" cy="115.0" r="3"></circle>
            <circle class="plot-point-alt" cx="254.9" cy="90.1" r="3"></circle>
            <circle class="plot-point-alt" cx="230.0" cy="71.1" r="3"></circle>
            <circle class="plot-point-alt" cx="170.0" cy="55.0" r="3"></circle>
            <text class="tick-label" x="308.0" y="178" text-anchor="middle">0</text>
            <text class="tick-label" x="289.5" y="106.0" text-anchor="middle">π/6</text>
            <text class="tick-label" x="267.6" y="77.4" text-anchor="middle">π/4</text>
            <text class="tick-label" x="239.0" y="55.5" text-anchor="middle">π/3</text>
            <text class="tick-label" x="170.0" y="30" text-anchor="middle">π/2</text>

            <!-- arc de l'angle theta = 5pi/6 -->
            <polyline class="guide-line" points="202.0,175.0 201.5,169.4 200.1,164.1 197.7,159.0 194.5,154.4 190.6,150.5 186.0,147.3 180.9,144.9 175.6,143.5 170.0,143.0 164.4,143.5 159.1,144.9 154.0,147.3 149.4,150.5 145.5,154.4 142.3,159.0" fill="none"></polyline>
            <text class="annotation-label" x="181.9" y="130.6" text-anchor="middle">θ</text>

            <!-- rayon OM -->
            <line class="curve-main" x1="170" y1="175" x2="66.1" y2="115.0"></line>
            <circle class="plot-point" cx="66.1" cy="115.0" r="6"></circle>
            <text class="annotation-label" x="40" y="104">M</text>

            <!-- projections en pointilles (lecture de cos et sin) -->
            <line class="guide-line" x1="66.1" y1="115.0" x2="66.1" y2="175"></line>
            <line class="guide-line" x1="66.1" y1="115.0" x2="170" y2="115.0"></line>
            <circle class="plot-point-alt" cx="66.1" cy="175" r="4"></circle>
            <circle class="plot-point-alt" cx="170" cy="115.0" r="4"></circle>
            <text class="annotation-label" x="66.1" y="196" text-anchor="middle">cos θ = -√3/2</text>
            <text class="annotation-label" x="150" y="111.0" text-anchor="end">sin θ = 1/2</text>
          </svg>
        `,
        notes: [
          'θ = 5π/6 se décompose en π − π/6 : on retombe sur l\'angle remarquable π/6, mais dans le 2e quadrant (abscisse négative).',
          'L\'abscisse de M donne directement cos θ = −√3/2 ; l\'ordonnée donne sin θ = 1/2 — ce sont les projections en pointillés sur les deux axes.',
          'Les 4 points de repère sur le cercle (π/6, π/4, π/3, π/2) sont les angles remarquables du premier quadrant : leurs coordonnées sont à connaître par cœur.'
        ],
        reading: 'Repère d\'abord l\'angle remarquable le plus proche (ici π/6, car 5π/6 = π − π/6), puis applique la symétrie pour placer M dans le bon quadrant.',
        caption: 'Point M associé à l\'angle θ = 5π/6 sur le cercle trigonométrique, avec projections donnant cos θ et sin θ.'
      },
      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent le plus cher dans
         ce chapitre, et aucun ne porte sur une formule :
           1. le RADIAN n'est pas « une autre façon d'écrire les degrés » :
              c'est une LONGUEUR, celle de l'arc parcouru sur le cercle de
              rayon 1. Tant que l'élève le prend pour une unité arbitraire, il
              ne peut pas comprendre pourquoi elle s'impose ;
           2. les SYMÉTRIES : quatre angles partagent les mêmes valeurs
              absolues, seuls les signes changent. C'est ce qui remplace
              l'apprentissage par cœur d'une douzaine de valeurs ;
           3. $\cos\frac{\pi}{6}$ contre $\cos\frac{\pi}{3}$, la confusion
              nommée dans le piège du cours, tranchée ici par le dessin.

         TOUTES les coordonnées sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-1re.test.js : les points annoncés sur le
         cercle trigonométrique y sont à distance EXACTEMENT 1 du centre, les
         quatre points symétriques partagent réellement leurs valeurs absolues,
         et la longueur de l'arc du premier schéma vaut réellement le rayon. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi le radian existe',
          title: 'Un radian, c\'est une longueur',
          description: 'Le radian passe souvent pour une unité bizarre, imposée sans raison à la place des degrés. Il n\'a pourtant rien d\'arbitraire : sur le cercle de rayon $1$, <strong>l\'angle et la longueur de l\'arc sont le même nombre</strong>.<br/><br/>C\'est ce qui rend l\'unité naturelle, et c\'est pourquoi les formules d\'analyse — les dérivées de $\\sin$ et $\\cos$, notamment — ne fonctionnent qu\'en radians.',
          svg: `
            <svg viewBox="0 0 400 270" role="img" aria-labelledby="trigo-rad-title trigo-rad-desc">
              <title id="trigo-rad-title">Un radian est la longueur de l arc egale au rayon</title>
              <desc id="trigo-rad-desc">Cercle de rayon un, centre en O. Un rayon horizontal part du centre vers la droite. Un second rayon est incline d'un angle d'un radian, soit environ cinquante-sept degres. L'arc du cercle compris entre les deux rayons est mis en evidence : sa longueur vaut exactement un, c'est-a-dire la meme valeur que le rayon. Un rappel indique qu'un tour complet correspond a deux pi radians, soit environ six virgule vingt-huit fois le rayon.</desc>

              <line class="axis" x1="30" y1="158" x2="290" y2="158"></line>
              <line class="axis" x1="150" y1="250" x2="150" y2="46"></line>
              <text class="axis-label" x="296" y="162">x</text>
              <text class="axis-label" x="156" y="42">y</text>

              <circle class="frame-line" cx="150" cy="158" r="98" fill="none"></circle>

              <!-- Le rayon de depart, horizontal, et le rayon a un radian. -->
              <line class="curve-main" x1="150" y1="158" x2="248" y2="158"></line>
              <line class="curve-main" x1="150" y1="158" x2="202.9" y2="75.5"></line>
              <circle class="plot-point" cx="150" cy="158" r="4"></circle>
              <circle class="plot-point" cx="202.9" cy="75.5" r="5"></circle>

              <!-- L'arc, en trait fort : c'est LUI le sujet du schema. -->
              <polyline class="focus-line" fill="none" points="248,158 247.8,151.9 247.2,145.8 246.3,139.7 245,133.8 243.3,127.9 241.2,122.1 238.8,116.5 236,111 232.9,105.7 229.5,100.7 225.7,95.8 221.7,91.2 217.4,86.9 212.8,82.8 208,79 202.9,75.5"></polyline>

              <text class="tick-label" x="142" y="174" text-anchor="end">O</text>
              <text class="annotation-label" x="199" y="170" text-anchor="middle">rayon 1</text>
              <text class="annotation-label" x="262" y="104" text-anchor="start">arc de longueur 1</text>
              <text class="annotation-label" x="186" y="126" text-anchor="middle">1 rad</text>

              <line class="frame-line" x1="30" y1="222" x2="370" y2="222"></line>
              <line class="frame-line" x1="30" y1="262" x2="370" y2="262"></line>
              <line class="frame-line" x1="30" y1="222" x2="30" y2="262"></line>
              <line class="frame-line" x1="370" y1="222" x2="370" y2="262"></line>
              <text class="tick-label" x="200" y="240" text-anchor="middle">un tour complet parcourt une longueur de 2π</text>
              <text class="tick-label" x="200" y="256" text-anchor="middle">soit environ 6,28 fois le rayon : c'est pourquoi un tour vaut 2π radians</text>
            </svg>
          `,
          notes: [
            'Sur un cercle de rayon $R$, un angle de $\\theta$ radians découpe un arc de longueur $\\ell = R \\times \\theta$.',
            'Quand $R = 1$, cette relation devient $\\ell = \\theta$ : <strong>l\'angle et l\'arc sont littéralement le même nombre</strong>. C\'est la définition du radian.',
            'Un tour complet a pour longueur le périmètre, $2\\pi R$. Sur le cercle de rayon $1$, cela fait $2\\pi \\approx 6{,}28$ : un tour vaut donc $2\\pi$ radians.',
            'Un radian vaut environ $57{,}3°$ — un nombre qui ne tombe jamais juste, et c\'est bien pourquoi on ne convertit pas : on travaille directement en radians.',
            'Le degré, lui, est une convention historique héritée des Babyloniens : diviser le tour en $360$ parts est commode, mais ne mesure aucune longueur.'
          ],
          reading: 'Compare les deux traits pleins qui partent du centre avec l\'arc épais qui les relie : le rayon et l\'arc ont exactement la même longueur. C\'est cela, un radian — pas une conversion, une égalité de longueurs. Répète l\'opération six fois et il te restera un petit reste : ces $6{,}28$ tronçons sont le tour complet, c\'est-à-dire $2\\pi$.',
          caption: 'Sur le cercle de rayon $1$, un angle de $1$ radian découpe un arc de longueur $1$ : l\'angle et l\'arc sont le même nombre.'
        },
        {
          theme: 'maths',
          kicker: 'Ce qu\'il ne faut pas apprendre par cœur',
          title: 'Quatre angles, deux valeurs, rien qu\'un signe qui change',
          description: 'Le réflexe le plus coûteux du chapitre consiste à mémoriser une valeur par angle — et il y en a une douzaine.<br/><br/>Les quatre points ci-dessous correspondent aux angles $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$ et $\\frac{11\\pi}{6}$. Ils partagent <strong>exactement</strong> le même cosinus et le même sinus en valeur absolue. Une seule valeur à connaître, celle de $\\frac{\\pi}{6}$ ; le reste se lit sur le dessin.',
          svg: `
            <svg viewBox="0 0 360 340" role="img" aria-labelledby="trigo-sym-title trigo-sym-desc">
              <title id="trigo-sym-title">Quatre points symetriques sur le cercle trigonometrique</title>
              <desc id="trigo-sym-desc">Cercle trigonometrique centre en O. Quatre points y sont marques, un par quadrant, aux angles pi sur six, cinq pi sur six, sept pi sur six et onze pi sur six. Ils forment un rectangle : les deux points du haut ont la meme ordonnee, un demi, les deux du bas ont l'ordonnee opposee ; les deux points de droite ont la meme abscisse, racine de trois sur deux, les deux de gauche l'abscisse opposee. Seuls les signes distinguent les quatre points.</desc>

              <line class="axis" x1="40" y1="170" x2="320" y2="170"></line>
              <line class="axis" x1="178" y1="320" x2="178" y2="34"></line>
              <text class="axis-label" x="326" y="174">x</text>
              <text class="axis-label" x="184" y="30">y</text>
              <text class="tick-label" x="170" y="186" text-anchor="end">O</text>

              <circle class="frame-line" cx="178" cy="170" r="118" fill="none"></circle>

              <!-- Le rectangle des quatre points : c'est lui qui rend la
                   symetrie evidente sans qu'on ait a l'enoncer. -->
              <line class="guide-line" x1="280.2" y1="111" x2="75.8" y2="111"></line>
              <line class="guide-line" x1="280.2" y1="229" x2="75.8" y2="229"></line>
              <line class="guide-line" x1="280.2" y1="111" x2="280.2" y2="229"></line>
              <line class="guide-line" x1="75.8" y1="111" x2="75.8" y2="229"></line>

              <line class="curve-main" x1="178" y1="170" x2="280.2" y2="111"></line>
              <line class="curve-main" x1="178" y1="170" x2="75.8" y2="111"></line>
              <line class="curve-main" x1="178" y1="170" x2="75.8" y2="229"></line>
              <line class="curve-main" x1="178" y1="170" x2="280.2" y2="229"></line>

              <circle class="plot-point" cx="280.2" cy="111" r="5"></circle>
              <circle class="plot-point" cx="75.8" cy="111" r="5"></circle>
              <circle class="plot-point" cx="75.8" cy="229" r="5"></circle>
              <circle class="plot-point" cx="280.2" cy="229" r="5"></circle>

              <text class="tick-label" x="288" y="102" text-anchor="start">π/6</text>
              <text class="tick-label" x="68" y="102" text-anchor="end">5π/6</text>
              <text class="tick-label" x="68" y="248" text-anchor="end">7π/6</text>
              <text class="tick-label" x="288" y="248" text-anchor="start">11π/6</text>

              <text class="annotation-label" x="178" y="100" text-anchor="middle">ordonnée 1/2</text>
              <text class="annotation-label" x="178" y="248" text-anchor="middle">ordonnée −1/2</text>
              <text class="tick-label" x="180" y="312" text-anchor="middle">abscisses : √3/2 à droite, −√3/2 à gauche</text>
            </svg>
          `,
          notes: [
            'Les quatre angles se décomposent tous à partir de $\\dfrac{\\pi}{6}$ : $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$, $\\dfrac{7\\pi}{6} = \\pi + \\dfrac{\\pi}{6}$ et $\\dfrac{11\\pi}{6} = 2\\pi - \\dfrac{\\pi}{6}$.',
            'Leurs cosinus valent $\\pm\\dfrac{\\sqrt{3}}{2} \\approx \\pm 0{,}866$ et leurs sinus $\\pm\\dfrac{1}{2}$ : <strong>deux valeurs absolues, et rien de plus à retenir</strong>.',
            'Le point de $\\dfrac{5\\pi}{6}$ est le symétrique de celui de $\\dfrac{\\pi}{6}$ par rapport à l\'axe des ordonnées : le cosinus change de signe, le sinus est conservé.',
            'Celui de $\\dfrac{7\\pi}{6}$ est le symétrique par rapport au centre $O$ : les deux coordonnées changent de signe.',
            'Celui de $\\dfrac{11\\pi}{6}$ est le symétrique par rapport à l\'axe des abscisses : le cosinus est conservé, le sinus change de signe. C\'est exactement la parité du cosinus et l\'imparité du sinus.'
          ],
          reading: 'Repère le point du premier quadrant, en haut à droite, et retiens ses deux coordonnées — ce sont les seules à connaître. Pour les trois autres, pose simplement la question du quadrant : l\'abscisse est-elle à gauche ou à droite de l\'axe vertical, l\'ordonnée au-dessus ou en dessous de l\'axe horizontal ? Les signes se lisent, ils ne se mémorisent pas.',
          caption: 'Les angles $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$ et $\\frac{11\\pi}{6}$ forment un rectangle : mêmes valeurs absolues, seuls les signes changent.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Pourquoi le cosinus de $\\frac{\\pi}{6}$ est le grand',
          description: 'La confusion entre $\\cos\\frac{\\pi}{6}$ et $\\cos\\frac{\\pi}{3}$ est signalée dans le piège du cours, et c\'est l\'erreur la plus fréquente de toute la trigonométrie de première.<br/><br/>Aucun moyen mnémotechnique n\'est nécessaire : il suffit de regarder. Quand l\'angle grandit, le point monte, donc son ordonnée — le sinus — <strong>augmente</strong>, et son abscisse — le cosinus — <strong>diminue</strong>.',
          svg: `
            <svg viewBox="0 0 420 252" role="img" aria-labelledby="trigo-rem-title trigo-rem-desc">
              <title id="trigo-rem-title">Les trois angles remarquables du premier quadrant</title>
              <desc id="trigo-rem-desc">Quart de cercle de rayon un. Trois points y sont marques, aux angles pi sur six, pi sur quatre et pi sur trois. Chacun est projete verticalement sur l'axe horizontal pour montrer son cosinus. Le point de pi sur six est le plus bas et le plus a droite : son cosinus est le plus grand. Le point de pi sur trois est le plus haut et le plus a gauche : son cosinus est le plus petit. Les trois pieds de projection se succedent de droite a gauche a mesure que l'angle augmente.</desc>

              <line class="axis" x1="110" y1="196" x2="280" y2="196"></line>
              <line class="axis" x1="128" y1="220" x2="128" y2="78"></line>
              <text class="axis-label" x="286" y="200">x</text>
              <text class="axis-label" x="134" y="74">y</text>
              <text class="tick-label" x="120" y="212" text-anchor="end">O</text>

              <polyline class="frame-line" fill="none" points="232,196 231.7,188.6 230.9,181.2 229.6,173.9 227.8,166.7 225.4,159.7 222.6,152.8 219.3,146.2 215.5,139.8 211.3,133.7 206.6,127.9 201.5,122.5 196.1,117.4 190.3,112.7 184.2,108.5 177.8,104.7 171.2,101.4 164.3,98.6 157.3,96.2 150.1,94.4 142.8,93.1 135.4,92.3 128,92"></polyline>

              <!-- Les trois rayons, du plus petit angle au plus grand. -->
              <line class="curve-main" x1="128" y1="196" x2="218.1" y2="144"></line>
              <line class="curve-main" x1="128" y1="196" x2="201.5" y2="122.5"></line>
              <line class="curve-main" x1="128" y1="196" x2="180" y2="105.9"></line>

              <!-- Projections verticales : elles donnent les cosinus. -->
              <line class="guide-line" x1="218.1" y1="144" x2="218.1" y2="196"></line>
              <line class="guide-line" x1="201.5" y1="122.5" x2="201.5" y2="196"></line>
              <line class="guide-line" x1="180" y1="105.9" x2="180" y2="196"></line>

              <circle class="plot-point" cx="218.1" cy="144" r="5"></circle>
              <circle class="plot-point" cx="201.5" cy="122.5" r="5"></circle>
              <circle class="plot-point" cx="180" cy="105.9" r="5"></circle>
              <circle class="plot-point-alt" cx="218.1" cy="196" r="4"></circle>
              <circle class="plot-point-alt" cx="201.5" cy="196" r="4"></circle>
              <circle class="plot-point-alt" cx="180" cy="196" r="4"></circle>

              <text class="tick-label" x="226" y="140" text-anchor="start">π/6</text>
              <text class="tick-label" x="209" y="116" text-anchor="start">π/4</text>
              <text class="tick-label" x="172" y="100" text-anchor="end">π/3</text>

              <text class="annotation-label" x="300" y="118" text-anchor="start">cos π/6 ≈ 0,87</text>
              <text class="annotation-label" x="300" y="146" text-anchor="start">cos π/4 ≈ 0,71</text>
              <text class="annotation-label" x="300" y="174" text-anchor="start">cos π/3 = 0,5</text>
              <text class="tick-label" x="300" y="202" text-anchor="start">le cosinus diminue</text>
              <text class="tick-label" x="300" y="218" text-anchor="start">quand l'angle augmente</text>
            </svg>
          `,
          notes: [
            'Les trois pieds de projection se succèdent de <strong>droite à gauche</strong> quand l\'angle augmente : c\'est toute la démonstration.',
            '$\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$ : l\'angle est petit, le point reste bas et très à droite.',
            '$\\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2} \\approx 0{,}707$ : à $45°$, le point est sur la diagonale, et cosinus et sinus sont égaux.',
            '$\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ : l\'angle est grand, le point est monté et son abscisse a fondu de moitié.',
            'Le sinus fait l\'inverse, et pour la même raison : $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$, puis $\\dfrac{\\sqrt{2}}{2}$, puis $\\dfrac{\\sqrt{3}}{2}$. <strong>Les mêmes trois nombres, dans l\'ordre inverse.</strong>'
          ],
          reading: 'Si tu hésites un jour entre $\\frac{1}{2}$ et $\\frac{\\sqrt{3}}{2}$, ne cherche pas dans ta mémoire : refais ce dessin au brouillon. Place le point du petit angle, tout en bas à droite, et demande-toi si son abscisse est grande ou petite. Elle est grande, donc $\\cos\\frac{\\pi}{6}$ est le plus grand des deux, c\'est-à-dire $\\frac{\\sqrt{3}}{2}$.',
          caption: 'Les trois angles remarquables du premier quadrant : quand l\'angle croît, le pied de la projection recule vers la gauche et le cosinus diminue.'
        }
      ],
      recap: [
        'Conversion : $\\text{radians} = \\text{degrés} \\times \\dfrac{\\pi}{180}$. Toujours travailler en radians pour les dérivées.',
        '$\\cos^2\\theta + \\sin^2\\theta = 1$ : la relation fondamentale, valide pour tout angle $\\theta$.',
        'Cosinus est <strong>pair</strong> ($\\cos(-\\theta) = \\cos\\theta$) ; sinus est <strong>impair</strong> ($\\sin(-\\theta) = -\\sin\\theta$).',
        'Mnémotechnique : quand l\'angle croît de $0$ à $\\pi/2$, le cosinus <strong>décroît</strong> et le sinus <strong>croît</strong>.'
      ],
      piege: 'Ne pas confondre $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ et $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$ : les deux sont souvent intervertis !<br/><br/>Astuce : le cosinus <strong>décroît</strong> quand l\'angle croît. Donc $\\cos(\\pi/6) > \\cos(\\pi/3)$, ce qui donne $\\frac{\\sqrt{3}}{2} > \\frac{1}{2}$.'
    },
    quiz: [
      { q: 'Convertir $60°$ en radians :', options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'], answer: 1, correction: 'On applique la formule de conversion : $60 \\times \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$.<br/><br/>Retiens que $60°$ correspond à un sixième de tour, soit $\\frac{\\pi}{3}$ radians.' },
      { q: '$\\sin\\frac{\\pi}{2}=$', options: ['$0$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$1$'], answer: 3, correction: 'Sur le cercle trigonométrique, $\\frac{\\pi}{2}$ correspond au point $(0\\,;\\,1)$.<br/><br/>Le sinus étant l\'ordonnée du point, on a $\\sin\\frac{\\pi}{2} = 1$. C\'est la valeur maximale que le sinus peut atteindre.' },
      { q: 'Laquelle de ces affirmations est VRAIE ?', options: ['$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{1}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$', '$\\cos\\dfrac{\\pi}{3}=1$ et $\\sin\\dfrac{\\pi}{3}=0$'], answer: 0, correction: '$\\cos(\\pi/3) = 1/2$ et $\\sin(\\pi/3) = \\sqrt{3}/2$.<br/><br/>La proposition qui inverse les deux valeurs est l\'erreur la plus fréquente : elle confond $\\pi/3$ avec $\\pi/6$ (qui donne $\\cos(\\pi/6) = \\sqrt{3}/2$ et $\\sin(\\pi/6) = 1/2$). Celle qui donne $\\dfrac{\\sqrt{2}}{2}$ aux deux correspond à $\\pi/4$.<br/><br/>Moyen mnémotechnique : le cosinus <strong>descend</strong> quand l\'angle monte — $\\cos(\\pi/6) > \\cos(\\pi/4) > \\cos(\\pi/3)$.' },
      { q: 'La valeur de $\\cos\\left(\\dfrac{2\\pi}{3}\\right)$ est :', options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'], answer: 1, correction: 'On décompose l\'angle : $\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$.<br/><br/>Par la formule de symétrie $\\cos(\\pi - \\alpha) = -\\cos\\alpha$, on obtient : $\\cos\\dfrac{2\\pi}{3} = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$.' },
      { q: 'Sachant que $\\sin\\theta = 0{,}8$ et $\\theta \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, $\\cos\\theta$ vaut :', options: ['$0{,}2$', '$0{,}6$', '$0{,}36$', '$-0{,}6$'], answer: 1, correction: 'On utilise la relation fondamentale : $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - 0{,}64 = 0{,}36$.<br/><br/>Comme $\\theta \\in [0\\,;\\,\\pi/2]$, le cosinus est positif, donc $\\cos\\theta = \\sqrt{0{,}36} = 0{,}6$. Attention à toujours vérifier le signe selon le quadrant !' }
    ],
    /* BANQUE ÉLARGIE le 2026-09-14.

       MESURE D'AVANT : 18 tirages pour TROIS tâches réelles seulement — et
       encore, les trois se ramenaient à un unique geste (décomposer un angle
       du second, troisième ou quatrième quadrant, puis lire un cosinus ou un
       sinus). Les trois contextes (cercle, pendule, signal électrique) ne
       changeaient que le décor : l'élève rencontrait le même exercice imprimé
       douze fois.

       C'était le chapitre le plus pauvre des trois traités dans cette vague.
       Le produit scalaire en portait déjà vingt-deux, la géométrie repérée
       sept ; la trigonométrie était seule sous le seuil.

       SEPT TÂCHES RÉELLEMENT DISTINCTES désormais, choisies pour couvrir ce
       que le programme demande vraiment, et non pour faire du chiffre :
         t1 « symetrie »  — décomposer et lire cos ou sin (la tâche d'origine,
                            conservée : c'est le cœur du chapitre) ;
         t2 « conversion » — passer des degrés aux radians et retour, le geste
                            le plus utilisé de l'année et absent de la banque ;
         t3 « pythagore »  — retrouver un cosinus depuis un sinus par la
                            relation fondamentale, en choisissant le SIGNE selon
                            le quadrant : c'est là que se perdent les élèves ;
         t4 « coordonnees » — placer le point du cercle et donner une de ses
                            coordonnées, qui est la définition même ;
         t5 « parite »     — exploiter la parité du cosinus et l'imparité du
                            sinus sur un angle négatif ;
         t6 « periode »    — ramener un angle supérieur à un tour dans
                            l'intervalle de base ;
         t7 « arc »        — la longueur d'un arc, qui est ce que le radian
                            mesure, et la seule tâche qui fasse toucher du
                            doigt pourquoi cette unité existe.

       Les décors restent, mais chacun n'habille plus qu'une tâche : le décor
       ne fabrique plus de fausse diversité. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['symetrie', 'conversion', 'pythagore', 'coordonnees', 'parite', 'periode', 'arc']);

        /* Table commune aux tâches qui ont besoin d'un angle remarquable hors
           du premier quadrant. Les valeurs décimales sont arrondies au
           millième, ce que l'énoncé demande explicitement. */
        const angles = [
          { deg: 120, rad: '2\\pi/3', cos: -0.5, sin: 0.866, decomp: '\\pi - \\pi/3', base: '\\pi/3', cosRel: '-\\cos(\\pi/3)', sinRel: '\\sin(\\pi/3)', cosE: '-\\dfrac{1}{2}', sinE: '\\dfrac{\\sqrt{3}}{2}' },
          { deg: 150, rad: '5\\pi/6', cos: -0.866, sin: 0.5, decomp: '\\pi - \\pi/6', base: '\\pi/6', cosRel: '-\\cos(\\pi/6)', sinRel: '\\sin(\\pi/6)', cosE: '-\\dfrac{\\sqrt{3}}{2}', sinE: '\\dfrac{1}{2}' },
          { deg: 210, rad: '7\\pi/6', cos: -0.866, sin: -0.5, decomp: '\\pi + \\pi/6', base: '\\pi/6', cosRel: '-\\cos(\\pi/6)', sinRel: '-\\sin(\\pi/6)', cosE: '-\\dfrac{\\sqrt{3}}{2}', sinE: '-\\dfrac{1}{2}' },
          { deg: 240, rad: '4\\pi/3', cos: -0.5, sin: -0.866, decomp: '\\pi + \\pi/3', base: '\\pi/3', cosRel: '-\\cos(\\pi/3)', sinRel: '-\\sin(\\pi/3)', cosE: '-\\dfrac{1}{2}', sinE: '-\\dfrac{\\sqrt{3}}{2}' },
          { deg: 300, rad: '5\\pi/3', cos: 0.5, sin: -0.866, decomp: '2\\pi - \\pi/3', base: '\\pi/3', cosRel: '\\cos(\\pi/3)', sinRel: '-\\sin(\\pi/3)', cosE: '\\dfrac{1}{2}', sinE: '-\\dfrac{\\sqrt{3}}{2}' },
          { deg: 330, rad: '11\\pi/6', cos: 0.866, sin: -0.5, decomp: '2\\pi - \\pi/6', base: '\\pi/6', cosRel: '\\cos(\\pi/6)', sinRel: '-\\sin(\\pi/6)', cosE: '\\dfrac{\\sqrt{3}}{2}', sinE: '-\\dfrac{1}{2}' }
        ];

        /* Tâche 1 — la symétrie, tâche d'origine du chapitre. */
        if (tache === 'symetrie') {
          const a = pick(angles);
          const func = pick(['cos', 'sin']);
          const answer = func === 'cos' ? a.cos : a.sin;
          const ctx = pick([
            `Sur le cercle trigonométrique, on considère l'angle $\\theta = ${a.rad}$ rad (soit $${a.deg}°$).`,
            `Un rayon de roue de vélo a tourné de $\\theta = ${a.deg}°$, soit $${a.rad}$ rad, depuis la position horizontale.`,
            `En électricité, la phase d'un signal est $\\theta = ${a.rad}$ rad.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Décomposer $${a.rad}$ à l'aide d'un angle remarquable.<br/>2) Calculer $\\${func}\\left(${a.rad}\\right)$.<br/><br/>Donner la valeur approchée à $0{,}001$.`,
            answer: answer, tolerance: 0.002, unit: '',
            hint: `Décompose : $${a.rad} = ${a.decomp}$. Puis utilise les formules de symétrie avec l'angle de base $${a.base}$.`,
            solution: [
              `On décompose l'angle pour se ramener au premier quadrant : $${a.rad} = ${a.decomp}$.`,
              `Les formules de symétrie donnent $\\${func}\\left(${a.rad}\\right) = ${func === 'cos' ? a.cosRel : a.sinRel} = ${func === 'cos' ? a.cosE : a.sinE} \\approx ${fr(answer)}$.`,
              `Le signe se lit sur le cercle : l'angle $${a.rad}$ place le point dans un quadrant où le ${func === 'cos' ? 'cosinus (abscisse)' : 'sinus (ordonnée)'} est <strong>${answer < 0 ? 'négatif' : 'positif'}</strong>.`
            ]
          };
        }

        /* Tâche 2 — la conversion, dans les deux sens. Geste le plus fréquent
           de l'année, et pourtant jamais demandé par la banque d'origine. */
        if (tache === 'conversion') {
          const sens = pick(['versRad', 'versDeg']);
          const table = [
            { deg: 30, num: 1, den: 6 }, { deg: 45, num: 1, den: 4 },
            { deg: 60, num: 1, den: 3 }, { deg: 135, num: 3, den: 4 },
            { deg: 225, num: 5, den: 4 }, { deg: 270, num: 3, den: 2 }
          ];
          const t = pick(table);
          const frac = t.num === 1 ? `\\dfrac{\\pi}{${t.den}}` : `\\dfrac{${t.num}\\pi}{${t.den}}`;
          if (sens === 'versRad') {
            /* On demande le COEFFICIENT de pi, et non une valeur décimale :
               l'élève doit produire une fraction exacte, pas une approximation
               de calculatrice. */
            const coef = t.num / t.den;
            return {
              statement: `Un angle mesure $${t.deg}°$.<br/><br/>Convertir cette mesure en radians, sous la forme $k\\pi$.<br/><br/>Donner la valeur de $k$ (arrondie à $0{,}001$).`,
              answer: parseFloat(coef.toFixed(4)), tolerance: 0.002, unit: '',
              hint: `Pour passer des degrés aux radians, on multiplie par $\\dfrac{\\pi}{180}$ : $${t.deg} \\times \\dfrac{\\pi}{180}$.`,
              solution: [
                `On convertit en multipliant par $\\dfrac{\\pi}{180}$ : $${t.deg}° = ${t.deg} \\times \\dfrac{\\pi}{180}$ rad.`,
                `En simplifiant la fraction, on obtient $${frac}$ rad.`,
                `Le coefficient de $\\pi$ vaut donc $k = ${fr(coef, 3)}$.`
              ]
            };
          }
          return {
            statement: `Un angle mesure $${frac}$ radians.<br/><br/>Convertir cette mesure en degrés.`,
            answer: t.deg, tolerance: 0, unit: '°',
            hint: `Pour passer des radians aux degrés, on multiplie par $\\dfrac{180}{\\pi}$. Le $\\pi$ se simplifie.`,
            solution: [
              `On convertit en multipliant par $\\dfrac{180}{\\pi}$ : $${frac} \\times \\dfrac{180}{\\pi}$.`,
              `Le $\\pi$ se simplifie, il reste $\\dfrac{${t.num} \\times 180}{${t.den}} = ${t.deg}$.`,
              `L'angle mesure donc $${t.deg}°$.`
            ]
          };
        }

        /* Tâche 3 — la relation fondamentale AVEC choix du signe. Le calcul
           est facile ; c'est le signe qui se joue, et il dépend du quadrant.
           Les couples sont pythagoriciens pour que la racine tombe juste. */
        if (tache === 'pythagore') {
          const couples = [
            { s: 0.6, c: 0.8 }, { s: 0.8, c: 0.6 },
            { s: 0.28, c: 0.96 }, { s: 0.96, c: 0.28 }
          ];
          const cpl = pick(couples);
          /* Deux quadrants seulement, et jamais le premier : dans le premier
             tout est positif et la question du signe ne se pose pas, donc
             l'exercice n'apprendrait rien. */
          const quad = pick([
            { nom: 'deuxième', inter: '\\left[\\dfrac{\\pi}{2}\\,;\\,\\pi\\right]', signe: -1, mot: 'négatif' },
            { nom: 'premier', inter: '\\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]', signe: 1, mot: 'positif' }
          ]);
          const cos = parseFloat((quad.signe * cpl.c).toFixed(4));
          return {
            statement: `On sait que $\\sin\\theta = ${fr(cpl.s)}$, avec $\\theta \\in ${quad.inter}$.<br/><br/>1) Calculer $\\cos^2\\theta$ à l'aide de la relation fondamentale.<br/>2) En déduire $\\cos\\theta$, en justifiant son signe.<br/><br/>Donner la valeur de $\\cos\\theta$.`,
            answer: cos, tolerance: 0.002, unit: '',
            hint: `La relation fondamentale donne $\\cos^2\\theta = 1 - \\sin^2\\theta$. Attention : la racine carrée laisse <strong>deux</strong> possibilités, et c'est le quadrant qui tranche.`,
            solution: [
              `La relation fondamentale $\\cos^2\\theta + \\sin^2\\theta = 1$ donne $\\cos^2\\theta = 1 - ${fr(cpl.s)}^2 = ${fr(parseFloat((1 - cpl.s * cpl.s).toFixed(4)))}$.`,
              `En prenant la racine carrée, on trouve $|\\cos\\theta| = ${fr(cpl.c)}$ : il reste à choisir le signe.`,
              `Comme $\\theta$ appartient au ${quad.nom} quadrant, son cosinus (qui est l'abscisse du point) est <strong>${quad.mot}</strong>, donc $\\cos\\theta = ${fr(cos)}$.`
            ]
          };
        }

        /* Tâche 4 — les coordonnées du point du cercle. C'est la définition
           même du cosinus et du sinus, jamais demandée telle quelle avant. */
        if (tache === 'coordonnees') {
          const a = pick(angles);
          const quelle = pick(['abscisse', 'ordonnée']);
          const answer = quelle === 'abscisse' ? a.cos : a.sin;
          return {
            statement: `Sur le cercle trigonométrique, le point $M$ est associé à l'angle $\\theta = ${a.rad}$ rad.<br/><br/>Donner l'<strong>${quelle}</strong> du point $M$, arrondie à $0{,}001$.`,
            answer: answer, tolerance: 0.002, unit: '',
            hint: `Sur le cercle trigonométrique, l'abscisse du point vaut $\\cos\\theta$ et son ordonnée $\\sin\\theta$. Décompose d'abord $${a.rad} = ${a.decomp}$.`,
            solution: [
              `Par définition, le point associé à $\\theta$ a pour coordonnées $(\\cos\\theta\\,;\\,\\sin\\theta)$ : l'${quelle} cherchée est donc $\\${quelle === 'abscisse' ? 'cos' : 'sin'}\\left(${a.rad}\\right)$.`,
              `On décompose $${a.rad} = ${a.decomp}$, ce qui ramène au premier quadrant.`,
              `Les formules de symétrie donnent $\\${quelle === 'abscisse' ? 'cos' : 'sin'}\\left(${a.rad}\\right) = ${quelle === 'abscisse' ? a.cosRel : a.sinRel} = ${quelle === 'abscisse' ? a.cosE : a.sinE} \\approx ${fr(answer)}$ : c'est l'${quelle} cherchée.`
            ]
          };
        }

        /* Tâche 5 — parité. Le cosinus est pair, le sinus impair : l'élève
           retient les mots sans savoir les utiliser sur un angle négatif. */
        if (tache === 'parite') {
          const base = pick([
            { rad: '\\dfrac{\\pi}{6}', cos: 0.866, sin: 0.5 },
            { rad: '\\dfrac{\\pi}{4}', cos: 0.707, sin: 0.707 },
            { rad: '\\dfrac{\\pi}{3}', cos: 0.5, sin: 0.866 }
          ]);
          const func = pick(['cos', 'sin']);
          const answer = func === 'cos' ? base.cos : -base.sin;
          return {
            statement: `Calculer $\\${func}\\left(-${base.rad}\\right)$.<br/><br/>Donner la valeur approchée à $0{,}001$.`,
            answer: answer, tolerance: 0.002, unit: '',
            hint: `Le cosinus est une fonction <strong>paire</strong> et le sinus une fonction <strong>impaire</strong>. Sur le cercle, l'angle $-\\theta$ donne le point symétrique de celui de $\\theta$ par rapport à l'axe des abscisses.`,
            solution: [
              `Le point associé à $-${base.rad}$ est le symétrique, par rapport à l'axe des abscisses, de celui associé à $${base.rad}$.`,
              func === 'cos'
                ? `La symétrie conserve l'abscisse : le cosinus est <strong>pair</strong>, donc $\\cos\\left(-${base.rad}\\right) = \\cos\\left(${base.rad}\\right) \\approx ${fr(answer)}$.`
                : `La symétrie change le signe de l'ordonnée : le sinus est <strong>impair</strong>, donc $\\sin\\left(-${base.rad}\\right) = -\\sin\\left(${base.rad}\\right) \\approx ${fr(answer)}$.`,
              func === 'cos'
                ? `La valeur est exactement la même que pour l'angle positif, signe compris : c'est ce que « pair » veut dire.`
                : `C'est la même valeur absolue que pour l'angle positif, mais le signe a changé : c'est ce que « impair » veut dire.`
            ]
          };
        }

        /* Tâche 6 — périodicité. Un angle de plus d'un tour se ramène dans
           l'intervalle de base en retranchant des tours entiers. */
        if (tache === 'periode') {
          const tours = rand(1, 2);
          const a = pick(angles);
          const degTotal = a.deg + 360 * tours;
          const func = pick(['cos', 'sin']);
          const answer = func === 'cos' ? a.cos : a.sin;
          return {
            statement: `Un moteur a tourné d'un angle total de $${degTotal}°$ depuis son point de départ.<br/><br/>1) Ramener cet angle dans l'intervalle $[0°\\,;\\,360°[$.<br/>2) En déduire $\\${func}(${degTotal}°)$.<br/><br/>Donner la valeur approchée à $0{,}001$.`,
            answer: answer, tolerance: 0.002, unit: '',
            hint: `Un tour complet vaut $360°$ et ne change ni le cosinus ni le sinus : retranche $${tours} \\times 360°$.`,
            solution: [
              `Un tour complet ramène au même point du cercle : on retranche donc $${tours} \\times 360° = ${360 * tours}°$.`,
              `Il reste $${degTotal} - ${360 * tours} = ${a.deg}°$, soit $${a.rad}$ rad.`,
              `Par périodicité, $\\${func}(${degTotal}°) = \\${func}(${a.deg}°) \\approx ${fr(answer)}$.`
            ]
          };
        }

        /* Tâche 7 — la longueur d'un arc. C'est ce que le radian MESURE, et
           la seule tâche de la banque qui fasse comprendre pourquoi cette
           unité existe. Le rayon évite 1, qui rendrait la multiplication
           invisible et l'exercice creux. */
        const rayon = rand(2, 9);
        const arcs = [
          { rad: '\\dfrac{\\pi}{2}', val: Math.PI / 2, nom: 'un quart de tour' },
          { rad: '\\dfrac{\\pi}{3}', val: Math.PI / 3, nom: 'un sixième de tour' },
          { rad: '\\dfrac{2\\pi}{3}', val: 2 * Math.PI / 3, nom: 'un tiers de tour' },
          { rad: '\\pi', val: Math.PI, nom: 'un demi-tour' }
        ];
        const arc = pick(arcs);
        const longueur = parseFloat((rayon * arc.val).toFixed(3));
        const ctx = pick([
          `Une grande roue de rayon $${rayon}\\,\\text{m}$`,
          `Un bras robotisé de longueur $${rayon}\\,\\text{m}$`,
          `Une aiguille de rayon $${rayon}\\,\\text{m}$`
        ]);
        return {
          statement: `${ctx} pivote d'un angle de $${arc.rad}$ radians, soit ${arc.nom}.<br/><br/>Calculer la longueur de l'arc parcouru par son extrémité, en mètres (arrondie à $0{,}001$).`,
          answer: longueur, tolerance: 0.01, unit: 'm',
          hint: `C'est toute la raison d'être du radian : la longueur d'un arc vaut $\\ell = R \\times \\theta$, à condition que $\\theta$ soit <strong>en radians</strong>.`,
          solution: [
            `La longueur d'un arc se calcule par $\\ell = R \\times \\theta$, avec $\\theta$ exprimé en radians.`,
            `Ici $\\ell = ${rayon} \\times ${arc.rad} \\approx ${rayon} \\times ${fr(parseFloat(arc.val.toFixed(4)))}$.`,
            `L'extrémité parcourt donc environ $${fr(longueur)}\\,\\text{m}$. C'est là tout l'intérêt du radian : sans lui, il aurait fallu passer par une proportion sur le périmètre.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un point $M$ se déplace sur un cercle de rayon $5$ m. Sa position est $M(5\\cos\\theta ; 5\\sin\\theta)$.',
      tasks: [
        'Donner les coordonnées de $M$ pour $\\theta=\\frac{\\pi}{3}$.',
        'Pour quelle valeur de $\\theta\\in[0;2\\pi]$ la coordonnée $y$ de $M$ est-elle maximale ?',
        'Vérifier que $OM=5$ quelle que soit la valeur de $\\theta$.'
      ],
      solutions: [
        '$M\\left(5\\times\\frac{1}{2};5\\times\\frac{\\sqrt{3}}{2}\\right)=\\left(\\frac{5}{2};\\frac{5\\sqrt{3}}{2}\\right)$.',
        '$y=5\\sin\\theta$ est max quand $\\sin\\theta=1$, soit $\\theta=\\frac{\\pi}{2}$.',
        '$OM=\\sqrt{(5\\cos\\theta)^2+(5\\sin\\theta)^2}=5\\sqrt{\\cos^2\\theta+\\sin^2\\theta}=5\\times1=5$.'
      ],
      finalAnswer: '$M(5/2 ; 5\\sqrt{3}/2)$ pour $\\theta=\\pi/3$ ; $y$ max en $\\theta=\\pi/2$.'
    },

    evaluation: {
      title: 'Évaluation — Trigonométrie',
      duration: '30 min',
      questions: [
        {
          statement: 'Convertir $\\dfrac{5\\pi}{6}$ radians en degrés.',
          type: 'numeric',
          answer: 150,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Pour convertir des radians en degrés, on multiplie par $\\dfrac{180}{\\pi}$.<br/><br/>$\\dfrac{5\\pi}{6} \\times \\dfrac{180}{\\pi} = \\dfrac{5 \\times 180}{6} = \\dfrac{900}{6} = 150°$.'
        },
        {
          /* QUESTION 2 RÉÉCRITE le 2026-09-14, pour deux raisons.

             Sur le fond : elle demandait $\cos^2(\pi/4) + \sin^2(\pi/3)$, une
             expression qui RESSEMBLE à la relation fondamentale sans en être
             une, puisque les deux angles diffèrent. Rien dans l'énoncé ne
             signalait le piège, et un élève qui appliquait la relation — donc
             qui avait compris le cours — répondait $1$ et perdait ses points.
             Une question dont la bonne réponse punit le réflexe juste est un
             mauvais énoncé, même si son corrigé est exact.

             Sur l'équilibre : mesuré sur les cinquante questions du niveau,
             « calculer » atteignait 42 % après une première passe, au-delà du
             plafond de 35 %, tandis que « chercher » restait à 2 %. La
             nouvelle question demande d'explorer sans méthode donnée — combien
             d'angles conviennent, et où les trouver — ce qu'aucune autre
             question du niveau ne demandait. L'étiquette suit l'énoncé. */
          statement: 'On cherche tous les angles $\\theta$ de l\'intervalle $[0\\,;\\,2\\pi[$ tels que $\\cos\\theta = \\dfrac{1}{2}$.<br/><br/>Combien y en a-t-il, et lesquels ?',
          type: 'multiple-choice',
          options: [
            'Deux : $\\dfrac{\\pi}{3}$ et $\\dfrac{5\\pi}{3}$, symétriques par rapport à l\'axe des abscisses',
            'Un seul : $\\dfrac{\\pi}{3}$, car le cosinus ne prend chaque valeur qu\'une fois',
            'Deux : $\\dfrac{\\pi}{3}$ et $\\dfrac{2\\pi}{3}$, symétriques par rapport à l\'axe des ordonnées',
            'Quatre, car le cercle trigonométrique a quatre quadrants'
          ],
          answer: 0,
          points: 2,
          correction: 'La bonne méthode consiste à chercher sur le <strong>cercle trigonométrique</strong> plutôt qu\'à faire un calcul : le cosinus d\'un angle est son abscisse sur le cercle, donc on cherche les points d\'abscisse $\\dfrac{1}{2}$.<br/><br/>La droite verticale d\'abscisse $\\dfrac{1}{2}$ coupe le cercle en <strong>deux</strong> points, et pas un seul : il y a donc deux solutions.<br/><br/>Ces deux points sont symétriques par rapport à l\'<strong>axe des abscisses</strong>, puisque c\'est cet axe qui conserve l\'abscisse en changeant l\'ordonnée. Les angles sont donc $\\dfrac{\\pi}{3}$ et son opposé $-\\dfrac{\\pi}{3}$, que l\'on ramène dans $[0\\,;\\,2\\pi[$ en ajoutant $2\\pi$ : $-\\dfrac{\\pi}{3} + 2\\pi = \\dfrac{5\\pi}{3}$.<br/><br/>Attention à la proposition qui cite $\\dfrac{2\\pi}{3}$ : cet angle est bien le symétrique de $\\dfrac{\\pi}{3}$, mais par rapport à l\'axe des <strong>ordonnées</strong>. C\'est la symétrie qui conserve le <strong>sinus</strong>, pas le cosinus — et $\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}$.'
        },
        {
          statement: 'L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ est :',
          type: 'multiple-choice',
          options: ['Toujours vraie', 'Vraie seulement si $\\theta = 0$', 'Toujours fausse (sauf $\\cos\\theta = 0$)', 'Vraie pour $\\theta = \\pi$'],
          answer: 2,
          points: 2,
          correction: 'Le cosinus est une fonction <strong>paire</strong> : $\\cos(-\\theta) = \\cos(\\theta)$, et non $-\\cos(\\theta)$.<br/><br/>L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ impliquerait $2\\cos\\theta = 0$, soit $\\cos\\theta = 0$.<br/><br/>Elle n\'est donc vraie que lorsque $\\cos\\theta = 0$ (par exemple $\\theta = \\dfrac{\\pi}{2}$), et fausse en général.<br/><br/>Pour $\\theta = 0$ : $\\cos(0) = 1$ et $-\\cos(0) = -1$, l\'égalité est fausse.<br/><br/>Pour $\\theta = \\pi$ : $\\cos(-\\pi) = \\cos(\\pi) = -1$ alors que $-\\cos(\\pi) = 1$, elle est fausse aussi. Le signe « moins » devant l\'angle ne se transmet pas au cosinus.'
        },
        {
          statement: 'Quelle est la valeur de $\\sin\\left(\\dfrac{7\\pi}{6}\\right)$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
          answer: 1,
          points: 2,
          correction: 'On décompose : $\\dfrac{7\\pi}{6} = \\pi + \\dfrac{\\pi}{6}$. L\'angle se situe dans le <strong>3e quadrant</strong>.<br/><br/>Par la relation $\\sin(\\pi + \\alpha) = -\\sin(\\alpha)$ : $\\sin\\left(\\dfrac{7\\pi}{6}\\right) = -\\sin\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}$.'
        },
        /* QUESTION 5 RÉÉCRITE le 2026-09-14. L'énoncé d'origine — « sachant
           que $\cos\theta = 0{,}6$, calculer $\sin\theta$ » — était un calcul
           de plus, et il redoublait presque mot pour mot la cinquième question
           du quiz, qui pose la même relation avec les deux valeurs échangées.
           Les cinq questions de l'évaluation demandaient alors toutes un
           calcul, et la compétence « communiquer » n'était évaluée nulle part
           dans le chapitre.

           La question a été ÉCRITE POUR CETTE COMPÉTENCE, et non étiquetée
           après coup : l'élève n'a aucun résultat numérique à produire. Il doit
           lire un raisonnement, localiser l'endroit exact où il déraille, et
           dire pourquoi. Le calcul y est juste ; c'est la justification qui est
           fausse, ce qui interdit de répondre en refaisant l'exercice.

           L'erreur mise en scène est celle du signe oublié, qui est la plus
           coûteuse du chapitre et la troisième remédiation de cette fiche. */
        {
          statement: 'Un élève doit calculer $\\sin\\theta$ sachant que $\\cos\\theta = 0{,}6$ et que $\\theta \\in \\left[\\dfrac{3\\pi}{2}\\,;\\,2\\pi\\right]$. Il rédige ceci :<br/><br/><em>« La relation fondamentale donne $\\sin^2\\theta = 1 - 0{,}36 = 0{,}64$. Donc $\\sin\\theta = \\sqrt{0{,}64} = 0{,}8$. »</em><br/><br/>Son résultat est faux. Quelle est l\'erreur de raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Il a oublié que la racine carrée laisse deux possibilités, et que le quatrième quadrant impose $\\sin\\theta = -0{,}8$',
            'Il s\'est trompé dans le calcul : $1 - 0{,}36$ ne vaut pas $0{,}64$',
            'Il ne pouvait pas utiliser la relation fondamentale, qui ne vaut que dans le premier quadrant',
            'Il aurait dû convertir l\'angle en degrés avant d\'appliquer la relation'
          ],
          answer: 0,
          points: 2,
          correction: 'Le calcul est <strong>entièrement juste</strong> : $1 - 0{,}36 = 0{,}64$, et la relation fondamentale $\\cos^2\\theta + \\sin^2\\theta = 1$ est valable pour <strong>tout</strong> angle, dans n\'importe quel quadrant.<br/><br/>L\'erreur est ailleurs, et elle est de raisonnement : passer de $\\sin^2\\theta = 0{,}64$ à $\\sin\\theta = 0{,}8$ revient à oublier que <strong>deux</strong> nombres ont $0{,}64$ pour carré, $0{,}8$ et $-0{,}8$. La relation fondamentale donne la valeur absolue, jamais le signe.<br/><br/>C\'est le quadrant qui tranche. Sur $\\left[\\dfrac{3\\pi}{2}\\,;\\,2\\pi\\right]$, le point du cercle est en bas à droite : son ordonnée est <strong>négative</strong>, donc $\\sin\\theta = -0{,}8$.'
        }
      ]
    }
  });
