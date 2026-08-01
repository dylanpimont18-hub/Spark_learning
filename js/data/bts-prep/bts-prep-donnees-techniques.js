window.MODULES.push({
  id: 'bts-prep-donnees-techniques',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '📋',
  title: 'Données Techniques & Catalogues',
  subtitle: 'Lire une fiche technique, un abaque, un catalogue fabricant',
  keywords: ['catalogue', 'fiche technique', 'abaque', 'datasheet', 'Grundfos', 'Daikin', 'Schneider', 'rendement', 'dimensionnement', 'point de fonctionnement'],
  physics: 'Un BTS technique forme des praticiens capables de dialoguer avec les fournisseurs, de lire les documentations techniques et de sélectionner le bon équipement dans un catalogue. Décrypter une fiche technique est une compétence professionnelle fondamentale.',

  cours: {
    intro: `Les catalogues fabricants et les fiches techniques sont les outils de travail quotidiens du technicien BTS.<br/><br/>Ils condensent des dizaines de paramètres sous des formes standardisées (tableaux, abaques, courbes, notes techniques).<br/><br/>Ce module enseigne la méthode pour extraire l'information utile sans se noyer dans les données.`,

    definitions: [
      {
        term: 'Structure d\'une fiche technique',
        def: `Une fiche technique (datasheet) contient généralement :<br/><br/>
• <strong>Référence et désignation</strong> : code produit, famille, variante<br/>
• <strong>Données de performance nominale</strong> : puissance, débit, pression, rendement, vitesse de rotation<br/>
• <strong>Plage de fonctionnement</strong> : températures, pressions, débits admissibles<br/>
• <strong>Caractéristiques électriques</strong> : tension, courant, puissance absorbée, facteur de puissance<br/>
• <strong>Caractéristiques mécaniques</strong> : masse, dimensions, raccordements, matériaux<br/>
• <strong>Courbes de performance</strong> : HMT/Q, rendement/Q, puissance/Q pour les pompes<br/>
• <strong>Conditions de référence</strong> : température ambiante, altitude, fluide de référence<br/>
• <strong>Certifications et normes</strong> : CE, NF, IP, classe d'isolation`,
      },
      {
        term: 'Paramètres clés par type d\'équipement',
        def: `<em>Pompes (ex : Grundfos) :</em><br/>
$Q_{\\text{nominal}}$ (m³/h), $H_{\\text{nominal}}$ (m), $P_{\\text{absorbée}}$ (kW), $\\eta_{\\text{pompe}}$ (%), $\\text{NPSH}_r$ (m), DN raccordement (mm)<br/><br/>
<em>Climatiseurs/Groupes froids (ex : Daikin) :</em><br/>
$P_f$ (kW), $P_{\\text{chaud}}$ (kW), COP, EER, $P_{\\text{élec}}$ (kW), Classe énergétique (A++ à G)<br/><br/>
<em>Disjoncteurs/Contacteurs (ex : Schneider) :</em><br/>
$I_n$ (A) courant nominal, $I_{cu}$ (kA) pouvoir de coupure, catégorie (AC-3, AC-1), tension nominale (V)<br/><br/>
<em>Chaudières industrielles :</em><br/>
$P_{\\text{utile}}$ (kW), rendement PCI (%), pression de travail (bar), débit fumées (m³/h)`,
      },
    ],

    method: {
      title: 'Méthode de sélection dans un catalogue',
      steps: [
        '<strong>Identifier les contraintes</strong> : débit requis, pression, température, environnement.',
        '<strong>Aller à l\'abaque de sélection</strong> : placer le point de fonctionnement (Q, H) sur l\'abaque.',
        '<strong>Sélectionner le modèle</strong> : choisir la pompe/machine dont la courbe passe au-dessus du point.',
        '<strong>Vérifier les critères secondaires</strong> : rendement maximal, puissance absorbée, NPSH, niveau sonore.',
        '<strong>Appliquer les coefficients de sécurité</strong> : généralement 10 à 20% sur le débit.',
        '<strong>Vérifier la compatibilité électrique</strong> : tension, courant, protection.',
        '<strong>Lire une courbe de pompe</strong> : la courbe HMT/Q décroît de gauche (débit nul, HMT maximale) à droite (débit maximal, HMT nulle). Le point de fonctionnement est l\'intersection entre la courbe pompe et la courbe de réseau.',
        '<strong>Indices de protection IP</strong> : IP XY — X = protection contre les solides (0 à 6), Y = protection contre les liquides (0 à 8). IP 54 = poussières (5) + projections d\'eau (4). IP 65 = étanche aux poussières + jets d\'eau basse pression.',
      ],
    },

    example: {
      statement: 'Trois exemples de lecture et de sélection dans des catalogues techniques industriels.',
      steps: [
        '<strong>Exemple 1 — Sélection d\'une pompe (Grundfos CM)</strong><br/><br/>Besoin : alimenter un circuit de chauffage avec $Q = 8\\;\\text{m}^3/\\text{h}$ à $H = 15\\;\\text{m}$.<br/><br/>Sur l\'abaque Grundfos, on repère le point $(8\\;\\text{m}^3/\\text{h}, 15\\;\\text{m})$. La pompe CM5-8 couvre ce point avec :<br/>• $Q_n = 9\\;\\text{m}^3/\\text{h}$, $H_n = 17\\;\\text{m}$<br/>• $P_{\\text{abs}} = 0{,}85\\;\\text{kW}$<br/>• $\\eta_n = 52\\%$<br/>• IP 44, 230 V monophasé<br/><br/>Le point de fonctionnement (8 m³/h, 15 m) est dans la plage utile, avec une réserve de 1 m³/h sur le débit.',
        `<strong>Exemple 2 — Fiche technique climatiseur Daikin FTXM35M</strong><br/><br/>
| Paramètre | Valeur |
|-----------|--------|
| Puissance frigorifique | 3,5 kW |
| Puissance de chauffage | 4,0 kW |
| Puissance absorbée (froid) | 0,88 kW |
| COP (chauffage) | 5,0 (classe A+++) |
| Débit d'air | 570 m³/h |
| Niveau sonore intérieur | 21–40 dB(A) |
| IP | IP24 (unité intérieure) |<br/><br/>
Lecture : pour $P_f = 3{,}5\\;\\text{kW}$ et $P_{\\text{élec}} = 0{,}88\\;\\text{kW}$ (grandeurs de <strong>refroidissement</strong>), le rapport calculé est $3{,}5/0{,}88 \\approx 4{,}0$ : c'est un <strong>EER</strong> (Energy Efficiency Ratio), pas un COP — le COP désigne le mode chauffage (voir piège ci-dessous). Le COP = 5,0 du tableau est la valeur chauffage, mesurée dans des conditions standard (air à 7°C extérieur, 20°C intérieur pour le chauffage).`,
        '<strong>Exemple 3 — Disjoncteur Schneider GV2M</strong><br/><br/>Pour un moteur $P = 2{,}2\\;\\text{kW}$, $U = 400\\;\\text{V}$, $\\cos\\varphi = 0{,}85$ :<br/>$I_n = P/(\\sqrt{3} \\times U \\times \\cos\\varphi) = 2200/(1{,}732 \\times 400 \\times 0{,}85) \\approx 3{,}74\\;\\text{A}$<br/>On sélectionne le GV2ME08 (plage de réglage $2{,}5$ à $4\\;\\text{A}$) — on règle à $4\\;\\text{A}$ (haut de plage) pour couvrir les $3{,}74\\;\\text{A}$ calculés avec une marge de sécurité.',
      ],
      answer: 'La sélection d\'un équipement dans un catalogue commence par identifier le point de fonctionnement, puis à vérifier que le modèle choisi le couvre avec une marge de sécurité.',
    },

    formulas: [
      '<strong>Puissance utile pompe</strong> : $P_{\\text{utile}} = \\rho g Q H \\quad (\\text{W si SI})$',
      '<strong>Rendement pompe</strong> : $\\eta_{\\text{pompe}} = P_{\\text{utile}} / P_{\\text{absorbée}}$',
      '<strong>COP groupe froid</strong> : $\\text{COP} = P_f / P_{\\text{élec}}$',
      '<strong>Courant moteur tri</strong> : $I_n = P / (\\sqrt{3} \\cdot U \\cdot \\cos\\varphi \\cdot \\eta)$',
      '<strong>NPSH disponible</strong> : $\\text{NPSH}_{\\text{dispo}} = h_{\\text{atm}} - h_v - h_s - J_a$',
      '<strong>Condition NPSH</strong> : $\\text{NPSH}_{\\text{dispo}} \\geq \\text{NPSH}_{r} + 0{,}5\\;\\text{m}$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Courbe de pompe calculée',
      title: 'HMT(Q) d\'une pompe centrifuge : une courbe décroissante',
      description: 'La hauteur manométrique totale disponible décroît quand le débit demandé augmente, depuis la hauteur à vanne fermée (Q = 0) jusqu\'au débit maximal (HMT = 0). Le point nominal du catalogue est annoté sur la courbe.',
      svg: `
        <svg viewBox="0 0 360 240" role="img" aria-labelledby="bts-dt-title bts-dt-desc">
          <title id="bts-dt-title">Courbe HMT en fonction du debit d'une pompe centrifuge</title>
          <desc id="bts-dt-desc">La hauteur manometrique totale decroit quand le debit augmente, depuis la hauteur a vanne fermee jusqu'au debit maximal a hauteur nulle ; le point de fonctionnement nominal du catalogue est annote sur la courbe.</desc>

          <line class="grid-line" x1="52" y1="34" x2="316" y2="34"></line>
          <line class="grid-line" x1="52" y1="64.4" x2="316" y2="64.4"></line>
          <line class="grid-line" x1="52" y1="94.8" x2="316" y2="94.8"></line>
          <line class="grid-line" x1="52" y1="125.2" x2="316" y2="125.2"></line>
          <line class="grid-line" x1="52" y1="155.6" x2="316" y2="155.6"></line>
          <line class="grid-line" x1="52" y1="186" x2="316" y2="186"></line>

          <line class="grid-line" x1="52" y1="34" x2="52" y2="186"></line>
          <line class="grid-line" x1="118" y1="34" x2="118" y2="186"></line>
          <line class="grid-line" x1="184" y1="34" x2="184" y2="186"></line>
          <line class="grid-line" x1="250" y1="34" x2="250" y2="186"></line>
          <line class="grid-line" x1="316" y1="34" x2="316" y2="186"></line>

          <line class="axis" x1="52" y1="186" x2="328" y2="186"></line>
          <line class="axis" x1="52" y1="194" x2="52" y2="24"></line>

          <path class="curve-main" d="M52 34 L85 36.4 L118 43.5 L151 55.4 L184 72 L200.5 82.1 L217 93.4 L250 119.5 L283 150.4 L316 186"></path>

          <line class="guide-line" x1="200.5" y1="82.1" x2="200.5" y2="186"></line>
          <line class="guide-line" x1="52" y1="82.1" x2="200.5" y2="82.1"></line>
          <circle class="plot-point" cx="200.5" cy="82.1" r="6"></circle>

          <circle class="plot-point-alt" cx="52" cy="34" r="5"></circle>
          <circle class="plot-point-alt" cx="316" cy="186" r="5"></circle>

          <text class="annotation-label" x="230" y="45">Courbe HMT(Q)</text>
          <text class="annotation-label" x="215" y="65">Point nominal</text>
          <text class="label-soft" x="205" y="79">Qn≈9 m³/h · Hn≈17 m</text>
          <text class="label-soft" x="62" y="48">H₀ = 25 m (Q=0)</text>
          <text class="label-soft" x="222" y="178">Qmax≈16 m³/h (H=0)</text>

          <text class="axis-label" x="352" y="189" text-anchor="end">Q (m³/h)</text>
          <text class="axis-label" x="58" y="24">H (m)</text>

          <text class="tick-label" x="52" y="203" text-anchor="middle">0</text>
          <text class="tick-label" x="118" y="203" text-anchor="middle">4</text>
          <text class="tick-label" x="184" y="203" text-anchor="middle">8</text>
          <text class="tick-label" x="250" y="203" text-anchor="middle">12</text>
          <text class="tick-label" x="316" y="203" text-anchor="middle">16</text>

          <text class="tick-label" x="44" y="189" text-anchor="end">0</text>
          <text class="tick-label" x="44" y="158.6" text-anchor="end">5</text>
          <text class="tick-label" x="44" y="128.2" text-anchor="end">10</text>
          <text class="tick-label" x="44" y="97.8" text-anchor="end">15</text>
          <text class="tick-label" x="44" y="67.4" text-anchor="end">20</text>
          <text class="tick-label" x="44" y="37" text-anchor="end">25</text>
        </svg>
      `,
      notes: [
        'Le point nominal ($Q_n \\approx 9\\;\\text{m}^3/\\text{h}$, $H_n \\approx 17\\;\\text{m}$) reprend les valeurs de la pompe Grundfos CM5-8 citée dans l\'exemple 1 du cours.',
        'La courbe est tracée avec $H(Q) = H_0 - k Q^2$ : $H_0 = 25\\;\\text{m}$ à débit nul (vanne fermée) et $Q_{\\max} \\approx 16\\;\\text{m}^3/\\text{h}$ à HMT nulle sont des bornes typiques choisies pour faire passer la courbe par le point nominal du catalogue — la fiche technique citée dans le cours ne donne que ce point nominal, pas l\'équation complète.',
        'Vérification au point client de l\'exemple 1 ($Q = 8\\;\\text{m}^3/\\text{h}$) : la courbe donne $H \\approx 18{,}8\\;\\text{m}$, bien au-dessus des $15\\;\\text{m}$ requis — cohérent avec la « réserve de 1 m³/h sur le débit » mentionnée dans le cours.'
      ],
      reading: 'Une courbe de pompe se lit toujours de gauche (débit nul, HMT maximale) vers la droite (débit maximal, HMT nulle) : plus on demande de débit, moins la pompe peut fournir de hauteur.',
      caption: 'Points recalculés indépendamment sur $H(Q) = 25 - 0{,}0977\\,Q^2$ : (0 ; 25), (9 ; 17,1) point nominal catalogue, (16 ; 0). Décroissance strictement vérifiée sur toute la plage.'
    },

    recap: [
      'Une fiche technique contient toujours : performances nominales, plage de fonctionnement, caractéristiques électriques, conditions de référence',
      'Point de fonctionnement pompe = intersection courbe pompe + courbe réseau',
      'IP XY : X = solides (0→6), Y = liquides (0→8). IP 65 = protection totale poussières + jet d\'eau',
      'COP = puissance utile / puissance électrique absorbée',
      'NPSH : condition anti-cavitation — toujours vérifier',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Conditions de référence</strong> : les performances sont données pour des conditions standard (température, altitude, fluide). En altitude ou chaleur, les performances réelles sont moindres.<br/><br/>
• <strong>COP vs EER</strong> : le COP est pour le chauffage, l'EER pour le refroidissement. Ce sont des valeurs mesurées dans des conditions standard (EN 14511), différentes des conditions réelles d'utilisation.<br/><br/>
• <strong>Puissance absorbée vs nominale</strong> : la puissance nominale d'un moteur est la puissance utile sur l'arbre. La puissance absorbée au réseau est $P_{\\text{abs}} = P_n / \\eta$.<br/><br/>
• <strong>NPSH requis vs disponible</strong> : si NPSH disponible < NPSH requis, la pompe cavite (bruit, vibrations, usure rapide). Toujours vérifier avant installation.`,
  },

  quiz: [
    {
      q: 'Sur la fiche technique d\'une pompe, "NPSH_r = 3 m" signifie :',
      options: ['La pompe peut refouler jusqu\'à 3 m de hauteur', 'La marge anti-cavitation requise est de 3 m', 'Le débit nominal est de 3 m³/h', 'La puissance absorbée est de 3 kW'],
      answer: 1,
      correction: 'NPSH_r (Net Positive Suction Head required) est la dépression minimale requise côté aspiration pour éviter la cavitation. Le NPSH disponible de l\'installation doit être supérieur au NPSH requis + 0,5 m de sécurité.',
    },
    {
      q: 'Un groupe froid indique COP = 3,8 et P_élec = 5 kW. Quelle est sa puissance frigorifique ?',
      options: ['0,76 kW', '1,32 kW', '19 kW', '8,8 kW'],
      answer: 2,
      correction: 'P_f = COP × P_élec = 3,8 × 5 = 19 kW.',
    },
    {
      q: 'L\'indice de protection IP 65 signifie :',
      options: ['Protégé contre les projections d\'eau (6) et la poussière (5)', 'Étanche à la poussière (6) et aux jets d\'eau basse pression (5)', 'Tension de 650 V', 'Classe d\'isolation F'],
      answer: 1,
      correction: 'IP XY : X = protection solides (6 = totalement étanche aux poussières), Y = protection liquides (5 = jets d\'eau). IP 65 est un standard courant pour les équipements industriels extérieurs.',
    },
    {
      q: 'Pour un moteur $P = 5{,}5\\;\\text{kW}$ alimenté en 400 V triphasé, $\\cos\\varphi = 0{,}85$, $\\eta = 0{,}88$. Le courant absorbé est :',
      options: ['7,9 A', '9,0 A', '13,1 A', '10,6 A'],
      answer: 3,
      correction: 'La puissance électrique absorbée tient compte du rendement : P_absorbée = P/η = 5500/0,88 = 6250 W. Le courant est I = P_absorbée/(√3·U·cosφ) = 6250/(1,732×400×0,85) = 6250/588,9 ≈ 10,6 A.',
    },
    {
      q: 'Sur une courbe de pompe, le "point de fonctionnement à débit nul" ($Q = 0$) est aussi appelé :',
      options: ['Point de rendement maximal', 'HMT à vanne fermée', 'Point d\'arrêt hydraulique', 'NPSH critique'],
      answer: 1,
      correction: 'La HMT à Q=0 (vanne de refoulement fermée) est appelée "HMT à vanne fermée" ou H_0. C\'est la pression maximale que peut fournir la pompe, à ne pas dépasser pour protéger les équipements.',
    },
    {
      q: 'La fiche technique d\'un contacteur indique la catégorie "AC-3". Cela signifie :',
      options: ['Courant nominal de 3 A', 'Convient pour les moteurs à cage en démarrage direct', 'Tension d\'alimentation 3 V CA', 'Protection contre les surcharges'],
      answer: 1,
      correction: 'La catégorie AC-3 (selon IEC 60947) désigne l\'utilisation avec des moteurs asynchrones à cage : fermeture sur rotor bloqué, ouverture en marche. C\'est la catégorie standard pour le démarrage direct (DOL).',
    },
    {
      q: 'Le rendement PCI d\'une chaudière est 92 %. Si la puissance utile souhaitée est 100 kW, la puissance calorifique du combustible consommé est :',
      options: ['92 kW', '108,7 kW', '100 kW', '8 kW'],
      answer: 1,
      correction: 'η = P_utile / P_combustible ⟹ P_combustible = P_utile / η = 100 / 0,92 ≈ 108,7 kW.',
    },
    {
      q: 'Dans un catalogue de pompes centrifuges, la "courbe de réseau" représente :',
      figure: {
        svg: `
          <svg viewBox="0 0 340 190" role="img" aria-labelledby="qdt-reseau-title qdt-reseau-desc">
            <title id="qdt-reseau-title">Courbe de pompe et courbe de reseau superposees</title>
            <desc id="qdt-reseau-desc">Dans un meme repere, une courbe decroissante represente ce que la pompe peut fournir et une courbe croissante ce que le circuit reclame en pertes de charge. Leur intersection definit le point de fonctionnement reel de l'installation.</desc>
            <line class="axis" x1="55" y1="155" x2="310" y2="155"></line>
            <line class="axis" x1="55" y1="170" x2="55" y2="30"></line>
            <path class="curve-main" fill="none" d="M 55 45 L 90 48 L 125 55 L 160 67 L 195 84 L 230 106 L 265 133"></path>
            <path class="curve-main" fill="none" stroke="var(--secondary)" d="M 55 145 L 90 143 L 125 137 L 160 126 L 195 111 L 230 92 L 265 68"></path>
            <circle class="plot-point" cx="182" cy="99" r="8"></circle>
            <line class="guide-line" x1="182" y1="155" x2="182" y2="99"></line>
            <line class="guide-line" x1="55" y1="99" x2="182" y2="99"></line>
            <text class="annotation-label" x="200" y="146">pompe : l\'offre</text>
            <text class="annotation-label" x="200" y="52" fill="var(--secondary)">réseau : la demande</text>
            <text class="tick-label" x="100" y="94">point de fonctionnement</text>
            <text class="axis-label" x="310" y="172" text-anchor="end">Q</text>
            <text class="axis-label" x="55" y="24">H</text>
          </svg>
        `,
        caption: 'Deux objets distincts : la pompe est une offre décroissante, le réseau une demande croissante.'
      },
      options: ['Les performances de la pompe à différents débits', 'Les pertes de charge de l\'installation en fonction du débit', 'La puissance électrique absorbée par le moteur', 'Le NPSH disponible'],
      answer: 1,
      correction: 'La courbe de réseau représente les pertes de charge hydrauliques (tuyauteries, vannes, échangeurs) en fonction du débit. Le point de fonctionnement est à son intersection avec la courbe pompe.',
    },
    {
      q: 'Un disjoncteur est calibré à $I_n = 32\\;\\text{A}$. Son courant de déclenchement instantané (magnétique) pour la catégorie B est :',
      options: ['32 A', '3,2 A', '160 A (×5) à 256 A (×8)', '3200 A'],
      answer: 2,
      correction: 'La catégorie B déclenche instantanément pour des courants de 3×In à 5×In. Pour In=32 A : déclenchement entre 96 A et 160 A. La catégorie C (courants de 5 à 10×In) est pour les charges inductives (moteurs).',
    },
    {
      q: 'Sur une fiche technique de panneau solaire, "Pmax = 400 Wc" signifie :',
      figure: {
        svg: `
          <svg viewBox="0 0 360 170" role="img" aria-labelledby="qdt-wc-title qdt-wc-desc">
            <title id="qdt-wc-title">Etiquette de panneau photovoltaique en conditions STC</title>
            <desc id="qdt-wc-desc">Une etiquette de panneau photovoltaique indique une puissance crete de 400 watts-crete, mesuree dans les conditions normalisees STC : un eclairement de 1000 watts par metre carre, une temperature de cellule de 25 degres et un coefficient d'air masse de 1,5. Une mention rappelle que ces conditions ne sont presque jamais reunies en exploitation reelle.</desc>
            <rect x="25" y="25" width="200" height="120" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 40%, var(--border))" stroke-width="2"></rect>
            <text class="annotation-label" x="40" y="48">Plaque signalétique</text>
            <line class="grid-line" x1="40" y1="58" x2="210" y2="58"></line>
            <text class="axis-label" x="40" y="80">Pmax = 400 Wc</text>
            <text class="tick-label" x="40" y="100">conditions STC :</text>
            <text class="tick-label" x="40" y="116">G = 1000 W/m²  —  25 °C</text>
            <text class="tick-label" x="40" y="132">AM 1,5</text>
            <line class="graph-line" x1="235" y1="85" x2="270" y2="85" stroke="var(--secondary)"></line>
            <polygon points="280,85 262,78 262,92" fill="var(--secondary)"></polygon>
            <text class="annotation-label" x="290" y="70" text-anchor="middle" fill="var(--secondary)">en vrai</text>
            <text class="tick-label" x="290" y="90" text-anchor="middle">souvent</text>
            <text class="tick-label" x="290" y="106" text-anchor="middle">moins</text>
            <text class="tick-label" x="25" y="162">« c » = conditions d\'essai normalisées</text>
          </svg>
        `,
        caption: 'Le watt-crête est une valeur d\'essai normalisée, pas une puissance délivrée en exploitation.'
      },
      options: ['La puissance maximale en conditions réelles', 'La puissance crête dans les conditions standard de test (STC)', 'La consommation du panneau', 'La résistance de court-circuit'],
      answer: 1,
      correction: 'Wc (watt-crête) est la puissance mesurée dans les conditions standard de test STC : irradiance 1000 W/m², température de cellule 25°C, AM 1,5. En conditions réelles, la puissance est souvent 10 à 20% inférieure.',
    },
    {
      q: 'Une pompe de transfert d\'acide sulfurique affiche $\\text{NPSH}_r = 4\\;\\text{m}$ sur sa fiche technique. L\'installation offre un NPSH disponible de 3,2 m. Que se passe-t-il ?',
      options: ['La pompe fonctionne normalement, la marge est suffisante', 'Risque de cavitation : le NPSH disponible est inférieur au NPSH requis', 'Le débit sera automatiquement divisé par deux', 'Cela ne concerne que les moteurs électriques, pas les pompes'],
      answer: 1,
      correction: 'La condition de sécurité est NPSH_dispo ≥ NPSH_r + 0,5 m. Ici 3,2 m < 4 m (et encore plus loin de 4,5 m) : la pompe risque de caviter, ce qui use prématurément la roue et génère du bruit.',
    },
    {
      q: 'Une pompe de transfert d\'une solution de traitement de surface (assimilée à de l\'eau) fonctionne à $Q = 7{,}2\\;\\text{m}^3/\\text{h}$, $H = 25\\;\\text{m}$, avec un rendement $\\eta = 60\\%$. Sa puissance absorbée est environ :',
      options: ['0,82 kW', '1,23 kW', '0,49 kW', '1,64 kW'],
      answer: 0,
      correction: 'Q = 7,2/3600 = 0,002 m³/s. P_utile = 1000 × 9,81 × 0,002 × 25 = 490,5 W. P_abs = 490,5 / 0,6 ≈ 817,5 W ≈ 0,82 kW.',
    },
    {
      q: 'Un groupe froid refroidit un réacteur chimique exothermique. Son COP est de 3,6 et il consomme $P_{\\text{élec}} = 4\\;\\text{kW}$. La puissance frigorifique extraite est :',
      options: ['14,4 kW', '7,2 kW', '0,9 kW', '10,8 kW'],
      answer: 0,
      correction: 'P_f = COP × P_élec = 3,6 × 4 = 14,4 kW.',
    },
    {
      q: 'Un capteur de pH installé en ambiance chimique corrosive doit être indice IP 67. Cela signifie :',
      options: ['Étanche à la poussière et à l\'immersion temporaire', 'Résiste aux produits chimiques quelle que soit leur nature', 'Tension d\'alimentation de 67 V', 'Fonctionne jusqu\'à 67°C'],
      answer: 0,
      correction: 'IP 67 : 6 = totalement étanche aux poussières, 7 = protégé contre les effets de l\'immersion temporaire (jusqu\'à 1 m, 30 min). L\'indice IP ne renseigne pas sur la résistance chimique, qui relève d\'une autre caractéristique (matériau du boîtier).',
    },
    {
      q: 'Un moteur d\'agitateur de cuve de réaction chimique développe $P = 3\\;\\text{kW}$, alimenté en 400 V triphasé, $\\cos\\varphi = 0{,}83$, rendement $\\eta = 87\\%$. Le courant absorbé est environ :',
      options: ['6,0 A', '5,2 A', '7,2 A', '4,3 A'],
      answer: 0,
      correction: 'P_absorbée = P/η = 3000/0,87 ≈ 3448 W. I = P_absorbée/(√3×U×cosφ) = 3448/(1,732×400×0,83) ≈ 6,0 A.',
    },
    {
      q: 'La catégorie AC-1 des contacteurs/disjoncteurs convient pour :',
      options: ['Les charges résistives ou faiblement inductives (fours, résistances chauffantes)', 'Les moteurs à cage en démarrage direct', 'Les condensateurs de compensation d\'énergie réactive', 'Les moteurs à bagues'],
      answer: 0,
      correction: 'AC-1 : charges non inductives ou faiblement inductives (fours électriques, résistances). AC-3, elle, désigne les moteurs asynchrones à cage en démarrage direct.',
    },
    {
      q: 'Un générateur de vapeur de process a un rendement PCI de 88 % et fournit une puissance utile de 150 kW. La puissance calorifique du combustible consommé est environ :',
      options: ['170,5 kW', '132 kW', '150 kW', '17 kW'],
      answer: 0,
      correction: 'P_combustible = P_utile/η = 150/0,88 ≈ 170,5 kW.',
    },
    {
      q: 'Un panneau photovoltaïque de $P_{\\max} = 320\\;\\text{Wc}$ a un rendement de 19 %. Sa surface active est environ :',
      options: ['1,68 m²', '1,90 m²', '3,20 m²', '0,60 m²'],
      answer: 0,
      correction: 'S = P_max/(G × η) avec G = 1000 W/m² (STC) : S = 320/(1000 × 0,19) ≈ 1,68 m².',
    },
    {
      q: 'Un disjoncteur de catégorie C (charges inductives/moteurs) est calibré à $I_n = 20\\;\\text{A}$. Son courant de déclenchement magnétique instantané se situe entre :',
      options: ['100 A (×5) et 200 A (×10)', '20 A et 40 A', '60 A et 100 A (catégorie B, ×3 à ×5)', '200 A et 400 A'],
      answer: 0,
      correction: 'La catégorie C déclenche entre 5×In et 10×In. Pour In = 20 A : entre 100 A et 200 A.',
    },
    {
      q: 'Sur l\'abaque d\'une pompe, le point de fonctionnement demandé $(Q, H)$ se situe AU-DESSUS de la courbe HMT(Q) du modèle envisagé. Que faut-il en conclure ?',
      options: ['Le modèle ne peut pas fournir cette hauteur à ce débit : il faut choisir un modèle plus puissant', 'Le modèle convient, avec une grande marge de sécurité', 'Il suffit de réduire le débit demandé de moitié', 'Cela n\'a pas d\'importance : le prix est le seul critère de choix'],
      answer: 0,
      correction: 'Un point situé au-dessus de la courbe HMT(Q) est hors de la plage que la pompe peut fournir : à ce débit, elle ne délivrera pas la hauteur demandée. Il faut sélectionner un modèle dont la courbe passe au-dessus (ou exactement sur) le point demandé.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['rendement_pompe', 'COP_froid', 'courant_moteur', 'rendement_PCI', 'panneau_solaire_surface', 'NPSH_disponible']);

      if (type === 'rendement_pompe') {
        const Q_m3h = pick([5, 8, 10, 12, 15]);
        const H = pick([20, 25, 30, 35, 40]);
        const eta = pick([0.55, 0.60, 0.65, 0.70]);
        const rho = 1000;
        const g = 9.81;
        const P_utile = rho * g * (Q_m3h / 3600) * H;
        const P_abs = P_utile / eta;
        const eta_str = fr(eta);
        const Q_over_3600_str = fr(Q_m3h / 3600, 5);
        const context = pick(['pompe de distribution d\'eau potable', 'groupe hydrophore', 'pompe de circulation chauffage']);
        return {
          statement: `Une ${context} fonctionne au point $Q = ${Q_m3h}\\;\\text{m}^3/\\text{h}$, $H = ${H}\\;\\text{m}$. Son rendement est $\\eta = ${(eta*100).toFixed(0)}\\%$.<br/><br/>Calculez la puissance absorbée $P_{\\text{abs}}$ en W (arrondi à l'unité).<br/>($P_{\\text{utile}} = \\rho g Q H$, $\\rho_{\\text{eau}} = 1000\\;\\text{kg/m}^3$, $g = 9{,}81\\;\\text{m/s}^2$)`,
          answer: Math.round(P_abs),
          tolerance: 20,
          unit: 'W',
          hint: `Convertir $Q$ en m³/s, calculer $P_{\\text{utile}} = \\rho g Q H$, puis $P_{\\text{abs}} = P_{\\text{utile}}/\\eta$.`,
          solution: `$Q = ${Q_m3h}/3600 = ${Q_over_3600_str}\\;\\text{m}^3/\\text{s}$<br/>$P_{\\text{utile}} = 1000 \\times 9{,}81 \\times ${Q_over_3600_str} \\times ${H} = ${P_utile.toFixed(0)}\\;\\text{W}$<br/>$P_{\\text{abs}} = ${P_utile.toFixed(0)} / ${eta_str} = ${Math.round(P_abs)}\\;\\text{W}$`,
        };
      }

      if (type === 'COP_froid') {
        const COP = pick([3.2, 3.5, 3.8, 4.0, 4.5]);
        const P_elec = pick([2, 3, 4, 5, 6, 8]);
        const P_f = parseFloat((COP * P_elec).toFixed(1));
        const COP_str = fr(COP);
        const P_f_str = fr(P_f);
        const context = pick(['split mural de bureau', 'groupe froid de production froide', 'pompe à chaleur air-eau']);
        return {
          statement: `Un ${context} a un COP de $${COP_str}$ et consomme $P_{\\text{élec}} = ${P_elec}\\;\\text{kW}$.<br/><br/>Calculez la puissance frigorifique $P_f$ en kW.`,
          answer: P_f,
          tolerance: 0.1,
          unit: 'kW',
          hint: `$\\text{COP} = P_f / P_{\\text{élec}}$ → $P_f = \\text{COP} \\times P_{\\text{élec}}$.`,
          solution: `$P_f = \\text{COP} \\times P_{\\text{élec}} = ${COP_str} \\times ${P_elec} = ${P_f_str}\\;\\text{kW}$`,
        };
      }

      if (type === 'courant_moteur') {
        const P_kW = pick([1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11]);
        const U = 400;
        const cosfi = pick([0.82, 0.84, 0.86, 0.88]);
        const eta_m = pick([0.86, 0.88, 0.90, 0.92]);
        const I = (P_kW * 1000) / (Math.sqrt(3) * U * cosfi * eta_m);
        const P_kW_str = fr(P_kW);
        const cosfi_str = fr(cosfi);
        const eta_m_str = fr(eta_m);
        const denom_str = fr(Math.sqrt(3) * 400 * cosfi * eta_m, 1);
        const context = pick(['pompe centrifuge', 'ventilateur CVC', 'compresseur d\'air']);
        return {
          statement: `Un moteur entraîne un ${context}. Puissance mécanique : $P = ${P_kW_str}\\;\\text{kW}$, tension : $U = 400\\;\\text{V}$ triphasé, $\\cos\\varphi = ${cosfi_str}$, rendement moteur $\\eta = ${(eta_m*100).toFixed(0)}\\%$.<br/><br/>Calculez le courant absorbé $I_n$ en ampères (arrondi à 0,1 A).<br/>($P = \\sqrt{3} \\cdot U \\cdot I \\cdot \\cos\\varphi \\cdot \\eta$)`,
          answer: parseFloat(I.toFixed(1)),
          tolerance: 0.2,
          unit: 'A',
          hint: `Isoler $I = \\dfrac{P}{\\sqrt{3} \\cdot U \\cdot \\cos\\varphi \\cdot \\eta}$.`,
          solution: `$I = \\dfrac{${P_kW_str} \\times 10^3}{\\sqrt{3} \\times 400 \\times ${cosfi_str} \\times ${eta_m_str}} = \\dfrac{${P_kW*1000}}{${denom_str}} \\approx ${fr(I, 1)}\\;\\text{A}$`,
        };
      }

      if (type === 'rendement_PCI') {
        const P_utile_kW = pick([50, 80, 100, 120, 150, 200]);
        const rendement_PCI = pick([0.85, 0.88, 0.90, 0.92]);
        const P_comb = P_utile_kW / rendement_PCI;
        const context = pick(['chaudière industrielle au gaz naturel', 'générateur de vapeur de process', 'chaudière biomasse']);
        return {
          statement: `Une ${context} a un rendement PCI de $\\eta = ${(rendement_PCI * 100).toFixed(0)}\\%$ et fournit une puissance utile de $P_{\\text{utile}} = ${P_utile_kW}\\;\\text{kW}$.<br/><br/>Calculez la puissance calorifique du combustible consommé $P_{\\text{comb}}$ en kW (arrondi à 0,1 kW).`,
          answer: parseFloat(P_comb.toFixed(1)),
          tolerance: 0.5,
          unit: 'kW',
          hint: `$\\eta = P_{\\text{utile}}/P_{\\text{comb}}$.`,
          solution: `$P_{\\text{comb}} = P_{\\text{utile}}/\\eta = ${P_utile_kW}/${fr(rendement_PCI)} \\approx ${fr(P_comb, 1)}\\;\\text{kW}$`,
        };
      }

      if (type === 'panneau_solaire_surface') {
        const P_max_Wc = pick([300, 320, 350, 375, 400, 450]);
        const rendement_pv = pick([0.18, 0.19, 0.20, 0.21, 0.22]);
        const G = 1000;
        const S = P_max_Wc / (G * rendement_pv);
        const context = pick(['panneau photovoltaïque monocristallin', 'module solaire de toiture', 'panneau photovoltaïque polycristallin']);
        return {
          statement: `Un ${context} a une puissance crête $P_{\\max} = ${P_max_Wc}\\;\\text{Wc}$ et un rendement de $${(rendement_pv * 100).toFixed(0)}\\%$.<br/><br/>Calculez la surface active du panneau en m² (conditions STC, $G = 1000\\;\\text{W/m}^2$, arrondi à 0,01 m²).`,
          answer: parseFloat(S.toFixed(2)),
          tolerance: 0.02,
          unit: 'm²',
          hint: `$\\eta = P_{\\max}/(G \\times S)$.`,
          solution: `$S = P_{\\max}/(G \\times \\eta) = ${P_max_Wc}/(1000 \\times ${fr(rendement_pv)}) \\approx ${fr(S, 2)}\\;\\text{m}^2$`,
        };
      }

      // NPSH_disponible
      const h_atm = pick([10.0, 10.2, 10.3]);
      const h_v = pick([0.2, 0.3, 0.4]);
      const h_s = pick([1, 1.5, 2, 2.5, 3]);
      const Ja = pick([0.3, 0.5, 0.8, 1]);
      const NPSH_dispo = h_atm - h_v - h_s - Ja;
      const context = pick(['pompe de reprise en aspiration', 'pompe de forage peu profond', 'pompe de transfert en aspiration']);
      return {
        statement: `Une ${context} a les caractéristiques suivantes : hauteur atmosphérique $h_{atm} = ${fr(h_atm, 1)}\\;\\text{m}$, perte due à la tension de vapeur $h_v = ${fr(h_v, 1)}\\;\\text{m}$, hauteur d'aspiration $h_s = ${fr(h_s, 1)}\\;\\text{m}$, pertes de charge en aspiration $J_a = ${fr(Ja, 1)}\\;\\text{m}$.<br/><br/>Calculez le NPSH disponible en mètres (arrondi à 0,1 m).<br/>($\\text{NPSH}_{\\text{dispo}} = h_{atm} - h_v - h_s - J_a$)`,
        answer: parseFloat(NPSH_dispo.toFixed(1)),
        tolerance: 0.1,
        unit: 'm',
        hint: `Additionner/soustraire directement les quatre termes.`,
        solution: `$\\text{NPSH}_{\\text{dispo}} = ${fr(h_atm, 1)} - ${fr(h_v, 1)} - ${fr(h_s, 1)} - ${fr(Ja, 1)} = ${fr(NPSH_dispo, 1)}\\;\\text{m}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en bureau d'études CVC doit sélectionner une pompe de circulation pour un réseau de chauffage urbain. Les caractéristiques du réseau sont :<br/><br/>
• Débit requis : $Q = 20\\;\\text{m}^3/\\text{h}$<br/>
• Pertes de charge du réseau : $\\Delta H = 0{,}15 \\times Q^2$ (m, avec Q en m³/h)<br/>
• Température de l'eau : 80°C ($\\rho = 971\\;\\text{kg/m}^3$)<br/><br/>
Le catalogue Grundfos propose les pompes suivantes :<br/><br/>
| Modèle | Q_max (m³/h) | H_max (m) | P_abs (kW) | η_pompe (%) |
|--------|-------------|-----------|------------|-------------|
| TP 50-120 | 22 | 55 | 4,0 | 62 |
| TP 50-180 | 26 | 80 | 7,5 | 70 |
| TP 65-150 | 35 | 65 | 8,5 | 68 |`,
    figure: {
      svg: `
        <svg viewBox="0 0 460 250" role="img" aria-labelledby="pb-donnees-title pb-donnees-desc">
          <title id="pb-donnees-title">Courbe de reseau et hauteurs maximales des trois pompes du catalogue</title>
          <desc id="pb-donnees-desc">Un repere avec le debit en metres cubes par heure en abscisse et la hauteur manometrique en metres en ordonnee. Une parabole croissante represente les pertes de charge du reseau, qui atteignent 60 metres au debit requis de 20 metres cubes par heure. Trois traits horizontaux reperent les hauteurs maximales des pompes TP 50-120 a 55 metres, TP 65-150 a 65 metres et TP 50-180 a 80 metres : seules les deux dernieres passent au-dessus du point de fonctionnement.</desc>

          <line class="grid-line" x1="70" y1="180" x2="420" y2="180"></line>
          <line class="grid-line" x1="70" y1="150" x2="420" y2="150"></line>
          <line class="grid-line" x1="70" y1="120" x2="420" y2="120"></line>
          <line class="grid-line" x1="70" y1="90" x2="420" y2="90"></line>
          <line class="grid-line" x1="70" y1="60" x2="420" y2="60"></line>
          <line class="axis" x1="70" y1="210" x2="430" y2="210"></line>
          <line class="axis" x1="70" y1="220" x2="70" y2="40"></line>

          <path class="curve-main" fill="none" d="M 70 210 L 105 208 L 140 202 L 175 192 L 210 178 L 245 160 L 280 138 L 315 112 L 350 82 L 385 48"></path>
          <text class="annotation-label" x="318" y="72" fill="var(--primary)">Réseau ΔH = 0,15 Q²</text>

          <line class="graph-line" x1="70" y1="120" x2="290" y2="120" stroke="var(--secondary)"></line>
          <text class="tick-label" x="296" y="124" fill="var(--secondary)">TP 50-120 — Hmax 55 m</text>
          <line class="graph-line" x1="70" y1="90" x2="360" y2="90" stroke="var(--accent)"></line>
          <text class="tick-label" x="360" y="94" fill="var(--accent)">TP 65-150 — 65 m</text>
          <line class="graph-line" x1="70" y1="60" x2="330" y2="60" stroke="color-mix(in srgb, var(--secondary) 50%, var(--accent))"></line>
          <text class="tick-label" x="336" y="52" fill="color-mix(in srgb, var(--secondary) 50%, var(--accent))">TP 50-180 — 80 m</text>

          <line class="guide-line" x1="210" y1="210" x2="210" y2="108"></line>
          <line class="guide-line" x1="70" y1="108" x2="210" y2="108"></line>
          <circle class="plot-point" cx="210" cy="108" r="7"></circle>
          <text class="annotation-label" x="150" y="102">point requis</text>
          <text class="annotation-label" x="216" y="230">Q = 20 m³/h → ΔH = 60 m</text>

          <text class="tick-label" x="62" y="184" text-anchor="end">20</text>
          <text class="tick-label" x="62" y="154" text-anchor="end">40</text>
          <text class="tick-label" x="62" y="124" text-anchor="end">55</text>
          <text class="tick-label" x="62" y="94" text-anchor="end">65</text>
          <text class="tick-label" x="62" y="64" text-anchor="end">80</text>
          <text class="tick-label" x="70" y="226" text-anchor="middle">0</text>
          <text class="axis-label" x="430" y="232" text-anchor="end">Q (m³/h)</text>
          <text class="axis-label" x="70" y="32">HMT (m)</text>
        </svg>
      `,
      caption: 'Le point requis (20 m³/h ; 60 m) élimine d\'emblée la TP 50-120, dont la hauteur maximale plafonne à 55 m.'
    },
    tasks: [
      'Calculer la perte de charge du réseau $\\Delta H$ pour $Q = 20\\;\\text{m}^3/\\text{h}$. C\'est le point de fonctionnement cible.',
      'Parmi les trois pompes du catalogue, laquelle peut couvrir le point $(Q = 20\\;\\text{m}^3/\\text{h}, H = \\Delta H)$ ? Justifier.',
      'Calculer la puissance hydraulique utile $P_{\\text{utile}} = \\rho g Q H$ (en W) pour le modèle sélectionné.',
      'Calculer le rendement global de l\'installation $\\eta_{\\text{global}} = P_{\\text{utile}} / P_{\\text{absorbée}}$ et le comparer à la valeur catalogue.',
    ],
    solutions: [
      `$\\Delta H = 0{,}15 \\times 20^2 = 0{,}15 \\times 400 = 60\\;\\text{m}$<br/>Le point de fonctionnement cible est $(Q = 20\\;\\text{m}^3/\\text{h}, H = 60\\;\\text{m})$.`,
      `Rappel : $H_{\\max}$ (HMT maximale, colonne « H_max » du catalogue) est la hauteur manométrique totale atteignable à débit nul, vanne de refoulement fermée — c'est la valeur la plus haute que peut fournir la pompe ; au-delà, aucun débit n'est possible, donc $H_{\\max}$ agit comme un plafond absolu de la courbe HMT(Q).<br/><br/>• TP 50-120 : $Q_{\\max} = 22\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 55\\;\\text{m}$. La HMT maximale (55 m) est insuffisante pour les 60 m requis → <strong>inadaptée</strong>.<br/>• TP 50-180 : $Q_{\\max} = 26\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 80\\;\\text{m}$. Le point (20 m³/h, 60 m) est dans la plage de fonctionnement → <strong>convient</strong>.<br/>• TP 65-150 : $Q_{\\max} = 35\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 65\\;\\text{m}$. Convient aussi, mais surdimensionnée.`,
      `$P_{\\text{utile}} = \\rho g Q H = 971 \\times 9{,}81 \\times \\dfrac{20}{3600} \\times 60$<br/>$= 971 \\times 9{,}81 \\times 0{,}00556 \\times 60 = 971 \\times 9{,}81 \\times 0{,}333$<br/>$\\approx 3172\\;\\text{W} \\approx 3{,}17\\;\\text{kW}$`,
      `$\\eta_{\\text{global}} = P_{\\text{utile}} / P_{\\text{abs}} = 3172 / 7500 \\approx 0{,}423 = 42{,}3\\%$<br/>Le catalogue annonce $\\eta = 70\\%$ au point nominal. Le rendement de 42% s'explique par le fait que la pompe est utilisée hors de son point nominal (70% à Q=26 m³/h, pas à Q=20 m³/h). En pratique, on lit le rendement réel sur la courbe de performance au point $(20\\;\\text{m}^3/\\text{h}, 60\\;\\text{m})$.`,
    ],
    finalAnswer: 'Pompe sélectionnée : TP 50-180. Point de fonctionnement : (20 m³/h, 60 m). Puissance utile : 3,17 kW. Rendement effectif au point de fonctionnement : à lire sur la courbe de performance détaillée.',
  },

  evaluation: {
    title: 'Évaluation — Données Techniques & Catalogues',
    duration: '25 min',
    questions: [
      {
        statement: 'Une fiche technique de pompe indique $Q_n = 15\\;\\text{m}^3/\\text{h}$, $H_n = 28\\;\\text{m}$ et $\\eta_n = 65\\;\\%$. Calculer la puissance <strong>absorbée</strong> par le moteur (en W, arrondie à la dizaine).',
        figure: {
          svg: `
            <svg viewBox="0 0 340 160" role="img" aria-labelledby="ev-dt-title ev-dt-desc">
              <title id="ev-dt-title">Puissance absorbee et puissance hydraulique utile</title>
              <desc id="ev-dt-desc">Deux bandes de largeurs differentes representent la puissance absorbee par le moteur, la plus large, et la puissance hydraulique utile, plus etroite. Le rendement de 65 pour cent fait le lien entre les deux, et une fleche rappelle que l'on divise par le rendement pour remonter de l'utile a l'absorbe.</desc>
              <rect x="25" y="35" width="145" height="46" rx="6" fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 45%, var(--border))"></rect>
              <text class="annotation-label" x="97" y="56" text-anchor="middle">P absorbée = ?</text>
              <text class="tick-label" x="97" y="73" text-anchor="middle">au réseau électrique</text>
              <rect x="25" y="96" width="94" height="34" rx="6" fill="color-mix(in srgb, var(--accent) 24%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 46%, var(--border))"></rect>
              <text class="tick-label" x="72" y="117" text-anchor="middle">P utile = ρgQH</text>
              <line class="guide-line" x1="170" y1="58" x2="200" y2="58"></line>
              <line class="guide-line" x1="119" y1="113" x2="200" y2="113"></line>
              <text class="annotation-label" x="208" y="62">η = 65 %</text>
              <text class="tick-label" x="208" y="86">P abs = P utile / η</text>
              <text class="tick-label" x="208" y="106">on DIVISE :</text>
              <text class="tick-label" x="196" y="122">l\'absorbée est plus grande</text>
              <text class="tick-label" x="25" y="152">Q en m³/s avant d\'appliquer P utile = ρgQH</text>
            </svg>
          `,
          caption: 'Deux puissances distinctes : l\'utile sort de la pompe, l\'absorbée entre dans le moteur.'
        },
        type: 'numeric',
        answer: 1760,
        tolerance: 30,
        unit: 'W',
        points: 4,
        correction: 'Deux étapes, dans cet ordre.<br/><br/><strong>1. Puissance hydraulique utile</strong> — le débit doit être en m³/s :<br/><br/>$Q = \\dfrac{15}{3600} \\approx 4{,}167 \\times 10^{-3}\\;\\text{m}^3/\\text{s}$<br/>$P_{\\text{utile}} = \\rho g Q H = 1000 \\times 9{,}81 \\times 4{,}167\\times 10^{-3} \\times 28 \\approx 1145\\;\\text{W}$<br/><br/><strong>2. Remonter au moteur</strong> — on <em>divise</em> par le rendement :<br/><br/>$P_{\\text{abs}} = \\dfrac{P_{\\text{utile}}}{\\eta} = \\dfrac{1145}{0{,}65} \\approx \\mathbf{1760\\;\\text{W}} = 1{,}76\\;\\text{kW}$<br/><br/>Le sens de la division est le piège : la puissance absorbée est toujours <strong>supérieure</strong> à la puissance utile.',
      },
      {
        statement: 'Un climatiseur réversible affiche EER = 3,2 (mode froid) et COP = 4,0 (mode chaud), pour $P_{\\text{élec}} = 3\\;\\text{kW}$. Calculer la puissance <strong>frigorifique</strong> délivrée (en kW).',
        type: 'numeric',
        answer: 9.6,
        tolerance: 0.1,
        unit: 'kW',
        points: 3,
        correction: 'L\'EER et le COP sont des <strong>multiplicateurs</strong> de la puissance électrique consommée :<br/><br/>Mode froid : $P_f = \\text{EER} \\times P_{\\text{élec}} = 3{,}2 \\times 3 = \\mathbf{9{,}6\\;\\text{kW}}$<br/><br/>Mode chaud : $P_{\\text{chaud}} = \\text{COP} \\times P_{\\text{élec}} = 4{,}0 \\times 3 = 12\\;\\text{kW}$<br/><br/>Le COP dépasse le COP froid d\'une unité environ : en mode chauffage, la machine restitue aussi l\'énergie électrique du compresseur, en plus de la chaleur prélevée dehors.',
      },
      {
        statement: 'La fiche d\'un disjoncteur GV3P indique $I_{cu} = 50\\;\\text{kA}$. Que signifie ce paramètre et comment le choisir ?',
        type: 'multiple-choice',
        options: [
          'C\'est le pouvoir de coupure ultime : il doit être $\\geq$ au courant de court-circuit présumé de l\'installation',
          'C\'est le courant nominal du disjoncteur : il doit être égal au courant de service',
          'C\'est le courant de réglage thermique : il se règle selon la puissance du moteur',
          'C\'est le courant de fuite maximal admissible avant déclenchement différentiel',
        ],
        answer: 0,
        points: 4,
        correction: '$I_{cu}$ est le <strong>pouvoir de coupure ultime</strong> : le courant de court-circuit maximal que l\'appareil peut interrompre sans être détruit.<br/><br/>Règle de choix : si le courant de court-circuit présumé $I_{cc}$ au point d\'installation vaut 30 kA, il faut un disjoncteur tel que $I_{cu} \\geq 30\\;\\text{kA}$.<br/><br/>Sous-dimensionner $I_{cu}$ signifie que le disjoncteur <strong>explose au lieu de couper</strong> — risque d\'arc, d\'incendie et de non-protection de l\'installation. Ce paramètre n\'a rien à voir avec le courant nominal $I_n$, qui dimensionne l\'usage courant.',
      },
      {
        statement: 'Un panneau photovoltaïque de $P_{\\max} = 400\\;\\text{Wc}$ affiche un rendement de $21\\;\\%$. Calculer sa surface active (en m², 2 décimales). On prend l\'éclairement STC $G = 1000\\;\\text{W/m}^2$.',
        type: 'numeric',
        answer: 1.90,
        tolerance: 0.05,
        unit: 'm²',
        points: 3,
        correction: 'Le rendement est le rapport entre la puissance électrique produite et la puissance solaire reçue :<br/><br/>$\\eta = \\dfrac{P_{\\max}}{G \\times S}$<br/><br/>On isole la surface :<br/><br/>$S = \\dfrac{P_{\\max}}{G \\times \\eta} = \\dfrac{400}{1000 \\times 0{,}21} \\approx \\mathbf{1{,}90\\;\\text{m}^2}$<br/><br/>Ordre de grandeur à retenir : un panneau résidentiel moderne fait environ <strong>2 m² pour 400 Wc</strong>. Si ton résultat s\'écarte beaucoup de ça, c\'est probablement le rendement qui a été multiplié au lieu d\'être divisé.',
      },
    ],
  },
});
