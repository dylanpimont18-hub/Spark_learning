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

      diagram: {
        theme: 'si',
        kicker: 'Diagramme de Bode',
        title: 'Filtre passe-bas du 1er ordre : H0 = 10, ωc = 100 rad/s',
        description: 'Les deux courbes (gain et phase) partagent le même axe des fréquences, en échelle logarithmique. Le tracé en pointillés donne les asymptotes ; la courbe pleine est la réponse réelle du filtre.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="bode-graph-title bode-graph-desc">
            <title id="bode-graph-title">Diagramme de Bode d'un filtre passe-bas du 1er ordre</title>
            <desc id="bode-graph-desc">Deux courbes empilées, gain en decibels et phase en degres, en fonction de la pulsation en echelle logarithmique de 1 a 10000 rad/s. Le gain part d'un plateau a 20 dB puis chute a -20 dB par decade au-dela de 100 rad/s ; la phase passe de 0 a -90 degres en valant -45 degres a 100 rad/s.</desc>

            <!-- grilles -->
            <line class="grid-line" x1="155" y1="20" x2="155" y2="340"></line>
            <line class="grid-line" x1="345" y1="20" x2="345" y2="340"></line>
            <line class="grid-line" x1="60" y1="82.5" x2="440" y2="82.5"></line>

            <!-- cadres des deux graphes -->
            <rect class="frame-line" x="60" y="20" width="380" height="150" fill="none"></rect>
            <rect class="frame-line" x="60" y="210" width="380" height="130" fill="none"></rect>

            <!-- asymptotes du gain : plateau BF puis pente -20 dB/decade -->
            <line class="guide-line" x1="60" y1="32.5" x2="250" y2="32.5"></line>
            <line class="guide-line" x1="250" y1="32.5" x2="440" y2="132.5"></line>

            <!-- asymptotes de la phase : 0 deg, pente, -90 deg -->
            <line class="guide-line" x1="60" y1="216.5" x2="155" y2="216.5"></line>
            <line class="guide-line" x1="155" y1="216.5" x2="345" y2="333.5"></line>
            <line class="guide-line" x1="345" y1="333.5" x2="440" y2="333.5"></line>

            <!-- reperage vertical de la pulsation de coupure -->
            <line class="guide-line" x1="250" y1="20" x2="250" y2="340"></line>

            <!-- courbe de gain reelle -->
            <polyline class="curve-main" points="60.0,32.5 66.4,32.5 72.9,32.5 79.3,32.5 85.8,32.5 92.2,32.5 98.6,32.5 105.1,32.5 111.5,32.5 118.0,32.5 124.4,32.5 130.8,32.5 137.3,32.5 143.7,32.6 150.2,32.6 156.6,32.6 163.1,32.7 169.5,32.7 175.9,32.8 182.4,32.9 188.8,33.0 195.3,33.2 201.7,33.5 208.1,33.8 214.6,34.3 221.0,34.9 227.5,35.6 233.9,36.6 240.3,37.8 246.8,39.2 253.2,40.9 259.7,42.9 266.1,45.1 272.5,47.5 279.0,50.1 285.4,52.9 291.9,55.9 298.3,58.9 304.7,62.1 311.2,65.2 317.6,68.5 324.1,71.8 330.5,75.1 336.9,78.4 343.4,81.8 349.8,85.1 356.3,88.5 362.7,91.9 369.2,95.2 375.6,98.6 382.0,102.0 388.5,105.4 394.9,108.8 401.4,112.2 407.8,115.6 414.2,118.9 420.7,122.3 427.1,125.7 433.6,129.1 440.0,132.5"></polyline>

            <!-- courbe de phase reelle -->
            <polyline class="curve-main" points="60.0,217.2 66.4,217.4 72.9,217.5 79.3,217.7 85.8,217.9 92.2,218.1 98.6,218.4 105.1,218.7 111.5,219.1 118.0,219.5 124.4,220.0 130.8,220.6 137.3,221.3 143.7,222.2 150.2,223.1 156.6,224.2 163.1,225.5 169.5,227.0 175.9,228.8 182.4,230.8 188.8,233.1 195.3,235.8 201.7,238.9 208.1,242.4 214.6,246.4 221.0,250.8 227.5,255.6 233.9,260.8 240.3,266.4 246.8,272.1 253.2,277.9 259.7,283.6 266.1,289.2 272.5,294.4 279.0,299.2 285.4,303.6 291.9,307.6 298.3,311.1 304.7,314.2 311.2,316.9 317.6,319.2 324.1,321.2 330.5,323.0 336.9,324.5 343.4,325.8 349.8,326.9 356.3,327.8 362.7,328.7 369.2,329.4 375.6,330.0 382.0,330.5 388.5,330.9 394.9,331.3 401.4,331.6 407.8,331.9 414.2,332.1 420.7,332.3 427.1,332.5 433.6,332.6 440.0,332.8"></polyline>

            <!-- points remarquables a la pulsation de coupure -->
            <circle class="plot-point" cx="250" cy="40.0" r="5"></circle>
            <circle class="plot-point-alt" cx="250" cy="275" r="5"></circle>

            <!-- graduations verticales (decades) -->
            <text class="tick-label" x="60" y="352" text-anchor="middle">1</text>
            <text class="tick-label" x="155" y="352" text-anchor="middle">10</text>
            <text class="tick-label" x="250" y="352" text-anchor="middle">10²</text>
            <text class="tick-label" x="345" y="352" text-anchor="middle">10³</text>
            <text class="tick-label" x="440" y="352" text-anchor="middle">10⁴</text>
            <text class="axis-label" x="250" y="368" text-anchor="middle">ω (rad/s)</text>

            <!-- graduations du gain -->
            <text class="tick-label" x="50" y="36" text-anchor="end">20</text>
            <text class="tick-label" x="50" y="86" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="136" text-anchor="end">-20</text>
            <text class="axis-label" x="15" y="95" text-anchor="middle" transform="rotate(-90 15 95)">G (dB)</text>

            <!-- graduations de la phase -->
            <text class="tick-label" x="50" y="220" text-anchor="end">0°</text>
            <text class="tick-label" x="50" y="279" text-anchor="end">-45°</text>
            <text class="tick-label" x="50" y="337" text-anchor="end">-90°</text>
            <text class="axis-label" x="15" y="275" text-anchor="middle" transform="rotate(-90 15 275)">φ (°)</text>

            <!-- etiquettes des deux graphes -->
            <text class="label-soft" x="66" y="34">Gain</text>
            <text class="label-soft" x="66" y="224">Phase</text>

            <!-- annotations sur les points remarquables -->
            <text class="annotation-label" x="256" y="30">ωc = 100 rad/s</text>
            <text class="annotation-label" x="258" y="37">17 dB</text>
            <text class="annotation-label" x="258" y="271">-45°</text>
          </svg>
        `,
        notes: [
          'Le gain part du plateau G0 = 20 dB en basse fréquence, puis chute avec une pente de -20 dB/décade au-delà de ωc.',
          'Au point de coupure ωc = 100 rad/s, le gain réel vaut 17 dB — 3 dB sous l\'intersection des deux asymptotes, jamais pile sur le coin.',
          'La phase passe de 0° à -90°, en valant exactement -45° à ωc : c\'est le point d\'inflexion de la courbe.'
        ],
        reading: 'Repère d\'abord les deux asymptotes en pointillés : leur intersection donne ωc. La vraie courbe (trait plein) passe toujours 3 dB en dessous de ce coin.',
        caption: 'Diagramme de Bode du filtre H(jω) = 10 / (1 + jω/100) — gain (haut) et phase (bas) en fonction de ω, échelle logarithmique.'
      },

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
              `$G_{\\text{dB}} = 20 \\times ${Math.log10(H0).toFixed(3).replace('.', '{,}')}$`,
              `$G_{\\text{dB}} = ${String(GdB).replace('.', '{,}')}$ dB`
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
              `$f_c \\approx ${String(fc).replace('.', '{,}')}$ Hz`
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
              `$|H(j\\omega_c)| \\approx ${String(Hc).replace('.', '{,}')}$`
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
