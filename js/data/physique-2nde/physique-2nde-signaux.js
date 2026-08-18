/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-signaux.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-signaux',
    level: 2, subject: 'physique',
    icon: '📡',
    title: 'Signaux et capteurs',
    subtitle: 'Signal analogique et numérique, capteurs, chaîne de mesure, conversion analogique-numérique',
    keywords: ['Signal analogique', 'Signal numérique', 'Capteur', 'Chaîne de mesure', 'Échantillonnage', 'Quantification'],
    physics: 'Les capteurs et la numérisation des signaux sont partout : thermostat domotique, alarme de sécurité, tableau de bord automobile, écran tactile de smartphone ou station météo connectée reposent tous sur la conversion d\'une grandeur physique en signal électrique, puis en valeurs numériques exploitables par un microcontrôleur.',

    cours: {
      intro: 'Un <strong>capteur</strong> est un dispositif qui transforme une grandeur physique (température, luminosité, pression, position…) en un <strong>signal électrique</strong> exploitable, le plus souvent une tension.<br/><br/>Ce signal peut être de deux natures. Un <strong>signal analogique</strong> varie de façon <strong>continue</strong> : il peut prendre une infinité de valeurs dans un intervalle donné, comme la tension délivrée en continu par un capteur de température. Un <strong>signal numérique</strong>, au contraire, ne prend qu\'un nombre <strong>fini</strong> de valeurs discrètes, codées en langage binaire (des $0$ et des $1$) : c\'est le seul type de signal qu\'un microcontrôleur ou un ordinateur peut traiter.<br/><br/>Passer de l\'un à l\'autre nécessite une <strong>conversion analogique-numérique</strong> (CAN), qui combine deux opérations : l\'<strong>échantillonnage</strong> (on ne retient la valeur du signal qu\'à intervalles de temps réguliers) et la <strong>quantification</strong> (chaque valeur prélevée est arrondie au niveau discret le plus proche disponible).',
      definitions: [
        { term: 'Capteur', def: 'Dispositif qui convertit une grandeur physique (température, luminosité, pression…) en un signal électrique exploitable, généralement une tension.' },
        { term: 'Signal analogique', def: 'Signal qui varie de façon <strong>continue</strong> dans le temps et peut prendre une infinité de valeurs dans un intervalle donné.' },
        { term: 'Signal numérique', def: 'Signal codé sous forme de valeurs <strong>discrètes</strong> (un nombre fini de niveaux), généralement en binaire. C\'est le seul format compréhensible par un système informatique.' },
        { term: 'Conversion analogique-numérique (CAN)', def: 'Transformation d\'un signal analogique en signal numérique, en deux étapes : l\'<strong>échantillonnage</strong> (prélèvement de valeurs à intervalles de temps réguliers, de période $T_e$) puis la <strong>quantification</strong> (arrondi de chaque valeur prélevée au niveau discret le plus proche, sur $n$ bits).' }
      ],
      method: {
        title: 'Analyser une chaîne de mesure en 3 étapes',
        steps: [
          '<strong>Identifier le capteur</strong> et la grandeur physique qu\'il mesure, ainsi que le signal électrique (généralement une tension) qu\'il délivre en sortie.<br/>Exemple : une photorésistance convertit l\'intensité lumineuse reçue en une tension proportionnelle.',
          '<strong>Déterminer la nature du signal</strong> : analogique (variation continue, exploitable directement par un dispositif analogique) ou numérique (nécessaire pour un traitement informatique).',
          'Si une <strong>numérisation</strong> est nécessaire, analyser les deux étapes de la conversion : l\'échantillonnage (à quelle fréquence prélève-t-on des valeurs ?) et la quantification (sur combien de niveaux, liés au nombre de bits $n$ du convertisseur ?). Plus ces deux paramètres sont élevés, plus le signal numérique est fidèle au signal analogique d\'origine.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Chaîne de mesure : capteur et conversion analogique-numérique',
        title: 'Signal analogique continu et signal numérique échantillonné',
        description: 'La tension délivrée par un capteur varie de façon <strong>continue</strong> (courbe pleine). Après échantillonnage à intervalles réguliers puis quantification sur un nombre limité de niveaux, on obtient un signal numérique en <strong>escalier</strong> qui approche le signal analogique d\'origine.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="signal-title signal-desc">
            <title id="signal-title">Signal analogique continu et signal numerique echantillonne</title>
            <desc id="signal-desc">Un graphique represente la tension en volts en ordonnee, en fonction du temps en abscisse. Une courbe pleine et lisse, croissante puis presque stable, represente le signal analogique delivre en continu par un capteur. Une seconde courbe en forme d'escalier, plus fine, se superpose approximativement a la premiere : elle represente le signal numerique obtenu apres echantillonnage a intervalles de temps reguliers et arrondi de chaque valeur prelevee au niveau le plus proche disponible. Des lignes pointillees verticales relient certains instants d'echantillonnage a l'axe des temps.</desc>

            <defs>
              <marker id="arrow-phys2nde-signal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-phys2nde-signal)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="45" marker-end="url(#arrow-phys2nde-signal)"></line>
            <text class="tick-label" x="60" y="30" text-anchor="middle">U (V)</text>
            <text class="tick-label" x="518" y="278" text-anchor="end">t</text>

            <!-- guides d'echantillonnage (instants) -->
            <line class="guide-line" x1="148" y1="176.0" x2="148" y2="260"></line>
            <line class="guide-line" x1="280" y1="113.0" x2="280" y2="260"></line>
            <line class="guide-line" x1="412" y1="92.0" x2="412" y2="260"></line>

            <!-- signal analogique (continu) -->
            <path class="curve-main" fill="none" d="M60.0,218.0 L71.0,206.0 L82.0,195.2 L93.0,185.3 L104.0,176.5 L115.0,168.4 L126.0,161.2 L137.0,154.6 L148.0,148.6 L159.0,143.2 L170.0,138.4 L181.0,133.9 L192.0,130.0 L203.0,126.3 L214.0,123.1 L225.0,120.1 L236.0,117.4 L247.0,115.0 L258.0,112.8 L269.0,110.8 L280.0,109.1 L291.0,107.4 L302.0,106.0 L313.0,104.6 L324.0,103.4 L335.0,102.3 L346.0,101.4 L357.0,100.5 L368.0,99.7 L379.0,98.9 L390.0,98.3 L401.0,97.7 L412.0,97.1 L423.0,96.6 L434.0,96.2 L445.0,95.8 L456.0,95.4 L467.0,95.1 L478.0,94.8 L489.0,94.6 L500.0,94.3"></path>

            <!-- signal numerique (escalier) -->
            <path class="frame-line" fill="none" d="M60,218.0 L104,218.0 L104,176.0 L148,176.0 L148,155.0 L192,155.0 L192,134.0 L236,134.0 L236,113.0 L280,113.0 L324,113.0 L368,113.0 L368,92.0 L412,92.0 L456,92.0 L500,92.0"></path>

            <!-- points d'echantillonnage -->
            <circle class="plot-point-alt" cx="148" cy="176.0" r="4"></circle>
            <circle class="plot-point-alt" cx="280" cy="113.0" r="4"></circle>
            <circle class="plot-point-alt" cx="412" cy="92.0" r="4"></circle>

            <!-- annotations -->
            <text class="annotation-label" x="440" y="88" text-anchor="start">Analogique</text>
            <text class="label-soft" x="180" y="260" dy="18" text-anchor="middle">échantillons</text>
          </svg>
        `,
        notes: [
          'La courbe pleine et épaisse est le signal <strong>analogique</strong> : la tension délivrée par le capteur varie continûment, sans aucun « saut ».',
          'À intervalles de temps réguliers (traits pointillés verticaux), on <strong>échantillonne</strong> le signal : on ne retient que la valeur à cet instant précis.',
          'Chaque valeur prélevée est ensuite <strong>quantifiée</strong>, c\'est-à-dire arrondie au niveau disponible le plus proche : le résultat, la courbe en escalier, est le signal <strong>numérique</strong>, qui n\'approche le signal analogique que de façon approximative.'
        ],
        reading: 'Compare la courbe pleine (signal continu du capteur) à la courbe en escalier (valeurs numériques obtenues aux instants d\'échantillonnage, repérés par les traits pointillés).',
        caption: 'Un signal analogique continu (courbe pleine) est échantillonné à intervalles réguliers puis quantifié, ce qui produit un signal numérique en escalier qui n\'approche le signal d\'origine que de façon approximative.'
      },
      example: {
        statement: 'Un capteur de température délivre une tension analogique variant entre $U_{min} = 0$ V et $U_{max} = 5$ V. Le convertisseur analogique-numérique associé code cette tension sur $n = 8$ bits.<br/><br/>Calculer le nombre de niveaux de quantification disponibles, puis la résolution du convertisseur (le plus petit écart de tension détectable).',
        steps: [
          'Un convertisseur codé sur $n$ bits peut distinguer $N_{niveaux} = 2^n$ valeurs différentes.',
          'Application numérique : $N_{niveaux} = 2^8 = 256$ niveaux.',
          'La résolution $q$ est l\'écart de tension entre deux niveaux consécutifs : $q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1}$.',
          'Application numérique : $q = \\dfrac{5-0}{256-1} = \\dfrac{5}{255} \\approx 0{,}0196$ V, soit environ $19{,}6$ mV.'
        ],
        answer: '$256$ niveaux de quantification possibles, pour une résolution $q \\approx 19{,}6$ mV. Toute variation de tension inférieure à cette résolution ne peut pas être distinguée par le convertisseur : elle est « noyée » dans l\'arrondi de quantification.'
      },
      formulas: [
        'Nombre de niveaux de quantification : $N_{niveaux} = 2^n$ ($n$ = nombre de bits du convertisseur)',
        'Résolution (plus petit écart de tension détectable) : $q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1}$',
        'Fréquence d\'échantillonnage : $f_e = \\dfrac{1}{T_e}$ ($T_e$ = période d\'échantillonnage)'
      ],
      recap: [
        'Un capteur convertit une grandeur physique en signal électrique, le plus souvent une tension analogique.',
        'Un signal <strong>analogique</strong> varie continûment ; un signal <strong>numérique</strong> ne prend qu\'un nombre fini de valeurs, seul format exploitable par un système informatique.',
        'La conversion analogique-numérique combine <strong>échantillonnage</strong> (discrétisation dans le temps) et <strong>quantification</strong> (discrétisation en valeur, sur $2^n$ niveaux).',
        'Plus le nombre de bits $n$ et la fréquence d\'échantillonnage $f_e$ sont élevés, plus le signal numérique est fidèle au signal analogique d\'origine.'
      ],
      piege: 'Une confusion fréquente consiste à mélanger échantillonnage et quantification, comme s\'il s\'agissait d\'une seule et même opération. Attention : l\'échantillonnage discrétise le signal <strong>dans le temps</strong> (on ne garde que certains instants), tandis que la quantification discrétise le signal <strong>en valeur</strong> (on arrondit chaque mesure à un niveau disponible) — les deux étapes sont nécessaires et distinctes pour obtenir un signal numérique.'
    },

    quiz: [
      {
        q: 'Un signal analogique se distingue d\'un signal numérique par le fait qu\'il :',
        options: [
          'Ne peut prendre qu\'un nombre fini de valeurs',
          'Varie de façon continue et peut prendre une infinité de valeurs',
          'Est toujours codé en binaire',
          'Ne peut être délivré que par un capteur numérique'
        ],
        answer: 1,
        correction: 'Un signal <strong>analogique</strong> varie de façon continue dans le temps et peut prendre une infinité de valeurs dans un intervalle donné, contrairement à un signal numérique qui ne prend qu\'un nombre fini de valeurs discrètes.'
      },
      {
        q: 'Un convertisseur analogique-numérique codé sur $n = 4$ bits peut distinguer combien de niveaux de quantification ?',
        options: [
          '$4$ niveaux',
          '$8$ niveaux',
          '$16$ niveaux',
          '$40$ niveaux'
        ],
        answer: 2,
        correction: 'Le nombre de niveaux disponibles est $N_{niveaux} = 2^n = 2^4 = 16$.'
      },
      {
        q: 'Dans une chaîne de conversion analogique-numérique, l\'échantillonnage correspond à :',
        options: [
          'L\'arrondi de chaque valeur mesurée au niveau disponible le plus proche',
          'Le prélèvement de la valeur du signal à des instants réguliers',
          'L\'amplification du signal délivré par le capteur',
          'La transformation du signal numérique en signal analogique'
        ],
        answer: 1,
        correction: 'L\'échantillonnage consiste à ne retenir la valeur du signal qu\'à des <strong>instants réguliers</strong> (discrétisation dans le temps). C\'est la quantification, une étape distincte, qui arrondit ensuite chaque valeur prélevée au niveau disponible le plus proche.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['niveaux', 'resolution']);
        var contextes = [
          'un capteur de température domotique',
          'une photorésistance de volet roulant automatisé',
          'un capteur de pression de station météo connectée',
          'un capteur d\'humidité de serre agricole',
          'un capteur de position d\'un bras robotisé'
        ];

        if (typeExo === 'niveaux') {
          var n = pick([4, 6, 8, 10, 12]);
          var niveaux = Math.pow(2, n);
          var contexte = pick(contextes);
          return {
            statement: 'Dans ' + contexte + ', le convertisseur analogique-numérique code la tension mesurée sur $n = ' + n + '$ bits.<br/><br/>Calcule le nombre de niveaux de quantification $N_{niveaux}$ que peut distinguer ce convertisseur.',
            answer: niveaux,
            tolerance: 0,
            unit: '',
            hint: 'Un convertisseur sur $n$ bits distingue $N_{niveaux} = 2^n$ valeurs différentes.',
            solution: [
              'Formule : $N_{niveaux} = 2^n$.',
              'Application numérique : $N_{niveaux} = 2^{' + n + '}$.',
              'Résultat : $N_{niveaux} = ' + niveaux + '$ niveaux.'
            ]
          };
        } else {
          var n2 = pick([8, 10, 12]);
          var Umax = pick([3.3, 5, 10, 12]);
          var niveaux2 = Math.pow(2, n2);
          var q = parseFloat((Umax / (niveaux2 - 1)).toFixed(4));
          var contexte2 = pick(contextes);
          return {
            statement: 'Dans ' + contexte2 + ', la tension délivrée par le capteur varie entre $U_{min} = 0$ V et $U_{max} = ' + fr(Umax, 1) + '$ V. Le convertisseur analogique-numérique associé code cette tension sur $n = ' + n2 + '$ bits.<br/><br/>Calcule la résolution $q$ de ce convertisseur, c\'est-à-dire le plus petit écart de tension détectable (en V, arrondie au dix-millième).',
            answer: q,
            tolerance: Math.max(0.0005, parseFloat((q * 0.03).toFixed(4))),
            unit: 'V',
            hint: 'Calcule d\'abord $N_{niveaux} = 2^n$, puis utilise $q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1}$.',
            solution: [
              'Nombre de niveaux : $N_{niveaux} = 2^{' + n2 + '} = ' + niveaux2 + '$.',
              'Résolution : $q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1} = \\dfrac{' + fr(Umax, 1) + '}{' + (niveaux2 - 1) + '}$.',
              'Résultat : $q \\approx ' + fr(q, 4) + '$ V.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un système domotique utilise une photorésistance pour mesurer la luminosité extérieure et commander automatiquement des volets roulants. La tension délivrée par le capteur varie entre $U_{min}=0$ V et $U_{max}=10$ V. Elle est numérisée par un convertisseur analogique-numérique sur $n=10$ bits, avec une période d\'échantillonnage $T_e = 100$ ms.',
      tasks: [
        'Calculer le nombre de niveaux de quantification disponibles, puis la résolution $q$ du convertisseur (en V).',
        'Calculer la fréquence d\'échantillonnage $f_e$ associée à ce système.',
        'Expliquer qualitativement ce qui se passerait si l\'on augmentait le nombre de bits $n$ d\'une part, et la fréquence d\'échantillonnage $f_e$ d\'autre part, sur la fidélité du signal numérique obtenu.'
      ],
      solutions: [
        'Nombre de niveaux : $N_{niveaux} = 2^{10} = 1\\,024$. Résolution : $q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1} = \\dfrac{10}{1\\,023} \\approx 0{,}00978$ V, soit environ $9{,}78$ mV.',
        'Fréquence d\'échantillonnage : $f_e = \\dfrac{1}{T_e} = \\dfrac{1}{0{,}1} = 10$ Hz (soit $10$ prélèvements de la tension chaque seconde).',
        'Augmenter le nombre de bits $n$ augmente le nombre de niveaux $2^n$ disponibles : la résolution $q$ diminue, donc chaque valeur numérique se rapproche davantage de la valeur analogique réelle (meilleure précision <strong>en valeur</strong>). Augmenter la fréquence d\'échantillonnage $f_e$ permet, elle, de <strong>suivre plus fidèlement dans le temps</strong> les variations rapides du signal (par exemple un nuage qui passe brièvement devant le soleil), sans les manquer entre deux prélèvements.'
      ],
      finalAnswer: '$N_{niveaux} = 1\\,024$, $q \\approx 9{,}78$ mV, $f_e = 10$ Hz. Le nombre de bits améliore la précision de chaque mesure, tandis que la fréquence d\'échantillonnage améliore le suivi temporel des variations : ce sont deux leviers indépendants et complémentaires pour la fidélité d\'un signal numérisé.'
    },

    evaluation: {
      title: 'Évaluation — Signaux et capteurs',
      duration: '25 min',
      questions: [
        {
          statement: 'Un capteur convertit une grandeur physique en :',
          type: 'multiple-choice',
          options: [
            'Une grandeur mécanique',
            'Un signal électrique exploitable, généralement une tension',
            'Une couleur',
            'Un signal exclusivement numérique'
          ],
          answer: 1,
          points: 2,
          correction: 'Un capteur transforme une grandeur physique en un signal électrique, le plus souvent une tension, qui peut ensuite être analogique ou numérisé.'
        },
        {
          statement: 'Un convertisseur analogique-numérique codé sur $n=6$ bits distingue combien de niveaux de quantification ?',
          type: 'numeric',
          answer: 64,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$N_{niveaux} = 2^n = 2^6 = 64$ niveaux.'
        },
        {
          statement: 'La quantification, dans une chaîne de conversion analogique-numérique, correspond à :',
          type: 'multiple-choice',
          options: [
            'Le prélèvement du signal à intervalles de temps réguliers',
            'L\'arrondi de chaque valeur prélevée au niveau disponible le plus proche',
            'L\'amplification du signal analogique',
            'La suppression du bruit électrique'
          ],
          answer: 1,
          points: 2,
          correction: 'La quantification arrondit chaque valeur échantillonnée au niveau discret disponible le plus proche : c\'est une discrétisation en <strong>valeur</strong>, distincte de l\'échantillonnage qui est une discrétisation dans le <strong>temps</strong>.'
        },
        {
          statement: 'Un capteur délivre une tension entre $0$ V et $4$ V, numérisée sur $n=8$ bits ($256$ niveaux). Calculer la résolution $q$ du convertisseur (en V, arrondie au millième).',
          type: 'numeric',
          answer: 0.016,
          tolerance: 0.002,
          unit: 'V',
          points: 3,
          correction: '$q = \\dfrac{U_{max}-U_{min}}{N_{niveaux}-1} = \\dfrac{4}{255} \\approx 0{,}016$ V.'
        },
        {
          statement: 'Un signal numérique, contrairement à un signal analogique :',
          type: 'multiple-choice',
          options: [
            'Peut prendre une infinité de valeurs',
            'Ne peut prendre qu\'un nombre fini de valeurs discrètes',
            'Varie forcément plus rapidement',
            'Ne peut pas être obtenu à partir d\'un capteur'
          ],
          answer: 1,
          points: 1,
          correction: 'Un signal numérique est constitué d\'un nombre <strong>fini</strong> de valeurs discrètes, contrairement au signal analogique qui varie continûment et peut prendre une infinité de valeurs.'
        }
      ]
    }
  });
