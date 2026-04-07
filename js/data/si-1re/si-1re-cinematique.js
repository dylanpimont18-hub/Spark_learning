/* =========================================================
   Spark Learning – data/si-1re/si-1re-cinematique.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-cinematique',
    level: 2, subject: 'si',
    icon: '🔄',
    title: 'Cinématique du solide',
    subtitle: 'Vitesse, accélération, mouvements de translation et rotation',
    keywords: ['Vitesse', 'Accélération', 'Trajectoire', 'Mouvement', 'Translation', 'Rotation'],
    physics: 'La cinématique est au cœur de l\'étude des mécanismes : bras robotisé, système bielle-manivelle, convoyeur industriel. Comprendre les mouvements permet de dimensionner les actionneurs.',

    cours: {
      intro: 'La <strong>cinématique</strong> est l\'étude du mouvement des corps sans considérer les forces qui le produisent.<br/><br/>En translation rectiligne, la position se repère par $x(t)$. La vitesse est la dérivée de la position : $v(t) = \\dfrac{dx}{dt}$ et l\'accélération est la dérivée de la vitesse : $a(t) = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}$.<br/><br/>En rotation autour d\'un axe fixe, on utilise l\'angle $\\theta(t)$. La vitesse angulaire est $\\omega(t) = \\dfrac{d\\theta}{dt}$ et l\'accélération angulaire $\\alpha(t) = \\dfrac{d\\omega}{dt}$.<br/><br/>Le lien fondamental entre translation et rotation pour un point à distance $R$ de l\'axe est : $v = R \\cdot \\omega$.<br/><br/>En mouvement circulaire uniforme, l\'accélération centripète vaut $a_n = \\dfrac{v^2}{R} = R\\omega^2$ et est dirigée vers le centre.',
      definitions: [
        { term: 'Translation rectiligne', def: 'Mouvement où tous les points du solide ont la même vitesse à chaque instant. La trajectoire de chaque point est un segment de droite.' },
        { term: 'Rotation autour d\'un axe fixe', def: 'Mouvement où tous les points décrivent des arcs de cercle centrés sur l\'axe. Chaque point a la même vitesse angulaire $\\omega(t)$.' },
        { term: 'Mouvement Rectiligne Uniforme (MRU)', def: 'Vitesse constante, accélération nulle : $v = \\text{cte}$, $a = 0$. La position varie linéairement : $x = x_0 + vt$.' },
        { term: 'Mouvement Rectiligne Uniformément Accéléré (MRUA)', def: 'Accélération constante non nulle. La vitesse varie linéairement et la position de manière quadratique avec le temps.' }
      ],
      method: {
        title: 'Résoudre un problème de cinématique',
        steps: [
          'Étape 1 — Identifier le type de mouvement : translation ou rotation ? Uniforme ($a = 0$) ou uniformément accéléré ($a = \\text{cte} \\neq 0$) ?<br/>Astuce : si la vitesse change, c\'est un MRUA ; si elle est constante, c\'est un MRU.',
          'Étape 2 — Choisir les formules adaptées :<br/>MRUA en translation : $v = v_0 + at$ et $x = x_0 + v_0 t + \\frac{1}{2}at^2$.<br/>MRUA en rotation : $\\omega = \\omega_0 + \\alpha t$ et $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$.<br/>Relation sans le temps : $v^2 = v_0^2 + 2a(x - x_0)$.',
          'Étape 3 — Identifier les données et l\'inconnue dans l\'énoncé.<br/>Repérer $v_0$, $a$, $t$, $x_0$ et écrire l\'équation avec une seule inconnue.',
          'Étape 4 — Calculer et vérifier : résoudre numériquement, vérifier l\'homogénéité des unités (m, m/s, m/s², rad, rad/s) et le signe du résultat.'
        ]
      },
      example: {
        statement: 'Un chariot part du repos ($v_0 = 0$) et accélère uniformément à $a = 2$ m/s² pendant $t = 5$ s. Calculer sa vitesse finale et la distance parcourue.',
        steps: [
          'Mouvement uniformément accéléré en translation ($a = 2$ m/s², $v_0 = 0$, $x_0 = 0$).',
          'Vitesse finale : $v = v_0 + at = 0 + 2 \\times 5 = 10$ m/s.',
          'Distance parcourue : $x = x_0 + v_0 t + \\frac{1}{2}at^2 = 0 + 0 + \\frac{1}{2} \\times 2 \\times 5^2 = 25$ m.',
          'Vérification avec $v^2 = v_0^2 + 2a(x - x_0)$ : $10^2 = 0 + 2 \\times 2 \\times 25 = 100$ ✓.'
        ],
        answer: '$v = 10$ m/s et $x = 25$ m.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Grandeur</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>MRU</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>MRUA</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Rotation uniforme</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Position</td><td style="border:1px solid var(--border);padding:8px">$x = x_0 + vt$</td><td style="border:1px solid var(--border);padding:8px">$x = x_0 + v_0 t + \\frac{1}{2}at^2$</td><td style="border:1px solid var(--border);padding:8px">$\\theta = \\theta_0 + \\omega t$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Vitesse</td><td style="border:1px solid var(--border);padding:8px">$v = \\text{cte}$</td><td style="border:1px solid var(--border);padding:8px">$v = v_0 + at$</td><td style="border:1px solid var(--border);padding:8px">$v = R\\omega$ (cte)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Accélération</td><td style="border:1px solid var(--border);padding:8px">$a = 0$</td><td style="border:1px solid var(--border);padding:8px">$a = \\text{cte}$</td><td style="border:1px solid var(--border);padding:8px">$a_n = R\\omega^2$ (centripète)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Sans le temps</td><td style="border:1px solid var(--border);padding:8px">—</td><td style="border:1px solid var(--border);padding:8px">$v^2 = v_0^2 + 2a\\Delta x$</td><td style="border:1px solid var(--border);padding:8px">—</td></tr></table>',
      formulas: [
        '$v = v_0 + at$ (vitesse en MRUA)',
        '$x = x_0 + v_0 t + \\dfrac{1}{2}at^2$ (position en MRUA)',
        '$v^2 = v_0^2 + 2a(x - x_0)$ (relation sans le temps)',
        '$v = R \\cdot \\omega$ (lien vitesse linéaire / vitesse angulaire)',
        '$a_n = \\dfrac{v^2}{R} = R\\omega^2$ (accélération centripète en mouvement circulaire)',
        '$\\omega = \\dfrac{2\\pi N}{60}$ (conversion tours/min → rad/s)'
      ],
      recap: [
        'La vitesse est la dérivée de la position : $v = dx/dt$. L\'accélération est la dérivée de la vitesse : $a = dv/dt$.',
        'En MRUA : $v$ varie linéairement et $x$ quadratiquement avec le temps.',
        'Le lien translation-rotation est $v = R\\omega$ : un point à distance $R$ de l\'axe a une vitesse proportionnelle à $\\omega$.',
        'En mouvement circulaire uniforme, l\'accélération centripète $a_n = R\\omega^2$ est dirigée vers le centre.'
      ],
      piege: 'La relation $v = R\\omega$ n\'est valable que si $\\omega$ est en <strong>rad/s</strong> (pas en tours/min). Pour convertir : $\\omega_{\\text{rad/s}} = \\dfrac{2\\pi \\times N_{\\text{tr/min}}}{60}$. Oublier cette conversion est l\'erreur la plus fréquente en cinématique !'
    },

    quiz: [
      {
        q: 'Un mobile part du repos et accélère à $a = 3$ m/s² pendant $4$ s. Quelle distance a-t-il parcourue ?',
        options: ['$12$ m', '$24$ m', '$36$ m', '$48$ m'],
        answer: 1,
        correction: 'On utilise $x = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\times 3 \\times 4^2 = \\frac{1}{2} \\times 3 \\times 16 = 24$ m.<br/>La vitesse finale est $v = 0 + 3 \\times 4 = 12$ m/s. On vérifie : $v^2 = 2a \\cdot x \\Rightarrow 144 = 2 \\times 3 \\times 24 = 144$ ✓.'
      },
      {
        q: 'Un moteur tourne à $N = 3000$ tr/min. Sa vitesse angulaire en rad/s est environ :',
        options: ['$50$ rad/s', '$100\\pi \\approx 314$ rad/s', '$3000$ rad/s', '$500$ rad/s'],
        answer: 1,
        correction: '$\\omega = \\dfrac{2\\pi \\times N}{60} = \\dfrac{2\\pi \\times 3000}{60} = 100\\pi \\approx 314$ rad/s.<br/>C\'est la conversion indispensable : on divise par $60$ (minutes → secondes) et on multiplie par $2\\pi$ (tours → radians).'
      },
      {
        q: 'Un disque de rayon $R = 0{,}5$ m tourne à $\\omega = 10$ rad/s. L\'accélération centripète d\'un point de sa périphérie vaut :',
        options: ['$5$ m/s²', '$50$ m/s²', '$20$ m/s²', '$100$ m/s²'],
        answer: 1,
        correction: '$a_n = R\\omega^2 = 0{,}5 \\times 10^2 = 0{,}5 \\times 100 = 50$ m/s².<br/>Cette accélération est dirigée vers le centre du disque. La vitesse linéaire du point est $v = R\\omega = 0{,}5 \\times 10 = 5$ m/s.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un tapis de convoyeur', v0_range: [0, 0], a_range: [0.5, 3.0] },
          { name: 'un chariot de manutention', v0_range: [0, 4], a_range: [1.0, 4.0] },
          { name: 'un véhicule électrique', v0_range: [0, 10], a_range: [1.0, 5.0] },
          { name: 'un ascenseur', v0_range: [0, 0], a_range: [0.5, 2.0] }
        ]);
        const a = randFloat(scenario.a_range[0], scenario.a_range[1], 1);
        const t = rand(3, 10);
        const v0 = rand(scenario.v0_range[0], scenario.v0_range[1]);
        const vf = parseFloat((v0 + a * t).toFixed(1));
        const x = parseFloat((v0 * t + 0.5 * a * t * t).toFixed(1));

        const askWhat = pick(['velocity', 'distance']);

        if (askWhat === 'velocity') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} démarre avec une vitesse initiale $v_0 = ${v0}$ m/s et accélère uniformément à $a = ${a.toFixed(1).replace('.', '{,}')}$ m/s² pendant $t = ${t}$ s. Calcule sa vitesse finale $v$ (en m/s).`,
            answer: vf,
            tolerance: 0.2,
            unit: 'm/s',
            hint: 'Utilise la formule du MRUA : $v = v_0 + at$. Remplace chaque grandeur par sa valeur numérique.',
            solution: [
              'On identifie un mouvement rectiligne uniformément accéléré (MRUA).',
              'Formule applicable : $v = v_0 + at$',
              `$v = ${v0} + ${a.toFixed(1).replace('.', '{,')} \\times ${t}$`,
              `$v = ${v0} + ${(a * t).toFixed(1).replace('.', '{,')} = ${vf.toString().replace('.', '{,')}$ m/s`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} démarre avec une vitesse initiale $v_0 = ${v0}$ m/s et accélère uniformément à $a = ${a.toFixed(1).replace('.', '{,}')}$ m/s² pendant $t = ${t}$ s. Calcule la distance parcourue $x$ (en m).`,
            answer: x,
            tolerance: 0.5,
            unit: 'm',
            hint: 'Utilise la formule du MRUA : $x = v_0 t + \\frac{1}{2}at^2$. Attention à bien calculer le terme $\\frac{1}{2}at^2$ séparément.',
            solution: [
              'On identifie un mouvement rectiligne uniformément accéléré (MRUA).',
              'Formule applicable : $x = v_0 t + \\dfrac{1}{2}at^2$',
              `$x = ${v0} \\times ${t} + \\dfrac{1}{2} \\times ${a.toFixed(1).replace('.', '{,')} \\times ${t}^2$`,
              `$x = ${(v0 * t).toFixed(1).replace('.', '{,')} + ${(0.5 * a * t * t).toFixed(1).replace('.', '{,')} = ${x.toString().replace('.', '{,')}$ m`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un convoyeur industriel transporte des colis sur une distance de $d = 6$ m. Le tapis du convoyeur est entraîné par un moteur dont l\'arbre de sortie est relié à un rouleau de rayon $R = 0{,}05$ m. Le tapis démarre du repos et accélère uniformément jusqu\'à une vitesse de croisière de $v = 1{,}2$ m/s atteinte en $t_1 = 3$ s.',
      tasks: [
        'Calculer l\'accélération $a$ du tapis pendant la phase de démarrage.',
        'Calculer la vitesse angulaire $\\omega$ du rouleau en régime de croisière.',
        'Calculer le temps total pour parcourir les $6$ m (phase d\'accélération + phase à vitesse constante).'
      ],
      solutions: [
        '$a = \\dfrac{v - v_0}{t_1} = \\dfrac{1{,}2 - 0}{3} = 0{,}4$ m/s².',
        '$\\omega = \\dfrac{v}{R} = \\dfrac{1{,}2}{0{,}05} = 24$ rad/s.',
        'Distance pendant l\'accélération : $d_1 = \\frac{1}{2}at_1^2 = \\frac{1}{2} \\times 0{,}4 \\times 9 = 1{,}8$ m. Distance restante : $d_2 = 6 - 1{,}8 = 4{,}2$ m. Temps à vitesse constante : $t_2 = \\dfrac{d_2}{v} = \\dfrac{4{,}2}{1{,}2} = 3{,}5$ s. Temps total : $t = t_1 + t_2 = 3 + 3{,}5 = 6{,}5$ s.'
      ],
      finalAnswer: '$a = 0{,}4$ m/s², $\\omega = 24$ rad/s, temps total $= 6{,}5$ s.'
    },

    evaluation: {
      title: 'Évaluation — Cinématique du solide',
      duration: '20 min',
      questions: [
        {
          statement: 'Un véhicule roule à $v_0 = 20$ m/s et freine avec une décélération $a = -4$ m/s². Au bout de combien de temps s\'arrête-t-il ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.1,
          unit: 's',
          points: 2,
          correction: 'À l\'arrêt, $v = 0$. On utilise $v = v_0 + at$ : $0 = 20 + (-4)t \\Rightarrow t = \\dfrac{20}{4} = 5$ s.'
        },
        {
          statement: 'Quelle est la distance de freinage du véhicule précédent ($v_0 = 20$ m/s, $a = -4$ m/s²) ?',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'm',
          points: 2,
          correction: '$v^2 = v_0^2 + 2a \\cdot d \\Rightarrow 0 = 400 + 2 \\times (-4) \\times d \\Rightarrow d = \\dfrac{400}{8} = 50$ m.'
        },
        {
          statement: 'La relation $v = R\\omega$ est valable lorsque :',
          type: 'multiple-choice',
          options: [
            '$\\omega$ est exprimé en tours/min',
            '$\\omega$ est exprimé en rad/s et $R$ en mètres',
            '$v$ est exprimé en km/h',
            '$R$ est exprimé en cm'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation $v = R\\omega$ n\'est valable qu\'avec les unités SI : $v$ en m/s, $R$ en m et $\\omega$ en rad/s. Toute autre unité nécessite une conversion préalable.'
        },
        {
          statement: 'Un moteur tourne à $N = 1500$ tr/min. Calculer sa vitesse angulaire $\\omega$ en rad/s (arrondir à l\'entier).',
          type: 'numeric',
          answer: 157,
          tolerance: 1,
          unit: 'rad/s',
          points: 2,
          correction: '$\\omega = \\dfrac{2\\pi \\times 1500}{60} = 50\\pi \\approx 157$ rad/s.'
        },
        {
          statement: 'Un point situé à $R = 0{,}3$ m de l\'axe d\'un disque tournant à $\\omega = 20$ rad/s subit une accélération centripète de :',
          type: 'numeric',
          answer: 120,
          tolerance: 1,
          unit: 'm/s²',
          points: 2,
          correction: '$a_n = R\\omega^2 = 0{,}3 \\times 20^2 = 0{,}3 \\times 400 = 120$ m/s². Cette accélération est dirigée vers le centre de rotation.'
        }
      ]
    }
  });
