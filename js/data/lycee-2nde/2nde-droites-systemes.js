/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-droites-systemes.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-droites-systemes',
    level: 2, subject: 'maths',
    icon: '➗',
    title: 'Droites et systèmes d\'équations',
    subtitle: 'Équation de droite, systèmes 2×2',
    keywords: ['Droite', 'Pente', 'Ordonnée à l\'origine', 'Système', 'Substitution'],
    physics: false,
    cours: {
      intro: 'L\'équation $y = mx + p$ décrit toute droite non verticale : $m$ est la pente (combien $y$ change pour $+1$ en $x$) et $p$ est l\'ordonnée à l\'origine. Les droites verticales ont une équation $x = k$ et n\'ont pas de pente définie. Deux droites distinctes sont soit parallèles (même pente $m_1 = m_2$, aucun point commun), soit sécantes (pentes différentes, un unique point commun). Ce point d\'intersection est la solution du système formé par les deux équations : on l\'obtient en égalisant les deux expressions de $y$. Si $m_1 = m_2$ mais $p_1 \\neq p_2$, le système est impossible (contradiction) — les droites ne se croisent jamais.',
      definitions: [
        { term: 'Équation de droite', def: 'Toute droite non verticale s\'écrit $y = mx + p$ avec $m$ la pente et $p$ l\'ordonnée à l\'origine. Une droite verticale s\'écrit $x = k$.' },
        { term: 'Droites parallèles', def: 'Deux droites non verticales sont parallèles si elles ont la même pente : $m_1 = m_2$. Elles n\'ont aucun point commun (sauf si elles sont confondues).' },
        { term: 'Droites sécantes', def: 'Deux droites de pentes différentes ($m_1 \\neq m_2$). Elles se coupent en un unique point dont les coordonnées sont la solution du système.' },
        { term: 'Système d\'équations', def: 'Ensemble de deux (ou plus) équations à résoudre simultanément. La solution est le couple $(x ; y)$ vérifiant toutes les équations.' }
      ],
      method: {
        title: 'Résoudre un système par substitution',
        steps: [
          'Isoler une inconnue dans l\'une des équations. <strong>Exemple :</strong> De $x + y = 5$, on tire $y = 5 - x$.',
          'Substituer dans l\'autre équation pour obtenir une équation à une inconnue. <strong>Exemple :</strong> $2x + 3(5 - x) = 12$ → $2x + 15 - 3x = 12$ → $-x = -3$ → $x = 3$.',
          'Résoudre, puis trouver la deuxième inconnue par retour substitution. <strong>Exemple :</strong> $y = 5 - 3 = 2$. Solution : $(3 ; 2)$.',
          'Vérifier dans les deux équations d\'origine. <strong>Exemple :</strong> $3 + 2 = 5$ ✓ et $2 \\times 3 + 3 \\times 2 = 12$ ✓.'
        ]
      },
      example: {
        statement: 'Déterminer le point d\'intersection des droites $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$.',
        steps: [
          'Les pentes sont différentes ($m_1 = 2 \\neq m_2 = -1$) : les droites sont sécantes, il existe un unique point d\'intersection.',
          'On égalise : $2x + 1 = -x + 7$ → $3x = 6$ → $x = 2$.',
          'On remplace : $y = 2 \\times 2 + 1 = 5$.'
        ],
        answer: 'Le point d\'intersection est $(2 ; 5)$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Résolution graphique d\'un système',
        title: 'Intersection de $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$',
        description: 'Reconstruction de l\'exemple du cours : les deux droites sont sécantes et se coupent en un unique point, solution du système.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="droites-diagram-title droites-diagram-desc">
            <title id="droites-diagram-title">Intersection des droites d1 et d2</title>
            <desc id="droites-diagram-desc">Repere avec la droite d1 : y = 2x + 1, la droite d2 : y = -x + 7, et leur point d'intersection (2 ; 5), solution graphique du systeme.</desc>

            <line class="grid-line" x1="50" y1="40" x2="50" y2="340"></line>
            <line class="grid-line" x1="95" y1="40" x2="95" y2="340"></line>
            <line class="grid-line" x1="140" y1="40" x2="140" y2="340"></line>
            <line class="grid-line" x1="185" y1="40" x2="185" y2="340"></line>
            <line class="grid-line" x1="230" y1="40" x2="230" y2="340"></line>
            <line class="grid-line" x1="275" y1="40" x2="275" y2="340"></line>
            <line class="grid-line" x1="320" y1="40" x2="320" y2="340"></line>
            <line class="grid-line" x1="365" y1="40" x2="365" y2="340"></line>
            <line class="grid-line" x1="410" y1="40" x2="410" y2="340"></line>

            <line class="grid-line" x1="50" y1="340" x2="410" y2="340"></line>
            <line class="grid-line" x1="50" y1="310" x2="410" y2="310"></line>
            <line class="grid-line" x1="50" y1="280" x2="410" y2="280"></line>
            <line class="grid-line" x1="50" y1="250" x2="410" y2="250"></line>
            <line class="grid-line" x1="50" y1="220" x2="410" y2="220"></line>
            <line class="grid-line" x1="50" y1="190" x2="410" y2="190"></line>
            <line class="grid-line" x1="50" y1="160" x2="410" y2="160"></line>
            <line class="grid-line" x1="50" y1="130" x2="410" y2="130"></line>
            <line class="grid-line" x1="50" y1="100" x2="410" y2="100"></line>
            <line class="grid-line" x1="50" y1="70" x2="410" y2="70"></line>
            <line class="grid-line" x1="50" y1="40" x2="410" y2="40"></line>

            <line class="axis" x1="45" y1="310" x2="440" y2="310"></line>
            <line class="axis" x1="95" y1="355" x2="95" y2="20"></line>
            <text class="axis-label" x="446" y="314">x</text>
            <text class="axis-label" x="100" y="16">y</text>

            <text class="tick-label" x="50" y="326" text-anchor="middle">-1</text>
            <text class="tick-label" x="80" y="328" text-anchor="end">0</text>
            <text class="tick-label" x="140" y="326" text-anchor="middle">1</text>
            <text class="tick-label" x="185" y="326" text-anchor="middle">2</text>
            <text class="tick-label" x="230" y="326" text-anchor="middle">3</text>
            <text class="tick-label" x="275" y="326" text-anchor="middle">4</text>
            <text class="tick-label" x="320" y="326" text-anchor="middle">5</text>
            <text class="tick-label" x="365" y="326" text-anchor="middle">6</text>
            <text class="tick-label" x="410" y="326" text-anchor="middle">7</text>

            <text class="tick-label" x="85" y="344" text-anchor="end">-1</text>
            <text class="tick-label" x="85" y="284" text-anchor="end">1</text>
            <text class="tick-label" x="85" y="254" text-anchor="end">2</text>
            <text class="tick-label" x="85" y="224" text-anchor="end">3</text>
            <text class="tick-label" x="85" y="194" text-anchor="end">4</text>
            <text class="tick-label" x="85" y="164" text-anchor="end">5</text>
            <text class="tick-label" x="85" y="134" text-anchor="end">6</text>
            <text class="tick-label" x="85" y="104" text-anchor="end">7</text>
            <text class="tick-label" x="85" y="74" text-anchor="end">8</text>
            <text class="tick-label" x="85" y="44" text-anchor="end">9</text>

            <line class="curve-main" x1="50" y1="340" x2="275" y2="40"></line>
            <text class="annotation-label" x="205" y="52">d1 : y = 2x + 1</text>

            <line class="curve-main" x1="50" y1="70" x2="410" y2="310" style="stroke: color-mix(in srgb, var(--diagram-accent) 55%, var(--text));"></line>
            <text class="annotation-label" x="330" y="262">d2 : y = -x + 7</text>

            <line class="guide-line" x1="185" y1="310" x2="185" y2="160"></line>
            <line class="guide-line" x1="95" y1="160" x2="185" y2="160"></line>
            <circle class="plot-point" cx="185" cy="160" r="5"></circle>
            <text class="annotation-label" x="192" y="150">(2 ; 5)</text>

            <circle class="plot-point-alt" cx="95" cy="280" r="4"></circle>
            <text class="label-soft" x="60" y="272" text-anchor="end">(0 ; 1)</text>
            <circle class="plot-point-alt" cx="95" cy="100" r="4"></circle>
            <text class="label-soft" x="60" y="94" text-anchor="end">(0 ; 7)</text>
          </svg>
        `,
        notes: [
          'Les deux droites ont des pentes différentes ($m_1 = 2 \\neq m_2 = -1$) : elles sont donc <strong>sécantes</strong> et se coupent en un unique point.',
          'Le point d\'intersection $(2 ; 5)$ se lit graphiquement à la croisée des deux droites, et se retrouve par le calcul : $2x + 1 = -x + 7 \\Rightarrow x = 2$.',
          'Les ordonnées à l\'origine se lisent où chaque droite coupe l\'axe des $y$ : $d_1$ en $(0 ; 1)$, $d_2$ en $(0 ; 7)$.'
        ],
        reading: 'Le point $(2 ; 5)$ est la solution du système : c\'est le seul couple $(x ; y)$ qui vérifie à la fois $y = 2x + 1$ et $y = -x + 7$.',
        caption: 'Droites $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$, sécantes en $(2 ; 5)$ — solution graphique de l\'exemple du cours.'
      },
      formulas: [
        'Équation de droite : $y = mx + p$',
        'Pente : $m = \\dfrac{y_B - y_A}{x_B - x_A}$',
        'Système : $\\begin{cases} y = m_1 x + p_1 \\\\ y = m_2 x + p_2 \\end{cases} \\Rightarrow m_1 x + p_1 = m_2 x + p_2$'
      ],
      recap: [
        'Toute droite non verticale a une équation $y = mx + p$ ; une droite verticale s\'écrit $x = k$.',
        'Même pente → droites parallèles (pas de solution) ; pentes différentes → un unique point d\'intersection.',
        'Par substitution : isoler, remplacer, résoudre, puis remonter à la deuxième inconnue.',
        'Toujours vérifier la solution dans les deux équations du système.'
      ],
      piege: 'Si $m_1 = m_2$ et $p_1 \\ne p_2$, les droites sont parallèles : le système n\'a pas de solution !'
    },
    quiz: [
      { q: 'Un élève affirme que les droites $y = 2x + 5$ et $y = 2x - 3$ se croisent en $x = 4$. Pourquoi est-ce impossible ?', options: ['Ces droites ont la même pente ($m=2$) — elles sont parallèles et ne se croisent jamais (et $2x+5=2x-3 \\Rightarrow 5=-3$, contradiction)', 'L\'élève a raison, elles se croisent en $x=4$', 'Elles se croisent uniquement si on change les signes', 'Impossible à dire sans le graphe'], answer: 0, correction: 'Même pente $m=2$ → droites parallèles. Algébriquement, $2x+5=2x-3 \\Rightarrow 5=-3$, qui est une contradiction. Il n\'existe aucun $x$ solution.' },
      { q: 'L\'équation $y=3x-1$ et $y=-x+7$ : quelle est l\'abscisse du point d\'intersection ?', options: ['$x=1$', '$x=2$', '$x=3$', '$x=4$'], answer: 1, correction: '$3x-1=-x+7 \\Rightarrow 4x=8 \\Rightarrow x=2$.' },
      { q: 'Deux droites de pente $m=4$ sont-elles sécantes ?', options: ['Oui, toujours', 'Non, elles sont parallèles', 'Oui, si même ordonnée à l\'origine', 'Impossible à dire'], answer: 1, correction: 'Même pente → droites parallèles (ou confondues). Elles ne se coupent pas si $p_1\\ne p_2$.' },
      { q: 'Un système $\\begin{cases} 2x + y = 7 \\\\ 4x + 2y = 14 \\end{cases}$ admet :', options: ['Une infinité de solutions (les deux équations sont proportionnelles : la 2e est le double de la 1re)', 'Aucune solution', 'Exactement une solution : $(2;3)$', 'Exactement deux solutions'], answer: 0, correction: 'La 2e équation est $2 \\times$ la 1re : $4x + 2y = 2(2x + y) = 14$. Les deux droites sont confondues. Tout couple $(x;y)$ vérifiant $2x + y = 7$ est solution : il y en a une infinité. C\'est un cas particulier à distinguer du cas « parallèles strictes » (aucune solution).' },
      { q: 'La droite $d$ passe par $A(1;5)$ et $B(3;5)$. Son équation est :', options: ['$y = 5$ (droite horizontale, pente nulle)', '$x = 5$', '$y = 5x$', '$y = x + 4$'], answer: 0, correction: 'Les ordonnées sont identiques ($y_A = y_B = 5$) : la droite est horizontale. La pente est $m = \\frac{5-5}{3-1} = 0$, donc $y = 0 \\cdot x + 5 = 5$. Ne pas confondre avec une droite verticale ($x = k$).' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un cinéma vend des places adultes à', prixA: 'prix adulte', prixB: 'prix enfant', unit: '€', objA: 'adultes', objB: 'enfants' },
          { intro: 'Un magasin vend des stylos à', prixA: 'prix stylo', prixB: 'prix cahier', unit: '€', objA: 'stylos', objB: 'cahiers' },
          { intro: 'Un traiteur propose des sandwichs à', prixA: 'prix sandwich', prixB: 'prix boisson', unit: '€', objA: 'sandwichs', objB: 'boissons' }
        ];
        const ctx = pick(contexts);
        const x = rand(2, 6);
        const y = rand(1, 5);
        const a1 = 1, b1 = 1;
        const total1 = x + y;
        const a2 = rand(2, 5);
        const b2 = rand(2, 5);
        while (a2 === b2) { b2 = rand(2, 5); }
        const total2 = a2 * x + b2 * y;
        return {
          statement: `${ctx.intro} $${a2}$ € l'un et des ${ctx.objB} à $${b2}$ € l'un. Un client achète $${total1}$ articles au total pour $${total2}$ €.<br/><br/>Poser et résoudre le système pour trouver le nombre de ${ctx.objA} ($x$) et de ${ctx.objB} ($y$).<br/><br/>Donne le nombre de <strong>${ctx.objA}</strong>.`,
          answer: x,
          tolerance: 0,
          unit: '',
          hint: `Système : $\\begin{cases} x + y = ${total1} \\\\ ${a2}x + ${b2}y = ${total2} \\end{cases}$. De la 1re : $y = ${total1} - x$. Substituer dans la 2e.`,
          solution: [
            `$\\begin{cases} x + y = ${total1} \\\\ ${a2}x + ${b2}y = ${total2} \\end{cases}$`,
            `De (1) : $y = ${total1} - x$`,
            `Dans (2) : $${a2}x + ${b2}(${total1} - x) = ${total2}$`,
            `$${a2}x + ${b2*total1} - ${b2}x = ${total2}$`,
            `$${a2-b2}x = ${total2 - b2*total1}$`,
            `$x = ${x}$ et $y = ${y}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un agriculteur dispose de $200$ hectares et d\'un budget de $36\\,000$ €. Il veut cultiver du blé (coût $150$ €/ha, bénéfice $300$ €/ha) et du tournesol (coût $200$ €/ha, bénéfice $250$ €/ha).',
      tasks: [
        'Poser le système de contraintes : surface totale $\\leq 200$ ha et budget $\\leq 36\\,000$ €.',
        'Résoudre le système d\'égalités pour trouver la répartition qui utilise exactement toute la surface et tout le budget.',
        'Calculer le bénéfice total avec cette répartition.'
      ],
      solutions: [
        '$\\begin{cases} x + y = 200 \\\\ 150x + 200y = 36\\,000 \\end{cases}$ où $x$ = ha de blé, $y$ = ha de tournesol.',
        'De (1) : $x = 200 - y$. Dans (2) : $150(200-y) + 200y = 36\\,000 \\Rightarrow 30\\,000 + 50y = 36\\,000 \\Rightarrow y = 120$. Donc $x = 80$.',
        'Bénéfice : $300 \\times 80 + 250 \\times 120 = 24\\,000 + 30\\,000 = 54\\,000$ €.'
      ],
      finalAnswer: '$80$ ha de blé et $120$ ha de tournesol, pour un bénéfice de $54\\,000$ €.'
    },

    evaluation: {
      title: 'Évaluation — Droites et systèmes d\'équations',
      duration: '30 min',
      questions: [
        {
          statement: 'La droite $d$ passe par $A(1 ; 3)$ et $B(4 ; 9)$. Calculer sa pente $m$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Les droites $y = 3x + 1$ et $y = 3x - 4$ sont :',
          type: 'multiple-choice',
          options: ['Sécantes', 'Parallèles', 'Confondues', 'Perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'Les deux droites ont la même pente $m = 3$ mais des ordonnées à l\'origine différentes ($1 \\neq -4$). Elles sont donc parallèles (aucun point d\'intersection).'
        },
        {
          statement: 'Résoudre le système $\\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}$. Donner l\'abscisse $x$ du point d\'intersection.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On égalise : $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. (Puis $y = 2 \\times 2 + 1 = 5$, soit le point $(2 ; 5)$.)'
        },
        {
          statement: 'Résoudre le système $\\begin{cases} x + y = 10 \\\\ 3x - y = 6 \\end{cases}$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'De la 1re équation : $y = 10 - x$. Substitution dans la 2e : $3x - (10 - x) = 6 \\Rightarrow 4x - 10 = 6 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. (Et $y = 6$.)'
        },
        {
          statement: 'Quelle est l\'ordonnée à l\'origine de la droite passant par $A(2 ; 5)$ et de pente $m = -3$ ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y = mx + p \\Rightarrow 5 = -3 \\times 2 + p \\Rightarrow 5 = -6 + p \\Rightarrow p = 11$. L\'ordonnée à l\'origine est $11$.'
        }
      ]
    }
  });
