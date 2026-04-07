/* =========================================================
   Spark Learning – data/lycee-tle/tle-convexite.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-convexite',
    level: 2, subject: 'maths',
    icon: '🏔️',
    title: 'Convexité',
    subtitle: 'Dérivée seconde, point d\'inflexion',
    keywords: ['Convexe', 'Concave', 'Dérivée seconde', 'Point d\'inflexion'],
    physics: false,
    cours: {
      intro: 'La <strong>convexité</strong> traduit la courbure de la courbe : une fonction convexe a ses tangentes EN-DESSOUS de la courbe (comme $x^2$, un bol), une fonction concave a ses tangentes AU-DESSUS (comme $-x^2$, un dôme).<br/><br/>La <strong>dérivée seconde</strong> $f\'\'$ mesure cette courbure : $f\'\' > 0$ = convexe, $f\'\' < 0$ = concave.<br/><br/>Un <strong>point d\'inflexion</strong> est là où la courbure change de sens, c\'est-à-dire là où $f\'\'$ change de signe.<br/><br/>Attention : $f\'\'(a) = 0$ est NÉCESSAIRE mais PAS SUFFISANT pour un point d\'inflexion. Contre-exemple classique : $f(x) = x^4$ vérifie $f\'\'(0) = 0$, mais $f\'\'(x) = 12x^2 \\geq 0$ partout — pas de changement de signe, donc $x=0$ n\'est PAS un point d\'inflexion.',
      definitions: [
        { term: 'Fonction convexe', def: '$f$ est convexe sur $I$ si sa courbe est "en forme de bol" : toute corde reliant deux points de la courbe est AU-DESSUS de la courbe. Caractérisation : $f\'\' \\geq 0$ sur $I$.' },
        { term: 'Fonction concave', def: '$f$ est concave sur $I$ si sa courbe est "en forme de dôme" : toute corde reliant deux points de la courbe est EN-DESSOUS de la courbe. Caractérisation : $f\'\' \\leq 0$ sur $I$.' },
        { term: 'Point d\'inflexion', def: 'Point de la courbe où la <strong>convexité change de sens</strong> (de convexe à concave ou l\'inverse). En ce point, $f\'\'(a) = 0$ ET $f\'\'$ change de signe. La tangente au point d\'inflexion <strong>traverse</strong> la courbe.' },
        { term: 'Dérivée seconde $f\'\'$', def: 'Dérivée de la dérivée : $f\'\' = (f\')\' $. Elle mesure le taux de variation de la pente. $f\'\' > 0$ : la pente augmente (convexe). $f\'\' < 0$ : la pente diminue (concave).' }
      ],
      method: {
        title: 'Étudier la convexité via $f\'\'$',
        steps: [
          'Calculer $f\'\'(x)$ (dérivée de la dérivée).',
          '$f\'\'(x) > 0$ sur $I$ $\\Rightarrow$ $f$ convexe sur $I$.',
          '$f\'\'(x) < 0$ sur $I$ $\\Rightarrow$ $f$ concave sur $I$.',
          'Un point d\'inflexion est un point où $f\'\'$ change de signe (et $f\'\'(x)=0$).'
        ]
      },
      example: {
        statement: 'Étudier la convexité de $f(x) = x^3 - 3x^2 + 2$ et trouver le(s) point(s) d\'inflexion.',
        steps: [
          '$f\'(x) = 3x^2 - 6x$.',
          '$f\'\'(x) = 6x - 6 = 6(x - 1)$.',
          '$f\'\'(x) = 0 \\Leftrightarrow x = 1$.',
          'Pour $x < 1$ : $f\'\'(x) < 0$ → $f$ est <strong>concave</strong>. Pour $x > 1$ : $f\'\'(x) > 0$ → $f$ est <strong>convexe</strong>.',
          '$f\'\'$ change de signe en $x = 1$ : c\'est un point d\'inflexion. $f(1) = 1 - 3 + 2 = 0$.'
        ],
        answer: 'Point d\'inflexion en $(1;0)$. $f$ est concave sur $]-\\infty;1]$ et convexe sur $[1;+\\infty[$.'
      },
      formulas: [
        '$f$ convexe $\\Leftrightarrow f\'\'\\ge 0$',
        '$f$ concave $\\Leftrightarrow f\'\'\\le 0$',
        'Point d\'inflexion : $f\'\'(a)=0$ et changement de signe de $f\'\'$'
      ],
      recap: [
        '$f\'\' > 0$ → convexe (bol / tangentes en-dessous). $f\'\' < 0$ → concave (dôme / tangentes au-dessus).',
        'Point d\'inflexion = $f\'\'$ change de signe. La condition $f\'\'(a) = 0$ est <strong>nécessaire mais pas suffisante</strong>.',
        'Contre-exemple essentiel : $f(x) = x^4$ vérifie $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout → pas de point d\'inflexion en $0$.',
        'Inégalité de convexité : si $f$ est convexe, alors $f\\left(\\dfrac{a+b}{2}\\right) \\leq \\dfrac{f(a)+f(b)}{2}$ (la courbe est sous la corde).'
      ],
      piege: 'Un zéro de $f\'\'$ n\'est pas forcément un point d\'inflexion : il faut vérifier le <strong>changement de signe</strong>.<br/><br/>Par exemple, $f(x)=x^4$ a $f\'\'(0)=0$ mais $f\'\'(x) = 12x^2 \\geq 0$ ne change pas de signe en $0$.'
    },
    quiz: [
      { q: 'Si $f\'\'(x) > 0$ sur $[a;b]$, la courbe de $f$ est :', options: ['Concave', 'Convexe', 'Décroissante', 'Constante'], answer: 1, correction: '$f\'\'>0 \\Rightarrow$ <strong>convexe</strong> (tournée vers le haut, comme $x^2$).<br/><br/>Les tangentes sont en-dessous de la courbe et la pente est croissante.' },
      { q: 'Pour $f(x)=x^3$, $f\'\'(x)=$ ?', options: ['$3x$', '$6x$', '$3x^2$', '$x^2$'], answer: 1, correction: 'On dérive deux fois : $f\'(x)=3x^2$, puis $f\'\'(x)=6x$.<br/><br/>On remarque que $f\'\'(0)=0$ et $f\'\'$ change de signe en $0$ : c\'est un point d\'inflexion de $x^3$.' },
      { q: '$f(x)=x^4$ vérifie $f\'\'(0)=12\\times0^2=0$. Un élève conclut que $x=0$ est un point d\'inflexion. A-t-il raison ?', options: ['Non : $f\'\'(x)=12x^2\\ge0$ partout et ne change pas de signe en $0$ : ce n\'est PAS un point d\'inflexion', 'Oui : $f\'\'(0)=0$ implique toujours un point d\'inflexion', 'Oui : $x=0$ est le minimum de $f$, donc c\'est un point d\'inflexion', 'Impossible à dire sans calculer $f\'\'\'(0)$'], answer: 0, correction: 'La condition $f\'\'(a)=0$ est <strong>NÉCESSAIRE mais pas SUFFISANTE</strong> pour un point d\'inflexion. Il faut aussi que $f\'\'$ <strong>change de signe</strong> autour de $a$.<br/><br/>Ici $f\'\'(x)=12x^2\\ge0$ pour tout $x$ : jamais négatif, donc pas de changement de signe en $0$. Le point $(0;0)$ est un minimum, pas un inflexion.<br/><br/>Comparer avec $f(x)=x^3$ où $f\'\'(0)=0$ ET $f\'\'$ change de signe : là c\'est bien un inflexion.' },
      { q: 'La fonction $\\ln(x)$ est convexe ou concave sur $]0;+\\infty[$ ?', options: ['Convexe car $\\ln$ est croissante', 'Concave car $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$', 'Ni l\'un ni l\'autre', 'Convexe sur $]0;1]$ et concave sur $[1;+\\infty[$'], answer: 1, correction: '$(\\ln x)\' = 1/x$ et $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$.<br/><br/>Donc $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$ : ses tangentes sont toujours au-dessus de la courbe. Croissance et convexité sont deux notions différentes !' },
      { q: 'Au point d\'inflexion, la tangente :', options: ['Est horizontale', 'Traverse la courbe (passe de dessous à dessus ou inversement)', 'Est verticale', 'Ne touche pas la courbe'], answer: 1, correction: 'Au point d\'inflexion, la convexité change : la tangente passe de "en-dessous" (convexe) à "au-dessus" (concave) ou inversement.<br/><br/>Elle <strong>traverse</strong> la courbe en ce point. Attention : la tangente n\'est pas forcément horizontale au point d\'inflexion !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Le coût de production d\'une usine (en milliers d\'euros) est', varName: 'q', varLabel: 'quantité produite' },
          { intro: 'La position d\'un mobile le long d\'un axe (en m) est', varName: 't', varLabel: 'temps en s' },
          { intro: 'La température d\'un four de cuisson (en °C) est', varName: 't', varLabel: 'temps en min' },
          { intro: 'Le bénéfice d\'une start-up (en k€) est modélisé par', varName: 'x', varLabel: 'mois' }
        ]);
        const a = rand(1, 4), b = rand(2, 6);
        // f(x) = ax^3 - bx^2, f'' = 6ax - 2b, inflexion at x = b/(3a)
        const inflX = parseFloat((b / (3 * a)).toFixed(2));
        return {
          statement: `${ctx.intro} $f(${ctx.varName}) = ${a}${ctx.varName}^3 - ${b}${ctx.varName}^2$. Déterminer l'abscisse du point d'inflexion. Arrondir à $0{,}01$.`,
          answer: inflX,
          tolerance: 0.05,
          unit: '',
          hint: `Calcule $f''(${ctx.varName})$ et résous $f'' = 0$. Vérifie que $f''$ change bien de signe.`,
          solution: [
            `$f'(${ctx.varName}) = ${3*a}${ctx.varName}^2 - ${2*b}${ctx.varName}$`,
            `$f''(${ctx.varName}) = ${6*a}${ctx.varName} - ${2*b}$`,
            `$f'' = 0 \\Leftrightarrow ${ctx.varName} = \\dfrac{${2*b}}{${6*a}} = ${inflX}$`,
            `$f''$ passe de négatif à positif en $${ctx.varName} = ${inflX}$ : c'est bien un point d'inflexion.`
          ]
        };
      }
    },
    probleme: {
      context: 'La hauteur d\'eau dans un réservoir est $h(t)=t^3-6t^2+9t$ (en m, $t$ en h, $t\\in[0;4]$).',
      tasks: [
        'Calculer $h\'(t)$ et $h\'\'(t)$.',
        'Sur quel intervalle le niveau monte-t-il de façon convexe (accélération positive) ?',
        'Quel est le point d\'inflexion ?'
      ],
      solutions: [
        '$h\'(t)=3t^2-12t+9$ ; $h\'\'(t)=6t-12$.',
        '$h\'\'>0 \\Leftrightarrow 6t-12>0 \\Leftrightarrow t>2$ : convexe sur $[2;4]$.',
        '$h\'\'(t)=0 \\Rightarrow t=2$ ; $h\'\'$ change de signe : point d\'inflexion en $t=2$, $h(2)=8-24+18=2$ m.'
      ],
      finalAnswer: 'Point d\'inflexion en $(2;2)$. Convexe sur $[2;4]$.'
    },

    evaluation: {
      title: 'Évaluation — Convexité',
      duration: '30 min',
      questions: [
        {
          statement: 'Soit $f(x) = x^3 - 3x$. Calculer $f\'\'(x)$.',
          type: 'multiple-choice',
          options: ['$3x^2 - 3$', '$6x$', '$6$', '$3x$'],
          answer: 1,
          points: 2,
          correction: 'On dérive deux fois :<br/><br/>$f\'(x) = 3x^2 - 3$, puis $f\'\'(x) = 6x$.'
        },
        {
          statement: 'Pour $f(x) = e^x$, la fonction est convexe sur $\\mathbb{R}$. Vrai ou faux ?',
          type: 'multiple-choice',
          options: ['Vrai : $f\'\'(x) = e^x > 0$ pour tout $x$', 'Faux : $e^x$ est concave', 'Vrai seulement pour $x > 0$', 'Faux : $e^x$ n\'a pas de dérivée seconde'],
          answer: 0,
          points: 2,
          correction: '$f\'(x) = e^x$, $f\'\'(x) = e^x > 0$ pour tout $x \\in \\mathbb{R}$.<br/><br/>Comme la dérivée seconde est strictement positive partout, $f$ est <strong>convexe</strong> sur $\\mathbb{R}$ entier.'
        },
        {
          statement: 'Soit $f(x) = x^4 - 6x^2$. Déterminer l\'abscisse du (des) point(s) d\'inflexion. Donner la plus petite valeur.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$.<br/><br/>$f\'\'(x) = 0 \\Leftrightarrow x = -1$ ou $x = 1$. $f\'\'$ change de signe en chacune de ces valeurs : ce sont deux <strong>points d\'inflexion</strong>.<br/><br/>La plus petite abscisse est $x = -1$.'
        },
        {
          statement: 'Si $f\'\'(a) = 0$ mais $f\'\'$ ne change pas de signe en $a$, alors $a$ est :',
          type: 'multiple-choice',
          options: ['Un point d\'inflexion', 'Pas un point d\'inflexion', 'Un maximum local', 'Un minimum local'],
          answer: 1,
          points: 2,
          correction: 'Un point d\'inflexion nécessite un <strong>changement de signe</strong> de $f\'\'$.<br/><br/>Si $f\'\'(a) = 0$ sans changement de signe, $a$ n\'est pas un point d\'inflexion.<br/><br/>Exemple classique : $f(x) = x^4$, $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout.'
        },
        {
          statement: 'Soit $g(x) = \\ln(x)$ pour $x > 0$. Calculer $g\'\'(1)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g\'(x) = \\dfrac{1}{x}$, puis $g\'\'(x) = -\\dfrac{1}{x^2}$.<br/><br/>$g\'\'(1) = -\\dfrac{1}{1} = -1$.<br/><br/>Comme $g\'\'(x) < 0$ pour tout $x > 0$, $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$.'
        }
      ]
    }
  });
