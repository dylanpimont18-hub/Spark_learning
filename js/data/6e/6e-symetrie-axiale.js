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
        'Pour construire le symétrique d\'un point $A$ par rapport à un axe $d$, on cherche $A\'$ tel que l\'axe soit la <strong>médiatrice</strong> de $[AA\']$ : l\'axe coupe $[AA\']$ en son milieu et perpendiculairement. Formule pour un axe $x = k$ : $x_{A\'} = 2k - x_A$.',
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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Axe</th><th style="border:1px solid var(--border);padding:8px">Formule abscisse</th><th style="border:1px solid var(--border);padding:8px">Formule ordonnée</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$x = 0$ (axe des ordonnées)</td><td style="border:1px solid var(--border);padding:8px">$x\' = -x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = y$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$y = 0$ (axe des abscisses)</td><td style="border:1px solid var(--border);padding:8px">$x\' = x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = -y$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$x = k$ (verticale)</td><td style="border:1px solid var(--border);padding:8px">$x\' = 2k - x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = y$</td></tr></table>',
      formulas: [
        '$H = $ milieu de $[AA\']$ (pied de la perpendiculaire)',
        '$AH = HA\'$',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      recap: [
        'La symétrie axiale conserve distances, angles et aires (c\'est une isométrie).',
        'Le symétrique de $A$ par rapport à $x = k$ a pour abscisse $x\' = 2k - x$.',
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
        if (axType === 'vertical') {
          const ax = rand(2, 8);
          const pointX = rand(ax + 1, ax + 6);
          const symX = 2 * ax - pointX;
          return {
            statement: `Le point $A$ a pour abscisse $x_A = ${pointX}$. L'axe de symétrie est $x = ${ax}$. Quelle est l'abscisse de $A'$ ?`,
            answer: symX,
            tolerance: 0,
            unit: '',
            hint: `$x_{A'} = 2k - x_A = 2 \\times ${ax} - ${pointX}$.`,
            solution: [`$x_{A'} = 2 \\times ${ax} - ${pointX} = ${symX}$`]
          };
        }
        const ay = rand(2, 8);
        const pointY = rand(ay + 1, ay + 6);
        const symY = 2 * ay - pointY;
        return {
          statement: `Le point $A$ a pour ordonnée $y_A = ${pointY}$. L'axe de symétrie est $y = ${ay}$. Quelle est l'ordonnée de $A'$ ?`,
          answer: symY,
          tolerance: 0,
          unit: '',
          hint: `$y_{A'} = 2k - y_A = 2 \\times ${ay} - ${pointY}$.`,
          solution: [`$y_{A'} = 2 \\times ${ay} - ${pointY} = ${symY}$`]
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
