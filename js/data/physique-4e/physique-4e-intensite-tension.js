/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-intensite-tension.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-intensite-tension',
    level: 1, subject: 'physique',
    icon: '🔋',
    title: 'L\'intensité et la tension électrique',
    subtitle: 'Ampèremètre en série, voltmètre en dérivation, unités A et V, calibre, court-circuit',
    keywords: ['Intensité', 'Tension', 'Ampèremètre', 'Voltmètre', 'Court-circuit', 'Calibre'],
    physics: 'Savoir brancher un ampèremètre ou un voltmètre est indispensable pour tester une pile faible, diagnostiquer une guirlande qui ne s\'allume plus, ou vérifier la tension délivrée par un chargeur avant de l\'utiliser.',

    cours: {
      intro: 'Un circuit électrique simple comporte un <strong>générateur</strong> (pile, batterie…) qui fait circuler le courant, relié par des fils à un ou plusieurs <strong>dipôles</strong> récepteurs (lampe, moteur…). Par convention, le courant électrique circule à l\'extérieur du générateur de la borne $+$ vers la borne $-$.<br/><br/>L\'<strong>intensité du courant</strong> $I$ mesure le débit de charges électriques qui traverse le circuit à chaque instant ; elle se mesure en <strong>ampères</strong> (A) à l\'aide d\'un ampèremètre. La <strong>tension électrique</strong> $U$ mesure la différence d\'état électrique entre deux points du circuit (par exemple aux bornes d\'une lampe) ; elle se mesure en <strong>volts</strong> (V) à l\'aide d\'un voltmètre.<br/><br/>Ces deux appareils de mesure ne se branchent <strong>jamais de la même façon</strong> : l\'ampèremètre s\'insère <strong>en série</strong>, directement dans le circuit, tandis que le voltmètre se branche <strong>en dérivation</strong>, aux bornes du dipôle étudié, sans rien débrancher.',
      definitions: [
        { term: 'Intensité électrique', def: 'Grandeur notée $I$, mesurant le débit de courant dans un circuit. Se mesure en <strong>ampères</strong> (A) à l\'aide d\'un ampèremètre branché <strong>en série</strong>.' },
        { term: 'Ampèremètre', def: 'Appareil de mesure de l\'intensité, à insérer <strong>en série</strong> dans le circuit (le courant doit le traverser). Toujours choisir le plus grand calibre avant de l\'affiner, par sécurité.' },
        { term: 'Tension électrique', def: 'Grandeur notée $U$, mesurant la différence d\'état électrique entre deux points d\'un circuit. Se mesure en <strong>volts</strong> (V) à l\'aide d\'un voltmètre branché <strong>en dérivation</strong>.' },
        { term: 'Voltmètre', def: 'Appareil de mesure de la tension, à brancher <strong>en dérivation</strong> (en parallèle) aux bornes du dipôle étudié, sans jamais l\'insérer dans la boucle principale.' },
        { term: 'Court-circuit', def: 'Branchement accidentel reliant directement deux points d\'un circuit sans résistance suffisante entre eux (ex. un ampèremètre branché en dérivation) : l\'intensité devient dangereusement élevée.' }
      ],
      method: {
        title: 'Mesurer l\'intensité et la tension dans un circuit en 3 étapes',
        steps: [
          'Pour mesurer $I$ : <strong>insérer l\'ampèremètre en série</strong>, en coupant le fil à l\'endroit voulu et en respectant le sens du courant (borne $A$ reliée vers le $+$ du générateur, borne $COM$ vers le $-$).',
          'Pour mesurer $U$ : <strong>brancher le voltmètre en dérivation</strong>, directement aux deux bornes du dipôle étudié, sans rien débrancher dans le circuit principal.',
          'Dans les deux cas, <strong>choisir un calibre adapté</strong> : toujours commencer par le plus grand calibre disponible par sécurité, puis affiner si la lecture est peu précise.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mesurer I et U',
        title: 'Bien brancher l\'ampèremètre (série) et le voltmètre (dérivation)',
        description: 'Dans un même circuit, l\'ampèremètre s\'insère dans la boucle principale tandis que le voltmètre se branche en dérivation aux bornes du composant étudié — deux branchements très différents à ne jamais confondre.',
        svg: `
          <svg viewBox="0 0 640 280" role="img" aria-labelledby="circuit-4e-title circuit-4e-desc">
            <title id="circuit-4e-title">Circuit avec generateur, lampe, amperemetre en serie et voltmetre en derivation</title>
            <desc id="circuit-4e-desc">Une boucle rectangulaire relie un generateur sur le cote gauche, un amperemetre insere sur le cote superieur, et une lampe inseree sur le cote droit, le tout referme par un fil sur le cote inferieur. Une fleche sur le cote superieur indique le sens du courant. Une branche secondaire part des deux bornes de la lampe pour rejoindre un voltmetre place a l'exterieur de la boucle principale, montrant que le voltmetre est branche en derivation alors que l'amperemetre est insere directement dans la boucle en serie.</desc>

            <defs>
              <marker id="arrow-phys4e-circuit" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- boucle principale -->
            <line class="frame-line" x1="90" y1="80" x2="284" y2="80"></line>
            <line class="frame-line" x1="316" y1="80" x2="500" y2="80"></line>
            <line class="frame-line" x1="500" y1="80" x2="500" y2="134"></line>
            <line class="frame-line" x1="500" y1="166" x2="500" y2="220"></line>
            <line class="frame-line" x1="500" y1="220" x2="90" y2="220"></line>
            <line class="frame-line" x1="90" y1="220" x2="90" y2="165"></line>
            <line class="frame-line" x1="90" y1="135" x2="90" y2="80"></line>

            <!-- generateur -->
            <line class="frame-line" x1="70" y1="135" x2="110" y2="135"></line>
            <line class="curve-main" x1="78" y1="155" x2="102" y2="155"></line>

            <!-- fleche de courant I -->
            <line class="curve-main" x1="150" y1="80" x2="210" y2="80" marker-end="url(#arrow-phys4e-circuit)"></line>
            <text class="annotation-label" x="180" y="68" text-anchor="middle">I</text>

            <!-- ampermetre -->
            <circle class="plot-point-alt" cx="300" cy="80" r="16"></circle>
            <text class="label" x="300" y="85" text-anchor="middle">A</text>

            <!-- lampe -->
            <circle class="plot-point-alt" cx="500" cy="150" r="16"></circle>
            <line class="frame-line" x1="489" y1="139" x2="511" y2="161"></line>
            <line class="frame-line" x1="489" y1="161" x2="511" y2="139"></line>
            <text class="label-soft" x="455" y="146" text-anchor="end">Lampe</text>

            <!-- noeuds de derivation -->
            <circle class="plot-point" cx="500" cy="134" r="3"></circle>
            <circle class="plot-point" cx="500" cy="166" r="3"></circle>

            <!-- branche du voltmetre -->
            <line class="frame-line" x1="500" y1="134" x2="565" y2="134"></line>
            <line class="frame-line" x1="565" y1="134" x2="565" y2="136"></line>
            <line class="frame-line" x1="565" y1="164" x2="565" y2="166"></line>
            <line class="frame-line" x1="565" y1="166" x2="500" y2="166"></line>
            <circle class="plot-point-alt" cx="565" cy="150" r="14"></circle>
            <text class="label" x="565" y="155" text-anchor="middle">V</text>
            <text class="label-soft" x="565" y="196" text-anchor="middle">Voltmètre</text>

            <!-- etiquettes -->
            <text class="label-soft" x="90" y="55" text-anchor="middle">Générateur</text>
            <text class="label-soft" x="300" y="55" text-anchor="middle">Ampèremètre</text>
          </svg>
        `,
        notes: [
          'L\'<strong>ampèremètre</strong> (symbole $A$) se branche <strong>en série</strong>, directement inséré dans le circuit : tout le courant qui circule dans la boucle principale le traverse.',
          'Le <strong>voltmètre</strong> (symbole $V$) se branche <strong>en dérivation</strong>, sur une branche à part reliant les deux bornes de la lampe : il ne coupe jamais le circuit principal.',
          'Ne jamais brancher un ampèremètre en dérivation comme un voltmètre : sa résistance interne étant quasiment nulle, cela provoquerait un <strong>court-circuit</strong> et un courant dangereusement élevé.'
        ],
        reading: 'Repère d\'abord la boucle principale (générateur, ampèremètre, lampe) : c\'est le circuit série que traverse le courant $I$. Le voltmètre, lui, forme une boucle secondaire séparée, uniquement autour de la lampe.',
        caption: 'Circuit avec un générateur et une lampe : l\'ampèremètre, inséré en série dans la boucle principale, mesure l\'intensité $I$ ; le voltmètre, branché en dérivation aux bornes de la lampe, mesure la tension $U$ à ses bornes.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Calibre et court-circuit',
          title: 'Bien choisir le calibre, éviter le court-circuit',
          description: 'Pour une même intensité réelle, le choix du calibre change tout : trop grand, la lecture devient imprécise voire illisible. Et un ampèremètre ne se branche jamais en dérivation, sous peine de court-circuit.',
          svg: `
            <svg viewBox="0 0 520 420" role="img" aria-labelledby="circuit-4e-calibre-title circuit-4e-calibre-desc">
              <title id="circuit-4e-calibre-title">Choix du calibre et court-circuit de l'amperemetre</title>
              <desc id="circuit-4e-calibre-desc">Trois barres horizontales representent les calibres 200 mA, 2 A et 10 A d'un amperemetre, chacune graduee de zero a sa valeur maximale a droite. Un repere indique la position de la meme intensite reelle de 150 mA sur chaque calibre : tres avance sur le calibre 200 mA, ce qui donne une lecture precise ; presque au debut sur le calibre 2 A, lecture imprecise ; quasiment confondu avec le zero sur le calibre 10 A, lecture quasi nulle. En dessous, un schema montre une lampe dont les deux bornes sont reliees directement a un amperemetre au lieu d'etre inserees en serie dans la boucle principale, avec une croix et une mention d'avertissement indiquant qu'il s'agit d'un court-circuit interdit.</desc>

              <text class="annotation-label" x="280" y="30" text-anchor="middle">CHOISIR LE CALIBRE</text>

              <!-- ===== Barre 1 : calibre 200 mA — repere a 150/200 = 75% ===== -->
              <line class="frame-line" x1="140" y1="64" x2="140" y2="76"></line>
              <line class="frame-line" x1="420" y1="64" x2="420" y2="76"></line>
              <line class="axis" x1="140" y1="70" x2="420" y2="70"></line>
              <text class="label" x="125" y="74" text-anchor="end">200 mA</text>
              <circle class="plot-point" cx="350" cy="70" r="6"></circle>
              <text class="tick-label" x="280" y="90" text-anchor="middle">lecture précise</text>

              <!-- ===== Barre 2 : calibre 2 A — repere a 0,15/2 = 7,5% ===== -->
              <line class="frame-line" x1="140" y1="134" x2="140" y2="146"></line>
              <line class="frame-line" x1="420" y1="134" x2="420" y2="146"></line>
              <line class="axis" x1="140" y1="140" x2="420" y2="140"></line>
              <text class="label" x="125" y="144" text-anchor="end">2 A</text>
              <circle class="plot-point" cx="161" cy="140" r="6"></circle>
              <text class="tick-label" x="280" y="160" text-anchor="middle">lecture imprécise</text>

              <!-- ===== Barre 3 : calibre 10 A — repere a 0,15/10 = 1,5% ===== -->
              <line class="frame-line" x1="140" y1="204" x2="140" y2="216"></line>
              <line class="frame-line" x1="420" y1="204" x2="420" y2="216"></line>
              <line class="axis" x1="140" y1="210" x2="420" y2="210"></line>
              <text class="label" x="125" y="214" text-anchor="end">10 A</text>
              <circle class="plot-point" cx="144" cy="210" r="6"></circle>
              <text class="tick-label" x="280" y="230" text-anchor="middle">lecture quasi nulle</text>

              <line class="guide-line" x1="60" y1="250" x2="460" y2="250"></line>

              <!-- ===== Court-circuit : amperemetre branche en derivation ===== -->
              <text class="annotation-label" x="280" y="275" text-anchor="middle">JAMAIS EN DÉRIVATION</text>

              <line class="frame-line" x1="280" y1="296" x2="280" y2="314"></line>
              <line class="frame-line" x1="280" y1="346" x2="280" y2="364"></line>
              <circle class="plot-point-alt" cx="280" cy="330" r="16"></circle>
              <line class="frame-line" x1="269" y1="319" x2="291" y2="341"></line>
              <line class="frame-line" x1="269" y1="341" x2="291" y2="319"></line>
              <text class="label-soft" x="255" y="335" text-anchor="end">Lampe</text>

              <circle class="plot-point" cx="280" cy="296" r="3"></circle>
              <circle class="plot-point" cx="280" cy="364" r="3"></circle>
              <line class="frame-line" x1="280" y1="296" x2="345" y2="296"></line>
              <line class="frame-line" x1="345" y1="296" x2="345" y2="314"></line>
              <line class="frame-line" x1="345" y1="346" x2="345" y2="364"></line>
              <line class="frame-line" x1="345" y1="364" x2="280" y2="364"></line>
              <circle class="plot-point-alt" cx="345" cy="330" r="16"></circle>
              <text class="label" x="345" y="335" text-anchor="middle">A</text>

              <text x="345" y="304" text-anchor="middle" style="fill:var(--error);font-weight:700;font-size:14px">✕</text>
              <text x="345" y="390" text-anchor="middle" style="fill:var(--error);font-weight:700;font-size:12px">✕ Court-circuit interdit</text>
            </svg>
          `,
          notes: [
            'Les trois barres représentent les trois calibres disponibles de l\'ampèremètre ($200$ mA, $2$ A, $10$ A), chacune graduée de $0$ à sa valeur maximale. Le repère indique où se positionnerait la <strong>même intensité réelle</strong> ($150$ mA $= 0{,}15$ A) sur chacune.',
            'Sur le calibre $200$ mA, $150$ mA occupe $75\\,\\%$ de l\'échelle : la lecture est <strong>précise</strong>. Sur le calibre $2$ A, la même intensité n\'occupe que $7{,}5\\,\\%$ de l\'échelle : la lecture devient <strong>imprécise</strong>. Sur le calibre $10$ A, elle n\'occupe que $1{,}5\\,\\%$ : la lecture est <strong>quasiment inexploitable</strong>.',
            'En bas, un ampèremètre <strong>branché en dérivation</strong> (comme un voltmètre) aux bornes de la lampe : sa résistance interne quasi nulle transforme ce branchement en <strong>court-circuit</strong>, avec un courant dangereusement élevé — c\'est exactement l\'erreur ciblée par le piège de ce chapitre.'
          ],
          reading: 'Repère d\'abord la position du repère sur chacun des trois calibres (en haut) : plus il est proche du centre de l\'échelle, plus la lecture est précise. Regarde ensuite le montage du bas : l\'ampèremètre y est branché comme un voltmètre, ce qu\'il ne faut jamais faire.',
          caption: 'Choisir le calibre juste au-dessus de la valeur attendue donne la lecture la plus précise ; brancher l\'ampèremètre en dérivation provoque toujours un court-circuit.'
        }
      ],
      example: {
        statement: 'Dans un circuit série comportant un générateur et une lampe, on veut mesurer l\'intensité qui la traverse à l\'aide d\'un ampèremètre proposant trois calibres : $200$ mA, $2$ A et $10$ A. On estime, avant la mesure, que l\'intensité attendue est proche de $150$ mA.<br/><br/>Quel calibre choisir, et pourquoi ?',
        steps: [
          'Par sécurité, on ne connaît jamais la valeur exacte à l\'avance : la règle est de toujours commencer par le <strong>plus grand calibre</strong> ($10$ A ici), pour ne pas risquer d\'endommager l\'appareil si l\'intensité réelle est plus forte que prévu.',
          'Une fois cette première mesure de sécurité faite, on peut affiner : comme l\'estimation ($150$ mA) reste inférieure au calibre $200$ mA, on peut passer sur ce calibre pour obtenir une lecture plus précise.',
          'On vérifie enfin le branchement : ampèremètre bien inséré <strong>en série</strong>, bornes $A$ et $COM$ respectées, avant de refermer le circuit.'
        ],
        answer: 'On choisit finalement le calibre $200$ mA (après être passé par le plus grand calibre par sécurité), ce qui permet une lecture précise de l\'intensité proche de $150$ mA.'
      },
      formulas: [
        'Intensité $I$ : ampèremètre branché en série, unité l\'ampère (A)',
        'Tension $U$ : voltmètre branché en dérivation, unité le volt (V)',
        '$1\\,\\text{A} = 1\\,000\\,\\text{mA}$',
        '$1\\,\\text{V} = 1\\,000\\,\\text{mV}$',
        'Court-circuit : intensité dangereusement élevée, à éviter absolument'
      ],
      recap: [
        'L\'<strong>intensité</strong> $I$ (en ampères) se mesure avec un ampèremètre branché <strong>en série</strong> ; la <strong>tension</strong> $U$ (en volts) se mesure avec un voltmètre branché <strong>en dérivation</strong>.',
        'Le courant électrique circule, par convention, de la borne $+$ vers la borne $-$ à l\'extérieur du générateur.',
        'Toujours commencer par le <strong>plus grand calibre</strong> disponible avant d\'affiner, pour protéger l\'appareil de mesure.',
        'Un ampèremètre branché en dérivation (comme un voltmètre) provoque un <strong>court-circuit</strong> dangereux : sa résistance interne quasi nulle laisse passer un courant très élevé.'
      ],
      piege: 'Une erreur fréquente est de brancher l\'ampèremètre <strong>en dérivation</strong> aux bornes d\'un dipôle, comme on le ferait pour un voltmètre. Attention : la résistance interne d\'un ampèremètre est quasiment nulle, ce branchement provoque un <strong>court-circuit</strong> et un courant dangereusement élevé, qui peut endommager l\'appareil ou le circuit — l\'ampèremètre doit toujours être <strong>inséré en série</strong>, jamais en dérivation.'
    },

    quiz: [
      {
        q: 'Pour mesurer l\'intensité du courant qui traverse une lampe, comment doit-on brancher l\'ampèremètre ?',
        options: [
          'En dérivation, aux bornes de la lampe',
          'En série, inséré directement dans le circuit',
          'Cela n\'a pas d\'importance',
          'Uniquement en dérivation aux bornes du générateur'
        ],
        answer: 1,
        correction: 'L\'ampèremètre mesure le courant qui le traverse : il doit donc être <strong>inséré en série</strong> dans le circuit, de façon à ce que tout le courant de la boucle le traverse.'
      },
      {
        q: 'Un ampèremètre affiche $I = 250$ mA. Combien cela représente-t-il en ampères ?',
        options: ['$2{,}5$ A', '$0{,}25$ A', '$25$ A', '$250\\,000$ A'],
        answer: 1,
        correction: '$1$ A $= 1\\,000$ mA, donc $250$ mA $= \\dfrac{250}{1\\,000} = 0{,}25$ A.'
      },
      {
        q: 'Que se passe-t-il si l\'on branche un ampèremètre en dérivation, comme un voltmètre ?',
        options: [
          'Rien de particulier, cela fonctionne comme prévu',
          'L\'ampèremètre affiche simplement une valeur nulle',
          'Un court-circuit se produit : l\'intensité devient dangereusement élevée',
          'La tension mesurée devient négative'
        ],
        answer: 2,
        correction: 'La résistance interne d\'un ampèremètre est quasiment nulle. En dérivation, il court-circuite le dipôle : l\'intensité qui le traverse devient très élevée, ce qui peut endommager l\'appareil ou le circuit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var grandeur = pick(['intensite', 'tension']);
        var contextes = [
          'une lampe de poche', 'un chargeur de téléphone', 'une guirlande lumineuse à piles',
          'un jouet télécommandé', 'une radio à piles', 'un petit ventilateur USB'
        ];
        var ctx = pick(contextes);
        var sens = pick(['vers_petite', 'vers_grande']);

        if (grandeur === 'intensite') {
          if (sens === 'vers_petite') {
            var mA = pick([25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 375, 400, 450, 500, 600, 750, 800, 900]);
            var A = parseFloat((mA / 1000).toFixed(3));
            return {
              statement: 'Un ampèremètre branché en série dans le circuit de ' + ctx + ' affiche une intensité $I = ' + mA + '$ mA.<br/><br/>Exprime cette intensité en ampères (A).',
              answer: A,
              tolerance: 0.001,
              unit: 'A',
              hint: 'Utilise $1\\,\\text{A} = 1\\,000\\,\\text{mA}$ : divise la valeur en mA par $1\\,000$.',
              solution: [
                '$1\\,\\text{A} = 1\\,000\\,\\text{mA}$, donc $I(\\text{A}) = \\dfrac{I(\\text{mA})}{1\\,000}$.',
                'Application numérique : $I = \\dfrac{' + mA + '}{1\\,000}$.',
                'Résultat : $I = ' + fr(A, 3) + '$ A.'
              ]
            };
          } else {
            var Aval = randFloat(0.05, 3, 2);
            var mAval = parseFloat((Aval * 1000).toFixed(0));
            return {
              statement: 'Un ampèremètre branché en série dans le circuit de ' + ctx + ' affiche une intensité $I = ' + fr(Aval, 2) + '$ A.<br/><br/>Exprime cette intensité en milliampères (mA).',
              answer: mAval,
              tolerance: 1,
              unit: 'mA',
              hint: 'Utilise $1\\,\\text{A} = 1\\,000\\,\\text{mA}$ : multiplie la valeur en A par $1\\,000$.',
              solution: [
                '$1\\,\\text{A} = 1\\,000\\,\\text{mA}$, donc $I(\\text{mA}) = I(\\text{A}) \\times 1\\,000$.',
                'Application numérique : $I = ' + fr(Aval, 2) + ' \\times 1\\,000$.',
                'Résultat : $I = ' + mAval + '$ mA.'
              ]
            };
          }
        } else {
          if (sens === 'vers_petite') {
            var mV = pick([100, 150, 200, 250, 300, 400, 500, 600, 750, 800, 900, 1200, 1500, 2000, 2500, 3000]);
            var V = parseFloat((mV / 1000).toFixed(3));
            return {
              statement: 'Un voltmètre branché en dérivation aux bornes d\'un capteur électronique associé à ' + ctx + ' affiche une tension $U = ' + mV + '$ mV.<br/><br/>Exprime cette tension en volts (V).',
              answer: V,
              tolerance: 0.001,
              unit: 'V',
              hint: 'Utilise $1\\,\\text{V} = 1\\,000\\,\\text{mV}$ : divise la valeur en mV par $1\\,000$.',
              solution: [
                '$1\\,\\text{V} = 1\\,000\\,\\text{mV}$, donc $U(\\text{V}) = \\dfrac{U(\\text{mV})}{1\\,000}$.',
                'Application numérique : $U = \\dfrac{' + mV + '}{1\\,000}$.',
                'Résultat : $U = ' + fr(V, 3) + '$ V.'
              ]
            };
          } else {
            var Vval = randFloat(0.5, 12, 2);
            var mVval = parseFloat((Vval * 1000).toFixed(0));
            return {
              statement: 'Un voltmètre branché en dérivation aux bornes de la pile qui alimente ' + ctx + ' affiche une tension $U = ' + fr(Vval, 2) + '$ V.<br/><br/>Exprime cette tension en millivolts (mV).',
              answer: mVval,
              tolerance: 1,
              unit: 'mV',
              hint: 'Utilise $1\\,\\text{V} = 1\\,000\\,\\text{mV}$ : multiplie la valeur en V par $1\\,000$.',
              solution: [
                '$1\\,\\text{V} = 1\\,000\\,\\text{mV}$, donc $U(\\text{mV}) = U(\\text{V}) \\times 1\\,000$.',
                'Application numérique : $U = ' + fr(Vval, 2) + ' \\times 1\\,000$.',
                'Résultat : $U = ' + mVval + '$ mV.'
              ]
            };
          }
        }
      }
    },

    probleme: {
      context: 'On installe un circuit de test pour une lampe de vélo alimentée par une pile plate de $4{,}5$ V. On dispose d\'un ampèremètre à trois calibres ($200$ mA, $2$ A, $10$ A) et d\'un voltmètre.',
      tasks: [
        'Expliquer comment brancher l\'ampèremètre pour mesurer l\'intensité qui traverse la lampe, et comment brancher le voltmètre pour mesurer la tension à ses bornes.',
        'On estime que l\'intensité attendue est d\'environ $300$ mA. Quel calibre de l\'ampèremètre choisir pour une lecture à la fois sûre et précise ? Justifier la démarche en deux temps.',
        'Un camarade propose de brancher l\'ampèremètre directement aux bornes de la lampe, comme le voltmètre, pour « gagner du temps ». Expliquer pourquoi c\'est dangereux.'
      ],
      solutions: [
        'L\'ampèremètre se branche <strong>en série</strong> : on coupe le circuit à l\'endroit voulu et on l\'insère dans la boucle, de façon à ce que tout le courant le traverse. Le voltmètre se branche <strong>en dérivation</strong>, directement aux deux bornes de la lampe, sans rien débrancher.',
        'Par sécurité, on commence toujours par le plus grand calibre ($10$ A) pour une première estimation sans risque. Comme l\'intensité attendue ($300$ mA $= 0{,}3$ A) est inférieure à $2$ A mais supérieure à $200$ mA, on choisit ensuite le calibre $2$ A pour obtenir une lecture précise sans dépasser le calibre.',
        'Un ampèremètre a une résistance interne quasiment nulle. Branché en dérivation, il court-circuiterait la lampe : l\'intensité qui le traverserait deviendrait extrêmement élevée, au risque d\'endommager l\'ampèremètre, la pile, ou de provoquer un échauffement dangereux.'
      ],
      finalAnswer: 'Ampèremètre en série, voltmètre en dérivation. Pour $300$ mA attendus, on choisit le calibre $2$ A après être passé par le plus grand calibre de sécurité. Brancher l\'ampèremètre en dérivation provoquerait un court-circuit dangereux : ce geste est à proscrire absolument.'
    },

    evaluation: {
      title: 'Évaluation — L\'intensité et la tension électrique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un ampèremètre affiche $I = 450$ mA. Exprime cette intensité en ampères.',
          type: 'numeric',
          answer: 0.45,
          tolerance: 0.01,
          unit: 'A',
          points: 2,
          correction: '$I = \\dfrac{450}{1\\,000} = 0{,}45$ A.'
        },
        {
          statement: 'Le voltmètre se branche toujours :',
          type: 'multiple-choice',
          options: [
            'En série, dans la boucle principale',
            'En dérivation, aux bornes du dipôle étudié',
            'Uniquement aux bornes du générateur',
            'Cela dépend du type de circuit'
          ],
          answer: 1,
          points: 2,
          correction: 'Le voltmètre mesure une différence d\'état électrique entre deux points : il se branche en dérivation, directement aux bornes du dipôle étudié, sans jamais couper le circuit.'
        },
        {
          statement: 'Un voltmètre affiche $U = 2{,}5$ V. Exprime cette tension en millivolts.',
          type: 'numeric',
          answer: 2500,
          tolerance: 10,
          unit: 'mV',
          points: 2,
          correction: '$U = 2{,}5 \\times 1\\,000 = 2\\,500$ mV.'
        },
        {
          statement: 'Pourquoi ne faut-il jamais brancher un ampèremètre en dérivation ?',
          type: 'multiple-choice',
          options: [
            'Cela endommagerait uniquement le voltmètre',
            'Sa résistance interne quasi nulle provoquerait un court-circuit et un courant dangereusement élevé',
            'Cela ferait baisser la tension du générateur à zéro',
            'Aucune raison particulière, c\'est simplement déconseillé par habitude'
          ],
          answer: 1,
          points: 2,
          correction: 'La résistance interne très faible d\'un ampèremètre, branché en dérivation, court-circuite le dipôle : l\'intensité devient dangereusement élevée.'
        },
        {
          statement: 'Avant une mesure, on ne connaît pas la valeur exacte de l\'intensité attendue. Parmi les calibres $200$ mA, $2$ A et $10$ A, quel calibre (en A) doit-on choisir en premier, par sécurité ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'A',
          points: 2,
          correction: 'Par sécurité, on choisit toujours le plus grand calibre disponible en premier ($10$ A), pour ne pas risquer d\'endommager l\'appareil si l\'intensité réelle est plus forte que prévu.'
        }
      ]
    }
  });
