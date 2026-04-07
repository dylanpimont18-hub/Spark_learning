/* =========================================================
   Spark Learning – data/si-1re/si-1re-energie-rendement.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-energie-rendement',
    level: 2, subject: 'si',
    icon: '🔋',
    title: 'Énergie et rendement des systèmes',
    subtitle: 'Formes d\'énergie, puissance, rendement, bilan énergétique',
    keywords: ['Énergie', 'Puissance', 'Rendement', 'Pertes', 'Conservation'],
    physics: 'L\'analyse énergétique est au cœur de la conception de tout système technique : moteur de véhicule électrique, chauffage, éclairage. Optimiser le rendement réduit la consommation et l\'impact environnemental.',

    cours: {
      intro: 'L\'<strong>énergie</strong> est la capacité d\'un système à produire un travail, un mouvement ou un transfert de chaleur. Elle existe sous plusieurs formes : cinétique, potentielle, électrique, thermique, chimique.<br/><br/>Le <strong>principe de conservation</strong> de l\'énergie stipule qu\'elle ne se crée ni ne se détruit, mais se transforme :<br/>$$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$$<br/><br/>La <strong>puissance</strong> est le débit d\'énergie : $P = \\dfrac{E}{t}$ (en watts).<br/><br/>Le <strong>rendement</strong> $\\eta$ mesure l\'efficacité d\'une conversion : $\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$. Il est toujours compris entre $0$ et $1$.<br/><br/>Ordres de grandeur industriels : un moteur électrique a un rendement de <strong>85 à 95 %</strong>, un moteur thermique seulement <strong>30 à 40 %</strong>, une LED environ <strong>40 %</strong>, un panneau solaire <strong>15 à 25 %</strong>.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: 'Énergie liée au mouvement : $E_c = \\frac{1}{2}mv^2$. $m$ en kg, $v$ en m/s, $E_c$ en joules (J).' },
        { term: 'Énergie potentielle ($E_p$)', def: 'Énergie liée à la position en altitude : $E_p = mgh$. $h$ est la hauteur par rapport à une référence, $g \\approx 9{,}81$ m/s².' },
        { term: 'Puissance ($P$)', def: 'Taux de transfert d\'énergie : $P = \\dfrac{E}{t}$ (J/s = W). En électrique : $P = U \\times I$.' },
        { term: 'Rendement ($\\eta$)', def: 'Rapport entre puissance utile et puissance absorbée : $\\eta = \\dfrac{P_u}{P_a}$. Sans unité, toujours $\\leq 1$. Pour une chaîne : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$' }
      ],
      method: {
        title: 'Réaliser un bilan énergétique',
        steps: [
          'Étape 1 — Identifier les formes d\'énergie en entrée et en sortie.<br/>Exemple : moteur électrique → entrée : énergie électrique ($P = UI$) ; sortie utile : énergie mécanique ; pertes : chaleur (effet Joule, frottements).',
          'Étape 2 — Appliquer la conservation de l\'énergie :<br/>$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$. Si on connaît deux grandeurs, on déduit la troisième.',
          'Étape 3 — Calculer le rendement :<br/>$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ ou de façon équivalente $\\eta = 1 - \\dfrac{P_{\\text{pertes}}}{P_{\\text{absorbée}}}$.',
          'Étape 4 — Chaîne de rendements : pour plusieurs convertisseurs en série, le rendement global est le <strong>produit</strong> :<br/>$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$ Ce résultat est toujours inférieur au plus petit rendement de la chaîne.'
        ]
      },
      example: {
        statement: 'Un moteur électrique absorbe une puissance $P_a = 500$ W et fournit une puissance mécanique utile $P_u = 400$ W. Calculer le rendement et les pertes.',
        steps: [
          'Rendement : $\\eta = \\dfrac{P_u}{P_a} = \\dfrac{400}{500} = 0{,}8 = 80\\%$.',
          'Pertes : $P_{\\text{pertes}} = P_a - P_u = 500 - 400 = 100$ W.',
          'Ces $100$ W sont dissipés sous forme de chaleur (effet Joule dans les bobinages, frottements mécaniques).'
        ],
        answer: '$\\eta = 0{,}8$ soit $80\\%$ et $P_{\\text{pertes}} = 100$ W.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Forme d\'énergie</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Formule</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Unité</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cinétique</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2}mv^2$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Potentielle de pesanteur</td><td style="border:1px solid var(--border);padding:8px">$E_p = mgh$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Électrique</td><td style="border:1px solid var(--border);padding:8px">$E = U \\cdot I \\cdot t = P \\cdot t$</td><td style="border:1px solid var(--border);padding:8px">J (ou Wh)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Thermique</td><td style="border:1px solid var(--border);padding:8px">$Q = m \\cdot c \\cdot \\Delta T$</td><td style="border:1px solid var(--border);padding:8px">J</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Mécanique de rotation</td><td style="border:1px solid var(--border);padding:8px">$E = C \\cdot \\theta$ ou $P = C \\cdot \\omega$</td><td style="border:1px solid var(--border);padding:8px">J (ou W)</td></tr></table>',
      formulas: [
        '$E_c = \\dfrac{1}{2}mv^2$ (énergie cinétique)',
        '$E_p = mgh$ (énergie potentielle de pesanteur)',
        '$P = U \\times I$ (puissance électrique)',
        '$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ (rendement)',
        '$P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$ (conservation)',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\ldots$ (chaîne de rendements)'
      ],
      recap: [
        'L\'énergie se conserve : elle se transforme mais ne se crée ni ne se détruit.',
        'Le rendement $\\eta$ est toujours $\\leq 1$. Moteur électrique : $85$-$95\\%$ ; moteur thermique : $30$-$40\\%$.',
        'La puissance est le débit d\'énergie : $P = E/t$. Unité : watt (W).',
        'Pour des convertisseurs en série, le rendement global est le <strong>produit</strong> des rendements individuels.'
      ],
      piege: 'Ne pas confondre <strong>énergie</strong> (en joules, J) et <strong>puissance</strong> (en watts, W). L\'énergie est une quantité totale ($E = P \\times t$), la puissance est un débit instantané. Un appareil de faible puissance fonctionnant longtemps peut consommer plus d\'énergie qu\'un appareil puissant fonctionnant brièvement.'
    },

    quiz: [
      {
        q: 'Un moteur électrique ($\\eta_1 = 90\\%$) entraîne un réducteur ($\\eta_2 = 80\\%$). Le rendement global de la chaîne est :',
        options: ['$170\\%$', '$85\\%$', '$72\\%$', '$10\\%$'],
        answer: 2,
        correction: 'Pour des convertisseurs en série : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 = 0{,}9 \\times 0{,}8 = 0{,}72 = 72\\%$.<br/>Le rendement global est toujours inférieur au plus petit rendement individuel. On multiplie, on n\'additionne pas.'
      },
      {
        q: 'Un moteur thermique a un rendement typique de $35\\%$. S\'il consomme $P_a = 60$ kW de puissance chimique, la puissance mécanique utile et les pertes thermiques valent respectivement :',
        options: [
          '$P_u = 21$ kW et $P_{\\text{pertes}} = 39$ kW',
          '$P_u = 39$ kW et $P_{\\text{pertes}} = 21$ kW',
          '$P_u = 35$ kW et $P_{\\text{pertes}} = 25$ kW',
          '$P_u = 60$ kW et $P_{\\text{pertes}} = 0$ kW'
        ],
        answer: 0,
        correction: '$P_u = \\eta \\times P_a = 0{,}35 \\times 60 = 21$ kW. Pertes : $P_{\\text{pertes}} = P_a - P_u = 60 - 21 = 39$ kW.<br/>Un moteur thermique dissipe environ les 2/3 de l\'énergie sous forme de chaleur (gaz d\'échappement, refroidissement).'
      },
      {
        q: 'L\'unité SI de l\'énergie est le joule (J). Combien de joules représente $1$ kWh ?',
        options: ['$1000$ J', '$3600$ J', '$3{,}6 \\times 10^6$ J', '$3{,}6 \\times 10^9$ J'],
        answer: 2,
        correction: '$1$ kWh $= 1000$ W $\\times$ $3600$ s $= 3{,}6 \\times 10^6$ J $= 3{,}6$ MJ. Le kWh est une unité pratique (facture électrique) mais pas l\'unité SI.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un moteur électrique industriel', eta_range: [80, 95], Pa_range: [500, 5000] },
          { name: 'un moteur de véhicule électrique', eta_range: [85, 95], Pa_range: [5000, 50000] },
          { name: 'une pompe hydraulique', eta_range: [60, 85], Pa_range: [1000, 10000] },
          { name: 'un compresseur d\'air', eta_range: [50, 80], Pa_range: [2000, 15000] }
        ]);

        const Pa_round = Math.round(rand(scenario.Pa_range[0], scenario.Pa_range[1]) / 50) * 50;
        const eta_pct = rand(scenario.eta_range[0], scenario.eta_range[1]);
        const eta = eta_pct / 100;
        const Pu = parseFloat((Pa_round * eta).toFixed(1));
        const Pertes = parseFloat((Pa_round - Pu).toFixed(1));

        const askWhat = pick(['puissance_utile', 'pertes', 'rendement']);

        if (askWhat === 'puissance_utile') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe une puissance $P_a = ${Pa_round}$ W et a un rendement $\\eta = ${eta_pct}\\%$. Calcule la puissance utile $P_u$ (en W).`,
            answer: Pu,
            tolerance: 1,
            unit: 'W',
            hint: 'Le rendement relie puissance utile et absorbée : $\\eta = P_u / P_a$, donc $P_u = \\eta \\times P_a$.',
            solution: [
              `On identifie : $P_a = ${Pa_round}$ W, $\\eta = ${eta_pct}\\% = ${eta.toFixed(2).replace('.', '{,')}$.`,
              'Formule : $P_u = \\eta \\times P_a$',
              `$P_u = ${eta.toFixed(2).replace('.', '{,')} \\times ${Pa_round} = ${Pu.toString().replace('.', '{,')}$ W`
            ]
          };
        } else if (askWhat === 'pertes') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe $P_a = ${Pa_round}$ W et fournit une puissance utile $P_u = ${Pu.toString().replace('.', ',')}$ W. Calcule les pertes $P_{\\text{pertes}}$ (en W).`,
            answer: Pertes,
            tolerance: 1,
            unit: 'W',
            hint: 'Conservation de l\'énergie : $P_a = P_u + P_{\\text{pertes}}$, donc $P_{\\text{pertes}} = P_a - P_u$.',
            solution: [
              'Conservation de l\'énergie : $P_{\\text{pertes}} = P_a - P_u$',
              `$P_{\\text{pertes}} = ${Pa_round} - ${Pu.toString().replace('.', '{,')}$`,
              `$P_{\\text{pertes}} = ${Pertes.toString().replace('.', '{,')}$ W`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} absorbe $P_a = ${Pa_round}$ W et fournit $P_u = ${Pu.toString().replace('.', ',')}$ W. Calcule le rendement $\\eta$ en pourcentage.`,
            answer: eta_pct,
            tolerance: 0.5,
            unit: '%',
            hint: 'Le rendement est $\\eta = P_u / P_a$. Multiplie par $100$ pour avoir le pourcentage.',
            solution: [
              'Formule : $\\eta = \\dfrac{P_u}{P_a}$',
              `$\\eta = \\dfrac{${Pu.toString().replace('.', '{,')}}{${Pa_round}} = ${eta.toFixed(2).replace('.', '{,')}$`,
              `$\\eta = ${eta_pct}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un vélo à assistance électrique (VAE) possède une batterie de $36$ V et $10$ Ah. Le moteur électrique a un rendement $\\eta_m = 85\\%$. Le cycliste roule à une vitesse constante de $v = 25$ km/h sur du plat. La puissance mécanique nécessaire pour vaincre les frottements est estimée à $P_{\\text{meca}} = 150$ W.',
      tasks: [
        'Calculer l\'énergie totale stockée dans la batterie (en Wh puis en J).',
        'Calculer la puissance électrique que le moteur doit absorber pour fournir les $150$ W mécaniques.',
        'Calculer l\'autonomie du VAE (en heures puis en km).'
      ],
      solutions: [
        '$E = U \\times Q = 36 \\times 10 = 360$ Wh $= 360 \\times 3600 = 1\\,296\\,000$ J $= 1{,}296$ MJ.',
        '$P_a = \\dfrac{P_u}{\\eta_m} = \\dfrac{150}{0{,}85} \\approx 176{,}5$ W.',
        'Autonomie en temps : $t = \\dfrac{E}{P_a} = \\dfrac{360}{176{,}5} \\approx 2{,}04$ h. Autonomie en distance : $d = v \\times t = 25 \\times 2{,}04 \\approx 51$ km.'
      ],
      finalAnswer: '$E = 360$ Wh, $P_a \\approx 176{,}5$ W, autonomie $\\approx 2$ h soit $\\approx 51$ km.'
    },

    evaluation: {
      title: 'Évaluation — Énergie et rendement',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'énergie cinétique d\'une voiture de $1200$ kg roulant à $20$ m/s.',
          type: 'numeric',
          answer: 240000,
          tolerance: 100,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 1200 \\times 20^2 = \\frac{1}{2} \\times 1200 \\times 400 = 240\\,000$ J $= 240$ kJ.'
        },
        {
          statement: 'Un système absorbe $P_a = 800$ W et perd $P_{\\text{pertes}} = 200$ W. Son rendement est :',
          type: 'numeric',
          answer: 75,
          tolerance: 0.5,
          unit: '%',
          points: 2,
          correction: '$P_u = P_a - P_{\\text{pertes}} = 800 - 200 = 600$ W. $\\eta = \\dfrac{P_u}{P_a} = \\dfrac{600}{800} = 0{,}75 = 75\\%$.'
        },
        {
          statement: 'Trois convertisseurs en série ont des rendements de $90\\%$, $80\\%$ et $70\\%$. Le rendement global est :',
          type: 'numeric',
          answer: 50.4,
          tolerance: 0.5,
          unit: '%',
          points: 3,
          correction: '$\\eta_{\\text{global}} = 0{,}9 \\times 0{,}8 \\times 0{,}7 = 0{,}504 = 50{,}4\\%$. Le produit de rendements décroît vite avec le nombre de convertisseurs.'
        },
        {
          statement: 'La relation entre énergie, puissance et temps est :',
          type: 'multiple-choice',
          options: ['$E = P / t$', '$E = P \\times t$', '$E = P^2 \\times t$', '$E = P + t$'],
          answer: 1,
          points: 1,
          correction: '$E = P \\times t$. L\'énergie (en J) est le produit de la puissance (en W) par le temps (en s). Exemple : $100$ W pendant $60$ s $= 6000$ J.'
        },
        {
          statement: 'Calculer l\'énergie potentielle de pesanteur d\'un objet de $5$ kg à $10$ m de hauteur ($g = 9{,}81$ m/s²).',
          type: 'numeric',
          answer: 490.5,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_p = mgh = 5 \\times 9{,}81 \\times 10 = 490{,}5$ J.'
        }
      ]
    }
  });
