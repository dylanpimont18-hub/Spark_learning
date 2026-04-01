window.MODULES.push(
    id: '4e-droites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Droites remarquables du triangle',
    subtitle: 'Médiatrice, bissectrice, médiane, hauteur',
    keywords: ['Médiatrice', 'Bissectrice', 'Médiane', 'Hauteur', 'Cercle inscrit', 'Cercle circonscrit'],
    physics: false,
    cours: {
      intro: 'Chaque triangle possède quatre familles de droites remarquables, chacune associée à un point de concours unique.' +
        '<br/><br/>' +
        '<strong>Médiatrices</strong> → circumcentre (équidistant des 3 sommets = centre du cercle circonscrit). <strong>Bissectrices</strong> → incentre (équidistant des 3 côtés = centre du cercle inscrit). <strong>Médianes</strong> → centroïde ou isobarycentre (centre de gravité, à $\\frac{2}{3}$ de chaque sommet). <strong>Hauteurs</strong> → orthocentre (peut être extérieur au triangle si obtus).' +
        '<br/><br/>' +
        '<strong>Piège fréquent :</strong> ne pas confondre médiane (joint un sommet au milieu du côté opposé) et médiatrice (perpendiculaire à un côté en son milieu — elle ne passe pas nécessairement par un sommet).' +
        '<br/><br/>' +
        'Ces droites sont utiles en ingénierie : le centroïde est le centre de masse, le circumcentre sert à trouver le cercle passant par 3 points.',
      definitions: [
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un côté en son milieu. Lieu des points équidistants des deux extrémités de ce côté.' },
        { term: 'Bissectrice', def: 'Demi-droite issue d\'un sommet qui partage l\'angle en deux angles égaux.' },
        { term: 'Médiane', def: 'Segment (ou droite) qui joint un sommet au milieu du côté opposé.' },
        { term: 'Hauteur', def: 'Droite perpendiculaire à un côté passant par le sommet opposé. Elle peut être extérieure au triangle si celui-ci est obtus.' }
      ],
      method: {
        title: 'Les quatre droites remarquables',
        steps: [
          'Médiatrice d\'un côté : perpendiculaire à ce côté en son milieu. Les trois médiatrices se coupent au CIRCUMCENTRE (centre du cercle circonscrit). <strong>Exemple :</strong> pour $[AB]$ avec $A(0;0)$ et $B(6;0)$, le milieu est $(3;0)$ et la médiatrice est la droite $x = 3$.',
          'Bissectrice d\'un angle : partage l\'angle en deux angles égaux. Les trois bissectrices se coupent à l\'INCENTRE (centre du cercle inscrit). <strong>Exemple :</strong> la bissectrice d\'un angle de $80°$ crée deux angles de $40°$.',
          'Médiane : joint un sommet au milieu du côté opposé. Les trois médianes se coupent au CENTROÏDE (ou ISOBARYCENTRE), à $\\frac{2}{3}$ de chaque sommet. <strong>Exemple :</strong> si la médiane issue de $A$ mesure $12$ cm, alors $AG = \\frac{2}{3} \\times 12 = 8$ cm.',
          'Hauteur : perpendiculaire issue d\'un sommet sur le côté opposé. Les trois hauteurs se coupent à l\'ORTHOCENTRE. <strong>Exemple :</strong> dans un triangle rectangle, les deux hauteurs issues des angles aigus sont les deux côtés de l\'angle droit.'
        ]
      },
      example: {
        statement: 'Un triangle $ABC$ a pour sommets $A(0 ; 0)$, $B(8 ; 0)$ et $C(2 ; 6)$. Calculer les coordonnées du centroïde $G$ et la longueur $AG$ sachant que la médiane issue de $A$ va au milieu $M$ de $[BC]$.',
        steps: [
          'Milieu de $[BC]$ : $M = \\left(\\dfrac{8+2}{2} ; \\dfrac{0+6}{2}\\right) = (5 ; 3)$.',
          'Centroïde : $G = \\left(\\dfrac{0+8+2}{3} ; \\dfrac{0+0+6}{3}\\right) = \\left(\\dfrac{10}{3} ; 2\\right)$.',
          'Longueur $AM = \\sqrt{5^2 + 3^2} = \\sqrt{34} \\approx 5{,}83$ cm. Donc $AG = \\dfrac{2}{3} \\times \\sqrt{34} \\approx 3{,}89$ cm.'
        ],
        answer: 'Le centroïde est en $G\\left(\\dfrac{10}{3} ; 2\\right)$ et $AG \\approx 3{,}89$ unités.'
      },
      formulas: [
        'Médiatrice : locus des points équidistants des deux extrémités',
        'Centroïde $G$ : $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$',
        'Sur une médiane : $AG = \\frac{2}{3} AM$ (M = milieu du côté opposé)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Droite remarquable</th><th style="border:1px solid var(--border);padding:6px 14px">Définition</th><th style="border:1px solid var(--border);padding:6px 14px">Point de concours</th><th style="border:1px solid var(--border);padding:6px 14px">Cercle associé</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Médiatrice</td><td style="border:1px solid var(--border);padding:6px 14px">$\\perp$ au côté en son milieu</td><td style="border:1px solid var(--border);padding:6px 14px">Circumcentre</td><td style="border:1px solid var(--border);padding:6px 14px">Cercle circonscrit</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Bissectrice</td><td style="border:1px solid var(--border);padding:6px 14px">Partage l\'angle en 2</td><td style="border:1px solid var(--border);padding:6px 14px">Incentre</td><td style="border:1px solid var(--border);padding:6px 14px">Cercle inscrit</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Médiane</td><td style="border:1px solid var(--border);padding:6px 14px">Sommet → milieu opposé</td><td style="border:1px solid var(--border);padding:6px 14px">Centroïde ($\\frac{2}{3}$)</td><td style="border:1px solid var(--border);padding:6px 14px">—</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Hauteur</td><td style="border:1px solid var(--border);padding:6px 14px">$\\perp$ au côté par le sommet</td><td style="border:1px solid var(--border);padding:6px 14px">Orthocentre</td><td style="border:1px solid var(--border);padding:6px 14px">—</td></tr></table>',
      recap: [
        'Quatre familles de droites : médiatrices, bissectrices, médianes, hauteurs — chacune a un point de concours.',
        'Médiatrices → circumcentre (cercle circonscrit) ; bissectrices → incentre (cercle inscrit).',
        'Médianes → centroïde (centre de gravité, à $\\frac{2}{3}$ du sommet) ; hauteurs → orthocentre.',
        'Ne pas confondre médiane (passe par un sommet) et médiatrice (perpendiculaire au milieu d\'un côté).'
      ],
      piege: 'Piège : confondre médiane et médiatrice. La médiane joint un sommet au milieu du côté opposé (elle passe par un sommet). La médiatrice est perpendiculaire à un côté en son milieu (elle ne passe pas forcément par un sommet).'
    },
    quiz: [
      {
        q: 'Un élève confond médiane et médiatrice. Laquelle de ces affirmations distingue correctement les deux ?',
        options: [
          'La médiane est perpendiculaire à un côté ; la médiatrice joint un sommet au milieu du côté opposé.',
          'La médiane joint un sommet au milieu du côté opposé ; la médiatrice est perpendiculaire à un côté en son milieu.',
          'Médiane et médiatrice sont identiques dans un triangle isocèle.',
          'La médiane passe par le milieu de deux côtés ; la médiatrice passe par un sommet.'
        ],
        answer: 1,
        correction: 'La <strong>médiane</strong> joint un sommet au milieu du côté opposé → elle passe toujours par un sommet. La <strong>médiatrice</strong> est perpendiculaire à un côté en son milieu → elle passe par le milieu du côté, mais pas nécessairement par un sommet. Seul cas particulier : dans un triangle équilatéral ou isocèle, médiane, médiatrice, bissectrice et hauteur coïncident sur le même côté.'
      },
      {
        q: 'La médiatrice d\'un segment $[AB]$ est l\'ensemble des points :',
        options: ['À égale distance de $A$ et $B$', 'Sur le segment $[AB]$', 'Formant un angle de $45°$ avec $[AB]$', 'À mi-chemin entre $A$ et $B$'],
        answer: 0,
        correction: 'La médiatrice de $[AB]$ est la droite perpendiculaire à $[AB]$ en son milieu. Elle est le lieu des points équidistants de $A$ et $B$.'
      },
      {
        q: 'Le centroïde $G$ se trouve à quelle fraction de la longueur d\'une médiane depuis le sommet ?',
        options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{4}$'],
        answer: 2,
        correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. Il se trouve aux $\\frac{2}{3}$ de la médiane depuis le sommet.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'En architecture, on localise le centre de gravité d\'une pièce triangulaire.', emoji:'🏗️'},
          {intro:'En physique, on détermine le point d\'équilibre d\'une plaque triangulaire.', emoji:'⚖️'},
          {intro:'En cartographie, on cherche le centroïde d\'une zone triangulaire.', emoji:'🗺️'},
          {intro:'En robotique, on calcule la position du barycentre d\'un châssis triangulaire.', emoji:'🤖'}
        ]);
        const am = rand(6, 18);
        const ag = parseFloat((2 * am / 3).toFixed(1));
        return {
          statement: `${ctx.emoji} ${ctx.intro} La médiane issue de $A$ mesure $${am}$ cm. Le centroïde $G$ se trouve à $\\frac{2}{3}$ de $A$. Quelle est la longueur $AG$ en cm ?`,
          answer: ag,
          tolerance: 0.1,
          unit: 'cm',
          hint: `$AG = \\dfrac{2}{3} \\times AM = \\dfrac{2}{3} \\times ${am}$.`,
          solution: [`$AG = \\dfrac{2}{3} \\times ${am} = \\dfrac{${2*am}}{3} = ${ag}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un triangle $ABC$ a pour sommets $A(0;0)$, $B(6;0)$ et $C(3;6)$.',
      tasks: [
        'Calculer le milieu $M$ de $[BC]$.',
        'Vérifier que $A$, $M$ et le centroïde $G\\left(3; 2\\right)$ sont alignés.',
        'Calculer $AG$ et $GM$ pour vérifier que $AG = 2 \\times GM$.'
      ],
      solutions: [
        '$M = \\left(\\frac{6+3}{2}; \\frac{0+6}{2}\\right) = (4{,}5 ; 3)$.',
        'Vecteurs $\\vec{AM}(4{,}5;3)$ et $\\vec{AG}(3;2)$ : $\\frac{4{,}5}{3} = \\frac{3}{2} = 1{,}5$. Colinéaires ✓.',
        '$AG = \\sqrt{9+4} = \\sqrt{13}$, $GM = \\sqrt{2{,}25+1} = \\sqrt{3{,}25}$. $\\frac{\\sqrt{13}}{\\sqrt{3{,}25}} = \\sqrt{4} = 2$ ✓.'
      ],
      finalAnswer: 'Le centroïde $G(3;2)$ se trouve bien aux $\\frac{2}{3}$ de la médiane depuis $A$.'
    },

    evaluation: {
      title: 'Évaluation — Droites remarquables du triangle',
      duration: '25 min',
      questions: [
        {
          statement: 'Les trois médiatrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['L\'orthocentre', 'Le centroïde', 'Le circumcentre', 'L\'incentre'],
          answer: 2,
          points: 2,
          correction: 'Les trois médiatrices se coupent au circumcentre, qui est le centre du cercle circonscrit au triangle (équidistant des trois sommets).'
        },
        {
          statement: 'Les trois bissectrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['Le circumcentre', 'L\'orthocentre', 'Le centroïde', 'L\'incentre'],
          answer: 3,
          points: 2,
          correction: 'Les trois bissectrices se coupent à l\'incentre, qui est le centre du cercle inscrit dans le triangle (équidistant des trois côtés).'
        },
        {
          statement: 'Dans un triangle, une médiane issue de $A$ mesure $15\\,\\text{cm}$. Le centroïde $G$ se trouve à quelle distance de $A$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. $AG = \\dfrac{2}{3} \\times 15 = 10\\,\\text{cm}$.'
        },
        {
          statement: 'Quelle droite remarquable joint un sommet du triangle au milieu du côté opposé ?',
          type: 'multiple-choice',
          options: ['La médiatrice', 'La hauteur', 'La médiane', 'La bissectrice'],
          answer: 2,
          points: 2,
          correction: 'La médiane joint un sommet au milieu du côté opposé. La médiatrice, elle, est perpendiculaire à un côté en son milieu mais ne passe pas nécessairement par un sommet.'
        },
        {
          statement: 'Dans un triangle $ABC$, la médiane issue de $A$ a pour milieu le point $M$ milieu de $[BC]$. Si $B(2;0)$ et $C(8;6)$, quelles sont les coordonnées de $M$ ?',
          type: 'multiple-choice',
          options: ['$(10 ; 6)$', '$(5 ; 3)$', '$(6 ; 3)$', '$(4 ; 3)$'],
          answer: 1,
          points: 2,
          correction: '$M = \\left(\\dfrac{2+8}{2} \\;;\\; \\dfrac{0+6}{2}\\right) = (5 ; 3)$.'
        }
      ]
    }
  },

    {
);
