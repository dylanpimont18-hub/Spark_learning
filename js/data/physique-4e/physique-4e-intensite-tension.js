/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-intensite-tension.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-intensite-tension',
    level: 1, subject: 'physique',
    icon: '🔌',
    title: 'L\'intensité et la tension électrique',
    subtitle: 'Mesurer l\'intensité du courant (ampèremètre) et la tension (voltmètre) dans un circuit électrique',
    keywords: ['Intensité', 'Tension', 'Ampèremètre', 'Voltmètre', 'Loi d\'Ohm'],
    physics: 'Savoir mesurer correctement une intensité ou une tension est indispensable pour vérifier qu\'une installation électrique domestique est sûre, pour dimensionner le chargeur d\'un appareil, ou pour diagnostiquer une panne sur un circuit électronique.',

    cours: {
      intro: 'Dans un circuit électrique <strong>fermé</strong>, un courant électrique circule dès qu\'un générateur (pile, batterie…) est relié à un ou plusieurs récepteurs (lampe, moteur…) par des fils conducteurs. Ce courant correspond à un déplacement organisé de charges électriques.<br/><br/>L\'<strong>intensité</strong> $I$ du courant électrique indique la quantité de charges qui traverse le circuit chaque seconde. Elle se mesure en <strong>ampères (A)</strong> à l\'aide d\'un <strong>ampèremètre</strong>, qui doit obligatoirement être branché <strong>en série</strong> dans le circuit.<br/><br/>La <strong>tension</strong> $U$ électrique, quant à elle, se mesure entre deux points du circuit (souvent aux bornes d\'un composant) en <strong>volts (V)</strong> à l\'aide d\'un <strong>voltmètre</strong>, qui doit être branché <strong>en dérivation</strong> (en parallèle) aux bornes du composant étudié, sans rien débrancher.',
      definitions: [
        { term: 'Intensité du courant électrique ($I$)', def: 'Grandeur qui traduit le débit de charges électriques circulant dans un circuit. Elle se mesure en <strong>ampères (A)</strong>, avec un ampèremètre branché <strong>en série</strong> (il faut couper le circuit pour l\'insérer).' },
        { term: 'Tension électrique ($U$)', def: 'Grandeur mesurée entre deux points d\'un circuit, le plus souvent aux bornes d\'un composant. Elle se mesure en <strong>volts (V)</strong>, avec un voltmètre branché <strong>en dérivation</strong> (en parallèle, sans rien débrancher).' },
        { term: 'Circuit électrique fermé', def: 'Ensemble de composants (générateur, récepteurs, fils) formant une boucle continue. Un courant ne circule que si le circuit est <strong>fermé</strong> : la moindre coupure (interrupteur ouvert, fil débranché) arrête totalement le courant.' },
        { term: 'Résistance électrique ($R$)', def: 'Grandeur, mesurée en <strong>ohms (Ω)</strong>, qui traduit la capacité d\'un composant à s\'opposer au passage du courant. Plus $R$ est grande, plus l\'intensité $I$ est faible pour une même tension $U$ (loi d\'Ohm).' }
      ],
      method: {
        title: 'Brancher correctement un ampèremètre ou un voltmètre en 3 étapes',
        steps: [
          '<strong>Identifier le composant</strong> dont on veut mesurer l\'intensité qui le traverse, ou la tension à ses bornes.',
          '<strong>Pour mesurer une intensité</strong> : couper le fil à l\'endroit voulu et insérer l\'<strong>ampèremètre en série</strong>, de sorte que tout le courant du circuit le traverse.',
          '<strong>Pour mesurer une tension</strong> : brancher le <strong>voltmètre en dérivation</strong>, directement aux deux bornes du composant, sans couper aucun fil du circuit principal.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mesures électriques',
        title: 'Ampèremètre en série et voltmètre en dérivation',
        description: 'Dans ce circuit, l\'ampèremètre (A) est inséré en série pour mesurer l\'intensité $I$ qui traverse la lampe. Le voltmètre (V) est branché en dérivation, directement aux bornes de la lampe, pour mesurer la tension $U$.',
        svg: `
          <svg viewBox="0 0 560 260" role="img" aria-labelledby="it-title it-desc">
            <title id="it-title">Circuit avec ampèremetre en serie et voltmetre en derivation</title>
            <desc id="it-desc">Un circuit ferme rectangulaire comporte un generateur a gauche, une lampe sur le cote superieur et un amperemetre sur le cote droit, tous parcourus par le meme courant puisqu'ils sont en serie. Un voltmetre est branche en derivation directement aux deux bornes de la lampe, forme une boucle secondaire sans couper le circuit principal, pour mesurer la tension a ses bornes.</desc>

            <defs>
              <marker id="arrow-phys4e-it" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- boucle principale -->
            <line class="frame-line" x1="60" y1="80" x2="254" y2="80"></line>
            <line class="frame-line" x1="286" y1="80" x2="480" y2="80"></line>
            <line class="frame-line" x1="480" y1="80" x2="480" y2="134"></line>
            <line class="frame-line" x1="480" y1="166" x2="480" y2="220"></line>
            <line class="frame-line" x1="480" y1="220" x2="60" y2="220"></line>
            <line class="frame-line" x1="60" y1="220" x2="60" y2="160"></line>
            <line class="frame-line" x1="60" y1="140" x2="60" y2="80"></line>

            <!-- generateur -->
            <line class="frame-line" x1="40" y1="140" x2="80" y2="140"></line>
            <line class="curve-main" x1="48" y1="160" x2="72" y2="160"></line>
            <text class="tick-label" x="30" y="144" text-anchor="end">+</text>
            <text class="tick-label" x="30" y="164" text-anchor="end">−</text>

            <!-- lampe (symbole normalise : cercle + croix) -->
            <circle class="plot-point-alt" cx="270" cy="80" r="16"></circle>
            <line class="frame-line" x1="259" y1="69" x2="281" y2="91"></line>
            <line class="frame-line" x1="259" y1="91" x2="281" y2="69"></line>
            <text class="annotation-label" x="270" y="55" text-anchor="middle">Lampe</text>

            <!-- amperemetre en serie -->
            <circle class="plot-point-alt" cx="480" cy="150" r="16"></circle>
            <text class="tick-label" x="480" y="154" text-anchor="middle">A</text>

            <!-- voltmetre en derivation, aux bornes de la lampe -->
            <line class="frame-line" x1="254" y1="80" x2="254" y2="150"></line>
            <line class="frame-line" x1="286" y1="80" x2="286" y2="150"></line>
            <circle class="plot-point-alt" cx="270" cy="150" r="16"></circle>
            <text class="tick-label" x="270" y="154" text-anchor="middle">V</text>
            <text class="label-soft" x="270" y="182" text-anchor="middle">(dérivation)</text>

            <!-- sens du courant -->
            <line class="curve-main" x1="300" y1="220" x2="250" y2="220" marker-end="url(#arrow-phys4e-it)"></line>
            <text class="annotation-label" x="275" y="208" text-anchor="middle">I</text>
          </svg>
        `,
        notes: [
          'L\'<strong>ampèremètre (A)</strong> est inséré <strong>en série</strong> dans le circuit, à droite : tout le courant qui traverse la lampe traverse aussi l\'ampèremètre, ce qui permet de mesurer l\'intensité $I$.',
          'Le <strong>voltmètre (V)</strong> est branché <strong>en dérivation</strong>, directement sur les deux bornes de la lampe, sans couper le circuit principal : il mesure la tension $U$ aux bornes de la lampe.',
          'Le sens conventionnel du courant $I$ va de la borne $+$ du générateur vers sa borne $-$, en passant par l\'extérieur du circuit (lampe puis ampèremètre).'
        ],
        reading: 'Repère d\'abord la boucle principale (générateur, lampe, ampèremètre, tous en série) puis la boucle secondaire du voltmètre, branchée en dérivation directement sur les deux bornes de la lampe.',
        caption: 'Circuit avec ampèremètre en série (mesure de l\'intensité $I$) et voltmètre en dérivation aux bornes de la lampe (mesure de la tension $U$).'
      },
      example: {
        statement: 'Un résistor de résistance $R = 100$ Ω est parcouru par un courant d\'intensité $I = 0{,}2$ A.<br/><br/>Calcule la tension $U$ aux bornes de ce résistor, grâce à la loi d\'Ohm.',
        steps: [
          'La loi d\'Ohm relie la tension aux bornes d\'un résistor, sa résistance et l\'intensité qui le traverse : $U = R \\times I$.',
          'Application numérique : $U = 100 \\times 0{,}2$.'
        ],
        answer: '$U = 20$ V. Cette relation, la <strong>loi d\'Ohm</strong>, permet de calculer directement la tension dès que l\'on connaît la résistance du composant et l\'intensité qui le traverse — sans avoir besoin de la mesurer avec un voltmètre.'
      },
      formulas: [
        'Loi d\'Ohm : $U = R \\times I$',
        'Intensité : $I = \\dfrac{U}{R}$',
        'Résistance : $R = \\dfrac{U}{I}$',
        'Règles de branchement : ampèremètre toujours <strong>en série</strong> ; voltmètre toujours <strong>en dérivation</strong>'
      ],
      recap: [
        'L\'<strong>intensité</strong> $I$ (en ampères) se mesure avec un ampèremètre branché <strong>en série</strong> dans le circuit.',
        'La <strong>tension</strong> $U$ (en volts) se mesure avec un voltmètre branché <strong>en dérivation</strong>, aux bornes du composant.',
        'La <strong>résistance</strong> $R$ (en ohms) traduit l\'opposition d\'un composant au passage du courant : $U = R \\times I$.',
        'Un circuit ne fonctionne que s\'il est <strong>fermé</strong> : la moindre coupure arrête totalement le courant dans tout le circuit.'
      ],
      piege: 'Une erreur fréquente est de brancher l\'ampèremètre en dérivation plutôt qu\'en série, ce qui provoque un court-circuit dangereux pour l\'appareil de mesure. Attention, il faut toujours retenir cette règle : l\'ampèremètre se branche en série (il coupe le circuit), tandis que le voltmètre se branche en dérivation (il ne coupe rien).'
    },

    quiz: [
      {
        q: 'Pour mesurer l\'intensité du courant qui traverse une lampe, il faut brancher l\'ampèremètre :',
        options: [
          'En dérivation, aux bornes de la lampe',
          'En série, en coupant le circuit à cet endroit',
          'N\'importe où dans la pièce',
          'En dérivation aux bornes du générateur uniquement'
        ],
        answer: 1,
        correction: 'L\'ampèremètre mesure le courant qui le traverse : il doit donc être inséré <strong>en série</strong>, c\'est-à-dire en coupant le fil pour que tout le courant du circuit passe par lui.'
      },
      {
        q: 'Pour mesurer la tension aux bornes d\'une lampe, il faut brancher le voltmètre :',
        options: [
          'En série, en coupant le circuit',
          'En dérivation, directement sur les deux bornes de la lampe',
          'Uniquement à l\'intérieur du générateur',
          'En série, juste après l\'ampèremètre'
        ],
        answer: 1,
        correction: 'Le voltmètre mesure une différence entre deux points : il se branche <strong>en dérivation</strong>, directement sur les deux bornes du composant, sans rien débrancher du circuit principal.'
      },
      {
        q: 'Un résistor de résistance $R = 50$ Ω est parcouru par un courant $I = 0{,}4$ A. D\'après la loi d\'Ohm, quelle est la tension $U$ à ses bornes ?',
        options: [
          '$U = 20$ V',
          '$U = 125$ V',
          '$U = 50{,}4$ V',
          '$U = 0{,}008$ V'
        ],
        answer: 0,
        correction: 'Loi d\'Ohm : $U = R \\times I = 50 \\times 0{,}4 = 20$ V.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['tension', 'intensite']);
        var composants = [
          'un résistor de protection',
          'une résistance chauffante',
          'un fil résistif de laboratoire',
          'un composant électronique',
          'une résistance de test'
        ];
        var composant = pick(composants);

        if (typeExo === 'tension') {
          var R = pick([10, 20, 47, 50, 100, 220, 330]);
          var I = randFloat(0.05, 1.5, 2);
          var U = parseFloat((R * I).toFixed(2));
          return {
            statement: 'Dans un circuit, ' + composant + ' de résistance $R = ' + R + '$ Ω est parcouru par un courant d\'intensité $I = ' + fr(I, 2) + '$ A.<br/><br/>Calcule la tension $U$ à ses bornes grâce à la loi d\'Ohm (en V, arrondie au centième).',
            answer: U,
            tolerance: Math.max(0.05, parseFloat((U * 0.03).toFixed(2))),
            unit: 'V',
            hint: 'Loi d\'Ohm : $U = R \\times I$.',
            solution: [
              'Loi d\'Ohm : $U = R \\times I = ' + R + ' \\times ' + fr(I, 2) + '$.',
              'Résultat : $U \\approx ' + fr(U, 2) + '$ V.'
            ]
          };
        } else {
          var Rb = pick([10, 20, 47, 50, 100, 220, 330]);
          var Ub = randFloat(1, 24, 1);
          var Ib = parseFloat((Ub / Rb).toFixed(3));
          return {
            statement: 'Dans un circuit, ' + composant + ' de résistance $R = ' + Rb + '$ Ω est soumis à une tension $U = ' + fr(Ub, 1) + '$ V à ses bornes.<br/><br/>Calcule l\'intensité $I$ du courant qui le traverse (en A, arrondie au millième).',
            answer: Ib,
            tolerance: Math.max(0.005, parseFloat((Ib * 0.03).toFixed(3))),
            unit: 'A',
            hint: 'D\'après la loi d\'Ohm, $I = \\dfrac{U}{R}$.',
            solution: [
              'Loi d\'Ohm : $I = \\dfrac{U}{R} = \\dfrac{' + fr(Ub, 1) + '}{' + Rb + '}$.',
              'Résultat : $I \\approx ' + fr(Ib, 3) + '$ A.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un circuit électrique alimente une lampe de résistance $R = 15$ Ω à l\'aide d\'un générateur de tension $U = 6$ V à ses bornes.',
      tasks: [
        'Expliquer comment brancher un ampèremètre pour mesurer l\'intensité $I$ qui traverse la lampe.',
        'Calculer l\'intensité $I$ attendue dans ce circuit, grâce à la loi d\'Ohm (arrondie au centième).',
        'Expliquer comment brancher un voltmètre pour vérifier la tension $U$ aux bornes de la lampe, sans modifier le reste du circuit.'
      ],
      solutions: [
        'L\'ampèremètre doit être branché <strong>en série</strong> : il faut couper un fil du circuit à l\'endroit voulu et insérer l\'ampèremètre, de sorte que tout le courant traversant la lampe traverse aussi l\'ampèremètre.',
        'Loi d\'Ohm : $I = \\dfrac{U}{R} = \\dfrac{6}{15} = 0{,}4$ A.',
        'Le voltmètre doit être branché <strong>en dérivation</strong> : on relie ses deux bornes directement aux deux bornes de la lampe, sans couper aucun fil du circuit principal.'
      ],
      finalAnswer: 'L\'intensité attendue est $I = 0{,}4$ A. L\'ampèremètre (en série) et le voltmètre (en dérivation) ne se branchent jamais de la même façon : confondre les deux peut endommager l\'ampèremètre en provoquant un court-circuit.'
    },

    evaluation: {
      title: 'Évaluation — L\'intensité et la tension électrique',
      duration: '25 min',
      questions: [
        {
          statement: 'Un résistor de $R = 200$ Ω est parcouru par un courant $I = 0{,}05$ A. Calculer la tension $U$ à ses bornes (en V).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.3,
          unit: 'V',
          points: 2,
          correction: '$U = R \\times I = 200 \\times 0{,}05 = 10$ V.'
        },
        {
          statement: 'L\'ampèremètre se branche toujours :',
          type: 'multiple-choice',
          options: [
            'En dérivation',
            'En série',
            'Au choix, cela n\'a pas d\'importance',
            'Uniquement dans le générateur'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'ampèremètre mesure le courant qui le traverse : il doit toujours être branché en série, jamais en dérivation.'
        },
        {
          statement: 'Un résistor de $R = 25$ Ω est soumis à une tension $U = 10$ V à ses bornes. Calculer l\'intensité $I$ (en A).',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.02,
          unit: 'A',
          points: 2,
          correction: '$I = \\dfrac{U}{R} = \\dfrac{10}{25} = 0{,}4$ A.'
        },
        {
          statement: 'Le voltmètre se branche toujours :',
          type: 'multiple-choice',
          options: [
            'En série, en coupant le circuit',
            'En dérivation, aux bornes du composant étudié',
            'Uniquement en dehors du circuit',
            'À la place de l\'ampèremètre'
          ],
          answer: 1,
          points: 2,
          correction: 'Le voltmètre mesure une tension entre deux points : il se branche en dérivation, directement sur les bornes du composant, sans rien couper.'
        },
        {
          statement: 'Un circuit électrique est ouvert (interrupteur ouvert). Quelle est l\'intensité du courant dans ce circuit ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: 'A',
          points: 1,
          correction: 'Un circuit ouvert ne forme plus une boucle fermée : aucun courant ne peut circuler, l\'intensité est nulle partout dans le circuit.'
        }
      ]
    }
  });
