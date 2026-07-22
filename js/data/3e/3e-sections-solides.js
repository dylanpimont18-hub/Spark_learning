/* =========================================================
   Spark Learning – data/3e/3e-sections-solides.js
   Module : Sections de solides (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-sections-solides',
    level: 1, subject: 'maths',
    icon: '🔪',
    title: 'Sections de solides',
    subtitle: 'Plans de coupe, sections parallèles et perpendiculaires',
    keywords: ['Section', 'Plan de coupe', 'Pavé', 'Cône', 'Cylindre', 'Pyramide'],
    physics: false,
    cours: {
      intro: 'Couper un solide par un plan donne une <strong>section plane</strong> dont la forme révèle la structure géométrique du solide. Les <strong>sections parallèles à une base</strong> conservent la forme de celle-ci, en plus petit, selon un rapport de similitude lié aux hauteurs.<br/><br/>' +
        'Les <strong>coupes obliques</strong> donnent des formes moins intuitives : une coupe oblique d\'un cylindre produit une <strong>ellipse</strong>, pas un rectangle ni un cercle.<br/><br/>' +
        'Applications concrètes : en <strong>médecine</strong> (IRM, scanner), en <strong>architecture</strong> (plans de coupe), en fabrication industrielle.<br/><br/>' +
        'Pour les pyramides et cônes, le <strong>rapport de similitude</strong> entre la section et la base est le rapport des hauteurs — c\'est le théorème de Thalès appliqué dans l\'espace.',
      definitions: [
        { term: 'Section', def: 'Figure plane obtenue en <strong>coupant un solide par un plan</strong>. Sa forme dépend du type de solide et de l\'orientation du plan de coupe.' },
        { term: 'Plan de coupe', def: 'Le plan qui <strong>intersecte le solide</strong>. Il peut être parallèle à la base, perpendiculaire à l\'axe ou oblique — chaque orientation produit une section différente.' },
        { term: 'Similitude dans l\'espace', def: 'Quand un plan coupe une pyramide ou un cône <strong>parallèlement à la base</strong>, la section est une figure <strong>semblable</strong> à la base (mêmes angles, proportions conservées).' },
        { term: 'Rapport de réduction', def: 'Le quotient $k = \\dfrac{h\'}{h}$ entre la distance du sommet au plan de coupe ($h\'$) et la hauteur totale ($h$). Les dimensions de la section sont multipliées par $k$.' }
      ],
      method: {
        title: 'Méthode selon le type de solide',
        steps: [
          '<strong>Pavé droit</strong> : section parallèle à une face → rectangle (ou carré).<br/>Section oblique → parallélogramme.',
          '<strong>Cylindre</strong> : section parallèle aux bases → disque (même rayon).<br/>Section par un plan contenant l\'axe → rectangle.<br/>Section oblique → ellipse.',
          '<strong>Cône</strong> : section parallèle à la base → disque (rayon réduit, rapport $= h\'/h$).<br/>Section par un plan passant par le sommet et l\'axe → triangle isocèle.',
          '<strong>Pyramide</strong> : section parallèle à la base → figure semblable à la base.<br/>Rapport de similitude $= k = h\'/h$ (Thalès dans l\'espace).'
        ]
      },
      example: {
        statement: 'Une pyramide à base carrée de côté $8$ cm et de hauteur $12$ cm est coupée par un plan parallèle à la base, situé à $4$ cm du sommet. Déterminer le côté et l\'aire de la section.',
        steps: [
          '<strong>Rapport de réduction</strong> : $k = \\dfrac{h\'}{h} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          '<strong>Côté de la section</strong> : $c\' = 8 \\times \\dfrac{1}{3} = \\dfrac{8}{3} \\approx 2{,}67$ cm. La section est un carré semblable à la base.',
          '<strong>Aire de la section</strong> : $\\mathcal{A} = c\'^2 = \\left(\\dfrac{8}{3}\\right)^2 = \\dfrac{64}{9} \\approx 7{,}11$ cm². On vérifie : $\\dfrac{\\mathcal{A}_{\\text{section}}}{\\mathcal{A}_{\\text{base}}} = \\dfrac{7{,}11}{64} \\approx \\dfrac{1}{9} = k^2$ ✓.'
        ],
        answer: 'La section est un carré de côté $\\dfrac{8}{3} \\approx 2{,}67$ cm et d\'aire $\\approx 7{,}11$ cm².'
      },
      formulas: [
        'Section parallèle à la base d\'un cône ou pyramide : rapport de similitude $= \\dfrac{h\'}{h}$',
        'Côté de la section : $c\' = c \\times \\dfrac{h\'}{h}$ (homothétie)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Thalès dans l\'espace',
        title: 'Section d\'une pyramide par un plan parallèle à la base',
        description: 'Pyramide à base carrée de côté $8$ cm et de hauteur $12$ cm, coupée à $4$ cm du sommet — reprise exacte de l\'exemple du cours.',
        svg: `
          <svg viewBox="0 0 640 300" role="img" aria-labelledby="section-graph-title section-graph-desc">
            <title id="section-graph-title">Section d'une pyramide par un plan parallele a la base</title>
            <desc id="section-graph-desc">A gauche, une pyramide a base carree en perspective avec un plan de coupe parallele a la base pres du sommet. A droite, la coupe de profil montrant deux triangles emboites semblables : le grand triangle (sommet-base) et le petit triangle (sommet-section), dans le rapport 1/3.</desc>

            <!-- separation entre les deux vues -->
            <line class="grid-line" x1="320" y1="10" x2="320" y2="290"></line>

            <!-- ===================== VUE 1 : pyramide en perspective ===================== -->
            <!-- petite pyramide (pointe) mise en evidence -->
            <polygon points="160,30 125,97 160,106 195,97" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)" stroke="none"></polygon>

            <!-- aretes cachees (pointilles) -->
            <line class="guide-line" x1="55" y1="230" x2="160" y2="202"></line>
            <line class="guide-line" x1="160" y1="202" x2="265" y2="230"></line>
            <line class="guide-line" x1="160" y1="30" x2="160" y2="202"></line>
            <line class="guide-line" x1="125" y1="97" x2="160" y2="87"></line>
            <line class="guide-line" x1="160" y1="87" x2="195" y2="97"></line>

            <!-- aretes visibles de la pyramide -->
            <line class="frame-line" x1="160" y1="30" x2="55" y2="230"></line>
            <line class="frame-line" x1="160" y1="30" x2="265" y2="230"></line>
            <line class="frame-line" x1="160" y1="30" x2="160" y2="258"></line>
            <line class="frame-line" x1="55" y1="230" x2="160" y2="258"></line>
            <line class="frame-line" x1="160" y1="258" x2="265" y2="230"></line>

            <!-- plan de coupe (section), face visible, mis en valeur -->
            <line class="curve-main" x1="125" y1="97" x2="160" y2="106"></line>
            <line class="curve-main" x1="160" y1="106" x2="195" y2="97"></line>

            <!-- reperes sur l'axe sommet-base -->
            <circle class="plot-point-alt" cx="160" cy="30" r="5"></circle>
            <circle class="plot-point-alt" cx="160" cy="97" r="4"></circle>
            <circle class="plot-point-alt" cx="160" cy="230" r="4"></circle>

            <text class="annotation-label" x="160" y="18" text-anchor="middle">S (sommet)</text>
            <text class="label-soft" x="200" y="80" text-anchor="start">côté ≈ 2,67 cm</text>
            <text class="label-soft" x="160" y="278" text-anchor="middle">base : côté 8 cm</text>

            <!-- ===================== VUE 2 : coupe de profil (triangles semblables) ===================== -->
            <line class="guide-line" x1="460" y1="40" x2="460" y2="220"></line>
            <line class="frame-line" x1="460" y1="40" x2="550" y2="220"></line>
            <line class="frame-line" x1="460" y1="100" x2="490" y2="100"></line>
            <line class="frame-line" x1="460" y1="220" x2="550" y2="220"></line>

            <circle class="plot-point-alt" cx="460" cy="40" r="5"></circle>
            <circle class="plot-point-alt" cx="490" cy="100" r="5"></circle>
            <circle class="plot-point" cx="460" cy="220" r="5"></circle>
            <circle class="plot-point" cx="550" cy="220" r="5"></circle>

            <text class="annotation-label" x="460" y="26" text-anchor="middle">S</text>
            <text class="annotation-label" x="468" y="58" text-anchor="start">k = 1/3</text>
            <text class="annotation-label" x="445" y="74" text-anchor="end">h' = 4 cm</text>
            <text class="annotation-label" x="475" y="90" text-anchor="middle">c'/2 ≈ 1,33 cm</text>
            <text class="annotation-label" x="505" y="236" text-anchor="middle">c/2 = 4 cm</text>
            <text class="label-soft" x="505" y="76" text-anchor="start">petit triangle</text>
            <text class="label-soft" x="535" y="165" text-anchor="start">grand triangle</text>
          </svg>
        `,
        notes: [
          'Le plan de coupe est parallèle à la base, à $h\' = 4$ cm du sommet $S$ (hauteur totale $h = 12$ cm) : le rapport de réduction est $k = \\dfrac{h\'}{h} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          'La base est un carré de côté $8$ cm ; la section, semblable à la base (Thalès dans l\'espace), a pour côté $c\' = 8 \\times \\dfrac{1}{3} = \\dfrac{8}{3} \\approx 2{,}67$ cm.',
          'Les aires suivent le carré du rapport : $\\dfrac{\\mathcal{A}_{\\text{section}}}{\\mathcal{A}_{\\text{base}}} = k^2 = \\dfrac{1}{9}$, soit $\\dfrac{7{,}11}{64} \\approx 0{,}11$ — cohérent avec l\'exemple du cours.',
          'La vue de profil (à droite) est la coupe passant par le sommet et les milieux de deux côtés opposés de la base : on y retrouve la configuration de Thalès en 2D, avec le petit triangle (section) semblable au grand triangle (base).'
        ],
        reading: 'Repère d\'abord le sommet $S$ et l\'axe pointillé sommet-base : la section (à gauche) est la figure semblable à la base, réduite selon le même rapport $k$ que sur la vue de profil (à droite).',
        caption: 'Pyramide à base carrée (côté $8$ cm, hauteur $12$ cm) coupée à $4$ cm du sommet, parallèlement à la base — exemple du cours, avec vérification du rapport $k = 1/3$ sur les longueurs et $k^2 = 1/9$ sur les aires.'
      },
      recap: [
        'Une coupe <strong>parallèle à la base</strong> donne toujours une figure <strong>semblable</strong> à la base (même forme, dimensions réduites).',
        'Le <strong>rapport de réduction</strong> est $k = \\dfrac{h\'}{h}$ — les longueurs sont multipliées par $k$, les aires par $k^2$.',
        'Une coupe <strong>oblique</strong> d\'un cylindre ou d\'un cône produit une <strong>ellipse</strong>, pas un cercle.',
        'Pour calculer une section : identifier le solide, le type de coupe, appliquer le rapport de similitude si parallèle.'
      ],
      piege: 'Piège : la section d\'un cylindre PAR un plan oblique (ni perpendiculaire ni contenant l\'axe) est une ELLIPSE, pas un rectangle ni un cercle. Souvent négligé mais important !'
    },
    quiz: [
      {
        q: 'On coupe un cylindre par un plan oblique (ni parallèle ni perpendiculaire à l\'axe). Quelle est la forme de la section ?',
        options: ['Une ellipse', 'Un rectangle', 'Un cercle de plus petit rayon', 'Un ovale quelconque (pas une ellipse)'],
        answer: 0,
        correction: 'La section oblique d\'un cylindre est une ellipse — pas un rectangle ni un cercle. Le rectangle s\'obtient uniquement quand le plan de coupe contient l\'axe. La confusion vient souvent du dessin en perspective, où le cylindre semble « fait de rectangles ».'
      },
      {
        q: 'Une pyramide carrée de base $6$ cm et hauteur $9$ cm est coupée à $3$ cm du sommet (parallèlement à la base). Quel est le côté de la section ?',
        options: ['$3$ cm', '$2$ cm', '$6$ cm', '$4{,}5$ cm'],
        answer: 1,
        correction: 'Rapport : $\\frac{h\'}{h} = \\frac{3}{9} = \\frac{1}{3}$. Côté de la section : $6 \\times \\frac{1}{3} = 2$ cm.'
      },
      {
        q: 'La section d\'un cône par un plan passant par son sommet et l\'axe est :',
        options: ['Un cercle', 'Un trapèze', 'Un triangle isocèle', 'Un rectangle'],
        answer: 2,
        correction: 'Ce plan contient l\'axe du cône. Il coupe le cône selon un triangle isocèle dont la base est un diamètre de la base du cône.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const base = rand(6, 15);
        const h = rand(6, 15);
        const hprime = rand(1, h - 1);
        const cprime = parseFloat((base * hprime / h).toFixed(1));

        const ctx = pick([
          { build: () => `Une <strong>pyramide égyptienne miniature</strong> (souvenir touristique) a une base carrée de côté $${base}$ cm et une hauteur de $${h}$ cm. On la coupe à $${hprime}$ cm du sommet, parallèlement à la base.<br/><br/>Quel est le <strong>côté de la section</strong> obtenue (en cm) ?` },
          { build: () => `Une <strong>tente de camping</strong> pyramidale a une base carrée de côté $${base}$ cm et une hauteur de $${h}$ cm. Une moustiquaire est tendue à $${hprime}$ cm du sommet, parallèlement au sol.<br/><br/>Quel est le <strong>côté</strong> de cette moustiquaire (en cm) ?` },
          { build: () => `Un <strong>abat-jour</strong> pyramidal a une base carrée de côté $${base}$ cm et une hauteur de $${h}$ cm. On le coupe à $${hprime}$ cm du sommet, parallèlement à la base.<br/><br/>Quel est le <strong>côté de la section</strong> obtenue (en cm) ?` },
          { build: () => `Un <strong>chocolatier</strong> moule une pyramide de côté $${base}$ cm et de hauteur $${h}$ cm. Il tranche la pointe à $${hprime}$ cm du sommet, parallèlement à la base.<br/><br/>Quel est le <strong>côté de la tranche</strong> obtenue (en cm) ?` },
          { build: () => `Une <strong>trémie de silo</strong> agricole a la forme d'une pyramide de côté $${base}$ cm et de hauteur $${h}$ cm. On observe le niveau du grain à $${hprime}$ cm du sommet, parallèlement à la base.<br/><br/>Quel est le <strong>côté</strong> de la section de grain à ce niveau (en cm) ?` },
          { build: () => `Un décorateur conçoit un <strong>présentoir de vitrine</strong> pyramidal de côté $${base}$ cm et de hauteur $${h}$ cm. Une étagère est fixée à $${hprime}$ cm du sommet, parallèlement à la base.<br/><br/>Quel est le <strong>côté</strong> de cette étagère (en cm) ?` }
        ]);

        return {
          statement: ctx.build(),
          answer: cprime,
          tolerance: 0.1,
          unit: 'cm',
          hint: `Rapport de similitude : $\\dfrac{${hprime}}{${h}}$.<br/><br/>Côté section $= ${base} \\times \\dfrac{${hprime}}{${h}}$.`,
          solution: [`$c' = ${base} \\times \\dfrac{${hprime}}{${h}} = \\dfrac{${base*hprime}}{${h}} = ${String(cprime).replace('.', '{,}')}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un architecte coupe une maquette en forme de cône (rayon $12$ cm, hauteur $18$ cm) par un plan horizontal à $6$ cm du sommet.',
      tasks: [
        'Calculer le rapport de similitude entre la section et la base.',
        'Calculer le rayon de la section circulaire.',
        'Calculer l\'aire de cette section (avec $\\pi \\approx 3{,}14$).'
      ],
      solutions: [
        'Rapport $= \\dfrac{6}{18} = \\dfrac{1}{3}$.',
        'Rayon section $= 12 \\times \\dfrac{1}{3} = 4$ cm.',
        'Aire $= 3{,}14 \\times 4^2 = 3{,}14 \\times 16 = 50{,}24$ cm².'
      ],
      finalAnswer: 'La section est un disque de rayon $4$ cm et d\'aire $50{,}24$ cm².'
    },

    evaluation: {
      title: 'Évaluation — Sections de solides',
      duration: '25 min',
      questions: [
        {
          statement: 'Une pyramide régulière à base carrée de côté $10$ cm et de hauteur $15$ cm est coupée par un plan parallèle à la base, à $5$ cm du sommet. Quel est le côté de la section obtenue ?',
          type: 'numeric',
          answer: 3.33,
          tolerance: 0.05,
          unit: 'cm',
          points: 2,
          correction: 'Rapport de similitude : $k = \\dfrac{h\'}{h} = \\dfrac{5}{15} = \\dfrac{1}{3}$. Côté de la section : $10 \\times \\dfrac{1}{3} \\approx 3{,}33$ cm.'
        },
        {
          statement: 'On coupe un cylindre par un plan parallèle à ses bases. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un rectangle', 'Une ellipse', 'Un disque de même rayon que la base', 'Un disque de rayon plus petit'],
          answer: 2,
          points: 2,
          correction: 'Toute section d\'un cylindre par un plan parallèle aux bases est un disque de même rayon que les bases. Le rayon ne change pas car les génératrices sont toutes parallèles et à la même distance de l\'axe.'
        },
        {
          statement: 'Un cône de rayon de base $9$ cm et de hauteur $12$ cm est coupé à $8$ cm du sommet. Calculer l\'aire de la section circulaire obtenue ($\\pi \\approx 3{,}14$, arrondir à $0{,}01$ cm²).',
          type: 'numeric',
          answer: 113.04,
          tolerance: 0.5,
          unit: 'cm²',
          points: 3,
          correction: 'Rapport : $k = \\dfrac{8}{12} = \\dfrac{2}{3}$. Rayon section : $r\' = 9 \\times \\dfrac{2}{3} = 6$ cm. Aire : $\\pi r\'^2 = 3{,}14 \\times 36 = 113{,}04$ cm².'
        },
        {
          statement: 'On coupe un pavé droit par un plan contenant une diagonale d\'une face et perpendiculaire à cette face. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un triangle', 'Un rectangle', 'Un parallélogramme', 'Un trapèze'],
          answer: 1,
          points: 1,
          correction: 'Dans un pavé droit, un plan perpendiculaire à une face et contenant une diagonale de celle-ci donne une section rectangulaire. Les arêtes du pavé étant perpendiculaires entre elles, la section conserve des angles droits.'
        },
        {
          statement: 'Une pyramide à base triangulaire (tétraèdre) de hauteur $20$ cm est coupée à $10$ cm du sommet. Quel est le rapport entre l\'aire de la section et l\'aire de la base ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{8}$', '$\\dfrac{1}{3}$'],
          answer: 1,
          points: 2,
          correction: 'Le rapport de similitude est $k = \\dfrac{10}{20} = \\dfrac{1}{2}$. Les aires sont dans le rapport $k^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$. L\'aire de la section est le quart de l\'aire de la base.'
        }
      ]
    }
  }
);
