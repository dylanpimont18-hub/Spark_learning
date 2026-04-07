/* =========================================================
   Spark Learning – data/si-bts/si-bts-capteurs-industriels.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-capteurs-industriels',
    level: 3, subject: 'si',
    icon: '📡',
    title: 'Capteurs Industriels et Instrumentation',
    subtitle: 'Wheatstone, sensibilité, résolution, incertitude',
    keywords: ['Capteur', 'Wheatstone', 'Sensibilité', 'Précision', 'Incertitude'],
    physics: 'Les capteurs sont les « organes sensoriels » des systèmes industriels. Ils mesurent température, pression, déplacement, force et débit pour les convertir en signaux exploitables par les automates et systèmes de commande.',

    cours: {
      intro: 'Un capteur transforme une grandeur physique (mesurande) en un signal électrique. Ses performances sont caractérisées par des critères métrologiques précis.<br/><br/>La <strong>sensibilité</strong> $S = \\Delta V_{\\text{sortie}} / \\Delta X_{\\text{entrée}}$ est la pente de la courbe d\'étalonnage. Plus $S$ est élevée, plus le capteur détecte de petites variations.<br/><br/>La <strong>résolution</strong> est la plus petite variation détectable. Pour un capteur numérique ($n$ bits) : résolution $= EM / 2^n$. La <strong>précision</strong> est l\'écart maximal entre mesure et valeur vraie, exprimée en classe (ex. : classe $0{,}5$ = $\\pm 0{,}5\\%$ de l\'EM). Ces deux notions sont distinctes : un capteur peut avoir une bonne résolution et une mauvaise précision.<br/><br/>Le <strong>pont de Wheatstone</strong> est le circuit de conditionnement le plus courant pour les capteurs résistifs (jauges, thermistances, Pt100). Pour un pont équilibré à $R_0$ avec une variation $\\Delta R$ :<br/>$$\\Delta V = E \\cdot \\dfrac{\\Delta R}{4R_0 + 2\\Delta R} \\approx E \\cdot \\dfrac{\\Delta R}{4R_0}$$<br/>(approximation valable si $\\Delta R \\ll R_0$).<br/><br/>L\'<strong>incertitude de mesure</strong> quantifie la confiance : $u = \\sigma / \\sqrt{n}$ (type A), et l\'incertitude élargie $U = k \\cdot u$ ($k = 2$ pour 95% de confiance).',
      definitions: [
        { term: 'Sensibilité $S$', def: '$S = \\Delta V_{\\text{sortie}} / \\Delta X_{\\text{entrée}}$. Pente de la droite d\'étalonnage. Unité : V/unité de mesurande (ex. mV/bar, mV/°C).' },
        { term: 'Résolution', def: 'Plus petite variation détectable. Capteur numérique : résolution $= EM / 2^n$ ($n$ = nombre de bits). Un CAN 12 bits sur 10 V a une résolution de $10/4096 \\approx 2{,}44$ mV.' },
        { term: 'Précision (classe)', def: 'Écart maximal entre mesure et valeur vraie, en % de l\'EM. Classe $0{,}5$ : erreur $\\leq \\pm 0{,}5\\%$ de l\'EM. Dépend de l\'étalonnage.' },
        { term: 'Pont de Wheatstone', def: 'Circuit en pont à 4 résistances alimenté par $E$. La tension de déséquilibre est $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$ pour une seule branche active. Permet de mesurer de très faibles variations de résistance.' },
        { term: 'Incertitude type $u$', def: '$u = \\sigma / \\sqrt{n}$ (type A, statistique). Incertitude élargie : $U = 2u$ (confiance $\\approx 95\\%$). On écrit : $x = \\bar{x} \\pm U$.' }
      ],
      method: {
        title: 'Caractériser un capteur et exploiter un pont de Wheatstone',
        steps: [
          'Identifier l\'étendue de mesure (EM) et calculer la sensibilité : $S = (V_{\\max} - V_{\\min}) / (X_{\\max} - X_{\\min})$.<br/><strong>Exemple :</strong> Capteur de force : $0$ à $500$ N → $0$ à $5$ V. $S = 5/500 = 10$ mV/N.',
          'Calculer la grandeur mesurée : $X = V / S$ (si linéaire passant par l\'origine).<br/><strong>Exemple :</strong> $V = 3{,}2$ V → $X = 3200/10 = 320$ N.',
          'Pour un pont de Wheatstone (Pt100 : $R_0 = 100$ Ω, $S_{\\text{Pt}} = 0{,}385$ Ω/°C) :<br/>$R(T) = R_0 + S_{\\text{Pt}} \\cdot T$, $\\Delta R = S_{\\text{Pt}} \\cdot T$, $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$.<br/><strong>Exemple :</strong> $T = 50°$C, $E = 10$ V → $\\Delta R = 19{,}25$ Ω → $\\Delta V = 10 \\times 19{,}25 / 400 = 0{,}481$ V.',
          'Incertitude : si $n$ mesures avec écart-type $\\sigma$ → $u = \\sigma / \\sqrt{n}$, $U = 2u$.<br/><strong>Exemple :</strong> $\\sigma = 0{,}3$ °C, $n = 16$ → $u = 0{,}3/4 = 0{,}075$ °C, $U = 0{,}15$ °C.'
        ]
      },
      example: {
        statement: 'Un capteur de pression a une EM de $0$ à $10$ bar et délivre $0$ à $5$ V (linéaire). On mesure $V = 3{,}5$ V. Donner $S$ et $P$. Si la classe est $0{,}5$, quelle est l\'erreur maximale ?',
        steps: [
          '$S = 5 / 10 = 0{,}5$ V/bar = 500 mV/bar.',
          '$P = V / S = 3{,}5 / 0{,}5 = 7$ bar.',
          'Classe $0{,}5$ : erreur max $= 0{,}5\\% \\times EM = 0{,}005 \\times 10 = 0{,}05$ bar.',
          'Résultat : $P = 7{,}00 \\pm 0{,}05$ bar.'
        ],
        answer: '$S = 0{,}5$ V/bar. $P = 7{,}00 \\pm 0{,}05$ bar.'
      },
      formulas: [
        '$S = \\dfrac{\\Delta V_{\\text{sortie}}}{\\Delta X_{\\text{entrée}}}$ (sensibilité)',
        '$X = \\dfrac{V_{\\text{mesurée}}}{S}$ (si linéaire)',
        '$\\Delta V \\approx E \\cdot \\dfrac{\\Delta R}{4R_0}$ (Wheatstone, 1 branche active)',
        '$\\text{Résolution} = \\dfrac{\\text{EM}}{2^n}$ ($n$ bits)',
        '$u = \\dfrac{\\sigma}{\\sqrt{n}}$ (incertitude type A)',
        '$U = 2u$ (incertitude élargie, 95%)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Type de capteur</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Mesurande</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Étendue typique</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Sensibilité typique</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Pt100 (résistif)</td><td style="border:1px solid var(--border);padding:8px">Température</td><td style="border:1px solid var(--border);padding:8px">$-200$ à $+850$ °C</td><td style="border:1px solid var(--border);padding:8px">$0{,}385$ Ω/°C</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Jauge de contrainte</td><td style="border:1px solid var(--border);padding:8px">Déformation / Force</td><td style="border:1px solid var(--border);padding:8px">$0$ à $2000$ $\\mu\\varepsilon$</td><td style="border:1px solid var(--border);padding:8px">$k \\approx 2$ (facteur de jauge)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Piézoélectrique</td><td style="border:1px solid var(--border);padding:8px">Pression / Accélération</td><td style="border:1px solid var(--border);padding:8px">$0$ à $700$ bar</td><td style="border:1px solid var(--border);padding:8px">$\\approx 5$ pC/bar</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Codeur incrémental</td><td style="border:1px solid var(--border);padding:8px">Position / Vitesse</td><td style="border:1px solid var(--border);padding:8px">360° (continu)</td><td style="border:1px solid var(--border);padding:8px">$1000$ à $10000$ pts/tour</td></tr></table>',
      recap: [
        'La sensibilité $S$ est la pente de la droite d\'étalonnage : $S = \\Delta V / \\Delta X$.',
        'Résolution $\\neq$ précision : la résolution dépend de la technologie, la précision de l\'étalonnage.',
        'Le pont de Wheatstone détecte de très faibles variations $\\Delta R$ : $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$.',
        'L\'incertitude $u = \\sigma / \\sqrt{n}$ diminue avec le nombre de mesures.',
        'Toujours exprimer le résultat sous la forme $x = \\bar{x} \\pm U$ avec l\'incertitude élargie.'
      ],
      piege: 'Ne pas confondre précision et résolution ! Un capteur peut avoir une excellente résolution (petites variations détectées) mais une mauvaise précision (valeur éloignée du vrai). La précision dépend de l\'étalonnage, la résolution de la technologie (nombre de bits, pas de quantification).'
    },

    quiz: [
      {
        q: 'La tension de déséquilibre d\'un pont de Wheatstone (1 branche active) s\'écrit :',
        options: [
          '$\\Delta V = E \\times R_0$',
          '$\\Delta V \\approx E \\times \\Delta R / (4R_0)$',
          '$\\Delta V = E / \\Delta R$',
          '$\\Delta V = 4R_0 / E$'
        ],
        answer: 1,
        correction: 'Pour un pont à une branche active, la tension de déséquilibre est $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$. Cette approximation est valable tant que $\\Delta R \\ll R_0$.'
      },
      {
        q: 'Un CAN 12 bits avec une EM de $0$ à $10$ V a une résolution de :',
        options: [
          '$10 / 12 \\approx 0{,}83$ V',
          '$10 / 4096 \\approx 2{,}44$ mV',
          '$10 / 1024 \\approx 9{,}77$ mV',
          '$12 / 10 = 1{,}2$ V'
        ],
        answer: 1,
        correction: 'Résolution $= EM / 2^n = 10 / 2^{12} = 10 / 4096 \\approx 2{,}44$ mV. Le CAN a $4096$ niveaux de quantification.'
      },
      {
        q: 'L\'incertitude type de $n = 9$ mesures d\'écart-type $\\sigma = 0{,}6$ est :',
        options: [
          '$u = 0{,}6 / 9 = 0{,}067$',
          '$u = 0{,}6 / \\sqrt{9} = 0{,}2$',
          '$u = 0{,}6 \\times \\sqrt{9} = 1{,}8$',
          '$u = 0{,}6 \\times 9 = 5{,}4$'
        ],
        answer: 1,
        correction: '$u = \\sigma / \\sqrt{n} = 0{,}6 / \\sqrt{9} = 0{,}6 / 3 = 0{,}2$. L\'incertitude élargie ($k = 2$) serait $U = 0{,}4$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { type: 'force', unit: 'N', Xmax: rand(200, 1000) },
          { type: 'pression', unit: 'bar', Xmax: rand(10, 400) },
          { type: 'température', unit: '°C', Xmax: rand(100, 500) }
        ]);
        const Vmax = pick([5, 10]);
        const S = parseFloat((Vmax / scenario.Xmax).toFixed(4));
        const V = randFloat(0.5, Vmax - 0.5, 1);
        const X = parseFloat((V / S).toFixed(1));
        return {
          statement: `Un capteur de ${scenario.type} a une EM de $0$ à $${scenario.Xmax}$ ${scenario.unit} et délivre $0$ à $${Vmax}$ V (linéaire). La tension mesurée est $V = ${String(V).replace('.', '{,')}$ V. Calcule la ${scenario.type} mesurée (en ${scenario.unit}, arrondi à $0{,}1$).`,
          answer: X,
          tolerance: 0.5,
          unit: scenario.unit,
          hint: `Calcule la sensibilité $S = V_{\\max} / X_{\\max}$, puis $X = V / S$.`,
          solution: [
            `$S = ${Vmax} / ${scenario.Xmax} = ${String(S).replace('.', '{,')}$ V/${scenario.unit}`,
            `$X = V / S = ${String(V).replace('.', '{,')} / ${String(S).replace('.', '{,')}$`,
            `$X = ${String(X).replace('.', '{,')}$ ${scenario.unit}`
          ]
        };
      }
    },

    probleme: {
      context: 'Une sonde Pt100 ($R_0 = 100$ Ω à $0°$C, sensibilité $0{,}385$ Ω/°C) est placée dans un pont de Wheatstone (trois résistances fixes de $100$ Ω, alimentation $E = 10$ V). On mesure une tension $\\Delta V = 0{,}481$ V.',
      tasks: [
        'Calculer la variation de résistance $\\Delta R$ à partir de la tension mesurée : $\\Delta R = 4R_0 \\cdot \\Delta V / E$.',
        'En déduire la température $T = \\Delta R / S_{\\text{Pt}}$ (avec $S_{\\text{Pt}} = 0{,}385$ Ω/°C).',
        'On effectue $n = 25$ mesures de température avec un écart-type $\\sigma = 0{,}8$ °C. Calculer l\'incertitude type $u$ et l\'incertitude élargie $U$ ($k = 2$).'
      ],
      solutions: [
        '$\\Delta R = 4 \\times 100 \\times 0{,}481 / 10 = 400 \\times 0{,}481 / 10 = 19{,}24$ Ω.',
        '$T = \\Delta R / S_{\\text{Pt}} = 19{,}24 / 0{,}385 = 49{,}97 \\approx 50$ °C.',
        '$u = \\sigma / \\sqrt{n} = 0{,}8 / \\sqrt{25} = 0{,}8 / 5 = 0{,}16$ °C. $U = 2u = 0{,}32$ °C. Résultat : $T = 50{,}0 \\pm 0{,}3$ °C.'
      ],
      finalAnswer: '$\\Delta R = 19{,}24$ Ω, $T \\approx 50$ °C. $U = \\pm 0{,}32$ °C (confiance 95%).'
    },

    evaluation: {
      title: 'Évaluation — Capteurs Industriels',
      duration: '20 min',
      questions: [
        {
          statement: 'Un capteur délivre $0$ à $5$ V pour $0$ à $200$ bar. Calculer la sensibilité (en mV/bar).',
          type: 'numeric',
          answer: 25,
          tolerance: 0.1,
          unit: 'mV/bar',
          points: 2,
          correction: '$S = 5000/200 = 25$ mV/bar.'
        },
        {
          statement: 'Un pont de Wheatstone ($R_0 = 120$ Ω, $E = 5$ V) a une branche dont la résistance varie de $\\Delta R = 2$ Ω. La tension de déséquilibre est (en mV, arrondi à l\'entier) :',
          type: 'numeric',
          answer: 21,
          tolerance: 1,
          unit: 'mV',
          points: 3,
          correction: '$\\Delta V \\approx E \\cdot \\Delta R / (4R_0) = 5 \\times 2 / (4 \\times 120) = 10/480 = 0{,}0208$ V $= 20{,}8$ mV $\\approx 21$ mV.'
        },
        {
          statement: 'La résolution d\'un CAN est :',
          type: 'multiple-choice',
          options: [
            'L\'écart entre la mesure et la valeur vraie',
            'La plus petite variation détectable, liée au nombre de bits',
            'La plage de fonctionnement du capteur',
            'La pente de la courbe d\'étalonnage'
          ],
          answer: 1,
          points: 2,
          correction: 'La résolution est la plus petite variation détectable : $EM / 2^n$ pour un CAN $n$ bits. C\'est différent de la précision (écart à la valeur vraie) et de la sensibilité (pente).'
        },
        {
          statement: 'Après $n = 16$ mesures d\'écart-type $\\sigma = 0{,}4$ °C, l\'incertitude élargie ($k = 2$) est (en °C) :',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: '°C',
          points: 3,
          correction: '$u = \\sigma/\\sqrt{n} = 0{,}4/\\sqrt{16} = 0{,}4/4 = 0{,}1$ °C. $U = 2u = 0{,}2$ °C.'
        }
      ]
    }
  });
