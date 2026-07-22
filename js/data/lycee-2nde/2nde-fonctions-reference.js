/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-fonctions-reference.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-fonctions-reference',
    level: 2, subject: 'maths',
    icon: '🔭',
    title: 'Fonctions de référence',
    subtitle: 'Carré, inverse, racine carrée',
    keywords: ['Fonction carré', 'Fonction inverse', 'Racine carrée', 'Parité'],
    physics: 'Chute libre (fonction carré), lois en 1/x en électricité (fonction inverse), période d\'un pendule (fonction racine carrée)',
    cours: {
      intro: 'Les trois <strong>fonctions de référence</strong> ($x\\mapsto x^2$, $x\\mapsto 1/x$, $x\\mapsto \\sqrt{x}$) sont les briques de base de l\'analyse.<br/><br/>La <strong>fonction carré</strong> est paire ($f(-x) = f(x)$), atteint son minimum $0$ en $x=0$, et est définie sur $\\mathbb{R}$. La <strong>fonction inverse</strong> est impaire et n\'est jamais nulle : son domaine exclut $0$. La <strong>racine carrée</strong> n\'est définie que pour $x \\geq 0$ et est toujours croissante.<br/><br/>Ces domaines sont fondamentaux : $\\sqrt{x-2}$ n\'existe que si $x \\geq 2$, $1/(x-3)$ est interdite en $x = 3$.<br/><br/>Enfin, $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un produit — mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$.',
      definitions: [
        { term: 'Fonction carré', def: 'Fonction $f(x) = x^2$. Définie sur $\\mathbb{R}$, paire, minimum en $0$. Sa courbe est une parabole tournée vers le haut.' },
        { term: 'Fonction inverse', def: 'Fonction $g(x) = \\dfrac{1}{x}$. Définie sur $\\mathbb{R} \\setminus \\{0\\}$, impaire, jamais nulle. Sa courbe est une hyperbole.' },
        { term: 'Fonction racine carrée', def: 'Fonction $h(x) = \\sqrt{x}$. Définie sur $[0 ; +\\infty[$, toujours croissante, $h(0) = 0$.' },
        { term: 'Parité', def: 'Une fonction est paire si $f(-x) = f(x)$ (symétrie par rapport à l\'axe des ordonnées) ; impaire si $f(-x) = -f(x)$ (symétrie par rapport à l\'origine).' }
      ],
      method: {
        title: 'Caractéristiques des trois fonctions',
        steps: [
          '<strong>Fonction carré $f(x)=x^2$</strong> : domaine $\\mathbb{R}$, décroissante sur $]-\\infty;0]$, croissante sur $[0;+\\infty[$, minimum $0$ en $x=0$. <strong>Exemple :</strong> $f(-3) = 9$ et $f(3) = 9$ (parité : $f(-x) = f(x)$).',
          '<strong>Fonction inverse $g(x)=\\frac{1}{x}$</strong> : domaine $\\mathbb{R}\\setminus\\{0\\}$, décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$. <strong>Exemple :</strong> $g(2) = 0{,}5$ et $g(4) = 0{,}25$ : quand $x$ augmente, $g(x)$ diminue.',
          '<strong>Racine carrée $h(x)=\\sqrt{x}$</strong> : domaine $[0;+\\infty[$, croissante, $h(0)=0$. <strong>Exemple :</strong> $\\sqrt{9} = 3$, $\\sqrt{16} = 4$ : quand $x$ augmente, $\\sqrt{x}$ augmente aussi.',
          '<strong>Comparer des racines</strong> : $a > b \\ge 0 \\Rightarrow \\sqrt{a} > \\sqrt{b}$. <strong>Exemple :</strong> $25 > 16 \\Rightarrow \\sqrt{25} = 5 > \\sqrt{16} = 4$.'
        ]
      },
      example: {
        statement: 'Déterminer le domaine de définition de $f(x) = \\sqrt{2x - 6} + \\dfrac{1}{x - 1}$.',
        steps: [
          'Pour $\\sqrt{2x - 6}$ : il faut $2x - 6 \\geq 0$, soit $x \\geq 3$. Domaine partiel : $[3 ; +\\infty[$.',
          'Pour $\\dfrac{1}{x - 1}$ : il faut $x - 1 \\neq 0$, soit $x \\neq 1$. Domaine partiel : $\\mathbb{R} \\setminus \\{1\\}$.',
          'Le domaine de $f$ est l\'intersection : $[3 ; +\\infty[ \\cap \\mathbb{R} \\setminus \\{1\\} = [3 ; +\\infty[$ (car $1 \\notin [3 ; +\\infty[$).'
        ],
        answer: 'Le domaine de définition de $f$ est $[3 ; +\\infty[$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Trois fonctions de référence, trois échelles',
        title: 'Comparer carré, inverse et racine carrée',
        description: 'Chaque courbe est calculée point par point à partir de sa définition, avec les valeurs remarquables du cours ($f(3)=9$, $g(2)=0{,}5$, $h(9)=3$).',
        svg: `
          <svg viewBox="0 0 580 250" role="img" aria-labelledby="ref-diagram-title ref-diagram-desc">
            <title id="ref-diagram-title">Trois fonctions de reference juxtaposees</title>
            <desc id="ref-diagram-desc">Trois reperes cote a cote : la fonction carre x au carre, la fonction inverse 1 sur x, et la fonction racine carree, chacune tracee point par point avec ses valeurs remarquables.</desc>

            <!-- Panneau 1 : carre -->
            <text class="annotation-label" x="95" y="14" text-anchor="middle">Carré : f(x) = x²</text>
            <line class="grid-line" x1="20" y1="200" x2="20" y2="40"></line>
            <line class="grid-line" x1="45" y1="200" x2="45" y2="40"></line>
            <line class="grid-line" x1="70" y1="200" x2="70" y2="40"></line>
            <line class="grid-line" x1="95" y1="200" x2="95" y2="40"></line>
            <line class="grid-line" x1="120" y1="200" x2="120" y2="40"></line>
            <line class="grid-line" x1="145" y1="200" x2="145" y2="40"></line>
            <line class="grid-line" x1="170" y1="200" x2="170" y2="40"></line>
            <line class="grid-line" x1="20" y1="200" x2="170" y2="200"></line>
            <line class="grid-line" x1="20" y1="146.7" x2="170" y2="146.7"></line>
            <line class="grid-line" x1="20" y1="93.3" x2="170" y2="93.3"></line>
            <line class="grid-line" x1="20" y1="40" x2="170" y2="40"></line>
            <line class="axis" x1="10" y1="200" x2="180" y2="200"></line>
            <line class="axis" x1="95" y1="210" x2="95" y2="30"></line>
            <text class="tick-label" x="20" y="212" text-anchor="middle">-3</text>
            <text class="tick-label" x="45" y="212" text-anchor="middle">-2</text>
            <text class="tick-label" x="70" y="212" text-anchor="middle">-1</text>
            <text class="tick-label" x="95" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="120" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="145" y="212" text-anchor="middle">2</text>
            <text class="tick-label" x="170" y="212" text-anchor="middle">3</text>
            <text class="tick-label" x="14" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="14" y="149.7" text-anchor="end">3</text>
            <text class="tick-label" x="14" y="96.3" text-anchor="end">6</text>
            <text class="tick-label" x="14" y="43" text-anchor="end">9</text>
            <polyline class="curve-main" points="20.0,40.0 26.2,65.6 32.5,88.9 38.8,110.0 45.0,128.9 51.2,145.6 57.5,160.0 63.8,172.2 70.0,182.2 76.2,190.0 82.5,195.6 88.8,198.9 95.0,200.0 101.2,198.9 107.5,195.6 113.8,190.0 120.0,182.2 126.2,172.2 132.5,160.0 138.8,145.6 145.0,128.9 151.2,110.0 157.5,88.9 163.8,65.6 170.0,40.0"></polyline>
            <circle class="plot-point" cx="20" cy="40" r="3"></circle>
            <circle class="plot-point" cx="95" cy="200" r="3"></circle>
            <circle class="plot-point" cx="170" cy="40" r="3"></circle>
            <text class="tick-label" x="24" y="34">f(-3)=9</text>
            <text class="tick-label" x="150" y="34" text-anchor="end">f(3)=9</text>

            <!-- Panneau 2 : inverse -->
            <text class="annotation-label" x="285" y="14" text-anchor="middle">Inverse : g(x) = 1/x</text>
            <line class="grid-line" x1="210" y1="200" x2="210" y2="40"></line>
            <line class="grid-line" x1="247.5" y1="200" x2="247.5" y2="40"></line>
            <line class="grid-line" x1="322.5" y1="200" x2="322.5" y2="40"></line>
            <line class="grid-line" x1="360" y1="200" x2="360" y2="40"></line>
            <line class="grid-line" x1="210" y1="200" x2="360" y2="200"></line>
            <line class="grid-line" x1="210" y1="160" x2="360" y2="160"></line>
            <line class="grid-line" x1="210" y1="80" x2="360" y2="80"></line>
            <line class="grid-line" x1="210" y1="40" x2="360" y2="40"></line>
            <line class="axis" x1="200" y1="120" x2="370" y2="120"></line>
            <line class="axis" x1="285" y1="210" x2="285" y2="30"></line>
            <text class="tick-label" x="210" y="133" text-anchor="middle">-4</text>
            <text class="tick-label" x="247.5" y="133" text-anchor="middle">-2</text>
            <text class="tick-label" x="322.5" y="133" text-anchor="middle">2</text>
            <text class="tick-label" x="360" y="133" text-anchor="middle">4</text>
            <text class="tick-label" x="277" y="203" text-anchor="end">-4</text>
            <text class="tick-label" x="277" y="163" text-anchor="end">-2</text>
            <text class="tick-label" x="277" y="83" text-anchor="end">2</text>
            <text class="tick-label" x="277" y="43" text-anchor="end">4</text>
            <polyline class="curve-main" points="289.7,40.0 290.6,53.3 292.5,70.0 294.4,80.0 297.6,90.1 300.0,95.0 303.8,100.0 308.4,104.0 313.1,106.7 322.5,110.0 331.9,112.0 341.2,113.3 350.6,114.3 360.0,115.0"></polyline>
            <polyline class="curve-main" points="210.0,125.0 219.4,125.7 228.8,126.7 238.1,128.0 247.5,130.0 256.9,133.3 261.6,136.0 266.2,140.0 270.0,145.0 272.4,149.9 275.6,160.0 277.5,170.0 279.4,186.7 280.3,200.0"></polyline>
            <circle class="plot-point" cx="322.5" cy="110" r="3"></circle>
            <circle class="plot-point" cx="360" cy="115" r="3"></circle>
            <circle class="plot-point" cx="247.5" cy="130" r="3"></circle>
            <circle class="plot-point" cx="210" cy="125" r="3"></circle>
            <text class="tick-label" x="328" y="104">g(2)=0,5</text>
            <text class="tick-label" x="242" y="146" text-anchor="end">g(-2)=-0,5</text>

            <!-- Panneau 3 : racine -->
            <text class="annotation-label" x="475" y="14" text-anchor="middle">Racine : h(x) = √x</text>
            <line class="grid-line" x1="400" y1="200" x2="400" y2="40"></line>
            <line class="grid-line" x1="416.7" y1="200" x2="416.7" y2="40"></line>
            <line class="grid-line" x1="466.7" y1="200" x2="466.7" y2="40"></line>
            <line class="grid-line" x1="550" y1="200" x2="550" y2="40"></line>
            <line class="grid-line" x1="400" y1="200" x2="550" y2="200"></line>
            <line class="grid-line" x1="400" y1="146.7" x2="550" y2="146.7"></line>
            <line class="grid-line" x1="400" y1="93.3" x2="550" y2="93.3"></line>
            <line class="grid-line" x1="400" y1="40" x2="550" y2="40"></line>
            <line class="axis" x1="390" y1="200" x2="565" y2="200"></line>
            <line class="axis" x1="400" y1="210" x2="400" y2="30"></line>
            <text class="tick-label" x="400" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="416.7" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="466.7" y="212" text-anchor="middle">4</text>
            <text class="tick-label" x="550" y="212" text-anchor="middle">9</text>
            <text class="tick-label" x="392" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="392" y="149.7" text-anchor="end">1</text>
            <text class="tick-label" x="392" y="96.3" text-anchor="end">2</text>
            <text class="tick-label" x="392" y="43" text-anchor="end">3</text>
            <polyline class="curve-main" points="400.0,200.0 404.2,173.3 408.3,162.3 416.7,146.7 425.0,134.7 433.3,124.6 441.7,115.7 450.0,107.6 466.7,93.3 483.3,80.7 500.0,69.4 516.7,58.9 533.3,49.2 550.0,40.0"></polyline>
            <circle class="plot-point" cx="400" cy="200" r="3"></circle>
            <circle class="plot-point" cx="416.7" cy="146.7" r="3"></circle>
            <circle class="plot-point" cx="466.7" cy="93.3" r="3"></circle>
            <circle class="plot-point" cx="550" cy="40" r="3"></circle>
            <text class="tick-label" x="470" y="88" text-anchor="middle">h(4)=2</text>
            <text class="tick-label" x="540" y="34" text-anchor="end">h(9)=3</text>
          </svg>
        `,
        notes: [
          'La fonction carré (à gauche) est paire : sa courbe est symétrique par rapport à l\'axe des ordonnées, avec un minimum $0$ en $x=0$.',
          'La fonction inverse (au centre) est impaire : ses deux branches sont symétriques par rapport à l\'origine, et $x=0$ est exclu du domaine.',
          'La fonction racine carrée (à droite) n\'existe que pour $x \\geq 0$ et croît sur tout son domaine.'
        ],
        reading: 'Chaque panneau utilise sa propre échelle : les trois fonctions ont des vitesses de croissance très différentes (le carré explose, l\'inverse s\'écrase près de $0$, la racine ralentit).',
        caption: 'Les trois fonctions de référence tracées point par point : carré $x^2$, inverse $1/x$ et racine $\\sqrt{x}$, avec les valeurs remarquables citées dans le cours.'
      },
      formulas: [
        '$\\sqrt{a\\cdot b}=\\sqrt{a}\\cdot\\sqrt{b}$ (pour $a,b\\ge 0$)',
        '$\\left(\\sqrt{a}\\right)^2 = a$ (pour $a\\ge 0$)',
        '$\\sqrt{a^2}=|a|$'
      ],
      recap: [
        'Fonction carré : parabole, paire, minimum $0$ en $x = 0$, décroissante puis croissante.',
        'Fonction inverse : hyperbole, impaire, décroissante sur chaque intervalle, jamais nulle, interdite en $0$.',
        'Fonction racine carrée : définie pour $x \\geq 0$, toujours croissante.',
        '$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ ✓ mais $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ✗.'
      ],
      piege: '$\\sqrt{4+9} \\ne \\sqrt{4}+\\sqrt{9}$ : on ne peut pas séparer une somme sous un radical !'
    },
    quiz: [
      { q: 'Sur quel intervalle la fonction $x\\mapsto x^2$ est-elle décroissante ?', options: ['$[0;+\\infty[$', '$]-\\infty;0]$', '$\\mathbb{R}$', 'Elle est toujours croissante'], answer: 1, correction: '$x^2$ décroît sur $]-\\infty;0]$ et croît sur $[0;+\\infty[$. Son minimum est $0$.' },
      { q: 'Quel est le domaine de définition de $\\sqrt{x}$ ?', options: ['$\\mathbb{R}$', '$]0;+\\infty[$', '$[0;+\\infty[$', '$]-\\infty;0[$'], answer: 2, correction: 'On ne peut prendre la racine carrée que d\'un nombre positif ou nul : domaine $[0;+\\infty[$.' },
      { q: 'Un élève écrit $\\sqrt{9+16} = \\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Quelle est son erreur ?', options: ['On ne peut pas séparer $\\sqrt{a+b}$ : ici $\\sqrt{9+16} = \\sqrt{25} = 5 \\neq 7$', 'Il a mal calculé $\\sqrt{9}$ et $\\sqrt{16}$', 'Il n\'y a pas d\'erreur, $\\sqrt{25} = 7$', 'La racine carrée ne s\'applique qu\'aux entiers impairs'], answer: 0, correction: '$\\sqrt{9+16} = \\sqrt{25} = 5$, pas $7$. La propriété $\\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un PRODUIT, mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$ pour une SOMME.' },
      { q: 'Quel est le domaine de définition de $f(x) = \\sqrt{3 - x}$ ?', options: ['$]-\\infty;3]$', '$[3;+\\infty[$', '$\\mathbb{R}$', '$]0;3[$'], answer: 0, correction: 'Il faut $3 - x \\geq 0$, soit $x \\leq 3$. Le domaine est $]-\\infty;3]$. Attention : le signe de l\'inéquation s\'inverse quand l\'expression sous la racine est $a - x$ au lieu de $x - a$.' },
      { q: 'Comparer $(-3)^2$ et $-3^2$. Ces deux expressions sont-elles égales ?', options: ['Non : $(-3)^2 = 9$ mais $-3^2 = -(3^2) = -9$', 'Oui : les deux valent $9$', 'Oui : les deux valent $-9$', 'Non : $(-3)^2 = -9$ et $-3^2 = 9$'], answer: 0, correction: '$(-3)^2$ signifie « le carré de $-3$ » $= (-3) \\times (-3) = 9$. En revanche, $-3^2$ signifie « l\'opposé du carré de $3$ » $= -(3 \\times 3) = -9$. Les parenthèses changent tout ! C\'est un piège classique lors du calcul d\'images avec la fonction carré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const types = ['domaine', 'comparaison', 'composition'];
        const type = pick(types);
        if (type === 'domaine') {
          const a = rand(2, 8);
          const b = rand(1, 5);
          const borne = parseFloat((b / a).toFixed(2));
          const borneExact = b % a === 0 ? (b / a) : borne;
          const contexts = [
            { f: `\\sqrt{${a}x - ${b}}`, cond: `${a}x - ${b} \\geq 0`, sol: `x \\geq \\frac{${b}}{${a}}`, borneType: 'inf' },
            { f: `\\sqrt{${b} - ${a}x}`, cond: `${b} - ${a}x \\geq 0`, sol: `x \\leq \\frac{${b}}{${a}}`, borneType: 'sup' }
          ];
          const ctx = pick(contexts);
          return {
            statement: `Déterminer le domaine de définition de $f(x) = ${ctx.f}$.<br/><br/>Donne la <strong>borne</strong> de l'intervalle solution (sous forme décimale si nécessaire).`,
            answer: borneExact,
            tolerance: 0.01,
            unit: '',
            hint: `Pour que $\\sqrt{\\ldots}$ existe, il faut que l'expression sous la racine soit $\\geq 0$ : ${ctx.cond}.`,
            solution: [
              `Condition : ${ctx.cond}`,
              `${ctx.sol}$${b % a === 0 ? ` = ${b/a}` : ` \\approx ${borne}`}$`,
              `Domaine : $${ctx.borneType === 'inf' ? `[${borneExact};+\\infty[` : `]-\\infty;${borneExact}]`}$`
            ]
          };
        } else if (type === 'comparaison') {
          const vals = [
            { a: -5, b: -2 },
            { a: -7, b: -3 },
            { a: -4, b: -1 },
            { a: -6, b: -3 }
          ];
          const v = pick(vals);
          const a2 = v.a * v.a;
          const b2 = v.b * v.b;
          return {
            statement: `Comparer $${v.a}^2$ et $${v.b}^2$ sans calculatrice, en utilisant les variations de la fonction carré.<br/><br/>Lequel est le plus grand ? Donne sa valeur.`,
            answer: a2,
            tolerance: 0,
            unit: '',
            hint: `$${v.a}$ et $${v.b}$ sont négatifs. La fonction carré est <strong>décroissante</strong> sur $]-\\infty;0]$ : si $a < b < 0$, alors $a^2 > b^2$.`,
            solution: [
              `$${v.a} < ${v.b} < 0$ (les deux sont négatifs)`,
              `La fonction carré est décroissante sur $]-\\infty;0]$`,
              `Donc $${v.a}^2 > ${v.b}^2$, soit $${a2} > ${b2}$`,
              `Le plus grand est $${a2}$.`
            ]
          };
        } else {
          const a = rand(2, 5);
          const b = rand(1, 8);
          const xval = rand(2, 6);
          const innerVal = a * xval - b;
          if (innerVal <= 0) {
            return {
              statement: `Soit $f(x) = \\sqrt{2x + 1}$. Calculer $f(4)$.`,
              answer: 3,
              tolerance: 0,
              unit: '',
              hint: `$f(4) = \\sqrt{2 \\times 4 + 1} = \\sqrt{9}$.`,
              solution: [`$f(4) = \\sqrt{8 + 1} = \\sqrt{9} = 3$`]
            };
          }
          const sqrtVal = parseFloat(Math.sqrt(innerVal).toFixed(2));
          return {
            statement: `Soit $g(x) = \\sqrt{${a}x - ${b}} + \\frac{1}{x}$.<br/><br/><strong>1.</strong> Vérifier que $x = ${xval}$ appartient au domaine de définition.<br/><strong>2.</strong> Calculer $g(${xval})$ (arrondi au centième).<br/><br/>Donne la valeur de $g(${xval})$.`,
            answer: parseFloat((sqrtVal + 1/xval).toFixed(2)),
            tolerance: 0.05,
            unit: '',
            hint: `Domaine : $${a}x - ${b} \\geq 0$ (soit $x \\geq ${(b/a).toFixed(1)}$) ET $x \\neq 0$. Puis $g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}}$.`,
            solution: [
              `Condition racine : $${a} \\times ${xval} - ${b} = ${innerVal} \\geq 0$ ✓ ; $x = ${xval} \\neq 0$ ✓`,
              `$g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}} \\approx ${sqrtVal} + ${(1/xval).toFixed(2)} \\approx ${(sqrtVal + 1/xval).toFixed(2)}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'En physique, la période d\'un pendule simple est $T = 2\\pi\\sqrt{\\frac{L}{g}}$, où $L$ est la longueur du fil (en m) et $g = 9{,}81$ m/s². Un horloger veut fabriquer une horloge dont le pendule bat exactement la seconde ($T = 1$ s).',
      tasks: [
        'Exprimer $L$ en fonction de $T$ et $g$.',
        'Calculer la longueur $L$ nécessaire pour $T = 1$ s (arrondir au cm).',
        'Si l\'on double la longueur du fil, par combien est multipliée la période ? Pourquoi ?'
      ],
      solutions: [
        '$T = 2\\pi\\sqrt{L/g} \\Rightarrow T^2 = 4\\pi^2 \\cdot L/g \\Rightarrow L = \\frac{gT^2}{4\\pi^2}$.',
        '$L = \\frac{9{,}81 \\times 1^2}{4\\pi^2} = \\frac{9{,}81}{39{,}48} \\approx 0{,}25$ m $= 25$ cm.',
        'Si $L\' = 2L$ : $T\' = 2\\pi\\sqrt{2L/g} = \\sqrt{2} \\cdot 2\\pi\\sqrt{L/g} = \\sqrt{2} \\cdot T \\approx 1{,}41 \\cdot T$. La période est multipliée par $\\sqrt{2}$ (pas par $2$) car $T$ dépend de $\\sqrt{L}$.'
      ],
      finalAnswer: '$L \\approx 25$ cm pour $T = 1$ s. Doubler $L$ multiplie $T$ par $\\sqrt{2} \\approx 1{,}41$.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions de référence',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\sqrt{81}$.',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$\\sqrt{81} = 9$ car $9^2 = 81$.'
        },
        {
          statement: 'Sur quel intervalle la fonction $x \\mapsto x^2$ est-elle croissante ?',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 0]$', '$[0 ; +\\infty[$', '$\\mathbb{R}$', '$]-\\infty ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'La fonction carré est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$. Son minimum est $0$, atteint en $x = 0$.'
        },
        {
          statement: 'Calculer $\\sqrt{4 \\times 25}$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\sqrt{4 \\times 25} = \\sqrt{4} \\times \\sqrt{25} = 2 \\times 5 = 10$. On peut aussi calculer directement : $\\sqrt{100} = 10$.'
        },
        {
          statement: 'Quel est le domaine de définition de $f(x) = \\dfrac{1}{x-2}$ ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$', '$\\mathbb{R} \\setminus \\{2\\}$', '$\\mathbb{R} \\setminus \\{0\\}$', '$]2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'On ne peut pas diviser par $0$, donc $x - 2 \\neq 0$, soit $x \\neq 2$. Le domaine est $\\mathbb{R} \\setminus \\{2\\}$.'
        },
        {
          statement: 'Simplifier $\\sqrt{(-5)^2}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5$. Attention : $\\sqrt{a^2} = |a|$, pas $a$. Ici $|{-5}| = 5$.'
        }
      ]
    }
  });
