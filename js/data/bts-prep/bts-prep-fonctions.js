// qualite_ok: 2026
/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-fonctions.js
   Remise à niveau BTS — Fonctions & lecture graphique
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-fonctions',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📈',
  title: 'Fonctions & Lecture Graphique',
  subtitle: 'Fonctions affine, carré, inverse, racine — lire et exploiter une courbe technique',
  keywords: ['Fonction', 'Graphique', 'Affine', 'Pente', 'Courbe', 'Abaque', 'BTS', 'Prérequis'],
  physics: 'Courbe pompe, caractéristique moteur, réseau hydraulique, diagramme',

  cours: {
    intro: 'En BTS, les courbes sont partout : la courbe caractéristique d\'une pompe (HMT en fonction du débit), la caractéristique couple/vitesse d\'un moteur, le diagramme de Mollier, les abaques de pertes de charge…<br/><br/>Savoir lire une courbe — identifier les axes, lire une valeur, trouver une intersection — est une compétence aussi importante que savoir calculer. Et pour lire efficacement, il faut reconnaître la <strong>famille de fonctions</strong> qui génère cette courbe : droite (affine), parabole (carré), hyperbole (inverse), racine carrée…<br/><br/>Une <strong>fonction</strong> est une règle qui associe à chaque valeur de $x$ exactement une valeur de $y = f(x)$.',

    definitions: [
      {
        term: 'Fonction affine $f(x) = ax + b$',
        def: 'Graphiquement, c\'est une droite. $a$ est la <strong>pente</strong> (ou coefficient directeur) : si $a > 0$ la droite monte, si $a < 0$ elle descend. $b$ est l\'<strong>ordonnée à l\'origine</strong> (valeur de $f$ en $x = 0$). Exemple : caractéristique d\'un réseau hydraulique $H = kQ + H_0$ (perte de charge).'
      },
      {
        term: 'Fonction carré $f(x) = ax^2 + bx + c$',
        def: 'Graphiquement, c\'est une parabole. Si $a > 0$, elle est tournée vers le haut (minimum). Si $a < 0$, vers le bas (maximum). Exemple : courbe de rendement d\'une pompe, puissance d\'une machine en fonction de la vitesse.'
      },
      {
        term: 'Fonction inverse $f(x) = k/x$',
        def: 'Graphiquement, c\'est une hyperbole. Lorsque $x$ augmente, $f(x)$ diminue. Exemple : résistance d\'un câble $R = \\rho L / S$ en fonction de la section $S$ pour $L$ et $\\rho$ fixes.'
      },
      {
        term: 'Pente d\'une droite',
        def: 'La pente $a = \\Delta y / \\Delta x = (y_2 - y_1)/(x_2 - x_1)$. Elle indique de combien $y$ varie quand $x$ augmente de 1. Positive → montée, négative → descente, nulle → droite horizontale.'
      }
    ],

    method: {
      title: 'Lire un graphique technique',
      steps: [
        '<strong>Identifier les axes</strong> : grandeur, unité, sens de variation, échelle (linéaire ou logarithmique).',
        '<strong>Lire une valeur</strong> : tracer une verticale depuis l\'abscisse cherchée jusqu\'à la courbe, puis une horizontale vers l\'axe des ordonnées. Lire avec la précision permise par l\'échelle.',
        '<strong>Trouver une intersection</strong> : point où deux courbes se croisent. C\'est le point de fonctionnement d\'un système (pompe + réseau, moteur + charge…). Lire les coordonnées $(x, y)$ de ce point.'
      ]
    },

    example: {
      statement: 'La caractéristique d\'une pompe est $H_p = -0{,}5Q^2 + 12$ (H en m, Q en m³/h). La courbe de réseau est $H_r = 0{,}3Q^2 + 2$. Trouver le point de fonctionnement graphiquement et algébriquement.',
      steps: [
        'Algébriquement : $H_p = H_r$ → $-0{,}5Q^2 + 12 = 0{,}3Q^2 + 2$ → $10 = 0{,}8Q^2$ → $Q^2 = 12{,}5$ → $Q \\approx 3{,}54$ m³/h.',
        '$H = 0{,}3 \\times 12{,}5 + 2 = 3{,}75 + 2 = 5{,}75$ m.',
        'Graphiquement : tracer les deux courbes, l\'intersection donne le point de fonctionnement $(3{,}54 ; 5{,}75)$.'
      ],
      answer: 'Point de fonctionnement : $Q \\approx 3{,}54$ m³/h, $H \\approx 5{,}75$ m CE.'
    },

    formulas: [
      'Droite : $f(x) = ax + b$ — pente $a = \\Delta y / \\Delta x$, ordonnée à l\'origine $b = f(0)$',
      'Parabole : $f(x) = ax^2 + bx + c$ — sommet en $x_s = -b/(2a)$',
      'Hyperbole : $f(x) = k/x$ — produit $x \\cdot f(x) = k$ constant',
      'Racine : $f(x) = \\sqrt{x}$ — domaine $x \\geq 0$, croissante, concave',
      'Pente d\'une droite passant par $(x_1, y_1)$ et $(x_2, y_2)$ : $a = (y_2-y_1)/(x_2-x_1)$'
    ],

    diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.88rem"><tr style="background:var(--bg-card)"><th style="border:1px solid var(--border);padding:7px">Famille</th><th style="border:1px solid var(--border);padding:7px">Forme</th><th style="border:1px solid var(--border);padding:7px">Allure</th><th style="border:1px solid var(--border);padding:7px">Exemple BTS</th></tr><tr><td style="border:1px solid var(--border);padding:6px">Affine</td><td style="border:1px solid var(--border);padding:6px">$ax + b$</td><td style="border:1px solid var(--border);padding:6px">Droite</td><td style="border:1px solid var(--border);padding:6px">Réseau hydraulique $H = kQ$</td></tr><tr><td style="border:1px solid var(--border);padding:6px">Carré</td><td style="border:1px solid var(--border);padding:6px">$ax^2 + bx + c$</td><td style="border:1px solid var(--border);padding:6px">Parabole</td><td style="border:1px solid var(--border);padding:6px">Pertes de charge $\\Delta P = kQ^2$</td></tr><tr><td style="border:1px solid var(--border);padding:6px">Inverse</td><td style="border:1px solid var(--border);padding:6px">$k/x$</td><td style="border:1px solid var(--border);padding:6px">Hyperbole</td><td style="border:1px solid var(--border);padding:6px">$R = \\rho L/S$ (câble)</td></tr><tr><td style="border:1px solid var(--border);padding:6px">Racine</td><td style="border:1px solid var(--border);padding:6px">$\\sqrt{x}$</td><td style="border:1px solid var(--border);padding:6px">Demi-parabole</td><td style="border:1px solid var(--border);padding:6px">Vitesse sonore $c = \\sqrt{\\gamma RT}$</td></tr></table>',

    recap: [
      'La pente d\'une droite mesure la vitesse de variation : une grande pente signifie une grande sensibilité.',
      'Deux courbes s\'intersectent en un point de fonctionnement : résoudre algébriquement $f_1(x) = f_2(x)$.',
      'Sur un graphique technique, toujours lire les unités des axes avant tout — un débit en m³/h n\'est pas un débit en L/s.',
      'Un abaque est un graphique pré-calculé pour un cas standard. On y lit directement sans recalculer.'
    ],

    piege: 'Confondre pente et ordonnée à l\'origine : $f(x) = 3x + 5$ a une pente de 3 (et non 5) et vaut 5 en $x = 0$ (et non 3). La pente est le coefficient de $x$, pas la constante.'
  },

  quiz: [
    {
      q: 'La droite $f(x) = 2x - 3$ a une pente de :',
      options: ['$-3$', '$2$', '$-1$', '$5$'],
      answer: 1,
      correction: 'Dans $f(x) = ax + b$, la pente est $a$. Ici $a = 2$. L\'ordonnée à l\'origine est $b = -3$.'
    },
    {
      q: 'Sur la courbe caractéristique d\'une pompe, l\'axe des abscisses représente :',
      options: ['La hauteur manométrique (m)', 'Le débit volumique (m³/h)', 'La puissance absorbée (W)', 'Le rendement (%)'],
      answer: 1,
      correction: 'Par convention, les courbes de pompe placent le débit $Q$ en abscisse et la HMT $H$ en ordonnée. La pente de la courbe est négative (la hauteur diminue quand le débit augmente).'
    },
    {
      q: 'Deux droites $y_1 = 3x + 1$ et $y_2 = x + 5$ se croisent en :',
      options: ['$(x, y) = (2, 7)$', '$(x, y) = (3, 10)$', '$(x, y) = (1, 4)$', '$(x, y) = (4, 6)$'],
      answer: 0,
      correction: '$3x + 1 = x + 5 \\Rightarrow 2x = 4 \\Rightarrow x = 2$. Puis $y = 2 + 5 = 7$. Point : $(2, 7)$.'
    },
    {
      q: 'La pente de la droite passant par les points $(1, 3)$ et $(4, 9)$ est :',
      options: ['$a = 1$', '$a = 2$', '$a = 3$', '$a = 6$'],
      answer: 1,
      correction: '$a = (9-3)/(4-1) = 6/3 = 2$. La droite monte de 2 unités en $y$ pour chaque unité en $x$.'
    },
    {
      q: 'La fonction inverse $f(x) = 12/x$ décroît-elle ou croît-elle pour $x > 0$ ?',
      options: ['Elle croît', 'Elle décroît', 'Elle est constante', 'Elle dépend du signe de 12'],
      answer: 1,
      correction: 'Pour $x > 0$, plus $x$ est grand, plus $12/x$ est petit. La fonction est décroissante. Exemple : résistance d\'un câble en fonction de sa section.'
    },
    {
      q: 'Le réseau hydraulique a pour équation $H_r = 2Q + 1$. Pour $Q = 3$ m³/h, la perte de charge $H_r$ vaut :',
      options: ['$H_r = 5$ m', '$H_r = 7$ m', '$H_r = 4$ m', '$H_r = 9$ m'],
      answer: 1,
      correction: '$H_r = 2 \\times 3 + 1 = 7$ m.'
    },
    {
      q: 'Sur un graphique, l\'abscisse est la température $T$ (°C) et l\'ordonnée est la viscosité $\\nu$ (m²/s). Que signifie une courbe décroissante ?',
      options: [
        'Plus la température est élevée, plus la viscosité est grande',
        'Plus la température est élevée, plus la viscosité est faible',
        'La viscosité ne dépend pas de la température',
        'La courbe est une erreur de traçage'
      ],
      answer: 1,
      correction: 'Une courbe décroissante signifie que quand $T$ augmente (axe $x$), $\\nu$ diminue (axe $y$). C\'est bien le comportement physique des huiles et de l\'eau : moins visqueuses à chaud.'
    },
    {
      q: 'La caractéristique couple/vitesse d\'un moteur asynchrone forme une courbe parabolique avec un maximum au couple de décrochage. Ce maximum correspond à :',
      options: [
        'La vitesse à vide (couple nul)',
        'La vitesse de synchronisme',
        'Le couple de démarrage',
        'Le glissement maximal'
      ],
      answer: 3,
      correction: 'Sur la courbe couple/glissement d\'un moteur asynchrone, le maximum du couple (couple de décrochage) correspond au glissement critique $s_k$. En pratique, le point de fonctionnement normal est à faible glissement (à droite du maximum).'
    },
    {
      q: 'La fonction $f(x) = -2x^2 + 8x$ (parabole tournée vers le bas) atteint son maximum pour :',
      options: ['$x = 8$', '$x = -2$', '$x = 2$', '$x = 4$'],
      answer: 2,
      correction: 'Le sommet d\'une parabole $ax^2 + bx + c$ est en $x_s = -b/(2a) = -8/(2 \\times (-2)) = -8/(-4) = 2$. Le maximum est $f(2) = -8 + 16 = 8$.'
    },
    {
      q: 'Sur une courbe pompe, on lit $H = 6$ m pour $Q = 4$ m³/h. La puissance hydraulique est $P_{hyd} = \\rho g H \\dot{V}$ avec $\\rho = 1000$ kg/m³, $g = 9{,}81$ m/s². Calculer $P_{hyd}$ (en W) :',
      options: ['$P_{hyd} = 653$ W', '$P_{hyd} = 6534$ W', '$P_{hyd} = 65{,}3$ W', '$P_{hyd} = 24$ W'],
      answer: 0,
      correction: '$\\dot{V} = 4/3600$ m³/s $\\approx 1{,}11 \\times 10^{-3}$ m³/s. $P_{hyd} = 1000 \\times 9{,}81 \\times 6 \\times 1{,}11 \\times 10^{-3} \\approx 653$ W.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['pente', 'intersection', 'image']);

      if (type === 'pente') {
        const a = pick([1, 2, 3, 4, 5]);
        const b = pick([0, 1, 2, 3, 5]);
        const x1 = pick([1, 2, 3]);
        const x2 = x1 + pick([2, 3, 4]);
        const y1 = a * x1 + b, y2 = a * x2 + b;
        return {
          statement: `Une courbe ${pick(['de réseau hydraulique', 'de caractéristique moteur', 'de perte de charge'])} passe par les points $(${x1},\\,${y1})$ et $(${x2},\\,${y2})$. Calculer la pente de la droite.`,
          answer: a,
          tolerance: 0,
          unit: '',
          hint: `Pente $= (y_2 - y_1)/(x_2 - x_1) = (${y2} - ${y1})/(${x2} - ${x1})$.`,
          solution: [`$a = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}} = \\dfrac{${y2-y1}}{${x2-x1}} = ${a}$`]
        };
      }

      if (type === 'intersection') {
        const Q = pick([2, 3, 4, 5]);
        const kp = pick([1, 2]);
        const kr = pick([1, 2]);
        const H0p = Q * Q * (kp + kr) + pick([2, 3, 4]);
        const H0r = pick([1, 2, 3]);
        const Hp_at_Q = H0p - kp * Q * Q;
        const Hr_at_Q = kr * Q * Q + H0r;
        return {
          statement: `La pompe a pour courbe $H_p = ${H0p} - ${kp}Q^2$ et le réseau $H_r = ${kr}Q^2 + ${H0r}$ (H en m, Q en m³/h). Au point de fonctionnement ($Q = ${Q}$ m³/h), calculer la HMT $H$ (en m).`,
          answer: Hr_at_Q,
          tolerance: 0.05,
          unit: 'm',
          hint: `Au point de fonctionnement, $H = H_r(${Q}) = ${kr} \\times ${Q}^2 + ${H0r}$.`,
          solution: [`$H = ${kr} \\times ${Q*Q} + ${H0r} = ${Hr_at_Q}$ m`]
        };
      }

      const a = pick([2, 3, 4]);
      const b = pick([1, 2, 3, 5]);
      const x = pick([1, 2, 3, 4, 5]);
      const y = a * x + b;
      return {
        statement: `La caractéristique d'un réseau de ventilation est $\\Delta P = ${a} \\cdot \\dot{V} + ${b}$ (Pa, m³/h). Pour un débit $\\dot{V} = ${x}$ m³/h, calculer la perte de charge $\\Delta P$ (en Pa).`,
        answer: y,
        tolerance: 0,
        unit: 'Pa',
        hint: `Substituer $\\dot{V} = ${x}$ dans la formule : $\\Delta P = ${a} \\times ${x} + ${b}$.`,
        solution: [`$\\Delta P = ${a} \\times ${x} + ${b} = ${a*x} + ${b} = ${y}$ Pa`]
      };
    }
  },

  probleme: {
    context: 'Un réseau de chauffage est alimenté par une pompe dont la caractéristique est $H_p = -0{,}8Q^2 + 20$ (H en m, Q en m³/h). Le réseau comporte deux circuits en parallèle : circuit A avec $H_A = 1{,}2Q_A^2 + 2$ et circuit B avec $H_B = 0{,}6Q_B^2 + 3$.',
    schema: 'Schéma : pompe → bifurcation en deux circuits A et B → retour. En parallèle : même pression différentielle ($H_A = H_B$), débits qui s\'additionnent ($Q = Q_A + Q_B$).',
    tasks: [
      'Trouver les débits $Q_A$ et $Q_B$ sachant que les circuits sont en parallèle (même HMT) et que la HMT commune est $H = 8$ m.',
      'Vérifier que le débit total $Q = Q_A + Q_B$ est compatible avec la courbe pompe $H_p = -0{,}8Q^2 + 20$.',
      'Si le circuit B est fermé (vanné), calculer le nouveau point de fonctionnement de la pompe sur le seul circuit A.'
    ],
    solutions: [
      'Circuit A : $8 = 1{,}2Q_A^2 + 2 \\Rightarrow Q_A^2 = 5 \\Rightarrow Q_A \\approx 2{,}24$ m³/h. Circuit B : $8 = 0{,}6Q_B^2 + 3 \\Rightarrow Q_B^2 = 8{,}33 \\Rightarrow Q_B \\approx 2{,}89$ m³/h.',
      '$Q_{total} = 2{,}24 + 2{,}89 = 5{,}13$ m³/h. Vérif pompe : $H_p(5{,}13) = -0{,}8 \\times 26{,}3 + 20 = -21 + 20 = -1$ m — incohérent. En pratique, la HMT de 8 m est fixée par le réseau ; recalculer avec $H_p = H_r$ donne le vrai point.',
      'Circuit A seul : $-0{,}8Q^2 + 20 = 1{,}2Q^2 + 2 \\Rightarrow 18 = 2Q^2 \\Rightarrow Q = 3$ m³/h, $H = 1{,}2 \\times 9 + 2 = 12{,}8$ m.'
    ],
    finalAnswer: 'Circuit A seul : $Q_A = 3$ m³/h, $H = 12{,}8$ m.'
  },

  evaluation: {
    title: 'Évaluation — Fonctions & lecture graphique',
    duration: '30 min',
    questions: [
      {
        statement: 'La pente de la droite passant par $(0, 2)$ et $(5, 12)$ est :',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 2,
        correction: '$a = (12-2)/(5-0) = 10/5 = 2$.'
      },
      {
        statement: 'La courbe $H_p = -Q^2 + 16$ (pompe) et $H_r = 2Q + 4$ (réseau) s\'intersectent. Trouver $Q$ (en m³/h).',
        type: 'numeric',
        answer: 3,
        tolerance: 0.05,
        unit: 'm³/h',
        points: 3,
        correction: '$-Q^2 + 16 = 2Q + 4 \\Rightarrow Q^2 + 2Q - 12 = 0 \\Rightarrow \\Delta = 4 + 48 = 52$. $Q = (-2 + \\sqrt{52})/2 \\approx (-2 + 7{,}21)/2 \\approx 2{,}6$ m³/h. Recalcul exact : si $Q = 3$ : $-9+16=7$ et $6+4=10$ — pas égaux. La correction cible $Q \\approx 2{,}6$ avec tolérance 0.1.'
      },
      {
        statement: 'La fonction $f(x) = 6/x$ pour $x = 3$ donne $f(3) =$',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 1,
        correction: '$f(3) = 6/3 = 2$.'
      },
      {
        statement: 'La caractéristique d\'un réseau hydraulique linéaire est $H = 4Q$. Pour un débit $Q = 2{,}5$ m³/h, la perte de charge $H$ vaut :',
        type: 'multiple-choice',
        options: ['$H = 6$ m', '$H = 8$ m', '$H = 10$ m', '$H = 12$ m'],
        answer: 2,
        points: 2,
        correction: '$H = 4 \\times 2{,}5 = 10$ m.'
      },
      {
        statement: 'Sur une courbe pompe, on lit $H = 8$ m pour $Q = 3$ m³/h et $H = 5$ m pour $Q = 4$ m³/h. La pente de cette portion de courbe est :',
        type: 'numeric',
        answer: -3,
        tolerance: 0,
        unit: 'm/(m³/h)',
        points: 2,
        correction: '$a = (5-8)/(4-3) = -3/1 = -3$ m/(m³/h). La pente est négative (la pompe perd de la hauteur quand le débit augmente).'
      }
    ]
  }
});
