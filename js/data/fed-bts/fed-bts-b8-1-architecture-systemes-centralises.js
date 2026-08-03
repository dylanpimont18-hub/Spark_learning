/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b8-1-architecture-systemes-centralises.js
   BTS FED — S8-B8-1 Architecture des systèmes centralisés — GTB, capteurs, signal 4-20 mA
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b8-1-architecture-systemes-centralises',
    level: 3, subject: 'fed',
    icon: '📡',
    title: 'Architecture des systèmes centralisés',
    subtitle: 'GTB, capteurs, actionneurs, types de signaux, linéarisation 4-20 mA',
    keywords: ['GTB', 'Capteur', 'Actionneur', 'Signal analogique', '4-20 mA'],
    physics: 'Une gestion technique du bâtiment (GTB) ne « voit » jamais directement une température ou une pression : elle reçoit un <strong>signal électrique</strong> (souvent un courant entre $4$ et $20$ mA) qu\'il faut <strong>convertir</strong> en grandeur physique exploitable — une opération de linéarisation que tout technicien doit savoir refaire à la main pour vérifier un capteur sur site.',

    cours: {
      intro: 'Un système centralisé de <strong>gestion technique du bâtiment (GTB)</strong> pilote automatiquement les équipements CVC, éclairage et sécurité d\'un bâtiment. Son architecture s\'organise en plusieurs niveaux : les <strong>capteurs</strong> (mesure : température, pression, débit, présence), les <strong>pré-actionneurs</strong> et <strong>actionneurs</strong> (action sur le procédé : vanne motorisée, variateur, contacteur), la <strong>centrale</strong> (automate qui traite l\'information et pilote les actionneurs selon une logique programmée), les <strong>réseaux de communication</strong> (bus qui relient tous ces éléments), et la <strong>supervision</strong> (interface qui permet à l\'exploitant de visualiser et paramétrer l\'installation).<br/><br/>Les capteurs transmettent leur mesure sous forme de <strong>signal</strong>, dont il existe trois grandes familles : le signal <strong>tout ou rien (TOR)</strong> (deux états seulement, ouvert/fermé, marche/arrêt), le signal <strong>analogique</strong> (une grandeur électrique continue proportionnelle à la mesure, par exemple $0$-$10$ V ou $4$-$20$ mA), et le signal <strong>numérique</strong> (information codée, transmise sur un bus de communication).<br/><br/>Le signal analogique <strong>$4$-$20$ mA</strong> est très répandu en instrumentation industrielle et tertiaire, car il permet de détecter un défaut de câblage (un courant de $0$ mA signale une rupture de ligne, jamais une mesure valide) — un avantage que n\'offre pas un signal $0$-$20$ mA. Pour exploiter cette mesure, l\'automate doit convertir le courant reçu en grandeur physique par une relation <strong>linéaire</strong>.',
      definitions: [
        { term: 'Capteur', def: 'Élément qui mesure une grandeur physique (température, pression, débit, présence) et la transforme en signal électrique exploitable par la centrale.' },
        { term: 'Pré-actionneur / actionneur', def: 'Élément qui agit physiquement sur le procédé sur ordre de la centrale : vanne motorisée, variateur de vitesse, contacteur, servomoteur de registre.' },
        { term: 'Signal analogique 4-20 mA', def: 'Signal électrique continu, proportionnel à la grandeur mesurée entre une valeur minimale ($4$ mA) et maximale ($20$ mA) — le décalage à $4$ mA (plutôt que $0$) permet de détecter un défaut de câblage.' },
        { term: 'Linéarisation d\'un signal', def: 'Conversion du courant mesuré $I$ (mA) en grandeur physique $X$, par une relation affine : $X = X_{\\min} + \\dfrac{I-4}{20-4} \\times (X_{\\max}-X_{\\min})$, avec $X_{\\min}$ et $X_{\\max}$ les bornes de mesure du capteur (données constructeur).' },
        { term: 'Supervision', def: 'Interface logicielle qui permet à l\'exploitant de visualiser en temps réel l\'état des capteurs et actionneurs, et de paramétrer les consignes de fonctionnement.' }
      ],
      method: {
        title: 'Linéariser un signal analogique 4-20 mA',
        steps: [
          '<strong>Relever les bornes de mesure</strong> du capteur $X_{\\min}$ et $X_{\\max}$ (fiche technique constructeur).',
          '<strong>Relever le courant mesuré</strong> $I$ (mA), toujours compris entre $4$ et $20$ mA en fonctionnement normal.',
          '<strong>Appliquer la relation linéaire</strong> $X = X_{\\min} + \\dfrac{I-4}{20-4} \\times (X_{\\max}-X_{\\min})$.',
          '<strong>Vérifier la cohérence</strong> : $I=4$ mA doit donner $X=X_{\\min}$, $I=20$ mA doit donner $X=X_{\\max}$.',
          '<strong>Repérer un défaut éventuel</strong> : un courant de $0$ mA (hors de la plage $4$-$20$ mA) signale une rupture de câblage, pas une mesure valide.'
        ]
      },
      example: {
        statement: 'Un capteur de température mesure entre $X_{\\min}=-10\\,°C$ et $X_{\\max}=50\\,°C$, transmis en $4$-$20$ mA. L\'automate mesure un courant $I=12$ mA.<br/><br/>Calculer la température correspondante.',
        steps: [
          'Étendue de mesure : $X_{\\max}-X_{\\min} = 50-(-10) = 60\\,°C$.',
          'Fraction du signal : $(I-4)/(20-4) = (12-4)/16 = 8/16 = 0{,}5$.',
          '$X = X_{\\min} + 0{,}5 \\times 60 = -10+30 = 20\\,°C$.'
        ],
        answer: '$X=20\\,°C$ : un courant de $12$ mA, exactement à mi-chemin entre $4$ et $20$ mA, correspond logiquement à la valeur médiane de la plage de mesure du capteur.'
      },
      formulas: [
        '$X = X_{\\min} + \\dfrac{I-4}{20-4} \\times (X_{\\max}-X_{\\min})$ (linéarisation d\'un signal 4-20 mA)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Architecture d\'un système GTB',
        title: 'Du capteur à la supervision, en passant par la centrale',
        description: 'Les capteurs transmettent leurs mesures à la centrale via un réseau de communication. La centrale traite l\'information et pilote les actionneurs. La supervision permet à l\'exploitant de visualiser et paramétrer l\'ensemble.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="gtb-graph-title gtb-graph-desc">
            <title id="gtb-graph-title">Architecture d'un systeme GTB</title>
            <desc id="gtb-graph-desc">Schema en boites. A gauche, capteurs. Au centre, centrale (automate) reliee aux capteurs et aux actionneurs par un reseau. A droite, actionneurs. En haut, supervision reliee a la centrale.</desc>

            <rect class="frame-line" x="190" y="90" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="120" text-anchor="middle">Centrale</text>

            <rect class="frame-line" x="20" y="90" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="75" y="120" text-anchor="middle">Capteurs</text>
            <line class="curve-main" x1="130" y1="115" x2="185" y2="115"></line>

            <rect class="frame-line" x="350" y="90" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="405" y="120" text-anchor="middle">Actionneurs</text>
            <line class="curve-main" x1="290" y1="115" x2="345" y2="115"></line>

            <rect class="frame-line" x="190" y="20" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="240" y="44" text-anchor="middle">Supervision</text>
            <line class="curve-main" x1="240" y1="60" x2="240" y2="85"></line>

            <text class="label-soft" x="240" y="175" text-anchor="middle">Réseau de communication (bus)</text>
          </svg>
        `,
        notes: [
          'Les <strong>capteurs</strong> (gauche) transmettent leurs mesures à la centrale via le réseau de communication.',
          'La <strong>centrale</strong> traite l\'information selon sa logique programmée et pilote les <strong>actionneurs</strong> (droite).',
          'La <strong>supervision</strong> (haut) offre une vue d\'ensemble à l\'exploitant, sans être indispensable au fonctionnement automatique de base.'
        ],
        reading: 'Suis le flux d\'information de gauche à droite (capteurs → centrale → actionneurs), et repère la supervision comme une couche additionnelle au-dessus de la centrale.',
        caption: 'Architecture générale d\'un système de gestion technique du bâtiment (GTB) centralisé.'
      },
      recap: [
        'Une architecture GTB combine <strong>capteurs</strong>, <strong>centrale</strong>, <strong>actionneurs</strong>, <strong>réseau</strong> et <strong>supervision</strong>.',
        'Trois familles de signaux : <strong>TOR</strong> (deux états), <strong>analogique</strong> (grandeur continue, ex. $4$-$20$ mA), <strong>numérique</strong> (bus).',
        'Le signal $4$-$20$ mA permet de détecter un défaut de câblage, contrairement à un $0$-$20$ mA.',
        'Linéarisation : $X = X_{\\min} + \\dfrac{I-4}{20-4}\\times(X_{\\max}-X_{\\min})$.',
        'Un courant de $0$ mA (hors plage $4$-$20$ mA) signale toujours un <strong>défaut</strong>, jamais une mesure physique valide.'
      ],
      piege: 'Le piège classique est d\'oublier le décalage de $4$ mA et d\'utiliser directement $I/20$ à la place de $(I-4)/16$ : cette erreur, fréquente chez les débutants, fausse totalement le résultat (à $I=4$ mA, la formule erronée donnerait $X_{\\min}+0{,}2\\times(X_{\\max}-X_{\\min})$ au lieu de $X_{\\min}$ exactement). Attention aussi à ne pas confondre le rôle du réseau de communication (transport de l\'information) avec celui de la centrale (traitement et décision) : un réseau qui fonctionne parfaitement ne garantit rien si la logique programmée dans la centrale est erronée.'
    },

    quiz: [
      {
        q: 'Dans une architecture GTB, le rôle de la centrale est de :',
        options: [
          'Mesurer directement les grandeurs physiques du bâtiment',
          'Traiter l\'information reçue des capteurs et piloter les actionneurs selon une logique programmée',
          'Remplacer entièrement les capteurs et actionneurs',
          'Afficher uniquement une interface graphique'
        ],
        answer: 1,
        correction: 'La centrale (automate) reçoit l\'information des capteurs, la traite selon sa logique programmée, et pilote en conséquence les actionneurs — les capteurs mesurent, la centrale décide.'
      },
      {
        q: 'L\'avantage du signal 4-20 mA par rapport à un signal 0-20 mA est de permettre :',
        options: [
          'Une mesure deux fois plus précise',
          'La détection d\'un défaut de câblage, un courant de 0 mA n\'étant jamais une mesure valide',
          'Un fonctionnement sans capteur',
          'De supprimer le besoin de linéarisation'
        ],
        answer: 1,
        correction: 'Comme la plage utile commence à $4$ mA, un courant de $0$ mA (hors plage) indique immédiatement une rupture de câblage ou une panne, ce qu\'un signal $0$-$20$ mA ne permettrait pas de distinguer d\'une mesure valide à zéro.'
      },
      {
        q: 'Pour un capteur $4$-$20$ mA mesurant entre $0$ et $100\\,\\%$, un courant $I=4$ mA correspond à :',
        options: [
          '$0\\,\\%$',
          '$50\\,\\%$',
          '$100\\,\\%$',
          'Un défaut de câblage'
        ],
        answer: 0,
        correction: 'La borne basse du signal ($4$ mA) correspond toujours à la borne basse de la plage de mesure ($X_{\\min}$), ici $0\\,\\%$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une sonde de température de départ chauffage',
          'un capteur de pression différentielle sur un filtre de CTA',
          'une sonde d\'humidité relative de reprise d\'air',
          'un capteur de niveau d\'un ballon tampon'
        ]);
        const Xmin = pick([-10, 0, 5]);
        const Xmax = pick([50, 80, 100]);
        const I = randFloat(5, 19, 1);
        const X = parseFloat((Xmin + ((I - 4) / 16) * (Xmax - Xmin)).toFixed(1));
        return {
          statement: `Dans ${contexte}, la plage de mesure du capteur est $X_{\\min}=${Xmin}$ à $X_{\\max}=${Xmax}$ (signal $4$-$20$ mA). L'automate mesure un courant $I=${fr(I, 1)}$ mA.<br/><br/>Calcule la grandeur physique $X$ correspondante (arrondie au dixième).`,
          answer: X,
          tolerance: 0.5,
          unit: '',
          hint: 'Applique $X = X_{\\min} + \\dfrac{I-4}{16}\\times(X_{\\max}-X_{\\min})$.',
          solution: [
            `Étendue de mesure : $X_{\\max}-X_{\\min} = ${Xmax}-(${Xmin}) = ${Xmax - Xmin}$.`,
            `Fraction du signal : $(${fr(I, 1)}-4)/16 \\approx ${fr((I - 4) / 16, 3)}$.`,
            `$X = ${Xmin} + ${fr((I - 4) / 16, 3)} \\times ${Xmax - Xmin} \\approx ${fr(X, 1)}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une centrale GTB reçoit deux signaux d\'une CTA : une sonde de température de soufflage ($X_{\\min}=0\\,°C$, $X_{\\max}=40\\,°C$, courant mesuré $I_1=14{,}4$ mA) et un capteur de pression différentielle de filtre ($X_{\\min}=0$ Pa, $X_{\\max}=500$ Pa, courant mesuré $I_2=6{,}4$ mA). Le seuil d\'alarme « filtre encrassé » est fixé à $300$ Pa.',
      tasks: [
        'Calculer la température de soufflage $X_1$ correspondant à $I_1=14{,}4$ mA.',
        'Calculer la perte de charge du filtre $X_2$ correspondant à $I_2=6{,}4$ mA.',
        'L\'alarme « filtre encrassé » doit-elle se déclencher dans ces conditions ? Justifier.',
        'Si le courant mesuré sur la sonde de pression chute brutalement à $0$ mA, que doit en conclure l\'automate ? Justifier en une phrase.'
      ],
      solutions: [
        '$X_1 = 0 + \\dfrac{14{,}4-4}{16}\\times(40-0) = \\dfrac{10{,}4}{16}\\times40 = 0{,}65\\times40 = 26\\,°C$.',
        '$X_2 = 0 + \\dfrac{6{,}4-4}{16}\\times(500-0) = \\dfrac{2{,}4}{16}\\times500 = 0{,}15\\times500 = 75$ Pa.',
        'Non : la perte de charge mesurée ($75$ Pa) est très inférieure au seuil d\'alarme ($300$ Pa), le filtre n\'est pas encrassé.',
        'Un courant de $0$ mA est hors de la plage valide $4$-$20$ mA : l\'automate doit conclure à un <strong>défaut de câblage ou une panne du capteur</strong>, et non à une pression nulle — c\'est précisément l\'intérêt du signal $4$-$20$ mA de permettre cette distinction.'
      ],
      finalAnswer: 'Température de soufflage $26\\,°C$, perte de charge filtre $75$ Pa (pas d\'alarme) — et un courant de $0$ mA signalerait un défaut de câblage, jamais une mesure physique valide.'
    },

    evaluation: {
      title: 'Évaluation — Architecture des systèmes centralisés',
      duration: '20 min',
      questions: [
        {
          statement: 'Un capteur $4$-$20$ mA mesure entre $0$ et $10$ bar. Pour $I=10$ mA, calculer la pression correspondante (en bar, arrondie au dixième).',
          type: 'numeric',
          answer: 3.75,
          tolerance: 0.2,
          unit: 'bar',
          points: 3,
          correction: '$X = 0+\\dfrac{10-4}{16}\\times10 = \\dfrac{6}{16}\\times10 = 3{,}75$ bar.'
        },
        {
          statement: 'Un signal tout ou rien (TOR) se caractérise par :',
          type: 'multiple-choice',
          options: [
            'Une infinité de valeurs possibles',
            'Deux états seulement, par exemple marche/arrêt ou ouvert/fermé',
            'Un signal transmis exclusivement en 4-20 mA',
            'Une valeur toujours comprise entre 0 et 10 V'
          ],
          answer: 1,
          points: 2,
          correction: 'Le signal TOR ne prend que deux états discrets (marche/arrêt, ouvert/fermé), à la différence d\'un signal analogique qui varie continûment.'
        },
        {
          statement: 'Dans l\'architecture d\'une GTB, un pré-actionneur (par exemple un contacteur) a pour fonction de :',
          type: 'multiple-choice',
          options: [
            'Mesurer une grandeur physique',
            'Commander la mise sous tension d\'un actionneur de plus forte puissance, sur ordre de la centrale',
            'Afficher les données sur la supervision',
            'Remplacer le réseau de communication'
          ],
          answer: 1,
          points: 2,
          correction: 'Un pré-actionneur (contacteur, relais) commute l\'alimentation d\'un actionneur de puissance plus importante, sur ordre de la centrale, sans avoir à faire transiter cette puissance par l\'automate lui-même.'
        },
        {
          statement: 'Pourquoi la plage utile d\'un signal analogique commence-t-elle à $4$ mA plutôt qu\'à $0$ mA ?',
          type: 'multiple-choice',
          options: [
            'Pour des raisons esthétiques uniquement',
            'Pour permettre de distinguer un défaut de câblage (0 mA) d\'une mesure valide en bas d\'échelle',
            'Parce que les capteurs ne peuvent physiquement pas descendre en dessous de 4 mA',
            'Parce que la loi impose ce seuil pour tous les capteurs'
          ],
          answer: 1,
          points: 3,
          correction: 'En réservant la plage $4$-$20$ mA aux mesures valides, un courant de $0$ mA devient sans ambiguïté un signal de défaut (rupture de câblage, panne), ce qu\'un signal démarrant à $0$ mA ne permettrait pas.'
        }
      ]
    }
  });
