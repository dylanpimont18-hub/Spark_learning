/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-lois-circuits.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-lois-circuits',
    level: 1, subject: 'physique',
    icon: '💡',
    title: 'Les lois des circuits (série et dérivation)',
    subtitle: 'Circuit série, circuit en dérivation, unicité et additivité de l\'intensité et de la tension',
    keywords: ['Circuit série', 'Circuit en dérivation', 'Unicité', 'Additivité', 'Intensité', 'Tension'],
    physics: 'Comprendre la différence entre série et dérivation explique pourquoi une guirlande de Noël montée en série s\'éteint entièrement quand une seule ampoule grille, alors que l\'installation électrique domestique (en dérivation) permet d\'utiliser un appareil sans affecter les autres.',

    cours: {
      intro: 'Un circuit électrique peut être construit de deux façons très différentes : en <strong>série</strong>, où tous les dipôles sont placés les uns à la suite des autres sur une seule boucle, ou en <strong>dérivation</strong> (on dit aussi « en parallèle »), où les dipôles occupent des branches séparées reliées aux mêmes deux points du circuit.<br/><br/>Cette différence de structure change complètement la façon dont se répartissent l\'intensité et la tension. Dans un circuit <strong>série</strong>, l\'intensité est la même partout (<strong>loi d\'unicité</strong>) alors que la tension du générateur se répartit entre les dipôles (<strong>loi d\'additivité</strong>).<br/><br/>Dans un circuit en <strong>dérivation</strong>, c\'est exactement l\'inverse : chaque branche reçoit la <strong>même tension</strong> (loi d\'unicité de la tension), tandis que le courant total se répartit entre les branches (<strong>loi d\'additivité des intensités</strong>). Retenir ce contraste est la clé pour ne jamais confondre les deux lois.',
      definitions: [
        { term: 'Circuit série', def: 'Circuit ne comportant qu\'une seule boucle : tous les dipôles sont branchés les uns à la suite des autres, traversés par le même courant.' },
        { term: 'Circuit en dérivation', def: 'Circuit comportant au moins deux branches distinctes, reliées aux deux mêmes points (nœuds) du circuit. On dit aussi « circuit en parallèle ».' },
        { term: 'Loi de l\'intensité', def: 'Dans un circuit <strong>série</strong>, l\'intensité est unique : $I = I_1 = I_2$ (loi d\'unicité). Dans un circuit en <strong>dérivation</strong>, l\'intensité totale se répartit : $I = I_1 + I_2$ (loi d\'additivité).' },
        { term: 'Loi de la tension', def: 'Dans un circuit <strong>série</strong>, la tension du générateur se répartit : $U = U_1 + U_2$ (loi d\'additivité). Dans un circuit en <strong>dérivation</strong>, la tension est unique aux bornes de chaque branche : $U = U_1 = U_2$ (loi d\'unicité).' },
        { term: 'Nœud', def: 'Point d\'un circuit où se rejoignent au moins trois fils : c\'est là que le courant se répartit (dérivation) ou se recombine.' }
      ],
      method: {
        title: 'Analyser un circuit série ou en dérivation en 3 étapes',
        steps: [
          '<strong>Identifier la structure</strong> du circuit : une seule boucle sans point de jonction = circuit série ; plusieurs branches reliées aux mêmes nœuds = circuit en dérivation.',
          '<strong>Appliquer la loi d\'intensité adaptée</strong> : unicité ($I=I_1=I_2$) en série, additivité ($I=I_1+I_2$) en dérivation.',
          '<strong>Appliquer la loi de tension adaptée</strong> : additivité ($U=U_1+U_2$) en série, unicité ($U=U_1=U_2$) en dérivation.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Comparer série et dérivation',
        title: 'Une même loi ne s\'applique pas de la même façon selon la structure du circuit',
        description: 'Dans un circuit série, l\'intensité est unique et les tensions s\'additionnent. Dans un circuit en dérivation, c\'est l\'inverse : la tension est unique et les intensités s\'additionnent.',
        svg: `
          <svg viewBox="0 0 680 300" role="img" aria-labelledby="lois-circuits-title lois-circuits-desc">
            <title id="lois-circuits-title">Comparaison entre un circuit serie et un circuit en derivation</title>
            <desc id="lois-circuits-desc">A gauche, un circuit serie forme une seule boucle contenant un generateur et deux lampes l'une apres l'autre : une fleche marquee I avant la premiere lampe et une autre fleche marquee I apres la seconde lampe montrent que le courant a la meme valeur partout. A droite, un circuit en derivation relie un generateur a deux branches distinctes partant du meme noeud superieur et rejoignant le meme noeud inferieur, chaque branche contenant une lampe : une fleche marquee I avant la separation, puis deux fleches marquees I un et I deux dans chaque branche, montrent que le courant total se repartit entre les deux branches. Une ligne pointillee verticale separe les deux circuits.</desc>

            <defs>
              <marker id="arrow-phys4e-lois" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="annotation-label" x="160" y="20" text-anchor="middle">CIRCUIT SÉRIE</text>
            <text class="annotation-label" x="480" y="20" text-anchor="middle">CIRCUIT EN DÉRIVATION</text>
            <line class="guide-line" x1="300" y1="45" x2="300" y2="255"></line>

            <!-- ===== SERIE (gauche) ===== -->
            <line class="frame-line" x1="60" y1="70" x2="136" y2="70"></line>
            <line class="frame-line" x1="164" y1="70" x2="260" y2="70"></line>
            <line class="frame-line" x1="260" y1="70" x2="260" y2="141"></line>
            <line class="frame-line" x1="260" y1="169" x2="260" y2="240"></line>
            <line class="frame-line" x1="260" y1="240" x2="60" y2="240"></line>
            <line class="frame-line" x1="60" y1="240" x2="60" y2="160"></line>
            <line class="frame-line" x1="60" y1="130" x2="60" y2="70"></line>

            <line class="frame-line" x1="40" y1="130" x2="80" y2="130"></line>
            <line class="curve-main" x1="48" y1="150" x2="72" y2="150"></line>

            <circle class="plot-point-alt" cx="150" cy="70" r="14"></circle>
            <line class="frame-line" x1="140" y1="60" x2="160" y2="80"></line>
            <line class="frame-line" x1="140" y1="80" x2="160" y2="60"></line>

            <circle class="plot-point-alt" cx="260" cy="155" r="14"></circle>
            <line class="frame-line" x1="250" y1="145" x2="270" y2="165"></line>
            <line class="frame-line" x1="250" y1="165" x2="270" y2="145"></line>

            <line class="curve-main" x1="90" y1="70" x2="125" y2="70" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="107" y="58" text-anchor="middle">I</text>
            <line class="curve-main" x1="260" y1="195" x2="260" y2="225" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="274" y="212" text-anchor="start">I</text>

            <text class="annotation-label" x="150" y="50" text-anchor="middle">U₁</text>
            <text class="annotation-label" x="278" y="155" text-anchor="start">U₂</text>
            <text class="annotation-label" x="25" y="150" text-anchor="end">U</text>
            <text class="label-soft" x="160" y="275" text-anchor="middle">U = U₁ + U₂</text>

            <!-- ===== DERIVATION (droite) ===== -->
            <line class="frame-line" x1="340" y1="70" x2="620" y2="70"></line>
            <line class="frame-line" x1="340" y1="240" x2="620" y2="240"></line>
            <line class="frame-line" x1="340" y1="70" x2="340" y2="130"></line>
            <line class="frame-line" x1="340" y1="160" x2="340" y2="240"></line>

            <line class="frame-line" x1="320" y1="130" x2="360" y2="130"></line>
            <line class="curve-main" x1="328" y1="150" x2="352" y2="150"></line>

            <line class="frame-line" x1="480" y1="70" x2="480" y2="141"></line>
            <line class="frame-line" x1="480" y1="169" x2="480" y2="240"></line>
            <circle class="plot-point-alt" cx="480" cy="155" r="14"></circle>
            <line class="frame-line" x1="470" y1="145" x2="490" y2="165"></line>
            <line class="frame-line" x1="470" y1="165" x2="490" y2="145"></line>
            <circle class="plot-point" cx="480" cy="70" r="3"></circle>
            <circle class="plot-point" cx="480" cy="240" r="3"></circle>

            <line class="frame-line" x1="620" y1="70" x2="620" y2="141"></line>
            <line class="frame-line" x1="620" y1="169" x2="620" y2="240"></line>
            <circle class="plot-point-alt" cx="620" cy="155" r="14"></circle>
            <line class="frame-line" x1="610" y1="145" x2="630" y2="165"></line>
            <line class="frame-line" x1="610" y1="165" x2="630" y2="145"></line>

            <line class="curve-main" x1="375" y1="70" x2="410" y2="70" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="392" y="58" text-anchor="middle">I</text>
            <line class="curve-main" x1="480" y1="185" x2="480" y2="215" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="495" y="203" text-anchor="start">I₁</text>
            <line class="curve-main" x1="620" y1="185" x2="620" y2="215" marker-end="url(#arrow-phys4e-lois)"></line>
            <text class="annotation-label" x="602" y="203" text-anchor="end">I₂</text>

            <text class="annotation-label" x="495" y="130" text-anchor="start">U₁</text>
            <text class="annotation-label" x="602" y="130" text-anchor="end">U₂</text>
            <text class="label-soft" x="480" y="275" text-anchor="middle">I = I₁ + I₂</text>
          </svg>
        `,
        notes: [
          'Dans le circuit <strong>série</strong> (à gauche), il n\'existe qu\'une seule boucle : le même courant $I$ traverse successivement le générateur, la lampe 1 et la lampe 2 — c\'est la <strong>loi d\'unicité de l\'intensité</strong>.',
          'Toujours dans le circuit série, la tension du générateur se répartit entre les deux lampes : $U = U_1 + U_2$ — c\'est la <strong>loi d\'additivité des tensions</strong>.',
          'Dans le circuit en <strong>dérivation</strong> (à droite), les deux lampes forment deux branches distinctes qui partagent la <strong>même tension</strong> $U_1 = U_2$, tandis que le courant total se répartit entre elles : $I = I_1 + I_2$. C\'est exactement l\'inverse du circuit série.'
        ],
        reading: 'Compare les deux circuits en repérant d\'abord leur structure (une seule boucle à gauche, deux branches distinctes à droite), puis suis les étiquettes $I$ et $U$ : ce qui est unique dans un cas devient additif dans l\'autre, et réciproquement.',
        caption: 'Comparaison des deux structures de circuit : en série, l\'intensité est unique et les tensions s\'additionnent ; en dérivation, la tension est unique et les intensités s\'additionnent.'
      },
      example: {
        statement: 'Un circuit série comporte un générateur et deux lampes. Le générateur délivre une tension $U = 9$ V. Le voltmètre branché aux bornes de la première lampe indique $U_1 = 3{,}5$ V.<br/><br/>Calcule la tension $U_2$ aux bornes de la seconde lampe. L\'ampèremètre indique par ailleurs $I = 0{,}3$ A dans la première lampe : que peut-on dire de l\'intensité dans la seconde lampe, sans calcul ?',
        steps: [
          'Circuit série → loi d\'additivité des tensions : $U = U_1 + U_2$.',
          'On isole $U_2$ : $U_2 = U - U_1 = 9 - 3{,}5 = 5{,}5$ V.',
          'Circuit série → loi d\'unicité de l\'intensité : le courant est le même partout dans la boucle. Sans aucun calcul, l\'intensité dans la seconde lampe est donc aussi $I = 0{,}3$ A.'
        ],
        answer: '$U_2 = 5{,}5$ V, et $I = 0{,}3$ A dans les deux lampes (même valeur, loi d\'unicité).'
      },
      formulas: [
        'Série — intensité : $I = I_1 = I_2$ (unicité)',
        'Série — tension : $U = U_1 + U_2$ (additivité)',
        'Dérivation — intensité : $I = I_1 + I_2$ (additivité)',
        'Dérivation — tension : $U = U_1 = U_2$ (unicité)'
      ],
      recap: [
        'En <strong>série</strong>, il n\'y a qu\'une boucle : l\'intensité est <strong>unique</strong> ($I=I_1=I_2$) et la tension du générateur s\'<strong>additionne</strong> entre les dipôles ($U=U_1+U_2$).',
        'En <strong>dérivation</strong>, il y a plusieurs branches : la tension est <strong>unique</strong> aux bornes de chaque branche ($U=U_1=U_2$) et l\'intensité totale s\'<strong>additionne</strong> ($I=I_1+I_2$).',
        'Retenir le contraste : ce qui est unique dans un cas devient additif dans l\'autre, et réciproquement — les deux lois ne s\'appliquent jamais en même temps sur la même grandeur.',
        'Conséquence pratique : dans une guirlande série, une lampe grillée éteint tout ; dans une guirlande en dérivation, chaque branche fonctionne indépendamment des autres.'
      ],
      piege: 'Une erreur fréquente est de confondre les deux lois : appliquer l\'<strong>additivité</strong> des intensités à un circuit <strong>série</strong>, ou l\'<strong>unicité</strong> des tensions à un circuit en <strong>dérivation</strong>. Attention à toujours identifier d\'abord la structure du circuit (une seule boucle, ou plusieurs branches) avant de choisir la loi, et à retenir le contraste : « en série, l\'intensité est unique et la tension s\'additionne ; en dérivation, c\'est l\'inverse ».'
    },

    quiz: [
      {
        q: 'Dans un circuit série comportant deux lampes, l\'ampèremètre indique $I_1 = 0{,}4$ A dans la première lampe. Que peut-on dire de l\'intensité $I_2$ dans la seconde lampe ?',
        options: [
          '$I_2 = 0{,}4$ A, la même valeur (loi d\'unicité)',
          '$I_2$ est forcément plus petite',
          '$I_2$ est forcément plus grande',
          'On ne peut rien dire sans mesurer'
        ],
        answer: 0,
        correction: 'Dans un circuit série, il n\'y a qu\'une seule boucle : le courant est <strong>unique</strong> en tout point. $I_2 = I_1 = 0{,}4$ A.'
      },
      {
        q: 'Deux lampes sont branchées en dérivation aux bornes d\'un générateur délivrant $U = 6$ V. Quelle est la tension aux bornes de chaque lampe ?',
        options: [
          '$3$ V chacune, la tension se partage également',
          '$6$ V chacune : la tension est la même dans chaque branche',
          '$12$ V au total, réparti selon la résistance',
          'On ne peut pas savoir sans les intensités'
        ],
        answer: 1,
        correction: 'En dérivation, chaque branche est reliée directement aux deux mêmes bornes du générateur : elle reçoit donc la <strong>même tension</strong> que lui, soit $6$ V. La tension ne se « partage » pas comme le fait l\'intensité en dérivation.'
      },
      {
        q: 'Dans un circuit en dérivation à deux branches, l\'ampèremètre placé près du générateur indique un courant total $I = 0{,}9$ A. La première branche est parcourue par $I_1 = 0{,}5$ A. Quelle est l\'intensité $I_2$ dans la seconde branche ?',
        options: [
          '$I_2 = 0{,}9$ A (même valeur que $I$)',
          '$I_2 = 1{,}4$ A',
          '$I_2 = 0{,}4$ A',
          '$I_2 = 0{,}5$ A (même valeur que $I_1$)'
        ],
        answer: 2,
        correction: 'En dérivation, l\'intensité totale se répartit entre les branches : $I = I_1 + I_2$, donc $I_2 = I - I_1 = 0{,}9 - 0{,}5 = 0{,}4$ A.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var mode = pick(['serie', 'derivation']);
        var contextesSerie = [
          'une guirlande de décoration à deux lampes montées en série',
          'un circuit de démonstration avec deux lampes en série',
          'un jouet électronique avec deux voyants montés en série',
          'une maquette pédagogique à deux lampes en série'
        ];
        var contextesDerivation = [
          'une installation avec deux lampes montées en dérivation',
          'un tableau de maquette électrique avec deux branches en dérivation',
          'un circuit de démonstration à deux branches en dérivation',
          'deux appareils branchés en dérivation sur la même prise de test'
        ];

        if (mode === 'serie') {
          var ctx = pick(contextesSerie);
          var Utot = rand(6, 20);
          var U1 = randFloat(1, Utot - 1, 1);
          var U2 = parseFloat((Utot - U1).toFixed(1));
          return {
            statement: 'Dans ' + ctx + ', le générateur délivre une tension totale $U = ' + Utot + '$ V. Le voltmètre indique $U_1 = ' + fr(U1, 1) + '$ V aux bornes de la première lampe.<br/><br/>D\'après la loi d\'additivité des tensions, calcule la tension $U_2$ aux bornes de la seconde lampe (en V, arrondie au dixième).',
            answer: U2,
            tolerance: 0.15,
            unit: 'V',
            hint: 'Circuit série → loi d\'additivité des tensions : $U = U_1 + U_2$. Isole $U_2$.',
            solution: [
              'Loi d\'additivité des tensions (circuit série) : $U = U_1 + U_2$.',
              'On isole $U_2$ : $U_2 = U - U_1 = ' + Utot + ' - ' + fr(U1, 1) + '$.',
              'Résultat : $U_2 = ' + fr(U2, 1) + '$ V.'
            ]
          };
        } else {
          var ctx2 = pick(contextesDerivation);
          var Itot = randFloat(0.4, 3, 2);
          var I1 = randFloat(0.1, Itot - 0.1, 2);
          var I2 = parseFloat((Itot - I1).toFixed(2));
          return {
            statement: 'Dans ' + ctx2 + ', l\'ampèremètre placé près du générateur indique un courant total $I = ' + fr(Itot, 2) + '$ A. La première branche est parcourue par $I_1 = ' + fr(I1, 2) + '$ A.<br/><br/>D\'après la loi d\'additivité des intensités, calcule l\'intensité $I_2$ dans la seconde branche (en A, arrondie au centième).',
            answer: I2,
            tolerance: 0.03,
            unit: 'A',
            hint: 'Circuit en dérivation → loi d\'additivité des intensités : $I = I_1 + I_2$. Isole $I_2$.',
            solution: [
              'Loi d\'additivité des intensités (circuit en dérivation) : $I = I_1 + I_2$.',
              'On isole $I_2$ : $I_2 = I - I_1 = ' + fr(Itot, 2) + ' - ' + fr(I1, 2) + '$.',
              'Résultat : $I_2 = ' + fr(I2, 2) + '$ A.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une classe compare deux guirlandes décoratives à $4$ lampes identiques. La guirlande A est montée en <strong>série</strong> et alimentée sous une tension $U = 12$ V. La guirlande B est montée en <strong>dérivation</strong> et le courant total mesuré à la sortie du générateur est $I = 0{,}8$ A.',
      tasks: [
        'Pour la guirlande A (série), en supposant que les $4$ lampes se partagent également la tension totale, calculer la tension aux bornes d\'une seule lampe.',
        'Pour la guirlande B (dérivation), en supposant que les $4$ branches se partagent également le courant total, calculer l\'intensité dans une seule branche.',
        'Une lampe grille (elle ne conduit plus le courant) dans chacune des deux guirlandes. Expliquer ce qui se passe dans la guirlande A, puis dans la guirlande B.'
      ],
      solutions: [
        'Loi d\'additivité des tensions en série : $U = U_1+U_2+U_3+U_4$. Avec $4$ lampes identiques se partageant également : $U_{\\text{lampe}} = \\dfrac{12}{4} = 3$ V.',
        'Loi d\'additivité des intensités en dérivation : $I = I_1+I_2+I_3+I_4$. Avec $4$ branches identiques se partageant également : $I_{\\text{branche}} = \\dfrac{0{,}8}{4} = 0{,}2$ A.',
        'Dans la guirlande A (série), une seule boucle relie toutes les lampes : si une lampe grille, le circuit est <strong>coupé</strong> partout, et <strong>toutes</strong> les lampes s\'éteignent. Dans la guirlande B (dérivation), chaque lampe est sur sa propre branche indépendante : si une lampe grille, seule <strong>sa</strong> branche s\'éteint, les trois autres continuent de fonctionner normalement.'
      ],
      finalAnswer: 'Guirlande A (série) : $3$ V par lampe ; une lampe grillée éteint toute la guirlande. Guirlande B (dérivation) : $0{,}2$ A par branche ; une lampe grillée n\'éteint que sa propre branche. C\'est pourquoi les installations électriques domestiques utilisent systématiquement le montage en dérivation.'
    },

    evaluation: {
      title: 'Évaluation — Les lois des circuits',
      duration: '20 min',
      questions: [
        {
          statement: 'Dans un circuit série à deux lampes, $U = 15$ V et $U_1 = 9$ V. Calculer $U_2$ (en V).',
          type: 'numeric',
          answer: 6,
          tolerance: 0.2,
          unit: 'V',
          points: 2,
          correction: '$U_2 = U - U_1 = 15 - 9 = 6$ V (loi d\'additivité des tensions, circuit série).'
        },
        {
          statement: 'Dans un circuit série, l\'intensité :',
          type: 'multiple-choice',
          options: [
            'Se répartit entre les dipôles',
            'Est la même en tout point du circuit',
            'Est toujours nulle',
            'Double à chaque dipôle traversé'
          ],
          answer: 1,
          points: 1,
          correction: 'Un circuit série ne comporte qu\'une seule boucle : le même courant la traverse en tout point (loi d\'unicité de l\'intensité).'
        },
        {
          statement: 'Dans un circuit en dérivation à deux branches, $I = 1{,}2$ A et $I_1 = 0{,}7$ A. Calculer $I_2$ (en A).',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.05,
          unit: 'A',
          points: 2,
          correction: '$I_2 = I - I_1 = 1{,}2 - 0{,}7 = 0{,}5$ A (loi d\'additivité des intensités, circuit en dérivation).'
        },
        {
          statement: 'Dans un circuit en dérivation, la tension aux bornes de chaque branche est :',
          type: 'multiple-choice',
          options: [
            'Toujours nulle',
            'Différente pour chaque branche',
            'La même pour toutes les branches, égale à celle du générateur',
            'Égale à la somme des tensions de toutes les branches'
          ],
          answer: 2,
          points: 2,
          correction: 'Chaque branche d\'un circuit en dérivation est reliée directement aux deux mêmes bornes du générateur : elle reçoit donc la même tension que lui (loi d\'unicité de la tension).'
        },
        {
          statement: 'Une guirlande série de $5$ lampes identiques est alimentée sous $U = 20$ V. En supposant un partage égal, calculer la tension aux bornes d\'une seule lampe (en V).',
          type: 'numeric',
          answer: 4,
          tolerance: 0.2,
          unit: 'V',
          points: 3,
          correction: '$U_{\\text{lampe}} = \\dfrac{U}{5} = \\dfrac{20}{5} = 4$ V (les $5$ tensions identiques s\'additionnent pour redonner $U$).'
        }
      ]
    }
  });
