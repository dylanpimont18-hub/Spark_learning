window.MODULES.push(
    id: '4e-fractions-mult-div',
    level: 1, subject: 'maths',
    icon: '✖️',
    title: 'Fractions : Multiplication et Division',
    subtitle: 'Produit et quotient de fractions',
    keywords: ['Produit de fractions', 'Quotient', 'Fraction inverse', 'Simplification croisée'],
    physics: 'Formules enchaînées : $v = \\frac{d}{t}$, $\\rho = \\frac{m}{V}$, changements d\'unités',

    cours: {
      intro: 'Multiplier des fractions est plus simple que de les additionner : pas besoin de dénominateur commun — on multiplie numérateurs entre eux et dénominateurs entre eux.' +
        '<br/><br/>' +
        'La <strong>simplification croisée</strong> évite les grands nombres : avant de multiplier, simplifier en diagonale ($\\frac{3}{4} \\times \\frac{8}{9}$ → simplifier $3$ et $9$ par $3$, $4$ et $8$ par $4$ → $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$).' +
        '<br/><br/>' +
        'Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$. <strong>Intuition :</strong> diviser par $\\dfrac{1}{2}$ revient à multiplier par $2$ (couper en demi → deux fois plus de morceaux).' +
        '<br/><br/>' +
        'En physique, les conversions d\'unités enchaînent des multiplications/divisions de fractions : $1$ m/s $= \\dfrac{1\\,\\text{m}}{1\\,\\text{s}} \\times \\dfrac{3600\\,\\text{s}}{1\\,\\text{h}} = 3600$ m/h = $3{,}6$ km/h.',
      definitions: [
        { term: 'Produit de fractions', def: 'On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$.' },
        { term: 'Inverse d\'une fraction', def: 'L\'inverse de $\\dfrac{a}{b}$ (avec $a \\neq 0$) est $\\dfrac{b}{a}$. Leur produit vaut $1$ : $\\dfrac{a}{b} \\times \\dfrac{b}{a} = 1$.' },
        { term: 'Quotient de fractions', def: 'Diviser par une fraction, c\'est multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$.' },
        { term: 'Simplification croisée', def: 'Avant de multiplier, on simplifie un numérateur avec le dénominateur de l\'autre fraction (en diagonale) par un diviseur commun.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
           '<strong>Multiplication</strong> : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$. Simplifier avant de multiplier si possible (simplification croisée). <strong>Exemple :</strong> $\\dfrac{2}{5} \\times \\dfrac{3}{7} = \\dfrac{2 \\times 3}{5 \\times 7} = \\dfrac{6}{35}$.',
           '<strong>Division</strong> : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{a \\times d}{b \\times c}$. Diviser par une fraction = multiplier par son inverse. <strong>Exemple :</strong> $\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8}$.',
           '<strong>Simplification croisée</strong> : avant de multiplier, simplifier numérateur avec dénominateur en diagonale. <strong>Exemple :</strong> $\\dfrac{6}{7} \\times \\dfrac{14}{9}$ → on simplifie $6$ et $9$ par $3$ ($\\to 2$ et $3$), $7$ et $14$ par $7$ ($\\to 1$ et $2$) → $\\dfrac{2}{1} \\times \\dfrac{2}{3} = \\dfrac{4}{3}$.'
        ]
      },
      example: {
        statement: 'Une recette de gâteau nécessite $\\dfrac{3}{4}$ de litre de lait. On veut préparer $\\dfrac{2}{3}$ de la recette. Quel volume de lait faut-il ?',
        steps: [
          'Il faut calculer $\\dfrac{2}{3}$ de $\\dfrac{3}{4}$ L, c\'est-à-dire $\\dfrac{2}{3} \\times \\dfrac{3}{4}$.',
          'Simplification croisée : $3$ au numérateur et $3$ au dénominateur se simplifient → $\\dfrac{2}{1} \\times \\dfrac{1}{4} = \\dfrac{2}{4}$.',
          'On simplifie : $\\dfrac{2}{4} = \\dfrac{1}{2}$.'
        ],
        answer: 'Il faut $\\dfrac{1}{2}$ litre de lait, soit $0{,}5$ L.'
      },
      formulas: [
        '$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{ac}{bd}$',
        '$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{ad}{bc}$',
        '$\\dfrac{a}{b} \\div a = \\dfrac{1}{b}$ et $a \\times \\dfrac{1}{b} = \\dfrac{a}{b}$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Opération</th><th style="border:1px solid var(--border);padding:6px 14px">Règle</th><th style="border:1px solid var(--border);padding:6px 14px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Multiplication</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{ac}{bd}$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Division</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{15}{8}$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Inverse</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\to \\dfrac{b}{a}$</td><td style="border:1px solid var(--border);padding:6px 14px">Inverse de $\\dfrac{3}{7}$ est $\\dfrac{7}{3}$</td></tr></table>',
      recap: [
        'Multiplier deux fractions : on multiplie numérateurs entre eux et dénominateurs entre eux.',
        'Diviser par une fraction = multiplier par son inverse (on « retourne » la deuxième fraction).',
        'Toujours simplifier avant de multiplier (simplification croisée) pour éviter les grands nombres.',
        'L\'inverse de $\\dfrac{a}{b}$ est $\\dfrac{b}{a}$ — attention, $0$ n\'a pas d\'inverse.'
      ],
      piege: 'Erreur fréquente en division : diviser les numérateurs entre eux et les dénominateurs entre eux, comme en multiplication. $\\dfrac{6}{4} \\div \\dfrac{3}{2}$ ne vaut PAS $\\dfrac{6 \\div 3}{4 \\div 2} = \\dfrac{2}{2} = 1$. La bonne méthode : $\\dfrac{6}{4} \\times \\dfrac{2}{3} = \\dfrac{12}{12} = 1$. Même résultat ici, mais par chance !'
    },

    quiz: [
      {
        q: 'Calculer $\\dfrac{3}{4} \\times \\dfrac{8}{9}$.',
        options: ['$\\dfrac{24}{36}$', '$\\dfrac{2}{3}$', '$\\dfrac{11}{13}$', '$\\dfrac{24}{13}$'],
        answer: 1,
        correction: 'Simplification croisée : $\\dfrac{3}{4} \\times \\dfrac{8}{9} = \\dfrac{3 \\times 8}{4 \\times 9} = \\dfrac{24}{36} = \\dfrac{2}{3}$. (On pouvait simplifier : $3/9 = 1/3$ et $8/4 = 2$.)'
      },
      {
        q: 'Calculer $\\dfrac{5}{6} \\div \\dfrac{10}{3}$.',
        options: ['$\\dfrac{50}{18}$', '$\\dfrac{1}{4}$', '$\\dfrac{25}{9}$', '$\\dfrac{4}{1}$'],
        answer: 1,
        correction: '$\\dfrac{5}{6} \\div \\dfrac{10}{3} = \\dfrac{5}{6} \\times \\dfrac{3}{10} = \\dfrac{15}{60} = \\dfrac{1}{4}$.'
      },
      {
        q: 'Un élève calcule $\\dfrac{2}{3} \\div \\dfrac{4}{5}$ et trouve $\\dfrac{8}{15}$. Quelle est son erreur ?',
        options: [
          'Il a raison : $2 \\times 4 = 8$ et $3 \\times 5 = 15$, donc $\\dfrac{8}{15}$.',
          'Il a multiplié au lieu de diviser. Pour diviser, on inverse le second terme : $\\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$.',
          'Il faut d\'abord trouver un dénominateur commun : $\\dfrac{2}{3} - \\dfrac{4}{5} = \\dfrac{10-12}{15} = \\dfrac{-2}{15}$.',
          'Il faut diviser numérateurs et dénominateurs séparément : $\\dfrac{2 \\div 4}{3 \\div 5} = \\dfrac{0{,}5}{0{,}6}$.'
        ],
        answer: 1,
        correction: 'L\'élève a multiplié les deux fractions au lieu de diviser ! Pour diviser par $\\dfrac{4}{5}$, on multiplie par son inverse $\\dfrac{5}{4}$ : $\\dfrac{2}{3} \\div \\dfrac{4}{5} = \\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$. Vérification : $\\dfrac{5}{6} \\times \\dfrac{4}{5} = \\dfrac{20}{30} = \\dfrac{2}{3}$ ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'En cuisine, on prépare', emoji:'🍳'},
          {intro:'En pharmacie, on dose', emoji:'💊'},
          {intro:'En bricolage, on mesure', emoji:'🔨'},
          {intro:'En couture, on coupe', emoji:'✂️'},
          {intro:'En jardinage, on mélange', emoji:'🌱'}
        ]);
        const a = rand(2, 7), b = rand(2, 8), c = rand(2, 6), d = rand(2, 7);
        const num = a * c, den = b * d;
        const pgcd = (x, y) => y === 0 ? x : pgcd(y, x % y);
        const g = pgcd(num, den);
        const answer = parseFloat((num / den).toFixed(4));
        return {
          statement: `${ctx.emoji} ${ctx.intro} une quantité qui vaut $\\dfrac{${a}}{${b}}$ d'un lot de $\\dfrac{${c}}{${d}}$. Calculer $\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${d}}$. Donner le résultat décimal.`,
          answer,
          tolerance: 0.001,
          unit: '',
          hint: `Multiplier numérateurs ensemble et dénominateurs ensemble : $\\dfrac{${a} \\times ${c}}{${b} \\times ${d}}$.`,
          solution: [
            `$\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${d}} = \\dfrac{${num}}{${den}} = \\dfrac{${num/g}}{${den/g}}$`,
            `Valeur décimale : $${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un laboratoire prépare $\\dfrac{3}{4}$ de litre d\'une solution à partir d\'une solution mère de concentration $C_0 = \\dfrac{2}{5}\\,\\text{mol/L}$. La relation de dilution est $C_1 V_1 = C_0 V_0$.',
      schema: null,
      tasks: [
        'Calculer le nombre de moles $n = C_0 \\times V_0$ dans le volume prélevé $V_0 = \\dfrac{1}{5}\\,\\text{L}$.',
        'On dilue cette quantité dans le volume final $V_1 = \\dfrac{3}{4}\\,\\text{L}$. Calculer $C_1 = \\dfrac{n}{V_1}$.',
        'Exprimer $C_1$ sous forme de fraction irréductible.'
      ],
      solutions: [
        '$n = C_0 \\times V_0 = \\dfrac{2}{5} \\times \\dfrac{1}{5} = \\dfrac{2}{25}\\,\\text{mol}$.',
        '$C_1 = \\dfrac{n}{V_1} = \\dfrac{2/25}{3/4} = \\dfrac{2}{25} \\times \\dfrac{4}{3} = \\dfrac{8}{75}\\,\\text{mol/L}$.',
        '$\\dfrac{8}{75}$ est déjà irréductible (PGCD(8,75) = 1). $C_1 \\approx 0{,}107\\,\\text{mol/L}$.'
      ],
      finalAnswer: '$C_1 = \\dfrac{8}{75}\\,\\text{mol/L} \\approx 0{,}107\\,\\text{mol/L}$'
    },

    evaluation: {
      title: 'Évaluation — Fractions : Multiplication et Division',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $\\dfrac{5}{7} \\times \\dfrac{14}{15}$. Donner le résultat sous forme de fraction irréductible.',
          type: 'multiple-choice',
          options: ['$\\dfrac{70}{105}$', '$\\dfrac{2}{3}$', '$\\dfrac{10}{15}$', '$\\dfrac{1}{3}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{5}{7} \\times \\dfrac{14}{15}$. Simplification croisée : $5$ et $15$ se simplifient par $5$ ($\\to 1$ et $3$), $7$ et $14$ par $7$ ($\\to 1$ et $2$). Résultat : $\\dfrac{1 \\times 2}{1 \\times 3} = \\dfrac{2}{3}$.'
        },
        {
          statement: 'Calculer $\\dfrac{3}{8} \\div \\dfrac{9}{4}$. Donner le résultat décimal.',
          type: 'numeric',
          answer: 1/6,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$\\dfrac{3}{8} \\div \\dfrac{9}{4} = \\dfrac{3}{8} \\times \\dfrac{4}{9} = \\dfrac{12}{72} = \\dfrac{1}{6} \\approx 0{,}167$.'
        },
        {
          statement: 'Un réservoir contient $\\dfrac{3}{5}$ de litre d\'eau. On en utilise $\\dfrac{2}{3}$. Quel volume d\'eau a-t-on utilisé (en litres) ?',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.001,
          unit: 'L',
          points: 2,
          correction: 'Volume utilisé $= \\dfrac{2}{3} \\times \\dfrac{3}{5} = \\dfrac{6}{15} = \\dfrac{2}{5} = 0{,}4\\,\\text{L}$.'
        },
        {
          statement: 'Quel est l\'inverse de $\\dfrac{7}{3}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{-7}{3}$', '$\\dfrac{3}{7}$', '$\\dfrac{-3}{7}$', '$\\dfrac{7}{3}$'],
          answer: 1,
          points: 2,
          correction: 'L\'inverse d\'une fraction $\\dfrac{a}{b}$ est $\\dfrac{b}{a}$. L\'inverse de $\\dfrac{7}{3}$ est $\\dfrac{3}{7}$. Vérification : $\\dfrac{7}{3} \\times \\dfrac{3}{7} = \\dfrac{21}{21} = 1$ ✓'
        },
        {
          statement: 'Calculer $\\dfrac{4}{5} \\times \\dfrac{3}{2} \\div \\dfrac{6}{5}$. Donner le résultat décimal.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{4}{5} \\times \\dfrac{3}{2} \\div \\dfrac{6}{5} = \\dfrac{4}{5} \\times \\dfrac{3}{2} \\times \\dfrac{5}{6} = \\dfrac{4 \\times 3 \\times 5}{5 \\times 2 \\times 6} = \\dfrac{60}{60} = 1$.'
        }
      ]
    }
  },

    {
);
