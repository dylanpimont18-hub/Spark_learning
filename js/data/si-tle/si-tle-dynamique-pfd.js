/* =========================================================
   Spark Learning – data/si-tle/si-tle-dynamique-pfd.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-tle-dynamique-pfd',
    level: 2, subject: 'si',
    icon: '🚀',
    title: 'Dynamique du solide (PFD)',
    subtitle: '2ème loi de Newton, théorème du centre de masse, PFD en rotation',
    keywords: ['PFD', 'Force', 'Masse', 'Accélération', 'Newton', 'Moment d\'inertie'],
    physics: 'Dimensionnement de moteurs, freinage ABS, lancement de fusées, ascenseurs — tout système où la résultante des forces produit une accélération.',

    cours: {
      intro: 'Le <strong>Principe Fondamental de la Dynamique</strong> (PFD), ou 2ème loi de Newton, est le pilier de la mécanique en Sciences de l\'Ingénieur. Il relie les forces extérieures exercées sur un solide à son accélération.<br/><br/>' +
        'En <strong>translation</strong>, le théorème du centre de masse (ou théorème de la résultante dynamique) s\'écrit : $\\sum \\vec{F}_{\\text{ext}} = m \\, \\vec{a}_G$, où $\\vec{a}_G$ est l\'accélération du centre de masse $G$. Projeté sur un axe, cela donne $\\sum F_x = m \\, a_x$. Cette loi n\'est valable que dans un <strong>référentiel galiléen</strong> (inertiel), c\'est-à-dire en translation rectiligne uniforme par rapport aux étoiles fixes.<br/><br/>' +
        'En <strong>rotation</strong> autour d\'un axe fixe $\\Delta$, le PFD s\'écrit : $\\sum M_{\\Delta}(\\vec{F}_{\\text{ext}}) = J_{\\Delta} \\, \\alpha$, où $J_{\\Delta}$ est le moment d\'inertie par rapport à l\'axe (en kg·m²) et $\\alpha = \\dfrac{d\\omega}{dt}$ l\'accélération angulaire (en rad/s²). Le moment d\'inertie joue en rotation le même rôle que la masse en translation : plus $J$ est grand, plus il est difficile d\'accélérer angulairement le solide.',

      definitions: [
        { term: 'PFD en translation', def: '$\\sum \\vec{F}_{\\text{ext}} = m \\, \\vec{a}_G$ — la résultante des forces extérieures est égale au produit de la masse par l\'accélération du centre de masse. Valable uniquement dans un référentiel galiléen.' },
        { term: 'PFD en rotation', def: '$\\sum M_{\\Delta} = J_{\\Delta} \\, \\alpha$ — la somme des moments des forces par rapport à l\'axe $\\Delta$ est égale au produit du moment d\'inertie par l\'accélération angulaire.' },
        { term: 'Moment d\'inertie', def: 'Grandeur scalaire $J$ (en kg·m²) qui caractérise la résistance d\'un solide à la mise en rotation autour d\'un axe donné. Dépend de la géométrie et de la répartition de masse autour de cet axe.' },
        { term: 'Référentiel galiléen', def: 'Référentiel dans lequel le PFD s\'applique directement. Un référentiel en translation rectiligne uniforme par rapport au référentiel héliocentrique est considéré galiléen.' },
        { term: 'Accélération angulaire', def: '$\\alpha = \\dfrac{d\\omega}{dt}$ (en rad/s²). Dérivée temporelle de la vitesse angulaire $\\omega$.' }
      ],

      method: {
        title: 'Appliquer le PFD',
        steps: [
          '<strong>Isoler le système</strong> : identifier le solide étudié, sa masse $m$ et, si rotation, son moment d\'inertie $J_{\\Delta}$.<br/>Exemple : un chariot sur un rail → solide de masse $m$.',
          '<strong>Vérifier le référentiel</strong> : s\'assurer que le référentiel choisi est galiléen (terrestre en première approximation).',
          '<strong>Bilan des forces</strong> : recenser toutes les forces extérieures (poids $\\vec{P} = m\\vec{g}$, tension, frottements, poussée motrice, réaction du support, etc.).<br/>Ne pas oublier les forces de frottement qui s\'opposent toujours au mouvement.',
          '<strong>Choisir un repère et projeter</strong> : orienter les axes (sens positif = sens du mouvement prévu). En translation, projeter $\\sum \\vec{F} = m \\vec{a}$ sur chaque axe. En rotation, sommer les moments par rapport à l\'axe $\\Delta$.',
          '<strong>Résoudre</strong> : isoler l\'inconnue ($a$, $F$, $m$, $\\alpha$ ou $J$) et calculer numériquement. Vérifier l\'homogénéité des unités.'
        ]
      },

      example: {
        statement: 'Un chariot de $5$ kg est tiré par une force horizontale $F = 20$ N sur un plan horizontal avec des frottements $f = 5$ N. Déterminer l\'accélération.',
        steps: [
          'Bilan des forces projeté sur l\'axe horizontal : $F - f = m a$',
          'Application numérique : $20 - 5 = 5 \\times a$',
          '$15 = 5a$ donc $a = 3$ m/s²'
        ],
        answer: '$a = 3$ m/s²'
      },

      formulas: [
        '$\\sum \\vec{F}_{\\text{ext}} = m \\, \\vec{a}_G$ — PFD en translation (théorème du centre de masse)',
        '$\\sum M_{\\Delta}(\\vec{F}_{\\text{ext}}) = J_{\\Delta} \\, \\alpha$ — PFD en rotation autour d\'un axe fixe',
        '$J_{\\text{cylindre}} = \\dfrac{1}{2} m R^2$ — Moment d\'inertie d\'un cylindre plein',
        '$J_{\\text{sphère}} = \\dfrac{2}{5} m R^2$ — Moment d\'inertie d\'une sphère pleine',
        '$a = \\dfrac{\\sum F}{m}$ — Accélération en translation'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Solide</th><th style="border:1px solid var(--border);padding:8px">Moment d\'inertie $J_{\\Delta}$</th><th style="border:1px solid var(--border);padding:8px">Axe</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Cylindre plein (rayon $R$)</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{2} m R^2$</td><td style="border:1px solid var(--border);padding:8px">Axe du cylindre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Sphère pleine (rayon $R$)</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{2}{5} m R^2$</td><td style="border:1px solid var(--border);padding:8px">Diamètre quelconque</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Tige mince (longueur $L$)</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{12} m L^2$</td><td style="border:1px solid var(--border);padding:8px">Axe perpendiculaire passant par le centre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Disque mince (rayon $R$)</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{2} m R^2$</td><td style="border:1px solid var(--border);padding:8px">Axe perpendiculaire au disque, passant par le centre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Anneau mince (rayon $R$)</td><td style="border:1px solid var(--border);padding:8px">$m R^2$</td><td style="border:1px solid var(--border);padding:8px">Axe perpendiculaire passant par le centre</td></tr></table>',

      recap: [
        'Le PFD relie forces et accélération : $\\sum F = m a$ en translation, $\\sum M = J \\alpha$ en rotation.',
        'Le moment d\'inertie $J$ dépend de la géométrie du solide ET de la position de l\'axe de rotation.',
        'Le PFD n\'est valable que dans un référentiel galiléen — sinon il faut ajouter des pseudo-forces.',
        'Toujours bien orienter le repère et faire un bilan complet des forces AVANT de projeter.'
      ],

      piege: 'Ne confonds pas masse et poids ! Le poids $P = mg$ est une force (en Newtons), tandis que la masse $m$ est en kilogrammes. Dans $\\sum F = ma$, c\'est bien la masse qui intervient. Autre piège classique : oublier les forces de frottement dans le bilan, ou appliquer le PFD dans un référentiel non galiléen sans ajouter les pseudo-forces (force centrifuge, Coriolis).'
    },

    quiz: [
      {
        q: 'Un solide de masse $m = 10$ kg est soumis à une résultante de forces $\\sum F = 30$ N. Son accélération vaut :',
        options: [
          '$a = 3$ m/s²',
          '$a = 300$ m/s²',
          '$a = 0{,}33$ m/s²',
          '$a = 30$ m/s²'
        ],
        answer: 0,
        correction: '$a = \\dfrac{\\sum F}{m} = \\dfrac{30}{10} = 3$ m/s². On divise la force résultante par la masse, d\'après le PFD en translation : $\\sum F = m a$.'
      },
      {
        q: 'Le moment d\'inertie d\'une <strong>sphère pleine</strong> de masse $m$ et de rayon $R$ autour d\'un diamètre vaut :',
        options: [
          '$J = \\frac{2}{5} m R^2$',
          '$J = \\frac{1}{2} m R^2$',
          '$J = m R^2$',
          '$J = \\frac{1}{12} m R^2$'
        ],
        answer: 0,
        correction: 'Le moment d\'inertie d\'une sphère pleine homogène est $J = \\frac{2}{5} m R^2$. Attention : $\\frac{1}{2} m R^2$ correspond au cylindre plein, et $m R^2$ à l\'anneau mince.'
      },
      {
        q: 'Un chariot de $m = 20$ kg accélère à $2$ m/s² sous l\'effet d\'une force motrice $F_m = 50$ N et de frottements $f$. La force de frottement vaut :',
        options: [
          '$f = 10$ N',
          '$f = 50$ N',
          '$f = 40$ N',
          '$f = 90$ N'
        ],
        answer: 0,
        correction: 'PFD projeté : $F_m - f = m a$, donc $f = F_m - m a = 50 - 20 \\times 2 = 50 - 40 = 10$ N. Les frottements s\'opposent au mouvement et sont bien positifs.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['translation', 'rotation']);
        if (scenario === 'translation') {
          const m = rand(2, 25);
          const F = rand(10, 120);
          const f = rand(1, Math.min(F - 1, 30));
          const a = parseFloat(((F - f) / m).toFixed(2));
          return {
            statement: `Un chariot de masse $m = ${m}$ kg est tiré par une force motrice $F = ${F}$ N. Les frottements valent $f = ${f}$ N. Calcule l'accélération $a$ (en m/s²).`,
            answer: a,
            tolerance: 0.05,
            unit: 'm/s²',
            hint: `Utilise le PFD projeté sur l'axe du mouvement : $F - f = m a$, donc $a = \\dfrac{F - f}{m}$.`,
            solution: [
              `Bilan des forces projeté : $F - f = m a$`,
              `$a = \\dfrac{F - f}{m} = \\dfrac{${F} - ${f}}{${m}} = \\dfrac{${F - f}}{${m}}$`,
              `$a = ${a}$ m/s²`
            ]
          };
        } else {
          const m = rand(1, 10);
          const R = randFloat(0.05, 0.3, 2);
          const M_couple = randFloat(0.5, 5, 1);
          const J = parseFloat((0.5 * m * R * R).toFixed(4));
          const alpha = parseFloat((M_couple / J).toFixed(1));
          return {
            statement: `Un cylindre plein de masse $m = ${m}$ kg et de rayon $R = ${R}$ m est soumis à un couple moteur $M = ${M_couple}$ N·m. Calcule son accélération angulaire $\\alpha$ (en rad/s²).`,
            answer: alpha,
            tolerance: 0.5,
            unit: 'rad/s²',
            hint: `Le moment d'inertie d'un cylindre plein est $J = \\frac{1}{2} m R^2$. Puis $\\alpha = \\dfrac{M}{J}$.`,
            solution: [
              `$J = \\dfrac{1}{2} m R^2 = \\dfrac{1}{2} \\times ${m} \\times ${R}^2 = ${J}$ kg·m²`,
              `$\\alpha = \\dfrac{M}{J} = \\dfrac{${M_couple}}{${J}}$`,
              `$\\alpha \\approx ${alpha}$ rad/s²`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un ascenseur de masse $M = 800$ kg transporte une charge $m = 200$ kg. Le câble exerce une tension $T$ vers le haut. On prend $g = 10$ m/s². L\'ensemble part du repos et accélère vers le haut à $a = 1{,}5$ m/s².',
      tasks: [
        'Calculer le poids total du système (ascenseur + charge).',
        'Appliquer le PFD en projection verticale (axe orienté vers le haut) pour exprimer $T$ en fonction de $M$, $m$, $g$ et $a$.',
        'Calculer numériquement la tension $T$ dans le câble.'
      ],
      solutions: [
        '$P = (M + m) g = (800 + 200) \\times 10 = 10\\,000$ N.',
        'PFD vertical (vers le haut positif) : $T - P = (M + m) a$, soit $T = (M + m)(g + a)$.',
        '$T = 1000 \\times (10 + 1{,}5) = 1000 \\times 11{,}5 = 11\\,500$ N.'
      ],
      finalAnswer: '$T = 11\\,500$ N — la tension est supérieure au poids car l\'ascenseur accélère vers le haut.'
    },

    evaluation: {
      title: 'Évaluation — Dynamique du solide (PFD)',
      duration: '20 min',
      questions: [
        {
          statement: 'Un solide de $15$ kg est soumis à une résultante de forces $\\sum F = 45$ N. Calculer son accélération (en m/s²).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.01,
          unit: 'm/s²',
          points: 2,
          correction: '$a = \\dfrac{\\sum F}{m} = \\dfrac{45}{15} = 3$ m/s². Application directe du PFD en translation.'
        },
        {
          statement: 'Un objet de masse $m = 6$ kg accélère à $a = 4$ m/s² sur un plan horizontal. La force motrice est $F = 30$ N. Quelle est l\'intensité des frottements $f$ (en N) ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0.1,
          unit: 'N',
          points: 2,
          correction: '$F - f = m a \\Rightarrow f = F - m a = 30 - 6 \\times 4 = 30 - 24 = 6$ N.'
        },
        {
          statement: 'Le moment d\'inertie d\'un cylindre plein de masse $m$ et de rayon $R$ autour de son axe est :',
          type: 'multiple-choice',
          options: ['$J = m R^2$', '$J = \\frac{1}{2} m R^2$', '$J = \\frac{2}{5} m R^2$', '$J = 2 m R^2$'],
          answer: 1,
          points: 2,
          correction: 'Le moment d\'inertie d\'un cylindre plein autour de son axe de symétrie est $J = \\frac{1}{2} m R^2$. La formule $\\frac{2}{5} m R^2$ correspond à une sphère pleine, et $m R^2$ à un anneau mince.'
        },
        {
          statement: 'Un disque de masse $m = 2$ kg et de rayon $R = 0{,}2$ m est soumis à un couple moteur $M = 0{,}8$ N·m. Calculer son accélération angulaire $\\alpha$ (en rad/s²).',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'rad/s²',
          points: 2,
          correction: '$J = \\frac{1}{2} m R^2 = \\frac{1}{2} \\times 2 \\times (0{,}2)^2 = \\frac{1}{2} \\times 2 \\times 0{,}04 = 0{,}04$ kg·m². Puis $\\alpha = \\dfrac{M}{J} = \\dfrac{0{,}8}{0{,}04} = 20$ rad/s².'
        },
        {
          statement: 'Un véhicule de $1200$ kg est soumis à une force motrice de $3600$ N et des frottements de $600$ N. Quelle distance parcourt-il pour atteindre $v = 20$ m/s en partant du repos ? (en m)',
          type: 'numeric',
          answer: 80,
          tolerance: 1,
          unit: 'm',
          points: 2,
          correction: 'PFD : $a = \\dfrac{3600 - 600}{1200} = 2{,}5$ m/s². Avec $v^2 = 2 a d$ (départ du repos), on obtient $d = \\dfrac{v^2}{2a} = \\dfrac{400}{5} = 80$ m.'
        }
      ]
    }
  });
