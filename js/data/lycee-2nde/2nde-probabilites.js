/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-probabilites.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-probabilites',
    level: 2, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités',
    subtitle: 'Modèle, loi, événements',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Équiprobabilité', 'Complémentaire'],
    physics: false,
    cours: {
      intro: 'Une <strong>expérience aléatoire</strong> est une expérience dont le résultat ne peut pas être prédit à l\'avance — contrairement à une expérience déterministe. L\'<strong>univers $\\Omega$</strong> est l\'ensemble de toutes les issues possibles.<br/><br/>La <strong>probabilité $P(A)$</strong> est un réel de $[0;1]$ qui mesure la fréquence relative de l\'événement $A$ sur un grand nombre de répétitions.<br/><br/>En cas d\'<strong>équiprobabilité</strong> (toutes les issues ont la même probabilité), $P(A) = |A| / |\\Omega|$. L\'équiprobabilité n\'est pas automatique : un dé truqué ou une urne déséquilibrée ne la vérifient pas.<br/><br/>Les lancers successifs sont des <strong>épreuves indépendantes</strong> : la pièce n\'a pas de mémoire, et les résultats passés n\'influencent pas les futurs.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont le résultat ne peut pas être prédit à l\'avance (ex. : lancer un dé, tirer une carte).' },
        { term: 'Univers $\\Omega$', def: 'Ensemble de toutes les issues possibles d\'une expérience aléatoire. Ex. : dé à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de $\\Omega$. Ex. : « obtenir un nombre pair » $= \\{2;4;6\\}$.' },
        { term: 'Événement contraire', def: '$\\bar{A}$ contient toutes les issues de $\\Omega$ qui ne sont pas dans $A$. On a $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Calculer une probabilité',
        steps: [
          '<strong>Définir l\'univers $\\Omega$</strong> et vérifier si les issues sont équiprobables. <strong>Exemple :</strong> Dé équilibré à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$, équiprobabilité.',
          '<strong>Compter les issues favorables</strong> à $A$. <strong>Exemple :</strong> $A$ = « obtenir un multiple de $3$ » → $A = \\{3;6\\}$, soit $2$ issues.',
          '<strong>Appliquer la formule</strong> $P(A) = \\frac{\\text{nombre d\'issues favorables}}{\\text{nombre total d\'issues}}$ si équiprobabilité. <strong>Exemple :</strong> $P(A) = \\frac{2}{6} = \\frac{1}{3}$.',
          '<strong>Événement contraire</strong> : utiliser $P(\\bar{A}) = 1 - P(A)$. <strong>Exemple :</strong> $P(\\bar{A}) = 1 - \\frac{1}{3} = \\frac{2}{3}$ (ne pas obtenir un multiple de $3$).'
        ]
      },
      example: {
        statement: 'Dans une classe de $30$ élèves, $12$ pratiquent le basketball ($B$), $10$ font de la natation ($N$), et $4$ font les deux. On choisit un élève au hasard. Calculer $P(B \\cup N)$.',
        steps: [
          'On identifie : $P(B) = \\frac{12}{30}$, $P(N) = \\frac{10}{30}$, $P(B \\cap N) = \\frac{4}{30}$.',
          'Formule d\'addition : $P(B \\cup N) = P(B) + P(N) - P(B \\cap N) = \\frac{12}{30} + \\frac{10}{30} - \\frac{4}{30} = \\frac{18}{30} = 0{,}6$.',
          'Vérification : $18$ élèves font au moins un des deux sports (parmi $30$).'
        ],
        answer: '$P(B \\cup N) = 0{,}6$ : la probabilité qu\'un élève pratique au moins l\'un des deux sports est $60\\%$.'
      },
      formulas: [
        '$P(A) = \\dfrac{|A|}{|\\Omega|}$ (cas équiprobable)',
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        '$0 \\le P(A) \\le 1$'
      ],
      recap: [
        'Probabilité = nombre entre $0$ et $1$ ; la somme des probabilités de tous les événements vaut $1$.',
        'En cas d\'équiprobabilité : $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$, souvent plus rapide que de compter directement.',
        'Formule d\'addition : toujours soustraire $P(A \\cap B)$ pour éviter de compter deux fois l\'intersection.'
      ],
      piege: 'Ne pas confondre $P(A\\cup B)$ et $P(A)+P(B)$ : la formule d\'addition doit soustraire $P(A\\cap B)$ pour ne pas compter deux fois l\'intersection.'
    },
    quiz: [
      { q: 'On lance une pièce équilibrée $10$ fois et on obtient $10$ fois « pile ». Quelle est la probabilité d\'obtenir « face » au $11^e$ lancer ?', options: ['$\\frac{1}{2}$ — chaque lancer est indépendant du passé', 'Plus grande que $\\frac{1}{2}$ — la « face » est en retard', 'Plus petite que $\\frac{1}{2}$ — la pièce semble biaisée', '$\\frac{1}{11}$ — il y a déjà eu $10$ piles'], answer: 0, correction: 'Les lancers sont des épreuves indépendantes : la pièce n\'a pas de mémoire. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer, quel que soit le passé. Croire que la « face est en retard » est le sophisme du joueur (gambler\'s fallacy).' },
      { q: 'Si $P(A)=0{,}3$, alors $P(\\bar{A})=$ ?', options: ['$0{,}3$', '$0{,}7$', '$1{,}3$', '$-0{,}3$'], answer: 1, correction: '$P(\\bar{A})=1-0{,}3=0{,}7$.' },
      { q: 'Si $A$ et $B$ sont incompatibles, $P(A)=0{,}2$, $P(B)=0{,}5$. Alors $P(A\\cup B)=$ ?', options: ['$0{,}1$', '$0{,}3$', '$0{,}7$', '$1{,}0$'], answer: 2, correction: 'Incompatibles : $P(A\\cap B)=0$. Donc $P(A\\cup B)=0{,}2+0{,}5=0{,}7$.' },
      { q: '$P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. Calculer $P(A \\cup B)$ :', options: ['$0{,}8$', '$1{,}1$', '$0{,}3$', '$0{,}5$'], answer: 0, correction: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8$. Sans soustraire $P(A \\cap B)$, on obtiendrait $1{,}1 > 1$, ce qui est impossible pour une probabilité. La soustraction de l\'intersection corrige le double comptage.' },
      { q: 'On lance un dé à $6$ faces. Calculer la probabilité de NE PAS obtenir un $6$. Quelle méthode est la plus efficace ?', options: ['$P(\\bar{A}) = 1 - P(A) = 1 - \\frac{1}{6} = \\frac{5}{6}$ — le complémentaire est plus rapide que de compter les $5$ issues favorables', '$P = \\frac{5}{6}$ en comptant $\\{1;2;3;4;5\\}$, c\'est la seule méthode', '$P = \\frac{1}{6}$ car il y a $1$ chance sur $6$', '$P = \\frac{6}{5}$'], answer: 0, correction: 'Les deux méthodes donnent le même résultat, mais le passage par le complémentaire ($1 - P(A)$) est souvent plus rapide, surtout quand l\'événement contraire est plus simple à dénombrer que l\'événement lui-même. Ici $P(A) = P(\\{6\\}) = 1/6$, donc $P(\\bar{A}) = 5/6$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Dans une classe de', total: rand(25, 35), traitA: 'pratiquent un sport', traitB: 'jouent d\'un instrument', both: 'les deux' },
          { intro: 'Dans un club de', total: rand(40, 60), traitA: 'participent au cours de peinture', traitB: 'participent au cours de musique', both: 'les deux activités' },
          { intro: 'Parmi les', total: rand(30, 50), traitA: 'suivent l\'option maths', traitB: 'suivent l\'option SVT', both: 'les deux options' }
        ];
        const ctx = pick(contexts);
        const n = ctx.total;
        const nA = rand(Math.floor(n * 0.3), Math.floor(n * 0.6));
        const nB = rand(Math.floor(n * 0.2), Math.floor(n * 0.5));
        const maxInter = Math.min(nA, nB);
        const nAB = rand(Math.max(1, nA + nB - n), Math.floor(maxInter * 0.6));
        const nAuB = nA + nB - nAB;
        const pAuB = parseFloat((nAuB / n).toFixed(4));
        const pNi = parseFloat((1 - pAuB).toFixed(4));
        return {
          statement: `${ctx.intro} $${n}$ élèves, $${nA}$ ${ctx.traitA} ($A$), $${nB}$ ${ctx.traitB} ($B$) et $${nAB}$ font ${ctx.both} ($A \\cap B$).<br/><br/><strong>1.</strong> Calculer $P(A \\cup B)$ (probabilité qu'un élève choisi au hasard fasse au moins l'une des deux activités).<br/><strong>2.</strong> En déduire $P(\\overline{A \\cup B})$ (probabilité de ne faire ni l'une ni l'autre).<br/><br/>Donne $P(\\overline{A \\cup B})$ en décimal (arrondi à $0{,}01$).`,
          answer: pNi,
          tolerance: 0.02,
          unit: '',
          hint: `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{${nA}}{${n}} + \\frac{${nB}}{${n}} - \\frac{${nAB}}{${n}}$. Puis $P(\\overline{A \\cup B}) = 1 - P(A \\cup B)$.`,
          solution: [
            `$P(A \\cup B) = \\frac{${nA} + ${nB} - ${nAB}}{${n}} = \\frac{${nAuB}}{${n}} \\approx ${pAuB}$`,
            `$P(\\overline{A \\cup B}) = 1 - ${pAuB} = ${pNi}$`,
            `Il y a environ $${(pNi * 100).toFixed(1)}\\%$ de chances que l'élève ne fasse aucune des deux activités.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un lycée a $200$ élèves : $80$ pratiquent le sport, $60$ jouent d\'un instrument, $30$ font les deux.',
      tasks: [
        'Calculer la probabilité qu\'un élève choisi au hasard pratique le sport.',
        'Calculer $P(S\\cup M)$ où $S$ = sport et $M$ = musique.',
        'Calculer la probabilité de ne pratiquer ni l\'un ni l\'autre.'
      ],
      solutions: [
        '$P(S)=\\frac{80}{200}=0{,}4$.',
        '$P(S\\cup M)=\\frac{80+60-30}{200}=\\frac{110}{200}=0{,}55$.',
        '$P(\\overline{S\\cup M})=1-0{,}55=0{,}45$.'
      ],
      finalAnswer: '$P(S\\cup M)=0{,}55$ ; probabilité de ne faire ni l\'un ni l\'autre : $0{,}45$.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Calculer la probabilité d\'obtenir un nombre pair. Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Les issues paires sont $\\{2 ; 4 ; 6\\}$, soit $3$ issues sur $6$. $P = \\dfrac{3}{6} = 0{,}5$.'
        },
        {
          statement: 'Si $P(A) = 0{,}35$, combien vaut $P(\\bar{A})$ ?',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$.'
        },
        {
          statement: 'On lance une pièce équilibrée $20$ fois et on obtient $20$ fois « pile ». La probabilité d\'obtenir « face » au $21^e$ lancer est :',
          type: 'multiple-choice',
          options: ['Supérieure à $\\frac{1}{2}$ car « face » est en retard', '$\\frac{1}{2}$ car les lancers sont indépendants', 'Inférieure à $\\frac{1}{2}$ car la pièce semble biaisée', '$\\frac{1}{21}$'],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est une épreuve indépendante : le résultat passé n\'influence pas le suivant. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer. Croire que « face est en retard » est le sophisme du joueur.'
        },
        {
          statement: 'Dans une classe de $30$ élèves, $18$ pratiquent un sport et $12$ jouent d\'un instrument. $6$ font les deux. Calculer $P(S \\cup M)$ (sport ou musique). Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(S \\cup M) = P(S) + P(M) - P(S \\cap M) = \\dfrac{18}{30} + \\dfrac{12}{30} - \\dfrac{6}{30} = \\dfrac{24}{30} = 0{,}8$.'
        },
        {
          statement: 'Deux événements $A$ et $B$ sont incompatibles. Cela signifie que :',
          type: 'multiple-choice',
          options: ['$P(A \\cap B) = 1$', '$P(A \\cup B) = 0$', '$P(A \\cap B) = 0$', '$P(A) + P(B) = 1$'],
          answer: 2,
          points: 2,
          correction: 'Deux événements sont incompatibles (ou mutuellement exclusifs) s\'ils ne peuvent pas se produire en même temps : $A \\cap B = \\varnothing$, donc $P(A \\cap B) = 0$. Dans ce cas, $P(A \\cup B) = P(A) + P(B)$.'
        }
      ]
    }
  });
