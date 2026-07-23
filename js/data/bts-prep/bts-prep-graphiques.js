window.MODULES.push({
  id: 'bts-prep-graphiques',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📊',
  title: 'Lecture et Exploitation de Graphiques',
  subtitle: 'Axes, échelles, interpolation linéaire, extrapolation',
  keywords: ['graphique', 'courbe', 'interpolation', 'extrapolation', 'pente', 'lecture graphique', 'axes', 'abaque'],
  physics: 'En BTS technique, la lecture graphique est une compétence quotidienne : courbes caractéristiques de pompes, diagrammes enthalpiques, courbes de charge, caractéristiques de composants électroniques. Savoir lire, interpoler et extrapoler rigoureusement est indispensable pour le dimensionnement.',

  cours: {
    intro: `Un graphique est une représentation visuelle d'une relation entre deux grandeurs. En bureau d'études et sur le terrain, les techniciens utilisent constamment des abaques, des courbes de performance et des diagrammes. La lecture graphique précise est une compétence technique à part entière, distincte du calcul numérique.`,

    definitions: [
      {
        term: 'Anatomie d\'un graphique',
        def: `• <strong>Axe des abscisses (x)</strong> : grandeur indépendante (cause). Ex : débit, température, fréquence.<br/>• <strong>Axe des ordonnées (y)</strong> : grandeur dépendante (effet). Ex : HMT, rendement, puissance.<br/>• <strong>Échelle</strong> : graduation des axes. Elle peut être linéaire, logarithmique, ou semi-logarithmique.<br/>• <strong>Légende</strong> : identification des courbes si plusieurs sont représentées.<br/>• <strong>Titre et unités</strong> : indispensables pour donner un sens au graphique.`,
      },
      {
        term: 'Interpolation linéaire',
        def: `Si on connaît deux points $(x_1, y_1)$ et $(x_2, y_2)$ sur une courbe, on peut estimer la valeur $y$ pour un $x$ intermédiaire ($x_1 < x < x_2$) :<br/><br/>$$y = y_1 + \\frac{x - x_1}{x_2 - x_1} \\times (y_2 - y_1)$$<br/><br/>C'est l'équation de la droite passant par les deux points connus.`,
      },
      {
        term: 'Pente d\'une courbe (entre deux points)',
        def: `$$a = \\frac{y_2 - y_1}{x_2 - x_1} \\qquad \\text{(même unité que } y/x\\text{)}$$`,
      },
      {
        term: 'Extrapolation',
        def: `Estimer $y$ pour un $x$ en dehors de la plage connue $(x_1, x_2)$. C'est risqué : la tendance peut changer hors de la plage de mesure. Toujours signaler qu'on extrapole et indiquer les limites de validité.`,
      },
      {
        term: 'Échelle logarithmique',
        def: `Sur une échelle logarithmique, les graduations sont espacées en proportion de $\\log(x)$. Une droite sur un graphe log-log correspond à une loi puissance : $y = a \\cdot x^n$. Une droite sur un graphe semi-log (x lin, y log) correspond à une exponentielle.`,
      },
    ],

    method: {
      title: 'Méthode de lecture graphique précise',
      steps: [
        'Identifier les axes, les unités et les échelles.',
        'Repérer les graduations principales et secondaires.',
        'Tracer mentalement (ou au crayon) des lignes de projection verticale et horizontale.',
        'Lire la valeur à l\'intersection avec l\'axe correspondant.',
        'Estimer l\'incertitude de lecture (typiquement ±0,5 graduation).',
        '<strong>Calcul de la pente</strong> : choisir deux points éloignés sur la droite (pas forcément des points de mesure), lire leurs coordonnées $(x_1, y_1)$ et $(x_2, y_2)$, calculer $a = (y_2 - y_1)/(x_2 - x_1)$, vérifier l\'unité $[a] = [y]/[x]$.',
      ],
    },

    example: {
      statement: 'Quatre applications de la lecture graphique dans des contextes techniques de BTS.',
      steps: [
        `<strong>Exemple 1 — Courbe pompe Grundfos (hydraulique)</strong><br/><br/>Une courbe de pompe donne les points suivants :<br/>
| Q (m³/h) | HMT (m) |
|----------|---------|
| 0 | 48 |
| 5 | 45 |
| 10 | 38 |
| 15 | 27 |
| 20 | 10 |<br/><br/>
Pour $Q = 12\\;\\text{m}^3/\\text{h}$ (entre 10 et 15) :<br/>$$\\text{HMT} = 38 + \\frac{12 - 10}{15 - 10} \\times (27 - 38) = 38 + \\frac{2}{5} \\times (-11) = 38 - 4{,}4 = 33{,}6\\;\\text{m}$$`,
        '<strong>Exemple 2 — Diagramme de Moody (hydraulique)</strong><br/><br/>Le diagramme de Moody permet de lire le coefficient de frottement $\\lambda$ en fonction du nombre de Reynolds et de la rugosité relative. C\'est un abaque en double échelle logarithmique. Pour $Re = 10^5$ et $\\varepsilon/D = 10^{-3}$, on lit graphiquement $\\lambda \\approx 0{,}021$.',
        '<strong>Exemple 3 — Courbe caractéristique d\'une diode (électronique)</strong><br/><br/>La caractéristique I(V) d\'une diode est non linéaire. Pour estimer le courant à $V = 0{,}65\\;\\text{V}$ à partir des points $(0{,}60\\;\\text{V}, 10\\;\\text{mA})$ et $(0{,}70\\;\\text{V}, 80\\;\\text{mA})$ :<br/>$$I = 10 + \\frac{0{,}65 - 0{,}60}{0{,}70 - 0{,}60} \\times (80 - 10) = 10 + 0{,}5 \\times 70 = 45\\;\\text{mA}$$<br/>(Approximation valable seulement si la variation est quasi-linéaire entre ces deux points.)',
        '<strong>Exemple 4 — Diagramme enthalpique frigorigène (thermodynamique)</strong><br/><br/>Dans le diagramme de Mollier (p-h), on lit :<br/>• L\'enthalpie à l\'entrée du compresseur : $h_1$<br/>• L\'enthalpie à la sortie du compresseur : $h_2$<br/>• L\'enthalpie à l\'entrée de l\'évaporateur : $h_4$<br/>La puissance frigorifique par kg de fluide : $q_f = h_1 - h_4$ (lu graphiquement).',
      ],
      answer: 'La lecture graphique rigoureuse repose sur la projection horizontale/verticale et, si besoin, l\'interpolation linéaire entre deux points connus.',
    },

    formulas: [
      '<strong>Interpolation linéaire</strong> : $y = y_1 + \\frac{x - x_1}{x_2 - x_1} \\times (y_2 - y_1)$',
      '<strong>Pente d\'une droite</strong> : $a = \\frac{y_2 - y_1}{x_2 - x_1} \\quad [a] = [y]/[x]$',
      '<strong>Équation d\'une droite</strong> : $y = ax + b \\quad (b = y_1 - a \\cdot x_1)$',
      '<strong>Loi puissance (log-log)</strong> : $\\log y = n \\log x + \\log a \\Leftrightarrow y = a x^n$',
      '<strong>Loi exponentielle (semi-log)</strong> : $\\ln y = bx + \\ln a \\Leftrightarrow y = a e^{bx}$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Construction graphique',
      title: 'Interpoler un point entre deux valeurs connues',
      description: 'Deux points connus $(x_1, y_1)$ et $(x_2, y_2)$ sont reliés par une droite. La valeur intermédiaire se lit par simple projection sur cette droite, sans calcul si le graphique est précis.',
      svg: `
        <svg viewBox="0 0 360 240" role="img" aria-labelledby="bts-graphiques-interp-title bts-graphiques-interp-desc">
          <title id="bts-graphiques-interp-title">Construction de l'interpolation lineaire</title>
          <desc id="bts-graphiques-interp-desc">Deux points connus A et B relies par une droite ; projection du point intermediaire Q=12 pour lire HMT=33,6 m.</desc>
          <line class="grid-line" x1="55" y1="50" x2="330" y2="50"></line>
          <line class="grid-line" x1="55" y1="160" x2="330" y2="160"></line>
          <line class="grid-line" x1="94.3" y1="30" x2="94.3" y2="190"></line>
          <line class="grid-line" x1="290.7" y1="30" x2="290.7" y2="190"></line>
          <line class="axis" x1="55" y1="190" x2="345" y2="190"></line>
          <line class="axis" x1="55" y1="198" x2="55" y2="16"></line>
          <line class="guide-line" x1="172.9" y1="94" x2="172.9" y2="190"></line>
          <line class="guide-line" x1="55" y1="94" x2="172.9" y2="94"></line>
          <line class="curve-main" x1="94.3" y1="50" x2="290.7" y2="160"></line>
          <circle class="plot-point" cx="94.3" cy="50" r="4.5"></circle>
          <circle class="plot-point" cx="290.7" cy="160" r="4.5"></circle>
          <circle class="plot-point-alt" cx="172.9" cy="94" r="4.5"></circle>
          <text class="annotation-label" x="96" y="40">A (10 ; 38)</text>
          <text class="annotation-label" x="228" y="178">B (15 ; 27)</text>
          <text class="annotation-label" x="176" y="84">HMT interpolee</text>
          <text class="tick-label" x="86" y="204">10</text>
          <text class="tick-label" x="164" y="204">12</text>
          <text class="tick-label" x="282" y="204">15</text>
          <text class="tick-label" x="26" y="53">38</text>
          <text class="tick-label" x="8" y="97">33,6</text>
          <text class="tick-label" x="26" y="163">27</text>
          <text class="axis-label" x="298" y="207">Q (m3/h)</text>
          <text class="axis-label" x="14" y="22">HMT (m)</text>
        </svg>
      `,
      notes: [
        'Les deux points connus, <strong>A</strong> $(10\\;;\\,38)$ et <strong>B</strong> $(15\\;;\\,27)$, sont ceux de l\'exemple 1 (courbe pompe).',
        'On projette verticalement depuis $Q = 12\\;\\text{m}^3/\\text{h}$ jusqu\'à la droite $AB$, puis horizontalement jusqu\'à l\'axe des HMT : on lit $\\text{HMT} \\approx 33{,}6\\;\\text{m}$.',
        'C\'est exactement la construction géométrique de la formule <strong>d\'interpolation linéaire</strong> : $y = y_1 + \\dfrac{x-x_1}{x_2-x_1}(y_2-y_1)$.'
      ],
      reading: 'Le point clair (cercle non rempli) sur la droite <strong>n\'a jamais été mesuré</strong> : c\'est la valeur estimée par interpolation, obtenue uniquement par construction graphique entre deux points réels.',
      caption: 'Interpolation linéaire entre $Q_1 = 10$ et $Q_2 = 15\\;\\text{m}^3/\\text{h}$ : $\\text{HMT}(12) \\approx 33{,}6\\;\\text{m}$.'
    },

    recap: [
      'Toujours vérifier les unités et l\'échelle d\'un graphique avant de lire',
      'Interpolation : estimer entre deux points connus → formule $(y_2-y_1)/(x_2-x_1)$',
      'Extrapolation : estimer hors des points connus → prudence et signalement obligatoires',
      'Pente : $a = \\Delta y / \\Delta x$ — unité = $[y]/[x]$',
      'Échelle log : une droite correspond à une loi puissance ou exponentielle',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Confondre la variable et la valeur lue</strong> : l'axe des x est la variable indépendante. Pour lire la valeur en y correspondant à un x donné, on projette verticalement sur la courbe, puis horizontalement sur l'axe y.<br/><br/>
• <strong>Interpoler sur une courbe non linéaire</strong> : l'interpolation linéaire est une approximation. Plus les deux points sont éloignés sur une courbe courbée, plus l'erreur est grande.<br/><br/>
• <strong>Extrapoler sans précaution</strong> : les performances d'une pompe en dehors de sa plage nominale sont inconnues. Le comportement peut être radicalement différent.<br/><br/>
• <strong>Mal lire une échelle logarithmique</strong> : entre 10 et 100 sur un axe log, 50 n'est pas au milieu (il est à 70% du segment). Le milieu correspond à $\\sqrt{10 \\times 100} = \\sqrt{1000} \\approx 31{,}6$.`,
  },

  quiz: [
    {
      q: 'Sur un graphique de pompe, pour $Q = 8\\;\\text{m}^3/\\text{h}$ on lit HMT = 42 m, et pour $Q = 12\\;\\text{m}^3/\\text{h}$ on lit HMT = 34 m. Par interpolation, HMT pour $Q = 10\\;\\text{m}^3/\\text{h}$ vaut :',
      options: ['38 m', '40 m', '36 m', '39 m'],
      answer: 0,
      correction: 'HMT = 42 + (10-8)/(12-8) × (34-42) = 42 + 0,5 × (-8) = 42 - 4 = 38 m.',
    },
    {
      q: 'La pente d\'une droite passant par $(2, 5)$ et $(8, 17)$ est :',
      options: ['6', '2', '12', '0,5'],
      answer: 1,
      correction: 'a = (17-5)/(8-2) = 12/6 = 2.',
    },
    {
      q: 'Sur un graphique d\'abaque, les axes x et y sont tous deux en échelle logarithmique. Une droite sur ce graphique représente :',
      options: ['Une relation linéaire y = ax + b', 'Une loi puissance y = a·xⁿ', 'Une exponentielle y = a·eˣ', 'Une parabole'],
      answer: 1,
      correction: 'Sur un graphe log-log, une droite correspond à y = a·xⁿ, car log(y) = n·log(x) + log(a) est une équation de droite dans les coordonnées (log x, log y).',
    },
    {
      q: 'L\'extrapolation d\'une courbe consiste à :',
      options: ['Lire une valeur à l\'intérieur de la plage de mesure', 'Estimer une valeur à l\'extérieur de la plage de mesure', 'Calculer la pente d\'une droite', 'Superposer deux graphiques'],
      answer: 1,
      correction: 'L\'extrapolation estime les valeurs hors de la plage de données connues. C\'est risqué car le comportement physique peut changer (changement de régime, limite de fonctionnement).',
    },
    {
      q: 'Sur un graphique à axes linéaires, deux points de mesure sont $(10, 20)$ et $(30, 60)$. Pour $x = 50$ (extrapolation), $y$ vaut :',
      options: ['80', '90', '100', '120'],
      answer: 2,
      correction: 'Pente : a = (60-20)/(30-10) = 40/20 = 2. Équation : y = 20 + 2×(x-10). Pour x=50 : y = 20 + 2×40 = 100. (Extrapolation : à utiliser avec prudence.)',
    },
    {
      q: 'Un technicien lit une valeur de 47 sur un axe gradué de 0 à 100 avec 10 divisions. L\'incertitude de lecture est :',
      options: ['±0,1', '±0,5', '±5', '±10'],
      answer: 2,
      correction: 'Chaque division représente 100/10 = 10 unités. L\'incertitude de lecture est généralement de ±0,5 graduation = ±5 unités.',
    },
    {
      q: 'Sur un graphique de courbe pompe, le point de fonctionnement est à l\'intersection de :',
      options: ['La courbe HMT et l\'axe des abscisses', 'La courbe HMT de la pompe et la courbe de réseau', 'La courbe de rendement et la courbe de puissance', 'Les deux courbes de rendement'],
      answer: 1,
      correction: 'Le point de fonctionnement est à l\'intersection de la courbe caractéristique de la pompe (HMT en fonction de Q) et de la courbe de réseau (pertes de charge en fonction de Q).',
    },
    {
      q: 'Sur un axe logarithmique allant de 1 à 1000, quelle valeur se trouve exactement au milieu visuellement ?',
      options: ['500', '100', '31,6', '250'],
      answer: 2,
      correction: 'Sur un axe log, le milieu entre 1 et 1000 est √(1×1000) = √1000 ≈ 31,6. L\'échelle est compressée pour les grandes valeurs.',
    },
    {
      q: 'La pente de la caractéristique courant-tension d\'une résistance $R = 50\\;\\Omega$ (droite $I = U/R$) sur un graphique $I$ vs $U$ vaut :',
      options: ['50 A/V', '0,02 A/V', '50 Ω', '0,02 Ω'],
      answer: 1,
      correction: '[pente] = [I]/[U] = A/V = 1/Ω = S (siemens). Ici pente = 1/R = 1/50 = 0,02 A/V = 0,02 S.',
    },
    {
      q: 'Sur un diagramme de Mollier (pression-enthalpie) pour les frigorigènes, l\'axe des ordonnées est en pression (MPa) et est en :',
      options: ['Échelle linéaire', 'Échelle logarithmique', 'Échelle semi-logarithmique', 'Échelle exponentielle'],
      answer: 1,
      correction: 'Dans le diagramme de Mollier, l\'axe des pressions est en échelle logarithmique. Cela permet de représenter à la fois les basses et hautes pressions sur un même graphique.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['interpolation_pompe', 'pente_droite', 'interpolation_rendement']);

      if (type === 'interpolation_pompe') {
        // Courbe pompe simplifiée
        const points = [
          { Q: 0, H: 50 },
          { Q: 5, H: 47 },
          { Q: 10, H: 40 },
          { Q: 15, H: 29 },
          { Q: 20, H: 12 },
        ];
        const idx = pick([0, 1, 2, 3]); // segment
        const p1 = points[idx];
        const p2 = points[idx + 1];
        const Q_target = parseFloat((p1.Q + (p2.Q - p1.Q) * pick([0.25, 0.4, 0.5, 0.6, 0.75])).toFixed(1));
        const H_target = p1.H + (Q_target - p1.Q) / (p2.Q - p1.Q) * (p2.H - p1.H);
        return {
          statement: `Une courbe de pompe donne les deux points suivants :<br/>
- Point A : $Q_1 = ${p1.Q}\\;\\text{m}^3/\\text{h}$, $\\text{HMT}_1 = ${p1.H}\\;\\text{m}$<br/>
- Point B : $Q_2 = ${p2.Q}\\;\\text{m}^3/\\text{h}$, $\\text{HMT}_2 = ${p2.H}\\;\\text{m}$<br/><br/>
Par interpolation linéaire, estimer la HMT pour $Q = ${Q_target}\\;\\text{m}^3/\\text{h}$ (en m, arrondi à 0,1 m).`,
          answer: parseFloat(H_target.toFixed(1)),
          tolerance: 0.2,
          unit: 'm',
          hint: `Formule d'interpolation : $y = y_1 + \\dfrac{x - x_1}{x_2 - x_1} \\times (y_2 - y_1)$.`,
          solution: `$\\text{HMT} = ${p1.H} + \\dfrac{${Q_target} - ${p1.Q}}{${p2.Q} - ${p1.Q}} \\times (${p2.H} - ${p1.H}) = ${p1.H} + ${((Q_target-p1.Q)/(p2.Q-p1.Q)).toFixed(2)} \\times (${p2.H-p1.H}) = ${H_target.toFixed(1)}\\;\\text{m}$`,
        };
      }

      if (type === 'pente_droite') {
        const x1 = pick([2, 5, 10, 20]);
        const a = pick([0.5, 1, 2, 3, 5]);
        const b = pick([10, 20, 30, 50]);
        const x2 = x1 + pick([5, 10, 15, 20]);
        const y1 = a * x1 + b;
        const y2 = a * x2 + b;
        const units = pick([
          { x: 'débit (m³/h)', y: 'pertes de charge (Pa)', yunit: 'Pa/(m³/h)' },
          { x: 'courant (A)', y: 'tension (V)', yunit: 'V/A = Ω' },
          { x: 'température (°C)', y: 'puissance (W)', yunit: 'W/°C' },
        ]);
        return {
          statement: `Sur un graphique représentant ${units.y} en fonction de ${units.x}, deux points sont lus :<br/>
- Point 1 : $(${x1},\\; ${y1.toFixed(0)})$<br/>
- Point 2 : $(${x2},\\; ${y2.toFixed(0)})$<br/><br/>
Calculer la pente de la droite passant par ces deux points (en ${units.yunit}, arrondi à 0,01).`,
          answer: a,
          tolerance: 0.02,
          unit: units.yunit,
          hint: `$a = \\dfrac{y_2 - y_1}{x_2 - x_1}$`,
          solution: `$a = \\dfrac{${y2.toFixed(0)} - ${y1.toFixed(0)}}{${x2} - ${x1}} = \\dfrac{${(y2-y1).toFixed(0)}}{${x2-x1}} = ${a}\\;${units.yunit}$`,
        };
      }

      // interpolation_rendement — courbe de rendement moteur
      const Q1 = pick([20, 30, 40, 50]);
      const Q2 = Q1 + pick([10, 15, 20]);
      const eta1 = pick([72, 75, 78, 80, 82]);
      const eta2 = pick([85, 87, 90, 92, 88]);
      const Q_t = parseFloat((Q1 + (Q2 - Q1) * pick([0.3, 0.4, 0.5, 0.6, 0.7])).toFixed(0));
      const eta_t = eta1 + (Q_t - Q1) / (Q2 - Q1) * (eta2 - eta1);
      return {
        statement: `La courbe de rendement d'un moteur donne :<br/>
- À $P = ${Q1}\\%$ de charge : $\\eta = ${eta1}\\%$<br/>
- À $P = ${Q2}\\%$ de charge : $\\eta = ${eta2}\\%$<br/><br/>
Par interpolation, estimer le rendement à $${Q_t}\\%$ de charge (en %, arrondi à 0,1%).`,
        answer: parseFloat(eta_t.toFixed(1)),
        tolerance: 0.3,
        unit: '%',
        hint: 'Appliquer la formule d\'interpolation linéaire.',
        solution: `$\\eta = ${eta1} + \\dfrac{${Q_t} - ${Q1}}{${Q2} - ${Q1}} \\times (${eta2} - ${eta1}) = ${eta1} + ${((Q_t-Q1)/(Q2-Q1)).toFixed(2)} \\times ${eta2-eta1} = ${eta_t.toFixed(1)}\\%$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en installation hydraulique analyse la courbe de pompe d'un groupe hydrophore. La courbe HMT (Hauteur Manométrique Totale) est fournie par le catalogue Grundfos sous forme de points de mesure :<br/><br/>
| $Q$ (m³/h) | 0 | 2 | 4 | 6 | 8 | 10 |
|------------|---|---|---|---|---|---|
| HMT (m) | 52 | 50 | 46 | 39 | 29 | 14 |<br/><br/>
La courbe de réseau (pertes de charge du circuit) suit la loi : $\\Delta H_{\\text{réseau}} = 0{,}3 \\times Q^2 + 5$ (en m, avec Q en m³/h).`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  HMT
  52 ●
  50   ●
  46     ●         ← courbe pompe
  39       ●
  29         ●
  14           ●
     ─────────────── Q (m³/h)
   0  2  4  6  8  10

  Réseau : ΔH = 0,3Q² + 5
</pre>
</div>`,
    tasks: [
      'Calculer la perte de charge réseau pour $Q = 0$, $2$, $4$, $6$, $8$ et $10\\;\\text{m}^3/\\text{h}$.',
      'Trouver par interpolation le point de fonctionnement (intersection courbe pompe et courbe réseau). Identifier le segment où les deux courbes se croisent.',
      'Par interpolation linéaire, estimer le débit de fonctionnement $Q_F$ et la HMT de fonctionnement $H_F$.',
      'Ce groupe hydrophore doit alimenter une installation nécessitant $Q = 7\\;\\text{m}^3/\\text{h}$ à 30 m. Est-ce que la pompe convient ? Justifier.',
    ],
    solutions: [
      `| $Q$ (m³/h) | 0 | 2 | 4 | 6 | 8 | 10 |
|------------|---|---|---|---|---|---|
| $\\Delta H_{\\text{réseau}}$ (m) | 5 | 6,2 | 9,8 | 15,8 | 24,2 | 35 |<br/><br/>
(Calcul : $\\Delta H_{\\text{réseau}} = 0{,}3Q^2 + 5$)`,
      `Comparaison HMT pompe vs réseau :<br/><br/>
| $Q$ (m³/h) | 8 | 10 |
|------------|---|---|
| HMT pompe (m) | 29 | 14 |
| HMT réseau (m) | 24,2 | 35 |<br/><br/>
Écart (pompe − réseau) : à Q=8 → +4,8 m (pompe > réseau) ; à Q=10 → −21 m (réseau > pompe).<br/><br/>
Le croisement est entre Q=8 et Q=10 m³/h.`,
      `Entre Q=8 et Q=10, on cherche $Q_F$ tel que HMT_pompe = HMT_réseau.<br/>Pente pompe : $(14-29)/(10-8) = -7{,}5$ m/(m³/h)<br/>Pente réseau : $(35-24{,}2)/(10-8) = 5{,}4$ m/(m³/h)<br/>À $Q=8$, l'écart pompe − réseau vaut $29-24{,}2=4{,}8$ m ; il se réduit de $7{,}5+5{,}4=12{,}9$ m par m³/h supplémentaire.<br/>$Q_F \\approx 8 + \\dfrac{4{,}8}{12{,}9} \\approx 8{,}4\\;\\text{m}^3/\\text{h}$<br/>$H_F \\approx 24{,}2 + 5{,}4 \\times 0{,}4 \\approx 26{,}2\\;\\text{m}$.`,
      `Pour $Q = 7\\;\\text{m}^3/\\text{h}$, HMT pompe (interpolée entre Q=6 et Q=8) ≈ $39 + \\dfrac{29-39}{8-6} \\times 1 = 34$ m. La pression requise est 30 m. La pompe fournit 34 m > 30 m : elle <strong>convient</strong>. Le débit de fonctionnement réel du système (≈ 8,4 m³/h) sera supérieur à 7 m³/h puisque la pompe peut fournir plus que requis, et le système s'équilibrera au point de fonctionnement pompe/réseau.`,
    ],
    finalAnswer: 'Point de fonctionnement approximatif : $Q_F \\approx 8{,}4\\;\\text{m}^3/\\text{h}$ à $H_F \\approx 26{,}2\\;\\text{m}$. La pompe convient pour le cahier des charges de 7 m³/h à 30 m (elle fournit alors 34 m).',
  },

  evaluation: {
    title: 'Évaluation — Lecture et Exploitation de Graphiques',
    duration: '25 min',
    questions: [
      {
        q: 'Un graphique de puissance absorbée d\'une pompe donne $P = 1{,}8\\;\\text{kW}$ pour $Q = 5\\;\\text{m}^3/\\text{h}$ et $P = 2{,}6\\;\\text{kW}$ pour $Q = 9\\;\\text{m}^3/\\text{h}$. Par interpolation linéaire, estimer P pour $Q = 7\\;\\text{m}^3/\\text{h}$.',
        answer: '$P = 1{,}8 + \\dfrac{7-5}{9-5} \\times (2{,}6-1{,}8) = 1{,}8 + 0{,}5 \\times 0{,}8 = 2{,}2\\;\\text{kW}$',
        points: 3,
      },
      {
        q: 'Sur un abaque à double échelle logarithmique, une droite passe par les points $(10, 5)$ et $(100, 50)$. Quelle loi représente-t-elle ? Calculer la valeur pour $x = 1000$.',
        answer: 'La pente en log-log : $n = \\dfrac{\\log 50 - \\log 5}{\\log 100 - \\log 10} = \\dfrac{\\log 10}{\\log 10} = 1$ → loi linéaire $y = 0{,}5 x$.<br/>Pour $x = 1000$ : $y = 0{,}5 \\times 1000 = 500$.',
        points: 4,
      },
      {
        q: 'Sur une caractéristique courant-vitesse d\'un moteur à courant continu, la vitesse passe de 1000 tr/min à 800 tr/min quand le courant passe de 2 A à 8 A. Calculer la pente et l\'équation de la droite.',
        answer: 'Pente : $a = (800-1000)/(8-2) = -200/6 \\approx -33{,}3\\;\\text{tr/min/A}$<br/>Équation : $n = n_1 + a(I-I_1) = 1000 - 33{,}3(I-2) = 1066{,}7 - 33{,}3 I$',
        points: 4,
      },
      {
        q: 'Un technicien extrapole une courbe de performance d\'une pompe au-delà de $Q = 20\\;\\text{m}^3/\\text{h}$ (limite du catalogue). Quelles précautions doit-il prendre ?',
        answer: 'Précautions : (1) signaler explicitement qu\'il s\'agit d\'une extrapolation hors plage garantie ; (2) contacter le fabricant pour les données réelles ; (3) ajouter un coefficient de sécurité ; (4) vérifier que la pompe ne cavite pas à ce débit (NPSH). L\'extrapolation peut être très imprécise si la courbe change de comportement (décrochage, cavitation).',
        points: 3,
      },
    ],
  },
});
