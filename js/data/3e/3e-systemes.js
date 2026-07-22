/* =========================================================
   Spark Learning – data/3e/3e-systemes.js
   Module : Systèmes d'équations (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-systemes',
    level: 1, subject: 'maths',
    icon: '🔗',
    title: "Systèmes d'équations",
    subtitle: 'Substitution, combinaison, deux inconnues',
    keywords: ['Système', 'Substitution', 'Addition', 'Élimination', 'Deux inconnues'],
    physics: 'Lois de Kirchhoff (tensions et courants), mélange de solutions, bilan forces',

    cours: {
      intro: 'Un <strong>système de deux équations</strong> à deux inconnues apparaît dès qu\'un problème lie deux quantités par deux relations indépendantes. On dispose de deux méthodes : la <strong>substitution</strong> et la <strong>combinaison</strong> (addition).<br/><br/>' +
        'La <strong>substitution</strong> isole une variable dans une équation et la remplace dans l\'autre. La <strong>combinaison</strong> multiplie une équation par un coefficient pour éliminer directement une variable — plus rapide quand les coefficients s\'y prêtent.<br/><br/>' +
        'En physique, les <strong>lois de Kirchhoff</strong> (circuits électriques) et les bilans de mélange (chimie) donnent naturellement des systèmes.<br/><br/>' +
        '<strong>Vérification obligatoire</strong> : réinjecter les valeurs dans LES DEUX équations — une erreur peut satisfaire l\'une mais pas l\'autre.',
      definitions: [
        { term: 'Système d\'équations', def: 'Ensemble de <strong>deux équations</strong> à <strong>deux inconnues</strong> ($x$ et $y$) que l\'on doit résoudre <strong>simultanément</strong>. La solution est le couple $(x\\,;\\,y)$ qui vérifie les deux équations en même temps.' },
        { term: 'Substitution', def: 'Méthode qui consiste à <strong>isoler une inconnue</strong> dans une équation (par exemple $y = 7 - 2x$) puis à <strong>remplacer</strong> cette expression dans l\'autre équation pour ne garder qu\'une seule inconnue.' },
        { term: 'Combinaison (addition)', def: 'Méthode qui consiste à <strong>multiplier</strong> une ou deux équations par des coefficients bien choisis, puis à les <strong>additionner</strong> pour éliminer directement une inconnue.' },
        { term: 'Solution du système', def: 'Le couple $(x\\,;\\,y)$ qui satisfait <strong>les deux équations</strong> simultanément. Un système peut avoir une solution unique, aucune solution (droites parallèles) ou une infinité (droites confondues).' }
      ],
      method: {
        title: 'Deux méthodes',
        steps: [
          '<strong>Méthode 1 — Substitution</strong> : exprimer une inconnue en fonction de l\'autre (ex. $y = 7 - 2x$), puis substituer dans la 2e équation pour n\'avoir qu\'une seule inconnue.',
          '<strong>Méthode 2 — Combinaison</strong> : multiplier une équation par un coefficient bien choisi, puis additionner les deux équations pour éliminer directement une inconnue.',
          '<strong>Vérification obligatoire</strong> : réinjecter les valeurs trouvées dans les <strong>deux</strong> équations de départ. Une seule vérification ne suffit pas !'
        ]
      },
      example: {
        statement: 'Résoudre le système $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ par la méthode de combinaison.',
        steps: [
          '<strong>Addition des deux équations</strong> : $(2x + y) + (x - y) = 7 + 2$, soit $3x = 9$, donc $x = 3$.',
          '<strong>Substitution de $x$</strong> dans la 2e équation : $3 - y = 2$, donc $y = 1$.',
          '<strong>Vérification</strong> : dans la 1ère : $2(3) + 1 = 7$ ✓ ; dans la 2e : $3 - 1 = 2$ ✓. Le couple $(3\\,;\\,1)$ est bien la solution.'
        ],
        answer: 'La solution du système est $(x\\,;\\,y) = (3\\,;\\,1)$.'
      },
      formulas: [
        '$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$',
        'Par substitution : $x = \\dfrac{c - by}{a}$ puis substituer.',
        'Par combinaison : multiplier pour éliminer une variable.'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Résolution graphique',
        title: 'Deux droites, un point d\'intersection : la solution du système',
        description: 'Le système $\\begin{cases} 2x+y=7 \\\\ x-y=2 \\end{cases}$ de l\'exemple du cours, résolu ici graphiquement : chaque droite représente une équation, et leur point commun est la solution.',
        svg: `
          <svg viewBox="0 0 380 400" role="img" aria-labelledby="sys3e-title sys3e-desc">
            <title id="sys3e-title">Deux droites et leur point d'intersection</title>
            <desc id="sys3e-desc">Repere avec deux droites D1 d'equation 2x plus y egal 7 et D2 d'equation x moins y egal 2, qui se croisent au point de coordonnees 3 et 1, solution du systeme.</desc>
            <defs>
              <marker id="arrow-3e-systemes" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="70" y1="350" x2="70" y2="75"></line>
            <line class="grid-line" x1="120" y1="350" x2="120" y2="75"></line>
            <line class="grid-line" x1="170" y1="350" x2="170" y2="75"></line>
            <line class="grid-line" x1="220" y1="350" x2="220" y2="75"></line>
            <line class="grid-line" x1="270" y1="350" x2="270" y2="75"></line>
            <line class="grid-line" x1="320" y1="350" x2="320" y2="75"></line>

            <line class="grid-line" x1="70" y1="350" x2="345" y2="350"></line>
            <line class="grid-line" x1="70" y1="325" x2="345" y2="325"></line>
            <line class="grid-line" x1="70" y1="300" x2="345" y2="300"></line>
            <line class="grid-line" x1="70" y1="275" x2="345" y2="275"></line>
            <line class="grid-line" x1="70" y1="250" x2="345" y2="250"></line>
            <line class="grid-line" x1="70" y1="225" x2="345" y2="225"></line>
            <line class="grid-line" x1="70" y1="200" x2="345" y2="200"></line>
            <line class="grid-line" x1="70" y1="175" x2="345" y2="175"></line>
            <line class="grid-line" x1="70" y1="150" x2="345" y2="150"></line>
            <line class="grid-line" x1="70" y1="125" x2="345" y2="125"></line>
            <line class="grid-line" x1="70" y1="100" x2="345" y2="100"></line>
            <line class="grid-line" x1="70" y1="75" x2="345" y2="75"></line>

            <line class="axis" x1="70" y1="275" x2="345" y2="275" marker-end="url(#arrow-3e-systemes)"></line>
            <line class="axis" x1="120" y1="350" x2="120" y2="75" marker-end="url(#arrow-3e-systemes)"></line>
            <text class="axis-label" x="350" y="268">x</text>
            <text class="axis-label" x="128" y="80">y</text>

            <text class="tick-label" x="120" y="289" text-anchor="middle">0</text>
            <text class="tick-label" x="170" y="289" text-anchor="middle">1</text>
            <text class="tick-label" x="220" y="289" text-anchor="middle">2</text>
            <text class="tick-label" x="270" y="289" text-anchor="middle">3</text>
            <text class="tick-label" x="320" y="289" text-anchor="middle">4</text>

            <text class="tick-label" x="112" y="329" text-anchor="end">-2</text>
            <text class="tick-label" x="112" y="254" text-anchor="end">1</text>
            <text class="tick-label" x="112" y="204" text-anchor="end">3</text>
            <text class="tick-label" x="112" y="154" text-anchor="end">5</text>
            <text class="tick-label" x="112" y="104" text-anchor="end">7</text>

            <line class="curve-main" x1="95" y1="75" x2="345" y2="325"></line>
            <line x1="70" y1="350" x2="345" y2="212.5" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>

            <line class="guide-line" x1="270" y1="250" x2="270" y2="275"></line>
            <line class="guide-line" x1="120" y1="250" x2="270" y2="250"></line>
            <circle class="plot-point" cx="270" cy="250" r="6"></circle>
            <text class="annotation-label" x="280" y="238">S(3 ; 1)</text>

            <circle class="plot-point-alt" cx="120" cy="100" r="4"></circle>
            <circle class="plot-point-alt" cx="120" cy="325" r="4"></circle>

            <line x1="140" y1="25" x2="170" y2="25" class="curve-main"></line>
            <text class="annotation-label" x="178" y="29">D1 : 2x + y = 7</text>
            <line x1="140" y1="45" x2="170" y2="45" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>
            <text class="annotation-label" x="178" y="49">D2 : x − y = 2</text>
          </svg>
        `,
        notes: [
          'La droite D1 représente l\'équation $2x + y = 7$ ; la droite D2 représente $x - y = 2$.',
          'Le point d\'intersection $S(3\\,;\\,1)$ est l\'unique couple qui appartient aux deux droites, donc qui vérifie les deux équations en même temps.',
          'Vérification : $2 \\times 3 + 1 = 7$ ✓ et $3 - 1 = 2$ ✓ — cela confirme la solution trouvée par combinaison dans le cours.'
        ],
        reading: 'Repère l\'unique point où les deux droites se croisent : c\'est le seul point du plan qui appartient à la fois à D1 et à D2, donc l\'unique solution du système.',
        caption: 'Représentation graphique du système $\\begin{cases} 2x+y=7 \\\\ x-y=2 \\end{cases}$ : les droites se croisent en $(x\\,;\\,y)=(3\\,;\\,1)$, solution trouvée par combinaison dans l\'exemple du cours.'
      },
      recap: [
        '<strong>Deux méthodes</strong> : la substitution isole puis remplace ; la combinaison multiplie puis additionne pour éliminer une inconnue.',
        '<strong>Vérification obligatoire</strong> : toujours tester le couple trouvé dans les DEUX équations de départ. Une seule ne suffit pas !',
        '<strong>Cas particuliers</strong> : si les deux droites sont parallèles, le système n\'a aucune solution ; si elles sont confondues, il en a une infinité.',
        '<strong>En physique</strong> : les lois de Kirchhoff et les bilans de mélange donnent naturellement des systèmes à résoudre.'
      ],
      piege: 'Oublier de vérifier les solutions dans les deux équations. Une erreur de calcul dans la substitution peut donner un résultat faux qui satisfait une équation mais pas l\'autre. La vérification ne prend que 30 secondes et évite les erreurs.'
    },

    quiz: [
      {
        q: 'Un élève résout $\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}$ et trouve $x = 4$, $y = 4$. Comment vérifier qu\'il a tort ?',
        options: [
          'Vérifier dans la 1ère équation : $4 + 4 = 8 \\neq 7$, donc la solution est fausse',
          'On ne peut pas vérifier sans tout recalculer',
          'Vérifier dans une seule équation suffit pour confirmer',
          'Le résultat est correct, $x = 4, y = 4$'
        ],
        answer: 0,
        correction: 'La vérification dans la 1ère équation : $4 + 4 = 8 \\neq 7$ — la solution est fausse. La vraie solution : addition des deux équations $\\Rightarrow 3x = 12 \\Rightarrow x = 4$, puis $y = 7 - 4 = 3$ (et non $4$). L\'erreur vient d\'avoir oublié de recalculer $y$ après avoir trouvé $x$.'
      },
      {
        q: 'Résoudre $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$',
        options: ['$x = 2,\\ y = 3$', '$x = 3,\\ y = 1$', '$x = 4,\\ y = -1$', '$x = 1,\\ y = 5$'],
        answer: 1,
        correction: 'Addition : $3x = 9 \\Rightarrow x = 3$. Puis : $3 - y = 2 \\Rightarrow y = 1$. Vérif : $2(3)+1 = 7$ ✓'
      },
      {
        q: 'Un mélange contient deux solutions : l\'une à $20\\%$ de sel, l\'autre à $5\\%$. On mélange $x$ L de la première avec $y$ L de la seconde pour obtenir $10$ L à $10\\%$. Quelle équation représente la conservation du sel ?',
        options: ['$0{,}2x + 0{,}05y = 10$', '$0{,}2x + 0{,}05y = 1$', '$x + y = 1$', '$0{,}15x = 0{,}5y$'],
        answer: 1,
        correction: 'Conservation du sel : $0{,}20x + 0{,}05y = 10\\% \\times 10\\,\\text{L} = 1\\,\\text{L}$. Et $x + y = 10$. C\'est bien l\'équation b.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const x = rand(2, 8), y = rand(1, 7);
        const a = rand(1, 3), b = rand(1, 3);
        const c = a * x + b * y;
        const d = rand(1, 3), e = rand(1, 3);
        const f = d * x + e * y;

        const system = `$\\begin{cases} ${a}x + ${b}y = ${c} \\\\ ${d}x + ${e}y = ${f} \\end{cases}$`;

        const ctx = pick([
          { build: () => `Un marchand vend des pommes à $x$ €/kg et des poires à $y$ €/kg.<br/><br/>Un premier client achète $${a}\\,\\text{kg}$ de pommes et $${b}\\,\\text{kg}$ de poires pour $${c}$ €. Un second achète $${d}\\,\\text{kg}$ de pommes et $${e}\\,\\text{kg}$ de poires pour $${f}$ €.<br/><br/>Traduis la situation par un <strong>système</strong> ${system} et donne le <strong>prix d'un kg de pommes</strong> ($x$).` },
          { build: () => `Dans une papeterie, un cahier coûte $x$ € et un stylo coûte $y$ €.<br/><br/>Une première commande contient $${a}$ cahiers et $${b}$ stylos pour $${c}$ €. Une seconde commande contient $${d}$ cahiers et $${e}$ stylos pour $${f}$ €.<br/><br/>Le système correspondant est ${system}. Quel est le <strong>prix d'un cahier</strong> ($x$) ?` },
          { build: () => `Dans une boulangerie, une baguette coûte $x$ € et un croissant coûte $y$ €.<br/><br/>Un client achète $${a}$ baguettes et $${b}$ croissants pour $${c}$ €. Un autre achète $${d}$ baguettes et $${e}$ croissants pour $${f}$ €.<br/><br/>Ceci se traduit par le système ${system}. Détermine le <strong>prix d'une baguette</strong> ($x$).` },
          { build: () => `Une jardinerie vend des rosiers à $x$ € pièce et des bulbes de tulipes à $y$ € pièce.<br/><br/>Un client achète $${a}$ rosiers et $${b}$ bulbes pour $${c}$ €. Un autre achète $${d}$ rosiers et $${e}$ bulbes pour $${f}$ €.<br/><br/>D'où le système ${system}. Quel est le <strong>prix d'un rosier</strong> ($x$) ?` },
          { build: () => `Dans une quincaillerie, une vis coûte $x$ € et un boulon coûte $y$ €.<br/><br/>Un artisan achète $${a}$ vis et $${b}$ boulons pour $${c}$ €. Un autre en achète $${d}$ et $${e}$ pour $${f}$ €.<br/><br/>Ce qui donne le système ${system}. Quel est le <strong>prix d'une vis</strong> ($x$) ?` },
          { build: () => `Une fromagerie vend du comté à $x$ €/kg et du brie à $y$ €/kg.<br/><br/>Un client prend $${a}\\,\\text{kg}$ de comté et $${b}\\,\\text{kg}$ de brie pour $${c}$ €. Un autre prend $${d}\\,\\text{kg}$ de comté et $${e}\\,\\text{kg}$ de brie pour $${f}$ €.<br/><br/>Le système associé est ${system}. Détermine le <strong>prix du kg de comté</strong> ($x$).` }
        ]);

        return {
          statement: ctx.build(),
          answer: x,
          tolerance: 0,
          unit: '',
          hint: `Essaie la méthode de <strong>combinaison</strong> : multiplie la première équation par $${d}$ et la seconde par $${a}$ pour éliminer $x$...<br/><br/>Ou utilise la <strong>substitution</strong>.`,
          solution: [
            `On cherche $x = ${x}$ et $y = ${y}$.`,
            `Vérif éq 1 : $${a} \\times ${x} + ${b} \\times ${y} = ${a*x} + ${b*y} = ${c}$ ✓`,
            `Vérif éq 2 : $${d} \\times ${x} + ${e} \\times ${y} = ${d*x} + ${e*y} = ${f}$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Dans un circuit avec deux branches en parallèle, les lois de Kirchhoff donnent : $I_1 + I_2 = 3\\,\\text{A}$ (loi des nœuds) et $2I_1 - 3I_2 = 0$ (loi des mailles, car les tensions sont égales et $R_1 = 2\\,\\Omega$, $R_2 = 3\\,\\Omega$).',
      schema: null,
      tasks: [
        'Identifier les deux inconnues et les deux équations du système.',
        'Résoudre le système par substitution ou combinaison.',
        'Calculer les tensions $U_1 = R_1 I_1$ et $U_2 = R_2 I_2$ et vérifier qu\'elles sont égales (branches parallèles).'
      ],
      solutions: [
        'Inconnues : $I_1$ et $I_2$. Système : $\\begin{cases} I_1 + I_2 = 3 \\\\ 2I_1 = 3I_2 \\end{cases}$.',
        'De l\'éq 2 : $I_1 = \\dfrac{3}{2}I_2$. Substitution : $\\dfrac{3}{2}I_2 + I_2 = 3 \\Rightarrow \\dfrac{5}{2}I_2 = 3 \\Rightarrow I_2 = 1{,}2\\,\\text{A}$. Donc $I_1 = 1{,}8\\,\\text{A}$.',
        '$U_1 = 2 \\times 1{,}8 = 3{,}6\\,\\text{V}$ et $U_2 = 3 \\times 1{,}2 = 3{,}6\\,\\text{V}$. Égaux ✓ — cohérent avec un montage en parallèle.'
      ],
      finalAnswer: '$I_1 = 1{,}8\\,\\text{A}$, $I_2 = 1{,}2\\,\\text{A}$, $U = 3{,}6\\,\\text{V}$'
    },

    evaluation: {
      title: 'Évaluation — Systèmes d\'équations',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre le système $\\begin{cases} x + y = 10 \\\\ 3x - y = 6 \\end{cases}$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Addition des deux équations : $x + y + 3x - y = 10 + 6 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. Puis $y = 10 - 4 = 6$. Vérification : $3 \\times 4 - 6 = 6$ ✓.'
        },
        {
          statement: 'Pour résoudre $\\begin{cases} 2x + 3y = 12 \\\\ 4x + 3y = 18 \\end{cases}$, la méthode la plus directe est :',
          type: 'multiple-choice',
          options: [
            'Soustraire la 1ère équation de la 2ème pour éliminer $y$',
            'Substituer $x$ de la 1ère dans la 2ème',
            'Multiplier les deux équations entre elles',
            'Additionner les deux équations'
          ],
          answer: 0,
          points: 2,
          correction: 'Les coefficients de $y$ sont identiques ($3y$). En soustrayant : $(4x + 3y) - (2x + 3y) = 18 - 12 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Puis $y = \\dfrac{12 - 6}{3} = 2$.'
        },
        {
          statement: 'Résoudre $\\begin{cases} 5x - 2y = 1 \\\\ 3x + 2y = 15 \\end{cases}$. Donner la valeur de $y$.',
          type: 'numeric',
          answer: 4.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Addition : $8x = 16 \\Rightarrow x = 2$. Puis $3 \\times 2 + 2y = 15 \\Rightarrow 2y = 9 \\Rightarrow y = 4{,}5$. Vérification : $5 \\times 2 - 2 \\times 4{,}5 = 10 - 9 = 1$ ✓.'
        },
        {
          statement: 'Un magasin vend des cahiers à $2$ € et des stylos à $3$ €. Un client achète $7$ articles pour $17$ €. Combien de cahiers a-t-il achetés ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Soit $c$ le nombre de cahiers et $s$ le nombre de stylos. $\\begin{cases} c + s = 7 \\\\ 2c + 3s = 17 \\end{cases}$. De la 1ère : $s = 7 - c$. Substitution : $2c + 3(7-c) = 17 \\Rightarrow 2c + 21 - 3c = 17 \\Rightarrow -c = -4 \\Rightarrow c = 4$. Il a acheté $4$ cahiers et $3$ stylos.'
        },
        {
          statement: 'Le système $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$ admet :',
          type: 'multiple-choice',
          options: [
            'Une solution unique',
            'Aucune solution',
            'Une infinité de solutions',
            'Exactement deux solutions'
          ],
          answer: 2,
          points: 2,
          correction: 'La 1ère équation est le double de la 2ème : $2(x + 2y) = 2 \\times 5 = 10$. Les deux équations sont proportionnelles, donc elles représentent la même droite. Le système a une infinité de solutions : tous les couples $(x, y)$ vérifiant $x + 2y = 5$.'
        }
      ]
    }
  }
);
