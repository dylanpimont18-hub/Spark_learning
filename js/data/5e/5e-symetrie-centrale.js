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
      intro: 'Imagine une photo punaisée par son centre sur un panneau : si tu la fais pivoter d\'un demi-tour ($180°$) autour de la punaise, chaque point de la photo se retrouve exactement de l\'autre côté, à la même distance du centre. C\'est exactement ce que fait la <strong>symétrie centrale</strong>.<br/><br/>' +
        'La symétrie centrale par rapport à un point $O$ fait correspondre à chaque point $A$ un point $A\'$ tel que <strong>$O$ est le milieu de $[AA\']$</strong> — autrement dit, $O$ est « entre » $A$ et $A\'$, à égale distance des deux.<br/><br/>' +
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
      diagram: {
        theme: 'maths',
        kicker: 'Symétrie centrale dans un repère',
        title: 'Construire le symétrique d\'un point par rapport à un centre',
        description: 'Le point $A(5 ; 3)$ est réfléchi par rapport au centre $O(2 ; 1)$. Le symétrique $A\'$ est tel que $O$ est le milieu de $[AA\']$ : on trouve $A\'(-1 ; -1)$.',
        svg: `
          <svg viewBox="0 0 360 290" role="img" aria-labelledby="symcentrale-title symcentrale-desc">
            <title id="symcentrale-title">Symétrique d'un point par rapport à un centre</title>
            <desc id="symcentrale-desc">Le point A en 5 ; 3 est réfléchi par rapport au centre O en 2 ; 1. Les points A, O et A' sont alignés, avec O au milieu du segment AA'. Le symétrique A' est en moins 1 ; moins 1.</desc>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="246"></line>
            <line class="grid-line" x1="122" y1="30" x2="122" y2="246"></line>
            <line class="grid-line" x1="158" y1="30" x2="158" y2="246"></line>
            <line class="grid-line" x1="194" y1="30" x2="194" y2="246"></line>
            <line class="grid-line" x1="230" y1="30" x2="230" y2="246"></line>
            <line class="grid-line" x1="266" y1="30" x2="266" y2="246"></line>
            <line class="grid-line" x1="50" y1="30" x2="266" y2="30"></line>
            <line class="grid-line" x1="50" y1="66" x2="266" y2="66"></line>
            <line class="grid-line" x1="50" y1="102" x2="266" y2="102"></line>
            <line class="grid-line" x1="50" y1="138" x2="266" y2="138"></line>
            <line class="grid-line" x1="50" y1="210" x2="266" y2="210"></line>
            <line class="grid-line" x1="50" y1="246" x2="266" y2="246"></line>
            <line class="axis" x1="86" y1="20" x2="86" y2="256"></line>
            <line class="axis" x1="40" y1="174" x2="280" y2="174"></line>
            <line class="guide-line" x1="266" y1="66" x2="50" y2="210"></line>
            <line class="frame-line" x1="208" y1="96" x2="216" y2="108"></line>
            <line class="frame-line" x1="100" y1="168" x2="108" y2="180"></line>
            <circle class="plot-point-alt" cx="266" cy="66" r="6"></circle>
            <circle class="plot-point" cx="158" cy="138" r="7"></circle>
            <circle class="plot-point" cx="50" cy="210" r="6"></circle>
            <text class="annotation-label" x="270" y="58">A(5 ; 3)</text>
            <text class="annotation-label" x="132" y="118">O(2 ; 1)</text>
            <text class="annotation-label" x="4" y="236">A'(-1 ; -1)</text>
            <text class="axis-label" x="284" y="178">x</text>
            <text class="axis-label" x="92" y="26">y</text>
            <text class="tick-label" x="40" y="260">-1</text>
            <text class="tick-label" x="82" y="260">0</text>
            <text class="tick-label" x="118" y="260">1</text>
            <text class="tick-label" x="154" y="260">2</text>
            <text class="tick-label" x="190" y="260">3</text>
            <text class="tick-label" x="226" y="260">4</text>
            <text class="tick-label" x="262" y="260">5</text>
            <text class="tick-label" x="36" y="34">4</text>
            <text class="tick-label" x="36" y="70">3</text>
            <text class="tick-label" x="36" y="106">2</text>
            <text class="tick-label" x="36" y="142">1</text>
            <text class="tick-label" x="36" y="178">0</text>
            <text class="tick-label" x="28" y="214">-1</text>
            <text class="tick-label" x="28" y="250">-2</text>
          </svg>
        `,
        notes: [
          'Les points $A$, $O$ et $A\'$ sont alignés : $A\'$ se trouve sur la droite $(AO)$, de l\'autre côté de $O$.',
          'Les deux petites marques sur $[OA]$ et $[OA\']$ indiquent des distances égales : $OA = OA\'$.',
          'Formule : $x_{A\'} = 2x_O - x_A = 2 \\times 2 - 5 = -1$ et $y_{A\'} = 2y_O - y_A = 2 \\times 1 - 3 = -1$.'
        ],
        reading: 'Le centre $O$ est le milieu de $[AA\']$ : il se trouve exactement au milieu du segment qui relie un point à son symétrique.',
        caption: 'Symétrique de $A(5 ; 3)$ par rapport au centre $O(2 ; 1)$ : on obtient $A\'(-1 ; -1)$, avec $O$ milieu de $[AA\']$.'
      },
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
