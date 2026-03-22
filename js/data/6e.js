/* =========================================================
   Spark Learning – data/6e.js
   Modules 6e (Collège – classe de Sixième)
   ========================================================= */

window.MODULES.push(

  /* ─── Module 1 ─── */
  {
    id: '6e-fractions',
    level: 1,
    icon: '½',
    title: 'Fractions',
    subtitle: 'Nommer, simplifier, comparer',
    keywords: ['Numérateur', 'Dénominateur', 'Simplification', 'Fraction irréductible', 'Comparaison'],
    physics: 'Fraction massique, fraction volumique, rapport de grandeurs en chimie',

    cours: {
      intro: 'Une fraction $\\dfrac{a}{b}$ représente $a$ parts d\'un tout divisé en $b$ parts égales — mais c\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion. Quand $a > b$, la fraction est dite <strong>impropre</strong> ($\\dfrac{7}{3} > 1$) : elle représente plus d\'un entier, ce qui est tout à fait valide. Deux fractions peuvent être égales avec des chiffres différents : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$, car on a multiplié numérateur et dénominateur par le même facteur — la valeur ne change pas. <strong>Pourquoi ?</strong> Parce que $\\dfrac{k \\times a}{k \\times b} = \\dfrac{a}{b}$ : les $k$ se simplifient. En chimie, la fraction massique $w = \\dfrac{m_{\\text{soluté}}}{m_{\\text{solution}}}$ est toujours entre $0$ et $1$ car le soluté ne peut pas peser plus que la solution entière. Savoir simplifier et comparer des fractions est indispensable pour tous les calculs de concentration, de proportion et de probabilité.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Simplifier</strong> : trouver le PGCD du numérateur et du dénominateur, puis diviser les deux par ce PGCD. Le PGCD est le plus grand entier qui divise les deux. <em>Exemple :</em> $\\dfrac{18}{24}$ — diviseurs de 18 : 1, 2, 3, 6, 9, 18 ; diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24 → PGCD = 6. Donc $\\dfrac{18}{24} = \\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$. Vérifie : 3 et 4 n\'ont pas de diviseur commun → irréductible ✓',
          '<strong>Comparer</strong> : mettre au même dénominateur en calculant le PPCM des deux dénominateurs. <em>Exemple :</em> comparer $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ → PPCM(3, 5) = 15. On amplifie : $\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$. Comme $10 > 9$, on conclut $\\dfrac{2}{3} > \\dfrac{3}{5}$. Astuce rapide : $\\dfrac{a}{b}$ vs $\\dfrac{c}{d}$ → comparer $a \\times d$ et $b \\times c$ (produit en croix).',
          '<strong>Convertir en décimal</strong> : diviser le numérateur par le dénominateur. <em>Exemple :</em> $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Si le dénominateur est 2, 4, 5, 10, 20 ou 25, la conversion est exacte ; sinon, le résultat peut être infini périodique : $\\dfrac{1}{3} = 0{,}333\\ldots$ On arrondit alors à la précision demandée.'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ (simplification par $k$)',
        '$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$ (amplification par $n$)',
        '$\\dfrac{a}{b} < \\dfrac{c}{d} \\Leftrightarrow a \\times d < b \\times c$ (si $b, d > 0$)'
      ],
      piege: 'Erreur fréquente : simplifier $\\dfrac{a + k}{b + k}$ en divisant par $k$. IMPOSSIBLE ! On ne peut simplifier qu\'en multipliant ou divisant numérateur ET dénominateur par un même facteur, pas en ajoutant ou soustrayant. $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓ mais $\\dfrac{6+3}{9+3} \\neq \\dfrac{2}{3}$ ✗.'
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
        // Garantir un PGCD > 1 : k est le facteur commun, a et b sont premiers entre eux
        const k = rand(2, 6);
        let a = rand(2, 9), b = rand(2, 9);
        let attempts = 0;
        while ((pgcd(a, b) !== 1 || a === b) && attempts < 20) { b = rand(2, 9); attempts++; }
        const num = k * a, den = k * b;
        const val = parseFloat((a / b).toFixed(4));
        return {
          statement: `Simplifie la fraction $\\dfrac{${num}}{${den}}$ et donne sa valeur décimale arrondie au millième.`,
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

    /* ─── Module 2 ─── */
  {
    id: '6e-volumes',
    level: 1,
    icon: '📦',
    title: 'Volumes',
    subtitle: 'Cube, pavé droit, unités (L, mL, m³)',
    keywords: ['Volume', 'Pavé droit', 'Cube', 'Litre', 'Conversion'],
    physics: 'ρ = m/V, volume d\'une solution, gaz parfait',

    cours: {
      intro: 'Le volume mesure l\'espace occupé par un objet en trois dimensions. Un cube de $1$ cm de côté a un volume de $1$ cm³ — c\'est l\'unité de base. <strong>Pourquoi plusieurs unités ?</strong> Parce que les ordres de grandeur varient énormément : une goutte fait $0{,}05$ mL, une piscine olympique $2500$ m³. En physique-chimie, le volume intervient partout : densité $\\rho = \\dfrac{m}{V}$, concentration $c = \\dfrac{n}{V}$, loi des gaz parfaits $PV = nRT$. Le lien entre cm³ et mL est simple : $1$ cm³ $= 1$ mL exactement (même grandeur, noms différents). Maîtriser les conversions entre m³, L et mL est non-négociable pour tous les calculs de chimie.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer le volume</strong> : identifier la forme (pavé ou cube), puis appliquer la formule. <em>Exemple pavé :</em> une boîte de $5$ cm × $3$ cm × $4$ cm → $V = 5 \\times 3 \\times 4 = 60$ cm³. <em>Exemple cube :</em> un sucre de $2$ cm de côté → $V = 2^3 = 8$ cm³. Attention : il faut TROIS dimensions (longueur, largeur, hauteur), pas seulement deux.',
          '<strong>Convertir les unités</strong> : utilise les relations $1\\,\\text{m}^3 = 1000\\,\\text{L}$ et $1\\,\\text{L} = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$. <em>Exemple :</em> $240\\,\\text{cm}^3 \\div 1000 = 0{,}240\\,\\text{L} = 240\\,\\text{mL}$. Pour passer de cm³ à L, divise par 1000 ; pour passer de L à cm³, multiplie par 1000.',
          '<strong>Vérifier l\'homogénéité</strong> : les trois dimensions doivent être dans la même unité avant de multiplier. <em>Exemple :</em> si L = $2$ m, l = $50$ cm et h = $0{,}8$ m, convertir d\'abord : $l = 0{,}50$ m. Puis $V = 2 \\times 0{,}50 \\times 0{,}8 = 0{,}80$ m³ $= 800$ L. Jamais $2 \\times 50 \\times 0{,}8$ en mélangeant m et cm !'
        ]
      },
      formulas: [
        '$V_{\\text{pavé}} = L \\times l \\times h$',
        '$V_{\\text{cube}} = a^3$',
        '$1\\,\\text{m}^3 = 1000\\,\\text{L} = 10^6\\,\\text{cm}^3$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{mL} = 1000\\,\\text{cm}^3$'
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
        correction: 'Il faut cuber le facteur de conversion ! $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$ → $1\\,\\text{cm}^3 = (10^{-2})^3\\,\\text{m}^3 = 10^{-6}\\,\\text{m}^3$. C\'est un facteur $10^4$ de différence — une erreur très fréquente en physique-chimie.'
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
        const L = rand(10, 50), l = rand(5, 30), h = rand(5, 25);
        const vcm3 = L * l * h;
        const vL = parseFloat((vcm3 / 1000).toFixed(2));
        return {
          statement: `Un récipient rectangulaire mesure $${L}\\,\\text{cm}$ de long, $${l}\\,\\text{cm}$ de large et $${h}\\,\\text{cm}$ de haut. Calcule son volume en litres.`,
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
        {
          statement: 'Un pavé droit mesure $15\\,\\text{cm}$ de long, $8\\,\\text{cm}$ de large et $6\\,\\text{cm}$ de haut. Calcule son volume en cm³.',
          type: 'numeric',
          answer: 720,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$V = L \\times l \\times h = 15 \\times 8 \\times 6 = 720\\,\\text{cm}^3$.'
        },
        {
          statement: 'Convertis $3{,}5\\,\\text{L}$ en cm³.',
          type: 'numeric',
          answer: 3500,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $3{,}5\\,\\text{L} = 3{,}5 \\times 1000 = 3500\\,\\text{cm}^3$.'
        },
        {
          statement: 'Quelle est la relation correcte ?',
          type: 'multiple-choice',
          options: ['$1\\,\\text{m}^3 = 100\\,\\text{L}$', '$1\\,\\text{m}^3 = 1000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,000\\,\\text{L}$', '$1\\,\\text{m}^3 = 10\\,\\text{L}$'],
          answer: 1,
          points: 2,
          correction: '$1\\,\\text{m}^3 = 1000\\,\\text{L}$. En effet, $1\\,\\text{m}^3 = 10^6\\,\\text{cm}^3$ et $1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $10^6 \\div 1000 = 1000\\,\\text{L}$.'
        },
        {
          statement: 'Un cube a un volume de $125\\,\\text{cm}^3$. Quelle est la longueur de son arête en cm ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$V = a^3 = 125$, donc $a = \\sqrt[3]{125} = 5\\,\\text{cm}$. Vérification : $5^3 = 5 \\times 5 \\times 5 = 125$ ✓.'
        },
        {
          statement: 'Un récipient mesure $20\\,\\text{cm} \\times 10\\,\\text{cm} \\times 15\\,\\text{cm}$. On le remplit d\'eau. Quelle est la masse d\'eau contenue (en grammes), sachant que $1\\,\\text{cm}^3$ d\'eau pèse $1\\,\\text{g}$ ?',
          type: 'numeric',
          answer: 3000,
          tolerance: 0,
          unit: 'g',
          points: 2,
          correction: '$V = 20 \\times 10 \\times 15 = 3000\\,\\text{cm}^3$. Comme $1\\,\\text{cm}^3$ d\'eau $= 1\\,\\text{g}$, la masse est $3000\\,\\text{g} = 3\\,\\text{kg}$.'
        }
      ]
    }
  },

    /* ─── Module 3 ─── */
  {
    id: '6e-angles',
    level: 1,
    icon: '📐',
    title: 'Angles',
    subtitle: 'Mesurer, construire, types d\'angles',
    keywords: ['Angle aigu', 'Angle obtus', 'Angle droit', 'Degré', 'Angles supplémentaires', 'Angles complémentaires'],
    physics: 'Angle d\'incidence et de réfraction (Snell-Descartes), décomposition de forces',

    cours: {
      intro: 'Un angle mesure l\'écartement entre deux demi-droites issues d\'un même sommet. <strong>Point clé :</strong> un angle ne dépend pas de la longueur des côtés — il mesure uniquement l\'ouverture. Un angle de $60°$ reste $60°$ que les segments mesurent $1$ cm ou $1$ km. On mesure les angles en degrés (°) avec un rapporteur, ou en radians (rad) en mathématiques avancées : $180° = \\pi$ rad. En physique-chimie, les angles sont partout : angle d\'incidence en optique ($i_1$ et $i_2$ dans Snell-Descartes), angle d\'un plan incliné en mécanique, déphasage en électricité. Connaître les propriétés des angles (complémentaires, supplémentaires, angles d\'un triangle) permet de résoudre une grande variété de problèmes géométriques et physiques.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'angle</strong> : aigu ($0° < \\alpha < 90°$), droit ($\\alpha = 90°$, symbolisé par un petit carré), obtus ($90° < \\alpha < 180°$), plat ($\\alpha = 180°$). <em>Exemple :</em> $\\alpha = 115°$ est obtus car $90° < 115° < 180°$.',
          '<strong>Utiliser les relations d\'angles</strong> : complémentaires (somme $= 90°$), supplémentaires (somme $= 180°$), triangle (somme $= 180°$). <em>Exemple :</em> un angle de $47°$ et un autre de $68°$ dans un triangle → troisième angle $= 180° - 47° - 68° = 65°$. Toujours vérifier : $47 + 68 + 65 = 180°$ ✓',
          '<strong>Angles et droites parallèles</strong> : quand une droite coupe deux parallèles, les angles alternes-internes sont égaux, les angles correspondants sont égaux, et les angles co-internes sont supplémentaires. <em>Exemple :</em> si l\'angle d\'incidence est $35°$, l\'angle alterne-interne vaut aussi $35°$ — c\'est la base de la loi de réflexion en optique.'
        ]
      },
      formulas: [
        '$\\alpha + \\beta = 90°$ (angles complémentaires)',
        '$\\alpha + \\beta = 180°$ (angles supplémentaires)',
        '$\\hat{A} + \\hat{B} + \\hat{C} = 180°$ (triangle)',
        '$\\pi\\,\\text{rad} = 180°$, donc $1° = \\dfrac{\\pi}{180}\\,\\text{rad}$'
      ],
      piege: 'Ne pas confondre la mesure d\'un angle et la longueur d\'un côté. Un angle ne dépend pas de la longueur des segments qui le forment — il mesure uniquement l\'écartement entre les deux demi-droites. Un angle de 30° reste 30° que les segments mesurent 1 cm ou 1 km.'
    },

    quiz: [
      {
        q: 'Dans un triangle, deux angles mesurent $47°$ et $68°$. Quelle est la mesure du troisième angle ?',
        options: ['$55°$', '$65°$', '$75°$', '$85°$'],
        answer: 1,
        correction: 'La somme des angles d\'un triangle est $180°$. Troisième angle $= 180° - 47° - 68° = 65°$.'
      },
      {
        q: 'Deux angles sont complémentaires et leur différence est $20°$. Quelle est la valeur du plus grand ?',
        options: ['$35°$', '$45°$', '$55°$', '$65°$'],
        answer: 2,
        correction: 'Soit $x$ le plus petit et $x + 20°$ le plus grand. Ils sont complémentaires : $x + (x+20°) = 90°$ → $2x = 70°$ → $x = 35°$. Le plus grand vaut $35° + 20° = 55°$. Vérification : $35° + 55° = 90°$ ✓'
      },
      {
        q: 'Deux angles sont supplémentaires. L\'un vaut $3x + 10°$ et l\'autre $x + 30°$. Quelle est la valeur de $x$ ?',
        options: ['$25°$', '$35°$', '$28°$', '$30°$'],
        answer: 1,
        correction: '$(3x+10) + (x+30) = 180 \\Rightarrow 4x + 40 = 180 \\Rightarrow 4x = 140 \\Rightarrow x = 35°$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a1 = rand(20, 70), a2 = rand(20, 70);
        const a3 = 180 - a1 - a2;
        if (a3 <= 0) { const a1b = 40, a2b = 60; return { statement: `Dans un triangle, deux angles mesurent $${a1b}°$ et $${a2b}°$. Calcule le troisième angle.`, answer: 80, tolerance: 0, unit: '°', hint: 'La somme des trois angles d\'un triangle est toujours 180°.', solution: [`$180° - ${a1b}° - ${a2b}° = 80°$`] }; }
        return {
          statement: `Dans un triangle, deux angles mesurent $${a1}°$ et $${a2}°$. Quelle est la mesure du troisième angle (en degrés) ?`,
          answer: a3,
          tolerance: 0,
          unit: '°',
          hint: 'La somme des angles d\'un triangle vaut toujours 180°.',
          solution: [
            `Propriété : la somme des angles d'un triangle vaut toujours $180°$.`,
            `Équation : $${a1}° + ${a2}° + \\alpha = 180°$`,
            `On isole $\\alpha$ : $\\alpha = 180° - ${a1}° - ${a2}°$`,
            `$\\alpha = ${180 - a1}° - ${a2}° = ${a3}°$`,
            `Vérification : $${a1}° + ${a2}° + ${a3}° = ${a1 + a2 + a3}°$ ✓`
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
        '$\\sin i_2 = \\dfrac{n_1 \\sin i_1}{n_2} = \\dfrac{1{,}00 \\times \\sin 30°}{1{,}50} = \\dfrac{0{,}500}{1{,}50} = 0{,}333$. Donc $i_2 = \\arcsin(0{,}333) \\approx 19°$.',
        'Le rayon se rapproche de la normale ($i_2 < i_1$) car il passe dans un milieu plus dense ($n_2 > n_1$).'
      ],
      finalAnswer: '$i_2 \\approx 19°$ — le rayon se rapproche de la normale en entrant dans le verre.'
    },

    evaluation: {
      title: 'Évaluation — Angles',
      duration: '20 min',
      questions: [
        {
          statement: 'Dans un triangle, les trois angles mesurent $52°$, $73°$ et $\\alpha$. Calcule $\\alpha$ (en degrés).',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'La somme des angles d\'un triangle vaut $180°$. $\\alpha = 180° - 52° - 73° = 55°$.'
        },
        {
          statement: 'Deux angles sont supplémentaires. L\'un mesure $118°$. Quelle est la mesure de l\'autre ?',
          type: 'numeric',
          answer: 62,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Deux angles supplémentaires ont pour somme $180°$. L\'autre angle vaut $180° - 118° = 62°$.'
        },
        {
          statement: 'Un angle mesure $37°$. Comment le classe-t-on ?',
          type: 'multiple-choice',
          options: ['Angle droit', 'Angle obtus', 'Angle aigu', 'Angle plat'],
          answer: 2,
          points: 2,
          correction: 'Un angle aigu mesure entre $0°$ et $90°$. Comme $0° < 37° < 90°$, c\'est un angle aigu.'
        },
        {
          statement: 'Deux angles complémentaires ont pour mesures $2x + 5°$ et $3x - 10°$. Calcule la valeur de $x$ (en degrés).',
          type: 'numeric',
          answer: 19,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Angles complémentaires : $(2x + 5) + (3x - 10) = 90$. Donc $5x - 5 = 90$, soit $5x = 95$, d\'où $x = 19°$.'
        },
        {
          statement: 'Quel est l\'angle formé par les aiguilles d\'une horloge à $15\\text{h}00$ ?',
          type: 'multiple-choice',
          options: ['$180°$', '$90°$', '$60°$', '$120°$'],
          answer: 1,
          points: 2,
          correction: 'À $15\\text{h}00$, la grande aiguille est sur le $12$ et la petite sur le $3$. Le cadran fait $360°$ pour $12$ heures, soit $30°$ par heure. De $12$ à $3$ : $3 \\times 30° = 90°$.'
        }
      ]
    }
  },

    /* ─── Module 4 ─── */
  {
    id: '6e-nombres-decimaux',
    level: 1,
    icon: '🔢',
    title: 'Nombres entiers et décimaux',
    subtitle: 'Lire, écrire, comparer, ranger',
    keywords: ['Chiffre', 'Décimal', 'Valeur positionnelle', 'Comparer', 'Ranger'],
    physics: false,

    cours: {
      intro: 'Un nombre décimal s\'écrit avec une partie entière (à gauche de la virgule) et une partie décimale (à droite). Par exemple, $3{,}75$ = 3 unités + 7 dixièmes + 5 centièmes. <strong>L\'erreur la plus fréquente</strong> : croire que $1{,}12 > 1{,}9$ parce que « $12 > 9$ ». C\'est faux ! On compare position par position en partant de la gauche : les dixièmes ($1$ vs $9$) donnent déjà la réponse — $1{,}9 > 1{,}12$. Plus de chiffres ne veut pas dire plus grand. Ce concept de valeur positionnelle est fondamental : en physique, noter $3{,}7 \\times 10^2$ ou $0{,}037 \\times 10^4$ représente la même grandeur, et comprendre la valeur des positions permet de ne pas se tromper.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier la partie entière (à gauche de la virgule) et la partie décimale (à droite).',
          'Repérer la valeur positionnelle de chaque chiffre : unités, dizaines, centaines… dixièmes ($\\times \\frac{1}{10}$), centièmes ($\\times \\frac{1}{100}$).',
          'Pour comparer deux décimaux : aligner les virgules, puis comparer chiffre par chiffre en partant de la gauche.',
          'Pour ranger : procéder du plus petit au plus grand (ordre croissant) ou l\'inverse (décroissant).'
        ]
      },
      formulas: [
        '$3{,}75 = 3 + \\dfrac{7}{10} + \\dfrac{5}{100} = 3 + 0{,}7 + 0{,}05$',
        'Comparer : $a{,}bc < a{,}bd$ si $c < d$ (à partie entière égale)',
        'Encadrement entier : $\\lfloor x \\rfloor \\leq x < \\lfloor x \\rfloor + 1$'
      ],
      piege: 'Piège classique : affirmer que $1{,}12 > 1{,}9$ parce que $12 > 9$. C\'est FAUX ! On compare les dixièmes d\'abord : $9 > 1$, donc $1{,}9 > 1{,}12$. Ne confonds pas « plus de chiffres » avec « plus grand ».'
    },

    quiz: [
      {
        q: 'Quel est le chiffre des centièmes dans le nombre $47{,}356$ ?',
        options: ['$4$', '$7$', '$3$', '$5$'],
        answer: 3,
        correction: 'Dans $47{,}356$ : $4$ = dizaines, $7$ = unités, $3$ = dixièmes, $5$ = centièmes, $6$ = millièmes. Le chiffre des centièmes est bien $5$.'
      },
      {
        q: 'Quel est le plus grand parmi : $2{,}45$ ; $2{,}9$ ; $2{,}09$ ; $2{,}50$ ?',
        options: ['$2{,}45$', '$2{,}9$', '$2{,}09$', '$2{,}50$'],
        answer: 1,
        correction: 'On compare les dixièmes : $2{,}9$ a $9$ dixièmes, les autres en ont moins. Donc $2{,}9$ est le plus grand. Souviens-toi : $2{,}9 > 2{,}50$ même si $2{,}50$ a plus de chiffres !'
      },
      {
        q: 'Un élève affirme que $2{,}50 > 2{,}9$ car « $50 > 9$ ». Quelle réponse corrige cette erreur ?',
        options: [
          'Il a raison car $50 > 9$.',
          'Il se trompe : on compare les dixièmes d\'abord — $2{,}9$ a $9$ dixièmes contre $5$ pour $2{,}50$, donc $2{,}9 > 2{,}50$.',
          'Il se trompe : il faut comparer les centièmes, donc $2{,}50 < 2{,}09$.',
          'Il se trompe car $2{,}50 = 2{,}5$ et $2{,}5 = 2{,}9$.'
        ],
        answer: 1,
        correction: 'On compare position par position en partant de la gauche. Partie entière : $2 = 2$ (égaux). Dixièmes : $9 > 5$, donc $2{,}9 > 2{,}50$. Le nombre de chiffres après la virgule ne détermine pas la taille ! $2{,}9 = 2{,}90$ est plus grand que $2{,}50$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = randFloat(1, 9, 1);
        const b = randFloat(1, 9, 2);
        const c = randFloat(1, 9, 1);
        const d = randFloat(1, 9, 2);
        const nums = [a, b, c, d];
        nums.sort((x, y) => x - y);
        const minVal = nums[0];
        return {
          statement: `Parmi les quatre nombres $${a}$ ; $${b}$ ; $${c}$ ; $${d}$, lequel est le plus petit ?`,
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
        'Ordre croissant : $4{,}09 < 4{,}35 < 4{,}50 < 4{,}8$. Donc : Inès < Léa < Rayan < Tom.',
        'Différence : $4{,}8 - 4{,}09 = 0{,}71$ m.',
        '$4{,}8 > 4{,}5$, donc oui, Tom a bien sauté plus de $4$ m et demi.'
      ],
      finalAnswer: 'Tom est premier avec $4{,}8$ m ; Inès est dernière avec $4{,}09$ m.'
    },

    evaluation: {
      title: 'Évaluation — Nombres entiers et décimaux',
      duration: '15 min',
      questions: [
        {
          statement: 'Dans le nombre $56{,}709$, quel est le chiffre des dixièmes ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Dans $56{,}709$ : $5$ = dizaines, $6$ = unités, $7$ = dixièmes, $0$ = centièmes, $9$ = millièmes. Le chiffre des dixièmes est $7$.'
        },
        {
          statement: 'Range dans l\'ordre croissant : $3{,}07$ ; $3{,}7$ ; $3{,}007$ ; $3{,}70$. Quel nombre est le plus petit ?',
          type: 'multiple-choice',
          options: ['$3{,}07$', '$3{,}7$', '$3{,}007$', '$3{,}70$'],
          answer: 2,
          points: 2,
          correction: 'Comparons les dixièmes : $3{,}007$ a $0$ dixième, $3{,}07$ a $0$ dixième aussi mais $7$ centièmes, $3{,}7 = 3{,}700$ a $7$ dixièmes. Ordre croissant : $3{,}007 < 3{,}07 < 3{,}7 = 3{,}70$.'
        },
        {
          statement: 'Encadre $7{,}83$ entre deux entiers consécutifs. Donne l\'entier inférieur.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$7 < 7{,}83 < 8$. La partie entière de $7{,}83$ est $7$, donc l\'entier inférieur est $7$.'
        },
        {
          statement: 'Quelle est la décomposition correcte de $4{,}065$ ?',
          type: 'multiple-choice',
          options: [
            '$4 + 0{,}6 + 0{,}05$',
            '$4 + 0{,}06 + 0{,}005$',
            '$4 + 0{,}6 + 0{,}005$',
            '$4 + 0{,}065$'
          ],
          answer: 1,
          points: 2,
          correction: '$4{,}065 = 4 + \\dfrac{0}{10} + \\dfrac{6}{100} + \\dfrac{5}{1000} = 4 + 0{,}06 + 0{,}005$. Attention : le $0$ est aux dixièmes, le $6$ aux centièmes et le $5$ aux millièmes. La réponse D est aussi correcte mathématiquement, mais la décomposition demandée est par position.'
        },
        {
          statement: 'Intercale un nombre décimal entre $5{,}3$ et $5{,}4$. On demande : combien y a-t-il d\'entiers entre $5{,}3$ et $5{,}4$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Il n\'y a aucun entier entre $5{,}3$ et $5{,}4$ car ces deux nombres sont entre $5$ et $6$. En revanche, il existe une infinité de décimaux entre eux : $5{,}31$ ; $5{,}35$ ; $5{,}399$…'
        }
      ]
    }
  },

    /* ─── Module 5 ─── */
  {
    id: '6e-addition-soustraction',
    level: 1,
    icon: '➕',
    title: 'Addition et soustraction',
    subtitle: 'Entiers et décimaux, calcul posé et mental',
    keywords: ['Addition', 'Soustraction', 'Retenue', 'Décimaux', 'Calcul posé'],
    physics: false,

    cours: {
      intro: 'Additionner et soustraire des décimaux repose sur une règle unique : <strong>aligner les virgules</strong>. Cette règle garantit que l\'on additionne des grandeurs de même « rang » — les dixièmes avec les dixièmes, les unités avec les unités, etc. Si les nombres n\'ont pas le même nombre de décimales, on complète avec des zéros (écrire $8{,}7$ comme $8{,}70$ ne change pas sa valeur). On calcule ensuite colonne par colonne de droite à gauche, comme pour les entiers. Pour l\'addition, une retenue se propage vers la gauche quand une somme dépasse 9. Pour la soustraction, un emprunt se propage quand le chiffre du haut est plus petit que celui du bas. Ces opérations sont au cœur de tout calcul de mesure en sciences : additionner des masses, soustraire des longueurs, calculer des écarts de température.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Écrire les nombres en colonnes en alignant les virgules (compléter avec des zéros si nécessaire).',
          'Opérer chiffre par chiffre de droite à gauche.',
          'Pour l\'addition : gérer les retenues. Pour la soustraction : gérer les emprunts si le chiffre du haut est plus petit que celui du bas.'
        ]
      },
      formulas: [
        '$a + b = b + a$ (commutativité)',
        '$(a + b) + c = a + (b + c)$ (associativité)',
        'Vérification de la soustraction : $(a - b) + b = a$'
      ],
      piege: 'Piège fréquent : ne pas aligner les virgules ! Pour calculer $12{,}4 + 3{,}75$, écrire $12{,}40$ (et non aligner le $3$ sous le $1$). Complète toujours par des zéros pour avoir le même nombre de décimales.'
    },

    quiz: [
      {
        q: 'Quel est le résultat de $8{,}7 + 3{,}45$ ?',
        options: ['$11{,}12$', '$12{,}15$', '$11{,}15$', '$12{,}12$'],
        answer: 1,
        correction: 'On aligne : $8{,}70 + 3{,}45$. Centièmes : $0 + 5 = 5$. Dixièmes : $7 + 4 = 11$, on pose $1$ et retient $1$. Unités : $8 + 3 + 1 = 12$. Résultat : $12{,}15$.'
      },
      {
        q: 'Un élève calcule $15{,}2 - 6{,}75$ et trouve $9{,}55$. Où est l\'erreur ?',
        options: [
          'Il n\'a pas aligné les virgules (il a soustrait $15{,}2 - 6{,}75$ comme $152 - 675$).',
          'Il a oublié de compléter $15{,}2$ en $15{,}20$ avant de soustraire, ce qui a faussé les centièmes.',
          'Il n\'y a pas d\'erreur, $9{,}55$ est correct.',
          'Il a inversé : il a calculé $6{,}75 - 15{,}2$.'
        ],
        answer: 1,
        correction: 'La bonne méthode : écrire $15{,}20 - 6{,}75$. Centièmes : $0 - 5$ → emprunt : $10 - 5 = 5$. Dixièmes : $2 - 1 - 7$ → emprunt : $12 - 1 - 7 = 4$. Unités : $5 - 1 - 6$ → emprunt : $15 - 1 - 6 = 8$. Résultat : $8{,}45$. L\'élève a probablement soustrait $20 - 75$ sans gérer les emprunts, obtenant $55$ au lieu de $45$.'
      },
      {
        q: 'Marie a $20{,}00$ €. Elle achète un livre à $8{,}95$ € et un stylo à $3{,}50$ €. Combien lui reste-t-il ?',
        options: ['$7{,}55$ €', '$7{,}45$ €', '$8{,}55$ €', '$6{,}55$ €'],
        answer: 0,
        correction: 'Total dépensé : $8{,}95 + 3{,}50 = 12{,}45$ €. Reste : $20{,}00 - 12{,}45 = 7{,}55$ €.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = randFloat(1, 20, 1);
        const b = randFloat(1, 10, 2);
        const sum = parseFloat((a + b).toFixed(2));
        return {
          statement: `Calcule $${a} + ${b}$.`,
          answer: sum,
          tolerance: 0.01,
          unit: '',
          hint: `Aligne les virgules : écris $${a}$ comme $${a.toFixed(2)}$, puis additionne colonne par colonne.`,
          solution: [
            `Aligner les virgules : $${a.toFixed(2)} + ${b.toFixed(2)}$`,
            `Additionner chiffre par chiffre de droite à gauche.`,
            `Résultat : $${sum}$`
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
        {
          statement: 'Calcule $14{,}6 + 7{,}85$.',
          type: 'numeric',
          answer: 22.45,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On aligne les virgules : $14{,}60 + 7{,}85$. Centièmes : $0 + 5 = 5$. Dixièmes : $6 + 8 = 14$, on pose $4$ retenue $1$. Unités : $4 + 7 + 1 = 12$, on pose $2$ retenue $1$. Dizaines : $1 + 0 + 1 = 2$. Résultat : $22{,}45$.'
        },
        {
          statement: 'Calcule $20{,}03 - 8{,}7$.',
          type: 'numeric',
          answer: 11.33,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On écrit $20{,}03 - 8{,}70$. Centièmes : $3 - 0 = 3$. Dixièmes : $0 - 7$ → emprunt : $10 - 7 = 3$. Unités : $0 - 1 - 8$ → emprunt : $10 - 1 - 8 = 1$. Dizaines : $2 - 1 = 1$. Résultat : $11{,}33$.'
        },
        {
          statement: 'Un élève calcule $6{,}5 + 3{,}28$ et trouve $9{,}33$. Où est l\'erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur, $9{,}33$ est correct.',
            'Il a mal aligné les virgules : le résultat correct est $9{,}78$.',
            'Il a additionné $65 + 328 = 393$ au lieu d\'aligner les virgules.',
            'Il a oublié une retenue : le résultat correct est $10{,}33$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le résultat correct est $6{,}50 + 3{,}28 = 9{,}78$. L\'élève a probablement mal aligné les colonnes, additionnant le $5$ (dixièmes) avec le $8$ (centièmes).'
        },
        {
          statement: 'Léo a $50$ €. Il achète un jeu à $23{,}45$ € et un livre à $12{,}80$ €. Combien lui reste-t-il ?',
          type: 'numeric',
          answer: 13.75,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'Total des achats : $23{,}45 + 12{,}80 = 36{,}25$ €. Reste : $50{,}00 - 36{,}25 = 13{,}75$ €.'
        },
        {
          statement: 'Quelle propriété permet d\'affirmer que $7{,}3 + 4{,}5 = 4{,}5 + 7{,}3$ ?',
          type: 'multiple-choice',
          options: ['L\'associativité', 'La commutativité', 'La distributivité', 'La transitivité'],
          answer: 1,
          points: 2,
          correction: 'La commutativité de l\'addition permet de changer l\'ordre des termes sans modifier le résultat : $a + b = b + a$.'
        }
      ]
    }
  },

    /* ─── Module 6 ─── */
  {
    id: '6e-multiplication',
    level: 1,
    icon: '✖️',
    title: 'Multiplication des entiers et décimaux',
    subtitle: 'Technique posée, placement de la virgule',
    keywords: ['Multiplication', 'Produit', 'Décimaux', 'Calcul posé', 'Retenue'],
    physics: false,

    cours: {
      intro: 'Multiplier des décimaux revient à multiplier des entiers puis à replacer la virgule au bon endroit. <strong>Pourquoi ça marche ?</strong> $2{,}3 \\times 1{,}4 = \\dfrac{23}{10} \\times \\dfrac{14}{10} = \\dfrac{23 \\times 14}{100} = \\dfrac{322}{100} = 3{,}22$. On divise par $10$ deux fois (une par facteur), donc le résultat a $1 + 1 = 2$ décimales. La règle est générale : le nombre de décimales du produit est la somme des décimales des deux facteurs. <strong>Estimation rapide</strong> : toujours vérifier l\'ordre de grandeur avec des arrondis. $2{,}3 \\times 1{,}4 \\approx 2 \\times 1 = 2$ — le résultat doit être proche de 2, pas de 0,2 ni de 20. Cette vérification évite les erreurs de placement de virgule.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Ignorer les virgules et effectuer la multiplication comme si c\'étaient des entiers.',
          'Compter le nombre total de chiffres après la virgule dans les deux facteurs.',
          'Dans le produit obtenu, placer la virgule de sorte qu\'il y ait ce même nombre de décimales.',
          'Vérifier l\'ordre de grandeur par une estimation rapide avec des arrondis.'
        ]
      },
      formulas: [
        '$a \\times b = b \\times a$ (commutativité)',
        '$a \\times (b + c) = a \\times b + a \\times c$ (distributivité)',
        'Décimales : $\\underbrace{x{,}ab}_{2\\text{ déc.}} \\times \\underbrace{y{,}c}_{1\\text{ déc.}} \\Rightarrow$ résultat avec $3$ décimales'
      ],
      piege: 'Piège : pour $2{,}3 \\times 1{,}4$, on calcule $23 \\times 14 = 322$, puis on compte $1 + 1 = 2$ décimales, donc le résultat est $3{,}22$. Ne pas oublier de compter les décimales des DEUX facteurs.'
    },

    quiz: [
      {
        q: 'Combien vaut $3{,}5 \\times 4{,}2$ ?',
        options: ['$14{,}70$', '$14{,}07$', '$1{,}470$', '$147{,}0$'],
        answer: 0,
        correction: '$35 \\times 42 = 1470$. Chaque facteur a $1$ décimale, total $1 + 1 = 2$ décimales. Donc $3{,}5 \\times 4{,}2 = 14{,}70$.'
      },
      {
        q: 'En calculant $0{,}4 \\times 0{,}3$, un élève trouve $1{,}2$. Quelle erreur a-t-il commise ?',
        options: [
          'Il a bien calculé : $4 \\times 3 = 12$, donc $0{,}4 \\times 0{,}3 = 1{,}2$.',
          'Il a oublié de compter les décimales : $0{,}4$ a 1 décimale et $0{,}3$ aussi, donc le résultat doit avoir $1 + 1 = 2$ décimales : $0{,}12$.',
          'Il aurait dû calculer $0{,}4 + 0{,}3 = 0{,}7$, pas multiplier.',
          'Il a mal multiplié : $4 \\times 3 = 7$, pas $12$.'
        ],
        answer: 1,
        correction: '$4 \\times 3 = 12$ est correct, mais il faut compter les décimales : $0{,}4$ en a $1$ et $0{,}3$ en a $1$, total $1 + 1 = 2$. Le résultat est donc $0{,}12$ et non $1{,}2$. Vérification : $0{,}4 \\times 0{,}3 \\approx 0{,}4 \\times 0{,}3 < 0{,}4 < 1$, donc $1{,}2$ est trop grand !'
      },
      {
        q: 'Un livre coûte $7{,}50$ €. Quel est le prix de $6$ exemplaires ?',
        options: ['$43{,}0$ €', '$45{,}00$ €', '$44{,}0$ €', '$42{,}00$ €'],
        answer: 1,
        correction: '$7{,}50 \\times 6$. On calcule $750 \\times 6 = 4500$, puis $2$ décimales : $45{,}00$ €.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = randFloat(1, 9, 1);
        const b = randFloat(1, 9, 1);
        const prod = parseFloat((a * b).toFixed(2));
        return {
          statement: `Calcule $${a} \\times ${b}$.`,
          answer: prod,
          tolerance: 0.01,
          unit: '',
          hint: `Multiplie d'abord $${Math.round(a * 10)} \\times ${Math.round(b * 10)}$, puis place la virgule ($1 + 1 = 2$ décimales).`,
          solution: [
            `On ignore les virgules : $${Math.round(a * 10)} \\times ${Math.round(b * 10)} = ${Math.round(a * 10) * Math.round(b * 10)}$.`,
            `Total de décimales : $1 + 1 = 2$.`,
            `Résultat : $${prod}$`
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
        {
          statement: 'Calcule $4{,}6 \\times 3{,}5$.',
          type: 'numeric',
          answer: 16.1,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On calcule $46 \\times 35 = 1610$. Total de décimales : $1 + 1 = 2$. Résultat : $16{,}10 = 16{,}1$.'
        },
        {
          statement: 'Combien de décimales doit avoir le résultat de $2{,}75 \\times 1{,}3$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$2{,}75$ a $2$ décimales et $1{,}3$ a $1$ décimale. Le produit a $2 + 1 = 3$ décimales. Vérification : $275 \\times 13 = 3575$, donc $2{,}75 \\times 1{,}3 = 3{,}575$.'
        },
        {
          statement: 'Un élève calcule $0{,}6 \\times 0{,}7$ et trouve $4{,}2$. Quelle erreur a-t-il faite ?',
          type: 'multiple-choice',
          options: [
            'Il n\'a pas d\'erreur : $6 \\times 7 = 42$ donc $0{,}6 \\times 0{,}7 = 4{,}2$.',
            'Il a oublié de placer correctement la virgule : le résultat a $1 + 1 = 2$ décimales, donc $0{,}42$.',
            'Il aurait dû additionner : $0{,}6 + 0{,}7 = 1{,}3$.',
            'Il a multiplié les décimales séparément.'
          ],
          answer: 1,
          points: 2,
          correction: '$6 \\times 7 = 42$ est correct, mais il faut $1 + 1 = 2$ décimales dans le résultat. On obtient $0{,}42$. Estimation : $0{,}6 \\times 0{,}7 < 0{,}7 < 1$, donc $4{,}2$ est impossible.'
        },
        {
          statement: 'Un lot de $12$ cahiers coûte $2{,}35$ € l\'unité. Quel est le prix total ?',
          type: 'numeric',
          answer: 28.2,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$12 \\times 2{,}35 = 28{,}20$ €. On calcule : $12 \\times 235 = 2820$, avec $2$ décimales : $28{,}20$ €.'
        },
        {
          statement: 'Utilise la distributivité pour calculer $7 \\times 5{,}2$. Quelle décomposition est correcte ?',
          type: 'multiple-choice',
          options: [
            '$7 \\times 5 + 7 \\times 2 = 35 + 14 = 49$',
            '$7 \\times 5 + 7 \\times 0{,}2 = 35 + 1{,}4 = 36{,}4$',
            '$7 \\times 5 \\times 0{,}2 = 7$',
            '$5{,}2 \\times 5{,}2 = 27{,}04$'
          ],
          answer: 1,
          points: 2,
          correction: 'Par distributivité : $7 \\times 5{,}2 = 7 \\times (5 + 0{,}2) = 7 \\times 5 + 7 \\times 0{,}2 = 35 + 1{,}4 = 36{,}4$.'
        }
      ]
    }
  },

    /* ─── Module 7 ─── */
  {
    id: '6e-division',
    level: 1,
    icon: '➗',
    title: 'Division euclidienne et décimale',
    subtitle: 'Quotient, reste, division posée',
    keywords: ['Division', 'Quotient', 'Reste', 'Dividende', 'Diviseur', 'Décimale'],
    physics: false,

    cours: {
      intro: 'La division répond à la question : « Combien de fois $b$ tient-il dans $a$ ? » La division euclidienne donne un quotient entier et un reste (l\'excédent qui ne rentre pas en entier). La formule $a = b \\times q + r$ résume tout. <strong>Exemple concret :</strong> partager $17$ bonbons en groupes de $5$ → $17 = 5 \\times 3 + 2$ : on fait $3$ groupes complets et il reste $2$ bonbons. La division décimale prolonge le calcul en ajoutant des zéros au reste, pour obtenir un quotient avec décimales. <strong>Attention :</strong> la division n\'est pas commutative ! $12 \\div 4 = 3$ mais $4 \\div 12 = 0{,}333\\ldots$ Toujours vérifier avec : quotient $\\times$ diviseur + reste = dividende.',
      method: {
        title: 'Méthode en 5 étapes',
        steps: [
          'Identifier le dividende (nombre à diviser) et le diviseur (nombre par lequel on divise).',
          'Chercher combien de fois le diviseur « tient » dans les premiers chiffres du dividende.',
          'Multiplier et soustraire : noter le reste partiel.',
          'Abaisser le chiffre suivant et recommencer.',
          'Pour une division décimale : placer la virgule dans le quotient et ajouter des zéros au dividende pour continuer.'
        ]
      },
      formulas: [
        'Division euclidienne : $a = b \\times q + r$ avec $0 \\leq r < b$',
        'Vérification : $b \\times q + r = a$',
        'Division exacte : $r = 0 \\Rightarrow a = b \\times q$'
      ],
      piege: 'Piège : la division n\'est pas commutative ! $12 \\div 4 \\neq 4 \\div 12$. Toujours vérifier en multipliant : quotient $\\times$ diviseur + reste = dividende.'
    },

    quiz: [
      {
        q: 'Dans la division euclidienne de $87$ par $5$, quel est le reste ?',
        options: ['$2$', '$1$', '$3$', '$0$'],
        answer: 0,
        correction: '$87 = 5 \\times 17 + 2$. Vérification : $5 \\times 17 = 85$, et $85 + 2 = 87$. ✓ Le reste est $2$.'
      },
      {
        q: 'Combien vaut $13{,}5 \\div 4$ ?',
        options: ['$3{,}275$', '$3{,}375$', '$3{,}475$', '$3{,}125$'],
        answer: 1,
        correction: '$13{,}5 \\div 4 = 3{,}375$. Vérification : $4 \\times 3{,}375 = 13{,}5$ ✓.'
      },
      {
        q: 'Dans la division euclidienne de $43$ par $6$, un élève obtient quotient $= 8$ et reste $= 5$. Comment vérifier sans recalculer ?',
        options: [
          'Calculer $43 \\div 8 = 5{,}375$ et vérifier que c\'est proche de $6$.',
          'Vérifier que $6 \\times 8 + 5 = 53 \\neq 43$ → la réponse est fausse.',
          'Vérifier que $6 \\times 8 + 5 = 53$ et comme $53 \\neq 43$, on recommence.',
          'Calculer $43 - 6 = 37$ et voir si $37 \\div 8 = 5$.'
        ],
        answer: 1,
        correction: 'La vérification est : $b \\times q + r = a$, soit $6 \\times 8 + 5 = 48 + 5 = 53 \\neq 43$. La réponse est fausse ! La bonne division : $43 = 6 \\times 7 + 1$ (quotient $7$, reste $1$). Vérification : $6 \\times 7 + 1 = 42 + 1 = 43$ ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const b = rand(2, 9);
        const q = rand(5, 20);
        const r = rand(0, b - 1);
        const a = b * q + r;
        return {
          statement: `Effectue la division euclidienne de $${a}$ par $${b}$. Quel est le quotient entier ?`,
          answer: q,
          tolerance: 0,
          unit: '',
          hint: `Cherche combien de fois $${b}$ « tient » dans $${a}$. Essaie $${b} \\times ${q - 1}$ puis $${b} \\times ${q}$.`,
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
        'On peut remplir $3$ cars complets, avec $22$ élèves restants.',
        'Il faut $3 + 1 = 4$ cars au total (le $4^e$ transportera les $22$ élèves restants).'
      ],
      finalAnswer: 'Il faut réserver $4$ cars.'
    },

    evaluation: {
      title: 'Évaluation — Division',
      duration: '20 min',
      questions: [
        {
          statement: 'Effectue la division euclidienne de $97$ par $6$. Quel est le quotient entier ?',
          type: 'numeric',
          answer: 16,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$97 = 6 \\times 16 + 1$. Vérification : $6 \\times 16 = 96$ et $96 + 1 = 97$ ✓. Le quotient est $16$.'
        },
        {
          statement: 'Quel est le reste de la division euclidienne de $97$ par $6$ ?',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$97 = 6 \\times 16 + 1$. Le reste est $1$. On vérifie que $0 \\leq 1 < 6$ ✓.'
        },
        {
          statement: 'Calcule $17{,}5 \\div 4$.',
          type: 'numeric',
          answer: 4.375,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$17{,}5 \\div 4 = 4{,}375$. Vérification : $4 \\times 4{,}375 = 17{,}5$ ✓.'
        },
        {
          statement: 'Dans la formule $a = b \\times q + r$, que représente $r$ ?',
          type: 'multiple-choice',
          options: ['Le quotient', 'Le diviseur', 'Le reste', 'Le dividende'],
          answer: 2,
          points: 2,
          correction: 'Dans $a = b \\times q + r$ : $a$ est le dividende, $b$ le diviseur, $q$ le quotient entier et $r$ le reste. Le reste vérifie $0 \\leq r < b$.'
        },
        {
          statement: 'On partage $250$ billes équitablement entre $8$ enfants. Combien de billes chaque enfant reçoit-il, et combien en reste-t-il ?',
          type: 'multiple-choice',
          options: [
            '$31$ billes chacun, reste $2$',
            '$30$ billes chacun, reste $10$',
            '$32$ billes chacun, reste $0$',
            '$31$ billes chacun, reste $0$'
          ],
          answer: 0,
          points: 2,
          correction: '$250 = 8 \\times 31 + 2$. Vérification : $8 \\times 31 = 248$ et $248 + 2 = 250$ ✓. Chaque enfant reçoit $31$ billes et il en reste $2$.'
        }
      ]
    }
  },

    /* ─── Module 8 ─── */
  {
    id: '6e-figures-geometriques',
    level: 1,
    icon: '📐',
    title: 'Figures géométriques de base',
    subtitle: 'Droites, segments, demi-droites, cercles',
    keywords: ['Droite', 'Segment', 'Demi-droite', 'Cercle', 'Rayon', 'Diamètre'],
    physics: false,

    cours: {
      intro: 'En géométrie, tout repose sur quelques objets de base : le point (position sans dimension), le segment (longueur finie entre deux points), la droite (infinie dans les deux sens) et le cercle (ensemble de points à égale distance d\'un centre). <strong>Distinction importante :</strong> le segment $[AB]$ a une longueur mesurable ; la droite $(AB)$ est infinie et on la dessine avec des flèches aux extrémités. Le cercle de centre $O$ et de rayon $r$ contient tous les points $M$ tels que $OM = r$ — aucun de plus, aucun de moins. Ces objets apparaissent partout en physique : trajectoires circulaires, faisceaux lumineux (modélisés par des droites), sections transversales. Bien manier règle et compas pour les construire est la base de toute démonstration géométrique.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier le type d\'objet : un point est noté par une lettre majuscule ($A$, $B$…), une droite par deux points ou une lettre minuscule ($d$).',
          'Distinguer : droite $(AB)$ (infinie dans les deux sens), demi-droite $[AB)$ (infinie dans un sens), et segment $[AB]$ (longueur finie).',
          'Pour un cercle : identifier le centre $O$ et le rayon $r$. Le diamètre est $d = 2r$.',
          'Construire avec la règle (segments, droites) ou le compas (cercles, reports de longueur).'
        ]
      },
      formulas: [
        '$(AB)$ = droite passant par $A$ et $B$ (infinie)',
        '$[AB]$ = segment d\'extrémités $A$ et $B$',
        'Cercle de centre $O$ et rayon $r$ : $OM = r$ pour tout point $M$ du cercle',
        'Diamètre : $d = 2r$'
      ],
      piege: 'Piège : confondre segment et droite. Un segment $[AB]$ a une longueur mesurable ; une droite $(AB)$ est infinie. Sur une figure, une droite se dessine toujours avec des flèches aux deux extrémités.'
    },

    quiz: [
      {
        q: 'Un cercle a un rayon de $5$ cm. Quel est son diamètre ?',
        options: ['$5$ cm', '$10$ cm', '$15$ cm', '$25$ cm'],
        answer: 1,
        correction: 'Le diamètre est le double du rayon : $d = 2 \\times r = 2 \\times 5 = 10$ cm.'
      },
      {
        q: 'Quelle figure est infinie dans les deux sens ?',
        options: ['Un segment', 'Une demi-droite', 'Une droite', 'Un arc de cercle'],
        answer: 2,
        correction: 'Une droite $(AB)$ est infinie dans les deux sens. Une demi-droite est infinie dans un seul sens, et un segment possède deux extrémités.'
      },
      {
        q: 'Un point $P$ est à $3{,}5$ cm du centre $O$ d\'un cercle de rayon $3$ cm. Où se trouve $P$ ?',
        options: [
          'Sur le cercle, car $3{,}5 \\approx 3$.',
          'À l\'intérieur du cercle, car $3{,}5 < 3 \\times 2 = 6$.',
          'À l\'extérieur du cercle, car $3{,}5 > 3 = r$.',
          'Au centre, car $3{,}5 - 3 = 0{,}5$ est petit.'
        ],
        answer: 2,
        correction: 'Un point est sur le cercle si $OP = r$, à l\'intérieur si $OP < r$, et à l\'extérieur si $OP > r$. Ici $OP = 3{,}5$ cm $> r = 3$ cm, donc $P$ est à l\'extérieur. Pour être sur le cercle, il faudrait exactement $OP = 3$ cm.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const r = rand(2, 12);
        const d = 2 * r;
        return {
          statement: `Un cercle a un diamètre de $${d}$ cm. Quel est son rayon (en cm) ?`,
          answer: r,
          tolerance: 0,
          unit: 'cm',
          hint: `Le rayon est la moitié du diamètre : $r = \\dfrac{d}{2}$.`,
          solution: [
            `Formule : $r = \\dfrac{d}{2}$`,
            `$r = \\dfrac{${d}}{2} = ${r}$ cm`
          ]
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
        {
          statement: 'Un cercle a un diamètre de $18$ cm. Quel est son rayon en cm ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le rayon est la moitié du diamètre : $r = \\dfrac{d}{2} = \\dfrac{18}{2} = 9$ cm.'
        },
        {
          statement: 'Quelle notation désigne une droite passant par les points $A$ et $B$ ?',
          type: 'multiple-choice',
          options: ['$[AB]$', '$(AB)$', '$[AB)$', '$\\overrightarrow{AB}$'],
          answer: 1,
          points: 2,
          correction: '$(AB)$ désigne la droite (infinie dans les deux sens). $[AB]$ est le segment (longueur finie), $[AB)$ est la demi-droite d\'origine $A$ passant par $B$.'
        },
        {
          statement: 'Un point $M$ est situé à $5{,}2$ cm du centre $O$ d\'un cercle de rayon $5{,}2$ cm. Où se trouve $M$ ?',
          type: 'multiple-choice',
          options: [
            'À l\'intérieur du cercle',
            'À l\'extérieur du cercle',
            'Sur le cercle',
            'Au centre du cercle'
          ],
          answer: 2,
          points: 2,
          correction: 'Un point $M$ est sur le cercle de centre $O$ et de rayon $r$ si et seulement si $OM = r$. Ici $OM = 5{,}2$ cm $= r$, donc $M$ est exactement sur le cercle.'
        },
        {
          statement: 'Un cercle a un rayon de $7$ cm. Quel est son diamètre en cm ?',
          type: 'numeric',
          answer: 14,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$d = 2r = 2 \\times 7 = 14$ cm.'
        },
        {
          statement: 'Parmi les affirmations suivantes, laquelle est vraie ?',
          type: 'multiple-choice',
          options: [
            'Un segment a une longueur infinie.',
            'Une demi-droite a deux extrémités.',
            'Tous les points d\'un cercle sont à égale distance du centre.',
            'Le diamètre est la moitié du rayon.'
          ],
          answer: 2,
          points: 2,
          correction: 'Par définition, le cercle de centre $O$ et de rayon $r$ est l\'ensemble des points $M$ tels que $OM = r$. Tous les points du cercle sont donc à la même distance $r$ du centre.'
        }
      ]
    }
  },

    /* ─── Module 9 ─── */
  {
    id: '6e-symetrie-axiale',
    level: 1,
    icon: '🪞',
    title: 'Symétrie axiale',
    subtitle: 'Axe de symétrie, construction du symétrique',
    keywords: ['Symétrie', 'Axe', 'Réflexion', 'Figure symétrique', 'Milieu', 'Perpendiculaire'],
    physics: false,

    cours: {
      intro: 'Une figure est symétrique par rapport à un axe si, en la pliant le long de cet axe, les deux parties se superposent exactement. La symétrie axiale est une <strong>isométrie</strong> : elle conserve les distances, les angles et les aires — les figures sont identiques, juste retournées. <strong>Pourquoi est-ce utile ?</strong> En physique, la réflexion d\'un rayon lumineux sur un miroir obéit à une symétrie axiale : l\'axe est la normale au miroir. En ingénierie, de nombreuses structures sont symétriques pour équilibrer les contraintes. Pour construire le symétrique d\'un point $A$, on cherche $A\'$ tel que l\'axe soit la médiatrice de $[AA\']$ : l\'axe coupe $[AA\']$ en son milieu et perpendiculairement. L\'axe peut être dans n\'importe quelle direction — toujours tracer la perpendiculaire depuis le point.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Pour trouver le symétrique d\'un point $A$ par rapport à un axe $d$ : tracer la perpendiculaire à $d$ passant par $A$.',
          'Trouver le pied $H$ de cette perpendiculaire (point d\'intersection avec l\'axe).',
          'Reporter la même distance de l\'autre côté : $A\'$ tel que $H$ est le milieu de $[AA\']$.',
          'Pour une figure entière : construire le symétrique de chaque sommet, puis relier dans le même ordre.'
        ]
      },
      formulas: [
        '$H = $ milieu de $[AA\']$ (pied de la perpendiculaire)',
        '$AH = HA\'$',
        'La symétrie conserve : distances, angles, aires.',
        'L\'axe est la médiatrice de $[AA\']$'
      ],
      piege: 'Piège : l\'axe de symétrie n\'est pas forcément vertical ou horizontal. Toujours tracer la perpendiculaire depuis le point jusqu\'à l\'axe, puis reporter la même distance de l\'autre côté.'
    },

    quiz: [
      {
        q: 'Le point $A(5 ; 2)$ est réfléchi par rapport à la droite $x = 3$. Un élève trouve $A\'(-5 ; 2)$. Quelle est son erreur ?',
        options: [
          'Il a bien calculé : la réflexion par rapport à $x = 3$ change le signe de $x$.',
          'Il a confondu avec la réflexion par rapport à $x = 0$ : il faut $x_{A\'} = 2 \\times 3 - 5 = 1$, donc $A\'(1 ; 2)$.',
          'Il aurait dû changer le signe de $y$ : $A\'(5 ; -2)$.',
          'Il n\'y a pas d\'erreur car $-5$ est le symétrique de $5$.'
        ],
        answer: 1,
        correction: 'La réflexion par rapport à $x = k$ donne $x_{A\'} = 2k - x_A$. Ici $k = 3$ et $x_A = 5$ : $x_{A\'} = 2 \\times 3 - 5 = 6 - 5 = 1$. L\'ordonnée ne change pas : $y_{A\'} = 2$. Donc $A\'(1 ; 2)$. L\'élève a utilisé la formule pour $x = 0$ (axe des ordonnées), qui donne $-x_A$.'
      },
      {
        q: 'Le point $A(3 ; 1)$ est réfléchi par rapport à l\'axe des ordonnées ($x = 0$). Quelles sont les coordonnées de $A\'$ ?',
        options: ['$(3 ; -1)$', '$(-3 ; 1)$', '$(-3 ; -1)$', '$(1 ; 3)$'],
        answer: 1,
        correction: 'La réflexion par rapport à l\'axe des ordonnées change le signe de l\'abscisse et garde l\'ordonnée : $A\'(-3 ; 1)$.'
      },
      {
        q: 'Un triangle équilatéral possède combien d\'axes de symétrie ?',
        options: ['$1$', '$2$', '$3$', '$6$'],
        answer: 2,
        correction: 'Un triangle équilatéral a $3$ axes de symétrie : chacun passe par un sommet et le milieu du côté opposé.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ax = rand(2, 8);
        const pointX = rand(ax + 1, ax + 6);
        const symX = 2 * ax - pointX;
        return {
          statement: `Le point $A$ a pour abscisse $x_A = ${pointX}$. L'axe de symétrie est la droite verticale $x = ${ax}$. Quelle est l'abscisse du symétrique $A'$ ?`,
          answer: symX,
          tolerance: 0,
          unit: '',
          hint: `Le milieu de $[AA']$ est sur l'axe : $\\dfrac{x_A + x_{A'}}{2} = ${ax}$.`,
          solution: [
            `$\\dfrac{${pointX} + x_{A'}}{2} = ${ax}$`,
            `$${pointX} + x_{A'} = ${2 * ax}$`,
            `$x_{A'} = ${2 * ax} - ${pointX} = ${symX}$`
          ]
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
        '$C$ a pour abscisse $x_C = 3$, qui est exactement l\'axe $x = 3$. Un point sur l\'axe est son propre symétrique.'
      ],
      finalAnswer: 'Le logo complet a les sommets $A(0;0)$, $B(0;4)$, $C(3;2)$, $B\'(6;4)$, $A\'(6;0)$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie axiale',
      duration: '20 min',
      questions: [
        {
          statement: 'Le point $A(7 ; 3)$ est réfléchi par rapport à l\'axe des ordonnées ($x = 0$). Quelle est l\'abscisse de $A\'$ ?',
          type: 'numeric',
          answer: -7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La réflexion par rapport à $x = 0$ change le signe de l\'abscisse : $x_{A\'} = -x_A = -7$. L\'ordonnée reste inchangée : $A\'(-7 ; 3)$.'
        },
        {
          statement: 'Le point $B(2 ; 5)$ est réfléchi par rapport à la droite $x = 4$. Quelle est l\'abscisse de $B\'$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Formule : $x_{B\'} = 2k - x_B = 2 \\times 4 - 2 = 8 - 2 = 6$. L\'ordonnée ne change pas : $B\'(6 ; 5)$.'
        },
        {
          statement: 'Combien d\'axes de symétrie possède un carré ?',
          type: 'multiple-choice',
          options: ['$1$', '$2$', '$4$', '$8$'],
          answer: 2,
          points: 2,
          correction: 'Un carré possède $4$ axes de symétrie : les $2$ médianes (passant par les milieux des côtés opposés) et les $2$ diagonales.'
        },
        {
          statement: 'La symétrie axiale conserve-t-elle les distances ?',
          type: 'multiple-choice',
          options: [
            'Non, les distances sont doublées.',
            'Oui, c\'est une isométrie : distances, angles et aires sont conservés.',
            'Non, seuls les angles sont conservés.',
            'Oui, mais uniquement pour les segments parallèles à l\'axe.'
          ],
          answer: 1,
          points: 2,
          correction: 'La symétrie axiale est une isométrie : elle conserve les distances, les angles et les aires. La figure et son image sont identiques, juste « retournées » par rapport à l\'axe.'
        },
        {
          statement: 'Un point $P$ est situé sur l\'axe de symétrie $d$. Quel est son symétrique par rapport à $d$ ?',
          type: 'multiple-choice',
          options: [
            'Le point situé au double de la distance.',
            'Le point opposé par rapport au centre.',
            'Le point $P$ lui-même.',
            'Le point n\'a pas de symétrique.'
          ],
          answer: 2,
          points: 2,
          correction: 'Si un point est sur l\'axe de symétrie, son symétrique est lui-même. En effet, la distance entre le point et l\'axe est $0$, donc $P\' = P$.'
        }
      ]
    }
  },

    /* ─── Module 10 ─── */
  {
    id: '6e-perimetres-aires',
    level: 1,
    icon: '📏',
    title: 'Périmètres et aires',
    subtitle: 'Rectangle, triangle, disque',
    keywords: ['Périmètre', 'Aire', 'Rectangle', 'Triangle', 'Disque', 'Pi'],
    physics: false,

    cours: {
      intro: 'Le périmètre est la longueur du contour d\'une figure — on « fait le tour » et on mesure le chemin parcouru. L\'aire mesure la surface intérieure. <strong>Ces deux notions sont indépendantes :</strong> un rectangle de $1 $ cm $\\times 10$ cm et un carré de $\\approx 3{,}16$ cm de côté ont la même aire ($10$ cm²) mais des périmètres différents ($22$ cm vs $\\approx 12{,}6$ cm). En physique, l\'aire intervient dans les calculs de pression ($P = F/S$), de flux thermique, et de résistance électrique d\'un fil. Le périmètre intervient dans les calculs de longueur de câbles, de clôtures, de trajets. La constante $\\pi \\approx 3{,}14159\\ldots$ est le rapport constant entre la circonférence et le diamètre de n\'importe quel cercle — une propriété universelle découverte par les Anciens.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la figure et ses dimensions (longueur, largeur, côtés, rayon…).',
          'Appliquer la formule adaptée du périmètre ou de l\'aire.',
          'Vérifier les unités : périmètre en m ou cm, aire en m² ou cm².'
        ]
      },
      formulas: [
        'Rectangle : $\\mathcal{P} = 2(L + l)$ et $\\mathcal{A} = L \\times l$',
        'Triangle : $\\mathcal{P} = a + b + c$ et $\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2}$',
        'Disque : $\\mathcal{P} = 2\\pi r$ et $\\mathcal{A} = \\pi r^2$, avec $\\pi \\approx 3{,}14$'
      ],
      piege: 'Piège classique : confondre périmètre et aire. Le périmètre se mesure en cm (longueur), l\'aire en cm² (surface). De plus, dans $\\pi r^2$, c\'est $r$ qui est élevé au carré, pas $\\pi r$ entier !'
    },

    quiz: [
      {
        q: 'Un rectangle mesure $8$ cm de long et $5$ cm de large. Quelle est son aire ?',
        options: ['$26$ cm²', '$40$ cm²', '$13$ cm²', '$80$ cm²'],
        answer: 1,
        correction: 'Aire d\'un rectangle : $\\mathcal{A} = L \\times l = 8 \\times 5 = 40$ cm². (Le périmètre vaut $2(8+5) = 26$ cm — ne pas confondre !)'
      },
      {
        q: 'Un disque a un rayon de $7$ cm. Quelle est son aire (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$21{,}98$ cm²', '$43{,}96$ cm²', '$153{,}86$ cm²', '$153{,}86$ m²'],
        answer: 2,
        correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 7^2 = 3{,}14 \\times 49 = 153{,}86$ cm².'
      },
      {
        q: 'Un élève calcule l\'aire d\'un disque de rayon $4$ cm et trouve $\\mathcal{A} = \\pi \\times 4 = 12{,}56$ cm². Quelle erreur a-t-il commise ?',
        options: [
          'Il a oublié de multiplier par $2$ : $\\mathcal{A} = 2 \\pi r$.',
          'Il a confondu avec le périmètre : $2 \\pi r = 25{,}13$ cm. L\'aire est $\\pi r^2 = \\pi \\times 16 \\approx 50{,}27$ cm².',
          'Il a bien calculé : $\\pi \\times 4 = 12{,}56$ cm² est correct.',
          'Il aurait dû utiliser $r = 2$ car le rayon est la moitié du diamètre.'
        ],
        answer: 1,
        correction: 'Dans $\\mathcal{A} = \\pi r^2$, c\'est $r$ qui est élevé au carré, pas $\\pi r$ ! L\'élève a calculé $\\pi \\times r = \\pi \\times 4$, qui est en réalité la <em>moitié</em> du périmètre $2\\pi r$. La bonne aire : $\\mathcal{A} = \\pi \\times 4^2 = \\pi \\times 16 \\approx 3{,}14 \\times 16 = 50{,}27$ cm².'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const L = rand(4, 15);
        const l = rand(2, L - 1);
        const aire = L * l;
        return {
          statement: `Un rectangle mesure $${L}$ cm de longueur et $${l}$ cm de largeur. Calcule son aire en cm².`,
          answer: aire,
          tolerance: 0,
          unit: 'cm²',
          hint: `Aire d'un rectangle : $\\mathcal{A} = L \\times l = ${L} \\times ${l}$.`,
          solution: [
            `Formule : $\\mathcal{A} = L \\times l$`,
            `$\\mathcal{A} = ${L} \\times ${l} = ${aire}$ cm²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un jardinier veut gazonner un jardin rectangulaire de $12$ m × $8$ m. Une zone rectangulaire de $4$ m × $3$ m est réservée pour un bassin et ne sera pas gazonnée.',
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
        {
          statement: 'Un rectangle mesure $12$ cm de long et $7$ cm de large. Calcule son périmètre en cm.',
          type: 'numeric',
          answer: 38,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$\\mathcal{P} = 2(L + l) = 2(12 + 7) = 2 \\times 19 = 38$ cm.'
        },
        {
          statement: 'Un triangle a une base de $10$ cm et une hauteur de $6$ cm. Calcule son aire en cm².',
          type: 'numeric',
          answer: 30,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{\\text{base} \\times h}{2} = \\dfrac{10 \\times 6}{2} = \\dfrac{60}{2} = 30$ cm².'
        },
        {
          statement: 'Un disque a un rayon de $5$ cm. Quelle est son aire (avec $\\pi \\approx 3{,}14$) ?',
          type: 'numeric',
          answer: 78.5,
          tolerance: 0.1,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm².'
        },
        {
          statement: 'Quelle est la différence entre le périmètre et l\'aire ?',
          type: 'multiple-choice',
          options: [
            'Le périmètre mesure la surface, l\'aire mesure le contour.',
            'Le périmètre mesure le contour (en cm), l\'aire mesure la surface (en cm²).',
            'Le périmètre et l\'aire mesurent la même chose avec des formules différentes.',
            'Le périmètre s\'exprime en cm² et l\'aire en cm.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le périmètre est la longueur du contour (en cm ou m), l\'aire est la mesure de la surface intérieure (en cm² ou m²). Ce sont deux grandeurs de nature différente.'
        },
        {
          statement: 'Un cercle a un diamètre de $8$ cm. Calcule son périmètre (avec $\\pi \\approx 3{,}14$), arrondi au dixième.',
          type: 'numeric',
          answer: 25.12,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: 'Le rayon est $r = 8 \\div 2 = 4$ cm. $\\mathcal{P} = 2\\pi r = 2 \\times 3{,}14 \\times 4 = 25{,}12$ cm. On pouvait aussi utiliser $\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 8 = 25{,}12$ cm.'
        }
      ]
    }
  }

);