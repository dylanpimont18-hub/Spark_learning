/* =========================================================
   Spark Learning – data/lycee-tle/tle-geometrie-espace.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-geometrie-espace',
    level: 2, subject: 'maths',
    icon: '🧊',
    title: 'Géométrie dans l\'espace',
    subtitle: 'Vecteurs, droites et plans de l\'espace',
    keywords: ['Espace', 'Vecteur', 'Plan', 'Droite', 'Coplanaire', 'Position relative'],
    physics: true,
    cours: {
      intro: 'En 3D, les droites et plans se comportent de façon plus riche qu\'en 2D. Deux droites de l\'espace peuvent être sécantes (se croisent), parallèles, ou GAUCHES — ni parallèles ni sécantes, passant "l\'une au-dessus de l\'autre" sans se toucher. Les droites gauches n\'existent pas en 2D et constituent le principal piège de la géométrie spatiale : deux droites non parallèles ne se croisent pas forcément ! Un plan est défini par son vecteur NORMAL $\\vec{n}(a;b;c)$ (perpendiculaire au plan) et son équation $ax+by+cz+d=0$. Une droite est perpendiculaire à un plan si son vecteur directeur est colinéaire au vecteur normal. Pour vérifier si deux droites se croisent, il faut résoudre le système et vérifier qu\'il admet une solution.',
      definitions: [
        { term: 'Vecteur normal à un plan', def: 'Vecteur $\\vec{n}(a;b;c)$ perpendiculaire au plan d\'équation $ax+by+cz+d=0$. Il est orthogonal à tout vecteur contenu dans le plan.' },
        { term: 'Droites gauches', def: 'Deux droites de l\'espace qui ne sont <strong>ni parallèles ni sécantes</strong>. Elles ne se croisent pas et ne sont pas dans le même plan. Ce cas n\'existe qu\'en dimension $\\geq 3$.' },
        { term: 'Représentation paramétrique', def: 'Une droite passant par $A(x_A;y_A;z_A)$ de vecteur directeur $\\vec{u}(a;b;c)$ s\'écrit : $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$, $t \\in \\mathbb{R}$.' },
        { term: 'Produit scalaire en 3D', def: '$\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Il vérifie aussi $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cos(\\theta)$ où $\\theta$ est l\'angle entre les vecteurs.' }
      ],
      method: {
        title: 'Positions relatives et équations',
        steps: [
          'Deux droites peuvent être : sécantes, parallèles, ou gauches (ni parallèles ni sécantes).',
          'Equation de plan : $ax+by+cz+d=0$, vecteur normal $\\vec{n}(a;b;c)$.',
          'Droite parallèle à un plan : vecteur directeur orthogonal à $\\vec{n}$.',
          'Droite perpendiculaire à un plan : vecteur directeur colinéaire à $\\vec{n}$.'
        ]
      },
      example: {
        statement: 'Soit le plan $\\mathcal{P}$ d\'équation $2x - y + 3z - 6 = 0$ et la droite $\\mathcal{D}$ de représentation paramétrique $\\begin{cases} x = 1 + 2t \\\\ y = -1 - t \\\\ z = 2 + 3t \\end{cases}$. Montrer que $\\mathcal{D}$ est perpendiculaire à $\\mathcal{P}$.',
        steps: [
          'Le <strong>vecteur normal</strong> au plan est $\\vec{n}(2;-1;3)$ (coefficients de $x$, $y$, $z$).',
          'Le <strong>vecteur directeur</strong> de la droite est $\\vec{u}(2;-1;3)$ (coefficients de $t$).',
          'On compare : $\\vec{u} = \\vec{n}$, ils sont <strong>colinéaires</strong> (rapport $1$).',
          'Puisque le vecteur directeur de la droite est colinéaire au vecteur normal du plan, la droite est <strong>perpendiculaire</strong> au plan $\\mathcal{P}$.'
        ],
        answer: '$\\vec{u} = \\vec{n} = (2;-1;3)$ : la droite $\\mathcal{D}$ est bien perpendiculaire au plan $\\mathcal{P}$.'
      },
      formulas: [
        'Plan : $ax+by+cz+d=0$, $\\vec{n}(a;b;c)$ normal',
        '$\\vec{u}\\cdot\\vec{v}=x_ux_v+y_uy_v+z_uz_v$',
        '$\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$',
        '$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}$'
      ],
      recap: [
        'Un plan est défini par son <strong>vecteur normal</strong> $\\vec{n}(a;b;c)$ et son équation $ax+by+cz+d=0$.',
        'En 3D, deux droites non parallèles peuvent être <strong>gauches</strong> : ni parallèles, ni sécantes. Toujours vérifier l\'existence d\'une intersection.',
        'Le <strong>produit scalaire</strong> en 3D : $\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Deux vecteurs sont orthogonaux si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$.',
        'Une droite est perpendiculaire à un plan si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan.'
      ],
      piege: 'En 3D, deux droites non parallèles peuvent être gauches (elles ne se croisent pas).<br/><br/>Avant de conclure qu\'elles sont sécantes, il faut résoudre le système et vérifier qu\'il admet une solution.'
    },
    quiz: [
      { q: 'Dans l\'espace, deux droites non parallèles se croisent forcément. Cette affirmation est :', options: ['FAUSSE : deux droites non parallèles peuvent être "gauches" (ni parallèles ni sécantes, elles passent l\'une au-dessus de l\'autre)', 'Vraie : si deux droites ne sont pas parallèles, elles ont forcément un point commun', 'Vraie seulement si les deux droites sont dans le même plan', 'Vraie en 3D, fausse en 2D'], answer: 0, correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles ne sont pas parallèles (directions distinctes) mais ne se croisent pas non plus. Exemple simple : l\'axe $x$ ($z=0$, $y=0$) et la droite $y=1$, $z=1$ ont des directions distinctes mais ne se rencontrent jamais. En 2D, ce cas n\'existe pas car deux droites non parallèles se croisent toujours en un point.' },
      { q: '$\\vec{u}(1;2;-1)\\cdot\\vec{v}(2;-1;0)=$ ?', options: ['$0$', '$3$', '$-3$', '$1$'], answer: 0, correction: '$1\\times2+2\\times(-1)+(-1)\\times0=2-2+0=0$. Les vecteurs sont orthogonaux !' },
      { q: 'La norme de $\\vec{u}(3;0;4)$ est :', options: ['$7$', '$5$', '$25$', '$\\sqrt{7}$'], answer: 1, correction: '$\\|\\vec{u}\\|=\\sqrt{9+0+16}=\\sqrt{25}=5$.<br/><br/>On applique la formule $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$ en additionnant les carrés des trois coordonnées.' },
      { q: 'Le plan $\\mathcal{P}$ a pour équation $3x - y + 2z + 5 = 0$. Son vecteur normal est :', options: ['$\\vec{n}(3;-1;2)$', '$\\vec{n}(3;1;2)$', '$\\vec{n}(3;-1;5)$', '$\\vec{n}(5;-1;2)$'], answer: 0, correction: 'Le vecteur normal au plan $ax+by+cz+d=0$ est $\\vec{n}(a;b;c)$.<br/><br/>On lit directement les coefficients de $x$, $y$ et $z$ : ici $a=3$, $b=-1$, $c=2$. La constante $d=5$ ne fait pas partie du vecteur normal.' },
      { q: 'La droite $\\mathcal{D}$ passe par $A(1;2;3)$ avec le vecteur directeur $\\vec{u}(0;0;1)$. Quelle est la nature de cette droite ?', options: ['Parallèle au plan $xOy$', 'Perpendiculaire au plan $xOy$ (elle est verticale, parallèle à l\'axe $z$)', 'Perpendiculaire à l\'axe $z$', 'Confondue avec l\'axe $z$'], answer: 1, correction: 'Le vecteur directeur $\\vec{u}(0;0;1)$ est colinéaire au vecteur normal du plan $xOy$ (dont l\'équation est $z=0$ et le vecteur normal $\\vec{k}(0;0;1)$).<br/><br/>La droite est donc <strong>perpendiculaire</strong> au plan $xOy$ : elle est verticale, parallèle à l\'axe $z$, passant par le point $(1;2;3)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const x = rand(-3, 3), y = rand(-3, 3), z = rand(-3, 3);
        const norm = parseFloat(Math.sqrt(x*x+y*y+z*z).toFixed(4));
        return {
          statement: `Calculer la norme du vecteur $\\vec{u}(${x};${y};${z})$. Arrondir à $0{,}01$.`,
          answer: parseFloat(norm.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: `$\\|\\vec{u}\\|=\\sqrt{${x}^2+${y}^2+${z}^2}$`,
          solution: [`$\\|\\vec{u}\\|=\\sqrt{${x*x}+${y*y}+${z*z}}=\\sqrt{${x*x+y*y+z*z}}\\approx${norm}$`]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé de l\'espace, on donne $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.',
      tasks: [
        'Donner les vecteurs $\\vec{AB}$ et $\\vec{AC}$.',
        'Calculer $\\vec{AB}\\cdot\\vec{AC}$.',
        'Déterminer l\'équation du plan $ABC$ sachant que le vecteur normal est $\\vec{n}(6;3;2)$ (admis).'
      ],
      solutions: [
        '$\\vec{AB}(-1;2;0)$ ; $\\vec{AC}(-1;0;3)$.',
        '$\\vec{AB}\\cdot\\vec{AC}=(-1)(-1)+(2)(0)+(0)(3)=1$.',
        'Plan contenant $A(1;0;0)$, normal $\\vec{n}(6;3;2)$ : $6(x-1)+3(y-0)+2(z-0)=0 \\Rightarrow 6x+3y+2z=6$.'
      ],
      finalAnswer: '$\\vec{AB}\\cdot\\vec{AC}=1$ ; équation du plan : $6x+3y+2z=6$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $A(2;1;-1)$ et $B(4;-1;3)$. Calculer la norme du vecteur $\\vec{AB}$.',
          type: 'numeric',
          answer: 4.90,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$\\vec{AB}(2;-2;4)$. $\\|\\vec{AB}\\| = \\sqrt{4+4+16} = \\sqrt{24} = 2\\sqrt{6} \\approx 4{,}90$.'
        },
        {
          statement: 'Deux droites de l\'espace ont des vecteurs directeurs non colinéaires. Peut-on conclure qu\'elles sont sécantes ?',
          type: 'multiple-choice',
          options: ['Oui, deux droites non parallèles se croisent toujours', 'Non, elles pourraient être gauches (ni parallèles ni sécantes)', 'Oui, si elles ne sont pas parallèles, elles ont un point commun', 'Non, mais elles sont forcément perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles n\'ont pas de point d\'intersection bien qu\'elles ne soient pas parallèles. Il faut résoudre le système pour vérifier l\'existence d\'un point commun.'
        },
        {
          statement: 'Calculer $\\vec{u}(1;3;-2)\\cdot\\vec{v}(2;-1;4)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 2 + 3 \\times (-1) + (-2) \\times 4 = 2 - 3 - 8 = -9$.'
        },
        {
          statement: 'L\'équation du plan passant par $A(1;0;0)$ de vecteur normal $\\vec{n}(2;3;-1)$ est :',
          type: 'multiple-choice',
          options: ['$2x+3y-z-2=0$', '$2x+3y-z+2=0$', '$x+y+z-1=0$', '$2x+3y-z=0$'],
          answer: 0,
          points: 2,
          correction: 'Plan : $2(x-1)+3(y-0)+(-1)(z-0)=0$, soit $2x-2+3y-z=0$, d\'où $2x+3y-z-2=0$.'
        },
        {
          statement: 'Soit $\\vec{u}(a;1;2)$ et $\\vec{v}(3;-6;a)$. Trouver la valeur de $a$ pour que $\\vec{u} \\perp \\vec{v}$.',
          type: 'numeric',
          answer: 1.2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 3a + 1 \\times (-6) + 2a = 3a - 6 + 2a = 5a - 6 = 0$. Donc $a = \\dfrac{6}{5} = 1{,}2$.'
        }
      ]
    }
  });
