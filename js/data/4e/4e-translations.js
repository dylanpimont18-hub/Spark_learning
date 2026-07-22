window.MODULES.push(
    {
    id: '4e-translations',
    level: 1, subject: 'maths',
    icon: '➡️',
    title: 'Translations et rotations',
    subtitle: 'Image d\'un point, vecteur de translation',
    keywords: ['Translation', 'Rotation', 'Vecteur', 'Image', 'Isométrie'],
    physics: false,
    cours: {
      intro: 'Une translation déplace tous les points du plan du <strong>même vecteur</strong> $\\vec{v}$ — même direction, même sens, même longueur. Ce n\'est pas une rotation ni une symétrie : l\'orientation reste identique, les figures ne sont pas retournées.' +
        '<br/><br/>' +
        'Une rotation de centre $O$ et d\'angle $\\theta$ tourne chaque point autour de $O$, en conservant la distance $OA$. Ces deux transformations sont des <strong>isométries directes</strong> : elles conservent distances, angles, aires, et l\'orientation (sens des sommets).' +
        '<br/><br/>' +
        'La translation et la rotation sont omniprésentes en physique : déplacement d\'un solide en translation pure (toutes les parties ont la même vitesse), rotation d\'une roue, mouvement orbital.' +
        '<br/><br/>' +
        'Composition de deux translations = une translation (les vecteurs s\'additionnent). C\'est un outil puissant pour enchaîner des déplacements.',
      definitions: [
        { term: 'Translation', def: 'Transformation qui déplace chaque point du plan d\'un même vecteur $\\vec{v}$. La figure glisse sans tourner ni se déformer.' },
        { term: 'Vecteur de translation', def: 'Caractérisé par sa direction, son sens et sa longueur (norme). Noté $\\vec{v}(a ; b)$ en coordonnées.' },
        { term: 'Rotation', def: 'Transformation qui fait tourner chaque point autour d\'un centre $O$ d\'un angle $\\theta$, en conservant la distance au centre.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La translation et la rotation sont des isométries directes (elles conservent aussi l\'orientation).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Translation</strong> de vecteur $\\vec{v}(a ; b)$ : image de $A(x ; y)$ → $A\'(x + a ; y + b)$. <strong>Exemple :</strong> $A(3 ; 1)$ et $\\vec{v}(2 ; -4)$ → $A\'(3+2 ; 1+(-4)) = A\'(5 ; -3)$.',
          '<strong>Rotation</strong> de centre $O$ et d\'angle $\\theta$ : l\'image $A\'$ est telle que $OA\' = OA$ et l\'angle $\\widehat{AOA\'} = \\theta$. <strong>Exemple :</strong> rotation de $180°$ autour de l\'origine : $A(2 ; 3)$ → $A\'(-2 ; -3)$.',
          '<strong>Propriété d\'isométrie</strong> : les deux transformations conservent longueurs, angles et aires (isométries directes). <strong>Exemple :</strong> un carré de côté $5$ cm translaté reste un carré de côté $5$ cm.'
        ]
      },
      example: {
        statement: 'Sur un plan quadrillé, un bateau $B$ est en $(1 ; 3)$. Le courant le déplace selon le vecteur $\\vec{v}(4 ; -2)$. Où se trouve le bateau après ce déplacement ?',
        steps: [
          'On applique la formule de la translation : $B\'(x_B + a \\,;\\, y_B + b)$.',
          '$B\'(1 + 4 \\,;\\, 3 + (-2)) = B\'(5 \\,;\\, 1)$.',
          'Vérification : la distance parcourue est $\\|\\vec{v}\\| = \\sqrt{4^2 + (-2)^2} = \\sqrt{20} \\approx 4{,}5$ unités.'
        ],
        answer: 'Le bateau arrive en $B\'(5 ; 1)$, ayant parcouru environ $4{,}5$ unités.'
      },
      formulas: [
        'Translation $\\vec{v}(a;b)$ : $A(x;y) \\to A\'(x+a\\,;\\,y+b)$',
        'Rotation de $180°$ autour de $O$ : $A(x;y) \\to A\'(2x_O - x\\,;\\,2y_O - y)$',
        '$|OA\'| = |OA|$ (rotation conserve les distances)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Translation dans le plan',
        title: 'Construire l\'image d\'un point par une translation de vecteur $\\vec{v}(a\\,;\\,b)$',
        description: 'Reprise de l\'exemple du cours : $A(3\\,;\\,1)$ et $\\vec{v}(2\\,;\\,-4)$ donnent $A\'(3+2\\,;\\,1+(-4)) = A\'(5\\,;\\,-3)$.',
        svg: `
          <svg viewBox="0 0 360 300" role="img" aria-labelledby="translation-graph-title translation-graph-desc">
            <title id="translation-graph-title">Translation du point A par le vecteur v</title>
            <desc id="translation-graph-desc">Repere avec le point A en 3 ; 1 et son image A prime en 5 ; -3 par la translation de vecteur v de coordonnees 2 ; -4, avec la fleche du vecteur tracee entre les deux points.</desc>

            <line class="grid-line" x1="50" y1="20" x2="50" y2="272"></line>
            <line class="grid-line" x1="86" y1="20" x2="86" y2="272"></line>
            <line class="grid-line" x1="122" y1="20" x2="122" y2="272"></line>
            <line class="grid-line" x1="158" y1="20" x2="158" y2="272"></line>
            <line class="grid-line" x1="194" y1="20" x2="194" y2="272"></line>
            <line class="grid-line" x1="230" y1="20" x2="230" y2="272"></line>
            <line class="grid-line" x1="266" y1="20" x2="266" y2="272"></line>
            <line class="grid-line" x1="302" y1="20" x2="302" y2="272"></line>
            <line class="grid-line" x1="50" y1="272" x2="302" y2="272"></line>
            <line class="grid-line" x1="50" y1="236" x2="302" y2="236"></line>
            <line class="grid-line" x1="50" y1="200" x2="302" y2="200"></line>
            <line class="grid-line" x1="50" y1="164" x2="302" y2="164"></line>
            <line class="grid-line" x1="50" y1="128" x2="302" y2="128"></line>
            <line class="grid-line" x1="50" y1="92" x2="302" y2="92"></line>
            <line class="grid-line" x1="50" y1="56" x2="302" y2="56"></line>
            <line class="grid-line" x1="50" y1="20" x2="302" y2="20"></line>

            <line class="axis" x1="44" y1="128" x2="312" y2="128"></line>
            <line class="axis" x1="86" y1="280" x2="86" y2="12"></line>
            <text class="axis-label" x="316" y="132">x</text>
            <text class="axis-label" x="92" y="16">y</text>

            <text class="tick-label" x="82" y="146">0</text>
            <text class="tick-label" x="118" y="146">1</text>
            <text class="tick-label" x="154" y="146">2</text>
            <text class="tick-label" x="190" y="146">3</text>
            <text class="tick-label" x="226" y="146">4</text>
            <text class="tick-label" x="262" y="146">5</text>
            <text class="tick-label" x="60" y="276">-4</text>
            <text class="tick-label" x="64" y="240">-3</text>
            <text class="tick-label" x="64" y="204">-2</text>
            <text class="tick-label" x="64" y="168">-1</text>
            <text class="tick-label" x="72" y="96">1</text>
            <text class="tick-label" x="72" y="60">2</text>

            <line class="guide-line" x1="194" y1="92" x2="266" y2="92"></line>
            <line class="guide-line" x1="266" y1="92" x2="266" y2="236"></line>
            <text class="annotation-label" x="210" y="82">a = 2</text>
            <text class="annotation-label" x="272" y="168">b = -4</text>

            <line class="curve-main" x1="194" y1="92" x2="260" y2="223"></line>
            <polygon points="266,236 254,226 265,221" fill="var(--diagram-accent)" stroke="none"></polygon>
            <text class="annotation-label" x="150" y="192">v(2 ; -4)</text>

            <circle class="plot-point-alt" cx="194" cy="92" r="6"></circle>
            <circle class="plot-point" cx="266" cy="236" r="6"></circle>
            <text class="annotation-label" x="138" y="80">A(3 ; 1)</text>
            <text class="annotation-label" x="252" y="256">A'(5 ; -3)</text>
          </svg>
        `,
        notes: [
          'Le vecteur $\\vec{v}(2\\,;\\,-4)$ donne le déplacement : on avance de $2$ vers la droite (abscisse) puis de $4$ vers le bas (ordonnée négative).',
          'La flèche relie directement $A$ à son image $A\'$ : c\'est le même vecteur $\\vec{v}$ qui déplacerait n\'importe quel autre point du plan.',
          'Vérification par coordonnées : $A\'(3+2\\,;\\,1+(-4)) = A\'(5\\,;\\,-3)$, exactement le point marqué sur le graphique.'
        ],
        reading: 'Le trajet en escalier (pointillés) montre séparément l\'effet de $a$ puis de $b$ ; la flèche pleine montre le vecteur réel $\\vec{v}$ qui va directement de $A$ à $A\'$.',
        caption: 'Translation du point $A(3\\,;\\,1)$ par le vecteur $\\vec{v}(2\\,;\\,-4)$, donnant l\'image $A\'(5\\,;\\,-3)$ — exemple repris de la méthode du cours.'
      },
      recap: [
        'Translation : chaque point se déplace du même vecteur $\\vec{v}(a ; b)$ → on ajoute $a$ à l\'abscisse et $b$ à l\'ordonnée.',
        'Rotation : chaque point tourne autour d\'un centre $O$ en conservant sa distance à $O$.',
        'Ces deux transformations sont des isométries : elles conservent distances, angles et aires.',
        'La composition de deux translations est une translation dont le vecteur est la somme des deux vecteurs.'
      ],
      piege: 'Piège : lors d\'une translation, tous les points se déplacent du MÊME vecteur. On ne tourne pas, on ne dilate pas. Le vecteur $\\vec{v}$ a une direction, un sens ET une longueur.'
    },
    quiz: [
      {
        q: 'Le point $A(2 ; 3)$ subit une translation de vecteur $\\vec{v}(4 ; -1)$. Quelle est l\'image $A\'$ ?',
        options: ['$(6 ; 2)$', '$(-2 ; 4)$', '$(6 ; -3)$', '$(8 ; -3)$'],
        answer: 0,
        correction: '$A\'(2 + 4 \\,;\\, 3 + (-1)) = A\'(6 \\,;\\, 2)$.'
      },
      {
        q: 'Une rotation conserve-t-elle les aires des figures ?',
        options: ['Non, elle les agrandit', 'Non, elle les réduit', 'Oui, c\'est une isométrie', 'Seulement pour les cercles'],
        answer: 2,
        correction: 'La rotation est une isométrie directe : elle conserve toutes les distances, les angles, et donc les aires.'
      },
      {
        q: 'Un triangle $ABC$ subit une rotation de $90°$ autour de l\'origine. L\'élève affirme que les longueurs des côtés changent car le triangle « pivote ». A-t-il raison ?',
        options: [
          'Oui : tourner un triangle modifie ses proportions.',
          'Non : la rotation est une isométrie — elle conserve exactement toutes les distances et tous les angles.',
          'Oui, mais seulement si l\'angle de rotation est supérieur à $90°$.',
          'Cela dépend de la position du centre de rotation.'
        ],
        answer: 1,
        correction: 'La rotation est une isométrie : distances, angles et aires sont rigoureusement conservés, quelle que soit l\'amplitude de la rotation ou la position du centre. Le triangle conserve sa forme exacte — il est seulement « orienté » différemment dans le plan. C\'est la même propriété que pour la symétrie axiale et la translation.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'Un drone se déplace sur une carte', emoji:'🛸'},
          {intro:'Un robot avance dans un entrepôt', emoji:'🤖'},
          {intro:'Un pion se déplace sur un plateau de jeu', emoji:'🎲'},
          {intro:'Un navire change de cap sur la carte marine', emoji:'🚢'},
          {intro:'Un satellite se repositionne en orbite', emoji:'🛰️'}
        ]);
        const ax = rand(-5, 5), ay = rand(-5, 5);
        const vx = rand(-4, 4), vy = rand(-4, 4);
        return {
          statement: `${ctx.emoji} ${ctx.intro}. Le point $A(${ax} ; ${ay})$ subit une translation de vecteur $\\vec{v}(${vx} ; ${vy})$. Quelle est l'abscisse de l'image $A'$ ?`,
          answer: ax + vx,
          tolerance: 0,
          unit: '',
          hint: `$x_{A'} = x_A + v_x = ${ax} + (${vx})$.`,
          solution: [`$x_{A'} = ${ax} + (${vx}) = ${ax + vx}$ et $y_{A'} = ${ay} + (${vy}) = ${ay + vy}$.`]
        };
      }
    },
    probleme: {
      context: 'Sur un plan de ville, le parc $P$ est en $(1 ; 2)$, la mairie $M$ est en $(5 ; 4)$. Une nouvelle fontaine $F$ sera placée par translation de $\\vec{PM}$ à partir du marché $C(3 ; 1)$.',
      tasks: [
        'Calculer le vecteur $\\vec{PM}$.',
        'Calculer les coordonnées de la fontaine $F$ (image de $C$ par la translation $\\vec{PM}$).',
        'Vérifier que $CF = PM$ (la translation conserve les distances).'
      ],
      solutions: [
        '$\\vec{PM}(5-1 \\,;\\, 4-2) = \\vec{PM}(4 ; 2)$.',
        '$F(3+4 \\,;\\, 1+2) = F(7 ; 3)$.',
        '$CF = \\sqrt{(7-3)^2+(3-1)^2} = \\sqrt{16+4} = \\sqrt{20}$ et $PM = \\sqrt{4^2+2^2} = \\sqrt{20}$ ✓.'
      ],
      finalAnswer: 'La fontaine est placée en $F(7 ; 3)$.'
    },

    evaluation: {
      title: 'Évaluation — Translations et Rotations',
      duration: '25 min',
      questions: [
        {
          statement: 'Le point $A(3 ; -2)$ subit une translation de vecteur $\\vec{v}(-5 ; 4)$. Quelles sont les coordonnées de l\'image $A\'$ ?',
          type: 'multiple-choice',
          options: ['$(-2 ; 2)$', '$(8 ; -6)$', '$(-2 ; -6)$', '$(8 ; 2)$'],
          answer: 0,
          points: 2,
          correction: '$A\'(3 + (-5) \\;;\\; -2 + 4) = A\'(-2 \\;;\\; 2)$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $a$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = x_{B\'} - x_B = 2 - (-1) = 3$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $b$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$b = y_{B\'} - y_B = 1 - 5 = -4$.'
        },
        {
          statement: 'Une rotation de centre $O$ et d\'angle $180°$ transforme $A(3 ; 2)$ en $A\'$. Si $O$ est l\'origine $(0 ; 0)$, quelles sont les coordonnées de $A\'$ ?',
          type: 'multiple-choice',
          options: ['$(3 ; -2)$', '$(-3 ; -2)$', '$(-3 ; 2)$', '$(2 ; 3)$'],
          answer: 1,
          points: 2,
          correction: 'Rotation de $180°$ autour de l\'origine : $A\'(-x ; -y) = A\'(-3 ; -2)$.'
        },
        {
          statement: 'Un segment $[AB]$ de longueur $7\\,\\text{cm}$ subit une translation. Quelle est la longueur de l\'image $[A\'B\']$ ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'La translation est une isométrie : elle conserve toutes les distances. Donc $A\'B\' = AB = 7\\,\\text{cm}$.'
        }
      ]
    }
  }
);
