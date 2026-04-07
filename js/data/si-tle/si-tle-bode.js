/* =========================================================
   Spark Learning – data/si-tle/si-tle-bode.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-tle-bode',
    level: 2, subject: 'si',
    icon: '📈',
    title: 'Analyse fréquentielle (Bode)',
    subtitle: 'Gain en dB, phase, fréquence de coupure, 1er et 2nd ordre',
    keywords: ['Bode', 'Gain', 'Phase', 'Fréquence de coupure', 'Décibel', 'Facteur de qualité'],
    physics: 'Filtrage audio (égaliseurs, enceintes), télécommunications (bande passante), capteurs industriels (filtrage du bruit), systèmes asservis (marges de stabilité).',

    cours: {
      intro: 'Le <strong>diagramme de Bode</strong> est l\'outil fondamental de l\'analyse fréquentielle en automatique et en électronique. Il représente le comportement d\'un système linéaire en fonction de la fréquence (ou de la pulsation $\\omega$) sur une échelle logarithmique.<br/><br/>' +
        'Il comprend <strong>deux courbes</strong> :<br/>' +
        '- Le <strong>gain</strong> : $G_{\\text{dB}} = 20 \\log|H(j\\omega)|$ (en décibels). Un gain de $0$ dB signifie $|H| = 1$ ; un gain de $20$ dB signifie $|H| = 10$ ; un gain de $-20$ dB signifie $|H| = 0{,}1$.<br/>' +
        '- La <strong>phase</strong> : $\\varphi = \\arg(H(j\\omega))$ (en degrés).<br/><br/>' +
        '<strong>Système du 1er ordre</strong> (passe-bas) : $H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$. La pulsation de coupure est $\\omega_c$ (ou $f_c = \\omega_c / 2\\pi$). À $\\omega = \\omega_c$, le gain chute de $-3$ dB et la phase vaut $-45°$. L\'asymptote haute fréquence a une pente de $-20$ dB/décade. La phase varie de $0°$ (BF) à $-90°$ (HF).<br/><br/>' +
        '<strong>Système du 2nd ordre</strong> : $H(j\\omega) = \\dfrac{H_0}{1 + 2m\\dfrac{j\\omega}{\\omega_0} + \\left(\\dfrac{j\\omega}{\\omega_0}\\right)^2}$, où $m$ est le coefficient d\'amortissement et $\\omega_0$ la pulsation propre. Si $m < 0{,}707$, il y a une <strong>résonance</strong> (pic de gain) au voisinage de $\\omega_0$. Le facteur de qualité est $Q = \\dfrac{1}{2m}$. L\'asymptote HF a une pente de $-40$ dB/décade et la phase varie de $0°$ à $-180°$.',

      definitions: [
        { term: 'Gain en décibels', def: '$G_{\\text{dB}} = 20 \\log|H(j\\omega)|$. Échelle logarithmique : $0$ dB $\\Leftrightarrow |H| = 1$, $20$ dB $\\Leftrightarrow |H| = 10$, $-6$ dB $\\Leftrightarrow |H| \\approx 0{,}5$.' },
        { term: 'Fréquence de coupure', def: 'Pulsation $\\omega_c$ (ou fréquence $f_c = \\omega_c / 2\\pi$) à laquelle le gain a chuté de $3$ dB par rapport au gain maximal. Définit la limite de la bande passante.' },
        { term: 'Passe-bas du 1er ordre', def: '$H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$. Pente asymptotique : $-20$ dB/décade. Phase à $\\omega_c$ : $-45°$.' },
        { term: 'Passe-bas du 2nd ordre', def: '$H(j\\omega) = \\dfrac{H_0}{1 + 2m (j\\omega/\\omega_0) + (j\\omega/\\omega_0)^2}$. Pente HF : $-40$ dB/décade. Résonance si $m < 0{,}707$.' },
        { term: 'Facteur de qualité', def: '$Q = \\dfrac{1}{2m}$ — caractérise l\'acuité de la résonance. Plus $Q$ est grand ($m$ petit), plus le pic de résonance est prononcé.' }
      ],

      method: {
        title: 'Tracer et exploiter un diagramme de Bode',
        steps: [
          '<strong>Identifier $H(j\\omega)$</strong> : écrire la fonction de transfert sous forme canonique. Identifier l\'ordre (1er ou 2nd) et les paramètres ($H_0$, $\\omega_c$ ou $\\omega_0$, $m$).',
          '<strong>Gain statique</strong> : calculer $H_0 = |H(0)|$ et $G_0 = 20 \\log(H_0)$ dB.<br/>Exemple : $H_0 = 10 \\Rightarrow G_0 = 20$ dB.',
          '<strong>Pulsation de coupure / propre</strong> : 1er ordre → $\\omega_c$ dans le dénominateur. 2nd ordre → $\\omega_0 = \\sqrt{\\text{coeff. de } \\omega^2}$ et $m = \\text{coeff. de } j\\omega/(2\\omega_0)$.',
          '<strong>Tracer les asymptotes</strong> : BF → horizontale à $G_0$. HF → pente $-20$ dB/déc (1er ordre) ou $-40$ dB/déc (2nd ordre). Raccordement à $\\omega_c$ ($-3$ dB) ou $\\omega_0$.',
          '<strong>Phase</strong> : 1er ordre → de $0°$ à $-90°$, passant par $-45°$ à $\\omega_c$. 2nd ordre → de $0°$ à $-180°$, passant par $-90°$ à $\\omega_0$.'
        ]
      },

      example: {
        statement: 'Un filtre passe-bas du 1er ordre a un gain statique $H_0 = 10$ et une pulsation de coupure $\\omega_c = 100$ rad/s. Déterminer $G_0$, $f_c$ et les caractéristiques à $\\omega_c$.',
        steps: [
          '$G_0 = 20 \\log(10) = 20$ dB',
          '$f_c = \\dfrac{\\omega_c}{2\\pi} = \\dfrac{100}{2\\pi} \\approx 15{,}9$ Hz',
          'À $\\omega = \\omega_c$ : $G = G_0 - 3 = 17$ dB, $|H| = H_0/\\sqrt{2} \\approx 7{,}07$ et $\\varphi = -45°$'
        ],
        answer: '$G_0 = 20$ dB, $f_c \\approx 15{,}9$ Hz, gain à la coupure : $17$ dB'
      },

      formulas: [
        '$G_{\\text{dB}} = 20 \\log|H(j\\omega)|$ — Gain en décibels',
        '$f_c = \\dfrac{\\omega_c}{2\\pi}$ — Fréquence de coupure (Hz)',
        '$H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$ — Passe-bas 1er ordre ($-20$ dB/déc)',
        '$|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}}$ — Module à la coupure ($-3$ dB)',
        '$Q = \\dfrac{1}{2m}$ — Facteur de qualité (2nd ordre)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Caractéristique</th><th style="border:1px solid var(--border);padding:8px">1er ordre</th><th style="border:1px solid var(--border);padding:8px">2nd ordre</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Fonction de transfert</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{H_0}{1 + j\\omega/\\omega_c}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{H_0}{1 + 2m(j\\omega/\\omega_0) + (j\\omega/\\omega_0)^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pente asymptotique HF</td><td style="border:1px solid var(--border);padding:8px">$-20$ dB/décade</td><td style="border:1px solid var(--border);padding:8px">$-40$ dB/décade</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Phase à la pulsation caractéristique</td><td style="border:1px solid var(--border);padding:8px">$-45°$ à $\\omega_c$</td><td style="border:1px solid var(--border);padding:8px">$-90°$ à $\\omega_0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Phase en HF ($\\omega \\to \\infty$)</td><td style="border:1px solid var(--border);padding:8px">$-90°$</td><td style="border:1px solid var(--border);padding:8px">$-180°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Résonance</td><td style="border:1px solid var(--border);padding:8px">Aucune</td><td style="border:1px solid var(--border);padding:8px">Si $m < 0{,}707$ (soit $Q > 0{,}707$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Gain à la coupure</td><td style="border:1px solid var(--border);padding:8px">$G_0 - 3$ dB</td><td style="border:1px solid var(--border);padding:8px">$G_0 + 20\\log(Q)$ dB (au pic)</td></tr></table>',

      recap: [
        'Le gain en dB convertit un rapport d\'amplitude en échelle logarithmique : $G = 20 \\log|H|$.',
        'La fréquence de coupure à $-3$ dB définit la limite de la bande passante.',
        'Un 1er ordre : pente $-20$ dB/déc, phase de $0°$ à $-90°$. Un 2nd ordre : pente $-40$ dB/déc, phase de $0°$ à $-180°$.',
        'Un 2nd ordre avec $m < 0{,}707$ présente une résonance (pic de gain). Le facteur de qualité $Q = 1/(2m)$ mesure l\'acuité du pic.'
      ],

      piege: 'Ne confonds pas pulsation $\\omega$ (en rad/s) et fréquence $f$ (en Hz) ! On a $\\omega = 2\\pi f$. La conversion $f_c = \\omega_c / (2\\pi)$ est souvent source d\'erreur par oubli du $2\\pi$. Autre piège : le gain en dB utilise $20 \\log$ pour un gain en tension/amplitude, mais $10 \\log$ pour un gain en puissance — en SI on utilise presque toujours $20 \\log$.'
    },

    quiz: [
      {
        q: 'Le gain en décibels d\'un système dont le module vaut $|H| = 100$ est :',
        options: [
          '$G = 40$ dB',
          '$G = 20$ dB',
          '$G = 100$ dB',
          '$G = 2$ dB'
        ],
        answer: 0,
        correction: '$G_{\\text{dB}} = 20 \\log(100) = 20 \\times \\log(10^2) = 20 \\times 2 = 40$ dB.'
      },
      {
        q: 'Pour un passe-bas du 2nd ordre, la pente asymptotique au-delà de la pulsation propre est :',
        options: [
          '$-40$ dB/décade',
          '$-20$ dB/décade',
          '$-60$ dB/décade',
          '$-6$ dB/décade'
        ],
        answer: 0,
        correction: 'Un système du 2nd ordre atténue de $-40$ dB/décade (soit $-12$ dB/octave) en haute fréquence. Un 1er ordre atténue de $-20$ dB/décade.'
      },
      {
        q: 'À la fréquence de coupure d\'un passe-bas du 1er ordre, la phase vaut :',
        options: [
          '$-45°$',
          '$-90°$',
          '$0°$',
          '$-180°$'
        ],
        answer: 0,
        correction: 'Pour un passe-bas du 1er ordre, la phase varie de $0°$ (BF) à $-90°$ (HF) en passant par $-45°$ exactement à la pulsation de coupure $\\omega_c$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['gain', 'freq', 'module_coupure']);
        if (scenario === 'gain') {
          const H0 = pick([2, 5, 10, 20, 50, 100, 200, 500, 1000]);
          const GdB = parseFloat((20 * Math.log10(H0)).toFixed(1));
          return {
            statement: `Un système a un gain en amplitude $|H| = ${H0}$. Calcule le gain en décibels $G_{\\text{dB}}$ (arrondi à $0{,}1$ dB).`,
            answer: GdB,
            tolerance: 0.2,
            unit: 'dB',
            hint: `Utilise la formule $G_{\\text{dB}} = 20 \\log(|H|)$. Rappel : $\\log(10) = 1$, $\\log(2) \\approx 0{,}301$, $\\log(5) \\approx 0{,}699$.`,
            solution: [
              `$G_{\\text{dB}} = 20 \\log(${H0})$`,
              `$G_{\\text{dB}} = 20 \\times ${Math.log10(H0).toFixed(3)}$`,
              `$G_{\\text{dB}} = ${GdB}$ dB`
            ]
          };
        } else if (scenario === 'freq') {
          const wc = pick([10, 50, 100, 200, 500, 1000, 2000, 5000]);
          const fc = parseFloat((wc / (2 * Math.PI)).toFixed(1));
          return {
            statement: `Un filtre passe-bas du 1er ordre a une pulsation de coupure $\\omega_c = ${wc}$ rad/s. Calcule la fréquence de coupure $f_c$ en Hz (arrondi à $0{,}1$ Hz).`,
            answer: fc,
            tolerance: 0.5,
            unit: 'Hz',
            hint: `La relation entre pulsation et fréquence est $f_c = \\dfrac{\\omega_c}{2\\pi}$. Rappel : $2\\pi \\approx 6{,}283$.`,
            solution: [
              `$f_c = \\dfrac{\\omega_c}{2\\pi} = \\dfrac{${wc}}{2\\pi}$`,
              `$f_c = \\dfrac{${wc}}{6{,}283}$`,
              `$f_c \\approx ${fc}$ Hz`
            ]
          };
        } else {
          const H0 = pick([4, 8, 10, 20, 50]);
          const Hc = parseFloat((H0 / Math.sqrt(2)).toFixed(2));
          return {
            statement: `Un passe-bas du 1er ordre a un gain statique $H_0 = ${H0}$. Quel est le module $|H|$ à la pulsation de coupure $\\omega_c$ ? (arrondi à $0{,}01$)`,
            answer: Hc,
            tolerance: 0.05,
            unit: '',
            hint: `À la coupure, le module vaut $|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}}$.`,
            solution: [
              `$|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}} = \\dfrac{${H0}}{1{,}414}$`,
              `$|H(j\\omega_c)| \\approx ${Hc}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un capteur de température délivre un signal bruité. On place en sortie un filtre passe-bas du 1er ordre de fonction de transfert $H(j\\omega) = \\dfrac{4}{1 + j\\omega/200}$. Le signal utile a une fréquence de $5$ Hz et le bruit parasite est à $500$ Hz.',
      tasks: [
        'Déterminer le gain statique $G_0$ (en dB) et la fréquence de coupure $f_c$ (en Hz).',
        'Calculer le gain (en dB) à la fréquence du signal utile ($f = 5$ Hz, soit $\\omega = 10\\pi \\approx 31{,}4$ rad/s).',
        'Calculer le gain (en dB) à la fréquence du bruit ($f = 500$ Hz, soit $\\omega = 1000\\pi \\approx 3142$ rad/s). Le filtre est-il efficace ?'
      ],
      solutions: [
        '$G_0 = 20 \\log(4) \\approx 12{,}04$ dB. $f_c = \\dfrac{200}{2\\pi} \\approx 31{,}8$ Hz.',
        '$|H(j 31{,}4)| = \\dfrac{4}{\\sqrt{1 + (31{,}4/200)^2}} = \\dfrac{4}{\\sqrt{1{,}025}} \\approx 3{,}95$. $G \\approx 20 \\log(3{,}95) \\approx 11{,}9$ dB. Le signal utile passe quasiment sans atténuation.',
        '$|H(j 3142)| = \\dfrac{4}{\\sqrt{1 + (3142/200)^2}} \\approx \\dfrac{4}{15{,}7} \\approx 0{,}255$. $G \\approx 20 \\log(0{,}255) \\approx -11{,}9$ dB. Le bruit est atténué d\'environ $24$ dB par rapport au signal utile : le filtre est très efficace.'
      ],
      finalAnswer: 'Le filtre laisse passer le signal utile ($\\approx 12$ dB) et atténue fortement le bruit ($\\approx -12$ dB), soit un écart de $\\sim 24$ dB.'
    },

    evaluation: {
      title: 'Évaluation — Analyse fréquentielle (Bode)',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer le gain en dB pour $|H| = 10$.',
          type: 'numeric',
          answer: 20,
          tolerance: 0.1,
          unit: 'dB',
          points: 2,
          correction: '$G_{\\text{dB}} = 20 \\log(10) = 20 \\times 1 = 20$ dB.'
        },
        {
          statement: 'Un filtre a une pulsation de coupure $\\omega_c = 314$ rad/s. La fréquence de coupure $f_c$ est (en Hz) :',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'Hz',
          points: 2,
          correction: '$f_c = \\dfrac{314}{2\\pi} = \\dfrac{314}{6{,}28} \\approx 50$ Hz.'
        },
        {
          statement: 'Pour un passe-bas du 1er ordre, la pente asymptotique au-delà de $f_c$ est :',
          type: 'multiple-choice',
          options: ['$-20$ dB/décade', '$-40$ dB/décade', '$-6$ dB/décade', '$-10$ dB/décade'],
          answer: 0,
          points: 2,
          correction: 'Un filtre du 1er ordre a une pente de $-20$ dB/décade (ou $-6$ dB/octave). Un 2nd ordre aurait $-40$ dB/décade (ou $-12$ dB/octave).'
        },
        {
          statement: 'Un gain de $G = -6$ dB correspond à un rapport d\'amplitude $|H|$ de :',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$|H| = 10^{G/20} = 10^{-6/20} = 10^{-0{,}3} \\approx 0{,}5$. Un gain de $-6$ dB divise l\'amplitude par $2$.'
        },
        {
          statement: 'Un système du 2nd ordre a un coefficient d\'amortissement $m = 0{,}25$. Son facteur de qualité $Q$ vaut :',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$Q = \\dfrac{1}{2m} = \\dfrac{1}{2 \\times 0{,}25} = \\dfrac{1}{0{,}5} = 2$. Comme $m < 0{,}707$, le système présente une résonance.'
        }
      ]
    }
  });
