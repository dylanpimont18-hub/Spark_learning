/* =========================================================
   Spark Learning – data/lycee-1re/1re-produit-scalaire.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-produit-scalaire',
    level: 2, subject: 'maths',
    icon: '⋅',
    title: 'Produit scalaire',
    subtitle: 'Définition, calcul, travail d\'une force',
    keywords: ['Produit scalaire', 'Angle', 'Norme', 'Travail', 'Orthogonalité'],
    physics: 'Travail d\'une force $W = \\vec{F} \\cdot \\vec{d}$, puissance $P = \\vec{F} \\cdot \\vec{v}$',

    cours: {
      intro: 'Le <strong>produit scalaire</strong> "projette" un vecteur sur un autre et retourne un <strong>scalaire</strong> (un nombre réel), jamais un vecteur. Sa formule : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$ où $\\theta$ est l\'angle entre les deux vecteurs.<br/><br/>En physique, le <strong>travail d\'une force</strong> est exactement ce produit scalaire : $W = \\vec{F} \\cdot \\vec{d}$. Si $\\theta = 90°$, cos vaut $0$ donc $W = 0$ (la réaction normale du sol ne travaille pas). Si $\\theta = 180°$, la force s\'oppose au mouvement et $W < 0$ (frottement).<br/><br/>Deux vecteurs sont <strong>orthogonaux</strong> si et seulement si leur produit scalaire est nul : c\'est le critère algébrique de la perpendicularité.',
      definitions: [
        { term: 'Produit scalaire', def: 'Le <strong>produit scalaire</strong> de $\\vec{u}$ et $\\vec{v}$ est le nombre réel $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$. C\'est un <strong>scalaire</strong> (nombre), jamais un vecteur.' },
        { term: 'Norme d\'un vecteur', def: 'La <strong>norme</strong> de $\\vec{u}(x\\,;\\,y)$ est $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2}$. On la retrouve via $\\|\\vec{u}\\|^2 = \\vec{u} \\cdot \\vec{u}$.' },
        { term: 'Orthogonalité', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> ($\\vec{u} \\perp \\vec{v}$) si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. C\'est le critère algébrique de la perpendicularité.' },
        { term: 'Travail d\'une force', def: 'Le <strong>travail</strong> d\'une force $\\vec{F}$ sur un déplacement $\\vec{d}$ est $W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta$. Il peut être positif (moteur), nul (perpendiculaire) ou négatif (résistant).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Définition angulaire</strong> : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.',
          '<strong>Définition par coordonnées</strong> : si $\\vec{u}(x_1, y_1)$ et $\\vec{v}(x_2, y_2)$, alors $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.',
          '<strong>Orthogonalité</strong> : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. Auto-produit : $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.'
        ]
      },
      example: {
        statement: 'Soit $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$. Calculer $\\vec{u} \\cdot \\vec{v}$, puis déterminer si les vecteurs sont orthogonaux.',
        steps: [
          '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 2 + (-1) \\times 6 = 6 - 6 = 0$.',
          'Puisque $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont <strong>orthogonaux</strong> : $\\vec{u} \\perp \\vec{v}$.',
          'Vérification géométrique : $\\|\\vec{u}\\| = \\sqrt{10}$, $\\|\\vec{v}\\| = \\sqrt{40}$, $\\cos\\theta = 0/(\\sqrt{10}\\sqrt{40}) = 0$ donc $\\theta = 90°$.'
        ],
        answer: '$\\vec{u} \\cdot \\vec{v} = 0$ : les vecteurs $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$ sont bien orthogonaux.'
      },
      formulas: [
        '$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos\\theta$',
        '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$',
        '$W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$ (travail d\'une force)',
        '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$'
      ],
      recap: [
        'Le produit scalaire est un <strong>nombre réel</strong> (jamais un vecteur). Il peut être positif, négatif ou nul.',
        'Deux formules : $\\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$ (angulaire) et $x_1 x_2 + y_1 y_2$ (coordonnées).',
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.',
        'En physique : $W = \\vec{F} \\cdot \\vec{d}$. Travail nul si force perpendiculaire au déplacement.'
      ],
      piege: 'Le produit scalaire est un <strong>nombre</strong> (scalaire), pas un vecteur : $\\vec{u} \\cdot \\vec{v} \\in \\mathbb{R}$.<br/><br/>Il peut être négatif (angle obtus), nul (vecteurs orthogonaux) ou positif (angle aigu).<br/><br/>Un travail négatif signifie que la force s\'oppose au déplacement (force de frottement par exemple).'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $10\\,\\text{N}$ est appliquée selon un angle de $60°$ par rapport au déplacement $\\vec{d}$ de norme $5\\,\\text{m}$. Quel est le travail ?',
        options: ['$50\\,\\text{J}$', '$25\\,\\text{J}$', '$43{,}3\\,\\text{J}$', '$0\\,\\text{J}$'],
        answer: 1,
        correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 10 \\times 5 \\times \\cos(60°) = 10 \\times 5 \\times 0{,}5 = 25\\,\\text{J}$.'
      },
      {
        q: 'Soit $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(4\\,;\\,-3)$. Un élève calcule $3 \\times 4 + 4 \\times (-3) = 12 - 12 = 0$ et conclut "$\\vec{u} \\perp \\vec{v}$". A-t-il raison ?',
        options: [
          'Oui : le calcul est exact et $\\vec{u} \\cdot \\vec{v} = 0$ prouve bien que $\\vec{u} \\perp \\vec{v}$',
          'Non : le produit scalaire doit être un vecteur, pas un scalaire, donc le résultat est $(7\\,;\\,1)$',
          'Non : $3 \\times 4 + 4 \\times (-3) = 12 + 12 = 24 \\neq 0$',
          'Non : pour tester l\'orthogonalité, il faut utiliser la formule $\\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$, pas les coordonnées'
        ],
        answer: 0,
        correction: 'L\'élève a parfaitement raison. $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 4 + 4 \\times (-3) = 0$.<br/><br/>Par définition, $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow \\vec{u} \\perp \\vec{v}$. Le produit scalaire est bien un <strong>scalaire</strong> (un nombre réel) — pas un vecteur.<br/><br/>L\'option "$(7\\,;\\,1)$" est l\'erreur classique de confondre produit scalaire et addition de vecteurs.'
      },
      {
        q: 'La réaction normale $\\vec{N}$ d\'un sol horizontal est verticale. Le déplacement $\\vec{d}$ est horizontal. Quel est le travail de $\\vec{N}$ ?',
        options: ['$W = N \\times d$', '$W = 0$', '$W = -N \\times d$', 'Dépend de la masse'],
        answer: 1,
        correction: 'La réaction normale est perpendiculaire au déplacement : $\\vec{N} \\perp \\vec{d}$, donc $\\theta = 90°$.<br/><br/>On obtient $W = F d \\cos(90°) = F d \\times 0 = 0\\,\\text{J}$. Une force perpendiculaire au déplacement ne travaille jamais.'
      },
      {
        q: 'La norme de $\\vec{w}(5\\,;\\,12)$ vaut :',
        options: ['$7$', '$17$', '$13$', '$\\sqrt{17}$'],
        answer: 2,
        correction: 'On applique la formule de la norme : $\\|\\vec{w}\\| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>On peut aussi utiliser l\'auto-produit scalaire : $\\|\\vec{w}\\|^2 = \\vec{w} \\cdot \\vec{w} = 25 + 144 = 169$.'
      },
      {
        q: 'Si $\\vec{u} \\cdot \\vec{v} < 0$, cela signifie que :',
        options: ['Les vecteurs sont orthogonaux', 'L\'angle entre les vecteurs est obtus ($> 90°$)', 'Les normes sont négatives', 'Les vecteurs sont colinéaires'],
        answer: 1,
        correction: 'On part de la formule angulaire : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$.<br/><br/>Comme les normes sont toujours positives, $\\vec{u} \\cdot \\vec{v} < 0$ implique nécessairement $\\cos\\theta < 0$, donc $\\theta > 90°$ (angle obtus).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['coord', 'travail']);
        if (mode === 'coord') {
          const x1 = rand(-5, 5), y1 = rand(-5, 5);
          const x2 = rand(-5, 5), y2 = rand(-5, 5);
          const ps = x1 * x2 + y1 * y2;
          const ctx = pick([
            'Dans un plan muni d\'un repère orthonormé, on considère les vecteurs',
            'Un ingénieur modélise deux forces par les vecteurs',
            'En robotique, deux capteurs mesurent des déplacements représentés par'
          ]);
          return {
            statement: `${ctx} $\\vec{u}(${x1}\\,;\\,${y1})$ et $\\vec{v}(${x2}\\,;\\,${y2})$.<br/><br/>1) Calculer $\\vec{u} \\cdot \\vec{v}$.<br/>2) Les vecteurs sont-ils orthogonaux ?<br/><br/>Donner la valeur de $\\vec{u} \\cdot \\vec{v}$.`,
            answer: ps,
            tolerance: 0,
            unit: '',
            hint: `$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2}$.`,
            solution: [
              `$\\vec{u} \\cdot \\vec{v} = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2} = ${x1*x2} + (${y1*y2}) = ${ps}$.`,
              `${ps === 0 ? 'Comme $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont orthogonaux.' : 'Comme $\\vec{u} \\cdot \\vec{v} \\neq 0$, les vecteurs ne sont pas orthogonaux.'}`
            ]
          };
        } else {
          const F = rand(5, 20), d = rand(3, 10), angleDeg = pick([0, 30, 45, 60]);
          const cosVal = Math.cos(angleDeg * Math.PI / 180);
          const answer = parseFloat((F * d * cosVal).toFixed(2));
          const ctx = pick([
            `Un ouvrier tire une caisse avec une force de $${F}\\,\\text{N}$`,
            `Un chien tire sa laisse avec une force de $${F}\\,\\text{N}$`,
            `Un tracteur exerce une force de $${F}\\,\\text{N}$ sur une remorque`
          ]);
          return {
            statement: `${ctx} selon un angle de $${angleDeg}°$ par rapport à l'horizontale. Le déplacement est de $${d}\\,\\text{m}$.<br/><br/>Calculer le travail $W$ en joules.`,
            answer,
            tolerance: 0.1,
            unit: 'J',
            hint: `$W = F \\times d \\times \\cos(${angleDeg}°) = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$.`,
            solution: [
              `$W = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$`,
              `$= ${F} \\times ${d} \\times ${cosVal.toFixed(4)}$`,
              `$= ${answer}\\,\\text{J}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un ouvrier tire une caisse de $50\\,\\text{kg}$ sur $10\\,\\text{m}$ avec une corde faisant un angle $\\alpha = 30°$ avec l\'horizontale. La force de traction vaut $T = 200\\,\\text{N}$. La force de frottement est $f = 50\\,\\text{N}$ (horizontale, opposée au déplacement). $g = 10\\,\\text{m/s}^2$.',
      schema: null,
      tasks: [
        'Calculer le travail de la traction $W_T = T \\times d \\times \\cos(30°)$.',
        'Calculer le travail du poids $W_P$ et de la réaction normale $W_N$ (horizontale).',
        'Calculer le travail de la force de frottement $W_f$ et le travail total $W_{\\text{total}}$.'
      ],
      solutions: [
        '$W_T = 200 \\times 10 \\times \\cos(30°) = 2000 \\times \\dfrac{\\sqrt{3}}{2} \\approx 1732\\,\\text{J}$.',
        'Le poids est vertical, le déplacement horizontal : $W_P = P \\times d \\times \\cos(90°) = 0$. Idem pour $\\vec{N}$ : $W_N = 0$.',
        '$W_f = f \\times d \\times \\cos(180°) = 50 \\times 10 \\times (-1) = -500\\,\\text{J}$. $W_{\\text{total}} = 1732 + 0 + 0 - 500 = 1232\\,\\text{J}$.'
      ],
      finalAnswer: '$W_{\\text{total}} \\approx 1232\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Produit scalaire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$ avec $\\vec{u}(3\\,;\\,-2)$ et $\\vec{v}(4\\,;\\,5)$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On utilise la formule par coordonnées : $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.<br/><br/>$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 + (-2) \\times 5 = 12 - 10 = 2$. Le résultat est positif, donc l\'angle entre les vecteurs est aigu.'
        },
        {
          statement: 'Deux vecteurs $\\vec{a}$ et $\\vec{b}$ vérifient $\\|\\vec{a}\\| = 6$, $\\|\\vec{b}\\| = 4$ et l\'angle entre eux est $\\theta = 60°$. Calculer $\\vec{a} \\cdot \\vec{b}$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la formule angulaire du produit scalaire : $\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\| \\times \\|\\vec{b}\\| \\times \\cos(\\theta)$.<br/><br/>$\\vec{a} \\cdot \\vec{b} = 6 \\times 4 \\times \\cos(60°) = 6 \\times 4 \\times 0{,}5 = 12$.'
        },
        {
          statement: 'Pour quels vecteurs $\\vec{u}(2\\,;\\,k)$ et $\\vec{v}(3\\,;\\,-6)$ a-t-on $\\vec{u} \\perp \\vec{v}$ ?',
          type: 'multiple-choice',
          options: ['$k = -4$', '$k = 1$', '$k = 4$', '$k = -1$'],
          answer: 1,
          points: 2,
          correction: 'Le critère d\'orthogonalité est $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>On écrit : $2 \\times 3 + k \\times (-6) = 0$, soit $6 - 6k = 0$, d\'où $k = 1$.'
        },
        {
          statement: 'Une force $\\vec{F}$ de norme $15\\,\\text{N}$ est appliquée selon un angle de $45°$ par rapport au déplacement de $8\\,\\text{m}$. Calculer le travail $W$ en joules (arrondi à $0{,}1$ J).',
          type: 'numeric',
          answer: 84.85,
          tolerance: 0.1,
          unit: 'J',
          points: 2,
          correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 15 \\times 8 \\times \\cos(45°) = 120 \\times \\dfrac{\\sqrt{2}}{2} = 120 \\times 0{,}7071 \\approx 84{,}85$ J.'
        },
        {
          statement: 'La norme du vecteur $\\vec{w}(5\\,;\\,-12)$ est :',
          type: 'multiple-choice',
          options: ['$7$', '$17$', '$13$', '$\\sqrt{119}$'],
          answer: 2,
          points: 2,
          correction: 'On calcule la norme : $\\|\\vec{w}\\| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>On peut vérifier via l\'auto-produit scalaire : $\\vec{w} \\cdot \\vec{w} = \\|\\vec{w}\\|^2 = 169$, et $\\sqrt{169} = 13$.'
        }
      ]
    }
  });
