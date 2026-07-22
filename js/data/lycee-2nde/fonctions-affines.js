/* =========================================================
   Spark Learning – data/lycee-2nde/fonctions-affines.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'fonctions-affines',
    level: 2, subject: 'maths',
    icon: '📈',
    title: 'Fonctions Affines et Linéaires',
    subtitle: 'Droite y = ax + b, pente, modélisation',
    keywords: ['Droite', 'Pente', 'Coefficient directeur', 'Modélisation'],
    physics: 'Loi de Beer-Lambert, gaz parfaits, étalonnage',

    cours: {
      intro: 'Une fonction affine $f(x) = ax + b$ est représentée par une droite dans le plan. Le coefficient $a$ (pente ou coefficient directeur) indique de combien $f(x)$ varie quand $x$ augmente de $1$. Le terme $b$ (ordonnée à l\'origine) est la valeur de $f(0)$, c\'est-à-dire l\'ordonnée du point d\'intersection avec l\'axe vertical. Si $b = 0$, la droite passe par l\'origine et la relation est une proportionnalité directe. En sciences, les lois affines et linéaires sont omniprésentes : loi de Beer-Lambert ($A = \\varepsilon l c$), loi d\'Ohm ($U = RI$), étalonnages de mesure. La pente porte les unités du rapport $\\Delta y / \\Delta x$ — son interprétation physique est toujours à expliciter.',
      definitions: [
        { term: 'Fonction affine', def: 'Fonction de la forme $f(x) = ax + b$ dont la représentation graphique est une droite.' },
        { term: 'Coefficient directeur', def: 'Le nombre $a$ dans $y = ax + b$. Il mesure la variation de $y$ quand $x$ augmente de $1$ : $a = \\dfrac{\\Delta y}{\\Delta x}$.' },
        { term: 'Ordonnée à l\'origine', def: 'Le nombre $b$ dans $y = ax + b$. C\'est la valeur de $y$ quand $x = 0$, soit le point $(0 ; b)$ sur l\'axe des ordonnées.' },
        { term: 'Fonction linéaire', def: 'Cas particulier $f(x) = ax$ ($b = 0$). La droite passe par l\'origine : il y a proportionnalité entre $x$ et $y$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la forme : $y = ax + b$ (affine) ou $y = ax$ (linéaire, passe par l\'origine). La pente $a$ est le "coefficient directeur". <strong>Exemple :</strong> $y = 3x - 2$ est affine ($a = 3$, $b = -2$) ; $y = 5x$ est linéaire ($a = 5$, $b = 0$).',
          'Calculer la pente à partir de deux points $(x_1, y_1)$ et $(x_2, y_2)$ : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$. <strong>Exemple :</strong> $A(1 ; 4)$ et $B(3 ; 10)$ → $a = \\dfrac{10 - 4}{3 - 1} = \\dfrac{6}{2} = 3$.',
          'Déterminer $b$ (ordonnée à l\'origine) : $b = y_1 - a \\cdot x_1$. En physique, $b$ représente souvent une valeur initiale ou un biais de mesure. <strong>Exemple :</strong> Avec $a = 3$ et le point $(1 ; 4)$ : $b = 4 - 3 \\times 1 = 1$. Donc $y = 3x + 1$.'
        ]
      },
      example: {
        statement: 'Lors d\'un étalonnage en spectrophotométrie, on mesure $A = 0{,}25$ pour $c = 1{,}0 \\times 10^{-3}$ mol/L et $A = 0{,}75$ pour $c = 3{,}0 \\times 10^{-3}$ mol/L ($l = 1$ cm). Déterminer la relation $A = f(c)$.',
        steps: [
          'La loi de Beer-Lambert est linéaire ($A = \\varepsilon l c$, passe par l\'origine), donc $b = 0$.',
          'Calculer la pente : $\\varepsilon l = \\dfrac{A_2 - A_1}{c_2 - c_1} = \\dfrac{0{,}75 - 0{,}25}{3{,}0 \\times 10^{-3} - 1{,}0 \\times 10^{-3}} = \\dfrac{0{,}50}{2{,}0 \\times 10^{-3}} = 250$ L·mol⁻¹·cm⁻¹.',
          'Vérification : $A = 250 \\times 1{,}0 \\times 10^{-3} = 0{,}25$ ✓'
        ],
        answer: '$A = 250 \\cdot c$ avec $\\varepsilon l = 250$ L·mol⁻¹·cm⁻¹.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Pente et ordonnée à l\'origine',
        title: 'Tracer la droite $y = 3x + 1$ à partir de deux points',
        description: 'Reconstruction de l\'exemple du cours : $A(1 ; 4)$ et $B(3 ; 10)$ donnent le coefficient directeur $a = 3$, puis $b = 1$.',
        svg: `
          <svg viewBox="0 0 360 260" role="img" aria-labelledby="affine-diagram-title affine-diagram-desc">
            <title id="affine-diagram-title">Droite y = 3x + 1</title>
            <desc id="affine-diagram-desc">Repere avec la droite y = 3x + 1, passant par les points A(1;4) et B(3;10), le triangle de pente delta x = 2, delta y = 6, et le point (0;1) marquant l'ordonnee a l'origine.</desc>

            <line class="grid-line" x1="10" y1="220" x2="10" y2="60"></line>
            <line class="grid-line" x1="60" y1="220" x2="60" y2="60"></line>
            <line class="grid-line" x1="110" y1="220" x2="110" y2="60"></line>
            <line class="grid-line" x1="160" y1="220" x2="160" y2="60"></line>
            <line class="grid-line" x1="210" y1="220" x2="210" y2="60"></line>
            <line class="grid-line" x1="260" y1="220" x2="260" y2="60"></line>
            <line class="grid-line" x1="10" y1="220" x2="260" y2="220"></line>
            <line class="grid-line" x1="10" y1="188" x2="260" y2="188"></line>
            <line class="grid-line" x1="10" y1="156" x2="260" y2="156"></line>
            <line class="grid-line" x1="10" y1="124" x2="260" y2="124"></line>
            <line class="grid-line" x1="10" y1="92" x2="260" y2="92"></line>
            <line class="grid-line" x1="10" y1="60" x2="260" y2="60"></line>

            <line class="axis" x1="10" y1="220" x2="290" y2="220"></line>
            <line class="axis" x1="60" y1="236" x2="60" y2="20"></line>
            <text class="axis-label" x="294" y="224">x</text>
            <text class="axis-label" x="66" y="16">y</text>

            <text class="tick-label" x="10" y="234" text-anchor="middle">-1</text>
            <text class="tick-label" x="60" y="234" text-anchor="middle">0</text>
            <text class="tick-label" x="110" y="234" text-anchor="middle">1</text>
            <text class="tick-label" x="160" y="234" text-anchor="middle">2</text>
            <text class="tick-label" x="210" y="234" text-anchor="middle">3</text>
            <text class="tick-label" x="260" y="234" text-anchor="middle">4</text>

            <text class="tick-label" x="48" y="224" text-anchor="end">0</text>
            <text class="tick-label" x="48" y="192" text-anchor="end">2</text>
            <text class="tick-label" x="48" y="160" text-anchor="end">4</text>
            <text class="tick-label" x="48" y="128" text-anchor="end">6</text>
            <text class="tick-label" x="48" y="96" text-anchor="end">8</text>
            <text class="tick-label" x="48" y="64" text-anchor="end">10</text>

            <line class="guide-line" x1="110" y1="156" x2="210" y2="156"></line>
            <line class="guide-line" x1="210" y1="156" x2="210" y2="60"></line>
            <text class="annotation-label" x="160" y="172" text-anchor="middle">Δx = 2</text>
            <text class="annotation-label" x="216" y="112">Δy = 6</text>

            <line class="curve-main" x1="35" y1="228" x2="240" y2="31"></line>
            <text class="annotation-label" x="150" y="82">y = 3x + 1</text>

            <circle class="plot-point" cx="60" cy="204" r="4"></circle>
            <text class="annotation-label" x="66" y="200">(0 ; 1)</text>
            <circle class="plot-point" cx="110" cy="156" r="4"></circle>
            <text class="annotation-label" x="70" y="146">A(1 ; 4)</text>
            <circle class="plot-point" cx="210" cy="60" r="4"></circle>
            <text class="annotation-label" x="214" y="50">B(3 ; 10)</text>
          </svg>
        `,
        notes: [
          'Le point $(0 ; 1)$ marque l\'ordonnée à l\'origine $b = 1$ : c\'est là que la droite coupe l\'axe des $y$.',
          'Le triangle de pente relie $A(1 ; 4)$ à $B(3 ; 10)$ : $\\Delta x = 2$ et $\\Delta y = 6$, donc $a = \\Delta y / \\Delta x = 3$.',
          'Plus $a$ est grand, plus la droite est pentue : ici $a = 3$ signifie que $y$ augmente de $3$ à chaque fois que $x$ augmente de $1$.'
        ],
        reading: 'Repère la pente en comptant le déplacement horizontal ($\\Delta x$) puis vertical ($\\Delta y$) entre deux points de la droite ; leur rapport donne $a$.',
        caption: 'Droite $y = 3x + 1$, reconstruite à partir des points $A(1 ; 4)$ et $B(3 ; 10)$ de l\'exemple du cours.'
      },
      formulas: [
        '$y = ax + b$ (fonction affine)',
        '$a = \\dfrac{y_2 - y_1}{x_2 - x_1}$ (pente)',
        '$b = y - ax$ (ordonnée à l\'origine)',
        'Beer-Lambert : $A = \\varepsilon \\cdot l \\cdot c$ (droite passant par l\'origine)'
      ],
      recap: [
        'Une fonction affine $y = ax + b$ est représentée par une droite ; $a$ est la pente, $b$ l\'ordonnée à l\'origine.',
        'Si $b = 0$, la droite passe par l\'origine (proportionnalité directe / fonction linéaire).',
        'Deux points suffisent pour déterminer l\'équation d\'une droite : calculer $a$, puis $b$.',
        'En sciences, la pente a des unités physiques ($\\Delta y / \\Delta x$) qu\'il faut toujours interpréter.'
      ],
      piege: 'Ne pas confondre pente et valeur ! Sur un graphe A = f(c) (Beer-Lambert), la pente est $\\varepsilon l$ (coefficient d\'extinction × trajet optique). La concentration inconnue se lit en faisant $c = A / (\\varepsilon l)$, pas en lisant directement la pente.'
    },

    quiz: [
      {
        q: 'Un élève dit : « dans $y = -3x + 2$, la pente est $2$ car c\'est le terme qui varie avec $x$ ». Quelle est son erreur ?',
        options: [
          'La pente est le coefficient de $x$, ici $-3$. Le terme $2$ est l\'ordonnée à l\'origine (valeur quand $x = 0$)',
          'L\'élève a raison, la pente est $2$',
          'La pente est $-3/2$',
          'Il n\'y a pas de pente définie pour une fonction affine'
        ],
        answer: 0,
        correction: 'Dans $y = ax + b$, $a$ est toujours la pente (coefficient devant $x$). Ici $a = -3$ (pente négative → droite décroissante) et $b = 2$ (ordonnée à l\'origine, constante). Quand $x$ varie de $1$, $y$ varie de $-3$ — pas de $2$.'
      },
      {
        q: 'La droite passe par $(0 ; 4)$ et a une pente de $-2$. Son équation est :',
        options: ['$y = -2x$', '$y = 4x - 2$', '$y = -2x + 4$', '$y = 2x + 4$'],
        answer: 2,
        correction: 'La droite passe par $(0 ; 4)$ donc $b = 4$. La pente est $a = -2$. L\'équation est $y = -2x + 4$.'
      },
      {
        q: 'La loi de Beer-Lambert donne $A = 0{,}8$ pour $c = 4 \\times 10^{-3}$ mol/L et $l = 1$ cm. Quelle est la valeur de $\\varepsilon$ ?',
        options: [
          '$\\varepsilon = 200$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 3200$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 0{,}2$ L·mol⁻¹·cm⁻¹',
          '$\\varepsilon = 800$ L·mol⁻¹·cm⁻¹'
        ],
        answer: 0,
        correction: '$A = \\varepsilon l c \\Rightarrow \\varepsilon = \\frac{A}{lc} = \\frac{0{,}8}{1 \\times 4 \\times 10^{-3}} = \\frac{0{,}8}{0{,}004} = 200$ L·mol⁻¹·cm⁻¹.'
      },
      {
        q: 'La température d\'un four suit la loi $T(t) = 15t + 20$ ($T$ en °C, $t$ en min). Un élève dit « après $10$ min, la température a augmenté de $20$°C ». A-t-il raison ?',
        options: [
          'Non : en $10$ min, $T$ augmente de $15 \\times 10 = 150$°C. Le $20$ est la température initiale, pas la hausse',
          'Oui : $T(10) = 20$ car $b = 20$',
          'Non : l\'augmentation est de $15$°C seulement',
          'Oui : la pente est $20$'
        ],
        answer: 0,
        correction: 'La pente est $a = 15$ : la température augmente de $15$°C par minute. En $10$ min, l\'augmentation est $15 \\times 10 = 150$°C. Le terme $b = 20$ est la température initiale ($t = 0$), pas une variation. Attention à ne pas confondre pente et ordonnée à l\'origine !'
      },
      {
        q: 'Deux droites ont pour équations $y = 2x + 3$ et $y = -0{,}5x + 3$. Elles passent par le même point. Lequel ?',
        options: [
          '$(0 ; 3)$ — même ordonnée à l\'origine',
          '$(3 ; 0)$ — même abscisse à l\'origine',
          '$(1 ; 5)$',
          'Elles ne se croisent pas car $b_1 = b_2$'
        ],
        answer: 0,
        correction: 'Les deux droites ont la même ordonnée à l\'origine $b = 3$, donc elles passent toutes les deux par $(0 ; 3)$. Des pentes différentes ($2 \\neq -0{,}5$) garantissent qu\'elles ne sont pas parallèles et se croisent bien en ce point. Attention : même $b$ ne veut pas dire parallèles !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un réservoir se remplit d\'eau', xUnit: 'min', yUnit: 'L', xName: 't', yName: 'V' },
          { intro: 'La température d\'un liquide chauffé évolue', xUnit: 'min', yUnit: '°C', xName: 't', yName: 'T' },
          { intro: 'Le prix d\'un trajet en taxi est modélisé par', xUnit: 'km', yUnit: '€', xName: 'd', yName: 'C' },
          { intro: 'L\'altitude d\'un randonneur varie selon', xUnit: 'km', yUnit: 'm', xName: 'x', yName: 'h' }
        ];
        const ctx = pick(contexts);
        const a = pick([2, 3, 4, 5, -2, -3]);
        const b = rand(5, 20);
        const x1 = rand(1, 4);
        const x2 = x1 + rand(2, 5);
        const y1 = a * x1 + b;
        const y2 = a * x2 + b;
        return {
          statement: `${ctx.intro}. On mesure $${ctx.yName}(${x1}) = ${y1}$ ${ctx.yUnit} et $${ctx.yName}(${x2}) = ${y2}$ ${ctx.yUnit}.<br/><br/><strong>1.</strong> Déterminer le coefficient directeur $a$.<br/><strong>2.</strong> En déduire l'ordonnée à l'origine $b$ et écrire l'équation $${ctx.yName} = a \\cdot ${ctx.xName} + b$.<br/><br/>Donne la valeur de $b$ (ordonnée à l'origine).`,
          answer: b,
          tolerance: 0,
          unit: ctx.yUnit,
          hint: `Calcule d'abord la pente : $a = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}} = \\dfrac{${y2-y1}}{${x2-x1}}$. Puis utilise $b = ${ctx.yName} - a \\cdot ${ctx.xName}$ avec l'un des deux points.`,
          solution: [
            `Pente : $a = \\dfrac{${y2} - (${y1})}{${x2} - ${x1}} = \\dfrac{${y2-y1}}{${x2-x1}} = ${a}$ ${ctx.yUnit}/${ctx.xUnit}`,
            `Ordonnée à l'origine : $b = ${ctx.yName}_1 - a \\cdot ${ctx.xName}_1 = ${y1} - ${a} \\times ${x1} = ${y1} - ${a*x1} = ${b}$ ${ctx.yUnit}`,
            `Équation : $${ctx.yName} = ${a}${ctx.xName} + ${b}$`
          ]
        };
      }
    },

    probleme: {
      context: 'En spectrophotométrie, la loi de Beer-Lambert relie l\'absorbance $A$ (sans unité) à la concentration $c$ (mol/L) d\'un soluté : $A = \\varepsilon \\cdot l \\cdot c$, où $l = 1$ cm est le trajet optique et $\\varepsilon$ est le coefficient d\'extinction molaire. On mesure les points d\'étalonnage suivants : $c = 0$ mol/L → $A = 0$ ; $c = 1{,}0 \\times 10^{-3}$ mol/L → $A = 0{,}25$ ; $c = 2{,}0 \\times 10^{-3}$ mol/L → $A = 0{,}50$ ; $c = 4{,}0 \\times 10^{-3}$ mol/L → $A = 1{,}00$.',
      schema: 'Graphe : axe x = concentration (0 à 4×10⁻³ mol/L), axe y = absorbance A (0 à 1,0). Les 4 points sont alignés sur une droite passant par l\'origine.',
      tasks: [
        'Tracer la droite d\'étalonnage et vérifier qu\'elle passe par l\'origine (linéarité).',
        'Calculer le coefficient directeur $\\varepsilon l$ de la droite à partir des données.',
        'Une solution inconnue donne $A = 0{,}75$. Déterminer sa concentration $c_{inconnue}$.'
      ],
      solutions: [
        'Les 4 points sont alignés et la droite passe par l\'origine ($A = 0$ quand $c = 0$) : la loi de Beer-Lambert est bien vérifiée.',
        'Pente $= \\varepsilon l = \\frac{A}{c} = \\frac{1{,}00}{4{,}0 \\times 10^{-3}} = 250$ L·mol⁻¹·cm⁻¹.',
        '$c = \\frac{A}{\\varepsilon l} = \\frac{0{,}75}{250} = 3{,}0 \\times 10^{-3}$ mol/L.'
      ],
      finalAnswer: '$c_{inconnue} = 3{,}0 \\times 10^{-3}$ mol/L'
    },

    evaluation: {
      title: 'Évaluation — Fonctions Affines et Linéaires',
      duration: '30 min',
      questions: [
        {
          statement: 'Une droite passe par les points $A(2 ; 5)$ et $B(6 ; 13)$. Calculer son coefficient directeur $a$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2$.'
        },
        {
          statement: 'Soit la droite $y = 3x - 7$. Calculer l\'ordonnée à l\'origine $b$.',
          type: 'numeric',
          answer: -7,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: 'Dans $y = ax + b$, l\'ordonnée à l\'origine est $b = -7$. C\'est la valeur de $y$ quand $x = 0$ : $y = 3 \\times 0 - 7 = -7$.'
        },
        {
          statement: 'La droite $d$ passe par $A(1 ; 4)$ avec une pente $a = -2$. Calculer $f(5)$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On détermine $b$ : $b = y_A - a \\cdot x_A = 4 - (-2) \\times 1 = 6$. Donc $f(x) = -2x + 6$. Ainsi $f(5) = -2 \\times 5 + 6 = -10 + 6 = -4$.'
        },
        {
          statement: 'Parmi ces fonctions, laquelle est linéaire (proportionnalité directe) ?',
          type: 'multiple-choice',
          options: ['$f(x) = 3x + 1$', '$g(x) = 5x$', '$h(x) = x^2$', '$k(x) = 2x - 2$'],
          answer: 1,
          points: 2,
          correction: 'Une fonction linéaire est de la forme $f(x) = ax$ (pas de terme constant $b$, et la courbe passe par l\'origine). Seule $g(x) = 5x$ vérifie cette condition. Les autres ont soit un terme constant ($f$, $k$), soit ne sont pas du premier degré ($h$).'
        },
        {
          statement: 'En spectrophotométrie, $A = \\varepsilon l c$. Si $\\varepsilon = 300$ L·mol⁻¹·cm⁻¹, $l = 1$ cm et $A = 1{,}5$, quelle est la concentration $c$ (en $10^{-3}$ mol/L) ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '× 10⁻³ mol/L',
          points: 3,
          correction: '$c = \\dfrac{A}{\\varepsilon l} = \\dfrac{1{,}5}{300 \\times 1} = 0{,}005$ mol/L $= 5 \\times 10^{-3}$ mol/L.'
        }
      ]
    }
  });
