/* =========================================================
   Spark Learning – data/5e/5e-aires-perimetres.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-aires-perimetres',
    level: 1, subject: 'maths',
    icon: '🔷',
    title: 'Aires et périmètres (approfondissement)',
    subtitle: 'Disque, figures composées, conversions',
    keywords: ['Aire', 'Périmètre', 'Disque', 'Secteur', 'Figures composées', 'Conversion'],
    physics: false,

    cours: {
      intro: 'Les figures complexes se décomposent toujours en <strong>figures simples</strong> (rectangles, triangles, disques). L\'aire totale est la somme (ou différence) des aires des parties.<br/><br/>' +
        '<strong>Règle de conversion des aires :</strong> quand on passe d\'une unité de longueur à une autre, l\'exposant $2$ s\'applique aussi au facteur de conversion : $1$ m $= 100$ cm, donc $1$ m² $= 100^2$ cm² $= 10\\,000$ cm². Beaucoup d\'élèves multiplient par $100$ au lieu de $10\\,000$ !<br/><br/>' +
        'Le <strong>disque</strong> de rayon $r$ a une aire $\\pi r^2$ — c\'est $r$ seul au carré, pas $\\pi r$ entier. Le périmètre (ou <strong>circonférence</strong>) vaut $2\\pi r$.<br/><br/>' +
        'Pour les <strong>figures composées</strong>, bien identifier si on ajoute une partie (rectangle + demi-disque) ou si on soustrait (carré avec un trou circulaire).',
      definitions: [
        { term: 'Aire', def: 'Mesure de la surface d\'une figure plane. S\'exprime en unités au carré (cm², m², etc.).' },
        { term: 'Périmètre', def: 'Longueur du contour d\'une figure. S\'exprime en unités de longueur (cm, m, etc.).' },
        { term: 'Disque', def: 'Surface délimitée par un cercle. Aire = $\\pi r^2$, périmètre = $2\\pi r$.' },
        { term: 'Figure composée', def: 'Figure obtenue en assemblant ou en retranchant des figures simples. Son aire est la somme (ou différence) des aires des parties.' }
      ],
      example: {
        statement: 'Calcule l\'aire d\'un terrain rectangulaire de $30$ m × $20$ m dans lequel on a creusé une piscine circulaire de rayon $4$ m.',
        steps: [
          'Aire du rectangle : $30 \\times 20 = 600$ m².',
          'Aire du disque (piscine) : $\\pi \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Aire restante : $600 - 50{,}3 = 549{,}7$ m².'
        ],
        answer: '$\\approx 549{,}7$ m²'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Conversion</th><th style="border:1px solid var(--border);padding:6px 14px">Longueurs</th><th style="border:1px solid var(--border);padding:6px 14px">Aires ($\\times$ facteur²)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">m → cm</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 100$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 10\\,000$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">cm → mm</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 10$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 100$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">km → m</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1000$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1\\,000\\,000$</td></tr></table>',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Décomposer la figure complexe en figures simples connues.',
          'Calculer l\'aire de chaque partie séparément.',
          'Additionner (ou soustraire si une partie est retirée).',
          'Conversions : $1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$.'
        ]
      },
      formulas: [
        'Disque : $\\mathcal{A} = \\pi r^2$, $\\mathcal{P} = 2\\pi r$',
        'Demi-disque : $\\mathcal{A} = \\dfrac{\\pi r^2}{2}$',
        '$1\\,\\text{m}^2 = 10^4\\,\\text{cm}^2 = 10^6\\,\\text{mm}^2$',
        'Figures composées : $\\mathcal{A}_{\\text{tot}} = \\mathcal{A}_1 + \\mathcal{A}_2 \\pm \\ldots$'
      ],
      recap: [
        'Aire du disque : $\\pi r^2$ (bien utiliser le rayon, pas le diamètre !).',
        'Conversion d\'aires : élever le facteur de conversion au carré ($1$ m² = $10\\,000$ cm²).',
        'Figure composée = somme ou différence de figures simples.',
        'Périmètre d\'un cercle : $2\\pi r$ (ou $\\pi d$ avec le diamètre).'
      ],
      piege: 'Piège de conversion : $2\\,\\text{cm} = 20\\,\\text{mm}$ mais $2\\,\\text{cm}^2 \\neq 20\\,\\text{mm}^2$. En réalité $2\\,\\text{cm}^2 = 200\\,\\text{mm}^2$ (on multiplie par $100$, pas par $10$).'
    },

    quiz: [
      {
        q: 'Quelle est l\'aire d\'un demi-disque de rayon $6$ cm (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$56{,}52$ cm²', '$113{,}04$ cm²', '$18{,}84$ cm²', '$37{,}68$ cm²'],
        answer: 0,
        correction: '$\\mathcal{A} = \\dfrac{\\pi r^2}{2} = \\dfrac{3{,}14 \\times 36}{2} = \\dfrac{113{,}04}{2} = 56{,}52$ cm².'
      },
      {
        q: '$3{,}5\\,\\text{m}^2$ correspond à combien de cm² ?',
        options: ['$350$ cm²', '$3500$ cm²', '$35\\,000$ cm²', '$350\\,000$ cm²'],
        answer: 2,
        correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, donc $3{,}5 \\times 10\\,000 = 35\\,000$ cm².'
      },
      {
        q: 'Un élève convertit $5$ cm² en mm² et trouve $50$ mm². Quelle est son erreur ?',
        options: [
          'Il a raison : $1$ cm $= 10$ mm, donc $5$ cm² $= 50$ mm².',
          'Il faut multiplier par $100$ (pas $10$) : $1$ cm² $= 10^2 = 100$ mm². Donc $5$ cm² $= 500$ mm².',
          'Il faut multiplier par $1000$ : $5$ cm² $= 5000$ mm².',
          'Les cm² et mm² ne sont pas convertibles directement.'
        ],
        answer: 1,
        correction: '$1$ cm $= 10$ mm, donc $1$ cm² $= (10\\,\\text{mm})^2 = 100$ mm². Ainsi $5$ cm² $= 5 \\times 100 = 500$ mm².'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'pizza', emoji: '🍕' },
          { obj: 'horloge', emoji: '🕐' },
          { obj: 'frisbee', emoji: '🥏' },
          { obj: 'assiette', emoji: '🍽️' },
          { obj: 'piscine ronde', emoji: '🏊' }
        ]);
        const r = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule l'aire d'un(e) ${ctx.obj} circulaire de rayon $${r}$ cm. Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm².`,
          answer: parseFloat((3.14 * r * r).toFixed(1)),
          tolerance: 0.2,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r}$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r} = ${parseFloat((3.14 * r * r).toFixed(1))}$ cm².`]
        };
      }
    },

    probleme: {
      context: 'Un stade a une piste d\'athlétisme composée de deux lignes droites de $100$ m chacune et de deux demi-cercles de rayon $36$ m.',
      tasks: [
        'Calcule la longueur des deux demi-cercles (périmètre total des parties courbes).',
        'Calcule le périmètre total de la piste.',
        'Calcule l\'aire totale intérieure de la piste (rectangle central + deux demi-disques).'
      ],
      solutions: [
        'Périmètre des deux demi-cercles = périmètre d\'un cercle de rayon $36$ m : $2\\pi \\times 36 \\approx 2 \\times 3{,}14 \\times 36 \\approx 226$ m.',
        'Périmètre total : $2 \\times 100 + 226 = 426$ m.',
        'Aire rectangle : $100 \\times 72 = 7200$ m². Aire disque : $\\pi \\times 36^2 \\approx 4069$ m². Total $\\approx 11\\,269$ m².'
      ],
      finalAnswer: 'La piste fait environ $426$ m de périmètre pour une aire intérieure de $\\approx 11\\,269$ m².'
    },

    evaluation: {
      title: 'Évaluation — Aires et périmètres',
      duration: '25 min',
      questions: [
        {
          statement: 'Quelle est l\'aire d\'un disque de rayon $5$ cm ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm².)',
          type: 'numeric',
          answer: 78.5,
          tolerance: 0.2,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm².'
        },
        {
          statement: '$2{,}5$ m² correspondent à combien de cm² ?',
          type: 'numeric',
          answer: 25000,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$. Donc $2{,}5 \\times 10\\,000 = 25\\,000$ cm².'
        },
        {
          statement: 'Le périmètre d\'un cercle de diamètre $10$ cm vaut (avec $\\pi \\approx 3{,}14$) :',
          type: 'numeric',
          answer: 31.4,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm.'
        },
        {
          statement: 'Un terrain rectangulaire mesure $40$ m par $25$ m. On y creuse une piscine circulaire de rayon $5$ m. Quelle est l\'aire du terrain restant (avec $\\pi \\approx 3{,}14$) ?',
          type: 'numeric',
          answer: 921.5,
          tolerance: 0.5,
          unit: 'm²',
          points: 2,
          correction: 'Aire du rectangle : $40 \\times 25 = 1000$ m². Aire du disque : $3{,}14 \\times 25 = 78{,}5$ m². Aire restante : $1000 - 78{,}5 = 921{,}5$ m².'
        },
        {
          statement: '$8$ cm² est égal à :',
          type: 'multiple-choice',
          options: [
            '$80$ mm²',
            '$800$ mm²',
            '$8000$ mm²',
            '$0{,}8$ mm²'
          ],
          answer: 1,
          points: 2,
          correction: '$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$. Ainsi $8$ cm² $= 8 \\times 100 = 800$ mm².'
        }
      ]
    }
  });
