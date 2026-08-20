window.MODULES.push(
    {
    id: '4e-droites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Droites remarquables du triangle',
    subtitle: 'Médiatrice, bissectrice, médiane, hauteur',
    keywords: ['Médiatrice', 'Bissectrice', 'Médiane', 'Hauteur', 'Cercle inscrit', 'Cercle circonscrit'],
    physics: false,
    cours: {
      intro: 'Un archéologue retrouve trois éclats du bord d\'une assiette circulaire cassée : comment retrouver le centre exact de l\'assiette sans le reste de l\'objet ? En traçant certaines droites bien choisies à partir des trois points, on peut reconstruire le centre — c\'est le genre de problème que résolvent les droites remarquables du triangle.<br/><br/>' +
        'Chaque triangle possède quatre familles de droites remarquables, chacune associée à un point de concours unique.' +
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
           '<strong>Médiatrice</strong> d\'un côté : perpendiculaire à ce côté en son milieu. Les trois médiatrices se coupent au CIRCUMCENTRE (centre du cercle circonscrit). <strong>Exemple :</strong> pour $[AB]$ avec $A(0;0)$ et $B(6;0)$, le milieu est $(3;0)$ et la médiatrice est la droite $x = 3$.',
           '<strong>Bissectrice</strong> d\'un angle : partage l\'angle en deux angles égaux. Les trois bissectrices se coupent à l\'INCENTRE (centre du cercle inscrit). <strong>Exemple :</strong> la bissectrice d\'un angle de $80°$ crée deux angles de $40°$.',
          '<strong>Médiane</strong> : joint un sommet au milieu du côté opposé. Les trois médianes se coupent au CENTROÏDE (ou ISOBARYCENTRE), à $\\frac{2}{3}$ de chaque sommet. <strong>Exemple :</strong> si la médiane issue de $A$ mesure $12$ cm, alors $AG = \\frac{2}{3} \\times 12 = 8$ cm.',
          '<strong>Hauteur</strong> : perpendiculaire issue d\'un sommet sur le côté opposé. Les trois hauteurs se coupent à l\'ORTHOCENTRE. <strong>Exemple :</strong> dans un triangle rectangle, les deux hauteurs issues des angles aigus sont les deux côtés de l\'angle droit.'
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
      diagram: {
        theme: 'maths',
        kicker: 'Triangle et droites remarquables',
        title: 'Quatre familles de droites, quatre points de concours',
        description: 'Sur le triangle $ABC$ de l\'exemple ($A(0;0)$, $B(8;0)$, $C(2;6)$) : les médianes se coupent au centre de gravité $G$, les médiatrices au centre du cercle circonscrit $O$, les hauteurs à l\'orthocentre $H$, et les bissectrices au centre du cercle inscrit $I$.',
        svg: `
          <!-- QUATRE VIGNETTES, une par famille, plutot qu'une seule figure.
               La version precedente superposait 12 droites dans un triangle de
               10 cm, distinguees par des nuances de gris et une legende : sur le
               papier, plus rien n'etait suivable (audit du 2026-08-16). Chaque
               panneau montre le MEME triangle A(0;0) B(8;0) C(2;6) a la meme
               echelle (13 px par unite) : c'est la comparaison entre panneaux
               qui fait voir que les quatre points de concours sont distincts.
               Les sommets ne sont nommes que sur le premier panneau. -->
          <svg viewBox="0 0 500 344" role="img" aria-labelledby="droites-rem-title droites-rem-desc">
            <title id="droites-rem-title">Les quatre droites remarquables du triangle, une par vignette</title>
            <desc id="droites-rem-desc">Quatre vignettes du meme triangle A(0;0) B(8;0) C(2;6) : les medianes et leur point de concours G, les mediatrices et O, les hauteurs et H, les bissectrices et I. Les quatre points sont a des positions differentes a l'interieur du triangle.</desc>

            <!-- 1. Medianes -> G(10/3 ; 2) -->
            <text class="axis-label" x="40" y="24">1. Médianes → G</text>
            <polygon points="40,150 144,150 66,72" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="40" y1="150" x2="144" y2="150"></line>
            <line class="frame-line" x1="144" y1="150" x2="66" y2="72"></line>
            <line class="frame-line" x1="66" y1="72" x2="40" y2="150"></line>
            <line class="curve-main" x1="40" y1="150" x2="105" y2="111"></line>
            <line class="curve-main" x1="144" y1="150" x2="53" y2="111"></line>
            <line class="curve-main" x1="66" y1="72" x2="92" y2="150"></line>
            <circle class="plot-point-alt" cx="40" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="144" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="66" cy="72" r="4"></circle>
            <text class="tick-label" x="26" y="166">A</text>
            <text class="tick-label" x="148" y="166">B</text>
            <text class="tick-label" x="72" y="66">C</text>
            <circle class="plot-point" cx="83" cy="124" r="5"></circle>
            <text class="annotation-label" x="90" y="132">G</text>
            <text class="tick-label" x="40" y="180">centre de gravité</text>

            <!-- 2. Mediatrices -> O(4 ; 2) -->
            <text class="axis-label" x="290" y="24">2. Médiatrices → O</text>
            <polygon points="290,150 394,150 316,72" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="290" y1="150" x2="394" y2="150"></line>
            <line class="frame-line" x1="394" y1="150" x2="316" y2="72"></line>
            <line class="frame-line" x1="316" y1="72" x2="290" y2="150"></line>
            <line class="curve-main" x1="342" y1="162" x2="342" y2="108"></line>
            <line class="curve-main" x1="291" y1="107" x2="358" y2="129"></line>
            <line class="curve-main" x1="365" y1="101" x2="326" y2="140"></line>
            <circle class="plot-point-alt" cx="290" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="394" cy="150" r="4"></circle>
            <circle class="plot-point-alt" cx="316" cy="72" r="4"></circle>
            <circle class="plot-point" cx="342" cy="124" r="5"></circle>
            <text class="annotation-label" x="350" y="140">O</text>
            <text class="tick-label" x="290" y="180">centre du cercle circonscrit</text>

            <!-- 3. Hauteurs -> H(2 ; 2) -->
            <text class="axis-label" x="40" y="204">3. Hauteurs → H</text>
            <polygon points="40,310 144,310 66,232" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="40" y1="310" x2="144" y2="310"></line>
            <line class="frame-line" x1="144" y1="310" x2="66" y2="232"></line>
            <line class="frame-line" x1="66" y1="232" x2="40" y2="310"></line>
            <line class="curve-main" x1="66" y1="232" x2="66" y2="310"></line>
            <line class="curve-main" x1="40" y1="310" x2="92" y2="258"></line>
            <line class="curve-main" x1="144" y1="310" x2="50" y2="279"></line>
            <circle class="plot-point-alt" cx="40" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="144" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="66" cy="232" r="4"></circle>
            <circle class="plot-point" cx="66" cy="284" r="5"></circle>
            <text class="annotation-label" x="73" y="292">H</text>
            <text class="tick-label" x="40" y="340">orthocentre</text>

            <!-- 4. Bissectrices -> I(2,92 ; 2,10) -->
            <text class="axis-label" x="290" y="204">4. Bissectrices → I</text>
            <polygon points="290,310 394,310 316,232" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="290" y1="310" x2="394" y2="310"></line>
            <line class="frame-line" x1="394" y1="310" x2="316" y2="232"></line>
            <line class="frame-line" x1="316" y1="232" x2="290" y2="310"></line>
            <line class="curve-main" x1="290" y1="310" x2="350" y2="266"></line>
            <line class="curve-main" x1="394" y1="310" x2="303" y2="272"></line>
            <line class="curve-main" x1="316" y1="232" x2="334" y2="310"></line>
            <circle class="plot-point-alt" cx="290" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="394" cy="310" r="4"></circle>
            <circle class="plot-point-alt" cx="316" cy="232" r="4"></circle>
            <circle class="plot-point" cx="328" cy="283" r="5"></circle>
            <text class="annotation-label" x="335" y="291">I</text>
            <text class="tick-label" x="290" y="340">centre du cercle inscrit</text>
          </svg>
        `,
        notes: [
          'Médianes (trait plein épais) : chaque sommet relié au milieu du côté opposé. Les trois se coupent au centre de gravité G, aux 2/3 de chaque sommet.',
          'Médiatrices (tirets longs) : perpendiculaires à chaque côté en son milieu, elles ne passent pas forcément par un sommet. Elles se coupent au centre du cercle circonscrit O, équidistant de A, B et C.',
          'Hauteurs (trait plein coloré) : perpendiculaires issues de chaque sommet sur le côté opposé. Elles se coupent à l\'orthocentre H.',
          'Bissectrices (tirets courts) : partagent chaque angle en deux. Elles se coupent au centre du cercle inscrit I, équidistant des trois côtés.'
        ],
        reading: 'Les quatre vignettes montrent le même triangle à la même échelle : seule change la famille de droites tracée. Compare la position du point noir d\'une vignette à l\'autre — les quatre points de concours ne sont pas au même endroit.',
        caption: 'Le même triangle $ABC$ vu quatre fois : médianes (→ $G$), médiatrices (→ $O$), hauteurs (→ $H$), bissectrices (→ $I$). Ce triangle étant acutangle, les quatre points restent à l\'intérieur du triangle.'
      },
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
          solution: [`$AG = \\dfrac{2}{3} \\times ${am} = \\dfrac{${2*am}}{3} = ${fr(ag)}$ cm.`]
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
  }
);
