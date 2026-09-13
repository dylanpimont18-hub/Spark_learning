/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-calcul-algebrique.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-calcul-algebrique',
    level: 2, subject: 'maths',
    icon: '🧮',
    title: 'Calcul algébrique',
    subtitle: 'Développer, factoriser, identités remarquables',
    keywords: ['Développer', 'Factoriser', 'Identité remarquable', 'Distributivité'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Le calcul algébrique permet de
         transformer une expression en une forme équivalente » : une
         définition, donc l'entrée que le cahier des charges proscrit.

         DIFFICULTÉ PROPRE À CE CHAPITRE : c'est un chapitre d'OUTIL. Il ne
         sert pas à résoudre un problème du quotidien, il sert à rendre
         d'autres chapitres possibles. Toute mise en situation concrète
         serait donc un prétexte — le travers explicitement dénoncé par le
         cahier des charges.

         L'ouverture retenue est une DIFFICULTÉ RÉELLE, et même la plus
         coûteuse de l'année : l'élève croit que développer est toujours ce
         qu'il faut faire. On lui montre donc la même expression sous deux
         formes, et deux questions dont chacune n'est facile que dans UNE des
         deux. Il n'y a pas de bonne forme dans l'absolu, seulement une bonne
         forme pour une question donnée.

         Le test tient : on ne peut pas répondre « laquelle des deux
         écritures choisir ? » sans la notion — c'est précisément ce que le
         chapitre enseigne. */
      intro: 'Voici deux écritures du même objet :<br/><br/>' +
        '$A = (x - 3)(x + 5)$ et $A = x^2 + 2x - 15$.<br/><br/>' +
        'Développe la première : tu retrouves exactement la seconde. Ce sont donc deux façons d\'écrire la <strong>même</strong> expression, qui donnent la même valeur pour n\'importe quel $x$.<br/><br/>' +
        'Maintenant, deux questions.<br/><br/>' +
        '<strong>Première question :</strong> pour quelles valeurs de $x$ cette expression vaut-elle $0$ ? Sur la forme du haut, tu réponds presque sans calculer : un produit est nul quand l\'un de ses facteurs l\'est, donc $x = 3$ ou $x = -5$. Sur la forme du bas, tu es bloqué.<br/><br/>' +
        '<strong>Seconde question :</strong> combien vaut cette expression pour $x = 0$ ? Sur la forme du bas, tu lis la réponse directement : $-15$. Sur la forme du haut, il faut calculer $(-3) \\times 5$.<br/><br/>' +
        'Aucune des deux écritures n\'est meilleure que l\'autre. Ce qui décide, c\'est la <strong>question posée</strong>.<br/><br/>' +
        'C\'est tout l\'enjeu de ce chapitre, et c\'est là que se joue l\'erreur la plus fréquente de l\'année : on ne développe pas parce qu\'on sait développer, on choisit la forme qui répond à la question. <strong>Développer</strong> et <strong>factoriser</strong> sont deux chemins opposés entre ces deux écritures, et savoir lequel prendre vaut mieux que savoir les parcourir.',
      definitions: [
        { term: 'Développer', def: 'Transformer un produit en somme en supprimant les parenthèses : $a(b+c) = ab + ac$.' },
        { term: 'Factoriser', def: 'Transformer une somme en produit en mettant en facteur un terme commun ou en reconnaissant une identité remarquable.' },
        { term: 'Identité remarquable', def: 'Formule de calcul toujours vraie, comme $(a+b)^2 = a^2 + 2ab + b^2$, qui accélère les développements et factorisations.' },
        { term: 'Distributivité', def: 'Propriété : $a(b+c) = ab + ac$. C\'est la base du développement.' }
      ],
      method: {
        title: 'Choisir entre développer et factoriser',
        steps: [
          '<strong>Développer</strong> : appliquer la distributivité $a(b+c)=ab+ac$ ou les identités remarquables. <strong>Exemple :</strong> $3(2x+5) = 6x + 15$.',
          '<strong>Trois identités remarquables</strong> : $(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$. <strong>Exemple :</strong> $(x+4)^2 = x^2 + 8x + 16$ (ne pas oublier le $2ab = 8x$).',
          '<strong>Factoriser</strong> : repérer un facteur commun ou reconnaître une identité dans l\'expression développée. <strong>Exemple :</strong> $x^2 - 9 = (x+3)(x-3)$ (différence de deux carrés).',
          '<strong>Vérification</strong> : redévelopper le résultat factorisé. <strong>Exemple :</strong> $(x+3)(x-3) = x^2 - 3x + 3x - 9 = x^2 - 9$ ✓'
        ]
      },
      example: {
        statement: 'Factoriser l\'expression $A = 4x^2 - 20x + 25$.',
        steps: [
          'On repère que $4x^2 = (2x)^2$ et $25 = 5^2$.',
          'On vérifie le double produit : $2 \\times 2x \\times 5 = 20x$ ✓ — c\'est bien l\'identité $(a - b)^2 = a^2 - 2ab + b^2$.',
          'Donc $A = (2x - 5)^2$.'
        ],
        answer: '$4x^2 - 20x + 25 = (2x - 5)^2$.'
      },
      formulas: [
        '$(a+b)^2 = a^2 + 2ab + b^2$',
        '$(a-b)^2 = a^2 - 2ab + b^2$',
        '$(a+b)(a-b) = a^2 - b^2$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Identité remarquable — $(a+b)^2$',
        title: 'Aire du carré de côté (x + 4) découpée en 4 régions',
        description: 'Preuve géométrique de l\'exemple du cours (méthode, étape 2) : $(x+4)^2 = x^2+8x+16$, obtenue en sommant les 4 aires d\'un carré de côté $x+4$.',
        svg: `
          <svg viewBox="0 0 460 410" role="img" aria-labelledby="carre-identite-title carre-identite-desc">
            <title id="carre-identite-title">Carre de cote (x+4) decompose en 4 aires</title>
            <desc id="carre-identite-desc">Un grand carre de cote x plus 4 est partage par une ligne verticale et une ligne horizontale en 4 rectangles : un carre d'aire x au carre en haut a gauche, deux rectangles egaux d'aire 4x en haut a droite et en bas a gauche, et un petit carre d'aire 16 en bas a droite. La somme des quatre aires redonne x au carre plus 8x plus 16.</desc>

            <text class="label-soft" x="240" y="28" text-anchor="middle">Aire totale = (x + 4)²</text>

            <rect class="frame-line" x="100" y="60" width="200" height="200" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></rect>
            <rect class="frame-line" x="300" y="60" width="80" height="200" fill="color-mix(in srgb, var(--accent) 14%, transparent)"></rect>
            <rect class="frame-line" x="100" y="260" width="200" height="80" fill="color-mix(in srgb, var(--accent) 14%, transparent)"></rect>
            <rect class="frame-line" x="300" y="260" width="80" height="80" fill="color-mix(in srgb, var(--secondary) 14%, transparent)"></rect>
            <rect class="frame-line" x="100" y="60" width="280" height="280" fill="none"></rect>

            <text class="annotation-label" x="200" y="165" text-anchor="middle">x²</text>
            <text class="annotation-label" x="340" y="165" text-anchor="middle">4x</text>
            <text class="annotation-label" x="200" y="304" text-anchor="middle">4x</text>
            <text class="annotation-label" x="340" y="304" text-anchor="middle">16</text>

            <text class="axis-label" x="200" y="50" text-anchor="middle">x</text>
            <text class="axis-label" x="340" y="50" text-anchor="middle">4</text>
            <text class="axis-label" x="80" y="164" text-anchor="middle">x</text>
            <text class="axis-label" x="80" y="304" text-anchor="middle">4</text>

            <rect x="100" y="350" width="280" height="40" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="tick-label" x="240" y="374" text-anchor="middle">x² + 4x + 4x + 16 = x² + 8x + 16</text>
          </svg>
        `,
        notes: [
          'Le carré de côté $(x+4)$ se découpe en 4 aires : le grand carré $x^2$, les deux rectangles égaux $4x$, et le petit carré $16$.',
          'La somme des 4 aires redonne le développement : $x^2 + 4x + 4x + 16 = x^2 + 8x + 16$, soit l\'identité $(a+b)^2 = a^2 + 2ab + b^2$ avec $a=x$ et $b=4$.',
          'Ce découpage est une preuve géométrique valable quels que soient $a$ et $b$ — le schéma n\'est pas à l\'échelle puisque $x$ est une variable.'
        ],
        reading: 'Repère les deux rectangles du milieu (aire $4x$ chacun) : ensemble, ils forment le terme croisé $2ab = 8x$ de la formule.',
        caption: 'Décomposition géométrique de $(x+4)^2$ reprenant l\'exemple du cours (méthode, étape 2) : $x^2 + 8x + 16$.'
      },
      recap: [
        'Développer = supprimer les parenthèses (produit → somme) ; factoriser = créer des parenthèses (somme → produit).',
        'Les trois identités remarquables sont les outils centraux : les reconnaître dans les deux sens.',
        'Pour résoudre $f(x) = 0$, la forme factorisée est indispensable (produit nul ⟺ un facteur nul).',
        'Toujours vérifier en redéveloppant le résultat factorisé pour retrouver l\'expression initiale.'
      ],
      piege: 'Ne jamais écrire $(a+b)^2 = a^2 + b^2$ : le terme croisé $2ab$ est indispensable !'
    },
    quiz: [
      { q: 'Un élève factorise $x^2 + 6x + 9$ et écrit $(x+3)(x-3)$. Quelle est son erreur ?', options: ['C\'est $(x+3)^2$, pas une différence de carrés — $(x+3)(x-3) = x^2-9 \\neq x^2+6x+9$', 'La factorisation est correcte', 'Il fallait écrire $(x-3)^2$', 'L\'expression n\'est pas factorisable'], answer: 0, correction: '$x^2+6x+9 = (x+3)^2$ (carré d\'une somme). L\'élève a confondu avec $(a+b)(a-b) = a^2 - b^2$, qui ne s\'applique qu\'à une DIFFÉRENCE de carrés. Vérification : $(x+3)(x-3) = x^2-9 \\neq x^2+6x+9$.' },
      { q: 'Factoriser $x^2-25$', options: ['$(x-5)^2$', '$(x+5)(x-5)$', '$(x-5)(x+5)^2$', 'Non factorisable'], answer: 1, correction: '$x^2-25 = x^2-5^2 = (x+5)(x-5)$.' },
      { q: 'Développer $(2x-1)(2x+1)$', options: ['$4x^2-1$', '$4x^2+1$', '$4x^2-4x+1$', '$2x^2-1$'], answer: 0, correction: '$(2x-1)(2x+1)=(2x)^2-1^2=4x^2-1$.' },
      { q: 'Un élève développe $(x-3)^2$ et obtient $x^2 - 9$. Quel terme a-t-il oublié ?', options: ['Le double produit $-6x$ : la bonne réponse est $x^2 - 6x + 9$', 'Le terme $+9$ : il a écrit $x^2 - 6x$ au lieu de $x^2 - 6x + 9$', 'Rien, son calcul est correct', 'Il a inversé le signe : c\'est $x^2 + 9$'], answer: 0, correction: '$(x-3)^2 = x^2 - 2 \\times x \\times 3 + 3^2 = x^2 - 6x + 9$. L\'élève a écrit $x^2 - 9$ qui correspond à $(x-3)(x+3)$ (différence de carrés). L\'oubli du double produit $-6x$ est l\'erreur la plus fréquente avec les identités remarquables.' },
      { q: 'On veut résoudre $(x-2)(x+5) = 0$. Les solutions sont :', options: ['$x = 2$ ou $x = -5$', '$x = -2$ ou $x = 5$', '$x = 2$ uniquement', '$x = 10$'], answer: 0, correction: 'Un produit est nul si et seulement si l\'un des facteurs est nul. $x - 2 = 0 \\Rightarrow x = 2$ ou $x + 5 = 0 \\Rightarrow x = -5$. C\'est l\'intérêt de la forme factorisée pour résoudre $f(x) = 0$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        /* GÉNÉRATEUR ÉLARGI le 2026-09-13 : 3 tâches avant, 6 après.
           Le chapitre s'intitule « Calcul algébrique » mais ne proposait que
           de la FACTORISATION. Développer, réduire et choisir la bonne forme
           — c'est-à-dire l'autre moitié du chapitre, et ce que l'évaluation
           interroge — n'étaient travaillés par aucun exercice. */
        const types = ['factoriser_diff', 'factoriser_carre', 'resoudre',
                       'developper_carre', 'developper_produit', 'valeur'];
        const type = pick(types);

        /* Tâche 4 — développer un carré. Le double produit est l'erreur
           reine du chapitre : on la fait travailler de face. */
        if (type === 'developper_carre') {
          const a = rand(2, 7), b = rand(2, 9);
          const signe = pick([1, -1]);
          const dbl = 2 * a * b * signe;
          return {
            statement: `Développe et réduis $(${a}x ${signe > 0 ? '+' : '-'} ${b})^2$.<br/><br/>Donne le <strong>coefficient du terme en $x$</strong>.`,
            answer: dbl, tolerance: 0, unit: '',
            hint: `Utilise l'identité $(u ${signe > 0 ? '+' : '-'} v)^2 = u^2 ${signe > 0 ? '+' : '-'} 2uv + v^2$, avec $u = ${a}x$ et $v = ${b}$. N'oublie surtout pas le double produit $2uv$.`,
            solution: [
              `On applique l'identité remarquable avec $u = ${a}x$ et $v = ${b}$.`,
              `$(${a}x ${signe > 0 ? '+' : '-'} ${b})^2 = ${a * a}x^2 ${dbl >= 0 ? '+' : '-'} ${Math.abs(dbl)}x + ${b * b}$.`,
              `Le coefficient du terme en $x$ est donc $${dbl}$ : c'est le double produit, la partie qu'on oublie le plus souvent.`
            ]
          };
        }

        /* Tâche 5 — développer un produit de deux binômes quelconques. */
        if (type === 'developper_produit') {
          const a = rand(2, 5), b = rand(1, 8), c = rand(2, 5), d = rand(1, 8);
          const cst = b * d;
          return {
            statement: `Développe et réduis $(${a}x + ${b})(${c}x + ${d})$.<br/><br/>Donne le <strong>terme constant</strong> du résultat.`,
            answer: cst, tolerance: 0, unit: '',
            hint: `Multiplie chaque terme de la première parenthèse par chaque terme de la seconde : cela fait quatre produits. Le terme constant est celui qui ne contient aucun $x$.`,
            solution: [
              `On développe les quatre produits : $${a * c}x^2 + ${a * d}x + ${b * c}x + ${cst}$.`,
              `En réduisant : $${a * c}x^2 + ${a * d + b * c}x + ${cst}$.`,
              `Le terme constant est $${cst}$, c'est-à-dire le produit des deux constantes $${b} \\times ${d}$.`
            ]
          };
        }

        /* Tâche 6 — évaluer une expression en un nombre. Sert de contrôle :
           deux écritures équivalentes donnent la MÊME valeur, ce qui est la
           façon la plus sûre de vérifier une factorisation. */
        if (type === 'valeur') {
          const a = rand(2, 6), b = rand(1, 7);
          const x = rand(-4, 5);
          const val = (a * x + b) * (a * x - b);
          return {
            statement: `On pose $A = (${a}x + ${b})(${a}x - ${b})$.<br/><br/>Calcule la valeur de $A$ pour $x = ${x}$.`,
            answer: val, tolerance: 0, unit: '',
            hint: `Deux méthodes donnent le même résultat : remplacer $x$ directement dans la forme factorisée, ou développer d'abord en $${a * a}x^2 - ${b * b}$. Choisis la plus courte.`,
            solution: [
              `La forme factorisée est la plus rapide ici : $A = (${a} \\times ${x} + ${b})(${a} \\times ${x} - ${b})$.`,
              `$A = (${a * x + b}) \\times (${a * x - b}) = ${val}$.`,
              `Contrôle par la forme développée, $A = ${a * a}x^2 - ${b * b}$ : $${a * a} \\times ${x * x} - ${b * b} = ${val}$ ✓. Deux écritures d'une même expression donnent toujours la même valeur.`
            ]
          };
        }
        if (type === 'factoriser_diff') {
          const a = rand(2, 6);
          const b = rand(1, 9);
          const a2 = a * a;
          const b2 = b * b;
          const expr = a2 + 'x^2 - ' + b2;
          return {
            statement: `Factoriser $A = ${a2}x^2 - ${b2}$ en reconnaissant une identité remarquable, puis résoudre $A = 0$.<br/><br/>Combien y a-t-il de solutions ? Donne le <strong>produit</strong> des deux solutions.`,
            answer: parseFloat(((-b/a) * (b/a)).toFixed(4)),
            tolerance: 0.01,
            unit: '',
            hint: `Reconnaître $${a2}x^2 = (${a}x)^2$ et $${b2} = ${b}^2$. C'est une différence de deux carrés : $(${a}x)^2 - ${b}^2 = (${a}x + ${b})(${a}x - ${b})$.`,
            solution: [
              `$${a2}x^2 - ${b2} = (${a}x)^2 - ${b}^2 = (${a}x + ${b})(${a}x - ${b})$`,
              `$A = 0 \\Leftrightarrow ${a}x + ${b} = 0$ ou $${a}x - ${b} = 0$`,
              `$x = -\\frac{${b}}{${a}}$ ou $x = \\frac{${b}}{${a}}$`,
              `Produit : $\\left(-\\frac{${b}}{${a}}\\right) \\times \\frac{${b}}{${a}} = -\\frac{${b*b}}{${a*a}} = ${fr((-b/a) * (b/a), 4)}$`
            ]
          };
        } else if (type === 'factoriser_carre') {
          const a = rand(2, 5);
          const b = rand(1, 6);
          const sign = pick(['+', '-']);
          const a2 = a * a;
          const b2 = b * b;
          const dblProd = 2 * a * b;
          const constTerm = sign === '+' ? `+ ${dblProd}x + ${b2}` : `- ${dblProd}x + ${b2}`;
          const answer = sign === '+' ? dblProd : -dblProd;
          return {
            statement: `L'expression $B = ${a2}x^2 ${constTerm}$ est un carré parfait. Factoriser $B$ sous la forme $(\\ldots)^2$.<br/><br/>Donne le <strong>coefficient de $x$</strong> dans le développement (avec son signe).`,
            answer: answer,
            tolerance: 0,
            unit: '',
            hint: `Vérifie si le double produit correspond : $2 \\times ${a}x \\times ${b} = ${dblProd}x$. Identité $(a ${sign} b)^2$.`,
            solution: [
              `$${a2}x^2 = (${a}x)^2$, $${b2} = ${b}^2$, double produit $= 2 \\times ${a} \\times ${b} = ${dblProd}$ ✓`,
              `$B = (${a}x ${sign} ${b})^2$`,
              `Le coefficient de $x$ est $${answer}$.`
            ]
          };
        } else {
          const p = rand(1, 6);
          const q = rand(1, 6);
          return {
            statement: `Factoriser $C = x^2 + ${p+q}x + ${p*q}$ puis résoudre $C = 0$.<br/><br/>Donne la <strong>plus grande</strong> solution de $C = 0$.`,
            answer: -Math.min(p, q),
            tolerance: 0,
            unit: '',
            hint: `On cherche deux nombres dont la somme est $${p+q}$ et le produit est $${p*q}$.`,
            solution: [
              `On cherche $a$ et $b$ tels que $a + b = ${p+q}$ et $a \\times b = ${p*q}$`,
              `$a = ${p}$ et $b = ${q}$ conviennent : $C = (x + ${p})(x + ${q})$`,
              `$C = 0 \\Leftrightarrow x = -${p}$ ou $x = -${q}$`,
              `La plus grande solution est $x = ${-Math.min(p, q)}$.`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'Un terrain rectangulaire a pour longueur $(2x + 3)$ m et pour largeur $(2x - 3)$ m. Un second terrain carré a pour côté $2x$ m.',
      tasks: [
        'Exprimer l\'aire $A_1$ du terrain rectangulaire sous forme développée en utilisant une identité remarquable.',
        'Exprimer l\'aire $A_2$ du terrain carré.',
        'Calculer la différence $A_2 - A_1$. Que remarque-t-on ? Calculer pour $x = 5$ m.'
      ],
      solutions: [
        '$A_1 = (2x+3)(2x-3) = (2x)^2 - 3^2 = 4x^2 - 9$.',
        '$A_2 = (2x)^2 = 4x^2$.',
        '$A_2 - A_1 = 4x^2 - (4x^2 - 9) = 9$ m². La différence est constante, indépendante de $x$ ! Pour $x = 5$ : $A_1 = 91$ m², $A_2 = 100$ m², différence $= 9$ m².'
      ],
      finalAnswer: 'La différence d\'aire est toujours $9$ m², quelle que soit la valeur de $x$.'
    },

    evaluation: {
      title: 'Évaluation — Calcul algébrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Développer et réduire $(3x + 5)^2$. Donner le coefficient du terme en $x^2$.',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(3x+5)^2 = (3x)^2 + 2 \\times 3x \\times 5 + 5^2 = 9x^2 + 30x + 25$. Le coefficient de $x^2$ est $9$.'
        },
        /* Q2 RÉÉCRITE le 2026-09-13. L'ancienne version demandait « Factoriser
           $x^2 - 49$ », c'est-à-dire d'appliquer une identité remarquable :
           c'était « calculer », et la compétence était déjà largement servie
           par Q1 et Q3 du même devoir. La nouvelle version demande de
           RECONNAÎTRE une même quantité sous deux écritures, sans rien
           calculer de nouveau — la définition même de « représenter ».
           L'étiquette suit l'énoncé, jamais l'inverse. */
        {
          statement: 'Un rectangle a pour longueur $x + 7$ et pour largeur $x - 7$.<br/><br/>Parmi les écritures suivantes, laquelle désigne <strong>la même aire</strong> que le produit $(x+7)(x-7)$ ?',
          type: 'multiple-choice',
          options: ['$x^2 - 49$', '$x^2 + 49$', '$x^2 - 14x + 49$', '$2x$'],
          answer: 0,
          points: 2,
          correction: 'Les deux écritures désignent la <strong>même</strong> aire, vue de deux façons : $(x+7)(x-7)$ la décrit comme un produit de deux côtés, $x^2 - 49$ la décrit comme un carré de côté $x$ auquel il manque $49$.<br/><br/>C\'est la différence de deux carrés : $a^2 - b^2 = (a+b)(a-b)$, ici avec $a = x$ et $b = 7$.<br/><br/>Tu peux le vérifier sur un nombre : pour $x = 10$, le produit vaut $17 \\times 3 = 51$, et $x^2 - 49 = 100 - 49 = 51$ également.'
        },
        {
          statement: 'Développer et réduire $(2x - 3)(2x + 3)$. Donner le terme constant.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(2x-3)(2x+3) = (2x)^2 - 3^2 = 4x^2 - 9$. Le terme constant est $-9$.'
        },
        /* Q4 RÉÉCRITE le 2026-09-13. L'ancienne demandait de développer
           $(x-4)^2$ et de donner un coefficient : du calcul, pour la troisième
           fois du même devoir. La nouvelle demande de JUGER un raisonnement
           faux et de dire POURQUOI il échoue — produire une explication, non
           un nombre. C'est « communiquer », la compétence la moins évaluée de
           l'ouvrage avant cette révision. */
        {
          statement: 'Pour développer $(x - 4)^2$, un élève écrit : « $(x-4)^2 = x^2 - 16$, puisqu\'on élève chaque terme au carré ».<br/><br/>Son résultat est faux. Quelle explication rend le mieux compte de son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il a oublié le double produit $-2 \\times x \\times 4 = -8x$ : le carré d\'une somme n\'est pas la somme des carrés.',
            'Il s\'est trompé de signe : la bonne réponse est $x^2 + 16$.',
            'Il fallait écrire $(x-4)^2 = x^2 - 4^2 = x^2 - 16$, son calcul est juste.',
            'Il aurait dû factoriser au lieu de développer.'
          ],
          answer: 0,
          points: 2,
          correction: 'Le développement correct est $(x-4)^2 = x^2 - 2 \\times x \\times 4 + 4^2 = x^2 - 8x + 16$.<br/><br/>L\'élève a traité le carré comme s\'il se distribuait sur chaque terme. C\'est le <strong>double produit</strong> $-8x$ qui manque, et c\'est l\'erreur la plus fréquente du chapitre.<br/><br/>Un contre-exemple numérique suffit à la trancher : pour $x = 10$, $(10-4)^2 = 6^2 = 36$, alors que $x^2 - 16 = 84$. Les deux nombres diffèrent, donc l\'égalité de l\'élève est fausse.'
        },
        {
          statement: 'Quelle identité remarquable permet de factoriser $4x^2 + 12x + 9$ ?',
          type: 'multiple-choice',
          options: ['$(a+b)(a-b) = a^2 - b^2$', '$(a+b)^2 = a^2 + 2ab + b^2$', '$(a-b)^2 = a^2 - 2ab + b^2$', 'Aucune identité ne convient'],
          answer: 1,
          points: 2,
          correction: '$4x^2 + 12x + 9 = (2x)^2 + 2 \\times 2x \\times 3 + 3^2 = (2x+3)^2$. C\'est l\'identité $(a+b)^2$ avec $a = 2x$ et $b = 3$.'
        }
      ]
    }
  });
