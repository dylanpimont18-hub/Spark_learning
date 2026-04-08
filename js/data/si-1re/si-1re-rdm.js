/* =========================================================
   Spark Learning – data/si-1re/si-1re-rdm.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-rdm',
    level: 2, subject: 'si',
    icon: '🏗️',
    title: 'Résistance des matériaux',
    subtitle: 'Contraintes, déformations, loi de Hooke, coefficient de sécurité',
    keywords: ['Contrainte', 'Déformation', 'Traction', 'Compression', 'Module de Young'],
    physics: 'La RdM est indispensable pour dimensionner les pièces mécaniques : poutres, arbres de transmission, câbles, boulons. Elle garantit que les structures résistent aux efforts sans se rompre.',

    cours: {
      intro: 'La <strong>Résistance des Matériaux</strong> (RdM) étudie comment les solides se déforment et résistent sous l\'action de forces.<br/><br/>Quand on applique un effort de traction $F$ sur une barre de section $S$, la matière subit une <strong>contrainte</strong> : $\\sigma = \\dfrac{F}{S}$ (en Pa).<br/>Elle se déforme d\'une quantité relative : $\\varepsilon = \\dfrac{\\Delta L}{L_0}$ (sans unité).<br/><br/>Dans le <strong>domaine élastique</strong>, contrainte et déformation sont proportionnelles : c\'est la <strong>loi de Hooke</strong> $\\sigma = E \\times \\varepsilon$, où $E$ est le module de Young.<br/><br/>Valeurs typiques de $E$ : <strong>acier</strong> $\\approx 210$ GPa, <strong>aluminium</strong> $\\approx 70$ GPa, <strong>cuivre</strong> $\\approx 120$ GPa, <strong>bois</strong> $\\approx 10$-$15$ GPa.<br/><br/>Pour garantir la sécurité, on vérifie : $\\sigma_{\\max} \\leq \\dfrac{\\sigma_e}{s}$ où $\\sigma_e$ est la limite élastique et $s$ le coefficient de sécurité ($s = 2$ à $5$ selon les applications).',
      definitions: [
        { term: 'Contrainte ($\\sigma$)', def: 'Force par unité de surface : $\\sigma = F/S$. Unité : pascal (Pa). En traction $\\sigma > 0$, en compression $\\sigma < 0$.' },
        { term: 'Déformation ($\\varepsilon$)', def: 'Allongement relatif : $\\varepsilon = \\Delta L / L_0$. Sans unité (souvent en $10^{-4}$ ou en %). Toujours très petit dans le domaine élastique.' },
        { term: 'Module de Young ($E$)', def: 'Constante de rigidité du matériau : $\\sigma = E \\varepsilon$. Unité : Pa (ou GPa). Plus $E$ est grand, plus le matériau est rigide.' },
        { term: 'Coefficient de sécurité ($s$)', def: 'Rapport $s = \\sigma_e / \\sigma_{\\max}$. Doit être $\\geq 1$ pour éviter la rupture. Valeurs courantes : $s = 2$ (acier), $s = 3$-$5$ (béton, bois, applications critiques).' }
      ],
      method: {
        title: 'Vérifier la résistance d\'une pièce en traction',
        steps: [
          '<strong>Type de sollicitation</strong> : Étape 1 — Identifier la sollicitation : traction, compression, flexion, cisaillement ou torsion ?\nEn Première, on se concentre sur la <strong>traction-compression</strong> (effort normal).',
          '<strong>Calcul de la contrainte</strong> : Étape 2 — Calculer la contrainte : $\\sigma = \\dfrac{F}{S}$ avec $F$ en N et $S$ en m².\nAttention : $1$ mm² $= 10^{-6}$ m². C\'est l\'erreur de conversion la plus fréquente !',
          '<strong>Calcul de la déformation</strong> : Étape 3 — Calculer la déformation (si demandée) : $\\varepsilon = \\dfrac{\\sigma}{E}$ puis $\\Delta L = \\varepsilon \\times L_0$.\nOu directement : $\\Delta L = \\dfrac{F \\times L_0}{E \\times S}$.',
          '<strong>Vérification de sécurité</strong> : Étape 4 — Vérifier la sécurité : $s = \\dfrac{\\sigma_e}{\\sigma_{\\max}}$.\nSi $s \\geq s_{\\text{requis}}$ → pièce correctement dimensionnée. Sinon, augmenter la section $S$.'
        ]
      },
      example: {
        statement: 'Un câble en acier ($E = 210$ GPa, $\\sigma_e = 400$ MPa) de section $S = 50$ mm² et longueur $L_0 = 2$ m supporte une charge de $F = 10\\,000$ N. Calculer $\\sigma$, $\\varepsilon$, $\\Delta L$ et le coefficient de sécurité.',
        steps: [
          'Contrainte : $\\sigma = \\dfrac{F}{S} = \\dfrac{10\\,000}{50 \\times 10^{-6}} = 200 \\times 10^6$ Pa $= 200$ MPa.',
          'Déformation : $\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{200 \\times 10^6}{210 \\times 10^9} \\approx 9{,}52 \\times 10^{-4}$.',
          'Allongement : $\\Delta L = \\varepsilon \\times L_0 = 9{,}52 \\times 10^{-4} \\times 2 \\approx 1{,}90$ mm.',
          'Coefficient de sécurité : $s = \\dfrac{\\sigma_e}{\\sigma_{\\max}} = \\dfrac{400}{200} = 2$.'
        ],
        answer: '$\\sigma = 200$ MPa, $\\varepsilon \\approx 9{,}5 \\times 10^{-4}$, $\\Delta L \\approx 1{,}9$ mm, $s = 2$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Sollicitation</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Effort</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Contrainte</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Unité</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Traction</td><td style="border:1px solid var(--border);padding:8px">$N > 0$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Compression</td><td style="border:1px solid var(--border);padding:8px">$N < 0$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cisaillement</td><td style="border:1px solid var(--border);padding:8px">$T$</td><td style="border:1px solid var(--border);padding:8px">$\\tau = T/S$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Flexion</td><td style="border:1px solid var(--border);padding:8px">$M_f$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = M_f \\cdot y / I$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Torsion</td><td style="border:1px solid var(--border);padding:8px">$M_t$</td><td style="border:1px solid var(--border);padding:8px">$\\tau = M_t \\cdot r / I_0$</td><td style="border:1px solid var(--border);padding:8px">Pa (MPa)</td></tr></table>',
      formulas: [
        '$\\sigma = \\dfrac{F}{S}$ (contrainte en Pa)',
        '$\\varepsilon = \\dfrac{\\Delta L}{L_0}$ (déformation relative)',
        '$\\sigma = E \\times \\varepsilon$ (loi de Hooke, domaine élastique)',
        '$s = \\dfrac{\\sigma_e}{\\sigma_{\\max}}$ (coefficient de sécurité)',
        '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S}$ (allongement en traction)'
      ],
      recap: [
        'La contrainte $\\sigma = F/S$ est une force par unité de surface (en Pa ou MPa).',
        'La loi de Hooke $\\sigma = E\\varepsilon$ n\'est valable que dans le domaine élastique.',
        'Propriétés matériaux : acier $E = 210$ GPa, alu $E = 70$ GPa, cuivre $E = 120$ GPa.',
        'Le coefficient de sécurité $s = \\sigma_e / \\sigma_{\\max}$ doit toujours dépasser la valeur requise ($2$ à $5$).'
      ],
      piege: 'L\'erreur la plus fréquente est la conversion de la section. Si $S = 100$ mm², il faut écrire $S = 100 \\times 10^{-6}$ m² $= 10^{-4}$ m². Oublier le facteur $10^{-6}$ donne un résultat faux d\'un facteur un million !'
    },

    quiz: [
      {
        q: 'Un câble en acier ($E = 210$ GPa) et un câble en aluminium ($E = 70$ GPa) de même section et longueur subissent la même force de traction. Lequel s\'allonge le plus ?',
        options: [
          'L\'acier, car il est plus lourd',
          'L\'aluminium, car son module de Young est $3$ fois plus faible',
          'Les deux s\'allongent de la même quantité',
          'L\'acier, car son module est plus grand'
        ],
        answer: 1,
        correction: '$\\Delta L = \\dfrac{FL_0}{ES}$. À $F$, $L_0$ et $S$ identiques, $\\Delta L$ est inversement proportionnel à $E$. L\'aluminium ($E = 70$ GPa) se déforme $3$ fois plus que l\'acier ($E = 210$ GPa) sous la même charge.'
      },
      {
        q: 'Un boulon de section $S = 80$ mm² supporte $F = 16\\,000$ N en traction. Si la limite élastique est $\\sigma_e = 600$ MPa, le coefficient de sécurité vaut :',
        options: ['$s = 1$', '$s = 2$', '$s = 3$', '$s = 4$'],
        answer: 2,
        correction: '$\\sigma = \\dfrac{F}{S} = \\dfrac{16\\,000}{80 \\times 10^{-6}} = 200$ MPa. $s = \\dfrac{\\sigma_e}{\\sigma} = \\dfrac{600}{200} = 3$.<br/>Le boulon est correctement dimensionné pour la plupart des applications courantes.'
      },
      {
        q: 'La contrainte $\\sigma = 200$ MPa correspond en pascals à :',
        options: ['$200$ Pa', '$200\\,000$ Pa', '$200 \\times 10^6$ Pa', '$200 \\times 10^9$ Pa'],
        answer: 2,
        correction: '$1$ MPa $= 10^6$ Pa (Méga = $10^6$). Donc $200$ MPa $= 200 \\times 10^6$ Pa. En RdM on travaille presque toujours en MPa pour éviter les grands nombres.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const material = pick([
          { name: 'en acier', E: 210, sigma_e: rand(250, 500) },
          { name: 'en aluminium', E: 70, sigma_e: rand(150, 350) },
          { name: 'en cuivre', E: 120, sigma_e: rand(200, 400) }
        ]);

        const F_kN = rand(5, 50);
        const F = F_kN * 1000;
        const S_mm2 = rand(20, 200);
        const S = S_mm2 * 1e-6;
        const sigma = F / S;
        const sigma_MPa = parseFloat((sigma / 1e6).toFixed(1));
        const s_coeff = parseFloat((material.sigma_e / sigma_MPa).toFixed(1));

        const askWhat = pick(['contrainte', 'securite']);

        if (askWhat === 'contrainte') {
          return {
            statement: `Une barre ${material.name} de section $S = ${S_mm2}$ mm² est soumise à un effort de traction $F = ${F_kN}$ kN. Calcule la contrainte $\\sigma$ en MPa.`,
            answer: sigma_MPa,
            tolerance: 0.5,
            unit: 'MPa',
            hint: 'Utilise $\\sigma = F/S$. Convertis : $F$ en N ($1$ kN $= 1000$ N) et $S$ en m² ($1$ mm² $= 10^{-6}$ m²).',
            solution: [
              `Conversion : $F = ${F_kN}$ kN $= ${F}$ N ; $S = ${S_mm2}$ mm² $= ${S_mm2} \\times 10^{-6}$ m²`,
              `$\\sigma = \\dfrac{F}{S} = \\dfrac{${F}}{${S_mm2} \\times 10^{-6}}$`,
              `$\\sigma = ${sigma_MPa.toString().replace('.', '{,')}$ MPa`
            ]
          };
        } else {
          return {
            statement: `Une barre ${material.name} ($\\sigma_e = ${material.sigma_e}$ MPa) de section $S = ${S_mm2}$ mm² subit $F = ${F_kN}$ kN. Calcule le coefficient de sécurité $s$.`,
            answer: s_coeff,
            tolerance: 0.1,
            unit: '',
            hint: 'Calcule d\'abord $\\sigma = F/S$, puis $s = \\sigma_e / \\sigma$.',
            solution: [
              `Contrainte : $\\sigma = \\dfrac{${F}}{${S_mm2} \\times 10^{-6}} = ${sigma_MPa.toString().replace('.', '{,')}$ MPa`,
              `Coefficient de sécurité : $s = \\dfrac{\\sigma_e}{\\sigma} = \\dfrac{${material.sigma_e}}{${sigma_MPa.toString().replace('.', '{,')}}$`,
              `$s = ${s_coeff.toString().replace('.', '{,')}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On dimensionne un tirant (barre en traction) en acier pour une structure. Les données sont : effort de traction $F = 25\\,000$ N, module de Young $E = 210$ GPa, contrainte limite élastique $\\sigma_e = 350$ MPa, coefficient de sécurité requis $s = 2{,}5$, longueur du tirant $L_0 = 1{,}5$ m.',
      tasks: [
        'Calculer la contrainte admissible $\\sigma_{\\text{adm}} = \\sigma_e / s$.',
        'En déduire la section minimale $S_{\\min}$ du tirant (en mm²).',
        'Calculer l\'allongement $\\Delta L$ du tirant sous charge, pour la section trouvée.'
      ],
      solutions: [
        '$\\sigma_{\\text{adm}} = \\dfrac{\\sigma_e}{s} = \\dfrac{350}{2{,}5} = 140$ MPa.',
        '$S_{\\min} = \\dfrac{F}{\\sigma_{\\text{adm}}} = \\dfrac{25\\,000}{140 \\times 10^6} = 1{,}786 \\times 10^{-4}$ m² $\\approx 178{,}6$ mm². On choisit $S = 180$ mm² (arrondi au supérieur).',
        '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S} = \\dfrac{25\\,000 \\times 1{,}5}{210 \\times 10^9 \\times 180 \\times 10^{-6}} = \\dfrac{37\\,500}{37\\,800} \\approx 0{,}992$ mm $\\approx 1$ mm.'
      ],
      finalAnswer: '$\\sigma_{\\text{adm}} = 140$ MPa, $S_{\\min} \\approx 179$ mm² (prendre $180$ mm²), $\\Delta L \\approx 1$ mm.'
    },

    evaluation: {
      title: 'Évaluation — Résistance des matériaux',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la contrainte dans une barre de section $S = 100$ mm² soumise à une force $F = 20\\,000$ N (en MPa).',
          type: 'numeric',
          answer: 200,
          tolerance: 1,
          unit: 'MPa',
          points: 2,
          correction: '$\\sigma = \\dfrac{F}{S} = \\dfrac{20\\,000}{100 \\times 10^{-6}} = 200 \\times 10^6$ Pa $= 200$ MPa.'
        },
        {
          statement: 'La loi de Hooke s\'écrit $\\sigma = E \\times \\varepsilon$. Si $\\sigma = 150$ MPa et $E = 210$ GPa, la déformation $\\varepsilon$ est environ :',
          type: 'multiple-choice',
          options: ['$7{,}14 \\times 10^{-4}$', '$1{,}4$', '$7{,}14 \\times 10^{-2}$', '$3{,}15 \\times 10^4$'],
          answer: 0,
          points: 2,
          correction: '$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{150 \\times 10^6}{210 \\times 10^9} = 7{,}14 \\times 10^{-4}$. Les déformations élastiques sont toujours très petites ($10^{-4}$ à $10^{-3}$).'
        },
        {
          statement: 'Une pièce a une contrainte en service $\\sigma = 80$ MPa et une contrainte limite $\\sigma_e = 240$ MPa. Calculer le coefficient de sécurité.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$s = \\dfrac{\\sigma_e}{\\sigma_{\\max}} = \\dfrac{240}{80} = 3$.'
        },
        {
          statement: 'Calculer l\'allongement $\\Delta L$ d\'une barre acier ($E = 210$ GPa) de longueur $L_0 = 2$ m, section $S = 50$ mm², sous $F = 10\\,000$ N. Résultat en mm.',
          type: 'numeric',
          answer: 1.90,
          tolerance: 0.1,
          unit: 'mm',
          points: 3,
          correction: '$\\Delta L = \\dfrac{F \\times L_0}{E \\times S} = \\dfrac{10\\,000 \\times 2}{210 \\times 10^9 \\times 50 \\times 10^{-6}} = \\dfrac{20\\,000}{10\\,500} \\approx 1{,}90$ mm.'
        },
        {
          statement: '$1$ mm² est égal à combien de m² ?',
          type: 'multiple-choice',
          options: ['$10^{-2}$ m²', '$10^{-3}$ m²', '$10^{-6}$ m²', '$10^{-9}$ m²'],
          answer: 2,
          points: 1,
          correction: '$1$ mm $= 10^{-3}$ m, donc $1$ mm² $= (10^{-3})^2 = 10^{-6}$ m². C\'est la conversion indispensable en RdM.'
        }
      ]
    }
  });
