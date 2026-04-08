/* =========================================================
   Spark Learning – data/5e/5e-proportionnalite.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-proportionnalite',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Proportionnalité appliquée',
    subtitle: 'Pourcentages, échelles, vitesse moyenne',
    keywords: ['Proportionnalité', 'Pourcentage', 'Échelle', 'Vitesse', 'Distance', 'Durée'],
    physics: true,

    cours: {
      intro: 'La proportionnalité est l\'outil mathématique de la <strong>mise à l\'échelle</strong> : quand on double une grandeur, l\'autre double aussi. Les pourcentages sont un cas particulier où le coefficient est exprimé sur 100.<br/><br/>' +
        '<strong>Piège courant avec les pourcentages :</strong> une baisse de $20\\%$ puis une hausse de $20\\%$ ne revient PAS au prix initial ! Exemple : $100 \\to 80 \\to 96$ (pas $100$). En effet $0{,}8 \\times 1{,}2 = 0{,}96$.<br/><br/>' +
        'Les <strong>échelles cartographiques</strong> sont des rapports : $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte = $25\\,000$ cm = $250$ m en réalité.<br/><br/>' +
        'La <strong>vitesse</strong> $v = \\dfrac{d}{t}$ est le coefficient de proportionnalité entre distance et temps quand la vitesse est constante. Toujours vérifier la cohérence des unités : $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s.',
      definitions: [
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100. $p\\%$ de $T = \\dfrac{p}{100} \\times T$.' },
        { term: 'Échelle', def: 'Rapport entre une distance sur un plan et la distance réelle correspondante. Échelle $\\dfrac{1}{25\\,000}$ → 1 cm = 250 m.' },
        { term: 'Vitesse moyenne', def: 'Quotient de la distance totale par le temps total : $v = \\dfrac{d}{t}$. S\'exprime en km/h ou m/s.' },
        { term: 'Coefficient multiplicateur', def: 'Facteur par lequel on multiplie pour appliquer une variation. $+20\\% \\to \\times 1{,}20$ ; $-15\\% \\to \\times 0{,}85$.' }
      ],
      example: {
        statement: 'Un jean coûte $60$ €. Il est soldé à $-30\\%$. Quel est le nouveau prix ?',
        steps: [
          'Réduction : $30\\%$ de $60 = \\dfrac{30}{100} \\times 60 = 18$ €.',
          'Nouveau prix : $60 - 18 = 42$ €.',
          'Ou directement : $60 \\times 0{,}70 = 42$ €.'
        ],
        answer: '$42$ €'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Variation</th><th style="border:1px solid var(--border);padding:6px 14px">Coefficient</th><th style="border:1px solid var(--border);padding:6px 14px">Exemple (100 €)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$+20\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1{,}20$</td><td style="border:1px solid var(--border);padding:6px 14px">$120$ €</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$-30\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 0{,}70$</td><td style="border:1px solid var(--border);padding:6px 14px">$70$ €</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$+20\\%$ puis $-20\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$1{,}2 \\times 0{,}8 = 0{,}96$</td><td style="border:1px solid var(--border);padding:6px 14px">$96$ € (≠ 100 €)</td></tr></table>',
      method: {
        title: 'Méthode en 3 cas',
        steps: [
          '<strong>Pourcentage</strong> : $p\\%$ de $T = \\dfrac{p}{100} \\times T$. Pour trouver le taux : $\\dfrac{\\text{partie}}{\\text{total}} \\times 100$.',
          '<strong>Échelle</strong> : $\\text{distance réelle} = \\dfrac{\\text{distance sur plan}}{\\text{échelle}}$. Ex : échelle $1/25000$ → $1$ cm sur plan = $250$ m réels.',
          '<strong>Vitesse</strong> : $v = \\dfrac{d}{t}$, donc $d = v \\times t$ et $t = \\dfrac{d}{v}$. Vérifier la cohérence des unités (km/h, m/s).'
        ]
      },
      formulas: [
        '$p\\% \\text{ de } T = \\dfrac{p}{100} \\times T$',
        'Échelle $e$ : $d_{\\text{réelle}} = \\dfrac{d_{\\text{plan}}}{e}$',
        '$v = \\dfrac{d}{t}$ ; $d = v \\times t$ ; $t = \\dfrac{d}{v}$',
        'Conversion : $1\\,\\text{km/h} = \\dfrac{1}{3{,}6}\\,\\text{m/s}$'
      ],
      recap: [
        '$p\\%$ de $T$ = $\\dfrac{p}{100} \\times T$. Ne jamais oublier de diviser par 100.',
        'Les hausses et baisses de pourcentage ne s\'annulent pas : $+20\\%$ puis $-20\\%$ donne $-4\\%$.',
        'Vitesse = distance ÷ temps. Vérifier que les unités sont cohérentes.',
        'Échelle : multiplier la distance sur la carte par le dénominateur de l\'échelle.'
      ],
      piege: 'Piège avec les unités de vitesse : $90$ km/h $\\neq$ $90$ m/s. Pour convertir : $90 \\div 3{,}6 = 25$ m/s. Toujours vérifier que distance et temps sont dans les mêmes unités que la vitesse.'
    },

    quiz: [
      {
        q: 'Un article coûte $80$ €. Il est soldé à $-25\\%$. Quel est son nouveau prix ?',
        options: ['$55$ €', '$60$ €', '$65$ €', '$20$ €'],
        answer: 1,
        correction: 'Réduction : $25\\%$ de $80 = \\dfrac{25}{100} \\times 80 = 20$ €. Nouveau prix : $80 - 20 = 60$ €.'
      },
      {
        q: 'Sur une carte à l\'échelle $1/50\\,000$, deux villes sont distantes de $4$ cm. Quelle est la distance réelle ?',
        options: ['$200$ m', '$2$ km', '$20$ km', '$200$ km'],
        answer: 1,
        correction: '$d_{\\text{réelle}} = 4 \\times 50\\,000 = 200\\,000$ cm $= 2000$ m $= 2$ km.'
      },
      {
        q: 'Un article est d\'abord augmenté de $20\\%$, puis réduit de $20\\%$. Quel est le prix final par rapport au prix initial ?',
        options: [
          'Le même prix qu\'au départ : $+20\\%$ puis $-20\\%$ s\'annulent.',
          'Un prix inférieur de $4\\%$ au départ : $100 \\to 120 \\to 96$.',
          'Un prix supérieur de $4\\%$ au départ.',
          'Impossible à savoir sans connaître le prix initial.'
        ],
        answer: 1,
        correction: 'Les pourcentages ne s\'annulent pas ! Partir de $100$ € : $+20\\%$ → $120$ €, puis $-20\\%$ de $120$ → $120 \\times 0{,}8 = 96$ €. Le résultat est $96$ €, soit $4\\%$ de moins que le départ.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { item: 'veste', emoji: '🧥' },
          { item: 'paire de baskets', emoji: '👟' },
          { item: 'console de jeux', emoji: '🎮' },
          { item: 'vélo', emoji: '🚲' },
          { item: 'montre', emoji: '⌚' }
        ]);
        const prix = pick([50, 80, 120, 200, 250]);
        const taux = pick([10, 20, 25, 30, 40]);
        const reduction = prix * taux / 100;
        const newPrix = prix - reduction;
        return {
          statement: `${ctx.emoji} Une ${ctx.item} coûte $${prix}$ €. Elle est soldée à $-${taux}\\%$. Quel est son nouveau prix en euros ?`,
          answer: newPrix,
          tolerance: 0,
          unit: '€',
          hint: `Calcule d'abord la réduction : $${taux}\\%$ de $${prix}$, puis soustrait du prix initial.`,
          solution: [
            `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${reduction}$ €.`,
            `Nouveau prix : $${prix} - ${reduction} = ${newPrix}$ €.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un cycliste effectue un trajet de $60$ km. Il roule d\'abord $1{,}5$ h à $30$ km/h, puis s\'arrête $15$ min, puis continue à $20$ km/h.',
      tasks: [
        'Quelle distance parcourt-il lors de la première partie du trajet ?',
        'Quelle distance lui reste-t-il après la pause ?',
        'Combien de temps lui faut-il pour finir (en heures) ?'
      ],
      solutions: [
        '$d_1 = 30 \\times 1{,}5 = 45$ km.',
        'Distance restante : $60 - 45 = 15$ km.',
        '$t = \\dfrac{15}{20} = 0{,}75$ h $= 45$ min.'
      ],
      finalAnswer: 'Il lui faut encore $45$ minutes pour terminer les $15$ km restants.'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité appliquée',
      duration: '25 min',
      questions: [
        {
          statement: 'Un article coûte $150$ €. Il est soldé à $-30\\%$. Quel est son nouveau prix ?',
          type: 'numeric',
          answer: 105,
          tolerance: 0,
          unit: '€',
          points: 2,
          correction: 'Réduction : $30\\%$ de $150 = \\dfrac{30}{100} \\times 150 = 45$ €. Nouveau prix : $150 - 45 = 105$ €.'
        },
        {
          statement: 'Sur une carte à l\'échelle $\\dfrac{1}{25\\,000}$, deux villages sont distants de $6$ cm. Quelle est la distance réelle en mètres ?',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: '$d_{\\text{réelle}} = 6 \\times 25\\,000 = 150\\,000$ cm $= 1\\,500$ m.'
        },
        {
          statement: 'Un cycliste roule à $18$ km/h pendant $2{,}5$ heures. Quelle distance parcourt-il ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 18 \\times 2{,}5 = 45$ km.'
        },
        {
          statement: 'Un prix passe de $200$ € à $170$ €. Quel est le pourcentage de réduction ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Réduction absolue : $200 - 170 = 30$ €. Pourcentage : $\\dfrac{30}{200} \\times 100 = 15\\%$.'
        },
        {
          statement: 'Un article subit une hausse de $10\\%$ puis une baisse de $10\\%$. Le prix final est :',
          type: 'multiple-choice',
          options: [
            'Égal au prix initial.',
            'Inférieur de $1\\%$ au prix initial.',
            'Supérieur de $1\\%$ au prix initial.',
            'Impossible à déterminer sans connaître le prix initial.'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec un prix initial de $100$ € : $+10\\% \\to 110$ €, puis $-10\\%$ de $110 \\to 110 \\times 0{,}9 = 99$ €. Le prix final est $99$ €, soit $1\\%$ de moins.'
        }
      ]
    }
  });
