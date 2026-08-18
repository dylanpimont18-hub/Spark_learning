/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-ondes-signaux.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-ondes-signaux',
    level: 2, subject: 'physique',
    icon: '🌊',
    title: 'Ondes et signaux (interférences, diffraction)',
    subtitle: 'Diffraction de la lumière, interférences à deux ondes, interfrange',
    keywords: ['Diffraction', 'Interférences', 'Interfrange', 'Longueur d\'onde', 'Young'],
    physics: 'Les phénomènes d\'interférences et de diffraction sont exploités dans les capteurs optiques de précision, les hologrammes, les revêtements anti-reflets, les réseaux de diffraction des spectromètres, et permettent de mesurer très précisément des longueurs d\'onde ou de petites distances.',

    cours: {
      intro: 'Lorsqu\'une onde lumineuse rencontre une ouverture de très petite taille (fente, orifice), elle ne se propage plus en ligne droite : elle s\'étale de part et d\'autre de la direction initiale. Ce phénomène, appelé <strong>diffraction</strong>, est d\'autant plus marqué que la taille de l\'ouverture $a$ se rapproche de la longueur d\'onde $\\lambda$.<br/><br/>Quand une onde traverse <strong>deux</strong> fentes très rapprochées (expérience des fentes de Young), les deux ondes diffractées se superposent sur un écran : selon les points de l\'écran, elles s\'additionnent (frange <strong>brillante</strong>) ou s\'annulent (frange <strong>sombre</strong>). Ce phénomène est appelé <strong>interférences</strong>, et il ne peut se produire que si les deux ondes sont <strong>cohérentes</strong> (même fréquence, déphasage constant).<br/><br/>La distance qui sépare deux franges brillantes consécutives sur l\'écran, appelée <strong>interfrange</strong> $i$, se calcule directement à partir de la longueur d\'onde $\\lambda$, de la distance $a$ entre les fentes, et de la distance $D$ entre les fentes et l\'écran : $i = \\dfrac{\\lambda D}{a}$.',
      definitions: [
        { term: 'Diffraction', def: 'Étalement d\'une onde lorsqu\'elle traverse une ouverture ou contourne un obstacle de dimension $a$ comparable à sa longueur d\'onde $\\lambda$. L\'écart angulaire de diffraction vaut approximativement $\\theta \\approx \\dfrac{\\lambda}{a}$ (en radians).' },
        { term: 'Interférences', def: 'Superposition de deux ondes cohérentes (même fréquence, déphasage constant) qui produit une figure de franges alternativement brillantes et sombres, selon que les ondes arrivent en phase ou en opposition de phase.' },
        { term: 'Interfrange $i$', def: 'Distance séparant deux franges brillantes (ou deux franges sombres) consécutives sur l\'écran d\'observation : $i = \\dfrac{\\lambda D}{a}$, en mètres si $\\lambda$, $D$ et $a$ sont en mètres.' },
        { term: 'Sources cohérentes', def: 'Deux sources d\'ondes qui émettent avec un déphasage constant dans le temps. En optique, elles sont en général obtenues en divisant un même faisceau initial (comme aux fentes de Young), car deux sources indépendantes ne sont jamais rigoureusement cohérentes.' }
      ],
      method: {
        title: 'Calculer un interfrange en 3 étapes',
        steps: [
          '<strong>Identifier les trois grandeurs</strong> de l\'expérience : la longueur d\'onde $\\lambda$ de la lumière utilisée, la distance $a$ entre les deux fentes (ou sources), et la distance $D$ entre les fentes et l\'écran d\'observation.',
          '<strong>Convertir toutes les longueurs dans la même unité</strong> (le mètre est le plus sûr), car $\\lambda$ est souvent donnée en nanomètres alors que $a$ et $D$ sont en millimètres ou en mètres.',
          '<strong>Appliquer la formule</strong> $i = \\dfrac{\\lambda D}{a}$, puis convertir le résultat en une unité lisible (mm) si besoin, sachant que l\'interfrange est presque toujours une distance submillimétrique.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Figure d\'interférences (fentes de Young)',
        title: 'Intensité lumineuse sur l\'écran : franges brillantes et sombres',
        description: 'L\'intensité lumineuse observée sur l\'écran varie périodiquement avec la position $x$ : elle est maximale au niveau des franges brillantes, nulle au niveau des franges sombres. La distance entre deux franges brillantes consécutives est l\'interfrange $i$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="interf-title interf-desc">
            <title id="interf-title">Courbe d'intensite lumineuse en fonction de la position sur l'ecran</title>
            <desc id="interf-desc">Un graphique represente l'intensite lumineuse en ordonnee en fonction de la position sur l'ecran en abscisse. La courbe oscille de maniere periodique entre une valeur nulle et une valeur maximale, formant des bosses regulierement espacees. Trois sommets sont mis en evidence par des points, correspondant aux franges brillantes d'ordre moins un, zero et un. La distance horizontale entre le sommet central et le sommet suivant est notee i, l'interfrange.</desc>

            <defs>
              <marker id="arrow-tle-onde" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="40" y1="260" x2="520" y2="260" marker-end="url(#arrow-tle-onde)"></line>
            <line class="frame-line" x1="60" y1="270" x2="60" y2="50" marker-end="url(#arrow-tle-onde)"></line>
            <text class="tick-label" x="60" y="32" text-anchor="middle">I</text>
            <text class="tick-label" x="518" y="276" text-anchor="end">x (position sur l'écran)</text>

            <!-- courbe d'intensite (cos^2, calculee) -->
            <path class="curve-main" fill="none" d="M60.0,260.0 L67.3,255.4 L74.7,241.9 L82.0,220.8 L89.3,194.4 L96.7,165.0 L104.0,135.6 L111.3,109.2 L118.7,88.1 L126.0,74.6 L133.3,70.0 L140.7,74.6 L148.0,88.1 L155.3,109.2 L162.7,135.6 L170.0,165.0 L177.3,194.4 L184.7,220.8 L192.0,241.9 L199.3,255.4 L206.7,260.0 L214.0,255.4 L221.3,241.9 L228.7,220.8 L236.0,194.4 L243.3,165.0 L250.7,135.6 L258.0,109.2 L265.3,88.1 L272.7,74.6 L280.0,70.0 L287.3,74.6 L294.7,88.1 L302.0,109.2 L309.3,135.6 L316.7,165.0 L324.0,194.4 L331.3,220.8 L338.7,241.9 L346.0,255.4 L353.3,260.0 L360.7,255.4 L368.0,241.9 L375.3,220.8 L382.7,194.4 L390.0,165.0 L397.3,135.6 L404.7,109.2 L412.0,88.1 L419.3,74.6 L423.0,71.2 L426.7,70.0 L434.0,74.6 L441.3,88.1 L448.7,109.2 L456.0,135.6 L463.3,165.0 L470.7,194.4 L478.0,220.8 L485.3,241.9 L492.7,255.4 L500.0,260.0"></path>

            <!-- franges brillantes (maxima) -->
            <circle class="plot-point" cx="133.3" cy="70" r="4"></circle>
            <circle class="plot-point" cx="280.0" cy="70" r="4"></circle>
            <circle class="plot-point" cx="426.7" cy="70" r="4"></circle>
            <text class="tick-label" x="133.3" y="285" text-anchor="middle">k=-1</text>
            <text class="tick-label" x="280.0" y="285" text-anchor="middle">k=0</text>
            <text class="tick-label" x="426.7" y="285" text-anchor="middle">k=1</text>

            <!-- cotation interfrange entre k=0 et k=1 -->
            <line class="guide-line" x1="280.0" y1="46" x2="280.0" y2="60"></line>
            <line class="guide-line" x1="426.7" y1="46" x2="426.7" y2="60"></line>
            <line class="guide-line" x1="280.0" y1="52" x2="426.7" y2="52"></line>
            <text class="annotation-label" x="353.3" y="42" text-anchor="middle">i (interfrange)</text>
          </svg>
        `,
        notes: [
          'Les <strong>franges brillantes</strong> (maxima d\'intensité) correspondent aux points de l\'écran où les deux ondes arrivent <strong>en phase</strong> et s\'additionnent.',
          'Entre deux franges brillantes, l\'intensité s\'annule au niveau d\'une <strong>frange sombre</strong>, où les deux ondes arrivent en <strong>opposition de phase</strong> et s\'annulent.',
          'La distance entre deux franges brillantes consécutives, l\'<strong>interfrange</strong> $i$, est constante sur tout l\'écran et se calcule par $i = \\dfrac{\\lambda D}{a}$.'
        ],
        reading: 'Repère la frange centrale (k=0), puis la frange brillante suivante (k=1) : la distance horizontale qui les sépare est l\'interfrange $i$.',
        caption: 'Figure d\'interférences obtenue avec deux fentes de Young : l\'intensité lumineuse oscille périodiquement, avec un interfrange $i$ constant sur l\'écran.'
      },
      example: {
        statement: 'Dans une expérience de fentes de Young, on utilise un laser de longueur d\'onde $\\lambda = 632{,}8$ nm. Les deux fentes sont séparées de $a = 0{,}25$ mm et l\'écran est placé à $D = 2{,}0$ m des fentes.<br/><br/>Calculer l\'interfrange $i$ observé sur l\'écran, en millimètres.',
        steps: [
          'On convertit toutes les longueurs en mètres : $\\lambda = 632{,}8 \\times 10^{-9}$ m, $a = 0{,}25 \\times 10^{-3}$ m, $D = 2{,}0$ m.',
          'Formule de l\'interfrange : $i = \\dfrac{\\lambda D}{a}$.',
          'Application numérique : $i = \\dfrac{632{,}8\\times10^{-9} \\times 2{,}0}{0{,}25\\times10^{-3}} = \\dfrac{1{,}266\\times10^{-6}}{2{,}5\\times10^{-4}}$.',
          'Résultat : $i \\approx 5{,}06\\times10^{-3}$ m, soit $i \\approx 5{,}1$ mm.'
        ],
        answer: '$i \\approx 5{,}1$ mm. Cette valeur, largement supérieure au dixième de millimètre, explique pourquoi la figure d\'interférences est directement observable à l\'œil nu sur un écran placé à quelques mètres.'
      },
      formulas: [
        'Écart angulaire de diffraction : $\\theta \\approx \\dfrac{\\lambda}{a}$ (radians)',
        'Interfrange (fentes de Young) : $i = \\dfrac{\\lambda D}{a}$',
        'Relation fréquence/longueur d\'onde dans le vide : $\\lambda = \\dfrac{c}{\\nu}$, avec $c \\approx 3{,}00\\times10^8$ m/s',
        'Condition de frange brillante (interférence constructive) : différence de marche $\\delta = k\\lambda$, $k \\in \\mathbb{Z}$'
      ],
      recap: [
        'La <strong>diffraction</strong> s\'observe quand une onde traverse une ouverture de taille comparable à sa longueur d\'onde ; elle s\'étale d\'autant plus que l\'ouverture est petite.',
        'Les <strong>interférences</strong> exigent deux ondes <strong>cohérentes</strong> ; elles produisent une alternance de franges brillantes et sombres.',
        'L\'<strong>interfrange</strong> $i = \\dfrac{\\lambda D}{a}$ est <strong>constant</strong> sur tout l\'écran : c\'est la distance entre deux franges brillantes consécutives.',
        'Toutes les longueurs de la formule de l\'interfrange doivent être exprimées dans la <strong>même unité</strong> avant tout calcul.'
      ],
      piege: 'Une erreur très fréquente est d\'oublier de convertir $\\lambda$ (souvent donnée en nanomètres) dans la même unité que $a$ et $D$ avant d\'appliquer $i = \\dfrac{\\lambda D}{a}$ : mélanger nanomètres et mètres directement dans le calcul fausse le résultat d\'un facteur $10^9$. Attention aussi à ne pas confondre la <strong>diffraction</strong> (une seule ouverture, un seul faisceau qui s\'étale) avec les <strong>interférences</strong> (deux ondes qui se superposent) : ce sont deux phénomènes liés mais distincts.'
    },

    quiz: [
      {
        q: 'Dans une expérience de fentes de Young, $\\lambda = 500$ nm, $a = 0{,}20$ mm et $D = 1{,}5$ m. Quel est l\'interfrange $i$ ?',
        options: [
          '$i \\approx 3{,}75$ mm',
          '$i \\approx 0{,}375$ mm',
          '$i \\approx 37{,}5$ mm',
          '$i \\approx 0{,}0375$ mm'
        ],
        answer: 0,
        correction: 'En mètres : $\\lambda = 500\\times10^{-9}$ m, $a=0{,}20\\times10^{-3}$ m, $D=1{,}5$ m. $i = \\dfrac{\\lambda D}{a} = \\dfrac{500\\times10^{-9}\\times1{,}5}{0{,}20\\times10^{-3}} \\approx 3{,}75\\times10^{-3}$ m $= 3{,}75$ mm.'
      },
      {
        q: 'Que faut-il pour observer une figure d\'interférences stable entre deux ondes lumineuses ?',
        options: [
          'Que les deux ondes proviennent de sources totalement indépendantes',
          'Que les deux ondes soient cohérentes (même fréquence, déphasage constant)',
          'Que les deux ondes aient des fréquences différentes',
          'Que les deux ondes soient de couleurs différentes'
        ],
        answer: 1,
        correction: 'Seules deux ondes <strong>cohérentes</strong> (même fréquence et déphasage constant dans le temps) produisent une figure d\'interférences stable. Deux sources indépendantes ne sont, en pratique, jamais rigoureusement cohérentes.'
      },
      {
        q: 'Sur une figure d\'interférences, que représente l\'interfrange $i$ ?',
        options: [
          'La distance entre les deux fentes',
          'La distance entre les fentes et l\'écran',
          'La distance entre deux franges brillantes consécutives',
          'La longueur d\'onde de la lumière utilisée'
        ],
        answer: 2,
        correction: 'L\'interfrange $i$ est la distance, mesurée sur l\'écran, séparant deux franges brillantes (ou deux franges sombres) consécutives : $i = \\dfrac{\\lambda D}{a}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['interfrange', 'longueurOnde']);
        var lambdas = [450, 500, 532, 589, 633, 650, 700];

        if (typeExo === 'interfrange') {
          var lambdaNm = pick(lambdas);
          var aMm = randFloat(0.1, 0.5, 2);
          var Dm = randFloat(1, 3, 1);
          var lambdaM = lambdaNm * 1e-9;
          var aM = aMm * 1e-3;
          var iM = (lambdaM * Dm) / aM;
          var iMm = parseFloat((iM * 1000).toFixed(2));
          var contexte = pick([
            'un laser de TP dirigé vers deux fentes fines',
            'une expérience de fentes de Young en salle de physique',
            'un dispositif de diffraction éclairé par une source monochromatique',
            'un banc optique utilisé pour mesurer une longueur d\'onde'
          ]);
          return {
            statement: 'Dans ' + contexte + ', on utilise une source monochromatique de longueur d\'onde $\\lambda = ' + lambdaNm + '$ nm. La distance entre les deux fentes est $a = ' + fr(aMm, 2) + '$ mm, et l\'écran est placé à $D = ' + fr(Dm, 1) + '$ m des fentes.<br/><br/>Calcule l\'interfrange $i$ observé sur l\'écran (en mm, arrondi au centième).',
            answer: iMm,
            tolerance: Math.max(0.02, parseFloat((iMm * 0.03).toFixed(2))),
            unit: 'mm',
            hint: 'Convertis toutes les longueurs en mètres, puis utilise $i = \\dfrac{\\lambda D}{a}$. N\'oublie pas de reconvertir le résultat en mm.',
            solution: [
              'Conversion en mètres : $\\lambda = ' + lambdaNm + '\\times10^{-9}$ m, $a = ' + fr(aMm, 2) + '\\times10^{-3}$ m, $D = ' + fr(Dm, 1) + '$ m.',
              'Formule : $i = \\dfrac{\\lambda D}{a}$.',
              'Résultat en mètres, converti en millimètres : $i \\approx ' + fr(iMm, 2) + '$ mm.'
            ]
          };
        } else {
          var aMm2 = randFloat(0.1, 0.5, 2);
          var Dm2 = randFloat(1, 3, 1);
          var iMm2 = randFloat(1, 8, 2);
          var iM2 = iMm2 / 1000;
          var aM2 = aMm2 / 1000;
          var lambdaM2 = (iM2 * aM2) / Dm2;
          var lambdaNm2 = parseFloat((lambdaM2 * 1e9).toFixed(1));
          var contexte2 = pick([
            'un TP de détermination de longueur d\'onde',
            'un contrôle qualité d\'une source lumineuse',
            'une expérience de spectroscopie simplifiée',
            'un dispositif d\'étalonnage optique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', une figure d\'interférences est obtenue avec deux fentes séparées de $a = ' + fr(aMm2, 2) + '$ mm, un écran situé à $D = ' + fr(Dm2, 1) + '$ m, et un interfrange mesuré $i = ' + fr(iMm2, 2) + '$ mm.<br/><br/>Calcule la longueur d\'onde $\\lambda$ de la source utilisée (en nm, arrondie au dixième).',
            answer: lambdaNm2,
            tolerance: Math.max(2, parseFloat((lambdaNm2 * 0.03).toFixed(1))),
            unit: 'nm',
            hint: 'Isole $\\lambda$ dans $i = \\dfrac{\\lambda D}{a}$, soit $\\lambda = \\dfrac{i \\times a}{D}$, en travaillant en mètres.',
            solution: [
              'On isole $\\lambda$ dans la formule de l\'interfrange : $\\lambda = \\dfrac{i \\times a}{D}$.',
              'Conversion en mètres : $i = ' + fr(iMm2, 2) + '\\times10^{-3}$ m, $a = ' + fr(aMm2, 2) + '\\times10^{-3}$ m.',
              'Résultat, reconverti en nanomètres : $\\lambda \\approx ' + fr(lambdaNm2, 1) + '$ nm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On réalise l\'expérience des fentes de Young avec un laser rouge de longueur d\'onde $\\lambda = 650$ nm. Les fentes sont séparées de $a = 0{,}30$ mm. On observe sur un écran, placé à $D = 2{,}5$ m des fentes, des franges dont l\'interfrange mesuré est comparé à une valeur théorique attendue.',
      tasks: [
        'Calculer la valeur théorique de l\'interfrange $i$ attendue, en millimètres.',
        'On rapproche l\'écran des fentes, à $D\' = 1{,}0$ m. Calculer le nouvel interfrange $i\'$, et comparer à $i$.',
        'Expliquer qualitativement ce qui se passerait sur la figure d\'interférences si l\'on remplaçait le laser rouge par un laser vert ($\\lambda\' < \\lambda$), sans changer $a$ ni $D$.'
      ],
      solutions: [
        'En mètres : $\\lambda = 650\\times10^{-9}$ m, $a = 0{,}30\\times10^{-3}$ m, $D = 2{,}5$ m. $i = \\dfrac{\\lambda D}{a} = \\dfrac{650\\times10^{-9}\\times2{,}5}{0{,}30\\times10^{-3}} \\approx 5{,}42\\times10^{-3}$ m, soit $i \\approx 5{,}42$ mm.',
        'Avec $D\' = 1{,}0$ m : $i\' = \\dfrac{650\\times10^{-9}\\times1{,}0}{0{,}30\\times10^{-3}} \\approx 2{,}17\\times10^{-3}$ m, soit $i\' \\approx 2{,}17$ mm. L\'interfrange a <strong>diminué</strong> : rapprocher l\'écran resserre les franges, ce qui est cohérent avec la proportionnalité $i \\propto D$.',
        'Comme $i = \\dfrac{\\lambda D}{a}$ est <strong>proportionnel</strong> à $\\lambda$, utiliser un laser vert (longueur d\'onde plus courte que le rouge) donnerait un interfrange <strong>plus petit</strong> : les franges seraient plus resserrées sur l\'écran, sans changer ni leur nombre visible ni la géométrie du montage.'
      ],
      finalAnswer: '$i \\approx 5{,}42$ mm à $D = 2{,}5$ m, contre $i\' \\approx 2{,}17$ mm à $D\' = 1{,}0$ m : l\'interfrange est directement proportionnel à la distance écran-fentes $D$, et à la longueur d\'onde $\\lambda$ utilisée. C\'est cette proportionnalité qui permet, en pratique, de déterminer $\\lambda$ à partir d\'une mesure d\'interfrange.'
    },

    evaluation: {
      title: 'Évaluation — Ondes et signaux (interférences, diffraction)',
      duration: '30 min',
      questions: [
        {
          statement: 'La diffraction d\'une onde est d\'autant plus marquée que :',
          type: 'multiple-choice',
          options: [
            'La taille de l\'ouverture est grande devant la longueur d\'onde',
            'La taille de l\'ouverture est comparable ou petite devant la longueur d\'onde',
            'La fréquence de l\'onde est très élevée',
            'L\'onde ne rencontre aucun obstacle'
          ],
          answer: 1,
          points: 2,
          correction: 'La diffraction est d\'autant plus marquée que la taille de l\'ouverture $a$ se rapproche de la longueur d\'onde $\\lambda$, voire devient plus petite qu\'elle.'
        },
        {
          statement: 'Avec $\\lambda = 550$ nm, $a = 0{,}25$ mm et $D = 2{,}0$ m, calculer l\'interfrange $i$ (en mm, arrondi au centième).',
          type: 'numeric',
          answer: 4.4,
          tolerance: 0.15,
          unit: 'mm',
          points: 3,
          correction: '$i = \\dfrac{\\lambda D}{a} = \\dfrac{550\\times10^{-9}\\times2{,}0}{0{,}25\\times10^{-3}} \\approx 4{,}4\\times10^{-3}$ m $= 4{,}4$ mm.'
        },
        {
          statement: 'Deux ondes lumineuses interfèrent de façon constructive (frange brillante) lorsque leur différence de marche $\\delta$ vaut :',
          type: 'multiple-choice',
          options: [
            'Un multiple entier de la longueur d\'onde, $\\delta = k\\lambda$',
            'Un multiple demi-entier de la longueur d\'onde uniquement',
            'Zéro dans tous les cas',
            'Une valeur aléatoire, cela ne dépend pas de $\\delta$'
          ],
          answer: 0,
          points: 2,
          correction: 'Une frange brillante (interférence constructive) apparaît lorsque la différence de marche est un multiple entier de $\\lambda$ : $\\delta = k\\lambda$, $k \\in \\mathbb{Z}$.'
        },
        {
          statement: 'Si l\'on double la distance $D$ entre les fentes et l\'écran (sans changer $\\lambda$ ni $a$), l\'interfrange $i$ :',
          type: 'multiple-choice',
          options: [
            'Est divisé par deux',
            'Reste inchangé',
            'Est doublé',
            'Est multiplié par quatre'
          ],
          answer: 2,
          points: 2,
          correction: 'Comme $i = \\dfrac{\\lambda D}{a}$ est proportionnel à $D$, doubler $D$ double l\'interfrange $i$.'
        },
        {
          statement: 'Un interfrange $i = 3{,}0$ mm est mesuré avec $a = 0{,}20$ mm et $D = 1{,}5$ m. Calculer la longueur d\'onde $\\lambda$ utilisée (en nm, arrondie à l\'unité).',
          type: 'numeric',
          answer: 400,
          tolerance: 15,
          unit: 'nm',
          points: 3,
          correction: '$\\lambda = \\dfrac{i \\times a}{D} = \\dfrac{3{,}0\\times10^{-3}\\times0{,}20\\times10^{-3}}{1{,}5} = 4{,}0\\times10^{-7}$ m $= 400$ nm.'
        }
      ]
    }
  });
