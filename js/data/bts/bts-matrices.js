/* =========================================================
   Spark Learning – data/bts/bts-matrices.js
   Module : Calcul Matriciel (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-matrices',
    level: 3, subject: 'maths',
    icon: '🔲',
    title: 'Calcul matriciel',
    subtitle: 'Opérations, inverse, systèmes matriciels',
    keywords: ['Matrice', 'Produit matriciel', 'Inverse', 'Déterminant', 'Système linéaire'],
    physics: true,
    cours: {
      intro: 'Les matrices sont le langage des systèmes linéaires : un réseau de distribution, un circuit électrique avec plusieurs mailles, un bilan d\'entrées-sorties industriel — tous se formulent comme $AX = B$ et se résolvent par $X = A^{-1}B$. La multiplication matricielle $AB$ n\'est pas commutative ($AB \\neq BA$ en général) — c\'est la principale différence avec la multiplication scalaire. Le déterminant $\\det(A)$ est le "critère d\'inversibilité" : si $\\det(A) = 0$, le système $AX = B$ soit n\'a pas de solution, soit en a une infinité. En BTS, les chaînes de Markov utilisent des matrices de transition dont les colonnes (ou lignes) somment à $1$ : elles modélisent l\'évolution probabiliste d\'un système (stocks, clients, pannes). L\'état stationnaire $\\pi$ vérifie $M\\pi = \\pi$ : c\'est un vecteur propre de valeur propre $1$.',
      definitions: [
        { term: 'Matrice $m \\times n$', def: 'Tableau rectangulaire de $m$ lignes et $n$ colonnes. Le terme $a_{ij}$ se trouve à la ligne $i$ et la colonne $j$. Deux matrices de mêmes dimensions s\'additionnent terme à terme.' },
        { term: 'Déterminant $\\det(A)$', def: 'Nombre associé à une matrice carrée. Pour $2 \\times 2$ : $\\det \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$. Si $\\det(A) = 0$ : matrice singulière (non inversible).' },
        { term: 'Matrice inverse $A^{-1}$', def: 'Matrice telle que $A \\cdot A^{-1} = A^{-1} \\cdot A = I$ (matrice identité). Elle existe si et seulement si $\\det(A) \\neq 0$.' },
        { term: 'Matrice de transition (Markov)', def: 'Matrice carrée dont les colonnes (ou lignes) somment à $1$. Modélise les transitions probabilistes entre états. L\'état stationnaire vérifie $M\\pi = \\pi$.' }
      ],
      method: {
        title: 'Multiplier et inverser une matrice',
        steps: [
          'Produit $AB$ : la ligne $i$ de $A$ et la colonne $j$ de $B$ donnent le terme $c_{ij}=\\sum_k a_{ik}b_{kj}$. <strong>Exemple :</strong> $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix} = \\begin{pmatrix}1 \\times 5 + 2 \\times 6\\\\3 \\times 5 + 4 \\times 6\\end{pmatrix} = \\begin{pmatrix}17\\\\39\\end{pmatrix}$.',
          '$AB$ n\'est défini que si le nombre de colonnes de $A$ = nombre de lignes de $B$. <strong>Exemple :</strong> $A$ est $2 \\times 3$ et $B$ est $3 \\times 1$ → $AB$ est $2 \\times 1$ (OK). Mais $BA$ n\'est pas défini ($1 \\times 1$ fois $2 \\times 3$ : non compatible).',
          'Inverse de $A$ $2\\times2$ : $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ avec $\\det A=ad-bc$. <strong>Exemple :</strong> $A = \\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$, $\\det A = 10$. $A^{-1} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$.',
          'Système $AX=B$ → $X=A^{-1}B$ si $A$ est inversible. <strong>Exemple :</strong> $\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\14\\end{pmatrix}$ → $\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}\\begin{pmatrix}7\\\\14\\end{pmatrix} = \\begin{pmatrix}1{,}4\\\\2{,}8\\end{pmatrix}$.'
        ]
      },
      example: {
        statement: 'Un circuit électrique à deux mailles obéit au système : $\\begin{cases}3I_1 + I_2 = 12\\\\I_1 + 2I_2 = 8\\end{cases}$. Résoudre par méthode matricielle pour trouver les courants $I_1$ et $I_2$ (en A).',
        steps: [
          'Mise en forme matricielle : $AX = B$ avec $A = \\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}$, $X = \\begin{pmatrix}I_1\\\\I_2\\end{pmatrix}$, $B = \\begin{pmatrix}12\\\\8\\end{pmatrix}$.',
          'Déterminant : $\\det(A) = 3 \\times 2 - 1 \\times 1 = 5 \\neq 0$ → $A$ est inversible.',
          'Inverse : $A^{-1} = \\frac{1}{5}\\begin{pmatrix}2&-1\\\\-1&3\\end{pmatrix}$.',
          '$X = A^{-1}B = \\frac{1}{5}\\begin{pmatrix}2 \\times 12 + (-1) \\times 8\\\\(-1) \\times 12 + 3 \\times 8\\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix}16\\\\12\\end{pmatrix} = \\begin{pmatrix}3{,}2\\\\2{,}4\\end{pmatrix}$.'
        ],
        answer: '$I_1 = 3{,}2$ A et $I_2 = 2{,}4$ A. On vérifie : $3 \\times 3{,}2 + 2{,}4 = 12$ ✓ et $3{,}2 + 2 \\times 2{,}4 = 8$ ✓.'
      },
      formulas: [
        '$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$',
        '$A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$',
        '$(AB)^{-1}=B^{-1}A^{-1}$'
      ],
      recap: [
        'Le produit matriciel n\'est PAS commutatif ($AB \\neq BA$) : l\'ordre compte toujours.',
        '$\\det(A) = 0$ ↔ matrice non inversible ↔ système sans solution unique.',
        'Pour inverser $A$ $2 \\times 2$ : échanger les termes diagonaux, changer les signes des termes anti-diagonaux, diviser par $\\det(A)$.',
        'Les systèmes linéaires ($AX = B$) se résolvent par $X = A^{-1}B$ : c\'est la méthode la plus systématique.'
      ],
      piege: 'Le produit matriciel n\'est pas commutatif : en général $AB\\ne BA$. Toujours vérifier l\'ordre des matrices dans un produit.'
    },
    quiz: [
      { q: '$\\det\\begin{pmatrix}3&2\\\\1&4\\end{pmatrix}=$', options: ['$10$', '$14$', '$12$', '$8$'], answer: 0, correction: '$3\\times4-2\\times1=12-2=10$.' },
      { q: 'Si $\\det(A)=0$, alors $A$ est :', options: ['Inversible', 'Non inversible', 'Nulle', 'Identité'], answer: 1, correction: '$\\det(A)=0$ signifie que $A$ n\'est pas inversible (matrice singulière).' },
      { q: 'Soit $A=\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}$ et $B=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$. Laquelle de ces affirmations est VRAIE ?', options: ['$AB=BA$ : le produit matriciel est commutatif', '$AB\\neq BA$ : le produit matriciel n\'est pas commutatif', '$AB=0$ : les deux matrices s\'annulent', '$A$ n\'est pas inversible car $\\det(A)=0$'], answer: 1, correction: 'Calcul : $AB=\\begin{pmatrix}3&2\\\\1&2\\end{pmatrix}$ et $BA=\\begin{pmatrix}2&1\\\\2&3\\end{pmatrix}$. Les deux produits diffèrent : $AB\\neq BA$. La multiplication matricielle n\'est PAS commutative en général. Note : $\\det(A)=2\\times1-1\\times0=2\\neq0$, donc $A$ est bien inversible.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(0, 3), c = rand(0, 3), d = rand(1, 4);
        const det = a*d - b*c;
        return {
          statement: `Calculer $\\det\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.`,
          answer: det,
          tolerance: 0,
          unit: '',
          hint: '$\\det=ad-bc$',
          solution: [`$\\det=${a}\\times${d}-${b}\\times${c}=${a*d}-${b*c}=${det}$`]
        };
      }
    },
    probleme: {
      context: 'Un réseau de distribution a deux entrepôts A et B. Les flux hebdomadaires sont modélisés par $M=\\begin{pmatrix}0{,}8&0{,}3\\\\0{,}2&0{,}7\\end{pmatrix}$ (matrice de transition).',
      tasks: [
        'Calculer $M^2$ (flux sur deux semaines).',
        'Calculer $\\det(M)$.',
        'Si l\'état initial est $X_0=\\begin{pmatrix}100\\\\50\\end{pmatrix}$, calculer $X_1=M\\cdot X_0$.'
      ],
      solutions: [
        '$M^2=\\begin{pmatrix}0{,}8\\times0{,}8+0{,}3\\times0{,}2 & 0{,}8\\times0{,}3+0{,}3\\times0{,}7\\\\0{,}2\\times0{,}8+0{,}7\\times0{,}2 & 0{,}2\\times0{,}3+0{,}7\\times0{,}7\\end{pmatrix}=\\begin{pmatrix}0{,}7&0{,}45\\\\0{,}3&0{,}55\\end{pmatrix}$.',
        '$\\det(M)=0{,}8\\times0{,}7-0{,}3\\times0{,}2=0{,}56-0{,}06=0{,}50$.',
        '$X_1=\\begin{pmatrix}0{,}8\\times100+0{,}3\\times50\\\\0{,}2\\times100+0{,}7\\times50\\end{pmatrix}=\\begin{pmatrix}95\\\\55\\end{pmatrix}$.'
      ],
      finalAnswer: '$X_1=(95;55)^T$ : entrepôt A perd 5 unités, B en gagne 5. $\\det(M)=0{,}5$.'
    },

    evaluation: {
      title: 'Évaluation — Calcul matriciel',
      duration: '40 min',
      questions: [
        {
          statement: 'Calculer le déterminant de $A = \\begin{pmatrix} 5 & 3 \\\\ 2 & 4 \\end{pmatrix}$.',
          type: 'numeric',
          answer: 14,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\det(A) = 5 \\times 4 - 3 \\times 2 = 20 - 6 = 14$.'
        },
        {
          statement: 'Si $\\det(A) = 0$, le système $AX = B$ :',
          type: 'multiple-choice',
          options: ['Admet toujours une solution unique', 'N\'admet aucune solution ou en admet une infinité', 'Admet exactement deux solutions', 'Est toujours homogène'],
          answer: 1,
          points: 2,
          correction: 'Quand $\\det(A) = 0$, la matrice $A$ n\'est pas inversible. Le système $AX = B$ est soit incompatible (aucune solution), soit indéterminé (infinité de solutions). On ne peut pas calculer $X = A^{-1}B$.'
        },
        {
          statement: 'Soit $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. On cherche $A^{-1}$. Calculer le coefficient en position $(1,1)$ de $A^{-1}$ (arrondir à $0{,}01$).',
          type: 'numeric',
          answer: 0.30,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$\\det(A) = 4 \\times 3 - 1 \\times 2 = 10$. $A^{-1} = \\dfrac{1}{10}\\begin{pmatrix} 3 & -1 \\\\ -2 & 4 \\end{pmatrix}$. Le coefficient $(1,1)$ est $\\dfrac{3}{10} = 0{,}30$.'
        },
        {
          statement: 'Soit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Calculer le coefficient $(1,2)$ du produit $AB$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le coefficient $(1,2)$ de $AB$ est : ligne 1 de $A$ $\\times$ colonne 2 de $B$ = $1 \\times 1 + 2 \\times 0 = 1$. (Produit complet : $AB = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$).'
        },
        {
          statement: 'La propriété $(AB)^{-1} = B^{-1}A^{-1}$ (et non $A^{-1}B^{-1}$) est une conséquence de :',
          type: 'multiple-choice',
          options: ['La commutativité du produit matriciel', 'La non-commutativité du produit matriciel', 'La distributivité du produit', 'L\'associativité de l\'addition'],
          answer: 1,
          points: 1,
          correction: 'Le produit matriciel n\'est pas commutatif ($AB \\neq BA$ en général). Lors de l\'inversion, l\'ordre est inversé : $(AB)^{-1} = B^{-1}A^{-1}$. C\'est analogue à enfiler des chaussettes puis des chaussures : pour les retirer, on procède dans l\'ordre inverse.'
        }
      ]
    }
  }
);
