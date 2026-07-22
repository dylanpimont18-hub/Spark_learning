/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-ensembles-nombres.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-ensembles-nombres',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Ensembles de nombres et intervalles',
    subtitle: 'ℕ, ℤ, ℚ, ℝ et notation intervalle',
    keywords: ['Ensemble', 'Intervalle', 'Réels', 'Appartenance'],
    physics: false,
    cours: {
      intro: 'Les nombres se classent en <strong>ensembles emboîtés</strong> : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.<br/><br/>Un réel est <strong>rationnel</strong> s\'il peut s\'écrire $p/q$ (avec $p, q$ entiers, $q \\neq 0$) — sinon il est <strong>irrationnel</strong> comme $\\sqrt{2}$ ou $\\pi$. Les décimaux périodiques (comme $1{,}\\overline{3} = 4/3$) sont tous rationnels.<br/><br/>Les <strong>intervalles</strong> décrivent des ensembles continus de réels avec une notation compacte : un crochet fermé $[$ inclut la borne, un crochet ouvert $]$ l\'exclut. L\'infini n\'est pas un nombre — la borne infinie est toujours ouverte.<br/><br/>Les opérations sur intervalles ($\\cap$, $\\cup$) permettent d\'exprimer les domaines de définition et les conditions de validité des formules.',
      definitions: [
        { term: 'Entiers naturels $\\mathbb{N}$', def: 'Ensemble $\\{0 ; 1 ; 2 ; 3 ; \\ldots\\}$ : les nombres entiers positifs ou nuls.' },
        { term: 'Entiers relatifs $\\mathbb{Z}$', def: 'Ensemble $\\{\\ldots ; -2 ; -1 ; 0 ; 1 ; 2 ; \\ldots\\}$ : les entiers avec leur signe.' },
        { term: 'Rationnels $\\mathbb{Q}$', def: 'Ensemble des nombres qui s\'écrivent $\\dfrac{p}{q}$ avec $p \\in \\mathbb{Z}$ et $q \\in \\mathbb{Z}^*$. Inclut tous les décimaux périodiques.' },
        { term: 'Irrationnel', def: 'Réel qui ne peut pas s\'écrire sous forme de fraction. Exemples : $\\sqrt{2}$, $\\pi$, $\\sqrt{3}$. Leur écriture décimale est infinie et non périodique.' }
      ],
      method: {
        title: 'Lire et écrire un intervalle',
        steps: [
          '<strong>Crochet fermé</strong> $[$ ou $]$ : la borne est incluse. <strong>Exemple :</strong> $[3 ; 7]$ signifie $3 \\le x \\le 7$ (les bornes $3$ et $7$ font partie de l\'ensemble).',
          '<strong>Crochet ouvert</strong> $]$ ou $[$ : la borne est exclue. <strong>Exemple :</strong> $]2 ; 5[$ signifie $2 < x < 5$ (ni $2$ ni $5$ ne font partie de l\'ensemble).',
          '<strong>Bornes infinies</strong> : toujours utiliser un crochet ouvert pour $+\\infty$ ou $-\\infty$. <strong>Exemple :</strong> $[3 ; +\\infty[$ signifie $x \\ge 3$.',
          '<strong>Intersection $\\cap$</strong> = valeurs communes ; <strong>union $\\cup$</strong> = toutes les valeurs. <strong>Exemple :</strong> $[1 ; 5] \\cap [3 ; 8] = [3 ; 5]$ ; $[1 ; 5] \\cup [3 ; 8] = [1 ; 8]$.'
        ]
      },
      example: {
        statement: 'Classer les nombres suivants dans les ensembles $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, irrationnel : $7$ ; $-3$ ; $\\dfrac{2}{5}$ ; $\\sqrt{5}$.',
        steps: [
          '$7 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ : c\'est un entier naturel.',
          '$-3 \\in \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ : entier relatif négatif (pas dans $\\mathbb{N}$).',
          '$\\dfrac{2}{5} = 0{,}4 \\in \\mathbb{Q}$ : rationnel (quotient de deux entiers).',
          '$\\sqrt{5}$ est irrationnel : $5$ n\'est pas un carré parfait, donc $\\sqrt{5}$ ne s\'écrit pas sous forme $p/q$.'
        ],
        answer: '$7 \\in \\mathbb{N}$ ; $-3 \\in \\mathbb{Z}$ ; $\\frac{2}{5} \\in \\mathbb{Q}$ ; $\\sqrt{5} \\notin \\mathbb{Q}$ (irrationnel).'
      },
      formulas: [
        '$[a;b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$',
        '$]a;b[ = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$',
        '$[a;+\\infty[ = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Ensembles de nombres emboîtés',
        title: 'Quatre exemples du cours placés dans l\'ensemble le plus restreint',
        description: 'Reprend l\'exemple du cours : $7 \\in \\mathbb{N}$, $-3 \\in \\mathbb{Z}$, $\\dfrac{2}{5} \\in \\mathbb{Q}$, $\\sqrt{5}$ irrationnel (dans $\\mathbb{R}$ seulement), chacun placé dans l\'anneau le plus intérieur possible.',
        svg: `
          <svg viewBox="0 0 460 460" role="img" aria-labelledby="ensembles-nombres-title ensembles-nombres-desc">
            <title id="ensembles-nombres-title">Cercles emboites des ensembles de nombres</title>
            <desc id="ensembles-nombres-desc">Quatre cercles concentriques centres au meme point, du plus petit au plus grand : N (entiers naturels), Z (entiers relatifs), Q (rationnels), R (reels). Le nombre 7 est place dans le cercle N, le nombre moins 3 entre les cercles N et Z, la fraction 2 cinquiemes entre les cercles Z et Q, et racine de 5 entre les cercles Q et R, chacun dans l'anneau le plus restreint possible.</desc>

            <text class="label-soft" x="230" y="22" text-anchor="middle">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</text>

            <circle class="frame-line" cx="230" cy="230" r="185" fill="color-mix(in srgb, var(--diagram-accent) 5%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="135" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="90" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="45" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></circle>

            <text class="axis-label" x="110" y="114" text-anchor="middle">ℝ</text>
            <text class="axis-label" x="145" y="149" text-anchor="middle">ℚ</text>
            <text class="axis-label" x="177" y="181" text-anchor="middle">ℤ</text>
            <text class="axis-label" x="209" y="213" text-anchor="middle">ℕ</text>

            <circle class="plot-point" cx="235" cy="230" r="4"></circle>
            <text class="annotation-label" x="235" y="215" text-anchor="middle">7</text>
            <circle class="plot-point" cx="295" cy="230" r="4"></circle>
            <text class="annotation-label" x="295" y="215" text-anchor="middle">-3</text>
            <circle class="plot-point" cx="342" cy="230" r="4"></circle>
            <text class="annotation-label" x="342" y="215" text-anchor="middle">2/5</text>
            <circle class="plot-point" cx="390" cy="230" r="4"></circle>
            <text class="annotation-label" x="390" y="215" text-anchor="middle">√5</text>
          </svg>
        `,
        notes: [
          '$7 \\in \\mathbb{N}$ : entier naturel, c\'est l\'ensemble le plus restreint possible pour ce nombre.',
          '$-3 \\in \\mathbb{Z}$ mais $-3 \\notin \\mathbb{N}$ (les entiers naturels sont positifs ou nuls).',
          '$\\dfrac{2}{5} \\in \\mathbb{Q}$ mais $\\dfrac{2}{5} \\notin \\mathbb{Z}$ (ce n\'est pas un entier).',
          '$\\sqrt{5}$ est irrationnel : il appartient à $\\mathbb{R}$ mais pas à $\\mathbb{Q}$, comme le rappelle l\'exemple du cours.'
        ],
        reading: 'Chaque nombre est placé dans l\'anneau le plus intérieur possible : c\'est cet anneau qui donne son ensemble de référence le plus précis.',
        caption: 'Reprend exactement l\'exemple du cours : $7$, $-3$, $\\dfrac{2}{5}$, $\\sqrt{5}$, chacun classé dans $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ ou $\\mathbb{R}$ (irrationnel).'
      },
      recap: [
        'Les ensembles s\'emboîtent : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.',
        'Un décimal périodique est toujours rationnel ; un irrationnel a une écriture décimale infinie non périodique.',
        'Crochet fermé = borne incluse ; crochet ouvert = borne exclue ; l\'infini est toujours exclu.',
        '$\\cap$ donne les valeurs communes, $\\cup$ donne toutes les valeurs des deux intervalles.'
      ],
      piege: 'Ne jamais écrire $[+\\infty]$ ou $[-\\infty]$ : l\'infini n\'est pas un nombre, la borne est toujours ouverte de ce côté.'
    },
    quiz: [
      { q: 'Un élève dit que $1{,}333\\ldots = 1{,}\\overline{3}$ est irrationnel car « il ne se termine pas ». Quelle est son erreur ?', options: ['$1{,}\\overline{3} = \\frac{4}{3}$ est rationnel — tout décimal périodique est rationnel', 'L\'élève a raison, les décimaux infinis sont irrationnels', '$1{,}\\overline{3}$ est irrationnel comme $\\pi$', 'Cela dépend de la base de numération'], answer: 0, correction: 'Un rationnel peut s\'écrire $p/q$. Or $1{,}\\overline{3} = 4/3$. Les décimaux périodiques (motif répété indéfiniment) sont TOUS rationnels. Les irrationnels comme $\\sqrt{2}$ et $\\pi$ ont une expansion décimale infinie et non périodique.' },
      { q: 'Comment écrire "$x$ strictement supérieur à $2$ et inférieur ou égal à $7$" ?', options: ['$[2;7]$', '$]2;7]$', '$[2;7[$', '$]2;7[$'], answer: 1, correction: 'Strictement supérieur à $2$ → crochet ouvrant. Inférieur ou égal à $7$ → crochet fermant : $]2;7]$.' },
      { q: 'Que vaut $[-1;3] \\cap [1;5]$ ?', options: ['$[-1;5]$', '$[1;3]$', '$[-1;3]$', '$[1;5]$'], answer: 1, correction: 'L\'intersection contient les valeurs communes : de $\\max(-1,1)=1$ à $\\min(3,5)=3$.' },
      { q: 'Le nombre $\\sqrt{49}$ appartient-il à $\\mathbb{Q}$ ?', options: ['Oui, car $\\sqrt{49} = 7 \\in \\mathbb{N} \\subset \\mathbb{Q}$', 'Non, car toute racine carrée est irrationnelle', 'Oui, car $49$ est pair', 'Non, car $\\sqrt{49}$ ne s\'écrit pas $p/q$'], answer: 0, correction: '$\\sqrt{49} = 7$, qui est un entier naturel. Attention : $\\sqrt{n}$ n\'est irrationnel que si $n$ n\'est pas un carré parfait. $49 = 7^2$, donc $\\sqrt{49}$ est parfaitement rationnel. Ne pas confondre « racine carrée » et « irrationnel ».' },
      { q: 'Que vaut $[2;6] \\cup [8;10]$ ? Peut-on simplifier ?', options: ['$[2;10]$', '$[2;6] \\cup [8;10]$ (non simplifiable, intervalles disjoints)', '$[8;10]$', '$\\varnothing$ (ensemble vide)'], answer: 1, correction: 'Les intervalles $[2;6]$ et $[8;10]$ ne se chevauchent pas (aucune valeur entre $6$ et $8$ n\'est dans les deux). L\'union ne peut pas se simplifier en un seul intervalle. On écrit $[2;6] \\cup [8;10]$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un médicament est efficace pour des températures corporelles dans', unit: '°C' },
          { intro: 'Une plante pousse à des altitudes comprises dans', unit: 'm' },
          { intro: 'Un capteur fonctionne correctement pour des pressions dans', unit: 'hPa' },
          { intro: 'Un poisson survit dans des températures d\'eau comprises dans', unit: '°C' }
        ];
        const ctx = pick(contexts);
        const a1 = rand(1, 5);
        const b1 = a1 + rand(4, 8);
        const a2 = a1 + rand(2, 4);
        const b2 = b1 + rand(1, 4);
        const interLeft = Math.max(a1, a2);
        const interRight = Math.min(b1, b2);
        const interLength = interRight - interLeft;
        return {
          statement: `${ctx.intro} l'intervalle $I_1 = [${a1};${b1}]$ ${ctx.unit} et un second phénomène se produit dans $I_2 = [${a2};${b2}]$ ${ctx.unit}.<br/><br/><strong>1.</strong> Déterminer $I_1 \\cap I_2$ (valeurs communes).<br/><strong>2.</strong> Calculer la longueur de cette intersection.<br/><br/>Donne la <strong>longueur</strong> de $I_1 \\cap I_2$.`,
          answer: interLength,
          tolerance: 0,
          unit: ctx.unit,
          hint: `L'intersection $[a_1;b_1] \\cap [a_2;b_2] = [\\max(a_1,a_2);\\min(b_1,b_2)]$. Ici : $[\\max(${a1},${a2});\\min(${b1},${b2})] = [${interLeft};${interRight}]$.`,
          solution: [
            `$I_1 \\cap I_2 = [\\max(${a1},${a2});\\min(${b1},${b2})] = [${interLeft};${interRight}]$`,
            `Longueur $= ${interRight} - ${interLeft} = ${interLength}$ ${ctx.unit}`
          ]
        };
      }
    },
    probleme: {
      context: 'Un aquarium doit maintenir une température entre $22\\,°C$ et $28\\,°C$ pour les poissons tropicaux ($I_1 = [22;28]$). Les plantes aquatiques nécessitent des températures entre $18\\,°C$ et $26\\,°C$ ($I_2 = [18;26]$). Le chauffage peut régler entre $15\\,°C$ et $30\\,°C$ ($I_3 = [15;30]$).',
      tasks: [
        'Déterminer l\'intervalle de températures convenant simultanément aux poissons et aux plantes ($I_1 \\cap I_2$).',
        'Déterminer l\'intervalle de températures convenant à au moins l\'un des deux ($I_1 \\cup I_2$).',
        'La plage du chauffage permet-elle de couvrir tout l\'intervalle $I_1 \\cap I_2$ ? Justifier avec $I_3 \\cap (I_1 \\cap I_2)$.'
      ],
      solutions: [
        '$I_1 \\cap I_2 = [22;28] \\cap [18;26] = [22;26]$.',
        '$I_1 \\cup I_2 = [22;28] \\cup [18;26] = [18;28]$.',
        '$I_3 \\cap [22;26] = [15;30] \\cap [22;26] = [22;26]$ : oui, le chauffage couvre entièrement l\'intervalle requis.'
      ],
      finalAnswer: 'Température idéale pour les deux : $[22;26]$°C. Le chauffage couvre cette plage.'
    },

    evaluation: {
      title: 'Évaluation — Ensembles de nombres et intervalles',
      duration: '25 min',
      questions: [
        {
          statement: 'Parmi les nombres suivants, lequel est irrationnel ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{7}{3}$', '$0{,}\\overline{142857}$', '$\\sqrt{2}$', '$-4$'],
          answer: 2,
          points: 2,
          correction: '$\\frac{7}{3}$ et $0{,}\\overline{142857} = \\frac{1}{7}$ sont rationnels (quotient d\'entiers). $-4 \\in \\mathbb{Z} \\subset \\mathbb{Q}$. Seul $\\sqrt{2}$ est irrationnel : il ne peut pas s\'écrire sous forme $\\frac{p}{q}$.'
        },
        {
          statement: 'Écrire « $x$ supérieur ou égal à $-3$ et strictement inférieur à $5$ » en notation intervalle. Quelle est la bonne réponse ?',
          type: 'multiple-choice',
          options: ['$[-3;5]$', '$]-3;5[$', '$[-3;5[$', '$]-3;5]$'],
          answer: 2,
          points: 2,
          correction: '$x \\geq -3$ : crochet fermé en $-3$. $x < 5$ : crochet ouvert en $5$. Notation : $[-3;5[$.'
        },
        {
          statement: 'Calculer la longueur de l\'intervalle $]-2{,}5 ; 4{,}5[$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Longueur $= 4{,}5 - (-2{,}5) = 4{,}5 + 2{,}5 = 7$. Le type de crochets (ouverts ou fermés) ne change pas la longueur.'
        },
        {
          statement: 'Que vaut $[0;4] \\cap [2;7]$ ?',
          type: 'multiple-choice',
          options: ['$[0;7]$', '$[2;4]$', '$[0;4]$', '$[2;7]$'],
          answer: 1,
          points: 2,
          correction: 'L\'intersection contient les valeurs communes aux deux intervalles : de $\\max(0,2) = 2$ à $\\min(4,7) = 4$. Donc $[0;4] \\cap [2;7] = [2;4]$.'
        },
        {
          statement: 'Que vaut $[-1;3] \\cup [5;8]$ ? Peut-on simplifier cette union en un seul intervalle ?',
          type: 'multiple-choice',
          options: ['$[-1;8]$', '$[-1;3] \\cup [5;8]$ (non simplifiable car les intervalles sont disjoints)', '$[5;8]$', '$[-1;3]$'],
          answer: 1,
          points: 2,
          correction: 'Les intervalles $[-1;3]$ et $[5;8]$ ne se chevauchent pas (il n\'y a aucune valeur commune entre $3$ et $5$). L\'union ne peut donc pas se simplifier en un seul intervalle : on écrit $[-1;3] \\cup [5;8]$.'
        }
      ]
    }
  });
