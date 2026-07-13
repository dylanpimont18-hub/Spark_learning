/* =========================================================
   Spark Learning – data/bts/bts-laplace.js
   Module : Transformée de Laplace (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-laplace',
    level: 3, subject: 'maths',
    icon: '⚡',
    title: 'Transformée de Laplace',
    subtitle: 'Définition, propriétés, résolution d\'équations différentielles',
    keywords: ['Laplace', 'Transformée', 'Équation différentielle', 'Fonction de transfert', 'Système'],
    physics: 'Automatique et asservissement : fonction de transfert, stabilité, réponse d\'un circuit RC/RL',
    cours: {
      intro: 'La transformée de Laplace convertit une équation différentielle (domaine temporel) en une équation algébrique (domaine de $p$), rendant la résolution beaucoup plus systématique.<br/><br/>La clé est la propriété de dérivation : $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$ — la condition initiale $f(0)$ apparaît explicitement, ce qui "encode" l\'état de départ du système directement dans le calcul.<br/><br/>En automatique BTS, la transformée de Laplace permet de définir la fonction de transfert $H(p)=S(p)/E(p)$ d\'un système (asservissement, régulateur PID, filtre actif) et d\'analyser sa stabilité via les pôles (valeurs de $p$ qui annulent le dénominateur).<br/><br/>Le passage au domaine fréquentiel s\'obtient en posant $p=j\\omega$ : on retrouve alors la réponse en fréquence classique (diagramme de Bode).<br/><br/>Piège majeur : oublier le terme $-f(0)$ dans $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$ donne une solution incorrecte dès que les conditions initiales ne sont pas nulles.',
      definitions: [
        { term: 'Transformée de Laplace $\\mathcal{L}\\{f\\}$', def: 'Opération qui convertit une fonction temporelle $f(t)$ en une fonction $F(p) = \\int_0^{+\\infty} f(t)e^{-pt}\\,dt$ dans le domaine de la variable complexe $p$. Les équations différentielles deviennent algébriques.' },
        { term: 'Fonction de transfert $H(p)$', def: 'Rapport $H(p) = S(p)/E(p)$ entre la sortie et l\'entrée d\'un système linéaire dans le domaine de Laplace. Elle caractérise complètement le comportement du système.' },
        { term: 'Pôles d\'un système', def: 'Valeurs de $p$ qui annulent le dénominateur de $H(p)$. Ils déterminent la stabilité : si tous les pôles ont une partie réelle négative, le système est stable.' },
        { term: 'Éléments simples', def: 'Décomposition d\'une fraction rationnelle en somme de fractions plus simples, inversibles directement par le tableau des transformées. Ex. : $\\frac{1}{(p+1)(p+3)} = \\frac{A}{p+1} + \\frac{B}{p+3}$.' }
      ],
      method: {
        title: 'Résoudre une ED par Laplace',
        steps: [
          '<strong>Transformation et équation algébrique</strong> : appliquer $\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$ à l\'équation différentielle.<br/><br/><strong>Exemple :</strong> $y\' + 5y = 10$, $y(0) = 0$ → $pY(p) - 0 + 5Y(p) = 10/p$ → $(p+5)Y(p) = 10/p$.',
          '<strong>Résolution algébrique</strong> : isoler $F(p)$ dans l\'équation obtenue.<br/><br/><strong>Exemple :</strong> $Y(p) = \\frac{10}{p(p+5)}$.',
          '<strong>Décomposition en éléments simples</strong> : $F(p)$ se réécrit comme une somme de fractions simples inversibles directement.<br/><br/><strong>Exemple :</strong> $\\frac{10}{p(p+5)} = \\frac{A}{p} + \\frac{B}{p+5}$. En $p=0$ : $A = 2$. En $p=-5$ : $B = -2$. Donc $Y(p) = \\frac{2}{p} - \\frac{2}{p+5}$.',
          '<strong>Transformation inverse</strong> : utiliser le tableau des transformées pour retrouver $f(t)$.<br/><br/><strong>Exemple :</strong> $y(t) = 2 - 2e^{-5t} = 2(1 - e^{-5t})$ pour $t \\geq 0$.'
        ]
      },
      example: {
        statement: 'Un circuit RC ($R = 1$ kΩ, $C = 1$ mF) est soumis à un échelon de tension $E = 5$ V à $t = 0$ (condensateur initialement déchargé : $u_C(0) = 0$). L\'équation différentielle est $\\tau u_C\' + u_C = E$ avec $\\tau = RC = 1$ s. Résoudre par Laplace.',
        steps: [
          'Transformation : $\\tau[pU_C(p) - u_C(0)] + U_C(p) = E/p$. Avec $u_C(0) = 0$ : $(\\tau p + 1)U_C(p) = E/p$.',
          '$U_C(p) = \\frac{E}{p(\\tau p + 1)} = \\frac{5}{p(p + 1)}$ (car $\\tau = 1$).',
          'Éléments simples : $\\frac{5}{p(p+1)} = \\frac{5}{p} - \\frac{5}{p+1}$. (Vérification : $\\frac{5(p+1) - 5p}{p(p+1)} = \\frac{5}{p(p+1)}$ ✓)',
          'Transformée inverse : $u_C(t) = 5 - 5e^{-t} = 5(1 - e^{-t/\\tau})$ V.',
          'Vérification : $u_C(0) = 0$ ✓, $u_C(+\\infty) = 5$ V ✓, $u_C(\\tau) = 5(1-e^{-1}) \\approx 3{,}16$ V ($63\\%$ de la valeur finale).'
        ],
        answer: '$u_C(t) = 5(1 - e^{-t})$ V. Le condensateur se charge exponentiellement vers $5$ V avec une constante de temps $\\tau = 1$ s.'
      },
      formulas: [
        '$\\mathcal{L}\\{1\\}=\\dfrac{1}{p}$, $\\mathcal{L}\\{e^{at}\\}=\\dfrac{1}{p-a}$',
        '$\\mathcal{L}\\{t^n\\}=\\dfrac{n!}{p^{n+1}}$',
        '$\\mathcal{L}\\{f\'\\}=pF(p)-f(0)$',
        '$\\mathcal{L}\\{\\cos(\\omega t)\\}=\\dfrac{p}{p^2+\\omega^2}$, $\\mathcal{L}\\{\\sin(\\omega t)\\}=\\dfrac{\\omega}{p^2+\\omega^2}$'
      ],
      diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px;">$f(t)$ (domaine temporel)</th><th style="border:1px solid var(--border);padding:8px;">$F(p)$ (domaine de Laplace)</th></tr><tr><td style="border:1px solid var(--border);padding:8px;">$1$ (échelon)</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$t$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$e^{at}$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{1}{p-a}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$\\sin(\\omega t)$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{\\omega}{p^2+\\omega^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$\\cos(\\omega t)$</td><td style="border:1px solid var(--border);padding:8px;">$\\dfrac{p}{p^2+\\omega^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">$f\'(t)$</td><td style="border:1px solid var(--border);padding:8px;">$pF(p) - f(0)$</td></tr></table>',
      recap: [
        'La transformée de Laplace convertit une ED en équation algébrique : dériver ↔ multiplier par $p$.',
        'Ne JAMAIS oublier le terme $-f(0)$ dans $\\mathcal{L}\\{f\'\\} = pF(p) - f(0)$ : il encode les conditions initiales.',
        'La décomposition en éléments simples est la clé de l\'inversion : chaque fraction simple correspond à une fonction standard du tableau.',
        'La fonction de transfert $H(p) = S(p)/E(p)$ caractérise un système ; ses pôles déterminent la stabilité (partie réelle < 0 = stable).'
      ],
      piege: 'La transformée de Laplace est définie pour $t\\ge0$ et suppose des conditions initiales à $t=0$. Elle ne s\'applique pas directement à des signaux définis sur $]-\\infty;+\\infty[$.'
    },
    quiz: [
      { q: '$\\mathcal{L}\\{e^{3t}\\}=$', options: ['$\\frac{1}{p-3}$', '$\\frac{1}{p+3}$', '$\\frac{3}{p}$', '$e^{3p}$'], answer: 0, correction: '$\\mathcal{L}\\{e^{at}\\}=\\frac{1}{p-a}$. Ici $a=3$.' },
      { q: 'Un étudiant résout $y\'(t)+2y(t)=0$ avec $y(0)=3$. Il écrit $pY(p)+2Y(p)=0$ et conclut $y(t)=0$. Quelle erreur a-t-il commise ?', options: ['Il n\'a pas appliqué la transformée de Laplace', 'Il a oublié le terme $-y(0)=-3$ dans $\\mathcal{L}\\{y\'\\}=pY(p)-y(0)$', 'L\'équation $y\'+2y=0$ n\'admet pas de solution', 'Il aurait dû utiliser $\\mathcal{L}\\{y\'\\}=F\'(p)$'], answer: 1, correction: 'La formule correcte est $\\mathcal{L}\\{y\'\\}=pY(p)-y(0)=pY(p)-3$. L\'équation devient $(p+2)Y(p)=3$, soit $Y(p)=\\frac{3}{p+2}$, d\'où $y(t)=3e^{-2t}\\neq0$. Oublier la condition initiale $y(0)$ dans la formule de dérivation est l\'erreur la plus fréquente en Laplace.' },
      { q: '$\\mathcal{L}^{-1}\\left\\{\\frac{1}{p-2}\\right\\}=$', options: ['$e^{-2t}$', '$e^{2t}$', '$\\frac{t^2}{2}$', '$\\cos(2t)$'], answer: 1, correction: '$\\mathcal{L}^{-1}\\left\\{\\frac{1}{p-a}\\right\\}=e^{at}$. Ici $a=2$, donc $e^{2t}$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4);
        const delta = pick([1, 2, 3, 4, 5]);
        const p = a + delta;
        const val = parseFloat((1 / delta).toFixed(4));

        const ctx = pick([
          {
            build: () => `La réponse temporelle d'un <strong>circuit RC</strong> comporte un terme en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          },
          {
            build: () => `Un <strong>système asservi</strong> présente, dans sa réponse, un terme en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          },
          {
            build: () => `Un <strong>filtre actif</strong> a une réponse impulsionnelle contenant un terme en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          },
          {
            build: () => `Le courant transitoire d'un <strong>moteur électrique</strong> à sa mise sous tension comporte un terme en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          },
          {
            build: () => `Un <strong>régulateur PID</strong> génère, en réponse à un échelon, un terme transitoire en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          },
          {
            build: () => `La réponse d'une <strong>suspension mécanique</strong> asservie comporte un terme en $e^{${a}t}$.<br/><br/>Calcule $\\mathcal{L}\\{e^{${a}t}\\}$ évalué en $p=${p}$ (donner la valeur numérique).`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: val,
          tolerance: 0.01,
          unit: '',
          hint: `$\\mathcal{L}\\{e^{${a}t}\\}=\\frac{1}{p-${a}}$. Évaluer en $p=${p}$.`,
          solution: [`$F(p)=\\frac{1}{p-${a}}$. En $p=${p}$ : $F(${p})=\\frac{1}{${p}-${a}}=\\frac{1}{${delta}}=${val.toString().replace('.', '{,}')}$`]
        };
      }
    },
    probleme: {
      context: 'Un circuit RC est modélisé par l\'équation $y\'(t)+2y(t)=e^{-t}$ avec $y(0)=0$.',
      tasks: [
        'Appliquer la transformée de Laplace à l\'équation différentielle.',
        'Exprimer $Y(p)=\\mathcal{L}\\{y\\}$ en fonction de $p$.',
        'Décomposer en éléments simples et trouver $y(t)$ par transformée inverse.'
      ],
      solutions: [
        '$pY(p)-y(0)+2Y(p)=\\frac{1}{p+1}$, soit $(p+2)Y(p)=\\frac{1}{p+1}$.',
        '$Y(p)=\\frac{1}{(p+1)(p+2)}$.',
        'Éléments simples : $\\frac{1}{(p+1)(p+2)}=\\frac{1}{p+1}-\\frac{1}{p+2}$. Inverse : $y(t)=e^{-t}-e^{-2t}$.'
      ],
      finalAnswer: '$y(t)=e^{-t}-e^{-2t}$ pour $t\\ge0$.'
    },

    evaluation: {
      title: 'Évaluation — Transformée de Laplace',
      duration: '45 min',
      questions: [
        {
          statement: 'Calculer $\\mathcal{L}\\{3e^{-2t}\\}$. Donner la valeur numérique de $F(p)$ pour $p = 5$.',
          type: 'numeric',
          answer: 0.43,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\mathcal{L}\\{3e^{-2t}\\} = \\dfrac{3}{p+2}$. En $p=5$ : $F(5) = \\dfrac{3}{5+2} = \\dfrac{3}{7} \\approx 0{,}43$.'
        },
        {
          statement: 'La transformée de Laplace de $f\'(t)$ est :',
          type: 'multiple-choice',
          options: ['$pF(p)$', '$pF(p) - f(0)$', '$F(p)/p$', '$F(p) + f(0)$'],
          answer: 1,
          points: 2,
          correction: '$\\mathcal{L}\\{f\'(t)\\} = pF(p) - f(0)$. Le terme $-f(0)$ encode la condition initiale. L\'oublier est l\'erreur la plus fréquente en Laplace.'
        },
        {
          statement: 'On considère $y\'(t) + 3y(t) = 6$ avec $y(0) = 0$. Après transformation de Laplace, exprimer $Y(p)$ et calculer $\\lim_{t \\to +\\infty} y(t)$ via le théorème de la valeur finale : $\\lim_{t\\to+\\infty} y(t) = \\lim_{p\\to 0} pY(p)$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Transformation : $(p+3)Y(p) = \\dfrac{6}{p}$, soit $Y(p) = \\dfrac{6}{p(p+3)}$. Théorème de la valeur finale : $\\lim_{t\\to+\\infty} y(t) = \\lim_{p\\to 0} pY(p) = \\lim_{p\\to 0} \\dfrac{6}{p+3} = \\dfrac{6}{3} = 2$. On peut vérifier : $y(t) = 2(1 - e^{-3t}) \\to 2$.'
        },
        {
          statement: '$\\mathcal{L}^{-1}\\left\\{\\dfrac{5}{p^2+25}\\right\\}$ est égal à :',
          type: 'multiple-choice',
          options: ['$5\\cos(5t)$', '$\\sin(5t)$', '$5\\sin(5t)$', '$e^{-5t}$'],
          answer: 1,
          points: 1,
          correction: '$\\mathcal{L}\\{\\sin(\\omega t)\\} = \\dfrac{\\omega}{p^2+\\omega^2}$. Ici $\\omega = 5$, donc $\\dfrac{5}{p^2+25} = \\dfrac{\\omega}{p^2+\\omega^2}$ et la transformée inverse est $\\sin(5t)$.'
        },
        {
          statement: 'Soit $Y(p) = \\dfrac{4}{(p+1)(p+3)}$. Décomposer en éléments simples et calculer $y(1)$ (arrondir à $0{,}01$).',
          type: 'numeric',
          answer: 0.64,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: 'Éléments simples : $\\dfrac{4}{(p+1)(p+3)} = \\dfrac{2}{p+1} - \\dfrac{2}{p+3}$. Donc $y(t) = 2e^{-t} - 2e^{-3t}$. En $t=1$ : $y(1) = 2e^{-1} - 2e^{-3} = 2 \\times 0{,}3679 - 2 \\times 0{,}0498 \\approx 0{,}7358 - 0{,}0996 \\approx 0{,}64$.'
        }
      ]
    }
  }
);
