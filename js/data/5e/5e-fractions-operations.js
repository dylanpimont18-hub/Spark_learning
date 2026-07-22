/* =========================================================
   Spark Learning – data/5e/5e-fractions-operations.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-fractions-operations',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Opérations sur les fractions',
    subtitle: 'Addition, soustraction, comparaison',
    keywords: ['Fraction', 'Dénominateur commun', 'PPCM', 'Comparer', 'Réduire'],
    physics: false,

    cours: {
      intro: 'Additionner des fractions nécessite un <strong>dénominateur commun</strong> pour la même raison qu\'on ne peut pas additionner des pommes et des oranges directement : $\\dfrac{1}{3} + \\dfrac{1}{4}$ ne vaut pas $\\dfrac{2}{7}$ !<br/><br/>' +
        'On cherche le <strong>PPCM</strong> des dénominateurs (le plus petit multiple commun), puis on amplifie chaque fraction pour les amener à ce dénominateur. Le PPCM garde les nombres aussi petits que possible et évite les simplifications ultérieures.<br/><br/>' +
        'Pour la <strong>multiplication</strong>, c\'est plus simple : on multiplie directement numérateurs entre eux et dénominateurs entre eux, sans chercher de dénominateur commun. Pour la <strong>division</strong>, on multiplie par l\'inverse du diviseur.<br/><br/>' +
        'Ces opérations sont fondamentales pour manipuler les fractions molaires, les rapports stœchiométriques et les probabilités.',
      definitions: [
        { term: 'Fraction', def: 'Nombre de la forme $\\dfrac{a}{b}$ avec $b \\neq 0$. $a$ est le numérateur, $b$ le dénominateur.' },
        { term: 'PPCM', def: 'Plus Petit Commun Multiple de deux nombres. PPCM(3, 4) = 12. C\'est le plus petit dénominateur commun.' },
        { term: 'Fractions équivalentes', def: 'Fractions représentant le même nombre : $\\dfrac{2}{3} = \\dfrac{4}{6} = \\dfrac{6}{9}$. On multiplie numérateur et dénominateur par le même facteur.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun (sauf 1). Ex : $\\dfrac{7}{12}$.' }
      ],
      example: {
        statement: 'Calculer $\\dfrac{2}{3} + \\dfrac{3}{4}$.',
        steps: [
          'PPCM(3, 4) = 12.',
          'Conversion : $\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$.',
          'Addition des numérateurs : $\\dfrac{8 + 9}{12} = \\dfrac{17}{12}$.'
        ],
        answer: '$\\dfrac{17}{12}$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Addition de fractions',
        title: 'De 2/3 + 3/4 aux douzièmes : visualiser 17/12',
        description: 'L\'exemple du cours : $\\dfrac{2}{3} + \\dfrac{3}{4}$. Ramenées au dénominateur commun $12$ (PPCM de $3$ et $4$), les deux fractions deviennent $\\dfrac{8}{12}$ et $\\dfrac{9}{12}$, dont la somme $\\dfrac{17}{12}$ dépasse un entier.',
        svg: `
          <svg viewBox="0 0 460 310" role="img" aria-labelledby="frac-op-title frac-op-desc">
            <title id="frac-op-title">Addition de fractions par bandes</title>
            <desc id="frac-op-desc">Bandes representant deux tiers, trois quarts, leur conversion en douziemes huit sur douze et neuf sur douze, puis la somme dix-sept douziemes decomposee en un entier plus cinq douziemes.</desc>
            <text class="annotation-label" x="90" y="18">2/3</text>
            <rect class="frame-line" x="90" y="24" width="240" height="24" fill="none"></rect>
            <rect x="90" y="24" width="160" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="170" y1="24" x2="170" y2="48"></line>
            <line class="grid-line" x1="250" y1="24" x2="250" y2="48"></line>
            <text class="tick-label" x="84" y="58">0</text>
            <text class="tick-label" x="322" y="58">1</text>

            <text class="annotation-label" x="90" y="64">3/4</text>
            <rect class="frame-line" x="90" y="70" width="240" height="24" fill="none"></rect>
            <rect x="90" y="70" width="180" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="150" y1="70" x2="150" y2="94"></line>
            <line class="grid-line" x1="210" y1="70" x2="210" y2="94"></line>
            <line class="grid-line" x1="270" y1="70" x2="270" y2="94"></line>
            <text class="tick-label" x="84" y="104">0</text>
            <text class="tick-label" x="322" y="104">1</text>

            <text class="label-soft" x="90" y="118">Dénominateur commun : douzièmes (PPCM(3,4) = 12)</text>

            <text class="annotation-label" x="90" y="132">8/12 (= 2/3 converti)</text>
            <rect class="frame-line" x="90" y="138" width="240" height="24" fill="none"></rect>
            <rect x="90" y="138" width="160" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="110" y1="138" x2="110" y2="162"></line>
            <line class="grid-line" x1="130" y1="138" x2="130" y2="162"></line>
            <line class="grid-line" x1="150" y1="138" x2="150" y2="162"></line>
            <line class="grid-line" x1="170" y1="138" x2="170" y2="162"></line>
            <line class="grid-line" x1="190" y1="138" x2="190" y2="162"></line>
            <line class="grid-line" x1="210" y1="138" x2="210" y2="162"></line>
            <line class="grid-line" x1="230" y1="138" x2="230" y2="162"></line>
            <line class="grid-line" x1="250" y1="138" x2="250" y2="162"></line>
            <line class="grid-line" x1="270" y1="138" x2="270" y2="162"></line>
            <line class="grid-line" x1="290" y1="138" x2="290" y2="162"></line>
            <line class="grid-line" x1="310" y1="138" x2="310" y2="162"></line>
            <text class="tick-label" x="84" y="172">0</text>
            <text class="tick-label" x="322" y="172">1</text>

            <text class="annotation-label" x="90" y="178">9/12 (= 3/4 converti)</text>
            <rect class="frame-line" x="90" y="184" width="240" height="24" fill="none"></rect>
            <rect x="90" y="184" width="180" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="110" y1="184" x2="110" y2="208"></line>
            <line class="grid-line" x1="130" y1="184" x2="130" y2="208"></line>
            <line class="grid-line" x1="150" y1="184" x2="150" y2="208"></line>
            <line class="grid-line" x1="170" y1="184" x2="170" y2="208"></line>
            <line class="grid-line" x1="190" y1="184" x2="190" y2="208"></line>
            <line class="grid-line" x1="210" y1="184" x2="210" y2="208"></line>
            <line class="grid-line" x1="230" y1="184" x2="230" y2="208"></line>
            <line class="grid-line" x1="250" y1="184" x2="250" y2="208"></line>
            <line class="grid-line" x1="270" y1="184" x2="270" y2="208"></line>
            <line class="grid-line" x1="290" y1="184" x2="290" y2="208"></line>
            <line class="grid-line" x1="310" y1="184" x2="310" y2="208"></line>
            <text class="tick-label" x="84" y="218">0</text>
            <text class="tick-label" x="322" y="218">1</text>

            <text class="label-soft" x="90" y="232">Somme : 8/12 + 9/12 = 17/12</text>

            <text class="annotation-label" x="90" y="246">17/12 = 1 entier + 5/12</text>
            <line class="guide-line" x1="330" y1="20" x2="330" y2="280"></line>
            <rect class="frame-line" x="90" y="252" width="240" height="24" fill="none"></rect>
            <rect x="90" y="252" width="240" height="24" fill="var(--diagram-accent)"></rect>
            <line class="grid-line" x1="110" y1="252" x2="110" y2="276"></line>
            <line class="grid-line" x1="130" y1="252" x2="130" y2="276"></line>
            <line class="grid-line" x1="150" y1="252" x2="150" y2="276"></line>
            <line class="grid-line" x1="170" y1="252" x2="170" y2="276"></line>
            <line class="grid-line" x1="190" y1="252" x2="190" y2="276"></line>
            <line class="grid-line" x1="210" y1="252" x2="210" y2="276"></line>
            <line class="grid-line" x1="230" y1="252" x2="230" y2="276"></line>
            <line class="grid-line" x1="250" y1="252" x2="250" y2="276"></line>
            <line class="grid-line" x1="270" y1="252" x2="270" y2="276"></line>
            <line class="grid-line" x1="290" y1="252" x2="290" y2="276"></line>
            <line class="grid-line" x1="310" y1="252" x2="310" y2="276"></line>
            <text class="annotation-label" x="326" y="270">+</text>
            <rect class="frame-line" x="340" y="252" width="100" height="24" fill="none"></rect>
            <rect x="340" y="252" width="100" height="24" fill="color-mix(in srgb, var(--diagram-accent) 55%, white)"></rect>
            <line class="grid-line" x1="360" y1="252" x2="360" y2="276"></line>
            <line class="grid-line" x1="380" y1="252" x2="380" y2="276"></line>
            <line class="grid-line" x1="400" y1="252" x2="400" y2="276"></line>
            <line class="grid-line" x1="420" y1="252" x2="420" y2="276"></line>
            <text class="tick-label" x="196" y="292">1 entier (12/12)</text>
            <text class="tick-label" x="374" y="292">5/12</text>
          </svg>
        `,
        notes: [
          'Les deux premières bandes montrent $\\dfrac{2}{3}$ et $\\dfrac{3}{4}$ avec leur découpage naturel (en tiers, puis en quarts).',
          'En redécoupant les deux bandes en douzièmes, on voit que $\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$ : même longueur, juste plus de parts.',
          'La ligne verticale pointillée marque la valeur $1$ (un entier) : la bande finale $\\dfrac{17}{12}$ la dépasse, ce qui correspond à $1$ entier plus $\\dfrac{5}{12}$.'
        ],
        reading: 'Une fois les bandes redécoupées au même dénominateur, on additionne simplement les parts coloriées : $8 + 9 = 17$ douzièmes.',
        caption: 'Bandes fractionnaires pour $\\dfrac{2}{3} + \\dfrac{3}{4} = \\dfrac{8}{12} + \\dfrac{9}{12} = \\dfrac{17}{12} = 1\\dfrac{5}{12}$.'
      },
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Trouver le PPCM</strong> des deux dénominateurs (le plus petit multiple commun).',
          '<strong>Convertir</strong> chaque fraction au dénominateur commun en multipliant numérateur et dénominateur par le même facteur.',
          '<strong>Additionner/Soustraire</strong> les numérateurs ; conserver le dénominateur commun.',
          '<strong>Simplifier</strong> la fraction obtenue si possible (diviser numérateur et dénominateur par leur PGCD).'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a + c}{b}$ (même dénominateur)',
        '$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a \\times d + c \\times b}{b \\times d}$ (dénominateurs différents)',
        'Comparer : $\\dfrac{a}{b}$ et $\\dfrac{c}{d}$ → réduire au même dénominateur puis comparer les numérateurs'
      ],
      recap: [
        'Pour additionner des fractions, il faut ABSOLUMENT un dénominateur commun.',
        'On ne peut JAMAIS additionner les dénominateurs : $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$.',
        'Pour multiplier : numérateurs entre eux, dénominateurs entre eux.',
        'Diviser par une fraction = multiplier par son inverse.'
      ],
      piege: 'Piège fréquent : additionner les dénominateurs ! $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$. Il faut réduire au dénominateur commun $12$ : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
    },

    quiz: [
      {
        q: 'Combien vaut $\\dfrac{1}{3} + \\dfrac{1}{4}$ ?',
        options: ['$\\dfrac{2}{7}$', '$\\dfrac{7}{12}$', '$\\dfrac{5}{12}$', '$\\dfrac{1}{12}$'],
        answer: 1,
        correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Donc $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Combien vaut $\\dfrac{3}{4} - \\dfrac{1}{6}$ ?',
        options: ['$\\dfrac{2}{2}$', '$\\dfrac{7}{12}$', '$\\dfrac{1}{3}$', '$\\dfrac{8}{24}$'],
        answer: 1,
        correction: 'Dénominateur commun : $12$. $\\dfrac{3}{4} = \\dfrac{9}{12}$ et $\\dfrac{1}{6} = \\dfrac{2}{12}$. Donc $\\dfrac{9}{12} - \\dfrac{2}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Un élève calcule $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{7}$. Quelle règle a-t-il violée ?',
        options: [
          'Il a bien calculé : $1+1=2$ et $3+4=7$.',
          'On ne peut pas additionner les numérateurs ET les dénominateurs séparément. Il faut un dénominateur commun : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.',
          'Il aurait dû multiplier : $\\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12}$.',
          'La bonne réponse est $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{12} = \\dfrac{1}{6}$.'
        ],
        answer: 1,
        correction: 'L\'erreur classique ! On ne peut pas additionner numérateurs et dénominateurs séparément — les dénominateurs représentent des unités différentes (tiers ≠ quarts). Le bon calcul : PPCM(3, 4) = 12, donc $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$, et la somme est $\\dfrac{7}{12}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const denomPairs = [[2,3],[3,4],[4,5],[2,5],[3,5],[4,3],[2,7],[3,7],[5,6]];
        const [b, d] = pick(denomPairs);
        const a = rand(1, b - 1);
        const c = rand(1, d - 1);
        function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
        const lcm = (b * d) / gcd(b, d);
        const num = a * (lcm / b) + c * (lcm / d);
        const g = gcd(num, lcm);
        const answerNum = num / g;
        const answerDen = lcm / g;
        const answer = answerNum / answerDen;

        const ctx = pick([
          {
            intro: `Pour une recette de crêpes, il faut $\\dfrac{${a}}{${b}}$ de litre de lait et $\\dfrac{${c}}{${d}}$ de litre de crème.<br/>Quelle <strong>quantité totale</strong> de liquide faut-il ?`,
            hint: `Trouve le dénominateur commun de $${b}$ et $${d}$ pour additionner ces fractions de litre.`
          },
          {
            intro: `Un terrain est partagé : $\\dfrac{${a}}{${b}}$ est un jardin et $\\dfrac{${c}}{${d}}$ est une terrasse.<br/>Quelle <strong>fraction totale</strong> du terrain ces deux espaces occupent-ils ?`,
            hint: `Pour additionner les fractions, il faut le même dénominateur. Le PPCM de $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Noa a couru pendant $\\dfrac{${a}}{${b}}$ d'heure le matin et $\\dfrac{${c}}{${d}}$ d'heure l'après-midi.<br/>Pendant combien de temps a-t-il couru <strong>au total</strong> ?`,
            hint: `Convertis les deux fractions d'heure au même dénominateur ($${lcm}$) pour les additionner.`
          },
          {
            intro: `Sur un trajet, Léa a parcouru $\\dfrac{${a}}{${b}}$ du chemin à pied et $\\dfrac{${c}}{${d}}$ du chemin à vélo.<br/>Quelle <strong>fraction du trajet</strong> a-t-elle déjà parcourue ?`,
            hint: `Même dénominateur nécessaire ! Le PPCM de $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Pour un projet d'arts plastiques, Emma utilise $\\dfrac{${a}}{${b}}$ d'un tube de peinture bleue et $\\dfrac{${c}}{${d}}$ d'un tube de peinture jaune.<br/>Quelle <strong>quantité totale</strong> de peinture a-t-elle utilisée (en tubes) ?`,
            hint: `Additionne les deux fractions : trouve le dénominateur commun $${lcm}$.`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>Calcule $\\dfrac{${a}}{${b}} + \\dfrac{${c}}{${d}}$ et donne le résultat sous forme décimale arrondie à $0{,}01$.`,
          answer: parseFloat(answer.toFixed(2)),
          tolerance: 0.01,
          unit: '',
          hint: ctx.hint,
          solution: [
            `Dénominateur commun : $${lcm}$.`,
            `$\\dfrac{${a}}{${b}} = \\dfrac{${a * (lcm / b)}}{${lcm}}$ et $\\dfrac{${c}}{${d}} = \\dfrac{${c * (lcm / d)}}{${lcm}}$.`,
            `Somme : $\\dfrac{${num}}{${lcm}}${g > 1 ? ` = \\dfrac{${answerNum}}{${answerDen}}` : ''} \\approx ${parseFloat(answer.toFixed(2)).toString().replace('.', '{,}')}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une recette de gâteau demande $\\dfrac{3}{4}$ de tasse de farine complète et $\\dfrac{2}{3}$ de tasse de farine blanche.',
      tasks: [
        'Quelle est la quantité totale de farine utilisée (en tasses) ?',
        'Si on double la recette, quelle quantité de farine faut-il au total ?',
        'La boîte de farine contient $5$ tasses. Combien de recettes peut-on faire avec cette boîte ?'
      ],
      solutions: [
        '$\\dfrac{3}{4} + \\dfrac{2}{3} = \\dfrac{9}{12} + \\dfrac{8}{12} = \\dfrac{17}{12}$ tasses $\\approx 1{,}42$ tasses.',
        'Double : $2 \\times \\dfrac{17}{12} = \\dfrac{17}{6} \\approx 2{,}83$ tasses.',
        '$5 \\div \\dfrac{17}{12} = 5 \\times \\dfrac{12}{17} = \\dfrac{60}{17} \\approx 3{,}5$. On peut faire $3$ recettes complètes.'
      ],
      finalAnswer: 'Chaque recette utilise $\\dfrac{17}{12}$ tasses de farine ; on peut faire $3$ recettes complètes avec $5$ tasses.'
    },

    evaluation: {
      title: 'Évaluation — Opérations sur les fractions',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $\\dfrac{2}{5} + \\dfrac{1}{3}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.73,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $15$. $\\dfrac{2}{5} = \\dfrac{6}{15}$ et $\\dfrac{1}{3} = \\dfrac{5}{15}$. Somme : $\\dfrac{6+5}{15} = \\dfrac{11}{15} \\approx 0{,}73$.'
        },
        {
          statement: 'Calculer $\\dfrac{5}{6} - \\dfrac{1}{4}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.58,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $12$. $\\dfrac{5}{6} = \\dfrac{10}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Différence : $\\dfrac{10-3}{12} = \\dfrac{7}{12} \\approx 0{,}58$.'
        },
        {
          statement: 'Laquelle de ces égalités est correcte ?',
          type: 'multiple-choice',
          options: [
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{2}{7}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{7}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{3}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{4}{12}$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{4} = \\dfrac{3}{12}$ et $\\dfrac{1}{3} = \\dfrac{4}{12}$. Somme : $\\dfrac{3+4}{12} = \\dfrac{7}{12}$.'
        },
        {
          statement: 'Quelle fraction est la plus grande : $\\dfrac{3}{5}$ ou $\\dfrac{5}{8}$ ? Donner la valeur décimale de la plus grande, arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.63,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun $40$ : $\\dfrac{3}{5} = \\dfrac{24}{40}$ et $\\dfrac{5}{8} = \\dfrac{25}{40}$. Comme $25 > 24$, $\\dfrac{5}{8} > \\dfrac{3}{5}$. Valeur décimale : $\\dfrac{5}{8} = 0{,}625 \\approx 0{,}63$.'
        },
        {
          statement: 'Calculer $\\dfrac{3}{4} + \\dfrac{1}{4} - \\dfrac{1}{2}$. Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{3}{4} + \\dfrac{1}{4} = \\dfrac{4}{4} = 1$. Puis $1 - \\dfrac{1}{2} = \\dfrac{1}{2} = 0{,}5$.'
        }
      ]
    }
  });
