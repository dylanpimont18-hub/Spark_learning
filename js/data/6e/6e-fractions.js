/* =========================================================
   Spark Learning – data/6e/6e-fractions.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-fractions',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Fractions',
    subtitle: 'Nommer, simplifier, comparer',
    keywords: ['Numérateur', 'Dénominateur', 'Simplification', 'Fraction irréductible', 'Comparaison'],
    physics: 'Fraction massique, fraction volumique, rapport de grandeurs en chimie',

    cours: {
      intro: 'Une <strong>fraction</strong> $\\dfrac{a}{b}$ représente $a$ parts d\'un tout divisé en $b$ parts égales. C\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion.<br/><br/>' +
        'Quand $a > b$, la fraction est dite <strong>impropre</strong> ($\\dfrac{7}{3} > 1$) : elle représente plus d\'un entier. Deux fractions peuvent être égales avec des chiffres différents : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$, car $\\dfrac{k \\times a}{k \\times b} = \\dfrac{a}{b}$.<br/><br/>' +
        'En chimie, la <strong>fraction massique</strong> $w = \\dfrac{m_{\\text{soluté}}}{m_{\\text{solution}}}$ est toujours entre $0$ et $1$. Savoir simplifier et comparer des fractions est indispensable pour tous les calculs de concentration, de proportion et de probabilité.',
      definitions: [
        { term: 'Fraction', def: 'Écriture $\\dfrac{a}{b}$ où $a$ est le numérateur et $b$ le dénominateur ($b \\neq 0$). Elle représente $a$ parts sur $b$.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun autre que $1$. On l\'obtient en divisant par le PGCD.' },
        { term: 'PGCD', def: 'Plus Grand Commun Diviseur de deux entiers. C\'est le plus grand nombre qui divise les deux à la fois.' },
        { term: 'Fractions égales', def: '$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$ pour tout $k \\neq 0$. Multiplier ou diviser les deux termes par un même nombre ne change pas la valeur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Simplifier</strong> : trouver le PGCD du numérateur et du dénominateur, puis diviser les deux par ce PGCD. Le PGCD est le plus grand entier qui divise les deux. <em>Exemple :</em> $\\dfrac{18}{24}$ — diviseurs de 18 : 1, 2, 3, 6, 9, 18 ; diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24 → PGCD = 6. Donc $\\dfrac{18}{24} = \\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$. Vérifie : 3 et 4 n\'ont pas de diviseur commun → irréductible ✓',
          '<strong>Comparer</strong> : mettre au même dénominateur en calculant le PPCM des deux dénominateurs. <em>Exemple :</em> comparer $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ → PPCM(3, 5) = 15. On amplifie : $\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$. Comme $10 > 9$, on conclut $\\dfrac{2}{3} > \\dfrac{3}{5}$. Astuce rapide : $\\dfrac{a}{b}$ vs $\\dfrac{c}{d}$ → comparer $a \\times d$ et $b \\times c$ (produit en croix).',
          '<strong>Convertir en décimal</strong> : diviser le numérateur par le dénominateur. <em>Exemple :</em> $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Si le dénominateur est 2, 4, 5, 10, 20 ou 25, la conversion est exacte ; sinon, le résultat peut être infini périodique : $\\dfrac{1}{3} = 0{,}333\\ldots$'
        ]
      },
      example: {
        statement: 'Simplifier $\\dfrac{42}{56}$ et donner sa valeur décimale.',
        steps: [
          'Cherchons le PGCD de $42$ et $56$. Diviseurs de $42$ : 1, 2, 3, 6, 7, 14, 21, 42. Diviseurs de $56$ : 1, 2, 4, 7, 8, 14, 28, 56. PGCD $= 14$.',
          'On divise : $\\dfrac{42}{56} = \\dfrac{42 \\div 14}{56 \\div 14} = \\dfrac{3}{4}$.',
          'Vérification : PGCD$(3, 4) = 1$ → irréductible ✓',
          'Valeur décimale : $3 \\div 4 = 0{,}75$.'
        ],
        answer: '$\\dfrac{42}{56} = \\dfrac{3}{4} = 0{,}75$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Équivalence de fractions',
        title: 'Trois façons de colorier la même moitié',
        description: 'Un disque, une bande de $6$ parts et une grille de $100$ cases : dans chaque cas, exactement la moitié est coloriée, donc $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.',
        svg: `
          <svg viewBox="0 0 400 205" role="img" aria-labelledby="fractions-diagram-title fractions-diagram-desc">
            <title id="fractions-diagram-title">Equivalence de fractions 1/2, 3/6 et 50/100</title>
            <desc id="fractions-diagram-desc">Un disque coupe en 2 parts avec une moitie coloree, une bande coupee en 6 parts avec 3 parts colorees, et une grille de 100 cases avec 50 cases colorees : les trois figures representent la meme proportion.</desc>
            <circle class="frame-line" cx="70" cy="100" r="54" fill="none"></circle>
            <path d="M70 46 A54 54 0 0 0 70 154 Z" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></path>
            <line class="grid-line" x1="70" y1="46" x2="70" y2="154"></line>
            <text class="annotation-label" x="70" y="188" text-anchor="middle">1/2</text>
            <text x="140" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="160" y="70" width="120" height="60" fill="none"></rect>
            <rect x="160" y="70" width="60" height="60" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="180" y1="70" x2="180" y2="130"></line>
            <line class="grid-line" x1="200" y1="70" x2="200" y2="130"></line>
            <line class="grid-line" x1="220" y1="70" x2="220" y2="130"></line>
            <line class="grid-line" x1="240" y1="70" x2="240" y2="130"></line>
            <line class="grid-line" x1="260" y1="70" x2="260" y2="130"></line>
            <text class="annotation-label" x="220" y="188" text-anchor="middle">3/6</text>
            <text x="296" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="312" y="60" width="80" height="80" fill="none"></rect>
            <rect x="312" y="60" width="80" height="40" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="320" y1="60" x2="320" y2="140"></line>
            <line class="grid-line" x1="328" y1="60" x2="328" y2="140"></line>
            <line class="grid-line" x1="336" y1="60" x2="336" y2="140"></line>
            <line class="grid-line" x1="344" y1="60" x2="344" y2="140"></line>
            <line class="grid-line" x1="352" y1="60" x2="352" y2="140"></line>
            <line class="grid-line" x1="360" y1="60" x2="360" y2="140"></line>
            <line class="grid-line" x1="368" y1="60" x2="368" y2="140"></line>
            <line class="grid-line" x1="376" y1="60" x2="376" y2="140"></line>
            <line class="grid-line" x1="384" y1="60" x2="384" y2="140"></line>
            <line class="grid-line" x1="312" y1="68" x2="392" y2="68"></line>
            <line class="grid-line" x1="312" y1="76" x2="392" y2="76"></line>
            <line class="grid-line" x1="312" y1="84" x2="392" y2="84"></line>
            <line class="grid-line" x1="312" y1="92" x2="392" y2="92"></line>
            <line class="grid-line" x1="312" y1="100" x2="392" y2="100"></line>
            <line class="grid-line" x1="312" y1="108" x2="392" y2="108"></line>
            <line class="grid-line" x1="312" y1="116" x2="392" y2="116"></line>
            <line class="grid-line" x1="312" y1="124" x2="392" y2="124"></line>
            <line class="grid-line" x1="312" y1="132" x2="392" y2="132"></line>
            <text class="annotation-label" x="352" y="188" text-anchor="middle">50/100</text>
          </svg>
        `,
        notes: [
          'Le disque est coupe en $2$ parts egales, la bande en $6$ parts egales, la grille en $100$ cases egales : dans chaque figure, on colorie exactement la moitie de la surface.',
          'On passe de $\\dfrac{1}{2}$ a $\\dfrac{3}{6}$ en multipliant numerateur et denominateur par $3$, et de $\\dfrac{1}{2}$ a $\\dfrac{50}{100}$ en multipliant par $50$ : c\'est la propriete $\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$.',
          'Pour retrouver la forme la plus simple $\\dfrac{1}{2}$ a partir de $\\dfrac{50}{100}$, on divise les deux termes par leur PGCD, ici $50$.'
        ],
        reading: 'Compte les parts coloriees et le nombre total de parts dans chaque figure : le rapport colorie/total reste toujours $1$ sur $2$.',
        caption: 'Trois representations visuelles de la meme fraction : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.'
      },
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ (simplification par $k$)',
        '$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$ (amplification par $n$)',
        '$\\dfrac{a}{b} < \\dfrac{c}{d} \\Leftrightarrow a \\times d < b \\times c$ (si $b, d > 0$)'
      ],
      recap: [
        'Une fraction $\\dfrac{a}{b}$ est irréductible quand $\\text{PGCD}(a, b) = 1$.',
        'Pour simplifier, on divise numérateur et dénominateur par leur PGCD.',
        'Pour comparer, on utilise le même dénominateur ou les produits en croix.',
        'On ne simplifie JAMAIS par addition/soustraction, seulement par multiplication/division.'
      ],
      piege: 'Erreur fréquente : simplifier $\\dfrac{a + k}{b + k}$ en divisant par $k$. IMPOSSIBLE ! On ne peut simplifier qu\'en multipliant ou divisant numérateur ET dénominateur par un même facteur. $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓ mais $\\dfrac{6+3}{9+3} \\neq \\dfrac{2}{3}$ ✗.'
    },

    quiz: [
      {
        q: 'Quelle est la forme irréductible de $\\dfrac{24}{36}$ ?',
        options: ['$\\dfrac{4}{6}$', '$\\dfrac{2}{3}$', '$\\dfrac{6}{9}$', '$\\dfrac{12}{18}$'],
        answer: 1,
        correction: 'Le PGCD de 24 et 36 est 12. $\\dfrac{24}{36} = \\dfrac{24 \\div 12}{36 \\div 12} = \\dfrac{2}{3}$. C\'est la seule forme irréductible.'
      },
      {
        q: 'Laquelle de ces simplifications est <strong>incorrecte</strong> ?',
        options: ['$\\dfrac{12}{18} = \\dfrac{2}{3}$', '$\\dfrac{15}{25} = \\dfrac{3}{5}$', '$\\dfrac{6+4}{9+4} = \\dfrac{6}{9}$', '$\\dfrac{8}{12} = \\dfrac{2}{3}$'],
        answer: 2,
        correction: 'On ne peut pas simplifier une fraction en ajoutant (ou soustrayant) la même valeur au numérateur et au dénominateur ! $\\dfrac{6+4}{9+4} = \\dfrac{10}{13} \\neq \\dfrac{6}{9}$. Pour simplifier, on ne peut que multiplier ou diviser numérateur ET dénominateur par un même facteur : $\\dfrac{6}{9} = \\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$ ✓.'
      },
      {
        q: 'Une solution contient $15$ g de sel dissous dans $300$ g de solution. Quelle est la fraction massique du sel ?',
        options: ['$\\dfrac{1}{20}$', '$\\dfrac{1}{15}$', '$\\dfrac{1}{5}$', '$\\dfrac{3}{20}$'],
        answer: 0,
        correction: '$w = \\dfrac{15}{300} = \\dfrac{1}{20} = 0{,}05$. La fraction massique est $\\dfrac{1}{20}$, soit 5 % de la masse totale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
        const context = pick([
          'Simplifie la fraction',
          'Un chimiste mesure la proportion',
          'En cuisine, on utilise la fraction',
          'Un cartographe exprime l\'échelle'
        ]);
        const k = rand(2, 6);
        let a = rand(2, 9), b = rand(2, 9);
        let attempts = 0;
        while ((pgcd(a, b) !== 1 || a === b) && attempts < 20) { b = rand(2, 9); attempts++; }
        const num = k * a, den = k * b;
        const val = parseFloat((a / b).toFixed(4));
        return {
          statement: `${context} $\\dfrac{${num}}{${den}}$ et donne sa valeur décimale arrondie au millième.`,
          answer: val,
          tolerance: 0.001,
          unit: '',
          hint: `La fraction n'est pas irréductible : ${num} et ${den} ont un diviseur commun. Essaie de diviser les deux par ${k}.`,
          solution: [
            `Cherchons un diviseur commun à $${num}$ et $${den}$.`,
            `On observe : $${num} = ${k} \\times ${a}$ et $${den} = ${k} \\times ${b}$.`,
            `On divise numérateur et dénominateur par $${k}$ : $\\dfrac{${num}}{${den}} = \\dfrac{${a}}{${b}}$.`,
            `Vérification : $\\text{PGCD}(${a}, ${b}) = 1$ → la fraction $\\dfrac{${a}}{${b}}$ est irréductible ✓`,
            `Valeur décimale : $${a} \\div ${b} = ${val.toString().replace('.', '{,}')}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un chimiste prépare une solution de glucose. Il dissout $45$ g de glucose dans de l\'eau pour obtenir $250$ g de solution totale.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Simplifier la fraction $\\dfrac{45}{250}$ pour exprimer la fraction massique $w$ sous forme irréductible.',
        '(Étape 3 de la méthode) Convertir $w$ en décimal, puis exprimer le pourcentage massique.',
        'Réflexion : si on double la masse de soluté ET la masse de solution, la fraction massique change-t-elle ? Justifie avec la propriété d\'amplification vue en cours.'
      ],
      solutions: [
        '$w = \\dfrac{m_{\\text{glucose}}}{m_{\\text{solution}}} = \\dfrac{45}{250} = \\dfrac{9}{50} = 0{,}18$.',
        '$w\\% = 0{,}18 \\times 100 = 18\\%$ (la solution est à 18 % en masse).',
        'Non. $\\dfrac{90}{500} = \\dfrac{9}{50} = 0{,}18$. Multiplier numérateur et dénominateur par le même facteur ne change pas la fraction.'
      ],
      finalAnswer: '$w = \\dfrac{9}{50} = 18\\%$'
    },

    evaluation: {
      title: 'Évaluation — Fractions',
      duration: '20 min',
      questions: [
        {
          statement: 'Simplifie la fraction $\\dfrac{36}{48}$ et donne le numérateur de la fraction irréductible.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le PGCD de $36$ et $48$ est $12$. On divise : $\\dfrac{36}{48} = \\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$. Le numérateur est $3$.'
        },
        {
          statement: 'Quelle fraction est égale à $\\dfrac{5}{8}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{10}{24}$', '$\\dfrac{15}{24}$', '$\\dfrac{20}{40}$', '$\\dfrac{25}{35}$'],
          answer: 1,
          points: 2,
          correction: 'On amplifie $\\dfrac{5}{8}$ par $3$ : $\\dfrac{5 \\times 3}{8 \\times 3} = \\dfrac{15}{24}$. Vérification : $\\dfrac{15}{24} = \\dfrac{15 \\div 3}{24 \\div 3} = \\dfrac{5}{8}$ ✓.'
        },
        {
          statement: 'Compare $\\dfrac{3}{7}$ et $\\dfrac{5}{9}$ en utilisant les produits en croix. Donne la valeur de $3 \\times 9$.',
          type: 'numeric',
          answer: 27,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Produits en croix : $3 \\times 9 = 27$ et $7 \\times 5 = 35$. Comme $27 < 35$, on conclut $\\dfrac{3}{7} < \\dfrac{5}{9}$.'
        },
        {
          statement: 'Convertis $\\dfrac{7}{4}$ en nombre décimal.',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{7}{4} = 7 \\div 4 = 1{,}75$. C\'est une fraction impropre ($7 > 4$), donc le résultat est supérieur à $1$.'
        },
        {
          statement: 'Parmi ces simplifications, laquelle est correcte ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{8+4}{12+4} = \\dfrac{8}{12}$', '$\\dfrac{14}{21} = \\dfrac{2}{3}$', '$\\dfrac{9}{15} = \\dfrac{2}{5}$', '$\\dfrac{6}{10} = \\dfrac{2}{5}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{14}{21}$ : PGCD$(14, 21) = 7$. $\\dfrac{14 \\div 7}{21 \\div 7} = \\dfrac{2}{3}$ ✓. Les autres : la première additionne au lieu de diviser (interdit), $\\dfrac{9}{15} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$, et $\\dfrac{6}{10} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$.'
        }
      ]
    }
  });
