/* =========================================================
   Spark Learning – data/si-bts/si-bts-gestion-energie.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-gestion-energie',
    level: 3, subject: 'si',
    icon: '🌱',
    title: 'Gestion de l\'Énergie',
    subtitle: 'Bilan de puissance, rendement global, stockage',
    keywords: ['Bilan énergétique', 'Rendement global', 'Pertes Joule', 'Batterie', 'Supercondensateur'],
    physics: 'La gestion de l\'énergie est un enjeu central : réduire les pertes, dimensionner les stockages (batteries, supercondensateurs), optimiser l\'efficacité des chaînes de conversion dans les systèmes industriels et embarqués.',

    cours: {
      intro: 'Tout système technique transforme de l\'énergie. À chaque conversion, une partie est dissipée (Joule, frottements, pertes fer). Le <strong>rendement</strong> $\\eta = P_u / P_a$ mesure l\'efficacité.<br/><br/>Pour une <strong>chaîne de conversion</strong> (batterie → variateur → moteur → réducteur → charge), le rendement global est le produit des rendements : $\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$. Il est toujours inférieur au plus petit rendement individuel.<br/><br/>Les <strong>pertes Joule</strong> $P_J = RI^2$ sont proportionnelles au carré du courant. C\'est pourquoi le transport d\'électricité se fait en haute tension (courant faible). Doubler le courant quadruple les pertes.<br/><br/>Le <strong>stockage d\'énergie</strong> est dimensionné par :<br/>- Condensateur / supercondensateur : $E = \\frac{1}{2}CV^2$ (énergie proportionnelle à $V^2$)<br/>- Inductance : $E = \\frac{1}{2}LI^2$<br/>- Batterie : $E = Q \\times U$ (capacité en Ah $\\times$ tension). Le <strong>C-rate</strong> indique le régime de charge/décharge : $1C$ = décharge en 1h, $2C$ = en 30 min, $0{,}5C$ = en 2h. Le courant correspondant est $I = C\\text{-rate} \\times Q$.<br/><br/>Un bilan de puissance complet identifie chaque source de pertes pour optimiser le système.',
      definitions: [
        { term: 'Rendement $\\eta$', def: '$\\eta = P_u / P_a$. Sans dimension, entre 0 et 1. Le complément $1 - \\eta$ est la fraction perdue en chaleur, frottements, etc.' },
        { term: 'Rendement global $\\eta_g$', def: '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$. Produit (pas somme ni moyenne) des rendements de chaque étage.' },
        { term: 'Pertes Joule $P_J$', def: '$P_J = RI^2$. Proportionnelles au carré du courant. Principale source de pertes dans les machines électriques et les câbles.' },
        { term: 'Énergie d\'un condensateur', def: '$E = \\frac{1}{2}CV^2$. Pour les supercondensateurs : $C$ de 1 à 3000 F, $V$ de 2{,}5 à 3 V par cellule. Forte puissance, énergie modérée.' },
        { term: 'Capacité batterie et C-rate', def: 'Capacité $Q$ en Ah. Énergie : $E = Q \\times U$ (Wh). C-rate : $1C$ = $Q$ en 1h. $I = C\\text{-rate} \\times Q$. Ex. : batterie 100 Ah à $2C$ → $I = 200$ A, décharge en 30 min.' }
      ],
      method: {
        title: 'Réaliser un bilan de puissance complet',
        steps: [
          '<strong>Chaîne d\'étages</strong> : Identifier chaque étage de la chaîne et son rendement.<br/><strong>Exemple :</strong> Batterie ($\\eta_1 = 95\\%$) → Variateur ($\\eta_2 = 98\\%$) → Moteur ($\\eta_3 = 90\\%$) → Réducteur ($\\eta_4 = 85\\%$).',
          '<strong>Rendement global</strong> : Calculer le rendement global : $\\eta_g = 0{,}95 \\times 0{,}98 \\times 0{,}90 \\times 0{,}85 = 0{,}712 = 71{,}2\\%$.',
          '<strong>Puissance absorbée et pertes</strong> : Calculer la puissance absorbée : $P_a = P_u / \\eta_g$.<br/><strong>Exemple :</strong> $P_u = 500$ W → $P_a = 500 / 0{,}712 = 702$ W. Pertes : $P_a - P_u = 202$ W.',
          '<strong>Autonomie du système</strong> : Dimensionner le stockage : autonomie $= E_{\\text{batterie}} / P_a$.<br/><strong>Exemple :</strong> Batterie 48 V, 100 Ah → $E = 4800$ Wh. Autonomie $= 4800/702 = 6{,}84$ h.'
        ]
      },
      example: {
        statement: 'Un véhicule électrique : batterie 48 V / 100 Ah, chaîne $\\eta_1 = 96\\%$ (batterie), $\\eta_2 = 97\\%$ (onduleur), $\\eta_3 = 92\\%$ (moteur). Puissance utile à la roue : $P_u = 5$ kW. Calculer le rendement global, la puissance absorbée, les pertes et l\'autonomie.',
        steps: [
          '$\\eta_g = 0{,}96 \\times 0{,}97 \\times 0{,}92 = 0{,}857 = 85{,}7\\%$.',
          '$P_a = P_u / \\eta_g = 5000 / 0{,}857 = 5834$ W.',
          'Pertes : $P_a - P_u = 5834 - 5000 = 834$ W.',
          'Énergie batterie : $E = Q \\times U = 100 \\times 48 = 4800$ Wh. Autonomie : $4800 / 5834 = 0{,}823$ h $\\approx 49$ min.'
        ],
        answer: '$\\eta_g = 85{,}7\\%$, $P_a = 5{,}83$ kW, pertes $= 834$ W, autonomie $\\approx 49$ min.'
      },
      formulas: [
        '$\\eta = \\dfrac{P_u}{P_a}$ (rendement)',
        '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$',
        '$P_{\\text{pertes}} = P_a - P_u = P_a(1 - \\eta)$',
        '$P_J = R \\times I^2$ (pertes Joule)',
        '$E = \\dfrac{1}{2}CV^2$ (condensateur/supercap)',
        '$E = \\dfrac{1}{2}LI^2$ (inductance)',
        '$E = Q \\times U$ (batterie, en Wh)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Technologie</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Densité d\'énergie</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Densité de puissance</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Durée de vie</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Batterie Li-ion</td><td style="border:1px solid var(--border);padding:8px">150 – 250 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">250 – 1000 W/kg</td><td style="border:1px solid var(--border);padding:8px">500 – 2000 cycles</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Supercondensateur</td><td style="border:1px solid var(--border);padding:8px">5 – 15 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">5000 – 15000 W/kg</td><td style="border:1px solid var(--border);padding:8px">> 500 000 cycles</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Volant d\'inertie</td><td style="border:1px solid var(--border);padding:8px">10 – 50 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">1000 – 5000 W/kg</td><td style="border:1px solid var(--border);padding:8px">> 1 000 000 cycles</td></tr></table>',
      recap: [
        'Le rendement global est un PRODUIT (pas une moyenne) : $\\eta_g = \\prod \\eta_i$.',
        'Les pertes Joule $P_J = RI^2$ sont proportionnelles au carré du courant.',
        'Condensateur : $E = \\frac{1}{2}CV^2$ (forte puissance, faible énergie). Batterie : $E = QU$ (forte énergie, puissance limitée).',
        'Le C-rate caractérise le régime de décharge : $1C$ = 1h, $2C$ = 30 min.',
        'Un bilan complet identifie chaque source de pertes pour optimiser le rendement global.'
      ],
      piege: 'Le rendement global est un PRODUIT, pas une moyenne. 3 étages à $90\\%$ donnent $\\eta_g = 0{,}9^3 = 72{,}9\\%$ (pas $90\\%$!). De même, ne pas confondre $E = \\frac{1}{2}CV^2$ (condensateur) et $E = QU$ (batterie) : les supercondensateurs ont beaucoup de puissance mais peu d\'énergie, les batteries c\'est l\'inverse.'
    },

    quiz: [
      {
        q: 'Le rendement global de 3 étages ($\\eta_1 = 95\\%$, $\\eta_2 = 90\\%$, $\\eta_3 = 85\\%$) est :',
        options: [
          '$\\eta_g = 95 + 90 + 85 = 270\\%$',
          '$\\eta_g = (95 + 90 + 85)/3 = 90\\%$',
          '$\\eta_g = 0{,}95 \\times 0{,}90 \\times 0{,}85 = 72{,}7\\%$',
          '$\\eta_g = \\min(95, 90, 85) = 85\\%$'
        ],
        answer: 2,
        correction: '$\\eta_g = 0{,}95 \\times 0{,}90 \\times 0{,}85 = 0{,}727 = 72{,}7\\%$. C\'est un produit, pas une somme ni une moyenne.'
      },
      {
        q: 'Un supercondensateur de $C = 100$ F chargé à $V = 2{,}5$ V stocke :',
        options: [
          '$E = 100 \\times 2{,}5 = 250$ J',
          '$E = \\frac{1}{2} \\times 100 \\times 2{,}5^2 = 312{,}5$ J',
          '$E = \\frac{1}{2} \\times 100 \\times 2{,}5 = 125$ J',
          '$E = 100 \\times 2{,}5^2 = 625$ J'
        ],
        answer: 1,
        correction: '$E = \\frac{1}{2}CV^2 = \\frac{1}{2} \\times 100 \\times 6{,}25 = 312{,}5$ J. Ne pas oublier le $\\frac{1}{2}$ et le carré de $V$.'
      },
      {
        q: 'Une batterie de 50 Ah à $2C$ délivre un courant de :',
        options: [
          '$I = 50$ A pendant 2 h',
          '$I = 100$ A pendant 30 min',
          '$I = 25$ A pendant 2 h',
          '$I = 50$ A pendant 30 min'
        ],
        answer: 1,
        correction: '$2C$ signifie $I = 2 \\times Q = 2 \\times 50 = 100$ A. Durée : $Q / I = 50/100 = 0{,}5$ h $= 30$ min. Le C-rate multiplie directement la capacité pour donner le courant.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['rendement', 'supercap', 'batterie']);
        if (scenario === 'rendement') {
          const n = rand(2, 4);
          const etas = [];
          let etaG = 1;
          const parts = [];
          for (let i = 0; i < n; i++) {
            const e = rand(80, 98);
            etas.push(e);
            etaG *= e / 100;
            parts.push(`$\\eta_${i + 1} = ${e}\\%$`);
          }
          const result = parseFloat((etaG * 100).toFixed(1));
          return {
            statement: `Une chaîne de conversion a ${n} étages : ${parts.join(', ')}. Calcule le rendement global (en %, arrondi à $0{,}1$).`,
            answer: result,
            tolerance: 0.5,
            unit: '%',
            hint: '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots$ Convertis les % en décimaux avant de multiplier.',
            solution: [
              `$\\eta_g = ${etas.map(e => String(e / 100).replace('.', '{,')).join(' \\times ')}$`,
              `$\\eta_g = ${String(etaG.toFixed(4)).replace('.', '{,')} = ${String(result).replace('.', '{,')}\\%$`
            ]
          };
        } else if (scenario === 'supercap') {
          const C = pick([10, 50, 100, 200, 500]);
          const V = randFloat(2.0, 5.0, 1);
          const E = parseFloat((0.5 * C * V * V).toFixed(1));
          return {
            statement: `Un supercondensateur de $C = ${C}$ F est chargé à $V = ${String(V).replace('.', '{,')}$ V. Calcule l'énergie stockée $E = \\frac{1}{2}CV^2$ (en J, arrondi à $0{,}1$).`,
            answer: E,
            tolerance: 1,
            unit: 'J',
            hint: '$E = \\frac{1}{2}CV^2$. N\'oublie pas le $\\frac{1}{2}$ et le carré de $V$.',
            solution: [
              `$E = \\frac{1}{2} \\times ${C} \\times ${String(V).replace('.', '{,')}^2$`,
              `$= \\frac{1}{2} \\times ${C} \\times ${String(parseFloat((V * V).toFixed(2))).replace('.', '{,')}$`,
              `$= ${String(E).replace('.', '{,')}$ J`
            ]
          };
        } else {
          const Q = pick([20, 50, 100, 150]);
          const U = pick([12, 24, 48]);
          const E_Wh = Q * U;
          const E_kWh = parseFloat((E_Wh / 1000).toFixed(1));
          return {
            statement: `Une batterie a une capacité $Q = ${Q}$ Ah et une tension $U = ${U}$ V. Calcule l'énergie stockée (en Wh puis en kWh, donne la valeur en kWh arrondie à $0{,}1$).`,
            answer: E_kWh,
            tolerance: 0.1,
            unit: 'kWh',
            hint: '$E = Q \\times U$ donne le résultat en Wh. Diviser par $1000$ pour obtenir des kWh.',
            solution: [
              `$E = Q \\times U = ${Q} \\times ${U} = ${E_Wh}$ Wh`,
              `$E = ${E_Wh} / 1000 = ${String(E_kWh).replace('.', '{,')}$ kWh`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un véhicule électrique embarque une batterie Li-ion ($Q = 100$ Ah, $U = 48$ V) et un pack de supercondensateurs ($C = 60$ F, $V_{\\max} = 48$ V) pour le freinage régénératif. La chaîne de traction a un rendement global $\\eta_g = 82\\%$. Le véhicule roule à puissance utile constante $P_u = 8$ kW.',
      tasks: [
        'Calculer l\'énergie stockée dans la batterie ($E_B = Q \\times U$, en kWh) et dans les supercondensateurs ($E_C = \\frac{1}{2}CV^2$, en kJ et en Wh). Comparer.',
        'Calculer la puissance absorbée $P_a = P_u / \\eta_g$ et l\'autonomie sur batterie seule.',
        'Le véhicule freine de $60$ km/h à $0$ (masse $m = 800$ kg). L\'énergie cinétique récupérée est $E_k = \\frac{1}{2}mv^2$. Quel pourcentage de $E_k$ peut être absorbé par les supercondensateurs (supposés initialement déchargés) ?'
      ],
      solutions: [
        '$E_B = 100 \\times 48 = 4800$ Wh $= 4{,}8$ kWh. $E_C = \\frac{1}{2} \\times 60 \\times 48^2 = 69\\,120$ J $= 69{,}1$ kJ $= 19{,}2$ Wh. La batterie stocke $4800 / 19{,}2 = 250$ fois plus.',
        '$P_a = 8000 / 0{,}82 = 9756$ W. Autonomie $= E_B / P_a = 4800 / 9756 = 0{,}492$ h $\\approx 29{,}5$ min.',
        '$v = 60/3{,}6 = 16{,}67$ m/s. $E_k = \\frac{1}{2} \\times 800 \\times 16{,}67^2 = 111\\,111$ J $= 111{,}1$ kJ. Les supercaps absorbent $69{,}1$ kJ max, soit $69{,}1/111{,}1 = 62{,}2\\%$ de l\'énergie cinétique.'
      ],
      finalAnswer: '$E_B = 4{,}8$ kWh, $E_C = 69{,}1$ kJ ($19{,}2$ Wh), autonomie $\\approx 29{,}5$ min, récupération au freinage : $62{,}2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Gestion de l\'Énergie',
      duration: '20 min',
      questions: [
        {
          statement: 'Le rendement global de 3 étages ($\\eta_1 = 92\\%$, $\\eta_2 = 95\\%$, $\\eta_3 = 88\\%$) est (en %, arrondi à $0{,}1$) :',
          type: 'numeric',
          answer: 76.9,
          tolerance: 0.5,
          unit: '%',
          points: 2,
          correction: '$\\eta_g = 0{,}92 \\times 0{,}95 \\times 0{,}88 = 0{,}769 = 76{,}9\\%$.'
        },
        {
          statement: 'L\'énergie d\'un condensateur $C = 10$ F à $V = 5$ V est :',
          type: 'numeric',
          answer: 125,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E = \\frac{1}{2}CV^2 = \\frac{1}{2} \\times 10 \\times 25 = 125$ J.'
        },
        {
          statement: 'Une batterie de 100 Ah, 24 V. L\'énergie stockée est (en kWh) :',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.05,
          unit: 'kWh',
          points: 3,
          correction: '$E = Q \\times U = 100 \\times 24 = 2400$ Wh $= 2{,}4$ kWh.'
        },
        {
          statement: 'Les pertes Joule $P_J = RI^2$ : si on double le courant, les pertes sont :',
          type: 'multiple-choice',
          options: [
            'Doublées',
            'Quadruplées',
            'Inchangées',
            'Divisées par 2'
          ],
          answer: 1,
          points: 3,
          correction: '$P_J = R(2I)^2 = 4RI^2$ : les pertes sont quadruplées. C\'est pourquoi le transport haute tension (faible courant) minimise les pertes.'
        }
      ]
    }
  });
