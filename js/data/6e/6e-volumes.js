/* =========================================================
   Spark Learning – data/6e/6e-volumes.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-volumes',
    level: 1, subject: 'maths',
    icon: '📦',
    title: 'Volumes',
    subtitle: 'Cube, pavé droit, unités (L, mL, m³)',
    keywords: ['Volume', 'Pavé droit', 'Cube', 'Litre', 'Conversion'],
    physics: 'ρ = m/V, volume d\'une solution, gaz parfait',

    cours: {
      intro: 'Le <strong>volume</strong> mesure l\'espace occupé par un objet en trois dimensions. Un cube de $1$ cm de côté a un volume de $1$ cm³ — c\'est l\'unité de base.<br/><br/>' +
        '<strong>Pourquoi plusieurs unités ?</strong> Les ordres de grandeur varient énormément : une goutte fait $0{,}05$ mL, une piscine olympique $2500$ m³. Le lien fondamental : $1$ cm³ $= 1$ mL exactement.<br/><br/>' +
        'En physique-chimie, le volume intervient partout : densité $\\rho = \\dfrac{m}{V}$, concentration $c = \\dfrac{n}{V}$, loi des gaz parfaits $PV = nRT$. Maîtriser les conversions entre m³, L et mL est indispensable.',
      definitions: [
        { term: 'Volume', def: 'Mesure de l\'espace occupé par un objet en 3D. Unité SI : le mètre cube (m³).' },
        { term: 'Pavé droit', def: 'Solide à 6 faces rectangulaires. Volume : $V = L \\times l \\times h$.' },
        { term: 'Cube', def: 'Cas particulier du pavé droit où toutes les arêtes sont égales. Volume : $V = a^3$.' },
        { term: 'Conversion', def: '$1\\,\\text{m}^3 = 1000\\,\\text{L}$ et $1\\,\\text{L} = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer le volume</strong> : identifier la forme (pavé ou cube), puis appliquer la formule. <em>Exemple pavé :</em> une boîte de $5$ cm × $3$ cm × $4$ cm → $V = 5 \\times 3 \\times 4 = 60$ cm³. <em>Exemple cube :</em> un sucre de $2$ cm de côté → $V = 2^3 = 8$ cm³.',
          '<strong>Convertir les unités</strong> : $1\\,\\text{m}^3 = 1000\\,\\text{L}$ et $1\\,\\text{L} = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$. <em>Exemple :</em> $240\\,\\text{cm}^3 \\div 1000 = 0{,}240\\,\\text{L}$.',
          '<strong>Vérifier l\'homogénéité</strong> : les trois dimensions doivent être dans la même unité avant de multiplier. <em>Exemple :</em> si L = $2$ m, l = $50$ cm → convertir d\'abord : $l = 0{,}50$ m.'
        ]
      },
      example: {
        statement: 'Un aquarium mesure $60$ cm de long, $30$ cm de large et $40$ cm de haut. Calculer son volume en litres.',
        steps: [
          'Les trois dimensions sont en cm ✓',
          '$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³',
          'Conversion : $72\\,000 \\div 1000 = 72$ L'
        ],
        answer: '$V = 72\\,000$ cm³ $= 72$ L'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Solide</th><th style="border:1px solid var(--border);padding:8px">Formule</th><th style="border:1px solid var(--border);padding:8px">Unité</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Pavé droit</strong></td><td style="border:1px solid var(--border);padding:8px">$V = L \\times l \\times h$</td><td style="border:1px solid var(--border);padding:8px">cm³, m³</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Cube</strong></td><td style="border:1px solid var(--border);padding:8px">$V = a^3$</td><td style="border:1px solid var(--border);padding:8px">cm³, m³</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Conversions</strong></td><td style="border:1px solid var(--border);padding:8px">$1$ m³ $= 1000$ L $= 10^6$ cm³</td><td style="border:1px solid var(--border);padding:8px">—</td></tr></table>',
      formulas: [
        '$V_{\\text{pavé}} = L \\times l \\times h$',
        '$V_{\\text{cube}} = a^3$',
        '$1\\,\\text{m}^3 = 1000\\,\\text{L} = 10^6\\,\\text{cm}^3$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$'
      ],
      recap: [
        'Le volume d\'un pavé droit est $V = L \\times l \\times h$, celui d\'un cube $V = a^3$.',
        '$1$ cm³ $= 1$ mL exactement. $1$ m³ $= 1000$ L.',
        'Il faut cuber le facteur de conversion : $1$ cm³ $= (10^{-2})^3$ m³ $= 10^{-6}$ m³.',
        'Toutes les dimensions doivent être dans la même unité avant de multiplier.'
      ],
      piege: 'Piège des unités cubiques : $1\\,\\text{cm}^3 \\neq 1 \\times 10^{-2}\\,\\text{m}^3$ ! Il faut cuber le facteur de conversion : $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$ donc $1\\,\\text{cm}^3 = (10^{-2})^3\\,\\text{m}^3 = 10^{-6}\\,\\text{m}^3$.'
    },

    quiz: [
      {
        q: 'Un aquarium a des dimensions $80\\,\\text{cm} \\times 40\\,\\text{cm} \\times 50\\,\\text{cm}$. Quel est son volume en litres ?',
        options: ['$16\\,\\text{L}$', '$160\\,\\text{L}$', '$1{,}6\\,\\text{L}$', '$16000\\,\\text{L}$'],
        answer: 1,
        correction: '$V = 80 \\times 40 \\times 50 = 160\\,000\\,\\text{cm}^3 = 160\\,000\\,\\text{mL} = 160\\,\\text{L}$.'
      },
      {
        q: 'Un élève écrit : « $1\\,\\text{cm}^3 = 10^{-2}\\,\\text{m}^3$ car $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$ ». Quelle est son erreur ?',
        options: [
          'Il n\'y a pas d\'erreur, c\'est correct.',
          'Il faut cuber le facteur : $1\\,\\text{cm}^3 = (10^{-2})^3\\,\\text{m}^3 = 10^{-6}\\,\\text{m}^3$.',
          'La bonne valeur est $1\\,\\text{cm}^3 = 10^{-3}\\,\\text{m}^3$.',
          'Il faut diviser par 2 : $1\\,\\text{cm}^3 = 0{,}5 \\times 10^{-2}\\,\\text{m}^3$.'
        ],
        answer: 1,
        correction: 'Il faut cuber le facteur de conversion ! $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$ → $1\\,\\text{cm}^3 = (10^{-2})^3\\,\\text{m}^3 = 10^{-6}\\,\\text{m}^3$.'
      },
      {
        q: 'Un liquide de densité $\\rho = 0{,}8\\,\\text{g/cm}^3$ a une masse de $400\\,\\text{g}$. Quel est son volume ?',
        options: ['$320\\,\\text{cm}^3$', '$500\\,\\text{cm}^3$', '$0{,}5\\,\\text{cm}^3$', '$32\\,\\text{cm}^3$'],
        answer: 1,
        correction: '$V = \\dfrac{m}{\\rho} = \\dfrac{400}{0{,}8} = 500\\,\\text{cm}^3$. On isole $V$ dans $\\rho = \\dfrac{m}{V}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un coffre de rangement', Lrange: [20, 60], lrange: [15, 40], hrange: [10, 30] },
          { name: 'un bac à poissons', Lrange: [30, 80], lrange: [20, 40], hrange: [20, 50] },
          { name: 'une boîte à chaussures', Lrange: [25, 35], lrange: [12, 20], hrange: [8, 15] },
          { name: 'un réservoir', Lrange: [40, 100], lrange: [20, 50], hrange: [15, 40] }
        ]);
        const L = rand(scenario.Lrange[0], scenario.Lrange[1]);
        const l = rand(scenario.lrange[0], scenario.lrange[1]);
        const h = rand(scenario.hrange[0], scenario.hrange[1]);
        const vcm3 = L * l * h;
        const vL = parseFloat((vcm3 / 1000).toFixed(2));
        return {
          statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} mesure $${L}\\,\\text{cm}$ de long, $${l}\\,\\text{cm}$ de large et $${h}\\,\\text{cm}$ de haut. Calcule son volume en litres.`,
          answer: vL,
          tolerance: 0.01,
          unit: 'L',
          hint: `Calcule d'abord le volume en cm³ : $V = L \\times l \\times h$. Puis convertis : $1\\,\\text{L} = 1000\\,\\text{cm}^3$.`,
          solution: [
            `Vérifie l'homogénéité : toutes les dimensions sont en cm ✓`,
            `Calcul du volume : $V = ${L} \\times ${l} \\times ${h}$`,
            `$V = ${L * l} \\times ${h} = ${vcm3}\\,\\text{cm}^3$`,
            `Conversion cm³ → L : on divise par 1000 car $1\\,\\text{L} = 1000\\,\\text{cm}^3$`,
            `$V = \\dfrac{${vcm3}}{1000} = ${vL}\\,\\text{L}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un flacon de solution saline a la forme d\'un pavé droit de dimensions $6\\,\\text{cm} \\times 4\\,\\text{cm} \\times 12\\,\\text{cm}$. La solution a une densité $\\rho = 1{,}05\\,\\text{g/mL}$.',
      schema: null,
      tasks: [
        'Calculer le volume du flacon en cm³, puis en mL et en L.',
        'Calculer la masse totale de solution contenue dans le flacon.',
        'Si la concentration en NaCl est $9\\,\\text{g/L}$, quelle est la masse de NaCl dans le flacon ?'
      ],
      solutions: [
        '$V = 6 \\times 4 \\times 12 = 288\\,\\text{cm}^3 = 288\\,\\text{mL} = 0{,}288\\,\\text{L}$.',
        '$m = \\rho \\times V = 1{,}05 \\times 288 = 302{,}4\\,\\text{g}$.',
        '$m_{\\text{NaCl}} = 9 \\times 0{,}288 = 2{,}592\\,\\text{g} \\approx 2{,}6\\,\\text{g}$.'
      ],
      finalAnswer: '$V = 288\\,\\text{mL}$, $m_{\\text{solution}} = 302{,}4\\,\\text{g}$, $m_{\\text{NaCl}} \\approx 2{,}6\\,\\text{g}$'
    },

    evaluation: {
      title: 'Évaluation — Volumes',
      duration: '20 min',
      questions: [
        { statement: 'Un pavé droit mesure $15\\,\\text{cm}$ de long, $8\\,\\text{cm}$ de large et $6\\,\\text{cm}$ de haut. Calcule son volume en cm³.', type: 'numeric', answer: 720, tolerance: 0, unit: 'cm³', points: 2, correction: '$V = L \\times l \\times h = 15 \\times 8 \\times 6 = 720\\,\\text{cm}^3$.' },
        { statement: 'Convertis $3{,}5\\,\\text{L}$ en cm³.', type: 'numeric', answer: 3500, tolerance: 0, unit: 'cm³', points: 2, correction: '$1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $3{,}5\\,\\text{L} = 3{,}5 \\times 1000 = 3500\\,\\text{cm}^3$.' },
        { statement: 'Quelle est la relation correcte ?', type: 'multiple-choice', options: ['$1\\,\\text{m}^3 = 100\\,\\text{L}$', '$1\\,\\text{m}^3 = 1000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,\\text{L}$'], answer: 1, points: 2, correction: '$1\\,\\text{m}^3 = 1000\\,\\text{L}$.' },
        { statement: 'Un cube a un volume de $125\\,\\text{cm}^3$. Quelle est la longueur de son arête en cm ?', type: 'numeric', answer: 5, tolerance: 0, unit: 'cm', points: 2, correction: '$V = a^3 = 125$, donc $a = \\sqrt[3]{125} = 5\\,\\text{cm}$.' },
        { statement: 'Un récipient mesure $20\\,\\text{cm} \\times 10\\,\\text{cm} \\times 15\\,\\text{cm}$. On le remplit d\'eau. Quelle est la masse d\'eau contenue (en grammes), sachant que $1\\,\\text{cm}^3$ d\'eau pèse $1\\,\\text{g}$ ?', type: 'numeric', answer: 3000, tolerance: 0, unit: 'g', points: 2, correction: '$V = 20 \\times 10 \\times 15 = 3000\\,\\text{cm}^3$. Comme $1\\,\\text{cm}^3$ d\'eau $= 1\\,\\text{g}$, la masse est $3000\\,\\text{g} = 3\\,\\text{kg}$.' }
      ]
    }
  });
