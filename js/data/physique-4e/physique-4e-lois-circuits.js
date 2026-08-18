/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-lois-circuits.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-lois-circuits',
    level: 1, subject: 'physique',
    icon: '🔀',
    title: 'Les lois des circuits (série et dérivation)',
    subtitle: 'Unicité et additivité de l\'intensité et de la tension dans les circuits en série et en dérivation',
    keywords: ['Circuit série', 'Circuit en dérivation', 'Additivité', 'Loi des nœuds', 'Unicité'],
    physics: 'Ces lois expliquent pourquoi une guirlande de Noël montée en série s\'éteint entièrement si une seule ampoule grille, alors que les lampes d\'une maison, montées en dérivation, restent indépendantes les unes des autres.',

    cours: {
      intro: 'Dans un circuit électrique, les composants peuvent être associés de deux façons différentes. En <strong>série</strong>, ils sont placés les uns à la suite des autres : il n\'existe qu\'un seul chemin possible pour le courant. En <strong>dérivation</strong> (ou en parallèle), plusieurs branches partent d\'un même point (un <strong>nœud</strong>) : le courant peut alors emprunter plusieurs chemins différents.<br/><br/>Cette différence de structure a des conséquences directes sur l\'intensité et la tension mesurées dans le circuit. Dans un montage en série, l\'intensité est la <strong>même partout</strong> et les tensions <strong>s\'additionnent</strong>. Dans un montage en dérivation, c\'est l\'inverse : la tension est la <strong>même</strong> aux bornes de chaque branche, et ce sont les intensités qui <strong>s\'additionnent</strong>.<br/><br/>Connaître ces lois permet, par exemple, de comprendre pourquoi une seule ampoule grillée éteint toute une guirlande montée en série, alors que les lampes d\'une maison, montées en dérivation, continuent de fonctionner indépendamment les unes des autres.',
      definitions: [
        { term: 'Circuit en série', def: 'Montage où les composants sont placés les uns à la suite des autres, formant une <strong>seule boucle</strong> : il n\'existe qu\'un seul chemin pour le courant.' },
        { term: 'Circuit en dérivation', def: 'Montage où plusieurs branches partent d\'un même <strong>nœud</strong> : le courant se répartit alors entre les différentes branches, qui offrent plusieurs chemins possibles.' },
        { term: 'Lois du circuit série', def: '<strong>Unicité de l\'intensité</strong> : $I$ est la même en tout point du circuit. <strong>Additivité des tensions</strong> : la tension totale est la somme des tensions de chaque composant, $U = U_1 + U_2$.' },
        { term: 'Lois du circuit en dérivation', def: '<strong>Unicité de la tension</strong> : chaque branche a la même tension à ses bornes, égale à celle du générateur. <strong>Additivité des intensités</strong> (loi des nœuds) : l\'intensité totale est la somme des intensités de chaque branche, $I = I_1 + I_2$.' }
      ],
      method: {
        title: 'Analyser un circuit série ou en dérivation en 3 étapes',
        steps: [
          '<strong>Identifier le type de montage</strong> : une seule boucle sans embranchement signale un montage en <strong>série</strong> ; plusieurs branches partant d\'un même nœud signalent un montage en <strong>dérivation</strong>.',
          '<strong>Appliquer la bonne loi pour l\'intensité</strong> : unicité ($I$ identique partout) en série, ou additivité (loi des nœuds, $I = I_1 + I_2$) en dérivation.',
          '<strong>Appliquer la bonne loi pour la tension</strong> : additivité ($U = U_1 + U_2$) en série, ou unicité (même tension dans chaque branche) en dérivation.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Comparaison des deux montages',
        title: 'Circuit en série et circuit en dérivation, avec deux lampes',
        description: 'À gauche, un montage en série : les deux lampes sont parcourues par la même intensité $I$, et leurs tensions s\'additionnent. À droite, un montage en dérivation : les deux lampes ont la même tension à leurs bornes, et leurs intensités s\'additionnent.',
        svg: `
          <svg viewBox="0 0 560 270" role="img" aria-labelledby="lois-title lois-desc">
            <title id="lois-title">Comparaison entre un circuit serie et un circuit en derivation</title>
            <desc id="lois-desc">A gauche, un circuit ferme en serie comporte un generateur et deux lampes placees l'une apres l'autre sur une seule boucle : la meme intensite les traverse toutes les deux. A droite, un circuit en derivation comporte un generateur relie a deux branches paralleles, chacune avec une lampe : les deux branches ont la meme tension a leurs bornes, tandis que les intensites de chaque branche s'additionnent pour former l'intensite totale delivree par le generateur.</desc>

            <defs>
              <marker id="arrow-phys4e-lois" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== Panneau A : montage en serie ===== -->
            <text class="annotation-label" x="145" y="20" text-anchor="middle">Montage en série</text>

            <line class="frame-line" x1="40" y1="70" x2="97" y2="70"></line>
            <line class="frame-line" x1="123" y1="70" x2="167" y2="70"></line>
            <line class="frame-line" x1="193" y1="70" x2="250" y2="70"></line>
            <line class="frame-line" x1="250" y1="70" x2="250" y2="200"></line>
            <line class="frame-line" x1="250" y1="200" x2="40" y2="200"></line>
            <line class="frame-line" x1="40" y1="200" x2="40" y2="140"></line>
            <line class="frame-line" x1="40" y1="120" x2="40" y2="70"></line>

            <line class="frame-line" x1="20" y1="120" x2="60" y2="120"></line>
            <line class="curve-main" x1="28" y1="140" x2="52" y2="140"></line>
            <text class="tick-label" x="10" y="124" text-anchor="end">+</text>
            <text class="tick-label" x="10" y="144" text-anchor="end">−</text>

            <circle class="plot-point-alt" cx="110" cy="70" r="13"></circle>
            <line class="frame-line" x1="101" y1="61" x2="119" y2="79"></line>
            <line class="frame-line" x1="101" y1="79" x2="119" y2="61"></line>

            <circle class="plot-point-alt" cx="180" cy="70" r="13"></circle>
            <line class="frame-line" x1="171" y1="61" x2="189" y2="79"></line>
            <line class="frame-line" x1="171" y1="79" x2="189" y2="61"></line>

            <text class="label-soft" x="110" y="95" text-anchor="middle">U₁</text>
            <text class="label-soft" x="180" y="95" text-anchor="middle">U₂</text>

            <line class="curve-main" x1="170" y1="200" x2="120" y2="200" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="145" y="188" text-anchor="middle">I</text>

            <text class="label-soft" x="145" y="222" text-anchor="middle">U = U₁ + U₂</text>

            <!-- ===== Panneau B : montage en derivation ===== -->
            <text class="annotation-label" x="440" y="20" text-anchor="middle">Montage en dérivation</text>

            <line class="frame-line" x1="320" y1="70" x2="360" y2="70"></line>
            <line class="frame-line" x1="360" y1="70" x2="360" y2="140"></line>
            <line class="frame-line" x1="360" y1="70" x2="417" y2="70"></line>
            <line class="frame-line" x1="443" y1="70" x2="520" y2="70"></line>
            <line class="frame-line" x1="360" y1="140" x2="417" y2="140"></line>
            <line class="frame-line" x1="443" y1="140" x2="520" y2="140"></line>
            <line class="frame-line" x1="520" y1="70" x2="520" y2="140"></line>
            <line class="frame-line" x1="520" y1="140" x2="520" y2="200"></line>
            <line class="frame-line" x1="520" y1="200" x2="320" y2="200"></line>
            <line class="frame-line" x1="320" y1="200" x2="320" y2="140"></line>
            <line class="frame-line" x1="320" y1="120" x2="320" y2="70"></line>

            <line class="frame-line" x1="300" y1="120" x2="340" y2="120"></line>
            <line class="curve-main" x1="308" y1="140" x2="332" y2="140"></line>
            <text class="tick-label" x="290" y="124" text-anchor="end">+</text>
            <text class="tick-label" x="290" y="144" text-anchor="end">−</text>

            <circle class="plot-point-alt" cx="430" cy="70" r="13"></circle>
            <line class="frame-line" x1="421" y1="61" x2="439" y2="79"></line>
            <line class="frame-line" x1="421" y1="79" x2="439" y2="61"></line>

            <circle class="plot-point-alt" cx="430" cy="140" r="13"></circle>
            <line class="frame-line" x1="421" y1="131" x2="439" y2="149"></line>
            <line class="frame-line" x1="421" y1="149" x2="439" y2="131"></line>

            <line class="curve-main" x1="400" y1="70" x2="380" y2="70" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="388" y="58" text-anchor="middle">I₁</text>
            <line class="curve-main" x1="400" y1="140" x2="380" y2="140" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="388" y="128" text-anchor="middle">I₂</text>

            <text class="label-soft" x="430" y="98" text-anchor="middle">U₁</text>
            <text class="label-soft" x="430" y="163" text-anchor="middle">U₂</text>

            <line class="curve-main" x1="460" y1="200" x2="410" y2="200" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="435" y="215" text-anchor="middle">I total</text>

            <text class="label-soft" x="440" y="238" text-anchor="middle">U₁ = U₂  et  I = I₁ + I₂</text>
          </svg>
        `,
        notes: [
          'Dans le montage en <strong>série</strong> (à gauche), il n\'y a qu\'un seul chemin pour le courant : l\'intensité $I$ est donc <strong>identique</strong> avant la lampe 1, entre les deux lampes, et après la lampe 2. Les tensions, elles, s\'additionnent : $U = U_1 + U_2$.',
          'Dans le montage en <strong>dérivation</strong> (à droite), les deux lampes forment deux branches distinctes entre les mêmes deux nœuds : elles ont donc la <strong>même tension</strong> à leurs bornes ($U_1 = U_2$), mais chacune est traversée par sa propre intensité.',
          'L\'intensité totale délivrée par le générateur en dérivation est la somme des intensités de chaque branche : $I = I_1 + I_2$ (loi des nœuds).'
        ],
        reading: 'Compare les deux montages : à gauche, une seule boucle où l\'intensité ne change jamais ; à droite, deux branches parallèles entre les mêmes nœuds, où c\'est la tension qui ne change jamais.',
        caption: 'Comparaison entre un circuit série (intensité unique, tensions additives) et un circuit en dérivation (tension unique, intensités additives), chacun avec deux lampes.'
      },
      example: {
        statement: 'Dans un circuit en série, un générateur de tension totale $U = 9$ V alimente deux lampes. La tension aux bornes de la première lampe est $U_1 = 3{,}5$ V.<br/><br/>Calcule la tension $U_2$ aux bornes de la seconde lampe.',
        steps: [
          'En série, la loi d\'additivité des tensions donne : $U = U_1 + U_2$.',
          'On isole $U_2$ : $U_2 = U - U_1 = 9 - 3{,}5$.'
        ],
        answer: '$U_2 = 5{,}5$ V. Comme le circuit est en série, il aurait suffi de vérifier que $I$ est identique dans toute la boucle pour confirmer le montage — mais pour trouver $U_2$, c\'est bien la loi d\'additivité des <strong>tensions</strong> qu\'il fallait utiliser.'
      },
      formulas: [
        'Circuit série : $I = I_1 = I_2$ (unicité de l\'intensité) et $U = U_1 + U_2$ (additivité des tensions)',
        'Circuit en dérivation : $U = U_1 = U_2$ (unicité de la tension) et $I = I_1 + I_2$ (additivité des intensités, loi des nœuds)'
      ],
      recap: [
        'En <strong>série</strong>, un seul chemin pour le courant : l\'intensité $I$ est la même partout dans le circuit.',
        'En <strong>série</strong> toujours, les tensions de chaque composant s\'additionnent pour donner la tension totale : $U = U_1 + U_2$.',
        'En <strong>dérivation</strong>, chaque branche a la même tension à ses bornes, égale à celle du générateur : $U_1 = U_2$.',
        'En <strong>dérivation</strong> toujours, l\'intensité totale se répartit entre les branches : $I = I_1 + I_2$ (loi des nœuds).'
      ],
      piege: 'Une erreur très fréquente est d\'appliquer par erreur la règle du circuit série (additivité des tensions) à un montage en dérivation, ou inversement d\'additionner les intensités dans un circuit série où elles sont en réalité identiques. Attention, il faut toujours commencer par identifier le type de montage avant tout calcul : en série, ce sont les tensions qui s\'additionnent ; en dérivation, ce sont les intensités.'
    },

    quiz: [
      {
        q: 'Dans un circuit en série comportant deux lampes, l\'intensité du courant :',
        options: [
          'Est différente avant et après chaque lampe',
          'Est la même en tout point du circuit',
          'Double après chaque lampe',
          'Ne peut pas être mesurée'
        ],
        answer: 1,
        correction: 'En série, il n\'existe qu\'un seul chemin pour le courant : l\'intensité est donc identique en tout point du circuit (loi d\'unicité de l\'intensité).'
      },
      {
        q: 'Dans un circuit en dérivation comportant deux branches, la tension aux bornes de chaque branche :',
        options: [
          'S\'additionne pour donner la tension du générateur',
          'Est la même dans chaque branche, égale à celle du générateur',
          'Est toujours nulle',
          'Dépend uniquement de la longueur des fils'
        ],
        answer: 1,
        correction: 'En dérivation, toutes les branches sont connectées entre les deux mêmes nœuds : elles ont donc nécessairement la même tension à leurs bornes, égale à celle du générateur.'
      },
      {
        q: 'Dans un circuit série, un générateur de tension $U = 12$ V alimente deux lampes. La première a une tension $U_1 = 7$ V à ses bornes. Quelle est la tension $U_2$ aux bornes de la seconde ?',
        options: [
          '$U_2 = 19$ V',
          '$U_2 = 5$ V',
          '$U_2 = 7$ V',
          '$U_2 = 12$ V'
        ],
        answer: 1,
        correction: 'Additivité des tensions en série : $U = U_1 + U_2$, donc $U_2 = U - U_1 = 12 - 7 = 5$ V.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var circuitType = pick(['serie', 'derivation']);
        var contextesSerie = [
          'une guirlande lumineuse à deux ampoules',
          'un circuit pédagogique avec deux lampes témoins',
          'deux résistances chauffantes en série dans un radiateur d\'appoint',
          'un circuit de test avec deux diodes électroluminescentes'
        ];
        var contextesDerivation = [
          'une installation avec deux lampes branchées sur la même ligne',
          'deux appareils domestiques branchés en dérivation',
          'deux branches d\'un circuit de démonstration',
          'deux récepteurs alimentés par le même générateur'
        ];

        if (circuitType === 'serie') {
          var mode = pick(['trouverU2', 'trouverUtotal']);
          var contexte = pick(contextesSerie);

          if (mode === 'trouverU2') {
            var Utotal = randFloat(6, 24, 1);
            var U1 = randFloat(1, parseFloat((Utotal - 1).toFixed(1)), 1);
            var U2 = parseFloat((Utotal - U1).toFixed(1));
            return {
              statement: 'Dans ' + contexte + ', montées en série, un générateur de tension totale $U = ' + fr(Utotal, 1) + '$ V alimente deux lampes. La tension aux bornes de la première lampe est $U_1 = ' + fr(U1, 1) + '$ V.<br/><br/>D\'après la loi d\'additivité des tensions en série, calcule la tension $U_2$ aux bornes de la seconde lampe (en V, arrondie au dixième).',
              answer: U2,
              tolerance: 0.2,
              unit: 'V',
              hint: 'En série, $U = U_1 + U_2$, donc $U_2 = U - U_1$.',
              solution: [
                'Additivité des tensions en série : $U = U_1 + U_2$, donc $U_2 = U - U_1$.',
                'Application numérique : $U_2 = ' + fr(Utotal, 1) + ' - ' + fr(U1, 1) + '$.',
                'Résultat : $U_2 = ' + fr(U2, 1) + '$ V.'
              ]
            };
          } else {
            var U1b = randFloat(1, 15, 1);
            var U2b = randFloat(1, 15, 1);
            var Utot = parseFloat((U1b + U2b).toFixed(1));
            return {
              statement: 'Dans ' + contexte + ', montées en série, deux lampes ont respectivement pour tension à leurs bornes $U_1 = ' + fr(U1b, 1) + '$ V et $U_2 = ' + fr(U2b, 1) + '$ V.<br/><br/>Calcule la tension totale $U$ délivrée par le générateur (en V, arrondie au dixième).',
              answer: Utot,
              tolerance: 0.2,
              unit: 'V',
              hint: 'En série, la tension totale est la somme des tensions de chaque lampe : $U = U_1 + U_2$.',
              solution: [
                'Additivité des tensions en série : $U = U_1 + U_2$.',
                'Application numérique : $U = ' + fr(U1b, 1) + ' + ' + fr(U2b, 1) + '$.',
                'Résultat : $U = ' + fr(Utot, 1) + '$ V.'
              ]
            };
          }
        } else {
          var modeD = pick(['trouverI2', 'trouverItotal']);
          var contexteD = pick(contextesDerivation);

          if (modeD === 'trouverI2') {
            var Itotal = randFloat(0.5, 5, 2);
            var I1 = randFloat(0.1, parseFloat((Itotal - 0.1).toFixed(2)), 2);
            var I2 = parseFloat((Itotal - I1).toFixed(2));
            return {
              statement: 'Dans ' + contexteD + ', deux lampes montées en dérivation reçoivent un courant total $I = ' + fr(Itotal, 2) + '$ A délivré par le générateur. L\'intensité dans la première branche est $I_1 = ' + fr(I1, 2) + '$ A.<br/><br/>D\'après la loi des nœuds, calcule l\'intensité $I_2$ dans la seconde branche (en A, arrondie au centième).',
              answer: I2,
              tolerance: 0.05,
              unit: 'A',
              hint: 'En dérivation, $I = I_1 + I_2$, donc $I_2 = I - I_1$.',
              solution: [
                'Loi des nœuds : $I = I_1 + I_2$, donc $I_2 = I - I_1$.',
                'Application numérique : $I_2 = ' + fr(Itotal, 2) + ' - ' + fr(I1, 2) + '$.',
                'Résultat : $I_2 = ' + fr(I2, 2) + '$ A.'
              ]
            };
          } else {
            var I1b = randFloat(0.1, 3, 2);
            var I2b = randFloat(0.1, 3, 2);
            var Itot = parseFloat((I1b + I2b).toFixed(2));
            return {
              statement: 'Dans ' + contexteD + ', deux lampes montées en dérivation sont parcourues respectivement par $I_1 = ' + fr(I1b, 2) + '$ A et $I_2 = ' + fr(I2b, 2) + '$ A.<br/><br/>Calcule l\'intensité totale $I$ délivrée par le générateur (en A, arrondie au centième).',
              answer: Itot,
              tolerance: 0.05,
              unit: 'A',
              hint: 'Loi des nœuds : l\'intensité totale est la somme des intensités de chaque branche, $I = I_1 + I_2$.',
              solution: [
                'Loi des nœuds : $I = I_1 + I_2$.',
                'Application numérique : $I = ' + fr(I1b, 2) + ' + ' + fr(I2b, 2) + '$.',
                'Résultat : $I = ' + fr(Itot, 2) + '$ A.'
              ]
            };
          }
        }
      }
    },

    probleme: {
      context: 'Deux lampes $L_1$ et $L_2$ sont montées en dérivation aux bornes d\'un générateur de tension $U = 12$ V. L\'intensité mesurée dans la branche de $L_1$ est $I_1 = 0{,}5$ A, et celle dans la branche de $L_2$ est $I_2 = 0{,}3$ A.',
      tasks: [
        'Indiquer la tension aux bornes de $L_1$, puis celle aux bornes de $L_2$, en justifiant à l\'aide de la loi adaptée aux circuits en dérivation.',
        'Calculer l\'intensité totale $I$ délivrée par le générateur.',
        'On ajoute une troisième lampe identique $L_3$, également en dérivation, parcourue par une intensité $I_3 = 0{,}5$ A. Calculer la nouvelle intensité totale délivrée par le générateur.'
      ],
      solutions: [
        'En dérivation, toutes les branches ont la même tension à leurs bornes, égale à celle du générateur (loi d\'unicité de la tension) : $U_{L_1} = U_{L_2} = U = 12$ V.',
        'Loi des nœuds (additivité des intensités) : $I = I_1 + I_2 = 0{,}5 + 0{,}3 = 0{,}8$ A.',
        'Avec la troisième lampe ajoutée en dérivation : $I = I_1 + I_2 + I_3 = 0{,}8 + 0{,}5 = 1{,}3$ A.'
      ],
      finalAnswer: 'La tension reste identique aux bornes des trois lampes ($12$ V), tandis que l\'intensité totale délivrée par le générateur augmente à chaque lampe ajoutée en dérivation : elle passe de $0{,}8$ A à $1{,}3$ A. C\'est pourquoi brancher davantage d\'appareils sur une même installation en dérivation augmente l\'intensité totale consommée.'
    },

    evaluation: {
      title: 'Évaluation — Les lois des circuits (série et dérivation)',
      duration: '25 min',
      questions: [
        {
          statement: 'Dans un circuit série, un générateur de tension $U = 10$ V alimente deux lampes. La première a une tension $U_1 = 4$ V. Calculer $U_2$ (en V).',
          type: 'numeric',
          answer: 6,
          tolerance: 0.3,
          unit: 'V',
          points: 2,
          correction: '$U_2 = U - U_1 = 10 - 4 = 6$ V (additivité des tensions en série).'
        },
        {
          statement: 'Dans un circuit en série, l\'intensité du courant :',
          type: 'multiple-choice',
          options: [
            'Est la même en tout point du circuit',
            'Diminue après chaque composant',
            'S\'additionne entre les composants',
            'Est nulle si le circuit fonctionne'
          ],
          answer: 0,
          points: 2,
          correction: 'En série, un seul chemin existe pour le courant : l\'intensité est identique partout dans le circuit.'
        },
        {
          statement: 'Deux lampes en dérivation sont parcourues par $I_1 = 0{,}6$ A et $I_2 = 0{,}9$ A. Calculer l\'intensité totale $I$ délivrée par le générateur (en A).',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.05,
          unit: 'A',
          points: 2,
          correction: 'Loi des nœuds : $I = I_1 + I_2 = 0{,}6 + 0{,}9 = 1{,}5$ A.'
        },
        {
          statement: 'Dans un circuit en dérivation, la tension aux bornes de chaque branche :',
          type: 'multiple-choice',
          options: [
            'Est identique dans chaque branche',
            'S\'additionne pour donner la tension du générateur',
            'Dépend du nombre de branches',
            'Est toujours différente d\'une branche à l\'autre'
          ],
          answer: 0,
          points: 2,
          correction: 'Toutes les branches d\'un montage en dérivation sont reliées aux deux mêmes nœuds : elles ont donc toutes la même tension à leurs bornes.'
        },
        {
          statement: 'Deux lampes en série ont pour tensions à leurs bornes $U_1 = 5$ V et $U_2 = 7$ V. Calculer la tension totale $U$ du générateur (en V).',
          type: 'numeric',
          answer: 12,
          tolerance: 0.3,
          unit: 'V',
          points: 1,
          correction: '$U = U_1 + U_2 = 5 + 7 = 12$ V (additivité des tensions en série).'
        }
      ]
    }
  });
