/* =========================================================
   Spark Learning – data/6e/6e-multiplication.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-multiplication',
    level: 1, subject: 'maths',
    icon: '✖️',
    title: 'Multiplication des entiers et décimaux',
    subtitle: 'Technique posée, placement de la virgule',
    keywords: ['Multiplication', 'Produit', 'Décimaux', 'Calcul posé', 'Retenue'],
    physics: false,

    cours: {
      intro: 'Multiplier des décimaux revient à <strong>multiplier des entiers</strong> puis à replacer la virgule au bon endroit.<br/><br/>' +
        '<strong>Pourquoi ça marche ?</strong> $2{,}3 \\times 1{,}4 = \\dfrac{23}{10} \\times \\dfrac{14}{10} = \\dfrac{23 \\times 14}{100} = \\dfrac{322}{100} = 3{,}22$. Le nombre de décimales du produit est la <strong>somme</strong> des décimales des deux facteurs.<br/><br/>' +
        '<strong>Estimation rapide</strong> : toujours vérifier l\'ordre de grandeur. $2{,}3 \\times 1{,}4 \\approx 2 \\times 1 = 2$ — le résultat doit être proche de $2$, pas de $0{,}2$ ni de $20$.',
      definitions: [
        { term: 'Produit', def: 'Résultat d\'une multiplication. Le produit de $a$ et $b$ est $a \\times b$.' },
        { term: 'Commutativité', def: '$a \\times b = b \\times a$ : l\'ordre des facteurs n\'a pas d\'importance.' },
        { term: 'Distributivité', def: '$a \\times (b + c) = a \\times b + a \\times c$ : on peut « développer » un produit.' },
        { term: 'Règle des décimales', def: 'Le nombre de décimales du produit = somme des décimales des deux facteurs.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Ignorer les virgules</strong> et multiplier comme des entiers. <em>Exemple :</em> $2{,}3 \\times 1{,}4$ → calculer $23 \\times 14 = 322$.',
          '<strong>Compter les décimales</strong> dans les deux facteurs : $2{,}3$ a $1$ décimale et $1{,}4$ a $1$ décimale → total $= 2$.',
          '<strong>Placer la virgule</strong> : $322$ avec $2$ décimales → $3{,}22$.',
          '<strong>Vérifier l\'ordre de grandeur</strong> : $2 \\times 1 = 2$, et $3{,}22 \\approx 2$ ✓'
        ]
      },
      example: {
        statement: 'Calculer $0{,}6 \\times 0{,}7$.',
        steps: [
          'On calcule $6 \\times 7 = 42$.',
          'Nombre de décimales : $1 + 1 = 2$.',
          'On place la virgule : $0{,}42$.',
          'Vérification : $0{,}6 \\times 0{,}7 < 1$ car les deux facteurs sont $< 1$. $0{,}42 < 1$ ✓'
        ],
        answer: '$0{,}6 \\times 0{,}7 = 0{,}42$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Facteurs</th><th style="border:1px solid var(--border);padding:8px">Décimales</th><th style="border:1px solid var(--border);padding:8px">Calcul entier</th><th style="border:1px solid var(--border);padding:8px">Résultat</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$3{,}5 \\times 4{,}2$</td><td style="border:1px solid var(--border);padding:8px">$1 + 1 = 2$</td><td style="border:1px solid var(--border);padding:8px">$35 \\times 42 = 1470$</td><td style="border:1px solid var(--border);padding:8px">$14{,}70$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$2{,}75 \\times 1{,}3$</td><td style="border:1px solid var(--border);padding:8px">$2 + 1 = 3$</td><td style="border:1px solid var(--border);padding:8px">$275 \\times 13 = 3575$</td><td style="border:1px solid var(--border);padding:8px">$3{,}575$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0{,}6 \\times 0{,}7$</td><td style="border:1px solid var(--border);padding:8px">$1 + 1 = 2$</td><td style="border:1px solid var(--border);padding:8px">$6 \\times 7 = 42$</td><td style="border:1px solid var(--border);padding:8px">$0{,}42$</td></tr></table>',
      formulas: [
        '$a \\times b = b \\times a$ (commutativité)',
        '$a \\times (b + c) = a \\times b + a \\times c$ (distributivité)',
        'Décimales : $\\underbrace{x{,}ab}_{2\\text{ déc.}} \\times \\underbrace{y{,}c}_{1\\text{ déc.}} \\Rightarrow$ résultat avec $3$ décimales'
      ],
      recap: [
        'On multiplie d\'abord comme des entiers, puis on replace la virgule.',
        'Nombre de décimales du résultat = somme des décimales des facteurs.',
        'Toujours vérifier l\'ordre de grandeur pour détecter une erreur de placement de virgule.',
        'La distributivité permet le calcul mental : $7 \\times 5{,}2 = 7 \\times 5 + 7 \\times 0{,}2 = 36{,}4$.'
      ],
      piege: 'Piège : pour $0{,}4 \\times 0{,}3$, on calcule $4 \\times 3 = 12$, puis $1 + 1 = 2$ décimales → $0{,}12$. Pas $1{,}2$ ! Vérifier : les deux facteurs sont $< 1$, donc le produit est $< 1$.'
    },

    quiz: [
      { q: 'Combien vaut $3{,}5 \\times 4{,}2$ ?', options: ['$14{,}70$', '$14{,}07$', '$1{,}470$', '$147{,}0$'], answer: 0, correction: '$35 \\times 42 = 1470$. $1 + 1 = 2$ décimales → $14{,}70$.' },
      { q: 'En calculant $0{,}4 \\times 0{,}3$, un élève trouve $1{,}2$. Quelle erreur a-t-il commise ?', options: ['Il a bien calculé.', 'Il a oublié de compter les décimales : résultat $= 0{,}12$.', 'Il aurait dû additionner.', 'Il a mal multiplié.'], answer: 1, correction: '$4 \\times 3 = 12$ mais $1 + 1 = 2$ décimales → $0{,}12$.' },
      { q: 'Un livre coûte $7{,}50$ €. Quel est le prix de $6$ exemplaires ?', options: ['$43{,}0$ €', '$45{,}00$ €', '$44{,}0$ €', '$42{,}00$ €'], answer: 1, correction: '$750 \\times 6 = 4500$, $2$ décimales : $45{,}00$ €.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { emoji: '🧮', intro: 'Calcule', aLabel: '', bLabel: '', unit: '' },
          { emoji: '🎨', intro: 'Un peintre a besoin de', aLabel: 'pots de peinture à', bLabel: '€ chacun. Quel est le prix total ?', unit: '€', useInt: true },
          { emoji: '⚖️', intro: 'Au marché, on achète', aLabel: 'kg de pommes à', bLabel: '€ le kilo. Quel est le prix total ?', unit: '€' },
          { emoji: '🍳', intro: 'Une recette pour $4$ personnes demande', aLabel: 'g de farine. Pour', bLabel: 'personnes, quelle quantité faut-il ?', unit: 'g', useInt: true },
          { emoji: '📏', intro: 'Un rectangle mesure', aLabel: 'cm de long et', bLabel: 'cm de large. Quelle est son aire ?', unit: 'cm²' },
          { emoji: '🏫', intro: 'Une école a', aLabel: 'classes de', bLabel: 'élèves. Combien d\'élèves en tout ?', unit: 'élèves', useInt: true },
          { emoji: '🧱', intro: 'Un mur nécessite', aLabel: 'rangées de', bLabel: 'briques. Combien de briques en tout ?', unit: 'briques', useInt: true },
          { emoji: '🚰', intro: 'Un robinet remplit', aLabel: 'litres par minute pendant', bLabel: 'minutes. Quel volume total ?', unit: 'L' }
        ]);
        let a, b, prod, statement;
        if (scenario.useInt) {
          a = rand(2, 9);
          b = rand(2, 9);
          prod = a * b;
          statement = scenario.aLabel
            ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.aLabel} $${b}$ ${scenario.bLabel}`
            : `${scenario.emoji} ${scenario.intro} $${a} \\times ${b}$.`;
        } else {
          a = randFloat(1, 9, 1);
          b = randFloat(1, 9, 1);
          prod = parseFloat((a * b).toFixed(2));
          statement = scenario.aLabel
            ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.aLabel} $${b}$ ${scenario.bLabel}`
            : `${scenario.emoji} ${scenario.intro} $${a} \\times ${b}$.`;
        }
        const intA = scenario.useInt ? a : Math.round(a * 10);
        const intB = scenario.useInt ? b : Math.round(b * 10);
        return {
          statement,
          answer: prod,
          tolerance: 0.01,
          unit: scenario.unit,
          hint: scenario.useInt
            ? `Multiplie directement $${a} \\times ${b}$.`
            : `Multiplie d'abord $${intA} \\times ${intB}$, puis place la virgule ($1 + 1 = 2$ décimales).`,
          solution: scenario.useInt
            ? [
                `$${a} \\times ${b} = ${prod}$`,
                `Résultat : $${prod}$${scenario.unit ? ' ' + scenario.unit : ''}`
              ]
            : [
                `On ignore les virgules : $${intA} \\times ${intB} = ${intA * intB}$.`,
                `Total de décimales : $1 + 1 = 2$.`,
                `Résultat : $${prod}$${scenario.unit ? ' ' + scenario.unit : ''}`
              ]
        };
      }
    },

    probleme: {
      context: 'Une piscine rectangulaire mesure $12{,}5$ m de long et $6{,}4$ m de large. Un carreleur pose de la mosaïque sur toute la surface du fond.',
      tasks: [
        'Calcule l\'aire du fond de la piscine.',
        'La mosaïque coûte $28{,}50$ € le m². Quel est le coût total ?',
        'Arrondi le coût total à l\'euro près.'
      ],
      solutions: [
        'Aire : $12{,}5 \\times 6{,}4 = 80$ m².',
        'Coût : $80 \\times 28{,}50 = 2280$ €.',
        'Déjà un nombre entier : $2280$ €.'
      ],
      finalAnswer: 'Le coût total de la mosaïque est $2280$ €.'
    },

    evaluation: {
      title: 'Évaluation — Multiplication',
      duration: '20 min',
      questions: [
        { statement: 'Calcule $4{,}6 \\times 3{,}5$.', type: 'numeric', answer: 16.1, tolerance: 0.01, unit: '', points: 2, correction: '$46 \\times 35 = 1610$. $1+1=2$ décimales : $16{,}10$.' },
        { statement: 'Combien de décimales doit avoir le résultat de $2{,}75 \\times 1{,}3$ ?', type: 'numeric', answer: 3, tolerance: 0, unit: '', points: 2, correction: '$2$ déc. + $1$ déc. $= 3$ décimales.' },
        { statement: 'Un élève calcule $0{,}6 \\times 0{,}7$ et trouve $4{,}2$. Quelle erreur a-t-il faite ?', type: 'multiple-choice', options: ['Pas d\'erreur.', 'Il a oublié les décimales : résultat $= 0{,}42$.', 'Il aurait dû additionner.', 'Il a multiplié séparément.'], answer: 1, points: 2, correction: '$6 \\times 7 = 42$, $2$ décimales → $0{,}42$.' },
        { statement: 'Un lot de $12$ cahiers coûte $2{,}35$ € l\'unité. Quel est le prix total ?', type: 'numeric', answer: 28.2, tolerance: 0.01, unit: '€', points: 2, correction: '$12 \\times 235 = 2820$, $2$ décimales : $28{,}20$ €.' },
        { statement: 'Utilise la distributivité pour calculer $7 \\times 5{,}2$. Quelle décomposition est correcte ?', type: 'multiple-choice', options: ['$7 \\times 5 + 7 \\times 2 = 49$', '$7 \\times 5 + 7 \\times 0{,}2 = 36{,}4$', '$7 \\times 5 \\times 0{,}2 = 7$', '$5{,}2 \\times 5{,}2 = 27{,}04$'], answer: 1, points: 2, correction: '$7 \\times (5 + 0{,}2) = 35 + 1{,}4 = 36{,}4$.' }
      ]
    }
  });
