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
      diagram: {
        theme: 'maths',
        kicker: 'Contour vs surface',
        title: 'Périmètre (le contour) et aire (la surface teintée) sur trois figures',
        description: 'Le trait épais mesure le tour de la figure (périmètre) ; la teinte à l\'intérieur mesure la surface (aire). Rectangle et disque reprennent les valeurs du cours.',
        svg: `
          <svg viewBox="0 0 400 215" role="img" aria-labelledby="perimaire-diagram-title perimaire-diagram-desc">
            <title id="perimaire-diagram-title">Perimetre et aire d'un rectangle, d'un triangle et d'un disque</title>
            <desc id="perimaire-diagram-desc">Trois figures cote a cote : rectangle 8 sur 5, triangle de base et hauteur, disque de rayon 5. Le contour represente le perimetre et la teinte interieure represente l'aire.</desc>
            <rect x="20" y="14" width="170" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <line class="frame-line" x1="32" y1="29" x2="56" y2="29"></line>
            <text class="annotation-label" x="64" y="34">Perimetre (contour)</text>
            <rect x="210" y="14" width="170" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <rect x="222" y="21" width="16" height="16" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <text class="annotation-label" x="248" y="34">Aire (surface)</text>
            <rect class="frame-line" x="30" y="90" width="100" height="62" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
            <text class="annotation-label" x="36" y="104">l = 5 cm</text>
            <text class="annotation-label" x="80" y="168" text-anchor="middle">L = 8 cm</text>
            <text class="annotation-label" x="80" y="186" text-anchor="middle">P = 26 cm</text>
            <text class="tick-label" x="80" y="200" text-anchor="middle">A = 40 cm²</text>
            <polygon class="frame-line" points="160,152 260,152 210,90" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
            <line class="guide-line" x1="210" y1="90" x2="210" y2="152"></line>
            <path fill="none" class="grid-line" d="M204 152 L204 146 L210 146"></path>
            <text class="annotation-label" x="216" y="122">hauteur</text>
            <text class="annotation-label" x="210" y="168" text-anchor="middle">base</text>
            <text class="annotation-label" x="210" y="186" text-anchor="middle">P = a + b + c</text>
            <text class="tick-label" x="210" y="200" text-anchor="middle">A = base × h / 2</text>
            <circle class="frame-line" cx="340" cy="121" r="41" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></circle>
            <line class="guide-line" x1="340" y1="121" x2="381" y2="121"></line>
            <text class="annotation-label" x="346" y="115">r = 5 cm</text>
            <text class="annotation-label" x="340" y="186" text-anchor="middle">P = 2 π r</text>
            <text class="tick-label" x="340" y="200" text-anchor="middle">A = π r²</text>
          </svg>
        `,
        notes: [
          'Le rectangle reprend l\'exemple du cours : $L = 8$ cm, $l = 5$ cm, donc $\\mathcal{P} = 2(8+5) = 26$ cm et $\\mathcal{A} = 8 \\times 5 = 40$ cm².',
          'Le triangle n\'a pas de valeurs chiffrees dans le cours : seules les formules $\\mathcal{P} = a+b+c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$ sont rappelees, sur une figure generique.',
          'Le disque reprend l\'exemple du cours : $r = 5$ cm, donc $\\mathcal{P} = 2\\pi \\times 5 \\approx 31{,}4$ cm et $\\mathcal{A} = \\pi \\times 5^2 \\approx 78{,}5$ cm² (avec $\\pi \\approx 3{,}14$).'
        ],
        reading: 'Suis le trait epais du doigt : c\'est le perimetre. La zone coloree a l\'interieur, c\'est l\'aire. Les deux se calculent avec des formules differentes et ne s\'expriment jamais dans la meme unite.',
        caption: 'Perimetre (contour, en cm) et aire (surface teintee, en cm²) sur un rectangle, un triangle et un disque.'
      },
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
          const ctx = pick([
            { build: () => `Un rectangle mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Léa découpe une tablette de chocolat rectangulaire de $${L}$ cm sur $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette tablette (en cm²) ?` },
            { build: () => `Une carte de visite mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Un cahier de brouillon a pour dimensions $${L}$ cm × $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> de sa couverture (en cm²) ?` },
            { build: () => `Un napperon rectangulaire mesure $${L}$ cm de long et $${l}$ cm de large.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `Une carte postale a pour dimensions $${L}$ cm × $${l}$ cm.<br/>Quelle est l'<strong>aire</strong> occupée par cette carte (en cm²) ?` }
          ]);
          return {
            statement: ctx.build(),
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
          const ctx = pick([
            { build: () => `Un triangle a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Calcule son <strong>aire</strong> en cm².` },
            { build: () => `La voile triangulaire d'une maquette de bateau a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette voile (en cm²) ?` },
            { build: () => `Un fanion triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Calcule l'<strong>aire</strong> de ce fanion en cm².` },
            { build: () => `Un panneau de signalisation triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de ce panneau (en cm²) ?` },
            { build: () => `L'aile d'un cerf-volant a la forme d'un triangle de base $${b}$ cm et de hauteur $${h}$ cm.<br/>Calcule l'<strong>aire</strong> de cette aile en cm².` },
            { build: () => `Une part de pizza triangulaire a une base de $${b}$ cm et une hauteur de $${h}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette part (en cm²) ?` }
          ]);
          return {
            statement: ctx.build(),
            answer: aire,
            tolerance: 0.1,
            unit: 'cm²',
            hint: `$\\mathcal{A} = \\dfrac{b \\times h}{2}$.`,
            solution: [`$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${aire.toString().replace('.', '{,}')}$ cm²`]
          };
        }
        const r = rand(2, 10);
        const aire = parseFloat((3.14 * r * r).toFixed(2));
        const ctx = pick([
          { build: () => `Un disque a un rayon de $${r}$ cm.<br/>Calcule son <strong>aire</strong> avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Un CD a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce disque avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Un sous-verre circulaire a un rayon de $${r}$ cm.<br/>Quelle est son <strong>aire</strong> (avec $\\pi \\approx 3{,}14$) ?` },
          { build: () => `Le couvercle rond d'un bocal a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce couvercle avec $\\pi \\approx 3{,}14$.` },
          { build: () => `Le cadran d'une horloge circulaire a un rayon de $${r}$ cm.<br/>Calcule l'<strong>aire</strong> de ce cadran avec $\\pi \\approx 3{,}14$.` },
          { build: () => `La roue d'un jouet a un rayon de $${r}$ cm.<br/>Quelle est l'<strong>aire</strong> de cette roue (avec $\\pi \\approx 3{,}14$) ?` }
        ]);
        return {
          statement: ctx.build(),
          answer: aire,
          tolerance: 0.5,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${aire.toString().replace('.', '{,}')}$ cm²`]
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
