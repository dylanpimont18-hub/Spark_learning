window.MODULES.push({
  id: 'bts-prep-trigonometrie',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📐',
  title: 'Trigonométrie',
  subtitle: 'Sin, cos, tan — du triangle aux phénomènes alternatifs',
  keywords: ['sinus', 'cosinus', 'tangente', 'angle', 'triangle rectangle', 'hypoténuse', 'cercle trigonométrique', 'radian', 'déphasage'],
  physics: 'La trigonométrie est le langage commun de l\'électricité alternative, de la mécanique des structures et de la topographie. Dès que l\'on travaille avec des signaux AC, des pentes, des forces obliques ou des composantes, elle est incontournable.',

  cours: {
    intro: `En BTS technique, la trigonométrie n'est pas un exercice abstrait : c'est l'outil qui permet de calculer un angle de phase entre tension et courant en électrotechnique, une pente de canalisation en BTP, un effort sur un plan incliné en mécanique, ou encore la résolution vectorielle d'une force de traction.<br/><br/>
Ce module couvre les trois fonctions essentielles dans le triangle rectangle, les valeurs remarquables à connaître de mémoire, et l'extension au cercle trigonométrique pour les angles quelconques (nécessaire pour les signaux sinusoïdaux).`,

    definitions: [
      {
        term: 'Triangle rectangle — SOH-CAH-TOA',
        def: `$$\\sin\\theta = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} \\qquad \\cos\\theta = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} \\qquad \\tan\\theta = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$$<br/><br/>
Identité fondamentale : $\\cos^2\\theta + \\sin^2\\theta = 1$`,
      },
      {
        term: 'Unités d\'angle : degrés et radians',
        def: `$\\theta_{\\text{rad}} = \\theta_{°} \\times \\dfrac{\\pi}{180}$ &nbsp;·&nbsp; Un tour = 360° = $2\\pi$ rad &nbsp;·&nbsp; Angle droit = 90° = $\\dfrac{\\pi}{2}$ rad<br/><br/>
Valeurs remarquables : sin 30° = 0,5 &nbsp;·&nbsp; sin 45° = $\\dfrac{\\sqrt{2}}{2}$ &nbsp;·&nbsp; sin 60° = $\\dfrac{\\sqrt{3}}{2}$ &nbsp;·&nbsp; sin 90° = 1`,
      },
      {
        term: 'Cercle trigonométrique',
        def: `Pour les angles quelconques (signaux AC, rotations), on utilise le cercle de rayon 1 centré à l'origine.<br/>
Un point sur ce cercle : $M = (\\cos\\theta,\; \\sin\\theta)$.<br/><br/>
Les fonctions sin et cos sont périodiques de période $2\\pi$.<br/>
Signal sinusoïdal : $u(t) = U_{\\max} \\sin(\\omega t + \\varphi)$`,
      },
    ],

    method: {
      title: 'Résoudre un triangle rectangle',
      steps: [
        'Identifier l\'angle de référence $\\theta$.',
        'Nommer les côtés : opposé (face à θ), adjacent (touche θ), hypoténuse (face au 90°).',
        'Choisir la fonction trigonométrique qui relie les éléments connus à l\'inconnu (SOH-CAH-TOA).',
        'Isoler l\'inconnu et calculer.',
        `Pour trouver un <strong>angle</strong> à partir de deux côtés, utiliser les fonctions réciproques : $\\arcsin$, $\\arccos$, $\\arctan$ (notées $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ sur les calculatrices).`,
      ],
    },

    example: {
      statement: `Électrotechnique : circuit RL avec $R = 60\;\\Omega$, $X_L = 80\;\\Omega$. Calculer l'impédance Z et l'angle de déphasage φ.`,
      steps: [
        '$Z = \\sqrt{R^2 + X_L^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\;\\Omega$',
        '$\\varphi = \\arctan\\left(\\dfrac{X_L}{R}\\right) = \\arctan\\left(\\dfrac{80}{60}\\right) = \\arctan(1{,}333) \\approx 53{,}1°$',
        'Vérification : $\\cos\\varphi = R/Z = 60/100 = 0{,}6$ → $\\varphi = \\arccos(0{,}6) \\approx 53{,}1°$ ✓',
        `<strong>Exemple 2 — BTP (pente) :</strong> canalisation avec pente 2% sur 25 m horizontal<br/>Dénivellation : $h = 25 \\times \\tan(\\arctan(0{,}02)) = 25 \\times 0{,}02 = 0{,}5\;\\text{m}$`,
        `<strong>Exemple 3 — Mécanique (plan incliné) :</strong> $m = 200\;\\text{kg}$, $\\theta = 30°$<br/>$P_{//} = mg\\sin 30° = 1962 \\times 0{,}5 = 981\;\\text{N}$ &nbsp;·&nbsp; $P_\\perp = mg\\cos 30° = 1962 \\times 0{,}866 = 1699\;\\text{N}$`,
      ],
      answer: '$Z = 100\;\\Omega$, $\\varphi \\approx 53{,}1°$. Méthode : Pythagore pour Z, arctan pour φ.',
    },

    formulas: [
      '<strong>SOH</strong> : $\\sin\\theta = \\dfrac{\\text{opposé}}{\\text{hypoténuse}}$',
      '<strong>CAH</strong> : $\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
      '<strong>TOA</strong> : $\\tan\\theta = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{\\sin\\theta}{\\cos\\theta}$',
      '<strong>Identité fondamentale</strong> : $\\cos^2\\theta + \\sin^2\\theta = 1$',
      '<strong>Pythagore</strong> : $a^2 + b^2 = c^2 \\quad (c=\\text{hypoténuse})$',
      '<strong>Conversion °→rad</strong> : $\\theta_{\\text{rad}} = \\theta_{°} \\times \\dfrac{\\pi}{180}$',
      '<strong>Signal sinusoïdal</strong> : $u(t) = U_{\\max}\\sin(\\omega t + \\varphi)$',
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-family:monospace;font-size:0.88rem;line-height:1.8">
<div style="font-weight:700;margin-bottom:10px;font-family:sans-serif">Triangle rectangle — repérage des côtés</div>
<pre style="margin:0;color:var(--text)">
        C
        |\\
        | \\   hypoténuse (h)
opposé  |  \\
 (opp)  |   \\
        |  θ \\
        A-----B
         adjacent
            (adj)

  sin θ = opp / h
  cos θ = adj / h
  tan θ = opp / adj
</pre>
<div style="margin-top:14px;font-family:sans-serif;font-size:0.85rem;color:var(--text-muted)">
  θ est l'angle en A (≠ 90°) — l'angle droit est en C.
</div>
</div>`,

    recap: [
      '<strong>SOH-CAH-TOA</strong> : sin = opposé/hypoténuse, cos = adjacent/hypoténuse, tan = opposé/adjacent.',
      '$\\cos^2\\theta + \\sin^2\\theta = 1$ : l\'identité fondamentale.',
      'Valeurs clés : sin 30° = 0,5 — cos 60° = 0,5 — tan 45° = 1 — sin 90° = 1.',
      'Pour trouver un angle : utiliser $\\arctan$, $\\arcsin$ ou $\\arccos$.',
      'Signaux AC : $u(t) = U_{\\max}\\sin(\\omega t + \\varphi)$ — cercle trigonométrique.',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Degrés vs radians sur la calculatrice</strong> : vérifier systématiquement le mode. $\\sin(90)$ en radians ≠ $\\sin(90°)$. En radians, $\\sin(\\pi/2) = 1$.<br/><br/>
• <strong>Confondre opposé et adjacent</strong> : l'opposé est le côté en face de l'angle, l'adjacent est le côté qui "touche" l'angle (sans être l'hypoténuse).<br/><br/>
• <strong>Arctan ne donne pas toujours l'angle voulu</strong> : $\\arctan$ renvoie une valeur entre -90° et 90°. Pour les angles dans d'autres quadrants, il faut analyser le signe des composantes.<br/><br/>
• <strong>Pente en % ≠ angle</strong> : une pente de 100% correspond à 45°, pas à 90°. Pente % = $\\tan\\theta \\times 100$, donc $\\theta = \\arctan(\\text{pente}/100)$.`,
  },

  quiz: [
    {
      q: 'Dans un triangle rectangle, sin θ est égal à :',
      options: ['adjacent / hypoténuse', 'opposé / adjacent', 'opposé / hypoténuse', 'hypoténuse / opposé'],
      answer: 2,
      correction: 'SOH : Sin = Opposé / Hypoténuse. À ne pas confondre avec cos (adjacent/hypoténuse).',
    },
    {
      q: 'Quelle est la valeur de cos 60° ?',
      options: ['$\\frac{\\sqrt{3}}{2} \\approx 0{,}87$', '$\\frac{1}{2} = 0{,}5$', '$\\frac{\\sqrt{2}}{2} \\approx 0{,}71$', '1'],
      answer: 1,
      correction: 'cos 60° = 1/2 = 0,5. Astuce : cos 60° = sin 30° (angles complémentaires). Valeur à connaître par cœur.',
    },
    {
      q: 'Dans un circuit RL, l\'angle de déphasage φ vérifie tan φ = X_L / R. Si X_L = R, quel est φ ?',
      options: ['0°', '30°', '45°', '90°'],
      answer: 2,
      correction: 'tan φ = 1 ⟹ φ = arctan(1) = 45°. C\'est la valeur remarquable de la tangente.',
    },
    {
      q: 'Un signal sinusoïdal a une amplitude maximale de 325 V et une fréquence de 50 Hz. Sa pulsation ω vaut :',
      options: ['50 rad/s', '$50\\pi$ rad/s', '$100\\pi$ rad/s', '314 rad/s'],
      answer: 2,
      correction: 'ω = 2πf = 2π × 50 = 100π ≈ 314,2 rad/s. Les réponses C et D sont équivalentes : 100π = 314,16.',
    },
    {
      q: 'Quelle identité trigonométrique est toujours vraie, pour tout angle θ ?',
      options: ['sin θ + cos θ = 1', 'sin²θ + cos²θ = 1', 'tan θ = sin θ + cos θ', 'sin²θ = cos²θ'],
      answer: 1,
      correction: 'sin²θ + cos²θ = 1 est l\'identité fondamentale. Elle découle du théorème de Pythagore appliqué au cercle de rayon 1.',
    },
    {
      q: 'Pour convertir 90° en radians, on calcule :',
      options: ['$90 \\times 180 / \\pi$', '$90 / \\pi$', '$90 \\times \\pi / 180$', '$\\pi / 90$'],
      answer: 2,
      correction: '90° × π/180 = π/2 ≈ 1,571 rad. Règle : °→rad, on multiplie par π/180.',
    },
    {
      q: 'Une force F = 500 N est inclinée à 30° de l\'horizontal. Sa composante horizontale est :',
      options: ['$500 \\times \\sin 30° = 250\\;\\text{N}$', '$500 \\times \\cos 30° \\approx 433\\;\\text{N}$', '$500 \\times \\tan 30° \\approx 289\\;\\text{N}$', '$500 / \\cos 30° \\approx 577\\;\\text{N}$'],
      answer: 1,
      correction: 'La composante sur l\'axe horizontal : F_x = F cos 30° = 500 × √3/2 ≈ 433 N. La composante sur l\'axe vertical : F_y = F sin 30° = 250 N.',
    },
    {
      q: 'Une canalisation d\'eau pluviale a une pente de 1 %. Quel est l\'angle approximatif avec l\'horizontale ?',
      options: ['1°', '0,57°', '5,7°', '10°'],
      answer: 1,
      correction: 'θ = arctan(0,01) ≈ 0,573°. Pour de petits angles, tan θ ≈ θ en radians ≈ pente. Une pente de 1% ≈ 0,57°.',
    },
    {
      q: 'Dans un triangle rectangle, si l\'hypoténuse vaut 10 m et un angle θ = 37°, le côté adjacent vaut :',
      options: ['6,02 m', '7,99 m', '6,03 m', '8,00 m'],
      answer: 1,
      correction: 'adjacent = hypoténuse × cos 37° = 10 × 0,7986 ≈ 7,99 m. (sin 37° ≈ 0,602 → opposé ≈ 6,02 m)',
    },
    {
      q: 'Un panneau solaire est incliné à 35° de l\'horizontal. L\'irradiance normale au panneau est 900 W/m². L\'irradiance reçue sur la surface horizontale est :',
      options: ['900 × sin 35° ≈ 516 W/m²', '900 × cos 35° ≈ 737 W/m²', '900 × tan 35° ≈ 630 W/m²', '900 W/m²'],
      answer: 1,
      correction: 'La projection sur l\'horizontale utilise cos : I_horiz = I × cos(inclinaison) = 900 × cos 35° ≈ 737 W/m². L\'angle entre la normale au panneau incliné et l\'horizontale est 35°.',
    },
    {
      q: 'La tangente d\'un angle peut être négative. Dans quel quadrant sin θ > 0 ET cos θ < 0 ?',
      options: ['1er quadrant (0°–90°)', '2e quadrant (90°–180°)', '3e quadrant (180°–270°)', '4e quadrant (270°–360°)'],
      answer: 1,
      correction: 'Dans le 2e quadrant (90°–180°), sin est positif (axe y > 0) et cos est négatif (axe x < 0). Donc tan = sin/cos < 0 dans ce quadrant.',
    },
    {
      q: 'Un technicien mesure une distance horizontale de 15 m et une hauteur de 8 m. L\'angle de la pente est :',
      options: ['arcsin(8/15) ≈ 32,2°', 'arctan(8/15) ≈ 28,1°', 'arccos(8/15) ≈ 57,8°', 'arctan(15/8) ≈ 61,9°'],
      answer: 1,
      correction: 'tan θ = opposé / adjacent = hauteur / distance horizontale = 8/15. Donc θ = arctan(8/15) ≈ 28,1°. arcsin donnerait le bon résultat seulement si 15 était l\'hypoténuse.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['phase', 'incline', 'composante']);

      if (type === 'phase') {
        const R = pick([30, 40, 50, 60, 80]);
        const X = pick([40, 30, 120, 80, 60]);
        const Z = Math.sqrt(R * R + X * X);
        const phi = Math.atan(X / R) * 180 / Math.PI;
        const filiere = pick(['réseau triphasé industriel', 'variateur de vitesse', 'transformateur de puissance']);
        return {
          statement: `Dans un ${filiere}, un circuit RL présente une résistance $R = ${R}\\;\\Omega$ et une réactance inductance $X_L = ${X}\\;\\Omega$.<br/><br/>Calculez l'impédance $Z$ (en Ω) et l'angle de déphasage $\\varphi$ (en degrés, arrondi à 0,1°).`,
          answer: parseFloat(phi.toFixed(1)),
          tolerance: 0.2,
          unit: '°',
          hint: `Commencer par $Z = \\sqrt{R^2 + X_L^2}$, puis $\\varphi = \\arctan(X_L / R)$.`,
          solution: `$Z = \\sqrt{${R}^2 + ${X}^2} = \\sqrt{${R*R + X*X}} = ${Z.toFixed(1)}\\;\\Omega$<br/>$\\varphi = \\arctan\\left(\\dfrac{${X}}{${R}}\\right) = \\arctan(${(X/R).toFixed(3)}) \\approx ${phi.toFixed(1)}°$`,
        };
      }

      if (type === 'incline') {
        const theta = pick([15, 20, 25, 30]);
        const mass = pick([150, 200, 250, 300, 400]);
        const g = 9.81;
        const P = mass * g;
        const Ppar = P * Math.sin(theta * Math.PI / 180);
        const context = pick(['plan incliné de montage d\'équipements industriels', 'rampe d\'accès à un bâtiment industriel', 'glissière de convoyeur inclinée']);
        return {
          statement: `Une charge de $m = ${mass}\\;\\text{kg}$ est posée sur un ${context} incliné à $\\theta = ${theta}°$.<br/><br/>Calculez la composante du poids parallèle au plan incliné $P_{//}$ (en N, arrondi à l'unité).`,
          answer: Math.round(Ppar),
          tolerance: 2,
          unit: 'N',
          hint: `$P = mg$, puis $P_{//} = P \\sin\\theta$.`,
          solution: `$P = ${mass} \\times 9{,}81 = ${P.toFixed(0)}\\;\\text{N}$<br/>$P_{//} = P\\sin${theta}° = ${P.toFixed(0)} \\times ${Math.sin(theta * Math.PI/180).toFixed(3)} \\approx ${Math.round(Ppar)}\\;\\text{N}$`,
        };
      }

      // composante
      const F = pick([200, 300, 400, 500, 600, 800]);
      const theta = pick([20, 25, 30, 35, 40, 45, 60]);
      const Fx = F * Math.cos(theta * Math.PI / 180);
      const Fy = F * Math.sin(theta * Math.PI / 180);
      const context = pick(['câble de levage', 'bielle de compresseur', 'bras de robot industriel']);
      const comp = pick(['horizontale', 'verticale']);
      const answer = comp === 'horizontale' ? Fx : Fy;
      const trig = comp === 'horizontale' ? `\\cos${theta}°` : `\\sin${theta}°`;
      return {
        statement: `Un ${context} exerce une force $F = ${F}\\;\\text{N}$ orientée à $${theta}°$ de l'horizontale.<br/><br/>Calculez la composante <strong>${comp}</strong> de cette force (en N, arrondi à l'unité).`,
        answer: Math.round(answer),
        tolerance: 2,
        unit: 'N',
        hint: `Composante horizontale = $F\\cos\\theta$, verticale = $F\\sin\\theta$.`,
        solution: `$F_{${comp === 'horizontale' ? 'x' : 'y'}} = F \\times ${trig} = ${F} \\times ${(comp === 'horizontale' ? Math.cos : Math.sin)(theta * Math.PI/180).toFixed(3)} \\approx ${Math.round(answer)}\\;\\text{N}$`,
      };
    },
  },

  probleme: {
    context: `Une installation solaire thermique est posée sur un toit incliné à $\\alpha = 30°$ par rapport à l'horizontal. Le capteur solaire mesure 2 m × 1 m (surface $S = 2\\;\\text{m}^2$). Le soleil est à un angle $\\beta = 50°$ au-dessus de l'horizon, dans le plan du capteur.<br/><br/>L'irradiance solaire directe (normale aux rayons) est $G = 850\\;\\text{W/m}^2$.`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
         Rayons solaires
        ↘ ↘ ↘  (β=50° / horiz.)
          ↘ ↘ ↘
    ┌──────────────┐  ← capteur (α=30° / horiz.)
    │  α=30°       │
    └──────────────┘
      ////toit////

  Angle capteur/rayons = β - α = 50° - 30° = 20°
  (angle entre la normale au capteur et les rayons)
</pre>
</div>`,
    tasks: [
      'Quel est l\'angle $\\gamma$ entre les rayons solaires et la normale au capteur ? (La normale est perpendiculaire au capteur, soit à 90°-30°=60° de l\'horizontal)',
      'Calculez la puissance interceptée par le capteur $P_{\\text{cap}} = G \\times S \\times \\cos\\gamma$.',
      'Si le rendement du capteur est $\\eta = 0{,}72$, quelle puissance thermique $P_{\\text{th}}$ est effectivement produite ?',
      'On souhaite comparer avec un capteur horizontal ($\\alpha = 0°$). Calculez $P_{\\text{horiz}} = G \\times S \\times \\cos(90° - \\beta)$ et conclure.',
    ],
    solutions: [
      `La normale au capteur est à $90° - 30° = 60°$ de l'horizontal.<br/>Le soleil est à $\\beta = 50°$ de l'horizontal.<br/>L'angle entre la normale et les rayons : $\\gamma = 60° - 50° = 10°$.<br/>*(Si le soleil était exactement dans l'axe de la normale, γ = 0° et l'absorption serait maximale.)*`,
      `$P_{\\text{cap}} = G \\times S \\times \\cos\\gamma = 850 \\times 2 \\times \\cos 10°$<br/>$= 1700 \\times 0{,}985 = 1674\\;\\text{W} \\approx 1{,}67\\;\\text{kW}$`,
      `$P_{\\text{th}} = \\eta \\times P_{\\text{cap}} = 0{,}72 \\times 1674 \\approx 1205\\;\\text{W} \\approx 1{,}2\\;\\text{kW}$`,
      `Pour le capteur horizontal : $\\cos(90° - 50°) = \\cos 40° = 0{,}766$<br/>$P_{\\text{horiz}} = 850 \\times 2 \\times 0{,}766 = 1302\\;\\text{W}$<br/>Le capteur incliné à 30° produit $1674 - 1302 = 372\\;\\text{W}$ de plus (+28,5%) dans ces conditions. L'orientation du capteur améliore significativement le rendement.`,
    ],
    finalAnswer: 'Puissance thermique produite : $P_{\\text{th}} \\approx 1{,}2\\;\\text{kW}$. Le capteur incliné est 28,5 % plus performant que le capteur horizontal dans ces conditions.',
  },

  evaluation: {
    title: 'Évaluation — Trigonométrie',
    duration: '25 min',
    questions: [
      {
        q: 'Un bras de robot hydraulique exerce une force de $F = 1200\\;\\text{N}$ à $\\theta = 25°$ de la verticale. Calculez la composante horizontale de cette force.',
        answer: '$F_h = F \\sin 25° = 1200 \\times 0{,}423 \\approx 507\\;\\text{N}$',
        points: 3,
      },
      {
        q: 'Un transformateur de distribution présente $R = 0{,}4\\;\\Omega$ et $X_L = 0{,}9\\;\\Omega$. Calculez l\'impédance $Z$ et l\'angle de déphasage $\\varphi$.',
        answer: '$Z = \\sqrt{0{,}4^2 + 0{,}9^2} = \\sqrt{0{,}16 + 0{,}81} = \\sqrt{0{,}97} \\approx 0{,}985\\;\\Omega$<br/>$\\varphi = \\arctan(0{,}9/0{,}4) = \\arctan(2{,}25) \\approx 66°$',
        points: 4,
      },
      {
        q: 'Une canalisation de gaz naturel suit un terrain avec une pente de 5 %. Sur 400 m de longueur horizontale, quelle est la différence de hauteur ? Quel est l\'angle avec l\'horizontal ?',
        answer: '$h = 400 \\times \\tan(\\arctan(0{,}05)) = 400 \\times 0{,}05 = 20\\;\\text{m}$<br/>$\\theta = \\arctan(0{,}05) \\approx 2{,}86°$',
        points: 3,
      },
      {
        q: 'Un signal de tension mesure $u(t) = 230\\sqrt{2}\\,\\sin(100\\pi t - \\pi/6)\\;\\text{V}$. Identifiez la valeur maximale, la fréquence et le déphasage à l\'origine en degrés.',
        answer: '$U_{\\max} = 230\\sqrt{2} \\approx 325\\;\\text{V}$<br/>$\\omega = 100\\pi$ rad/s → $f = \\omega/(2\\pi) = 50\\;\\text{Hz}$<br/>$\\varphi = -\\pi/6 = -30°$ (signal en retard de 30°)',
        points: 4,
      },
    ],
  },
});
// qualite_ok: 2026
