/* =========================================================
   Spark Learning – data/lycee-1re/1re-geometrie-reperee.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-geometrie-reperee',
    level: 2, subject: 'maths',
    icon: '📌',
    title: 'Géométrie repérée',
    subtitle: 'Vecteurs colinéaires, équations de droites',
    keywords: ['Vecteur', 'Colinéarité', 'Équation de droite', 'Droite cartésienne'],
    physics: false,
    cours: {
      intro: 'La <strong>géométrie repérée</strong> traduit les relations géométriques en calculs algébriques.<br/><br/>Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont <strong>colinéaires</strong> si leur déterminant $ad - bc = 0$ : c\'est le critère d\'alignement de trois points.<br/><br/>Une droite d\'équation $ax + by + c = 0$ possède un <strong>vecteur normal</strong> $(a\\,;\\,b)$ (perpendiculaire à la droite) et un <strong>vecteur directeur</strong> $(-b\\,;\\,a)$ (parallèle à la droite).<br/><br/>L\'erreur très courante : lire les coefficients $(a\\,;\\,b)$ et les appeler "vecteur directeur" alors qu\'ils forment le vecteur normal. On passe de l\'un à l\'autre en échangeant les coordonnées et changeant un signe.',
      definitions: [
        { term: 'Vecteurs colinéaires', def: 'Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont <strong>colinéaires</strong> si $ad - bc = 0$ (déterminant nul). Ils sont alors parallèles (même direction).' },
        { term: 'Déterminant', def: 'Le <strong>déterminant</strong> de $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ est $\\det(\\vec{u},\\vec{v}) = ad - bc$. Il est nul si et seulement si les vecteurs sont colinéaires.' },
        { term: 'Vecteur directeur', def: 'Un <strong>vecteur directeur</strong> d\'une droite est un vecteur parallèle à cette droite. Pour $ax + by + c = 0$, un vecteur directeur est $(-b\\,;\\,a)$.' },
        { term: 'Vecteur normal', def: 'Un <strong>vecteur normal</strong> à une droite est perpendiculaire à celle-ci. Pour $ax + by + c = 0$, le vecteur normal est $(a\\,;\\,b)$ (les coefficients de $x$ et $y$).' }
      ],
      method: {
        title: 'Tester la colinéarité et écrire l\'équation d\'une droite',
        steps: [
          '<strong>Colinéarité</strong> : $\\vec{u}(x;y)$ et $\\vec{v}(x\';y\')$ colinéaires $\\Leftrightarrow xy\'-x\'y=0$ (déterminant nul).',
          '<strong>Équation de droite</strong> passant par $A(x_0;y_0)$ de vecteur directeur $\\vec{u}(a;b)$ : $b(x-x_0)-a(y-y_0)=0$.',
          '<strong>Forme simple</strong> : utiliser $y=mx+p$ si la droite n\'est pas verticale.',
          '<strong>Alignement</strong> : trois points $A$, $B$, $C$ sont alignés si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.'
        ]
      },
      example: {
        statement: 'Déterminer l\'équation de la droite passant par $A(1\\,;\\,3)$ et $B(4\\,;\\,-1)$ sous la forme $ax + by + c = 0$.',
        steps: [
          'Vecteur directeur : $\\vec{AB} = (4-1\\,;\\,-1-3) = (3\\,;\\,-4)$.',
          'Un vecteur normal est $(4\\,;\\,3)$ (on échange et on change un signe). L\'équation est $4x + 3y + c = 0$.',
          'On remplace par $A(1\\,;\\,3)$ : $4 \\times 1 + 3 \\times 3 + c = 0$, soit $13 + c = 0$, d\'où $c = -13$.'
        ],
        answer: 'L\'équation de la droite $(AB)$ est $4x + 3y - 13 = 0$. Vérification en $B$ : $4 \\times 4 + 3 \\times (-1) - 13 = 16 - 3 - 13 = 0$ ✓.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Droite, vecteur normal et vecteur directeur',
        title: 'La droite $4x + 3y - 13 = 0$ : vecteur normal $\\vec{n}$ et vecteur directeur $\\vec{u}$ (exemple du cours)',
        description: 'La droite $(AB)$ d\'équation $4x+3y-13=0$ (exemple du cours) passe par $A(1\\,;\\,3)$ et $B(4\\,;\\,-1)$.<br/>Son vecteur normal $\\vec{n}(4\\,;\\,3)$ et son vecteur directeur $\\vec{u}(-3\\,;\\,4)$ sont tracés depuis $A$, perpendiculaires entre eux.',
        svg: `
          <svg viewBox="0 0 300 340" role="img" aria-labelledby="geored-diagram-title geored-diagram-desc">
            <title id="geored-diagram-title">Droite avec vecteur normal et vecteur directeur</title>
            <desc id="geored-diagram-desc">Repere orthonorme montrant la droite d'equation 4x + 3y - 13 = 0, passant par les points A(1;3) et B(4;-1). Le vecteur normal n(4;3) et le vecteur directeur u(-3;4) sont traces depuis A, perpendiculaires entre eux, avec un marqueur d'angle droit.</desc>
            <defs>
              <marker id="arrow-1re-geored" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="10" y1="10" x2="10" y2="310"></line>
            <line class="grid-line" x1="40" y1="10" x2="40" y2="310"></line>
            <line class="grid-line" x1="100" y1="10" x2="100" y2="310"></line>
            <line class="grid-line" x1="130" y1="10" x2="130" y2="310"></line>
            <line class="grid-line" x1="160" y1="10" x2="160" y2="310"></line>
            <line class="grid-line" x1="190" y1="10" x2="190" y2="310"></line>
            <line class="grid-line" x1="220" y1="10" x2="220" y2="310"></line>
            <line class="grid-line" x1="10" y1="310" x2="220" y2="310"></line>
            <line class="grid-line" x1="10" y1="280" x2="220" y2="280"></line>
            <line class="grid-line" x1="10" y1="220" x2="220" y2="220"></line>
            <line class="grid-line" x1="10" y1="190" x2="220" y2="190"></line>
            <line class="grid-line" x1="10" y1="160" x2="220" y2="160"></line>
            <line class="grid-line" x1="10" y1="130" x2="220" y2="130"></line>
            <line class="grid-line" x1="10" y1="100" x2="220" y2="100"></line>
            <line class="grid-line" x1="10" y1="70" x2="220" y2="70"></line>
            <line class="grid-line" x1="10" y1="40" x2="220" y2="40"></line>
            <line class="grid-line" x1="10" y1="10" x2="220" y2="10"></line>

            <line class="axis" x1="5" y1="250" x2="280" y2="250" marker-end="url(#arrow-1re-geored)"></line>
            <line class="axis" x1="70" y1="325" x2="70" y2="8" marker-end="url(#arrow-1re-geored)"></line>
            <text class="axis-label" x="284" y="254">x</text>
            <text class="axis-label" x="76" y="14">y</text>
            <text class="tick-label" x="58" y="264" text-anchor="middle">O</text>
            <text class="tick-label" x="10" y="266" text-anchor="middle">-2</text>
            <text class="tick-label" x="220" y="266" text-anchor="middle">5</text>
            <text class="tick-label" x="50" y="313" text-anchor="middle">-2</text>
            <text class="tick-label" x="50" y="18" text-anchor="middle">8</text>

            <line class="frame-line" x1="37.0" y1="76.0" x2="226.0" y2="328.0"></line>
            <text class="annotation-label" x="128" y="205" text-anchor="middle">(d) : 4x + 3y − 13 = 0</text>

            <circle class="plot-point" cx="100" cy="160" r="4"></circle>
            <text class="tick-label" x="108" y="172">A (1 ; 3)</text>
            <circle class="plot-point" cx="190" cy="280" r="4"></circle>
            <text class="tick-label" x="150" y="272">B (4 ; -1)</text>

            <line class="curve-main" x1="100" y1="160" x2="220" y2="70" marker-end="url(#arrow-1re-geored)"></line>
            <circle class="plot-point-alt" cx="220" cy="70" r="3"></circle>
            <text class="annotation-label" x="224" y="66">n (4 ; 3)</text>

            <line class="curve-main" x1="100" y1="160" x2="10" y2="40" marker-end="url(#arrow-1re-geored)"></line>
            <circle class="plot-point-alt" cx="10" cy="40" r="3"></circle>
            <text class="annotation-label" x="14" y="34" text-anchor="start">u (-3 ; 4)</text>

            <path class="guide-line" d="M111.2,151.6 L102.8,140.4 L91.6,148.8" fill="none"></path>
            <text class="label-soft" x="100" y="132" text-anchor="middle">90°</text>
          </svg>
        `,
        notes: [
          '$\\vec{n} \\cdot \\vec{u} = 4 \\times (-3) + 3 \\times 4 = -12 + 12 = 0$ : le vecteur normal et le vecteur directeur sont bien <strong>orthogonaux</strong>, comme pour toute droite $ax+by+c=0$.',
          'Le vecteur directeur $\\vec{u}(-3\\,;\\,4)$ est bien parallèle à la droite : en partant de $A(1\\,;\\,3)$ et en ajoutant $\\vec{u}$, on obtient $(-2\\,;\\,7)$, qui vérifie $4\\times(-2)+3\\times7-13 = -8+21-13 = 0$ ✓.',
          'On retrouve aussi $\\vec{AB}(3\\,;\\,-4) = -\\vec{u}$ : $\\vec{AB}$ et $\\vec{u}$ sont colinéaires (même direction, sens opposé), ce qui confirme que $\\vec{u}$ dirige bien la droite $(AB)$.',
          'Le vecteur normal $\\vec{n}(4\\,;\\,3)$ correspond exactement aux coefficients de $x$ et $y$ dans l\'équation $4x+3y-13=0$ — c\'est la lecture directe évoquée dans le cours.'
        ],
        reading: 'Repère l\'angle droit marqué en $A$ : c\'est la signature visuelle que $\\vec{n}$ (perpendiculaire à la droite) et $\\vec{u}$ (parallèle à la droite) jouent des rôles opposés.',
        caption: 'Droite $(AB)$ d\'équation $4x+3y-13=0$ (exemple du cours), avec son vecteur normal $\\vec{n}(4\\,;\\,3)$ et son vecteur directeur $\\vec{u}(-3\\,;\\,4)$.'
      },
      formulas: [
        '$\\vec{u}(a;b)$ et $\\vec{v}(c;d)$ colinéaires $\\Leftrightarrow ad-bc=0$',
        'Droite de vecteur directeur $(a;b)$ passant par $(x_0;y_0)$ : $b(x-x_0)=a(y-y_0)$'
      ],
      recap: [
        'Colinéarité : $\\det(\\vec{u},\\vec{v}) = ad - bc = 0$. C\'est le test d\'alignement de trois points.',
        'Dans $ax + by + c = 0$ : $(a\\,;\\,b)$ est le vecteur <strong>normal</strong>, $(-b\\,;\\,a)$ est le vecteur <strong>directeur</strong>.',
        'Pour écrire l\'équation d\'une droite : trouver un vecteur directeur $\\vec{AB}$, en déduire le normal, puis utiliser un point.',
        'Pente $m = \\dfrac{y_B - y_A}{x_B - x_A}$ (si la droite n\'est pas verticale). Droite : $y = mx + p$.'
      ],
      piege: 'Dans $ax + by + c = 0$, le vecteur $(a\\,;\\,b)$ est le <strong>vecteur normal</strong> (perpendiculaire à la droite), pas le vecteur directeur !<br/><br/>Le <strong>vecteur directeur</strong> est $(-b\\,;\\,a)$ (parallèle à la droite). Ne pas les confondre dans l\'équation.'
    },
    quiz: [
      { q: '$\\vec{u}(2;3)$ et $\\vec{v}(4;6)$ sont-ils colinéaires ?', options: ['Non', 'Oui', 'Seulement si norme égale', 'Impossible à dire'], answer: 1, correction: 'On calcule le déterminant : $2 \\times 6 - 3 \\times 4 = 12 - 12 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction). On remarque d\'ailleurs que $\\vec{v} = 2\\vec{u}$.' },
      { q: 'La droite $(d)$ a pour équation $3x + 2y - 6 = 0$. Un élève dit : "le vecteur directeur est $\\vec{u}(3\\,;\\,2)$." Quelle est son erreur ?', options: ['$(3\\,;\\,2)$ est le vecteur NORMAL ; le vecteur directeur est $(-2\\,;\\,3)$ ou $(2\\,;\\,-3)$', 'L\'élève a raison : les coefficients de $x$ et $y$ donnent toujours le vecteur directeur', 'Le vecteur directeur est $(3\\,;\\,-2)$ car le coefficient de $y$ change de signe', 'Il n\'existe pas de vecteur directeur car la droite n\'est pas verticale'], answer: 0, correction: 'Dans $ax + by + c = 0$, le vecteur $\\vec{n}(a\\,;\\,b)$ est le vecteur <strong>normal</strong> (perpendiculaire à la droite). Le vecteur directeur est $\\vec{u}(-b\\,;\\,a)$.<br/><br/>Ici $\\vec{n}(3\\,;\\,2)$ est le vecteur normal, et le vecteur directeur est $\\vec{u}(-2\\,;\\,3)$.<br/><br/>On vérifie : $\\vec{n} \\cdot \\vec{u} = 3 \\times (-2) + 2 \\times 3 = 0$. Bien perpendiculaires !' },
      { q: 'Trois points $A(0;0)$, $B(2;3)$, $C(4;6)$ sont-ils alignés ?', options: ['Non', 'Oui', 'Seulement deux à deux', 'Impossible à déterminer'], answer: 1, correction: 'On calcule $\\vec{AB}(2\\,;\\,3)$ et $\\vec{AC}(4\\,;\\,6)$. On remarque que $\\vec{AC} = 2\\vec{AB}$.<br/><br/>Les vecteurs sont <strong>colinéaires</strong>, donc les points $A$, $B$, $C$ sont alignés.' },
      { q: 'La droite $5x - 2y + 7 = 0$ a pour pente :', options: ['$m = \\dfrac{5}{2}$', '$m = -\\dfrac{5}{2}$', '$m = \\dfrac{2}{5}$', '$m = -\\dfrac{2}{5}$'], answer: 0, correction: 'On isole $y$ pour obtenir la forme $y = mx + p$ : $2y = 5x + 7$, soit $y = \\dfrac{5}{2}x + \\dfrac{7}{2}$.<br/><br/>La pente est $m = \\dfrac{5}{2}$. Elle correspond au coefficient de $x$ dans l\'écriture réduite.' },
      { q: 'Le milieu de $A(2\\,;\\,5)$ et $B(6\\,;\\,-1)$ est :', options: ['$(4\\,;\\,2)$', '$(8\\,;\\,4)$', '$(4\\,;\\,3)$', '$(2\\,;\\,3)$'], answer: 0, correction: 'Le milieu se calcule en faisant la moyenne des coordonnées : $M = \\left(\\dfrac{2+6}{2}\\,;\\,\\dfrac{5+(-1)}{2}\\right)$.<br/><br/>On obtient $M = (4\\,;\\,2)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['colinearite', 'equation']);
        if (mode === 'colinearite') {
          const xA = rand(0, 3), yA = rand(0, 3);
          const xB = rand(xA + 1, xA + 4), yB = rand(yA + 1, yA + 4);
          const xC = rand(xB + 1, xB + 3), yC = rand(yB - 2, yB + 5);
          const det = (xB - xA) * (yC - yA) - (yB - yA) * (xC - xA);
          const ctx = pick([
            `En cartographie, trois balises sont placées en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `Trois capteurs sont positionnés en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `On considère les points $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer les coordonnées de $\\vec{AB}$ et $\\vec{AC}$.<br/>2) Calculer le déterminant $\\det(\\vec{AB}, \\vec{AC})$.<br/>3) En déduire si les points sont alignés.<br/><br/>Donner la valeur du déterminant.`,
            answer: det,
            tolerance: 0,
            unit: '',
            hint: `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$. Le déterminant est $ad - bc$.`,
            solution: [
              `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$.`,
              `$\\det = ${xB-xA} \\times ${yC-yA} - ${yB-yA} \\times ${xC-xA} = ${(xB-xA)*(yC-yA)} - ${(yB-yA)*(xC-xA)} = ${det}$.`,
              `${det === 0 ? 'Le déterminant est nul : les points sont alignés.' : 'Le déterminant est non nul : les points ne sont pas alignés.'}`
            ]
          };
        } else {
          const xA = rand(0, 4), yA = rand(0, 4);
          const xB = rand(xA + 1, xA + 5), yB = rand(yA - 3, yA + 5);
          const dx = xB - xA, dy = yB - yA;
          const m = dy / dx;
          const p = yA - m * xA;
          const answer = parseFloat(p.toFixed(2));
          const ctx = pick([
            `Une route rectiligne passe par les points $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `Un laser suit une trajectoire passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `On considère la droite passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer la pente $m$ de la droite $(AB)$.<br/>2) Déterminer l'ordonnée à l'origine $p$.<br/><br/>Donner la valeur de $p$.`,
            answer: answer,
            tolerance: 0.01,
            unit: '',
            hint: `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${dy}}{${dx}}$. Puis $p = y_A - m \\times x_A$.`,
            solution: [
              `$m = \\dfrac{${yB} - ${yA}}{${xB} - ${xA}} = \\dfrac{${dy}}{${dx}}${Number.isInteger(m) ? ' = ' + m : ''}$.`,
              `$p = ${yA} - ${m.toFixed(2)} \\times ${xA} = ${answer}$.`,
              `Droite : $y = ${m.toFixed(2)}x + ${answer}$.`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'Dans un repère, on a les points $A(1;2)$, $B(3;5)$, $C(5;8)$ et $D(2;4)$.',
      tasks: [
        'Montrer que $A$, $B$, $C$ sont alignés.',
        'Écrire l\'équation de la droite $(AB)$.',
        'Le point $D$ est-il sur la droite $(AB)$ ?'
      ],
      solutions: [
        '$\\vec{AB}(2;3)$, $\\vec{AC}(4;6)=2\\vec{AB}$ : colinéaires → $A$, $B$, $C$ alignés.',
        'Pente $m=\\frac{3}{2}$, ordonnée à l\'origine : $2=\\frac{3}{2}\\times1+p \\Rightarrow p=\\frac{1}{2}$. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$.',
        '$\\frac{3}{2}\\times2+\\frac{1}{2}=3+\\frac{1}{2}=\\frac{7}{2}\\ne4$ : $D$ n\'est pas sur $(AB)$.'
      ],
      finalAnswer: '$A$, $B$, $C$ alignés. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$. $D$ n\'est pas sur cette droite.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie repérée',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le déterminant de $\\vec{u}(3\\,;\\,5)$ et $\\vec{v}(6\\,;\\,10)$. Les vecteurs sont-ils colinéaires ? Donner la valeur du déterminant.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du déterminant : $\\det(\\vec{u},\\vec{v}) = 3 \\times 10 - 5 \\times 6 = 30 - 30 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction).'
        },
        {
          statement: 'La droite $(d)$ a pour équation $2x - 3y + 6 = 0$. Un vecteur directeur de $(d)$ est :',
          type: 'multiple-choice',
          options: ['$(2\\,;\\,-3)$', '$(3\\,;\\,2)$', '$(-3\\,;\\,2)$', '$(2\\,;\\,3)$'],
          answer: 1,
          points: 2,
          correction: 'Dans $ax + by + c = 0$, le vecteur <strong>normal</strong> est $(a\\,;\\,b) = (2\\,;\\,-3)$.<br/><br/>Le vecteur <strong>directeur</strong> est $(-b\\,;\\,a) = (3\\,;\\,2)$. On vérifie : $2 \\times 3 + (-3) \\times 2 = 0$, bien perpendiculaires.'
        },
        {
          statement: 'Déterminer l\'ordonnée à l\'origine $p$ de la droite passant par $A(2\\,;\\,5)$ et $B(4\\,;\\,11)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On calcule la pente : $m = \\dfrac{11 - 5}{4 - 2} = \\dfrac{6}{2} = 3$.<br/><br/>L\'équation est $y = 3x + p$. En remplaçant par $A(2\\,;\\,5)$ : $5 = 3 \\times 2 + p$, soit $p = 5 - 6 = -1$.'
        },
        {
          statement: 'Les points $A(1\\,;\\,3)$, $B(3\\,;\\,7)$ et $C(5\\,;\\,12)$ sont-ils alignés ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires', 'Non, car le déterminant de $\\vec{AB}$ et $\\vec{AC}$ est non nul', 'Oui, car les trois points sont sur la droite $y = 2x + 1$', 'Non, car $A$ et $C$ ont des abscisses impaires'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\vec{AB}(2\\,;\\,4)$ et $\\vec{AC}(4\\,;\\,9)$.<br/><br/>Le déterminant vaut $\\det = 2 \\times 9 - 4 \\times 4 = 18 - 16 = 2 \\neq 0$.<br/><br/>Les vecteurs ne sont pas colinéaires, donc les points ne sont <strong>pas alignés</strong>.'
        },
        {
          statement: 'Écrire l\'équation de la droite passant par $M(1\\,;\\,2)$ et de vecteur directeur $\\vec{u}(2\\,;\\,-1)$ sous la forme $ax + by + c = 0$ avec $a > 0$. Donner la valeur de $c$.',
          type: 'numeric',
          answer: -5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le vecteur directeur est $(2\\,;\\,-1)$, donc un vecteur normal est $(1\\,;\\,2)$ (on échange et on change un signe).<br/><br/>L\'équation s\'écrit : $1(x-1) + 2(y-2) = 0$, soit $x + 2y - 5 = 0$.<br/><br/>On identifie $c = -5$.'
        }
      ]
    }
  });
