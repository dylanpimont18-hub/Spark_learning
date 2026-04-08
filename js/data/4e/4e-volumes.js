window.MODULES.push(
    id: '4e-volumes',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Volumes des pyramides et cônes',
    subtitle: 'Formule du tiers, cas particuliers',
    keywords: ['Pyramide', 'Cône', 'Volume', 'Base', 'Hauteur', 'Tiers'],
    physics: true,
    cours: {
      intro: 'La pyramide et le cône ont un volume égal au tiers du prisme ou cylindre qui les contient : $V = \\frac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$.' +
        '<br/><br/>' +
        '<strong>Intuition :</strong> en versant un cône rempli de sable dans le cylindre de même base et même hauteur, il faut exactement 3 remplissages — vérifiable expérimentalement ! Cette formule s\'applique à toute pyramide quelle que soit la forme de sa base (carrée, triangulaire, hexagonale…).' +
        '<br/><br/>' +
        'Le point crucial est que $h$ désigne la <strong>hauteur perpendiculaire</strong> — la distance du sommet à la base — jamais l\'arête latérale qui relie le sommet à un coin de la base.' +
        '<br/><br/>' +
        'En physique, ces formules servent à calculer le volume de réservoirs coniques, de silos, d\'entonnoirs, ou de toitures en pyramide.',
      definitions: [
        { term: 'Pyramide', def: 'Solide dont la base est un polygone et dont les faces latérales sont des triangles qui se rejoignent en un sommet appelé apex.' },
        { term: 'Cône de révolution', def: 'Solide obtenu en faisant tourner un triangle rectangle autour d\'un de ses côtés de l\'angle droit. La base est un disque.' },
        { term: 'Hauteur d\'une pyramide ou d\'un cône', def: 'Distance perpendiculaire du sommet (apex) au plan de la base. Ce n\'est pas l\'arête latérale.' },
        { term: 'Apothème', def: 'Arête latérale d\'une pyramide régulière, ou génératrice d\'un cône. Toujours plus longue que la hauteur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer l\'aire de la base</strong> $\\mathcal{A}_{\\text{base}}$. <strong>Exemple :</strong> base carrée de côté $5$ cm → $\\mathcal{A} = 5^2 = 25$ cm² ; base circulaire de rayon $3$ cm → $\\mathcal{A} = \\pi \\times 3^2 \\approx 28{,}3$ cm².',
          '<strong>Mesurer la hauteur $h$</strong> (distance perpendiculaire du sommet à la base). <strong>Exemple :</strong> si l\'arête latérale vaut $13$ cm et la demi-diagonale de la base carrée vaut $5$ cm, alors $h = \\sqrt{13^2 - 5^2} = 12$ cm (Pythagore).',
          '<strong>Appliquer la formule</strong> : $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$. <strong>Exemple :</strong> $V = \\dfrac{1}{3} \\times 25 \\times 12 = 100$ cm³.'
        ]
      },
      example: {
        statement: 'Un entonnoir a la forme d\'un cône de rayon $4$ cm et de hauteur $9$ cm. Quel volume de liquide peut-il contenir ? (Prendre $\\pi \\approx 3{,}14$.)',
        steps: [
          'Aire de la base circulaire : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 4^2 = 3{,}14 \\times 16 = 50{,}24$ cm².',
          'Volume du cône : $V = \\dfrac{1}{3} \\times 50{,}24 \\times 9 = \\dfrac{452{,}16}{3} = 150{,}72$ cm³.',
          'Conversion : $150{,}72$ cm³ $= 150{,}72$ mL $\\approx 0{,}15$ L.'
        ],
        answer: 'L\'entonnoir peut contenir environ $150{,}7$ cm³ soit $\\approx 0{,}15$ L.'
      },
      formulas: [
        'Pyramide : $V = \\dfrac{1}{3} \\mathcal{A}_{\\text{base}} \\times h$',
        'Cône : $V = \\dfrac{1}{3} \\pi r^2 h$',
        'Pyramide à base carrée de côté $a$ : $V = \\dfrac{1}{3} a^2 h$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Solide</th><th style="border:1px solid var(--border);padding:6px 14px">Base</th><th style="border:1px solid var(--border);padding:6px 14px">Formule du volume</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Pyramide (base carrée)</td><td style="border:1px solid var(--border);padding:6px 14px">Carré de côté $a$</td><td style="border:1px solid var(--border);padding:6px 14px">$V = \\dfrac{1}{3} a^2 h$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Pyramide (base triangulaire)</td><td style="border:1px solid var(--border);padding:6px 14px">Triangle d\'aire $\\mathcal{A}$</td><td style="border:1px solid var(--border);padding:6px 14px">$V = \\dfrac{1}{3} \\mathcal{A} h$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Cône de révolution</td><td style="border:1px solid var(--border);padding:6px 14px">Disque de rayon $r$</td><td style="border:1px solid var(--border);padding:6px 14px">$V = \\dfrac{1}{3} \\pi r^2 h$</td></tr></table>',
      recap: [
        'Volume d\'une pyramide ou d\'un cône = $\\dfrac{1}{3}$ du prisme ou cylindre de même base et même hauteur.',
        'La hauteur $h$ est toujours perpendiculaire à la base — ne pas confondre avec l\'arête latérale.',
        'Cône : $V = \\dfrac{1}{3} \\pi r^2 h$ ; pyramide à base carrée : $V = \\dfrac{1}{3} a^2 h$.',
        'Il faut $3$ cônes pour remplir un cylindre de même base et même hauteur.'
      ],
      piege: 'Piège : la hauteur d\'une pyramide est la distance perpendiculaire du sommet à sa base, PAS l\'arête latérale (apothème). Sur les figures obliques, la hauteur est souvent différente de ce qu\'on voit de prime abord.'
    },
    quiz: [
      {
        q: 'Un élève calcule le volume d\'une pyramide à base carrée de côté $4$ cm. Il mesure l\'arête latérale $= 5$ cm et écrit : $V = \\frac{1}{3} \\times 16 \\times 5 \\approx 26{,}7$ cm³. Quelle est son erreur ?',
        options: [
          'Il a utilisé l\'arête latérale au lieu de la hauteur perpendiculaire',
          'Il a oublié le facteur $\\frac{1}{3}$ dans la formule',
          'L\'aire de la base est $4$ cm², pas $16$ cm²',
          'Il n\'y a pas d\'erreur, le résultat est correct'
        ],
        answer: 0,
        correction: 'L\'arête latérale ($5$ cm) relie le sommet à un coin de la base ; ce n\'est pas la hauteur. La hauteur $h$ est la distance perpendiculaire du sommet au centre de la base — elle est toujours différente de l\'arête latérale (ici plus courte). Il faut calculer $h$ avec Pythagore avant d\'appliquer $V = \\frac{1}{3} \\times 16 \\times h$.'
      },
      {
        q: 'Un cône a un rayon de base de $3$ cm et une hauteur de $10$ cm. Quel est son volume (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$94{,}2$ cm³', '$282{,}6$ cm³', '$31{,}4$ cm³', '$188{,}4$ cm³'],
        answer: 0,
        correction: '$V = \\dfrac{1}{3} \\times 3{,}14 \\times 9 \\times 10 = \\dfrac{282{,}6}{3} = 94{,}2$ cm³.'
      },
      {
        q: 'Un prisme et une pyramide ont la même base et la même hauteur. Quel est le rapport de leurs volumes ?',
        options: ['$1:1$', '$3:1$', '$1:3$', '$2:1$'],
        answer: 1,
        correction: 'Le prisme a $V = \\mathcal{A} \\times h$, la pyramide $V = \\frac{1}{3}\\mathcal{A} \\times h$. Rapport : $3:1$ (le prisme est trois fois plus grand).'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'Un toit en forme de pyramide a une base carrée de côté', emoji:'🏠'},
          {intro:'Un monument historique en forme de pyramide a une base carrée de côté', emoji:'🏛️'},
          {intro:'Un emballage décoratif en forme de pyramide a une base carrée de côté', emoji:'🎁'},
          {intro:'Un cristal en forme de pyramide a une base carrée de côté', emoji:'💎'},
          {intro:'Un silo à grain en forme de pyramide a une base carrée de côté', emoji:'🌾'}
        ]);
        const a = rand(3, 10);
        const h = rand(3, 12);
        const v = parseFloat(((a * a * h) / 3).toFixed(1));
        return {
          statement: `${ctx.emoji} ${ctx.intro} $${a}$ cm et une hauteur de $${h}$ cm. Calcule son volume en cm³.`,
          answer: v,
          tolerance: 0.2,
          unit: 'cm³',
          hint: `$V = \\dfrac{1}{3} \\times ${a}^2 \\times ${h} = \\dfrac{1}{3} \\times ${a*a} \\times ${h}$.`,
          solution: [`$V = \\dfrac{${a*a} \\times ${h}}{3} = \\dfrac{${a*a*h}}{3} = ${v}$ cm³.`]
        };
      }
    },
    probleme: {
      context: 'La Grande Pyramide de Gizeh a une base carrée de $230$ m de côté et une hauteur d\'origine de $146$ m.',
      tasks: [
        'Calculer le volume de la pyramide en m³.',
        'Convertir en km³ ($1\\,\\text{km}^3 = 10^9\\,\\text{m}^3$).',
        'Un bloc de pierre occupe environ $1\\,\\text{m}^3$. Estimer le nombre de blocs.'
      ],
      solutions: [
        '$V = \\dfrac{1}{3} \\times 230^2 \\times 146 = \\dfrac{1}{3} \\times 52900 \\times 146 \\approx 2\\,573\\,133$ m³.',
        '$\\approx 2{,}57 \\times 10^{-3}$ km³.',
        '$\\approx 2{,}57$ millions de blocs.'
      ],
      finalAnswer: 'La Grande Pyramide contient environ $2{,}57$ millions de m³ de pierres.'
    },

    evaluation: {
      title: 'Évaluation — Volumes des pyramides et cônes',
      duration: '30 min',
      questions: [
        {
          statement: 'Une pyramide à base carrée de côté $6\\,\\text{cm}$ a une hauteur de $9\\,\\text{cm}$. Calculer son volume en cm³.',
          type: 'numeric',
          answer: 108,
          tolerance: 0.1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\times 6^2 \\times 9 = \\dfrac{1}{3} \\times 36 \\times 9 = \\dfrac{324}{3} = 108\\,\\text{cm}^3$.'
        },
        {
          statement: 'Un cône a un rayon de base $r = 5\\,\\text{cm}$ et une hauteur $h = 12\\,\\text{cm}$. Calculer son volume (prendre $\\pi \\approx 3{,}14$).',
          type: 'numeric',
          answer: 314,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\pi r^2 h = \\dfrac{1}{3} \\times 3{,}14 \\times 25 \\times 12 = \\dfrac{942}{3} = 314\\,\\text{cm}^3$.'
        },
        {
          statement: 'On remplit un cône d\'eau et on le verse dans un cylindre de même base et même hauteur. Combien de cônes faut-il pour remplir le cylindre ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$V_{\\text{cylindre}} = \\pi r^2 h$ et $V_{\\text{cône}} = \\dfrac{1}{3} \\pi r^2 h$. Le rapport est $\\dfrac{V_{\\text{cylindre}}}{V_{\\text{cône}}} = 3$. Il faut donc $3$ cônes.'
        },
        {
          statement: 'La hauteur d\'une pyramide est :',
          type: 'multiple-choice',
          options: [
            'L\'arête latérale reliant le sommet à un coin de la base',
            'La distance perpendiculaire du sommet à la base',
            'La diagonale de la base',
            'La longueur d\'une face latérale'
          ],
          answer: 1,
          points: 2,
          correction: 'La hauteur d\'une pyramide est la distance perpendiculaire du sommet au plan de la base. Ce n\'est jamais l\'arête latérale (qui relie le sommet à un sommet de la base et qui est plus longue que la hauteur).'
        },
        {
          statement: 'Une pyramide à base triangulaire a une base de $20\\,\\text{cm}^2$ d\'aire et une hauteur de $15\\,\\text{cm}$. Calculer son volume.',
          type: 'numeric',
          answer: 100,
          tolerance: 0.1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{1}{3} \\times 20 \\times 15 = \\dfrac{300}{3} = 100\\,\\text{cm}^3$.'
        }
      ]
    }
  },

    {
);
