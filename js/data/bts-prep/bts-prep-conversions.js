window.MODULES.push({
  id: 'bts-prep-conversions',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '⚙️',
  title: 'Conversions d\'Unités Techniques',
  subtitle: 'Pression, débit, énergie, puissance, température — le vocabulaire du terrain',
  keywords: ['conversion', 'pression', 'débit', 'énergie', 'puissance', 'température', 'bar', 'kWh', 'litre', 'm3/h'],
  physics: 'En BTS technique, on jongle constamment entre les unités du fabricant (bar, l/h, °C, kW, tr/min) et les unités SI (Pa, m³/s, K, W, rad/s). Maîtriser ces conversions, c\'est éviter les erreurs de dimensionnement sur le terrain.',

  cours: {
    intro: `Les catalogues fabricants, les fiches techniques et les normes utilisent souvent des unités différentes de celles du cours.<br/><br/>Un thermicien travaille en kW et en kcal/h, un hydraulicien en bar et en l/min, un électricien en kWh et en kVA.<br/><br/>Ce module rassemble les conversions les plus courantes en BTS, classées par grandeur physique.`,

    definitions: [
      {
        term: 'Pression',
        def: `| De | Vers | Facteur |
|----|------|---------|
| 1 bar | Pa | $1 \\times 10^5$ |
| 1 bar | kPa | 100 |
| 1 atm | bar | 1,01325 |
| 1 atm | Pa | $1{,}013 \\times 10^5$ |
| 1 bar | mbar | 1000 |
| 1 psi | Pa | 6895 |
| 1 MPa | bar | 10 |<br/><br/>
Règle pratique : <strong>1 bar ≈ 10 m de colonne d'eau</strong> (pour la pression hydrostatique : $p = \\rho g h$)`,
      },
      {
        term: 'Débit',
        def: `| De | Vers | Facteur |
|----|------|---------|
| 1 m³/s | l/s | 1000 |
| 1 m³/h | l/min | $1000/60 \\approx 16{,}67$ |
| 1 m³/h | m³/s | $1/3600 \\approx 2{,}78 \\times 10^{-4}$ |
| 1 l/min | m³/h | $1/16{,}67 = 0{,}06$ |`,
      },
      {
        term: 'Énergie',
        def: `| De | Vers | Facteur |
|----|------|---------|
| 1 kWh | MJ | 3,6 |
| 1 kcal | J | 4186 |
| 1 kWh | kcal | 860 |
| 1 BTU | J | 1055 |
| 1 tep (tonne équivalent pétrole) | kWh | 11 630 |`,
      },
      {
        term: 'Puissance',
        def: `| De | Vers | Facteur |
|----|------|---------|
| 1 kW | kcal/h | 860 |
| 1 kcal/h | W | $1{,}163$ |
| 1 ch (cheval-vapeur) | W | 736 |
| 1 hp (horsepower) | W | 746 |`,
      },
      {
        term: 'Température',
        def: `| De | Vers | Formule |
|----|------|---------|
| °C | K | $T(K) = T(°C) + 273{,}15$ |
| °C | °F | $T(°F) = T(°C) \\times 1{,}8 + 32$ |
| °F | °C | $T(°C) = (T(°F) - 32) / 1{,}8$ |`,
      },
      {
        term: 'Vitesse de rotation',
        def: `| De | Vers | Formule |
|----|------|---------|
| tr/min (rpm) | rad/s | $\\omega = n \\times 2\\pi / 60$ |
| rad/s | tr/min | $n = \\omega \\times 60 / (2\\pi)$ |`,
      },
    ],

    method: {
      title: 'Méthode de conversion par facteur',
      steps: [
        'Toujours écrire la conversion comme une multiplication par "1" :<br/>$$Q(\\text{m}^3/\\text{h}) = Q(\\text{l/min}) \\times \\frac{1\\;\\text{m}^3}{1000\\;\\text{l}} \\times \\frac{60\\;\\text{min}}{1\\;\\text{h}} = Q(\\text{l/min}) \\times 0{,}06$$<br/>Cette méthode permet de ne jamais se tromper de sens (multiplier ou diviser).',
        '<strong>Règle du "passage par le SI"</strong> : quand on ne connaît pas la conversion directe, on passe toujours par l\'unité SI — Unité A → Unité SI → Unité B.',
      ],
    },

    example: {
      statement: 'Quatre exemples de conversions techniques issues de contextes industriels réels.',
      steps: [
        '<strong>Exemple 1 — Hydraulique (pompe Grundfos)</strong><br/><br/>Un catalogue indique un débit de $Q = 12\\;\\text{m}^3/\\text{h}$ et une HMT de $45\\;\\text{m}$.<br/>Conversion en l/min : $12\\;\\text{m}^3/\\text{h} \\times \\frac{1000\\;\\text{l}}{\\text{m}^3} \\times \\frac{1\\;\\text{h}}{60\\;\\text{min}} = 200\\;\\text{l/min}$<br/>Conversion HMT en bar : $p = \\rho g h = 1000 \\times 9{,}81 \\times 45 = 441\\,450\\;\\text{Pa} \\approx 4{,}4\\;\\text{bar}$',
        '<strong>Exemple 2 — Thermique (chaudière industrielle)</strong><br/><br/>Une chaudière délivre $Q = 250\\;\\text{kW}$. Exprimer en kcal/h :<br/>$250\\;\\text{kW} \\times 860\\;\\text{kcal/h par kW} = 215\\,000\\;\\text{kcal/h} = 215\\;\\text{Mcal/h}$',
        '<strong>Exemple 3 — Électrotechnique (moteur)</strong><br/><br/>Un moteur électrique tourne à $n = 1450\\;\\text{tr/min}$.<br/>$\\omega = 1450 \\times \\dfrac{2\\pi}{60} = 1450 \\times 0{,}1047 = 151{,}8\\;\\text{rad/s}$<br/><br/>Sa puissance utile sur l\'arbre est $P = 5{,}5\\;\\text{kW}$. Son couple moteur : $C = P / \\omega = 5500 / 151{,}8 = 36{,}2\\;\\text{N·m}$',
        '<strong>Exemple 4 — Climatisation (catalogue Daikin)</strong><br/><br/>Un groupe froid annonce une puissance frigorifique de $P_f = 28\\;\\text{kW}$ et un COP de 3,2.<br/>Puissance électrique absorbée : $P_{\\text{élec}} = P_f / \\text{COP} = 28 / 3{,}2 = 8{,}75\\;\\text{kW}$<br/>En chevaux-vapeur : $P = 8750 / 736 \\approx 11{,}9\\;\\text{ch}$',
      ],
      answer: 'La maîtrise des conversions d\'unités permet de passer sans erreur entre les données catalogue et les calculs en SI.',
    },

    formulas: [
      '<strong>bar → Pa</strong> : $1\\;\\text{bar} = 10^5\\;\\text{Pa}$',
      '<strong>m³/h → l/min</strong> : $Q_{\\text{l/min}} = Q_{\\text{m}^3/\\text{h}} \\times \\frac{1000}{60} \\approx 16{,}67 \\times Q$',
      '<strong>kWh → MJ</strong> : $1\\;\\text{kWh} = 3{,}6\\;\\text{MJ}$',
      '<strong>kW → kcal/h</strong> : $1\\;\\text{kW} = 860\\;\\text{kcal/h}$',
      '<strong>°C → K</strong> : $T(K) = T(°C) + 273{,}15$',
      '<strong>tr/min → rad/s</strong> : $\\omega = n \\times 2\\pi / 60 \\approx n / 9{,}55$',
      '<strong>HMT → pression</strong> : $p(\\text{Pa}) = \\rho g h \\quad (\\rho_{\\text{eau}} = 1000\\;\\text{kg/m}^3)$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Réglettes à double échelle',
      title: 'Deux réglettes graduées : pression et débit',
      description: 'Chaque réglette aligne verticalement une valeur en unité fabricant (au-dessus) et son équivalent en unité SI ou usuelle (en dessous) — la correspondance se lit à la même abscisse, comme sur une règle à calcul.',
      svg: `
        <svg viewBox="0 0 360 270" role="img" aria-labelledby="bts-conv-title bts-conv-desc">
          <title id="bts-conv-title">Reglettes de conversion pression et debit</title>
          <desc id="bts-conv-desc">Deux reglettes graduees superposees : bar vers kilopascal, et metre cube par heure vers litre par minute, avec un exemple de correspondance mis en evidence sur chacune.</desc>

          <text class="label" x="40" y="18">Pression : bar ↔ kPa</text>
          <line class="axis" x1="40" y1="55" x2="320" y2="55"></line>
          <line class="axis" x1="40" y1="95" x2="320" y2="95"></line>

          <line class="grid-line" x1="40" y1="50" x2="40" y2="60"></line>
          <line class="grid-line" x1="40" y1="90" x2="40" y2="100"></line>
          <line class="grid-line" x1="40" y1="60" x2="40" y2="90"></line>
          <text class="tick-label" x="40" y="42" text-anchor="middle">0</text>
          <text class="tick-label" x="40" y="112" text-anchor="middle">0</text>

          <line class="grid-line" x1="86.7" y1="50" x2="86.7" y2="60"></line>
          <line class="grid-line" x1="86.7" y1="90" x2="86.7" y2="100"></line>
          <line class="grid-line" x1="86.7" y1="60" x2="86.7" y2="90"></line>
          <text class="tick-label" x="86.7" y="42" text-anchor="middle">1</text>
          <text class="tick-label" x="86.7" y="112" text-anchor="middle">100</text>

          <line class="grid-line" x1="133.3" y1="50" x2="133.3" y2="60"></line>
          <line class="grid-line" x1="133.3" y1="90" x2="133.3" y2="100"></line>
          <line class="grid-line" x1="133.3" y1="60" x2="133.3" y2="90"></line>
          <text class="tick-label" x="133.3" y="42" text-anchor="middle">2</text>
          <text class="tick-label" x="133.3" y="112" text-anchor="middle">200</text>

          <line class="grid-line" x1="180" y1="50" x2="180" y2="60"></line>
          <line class="grid-line" x1="180" y1="90" x2="180" y2="100"></line>
          <line class="grid-line" x1="180" y1="60" x2="180" y2="90"></line>
          <text class="tick-label" x="180" y="42" text-anchor="middle">3</text>
          <text class="tick-label" x="180" y="112" text-anchor="middle">300</text>
          <text class="annotation-label" x="180" y="78" text-anchor="middle">× 100</text>

          <line class="grid-line" x1="226.7" y1="50" x2="226.7" y2="60"></line>
          <line class="grid-line" x1="226.7" y1="90" x2="226.7" y2="100"></line>
          <line class="grid-line" x1="226.7" y1="60" x2="226.7" y2="90"></line>
          <text class="tick-label" x="226.7" y="42" text-anchor="middle">4</text>
          <text class="tick-label" x="226.7" y="112" text-anchor="middle">400</text>

          <line class="grid-line" x1="273.3" y1="50" x2="273.3" y2="60"></line>
          <line class="grid-line" x1="273.3" y1="90" x2="273.3" y2="100"></line>
          <line class="grid-line" x1="273.3" y1="60" x2="273.3" y2="90"></line>
          <text class="tick-label" x="273.3" y="42" text-anchor="middle">5</text>
          <text class="tick-label" x="273.3" y="112" text-anchor="middle">500</text>

          <line class="grid-line" x1="320" y1="50" x2="320" y2="60"></line>
          <line class="grid-line" x1="320" y1="90" x2="320" y2="100"></line>
          <line class="guide-line" x1="320" y1="60" x2="320" y2="90"></line>
          <circle class="plot-point" cx="320" cy="55" r="4"></circle>
          <circle class="plot-point-alt" cx="320" cy="95" r="4"></circle>
          <text class="tick-label" x="320" y="42" text-anchor="middle">6</text>
          <text class="tick-label" x="320" y="112" text-anchor="middle">600</text>
          <text class="annotation-label" x="316" y="128" text-anchor="end">6 bar = 600 kPa</text>

          <text class="label-soft" x="4" y="58">bar</text>
          <text class="label-soft" x="2" y="98">kPa</text>

          <text class="label" x="40" y="160">Débit : m³/h ↔ L/min</text>
          <line class="axis" x1="40" y1="190" x2="320" y2="190"></line>
          <line class="axis" x1="40" y1="225" x2="320" y2="225"></line>

          <line class="grid-line" x1="40" y1="185" x2="40" y2="195"></line>
          <line class="grid-line" x1="40" y1="220" x2="40" y2="230"></line>
          <line class="grid-line" x1="40" y1="195" x2="40" y2="220"></line>
          <text class="tick-label" x="40" y="177" text-anchor="middle">0</text>
          <text class="tick-label" x="40" y="242" text-anchor="middle">0</text>

          <line class="grid-line" x1="86.7" y1="185" x2="86.7" y2="195"></line>
          <line class="grid-line" x1="86.7" y1="220" x2="86.7" y2="230"></line>
          <line class="grid-line" x1="86.7" y1="195" x2="86.7" y2="220"></line>
          <text class="tick-label" x="86.7" y="177" text-anchor="middle">2</text>
          <text class="tick-label" x="86.7" y="242" text-anchor="middle">33</text>
          <text class="annotation-label" x="95" y="208" text-anchor="middle">× 16,67</text>

          <line class="grid-line" x1="133.3" y1="185" x2="133.3" y2="195"></line>
          <line class="grid-line" x1="133.3" y1="220" x2="133.3" y2="230"></line>
          <line class="grid-line" x1="133.3" y1="195" x2="133.3" y2="220"></line>
          <text class="tick-label" x="133.3" y="177" text-anchor="middle">4</text>
          <text class="tick-label" x="133.3" y="242" text-anchor="middle">67</text>

          <line class="grid-line" x1="180" y1="185" x2="180" y2="195"></line>
          <line class="grid-line" x1="180" y1="220" x2="180" y2="230"></line>
          <line class="guide-line" x1="180" y1="195" x2="180" y2="220"></line>
          <circle class="plot-point" cx="180" cy="190" r="4"></circle>
          <circle class="plot-point-alt" cx="180" cy="225" r="4"></circle>
          <text class="tick-label" x="180" y="177" text-anchor="middle">6</text>
          <text class="tick-label" x="180" y="242" text-anchor="middle">100</text>
          <text class="annotation-label" x="180" y="258" text-anchor="middle">6 m³/h = 100 L/min</text>

          <line class="grid-line" x1="226.7" y1="185" x2="226.7" y2="195"></line>
          <line class="grid-line" x1="226.7" y1="220" x2="226.7" y2="230"></line>
          <line class="grid-line" x1="226.7" y1="195" x2="226.7" y2="220"></line>
          <text class="tick-label" x="226.7" y="177" text-anchor="middle">8</text>
          <text class="tick-label" x="226.7" y="242" text-anchor="middle">133</text>

          <line class="grid-line" x1="273.3" y1="185" x2="273.3" y2="195"></line>
          <line class="grid-line" x1="273.3" y1="220" x2="273.3" y2="230"></line>
          <line class="grid-line" x1="273.3" y1="195" x2="273.3" y2="220"></line>
          <text class="tick-label" x="273.3" y="177" text-anchor="middle">10</text>
          <text class="tick-label" x="273.3" y="242" text-anchor="middle">167</text>

          <line class="grid-line" x1="320" y1="185" x2="320" y2="195"></line>
          <line class="grid-line" x1="320" y1="220" x2="320" y2="230"></line>
          <line class="grid-line" x1="320" y1="195" x2="320" y2="220"></line>
          <text class="tick-label" x="320" y="177" text-anchor="middle">12</text>
          <text class="tick-label" x="320" y="242" text-anchor="middle">200</text>

          <text class="label-soft" x="2" y="193">m³/h</text>
          <text class="label-soft" x="0" y="228">L/min</text>
        </svg>
      `,
      notes: [
        'Réglette du haut : <strong>1 bar = 100 kPa</strong> (soit $1 \\times 10^5\\;\\text{Pa}$). Le facteur ×100 est constant sur toute la réglette : 3 bar → 300 kPa, 6 bar → 600 kPa.',
        'Réglette du bas : <strong>1 m³/h ≈ 16,67 L/min</strong> (car $1000\\;\\text{l} / 60\\;\\text{min}$). Vérification : 12 m³/h → 200 L/min, exactement la valeur citée dans l\'exemple 1 (pompe Grundfos) du cours.',
        'Les deux correspondances surlignées (6 bar/600 kPa et 6 m³/h/100 L/min) sont aussi les valeurs utilisées dans le quiz — elles servent de repères vérifiés indépendamment avant traçage.'
      ],
      reading: 'Sur une réglette double échelle, deux valeurs alignées à la même abscisse sont équivalentes : c\'est le principe d\'une règle à calcul appliqué à deux unités.',
      caption: 'Repères recalculés indépendamment avant traçage : 1 bar = 100 kPa (facteur exact ×100) et 1 m³/h = 1000/60 ≈ 16,67 L/min (soit 6 m³/h = 100 L/min, 12 m³/h = 200 L/min).'
    },

    recap: [
      '1 bar = 10⁵ Pa = 100 kPa — 1 MPa = 10 bar',
      '1 m³/h = 16,67 l/min — 1 l/min = 0,06 m³/h',
      '1 kWh = 3,6 MJ — 1 kW = 860 kcal/h',
      '°C → K : ajouter 273,15',
      'tr/min → rad/s : multiplier par 2π/60 ≈ 0,1047',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>l/min vs m³/h</strong> : ne pas confondre les débits volumiques exprimés dans des unités différentes. Utiliser systématiquement le facteur 0,06 (m³/h = l/min × 0,06).<br/><br/>
• <strong>kW vs kVA</strong> : la puissance active (kW) et la puissance apparente (kVA) ne sont pas identiques. $P(\\text{kW}) = S(\\text{kVA}) \\times \\cos\\varphi$.<br/><br/>
• <strong>pression relative vs absolue</strong> : les manomètres mesurent la pression relative (par rapport à l'atmosphère). Pression absolue = pression relative + 1,013 bar.<br/><br/>
• <strong>température : différence vs valeur</strong> : $\\Delta T = 10°\\text{C} = 10\\;\\text{K}$ (les différences se convertissent directement), mais $T = 10°\\text{C} = 283{,}15\\;\\text{K}$ (la valeur absolue nécessite +273,15).`,
  },

  quiz: [
    {
      q: 'Un débit de $6\\;\\text{m}^3/\\text{h}$ vaut en l/min :',
      options: ['6 l/min', '100 l/min', '360 l/min', '10 l/min'],
      answer: 1,
      correction: '6 m³/h × (1000 l/m³) × (1 h/60 min) = 6000/60 = 100 l/min. Facteur : 1 m³/h = 16,67 l/min.',
    },
    {
      q: 'La pression de 6 bar correspond à :',
      options: ['6 Pa', '600 kPa', '60 kPa', '6 MPa'],
      answer: 1,
      correction: '6 bar = 6 × 10⁵ Pa = 600 kPa (soit 0,6 MPa).',
    },
    {
      q: 'Un moteur tourne à $n = 3000\\;\\text{tr/min}$. Sa vitesse angulaire en rad/s est :',
      options: ['$3000\\;\\text{rad/s}$', '$100\\pi \\approx 314\\;\\text{rad/s}$', '$50\\pi \\approx 157\\;\\text{rad/s}$', '$3000/2\\pi \\approx 477\\;\\text{rad/s}$'],
      answer: 1,
      correction: 'ω = 3000 × 2π/60 = 6000π/60 = 100π ≈ 314,2 rad/s.',
    },
    {
      q: 'Une température de $-20°\\text{C}$ en kelvin vaut :',
      options: ['253,15 K', '293,15 K', '-253,15 K', '20 K'],
      answer: 0,
      correction: 'T(K) = -20 + 273,15 = 253,15 K.',
    },
    {
      q: 'Un chauffe-eau électrique consomme $P = 2\\;\\text{kW}$ pendant $t = 30\\;\\text{min}$. L\'énergie consommée en kWh est :',
      options: ['60 kWh', '1 kWh', '3600 kWh', '0,5 kWh'],
      answer: 1,
      correction: 'W = P × t = 2 kW × (30/60) h = 2 × 0,5 = 1 kWh.',
    },
    {
      q: 'Une installation frigorifique a une puissance frigorifique de $P_f = 50\\;\\text{kW}$ et un COP = 4. Quelle est la puissance électrique absorbée ?',
      options: ['200 kW', '54 kW', '12,5 kW', '46 kW'],
      answer: 2,
      correction: 'COP = P_f / P_élec ⟹ P_élec = P_f / COP = 50 / 4 = 12,5 kW.',
    },
    {
      q: 'La HMT d\'une pompe est de 30 m. La pression correspondante (eau, g = 9,81 m/s²) est :',
      options: ['30 Pa', '3 bar', '2,94 bar', '30 bar'],
      answer: 2,
      correction: 'p = ρgh = 1000 × 9,81 × 30 = 294 300 Pa ≈ 2,94 bar. Approximation courante : 10 m de colonne d\'eau ≈ 1 bar.',
    },
    {
      q: 'Une puissance de $P = 100\\;\\text{kW}$ en kcal/h vaut :',
      options: ['100 kcal/h', '860 kcal/h', '86 000 kcal/h', '1,163 kcal/h'],
      answer: 2,
      correction: '1 kW = 860 kcal/h ⟹ 100 kW = 100 × 860 = 86 000 kcal/h.',
    },
    {
      q: 'Un débit de $Q = 500\\;\\text{l/min}$ vaut en m³/h :',
      options: ['500 m³/h', '8,33 m³/h', '30 m³/h', '8333 m³/h'],
      answer: 2,
      correction: '500 l/min × (1 m³/1000 l) × (60 min/1 h) = 500 × 60/1000 = 30 m³/h. Facteur : Q(m³/h) = Q(l/min) × 0,06.',
    },
    {
      q: 'Une différence de température $\\Delta T = 15°\\text{C}$ vaut en kelvin :',
      options: ['288,15 K', '15 K', '-258,15 K', '0 K'],
      answer: 1,
      correction: 'Pour une DIFFÉRENCE de température, 1°C = 1 K. Donc ΔT = 15°C = 15 K. (Attention : c\'est différent de la valeur absolue T = 15°C = 288,15 K.)',
    },
    {
      q: 'Un réacteur chimique fonctionne sous une pression de $1{,}5\\;\\text{MPa}$. Cela correspond à :',
      options: ['15 bar', '1,5 bar', '150 bar', '0,15 bar'],
      answer: 0,
      correction: '1 MPa = 10 bar (facteur du tableau des pressions), donc 1,5 MPa = 15 bar.',
    },
    {
      q: 'Une pompe doseuse de réactifs délivre $Q = 3\\;\\text{l/min}$. Ce débit vaut en m³/h :',
      options: ['0,18 m³/h', '1,8 m³/h', '18 m³/h', '0,018 m³/h'],
      answer: 0,
      correction: 'Q(m³/h) = Q(l/min) × 0,06 = 3 × 0,06 = 0,18 m³/h.',
    },
    {
      q: 'La résistance chauffante d\'un bain de traitement chimique consomme $2\\;\\text{kWh}$. Exprimée en kcal, cette énergie vaut :',
      options: ['1720 kcal', '172 kcal', '8,6 kcal', '17 200 kcal'],
      answer: 0,
      correction: '1 kWh = 860 kcal, donc 2 kWh = 2 × 860 = 1720 kcal.',
    },
    {
      q: 'La plaque signalétique d\'un compresseur (norme anglo-saxonne) indique $50\\;\\text{ch}$. En kW, cette puissance vaut environ :',
      options: ['36,8 kW', '50 kW', '68 kW', '3,68 kW'],
      answer: 0,
      correction: '1 ch = 736 W, donc 50 ch = 50 × 736 = 36 800 W ≈ 36,8 kW.',
    },
    {
      q: 'L\'azote liquide utilisé pour un essai en chimie est à $-196°\\text{C}$. En kelvin, cette température vaut :',
      options: ['77,15 K', '196 K', '469,15 K', '-469,15 K'],
      answer: 0,
      correction: 'T(K) = -196 + 273,15 = 77,15 K.',
    },
    {
      q: 'L\'agitateur d\'un réacteur chimique tourne à $n = 120\\;\\text{tr/min}$. Sa vitesse angulaire est :',
      options: ['$4\\pi \\approx 12{,}57\\;\\text{rad/s}$', '$120\\;\\text{rad/s}$', '$4\\;\\text{rad/s}$', '$753{,}6\\;\\text{rad/s}$'],
      answer: 0,
      correction: 'ω = 120 × 2π/60 = 4π ≈ 12,57 rad/s.',
    },
    {
      q: 'Un manomètre installé sur une canalisation indique une pression relative de 3 bar. La pression absolue est :',
      options: ['4,013 bar', '3 bar', '1,987 bar', '3,013 bar'],
      answer: 0,
      correction: 'Pression absolue = pression relative + pression atmosphérique = 3 + 1,013 = 4,013 bar.',
    },
    {
      q: 'Un moteur a une puissance apparente $S = 10\\;\\text{kVA}$ avec $\\cos\\varphi = 0{,}8$. Sa puissance active est :',
      options: ['8 kW', '12,5 kW', '10 kW', '1,25 kW'],
      answer: 0,
      correction: 'P(kW) = S(kVA) × cosφ = 10 × 0,8 = 8 kW.',
    },
    {
      q: 'Un débit de $Q = 0{,}05\\;\\text{m}^3/\\text{s}$ vaut en l/s :',
      options: ['50 l/s', '5 l/s', '0,05 l/s', '500 l/s'],
      answer: 0,
      correction: '1 m³/s = 1000 l/s, donc 0,05 m³/s = 0,05 × 1000 = 50 l/s.',
    },
    {
      q: 'Un radiateur électrique importé annonce $10\\,000\\;\\text{BTU}$. En joules, cette énergie vaut :',
      options: ['10,55 MJ', '1,055 MJ', '105,5 MJ', '10 550 J'],
      answer: 0,
      correction: '1 BTU = 1055 J, donc 10 000 BTU = 10 000 × 1055 = 10 550 000 J = 10,55 MJ.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['pression_hmt', 'debit_m3h_lmin', 'vitesse_angulaire', 'puissance_thermique', 'temperature_fahrenheit', 'puissance_ch_kw']);

      if (type === 'pression_hmt') {
        const h = pick([10, 15, 20, 25, 30, 40, 50]);
        const rho = 1000;
        const g = 9.81;
        const p_Pa = rho * g * h;
        const p_bar = p_Pa / 1e5;
        const context = pick(['pompe de circulation', 'groupe hydrophore', 'pompe de relevage']);
        return {
          statement: `Une ${context} a une HMT (Hauteur Manométrique Totale) de $h = ${h}\\;\\text{m}$.<br/><br/>Calculez la pression correspondante en bar (eau, $\\rho = 1000\\;\\text{kg/m}^3$, $g = 9{,}81\\;\\text{m/s}^2$). Arrondir à 0,01 bar.`,
          answer: parseFloat(p_bar.toFixed(2)),
          tolerance: 0.01,
          unit: 'bar',
          hint: `$p = \\rho g h$ en Pa, puis diviser par $10^5$.`,
          solution: `$p = 1000 \\times 9{,}81 \\times ${h} = ${p_Pa.toFixed(0)}\\;\\text{Pa} = ${fr(p_bar, 2)}\\;\\text{bar}$`,
        };
      }

      if (type === 'debit_m3h_lmin') {
        const Q_m3h = pick([1.8, 2.4, 3, 4.8, 6, 7.2, 9, 12, 15, 18, 24]);
        const Q_lmin = Q_m3h * 1000 / 60;
        const context = pick(['installation sanitaire d\'un hôtel', 'réseau de sprinklers', 'circuit de refroidissement', 'réseau d\'irrigation']);
        return {
          statement: `Le débit de conception d'un ${context} est de $Q = ${fr(Q_m3h)}\\;\\text{m}^3/\\text{h}$.<br/><br/>Exprimer ce débit en l/min (arrondir à 0,1 l/min).`,
          answer: parseFloat(Q_lmin.toFixed(1)),
          tolerance: 0.1,
          unit: 'l/min',
          hint: `Multiplier par 1000 (m³→l) et diviser par 60 (h→min).`,
          solution: `$Q = ${fr(Q_m3h)} \\times \\dfrac{1000}{60} = ${fr(Q_lmin, 1)}\\;\\text{l/min}$`,
        };
      }

      if (type === 'vitesse_angulaire') {
        const n = pick([750, 1000, 1450, 1500, 2900, 3000]);
        const omega = n * 2 * Math.PI / 60;
        const context = pick(['moteur asynchrone triphasé', 'moteur de pompe', 'compresseur frigorifique']);
        return {
          statement: `Un ${context} tourne à $n = ${n}\\;\\text{tr/min}$.<br/><br/>Calculez la vitesse angulaire $\\omega$ en rad/s (arrondir à 0,1 rad/s).`,
          answer: parseFloat(omega.toFixed(1)),
          tolerance: 0.2,
          unit: 'rad/s',
          hint: `$\\omega = n \\times \\dfrac{2\\pi}{60}$`,
          solution: `$\\omega = ${n} \\times \\dfrac{2\\pi}{60} = ${n} \\times 0{,}1047 = ${fr(omega, 1)}\\;\\text{rad/s}$`,
        };
      }

      if (type === 'puissance_thermique') {
        const P_kW = pick([10, 15, 20, 25, 30, 40, 50]);
        const P_kcalh = P_kW * 860;
        const context = pick(['chaudière murale industrielle', 'centrale de traitement d\'air', 'plancher chauffant basse température']);
        return {
          statement: `Une ${context} délivre une puissance thermique de $P = ${P_kW}\\;\\text{kW}$.<br/><br/>Exprimer cette puissance en kcal/h.`,
          answer: P_kcalh,
          tolerance: 0,
          unit: 'kcal/h',
          hint: `$1\\;\\text{kW} = 860\\;\\text{kcal/h}$.`,
          solution: `$P = ${P_kW} \\times 860 = ${P_kcalh}\\;\\text{kcal/h}$`,
        };
      }

      if (type === 'temperature_fahrenheit') {
        const T_C = pick([20, 25, 30, 40, 50, 60, 80, 100]);
        const T_F = T_C * 1.8 + 32;
        const context = pick(['four de traitement thermique', 'étuve de séchage industrielle', 'chambre climatique d\'essais']);
        return {
          statement: `Un ${context} affiche une consigne de température de $T = ${T_C}°\\text{C}$.<br/><br/>Convertir cette température en degrés Fahrenheit (°F).`,
          answer: T_F,
          tolerance: 0,
          unit: '°F',
          hint: `$T(°F) = T(°C) \\times 1{,}8 + 32$`,
          solution: `$T = ${T_C} \\times 1{,}8 + 32 = ${T_C * 1.8} + 32 = ${T_F}°\\text{F}$`,
        };
      }

      // puissance_ch_kw
      const P_ch = pick([50, 75, 100, 150, 200, 300]);
      const P_kW_ch = P_ch * 736 / 1000;
      const context = pick(['moteur diesel de groupe électrogène', 'moteur thermique de compresseur mobile', 'moteur de tractopelle']);
      return {
        statement: `Un ${context} développe une puissance de $P = ${P_ch}\\;\\text{ch}$ (chevaux-vapeur).<br/><br/>Convertir cette puissance en kW (arrondir à 0,1 kW).`,
        answer: parseFloat(P_kW_ch.toFixed(1)),
        tolerance: 0.1,
        unit: 'kW',
        hint: `$1\\;\\text{ch} = 736\\;\\text{W}$.`,
        solution: `$P = ${P_ch} \\times 736 = ${P_ch * 736}\\;\\text{W} = ${fr(P_kW_ch, 1)}\\;\\text{kW}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en maintenance effectue la mise en service d'une installation de climatisation d'un local industriel. Les données du catalogue du groupe froid (marque Daikin) sont :<br/><br/>
• Puissance frigorifique : $P_f = 35\\;\\text{kW}$<br/>
• COP nominal : 3,8<br/>
• Débit d'air traité : $Q_a = 5400\\;\\text{m}^3/\\text{h}$<br/>
• Température d'air soufflé : $T_s = 14°\\text{C}$<br/>
• Température d'air repris : $T_r = 26°\\text{C}$<br/>
• Vitesse de rotation du compresseur : $n = 2900\\;\\text{tr/min}$`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  Air repris (26°C)
       ↓
  ┌──────────┐
  │  Batterie│ ← P_f = 35 kW
  │  froide  │
  └──────────┘
       ↓
  Air soufflé (14°C)
</pre>
</div>`,
    tasks: [
      'Calculer la puissance électrique absorbée par le compresseur $P_{\\text{élec}}$ en kW.',
      'Convertir le débit d\'air en m³/s, puis calculer la puissance thermique extraite de l\'air $P_f = \\dot{m}_a \\times c_{pa} \\times \\Delta T$ (avec $\\rho_{\\text{air}} = 1{,}2\\;\\text{kg/m}^3$, $c_{pa} = 1006\\;\\text{J/(kg·K)}$). Comparer au catalogue.',
      'Convertir la température d\'air soufflé en kelvin.',
      'Calculer la vitesse angulaire du compresseur en rad/s.',
    ],
    solutions: [
      `$P_{\\text{élec}} = \\dfrac{P_f}{\\text{COP}} = \\dfrac{35}{3{,}8} \\approx 9{,}21\\;\\text{kW}$`,
      `$Q_a = 5400 / 3600 = 1{,}5\\;\\text{m}^3/\\text{s}$<br/>$\\dot{m}_a = \\rho Q = 1{,}2 \\times 1{,}5 = 1{,}8\\;\\text{kg/s}$<br/>$\\Delta T = 26 - 14 = 12\\;\\text{K}$<br/>$P_f = 1{,}8 \\times 1006 \\times 12 = 21\\,729\\;\\text{W} \\approx 21{,}7\\;\\text{kW}$<br/>Écart avec catalogue : 35 - 21,7 = 13,3 kW. Une partie de la puissance frigorifique compense les apports de chaleur (murs, personnes, équipements), l'air traité ne représente qu'une partie de la charge totale.`,
      `$T_s(K) = 14 + 273{,}15 = 287{,}15\\;\\text{K}$`,
      `$\\omega = 2900 \\times \\dfrac{2\\pi}{60} = 2900 \\times 0{,}1047 \\approx 303{,}7\\;\\text{rad/s}$`,
    ],
    finalAnswer: 'Puissance électrique : 9,2 kW. Débit en m³/s : 1,5. Température soufflée : 287,15 K. Vitesse angulaire : 303,7 rad/s.',
  },

  evaluation: {
    title: 'Évaluation — Conversions Techniques',
    duration: '20 min',
    questions: [
      {
        q: 'Un réseau de distribution d\'eau a une pression de 4,5 bar. Exprimer en Pa, kPa et MPa.',
        answer: '$4{,}5\\;\\text{bar} = 4{,}5 \\times 10^5\\;\\text{Pa} = 450\\;\\text{kPa} = 0{,}45\\;\\text{MPa}$',
        points: 2,
      },
      {
        q: 'Un ventilateur de CTA (centrale de traitement d\'air) souffle $Q = 8000\\;\\text{m}^3/\\text{h}$. Convertir en m³/s et en l/min.',
        answer: '$Q = 8000 / 3600 \\approx 2{,}22\\;\\text{m}^3/\\text{s}$<br/>$Q = 8000 \\times 1000/60 \\approx 133\\,333\\;\\text{l/min}$',
        points: 2,
      },
      {
        q: 'Un moteur triphasé de $P = 7{,}5\\;\\text{kW}$ tourne à $n = 1450\\;\\text{tr/min}$. Calculer la vitesse angulaire $\\omega$ et le couple sur l\'arbre $C = P/\\omega$.',
        answer: '$\\omega = 1450 \\times 2\\pi/60 \\approx 151{,}8\\;\\text{rad/s}$<br/>$C = 7500 / 151{,}8 \\approx 49{,}4\\;\\text{N·m}$',
        points: 4,
      },
      {
        q: 'Un climatiseur consomme $P_{\\text{élec}} = 2\\;\\text{kW}$ et produit $P_f = 7\\;\\text{kW}$ de froid. Calculer le COP et exprimer $P_f$ en kcal/h.',
        answer: '$\\text{COP} = 7/2 = 3{,}5$<br/>$P_f = 7\\;\\text{kW} \\times 860 = 6020\\;\\text{kcal/h}$',
        points: 3,
      },
    ],
  },
});
