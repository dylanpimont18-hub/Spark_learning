/* =========================================================
   Spark Learning – data/5e/5e-parallelogrammes.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-parallelogrammes',
    level: 1, subject: 'maths',
    icon: '▱',
    title: 'Parallélogrammes et propriétés',
    subtitle: 'Parallélogramme, rectangle, losange, carré',
    keywords: ['Parallélogramme', 'Rectangle', 'Losange', 'Carré', 'Diagonales', 'Côtés parallèles'],
    physics: false,

    cours: {
      intro: 'Un parallélogramme est un quadrilatère avec <strong>deux paires de côtés parallèles</strong>. De cette propriété découlent toutes les autres : les côtés opposés sont égaux, les angles opposés sont égaux, et les diagonales se coupent en leur milieu.<br/><br/>' +
        '<strong>Hiérarchie :</strong> tout carré est un rectangle et un losange ; tout rectangle est un parallélogramme ; tout losange est un parallélogramme — mais l\'inverse n\'est pas vrai.<br/><br/>' +
        'Pour <strong>identifier</strong> un parallélogramme, il suffit de vérifier <em>une</em> des conditions : côtés opposés parallèles, ou côtés opposés égaux, ou diagonales se coupant en leur milieu.<br/><br/>' +
        'L\'<strong>aire d\'un parallélogramme</strong> est base × hauteur. Attention : la hauteur est perpendiculaire à la base, pas le côté latéral. L\'aire d\'un losange se calcule avec ses diagonales : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$.',
      definitions: [
        { term: 'Parallélogramme', def: 'Quadrilatère dont les côtés opposés sont parallèles et de même longueur. Les diagonales se coupent en leur milieu.' },
        { term: 'Rectangle', def: 'Parallélogramme ayant 4 angles droits. Ses diagonales sont de même longueur.' },
        { term: 'Losange', def: 'Parallélogramme ayant 4 côtés de même longueur. Ses diagonales sont perpendiculaires.' },
        { term: 'Carré', def: 'Quadrilatère qui est à la fois rectangle ET losange : 4 angles droits et 4 côtés égaux.' }
      ],
      example: {
        statement: 'Un losange a des diagonales de $8$ cm et $6$ cm. Calcule son aire et le demi-côté.',
        steps: [
          'Aire : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².',
          'Les diagonales se coupent perpendiculairement en leur milieu → demi-diagonales : $4$ et $3$ cm.',
          'Par Pythagore : côté $= \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ cm.'
        ],
        answer: 'Aire = $24$ cm², côté = $5$ cm'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Figure</th><th style="border:1px solid var(--border);padding:6px 14px">Côtés</th><th style="border:1px solid var(--border);padding:6px 14px">Angles</th><th style="border:1px solid var(--border);padding:6px 14px">Diagonales</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Parallélogramme</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Se coupent en leur milieu</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">4 × 90°</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + même longueur</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Losange</td><td style="border:1px solid var(--border);padding:6px 14px">4 côtés =</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + perpendiculaires</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Carré</td><td style="border:1px solid var(--border);padding:6px 14px">4 côtés =</td><td style="border:1px solid var(--border);padding:6px 14px">4 × 90°</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + = + ⊥</td></tr></table>',
      method: {
        title: 'Méthode : identifier et utiliser les propriétés',
        steps: [
          'Parallélogramme : côtés opposés parallèles ET égaux ; diagonales qui se coupent en leur milieu.',
          'Rectangle : parallélogramme avec 4 angles droits ; diagonales égales.',
          'Losange : parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires.',
          'Carré : rectangle ET losange (4 angles droits + 4 côtés égaux).'
        ]
      },
      formulas: [
        'Parallélogramme $ABCD$ : $\\vec{AB} = \\vec{DC}$ (vecteurs égaux)',
        'Diagonales d\'un parallélogramme : milieu de $[AC]$ = milieu de $[BD]$',
        'Aire du parallélogramme : $\\mathcal{A} = b \\times h$ (base $\\times$ hauteur)',
        'Aire du losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ (demi-produit des diagonales)'
      ],
      recap: [
        'Les diagonales d\'un parallélogramme se coupent en leur milieu.',
        'Rectangle = parallélogramme + angles droits. Losange = parallélogramme + côtés égaux.',
        'Carré = rectangle + losange.',
        'Aire du losange : $\\dfrac{d_1 \\times d_2}{2}$.'
      ],
      piege: 'Piège : un rectangle est TOUJOURS un parallélogramme, mais un parallélogramme n\'est pas forcément un rectangle. Hiérarchie : carré ⊂ rectangle ⊂ parallélogramme et carré ⊂ losange ⊂ parallélogramme.'
    },

    quiz: [
      {
        q: 'Dans un parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ :',
        options: [
          'Se coupent à angle droit',
          'Sont égales',
          'Se coupent en leur milieu commun',
          'Ne se coupent pas'
        ],
        answer: 2,
        correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Ce n\'est qu\'en plus pour un rectangle qu\'elles sont égales, et pour un losange qu\'elles sont perpendiculaires.'
      },
      {
        q: 'Un losange a ses diagonales mesurant $6$ cm et $8$ cm. Quelle est son aire ?',
        options: ['$48$ cm²', '$24$ cm²', '$14$ cm²', '$12$ cm²'],
        answer: 1,
        correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{6 \\times 8}{2} = 24$ cm².'
      },
      {
        q: 'Un élève dit : « Si $ABCD$ est un parallélogramme et que $AB = BC$, alors c\'est forcément un carré ». Est-ce vrai ?',
        options: [
          'Oui : côtés opposés égaux + côtés adjacents égaux → tous les côtés égaux → carré.',
          'Non : si tous les côtés sont égaux, c\'est un losange, pas forcément un carré. Il faudrait aussi un angle droit.',
          'Oui, car un parallélogramme avec un côté supplémentaire égal est toujours un carré.',
          'Non, ça dépend du nombre de côtés égaux.'
        ],
        answer: 1,
        correction: 'Si dans un parallélogramme $AB = BC$, alors tous les côtés sont égaux → c\'est un <em>losange</em>. Pour que ce soit un carré, il faudrait en plus un angle droit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { shape: 'carreau de mosaïque', emoji: '🔷' },
          { shape: 'logo en forme de losange', emoji: '💎' },
          { shape: 'panneau routier losange', emoji: '🔶' },
          { shape: 'vitrail en losange', emoji: '🪟' }
        ]);
        const d1 = rand(3, 12);
        const d2 = rand(3, 12);
        const aire = (d1 * d2) / 2;
        return {
          statement: `${ctx.emoji} Un ${ctx.shape} a des diagonales mesurant $${d1}$ cm et $${d2}$ cm. Calcule son aire en cm².`,
          answer: aire,
          tolerance: 0,
          unit: 'cm²',
          hint: `Aire d'un losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{${d1} \\times ${d2}}{2}$.`,
          solution: [
            `Formule : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$`,
            `$\\mathcal{A} = \\dfrac{${d1} \\times ${d2}}{2} = \\dfrac{${d1 * d2}}{2} = ${aire}$ cm²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un carreleur pose du carrelage en forme de losange dans un couloir. Chaque losange a ses diagonales mesurant $20$ cm et $30$ cm. Le couloir a une superficie de $6$ m².',
      tasks: [
        'Calcule l\'aire d\'un carreau losange en cm².',
        'Convertis cette aire en m².',
        'Combien de carreaux faut-il pour couvrir le couloir (sans tenir compte des chutes) ?'
      ],
      solutions: [
        '$\\mathcal{A} = \\dfrac{20 \\times 30}{2} = 300$ cm².',
        '$300$ cm² $= 0{,}03$ m² (car $1$ m² $= 10\\,000$ cm²).',
        '$6 \\div 0{,}03 = 200$ carreaux.'
      ],
      finalAnswer: 'Il faut $200$ carreaux losange pour couvrir le couloir.'
    },

    evaluation: {
      title: 'Évaluation — Parallélogrammes et propriétés',
      duration: '25 min',
      questions: [
        {
          statement: 'Un losange a des diagonales de $10$ cm et $14$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{10 \\times 14}{2} = \\dfrac{140}{2} = 70$ cm².'
        },
        {
          statement: 'Un parallélogramme $ABCD$ a une base $AB = 9$ cm et une hauteur $h = 6$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 54,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = b \\times h = 9 \\times 6 = 54$ cm².'
        },
        {
          statement: 'Les diagonales d\'un parallélogramme :',
          type: 'multiple-choice',
          options: [
            'Sont toujours perpendiculaires.',
            'Sont toujours de même longueur.',
            'Se coupent toujours en leur milieu.',
            'Ne se coupent jamais.'
          ],
          answer: 2,
          points: 2,
          correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Elles ne sont perpendiculaires que pour un losange, et de même longueur que pour un rectangle.'
        },
        {
          statement: 'Parmi ces affirmations, laquelle est vraie ?',
          type: 'multiple-choice',
          options: [
            'Tout losange est un rectangle.',
            'Tout rectangle est un carré.',
            'Tout carré est un losange.',
            'Tout parallélogramme est un rectangle.'
          ],
          answer: 2,
          points: 2,
          correction: 'Un carré a $4$ côtés égaux et $4$ angles droits. Puisqu\'il a $4$ côtés égaux, c\'est un losange.'
        },
        {
          statement: 'Les diagonales d\'un rectangle $ABCD$ mesurent $AC = BD = 12$ cm. Elles se coupent en $O$. Quelle est la longueur $OA$ en cm ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Les diagonales d\'un rectangle se coupent en leur milieu $O$. Donc $OA = \\dfrac{AC}{2} = \\dfrac{12}{2} = 6$ cm.'
        }
      ]
    }
  });
