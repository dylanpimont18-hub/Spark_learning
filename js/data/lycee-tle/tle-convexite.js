/* =========================================================
   Spark Learning – data/lycee-tle/tle-convexite.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-convexite',
    level: 2, subject: 'maths',
    icon: '🏔️',
    title: 'Convexité',
    subtitle: 'Dérivée seconde, point d\'inflexion',
    keywords: ['Convexe', 'Concave', 'Dérivée seconde', 'Point d\'inflexion'],
    physics: false,
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version enchaînait
         quatre définitions (convexe, concave, dérivée seconde, point
         d'inflexion) : c'était le cours avant le cours, et le cahier des
         charges le proscrit — on peut lire une définition sans qu'aucune
         question ne se pose.

         La question retenue ne se répond avec AUCUN outil de première : la
         dérivée dit si ça monte, jamais COMMENT ça monte. Deux courbes
         peuvent être croissantes ensemble et pourtant raconter deux
         histoires opposées. C'est une difficulté réelle, constatable par
         l'élève, et non une anecdote plaquée : le contexte épidémique est
         celui où la distinction a été publiquement discutée. */
      intro: 'Voici deux courbes qui montent toutes les deux. Pourtant l\'une est une bonne nouvelle et l\'autre une catastrophe.<br/><br/>Imagine le nombre total de personnes contaminées au cours d\'une épidémie. Dans les deux cas il augmente — la dérivée est positive, et tu sais déjà le dire. Mais dans le premier cas, chaque semaine apporte <strong>plus</strong> de nouveaux cas que la précédente : la montée s\'emballe. Dans le second, chaque semaine en apporte <strong>moins</strong> : la montée s\'essouffle, et l\'épidémie est en train de se terminer.<br/><br/>Essaie de distinguer ces deux situations avec les outils que tu as. La dérivée $f\'$ est positive dans les deux cas : elle ne les sépare pas. Le sens de variation non plus : les deux fonctions sont croissantes.<br/><br/>Ce qui les sépare, ce n\'est pas la valeur de la pente, c\'est <strong>ce que fait la pente</strong>. Dans le premier cas elle augmente, dans le second elle diminue.<br/><br/>Et une pente, c\'est une dérivée. Pour savoir si elle augmente ou diminue, il suffit donc de la dériver <strong>à son tour</strong> : c\'est la <strong>dérivée seconde</strong> $f\'\'$.<br/><br/>Tout le chapitre tient dans cette idée. Le jour où la montée cesse de s\'emballer pour commencer à s\'essouffler porte même un nom — le <strong>point d\'inflexion</strong> — et c\'est le premier signe qu\'une épidémie a passé son pic, bien avant que les chiffres ne baissent.',
      definitions: [
        { term: 'Fonction convexe', def: '$f$ est convexe sur $I$ si sa courbe est "en forme de bol" : toute corde reliant deux points de la courbe est AU-DESSUS de la courbe. Caractérisation : $f\'\' \\geq 0$ sur $I$.' },
        { term: 'Fonction concave', def: '$f$ est concave sur $I$ si sa courbe est "en forme de dôme" : toute corde reliant deux points de la courbe est EN-DESSOUS de la courbe. Caractérisation : $f\'\' \\leq 0$ sur $I$.' },
        { term: 'Point d\'inflexion', def: 'Point de la courbe où la <strong>convexité change de sens</strong> (de convexe à concave ou l\'inverse). En ce point, $f\'\'(a) = 0$ ET $f\'\'$ change de signe. La tangente au point d\'inflexion <strong>traverse</strong> la courbe.' },
        { term: 'Dérivée seconde $f\'\'$', def: 'Dérivée de la dérivée : $f\'\' = (f\')\' $. Elle mesure le taux de variation de la pente. $f\'\' > 0$ : la pente augmente (convexe). $f\'\' < 0$ : la pente diminue (concave).' }
      ],
      method: {
        title: 'Étudier la convexité via $f\'\'$',
        steps: [
          '<strong>Dérivée seconde</strong> : calculer $f\'\'(x)$ (dérivée de la dérivée).',
          '<strong>Convexité</strong> : $f\'\'(x) > 0$ sur $I$ $\\Rightarrow$ $f$ convexe sur $I$.',
          '<strong>Concavité</strong> : $f\'\'(x) < 0$ sur $I$ $\\Rightarrow$ $f$ concave sur $I$.',
          '<strong>Point d\'inflexion</strong> : point où $f\'\'$ change de signe (et $f\'\'(x)=0$).'
        ]
      },
      example: {
        statement: 'Étudier la convexité de $f(x) = x^3 - 3x^2 + 2$ et trouver le(s) point(s) d\'inflexion.',
        steps: [
          '$f\'(x) = 3x^2 - 6x$.',
          '$f\'\'(x) = 6x - 6 = 6(x - 1)$.',
          '$f\'\'(x) = 0 \\Leftrightarrow x = 1$.',
          'Pour $x < 1$ : $f\'\'(x) < 0$ → $f$ est <strong>concave</strong>. Pour $x > 1$ : $f\'\'(x) > 0$ → $f$ est <strong>convexe</strong>.',
          '$f\'\'$ change de signe en $x = 1$ : c\'est un point d\'inflexion. $f(1) = 1 - 3 + 2 = 0$.'
        ],
        answer: 'Point d\'inflexion en $(1;0)$. $f$ est concave sur $]-\\infty;1]$ et convexe sur $[1;+\\infty[$.'
      },
      formulas: [
        '$f$ convexe $\\Leftrightarrow f\'\'\\ge 0$',
        '$f$ concave $\\Leftrightarrow f\'\'\\le 0$',
        'Point d\'inflexion : $f\'\'(a)=0$ et changement de signe de $f\'\'$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Point d\'inflexion',
        title: 'Convexité de $f(x) = x^3 - 3x^2 + 2$ (exemple du cours)',
        description: 'La courbe est <strong>concave</strong> sur $]-\\infty\\,;\\,1]$ (zone teintée à gauche, $f\'\'<0$) puis <strong>convexe</strong> sur $[1\\,;\\,+\\infty[$ (zone teintée à droite, $f\'\'>0$). La courbure change exactement au point d\'inflexion $(1\\,;\\,0)$, où la tangente pointillée traverse la courbe.',
        svg: `
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="convexite-title convexite-desc">
            <title id="convexite-title">Convexite et concavite de f(x) = x^3 - 3x^2 + 2</title>
            <desc id="convexite-desc">Courbe cubique avec une zone concave teintee a gauche du point d'inflexion et une zone convexe teintee a droite. Le point d'inflexion est marque en (1;0) et la tangente pointillee en ce point traverse la courbe.</desc>

            <!-- zones de courbure -->
            <rect x="55" y="40" width="170" height="195" fill="color-mix(in srgb, var(--secondary) 13%, transparent)" stroke="none"></rect>
            <rect x="225" y="40" width="170" height="195" fill="color-mix(in srgb, var(--accent) 16%, transparent)" stroke="none"></rect>

            <!-- grille verticale -->
            <line class="grid-line" x1="59.1" y1="40" x2="59.1" y2="235"></line>
            <line class="grid-line" x1="142.1" y1="40" x2="142.1" y2="235"></line>
            <line class="grid-line" x1="225.0" y1="40" x2="225.0" y2="235"></line>
            <line class="grid-line" x1="307.9" y1="40" x2="307.9" y2="235"></line>
            <line class="grid-line" x1="390.9" y1="40" x2="390.9" y2="235"></line>

            <!-- grille horizontale -->
            <line class="grid-line" x1="55" y1="207.1" x2="395" y2="207.1"></line>
            <line class="grid-line" x1="55" y1="172.3" x2="395" y2="172.3"></line>
            <line class="grid-line" x1="55" y1="102.7" x2="395" y2="102.7"></line>
            <line class="grid-line" x1="55" y1="67.9" x2="395" y2="67.9"></line>

            <!-- axes -->
            <line class="axis" x1="48" y1="137.5" x2="402" y2="137.5"></line>
            <line class="axis" x1="142.1" y1="30" x2="142.1" y2="245"></line>

            <!-- tangente au point d'inflexion (pointille), traverse la courbe -->
            <line class="guide-line" x1="175.2" y1="74.8" x2="274.8" y2="200.2"></line>

            <!-- courbe -->
            <polyline class="curve-main" points="55.0,223.3 63.3,192.0 71.6,164.7 79.9,141.3 88.2,121.6 96.5,105.3 104.8,92.2 113.0,82.1 121.3,74.9 129.6,70.3 137.9,68.1 146.2,68.1 154.5,70.1 162.8,73.8 171.1,79.2 179.4,85.8 187.7,93.7 196.0,102.4 204.3,111.9 212.6,121.9 220.9,132.3 229.1,142.7 237.4,153.1 245.7,163.1 254.0,172.6 262.3,181.3 270.6,189.2 278.9,195.8 287.2,201.2 295.5,204.9 303.8,206.9 312.1,206.9 320.4,204.7 328.7,200.1 337.0,192.9 345.2,182.8 353.5,169.7 361.8,153.4 370.1,133.7 378.4,110.3 386.7,83.0 395.0,51.7"></polyline>

            <!-- point d'inflexion -->
            <circle class="plot-point-alt" cx="225.0" cy="137.5" r="6"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="210" y="18" text-anchor="middle">f(x) = x³ − 3x² + 2</text>
            <text class="annotation-label" x="140" y="55" text-anchor="middle">Concave (f'' &lt; 0)</text>
            <text class="annotation-label" x="310" y="55" text-anchor="middle">Convexe (f'' &gt; 0)</text>
            <text class="annotation-label" x="231" y="120" text-anchor="start">Inflexion (1 ; 0)</text>
            <text class="label-soft" x="278" y="212" text-anchor="middle">tangente</text>

            <text class="tick-label" x="59.1" y="250" text-anchor="middle">-1</text>
            <text class="tick-label" x="142.1" y="250" text-anchor="middle">0</text>
            <text class="tick-label" x="225.0" y="250" text-anchor="middle">1</text>
            <text class="tick-label" x="307.9" y="250" text-anchor="middle">2</text>
            <text class="tick-label" x="390.9" y="250" text-anchor="middle">3</text>

            <text class="tick-label" x="35" y="211" text-anchor="middle">-2</text>
            <text class="tick-label" x="35" y="176" text-anchor="middle">-1</text>
            <text class="tick-label" x="35" y="107" text-anchor="middle">1</text>
            <text class="tick-label" x="35" y="72" text-anchor="middle">2</text>

            <text class="axis-label" x="406" y="141">x</text>
            <text class="axis-label" x="147" y="24">y</text>
          </svg>
        `,
        notes: [
          'Zone teintée à gauche : sur $]-\\infty\\,;\\,1]$, $f\'\'(x) < 0$ donc $f$ est <strong>concave</strong> — les tangentes sont AU-DESSUS de la courbe.',
          'Zone teintée à droite : sur $[1\\,;\\,+\\infty[$, $f\'\'(x) > 0$ donc $f$ est <strong>convexe</strong> — les tangentes sont EN-DESSOUS de la courbe.',
          'Au point d\'inflexion $(1\\,;\\,0)$ (marqué en évidé), la tangente pointillée <strong>traverse</strong> la courbe : c\'est la signature visuelle d\'un changement de convexité.'
        ],
        reading: 'Repère d\'abord la couleur des deux zones : la courbure change de sens exactement à la frontière entre elles, au point d\'inflexion $(1\\,;\\,0)$.',
        caption: 'Courbe de $f(x) = x^3 - 3x^2 + 2$ avec zones de concavité/convexité distinguées et point d\'inflexion en $(1\\,;\\,0)$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14, sur le modèle du
         chapitre pilote (tle-primitives-integrales). Principe : une figure
         par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent le chapitre :
           1. l'élève confond point d'inflexion et extremum, parce que les
              deux sont « le point où quelque chose s'inverse » ; la figure
              les met côte à côte et montre que seule la tangente TRAVERSE
              dans un cas ;
           2. il croit que $f''(a) = 0$ suffit ; la figure dessine $x^4$ ET
              sa dérivée seconde l'une sous l'autre, pour qu'il VOIE que
              $f''$ touche zéro sans changer de signe ;
           3. il retient « convexe = bol » sans savoir le lire sur un
              dessin ; la figure donne le critère opératoire — la position
              des tangentes.

         TOUTES les coordonnées sont CALCULÉES par script (jamais posées à
         l'œil) et regardées par scripts/manuel/tests/diagrams-tle.test.js :
         changement de signe effectif de $f''$, traversée réelle de la
         tangente, positivité de $12x^2$, et position des tangentes par
         rapport à la courbe vérifiée en plusieurs points. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ne pas confondre',
          title: 'Une tangente qui traverse, une tangente qui rebondit',
          description: 'Sur les deux courbes, la tangente au point marqué est <strong>horizontale</strong>. Pourtant à gauche elle <strong>traverse</strong> la courbe, à droite elle la touche et repart du même côté. C\'est exactement ce qui sépare un point d\'inflexion d\'un extremum.',
          svg: `
            <svg viewBox="0 0 448 250" role="img" aria-labelledby="tle-cvx-infl-title tle-cvx-infl-desc">
              <title id="tle-cvx-infl-title">Tangente horizontale qui traverse la courbe, puis tangente horizontale qui ne la traverse pas</title>
              <desc id="tle-cvx-infl-desc">Deux vignettes a la meme echelle. A gauche, la courbe du cube monte, s'aplatit en passant par l'origine, puis repart en montant : la tangente horizontale tracee en ce point passe au-dessus de la courbe a gauche et en dessous a droite, donc elle traverse. A droite, la courbe du carre descend, touche l'origine, puis remonte : la tangente horizontale tracee en ce point reste sous la courbe des deux cotes, elle ne traverse jamais. Le premier point est un point d'inflexion, le second un minimum.</desc>

              <!-- VIGNETTE GAUCHE : cube. f''(x) = 6x change de signe en 0,
                   donc la tangente traverse. Coordonnees calculees. -->
              <line class="axis" x1="30" y1="118" x2="206" y2="118"></line>
              <line class="axis" x1="118" y1="30" x2="118" y2="206"></line>
              <line class="guide-line" x1="43.8" y1="118" x2="192.3" y2="118"></line>
              <polyline class="curve-main" points="46.5,205.9 49.3,196.1 52,187.1 54.8,178.8 57.5,171.2 60.3,164.3 63,158 65.8,152.3 68.5,147.2 71.3,142.6 74,138.5 76.8,134.9 79.5,131.7 82.3,129 85,126.6 87.8,124.7 90.5,123 93.3,121.6 96,120.6 98.8,119.7 101.5,119.1 104.3,118.6 107,118.3 109.8,118.1 112.5,118 115.3,118 118,118 120.8,118 123.5,118 126.3,117.9 129,117.7 131.8,117.4 134.5,116.9 137.3,116.3 140,115.4 142.8,114.4 145.5,113 148.3,111.3 151,109.4 153.8,107 156.5,104.3 159.3,101.1 162,97.5 164.8,93.4 167.5,88.8 170.3,83.7 173,78 175.8,71.7 178.5,64.8 181.3,57.2 184,48.9 186.8,39.9 189.5,30.1"></polyline>
              <circle class="plot-point-alt" cx="118" cy="118" r="5.5"></circle>
              <text class="annotation-label" x="118" y="20" text-anchor="middle">courbe du cube</text>
              <text class="annotation-label" x="118" y="228" text-anchor="middle">point inflexion</text>
              <text class="tick-label" x="118" y="244" text-anchor="middle">la tangente traverse</text>

              <!-- VIGNETTE DROITE : carre. h''(x) = 2 > 0 partout, donc
                   aucun changement de signe et aucune traversee. -->
              <line class="axis" x1="240" y1="118" x2="416" y2="118"></line>
              <line class="axis" x1="328" y1="30" x2="328" y2="206"></line>
              <line class="guide-line" x1="253.8" y1="118" x2="402.3" y2="118"></line>
              <polyline class="curve-main" points="248.3,33.9 251,39.6 253.8,45.1 256.5,50.4 259.3,55.5 262,60.4 264.8,65.1 267.5,69.6 270.3,73.9 273,78 275.8,81.9 278.5,85.6 281.3,89.1 284,92.4 286.8,95.5 289.5,98.4 292.3,101.1 295,103.6 297.8,105.9 300.5,108 303.3,109.9 306,111.6 308.8,113.1 311.5,114.4 314.3,115.5 317,116.4 319.8,117.1 322.5,117.6 325.3,117.9 328,118 330.8,117.9 333.5,117.6 336.3,117.1 339,116.4 341.8,115.5 344.5,114.4 347.3,113.1 350,111.6 352.8,109.9 355.5,108 358.3,105.9 361,103.6 363.8,101.1 366.5,98.4 369.3,95.5 372,92.4 374.8,89.1 377.5,85.6 380.3,81.9 383,78 385.8,73.9 388.5,69.6 391.3,65.1 394,60.4 396.8,55.5 399.5,50.4 402.3,45.1 405,39.6 407.8,33.9"></polyline>
              <circle class="plot-point" cx="328" cy="118" r="5.5"></circle>
              <text class="annotation-label" x="328" y="20" text-anchor="middle">courbe du carré</text>
              <text class="annotation-label" x="328" y="228" text-anchor="middle">minimum</text>
              <text class="tick-label" x="328" y="244" text-anchor="middle">la tangente rebondit</text>
            </svg>
          `,
          notes: [
            'À gauche, $g(x) = x^3$ : la dérivée seconde $g\'\'(x) = 6x$ vaut $-3$ en $x = -0{,}5$ et $+3$ en $x = 0{,}5$. Elle <strong>change de signe</strong>, donc $0$ est un point d\'inflexion.',
            'À droite, $h(x) = x^2$ : la dérivée seconde $h\'\'(x) = 2$ est positive partout. Elle ne change <strong>jamais</strong> de signe, donc $0$ n\'est pas un point d\'inflexion — c\'est un minimum.',
            'Les deux tangentes sont horizontales, mais cela ne dit rien : c\'est la <strong>traversée</strong> qui distingue les deux points. À gauche la courbe passe d\'un côté à l\'autre de la tangente, à droite elle reste du même côté.'
          ],
          reading: 'Pose ton crayon le long de la tangente, puis suis la courbe de gauche à droite. Sur la vignette de gauche, tu passes en dessous du crayon, puis au-dessus : la courbe a changé de côté, c\'est une inflexion. Sur celle de droite, tu restes toujours au-dessus : la courbe touche et repart, c\'est un extremum. Retiens ce geste — il te dispense de tout calcul pour trancher entre les deux.',
          caption: 'Tangente horizontale en $0$ pour $x^3$ (elle traverse : inflexion) et pour $x^2$ (elle ne traverse pas : minimum).'
        },
        {
          theme: 'maths',
          kicker: 'Le contre-exemple à connaître',
          title: 'Quand la dérivée seconde touche zéro sans changer de signe',
          description: 'La fonction $k(x) = x^4$ vérifie bien $k\'\'(0) = 0$. Et pourtant $0$ n\'est <strong>pas</strong> un point d\'inflexion. La figure met les deux courbes l\'une sous l\'autre : en haut $k$, en bas sa dérivée seconde $k\'\'(x) = 12x^2$, qui <strong>touche</strong> l\'axe en $0$ sans jamais passer en dessous.',
          svg: `
            <svg viewBox="0 0 420 310" role="img" aria-labelledby="tle-cvx-x4-title tle-cvx-x4-desc">
              <title id="tle-cvx-x4-title">La fonction puissance quatre et sa derivee seconde, l'une sous l'autre</title>
              <desc id="tle-cvx-x4-desc">Deux reperes empiles partagent les memes abscisses. Dans le repere du haut, la courbe de la fonction puissance quatre descend, s'aplatit longuement autour de zero, puis remonte symetriquement. Dans le repere du bas, la courbe de sa derivee seconde est une parabole qui descend jusqu'a toucher l'axe horizontal exactement en zero, puis remonte aussitot : elle ne devient jamais negative. Comme la derivee seconde ne change pas de signe, le point zero n'est pas un point d'inflexion mais un minimum.</desc>

              <!-- REPERE DU HAUT : k(x) = x^4 sur [-1,5 ; 1,5]. -->
              <line class="axis" x1="60" y1="129.8" x2="360" y2="129.8"></line>
              <line class="axis" x1="210" y1="24" x2="210" y2="142"></line>
              <polyline class="curve-main" points="60,26.8 65,39.9 70,51.6 75,62.2 80,71.7 85,80.1 90,87.6 95,94.2 100,100 105,105.1 110,109.4 115,113.2 120,116.4 125,119.2 130,121.5 135,123.4 140,124.9 145,126.2 150,127.2 155,127.9 160,128.5 165,129 170,129.3 175,129.5 180,129.6 185,129.7 190,129.8 195,129.8 200,129.8 205,129.8 210,129.8 215,129.8 220,129.8 225,129.8 230,129.8 235,129.7 240,129.6 245,129.5 250,129.3 255,129 260,128.5 265,127.9 270,127.2 275,126.2 280,124.9 285,123.4 290,121.5 295,119.2 300,116.4 305,113.2 310,109.4 315,105.1 320,100 325,94.2 330,87.6 335,80.1 340,71.7 345,62.2 350,51.6 355,39.9 360,26.8"></polyline>
              <circle class="plot-point" cx="210" cy="129.8" r="5"></circle>
              <text class="annotation-label" x="366" y="40" text-anchor="start">courbe</text>
              <text class="annotation-label" x="366" y="54" text-anchor="start">de k</text>
              <text class="tick-label" x="210" y="158" text-anchor="middle">minimum en zéro</text>

              <!-- REPERE DU BAS : k''(x) = 12x^2, jamais negatif. -->
              <line class="axis" x1="60" y1="271.9" x2="360" y2="271.9"></line>
              <line class="axis" x1="210" y1="190" x2="210" y2="286"></line>
              <polyline class="curve-main" points="60,195.6 65,200.6 70,205.5 75,210.1 80,214.6 85,218.9 90,223.1 95,227.1 100,230.9 105,234.5 110,238 115,241.3 120,244.4 125,247.4 130,250.2 135,252.8 140,255.3 145,257.6 150,259.7 155,261.6 160,263.4 165,265 170,266.5 175,267.7 180,268.8 185,269.8 190,270.5 195,271.1 200,271.5 205,271.8 210,271.9 215,271.8 220,271.5 225,271.1 230,270.5 235,269.8 240,268.8 245,267.7 250,266.5 255,265 260,263.4 265,261.6 270,259.7 275,257.6 280,255.3 285,252.8 290,250.2 295,247.4 300,244.4 305,241.3 310,238 315,234.5 320,230.9 325,227.1 330,223.1 335,218.9 340,214.6 345,210.1 350,205.5 355,200.6 360,195.6"></polyline>
              <circle class="plot-point-alt" cx="210" cy="271.9" r="5"></circle>
              <text class="annotation-label" x="366" y="205" text-anchor="start">courbe</text>
              <text class="annotation-label" x="414" y="219" text-anchor="end">de k seconde</text>
              <text class="tick-label" x="210" y="300" text-anchor="middle">elle touche zéro sans le traverser</text>
              <text class="tick-label" x="110" y="180" text-anchor="middle">toujours positive</text>
            </svg>
          `,
          notes: [
            'En haut : $k(x) = x^4$. La courbe s\'aplatit longuement autour de $0$, ce qui fait croire à une inflexion — mais elle reste <strong>au-dessus</strong> de sa tangente des deux côtés.',
            'En bas : $k\'\'(x) = 12x^2$. Elle vaut $5{,}88$ en $x = -0{,}7$, $0$ en $x = 0$, et de nouveau $5{,}88$ en $x = 0{,}7$. Elle <strong>touche</strong> l\'axe, elle ne le <strong>traverse</strong> pas.',
            'Conclusion : $k\'\'(a) = 0$ est une condition <strong>nécessaire</strong>, jamais suffisante. Ce qu\'il faut vérifier, c\'est le changement de signe.'
          ],
          reading: 'Regarde le repère du bas et suis la courbe du doigt de gauche à droite : elle descend, elle effleure l\'axe, elle remonte. À aucun moment elle ne passe en dessous. Or un point d\'inflexion exige que la dérivée seconde soit négative d\'un côté et positive de l\'autre. Ici ce n\'est jamais le cas, donc il n\'y a pas de point d\'inflexion — même si l\'équation $k\'\'(x) = 0$ a bien une solution.',
          caption: 'La fonction $k(x) = x^4$ et sa dérivée seconde $k\'\'(x) = 12x^2$ : un zéro sans changement de signe, donc pas de point d\'inflexion.'
        },
        {
          theme: 'maths',
          kicker: 'Comment le lire',
          title: 'La convexité se lit sur la position des tangentes',
          description: 'Comment savoir si une courbe est convexe ou concave quand on n\'a que le dessin ? On trace deux tangentes et on regarde de quel côté elles tombent. <strong>Sous</strong> la courbe partout : convexe. <strong>Au-dessus</strong> partout : concave.',
          svg: `
            <svg viewBox="0 0 448 210" role="img" aria-labelledby="tle-cvx-tang-title tle-cvx-tang-desc">
              <title id="tle-cvx-tang-title">Tangentes sous une courbe convexe, tangentes au-dessus d'une courbe concave</title>
              <desc id="tle-cvx-tang-desc">Deux vignettes a la meme echelle. A gauche une courbe en forme de bol, avec deux tangentes tracees en des points differents : chacune passe sous la courbe sur toute sa longueur. A droite une courbe en forme de dome, avec deux tangentes tracees de la meme facon : chacune passe au-dessus de la courbe sur toute sa longueur. La position des tangentes suffit donc a reconnaitre la convexite sans aucun calcul.</desc>

              <line class="axis" x1="34" y1="160.5" x2="204" y2="160.5"></line>
              <polyline class="curve-main" points="34,87.6 36.8,91.7 39.7,95.6 42.5,99.4 45.3,103.1 48.2,106.7 51,110.1 53.8,113.4 56.7,116.5 59.5,119.5 62.3,122.3 65.2,125 68,127.6 70.8,130 73.7,132.3 76.5,134.5 79.3,136.5 82.2,138.4 85,140.1 87.8,141.7 90.7,143.2 93.5,144.5 96.3,145.7 99.2,146.7 102,147.6 104.8,148.4 107.7,149 110.5,149.5 113.3,149.9 116.2,150.1 119,150.1 121.8,150.1 124.7,149.9 127.5,149.5 130.3,149 133.2,148.4 136,147.6 138.8,146.7 141.7,145.7 144.5,144.5 147.3,143.2 150.2,141.7 153,140.1 155.8,138.4 158.7,136.5 161.5,134.5 164.3,132.3 167.2,130 170,127.6 172.8,125 175.7,122.3 178.5,119.5 181.3,116.5 184.2,113.4 187,110.1 189.8,106.7 192.7,103.1 195.5,99.4 198.3,95.6 201.2,91.7 204,87.6"></polyline>
              <line class="guide-line" x1="37.9" y1="101.4" x2="99.7" y2="155.2"></line>
              <line class="guide-line" x1="138.3" y1="155.2" x2="200.1" y2="101.4"></line>
              <circle class="plot-point" cx="68.8" cy="128.3" r="4"></circle>
              <circle class="plot-point" cx="169.2" cy="128.3" r="4"></circle>
              <text class="annotation-label" x="119" y="24" text-anchor="middle">convexe</text>
              <text class="tick-label" x="119" y="180" text-anchor="middle">tangentes sous la courbe</text>
              <text class="tick-label" x="119" y="196" text-anchor="middle">f seconde positive</text>

              <line class="axis" x1="244" y1="160.5" x2="414" y2="160.5"></line>
              <polyline class="curve-main" points="244,109.3 246.8,105.2 249.7,101.2 252.5,97.4 255.3,93.7 258.2,90.2 261,86.7 263.8,83.5 266.7,80.3 269.5,77.4 272.3,74.5 275.2,71.8 278,69.2 280.8,66.8 283.7,64.5 286.5,62.3 289.3,60.3 292.2,58.4 295,56.7 297.8,55.1 300.7,53.6 303.5,52.3 306.3,51.1 309.2,50.1 312,49.2 314.8,48.4 317.7,47.8 320.5,47.3 323.3,47 326.2,46.8 329,46.7 331.8,46.8 334.7,47 337.5,47.3 340.3,47.8 343.2,48.4 346,49.2 348.8,50.1 351.7,51.1 354.5,52.3 357.3,53.6 360.2,55.1 363,56.7 365.8,58.4 368.7,60.3 371.5,62.3 374.3,64.5 377.2,66.8 380,69.2 382.8,71.8 385.7,74.5 388.5,77.4 391.3,80.3 394.2,83.5 397,86.7 399.8,90.2 402.7,93.7 405.5,97.4 408.3,101.2 411.2,105.2 414,109.3"></polyline>
              <line class="guide-line" x1="247.9" y1="95.4" x2="309.7" y2="41.6"></line>
              <line class="guide-line" x1="348.3" y1="41.6" x2="410.1" y2="95.4"></line>
              <circle class="plot-point-alt" cx="278.8" cy="68.5" r="4"></circle>
              <circle class="plot-point-alt" cx="379.2" cy="68.5" r="4"></circle>
              <text class="annotation-label" x="329" y="24" text-anchor="middle">concave</text>
              <text class="tick-label" x="329" y="180" text-anchor="middle">tangentes au-dessus</text>
              <text class="tick-label" x="329" y="196" text-anchor="middle">f seconde négative</text>
            </svg>
          `,
          notes: [
            'À gauche, $f(x) = \\dfrac{x^2}{2} + 0{,}4$ avec $f\'\'(x) = 1 > 0$ : les deux tangentes, tracées en $x = -1{,}3$ et $x = 1{,}3$, restent <strong>sous</strong> la courbe partout.',
            'À droite, $g(x) = -\\dfrac{x^2}{2} + 4{,}4$ avec $g\'\'(x) = -1 < 0$ : les deux tangentes restent <strong>au-dessus</strong> de la courbe partout.',
            'Ce n\'est pas une coïncidence de dessin, c\'est une <strong>caractérisation</strong> : une fonction est convexe exactement quand sa courbe est au-dessus de chacune de ses tangentes.'
          ],
          reading: 'Tu n\'as pas toujours l\'expression de la fonction : parfois tu n\'as qu\'une courbe lue sur un écran ou dans un énoncé. Dans ce cas, trace mentalement une tangente en deux points quelconques et demande-toi de quel côté elle tombe. Si elle passe toujours sous la courbe, la fonction est convexe ; si elle passe toujours au-dessus, elle est concave. Et si elle change de côté quelque part, tu viens de trouver un point d\'inflexion.',
          caption: 'Position des tangentes : sous la courbe pour une fonction convexe, au-dessus pour une fonction concave.'
        }
      ],

      recap: [
        '$f\'\' > 0$ → convexe (bol / tangentes en-dessous). $f\'\' < 0$ → concave (dôme / tangentes au-dessus).',
        'Point d\'inflexion = $f\'\'$ change de signe. La condition $f\'\'(a) = 0$ est <strong>nécessaire mais pas suffisante</strong>.',
        'Contre-exemple essentiel : $f(x) = x^4$ vérifie $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout → pas de point d\'inflexion en $0$.',
        'Inégalité de convexité : si $f$ est convexe, alors $f\\left(\\dfrac{a+b}{2}\\right) \\leq \\dfrac{f(a)+f(b)}{2}$ (la courbe est sous la corde).'
      ],
      piege: 'Un zéro de $f\'\'$ n\'est pas forcément un point d\'inflexion : il faut vérifier le <strong>changement de signe</strong>.<br/><br/>Par exemple, $f(x)=x^4$ a $f\'\'(0)=0$ mais $f\'\'(x) = 12x^2 \\geq 0$ ne change pas de signe en $0$.'
    },
    quiz: [
      { q: 'Si $f\'\'(x) > 0$ sur $[a;b]$, la courbe de $f$ est :', options: ['Concave', 'Convexe', 'Décroissante', 'Constante'], answer: 1, correction: '$f\'\'>0 \\Rightarrow$ <strong>convexe</strong> (tournée vers le haut, comme $x^2$).<br/><br/>Les tangentes sont en-dessous de la courbe et la pente est croissante.' },
      { q: 'Pour $f(x)=x^3$, $f\'\'(x)=$ ?', options: ['$3x$', '$6x$', '$3x^2$', '$x^2$'], answer: 1, correction: 'On dérive deux fois : $f\'(x)=3x^2$, puis $f\'\'(x)=6x$.<br/><br/>On remarque que $f\'\'(0)=0$ et $f\'\'$ change de signe en $0$ : c\'est un point d\'inflexion de $x^3$.' },
      { q: '$f(x)=x^4$ vérifie $f\'\'(0)=12\\times0^2=0$. Un élève conclut que $x=0$ est un point d\'inflexion. A-t-il raison ?', options: ['Non : $f\'\'(x)=12x^2\\ge0$ partout et ne change pas de signe en $0$ : ce n\'est PAS un point d\'inflexion', 'Oui : $f\'\'(0)=0$ implique toujours un point d\'inflexion', 'Oui : $x=0$ est le minimum de $f$, donc c\'est un point d\'inflexion', 'Impossible à dire sans calculer $f\'\'\'(0)$'], answer: 0, correction: 'La condition $f\'\'(a)=0$ est <strong>NÉCESSAIRE mais pas SUFFISANTE</strong> pour un point d\'inflexion. Il faut aussi que $f\'\'$ <strong>change de signe</strong> autour de $a$.<br/><br/>Ici $f\'\'(x)=12x^2\\ge0$ pour tout $x$ : jamais négatif, donc pas de changement de signe en $0$. Le point $(0;0)$ est un minimum, pas un inflexion.<br/><br/>Comparer avec $f(x)=x^3$ où $f\'\'(0)=0$ ET $f\'\'$ change de signe : là c\'est bien un inflexion.' },
      { q: 'La fonction $\\ln(x)$ est convexe ou concave sur $]0;+\\infty[$ ?', options: ['Convexe car $\\ln$ est croissante', 'Concave car $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$', 'Ni l\'un ni l\'autre', 'Convexe sur $]0;1]$ et concave sur $[1;+\\infty[$'], answer: 1, correction: '$(\\ln x)\' = 1/x$ et $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$.<br/><br/>Donc $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$ : ses tangentes sont toujours au-dessus de la courbe. Croissance et convexité sont deux notions différentes !' },
      { q: 'Au point d\'inflexion, la tangente :', options: ['Est horizontale', 'Traverse la courbe (passe de dessous à dessus ou inversement)', 'Est verticale', 'Ne touche pas la courbe'], answer: 1, correction: 'Au point d\'inflexion, la convexité change : la tangente passe de "en-dessous" (convexe) à "au-dessus" (concave) ou inversement.<br/><br/>Elle <strong>traverse</strong> la courbe en ce point. Attention : la tangente n\'est pas forcément horizontale au point d\'inflexion !' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14, sur le modèle du chapitre
       pilote.

       AVANT : trois tâches mesurées, mais toutes les trois sur le même
       squelette — dériver deux fois un polynôme et résoudre $f'' = 0$. Le
       professeur qui feuilletait la banque y lisait douze fois la même
       question sous quatre décors.

       APRÈS : sept tâches réellement différentes, qui couvrent ce que le
       chapitre demande VRAIMENT — l'abscisse d'inflexion, mais aussi la
       valeur de $f''$ en un point, la lecture de la convexité sur un
       intervalle, le contre-exemple du zéro sans changement de signe, la
       convexité d'une exponentielle, celle d'un logarithme, et l'inégalité
       de convexité (courbe sous la corde).

       Le décor continue de varier par pick(), mais il ne compte pas pour de
       la diversité : une tâche se reconnaît à la première ligne du corrigé.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['inflexionCubique', 'valeurSeconde', 'bornConvexe',
                            'zeroSansChangement', 'exponentielle', 'logarithme',
                            'corde']);

        /* TÂCHE 1 — abscisse du point d'inflexion d'une cubique. La tâche
           historique, conservée : c'est l'application directe de la méthode
           du cours, et il en faut une. */
        if (tache === 'inflexionCubique') {
          const ctx = pick([
            { intro: 'Le coût de production d\'une usine (en milliers d\'euros) est', v: 'q' },
            { intro: 'La position d\'un mobile le long d\'un axe (en m) est', v: 't' },
            { intro: 'La température d\'un four de cuisson (en °C) est', v: 't' },
            { intro: 'Le bénéfice d\'une start-up (en k€) est modélisé par', v: 'x' }
          ]);
          const a = rand(1, 4), b = rand(2, 6);
          // f(x) = ax^3 - bx^2, f'' = 6ax - 2b, inflexion en x = b/(3a)
          const inflX = parseFloat((b / (3 * a)).toFixed(2));
          return {
            statement: `${ctx.intro} $f(${ctx.v}) = ${a}${ctx.v}^3 - ${b}${ctx.v}^2$. Déterminer l'abscisse du point d'inflexion. Arrondir à $0{,}01$.`,
            answer: inflX, tolerance: 0.05, unit: '',
            hint: `Calcule $f''(${ctx.v})$ et résous $f'' = 0$. Vérifie ensuite que $f''$ change bien de signe.`,
            solution: [
              `$f'(${ctx.v}) = ${3 * a}${ctx.v}^2 - ${2 * b}${ctx.v}$`,
              `$f''(${ctx.v}) = ${6 * a}${ctx.v} - ${2 * b}$`,
              `$f'' = 0 \\Leftrightarrow ${ctx.v} = \\dfrac{${2 * b}}{${6 * a}} = ${fr(inflX)}$`,
              `$f''$ passe de négatif à positif en $${ctx.v} = ${fr(inflX)}$ : c'est bien un point d'inflexion.`
            ]
          };
        }

        /* TÂCHE 2 — valeur de la dérivée seconde en un point donné. Tâche
           différente de la précédente : on ne résout aucune équation, on
           dérive deux fois puis on substitue. C'est l'occasion de voir que
           le SIGNE de ce nombre répond déjà à la question de la convexité
           locale, sans tableau. */
        if (tache === 'valeurSeconde') {
          const ctx = pick([
            { intro: 'Le chiffre d\'affaires mensuel (en k€) suit' },
            { intro: 'La hauteur d\'un projectile (en m) suit' },
            { intro: 'Le taux de remplissage d\'un stade (en %) suit' }
          ]);
          const a = rand(1, 3), b = rand(2, 5), x0 = rand(1, 4);
          // f(x) = a x^3 + b x^2 => f'' = 6a x + 2b
          const res = 6 * a * x0 + 2 * b;
          return {
            statement: `${ctx.intro} $f(x) = ${a}x^3 + ${b}x^2$. Calculer $f''(${x0})$.`,
            answer: res, tolerance: 0, unit: '',
            hint: `Dérive une première fois, puis une seconde fois, et seulement ensuite remplace $x$ par $${x0}$. Dériver avant de substituer, jamais l'inverse.`,
            solution: [
              `$f'(x) = ${3 * a}x^2 + ${2 * b}x$`,
              `$f''(x) = ${6 * a}x + ${2 * b}$`,
              `$f''(${x0}) = ${6 * a} \\times ${x0} + ${2 * b} = ${res}$`,
              `Ce nombre est positif : la courbe est donc <strong>convexe</strong> au voisinage de $x = ${x0}$.`
            ]
          };
        }

        /* TÂCHE 3 — borne de l'intervalle de convexité. L'élève ne cherche
           plus un point mais un INTERVALLE : il doit résoudre une
           inéquation, pas une équation. Erreur récurrente : donner le point
           au lieu de l'intervalle, ou inverser le sens. */
        if (tache === 'bornConvexe') {
          const ctx = pick([
            { intro: 'La consommation électrique d\'un bâtiment (en kWh) suit' },
            { intro: 'Le nombre d\'abonnés d\'une chaîne (en milliers) suit' },
            { intro: 'La profondeur d\'un chenal (en m) suit' }
          ]);
          const a = rand(1, 3), b = rand(3, 9);
          // f(x) = a x^3 - b x^2 : f'' = 6a x - 2b > 0 <=> x > b/(3a)
          const borne = parseFloat((b / (3 * a)).toFixed(2));
          return {
            statement: `${ctx.intro} $f(x) = ${a}x^3 - ${b}x^2$. Cette fonction est convexe sur un intervalle de la forme $[m\\,;\\,+\\infty[$. Déterminer $m$. Arrondir à $0{,}01$.`,
            answer: borne, tolerance: 0.05, unit: '',
            hint: `Être convexe, c'est avoir $f'' \\geq 0$. Il ne s'agit donc pas de résoudre une équation mais une <strong>inéquation</strong>.`,
            solution: [
              `$f''(x) = ${6 * a}x - ${2 * b}$`,
              `$f''(x) \\geq 0 \\Leftrightarrow ${6 * a}x \\geq ${2 * b} \\Leftrightarrow x \\geq \\dfrac{${2 * b}}{${6 * a}}$`,
              `Donc $m = ${fr(borne)}$ : la fonction est convexe sur $[${fr(borne)}\\,;\\,+\\infty[$ et concave avant.`
            ]
          };
        }

        /* TÂCHE 4 — le zéro qui n'est pas une inflexion. Tâche adossée au
           deuxième schéma du cours : $f''$ s'annule, mais sans changer de
           signe. La réponse attendue est un COMPTE (zéro point d'inflexion),
           ce qui oblige l'élève à conclure au lieu de calculer. */
        if (tache === 'zeroSansChangement') {
          const ctx = pick([
            { intro: 'Un logiciel de tracé affiche la courbe de' },
            { intro: 'Un devoir propose la fonction' },
            { intro: 'Une fiche de révision présente la fonction' }
          ]);
          const a = rand(1, 5), c = rand(1, 6);
          // f(x) = a x^4 + c : f'' = 12a x^2 >= 0, s'annule en 0 sans changer de signe
          return {
            statement: `${ctx.intro} $f(x) = ${a}x^4 + ${c}$. Un élève résout $f''(x) = 0$, trouve $x = 0$, et en conclut que la courbe possède un point d'inflexion. Combien cette courbe a-t-elle réellement de points d'inflexion ?`,
            answer: 0, tolerance: 0, unit: '',
            hint: `Calcule $f''(x)$ et regarde son <strong>signe</strong> de part et d'autre de $0$, pas seulement sa valeur en $0$.`,
            solution: [
              `$f'(x) = ${4 * a}x^3$, puis $f''(x) = ${12 * a}x^2$`,
              `$f''(x) = 0$ a bien pour unique solution $x = 0$. Mais $${12 * a}x^2 \\geq 0$ pour <strong>tout</strong> $x$ : la dérivée seconde touche zéro sans jamais devenir négative.`,
              `Sans changement de signe, il n'y a pas d'inflexion : la réponse est $0$. La condition $f''(a) = 0$ est nécessaire, jamais suffisante.`
            ]
          };
        }

        /* TÂCHE 5 — convexité d'une exponentielle. Change complètement de
           famille de fonctions : ici $f''$ ne s'annule jamais, donc la
           réponse est « aucun point d'inflexion » pour une raison tout
           autre que celle de la tâche 4. */
        if (tache === 'exponentielle') {
          const ctx = pick([
            { intro: 'La population d\'une bactérie (en millions) suit' },
            { intro: 'Le capital placé à intérêts composés (en €) suit' },
            { intro: 'Le nombre de partages d\'une publication suit' }
          ]);
          const k = rand(2, 6), x0 = rand(0, 2);
          // f(x) = k e^x => f'' = k e^x
          const res = parseFloat((k * Math.exp(x0)).toFixed(2));
          return {
            statement: `${ctx.intro} $f(x) = ${k}e^{x}$. Calculer $f''(${x0})$, puis conclure sur la convexité. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `L'exponentielle est sa propre dérivée : dériver $${k}e^x$ redonne $${k}e^x$, deux fois de suite.`,
            solution: [
              `$f'(x) = ${k}e^{x}$, et de nouveau $f''(x) = ${k}e^{x}$`,
              `$f''(${x0}) = ${k}e^{${x0}} = ${fr(res)}$`,
              `Comme $e^x > 0$ pour tout $x$, on a $f''(x) > 0$ partout : la fonction est <strong>convexe sur $\\mathbb{R}$ entier</strong>, et sa courbe n'a aucun point d'inflexion.`
            ]
          };
        }

        /* TÂCHE 6 — convexité d'un logarithme. Le cas symétrique du
           précédent, et celui où l'élève confond le plus souvent croissance
           et convexité : $\ln$ monte, et pourtant elle est concave. */
        if (tache === 'logarithme') {
          const ctx = pick([
            { intro: 'Le niveau sonore perçu (en décibels) suit' },
            { intro: 'La satisfaction déclarée en fonction du budget suit' },
            { intro: 'Le gain de performance en fonction du temps passé suit' }
          ]);
          const k = rand(2, 6), x0 = pick([1, 2, 4]);
          // f(x) = k ln(x) => f'' = -k/x^2
          const res = parseFloat((-k / (x0 * x0)).toFixed(2));
          return {
            statement: `${ctx.intro} $f(x) = ${k}\\ln(x)$ pour $x > 0$. Calculer $f''(${x0})$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `La dérivée de $\\ln(x)$ est $\\dfrac{1}{x}$, c'est-à-dire $x^{-1}$. Dérive cette expression une seconde fois avec la règle des puissances.`,
            solution: [
              `$f'(x) = \\dfrac{${k}}{x}$, que l'on réécrit $${k}x^{-1}$`,
              `$f''(x) = -${k}x^{-2} = -\\dfrac{${k}}{x^2}$`,
              `$f''(${x0}) = -\\dfrac{${k}}{${x0 * x0}} = ${fr(res)}$`,
              `Ce nombre est négatif, et il l'est pour tout $x > 0$ : la fonction $\\ln$ est <strong>concave</strong>, alors même qu'elle est croissante. Croître et être convexe sont deux choses différentes.`
            ]
          };
        }

        /* TÂCHE 7 — inégalité de convexité. La seule tâche où l'élève
           compare deux nombres au lieu d'en produire un par dérivation :
           elle donne son sens géométrique au chapitre (la courbe est sous
           la corde) et prépare la lecture du troisième schéma. */
        const ctx = pick([
          { intro: 'Pour comparer deux tarifs, on étudie' },
          { intro: 'Pour comparer deux dosages, on étudie' },
          { intro: 'Pour comparer deux trajets, on étudie' }
        ]);
        const a = rand(1, 4), b = a + rand(2, 5);
        // f(x) = x^2 convexe : compare (f(a)+f(b))/2 (corde) et f((a+b)/2) (courbe)
        const milieu = (a + b) / 2;
        const surCorde = (a * a + b * b) / 2;
        const surCourbe = milieu * milieu;
        const ecart = parseFloat((surCorde - surCourbe).toFixed(2));
        return {
          statement: `${ctx.intro} la fonction convexe $f(x) = x^2$ entre $a = ${a}$ et $b = ${b}$. On note $M$ le milieu du segment reliant les deux points de la courbe (donc $M$ est sur la <strong>corde</strong>), et $N$ le point de la <strong>courbe</strong> d'abscisse $\\dfrac{a+b}{2}$. Calculer la hauteur qui sépare $M$ de $N$. Arrondir à $0{,}01$.`,
          answer: ecart, tolerance: 0.05, unit: '',
          hint: `L'ordonnée de $M$ est la moyenne $\\dfrac{f(a) + f(b)}{2}$ ; celle de $N$ est $f\\left(\\dfrac{a+b}{2}\\right)$. La convexité garantit que $M$ est au-dessus de $N$ : l'écart est donc positif.`,
          solution: [
            `Sur la corde : $\\dfrac{f(${a}) + f(${b})}{2} = \\dfrac{${a * a} + ${b * b}}{2} = ${fr(surCorde)}$`,
            `Sur la courbe : $f\\left(\\dfrac{${a} + ${b}}{2}\\right) = f(${fr(milieu)}) = ${fr(parseFloat(surCourbe.toFixed(2)))}$`,
            `Écart $= ${fr(surCorde)} - ${fr(parseFloat(surCourbe.toFixed(2)))} = ${fr(ecart)}$`,
            `Il est positif, et il le serait pour n'importe quels $a$ et $b$ : c'est précisément ce que dit la convexité — <strong>la courbe passe sous la corde</strong>.`
          ]
        };
      }
    },
    probleme: {
      context: 'La hauteur d\'eau dans un réservoir est $h(t)=t^3-6t^2+9t$ (en m, $t$ en h, $t\\in[0;4]$).',
      tasks: [
        'Calculer $h\'(t)$ et $h\'\'(t)$.',
        'Sur quel intervalle le niveau monte-t-il de façon convexe (accélération positive) ?',
        'Quel est le point d\'inflexion ?'
      ],
      solutions: [
        '$h\'(t)=3t^2-12t+9$ ; $h\'\'(t)=6t-12$.',
        '$h\'\'>0 \\Leftrightarrow 6t-12>0 \\Leftrightarrow t>2$ : convexe sur $[2;4]$.',
        '$h\'\'(t)=0 \\Rightarrow t=2$ ; $h\'\'$ change de signe : point d\'inflexion en $t=2$, $h(2)=8-24+18=2$ m.'
      ],
      finalAnswer: 'Point d\'inflexion en $(2;2)$. Convexe sur $[2;4]$.'
    },

    evaluation: {
      title: 'Évaluation — Convexité',
      duration: '30 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-14. Elle demandait « calculer $f''(x)$ »,
             c'est-à-dire un troisième calcul dans une évaluation qui n'en
             comptait déjà que. Aucune des cinq questions ne demandait de LIRE
             une représentation, alors que tout le chapitre s'enseigne sur des
             courbes et des tableaux de signes.

             La nouvelle question ne donne AUCUNE expression : l'élève ne peut
             rien dériver. Il doit lire un tableau de signes de $f''$ et en
             tirer la structure de la courbe. C'est « représenter ». */
          statement: 'On ne donne pas l\'expression de $f$. On sait seulement que sa dérivée seconde a le tableau de signes suivant : $f\'\'$ est <strong>négative</strong> sur $]-\\infty\\,;\\,-2[$, <strong>positive</strong> sur $]-2\\,;\\,3[$, et de nouveau <strong>négative</strong> sur $]3\\,;\\,+\\infty[$. Que peut-on affirmer sur la courbe de $f$ ?',
          type: 'multiple-choice',
          options: [
            'Elle est concave, puis convexe, puis concave : elle possède <strong>deux</strong> points d\'inflexion, en $x = -2$ et en $x = 3$',
            'Elle est croissante sur $]-2\\,;\\,3[$ et décroissante ailleurs',
            'Elle possède un seul point d\'inflexion, en $x = -2$',
            'Elle admet un maximum en $x = -2$ et un minimum en $x = 3$'
          ],
          answer: 0,
          points: 2,
          correction: 'Le signe de $f\'\'$ donne la <strong>courbure</strong>, jamais le sens de variation — celui-là se lit sur $f\'$.<br/><br/>Là où $f\'\' < 0$, la courbe est <strong>concave</strong> : c\'est le cas sur $]-\\infty\\,;\\,-2[$ puis sur $]3\\,;\\,+\\infty[$.<br/><br/>Là où $f\'\' > 0$, la courbe est <strong>convexe</strong> : c\'est le cas sur $]-2\\,;\\,3[$.<br/><br/>La courbure change donc de sens <strong>deux fois</strong>, en $x = -2$ et en $x = 3$. Ces deux abscisses sont bien des points d\'inflexion, puisque $f\'\'$ y change effectivement de signe.<br/><br/>Les propositions qui parlent de croissance ou d\'extremum confondent $f\'$ et $f\'\'$ : c\'est la confusion la plus fréquente du chapitre.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. L'ancienne était un vrai/faux sur la
             convexité de l'exponentielle, résolu par une dérivation de deux
             lignes — un calcul de plus.

             La nouvelle ne se calcule pas : on ne donne aucune expression.
             L'élève doit passer d'une propriété (convexe) à une autre (la
             position de la corde), sans produire le moindre nombre. C'est
             « raisonner ». */
          statement: 'Une fonction $f$ est convexe sur $[0\\,;\\,10]$, et l\'on sait que $f(2) = 5$ et $f(8) = 11$. Sans connaître l\'expression de $f$, que peut-on affirmer sur $f(5)$ ?',
          type: 'multiple-choice',
          options: [
            '$f(5) \\leq 8$, car la courbe d\'une fonction convexe passe <strong>sous</strong> la corde reliant ses points',
            '$f(5) = 8$, car $5$ est le milieu de $2$ et $8$',
            '$f(5) \\geq 8$, car la courbe d\'une fonction convexe passe au-dessus de la corde',
            'On ne peut rien affirmer sans connaître l\'expression de $f$'
          ],
          answer: 0,
          points: 2,
          correction: 'La convexité est exactement la propriété « la courbe est sous ses cordes ».<br/><br/>Ici la corde relie les points $(2\\,;\\,5)$ et $(8\\,;\\,11)$. Son point d\'abscisse $5$ — le milieu — a pour ordonnée $\\dfrac{5 + 11}{2} = 8$.<br/><br/>Comme $f$ est convexe, la courbe passe en dessous : $f(5) \\leq 8$.<br/><br/>C\'est l\'inégalité de convexité $f\\left(\\dfrac{a+b}{2}\\right) \\leq \\dfrac{f(a) + f(b)}{2}$, et elle se démontre sans jamais calculer $f$.<br/><br/>La proposition « on ne peut rien affirmer » est celle qui tente le plus : elle oublie que la convexité est une information, et une information forte.'
        },
        {
          statement: 'Soit $f(x) = x^4 - 6x^2$. Déterminer l\'abscisse du (des) point(s) d\'inflexion. Donner la plus petite valeur.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$.<br/><br/>$f\'\'(x) = 0 \\Leftrightarrow x = -1$ ou $x = 1$. $f\'\'$ change de signe en chacune de ces valeurs : ce sont deux <strong>points d\'inflexion</strong>.<br/><br/>La plus petite abscisse est $x = -1$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. L'ancienne posait la règle à l'envers
             (« si f'' ne change pas de signe, alors a est... ») : l'élève
             pouvait la cocher en reconnaissant la formulation du cours, sans
             rien avoir compris.

             La nouvelle place l'élève en position de CORRECTEUR : un
             camarade a fait un calcul juste et en a tiré une conclusion
             fausse, et il faut dire précisément où le raisonnement décroche.
             Aucun nombre à produire. C'est « communiquer ». */
          statement: 'Un camarade étudie $f(x) = x^4$. Il écrit : « $f\'\'(x) = 12x^2$, donc $f\'\'(0) = 0$, donc la courbe a un point d\'inflexion en $x = 0$. » Son calcul de $f\'\'$ est juste. Sa conclusion ne l\'est pas. Quelle phrase corrige son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Annuler $f\'\'$ ne suffit pas : il faut que $f\'\'$ <strong>change de signe</strong>. Or $12x^2 \\geq 0$ pour tout $x$, donc $f\'\'$ touche zéro sans jamais devenir négative — il n\'y a pas de point d\'inflexion',
            'Son calcul est faux : la dérivée seconde de $x^4$ est $4x^3$',
            'Il aurait dû vérifier que $f\'(0) = 0$ avant de conclure',
            'Il a raison sur le fond, mais il aurait dû préciser que le point est aussi un minimum'
          ],
          answer: 0,
          points: 2,
          correction: 'Son calcul est exact : $f\'(x) = 4x^3$, puis $f\'\'(x) = 12x^2$, et $f\'\'(0) = 0$.<br/><br/>Ce qui décroche, c\'est le <strong>« donc »</strong> final. La condition $f\'\'(a) = 0$ est <strong>nécessaire</strong> pour un point d\'inflexion, elle n\'est pas <strong>suffisante</strong>.<br/><br/>Ce qu\'il faut vérifier en plus, c\'est le <strong>changement de signe</strong>. Ici $12x^2$ est positif à gauche de $0$ et positif à droite : la dérivée seconde effleure l\'axe sans le traverser.<br/><br/>Il n\'y a donc aucun point d\'inflexion. La courbe de $x^4$ reste convexe des deux côtés, et $(0\\,;\\,0)$ est un minimum.<br/><br/>À retenir : une condition nécessaire dit ce qu\'il faut vérifier, jamais ce qui permet de conclure.'
        },
        {
          statement: 'Soit $g(x) = \\ln(x)$ pour $x > 0$. Calculer $g\'\'(1)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g\'(x) = \\dfrac{1}{x}$, puis $g\'\'(x) = -\\dfrac{1}{x^2}$.<br/><br/>$g\'\'(1) = -\\dfrac{1}{1} = -1$.<br/><br/>Comme $g\'\'(x) < 0$ pour tout $x > 0$, $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$.'
        }
      ]
    }
  });
