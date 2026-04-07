/* =========================================================
   Spark Learning – data/lycee-1re/1re-variables-aleatoires.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-variables-aleatoires',
    level: 2, subject: 'maths',
    icon: '🎰',
    title: 'Variables aléatoires et loi binomiale',
    subtitle: 'Espérance, variance, loi B(n,p)',
    keywords: ['Variable aléatoire', 'Espérance', 'Loi binomiale', 'Variance'],
    physics: false,
    cours: {
      intro: 'Une <strong>variable aléatoire</strong> est une fonction qui transforme les issues d\'une expérience aléatoire en nombres : c\'est le pont entre le hasard et les mathématiques.<br/><br/>La <strong>loi binomiale</strong> $\\mathcal{B}(n,p)$ répond à "combien de succès sur $n$ tentatives indépendantes ?" Ses deux conditions : les essais sont indépendants et chacun a la même probabilité de succès $p$.<br/><br/>L\'<strong>espérance</strong> $E(X) = np$ est le nombre moyen de succès attendu.<br/><br/>Erreur classique sur la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ : oublier les puissances sur $p$ et $(1-p)$. Un résultat supérieur à $1$ est impossible pour une probabilité — cela doit alerter immédiatement.',
      definitions: [
        { term: 'Variable aléatoire', def: 'Une <strong>variable aléatoire</strong> $X$ est une fonction qui associe un nombre réel à chaque issue d\'une expérience aléatoire. Exemple : le nombre de $6$ obtenus en lançant $5$ dés.' },
        { term: 'Espérance', def: 'L\'<strong>espérance</strong> $E(X)$ est la valeur moyenne attendue sur un grand nombre de répétitions. Pour $\\mathcal{B}(n,p)$ : $E(X) = np$.' },
        { term: 'Variance et écart-type', def: 'La <strong>variance</strong> $V(X)$ mesure la dispersion autour de l\'espérance. $V(X) = np(1-p)$ pour $\\mathcal{B}(n,p)$. L\'<strong>écart-type</strong> est $\\sigma = \\sqrt{V(X)}$.' },
        { term: 'Loi binomiale', def: 'La loi $\\mathcal{B}(n,p)$ modélise le nombre de succès dans $n$ épreuves <strong>indépendantes</strong>, chacune de probabilité de succès $p$. $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.' }
      ],
      method: {
        title: 'Calculer avec la loi binomiale',
        steps: [
          'Vérifier les conditions : expériences indépendantes, même probabilité $p$, $n$ répétitions.',
          '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.',
          'Espérance : $E(X)=np$.',
          'Variance : $V(X)=np(1-p)$, écart-type $\\sigma=\\sqrt{np(1-p)}$.'
        ]
      },
      example: {
        statement: 'On lance une pièce équilibrée $6$ fois. Soit $X$ le nombre de "Pile". Calculer $P(X = 4)$, $E(X)$ et $\\sigma(X)$.',
        steps: [
          '$X \\sim \\mathcal{B}(6\\,;\\,0{,}5)$. Coefficient binomial : $\\binom{6}{4} = \\dfrac{6!}{4! \\times 2!} = \\dfrac{6 \\times 5}{2} = 15$.',
          '$P(X = 4) = \\binom{6}{4} \\times (0{,}5)^4 \\times (0{,}5)^2 = 15 \\times \\dfrac{1}{64} = \\dfrac{15}{64} \\approx 0{,}234$.',
          '$E(X) = 6 \\times 0{,}5 = 3$. $V(X) = 6 \\times 0{,}5 \\times 0{,}5 = 1{,}5$. $\\sigma = \\sqrt{1{,}5} \\approx 1{,}22$.'
        ],
        answer: '$P(X = 4) \\approx 0{,}234$. En moyenne on obtient $3$ "Pile" sur $6$ lancers, avec un écart-type d\'environ $1{,}22$.'
      },
      formulas: [
        '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$',
        '$E(X) = np$',
        '$V(X) = np(1-p)$',
        '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'
      ],
      recap: [
        'Loi binomiale : $n$ épreuves <strong>indépendantes</strong>, même probabilité $p$. Si l\'une de ces conditions manque, ce n\'est pas binomial.',
        '$E(X) = np$ donne le nombre moyen de succès ; $\\sigma = \\sqrt{np(1-p)}$ mesure la dispersion.',
        'Le coefficient binomial $\\binom{n}{k}$ compte le nombre de façons de choisir $k$ succès parmi $n$ essais.',
        'Une probabilité est toujours entre $0$ et $1$ : si ton résultat dépasse $1$ ou est négatif, c\'est une erreur de calcul !'
      ],
      piege: 'La loi binomiale suppose des épreuves <strong>indépendantes</strong>. Si on tire sans remise, les tirages ne sont plus indépendants et la loi binomiale ne s\'applique plus exactement.<br/><br/>Autre piège : oublier les puissances dans la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$. Une probabilité doit toujours être comprise entre $0$ et $1$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{B}(4\\,;\\,0{,}5)$, un élève calcule $P(X=2) = \\binom{4}{2} \\times 0{,}5 = 6 \\times 0{,}5 = 3$. Quelle est son erreur ?', options: ['Il a oublié les puissances : $P(X=2) = \\binom{4}{2} \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\dfrac{1}{16} = \\dfrac{3}{8}$', 'Le coefficient binomial est faux : $\\binom{4}{2} \\neq 6$', 'Il aurait dû écrire $P(X=2) = (0{,}5)^2 = 0{,}25$ sans coefficient binomial', 'La loi binomiale ne s\'applique pas car $p = 0{,}5$'], answer: 0, correction: 'La formule est $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. L\'élève a oublié les <strong>puissances</strong> sur $p$ et $(1-p)$.<br/><br/>Avec $n=4, k=2, p=0{,}5$ : $P(X=2) = 6 \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{6}{16} = \\frac{3}{8} \\approx 0{,}375$.<br/><br/>Une probabilité ne peut <strong>jamais dépasser $1$</strong> — un résultat de $3$ aurait dû alerter l\'élève !' },
      { q: 'Pour $X\\sim\\mathcal{B}(5;0{,}5)$, $P(X=2)=$ ?', options: ['$\\frac{5}{16}$', '$\\frac{5}{32}$', '$\\frac{10}{32}$', '$\\frac{1}{32}$'], answer: 2, correction: 'On applique la formule binomiale : $P(X=2) = \\binom{5}{2}(0{,}5)^2(0{,}5)^3$.<br/><br/>$P(X=2) = 10 \\times \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16} \\approx 0{,}3125$.' },
      { q: 'La variance de $\\mathcal{B}(n;p)$ est maximale quand :', options: ['$p=0$', '$p=1$', '$p=0{,}5$', '$p=n$'], answer: 2, correction: 'La variance $V(X) = np(1-p)$ est maximale quand le produit $p(1-p)$ est maximal.<br/><br/>Ce produit atteint son maximum pour $p = 0{,}5$ (c\'est un résultat classique de l\'étude du trinôme $p - p^2$). La dispersion est maximale quand le succès est aussi probable que l\'échec.' },
      { q: 'Le coefficient binomial $\\binom{5}{2}$ vaut :', options: ['$20$', '$10$', '$25$', '$5$'], answer: 1, correction: 'On applique la formule du coefficient binomial : $\\binom{5}{2} = \\dfrac{5!}{2! \\times 3!} = \\dfrac{5 \\times 4}{2 \\times 1} = 10$.<br/><br/>Cela représente le nombre de façons de choisir $2$ éléments parmi $5$, sans tenir compte de l\'ordre.' },
      { q: 'Pour $X \\sim \\mathcal{B}(10\\,;\\,0{,}3)$, la probabilité $P(X = 0)$ vaut :', options: ['$0$', '$(0{,}7)^{10} \\approx 0{,}028$', '$(0{,}3)^{10}$', '$1 - 0{,}3 = 0{,}7$'], answer: 1, correction: 'Pour $k = 0$, la formule se simplifie : $P(X = 0) = \\binom{10}{0} \\times (0{,}3)^0 \\times (0{,}7)^{10} = 1 \\times 1 \\times (0{,}7)^{10}$.<br/><br/>$(0{,}7)^{10} \\approx 0{,}028$. Il y a environ $2{,}8\\%$ de chances de n\'avoir <strong>aucun succès</strong> en $10$ essais.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(5, 10), p = pick([0.2, 0.25, 0.5]);
        const k = rand(1, 3);
        // Calcul de C(n,k)
        let binom = 1;
        for (let i = 0; i < k; i++) binom = binom * (n - i) / (i + 1);
        binom = Math.round(binom);
        const proba = parseFloat((binom * Math.pow(p, k) * Math.pow(1 - p, n - k)).toFixed(4));
        const esperance = n * p;
        const variance = parseFloat((n * p * (1 - p)).toFixed(2));
        const ctx = pick([
          { intro: `Un archer touche la cible avec une probabilité de $${p}$ à chaque tir. Il effectue $${n}$ tirs indépendants.`, varName: 'le nombre de tirs réussis' },
          { intro: `Un vaccin a une efficacité de $${p * 100}\\%$. On vaccine $${n}$ patients.`, varName: 'le nombre de patients protégés' },
          { intro: `Une machine produit $${p * 100}\\%$ de pièces défectueuses. On prélève $${n}$ pièces.`, varName: 'le nombre de pièces défectueuses' },
          { intro: `Un joueur de basket a $${p * 100}\\%$ de réussite aux lancers francs. Il tire $${n}$ lancers.`, varName: 'le nombre de lancers réussis' }
        ]);
        return {
          statement: `${ctx.intro} Soit $X$ ${ctx.varName}.<br/><br/>1) Identifier la loi de $X$.<br/>2) Calculer $E(X)$ et $V(X)$.<br/>3) Calculer $P(X = ${k})$.<br/><br/>Donner $P(X = ${k})$ (arrondir à $0{,}001$).`,
          answer: proba,
          tolerance: 0.005,
          unit: '',
          hint: `$X \\sim \\mathcal{B}(${n}\\,;\\,${p})$. $P(X = ${k}) = \\binom{${n}}{${k}} \\times ${p}^{${k}} \\times ${1-p}^{${n-k}}$.`,
          solution: [
            `$X \\sim \\mathcal{B}(${n}\\,;\\,${p})$. $E(X) = ${n} \\times ${p} = ${esperance}$. $V(X) = ${n} \\times ${p} \\times ${1-p} = ${variance}$.`,
            `$\\binom{${n}}{${k}} = ${binom}$.`,
            `$P(X = ${k}) = ${binom} \\times ${p}^{${k}} \\times ${1-p}^{${n-k}} \\approx ${proba}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un QCM comporte $10$ questions, chacune avec $4$ propositions. Un élève répond au hasard à toutes les questions.',
      tasks: [
        'Quelle loi suit le nombre de bonnes réponses $X$ ? Préciser les paramètres.',
        'Calculer l\'espérance et l\'écart-type.',
        'Calculer la probabilité d\'avoir exactement $2$ bonnes réponses.'
      ],
      solutions: [
        '$X\\sim\\mathcal{B}(10;0{,}25)$ : $10$ questions indépendantes, $p=1/4$.',
        '$E(X)=10\\times0{,}25=2{,}5$ ; $V(X)=10\\times0{,}25\\times0{,}75=1{,}875$ ; $\\sigma\\approx1{,}37$.',
        '$P(X=2)=\\binom{10}{2}(0{,}25)^2(0{,}75)^8=45\\times0{,}0625\\times0{,}1001\\approx0{,}282$.'
      ],
      finalAnswer: '$X\\sim\\mathcal{B}(10;0{,}25)$, $E(X)=2{,}5$, $P(X=2)\\approx28{,}2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Variables aléatoires et loi binomiale',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $X$ une variable aléatoire suivant la loi $\\mathcal{B}(8\\,;\\,0{,}3)$. Calculer l\'espérance $E(X)$.',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour une loi binomiale, l\'espérance est $E(X) = np$.<br/><br/>$E(X) = 8 \\times 0{,}3 = 2{,}4$. En moyenne, on attend $2{,}4$ succès sur $8$ essais.'
        },
        {
          statement: 'Calculer la variance de $X \\sim \\mathcal{B}(8\\,;\\,0{,}3)$.',
          type: 'numeric',
          answer: 1.68,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La variance d\'une loi binomiale est $V(X) = np(1-p)$.<br/><br/>$V(X) = 8 \\times 0{,}3 \\times 0{,}7 = 1{,}68$. L\'écart-type est $\\sigma = \\sqrt{1{,}68} \\approx 1{,}30$.'
        },
        {
          statement: 'On lance un dé équilibré $5$ fois. Soit $X$ le nombre de $6$ obtenus. Quelle loi suit $X$ ?',
          type: 'multiple-choice',
          options: ['$\\mathcal{B}(5\\,;\\,1/6)$', '$\\mathcal{B}(6\\,;\\,1/5)$', '$\\mathcal{B}(5\\,;\\,1/2)$', '$\\mathcal{B}(6\\,;\\,5)$'],
          answer: 0,
          points: 2,
          correction: 'On identifie les paramètres : $n = 5$ lancers indépendants, chacun avec une probabilité de succès $p = 1/6$.<br/><br/>Donc $X \\sim \\mathcal{B}(5\\,;\\,1/6)$. Les conditions de la loi binomiale sont bien réunies : épreuves indépendantes et même probabilité.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{B}(3\\,;\\,0{,}4)$, calculer $P(X = 2)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.288,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On applique la formule binomiale : $P(X=2) = \\binom{3}{2} (0{,}4)^2 (0{,}6)^1$.<br/><br/>$P(X=2) = 3 \\times 0{,}16 \\times 0{,}6 = 0{,}288$. Il y a environ $28{,}8\\%$ de chances d\'obtenir exactement $2$ succès.'
        },
        {
          statement: 'Un coefficient binomial vérifie $\\binom{7}{3} =$ :',
          type: 'multiple-choice',
          options: ['$21$', '$35$', '$42$', '$210$'],
          answer: 1,
          points: 2,
          correction: 'On utilise la formule : $\\binom{7}{3} = \\dfrac{7!}{3! \\times 4!} = \\dfrac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = \\dfrac{210}{6} = 35$.<br/><br/>Astuce : on écrit $3$ facteurs au numérateur (en partant de $7$) et on divise par $3!$.'
        }
      ]
    }
  });
