/* =========================================================
   Spark Learning – data/lycee-2nde.js
   Modules Lycée 2nde (Seconde)
   ========================================================= */

window.MODULES.push(

  {
    id: 'vecteurs',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Vecteurs 2D et Projection Orthogonale',
    subtitle: 'Composantes, projection, signe et sens',
    keywords: ['Norme', 'Projection', 'Coordonnées', 'Bilan des forces'],
    physics: '2ème loi de Newton, plan incliné, bilan des forces',

    cours: {
      intro: 'Un vecteur possède à la fois une valeur (norme), une direction et un sens — contrairement aux grandeurs scalaires. En physique, toutes les grandeurs vectorielles (force, vitesse, accélération) se projettent sur des axes perpendiculaires pour être exploitées par les lois de Newton. La projection « décompose » un vecteur oblique en deux composantes indépendantes : $F_x = F\\cos(\\theta)$ (côté adjacent = cosinus) et $F_y = F\\sin(\\theta)$ (côté opposé = sinus), où $\\theta$ est l\'angle avec l\'axe horizontal. Le piège du plan incliné est récurrent : le poids est vertical mais les axes sont inclinés, ce qui « retourne » les rôles du sinus et du cosinus par rapport à l\'intuition.',
      definitions: [
        { term: 'Vecteur', def: 'Objet mathématique caractérisé par une direction, un sens et une norme (valeur). Notation : $\\vec{F}$.' },
        { term: 'Norme', def: 'Valeur (longueur) du vecteur : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$. Toujours positive ou nulle.' },
        { term: 'Composante', def: 'Projection d\'un vecteur sur un axe. $F_x$ est la composante horizontale, $F_y$ la composante verticale.' },
        { term: 'Projection orthogonale', def: 'Opération qui décompose un vecteur oblique en deux composantes perpendiculaires, une sur chaque axe du repère.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '**Le signe :** Regarder le sens du vecteur par rapport à l\'axe. S\'il pointe dans le sens positif de l\'axe, la composante est positive. S\'il pointe en sens inverse, elle est négative. <strong>Exemple :</strong> Une force $\\vec{F}$ pointe vers la gauche (sens négatif de $Ox$) → $F_x < 0$.',
          '**L\'angle :** Repérer l\'angle $\\theta$ entre le vecteur et l\'axe de référence. Le côté "qui touche" l\'angle $\\theta$ est adjacent (lié au cosinus). L\'autre est opposé (lié au sinus). <strong>Exemple :</strong> Si $\\theta = 30°$ entre $\\vec{F}$ et $Ox$, le côté le long de $Ox$ est adjacent → on utilise $\\cos(30°)$ pour $F_x$.',
          '**La formule :** $F_x = \\pm F \\cdot \\cos(\\theta)$ et $F_y = \\pm F \\cdot \\sin(\\theta)$ si $\\theta$ est l\'angle avec l\'axe $Ox$. <strong>Exemple :</strong> $F = 10$ N, $\\theta = 60°$ → $F_x = 10\\cos(60°) = 5$ N, $F_y = 10\\sin(60°) \\approx 8{,}66$ N.'
        ]
      },
      example: {
        statement: 'Un câble tire un traîneau avec une force $\\vec{T}$ de norme $T = 50$ N, inclinée de $\\theta = 30°$ au-dessus de l\'horizontale. Déterminer les composantes $T_x$ et $T_y$.',
        steps: [
          'Le vecteur pointe vers la droite et le haut → les deux composantes sont positives.',
          '$T_x = T \\cos(\\theta) = 50 \\times \\cos(30°) = 50 \\times 0{,}866 \\approx 43{,}3$ N (composante horizontale qui fait avancer le traîneau).',
          '$T_y = T \\sin(\\theta) = 50 \\times \\sin(30°) = 50 \\times 0{,}5 = 25$ N (composante verticale qui allège le traîneau).'
        ],
        answer: '$T_x \\approx 43{,}3$ N et $T_y = 25$ N.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto"><tr><th style="border:1px solid var(--border);padding:8px">Quadrant</th><th style="border:1px solid var(--border);padding:8px">Direction</th><th style="border:1px solid var(--border);padding:8px">Signe de $F_x$</th><th style="border:1px solid var(--border);padding:8px">Signe de $F_y$</th></tr><tr><td style="border:1px solid var(--border);padding:8px">I (haut-droite)</td><td style="border:1px solid var(--border);padding:8px">↗</td><td style="border:1px solid var(--border);padding:8px">$+$</td><td style="border:1px solid var(--border);padding:8px">$+$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">II (haut-gauche)</td><td style="border:1px solid var(--border);padding:8px">↖</td><td style="border:1px solid var(--border);padding:8px">$-$</td><td style="border:1px solid var(--border);padding:8px">$+$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">III (bas-gauche)</td><td style="border:1px solid var(--border);padding:8px">↙</td><td style="border:1px solid var(--border);padding:8px">$-$</td><td style="border:1px solid var(--border);padding:8px">$-$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IV (bas-droite)</td><td style="border:1px solid var(--border);padding:8px">↘</td><td style="border:1px solid var(--border);padding:8px">$+$</td><td style="border:1px solid var(--border);padding:8px">$-$</td></tr></table>',
      formulas: [
        '$F_x = F \\cdot \\cos(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$F_y = F \\cdot \\sin(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$ (norme = théorème de Pythagore)',
        '$\\theta = \\arctan\\left(\\dfrac{F_y}{F_x}\\right)$ (retrouver l\'angle depuis les composantes)'
      ],
      recap: [
        'Un vecteur se décompose en deux composantes perpendiculaires via la projection orthogonale.',
        'Côté adjacent à $\\theta$ → cosinus ; côté opposé → sinus. Le signe dépend du sens par rapport à l\'axe.',
        'Sur un plan incliné d\'angle $\\alpha$ : composante parallèle $= P\\sin(\\alpha)$, perpendiculaire $= P\\cos(\\alpha)$.',
        'La norme se retrouve par Pythagore : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$.'
      ],
      piege: 'Piège du plan incliné : si l\'angle du plan est $\\alpha$ (avec l\'horizontale), et que le poids est vertical, alors la composante du poids PARALLÈLE au plan est $P \\cdot \\sin(\\alpha)$ et PERPENDICULAIRE au plan est $P \\cdot \\cos(\\alpha)$. L\'angle "se retourne" par rapport à l\'intuition !'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $20$ N est dirigée vers le haut, à $30°$ par rapport à la verticale. Sa composante horizontale $F_x$ est :',
        options: [
          '$F_x = 20\\sin(30°) = 10$ N',
          '$F_x = 20\\cos(30°) \\approx 17{,}3$ N',
          '$F_x = 20\\tan(30°) \\approx 11{,}5$ N',
          '$F_x = 0$ N (force quasi-verticale)'
        ],
        answer: 0,
        correction: 'L\'angle $30°$ est mesuré par rapport à la verticale. La composante horizontale est le côté OPPOSÉ à cet angle, donc $F_x = F\\sin(30°) = 20 \\times 0{,}5 = 10$ N. Si l\'angle était par rapport à l\'horizontale, on utiliserait $\\cos$. La règle : l\'angle de référence détermine si on utilise sinus (opposé) ou cosinus (adjacent).'
      },
      {
        q: 'Un vecteur pointe vers le bas et la gauche (3ème quadrant). Ses composantes $F_x$ et $F_y$ sont :',
        options: [
          'Toutes deux positives',
          'Toutes deux négatives',
          '$F_x$ positive, $F_y$ négative',
          '$F_x$ négative, $F_y$ positive'
        ],
        answer: 1,
        correction: 'Un vecteur pointant vers le bas-gauche va dans le sens contraire de l\'axe $Ox$ (positif = droite) et de l\'axe $Oy$ (positif = haut). Donc $F_x < 0$ et $F_y < 0$.'
      },
      {
        q: 'Un skieur sur un plan incliné à $\\alpha = 30°$. La composante du poids $\\vec{P}$ parallèle au plan (vers le bas du plan) vaut :',
        options: [
          '$P \\cdot \\cos(30°)$',
          '$P \\cdot \\sin(30°)$',
          '$P \\cdot \\tan(30°)$',
          '$P / \\cos(30°)$'
        ],
        answer: 1,
        correction: 'En prenant l\'axe $Ox$ parallèle au plan, l\'angle entre le poids (vertical) et l\'axe $Oy$ (normal au plan) est $\\alpha$. Donc la composante parallèle au plan est $P \\cdot \\sin(\\alpha)$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const angles = [30, 45, 60];
        const cosVals = [Math.sqrt(3)/2, Math.sqrt(2)/2, 0.5];
        const idx = rand(0, 2);
        const angle = angles[idx];
        const F = rand(5, 20);
        const Fx = parseFloat((F * cosVals[idx]).toFixed(2));
        return {
          statement: `Une force $\\vec{F}$ a une norme $F = ${F}$ N et fait un angle $\\theta = ${angle}°$ avec l'axe horizontal $Ox$. Calcule la composante horizontale $F_x$ (arrondie au centième).`,
          answer: Fx,
          tolerance: 0.1,
          unit: 'N',
          hint: `La composante horizontale $F_x$ utilise le cosinus : $F_x = F \\cdot \\cos(\\theta) = ${F} \\times \\cos(${angle}°)$. Rappel : $\\cos(${angle}°) \\approx ${cosVals[idx].toFixed(3)}$.`,
          solution: [
            `Formule de la composante horizontale : $F_x = F \\cdot \\cos(\\theta)$`,
            `Application numérique : $F_x = ${F} \\times \\cos(${angle}°) = ${F} \\times ${cosVals[idx].toFixed(3)}$`,
            `Résultat : $F_x = ${Fx}$ N`
          ]
        };
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 75$ kg descend une piste rectiligne inclinée d\'un angle $\\beta = 25°$ par rapport à l\'horizontale. On néglige les frottements. On prend $g = 9{,}81$ m/s². On choisit un repère avec $Ox$ parallèle à la pente (sens positif vers le bas) et $Oy$ perpendiculaire à la pente (sens positif vers l\'extérieur de la piste).',
      schema: 'Plan incliné à β=25°. Forces : poids P (vertical, vers le bas) ; réaction normale R (perpendiculaire au plan, vers le haut). Axes : Ox (le long du plan, vers le bas) ; Oy (perpendiculaire au plan).',
      tasks: [
        'Faire le bilan des forces. Projeter le poids $\\vec{P}$ sur les axes $Ox$ et $Oy$.',
        'Appliquer la 2ème loi de Newton en projection sur $Ox$ : $\\sum F_x = m a_x$.',
        'Calculer numériquement l\'accélération $a_x$ du skieur.'
      ],
      solutions: [
        'Bilan : $\\vec{P}$ (vertical, bas) et $\\vec{R}$ (normal au plan, haut). Projections du poids : $P_x = +P \\sin(\\beta) = mg\\sin(\\beta)$ et $P_y = -P\\cos(\\beta)$. Projection de $\\vec{R}$ : $R_x = 0$, $R_y = +R$.',
        'Newton sur $Ox$ : $P_x + R_x = ma_x \\Rightarrow mg\\sin(\\beta) + 0 = ma_x \\Rightarrow a_x = g\\sin(\\beta)$.',
        '$a_x = 9{,}81 \\times \\sin(25°) = 9{,}81 \\times 0{,}423 \\approx 4{,}14$ m/s².'
      ],
      finalAnswer: '$a_x \\approx 4{,}14$ m/s² (le long du plan, vers le bas)'
    },

    evaluation: {
      title: 'Évaluation — Vecteurs 2D et Projection Orthogonale',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force $\\vec{F}$ de norme $F = 50$ N fait un angle $\\theta = 60°$ avec l\'axe horizontal $Ox$. Calculer la composante verticale $F_y$ (en N).',
          type: 'numeric',
          answer: 43.30,
          tolerance: 0.1,
          unit: 'N',
          points: 2,
          correction: '$F_y = F \\sin(\\theta) = 50 \\times \\sin(60°) = 50 \\times \\dfrac{\\sqrt{3}}{2} \\approx 43{,}30$ N.'
        },
        {
          statement: 'Un objet est sur un plan incliné à $\\alpha = 30°$. Son poids vaut $P = 100$ N (vertical, vers le bas). Calculer la composante du poids parallèle au plan (en N).',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'N',
          points: 3,
          correction: 'La composante du poids parallèle au plan incliné est $P_{\\parallel} = P \\sin(\\alpha) = 100 \\times \\sin(30°) = 100 \\times 0{,}5 = 50$ N. Attention : on utilise le sinus (et non le cosinus) car l\'angle $\\alpha$ est mesuré entre le plan et l\'horizontale.'
        },
        {
          statement: 'Un vecteur a pour composantes $F_x = -6$ N et $F_y = 8$ N. Calculer sa norme $\\|\\vec{F}\\|$ (en N).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'N',
          points: 2,
          correction: '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ N.'
        },
        {
          statement: 'Un vecteur $\\vec{F}$ pointe vers la droite et le bas (4ème quadrant). Quel est le signe de ses composantes ?',
          type: 'multiple-choice',
          options: ['$F_x > 0$ et $F_y > 0$', '$F_x < 0$ et $F_y < 0$', '$F_x > 0$ et $F_y < 0$', '$F_x < 0$ et $F_y > 0$'],
          answer: 2,
          points: 1,
          correction: 'Le vecteur pointe vers la droite → même sens que $Ox$ positif → $F_x > 0$. Il pointe vers le bas → sens contraire de $Oy$ positif → $F_y < 0$.'
        },
        {
          statement: 'Sur un plan incliné, la composante du poids perpendiculaire au plan utilise :',
          type: 'multiple-choice',
          options: ['$P \\sin(\\alpha)$', '$P \\cos(\\alpha)$', '$P \\tan(\\alpha)$', '$P / \\sin(\\alpha)$'],
          answer: 1,
          points: 2,
          correction: 'La composante perpendiculaire au plan est $P_{\\perp} = P \\cos(\\alpha)$, où $\\alpha$ est l\'angle du plan avec l\'horizontale. Le cosinus est utilisé pour la composante adjacente à l\'angle.'
        }
      ]
    }
  },

    {
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
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const x1 = rand(1, 5);
        const x2 = x1 + rand(1, 6);
        const a = randFloat(0.5, 4.0, 1);
        const b = rand(-3, 8);
        const y1 = parseFloat((a * x1 + b).toFixed(1));
        const y2 = parseFloat((a * x2 + b).toFixed(1));
        const slope = parseFloat(((y2 - y1) / (x2 - x1)).toFixed(2));
        return {
          statement: `Une droite passe par les points $A(${x1} ; ${y1})$ et $B(${x2} ; ${y2})$. Calcule le coefficient directeur (la pente) de cette droite.`,
          answer: slope,
          tolerance: 0.05,
          unit: '',
          hint: `Formule de la pente : $a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}}$. Attention à bien faire la même différence en haut et en bas !`,
          solution: [
            `Formule : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$`,
            `$a = \\dfrac{${y2} - (${y1})}{${x2} - ${x1}} = \\dfrac{${(y2-y1).toFixed(1)}}{${x2-x1}}$`,
            `$a = ${slope}$`
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
  },

    {
    id: '2nde-ensembles-nombres',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Ensembles de nombres et intervalles',
    subtitle: 'ℕ, ℤ, ℚ, ℝ et notation intervalle',
    keywords: ['Ensemble', 'Intervalle', 'Réels', 'Appartenance'],
    physics: false,
    cours: {
      intro: 'Les nombres se classent en ensembles emboîtés : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Un réel est rationnel s\'il peut s\'écrire $p/q$ (avec $p, q$ entiers, $q \\neq 0$) — sinon il est irrationnel comme $\\sqrt{2}$ ou $\\pi$. Les décimaux périodiques (comme $1{,}\\overline{3} = 4/3$) sont tous rationnels. Les intervalles décrivent des ensembles continus de réels avec une notation compacte : un crochet fermé $[$ inclut la borne, un crochet ouvert $]$ l\'exclut. L\'infini n\'est pas un nombre — la borne infinie est toujours ouverte. Les opérations sur intervalles ($\\cap$, $\\cup$) permettent d\'exprimer les domaines de définition et les conditions de validité des formules.',
      definitions: [
        { term: 'Entiers naturels $\\mathbb{N}$', def: 'Ensemble $\\{0 ; 1 ; 2 ; 3 ; \\ldots\\}$ : les nombres entiers positifs ou nuls.' },
        { term: 'Entiers relatifs $\\mathbb{Z}$', def: 'Ensemble $\\{\\ldots ; -2 ; -1 ; 0 ; 1 ; 2 ; \\ldots\\}$ : les entiers avec leur signe.' },
        { term: 'Rationnels $\\mathbb{Q}$', def: 'Ensemble des nombres qui s\'écrivent $\\dfrac{p}{q}$ avec $p \\in \\mathbb{Z}$ et $q \\in \\mathbb{Z}^*$. Inclut tous les décimaux périodiques.' },
        { term: 'Irrationnel', def: 'Réel qui ne peut pas s\'écrire sous forme de fraction. Exemples : $\\sqrt{2}$, $\\pi$, $\\sqrt{3}$. Leur écriture décimale est infinie et non périodique.' }
      ],
      method: {
        title: 'Lire et écrire un intervalle',
        steps: [
          'Crochet fermé $[$ ou $]$ : la borne est incluse. <strong>Exemple :</strong> $[3 ; 7]$ signifie $3 \\le x \\le 7$ (les bornes $3$ et $7$ font partie de l\'ensemble).',
          'Crochet ouvert $]$ ou $[$ : la borne est exclue. <strong>Exemple :</strong> $]2 ; 5[$ signifie $2 < x < 5$ (ni $2$ ni $5$ ne font partie de l\'ensemble).',
          'Pour $+\\infty$ ou $-\\infty$, toujours utiliser un crochet ouvert. <strong>Exemple :</strong> $[3 ; +\\infty[$ signifie $x \\ge 3$.',
          'Intersection $\\cap$ = valeurs communes ; union $\\cup$ = toutes les valeurs. <strong>Exemple :</strong> $[1 ; 5] \\cap [3 ; 8] = [3 ; 5]$ ; $[1 ; 5] \\cup [3 ; 8] = [1 ; 8]$.'
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
      { q: 'Que vaut $[-1;3] \\cap [1;5]$ ?', options: ['$[-1;5]$', '$[1;3]$', '$[-1;3]$', '$[1;5]$'], answer: 1, correction: 'L\'intersection contient les valeurs communes : de $\\max(-1,1)=1$ à $\\min(3,5)=3$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 8), b = rand(a+1, a+6);
        return {
          statement: `Donner la longueur de l'intervalle $[${a};${b}]$.`,
          answer: b - a,
          tolerance: 0,
          unit: '',
          hint: 'La longueur d\'un intervalle $[a;b]$ est $b - a$.',
          solution: [`Longueur $= ${b} - ${a} = ${b-a}$`]
        };
      }
    },
    probleme: {
      context: 'Un thermomètre mesure entre $-15\\,°C$ et $40\\,°C$. Une bactérie se développe dans $[15;37]$ et une levure dans $[10;30]$.',
      tasks: [
        'Exprimer la plage du thermomètre en notation intervalle.',
        'À quelles températures les deux micro-organismes se développent-ils simultanément ?',
        'À quelles températures au moins un des deux se développe-t-il ?'
      ],
      solutions: [
        'Plage : $[-15;40]$.',
        'Simultanément : $[15;37] \\cap [10;30] = [15;30]$.',
        'Au moins un : $[15;37] \\cup [10;30] = [10;37]$.'
      ],
      finalAnswer: 'Développement simultané : $[15;30]$ ; au moins un : $[10;37]$.'
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
  },

    {
    id: '2nde-calcul-algebrique',
    level: 2, subject: 'maths',
    icon: '🧮',
    title: 'Calcul algébrique',
    subtitle: 'Développer, factoriser, identités remarquables',
    keywords: ['Développer', 'Factoriser', 'Identité remarquable', 'Distributivité'],
    physics: false,
    cours: {
      intro: 'Le calcul algébrique permet de transformer une expression en une forme équivalente — plus simple ou plus adaptée au problème. Développer supprime les parenthèses et étale tous les termes ; factoriser fait l\'inverse en regroupant sous un produit. Choisir entre les deux dépend du contexte : pour résoudre $f(x) = 0$, la forme factorisée permet de trouver directement les racines ($f(x) = 0 \\Leftrightarrow$ chaque facteur $= 0$) ; pour comparer ou simplifier, la forme développée est souvent plus lisible. La vérification consiste à redévelopper le résultat factorisé pour retrouver la forme initiale — indispensable pour éviter les erreurs de signe.',
      definitions: [
        { term: 'Développer', def: 'Transformer un produit en somme en supprimant les parenthèses : $a(b+c) = ab + ac$.' },
        { term: 'Factoriser', def: 'Transformer une somme en produit en mettant en facteur un terme commun ou en reconnaissant une identité remarquable.' },
        { term: 'Identité remarquable', def: 'Formule de calcul toujours vraie, comme $(a+b)^2 = a^2 + 2ab + b^2$, qui accélère les développements et factorisations.' },
        { term: 'Distributivité', def: 'Propriété : $a(b+c) = ab + ac$. C\'est la base du développement.' }
      ],
      method: {
        title: 'Choisir entre développer et factoriser',
        steps: [
          'Développer : appliquer la distributivité $a(b+c)=ab+ac$ ou les identités remarquables. <strong>Exemple :</strong> $3(2x+5) = 6x + 15$.',
          'Trois identités remarquables : $(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$. <strong>Exemple :</strong> $(x+4)^2 = x^2 + 8x + 16$ (ne pas oublier le $2ab = 8x$).',
          'Factoriser : repérer un facteur commun ou reconnaître une identité dans l\'expression développée. <strong>Exemple :</strong> $x^2 - 9 = (x+3)(x-3)$ (différence de deux carrés).',
          'Vérifier en redéveloppant le résultat factorisé. <strong>Exemple :</strong> $(x+3)(x-3) = x^2 - 3x + 3x - 9 = x^2 - 9$ ✓'
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
      { q: 'Développer $(2x-1)(2x+1)$', options: ['$4x^2-1$', '$4x^2+1$', '$4x^2-4x+1$', '$2x^2-1$'], answer: 0, correction: '$(2x-1)(2x+1)=(2x)^2-1^2=4x^2-1$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 7), b = rand(1, 5);
        return {
          statement: `Développer et réduire $(${a}x + ${b})^2$. Donner le coefficient de $x$.`,
          answer: 2 * a * b,
          tolerance: 0,
          unit: '',
          hint: `Utilise $(a+b)^2 = a^2+2ab+b^2$ avec $a=${a}x$ et $b=${b}$.`,
          solution: [
            `$(${a}x+${b})^2 = ${a*a}x^2 + 2\\times${a}\\times${b}\\cdot x + ${b*b}$`,
            `$= ${a*a}x^2 + ${2*a*b}x + ${b*b}$`,
            `Le coefficient de $x$ est $${2*a*b}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un jardinier agrandit son carré de côté $x$ m en ajoutant $4$ m à chaque côté.',
      tasks: [
        'Exprimer l\'aire de la nouvelle parcelle sous forme développée.',
        'Reconnaître l\'identité remarquable et écrire la forme factorisée.',
        'Calculer la nouvelle aire si $x = 6$ m.'
      ],
      solutions: [
        '$(x+4)^2 = x^2 + 8x + 16$.',
        '$x^2+8x+16 = (x+4)^2$.',
        '$(6+4)^2 = 100$ m².'
      ],
      finalAnswer: 'Aire $= (x+4)^2 = x^2+8x+16$. Pour $x=6$ : $100$ m².'
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
        {
          statement: 'Factoriser $x^2 - 49$.',
          type: 'multiple-choice',
          options: ['$(x-7)^2$', '$(x+7)(x-7)$', '$(x-49)(x+1)$', '$(x+7)^2$'],
          answer: 1,
          points: 2,
          correction: '$x^2 - 49 = x^2 - 7^2$. C\'est une différence de deux carrés : $a^2 - b^2 = (a+b)(a-b)$. Donc $x^2 - 49 = (x+7)(x-7)$.'
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
        {
          statement: 'Développer et réduire $(x-4)^2$. Donner le coefficient du terme en $x$.',
          type: 'numeric',
          answer: -8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(x-4)^2 = x^2 - 2 \\times x \\times 4 + 4^2 = x^2 - 8x + 16$. Le coefficient de $x$ est $-8$.'
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
  },

    {
    id: '2nde-equations-inequations',
    level: 2, subject: 'maths',
    icon: '⚖️',
    title: 'Équations et inéquations du 1er degré',
    subtitle: 'Résoudre et représenter les solutions',
    keywords: ['Équation', 'Inéquation', 'Intervalle solution', 'Premier degré'],
    physics: false,
    cours: {
      intro: 'Une équation du premier degré établit une condition d\'égalité sur une inconnue $x$ : on cherche la valeur qui la rend vraie. Une inéquation remplace l\'égalité par une relation d\'ordre ($<$, $>$, $\\leq$, $\\geq$) et la solution est généralement un intervalle infini. Les deux se résolvent par les mêmes opérations élémentaires — avec une règle d\'or pour les inéquations : toute multiplication ou division par un nombre négatif inverse le sens de l\'inégalité. En physique et en économie, les inéquations décrivent naturellement des contraintes (distance positive, seuil de rentabilité, condition de validité). Exprimer les solutions sous forme d\'intervalle ($]-\\infty ; 2[$, $[3;+\\infty[$…) permet une lecture immédiate.',
      definitions: [
        { term: 'Équation du 1er degré', def: 'Relation $ax + b = 0$ où $a \\neq 0$. Elle admet une unique solution : $x = -b/a$.' },
        { term: 'Inéquation', def: 'Relation d\'ordre portant sur une inconnue ($ax + b < 0$, $\\geq$, etc.). L\'ensemble des solutions est un intervalle.' },
        { term: 'Ensemble solution', def: 'L\'ensemble de toutes les valeurs de $x$ qui vérifient l\'équation ou l\'inéquation. Noté sous forme d\'intervalle pour les inéquations.' },
        { term: 'Valeur test', def: 'Valeur numérique substituée dans l\'inéquation pour vérifier que la solution est correcte.' }
      ],
      method: {
        title: 'Résoudre une inéquation',
        steps: [
          'Isoler l\'inconnue en appliquant les mêmes opérations des deux côtés. <strong>Exemple :</strong> $3x + 7 > 1$ → $3x > -6$.',
          'Multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité. <strong>Exemple :</strong> $-2x > 6$ → on divise par $-2$ et on inverse : $x < -3$.',
          'Exprimer la solution en notation intervalle. <strong>Exemple :</strong> $x < -3$ s\'écrit $]-\\infty ; -3[$.',
          'Vérifier avec une valeur test. <strong>Exemple :</strong> Prendre $x = -5$ (dans $]-\\infty ; -3[$) : $-2 \\times (-5) = 10 > 6$ ✓.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-5x + 3 \\geq 18$.',
        steps: [
          'Isoler le terme en $x$ : $-5x \\geq 18 - 3$, soit $-5x \\geq 15$.',
          'Diviser par $-5$ (négatif !) et inverser le sens : $x \\leq \\dfrac{15}{-5} = -3$.',
          'Ensemble solution : $]-\\infty ; -3]$.',
          'Vérification : pour $x = -4$ (dans l\'intervalle) : $-5 \\times (-4) + 3 = 23 \\geq 18$ ✓.'
        ],
        answer: '$S = ]-\\infty ; -3]$.'
      },
      formulas: [
        '$ax + b = 0 \\Rightarrow x = -\\dfrac{b}{a}$ (si $a \\ne 0$)',
        'Si $a > 0$ : $ax < c \\Rightarrow x < \\dfrac{c}{a}$',
        'Si $a < 0$ : $ax < c \\Rightarrow x > \\dfrac{c}{a}$ (inversion !)'
      ],
      recap: [
        'Équation du 1er degré : isoler $x$ par opérations réversibles ; une unique solution.',
        'Inéquation : même méthode, mais inverser le sens si on multiplie/divise par un négatif.',
        'La solution d\'une inéquation est un intervalle (souvent infini) à exprimer en notation correcte.',
        'Toujours vérifier avec une valeur test appartenant à l\'intervalle trouvé.'
      ],
      piege: 'Diviser par $-2$ transforme $<$ en $>$. C\'est l\'erreur la plus fréquente dans les inéquations !'
    },
    quiz: [
      { q: 'Un élève résout $-4x + 8 > 0$ et obtient $x > 2$. Quelle est son erreur ?', options: ['Il a oublié d\'inverser l\'inégalité en divisant par $-4$ : la solution correcte est $x < 2$', 'Il n\'y a pas d\'erreur, $x > 2$ est correct', 'Il devait soustraire $8$ des deux membres, pas diviser', 'La solution est $x > -2$'], answer: 0, correction: '$-4x + 8 > 0 \\Rightarrow -4x > -8 \\Rightarrow x < \\frac{-8}{-4} = 2$. Diviser par $-4$ (négatif) inverse $>$ en $<$. La solution correcte est $]-\\infty ; 2[$.' },
      { q: 'Résoudre $-2x + 4 > 0$', options: ['$x>2$', '$x<2$', '$x>-2$', '$x<-2$'], answer: 1, correction: '$-2x > -4 \\Rightarrow x < 2$ (division par $-2$, inversion du sens).' },
      { q: 'L\'ensemble solution de $5x + 1 \\le 11$ est :', options: ['$[2;+\\infty[$', '$]-\\infty;2]$', '$]-\\infty;2[$', '$[2;11]$'], answer: 1, correction: '$5x \\le 10 \\Rightarrow x \\le 2$, soit $]-\\infty;2]$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6), b = rand(1, 8), ans = rand(1, 7);
        const c = a * ans + b;
        return {
          statement: `Résoudre $${a}x + ${b} = ${c}$. Donner la valeur de $x$.`,
          answer: ans,
          tolerance: 0,
          unit: '',
          hint: `Soustraire $${b}$ des deux membres, puis diviser par $${a}$.`,
          solution: [`$${a}x = ${c} - ${b} = ${c-b}$`, `$x = ${c-b} \\div ${a} = ${ans}$`]
        };
      }
    },
    probleme: {
      context: 'Un abonnement A coûte $25$ €/mois + $30$ € d\'inscription. Un abonnement B coûte $35$ €/mois sans inscription.',
      tasks: [
        'Modéliser le coût total de chaque offre après $n$ mois.',
        'À partir de combien de mois l\'offre A est-elle moins chère ?',
        'Exprimer la solution sous forme d\'intervalle.'
      ],
      solutions: [
        'Offre A : $C_A = 25n + 30$ ; Offre B : $C_B = 35n$.',
        '$25n+30 < 35n \\Rightarrow 30 < 10n \\Rightarrow n > 3$. À partir du 4e mois.',
        '$n \\in ]3;+\\infty[$, soit $n \\ge 4$ (mois entiers).'
      ],
      finalAnswer: 'L\'offre A est moins chère à partir du 4e mois.'
    },

    evaluation: {
      title: 'Évaluation — Équations et inéquations du 1er degré',
      duration: '25 min',
      questions: [
        {
          statement: 'Résoudre $7x - 3 = 25$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$7x - 3 = 25 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.'
        },
        {
          statement: 'Résoudre $-3x + 9 > 0$. L\'ensemble des solutions est :',
          type: 'multiple-choice',
          options: ['$x > 3$', '$x < 3$', '$x > -3$', '$x < -3$'],
          answer: 1,
          points: 2,
          correction: '$-3x + 9 > 0 \\Rightarrow -3x > -9 \\Rightarrow x < 3$ (on divise par $-3$, on inverse le sens de l\'inégalité). Ensemble solution : $]-\\infty ; 3[$.'
        },
        {
          statement: 'Résoudre $\\dfrac{2x+1}{3} = 5$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\dfrac{2x+1}{3} = 5 \\Rightarrow 2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.'
        },
        {
          statement: 'L\'ensemble solution de $4x - 2 \\geq 10$ est :',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 3]$', '$[3 ; +\\infty[$', '$]-\\infty ; 2]$', '$[2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: '$4x - 2 \\geq 10 \\Rightarrow 4x \\geq 12 \\Rightarrow x \\geq 3$. Ensemble solution : $[3 ; +\\infty[$.'
        },
        {
          statement: 'Résoudre $5 - 2x = 3x + 15$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5 - 2x = 3x + 15 \\Rightarrow 5 - 15 = 3x + 2x \\Rightarrow -10 = 5x \\Rightarrow x = -2$.'
        }
      ]
    }
  },

    {
    id: '2nde-fonctions-generalites',
    level: 2, subject: 'maths',
    icon: '📈',
    title: 'Généralités sur les fonctions',
    subtitle: 'Définition, courbe, variations, extremums',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Variations', 'Extremum'],
    physics: false,
    cours: {
      intro: 'Une fonction est une règle qui associe à chaque $x$ de son domaine de définition une image UNIQUE $f(x)$. Son graphe est la courbe des points $(x ; f(x))$ dans le plan — la courbe ne peut pas se « dédoubler » verticalement. La notion de variation décrit l\'évolution de $f(x)$ quand $x$ augmente : croissante (graphe monte), décroissante (graphe descend). Un extremum est un point où la fonction change de sens. Lire un graphe nécessite de distinguer clairement abscisse ($x$, entrée) et ordonnée ($f(x)$, sortie) : image → lecture verticale, antécédent → lecture horizontale.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ de son domaine de définition une unique image $f(x)$.' },
        { term: 'Image', def: 'La valeur $f(x)$ obtenue en appliquant la fonction à $x$. Se lit verticalement sur le graphe.' },
        { term: 'Antécédent', def: 'Valeur $x$ telle que $f(x) = y$. Un antécédent peut ne pas exister, ou il peut y en avoir plusieurs.' },
        { term: 'Extremum', def: 'Maximum ou minimum de $f$ sur un intervalle. C\'est le point où la fonction atteint sa plus grande (ou plus petite) valeur.' }
      ],
      method: {
        title: 'Lire une courbe',
        steps: [
          'Image : partir de $x$ sur l\'axe horizontal, rejoindre la courbe, lire $y = f(x)$. <strong>Exemple :</strong> Si la courbe passe par $(3 ; 7)$, alors $f(3) = 7$ : l\'image de $3$ est $7$.',
          'Antécédent : partir de $y$ sur l\'axe vertical, rejoindre la courbe, lire $x$. <strong>Exemple :</strong> Si la courbe coupe la droite $y = 5$ en $x = 2$ et $x = 6$, alors $2$ et $6$ sont les antécédents de $5$.',
          'Maximum/minimum : chercher le sommet de la courbe sur l\'intervalle donné. <strong>Exemple :</strong> Si le point le plus haut de la courbe sur $[0 ; 8]$ est $(4 ; 10)$, le maximum est $10$, atteint en $x = 4$.',
          'Variations : la fonction croît si la courbe monte de gauche à droite. <strong>Exemple :</strong> Si $f(1) = 3$ et $f(4) = 9$ avec la courbe qui monte entre les deux, $f$ est croissante sur $[1 ; 4]$.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = -x^2 + 6x - 5$. Calculer $f(2)$, puis déterminer un antécédent de $-5$.',
        steps: [
          'Image de $2$ : $f(2) = -(2)^2 + 6 \\times 2 - 5 = -4 + 12 - 5 = 3$.',
          'Antécédent de $-5$ : résoudre $f(x) = -5$ → $-x^2 + 6x - 5 = -5$ → $-x^2 + 6x = 0$ → $x(-x + 6) = 0$.',
          'Donc $x = 0$ ou $x = 6$ : il y a deux antécédents de $-5$.'
        ],
        answer: '$f(2) = 3$. Les antécédents de $-5$ sont $x = 0$ et $x = 6$.'
      },
      formulas: [
        '$f$ croissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$',
        '$f$ décroissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$'
      ],
      recap: [
        'Une fonction associe à chaque $x$ une unique image $f(x)$ ; un antécédent peut ne pas être unique.',
        'Croissante = la courbe monte (de gauche à droite) ; décroissante = la courbe descend.',
        'Le maximum sur un intervalle est la plus grande valeur atteinte par $f(x)$ sur cet intervalle.',
        'Image = lecture verticale du graphe ; antécédent = lecture horizontale.'
      ],
      piege: 'Un antécédent peut ne pas exister ou ne pas être unique. L\'image d\'un $x$ donné, elle, est toujours unique (sinon ce n\'est pas une fonction).'
    },
    quiz: [
      { q: 'Si $f(5) = 3$, laquelle de ces affirmations est VRAIE ?', options: ['$3$ est l\'image de $5$ et $5$ est un antécédent de $3$', '$5$ est l\'image de $3$ et $3$ est un antécédent de $5$', '$f(3) = 5$', '$f$ n\'est définie qu\'en $x=5$'], answer: 0, correction: '$f(5) = 3$ signifie : « l\'image de $5$ est $3$ » et « $5$ est un antécédent de $3$ ». L\'erreur classique est d\'inverser : $5$ est l\'entrée (antécédent), $3$ est la sortie (image).' },
      { q: '$f$ est croissante sur $[1;4]$. On a $f(1)=2$ et $f(4)=9$. Alors :', options: ['$f(2) > f(3)$', '$f(2) < f(3)$', '$f(2) = f(3)$', 'Impossible à dire'], answer: 1, correction: 'Croissante : $2 < 3 \\Rightarrow f(2) < f(3)$.' },
      { q: 'Le maximum de $f$ sur $[-2;3]$ est $5$. Cela signifie que :', options: ['$f(5)=-2$', '$f(x)\\le 5$ pour tout $x\\in[-2;3]$', '$f(x)\\ge 5$ pour tout $x$', '$f(-2)=5$'], answer: 1, correction: 'Le maximum vaut $5$, donc $f(x)\\le 5$ pour tout $x$ de l\'intervalle.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(0, 6), xval = rand(2, 7);
        return {
          statement: `Soit $f(x) = ${a}x + ${b}$. Calculer $f(${xval})$.`,
          answer: a * xval + b,
          tolerance: 0,
          unit: '',
          hint: `Remplace $x$ par $${xval}$ dans l\'expression de $f$.`,
          solution: [`$f(${xval}) = ${a}\\times${xval} + ${b} = ${a*xval}+${b} = ${a*xval+b}$`]
        };
      }
    },
    probleme: {
      context: 'La température $T$ (en °C) d\'une pièce est mesurée à $t=0$ h ($T=18$), $t=3$ h ($T=22$), $t=6$ h ($T=20$).',
      tasks: [
        'La fonction $T$ est-elle croissante ou décroissante sur $[0;3]$ ? Sur $[3;6]$ ?',
        'Quel est le maximum de $T$ et en quel instant est-il atteint ?',
        'Donner un antécédent de $20$.'
      ],
      solutions: [
        'Croissante sur $[0;3]$ (18→22) ; décroissante sur $[3;6]$ (22→20).',
        'Maximum $T=22\\,°C$ atteint en $t=3$ h.',
        '$T(6)=20$, donc $t=6$ est un antécédent de $20$.'
      ],
      finalAnswer: 'Maximum $T=22\\,°C$ en $t=3$ h ; antécédent de $20$ : $t=6$ h.'
    },

    evaluation: {
      title: 'Évaluation — Généralités sur les fonctions',
      duration: '25 min',
      questions: [
        {
          statement: 'Soit $f(x) = 2x^2 - 3$. Calculer $f(-2)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(-2) = 2 \\times (-2)^2 - 3 = 2 \\times 4 - 3 = 8 - 3 = 5$.'
        },
        {
          statement: 'Si $f(3) = 7$, laquelle de ces affirmations est correcte ?',
          type: 'multiple-choice',
          options: ['$7$ est un antécédent de $3$ par $f$', '$3$ est l\'image de $7$ par $f$', '$3$ est un antécédent de $7$ par $f$', '$f(7) = 3$'],
          answer: 2,
          points: 2,
          correction: '$f(3) = 7$ signifie que $7$ est l\'image de $3$ par $f$, et que $3$ est un antécédent de $7$ par $f$.'
        },
        {
          statement: 'Une fonction $f$ est décroissante sur $[1;5]$. On sait que $f(1) = 10$ et $f(5) = 2$. Quel encadrement peut-on donner pour $f(3)$ ?',
          type: 'multiple-choice',
          options: ['$2 \\leq f(3) \\leq 10$', '$f(3) \\leq 2$', '$f(3) \\geq 10$', '$f(3) = 6$'],
          answer: 0,
          points: 2,
          correction: '$f$ est décroissante sur $[1;5]$, donc $1 < 3 < 5 \\Rightarrow f(1) > f(3) > f(5)$, soit $2 < f(3) < 10$. L\'encadrement large $2 \\leq f(3) \\leq 10$ est donc correct.'
        },
        {
          statement: 'Soit $g(x) = -x + 8$. Calculer l\'antécédent de $3$ par $g$ (c\'est-à-dire résoudre $g(x) = 3$).',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g(x) = 3 \\Rightarrow -x + 8 = 3 \\Rightarrow -x = -5 \\Rightarrow x = 5$. L\'antécédent de $3$ est $x = 5$.'
        },
        {
          statement: 'Le maximum d\'une fonction $f$ sur un intervalle $[a;b]$ est la plus grande valeur atteinte par $f(x)$ sur cet intervalle. Si $f$ est croissante sur $[2;6]$, en quel point le maximum est-il atteint ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si $f$ est croissante sur $[2;6]$, alors $f$ atteint sa plus grande valeur en la borne droite de l\'intervalle : le maximum est atteint en $x = 6$.'
        }
      ]
    }
  },

    {
    id: '2nde-fonctions-reference',
    level: 2, subject: 'maths',
    icon: '🔭',
    title: 'Fonctions de référence',
    subtitle: 'Carré, inverse, racine carrée',
    keywords: ['Fonction carré', 'Fonction inverse', 'Racine carrée', 'Parité'],
    physics: true,
    cours: {
      intro: 'Les trois fonctions de référence ($x\\mapsto x^2$, $x\\mapsto 1/x$, $x\\mapsto \\sqrt{x}$) sont les briques de base de l\'analyse. La fonction carré est paire ($f(-x) = f(x)$), atteint son minimum $0$ en $x=0$, et est définie sur $\\mathbb{R}$. La fonction inverse est impaire et n\'est jamais nulle : son domaine exclut $0$. La racine carrée n\'est définie que pour $x \\geq 0$ et est toujours croissante. Ces domaines sont fondamentaux : $\\sqrt{x-2}$ n\'existe que si $x \\geq 2$, $1/(x-3)$ est interdite en $x = 3$. Enfin, $\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un produit — mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$.',
      definitions: [
        { term: 'Fonction carré', def: 'Fonction $f(x) = x^2$. Définie sur $\\mathbb{R}$, paire, minimum en $0$. Sa courbe est une parabole tournée vers le haut.' },
        { term: 'Fonction inverse', def: 'Fonction $g(x) = \\dfrac{1}{x}$. Définie sur $\\mathbb{R} \\setminus \\{0\\}$, impaire, jamais nulle. Sa courbe est une hyperbole.' },
        { term: 'Fonction racine carrée', def: 'Fonction $h(x) = \\sqrt{x}$. Définie sur $[0 ; +\\infty[$, toujours croissante, $h(0) = 0$.' },
        { term: 'Parité', def: 'Une fonction est paire si $f(-x) = f(x)$ (symétrie par rapport à l\'axe des ordonnées) ; impaire si $f(-x) = -f(x)$ (symétrie par rapport à l\'origine).' }
      ],
      method: {
        title: 'Caractéristiques des trois fonctions',
        steps: [
          '$f(x)=x^2$ : domaine $\\mathbb{R}$, décroissante sur $]-\\infty;0]$, croissante sur $[0;+\\infty[$, minimum $0$ en $x=0$. <strong>Exemple :</strong> $f(-3) = 9$ et $f(3) = 9$ (parité : $f(-x) = f(x)$).',
          '$g(x)=\\frac{1}{x}$ : domaine $\\mathbb{R}\\setminus\\{0\\}$, décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$. <strong>Exemple :</strong> $g(2) = 0{,}5$ et $g(4) = 0{,}25$ : quand $x$ augmente, $g(x)$ diminue.',
          '$h(x)=\\sqrt{x}$ : domaine $[0;+\\infty[$, croissante, $h(0)=0$. <strong>Exemple :</strong> $\\sqrt{9} = 3$, $\\sqrt{16} = 4$ : quand $x$ augmente, $\\sqrt{x}$ augmente aussi.',
          'Pour comparer $\\sqrt{a}$ et $\\sqrt{b}$ : $a > b \\ge 0 \\Rightarrow \\sqrt{a} > \\sqrt{b}$. <strong>Exemple :</strong> $25 > 16 \\Rightarrow \\sqrt{25} = 5 > \\sqrt{16} = 4$.'
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
      { q: 'Un élève écrit $\\sqrt{9+16} = \\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Quelle est son erreur ?', options: ['On ne peut pas séparer $\\sqrt{a+b}$ : ici $\\sqrt{9+16} = \\sqrt{25} = 5 \\neq 7$', 'Il a mal calculé $\\sqrt{9}$ et $\\sqrt{16}$', 'Il n\'y a pas d\'erreur, $\\sqrt{25} = 7$', 'La racine carrée ne s\'applique qu\'aux entiers impairs'], answer: 0, correction: '$\\sqrt{9+16} = \\sqrt{25} = 5$, pas $7$. La propriété $\\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un PRODUIT, mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$ pour une SOMME.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const bases = [4, 9, 16, 25, 36, 49, 64];
        const b = pick(bases);
        return {
          statement: `Calculer $\\sqrt{${b}}$.`,
          answer: Math.sqrt(b),
          tolerance: 0,
          unit: '',
          hint: `Cherche un entier $n$ tel que $n^2 = ${b}$.`,
          solution: [`$\\sqrt{${b}} = ${Math.sqrt(b)}$ car $${Math.sqrt(b)}^2 = ${b}$`]
        };
      }
    },
    probleme: {
      context: 'En physique, la distance de freinage $d$ (en m) d\'une voiture est proportionnelle au carré de sa vitesse : $d = k v^2$ avec $k = 0{,}004$.',
      tasks: [
        'Calculer $d$ pour $v=50$ km/h et $v=100$ km/h.',
        'Si la distance est multipliée par $4$, par combien est multipliée la vitesse ?',
        'Exprimer $v$ en fonction de $d$.'
      ],
      solutions: [
        '$d(50)=0{,}004\\times 2500=10$ m ; $d(100)=0{,}004\\times 10000=40$ m.',
        '$d$ est multiplié par $4$ quand $v$ est multiplié par $\\sqrt{4}=2$.',
        '$v = \\sqrt{d/0{,}004} = \\sqrt{250d}$.'
      ],
      finalAnswer: 'À $100$ km/h, $d=40$ m. Doubler la vitesse quadruple la distance de freinage.'
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
  },

    {
    id: '2nde-reperage-plan',
    level: 2, subject: 'maths',
    icon: '📐',
    title: 'Repérage dans le plan',
    subtitle: 'Distances, milieux, coordonnées',
    keywords: ['Distance', 'Milieu', 'Coordonnées', 'Repère orthonormé'],
    physics: false,
    cours: {
      intro: 'Dans un repère orthonormé, chaque point du plan est identifié de façon unique par ses deux coordonnées $(x ; y)$. La formule $AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ est le théorème de Pythagore appliqué au triangle rectangle dont les côtés sont $|x_B-x_A|$ et $|y_B-y_A|$. Le milieu de $[AB]$ a pour coordonnées la moyenne arithmétique de celles des extrémités. Ces formules permettent de prouver des propriétés géométriques (isocèle, rectangle, parallélogramme) par le calcul, sans dessin — c\'est l\'approche de la géométrie analytique.',
      definitions: [
        { term: 'Repère orthonormé', def: 'Système d\'axes perpendiculaires $(Ox, Oy)$ avec la même unité sur chaque axe. Chaque point est repéré par $(x ; y)$.' },
        { term: 'Distance', def: 'Longueur du segment $[AB]$ : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, application directe du théorème de Pythagore.' },
        { term: 'Milieu', def: 'Point $M$ situé à égale distance de $A$ et $B$ : $M\\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$.' },
        { term: 'Géométrie analytique', def: 'Méthode qui utilise les coordonnées et le calcul pour prouver des propriétés géométriques (au lieu du raisonnement purement graphique).' }
      ],
      method: {
        title: 'Calculer distance et milieu',
        steps: [
          'Distance $AB$ : $d = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $AB = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
          'Milieu $M$ de $[AB]$ : $M\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2}\\right)$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $M\\left(\\frac{5}{2} ; 4\\right) = (2{,}5 ; 4)$.',
          'Vérifier en recalculant $MA = MB$. <strong>Exemple :</strong> $MA = \\sqrt{(2{,}5-1)^2+(4-2)^2} = \\sqrt{2{,}25+4} = \\sqrt{6{,}25} = 2{,}5$ et $MB = 2{,}5$ ✓.',
          'Attention aux signes lors des soustractions de coordonnées. <strong>Exemple :</strong> $A(-3 ; 5)$, $B(2 ; -1)$ → $x_B - x_A = 2 - (-3) = 5$ (pas $-1$).'
        ]
      },
      example: {
        statement: 'On donne $A(−2 ; 3)$ et $B(4 ; −1)$. Calculer $AB$ et les coordonnées du milieu $M$.',
        steps: [
          '$AB = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2} = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52}$.',
          '$\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13} \\approx 7{,}21$.',
          'Milieu : $M\\left(\\dfrac{-2+4}{2} ; \\dfrac{3+(-1)}{2}\\right) = M(1 ; 1)$.'
        ],
        answer: '$AB = 2\\sqrt{13} \\approx 7{,}21$ et $M(1 ; 1)$.'
      },
      formulas: [
        '$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$',
        '$M = \\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$'
      ],
      recap: [
        'La distance entre deux points est le théorème de Pythagore appliqué aux écarts de coordonnées.',
        'Le milieu a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées.',
        'Le sens de la soustraction n\'importe pas grâce au carré : $(x_A - x_B)^2 = (x_B - x_A)^2$.',
        'Pour prouver un triangle isocèle : calculer les trois côtés et comparer les longueurs.'
      ],
      piege: 'Ne pas confondre $AB^2 = (x_B-x_A)^2+(y_B-y_A)^2$ (pas de $2\\times$, c\'est la somme de deux carrés).'
    },
    quiz: [
      { q: 'Un élève calcule $AB$ avec $A(-3;2)$ et $B(5;-1)$ et écrit $AB = \\sqrt{(-3-5)^2+(2-(-1))^2}$. Ce calcul est-il correct ?', options: ['Oui : $(-8)^2+3^2 = 73$, donc $AB=\\sqrt{73}$ (le sens de la soustraction ne change pas le carré)', 'Non : il faut toujours faire $x_B - x_A$, jamais $x_A - x_B$', 'Non : il faut utiliser $|x_B-x_A|+|y_B-y_A|$ sans carré', 'Non : les coordonnées négatives s\'additionnent'], answer: 0, correction: 'Les deux écritures donnent le même résultat car $(x_A-x_B)^2 = (x_B-x_A)^2$. $AB = \\sqrt{(-8)^2+3^2} = \\sqrt{64+9} = \\sqrt{73}$ ✓ — le sens de la soustraction n\'importe pas grâce au carré.' },
      { q: 'Distance entre $O(0;0)$ et $A(3;4)$ ?', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], answer: 0, correction: '$OA=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.' },
      { q: 'Si $M(3;5)$ est le milieu de $[AB]$ et $A(1;3)$, alors $B$ est :', options: ['$(5;7)$', '$(2;4)$', '$(4;6)$', '$(6;10)$'], answer: 0, correction: '$x_B=2\\times 3-1=5$ ; $y_B=2\\times 5-3=7$. Donc $B(5;7)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const x1 = rand(0, 4), y1 = rand(0, 4), x2 = x1 + rand(3, 6), y2 = y1 + rand(0, 4);
        const dist2 = (x2-x1)**2 + (y2-y1)**2;
        const dist = parseFloat(Math.sqrt(dist2).toFixed(2));
        return {
          statement: `Calculer la distance entre $A(${x1};${y1})$ et $B(${x2};${y2})$. (Arrondir à $0{,}01$)`,
          answer: dist,
          tolerance: 0.05,
          unit: 'unités',
          hint: `Applique $AB=\\sqrt{(${x2}-${x1})^2+(${y2}-${y1})^2}$.`,
          solution: [
            `$AB=\\sqrt{${x2-x1}^2+${y2-y1}^2}=\\sqrt{${(x2-x1)**2}+${(y2-y1)**2}}=\\sqrt{${dist2}}\\approx ${dist}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Sur une carte (1 unité = 1 km), trois villes : $A(1;2)$, $B(7;2)$, $C(4;6)$.',
      tasks: [
        'Calculer les longueurs $AB$, $AC$ et $BC$.',
        'Déterminer les coordonnées du milieu $M$ de $[BC]$.',
        'Vérifier que $AM$ est la médiane issue de $A$.'
      ],
      solutions: [
        '$AB=6$ km ; $AC=\\sqrt{9+16}=5$ km ; $BC=\\sqrt{9+16}=5$ km.',
        '$M=\\left(\\frac{7+4}{2};\\frac{2+6}{2}\\right)=(5{,}5;4)$.',
        '$AM=\\sqrt{(5{,}5-1)^2+(4-2)^2}=\\sqrt{20{,}25+4}=\\sqrt{24{,}25}\\approx 4{,}92$ km.'
      ],
      finalAnswer: 'Triangle isocèle : $AC=BC=5$ km. Milieu de $BC$ : $M(5{,}5;4)$.'
    },

    evaluation: {
      title: 'Évaluation — Repérage dans le plan',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la distance entre les points $A(1 ; 3)$ et $B(4 ; 7)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$AB = \\sqrt{(4-1)^2 + (7-3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
        },
        {
          statement: 'Calculer les coordonnées du milieu $M$ de $[AB]$ avec $A(2 ; 6)$ et $B(8 ; 4)$. Donner l\'abscisse de $M$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{2 + 8}{2} = 5$. (Et $y_M = \\dfrac{6+4}{2} = 5$, donc $M(5 ; 5)$.)'
        },
        {
          statement: 'Si $M(3 ; 4)$ est le milieu de $[AB]$ et $A(-1 ; 2)$, calculer l\'ordonnée de $B$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y_M = \\dfrac{y_A + y_B}{2} \\Rightarrow 4 = \\dfrac{2 + y_B}{2} \\Rightarrow 8 = 2 + y_B \\Rightarrow y_B = 6$.'
        },
        {
          statement: 'On donne $A(0;0)$, $B(6;0)$ et $C(3;4)$. Le triangle $ABC$ est-il isocèle ?',
          type: 'multiple-choice',
          options: ['Oui, car $AC = BC = 5$', 'Oui, car $AB = AC$', 'Non, tous les côtés sont différents', 'Oui, car $AB = BC$'],
          answer: 0,
          points: 2,
          correction: '$AB = 6$. $AC = \\sqrt{9 + 16} = 5$. $BC = \\sqrt{9 + 16} = 5$. Comme $AC = BC = 5$, le triangle est isocèle en $C$.'
        },
        {
          statement: 'Calculer la distance entre $P(-2 ; 5)$ et $Q(3 ; -7)$.',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$PQ = \\sqrt{(3-(-2))^2 + (-7-5)^2} = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.'
        }
      ]
    }
  },

    {
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
      { q: 'Deux droites de pente $m=4$ sont-elles sécantes ?', options: ['Oui, toujours', 'Non, elles sont parallèles', 'Oui, si même ordonnée à l\'origine', 'Impossible à dire'], answer: 1, correction: 'Même pente → droites parallèles (ou confondues). Elles ne se coupent pas si $p_1\\ne p_2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const m1 = rand(1, 4), p1 = rand(0, 3);
        const m2 = -rand(1, 3), p2 = rand(4, 8);
        const xAns = (p2 - p1) / (m1 - m2);
        if (!Number.isInteger(xAns)) {
          return { statement: `Résoudre $2x+1=x+4$. Donner $x$.`, answer: 3, tolerance: 0, unit: '', hint: 'Isole $x$.', solution: ['$x=3$'] };
        }
        return {
          statement: `Résoudre le système $y=${m1}x+${p1}$ et $y=${m2}x+${p2}$. Donner $x$.`,
          answer: xAns,
          tolerance: 0,
          unit: '',
          hint: `Égalise les deux expressions de $y$ : $${m1}x+${p1}=${m2}x+${p2}$.`,
          solution: [`$${m1}x-${m2}x=${p2}-${p1}$`, `$${m1-m2}x=${p2-p1}$`, `$x=${xAns}$`]
        };
      }
    },
    probleme: {
      context: 'Une épicerie vend des pommes à $2$ €/kg et des poires à $3$ €/kg. Un client achète $5$ kg de fruits pour $12$ €.',
      tasks: [
        'Modéliser la situation par un système de deux équations ($x$ = kg pommes, $y$ = kg poires).',
        'Résoudre le système.',
        'Combien de kg de chaque fruit a-t-il acheté ?'
      ],
      solutions: [
        '$\\begin{cases} x+y=5 \\\\ 2x+3y=12 \\end{cases}$',
        'De la 1re équation : $x=5-y$. Substitution : $2(5-y)+3y=12 \\Rightarrow 10+y=12 \\Rightarrow y=2$. Donc $x=3$.',
        '$3$ kg de pommes et $2$ kg de poires.'
      ],
      finalAnswer: '$3$ kg de pommes et $2$ kg de poires.'
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
  },

    {
    id: '2nde-geometrie-plane',
    level: 2, subject: 'maths',
    icon: '📏',
    title: 'Géométrie plane',
    subtitle: 'Configurations, triangles, parallélisme',
    keywords: ['Triangle', 'Parallélisme', 'Thalès', 'Médiane', 'Hauteur'],
    physics: false,
    cours: {
      intro: 'La géométrie plane combine raisonnement logique et calcul pour prouver des propriétés sur des figures. Le théorème de Thalès permet de calculer des longueurs inaccessibles à partir de rapports entre segments parallèles. Dans un triangle, quatre droites remarquables se distinguent par leur définition : la médiane joint un sommet au milieu du côté opposé ; la hauteur est perpendiculaire au côté opposé (mais pas nécessairement en son milieu) ; la médiatrice est perpendiculaire au côté par son milieu ; la bissectrice divise l\'angle en deux parties égales. Confondre ces quatre notions est l\'une des erreurs les plus fréquentes en géométrie.',
      definitions: [
        { term: 'Théorème de Thalès', def: 'Si $(MN) \\parallel (BC)$ dans un triangle $ABC$ avec $M \\in [AB]$ et $N \\in [AC]$, alors $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.' },
        { term: 'Médiane', def: 'Droite joignant un sommet au milieu du côté opposé. Les trois médianes se coupent au centre de gravité.' },
        { term: 'Hauteur', def: 'Droite passant par un sommet, perpendiculaire au côté opposé. Attention : elle ne passe pas nécessairement par le milieu du côté.' },
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un segment en son milieu. Les trois médiatrices d\'un triangle se coupent au centre du cercle circonscrit.' }
      ],
      method: {
        title: 'Appliquer le théorème de Thalès',
        steps: [
          'Identifier deux droites sécantes et deux droites parallèles coupant ces sécantes. <strong>Exemple :</strong> Dans le triangle $ABC$, si $M \\in [AB]$ et $N \\in [AC]$ avec $(MN) \\parallel (BC)$, la configuration est valide.',
          'Écrire les rapports égaux : $\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac{MN}{BC}$. <strong>Exemple :</strong> Si $AM = 3$, $AB = 9$ → le rapport est $\\frac{3}{9} = \\frac{1}{3}$.',
          'Calculer la longueur inconnue par produit en croix. <strong>Exemple :</strong> $\\frac{1}{3} = \\frac{MN}{12}$ → $MN = \\frac{12}{3} = 4$.',
          'Vérifier la cohérence (la longueur partielle est inférieure à la totale). <strong>Exemple :</strong> $MN = 4 < BC = 12$ ✓ (le petit triangle est plus petit).'
        ]
      },
      example: {
        statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $AM = 4$ cm, $MB = 8$ cm, $AN = 3$ cm. Calculer $NC$ et $MN$ sachant que $BC = 15$ cm.',
        steps: [
          '$AB = AM + MB = 4 + 8 = 12$ cm. Le rapport de réduction est $k = \\dfrac{AM}{AB} = \\dfrac{4}{12} = \\dfrac{1}{3}$.',
          '$\\dfrac{AN}{AC} = \\dfrac{1}{3}$ → $AC = 3 \\times 3 = 9$ cm, donc $NC = AC - AN = 9 - 3 = 6$ cm.',
          '$\\dfrac{MN}{BC} = \\dfrac{1}{3}$ → $MN = \\dfrac{15}{3} = 5$ cm.'
        ],
        answer: '$NC = 6$ cm et $MN = 5$ cm.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto"><tr><th style="border:1px solid var(--border);padding:8px">Droite remarquable</th><th style="border:1px solid var(--border);padding:8px">Passe par</th><th style="border:1px solid var(--border);padding:8px">Propriété</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Médiane</td><td style="border:1px solid var(--border);padding:8px">Sommet → milieu du côté opposé</td><td style="border:1px solid var(--border);padding:8px">Centre de gravité</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Hauteur</td><td style="border:1px solid var(--border);padding:8px">Sommet ⊥ côté opposé</td><td style="border:1px solid var(--border);padding:8px">Orthocentre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Médiatrice</td><td style="border:1px solid var(--border);padding:8px">⊥ au milieu du côté</td><td style="border:1px solid var(--border);padding:8px">Centre du cercle circonscrit</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Bissectrice</td><td style="border:1px solid var(--border);padding:8px">Sommet, divise l\'angle en 2</td><td style="border:1px solid var(--border);padding:8px">Centre du cercle inscrit</td></tr></table>',
      formulas: [
        'Thalès : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$',
        'Aire triangle : $\\mathcal{A}=\\dfrac{\\text{base}\\times\\text{hauteur}}{2}$',
        'Somme des angles d\'un triangle : $180°$'
      ],
      recap: [
        'Thalès lie les rapports de longueurs quand une droite est parallèle à un côté du triangle.',
        'Le rapport des aires de deux triangles en configuration de Thalès est le carré du rapport de réduction : $k^2$.',
        'Quatre droites remarquables : médiane, hauteur, médiatrice, bissectrice — ne pas les confondre.',
        'La somme des angles d\'un triangle vaut toujours $180°$.'
      ],
      piege: 'Thalès s\'applique uniquement si $M\\in[AB]$ et $N\\in[AC]$ ET que $(MN)\\parallel(BC)$. Vérifier les conditions avant d\'écrire les rapports.'
    },
    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $60°$ et $80°$. Le troisième mesure :', options: ['$40°$', '$50°$', '$60°$', '$120°$'], answer: 0, correction: '$180-60-80=40°$.' },
      { q: 'Dans un triangle $ABC$, $M\\in[AB]$ et $N\\in[AC]$ avec $(MN)\\parallel(BC)$. Si $AM=3$, $MB=6$, $AN=2$, alors $NC=$ ?', options: ['$2$', '$4$', '$6$', '$3$'], answer: 1, correction: '$\\frac{AM}{AB}=\\frac{AN}{AC} \\Rightarrow \\frac{3}{9}=\\frac{2}{AC} \\Rightarrow AC=6$. Donc $NC=AC-AN=6-2=4$.' },
      { q: 'La hauteur issue de $A$ dans un triangle $ABC$ est :', options: ['La droite issue de $A$, perpendiculaire au côté $BC$', 'La droite issue de $A$, passant par le milieu de $BC$', 'La droite perpendiculaire à $BC$ par son milieu', 'La droite qui partage l\'angle $\\hat{A}$ en deux parties égales'], answer: 0, correction: 'La hauteur issue de $A$ est perpendiculaire à $BC$ — mais pas nécessairement par le milieu de $BC$. Le milieu de $BC$ est utilisé par la médiane (option B) et la médiatrice (option C). La bissectrice (option D) divise l\'angle. Ces quatre droites sont distinctes !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const am = rand(2, 5), ratio = rand(2, 4);
        const ab = am * ratio;
        const an = rand(2, 4);
        const ac = an * ratio;
        const nc = ac - an;
        return {
          statement: `Dans un triangle $ABC$, $(MN)\\parallel(BC)$, $AM=${am}$, $AB=${ab}$, $AN=${an}$. Calculer $AC$.`,
          answer: ac,
          tolerance: 0,
          unit: '',
          hint: `Par Thalès : $\\frac{AM}{AB}=\\frac{AN}{AC}$.`,
          solution: [`$\\frac{${am}}{${ab}}=\\frac{${an}}{AC}$`, `$AC=\\frac{${an}\\times${ab}}{${am}}=${ac}$`]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un plan. Il sait que $(DE)\\parallel(BC)$ dans le triangle $ABC$ avec $AD=4$ m, $DB=6$ m et $DE=3$ m.',
      tasks: [
        'Calculer $BC$ par le théorème de Thalès.',
        'Calculer l\'aire du triangle $ADE$ si la hauteur depuis $A$ sur $DE$ vaut $2$ m.',
        'Quel est le rapport des aires des triangles $ADE$ et $ABC$ ?'
      ],
      solutions: [
        '$\\frac{AD}{AB}=\\frac{DE}{BC} \\Rightarrow \\frac{4}{10}=\\frac{3}{BC} \\Rightarrow BC=7{,}5$ m.',
        '$\\mathcal{A}_{ADE}=\\frac{3\\times 2}{2}=3$ m².',
        'Rapport $=\\left(\\frac{AD}{AB}\\right)^2=\\left(\\frac{4}{10}\\right)^2=\\frac{16}{100}=0{,}16$.'
      ],
      finalAnswer: '$BC=7{,}5$ m ; rapport des aires $= 0{,}16$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie plane',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle, deux angles mesurent $45°$ et $75°$. Calculer le troisième angle (en degrés).',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'La somme des angles d\'un triangle vaut $180°$. Troisième angle $= 180 - 45 - 75 = 60°$.'
        },
        {
          statement: 'Dans un triangle $ABC$, $(MN) \\parallel (BC)$ avec $M \\in [AB]$ et $N \\in [AC]$. On a $AM = 5$, $AB = 15$ et $BC = 12$. Calculer $MN$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Par le théorème de Thalès : $\\dfrac{AM}{AB} = \\dfrac{MN}{BC} \\Rightarrow \\dfrac{5}{15} = \\dfrac{MN}{12} \\Rightarrow MN = \\dfrac{5 \\times 12}{15} = 4$.'
        },
        {
          statement: 'La hauteur issue de $A$ dans un triangle $ABC$ est :',
          type: 'multiple-choice',
          options: ['La droite passant par $A$ et le milieu de $[BC]$', 'La droite passant par $A$, perpendiculaire à $(BC)$', 'La perpendiculaire à $[BC]$ passant par son milieu', 'La droite qui divise l\'angle $\\hat{A}$ en deux'],
          answer: 1,
          points: 2,
          correction: 'La hauteur issue de $A$ est la droite passant par $A$ et perpendiculaire au côté opposé $[BC]$. L\'option A décrit la médiane, C la médiatrice, et D la bissectrice.'
        },
        {
          statement: 'Calculer l\'aire d\'un triangle de base $b = 8$ cm et de hauteur $h = 5$ cm.',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{b \\times h}{2} = \\dfrac{8 \\times 5}{2} = 20$ cm².'
        },
        {
          statement: 'Deux triangles sont en configuration de Thalès avec un rapport de réduction $k = \\dfrac{2}{5}$. Le rapport de leurs aires est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{2}{5}$', '$\\dfrac{4}{25}$', '$\\dfrac{4}{5}$', '$\\dfrac{2}{25}$'],
          answer: 1,
          points: 1,
          correction: 'Le rapport des aires est le carré du rapport de réduction : $k^2 = \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.'
        }
      ]
    }
  },

    {
    id: '2nde-statistiques',
    level: 2, subject: 'maths',
    icon: '📊',
    title: 'Statistiques descriptives',
    subtitle: 'Variance, écart-type, dispersion',
    keywords: ['Variance', 'Écart-type', 'Moyenne', 'Dispersion', 'Boîte à moustaches'],
    physics: false,
    cours: {
      intro: 'La moyenne est la mesure de tendance centrale la plus utilisée, mais elle est sensible aux valeurs extrêmes. La variance mesure la dispersion en moyennant les CARRÉS des écarts à la moyenne (pas les écarts simples, dont la somme est toujours nulle). L\'écart-type $\\sigma = \\sqrt{V}$ est exprimé dans les mêmes unités que les données — ce qui le rend plus interprétable que la variance. Un écart-type faible signifie des données regroupées autour de la moyenne ; élevé, des données très dispersées. La règle empirique des $68\\%$ dit qu\'environ les deux tiers des données se trouvent dans $[\\bar{x}-\\sigma ; \\bar{x}+\\sigma]$ pour une distribution en cloche.',
      definitions: [
        { term: 'Moyenne', def: 'Somme des valeurs divisée par l\'effectif total : $\\bar{x} = \\dfrac{1}{n}\\sum x_i$. Sensible aux valeurs extrêmes.' },
        { term: 'Variance', def: 'Moyenne des carrés des écarts à la moyenne : $V = \\dfrac{1}{n}\\sum(x_i - \\bar{x})^2$. Mesure la dispersion.' },
        { term: 'Écart-type', def: '$\\sigma = \\sqrt{V}$. Exprimé dans les mêmes unités que les données, il est plus facile à interpréter que la variance.' },
        { term: 'Dispersion', def: 'Mesure de la variabilité des données autour de la moyenne. Plus $\\sigma$ est grand, plus les données sont dispersées.' }
      ],
      method: {
        title: 'Calculer l\'écart-type',
        steps: [
          'Calculer la moyenne $\\bar{x}=\\frac{1}{n}\\sum x_i$. <strong>Exemple :</strong> Série $\\{4 ; 6 ; 8\\}$ → $\\bar{x} = \\frac{4+6+8}{3} = 6$.',
          'Calculer la variance $V=\\frac{1}{n}\\sum (x_i-\\bar{x})^2$. <strong>Exemple :</strong> $V = \\frac{(4-6)^2 + (6-6)^2 + (8-6)^2}{3} = \\frac{4+0+4}{3} \\approx 2{,}67$.',
          'L\'écart-type est $\\sigma=\\sqrt{V}$. <strong>Exemple :</strong> $\\sigma = \\sqrt{2{,}67} \\approx 1{,}63$.',
          'Interpréter : environ $68\\%$ des données sont dans $[\\bar{x}-\\sigma ; \\bar{x}+\\sigma]$. <strong>Exemple :</strong> Ici $[6-1{,}63 ; 6+1{,}63] = [4{,}37 ; 7{,}63]$.'
        ]
      },
      example: {
        statement: 'On mesure les tailles (en cm) de $5$ élèves : $\\{162 ; 168 ; 170 ; 172 ; 178\\}$. Calculer la moyenne, la variance et l\'écart-type.',
        steps: [
          'Moyenne : $\\bar{x} = \\dfrac{162 + 168 + 170 + 172 + 178}{5} = \\dfrac{850}{5} = 170$ cm.',
          'Écarts au carré : $(162-170)^2 = 64$, $(168-170)^2 = 4$, $(170-170)^2 = 0$, $(172-170)^2 = 4$, $(178-170)^2 = 64$.',
          'Variance : $V = \\dfrac{64+4+0+4+64}{5} = \\dfrac{136}{5} = 27{,}2$ cm².',
          'Écart-type : $\\sigma = \\sqrt{27{,}2} \\approx 5{,}22$ cm.'
        ],
        answer: '$\\bar{x} = 170$ cm, $V = 27{,}2$ cm², $\\sigma \\approx 5{,}22$ cm.'
      },
      formulas: [
        '$\\bar{x} = \\dfrac{1}{n}\\displaystyle\\sum_{i=1}^n x_i$',
        '$V = \\dfrac{1}{n}\\displaystyle\\sum_{i=1}^n (x_i-\\bar{x})^2$',
        '$\\sigma = \\sqrt{V}$'
      ],
      recap: [
        'La moyenne mesure la tendance centrale ; la variance et l\'écart-type mesurent la dispersion.',
        'On utilise les écarts au carré (pas les écarts simples, dont la somme est toujours nulle).',
        '$\\sigma$ a les mêmes unités que les données ; la variance est en unités² — c\'est pourquoi on préfère $\\sigma$.',
        'Un $\\sigma$ faible = données groupées autour de la moyenne ; un $\\sigma$ élevé = données dispersées.'
      ],
      piege: 'La variance se calcule avec les écarts à la moyenne au carré, pas en valeur absolue. Ne pas confondre $V$ et $\\sigma$.'
    },
    quiz: [
      { q: 'Pourquoi calcule-t-on la variance avec les écarts au CARRÉ $(x_i-\\bar{x})^2$ plutôt qu\'en valeur absolue ?', options: ['La somme des écarts simples $\\sum(x_i-\\bar{x})$ est toujours nulle ; le carré évite cette annulation et pénalise davantage les grandes déviations', 'Parce que les valeurs absolues ne s\'additionnent pas', 'Pour que les résultats soient toujours entiers', 'Par convention seulement — les deux formules donnent le même résultat'], answer: 0, correction: 'La somme $\\sum(x_i-\\bar{x}) = 0$ toujours (définition de la moyenne). En prenant les carrés, on évite cette annulation. De plus, le carré pénalise davantage les grandes déviations que les petites — ce qui est souvent souhaitable.' },
      { q: 'Deux séries ont la même moyenne. L\'écart-type de A est $0{,}5$, celui de B est $3$. Quelle série est plus homogène ?', options: ['B', 'A', 'Elles sont identiques', 'Impossible à dire'], answer: 1, correction: 'A est plus homogène : écart-type plus faible = données plus regroupées autour de la moyenne.' },
      { q: 'Pour la série $\\{2;4;4;6\}$, la moyenne est $4$. La variance est :', options: ['$2$', '$4$', '$2{,}5$', '$1$'], answer: 0, correction: '$V=\\frac{(2-4)^2+(4-4)^2+(4-4)^2+(6-4)^2}{4}=\\frac{4+0+0+4}{4}=2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), d = rand(1, 3);
        const vals = [a-d, a, a, a+d];
        const mean = a;
        const variance = ((d*d)+(0)+(0)+(d*d))/4;
        return {
          statement: `Calculer la variance de la série $\\{${vals.join(';')}\\}$ (moyenne $= ${mean}$).`,
          answer: variance,
          tolerance: 0.01,
          unit: '',
          hint: `$V = \\frac{1}{4}\\sum(x_i - ${mean})^2$`,
          solution: [
            `Écarts au carré : $(${vals[0]}-${mean})^2=${d*d}$, $(${vals[1]}-${mean})^2=0$, $(${vals[2]}-${mean})^2=0$, $(${vals[3]}-${mean})^2=${d*d}$`,
            `$V = \\frac{${d*d}+0+0+${d*d}}{4} = ${variance}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Les notes de deux élèves sur $5$ contrôles : Alice $\\{12;14;13;15;11\\}$, Baptiste $\\{8;18;10;20;9\\}$.',
      tasks: [
        'Calculer la moyenne de chaque élève.',
        'Calculer la variance et l\'écart-type de chaque série.',
        'Quel élève est le plus régulier ? Justifier.'
      ],
      solutions: [
        '$\\bar{A}=\\frac{65}{5}=13$ ; $\\bar{B}=\\frac{65}{5}=13$.',
        '$V_A=\\frac{1+1+0+4+4}{5}=2$, $\\sigma_A=\\sqrt{2}\\approx 1{,}41$. $V_B=\\frac{25+25+9+49+16}{5}=24{,}8$, $\\sigma_B\\approx 4{,}98$.',
        'Alice est plus régulière : $\\sigma_A\\approx 1{,}41 \\ll \\sigma_B\\approx 4{,}98$.'
      ],
      finalAnswer: 'Mêmes moyennes ($13$), mais Alice est nettement plus régulière ($\\sigma\\approx 1{,}41$ vs $4{,}98$).'
    },

    evaluation: {
      title: 'Évaluation — Statistiques descriptives',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la moyenne de la série $\\{3 ; 7 ; 8 ; 10 ; 12\\}$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{3 + 7 + 8 + 10 + 12}{5} = \\dfrac{40}{5} = 8$.'
        },
        {
          statement: 'La série $\\{4 ; 6 ; 6 ; 8\\}$ a pour moyenne $6$. Calculer sa variance.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$V = \\dfrac{(4-6)^2 + (6-6)^2 + (6-6)^2 + (8-6)^2}{4} = \\dfrac{4 + 0 + 0 + 4}{4} = 2$.'
        },
        {
          statement: 'Si la variance d\'une série est $V = 16$, quel est son écart-type $\\sigma$ ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\sigma = \\sqrt{V} = \\sqrt{16} = 4$.'
        },
        {
          statement: 'Deux séries ont la même moyenne. La série A a un écart-type de $2$ et la série B un écart-type de $8$. Quelle affirmation est correcte ?',
          type: 'multiple-choice',
          options: ['B est plus homogène que A', 'A est plus homogène que B', 'Les deux séries sont également dispersées', 'On ne peut pas comparer sans connaître les effectifs'],
          answer: 1,
          points: 1,
          correction: 'Un écart-type plus faible signifie des données plus regroupées autour de la moyenne. $\\sigma_A = 2 < \\sigma_B = 8$, donc A est plus homogène.'
        },
        {
          statement: 'Pourquoi utilise-t-on les carrés des écarts plutôt que les écarts simples pour calculer la variance ?',
          type: 'multiple-choice',
          options: ['Car la somme des écarts simples $\\sum(x_i - \\bar{x})$ est toujours nulle', 'Car les carrés sont plus faciles à calculer', 'Car la variance doit toujours être un entier', 'Par convention uniquement'],
          answer: 0,
          points: 2,
          correction: 'La somme des écarts à la moyenne $\\sum(x_i - \\bar{x})$ est toujours nulle par définition de la moyenne. Élever au carré évite cette annulation et pénalise davantage les grandes déviations.'
        }
      ]
    }
  },

    {
    id: '2nde-probabilites',
    level: 2, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités',
    subtitle: 'Modèle, loi, événements',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Équiprobabilité', 'Complémentaire'],
    physics: false,
    cours: {
      intro: 'Une expérience aléatoire est une expérience dont le résultat ne peut pas être prédit à l\'avance — contrairement à une expérience déterministe. L\'univers $\\Omega$ est l\'ensemble de toutes les issues possibles. La probabilité $P(A)$ est un réel de $[0;1]$ qui mesure la fréquence relative de l\'événement $A$ sur un grand nombre de répétitions. En cas d\'équiprobabilité (toutes les issues ont la même probabilité), $P(A) = |A| / |\\Omega|$. L\'équiprobabilité n\'est pas automatique : un dé truqué ou une urne déséquilibrée ne la vérifient pas. Les lancers successifs sont des épreuves indépendantes : la pièce n\'a pas de mémoire, et les résultats passés n\'influencent pas les futurs.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont le résultat ne peut pas être prédit à l\'avance (ex. : lancer un dé, tirer une carte).' },
        { term: 'Univers $\\Omega$', def: 'Ensemble de toutes les issues possibles d\'une expérience aléatoire. Ex. : dé à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de $\\Omega$. Ex. : « obtenir un nombre pair » $= \\{2;4;6\\}$.' },
        { term: 'Événement contraire', def: '$\\bar{A}$ contient toutes les issues de $\\Omega$ qui ne sont pas dans $A$. On a $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Calculer une probabilité',
        steps: [
          'Définir l\'univers $\\Omega$ et vérifier si les issues sont équiprobables. <strong>Exemple :</strong> Dé équilibré à $6$ faces → $\\Omega = \\{1;2;3;4;5;6\\}$, équiprobabilité.',
          'Compter le nombre d\'issues favorables à $A$. <strong>Exemple :</strong> $A$ = « obtenir un multiple de $3$ » → $A = \\{3;6\\}$, soit $2$ issues.',
          'Appliquer $P(A) = \\frac{\\text{nombre d\'issues favorables}}{\\text{nombre total d\'issues}}$ si équiprobabilité. <strong>Exemple :</strong> $P(A) = \\frac{2}{6} = \\frac{1}{3}$.',
          'Utiliser $P(\\bar{A}) = 1 - P(A)$ pour l\'événement contraire. <strong>Exemple :</strong> $P(\\bar{A}) = 1 - \\frac{1}{3} = \\frac{2}{3}$ (ne pas obtenir un multiple de $3$).'
        ]
      },
      example: {
        statement: 'Dans une classe de $30$ élèves, $12$ pratiquent le basketball ($B$), $10$ font de la natation ($N$), et $4$ font les deux. On choisit un élève au hasard. Calculer $P(B \\cup N)$.',
        steps: [
          'On identifie : $P(B) = \\frac{12}{30}$, $P(N) = \\frac{10}{30}$, $P(B \\cap N) = \\frac{4}{30}$.',
          'Formule d\'addition : $P(B \\cup N) = P(B) + P(N) - P(B \\cap N) = \\frac{12}{30} + \\frac{10}{30} - \\frac{4}{30} = \\frac{18}{30} = 0{,}6$.',
          'Vérification : $18$ élèves font au moins un des deux sports (parmi $30$).'
        ],
        answer: '$P(B \\cup N) = 0{,}6$ : la probabilité qu\'un élève pratique au moins l\'un des deux sports est $60\\%$.'
      },
      formulas: [
        '$P(A) = \\dfrac{|A|}{|\\Omega|}$ (cas équiprobable)',
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        '$0 \\le P(A) \\le 1$'
      ],
      recap: [
        'Probabilité = nombre entre $0$ et $1$ ; la somme des probabilités de tous les événements vaut $1$.',
        'En cas d\'équiprobabilité : $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$, souvent plus rapide que de compter directement.',
        'Formule d\'addition : toujours soustraire $P(A \\cap B)$ pour éviter de compter deux fois l\'intersection.'
      ],
      piege: 'Ne pas confondre $P(A\\cup B)$ et $P(A)+P(B)$ : la formule d\'addition doit soustraire $P(A\\cap B)$ pour ne pas compter deux fois l\'intersection.'
    },
    quiz: [
      { q: 'On lance une pièce équilibrée $10$ fois et on obtient $10$ fois « pile ». Quelle est la probabilité d\'obtenir « face » au $11^e$ lancer ?', options: ['$\\frac{1}{2}$ — chaque lancer est indépendant du passé', 'Plus grande que $\\frac{1}{2}$ — la « face » est en retard', 'Plus petite que $\\frac{1}{2}$ — la pièce semble biaisée', '$\\frac{1}{11}$ — il y a déjà eu $10$ piles'], answer: 0, correction: 'Les lancers sont des épreuves indépendantes : la pièce n\'a pas de mémoire. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer, quel que soit le passé. Croire que la « face est en retard » est le sophisme du joueur (gambler\'s fallacy).' },
      { q: 'Si $P(A)=0{,}3$, alors $P(\\bar{A})=$ ?', options: ['$0{,}3$', '$0{,}7$', '$1{,}3$', '$-0{,}3$'], answer: 1, correction: '$P(\\bar{A})=1-0{,}3=0{,}7$.' },
      { q: 'Si $A$ et $B$ sont incompatibles, $P(A)=0{,}2$, $P(B)=0{,}5$. Alors $P(A\\cup B)=$ ?', options: ['$0{,}1$', '$0{,}3$', '$0{,}7$', '$1{,}0$'], answer: 2, correction: 'Incompatibles : $P(A\\cap B)=0$. Donc $P(A\\cup B)=0{,}2+0{,}5=0{,}7$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const total = pick([4, 5, 6, 8, 10]);
        const fav = rand(1, total - 1);
        return {
          statement: `Une urne contient ${total} boules numérotées de 1 à ${total}. On tire une boule au hasard. Calculer $P$(numéro $\\le$ ${fav}) en fraction décimale.`,
          answer: parseFloat((fav / total).toFixed(4)),
          tolerance: 0.01,
          unit: '',
          hint: `${fav} issues sur ${total} sont favorables.`,
          solution: [`$P = \\frac{${fav}}{${total}} \\approx ${(fav/total).toFixed(4)}$`]
        };
      }
    },
    probleme: {
      context: 'Un lycée a $200$ élèves : $80$ pratiquent le sport, $60$ jouent d\'un instrument, $30$ font les deux.',
      tasks: [
        'Calculer la probabilité qu\'un élève choisi au hasard pratique le sport.',
        'Calculer $P(S\\cup M)$ où $S$ = sport et $M$ = musique.',
        'Calculer la probabilité de ne pratiquer ni l\'un ni l\'autre.'
      ],
      solutions: [
        '$P(S)=\\frac{80}{200}=0{,}4$.',
        '$P(S\\cup M)=\\frac{80+60-30}{200}=\\frac{110}{200}=0{,}55$.',
        '$P(\\overline{S\\cup M})=1-0{,}55=0{,}45$.'
      ],
      finalAnswer: '$P(S\\cup M)=0{,}55$ ; probabilité de ne faire ni l\'un ni l\'autre : $0{,}45$.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Calculer la probabilité d\'obtenir un nombre pair. Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Les issues paires sont $\\{2 ; 4 ; 6\\}$, soit $3$ issues sur $6$. $P = \\dfrac{3}{6} = 0{,}5$.'
        },
        {
          statement: 'Si $P(A) = 0{,}35$, combien vaut $P(\\bar{A})$ ?',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$.'
        },
        {
          statement: 'On lance une pièce équilibrée $20$ fois et on obtient $20$ fois « pile ». La probabilité d\'obtenir « face » au $21^e$ lancer est :',
          type: 'multiple-choice',
          options: ['Supérieure à $\\frac{1}{2}$ car « face » est en retard', '$\\frac{1}{2}$ car les lancers sont indépendants', 'Inférieure à $\\frac{1}{2}$ car la pièce semble biaisée', '$\\frac{1}{21}$'],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est une épreuve indépendante : le résultat passé n\'influence pas le suivant. $P(\\text{face}) = \\frac{1}{2}$ à chaque lancer. Croire que « face est en retard » est le sophisme du joueur.'
        },
        {
          statement: 'Dans une classe de $30$ élèves, $18$ pratiquent un sport et $12$ jouent d\'un instrument. $6$ font les deux. Calculer $P(S \\cup M)$ (sport ou musique). Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(S \\cup M) = P(S) + P(M) - P(S \\cap M) = \\dfrac{18}{30} + \\dfrac{12}{30} - \\dfrac{6}{30} = \\dfrac{24}{30} = 0{,}8$.'
        },
        {
          statement: 'Deux événements $A$ et $B$ sont incompatibles. Cela signifie que :',
          type: 'multiple-choice',
          options: ['$P(A \\cap B) = 1$', '$P(A \\cup B) = 0$', '$P(A \\cap B) = 0$', '$P(A) + P(B) = 1$'],
          answer: 2,
          points: 2,
          correction: 'Deux événements sont incompatibles (ou mutuellement exclusifs) s\'ils ne peuvent pas se produire en même temps : $A \\cap B = \\varnothing$, donc $P(A \\cap B) = 0$. Dans ce cas, $P(A \\cup B) = P(A) + P(B)$.'
        }
      ]
    }
  },

    {
    id: '2nde-echantillonnage',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Échantillonnage et estimation',
    subtitle: 'Fréquences, fluctuation, intervalle de confiance',
    keywords: ['Échantillon', 'Fréquence', 'Fluctuation', 'Intervalle de confiance'],
    physics: false,
    cours: {
      intro: 'L\'échantillonnage permet d\'inférer des propriétés d\'une grande population à partir d\'un sous-groupe représentatif. La fréquence observée dans un échantillon de taille $n$ fluctue aléatoirement autour de la vraie proportion $p$ — cette variabilité diminue quand $n$ augmente. L\'intervalle de confiance à $95\\%$ fournit une plage dans laquelle se trouve la vraie proportion dans $95\\%$ des cas si on répétait l\'expérience. La marge d\'erreur $e = 1/\\sqrt{n}$ montre que passer de $100$ à $400$ personnes divise l\'erreur par $2$ (pas par $4$) : améliorer la précision coûte cher en taille d\'échantillon. Cette formule est une approximation valable pour $n \\geq 30$.',
      definitions: [
        { term: 'Échantillon', def: 'Sous-groupe de taille $n$ tiré au hasard dans une population. Il doit être représentatif pour que les résultats soient fiables.' },
        { term: 'Fréquence observée', def: '$f = \\dfrac{\\text{effectif du caractère}}{n}$ : proportion mesurée dans l\'échantillon. Elle fluctue d\'un échantillon à l\'autre.' },
        { term: 'Intervalle de confiance', def: 'Plage $[f - e ; f + e]$ qui contient la vraie proportion $p$ avec un niveau de confiance donné (ici $95\\%$).' },
        { term: 'Marge d\'erreur', def: '$e = \\dfrac{1}{\\sqrt{n}}$ (approximation au niveau $95\\%$). Plus $n$ est grand, plus $e$ est petit.' }
      ],
      method: {
        title: 'Construire un intervalle de confiance (niveau 95%)',
        steps: [
          'Calculer la fréquence observée $f = \\frac{\\text{effectif}}{n}$ dans l\'échantillon de taille $n$. <strong>Exemple :</strong> $120$ personnes sur $400$ sont favorables → $f = \\frac{120}{400} = 0{,}3$.',
          'Calculer la marge d\'erreur $e = \\frac{1}{\\sqrt{n}}$. <strong>Exemple :</strong> $e = \\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$.',
          'L\'intervalle de confiance est $\\left[f - \\frac{1}{\\sqrt{n}} ; f + \\frac{1}{\\sqrt{n}}\\right]$. <strong>Exemple :</strong> $[0{,}3 - 0{,}05 ; 0{,}3 + 0{,}05] = [0{,}25 ; 0{,}35]$.',
          'Interpréter : on est sûr à 95% que la vraie proportion $p$ est dans cet intervalle. <strong>Exemple :</strong> La vraie proportion de personnes favorables est entre $25\\%$ et $35\\%$ avec $95\\%$ de confiance.'
        ]
      },
      example: {
        statement: 'Un sondage interroge $n = 900$ personnes. $540$ sont satisfaites d\'un produit. Construire l\'intervalle de confiance à $95\\%$ pour la proportion de satisfaits.',
        steps: [
          'Fréquence observée : $f = \\dfrac{540}{900} = 0{,}6$.',
          'Marge d\'erreur : $e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$.',
          'Intervalle de confiance : $[0{,}6 - 0{,}033 ; 0{,}6 + 0{,}033] = [0{,}567 ; 0{,}633]$.'
        ],
        answer: 'On peut affirmer, avec $95\\%$ de confiance, que la vraie proportion de satisfaits est comprise entre $56{,}7\\%$ et $63{,}3\\%$.'
      },
      formulas: [
        '$I_{conf} = \\left[f - \\dfrac{1}{\\sqrt{n}} ; f + \\dfrac{1}{\\sqrt{n}}\\right]$',
        'Marge d\'erreur $e = \\dfrac{1}{\\sqrt{n}}$'
      ],
      recap: [
        'La fréquence observée $f$ fluctue autour de la vraie proportion $p$ : c\'est la fluctuation d\'échantillonnage.',
        'La marge d\'erreur $e = 1/\\sqrt{n}$ diminue quand $n$ augmente, mais lentement (il faut multiplier $n$ par $4$ pour diviser $e$ par $2$).',
        'L\'intervalle de confiance ne garantit pas à $100\\%$ que $p$ est dedans : il y a $5\\%$ de risque d\'erreur.',
        'La formule $1/\\sqrt{n}$ est une approximation valable pour $n \\geq 30$.'
      ],
      piege: 'L\'intervalle de confiance ne garantit pas à 100% que $p$ est dedans, seulement à 95%. De plus, la formule $\\frac{1}{\\sqrt{n}}$ est une approximation valable pour $n\\ge 30$.'
    },
    quiz: [
      { q: 'Pour réduire la marge d\'erreur de $10\\%$ à $5\\%$, par combien faut-il multiplier la taille de l\'échantillon ?', options: ['$4$', '$2$', '$10$', '$\\sqrt{2}$'], answer: 0, correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $2$ exige que $\\sqrt{n}$ soit multiplié par $2$, donc $n$ multiplié par $4$. Exemple : $e=0{,}1 \\Rightarrow n=100$ ; $e=0{,}05 \\Rightarrow n=400$. Améliorer la précision d\'un facteur $2$ coûte $4$ fois plus de participants.' },
      { q: 'Doubler la taille de l\'échantillon réduit la marge d\'erreur d\'un facteur :', options: ['$2$', '$\\sqrt{2}$', '$4$', '$\\sqrt{2}/2$'], answer: 1, correction: '$e=1/\\sqrt{n}$. Si $n\\to 2n$ : $e\'=1/\\sqrt{2n}=e/\\sqrt{2}$. Réduction d\'un facteur $\\sqrt{2}\\approx 1{,}41$.' },
      { q: 'Un sondage sur $400$ personnes donne $f=0{,}6$. L\'intervalle de confiance à 95% est :', options: ['$[0{,}55;0{,}65]$', '$[0{,}59;0{,}61]$', '$[0{,}5;0{,}7]$', '$[0{,}56;0{,}64]$'], answer: 0, correction: '$e=1/\\sqrt{400}=0{,}05$. IC $=[0{,}6-0{,}05;0{,}6+0{,}05]=[0{,}55;0{,}65]$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const squares = [100, 225, 400, 625, 900];
        const n = pick(squares);
        const e = parseFloat((1/Math.sqrt(n)).toFixed(4));
        return {
          statement: `Calculer la marge d'erreur pour un échantillon de taille $n=${n}$.`,
          answer: e,
          tolerance: 0.005,
          unit: '',
          hint: `$e = 1/\\sqrt{n} = 1/\\sqrt{${n}}$.`,
          solution: [`$e=\\frac{1}{\\sqrt{${n}}}=\\frac{1}{${Math.sqrt(n)}}=${e}$`]
        };
      }
    },
    probleme: {
      context: 'Une usine produit des pièces. On vérifie un échantillon de $n=625$ pièces et on trouve $25$ pièces défectueuses.',
      tasks: [
        'Calculer la fréquence de pièces défectueuses dans l\'échantillon.',
        'Construire l\'intervalle de confiance à 95%.',
        'Peut-on affirmer que le taux de défauts est inférieur à 5% dans la production ?'
      ],
      solutions: [
        '$f=\\frac{25}{625}=0{,}04$.',
        '$e=\\frac{1}{\\sqrt{625}}=0{,}04$. IC $=[0;0{,}08]$.',
        'Non : l\'IC inclut des valeurs jusqu\'à $8\\%$, on ne peut pas garantir que $p < 5\\%$.'
      ],
      finalAnswer: '$f=4\\%$ ; IC $=[0\\%;8\\%]$ : le taux de défauts n\'est pas garanti inférieur à $5\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Échantillonnage et estimation',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer la marge d\'erreur $e$ pour un échantillon de taille $n = 400$.',
          type: 'numeric',
          answer: 0.05,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$e = \\dfrac{1}{\\sqrt{n}} = \\dfrac{1}{\\sqrt{400}} = \\dfrac{1}{20} = 0{,}05$.'
        },
        {
          statement: 'Un sondage sur $n = 900$ personnes donne une fréquence $f = 0{,}4$. Donner la borne supérieure de l\'intervalle de confiance à $95\\%$. (Arrondir à $0{,}01$.)',
          type: 'numeric',
          answer: 0.43,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$. Borne supérieure $= f + e = 0{,}4 + 0{,}033 \\approx 0{,}43$.'
        },
        {
          statement: 'Pour réduire la marge d\'erreur d\'un facteur $3$, par combien faut-il multiplier la taille de l\'échantillon ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $3$ exige $\\sqrt{n}$ multiplié par $3$, donc $n$ multiplié par $3^2 = 9$.'
        },
        {
          statement: 'Doubler la taille de l\'échantillon divise la marge d\'erreur par :',
          type: 'multiple-choice',
          options: ['$2$', '$4$', '$\\sqrt{2} \\approx 1{,}41$', '$\\sqrt{3}$'],
          answer: 2,
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Si $n$ est remplacé par $2n$ : $e\' = 1/\\sqrt{2n} = e/\\sqrt{2}$. La marge est divisée par $\\sqrt{2} \\approx 1{,}41$.'
        },
        {
          statement: 'L\'intervalle de confiance à $95\\%$ garantit-il à $100\\%$ que la vraie proportion est à l\'intérieur ?',
          type: 'multiple-choice',
          options: ['Oui, c\'est une certitude mathématique', 'Non, il y a $5\\%$ de risque que $p$ soit hors de l\'intervalle', 'Oui, si $n \\geq 30$', 'Non, seulement si l\'échantillon est biaisé'],
          answer: 1,
          points: 2,
          correction: 'L\'intervalle de confiance à $95\\%$ signifie que, si l\'on répétait l\'expérience un grand nombre de fois, $95\\%$ des intervalles construits contiendraient la vraie proportion $p$. Il y a donc $5\\%$ de risque que $p$ soit en dehors.'
        }
      ]
    }
  },

    {
    id: '2nde-algorithmique',
    level: 2, subject: 'maths',
    icon: '💻',
    title: 'Algorithmique et programmation (Python)',
    subtitle: 'Variables, boucles, conditions en Python',
    keywords: ['Python', 'Boucle', 'Condition', 'Variable', 'Algorithme'],
    physics: false,
    cours: {
      intro: 'Un algorithme est une suite finie d\'instructions non ambiguës permettant de résoudre un problème. En seconde, Python est le langage de référence : sa syntaxe minimaliste force une structuration claire. La boucle $\\texttt{for i in range(n)}$ parcourt les entiers de $0$ à $n-1$ (la borne supérieure est exclue) ; $\\texttt{while condition}$ répète tant que la condition est vraie. L\'indentation (espaces obligatoires en début de bloc) est syntaxiquement obligatoire en Python — une indentation incorrecte cause une erreur ou change silencieusement le sens du programme. Déboguer consiste à suivre l\'exécution pas à pas avec des valeurs test pour identifier où le comportement diverge de l\'attendu.',
      definitions: [
        { term: 'Algorithme', def: 'Suite finie d\'instructions non ambiguës qui, à partir de données d\'entrée, produit un résultat en un nombre fini d\'étapes.' },
        { term: 'Variable', def: 'Espace mémoire nommé qui stocke une valeur. En Python : $\\texttt{x = 5}$ crée la variable $x$ avec la valeur $5$.' },
        { term: 'Boucle $\\texttt{for}$', def: 'Répète un bloc un nombre fixé de fois. $\\texttt{for i in range(n)}$ exécute le bloc $n$ fois avec $i = 0, 1, \\ldots, n-1$.' },
        { term: 'Boucle $\\texttt{while}$', def: 'Répète un bloc tant qu\'une condition est vraie. Risque de boucle infinie si la condition ne devient jamais fausse.' }
      ],
      method: {
        title: 'Écrire un algorithme en Python',
        steps: [
          'Déclarer les variables et leurs valeurs initiales. <strong>Exemple :</strong> $\\texttt{s = 0}$ (accumulateur initialisé à zéro pour une somme).',
          'Utiliser $\\texttt{for i in range(n)}$ pour répéter $n$ fois. <strong>Exemple :</strong> $\\texttt{for i in range(1, 6):}$ fait varier $i$ de $1$ à $5$ inclus.',
          'Utiliser $\\texttt{while condition}$ pour répéter tant qu\'une condition est vraie. <strong>Exemple :</strong> $\\texttt{while n > 1: n = n // 2}$ divise $n$ par $2$ jusqu\'à ce qu\'il atteigne $1$.',
          'Tester avec des exemples pour vérifier la correction de l\'algorithme. <strong>Exemple :</strong> Pour un programme de somme $1+\\ldots+5$, vérifier que le résultat est bien $15$.'
        ]
      },
      example: {
        statement: 'Écrire un algorithme Python qui calcule la factorielle de $n$ (c\'est-à-dire $n! = 1 \\times 2 \\times \\ldots \\times n$). Tester pour $n = 5$.',
        steps: [
          'Initialiser le résultat : $\\texttt{resultat = 1}$.',
          'Boucle : $\\texttt{for i in range(1, n+1):}$ puis $\\texttt{resultat = resultat * i}$.',
          'Exécution pour $n = 5$ : $i = 1$ → $1$, $i = 2$ → $2$, $i = 3$ → $6$, $i = 4$ → $24$, $i = 5$ → $120$.'
        ],
        answer: '$5! = 120$. Le programme affiche $\\texttt{120}$.'
      },
      formulas: [
        '$\\texttt{for i in range(a, b)}$ : $i$ prend les valeurs $a, a+1, \\ldots, b-1$',
        '$\\texttt{range(n)}$ est équivalent à $\\texttt{range(0, n)}$',
        'Indentation obligatoire en Python (4 espaces ou 1 tabulation)'
      ],
      recap: [
        '$\\texttt{range(a, b)}$ produit les entiers de $a$ à $b-1$ : la borne supérieure est toujours exclue.',
        'La boucle $\\texttt{for}$ est utilisée quand le nombre de répétitions est connu à l\'avance ; $\\texttt{while}$ sinon.',
        'L\'indentation est obligatoire en Python : elle délimite les blocs de code (pas d\'accolades).',
        'Pour déboguer, exécuter le code à la main pas à pas avec des valeurs test.'
      ],
      piege: 'En Python, $\\texttt{range(1,6)}$ produit $1,2,3,4,5$ (pas $6$). La borne supérieure est exclue !'
    },
    quiz: [
      { q: 'Que calcule ce code ?\n$\\texttt{s=0}$\n$\\texttt{for i in range(1,5):}$\n$\\quad\\texttt{s=s+i}$', options: ['$s=10$', '$s=15$', '$s=4$', '$s=6$'], answer: 0, correction: '$i$ prend les valeurs $1,2,3,4$. $s=1+2+3+4=10$.' },
      { q: 'Un élève veut calculer $1+2+\\cdots+10$. Il écrit $\\texttt{s=0}$ puis $\\texttt{for i in range(10): s=s+i}$. Pourquoi son résultat sera-t-il incorrect ?', options: ['$\\texttt{range(10)}$ produit $0,1,\\ldots,9$ (le $10$ est exclu). Il faut $\\texttt{range(1,11)}$ pour inclure $10$', 'Il faut initialiser $\\texttt{s=1}$ et non $\\texttt{s=0}$', 'La boucle ne peut pas calculer une somme', 'Il n\'y a pas d\'erreur, le résultat est correct'], answer: 0, correction: '$\\texttt{range(10)}$ produit $0,1,2,\\ldots,9$ — la borne supérieure $10$ est exclue. La somme calculée est $0+1+\\ldots+9=45$ au lieu de $1+\\ldots+10=55$. Pour inclure $10$, il faut $\\texttt{range(1,11)}$.' },
      { q: '$\\texttt{range(3,8)}$ produit :', options: ['$3,4,5,6,7,8$', '$3,4,5,6,7$', '$3,4,5,6$', '$0,1,2,3,4$'], answer: 1, correction: 'La borne supérieure $8$ est exclue : $3,4,5,6,7$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(3, 8);
        const ans = n * (n + 1) / 2;
        return {
          statement: `Le code suivant calcule la somme $S = 1+2+\\cdots+${n}$ :\n$\\texttt{s=0}$\n$\\texttt{for i in range(1,${n+1}):}$\n$\\quad\\texttt{s=s+i}$\nQuelle est la valeur finale de $s$ ?`,
          answer: ans,
          tolerance: 0,
          unit: '',
          hint: `La somme des entiers de $1$ à $n$ est $n(n+1)/2 = ${n}\\times${n+1}/2$.`,
          solution: [`$s = 1+2+\\cdots+${n} = \\frac{${n}\\times${n+1}}{2} = ${ans}$`]
        };
      }
    },
    probleme: {
      context: 'On veut écrire un programme Python qui calcule la moyenne de $5$ notes saisies par l\'utilisateur.',
      tasks: [
        'Écrire le pseudo-code de l\'algorithme.',
        'Traduire en Python (utiliser $\\texttt{input()}$ et $\\texttt{float()}$).',
        'Que doit-on modifier pour gérer $n$ notes (avec $n$ saisi par l\'utilisateur) ?'
      ],
      solutions: [
        'Pseudo-code : initialiser $S=0$, répéter 5 fois (saisir note, $S \\leftarrow S+$note), afficher $S/5$.',
        '$\\texttt{s=0}$\n$\\texttt{for i in range(5):}$\n$\\quad\\texttt{n=float(input("Note : "))}$\n$\\quad\\texttt{s+=n}$\n$\\texttt{print(s/5)}$',
        'Remplacer $5$ par $n$ (saisi via $\\texttt{n=int(input())}$ avant la boucle) et diviser par $n$.'
      ],
      finalAnswer: 'Utiliser une boucle $\\texttt{for i in range(n)}$ avec $n$ paramétrable.'
    },

    evaluation: {
      title: 'Évaluation — Algorithmique et programmation (Python)',
      duration: '25 min',
      questions: [
        {
          statement: 'Que produit $\\texttt{range(2, 7)}$ en Python ?',
          type: 'multiple-choice',
          options: ['$2, 3, 4, 5, 6, 7$', '$2, 3, 4, 5, 6$', '$0, 1, 2, 3, 4, 5, 6$', '$2, 4, 6$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(2, 7)}$ produit les entiers de $2$ à $6$ inclus. La borne supérieure $7$ est toujours exclue en Python.'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{s = 0}$\n$\\texttt{for i in range(1, 6):}$\n$\\quad\\texttt{s = s + i}$\nQuelle est la valeur finale de $s$ ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$i$ prend les valeurs $1, 2, 3, 4, 5$. La somme $s = 1 + 2 + 3 + 4 + 5 = 15$.'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{x = 3}$\n$\\texttt{for i in range(4):}$\n$\\quad\\texttt{x = x * 2}$\nQuelle est la valeur finale de $x$ ?',
          type: 'numeric',
          answer: 48,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La boucle s\'exécute $4$ fois ($i = 0, 1, 2, 3$). À chaque passage, $x$ est doublé : $3 \\to 6 \\to 12 \\to 24 \\to 48$.'
        },
        {
          statement: 'Un élève écrit $\\texttt{for i in range(5)}$ pour répéter une action $5$ fois. Quelles valeurs prend $i$ ?',
          type: 'multiple-choice',
          options: ['$1, 2, 3, 4, 5$', '$0, 1, 2, 3, 4$', '$0, 1, 2, 3, 4, 5$', '$1, 2, 3, 4$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(5)}$ est équivalent à $\\texttt{range(0, 5)}$ et produit $0, 1, 2, 3, 4$ (cinq valeurs, la borne supérieure $5$ est exclue).'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{n = 10}$\n$\\texttt{compteur = 0}$\n$\\texttt{while n > 1:}$\n$\\quad\\texttt{n = n // 2}$\n$\\quad\\texttt{compteur = compteur + 1}$\nQuelle est la valeur finale de $\\texttt{compteur}$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Division entière successive : $n = 10 \\to 5$ (compteur $= 1$), $5 \\to 2$ (compteur $= 2$), $2 \\to 1$ (compteur $= 3$). Ensuite $n = 1$, la condition $n > 1$ est fausse et la boucle s\'arrête. $\\texttt{compteur} = 3$.'
        }
      ]
    }
  }

);
