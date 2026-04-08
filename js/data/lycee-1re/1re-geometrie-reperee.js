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
