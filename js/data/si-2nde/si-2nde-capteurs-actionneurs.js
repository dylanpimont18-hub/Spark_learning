/* =========================================================
   Spark Learning – data/si-2nde/si-2nde-capteurs-actionneurs.js
   Extrait de si-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-2nde-capteurs-actionneurs',
    level: 2, subject: 'si',
    icon: '📡',
    title: 'Capteurs et actionneurs',
    subtitle: 'Types de capteurs, actionneurs, signaux analogique/numérique, résolution d\'un CAN',
    keywords: ['Capteur', 'Actionneur', 'Signal', 'Analogique', 'Numérique'],
    physics: 'Les capteurs et actionneurs sont les interfaces entre le monde physique et le monde numérique : on les retrouve dans les smartphones (accéléromètre, gyroscope), les voitures (radar, lidar) et les objets connectés (IoT).',

    cours: {
      intro: 'Un <strong>capteur</strong> mesure une grandeur physique (température, distance, luminosité, pression…) et la convertit en un signal électrique exploitable. Un <strong>actionneur</strong> reçoit un signal de commande et produit une action physique (mouvement, chaleur, lumière…).<br/><br/>Le signal issu d\'un capteur peut être <strong>analogique</strong> (continu, prenant une infinité de valeurs) ou <strong>numérique</strong> (discret, codé en $0$ et $1$). Pour qu\'un microcontrôleur (Arduino, STM32) puisse traiter un signal analogique, il faut le convertir via un <strong>Convertisseur Analogique-Numérique (CAN)</strong>.<br/><br/>La résolution du CAN, appelée <strong>quantum</strong> $q$, est la plus petite variation de tension détectable : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$ où $n$ est le nombre de bits. Plus $n$ est grand, plus la mesure est fine.<br/><br/>Exemples de capteurs courants en SI : <strong>LM35</strong> (température, sortie $10$ mV/°C), <strong>HC-SR04</strong> (distance ultrason, portée $2$ cm à $4$ m), <strong>LDR</strong> (luminosité, résistance variable).',
      definitions: [
        { term: 'Capteur', def: 'Composant qui mesure une grandeur physique et la convertit en signal électrique. Exemples : LM35 (température, $10$ mV/°C), HC-SR04 (distance ultrason), LDR (luminosité).' },
        { term: 'Actionneur', def: 'Composant qui reçoit une commande et produit une action physique. Exemples : moteur CC (rotation), servomoteur (position angulaire), vérin (translation), LED (lumière).' },
        { term: 'Signal analogique', def: 'Signal continu pouvant prendre une infinité de valeurs dans une plage. Exemple : la tension aux bornes d\'un LM35 varie continûment de $0$ à $1$ V pour $0$ à $100°$C.' },
        { term: 'Convertisseur Analogique-Numérique (CAN)', def: 'Circuit qui transforme une tension analogique en nombre binaire. Caractérisé par sa résolution $n$ (bits) et sa plage ($V_{\\text{max}} - V_{\\text{min}}$). Le CAN de l\'Arduino Uno a $n = 10$ bits et une plage de $0$ à $5$ V.' }
      ],
      method: {
        title: 'Calculer la résolution d\'un CAN et convertir une tension',
        steps: [
          '<strong>Calculer le quantum $q$</strong> : c\'est la plus petite variation de tension détectable.<br/>Formule : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$.<br/>Exemple : CAN 10 bits de l\'Arduino Uno, plage $0$–$5$ V → $q = \\dfrac{5}{2^{10}} = \\dfrac{5}{1024} \\approx 4{,}88$ mV.',
          '<strong>Convertir une tension en valeur numérique</strong> : $N = \\left\\lfloor \\dfrac{V - V_{\\text{min}}}{q} \\right\\rfloor$ (arrondi à l\'entier inférieur).<br/>Exemple : LM35 mesure $25°$C → $V = 0{,}25$ V → $N = \\left\\lfloor \\dfrac{0{,}25}{0{,}00488} \\right\\rfloor = \\lfloor 51{,}2 \\rfloor = 51$. En Arduino : <code>int N = analogRead(A0);</code>',
          '<strong>Reconvertir (CNA)</strong> : $V_{\\text{reconstitué}} = N \\times q + V_{\\text{min}}$. L\'erreur maximale de quantification est $\\dfrac{q}{2}$.<br/>Exemple : $V = 51 \\times 0{,}00488 = 0{,}2489$ V, soit une erreur de $0{,}0011$ V ($\\approx 0{,}1°$C pour le LM35).'
        ]
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Grandeur mesurée</th><th style="border:1px solid var(--border);padding:8px">Capteur</th><th style="border:1px solid var(--border);padding:8px">Référence</th><th style="border:1px solid var(--border);padding:8px">Type de sortie</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Température</td><td style="border:1px solid var(--border);padding:8px">Sonde analogique</td><td style="border:1px solid var(--border);padding:8px">LM35</td><td style="border:1px solid var(--border);padding:8px">Analogique ($10$ mV/°C)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Distance</td><td style="border:1px solid var(--border);padding:8px">Capteur ultrason</td><td style="border:1px solid var(--border);padding:8px">HC-SR04</td><td style="border:1px solid var(--border);padding:8px">Numérique (durée d\'écho en $\\mu$s)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Luminosité</td><td style="border:1px solid var(--border);padding:8px">Photorésistance</td><td style="border:1px solid var(--border);padding:8px">LDR</td><td style="border:1px solid var(--border);padding:8px">Analogique (résistance variable)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pression</td><td style="border:1px solid var(--border);padding:8px">Capteur piézorésistif</td><td style="border:1px solid var(--border);padding:8px">BMP280</td><td style="border:1px solid var(--border);padding:8px">Numérique (I2C)</td></tr></table>',
      example: {
        statement: 'Un capteur de température LM35 ($10$ mV/°C) est connecté à l\'entrée analogique A0 d\'un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V). La température ambiante est de $22°$C. Calculer la tension $V$, le quantum $q$ et la valeur numérique $N$ lue par l\'Arduino.',
        steps: [
          'Tension délivrée par le LM35 : $V = 10 \\times 10^{-3} \\times 22 = 0{,}22$ V.',
          'Quantum : $q = \\dfrac{5 - 0}{2^{10}} = \\dfrac{5}{1024} \\approx 0{,}004883$ V soit $\\approx 4{,}88$ mV.',
          'Valeur numérique : $N = \\left\\lfloor \\dfrac{0{,}22}{0{,}004883} \\right\\rfloor = \\lfloor 45{,}1 \\rfloor = 45$.',
          'Vérification : $V_{\\text{reconstitué}} = 45 \\times 0{,}004883 = 0{,}2197$ V → température reconstituée $\\approx 22{,}0°$C.'
        ],
        answer: '$V = 0{,}22$ V, $q \\approx 4{,}88$ mV et $N = 45$.'
      },
      formulas: [
        '$q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$ (quantum, en V)',
        '$N = \\left\\lfloor \\dfrac{V - V_{\\text{min}}}{q} \\right\\rfloor$ (valeur numérique en sortie du CAN)',
        '$V_{\\text{reconstitué}} = N \\times q + V_{\\text{min}}$ (reconversion CNA)',
        'Nombre de niveaux $= 2^n$ ($2^8 = 256$, $2^{10} = 1024$, $2^{12} = 4096$)',
        'Erreur maximale de quantification $= \\dfrac{q}{2}$'
      ],
      recap: [
        'Un capteur convertit une grandeur physique en signal électrique ; un actionneur fait l\'inverse.',
        'Signal analogique = continu (infinité de valeurs). Signal numérique = discret (codé en bits).',
        'Le quantum du CAN : $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$. Plus $n$ est grand, plus $q$ est petit et la mesure est précise.',
        'Chaque bit supplémentaire <strong>double</strong> le nombre de niveaux et <strong>divise</strong> le quantum par $2$.'
      ],
      piege: 'Attention : le dénominateur est $2^n$ (pas $2n$ ni $n^2$). Un CAN $10$ bits a $2^{10} = 1024$ niveaux, pas $20$ ni $100$. Aussi, le HC-SR04 donne une <strong>durée</strong> d\'écho (en $\\mu$s), pas directement une distance : il faut diviser par $2$ (aller-retour) et multiplier par la vitesse du son ($340$ m/s).'
    },

    quiz: [
      {
        q: 'Un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V) lit la valeur $N = 512$. Quelle est la tension correspondante ?',
        options: [
          '$V = 512 \\times \\dfrac{5}{1024} = 2{,}5$ V',
          '$V = 512 \\times \\dfrac{5}{1023} \\approx 2{,}502$ V',
          '$V = 512 / 5 = 102{,}4$ V',
          '$V = 5 / 512 \\approx 0{,}01$ V'
        ],
        answer: 0,
        correction: '$q = \\dfrac{5}{2^{10}} = \\dfrac{5}{1024} \\approx 4{,}88$ mV. Donc $V = N \\times q = 512 \\times \\dfrac{5}{1024} = 2{,}5$ V. C\'est logique : $N = 512$ correspond à la moitié de la plage ($1024 / 2$), soit la moitié de $5$ V.'
      },
      {
        q: 'Le capteur LM35 délivre une tension de $10$ mV par degré Celsius. Pour mesurer une température de $45°$C, quelle tension produit-il ?',
        options: [
          '$V = 0{,}045$ V',
          '$V = 0{,}45$ V',
          '$V = 4{,}5$ V',
          '$V = 45$ V'
        ],
        answer: 1,
        correction: '$V = 10 \\text{ mV/°C} \\times 45°\\text{C} = 450$ mV $= 0{,}45$ V. Le LM35 est un capteur linéaire : la tension est directement proportionnelle à la température. À $100°$C, il délivre $1$ V.'
      },
      {
        q: 'En passant d\'un CAN $8$ bits à un CAN $12$ bits (même plage $0$–$5$ V), le quantum est :',
        options: [
          'Divisé par $4$',
          'Divisé par $16$',
          'Multiplié par $16$',
          'Inchangé'
        ],
        answer: 1,
        correction: '$q_8 = \\dfrac{5}{2^8} = \\dfrac{5}{256}$ et $q_{12} = \\dfrac{5}{2^{12}} = \\dfrac{5}{4096}$. Rapport : $\\dfrac{q_{12}}{q_8} = \\dfrac{256}{4096} = \\dfrac{1}{16}$. On gagne $4$ bits, soit $2^4 = 16$ fois plus de niveaux, donc le quantum est divisé par $16$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var n = pick([8, 10, 12]);
        var niveaux = Math.pow(2, n);
        var Vmax = pick([3.3, 5.0]);
        var Vmin = 0;
        var q = (Vmax - Vmin) / niveaux;
        var qArrondi = parseFloat((q * 1000).toFixed(2));

        var VmaxStr = Vmax.toFixed(1).replace('.', '{,}');

        var capteur = pick([
          { nom: 'un capteur de température LM35', plage: '0°C à ' + (Vmax * 100).toFixed(0) + '°C' },
          { nom: 'une photorésistance (LDR)', plage: '0 lux à 10 000 lux' },
          { nom: 'un capteur de pression piézorésistif', plage: '0 à 10 bar' },
          { nom: 'un potentiomètre rotatif', plage: '0° à 270°' }
        ]);

        var carte = n === 10 ? 'un Arduino Uno' : (n === 12 ? 'une carte STM32' : 'un microcontrôleur 8 bits');

        return {
          statement: capteur.nom + ' (plage de mesure : ' + capteur.plage + ') est connecté à ' + carte + ' équipé d\'un CAN de $' + n + '$ bits. La plage de tension va de $' + Vmin + '$ V à $' + VmaxStr + '$ V.<br/><br/>Calcule le quantum $q$ du CAN en millivolts (arrondi au centième).',
          answer: qArrondi,
          tolerance: 0.05,
          unit: 'mV',
          hint: 'Utilise la formule $q = \\dfrac{V_{\\text{max}} - V_{\\text{min}}}{2^n}$. N\'oublie pas que $2^{' + n + '} = ' + niveaux + '$. Convertis ensuite le résultat en millivolts ($\\times 1000$).',
          solution: [
            'Nombre de niveaux de quantification : $2^{' + n + '} = ' + niveaux + '$.',
            'Quantum : $q = \\dfrac{' + VmaxStr + ' - 0}{' + niveaux + '} = \\dfrac{' + VmaxStr + '}{' + niveaux + '} = ' + q.toFixed(6).replace('.', '{,}') + '$ V.',
            'Conversion en millivolts : $q = ' + q.toFixed(6).replace('.', '{,}') + ' \\times 1000 = ' + qArrondi.toFixed(2).replace('.', '{,}') + '$ mV.',
            'Interprétation : le CAN ne peut pas détecter de variation de tension inférieure à $' + qArrondi.toFixed(2).replace('.', '{,}') + '$ mV.'
          ]
        };
      }
    },

    probleme: {
      context: 'Une serre automatisée utilise un capteur de température LM35 ($10$ mV/°C, précision $\\pm 0{,}5°$C) connecté à l\'entrée analogique A0 d\'un Arduino Uno (CAN $10$ bits, plage $0$–$5$ V). Lorsque la température dépasse $30°$C, un ventilateur (moteur CC $12$ V commandé via un relais sur la broche $7$) doit se mettre en marche automatiquement.',
      tasks: [
        'Calculer le quantum $q$ du CAN de l\'Arduino (en mV, arrondi au centième).',
        'Déterminer la tension $V$ délivrée par le LM35 à $T = 30°$C, puis le nombre numérique $N$ que l\'Arduino lit via <code>analogRead(A0)</code>.',
        'Écrire la condition Arduino pour déclencher le ventilateur : <code>if (analogRead(A0) >= ???) { digitalWrite(7, HIGH); }</code>'
      ],
      solutions: [
        '$q = \\dfrac{5 - 0}{2^{10}} = \\dfrac{5}{1024} \\approx 0{,}004883$ V $\\approx 4{,}88$ mV.',
        '$V = 10 \\times 10^{-3} \\times 30 = 0{,}30$ V. $N = \\left\\lfloor \\dfrac{0{,}30}{0{,}004883} \\right\\rfloor = \\lfloor 61{,}4 \\rfloor = 61$. En Arduino : <code>int N = analogRead(A0);</code> retourne $\\approx 61$.',
        'Condition : <code>if (analogRead(A0) >= 61) { digitalWrite(7, HIGH); } else { digitalWrite(7, LOW); }</code>. Le seuil $N = 61$ correspond à $T \\geq 30°$C.'
      ],
      finalAnswer: 'Le quantum est $\\approx 4{,}88$ mV. À $30°$C, le LM35 délivre $0{,}30$ V et le CAN lit $N = 61$. Le programme compare <code>analogRead(A0)</code> à $61$ pour commander le relais du ventilateur.'
    },

    evaluation: {
      title: 'Évaluation — Capteurs et actionneurs',
      duration: '20 min',
      questions: [
        {
          statement: 'Un CAN de $12$ bits (carte STM32) a une plage de $0$ à $3{,}3$ V. Calculer le quantum $q$ en millivolts (arrondi au centième).',
          type: 'numeric',
          answer: 0.81,
          tolerance: 0.02,
          unit: 'mV',
          points: 3,
          correction: '$q = \\dfrac{3{,}3}{2^{12}} = \\dfrac{3{,}3}{4096} \\approx 0{,}000806$ V $= 0{,}81$ mV. Avec $12$ bits, on obtient $4096$ niveaux de quantification, ce qui donne une résolution très fine.'
        },
        {
          statement: 'Le capteur ultrason HC-SR04 mesure une distance de $1{,}5$ m. Sachant que la vitesse du son est $v = 340$ m/s, quelle est la durée totale (aller-retour) de l\'écho en microsecondes (arrondie à l\'entier) ?',
          type: 'numeric',
          answer: 8824,
          tolerance: 20,
          unit: 'μs',
          points: 3,
          correction: 'L\'onde parcourt $2 \\times 1{,}5 = 3$ m (aller-retour). Durée : $t = \\dfrac{d}{v} = \\dfrac{3}{340} \\approx 0{,}008824$ s $= 8824$ $\\mu$s. En Arduino : <code>distance = durée * 0.034 / 2;</code>'
        },
        {
          statement: 'Parmi ces composants, lequel est un <strong>actionneur</strong> ?',
          type: 'multiple-choice',
          options: [
            'Un capteur ultrason HC-SR04',
            'Une photorésistance (LDR)',
            'Un servomoteur (type SG90)',
            'Un potentiomètre utilisé comme capteur d\'angle'
          ],
          answer: 2,
          points: 2,
          correction: 'Le servomoteur SG90 reçoit un signal PWM et produit un mouvement de rotation contrôlé (action physique) : c\'est un <strong>actionneur</strong>. Le HC-SR04, la LDR et le potentiomètre sont des capteurs (ils mesurent une grandeur physique).'
        },
        {
          statement: 'Un signal analogique varie entre $0$ et $5$ V. Un CAN $10$ bits le numérise. Combien de niveaux de quantification sont possibles ?',
          type: 'numeric',
          answer: 1024,
          tolerance: 0,
          unit: 'niveaux',
          points: 1,
          correction: 'Nombre de niveaux $= 2^n = 2^{10} = 1024$. Chaque bit supplémentaire double le nombre de niveaux : $2^8 = 256$, $2^{10} = 1024$, $2^{12} = 4096$.'
        },
        {
          statement: 'Un capteur LM35 ($10$ mV/°C) mesure $T = 37°$C. Il est connecté à un Arduino Uno (CAN $10$ bits, $0$–$5$ V). Quelle valeur $N$ retourne <code>analogRead()</code> ?',
          type: 'numeric',
          answer: 75,
          tolerance: 1,
          unit: '',
          points: 1,
          correction: '$V = 10 \\times 10^{-3} \\times 37 = 0{,}37$ V. $q = \\dfrac{5}{1024} \\approx 0{,}00488$ V. $N = \\left\\lfloor \\dfrac{0{,}37}{0{,}00488} \\right\\rfloor = \\lfloor 75{,}8 \\rfloor = 75$.'
        }
      ]
    }
  });
