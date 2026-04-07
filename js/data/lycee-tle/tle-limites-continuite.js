/* =========================================================
   Spark Learning – data/lycee-tle/tle-limites-continuite.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-limites-continuite',
    level: 2, subject: 'maths',
    icon: '♾️',
    title: 'Limites de fonctions et continuité',
    subtitle: 'Limites en l\'infini, en un point, continuité',
    keywords: ['Limite', 'Continuité', 'Infini', 'Indétermination'],
    physics: true,
    cours: {
      intro: 'La <strong>limite</strong> de $f$ en $a$ décrit le comportement de $f$ quand $x$ se rapproche de $a$ — sans que $f(a)$ soit nécessairement définie. Exemple : $f(x) = \\frac{x^2-4}{x-2}$ n\'est pas définie en $x=2$, mais $\\lim_{x\\to2}f(x) = 4$.<br/><br/>Les <strong>formes indéterminées</strong> ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) ne sont pas des valeurs — ce sont des signaux d\'alarme : la limite peut être n\'importe quel réel ou $\\pm\\infty$ selon le contexte.<br/><br/>L\'erreur classique : conclure "$0/0 = 0$" ou "$0/0$ : pas de limite". Il faut factoriser pour <strong>lever l\'indétermination</strong>.<br/><br/>En $\\pm\\infty$, le terme de plus haut degré domine : $3x^2 - 100x + 500 \\sim 3x^2$ quand $x \\to +\\infty$.<br/><br/>La <strong>continuité</strong> de $f$ en $a$ exige : $f(a)$ existe, $\\lim_{x\\to a} f(x)$ existe, et elles sont égales.',
      definitions: [
        { term: 'Limite finie en $a$', def: '$\\lim_{x \\to a} f(x) = L$ signifie que $f(x)$ se rapproche aussi près que l\'on veut de $L$ quand $x$ se rapproche de $a$. On note aussi $f(x) \\xrightarrow[x \\to a]{} L$.' },
        { term: 'Forme indéterminée (FI)', def: 'Expression du type $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\times \\infty$, $1^\\infty$, $0^0$ ou $\\infty^0$ dont la valeur dépend du contexte. Il faut <strong>lever l\'indétermination</strong> (factoriser, simplifier, croissances comparées).' },
        { term: 'Continuité en $a$', def: '$f$ est continue en $a$ si $\\lim_{x \\to a} f(x) = f(a)$. Intuitivement : on peut tracer la courbe de $f$ sans lever le crayon en $a$.' },
        { term: 'Asymptote', def: 'Droite dont la courbe s\'approche à l\'infini. <strong>Horizontale</strong> $y = L$ si $\\lim_{x \\to \\pm\\infty} f(x) = L$. <strong>Verticale</strong> $x = a$ si $\\lim_{x \\to a} f(x) = \\pm\\infty$.' }
      ],
      method: {
        title: 'Calculer une limite',
        steps: [
          'Substituer directement : si le résultat est défini, c\'est la limite.',
          'Si forme indéterminée ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) : factoriser, simplifier, ou utiliser les croissances comparées.',
          'Limites en $\\pm\\infty$ d\'un polynôme : terme de plus haut degré dominant.',
          '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x\\to a}f(x)=f(a)$.'
        ]
      },
      example: {
        statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 - 1}$.',
        steps: [
          'Substitution directe : $\\dfrac{1-1}{1-1} = \\dfrac{0}{0}$ → forme indéterminée.',
          'Factorisation du numérateur : $x^3 - 1 = (x-1)(x^2+x+1)$.',
          'Factorisation du dénominateur : $x^2 - 1 = (x-1)(x+1)$.',
          'Simplification : $\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\dfrac{x^2+x+1}{x+1}$ pour $x \\neq 1$.',
          'Substitution : $\\dfrac{1+1+1}{1+1} = \\dfrac{3}{2}$.'
        ],
        answer: '$\\lim_{x \\to 1} \\dfrac{x^3-1}{x^2-1} = \\dfrac{3}{2} = 1{,}5$'
      },
      formulas: [
        '$\\lim_{x\\to+\\infty}x^n=+\\infty$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{1}{x^n}=0$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{a_n x^n+\\cdots}{b_m x^m+\\cdots}=\\lim_{x\\to+\\infty}\\frac{a_n x^n}{b_m x^m}$'
      ],
      recap: [
        'En $\\pm\\infty$, le terme de plus haut degré domine : $\\lim \\frac{P(x)}{Q(x)} = \\lim \\frac{\\text{terme dominant de }P}{\\text{terme dominant de }Q}$.',
        'Les formes indéterminées ($0/0$, $\\infty/\\infty$, etc.) exigent un travail algébrique (factorisation, simplification) avant de conclure.',
        '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x \\to a} f(x) = f(a)$ : pas de "saut" ni de "trou" dans la courbe.',
        'Le théorème des valeurs intermédiaires (TVI) : si $f$ est continue sur $[a;b]$ et $f(a) \\times f(b) < 0$, alors $f$ s\'annule au moins une fois sur $]a;b[$.'
      ],
      piege: '$\\infty - \\infty$ est une <strong>forme indéterminée</strong> : on ne peut pas conclure sans calcul.<br/><br/>Il faut factoriser, multiplier par la quantité conjuguée ou utiliser les croissances comparées pour lever l\'indétermination.'
    },
    quiz: [
      { q: 'Un élève évalue $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ et écrit : "en $x=2$, on obtient $\\dfrac{0}{0}$, donc la limite est $0$." Quelle est son erreur ?', options: ['$\\dfrac{0}{0}$ est une forme INDÉTERMINÉE, pas $0$. En factorisant : $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to 4$', 'L\'élève a raison : $\\dfrac{0}{0}=0$ par convention', 'La limite n\'existe pas car $f$ n\'est pas définie en $x=2$', 'La limite est $+\\infty$ car on divise par $0$'], answer: 0, correction: '$\\dfrac{0}{0}$ est une <strong>forme indéterminée</strong> : le résultat peut être $0$, n\'importe quel nombre réel, ou $\\pm\\infty$ selon les fonctions.<br/><br/>Ici $\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\neq2$, donc la limite est $4$.<br/><br/>Ne jamais conclure directement d\'une forme indéterminée sans simplifier !' },
      { q: '$\\lim_{x\\to 2}\\frac{x^2-4}{x-2}=$ ?', options: ['$0$', '$\\infty$', '$4$', '$2$'], answer: 2, correction: 'On factorise pour lever la forme indéterminée $0/0$ :<br/><br/>$\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2 \\to 4$ en $x=2$.' },
      { q: '$f(x)=\\frac{2x^3-x}{x^3+1}$, $\\lim_{x\\to+\\infty}f(x)=$ ?', options: ['$2$', '$0$', '$+\\infty$', '$-1$'], answer: 0, correction: 'En $+\\infty$, seuls les <strong>termes de plus haut degré</strong> comptent.<br/><br/>Termes dominants : $\\frac{2x^3}{x^3}=2$.' },
      { q: '$\\lim_{x \\to +\\infty} (\\sqrt{x^2+1} - x) = $ ?', options: ['$+\\infty$ car $\\sqrt{x^2+1} > x$', '$1$', '$0$', '$\\dfrac{1}{2}$'], answer: 2, correction: 'Forme $\\infty - \\infty$ : il faut lever l\'indétermination !<br/><br/>On multiplie par la <strong>quantité conjuguée</strong> : $\\dfrac{(\\sqrt{x^2+1}-x)(\\sqrt{x^2+1}+x)}{\\sqrt{x^2+1}+x} = \\dfrac{x^2+1-x^2}{\\sqrt{x^2+1}+x} = \\dfrac{1}{\\sqrt{x^2+1}+x}$.<br/><br/>Quand $x \\to +\\infty$, le dénominateur tend vers $+\\infty$, donc la limite est $0$.' },
      { q: '$f$ est continue sur $[0;1]$ avec $f(0) = -2$ et $f(1) = 3$. Que peut-on affirmer ?', options: ['$f$ s\'annule au moins une fois sur $]0;1[$ (TVI)', '$f$ s\'annule exactement une fois', '$f(0{,}5) = 0{,}5$', 'Rien de particulier'], answer: 0, correction: '$f$ est continue et $f(0) < 0 < f(1)$ : par le <strong>théorème des valeurs intermédiaires</strong>, il existe $c \\in ]0;1[$ tel que $f(c) = 0$.<br/><br/>On sait qu\'il y a au moins un zéro, mais pas qu\'il est unique (il pourrait y en avoir plusieurs).' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La concentration d\'un polluant dans un lac (en mg/L) est modélisée par' },
          { intro: 'Le nombre de vues quotidiennes d\'une vidéo virale est modélisé par' },
          { intro: 'La température d\'un métal en refroidissement (en °C) est modélisée par' },
          { intro: 'Le rendement d\'un catalyseur (en %) en fonction de la température est modélisé par' }
        ]);
        const a = rand(2, 7), b = rand(1, 5), c = rand(1, 4);
        const p = rand(1, 2);
        const answer = parseFloat((a / c).toFixed(2));
        return {
          statement: `${ctx.intro} $f(x) = \\dfrac{${a}x^${p} + ${b}}{${c}x^${p} + 1}$. Calculer $\\lim_{x \\to +\\infty} f(x)$. Arrondir à $0{,}01$.`,
          answer: answer,
          tolerance: 0.01,
          unit: '',
          hint: `En $+\\infty$, on ne garde que les termes de plus haut degré. Ici, numérateur $\\sim ${a}x^${p}$ et dénominateur $\\sim ${c}x^${p}$.`,
          solution: [
            `Termes dominants : $\\dfrac{${a}x^${p}}{${c}x^${p}} = \\dfrac{${a}}{${c}}$`,
            `$\\lim_{x \\to +\\infty} f(x) = \\dfrac{${a}}{${c}} = ${answer}$`
          ]
        };
      }
    },
    probleme: {
      context: 'La concentration d\'un médicament dans le sang (en mg/L) est modélisée par $C(t)=\\frac{10t}{t^2+1}$ où $t\\ge 0$ est en heures.',
      tasks: [
        'Calculer la limite de $C(t)$ quand $t\\to+\\infty$.',
        'Interpréter ce résultat.',
        'Calculer $C(1)$ et $C(3)$ pour étudier le comportement.'
      ],
      solutions: [
        '$\\lim_{t\\to+\\infty}C(t)=\\lim_{t\\to+\\infty}\\frac{10t}{t^2}=\\lim\\frac{10}{t}=0$.',
        'La concentration tend vers $0$ : le médicament est éliminé à long terme.',
        '$C(1)=\\frac{10}{2}=5$ mg/L ; $C(3)=\\frac{30}{10}=3$ mg/L.'
      ],
      finalAnswer: '$C(t)\\to 0$ : le médicament est éliminé. Pic à $t=1$ h : $5$ mg/L.'
    },

    evaluation: {
      title: 'Évaluation — Limites et continuité',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{3x^2 - x + 1}{2x^2 + 5}$.',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'En $+\\infty$, on ne garde que les termes de plus haut degré :<br/><br/>$\\dfrac{3x^2}{2x^2} = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          statement: '$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ vaut :',
          type: 'multiple-choice',
          options: ['$0$', '$6$', '$+\\infty$', 'La limite n\'existe pas'],
          answer: 1,
          points: 2,
          correction: 'On factorise pour lever la forme indéterminée $0/0$ :<br/><br/>$\\dfrac{x^2 - 9}{x - 3} = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ pour $x \\neq 3$.<br/><br/>Donc $\\lim_{x \\to 3} = 3 + 3 = 6$.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{5x^3 + 2x}{x^4 - 1}$.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le degré du numérateur ($3$) est inférieur à celui du dénominateur ($4$).<br/><br/>Termes dominants : $\\dfrac{5x^3}{x^4} = \\dfrac{5}{x} \\to 0$ quand $x \\to +\\infty$.'
        },
        {
          statement: 'La forme $\\dfrac{0}{0}$ est :',
          type: 'multiple-choice',
          options: ['Égale à $0$', 'Égale à $1$', 'Une forme indéterminée qu\'il faut lever', 'Égale à $+\\infty$'],
          answer: 2,
          points: 2,
          correction: '$\\dfrac{0}{0}$ est une <strong>forme indéterminée</strong> : le résultat dépend des fonctions en jeu.<br/><br/>Par exemple : $\\dfrac{x^2}{x} \\to 0$, $\\dfrac{x}{x} \\to 1$, $\\dfrac{x}{x^2} \\to +\\infty$ quand $x \\to 0^+$.<br/><br/>Il faut factoriser ou simplifier pour lever l\'indétermination.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x^2 - x}$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On factorise numérateur et dénominateur :<br/><br/>$\\dfrac{x^2 - 1}{x^2 - x} = \\dfrac{(x-1)(x+1)}{x(x-1)} = \\dfrac{x+1}{x}$ pour $x \\neq 1$.<br/><br/>Donc $\\lim_{x \\to 1} = \\dfrac{2}{1} = 2$.'
        }
      ]
    }
  });
