/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-oxydoreduction.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-oxydoreduction',
    level: 2, subject: 'physique',
    icon: '🔋',
    title: 'Oxydoréduction et piles électrochimiques',
    subtitle: 'Couples oxydant/réducteur, demi-équations électroniques, pile Daniell, force électromotrice, quantité d\'électricité',
    keywords: ['Oxydoréduction', 'Couple redox', 'Pile', 'Force électromotrice', 'Loi de Faraday'],
    physics: 'Les piles électrochimiques alimentent une immense variété d\'appareils (montres, télécommandes, véhicules électriques), et les lois de l\'électrochimie permettent de dimensionner les procédés industriels d\'électrolyse : production d\'aluminium, galvanoplastie, recharge des batteries.',

    cours: {
      intro: 'Une réaction d\'<strong>oxydoréduction</strong> est un transfert d\'électrons entre deux couples oxydant/réducteur : le réducteur d\'un couple cède des électrons, immédiatement captés par l\'oxydant de l\'autre couple. À aucun moment ces électrons n\'existent libres en solution.<br/><br/>Une <strong>pile électrochimique</strong> exploite ce transfert en le forçant à passer par un circuit extérieur : les deux couples sont séparés dans deux demi-piles, reliées par un <strong>pont salin</strong> (qui ferme le circuit et maintient l\'électroneutralité des solutions) et par un circuit électrique extérieur, dans lequel circulent les électrons cédés par le réducteur.<br/><br/>Le fonctionnement d\'une pile obéit aux <strong>lois de Faraday</strong> : la quantité d\'électricité $Q$ ayant circulé est directement reliée à la quantité de matière $n$ transformée à chaque électrode, via le nombre d\'électrons échangés $z$ et la constante de Faraday $F$.',
      definitions: [
        { term: 'Couple oxydant/réducteur (Ox/Red)', def: 'Deux espèces reliées par l\'échange d\'électrons : $Ox+n\\,e^-\\rightleftharpoons Red$. L\'oxydant $Ox$ capte des électrons (il est réduit), le réducteur $Red$ en cède (il est oxydé).' },
        { term: 'Pile électrochimique', def: 'Dispositif qui convertit l\'énergie chimique d\'une réaction d\'oxydoréduction spontanée en énergie électrique, grâce à deux demi-piles reliées par un pont salin et un circuit extérieur.' },
        { term: 'Force électromotrice (fem, $E$)', def: 'Tension mesurée aux bornes d\'une pile lorsqu\'elle ne débite aucun courant (à vide). Elle est caractéristique de la pile utilisée, en volts (V).' },
        { term: 'Constante de Faraday ($F$)', def: 'Charge électrique portée par une mole d\'électrons : $F\\approx96\\,500$ C/mol. Elle relie la quantité d\'électricité $Q$ à la quantité de matière $n$ transformée : $Q=nzF$.' }
      ],
      method: {
        title: 'Analyser une pile électrochimique en 3 étapes',
        steps: [
          '<strong>Identifier</strong> les deux couples Ox/Red en présence, écrire leurs demi-équations électroniques, puis en déduire l\'équation globale de la réaction (en égalisant le nombre d\'électrons échangés dans les deux demi-équations).',
          '<strong>Repérer la polarité</strong> : le réducteur le plus fort constitue l\'anode (pôle $-$, où a lieu l\'oxydation), l\'oxydant le plus fort constitue la cathode (pôle $+$, où a lieu la réduction). Dans le circuit extérieur, les électrons circulent de l\'anode vers la cathode — en sens opposé au sens conventionnel du courant.',
          'Pour un calcul de quantité de matière ou de durée de fonctionnement, utiliser $Q=I\\Delta t=nzF$ (avec $n$ la quantité de matière échangée à l\'électrode considérée, $z$ le nombre d\'électrons échangés par la demi-équation, $F\\approx96\\,500$ C/mol).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Pile électrochimique (pile Daniell)',
        title: 'Structure d\'une pile Daniell : demi-piles, pont salin, circuit extérieur',
        description: 'Une pile Daniell associe une demi-pile zinc/zinc(II) et une demi-pile cuivre/cuivre(II), reliées par un pont salin. Le circuit extérieur permet aux électrons cédés par le zinc de rejoindre la cathode de cuivre.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="pile-title pile-desc">
            <title id="pile-title">Schema d'une pile Daniell</title>
            <desc id="pile-desc">Deux becherscontienant chacun une solution sont relies par un pont salin en arc au-dessus d'eux, et par un circuit electrique exterieur passant par un voltmetre. Le becher de gauche contient une electrode de zinc plongee dans une solution d'ions zinc deux plus, etiquetee pole negatif. Le becher de droite contient une electrode de cuivre plongee dans une solution d'ions cuivre deux plus, etiquetee pole positif. Une fleche sur le fil superieur, pres de l'electrode de zinc, indique le sens de circulation des electrons vers la droite, en direction de l'electrode de cuivre.</desc>

            <defs>
              <marker id="arrow-tle-pile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- bechers -->
            <rect class="frame-line" x="50" y="150" width="150" height="100" fill="var(--diagram-soft)"></rect>
            <rect class="frame-line" x="360" y="150" width="150" height="100" fill="var(--diagram-soft)"></rect>
            <text class="label-soft" x="125" y="235" text-anchor="middle">Zn²⁺</text>
            <text class="label-soft" x="435" y="235" text-anchor="middle">Cu²⁺</text>

            <!-- pont salin -->
            <path class="frame-line" fill="none" d="M200,150 Q280,95 360,150"></path>
            <text class="tick-label" x="280" y="83" text-anchor="middle">Pont salin</text>

            <!-- electrodes -->
            <rect x="120" y="90" width="10" height="120" fill="var(--diagram-accent)"></rect>
            <rect x="430" y="90" width="10" height="120" fill="var(--diagram-accent)"></rect>
            <text class="annotation-label" x="125" y="78" text-anchor="middle">Zn</text>
            <text class="annotation-label" x="435" y="78" text-anchor="middle">Cu</text>
            <text class="tick-label" x="105" y="48" text-anchor="end">−</text>
            <text class="tick-label" x="455" y="48" text-anchor="start">+</text>

            <!-- circuit exterieur -->
            <line class="frame-line" x1="125" y1="90" x2="125" y2="50"></line>
            <line class="frame-line" x1="125" y1="50" x2="435" y2="50"></line>
            <line class="frame-line" x1="435" y1="50" x2="435" y2="90"></line>

            <!-- voltmetre -->
            <circle class="frame-line" cx="280" cy="50" r="16" fill="var(--diagram-soft)"></circle>
            <text class="annotation-label" x="280" y="55" text-anchor="middle">V</text>

            <!-- fleche electrons -->
            <line class="curve-main" x1="160" y1="50" x2="205" y2="50" marker-end="url(#arrow-tle-pile)"></line>
            <text class="tick-label" x="182" y="38" text-anchor="middle">e⁻</text>
          </svg>
        `,
        notes: [
          'À l\'électrode de zinc (anode, pôle <strong>−</strong>), l\'oxydation $Zn\\rightarrow Zn^{2+}+2\\,e^-$ libère des électrons dans le circuit extérieur.',
          'À l\'électrode de cuivre (cathode, pôle <strong>+</strong>), la réduction $Cu^{2+}+2\\,e^-\\rightarrow Cu$ consomme ces électrons : du cuivre métallique se dépose.',
          'Le pont salin ferme le circuit électrique à travers les solutions et maintient leur électroneutralité, sans jamais laisser passer d\'électrons.'
        ],
        reading: 'Suis les électrons depuis l\'électrode de zinc (pôle −, à gauche) jusqu\'à l\'électrode de cuivre (pôle +, à droite) en passant par le circuit extérieur et le voltmètre ; le pont salin, lui, ferme le circuit à travers les solutions.',
        caption: 'Pile Daniell : les électrons cédés par l\'oxydation du zinc (anode, pôle −) traversent le circuit extérieur jusqu\'à l\'électrode de cuivre (cathode, pôle +), où ils réduisent les ions Cu²⁺.'
      },
      example: {
        statement: 'Une pile Daniell débite un courant constant $I=0{,}50$ A pendant $\\Delta t=2{,}0$ h. On donne $F\\approx96\\,500$ C/mol et la masse molaire du cuivre $M(Cu)=63{,}5$ g/mol. À la cathode, la demi-équation est $Cu^{2+}+2\\,e^-\\rightarrow Cu$ ($z=2$).<br/><br/>Calculer la quantité d\'électricité $Q$ ayant circulé, puis la masse de cuivre déposée à la cathode.',
        steps: [
          'Quantité d\'électricité : $Q=I\\Delta t=0{,}50\\times(2{,}0\\times3\\,600)=0{,}50\\times7\\,200=3\\,600$ C.',
          'Relation charge/matière (loi de Faraday) : $Q=nzF$, donc $n=\\dfrac{Q}{zF}=\\dfrac{3\\,600}{2\\times96\\,500}=\\dfrac{3\\,600}{193\\,000}\\approx0{,}0187$ mol.',
          'Masse de cuivre déposée : $m=n\\times M(Cu)=0{,}0187\\times63{,}5\\approx1{,}18$ g.'
        ],
        answer: '$Q=3\\,600$ C et $m\\approx1{,}18$ g de cuivre déposé. Cette relation directe entre courant, durée et masse déposée est exploitée en galvanoplastie pour contrôler précisément l\'épaisseur d\'un dépôt métallique.'
      },
      formulas: [
        'Demi-équation électronique : $Ox+n\\,e^-\\rightleftharpoons Red$',
        'Quantité d\'électricité : $Q=I\\Delta t$ (en coulombs, C)',
        'Loi de Faraday : $Q=nzF$, avec $F\\approx96\\,500$ C/mol',
        'Quantité de matière transformée : $n=\\dfrac{I\\Delta t}{zF}$',
        'Sens des électrons dans le circuit extérieur : de l\'anode (pôle −) vers la cathode (pôle +)'
      ],
      recap: [
        'Dans une pile, l\'<strong>oxydation</strong> a lieu à l\'anode (pôle −), la <strong>réduction</strong> a lieu à la cathode (pôle +) : c\'est l\'inverse de la convention utilisée en électrolyse forcée.',
        'Les électrons ne traversent <strong>jamais</strong> le pont salin ni la solution : ils circulent uniquement dans le circuit extérieur (fils, appareils), de l\'anode vers la cathode.',
        'La loi de Faraday $Q=nzF$ relie directement une grandeur électrique ($Q$, mesurable avec un ampèremètre et une durée) à une grandeur chimique ($n$, la quantité de matière transformée à une électrode).',
        'Le nombre d\'électrons échangés $z$ dépend du couple considéré : il doit être déterminé à partir de la demi-équation électronique avant tout calcul.'
      ],
      piege: 'Une erreur fréquente est d\'inverser le sens de circulation des électrons et celui du courant conventionnel : dans le circuit extérieur d\'une pile, les électrons vont de l\'anode (−) vers la cathode (+), alors que le courant conventionnel est orienté dans le sens opposé, de la cathode vers l\'anode. Attention également à ne jamais oublier le nombre d\'électrons échangés $z$ dans la loi de Faraday $Q=nzF$ : l\'omettre revient à confondre la quantité d\'électricité avec la quantité de matière.'
    },

    quiz: [
      {
        q: 'Dans une pile en fonctionnement, dans quel sens circulent les électrons à travers le circuit extérieur (les fils) ?',
        options: [
          'De l\'anode (pôle −) vers la cathode (pôle +)',
          'De la cathode (pôle +) vers l\'anode (pôle −)',
          'Uniquement à travers le pont salin',
          'Les électrons ne circulent jamais dans le circuit extérieur'
        ],
        answer: 0,
        correction: 'Les électrons sont libérés par l\'oxydation à l\'anode (pôle −), puis traversent le circuit extérieur pour rejoindre la cathode (pôle +), où ils sont consommés par la réduction.'
      },
      {
        q: 'À la cathode (pôle +) d\'une pile en fonctionnement, quelle réaction a lieu ?',
        options: [
          'Une réduction : l\'oxydant capte des électrons',
          'Une oxydation : le réducteur cède des électrons',
          'Aucune réaction, c\'est un simple point de contact électrique',
          'Cela dépend uniquement de la composition du pont salin'
        ],
        answer: 0,
        correction: 'La cathode est le siège de la réduction : l\'oxydant du couple correspondant y capte les électrons apportés par le circuit extérieur.'
      },
      {
        q: 'Une pile débite un courant $I=0{,}80$ A pendant $\\Delta t=25$ min. Calculer la quantité d\'électricité $Q$ ayant circulé.',
        options: [
          '$Q=1\\,200$ C',
          '$Q=20$ C',
          '$Q=2\\,000$ C',
          '$Q=48$ C'
        ],
        answer: 0,
        correction: '$Q=I\\Delta t=0{,}80\\times(25\\times60)=0{,}80\\times1\\,500=1\\,200$ C. Attention à bien convertir la durée en secondes avant le calcul.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var F = 96500;
        var typeExo = pick(['quantiteElectricite', 'quantiteMatiere']);
        var contexte = pick([
          'une pile bouton de montre',
          'une batterie de véhicule électrique en charge',
          'un accumulateur de laboratoire',
          'une pile Daniell de travaux pratiques',
          'une cellule électrochimique industrielle'
        ]);

        if (typeExo === 'quantiteElectricite') {
          var I1 = pick([0.2, 0.5, 1, 1.5, 2, 3]);
          var dtH = pick([0.5, 1, 1.5, 2, 3, 4]);
          var Q1 = Math.round(I1 * dtH * 3600);
          return {
            statement: 'Dans ' + contexte + ', un courant constant $I=' + fr(I1, 1) + '$ A circule pendant $\\Delta t=' + fr(dtH, 1) + '$ h.<br/><br/>Calcule la quantité d\'électricité $Q$ ayant circulé (en C, arrondie à l\'unité).',
            answer: Q1,
            tolerance: Math.max(10, Math.round(Q1 * 0.03)),
            unit: 'C',
            hint: 'Convertis d\'abord $\\Delta t$ en secondes, puis utilise $Q=I\\Delta t$.',
            solution: [
              'Conversion de la durée : $\\Delta t=' + fr(dtH, 1) + '\\times3\\,600=' + fr(Math.round(dtH * 3600)) + '$ s.',
              'Quantité d\'électricité : $Q=I\\Delta t=' + fr(I1, 1) + '\\times' + fr(Math.round(dtH * 3600)) + '$.',
              'Résultat : $Q\\approx' + fr(Q1) + '$ C.'
            ]
          };
        } else {
          var I2 = pick([0.5, 1, 1.5, 2]);
          var dtMin = pick([10, 15, 20, 30, 45, 60]);
          var z = pick([1, 2, 3]);
          var dtS = dtMin * 60;
          var Q2 = I2 * dtS;
          var nMmol = parseFloat(((Q2 / (z * F)) * 1000).toFixed(2));
          return {
            statement: 'Dans ' + contexte + ', un courant constant $I=' + fr(I2, 1) + '$ A circule pendant $\\Delta t=' + dtMin + '$ min. Le couple électroactif à l\'électrode étudiée échange $z=' + z + '$ électron(s) par demi-équation ($F\\approx96\\,500$ C/mol).<br/><br/>Calcule la quantité de matière $n$ transformée à cette électrode (en mmol, arrondie au centième).',
            answer: nMmol,
            tolerance: Math.max(0.1, parseFloat((nMmol * 0.03).toFixed(2))),
            unit: 'mmol',
            hint: 'Calcule $Q=I\\Delta t$, puis $n=\\dfrac{Q}{zF}$ (en mol, à convertir en mmol).',
            solution: [
              'Quantité d\'électricité : $Q=I\\Delta t=' + fr(I2, 1) + '\\times' + fr(dtS) + '=' + fr(Q2) + '$ C.',
              'Loi de Faraday : $n=\\dfrac{Q}{zF}=\\dfrac{' + fr(Q2) + '}{' + z + '\\times96\\,500}$.',
              'Résultat : $n\\approx' + fr(nMmol, 2) + '$ mmol.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une pile bouton argent-zinc, utilisée en horlogerie, débite un courant constant $I=0{,}30$ A pendant $\\Delta t=45$ min. À la cathode, la demi-équation est $Ag^++e^-\\rightarrow Ag$ ($z=1$). On donne $F\\approx96\\,500$ C/mol et $M(Ag)=107{,}9$ g/mol.',
      tasks: [
        'Calculer la quantité d\'électricité $Q$ ayant circulé pendant cette durée.',
        'En déduire la quantité de matière $n$ d\'argent déposée à la cathode.',
        'Calculer la masse d\'argent déposée, et commenter l\'ordre de grandeur obtenu pour une pile bouton.'
      ],
      solutions: [
        '$Q=I\\Delta t=0{,}30\\times(45\\times60)=0{,}30\\times2\\,700=810$ C.',
        '$n=\\dfrac{Q}{zF}=\\dfrac{810}{1\\times96\\,500}\\approx0{,}00839$ mol, soit environ $8{,}39$ mmol.',
        '$m=n\\times M(Ag)=0{,}00839\\times107{,}9\\approx0{,}906$ g.'
      ],
      finalAnswer: '$Q=810$ C, $n\\approx8{,}39$ mmol et $m\\approx0{,}91$ g d\'argent déposé. Cette masse, de l\'ordre du gramme, est cohérente avec la très faible quantité de matière active contenue dans une pile bouton — ce qui explique sa durée de vie limitée malgré sa fem stable.'
    },

    evaluation: {
      title: 'Évaluation — Oxydoréduction et piles électrochimiques',
      duration: '30 min',
      questions: [
        {
          statement: 'Un courant constant $I=1{,}2$ A circule pendant $\\Delta t=10$ min. Calculer la quantité d\'électricité $Q$ (en C).',
          type: 'numeric',
          answer: 720,
          tolerance: 10,
          unit: 'C',
          points: 2,
          correction: '$Q=I\\Delta t=1{,}2\\times(10\\times60)=1{,}2\\times600=720$ C.'
        },
        {
          statement: 'Un couple oxydant/réducteur est représenté par la demi-équation électronique :',
          type: 'multiple-choice',
          options: [
            '$Ox+n\\,e^-\\rightleftharpoons Red$',
            '$Ox\\rightleftharpoons Red+n\\,e^-$ uniquement dans un sens',
            '$Ox+Red\\rightleftharpoons n\\,e^-$',
            '$Ox=Red$ (sans échange d\'électrons)'
          ],
          answer: 0,
          points: 2,
          correction: 'Un couple oxydant/réducteur échange des électrons selon $Ox+n\\,e^-\\rightleftharpoons Red$ : l\'oxydant capte des électrons pour former le réducteur conjugué (sens direct), ou inversement (sens indirect).'
        },
        {
          statement: 'Une quantité d\'électricité $Q=965$ C a circulé à travers une électrode où $z=2$ électrons sont échangés par demi-équation ($F\\approx96\\,500$ C/mol). Calculer la quantité de matière $n$ transformée (en mmol).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.3,
          unit: 'mmol',
          points: 3,
          correction: '$n=\\dfrac{Q}{zF}=\\dfrac{965}{2\\times96\\,500}=\\dfrac{965}{193\\,000}=0{,}005$ mol $=5$ mmol.'
        },
        {
          statement: 'Dans une pile, la cathode est le pôle :',
          type: 'multiple-choice',
          options: [
            'Négatif, siège de l\'oxydation',
            'Positif, siège de la réduction',
            'Négatif, siège de la réduction',
            'Positif, siège de l\'oxydation'
          ],
          answer: 1,
          points: 2,
          correction: 'La cathode est le pôle positif (+) d\'une pile, où a lieu la réduction de l\'oxydant. L\'anode, pôle négatif (−), est le siège de l\'oxydation.'
        },
        {
          statement: 'Le rôle du pont salin dans une pile électrochimique est de :',
          type: 'multiple-choice',
          options: [
            'Laisser passer les électrons entre les deux demi-piles',
            'Fermer le circuit électrique à travers les solutions et maintenir leur électroneutralité, sans laisser passer les électrons',
            'Augmenter la force électromotrice de la pile',
            'Empêcher tout courant de circuler'
          ],
          answer: 1,
          points: 2,
          correction: 'Le pont salin permet la migration des ions entre les deux demi-piles, ce qui ferme le circuit électrique et maintient l\'électroneutralité des solutions — mais les électrons, eux, ne le traversent jamais : ils circulent uniquement dans le circuit extérieur.'
        }
      ]
    }
  });
