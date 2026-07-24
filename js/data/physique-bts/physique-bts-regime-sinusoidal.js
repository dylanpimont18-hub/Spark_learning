/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-regime-sinusoidal.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-regime-sinusoidal',
    level: 3, subject: 'physique',
    icon: '🔌',
    title: 'Circuits en régime sinusoïdal (impédance)',
    subtitle: 'Valeur efficace, impédance complexe, déphasage, circuits RLC série, résonance',
    keywords: ['Impédance', 'Déphasage', 'RLC', 'Résonance', 'Sinusoïdal'],
    physics: 'L\'étude des circuits en régime sinusoïdal permet de dimensionner les installations alimentées en courant alternatif (moteurs, éclairage, secteur domestique), de comprendre le rôle des condensateurs de compensation du facteur de puissance, et d\'analyser le comportement des filtres électroniques utilisés en régulation et en domotique.',

    cours: {
      intro: 'En régime sinusoïdal, la tension et le courant oscillent tous deux à la <strong>même fréquence</strong> $f$, mais peuvent être <strong>déphasés</strong> l\'un par rapport à l\'autre. On caractérise cette oscillation par la <strong>pulsation</strong> $\\omega = 2\\pi f$ (en rad/s) et par la <strong>valeur efficace</strong> $U = \\dfrac{U_{max}}{\\sqrt{2}}$, qui généralise la notion de tension continue équivalente.<br/><br/>La loi d\'Ohm se généralise grâce à l\'<strong>impédance</strong> $Z$ (en ohms, Ω), telle que $U = Z \\times I$ (en valeurs efficaces). Chaque composant introduit sa propre impédance : une résistance $R$ ne déphase pas ($Z_R = R$), une bobine d\'inductance $L$ introduit une <strong>réactance inductive</strong> $X_L = L\\omega$, et un condensateur de capacité $C$ introduit une <strong>réactance capacitive</strong> $X_C = \\dfrac{1}{C\\omega}$.<br/><br/>Pour un circuit RLC série, l\'impédance totale se calcule par une <strong>somme quadratique</strong> : $Z = \\sqrt{R^2 + (X_L - X_C)^2}$, et le <strong>déphasage</strong> $\\varphi$ entre tension et courant vérifie $\\tan\\varphi = \\dfrac{X_L - X_C}{R}$.',
      definitions: [
        { term: 'Valeur efficace', def: 'Pour une grandeur sinusoïdale d\'amplitude $U_{max}$, la valeur efficace est $U = \\dfrac{U_{max}}{\\sqrt{2}}$. C\'est la valeur affichée par un multimètre en mode AC, et celle qui produit le même effet thermique qu\'une tension continue de même valeur.' },
        { term: 'Impédance ($Z$)', def: 'Généralisation de la résistance en régime sinusoïdal : $U = Z \\times I$ (valeurs efficaces), avec $Z$ en ohms (Ω). Pour un circuit RLC série, $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.' },
        { term: 'Déphasage ($\\varphi$)', def: 'Angle représentant le décalage temporel entre la tension et le courant : $\\tan\\varphi = \\dfrac{X_L - X_C}{R}$. Si $\\varphi > 0$ (circuit inductif), le courant est en retard sur la tension ; si $\\varphi < 0$ (circuit capacitif), le courant est en avance.' },
        { term: 'Résonance (circuit RLC série)', def: 'Pulsation particulière $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ pour laquelle $X_L = X_C$ : les effets de la bobine et du condensateur s\'annulent, l\'impédance devient minimale ($Z = R$) et le déphasage s\'annule ($\\varphi = 0$).' }
      ],
      method: {
        title: 'Analyser un circuit RLC série en régime sinusoïdal en 3 étapes',
        steps: [
          '<strong>Calculer la pulsation</strong> $\\omega = 2\\pi f$, puis les réactances $X_L = L\\omega$ (bobine) et $X_C = \\dfrac{1}{C\\omega}$ (condensateur).',
          '<strong>Calculer l\'impédance totale</strong> $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ (somme quadratique, jamais une simple addition de $R$, $X_L$ et $X_C$).',
          '<strong>En déduire</strong> le courant efficace $I = \\dfrac{U}{Z}$ (loi d\'Ohm généralisée) et le déphasage $\\varphi = \\arctan\\left(\\dfrac{X_L-X_C}{R}\\right)$, qui indique le comportement inductif ($\\varphi>0$) ou capacitif ($\\varphi<0$) du circuit.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Diagramme de Fresnel (représentation vectorielle)',
        title: 'Déphasage courant-tension dans un circuit inductif (RL série)',
        description: 'Le vecteur de Fresnel représentant la tension $U$ sert de référence des phases. Dans un circuit à dominante inductive, le vecteur courant $I$ accuse un <strong>retard angulaire</strong> $\\varphi$ par rapport à $U$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="fresnel-title fresnel-desc">
            <title id="fresnel-title">Diagramme de Fresnel montrant le dephasage entre tension et courant</title>
            <desc id="fresnel-desc">Un vecteur U horizontal sert de reference des phases. Un vecteur I, de meme origine, est incline vers le bas d'un angle phi par rapport a U, ce qui traduit un retard du courant sur la tension dans un circuit a dominante inductive. Un petit arc de cercle materialise l'angle phi entre les deux vecteurs.</desc>

            <defs>
              <marker id="arrow-physbts-fresnel" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe de reference des phases -->
            <line class="guide-line" x1="40" y1="160" x2="500" y2="160"></line>

            <!-- origine -->
            <circle class="plot-point" cx="110" cy="160" r="4"></circle>

            <!-- vecteur U (reference des phases) -->
            <line class="curve-main" x1="110" y1="160" x2="350" y2="160" marker-end="url(#arrow-physbts-fresnel)"></line>
            <text class="annotation-label" x="365" y="164">U</text>

            <!-- vecteur I (en retard de phase, circuit inductif) -->
            <line class="curve-main" x1="110" y1="160" x2="280" y2="266" marker-end="url(#arrow-physbts-fresnel)"></line>
            <text class="annotation-label" x="292" y="270">I</text>

            <!-- arc de l'angle phi -->
            <path class="guide-line" d="M165,160 A55,55 0 0,1 156.6,189.1" fill="none"></path>
            <text class="annotation-label" x="176" y="196">φ</text>

            <!-- etiquette axe de reference -->
            <text class="label-soft" x="495" y="152" text-anchor="end">Référence des phases</text>
          </svg>
        `,
        notes: [
          'Le vecteur de Fresnel représentant la tension $U$ sert de <strong>référence des phases</strong> (angle nul par convention).',
          'Dans un circuit à dominante <strong>inductive</strong> (bobine), le courant $I$ est en retard de phase par rapport à la tension : l\'angle $\\varphi$ entre $U$ et $I$ est positif.',
          'Le déphasage $\\varphi$ est directement lié à l\'impédance complexe : $\\tan\\varphi = \\dfrac{X}{R}$, où $X = L\\omega - \\dfrac{1}{C\\omega}$ est la réactance totale du circuit.'
        ],
        reading: 'Repère le vecteur $U$ à l\'horizontale (référence des phases), puis suis le vecteur $I$ qui accuse un retard angulaire $\\varphi$ : c\'est la signature d\'un circuit inductif.',
        caption: 'Diagramme de Fresnel : le courant $I$ est déphasé en retard de $\\varphi$ par rapport à la tension $U$ dans un circuit RL série.'
      },
      example: {
        statement: 'Un circuit RLC série comporte une résistance $R = 50$ Ω, une bobine d\'inductance $L = 0{,}2$ H et un condensateur de capacité $C = 20$ µF, alimenté par une tension sinusoïdale de fréquence $f = 50$ Hz.<br/><br/>Calculer l\'impédance $Z$ du circuit, puis le déphasage $\\varphi$ entre tension et courant.',
        steps: [
          'Pulsation : $\\omega = 2\\pi f = 2\\pi \\times 50 \\approx 314{,}16$ rad/s.',
          'Réactances : $X_L = L\\omega \\approx 0{,}2 \\times 314{,}16 \\approx 62{,}83$ Ω et $X_C = \\dfrac{1}{C\\omega} \\approx \\dfrac{1}{20\\times10^{-6} \\times 314{,}16} \\approx 159{,}15$ Ω.',
          'Réactance totale : $X = X_L - X_C \\approx 62{,}83 - 159{,}15 \\approx -96{,}32$ Ω (négative : le circuit est à dominante <strong>capacitive</strong>).',
          'Impédance : $Z = \\sqrt{R^2 + X^2} = \\sqrt{50^2 + (-96{,}32)^2} \\approx 108{,}53$ Ω.',
          'Déphasage : $\\varphi = \\arctan\\left(\\dfrac{X}{R}\\right) = \\arctan\\left(\\dfrac{-96{,}32}{50}\\right) \\approx -62{,}6°$.'
        ],
        answer: '$Z \\approx 108{,}53$ Ω et $\\varphi \\approx -62{,}6°$. Le déphasage <strong>négatif</strong> indique que le courant est en <strong>avance</strong> sur la tension : contrairement au cas inductif du diagramme, ce circuit est ici à dominante capacitive, car $X_C > X_L$.'
      },
      formulas: [
        'Valeur efficace : $U = \\dfrac{U_{max}}{\\sqrt{2}}$',
        'Réactances : $X_L = L\\omega$ (bobine), $X_C = \\dfrac{1}{C\\omega}$ (condensateur)',
        'Impédance (RLC série) : $Z = \\sqrt{R^2 + (X_L - X_C)^2}$',
        'Déphasage : $\\tan\\varphi = \\dfrac{X_L - X_C}{R}$',
        'Résonance : $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ (à la résonance, $Z = R$ minimal et $\\varphi = 0$)'
      ],
      recap: [
        'En régime sinusoïdal, tension et courant oscillent à la même fréquence mais peuvent être <strong>déphasés</strong>.',
        'L\'impédance $Z$ généralise la loi d\'Ohm : $U = Z \\times I$ (valeurs efficaces), avec $Z$ en ohms.',
        'Une bobine impose un courant en <strong>retard</strong> de phase ($\\varphi>0$) ; un condensateur impose un courant en <strong>avance</strong> de phase ($\\varphi<0$).',
        'À la <strong>résonance</strong> ($L\\omega_0 = \\frac{1}{C\\omega_0}$), les effets de $L$ et $C$ s\'annulent : $Z = R$ est minimale et le courant est maximal.'
      ],
      piege: 'Une erreur fréquente est d\'additionner directement $R$, $X_L$ et $X_C$ comme si l\'impédance était une simple somme algébrique de résistances. Attention : seule la formule $Z=\\sqrt{R^2+(X_L-X_C)^2}$ (somme quadratique, comme dans un triangle rectangle) donne l\'impédance réelle, car la résistance et la réactance ne jouent pas le même rôle physique (l\'une dissipe de l\'énergie, l\'autre la stocke et la restitue).'
    },

    quiz: [
      {
        q: 'Un circuit comporte une résistance $R = 80$ Ω en série avec une réactance totale $X = 60$ Ω. Quelle est l\'impédance $Z$ du circuit ?',
        options: [
          '$Z = 140$ Ω',
          '$Z = 100$ Ω',
          '$Z = 20$ Ω',
          '$Z = 4\\,800$ Ω'
        ],
        answer: 1,
        correction: '$Z = \\sqrt{R^2+X^2} = \\sqrt{80^2+60^2} = \\sqrt{6\\,400+3\\,600} = \\sqrt{10\\,000} = 100$ Ω. L\'impédance se calcule par somme quadratique, jamais par simple addition.'
      },
      {
        q: 'Pour un circuit RLC série, à la résonance ($\\omega_0 = \\frac{1}{\\sqrt{LC}}$), que peut-on dire de l\'impédance et du déphasage ?',
        options: [
          '$Z = R$ (minimale) et $\\varphi = 0$',
          '$Z = 0$ et $\\varphi = 90°$',
          '$Z$ est maximale et $\\varphi = 90°$',
          '$Z = R$ et $\\varphi = 90°$'
        ],
        answer: 0,
        correction: 'À la résonance, $X_L = X_C$ donc la réactance totale $X = 0$ : $Z = \\sqrt{R^2+0^2} = R$ (minimale), et $\\tan\\varphi = 0$ donc $\\varphi = 0$ : tension et courant sont en phase.'
      },
      {
        q: 'Un condensateur de capacité $C = 10$ µF est parcouru par un courant sinusoïdal de pulsation $\\omega = 100$ rad/s. Quelle est sa réactance $X_C$ ?',
        options: [
          '$X_C = 0{,}001$ Ω',
          '$X_C = 100$ Ω',
          '$X_C = 1\\,000$ Ω',
          '$X_C = 10\\,000$ Ω'
        ],
        answer: 2,
        correction: '$X_C = \\dfrac{1}{C\\omega} = \\dfrac{1}{10\\times10^{-6}\\times100} = \\dfrac{1}{0{,}001} = 1\\,000$ Ω.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['impedance', 'resonance']);

        if (typeExo === 'impedance') {
          var R = pick([40, 50, 60, 80, 100, 120, 150]);
          var L = randFloat(0.05, 0.3, 2);
          var Cuf = pick([5, 10, 15, 20, 22, 33, 47]);
          var f = pick([50, 60, 100, 400]);
          var omega = 2 * Math.PI * f;
          var XL = parseFloat((L * omega).toFixed(2));
          var XC = parseFloat((1 / (Cuf * 1e-6 * omega)).toFixed(2));
          var X = parseFloat((XL - XC).toFixed(2));
          var Z = parseFloat(Math.sqrt(R * R + X * X).toFixed(2));
          var omegaRound = parseFloat(omega.toFixed(2));
          var contexte = pick([
            'un circuit d\'éclairage à ballast inductif',
            'un moteur monophasé de petite puissance',
            'un filtre électronique de puissance',
            'une installation de chauffage par induction',
            'un banc d\'essai en électrotechnique'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un circuit RLC série comporte une résistance $R = ' + R + '$ Ω, une bobine d\'inductance $L = ' + fr(L, 2) + '$ H et un condensateur de capacité $C = ' + Cuf + '$ µF, alimenté à la fréquence $f = ' + f + '$ Hz.<br/><br/>Calcule le module de l\'impédance $Z$ du circuit (en Ω, arrondi au centième).',
            answer: Z,
            tolerance: Math.max(1, parseFloat((Z * 0.03).toFixed(2))),
            unit: 'Ω',
            hint: 'Calcule d\'abord $X_L = L\\omega$ et $X_C = \\dfrac{1}{C\\omega}$ avec $\\omega = 2\\pi f$, puis $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.',
            solution: [
              'Pulsation : $\\omega = 2\\pi f = 2\\pi \\times ' + f + ' \\approx ' + fr(omegaRound, 2) + '$ rad/s.',
              'Réactances : $X_L = L\\omega \\approx ' + fr(XL, 2) + '$ Ω et $X_C = \\dfrac{1}{C\\omega} \\approx ' + fr(XC, 2) + '$ Ω.',
              'Réactance totale : $X = X_L - X_C \\approx ' + fr(X, 2) + '$ Ω.',
              'Impédance : $Z = \\sqrt{R^2 + X^2} \\approx ' + fr(Z, 2) + '$ Ω.'
            ]
          };
        } else {
          var Lr = randFloat(0.05, 0.5, 2);
          var Cr = pick([1, 2.2, 4.7, 10, 22, 47, 100]);
          var f0raw = 1 / (2 * Math.PI * Math.sqrt(Lr * Cr * 1e-6));
          var f0 = parseFloat(f0raw.toFixed(1));
          var contexte2 = pick([
            'un filtre passe-bande radiofréquence',
            'un circuit d\'accord d\'antenne',
            'un oscillateur LC de laboratoire',
            'un circuit de détection inductive',
            'un module d\'accord d\'un récepteur'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', un circuit RLC série comporte une bobine d\'inductance $L = ' + fr(Lr, 2) + '$ H et un condensateur de capacité $C = ' + fr(Cr, 1) + '$ µF.<br/><br/>Calcule la fréquence de résonance $f_0$ de ce circuit (en Hz, arrondie au dixième).',
            answer: f0,
            tolerance: Math.max(0.5, parseFloat((f0 * 0.03).toFixed(1))),
            unit: 'Hz',
            hint: 'À la résonance, $L\\omega_0 = \\dfrac{1}{C\\omega_0}$, donc $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ et $f_0 = \\dfrac{\\omega_0}{2\\pi}$.',
            solution: [
              'À la résonance : $L\\omega_0 = \\dfrac{1}{C\\omega_0}$, donc $\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$ et $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$.',
              'Avec $L = ' + fr(Lr, 2) + '$ H et $C = ' + fr(Cr, 1) + '$ µF.',
              'Résultat : $f_0 \\approx ' + fr(f0, 1) + '$ Hz.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un moteur électrique monophasé, modélisé par une association série d\'une résistance $R = 15$ Ω et d\'une bobine d\'inductance $L = 0{,}08$ H, est alimenté par le secteur (tension efficace $U = 230$ V, fréquence $f = 50$ Hz).',
      tasks: [
        'Calculer la pulsation $\\omega$ et la réactance inductive $X_L$ de la bobine.',
        'En déduire l\'impédance $Z$ du moteur, puis le courant efficace $I$ absorbé.',
        'Calculer le déphasage $\\varphi$ entre tension et courant, puis le facteur de puissance $\\cos\\varphi$ du moteur, et commenter sa valeur.'
      ],
      solutions: [
        'Pulsation : $\\omega = 2\\pi f = 2\\pi \\times 50 \\approx 314{,}16$ rad/s. Réactance inductive : $X_L = L\\omega \\approx 0{,}08 \\times 314{,}16 \\approx 25{,}13$ Ω.',
        'Impédance (circuit RL série, sans condensateur) : $Z = \\sqrt{R^2+X_L^2} = \\sqrt{15^2+25{,}13^2} \\approx \\sqrt{225+631{,}5} \\approx 29{,}27$ Ω. Courant efficace : $I = \\dfrac{U}{Z} = \\dfrac{230}{29{,}27} \\approx 7{,}86$ A.',
        'Déphasage : $\\varphi = \\arctan\\left(\\dfrac{X_L}{R}\\right) = \\arctan\\left(\\dfrac{25{,}13}{15}\\right) \\approx 59{,}2°$. Facteur de puissance : $\\cos\\varphi \\approx \\cos(59{,}2°) \\approx 0{,}51$.'
      ],
      finalAnswer: '$Z \\approx 29{,}27$ Ω, $I \\approx 7{,}86$ A et $\\cos\\varphi \\approx 0{,}51$ ($\\varphi \\approx 59°$). Ce facteur de puissance faible, typique d\'un moteur inductif non compensé, justifie l\'installation de <strong>condensateurs de relèvement du cos$\\varphi$</strong> pour réduire le courant réactif appelé au réseau.'
    },

    evaluation: {
      title: 'Évaluation — Circuits en régime sinusoïdal (impédance)',
      duration: '30 min',
      questions: [
        {
          statement: 'Un résistor $R = 60$ Ω est en série avec une bobine de réactance $X_L = 80$ Ω. Calculer l\'impédance $Z$ du circuit (en Ω).',
          type: 'numeric',
          answer: 100,
          tolerance: 2,
          unit: 'Ω',
          points: 2,
          correction: '$Z = \\sqrt{R^2+X_L^2} = \\sqrt{60^2+80^2} = \\sqrt{3\\,600+6\\,400} = \\sqrt{10\\,000} = 100$ Ω.'
        },
        {
          statement: 'À la résonance d\'un circuit RLC série, le déphasage $\\varphi$ entre tension et courant vaut :',
          type: 'multiple-choice',
          options: [
            '$90°$',
            '$-90°$',
            '$0°$',
            '$45°$'
          ],
          answer: 2,
          points: 2,
          correction: 'À la résonance, $X_L = X_C$, donc $\\tan\\varphi = 0$ : le déphasage est nul, tension et courant sont en phase.'
        },
        {
          statement: 'Une bobine d\'inductance $L = 0{,}15$ H est parcourue par un courant sinusoïdal de fréquence $f = 50$ Hz. Calculer sa réactance $X_L$ (en Ω, arrondie au dixième).',
          type: 'numeric',
          answer: 47.1,
          tolerance: 1,
          unit: 'Ω',
          points: 2,
          correction: '$X_L = L\\omega = L \\times 2\\pi f = 0{,}15 \\times 2\\pi \\times 50 \\approx 47{,}1$ Ω.'
        },
        {
          statement: 'Un condensateur $C = 22$ µF est parcouru par un courant de pulsation $\\omega = 200$ rad/s. Calculer sa réactance $X_C$ (en Ω, arrondie à l\'unité).',
          type: 'numeric',
          answer: 227,
          tolerance: 5,
          unit: 'Ω',
          points: 2,
          correction: '$X_C = \\dfrac{1}{C\\omega} = \\dfrac{1}{22\\times10^{-6}\\times200} = \\dfrac{1}{0{,}0044} \\approx 227$ Ω.'
        },
        {
          statement: 'Un circuit RLC série ($R=40$ Ω, $X_L=90$ Ω, $X_C=30$ Ω) est alimenté sous une tension efficace $U=120$ V. Calculer le courant efficace $I$ circulant dans le circuit (en A, arrondi au centième).',
          type: 'numeric',
          answer: 1.66,
          tolerance: 0.05,
          unit: 'A',
          points: 3,
          correction: 'Réactance totale : $X = X_L-X_C = 60$ Ω. Impédance : $Z = \\sqrt{40^2+60^2} = \\sqrt{5\\,200} \\approx 72{,}11$ Ω. Courant : $I = \\dfrac{U}{Z} = \\dfrac{120}{72{,}11} \\approx 1{,}66$ A.'
        }
      ]
    }
  });
