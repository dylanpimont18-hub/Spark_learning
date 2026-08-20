/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-son.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-son',
    level: 2, subject: 'physique',
    icon: '🔊',
    title: 'Émission et perception du son',
    subtitle: 'Onde sonore, période, fréquence, amplitude, niveau d\'intensité sonore, domaine audible',
    keywords: ['Son', 'Fréquence', 'Période', 'Amplitude', 'Décibel'],
    physics: 'Comprendre le son permet d\'accorder un instrument de musique, de régler une protection auditive sur un chantier bruyant, d\'interpréter une échographie médicale, ou de comprendre le fonctionnement d\'un sonar de bateau.',

    cours: {
      intro: 'Contrairement à la lumière, le son ne peut pas traverser le vide : dans l\'espace, aucune explosion ne s\'entend, malgré ce que montrent la plupart des films de science-fiction. Le son est une <strong>onde mécanique</strong>, c\'est-à-dire une vibration qui se propage de proche en proche dans un <strong>milieu matériel</strong> (l\'air, l\'eau, un solide), par compressions et dépressions successives.<br/><br/>Un microphone transforme cette vibration en un signal électrique, que l\'on peut visualiser sur un <strong>oscillogramme</strong>. Deux grandeurs suffisent alors à caractériser presque entièrement ce que l\'on entend : la <strong>fréquence</strong>, liée à la hauteur du son (aigu ou grave), et l\'<strong>amplitude</strong>, liée à son intensité (fort ou faible).',
      definitions: [
        { term: 'Son', def: 'Onde mécanique résultant de vibrations qui se propagent de proche en proche dans un milieu matériel (l\'air, l\'eau, un solide), par compressions et dépressions successives. Le son ne se propage <strong>pas</strong> dans le vide.' },
        { term: 'Période $T$ et fréquence $f$', def: 'Pour un son périodique, la période $T$ (en s) est la durée d\'un motif qui se répète ; la fréquence $f = \\dfrac{1}{T}$ (en Hz) est le nombre de répétitions par seconde. Elle détermine la <strong>hauteur</strong> du son (aigu si $f$ est grande, grave si $f$ est petite).' },
        { term: 'Amplitude', def: 'Écart maximal du signal sonore par rapport à sa valeur moyenne. Elle est liée à l\'<strong>intensité sonore</strong> perçue : un son plus fort a une amplitude plus grande.' },
        { term: 'Niveau d\'intensité sonore $L$', def: 'Grandeur exprimée en <strong>décibels (dB)</strong>, mesurée au sonomètre, qui quantifie la puissance sonore perçue (seuil de douleur $\\approx 120$ dB ; risques auditifs au-delà de $85$ dB en exposition prolongée).' }
      ],
      method: {
        title: 'Exploiter un oscillogramme sonore en 3 étapes',
        steps: [
          '<strong>Identifier un motif</strong> qui se répète sur l\'oscillogramme, et mesurer sa durée : c\'est la <strong>période</strong> $T$ (en s).',
          '<strong>Calculer la fréquence</strong> $f = \\dfrac{1}{T}$ (en Hz), qui renseigne directement sur la hauteur du son perçu.',
          '<strong>Comparer</strong> $f$ au domaine de l\'audible humain ($20$ Hz à $20\\,000$ Hz) : en dessous, c\'est un infrason ; au-dessus, un ultrason — tous deux inaudibles pour l\'oreille humaine.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Oscillogramme d\'un signal sonore périodique',
        title: 'Mesurer une période pour calculer une fréquence',
        description: 'Un microphone relié à un oscilloscope capte un son pur : la tension $u(t)$, image du son, varie périodiquement. La période $T$, mesurée entre deux motifs identiques, permet de calculer la fréquence $f = \\dfrac{1}{T}$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="son2nde-title son2nde-desc">
            <title id="son2nde-title">Oscillogramme d'un signal sonore periodique</title>
            <desc id="son2nde-desc">Un graphique represente la tension u en volts en fonction du temps t en millisecondes. La courbe est une sinusoide oscillant entre moins deux volts et plus deux volts, centree sur zero, et deux periodes completes sont visibles entre zero et huit millisecondes. Une cotation horizontale sous la courbe indique la duree d'une periode, quatre millisecondes, entre le debut de la courbe et le point ou le motif se repete exactement. Un repere vertical sur le premier maximum indique que l'amplitude maximale du signal vaut deux volts.</desc>

            <defs>
              <marker id="arrow-phys2-son" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes (l'axe des temps est confondu avec u = 0) -->
            <line class="frame-line" x1="45" y1="150" x2="490" y2="150" marker-end="url(#arrow-phys2-son)"></line>
            <line class="frame-line" x1="60" y1="280" x2="60" y2="20" marker-end="url(#arrow-phys2-son)"></line>
            <text class="tick-label" x="60" y="14" text-anchor="middle">u (V)</text>
            <text class="tick-label" x="502" y="145" text-anchor="start">t (ms)</text>

            <text class="tick-label" x="44" y="74" text-anchor="end">2</text>
            <text class="tick-label" x="44" y="154" text-anchor="end">0</text>
            <text class="tick-label" x="44" y="234" text-anchor="end">−2</text>

            <text class="tick-label" x="60" y="168" text-anchor="middle">0</text>
            <text class="tick-label" x="160" y="168" text-anchor="middle">2</text>
            <text class="tick-label" x="260" y="168" text-anchor="middle">4</text>
            <text class="tick-label" x="360" y="168" text-anchor="middle">6</text>
            <text class="tick-label" x="460" y="168" text-anchor="middle">8</text>

            <!-- signal sinusoidal : u(t) = 2 sin(2 pi t / 4), t en ms -->
            <path class="curve-main" fill="none" d="M60,150 L85,93 L110,70 L135,93 L160,150 L185,207 L210,230 L235,207 L260,150 L285,93 L310,70 L335,93 L360,150 L385,207 L410,230 L435,207 L460,150"></path>

            <!-- amplitude maximale -->
            <circle class="plot-point" cx="110" cy="70" r="4"></circle>
            <line class="guide-line" x1="110" y1="150" x2="110" y2="70"></line>
            <text class="annotation-label" x="120" y="108" text-anchor="start">Umax = 2 V</text>

            <!-- cotation periode T -->
            <line class="frame-line" x1="60" y1="245" x2="60" y2="255"></line>
            <line class="frame-line" x1="260" y1="245" x2="260" y2="255"></line>
            <line class="guide-line" x1="60" y1="250" x2="260" y2="250"></line>
            <text class="annotation-label" x="160" y="268" text-anchor="middle">T = 4 ms</text>
          </svg>
        `,
        notes: [
          'Un <strong>motif</strong> identique se répète toutes les $T = 4$ ms : entre $t = 0$ et $t = 4$ ms, la courbe reproduit exactement la même forme, c\'est la période du signal.',
          'Fréquence : $f = \\dfrac{1}{T} = \\dfrac{1}{4 \\times 10^{-3}} = 250$ Hz. Cette valeur est bien comprise dans le domaine audible humain ($20$ Hz à $20\\,000$ Hz), ce son est donc audible.',
          'L\'amplitude maximale $U_{max} = 2$ V (écart entre le maximum et la valeur moyenne nulle) est liée à l\'<strong>intensité</strong> perçue, une caractéristique totalement indépendante de la fréquence.'
        ],
        reading: 'Repère d\'abord un maximum de la courbe (amplitude $U_{max}$), puis mesure l\'écart horizontal jusqu\'au prochain motif identique : c\'est la période $T$, indiquée en pointillés sous la courbe.',
        caption: 'Oscillogramme d\'un signal sonore périodique : période $T = 4$ ms, soit une fréquence $f = \\dfrac{1}{T} = 250$ Hz, et amplitude maximale $U_{max} = 2$ V.'
      },
      example: {
        statement: 'Un diapason de laboratoire vibre à la fréquence $f = 440$ Hz (c\'est la note La, référence internationale d\'accordage des instruments de musique).<br/><br/>Calcule la période $T$ de cette vibration, en millisecondes.',
        steps: [
          'Relation entre période et fréquence : $T = \\dfrac{1}{f}$.',
          'Application numérique : $T = \\dfrac{1}{440} \\approx 0{,}00227$ s.',
          'Conversion en millisecondes : $T \\approx 0{,}00227 \\times 1\\,000 \\approx 2{,}27$ ms.'
        ],
        answer: '$T \\approx 2{,}27$ ms. Cette période, très courte, traduit la hauteur relativement élevée de cette note : plus la fréquence est grande, plus la période est courte.'
      },
      formulas: [
        '$f = \\dfrac{1}{T}$ (fréquence en Hz, à partir de la période $T$ en s)',
        'Domaine audible humain : $20$ Hz $\\leqslant f \\leqslant 20\\,000$ Hz',
        'Vitesse du son dans l\'air (à $20°C$) : $v \\approx 340$ m/s',
        'Fréquence $\\leftrightarrow$ hauteur perçue (aigu/grave) ; amplitude $\\leftrightarrow$ intensité perçue (fort/faible)'
      ],
      recap: [
        'Le son est une <strong>onde mécanique</strong> : il nécessite un milieu matériel et ne se propage pas dans le vide.',
        'La <strong>fréquence</strong> $f = \\dfrac{1}{T}$ détermine la hauteur perçue (aigu/grave) ; l\'<strong>amplitude</strong> détermine l\'intensité perçue (fort/faible).',
        'L\'oreille humaine perçoit les fréquences entre $20$ Hz et $20\\,000$ Hz ; en dehors, ce sont des infrasons ou des ultrasons.',
        'Le niveau d\'intensité sonore $L$ (en dB) quantifie le volume perçu ; une exposition prolongée au-delà de $85$ dB présente un risque auditif.'
      ],
      piege: 'Une confusion fréquente consiste à penser qu\'un son « fort » est automatiquement un son « aigu », ou inversement qu\'un son « grave » serait forcément faible. Attention : la <strong>hauteur</strong> (aigu/grave) dépend uniquement de la <strong>fréquence</strong>, tandis que l\'<strong>intensité</strong> (fort/faible) dépend de l\'<strong>amplitude</strong> — ce sont deux caractéristiques totalement indépendantes, un son grave pouvant très bien être assourdissant, et un son aigu très faible.'
    },

    quiz: [
      {
        q: 'Le son peut-il se propager dans le vide (par exemple, dans l\'espace intersidéral) ?',
        options: [
          'Oui, tout comme la lumière',
          'Non, le son a besoin d\'un milieu matériel pour se propager',
          'Oui, mais uniquement les sons graves',
          'Cela dépend uniquement de l\'intensité du son'
        ],
        answer: 1,
        correction: 'Le son est une <strong>onde mécanique</strong> : il nécessite un milieu matériel (gaz, liquide ou solide) pour se propager, contrairement à la lumière qui se propage aussi dans le vide.'
      },
      {
        q: 'Un signal sonore périodique a une période $T = 5$ ms. Quelle est sa fréquence ?',
        options: [
          '$f = 200$ Hz',
          '$f = 0{,}005$ Hz',
          '$f = 5$ Hz',
          '$f = 500$ Hz'
        ],
        answer: 0,
        correction: '$f = \\dfrac{1}{T} = \\dfrac{1}{5\\times10^{-3}} = 200$ Hz.'
      },
      {
        q: 'Deux sons ont exactement la même fréquence mais des amplitudes différentes. Que peut-on en dire ?',
        options: [
          'Ils ont la même hauteur, mais des intensités différentes',
          'Ils ont des hauteurs différentes, mais la même intensité',
          'Ce sont exactement les mêmes sons',
          'L\'un des deux n\'est pas audible'
        ],
        answer: 0,
        correction: 'La fréquence détermine la <strong>hauteur</strong> (identique ici), tandis que l\'amplitude détermine l\'<strong>intensité</strong> (différente ici) : même hauteur, mais un son plus fort que l\'autre.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['frequence', 'periode']);
        var contexte = pick([
          'un haut-parleur de sonorisation',
          'une corde de guitare pincée en studio',
          'une sirène d\'alarme industrielle',
          'un diapason de laboratoire',
          'un signal capté par un microphone d\'étude'
        ]);

        if (typeExo === 'frequence') {
          var Tms = randFloat(0.5, 50, 2);
          var Ts = Tms / 1000;
          var f = parseFloat((1 / Ts).toFixed(1));
          return {
            statement: 'Pour ' + contexte + ', l\'oscillogramme relevé montre un signal périodique de période $T = ' + fr(Tms, 2) + '$ ms.<br/><br/>Calcule la fréquence $f$ de ce signal (en Hz, arrondie au dixième).',
            answer: f,
            tolerance: Math.max(0.5, parseFloat((f * 0.03).toFixed(1))),
            unit: 'Hz',
            hint: 'Convertis d\'abord $T$ en secondes, puis utilise $f = \\dfrac{1}{T}$.',
            solution: [
              'Conversion : $T = ' + fr(Tms, 2) + '$ ms $= ' + fr(Ts, 5) + '$ s.',
              'Formule de la fréquence : $f = \\dfrac{1}{T} = \\dfrac{1}{' + fr(Ts, 5) + '}$.',
              'Résultat : $f \\approx ' + fr(f, 1) + '$ Hz.'
            ]
          };
        } else {
          var fVal = rand(20, 2000);
          var TsVal = 1 / fVal;
          var TmsVal = parseFloat((TsVal * 1000).toFixed(2));
          return {
            statement: 'Pour ' + contexte + ', l\'oscillogramme relevé montre un signal périodique de fréquence $f = ' + fVal + '$ Hz.<br/><br/>Calcule la période $T$ de ce signal (en ms, arrondie au centième).',
            answer: TmsVal,
            tolerance: Math.max(0.02, parseFloat((TmsVal * 0.03).toFixed(2))),
            unit: 'ms',
            hint: 'Utilise $T = \\dfrac{1}{f}$, puis convertis le résultat en millisecondes.',
            solution: [
              'Formule de la période : $T = \\dfrac{1}{f} = \\dfrac{1}{' + fVal + '}$ s.',
              'Conversion en ms : $T \\approx ' + fr(TsVal, 6) + '$ s $\\times\\ 1\\,000$.',
              'Résultat : $T \\approx ' + fr(TmsVal, 2) + '$ ms.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un échographe médical émet une impulsion ultrasonore qui se propage dans les tissus mous du corps humain à la vitesse $v = 1\\,540$ m/s (proche de celle dans l\'eau). L\'écho, réfléchi par un organe, revient au capteur après une durée totale (aller-retour) $\\Delta t = 26$ µs.',
      tasks: [
        'Convertir la durée $\\Delta t$ en secondes.',
        'Calculer la distance totale parcourue par l\'onde ultrasonore (aller-retour), grâce à $d = v \\times \\Delta t$.',
        'En déduire la profondeur de l\'organe observé (l\'aller-retour parcourt deux fois cette distance).'
      ],
      solutions: [
        '$\\Delta t = 26$ µs $= 26 \\times 10^{-6}$ s $= 0{,}000026$ s.',
        '$d = v \\times \\Delta t = 1\\,540 \\times 0{,}000026 \\approx 0{,}0400$ m, soit environ $4{,}0$ cm (distance aller-retour totale).',
        'Profondeur de l\'organe : $\\dfrac{d}{2} = \\dfrac{4{,}0}{2} = 2{,}0$ cm.'
      ],
      finalAnswer: 'Profondeur de l\'organe $\\approx 2{,}0$ cm. Ce principe de mesure par écho (émission, propagation, réflexion, réception, puis calcul de distance à partir de la vitesse et de la durée) est identique à celui d\'un sonar de bateau ou d\'un radar de recul automobile — seule la nature de l\'onde change (ultrasons ici, ondes électromagnétiques pour un radar).'
    },

    evaluation: {
      title: 'Évaluation — Émission et perception du son',
      duration: '30 min',
      questions: [
        {
          statement: 'Le son est une onde qui :',
          type: 'multiple-choice',
          options: [
            'Se propage dans le vide comme dans la matière',
            'Nécessite un milieu matériel pour se propager',
            'Ne se propage que dans l\'air',
            'Se propage plus vite dans le vide que dans l\'air'
          ],
          answer: 1,
          points: 2,
          correction: 'Le son est une onde <strong>mécanique</strong> : il a besoin d\'un milieu matériel (air, eau, solide) pour se propager, et ne se propage pas dans le vide.'
        },
        {
          statement: 'Un signal sonore a une période $T = 8$ ms. Calculer sa fréquence $f$ (en Hz).',
          type: 'numeric',
          answer: 125,
          tolerance: 3,
          unit: 'Hz',
          points: 2,
          correction: '$f = \\dfrac{1}{T} = \\dfrac{1}{8\\times10^{-3}} = 125$ Hz.'
        },
        {
          statement: 'Un signal sonore a une fréquence $f = 250$ Hz. Calculer sa période $T$ (en ms).',
          type: 'numeric',
          answer: 4,
          tolerance: 0.2,
          unit: 'ms',
          points: 3,
          correction: '$T = \\dfrac{1}{f} = \\dfrac{1}{250} = 0{,}004$ s $= 4$ ms.'
        },
        {
          statement: 'Un son grave et un son aigu peuvent-ils avoir la même intensité sonore (le même volume perçu) ?',
          type: 'multiple-choice',
          options: [
            'Non, un son grave est toujours plus faible',
            'Non, un son aigu est toujours plus fort',
            'Oui, hauteur (fréquence) et intensité (amplitude) sont deux caractéristiques indépendantes',
            'Cela dépend uniquement de la vitesse du son'
          ],
          answer: 2,
          points: 2,
          correction: 'La hauteur dépend de la fréquence, l\'intensité dépend de l\'amplitude : ce sont deux grandeurs indépendantes. Un son grave peut être aussi fort (ou faible) qu\'un son aigu.'
        },
        {
          statement: 'Un signal a une fréquence de $25\\,000$ Hz. Il s\'agit :',
          type: 'multiple-choice',
          options: [
            'D\'un son grave mais audible',
            'D\'un infrason',
            'D\'un ultrason',
            'D\'un son aigu mais audible'
          ],
          answer: 2,
          points: 1,
          correction: 'Le domaine audible humain s\'arrête à $20\\,000$ Hz. Au-delà, à $25\\,000$ Hz, c\'est un <strong>ultrason</strong>, inaudible pour l\'oreille humaine.'
        }
      ]
    }
  });

