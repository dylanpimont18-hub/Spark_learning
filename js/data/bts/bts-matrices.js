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
    physics: 'Réseaux et systèmes couplés : circuits électriques à mailles, chaînes de Markov industrielles',
    cours: {
      intro: 'Les matrices sont le langage des systèmes linéaires : un réseau de distribution, un circuit électrique avec plusieurs mailles, un bilan d\'entrées-sorties industriel — tous se formulent comme $AX = B$ et se résolvent par $X = A^{-1}B$.<br/><br/>La multiplication matricielle $AB$ n\'est pas commutative ($AB \\neq BA$ en général) — c\'est la principale différence avec la multiplication scalaire.<br/><br/>Le déterminant $\\det(A)$ est le "critère d\'inversibilité" : si $\\det(A) = 0$, le système $AX = B$ soit n\'a pas de solution, soit en a une infinité.<br/><br/>En BTS, les chaînes de Markov utilisent des matrices de transition dont les colonnes (ou lignes) somment à $1$ : elles modélisent l\'évolution probabiliste d\'un système (stocks, clients, pannes). L\'état stationnaire $\\pi$ vérifie $M\\pi = \\pi$ : c\'est un vecteur propre de valeur propre $1$.',
      definitions: [
        { term: 'Matrice $m \\times n$', def: 'Tableau rectangulaire de $m$ lignes et $n$ colonnes. Le terme $a_{ij}$ se trouve à la ligne $i$ et la colonne $j$. Deux matrices de mêmes dimensions s\'additionnent terme à terme.' },
        { term: 'Déterminant $\\det(A)$', def: 'Nombre associé à une matrice carrée. Pour $2 \\times 2$ : $\\det \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$. Si $\\det(A) = 0$ : matrice singulière (non inversible).' },
        { term: 'Matrice inverse $A^{-1}$', def: 'Matrice telle que $A \\cdot A^{-1} = A^{-1} \\cdot A = I$ (matrice identité). Elle existe si et seulement si $\\det(A) \\neq 0$.' },
        { term: 'Matrice de transition (Markov)', def: 'Matrice carrée dont les colonnes (ou lignes) somment à $1$. Modélise les transitions probabilistes entre états. L\'état stationnaire vérifie $M\\pi = \\pi$.' }
      ],
      method: {
        title: 'Multiplier et inverser une matrice',
        steps: [
          '<strong>Produit de matrices</strong> : la ligne $i$ de $A$ et la colonne $j$ de $B$ donnent le terme $c_{ij}=\\sum_k a_{ik}b_{kj}$.<br/><br/><strong>Exemple :</strong> $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix} = \\begin{pmatrix}1 \\times 5 + 2 \\times 6\\\\3 \\times 5 + 4 \\times 6\\end{pmatrix} = \\begin{pmatrix}17\\\\39\\end{pmatrix}$.',
          '<strong>Compatibilité matricielle</strong> : $AB$ n\'est défini que si le nombre de colonnes de $A$ = nombre de lignes de $B$.<br/><br/><strong>Exemple :</strong> $A$ est $2 \\times 3$ et $B$ est $3 \\times 1$ → $AB$ est $2 \\times 1$ (OK). Mais $BA$ n\'est pas défini ($1 \\times 1$ fois $2 \\times 3$ : non compatible).',
          '<strong>Calcul de l\'inverse</strong> : pour $A$ $2\\times2$, $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ avec $\\det A=ad-bc$.<br/><br/><strong>Exemple :</strong> $A = \\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$, $\\det A = 10$. $A^{-1} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$.',
          '<strong>Résolution de systèmes</strong> : $AX=B$ → $X=A^{-1}B$ si $A$ est inversible.<br/><br/><strong>Exemple :</strong> $\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\begin{pmatrix}7\\\\14\\end{pmatrix}$ → $\\begin{pmatrix}x\\\\y\\end{pmatrix} = \\frac{1}{10}\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}\\begin{pmatrix}7\\\\14\\end{pmatrix} = \\begin{pmatrix}1{,}4\\\\2{,}8\\end{pmatrix}$.'
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
      diagram: {
        theme: 'maths',
        kicker: 'Résolution matricielle appliquée à un circuit',
        title: 'Circuit à deux mailles : retrouver I1 et I2 par X = A⁻¹B',
        description: 'Le système de l\'exemple du cours (3I1 + I2 = 12 et I1 + 2I2 = 8) correspond à deux mailles qui partagent une résistance commune R3.<br/><br/>Chaque terme diagonal de la matrice A est la résistance totale d\'une maille (résistance propre + résistance commune), et le terme croisé (1) est la résistance commune R3 aux deux mailles.',
        svg: `
          <svg viewBox="0 0 420 250" role="img" aria-labelledby="matrices-circuit-title matrices-circuit-desc">
            <title id="matrices-circuit-title">Circuit electrique a deux mailles resolu par methode matricielle</title>
            <desc id="matrices-circuit-desc">Deux mailles partageant une resistance centrale R3 de 1 ohm. Maille 1 : source E1 de 12 V et resistance R1 de 2 ohms, courant I1 de 3,2 A. Maille 2 : source E2 de 8 V et resistance R2 de 1 ohm, courant I2 de 2,4 A. Le courant dans R3 vaut I1 plus I2, soit 5,6 A.</desc>

            <defs>
              <marker id="arrow-bts-matrices" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== maille 1 (gauche) : E1, R1 ===== -->
            <line class="curve-main" x1="60" y1="70" x2="100" y2="70"></line>
            <rect class="frame-line" x="100" y="57" width="70" height="26" fill="none"></rect>
            <text class="annotation-label" x="135" y="74" text-anchor="middle">R1</text>
            <text class="label-soft" x="135" y="44" text-anchor="middle">2 Ω</text>
            <line class="curve-main" x1="170" y1="70" x2="210" y2="70" marker-end="url(#arrow-bts-matrices)"></line>
            <text class="annotation-label" x="150" y="95" text-anchor="middle">I1</text>

            <line class="curve-main" x1="60" y1="70" x2="60" y2="122"></line>
            <circle class="frame-line" cx="60" cy="140" r="18" fill="none"></circle>
            <text class="annotation-label" x="60" y="145" text-anchor="middle">E1</text>
            <text class="annotation-label" x="60" y="115" text-anchor="middle">+</text>
            <text class="annotation-label" x="60" y="175" text-anchor="middle">−</text>
            <text class="label-soft" x="25" y="145" text-anchor="middle">12 V</text>
            <line class="curve-main" x1="60" y1="210" x2="60" y2="158" marker-end="url(#arrow-bts-matrices)"></line>

            <line class="curve-main" x1="210" y1="210" x2="65" y2="210" marker-end="url(#arrow-bts-matrices)"></line>
            <text class="label-soft" x="100" y="228" text-anchor="middle">I1 = 3,2 A</text>

            <!-- ===== maille 2 (droite) : E2, R2 ===== -->
            <line class="curve-main" x1="360" y1="70" x2="320" y2="70"></line>
            <rect class="frame-line" x="250" y="57" width="70" height="26" fill="none"></rect>
            <text class="annotation-label" x="285" y="74" text-anchor="middle">R2</text>
            <text class="label-soft" x="285" y="44" text-anchor="middle">1 Ω</text>
            <line class="curve-main" x1="250" y1="70" x2="210" y2="70" marker-end="url(#arrow-bts-matrices)"></line>
            <text class="annotation-label" x="270" y="95" text-anchor="middle">I2</text>

            <line class="curve-main" x1="360" y1="70" x2="360" y2="122"></line>
            <circle class="frame-line" cx="360" cy="140" r="18" fill="none"></circle>
            <text class="annotation-label" x="360" y="145" text-anchor="middle">E2</text>
            <text class="annotation-label" x="360" y="115" text-anchor="middle">+</text>
            <text class="annotation-label" x="360" y="175" text-anchor="middle">−</text>
            <text class="label-soft" x="397" y="145" text-anchor="middle">8 V</text>
            <line class="curve-main" x1="360" y1="210" x2="360" y2="158" marker-end="url(#arrow-bts-matrices)"></line>

            <line class="curve-main" x1="210" y1="210" x2="355" y2="210" marker-end="url(#arrow-bts-matrices)"></line>
            <text class="label-soft" x="320" y="228" text-anchor="middle">I2 = 2,4 A</text>

            <!-- ===== branche commune R3 ===== -->
            <line class="curve-main" x1="210" y1="70" x2="210" y2="105"></line>
            <rect class="frame-line" x="197" y="105" width="26" height="70" fill="none"></rect>
            <text class="annotation-label" x="210" y="140" text-anchor="middle">R3</text>
            <text class="label-soft" x="245" y="140" text-anchor="middle">1 Ω</text>
            <line class="curve-main" x1="210" y1="175" x2="210" y2="210" marker-end="url(#arrow-bts-matrices)"></line>
            <text class="annotation-label" x="240" y="196">I1+I2 = 5,6 A</text>

            <!-- noeuds -->
            <circle class="plot-point" cx="60" cy="70" r="3"></circle>
            <circle class="plot-point-alt" cx="210" cy="70" r="4"></circle>
            <circle class="plot-point" cx="360" cy="70" r="3"></circle>
            <circle class="plot-point" cx="60" cy="210" r="3"></circle>
            <circle class="plot-point-alt" cx="210" cy="210" r="4"></circle>
            <circle class="plot-point" cx="360" cy="210" r="3"></circle>
          </svg>
        `,
        notes: [
          'Nœud B (haut, au centre) : les courants I1 (venant de E1 à travers R1) et I2 (venant de E2 à travers R2) se rejoignent et traversent ensemble R3 vers le bas.',
          'Nœud C (bas, au centre) : le courant commun I1 + I2 se sépare à nouveau — I1 repart vers E1, I2 repart vers E2. C\'est la loi des nœuds appliquée à ce circuit.',
          'Résolution : X = A⁻¹B donne I1 = 3,2 A et I2 = 2,4 A — retrouvé indépendamment par la méthode de Cramer : I1 = 16/5 = 3,2 A, I2 = 12/5 = 2,4 A.'
        ],
        reading: 'Suis le trajet du courant : il part de chaque source, traverse sa résistance propre, se combine dans la résistance commune R3, puis se sépare à nouveau pour retourner à chaque source.',
        caption: 'Circuit à deux mailles correspondant au système matriciel de l\'exemple du cours — R1 = 2 Ω, R2 = 1 Ω et R3 = 1 Ω (commune) déduits des coefficients de la matrice A, avec I1 = 3,2 A et I2 = 2,4 A vérifiés par substitution.'
      },
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

        const ctx = pick([
          {
            build: () => `Un <strong>circuit électrique à deux mailles</strong> se met sous forme matricielle $AX = B$ avec $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour vérifier si le système admet une <strong>solution unique</strong>.`
          },
          {
            build: () => `Un <strong>atelier de production</strong> répartit deux matières premières entre deux lignes de fabrication selon la matrice $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour savoir si le système de répartition est <strong>inversible</strong>.`
          },
          {
            build: () => `Un logiciel de <strong>CAO</strong> applique une transformation géométrique à un plan, représentée par la matrice $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour vérifier que la transformation est bien <strong>réversible</strong> (ne réduit pas le plan à une droite).`
          },
          {
            build: () => `Le <strong>bilan matière</strong> d'un procédé chimique reliant deux réactifs à deux produits s'écrit avec la matrice $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour vérifier que le bilan admet une <strong>solution unique</strong>.`
          },
          {
            build: () => `Un <strong>réseau électrique à deux nœuds</strong> a pour matrice d'admittance simplifiée $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour vérifier que le système est <strong>résoluble</strong>.`
          },
          {
            build: () => `Un <strong>répartiteur de charge</strong> entre deux machines d'une chaîne de production est modélisé par la matrice $A = \\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}$.<br/><br/>Calcule $\\det(A)$ pour vérifier que la répartition est <strong>inversible</strong>.`
          }
        ]);

        return {
          statement: ctx.build(),
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
