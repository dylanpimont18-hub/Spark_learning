/* =========================================================
   Spark Learning – data/6e/6e-symetrie-axiale.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-symetrie-axiale',
    level: 1, subject: 'maths',
    icon: '🪞',
    title: 'Symétrie axiale',
    subtitle: 'Axe de symétrie, construction du symétrique',
    keywords: ['Symétrie', 'Axe', 'Réflexion', 'Figure symétrique', 'Milieu', 'Perpendiculaire'],
    physics: false,

    cours: {
      intro: 'Une figure est <strong>symétrique</strong> par rapport à un axe si, en la pliant le long de cet axe, les deux parties se superposent exactement.<br/><br/>' +
        'La symétrie axiale est une <strong>isométrie</strong> : elle conserve les distances, les angles et les aires. Les figures sont identiques, juste retournées.<br/><br/>' +
        'Pour construire le symétrique d\'un point $A$ par rapport à un axe $d$, on cherche $A\'$ tel que l\'axe soit la <strong>médiatrice</strong> de $[AA\']$ : l\'axe coupe $[AA\']$ en son milieu et perpendiculairement. Pour un axe vertical $x = k$ : $x_{A\'} = 2k - x_A$ (l\'ordonnée ne change pas). Pour un axe horizontal $y = k$ : $y_{A\'} = 2k - y_A$ (l\'abscisse ne change pas). Cas particuliers : par rapport à l\'axe des ordonnées ($x = 0$), $x_{A\'} = -x_A$ ; par rapport à l\'axe des abscisses ($y = 0$), $y_{A\'} = -y_A$.',
      definitions: [
        { term: 'Axe de symétrie', def: 'Droite $d$ telle que la réflexion de la figure par rapport à $d$ donne la même figure.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie axiale en est une.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire au segment $[AA\']$ passant par son milieu. L\'axe est la médiatrice de $[AA\']$.' },
        { term: 'Symétrique', def: '$A\'$ est le symétrique de $A$ si l\'axe est la médiatrice de $[AA\']$ : $AH = HA\'$ et $(AA\') \\perp d$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Tracer la perpendiculaire</strong> à l\'axe $d$ passant par le point $A$.',
          '<strong>Trouver le pied $H$</strong> (intersection avec l\'axe).',
          '<strong>Reporter la même distance</strong> de l\'autre côté : $A\'$ tel que $AH = HA\'$.',
          '<strong>Pour une figure entière</strong> : construire le symétrique de chaque sommet, puis relier.'
        ]
      },
      example: {
        statement: 'Le point $A(5 ; 2)$ est réfléchi par rapport à la droite $x = 3$. Trouver $A\'$.',
        steps: [
          'Formule : $x_{A\'} = 2k - x_A = 2 \\times 3 - 5 = 1$.',
          'L\'ordonnée ne change pas : $y_{A\'} = 2$.',
          'Donc $A\'(1 ; 2)$.',
          'Vérification : le milieu de $[AA\']$ est $(\\dfrac{5+1}{2} ; 2) = (3 ; 2)$, qui est bien sur $x = 3$ ✓'
        ],
        answer: '$A\'(1 ; 2)$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Construction du symétrique',
        title: 'Réfléchir un point par rapport à un axe',
        description: 'Le point $A(5 ; 2)$ est réfléchi par rapport à l\'axe $d$ d\'équation $x = 3$. On trace la perpendiculaire à $d$ passant par $A$, on repère son pied $H$, puis on reporte la même distance de l\'autre côté pour obtenir $A\'(1 ; 2)$.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="symaxiale-title symaxiale-desc">
            <title id="symaxiale-title">Symétrique d'un point par rapport à un axe vertical</title>
            <desc id="symaxiale-desc">Le point A en 5 ; 2 est réfléchi par rapport à l'axe d d'équation x égale 3. Le pied H est en 3 ; 2 et le symétrique A' est en 1 ; 2, à la même distance de l'axe que A.</desc>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="194"></line>
            <line class="grid-line" x1="90" y1="30" x2="90" y2="194"></line>
            <line class="grid-line" x1="130" y1="30" x2="130" y2="194"></line>
            <line class="grid-line" x1="210" y1="30" x2="210" y2="194"></line>
            <line class="grid-line" x1="250" y1="30" x2="250" y2="194"></line>
            <line class="grid-line" x1="290" y1="30" x2="290" y2="194"></line>
            <line class="grid-line" x1="50" y1="194" x2="290" y2="194"></line>
            <line class="grid-line" x1="50" y1="153" x2="290" y2="153"></line>
            <line class="grid-line" x1="50" y1="112" x2="290" y2="112"></line>
            <line class="grid-line" x1="50" y1="71" x2="290" y2="71"></line>
            <line class="grid-line" x1="50" y1="30" x2="290" y2="30"></line>
            <line class="axis" x1="170" y1="20" x2="170" y2="204"></line>
            <line class="guide-line" x1="90" y1="112" x2="250" y2="112"></line>
            <polyline class="frame-line" points="170,104 178,104 178,112" fill="none"></polyline>
            <line class="frame-line" x1="210" y1="106" x2="210" y2="118"></line>
            <line class="frame-line" x1="130" y1="106" x2="130" y2="118"></line>
            <circle class="plot-point-alt" cx="250" cy="112" r="6"></circle>
            <circle class="plot-point-alt" cx="170" cy="112" r="5"></circle>
            <circle class="plot-point" cx="90" cy="112" r="6"></circle>
            <text class="annotation-label" x="252" y="100">A(5 ; 2)</text>
            <text class="annotation-label" x="94" y="96">H(3 ; 2)</text>
            <text class="annotation-label" x="56" y="132">A'(1 ; 2)</text>
            <text class="axis-label" x="176" y="18">d</text>
            <text class="tick-label" x="46" y="206">0</text>
            <text class="tick-label" x="86" y="206">1</text>
            <text class="tick-label" x="126" y="206">2</text>
            <text class="tick-label" x="166" y="206">3</text>
            <text class="tick-label" x="206" y="206">4</text>
            <text class="tick-label" x="246" y="206">5</text>
            <text class="tick-label" x="286" y="206">6</text>
            <text class="tick-label" x="36" y="198">0</text>
            <text class="tick-label" x="36" y="157">1</text>
            <text class="tick-label" x="36" y="116">2</text>
            <text class="tick-label" x="36" y="75">3</text>
            <text class="tick-label" x="36" y="34">4</text>
          </svg>
        `,
        notes: [
          'On trace la perpendiculaire à l\'axe $d$ passant par $A$ : ici elle est horizontale, donc perpendiculaire à l\'axe vertical $d$.',
          'Le pied $H(3 ; 2)$ est le point où cette perpendiculaire coupe $d$ — l\'angle marqué en $H$ est droit.',
          'On reporte la même distance de l\'autre côté de $H$ : $AH = HA\' = 2$, donc $A\'(1 ; 2)$.'
        ],
        reading: 'L\'axe $d$ est la médiatrice de $[AA\']$ : il coupe le segment $[AA\']$ perpendiculairement, exactement en son milieu $H$.',
        caption: 'Construction du symétrique de $A(5 ; 2)$ par rapport à l\'axe $d : x = 3$ — pied $H(3 ; 2)$ et symétrique $A\'(1 ; 2)$.'
      },
      formulas: [
        '$H = $ milieu de $[AA\']$ (pied de la perpendiculaire)',
        '$AH = HA\'$',
        'Axe vertical $x = k$ : $x_{A\'} = 2k - x_A$, $y_{A\'} = y_A$',
        'Axe horizontal $y = k$ : $y_{A\'} = 2k - y_A$, $x_{A\'} = x_A$',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      recap: [
        'La symétrie axiale conserve distances, angles et aires (c\'est une isométrie).',
        'Le symétrique de $A$ par rapport à $x = k$ (axe vertical) a pour abscisse $x\' = 2k - x$ ; par rapport à $y = k$ (axe horizontal), pour ordonnée $y\' = 2k - y$.',
        'Cas particuliers : axe des ordonnées ($x=0$) → $x\' = -x$ ; axe des abscisses ($y=0$) → $y\' = -y$.',
        'Un point situé sur l\'axe est son propre symétrique.',
        'Un triangle équilatéral a $3$ axes, un carré en a $4$, un cercle en a une infinité.'
      ],
      piege: 'Piège : l\'axe de symétrie n\'est pas forcément vertical ou horizontal. Toujours tracer la perpendiculaire depuis le point jusqu\'à l\'axe, puis reporter la même distance de l\'autre côté.'
    },

    quiz: [
      { q: 'Le point $A(5 ; 2)$ est réfléchi par rapport à $x = 3$. Un élève trouve $A\'(-5 ; 2)$. Quelle est son erreur ?', options: ['Correct.', 'Il a confondu avec $x = 0$ : il faut $x\' = 2 \\times 3 - 5 = 1$, donc $A\'(1 ; 2)$.', 'Il faut changer $y$.', 'Pas d\'erreur car $-5$ est le symétrique de $5$.'], answer: 1, correction: '$x\' = 2 \\times 3 - 5 = 1$. $A\'(1 ; 2)$.' },
      { q: 'Le point $A(3 ; 1)$ est réfléchi par rapport à l\'axe des ordonnées. Coordonnées de $A\'$ ?', options: ['$(3 ; -1)$', '$(-3 ; 1)$', '$(-3 ; -1)$', '$(1 ; 3)$'], answer: 1, correction: 'Axe $x = 0$ : $x\' = -x = -3$, $y\' = y = 1$.' },
      { q: 'Un triangle équilatéral possède combien d\'axes de symétrie ?', options: ['$1$', '$2$', '$3$', '$6$'], answer: 2, correction: '$3$ axes, chacun passant par un sommet et le milieu du côté opposé.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const axType = pick(['vertical', 'horizontal']);
        const varSym = axType === 'vertical' ? 'x' : 'y';
        const coord = axType === 'vertical' ? 'abscisse' : 'ordonnée';
        const k = rand(2, 8);
        const pointVal = rand(k + 1, k + 6);
        const symVal = 2 * k - pointVal;
        const axisEq = `${varSym} = ${k}`;

        const ctx = pick([
          { build: () => `Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$. L'axe de symétrie est $${axisEq}$.<br/>Quelle est l'${coord} de $A'$, le <strong>symétrique</strong> de $A$ ?` },
          { build: () => `En pliant une feuille le long de la droite $${axisEq}$, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) se superpose exactement à son symétrique $A'$.<br/>Quelle est l'${coord} de $A'$ ?` },
          { build: () => `Le reflet d'un point $A$ dans un miroir plan d'axe $${axisEq}$ donne un point $A'$. Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du reflet $A'$ ?` },
          { build: () => `Un carreleur pose un motif <strong>symétrique</strong> par rapport à la ligne $${axisEq}$. Un point $A$ du motif a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du point symétrique $A'$ qu'il doit tracer ?` },
          { build: () => `Sur un logo, un point $A$ (${coord} $${varSym}_A = ${pointVal}$) doit être reproduit par symétrie par rapport à l'axe $${axisEq}$ pour obtenir $A'$.<br/>Quelle est l'${coord} de $A'$ ?` },
          { build: () => `Le reflet d'un point $A$ à la surface d'un lac (axe $${axisEq}$) donne un point $A'$ sous l'eau. Le point $A$ a pour ${coord} $${varSym}_A = ${pointVal}$.<br/>Quelle est l'${coord} du reflet $A'$ ?` }
        ]);

        return {
          statement: ctx.build(),
          answer: symVal,
          tolerance: 0,
          unit: '',
          hint: `$${varSym}_{A'} = 2k - ${varSym}_A = 2 \\times ${k} - ${pointVal}$.`,
          solution: [`$${varSym}_{A'} = 2 \\times ${k} - ${pointVal} = ${symVal}$`]
        };
      }
    },

    probleme: {
      context: 'Un designer crée un logo symétrique. La moitié gauche est un triangle de sommets $A(0 ; 0)$, $B(0 ; 4)$ et $C(3 ; 2)$. Il veut tracer la partie droite par symétrie d\'axe $x = 3$.',
      tasks: [
        'Calculer les coordonnées de $A\'$, symétrique de $A$ par rapport à $x = 3$.',
        'Calculer les coordonnées de $B\'$ et $C\'$.',
        'Expliquer pourquoi $C\' = C$.'
      ],
      solutions: [
        '$x_{A\'} = 2 \\times 3 - 0 = 6$, $y_{A\'} = 0$. Donc $A\'(6 ; 0)$.',
        '$B\'(6 ; 4)$ et $C\'(3 ; 2)$.',
        '$C$ a pour abscisse $3$, qui est l\'axe. Un point sur l\'axe est son propre symétrique.'
      ],
      finalAnswer: 'Le logo a les sommets $A(0;0)$, $B(0;4)$, $C(3;2)$, $B\'(6;4)$, $A\'(6;0)$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie axiale',
      duration: '20 min',
      questions: [
        { statement: 'Le point $A(7 ; 3)$ est réfléchi par rapport à $x = 0$. Abscisse de $A\'$ ?', type: 'numeric', answer: -7, tolerance: 0, unit: '', points: 2, correction: '$x\' = -7$.' },
        { statement: 'Le point $B(2 ; 5)$ est réfléchi par rapport à $x = 4$. Abscisse de $B\'$ ?', type: 'numeric', answer: 6, tolerance: 0, unit: '', points: 2, correction: '$x\' = 2 \\times 4 - 2 = 6$.' },
        { statement: 'Combien d\'axes de symétrie possède un carré ?', type: 'multiple-choice', options: ['$1$', '$2$', '$4$', '$8$'], answer: 2, points: 2, correction: '$4$ axes : $2$ médianes + $2$ diagonales.' },
        { statement: 'La symétrie axiale conserve-t-elle les distances ?', type: 'multiple-choice', options: ['Non, doublées.', 'Oui, c\'est une isométrie.', 'Non, seuls les angles.', 'Oui, mais que les parallèles.'], answer: 1, points: 2, correction: 'Isométrie : distances, angles et aires conservés.' },
        { statement: 'Un point $P$ est situé sur l\'axe $d$. Quel est son symétrique ?', type: 'multiple-choice', options: ['Le point au double.', 'Le point opposé.', 'Le point $P$ lui-même.', 'Pas de symétrique.'], answer: 2, points: 2, correction: 'Distance à l\'axe $= 0$, donc $P\' = P$.' }
      ]
    }
  });
