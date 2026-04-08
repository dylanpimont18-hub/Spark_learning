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
      intro: 'Tout oscillateur physique — circuit RLC, suspension de voiture, bâtiment face au vent — est décrit par la même équation du 2nd ordre. Le facteur de qualité $Q$ et le coefficient d\'amortissement $\\alpha$ définissent le comportement : sous-amorti ($Q > 0{,}5$, oscillations qui s\'éteignent progressivement), critique ($Q = 0{,}5$, retour le plus rapide à l\'équilibre sans oscillation), sur-amorti ($Q < 0{,}5$, retour lent). La suspension critique est le compromis recherché en automatique pour un temps de réponse optimal. En ingénierie, le régime pseudo-périodique est parfois souhaitable (résonance acoustique, filtres sélectifs) ou au contraire à éviter (amortissement des vibrations). La pseudo-pulsation $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$ est TOUJOURS inférieure à $\\omega_0$ : l\'amortissement ralentit les oscillations.',
      definitions: [
        { term: 'Pulsation propre $\\omega_0$', def: 'Pulsation des oscillations libres du système non amorti ($R = 0$ pour un RLC). Pour un circuit RLC série : $\\omega_0 = 1/\\sqrt{LC}$.' },
        { term: 'Coefficient d\'amortissement $\\alpha$', def: 'Paramètre qui traduit la dissipation d\'énergie. Pour un circuit RLC série : $\\alpha = R/(2L)$. Plus $\\alpha$ est grand, plus les oscillations s\'éteignent vite.' },
        { term: 'Facteur de qualité $Q$', def: 'Rapport sans dimension $Q = \\omega_0/(2\\alpha)$. Il quantifie la sélectivité de la résonance : un $Q$ élevé donne des oscillations persistantes, un $Q$ faible donne un amortissement rapide.' },
        { term: 'Pseudo-pulsation $\\omega_p$', def: 'Pulsation réelle des oscillations amorties : $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$. Elle n\'existe que si $\\alpha < \\omega_0$ (régime pseudo-périodique).' }
      ],
      method: {
        title: 'Les 3 régimes',
        steps: [
          'Écrire l\'équation caractéristique (en remplaçant $\\frac{d^2y}{dt^2}$ par $r^2$ et $\\frac{dy}{dt}$ par $r$) : $r^2 + 2\\alpha r + \\omega_0^2 = 0$. <strong>Exemple :</strong> Pour $\\alpha = 3$ et $\\omega_0 = 5$ : $r^2 + 6r + 25 = 0$.',
          'Calculer le discriminant $\\Delta = 4\\alpha^2 - 4\\omega_0^2 = 4(\\alpha^2 - \\omega_0^2)$. Si $\\Delta < 0$ → pseudo-périodique (oscillant amorti). Si $\\Delta = 0$ → critique (le plus rapide sans oscillation). Si $\\Delta > 0$ → apériodique (lent, pas d\'oscillation). <strong>Exemple :</strong> $\\Delta = 4(9 - 25) = -64 < 0$ → régime pseudo-périodique.',
          'Facteur de qualité : $Q = \\omega_0 / (2\\alpha)$. Si $Q > 0{,}5$ : pseudo-périodique. $Q = 0{,}5$ : critique. $Q < 0{,}5$ : apériodique. <strong>Exemple :</strong> $Q = 5/(2 \\times 3) = 0{,}83 > 0{,}5$ → confirme le régime pseudo-périodique.'
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
      type: 'multiple-choice',
      generate() {
        const alpha = rand(1, 6);
        const omega0 = rand(1, 6);
        const delta = 4 * (alpha * alpha - omega0 * omega0);
        let regime;
        if (delta < 0) {
          regime = 'pseudo-périodique';
          reponse = 0;
        } else if (delta === 0) {
          regime = 'critique';
          reponse = 1;
        } else {
          regime = 'apériodique';
          reponse = 2;
        }
        return {
          statement: `Un système est décrit par l'équation caractéristique avec $\\alpha = ${alpha}$ rad/s et $\\omega_0 = ${omega0}$ rad/s. Calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et détermine le régime.`,
          answer: parseFloat(delta.toString()),
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
