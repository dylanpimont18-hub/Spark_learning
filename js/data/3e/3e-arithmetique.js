/* =========================================================
   Spark Learning – data/3e/3e-arithmetique.js
   Module : Arithmétique (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-arithmetique',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Arithmétique',
    subtitle: 'PGCD, nombres premiers, décomposition',
    keywords: ['PGCD', 'PPCM', 'Nombre premier', 'Décomposition', 'Divisibilité'],
    physics: false,
    cours: {
      intro: 'Tout entier $n \\geq 2$ admet une décomposition en <strong>facteurs premiers</strong> unique (à l\'ordre près) — c\'est le <strong>théorème fondamental de l\'arithmétique</strong>. Cette décomposition est le « code-barres » du nombre : elle révèle instantanément tous ses diviseurs, son PGCD et son PPCM.<br/><br/>' +
        'Le <strong>PGCD</strong> (Plus Grand Commun Diviseur) donne la taille maximale d\'une part équitable. Le <strong>PPCM</strong> (Plus Petit Commun Multiple) indique le premier moment où deux cycles se synchronisent.<br/><br/>' +
        'L\'<strong>algorithme d\'Euclide</strong> calcule le PGCD en quelques divisions successives, sans décomposer en facteurs premiers — très pratique pour les grands nombres.<br/><br/>' +
        '<strong>Relation clé</strong> : $a \\times b = \\text{PGCD}(a,b) \\times \\text{PPCM}(a,b)$ — connaître l\'un permet de calculer l\'autre.',
      definitions: [
        { term: 'Nombre premier', def: 'Entier $n \\geq 2$ qui n\'a que <strong>deux diviseurs distincts</strong> : $1$ et lui-même.<br/><br/>Exemples : $2, 3, 5, 7, 11, 13\\ldots$ Le nombre $1$ n\'est <strong>pas</strong> premier.' },
        { term: 'PGCD', def: '<strong>Plus Grand Commun Diviseur</strong> de deux entiers $a$ et $b$ : c\'est le plus grand entier qui divise à la fois $a$ et $b$.<br/><br/>Exemple : $\\text{PGCD}(12, 18) = 6$.' },
        { term: 'PPCM', def: '<strong>Plus Petit Commun Multiple</strong> de deux entiers $a$ et $b$ : c\'est le plus petit entier strictement positif qui est multiple de $a$ et de $b$ simultanément.<br/><br/>Exemple : $\\text{PPCM}(4, 6) = 12$.' },
        { term: 'Algorithme d\'Euclide', def: 'Méthode de calcul du PGCD par <strong>divisions euclidiennes successives</strong> : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$, jusqu\'à obtenir un reste nul. Le dernier diviseur non nul est le PGCD.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Décomposer</strong> chaque nombre en produit de facteurs premiers (diviser successivement par $2$, $3$, $5$, $7$, $11\\ldots$ jusqu\'à $1$).',
          '<strong>Étape 2 : PGCD</strong> — prendre les facteurs premiers <strong>communs</strong> avec le <strong>plus petit exposant</strong>.',
          '<strong>Étape 3 : PPCM</strong> — prendre <strong>tous</strong> les facteurs premiers (communs ou non) avec le <strong>plus grand exposant</strong>.'
        ]
      },
      example: {
        statement: 'Trouver le PGCD de $84$ et $56$ par l\'algorithme d\'Euclide.',
        steps: [
          '<strong>1ère division</strong> : $84 = 56 \\times 1 + 28$. Le reste est $28 \\neq 0$, on continue avec $\\text{PGCD}(56, 28)$.',
          '<strong>2e division</strong> : $56 = 28 \\times 2 + 0$. Le reste est $0$, on s\'arrête.',
          '<strong>Conclusion</strong> : le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$. Vérification : $84 = 28 \\times 3$ et $56 = 28 \\times 2$ ✓'
        ],
        answer: '$\\text{PGCD}(84, 56) = 28$.'
      },
      formulas: [
        'PGCD × PPCM $= a \\times b$',
        'Fraction irréductible : diviser numérateur et dénominateur par le PGCD',
        'Algorithme d\'Euclide : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Premiers nombres premiers</th><th style="border:1px solid var(--border);padding:8px">Décomposition — méthode</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37$</td><td style="border:1px solid var(--border);padding:8px">Diviser par $2$, puis $3$, puis $5$, puis $7\\ldots$ jusqu\'à obtenir $1$</td></tr><tr><th style="border:1px solid var(--border);padding:8px">Exemple : $180$</th><th style="border:1px solid var(--border);padding:8px">Étapes</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$180 = 2^2 \\times 3^2 \\times 5$</td><td style="border:1px solid var(--border);padding:8px">$180 \\div 2 = 90$, $90 \\div 2 = 45$, $45 \\div 3 = 15$, $15 \\div 3 = 5$, $5 \\div 5 = 1$</td></tr></table>',
      recap: [
        '<strong>Théorème fondamental</strong> : tout entier $\\geq 2$ se décompose de manière <strong>unique</strong> en produit de nombres premiers.',
        '<strong>Relation PGCD-PPCM</strong> : $\\text{PGCD}(a, b) \\times \\text{PPCM}(a, b) = a \\times b$. Connaître l\'un permet de calculer l\'autre.',
        '<strong>$1$ n\'est pas premier</strong> : un nombre premier a exactement deux diviseurs distincts. $1$ n\'en a qu\'un.',
        '<strong>Algorithme d\'Euclide</strong> : méthode rapide pour calculer le PGCD sans décomposer en facteurs premiers — idéal pour les grands nombres.'
      ],
      piege: 'Piège : $1$ n\'est PAS un nombre premier (il faut exactement deux diviseurs distincts). Le plus petit nombre premier est $2$. Et $2$ est le seul nombre premier pair.'
    },
    quiz: [
      {
        q: 'Quel est le PGCD de $36$ et $48$ ?',
        options: ['$6$', '$12$', '$9$', '$144$'],
        answer: 1,
        correction: '$36 = 2^2 \\times 3^2$ et $48 = 2^4 \\times 3$. PGCD $= 2^2 \\times 3 = 12$.'
      },
      {
        q: 'Un élève dit : « $1$ est un nombre premier car il n\'est divisible que par lui-même ». Où est l\'erreur ?',
        options: [
          'Un nombre premier doit avoir exactement DEUX diviseurs distincts ; $1$ n\'en a qu\'un seul ($1$ lui-même)',
          'L\'élève a raison, $1$ est bien premier',
          '$1$ n\'est pas premier car il est inférieur à $2$, mais pas pour la raison citée',
          '$1$ n\'est pas premier car il est pair'
        ],
        answer: 0,
        correction: 'Un nombre premier est un entier $\\geq 2$ ayant exactement deux diviseurs distincts : $1$ et lui-même. Le nombre $1$ n\'a qu\'un seul diviseur ($1 = 1 \\times 1$), donc il ne satisfait pas la définition. Exclure $1$ est crucial pour garantir l\'unicité de la décomposition en facteurs premiers.'
      },
      {
        q: 'Parmi ces nombres, lequel est premier ?',
        options: ['$1$', '$27$', '$51$', '$37$'],
        answer: 3,
        correction: '$1$ n\'est pas premier. $27 = 3^3$, $51 = 3 \\times 17$. $37$ n\'est divisible que par $1$ et $37$ : il est premier.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pairs = [[12,18],[15,25],[24,36],[18,30],[20,28],[12,8]];
        const [a,b] = pick(pairs);
        function gcd(x,y){return y===0?x:gcd(y,x%y);}
        return {
          statement: `Calcule le PGCD de $${a}$ et $${b}$.`,
          answer: gcd(a,b),
          tolerance: 0,
          unit: '',
          hint: `Utilise l'algorithme d'Euclide : $\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a % b})$…`,
          solution: [
            `Algorithme d'Euclide : $${a} = ${b} \\times ${Math.floor(a/b)} + ${a%b}$.`,
            `$\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a%b}) = ${gcd(a,b)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un maître-fromager coupe des meules de fromage en parts de même taille. Il a une meule de $360$ g et une autre de $252$ g.',
      tasks: [
        'Trouver le PGCD de $360$ et $252$.',
        'Quelle est la masse maximale de chaque part pour que les deux meules donnent un nombre entier de parts ?',
        'Combien de parts obtient-on de chaque meule ?'
      ],
      solutions: [
        'PGCD$(360, 252)$ : $360 = 252 \\times 1 + 108$ ; $252 = 108 \\times 2 + 36$ ; $108 = 36 \\times 3 + 0$. PGCD $= 36$.',
        'Chaque part pèse $36$ g.',
        '$360 \\div 36 = 10$ parts et $252 \\div 36 = 7$ parts.'
      ],
      finalAnswer: 'Le PGCD est $36$ g : on obtient $10$ parts de la première meule et $7$ de la seconde.'
    },

    evaluation: {
      title: 'Évaluation — Arithmétique',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le PGCD de $84$ et $56$ en utilisant l\'algorithme d\'Euclide.',
          type: 'numeric',
          answer: 28,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$84 = 56 \\times 1 + 28$. $56 = 28 \\times 2 + 0$. Le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$.'
        },
        {
          statement: 'La décomposition en facteurs premiers de $180$ est :',
          type: 'multiple-choice',
          options: ['$2^2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 5^2$', '$2^3 \\times 3 \\times 5$', '$4 \\times 9 \\times 5$'],
          answer: 0,
          points: 2,
          correction: '$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$. La réponse d) n\'est pas valide car $4$ et $9$ ne sont pas des nombres premiers.'
        },
        {
          statement: 'Rendre la fraction $\\dfrac{48}{72}$ irréductible. Le dénominateur de la fraction irréductible est :',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\text{PGCD}(48, 72) = 24$. $\\dfrac{48}{72} = \\dfrac{48 \\div 24}{72 \\div 24} = \\dfrac{2}{3}$. Le dénominateur est $3$.'
        },
        {
          statement: 'Quel est le PPCM de $12$ et $18$ ?',
          type: 'numeric',
          answer: 36,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. PPCM $= 2^2 \\times 3^2 = 4 \\times 9 = 36$. Vérification : $\\text{PGCD} \\times \\text{PPCM} = 6 \\times 36 = 216 = 12 \\times 18$ ✓.'
        },
        {
          statement: 'Parmi ces nombres, lequel est premier ?',
          type: 'multiple-choice',
          options: ['$91$', '$87$', '$83$', '$93$'],
          answer: 2,
          points: 2,
          correction: '$91 = 7 \\times 13$, $87 = 3 \\times 29$, $93 = 3 \\times 31$. $83$ n\'est divisible par aucun nombre premier $\\leq \\sqrt{83} \\approx 9{,}1$ (on teste $2, 3, 5, 7$) : $83$ est premier.'
        }
      ]
    }
  }
);
