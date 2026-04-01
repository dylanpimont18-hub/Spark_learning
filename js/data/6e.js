/* =========================================================
   Spark Learning – data/6e.js
   Modules 6e (Collège – classe de Sixième)
   ========================================================= */

window.MODULES.push(

  /* ─── Module 1 : Fractions ─── */
  {
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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Opération</th><th style="border:1px solid var(--border);padding:8px">Formule</th><th style="border:1px solid var(--border);padding:8px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Simplifier</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{18}{24} = \\dfrac{3}{4}$ (PGCD $= 6$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Amplifier</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{2}{3} = \\dfrac{10}{15}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Comparer</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} \\lessgtr \\dfrac{c}{d} \\Leftrightarrow ad \\lessgtr bc$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{2}{3} > \\dfrac{3}{5}$ car $10 > 9$</td></tr></table>',
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
            `Valeur décimale : $${a} \\div ${b} = ${val}$`
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
  },

  /* ─── Module 2 : Volumes ─── */
  {
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
  },

  /* ─── Module 3 : Angles ─── */
  {
    id: '6e-angles',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Angles',
    subtitle: 'Mesurer, construire, types d\'angles',
    keywords: ['Angle aigu', 'Angle obtus', 'Angle droit', 'Degré', 'Angles supplémentaires', 'Angles complémentaires'],
    physics: 'Angle d\'incidence et de réfraction (Snell-Descartes), décomposition de forces',

    cours: {
      intro: 'Un <strong>angle</strong> mesure l\'écartement entre deux demi-droites issues d\'un même sommet. Il ne dépend pas de la longueur des côtés — un angle de $60°$ reste $60°$ que les segments mesurent $1$ cm ou $1$ km.<br/><br/>' +
        'On mesure les angles en <strong>degrés</strong> (°) avec un rapporteur. En maths avancées, on utilise aussi les radians : $180° = \\pi$ rad.<br/><br/>' +
        'En physique, les angles sont partout : angle d\'incidence en optique, angle du plan incliné en mécanique, déphasage en électricité. Les propriétés des <strong>angles complémentaires</strong> (somme $= 90°$) et <strong>supplémentaires</strong> (somme $= 180°$) permettent de résoudre de nombreux problèmes.',
      definitions: [
        { term: 'Angle aigu', def: 'Angle dont la mesure est comprise entre $0°$ et $90°$ (exclu).' },
        { term: 'Angle droit', def: 'Angle mesurant exactement $90°$. Symbolisé par un petit carré.' },
        { term: 'Angle obtus', def: 'Angle dont la mesure est comprise entre $90°$ (exclu) et $180°$ (exclu).' },
        { term: 'Angles complémentaires', def: 'Deux angles dont la somme vaut $90°$. Exemple : $35°$ et $55°$.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Exemple : $120°$ et $60°$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'angle</strong> : aigu ($0° < \\alpha < 90°$), droit ($= 90°$), obtus ($90° < \\alpha < 180°$), plat ($= 180°$). <em>Exemple :</em> $\\alpha = 115°$ est obtus car $90° < 115° < 180°$.',
          '<strong>Utiliser les relations d\'angles</strong> : complémentaires (somme $= 90°$), supplémentaires (somme $= 180°$), triangle (somme $= 180°$). <em>Exemple :</em> dans un triangle avec $47°$ et $68°$, le troisième angle $= 180° - 47° - 68° = 65°$.',
          '<strong>Angles et droites parallèles</strong> : quand une droite coupe deux parallèles, les angles alternes-internes sont égaux et les angles correspondants sont égaux.'
        ]
      },
      example: {
        statement: 'Dans un triangle rectangle, un angle aigu mesure $37°$. Calculer l\'autre angle aigu.',
        steps: [
          'Un triangle rectangle a un angle de $90°$.',
          'La somme des trois angles d\'un triangle vaut $180°$.',
          '$\\alpha = 180° - 90° - 37° = 53°$.',
          'Vérification : $90° + 37° + 53° = 180°$ ✓'
        ],
        answer: 'L\'autre angle aigu mesure $53°$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Mesure</th><th style="border:1px solid var(--border);padding:8px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Aigu</td><td style="border:1px solid var(--border);padding:8px">$0° < \\alpha < 90°$</td><td style="border:1px solid var(--border);padding:8px">$45°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Droit</td><td style="border:1px solid var(--border);padding:8px">$\\alpha = 90°$</td><td style="border:1px solid var(--border);padding:8px">$90°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Obtus</td><td style="border:1px solid var(--border);padding:8px">$90° < \\alpha < 180°$</td><td style="border:1px solid var(--border);padding:8px">$120°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Plat</td><td style="border:1px solid var(--border);padding:8px">$\\alpha = 180°$</td><td style="border:1px solid var(--border);padding:8px">$180°$</td></tr></table>',
      formulas: [
        '$\\alpha + \\beta = 90°$ (angles complémentaires)',
        '$\\alpha + \\beta = 180°$ (angles supplémentaires)',
        '$\\hat{A} + \\hat{B} + \\hat{C} = 180°$ (triangle)',
        '$\\pi\\,\\text{rad} = 180°$, donc $1° = \\dfrac{\\pi}{180}\\,\\text{rad}$'
      ],
      recap: [
        'Un angle mesure l\'écartement entre deux demi-droites, indépendamment de leur longueur.',
        'Complémentaires : somme $= 90°$. Supplémentaires : somme $= 180°$.',
        'La somme des angles d\'un triangle vaut toujours $180°$.',
        'Ne pas confondre la mesure d\'un angle avec la longueur d\'un côté.'
      ],
      piege: 'Ne pas confondre la mesure d\'un angle et la longueur d\'un côté. Un angle ne dépend pas de la longueur des segments qui le forment — il mesure uniquement l\'écartement entre les deux demi-droites.'
    },

    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $47°$ et $68°$. Quelle est la mesure du troisième angle ?', options: ['$55°$', '$65°$', '$75°$', '$85°$'], answer: 1, correction: 'La somme des angles d\'un triangle est $180°$. Troisième angle $= 180° - 47° - 68° = 65°$.' },
      { q: 'Deux angles sont complémentaires et leur différence est $20°$. Quelle est la valeur du plus grand ?', options: ['$35°$', '$45°$', '$55°$', '$65°$'], answer: 2, correction: 'Soit $x$ le plus petit et $x + 20°$ le plus grand. $x + (x+20°) = 90°$ → $2x = 70°$ → $x = 35°$. Le plus grand vaut $55°$.' },
      { q: 'Deux angles sont supplémentaires. L\'un vaut $3x + 10°$ et l\'autre $x + 30°$. Quelle est la valeur de $x$ ?', options: ['$25°$', '$35°$', '$28°$', '$30°$'], answer: 1, correction: '$(3x+10) + (x+30) = 180 \\Rightarrow 4x + 40 = 180 \\Rightarrow x = 35°$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const context = pick([
          'Dans un triangle',
          'Sur un plan de construction',
          'En optique, dans un prisme',
          'Dans un triangle isocèle'
        ]);
        const a1 = rand(20, 70), a2 = rand(20, 70);
        const a3 = 180 - a1 - a2;
        if (a3 <= 0) { return { statement: `Dans un triangle, deux angles mesurent $40°$ et $60°$. Calcule le troisième angle.`, answer: 80, tolerance: 0, unit: '°', hint: 'La somme des trois angles d\'un triangle est toujours 180°.', solution: ['$180° - 40° - 60° = 80°$'] }; }
        return {
          statement: `${context}, deux angles mesurent $${a1}°$ et $${a2}°$. Quelle est la mesure du troisième angle (en degrés) ?`,
          answer: a3,
          tolerance: 0,
          unit: '°',
          hint: 'La somme des angles d\'un triangle vaut toujours 180°.',
          solution: [
            `Propriété : la somme des angles d'un triangle vaut toujours $180°$.`,
            `$\\alpha = 180° - ${a1}° - ${a2}° = ${a3}°$`,
            `Vérification : $${a1}° + ${a2}° + ${a3}° = 180°$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Un rayon lumineux se propage dans l\'air ($n_1 = 1{,}00$) et arrive à la surface d\'un verre ($n_2 = 1{,}50$). L\'angle d\'incidence par rapport à la normale est $i_1 = 30°$.',
      schema: null,
      tasks: [
        'Rappeler la loi de Snell-Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.',
        'Calculer $\\sin i_2$ puis l\'angle de réfraction $i_2$ (en degrés, arrondi à l\'unité).',
        'Le rayon réfracté se rapproche-t-il ou s\'éloigne-t-il de la normale ? Pourquoi ?'
      ],
      solutions: [
        '$n_1 \\sin i_1 = n_2 \\sin i_2$.',
        '$\\sin i_2 = \\dfrac{1{,}00 \\times \\sin 30°}{1{,}50} = \\dfrac{0{,}500}{1{,}50} = 0{,}333$. Donc $i_2 = \\arcsin(0{,}333) \\approx 19°$.',
        'Le rayon se rapproche de la normale ($i_2 < i_1$) car il passe dans un milieu plus dense ($n_2 > n_1$).'
      ],
      finalAnswer: '$i_2 \\approx 19°$ — le rayon se rapproche de la normale en entrant dans le verre.'
    },

    evaluation: {
      title: 'Évaluation — Angles',
      duration: '20 min',
      questions: [
        { statement: 'Dans un triangle, les trois angles mesurent $52°$, $73°$ et $\\alpha$. Calcule $\\alpha$ (en degrés).', type: 'numeric', answer: 55, tolerance: 0, unit: '°', points: 2, correction: '$\\alpha = 180° - 52° - 73° = 55°$.' },
        { statement: 'Deux angles sont supplémentaires. L\'un mesure $118°$. Quelle est la mesure de l\'autre ?', type: 'numeric', answer: 62, tolerance: 0, unit: '°', points: 2, correction: '$180° - 118° = 62°$.' },
        { statement: 'Un angle mesure $37°$. Comment le classe-t-on ?', type: 'multiple-choice', options: ['Angle droit', 'Angle obtus', 'Angle aigu', 'Angle plat'], answer: 2, points: 2, correction: '$0° < 37° < 90°$ → angle aigu.' },
        { statement: 'Deux angles complémentaires ont pour mesures $2x + 5°$ et $3x - 10°$. Calcule la valeur de $x$ (en degrés).', type: 'numeric', answer: 19, tolerance: 0, unit: '°', points: 2, correction: '$(2x + 5) + (3x - 10) = 90$, $5x - 5 = 90$, $x = 19°$.' },
        { statement: 'Quel est l\'angle formé par les aiguilles d\'une horloge à $15\\text{h}00$ ?', type: 'multiple-choice', options: ['$180°$', '$90°$', '$60°$', '$120°$'], answer: 1, points: 2, correction: 'De $12$ à $3$ : $3 \\times 30° = 90°$.' }
      ]
    }
  },

  /* ─── Module 4 : Nombres décimaux ─── */
  {
    id: '6e-nombres-decimaux',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Nombres entiers et décimaux',
    subtitle: 'Lire, écrire, comparer, ranger',
    keywords: ['Chiffre', 'Décimal', 'Valeur positionnelle', 'Comparer', 'Ranger'],
    physics: false,

    cours: {
      intro: 'Un <strong>nombre décimal</strong> s\'écrit avec une partie entière (à gauche de la virgule) et une partie décimale (à droite). Par exemple, $3{,}75$ = 3 unités + 7 dixièmes + 5 centièmes.<br/><br/>' +
        '<strong>L\'erreur la plus fréquente</strong> : croire que $1{,}12 > 1{,}9$ parce que « $12 > 9$ ». C\'est faux ! On compare position par position en partant de la gauche. Les dixièmes ($1$ vs $9$) donnent déjà la réponse : $1{,}9 > 1{,}12$.<br/><br/>' +
        'Ce concept de <strong>valeur positionnelle</strong> est fondamental : chaque chiffre a une valeur qui dépend de sa position (unités, dixièmes, centièmes…). Plus de chiffres ne veut pas dire plus grand.',
      definitions: [
        { term: 'Partie entière', def: 'Les chiffres à gauche de la virgule. Pour $47{,}35$, la partie entière est $47$.' },
        { term: 'Partie décimale', def: 'Les chiffres à droite de la virgule. Pour $47{,}35$, la partie décimale est $35$ (3 dixièmes et 5 centièmes).' },
        { term: 'Valeur positionnelle', def: 'La valeur d\'un chiffre dépend de sa position : dixièmes ($\\times \\frac{1}{10}$), centièmes ($\\times \\frac{1}{100}$), millièmes ($\\times \\frac{1}{1000}$).' },
        { term: 'Encadrement', def: 'Placer un nombre entre deux entiers consécutifs : $\\lfloor x \\rfloor \\leq x < \\lfloor x \\rfloor + 1$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> la partie entière et la partie décimale. <em>Exemple :</em> $56{,}709$ → partie entière = $56$, dixièmes = $7$, centièmes = $0$, millièmes = $9$.',
          '<strong>Repérer la valeur positionnelle</strong> de chaque chiffre. <em>Exemple :</em> dans $3{,}75$, le $7$ vaut $7 \\times 0{,}1 = 0{,}7$ et le $5$ vaut $5 \\times 0{,}01 = 0{,}05$.',
          '<strong>Comparer</strong> : aligner les virgules et comparer chiffre par chiffre en partant de la gauche. <em>Exemple :</em> $2{,}9 > 2{,}50$ car les dixièmes ($9 > 5$) suffisent.',
          '<strong>Ranger</strong> : du plus petit au plus grand (croissant) ou l\'inverse (décroissant).'
        ]
      },
      example: {
        statement: 'Ranger dans l\'ordre croissant : $5{,}07$ ; $5{,}7$ ; $5{,}007$ ; $5{,}70$.',
        steps: [
          'Parties entières toutes égales à $5$.',
          'Dixièmes : $5{,}007$ a $0$ dixième, $5{,}07$ a $0$ dixième, $5{,}7$ et $5{,}70$ ont $7$ dixièmes.',
          'Pour $5{,}007$ vs $5{,}07$ : centièmes $0 < 7$, donc $5{,}007 < 5{,}07$.',
          '$5{,}7 = 5{,}70$ (même valeur).'
        ],
        answer: '$5{,}007 < 5{,}07 < 5{,}7 = 5{,}70$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Position</th><th style="border:1px solid var(--border);padding:8px">Nom</th><th style="border:1px solid var(--border);padding:8px">Valeur</th><th style="border:1px solid var(--border);padding:8px">Ex. dans $47{,}356$</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Dizaines</td><td style="border:1px solid var(--border);padding:8px">$\\times 10$</td><td style="border:1px solid var(--border);padding:8px">40</td><td style="border:1px solid var(--border);padding:8px">$4$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Unités</td><td style="border:1px solid var(--border);padding:8px">$\\times 1$</td><td style="border:1px solid var(--border);padding:8px">7</td><td style="border:1px solid var(--border);padding:8px">$7$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Dixièmes</td><td style="border:1px solid var(--border);padding:8px">$\\times 0{,}1$</td><td style="border:1px solid var(--border);padding:8px">0,3</td><td style="border:1px solid var(--border);padding:8px">$3$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Centièmes</td><td style="border:1px solid var(--border);padding:8px">$\\times 0{,}01$</td><td style="border:1px solid var(--border);padding:8px">0,05</td><td style="border:1px solid var(--border);padding:8px">$5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Millièmes</td><td style="border:1px solid var(--border);padding:8px">$\\times 0{,}001$</td><td style="border:1px solid var(--border);padding:8px">0,006</td><td style="border:1px solid var(--border);padding:8px">$6$</td></tr></table>',
      formulas: [
        '$3{,}75 = 3 + \\dfrac{7}{10} + \\dfrac{5}{100} = 3 + 0{,}7 + 0{,}05$',
        'Comparer : $a{,}bc < a{,}bd$ si $c < d$ (à partie entière égale)',
        'Encadrement entier : $\\lfloor x \\rfloor \\leq x < \\lfloor x \\rfloor + 1$'
      ],
      recap: [
        'Un nombre décimal a une partie entière et une partie décimale séparées par une virgule.',
        'On compare chiffre par chiffre de gauche à droite : les dixièmes d\'abord, puis les centièmes.',
        'Plus de chiffres après la virgule ne signifie pas « plus grand » ($2{,}9 > 2{,}50$).',
        'Ajouter des zéros à droite ne change pas la valeur : $2{,}5 = 2{,}50 = 2{,}500$.'
      ],
      piege: 'Piège classique : affirmer que $1{,}12 > 1{,}9$ parce que $12 > 9$. C\'est FAUX ! On compare les dixièmes d\'abord : $9 > 1$, donc $1{,}9 > 1{,}12$.'
    },

    quiz: [
      { q: 'Quel est le chiffre des centièmes dans le nombre $47{,}356$ ?', options: ['$4$', '$7$', '$3$', '$5$'], answer: 3, correction: 'Dans $47{,}356$ : $3$ = dixièmes, $5$ = centièmes, $6$ = millièmes. Le chiffre des centièmes est $5$.' },
      { q: 'Quel est le plus grand parmi : $2{,}45$ ; $2{,}9$ ; $2{,}09$ ; $2{,}50$ ?', options: ['$2{,}45$', '$2{,}9$', '$2{,}09$', '$2{,}50$'], answer: 1, correction: 'Dixièmes : $2{,}9$ a $9$ dixièmes. $2{,}9$ est le plus grand.' },
      { q: 'Un élève affirme que $2{,}50 > 2{,}9$ car « $50 > 9$ ». Quelle réponse corrige cette erreur ?', options: ['Il a raison car $50 > 9$.', 'Il se trompe : on compare les dixièmes d\'abord — $9 > 5$, donc $2{,}9 > 2{,}50$.', 'Il se trompe : il faut comparer les centièmes.', 'Il se trompe car $2{,}50 = 2{,}5$ et $2{,}5 = 2{,}9$.'], answer: 1, correction: 'Dixièmes : $9 > 5$, donc $2{,}9 > 2{,}50$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const context = pick([
          'En classe de sport, les performances au saut en longueur sont',
          'Les résultats d\'une expérience en laboratoire sont',
          'Les prix relevés dans quatre magasins sont',
          'Les temps de course (en secondes) sont'
        ]);
        const a = randFloat(1, 9, 1);
        const b = randFloat(1, 9, 2);
        const c = randFloat(1, 9, 1);
        const d = randFloat(1, 9, 2);
        const nums = [a, b, c, d];
        nums.sort((x, y) => x - y);
        const minVal = nums[0];
        return {
          statement: `${context} $${a}$ ; $${b}$ ; $${c}$ ; $${d}$. Lequel est le plus petit ?`,
          answer: minVal,
          tolerance: 0.001,
          unit: '',
          hint: 'Compare d\'abord les parties entières. Si elles sont égales, compare les dixièmes, puis les centièmes.',
          solution: [
            `Rangement croissant : ${nums.map(n => `$${n}$`).join(' < ')}.`,
            `Le plus petit est $${minVal}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Lors d\'une compétition de saut en longueur, quatre élèves réalisent : Léa $4{,}35$ m, Tom $4{,}8$ m, Inès $4{,}09$ m et Rayan $4{,}50$ m.',
      tasks: [
        'Range ces quatre performances dans l\'ordre croissant.',
        'Quelle est la différence entre la meilleure et la moins bonne performance ?',
        'Tom affirme avoir sauté « plus de 4 mètres et demi ». Est-ce exact ?'
      ],
      solutions: [
        'Ordre croissant : $4{,}09 < 4{,}35 < 4{,}50 < 4{,}8$.',
        'Différence : $4{,}8 - 4{,}09 = 0{,}71$ m.',
        '$4{,}8 > 4{,}5$, donc oui, Tom a bien sauté plus de $4$ m et demi.'
      ],
      finalAnswer: 'Tom est premier avec $4{,}8$ m ; Inès est dernière avec $4{,}09$ m.'
    },

    evaluation: {
      title: 'Évaluation — Nombres entiers et décimaux',
      duration: '15 min',
      questions: [
        { statement: 'Dans le nombre $56{,}709$, quel est le chiffre des dixièmes ?', type: 'numeric', answer: 7, tolerance: 0, unit: '', points: 2, correction: 'Le chiffre des dixièmes est $7$.' },
        { statement: 'Range dans l\'ordre croissant : $3{,}07$ ; $3{,}7$ ; $3{,}007$ ; $3{,}70$. Quel nombre est le plus petit ?', type: 'multiple-choice', options: ['$3{,}07$', '$3{,}7$', '$3{,}007$', '$3{,}70$'], answer: 2, points: 2, correction: '$3{,}007 < 3{,}07 < 3{,}7 = 3{,}70$.' },
        { statement: 'Encadre $7{,}83$ entre deux entiers consécutifs. Donne l\'entier inférieur.', type: 'numeric', answer: 7, tolerance: 0, unit: '', points: 2, correction: '$7 < 7{,}83 < 8$.' },
        { statement: 'Quelle est la décomposition correcte de $4{,}065$ ?', type: 'multiple-choice', options: ['$4 + 0{,}6 + 0{,}05$', '$4 + 0{,}06 + 0{,}005$', '$4 + 0{,}6 + 0{,}005$', '$4 + 0{,}065$'], answer: 1, points: 2, correction: '$4{,}065 = 4 + 0{,}06 + 0{,}005$.' },
        { statement: 'Combien y a-t-il d\'entiers entre $5{,}3$ et $5{,}4$ ?', type: 'numeric', answer: 0, tolerance: 0, unit: '', points: 2, correction: 'Aucun entier entre $5{,}3$ et $5{,}4$.' }
      ]
    }
  },

  /* ─── Module 5 : Addition et soustraction ─── */
  {
    id: '6e-addition-soustraction',
    level: 1, subject: 'maths',
    icon: '➕',
    title: 'Addition et soustraction',
    subtitle: 'Entiers et décimaux, calcul posé et mental',
    keywords: ['Addition', 'Soustraction', 'Retenue', 'Décimaux', 'Calcul posé'],
    physics: false,

    cours: {
      intro: 'Additionner et soustraire des décimaux repose sur une règle unique : <strong>aligner les virgules</strong>. Cela garantit que l\'on additionne des grandeurs de même rang.<br/><br/>' +
        'Si les nombres n\'ont pas le même nombre de décimales, on complète avec des zéros : $8{,}7$ devient $8{,}70$. On calcule ensuite colonne par colonne de droite à gauche.<br/><br/>' +
        'Pour l\'<strong>addition</strong>, une retenue se propage quand une somme dépasse $9$. Pour la <strong>soustraction</strong>, un emprunt se propage quand le chiffre du haut est plus petit.',
      definitions: [
        { term: 'Retenue', def: 'Quand la somme d\'une colonne dépasse $9$, on « retient » la dizaine pour la colonne suivante.' },
        { term: 'Emprunt', def: 'En soustraction, quand le chiffre du haut est plus petit, on emprunte $10$ à la colonne de gauche.' },
        { term: 'Commutativité', def: '$a + b = b + a$ : l\'ordre des termes n\'a pas d\'importance dans une addition.' },
        { term: 'Associativité', def: '$(a + b) + c = a + (b + c)$ : on peut regrouper les termes librement.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Aligner les virgules</strong> et compléter avec des zéros. <em>Exemple :</em> $12{,}4 + 3{,}75$ → écrire $12{,}40 + 3{,}75$.',
          '<strong>Opérer</strong> chiffre par chiffre de droite à gauche.',
          '<strong>Gérer retenues/emprunts</strong>. Vérifier : $(a - b) + b = a$.'
        ]
      },
      example: {
        statement: 'Calculer $15{,}2 - 6{,}75$.',
        steps: [
          'Écrire $15{,}20 - 6{,}75$ (aligner les virgules, compléter avec un zéro).',
          'Centièmes : $0 - 5$ → emprunt → $10 - 5 = 5$.',
          'Dixièmes : $2 - 1 - 7$ → emprunt → $12 - 1 - 7 = 4$.',
          'Unités : $5 - 1 - 6$ → emprunt → $15 - 1 - 6 = 8$.'
        ],
        answer: '$15{,}2 - 6{,}75 = 8{,}45$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Opération</th><th style="border:1px solid var(--border);padding:8px">Propriété</th><th style="border:1px solid var(--border);padding:8px">Formule</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Addition</td><td style="border:1px solid var(--border);padding:8px">Commutative + Associative</td><td style="border:1px solid var(--border);padding:8px">$a + b = b + a$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Soustraction</td><td style="border:1px solid var(--border);padding:8px">Non commutative</td><td style="border:1px solid var(--border);padding:8px">Vérif : $(a - b) + b = a$</td></tr></table>',
      formulas: [
        '$a + b = b + a$ (commutativité)',
        '$(a + b) + c = a + (b + c)$ (associativité)',
        'Vérification de la soustraction : $(a - b) + b = a$'
      ],
      recap: [
        'Toujours aligner les virgules avant de calculer.',
        'Compléter avec des zéros pour avoir le même nombre de décimales.',
        'L\'addition est commutative et associative, pas la soustraction.',
        'Vérifier une soustraction : $(a - b) + b = a$.'
      ],
      piege: 'Piège fréquent : ne pas aligner les virgules ! Pour calculer $12{,}4 + 3{,}75$, écrire $12{,}40$ (et non aligner le $3$ sous le $1$).'
    },

    quiz: [
      { q: 'Quel est le résultat de $8{,}7 + 3{,}45$ ?', options: ['$11{,}12$', '$12{,}15$', '$11{,}15$', '$12{,}12$'], answer: 1, correction: '$8{,}70 + 3{,}45 = 12{,}15$.' },
      { q: 'Un élève calcule $15{,}2 - 6{,}75$ et trouve $9{,}55$. Où est l\'erreur ?', options: ['Il n\'a pas aligné les virgules.', 'Il a oublié de compléter $15{,}2$ en $15{,}20$ avant de soustraire.', 'Il n\'y a pas d\'erreur.', 'Il a inversé.'], answer: 1, correction: 'La bonne méthode : $15{,}20 - 6{,}75 = 8{,}45$.' },
      { q: 'Marie a $20{,}00$ €. Elle achète un livre à $8{,}95$ € et un stylo à $3{,}50$ €. Combien lui reste-t-il ?', options: ['$7{,}55$ €', '$7{,}45$ €', '$8{,}55$ €', '$6{,}55$ €'], answer: 0, correction: '$8{,}95 + 3{,}50 = 12{,}45$ €. Reste : $20{,}00 - 12{,}45 = 7{,}55$ €.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { emoji: '🧮', intro: 'Calcule', suffix: '', unit: '' },
          { emoji: '🌡️', intro: 'Ce matin, la température était de', suffix: '°C. Elle a augmenté de', unit: '°C', twoPart: true },
          { emoji: '🛒', intro: 'Au supermarché, tu achètes un pack de yaourts à', suffix: '€ et un jus de fruits à', unit: '€', twoPart: true },
          { emoji: '🏗️', intro: 'Sur un chantier, une planche mesure', suffix: 'm. On en ajoute une deuxième de', unit: 'm', twoPart: true },
          { emoji: '🏖️', intro: 'Pour les vacances, le budget transport est de', suffix: '€ et le budget hébergement est de', unit: '€', twoPart: true },
          { emoji: '🏃', intro: 'Lors d\'une compétition, un athlète court', suffix: 'km le matin puis', unit: 'km', twoPart: true },
          { emoji: '⚗️', intro: 'En chimie, on mélange', suffix: 'g d\'un produit avec', unit: 'g', twoPart: true },
          { emoji: '🎵', intro: 'Un morceau de musique dure', suffix: 'min. On y ajoute un refrain de', unit: 'min', twoPart: true }
        ]);
        const a = randFloat(1, 20, 1);
        const b = randFloat(1, 10, 2);
        const sum = parseFloat((a + b).toFixed(2));
        const statement = scenario.twoPart
          ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.suffix} $${b}$ ${scenario.unit}. Quel est le total ?`
          : `${scenario.emoji} ${scenario.intro} $${a} + ${b}$.`;
        return {
          statement,
          answer: sum,
          tolerance: 0.01,
          unit: scenario.unit,
          hint: `Aligne les virgules : écris $${a}$ comme $${a.toFixed(2)}$, puis additionne colonne par colonne.`,
          solution: [
            `Aligner les virgules : $${a.toFixed(2)} + ${b.toFixed(2)}$`,
            `Additionner chiffre par chiffre de droite à gauche.`,
            `Résultat : $${sum}$${scenario.unit ? ' ' + scenario.unit : ''}`
          ]
        };
      }
    },

    probleme: {
      context: 'Un épicier reçoit une livraison : $12{,}5$ kg de tomates, $8{,}75$ kg de carottes et $5{,}4$ kg de courgettes. Il avait déjà $3{,}25$ kg de tomates en stock.',
      tasks: [
        'Calcule la masse totale livrée.',
        'Quelle est la masse totale de tomates disponibles après livraison ?',
        'Si une cliente achète $6{,}8$ kg de légumes, quelle masse reste-t-il ?'
      ],
      solutions: [
        'Masse livrée : $12{,}5 + 8{,}75 + 5{,}4 = 26{,}65$ kg.',
        'Tomates totales : $12{,}5 + 3{,}25 = 15{,}75$ kg.',
        'Reste : $26{,}65 - 6{,}8 = 19{,}85$ kg.'
      ],
      finalAnswer: 'Il reste $19{,}85$ kg de légumes en rayon.'
    },

    evaluation: {
      title: 'Évaluation — Addition et soustraction',
      duration: '15 min',
      questions: [
        { statement: 'Calcule $14{,}6 + 7{,}85$.', type: 'numeric', answer: 22.45, tolerance: 0.01, unit: '', points: 2, correction: '$14{,}60 + 7{,}85 = 22{,}45$.' },
        { statement: 'Calcule $20{,}03 - 8{,}7$.', type: 'numeric', answer: 11.33, tolerance: 0.01, unit: '', points: 2, correction: '$20{,}03 - 8{,}70 = 11{,}33$.' },
        { statement: 'Un élève calcule $6{,}5 + 3{,}28$ et trouve $9{,}33$. Où est l\'erreur ?', type: 'multiple-choice', options: ['Pas d\'erreur.', 'Il a mal aligné les virgules : résultat $= 9{,}78$.', 'Il a additionné $65 + 328$.', 'Il a oublié une retenue.'], answer: 1, points: 2, correction: '$6{,}50 + 3{,}28 = 9{,}78$.' },
        { statement: 'Léo a $50$ €. Il achète un jeu à $23{,}45$ € et un livre à $12{,}80$ €. Combien lui reste-t-il ?', type: 'numeric', answer: 13.75, tolerance: 0.01, unit: '€', points: 2, correction: '$23{,}45 + 12{,}80 = 36{,}25$ €. Reste : $13{,}75$ €.' },
        { statement: 'Quelle propriété permet d\'affirmer que $7{,}3 + 4{,}5 = 4{,}5 + 7{,}3$ ?', type: 'multiple-choice', options: ['L\'associativité', 'La commutativité', 'La distributivité', 'La transitivité'], answer: 1, points: 2, correction: 'Commutativité : $a + b = b + a$.' }
      ]
    }
  },

  /* ─── Module 6 : Multiplication ─── */
  {
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
  },

  /* ─── Module 7 : Division ─── */
  {
    id: '6e-division',
    level: 1, subject: 'maths',
    icon: '➗',
    title: 'Division euclidienne et décimale',
    subtitle: 'Quotient, reste, division posée',
    keywords: ['Division', 'Quotient', 'Reste', 'Dividende', 'Diviseur', 'Décimale'],
    physics: false,

    cours: {
      intro: 'La division répond à la question : « Combien de fois $b$ tient-il dans $a$ ? » La <strong>division euclidienne</strong> donne un quotient entier et un reste.<br/><br/>' +
        'La formule fondamentale : $a = b \\times q + r$ avec $0 \\leq r < b$. <strong>Exemple :</strong> $17 = 5 \\times 3 + 2$ — on fait $3$ groupes de $5$ et il reste $2$.<br/><br/>' +
        'La <strong>division décimale</strong> prolonge le calcul en ajoutant des zéros au reste pour obtenir des décimales. Attention : la division n\'est <strong>pas commutative</strong> ! $12 \\div 4 \\neq 4 \\div 12$.',
      definitions: [
        { term: 'Dividende', def: 'Le nombre que l\'on divise. Dans $a \\div b$, $a$ est le dividende.' },
        { term: 'Diviseur', def: 'Le nombre par lequel on divise. Dans $a \\div b$, $b$ est le diviseur.' },
        { term: 'Quotient', def: 'Résultat de la division. En division euclidienne, c\'est un entier.' },
        { term: 'Reste', def: 'Ce qui reste après la division euclidienne. Il vérifie $0 \\leq r < b$.' }
      ],
      method: {
        title: 'Méthode en 5 étapes',
        steps: [
          '<strong>Identifier</strong> le dividende et le diviseur.',
          '<strong>Chercher</strong> combien de fois le diviseur « tient » dans les premiers chiffres. <em>Exemple :</em> $87 \\div 5$ → $5$ tient $17$ fois dans $87$.',
          '<strong>Multiplier et soustraire</strong> pour trouver le reste partiel.',
          '<strong>Abaisser</strong> le chiffre suivant et recommencer.',
          '<strong>Vérifier</strong> : $b \\times q + r = a$. <em>Exemple :</em> $5 \\times 17 + 2 = 87$ ✓'
        ]
      },
      example: {
        statement: 'Effectuer la division euclidienne de $157$ par $12$.',
        steps: [
          '$12 \\times 13 = 156$ (le plus grand multiple de $12$ inférieur ou égal à $157$).',
          'Reste : $157 - 156 = 1$.',
          'Donc $157 = 12 \\times 13 + 1$.',
          'Vérification : $12 \\times 13 + 1 = 156 + 1 = 157$ ✓'
        ],
        answer: 'Quotient $= 13$, reste $= 1$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Terme</th><th style="border:1px solid var(--border);padding:8px">Symbole</th><th style="border:1px solid var(--border);padding:8px">Exemple ($87 \\div 5$)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Dividende</td><td style="border:1px solid var(--border);padding:8px">$a$</td><td style="border:1px solid var(--border);padding:8px">$87$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Diviseur</td><td style="border:1px solid var(--border);padding:8px">$b$</td><td style="border:1px solid var(--border);padding:8px">$5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Quotient</td><td style="border:1px solid var(--border);padding:8px">$q$</td><td style="border:1px solid var(--border);padding:8px">$17$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Reste</td><td style="border:1px solid var(--border);padding:8px">$r$</td><td style="border:1px solid var(--border);padding:8px">$2$</td></tr></table>',
      formulas: [
        'Division euclidienne : $a = b \\times q + r$ avec $0 \\leq r < b$',
        'Vérification : $b \\times q + r = a$',
        'Division exacte : $r = 0 \\Rightarrow a = b \\times q$'
      ],
      recap: [
        'La division euclidienne de $a$ par $b$ donne : $a = b \\times q + r$ avec $0 \\leq r < b$.',
        'Pour vérifier, on recalcule $b \\times q + r$ et on vérifie qu\'on retrouve $a$.',
        'La division n\'est pas commutative : $a \\div b \\neq b \\div a$ en général.',
        'La division décimale prolonge le calcul en ajoutant des zéros au reste.'
      ],
      piege: 'Piège : la division n\'est pas commutative ! $12 \\div 4 \\neq 4 \\div 12$. Toujours vérifier en multipliant : quotient $\\times$ diviseur + reste = dividende.'
    },

    quiz: [
      { q: 'Dans la division euclidienne de $87$ par $5$, quel est le reste ?', options: ['$2$', '$1$', '$3$', '$0$'], answer: 0, correction: '$87 = 5 \\times 17 + 2$. Le reste est $2$.' },
      { q: 'Combien vaut $13{,}5 \\div 4$ ?', options: ['$3{,}275$', '$3{,}375$', '$3{,}475$', '$3{,}125$'], answer: 1, correction: '$13{,}5 \\div 4 = 3{,}375$.' },
      { q: 'Un élève obtient quotient $= 8$ et reste $= 5$ pour $43 \\div 6$. Comment vérifier ?', options: ['$43 \\div 8$', '$6 \\times 8 + 5 = 53 \\neq 43$ → faux', '$6 \\times 8 + 5 = 53$', '$43 - 6 = 37$'], answer: 1, correction: '$6 \\times 8 + 5 = 53 \\neq 43$. Correct : $43 = 6 \\times 7 + 1$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { emoji: '🍰', intro: 'On partage', objet: 'parts de gâteau', action: 'entre', groupeLabel: 'convives' },
          { emoji: '🍬', intro: 'On distribue', objet: 'bonbons', action: 'à', groupeLabel: 'enfants' },
          { emoji: '⚽', intro: 'On forme des équipes avec', objet: 'joueurs', action: 'en équipes de', groupeLabel: '' },
          { emoji: '✂️', intro: 'Un couturier découpe', objet: 'cm de tissu', action: 'en morceaux de', groupeLabel: 'cm chacun' },
          { emoji: '📚', intro: 'Le bibliothécaire range', objet: 'livres', action: 'sur', groupeLabel: 'étagères' },
          { emoji: '🏃', intro: 'Un entraîneur répartit', objet: 'coureurs', action: 'en', groupeLabel: 'groupes égaux' },
          { emoji: '🧁', intro: 'Un pâtissier répartit', objet: 'cupcakes', action: 'dans', groupeLabel: 'boîtes' },
          { emoji: '🪴', intro: 'Un jardinier plante', objet: 'graines', action: 'en', groupeLabel: 'rangées égales' }
        ]);
        const b = rand(2, 9);
        const q = rand(5, 20);
        const r = rand(0, b - 1);
        const a = b * q + r;
        const statement = scenario.groupeLabel
          ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.objet} ${scenario.action} $${b}$ ${scenario.groupeLabel}. Quel est le quotient entier ?`
          : `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.objet} ${scenario.action} $${b}$. Quel est le quotient entier ?`;
        return {
          statement,
          answer: q,
          tolerance: 0,
          unit: '',
          hint: `Cherche combien de fois $${b}$ « tient » dans $${a}$. Essaie $${b} \\times ${q}$.`,
          solution: [
            `$${a} = ${b} \\times ${q} + ${r}$`,
            `Vérification : $${b} \\times ${q} = ${b * q}$ et $${b * q} + ${r} = ${a}$ ✓`,
            `Le quotient entier est $${q}$ et le reste est $${r}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une école organise un voyage scolaire pour $157$ élèves. Chaque car peut transporter au maximum $45$ élèves.',
      tasks: [
        'Effectue la division euclidienne de $157$ par $45$.',
        'Combien de cars complets peut-on remplir ? Combien d\'élèves restent ?',
        'Combien de cars faut-il réserver au total pour que tous les élèves partent ?'
      ],
      solutions: [
        '$157 = 45 \\times 3 + 22$.',
        '$3$ cars complets, $22$ élèves restants.',
        '$3 + 1 = 4$ cars au total.'
      ],
      finalAnswer: 'Il faut réserver $4$ cars.'
    },

    evaluation: {
      title: 'Évaluation — Division',
      duration: '20 min',
      questions: [
        { statement: 'Effectue la division euclidienne de $97$ par $6$. Quel est le quotient entier ?', type: 'numeric', answer: 16, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Quotient $= 16$.' },
        { statement: 'Quel est le reste de la division euclidienne de $97$ par $6$ ?', type: 'numeric', answer: 1, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Reste $= 1$.' },
        { statement: 'Calcule $17{,}5 \\div 4$.', type: 'numeric', answer: 4.375, tolerance: 0.001, unit: '', points: 2, correction: '$17{,}5 \\div 4 = 4{,}375$.' },
        { statement: 'Dans la formule $a = b \\times q + r$, que représente $r$ ?', type: 'multiple-choice', options: ['Le quotient', 'Le diviseur', 'Le reste', 'Le dividende'], answer: 2, points: 2, correction: '$r$ est le reste.' },
        { statement: 'On partage $250$ billes entre $8$ enfants. Combien chacun et combien de reste ?', type: 'multiple-choice', options: ['$31$ chacun, reste $2$', '$30$ chacun, reste $10$', '$32$ chacun, reste $0$', '$31$ chacun, reste $0$'], answer: 0, points: 2, correction: '$250 = 8 \\times 31 + 2$.' }
      ]
    }
  },

  /* ─── Module 8 : Figures géométriques ─── */
  {
    id: '6e-figures-geometriques',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Figures géométriques de base',
    subtitle: 'Droites, segments, demi-droites, cercles',
    keywords: ['Droite', 'Segment', 'Demi-droite', 'Cercle', 'Rayon', 'Diamètre'],
    physics: false,

    cours: {
      intro: 'En géométrie, tout repose sur quelques objets de base : le <strong>point</strong> (position sans dimension), le <strong>segment</strong> (longueur finie entre deux points), la <strong>droite</strong> (infinie dans les deux sens) et le <strong>cercle</strong> (ensemble de points à égale distance d\'un centre).<br/><br/>' +
        '<strong>Distinction importante :</strong> le segment $[AB]$ a une longueur mesurable ; la droite $(AB)$ est infinie et on la dessine avec des flèches aux extrémités. La demi-droite $[AB)$ est infinie dans un seul sens.<br/><br/>' +
        'Le <strong>cercle</strong> de centre $O$ et de rayon $r$ contient tous les points $M$ tels que $OM = r$. Le diamètre est $d = 2r$.',
      definitions: [
        { term: 'Droite $(AB)$', def: 'Ligne infinie dans les deux sens passant par $A$ et $B$. Dessinée avec des flèches.' },
        { term: 'Segment $[AB]$', def: 'Portion de droite limitée par deux extrémités $A$ et $B$. A une longueur mesurable.' },
        { term: 'Demi-droite $[AB)$', def: 'Portion de droite ayant une origine $A$ et infinie dans la direction de $B$.' },
        { term: 'Cercle', def: 'Ensemble des points $M$ tels que $OM = r$ (rayon). Le diamètre est $d = 2r$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> le type d\'objet : un point ($A$), une droite $(AB)$ ou $d$, un segment $[AB]$, une demi-droite $[AB)$.',
          '<strong>Distinguer</strong> : droite (infinie, flèches), demi-droite (infinie d\'un côté), segment (fini).',
          '<strong>Pour un cercle</strong> : identifier le centre $O$ et le rayon $r$. Diamètre $= 2r$.',
          '<strong>Construire</strong> avec la règle (segments, droites) ou le compas (cercles, reports de longueur).'
        ]
      },
      example: {
        statement: 'Un cercle a un diamètre de $8{,}4$ cm. Calculer le rayon. Un point $P$ est à $5$ cm du centre. Où se trouve-t-il ?',
        steps: [
          'Rayon : $r = \\dfrac{d}{2} = \\dfrac{8{,}4}{2} = 4{,}2$ cm.',
          '$OP = 5$ cm et $r = 4{,}2$ cm.',
          '$OP > r$, donc $P$ est à l\'extérieur du cercle.'
        ],
        answer: '$r = 4{,}2$ cm. $P$ est à l\'extérieur du cercle.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Objet</th><th style="border:1px solid var(--border);padding:8px">Notation</th><th style="border:1px solid var(--border);padding:8px">Longueur</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Droite</td><td style="border:1px solid var(--border);padding:8px">$(AB)$</td><td style="border:1px solid var(--border);padding:8px">Infinie (2 sens)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Demi-droite</td><td style="border:1px solid var(--border);padding:8px">$[AB)$</td><td style="border:1px solid var(--border);padding:8px">Infinie (1 sens)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Segment</td><td style="border:1px solid var(--border);padding:8px">$[AB]$</td><td style="border:1px solid var(--border);padding:8px">Finie</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cercle</td><td style="border:1px solid var(--border);padding:8px">$\\mathcal{C}(O, r)$</td><td style="border:1px solid var(--border);padding:8px">$d = 2r$</td></tr></table>',
      formulas: [
        '$(AB)$ = droite passant par $A$ et $B$ (infinie)',
        '$[AB]$ = segment d\'extrémités $A$ et $B$',
        'Cercle de centre $O$ et rayon $r$ : $OM = r$ pour tout point $M$ du cercle',
        'Diamètre : $d = 2r$'
      ],
      recap: [
        'Droite $(AB)$ : infinie, flèches aux 2 bouts. Segment $[AB]$ : fini, 2 extrémités.',
        'Cercle : tous les points à distance $r$ du centre. Diamètre $= 2r$.',
        'Point sur le cercle : $OP = r$. Intérieur : $OP < r$. Extérieur : $OP > r$.',
        'Demi-droite $[AB)$ : origine $A$, infinie vers $B$.'
      ],
      piege: 'Piège : confondre segment et droite. Un segment $[AB]$ a une longueur mesurable ; une droite $(AB)$ est infinie. Sur une figure, une droite se dessine toujours avec des flèches aux deux extrémités.'
    },

    quiz: [
      { q: 'Un cercle a un rayon de $5$ cm. Quel est son diamètre ?', options: ['$5$ cm', '$10$ cm', '$15$ cm', '$25$ cm'], answer: 1, correction: '$d = 2r = 10$ cm.' },
      { q: 'Quelle figure est infinie dans les deux sens ?', options: ['Un segment', 'Une demi-droite', 'Une droite', 'Un arc de cercle'], answer: 2, correction: 'La droite $(AB)$ est infinie dans les deux sens.' },
      { q: 'Un point $P$ est à $3{,}5$ cm du centre $O$ d\'un cercle de rayon $3$ cm. Où se trouve $P$ ?', options: ['Sur le cercle', 'À l\'intérieur', 'À l\'extérieur', 'Au centre'], answer: 2, correction: '$3{,}5 > 3 = r$, donc $P$ est à l\'extérieur.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const objet = pick([
          { emoji: '🕰️', nom: 'une horloge', unite: 'cm' },
          { emoji: '🍕', nom: 'une pizza', unite: 'cm' },
          { emoji: '🚲', nom: 'une roue de vélo', unite: 'cm' },
          { emoji: '💿', nom: 'un CD', unite: 'cm' },
          { emoji: '🎯', nom: 'une cible de fléchettes', unite: 'cm' },
          { emoji: '⭕', nom: 'un cerceau de gymnastique', unite: 'cm' },
          { emoji: '🏀', nom: 'un ballon de basket (vu du dessus)', unite: 'cm' },
          { emoji: '🛞', nom: 'un pneu de voiture', unite: 'cm' }
        ]);
        const askFor = pick(['rayon', 'diametre']);
        if (askFor === 'rayon') {
          const d = rand(4, 24) * 2;
          return {
            statement: `${objet.emoji} Le diamètre de ${objet.nom} est de $${d}$ ${objet.unite}. Quel est son rayon (en ${objet.unite}) ?`,
            answer: d / 2,
            tolerance: 0,
            unit: objet.unite,
            hint: `Le rayon est la moitié du diamètre : $r = \\dfrac{d}{2}$.`,
            solution: [`$r = \\dfrac{${d}}{2} = ${d / 2}$ ${objet.unite}`]
          };
        }
        const r = rand(2, 15);
        return {
          statement: `${objet.emoji} Le rayon de ${objet.nom} est de $${r}$ ${objet.unite}. Quel est son diamètre (en ${objet.unite}) ?`,
          answer: 2 * r,
          tolerance: 0,
          unit: objet.unite,
          hint: `Le diamètre est le double du rayon : $d = 2r$.`,
          solution: [`$d = 2 \\times ${r} = ${2 * r}$ ${objet.unite}`]
        };
      }
    },

    probleme: {
      context: 'Un architecte dessine un plan de fontaine circulaire. Le bassin central a un diamètre de $4{,}8$ m, et une allée de $0{,}6$ m de large l\'entoure.',
      tasks: [
        'Quel est le rayon du bassin central ?',
        'Quel est le rayon total (bassin + allée) ?',
        'Quel est le diamètre total de la fontaine ?'
      ],
      solutions: [
        'Rayon du bassin : $r = 4{,}8 \\div 2 = 2{,}4$ m.',
        'Rayon total : $2{,}4 + 0{,}6 = 3$ m.',
        'Diamètre total : $2 \\times 3 = 6$ m.'
      ],
      finalAnswer: 'Le diamètre total de la fontaine est $6$ m.'
    },

    evaluation: {
      title: 'Évaluation — Figures géométriques',
      duration: '15 min',
      questions: [
        { statement: 'Un cercle a un diamètre de $18$ cm. Quel est son rayon en cm ?', type: 'numeric', answer: 9, tolerance: 0, unit: 'cm', points: 2, correction: '$r = 18 \\div 2 = 9$ cm.' },
        { statement: 'Quelle notation désigne une droite passant par les points $A$ et $B$ ?', type: 'multiple-choice', options: ['$[AB]$', '$(AB)$', '$[AB)$', '$\\overrightarrow{AB}$'], answer: 1, points: 2, correction: '$(AB)$ est la droite.' },
        { statement: 'Un point $M$ est situé à $5{,}2$ cm du centre $O$ d\'un cercle de rayon $5{,}2$ cm. Où se trouve $M$ ?', type: 'multiple-choice', options: ['À l\'intérieur', 'À l\'extérieur', 'Sur le cercle', 'Au centre'], answer: 2, points: 2, correction: '$OM = r$, donc $M$ est sur le cercle.' },
        { statement: 'Un cercle a un rayon de $7$ cm. Quel est son diamètre en cm ?', type: 'numeric', answer: 14, tolerance: 0, unit: 'cm', points: 2, correction: '$d = 2 \\times 7 = 14$ cm.' },
        { statement: 'Parmi les affirmations, laquelle est vraie ?', type: 'multiple-choice', options: ['Un segment a une longueur infinie.', 'Une demi-droite a deux extrémités.', 'Tous les points d\'un cercle sont à égale distance du centre.', 'Le diamètre est la moitié du rayon.'], answer: 2, points: 2, correction: 'Par définition, $OM = r$ pour tout point $M$ du cercle.' }
      ]
    }
  },

  /* ─── Module 9 : Symétrie axiale ─── */
  {
    id: '6e-symetrie-axiale',
    level: 1, subject: 'maths',
    icon: '🪞',
    title: 'Symétrie axiale',
    subtitle: 'Axe de symétrie, construction du symétrique',
    keywords: ['Symétrie', 'Axe', 'Réflexion', 'Figure symétrique', 'Milieu', 'Perpendiculaire'],
    physics: false,

    cours: {
      intro: 'Une figure est <strong>symétrique</strong> par rapport à un axe si, en la pliant le long de cet axe, les deux parties se superposent exactement.<br/><br/>' +
        'La symétrie axiale est une <strong>isométrie</strong> : elle conserve les distances, les angles et les aires. Les figures sont identiques, juste retournées.<br/><br/>' +
        'Pour construire le symétrique d\'un point $A$ par rapport à un axe $d$, on cherche $A\'$ tel que l\'axe soit la <strong>médiatrice</strong> de $[AA\']$ : l\'axe coupe $[AA\']$ en son milieu et perpendiculairement. Formule pour un axe $x = k$ : $x_{A\'} = 2k - x_A$.',
      definitions: [
        { term: 'Axe de symétrie', def: 'Droite $d$ telle que la réflexion de la figure par rapport à $d$ donne la même figure.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie axiale en est une.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire au segment $[AA\']$ passant par son milieu. L\'axe est la médiatrice de $[AA\']$.' },
        { term: 'Symétrique', def: '$A\'$ est le symétrique de $A$ si l\'axe est la médiatrice de $[AA\']$ : $AH = HA\'$ et $(AA\') \\perp d$.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Tracer la perpendiculaire</strong> à l\'axe $d$ passant par le point $A$.',
          '<strong>Trouver le pied $H$</strong> (intersection avec l\'axe).',
          '<strong>Reporter la même distance</strong> de l\'autre côté : $A\'$ tel que $AH = HA\'$.',
          '<strong>Pour une figure entière</strong> : construire le symétrique de chaque sommet, puis relier.'
        ]
      },
      example: {
        statement: 'Le point $A(5 ; 2)$ est réfléchi par rapport à la droite $x = 3$. Trouver $A\'$.',
        steps: [
          'Formule : $x_{A\'} = 2k - x_A = 2 \\times 3 - 5 = 1$.',
          'L\'ordonnée ne change pas : $y_{A\'} = 2$.',
          'Donc $A\'(1 ; 2)$.',
          'Vérification : le milieu de $[AA\']$ est $(\\dfrac{5+1}{2} ; 2) = (3 ; 2)$, qui est bien sur $x = 3$ ✓'
        ],
        answer: '$A\'(1 ; 2)$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Axe</th><th style="border:1px solid var(--border);padding:8px">Formule abscisse</th><th style="border:1px solid var(--border);padding:8px">Formule ordonnée</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$x = 0$ (axe des ordonnées)</td><td style="border:1px solid var(--border);padding:8px">$x\' = -x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = y$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$y = 0$ (axe des abscisses)</td><td style="border:1px solid var(--border);padding:8px">$x\' = x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = -y$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$x = k$ (verticale)</td><td style="border:1px solid var(--border);padding:8px">$x\' = 2k - x$</td><td style="border:1px solid var(--border);padding:8px">$y\' = y$</td></tr></table>',
      formulas: [
        '$H = $ milieu de $[AA\']$ (pied de la perpendiculaire)',
        '$AH = HA\'$',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      recap: [
        'La symétrie axiale conserve distances, angles et aires (c\'est une isométrie).',
        'Le symétrique de $A$ par rapport à $x = k$ a pour abscisse $x\' = 2k - x$.',
        'Un point situé sur l\'axe est son propre symétrique.',
        'Un triangle équilatéral a $3$ axes, un carré en a $4$, un cercle en a une infinité.'
      ],
      piege: 'Piège : l\'axe de symétrie n\'est pas forcément vertical ou horizontal. Toujours tracer la perpendiculaire depuis le point jusqu\'à l\'axe, puis reporter la même distance de l\'autre côté.'
    },

    quiz: [
      { q: 'Le point $A(5 ; 2)$ est réfléchi par rapport à $x = 3$. Un élève trouve $A\'(-5 ; 2)$. Quelle est son erreur ?', options: ['Correct.', 'Il a confondu avec $x = 0$ : il faut $x\' = 2 \\times 3 - 5 = 1$, donc $A\'(1 ; 2)$.', 'Il faut changer $y$.', 'Pas d\'erreur car $-5$ est le symétrique de $5$.'], answer: 1, correction: '$x\' = 2 \\times 3 - 5 = 1$. $A\'(1 ; 2)$.' },
      { q: 'Le point $A(3 ; 1)$ est réfléchi par rapport à l\'axe des ordonnées. Coordonnées de $A\'$ ?', options: ['$(3 ; -1)$', '$(-3 ; 1)$', '$(-3 ; -1)$', '$(1 ; 3)$'], answer: 1, correction: 'Axe $x = 0$ : $x\' = -x = -3$, $y\' = y = 1$.' },
      { q: 'Un triangle équilatéral possède combien d\'axes de symétrie ?', options: ['$1$', '$2$', '$3$', '$6$'], answer: 2, correction: '$3$ axes, chacun passant par un sommet et le milieu du côté opposé.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const axType = pick(['vertical', 'horizontal']);
        if (axType === 'vertical') {
          const ax = rand(2, 8);
          const pointX = rand(ax + 1, ax + 6);
          const symX = 2 * ax - pointX;
          return {
            statement: `Le point $A$ a pour abscisse $x_A = ${pointX}$. L'axe de symétrie est $x = ${ax}$. Quelle est l'abscisse de $A'$ ?`,
            answer: symX,
            tolerance: 0,
            unit: '',
            hint: `$x_{A'} = 2k - x_A = 2 \\times ${ax} - ${pointX}$.`,
            solution: [`$x_{A'} = 2 \\times ${ax} - ${pointX} = ${symX}$`]
          };
        }
        const ay = rand(2, 8);
        const pointY = rand(ay + 1, ay + 6);
        const symY = 2 * ay - pointY;
        return {
          statement: `Le point $A$ a pour ordonnée $y_A = ${pointY}$. L'axe de symétrie est $y = ${ay}$. Quelle est l'ordonnée de $A'$ ?`,
          answer: symY,
          tolerance: 0,
          unit: '',
          hint: `$y_{A'} = 2k - y_A = 2 \\times ${ay} - ${pointY}$.`,
          solution: [`$y_{A'} = 2 \\times ${ay} - ${pointY} = ${symY}$`]
        };
      }
    },

    probleme: {
      context: 'Un designer crée un logo symétrique. La moitié gauche est un triangle de sommets $A(0 ; 0)$, $B(0 ; 4)$ et $C(3 ; 2)$. Il veut tracer la partie droite par symétrie d\'axe $x = 3$.',
      tasks: [
        'Calculer les coordonnées de $A\'$, symétrique de $A$ par rapport à $x = 3$.',
        'Calculer les coordonnées de $B\'$ et $C\'$.',
        'Expliquer pourquoi $C\' = C$.'
      ],
      solutions: [
        '$x_{A\'} = 2 \\times 3 - 0 = 6$, $y_{A\'} = 0$. Donc $A\'(6 ; 0)$.',
        '$B\'(6 ; 4)$ et $C\'(3 ; 2)$.',
        '$C$ a pour abscisse $3$, qui est l\'axe. Un point sur l\'axe est son propre symétrique.'
      ],
      finalAnswer: 'Le logo a les sommets $A(0;0)$, $B(0;4)$, $C(3;2)$, $B\'(6;4)$, $A\'(6;0)$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie axiale',
      duration: '20 min',
      questions: [
        { statement: 'Le point $A(7 ; 3)$ est réfléchi par rapport à $x = 0$. Abscisse de $A\'$ ?', type: 'numeric', answer: -7, tolerance: 0, unit: '', points: 2, correction: '$x\' = -7$.' },
        { statement: 'Le point $B(2 ; 5)$ est réfléchi par rapport à $x = 4$. Abscisse de $B\'$ ?', type: 'numeric', answer: 6, tolerance: 0, unit: '', points: 2, correction: '$x\' = 2 \\times 4 - 2 = 6$.' },
        { statement: 'Combien d\'axes de symétrie possède un carré ?', type: 'multiple-choice', options: ['$1$', '$2$', '$4$', '$8$'], answer: 2, points: 2, correction: '$4$ axes : $2$ médianes + $2$ diagonales.' },
        { statement: 'La symétrie axiale conserve-t-elle les distances ?', type: 'multiple-choice', options: ['Non, doublées.', 'Oui, c\'est une isométrie.', 'Non, seuls les angles.', 'Oui, mais que les parallèles.'], answer: 1, points: 2, correction: 'Isométrie : distances, angles et aires conservés.' },
        { statement: 'Un point $P$ est situé sur l\'axe $d$. Quel est son symétrique ?', type: 'multiple-choice', options: ['Le point au double.', 'Le point opposé.', 'Le point $P$ lui-même.', 'Pas de symétrique.'], answer: 2, points: 2, correction: 'Distance à l\'axe $= 0$, donc $P\' = P$.' }
      ]
    }
  },

  /* ─── Module 10 : Périmètres et aires ─── */
  {
    id: '6e-perimetres-aires',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Périmètres et aires',
    subtitle: 'Rectangle, triangle, disque',
    keywords: ['Périmètre', 'Aire', 'Rectangle', 'Triangle', 'Disque', 'Pi'],
    physics: false,

    cours: {
      intro: 'Le <strong>périmètre</strong> est la longueur du contour d\'une figure — on « fait le tour ». L\'<strong>aire</strong> mesure la surface intérieure.<br/><br/>' +
        'Ces deux notions sont <strong>indépendantes</strong> : un rectangle de $1$ cm × $10$ cm et un carré de $\\approx 3{,}16$ cm de côté ont la même aire ($10$ cm²) mais des périmètres très différents.<br/><br/>' +
        'La constante $\\pi \\approx 3{,}14159\\ldots$ est le rapport constant entre la circonférence et le diamètre de tout cercle. En physique, l\'aire intervient dans la pression ($P = F/S$) et le périmètre dans les calculs de longueur de câbles ou de clôtures.',
      definitions: [
        { term: 'Périmètre', def: 'Longueur totale du contour d\'une figure. Unité : cm ou m (longueur).' },
        { term: 'Aire', def: 'Mesure de la surface intérieure. Unité : cm² ou m² (surface).' },
        { term: 'Pi ($\\pi$)', def: 'Constante universelle $\\approx 3{,}14$. Rapport de la circonférence au diamètre pour tout cercle.' },
        { term: 'Disque', def: 'Surface intérieure du cercle. Aire $= \\pi r^2$, périmètre (cercle) $= 2\\pi r$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la figure</strong> et ses dimensions. <em>Exemple :</em> rectangle de $8 \\times 5$ cm.',
          '<strong>Appliquer la formule</strong>. <em>Périmètre :</em> $2(8+5) = 26$ cm. <em>Aire :</em> $8 \\times 5 = 40$ cm².',
          '<strong>Vérifier les unités</strong> : périmètre en cm, aire en cm². Ne pas confondre les deux !'
        ]
      },
      example: {
        statement: 'Calculer l\'aire et le périmètre d\'un disque de rayon $r = 5$ cm.',
        steps: [
          'Périmètre (cercle) : $\\mathcal{P} = 2\\pi r = 2 \\times 3{,}14 \\times 5 = 31{,}4$ cm.',
          'Aire (disque) : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Unités : périmètre en cm ✓, aire en cm² ✓'
        ],
        answer: '$\\mathcal{P} = 31{,}4$ cm et $\\mathcal{A} = 78{,}5$ cm²'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Figure</th><th style="border:1px solid var(--border);padding:8px">Périmètre</th><th style="border:1px solid var(--border);padding:8px">Aire</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Rectangle</strong></td><td style="border:1px solid var(--border);padding:8px">$2(L + l)$</td><td style="border:1px solid var(--border);padding:8px">$L \\times l$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Triangle</strong></td><td style="border:1px solid var(--border);padding:8px">$a + b + c$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{b \\times h}{2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Disque</strong></td><td style="border:1px solid var(--border);padding:8px">$2\\pi r$</td><td style="border:1px solid var(--border);padding:8px">$\\pi r^2$</td></tr></table>',
      formulas: [
        'Rectangle : $\\mathcal{P} = 2(L + l)$ et $\\mathcal{A} = L \\times l$',
        'Triangle : $\\mathcal{P} = a + b + c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$',
        'Disque : $\\mathcal{P} = 2\\pi r$ et $\\mathcal{A} = \\pi r^2$, avec $\\pi \\approx 3{,}14$'
      ],
      recap: [
        'Périmètre = longueur du contour (en cm). Aire = mesure de la surface (en cm²).',
        'Rectangle : $\\mathcal{P} = 2(L+l)$, $\\mathcal{A} = L \\times l$.',
        'Disque : $\\mathcal{P} = 2\\pi r$, $\\mathcal{A} = \\pi r^2$. Attention : c\'est $r$ au carré, pas $\\pi r$ !',
        'Un périmètre plus grand ne signifie pas une aire plus grande.'
      ],
      piege: 'Piège classique : confondre périmètre et aire. Le périmètre se mesure en cm (longueur), l\'aire en cm² (surface). De plus, dans $\\pi r^2$, c\'est $r$ qui est élevé au carré, pas $\\pi r$ entier !'
    },

    quiz: [
      { q: 'Un rectangle mesure $8$ cm de long et $5$ cm de large. Quelle est son aire ?', options: ['$26$ cm²', '$40$ cm²', '$13$ cm²', '$80$ cm²'], answer: 1, correction: '$\\mathcal{A} = 8 \\times 5 = 40$ cm².' },
      { q: 'Un disque a un rayon de $7$ cm. Quelle est son aire ($\\pi \\approx 3{,}14$) ?', options: ['$21{,}98$ cm²', '$43{,}96$ cm²', '$153{,}86$ cm²', '$153{,}86$ m²'], answer: 2, correction: '$\\pi \\times 7^2 = 3{,}14 \\times 49 = 153{,}86$ cm².' },
      { q: 'Un élève calcule $\\mathcal{A} = \\pi \\times 4 = 12{,}56$ cm² pour un disque de rayon $4$ cm. Son erreur ?', options: ['$2\\pi r = 25{,}13$ cm', 'Il a confondu avec le périmètre. L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm².', 'Correct.', 'Il faut $r = 2$.'], answer: 1, correction: 'L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm², pas $\\pi \\times r$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const fig = pick(['rectangle', 'triangle', 'disque']);
        if (fig === 'rectangle') {
          const L = rand(4, 15), l = rand(2, L - 1);
          return {
            statement: `Un rectangle mesure $${L}$ cm × $${l}$ cm. Calcule son aire en cm².`,
            answer: L * l,
            tolerance: 0,
            unit: 'cm²',
            hint: `$\\mathcal{A} = L \\times l = ${L} \\times ${l}$.`,
            solution: [`$\\mathcal{A} = ${L} \\times ${l} = ${L * l}$ cm²`]
          };
        }
        if (fig === 'triangle') {
          const b = rand(4, 12), h = rand(3, 10);
          const aire = parseFloat((b * h / 2).toFixed(1));
          return {
            statement: `Un triangle a une base de $${b}$ cm et une hauteur de $${h}$ cm. Calcule son aire en cm².`,
            answer: aire,
            tolerance: 0.1,
            unit: 'cm²',
            hint: `$\\mathcal{A} = \\dfrac{b \\times h}{2}$.`,
            solution: [`$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${aire}$ cm²`]
          };
        }
        const r = rand(2, 10);
        const aire = parseFloat((3.14 * r * r).toFixed(2));
        return {
          statement: `Un disque a un rayon de $${r}$ cm. Calcule son aire avec $\\pi \\approx 3{,}14$.`,
          answer: aire,
          tolerance: 0.5,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${aire}$ cm²`]
        };
      }
    },

    probleme: {
      context: 'Un jardinier veut gazonner un jardin rectangulaire de $12$ m × $8$ m. Une zone rectangulaire de $4$ m × $3$ m est réservée pour un bassin.',
      tasks: [
        'Calcule l\'aire totale du jardin.',
        'Calcule l\'aire de la zone bassin.',
        'Quelle superficie sera gazonnée ?',
        'La pelouse coûte $4{,}50$ € le m². Quel est le coût total ?'
      ],
      solutions: [
        'Aire totale : $12 \\times 8 = 96$ m².',
        'Aire bassin : $4 \\times 3 = 12$ m².',
        'Aire gazonnée : $96 - 12 = 84$ m².',
        'Coût : $84 \\times 4{,}50 = 378$ €.'
      ],
      finalAnswer: 'La superficie gazonnée est $84$ m² pour un coût de $378$ €.'
    },

    evaluation: {
      title: 'Évaluation — Périmètres et aires',
      duration: '20 min',
      questions: [
        { statement: 'Un rectangle mesure $12$ cm × $7$ cm. Calcule son périmètre en cm.', type: 'numeric', answer: 38, tolerance: 0, unit: 'cm', points: 2, correction: '$2(12+7) = 38$ cm.' },
        { statement: 'Un triangle a une base de $10$ cm et une hauteur de $6$ cm. Son aire ?', type: 'numeric', answer: 30, tolerance: 0, unit: 'cm²', points: 2, correction: '$\\dfrac{10 \\times 6}{2} = 30$ cm².' },
        { statement: 'Un disque a un rayon de $5$ cm. Son aire ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 78.5, tolerance: 0.1, unit: 'cm²', points: 2, correction: '$3{,}14 \\times 25 = 78{,}5$ cm².' },
        { statement: 'Quelle est la différence entre périmètre et aire ?', type: 'multiple-choice', options: ['Périmètre = surface, aire = contour.', 'Périmètre = contour (cm), aire = surface (cm²).', 'Identiques, formules différentes.', 'Périmètre en cm², aire en cm.'], answer: 1, points: 2, correction: 'Périmètre = contour en cm, aire = surface en cm².' },
        { statement: 'Un cercle a un diamètre de $8$ cm. Son périmètre ($\\pi \\approx 3{,}14$) ?', type: 'numeric', answer: 25.12, tolerance: 0.1, unit: 'cm', points: 2, correction: '$\\pi \\times d = 3{,}14 \\times 8 = 25{,}12$ cm.' }
      ]
    }
  }

);
