/* =========================================================
   Spark Learning – data/5e/5e-symetrie-centrale.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-symetrie-centrale',
    level: 1, subject: 'maths',
    icon: '🔄',
    title: 'Symétrie centrale',
    subtitle: 'Centre de symétrie, construction du symétrique',
    keywords: ['Symétrie centrale', 'Centre', 'Rotation 180°', 'Milieu', 'Point symétrique'],
    physics: false,

    cours: {
      intro: 'La symétrie centrale par rapport à un point $O$ fait correspondre à chaque point $A$ un point $A\'$ tel que <strong>$O$ est le milieu de $[AA\']$</strong> — autrement dit, $O$ est « entre » $A$ et $A\'$, à égale distance des deux.<br/><br/>' +
        'C\'est équivalent à une <strong>rotation de $180°$</strong> autour de $O$. Visuellement, tout « tourne d\'un demi-tour ».<br/><br/>' +
        '<strong>Différence avec la symétrie axiale :</strong> la symétrie axiale utilise un axe (droite), la symétrie centrale utilise un point. Une figure peut avoir un centre de symétrie sans avoir d\'axe de symétrie (ex : le parallélogramme non rectangle).<br/><br/>' +
        'En coordonnées, la formule est simple : $A\'(2x_O - x_A \\;; 2y_O - y_A)$. La symétrie centrale conserve les distances et les angles, mais <strong>inverse l\'orientation</strong>.',
      definitions: [
        { term: 'Symétrie centrale', def: 'Transformation qui associe à chaque point $A$ un point $A\'$ tel que le centre $O$ est le milieu de $[AA\']$.' },
        { term: 'Centre de symétrie', def: 'Point $O$ par rapport auquel la symétrie est définie. Il est le milieu de chaque paire de points symétriques.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie centrale est une isométrie (indirecte car elle inverse l\'orientation).' },
        { term: 'Milieu d\'un segment', def: 'Point $M$ tel que $M = \\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$. Partage le segment en deux parties égales.' }
      ],
      example: {
        statement: 'Trouver le symétrique de $A(5 ; 3)$ par rapport à $O(2 ; 1)$.',
        steps: [
          '$x_{A\'} = 2 \\times 2 - 5 = 4 - 5 = -1$.',
          '$y_{A\'} = 2 \\times 1 - 3 = 2 - 3 = -1$.',
          'Vérification : milieu de $[AA\'] = \\left(\\dfrac{5+(-1)}{2} ; \\dfrac{3+(-1)}{2}\\right) = (2 ; 1) = O$ ✓.'
        ],
        answer: '$A\'(-1 ; -1)$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Propriété</th><th style="border:1px solid var(--border);padding:6px 14px">Symétrie axiale</th><th style="border:1px solid var(--border);padding:6px 14px">Symétrie centrale</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Élément</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Axe (droite)</td><td style="border:1px solid var(--border);padding:6px 14px">Centre (point)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Équivalence</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Pliage / miroir</td><td style="border:1px solid var(--border);padding:6px 14px">Rotation $180°$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Distances</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Conservées ✓</td><td style="border:1px solid var(--border);padding:6px 14px">Conservées ✓</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Orientation</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Inversée</td><td style="border:1px solid var(--border);padding:6px 14px">Inversée</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Symétrique d\'un point</strong> : tracer la droite $(OA)$ passant par $A$ et le centre $O$.',
          '<strong>Reporter la distance</strong> $OA$ de l\'autre côté de $O$ : $OA\' = OA$, et $O$ est entre $A$ et $A\'$.',
          '<strong>Pour une figure</strong> : construire le symétrique de chaque sommet, puis relier dans le même ordre.'
        ]
      },
      formulas: [
        '$O = $ milieu de $[AA\']$, donc $\\vec{OA\'} = -\\vec{OA}$',
        'En coordonnées : si $O(x_O ; y_O)$ et $A(x_A ; y_A)$, alors $A\'(2x_O - x_A ; 2y_O - y_A)$',
        'La symétrie centrale conserve : distances, angles, aires (isométrie indirecte).'
      ],
      recap: [
        'Le centre $O$ est le milieu de chaque paire de points symétriques.',
        'Formule : $A\'(2x_O - x_A ; 2y_O - y_A)$.',
        'Symétrie centrale = rotation de $180°$.',
        'Ne pas confondre avec la symétrie axiale (axe vs point).'
      ],
      piege: 'Piège : ne pas confondre symétrie axiale et symétrie centrale. La symétrie axiale utilise un axe (droite) ; la symétrie centrale utilise un point. La symétrie centrale revient à une rotation de $180°$.'
    },

    quiz: [
      {
        q: 'Le symétrique du point $A(3 ; 5)$ par rapport au point $O(1 ; 2)$ a pour coordonnées :',
        options: ['$(-1 ; -1)$', '$(2 ; 3)$', '$(-3 ; -5)$', '$(4 ; 7)$'],
        answer: 0,
        correction: '$A\'(2 \\times 1 - 3 ; 2 \\times 2 - 5) = (2 - 3 ; 4 - 5) = (-1 ; -1)$. Vérification : milieu de $[A\\ A\']$ : $\\left(\\frac{3-1}{2}; \\frac{5-1}{2}\\right) = (1; 2) = O$ ✓.'
      },
      {
        q: 'Un parallélogramme (non rectangle) possède-t-il un axe de symétrie ? Un centre de symétrie ?',
        options: [
          'Oui à un axe, non à un centre.',
          'Non à un axe, oui à un centre (intersection des diagonales).',
          'Oui aux deux.',
          'Non aux deux.'
        ],
        answer: 1,
        correction: 'Le parallélogramme général n\'a pas d\'axe de symétrie. En revanche, il a un centre de symétrie : le point d\'intersection de ses diagonales.'
      },
      {
        q: 'Un rectangle admet-il un centre de symétrie ?',
        options: ['Non, jamais', 'Oui, c\'est le milieu des diagonales', 'Oui, c\'est n\'importe quel sommet', 'Seulement s\'il est un carré'],
        answer: 1,
        correction: 'Le rectangle admet bien un centre de symétrie : le point d\'intersection de ses diagonales (leur milieu commun).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const coordType = pick([
          { ask: 'abscisse', coord: 'x' },
          { ask: 'ordonnée', coord: 'y' }
        ]);
        const ox = rand(0, 5);
        const oy = rand(0, 5);
        const ax = rand(-3, 8);
        const ay = rand(-3, 8);
        const symX = 2 * ox - ax;
        const symY = 2 * oy - ay;
        const answer = coordType.coord === 'x' ? symX : symY;

        const ctx = pick([
          {
            intro: `Sur un plan de ville, un monument $A$ se trouve aux coordonnées $(${ax} ; ${ay})$ et la place centrale $O$ est en $(${ox} ; ${oy})$.<br/>On veut construire un monument symétrique $A'$ par rapport à la place $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du monument $A'$ ?`
          },
          {
            intro: `Dans un jeu vidéo, un personnage $A$ est en $(${ax} ; ${ay})$ et un portail magique $O$ se situe en $(${ox} ; ${oy})$.<br/>Le portail téléporte le personnage vers son <strong>symétrique</strong> par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position d'arrivée $A'$ ?`
          },
          {
            intro: `Sur une carte au trésor, un repère $A$ est placé en $(${ax} ; ${ay})$. Le centre de la carte est le point $O(${ox} ; ${oy})$.<br/>L'indice dit : « le trésor est le symétrique de $A$ par rapport à $O$ ».`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du trésor $A'$ ?`
          },
          {
            intro: `En astronomie simplifiée, une planète $A$ orbite en $(${ax} ; ${ay})$ autour d'une étoile $O$ en $(${ox} ; ${oy})$.<br/>Le point diamétralement opposé de l'orbite est le symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de ce point opposé $A'$ ?`
          },
          {
            intro: `Sur un terrain de sport quadrillé, un joueur $A$ est en $(${ax} ; ${ay})$ et le centre du terrain $O$ est en $(${ox} ; ${oy})$.<br/>Son coéquipier $A'$ se place au point symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position de $A'$ ?`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>${ctx.question}`,
          answer,
          tolerance: 0,
          unit: '',
          hint: coordType.coord === 'x'
            ? `Formule : $x_{A'} = 2 \\times x_O - x_A = 2 \\times ${ox} - ${ax}$.`
            : `Formule : $y_{A'} = 2 \\times y_O - y_A = 2 \\times ${oy} - ${ay}$.`,
          solution: [
            `$x_{A'} = 2 \\times ${ox} - ${ax} = ${2 * ox} - ${ax} = ${symX}$`,
            `$y_{A'} = 2 \\times ${oy} - ${ay} = ${2 * oy} - ${ay} = ${symY}$`,
            `Le symétrique est $A'(${symX} ; ${symY})$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Sur une carte routière, une ville $A$ est à la position $(2 ; 5)$ et une ville $B$ est à $(8 ; 3)$ (en cm sur la carte). La gare $G$ est le milieu de $[AB]$.',
      tasks: [
        'Calculer les coordonnées de $G$ (milieu de $[AB]$).',
        'Trouver les coordonnées de $A\'$, symétrique de $A$ par rapport à $G$.',
        'Vérifier que $A\'$ coïncide avec $B$.'
      ],
      solutions: [
        '$G = \\left(\\dfrac{2+8}{2} ; \\dfrac{5+3}{2}\\right) = (5 ; 4)$.',
        '$A\'\\left(2 \\times 5 - 2 ; 2 \\times 4 - 5\\right) = (8 ; 3)$.',
        '$A\'(8 ; 3) = B(8 ; 3)$ ✓. Normal : $G$ est le milieu de $[AB]$, donc $B$ est le symétrique de $A$ par rapport à $G$.'
      ],
      finalAnswer: 'La gare est en $G(5 ; 4)$, et $B$ est bien le symétrique de $A$ par rapport à $G$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie centrale',
      duration: '20 min',
      questions: [
        {
          statement: 'Le symétrique du point $A(5 ; 3)$ par rapport au point $O(2 ; 1)$ a pour abscisse :',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_{A\'} = 2 \\times x_O - x_A = 2 \\times 2 - 5 = 4 - 5 = -1$.'
        },
        {
          statement: 'Le symétrique du point $B(1 ; -4)$ par rapport au point $O(3 ; 2)$ a pour ordonnée :',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y_{B\'} = 2 \\times y_O - y_B = 2 \\times 2 - (-4) = 4 + 4 = 8$.'
        },
        {
          statement: 'Si $O$ est le centre de symétrie d\'une figure et $A$ est un point de cette figure, alors :',
          type: 'multiple-choice',
          options: [
            '$O$ est sur le segment $[AA\']$ mais pas forcément au milieu.',
            '$O$ est le milieu du segment $[AA\']$.',
            '$A$ et $A\'$ sont à la même distance de l\'axe de symétrie.',
            '$A\'$ est le point le plus éloigné de $A$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Par définition de la symétrie centrale, $O$ est le milieu de $[AA\']$.'
        },
        {
          statement: 'Le milieu du segment $[AB]$ avec $A(-2 ; 6)$ et $B(4 ; -2)$ a pour abscisse :',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{-2 + 4}{2} = \\dfrac{2}{2} = 1$.'
        },
        {
          statement: 'Un parallélogramme possède-t-il un centre de symétrie ?',
          type: 'multiple-choice',
          options: [
            'Non, jamais.',
            'Oui, c\'est l\'intersection de ses diagonales.',
            'Seulement s\'il est un rectangle.',
            'Seulement s\'il est un carré.'
          ],
          answer: 1,
          points: 2,
          correction: 'Tout parallélogramme possède un centre de symétrie : c\'est le point d\'intersection de ses diagonales.'
        }
      ]
    }
  });
