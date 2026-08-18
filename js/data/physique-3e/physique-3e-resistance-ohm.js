/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-resistance-ohm.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-resistance-ohm',
    level: 1, subject: 'physique',
    icon: '🔌',
    title: 'La résistance électrique et la loi d\'Ohm',
    subtitle: 'Résistance d\'un conducteur, caractéristique U = f(I), loi d\'Ohm',
    keywords: ['Résistance', 'Loi d\'Ohm', 'Caractéristique', 'Ohm', 'Multimètre'],
    physics: 'La loi d\'Ohm permet de dimensionner les résistances de protection des circuits électroniques, d\'expliquer pourquoi un fil trop fin chauffe et peut prendre feu, et de comprendre le fonctionnement des résistances chauffantes (grille-pain, radiateur électrique, fer à repasser).',

    cours: {
      intro: 'Un fil électrique, une lampe ou un composant appelé <strong>résistor</strong> s\'opposent plus ou moins au passage du courant électrique : cette « opposition » se mesure par une grandeur appelée <strong>résistance électrique</strong>, notée $R$ et exprimée en <strong>ohms</strong> (symbole $\\Omega$).<br/><br/>Plus la résistance d\'un composant est grande, plus il est difficile au courant de le traverser : pour une même tension appliquée, l\'intensité du courant sera plus faible.<br/><br/>Le physicien allemand Georg Ohm a établi une relation simple entre la tension $U$ aux bornes d\'un résistor et l\'intensité $I$ du courant qui le traverse : c\'est la <strong>loi d\'Ohm</strong>, $U = R \\times I$. Cette relation est <strong>linéaire</strong> : si l\'on trace la <strong>caractéristique</strong> $U = f(I)$ d\'un résistor, on obtient une <strong>droite passant par l\'origine</strong>, dont le coefficient directeur est justement la valeur de $R$.',
      definitions: [
        { term: 'Résistance électrique ($R$)', def: 'Grandeur qui caractérise l\'opposition d\'un composant au passage du courant électrique. Elle se mesure en <strong>ohms</strong> ($\\Omega$) à l\'aide d\'un multimètre en position ohmmètre.' },
        { term: 'Loi d\'Ohm', def: 'Pour un résistor, la tension à ses bornes est proportionnelle à l\'intensité du courant qui le traverse : $U = R \\times I$, avec $U$ en volts (V), $I$ en ampères (A) et $R$ en ohms ($\\Omega$).' },
        { term: 'Caractéristique $U = f(I)$', def: 'Représentation graphique de la tension $U$ aux bornes d\'un résistor en fonction de l\'intensité $I$ qui le traverse. Pour un résistor, c\'est une <strong>droite passant par l\'origine</strong> : c\'est le signe d\'une <strong>proportionnalité</strong> entre $U$ et $I$.' },
        { term: 'Coefficient directeur', def: 'Pente de la droite caractéristique $U = f(I)$, obtenue en divisant une variation de $U$ par la variation de $I$ correspondante. Pour un résistor, ce coefficient directeur est exactement égal à la résistance $R$.' }
      ],
      method: {
        title: 'Déterminer une résistance à partir d\'une caractéristique en 3 étapes',
        steps: [
          '<strong>Vérifier</strong> que la caractéristique $U = f(I)$ est bien une <strong>droite passant par l\'origine</strong> : c\'est la signature d\'un résistor qui suit la loi d\'Ohm.',
          '<strong>Choisir deux points</strong> bien lisibles sur la droite, assez éloignés l\'un de l\'autre pour limiter les erreurs de lecture, et relever leurs coordonnées $(I_1, U_1)$ et $(I_2, U_2)$.',
          '<strong>Calculer le coefficient directeur</strong> de la droite, qui donne directement la résistance : $R = \\dfrac{U_2 - U_1}{I_2 - I_1}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Caractéristique d\'un résistor',
        title: 'Droite $U = f(I)$ et détermination de la résistance par le coefficient directeur',
        description: 'La caractéristique d\'un résistor est une droite passant par l\'origine. Sa pente, calculée à partir de deux points, donne directement la valeur de la résistance $R$.',
        svg: `
          <svg viewBox="0 0 510 320" role="img" aria-labelledby="ohm-title ohm-desc">
            <title id="ohm-title">Caracteristique U=f(I) d'un resistor</title>
            <desc id="ohm-desc">Un graphique represente la tension U en volts en fonction de l'intensite I en amperes. Les points sont alignes sur une droite passant par l'origine, allant de (0 ampere, 0 volt) a (0,1 ampere, 10 volts). Un triangle de pente est trace entre deux points de la droite, situes a 0,02 ampere/2 volts et 0,06 ampere/6 volts, avec un cote horizontal representant une variation de 0,04 ampere et un cote vertical representant une variation de 4 volts. Le rapport de ces deux variations donne la resistance R egale a 100 ohms.</desc>

            <defs>
              <marker id="arrow-3e-ohm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="460" y2="260" marker-end="url(#arrow-3e-ohm)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="30" marker-end="url(#arrow-3e-ohm)"></line>
            <text class="tick-label" x="60" y="20" text-anchor="middle">U (V)</text>
            <text class="tick-label" x="465" y="254" text-anchor="start">I (A)</text>
            <text class="tick-label" x="46" y="264" text-anchor="end">0</text>

            <!-- droite caracteristique -->
            <line class="curve-main" x1="60" y1="260" x2="440" y2="40"></line>

            <!-- triangle de pente -->
            <line class="guide-line" x1="136" y1="216" x2="288" y2="216"></line>
            <line class="guide-line" x1="288" y1="216" x2="288" y2="128"></line>
            <text class="tick-label" x="212" y="234" text-anchor="middle">ΔI = 0,04 A</text>
            <text class="tick-label" x="300" y="172" text-anchor="start">ΔU = 4 V</text>

            <!-- points -->
            <circle class="plot-point" cx="136" cy="216" r="5"></circle>
            <text class="label-soft" x="120" y="204" text-anchor="end">(0,02 A ; 2 V)</text>
            <circle class="plot-point" cx="288" cy="128" r="5"></circle>
            <text class="label-soft" x="300" y="120" text-anchor="start">(0,06 A ; 6 V)</text>

            <!-- graduations axe I -->
            <text class="tick-label" x="136" y="278" text-anchor="middle">0,02</text>
            <text class="tick-label" x="288" y="278" text-anchor="middle">0,06</text>
            <text class="tick-label" x="440" y="278" text-anchor="middle">0,10</text>

            <!-- graduations axe U -->
            <text class="tick-label" x="46" y="220" text-anchor="end">2</text>
            <text class="tick-label" x="46" y="132" text-anchor="end">6</text>
            <text class="tick-label" x="46" y="44" text-anchor="end">10</text>
          </svg>
        `,
        notes: [
          'La caractéristique est une <strong>droite passant par l\'origine</strong> : $U$ et $I$ sont proportionnelles, ce qui confirme que le composant testé est bien un résistor suivant la loi d\'Ohm.',
          'Entre les deux points repérés, $\\Delta U = 6 - 2 = 4$ V et $\\Delta I = 0{,}06 - 0{,}02 = 0{,}04$ A.',
          'Le coefficient directeur (la résistance) vaut $R = \\dfrac{\\Delta U}{\\Delta I} = \\dfrac{4}{0{,}04} = 100$ Ω.'
        ],
        reading: 'Repère deux points bien espacés sur la droite, lis la variation de $U$ et la variation de $I$ correspondante, puis divise-les pour obtenir $R$.',
        caption: 'Caractéristique $U=f(I)$ d\'un résistor de $100$ Ω : la pente de la droite, calculée entre deux points, donne directement la valeur de la résistance.'
      },
      example: {
        statement: 'Lors d\'une expérience, on relève $U = 4{,}5$ V aux bornes d\'un résistor traversé par un courant d\'intensité $I = 0{,}3$ A.<br/><br/>Calcule la résistance $R$ de ce résistor.',
        steps: [
          'On utilise la loi d\'Ohm : $U = R \\times I$.',
          'On isole $R$ en divisant les deux membres par $I$ : $R = \\dfrac{U}{I}$.',
          'Application numérique : $R = \\dfrac{4{,}5}{0{,}3}$.',
          'Résultat : $R = 15$ Ω.'
        ],
        answer: '$R = 15$ Ω.'
      },
      formulas: [
        'Loi d\'Ohm : $U = R \\times I$',
        'Résistance à partir de $U$ et $I$ : $R = \\dfrac{U}{I}$',
        'Intensité à partir de $U$ et $R$ : $I = \\dfrac{U}{R}$',
        'Coefficient directeur de la caractéristique : $R = \\dfrac{\\Delta U}{\\Delta I}$'
      ],
      recap: [
        'La résistance $R$ (en ohms, $\\Omega$) mesure l\'opposition d\'un composant au passage du courant.',
        'La loi d\'Ohm relie tension, résistance et intensité : $U = R \\times I$, une relation qu\'on peut réarranger selon l\'inconnue cherchée.',
        'La caractéristique $U = f(I)$ d\'un résistor est une <strong>droite passant par l\'origine</strong> : $U$ et $I$ sont proportionnelles.',
        'Le coefficient directeur de cette droite est directement la valeur de la résistance $R$.'
      ],
      piege: 'Une erreur fréquente est d\'inverser la formule et d\'écrire $R = U \\times I$ au lieu de $R = \\dfrac{U}{I}$, ou de confondre les unités (volts, ampères, ohms). Attention à toujours repartir de la loi d\'Ohm $U = R \\times I$ et à isoler la grandeur cherchée par une division, jamais par une multiplication supplémentaire.'
    },

    quiz: [
      {
        q: 'Un résistor de $R = 50$ Ω est traversé par un courant $I = 0{,}2$ A. Quelle est la tension $U$ à ses bornes ?',
        options: ['$U = 10$ V', '$U = 250$ V', '$U = 0{,}004$ V', '$U = 50{,}2$ V'],
        answer: 0,
        correction: 'Loi d\'Ohm : $U = R \\times I = 50 \\times 0{,}2 = 10$ V.'
      },
      {
        q: 'La caractéristique $U = f(I)$ d\'un résistor est une droite passant par l\'origine. Que peut-on en conclure ?',
        options: [
          'Que $U$ et $I$ ne sont pas liées',
          'Que $U$ et $I$ sont proportionnelles',
          'Que la résistance varie tout le temps',
          'Que le résistor est défectueux'
        ],
        answer: 1,
        correction: 'Une droite passant par l\'origine est la signature graphique d\'une situation de <strong>proportionnalité</strong> : $U$ et $I$ sont proportionnelles, avec $R$ comme coefficient de proportionnalité.'
      },
      {
        q: 'Sur une caractéristique $U = f(I)$, un élève repère deux points : $(0{,}01\\text{ A} ; 1\\text{ V})$ et $(0{,}05\\text{ A} ; 5\\text{ V})$. Quelle est la résistance du composant ?',
        options: ['$R = 4$ Ω', '$R = 100$ Ω', '$R = 0{,}01$ Ω', '$R = 5$ Ω'],
        answer: 1,
        correction: '$R = \\dfrac{\\Delta U}{\\Delta I} = \\dfrac{5-1}{0{,}05-0{,}01} = \\dfrac{4}{0{,}04} = 100$ Ω.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['resistance', 'tension', 'intensite']);
        var contexte = pick([
          'un fer à repasser',
          'une résistance chauffante de radiateur',
          'un grille-pain',
          'un résistor de circuit électronique',
          'une résistance de protection de LED'
        ]);

        if (typeExo === 'resistance') {
          var U = randFloat(2, 24, 1);
          var I = randFloat(0.1, 3, 2);
          var R = parseFloat((U / I).toFixed(2));
          return {
            statement: 'On mesure, aux bornes de ' + contexte + ', une tension $U = ' + fr(U, 1) + '$ V pour un courant d\'intensité $I = ' + fr(I, 2) + '$ A.<br/><br/>Calcule la résistance $R$ de ce composant (en Ω, arrondie au centième).',
            answer: R,
            tolerance: Math.max(0.05, parseFloat((R * 0.03).toFixed(2))),
            unit: 'Ω',
            hint: 'Utilise la loi d\'Ohm $U = R \\times I$, réarrangée en $R = \\dfrac{U}{I}$.',
            solution: [
              'Loi d\'Ohm : $U = R \\times I$, donc $R = \\dfrac{U}{I}$.',
              'Application numérique : $R = \\dfrac{' + fr(U, 1) + '}{' + fr(I, 2) + '}$.',
              'Résultat : $R \\approx ' + fr(R, 2) + '$ Ω.'
            ]
          };
        } else if (typeExo === 'tension') {
          var R2 = pick([10, 22, 33, 47, 68, 100, 150, 220, 330]);
          var I2 = randFloat(0.05, 2, 2);
          var U2 = parseFloat((R2 * I2).toFixed(2));
          return {
            statement: 'On assimile ' + contexte + ' à un résistor de résistance $R = ' + R2 + '$ Ω, traversé par un courant d\'intensité $I = ' + fr(I2, 2) + '$ A.<br/><br/>Calcule la tension $U$ à ses bornes (en V, arrondie au centième).',
            answer: U2,
            tolerance: Math.max(0.05, parseFloat((U2 * 0.03).toFixed(2))),
            unit: 'V',
            hint: 'Utilise directement la loi d\'Ohm $U = R \\times I$.',
            solution: [
              'Loi d\'Ohm : $U = R \\times I$.',
              'Application numérique : $U = ' + R2 + ' \\times ' + fr(I2, 2) + '$.',
              'Résultat : $U \\approx ' + fr(U2, 2) + '$ V.'
            ]
          };
        } else {
          var R3 = pick([10, 22, 33, 47, 68, 100, 150, 220]);
          var U3 = randFloat(1, 20, 1);
          var I3 = parseFloat((U3 / R3).toFixed(3));
          return {
            statement: 'On assimile ' + contexte + ' à un résistor de résistance $R = ' + R3 + '$ Ω, alimenté sous une tension $U = ' + fr(U3, 1) + '$ V.<br/><br/>Calcule l\'intensité $I$ du courant qui le traverse (en A, arrondie au millième).',
            answer: I3,
            tolerance: Math.max(0.002, parseFloat((I3 * 0.03).toFixed(3))),
            unit: 'A',
            hint: 'Réarrange la loi d\'Ohm $U = R \\times I$ pour isoler $I$ : $I = \\dfrac{U}{R}$.',
            solution: [
              'Loi d\'Ohm : $U = R \\times I$, donc $I = \\dfrac{U}{R}$.',
              'Application numérique : $I = \\dfrac{' + fr(U3, 1) + '}{' + R3 + '}$.',
              'Résultat : $I \\approx ' + fr(I3, 3) + '$ A.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'En travaux pratiques, un groupe d\'élèves mesure, pour un même résistor, plusieurs couples de valeurs $(I, U)$ : $I_1 = 0{,}1$ A avec $U_1 = 2{,}2$ V ; $I_2 = 0{,}3$ A avec $U_2 = 6{,}6$ V ; $I_3 = 0{,}5$ A avec $U_3 = 11$ V.',
      tasks: [
        'Calcule le rapport $\\dfrac{U}{I}$ pour chacune des trois mesures.',
        'Que peux-tu en conclure sur la nature du composant testé, et sur la caractéristique $U = f(I)$ qu\'il faudrait tracer ?',
        'Détermine la valeur de la résistance $R$ de ce composant.'
      ],
      solutions: [
        'Mesure 1 : $\\dfrac{U_1}{I_1} = \\dfrac{2{,}2}{0{,}1} = 22$ Ω. Mesure 2 : $\\dfrac{U_2}{I_2} = \\dfrac{6{,}6}{0{,}3} = 22$ Ω. Mesure 3 : $\\dfrac{U_3}{I_3} = \\dfrac{11}{0{,}5} = 22$ Ω.',
        'Le rapport $\\dfrac{U}{I}$ est <strong>constant</strong> (égal à $22$ pour les trois mesures) : $U$ et $I$ sont donc proportionnelles. Le composant testé est bien un <strong>résistor</strong> qui suit la loi d\'Ohm, et sa caractéristique $U = f(I)$ serait une <strong>droite passant par l\'origine</strong>.',
        'La résistance du composant est $R = 22$ Ω (c\'est justement le rapport constant $\\frac{U}{I}$ trouvé à la question précédente).'
      ],
      finalAnswer: '$R = 22$ Ω. Le fait que $\\dfrac{U}{I}$ reste constant sur plusieurs mesures est la meilleure façon de vérifier expérimentalement qu\'un composant suit la loi d\'Ohm, avant même de tracer sa caractéristique.'
    },

    evaluation: {
      title: 'Évaluation — La résistance électrique et la loi d\'Ohm',
      duration: '25 min',
      questions: [
        {
          statement: 'Un résistor de $R = 40$ Ω est traversé par un courant $I = 0{,}25$ A. Calculer la tension $U$ à ses bornes (en V).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.2,
          unit: 'V',
          points: 2,
          correction: '$U = R \\times I = 40 \\times 0{,}25 = 10$ V.'
        },
        {
          statement: 'La caractéristique $U = f(I)$ d\'un résistor est :',
          type: 'multiple-choice',
          options: [
            'Une droite passant par l\'origine',
            'Une courbe qui s\'incurve vers le haut',
            'Une droite qui ne passe pas par l\'origine',
            'Un ensemble de points sans lien entre eux'
          ],
          answer: 0,
          points: 2,
          correction: 'La caractéristique d\'un résistor est une droite passant par l\'origine : c\'est la traduction graphique de la proportionnalité entre $U$ et $I$ (loi d\'Ohm).'
        },
        {
          statement: 'On mesure $U = 9$ V aux bornes d\'un résistor parcouru par un courant $I = 0{,}3$ A. Calculer sa résistance $R$ (en Ω).',
          type: 'numeric',
          answer: 30,
          tolerance: 0.5,
          unit: 'Ω',
          points: 2,
          correction: '$R = \\dfrac{U}{I} = \\dfrac{9}{0{,}3} = 30$ Ω.'
        },
        {
          statement: 'Un résistor de $R = 60$ Ω est alimenté sous une tension $U = 12$ V. Calculer l\'intensité $I$ du courant qui le traverse (en A).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.02,
          unit: 'A',
          points: 3,
          correction: '$I = \\dfrac{U}{R} = \\dfrac{12}{60} = 0{,}2$ A.'
        },
        {
          statement: 'Sur une caractéristique $U = f(I)$, on relève les points $(0{,}02\\text{ A} ; 3\\text{ V})$ et $(0{,}1\\text{ A} ; 15\\text{ V})$. Calculer la résistance du composant (en Ω).',
          type: 'numeric',
          answer: 150,
          tolerance: 2,
          unit: 'Ω',
          points: 2,
          correction: '$R = \\dfrac{\\Delta U}{\\Delta I} = \\dfrac{15-3}{0{,}1-0{,}02} = \\dfrac{12}{0{,}08} = 150$ Ω.'
        }
      ]
    }
  });
