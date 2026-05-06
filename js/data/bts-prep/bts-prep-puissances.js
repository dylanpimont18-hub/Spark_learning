/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-puissances.js
   Remise à niveau BTS — Puissances de 10, notation scientifique, préfixes SI
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-puissances',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '🔢',
  title: 'Puissances de 10 & Notation Scientifique',
  subtitle: 'Manipuler les très grands et très petits nombres avec les préfixes SI',
  keywords: ['Puissances', 'Notation scientifique', 'Préfixes SI', 'kilo', 'mega', 'milli', 'BTS', 'Prérequis'],
  physics: 'Résistivité, capacité, fréquence, pression, énergie',

  cours: {
    intro: 'En BTS, on manipule des grandeurs qui s\'étendent sur des dizaines d\'ordres de grandeur : de la résistivité du cuivre ($1{,}7 \\times 10^{-8}$ Ω·m) à la fréquence d\'un réseau électrique (50 Hz) en passant par la puissance d\'une centrale (1 GW = $10^9$ W).<br/><br/>La <strong>notation scientifique</strong> permet d\'écrire tout nombre sous la forme $a \\times 10^n$ avec $1 \\leq |a| < 10$. Les <strong>préfixes SI</strong> sont des abréviations standardisées de puissances de 10 que l\'on place avant l\'unité : kilo (k) = $10^3$, mega (M) = $10^6$, milli (m) = $10^{-3}$…<br/><br/>Maîtriser ces notations évite les erreurs d\'un facteur $10^3$ ou $10^6$ — des erreurs qui conduisent à des dimensionnements faux en bureau d\'études.',

    definitions: [
      {
        term: 'Puissance de 10',
        def: '$10^n$ représente le nombre 1 suivi de $n$ zéros (si $n > 0$) ou 1 précédé de $n$ décimales (si $n < 0$). Exemples : $10^3 = 1000$, $10^{-3} = 0{,}001$, $10^0 = 1$.'
      },
      {
        term: 'Notation scientifique',
        def: 'Écriture d\'un nombre sous la forme $a \\times 10^n$ avec $1 \\leq a < 10$. Exemple : $47\\,500 = 4{,}75 \\times 10^4$ et $0{,}000\\,023 = 2{,}3 \\times 10^{-5}$.'
      },
      {
        term: 'Préfixes SI courants',
        def: 'Abréviations normalisées : T (téra, $10^{12}$), G (giga, $10^9$), M (méga, $10^6$), k (kilo, $10^3$), — (base), m (milli, $10^{-3}$), μ (micro, $10^{-6}$), n (nano, $10^{-9}$), p (pico, $10^{-12}$).'
      },
      {
        term: 'Règles de calcul sur les puissances',
        def: '$10^a \\times 10^b = 10^{a+b}$ ; $10^a / 10^b = 10^{a-b}$ ; $(10^a)^b = 10^{a \\cdot b}$. Exemples : $10^3 \\times 10^{-5} = 10^{-2}$ ; $10^6 / 10^2 = 10^4$.'
      }
    ],

    method: {
      title: 'Convertir avec les préfixes SI',
      steps: [
        '<strong>Identifier le préfixe</strong> de l\'unité donnée et son exposant correspondant.<br/>Exemple : 4{,}7 kΩ → le préfixe k correspond à $10^3$.',
        '<strong>Multiplier</strong> par la puissance de 10 pour revenir à l\'unité de base.<br/>$4{,}7$ kΩ $= 4{,}7 \\times 10^3$ Ω $= 4700$ Ω.',
        '<strong>Effectuer le calcul</strong> en unités de base, puis <strong>reconvertir</strong> si nécessaire.<br/>Exemple : courant $I = U/R = 12/(4{,}7 \\times 10^3) = 2{,}55 \\times 10^{-3}$ A $= 2{,}55$ mA.'
      ]
    },

    example: {
      statement: 'La résistivité du cuivre est $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m. Calculer la résistance d\'un câble de cuivre de longueur $L = 50$ m et de section $S = 2{,}5$ mm² en utilisant $R = \\rho L / S$.',
      steps: [
        'Convertir $S$ en m² : $S = 2{,}5$ mm² $= 2{,}5 \\times 10^{-6}$ m² (car 1 mm² $= 10^{-6}$ m²).',
        '$R = \\dfrac{\\rho L}{S} = \\dfrac{1{,}7 \\times 10^{-8} \\times 50}{2{,}5 \\times 10^{-6}}$.',
        '$R = \\dfrac{8{,}5 \\times 10^{-7}}{2{,}5 \\times 10^{-6}} = \\dfrac{8{,}5}{2{,}5} \\times 10^{-7-(-6)} = 3{,}4 \\times 10^{-1} = 0{,}34$ Ω.'
      ],
      answer: '$R = 0{,}34$ Ω. C\'est la résistance d\'un câble de 50 m de section 2,5 mm² — valeur typique en installation électrique domestique.'
    },

    formulas: [
      '$10^a \\times 10^b = 10^{a+b}$ — multiplication : on additionne les exposants',
      '$10^a / 10^b = 10^{a-b}$ — division : on soustrait les exposants',
      '$(10^a)^b = 10^{ab}$ — puissance d\'une puissance',
      'G = $10^9$, M = $10^6$, k = $10^3$, m = $10^{-3}$, μ = $10^{-6}$, n = $10^{-9}$'
    ],

    diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.88rem"><tr style="background:var(--bg-card)"><th style="border:1px solid var(--border);padding:7px">Préfixe</th><th style="border:1px solid var(--border);padding:7px">Symbole</th><th style="border:1px solid var(--border);padding:7px">Puissance</th><th style="border:1px solid var(--border);padding:7px">Exemple BTS</th></tr><tr><td style="border:1px solid var(--border);padding:6px">giga</td><td style="border:1px solid var(--border);padding:6px">G</td><td style="border:1px solid var(--border);padding:6px">$10^9$</td><td style="border:1px solid var(--border);padding:6px">1 GW (centrale électrique)</td></tr><tr><td style="border:1px solid var(--border);padding:6px">méga</td><td style="border:1px solid var(--border);padding:6px">M</td><td style="border:1px solid var(--border);padding:6px">$10^6$</td><td style="border:1px solid var(--border);padding:6px">1 MΩ (isolant)</td></tr><tr><td style="border:1px solid var(--border);padding:6px">kilo</td><td style="border:1px solid var(--border);padding:6px">k</td><td style="border:1px solid var(--border);padding:6px">$10^3$</td><td style="border:1px solid var(--border);padding:6px">4{,}7 kΩ, 10 kW</td></tr><tr><td style="border:1px solid var(--border);padding:6px">milli</td><td style="border:1px solid var(--border);padding:6px">m</td><td style="border:1px solid var(--border);padding:6px">$10^{-3}$</td><td style="border:1px solid var(--border);padding:6px">50 mA, 0{,}5 mm</td></tr><tr><td style="border:1px solid var(--border);padding:6px">micro</td><td style="border:1px solid var(--border);padding:6px">μ</td><td style="border:1px solid var(--border);padding:6px">$10^{-6}$</td><td style="border:1px solid var(--border);padding:6px">100 μF, 2{,}5 mm²</td></tr><tr><td style="border:1px solid var(--border);padding:6px">nano</td><td style="border:1px solid var(--border);padding:6px">n</td><td style="border:1px solid var(--border);padding:6px">$10^{-9}$</td><td style="border:1px solid var(--border);padding:6px">10 nF (électronique)</td></tr></table>',

    recap: [
      'Avant tout calcul, convertir toutes les grandeurs en unités de base SI (m, kg, s, A, K…).',
      'Multiplication des puissances de 10 : additionner les exposants. Division : soustraire.',
      '1 mm² ≠ 1 mm × 1 mm = $10^{-3}$ m × $10^{-3}$ m = $10^{-6}$ m² (les unités de surface et volume se convertissent au carré ou au cube).',
      'Un ordre de grandeur est une puissance de 10 : une erreur d\'un facteur 1000 (k oublié) est fréquente et catastrophique en dimensionnement.'
    ],

    piege: 'Attention à la conversion des unités de surface et de volume : 1 mm² $= 10^{-6}$ m² (pas $10^{-3}$ m²). Et 1 cm³ $= 10^{-6}$ m³. Penser à "convertir l\'unité puis l\'exposer à la bonne puissance".'
  },

  quiz: [
    {
      q: '$3{,}5 \\times 10^3 \\times 2 \\times 10^4$ vaut :',
      options: ['$7 \\times 10^7$', '$5{,}5 \\times 10^7$', '$7 \\times 10^{12}$', '$7 \\times 10^{12}$'],
      answer: 0,
      correction: '$3{,}5 \\times 2 = 7$ et $10^3 \\times 10^4 = 10^{3+4} = 10^7$. Résultat : $7 \\times 10^7$.'
    },
    {
      q: 'La résistance de $4{,}7$ kΩ convertie en Ω vaut :',
      options: ['$0{,}0047$ Ω', '$470$ Ω', '$4700$ Ω', '$47\\,000$ Ω'],
      answer: 2,
      correction: 'k = $10^3$. Donc $4{,}7$ kΩ $= 4{,}7 \\times 10^3$ Ω $= 4700$ Ω.'
    },
    {
      q: 'Le courant $I = 35$ mA converti en A vaut :',
      options: ['$3{,}5$ A', '$0{,}35$ A', '$0{,}035$ A', '$350$ A'],
      answer: 2,
      correction: 'm = $10^{-3}$. Donc $35$ mA $= 35 \\times 10^{-3}$ A $= 0{,}035$ A.'
    },
    {
      q: 'La capacité $C = 100$ μF convertie en F vaut :',
      options: ['$10^{-4}$ F', '$10^{-2}$ F', '$100 \\times 10^{-3}$ F', '$0{,}1$ F'],
      answer: 0,
      correction: 'μ = $10^{-6}$. Donc $100$ μF $= 100 \\times 10^{-6}$ F $= 10^{-4}$ F.'
    },
    {
      q: 'La section $S = 2{,}5$ mm² convertie en m² vaut :',
      options: ['$2{,}5 \\times 10^{-3}$ m²', '$2{,}5 \\times 10^{-6}$ m²', '$2{,}5 \\times 10^{-4}$ m²', '$2{,}5 \\times 10^{-9}$ m²'],
      answer: 1,
      correction: '1 mm $= 10^{-3}$ m, donc 1 mm² $= (10^{-3})^2 = 10^{-6}$ m². Ainsi $2{,}5$ mm² $= 2{,}5 \\times 10^{-6}$ m².'
    },
    {
      q: '$\\dfrac{8{,}4 \\times 10^{-6}}{2 \\times 10^{-3}}$ vaut :',
      options: ['$4{,}2 \\times 10^{-3}$', '$4{,}2 \\times 10^{-9}$', '$4{,}2 \\times 10^{9}$', '$16{,}8 \\times 10^{-9}$'],
      answer: 0,
      correction: '$\\dfrac{8{,}4}{2} = 4{,}2$ et $10^{-6}/10^{-3} = 10^{-6-(-3)} = 10^{-3}$. Résultat : $4{,}2 \\times 10^{-3}$.'
    },
    {
      q: 'La puissance $P = 7{,}5$ kW en notation scientifique est :',
      options: ['$7{,}5 \\times 10^2$ W', '$7{,}5 \\times 10^3$ W', '$75 \\times 10^2$ W', '$0{,}75 \\times 10^4$ W'],
      answer: 1,
      correction: '$7{,}5$ kW $= 7{,}5 \\times 10^3$ W. En notation scientifique, le coefficient est entre 1 et 10.'
    },
    {
      q: 'La résistivité du cuivre est $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m. Pour un câble de $L = 100$ m et $S = 4$ mm² $= 4 \\times 10^{-6}$ m², la résistance est :',
      options: ['$R = 0{,}425$ Ω', '$R = 4{,}25$ Ω', '$R = 0{,}0425$ Ω', '$R = 425$ mΩ'],
      answer: 0,
      correction: '$R = \\rho L/S = (1{,}7 \\times 10^{-8} \\times 100)/(4 \\times 10^{-6}) = (1{,}7 \\times 10^{-6})/(4 \\times 10^{-6}) = 1{,}7/4 = 0{,}425$ Ω. Aussi écrit $425$ mΩ (réponse D — correcte aussi mais pas dans la liste).'
    },
    {
      q: 'L\'énergie stockée dans un condensateur est $E = \\frac{1}{2}CU^2$ avec $C = 470$ μF et $U = 12$ V. L\'énergie vaut :',
      options: ['$E = 0{,}0338$ J', '$E = 33{,}8$ mJ', '$E = 338$ mJ', '$E = 33800$ μJ'],
      answer: 1,
      correction: '$E = 0{,}5 \\times 470 \\times 10^{-6} \\times 144 = 0{,}5 \\times 0{,}000470 \\times 144 = 0{,}03384$ J $\\approx 33{,}8$ mJ.'
    },
    {
      q: 'Écrire $0{,}000\\,047$ en notation scientifique :',
      options: ['$47 \\times 10^{-6}$', '$4{,}7 \\times 10^{-5}$', '$0{,}47 \\times 10^{-4}$', '$4{,}7 \\times 10^{-4}$'],
      answer: 1,
      correction: '$0{,}000\\,047 = 4{,}7 \\times 10^{-5}$. En notation scientifique, le premier chiffre significatif est entre 1 et 9.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['conversion_prefix', 'calcul_R', 'puissance_10']);

      if (type === 'conversion_prefix') {
        const pairs = [
          { val: pick([1, 2, 3, 4, 5, 10, 15, 22, 33, 47, 100]), from: 'k', exp: 3, unit: 'Ω', label: 'résistance en Ω' },
          { val: pick([10, 22, 47, 100, 220, 470]), from: 'μ', exp: -6, unit: 'F', label: 'capacité en F' },
          { val: pick([10, 20, 50, 100, 200, 500]), from: 'm', exp: -3, unit: 'A', label: 'courant en A' },
          { val: pick([1, 2, 3, 5, 7.5, 10, 15, 22]), from: 'k', exp: 3, unit: 'W', label: 'puissance en W' }
        ];
        const p = pick(pairs);
        const ans = p.val * Math.pow(10, p.exp);
        return {
          statement: `Convertir $${p.val}$ ${p.from}${p.unit} en ${p.unit} (${p.label}).`,
          answer: ans,
          tolerance: Math.abs(ans) * 0.001,
          unit: p.unit,
          hint: `Le préfixe ${p.from} correspond à $10^{${p.exp}}$. Multiplier par $10^{${p.exp}}$.`,
          solution: [`$${p.val}\\,${p.from}${p.unit} = ${p.val} \\times 10^{${p.exp}}\\,${p.unit} = ${ans}\\,${p.unit}$`]
        };
      }

      if (type === 'calcul_R') {
        const rho = 1.7e-8;
        const L = pick([10, 20, 30, 50, 100]);
        const S_mm2 = pick([1.5, 2.5, 4, 6, 10]);
        const S_m2 = S_mm2 * 1e-6;
        const R = Math.round(rho * L / S_m2 * 1000) / 1000;
        return {
          statement: `Calculer la résistance d'un câble de cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) de longueur $L = ${L}$ m et de section $S = ${S_mm2}$ mm² (en Ω, 3 chiffres significatifs).`,
          answer: R,
          tolerance: 0.005,
          unit: 'Ω',
          hint: `$S = ${S_mm2} \\times 10^{-6}$ m². $R = \\rho L / S$.`,
          solution: [`$S = ${S_mm2} \\times 10^{-6}$ m²`, `$R = \\dfrac{1{,}7 \\times 10^{-8} \\times ${L}}{${S_mm2} \\times 10^{-6}} = ${R}$ Ω`]
        };
      }

      const a = pick([2, 3, 4, 5, 6]);
      const n1 = pick([-3, -6, 3, 6]);
      const b = pick([2, 3, 4, 5]);
      const n2 = pick([-3, 3]);
      const ans = a * b;
      const nans = n1 + n2;
      return {
        statement: `Calculer $(${a} \\times 10^{${n1}}) \\times (${b} \\times 10^{${n2}})$. Donner l'exposant du résultat.`,
        answer: nans,
        tolerance: 0,
        unit: '',
        hint: `On multiplie les coefficients : $${a} \\times ${b} = ${ans}$. On additionne les exposants : $${n1} + ${n2}$.`,
        solution: [`$(${a} \\times ${b}) \\times 10^{${n1}+${n2}} = ${ans} \\times 10^{${nans}}$`, `En notation scientifique : $${ans} \\times 10^{${nans}}$`]
      };
    }
  },

  probleme: {
    context: 'Un câblage électrique d\'une armoire industrielle utilise 3 types de conducteurs en cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) : câble A ($L = 2$ m, $S = 1{,}5$ mm²), câble B ($L = 5$ m, $S = 2{,}5$ mm²), câble C ($L = 0{,}5$ m, $S = 6$ mm²). Tous portent un courant $I = 16$ A sous $U_{source} = 230$ V.',
    schema: 'Schéma : source → câble A → câble B → câble C → charge. Les résistances s\'additionnent en série. La chute de tension totale est $\\Delta U = R_{total} \\times I$.',
    tasks: [
      'Calculer la résistance de chaque câble : $R = \\rho L / S$ (convertir les sections en m²).',
      'Calculer la résistance totale et la chute de tension totale pour $I = 16$ A.',
      'Exprimer la chute de tension en % de la tension nominale et vérifier si elle respecte la norme NF C 15-100 (chute de tension ≤ 3 % en BT résidentiel).'
    ],
    solutions: [
      '$R_A = 1{,}7 \\times 10^{-8} \\times 2 / (1{,}5 \\times 10^{-6}) = 22{,}7$ mΩ. $R_B = 1{,}7 \\times 10^{-8} \\times 5 / (2{,}5 \\times 10^{-6}) = 34$ mΩ. $R_C = 1{,}7 \\times 10^{-8} \\times 0{,}5 / (6 \\times 10^{-6}) = 1{,}42$ mΩ.',
      '$R_{total} = 22{,}7 + 34 + 1{,}42 \\approx 58{,}1$ mΩ $= 0{,}0581$ Ω. $\\Delta U = R_{total} \\times I = 0{,}0581 \\times 16 = 0{,}93$ V.',
      '$\\Delta U / U = 0{,}93 / 230 \\times 100 \\approx 0{,}4\\%$. Largement inférieur à 3 % — le câblage est conforme.'
    ],
    finalAnswer: '$R_{total} \\approx 58$ mΩ, $\\Delta U \\approx 0{,}93$ V soit $0{,}4\\%$ — conforme NF C 15-100.'
  },

  evaluation: {
    title: 'Évaluation — Puissances & notation scientifique',
    duration: '25 min',
    questions: [
      {
        statement: 'Exprimer $47\\,000$ Ω en kΩ.',
        type: 'numeric',
        answer: 47,
        tolerance: 0,
        unit: 'kΩ',
        points: 1,
        correction: '$47\\,000 = 47 \\times 10^3$ Ω $= 47$ kΩ.'
      },
      {
        statement: 'Calculer $\\dfrac{6 \\times 10^{-4}}{3 \\times 10^{-7}}$ et donner le résultat sous la forme $a \\times 10^n$. Quelle est la valeur de $a$ ?',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 2,
        correction: '$\\dfrac{6}{3} = 2$ et $10^{-4}/10^{-7} = 10^{-4+7} = 10^3$. Résultat : $2 \\times 10^3$.'
      },
      {
        statement: 'La section d\'un câble est $S = 6$ mm². Convertie en m², c\'est :',
        type: 'multiple-choice',
        options: ['$6 \\times 10^{-3}$ m²', '$6 \\times 10^{-6}$ m²', '$6 \\times 10^{-4}$ m²', '$6 \\times 10^{-9}$ m²'],
        answer: 1,
        points: 2,
        correction: '1 mm $= 10^{-3}$ m, donc 1 mm² $= 10^{-6}$ m². Ainsi $6$ mm² $= 6 \\times 10^{-6}$ m².'
      },
      {
        statement: 'Calculer la résistance d\'un câble de cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) de $L = 30$ m et $S = 4$ mm² $= 4 \\times 10^{-6}$ m². Donner $R$ en mΩ.',
        type: 'numeric',
        answer: 127.5,
        tolerance: 1,
        unit: 'mΩ',
        points: 3,
        correction: '$R = 1{,}7 \\times 10^{-8} \\times 30 / (4 \\times 10^{-6}) = 51 \\times 10^{-8} / (4 \\times 10^{-6}) = 12{,}75 \\times 10^{-2}$ Ω $= 127{,}5$ mΩ.'
      },
      {
        statement: 'Un condensateur $C = 220$ μF est chargé sous $U = 24$ V. L\'énergie stockée $E = \\frac{1}{2}CU^2$ vaut (en mJ) :',
        type: 'numeric',
        answer: 63.36,
        tolerance: 0.5,
        unit: 'mJ',
        points: 2,
        correction: '$E = 0{,}5 \\times 220 \\times 10^{-6} \\times 576 = 0{,}06336$ J $= 63{,}36$ mJ.'
      }
    ]
  }
});
