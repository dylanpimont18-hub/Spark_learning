/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-son.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-son',
    level: 2, subject: 'physique',
    icon: '🔊',
    title: 'Émission et perception du son',
    subtitle: 'Onde sonore, période, fréquence, hauteur, niveau sonore, domaine audible, ultrasons',
    keywords: ['Son', 'Onde sonore', 'Fréquence', 'Période', 'Hauteur', 'Niveau sonore', 'Ultrasons'],
    physics: 'La physique du son intervient dans l\'isolation acoustique des bâtiments, l\'échographie médicale et le sonar (basés sur les ultrasons), le réglage des instruments de musique, ou encore la protection auditive en milieu professionnel bruyant, où le niveau sonore est surveillé en permanence.',

    cours: {
      intro: 'Le <strong>son</strong> est une <strong>onde mécanique</strong> : il résulte de la vibration d\'une source (corde de guitare, membrane de haut-parleur, cordes vocales…) qui met en mouvement les molécules du milieu environnant, de proche en proche. Contrairement à la lumière, le son a besoin d\'un <strong>milieu matériel</strong> pour se propager (air, eau, solide) : il ne peut pas se propager dans le vide.<br/><br/>Un signal sonore est caractérisé par sa <strong>période</strong> $T$ (durée d\'une oscillation complète, en secondes) et sa <strong>fréquence</strong> $f = \\dfrac{1}{T}$ (nombre d\'oscillations par seconde, en hertz Hz). La fréquence détermine la <strong>hauteur</strong> du son : plus $f$ est élevée, plus le son est <strong>aigu</strong> ; plus $f$ est faible, plus le son est <strong>grave</strong>.<br/><br/>L\'oreille humaine ne perçoit que les sons dont la fréquence est comprise entre $20$ Hz et $20\\,000$ Hz : c\'est le <strong>domaine audible</strong>. En dessous, on parle d\'<strong>infrasons</strong> ; au-dessus, d\'<strong>ultrasons</strong> (utilisés par les chauves-souris, dauphins, ou en imagerie médicale).',
      definitions: [
        { term: 'Onde sonore', def: 'Onde <strong>mécanique</strong> produite par la vibration d\'une source, qui se propage de proche en proche dans un milieu matériel (elle ne se propage pas dans le vide).' },
        { term: 'Période ($T$)', def: 'Durée d\'une oscillation complète du signal sonore, exprimée en secondes (s). Se lit directement sur un oscillogramme, entre deux motifs identiques successifs.' },
        { term: 'Fréquence ($f$)', def: 'Nombre d\'oscillations effectuées par seconde : $f = \\dfrac{1}{T}$, exprimée en hertz (Hz). Elle détermine la <strong>hauteur</strong> du son (aigu si $f$ élevée, grave si $f$ faible), indépendamment de son intensité.' },
        { term: 'Niveau sonore', def: 'Grandeur, exprimée en décibels (dB), liée à l\'<strong>amplitude</strong> du signal sonore et mesurée à l\'aide d\'un sonomètre. Elle traduit l\'intensité perçue du son (fort ou faible), une caractéristique indépendante de la hauteur.' }
      ],
      method: {
        title: 'Caractériser un son à partir de son signal en 3 étapes',
        steps: [
          '<strong>Repérer la période $T$</strong> sur l\'oscillogramme du signal sonore : c\'est la durée entre deux motifs identiques successifs (par exemple, entre deux maximums consécutifs).',
          '<strong>Calculer la fréquence</strong> $f = \\dfrac{1}{T}$, puis vérifier si elle appartient au domaine audible ($20$ Hz à $20\\,000$ Hz) et en déduire si le son est plutôt grave ou aigu par comparaison.',
          '<strong>Comparer l\'amplitude</strong> du signal (ou lire le niveau sonore en dB donné par un sonomètre) pour évaluer l\'intensité sonore, indépendamment de la fréquence : hauteur et intensité sont deux caractéristiques distinctes du son.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Signaux sonores : hauteur et fréquence',
        title: 'Comparaison d\'un son grave et d\'un son aigu, de même amplitude',
        description: 'Deux signaux sonores sont représentés sur un même axe des temps. Le premier, de <strong>période $T_1$ longue</strong>, correspond à un son <strong>grave</strong> (fréquence faible). Le second, de <strong>période $T_2$ courte</strong>, correspond à un son <strong>aigu</strong> (fréquence élevée). Les deux ont la même amplitude, donc la même intensité sonore.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="son-title son-desc">
            <title id="son-title">Comparaison d'un son grave et d'un son aigu de meme amplitude</title>
            <desc id="son-desc">Deux courbes sinusoidales sont representees en fonction du temps, l'une au-dessus de l'autre. La courbe superieure oscille lentement, avec une periode longue notee T1, caracteristique d'un son grave. La courbe inferieure oscille beaucoup plus rapidement, avec une periode courte notee T2, caracteristique d'un son aigu. Les deux courbes ont la meme amplitude verticale, ce qui signifie qu'elles correspondent a des sons de meme intensite mais de hauteurs differentes.</desc>

            <!-- axe des temps commun -->
            <line class="frame-line" x1="50" y1="270" x2="520" y2="270"></line>
            <text class="tick-label" x="518" y="288" text-anchor="end">t</text>

            <!-- lignes de base des deux signaux -->
            <line class="guide-line" x1="50" y1="110" x2="520" y2="110"></line>
            <line class="guide-line" x1="50" y1="220" x2="520" y2="220"></line>

            <!-- signal grave (T1 = periode longue) -->
            <path class="curve-main" fill="none" d="M60.0,110.0 L80.0,92.5 L100.0,79.7 L120.0,75.0 L140.0,79.7 L160.0,92.5 L180.0,110.0 L200.0,127.5 L220.0,140.3 L240.0,145.0 L260.0,140.3 L280.0,127.5 L300.0,110.0 L320.0,92.5 L340.0,79.7 L360.0,75.0 L380.0,79.7 L400.0,92.5 L420.0,110.0 L440.0,127.5 L460.0,140.3 L480.0,145.0 L500.0,140.3"></path>
            <text class="annotation-label" x="60" y="60" text-anchor="start">Son grave</text>

            <!-- signal aigu (T2 = periode courte) -->
            <path class="frame-line" fill="none" style="stroke-linejoin:round;stroke-linecap:round" d="M60.0,220.0 L65.0,208.7 L70.0,198.7 L75.0,190.9 L80.0,186.2 L85.0,185.1 L90.0,187.7 L95.0,193.7 L100.0,202.5 L105.0,213.2 L110.0,224.6 L115.0,235.5 L120.0,244.7 L125.0,251.4 L130.0,254.7 L135.0,254.3 L140.0,250.3 L145.0,243.1 L150.0,233.4 L155.0,222.3 L160.0,210.9 L165.0,200.6 L170.0,192.2 L175.0,186.9 L180.0,185.0 L185.0,186.9 L190.0,192.2 L195.0,200.6 L200.0,210.9 L205.0,222.3 L210.0,233.4 L215.0,243.1 L220.0,250.3 L225.0,254.3 L230.0,254.7 L235.0,251.4 L240.0,244.7 L245.0,235.5 L250.0,224.6 L255.0,213.2 L260.0,202.5 L265.0,193.7 L270.0,187.7 L275.0,185.1 L280.0,186.2 L285.0,190.9 L290.0,198.7 L295.0,208.7 L300.0,220.0 L305.0,231.3 L310.0,241.3 L315.0,249.1 L320.0,253.8 L325.0,254.9 L330.0,252.3 L335.0,246.3 L340.0,237.5 L345.0,226.8 L350.0,215.4 L355.0,204.5 L360.0,195.3 L365.0,188.6 L370.0,185.3 L375.0,185.7 L380.0,189.7 L385.0,196.9 L390.0,206.6 L395.0,217.7 L400.0,229.1 L405.0,239.4 L410.0,247.8 L415.0,253.1 L420.0,255.0 L425.0,253.1 L430.0,247.8 L435.0,239.4 L440.0,229.1 L445.0,217.7 L450.0,206.6 L455.0,196.9 L460.0,189.7 L465.0,185.7 L470.0,185.3 L475.0,188.6 L480.0,195.3 L485.0,204.5 L490.0,215.4 L495.0,226.8 L500.0,237.5"></path>
            <text class="annotation-label" x="60" y="170" text-anchor="start">Son aigu</text>

            <!-- cotation periode T1 (entre deux maximums du son grave) -->
            <line class="guide-line" x1="120" y1="75" x2="120" y2="60"></line>
            <line class="guide-line" x1="360" y1="75" x2="360" y2="60"></line>
            <line class="guide-line" x1="120" y1="66" x2="360" y2="66"></line>
            <text class="tick-label" x="240" y="55" text-anchor="middle">T₁ (long)</text>

            <!-- cotation periode T2 (entre deux maximums du son aigu) -->
            <line class="guide-line" x1="100" y1="185" x2="100" y2="172"></line>
            <line class="guide-line" x1="180" y1="185" x2="180" y2="172"></line>
            <line class="guide-line" x1="100" y1="178" x2="180" y2="178"></line>
            <text class="tick-label" x="140" y="167" text-anchor="middle">T₂ (court)</text>
          </svg>
        `,
        notes: [
          'Le son grave (courbe pleine, en haut) a une <strong>période $T_1$ longue</strong> : il oscille lentement, donc sa fréquence $f_1=\\dfrac{1}{T_1}$ est faible.',
          'Le son aigu (courbe fine, en bas) a une <strong>période $T_2$ courte</strong> : il oscille rapidement, donc sa fréquence $f_2=\\dfrac{1}{T_2}$ est élevée.',
          'Les deux signaux ont la <strong>même amplitude</strong> (même hauteur de crête) : ils correspondent donc à des sons de <strong>même intensité</strong>, malgré leurs hauteurs très différentes. Hauteur et intensité sont deux caractéristiques indépendantes.'
        ],
        reading: 'Compare les deux courbes à amplitude égale : celle qui oscille lentement (période longue) est le son grave, celle qui oscille rapidement (période courte) est le son aigu.',
        caption: 'Comparaison de deux signaux sonores de même amplitude (même intensité) mais de périodes différentes : $T_1$ longue pour le son grave, $T_2$ courte pour le son aigu.'
      },
      example: {
        statement: 'Sur l\'écran d\'un oscilloscope, on mesure la période du signal sonore émis par un diapason : $T = 2{,}5$ ms.<br/><br/>Calculer la fréquence de ce son, vérifier qu\'il appartient au domaine audible, et préciser s\'il s\'agit d\'un son plutôt grave ou plutôt aigu.',
        steps: [
          'Convertir la période en secondes : $T = 2{,}5$ ms $= 2{,}5 \\times 10^{-3}$ s.',
          'Calculer la fréquence : $f = \\dfrac{1}{T} = \\dfrac{1}{2{,}5 \\times 10^{-3}} = 400$ Hz.',
          'Le domaine audible s\'étend de $20$ Hz à $20\\,000$ Hz : avec $f = 400$ Hz, ce son est bien <strong>audible</strong>.',
          'Comparé aux fréquences des instruments de musique (typiquement de quelques dizaines de Hz pour les graves à plusieurs milliers de Hz pour les aigus), $f = 400$ Hz correspond à un son plutôt <strong>grave</strong> (proche des notes basses d\'un piano).'
        ],
        answer: '$f = 400$ Hz, son audible et plutôt grave. La fréquence seule renseigne sur la hauteur du son, pas sur son intensité : pour cela, il faudrait connaître l\'amplitude du signal ou le niveau sonore en dB.'
      },
      formulas: [
        'Fréquence à partir de la période : $f = \\dfrac{1}{T}$ ($T$ en s, $f$ en Hz)',
        'Domaine audible humain : $20 \\text{ Hz} \\leq f \\leq 20\\,000 \\text{ Hz}$',
        'Vitesse de propagation du son dans l\'air : $v \\approx 340$ m/s (beaucoup plus rapide dans l\'eau, $\\approx 1\\,500$ m/s)',
        'Distance parcourue lors d\'un écho (aller-retour) : $d = \\dfrac{v \\times \\Delta t}{2}$',
        'Longueur d\'onde : $\\lambda = \\dfrac{v}{f}$'
      ],
      recap: [
        'Le son est une onde <strong>mécanique</strong> : il nécessite un milieu matériel pour se propager (il ne se propage pas dans le vide).',
        'La fréquence $f = \\dfrac{1}{T}$ détermine la <strong>hauteur</strong> du son : aigu si $f$ élevée, grave si $f$ faible.',
        'Le domaine <strong>audible</strong> humain s\'étend de $20$ Hz à $20\\,000$ Hz ; en dehors, on parle d\'infrasons ou d\'ultrasons.',
        'L\'<strong>intensité</strong> sonore (niveau en dB) dépend de l\'amplitude du signal, une caractéristique totalement indépendante de la hauteur.'
      ],
      piege: 'Une confusion très fréquente consiste à assimiler un son « aigu » à un son « fort », comme si hauteur et intensité étaient la même chose. Attention : la hauteur d\'un son dépend uniquement de sa <strong>fréquence</strong> (aigu ou grave), tandis que son intensité dépend de son <strong>amplitude</strong> (fort ou faible) — un son peut donc être à la fois aigu et faible, ou grave et fort.'
    },

    quiz: [
      {
        q: 'Pourquoi le son ne peut-il pas se propager dans le vide, contrairement à la lumière ?',
        options: [
          'Parce que le son est une onde mécanique qui nécessite un milieu matériel pour se propager',
          'Parce que le son va toujours moins vite que la lumière',
          'Parce que le vide absorbe totalement le son',
          'Ce n\'est pas vrai, le son se propage aussi bien dans le vide'
        ],
        answer: 0,
        correction: 'Le son est une <strong>onde mécanique</strong> : sa propagation repose sur la mise en mouvement des molécules du milieu, de proche en proche. En l\'absence de matière (dans le vide), il n\'y a rien à mettre en mouvement : le son ne peut donc pas s\'y propager.'
      },
      {
        q: 'Un signal sonore a une période $T = 5$ ms. Quelle est sa fréquence ?',
        options: [
          '$f = 5$ Hz',
          '$f = 20$ Hz',
          '$f = 200$ Hz',
          '$f = 500$ Hz'
        ],
        answer: 2,
        correction: '$f = \\dfrac{1}{T} = \\dfrac{1}{5\\times 10^{-3}} = 200$ Hz.'
      },
      {
        q: 'Deux sons ont la même fréquence mais des amplitudes différentes. Que peut-on affirmer ?',
        options: [
          'Ils ont la même hauteur mais des intensités différentes',
          'Ils ont la même intensité mais des hauteurs différentes',
          'Ils sont rigoureusement identiques',
          'L\'un est forcément un ultrason'
        ],
        answer: 0,
        correction: 'La fréquence détermine la <strong>hauteur</strong> (identique ici, puisque les deux sons ont la même fréquence), tandis que l\'amplitude détermine l\'<strong>intensité</strong> (différente ici, puisque les amplitudes diffèrent).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['frequence', 'propagation']);

        if (typeExo === 'frequence') {
          var Tms = randFloat(0.5, 20, 2);
          var f = parseFloat((1 / (Tms / 1000)).toFixed(1));
          var contexte = pick([
            'un diapason de laboratoire',
            'une corde de guitare pincée',
            'la membrane d\'un haut-parleur',
            'une voix humaine enregistrée',
            'un signal capté par un microphone'
          ]);
          return {
            statement: 'Sur l\'oscillogramme d\'' + contexte + ', on mesure une période $T = ' + fr(Tms, 2) + '$ ms.<br/><br/>Calcule la fréquence $f$ de ce signal sonore (en Hz, arrondie au dixième).',
            answer: f,
            tolerance: Math.max(0.5, parseFloat((f * 0.03).toFixed(1))),
            unit: 'Hz',
            hint: 'Convertis d\'abord la période en secondes, puis utilise $f = \\dfrac{1}{T}$.',
            solution: [
              'Conversion : $T = ' + fr(Tms, 2) + '$ ms $= ' + fr(Tms, 2) + ' \\times 10^{-3}$ s.',
              'Formule : $f = \\dfrac{1}{T}$.',
              'Résultat : $f \\approx ' + fr(f, 1) + '$ Hz.'
            ]
          };
        } else {
          var milieu = pick([
            { nom: 'l\'air', v: 340 },
            { nom: 'l\'eau de mer', v: 1500 }
          ]);
          var dt = randFloat(0.1, 3, 2);
          var d = parseFloat((milieu.v * dt / 2).toFixed(1));
          var contexte2 = pick([
            'un sonar de bateau visant le fond marin',
            'un télémètre à ultrasons de recul de voiture',
            'un détecteur d\'obstacle de robot mobile',
            'un dispositif d\'écholocation étudié en TP'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', une onde sonore se propage dans ' + milieu.nom + ' à la vitesse $v = ' + milieu.v + '$ m/s. L\'écho renvoyé par l\'obstacle revient après une durée $\\Delta t = ' + fr(dt, 2) + '$ s.<br/><br/>Calcule la distance $d$ séparant l\'émetteur de l\'obstacle (en m, arrondie au dixième). Attention, le son fait un aller-retour.',
            answer: d,
            tolerance: Math.max(0.5, parseFloat((d * 0.03).toFixed(2))),
            unit: 'm',
            hint: 'Le son parcourt la distance $d$ à l\'aller puis $d$ au retour : $d = \\dfrac{v \\times \\Delta t}{2}$.',
            solution: [
              'Le signal parcourt l\'aller-retour en $\\Delta t$, soit une distance totale $v \\times \\Delta t$.',
              'La distance à l\'obstacle est la moitié de ce trajet : $d = \\dfrac{v \\times \\Delta t}{2} = \\dfrac{' + milieu.v + ' \\times ' + fr(dt, 2) + '}{2}$.',
              'Résultat : $d \\approx ' + fr(d, 1) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une chauve-souris émet des ultrasons de fréquence $f = 45\\,000$ Hz pour se repérer par écholocation. Ces ultrasons se propagent dans l\'air à $v = 340$ m/s. Un insecte se trouve droit devant elle ; l\'écho renvoyé par l\'insecte revient après $\\Delta t = 24$ ms.',
      tasks: [
        'Calculer la période $T$ du signal émis, et expliquer pourquoi ce son n\'est pas perçu par l\'oreille humaine.',
        'Calculer la distance $d$ séparant la chauve-souris de l\'insecte.',
        'Calculer la longueur d\'onde $\\lambda$ de cet ultrason, et expliquer pourquoi une fréquence aussi élevée est utile pour détecter un petit insecte.'
      ],
      solutions: [
        'Période : $T = \\dfrac{1}{f} = \\dfrac{1}{45\\,000} \\approx 2{,}22 \\times 10^{-5}$ s, soit environ $22{,}2\\ \\mu$s. Le domaine audible humain s\'arrête à $20\\,000$ Hz : avec $f=45\\,000$ Hz $> 20\\,000$ Hz, ce son est un <strong>ultrason</strong>, totalement inaudible pour l\'être humain.',
        'Distance : $d = \\dfrac{v \\times \\Delta t}{2} = \\dfrac{340 \\times 0{,}024}{2} = \\dfrac{8{,}16}{2} = 4{,}08$ m.',
        'Longueur d\'onde : $\\lambda = \\dfrac{v}{f} = \\dfrac{340}{45\\,000} \\approx 0{,}00756$ m, soit environ $7{,}6$ mm. Cette longueur d\'onde très courte, du même ordre de grandeur que la taille d\'un insecte, permet à l\'onde de bien se réfléchir sur un aussi petit obstacle : avec un son grave de grande longueur d\'onde, l\'écho renvoyé par l\'insecte serait beaucoup trop faible pour être exploitable.'
      ],
      finalAnswer: '$T \\approx 22{,}2\\ \\mu$s (ultrason, inaudible), $d \\approx 4{,}08$ m, $\\lambda \\approx 7{,}6$ mm. Les chauves-souris utilisent des fréquences très élevées précisément parce que la longueur d\'onde associée, très courte, est comparable à la taille des insectes qu\'elles traquent, ce qui rend l\'écho suffisamment net pour être détecté.'
    },

    evaluation: {
      title: 'Évaluation — Émission et perception du son',
      duration: '25 min',
      questions: [
        {
          statement: 'Le son est une onde de nature :',
          type: 'multiple-choice',
          options: [
            'Électromagnétique, comme la lumière',
            'Mécanique, nécessitant un milieu matériel',
            'Nucléaire',
            'Purement numérique'
          ],
          answer: 1,
          points: 2,
          correction: 'Le son est une onde <strong>mécanique</strong> : il ne peut se propager qu\'à travers un milieu matériel (air, eau, solide), contrairement à la lumière qui se propage aussi dans le vide.'
        },
        {
          statement: 'Un signal sonore a une période $T = 4$ ms. Calculer sa fréquence $f$ (en Hz).',
          type: 'numeric',
          answer: 250,
          tolerance: 5,
          unit: 'Hz',
          points: 2,
          correction: '$f = \\dfrac{1}{T} = \\dfrac{1}{4\\times 10^{-3}} = 250$ Hz.'
        },
        {
          statement: 'Le domaine audible pour l\'oreille humaine s\'étend de :',
          type: 'multiple-choice',
          options: [
            '$0$ Hz à $2\\,000$ Hz',
            '$20$ Hz à $20\\,000$ Hz',
            '$200$ Hz à $200\\,000$ Hz',
            '$2\\,000$ Hz à $2\\,000\\,000$ Hz'
          ],
          answer: 1,
          points: 2,
          correction: 'Le domaine audible humain s\'étend de $20$ Hz à $20\\,000$ Hz. En dessous, ce sont des infrasons ; au-dessus, des ultrasons.'
        },
        {
          statement: 'Un télémètre à ultrasons émet un signal dans l\'air ($v=340$ m/s) et reçoit l\'écho après $\\Delta t = 0{,}02$ s. Calculer la distance $d$ à l\'obstacle (en m).',
          type: 'numeric',
          answer: 3.4,
          tolerance: 0.2,
          unit: 'm',
          points: 3,
          correction: '$d = \\dfrac{v \\times \\Delta t}{2} = \\dfrac{340 \\times 0{,}02}{2} = \\dfrac{6{,}8}{2} = 3{,}4$ m.'
        },
        {
          statement: 'Deux sons de même fréquence mais d\'amplitudes différentes ont :',
          type: 'multiple-choice',
          options: [
            'La même hauteur, mais des intensités différentes',
            'Des hauteurs différentes, mais la même intensité',
            'Des hauteurs et des intensités différentes',
            'Exactement les mêmes caractéristiques'
          ],
          answer: 0,
          points: 1,
          correction: 'La fréquence détermine la hauteur (identique ici) ; l\'amplitude détermine l\'intensité (différente ici, puisque les amplitudes diffèrent).'
        }
      ]
    }
  });
