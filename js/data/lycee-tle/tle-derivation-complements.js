/* =========================================================
   Spark Learning – data/lycee-tle/tle-derivation-complements.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-derivation-complements',
    level: 2, subject: 'maths',
    icon: '🔬',
    title: 'Compléments sur la dérivation',
    subtitle: 'Dérivée de composées, produit, quotient',
    keywords: ['Dérivée', 'Produit', 'Quotient', 'Composée', 'Fonction'],
    physics: true,
    cours: {
      intro: 'La <strong>règle du produit</strong> $(uv)\' = u\'v + uv\'$ s\'explique géométriquement : si une longueur $u$ et une largeur $v$ varient, l\'aire $uv$ varie de $u\\ \\delta v + v\\ \\delta u$ (le terme $\\delta u\\ \\delta v$ est négligeable).<br/><br/>La <strong>règle du quotient</strong> $(u/v)\' = (u\'v - uv\')/v^2$ s\'en déduit algébriquement.<br/><br/>La <strong>règle de la chaîne</strong> $(f\\circ g)\' = g\' \\times f\'(g)$ dit que "les taux de variation se multiplient".<br/><br/>Deux pièges fréquents : croire que $(u/v)\' = u\'/v\'$ (faux — on ne divise pas les dérivées) et inverser l\'ordre dans le numérateur du quotient ($u\'v - uv\'$, et non $uv\' - u\'v$).<br/><br/>Un contre-exemple simple : $(x/(x+1))\' = 1/(x+1)^2$ et non $1/1 = 1$.',
      definitions: [
        { term: 'Dérivée d\'un produit', def: 'Si $f = u \\times v$, alors $f\' = u\'v + uv\'$. Chaque facteur est dérivé à tour de rôle, l\'autre restant inchangé.' },
        { term: 'Dérivée d\'un quotient', def: 'Si $f = \\dfrac{u}{v}$ avec $v \\neq 0$, alors $f\' = \\dfrac{u\'v - uv\'}{v^2}$. L\'ordre du numérateur ($u\'v$ en premier) est crucial.' },
        { term: 'Dérivée d\'une composée (chaîne)', def: 'Si $f(x) = h(g(x))$, alors $f\'(x) = g\'(x) \\times h\'(g(x))$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur.' },
        { term: 'Tangente en un point', def: 'La tangente à la courbe de $f$ en $a$ a pour équation $y = f\'(a)(x - a) + f(a)$. Le coefficient directeur est la dérivée en $a$.' }
      ],
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          'Produit : $(uv)\'=u\'v+uv\'$.',
          'Quotient : $\\left(\\frac{u}{v}\\right)\'=\\frac{u\'v-uv\'}{v^2}$.',
          'Composée : $(f\\circ g)\'(x)=g\'(x)\\cdot f\'(g(x))$.',
          'Cas courant : $[u^n]\'=n\\cdot u^{n-1}\\cdot u\'$.'
        ]
      },
      example: {
        statement: 'Dériver $f(x) = \\dfrac{e^x}{x^2 + 1}$ et calculer $f\'(0)$.',
        steps: [
          'On identifie $u = e^x$ et $v = x^2 + 1$, donc $u\' = e^x$ et $v\' = 2x$.',
          'Règle du quotient : $f\'(x) = \\dfrac{u\'v - uv\'}{v^2} = \\dfrac{e^x(x^2+1) - e^x \\cdot 2x}{(x^2+1)^2}$.',
          'Factorisation : $f\'(x) = \\dfrac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\dfrac{e^x(x-1)^2}{(x^2+1)^2}$.',
          'En $x = 0$ : $f\'(0) = \\dfrac{e^0 \\times (-1)^2}{(0+1)^2} = \\dfrac{1 \\times 1}{1} = 1$.'
        ],
        answer: '$f\'(0) = 1$. On remarque que $f\'(x) \\geq 0$ pour tout $x$ car $(x-1)^2 \\geq 0$ et $e^x > 0$ : $f$ est croissante sur $\\mathbb{R}$.'
      },
      formulas: [
        '$(uv)\'=u\'v+uv\'$',
        '$\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$',
        '$(u^n)\'=nu^{n-1}u\'$',
        '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$'
      ],
      recap: [
        '<strong>Produit</strong> : $(uv)\' = u\'v + uv\'$. Astuce mnémotechnique : "dérive le premier, garde le second, puis l\'inverse".',
        '<strong>Quotient</strong> : $(u/v)\' = (u\'v - uv\')/v^2$. Attention à l\'ordre : c\'est $u\'v$ MOINS $uv\'$, jamais l\'inverse.',
        '<strong>Composée</strong> : $(f \\circ g)\' = g\' \\times f\'(g)$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur ($(e^{3x})\' = 3e^{3x}$).',
        'Vérifier en revenant à la dérivation : si $F$ est une primitive de $f$, alors $F\' = f$. Toujours vérifier la cohérence.'
      ],
      piege: 'Dans la formule du quotient, bien noter $u\'v - uv\'$ (et non $uv\' - u\'v$) au numérateur.<br/><br/>L\'ordre compte ! Un moyen mnémotechnique : "c\'est le haut prime fois le bas, moins le haut fois le bas prime, le tout sur le bas au carré".'
    },
    quiz: [
      { q: 'Dériver $f(x)=x^2 e^x$', options: ['$2xe^x$', '$x^2 e^x$', '$(2x+x^2)e^x$', '$2xe^x + e^x$'], answer: 2, correction: 'On applique la <strong>règle du produit</strong> : $(uv)\' = u\'v + uv\'$.<br/><br/>$(x^2)\'e^x+x^2(e^x)\'=2xe^x+x^2 e^x=(2x+x^2)e^x$.' },
      { q: 'Un élève dérive $f(x)=\\dfrac{x^2}{x+1}$ et écrit $f\'(x)=\\dfrac{2x}{1}=2x$ en "divisant les dérivées". Quelle est son erreur ?', options: ['Il a utilisé $(u/v)\'=u\'/v\'$ (faux) ; la règle correcte donne $f\'=\\dfrac{2x(x+1)-x^2}{(x+1)^2}=\\dfrac{x^2+2x}{(x+1)^2}$', 'L\'élève a raison : $(u/v)\'=u\'/v\'$', 'La bonne formule est $(u/v)\'=\\dfrac{u\'v+uv\'}{v^2}$ (avec un $+$)', 'La dérivée de $x+1$ est $0$, pas $1$'], answer: 0, correction: 'La règle du quotient est $(u/v)\'=\\frac{u\'v-uv\'}{v^2}$.<br/><br/>Avec $u=x^2$, $u\'=2x$, $v=x+1$, $v\'=1$ : $f\'=\\frac{2x(x+1)-x^2\\cdot1}{(x+1)^2}=\\frac{2x^2+2x-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}$.<br/><br/>La règle $(u/v)\'=u\'/v\'$ <strong>n\'existe pas</strong>. Vérification : si $f(x)=\\frac{x}{x+1}$, $f\'=\\frac{1}{(x+1)^2}\\neq\\frac{1}{1}=1$.' },
      { q: 'Dériver $f(x)=(3x+1)^4$', options: ['$4(3x+1)^3$', '$12(3x+1)^3$', '$3(3x+1)^4$', '$(3x+1)^3$'], answer: 1, correction: 'On applique la <strong>règle de la chaîne</strong> : $[u^4]\'=4u^3\\cdot u\'$ avec $u=3x+1$ et $u\'=3$.<br/><br/>Donc $f\'=4\\times3\\times(3x+1)^3=12(3x+1)^3$. Ne pas oublier de multiplier par $u\'$ !' },
      { q: 'Dériver $f(x) = e^{x^2}$', options: ['$e^{x^2}$', '$2xe^{x^2}$', '$x^2 e^{x^2-1}$', '$2xe^{2x}$'], answer: 1, correction: 'C\'est une <strong>composée</strong> : la fonction extérieure est $e^u$ et la fonction intérieure est $u = x^2$.<br/><br/>$u\' = 2x$, donc $(e^{u})\' = u\' e^{u} = 2x e^{x^2}$.' },
      { q: 'Dériver $f(x) = \\ln(x^2 + 1)$', options: ['$\\dfrac{1}{x^2+1}$', '$\\dfrac{2x}{x^2+1}$', '$\\dfrac{x}{x^2+1}$', '$2x\\ln(x^2+1)$'], answer: 1, correction: 'On utilise $(\\ln u)\' = u\'/u$ avec $u = x^2+1$ et $u\' = 2x$.<br/><br/>Donc $f\'(x) = \\dfrac{2x}{x^2+1}$. L\'option A oublie de multiplier par la dérivée de l\'intérieur.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La puissance lumineuse d\'une LED est', fExpr: 'P(x)' },
          { intro: 'Le coût marginal d\'une entreprise est modélisé par', fExpr: 'C(x)' },
          { intro: 'La concentration d\'un réactif est', fExpr: 'c(t)' },
          { intro: 'L\'élongation d\'un ressort est', fExpr: 's(t)' }
        ]);
        const type = pick(['produit', 'composee']);
        if (type === 'produit') {
          const a = rand(2, 5), b = rand(1, 3);
          const x0 = rand(1, 3);
          // f(x) = (ax+b)e^x => f'(x) = ae^x + (ax+b)e^x = (ax+a+b)e^x
          const answer = parseFloat(((a * x0 + a + b) * Math.exp(x0)).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.fExpr} = (${a}x+${b})e^x$. Calculer $f'(${x0})$. Arrondir à $0{,}01$.`,
            answer: answer,
            tolerance: 0.1,
            unit: '',
            hint: `Règle du produit $(uv)' = u'v + uv'$ avec $u = ${a}x+${b}$ et $v = e^x$.`,
            solution: [
              `$u = ${a}x+${b}$, $u' = ${a}$, $v = e^x$, $v' = e^x$`,
              `$f'(x) = ${a}e^x + (${a}x+${b})e^x = (${a}x+${a+b})e^x$`,
              `$f'(${x0}) = (${a*x0+a+b}) \\times e^{${x0}} \\approx ${answer}$`
            ]
          };
        } else {
          const a = rand(2, 5), b = rand(1, 4), n = rand(2, 4);
          const answer = n * a * Math.pow(b, n - 1);
          return {
            statement: `${ctx.intro} $${ctx.fExpr} = (${a}x+${b})^{${n}}$. Calculer $f'(0)$.`,
            answer: answer,
            tolerance: 0,
            unit: '',
            hint: `$[(${a}x+${b})^{${n}}]' = ${n} \\times ${a} \\times (${a}x+${b})^{${n-1}}$. Évaluer en $x = 0$.`,
            solution: [
              `$f'(x) = ${n} \\times ${a} \\times (${a}x+${b})^{${n-1}}$`,
              `$f'(0) = ${n*a} \\times ${b}^{${n-1}} = ${answer}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'La position d\'un objet est $s(t)=\\frac{t^2}{t+1}$ (en m, $t\\ge 0$ en s).',
      tasks: [
        'Calculer $s\'(t)$ (vitesse instantanée).',
        'La vitesse est-elle croissante ?',
        'Quelle est la vitesse à $t=2$ s ?'
      ],
      solutions: [
        '$s\'(t)=\\frac{2t(t+1)-t^2\\cdot1}{(t+1)^2}=\\frac{t^2+2t}{(t+1)^2}=\\frac{t(t+2)}{(t+1)^2}$.',
        'Pour $t\\ge0$ : numérateur $\\ge0$, dénominateur $>0$, donc $s\'(t)\\ge0$ : vitesse croissante.',
        '$s\'(2)=\\frac{2\\times4}{9}=\\frac{8}{9}\\approx0{,}89$ m/s.'
      ],
      finalAnswer: '$s\'(t)=\\frac{t(t+2)}{(t+1)^2}\\ge0$ : objet en accélération. $v(2)\\approx0{,}89$ m/s.'
    },

    evaluation: {
      title: 'Évaluation — Compléments sur la dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Dériver $f(x) = x^3 e^x$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Règle du produit : $f\'(x) = 3x^2 e^x + x^3 e^x = (3x^2 + x^3)e^x = x^2(3+x)e^x$.<br/><br/>En $x = 0$ : $f\'(0) = 0^2 \\times 3 \\times e^0 = 0$.'
        },
        {
          statement: 'Quelle est la dérivée de $f(x) = \\dfrac{x}{x+1}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{(x+1)^2}$', '$\\dfrac{-1}{(x+1)^2}$', '$\\dfrac{x}{(x+1)^2}$', '$\\dfrac{1}{x+1}$'],
          answer: 0,
          points: 2,
          correction: 'On identifie $u = x$, $u\' = 1$, $v = x+1$, $v\' = 1$.<br/><br/>Règle du quotient : $f\' = \\dfrac{1 \\times (x+1) - x \\times 1}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$.'
        },
        {
          statement: 'Calculer la dérivée de $g(x) = (2x+3)^5$ en $x = -1$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Chaîne : $g\'(x) = 5 \\times 2 \\times (2x+3)^4 = 10(2x+3)^4$.<br/><br/>En $x = -1$ : $g\'(-1) = 10 \\times (2(-1)+3)^4 = 10 \\times 1^4 = 10$.'
        },
        {
          statement: 'Dériver $h(x) = \\sqrt{4x+1}$. Que vaut $h\'(2)$ ?',
          type: 'numeric',
          answer: 0.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On réécrit $h(x) = (4x+1)^{1/2}$ pour appliquer la dérivée d\'une composée.<br/><br/>$h\'(x) = \\dfrac{4}{2\\sqrt{4x+1}} = \\dfrac{2}{\\sqrt{4x+1}}$.<br/><br/>$h\'(2) = \\dfrac{2}{\\sqrt{9}} = \\dfrac{2}{3} \\approx 0{,}67$.'
        },
        {
          statement: 'Un élève dérive $\\dfrac{x^2}{\\sin x}$ en écrivant $\\dfrac{2x}{\\cos x}$. A-t-il raison ?',
          type: 'multiple-choice',
          options: ['Oui, on dérive numérateur et dénominateur séparément', 'Non : $(u/v)\' = u\'/v\'$ est faux ; il faut appliquer la règle du quotient $(u\'v - uv\')/v^2$', 'Oui, mais il faut ajouter un signe $-$', 'Non : la dérivée de $\\sin x$ est $-\\cos x$'],
          answer: 1,
          points: 2,
          correction: 'La règle $(u/v)\' = u\'/v\'$ <strong>n\'existe pas</strong>.<br/><br/>La bonne formule est la règle du quotient : $\\dfrac{u\'v - uv\'}{v^2} = \\dfrac{2x \\sin x - x^2 \\cos x}{\\sin^2 x}$.'
        }
      ]
    }
  });
