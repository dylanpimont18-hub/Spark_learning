/* =========================================================
   Spark Learning – data/si-bts/si-bts-electrotechnique.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-electrotechnique',
    level: 3, subject: 'si',
    icon: '🔌',
    title: 'Électrotechnique',
    subtitle: 'MCC, moteur asynchrone, synchrone, bilan de puissance',
    keywords: ['Moteur', 'Couple', 'Puissance', 'Rendement', 'Glissement'],
    physics: 'Les machines tournantes (moteurs à courant continu, asynchrones, synchrones) sont les actionneurs de base de l\'industrie : convoyeurs, robots, pompes, ventilateurs, véhicules électriques.',

    cours: {
      intro: 'L\'électrotechnique étudie les machines qui convertissent l\'énergie électrique en énergie mécanique (moteurs) et inversement (génératrices).<br/><br/>Le <strong>moteur à courant continu (MCC)</strong> est le plus simple à modéliser. La force électromotrice est $E = K \\Phi \\Omega$ (avec $\\Omega$ en rad/s, pas en tr/min !) et le couple est $C = K \\Phi I$. L\'équation électrique de l\'induit est $U = E + RI$.<br/><br/>Le <strong>moteur asynchrone triphasé</strong> est le plus répandu en industrie. Le champ tournant du stator a une vitesse de synchronisme $n_s = f/p$ (en tr/s) ou $n_s = 60f/p$ (en tr/min). Le rotor tourne toujours un peu moins vite : le <strong>glissement</strong> est $g = (n_s - n)/n_s$. En régime nominal, $g = 2$ à $5\\%$.<br/><br/>Le <strong>moteur synchrone</strong> tourne exactement à $n_s$ (pas de glissement). Il est utilisé quand on a besoin d\'une vitesse constante et précise.<br/><br/>Le <strong>bilan de puissance</strong> d\'un moteur décompose : $P_{\\text{absorbée}} = P_{\\text{Joule stator}} + P_{\\text{fer}} + P_{\\text{transmise rotor}}$, puis $P_{\\text{transmise}} = P_{\\text{Joule rotor}} + P_{\\text{mécaniques}} + P_{\\text{utile}}$. Le rendement global est $\\eta = P_u / P_a$.',
      definitions: [
        { term: 'Force électromotrice $E$ (MCC)', def: '$E = K \\Phi \\Omega$, avec $\\Omega$ en rad/s. C\'est la tension induite par la rotation. L\'équation de l\'induit est $U = E + RI$ ($R$ résistance d\'induit).' },
        { term: 'Couple moteur $C$ (MCC)', def: '$C = K \\Phi I$. Proportionnel au courant d\'induit $I$. Augmenter le couple nécessite plus de courant.' },
        { term: 'Vitesse de synchronisme $n_s$', def: '$n_s = f/p$ (tr/s) ou $n_s = 60f/p$ (tr/min), avec $f$ la fréquence (50 Hz) et $p$ le nombre de paires de pôles.' },
        { term: 'Glissement $g$', def: '$g = (n_s - n)/n_s$. Sans dimension. Nominal : $g = 2$ à $5\\%$. Démarrage ($n = 0$) : $g = 1$. Synchronisme ($n = n_s$) : $g = 0$ (impossible en charge pour l\'asynchrone).' },
        { term: 'Rendement $\\eta$', def: '$\\eta = P_u / P_a$ : rapport puissance utile (mécanique) sur puissance absorbée (électrique). Tient compte de toutes les pertes.' }
      ],
      method: {
        title: 'Analyser un moteur et établir son bilan de puissance',
        steps: [
          'Calculer la vitesse de synchronisme : $n_s = 60f / p$ (en tr/min).<br/><strong>Exemple :</strong> $f = 50$ Hz, $p = 2$ → $n_s = 1500$ tr/min.',
          'Calculer le glissement : $g = (n_s - n) / n_s$.<br/><strong>Exemple :</strong> $n = 1440$ tr/min → $g = (1500 - 1440)/1500 = 0{,}04 = 4\\%$.',
          'Convertir en rad/s et calculer la puissance mécanique : $\\Omega = 2\\pi n / 60$, puis $P_u = C \\times \\Omega$.<br/><strong>Exemple :</strong> $C = 50$ N·m → $\\Omega = 150{,}8$ rad/s → $P_u = 7540$ W.',
          'Établir le bilan : $P_a = P_{\\text{Joule}} + P_{\\text{fer}} + P_{\\text{méc}} + P_u$. Calculer $\\eta = P_u / P_a$.<br/><strong>Exemple :</strong> $P_a = 8500$ W → $\\eta = 7540/8500 = 88{,}7\\%$.'
        ]
      },
      example: {
        statement: 'Un MCC ($K\\Phi = 0{,}6$ V·s/rad, $R = 1{,}5$ Ω) est alimenté sous $U = 220$ V et absorbe $I = 8$ A. Calculer $E$, $\\Omega$, $C$ et $P_u$.',
        steps: [
          '$E = U - RI = 220 - 1{,}5 \\times 8 = 220 - 12 = 208$ V.',
          '$\\Omega = E / (K\\Phi) = 208 / 0{,}6 = 346{,}7$ rad/s. $n = 60\\Omega / (2\\pi) = 3311$ tr/min.',
          '$C = K\\Phi \\times I = 0{,}6 \\times 8 = 4{,}8$ N·m.',
          '$P_u = C \\times \\Omega = 4{,}8 \\times 346{,}7 = 1664$ W. $P_a = U \\times I = 220 \\times 8 = 1760$ W. $\\eta = 1664/1760 = 94{,}5\\%$.'
        ],
        answer: '$E = 208$ V, $\\Omega = 346{,}7$ rad/s, $C = 4{,}8$ N·m, $P_u = 1664$ W, $\\eta = 94{,}5\\%$.'
      },
      formulas: [
        '$n_s = \\dfrac{60f}{p}$ (tr/min) ou $n_s = \\dfrac{f}{p}$ (tr/s)',
        '$g = \\dfrac{n_s - n}{n_s}$ (glissement)',
        '$P = C \\times \\Omega$ (puissance mécanique, $\\Omega$ en rad/s)',
        '$\\Omega = \\dfrac{2\\pi n}{60}$ (conversion tr/min → rad/s)',
        '$E = K \\Phi \\Omega$ et $C = K \\Phi I$ (MCC)',
        '$U = E + RI$ (équation de l\'induit MCC)',
        '$\\eta = \\dfrac{P_u}{P_a}$ (rendement)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Caractéristique</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">MCC</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Asynchrone</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Synchrone</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Alimentation</td><td style="border:1px solid var(--border);padding:8px">Continu (DC)</td><td style="border:1px solid var(--border);padding:8px">Triphasé (AC)</td><td style="border:1px solid var(--border);padding:8px">Triphasé (AC)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Vitesse</td><td style="border:1px solid var(--border);padding:8px">Variable ($\\propto U$)</td><td style="border:1px solid var(--border);padding:8px">$n < n_s$ (glissement)</td><td style="border:1px solid var(--border);padding:8px">$n = n_s$ (exacte)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Couple</td><td style="border:1px solid var(--border);padding:8px">$C = K\\Phi I$</td><td style="border:1px solid var(--border);padding:8px">Variable avec $g$</td><td style="border:1px solid var(--border);padding:8px">Constant à $n_s$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Avantages</td><td style="border:1px solid var(--border);padding:8px">Contrôle simple de vitesse</td><td style="border:1px solid var(--border);padding:8px">Robuste, peu d\'entretien</td><td style="border:1px solid var(--border);padding:8px">Vitesse précise, $\\cos\\phi$ réglable</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Inconvénients</td><td style="border:1px solid var(--border);padding:8px">Balais, entretien</td><td style="border:1px solid var(--border);padding:8px">Courant d\'appel au démarrage</td><td style="border:1px solid var(--border);padding:8px">Démarrage complexe, coût</td></tr></table>',
      recap: [
        'MCC : $E = K\\Phi\\Omega$, $C = K\\Phi I$, $U = E + RI$. Couple proportionnel au courant.',
        'Moteur asynchrone : $n_s = 60f/p$, $g = (n_s - n)/n_s$. Toujours $n < n_s$ en charge.',
        'Puissance mécanique : $P = C \\times \\Omega$ (avec $\\Omega$ en rad/s, pas en tr/min !).',
        'Le rendement $\\eta = P_u/P_a$ est toujours $< 1$ (pertes Joule, fer, mécaniques).',
        'Le bilan de puissance permet d\'identifier les sources de pertes et d\'optimiser le système.'
      ],
      piege: 'Ne pas confondre $n_s$ en tr/s et en tr/min ! Si $n_s = f/p$, c\'est en tr/s. Pour des tr/min : $n_s = 60f/p$. Pour le MCC, $E = K\\Phi\\Omega$ utilise $\\Omega$ en rad/s, pas en tr/min. Toujours vérifier la cohérence des unités.'
    },

    quiz: [
      {
        q: 'La vitesse de synchronisme d\'un moteur asynchrone à $p = 3$ paires de pôles alimenté à $f = 50$ Hz est :',
        options: [
          '$n_s = 3000$ tr/min',
          '$n_s = 1500$ tr/min',
          '$n_s = 1000$ tr/min',
          '$n_s = 750$ tr/min'
        ],
        answer: 2,
        correction: '$n_s = 60f/p = 60 \\times 50 / 3 = 1000$ tr/min. Valeurs classiques : $p=1$ → $3000$, $p=2$ → $1500$, $p=3$ → $1000$, $p=4$ → $750$ tr/min.'
      },
      {
        q: 'Un MCC a $K\\Phi = 0{,}5$ V·s/rad et tourne à $\\Omega = 200$ rad/s. Sa f.é.m. vaut :',
        options: [
          '$E = 0{,}5 / 200 = 0{,}0025$ V',
          '$E = 200 / 0{,}5 = 400$ V',
          '$E = 0{,}5 \\times 200 = 100$ V',
          '$E = 0{,}5 + 200 = 200{,}5$ V'
        ],
        answer: 2,
        correction: '$E = K\\Phi \\times \\Omega = 0{,}5 \\times 200 = 100$ V. La f.é.m. est proportionnelle à la vitesse angulaire $\\Omega$ (en rad/s, pas en tr/min).'
      },
      {
        q: 'Le glissement d\'un moteur asynchrone en fonctionnement nominal est typiquement de :',
        options: [
          '$g = 0$ (vitesse de synchronisme)',
          '$g = 2$ à $5\\%$',
          '$g = 50\\%$',
          '$g = 100\\%$ (rotor bloqué)'
        ],
        answer: 1,
        correction: 'En nominal, $g = 2$ à $5\\%$. $g = 0$ : impossible en charge (pas de courant induit). $g = 1$ : rotor bloqué (démarrage). Un glissement trop élevé signale une surcharge.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { type: 'MCC', desc: 'moteur à courant continu' },
          { type: 'async', desc: 'moteur asynchrone' }
        ]);
        if (scenario.type === 'MCC') {
          const KPhi = randFloat(0.3, 0.8, 1);
          const U = pick([120, 220, 48]);
          const R = randFloat(0.5, 3.0, 1);
          const I = rand(5, 20);
          const E = U - R * I;
          const omega = parseFloat((E / KPhi).toFixed(1));
          return {
            statement: `Un ${scenario.desc} ($K\\Phi = ${String(KPhi).replace('.', '{,')}$ V·s/rad, $R = ${String(R).replace('.', '{,')}$ Ω) est alimenté sous $U = ${U}$ V et absorbe $I = ${I}$ A. Calcule la vitesse $\\Omega$ (en rad/s, arrondi à $0{,}1$).`,
            answer: omega,
            tolerance: 0.5,
            unit: 'rad/s',
            hint: 'D\'abord $E = U - RI$, puis $\\Omega = E / (K\\Phi)$.',
            solution: [
              `$E = U - RI = ${U} - ${String(R).replace('.', '{,')} \\times ${I} = ${U} - ${R * I} = ${E}$ V`,
              `$\\Omega = E / (K\\Phi) = ${E} / ${String(KPhi).replace('.', '{,')} = ${String(omega).replace('.', '{,')}$ rad/s`
            ]
          };
        } else {
          const p = pick([1, 2, 3]);
          const f = 50;
          const ns = 60 * f / p;
          const gPct = rand(2, 6);
          const n = Math.round(ns * (1 - gPct / 100));
          const gCalc = parseFloat((((ns - n) / ns) * 100).toFixed(1));
          return {
            statement: `Un moteur asynchrone a $p = ${p}$ paire${p > 1 ? 's' : ''} de pôles, alimenté à $f = 50$ Hz. La vitesse mesurée est $n = ${n}$ tr/min. Calcule le glissement $g$ (en %, arrondi à $0{,}1$).`,
            answer: gCalc,
            tolerance: 0.3,
            unit: '%',
            hint: 'Calcule $n_s = 60f/p$, puis $g = (n_s - n)/n_s \\times 100$.',
            solution: [
              `$n_s = 60f/p = 60 \\times 50 / ${p} = ${ns}$ tr/min`,
              `$g = (n_s - n)/n_s = (${ns} - ${n}) / ${ns} = ${ns - n} / ${ns}$`,
              `$g = ${String(gCalc).replace('.', '{,')}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un moteur à courant continu ($K\\Phi = 0{,}5$ V·s/rad, $R = 2$ Ω) est alimenté sous $U = 120$ V. En régime permanent, il absorbe $I = 10$ A.',
      tasks: [
        'Calculer la f.é.m. $E = U - RI$ et la vitesse $\\Omega = E / (K\\Phi)$ (en rad/s puis en tr/min).',
        'Calculer le couple $C = K\\Phi \\times I$ et la puissance utile $P_u = C \\times \\Omega$.',
        'Dresser le bilan de puissance : $P_a = UI$, pertes Joule $P_J = RI^2$, puissance utile $P_u$. Calculer le rendement $\\eta$.'
      ],
      solutions: [
        '$E = U - RI = 120 - 2 \\times 10 = 100$ V. $\\Omega = E / (K\\Phi) = 100 / 0{,}5 = 200$ rad/s. $n = 60\\Omega / (2\\pi) = 1910$ tr/min.',
        '$C = K\\Phi \\times I = 0{,}5 \\times 10 = 5$ N·m. $P_u = C \\times \\Omega = 5 \\times 200 = 1000$ W.',
        '$P_a = UI = 120 \\times 10 = 1200$ W. $P_J = RI^2 = 2 \\times 100 = 200$ W. $P_u = P_a - P_J = 1200 - 200 = 1000$ W. $\\eta = P_u / P_a = 1000 / 1200 = 83{,}3\\%$.'
      ],
      finalAnswer: '$E = 100$ V, $\\Omega = 200$ rad/s ($1910$ tr/min), $C = 5$ N·m, $P_u = 1$ kW, $\\eta = 83{,}3\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Électrotechnique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un MCC ($K\\Phi = 0{,}4$ V·s/rad, $R = 1$ Ω) alimenté sous $U = 48$ V absorbe $I = 12$ A. Calculer la vitesse $\\Omega$ (en rad/s).',
          type: 'numeric',
          answer: 90,
          tolerance: 1,
          unit: 'rad/s',
          points: 3,
          correction: '$E = U - RI = 48 - 1 \\times 12 = 36$ V. $\\Omega = E / (K\\Phi) = 36 / 0{,}4 = 90$ rad/s.'
        },
        {
          statement: 'Calculer la vitesse de synchronisme d\'un moteur asynchrone à $p = 2$, $f = 50$ Hz (en tr/min).',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'tr/min',
          points: 2,
          correction: '$n_s = 60f/p = 60 \\times 50 / 2 = 1500$ tr/min.'
        },
        {
          statement: 'Un moteur tourne à $n = 1455$ tr/min avec $n_s = 1500$ tr/min. Le glissement est :',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$g = (n_s - n)/n_s = (1500 - 1455)/1500 = 45/1500 = 0{,}03 = 3\\%$.'
        },
        {
          statement: 'Pour un MCC, le couple est proportionnel :',
          type: 'multiple-choice',
          options: [
            'À la tension d\'alimentation $U$',
            'Au courant d\'induit $I$',
            'À la vitesse de rotation $\\Omega$',
            'À la résistance d\'induit $R$'
          ],
          answer: 1,
          points: 3,
          correction: '$C = K\\Phi I$ : le couple est directement proportionnel au courant d\'induit. Augmenter la charge nécessite plus de courant. La f.é.m. $E = K\\Phi\\Omega$ est proportionnelle à la vitesse, pas le couple.'
        }
      ]
    }
  });
