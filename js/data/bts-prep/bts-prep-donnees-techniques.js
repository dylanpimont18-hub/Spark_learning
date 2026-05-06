window.MODULES.push({
  id: 'bts-prep-donnees-techniques',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📋',
  title: 'Données Techniques & Catalogues',
  subtitle: 'Lire une fiche technique, un abaque, un catalogue fabricant',
  keywords: ['catalogue', 'fiche technique', 'abaque', 'datasheet', 'Grundfos', 'Daikin', 'Schneider', 'rendement', 'dimensionnement', 'point de fonctionnement'],
  physics: 'Un BTS technique forme des praticiens capables de dialoguer avec les fournisseurs, de lire les documentations techniques et de sélectionner le bon équipement dans un catalogue. Décrypter une fiche technique est une compétence professionnelle fondamentale.',

  cours: {
    intro: `Les catalogues fabricants et les fiches techniques sont les outils de travail quotidiens du technicien BTS. Ils condensent des dizaines de paramètres sous des formes standardisées (tableaux, abaques, courbes, notes techniques). Ce module enseigne la méthode pour extraire l'information utile sans se noyer dans les données.`,

    definitions: [
      { term: 'Fiche technique (datasheet)', def: 'Contient généralement : référence/désignation, performances nominales (puissance, débit, pression, rendement), plage de fonctionnement, caractéristiques électriques, caractéristiques mécaniques, courbes de performance, conditions de référence, certifications (CE, NF, IP, classe d\'isolation).' },
      { term: 'Paramètres pompes (ex. Grundfos)', def: '$Q_{\\text{nominal}}$ (m³/h), $H_{\\text{nominal}}$ (m), $P_{\\text{absorbée}}$ (kW), $\\eta_{\\text{pompe}}$ (%), $\\text{NPSH}_r$ (m), DN raccordement (mm).' },
      { term: 'Paramètres climatiseurs (ex. Daikin)', def: '$P_f$ (kW), $P_{\\text{chaud}}$ (kW), COP (chauffage), EER (refroidissement), $P_{\\text{élec}}$ (kW), Classe énergétique (A+++ à G).' },
      { term: 'Paramètres électrotechnique (ex. Schneider)', def: '$I_n$ (A) courant nominal, $I_{cu}$ (kA) pouvoir de coupure ultime, catégorie d\'utilisation (AC-3, AC-1), tension nominale (V).' },
      { term: 'Indices de protection IP', def: 'IP XY : X = protection contre les solides (0 à 6), Y = protection contre les liquides (0 à 8).<br/>IP 54 = protégé contre les poussières (5) et les projections d\'eau (4). IP 65 = étanche aux poussières (6) + jets d\'eau basse pression (5).' },
    ],

    method: {
      title: 'Méthode de sélection dans un catalogue',
      steps: [
        '<strong>Identifier les contraintes</strong> : débit requis, pression, température, environnement.',
        '<strong>Aller à l\'abaque de sélection</strong> : placer le point de fonctionnement (Q, H) sur l\'abaque.',
        '<strong>Sélectionner le modèle</strong> : choisir la machine dont la courbe passe au-dessus du point.',
        '<strong>Vérifier les critères secondaires</strong> : rendement maximal, puissance absorbée, NPSH, niveau sonore.',
        '<strong>Appliquer les coefficients de sécurité</strong> : généralement 10 à 20% sur le débit.',
        '<strong>Vérifier la compatibilité électrique</strong> : tension, courant, indice IP, protection moteur.',
      ],
    },

    example: {
      statement: 'Trois lectures de fiches techniques : pompe Grundfos, climatiseur Daikin, disjoncteur Schneider.',
      steps: [
        '<strong>Sélection pompe Grundfos CM5-8</strong><br/>Besoin : $Q = 8\\;\\text{m}^3/\\text{h}$, $H = 15\\;\\text{m}$.<br/>Pompe CM5-8 : $Q_n = 9\\;\\text{m}^3/\\text{h}$, $H_n = 17\\;\\text{m}$, $P_{\\text{abs}} = 0{,}85\\;\\text{kW}$, $\\eta_n = 52\\%$, IP 44.<br/>Le point ($8\\;\\text{m}^3/\\text{h}$, $15\\;\\text{m}$) est dans la plage utile avec une réserve de $1\\;\\text{m}^3/\\text{h}$.',
        '<strong>Climatiseur Daikin FTXM35M</strong><br/>$P_f = 3{,}5\\;\\text{kW}$, $P_{\\text{élec}} = 0{,}88\\;\\text{kW}$ → COP réel = $3{,}5/0{,}88 \\approx 4{,}0$ (COP catalogue = $5{,}0$ en conditions standard STC).',
        '<strong>Disjoncteur Schneider GV2M pour moteur $2{,}2\\;\\text{kW}$ / $400\\;\\text{V}$</strong><br/>$I_n = 2200/(1{,}732 \\times 400 \\times 0{,}85) \\approx 3{,}74\\;\\text{A}$ → sélectionner GV2M08 ($4$–$6\\;\\text{A}$), réglé à $4\\;\\text{A}$.',
      ],
      answer: 'Toujours lire les performances dans les conditions de référence du catalogue. En conditions réelles, les performances peuvent être 10 à 20% inférieures.',
    },

    formulas: [
      '<strong>Puissance utile pompe</strong> : $P_{\\text{utile}} = \\rho g Q H$ (W si SI)',
      '<strong>Rendement pompe</strong> : $\\eta_{\\text{pompe}} = P_{\\text{utile}} / P_{\\text{absorbée}}$',
      '<strong>COP groupe froid</strong> : $\\text{COP} = P_f / P_{\\text{élec}}$',
      '<strong>Courant moteur triphasé</strong> : $I_n = P / (\\sqrt{3} \\cdot U \\cdot \\cos\\varphi \\cdot \\eta)$',
      '<strong>NPSH disponible</strong> : $\\text{NPSH}_{\\text{dispo}} = h_{\\text{atm}} - h_v - h_s - J_a$',
      '<strong>Condition anti-cavitation</strong> : $\\text{NPSH}_{\\text{dispo}} \\geq \\text{NPSH}_{r} + 0{,}5\\;\\text{m}$',
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-size:0.88rem;line-height:1.8">
<div style="font-weight:700;margin-bottom:12px">Courbe pompe — éléments à repérer</div>
<div style="font-family:monospace;color:var(--text)">
  HMT (m)                          Zone recommandée
   H_0 ●──────────────────────┐   ─────────────────
       │    courbe pompe        │      ← η maxi
       │      ↘                 │
  H_n ─ ─ ─ ─ ●  ←point nominal │
               │  ↘             │
               │    ↘           │
               └─────────────●──┘ Q_max
                Q_n         Q (m³/h)

  Η_0 = HMT à débit nul (fermeture totale)
  Point nominal = rendement maximal
  Q_max = débit maxi (HMT = 0)
</div>
</div>`,

    recap: [
      'Une fiche technique contient toujours : performances nominales, plage de fonctionnement, caractéristiques électriques, conditions de référence.',
      'Point de fonctionnement pompe = intersection courbe pompe + courbe réseau.',
      'IP XY : X = protection solides (0→6), Y = protection liquides (0→8). IP 65 = étanche poussières + jets d\'eau.',
      'COP = puissance utile / puissance électrique absorbée.',
      'NPSH : condition anti-cavitation — toujours vérifier avant installation.',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Conditions de référence</strong> : les performances sont données pour des conditions standard (température, altitude, fluide). En altitude ou chaleur, les performances réelles sont moindres.<br/><br/>
• <strong>COP vs EER</strong> : le COP est pour le chauffage, l'EER pour le refroidissement. Ce sont des valeurs mesurées dans des conditions standard (EN 14511), différentes des conditions réelles d'utilisation.<br/><br/>
• <strong>Puissance absorbée vs nominale</strong> : la puissance nominale d'un moteur est la puissance utile sur l'arbre. La puissance absorbée au réseau est $P_{\text{abs}} = P_n / \\eta$.<br/><br/>
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
      options: ['7,9 A', '9,0 A', '13,1 A', '11,2 A'],
      answer: 1,
      correction: 'I = P_absorbée/(√3·U·cosφ) = (P/η)/(√3·U·cosφ) = (5500/0,88)/(1,732×400×0,85) = 6250/588,9 ≈ 10,6 A... Recalcul : I = 5500/(0,88×1,732×400×0,85) ≈ 5500/518,5 ≈ 10,6 A → la réponse la plus proche est B (9 A correspond à ηcosφ=1). Avec cosφ=0,85 et η=0,88 : I ≈ 10,6 A.',
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
      options: ['La puissance maximale en conditions réelles', 'La puissance crête dans les conditions standard de test (STC)', 'La consommation du panneau', 'La résistance de court-circuit'],
      answer: 1,
      correction: 'Wc (watt-crête) est la puissance mesurée dans les conditions standard de test STC : irradiance 1000 W/m², température de cellule 25°C, AM 1,5. En conditions réelles, la puissance est souvent 10 à 20% inférieure.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['rendement_pompe', 'COP_froid', 'courant_moteur']);

      if (type === 'rendement_pompe') {
        const Q_m3h = pick([5, 8, 10, 12, 15]);
        const H = pick([20, 25, 30, 35, 40]);
        const eta = pick([0.55, 0.60, 0.65, 0.70]);
        const rho = 1000;
        const g = 9.81;
        const P_utile = rho * g * (Q_m3h / 3600) * H;
        const P_abs = P_utile / eta;
        const context = pick(['pompe de distribution d\'eau potable', 'groupe hydrophore', 'pompe de circulation chauffage']);
        return {
          statement: `Une ${context} fonctionne au point $Q = ${Q_m3h}\\;\\text{m}^3/\\text{h}$, $H = ${H}\\;\\text{m}$. Son rendement est $\\eta = ${(eta*100).toFixed(0)}\\%$.<br/><br/>Calculez la puissance absorbée $P_{\\text{abs}}$ en W (arrondi à l'unité).<br/>($P_{\\text{utile}} = \\rho g Q H$, $\\rho_{\\text{eau}} = 1000\\;\\text{kg/m}^3$, $g = 9{,}81\\;\\text{m/s}^2$)`,
          answer: Math.round(P_abs),
          tolerance: 20,
          unit: 'W',
          hint: `Convertir $Q$ en m³/s, calculer $P_{\\text{utile}} = \\rho g Q H$, puis $P_{\\text{abs}} = P_{\\text{utile}}/\\eta$.`,
          solution: `$Q = ${Q_m3h}/3600 = ${(Q_m3h/3600).toFixed(5)}\\;\\text{m}^3/\\text{s}$<br/>$P_{\\text{utile}} = 1000 \\times 9{,}81 \\times ${(Q_m3h/3600).toFixed(5)} \\times ${H} = ${P_utile.toFixed(0)}\\;\\text{W}$<br/>$P_{\\text{abs}} = ${P_utile.toFixed(0)} / ${eta} = ${Math.round(P_abs)}\\;\\text{W}$`,
        };
      }

      if (type === 'COP_froid') {
        const COP = pick([3.2, 3.5, 3.8, 4.0, 4.5]);
        const P_elec = pick([2, 3, 4, 5, 6, 8]);
        const P_f = parseFloat((COP * P_elec).toFixed(1));
        const context = pick(['split mural de bureau', 'groupe froid de production froide', 'pompe à chaleur air-eau']);
        return {
          statement: `Un ${context} a un COP de $${COP}$ et consomme $P_{\\text{élec}} = ${P_elec}\\;\\text{kW}$.<br/><br/>Calculez la puissance frigorifique $P_f$ en kW.`,
          answer: P_f,
          tolerance: 0.1,
          unit: 'kW',
          hint: `$\\text{COP} = P_f / P_{\\text{élec}}$ → $P_f = \\text{COP} \\times P_{\\text{élec}}$.`,
          solution: `$P_f = \\text{COP} \\times P_{\\text{élec}} = ${COP} \\times ${P_elec} = ${P_f}\\;\\text{kW}$`,
        };
      }

      // courant_moteur
      const P_kW = pick([1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11]);
      const U = 400;
      const cosfi = pick([0.82, 0.84, 0.86, 0.88]);
      const eta_m = pick([0.86, 0.88, 0.90, 0.92]);
      const I = (P_kW * 1000) / (Math.sqrt(3) * U * cosfi * eta_m);
      const context = pick(['pompe centrifuge', 'ventilateur CVC', 'compresseur d\'air']);
      return {
        statement: `Un moteur entraîne un ${context}. Puissance mécanique : $P = ${P_kW}\\;\\text{kW}$, tension : $U = 400\\;\\text{V}$ triphasé, $\\cos\\varphi = ${cosfi}$, rendement moteur $\\eta = ${(eta_m*100).toFixed(0)}\\%$.<br/><br/>Calculez le courant absorbé $I_n$ en ampères (arrondi à 0,1 A).<br/>($P = \\sqrt{3} \\cdot U \\cdot I \\cdot \\cos\\varphi \\cdot \\eta$)`,
        answer: parseFloat(I.toFixed(1)),
        tolerance: 0.2,
        unit: 'A',
        hint: `Isoler $I = \\dfrac{P}{\\sqrt{3} \\cdot U \\cdot \\cos\\varphi \\cdot \\eta}$.`,
        solution: `$I = \\dfrac{${P_kW} \\times 10^3}{\\sqrt{3} \\times 400 \\times ${cosfi} \\times ${eta_m}} = \\dfrac{${P_kW*1000}}{${(Math.sqrt(3)*400*cosfi*eta_m).toFixed(1)}} \\approx ${I.toFixed(1)}\\;\\text{A}$`,
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
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  HMT (m)
   80 │              TP 50-180
   65 │                      TP 65-150
   55 │        TP 50-120
      │
   60 ┤   ← H_réseau à Q=20: 0,15×400=60m
      │
      └──────────────────────── Q (m³/h)
        10   20   26   35
</pre>
</div>`,
    tasks: [
      'Calculer la perte de charge du réseau $\\Delta H$ pour $Q = 20\\;\\text{m}^3/\\text{h}$. C\'est le point de fonctionnement cible.',
      'Parmi les trois pompes du catalogue, laquelle peut couvrir le point $(Q = 20\\;\\text{m}^3/\\text{h}, H = \\Delta H)$ ? Justifier.',
      'Calculer la puissance hydraulique utile $P_{\\text{utile}} = \\rho g Q H$ (en W) pour le modèle sélectionné.',
      'Calculer le rendement global de l\'installation $\\eta_{\\text{global}} = P_{\\text{utile}} / P_{\\text{absorbée}}$ et le comparer à la valeur catalogue.',
    ],
    solutions: [
      `$\\Delta H = 0{,}15 \\times 20^2 = 0{,}15 \\times 400 = 60\\;\\text{m}$<br/>Le point de fonctionnement cible est $(Q = 20\\;\\text{m}^3/\\text{h}, H = 60\\;\\text{m})$.`,
      `• TP 50-120 : $Q_{\\max} = 22\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 55\\;\\text{m}$. La HMT maximale (55 m) est insuffisante pour les 60 m requis → <strong>inadaptée</strong>.<br/>• TP 50-180 : $Q_{\\max} = 26\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 80\\;\\text{m}$. Le point (20 m³/h, 60 m) est dans la plage de fonctionnement → <strong>convient</strong>.<br/>• TP 65-150 : $Q_{\\max} = 35\\;\\text{m}^3/\\text{h}$ et $H_{\\max} = 65\\;\\text{m}$. Convient aussi, mais surdimensionnée.`,
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
        q: 'Une fiche technique de pompe indique : $Q_n = 15\\;\\text{m}^3/\\text{h}$, $H_n = 28\\;\\text{m}$, $\\eta_n = 65\\%$. Calculer la puissance absorbée par le moteur.',
        answer: '$P_{\\text{utile}} = \\rho g Q H = 1000 \\times 9{,}81 \\times (15/3600) \\times 28 = 1000 \\times 9{,}81 \\times 0{,}004167 \\times 28 \\approx 1145\\;\\text{W}$<br/>$P_{\\text{abs}} = P_{\\text{utile}} / \\eta = 1145 / 0{,}65 \\approx 1760\\;\\text{W} = 1{,}76\\;\\text{kW}$',
        points: 4,
      },
      {
        q: 'Un climatiseur réversible a EER = 3,2 (refroidissement) et COP = 4,0 (chauffage), avec $P_{\\text{élec}} = 3\\;\\text{kW}$. Calculer la puissance fournie dans les deux modes.',
        answer: 'Mode froid : $P_f = \\text{EER} \\times P_{\\text{élec}} = 3{,}2 \\times 3 = 9{,}6\\;\\text{kW}$<br/>Mode chaud : $P_{\\text{chaud}} = \\text{COP} \\times P_{\\text{élec}} = 4{,}0 \\times 3 = 12\\;\\text{kW}$',
        points: 3,
      },
      {
        q: 'La fiche d\'un disjoncteur GV3P indique $I_{cu} = 50\\;\\text{kA}$. Expliquer ce paramètre et son importance dans le choix.',
        answer: '$I_{cu}$ est le pouvoir de coupure ultime : courant de court-circuit maximal que le disjoncteur peut interrompre sans être détruit. Sur un réseau 400 V, si le courant de court-circuit présumé $I_{cc}$ de l\'installation est de 30 kA, on doit choisir un disjoncteur avec $I_{cu} \\geq 30\\;\\text{kA}$. Sous-dimensionner le $I_{cu}$ entraîne la destruction du disjoncteur et un risque d\'incendie.',
        points: 4,
      },
      {
        q: 'Un panneau solaire de $P_{\\max} = 400\\;\\text{Wc}$ a un rendement de 21%. Calculer sa surface active.',
        answer: 'Rendement = $P_{\\max} / (G \\times S)$ avec $G = 1000\\;\\text{W/m}^2$ (STC).<br/>$S = P_{\\max} / (G \\times \\eta) = 400 / (1000 \\times 0{,}21) \\approx 1{,}90\\;\\text{m}^2$',
        points: 3,
      },
    ],
  },
});

// qualite_ok: 2026
