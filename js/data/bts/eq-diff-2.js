/* =========================================================
   Spark Learning – data/bts/eq-diff-2.js
   Module : Équations Différentielles 2nd ordre (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'eq-diff-2',
    level: 3, subject: 'maths',
    icon: '🎚️',
    title: 'Équations Différentielles du 2nd Ordre',
    subtitle: 'Discriminant, 3 régimes d\'amortissement',
    keywords: ['Équation caractéristique', 'Discriminant', 'Régime pseudo-périodique', 'RLC'],
    physics: 'Oscillateurs RLC, résonance, amortissement',

    cours: {
      intro: 'Tout oscillateur physique — circuit RLC, suspension de voiture, bâtiment face au vent — est décrit par la même équation du 2nd ordre.<br/><br/>Le facteur de qualité $Q$ et le coefficient d\'amortissement $\\alpha$ définissent le comportement : sous-amorti ($Q > 0{,}5$, oscillations qui s\'éteignent progressivement), critique ($Q = 0{,}5$, retour le plus rapide à l\'équilibre sans oscillation), sur-amorti ($Q < 0{,}5$, retour lent).<br/><br/>La suspension critique est le compromis recherché en automatique pour un temps de réponse optimal.<br/><br/>En ingénierie, le régime pseudo-périodique est parfois souhaitable (résonance acoustique, filtres sélectifs) ou au contraire à éviter (amortissement des vibrations).<br/><br/>La pseudo-pulsation $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$ est TOUJOURS inférieure à $\\omega_0$ : l\'amortissement ralentit les oscillations.',
      definitions: [
        { term: 'Pulsation propre $\\omega_0$', def: 'Pulsation des oscillations libres du système non amorti ($R = 0$ pour un RLC). Pour un circuit RLC série : $\\omega_0 = 1/\\sqrt{LC}$.' },
        { term: 'Coefficient d\'amortissement $\\alpha$', def: 'Paramètre qui traduit la dissipation d\'énergie. Pour un circuit RLC série : $\\alpha = R/(2L)$. Plus $\\alpha$ est grand, plus les oscillations s\'éteignent vite.' },
        { term: 'Facteur de qualité $Q$', def: 'Rapport sans dimension $Q = \\omega_0/(2\\alpha)$. Il quantifie la sélectivité de la résonance : un $Q$ élevé donne des oscillations persistantes, un $Q$ faible donne un amortissement rapide.' },
        { term: 'Pseudo-pulsation $\\omega_p$', def: 'Pulsation réelle des oscillations amorties : $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$. Elle n\'existe que si $\\alpha < \\omega_0$ (régime pseudo-périodique).' }
      ],
      method: {
        title: 'Les 3 régimes',
        steps: [
          '<strong>Équation caractéristique</strong> : en remplaçant $\\frac{d^2y}{dt^2}$ par $r^2$ et $\\frac{dy}{dt}$ par $r$ : $r^2 + 2\\alpha r + \\omega_0^2 = 0$.<br/><br/><strong>Exemple :</strong> Pour $\\alpha = 3$ et $\\omega_0 = 5$ : $r^2 + 6r + 25 = 0$.',
          '<strong>Discriminant et régime</strong> : $\\Delta = 4\\alpha^2 - 4\\omega_0^2 = 4(\\alpha^2 - \\omega_0^2)$. Si $\\Delta < 0$ → pseudo-périodique (oscillant amorti). Si $\\Delta = 0$ → critique (le plus rapide sans oscillation). Si $\\Delta > 0$ → apériodique (lent, pas d\'oscillation).<br/><br/><strong>Exemple :</strong> $\\Delta = 4(9 - 25) = -64 < 0$ → régime pseudo-périodique.',
          '<strong>Facteur de qualité</strong> : $Q = \\omega_0 / (2\\alpha)$. Si $Q > 0{,}5$ : pseudo-périodique. $Q = 0{,}5$ : critique. $Q < 0{,}5$ : apériodique.<br/><br/><strong>Exemple :</strong> $Q = 5/(2 \\times 3) = 0{,}83 > 0{,}5$ → confirme le régime pseudo-périodique.'
        ]
      },
      example: {
        statement: 'Un circuit RLC série a $R = 40$ Ω, $L = 0{,}1$ H, $C = 100$ μF. Déterminer le régime transitoire (pseudo-périodique, critique ou apériodique) et calculer la pseudo-pulsation si elle existe.',
        steps: [
          'Pulsation propre : $\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{0{,}1 \\times 10^{-4}} = 1/\\sqrt{10^{-5}} \\approx 316$ rad/s.',
          'Coefficient d\'amortissement : $\\alpha = R/(2L) = 40/(2 \\times 0{,}1) = 200$ rad/s.',
          'Discriminant : $\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(40000 - 99856) = 4 \\times (-59856) \\approx -2{,}39 \\times 10^5 < 0$ → régime pseudo-périodique.',
          'Facteur de qualité : $Q = 316/(2 \\times 200) = 0{,}79 > 0{,}5$ → confirme.',
          'Pseudo-pulsation : $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2} = \\sqrt{99856 - 40000} = \\sqrt{59856} \\approx 245$ rad/s.'
        ],
        answer: 'Régime pseudo-périodique ($Q \\approx 0{,}79$), pseudo-pulsation $\\omega_p \\approx 245$ rad/s. Le condensateur oscillera à cette pulsation en s\'amortissant.'
      },
      formulas: [
        'Équation canonique : $\\dfrac{d^2y}{dt^2} + 2\\alpha\\dfrac{dy}{dt} + \\omega_0^2 y = \\omega_0^2 y_{\\infty}$',
        '$\\Delta = 4\\alpha^2 - 4\\omega_0^2$',
        '$Q = \\dfrac{\\omega_0}{2\\alpha}$ (facteur de qualité)',
        'Circuit RLC série : $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$, $\\alpha = \\dfrac{R}{2L}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Les 3 régimes superposés',
        title: 'Réponse à un échelon du 2nd ordre : pseudo-périodique, critique, apériodique',
        description: 'Les trois régimes possibles d\'un système du 2nd ordre soumis à un échelon, pour une même pulsation propre ω0 = 5 rad/s et trois coefficients d\'amortissement α différents (dont α = 3 rad/s, repris de l\'exemple du cours).<br/><br/>Seul le signe du discriminant Δ = 4(α² − ω0²) change d\'une courbe à l\'autre : c\'est lui qui décide si le système oscille ou non.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="eqdiff2-graph-title eqdiff2-graph-desc">
            <title id="eqdiff2-graph-title">Reponse indicielle des trois regimes du 2nd ordre</title>
            <desc id="eqdiff2-graph-desc">Trois courbes superposees pour omega0 = 5 rad/s : pseudo-periodique (alpha = 3, trait plein) qui oscille avec un premier depassement d'environ 9,4 pourcent avant de se stabiliser a 1 ; critique (alpha = 5, tirets longs) qui rejoint 1 le plus vite sans oscillation ; aperiodique (alpha = 8, pointilles) qui rejoint 1 sans oscillation mais plus lentement que le regime critique.</desc>

            <defs>
              <marker id="arrow-eq-diff-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- grille -->
            <line class="grid-line" x1="150" y1="260" x2="150" y2="40"></line>
            <line class="grid-line" x1="240" y1="260" x2="240" y2="40"></line>
            <line class="grid-line" x1="330" y1="260" x2="330" y2="40"></line>
            <line class="grid-line" x1="420" y1="260" x2="420" y2="40"></line>

            <!-- valeur finale y_inf = 1 -->
            <line class="guide-line" x1="60" y1="90.8" x2="420" y2="90.8"></line>
            <text class="label-soft" x="350" y="82" text-anchor="middle">y∞ = 1 (régime permanent)</text>

            <!-- axes -->
            <line class="axis" x1="60" y1="260" x2="430" y2="260" marker-end="url(#arrow-eq-diff-2)"></line>
            <line class="axis" x1="60" y1="260" x2="60" y2="30" marker-end="url(#arrow-eq-diff-2)"></line>

            <!-- courbes : omega0 = 5 rad/s pour les 3 regimes -->
            <polyline class="curve-main" points="60.0,260.0 69.0,255.2 78.0,242.9 87.0,225.5 96.0,205.4 105.0,184.4 114.0,163.8 123.0,144.6 132.0,127.5 141.0,112.8 150.0,100.8 159.0,91.4 168.0,84.3 177.0,79.4 186.0,76.4 195.0,75.0 204.0,74.8 213.0,75.5 222.0,76.8 231.0,78.5 240.0,80.5 249.0,82.5 258.0,84.4 267.0,86.2 276.0,87.7 285.0,89.0 294.0,90.1 303.0,90.9 312.0,91.5 321.0,91.9 330.0,92.2 339.0,92.3 348.0,92.3 357.0,92.2 366.0,92.0 375.0,91.9 384.0,91.7 393.0,91.5 402.0,91.3 411.0,91.2 420.0,91.0"></polyline>
            <polyline class="graph-line" stroke-dasharray="9 5" points="60.0,260.0 69.0,255.5 78.0,244.7 87.0,230.7 96.0,215.3 105.0,199.9 114.0,185.2 123.0,171.6 132.0,159.5 141.0,148.7 150.0,139.4 159.0,131.3 168.0,124.5 177.0,118.7 186.0,113.8 195.0,109.7 204.0,106.3 213.0,103.4 222.0,101.1 231.0,99.2 240.0,97.6 249.0,96.3 258.0,95.3 267.0,94.4 276.0,93.7 285.0,93.1 294.0,92.7 303.0,92.3 312.0,92.0 321.0,91.8 330.0,91.6 339.0,91.4 348.0,91.3 357.0,91.2 366.0,91.1 375.0,91.0 384.0,91.0 393.0,90.9 402.0,90.9 411.0,90.9 420.0,90.9"></polyline>
            <polyline class="graph-line" stroke-dasharray="2 4" points="60.0,260.0 69.0,255.9 78.0,247.0 87.0,236.3 96.0,225.3 105.0,214.6 114.0,204.4 123.0,195.0 132.0,186.3 141.0,178.3 150.0,171.0 159.0,164.3 168.0,158.1 177.0,152.4 186.0,147.3 195.0,142.5 204.0,138.2 213.0,134.2 222.0,130.5 231.0,127.2 240.0,124.1 249.0,121.3 258.0,118.8 267.0,116.4 276.0,114.3 285.0,112.3 294.0,110.5 303.0,108.8 312.0,107.3 321.0,105.9 330.0,104.6 339.0,103.5 348.0,102.4 357.0,101.4 366.0,100.5 375.0,99.7 384.0,99.0 393.0,98.3 402.0,97.6 411.0,97.1 420.0,96.5"></polyline>

            <!-- pic du regime pseudo-periodique -->
            <circle class="plot-point" cx="204" cy="74.8" r="4"></circle>
            <text class="annotation-label" x="204" y="58" text-anchor="middle">Pseudo-périodique (α=3)</text>
            <text class="label-soft" x="204" y="66" text-anchor="middle">D ≈ 9,4 % à t ≈ 0,8 s</text>

            <text class="annotation-label" x="159" y="118" text-anchor="middle">Critique (α=ω0=5)</text>
            <text class="annotation-label" x="159" y="182" text-anchor="middle">Apériodique (α=8)</text>

            <!-- graduations -->
            <text class="tick-label" x="60" y="275" text-anchor="middle">0</text>
            <text class="tick-label" x="150" y="275" text-anchor="middle">0,5</text>
            <text class="tick-label" x="240" y="275" text-anchor="middle">1</text>
            <text class="tick-label" x="330" y="275" text-anchor="middle">1,5</text>
            <text class="tick-label" x="420" y="275" text-anchor="middle">2</text>
            <text class="axis-label" x="437" y="266" text-anchor="middle">t (s)</text>
            <text class="tick-label" x="50" y="264" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="95" text-anchor="end">1</text>
            <text class="axis-label" x="20" y="150" text-anchor="middle" transform="rotate(-90 20 150)">y(t)/y∞</text>
          </svg>
        `,
        notes: [
          'Pseudo-périodique (α = 3 rad/s &lt; ω0, repris de l\'exemple du cours) : Δ &lt; 0, le système oscille en s\'amortissant autour de la valeur finale. Pseudo-pulsation ωp = √(ω0² − α²) = √(25−9) = 4 rad/s, premier maximum lu sur la courbe ≈ 9,4 % au-dessus de la valeur finale, vers t ≈ 0,8 s.',
          'Critique (α = ω0 = 5 rad/s) : Δ = 0, retour à l\'équilibre le plus rapide possible sans aucune oscillation (courbe à tirets longs).',
          'Apériodique (α = 8 rad/s &gt; ω0) : Δ &gt; 0, retour à l\'équilibre sans oscillation mais plus lentement que le régime critique (courbe pointillée) — c\'est le prix d\'un amortissement excessif.'
        ],
        reading: 'Compare les trois courbes à un même instant : la courbe pleine oscille autour de la valeur finale avant de s\'y stabiliser, la courbe à tirets longs s\'en approche le plus vite sans jamais la dépasser, la courbe pointillée s\'en approche aussi sans la dépasser mais plus lentement.',
        caption: 'Réponse à un échelon d\'un système du 2nd ordre pour ω0 = 5 rad/s fixé, avec α = 3 rad/s (pseudo-périodique, valeurs de l\'exemple du cours), α = 5 rad/s (critique) et α = 8 rad/s (apériodique) — points recalculés indépendamment à partir de l\'équation canonique du cours.'
      },
      recap: [
        'Le discriminant $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ détermine le régime : $\\Delta < 0$ (pseudo-périodique), $\\Delta = 0$ (critique), $\\Delta > 0$ (apériodique).',
        'Le facteur de qualité $Q = \\omega_0/(2\\alpha)$ résume le même critère : $Q > 0{,}5$, $Q = 0{,}5$, $Q < 0{,}5$.',
        'En régime pseudo-périodique, la pseudo-pulsation $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$ est toujours inférieure à $\\omega_0$.',
        'Le régime critique ($Q = 0{,}5$) est le plus rapide sans oscillation — c\'est l\'objectif des systèmes asservis bien réglés.'
      ],
      piege: 'Ne pas confondre la pulsation propre $\\omega_0$ (caractéristique du système non amorti) et la pseudo-pulsation $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$ (fréquence réelle des oscillations amorties, toujours plus faible que $\\omega_0$).'
    },

    quiz: [
      {
        q: 'Pour un système avec $\\alpha = 2$ rad/s et $\\omega_0 = 5$ rad/s (régime pseudo-périodique), la pseudo-pulsation $\\omega_p$ des oscillations est :',
        options: [
          '$\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2} = \\sqrt{25 - 4} = \\sqrt{21} \\approx 4{,}58$ rad/s',
          '$\\omega_p = \\omega_0 = 5$ rad/s (la pulsation propre)',
          '$\\omega_p = \\alpha = 2$ rad/s (le coefficient d\'amortissement)',
          '$\\omega_p = \\omega_0 + \\alpha = 7$ rad/s'
        ],
        answer: 0,
        correction: 'En régime pseudo-périodique ($\\alpha < \\omega_0$), les oscillations ont une pulsation $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$, TOUJOURS inférieure à $\\omega_0$. Ici $\\omega_p = \\sqrt{25-4} = \\sqrt{21} \\approx 4{,}58$ rad/s. $\\omega_0 = 5$ rad/s est la pulsation propre du système non amorti — c\'est une propriété intrinsèque du système, pas la fréquence réelle des oscillations amortie.'
      },
      {
        q: 'Un système a $\\alpha = 3$ rad/s et $\\omega_0 = 5$ rad/s. Son régime est :',
        options: [
          'Apériodique ($\\Delta > 0$)',
          'Critique ($\\Delta = 0$)',
          'Pseudo-périodique ($\\Delta < 0$)',
          'Impossible à déterminer'
        ],
        answer: 2,
        correction: '$\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(9 - 25) = 4 \\times (-16) = -64 < 0$. Régime pseudo-périodique (oscillant amorti).'
      },
      {
        q: 'Le régime critique est obtenu quand :',
        options: [
          '$\\alpha < \\omega_0$',
          '$\\alpha = \\omega_0$',
          '$\\alpha > \\omega_0$',
          '$\\alpha = 0$'
        ],
        answer: 1,
        correction: 'Le régime critique correspond à $\\Delta = 0$, soit $4(\\alpha^2 - \\omega_0^2) = 0$, donc $\\alpha = \\omega_0$. C\'est le régime qui revient le plus vite à l\'équilibre sans oscillation.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const alpha = rand(1, 6);
        const omega0 = rand(1, 6);
        const delta = 4 * (alpha * alpha - omega0 * omega0);
        let regime;
        if (delta < 0) {
          regime = 'pseudo-périodique';
        } else if (delta === 0) {
          regime = 'critique';
        } else {
          regime = 'apériodique';
        }

        const ctx = pick([
          {
            build: () => `Un <strong>circuit RLC série</strong> se décharge après ouverture de l'interrupteur. L'étude conduit à un coefficient d'amortissement $\\alpha = ${alpha}$ rad/s et une pulsation propre $\\omega_0 = ${omega0}$ rad/s.<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime transitoire</strong> de la tension aux bornes du condensateur.`
          },
          {
            build: () => `La <strong>suspension d'une voiture</strong> réagit à un nid-de-poule. Le modèle du 2nd ordre donne $\\alpha = ${alpha}$ rad/s (amortisseur) et $\\omega_0 = ${omega0}$ rad/s (raideur du ressort).<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> du retour à l'équilibre de la caisse.`
          },
          {
            build: () => `Un <strong>immeuble</strong> soumis à une rafale de vent oscille avant de revenir à sa position d'équilibre. L'ingénieur structure identifie $\\alpha = ${alpha}$ rad/s et $\\omega_0 = ${omega0}$ rad/s pour ce mode de vibration.<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> d'amortissement du bâtiment.`
          },
          {
            build: () => `Le <strong>bras articulé d'un robot industriel</strong> doit s'arrêter précisément après un déplacement. Le réglage de l'asservissement donne $\\alpha = ${alpha}$ rad/s et $\\omega_0 = ${omega0}$ rad/s.<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> de positionnement du bras.`
          },
          {
            build: () => `Un <strong>ferme-porte automatique</strong> (porte coupe-feu) doit se refermer sans claquer. Son modèle mécanique donne $\\alpha = ${alpha}$ rad/s et $\\omega_0 = ${omega0}$ rad/s.<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> de fermeture de la porte.`
          },
          {
            build: () => `Un <strong>haut-parleur de caisson de basses</strong> est modélisé par un système du 2nd ordre avec $\\alpha = ${alpha}$ rad/s (amortissement de la membrane) et $\\omega_0 = ${omega0}$ rad/s (résonance mécanique).<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> de la membrane après une impulsion.`
          },
          {
            build: () => `Un <strong>capteur sismique</strong> (sismomètre) doit revenir rapidement au repos après une secousse. Le fabricant donne $\\alpha = ${alpha}$ rad/s et $\\omega_0 = ${omega0}$ rad/s pour la masse suspendue.<br/><br/>` +
              `Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le <strong>régime</strong> de réponse du capteur.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: delta,
          tolerance: 0.001,
          unit: '',
          hint: `$\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(${alpha}^2 - ${omega0}^2) = 4(${alpha*alpha} - ${omega0*omega0})$. Ensuite : $\\Delta < 0$ → pseudo-périodique, $\\Delta = 0$ → critique, $\\Delta > 0$ → apériodique.`,
          solution: [
            `$\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(${alpha}^2 - ${omega0}^2)$`,
            `$\\Delta = 4 \\times (${alpha*alpha} - ${omega0*omega0}) = 4 \\times ${alpha*alpha - omega0*omega0} = ${delta}$`,
            `$\\Delta ${delta < 0 ? '< 0' : delta === 0 ? '= 0' : '> 0'}$ → Régime ${regime}`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circuit RLC série est composé de $R = 20$ Ω, $L = 0{,}1$ H et $C = 100$ μF. Le condensateur est initialement chargé à $U_0 = 10$ V et on décharge le circuit en fermant l\'interrupteur à $t = 0$.',
      schema: null,
      tasks: [
        'Calculer la pulsation propre $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ et le coefficient d\'amortissement $\\alpha = \\dfrac{R}{2L}$.',
        'Calculer le discriminant $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et identifier le régime.',
        'Calculer le facteur de qualité $Q = \\omega_0 / (2\\alpha)$ et interpréter physiquement le résultat.'
      ],
      solutions: [
        '$\\omega_0 = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{0{,}1 \\times 100 \\times 10^{-6}}} = \\dfrac{1}{\\sqrt{10^{-5}}} \\approx 316$ rad/s. $\\alpha = \\dfrac{R}{2L} = \\dfrac{20}{0{,}2} = 100$ rad/s.',
        '$\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(10000 - 99856) = 4 \\times (-89856) \\approx -3{,}59 \\times 10^5 < 0$. Régime pseudo-périodique.',
        '$Q = \\dfrac{\\omega_0}{2\\alpha} = \\dfrac{316}{200} \\approx 1{,}58 > 0{,}5$. Le circuit est sous-amorti : la tension oscillera en s\'amortissant avant d\'atteindre zéro.'
      ],
      finalAnswer: 'Régime pseudo-périodique ($Q \\approx 1{,}58$) : oscillations amorties'
    },

    evaluation: {
      title: 'Évaluation — Équations Différentielles du 2nd Ordre',
      duration: '45 min',
      questions: [
        {
          statement: 'Un système a $\\alpha = 4$ rad/s et $\\omega_0 = 10$ rad/s. Calculer le discriminant $\\Delta = 4(\\alpha^2 - \\omega_0^2)$.',
          type: 'numeric',
          answer: -336,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\Delta = 4(\\alpha^2 - \\omega_0^2) = 4(16 - 100) = 4 \\times (-84) = -336$. $\\Delta < 0$ : régime pseudo-périodique.'
        },
        {
          statement: 'Le régime critique est celui qui :',
          type: 'multiple-choice',
          options: ['Produit le plus d\'oscillations', 'Revient le plus rapidement à l\'équilibre sans oscillation', 'N\'existe que pour $R = 0$', 'Correspond à $\\alpha = 0$'],
          answer: 1,
          points: 2,
          correction: 'Le régime critique ($\\Delta = 0$, $\\alpha = \\omega_0$, $Q = 0{,}5$) est le compromis optimal : retour le plus rapide à l\'équilibre sans oscillation. C\'est le régime recherché en automatique pour un temps de réponse minimal.'
        },
        {
          statement: 'Un circuit RLC série a $R = 100$ Ω, $L = 0{,}5$ H et $C = 20$ μF. Calculer la pulsation propre $\\omega_0 = 1/\\sqrt{LC}$ (arrondir à l\'entier).',
          type: 'numeric',
          answer: 316,
          tolerance: 2,
          unit: 'rad/s',
          points: 3,
          correction: '$\\omega_0 = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{0{,}5 \\times 20 \\times 10^{-6}}} = \\dfrac{1}{\\sqrt{10^{-5}}} = \\dfrac{1}{3{,}162 \\times 10^{-3}} \\approx 316$ rad/s.'
        },
        {
          statement: 'Le facteur de qualité $Q = \\omega_0/(2\\alpha)$ vaut $0{,}3$. Le régime est :',
          type: 'multiple-choice',
          options: ['Pseudo-périodique ($Q > 0{,}5$)', 'Critique ($Q = 0{,}5$)', 'Apériodique ($Q < 0{,}5$)', 'Impossible à déterminer'],
          answer: 2,
          points: 2,
          correction: '$Q = 0{,}3 < 0{,}5$ : régime apériodique (sur-amorti). Le système revient à l\'équilibre sans osciller, mais plus lentement qu\'en régime critique.'
        },
        {
          statement: 'En régime pseudo-périodique, la pseudo-pulsation est $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$. Pour $\\omega_0 = 10$ rad/s et $\\alpha = 6$ rad/s, calculer $\\omega_p$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: 'rad/s',
          points: 1,
          correction: '$\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ rad/s. La pseudo-pulsation est toujours inférieure à $\\omega_0$ : l\'amortissement ralentit les oscillations.'
        }
      ]
    }
  }
);
