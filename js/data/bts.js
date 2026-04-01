/* =========================================================
   Spark Learning – data/bts.js
   Modules BTS
   ========================================================= */

window.MODULES.push(

  {
    id: 'complexes',
    level: 3, subject: 'maths',
    icon: '🌀',
    title: 'Les Nombres Complexes',
    subtitle: 'Module, argument, impédance, régimes AC',
    keywords: ['Module', 'Argument', 'Forme algébrique', 'Impédance'],
    physics: 'Impédance $\\underline{Z}$, régimes sinusoïdaux, déphasage',

    cours: {
      intro: 'En régime sinusoïdal, chaque composant introduit un DÉPHASAGE entre courant et tension : la résistance ne déphasé pas ($\\phi=0$), la bobine avance le courant de $-90°$ ($\\underline{Z}_L = jL\\omega$), le condensateur le retarde de $+90°$ ($\\underline{Z}_C = -j/(C\\omega)$). Représenter ces effets comme des nombres complexes permet de les combiner algébriquement — le module de l\'impédance donne l\'amplitude, l\'argument donne le déphasage. La partie réelle de $\\underline{Z}$ est résistive (énergie dissipée en chaleur) ; la partie imaginaire est réactive (énergie stockée et restituée). En notation BTS, on écrit $j = \\sqrt{-1}$ (et non $i$) pour éviter la confusion avec l\'intensité $i(t)$. La résonance ($\\omega_0 = 1/\\sqrt{LC}$) annule la partie imaginaire : le circuit se comporte alors comme une résistance pure.',
      definitions: [
        { term: 'Module $|\\underline{Z}|$', def: 'Longueur du vecteur dans le plan complexe : $|\\underline{Z}| = \\sqrt{a^2 + b^2}$. En électricité, il représente l\'amplitude du rapport tension/courant (en Ω).' },
        { term: 'Argument $\\arg(\\underline{Z})$', def: 'Angle du vecteur avec l\'axe réel : $\\phi = \\arctan(b/a)$. Il donne le déphasage entre tension et courant.' },
        { term: 'Impédance complexe $\\underline{Z}$', def: 'Grandeur complexe qui généralise la résistance en régime sinusoïdal. Elle combine la partie résistive (réelle) et la partie réactive (imaginaire) : $\\underline{Z} = R + jX$.' },
        { term: 'Résonance', def: 'Pulsation $\\omega_0 = 1/\\sqrt{LC}$ à laquelle la partie imaginaire de $\\underline{Z}$ s\'annule. Le circuit se comporte comme une résistance pure ($\\underline{Z} = R$), le courant est maximal.' }
      ],
      method: {
        title: 'Opérations sur les complexes',
        steps: [
          'Forme algébrique : $\\underline{Z} = a + jb$ (avec $j^2 = -1$). Module : $|\\underline{Z}| = \\sqrt{a^2 + b^2}$. Argument : $\\phi = \\arctan(b/a)$. <strong>Exemple :</strong> $\\underline{Z} = 6 + 8j$ → $|\\underline{Z}| = \\sqrt{36 + 64} = \\sqrt{100} = 10$ Ω et $\\phi = \\arctan(8/6) \\approx 53{,}1°$.',
          'Forme exponentielle (polaire) : $\\underline{Z} = |\\underline{Z}| e^{j\\phi}$. Utile pour multiplier/diviser des impédances. <strong>Exemple :</strong> $\\underline{Z}_1 = 5e^{j30°}$ et $\\underline{Z}_2 = 2e^{j15°}$ → $\\underline{Z}_1 \\cdot \\underline{Z}_2 = 10e^{j45°}$ (modules multipliés, arguments additionnés).',
          'Impédances : résistance $\\underline{Z}_R = R$ ; bobine $\\underline{Z}_L = jL\\omega$ ; condensateur $\\underline{Z}_C = \\dfrac{1}{jC\\omega} = \\dfrac{-j}{C\\omega}$. <strong>Exemple :</strong> Bobine $L = 50$ mH à $\\omega = 1000$ rad/s → $\\underline{Z}_L = j \\times 0{,}05 \\times 1000 = 50j$ Ω (module $50$ Ω, déphasage $+90°$).'
        ]
      },
      example: {
        statement: 'Un circuit RL série ($R = 30$ Ω, $L = 40$ mH) est alimenté en régime sinusoïdal à $\\omega = 1000$ rad/s avec $U = 10$ V. Calculer l\'impédance complexe, son module, le déphasage et l\'intensité efficace.',
        steps: [
          'Impédance de la bobine : $\\underline{Z}_L = jL\\omega = j \\times 0{,}04 \\times 1000 = 40j$ Ω.',
          'Impédance totale : $\\underline{Z} = R + \\underline{Z}_L = 30 + 40j$ Ω.',
          'Module : $|\\underline{Z}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ Ω.',
          'Déphasage : $\\phi = \\arctan(40/30) = \\arctan(1{,}33) \\approx 53{,}1°$. Le courant est en retard sur la tension.',
          'Intensité efficace : $I = U / |\\underline{Z}| = 10 / 50 = 0{,}2$ A.'
        ],
        answer: '$\\underline{Z} = 30 + 40j$ Ω, $|\\underline{Z}| = 50$ Ω, $\\phi \\approx 53{,}1°$, $I = 0{,}2$ A.'
      },
      formulas: [
        '$|a + jb| = \\sqrt{a^2 + b^2}$',
        '$\\arg(a + jb) = \\arctan\\left(\\dfrac{b}{a}\\right)$',
        '$j^2 = -1$, $j = \\sqrt{-1}$',
        '$\\underline{Z}_{RLC \\text{ série}} = R + j\\left(L\\omega - \\dfrac{1}{C\\omega}\\right)$'
      ],
      diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px;">Composant</th><th style="border:1px solid var(--border);padding:8px;">Impédance $\\underline{Z}$</th><th style="border:1px solid var(--border);padding:8px;">Module</th><th style="border:1px solid var(--border);padding:8px;">Déphasage $\\phi$</th></tr><tr><td style="border:1px solid var(--border);padding:8px;">Résistance $R$</td><td style="border:1px solid var(--border);padding:8px;">$R$</td><td style="border:1px solid var(--border);padding:8px;">$R$</td><td style="border:1px solid var(--border);padding:8px;">$0°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Bobine $L$</td><td style="border:1px solid var(--border);padding:8px;">$jL\\omega$</td><td style="border:1px solid var(--border);padding:8px;">$L\\omega$</td><td style="border:1px solid var(--border);padding:8px;">$+90°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Condensateur $C$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{-j}{C\\omega}$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{C\\omega}$</td><td style="border:1px solid var(--border);padding:8px;">$-90°$</td></tr></table>',
      recap: [
        'Le module de $\\underline{Z}$ donne l\'amplitude (rapport $U/I$), l\'argument donne le déphasage tension-courant.',
        'En forme exponentielle, les multiplications deviennent simples : modules multipliés, arguments additionnés.',
        'À la résonance ($\\omega_0 = 1/\\sqrt{LC}$), l\'impédance est purement réelle ($\\underline{Z} = R$) et le courant est maximal.',
        'Toujours utiliser $j$ (pas $i$) en électronique pour éviter la confusion avec l\'intensité $i(t)$.'
      ],
      piege: 'En électronique, on utilise $j$ (et non $i$) pour l\'unité imaginaire, pour éviter la confusion avec l\'intensité du courant $i(t)$. Les deux notations désignent la même chose mathématiquement.'
    },

    quiz: [
      {
        q: 'Le module du nombre complexe $\\underline{Z} = 3 + 4j$ est :',
        options: ['$|\\underline{Z}| = 7$', '$|\\underline{Z}| = 5$', '$|\\underline{Z}| = 1$', '$|\\underline{Z}| = 12$'],
        answer: 1,
        correction: '$|\\underline{Z}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Le triplet pythagoricien $(3, 4, 5)$ est à connaître !'
      },
      {
        q: 'Un étudiant calcule l\'impédance d\'un condensateur $C = 100\\,\\mu\\text{F}$ à $\\omega = 1000$ rad/s et écrit : $\\underline{Z}_C = jC\\omega = j \\times 0{,}1\\,\\Omega$. Quelle est son erreur ?',
        options: [
          'La formule est $\\underline{Z}_C = \\dfrac{1}{jC\\omega} = \\dfrac{-j}{C\\omega}$. Le module vaut $\\dfrac{1}{C\\omega} = 10\\,\\Omega$ (pas $C\\omega = 0{,}1\\,\\Omega$)',
          'Il a raison : $\\underline{Z}_C = jC\\omega$',
          'Il faut écrire $\\underline{Z}_C = C\\omega = 0{,}1\\,\\Omega$ (sans le $j$)',
          '$\\underline{Z}_C = \\dfrac{j}{C\\omega} = +j \\times 10\\,\\Omega$ (le $j$ est au numérateur)'
        ],
        answer: 0,
        correction: 'Le condensateur a une impédance $\\underline{Z}_C = \\dfrac{1}{jC\\omega}$. Multiplier par $\\dfrac{-j}{-j}$ donne $\\underline{Z}_C = \\dfrac{-j}{C\\omega}$. Ici $|\\underline{Z}_C| = \\dfrac{1}{C\\omega} = \\dfrac{1}{100 \\times 10^{-6} \\times 1000} = 10\\,\\Omega$. L\'étudiant a inversé numérateur et dénominateur : $C\\omega$ est au dénominateur, pas au numérateur.'
      },
      {
        q: 'Dans un circuit RLC série, la résonance se produit quand :',
        options: [
          '$R = L\\omega$',
          '$L\\omega = \\dfrac{1}{C\\omega}$',
          '$L = C$',
          '$R = 0$'
        ],
        answer: 1,
        correction: 'À la résonance, la partie imaginaire de $\\underline{Z}$ est nulle : $L\\omega - \\dfrac{1}{C\\omega} = 0 \\Rightarrow L\\omega = \\dfrac{1}{C\\omega}$, soit $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        // Pythagorean triples for clean answers
        const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
        const [a, b, mod] = pick(triples);
        return {
          statement: `Calcule le module de l'impédance complexe $\\underline{Z} = ${a} + ${b}j$ (en Ω).`,
          answer: mod,
          tolerance: 0.1,
          unit: 'Ω',
          hint: `Module d'un complexe $a + jb$ : $|\\underline{Z}| = \\sqrt{a^2 + b^2} = \\sqrt{${a}^2 + ${b}^2}$. Pense au théorème de Pythagore !`,
          solution: [
            `$|\\underline{Z}| = \\sqrt{a^2 + b^2} = \\sqrt{${a}^2 + ${b}^2}$`,
            `$= \\sqrt{${a*a} + ${b*b}} = \\sqrt{${a*a + b*b}}$`,
            `$= ${mod}$ Ω`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circuit RLC série est alimenté par une tension sinusoïdale $u(t) = 10\\sqrt{2}\\cos(\\omega t)$ V avec $\\omega = 1000$ rad/s. Les composants sont : $R = 100$ Ω, $L = 0{,}1$ H, $C = 10$ μF.',
      schema: 'Schéma : générateur → résistance R → bobine L → condensateur C (en série). Mesure de l\'intensité i(t) et des tensions aux bornes de chaque composant.',
      tasks: [
        'Calculer les réactances : $X_L = L\\omega$ et $X_C = \\dfrac{1}{C\\omega}$.',
        'Écrire l\'impédance complexe totale $\\underline{Z} = R + j(X_L - X_C)$ et calculer son module $|\\underline{Z}|$.',
        'Calculer l\'intensité efficace $I = \\dfrac{U}{|\\underline{Z}|}$ et le déphasage $\\phi = \\arctan\\left(\\dfrac{X_L - X_C}{R}\\right)$.'
      ],
      solutions: [
        '$X_L = L\\omega = 0{,}1 \\times 1000 = 100$ Ω. $X_C = \\dfrac{1}{C\\omega} = \\dfrac{1}{10 \\times 10^{-6} \\times 1000} = \\dfrac{1}{0{,}01} = 100$ Ω.',
        '$\\underline{Z} = 100 + j(100 - 100) = 100 + 0j = 100$ Ω. Donc $|\\underline{Z}| = 100$ Ω. C\'est la résonance ($X_L = X_C$) !',
        '$I = \\dfrac{U}{|Z|} = \\dfrac{10}{100} = 0{,}1$ A. $\\phi = \\arctan(0/100) = 0°$. À la résonance, le courant et la tension sont en phase.'
      ],
      finalAnswer: '$I = 0{,}1$ A (résonance : $\\phi = 0°$, $|Z| = R = 100$ Ω)'
    },

    evaluation: {
      title: 'Évaluation — Les Nombres Complexes',
      duration: '45 min',
      questions: [
        {
          statement: 'Calculer le module de $\\underline{Z} = 5 + 12j$ (en Ω).',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: 'Ω',
          points: 2,
          correction: '$|\\underline{Z}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ Ω. (Triplet pythagoricien $(5, 12, 13)$.)'
        },
        {
          statement: 'L\'impédance d\'un condensateur de capacité $C$ à la pulsation $\\omega$ est :',
          type: 'multiple-choice',
          options: ['$\\underline{Z}_C = jC\\omega$', '$\\underline{Z}_C = \\dfrac{1}{jC\\omega} = \\dfrac{-j}{C\\omega}$', '$\\underline{Z}_C = RC$', '$\\underline{Z}_C = jL\\omega$'],
          answer: 1,
          points: 2,
          correction: '$\\underline{Z}_C = \\dfrac{1}{jC\\omega}$. En multipliant numérateur et dénominateur par $-j$ : $\\underline{Z}_C = \\dfrac{-j}{C\\omega}$. Son module est $|\\underline{Z}_C| = \\dfrac{1}{C\\omega}$.'
        },
        {
          statement: 'Un circuit RLC série a $R = 50$ Ω, $L = 0{,}2$ H, $C = 50$ μF et $\\omega = 200$ rad/s. Calculer la partie imaginaire de l\'impédance totale : $\\text{Im}(\\underline{Z}) = L\\omega - \\dfrac{1}{C\\omega}$ (en Ω).',
          type: 'numeric',
          answer: -60,
          tolerance: 0.1,
          unit: 'Ω',
          points: 3,
          correction: '$L\\omega = 0{,}2 \\times 200 = 40$ Ω. $\\dfrac{1}{C\\omega} = \\dfrac{1}{50 \\times 10^{-6} \\times 200} = \\dfrac{1}{0{,}01} = 100$ Ω. $\\text{Im}(\\underline{Z}) = 40 - 100 = -60$ Ω. Le circuit est capacitif (partie imaginaire négative).'
        },
        {
          statement: 'L\'argument de $\\underline{Z} = 1 + j$ est :',
          type: 'multiple-choice',
          options: ['$0°$', '$45°$', '$90°$', '$180°$'],
          answer: 1,
          points: 2,
          correction: '$\\arg(1 + j) = \\arctan\\left(\\dfrac{1}{1}\\right) = \\arctan(1) = 45°$ (ou $\\pi/4$ rad). Le module est $\\sqrt{2}$, d\'où la forme exponentielle $\\underline{Z} = \\sqrt{2}\\,e^{j\\pi/4}$.'
        },
        {
          statement: 'À la résonance d\'un circuit RLC série, la condition sur les réactances est $L\\omega_0 = \\dfrac{1}{C\\omega_0}$. Pour $L = 0{,}1$ H et $C = 10$ μF, calculer la pulsation de résonance $\\omega_0$ (arrondir à l\'entier).',
          type: 'numeric',
          answer: 1000,
          tolerance: 1,
          unit: 'rad/s',
          points: 1,
          correction: '$\\omega_0 = \\dfrac{1}{\\sqrt{LC}} = \\dfrac{1}{\\sqrt{0{,}1 \\times 10 \\times 10^{-6}}} = \\dfrac{1}{\\sqrt{10^{-6}}} = \\dfrac{1}{10^{-3}} = 1000$ rad/s.'
        }
      ]
    }
  },

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
  },

    {
    id: 'statistiques',
    level: 3, subject: 'maths',
    icon: '📏',
    title: 'Statistiques et Calculs d\'Incertitudes',
    subtitle: 'Moyenne, écart-type, incertitude type A',
    keywords: ['Moyenne', 'Écart-type', 'Incertitude', 'Intervalle de confiance'],
    physics: 'Validation expérimentale, expression du résultat avec incertitude',

    cours: {
      intro: 'En métrologie industrielle, un résultat sans incertitude n\'a aucune valeur : $R = 100{,}0$ Ω seul est inutile, $R = 100{,}0 \\pm 1{,}1$ Ω à 95% est un résultat exploitable. Le GUM (Guide for the Expression of Uncertainty in Measurement) distingue deux types : type A (évaluation statistique sur répétitions) et type B (abaques, certificats d\'étalonnage, notices). L\'incertitude type A se réduit en $1/\\sqrt{n}$ : doubler le nombre de mesures divise l\'incertitude par $\\sqrt{2}$, pas par 2. L\'écart-type d\'un échantillon se calcule avec $(n-1)$ au dénominateur — et non $n$ — pour obtenir un estimateur non biaisé de la dispersion de la population. Cette correction de Bessel est cruciale pour les petits échantillons ($n < 10$). L\'incertitude élargie $U = k \\cdot u_A$ avec $k=2$ correspond à environ $95\\%$ des cas (loi normale).',
      definitions: [
        { term: 'Moyenne $\\bar{x}$', def: 'Valeur centrale d\'un ensemble de mesures : $\\bar{x} = \\frac{1}{n}\\sum x_i$. C\'est la meilleure estimation de la grandeur mesurée.' },
        { term: 'Écart-type expérimental $s$', def: 'Mesure de la dispersion des mesures autour de la moyenne : $s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$. Plus $s$ est grand, plus les mesures sont dispersées.' },
        { term: 'Incertitude type A $u_A$', def: 'Incertitude sur la moyenne estimée par méthode statistique : $u_A = s/\\sqrt{n}$. Elle diminue quand le nombre de mesures $n$ augmente.' },
        { term: 'Correction de Bessel', def: 'Division par $(n-1)$ au lieu de $n$ dans le calcul de la variance d\'un échantillon. Cela compense le fait que $\\bar{x}$ est elle-même estimée sur l\'échantillon, consommant un degré de liberté.' }
      ],
      method: {
        title: 'Méthode d\'évaluation de type A',
        steps: [
          'Réaliser $n$ mesures $x_1, x_2, \\ldots, x_n$. Calculer la moyenne : $\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i$. <strong>Exemple :</strong> $n = 4$ mesures de tension : $5{,}1$ ; $4{,}9$ ; $5{,}0$ ; $5{,}2$ V → $\\bar{x} = (5{,}1+4{,}9+5{,}0+5{,}2)/4 = 20{,}2/4 = 5{,}05$ V.',
          'Calculer l\'écart-type expérimental : $s = \\sqrt{\\dfrac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})^2}$. <strong>Exemple :</strong> Écarts : $(0{,}05)^2 + (-0{,}15)^2 + (-0{,}05)^2 + (0{,}15)^2 = 0{,}05$ → $s = \\sqrt{0{,}05/3} \\approx 0{,}129$ V.',
          'L\'incertitude type A est : $u_A = \\dfrac{s}{\\sqrt{n}}$. Le résultat final s\'exprime : $\\bar{x} \\pm k \\cdot u_A$ où $k = 2$ (intervalle à 95%) ou $k = 3$ (99%). <strong>Exemple :</strong> $u_A = 0{,}129/\\sqrt{4} = 0{,}065$ V → résultat : $U = 5{,}05 \\pm 0{,}13$ V (à 95%, $k=2$).'
        ]
      },
      example: {
        statement: 'Un technicien mesure 5 fois la longueur d\'une pièce usinée (en mm) : $50{,}12$ ; $49{,}95$ ; $50{,}08$ ; $50{,}01$ ; $49{,}94$. Exprimer le résultat avec son incertitude à 95%.',
        steps: [
          'Moyenne : $\\bar{x} = (50{,}12 + 49{,}95 + 50{,}08 + 50{,}01 + 49{,}94)/5 = 250{,}10/5 = 50{,}02$ mm.',
          'Écarts à la moyenne : $0{,}10$ ; $-0{,}07$ ; $0{,}06$ ; $-0{,}01$ ; $-0{,}08$.',
          'Somme des carrés des écarts : $0{,}01 + 0{,}0049 + 0{,}0036 + 0{,}0001 + 0{,}0064 = 0{,}025$.',
          'Écart-type : $s = \\sqrt{0{,}025/4} = \\sqrt{0{,}00625} \\approx 0{,}079$ mm.',
          'Incertitude type A : $u_A = 0{,}079/\\sqrt{5} \\approx 0{,}035$ mm.',
          'Résultat à 95% ($k=2$) : $L = 50{,}02 \\pm 0{,}07$ mm.'
        ],
        answer: '$L = 50{,}02 \\pm 0{,}07$ mm (à 95% de confiance).'
      },
      formulas: [
        '$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i$ (moyenne)',
        '$s = \\sqrt{\\dfrac{\\sum(x_i - \\bar{x})^2}{n-1}}$ (écart-type)',
        '$u_A = \\dfrac{s}{\\sqrt{n}}$ (incertitude type A)',
        'Résultat : $R = \\bar{x} \\pm k \\cdot u_A$'
      ],
      recap: [
        'Toujours exprimer un résultat expérimental avec son incertitude : $\\bar{x} \\pm k \\cdot u_A$.',
        'L\'écart-type $s$ (dispersion) se calcule avec $(n-1)$ au dénominateur (correction de Bessel), pas $n$.',
        'L\'incertitude $u_A = s/\\sqrt{n}$ diminue en $1/\\sqrt{n}$ : pour diviser l\'incertitude par 2, il faut 4 fois plus de mesures.',
        '$k = 2$ donne un intervalle de confiance à 95%, $k = 3$ à 99%.'
      ],
      piege: 'On divise par $(n-1)$ et non par $n$ pour l\'écart-type d\'un échantillon. Diviser par $n$ donnerait l\'écart-type de la population entière (si on la connaissait). Avec un échantillon fini, $(n-1)$ donne un estimateur non biaisé.'
    },

    quiz: [
      {
        q: 'On effectue $n = 9$ mesures de résistance et on obtient un écart-type $s = 0{,}3$ Ω. L\'incertitude type A est :',
        options: ['$u_A = 0{,}3$ Ω', '$u_A = 0{,}1$ Ω', '$u_A = 0{,}033$ Ω', '$u_A = 0{,}9$ Ω'],
        answer: 1,
        correction: '$u_A = s/\\sqrt{n} = 0{,}3/\\sqrt{9} = 0{,}3/3 = 0{,}1$ Ω. Augmenter le nombre de mesures réduit l\'incertitude (en $1/\\sqrt{n}$).'
      },
      {
        q: 'Pour un intervalle de confiance à 95%, le facteur d\'élargissement $k$ est environ :',
        options: ['$k = 1$', '$k = 2$', '$k = 3$', '$k = 5$'],
        answer: 1,
        correction: 'Conventionnellement : $k = 2$ pour 95% et $k = 3$ pour 99%. Ces valeurs correspondent à la loi normale standard (approximation valable pour $n$ grand).'
      },
      {
        q: 'Pour calculer l\'écart-type d\'un échantillon de $n = 5$ mesures, on divise la somme des carrés des écarts par :',
        options: [
          '$n - 1 = 4$ : estimateur non biaisé de la variance de la population (correction de Bessel)',
          '$n = 5$ : donne l\'écart-type de l\'échantillon uniquement, biaisé',
          '$n + 1 = 6$ : surcorrection inutile',
          '$\\sqrt{n} = \\sqrt{5}$ : comme pour l\'incertitude type A'
        ],
        answer: 0,
        correction: 'Diviser par $n-1$ plutôt que $n$ donne un estimateur non biaisé : en moyenne, $s^2 = \\sum(x_i-\\bar{x})^2/(n-1)$ estime correctement la variance $\\sigma^2$ de la population. Diviser par $n$ sous-estimerait $\\sigma^2$ car $\\bar{x}$ est lui-même calculé sur l\'échantillon (il "consomme" un degré de liberté). Pour $n$ grand, la différence est négligeable ; pour $n = 5$, diviser par $4$ ou $5$ fait une différence de $25\\%$ !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const vals = [rand(5,15), rand(5,15), rand(5,15), rand(5,15)];
        const mean = parseFloat((vals.reduce((a,b) => a+b, 0) / 4).toFixed(2));
        return {
          statement: `On mesure 4 fois une grandeur et on obtient les valeurs : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$. Calcule la moyenne $\\bar{x}$ de ces mesures.`,
          answer: mean,
          tolerance: 0.05,
          unit: '',
          hint: `La moyenne, c'est la somme de toutes les valeurs divisée par le nombre de valeurs : $\\bar{x} = \\dfrac{${vals[0]} + ${vals[1]} + ${vals[2]} + ${vals[3]}}{4}$.`,
          solution: [
            `Somme : $${vals[0]} + ${vals[1]} + ${vals[2]} + ${vals[3]} = ${vals.reduce((a,b)=>a+b,0)}$`,
            `Nombre de valeurs : $n = 4$`,
            `Moyenne : $\\bar{x} = \\dfrac{${vals.reduce((a,b)=>a+b,0)}}{4} = ${mean}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un étudiant mesure 5 fois la résistance d\'un résistor et obtient les valeurs suivantes (en Ω) : $R_1 = 98{,}2$, $R_2 = 101{,}5$, $R_3 = 99{,}8$, $R_4 = 100{,}3$, $R_5 = 100{,}2$.',
      schema: null,
      tasks: [
        'Calculer la valeur moyenne $\\bar{R}$.',
        'Calculer l\'écart-type expérimental $s$ de la série de mesures.',
        'Calculer l\'incertitude type A $u_A = s/\\sqrt{n}$ et exprimer le résultat final sous la forme $\\bar{R} \\pm 2u_A$ (intervalle de confiance 95%).'
      ],
      solutions: [
        '$\\bar{R} = \\dfrac{98{,}2 + 101{,}5 + 99{,}8 + 100{,}3 + 100{,}2}{5} = \\dfrac{500{,}0}{5} = 100{,}0$ Ω.',
        'Écarts : $(-1{,}8)^2 + (1{,}5)^2 + (-0{,}2)^2 + (0{,}3)^2 + (0{,}2)^2 = 3{,}24 + 2{,}25 + 0{,}04 + 0{,}09 + 0{,}04 = 5{,}66$. $s = \\sqrt{5{,}66/(5-1)} = \\sqrt{1{,}415} \\approx 1{,}19$ Ω.',
        '$u_A = s/\\sqrt{5} = 1{,}19/2{,}236 \\approx 0{,}53$ Ω. Résultat : $R = 100{,}0 \\pm 1{,}1$ Ω (95%).'
      ],
      finalAnswer: '$R = 100{,}0 \\pm 1{,}1$ Ω (à 95% de confiance)'
    },

    evaluation: {
      title: 'Évaluation — Statistiques et Calculs d\'Incertitudes',
      duration: '40 min',
      questions: [
        {
          statement: 'On effectue $n = 16$ mesures d\'une tension et on obtient un écart-type $s = 0{,}8$ V. Calculer l\'incertitude type A $u_A = s/\\sqrt{n}$ (en V).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'V',
          points: 2,
          correction: '$u_A = \\dfrac{s}{\\sqrt{n}} = \\dfrac{0{,}8}{\\sqrt{16}} = \\dfrac{0{,}8}{4} = 0{,}2$ V.'
        },
        {
          statement: 'Pour l\'écart-type d\'un échantillon de $n$ mesures, on divise par $(n-1)$ et non par $n$ car :',
          type: 'multiple-choice',
          options: ['Cela simplifie les calculs', 'C\'est la correction de Bessel : $(n-1)$ donne un estimateur non biaisé de la variance', 'C\'est une convention arbitraire', 'Diviser par $n$ donnerait une valeur trop grande'],
          answer: 1,
          points: 2,
          correction: 'La moyenne $\\bar{x}$ est elle-même estimée à partir de l\'échantillon, ce qui "consomme" un degré de liberté. Diviser par $(n-1)$ (correction de Bessel) donne un estimateur non biaisé de la variance de la population. Diviser par $n$ sous-estimerait systématiquement la variance.'
        },
        {
          statement: 'Cinq mesures de masse donnent (en g) : $50{,}2$ ; $49{,}8$ ; $50{,}0$ ; $50{,}4$ ; $49{,}6$. Calculer la moyenne $\\bar{x}$.',
          type: 'numeric',
          answer: 50.0,
          tolerance: 0.01,
          unit: 'g',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{50{,}2 + 49{,}8 + 50{,}0 + 50{,}4 + 49{,}6}{5} = \\dfrac{250{,}0}{5} = 50{,}0$ g.'
        },
        {
          statement: 'L\'incertitude élargie avec facteur $k = 2$ correspond à un intervalle de confiance d\'environ :',
          type: 'multiple-choice',
          options: ['$68\\%$', '$90\\%$', '$95\\%$', '$99\\%$'],
          answer: 2,
          points: 2,
          correction: 'Conventionnellement : $k = 1 \\to 68\\%$, $k = 2 \\to 95\\%$, $k = 3 \\to 99\\%$. Ces valeurs correspondent aux quantiles de la loi normale.'
        },
        {
          statement: 'On mesure $n = 25$ fois une résistance. $\\bar{R} = 47{,}0$ Ω, $s = 1{,}0$ Ω. Exprimer le résultat avec incertitude élargie à $95\\%$ ($k = 2$). Quelle est la demi-largeur de l\'intervalle (en Ω) ?',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: 'Ω',
          points: 2,
          correction: '$u_A = s/\\sqrt{n} = 1{,}0/\\sqrt{25} = 0{,}2$ Ω. Demi-largeur $= k \\times u_A = 2 \\times 0{,}2 = 0{,}4$ Ω. Résultat : $R = 47{,}0 \\pm 0{,}4$ Ω (à $95\\%$).'
        }
      ]
    }
  },

    {
    id: 'bts-loi-normale',
    level: 3, subject: 'maths',
    icon: '🔔',
    title: 'Loi normale',
    subtitle: 'Distribution de Gauss, intervalles de confiance, z-score',
    keywords: ['Loi normale', 'Gauss', 'Espérance', 'Écart-type', 'z-score', 'Intervalle de confiance'],
    physics: 'Analyse des erreurs de mesure, contrôle qualité, distribution des résultats expérimentaux',

    cours: {
      intro: 'La loi normale est omniprésente car le théorème central limite garantit que la MOYENNE d\'un grand nombre de variables indépendantes converge vers une loi normale — quelle que soit la distribution d\'origine. En contrôle qualité, les cotes d\'usinage, les résistances de composants, les erreurs de pesée suivent toutes une loi normale. La règle des $68$-$95$-$99{,}7\\%$ (une, deux, trois fois $\\sigma$) est à connaître par cœur. La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi $\\mathcal{N}(\\mu,\\sigma^2)$ à la loi standard $\\mathcal{N}(0,1)$, dont on lit les probabilités dans une table unique. Pour les petits échantillons ($n < 30$), la loi de Student remplace la loi normale : ses queues sont plus épaisses, ce qui élargit les intervalles de confiance.',
      definitions: [
        { term: 'Espérance $\\mu$', def: 'Centre de la distribution normale. C\'est la valeur la plus probable (mode = médiane = moyenne). La courbe de Gauss est symétrique autour de $\\mu$.' },
        { term: 'Écart-type $\\sigma$', def: 'Largeur de la cloche de Gauss. $68\\%$ des valeurs tombent dans $[\\mu - \\sigma ; \\mu + \\sigma]$. Plus $\\sigma$ est petit, plus la distribution est concentrée.' },
        { term: 'Centration-réduction (z-score)', def: 'Transformation $Z = (X - \\mu)/\\sigma$ qui ramène toute loi $\\mathcal{N}(\\mu, \\sigma^2)$ à la loi standard $\\mathcal{N}(0, 1)$, permettant d\'utiliser une table unique.' },
        { term: 'Intervalle de confiance', def: 'Intervalle $[\\bar{x} - z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n} ;\\ \\bar{x} + z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}]$ qui contient la vraie moyenne $\\mu$ avec une probabilité donnée (95% pour $z = 1{,}96$).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Centrer-réduire : $Z = \\dfrac{X - \\mu}{\\sigma}$ suit une loi normale centrée réduite $\\mathcal{N}(0, 1)$. <strong>Exemple :</strong> Si $X \\sim \\mathcal{N}(80, 10^2)$ et $x = 95$ → $Z = (95 - 80)/10 = 1{,}5$.',
          'Lire la table de la loi normale : $P(Z \\leq z) = \\Phi(z)$. La table donne les probabilités pour des valeurs positives. <strong>Exemple :</strong> $P(Z \\leq 1{,}5) = \\Phi(1{,}5) \\approx 0{,}9332$, donc $P(X \\leq 95) \\approx 93{,}3\\%$.',
          'Intervalle de confiance à 95 % : $\\left[\\bar{x} - 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\ ;\\ \\bar{x} + 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\right]$ (ou $\\pm 2\\sigma$ en approximation). <strong>Exemple :</strong> $\\bar{x} = 80$, $\\sigma = 10$, $n = 25$ → IC = $[80 - 1{,}96 \\times 2 ;\\ 80 + 1{,}96 \\times 2] = [76{,}08 ;\\ 83{,}92]$.'
        ]
      },
      example: {
        statement: 'Des résistances de $470$ Ω sont fabriquées avec une tolérance annoncée à $5\\%$. Un contrôle sur un échantillon de $n = 36$ pièces donne $\\bar{x} = 468$ Ω et $\\sigma = 12$ Ω. Calculer l\'intervalle de confiance à $95\\%$ pour la vraie moyenne $\\mu$. Les résistances sont-elles conformes ?',
        steps: [
          'La tolérance $5\\%$ de $470$ Ω donne l\'intervalle nominal $[446{,}5 ;\\ 493{,}5]$ Ω.',
          'Demi-largeur de l\'IC : $1{,}96 \\times \\sigma/\\sqrt{n} = 1{,}96 \\times 12/\\sqrt{36} = 1{,}96 \\times 2 = 3{,}92$ Ω.',
          'IC à $95\\%$ : $[468 - 3{,}92 ;\\ 468 + 3{,}92] = [464{,}08 ;\\ 471{,}92]$ Ω.',
          'L\'IC est entièrement inclus dans l\'intervalle de tolérance $[446{,}5 ;\\ 493{,}5]$ : la production est conforme à $95\\%$.'
        ],
        answer: 'IC = $[464{,}08 ;\\ 471{,}92]$ Ω. La production est conforme car l\'IC est inclus dans la tolérance $\\pm 5\\%$.'
      },
      formulas: [
        '$Z = \\dfrac{X - \\mu}{\\sigma}$',
        '$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$',
        '$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$',
        '$\\text{IC}_{95\\%} = \\bar{x} \\pm 1{,}96 \\dfrac{\\sigma}{\\sqrt{n}}$'
      ],
      recap: [
        'La règle $68$-$95$-$99{,}7$ : $\\pm 1\\sigma$ contient $68\\%$, $\\pm 2\\sigma$ contient $95\\%$, $\\pm 3\\sigma$ contient $99{,}7\\%$ des valeurs.',
        'La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi normale à $\\mathcal{N}(0,1)$ pour utiliser une table unique.',
        'L\'intervalle de confiance se rétrécit quand $n$ augmente (en $1/\\sqrt{n}$) ou quand $\\sigma$ diminue.',
        'Pour $n < 30$, utiliser la loi de Student (queues plus épaisses que la loi normale).'
      ],
      piege: 'La loi normale est définie par $\\mu$ (espérance = centre) et $\\sigma$ (écart-type = largeur). Ne pas confondre $\\sigma$ (paramètre de la population) et $s$ (écart-type de l\'échantillon, estimateur de $\\sigma$). Pour un petit échantillon ($n < 30$), on utilise la loi de Student au lieu de la loi normale.'
    },

    quiz: [
      {
        q: 'Une variable suit $\\mathcal{N}(100, 15^2)$. Quel est l\'intervalle contenant 95 % des valeurs ?',
        options: ['$[85 ; 115]$', '$[70 ; 130]$', '$[55 ; 145]$', '$[100 ; 130]$'],
        answer: 1,
        correction: '$\\mu \\pm 2\\sigma = 100 \\pm 2 \\times 15 = 100 \\pm 30$. Intervalle $[70 ; 130]$.'
      },
      {
        q: 'Pour $X \\sim \\mathcal{N}(50\\,;\\,4^2)$, un étudiant calcule $P(48 \\leq X \\leq 52)$ et écrit : "$P(-0{,}5 \\leq Z \\leq 0{,}5) = 2 \\times P(Z \\leq -0{,}5) = 2 \\times 0{,}309 = 0{,}618$." Quelle est son erreur ?',
        options: [
          'Il a calculé $2\\Phi(-0{,}5)$ au lieu de $\\Phi(0{,}5) - \\Phi(-0{,}5) = 0{,}691 - 0{,}309 = 0{,}382$',
          'Il a raison : par symétrie $P(-0{,}5 \\leq Z \\leq 0{,}5) = 2 \\times 0{,}309$',
          'Le z-score est faux : $z = (48-50)/4 = -2$, pas $-0{,}5$',
          '$P(-0{,}5 \\leq Z \\leq 0{,}5) = 1 - 2 \\times 0{,}309 = 0{,}382$. L\'étudiant a raison sur le résultat.'
        ],
        answer: 0,
        correction: '$P(a \\leq Z \\leq b) = \\Phi(b) - \\Phi(a)$. Ici : $\\Phi(0{,}5) - \\Phi(-0{,}5) = 0{,}691 - 0{,}309 = 0{,}382$. L\'erreur : l\'étudiant a écrit $2\\Phi(-0{,}5)$ en multipliant par la valeur en $-0{,}5$ (probabilité de queue gauche), alors qu\'il fallait soustraire les deux bornes. La symétrie dit $\\Phi(-z) = 1-\\Phi(z)$, donc $2\\Phi(-0{,}5) = 2\\times(1-0{,}691) \\neq \\Phi(0{,}5)-\\Phi(-0{,}5)$.'
      },
      {
        q: 'Un échantillon de $n = 100$ mesures donne $\\bar{x} = 200$ et $s = 10$. Quel est l\'intervalle de confiance à 95 % pour $\\mu$ ?',
        options: ['$[180 ; 220]$', '$[198 ; 202]$', '$[190 ; 210]$', '$[196 ; 204]$'],
        answer: 3,
        correction: '$\\text{IC}_{95\\%} = 200 \\pm 1{,}96 \\times \\dfrac{10}{\\sqrt{100}} = 200 \\pm 1{,}96 \\approx [198{,}04 ; 201{,}96] \\approx [198 ; 202]$. Mais l\'option la plus proche avec $\\pm 2 \\times 10/\\sqrt{100} = \\pm 2$ → $[198;202]$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const mu = rand(50, 200), sigma = rand(5, 20);
        const k = pick([1, 2, 3]);
        const pcts = [68.27, 95.45, 99.73];
        return {
          statement: `Une variable suit $\\mathcal{N}(${mu}, ${sigma}^2)$. Quelle est la borne supérieure de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`,
          answer: mu + k * sigma,
          tolerance: 0,
          unit: '',
          hint: `$\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma}$.`,
          solution: [
            `Borne supérieure : $\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma} = ${mu + k * sigma}$`,
            `Cet intervalle contient environ $${pcts[k-1]}\\%$ des valeurs.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une machine remplit des bouteilles avec $\\mu = 500\\,\\text{mL}$ et $\\sigma = 5\\,\\text{mL}$ (loi normale). Une bouteille est rejetée si elle contient moins de $490\\,\\text{mL}$ ou plus de $510\\,\\text{mL}$.',
      schema: null,
      tasks: [
        'Calculer le z-score des bornes $490$ mL et $510$ mL.',
        'En utilisant $P(-2 \\leq Z \\leq 2) \\approx 95{,}45\\%$, estimer le pourcentage de bouteilles conformes.',
        'Sur $10000$ bouteilles produites, combien sont rejetées ?'
      ],
      solutions: [
        '$Z_{490} = \\dfrac{490 - 500}{5} = -2$ et $Z_{510} = \\dfrac{510 - 500}{5} = +2$.',
        '$P(490 \\leq X \\leq 510) = P(-2 \\leq Z \\leq 2) \\approx 95{,}45\\%$ de bouteilles conformes.',
        'Rejetées : $(100 - 95{,}45)\\% \\times 10000 = 4{,}55\\% \\times 10000 \\approx 455$ bouteilles.'
      ],
      finalAnswer: '$\\approx 455$ bouteilles rejetées sur $10000$'
    },

    evaluation: {
      title: 'Évaluation — Loi normale',
      duration: '40 min',
      questions: [
        {
          statement: 'Une variable suit $\\mathcal{N}(50\\,;\\,8^2)$. Calculer le z-score de la valeur $x = 66$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$Z = \\dfrac{x - \\mu}{\\sigma} = \\dfrac{66 - 50}{8} = \\dfrac{16}{8} = 2$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(\\mu\\,;\\,\\sigma^2)$, l\'intervalle $[\\mu - 2\\sigma\\,;\\,\\mu + 2\\sigma]$ contient environ :',
          type: 'multiple-choice',
          options: ['$68\\%$ des valeurs', '$95\\%$ des valeurs', '$99{,}7\\%$ des valeurs', '$50\\%$ des valeurs'],
          answer: 1,
          points: 2,
          correction: 'Règle empirique $68$-$95$-$99{,}7$ : $\\pm 1\\sigma \\to 68{,}3\\%$, $\\pm 2\\sigma \\to 95{,}4\\%$, $\\pm 3\\sigma \\to 99{,}7\\%$.'
        },
        {
          statement: 'Un échantillon de $n = 64$ mesures donne $\\bar{x} = 120$ et $\\sigma = 16$. Calculer la demi-largeur de l\'intervalle de confiance à $95\\%$ : $1{,}96 \\times \\dfrac{\\sigma}{\\sqrt{n}}$.',
          type: 'numeric',
          answer: 3.92,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: 'Demi-largeur $= 1{,}96 \\times \\dfrac{16}{\\sqrt{64}} = 1{,}96 \\times \\dfrac{16}{8} = 1{,}96 \\times 2 = 3{,}92$. L\'IC est $[120 - 3{,}92\\,;\\,120 + 3{,}92] = [116{,}08\\,;\\,123{,}92]$.'
        },
        {
          statement: 'La centration-réduction $Z = \\dfrac{X - \\mu}{\\sigma}$ transforme $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ en :',
          type: 'multiple-choice',
          options: ['$Z \\sim \\mathcal{N}(\\mu, 1)$', '$Z \\sim \\mathcal{N}(0, \\sigma^2)$', '$Z \\sim \\mathcal{N}(0, 1)$', '$Z \\sim \\mathcal{N}(1, 0)$'],
          answer: 2,
          points: 2,
          correction: 'La centration-réduction ramène toute loi normale $\\mathcal{N}(\\mu, \\sigma^2)$ à la loi standard $\\mathcal{N}(0, 1)$, dont les probabilités se lisent dans une table unique.'
        },
        {
          statement: 'Des pièces usinées ont un diamètre $X \\sim \\mathcal{N}(20\\,;\\,0{,}5^2)$ mm. Quel pourcentage de pièces a un diamètre compris entre $19$ mm et $21$ mm ? (Utiliser la règle $\\pm 2\\sigma \\approx 95{,}4\\%$)',
          type: 'numeric',
          answer: 95.4,
          tolerance: 0.5,
          unit: '%',
          points: 1,
          correction: '$19 = 20 - 2 \\times 0{,}5 = \\mu - 2\\sigma$ et $21 = 20 + 2 \\times 0{,}5 = \\mu + 2\\sigma$. Donc $P(19 \\leq X \\leq 21) = P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$.'
        }
      ]
    }
  },

    {
    id: 'bts-fonctions-reelles',
    level: 3, subject: 'maths',
    icon: '📐',
    title: 'Fonctions d\'une variable réelle',
    subtitle: 'Révisions et compléments (limites, continuité, dérivée)',
    keywords: ['Fonction', 'Limite', 'Continuité', 'Dérivée', 'Tableau de variations'],
    physics: true,
    cours: {
      intro: 'En BTS, l\'étude complète d\'une fonction est un outil de modélisation : une fonction de coût, une loi de transfert, une réponse impulsionnelle — chacune nécessite domaine, limites, variations et asymptotes. Le domaine de définition est contraint par les dénominateurs ($\\neq 0$), les racines carrées ($\\geq 0$) et les logarithmes ($> 0$). Les asymptotes décrivent le comportement aux extrêmes : asymptote verticale là où la fonction "explose", horizontale si elle se stabilise. Attention : un point exclu du domaine ne génère pas toujours une asymptote verticale — si le numérateur s\'annule aussi, on obtient un "trou" (discontinuité effaçable) et non une asymptote. La règle de L\'Hôpital lève les formes indéterminées $0/0$ ou $\\infty/\\infty$ en dérivant numérateur et dénominateur séparément — elle est correcte mais souvent inutile si on sait factoriser.',
      definitions: [
        { term: 'Domaine de définition $D_f$', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Exclu : les valeurs qui annulent un dénominateur, qui rendent un radicande négatif, ou un argument de logarithme $\\leq 0$.' },
        { term: 'Asymptote horizontale', def: 'Droite $y = L$ telle que $\\lim_{x \\to \\pm\\infty} f(x) = L$. La courbe s\'en rapproche indéfiniment sans la toucher (en général).' },
        { term: 'Asymptote verticale', def: 'Droite $x = a$ telle que $\\lim_{x \\to a} f(x) = \\pm\\infty$. La courbe "explose" au voisinage de $a$.' },
        { term: 'Discontinuité effaçable (trou)', def: 'Point $x = a$ exclu du domaine mais où la limite de $f$ est finie. En prolongeant $f$ par cette limite, on obtient une fonction continue. Ce n\'est PAS une asymptote verticale.' }
      ],
      method: {
        title: 'Étude complète d\'une fonction',
        steps: [
          'Domaine : annuler les dénominateurs, conditions de la racine ou du logarithme. <strong>Exemple :</strong> $f(x) = \\ln(3x - 6)$ → condition $3x - 6 > 0$, soit $x > 2$ → $D_f = ]2 ; +\\infty[$.',
          'Limites aux bornes du domaine (et en $\\pm\\infty$). <strong>Exemple :</strong> $f(x) = \\frac{2x+1}{x-3}$ → $\\lim_{x \\to +\\infty} f(x) = 2$ (AH) et $\\lim_{x \\to 3} f(x) = \\pm\\infty$ (AV en $x=3$).',
          'Signe de la dérivée $f\'$ pour les variations ; tableau de variations. <strong>Exemple :</strong> $f(x) = x^2 - 4x$ → $f\'(x) = 2x - 4 = 0$ en $x = 2$. $f\'(x) < 0$ pour $x < 2$ (décroissante), $f\'(x) > 0$ pour $x > 2$ (croissante). Minimum en $x = 2$ : $f(2) = -4$.',
          'Asymptotes : horizontale si $\\lim_{x\\to\\pm\\infty}f(x)=L$ ; verticale si $\\lim_{x\\to a}f(x)=\\pm\\infty$. <strong>Exemple :</strong> $f(x) = \\frac{x^2+1}{x} = x + \\frac{1}{x}$ → pas d\'AH, mais asymptote oblique $y = x$ (car $f(x) - x = 1/x \\to 0$).'
        ]
      },
      example: {
        statement: 'Un convertisseur électronique a un rendement modélisé par $\\eta(x) = \\dfrac{100x}{x + 5}$ (en %, $x > 0$ étant la charge en ampères). Étudier cette fonction : domaine, limite, asymptote et sens de variation.',
        steps: [
          'Domaine : $x + 5 \\neq 0$ et $x > 0$ (charge positive), donc $D_f = ]0 ; +\\infty[$.',
          'Limite : $\\lim_{x \\to +\\infty} \\frac{100x}{x+5} = \\lim \\frac{100}{1+5/x} = 100$. Asymptote horizontale $y = 100$ : le rendement ne dépasse jamais $100\\%$.',
          'Dérivée : $\\eta\'(x) = \\frac{100(x+5) - 100x}{(x+5)^2} = \\frac{500}{(x+5)^2} > 0$ pour tout $x > 0$.',
          'La fonction est strictement croissante sur $]0;+\\infty[$ : le rendement augmente avec la charge mais sature vers $100\\%$.'
        ],
        answer: 'Le rendement $\\eta$ est croissant de $0$ vers $100\\%$ (asymptote horizontale). Il n\'atteint jamais $100\\%$ mais s\'en rapproche indéfiniment.'
      },
      formulas: [
        'Asymptote oblique $y=ax+b$ : $a=\\lim_{x\\to\\infty}\\frac{f(x)}{x}$, $b=\\lim_{x\\to\\infty}(f(x)-ax)$',
        '$(e^x)\' = e^x$, $(\\ln x)\'=\\frac{1}{x}$, $(x^n)\'=nx^{n-1}$',
        'Règle de L\'Hôpital : $\\lim\\frac{f}{g}\\xrightarrow[0/0 \\text{ ou } \\infty/\\infty]{}\\lim\\frac{f\'}{g\'}$'
      ],
      recap: [
        'Le domaine est contraint par 3 interdits : dénominateur $= 0$, radicande $< 0$, argument du $\\ln \\leq 0$.',
        'Bien distinguer asymptote verticale ($\\lim = \\pm\\infty$) et trou (discontinuité effaçable, $\\lim$ finie).',
        'Le signe de $f\'$ donne directement les intervalles de croissance/décroissance.',
        'En ingénierie, les asymptotes horizontales modélisent souvent une saturation (rendement, température d\'équilibre, vitesse limite).'
      ],
      piege: 'Une asymptote verticale en $x=a$ implique que $a$ est exclu du domaine, mais un point exclu du domaine ne donne pas forcément une asymptote verticale (peut être un trou).'
    },
    quiz: [
      { q: 'Le domaine de $f(x)=\\ln(2x-4)$ est :', options: ['$\\mathbb{R}$', '$]2;+\\infty[$', '$[2;+\\infty[$', '$]0;+\\infty[$'], answer: 1, correction: '$2x-4>0 \\Rightarrow x>2$. Domaine : $]2;+\\infty[$.' },
      { q: '$\\lim_{x\\to+\\infty}\\frac{3x^2+1}{x^2-2}=$', options: ['$0$', '$+\\infty$', '$3$', '$1$'], answer: 2, correction: 'Termes dominants : $\\frac{3x^2}{x^2}=3$.' },
      { q: 'La fonction $f(x)=\\dfrac{x^2-4}{x-2}$ admet-elle une asymptote verticale en $x=2$ ?', options: ['Non : après simplification, $f(x)=x+2$ pour $x\\ne2$. Il y a un "trou" en $x=2$, pas une asymptote', 'Oui : $f$ n\'est pas définie en $x=2$, donc il y a une asymptote verticale', 'Oui : $\\lim_{x\\to2}f(x)=+\\infty$', 'Non car le dénominateur n\'est pas un polynôme irréductible'], answer: 0, correction: 'Une asymptote verticale en $x=a$ suppose $\\lim_{x\\to a}f(x)=\\pm\\infty$. Ici $f(x)=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\ne2$ : la limite vaut $4$ (finie). Il y a une discontinuité effaçable (trou) en $x=2$, pas une asymptote. Si on prolonge $f$ en posant $f(2)=4$, la fonction devient continue. Contre-exemple d\'asymptote vraie : $g(x)=\\frac{1}{x-2}\\to\\pm\\infty$ en $x=2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6), b = rand(1, 4);
        return {
          statement: `Calculer $\\lim_{x\\to+\\infty}\\dfrac{${a}x+${b}}{x+1}$.`,
          answer: a,
          tolerance: 0,
          unit: '',
          hint: 'Divise numérateur et dénominateur par $x$.',
          solution: [`$\\frac{${a}x+${b}}{x+1}=\\frac{${a}+${b}/x}{1+1/x}\\to${a}$`]
        };
      }
    },
    probleme: {
      context: 'Le coût total de production de $x$ unités est $C(x)=\\frac{2x^2+100}{x}$ (en €, $x>0$).',
      tasks: [
        'Calculer le coût moyen $c(x)=C(x)/x$ et étudier sa limite quand $x\\to+\\infty$.',
        'Calculer $c\'(x)$ et trouver le minimum du coût moyen.',
        'Quelle quantité minimise le coût moyen, et quelle est sa valeur ?'
      ],
      solutions: [
        '$c(x)=\\frac{C(x)}{x}=\\frac{2x^2+100}{x^2}=2+\\frac{100}{x^2}\\to 2$ quand $x\\to+\\infty$.',
        '$c\'(x)=-\\frac{200}{x^3}<0$ pour tout $x>0$ : $c$ est décroissante, sans minimum fini.',
        'Le coût moyen tend vers $2$ €/unité mais ne l\'atteint jamais : produire le plus possible minimise $c$.'
      ],
      finalAnswer: '$c(x)\\to 2$ €/unité. Pas de minimum : plus on produit, plus le coût moyen se rapproche de $2$ €.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions d\'une variable réelle',
      duration: '40 min',
      questions: [
        {
          statement: 'Déterminer le domaine de définition de $f(x) = \\ln(3x - 6)$. Quelle est la borne inférieure du domaine ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$3x - 6 > 0 \\Rightarrow x > 2$. Le domaine est $]2\\,;\\,+\\infty[$. La borne inférieure (exclue) est $2$.'
        },
        {
          statement: 'La fonction $f(x) = \\dfrac{x^2 - 9}{x - 3}$ admet-elle une asymptote verticale en $x = 3$ ?',
          type: 'multiple-choice',
          options: ['Oui, car $f$ n\'est pas définie en $x = 3$', 'Non : $f(x) = x + 3$ pour $x \\neq 3$, c\'est un trou (discontinuité effaçable)', 'Oui, car $\\lim_{x \\to 3} f(x) = +\\infty$', 'Non, car $f(3) = 0$'],
          answer: 1,
          points: 2,
          correction: '$f(x) = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ pour $x \\neq 3$. Donc $\\lim_{x \\to 3} f(x) = 6$ (limite finie). Il n\'y a pas d\'asymptote verticale, mais une discontinuité effaçable (trou) en $x = 3$.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{5x^2 - 3x + 1}{2x^2 + x - 4}$.',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Les termes dominants sont $5x^2$ au numérateur et $2x^2$ au dénominateur. $\\lim_{x \\to +\\infty} \\dfrac{5x^2}{2x^2} = \\dfrac{5}{2} = 2{,}5$.'
        },
        {
          statement: 'Si $f\'(x) > 0$ sur $]a\\,;\\,b[$, la fonction $f$ est :',
          type: 'multiple-choice',
          options: ['Décroissante sur $]a\\,;\\,b[$', 'Croissante sur $]a\\,;\\,b[$', 'Constante sur $]a\\,;\\,b[$', 'Concave sur $]a\\,;\\,b[$'],
          answer: 1,
          points: 2,
          correction: 'Si la dérivée $f\'(x)$ est strictement positive sur un intervalle, la fonction est strictement croissante sur cet intervalle. C\'est le lien fondamental entre le signe de la dérivée et les variations.'
        },
        {
          statement: 'Soit $f(x) = \\dfrac{4x + 1}{x - 2}$. Calculer la valeur de l\'asymptote horizontale quand $x \\to +\\infty$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\lim_{x \\to +\\infty} \\dfrac{4x + 1}{x - 2} = \\lim_{x \\to +\\infty} \\dfrac{4 + 1/x}{1 - 2/x} = \\dfrac{4}{1} = 4$. L\'asymptote horizontale est $y = 4$.'
        }
      ]
    }
  },

    {
    id: 'bts-derivation-appliquee',
    level: 3, subject: 'maths',
    icon: '💹',
    title: 'Dérivation appliquée',
    subtitle: 'Coûts marginaux, optimisation économique',
    keywords: ['Coût marginal', 'Optimisation', 'Dérivée', 'Maximum de profit', 'Élasticité'],
    physics: false,
    cours: {
      intro: 'En économie et gestion, chaque dérivée porte un nom métier : $C\'(x)$ est le coût marginal (coût supplémentaire de la $x$-ième unité), $R\'(x)$ est la recette marginale. Le profit $\\Pi = R - C$ est maximisé quand $R\'(x) = C\'(x)$ — c\'est-à-dire quand il n\'est plus rentable de produire une unité supplémentaire. ATTENTION : $R(x) = C(x)$ est le SEUIL DE RENTABILITÉ (profit nul), pas la condition de maximum — confondre les deux est une erreur classique en gestion. La dérivée seconde $\\Pi\'\'(x_0) < 0$ confirme que l\'extremum est bien un maximum (et non un minimum). En pratique, la quantité optimale doit toujours être entière et positive : si $x^* = 4{,}7$, on compare $\\Pi(4)$ et $\\Pi(5)$.',
      definitions: [
        { term: 'Coût marginal $C_m(x) = C\'(x)$', def: 'Coût supplémentaire engendré par la production d\'une unité de plus. C\'est la dérivée de la fonction de coût total.' },
        { term: 'Recette marginale $R_m(x) = R\'(x)$', def: 'Recette supplémentaire apportée par la vente d\'une unité de plus. C\'est la dérivée de la fonction de recette totale.' },
        { term: 'Seuil de rentabilité', def: 'Quantité $x$ telle que $R(x) = C(x)$, soit $\\Pi(x) = 0$. En dessous : perte ; au-dessus : bénéfice. Ne pas confondre avec le maximum de profit.' },
        { term: 'Profit maximal', def: 'Atteint quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, c\'est-à-dire quand la recette marginale égale le coût marginal. Vérifier $\\Pi\'\'(x) < 0$ pour confirmer le maximum.' }
      ],
      method: {
        title: 'Optimiser une fonction économique',
        steps: [
          'Définir la fonction à optimiser (profit, coût, recette) sur son domaine. <strong>Exemple :</strong> $R(x) = 20x$ (prix unitaire $20$ €), $C(x) = x^2 + 4x + 30$. Profit : $\\Pi(x) = -x^2 + 16x - 30$.',
          'Calculer la dérivée et résoudre $f\'(x)=0$. <strong>Exemple :</strong> $\\Pi\'(x) = -2x + 16 = 0 \\Rightarrow x^* = 8$ unités.',
          'Vérifier que c\'est bien un maximum (ou minimum) par le signe de $f\'$ ou $f\'\'$. <strong>Exemple :</strong> $\\Pi\'\'(x) = -2 < 0$ : c\'est bien un maximum.',
          'Interpréter le résultat en unités économiques. <strong>Exemple :</strong> $\\Pi(8) = -64 + 128 - 30 = 34$ €. Produire $8$ unités maximise le profit à $34$ €.'
        ]
      },
      example: {
        statement: 'Une PME fabrique des capteurs. Le coût total est $C(x) = 0{,}5x^2 + 3x + 100$ € et le prix de vente unitaire est $p = 25$ € ($x$ = nombre de capteurs). Déterminer la quantité optimale et le profit maximal.',
        steps: [
          'Recette : $R(x) = 25x$.',
          'Profit : $\\Pi(x) = R(x) - C(x) = 25x - 0{,}5x^2 - 3x - 100 = -0{,}5x^2 + 22x - 100$.',
          'Dérivée : $\\Pi\'(x) = -x + 22 = 0 \\Rightarrow x^* = 22$ capteurs.',
          'Vérification : $\\Pi\'\'(x) = -1 < 0$ → maximum confirmé.',
          'Profit maximal : $\\Pi(22) = -0{,}5 \\times 484 + 22 \\times 22 - 100 = -242 + 484 - 100 = 142$ €.'
        ],
        answer: 'Produire $22$ capteurs pour un profit maximal de $142$ €. Le coût marginal au point optimal vaut $C\'(22) = 22 + 3 = 25$ €/unité, qui est bien égal au prix de vente.'
      },
      formulas: [
        'Coût marginal : $C_m(x)=C\'(x)$',
        'Recette marginale : $R_m(x)=R\'(x)$',
        'Profit maximal : $R\'(x)=C\'(x)$',
        'Profit : $\\Pi(x)=R(x)-C(x)$'
      ],
      recap: [
        'Le profit est maximal quand $R\'(x) = C\'(x)$ (recette marginale = coût marginal), pas quand $R(x) = C(x)$ (seuil de rentabilité).',
        'Toujours vérifier la nature de l\'extremum : $\\Pi\'\'(x^*) < 0$ confirme un maximum, $> 0$ un minimum.',
        'Au point optimal, le coût marginal est exactement égal au prix de vente (si prix constant).',
        'La quantité optimale doit être un entier positif : si $x^* = 4{,}7$, comparer $\\Pi(4)$ et $\\Pi(5)$.'
      ],
      piege: 'Vérifier toujours le domaine de validité : une quantité ne peut pas être négative. Un extremum hors du domaine physique est sans intérêt économique.'
    },
    quiz: [
      { q: 'Une entreprise a recette $R(x)$ et coût $C(x)$. Un étudiant dit : "Le profit est maximal quand $R(x) = C(x)$." Quelle est son erreur ?', options: ['$R(x)=C(x)$ est le SEUIL DE RENTABILITÉ (profit nul). Le maximum est quand $R\'(x)=C\'(x)$ (recette marginale = coût marginal)', 'L\'étudiant a raison : $R=C$ annule le profit, donc le maximise', 'Le maximum est quand $R\'(x)=0$ et $C\'(x)=0$ séparément', '$R(x)=C(x)$ donne le minimum du profit, pas le maximum'], answer: 0, correction: '$\\Pi(x)=R(x)-C(x)$. Le profit est NUL (pas maximum) quand $R=C$. Le maximum est où $\\Pi\'=0$, soit $R\'(x)=C\'(x)$ : la recette marginale égale le coût marginal. L\'intuition : tant que produire une unité de plus rapporte plus qu\'elle ne coûte ($R\'(x)>C\'(x)$), on continue. On s\'arrête quand les deux sont égaux.' },
      { q: 'Le profit est maximal quand :', options: ['$C(x)$ est minimal', '$R(x)$ est maximal', '$R\'(x)=C\'(x)$', '$R(x)=C(x)$'], answer: 2, correction: 'Le profit $\\Pi=R-C$ est stationnaire quand $\\Pi\'=R\'-C\'=0$, soit $R\'=C\'$.' },
      { q: 'Si $\\Pi\'(x)>0$ pour $x<5$ et $\\Pi\'(x)<0$ pour $x>5$, le profit est maximisé en :', options: ['$x=0$', '$x=5$', '$x=+\\infty$', 'Aucun maximum'], answer: 1, correction: '$\\Pi\'$ change de signe de $+$ à $-$ en $x=5$ : maximum en $x=5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), b = rand(3, 8);
        return {
          statement: `Le profit est $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€). Trouver la quantité $x^*$ qui maximise le profit.`,
          answer: b,
          tolerance: 0,
          unit: 'unités',
          hint: `Résoudre $\\Pi'(x)=0$ : $-${2*a}x+${2*a*b}=0$.`,
          solution: [`$\\Pi'(x)=-${2*a}x+${2*a*b}=0 \\Rightarrow x=${b}$`]
        };
      }
    },
    probleme: {
      context: 'Une entreprise a pour coût total $C(x)=0{,}5x^2+2x+50$ et vend à prix unitaire $p=10-0{,}2x$ (en €, $x\\ge0$).',
      tasks: [
        'Exprimer la recette totale $R(x)$ et le profit $\\Pi(x)$.',
        'Calculer $\\Pi\'(x)$ et la quantité optimale.',
        'Calculer le profit maximum.'
      ],
      solutions: [
        '$R(x)=x\\cdot p=(10-0{,}2x)x=10x-0{,}2x^2$. $\\Pi(x)=R-C=10x-0{,}2x^2-0{,}5x^2-2x-50=-0{,}7x^2+8x-50$.',
        '$\\Pi\'(x)=-1{,}4x+8=0 \\Rightarrow x=\\frac{8}{1{,}4}\\approx5{,}71$.',
        '$\\Pi(5{,}71)\\approx-0{,}7\\times32{,}6+8\\times5{,}71-50\\approx-22{,}8+45{,}7-50=-27{,}1$. Perte : ce modèle n\'est pas rentable !'
      ],
      finalAnswer: 'Optimum $x\\approx5{,}7$ unités, mais $\\Pi_{max}\\approx-27$ € : production non rentable à ces coûts.'
    },

    evaluation: {
      title: 'Évaluation — Dérivation appliquée',
      duration: '40 min',
      questions: [
        {
          statement: 'Le profit d\'une entreprise est $\\Pi(x) = -2x^2 + 24x - 50$ (en k€). Calculer la quantité $x^*$ qui maximise le profit.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'unités',
          points: 2,
          correction: '$\\Pi\'(x) = -4x + 24 = 0 \\Rightarrow x^* = 6$. On vérifie : $\\Pi\'\'(x) = -4 < 0$ donc c\'est bien un maximum.'
        },
        {
          statement: 'Le profit est maximal quand :',
          type: 'multiple-choice',
          options: ['La recette est maximale', 'Le coût est minimal', 'La recette marginale égale le coût marginal : $R\'(x) = C\'(x)$', 'La recette égale le coût : $R(x) = C(x)$'],
          answer: 2,
          points: 2,
          correction: '$\\Pi(x) = R(x) - C(x)$. Le profit est stationnaire quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, soit $R\'(x) = C\'(x)$. Attention : $R(x) = C(x)$ est le seuil de rentabilité (profit nul), pas la condition de maximum.'
        },
        {
          statement: 'Le coût total est $C(x) = 0{,}1x^3 - 1{,}5x^2 + 10x + 20$. Calculer le coût marginal $C\'(x)$ pour $x = 5$ (en €/unité).',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.01,
          unit: '€/unité',
          points: 3,
          correction: '$C\'(x) = 0{,}3x^2 - 3x + 10$. Pour $x = 5$ : $C\'(5) = 0{,}3 \\times 25 - 3 \\times 5 + 10 = 7{,}5 - 15 + 10 = 2{,}5$ €/unité.'
        },
        {
          statement: 'Si $\\Pi\'(x) > 0$ pour $x < 10$ et $\\Pi\'(x) < 0$ pour $x > 10$, alors $x = 10$ est :',
          type: 'multiple-choice',
          options: ['Un minimum de profit', 'Un maximum de profit', 'Un point d\'inflexion', 'Le seuil de rentabilité'],
          answer: 1,
          points: 1,
          correction: '$\\Pi\'$ passe du positif au négatif en $x = 10$ : le profit croît avant et décroît après. C\'est donc un maximum.'
        },
        {
          statement: 'Une entreprise vend au prix unitaire $p = 30$ € et a un coût total $C(x) = x^2 + 10x + 20$. Calculer le profit maximal (en €).',
          type: 'numeric',
          answer: 80,
          tolerance: 0.1,
          unit: '€',
          points: 2,
          correction: '$R(x) = 30x$. $\\Pi(x) = 30x - x^2 - 10x - 20 = -x^2 + 20x - 20$. $\\Pi\'(x) = -2x + 20 = 0 \\Rightarrow x = 10$. $\\Pi(10) = -100 + 200 - 20 = 80$ €.'
        }
      ]
    }
  },

    {
    id: 'bts-integrales-appliquees',
    level: 3, subject: 'maths',
    icon: '∫',
    title: 'Primitives et calcul intégral appliqué',
    subtitle: 'Intégrales définies, aires, valeur moyenne',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Valeur moyenne', 'Intégration par parties'],
    physics: true,
    cours: {
      intro: 'L\'intégrale définie est l\'outil de l\'accumulation : distance = $\\int v\\,dt$, charge électrique = $\\int i\\,dt$, énergie = $\\int p\\,dt$, revenu cumulé = $\\int r(t)\\,dt$. Elle calcule une AIRE ALGÉBRIQUE : négative si $f < 0$. Pour l\'aire géométrique réelle (toujours positive), il faut découper l\'intervalle là où $f$ change de signe et prendre la valeur absolue de chaque morceau. La valeur moyenne $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ est fondamentale en électronique AC : la valeur efficace (RMS) d\'un signal est $U_{eff} = \\sqrt{\\frac{1}{T}\\int_0^T u^2(t)\\,dt}$. L\'intégration par parties $\\int u\\,v\'\\,dx = [uv] - \\int u\'v\\,dx$ permet de traiter les produits $x e^x$, $x \\cos x$, etc.',
      definitions: [
        { term: 'Primitive $F$ de $f$', def: 'Fonction telle que $F\'(x) = f(x)$ sur un intervalle. Elle est unique à une constante près : si $F$ est une primitive, toute primitive s\'écrit $F + C$.' },
        { term: 'Intégrale définie $\\int_a^b f(x)\\,dx$', def: 'Aire algébrique entre la courbe $y = f(x)$, l\'axe $x$ et les droites $x = a$, $x = b$. Positive si $f \\geq 0$, négative si $f \\leq 0$.' },
        { term: 'Valeur moyenne $\\bar{f}$', def: 'Hauteur constante qui produirait la même aire : $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$. En électronique, la valeur moyenne d\'un signal AC symétrique est nulle.' },
        { term: 'Intégration par parties (IPP)', def: 'Technique pour intégrer un produit : $\\int u \\cdot v\'\\,dx = [u \\cdot v] - \\int u\' \\cdot v\\,dx$. On choisit $u$ et $v\'$ de sorte que $\\int u\'v$ soit plus simple que l\'intégrale de départ.' }
      ],
      method: {
        title: 'Calculer une intégrale définie',
        steps: [
          'Trouver une primitive $F$ de $f$ (antidérivée : $F\'=f$). <strong>Exemple :</strong> $f(x) = 3x^2$ → $F(x) = x^3$ (car $(x^3)\' = 3x^2$).',
          'Appliquer la formule : $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b)-F(a)$. <strong>Exemple :</strong> $\\int_1^3 3x^2\\,dx = [x^3]_1^3 = 27 - 1 = 26$.',
          'Valeur moyenne : $\\bar{f}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx$. <strong>Exemple :</strong> $\\bar{f} = \\frac{26}{3-1} = 13$.',
          'Intégration par parties : $\\int u\\,v\'\\,dx = [uv]-\\int u\'\\,v\\,dx$. <strong>Exemple :</strong> $\\int_0^1 x e^x\\,dx$ : $u = x$, $v\' = e^x$ → $[xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - (e - 1) = 1$.'
        ]
      },
      example: {
        statement: 'Le courant dans un circuit varie selon $i(t) = 2\\sin(100\\pi t)$ A pendant une demi-période ($t \\in [0 ; 0{,}01]$ s, soit $T/2 = 0{,}01$ s pour $f = 50$ Hz). Calculer la charge électrique $Q = \\int_0^{0{,}01} i(t)\\,dt$ transférée pendant cette demi-période.',
        steps: [
          'Primitive de $2\\sin(100\\pi t)$ : $F(t) = -\\frac{2}{100\\pi}\\cos(100\\pi t) = -\\frac{1}{50\\pi}\\cos(100\\pi t)$.',
          '$Q = \\left[-\\frac{1}{50\\pi}\\cos(100\\pi t)\\right]_0^{0{,}01}$.',
          '$Q = -\\frac{1}{50\\pi}\\cos(\\pi) - \\left(-\\frac{1}{50\\pi}\\cos(0)\\right)$.',
          '$Q = -\\frac{1}{50\\pi}(-1) + \\frac{1}{50\\pi}(1) = \\frac{1}{50\\pi} + \\frac{1}{50\\pi} = \\frac{2}{50\\pi} = \\frac{1}{25\\pi}$.',
          '$Q \\approx 0{,}0127$ C soit $12{,}7$ mC.'
        ],
        answer: '$Q = \\frac{1}{25\\pi} \\approx 12{,}7$ mC transférés pendant une demi-période.'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1}+C$ ($n\\ne-1$)',
        '$\\int e^x\\,dx = e^x+C$',
        '$\\int \\dfrac{1}{x}\\,dx = \\ln|x|+C$',
        '$\\bar{f}=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$'
      ],
      recap: [
        'L\'intégrale définie calcule une aire ALGÉBRIQUE (peut être négative). Pour l\'aire géométrique, prendre $\\int |f(x)|\\,dx$.',
        'La formule fondamentale $\\int_a^b f\\,dx = F(b) - F(a)$ nécessite de connaître une primitive $F$.',
        'La valeur moyenne $\\bar{f} = \\frac{1}{b-a}\\int_a^b f\\,dx$ est la hauteur du rectangle de même aire sur le même intervalle.',
        'En physique : $\\int v\\,dt$ = distance, $\\int i\\,dt$ = charge, $\\int p\\,dt$ = énergie. L\'intégrale traduit toujours une accumulation.'
      ],
      piege: '$\\int_a^b f(x)\\,dx$ peut être négative si $f<0$ sur $[a;b]$. Pour l\'aire géométrique (positive), prendre la valeur absolue ou découper l\'intervalle.'
    },
    quiz: [
      { q: '$\\int_0^2 3x^2\\,dx=$', options: ['$6$', '$8$', '$12$', '$4$'], answer: 1, correction: '$[x^3]_0^2=8-0=8$.' },
      { q: 'La valeur moyenne de $f(x)=2x$ sur $[1;3]$ est :', options: ['$4$', '$2$', '$3$', '$6$'], answer: 0, correction: '$\\bar{f}=\\frac{1}{2}\\int_1^3 2x\\,dx=\\frac{1}{2}[x^2]_1^3=\\frac{1}{2}(9-1)=4$.' },
      { q: 'Pour calculer l\'aire entre $y=x^2-4$ et l\'axe des abscisses sur $[-2;2]$, un étudiant calcule $\\int_{-2}^{2}(x^2-4)\\,dx=-\\dfrac{32}{3}$. L\'AIRE géométrique est-elle $-32/3$ ?', options: ['Non : l\'intégrale est correcte ($-32/3$) mais l\'aire géométrique est toujours positive : $|{-32/3}|=32/3\\approx10{,}67$ unités²', 'Oui, l\'aire est $-32/3$ car la courbe est sous l\'axe', 'L\'intégrale est fausse ; le calcul correct donne $0$ par symétrie', 'L\'aire est $0$ car le signe positif et négatif s\'annulent'], answer: 0, correction: 'Sur $[-2;2]$, $x^2-4\\leq0$ (la parabole est sous l\'axe $x$). L\'intégrale donne bien $-32/3$ — la valeur ALGÉBRIQUE, qui peut être négative. Mais l\'aire géométrique (une surface, toujours positive) vaut $|-32/3|=32/3$. Pour obtenir l\'aire d\'une région où $f$ est négative : $\\text{Aire}=\\int_a^b|f(x)|\\,dx=-\\int_a^bf(x)\\,dx$ quand $f\\leq0$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(a+1, a+4), n = rand(1, 3);
        const Fb = Math.pow(b, n+1)/(n+1), Fa = Math.pow(a, n+1)/(n+1);
        const ans = parseFloat((Fb - Fa).toFixed(4));
        return {
          statement: `Calculer $\\int_{${a}}^{${b}} x^${n}\\,dx$.`,
          answer: parseFloat(ans.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: `$\\int x^${n}dx=\\frac{x^{${n+1}}}{${n+1}}$. Évaluer entre $${a}$ et $${b}$.`,
          solution: [
            `$\\left[\\dfrac{x^{${n+1}}}{${n+1}}\\right]_{${a}}^{${b}}=\\dfrac{${b}^{${n+1}}}{${n+1}}-\\dfrac{${a}^{${n+1}}}{${n+1}}=${ans}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Le débit d\'eau dans un canal est $Q(t)=3t^2-12t+15$ (en m³/s, $t$ en h, $0\\le t\\le 4$).',
      tasks: [
        'Calculer le volume total d\'eau écoulé entre $t=0$ et $t=4$.',
        'Calculer la valeur moyenne du débit sur $[0;4]$.',
        'Sur quel intervalle le débit est-il minimal ?'
      ],
      solutions: [
        '$V=\\int_0^4(3t^2-12t+15)\\,dt=[t^3-6t^2+15t]_0^4=64-96+60=28$ m³.',
        '$\\bar{Q}=\\frac{28}{4}=7$ m³/s.',
        '$Q\'(t)=6t-12=0\\Rightarrow t=2$. $Q\'\'=6>0$ : minimum en $t=2$, $Q(2)=12-24+15=3$ m³/s.'
      ],
      finalAnswer: 'Volume écoulé : $28$ m³. Débit moyen : $7$ m³/s. Débit minimal : $3$ m³/s en $t=2$ h.'
    },

    evaluation: {
      title: 'Évaluation — Primitives et calcul intégral appliqué',
      duration: '40 min',
      questions: [
        {
          statement: 'Calculer $\\int_1^3 2x\\,dx$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$.'
        },
        {
          statement: 'La valeur moyenne de $f(x) = 6x^2$ sur $[0\\,;\\,2]$ est :',
          type: 'multiple-choice',
          options: ['$4$', '$8$', '$16$', '$24$'],
          answer: 1,
          points: 2,
          correction: '$\\bar{f} = \\dfrac{1}{2-0}\\int_0^2 6x^2\\,dx = \\dfrac{1}{2}[2x^3]_0^2 = \\dfrac{1}{2} \\times 16 = 8$.'
        },
        {
          statement: 'Calculer $\\int_0^1 e^{2x}\\,dx$ (arrondir à $0{,}01$). On donne $e^2 \\approx 7{,}389$.',
          type: 'numeric',
          answer: 3.19,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: '$\\int_0^1 e^{2x}\\,dx = \\left[\\dfrac{e^{2x}}{2}\\right]_0^1 = \\dfrac{e^2}{2} - \\dfrac{e^0}{2} = \\dfrac{7{,}389 - 1}{2} = \\dfrac{6{,}389}{2} \\approx 3{,}19$.'
        },
        {
          statement: '$\\int_a^b f(x)\\,dx$ peut être négative. Cela signifie que :',
          type: 'multiple-choice',
          options: ['Le calcul est faux', 'La fonction $f$ est négative sur tout $[a\\,;\\,b]$ ou la partie négative domine', 'L\'aire géométrique est négative', 'Les bornes sont inversées'],
          answer: 1,
          points: 1,
          correction: 'L\'intégrale définie calcule une aire ALGÉBRIQUE : les portions où $f < 0$ contribuent négativement. Si la partie négative domine, l\'intégrale totale est négative. L\'aire géométrique est toujours positive : $\\text{Aire} = \\int_a^b |f(x)|\\,dx$.'
        },
        {
          statement: 'Le courant dans un circuit varie selon $i(t) = 4t$ (en A) pour $t \\in [0\\,;\\,3]$ s. Calculer la charge totale $Q = \\int_0^3 i(t)\\,dt$ (en C).',
          type: 'numeric',
          answer: 18,
          tolerance: 0,
          unit: 'C',
          points: 2,
          correction: '$Q = \\int_0^3 4t\\,dt = [2t^2]_0^3 = 2 \\times 9 - 0 = 18$ C.'
        }
      ]
    }
  },

    {
    id: 'bts-stats-deux-variables',
    level: 3, subject: 'maths',
    icon: '📊',
    title: 'Statistiques à deux variables',
    subtitle: 'Nuage de points, corrélation, régression linéaire',
    keywords: ['Régression linéaire', 'Corrélation', 'Nuage de points', 'Droite des moindres carrés'],
    physics: false,
    cours: {
      intro: 'Les statistiques à deux variables permettent de modéliser et prévoir : ventes en fonction de la publicité, résistance d\'un matériau en fonction de la température, consommation en fonction de la vitesse. La droite de régression des moindres carrés minimise la somme des carrés des écarts verticaux entre les points et la droite — c\'est la droite qui "passe au mieux" à travers le nuage. Le coefficient de corrélation $r \\in [-1;1]$ mesure la force de la liaison LINÉAIRE uniquement : $r = 0$ ne signifie pas "pas de liaison" mais "pas de liaison linéaire" (il peut y avoir une relation parabolique). Piège majeur : $r \\approx \\pm 1$ prouve une forte liaison linéaire, mais JAMAIS une causalité. Deux variables peuvent être fortement corrélées via une troisième variable cachée.',
      definitions: [
        { term: 'Covariance $\\text{Cov}(x,y)$', def: 'Mesure la tendance de $x$ et $y$ à varier ensemble : $\\text{Cov}(x,y) = \\overline{xy} - \\bar{x}\\bar{y}$. Positive si les deux augmentent ensemble, négative si l\'une augmente quand l\'autre diminue.' },
        { term: 'Coefficient de corrélation $r$', def: 'Covariance normalisée : $r = \\text{Cov}(x,y)/(\\sigma_x \\cdot \\sigma_y) \\in [-1;1]$. $|r| \\approx 1$ : forte liaison linéaire. $r \\approx 0$ : pas de liaison linéaire (mais une liaison non linéaire reste possible).' },
        { term: 'Droite de régression (moindres carrés)', def: 'Droite $y = ax + b$ qui minimise la somme des carrés des écarts verticaux entre les points et la droite. Elle passe toujours par le point moyen $(\\bar{x}, \\bar{y})$.' },
        { term: 'Corrélation fallacieuse (spurious correlation)', def: 'Forte corrélation entre deux variables sans lien causal direct, expliquée par une troisième variable cachée (ex. : ventes de glaces et noyades, toutes deux corrélées à la chaleur).' }
      ],
      method: {
        title: 'Calculer la droite de régression',
        steps: [
          'Calculer les moyennes $\\bar{x}$ et $\\bar{y}$, les variances $V_x$, $V_y$ et la covariance $\\text{Cov}(x,y)$. <strong>Exemple :</strong> Points $(1;3)$, $(2;5)$, $(3;7)$ → $\\bar{x} = 2$, $\\bar{y} = 5$, $\\overline{xy} = (3+10+21)/3 = 34/3 \\approx 11{,}33$, $\\text{Cov} = 11{,}33 - 10 = 1{,}33$.',
          'Coefficient directeur : $a=\\dfrac{\\text{Cov}(x,y)}{V_x}$. <strong>Exemple :</strong> $V_x = \\overline{x^2} - \\bar{x}^2 = 14/3 - 4 = 2/3$. $a = 1{,}33/(2/3) = 2$.',
          'Ordonnée à l\'origine : $b=\\bar{y}-a\\bar{x}$. <strong>Exemple :</strong> $b = 5 - 2 \\times 2 = 1$. Droite : $y = 2x + 1$.',
          'Coefficient de corrélation : $r=\\dfrac{\\text{Cov}(x,y)}{\\sigma_x\\sigma_y}\\in[-1;1]$. <strong>Exemple :</strong> Ici $r = 1$ (alignement parfait sur la droite).'
        ]
      },
      example: {
        statement: 'Un fabricant de panneaux solaires relève la puissance produite $y$ (en W) en fonction de l\'ensoleillement $x$ (en kWh/m²/jour) : $(2;80)$, $(3;115)$, $(4;140)$, $(5;170)$, $(6;200)$. Déterminer la droite de régression et estimer la puissance pour $x = 7$ kWh/m²/jour.',
        steps: [
          'Moyennes : $\\bar{x} = (2+3+4+5+6)/5 = 4$ ; $\\bar{y} = (80+115+140+170+200)/5 = 141$.',
          'Calculs intermédiaires : $\\overline{x^2} = (4+9+16+25+36)/5 = 18$ ; $\\overline{xy} = (160+345+560+850+1200)/5 = 623$.',
          '$V_x = 18 - 16 = 2$. $\\text{Cov}(x,y) = 623 - 4 \\times 141 = 623 - 564 = 59$.',
          'Coefficient directeur : $a = 59/2 = 29{,}5$. Ordonnée : $b = 141 - 29{,}5 \\times 4 = 23$.',
          'Droite : $y = 29{,}5x + 23$. Pour $x = 7$ : $y = 29{,}5 \\times 7 + 23 = 229{,}5$ W.'
        ],
        answer: 'Droite de régression : $y = 29{,}5x + 23$. Pour un ensoleillement de $7$ kWh/m²/jour, la puissance estimée est $229{,}5$ W.'
      },
      formulas: [
        '$\\text{Cov}(x,y)=\\overline{xy}-\\bar{x}\\cdot\\bar{y}$',
        '$V_x=\\overline{x^2}-\\bar{x}^2$',
        '$a=\\dfrac{\\text{Cov}(x,y)}{V_x}$, $b=\\bar{y}-a\\bar{x}$',
        '$r=\\dfrac{\\text{Cov}(x,y)}{\\sigma_x\\cdot\\sigma_y}$'
      ],
      recap: [
        'La droite de régression $y = ax + b$ passe toujours par le point moyen $(\\bar{x}, \\bar{y})$.',
        '$|r|$ proche de $1$ indique une forte liaison linéaire. $|r| < 0{,}5$ : liaison linéaire faible.',
        'Corrélation $\\neq$ causalité : toujours chercher une explication logique avant de conclure.',
        'Ne pas extrapoler loin des données observées : la relation linéaire peut ne plus être valable hors du domaine mesuré.'
      ],
      piege: '$|r|\\approx1$ indique une forte liaison linéaire, mais pas une causalité ! Deux variables peuvent être corrélées sans lien de cause à effet.'
    },
    quiz: [
      { q: 'Une étude trouve $r=0{,}96$ entre les ventes de glaces et le nombre de noyades en piscine. Un analyste conclut : "Les glaces causent des noyades." Quelle est son erreur ?', options: ['Corrélation $\\ne$ causalité. Une variable cachée (la chaleur estivale) explique simultanément les deux phénomènes', 'Il a raison : $r=0{,}96$ prouve une causalité directe', '$r=0{,}96$ est insuffisant pour conclure à une corrélation (il faudrait $r>0{,}99$)', 'L\'erreur est d\'avoir utilisé le coefficient de Pearson au lieu de Spearman'], answer: 0, correction: 'La corrélation mesure la FORCE de la liaison linéaire, pas sa CAUSE. Deux variables peuvent être corrélées via une troisième : ici, la chaleur en été provoque à la fois une hausse des ventes de glaces ET des baignades (donc des noyades). Ce type d\'erreur s\'appelle "corrélation fallacieuse" (spurious correlation). Règle : pour établir une causalité, il faut une expérience contrôlée randomisée, pas seulement un coefficient $r$.' },
      { q: 'La droite de régression passe toujours par :', options: ['L\'origine', 'Le point $(\\bar{x};\\bar{y})$', 'Le maximum de $y$', 'Le point $(0;b)$ uniquement'], answer: 1, correction: 'Par construction ($b=\\bar{y}-a\\bar{x}$), la droite passe toujours par le point moyen $(\\bar{x};\\bar{y})$.' },
      { q: '$\\text{Cov}(x,y)=\\overline{xy}-\\bar{x}\\cdot\\bar{y}$. Si $\\bar{x}=2$, $\\bar{y}=3$, $\\overline{xy}=7$, alors $\\text{Cov}=$', options: ['$1$', '$2$', '$6$', '$-1$'], answer: 0, correction: '$\\text{Cov}=7-2\\times3=7-6=1$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const xbar = rand(2, 5), ybar = rand(3, 8), cov = rand(1, 4), vx = rand(1, 3);
        const a = parseFloat((cov/vx).toFixed(4));
        return {
          statement: `$\\bar{x}=${xbar}$, $\\bar{y}=${ybar}$, $\\text{Cov}(x,y)=${cov}$, $V_x=${vx}$. Calculer $a=\\text{Cov}/V_x$.`,
          answer: parseFloat(a.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: '$a = \\text{Cov}(x,y) / V_x$',
          solution: [`$a=${cov}/${vx}=${a}$`]
        };
      }
    },
    probleme: {
      context: 'Chiffre d\'affaires $y$ (k€) selon les dépenses publicitaires $x$ (k€) : $(1;8)$, $(2;11)$, $(3;12)$, $(4;14)$, $(5;15)$.',
      tasks: [
        'Calculer $\\bar{x}$, $\\bar{y}$, $\\overline{xy}$, $V_x$ et $\\text{Cov}(x,y)$.',
        'Déterminer la droite de régression $y=ax+b$.',
        'Estimer le CA pour $x=6$ k€ de publicité.'
      ],
      solutions: [
        '$\\bar{x}=3$, $\\bar{y}=12$, $\\overline{xy}=38{,}4$, $V_x=2$, $\\text{Cov}=38{,}4-36=2{,}4$.',
        '$a=2{,}4/2=1{,}2$ ; $b=12-1{,}2\\times3=8{,}4$. Droite : $y=1{,}2x+8{,}4$.',
        '$y(6)=1{,}2\\times6+8{,}4=15{,}6$ k€.'
      ],
      finalAnswer: 'Droite : $y=1{,}2x+8{,}4$. Pour $6$ k€ pub → CA estimé : $15{,}6$ k€.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques à deux variables',
      duration: '40 min',
      questions: [
        {
          statement: 'Soit $\\bar{x} = 4$, $\\bar{y} = 10$, $\\overline{xy} = 45$. Calculer la covariance $\\text{Cov}(x,y) = \\overline{xy} - \\bar{x}\\cdot\\bar{y}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\text{Cov}(x,y) = \\overline{xy} - \\bar{x} \\cdot \\bar{y} = 45 - 4 \\times 10 = 45 - 40 = 5$.'
        },
        {
          statement: 'La droite de régression des moindres carrés passe toujours par :',
          type: 'multiple-choice',
          options: ['L\'origine $(0\\,;\\,0)$', 'Le point moyen $(\\bar{x}\\,;\\,\\bar{y})$', 'Le maximum du nuage', 'L\'intersection des axes'],
          answer: 1,
          points: 2,
          correction: 'Par construction, $b = \\bar{y} - a\\bar{x}$, ce qui garantit que la droite passe par le point moyen $(\\bar{x}\\,;\\,\\bar{y})$. C\'est une propriété fondamentale de la régression linéaire.'
        },
        {
          statement: 'On dispose de $\\text{Cov}(x,y) = 6$, $V_x = 4$, $\\bar{x} = 3$, $\\bar{y} = 8$. Calculer le coefficient directeur $a$ et l\'ordonnée à l\'origine $b$ de la droite de régression. Donner la valeur de $b$.',
          type: 'numeric',
          answer: 3.5,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$a = \\dfrac{\\text{Cov}(x,y)}{V_x} = \\dfrac{6}{4} = 1{,}5$. Puis $b = \\bar{y} - a\\bar{x} = 8 - 1{,}5 \\times 3 = 8 - 4{,}5 = 3{,}5$. La droite est $y = 1{,}5x + 3{,}5$.'
        },
        {
          statement: 'Un coefficient de corrélation $r = -0{,}92$ signifie :',
          type: 'multiple-choice',
          options: ['Aucune liaison entre les variables', 'Forte liaison linéaire négative (quand $x$ augmente, $y$ diminue)', 'Forte liaison linéaire positive', 'Liaison non linéaire uniquement'],
          answer: 1,
          points: 2,
          correction: '$r = -0{,}92$ est proche de $-1$ : forte corrélation linéaire négative. Quand $x$ augmente, $y$ a tendance à diminuer de façon linéaire. Attention : cela ne prouve pas une causalité (corrélation $\\neq$ causalité).'
        },
        {
          statement: 'Avec la droite de régression $y = 2{,}5x + 1$, estimer $y$ pour $x = 10$.',
          type: 'numeric',
          answer: 26,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$y = 2{,}5 \\times 10 + 1 = 25 + 1 = 26$. Attention : cette estimation n\'est fiable que si $x = 10$ est dans la plage des données observées (pas d\'extrapolation trop lointaine).'
        }
      ]
    }
  },

    {
    id: 'bts-probas-discretes',
    level: 3, subject: 'maths',
    icon: '🎲',
    title: 'Lois de probabilité discrètes',
    subtitle: 'Loi binomiale et loi de Poisson',
    keywords: ['Loi binomiale', 'Loi de Poisson', 'Espérance', 'Variance', 'Processus aléatoire'],
    physics: true,
    cours: {
      intro: 'En BTS, les lois discrètes modélisent les défauts de production, les pannes, les demandes clients. La loi binomiale $\\mathcal{B}(n,p)$ compte les succès en $n$ essais indépendants avec probabilité $p$ constante — typiquement un contrôle qualité par échantillonnage. La loi de Poisson $\\mathcal{P}(\\lambda)$ modélise les événements rares dans un intervalle : pannes/heure, arrivées/minute dans un centre d\'appels, défauts/m² sur une tôle. Quand $n$ est grand et $p$ petit, la Poisson approche la binomiale avec $\\lambda = np$ : un contrôle sur $500$ pièces avec $2\\%$ de défauts ($\\lambda = 10$) se calcule bien plus simplement avec Poisson. Le critère pratique d\'approximation : $n \\geq 30$ et $p \\leq 0{,}1$. La propriété clé de Poisson : $E(X) = V(X) = \\lambda$ — variance égale à la moyenne, ce qui n\'est pas le cas en général.',
      definitions: [
        { term: 'Loi binomiale $\\mathcal{B}(n, p)$', def: 'Loi du nombre de succès en $n$ épreuves indépendantes, chacune avec probabilité de succès $p$. $E(X) = np$, $V(X) = np(1-p)$.' },
        { term: 'Loi de Poisson $\\mathcal{P}(\\lambda)$', def: 'Loi du nombre d\'événements rares dans un intervalle donné (temps, surface, volume). Paramètre $\\lambda$ = nombre moyen d\'événements. Propriété clé : $E(X) = V(X) = \\lambda$.' },
        { term: 'Coefficient binomial $\\binom{n}{k}$', def: 'Nombre de façons de choisir $k$ éléments parmi $n$ : $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. Exemple : $\\binom{5}{2} = \\frac{5!}{2!3!} = 10$.' },
        { term: 'Approximation de Poisson', def: 'Quand $n \\geq 30$ et $p \\leq 0{,}1$, on approche $\\mathcal{B}(n,p)$ par $\\mathcal{P}(\\lambda = np)$. Les calculs sont beaucoup plus simples et la précision est excellente.' }
      ],
      method: {
        title: 'Choisir entre binomiale et Poisson',
        steps: [
          'Loi binomiale : $n$ répétitions indépendantes, probabilité $p$ constante. <strong>Exemple :</strong> On tire $n = 10$ pièces d\'un lot à $5\\%$ de défauts. $X \\sim \\mathcal{B}(10 ; 0{,}05)$. $P(X = 0) = 0{,}95^{10} \\approx 0{,}599$.',
          'Loi de Poisson : événements rares ($\\lambda=np$ fixé, $n$ grand, $p$ petit). <strong>Exemple :</strong> Une machine a $2$ pannes/jour en moyenne. $P(X = 0) = e^{-2} \\approx 0{,}135$ (probabilité d\'aucune panne).',
          '$P_{\\mathcal{P}(\\lambda)}(X=k)=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$. <strong>Exemple :</strong> $\\lambda = 3$, $k = 2$ → $P(X=2) = \\frac{9}{2} \\times e^{-3} \\approx 4{,}5 \\times 0{,}0498 \\approx 0{,}224$.',
          'Espérance et variance de Poisson : $E(X)=V(X)=\\lambda$. <strong>Exemple :</strong> Si $\\lambda = 5$ pannes/jour, l\'écart-type est $\\sigma = \\sqrt{5} \\approx 2{,}24$ pannes/jour.'
        ]
      },
      example: {
        statement: 'Un fabricant de circuits imprimés sait que $1\\%$ des composants soudés sont défectueux. Une carte contient $200$ soudures. Quelle est la probabilité d\'avoir exactement $3$ soudures défectueuses sur une carte ?',
        steps: [
          'Modèle : $n = 200$ essais indépendants, $p = 0{,}01$. C\'est une loi $\\mathcal{B}(200 ; 0{,}01)$.',
          'Comme $n \\geq 30$ et $p \\leq 0{,}1$, on approche par Poisson avec $\\lambda = np = 200 \\times 0{,}01 = 2$.',
          '$P(X = 3) = \\frac{\\lambda^3}{3!}e^{-\\lambda} = \\frac{2^3}{6} \\times e^{-2} = \\frac{8}{6} \\times 0{,}1353$.',
          '$P(X = 3) = 1{,}333 \\times 0{,}1353 \\approx 0{,}180$.',
          'Il y a environ $18\\%$ de chances d\'avoir exactement $3$ soudures défectueuses.'
        ],
        answer: '$P(X = 3) \\approx 0{,}180$ soit $18\\%$. Avec Poisson ($\\lambda = 2$), le calcul est immédiat comparé à la formule binomiale avec $\\binom{200}{3}$.'
      },
      formulas: [
        '$P_{\\mathcal{B}(n,p)}(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$',
        '$P_{\\mathcal{P}(\\lambda)}(X=k)=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$',
        '$E_{\\mathcal{P}}(X)=V_{\\mathcal{P}}(X)=\\lambda$'
      ],
      recap: [
        'Binomiale = $n$ essais indépendants avec $p$ constant. Poisson = événements rares dans un intervalle.',
        'Si $n \\geq 30$ et $p \\leq 0{,}1$ : approcher $\\mathcal{B}(n,p)$ par $\\mathcal{P}(np)$ pour simplifier les calculs.',
        'Propriété clé de Poisson : $E(X) = V(X) = \\lambda$ (moyenne = variance). Si ce n\'est pas vérifié sur les données, Poisson n\'est pas un bon modèle.',
        '$P(X \\geq 1) = 1 - P(X = 0) = 1 - e^{-\\lambda}$ : très utilisé pour la probabilité d\'au moins un événement.'
      ],
      piege: 'La loi de Poisson suppose des événements rares et indépendants. Si les pannes se "groupent", la loi de Poisson n\'est plus adaptée.'
    },
    quiz: [
      { q: 'Un contrôleur vérifie une production où $2\\%$ des pièces sont défectueuses. Il prélève $n=500$ pièces. Un étudiant dit : "la loi binomiale s\'applique mais avec $n=500$ et $p=0{,}02$, c\'est incalculable." Quelle est son erreur ?', options: ['On approche par Poisson avec $\\lambda=np=10$ ($n\\ge30$, $p\\le0{,}1$) : les calculs deviennent simples et précis', 'Il a raison : pas d\'approximation possible dans ce cas', 'La loi normale est la seule approximation disponible ici', 'Il faut utiliser la loi hypergéométrique car on tire sans remise'], answer: 0, correction: 'Quand $n\\ge30$ et $p\\le0{,}1$ (événements rares), la loi de Poisson approche excellemment la binomiale avec $\\lambda=np=500\\times0{,}02=10$. Ainsi $P(X=k)\\approx\\frac{10^k}{k!}e^{-10}$, facilement calculable. La calculatrice donne directement ces valeurs. L\'approximation normale est aussi possible ($n$ grand), mais Poisson est plus précise ici car $p$ est petit.' },
      { q: 'Pour $\\mathcal{P}(\\lambda=4)$, l\'espérance est :', options: ['$2$', '$4$', '$16$', '$\\sqrt{4}$'], answer: 1, correction: 'Loi de Poisson : $E(X)=\\lambda=4$.' },
      { q: 'La loi de Poisson est une approximation de la binomiale quand :', options: ['$n$ est petit et $p$ est grand', '$n$ est grand et $p$ est petit', '$n=p$', '$np>10$'], answer: 1, correction: 'Poisson approche $\\mathcal{B}(n,p)$ quand $n\\ge30$, $p\\le0{,}1$ et $\\lambda=np$ modéré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const lambda = pick([2, 3, 4, 5]);
        const ans = parseFloat((Math.exp(-lambda)).toFixed(4));
        return {
          statement: `Pour $X\\sim\\mathcal{P}(${lambda})$, calculer $P(X=0)$. Arrondir à $0{,}001$.`,
          answer: parseFloat(ans.toFixed(3)),
          tolerance: 0.002,
          unit: '',
          hint: `$P(X=0)=e^{-${lambda}}$`,
          solution: [`$P(X=0)=e^{-${lambda}}\\approx${ans}$`]
        };
      }
    },
    probleme: {
      context: 'Un centre d\'appels reçoit en moyenne $\\lambda=5$ appels par minute (loi de Poisson).',
      tasks: [
        'Calculer la probabilité de recevoir exactement $3$ appels en une minute.',
        'Calculer la probabilité de recevoir au moins $1$ appel.',
        'Calculer l\'espérance et l\'écart-type du nombre d\'appels.'
      ],
      solutions: [
        '$P(X=3)=\\frac{5^3}{3!}e^{-5}=\\frac{125}{6}e^{-5}\\approx0{,}1404$.',
        '$P(X\\ge1)=1-P(X=0)=1-e^{-5}\\approx1-0{,}0067=0{,}9933$.',
        '$E(X)=5$ ; $\\sigma=\\sqrt{V(X)}=\\sqrt{5}\\approx2{,}24$ appels/min.'
      ],
      finalAnswer: '$P(X=3)\\approx14\\%$ ; $P(X\\ge1)\\approx99{,}3\\%$ ; $\\sigma\\approx2{,}24$.'
    },

    evaluation: {
      title: 'Évaluation — Lois de probabilité discrètes',
      duration: '40 min',
      questions: [
        {
          statement: 'Un lot contient $5\\%$ de pièces défectueuses. On prélève $n = 20$ pièces. Calculer $P(X = 0)$ avec la loi binomiale $\\mathcal{B}(20\\,;\\,0{,}05)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.358,
          tolerance: 0.002,
          unit: '',
          points: 2,
          correction: '$P(X=0) = \\binom{20}{0} \\times 0{,}05^0 \\times 0{,}95^{20} = 0{,}95^{20} \\approx 0{,}3585$. Il y a environ $36\\%$ de chances de n\'avoir aucun défaut.'
        },
        {
          statement: 'Pour une loi de Poisson $\\mathcal{P}(\\lambda)$, quelle propriété caractéristique est vraie ?',
          type: 'multiple-choice',
          options: ['$E(X) = \\lambda$ et $V(X) = \\lambda^2$', '$E(X) = V(X) = \\lambda$', '$E(X) = \\lambda$ et $V(X) = \\sqrt{\\lambda}$', '$E(X) = 0$ et $V(X) = \\lambda$'],
          answer: 1,
          points: 2,
          correction: 'La propriété caractéristique de la loi de Poisson est $E(X) = V(X) = \\lambda$ : la moyenne et la variance sont égales. Si des données montrent des valeurs très différentes pour la moyenne et la variance, la loi de Poisson n\'est probablement pas un bon modèle.'
        },
        {
          statement: 'Un serveur reçoit en moyenne $\\lambda = 3$ requêtes par seconde (loi de Poisson). Calculer $P(X = 2)$ (arrondir à $0{,}001$). On donne $e^{-3} \\approx 0{,}0498$.',
          type: 'numeric',
          answer: 0.224,
          tolerance: 0.002,
          unit: '',
          points: 3,
          correction: '$P(X=2) = \\dfrac{3^2}{2!}e^{-3} = \\dfrac{9}{2} \\times 0{,}0498 = 4{,}5 \\times 0{,}0498 \\approx 0{,}224$.'
        },
        {
          statement: 'L\'approximation de la loi binomiale par la loi de Poisson est valable quand :',
          type: 'multiple-choice',
          options: ['$n$ est petit et $p$ est grand', '$n \\geq 30$ et $p \\leq 0{,}1$ (événements rares)', '$n = p$', '$np > 100$'],
          answer: 1,
          points: 1,
          correction: 'L\'approximation de Poisson est pertinente quand $n$ est grand ($\\geq 30$) et $p$ est petit ($\\leq 0{,}1$), avec $\\lambda = np$ modéré. Les événements sont alors rares et la formule de Poisson est beaucoup plus simple à calculer.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{P}(4)$, calculer $P(X \\geq 1) = 1 - P(X=0)$ (arrondir à $0{,}001$). On donne $e^{-4} \\approx 0{,}0183$.',
          type: 'numeric',
          answer: 0.982,
          tolerance: 0.002,
          unit: '',
          points: 2,
          correction: '$P(X \\geq 1) = 1 - P(X=0) = 1 - e^{-4} = 1 - 0{,}0183 = 0{,}982$. Il y a plus de $98\\%$ de chances d\'observer au moins un événement.'
        }
      ]
    }
  },

    {
    id: 'bts-suites-appliquees',
    level: 3, subject: 'maths',
    icon: '💰',
    title: 'Suites numériques appliquées',
    subtitle: 'Amortissements, intérêts composés, annuités',
    keywords: ['Amortissement', 'Intérêts composés', 'Annuités', 'Capital', 'Emprunt'],
    physics: false,
    cours: {
      intro: 'Les intérêts composés ($C_n = C_0(1+t)^n$) et les intérêts simples ($C_n = C_0(1+nt)$) semblent proches à court terme, mais divergent considérablement sur longue durée : à $5\\%$ sur $30$ ans, les intérêts composés multiplient le capital par $4{,}32$ contre $2{,}5$ pour les simples. La différence vient de la "capitalisation" : en composés, les intérêts de chaque période produisent eux-mêmes des intérêts. En finance d\'entreprise BTS, les annuités (remboursements constants d\'un emprunt) combinent les deux : chaque versement $a$ couvre d\'abord les intérêts du solde restant, puis rembourse du capital. En début d\'emprunt, la part d\'intérêts est élevée et décroît à chaque annuité — c\'est pourquoi les premières mensualités remboursent peu de capital. La durée de doublement s\'approche par la "règle des 72" : $n \\approx 72/t\\%$ années.',
      definitions: [
        { term: 'Intérêts simples', def: 'Les intérêts sont calculés uniquement sur le capital initial : $C_n = C_0(1 + nt)$. C\'est une suite arithmétique de raison $C_0 \\times t$. Utilisés pour les placements courts (< 1 an).' },
        { term: 'Intérêts composés', def: 'Les intérêts sont capitalisés à chaque période : $C_n = C_0(1+t)^n$. C\'est une suite géométrique de raison $q = 1+t$. Standard pour les emprunts et placements longs.' },
        { term: 'Annuité constante $a$', def: 'Versement périodique fixe pour rembourser un emprunt. Formule : $a = C_0 \\times \\frac{t}{1-(1+t)^{-n}}$. Chaque annuité contient une part d\'intérêts (décroissante) et une part de capital (croissante).' },
        { term: 'Valeur acquise', def: 'Capital accumulé après $n$ versements réguliers de $a$ : $V_n = a \\times \\frac{(1+t)^n - 1}{t}$. C\'est la somme d\'une suite géométrique.' }
      ],
      method: {
        title: 'Calculs financiers avec les suites',
        steps: [
          'Intérêts composés : $C_n = C_0\\times(1+t)^n$ (suite géométrique de raison $q=1+t$). <strong>Exemple :</strong> $C_0 = 5000$ €, $t = 3\\%$, $n = 4$ ans → $C_4 = 5000 \\times 1{,}03^4 = 5000 \\times 1{,}1255 \\approx 5628$ €.',
          'Annuités constantes (emprunt) : somme des valeurs actualisées = capital emprunté. <strong>Exemple :</strong> Emprunt $10000$ € à $5\\%$ sur $3$ ans → $a = 10000 \\times \\frac{0{,}05}{1-1{,}05^{-3}} = 10000 \\times \\frac{0{,}05}{0{,}1426} \\approx 3672$ €/an.',
          'Amortissement constant : remboursement $=$ capital $/$ durée, intérêts dégressifs. <strong>Exemple :</strong> $10000$ € sur $4$ ans → amortissement $= 2500$ €/an. An 1 : intérêts $= 10000 \\times 0{,}05 = 500$ €, versement $= 3000$ €.',
          'Valeur acquise par $n$ versements $a$ : $V=a\\times\\dfrac{(1+t)^n-1}{t}$. <strong>Exemple :</strong> $a = 100$ €/mois ($1200$ €/an), $t = 4\\%$, $n = 10$ ans → $V = 1200 \\times \\frac{1{,}04^{10}-1}{0{,}04} \\approx 14400$ €.'
        ]
      },
      example: {
        statement: 'Un salarié épargne $200$ € par mois (soit $2400$ €/an) pendant $20$ ans sur un plan d\'épargne entreprise à $3{,}5\\%$ annuel. Quel capital aura-t-il accumulé ? Combien aura-t-il versé au total et combien les intérêts composés lui rapportent-ils ?',
        steps: [
          'Annuité : $a = 2400$ €/an, taux $t = 0{,}035$, durée $n = 20$ ans.',
          'Valeur acquise : $V = a \\times \\frac{(1+t)^n - 1}{t} = 2400 \\times \\frac{1{,}035^{20} - 1}{0{,}035}$.',
          '$1{,}035^{20} \\approx 1{,}9898$. Donc $V = 2400 \\times \\frac{0{,}9898}{0{,}035} = 2400 \\times 28{,}28 \\approx 67\\,872$ €.',
          'Total versé : $2400 \\times 20 = 48\\,000$ €.',
          'Gain dû aux intérêts composés : $67\\,872 - 48\\,000 = 19\\,872$ €, soit $41\\%$ de gain supplémentaire.'
        ],
        answer: 'Capital accumulé : $\\approx 67\\,872$ €. Versé : $48\\,000$ €. Les intérêts composés rapportent $\\approx 19\\,872$ € de plus, soit $+41\\%$ grâce à la capitalisation.'
      },
      formulas: [
        '$C_n = C_0(1+t)^n$',
        '$V_n = a\\cdot\\dfrac{(1+t)^n-1}{t}$ (valeur acquise d\'annuités)',
        '$C_0 = a\\cdot\\dfrac{1-(1+t)^{-n}}{t}$ (capital = valeur actuelle d\'annuités)',
        'Durée : $n = \\dfrac{\\ln(C_n/C_0)}{\\ln(1+t)}$'
      ],
      recap: [
        'Intérêts simples = suite arithmétique ($C_0(1+nt)$). Intérêts composés = suite géométrique ($C_0(1+t)^n$).',
        'La règle des 72 : le capital double en $\\approx 72/t\\%$ années (ex. : $72/6 = 12$ ans à $6\\%$).',
        'Annuité constante : chaque versement contient une part d\'intérêts (décroissante) et une part de capital (croissante).',
        'Sur longue durée, la capitalisation fait une énorme différence : à $5\\%$ sur $30$ ans, composés donnent $4{,}32 \\times C_0$ contre $2{,}5 \\times C_0$ en simples.'
      ],
      piege: 'Ne pas confondre intérêts simples ($C_0(1+nt)$) et intérêts composés ($C_0(1+t)^n$). Sur longue période, la différence est considérable.'
    },
    quiz: [
      { q: 'Un capital de $10\\,000$ € est placé à $5\\%$ par an pendant $10$ ans. En intérêts simples : $10\\,000+10\\,000\\times0{,}05\\times10=15\\,000$ €. La banque annonce $16\\,289$ €. Qui a raison ?', options: ['La banque : intérêts composés $10000\\times1{,}05^{10}\\approx16\\,289$ €. Les intérêts simples ne capitalisent pas les intérêts', 'L\'étudiant : les intérêts simples donnent bien $15\\,000$ € (la banque ajoute des frais)', 'Les deux selon le contrat : bancaire ou livret', 'Ni l\'un ni l\'autre : avec l\'inflation, la valeur réelle est différente'], answer: 0, correction: 'En intérêts composés, les intérêts de chaque période s\'ajoutent au capital et génèrent eux-mêmes des intérêts. $1{,}05^{10}\\approx1{,}6289$ : le capital est multiplié par $1{,}629$ (pas $1{,}5$). La différence ($16\\,289-15\\,000=1\\,289$ €) représente les "intérêts sur intérêts". Sur $30$ ans à $5\\%$, la différence explose : $43\\,219$ € (composés) vs $25\\,000$ € (simples).' },
      { q: 'La durée de doublement d\'un capital à taux $t$ est :', options: ['$2/t$', '$\\ln2/\\ln(1+t)$', '$t/\\ln2$', '$1/(2t)$'], answer: 1, correction: '$(1+t)^n=2 \\Rightarrow n=\\frac{\\ln2}{\\ln(1+t)}$. Approximation : $n\\approx\\frac{0{,}693}{t}$.' },
      { q: 'Un emprunt de $10000$ € à $4\\%$ sur $5$ ans. L\'annuité constante $a$ vérifie :', options: ['$a=10000/5$', '$a=10000\\times\\frac{0{,}04}{1-1{,}04^{-5}}$', '$a=10000\\times0{,}04$', '$a=10000\\times1{,}04^5$'], answer: 1, correction: 'Formule de l\'annuité : $a=C_0\\times\\frac{t}{1-(1+t)^{-n}}$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const C0 = rand(1, 5) * 1000, t = pick([0.02, 0.03, 0.04, 0.05]), n = rand(2, 4);
        const Cn = parseFloat((C0 * Math.pow(1+t, n)).toFixed(2));
        return {
          statement: `Un capital de $${C0}$ € est placé à $${t*100}\\%$ par an (intérêts composés). Quelle est sa valeur après $${n}$ ans ? (Arrondir à l'euro)`,
          answer: Math.round(Cn),
          tolerance: 1,
          unit: '€',
          hint: `$C_${n}=${C0}\\times(1+${t})^{${n}}$`,
          solution: [`$C_{${n}}=${C0}\\times${(1+t).toFixed(2)}^{${n}}\\approx${Cn}$ €`]
        };
      }
    },
    probleme: {
      context: 'Une entreprise emprunte $50\\,000$ € à $3\\%$ par an, remboursable par annuités constantes sur $10$ ans.',
      tasks: [
        'Calculer l\'annuité constante $a$.',
        'Calculer le coût total de l\'emprunt.',
        'Calculer la part d\'intérêts dans la première annuité.'
      ],
      solutions: [
        '$a=50000\\times\\frac{0{,}03}{1-1{,}03^{-10}}=50000\\times\\frac{0{,}03}{1-0{,}7441}=50000\\times\\frac{0{,}03}{0{,}2559}\\approx5863$ €.',
        'Coût total $=10\\times5863=58630$ €. Coût du crédit $=58630-50000=8630$ €.',
        'Intérêts 1re année $=50000\\times0{,}03=1500$ €. Remboursement capital $=5863-1500=4363$ €.'
      ],
      finalAnswer: 'Annuité $\\approx5863$ €. Coût du crédit $\\approx8630$ €. 1re annuité : $1500$ € d\'intérêts.'
    },

    evaluation: {
      title: 'Évaluation — Suites numériques appliquées',
      duration: '40 min',
      questions: [
        {
          statement: 'Un capital de $8\\,000$ € est placé à $4\\%$ par an en intérêts composés. Calculer sa valeur après $3$ ans (arrondir à l\'euro).',
          type: 'numeric',
          answer: 8998,
          tolerance: 1,
          unit: '€',
          points: 2,
          correction: '$C_3 = 8000 \\times 1{,}04^3 = 8000 \\times 1{,}124864 = 8\\,998{,}91 \\approx 8\\,999$ €.'
        },
        {
          statement: 'La durée nécessaire pour doubler un capital placé à un taux annuel $t$ est donnée par :',
          type: 'multiple-choice',
          options: ['$n = \\dfrac{2}{t}$', '$n = \\dfrac{\\ln 2}{\\ln(1+t)}$', '$n = \\dfrac{1}{2t}$', '$n = \\dfrac{t}{\\ln 2}$'],
          answer: 1,
          points: 2,
          correction: '$(1+t)^n = 2 \\Rightarrow n\\ln(1+t) = \\ln 2 \\Rightarrow n = \\dfrac{\\ln 2}{\\ln(1+t)}$. La règle des 72 donne l\'approximation $n \\approx 72/t\\%$.'
        },
        {
          statement: 'Un emprunt de $20\\,000$ € est remboursé à $5\\%$ par an sur $4$ ans par annuités constantes. L\'annuité $a$ vérifie $a = C_0 \\times \\dfrac{t}{1-(1+t)^{-n}}$. Calculer $a$ (arrondir à l\'euro).',
          type: 'numeric',
          answer: 5640,
          tolerance: 5,
          unit: '€',
          points: 3,
          correction: '$a = 20000 \\times \\dfrac{0{,}05}{1 - 1{,}05^{-4}} = 20000 \\times \\dfrac{0{,}05}{1 - 0{,}8227} = 20000 \\times \\dfrac{0{,}05}{0{,}1773} \\approx 20000 \\times 0{,}2820 \\approx 5\\,640$ €.'
        },
        {
          statement: 'On place $500$ € chaque année pendant $5$ ans à $3\\%$ annuel. La valeur acquise est $V = a \\times \\dfrac{(1+t)^n - 1}{t}$. Calculer $V$ (arrondir à l\'euro).',
          type: 'numeric',
          answer: 2655,
          tolerance: 5,
          unit: '€',
          points: 2,
          correction: '$V = 500 \\times \\dfrac{1{,}03^5 - 1}{0{,}03} = 500 \\times \\dfrac{1{,}1593 - 1}{0{,}03} = 500 \\times \\dfrac{0{,}1593}{0{,}03} = 500 \\times 5{,}3091 \\approx 2\\,655$ €.'
        },
        {
          statement: 'La différence entre intérêts simples et intérêts composés sur $10$ ans :',
          type: 'multiple-choice',
          options: ['Est nulle : les deux formules donnent le même résultat', 'Provient des intérêts sur les intérêts (capitalisation)', 'Provient de l\'inflation', 'N\'existe que pour des taux supérieurs à $10\\%$'],
          answer: 1,
          points: 1,
          correction: 'En intérêts composés, les intérêts de chaque période sont ajoutés au capital et produisent eux-mêmes des intérêts : c\'est la capitalisation. La différence croît exponentiellement avec la durée. Exemple : $10\\,000$ € à $5\\%$ sur $10$ ans → simples : $15\\,000$ €, composés : $16\\,289$ €.'
        }
      ]
    }
  },

    {
    id: 'bts-matrices',
    level: 3, subject: 'maths',
    icon: '🔲',
    title: 'Calcul matriciel',
    subtitle: 'Opérations, inverse, systèmes matriciels',
    keywords: ['Matrice', 'Produit matriciel', 'Inverse', 'Déterminant', 'Système linéaire'],
    physics: true,
    cours: {
      intro: 'Les matrices sont le langage des systèmes linéaires : un réseau de distribution, un circuit électrique avec plusieurs mailles, un bilan d\'entrées-sorties industriel — tous se formulent comme $AX = B$ et se résolvent par $X = A^{-1}B$. La multiplication matricielle $AB$ n\'est pas commutative ($AB \\neq BA$ en général) — c\'est la principale différence avec la multiplication scalaire. Le déterminant $\\det(A)$ est le "critère d\'inversibilité" : si $\\det(A) = 0$, le système $AX = B$ soit n\'a pas de solution, soit en a une infinité. En BTS, les chaînes de Markov utilisent des matrices de transition dont les colonnes (ou lignes) somment à $1$ : elles modélisent l\'évolution probabiliste d\'un système (stocks, clients, pannes). L\'état stationnaire $\\pi$ vérifie $M\\pi = \\pi$ : c\'est un vecteur propre de valeur propre $1$.',
      definitions: [
        { term: 'Matrice $m \\times n$', def: 'Tableau rectangulaire de $m$ lignes et $n$ colonnes. Le terme $a_{ij}$ se trouve à la ligne $i$ et la colonne $j$. Deux matrices de mêmes dimensions s\'additionnent terme à terme.' },
        { term: 'Déterminant $\\det(A)$', def: 'Nombre associé à une matrice carrée. Pour $2 \\times 2$ : $\\det \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$. Si $\\det(A) = 0$ : matrice singulière (non inversible).' },
        { term: 'Matrice inverse $A^{-1}$', def: 'Matrice telle que $A \\cdot A^{-1} = A^{-1} \\cdot A = I$ (matrice identité). Elle existe si et seulement si $\\det(A) \\neq 0$.' },
        { term: 'Matrice de transition (Markov)', def: 'Matrice carrée dont les colonnes (ou lignes) somment à $1$. Modélise les transitions probabilistes entre états. L\'état stationnaire vérifie $M\\pi = \\pi$.' }
      ],
      method: {
        title: 'Multiplier et inverser une matrice',
        steps: [
          'Produit $AB$ : la ligne $i$ de $A$ et la colonne $j$ de $B$ donnent le terme $c_{ij}=\\sum_k a_{ik}b_{kj}$. <strong>Exemple :</strong> $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix} = \\begin{pmatrix}1 \\times 5 + 2 \\times 6\\\\3 \\times 5 + 4 \\times 6\\end{pmatrix} = \\begin{pmatrix}17\\\\39\\end{pmatrix}$.',
          '$AB$ n\'est défini que si le nombre de colonnes de $A$ = nombre de lignes de $B$. <strong>Exemple :</strong> $A$ est $2 \\times 3$ et $B$ est $3 \\times 1$ → $AB$ est $2 \\times 1$ (OK). Mais $BA$ n\'est pas défini ($1 \\times 1$ fois $2 \\times 3$ : non compatible).',
          'Inverse de $A$ $2\\times2$ : $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ avec $\\det A=ad-bc$. <strong>Exemple :</strong> $A = \\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$, $\\det A = 10$. $A^{-1} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$.',
          'Système $AX=B$ → $X=A^{-1}B$ si $A$ est inversible. <strong>Exemple :</strong> $\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\14\\end{pmatrix}$ → $\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}\\begin{pmatrix}7\\\\14\\end{pmatrix} = \\begin{pmatrix}1{,}4\\\\2{,}8\\end{pmatrix}$.'
        ]
      },
      example: {
        statement: 'Un circuit électrique à deux mailles obéit au système : $\\begin{cases}3I_1 + I_2 = 12\\\\I_1 + 2I_2 = 8\\end{cases}$. Résoudre par méthode matricielle pour trouver les courants $I_1$ et $I_2$ (en A).',
        steps: [
          'Mise en forme matricielle : $AX = B$ avec $A = \\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}$, $X = \\begin{pmatrix}I_1\\\\I_2\\end{pmatrix}$, $B = \\begin{pmatrix}12\\\\8\\end{pmatrix}$.',
          'Déterminant : $\\det(A) = 3 \\times 2 - 1 \\times 1 = 5 \\neq 0$ → $A$ est inversible.',
          'Inverse : $A^{-1} = \\frac{1}{5}\\begin{pmatrix}2&-1\\\\-1&3\\end{pmatrix}$.',
          '$X = A^{-1}B = \\frac{1}{5}\\begin{pmatrix}2 \\times 12 + (-1) \\times 8\\\\(-1) \\times 12 + 3 \\times 8\\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix}16\\\\12\\end{pmatrix} = \\begin{pmatrix}3{,}2\\\\2{,}4\\end{pmatrix}$.'
        ],
        answer: '$I_1 = 3{,}2$ A et $I_2 = 2{,}4$ A. On vérifie : $3 \\times 3{,}2 + 2{,}4 = 12$ ✓ et $3{,}2 + 2 \\times 2{,}4 = 8$ ✓.'
      },
      formulas: [
        '$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$',
        '$A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$',
        '$(AB)^{-1}=B^{-1}A^{-1}$'
      ],
      recap: [
        'Le produit matriciel n\'est PAS commutatif ($AB \\neq BA$) : l\'ordre compte toujours.',
        '$\\det(A) = 0$ ↔ matrice non inversible ↔ système sans solution unique.',
        'Pour inverser $A$ $2 \\times 2$ : échanger les termes diagonaux, changer les signes des termes anti-diagonaux, diviser par $\\det(A)$.',
        'Les systèmes linéaires ($AX = B$) se résolvent par $X = A^{-1}B$ : c\'est la méthode la plus systématique.'
      ],
      piege: 'Le produit matriciel n\'est pas commutatif : en général $AB\\ne BA$. Toujours vérifier l\'ordre des matrices dans un produit.'
    },
    quiz: [
      { q: '$\\det\\begin{pmatrix}3&2\\\\1&4\\end{pmatrix}=$', options: ['$10$', '$14$', '$12$', '$8$'], answer: 0, correction: '$3\\times4-2\\times1=12-2=10$.' },
      { q: 'Si $\\det(A)=0$, alors $A$ est :', options: ['Inversible', 'Non inversible', 'Nulle', 'Identité'], answer: 1, correction: '$\\det(A)=0$ signifie que $A$ n\'est pas inversible (matrice singulière).' },
      { q: 'Soit $A=\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}$ et $B=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$. Laquelle de ces affirmations est VRAIE ?', options: ['$AB=BA$ : le produit matriciel est commutatif', '$AB\\neq BA$ : le produit matriciel n\'est pas commutatif', '$AB=0$ : les deux matrices s\'annulent', '$A$ n\'est pas inversible car $\\det(A)=0$'], answer: 1, correction: 'Calcul : $AB=\\begin{pmatrix}3&2\\\\1&2\\end{pmatrix}$ et $BA=\\begin{pmatrix}2&1\\\\2&3\\end{pmatrix}$. Les deux produits diffèrent : $AB\\neq BA$. La multiplication matricielle n\'est PAS commutative en général. Note : $\\det(A)=2\\times1-1\\times0=2\\neq0$, donc $A$ est bien inversible.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(0, 3), c = rand(0, 3), d = rand(1, 4);
        const det = a*d - b*c;
        return {
          statement: `Calculer $\\det\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.`,
          answer: det,
          tolerance: 0,
          unit: '',
          hint: '$\\det=ad-bc$',
          solution: [`$\\det=${a}\\times${d}-${b}\\times${c}=${a*d}-${b*c}=${det}$`]
        };
      }
    },
    probleme: {
      context: 'Un réseau de distribution a deux entrepôts A et B. Les flux hebdomadaires sont modélisés par $M=\\begin{pmatrix}0{,}8&0{,}3\\\\0{,}2&0{,}7\\end{pmatrix}$ (matrice de transition).',
      tasks: [
        'Calculer $M^2$ (flux sur deux semaines).',
        'Calculer $\\det(M)$.',
        'Si l\'état initial est $X_0=\\begin{pmatrix}100\\\\50\\end{pmatrix}$, calculer $X_1=M\\cdot X_0$.'
      ],
      solutions: [
        '$M^2=\\begin{pmatrix}0{,}8\\times0{,}8+0{,}3\\times0{,}2 & 0{,}8\\times0{,}3+0{,}3\\times0{,}7\\\\0{,}2\\times0{,}8+0{,}7\\times0{,}2 & 0{,}2\\times0{,}3+0{,}7\\times0{,}7\\end{pmatrix}=\\begin{pmatrix}0{,}7&0{,}45\\\\0{,}3&0{,}55\\end{pmatrix}$.',
        '$\\det(M)=0{,}8\\times0{,}7-0{,}3\\times0{,}2=0{,}56-0{,}06=0{,}50$.',
        '$X_1=\\begin{pmatrix}0{,}8\\times100+0{,}3\\times50\\\\0{,}2\\times100+0{,}7\\times50\\end{pmatrix}=\\begin{pmatrix}95\\\\55\\end{pmatrix}$.'
      ],
      finalAnswer: '$X_1=(95;55)^T$ : entrepôt A perd 5 unités, B en gagne 5. $\\det(M)=0{,}5$.'
    },

    evaluation: {
      title: 'Évaluation — Calcul matriciel',
      duration: '40 min',
      questions: [
        {
          statement: 'Calculer le déterminant de $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 4 \\end{pmatrix}$.',
          type: 'numeric',
          answer: 14,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\det(A) = 5 \\times 4 - 3 \\times 2 = 20 - 6 = 14$.'
        },
        {
          statement: 'Si $\\det(A) = 0$, le système $AX = B$ :',
          type: 'multiple-choice',
          options: ['Admet toujours une solution unique', 'N\'admet aucune solution ou en admet une infinité', 'Admet exactement deux solutions', 'Est toujours homogène'],
          answer: 1,
          points: 2,
          correction: 'Quand $\\det(A) = 0$, la matrice $A$ n\'est pas inversible. Le système $AX = B$ est soit incompatible (aucune solution), soit indéterminé (infinité de solutions). On ne peut pas calculer $X = A^{-1}B$.'
        },
        {
          statement: 'Soit $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. On cherche $A^{-1}$. Calculer le coefficient en position $(1,1)$ de $A^{-1}$ (arrondir à $0{,}01$).',
          type: 'numeric',
          answer: 0.30,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$\\det(A) = 4 \\times 3 - 1 \\times 2 = 10$. $A^{-1} = \\dfrac{1}{10}\\begin{pmatrix} 3 & -1 \\\\ -2 & 4 \\end{pmatrix}$. Le coefficient $(1,1)$ est $\\dfrac{3}{10} = 0{,}30$.'
        },
        {
          statement: 'Soit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Calculer le coefficient $(1,2)$ du produit $AB$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le coefficient $(1,2)$ de $AB$ est : ligne 1 de $A$ $\\times$ colonne 2 de $B$ = $1 \\times 1 + 2 \\times 0 = 1$. (Produit complet : $AB = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$).'
        },
        {
          statement: 'La propriété $(AB)^{-1} = B^{-1}A^{-1}$ (et non $A^{-1}B^{-1}$) est une conséquence de :',
          type: 'multiple-choice',
          options: ['La commutativité du produit matriciel', 'La non-commutativité du produit matriciel', 'La distributivité du produit', 'L\'associativité de l\'addition'],
          answer: 1,
          points: 1,
          correction: 'Le produit matriciel n\'est pas commutatif ($AB \\neq BA$ en général). Lors de l\'inversion, l\'ordre est inversé : $(AB)^{-1} = B^{-1}A^{-1}$. C\'est analogue à enfiler des chaussettes puis des chaussures : pour les retirer, on procède dans l\'ordre inverse.'
        }
      ]
    }
  },

    {
    id: 'bts-fourier',
    level: 3, subject: 'maths',
    icon: '〰️',
    title: 'Séries de Fourier',
    subtitle: 'Décomposition en harmoniques, spectre fréquentiel',
    keywords: ['Fourier', 'Harmonique', 'Fréquence', 'Signal périodique', 'Coefficients'],
    physics: true,
    cours: {
      intro: 'Toute fonction périodique peut être décomposée en une somme infinie de sinusoïdes de fréquences multiples de la fréquence fondamentale : c\'est le théorème de Fourier. L\'intuition : n\'importe quelle forme d\'onde — créneau, dent de scie, impulsion — est une superposition de "sons purs" (harmoniques), ce que l\'oreille et les filtres électroniques perçoivent séparément. En BTS, cette décomposition est centrale en électronique de puissance (harmoniques de courant des variateurs de vitesse), en acoustique (timbre d\'un instrument) et en traitement numérique du signal. L\'amplitude de la $n$-ième harmonique est $c_n=\\sqrt{a_n^2+b_n^2}$ : le tracé de $c_n$ en fonction de $n$ s\'appelle le spectre du signal. Piège fréquent : en un point de discontinuité (signal carré, créneau), la série de Fourier ne converge pas vers la valeur du signal mais vers la moyenne des limites à gauche et à droite — phénomène de Gibbs.',
      definitions: [
        { term: 'Harmonique de rang $n$', def: 'Composante sinusoïdale de fréquence $nf_0$ ($n$ fois la fréquence fondamentale). Le fondamental ($n=1$) a la fréquence $f_0 = 1/T$. L\'harmonique 3 a la fréquence $3f_0$, etc.' },
        { term: 'Spectre fréquentiel', def: 'Graphe de l\'amplitude $c_n = \\sqrt{a_n^2+b_n^2}$ en fonction du rang $n$ (ou de la fréquence $nf_0$). Il montre la "recette" du signal en termes de sinusoïdes.' },
        { term: 'Valeur moyenne $a_0$', def: 'Composante continue du signal : $a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$. Un signal alternatif symétrique a $a_0 = 0$.' },
        { term: 'Phénomène de Gibbs', def: 'Au voisinage d\'une discontinuité, la série de Fourier tronquée présente un dépassement d\'environ $9\\%$ qui ne disparaît jamais, même en ajoutant des harmoniques.' }
      ],
      method: {
        title: 'Calculer les coefficients de Fourier',
        steps: [
          'Signal périodique de période $T$ (ou pulsation $\\omega_0=2\\pi/T$). <strong>Exemple :</strong> Signal de fréquence $f_0 = 50$ Hz → $T = 1/50 = 0{,}02$ s, $\\omega_0 = 2\\pi \\times 50 = 100\\pi$ rad/s.',
          '$a_0=\\frac{1}{T}\\int_0^T f(t)\\,dt$ (valeur moyenne). <strong>Exemple :</strong> Signal créneau $\\pm A$ symétrique → $a_0 = 0$ (aires positives et négatives s\'annulent).',
          '$a_n=\\frac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$ et $b_n=\\frac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$. <strong>Exemple :</strong> Signal créneau impair d\'amplitude $A$ → $a_n = 0$ (impair, pas de cosinus) et $b_n = 4A/(n\\pi)$ pour $n$ impair, $0$ pour $n$ pair.',
          'Développement : $f(t)=a_0+\\sum_{n=1}^{\\infty}(a_n\\cos(n\\omega_0 t)+b_n\\sin(n\\omega_0 t))$. <strong>Exemple :</strong> Créneau $\\pm 5$ V → $f(t) \\approx \\frac{20}{\\pi}\\sin(\\omega_0 t) + \\frac{20}{3\\pi}\\sin(3\\omega_0 t) + \\frac{20}{5\\pi}\\sin(5\\omega_0 t) + \\ldots$'
        ]
      },
      example: {
        statement: 'Un variateur de vitesse produit un signal de courant créneau de fréquence $f_0 = 50$ Hz et d\'amplitude $\\pm 10$ A (signal impair). Calculer l\'amplitude du fondamental, de la $3^e$ et de la $5^e$ harmonique. Quel pourcentage de la puissance totale est contenu dans le fondamental seul ?',
        steps: [
          'Signal créneau impair : $a_0 = 0$, $a_n = 0$ (pas de cosinus), $b_n = \\frac{4A}{n\\pi}$ pour $n$ impair.',
          'Fondamental ($n=1$) : $b_1 = \\frac{4 \\times 10}{\\pi} = \\frac{40}{\\pi} \\approx 12{,}73$ A.',
          '$3^e$ harmonique ($n=3$) : $b_3 = \\frac{40}{3\\pi} \\approx 4{,}24$ A (fréquence $150$ Hz).',
          '$5^e$ harmonique ($n=5$) : $b_5 = \\frac{40}{5\\pi} \\approx 2{,}55$ A (fréquence $250$ Hz).',
          'Puissance relative du fondamental (Parseval) : $b_1^2/(b_1^2+b_3^2+b_5^2+\\ldots) = (4/\\pi)^2 \\times \\frac{1}{\\sum 1/n^2} \\approx 81\\%$. Le fondamental porte $\\sim 81\\%$ de la puissance.'
        ],
        answer: 'Fondamental : $12{,}73$ A. Harmonique 3 : $4{,}24$ A. Harmonique 5 : $2{,}55$ A. Le fondamental porte environ $81\\%$ de la puissance totale.'
      },
      formulas: [
        '$a_0=\\dfrac{1}{T}\\int_0^T f(t)\\,dt$',
        '$a_n=\\dfrac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$',
        '$b_n=\\dfrac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$',
        'Théorème de Parseval : $\\frac{1}{T}\\int_0^T[f(t)]^2dt=a_0^2+\\frac{1}{2}\\sum(a_n^2+b_n^2)$'
      ],
      diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px;">Signal</th><th style="border:1px solid var(--border);padding:8px;">Parité</th><th style="border:1px solid var(--border);padding:8px;">Coefficients</th><th style="border:1px solid var(--border);padding:8px;">Harmoniques présentes</th></tr><tr><td style="border:1px solid var(--border);padding:8px;">Créneau symétrique</td><td style="border:1px solid var(--border);padding:8px;">Impair</td><td style="border:1px solid var(--border);padding:8px;">$a_n=0$, $b_n=\\frac{4A}{n\\pi}$</td><td style="border:1px solid var(--border);padding:8px;">Sinus impairs ($1, 3, 5, \\ldots$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Triangle symétrique</td><td style="border:1px solid var(--border);padding:8px;">Pair</td><td style="border:1px solid var(--border);padding:8px;">$b_n=0$, $a_n=\\frac{-8A}{n^2\\pi^2}$</td><td style="border:1px solid var(--border);padding:8px;">Cosinus impairs ($1, 3, 5, \\ldots$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Dent de scie</td><td style="border:1px solid var(--border);padding:8px;">Impair</td><td style="border:1px solid var(--border);padding:8px;">$a_n=0$, $b_n=\\frac{2A}{n\\pi}(-1)^{n+1}$</td><td style="border:1px solid var(--border);padding:8px;">Tous les sinus ($1, 2, 3, \\ldots$)</td></tr></table>',
      recap: [
        'Tout signal périodique = composante continue ($a_0$) + somme infinie d\'harmoniques ($a_n\\cos + b_n\\sin$).',
        'Signal pair → seulement des cosinus ($b_n = 0$). Signal impair → seulement des sinus ($a_n = 0$).',
        'Le spectre du créneau décroît en $1/n$ (harmoniques impaires seulement). Celui du triangle en $1/n^2$ (convergence plus rapide).',
        'Aux points de discontinuité, la série converge vers la moyenne des limites à gauche et à droite.'
      ],
      piege: 'Si $f$ est paire ($f(-t)=f(t)$), tous les $b_n=0$ (sinus nuls). Si $f$ est impaire, tous les $a_n=0$. Exploiter la symétrie simplifie considérablement les calculs.'
    },
    quiz: [
      { q: 'Le coefficient $a_0$ d\'une série de Fourier représente :', options: ['L\'amplitude de la fréquence fondamentale', 'La valeur moyenne du signal', 'Le déphasage', 'La fréquence fondamentale'], answer: 1, correction: '$a_0=\\frac{1}{T}\\int_0^T f(t)dt$ est la valeur moyenne (composante continue) du signal.' },
      { q: 'Un signal carré fait un saut de $-1$ à $+1$ en $t=0$. La série de Fourier converge en $t=0$ vers :', options: ['$+1$ (valeur juste après le saut)', '$-1$ (valeur juste avant le saut)', '$0$ (moyenne des deux valeurs)', '$+\\infty$ (la série diverge)'], answer: 2, correction: 'Au point de discontinuité, la série de Fourier converge vers $\\frac{f(0^-)+f(0^+)}{2}=\\frac{-1+1}{2}=0$, pas vers la valeur du signal. C\'est le théorème de Dirichlet. Ce résultat surprend souvent : la série "hésite" entre les deux valeurs et prend leur moyenne exacte.' },
      { q: 'La $3^e$ harmonique d\'un signal de fréquence $f_0=50$ Hz a pour fréquence :', options: ['$50$ Hz', '$100$ Hz', '$150$ Hz', '$200$ Hz'], answer: 2, correction: 'La $n$-ième harmonique a fréquence $nf_0$. Ici $3\\times50=150$ Hz.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const T = pick([1, 2, 4]);
        const A = rand(2, 5);
        return {
          statement: `Un signal créneau vaut $+${A}$ sur $[0;T/2]$ et $-${A}$ sur $[T/2;T]$ (période $T=${T}$ s). Calculer $a_0$ (valeur moyenne).`,
          answer: 0,
          tolerance: 0,
          unit: '',
          hint: `$a_0=\\frac{1}{T}\\left(\\int_0^{T/2}${A}\\,dt+\\int_{T/2}^T(-${A})\\,dt\\right)$`,
          solution: [
            `$a_0=\\frac{1}{${T}}\\left(${A}\\times\\frac{${T}}{2}+(-${A})\\times\\frac{${T}}{2}\\right)=\\frac{1}{${T}}\\times0=0$`,
            'Signal alternatif symétrique : valeur moyenne nulle.'
          ]
        };
      }
    },
    probleme: {
      context: 'Un signal périodique triangulaire de période $T=2\\pi$ est défini par $f(t)=|t|$ sur $[-\\pi;\\pi]$.',
      tasks: [
        'Calculer $a_0$ (valeur moyenne sur $[-\\pi;\\pi]$).',
        'Ce signal est-il pair ou impair ? Que peut-on déduire pour les $b_n$ ?',
        'Donner l\'expression générale de la série de Fourier (premier terme non nul après $a_0$).'
      ],
      solutions: [
        '$a_0=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|t|\\,dt=\\frac{2}{2\\pi}\\int_0^{\\pi}t\\,dt=\\frac{1}{\\pi}\\cdot\\frac{\\pi^2}{2}=\\frac{\\pi}{2}$.',
        '$f(-t)=|-t|=|t|=f(t)$ : signal pair. Donc $b_n=0$ pour tout $n$.',
        '$f(t)=\\frac{\\pi}{2}-\\frac{4}{\\pi}\\left(\\cos t+\\frac{\\cos 3t}{9}+\\frac{\\cos 5t}{25}+\\cdots\\right)$.'
      ],
      finalAnswer: 'Signal pair ($b_n=0$). Valeur moyenne $\\pi/2$. Série : harmoniques cosinus impaires seulement.'
    },

    evaluation: {
      title: 'Évaluation — Séries de Fourier',
      duration: '45 min',
      questions: [
        {
          statement: 'Un signal périodique a une fréquence fondamentale $f_0 = 100$ Hz. Quelle est la fréquence de la $5^e$ harmonique (en Hz) ?',
          type: 'numeric',
          answer: 500,
          tolerance: 0,
          unit: 'Hz',
          points: 1,
          correction: 'La $n$-ième harmonique a pour fréquence $nf_0 = 5 \\times 100 = 500$ Hz.'
        },
        {
          statement: 'Le coefficient $a_0$ d\'une série de Fourier représente :',
          type: 'multiple-choice',
          options: ['L\'amplitude maximale du signal', 'La valeur moyenne du signal sur une période', 'La fréquence fondamentale', 'Le déphasage du fondamental'],
          answer: 1,
          points: 2,
          correction: '$a_0 = \\dfrac{1}{T}\\int_0^T f(t)\\,dt$ est la composante continue, c\'est-à-dire la valeur moyenne du signal.'
        },
        {
          statement: 'Un signal créneau vaut $+3$ sur $[0; T/2[$ et $-3$ sur $[T/2; T[$ avec $T = 2$ s. Calculer le coefficient $b_1$ sachant que $b_1 = \\dfrac{2}{T}\\int_0^T f(t)\\sin\\left(\\dfrac{2\\pi t}{T}\\right)dt = \\dfrac{12}{\\pi}$. Donner la valeur numérique arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 3.82,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: '$b_1 = \\dfrac{12}{\\pi} \\approx 3{,}82$. Pour un créneau d\'amplitude $A$, les coefficients sont $b_n = \\dfrac{4A}{n\\pi}$ pour $n$ impair et $b_n = 0$ pour $n$ pair. Ici $A = 3$, donc $b_1 = \\dfrac{4 \\times 3}{1 \\times \\pi} = \\dfrac{12}{\\pi} \\approx 3{,}82$.'
        },
        {
          statement: 'Si un signal est pair ($f(-t) = f(t)$), alors :',
          type: 'multiple-choice',
          options: ['Tous les $a_n = 0$ (pas de cosinus)', 'Tous les $b_n = 0$ (pas de sinus)', 'Tous les $a_n$ et $b_n$ sont nuls', '$a_0 = 0$ obligatoirement'],
          answer: 1,
          points: 2,
          correction: 'Une fonction paire n\'a que des composantes cosinus (paires aussi). Le produit $f(t)\\sin(n\\omega_0 t)$ est impair, donc son intégrale sur une période complète est nulle : $b_n = 0$ pour tout $n$.'
        },
        {
          statement: 'En un point de discontinuité $t_0$, la série de Fourier converge vers :',
          type: 'multiple-choice',
          options: ['$f(t_0^+)$ (limite à droite)', '$f(t_0^-)$ (limite à gauche)', '$\\dfrac{f(t_0^-) + f(t_0^+)}{2}$ (moyenne des limites)', 'La série diverge en ce point'],
          answer: 2,
          points: 2,
          correction: 'Théorème de Dirichlet : en un point de discontinuité, la série de Fourier converge vers la demi-somme des limites à gauche et à droite : $\\dfrac{f(t_0^-) + f(t_0^+)}{2}$.'
        }
      ]
    }
  },

    {
    id: 'bts-laplace',
    level: 3, subject: 'maths',
    icon: '⚡',
    title: 'Transformée de Laplace',
    subtitle: 'Définition, propriétés, résolution d\'équations différentielles',
    keywords: ['Laplace', 'Transformée', 'Équation différentielle', 'Fonction de transfert', 'Système'],
    physics: true,
    cours: {
      intro: 'La transformée de Laplace convertit une équation différentielle (domaine temporel) en une équation algébrique (domaine de $p$), rendant la résolution beaucoup plus systématique. La clé est la propriété de dérivation : $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$ — la condition initiale $f(0)$ apparaît explicitement, ce qui "encode" l\'état de départ du système directement dans le calcul. En automatique BTS, la transformée de Laplace permet de définir la fonction de transfert $H(p)=S(p)/E(p)$ d\'un système (asservissement, régulateur PID, filtre actif) et d\'analyser sa stabilité via les pôles (valeurs de $p$ qui annulent le dénominateur). Le passage au domaine fréquentiel s\'obtient en posant $p=j\\omega$ : on retrouve alors la réponse en fréquence classique (diagramme de Bode). Piège majeur : oublier le terme $-f(0)$ dans $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$ donne une solution incorrecte dès que les conditions initiales ne sont pas nulles.',
      definitions: [
        { term: 'Transformée de Laplace $\\mathcal{L}\\{f\\}$', def: 'Opération qui convertit une fonction temporelle $f(t)$ en une fonction $F(p) = \\int_0^{+\\infty} f(t)e^{-pt}\\,dt$ dans le domaine de la variable complexe $p$. Les équations différentielles deviennent algébriques.' },
        { term: 'Fonction de transfert $H(p)$', def: 'Rapport $H(p) = S(p)/E(p)$ entre la sortie et l\'entrée d\'un système linéaire dans le domaine de Laplace. Elle caractérise complètement le comportement du système.' },
        { term: 'Pôles d\'un système', def: 'Valeurs de $p$ qui annulent le dénominateur de $H(p)$. Ils déterminent la stabilité : si tous les pôles ont une partie réelle négative, le système est stable.' },
        { term: 'Éléments simples', def: 'Décomposition d\'une fraction rationnelle en somme de fractions plus simples, inversibles directement par le tableau des transformées. Ex. : $\\frac{1}{(p+1)(p+3)} = \\frac{A}{p+1} + \\frac{B}{p+3}$.' }
      ],
      method: {
        title: 'Résoudre une ED par Laplace',
        steps: [
          'Transformer l\'équation différentielle avec $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$. <strong>Exemple :</strong> $y\' + 5y = 10$, $y(0) = 0$ → $pY(p) - 0 + 5Y(p) = 10/p$ → $(p+5)Y(p) = 10/p$.',
          'Résoudre l\'équation algébrique en $F(p)$. <strong>Exemple :</strong> $Y(p) = \\frac{10}{p(p+5)}$.',
          'Décomposer $F(p)$ en éléments simples. <strong>Exemple :</strong> $\\frac{10}{p(p+5)} = \\frac{A}{p} + \\frac{B}{p+5}$. En $p=0$ : $A = 2$. En $p=-5$ : $B = -2$. Donc $Y(p) = \\frac{2}{p} - \\frac{2}{p+5}$.',
          'Inverser : utiliser le tableau des transformées pour trouver $f(t)$. <strong>Exemple :</strong> $y(t) = 2 - 2e^{-5t} = 2(1 - e^{-5t})$ pour $t \\geq 0$.'
        ]
      },
      example: {
        statement: 'Un circuit RC ($R = 1$ kΩ, $C = 1$ mF) est soumis à un échelon de tension $E = 5$ V à $t = 0$ (condensateur initialement déchargé : $u_C(0) = 0$). L\'équation différentielle est $\\tau u_C\' + u_C = E$ avec $\\tau = RC = 1$ s. Résoudre par Laplace.',
        steps: [
          'Transformation : $\\tau[pU_C(p) - u_C(0)] + U_C(p) = E/p$. Avec $u_C(0) = 0$ : $(\\tau p + 1)U_C(p) = E/p$.',
          '$U_C(p) = \\frac{E}{p(\\tau p + 1)} = \\frac{5}{p(p + 1)}$ (car $\\tau = 1$).',
          'Éléments simples : $\\frac{5}{p(p+1)} = \\frac{5}{p} - \\frac{5}{p+1}$. (Vérification : $\\frac{5(p+1) - 5p}{p(p+1)} = \\frac{5}{p(p+1)}$ ✓)',
          'Transformée inverse : $u_C(t) = 5 - 5e^{-t} = 5(1 - e^{-t/\\tau})$ V.',
          'Vérification : $u_C(0) = 0$ ✓, $u_C(+\\infty) = 5$ V ✓, $u_C(\\tau) = 5(1-e^{-1}) \\approx 3{,}16$ V ($63\\%$ de la valeur finale).'
        ],
        answer: '$u_C(t) = 5(1 - e^{-t})$ V. Le condensateur se charge exponentiellement vers $5$ V avec une constante de temps $\\tau = 1$ s.'
      },
      formulas: [
        '$\\mathcal{L}\\{1\\}=\\dfrac{1}{p}$, $\\mathcal{L}\\{e^{at}\\}=\\dfrac{1}{p-a}$',
        '$\\mathcal{L}\\{t^n\\}=\\dfrac{n!}{p^{n+1}}$',
        '$\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$',
        '$\\mathcal{L}\\{\\cos(\\omega t)\\}=\\dfrac{p}{p^2+\\omega^2}$, $\\mathcal{L}\\{\\sin(\\omega t)\\}=\\dfrac{\\omega}{p^2+\\omega^2}$'
      ],
      diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px;">$f(t)$ (domaine temporel)</th><th style="border:1px solid var(--border);padding:8px;">$F(p)$ (domaine de Laplace)</th></tr><tr><td style="border:1px solid var(--border);padding:8px;">$1$ (échelon)</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$t$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$e^{at}$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p-a}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$\\sin(\\omega t)$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{\\omega}{p^2+\\omega^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$\\cos(\\omega t)$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{p}{p^2+\\omega^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$f\'(t)$</td><td style="border:1px solid var(--border);padding:8px;">$pF(p) - f(0)$</td></tr></table>',
      recap: [
        'La transformée de Laplace convertit une ED en équation algébrique : dériver ↔ multiplier par $p$.',
        'Ne JAMAIS oublier le terme $-f(0)$ dans $\\mathcal{L}\\{f\'\\} = pF(p) - f(0)$ : il encode les conditions initiales.',
        'La décomposition en éléments simples est la clé de l\'inversion : chaque fraction simple correspond à une fonction standard du tableau.',
        'La fonction de transfert $H(p) = S(p)/E(p)$ caractérise un système ; ses pôles déterminent la stabilité (partie réelle < 0 = stable).'
      ],
      piege: 'La transformée de Laplace est définie pour $t\\ge0$ et suppose des conditions initiales à $t=0$. Elle ne s\'applique pas directement à des signaux définis sur $]-\\infty;+\\infty[$.'
    },
    quiz: [
      { q: '$\\mathcal{L}\\{e^{3t}\\}=$', options: ['$\\frac{1}{p-3}$', '$\\frac{1}{p+3}$', '$\\frac{3}{p}$', '$e^{3p}$'], answer: 0, correction: '$\\mathcal{L}\\{e^{at}\\}=\\frac{1}{p-a}$. Ici $a=3$.' },
      { q: 'Un étudiant résout $y\'(t)+2y(t)=0$ avec $y(0)=3$. Il écrit $pY(p)+2Y(p)=0$ et conclut $y(t)=0$. Quelle erreur a-t-il commise ?', options: ['Il n\'a pas appliqué la transformée de Laplace', 'Il a oublié le terme $-y(0)=-3$ dans $\\mathcal{L}\\{y\'\\}=pY(p)-y(0)$', 'L\'équation $y\'+2y=0$ n\'admet pas de solution', 'Il aurait dû utiliser $\\mathcal{L}\\{y\'\\}=F\'(p)$'], answer: 1, correction: 'La formule correcte est $\\mathcal{L}\\{y\'\\}=pY(p)-y(0)=pY(p)-3$. L\'équation devient $(p+2)Y(p)=3$, soit $Y(p)=\\frac{3}{p+2}$, d\'où $y(t)=3e^{-2t}\\neq0$. Oublier la condition initiale $y(0)$ dans la formule de dérivation est l\'erreur la plus fréquente en Laplace.' },
      { q: '$\\mathcal{L}^{-1}\\left\\{\\frac{1}{p-2}\\right\\}=$', options: ['$e^{-2t}$', '$e^{2t}$', '$\\frac{t^2}{2}$', '$\\cos(2t)$'], answer: 1, correction: '$\\mathcal{L}^{-1}\\left\\{\\frac{1}{p-a}\\right\\}=e^{at}$. Ici $a=2$, donc $e^{2t}$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4);
        return {
          statement: `Calculer $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${a+2}$. (Donner la valeur numérique)`,
          answer: parseFloat((1/(a+2-a)).toFixed(4)),
          tolerance: 0.01,
          unit: '',
          hint: `$\\mathcal{L}\\{e^{${a}t}\\}=\\frac{1}{p-${a}}$. Évaluer en $p=${a+2}$.`,
          solution: [`$F(p)=\\frac{1}{p-${a}}$. En $p=${a+2}$ : $F(${a+2})=\\frac{1}{${a+2}-${a}}=\\frac{1}{2}=0{,}5$`]
        };
      }
    },
    probleme: {
      context: 'Un circuit RC est modélisé par l\'équation $y\'(t)+2y(t)=e^{-t}$ avec $y(0)=0$.',
      tasks: [
        'Appliquer la transformée de Laplace à l\'équation différentielle.',
        'Exprimer $Y(p)=\\mathcal{L}\\{y\\}$ en fonction de $p$.',
        'Décomposer en éléments simples et trouver $y(t)$ par transformée inverse.'
      ],
      solutions: [
        '$pY(p)-y(0)+2Y(p)=\\frac{1}{p+1}$, soit $(p+2)Y(p)=\\frac{1}{p+1}$.',
        '$Y(p)=\\frac{1}{(p+1)(p+2)}$.',
        'Éléments simples : $\\frac{1}{(p+1)(p+2)}=\\frac{1}{p+1}-\\frac{1}{p+2}$. Inverse : $y(t)=e^{-t}-e^{-2t}$.'
      ],
      finalAnswer: '$y(t)=e^{-t}-e^{-2t}$ pour $t\\ge0$.'
    },

    evaluation: {
      title: 'Évaluation — Transformée de Laplace',
      duration: '45 min',
      questions: [
        {
          statement: 'Calculer $\\mathcal{L}\\{3e^{-2t}\\}$. Donner la valeur numérique de $F(p)$ pour $p = 5$.',
          type: 'numeric',
          answer: 0.43,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\mathcal{L}\\{3e^{-2t}\\} = \\dfrac{3}{p+2}$. En $p=5$ : $F(5) = \\dfrac{3}{5+2} = \\dfrac{3}{7} \\approx 0{,}43$.'
        },
        {
          statement: 'La transformée de Laplace de $f\'(t)$ est :',
          type: 'multiple-choice',
          options: ['$pF(p)$', '$pF(p) - f(0)$', '$F(p)/p$', '$F(p) + f(0)$'],
          answer: 1,
          points: 2,
          correction: '$\\mathcal{L}\\{f\'(t)\\} = pF(p) - f(0)$. Le terme $-f(0)$ encode la condition initiale. L\'oublier est l\'erreur la plus fréquente en Laplace.'
        },
        {
          statement: 'On considère $y\'(t) + 3y(t) = 6$ avec $y(0) = 0$. Après transformation de Laplace, exprimer $Y(p)$ et calculer $\\lim_{t \\to +\\infty} y(t)$ via le théorème de la valeur finale : $\\lim_{t\\to+\\infty} y(t) = \\lim_{p\\to 0} pY(p)$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Transformation : $(p+3)Y(p) = \\dfrac{6}{p}$, soit $Y(p) = \\dfrac{6}{p(p+3)}$. Théorème de la valeur finale : $\\lim_{t\\to+\\infty} y(t) = \\lim_{p\\to 0} pY(p) = \\lim_{p\\to 0} \\dfrac{6}{p+3} = \\dfrac{6}{3} = 2$. On peut vérifier : $y(t) = 2(1 - e^{-3t}) \\to 2$.'
        },
        {
          statement: '$\\mathcal{L}^{-1}\\left\\{\\dfrac{5}{p^2+25}\\right\\}$ est égal à :',
          type: 'multiple-choice',
          options: ['$5\\cos(5t)$', '$\\sin(5t)$', '$5\\sin(5t)$', '$e^{-5t}$'],
          answer: 1,
          points: 1,
          correction: '$\\mathcal{L}\\{\\sin(\\omega t)\\} = \\dfrac{\\omega}{p^2+\\omega^2}$. Ici $\\omega = 5$, donc $\\dfrac{5}{p^2+25} = \\dfrac{\\omega}{p^2+\\omega^2}$ et la transformée inverse est $\\sin(5t)$.'
        },
        {
          statement: 'Soit $Y(p) = \\dfrac{4}{(p+1)(p+3)}$. Décomposer en éléments simples et calculer $y(1)$ (arrondir à $0{,}01$).',
          type: 'numeric',
          answer: 0.64,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: 'Éléments simples : $\\dfrac{4}{(p+1)(p+3)} = \\dfrac{2}{p+1} - \\dfrac{2}{p+3}$. Donc $y(t) = 2e^{-t} - 2e^{-3t}$. En $t=1$ : $y(1) = 2e^{-1} - 2e^{-3} = 2 \\times 0{,}3679 - 2 \\times 0{,}0498 \\approx 0{,}7358 - 0{,}0996 \\approx 0{,}64$.'
        }
      ]
    }
  }

);
