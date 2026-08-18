/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-oxydoreduction.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-oxydoreduction',
    level: 2, subject: 'physique',
    icon: '🔋',
    title: 'Oxydoréduction et piles',
    subtitle: 'Couples oxydant/réducteur, demi-équations électroniques, pile électrochimique, force électromotrice',
    keywords: ['Oxydant', 'Réducteur', 'Pile', 'Force électromotrice', 'Faraday'],
    physics: 'Les réactions d\'oxydoréduction sont au cœur du fonctionnement des piles et batteries qui alimentent nos appareils, de la protection contre la corrosion des structures métalliques, et de nombreux procédés industriels comme l\'électrolyse ou le traitement de surface.',

    cours: {
      intro: 'Une réaction d\'oxydoréduction est un <strong>transfert d\'électrons</strong> entre deux espèces chimiques. L\'espèce qui <strong>cède</strong> des électrons est le <strong>réducteur</strong>, celle qui les <strong>capte</strong> est l\'<strong>oxydant</strong>. Comme pour les couples acide/base, un couple oxydant/réducteur $Ox/Red$ est décrit par une <strong>demi-équation électronique</strong> : $Ox + n\\,e^- \\rightleftharpoons Red$.<br/><br/>Lorsque deux couples $Ox_1/Red_1$ et $Ox_2/Red_2$ sont mis en présence, une réaction spontanée peut avoir lieu : le réducteur du couple le plus fort cède ses électrons à l\'oxydant de l\'autre couple. Si les deux demi-réactions sont <strong>séparées physiquement</strong> et reliées par un circuit électrique, ce transfert d\'électrons peut produire un <strong>courant électrique</strong> : c\'est le principe d\'une <strong>pile</strong>.<br/><br/>La <strong>force électromotrice</strong> (f.é.m.) $E$ d\'une pile, exprimée en volts, mesure sa capacité à faire circuler ce courant : $E = E_{cathode} - E_{anode}$.',
      definitions: [
        { term: 'Couple oxydant/réducteur', def: 'Deux espèces $Ox$ et $Red$ reliées par une demi-équation électronique $Ox + n\\,e^- \\rightleftharpoons Red$. L\'oxydant $Ox$ capte des électrons, le réducteur $Red$ en cède.' },
        { term: 'Pile électrochimique', def: 'Système constitué de deux demi-piles (chacune formée d\'une électrode plongée dans une solution contenant un couple $Ox/Red$), reliées par un <strong>pont salin</strong> et par un circuit électrique extérieur.' },
        { term: 'Anode / Cathode', def: 'Dans une pile, l\'<strong>anode</strong> est l\'électrode où se produit l\'<strong>oxydation</strong> (le réducteur cède ses électrons) : c\'est le pôle <strong>négatif</strong>. La <strong>cathode</strong> est l\'électrode où se produit la <strong>réduction</strong> : c\'est le pôle <strong>positif</strong>.' },
        { term: 'Force électromotrice (f.é.m.) $E$', def: 'Tension mesurée aux bornes de la pile en circuit ouvert, en volts (V) : $E = E_{cathode} - E_{anode}$, toujours positive pour une pile qui fonctionne dans son sens spontané.' }
      ],
      method: {
        title: 'Établir l\'équation de fonctionnement d\'une pile en 3 étapes',
        steps: [
          '<strong>Écrire les deux demi-équations électroniques</strong>, l\'une en sens de réduction (à la cathode), l\'autre en sens d\'oxydation (à l\'anode), en identifiant le couple $Ox/Red$ de chaque électrode.',
          '<strong>Équilibrer les électrons échangés</strong> en multipliant chaque demi-équation par un coefficient si nécessaire, pour que le nombre d\'électrons cédés soit égal au nombre d\'électrons captés.',
          '<strong>Additionner les deux demi-équations</strong> (les électrons s\'éliminent) pour obtenir l\'équation-bilan de la pile, et calculer sa f.é.m. $E = E_{cathode} - E_{anode}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Pile électrochimique (pile Daniell)',
        title: 'Fonctionnement d\'une pile Zn/Cu : circulation des électrons et pont salin',
        description: 'Deux demi-piles (Zn/Zn²⁺ et Cu/Cu²⁺) sont reliées par un pont salin et par un circuit extérieur comportant un voltmètre. Les électrons circulent dans le fil, de l\'électrode négative (anode, oxydation) vers l\'électrode positive (cathode, réduction).',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="pile-title pile-desc">
            <title id="pile-title">Schema d'une pile electrochimique Zinc-Cuivre</title>
            <desc id="pile-desc">Deux becher contiennent chacun une electrode plongee dans une solution. Le becher de gauche contient une electrode de zinc dans une solution de sulfate de zinc, le becher de droite une electrode de cuivre dans une solution de sulfate de cuivre. Les deux electrodes sont reliees en haut par un fil passant par un voltmetre. Une fleche sur le fil, au dessus du becher de gauche, indique le sens de circulation des electrons de l'electrode de zinc vers l'electrode de cuivre. Un pont salin en forme d'arc relie les deux solutions sous le fil. L'electrode de zinc porte l'etiquette borne negative et l'electrode de cuivre l'etiquette borne positive.</desc>

            <defs>
              <marker id="arrow-tle-pile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- becher 1 (gauche, Zn) -->
            <path class="frame-line" d="M70,150 L70,260 L230,260 L230,150" fill="none"></path>
            <line class="guide-line" x1="70" y1="165" x2="230" y2="165"></line>

            <!-- becher 2 (droite, Cu) -->
            <path class="frame-line" d="M330,150 L330,260 L490,260 L490,150" fill="none"></path>
            <line class="guide-line" x1="330" y1="165" x2="490" y2="165"></line>

            <!-- electrode + fil de gauche (Zn) -->
            <line class="curve-main" x1="150" y1="70" x2="150" y2="240"></line>
            <!-- electrode + fil de droite (Cu) -->
            <line class="curve-main" x1="410" y1="70" x2="410" y2="240"></line>

            <!-- fil horizontal superieur avec voltmetre -->
            <line class="curve-main" x1="150" y1="70" x2="245" y2="70"></line>
            <line class="curve-main" x1="315" y1="70" x2="410" y2="70"></line>
            <circle class="frame-line" cx="280" cy="70" r="20" fill="none"></circle>
            <text class="tick-label" x="280" y="75" text-anchor="middle">V</text>

            <!-- fleche de sens de circulation des electrons -->
            <line class="curve-main" x1="175" y1="50" x2="225" y2="50" marker-end="url(#arrow-tle-pile)"></line>
            <text class="annotation-label" x="200" y="38" text-anchor="middle">e⁻</text>

            <!-- pont salin -->
            <path class="frame-line" d="M190,150 Q280,95 370,150" fill="none"></path>
            <line class="frame-line" x1="190" y1="150" x2="190" y2="165"></line>
            <line class="frame-line" x1="370" y1="150" x2="370" y2="165"></line>
            <text class="label-soft" x="280" y="112" text-anchor="middle">Pont salin</text>

            <!-- etiquettes electrodes -->
            <text class="tick-label" x="120" y="105" text-anchor="end">Zn</text>
            <text class="tick-label" x="108" y="60" text-anchor="end">borne −</text>
            <text class="tick-label" x="440" y="105" text-anchor="start">Cu</text>
            <text class="tick-label" x="452" y="60" text-anchor="start">borne +</text>

            <!-- etiquettes solutions -->
            <text class="tick-label" x="150" y="220" text-anchor="middle">Zn²⁺(aq)</text>
            <text class="tick-label" x="410" y="220" text-anchor="middle">Cu²⁺(aq)</text>

            <!-- legendes bechers -->
            <text class="label-soft" x="150" y="285" text-anchor="middle">Demi-pile Zn²⁺/Zn (anode)</text>
            <text class="label-soft" x="410" y="285" text-anchor="middle">Demi-pile Cu²⁺/Cu (cathode)</text>
          </svg>
        `,
        notes: [
          'À l\'électrode de <strong>zinc</strong> (anode, pôle −), une <strong>oxydation</strong> se produit : $Zn \\rightarrow Zn^{2+} + 2\\,e^-$. Le zinc est le réducteur le plus fort des deux, il cède ses électrons.',
          'À l\'électrode de <strong>cuivre</strong> (cathode, pôle +), une <strong>réduction</strong> se produit : $Cu^{2+} + 2\\,e^- \\rightarrow Cu$.',
          'Le <strong>pont salin</strong> assure la neutralité électrique des solutions en laissant circuler des ions, tandis que les <strong>électrons</strong> circulent uniquement dans le fil extérieur, de l\'anode vers la cathode.'
        ],
        reading: 'Repère les deux électrodes plongées dans chaque solution, suis le fil du haut à travers le voltmètre pour voir le sens de circulation des électrons, puis repère le pont salin qui relie les deux solutions.',
        caption: 'Pile Zinc-Cuivre (pile Daniell) : les électrons circulent dans le circuit extérieur de l\'électrode de zinc (anode, oxydation) vers l\'électrode de cuivre (cathode, réduction).'
      },
      example: {
        statement: 'On réalise une pile Zinc-Cuivre à partir des couples $Zn^{2+}/Zn$ (potentiel standard $E^\\circ_1 = -0{,}76$ V) et $Cu^{2+}/Cu$ (potentiel standard $E^\\circ_2 = +0{,}34$ V).<br/><br/>Écrire les deux demi-équations électroniques, l\'équation-bilan de la pile, puis calculer sa force électromotrice standard.',
        steps: [
          'Le couple ayant le potentiel le plus élevé ($Cu^{2+}/Cu$) fonctionne en <strong>réduction</strong> à la cathode : $Cu^{2+} + 2\\,e^- \\rightarrow Cu$.',
          'Le couple ayant le potentiel le plus faible ($Zn^{2+}/Zn$) fonctionne en <strong>oxydation</strong> à l\'anode : $Zn \\rightarrow Zn^{2+} + 2\\,e^-$.',
          'Les deux demi-équations échangent déjà le même nombre d\'électrons ($2\\,e^-$) : on peut les additionner directement. Les électrons s\'éliminent : $Cu^{2+} + Zn \\rightarrow Cu + Zn^{2+}$.',
          'Force électromotrice : $E = E_{cathode} - E_{anode} = E^\\circ_2 - E^\\circ_1 = 0{,}34 - (-0{,}76) = 1{,}10$ V.'
        ],
        answer: 'Équation-bilan : $Cu^{2+} + Zn \\rightarrow Cu + Zn^{2+}$, avec une f.é.m. $E = 1{,}10$ V. Cette valeur, positive, confirme que la réaction se produit bien spontanément dans ce sens : le zinc réduit les ions cuivre(II).'
      },
      formulas: [
        'Demi-équation électronique : $Ox + n\\,e^- \\rightleftharpoons Red$',
        'Force électromotrice standard : $E = E_{cathode} - E_{anode}$',
        'Quantité de charge échangée : $Q = n(e^-) \\times F$, avec $F \\approx 96\\,500$ C/mol (constante de Faraday)',
        'Relation charge/courant : $Q = I \\times \\Delta t$',
        'Quantité de matière échangée : $n(e^-) = \\dfrac{Q}{F} = \\dfrac{I \\times \\Delta t}{F}$'
      ],
      recap: [
        'Une oxydoréduction est un <strong>transfert d\'électrons</strong> : l\'oxydant en capte, le réducteur en cède.',
        'Dans une pile, l\'<strong>oxydation</strong> a lieu à l\'anode (pôle −), la <strong>réduction</strong> a lieu à la cathode (pôle +) ; les électrons circulent dans le fil de l\'anode vers la cathode.',
        'La force électromotrice $E = E_{cathode} - E_{anode}$ est <strong>positive</strong> lorsque la pile fonctionne dans son sens spontané.',
        'La constante de Faraday $F \\approx 96\\,500$ C/mol relie la quantité de matière d\'électrons échangés à la quantité de charge $Q$ qui a circulé.'
      ],
      piege: 'Une confusion fréquente est d\'inverser les définitions : l\'anode n\'est pas toujours le pôle négatif dans l\'absolu, mais elle l\'est bien pour une <strong>pile</strong> qui fonctionne spontanément (attention, la convention s\'inverse pour un électrolyseur, hors programme ici). Attention également à ne jamais dire que les <strong>électrons</strong> circulent dans le pont salin : ce sont les <strong>ions</strong> qui migrent dans le pont salin, les électrons ne circulent que dans le circuit électrique extérieur.'
    },

    quiz: [
      {
        q: 'Dans une pile qui fonctionne spontanément, où se produit l\'oxydation ?',
        options: [
          'À la cathode, pôle positif',
          'À l\'anode, pôle négatif',
          'Dans le pont salin',
          'Dans le voltmètre'
        ],
        answer: 1,
        correction: 'Dans une pile, l\'oxydation (perte d\'électrons par le réducteur) se produit à l\'<strong>anode</strong>, qui constitue le pôle <strong>négatif</strong> de la pile.'
      },
      {
        q: 'Une pile est constituée des couples $Ag^+/Ag$ ($E^\\circ = +0{,}80$ V) et $Fe^{2+}/Fe$ ($E^\\circ = -0{,}44$ V). Quelle est sa force électromotrice standard ?',
        options: [
          '$E = 0{,}36$ V',
          '$E = 1{,}24$ V',
          '$E = -1{,}24$ V',
          '$E = 0{,}80$ V'
        ],
        answer: 1,
        correction: 'Le couple $Ag^+/Ag$ a le potentiel le plus élevé, il fonctionne à la cathode. $E = E_{cathode} - E_{anode} = 0{,}80 - (-0{,}44) = 1{,}24$ V.'
      },
      {
        q: 'Que transporte le pont salin dans une pile électrochimique ?',
        options: [
          'Des électrons, pour fermer le circuit',
          'Des ions, pour assurer la neutralité électrique des solutions',
          'Du courant alternatif',
          'De l\'eau pure uniquement'
        ],
        answer: 1,
        correction: 'Le pont salin permet la circulation d\'<strong>ions</strong> entre les deux demi-piles, ce qui maintient la neutralité électrique des solutions. Les électrons, eux, ne circulent que dans le circuit électrique extérieur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['fem', 'faraday']);
        var couples = [
          { nom: 'Zn²⁺/Zn', E: -0.76 },
          { nom: 'Fe²⁺/Fe', E: -0.44 },
          { nom: 'Ni²⁺/Ni', E: -0.25 },
          { nom: 'Pb²⁺/Pb', E: -0.13 },
          { nom: 'Cu²⁺/Cu', E: 0.34 },
          { nom: 'Ag⁺/Ag', E: 0.80 }
        ];

        if (typeExo === 'fem') {
          var idx1 = rand(0, couples.length - 1);
          var idx2 = rand(0, couples.length - 1);
          while (idx2 === idx1) { idx2 = rand(0, couples.length - 1); }
          var c1 = couples[idx1];
          var c2 = couples[idx2];
          var cathode = c1.E > c2.E ? c1 : c2;
          var anode = c1.E > c2.E ? c2 : c1;
          var E = parseFloat((cathode.E - anode.E).toFixed(2));
          var contexte = pick([
            'un banc d\'essai de piles en laboratoire',
            'une pile expérimentale montée en TP',
            'un générateur électrochimique étudié en cours',
            'un dispositif de mesure en chimie appliquée'
          ]);
          return {
            statement: 'On assemble ' + contexte + ' une pile à partir des couples $' + c1.nom + '$ (potentiel standard $E^\\circ = ' + fr(c1.E, 2) + '$ V) et $' + c2.nom + '$ (potentiel standard $E^\\circ = ' + fr(c2.E, 2) + '$ V).<br/><br/>Calcule la force électromotrice standard $E$ de cette pile (en V, arrondie au centième).',
            answer: E,
            tolerance: 0.02,
            unit: 'V',
            hint: 'Le couple ayant le potentiel standard le plus élevé fonctionne à la cathode. $E = E_{cathode} - E_{anode}$.',
            solution: [
              'Le couple $' + cathode.nom + '$ a le potentiel le plus élevé ($' + fr(cathode.E, 2) + '$ V) : il fonctionne à la <strong>cathode</strong> (réduction).',
              'Le couple $' + anode.nom + '$ fonctionne donc à l\'<strong>anode</strong> (oxydation), avec $E^\\circ = ' + fr(anode.E, 2) + '$ V.',
              'Force électromotrice : $E = E_{cathode} - E_{anode} = ' + fr(cathode.E, 2) + ' - (' + fr(anode.E, 2) + ') = ' + fr(E, 2) + '$ V.'
            ]
          };
        } else {
          var I = randFloat(0.1, 2, 2);
          var t = rand(300, 3600);
          var Q = parseFloat((I * t).toFixed(1));
          var nE = parseFloat((Q / 96500).toExponential(3));
          var expN = Math.floor(Math.log10(nE));
          var mantN = parseFloat((nE / Math.pow(10, expN)).toFixed(2));
          var contexte2 = pick([
            'un accumulateur en cours de charge',
            'une électrolyse suivie en TP',
            'une pile alimentant un petit circuit test',
            'un dispositif de dépôt métallique par électrolyse'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', un courant d\'intensité constante $I = ' + fr(I, 2) + '$ A circule pendant une durée $\\Delta t = ' + t + '$ s.<br/><br/>Calcule la quantité de charge $Q$ ayant circulé (en C), puis la quantité de matière d\'électrons $n(e^-)$ échangée (en mol, notation scientifique).',
            answer: nE,
            tolerance: Math.max(1e-6, parseFloat((nE * 0.03).toExponential(3))),
            unit: 'mol',
            hint: 'Utilise $Q = I \\times \\Delta t$, puis $n(e^-) = \\dfrac{Q}{F}$ avec $F \\approx 96\\,500$ C/mol.',
            solution: [
              'Quantité de charge : $Q = I \\times \\Delta t = ' + fr(I, 2) + ' \\times ' + t + ' = ' + fr(Q, 1) + '$ C.',
              'Quantité de matière d\'électrons : $n(e^-) = \\dfrac{Q}{F} = \\dfrac{' + fr(Q, 1) + '}{96\\,500}$.',
              'Résultat : $n(e^-) \\approx ' + fr(mantN, 2) + ' \\times 10^{' + expN + '}$ mol.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On assemble une pile à partir des couples $Ag^+/Ag$ ($E^\\circ = +0{,}80$ V) et $Zn^{2+}/Zn$ ($E^\\circ = -0{,}76$ V). Cette pile débite un courant d\'intensité constante $I = 0{,}50$ A pendant une durée $\\Delta t = 1\\,930$ s.',
      tasks: [
        'Écrire les deux demi-équations électroniques (en équilibrant le nombre d\'électrons échangés) et l\'équation-bilan de la pile.',
        'Calculer la force électromotrice standard $E$ de cette pile.',
        'Calculer la quantité de matière d\'électrons $n(e^-)$ ayant circulé pendant la durée $\\Delta t$, sachant que $F \\approx 96\\,500$ C/mol.'
      ],
      solutions: [
        'Le couple $Ag^+/Ag$ (potentiel le plus élevé) fonctionne en réduction à la cathode : $Ag^+ + e^- \\rightarrow Ag$. Pour équilibrer les électrons avec le couple $Zn^{2+}/Zn$ (oxydation, $Zn \\rightarrow Zn^{2+} + 2\\,e^-$, qui en échange $2$), on multiplie la demi-équation de l\'argent par $2$ : $2\\,Ag^+ + 2\\,e^- \\rightarrow 2\\,Ag$. L\'équation-bilan est donc : $2\\,Ag^+ + Zn \\rightarrow 2\\,Ag + Zn^{2+}$.',
        '$E = E_{cathode} - E_{anode} = 0{,}80 - (-0{,}76) = 1{,}56$ V.',
        'Quantité de charge : $Q = I \\times \\Delta t = 0{,}50 \\times 1\\,930 = 965$ C. Quantité de matière d\'électrons : $n(e^-) = \\dfrac{Q}{F} = \\dfrac{965}{96\\,500} = 0{,}010$ mol.'
      ],
      finalAnswer: 'La pile fonctionne selon l\'équation $2\\,Ag^+ + Zn \\rightarrow 2\\,Ag + Zn^{2+}$, avec une f.é.m. $E = 1{,}56$ V, et a fait circuler $n(e^-) = 0{,}010$ mol d\'électrons pendant les $1\\,930$ s de fonctionnement. Cette quantité d\'électrons correspond à la quantité de zinc consommée à l\'anode et d\'argent déposé à la cathode.'
    },

    evaluation: {
      title: 'Évaluation — Oxydoréduction et piles',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une pile qui fonctionne spontanément, la cathode est :',
          type: 'multiple-choice',
          options: [
            'Le pôle négatif, siège de l\'oxydation',
            'Le pôle positif, siège de la réduction',
            'Le pont salin',
            'Le voltmètre'
          ],
          answer: 1,
          points: 2,
          correction: 'La cathode est le pôle positif de la pile, où se produit la réduction (l\'oxydant capte des électrons).'
        },
        {
          statement: 'Une pile associe les couples $Ni^{2+}/Ni$ ($E^\\circ = -0{,}25$ V) et $Cu^{2+}/Cu$ ($E^\\circ = +0{,}34$ V). Calculer la f.é.m. standard $E$ (en V).',
          type: 'numeric',
          answer: 0.59,
          tolerance: 0.02,
          unit: 'V',
          points: 2,
          correction: '$E = E_{cathode} - E_{anode} = 0{,}34 - (-0{,}25) = 0{,}59$ V.'
        },
        {
          statement: 'Un courant $I = 1{,}0$ A circule pendant $\\Delta t = 965$ s. Calculer la quantité de charge $Q$ ayant circulé (en C).',
          type: 'numeric',
          answer: 965,
          tolerance: 5,
          unit: 'C',
          points: 2,
          correction: '$Q = I \\times \\Delta t = 1{,}0 \\times 965 = 965$ C.'
        },
        {
          statement: 'Avec $Q = 965$ C et $F \\approx 96\\,500$ C/mol, calculer la quantité de matière d\'électrons $n(e^-)$ échangée (en mol).',
          type: 'numeric',
          answer: 0.01,
          tolerance: 0.001,
          unit: 'mol',
          points: 2,
          correction: '$n(e^-) = \\dfrac{Q}{F} = \\dfrac{965}{96\\,500} = 0{,}010$ mol.'
        },
        {
          statement: 'Dans le circuit extérieur d\'une pile en fonctionnement, les électrons circulent :',
          type: 'multiple-choice',
          options: [
            'De la cathode vers l\'anode',
            'De l\'anode vers la cathode',
            'Dans les deux sens simultanément',
            'Uniquement dans le pont salin'
          ],
          answer: 1,
          points: 2,
          correction: 'Les électrons, libérés par l\'oxydation à l\'anode, circulent dans le fil extérieur jusqu\'à la cathode, où ils sont captés lors de la réduction.'
        }
      ]
    }
  });
