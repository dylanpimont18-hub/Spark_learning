/* =========================================================
   Spark Learning – data/bts/bts-stats-deux-variables.js
   Module : Statistiques à deux variables (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-stats-deux-variables',
    level: 3, subject: 'maths',
    icon: '📊',
    title: 'Statistiques à deux variables',
    subtitle: 'Nuage de points, corrélation, régression linéaire',
    keywords: ['Régression linéaire', 'Corrélation', 'Nuage de points', 'Droite des moindres carrés'],
    physics: false,
    cours: {
      intro: 'Les statistiques à deux variables permettent de modéliser et prévoir : ventes en fonction de la publicité, résistance d\'un matériau en fonction de la température, consommation en fonction de la vitesse. La droite de régression des moindres carrés minimise la somme des carrés des écarts verticaux entre les points et la droite — c\'est la droite qui "passe au mieux" à travers le nuage. Le coefficient de corrélation $r \\in [-1;1]$ mesure la force de la liaison LINÉAIRE uniquement : $r = 0$ ne signifie pas "pas de liaison" mais "pas de liaison linéaire" (il peut y avoir une relation parabolique). Piège majeur : $r \\approx \\pm 1$ prouve une forte liaison linéaire, mais JAMAIS une causalité. Deux variables peuvent être fortement corrélées via une troisième variable cachée.',
      definitions: [
        { term: 'Covariance $\\text{Cov}(x,y)$', def: 'Mesure la tendance de $x$ et $y$ à varier ensemble : $\\text{Cov}(x,y) = \\overline{xy} - \\bar{x}\\bar{y}$. Positive si les deux augmentent ensemble, négative si l\'une augmente quand l\'autre diminue.' },
        { term: 'Coefficient de corrélation $r$', def: 'Covariance normalisée : $r = \\text{Cov}(x,y)/(\\sigma_x \\cdot \\sigma_y) \\in [-1;1]$. $|r| \\approx 1$ : forte liaison linéaire. $r \\approx 0$ : pas de liaison linéaire (mais une liaison non linéaire reste possible).' },
        { term: 'Droite de régression (moindres carrés)', def: 'Droite $y = ax + b$ qui minimise la somme des carrés des écarts verticaux entre les points et la droite. Elle passe toujours par le point moyen $(\\bar{x}, \\bar{y})$.' },
        { term: 'Corrélation fallacieuse (spurious correlation)', def: 'Forte corrélation entre deux variables sans lien causal direct, expliquée par une troisième variable cachée (ex. : ventes de glaces et noyades, toutes deux corrélées à la chaleur).' }
      ],
      method: {
        title: 'Calculer la droite de régression',
        steps: [
          '<strong>Covariance et variances</strong> : Calculer les moyennes $\\bar{x}$ et $\\bar{y}$, les variances $V_x$, $V_y$ et la covariance $\\text{Cov}(x,y)$. <strong>Exemple :</strong> Points $(1;3)$, $(2;5)$, $(3;7)$ → $\\bar{x} = 2$, $\\bar{y} = 5$, $\\overline{xy} = (3+10+21)/3 = 34/3 \\approx 11{,}33$, $\\text{Cov} = 11{,}33 - 10 = 1{,}33$.',
          '<strong>Pente de la droite</strong> : Coefficient directeur : $a=\\dfrac{\\text{Cov}(x,y)}{V_x}$. <strong>Exemple :</strong> $V_x = \\overline{x^2} - \\bar{x}^2 = 14/3 - 4 = 2/3$. $a = 1{,}33/(2/3) = 2$.',
          '<strong>Ordonnée à l\'origine</strong> : Ordonnée à l\'origine : $b=\\bar{y}-a\\bar{x}$. <strong>Exemple :</strong> $b = 5 - 2 \\times 2 = 1$. Droite : $y = 2x + 1$.',
          '<strong>Coefficient de corrélation</strong> : Coefficient de corrélation : $r=\\dfrac{\\text{Cov}(x,y)}{\\sigma_x\\sigma_y}\\in[-1;1]$. <strong>Exemple :</strong> Ici $r = 1$ (alignement parfait sur la droite).'
        ]
      },
      example: {
        statement: 'Un fabricant de panneaux solaires relève la puissance produite $y$ (en W) en fonction de l\'ensoleillement $x$ (en kWh/m²/jour) : $(2;80)$, $(3;115)$, $(4;140)$, $(5;170)$, $(6;200)$. Déterminer la droite de régression et estimer la puissance pour $x = 7$ kWh/m²/jour.',
        steps: [
          'Moyennes : $\\bar{x} = (2+3+4+5+6)/5 = 4$ ; $\\bar{y} = (80+115+140+170+200)/5 = 141$.',
          'Calculs intermédiaires : $\\overline{x^2} = (4+9+16+25+36)/5 = 18$ ; $\\overline{xy} = (160+345+560+850+1200)/5 = 623$.',
          '$V_x = 18 - 16 = 2$. $\\text{Cov}(x,y) = 623 - 4 \\times 141 = 623 - 564 = 59$.',
          'Coefficient directeur : $a = 59/2 = 29{,}5$. Ordonnée : $b = 141 - 29{,}5 \\times 4 = 23$.',
          'Droite : $y = 29{,}5x + 23$. Pour $x = 7$ : $y = 29{,}5 \\times 7 + 23 = 229{,}5$ W.'
        ],
        answer: 'Droite de régression : $y = 29{,}5x + 23$. Pour un ensoleillement de $7$ kWh/m²/jour, la puissance estimée est $229{,}5$ W.'
      },
      formulas: [
        '$\\text{Cov}(x,y)=\\overline{xy}-\\bar{x}\\cdot\\bar{y}$',
        '$V_x=\\overline{x^2}-\\bar{x}^2$',
        '$a=\\dfrac{\\text{Cov}(x,y)}{V_x}$, $b=\\bar{y}-a\\bar{x}$',
        '$r=\\dfrac{\\text{Cov}(x,y)}{\\sigma_x\\cdot\\sigma_y}$'
      ],
      recap: [
        'La droite de régression $y = ax + b$ passe toujours par le point moyen $(\\bar{x}, \\bar{y})$.',
        '$|r|$ proche de $1$ indique une forte liaison linéaire. $|r| < 0{,}5$ : liaison linéaire faible.',
        'Corrélation $\\neq$ causalité : toujours chercher une explication logique avant de conclure.',
        'Ne pas extrapoler loin des données observées : la relation linéaire peut ne plus être valable hors du domaine mesuré.'
      ],
      piege: '$|r|\\approx1$ indique une forte liaison linéaire, mais pas une causalité ! Deux variables peuvent être corrélées sans lien de cause à effet.'
    },
    quiz: [
      { q: 'Une étude trouve $r=0{,}96$ entre les ventes de glaces et le nombre de noyades en piscine. Un analyste conclut : "Les glaces causent des noyades." Quelle est son erreur ?', options: ['Corrélation $\\ne$ causalité. Une variable cachée (la chaleur estivale) explique simultanément les deux phénomènes', 'Il a raison : $r=0{,}96$ prouve une causalité directe', '$r=0{,}96$ est insuffisant pour conclure à une corrélation (il faudrait $r>0{,}99$)', 'L\'erreur est d\'avoir utilisé le coefficient de Pearson au lieu de Spearman'], answer: 0, correction: 'La corrélation mesure la FORCE de la liaison linéaire, pas sa CAUSE. Deux variables peuvent être corrélées via une troisième : ici, la chaleur en été provoque à la fois une hausse des ventes de glaces ET des baignades (donc des noyades). Ce type d\'erreur s\'appelle "corrélation fallacieuse" (spurious correlation). Règle : pour établir une causalité, il faut une expérience contrôlée randomisée, pas seulement un coefficient $r$.' },
      { q: 'La droite de régression passe toujours par :', options: ['L\'origine', 'Le point $(\\bar{x};\\bar{y})$', 'Le maximum de $y$', 'Le point $(0;b)$ uniquement'], answer: 1, correction: 'Par construction ($b=\\bar{y}-a\\bar{x}$), la droite passe toujours par le point moyen $(\\bar{x};\\bar{y})$.' },
      { q: '$\\text{Cov}(x,y)=\\overline{xy}-\\bar{x}\\cdot\\bar{y}$. Si $\\bar{x}=2$, $\\bar{y}=3$, $\\overline{xy}=7$, alors $\\text{Cov}=$', options: ['$1$', '$2$', '$6$', '$-1$'], answer: 0, correction: '$\\text{Cov}=7-2\\times3=7-6=1$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const xbar = rand(2, 5), ybar = rand(3, 8), cov = rand(1, 4), vx = rand(1, 3);
        const a = parseFloat((cov/vx).toFixed(4));
        return {
          statement: `$\\bar{x}=${xbar}$, $\\bar{y}=${ybar}$, $\\text{Cov}(x,y)=${cov}$, $V_x=${vx}$. Calculer $a=\\text{Cov}/V_x$.`,
          answer: parseFloat(a.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: '$a = \\text{Cov}(x,y) / V_x$',
          solution: [`$a=${cov}/${vx}=${a}$`]
        };
      }
    },
    probleme: {
      context: 'Chiffre d\'affaires $y$ (k€) selon les dépenses publicitaires $x$ (k€) : $(1;8)$, $(2;11)$, $(3;12)$, $(4;14)$, $(5;15)$.',
      tasks: [
        'Calculer $\\bar{x}$, $\\bar{y}$, $\\overline{xy}$, $V_x$ et $\\text{Cov}(x,y)$.',
        'Déterminer la droite de régression $y=ax+b$.',
        'Estimer le CA pour $x=6$ k€ de publicité.'
      ],
      solutions: [
        '$\\bar{x}=3$, $\\bar{y}=12$, $\\overline{xy}=38{,}4$, $V_x=2$, $\\text{Cov}=38{,}4-36=2{,}4$.',
        '$a=2{,}4/2=1{,}2$ ; $b=12-1{,}2\\times3=8{,}4$. Droite : $y=1{,}2x+8{,}4$.',
        '$y(6)=1{,}2\\times6+8{,}4=15{,}6$ k€.'
      ],
      finalAnswer: 'Droite : $y=1{,}2x+8{,}4$. Pour $6$ k€ pub → CA estimé : $15{,}6$ k€.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques à deux variables',
      duration: '40 min',
      questions: [
        {
          statement: 'Soit $\\bar{x} = 4$, $\\bar{y} = 10$, $\\overline{xy} = 45$. Calculer la covariance $\\text{Cov}(x,y) = \\overline{xy} - \\bar{x}\\cdot\\bar{y}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\text{Cov}(x,y) = \\overline{xy} - \\bar{x} \\cdot \\bar{y} = 45 - 4 \\times 10 = 45 - 40 = 5$.'
        },
        {
          statement: 'La droite de régression des moindres carrés passe toujours par :',
          type: 'multiple-choice',
          options: ['L\'origine $(0\\,;\\,0)$', 'Le point moyen $(\\bar{x}\\,;\\,\\bar{y})$', 'Le maximum du nuage', 'L\'intersection des axes'],
          answer: 1,
          points: 2,
          correction: 'Par construction, $b = \\bar{y} - a\\bar{x}$, ce qui garantit que la droite passe par le point moyen $(\\bar{x}\\,;\\,\\bar{y})$. C\'est une propriété fondamentale de la régression linéaire.'
        },
        {
          statement: 'On dispose de $\\text{Cov}(x,y) = 6$, $V_x = 4$, $\\bar{x} = 3$, $\\bar{y} = 8$. Calculer le coefficient directeur $a$ et l\'ordonnée à l\'origine $b$ de la droite de régression. Donner la valeur de $b$.',
          type: 'numeric',
          answer: 3.5,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$a = \\dfrac{\\text{Cov}(x,y)}{V_x} = \\dfrac{6}{4} = 1{,}5$. Puis $b = \\bar{y} - a\\bar{x} = 8 - 1{,}5 \\times 3 = 8 - 4{,}5 = 3{,}5$. La droite est $y = 1{,}5x + 3{,}5$.'
        },
        {
          statement: 'Un coefficient de corrélation $r = -0{,}92$ signifie :',
          type: 'multiple-choice',
          options: ['Aucune liaison entre les variables', 'Forte liaison linéaire négative (quand $x$ augmente, $y$ diminue)', 'Forte liaison linéaire positive', 'Liaison non linéaire uniquement'],
          answer: 1,
          points: 2,
          correction: '$r = -0{,}92$ est proche de $-1$ : forte corrélation linéaire négative. Quand $x$ augmente, $y$ a tendance à diminuer de façon linéaire. Attention : cela ne prouve pas une causalité (corrélation $\\neq$ causalité).'
        },
        {
          statement: 'Avec la droite de régression $y = 2{,}5x + 1$, estimer $y$ pour $x = 10$.',
          type: 'numeric',
          answer: 26,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$y = 2{,}5 \\times 10 + 1 = 25 + 1 = 26$. Attention : cette estimation n\'est fiable que si $x = 10$ est dans la plage des données observées (pas d\'extrapolation trop lointaine).'
        }
      ]
    }
  }
);
