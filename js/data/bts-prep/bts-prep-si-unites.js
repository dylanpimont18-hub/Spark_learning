window.MODULES.push({
  id: 'bts-prep-si-unites',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📏',
  title: 'Système International d\'Unités',
  subtitle: '7 grandeurs de base, unités dérivées, préfixes — la langue commune',
  keywords: ['SI', 'unités', 'grandeur de base', 'dérivée', 'préfixe', 'métrologie', 'newton', 'pascal', 'watt', 'joule'],
  physics: 'Le Système International d\'Unités (SI) est le cadre légal et scientifique universel. Maîtriser les unités, c\'est éviter les erreurs de dimensionnement qui peuvent conduire à des catastrophes : la sonde Mars Climate Orbiter a été perdue en 1999 à cause d\'une confusion entre Newton et livre-force.',

  cours: {
    intro: `Les unités ne sont pas une formalité administrative : elles portent la signification physique d'un résultat. Un résultat sans unité est inutilisable, voire dangereux. En BTS, vous travaillerez constamment avec des grandeurs de natures différentes (électrique, mécanique, thermique, chimique), et la cohérence des unités est le premier contrôle de validité de tout calcul.`,

    definitions: [
      {
        term: 'Les 7 grandeurs de base du SI',
        def: `Longueur (m) &nbsp;·&nbsp; Masse (kg) &nbsp;·&nbsp; Temps (s) &nbsp;·&nbsp; Intensité électrique (A) &nbsp;·&nbsp; Température thermodynamique (K) &nbsp;·&nbsp; Quantité de matière (mol) &nbsp;·&nbsp; Intensité lumineuse (cd)`,
      },
      {
        term: 'Unités dérivées essentielles',
        def: `Force → <strong>newton</strong> N = kg·m·s⁻² &nbsp;·&nbsp; Pression → <strong>pascal</strong> Pa = kg·m⁻¹·s⁻² &nbsp;·&nbsp; Énergie → <strong>joule</strong> J = kg·m²·s⁻²<br/>
Puissance → <strong>watt</strong> W = kg·m²·s⁻³ &nbsp;·&nbsp; Charge → <strong>coulomb</strong> C = A·s &nbsp;·&nbsp; Tension → <strong>volt</strong> V = kg·m²·s⁻³·A⁻¹<br/>
Résistance → <strong>ohm</strong> Ω = kg·m²·s⁻³·A⁻² &nbsp;·&nbsp; Fréquence → <strong>hertz</strong> Hz = s⁻¹`,
      },
      {
        term: 'Préfixes SI',
        def: `T (téra, $10^{12}$) &nbsp;·&nbsp; G (giga, $10^9$) &nbsp;·&nbsp; M (méga, $10^6$) &nbsp;·&nbsp; k (kilo, $10^3$)<br/>
m (milli, $10^{-3}$) &nbsp;·&nbsp; μ (micro, $10^{-6}$) &nbsp;·&nbsp; n (nano, $10^{-9}$) &nbsp;·&nbsp; p (pico, $10^{-12}$)<br/><br/>
<strong>Attention :</strong> m minuscule = milli ($10^{-3}$) ; M majuscule = méga ($10^6$). La casse est cruciale.`,
      },
    ],

    method: {
      title: 'Convertir une unité et vérifier la cohérence dimensionnelle',
      steps: [
        `<strong>Méthode universelle :</strong> multiplier par 1 sous forme de fraction d'unités.<br/>
Exemple : $72\;\\text{km/h} = 72 \\times \\dfrac{1000\;\\text{m}}{1\;\\text{km}} \\times \\dfrac{1\;\\text{h}}{3600\;\\text{s}} = 20\;\\text{m/s}$`,
        `<strong>Vérification dimensionnelle :</strong> toute équation physique doit être homogène (mêmes dimensions des deux côtés).<br/>
Exemple : $P = F \\times v$ → $[F \\times v] = \\text{N} \\times \\text{m/s} = \\text{kg·m}^2\\text{s}^{-3} = [\\text{W}]$ ✓`,
      ],
    },

    example: {
      statement: `Électrotechnique : vérifier que l'unité du watt est cohérente avec $P = U \\times I$`,
      steps: [
        '$[U \\times I] = \\text{V} \\times \\text{A} = \\text{W}$',
        'En unités de base : $\\text{V} = \\text{kg·m}^2\\text{s}^{-3}\\text{A}^{-1}$, donc $\\text{V·A} = \\text{kg·m}^2\\text{s}^{-3} = \\text{W}$ ✓',
        `<strong>Exemple 2 — BTP :</strong> pression $P = F/A$ → $[F/A] = \\text{N/m}^2 = \\text{Pa}$<br/>$6\;\\text{bar} = 6 \\times 10^5\;\\text{Pa} = 0{,}6\;\\text{MPa} = 600\;\\text{kPa}$`,
        `<strong>Exemple 3 — Maintenance :</strong> moteur $5{,}5\;\\text{kW}$ pendant $8\;\\text{h}$ → $W = 44\;\\text{kWh} = 44 \\times 3{,}6 \\times 10^6\;\\text{J} = 158{,}4\;\\text{MJ}$`,
        `<strong>Exemple 4 — Chimie :</strong> 180 g d'eau ($M = 18\;\\text{g/mol}$) → $n = 180/18 = 10\;\\text{mol}$`,
      ],
      answer: '$[U \\times I] = [P] = \\text{W} = \\text{kg·m}^2\\text{s}^{-3}$ ✓',
    },

    formulas: [
      '<strong>Pression</strong> : $P = F/A \\quad [\\text{Pa} = \\text{N/m}^2]$',
      '<strong>Puissance mécanique</strong> : $P = F \\times v \\quad [\\text{W} = \\text{N·m/s}]$',
      '<strong>Énergie</strong> : $W = P \\times t \\quad [\\text{J} = \\text{W·s}]$',
      '<strong>kWh → J</strong> : $1\\;\\text{kWh} = 3{,}6 \\times 10^6\\;\\text{J}$',
      '<strong>bar → Pa</strong> : $1\\;\\text{bar} = 10^5\\;\\text{Pa} = 100\\;\\text{kPa}$',
      '<strong>km/h → m/s</strong> : $\\times \\frac{1}{3{,}6}$',
      '<strong>Quantité de matière</strong> : $n = m/M \\quad [\\text{mol}]$',
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-family:monospace;font-size:0.85rem;line-height:1.9">
<div style="font-weight:700;margin-bottom:10px;font-family:sans-serif">Préfixes SI — mémorisation rapide</div>
<pre style="margin:0;color:var(--text)">
  10¹²  T  téra   │  Gros réseau électrique (TW)
  10⁹   G  giga   │  Fréquence processeur (GHz)
  10⁶   M  méga   │  Pression (MPa), fréquence (MHz)
  10³   k  kilo   │  Poids (kg), puissance (kW)
─────────────────────────────────────
  10⁻³  m  milli  │  Épaisseur (mm), courant (mA)
  10⁻⁶  μ  micro  │  Condensateur (μF), micron (μm)
  10⁻⁹  n  nano   │  Électronique (nm, nF)
  10⁻¹² p  pico   │  RF, capteurs précis (pF)
</pre>
</div>`,

    recap: [
      '7 grandeurs de base du SI : m, kg, s, A, K, mol, cd.',
      'Unités dérivées clés : N, Pa, J, W, V, Ω, Hz.',
      '1 kWh = 3,6 MJ — 1 bar = $10^5$ Pa — 1 km/h = 1/3,6 m/s.',
      'Vérifier toujours la cohérence dimensionnelle de vos équations.',
      'Préfixes : T($10^{12}$), G($10^9$), M($10^6$), k($10^3$), m($10^{-3}$), μ($10^{-6}$), n($10^{-9}$), p($10^{-12}$).',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>kg et g</strong> : l'unité SI de masse est le kilogramme (kg), pas le gramme. Une masse de 500 g = 0,5 kg dans les calculs.<br/><br/>
• <strong>°C vs K</strong> : la température thermodynamique est en kelvin (K). Pour les différences de température, 1°C = 1 K. Mais $T(K) = T(°C) + 273{,}15$.<br/><br/>
• <strong>kWh n'est pas une unité SI</strong> : l'énergie SI est le joule. Le kWh est une unité pratique commerciale. 1 kWh = 3,6 MJ.<br/><br/>
• <strong>bar et atm</strong> : pas des unités SI. 1 bar = 10⁵ Pa. 1 atm ≈ 1,013 bar. La pression SI est le pascal.<br/><br/>
• <strong>Milli vs Méga</strong> : m (minuscule) = milli (10⁻³), M (majuscule) = méga (10⁶). La casse est cruciale.`,
  },

  quiz: [
    {
      q: 'Quelle est l\'unité SI de la force ?',
      options: ['Joule (J)', 'Newton (N)', 'Pascal (Pa)', 'Watt (W)'],
      answer: 1,
      correction: 'N (newton) = kg·m·s⁻². Le joule est l\'énergie, le pascal est la pression, le watt est la puissance.',
    },
    {
      q: 'Un condensateur vaut $470\\;\\mu\\text{F}$. En farads, cela représente :',
      options: ['$470 \\times 10^3\\;\\text{F}$', '$470 \\times 10^{-6}\\;\\text{F}$', '$470 \\times 10^{-3}\\;\\text{F}$', '$4{,}7 \\times 10^{-4}\\;\\text{F}$'],
      answer: 1,
      correction: '1 μF = 10⁻⁶ F, donc 470 μF = 470 × 10⁻⁶ F = 4,70 × 10⁻⁴ F. Les réponses B et D sont équivalentes.',
    },
    {
      q: 'La puissance $P = U \\times I$ en unités SI donne :',
      options: ['Volts', 'Joules', 'Watts', 'Ampères·Ohms'],
      answer: 2,
      correction: 'V × A = W (watt). La puissance s\'exprime en watts dans le SI.',
    },
    {
      q: 'Convertir $72\\;\\text{km/h}$ en m/s :',
      options: ['72 m/s', '20 m/s', '25,9 m/s', '259 m/s'],
      answer: 1,
      correction: '72 km/h = 72 × 1000/3600 = 72/3,6 = 20 m/s. Règle pratique : diviser par 3,6.',
    },
    {
      q: 'Quelle est l\'unité SI de la pression ?',
      options: ['Bar', 'Pascal (Pa)', 'Atmosphère (atm)', 'N/cm²'],
      answer: 1,
      correction: 'Le pascal (Pa = N/m²) est l\'unité SI de la pression. Bar, atm, psi, N/cm² sont des unités hors-SI (utilisées en pratique mais non SI).',
    },
    {
      q: 'Un moteur consomme 5 kW pendant 2 heures. L\'énergie consommée en joules est :',
      options: ['$10\\;\\text{J}$', '$36\\;\\text{MJ}$', '$10\\;\\text{kWh}$', '$36\\;\\text{kJ}$'],
      answer: 1,
      correction: 'W = 5 kW × 2 h = 10 kWh = 10 × 3,6 × 10⁶ J = 36 MJ. (1 kWh = 3,6 MJ)',
    },
    {
      q: 'Parmi ces grandeurs, laquelle est une grandeur de BASE du SI (pas dérivée) ?',
      options: ['Volt (V)', 'Newton (N)', 'Ampère (A)', 'Watt (W)'],
      answer: 2,
      correction: 'L\'ampère (A) est une des 7 grandeurs de base du SI. Le volt, le newton et le watt sont des unités dérivées.',
    },
    {
      q: 'La résistivité d\'un matériau s\'exprime en Ω·m. En unités de base, l\'ohm vaut :',
      options: ['kg·m²·s⁻³·A⁻²', 'kg·m·s⁻²', 'kg·m²·s⁻²', 'A·s'],
      answer: 0,
      correction: 'Ω = V/A = (kg·m²·s⁻³·A⁻¹)/A = kg·m²·s⁻³·A⁻². La résistivité [Ω·m] = kg·m³·s⁻³·A⁻².',
    },
    {
      q: 'La pression d\'un réseau d\'eau potable est de 4 bar. En pascals :',
      options: ['4 Pa', '40 kPa', '400 kPa', '4 MPa'],
      answer: 2,
      correction: '4 bar = 4 × 10⁵ Pa = 400 000 Pa = 400 kPa = 0,4 MPa.',
    },
    {
      q: 'Le kelvin et le degré Celsius sont reliés par :',
      options: ['$T(K) = T(°C) \\times 1{,}8 + 32$', '$T(K) = T(°C) + 273{,}15$', '$T(K) = T(°C) - 273{,}15$', '$T(K) = T(°C) / 273{,}15$'],
      answer: 1,
      correction: 'T(K) = T(°C) + 273,15. Exemples : 0°C = 273,15 K, 100°C = 373,15 K. Pour les différences de température, ΔT(K) = ΔT(°C).',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['energie_kwh', 'pression_bar', 'vitesse_kmh']);

      if (type === 'energie_kwh') {
        const P_kW = pick([2.2, 4, 5.5, 7.5, 11, 15]);
        const t_h = pick([4, 6, 8, 10, 12]);
        const W_kWh = P_kW * t_h;
        const W_MJ = W_kWh * 3.6;
        const context = pick(['moteur de pompe industrielle', 'compresseur d\'air', 'ventilateur de traitement d\'air', 'convoyeur à bande']);
        return {
          statement: `Un ${context} de puissance nominale $P = ${P_kW}\\;\\text{kW}$ fonctionne pendant $t = ${t_h}\\;\\text{h}$ à pleine charge.<br/><br/>Calculez l'énergie consommée en mégajoules (MJ, arrondi à 0,1 MJ).`,
          answer: parseFloat(W_MJ.toFixed(1)),
          tolerance: 0.1,
          unit: 'MJ',
          hint: `$W = P \\times t$ en kWh, puis convertir : $1\\;\\text{kWh} = 3{,}6\\;\\text{MJ}$.`,
          solution: `$W = ${P_kW}\\;\\text{kW} \\times ${t_h}\\;\\text{h} = ${W_kWh}\\;\\text{kWh}$<br/>$W = ${W_kWh} \\times 3{,}6 = ${W_MJ.toFixed(1)}\\;\\text{MJ}$`,
        };
      }

      if (type === 'pression_bar') {
        const p_bar = pick([3, 4, 6, 8, 10, 16]);
        const p_kPa = p_bar * 100;
        const context = pick(['réseau hydraulique industriel', 'circuit de chaudière', 'installation de sprinklers', 'réseau de distribution d\'eau']);
        return {
          statement: `La pression de service d'un ${context} est de $${p_bar}\\;\\text{bar}$.<br/><br/>Exprimer cette pression en kPa.`,
          answer: p_kPa,
          tolerance: 0,
          unit: 'kPa',
          hint: `$1\\;\\text{bar} = 100\\;\\text{kPa} = 10^5\\;\\text{Pa}$.`,
          solution: `$${p_bar}\\;\\text{bar} = ${p_bar} \\times 100\\;\\text{kPa} = ${p_kPa}\\;\\text{kPa}$`,
        };
      }

      // vitesse km/h vers m/s
      const v_kmh = pick([36, 54, 72, 90, 108, 120, 144]);
      const v_ms = v_kmh / 3.6;
      const context = pick(['vitesse de déplacement d\'un chariot automatisé (AGV)', 'vitesse de rotation d\'un tapis de convoyeur', 'vitesse d\'un véhicule de livraison en zone logistique']);
      return {
        statement: `La ${context} est de $${v_kmh}\\;\\text{km/h}$.<br/><br/>Convertir cette vitesse en m/s.`,
        answer: parseFloat(v_ms.toFixed(2)),
        tolerance: 0.01,
        unit: 'm/s',
        hint: `Diviser par 3,6 (ou multiplier par 1000/3600).`,
        solution: `$${v_kmh}\\;\\text{km/h} = \\dfrac{${v_kmh}}{3{,}6} = ${v_ms.toFixed(2)}\\;\\text{m/s}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en Bureau d'Études dimensionne une installation de chauffage pour un entrepôt logistique. Il dispose des données suivantes :<br/><br/>
• Volume de l'entrepôt : $V = 5000\\;\\text{m}^3$<br/>
• Température extérieure de dimensionnement : $T_{ext} = -10°\\text{C}$<br/>
• Température intérieure souhaitée : $T_{int} = 18°\\text{C}$<br/>
• Coefficient de déperdition global : $K = 0{,}5\\;\\text{W/(m}^3\\text{·K)}$ (par m³ de volume)<br/>
• Durée de fonctionnement annuel : 3000 h/an`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  Entrepôt  V = 5000 m³
  ┌─────────────────────┐
  │  T_int = 18°C       │
  │                     │  ← pertes → T_ext = -10°C
  │  K = 0,5 W/(m³·K)  │
  └─────────────────────┘
  Générateur de chaleur → P = ?
</pre>
</div>`,
    tasks: [
      'Calculer l\'écart de température $\\Delta T = T_{int} - T_{ext}$ en kelvin. (Rappel : 1°C d\'écart = 1 K d\'écart)',
      'Calculer la puissance thermique nécessaire $P = K \\times V \\times \\Delta T$ (en kW, arrondi à 0,1 kW). Vérifier la cohérence des unités.',
      'Calculer l\'énergie annuelle consommée $W = P \\times t$ (en kWh puis en MJ).',
      'Le fournisseur propose une chaudière de 100 kW ou une pompe à chaleur de COP = 3,5 consommant 25 kW électriques. Comparer les coûts énergétiques (électricité : 0,18 €/kWh, gaz : 0,06 €/kWh) et conclure.',
    ],
    solutions: [
      `$\\Delta T = 18 - (-10) = 28°\\text{C} = 28\\;\\text{K}$<br/>(Pour les différences de température, °C et K sont équivalents)`,
      `$P = K \\times V \\times \\Delta T = 0{,}5\\;\\text{W/(m}^3\\text{·K)} \\times 5000\\;\\text{m}^3 \\times 28\\;\\text{K}$<br/>$= 70\\,000\\;\\text{W} = 70\\;\\text{kW}$<br/>Vérification : $[\\text{W/(m}^3\\text{·K)}] \\times [\\text{m}^3] \\times [\\text{K}] = \\text{W}$ ✓`,
      `$W = 70\\;\\text{kW} \\times 3000\\;\\text{h} = 210\\,000\\;\\text{kWh} = 210\\;\\text{MWh}$<br/>En MJ : $210\\,000 \\times 3{,}6 = 756\\,000\\;\\text{MJ} = 756\\;\\text{GJ}$`,
      `<strong>Chaudière gaz</strong> : consommation = 210 000 kWh × 1/rendement ≈ 210 000/0,9 ≈ 233 000 kWh gaz<br/>Coût ≈ 233 000 × 0,06 = 13 980 €/an<br/><br/><strong>PAC électrique</strong> : consommation électrique = 70 kW / 3,5 × 3000 h = 60 000 kWh élec<br/>Coût ≈ 60 000 × 0,18 = 10 800 €/an<br/><br/>→ La PAC est moins chère malgré l'électricité plus coûteuse, grâce au COP élevé. Économie annuelle : ≈ 3 180 €.`,
    ],
    finalAnswer: 'Puissance requise : 70 kW. La pompe à chaleur est la solution la plus économique (10 800 €/an vs 13 980 €/an pour la chaudière gaz).',
  },

  evaluation: {
    title: 'Évaluation — Système International',
    duration: '20 min',
    questions: [
      {
        q: 'Convertir $2{,}5\\;\\text{MPa}$ en bar et en Pa.',
        answer: '$2{,}5\\;\\text{MPa} = 2{,}5 \\times 10^6\\;\\text{Pa} = 25 \\times 10^5\\;\\text{Pa} = 25\\;\\text{bar}$',
        points: 2,
      },
      {
        q: 'Un câble résiste à une tension de $15\\;\\text{kN}$. Exprimer cette force en newtons, puis calculer la contrainte de traction si la section du câble est $S = 50\\;\\text{mm}^2$ (réponse en MPa).',
        answer: '$F = 15\\;\\text{kN} = 15\\,000\\;\\text{N}$<br/>$S = 50\\;\\text{mm}^2 = 50 \\times 10^{-6}\\;\\text{m}^2$<br/>$\\sigma = F/S = 15000 / (50 \\times 10^{-6}) = 3 \\times 10^8\\;\\text{Pa} = 300\\;\\text{MPa}$',
        points: 4,
      },
      {
        q: 'Vérifier la cohérence dimensionnelle de la loi d\'Ohm $U = R \\times I$, en montrant que $[R \\times I] = \\text{V}$.',
        answer: '$[R \\times I] = \\Omega \\times \\text{A} = (\\text{kg·m}^2\\text{s}^{-3}\\text{A}^{-2}) \\times \\text{A} = \\text{kg·m}^2\\text{s}^{-3}\\text{A}^{-1} = \\text{V}$ ✓',
        points: 3,
      },
      {
        q: 'Un capteur de température mesure $T = 350\\;\\text{K}$. Exprimer cette température en °C.',
        answer: '$T(°C) = T(K) - 273{,}15 = 350 - 273{,}15 = 76{,}85°\\text{C} \\approx 77°\\text{C}$',
        points: 2,
      },
    ],
  },
});
