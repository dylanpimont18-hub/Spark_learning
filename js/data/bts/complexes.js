/* =========================================================
   Spark Learning – data/bts/complexes.js
   Module : Nombres Complexes (BTS)
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
  }
);
