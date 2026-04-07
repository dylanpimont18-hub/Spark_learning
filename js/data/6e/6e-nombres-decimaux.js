/* =========================================================
   Spark Learning – data/6e/6e-nombres-decimaux.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
  });
