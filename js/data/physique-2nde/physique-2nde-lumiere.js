/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-lumiere.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-lumiere',
    level: 2, subject: 'physique',
    icon: '🌈',
    title: 'La lumière (réfraction, spectre)',
    subtitle: 'Propagation de la lumière, indice de réfraction, lois de Snell-Descartes, dispersion',
    keywords: ['Réfraction', 'Indice de réfraction', 'Snell-Descartes', 'Dispersion', 'Lumière'],
    physics: 'La réfraction de la lumière permet de comprendre la formation d\'un arc-en-ciel, de concevoir les lentilles de lunettes ou d\'appareil photo, et explique le principe de transmission de données par fibre optique grâce à la réflexion totale.',

    cours: {
      intro: 'Un bâton à moitié plongé dans l\'eau semble « brisé » à l\'interface : c\'est l\'une des manifestations les plus visibles de la <strong>réfraction</strong>, le changement de direction d\'un rayon lumineux lorsqu\'il change de milieu de propagation.<br/><br/>Ce phénomène n\'a rien d\'un caprice de la lumière : il obéit à une loi précise, énoncée au XVIIe siècle par Snell et Descartes, qui relie les angles observés aux <strong>indices de réfraction</strong> des deux milieux traversés. C\'est cette même loi, appliquée à un prisme, qui explique pourquoi la lumière blanche se décompose en un spectre de couleurs.',
      definitions: [
        { term: 'Réfraction', def: 'Changement de direction d\'un rayon lumineux lors de la traversée de la surface séparant deux milieux transparents différents, dû au changement de vitesse de propagation de la lumière.' },
        { term: 'Indice de réfraction $n$', def: 'Grandeur sans unité caractérisant un milieu transparent : $n = \\dfrac{c}{v}$, où $c \\approx 3{,}00 \\times 10^8$ m/s est la vitesse de la lumière dans le vide et $v$ sa vitesse dans le milieu. Toujours $n \\geqslant 1$.' },
        { term: 'Lois de Snell-Descartes (réfraction)', def: '$n_1 \\sin(i_1) = n_2 \\sin(i_2)$, où $i_1$ et $i_2$ sont les angles d\'incidence et de réfraction, mesurés par rapport à la <strong>normale</strong> à la surface au point d\'incidence.' },
        { term: 'Dispersion de la lumière', def: 'Décomposition de la lumière blanche en un spectre de couleurs (par un prisme, par exemple), due à la légère variation de l\'indice $n$ d\'un milieu selon la couleur de la lumière.' }
      ],
      method: {
        title: 'Appliquer les lois de Snell-Descartes en 3 étapes',
        steps: [
          '<strong>Identifier</strong> les deux milieux traversés et leurs indices de réfraction $n_1$ (milieu incident) et $n_2$ (milieu de réfraction), ainsi que l\'angle d\'incidence $i_1$ (mesuré par rapport à la normale).',
          '<strong>Écrire la loi de Snell-Descartes</strong> : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$, puis isoler $\\sin(i_2) = \\dfrac{n_1 \\sin(i_1)}{n_2}$.',
          '<strong>Calculer</strong> $i_2 = \\arcsin\\left(\\dfrac{n_1 \\sin(i_1)}{n_2}\\right)$ à la calculatrice (fonction $\\sin^{-1}$ ou $\\arcsin$).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Réfraction de la lumière (optique géométrique)',
        title: 'Passage air → eau : rayon incident et rayon réfracté',
        description: 'Un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers l\'eau ($n_2 = 1{,}33$) avec un angle d\'incidence $i_1 = 40°$. En entrant dans un milieu plus réfringent, le rayon se rapproche de la normale : $i_2 \\approx 28{,}9° < i_1$.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="lumiere2nde-title lumiere2nde-desc">
            <title id="lumiere2nde-title">Refraction d'un rayon lumineux passant de l'air vers l'eau</title>
            <desc id="lumiere2nde-desc">Une ligne horizontale separe deux milieux, l'air au-dessus et l'eau en dessous. Une normale en pointilles est tracee verticalement au point d'incidence. Un rayon incident arrive de la partie superieure gauche et frappe ce point avec un angle de quarante degres par rapport a la normale. Un rayon refracte repart vers la partie inferieure droite, dans l'eau, avec un angle plus petit, environ vingt-neuf degres par rapport a la meme normale : il s'est rapproche de la normale en changeant de milieu.</desc>

            <defs>
              <marker id="arrow-phys2-lumiere" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- interface air / eau -->
            <line class="frame-line" x1="80" y1="150" x2="480" y2="150"></line>
            <text class="label-soft" x="100" y="130" text-anchor="start">Air (n₁ = 1,00)</text>
            <text class="label-soft" x="100" y="175" text-anchor="start">Eau (n₂ = 1,33)</text>

            <!-- normale -->
            <line class="guide-line" x1="280" y1="35" x2="280" y2="285"></line>
            <text class="tick-label" x="280" y="26" text-anchor="middle">normale</text>

            <!-- rayon incident et rayon refracte -->
            <line class="curve-main" x1="190" y1="43" x2="280" y2="150" marker-end="url(#arrow-phys2-lumiere)"></line>
            <line class="curve-main" x1="280" y1="150" x2="348" y2="273" marker-end="url(#arrow-phys2-lumiere)"></line>
            <circle class="plot-point" cx="280" cy="150" r="4"></circle>

            <text class="label-soft" x="168" y="55" text-anchor="end">rayon incident</text>
            <text class="label-soft" x="358" y="252" text-anchor="start">rayon réfracté</text>

            <!-- arcs des angles -->
            <path class="guide-line" fill="none" d="M280,115 A35,35 0 0,0 257.5,123.2"></path>
            <path class="guide-line" fill="none" d="M280,185 A35,35 0 0,1 296.9,180.6"></path>
            <text class="annotation-label" x="252" y="103" text-anchor="middle">i₁ = 40°</text>
            <text class="annotation-label" x="304" y="200" text-anchor="middle">i₂ ≈ 28,9°</text>
          </svg>
        `,
        notes: [
          'Les angles $i_1$ et $i_2$ sont <strong>toujours</strong> mesurés par rapport à la normale (perpendiculaire à la surface), jamais par rapport à la surface elle-même.',
          'Loi de Snell-Descartes : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$, soit $1{,}00 \\times \\sin(40°) = 1{,}33 \\times \\sin(i_2)$, d\'où $\\sin(i_2) = \\dfrac{\\sin(40°)}{1{,}33} \\approx 0{,}483$, et $i_2 \\approx 28{,}9°$.',
          'L\'eau étant <strong>plus réfringente</strong> que l\'air ($n_2 > n_1$), le rayon réfracté se rapproche de la normale ($i_2 < i_1$) : c\'est toujours le cas lorsqu\'on entre dans un milieu d\'indice plus élevé.'
        ],
        reading: 'Repère d\'abord le point d\'incidence sur la surface, puis la normale en pointillés ; compare ensuite l\'angle $i_1$ (rayon incident, dans l\'air) à l\'angle $i_2$ (rayon réfracté, dans l\'eau, plus petit).',
        caption: 'Réfraction d\'un rayon lumineux passant de l\'air vers l\'eau : $i_1 = 40°$ devient $i_2 \\approx 28{,}9°$, le rayon se rapprochant de la normale en entrant dans le milieu le plus réfringent.'
      },
      example: {
        statement: 'Un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers un verre d\'indice $n_2 = 1{,}50$, avec un angle d\'incidence $i_1 = 35°$.<br/><br/>Calcule l\'angle de réfraction $i_2$.',
        steps: [
          'Loi de Snell-Descartes : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$.',
          'On isole $\\sin(i_2)$ : $\\sin(i_2) = \\dfrac{n_1 \\sin(i_1)}{n_2} = \\dfrac{1{,}00 \\times \\sin(35°)}{1{,}50} = \\dfrac{0{,}574}{1{,}50} \\approx 0{,}383$.',
          'On calcule $i_2$ avec la fonction $\\arcsin$ (ou $\\sin^{-1}$) de la calculatrice : $i_2 = \\arcsin(0{,}383) \\approx 22{,}5°$.'
        ],
        answer: '$i_2 \\approx 22{,}5°$. Comme attendu, le rayon se rapproche fortement de la normale : le verre ($n_2 = 1{,}50$) est nettement plus réfringent que l\'air.'
      },
      formulas: [
        '$n = \\dfrac{c}{v}$ (indice de réfraction, avec $c \\approx 3{,}00 \\times 10^8$ m/s)',
        'Snell-Descartes (réfraction) : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$',
        '$n \\geqslant 1$ toujours ; plus $n$ est grand, plus le milieu est réfringent (il ralentit fortement la lumière)',
        'Les angles $i_1$, $i_2$ sont toujours mesurés par rapport à la <strong>normale</strong>, jamais par rapport à la surface'
      ],
      recap: [
        'La <strong>réfraction</strong> est le changement de direction d\'un rayon lumineux passant d\'un milieu transparent à un autre.',
        'L\'<strong>indice de réfraction</strong> $n = \\dfrac{c}{v} \\geqslant 1$ caractérise chaque milieu transparent.',
        'La loi de <strong>Snell-Descartes</strong> $n_1 \\sin(i_1) = n_2 \\sin(i_2)$ relie les angles d\'incidence et de réfraction aux indices des deux milieux.',
        'La <strong>dispersion</strong> de la lumière blanche par un prisme (spectre de couleurs) vient de la légère dépendance de $n$ à la couleur de la lumière.'
      ],
      piege: 'Une erreur très fréquente est de mesurer les angles d\'incidence et de réfraction par rapport à la <strong>surface</strong> de séparation des milieux, au lieu de les mesurer par rapport à la <strong>normale</strong> (la droite perpendiculaire à la surface au point d\'incidence). Attention : dans la loi de Snell-Descartes $n_1 \\sin(i_1) = n_2 \\sin(i_2)$, $i_1$ et $i_2$ sont <strong>toujours</strong> définis par rapport à cette normale, jamais par rapport à la surface elle-même.'
    },

    quiz: [
      {
        q: 'Dans la loi de Snell-Descartes, les angles d\'incidence et de réfraction sont mesurés par rapport à :',
        options: [
          'La surface de séparation des deux milieux',
          'La normale à la surface, au point d\'incidence',
          'L\'horizontale, quel que soit le dispositif',
          'Le rayon incident lui-même'
        ],
        answer: 1,
        correction: 'Les angles $i_1$ et $i_2$ se mesurent toujours par rapport à la <strong>normale</strong> (perpendiculaire à la surface au point d\'incidence), jamais par rapport à la surface elle-même.'
      },
      {
        q: 'Un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers du verre ($n_2 = 1{,}50$) avec un angle d\'incidence $i_1 = 30°$. L\'angle de réfraction $i_2$ est-il plus grand ou plus petit que $i_1$ ?',
        options: [
          'Plus grand, car le verre est plus réfringent',
          'Plus petit, car le verre est plus réfringent',
          'Exactement égal à $i_1$',
          'Impossible à savoir sans calculatrice'
        ],
        answer: 1,
        correction: 'Comme $n_2 > n_1$, la loi $n_1 \\sin(i_1) = n_2 \\sin(i_2)$ impose $\\sin(i_2) < \\sin(i_1)$, donc $i_2 < i_1$ : le rayon se <strong>rapproche</strong> de la normale en entrant dans un milieu plus réfringent, sans même avoir besoin de calculer la valeur exacte.'
      },
      {
        q: 'Quel phénomène explique la décomposition de la lumière blanche en couleurs par un prisme ?',
        options: [
          'La réflexion totale',
          'La dispersion : l\'indice de réfraction dépend légèrement de la couleur',
          'L\'absorption sélective du verre',
          'La diffraction du prisme uniquement'
        ],
        answer: 1,
        correction: 'C\'est la <strong>dispersion</strong> : l\'indice de réfraction $n$ du prisme varie légèrement selon la couleur (longueur d\'onde) de la lumière, donc chaque couleur est déviée différemment.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['angle_refraction', 'indice']);

        if (typeExo === 'angle_refraction') {
          var n1 = 1.00;
          var n2 = pick([1.33, 1.36, 1.50, 1.52, 1.63]);
          var i1 = rand(10, 70);
          var i1Rad = i1 * Math.PI / 180;
          var sinI2 = (n1 * Math.sin(i1Rad)) / n2;
          var i2 = parseFloat((Math.asin(sinI2) * 180 / Math.PI).toFixed(1));
          var contexte = pick([
            'un aquarium de laboratoire',
            'une vitre d\'observation scientifique',
            'un prisme d\'optique en salle de travaux pratiques',
            'une lentille en cours de fabrication',
            'un bassin d\'expérimentation optique'
          ]);
          return {
            statement: 'Pour ' + contexte + ', un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers un milieu transparent d\'indice $n_2 = ' + fr(n2, 2) + '$, avec un angle d\'incidence $i_1 = ' + i1 + '°$.<br/><br/>Calcule l\'angle de réfraction $i_2$ (en degrés, arrondi au dixième).',
            answer: i2,
            tolerance: 0.5,
            unit: '°',
            hint: 'Utilise $\\sin(i_2) = \\dfrac{n_1 \\sin(i_1)}{n_2}$, puis la fonction $\\arcsin$ de la calculatrice.',
            solution: [
              'Loi de Snell-Descartes : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$, donc $\\sin(i_2) = \\dfrac{n_1 \\sin(i_1)}{n_2} = \\dfrac{\\sin(' + i1 + '°)}{' + fr(n2, 2) + '}$.',
              'Valeur de $\\sin(i_2)$ : $\\approx ' + fr(parseFloat(sinI2.toFixed(3)), 3) + '$.',
              'Résultat : $i_2 = \\arcsin(' + fr(parseFloat(sinI2.toFixed(3)), 3) + ') \\approx ' + fr(i2, 1) + '°$.'
            ]
          };
        } else {
          var v = randFloat(1.7, 2.3, 2);
          var n = parseFloat((3.00 / v).toFixed(2));
          var contexte2 = pick([
            'un matériau transparent inconnu analysé en laboratoire',
            'un nouveau verre optique testé en contrôle qualité',
            'un plastique transparent utilisé en optique',
            'un échantillon de minéral transparent'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on mesure que la lumière s\'y propage à la vitesse $v = ' + fr(v, 2) + ' \\times 10^8$ m/s. On donne $c \\approx 3{,}00 \\times 10^8$ m/s.<br/><br/>Calcule l\'indice de réfraction $n$ de ce milieu (arrondi au centième).',
            answer: n,
            tolerance: 0.02,
            unit: '',
            hint: 'Utilise $n = \\dfrac{c}{v}$ (avec $c$ et $v$ exprimées dans la même unité).',
            solution: [
              'Formule de l\'indice de réfraction : $n = \\dfrac{c}{v}$.',
              'Application numérique : $n = \\dfrac{3{,}00}{' + fr(v, 2) + '}$ (les deux vitesses étant en $10^8$ m/s, le facteur se simplifie).',
              'Résultat : $n \\approx ' + fr(n, 2) + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une fibre optique est constituée d\'un cœur en verre d\'indice $n_1 = 1{,}50$, entouré d\'air ($n_2 = 1{,}00$). Un rayon lumineux se propage à l\'intérieur du cœur et atteint la paroi avec un angle d\'incidence $i_1$ (mesuré par rapport à la normale à la paroi).',
      tasks: [
        'Écrire la loi de Snell-Descartes pour ce passage verre → air, et exprimer $\\sin(i_2)$ en fonction de $i_1$.',
        'Calculer l\'angle limite $i_{lim}$ au-delà duquel il n\'y a plus de rayon réfracté (cas où $i_2 = 90°$).',
        'Expliquer pourquoi, pour un angle d\'incidence $i_1 > i_{lim}$, toute la lumière reste confinée dans le cœur de la fibre.'
      ],
      solutions: [
        '$n_1 \\sin(i_1) = n_2 \\sin(i_2)$, donc $\\sin(i_2) = \\dfrac{n_1}{n_2}\\sin(i_1) = 1{,}50 \\times \\sin(i_1)$.',
        'Angle limite : pour $i_2 = 90°$, $\\sin(90°) = 1$, donc $\\sin(i_{lim}) = \\dfrac{n_2}{n_1} = \\dfrac{1{,}00}{1{,}50} \\approx 0{,}667$, soit $i_{lim} = \\arcsin(0{,}667) \\approx 41{,}8°$.',
        'Au-delà de $i_{lim}$, l\'équation de Snell-Descartes n\'a plus de solution réelle pour $i_2$ (car $\\sin(i_2)$ dépasserait $1$, ce qui est impossible) : il n\'existe alors plus de rayon réfracté, toute la lumière est réfléchie à l\'intérieur du cœur. C\'est ce phénomène, la <strong>réflexion totale</strong>, qui confine la lumière dans la fibre.'
      ],
      finalAnswer: '$i_{lim} \\approx 41{,}8°$. Au-delà de cet angle, la réflexion totale confine la lumière dans le cœur de la fibre : c\'est le principe physique qui rend possibles les télécommunications par fibre optique sur de très longues distances, sans perte de signal par fuite de lumière.'
    },

    evaluation: {
      title: 'Évaluation — La lumière (réfraction, spectre)',
      duration: '30 min',
      questions: [
        {
          statement: 'Les angles d\'incidence et de réfraction d\'un rayon lumineux se mesurent par rapport à :',
          type: 'multiple-choice',
          options: [
            'La surface de séparation des milieux',
            'La normale à la surface',
            'Le rayon réfléchi',
            'L\'axe optique de l\'instrument'
          ],
          answer: 1,
          points: 2,
          correction: 'Les angles se mesurent toujours par rapport à la <strong>normale</strong>, la droite perpendiculaire à la surface au point d\'incidence.'
        },
        {
          statement: 'Un rayon passe de l\'air ($n_1 = 1{,}00$) vers l\'eau ($n_2 = 1{,}33$) avec un angle d\'incidence $i_1 = 50°$. Calculer l\'angle de réfraction $i_2$ (en degrés).',
          type: 'numeric',
          answer: 35.2,
          tolerance: 1,
          unit: '°',
          points: 3,
          correction: '$\\sin(i_2) = \\dfrac{\\sin(50°)}{1{,}33} \\approx \\dfrac{0{,}766}{1{,}33} \\approx 0{,}576$, donc $i_2 = \\arcsin(0{,}576) \\approx 35{,}2°$.'
        },
        {
          statement: 'L\'indice de réfraction $n$ d\'un milieu transparent vérifie toujours :',
          type: 'multiple-choice',
          options: [
            '$n \\leqslant 1$',
            '$n \\geqslant 1$',
            '$n = 1$ dans tous les milieux',
            '$n$ peut être négatif'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'indice de réfraction vérifie toujours $n \\geqslant 1$, car la vitesse de la lumière dans un milieu matériel ($v$) est toujours inférieure ou égale à sa vitesse dans le vide ($c$), et $n = \\dfrac{c}{v}$.'
        },
        {
          statement: 'La lumière se propage à la vitesse $v = 2{,}00 \\times 10^8$ m/s dans un milieu transparent. Calculer son indice de réfraction $n$ (on donne $c \\approx 3{,}00 \\times 10^8$ m/s).',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$n = \\dfrac{c}{v} = \\dfrac{3{,}00}{2{,}00} = 1{,}50$.'
        },
        {
          statement: 'La décomposition de la lumière blanche par un prisme s\'explique par :',
          type: 'multiple-choice',
          options: [
            'La réflexion totale à l\'intérieur du prisme',
            'La dispersion : l\'indice de réfraction dépend de la couleur',
            'L\'absorption du prisme',
            'La diffraction du prisme uniquement'
          ],
          answer: 1,
          points: 1,
          correction: 'C\'est la <strong>dispersion</strong> : l\'indice de réfraction du verre du prisme varie légèrement selon la couleur de la lumière, chaque couleur étant donc déviée différemment.'
        }
      ]
    }
  });

