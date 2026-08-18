/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-lumiere.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-lumiere',
    level: 2, subject: 'physique',
    icon: '🌈',
    title: 'La lumière',
    subtitle: 'Propagation rectiligne, réfraction (loi de Snell-Descartes), indice de réfraction, décomposition de la lumière blanche, spectres',
    keywords: ['Lumière', 'Réfraction', 'Indice de réfraction', 'Spectre', 'Snell-Descartes', 'Dispersion'],
    physics: 'La réfraction de la lumière explique la correction de la vue par des lunettes ou des lentilles de contact, le guidage de la lumière dans les fibres optiques, la formation de l\'arc-en-ciel, et permet aux astrophysiciens d\'identifier la composition chimique d\'une étoile grâce à l\'analyse de son spectre lumineux.',

    cours: {
      intro: 'Dans un milieu <strong>homogène et transparent</strong> (air, verre, eau…), la lumière se propage en <strong>ligne droite</strong> : c\'est le principe de propagation rectiligne. Sa vitesse est très grande mais reste <strong>finie</strong> : $c \\approx 3\\times10^8$ m/s dans le vide, une valeur légèrement supérieure à sa vitesse dans tout autre milieu matériel.<br/><br/>Chaque milieu transparent est caractérisé par son <strong>indice de réfraction</strong> $n = \\dfrac{c}{v}$, un nombre sans unité toujours supérieur ou égal à $1$ (puisque $v \\leq c$). Plus un milieu est <strong>réfringent</strong> (indice $n$ élevé), plus la lumière y ralentit.<br/><br/>Lorsqu\'un rayon lumineux traverse la frontière entre deux milieux d\'indices différents (un <strong>dioptre</strong>), sa direction change : c\'est la <strong>réfraction</strong>, décrite par la loi de <strong>Snell-Descartes</strong> : $n_1 \\sin i_1 = n_2 \\sin i_2$, les angles étant toujours mesurés par rapport à la <strong>normale</strong> au dioptre (la perpendiculaire à la surface), jamais par rapport à la surface elle-même.',
      definitions: [
        { term: 'Indice de réfraction ($n$)', def: 'Grandeur sans unité caractérisant un milieu transparent : $n = \\dfrac{c}{v}$, où $v$ est la vitesse de la lumière dans ce milieu et $c \\approx 3\\times10^8$ m/s sa vitesse dans le vide. Toujours $n \\geq 1$.' },
        { term: 'Réfraction', def: 'Changement de direction d\'un rayon lumineux lorsqu\'il traverse la frontière (dioptre) entre deux milieux transparents d\'indices différents.' },
        { term: 'Loi de Snell-Descartes (réfraction)', def: '$n_1 \\sin i_1 = n_2 \\sin i_2$, où $i_1$ est l\'angle d\'incidence et $i_2$ l\'angle de réfraction, tous deux mesurés par rapport à la <strong>normale</strong> au dioptre.' },
        { term: 'Spectre de la lumière blanche', def: 'La lumière blanche (celle du Soleil, par exemple) est en réalité un <strong>mélange de toutes les couleurs</strong> visibles. Un prisme (ou des gouttelettes d\'eau) peut la décomposer en un spectre continu, car l\'indice de réfraction d\'un milieu dépend très légèrement de la couleur : c\'est le phénomène de <strong>dispersion</strong>.' }
      ],
      method: {
        title: 'Étudier la réfraction d\'un rayon lumineux en 3 étapes',
        steps: [
          '<strong>Identifier les deux milieux</strong> traversés et leurs indices de réfraction $n_1$ (milieu d\'incidence) et $n_2$ (milieu de réfraction).',
          '<strong>Repérer l\'angle d\'incidence</strong> $i_1$, toujours mesuré par rapport à la <strong>normale</strong> au dioptre (jamais par rapport à la surface), puis appliquer la loi de Snell-Descartes $n_1 \\sin i_1 = n_2 \\sin i_2$ pour isoler et calculer $i_2$.',
          '<strong>Comparer $i_1$ et $i_2$</strong> pour vérifier la cohérence : si $n_2 > n_1$ (le rayon entre dans un milieu plus réfringent), le rayon se rapproche de la normale ($i_2 < i_1$) ; si $n_2 < n_1$, il s\'en écarte ($i_2 > i_1$).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Réfraction de la lumière (loi de Snell-Descartes)',
        title: 'Réfraction d\'un rayon lumineux à la surface air-eau',
        description: 'Un rayon lumineux passant de l\'air ($n_1=1$) vers l\'eau ($n_2=1{,}33$) avec un angle d\'incidence $i_1 = 50°$ est réfracté avec un angle $i_2 \\approx 35{,}2°$ : il se rapproche de la normale, car il pénètre dans un milieu plus réfringent.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="refraction-title refraction-desc">
            <title id="refraction-title">Refraction d'un rayon lumineux a la surface air-eau</title>
            <desc id="refraction-desc">Un schema represente une surface horizontale separant deux milieux, l'air au-dessus et l'eau en dessous. Une ligne pointillee verticale, la normale, traverse le point d'incidence. Un rayon incident arrive du coin superieur gauche et forme un angle i1 de cinquante degres avec la normale, du cote de l'air. Apres avoir traverse la surface, le rayon se poursuit dans l'eau sous la forme d'un rayon refracte, plus proche de la normale, formant un angle i2 d'environ trente-cinq degres, illustrant que le rayon se rapproche de la normale en penetrant dans le milieu le plus refringent.</desc>

            <defs>
              <marker id="arrow-phys2nde-refraction" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- dioptre (surface air-eau) -->
            <line class="frame-line" x1="60" y1="150" x2="500" y2="150"></line>
            <text class="label-soft" x="80" y="80" text-anchor="middle">Air (n₁ = 1)</text>
            <text class="label-soft" x="80" y="225" text-anchor="middle">Eau (n₂ = 1,33)</text>

            <!-- normale (pointilles verticaux) -->
            <line class="guide-line" x1="280" y1="60" x2="280" y2="240"></line>
            <text class="tick-label" x="286" y="66" text-anchor="start">normale</text>

            <!-- rayon incident -->
            <line class="curve-main" x1="188.1" y1="72.9" x2="280" y2="150" marker-end="url(#arrow-phys2nde-refraction)"></line>
            <text class="annotation-label" x="180" y="95" text-anchor="end">Rayon incident</text>

            <!-- rayon refracte -->
            <line class="curve-main" x1="280" y1="150" x2="349.1" y2="248.1" marker-end="url(#arrow-phys2nde-refraction)"></line>
            <text class="annotation-label" x="358" y="245" text-anchor="start">Rayon réfracté</text>

            <!-- point d'incidence -->
            <circle class="plot-point" cx="280" cy="150" r="4"></circle>

            <!-- angle i1 (arc precisement calcule, r=26, pas de 5 degres) -->
            <path class="guide-line" fill="none" d="M280.0,124.0 L277.7,124.1 L275.5,124.4 L273.3,124.9 L271.1,125.6 L269.0,126.4 L267.0,127.5 L265.1,128.7 L263.3,130.1 L261.6,131.6 L260.1,133.3"></path>
            <text class="tick-label" x="262" y="112" text-anchor="middle">i₁ = 50°</text>

            <!-- angle i2 (arc precisement calcule, r=26, pas de 3,5 degres) -->
            <path class="guide-line" fill="none" d="M280.0,176.0 L281.6,176.0 L283.2,175.8 L284.8,175.6 L286.3,175.2 L287.9,174.8 L289.4,174.3 L290.8,173.6 L292.3,172.9 L293.6,172.1 L295.0,171.3"></path>
            <text class="tick-label" x="310" y="192" text-anchor="start">i₂ ≈ 35,2°</text>
          </svg>
        `,
        notes: [
          'L\'angle d\'incidence $i_1$ et l\'angle de réfraction $i_2$ sont <strong>toujours mesurés par rapport à la normale</strong> (la pointillée verticale), jamais par rapport à la surface du dioptre.',
          'La loi de Snell-Descartes donne $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{1{,}33}\\times\\sin 50° \\approx 0{,}576$, soit $i_2 \\approx 35{,}2°$.',
          'Comme l\'eau est plus réfringente que l\'air ($n_2 > n_1$), le rayon réfracté se <strong>rapproche de la normale</strong> : $i_2 < i_1$.'
        ],
        reading: 'Repère la normale en pointillés, puis compare l\'angle du rayon incident (dans l\'air) et celui du rayon réfracté (dans l\'eau) : le second est plus petit, plus proche de la normale.',
        caption: 'Réfraction d\'un rayon lumineux passant de l\'air ($n_1=1$) vers l\'eau ($n_2=1{,}33$) : conformément à la loi de Snell-Descartes, le rayon se rapproche de la normale en entrant dans le milieu le plus réfringent.'
      },
      example: {
        statement: 'Un rayon lumineux se propageant dans l\'air ($n_1 = 1$) atteint la surface d\'un bloc de verre ($n_2 = 1{,}5$) avec un angle d\'incidence $i_1 = 35°$.<br/><br/>Calculer l\'angle de réfraction $i_2$.',
        steps: [
          'Loi de Snell-Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.',
          'On isole $\\sin i_2$ : $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{1{,}5}\\times \\sin 35°$.',
          'Calcul intermédiaire : $\\sin 35° \\approx 0{,}574$, donc $\\sin i_2 \\approx \\dfrac{0{,}574}{1{,}5} \\approx 0{,}382$.',
          'On en déduit $i_2 = \\arcsin(0{,}382) \\approx 22{,}5°$.'
        ],
        answer: '$i_2 \\approx 22{,}5°$. Le rayon se rapproche bien de la normale ($i_2 < i_1$), conformément à ce qu\'on attend en entrant dans un milieu plus réfringent que l\'air ($n_2 > n_1$).'
      },
      formulas: [
        'Indice de réfraction : $n = \\dfrac{c}{v}$ (sans unité, $n \\geq 1$)',
        'Vitesse de la lumière dans le vide : $c \\approx 3\\times10^8$ m/s',
        'Loi de Snell-Descartes (réfraction) : $n_1 \\sin i_1 = n_2 \\sin i_2$'
      ],
      recap: [
        'Dans un milieu homogène et transparent, la lumière se propage en <strong>ligne droite</strong>, à une vitesse finie ($c \\approx 3\\times10^8$ m/s dans le vide).',
        'L\'indice de réfraction $n = \\dfrac{c}{v} \\geq 1$ caractérise chaque milieu : plus $n$ est grand, plus la lumière y ralentit.',
        'La loi de Snell-Descartes $n_1 \\sin i_1 = n_2 \\sin i_2$ décrit la réfraction : les angles se mesurent toujours par rapport à la <strong>normale</strong> au dioptre.',
        'La lumière blanche est un mélange de toutes les couleurs ; sa décomposition en spectre (par un prisme, des gouttelettes d\'eau…) résulte de la <strong>dispersion</strong> : l\'indice de réfraction dépend très légèrement de la couleur.'
      ],
      piege: 'Une erreur très fréquente consiste à mesurer les angles d\'incidence et de réfraction par rapport à la <strong>surface</strong> du dioptre plutôt que par rapport à la normale. Attention : dans la loi de Snell-Descartes, $i_1$ et $i_2$ sont toujours définis par rapport à la <strong>normale</strong> (la perpendiculaire à la surface au point d\'incidence), jamais par rapport au plan de la surface elle-même.'
    },

    quiz: [
      {
        q: 'L\'indice de réfraction d\'un milieu transparent est défini par :',
        options: [
          '$n = \\dfrac{c}{v}$, où $v$ est la vitesse de la lumière dans ce milieu',
          '$n = c \\times v$',
          '$n = v - c$',
          '$n$ dépend uniquement de la couleur de l\'objet observé'
        ],
        answer: 0,
        correction: 'L\'indice de réfraction est défini par $n = \\dfrac{c}{v}$, où $c$ est la vitesse de la lumière dans le vide et $v$ sa vitesse dans le milieu considéré. Comme $v \\leq c$ toujours, on a toujours $n \\geq 1$.'
      },
      {
        q: 'Un rayon lumineux passe d\'un milieu d\'indice $n_1 = 1$ (air) vers un milieu d\'indice $n_2 = 2$ (plus réfringent). Que devient sa direction après réfraction ?',
        options: [
          'Le rayon s\'éloigne de la normale',
          'Le rayon se rapproche de la normale',
          'Le rayon ne change pas de direction',
          'Le rayon est totalement réfléchi'
        ],
        answer: 1,
        correction: 'Lorsque le rayon pénètre dans un milieu <strong>plus réfringent</strong> ($n_2 > n_1$), il se rapproche de la normale : $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 < \\sin i_1$, donc $i_2 < i_1$.'
      },
      {
        q: 'La décomposition de la lumière blanche par un prisme en un spectre de couleurs s\'explique par :',
        options: [
          'Le fait que la lumière blanche ne contient qu\'une seule couleur',
          'La dispersion : l\'indice de réfraction du prisme dépend légèrement de la couleur',
          'Une absorption totale de la lumière par le prisme',
          'Le fait que le prisme change la vitesse du son'
        ],
        answer: 1,
        correction: 'La lumière blanche est un mélange de toutes les couleurs, chacune ayant une longueur d\'onde différente. Comme l\'indice de réfraction du prisme varie très légèrement selon la couleur (dispersion), chaque couleur est déviée différemment, ce qui sépare le spectre.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['refraction', 'indice']);

        if (typeExo === 'refraction') {
          var milieux = [
            { nom: 'eau', n: 1.33 },
            { nom: 'verre', n: 1.5 },
            { nom: 'plexiglas', n: 1.49 },
            { nom: 'quartz', n: 1.46 },
            { nom: 'glycérol', n: 1.47 }
          ];
          var milieu = pick(milieux);
          var i1 = pick([20, 25, 30, 35, 40, 45, 50, 55, 60]);
          var i1rad = i1 * Math.PI / 180;
          var sinI2 = Math.sin(i1rad) / milieu.n;
          var i2 = parseFloat((Math.asin(sinI2) * 180 / Math.PI).toFixed(1));
          var contexte = pick([
            'un aquarium de laboratoire',
            'une piscine vue depuis le bord',
            'une vitre de protection incurvée',
            'un prisme de travaux pratiques',
            'un bloc transparent posé sur la paillasse'
          ]);
          return {
            statement: 'Un rayon lumineux se propageant dans l\'air ($n_1=1$) atteint la surface de ' + contexte + ', rempli de ' + milieu.nom + ' ($n_2=' + fr(milieu.n, 2) + '$), avec un angle d\'incidence $i_1=' + i1 + '°$.<br/><br/>D\'après la loi de Descartes pour la réfraction, calcule l\'angle de réfraction $i_2$ (en degrés, arrondi au dixième).',
            answer: i2,
            tolerance: 1,
            unit: '°',
            hint: 'Utilise $n_1 \\sin i_1 = n_2 \\sin i_2$, donc $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1$.',
            solution: [
              'Loi de Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.',
              'On isole : $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{' + fr(milieu.n, 2) + '}\\times\\sin ' + i1 + '°$.',
              'Résultat : $i_2 \\approx ' + fr(i2, 1) + '°$, un angle plus petit que $i_1$ car le rayon se rapproche de la normale en entrant dans le milieu le plus réfringent.'
            ]
          };
        } else {
          var vCentiemes = rand(120, 290); // v en centiemes de 10^8 m/s, entre 1,20 et 2,90
          var v = vCentiemes / 100;
          var n = parseFloat((3 / v).toFixed(2));
          var contexte2 = pick([
            'un matériau transparent testé en laboratoire optique',
            'une fibre optique de nouvelle génération',
            'un verre de lunettes en cours de fabrication',
            'un cristal utilisé en instrumentation scientifique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', la lumière se propage à une vitesse $v = ' + fr(v, 2) + ' \\times 10^8$ m/s (on prend $c = 3\\times10^8$ m/s dans le vide).<br/><br/>Calcule l\'indice de réfraction $n$ de ce matériau (arrondi au centième).',
            answer: n,
            tolerance: 0.03,
            unit: '',
            hint: 'Utilise $n = \\dfrac{c}{v}$.',
            solution: [
              'Formule : $n = \\dfrac{c}{v} = \\dfrac{3\\times10^8}{' + fr(v, 2) + '\\times10^8}$.',
              'Résultat : $n \\approx ' + fr(n, 2) + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un rayon de lumière blanche, provenant du Soleil, pénètre dans une goutte d\'eau sphérique avec un angle d\'incidence $i_1 = 40°$ (mesuré par rapport à la normale). L\'indice de réfraction de l\'eau dépend très légèrement de la couleur : $n_{rouge} = 1{,}331$ pour la lumière rouge, et $n_{violet} = 1{,}343$ pour la lumière violette.',
      tasks: [
        'Calculer l\'angle de réfraction $i_2$ pour le rayon rouge, à l\'entrée dans la goutte d\'eau.',
        'Calculer l\'angle de réfraction $i_2$ pour le rayon violet, dans les mêmes conditions, et comparer avec le résultat précédent.',
        'Expliquer, à partir de ce résultat, l\'origine physique de la séparation des couleurs observée dans un arc-en-ciel.'
      ],
      solutions: [
        'Pour le rouge : $\\sin i_2 = \\dfrac{n_1}{n_{rouge}}\\sin i_1 = \\dfrac{1}{1{,}331}\\times\\sin 40° \\approx \\dfrac{0{,}643}{1{,}331} \\approx 0{,}483$, donc $i_2 \\approx 28{,}9°$.',
        'Pour le violet : $\\sin i_2 = \\dfrac{1}{1{,}343}\\times\\sin 40° \\approx \\dfrac{0{,}643}{1{,}343} \\approx 0{,}479$, donc $i_2 \\approx 28{,}6°$. L\'angle de réfraction du violet est très légèrement <strong>plus petit</strong> que celui du rouge : les deux couleurs ne prennent pas exactement le même chemin dans la goutte d\'eau.',
        'Cette différence, certes minime à l\'entrée de la goutte, provient uniquement du fait que l\'indice de réfraction de l\'eau varie très légèrement selon la couleur (phénomène de <strong>dispersion</strong>). À l\'intérieur de la goutte, le rayon subit ensuite une réflexion puis ressort en se réfractant une seconde fois, ce qui amplifie l\'écart angulaire entre les couleurs. Répété sur des milliards de gouttelettes en suspension dans l\'air, cet effet cumulé sépare visiblement les couleurs de la lumière blanche : c\'est l\'origine de l\'arc-en-ciel.'
      ],
      finalAnswer: '$i_2 \\approx 28{,}9°$ pour le rouge, $i_2 \\approx 28{,}6°$ pour le violet : un écart faible mais réel dès l\'entrée dans la goutte, dû à la dispersion (l\'indice de réfraction dépend de la couleur). Cet écart, amplifié par la réflexion interne dans chaque goutte et cumulé sur un grand nombre de gouttelettes, explique la séparation des couleurs de l\'arc-en-ciel.'
    },

    evaluation: {
      title: 'Évaluation — La lumière (réfraction, spectre)',
      duration: '25 min',
      questions: [
        {
          statement: 'Dans un milieu homogène et transparent, la lumière se propage :',
          type: 'multiple-choice',
          options: [
            'En ligne courbe',
            'En ligne droite',
            'De façon aléatoire',
            'Uniquement dans le vide'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un milieu homogène et transparent, la lumière se propage en <strong>ligne droite</strong> : c\'est le principe de propagation rectiligne.'
        },
        {
          statement: 'Un rayon lumineux passe de l\'air ($n_1=1$) au verre ($n_2=1{,}5$) avec un angle d\'incidence $i_1=30°$. Calculer l\'angle de réfraction $i_2$ (en degrés, arrondi au dixième).',
          type: 'numeric',
          answer: 19.5,
          tolerance: 1,
          unit: '°',
          points: 2,
          correction: '$\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{1{,}5}\\times\\sin 30° = \\dfrac{0{,}5}{1{,}5} \\approx 0{,}333$, donc $i_2 \\approx 19{,}5°$.'
        },
        {
          statement: 'Dans la loi de Snell-Descartes, les angles $i_1$ et $i_2$ sont mesurés par rapport à :',
          type: 'multiple-choice',
          options: [
            'La surface du dioptre',
            'La normale au dioptre',
            'L\'horizontale',
            'Le rayon réfléchi'
          ],
          answer: 1,
          points: 2,
          correction: 'Les angles d\'incidence et de réfraction sont toujours mesurés par rapport à la <strong>normale</strong> (perpendiculaire à la surface au point d\'incidence), jamais par rapport à la surface elle-même.'
        },
        {
          statement: 'Dans un matériau, la lumière se propage à $v = 2\\times10^8$ m/s. Calculer son indice de réfraction $n$ (avec $c=3\\times10^8$ m/s).',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.05,
          unit: '',
          points: 3,
          correction: '$n = \\dfrac{c}{v} = \\dfrac{3\\times10^8}{2\\times10^8} = 1{,}5$.'
        },
        {
          statement: 'La dispersion de la lumière blanche par un prisme s\'explique par le fait que :',
          type: 'multiple-choice',
          options: [
            'Le prisme absorbe certaines couleurs',
            'L\'indice de réfraction du prisme dépend légèrement de la couleur',
            'La lumière blanche ne contient qu\'une seule longueur d\'onde',
            'Le prisme réfléchit toute la lumière incidente'
          ],
          answer: 1,
          points: 1,
          correction: 'Chaque couleur de la lumière blanche est déviée différemment car l\'indice de réfraction du prisme varie très légèrement selon la couleur (la longueur d\'onde) : c\'est le phénomène de dispersion, à l\'origine du spectre observé.'
        }
      ]
    }
  });
