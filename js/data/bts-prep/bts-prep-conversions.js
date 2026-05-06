window.MODULES.push({
  id: 'bts-prep-conversions',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '⚙️',
  title: 'Conversions d\'Unités Techniques',
  subtitle: 'Pression, débit, énergie, puissance, température — le vocabulaire du terrain',
  keywords: ['conversion', 'pression', 'débit', 'énergie', 'puissance', 'température', 'bar', 'kWh', 'litre', 'm3/h'],
  physics: 'En BTS technique, on jongle constamment entre les unités du fabricant (bar, l/h, °C, kW, tr/min) et les unités SI (Pa, m³/s, K, W, rad/s). Maîtriser ces conversions, c\'est éviter les erreurs de dimensionnement sur le terrain.',

  cours: {
    intro: `Les catalogues fabricants, les fiches techniques et les normes utilisent souvent des unités différentes de celles du cours. Un thermicien travaille en kW et en kcal/h, un hydraulicien en bar et en l/min, un électricien en kWh et en kVA. Ce module rassemble les conversions les plus courantes en BTS, classées par grandeur physique.`,

    definitions: [
      { term: 'Pression', def: '1 bar = $10^5$ Pa = 100 kPa — 1 MPa = 10 bar<br/>1 atm = $1{,}013 \\times 10^5$ Pa ≈ $1{,}013$ bar — 1 psi = 6 895 Pa<br/>Règle pratique : <strong>1 bar ≈ 10 m de colonne d\'eau</strong> ($p = \\rho g h$)' },
      { term: 'Débit', def: '1 m³/h = $16{,}67$ l/min — 1 l/min = $0{,}06$ m³/h<br/>1 m³/h = $2{,}78 \\times 10^{-4}$ m³/s — 1 m³/s = 1 000 l/s' },
      { term: 'Énergie', def: '1 kWh = $3{,}6$ MJ — 1 kcal = 4 186 J<br/>1 kWh = 860 kcal — 1 BTU = 1 055 J — 1 tep = 11 630 kWh' },
      { term: 'Puissance', def: '1 kW = 860 kcal/h — 1 kcal/h = $1{,}163$ W<br/>1 ch (cheval-vapeur) = 736 W — 1 hp (horsepower) = 746 W' },
      { term: 'Température', def: '$T(\\text{K}) = T(°\\text{C}) + 273{,}15$<br/>$T(°\\text{F}) = T(°\\text{C}) \\times 1{,}8 + 32$ — $T(°\\text{C}) = (T(°\\text{F}) - 32) / 1{,}8$' },
      { term: 'Vitesse de rotation', def: 'tr/min → rad/s : $\\omega = n \\times 2\\pi / 60$<br/>rad/s → tr/min : $n = \\omega \\times 60 / (2\\pi)$' },
    ],

    method: {
      title: 'Méthode de conversion par facteur',
      steps: [
        'Écrire la conversion comme une multiplication par "1" : $Q(\\text{m}^3/\\text{h}) = Q(\\text{l/min}) \\times \\dfrac{1\\;\\text{m}^3}{1000\\;\\text{l}} \\times \\dfrac{60\\;\\text{min}}{1\\;\\text{h}} = Q(\\text{l/min}) \\times 0{,}06$',
        'Cette méthode garantit de ne jamais se tromper de sens (multiplier ou diviser).',
        '<strong>Règle du passage par le SI</strong> : quand la conversion directe est inconnue, passer par l\'unité SI : Unité A → SI → Unité B.',
      ],
    },

    example: {
      statement: 'Quatre conversions typiques du terrain : hydraulique, thermique, électrotechnique, climatisation.',
      steps: [
        '<strong>Hydraulique (pompe Grundfos)</strong><br/>Débit $Q = 12\\;\\text{m}^3/\\text{h}$ → l/min : $12 \\times 1000/60 = 200\\;\\text{l/min}$<br/>HMT = 45 m → bar : $p = 1000 \\times 9{,}81 \\times 45 = 441\\,450\\;\\text{Pa} \\approx 4{,}4\\;\\text{bar}$',
        '<strong>Thermique (chaudière industrielle)</strong><br/>$P = 250\\;\\text{kW}$ → kcal/h : $250 \\times 860 = 215\\,000\\;\\text{kcal/h} = 215\\;\\text{Mcal/h}$',
        '<strong>Électrotechnique (moteur)</strong><br/>$n = 1450\\;\\text{tr/min}$ → rad/s : $\\omega = 1450 \\times 2\\pi/60 = 151{,}8\\;\\text{rad/s}$<br/>Couple : $C = P/\\omega = 5500/151{,}8 = 36{,}2\\;\\text{N·m}$',
        '<strong>Climatisation (catalogue Daikin)</strong><br/>$P_f = 28\\;\\text{kW}$, COP = $3{,}2$ → $P_{\\text{élec}} = 28/3{,}2 = 8{,}75\\;\\text{kW} \\approx 11{,}9\\;\\text{ch}$',
      ],
      answer: 'Méthode universelle : multiplier par le facteur de conversion écrit comme une fraction égale à 1. En cas de doute, passer par l\'unité SI.',
    },

    formulas: [
      '<strong>bar → Pa</strong> : $1\\;\\text{bar} = 10^5\\;\\text{Pa}$',
      '<strong>m³/h → l/min</strong> : $Q_{\\text{l/min}} = Q_{\\text{m}^3/\\text{h}} \\times \\dfrac{1000}{60} \\approx 16{,}67 \\times Q$',
      '<strong>kWh → MJ</strong> : $1\\;\\text{kWh} = 3{,}6\\;\\text{MJ}$',
      '<strong>kW → kcal/h</strong> : $1\\;\\text{kW} = 860\\;\\text{kcal/h}$',
      '<strong>°C → K</strong> : $T(K) = T(°C) + 273{,}15$',
      '<strong>tr/min → rad/s</strong> : $\\omega = n \\times 2\\pi / 60 \\approx n / 9{,}55$',
      '<strong>HMT → pression</strong> : $p(\\text{Pa}) = \\rho g h \\quad (\\rho_{\\text{eau}} = 1000\\;\\text{kg/m}^3)$',
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-size:0.88rem;line-height:2">
<div style="font-weight:700;margin-bottom:12px">Conversions terrain à mémoriser</div>
<div style="font-family:monospace;color:var(--text)">
  Pression   : 1 bar = 100 kPa = 10,2 mCE<br/>
  Débit      : 1 m³/h = 16,67 l/min<br/>
  Puissance  : 1 kW = 860 kcal/h = 1,36 ch<br/>
  Énergie    : 1 kWh = 3,6 MJ = 860 kcal<br/>
  Vitesse    : ÷ 3,6 pour km/h → m/s<br/>
  Rotation   : × 2π/60 pour tr/min → rad/s<br/>
  Temp.      : + 273,15 pour °C → K<br/>
</div>
</div>`,

    recap: [
      '1 bar = $10^5$ Pa = 100 kPa — 1 MPa = 10 bar.',
      '1 m³/h = $16{,}67$ l/min — 1 l/min = $0{,}06$ m³/h.',
      '1 kWh = $3{,}6$ MJ — 1 kW = 860 kcal/h.',
      '°C → K : ajouter $273{,}15$.',
      'tr/min → rad/s : multiplier par $2\\pi/60 \\approx 0{,}1047$.',
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
      options: ['6 Pa', '600 kPa', '0,6 MPa', '6 MPa'],
      answer: 1,
      correction: '6 bar = 6 × 10⁵ Pa = 600 kPa = 0,6 MPa. Les réponses B et C sont équivalentes.',
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
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['pression_hmt', 'debit_m3h_lmin', 'vitesse_angulaire', 'puissance_thermique']);

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
          solution: `$p = 1000 \\times 9{,}81 \\times ${h} = ${p_Pa.toFixed(0)}\\;\\text{Pa} = ${p_bar.toFixed(2)}\\;\\text{bar}$`,
        };
      }

      if (type === 'debit_m3h_lmin') {
        const Q_m3h = pick([1.8, 2.4, 3, 4.8, 6, 7.2, 9, 12, 15, 18, 24]);
        const Q_lmin = Q_m3h * 1000 / 60;
        const context = pick(['installation sanitaire d\'un hôtel', 'réseau de sprinklers', 'circuit de refroidissement', 'réseau d\'irrigation']);
        return {
          statement: `Le débit de conception d'un ${context} est de $Q = ${Q_m3h}\\;\\text{m}^3/\\text{h}$.<br/><br/>Exprimer ce débit en l/min (arrondir à 0,1 l/min).`,
          answer: parseFloat(Q_lmin.toFixed(1)),
          tolerance: 0.1,
          unit: 'l/min',
          hint: `Multiplier par 1000 (m³→l) et diviser par 60 (h→min).`,
          solution: `$Q = ${Q_m3h} \\times \\dfrac{1000}{60} = ${Q_lmin.toFixed(1)}\\;\\text{l/min}$`,
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
          solution: `$\\omega = ${n} \\times \\dfrac{2\\pi}{60} = ${n} \\times 0{,}1047 = ${omega.toFixed(1)}\\;\\text{rad/s}$`,
        };
      }

      // puissance_thermique
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
        answer: '$Q = 8000 / 3600 \\approx 2{,}22\\;\\text{m}^3/\\text{s}$<br/>$Q = 8000 \\times 1000/60 \\approx 133\\,333\\;\\text{l/min} \\approx 133{,}3\\;\\text{kl/min}$',
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
