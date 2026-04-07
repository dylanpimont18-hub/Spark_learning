/* =========================================================
   Spark Learning – data/si-tle/si-tle-asservis-pid.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
  });
