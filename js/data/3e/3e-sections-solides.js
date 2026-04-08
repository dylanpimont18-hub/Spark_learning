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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Solide</th><th style="border:1px solid var(--border);padding:8px">Coupe parallèle à la base</th><th style="border:1px solid var(--border);padding:8px">Coupe par l\'axe</th><th style="border:1px solid var(--border);padding:8px">Coupe oblique</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Pavé droit</strong></td><td style="border:1px solid var(--border);padding:8px">Rectangle</td><td style="border:1px solid var(--border);padding:8px">Rectangle</td><td style="border:1px solid var(--border);padding:8px">Parallélogramme</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Cylindre</strong></td><td style="border:1px solid var(--border);padding:8px">Disque (même rayon)</td><td style="border:1px solid var(--border);padding:8px">Rectangle</td><td style="border:1px solid var(--border);padding:8px">Ellipse</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Cône</strong></td><td style="border:1px solid var(--border);padding:8px">Disque (rayon réduit)</td><td style="border:1px solid var(--border);padding:8px">Triangle isocèle</td><td style="border:1px solid var(--border);padding:8px">Ellipse / Parabole</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Pyramide</strong></td><td style="border:1px solid var(--border);padding:8px">Figure semblable à la base</td><td style="border:1px solid var(--border);padding:8px">Triangle</td><td style="border:1px solid var(--border);padding:8px">Polygone quelconque</td></tr></table>',
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
        return {
          statement: `Une pyramide à base carrée de côté $${base}$ cm et de hauteur $${h}$ cm est coupée à $${hprime}$ cm du sommet, parallèlement à la base. Quel est le côté de la section (en cm) ?`,
          answer: cprime,
          tolerance: 0.1,
          unit: 'cm',
          hint: `Rapport de similitude : $\\dfrac{${hprime}}{${h}}$. Côté section $= ${base} \\times \\dfrac{${hprime}}{${h}}$.`,
          solution: [`$c' = ${base} \\times \\dfrac{${hprime}}{${h}} = \\dfrac{${base*hprime}}{${h}} = ${cprime}$ cm.`]
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
