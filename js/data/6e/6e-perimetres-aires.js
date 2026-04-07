/* =========================================================
   Spark Learning – data/6e/6e-perimetres-aires.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-perimetres-aires',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Périmètres et aires',
    subtitle: 'Rectangle, triangle, disque',
    keywords: ['Périmètre', 'Aire', 'Rectangle', 'Triangle', 'Disque', 'Pi'],
    physics: false,

    cours: {
      intro: 'Le <strong>périmètre</strong> est la longueur du contour d\'une figure — on « fait le tour ». L\'<strong>aire</strong> mesure la surface intérieure.<br/><br/>' +
        'Ces deux notions sont <strong>indépendantes</strong> : un rectangle de $1$ cm × $10$ cm et un carré de $\\approx 3{,}16$ cm de côté ont la même aire ($10$ cm²) mais des périmètres très différents.<br/><br/>' +
        'La constante $\\pi \\approx 3{,}14159\\ldots$ est le rapport constant entre la circonférence et le diamètre de tout cercle. En physique, l\'aire intervient dans la pression ($P = F/S$) et le périmètre dans les calculs de longueur de câbles ou de clôtures.',
      definitions: [
        { term: 'Périmètre', def: 'Longueur totale du contour d\'une figure. Unité : cm ou m (longueur).' },
        { term: 'Aire', def: 'Mesure de la surface intérieure. Unité : cm² ou m² (surface).' },
        { term: 'Pi ($\\pi$)', def: 'Constante universelle $\\approx 3{,}14$. Rapport de la circonférence au diamètre pour tout cercle.' },
        { term: 'Disque', def: 'Surface intérieure du cercle. Aire $= \\pi r^2$, périmètre (cercle) $= 2\\pi r$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la figure</strong> et ses dimensions. <em>Exemple :</em> rectangle de $8 \\times 5$ cm.',
          '<strong>Appliquer la formule</strong>. <em>Périmètre :</em> $2(8+5) = 26$ cm. <em>Aire :</em> $8 \\times 5 = 40$ cm².',
          '<strong>Vérifier les unités</strong> : périmètre en cm, aire en cm². Ne pas confondre les deux !'
        ]
      },
      example: {
        statement: 'Calculer l\'aire et le périmètre d\'un disque de rayon $r = 5$ cm.',
        steps: [
          'Périmètre (cercle) : $\\mathcal{P} = 2\\pi r = 2 \\times 3{,}14 \\times 5 = 31{,}4$ cm.',
          'Aire (disque) : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Unités : périmètre en cm ✓, aire en cm² ✓'
        ],
        answer: '$\\mathcal{P} = 31{,}4$ cm et $\\mathcal{A} = 78{,}5$ cm²'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Figure</th><th style="border:1px solid var(--border);padding:8px">Périmètre</th><th style="border:1px solid var(--border);padding:8px">Aire</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Rectangle</strong></td><td style="border:1px solid var(--border);padding:8px">$2(L + l)$</td><td style="border:1px solid var(--border);padding:8px">$L \\times l$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Triangle</strong></td><td style="border:1px solid var(--border);padding:8px">$a + b + c$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{b \\times h}{2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Disque</strong></td><td style="border:1px solid var(--border);padding:8px">$2\\pi r$</td><td style="border:1px solid var(--border);padding:8px">$\\pi r^2$</td></tr></table>',
      formulas: [
        'Rectangle : $\\mathcal{P} = 2(L + l)$ et $\\mathcal{A} = L \\times l$',
        'Triangle : $\\mathcal{P} = a + b + c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$',
        'Disque : $\\mathcal{P} = 2\\pi r$ et $\\mathcal{A} = \\pi r^2$, avec $\\pi \\approx 3{,}14$'
      ],
      recap: [
        'Périmètre = longueur du contour (en cm). Aire = mesure de la surface (en cm²).',
        'Rectangle : $\\mathcal{P} = 2(L+l)$, $\\mathcal{A} = L \\times l$.',
        'Disque : $\\mathcal{P} = 2\\pi r$, $\\mathcal{A} = \\pi r^2$. Attention : c\'est $r$ au carré, pas $\\pi r$ !',
        'Un périmètre plus grand ne signifie pas une aire plus grande.'
      ],
      piege: 'Piège classique : confondre périmètre et aire. Le périmètre se mesure en cm (longueur), l\'aire en cm² (surface). De plus, dans $\\pi r^2$, c\'est $r$ qui est élevé au carré, pas $\\pi r$ entier !'
    },

    quiz: [
      { q: 'Un rectangle mesure $8$ cm de long et $5$ cm de large. Quelle est son aire ?', options: ['$26$ cm²', '$40$ cm²', '$13$ cm²', '$80$ cm²'], answer: 1, correction: '$\\mathcal{A} = 8 \\times 5 = 40$ cm².' },
      { q: 'Un disque a un rayon de $7$ cm. Quelle est son aire ($\\pi \\approx 3{,}14$) ?', options: ['$21{,}98$ cm²', '$43{,}96$ cm²', '$153{,}86$ cm²', '$153{,}86$ m²'], answer: 2, correction: '$\\pi \\times 7^2 = 3{,}14 \\times 49 = 153{,}86$ cm².' },
      { q: 'Un élève calcule $\\mathcal{A} = \\pi \\times 4 = 12{,}56$ cm² pour un disque de rayon $4$ cm. Son erreur ?', options: ['$2\\pi r = 25{,}13$ cm', 'Il a confondu avec le périmètre. L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm².', 'Correct.', 'Il faut $r = 2$.'], answer: 1, correction: 'L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm², pas $\\pi \\times r$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const fig = pick(['rectangle', 'triangle', 'disque']);
        if (fig === 'rectangle') {
          const L = rand(4, 15), l = rand(2, L - 1);
          return {
            statement: `Un rectangle mesure $${L}$ cm × $${l}$ cm. Calcule son aire en cm².`,
            answer: L * l,
            tolerance: 0,
            unit: 'cm²',
            hint: `$\\mathcal{A} = L \\times l = ${L} \\times ${l}$.`,
            solution: [`$\\mathcal{A} = ${L} \\times ${l} = ${L * l}$ cm²`]
          };
        }
        if (fig === 'triangle') {
          const b = rand(4, 12), h = rand(3, 10);
          const aire = parseFloat((b * h / 2).toFixed(1));
          return {
            statement: `Un triangle a une base de $${b}$ cm et une hauteur de $${h}$ cm. Calcule son aire en cm².`,
            answer: aire,
            tolerance: 0.1,
            unit: 'cm²',
            hint: `$\\mathcal{A} = \\dfrac{b \\times h}{2}$.`,
            solution: [`$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${aire}$ cm²`]
          };
        }
        const r = rand(2, 10);
        const aire = parseFloat((3.14 * r * r).toFixed(2));
        return {
          statement: `Un disque a un rayon de $${r}$ cm. Calcule son aire avec $\\pi \\approx 3{,}14$.`,
          answer: aire,
          tolerance: 0.5,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${aire}$ cm²`]
        };
      }
    },

    probleme: {
      context: 'Un jardinier veut gazonner un jardin rectangulaire de $12$ m × $8$ m. Une zone rectangulaire de $4$ m × $3$ m est réservée pour un bassin.',
      tasks: [
        'Calcule l\'aire totale du jardin.',
        'Calcule l\'aire de la zone bassin.',
        'Quelle superficie sera gazonnée ?',
        'La pelouse coûte $4{,}50$ € le m². Quel est le coût total ?'
      ],
      solutions: [
        'Aire totale : $12 \\times 8 = 96$ m².',
        'Aire bassin : $4 \\times 3 = 12$ m².',
        'Aire gazonnée : $96 - 12 = 84$ m².',
        'Coût : $84 \\times 4{,}50 = 378$ €.'
      ],
      finalAnswer: 'La superficie gazonnée est $84$ m² pour un coût de $378$ €.'
    },

    evaluation: {
      title: 'Évaluation — Périmètres et aires',
      duration: '20 min',
      questions: [
        { statement: 'Un rectangle mesure $12$ cm × $7$ cm. Calcule son périmètre en cm.', type: 'numeric', answer: 38, tolerance: 0, unit: 'cm', points: 2, correction: '$2(12+7) = 38$ cm.' },
        { statement: 'Un triangle a une base de $10$ cm et une hauteur de $6$ cm. Son aire ?', type: 'numeric', answer: 30, tolerance: 0, unit: 'cm²', points: 2, correction: '$\\dfrac{10 \\times 6}{2} = 30$ cm².' },
        { statement: 'Un disque a un rayon de $5$ cm. Son aire ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 78.5, tolerance: 0.1, unit: 'cm²', points: 2, correction: '$3{,}14 \\times 25 = 78{,}5$ cm².' },
        { statement: 'Quelle est la différence entre périmètre et aire ?', type: 'multiple-choice', options: ['Périmètre = surface, aire = contour.', 'Périmètre = contour (cm), aire = surface (cm²).', 'Identiques, formules différentes.', 'Périmètre en cm², aire en cm.'], answer: 1, points: 2, correction: 'Périmètre = contour en cm, aire = surface en cm².' },
        { statement: 'Un cercle a un diamètre de $8$ cm. Son périmètre ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 25.12, tolerance: 0.1, unit: 'cm', points: 2, correction: '$\\pi \\times d = 3{,}14 \\times 8 = 25{,}12$ cm.' }
      ]
    }
  });
