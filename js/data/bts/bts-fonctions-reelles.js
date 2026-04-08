/* =========================================================
   Spark Learning – data/bts/bts-fonctions-reelles.js
   Module : Fonctions Réelles (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-fonctions-reelles',
    level: 3, subject: 'maths',
    icon: '📐',
    title: 'Fonctions d\'une variable réelle',
    subtitle: 'Révisions et compléments (limites, continuité, dérivée)',
    keywords: ['Fonction', 'Limite', 'Continuité', 'Dérivée', 'Tableau de variations'],
    physics: true,
    cours: {
      intro: 'En BTS, l\'étude complète d\'une fonction est un outil de modélisation : une fonction de coût, une loi de transfert, une réponse impulsionnelle — chacune nécessite domaine, limites, variations et asymptotes. Le domaine de définition est contraint par les dénominateurs ($\\neq 0$), les racines carrées ($\\geq 0$) et les logarithmes ($> 0$). Les asymptotes décrivent le comportement aux extrêmes : asymptote verticale là où la fonction "explose", horizontale si elle se stabilise. Attention : un point exclu du domaine ne génère pas toujours une asymptote verticale — si le numérateur s\'annule aussi, on obtient un "trou" (discontinuité effaçable) et non une asymptote. La règle de L\'Hôpital lève les formes indéterminées $0/0$ ou $\\infty/\\infty$ en dérivant numérateur et dénominateur séparément — elle est correcte mais souvent inutile si on sait factoriser.',
      definitions: [
        { term: 'Domaine de définition $D_f$', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Exclu : les valeurs qui annulent un dénominateur, qui rendent un radicande négatif, ou un argument de logarithme $\\leq 0$.' },
        { term: 'Asymptote horizontale', def: 'Droite $y = L$ telle que $\\lim_{x \\to \\pm\\infty} f(x) = L$. La courbe s\'en rapproche indéfiniment sans la toucher (en général).' },
        { term: 'Asymptote verticale', def: 'Droite $x = a$ telle que $\\lim_{x \\to a} f(x) = \\pm\\infty$. La courbe "explose" au voisinage de $a$.' },
        { term: 'Discontinuité effaçable (trou)', def: 'Point $x = a$ exclu du domaine mais où la limite de $f$ est finie. En prolongeant $f$ par cette limite, on obtient une fonction continue. Ce n\'est PAS une asymptote verticale.' }
      ],
      method: {
        title: 'Étude complète d\'une fonction',
        steps: [
          '<strong>Domaine de définition</strong> : Domaine : annuler les dénominateurs, conditions de la racine ou du logarithme. <strong>Exemple :</strong> $f(x) = \\ln(3x - 6)$ → condition $3x - 6 > 0$, soit $x > 2$ → $D_f = ]2 ; +\\infty[$.',
          '<strong>Étude des limites</strong> : Limites aux bornes du domaine (et en $\\pm\\infty$). <strong>Exemple :</strong> $f(x) = \\frac{2x+1}{x-3}$ → $\\lim_{x \\to +\\infty} f(x) = 2$ (AH) et $\\lim_{x \\to 3} f(x) = \\pm\\infty$ (AV en $x=3$).',
          '<strong>Tableau de variations</strong> : Signe de la dérivée $f\'$ pour les variations ; tableau de variations. <strong>Exemple :</strong> $f(x) = x^2 - 4x$ → $f\'(x) = 2x - 4 = 0$ en $x = 2$. $f\'(x) < 0$ pour $x < 2$ (décroissante), $f\'(x) > 0$ pour $x > 2$ (croissante). Minimum en $x = 2$ : $f(2) = -4$.',
          '<strong>Asymptotes</strong> : Asymptotes : horizontale si $\\lim_{x\\to\\pm\\infty}f(x)=L$ ; verticale si $\\lim_{x\\to a}f(x)=\\pm\\infty$. <strong>Exemple :</strong> $f(x) = \\frac{x^2+1}{x} = x + \\frac{1}{x}$ → pas d\'AH, mais asymptote oblique $y = x$ (car $f(x) - x = 1/x \\to 0$).'
        ]
      },
      example: {
        statement: 'Un convertisseur électronique a un rendement modélisé par $\\eta(x) = \\dfrac{100x}{x + 5}$ (en %, $x > 0$ étant la charge en ampères). Étudier cette fonction : domaine, limite, asymptote et sens de variation.',
        steps: [
          'Domaine : $x + 5 \\neq 0$ et $x > 0$ (charge positive), donc $D_f = ]0 ; +\\infty[$.',
          'Limite : $\\lim_{x \\to +\\infty} \\frac{100x}{x+5} = \\lim \\frac{100}{1+5/x} = 100$. Asymptote horizontale $y = 100$ : le rendement ne dépasse jamais $100\\%$.',
          'Dérivée : $\\eta\'(x) = \\frac{100(x+5) - 100x}{(x+5)^2} = \\frac{500}{(x+5)^2} > 0$ pour tout $x > 0$.',
          'La fonction est strictement croissante sur $]0;+\\infty[$ : le rendement augmente avec la charge mais sature vers $100\\%$.'
        ],
        answer: 'Le rendement $\\eta$ est croissant de $0$ vers $100\\%$ (asymptote horizontale). Il n\'atteint jamais $100\\%$ mais s\'en rapproche indéfiniment.'
      },
      formulas: [
        'Asymptote oblique $y=ax+b$ : $a=\\lim_{x\\to\\infty}\\frac{f(x)}{x}$, $b=\\lim_{x\\to\\infty}(f(x)-ax)$',
        '$(e^x)\' = e^x$, $(\\ln x)\'=\\frac{1}{x}$, $(x^n)\'=nx^{n-1}$',
        'Règle de L\'Hôpital : $\\lim\\frac{f}{g}\\xrightarrow[0/0 \\text{ ou } \\infty/\\infty]{}\\lim\\frac{f\'}{g\'}$'
      ],
      recap: [
        'Le domaine est contraint par 3 interdits : dénominateur $= 0$, radicande $< 0$, argument du $\\ln \\leq 0$.',
        'Bien distinguer asymptote verticale ($\\lim = \\pm\\infty$) et trou (discontinuité effaçable, $\\lim$ finie).',
        'Le signe de $f\'$ donne directement les intervalles de croissance/décroissance.',
        'En ingénierie, les asymptotes horizontales modélisent souvent une saturation (rendement, température d\'équilibre, vitesse limite).'
      ],
      piege: 'Une asymptote verticale en $x=a$ implique que $a$ est exclu du domaine, mais un point exclu du domaine ne donne pas forcément une asymptote verticale (peut être un trou).'
    },
    quiz: [
      { q: 'Le domaine de $f(x)=\\ln(2x-4)$ est :', options: ['$\\mathbb{R}$', '$]2;+\\infty[$', '$[2;+\\infty[$', '$]0;+\\infty[$'], answer: 1, correction: '$2x-4>0 \\Rightarrow x>2$. Domaine : $]2;+\\infty[$.' },
      { q: '$\\lim_{x\\to+\\infty}\\frac{3x^2+1}{x^2-2}=$', options: ['$0$', '$+\\infty$', '$3$', '$1$'], answer: 2, correction: 'Termes dominants : $\\frac{3x^2}{x^2}=3$.' },
      { q: 'La fonction $f(x)=\\dfrac{x^2-4}{x-2}$ admet-elle une asymptote verticale en $x=2$ ?', options: ['Non : après simplification, $f(x)=x+2$ pour $x\\ne2$. Il y a un "trou" en $x=2$, pas une asymptote', 'Oui : $f$ n\'est pas définie en $x=2$, donc il y a une asymptote verticale', 'Oui : $\\lim_{x\\to2}f(x)=+\\infty$', 'Non car le dénominateur n\'est pas un polynôme irréductible'], answer: 0, correction: 'Une asymptote verticale en $x=a$ suppose $\\lim_{x\\to a}f(x)=\\pm\\infty$. Ici $f(x)=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\ne2$ : la limite vaut $4$ (finie). Il y a une discontinuité effaçable (trou) en $x=2$, pas une asymptote. Si on prolonge $f$ en posant $f(2)=4$, la fonction devient continue. Contre-exemple d\'asymptote vraie : $g(x)=\\frac{1}{x-2}\\to\\pm\\infty$ en $x=2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6), b = rand(1, 4);
        return {
          statement: `Calculer $\\lim_{x\\to+\\infty}\\dfrac{${a}x+${b}}{x+1}$.`,
          answer: a,
          tolerance: 0,
          unit: '',
          hint: 'Divise numérateur et dénominateur par $x$.',
          solution: [`$\\frac{${a}x+${b}}{x+1}=\\frac{${a}+${b}/x}{1+1/x}\\to${a}$`]
        };
      }
    },
    probleme: {
      context: 'Le coût total de production de $x$ unités est $C(x)=\\frac{2x^2+100}{x}$ (en €, $x>0$).',
      tasks: [
        'Calculer le coût moyen $c(x)=C(x)/x$ et étudier sa limite quand $x\\to+\\infty$.',
        'Calculer $c\'(x)$ et trouver le minimum du coût moyen.',
        'Quelle quantité minimise le coût moyen, et quelle est sa valeur ?'
      ],
      solutions: [
        '$c(x)=\\frac{C(x)}{x}=\\frac{2x^2+100}{x^2}=2+\\frac{100}{x^2}\\to 2$ quand $x\\to+\\infty$.',
        '$c\'(x)=-\\frac{200}{x^3}<0$ pour tout $x>0$ : $c$ est décroissante, sans minimum fini.',
        'Le coût moyen tend vers $2$ €/unité mais ne l\'atteint jamais : produire le plus possible minimise $c$.'
      ],
      finalAnswer: '$c(x)\\to 2$ €/unité. Pas de minimum : plus on produit, plus le coût moyen se rapproche de $2$ €.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions d\'une variable réelle',
      duration: '40 min',
      questions: [
        {
          statement: 'Déterminer le domaine de définition de $f(x) = \\ln(3x - 6)$. Quelle est la borne inférieure du domaine ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$3x - 6 > 0 \\Rightarrow x > 2$. Le domaine est $]2\\,;\\,+\\infty[$. La borne inférieure (exclue) est $2$.'
        },
        {
          statement: 'La fonction $f(x) = \\dfrac{x^2 - 9}{x - 3}$ admet-elle une asymptote verticale en $x = 3$ ?',
          type: 'multiple-choice',
          options: ['Oui, car $f$ n\'est pas définie en $x = 3$', 'Non : $f(x) = x + 3$ pour $x \\neq 3$, c\'est un trou (discontinuité effaçable)', 'Oui, car $\\lim_{x \\to 3} f(x) = +\\infty$', 'Non, car $f(3) = 0$'],
          answer: 1,
          points: 2,
          correction: '$f(x) = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ pour $x \\neq 3$. Donc $\\lim_{x \\to 3} f(x) = 6$ (limite finie). Il n\'y a pas d\'asymptote verticale, mais une discontinuité effaçable (trou) en $x = 3$.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{5x^2 - 3x + 1}{2x^2 + x - 4}$.',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Les termes dominants sont $5x^2$ au numérateur et $2x^2$ au dénominateur. $\\lim_{x \\to +\\infty} \\dfrac{5x^2}{2x^2} = \\dfrac{5}{2} = 2{,}5$.'
        },
        {
          statement: 'Si $f\'(x) > 0$ sur $]a\\,;\\,b[$, la fonction $f$ est :',
          type: 'multiple-choice',
          options: ['Décroissante sur $]a\\,;\\,b[$', 'Croissante sur $]a\\,;\\,b[$', 'Constante sur $]a\\,;\\,b[$', 'Concave sur $]a\\,;\\,b[$'],
          answer: 1,
          points: 2,
          correction: 'Si la dérivée $f\'(x)$ est strictement positive sur un intervalle, la fonction est strictement croissante sur cet intervalle. C\'est le lien fondamental entre le signe de la dérivée et les variations.'
        },
        {
          statement: 'Soit $f(x) = \\dfrac{4x + 1}{x - 2}$. Calculer la valeur de l\'asymptote horizontale quand $x \\to +\\infty$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\lim_{x \\to +\\infty} \\dfrac{4x + 1}{x - 2} = \\lim_{x \\to +\\infty} \\dfrac{4 + 1/x}{1 - 2/x} = \\dfrac{4}{1} = 4$. L\'asymptote horizontale est $y = 4$.'
        }
      ]
    }
  }
);
