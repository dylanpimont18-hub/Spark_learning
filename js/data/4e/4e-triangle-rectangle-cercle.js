window.MODULES.push(
    {
    id: '4e-triangle-rectangle-cercle',
    level: 1, subject: 'maths',
    icon: '⭕',
    title: 'Triangle rectangle et cercle circonscrit',
    subtitle: 'Angle inscrit dans un demi-cercle (Thalès)',
    keywords: ['Triangle rectangle', 'Cercle circonscrit', 'Angle inscrit', 'Diamètre', 'Hypoténuse'],
    physics: false,
    cours: {
      intro: 'Le théorème de l\'angle inscrit dans un demi-cercle est un résultat élégant : si un triangle $ABC$ est inscrit dans un cercle et que $[BC]$ est un diamètre, alors l\'angle $\\hat{A}$ est nécessairement droit — et ce quel que soit l\'emplacement de $A$ sur le cercle (tant qu\'il n\'est pas sur le diamètre).' +
        '<br/><br/>' +
        '<strong>Intuition géométrique :</strong> le centre $O$ du cercle est le milieu de $[BC]$, et $OA = OB = OC = R$ (rayons). Le triangle $OAB$ et $OAC$ sont isocèles. En additionnant les angles on obtient $\\hat{A} = 90°$.' +
        '<br/><br/>' +
        'La réciproque est aussi vraie et utile : si $\\hat{A} = 90°$ dans $ABC$, alors $[BC]$ est un diamètre du cercle circonscrit, et son rayon est $R = \\dfrac{BC}{2}$.' +
        '<br/><br/>' +
        'Ce résultat est utilisé en construction géométrique : pour tracer un angle droit, il suffit d\'inscrire un triangle dans un demi-cercle.',
      definitions: [
        { term: 'Cercle circonscrit', def: 'Cercle passant par les trois sommets d\'un triangle. Son centre est équidistant des trois sommets.' },
        { term: 'Angle inscrit', def: 'Angle dont le sommet est sur le cercle et dont les côtés sont des cordes du cercle.' },
        { term: 'Diamètre', def: 'Corde passant par le centre du cercle. C\'est la plus grande corde possible : $d = 2R$.' },
        { term: 'Hypoténuse', def: 'Côté le plus long d\'un triangle rectangle, situé en face de l\'angle droit.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier si un côté est un diamètre</strong> : si $O$ est le centre du cercle et le milieu de $[BC]$, alors $[BC]$ est un diamètre du cercle.',
          '<strong>Théorème direct</strong> : si un côté est un diamètre et $A$ est sur le cercle, l\'angle opposé à ce diamètre est nécessairement droit ($90°$). <strong>Exemple :</strong> $[BC]$ est un diamètre et $A$ est sur le cercle → $\\hat{A} = 90°$.',
          '<strong>Réciproque</strong> : si un angle d\'un triangle est droit, le côté opposé (hypoténuse) est un diamètre du cercle circonscrit. <strong>Exemple :</strong> $\\hat{A} = 90°$ et $BC = 14$ cm → le cercle circonscrit a pour rayon $R = \\dfrac{14}{2} = 7$ cm.'
        ]
      },
      example: {
        statement: 'Un pont en arc a la forme d\'un demi-cercle de diamètre $[BC] = 20$ m. Un câble relie un point $A$ situé sur l\'arc aux deux extrémités $B$ et $C$. Quel est l\'angle $\\hat{A}$ formé par les deux câbles ? Si $AB = 12$ m, quelle est la longueur $AC$ ?',
        steps: [
          '$[BC]$ est un diamètre et $A$ est sur le cercle → d\'après le théorème, $\\hat{A} = 90°$.',
          'Le triangle $ABC$ est rectangle en $A$. On applique Pythagore : $AC = \\sqrt{BC^2 - AB^2}$.',
          '$AC = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ m.'
        ],
        answer: 'L\'angle $\\hat{A} = 90°$ et le câble $AC$ mesure $16$ m.'
      },
      formulas: [
        'Théorème : $[BC]$ diamètre et $A$ sur le cercle $\\Rightarrow \\hat{A} = 90°$',
        'Réciproque : $\\hat{A} = 90°$ dans $ABC$ $\\Rightarrow$ $[BC]$ est un diamètre du cercle circonscrit',
        'Rayon du cercle circonscrit : $R = \\dfrac{BC}{2}$ (BC = hypoténuse)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Cercle circonscrit',
        title: 'Angle inscrit dans un demi-cercle : pourquoi l\'angle en A est droit',
        description: 'Le point A est n\'importe où sur le cercle (hors B et C) : l\'angle en A reste toujours droit tant que BC est un diamètre.',
        svg: `
          <svg viewBox="0 0 400 300" role="img" aria-labelledby="cercle-circonscrit-title cercle-circonscrit-desc">
            <title id="cercle-circonscrit-title">Triangle rectangle inscrit dans un demi-cercle</title>
            <desc id="cercle-circonscrit-desc">Cercle de centre O et de diametre BC, avec un point A sur le cercle formant un angle droit en A, marque par un petit carre.</desc>
            <circle class="curve-main" cx="200" cy="150" r="90" fill="none"></circle>
            <polygon points="148.38,76.28 110,150 290,150" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="110" y1="150" x2="290" y2="150"></line>
            <line class="frame-line" x1="148.38" y1="76.28" x2="110" y2="150"></line>
            <line class="frame-line" x1="148.38" y1="76.28" x2="290" y2="150"></line>
            <line class="guide-line" x1="200" y1="150" x2="148.38" y2="76.28"></line>
            <path class="axis" d="M142.84,86.93 L153.48,92.47 L159.02,81.82"></path>
            <circle class="plot-point-alt" cx="110" cy="150" r="5"></circle>
            <circle class="plot-point-alt" cx="290" cy="150" r="5"></circle>
            <circle class="plot-point" cx="148.38" cy="76.28" r="5"></circle>
            <circle class="plot-point-alt" cx="200" cy="150" r="4"></circle>
            <text class="annotation-label" x="88" y="168">B</text>
            <text class="annotation-label" x="296" y="168">C</text>
            <text class="annotation-label" x="132" y="64">A</text>
            <text class="tick-label" x="204" y="145">O</text>
            <text class="tick-label" x="176" y="106">R</text>
          </svg>
        `,
        notes: [
          'O est le centre du cercle et le milieu du diamètre BC : donc OA = OB = OC = R.',
          'Où que se trouve A sur le cercle, l\'angle en A reste droit : ce n\'est pas une coïncidence liée à la position choisie ici.',
          'Ici A n\'est pas au sommet du demi-cercle, pour bien montrer que le théorème est général et ne dépend pas de cette position particulière.'
        ],
        reading: 'Repère d\'abord le diamètre BC : si A est sur le cercle, l\'angle opposé à ce diamètre est automatiquement droit, quelle que soit la position de A.',
        caption: 'Théorème de l\'angle inscrit dans un demi-cercle : BC diamètre et A sur le cercle donc l\'angle en A vaut 90 degrés.'
      },
      recap: [
        'Si un côté d\'un triangle inscrit est un diamètre, l\'angle opposé vaut $90°$.',
        'Réciproque : si un triangle est rectangle, l\'hypoténuse est un diamètre du cercle circonscrit.',
        'Le centre du cercle circonscrit à un triangle rectangle est le milieu de l\'hypoténuse.',
        'Le rayon du cercle circonscrit vaut la moitié de l\'hypoténuse : $R = \\dfrac{BC}{2}$.'
      ],
      piege: 'Piège : le théorème s\'applique uniquement quand le côté est un DIAMÈTRE, pas juste une corde du cercle. Un côté = diamètre signifie que son milieu est le centre du cercle.'
    },
    quiz: [
      {
        q: 'Un triangle $ABC$ est inscrit dans un cercle de diamètre $[BC]$. Quel est l\'angle $\\hat{A}$ ?',
        options: ['$45°$', '$60°$', '$90°$', '$180°$'],
        answer: 2,
        correction: 'Théorème de l\'angle inscrit dans un demi-cercle : si $[BC]$ est un diamètre, alors $\\hat{A} = 90°$.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $A$) avec $BC = 10$ cm, quel est le rayon du cercle circonscrit ?',
        options: ['$10$ cm', '$5$ cm', '$20$ cm', '$7{,}07$ cm'],
        answer: 1,
        correction: 'L\'hypoténuse $BC$ est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$ cm.'
      },
      {
        q: 'Le milieu d\'une hypoténuse d\'un triangle rectangle est :',
        options: ['Le centre de gravité', 'Le centre du cercle inscrit', 'Le centre du cercle circonscrit', 'L\'orthocentre'],
        answer: 2,
        correction: 'Dans un triangle rectangle, le milieu de l\'hypoténuse est le centre du cercle circonscrit, et le rayon vaut la moitié de l\'hypoténuse.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le generateur ne posait qu'une tache : « le
         diametre vaut d, quel est le rayon ? ». C'est une division par deux.
         Elle n'emploie ni le theoreme de l'angle inscrit dans un demi-cercle,
         ni sa reciproque, ni Pythagore — c'est-a-dire rien de ce chapitre. Un
         eleve pouvait faire les douze exercices sans avoir compris pourquoi le
         triangle est rectangle.

         Quatre taches maintenant, et chacune mobilise le theoreme :
           - 'rayon-median' : la mediane issue de l'angle droit vaut la moitie de
             l'hypotenuse, ce qui EST le theoreme, pas une division ;
           - 'troisieme-cote' : Pythagore dans un triangle inscrit, ou
             l'hypotenuse doit d'abord etre reconnue comme le diametre ;
           - 'angle-inscrit' : reconnaitre l'angle droit sans calcul ;
           - 'diametre-inverse' : remonter du rayon au plus long cote. */
      generate() {
        const tache = pick(['rayon-median', 'troisieme-cote', 'angle-inscrit', 'diametre-inverse']);
        const lieu = pick([
          { intro: 'Un vitrail circulaire contient un triangle rectangle inscrit', emoji: '🎨' },
          { intro: 'Un pont en arc forme un demi-cercle avec un triangle inscrit', emoji: '🌉' },
          { intro: 'Sur un terrain de sport, un cercle contient un triangle rectangle', emoji: '🏟️' },
          { intro: 'En optique, un miroir circulaire encadre un triangle rectangle', emoji: '🔭' }
        ]);

        if (tache === 'rayon-median') {
          /* La MEDIANE issue de l'angle droit, et non le rayon : c'est la meme
             longueur, mais la formuler ainsi oblige a passer par le theoreme
             (le milieu de l'hypotenuse est le centre du cercle circonscrit)
             plutot que par une division par deux. */
          const hyp = pick([6, 8, 10, 12, 13, 14, 16, 18, 20]);
          const rep = hyp / 2;
          return {
            statement: lieu.emoji + ' Un triangle $ABC$ est rectangle en $A$ et son hypotenuse mesure $BC = ' + hyp + '$ cm. ' +
              'Soit $M$ le milieu de $[BC]$. Quelle est la longueur $AM$, en cm ?',
            answer: rep,
            tolerance: 0.01,
            unit: 'cm',
            hint: 'Le milieu de l\'hypotenuse est le centre du cercle circonscrit, et les trois sommets sont sur ce cercle : $MA$, $MB$ et $MC$ sont donc trois rayons.',
            solution: [
              'Le triangle est rectangle en $A$, donc $[BC]$ est un diametre du cercle circonscrit et son milieu $M$ en est le centre.',
              'Les trois sommets sont sur le cercle, donc $MA = MB = MC = R$ : la mediane issue de l\'angle droit est un rayon.',
              '$AM = \\dfrac{BC}{2} = \\dfrac{' + hyp + '}{2} = ' + fr(rep) + '$ cm.'
            ]
          };
        }

        if (tache === 'troisieme-cote') {
          // Triplets pythagoriciens : la reponse reste entiere.
          const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]);
          const connu = pick([a, b]);
          const autre = connu === a ? b : a;
          return {
            statement: lieu.emoji + ' ' + lieu.intro + '. Le triangle $ABC$ est inscrit dans un cercle de rayon $' + fr(c / 2) + '$ cm, ' +
              'et $[BC]$ est un diametre. On mesure $AB = ' + connu + '$ cm. Calcule $AC$, en cm.',
            answer: autre,
            tolerance: 0.01,
            unit: 'cm',
            hint: 'Commence par ce que le diametre t\'apprend : le triangle est rectangle en $A$. Son hypotenuse $BC$ vaut deux fois le rayon.',
            solution: [
              '$[BC]$ est un diametre et $A$ est sur le cercle, donc le triangle est rectangle en $A$ (angle inscrit dans un demi-cercle).',
              'L\'hypoténuse vaut $BC = 2 \\times ' + fr(c / 2) + ' = ' + c + '$ cm.',
              '$AC^2 = BC^2 - AB^2 = ' + c + '^2 - ' + connu + '^2 = ' + (c * c) + ' - ' + (connu * connu) + ' = ' + (autre * autre) + '$, donc $AC = ' + autre + '$ cm.'
            ]
          };
        }

        if (tache === 'angle-inscrit') {
          const pos = pick(['sur le cercle', 'sur le cercle']);
          return {
            statement: lieu.emoji + ' Un cercle a pour diametre $[BC]$. Un point $A$ est place ' + pos + ', distinct de $B$ et de $C$. ' +
              'Combien vaut l\'angle $\\widehat{BAC}$, en degres ?',
            answer: 90,
            tolerance: 0,
            unit: '°',
            hint: 'Ce resultat ne demande aucun calcul : il ne depend pas de l\'endroit ou se trouve $A$ sur le cercle.',
            solution: [
              'Tout point du cercle, autre que $B$ et $C$, voit le diametre $[BC]$ sous un angle droit.',
              'C\'est le theoreme de l\'angle inscrit dans un demi-cercle : $\\widehat{BAC} = 90°$.',
              'La position exacte de $A$ ne change rien, et c\'est ce qui rend ce theoreme si utile.'
            ]
          };
        }

        // tache === 'diametre-inverse' : du rayon vers l'hypotenuse.
        const r = pick([2.5, 3, 3.5, 4, 4.5, 5, 6, 6.5, 7.5]);
        const d = parseFloat((2 * r).toFixed(1));
        return {
          statement: lieu.emoji + ' ' + lieu.intro + '. Le cercle circonscrit a ce triangle rectangle a un rayon de $' + fr(r) + '$ cm. ' +
            'Quelle est la longueur de l\'hypotenuse, en cm ?',
          answer: d,
          tolerance: 0.01,
          unit: 'cm',
          hint: 'Dans un triangle rectangle, l\'hypotenuse est un diametre du cercle circonscrit.',
          solution: [
            'Le centre du cercle circonscrit a un triangle rectangle est le milieu de son hypotenuse : l\'hypotenuse est donc un diametre.',
            '$\\text{hypotenuse} = 2R = 2 \\times ' + fr(r) + ' = ' + fr(d) + '$ cm.'
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un vitrail circulaire de rayon $30$ cm. Il y inscrit un triangle $ABC$ avec $[BC]$ comme diamètre et $A$ sur le cercle.',
      tasks: [
        'Quelle est la longueur du diamètre $BC$ ?',
        'Quel est l\'angle $\\hat{A}$ dans ce triangle ?',
        'Si $AB = 36$ cm, calculer $AC$ en utilisant Pythagore.'
      ],
      solutions: [
        '$BC = 2 \\times 30 = 60$ cm.',
        '$\\hat{A} = 90°$ (angle inscrit dans un demi-cercle).',
        '$AC = \\sqrt{BC^2 - AB^2} = \\sqrt{3600 - 1296} = \\sqrt{2304} = 48$ cm.'
      ],
      finalAnswer: 'Le triangle a $BC = 60$ cm, $AB = 36$ cm, $AC = 48$ cm et $\\hat{A} = 90°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangle rectangle et cercle circonscrit',
      duration: '25 min',
      questions: [
        {
          statement: 'Un triangle $ABC$ est inscrit dans un cercle de centre $O$ et $[BC]$ est un diamètre. Que vaut l\'angle $\\hat{A}$ ?',
          type: 'numeric',
          answer: 90,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'D\'après le théorème de l\'angle inscrit dans un demi-cercle, si $[BC]$ est un diamètre et que $A$ est sur le cercle, alors $\\hat{A} = 90°$.'
        },
        {
          statement: 'Un triangle rectangle en $A$ a pour hypoténuse $BC = 26\\,\\text{cm}$. Quel est le rayon du cercle circonscrit ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Dans un triangle rectangle, l\'hypoténuse est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{26}{2} = 13\\,\\text{cm}$.'
        },
        {
          statement: 'Le centre du cercle circonscrit à un triangle rectangle se trouve :',
          type: 'multiple-choice',
          options: [
            'Au centre de gravité du triangle',
            'Au milieu de l\'hypoténuse',
            'Au sommet de l\'angle droit',
            'À l\'intersection des hauteurs'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l\'hypoténuse. Ce point est équidistant des trois sommets (distance = rayon $R = \\dfrac{\\text{hypoténuse}}{2}$).'
        },
        {
          statement: 'Un triangle rectangle inscrit dans un cercle de rayon $R = 10\\,\\text{cm}$ a un côté $AB = 12\\,\\text{cm}$. L\'angle droit est en $A$. Calculer le côté $AC$.',
          type: 'numeric',
          answer: 16,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'L\'hypoténuse $BC$ est le diamètre : $BC = 2R = 20\\,\\text{cm}$. Par Pythagore : $AC = \\sqrt{BC^2 - AB^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16\\,\\text{cm}$.'
        },
        {
          statement: 'Si le milieu de l\'hypoténuse d\'un triangle est le centre d\'un cercle passant par les trois sommets, que peut-on conclure sur ce triangle ?',
          type: 'multiple-choice',
          options: [
            'Il est isocèle',
            'Il est équilatéral',
            'Il est rectangle',
            'Il est quelconque'
          ],
          answer: 2,
          points: 2,
          correction: 'C\'est la réciproque du théorème : si le milieu d\'un côté d\'un triangle est le centre du cercle passant par les trois sommets, alors ce côté est un diamètre et l\'angle opposé vaut $90°$. Le triangle est rectangle.'
        }
      ]
    }
  }
);
