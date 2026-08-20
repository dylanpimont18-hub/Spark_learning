/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-satellites.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-satellites',
    level: 2, subject: 'physique',
    icon: '🛰️',
    title: 'Mouvements des satellites et des planètes',
    subtitle: 'Loi de gravitation universelle, mouvement circulaire uniforme, vitesse et période orbitales, satellites géostationnaires, troisième loi de Kepler',
    keywords: ['Gravitation universelle', 'Satellite', 'Kepler', 'Orbite circulaire', 'Géostationnaire'],
    physics: 'Ces lois gouvernent le positionnement des satellites de télécommunication géostationnaires, la constellation des satellites GPS et Galileo, le calcul des trajectoires des sondes spatiales, ainsi que la détection des exoplanètes par la méthode des vitesses radiales.',

    cours: {
      intro: 'Un satellite en orbite autour de la Terre — ou une planète en orbite autour du Soleil — est maintenu sur sa trajectoire par une seule force : l\'<strong>attraction gravitationnelle</strong> exercée par l\'astre central. Isaac Newton a montré que cette force, la même qui fait tomber une pomme, gouverne aussi le mouvement des astres : c\'est la <strong>loi de gravitation universelle</strong>.<br/><br/>Pour une orbite circulaire, cette force joue le rôle de <strong>force centripète</strong> : elle est en permanence dirigée vers le centre de l\'astre attracteur, perpendiculairement à la vitesse du satellite, et lui permet de « tomber en permanence » sans jamais atteindre le sol.<br/><br/>Cette analyse, appliquée par Kepler aux planètes du Système solaire avant même les travaux de Newton, se généralise à <strong>tout satellite</strong> — naturel (la Lune, Titan autour de Saturne) ou artificiel (satellite de télécommunication, station spatiale).',
      definitions: [
        { term: 'Loi de gravitation universelle', def: 'Deux corps de masses $m$ et $M$, séparés par une distance $r$, s\'attirent avec une force $F=G\\dfrac{mM}{r^2}$, dirigée selon la droite qui les relie, où $G=6{,}67\\times10^{-11}$ N·m²/kg² est la constante de gravitation universelle.' },
        { term: 'Mouvement circulaire uniforme', def: 'Mouvement à trajectoire circulaire parcourue à vitesse de norme constante. L\'accélération n\'est pas nulle : elle est <strong>centripète</strong>, dirigée vers le centre du cercle, de norme $a=\\dfrac{v^2}{r}$.' },
        { term: 'Vitesse orbitale', def: 'Vitesse d\'un satellite en orbite circulaire de rayon $r$ autour d\'un astre de masse $M$ : $v=\\sqrt{\\dfrac{GM}{r}}$. Elle ne dépend <strong>que</strong> de $r$ et de $M$, jamais de la masse du satellite.' },
        { term: 'Satellite géostationnaire', def: 'Satellite en orbite circulaire équatoriale dont la période est égale à la période de rotation de la Terre sur elle-même (jour sidéral, $T\\approx23$ h $56$ min) : il reste ainsi fixe au-dessus d\'un même point de l\'équateur.' }
      ],
      method: {
        title: 'Étudier l\'orbite d\'un satellite en 3 étapes',
        steps: [
          '<strong>Modéliser</strong> : système = satellite de masse $m$, référentiel géocentrique supposé galiléen (adapté à l\'étude d\'un satellite terrestre), seule force = attraction gravitationnelle de l\'astre central.',
          '<strong>Appliquer le PFD</strong> sur une orbite circulaire : l\'attraction gravitationnelle joue le rôle de force centripète, $G\\dfrac{mM}{r^2}=m\\dfrac{v^2}{r}$. La masse $m$ du satellite se simplifie entièrement : $v=\\sqrt{\\dfrac{GM}{r}}$.',
          '<strong>En déduire</strong> la période $T=\\dfrac{2\\pi r}{v}=2\\pi\\sqrt{\\dfrac{r^3}{GM}}$, ou inversement le rayon $r$ à partir d\'une période imposée (cas du satellite géostationnaire).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Orbite circulaire d\'un satellite',
        title: 'Force de gravitation et vitesse orbitale sur une trajectoire circulaire',
        description: 'La force de gravitation $\\vec{F}$, dirigée vers le centre de la Terre, joue le rôle de force centripète et impose au satellite une trajectoire circulaire parcourue à vitesse $v$ de norme constante.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="orbite-title orbite-desc">
            <title id="orbite-title">Satellite en orbite circulaire autour de la Terre</title>
            <desc id="orbite-desc">La Terre est representee par un disque au centre du schema, entouree d'une orbite circulaire en pointilles. Un satellite est place sur cette orbite. Un vecteur force, oriente du satellite vers le centre de la Terre, represente la force de gravitation centripete. Un vecteur vitesse, tangent a l'orbite et perpendiculaire au vecteur force, represente la vitesse du satellite. Le rayon de l'orbite relie le centre de la Terre au satellite.</desc>

            <defs>
              <marker id="arrow-tle-sat" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- orbite -->
            <circle class="guide-line" cx="280" cy="160" r="110" fill="none"></circle>

            <!-- Terre -->
            <circle class="frame-line" cx="280" cy="160" r="30" fill="var(--diagram-soft)"></circle>
            <circle class="plot-point" cx="280" cy="160" r="3"></circle>
            <text class="label-soft" x="280" y="204" text-anchor="middle">Terre</text>

            <!-- rayon r -->
            <line class="guide-line" x1="280" y1="160" x2="358" y2="82"></line>
            <text class="tick-label" x="336" y="140" text-anchor="start">r</text>

            <!-- satellite -->
            <circle class="plot-point" cx="358" cy="82" r="5"></circle>
            <text class="label-soft" x="368" y="66" text-anchor="start">Satellite</text>

            <!-- vecteur force F (vers le centre) -->
            <line class="curve-main" x1="358" y1="82" x2="333" y2="107" marker-end="url(#arrow-tle-sat)"></line>
            <text class="annotation-label" x="313" y="104" text-anchor="end">F</text>

            <!-- vecteur vitesse v (tangent) -->
            <line class="curve-main" x1="358" y1="82" x2="386" y2="110" marker-end="url(#arrow-tle-sat)"></line>
            <text class="annotation-label" x="394" y="118" text-anchor="start">v</text>
          </svg>
        `,
        notes: [
          'La force de gravitation $\\vec{F}$ est en permanence dirigée vers le <strong>centre</strong> de la Terre : elle joue le rôle de force centripète qui incurve la trajectoire.',
          'La vitesse $\\vec{v}$ est constamment <strong>tangente</strong> à l\'orbite, perpendiculaire à $\\vec{F}$ : sa norme reste constante (mouvement circulaire uniforme), mais sa direction change en permanence.',
          'Le rayon $r$ de l\'orbite se mesure depuis le <strong>centre</strong> de la Terre, et non depuis sa surface : $r=R_{Terre}+h$, où $h$ est l\'altitude du satellite.'
        ],
        reading: 'Repère le centre de la Terre, puis le satellite sur son orbite : la force $\\vec{F}$ pointe toujours vers le centre, tandis que la vitesse $\\vec{v}$, perpendiculaire à $\\vec{F}$, est tangente à la trajectoire circulaire.',
        caption: 'Satellite en orbite circulaire autour de la Terre : la force de gravitation $\\vec{F}$, centripète, maintient le satellite sur une trajectoire circulaire parcourue à vitesse $v$ constante.'
      },
      example: {
        statement: 'Un satellite géostationnaire reste immobile au-dessus d\'un même point de l\'équateur : sa période de révolution doit donc être égale à la période de rotation de la Terre sur elle-même par rapport aux étoiles, soit le jour sidéral $T=23$ h $56$ min $=86\\,164$ s. On donne $G=6{,}67\\times10^{-11}$ SI, $M_{Terre}=5{,}97\\times10^{24}$ kg et $R_{Terre}=6\\,371$ km.<br/><br/>Calculer le rayon $r$ de l\'orbite géostationnaire, puis l\'altitude $h$ correspondante.',
        steps: [
          'D\'après la troisième loi de Kepler appliquée à une orbite circulaire, $T^2=\\dfrac{4\\pi^2}{GM_{Terre}}r^3$, donc $r=\\sqrt[3]{\\dfrac{GM_{Terre}T^2}{4\\pi^2}}$.',
          'Application numérique : $r=\\sqrt[3]{\\dfrac{6{,}67\\times10^{-11}\\times5{,}97\\times10^{24}\\times86\\,164^2}{4\\pi^2}}\\approx4{,}215\\times10^7$ m, soit $r\\approx42\\,150$ km.',
          'L\'altitude est mesurée depuis la surface terrestre : $h=r-R_{Terre}=42\\,150-6\\,371\\approx35\\,779$ km, arrondie usuellement à environ $35\\,800$ km.'
        ],
        answer: '$r\\approx42\\,150$ km et $h\\approx35\\,800$ km. Cette orbite unique, équatoriale et circulaire, est très recherchée : elle est occupée par de nombreux satellites de télécommunication et de météorologie, tous « immobiles » au-dessus d\'un même point du globe.'
      },
      formulas: [
        '$F=G\\dfrac{mM}{r^2}$ (loi de gravitation universelle)',
        'Accélération centripète : $a=\\dfrac{v^2}{r}$, dirigée vers le centre',
        'Vitesse orbitale (orbite circulaire) : $v=\\sqrt{\\dfrac{GM}{r}}$',
        'Période de révolution : $T=2\\pi\\sqrt{\\dfrac{r^3}{GM}}$',
        'Troisième loi de Kepler : $\\dfrac{T^2}{r^3}=\\dfrac{4\\pi^2}{GM}$ (constante pour tous les satellites d\'un même astre)',
        '$GM_{Terre}\\approx3{,}98\\times10^{14}$ m³/s² (paramètre gravitationnel standard terrestre)'
      ],
      recap: [
        'La force de gravitation joue le rôle de <strong>force centripète</strong> pour un satellite en orbite circulaire : elle est en permanence dirigée vers le centre de l\'astre attracteur.',
        'La vitesse orbitale $v=\\sqrt{GM/r}$ et la période $T=2\\pi\\sqrt{r^3/GM}$ ne dépendent <strong>que</strong> du rayon de l\'orbite et de la masse de l\'astre attracteur, jamais de la masse du satellite.',
        'Plus l\'orbite est <strong>haute</strong> (grand $r$), plus la vitesse orbitale est <strong>faible</strong> et plus la période est <strong>longue</strong>.',
        'Un satellite géostationnaire occupe une orbite <strong>unique</strong> (équatoriale, circulaire, d\'altitude fixe $\\approx35\\,800$ km) : sa période égale exactement la période de rotation de la Terre.'
      ],
      piege: 'Une erreur fréquente est de croire que la vitesse ou la période d\'un satellite dépend de sa masse : ce n\'est pas le cas, la masse du satellite se simplifie entièrement dans l\'équation du mouvement circulaire, si bien que deux satellites de masses différentes sur la même orbite ont exactement la même vitesse. Attention également à ne pas confondre le rayon de l\'orbite $r$ (mesuré depuis le centre de la Terre) avec l\'altitude $h$ du satellite (mesurée depuis la surface) : la relation est $r=R_{Terre}+h$.'
    },

    quiz: [
      {
        q: 'Un satellite est en orbite circulaire autour de la Terre, à vitesse de norme constante. Que peut-on dire de son accélération ?',
        options: [
          'Elle est non nulle, dirigée vers le centre de la Terre (centripète)',
          'Elle est nulle car le mouvement est uniforme',
          'Elle est dirigée vers l\'extérieur de l\'orbite',
          'Elle est tangente à la trajectoire'
        ],
        answer: 0,
        correction: 'Même à vitesse de norme constante, la direction de la vitesse change en permanence sur une trajectoire circulaire : l\'accélération n\'est pas nulle, elle est centripète (dirigée vers le centre), de norme $a=v^2/r$. C\'est cette accélération, produite par la force de gravitation, qui incurve la trajectoire.'
      },
      {
        q: 'Deux satellites de masses différentes sont placés sur la même orbite circulaire autour de la Terre. Comment se comparent leurs vitesses orbitales ?',
        options: [
          'Elles sont identiques : la masse du satellite n\'intervient pas dans $v=\\sqrt{GM/r}$',
          'Le satellite le plus lourd va plus vite',
          'Le satellite le plus léger va plus vite',
          'On ne peut pas comparer sans connaître leurs masses'
        ],
        answer: 0,
        correction: 'La vitesse orbitale $v=\\sqrt{GM_{Terre}/r}$ ne dépend que du rayon de l\'orbite et de la masse de la Terre : la masse du satellite se simplifie dans l\'équation du mouvement (elle apparaît des deux côtés du PFD). Les deux satellites ont donc exactement la même vitesse.'
      },
      {
        q: 'Un satellite orbite à une distance $r=6{,}8\\times10^6$ m du centre de la Terre ($GM_{Terre}\\approx3{,}98\\times10^{14}$ m³/s²). Quelle est sa vitesse orbitale, arrondie à la dizaine de m/s ?',
        options: [
          '$v\\approx7\\,650$ m/s',
          '$v\\approx58\\,530\\,000$ m/s',
          '$v\\approx2{,}71\\times10^{7}$ m/s',
          '$v\\approx765$ m/s'
        ],
        answer: 0,
        correction: '$v=\\sqrt{\\dfrac{GM_{Terre}}{r}}=\\sqrt{\\dfrac{3{,}98\\times10^{14}}{6{,}8\\times10^6}}=\\sqrt{5{,}853\\times10^7}\\approx7\\,650$ m/s. Attention à ne pas oublier la racine carrée : le quotient seul ($5{,}85\\times10^7$) n\'est pas homogène à une vitesse.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var G = 6.67e-11, M_T = 5.97e24, R_T = 6371;
        var hKm = pick([300, 400, 500, 600, 700, 800]);
        var rKm = R_T + hKm;
        var r = rKm * 1000;
        var typeExo = pick(['vitesse', 'periode']);
        var contexte = pick([
          'un satellite d\'observation de la Terre',
          'un satellite météorologique défilant',
          'une station spatiale scientifique',
          'un satellite d\'imagerie haute résolution',
          'un micro-satellite de télécommunication'
        ]);

        if (typeExo === 'vitesse') {
          var v = Math.sqrt(G * M_T / r);
          var vKmS = parseFloat((v / 1000).toFixed(2));
          return {
            statement: 'Dans le cas de ' + contexte + ', placé en orbite circulaire à une altitude $h=' + hKm + '$ km au-dessus de la Terre ($R_{Terre}=6\\,371$ km, $G=6{,}67\\times10^{-11}$ SI, $M_{Terre}=5{,}97\\times10^{24}$ kg).<br/><br/>Calcule la vitesse orbitale $v$ de ce satellite (en km/s, arrondie au centième).',
            answer: vKmS,
            tolerance: Math.max(0.05, parseFloat((vKmS * 0.03).toFixed(2))),
            unit: 'km/s',
            hint: 'Le rayon de l\'orbite est $r=R_{Terre}+h$ (à convertir en mètres), puis $v=\\sqrt{\\dfrac{GM_{Terre}}{r}}$.',
            solution: [
              'Rayon de l\'orbite : $r=R_{Terre}+h=6\\,371+' + hKm + '=' + rKm + '$ km, soit $r=' + rKm + '\\times10^3$ m.',
              'Vitesse orbitale : $v=\\sqrt{\\dfrac{GM_{Terre}}{r}}=\\sqrt{\\dfrac{6{,}67\\times10^{-11}\\times5{,}97\\times10^{24}}{' + rKm + '\\times10^3}}$.',
              'Résultat : $v\\approx' + fr(Math.round(v)) + '$ m/s, soit $v\\approx' + fr(vKmS, 2) + '$ km/s.'
            ]
          };
        } else {
          var T = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / (G * M_T));
          var Tmin = parseFloat((T / 60).toFixed(1));
          return {
            statement: 'Dans le cas de ' + contexte + ', placé en orbite circulaire à une altitude $h=' + hKm + '$ km au-dessus de la Terre ($R_{Terre}=6\\,371$ km, $G=6{,}67\\times10^{-11}$ SI, $M_{Terre}=5{,}97\\times10^{24}$ kg).<br/><br/>Calcule la période de révolution $T$ de ce satellite (en minutes, arrondie au dixième).',
            answer: Tmin,
            tolerance: Math.max(0.5, parseFloat((Tmin * 0.03).toFixed(1))),
            unit: 'min',
            hint: 'Calcule d\'abord le rayon $r=R_{Terre}+h$, puis $T=2\\pi\\sqrt{\\dfrac{r^3}{GM_{Terre}}}$ (en secondes, à convertir en minutes).',
            solution: [
              'Rayon de l\'orbite : $r=R_{Terre}+h=6\\,371+' + hKm + '=' + rKm + '$ km, soit $r=' + rKm + '\\times10^3$ m.',
              'Période : $T=2\\pi\\sqrt{\\dfrac{r^3}{GM_{Terre}}}$, avec $GM_{Terre}\\approx3{,}98\\times10^{14}$ m³/s².',
              'Résultat : $T\\approx' + fr(Math.round(T)) + '$ s, soit $T\\approx' + fr(Tmin, 1) + '$ min.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Titan, le plus gros satellite naturel de Saturne, décrit une orbite quasi circulaire de rayon $r=1{,}22\\times10^9$ m autour de la planète, avec une période de révolution $T=15{,}95$ jours. On souhaite déterminer la masse de Saturne à partir de ces seules données, en utilisant la même méthode que pour un satellite artificiel de la Terre.',
      tasks: [
        'Convertir la période $T$ de Titan en secondes.',
        'En partant de l\'égalité entre force de gravitation et force centripète, exprimer la masse $M_{Saturne}$ de Saturne en fonction de $G$, $r$ et $T$.',
        'Calculer numériquement $M_{Saturne}$, et comparer l\'ordre de grandeur obtenu à la masse de la Terre ($M_{Terre}=5{,}97\\times10^{24}$ kg).'
      ],
      solutions: [
        '$T=15{,}95$ jours $=15{,}95\\times24\\times3\\,600\\approx1{,}378\\times10^6$ s.',
        'Comme pour un satellite terrestre, $G\\dfrac{M_{Saturne}m}{r^2}=m\\dfrac{v^2}{r}$ avec $v=\\dfrac{2\\pi r}{T}$, ce qui donne $T^2=\\dfrac{4\\pi^2 r^3}{GM_{Saturne}}$, soit $M_{Saturne}=\\dfrac{4\\pi^2 r^3}{GT^2}$.',
        '$M_{Saturne}=\\dfrac{4\\pi^2\\times(1{,}22\\times10^9)^3}{6{,}67\\times10^{-11}\\times(1{,}378\\times10^6)^2}\\approx5{,}66\\times10^{26}$ kg, soit environ <strong>95 fois</strong> la masse de la Terre.'
      ],
      finalAnswer: '$M_{Saturne}\\approx5{,}66\\times10^{26}$ kg (la valeur obtenue par d\'autres méthodes est $\\approx5{,}68\\times10^{26}$ kg, un très bon accord). Observer la période et le rayon d\'un seul satellite naturel permet ainsi de « peser » une planète entière sans jamais s\'y rendre : c\'est la méthode utilisée pour déterminer la masse de tous les astres du Système solaire possédant au moins un satellite.'
    },

    evaluation: {
      title: 'Évaluation — Mouvements des satellites et des planètes',
      duration: '30 min',
      questions: [
        {
          statement: 'Un satellite orbite à une distance $r=7{,}0\\times10^6$ m du centre de la Terre ($GM_{Terre}\\approx3{,}98\\times10^{14}$ m³/s²). Calculer sa vitesse orbitale (en m/s, arrondie à la dizaine).',
          type: 'numeric',
          answer: 7540,
          tolerance: 50,
          unit: 'm/s',
          points: 2,
          correction: '$v=\\sqrt{\\dfrac{GM_{Terre}}{r}}=\\sqrt{\\dfrac{3{,}98\\times10^{14}}{7{,}0\\times10^6}}\\approx7\\,540$ m/s.'
        },
        {
          statement: 'Sur une orbite circulaire, la force de gravitation subie par le satellite joue le rôle de :',
          type: 'multiple-choice',
          options: [
            'Force centrifuge',
            'Force centripète',
            'Force de frottement',
            'Force motrice, qui augmente la vitesse du satellite'
          ],
          answer: 1,
          points: 2,
          correction: 'La force de gravitation est constamment dirigée vers le centre de la trajectoire : c\'est une force centripète, qui provoque le changement continuel de direction de la vitesse sans jamais modifier sa norme sur une orbite circulaire.'
        },
        {
          statement: 'Un satellite orbite à $r=8{,}0\\times10^6$ m du centre de la Terre ($GM_{Terre}\\approx3{,}98\\times10^{14}$ m³/s²). Calculer sa période de révolution $T$ (en minutes, arrondie à l\'unité).',
          type: 'numeric',
          answer: 119,
          tolerance: 2,
          unit: 'min',
          points: 2,
          correction: '$T=2\\pi\\sqrt{\\dfrac{r^3}{GM_{Terre}}}=2\\pi\\sqrt{\\dfrac{(8{,}0\\times10^6)^3}{3{,}98\\times10^{14}}}\\approx7\\,126$ s $\\approx119$ min.'
        },
        {
          statement: 'La vitesse orbitale d\'un satellite en orbite circulaire dépend de :',
          type: 'multiple-choice',
          options: [
            'Uniquement de la masse du satellite',
            'Uniquement du rayon de l\'orbite et de la masse de l\'astre attracteur',
            'De la masse du satellite et du rayon de l\'orbite',
            'Uniquement de sa vitesse au moment du lancement'
          ],
          answer: 1,
          points: 2,
          correction: '$v=\\sqrt{GM/r}$ : seules la masse $M$ de l\'astre attracteur et le rayon $r$ de l\'orbite interviennent, jamais la masse du satellite lui-même.'
        },
        {
          statement: 'Un premier satellite est en orbite à $r_1=8\\,000$ km du centre de la Terre avec une période $T_1=2$ h. Un second satellite est en orbite à $r_2=32\\,000$ km. En utilisant la troisième loi de Kepler, calculer sa période $T_2$ (en heures).',
          type: 'numeric',
          answer: 16,
          tolerance: 0.5,
          unit: 'h',
          points: 3,
          correction: 'D\'après la troisième loi de Kepler, $\\dfrac{T_1^2}{r_1^3}=\\dfrac{T_2^2}{r_2^3}$, donc $T_2=T_1\\times\\left(\\dfrac{r_2}{r_1}\\right)^{1{,}5}=2\\times\\left(\\dfrac{32\\,000}{8\\,000}\\right)^{1{,}5}=2\\times4^{1{,}5}=2\\times8=16$ h. Pas besoin de connaître $G$ ni $M_{Terre}$ : le rapport constant $T^2/r^3$ suffit à comparer deux orbites autour du même astre.'
        }
      ]
    }
  });
