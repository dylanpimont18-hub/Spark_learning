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
    physics: 'Modélisation de grandeurs physiques : rendement d\'un convertisseur, réponse en fréquence, lois de saturation',
    cours: {
      intro: 'En BTS, l\'étude complète d\'une fonction est un outil de modélisation : une fonction de coût, une loi de transfert, une réponse impulsionnelle — chacune nécessite domaine, limites, variations et asymptotes.<br/><br/>Le domaine de définition est contraint par les dénominateurs ($\\neq 0$), les racines carrées ($\\geq 0$) et les logarithmes ($> 0$).<br/><br/>Les asymptotes décrivent le comportement aux extrêmes : asymptote verticale là où la fonction "explose", horizontale si elle se stabilise.<br/><br/>Attention : un point exclu du domaine ne génère pas toujours une asymptote verticale — si le numérateur s\'annule aussi, on obtient un "trou" (discontinuité effaçable) et non une asymptote.<br/><br/>La règle de L\'Hôpital lève les formes indéterminées $0/0$ ou $\\infty/\\infty$ en dérivant numérateur et dénominateur séparément — elle est correcte mais souvent inutile si on sait factoriser.',
      definitions: [
        { term: 'Domaine de définition $D_f$', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Exclu : les valeurs qui annulent un dénominateur, qui rendent un radicande négatif, ou un argument de logarithme $\\leq 0$.' },
        { term: 'Asymptote horizontale', def: 'Droite $y = L$ telle que $\\lim_{x \\to \\pm\\infty} f(x) = L$. La courbe s\'en rapproche indéfiniment sans la toucher (en général).' },
        { term: 'Asymptote verticale', def: 'Droite $x = a$ telle que $\\lim_{x \\to a} f(x) = \\pm\\infty$. La courbe "explose" au voisinage de $a$.' },
        { term: 'Discontinuité effaçable (trou)', def: 'Point $x = a$ exclu du domaine mais où la limite de $f$ est finie. En prolongeant $f$ par cette limite, on obtient une fonction continue. Ce n\'est PAS une asymptote verticale.' }
      ],
      method: {
        title: 'Étude complète d\'une fonction',
        steps: [
          '<strong>Domaine de définition</strong> : annuler les dénominateurs, poser les conditions de la racine ou du logarithme.<br/><br/><strong>Exemple :</strong> $f(x) = \\ln(3x - 6)$ → condition $3x - 6 > 0$, soit $x > 2$ → $D_f = ]2 ; +\\infty[$.',
          '<strong>Étude des limites</strong> : limites aux bornes du domaine (et en $\\pm\\infty$).<br/><br/><strong>Exemple :</strong> $f(x) = \\frac{2x+1}{x-3}$ → $\\lim_{x \\to +\\infty} f(x) = 2$ (AH) et $\\lim_{x \\to 3} f(x) = \\pm\\infty$ (AV en $x=3$).',
          '<strong>Tableau de variations</strong> : le signe de la dérivée $f\'$ donne directement les intervalles de croissance et de décroissance.<br/><br/><strong>Exemple :</strong> $f(x) = x^2 - 4x$ → $f\'(x) = 2x - 4 = 0$ en $x = 2$. $f\'(x) < 0$ pour $x < 2$ (décroissante), $f\'(x) > 0$ pour $x > 2$ (croissante). Minimum en $x = 2$ : $f(2) = -4$.',
          '<strong>Asymptotes</strong> : horizontale si $\\lim_{x\\to\\pm\\infty}f(x)=L$ ; verticale si $\\lim_{x\\to a}f(x)=\\pm\\infty$.<br/><br/><strong>Exemple :</strong> $f(x) = \\frac{x^2+1}{x} = x + \\frac{1}{x}$ → pas d\'AH, mais asymptote oblique $y = x$ (car $f(x) - x = 1/x \\to 0$).'
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
      diagram: {
        theme: 'maths',
        kicker: 'Exemple du cours — asymptote horizontale',
        title: 'Courbe du rendement $\\eta(x) = \\dfrac{100x}{x+5}$',
        description: 'Sur le domaine $]0\\,;\\,+\\infty[$, la courbe croît rapidement puis se rapproche de l\'asymptote horizontale $y=100$ sans jamais l\'atteindre.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="bts-fonctions-reelles-graph-title bts-fonctions-reelles-graph-desc">
            <title id="bts-fonctions-reelles-graph-title">Courbe de rendement avec asymptote horizontale</title>
            <desc id="bts-fonctions-reelles-graph-desc">La courbe de eta(x) = 100x/(x+5) part d'un point ouvert en x=0, croit sur tout le domaine et se rapproche de l'asymptote horizontale y=100 sans la toucher.</desc>
            <line class="grid-line" x1="52" y1="156.5" x2="324" y2="156.5"></line>
            <line class="grid-line" x1="52" y1="127.1" x2="324" y2="127.1"></line>
            <line class="grid-line" x1="52" y1="97.6" x2="324" y2="97.6"></line>
            <line class="grid-line" x1="52" y1="68.2" x2="324" y2="68.2"></line>
            <line class="grid-line" x1="106.4" y1="24" x2="106.4" y2="186"></line>
            <line class="grid-line" x1="160.8" y1="24" x2="160.8" y2="186"></line>
            <line class="grid-line" x1="215.2" y1="24" x2="215.2" y2="186"></line>
            <line class="grid-line" x1="269.6" y1="24" x2="269.6" y2="186"></line>
            <line class="grid-line" x1="324" y1="24" x2="324" y2="186"></line>
            <line class="axis" x1="52" y1="186" x2="332" y2="186"></line>
            <line class="axis" x1="52" y1="194" x2="52" y2="20"></line>
            <line class="guide-line" x1="52" y1="38.7" x2="332" y2="38.7"></line>
            <path class="curve-main" d="M52.0 186.0 L65.6 136.9 L79.2 112.4 L92.8 97.6 L106.4 87.8 L120.0 80.8 L133.6 75.5 L147.2 71.5 L160.8 68.2 L174.4 65.5 L188.0 63.3 L201.6 61.4 L215.2 59.8 L228.8 58.4 L242.4 57.1 L256.0 56.1 L269.6 55.1 L283.2 54.2 L296.8 53.5 L310.4 52.8 L324.0 52.1"></path>
            <line class="guide-line" x1="160.8" y1="68.2" x2="160.8" y2="186"></line>
            <line class="guide-line" x1="52" y1="68.2" x2="160.8" y2="68.2"></line>
            <circle class="plot-point-alt" cx="52" cy="186" r="5"></circle>
            <circle class="plot-point" cx="160.8" cy="68.2" r="6"></circle>
            <text class="annotation-label" x="150" y="30">y = 100 (asymptote)</text>
            <text class="annotation-label" x="164" y="60">η(20) = 80 %</text>
            <text class="annotation-label" x="60" y="70">η(x) = 100x / (x+5)</text>
            <text class="label-soft" x="58" y="178">x = 0 exclu</text>
            <text class="axis-label" x="336" y="190">x (A)</text>
            <text class="axis-label" x="58" y="20">η (%)</text>
            <text class="tick-label" x="48" y="203">0</text>
            <text class="tick-label" x="100" y="203">10</text>
            <text class="tick-label" x="155" y="203">20</text>
            <text class="tick-label" x="209" y="203">30</text>
            <text class="tick-label" x="264" y="203">40</text>
            <text class="tick-label" x="318" y="203">50</text>
            <text class="tick-label" x="30" y="160">20</text>
            <text class="tick-label" x="30" y="131">40</text>
            <text class="tick-label" x="30" y="101">60</text>
            <text class="tick-label" x="30" y="72">80</text>
            <text class="tick-label" x="24" y="42">100</text>
          </svg>
        `,
        notes: [
          'Le domaine est $]0\\,;\\,+\\infty[$ : la courbe part d\'un point ouvert en $x=0$ (cercle non rempli), valeur exclue du domaine.',
          'La dérivée $\\eta\'(x) = \\dfrac{500}{(x+5)^2} > 0$ pour tout $x>0$ : la fonction est strictement croissante sur tout le domaine.',
          'L\'asymptote horizontale $y=100$ (pointillés) montre que le rendement se rapproche de $100\\,\\%$ sans jamais l\'atteindre : par exemple $\\eta(20)=80\\,\\%$, encore loin de la saturation.'
        ],
        reading: 'La courbe illustre une saturation typique en électronique : le rendement croît vite au début, puis de plus en plus lentement, en restant toujours en dessous de l\'asymptote horizontale $y=100$.',
        caption: 'Rendement $\\eta(x)=\\dfrac{100x}{x+5}$ d\'un convertisseur : croissance sur $]0\\,;\\,+\\infty[$ vers l\'asymptote horizontale $y=100$.'
      },
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

        const ctx = pick([
          {
            build: () => `Le <strong>rendement</strong> d'un convertisseur électronique en fonction de la charge $x$ (en A) est modélisé par $\\eta(x)=\\dfrac{${a}x+${b}}{x+1}$.<br/><br/>Calcule $\\lim_{x\\to+\\infty}\\eta(x)$ pour connaître la valeur de <strong>saturation</strong> du rendement.`
          },
          {
            build: () => `La <strong>vitesse</strong> d'un mobile freiné par les frottements, en fonction du temps $x$ (en s), est modélisée par $v(x)=\\dfrac{${a}x+${b}}{x+1}$.<br/><br/>Calcule $\\lim_{x\\to+\\infty}v(x)$ pour trouver sa <strong>vitesse limite</strong>.`
          },
          {
            build: () => `La <strong>concentration</strong> d'un gaz évacué d'une cuve industrielle, en fonction du temps de purge $x$ (en min), suit la loi $C(x)=\\dfrac{${a}x+${b}}{x+1}$.<br/><br/>Calcule $\\lim_{x\\to+\\infty}C(x)$ pour connaître la <strong>concentration résiduelle</strong>.`
          },
          {
            build: () => `Le <strong>coût moyen</strong> de fabrication d'une pièce, en fonction du nombre d'unités produites $x$, est donné par $c(x)=\\dfrac{${a}x+${b}}{x+1}$ (en €).<br/><br/>Calcule $\\lim_{x\\to+\\infty}c(x)$ pour estimer le coût moyen en <strong>grande série</strong>.`
          },
          {
            build: () => `La <strong>température</strong> d'un four industriel, en fonction du temps de chauffe $x$ (en min), est modélisée par $T(x)=\\dfrac{${a}x+${b}}{x+1}$ (en centaines de °C).<br/><br/>Calcule $\\lim_{x\\to+\\infty}T(x)$ pour trouver la <strong>température de consigne</strong> atteinte.`
          },
          {
            build: () => `Le <strong>débit</strong> d'une pompe hydraulique, en fonction de sa vitesse de rotation $x$ (en centaines de tr/min), est modélisé par $D(x)=\\dfrac{${a}x+${b}}{x+1}$ (en L/min).<br/><br/>Calcule $\\lim_{x\\to+\\infty}D(x)$ pour connaître le <strong>débit de saturation</strong> de la pompe.`
          },
          {
            build: () => `La <strong>tension de sortie</strong> d'un régulateur, en fonction du courant de charge $x$ (en A), suit la loi $U(x)=\\dfrac{${a}x+${b}}{x+1}$ (en V).<br/><br/>Calcule $\\lim_{x\\to+\\infty}U(x)$ pour connaître la tension de sortie en <strong>surcharge</strong>.`
          }
        ]);

        return {
          statement: ctx.build(),
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
