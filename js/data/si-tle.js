/* =========================================================
   Spark Learning – data/si-tle.js
   Modules Lycée Terminale – Sciences de l'Ingénieur (7)
   ========================================================= */

window.MODULES.push(

  /* ─────────────────────────────────────────────────────────
     1. Dynamique du solide (PFD)
     ───────────────────────────────────────────────────────── */
  {
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
  },

  /* ─────────────────────────────────────────────────────────
     2. Énergie cinétique et théorème de l'énergie cinétique
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-energie-cinetique',
    level: 2, subject: 'si',
    icon: '💨',
    title: 'Énergie cinétique et théorème de l\'énergie cinétique',
    subtitle: 'Ec translation et rotation, travail d\'une force, TEC',
    keywords: ['Énergie cinétique', 'Travail', 'TEC', 'Vitesse', 'Distance d\'arrêt'],
    physics: 'Freinage automobile, balistique, crash-tests, dimensionnement de moteurs — tout calcul de vitesse atteinte ou de distance d\'arrêt.',

    cours: {
      intro: 'L\'<strong>énergie cinétique</strong> quantifie l\'énergie liée au mouvement d\'un solide. C\'est une grandeur scalaire, toujours positive ou nulle.<br/><br/>' +
        'En <strong>translation</strong> : $E_c = \\frac{1}{2} m v^2$ (en Joules). En <strong>rotation</strong> autour d\'un axe fixe : $E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$, où $\\omega$ est la vitesse angulaire en rad/s. Pour un mouvement combinant translation et rotation (ex. : une roue qui roule sans glisser), l\'énergie cinétique totale est la somme des deux termes.<br/><br/>' +
        'Le <strong>travail d\'une force</strong> constante $\\vec{F}$ sur un déplacement $\\vec{d}$ est $W = F \\cdot d \\cdot \\cos(\\alpha)$, où $\\alpha$ est l\'angle entre $\\vec{F}$ et $\\vec{d}$. Un travail <strong>positif</strong> (force motrice) accélère le système ; un travail <strong>négatif</strong> (force résistante, frottements) le freine. Si $\\alpha = 90°$, le travail est nul (force perpendiculaire au déplacement).<br/><br/>' +
        'Le <strong>théorème de l\'énergie cinétique</strong> (TEC) relie directement variation d\'énergie cinétique et travaux : $\\Delta E_c = E_{c,f} - E_{c,i} = \\sum W(\\vec{F}_{\\text{ext}})$. Le TEC est souvent plus pratique que le PFD quand on cherche une vitesse finale ou une distance d\'arrêt, car il évite de passer par les équations horaires.',

      definitions: [
        { term: 'Énergie cinétique de translation', def: '$E_c = \\frac{1}{2} m v^2$ (en J). Proportionnelle au carré de la vitesse : doubler $v$ quadruple $E_c$.' },
        { term: 'Énergie cinétique de rotation', def: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$ (en J). $J$ est le moment d\'inertie et $\\omega$ la vitesse angulaire.' },
        { term: 'Travail d\'une force', def: '$W = F \\cdot d \\cdot \\cos(\\alpha)$ (en J). Positif si la force est motrice, négatif si elle est résistante (frottements), nul si perpendiculaire.' },
        { term: 'Théorème de l\'énergie cinétique', def: '$\\Delta E_c = \\sum W(\\vec{F}_{\\text{ext}})$ — la variation d\'énergie cinétique entre deux instants est égale à la somme algébrique de tous les travaux.' }
      ],

      method: {
        title: 'Appliquer le TEC',
        steps: [
          '<strong>État initial / État final</strong> : identifier les vitesses $v_i$ et $v_f$ (ou l\'inconnue recherchée).<br/>Exemple : freinage → $v_i = 20$ m/s, $v_f = 0$.',
          '<strong>Calculer $\\Delta E_c$</strong> : $\\Delta E_c = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2$.<br/>Si le solide s\'arrête : $\\Delta E_c = -\\frac{1}{2} m v_i^2$ (négatif = perte d\'énergie).',
          '<strong>Bilan des travaux</strong> : recenser toutes les forces qui travaillent. Calculer $W = F \\cdot d \\cdot \\cos(\\alpha)$ pour chacune.<br/>Les frottements donnent un travail négatif : $W_f = -f \\times d$.',
          '<strong>Appliquer le TEC</strong> : $\\Delta E_c = \\sum W$. Résoudre pour l\'inconnue ($v_f$, $d$, ou $F$).',
          '<strong>Vérifier les signes</strong> : si $\\Delta E_c > 0$, le solide accélère ; si $\\Delta E_c < 0$, il ralentit. La distance d\'arrêt est toujours positive.'
        ]
      },

      example: {
        statement: 'Une voiture de $1\\,000$ kg roule à $v_i = 20$ m/s et freine jusqu\'à l\'arrêt ($v_f = 0$). La force de freinage est $F_f = 5\\,000$ N. Quelle est la distance d\'arrêt ?',
        steps: [
          '$\\Delta E_c = \\frac{1}{2} \\times 1000 \\times 0^2 - \\frac{1}{2} \\times 1000 \\times 20^2 = -200\\,000$ J',
          '$W_{\\text{frein}} = -F_f \\times d = -5000 \\times d$',
          'TEC : $-200\\,000 = -5000 \\times d$, soit $d = 40$ m'
        ],
        answer: '$d = 40$ m'
      },

      formulas: [
        '$E_c = \\dfrac{1}{2} m v^2$ — Énergie cinétique de translation',
        '$E_{c,\\text{rot}} = \\dfrac{1}{2} J \\omega^2$ — Énergie cinétique de rotation',
        '$W = F \\cdot d \\cdot \\cos(\\alpha)$ — Travail d\'une force constante',
        '$\\Delta E_c = \\sum W(\\vec{F}_{\\text{ext}})$ — Théorème de l\'énergie cinétique',
        '$d_{\\text{arrêt}} = \\dfrac{m v_i^2}{2 F_f}$ — Distance d\'arrêt (freinage pur)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Grandeur</th><th style="border:1px solid var(--border);padding:8px">Translation</th><th style="border:1px solid var(--border);padding:8px">Rotation</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Énergie cinétique</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2} m v^2$</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2} J \\omega^2$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètre d\'inertie</td><td style="border:1px solid var(--border);padding:8px">Masse $m$ (kg)</td><td style="border:1px solid var(--border);padding:8px">Moment d\'inertie $J$ (kg·m²)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètre cinématique</td><td style="border:1px solid var(--border);padding:8px">Vitesse $v$ (m/s)</td><td style="border:1px solid var(--border);padding:8px">Vitesse angulaire $\\omega$ (rad/s)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Travail / Puissance</td><td style="border:1px solid var(--border);padding:8px">$W = F \\cdot d \\cdot \\cos \\alpha$</td><td style="border:1px solid var(--border);padding:8px">$W = M \\cdot \\theta$</td></tr></table>',

      recap: [
        'L\'énergie cinétique est proportionnelle à $v^2$ : doubler la vitesse quadruple l\'énergie (et la distance de freinage).',
        'Le TEC relie directement travaux et variation de vitesse, sans passer par les équations horaires.',
        'Un travail positif (force motrice) accélère le système, un travail négatif (frottements) le freine.',
        'Quand utiliser le TEC plutôt que le PFD ? Quand on cherche une vitesse ou une distance sans avoir besoin de connaître $a(t)$.'
      ],

      piege: 'L\'énergie cinétique est proportionnelle à $v^2$, pas à $v$ ! Si la vitesse double, l\'énergie cinétique est multipliée par $4$ (et la distance de freinage aussi). Autre erreur fréquente : oublier le $\\cos(\\alpha)$ dans le calcul du travail — si la force est perpendiculaire au déplacement ($\\alpha = 90°$), son travail est nul, elle ne contribue donc pas à la variation d\'énergie cinétique.'
    },

    quiz: [
      {
        q: 'L\'énergie cinétique d\'un véhicule de $800$ kg roulant à $v = 10$ m/s vaut :',
        options: [
          '$E_c = 40\\,000$ J',
          '$E_c = 8\\,000$ J',
          '$E_c = 80\\,000$ J',
          '$E_c = 4\\,000$ J'
        ],
        answer: 0,
        correction: '$E_c = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 800 \\times 10^2 = 400 \\times 100 = 40\\,000$ J. Bien penser à élever la vitesse au carré avant de multiplier !'
      },
      {
        q: 'Si la vitesse d\'un véhicule est doublée, sa distance de freinage est :',
        options: [
          'Multipliée par 4',
          'Doublée',
          'Multipliée par 8',
          'Inchangée'
        ],
        answer: 0,
        correction: '$d = \\frac{m v^2}{2 F_f}$. Si $v$ est remplacée par $2v$ : $d\' = \\frac{m (2v)^2}{2 F_f} = 4 \\times \\frac{m v^2}{2 F_f} = 4d$. La distance de freinage est proportionnelle à $v^2$, ce qui explique le danger des excès de vitesse.'
      },
      {
        q: 'Un volant d\'inertie ($J = 0{,}4$ kg·m²) tourne à $\\omega = 50$ rad/s. Son énergie cinétique de rotation vaut :',
        options: [
          '$E_c = 500$ J',
          '$E_c = 1000$ J',
          '$E_c = 20$ J',
          '$E_c = 250$ J'
        ],
        answer: 0,
        correction: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2 = \\frac{1}{2} \\times 0{,}4 \\times 50^2 = 0{,}2 \\times 2500 = 500$ J.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['arret', 'rotation', 'acceleration']);
        if (scenario === 'arret') {
          const m = rand(500, 2000);
          const vi = rand(10, 30);
          const F = rand(2000, 8000);
          const d = parseFloat(((0.5 * m * vi * vi) / F).toFixed(1));
          return {
            statement: `Un véhicule de masse $m = ${m}$ kg roule à $v_i = ${vi}$ m/s et freine jusqu'à l'arrêt ($v_f = 0$). La force de freinage constante est $F_f = ${F}$ N. Calcule la distance d'arrêt $d$ (en m).`,
            answer: d,
            tolerance: 0.5,
            unit: 'm',
            hint: `Utilise le TEC : $\\Delta E_c = W_{\\text{frein}}$. Ici $\\Delta E_c = -\\frac{1}{2} m v_i^2$ et $W_{\\text{frein}} = -F_f \\times d$.`,
            solution: [
              `$\\Delta E_c = 0 - \\frac{1}{2} \\times ${m} \\times ${vi}^2 = -${0.5 * m * vi * vi}$ J`,
              `$W_{\\text{frein}} = -${F} \\times d$`,
              `TEC : $-${0.5 * m * vi * vi} = -${F} \\times d$`,
              `$d = \\dfrac{${0.5 * m * vi * vi}}{${F}} = ${d}$ m`
            ]
          };
        } else if (scenario === 'rotation') {
          const J = randFloat(0.1, 2, 1);
          const omega = rand(20, 100);
          const Ec = parseFloat((0.5 * J * omega * omega).toFixed(0));
          return {
            statement: `Un volant d'inertie a un moment d'inertie $J = ${J.toFixed(1).replace('.', '{,}')}$ kg·m² et tourne à $\\omega = ${omega}$ rad/s. Calcule son énergie cinétique de rotation (en J).`,
            answer: Ec,
            tolerance: 1,
            unit: 'J',
            hint: `Utilise la formule $E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$.`,
            solution: [
              `$E_{c,\\text{rot}} = \\frac{1}{2} \\times ${J.toFixed(1).replace('.', '{,')} \\times ${omega}^2$`,
              `$E_{c,\\text{rot}} = ${(0.5 * J).toFixed(2).replace('.', '{,')} \\times ${omega * omega}$`,
              `$E_{c,\\text{rot}} = ${Ec}$ J`
            ]
          };
        } else {
          const m = rand(30, 100);
          const F_mot = rand(100, 500);
          const f_frot = rand(10, 80);
          const d = rand(5, 20);
          const vf = parseFloat(Math.sqrt(2 * (F_mot - f_frot) * d / m).toFixed(1));
          return {
            statement: `Un chariot de $m = ${m}$ kg part du repos. Il est poussé par $F = ${F_mot}$ N sur $d = ${d}$ m avec des frottements $f = ${f_frot}$ N. Calcule la vitesse finale $v_f$ (en m/s).`,
            answer: vf,
            tolerance: 0.2,
            unit: 'm/s',
            hint: `TEC : $\\frac{1}{2} m v_f^2 = (F - f) \\times d$, donc $v_f = \\sqrt{\\dfrac{2(F-f) d}{m}}$.`,
            solution: [
              `$W_F = ${F_mot} \\times ${d} = ${F_mot * d}$ J, $W_f = -${f_frot} \\times ${d} = -${f_frot * d}$ J`,
              `$\\Delta E_c = \\frac{1}{2} m v_f^2 = ${F_mot * d} - ${f_frot * d} = ${(F_mot - f_frot) * d}$ J`,
              `$v_f = \\sqrt{\\dfrac{2 \\times ${(F_mot - f_frot) * d}}{${m}}} \\approx ${vf}$ m/s`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un chariot de masse $m = 50$ kg part du repos ($v_i = 0$) et est poussé par une force constante $F = 200$ N sur un sol horizontal avec des frottements $f = 50$ N. On veut déterminer sa vitesse après un déplacement de $d = 10$ m.',
      tasks: [
        'Calculer le travail de la force motrice $W_F$ et le travail des frottements $W_f$ sur $d = 10$ m.',
        'Appliquer le TEC pour exprimer $v_f$ en fonction des travaux.',
        'Calculer numériquement la vitesse finale $v_f$.'
      ],
      solutions: [
        '$W_F = F \\times d = 200 \\times 10 = 2000$ J. $W_f = -f \\times d = -50 \\times 10 = -500$ J.',
        '$\\Delta E_c = \\frac{1}{2} m v_f^2 - 0 = W_F + W_f$, soit $v_f = \\sqrt{\\dfrac{2(W_F + W_f)}{m}}$.',
        '$v_f = \\sqrt{\\dfrac{2 \\times 1500}{50}} = \\sqrt{60} \\approx 7{,}75$ m/s.'
      ],
      finalAnswer: '$v_f \\approx 7{,}75$ m/s, soit environ $28$ km/h.'
    },

    evaluation: {
      title: 'Évaluation — Énergie cinétique et TEC',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'énergie cinétique d\'un objet de masse $m = 5$ kg se déplaçant à $v = 6$ m/s (en J).',
          type: 'numeric',
          answer: 90,
          tolerance: 0.5,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 5 \\times 6^2 = 2{,}5 \\times 36 = 90$ J.'
        },
        {
          statement: 'Un objet de $2$ kg passe de $v_i = 3$ m/s à $v_f = 7$ m/s. Quelle est la variation d\'énergie cinétique $\\Delta E_c$ (en J) ?',
          type: 'numeric',
          answer: 40,
          tolerance: 0.5,
          unit: 'J',
          points: 2,
          correction: '$\\Delta E_c = \\frac{1}{2} \\times 2 \\times (7^2 - 3^2) = 1 \\times (49 - 9) = 40$ J. Le solide a gagné de l\'énergie cinétique.'
        },
        {
          statement: 'Le travail d\'une force perpendiculaire au déplacement est :',
          type: 'multiple-choice',
          options: ['Positif', 'Négatif', 'Nul', 'Dépend de l\'intensité de la force'],
          answer: 2,
          points: 2,
          correction: '$W = F \\cdot d \\cdot \\cos(90°) = F \\cdot d \\times 0 = 0$. Une force perpendiculaire au déplacement ne travaille pas et ne modifie pas l\'énergie cinétique.'
        },
        {
          statement: 'Une moto de $200$ kg roule à $v = 20$ m/s. Quelle force de freinage constante faut-il pour l\'arrêter en $d = 50$ m ? (en N)',
          type: 'numeric',
          answer: 800,
          tolerance: 5,
          unit: 'N',
          points: 2,
          correction: 'TEC : $0 - \\frac{1}{2} \\times 200 \\times 20^2 = -F \\times 50$. Donc $-40\\,000 = -50 F$, soit $F = 800$ N.'
        },
        {
          statement: 'Un volant d\'inertie ($J = 0{,}5$ kg·m²) tourne à $\\omega = 100$ rad/s. Son énergie cinétique de rotation vaut (en J) :',
          type: 'numeric',
          answer: 2500,
          tolerance: 10,
          unit: 'J',
          points: 2,
          correction: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2 = \\frac{1}{2} \\times 0{,}5 \\times 100^2 = 0{,}25 \\times 10\\,000 = 2\\,500$ J.'
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────
     3. Systèmes asservis (schéma-blocs, correcteur P/PI/PID)
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-asservis-pid',
    level: 2, subject: 'si',
    icon: '🎛️',
    title: 'Systèmes asservis — Correcteur P/PI/PID',
    subtitle: 'FTBO, FTBF, erreur statique, marges de stabilité',
    keywords: ['PID', 'Correcteur', 'Schéma-blocs', 'Erreur statique', 'Dépassement', 'Stabilité'],
    physics: 'Régulation de température (four, climatisation), pilotage de drones, ABS automobile, régulation de vitesse — tout système nécessitant précision et stabilité.',

    cours: {
      intro: 'Un <strong>système asservi</strong> (ou système bouclé) compare en permanence sa sortie $S(p)$ à une consigne $E(p)$ pour corriger automatiquement les écarts. Le signal d\'erreur est $\\varepsilon(p) = E(p) - S(p) \\cdot H(p)$, où $H(p)$ est la fonction de transfert du capteur de retour.<br/><br/>' +
        'Le schéma-blocs est l\'outil central de l\'automatique. La chaîne directe contient un <strong>correcteur</strong> $C(p)$ et un <strong>procédé</strong> $G(p)$. La <strong>FTBO</strong> (Fonction de Transfert en Boucle Ouverte) est : $\\text{FTBO}(p) = C(p) \\cdot G(p) \\cdot H(p)$. La <strong>FTBF</strong> (Fonction de Transfert en Boucle Fermée) est : $\\text{FTBF}(p) = \\dfrac{C(p) \\cdot G(p)}{1 + C(p) \\cdot G(p) \\cdot H(p)}$. Avec un retour unitaire ($H = 1$), cela se simplifie en $\\text{FTBF} = \\dfrac{C \\cdot G}{1 + C \\cdot G}$.<br/><br/>' +
        '<strong>Correcteur P</strong> : $C(p) = K_p$. Réduit l\'erreur statique mais ne l\'annule jamais. Erreur résiduelle : $\\varepsilon = \\dfrac{1}{1 + K}$ où $K = K_p \\cdot G_0$ est le gain de boucle. Plus $K_p$ est grand, plus l\'erreur diminue, mais un gain excessif déstabilise le système.<br/><br/>' +
        '<strong>Correcteur PI</strong> : $C(p) = K_p + \\dfrac{K_i}{p} = K_p \\cdot \\dfrac{1 + T_i p}{T_i p}$. Le terme intégral ajoute un pôle en $p = 0$ (intégrateur) qui <strong>annule l\'erreur statique</strong> pour une entrée échelon. Inconvénient : peut augmenter le dépassement et ralentir la réponse.<br/><br/>' +
        '<strong>Correcteur PID</strong> : $C(p) = K_p + \\dfrac{K_i}{p} + K_d \\cdot p$. Le terme dérivé anticipe les variations de l\'erreur, amortit les oscillations et réduit le dépassement. Sensible au bruit de mesure.',

      definitions: [
        { term: 'FTBO', def: '$\\text{FTBO}(p) = C(p) \\cdot G(p) \\cdot H(p)$ — Fonction de Transfert en Boucle Ouverte. Caractérise le système « coupé » au niveau du comparateur.' },
        { term: 'FTBF', def: '$\\text{FTBF}(p) = \\dfrac{C \\cdot G}{1 + C \\cdot G \\cdot H}$ — Fonction de Transfert en Boucle Fermée. Si retour unitaire : $\\text{FTBF} = \\dfrac{C \\cdot G}{1 + C \\cdot G}$.' },
        { term: 'Erreur statique', def: 'Écart entre consigne et sortie en régime permanent. Avec un correcteur P de gain de boucle $K$ : $\\varepsilon = \\dfrac{1}{1 + K}$. Un intégrateur (PI ou PID) l\'annule.' },
        { term: 'Correcteur PID', def: '$C(p) = K_p + \\dfrac{K_i}{p} + K_d \\cdot p$. Trois actions : P corrige proportionnellement à l\'erreur, I accumule l\'erreur passée, D anticipe l\'erreur future.' },
        { term: 'Marges de stabilité', def: 'La marge de gain (en dB) et la marge de phase (en degrés) quantifient l\'éloignement du système par rapport à l\'instabilité. Critère courant : marge de phase $\\geq 45°$.' }
      ],

      method: {
        title: 'Analyser un système asservi',
        steps: [
          '<strong>Identifier le schéma-blocs</strong> : repérer le comparateur (somme), le correcteur $C(p)$, le procédé $G(p)$ et le capteur $H(p)$.<br/>Vérifier si le retour est unitaire ($H = 1$) ou non.',
          '<strong>Calculer la FTBO</strong> : $\\text{FTBO} = C(p) \\cdot G(p) \\cdot H(p)$.<br/>Identifier le gain statique $K$ (valeur de la FTBO quand $p \\to 0$, hors intégrateurs).',
          '<strong>Calculer la FTBF</strong> : $\\text{FTBF} = \\dfrac{C \\cdot G}{1 + C \\cdot G \\cdot H}$.<br/>Mettre sous forme canonique pour identifier gain, pulsation propre, amortissement.',
          '<strong>Évaluer les performances</strong> : erreur statique $\\varepsilon$, temps de réponse à $5\\%$ ($t_{r,5\\%}$), dépassement $D\\%$, temps de montée.',
          '<strong>Choisir le correcteur</strong> : P seul → erreur résiduelle. PI → erreur nulle mais possible dépassement accru. PID → compromis optimal entre précision, rapidité et stabilité.'
        ]
      },

      example: {
        statement: 'Un système à retour unitaire a un procédé $G(p) = \\dfrac{10}{1 + 2p}$ et un correcteur P de gain $K_p = 5$. Calculer la FTBF et l\'erreur statique.',
        steps: [
          '$\\text{FTBO} = K_p \\cdot G(p) = \\dfrac{50}{1 + 2p}$',
          '$\\text{FTBF} = \\dfrac{50/(1+2p)}{1 + 50/(1+2p)} = \\dfrac{50}{51 + 2p}$',
          'Gain statique ($p = 0$) : $\\text{FTBF}(0) = \\dfrac{50}{51} \\approx 0{,}98$',
          '$\\varepsilon = 1 - \\text{FTBF}(0) = \\dfrac{1}{51} \\approx 0{,}02$ soit $2\\%$'
        ],
        answer: '$\\varepsilon \\approx 2\\%$'
      },

      formulas: [
        '$\\text{FTBF} = \\dfrac{C(p) \\cdot G(p)}{1 + C(p) \\cdot G(p) \\cdot H(p)}$ — Boucle fermée',
        '$\\varepsilon = \\dfrac{1}{1 + K}$ — Erreur statique (correcteur P, retour unitaire, entrée échelon)',
        '$C(p) = K_p + \\dfrac{K_i}{p} + K_d \\cdot p$ — Correcteur PID',
        '$K = K_p \\times G_0$ — Gain de boucle (gain statique de la FTBO)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Correcteur</th><th style="border:1px solid var(--border);padding:8px">Expression $C(p)$</th><th style="border:1px solid var(--border);padding:8px">Erreur statique</th><th style="border:1px solid var(--border);padding:8px">Rapidité</th><th style="border:1px solid var(--border);padding:8px">Dépassement</th><th style="border:1px solid var(--border);padding:8px">Stabilité</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>P</strong></td><td style="border:1px solid var(--border);padding:8px">$K_p$</td><td style="border:1px solid var(--border);padding:8px">Réduite ($\\neq 0$)</td><td style="border:1px solid var(--border);padding:8px">Augmente avec $K_p$</td><td style="border:1px solid var(--border);padding:8px">Peut augmenter</td><td style="border:1px solid var(--border);padding:8px">Risque si $K_p$ trop grand</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>PI</strong></td><td style="border:1px solid var(--border);padding:8px">$K_p + \\dfrac{K_i}{p}$</td><td style="border:1px solid var(--border);padding:8px"><strong>Nulle</strong></td><td style="border:1px solid var(--border);padding:8px">Peut ralentir</td><td style="border:1px solid var(--border);padding:8px">Augmente</td><td style="border:1px solid var(--border);padding:8px">Diminuée (marge de phase réduite)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>PID</strong></td><td style="border:1px solid var(--border);padding:8px">$K_p + \\dfrac{K_i}{p} + K_d p$</td><td style="border:1px solid var(--border);padding:8px"><strong>Nulle</strong></td><td style="border:1px solid var(--border);padding:8px">Améliorée par $K_d$</td><td style="border:1px solid var(--border);padding:8px">Réduit par $K_d$</td><td style="border:1px solid var(--border);padding:8px">Améliorée ($K_d$ amortit)</td></tr></table>',

      recap: [
        'La FTBF se calcule toujours par $\\dfrac{\\text{chaîne directe}}{1 + \\text{chaîne de retour (boucle)}}$.',
        'L\'erreur statique diminue quand le gain de boucle $K$ augmente, mais ne s\'annule qu\'avec un intégrateur (PI ou PID).',
        'Le terme dérivé (D) améliore la rapidité et réduit le dépassement, mais amplifie le bruit.',
        'Un bon réglage PID est un compromis entre précision (I), rapidité (P) et stabilité (D).'
      ],

      piege: 'Ne confonds pas gain de boucle $K$ (produit de tous les gains en boucle ouverte) et gain du correcteur $K_p$ seul ! L\'erreur statique $\\varepsilon = \\frac{1}{1+K}$ utilise le gain de BOUCLE ($K = K_p \\times G_0$). Autre piège : un gain trop élevé peut rendre le système instable (oscillations croissantes) — il faut toujours vérifier les marges de stabilité.'
    },

    quiz: [
      {
        q: 'Pour un système à retour unitaire avec un gain de boucle $K = 9$, l\'erreur statique en réponse à un échelon vaut :',
        options: [
          '$\\varepsilon = 10\\%$',
          '$\\varepsilon = 9\\%$',
          '$\\varepsilon = 90\\%$',
          '$\\varepsilon = 1\\%$'
        ],
        answer: 0,
        correction: '$\\varepsilon = \\dfrac{1}{1 + K} = \\dfrac{1}{1 + 9} = \\dfrac{1}{10} = 0{,}1 = 10\\%$. Plus le gain de boucle est grand, plus l\'erreur statique est faible, mais elle ne s\'annule jamais avec un simple correcteur P.'
      },
      {
        q: 'Quel type de correcteur annule l\'erreur statique pour une entrée échelon ?',
        options: [
          'PI ou PID (grâce au terme intégral $K_i / p$)',
          'P seul, à condition d\'augmenter $K_p$ suffisamment',
          'D seul (dérivé)',
          'Aucun correcteur ne peut annuler l\'erreur statique'
        ],
        answer: 0,
        correction: 'Le terme intégral $\\dfrac{K_i}{p}$ introduit un pôle à l\'origine (intégrateur) qui augmente le type du système et force l\'erreur statique à zéro en régime permanent. Un correcteur P seul ne peut que la réduire sans jamais l\'annuler ($\\varepsilon = \\frac{1}{1+K} > 0$).'
      },
      {
        q: 'La FTBF d\'un système à retour unitaire dont la FTBO vaut $T(p)$ est :',
        options: [
          '$\\dfrac{T(p)}{1 + T(p)}$',
          '$\\dfrac{1}{1 + T(p)}$',
          '$T(p) \\times (1 + T(p))$',
          '$1 - T(p)$'
        ],
        answer: 0,
        correction: 'Avec un retour unitaire ($H = 1$), la FTBO est $T(p) = C(p) \\cdot G(p)$. La FTBF est alors $\\dfrac{T(p)}{1 + T(p)}$. C\'est la formule fondamentale de l\'automatique linéaire, dite « formule de Black ».'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['erreur', 'gain_ftbf', 'gain_boucle']);
        if (scenario === 'erreur') {
          const G0 = rand(2, 20);
          const Kp = rand(2, 15);
          const K = G0 * Kp;
          const eps = parseFloat((100 / (1 + K)).toFixed(1));
          return {
            statement: `Un système à retour unitaire possède un procédé de gain statique $G_0 = ${G0}$ et un correcteur proportionnel de gain $K_p = ${Kp}$. Calcule l'erreur statique en pourcentage.`,
            answer: eps,
            tolerance: 0.5,
            unit: '%',
            hint: `Le gain de boucle est $K = K_p \\times G_0 = ${Kp} \\times ${G0} = ${K}$. L'erreur statique est $\\varepsilon = \\dfrac{1}{1 + K}$.`,
            solution: [
              `Gain de boucle : $K = K_p \\times G_0 = ${Kp} \\times ${G0} = ${K}$`,
              `$\\varepsilon = \\dfrac{1}{1 + K} = \\dfrac{1}{1 + ${K}} = \\dfrac{1}{${1 + K}}$`,
              `$\\varepsilon = ${(1 / (1 + K)).toFixed(4)} = ${eps}\\%$`
            ]
          };
        } else if (scenario === 'gain_ftbf') {
          const G0 = rand(5, 50);
          const Kp = rand(1, 10);
          const K = G0 * Kp;
          const ftbf0 = parseFloat((K / (1 + K)).toFixed(3));
          return {
            statement: `Un système à retour unitaire a un gain de boucle $K = K_p \\times G_0 = ${Kp} \\times ${G0} = ${K}$. Calcule le gain statique de la FTBF (arrondi à $0{,}001$).`,
            answer: ftbf0,
            tolerance: 0.005,
            unit: '',
            hint: `Le gain statique de la FTBF ($p = 0$) est $\\text{FTBF}(0) = \\dfrac{K}{1 + K}$.`,
            solution: [
              `$\\text{FTBF}(0) = \\dfrac{K}{1 + K} = \\dfrac{${K}}{${1 + K}}$`,
              `$\\text{FTBF}(0) = ${ftbf0}$`
            ]
          };
        } else {
          const G0 = rand(2, 15);
          const eps_target = pick([2, 5, 10]);
          const K_needed = parseFloat(((100 / eps_target) - 1).toFixed(0));
          const Kp_needed = parseFloat((K_needed / G0).toFixed(1));
          return {
            statement: `Un procédé a un gain statique $G_0 = ${G0}$. On souhaite une erreur statique de $${eps_target}\\%$ avec un correcteur P. Quel gain $K_p$ faut-il ? (arrondi à $0{,}1$)`,
            answer: Kp_needed,
            tolerance: 0.2,
            unit: '',
            hint: `L'erreur statique est $\\varepsilon = \\dfrac{1}{1 + K_p G_0}$. Résous pour $K_p$ avec $\\varepsilon = ${eps_target / 100}$.`,
            solution: [
              `$\\varepsilon = \\dfrac{1}{1 + K_p G_0} = ${eps_target / 100}$`,
              `$1 + K_p \\times ${G0} = ${100 / eps_target}$, donc $K_p \\times ${G0} = ${K_needed}$`,
              `$K_p = \\dfrac{${K_needed}}{${G0}} = ${Kp_needed}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On régule la vitesse d\'un moteur à courant continu. Le procédé a une fonction de transfert $G(p) = \\dfrac{5}{1 + 0{,}5 p}$ (gain statique $G_0 = 5$, constante de temps $\\tau = 0{,}5$ s). Le retour est unitaire. On teste trois correcteurs : P ($K_p = 4$), PI ($K_p = 4$, $K_i = 2$) et PID ($K_p = 4$, $K_i = 2$, $K_d = 0{,}5$).',
      tasks: [
        'Avec le correcteur P ($K_p = 4$), calculer le gain de boucle $K$ et l\'erreur statique $\\varepsilon$ en pourcentage.',
        'Expliquer pourquoi le correcteur PI annule l\'erreur statique. Donner l\'expression de la FTBO avec le correcteur PI.',
        'Décrire précisément l\'effet de chaque composante $K_p$, $K_i$, $K_d$ du correcteur PID sur la réponse temporelle.'
      ],
      solutions: [
        '$K = K_p \\times G_0 = 4 \\times 5 = 20$. $\\varepsilon = \\dfrac{1}{1 + 20} = \\dfrac{1}{21} \\approx 4{,}8\\%$.',
        'Le terme $\\dfrac{K_i}{p}$ apporte un intégrateur en boucle ouverte (pôle en $p = 0$), ce qui augmente le type du système de 0 à 1. Pour une entrée échelon, un système de type $\\geq 1$ a une erreur statique nulle. FTBO : $C(p) \\cdot G(p) = \\left(4 + \\dfrac{2}{p}\\right) \\cdot \\dfrac{5}{1 + 0{,}5p} = \\dfrac{5(4p + 2)}{p(1 + 0{,}5p)}$.',
        '$K_p$ (P) : agit proportionnellement à l\'erreur instantanée → améliore la rapidité mais peut créer du dépassement si trop grand. $K_i$ (I) : intègre l\'erreur accumulée → annule l\'erreur statique mais peut dégrader la stabilité (marge de phase réduite). $K_d$ (D) : réagit à la dérivée de l\'erreur → anticipe les variations, amortit les oscillations, réduit le dépassement, mais amplifie le bruit haute fréquence.'
      ],
      finalAnswer: 'Correcteur P : $\\varepsilon \\approx 4{,}8\\%$. Le PI annule $\\varepsilon$ grâce à l\'intégrateur. Le PID combine les trois actions pour un compromis précision-rapidité-stabilité.'
    },

    evaluation: {
      title: 'Évaluation — Systèmes asservis (PID)',
      duration: '20 min',
      questions: [
        {
          statement: 'Un système à retour unitaire a un gain de boucle $K = 19$. Quelle est son erreur statique en pourcentage ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$\\varepsilon = \\dfrac{1}{1 + 19} = \\dfrac{1}{20} = 0{,}05 = 5\\%$.'
        },
        {
          statement: 'La FTBO d\'un système à retour unitaire vaut $G = \\dfrac{20}{1 + 4p}$. Donner le gain statique de la FTBF (valeur numérique arrondie à $0{,}01$).',
          type: 'numeric',
          answer: 0.95,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$\\text{FTBF} = \\dfrac{G}{1 + G} = \\dfrac{20/(1+4p)}{1 + 20/(1+4p)} = \\dfrac{20}{21 + 4p}$. Gain statique ($p = 0$) : $\\dfrac{20}{21} \\approx 0{,}952$.'
        },
        {
          statement: 'Quel correcteur annule l\'erreur statique pour une entrée échelon ?',
          type: 'multiple-choice',
          options: ['P seul', 'D seul', 'PI ou PID', 'Aucun correcteur'],
          answer: 2,
          points: 3,
          correction: 'Le terme intégral $K_i / p$ introduit un pôle à l\'origine qui augmente le type du système et annule l\'erreur statique en régime permanent pour une entrée échelon. Seuls les correcteurs PI et PID contiennent ce terme.'
        },
        {
          statement: 'Un correcteur PID a pour expression $C(p) = 3 + \\dfrac{2}{p} + 0{,}5 p$. Donner la somme $K_p + K_i + K_d$.',
          type: 'numeric',
          answer: 5.5,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'Par identification : $K_p = 3$, $K_i = 2$, $K_d = 0{,}5$. Somme : $3 + 2 + 0{,}5 = 5{,}5$.'
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────
     4. Modélisation des systèmes séquentiels (GRAFCET)
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-grafcet',
    level: 2, subject: 'si',
    icon: '📋',
    title: 'Modélisation des systèmes séquentiels (GRAFCET)',
    subtitle: 'Étapes, transitions, 5 règles d\'évolution, divergences, macro-étapes',
    keywords: ['GRAFCET', 'Étape', 'Transition', 'Action', 'Séquentiel', 'Divergence'],
    physics: 'Automatisation industrielle : chaînes de production, robots de soudure, distributeurs automatiques, feux tricolores — tout système dont le comportement suit une séquence d\'opérations.',

    cours: {
      intro: 'Le <strong>GRAFCET</strong> (GRAphe Fonctionnel de Commande Étape-Transition) est un outil normalisé (<strong>norme IEC 60848</strong>) pour modéliser le comportement séquentiel d\'un système automatisé. Il est utilisé pour la programmation d\'automates programmables industriels (API).<br/><br/>' +
        'Un GRAFCET se compose de trois éléments fondamentaux :<br/>' +
        '- <strong>Étapes</strong> : états du système, représentées par des carrés numérotés (l\'étape initiale a un double contour). Chaque étape est soit active, soit inactive.<br/>' +
        '- <strong>Transitions</strong> : conditions de passage entre étapes (réceptivités), représentées par des barres horizontales.<br/>' +
        '- <strong>Actions</strong> : opérations effectuées quand une étape est active, placées dans un rectangle à droite de l\'étape.<br/><br/>' +
        'Le GRAFCET respecte <strong>5 règles d\'évolution</strong> qui garantissent un fonctionnement déterministe. Il permet aussi des structures avancées : <strong>divergence en OU</strong> (choix entre chemins exclusifs, simple trait), <strong>divergence en ET</strong> (parallélisme, double trait), et <strong>macro-étapes</strong> (sous-GRAFCET encapsulé dans une étape, pour la modularité).<br/><br/>' +
        'Une <strong>macro-étape</strong> est une étape qui contient elle-même un GRAFCET complet (expansion). Elle permet de structurer des automatismes complexes de manière hiérarchique. On la représente par un carré avec des barres horizontales en haut et en bas.',

      definitions: [
        { term: 'Étape', def: 'État du système, représenté par un carré numéroté. L\'étape initiale a un double contour. Une étape est soit active soit inactive à tout instant.' },
        { term: 'Transition', def: 'Condition logique de passage entre l\'étape amont et l\'étape aval. Représentée par un trait horizontal. Associée à une réceptivité (condition booléenne).' },
        { term: 'Réceptivité', def: 'Condition logique associée à une transition (capteur, temporisation, combinaison logique). La transition n\'est franchissable que si la réceptivité est vraie.' },
        { term: 'Divergence en OU', def: 'Choix exclusif entre plusieurs branches (simple trait). Une seule branche est activée, selon la première réceptivité validée. Les réceptivités doivent être mutuellement exclusives.' },
        { term: 'Divergence en ET', def: 'Activation simultanée de plusieurs branches parallèles (double trait). Toutes les branches s\'exécutent en même temps. La convergence en ET attend la fin de toutes les branches.' },
        { term: 'Macro-étape', def: 'Étape composite contenant un sous-GRAFCET (expansion). Permet de structurer hiérarchiquement des automatismes complexes. Notée avec des barres horizontales en haut et en bas du carré.' }
      ],

      method: {
        title: 'Construire et analyser un GRAFCET',
        steps: [
          '<strong>Identifier les étapes</strong> : lister tous les états distincts du système (repos, ouverture, fermeture, attente, etc.).<br/>L\'étape initiale (E0) correspond à l\'état du système à la mise sous tension.',
          '<strong>Définir les transitions</strong> : pour chaque passage d\'une étape à la suivante, formuler la réceptivité (capteur, bouton, temporisation, combinaison logique).<br/>Exemple : « capteur fin de course ET bouton validé ».',
          '<strong>Associer les actions</strong> : à chaque étape active, indiquer les actions (moteur ON, vérin sorti, vanne ouverte). Les actions se notent dans des rectangles à droite de l\'étape.',
          '<strong>Vérifier l\'alternance</strong> : un GRAFCET alterne <strong>toujours</strong> étape – transition – étape. Jamais deux étapes consécutives sans transition, ni deux transitions consécutives sans étape.',
          '<strong>Structures avancées</strong> : utiliser divergence en OU (simple trait, choix) si le système a des modes alternatifs, ou divergence en ET (double trait, parallélisme) si des actions s\'exécutent simultanément. Utiliser des macro-étapes pour encapsuler des sous-séquences complexes.'
        ]
      },

      example: {
        statement: 'Un portail automatique a 3 étapes : E0 (fermé, attente), E1 (ouverture en cours), E2 (ouvert, temporisation). Décrire les transitions.',
        steps: [
          'Transition T0→1 : « Bouton pressé ET portail fermé »',
          'Transition T1→2 : « Capteur fin de course ouverture activé »',
          'Transition T2→0 : « Temporisation de 10 s écoulée »'
        ],
        answer: 'GRAFCET à 3 étapes bouclé : E0 → T01 → E1 → T12 → E2 → T20 → E0.'
      },

      formulas: [
        'Règle 1 — Situation initiale : à la mise en énergie, seules les étapes initiales sont actives',
        'Règle 2 — Franchissement : une transition est franchie si l\'étape amont est active ET la réceptivité est vraie',
        'Règle 3 — Évolution : le franchissement d\'une transition active l\'étape aval et désactive l\'étape amont (simultanément)',
        'Règle 4 — Franchissements simultanés : plusieurs transitions simultanément franchissables sont franchies simultanément',
        'Règle 5 — Priorité : si une étape doit être simultanément activée et désactivée, elle reste active'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Règle</th><th style="border:1px solid var(--border);padding:8px">Intitulé</th><th style="border:1px solid var(--border);padding:8px">Description</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R1</strong></td><td style="border:1px solid var(--border);padding:8px">Situation initiale</td><td style="border:1px solid var(--border);padding:8px">À la mise sous énergie, seules les étapes initiales (double contour) sont actives</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R2</strong></td><td style="border:1px solid var(--border);padding:8px">Franchissement</td><td style="border:1px solid var(--border);padding:8px">Transition franchie si étape amont active ET réceptivité vraie</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R3</strong></td><td style="border:1px solid var(--border);padding:8px">Évolution des étapes actives</td><td style="border:1px solid var(--border);padding:8px">Le franchissement active l\'étape aval et désactive l\'étape amont simultanément</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R4</strong></td><td style="border:1px solid var(--border);padding:8px">Franchissements simultanés</td><td style="border:1px solid var(--border);padding:8px">Plusieurs transitions franchissables en même temps sont franchies simultanément</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>R5</strong></td><td style="border:1px solid var(--border);padding:8px">Activation et désactivation simultanées</td><td style="border:1px solid var(--border);padding:8px">Si une étape doit être activée et désactivée au même instant, elle reste active</td></tr></table>',

      recap: [
        'Un GRAFCET modélise un système séquentiel avec des étapes, des transitions et des actions.',
        'Les 5 règles d\'évolution (R1 à R5) garantissent un fonctionnement déterministe et sans ambiguïté.',
        'Divergence en OU (simple trait) = choix exclusif ; divergence en ET (double trait) = parallélisme.',
        'Les macro-étapes permettent de décomposer un automatisme complexe en sous-GRAFCET modulaires.'
      ],

      piege: 'Ne confonds pas divergence en OU et divergence en ET ! En OU, un simple trait sépare les branches et une SEULE branche est activée (choix exclusif — les réceptivités doivent être mutuellement exclusives). En ET, un double trait indique que TOUTES les branches sont activées simultanément. Autre erreur fréquente : oublier l\'alternance obligatoire étape-transition-étape.'
    },

    quiz: [
      {
        q: 'Selon la règle R2 du GRAFCET, une transition est franchie quand :',
        options: [
          'L\'étape amont est active ET la réceptivité est vraie',
          'La réceptivité est vraie, quel que soit l\'état des étapes',
          'L\'étape aval est inactive ET la réceptivité est vraie',
          'Toutes les étapes du GRAFCET sont actives'
        ],
        answer: 0,
        correction: 'La règle R2 (franchissement) stipule qu\'une transition ne peut être franchie que si l\'étape immédiatement amont est active ET que la réceptivité associée est vérifiée. Les deux conditions sont nécessaires simultanément.'
      },
      {
        q: 'Selon la règle R5, si une étape doit être simultanément activée et désactivée, elle :',
        options: [
          'Reste active (l\'activation est prioritaire)',
          'Est désactivée (la désactivation est prioritaire)',
          'Provoque une erreur dans l\'automate',
          'Alterne entre active et inactive'
        ],
        answer: 0,
        correction: 'La règle R5 du GRAFCET stipule que si une étape est simultanément activée (par franchissement d\'une transition amont) et désactivée (par franchissement d\'une transition aval), elle reste active. L\'activation est toujours prioritaire sur la désactivation.'
      },
      {
        q: 'Un GRAFCET linéaire bouclé possède 5 étapes (E0 à E4). Combien de transitions comporte-t-il ?',
        options: [
          '5 transitions',
          '4 transitions',
          '6 transitions',
          '10 transitions'
        ],
        answer: 0,
        correction: 'Avec 5 étapes en boucle (E0 → E1 → E2 → E3 → E4 → E0), il y a 5 transitions : T01, T12, T23, T34 et T40. En cycle bouclé, le nombre de transitions est égal au nombre d\'étapes.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['boucle', 'non_boucle', 'parallele']);
        if (scenario === 'parallele') {
          const nbMain = rand(3, 6);
          const nbBranch1 = rand(2, 4);
          const nbBranch2 = rand(2, 4);
          const totalEtapes = nbMain + nbBranch1 + nbBranch2;
          const totalTransitions = nbMain + nbBranch1 + nbBranch2 + 1;
          return {
            statement: `Un GRAFCET comporte une séquence principale de $${nbMain}$ étapes, puis une divergence en ET ouvrant $2$ branches parallèles de $${nbBranch1}$ et $${nbBranch2}$ étapes respectivement, suivie d'une convergence en ET et d'un retour à l'étape initiale. Combien d'étapes au total comporte ce GRAFCET ?`,
            answer: totalEtapes,
            tolerance: 0,
            unit: 'étapes',
            hint: `Compte les étapes de la séquence principale ($${nbMain}$) plus celles des deux branches parallèles ($${nbBranch1} + ${nbBranch2}$).`,
            solution: [
              `Séquence principale : $${nbMain}$ étapes`,
              `Branche 1 : $${nbBranch1}$ étapes, Branche 2 : $${nbBranch2}$ étapes`,
              `Total : $${nbMain} + ${nbBranch1} + ${nbBranch2} = ${totalEtapes}$ étapes`
            ]
          };
        } else {
          const nbEtapes = rand(4, 12);
          const boucle = scenario === 'boucle';
          const nbTransitions = boucle ? nbEtapes : nbEtapes - 1;
          const desc = boucle
            ? `Un GRAFCET linéaire comporte $${nbEtapes}$ étapes (de E0 à E${nbEtapes - 1}) avec un retour à l'étape initiale E0 (cycle bouclé). Combien de transitions comporte-t-il ?`
            : `Un GRAFCET linéaire comporte $${nbEtapes}$ étapes (de E0 à E${nbEtapes - 1}) sans retour à l'étape initiale. Combien de transitions comporte-t-il ?`;
          return {
            statement: desc,
            answer: nbTransitions,
            tolerance: 0,
            unit: 'transitions',
            hint: boucle
              ? `En cycle bouclé, chaque étape est suivie d'une transition, y compris la dernière qui revient à E0.`
              : `Sans boucle, il y a une transition entre chaque paire d'étapes consécutives, soit $n - 1$ transitions pour $n$ étapes.`,
            solution: [
              `Nombre d'étapes : $${nbEtapes}$`,
              boucle ? `Cycle bouclé : autant de transitions que d'étapes` : `Sans boucle : $${nbEtapes} - 1 = ${nbTransitions}$ transitions`,
              `Nombre de transitions : $${nbTransitions}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On modélise le fonctionnement d\'une perceuse automatique. Le cycle est le suivant : E0 (attente, pièce en place) → E1 (descente du foret) → E2 (perçage à vitesse lente) → E3 (remontée du foret) → retour E0. La transition de E0 à E1 est « bouton départ cycle ET capteur pièce présente ». La transition de E1 à E2 est « capteur contact foret-pièce ». La transition de E2 à E3 est « capteur profondeur atteinte ». La transition de E3 à E0 est « capteur position haute foret ».',
      tasks: [
        'Combien d\'étapes et de transitions comporte ce GRAFCET ? Quelle est l\'étape initiale ?',
        'Lister les actions associées à chaque étape. Quelle règle du GRAFCET impose l\'alternance étape-transition ?',
        'Si on ajoute un arrêt d\'urgence qui renvoie à E0 depuis n\'importe quelle étape, quel mécanisme du GRAFCET faut-il utiliser ?'
      ],
      solutions: [
        '4 étapes (E0, E1, E2, E3) et 4 transitions (T01, T12, T23, T30) car le cycle boucle. L\'étape initiale est E0 (double contour), conformément à la règle R1.',
        'E0 → aucune action (attente) ; E1 → « moteur descente ON » ; E2 → « moteur rotation ON + descente lente » ; E3 → « moteur remontée ON ». L\'alternance étape-transition-étape est imposée par la structure même du GRAFCET (définition normative IEC 60848).',
        'Un arrêt d\'urgence depuis n\'importe quelle étape nécessite un <strong>forçage de GRAFCET</strong> (ou un GRAFCET hiérarchique). On utilise un GRAFCET de sécurité (GS) qui peut forcer le GRAFCET de conduite (GC) dans la situation initiale {E0}. C\'est plus propre que d\'ajouter une divergence en OU depuis chaque étape.'
      ],
      finalAnswer: '4 étapes, 4 transitions, cycle bouclé. L\'arrêt d\'urgence se gère par forçage via un GRAFCET de sécurité hiérarchique.'
    },

    evaluation: {
      title: 'Évaluation — GRAFCET',
      duration: '20 min',
      questions: [
        {
          statement: 'Un GRAFCET linéaire bouclé comporte 7 étapes. Combien de transitions possède-t-il ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'En cycle bouclé, le nombre de transitions est égal au nombre d\'étapes : 7 transitions pour 7 étapes.'
        },
        {
          statement: 'Selon la règle R2, une transition est franchie quand :',
          type: 'multiple-choice',
          options: [
            'L\'étape amont est active ET la réceptivité est vraie',
            'L\'étape aval est inactive ET la réceptivité est vraie',
            'La réceptivité est vraie, indépendamment des étapes',
            'Toutes les étapes du GRAFCET sont actives'
          ],
          answer: 0,
          points: 2,
          correction: 'Règle R2 : une transition est franchie si et seulement si l\'étape immédiatement amont est active ET la réceptivité associée est vraie.'
        },
        {
          statement: 'Quelle est la différence graphique entre une divergence en OU et une divergence en ET ?',
          type: 'multiple-choice',
          options: [
            'OU = simple trait horizontal ; ET = double trait horizontal',
            'OU = double trait ; ET = simple trait',
            'OU = trait pointillé ; ET = trait plein',
            'Pas de différence graphique'
          ],
          answer: 0,
          points: 3,
          correction: 'La divergence en OU (choix exclusif) utilise un simple trait horizontal, tandis que la divergence en ET (parallélisme, activation simultanée de toutes les branches) utilise un double trait horizontal. La convergence suit la même logique.'
        },
        {
          statement: 'Un GRAFCET linéaire NON bouclé possède 8 étapes. Combien de transitions a-t-il ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Sans boucle de retour, le nombre de transitions est le nombre d\'étapes moins 1 : $8 - 1 = 7$ transitions.'
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────
     5. Transmission de puissance (engrenages, courroies)
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-transmission',
    level: 2, subject: 'si',
    icon: '⚙️',
    title: 'Transmission de puissance',
    subtitle: 'Engrenages, courroies, vis-écrou, rapport de réduction, rendement',
    keywords: ['Engrenage', 'Courroie', 'Rapport de réduction', 'Couple', 'Vitesse', 'Rendement'],
    physics: 'Boîte de vitesses automobile, réducteur de robot, vélo (dérailleur), convoyeur industriel, éolienne — tout mécanisme convertissant vitesse et couple.',

    cours: {
      intro: 'La <strong>transmission de puissance</strong> consiste à transférer le mouvement de rotation d\'un arbre moteur (entrée) vers un arbre récepteur (sortie) en adaptant la vitesse et le couple. Les trois systèmes principaux sont les <strong>engrenages</strong>, les <strong>courroies-poulies</strong> et les <strong>vis-écrou</strong>.<br/><br/>' +
        'Le <strong>rapport de transmission</strong> (ou rapport de réduction) est : $r = \\dfrac{\\omega_s}{\\omega_e} = \\dfrac{N_s}{N_e}$. Pour un engrenage simple : $r = \\pm \\dfrac{Z_e}{Z_s}$, où $Z$ est le nombre de dents. Le signe dépend du type d\'engrenage : pour un <strong>engrenage extérieur</strong> (dentures opposées), les sens de rotation sont inversés ($r < 0$ en convention signée, ou on prend $|r|$ et on note l\'inversion séparément). Pour un <strong>engrenage intérieur</strong>, les deux roues tournent dans le même sens. Pour une <strong>courroie</strong> : $r = \\dfrac{D_e}{D_s}$ (même sens de rotation) ; pour une courroie croisée, le sens est inversé.<br/><br/>' +
        'Si $|r| < 1$ → réducteur (vitesse diminuée, couple augmenté). Si $|r| > 1$ → multiplicateur. La <strong>puissance</strong> se conserve aux pertes près : $P_s = \\eta \\times P_e$, où $\\eta$ est le rendement ($0 < \\eta \\leq 1$). La relation fondamentale couple-puissance est $P = C \\times \\omega$, d\'où $C = \\dfrac{P}{\\omega}$. Le couple de sortie s\'exprime : $C_s = \\dfrac{\\eta}{|r|} \\times C_e$.<br/><br/>' +
        'Pour un <strong>système vis-écrou</strong>, le mouvement de rotation est converti en translation. Le pas $p$ (en mm/tour) donne : $v = \\dfrac{p \\times N}{60}$ (en mm/s, avec $N$ en tr/min).',

      definitions: [
        { term: 'Rapport de transmission', def: '$r = \\dfrac{\\omega_s}{\\omega_e} = \\dfrac{N_s}{N_e}$. Pour un engrenage : $|r| = \\dfrac{Z_e}{Z_s}$. Si $|r| < 1$ : réducteur ; si $|r| > 1$ : multiplicateur.' },
        { term: 'Rendement', def: '$\\eta = \\dfrac{P_s}{P_e}$ — rapport entre puissance utile en sortie et puissance fournie en entrée. Les pertes ($1 - \\eta$) sont dues aux frottements et à l\'échauffement.' },
        { term: 'Couple de sortie', def: '$C_s = \\dfrac{\\eta}{|r|} \\times C_e$ (en N·m). Un réducteur ($|r| < 1$) multiplie le couple par $\\dfrac{1}{|r|}$ (facteur $> 1$), modulo le rendement.' },
        { term: 'Train d\'engrenages', def: 'Enchaînement de plusieurs étages d\'engrenages. Le rapport global est le produit des rapports : $r_{\\text{total}} = r_1 \\times r_2 \\times \\ldots$ Le rendement global est le produit des rendements.' },
        { term: 'Système vis-écrou', def: 'Convertit une rotation en translation. Vitesse de translation : $v = p \\times N / 60$ (mm/s), où $p$ est le pas (mm/tour) et $N$ la vitesse de rotation (tr/min).' }
      ],

      method: {
        title: 'Calculer une transmission',
        steps: [
          '<strong>Identifier entrée et sortie</strong> : arbre moteur (entrée, indice $e$) et arbre récepteur (sortie, indice $s$).<br/>Repérer le type de transmission (engrenages, courroie, vis-écrou).',
          '<strong>Calculer le rapport</strong> : engrenage → $|r| = \\dfrac{Z_e}{Z_s}$ ; courroie-poulie → $r = \\dfrac{D_e}{D_s}$ ; train d\'engrenages → $r_{\\text{total}} = \\prod r_i$.<br/>Pour un engrenage extérieur, noter l\'inversion du sens de rotation.',
          '<strong>Vitesse de sortie</strong> : $\\omega_s = |r| \\times \\omega_e$ (ou $N_s = |r| \\times N_e$ en tr/min).',
          '<strong>Puissance de sortie</strong> : $P_s = \\eta \\times P_e$. Pour un train, $\\eta_{\\text{total}} = \\eta_1 \\times \\eta_2 \\times \\ldots$',
          '<strong>Couple de sortie</strong> : $C_s = \\dfrac{P_s}{\\omega_s} = \\dfrac{\\eta}{|r|} \\times C_e$.<br/>Vérification : un réducteur ($|r| < 1$) donne $C_s > C_e$ (multiplication du couple).'
        ]
      },

      example: {
        statement: 'Un moteur tourne à $N_e = 3000$ tr/min et entraîne un pignon de $Z_e = 20$ dents engrenant avec une roue de $Z_s = 60$ dents. Rendement $\\eta = 0{,}95$. Calculer la vitesse de sortie et le facteur de multiplication du couple.',
        steps: [
          '$|r| = \\dfrac{Z_e}{Z_s} = \\dfrac{20}{60} = \\dfrac{1}{3}$',
          '$N_s = |r| \\times N_e = \\dfrac{1}{3} \\times 3000 = 1000$ tr/min',
          'Facteur couple : $\\dfrac{\\eta}{|r|} = \\dfrac{0{,}95}{1/3} = 2{,}85$. Le couple est multiplié par $2{,}85$.'
        ],
        answer: '$|r| = 1/3$, $N_s = 1000$ tr/min, couple multiplié par $2{,}85$'
      },

      formulas: [
        '$r = \\dfrac{\\omega_s}{\\omega_e} = \\dfrac{Z_e}{Z_s}$ — Rapport de transmission (engrenage)',
        '$P = C \\times \\omega$ — Relation couple-puissance',
        '$P_s = \\eta \\times P_e$ — Conservation de la puissance avec rendement',
        '$C_s = \\dfrac{\\eta}{|r|} \\times C_e$ — Couple de sortie',
        '$v = \\dfrac{p \\times N}{60}$ — Vitesse linéaire (vis-écrou, $p$ en mm/tour)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Rapport $|r|$</th><th style="border:1px solid var(--border);padding:8px">Sens de rotation</th><th style="border:1px solid var(--border);padding:8px">Rendement typique</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Engrenage extérieur</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{Z_e}{Z_s}$</td><td style="border:1px solid var(--border);padding:8px">Inversé</td><td style="border:1px solid var(--border);padding:8px">$0{,}95$ à $0{,}98$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Engrenage intérieur</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{Z_e}{Z_s}$</td><td style="border:1px solid var(--border);padding:8px">Même sens</td><td style="border:1px solid var(--border);padding:8px">$0{,}95$ à $0{,}98$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Courroie (directe)</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{D_e}{D_s}$</td><td style="border:1px solid var(--border);padding:8px">Même sens</td><td style="border:1px solid var(--border);padding:8px">$0{,}90$ à $0{,}95$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Vis sans fin</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{Z_s}$ (1 filet)</td><td style="border:1px solid var(--border);padding:8px">Perpendiculaire</td><td style="border:1px solid var(--border);padding:8px">$0{,}40$ à $0{,}70$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Vis-écrou</strong></td><td style="border:1px solid var(--border);padding:8px">$v = p \\times N / 60$</td><td style="border:1px solid var(--border);padding:8px">Rotation → Translation</td><td style="border:1px solid var(--border);padding:8px">$0{,}30$ à $0{,}90$</td></tr></table>',

      recap: [
        'Un réducteur ($|r| < 1$) diminue la vitesse et augmente le couple. Un multiplicateur ($|r| > 1$) fait l\'inverse.',
        'Le rapport global d\'un train d\'engrenages est le produit des rapports élémentaires, le rendement global le produit des rendements.',
        'Pour un engrenage extérieur, le sens de rotation est inversé à chaque étage.',
        'La puissance se conserve ($P = C \\omega$) : réduire la vitesse multiplie le couple par $1/|r|$.'
      ],

      piege: 'Attention au sens du rapport ! $|r| = Z_e / Z_s$ donne $|\\omega_s / \\omega_e|$. Si on inverse ($Z_s / Z_e$), on obtient le rapport inverse. Pour un réducteur, $Z_s > Z_e$ donc $|r| < 1$. Autre erreur classique : oublier le rendement $\\eta$ dans le calcul du couple de sortie — sans $\\eta$, le couple est surestimé. Enfin, pour un engrenage extérieur, ne pas oublier l\'inversion du sens de rotation.'
    },

    quiz: [
      {
        q: 'Un pignon de $Z_e = 15$ dents entraîne une roue de $Z_s = 45$ dents. Le rapport de réduction est :',
        options: [
          '$|r| = 1/3$',
          '$|r| = 3$',
          '$|r| = 15$',
          '$|r| = 45$'
        ],
        answer: 0,
        correction: '$|r| = \\dfrac{Z_e}{Z_s} = \\dfrac{15}{45} = \\dfrac{1}{3}$. La vitesse de sortie est $3$ fois plus faible que celle d\'entrée : c\'est bien un réducteur ($|r| < 1$).'
      },
      {
        q: 'Pour un engrenage extérieur simple (un seul contact), le sens de rotation de la roue de sortie par rapport au pignon d\'entrée est :',
        options: [
          'Inversé (sens contraire)',
          'Le même',
          'Aléatoire',
          'Perpendiculaire'
        ],
        answer: 0,
        correction: 'Dans un engrenage extérieur, les deux roues tournent en sens contraire. Pour conserver le même sens, il faut soit un engrenage intérieur, soit une roue intermédiaire (roue folle), soit une courroie directe.'
      },
      {
        q: 'Un réducteur ($|r| = 1/4$, $\\eta = 1$) reçoit un couple moteur $C_e = 2$ N·m. Le couple de sortie est :',
        options: [
          '$C_s = 8$ N·m',
          '$C_s = 2$ N·m',
          '$C_s = 0{,}5$ N·m',
          '$C_s = 32$ N·m'
        ],
        answer: 0,
        correction: '$C_s = \\dfrac{\\eta}{|r|} \\times C_e = \\dfrac{1}{1/4} \\times 2 = 4 \\times 2 = 8$ N·m. Réduire la vitesse d\'un facteur $4$ multiplie le couple par $4$ (conservation de la puissance avec $\\eta = 1$).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['vitesse', 'couple', 'train']);
        if (scenario === 'vitesse') {
          const Ze = rand(10, 30);
          const factor = rand(2, 6);
          const Zs = Ze * factor;
          const Ne = rand(1000, 4000);
          const Ns = parseFloat((Ne / factor).toFixed(0));
          return {
            statement: `Un moteur tourne à $N_e = ${Ne}$ tr/min. Il entraîne un pignon de $Z_e = ${Ze}$ dents engrenant avec une roue de $Z_s = ${Zs}$ dents. Calcule la vitesse de sortie $N_s$ (en tr/min).`,
            answer: Ns,
            tolerance: 1,
            unit: 'tr/min',
            hint: `Le rapport est $|r| = \\dfrac{Z_e}{Z_s} = \\dfrac{${Ze}}{${Zs}}$. La vitesse de sortie est $N_s = |r| \\times N_e$.`,
            solution: [
              `$|r| = \\dfrac{Z_e}{Z_s} = \\dfrac{${Ze}}{${Zs}} = \\dfrac{1}{${factor}}$`,
              `$N_s = |r| \\times N_e = \\dfrac{1}{${factor}} \\times ${Ne}$`,
              `$N_s = ${Ns}$ tr/min`
            ]
          };
        } else if (scenario === 'couple') {
          const Ce = rand(2, 20);
          const factor = rand(2, 5);
          const eta = pick([0.85, 0.9, 0.95]);
          const Cs = parseFloat((eta * factor * Ce).toFixed(1));
          return {
            statement: `Un réducteur ($|r| = 1/${factor}$, $\\eta = ${eta.toFixed(2).replace('.', '{,')}$) reçoit un couple moteur $C_e = ${Ce}$ N·m. Calcule le couple de sortie $C_s$ (en N·m).`,
            answer: Cs,
            tolerance: 0.5,
            unit: 'N·m',
            hint: `$C_s = \\dfrac{\\eta}{|r|} \\times C_e = \\dfrac{${eta.toFixed(2).replace('.', '{,')}}{1/${factor}} \\times ${Ce}$.`,
            solution: [
              `$C_s = \\dfrac{\\eta}{|r|} \\times C_e = \\dfrac{${eta.toFixed(2).replace('.', '{,')}}{1/${factor}} \\times ${Ce}$`,
              `$C_s = ${eta.toFixed(2).replace('.', '{,')} \\times ${factor} \\times ${Ce}$`,
              `$C_s = ${Cs}$ N·m`
            ]
          };
        } else {
          const r1_den = rand(2, 4);
          const r2_den = rand(2, 5);
          const Ne = rand(1000, 3000);
          const r_total = 1 / (r1_den * r2_den);
          const Ns = parseFloat((Ne * r_total).toFixed(0));
          return {
            statement: `Un train d'engrenages à 2 étages a $r_1 = 1/${r1_den}$ et $r_2 = 1/${r2_den}$. Le moteur tourne à $N_e = ${Ne}$ tr/min. Calcule la vitesse de sortie $N_s$ (en tr/min).`,
            answer: Ns,
            tolerance: 1,
            unit: 'tr/min',
            hint: `Le rapport global est $r_{\\text{total}} = r_1 \\times r_2 = \\dfrac{1}{${r1_den}} \\times \\dfrac{1}{${r2_den}} = \\dfrac{1}{${r1_den * r2_den}}$.`,
            solution: [
              `$r_{\\text{total}} = r_1 \\times r_2 = \\dfrac{1}{${r1_den}} \\times \\dfrac{1}{${r2_den}} = \\dfrac{1}{${r1_den * r2_den}}$`,
              `$N_s = r_{\\text{total}} \\times N_e = \\dfrac{1}{${r1_den * r2_den}} \\times ${Ne}$`,
              `$N_s = ${Ns}$ tr/min`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un réducteur à deux étages est utilisé dans un convoyeur. Étage 1 : pignon $Z_1 = 18$ dents → roue $Z_2 = 54$ dents. Étage 2 : pignon $Z_3 = 15$ dents (solidaire de la roue $Z_2$) → roue $Z_4 = 60$ dents. Le moteur tourne à $N_e = 1500$ tr/min et fournit $P_e = 2$ kW. Le rendement global est $\\eta = 0{,}85$.',
      tasks: [
        'Calculer le rapport de réduction global $r_{\\text{total}}$.',
        'Déterminer la vitesse de sortie $N_s$ en tr/min.',
        'Calculer le couple de sortie $C_s$ en N·m. (Rappel : $\\omega = 2\\pi N / 60$)'
      ],
      solutions: [
        '$r_1 = \\dfrac{Z_1}{Z_2} = \\dfrac{18}{54} = \\dfrac{1}{3}$. $r_2 = \\dfrac{Z_3}{Z_4} = \\dfrac{15}{60} = \\dfrac{1}{4}$. $r_{\\text{total}} = r_1 \\times r_2 = \\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12}$.',
        '$N_s = r_{\\text{total}} \\times N_e = \\dfrac{1}{12} \\times 1500 = 125$ tr/min.',
        '$\\omega_s = \\dfrac{2\\pi \\times 125}{60} \\approx 13{,}09$ rad/s. $P_s = \\eta \\times P_e = 0{,}85 \\times 2000 = 1700$ W. $C_s = \\dfrac{P_s}{\\omega_s} = \\dfrac{1700}{13{,}09} \\approx 129{,}9$ N·m.'
      ],
      finalAnswer: '$r = 1/12$, $N_s = 125$ tr/min, $C_s \\approx 130$ N·m. Le réducteur divise la vitesse par 12 et multiplie le couple d\'un facteur $\\approx 10{,}2$ (après pertes).'
    },

    evaluation: {
      title: 'Évaluation — Transmission de puissance',
      duration: '20 min',
      questions: [
        {
          statement: 'Un pignon de $20$ dents entraîne une roue de $80$ dents. Quel est le rapport de réduction $|r|$ ? Donner la valeur décimale.',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$|r| = \\dfrac{Z_e}{Z_s} = \\dfrac{20}{80} = 0{,}25$. C\'est un réducteur : la vitesse est divisée par $4$.'
        },
        {
          statement: 'Un moteur tourne à $2400$ tr/min avec un rapport de réduction $|r| = 1/6$. Quelle est la vitesse de sortie (en tr/min) ?',
          type: 'numeric',
          answer: 400,
          tolerance: 1,
          unit: 'tr/min',
          points: 2,
          correction: '$N_s = |r| \\times N_e = \\dfrac{1}{6} \\times 2400 = 400$ tr/min.'
        },
        {
          statement: 'La relation entre couple $C$, puissance $P$ et vitesse angulaire $\\omega$ est :',
          type: 'multiple-choice',
          options: ['$C = P \\times \\omega$', '$C = P / \\omega$', '$C = \\omega / P$', '$C = P^2 / \\omega$'],
          answer: 1,
          points: 2,
          correction: '$P = C \\times \\omega$, donc $C = P / \\omega$ (en N·m quand $P$ est en W et $\\omega$ en rad/s).'
        },
        {
          statement: 'Un moteur fournit un couple $C_e = 10$ N·m via un réducteur ($|r| = 1/5$, $\\eta = 0{,}9$). Quel est le couple de sortie (en N·m) ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0.5,
          unit: 'N·m',
          points: 2,
          correction: '$C_s = \\dfrac{\\eta}{|r|} \\times C_e = \\dfrac{0{,}9}{0{,}2} \\times 10 = 4{,}5 \\times 10 = 45$ N·m.'
        },
        {
          statement: 'Un réducteur à 2 étages a $r_1 = 1/3$ et $r_2 = 1/4$. Le rapport global est (donner la valeur décimale arrondie à $0{,}001$) :',
          type: 'numeric',
          answer: 0.083,
          tolerance: 0.002,
          unit: '',
          points: 2,
          correction: '$r_{\\text{total}} = r_1 \\times r_2 = \\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12} \\approx 0{,}083$.'
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────
     6. Analyse fréquentielle (Bode)
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-bode',
    level: 2, subject: 'si',
    icon: '📈',
    title: 'Analyse fréquentielle (Bode)',
    subtitle: 'Gain en dB, phase, fréquence de coupure, 1er et 2nd ordre',
    keywords: ['Bode', 'Gain', 'Phase', 'Fréquence de coupure', 'Décibel', 'Facteur de qualité'],
    physics: 'Filtrage audio (égaliseurs, enceintes), télécommunications (bande passante), capteurs industriels (filtrage du bruit), systèmes asservis (marges de stabilité).',

    cours: {
      intro: 'Le <strong>diagramme de Bode</strong> est l\'outil fondamental de l\'analyse fréquentielle en automatique et en électronique. Il représente le comportement d\'un système linéaire en fonction de la fréquence (ou de la pulsation $\\omega$) sur une échelle logarithmique.<br/><br/>' +
        'Il comprend <strong>deux courbes</strong> :<br/>' +
        '- Le <strong>gain</strong> : $G_{\\text{dB}} = 20 \\log|H(j\\omega)|$ (en décibels). Un gain de $0$ dB signifie $|H| = 1$ ; un gain de $20$ dB signifie $|H| = 10$ ; un gain de $-20$ dB signifie $|H| = 0{,}1$.<br/>' +
        '- La <strong>phase</strong> : $\\varphi = \\arg(H(j\\omega))$ (en degrés).<br/><br/>' +
        '<strong>Système du 1er ordre</strong> (passe-bas) : $H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$. La pulsation de coupure est $\\omega_c$ (ou $f_c = \\omega_c / 2\\pi$). À $\\omega = \\omega_c$, le gain chute de $-3$ dB et la phase vaut $-45°$. L\'asymptote haute fréquence a une pente de $-20$ dB/décade. La phase varie de $0°$ (BF) à $-90°$ (HF).<br/><br/>' +
        '<strong>Système du 2nd ordre</strong> : $H(j\\omega) = \\dfrac{H_0}{1 + 2m\\dfrac{j\\omega}{\\omega_0} + \\left(\\dfrac{j\\omega}{\\omega_0}\\right)^2}$, où $m$ est le coefficient d\'amortissement et $\\omega_0$ la pulsation propre. Si $m < 0{,}707$, il y a une <strong>résonance</strong> (pic de gain) au voisinage de $\\omega_0$. Le facteur de qualité est $Q = \\dfrac{1}{2m}$. L\'asymptote HF a une pente de $-40$ dB/décade et la phase varie de $0°$ à $-180°$.',

      definitions: [
        { term: 'Gain en décibels', def: '$G_{\\text{dB}} = 20 \\log|H(j\\omega)|$. Échelle logarithmique : $0$ dB $\\Leftrightarrow |H| = 1$, $20$ dB $\\Leftrightarrow |H| = 10$, $-6$ dB $\\Leftrightarrow |H| \\approx 0{,}5$.' },
        { term: 'Fréquence de coupure', def: 'Pulsation $\\omega_c$ (ou fréquence $f_c = \\omega_c / 2\\pi$) à laquelle le gain a chuté de $3$ dB par rapport au gain maximal. Définit la limite de la bande passante.' },
        { term: 'Passe-bas du 1er ordre', def: '$H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$. Pente asymptotique : $-20$ dB/décade. Phase à $\\omega_c$ : $-45°$.' },
        { term: 'Passe-bas du 2nd ordre', def: '$H(j\\omega) = \\dfrac{H_0}{1 + 2m (j\\omega/\\omega_0) + (j\\omega/\\omega_0)^2}$. Pente HF : $-40$ dB/décade. Résonance si $m < 0{,}707$.' },
        { term: 'Facteur de qualité', def: '$Q = \\dfrac{1}{2m}$ — caractérise l\'acuité de la résonance. Plus $Q$ est grand ($m$ petit), plus le pic de résonance est prononcé.' }
      ],

      method: {
        title: 'Tracer et exploiter un diagramme de Bode',
        steps: [
          '<strong>Identifier $H(j\\omega)$</strong> : écrire la fonction de transfert sous forme canonique. Identifier l\'ordre (1er ou 2nd) et les paramètres ($H_0$, $\\omega_c$ ou $\\omega_0$, $m$).',
          '<strong>Gain statique</strong> : calculer $H_0 = |H(0)|$ et $G_0 = 20 \\log(H_0)$ dB.<br/>Exemple : $H_0 = 10 \\Rightarrow G_0 = 20$ dB.',
          '<strong>Pulsation de coupure / propre</strong> : 1er ordre → $\\omega_c$ dans le dénominateur. 2nd ordre → $\\omega_0 = \\sqrt{\\text{coeff. de } \\omega^2}$ et $m = \\text{coeff. de } j\\omega/(2\\omega_0)$.',
          '<strong>Tracer les asymptotes</strong> : BF → horizontale à $G_0$. HF → pente $-20$ dB/déc (1er ordre) ou $-40$ dB/déc (2nd ordre). Raccordement à $\\omega_c$ ($-3$ dB) ou $\\omega_0$.',
          '<strong>Phase</strong> : 1er ordre → de $0°$ à $-90°$, passant par $-45°$ à $\\omega_c$. 2nd ordre → de $0°$ à $-180°$, passant par $-90°$ à $\\omega_0$.'
        ]
      },

      example: {
        statement: 'Un filtre passe-bas du 1er ordre a un gain statique $H_0 = 10$ et une pulsation de coupure $\\omega_c = 100$ rad/s. Déterminer $G_0$, $f_c$ et les caractéristiques à $\\omega_c$.',
        steps: [
          '$G_0 = 20 \\log(10) = 20$ dB',
          '$f_c = \\dfrac{\\omega_c}{2\\pi} = \\dfrac{100}{2\\pi} \\approx 15{,}9$ Hz',
          'À $\\omega = \\omega_c$ : $G = G_0 - 3 = 17$ dB, $|H| = H_0/\\sqrt{2} \\approx 7{,}07$ et $\\varphi = -45°$'
        ],
        answer: '$G_0 = 20$ dB, $f_c \\approx 15{,}9$ Hz, gain à la coupure : $17$ dB'
      },

      formulas: [
        '$G_{\\text{dB}} = 20 \\log|H(j\\omega)|$ — Gain en décibels',
        '$f_c = \\dfrac{\\omega_c}{2\\pi}$ — Fréquence de coupure (Hz)',
        '$H(j\\omega) = \\dfrac{H_0}{1 + j\\omega/\\omega_c}$ — Passe-bas 1er ordre ($-20$ dB/déc)',
        '$|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}}$ — Module à la coupure ($-3$ dB)',
        '$Q = \\dfrac{1}{2m}$ — Facteur de qualité (2nd ordre)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Caractéristique</th><th style="border:1px solid var(--border);padding:8px">1er ordre</th><th style="border:1px solid var(--border);padding:8px">2nd ordre</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Fonction de transfert</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{H_0}{1 + j\\omega/\\omega_c}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{H_0}{1 + 2m(j\\omega/\\omega_0) + (j\\omega/\\omega_0)^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pente asymptotique HF</td><td style="border:1px solid var(--border);padding:8px">$-20$ dB/décade</td><td style="border:1px solid var(--border);padding:8px">$-40$ dB/décade</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Phase à la pulsation caractéristique</td><td style="border:1px solid var(--border);padding:8px">$-45°$ à $\\omega_c$</td><td style="border:1px solid var(--border);padding:8px">$-90°$ à $\\omega_0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Phase en HF ($\\omega \\to \\infty$)</td><td style="border:1px solid var(--border);padding:8px">$-90°$</td><td style="border:1px solid var(--border);padding:8px">$-180°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Résonance</td><td style="border:1px solid var(--border);padding:8px">Aucune</td><td style="border:1px solid var(--border);padding:8px">Si $m < 0{,}707$ (soit $Q > 0{,}707$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Gain à la coupure</td><td style="border:1px solid var(--border);padding:8px">$G_0 - 3$ dB</td><td style="border:1px solid var(--border);padding:8px">$G_0 + 20\\log(Q)$ dB (au pic)</td></tr></table>',

      recap: [
        'Le gain en dB convertit un rapport d\'amplitude en échelle logarithmique : $G = 20 \\log|H|$.',
        'La fréquence de coupure à $-3$ dB définit la limite de la bande passante.',
        'Un 1er ordre : pente $-20$ dB/déc, phase de $0°$ à $-90°$. Un 2nd ordre : pente $-40$ dB/déc, phase de $0°$ à $-180°$.',
        'Un 2nd ordre avec $m < 0{,}707$ présente une résonance (pic de gain). Le facteur de qualité $Q = 1/(2m)$ mesure l\'acuité du pic.'
      ],

      piege: 'Ne confonds pas pulsation $\\omega$ (en rad/s) et fréquence $f$ (en Hz) ! On a $\\omega = 2\\pi f$. La conversion $f_c = \\omega_c / (2\\pi)$ est souvent source d\'erreur par oubli du $2\\pi$. Autre piège : le gain en dB utilise $20 \\log$ pour un gain en tension/amplitude, mais $10 \\log$ pour un gain en puissance — en SI on utilise presque toujours $20 \\log$.'
    },

    quiz: [
      {
        q: 'Le gain en décibels d\'un système dont le module vaut $|H| = 100$ est :',
        options: [
          '$G = 40$ dB',
          '$G = 20$ dB',
          '$G = 100$ dB',
          '$G = 2$ dB'
        ],
        answer: 0,
        correction: '$G_{\\text{dB}} = 20 \\log(100) = 20 \\times \\log(10^2) = 20 \\times 2 = 40$ dB.'
      },
      {
        q: 'Pour un passe-bas du 2nd ordre, la pente asymptotique au-delà de la pulsation propre est :',
        options: [
          '$-40$ dB/décade',
          '$-20$ dB/décade',
          '$-60$ dB/décade',
          '$-6$ dB/décade'
        ],
        answer: 0,
        correction: 'Un système du 2nd ordre atténue de $-40$ dB/décade (soit $-12$ dB/octave) en haute fréquence. Un 1er ordre atténue de $-20$ dB/décade.'
      },
      {
        q: 'À la fréquence de coupure d\'un passe-bas du 1er ordre, la phase vaut :',
        options: [
          '$-45°$',
          '$-90°$',
          '$0°$',
          '$-180°$'
        ],
        answer: 0,
        correction: 'Pour un passe-bas du 1er ordre, la phase varie de $0°$ (BF) à $-90°$ (HF) en passant par $-45°$ exactement à la pulsation de coupure $\\omega_c$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['gain', 'freq', 'module_coupure']);
        if (scenario === 'gain') {
          const H0 = pick([2, 5, 10, 20, 50, 100, 200, 500, 1000]);
          const GdB = parseFloat((20 * Math.log10(H0)).toFixed(1));
          return {
            statement: `Un système a un gain en amplitude $|H| = ${H0}$. Calcule le gain en décibels $G_{\\text{dB}}$ (arrondi à $0{,}1$ dB).`,
            answer: GdB,
            tolerance: 0.2,
            unit: 'dB',
            hint: `Utilise la formule $G_{\\text{dB}} = 20 \\log(|H|)$. Rappel : $\\log(10) = 1$, $\\log(2) \\approx 0{,}301$, $\\log(5) \\approx 0{,}699$.`,
            solution: [
              `$G_{\\text{dB}} = 20 \\log(${H0})$`,
              `$G_{\\text{dB}} = 20 \\times ${Math.log10(H0).toFixed(3)}$`,
              `$G_{\\text{dB}} = ${GdB}$ dB`
            ]
          };
        } else if (scenario === 'freq') {
          const wc = pick([10, 50, 100, 200, 500, 1000, 2000, 5000]);
          const fc = parseFloat((wc / (2 * Math.PI)).toFixed(1));
          return {
            statement: `Un filtre passe-bas du 1er ordre a une pulsation de coupure $\\omega_c = ${wc}$ rad/s. Calcule la fréquence de coupure $f_c$ en Hz (arrondi à $0{,}1$ Hz).`,
            answer: fc,
            tolerance: 0.5,
            unit: 'Hz',
            hint: `La relation entre pulsation et fréquence est $f_c = \\dfrac{\\omega_c}{2\\pi}$. Rappel : $2\\pi \\approx 6{,}283$.`,
            solution: [
              `$f_c = \\dfrac{\\omega_c}{2\\pi} = \\dfrac{${wc}}{2\\pi}$`,
              `$f_c = \\dfrac{${wc}}{6{,}283}$`,
              `$f_c \\approx ${fc}$ Hz`
            ]
          };
        } else {
          const H0 = pick([4, 8, 10, 20, 50]);
          const Hc = parseFloat((H0 / Math.sqrt(2)).toFixed(2));
          return {
            statement: `Un passe-bas du 1er ordre a un gain statique $H_0 = ${H0}$. Quel est le module $|H|$ à la pulsation de coupure $\\omega_c$ ? (arrondi à $0{,}01$)`,
            answer: Hc,
            tolerance: 0.05,
            unit: '',
            hint: `À la coupure, le module vaut $|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}}$.`,
            solution: [
              `$|H(j\\omega_c)| = \\dfrac{H_0}{\\sqrt{2}} = \\dfrac{${H0}}{1{,}414}$`,
              `$|H(j\\omega_c)| \\approx ${Hc}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un capteur de température délivre un signal bruité. On place en sortie un filtre passe-bas du 1er ordre de fonction de transfert $H(j\\omega) = \\dfrac{4}{1 + j\\omega/200}$. Le signal utile a une fréquence de $5$ Hz et le bruit parasite est à $500$ Hz.',
      tasks: [
        'Déterminer le gain statique $G_0$ (en dB) et la fréquence de coupure $f_c$ (en Hz).',
        'Calculer le gain (en dB) à la fréquence du signal utile ($f = 5$ Hz, soit $\\omega = 10\\pi \\approx 31{,}4$ rad/s).',
        'Calculer le gain (en dB) à la fréquence du bruit ($f = 500$ Hz, soit $\\omega = 1000\\pi \\approx 3142$ rad/s). Le filtre est-il efficace ?'
      ],
      solutions: [
        '$G_0 = 20 \\log(4) \\approx 12{,}04$ dB. $f_c = \\dfrac{200}{2\\pi} \\approx 31{,}8$ Hz.',
        '$|H(j 31{,}4)| = \\dfrac{4}{\\sqrt{1 + (31{,}4/200)^2}} = \\dfrac{4}{\\sqrt{1{,}025}} \\approx 3{,}95$. $G \\approx 20 \\log(3{,}95) \\approx 11{,}9$ dB. Le signal utile passe quasiment sans atténuation.',
        '$|H(j 3142)| = \\dfrac{4}{\\sqrt{1 + (3142/200)^2}} \\approx \\dfrac{4}{15{,}7} \\approx 0{,}255$. $G \\approx 20 \\log(0{,}255) \\approx -11{,}9$ dB. Le bruit est atténué d\'environ $24$ dB par rapport au signal utile : le filtre est très efficace.'
      ],
      finalAnswer: 'Le filtre laisse passer le signal utile ($\\approx 12$ dB) et atténue fortement le bruit ($\\approx -12$ dB), soit un écart de $\\sim 24$ dB.'
    },

    evaluation: {
      title: 'Évaluation — Analyse fréquentielle (Bode)',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer le gain en dB pour $|H| = 10$.',
          type: 'numeric',
          answer: 20,
          tolerance: 0.1,
          unit: 'dB',
          points: 2,
          correction: '$G_{\\text{dB}} = 20 \\log(10) = 20 \\times 1 = 20$ dB.'
        },
        {
          statement: 'Un filtre a une pulsation de coupure $\\omega_c = 314$ rad/s. La fréquence de coupure $f_c$ est (en Hz) :',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'Hz',
          points: 2,
          correction: '$f_c = \\dfrac{314}{2\\pi} = \\dfrac{314}{6{,}28} \\approx 50$ Hz.'
        },
        {
          statement: 'Pour un passe-bas du 1er ordre, la pente asymptotique au-delà de $f_c$ est :',
          type: 'multiple-choice',
          options: ['$-20$ dB/décade', '$-40$ dB/décade', '$-6$ dB/décade', '$-10$ dB/décade'],
          answer: 0,
          points: 2,
          correction: 'Un filtre du 1er ordre a une pente de $-20$ dB/décade (ou $-6$ dB/octave). Un 2nd ordre aurait $-40$ dB/décade (ou $-12$ dB/octave).'
        },
        {
          statement: 'Un gain de $G = -6$ dB correspond à un rapport d\'amplitude $|H|$ de :',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$|H| = 10^{G/20} = 10^{-6/20} = 10^{-0{,}3} \\approx 0{,}5$. Un gain de $-6$ dB divise l\'amplitude par $2$.'
        },
        {
          statement: 'Un système du 2nd ordre a un coefficient d\'amortissement $m = 0{,}25$. Son facteur de qualité $Q$ vaut :',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$Q = \\dfrac{1}{2m} = \\dfrac{1}{2 \\times 0{,}25} = \\dfrac{1}{0{,}5} = 2$. Comme $m < 0{,}707$, le système présente une résonance.'
        }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────
     7. Réseaux et protocoles de communication
     ───────────────────────────────────────────────────────── */
  {
    id: 'si-tle-reseaux',
    level: 2, subject: 'si',
    icon: '🌐',
    title: 'Réseaux et protocoles de communication',
    subtitle: 'Modèle TCP/IP, adressage IP, débit, trame Ethernet',
    keywords: ['Réseau', 'Protocole', 'TCP/IP', 'Trame', 'Débit', 'Adresse IP'],
    physics: 'Domotique, IoT industriel, communication entre automates, télémaintenance, voitures connectées — tout système nécessitant un échange de données entre composants.',

    cours: {
      intro: 'Les systèmes pluri-techniques modernes communiquent via des <strong>réseaux informatiques</strong>. La compréhension des protocoles de communication est essentielle en SI pour concevoir et diagnostiquer des systèmes connectés.<br/><br/>' +
        'Le <strong>modèle TCP/IP</strong> (version simplifiée du modèle OSI à 7 couches) organise les communications en <strong>4 couches</strong> :<br/>' +
        '- <strong>Accès réseau</strong> (couche 1) : gère la transmission physique des bits (Ethernet, Wi-Fi, fibre optique). Débits typiques : Fast Ethernet $100$ Mbit/s, Gigabit Ethernet $1$ Gbit/s, Wi-Fi 6 jusqu\'à $9{,}6$ Gbit/s.<br/>' +
        '- <strong>Internet</strong> (couche 2) : routage des paquets via le protocole IP. Chaque appareil a une adresse IP unique sur le réseau.<br/>' +
        '- <strong>Transport</strong> (couche 3) : TCP (fiable, avec acquittement) ou UDP (rapide, sans garantie).<br/>' +
        '- <strong>Application</strong> (couche 4) : HTTP, MQTT, FTP, etc.<br/><br/>' +
        '<strong>Adressage IP (IPv4)</strong> : une adresse IPv4 est codée sur $4$ octets (32 bits), notée en décimal pointé (ex. : $192.168.1.10$). Le <strong>masque de sous-réseau</strong> (ex. : $255.255.255.0$ soit $/24$) sépare la partie réseau de la partie hôte. Deux machines communiquent directement (sans routeur) si et seulement si elles sont dans le même sous-réseau.<br/><br/>' +
        'Le <strong>débit</strong> est le nombre de bits transmis par seconde : $D = \\dfrac{\\text{taille (bits)}}{\\text{temps (s)}}$. Le <strong>débit utile</strong> est inférieur au débit brut à cause de l\'<strong>overhead protocolaire</strong> (en-têtes de trames, acquittements) : $D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$.',

      definitions: [
        { term: 'Débit', def: '$D = \\dfrac{\\text{taille (bits)}}{\\text{temps (s)}}$ en bit/s. Conversions : $1$ Mbit/s $= 10^6$ bit/s. Attention : $1$ octet $= 8$ bits, donc $1$ Mo/s $= 8$ Mbit/s.' },
        { term: 'Adresse IP (IPv4)', def: 'Identifiant logique sur 32 bits (4 octets). Exemple : $192.168.0.1$. Le masque de sous-réseau (ex. : $255.255.255.0$ ou $/24$) distingue la partie réseau de la partie hôte.' },
        { term: 'Masque de sous-réseau', def: 'Détermine quelle partie de l\'adresse IP identifie le réseau. Exemple : avec un masque $/24$ ($255.255.255.0$), les 24 premiers bits sont la partie réseau, les 8 derniers la partie hôte ($2^8 - 2 = 254$ hôtes possibles).' },
        { term: 'Protocole TCP', def: 'Protocole de transport fiable : établissement de connexion (3-way handshake), acquittement de chaque segment, retransmission en cas de perte. Utilisé pour HTTP, FTP, etc.' },
        { term: 'Protocole UDP', def: 'Protocole de transport sans connexion ni acquittement. Plus rapide mais non fiable. Utilisé pour le streaming vidéo, les jeux en ligne, MQTT-SN.' },
        { term: 'Latence', def: 'Temps de propagation d\'un paquet entre émetteur et récepteur. Dépend de la distance, du médium et du nombre de routeurs traversés.' }
      ],

      method: {
        title: 'Calculer un temps de transfert',
        steps: [
          '<strong>Convertir la taille en bits</strong> : $1$ octet $= 8$ bits, $1$ Mo $= 10^6$ octets $= 8 \\times 10^6$ bits.<br/>Exemple : $50$ Mo $= 50 \\times 8 = 400$ Mbit.',
          '<strong>Identifier le débit</strong> : vérifier l\'unité (Mbit/s $\\neq$ Mo/s). Débits courants : Fast Ethernet $100$ Mbit/s, Gigabit $1000$ Mbit/s, Wi-Fi 5 $\\sim 400$ Mbit/s.',
          '<strong>Temps de transfert</strong> : $t = \\dfrac{\\text{taille (bits)}}{\\text{débit (bit/s)}}$.<br/>Exemple : $\\dfrac{400 \\text{ Mbit}}{100 \\text{ Mbit/s}} = 4$ s.',
          '<strong>Débit utile</strong> : si l\'overhead est donné, $D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$. Utiliser $D_{\\text{utile}}$ dans le calcul.',
          '<strong>Latence totale</strong> : $t_{\\text{total}} = t_{\\text{transfert}} + t_{\\text{propagation}}$ si la latence réseau est donnée.'
        ]
      },

      example: {
        statement: 'Un fichier de $10$ Mo est transféré via un réseau Ethernet à $100$ Mbit/s. Calculer le temps de transfert (sans overhead).',
        steps: [
          'Taille en bits : $10$ Mo $= 10 \\times 10^6 \\times 8 = 80 \\times 10^6$ bits $= 80$ Mbit',
          'Débit : $100$ Mbit/s',
          '$t = \\dfrac{80}{100} = 0{,}8$ s'
        ],
        answer: '$t = 0{,}8$ s'
      },

      formulas: [
        '$t = \\dfrac{\\text{taille (bits)}}{\\text{débit (bit/s)}}$ — Temps de transfert',
        '$D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$ — Débit utile',
        '$1$ octet $= 8$ bits ; $1$ Mo $= 10^6$ octets $= 8 \\times 10^6$ bits',
        'Hôtes possibles dans un sous-réseau $/n$ : $2^{32-n} - 2$'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Couche TCP/IP</th><th style="border:1px solid var(--border);padding:8px">Équivalent OSI</th><th style="border:1px solid var(--border);padding:8px">Protocoles / Standards</th><th style="border:1px solid var(--border);padding:8px">Rôle</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>4 — Application</strong></td><td style="border:1px solid var(--border);padding:8px">Couches 5, 6, 7</td><td style="border:1px solid var(--border);padding:8px">HTTP, FTP, MQTT, DNS</td><td style="border:1px solid var(--border);padding:8px">Échange de données applicatives</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>3 — Transport</strong></td><td style="border:1px solid var(--border);padding:8px">Couche 4</td><td style="border:1px solid var(--border);padding:8px">TCP (fiable), UDP (rapide)</td><td style="border:1px solid var(--border);padding:8px">Fiabilité, multiplexage (ports)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>2 — Internet</strong></td><td style="border:1px solid var(--border);padding:8px">Couche 3</td><td style="border:1px solid var(--border);padding:8px">IP (IPv4, IPv6), ICMP</td><td style="border:1px solid var(--border);padding:8px">Adressage logique, routage</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>1 — Accès réseau</strong></td><td style="border:1px solid var(--border);padding:8px">Couches 1, 2</td><td style="border:1px solid var(--border);padding:8px">Ethernet, Wi-Fi, fibre</td><td style="border:1px solid var(--border);padding:8px">Transmission physique, adressage MAC</td></tr></table>',

      recap: [
        'Le modèle TCP/IP a 4 couches : Accès réseau, Internet, Transport, Application.',
        'Le débit se calcule en bit/s : toujours convertir les octets en bits ($\\times 8$) avant de diviser par le débit.',
        'TCP garantit la fiabilité (acquittements, retransmission), UDP privilégie la rapidité.',
        'Le masque de sous-réseau détermine si deux machines sont dans le même réseau (communication directe) ou non (besoin d\'un routeur).'
      ],

      piege: 'La confusion la plus fréquente est entre <strong>bits et octets</strong> ! Un débit de $100$ Mbit/s correspond à $100/8 = 12{,}5$ Mo/s. Pour transférer un fichier de $50$ Mo à $100$ Mbit/s, il faut convertir le fichier en bits ($50 \\times 8 = 400$ Mbit) avant de diviser par le débit. Autre piège : confondre débit brut et débit utile — l\'overhead des protocoles (en-têtes, acquittements) réduit toujours le débit effectif.'
    },

    quiz: [
      {
        q: 'Un fichier de $5$ Mo est transféré via un réseau à $80$ Mbit/s. Le temps de transfert (sans overhead) est :',
        options: [
          '$t = 0{,}5$ s',
          '$t = 0{,}0625$ s',
          '$t = 5$ s',
          '$t = 40$ s'
        ],
        answer: 0,
        correction: 'Taille en bits : $5$ Mo $= 5 \\times 10^6 \\times 8 = 40$ Mbit. $t = \\dfrac{40}{80} = 0{,}5$ s. Bien penser à convertir les Mo en Mbit ($\\times 8$) avant de diviser par le débit !'
      },
      {
        q: 'Le protocole TCP se distingue d\'UDP par :',
        options: [
          'La fiabilité : connexion préalable, acquittement et retransmission des paquets perdus',
          'Un débit toujours supérieur à UDP',
          'L\'absence totale d\'en-têtes protocolaires',
          'L\'impossibilité d\'utiliser des ports'
        ],
        answer: 0,
        correction: 'TCP établit une connexion (3-way handshake), numérote les segments, envoie des acquittements et retransmet les paquets perdus. UDP est plus léger et rapide mais ne garantit ni la livraison ni l\'ordre des paquets.'
      },
      {
        q: 'Deux machines ont les adresses $192.168.1.10$ et $192.168.2.20$ avec un masque $255.255.255.0$ ($/24$). Peuvent-elles communiquer directement ?',
        options: [
          'Non, elles sont dans des sous-réseaux différents ($192.168.1.x$ vs $192.168.2.x$)',
          'Oui, elles sont dans le même réseau',
          'Oui, car elles partagent les deux premiers octets',
          'Impossible à déterminer'
        ],
        answer: 0,
        correction: 'Avec un masque $/24$ ($255.255.255.0$), les 3 premiers octets identifient le réseau. $192.168.1.x \\neq 192.168.2.x$ : elles sont dans des sous-réseaux différents et nécessitent un routeur pour communiquer.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['transfert', 'debit_utile', 'hotes']);
        if (scenario === 'transfert') {
          const tailleMo = rand(1, 100);
          const debitMbps = pick([10, 50, 100, 200, 500, 1000]);
          const tailleMbit = tailleMo * 8;
          const t = parseFloat((tailleMbit / debitMbps).toFixed(2));
          return {
            statement: `Un fichier de $${tailleMo}$ Mo est transféré via un réseau de débit $${debitMbps}$ Mbit/s (sans overhead). Calcule le temps de transfert $t$ (en secondes).`,
            answer: t,
            tolerance: 0.05,
            unit: 's',
            hint: `Convertis d'abord la taille en Mbit : $${tailleMo}$ Mo $= ${tailleMo} \\times 8 = ${tailleMbit}$ Mbit. Puis $t = \\dfrac{\\text{taille}}{\\text{débit}}$.`,
            solution: [
              `Taille en bits : $${tailleMo}$ Mo $= ${tailleMo} \\times 8 = ${tailleMbit}$ Mbit`,
              `$t = \\dfrac{${tailleMbit}}{${debitMbps}}$`,
              `$t = ${t}$ s`
            ]
          };
        } else if (scenario === 'debit_utile') {
          const Dbrut = pick([100, 200, 500, 1000]);
          const overhead = pick([5, 10, 15, 20]);
          const Dutile = parseFloat((Dbrut * (1 - overhead / 100)).toFixed(0));
          return {
            statement: `Un réseau a un débit brut de $${Dbrut}$ Mbit/s et un overhead protocolaire de $${overhead}\\%$. Calcule le débit utile (en Mbit/s).`,
            answer: Dutile,
            tolerance: 1,
            unit: 'Mbit/s',
            hint: `$D_{\\text{utile}} = D_{\\text{brut}} \\times (1 - \\text{overhead})$.`,
            solution: [
              `$D_{\\text{utile}} = ${Dbrut} \\times (1 - ${overhead / 100})$`,
              `$D_{\\text{utile}} = ${Dbrut} \\times ${(1 - overhead / 100).toFixed(2)}$`,
              `$D_{\\text{utile}} = ${Dutile}$ Mbit/s`
            ]
          };
        } else {
          const prefix = pick([24, 25, 26, 27, 28]);
          const hostBits = 32 - prefix;
          const nbHotes = Math.pow(2, hostBits) - 2;
          return {
            statement: `Un sous-réseau IPv4 utilise un masque $/${prefix}$. Combien d'adresses hôtes utilisables sont disponibles ?`,
            answer: nbHotes,
            tolerance: 0,
            unit: 'hôtes',
            hint: `Avec un masque $/${prefix}$, il y a $32 - ${prefix} = ${hostBits}$ bits pour la partie hôte. Nombre d'hôtes utilisables : $2^{${hostBits}} - 2$ (on retire l'adresse réseau et l'adresse de broadcast).`,
            solution: [
              `Bits hôte : $32 - ${prefix} = ${hostBits}$`,
              `Adresses totales : $2^{${hostBits}} = ${Math.pow(2, hostBits)}$`,
              `Hôtes utilisables : $${Math.pow(2, hostBits)} - 2 = ${nbHotes}$ (sans adresse réseau ni broadcast)`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une usine connectée transfère des relevés de capteurs vers un serveur central. Chaque relevé fait $2$ ko ($= 2000$ octets). Il y a $500$ capteurs qui envoient un relevé toutes les secondes. Le réseau Ethernet est à $100$ Mbit/s avec un overhead protocolaire de $5\\%$.',
      tasks: [
        'Calculer le volume de données généré par seconde (en Mbit/s).',
        'Calculer le débit utile du réseau (en Mbit/s).',
        'Déterminer si le réseau est suffisant et calculer le taux d\'utilisation.'
      ],
      solutions: [
        'Volume par seconde : $500 \\times 2000 \\times 8 = 8\\,000\\,000$ bit/s $= 8$ Mbit/s.',
        '$D_{\\text{utile}} = 100 \\times (1 - 0{,}05) = 95$ Mbit/s.',
        'Taux d\'utilisation : $\\dfrac{8}{95} \\approx 8{,}4\\%$. Le réseau est largement suffisant ($< 100\\%$). Il reste environ $87$ Mbit/s de marge.'
      ],
      finalAnswer: 'Le réseau est largement suffisant : $8$ Mbit/s nécessaires sur $95$ Mbit/s disponibles, soit $\\approx 8{,}4\\%$ d\'utilisation.'
    },

    evaluation: {
      title: 'Évaluation — Réseaux et protocoles',
      duration: '20 min',
      questions: [
        {
          statement: 'Convertir $20$ Mo en Mbit.',
          type: 'numeric',
          answer: 160,
          tolerance: 0.1,
          unit: 'Mbit',
          points: 2,
          correction: '$20$ Mo $= 20 \\times 8 = 160$ Mbit ($1$ octet $= 8$ bits).'
        },
        {
          statement: 'Un fichier de $160$ Mbit est transféré à $200$ Mbit/s. Le temps de transfert est (en s) :',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: 's',
          points: 2,
          correction: '$t = \\dfrac{160}{200} = 0{,}8$ s.'
        },
        {
          statement: 'Quel protocole de transport garantit la livraison ordonnée des données ?',
          type: 'multiple-choice',
          options: ['TCP', 'UDP', 'IP', 'Ethernet'],
          answer: 0,
          points: 2,
          correction: 'TCP (Transmission Control Protocol) garantit la fiabilité par acquittement, numérotation des segments et retransmission. UDP est plus rapide mais non fiable. IP (couche réseau) et Ethernet (couche accès) sont à d\'autres niveaux du modèle.'
        },
        {
          statement: 'Un réseau a un débit brut de $500$ Mbit/s et un overhead de $20\\%$. Quel est le débit utile (en Mbit/s) ?',
          type: 'numeric',
          answer: 400,
          tolerance: 1,
          unit: 'Mbit/s',
          points: 2,
          correction: '$D_{\\text{utile}} = 500 \\times (1 - 0{,}2) = 500 \\times 0{,}8 = 400$ Mbit/s.'
        },
        {
          statement: 'Un sous-réseau IPv4 avec un masque $/24$ peut accueillir combien d\'hôtes utilisables ?',
          type: 'numeric',
          answer: 254,
          tolerance: 0,
          unit: 'hôtes',
          points: 2,
          correction: 'Avec $/24$, il reste $32 - 24 = 8$ bits pour la partie hôte. $2^8 - 2 = 256 - 2 = 254$ adresses utilisables (on exclut l\'adresse réseau et le broadcast).'
        }
      ]
    }
  }

);
