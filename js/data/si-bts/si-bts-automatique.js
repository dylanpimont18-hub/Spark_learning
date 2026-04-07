/* =========================================================
   Spark Learning – data/si-bts/si-bts-automatique.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-automatique',
    level: 3, subject: 'si',
    icon: '📊',
    title: 'Automatique',
    subtitle: 'Laplace, 1er et 2nd ordre, stabilité, marges',
    keywords: ['Laplace', 'Fonction de transfert', 'Stabilité', 'Bode', '1er ordre', '2nd ordre'],
    physics: 'L\'automatique est au cœur de la commande industrielle : régulation de température, pilotage de vitesse, asservissement de position, contrôle de niveau, autopilote.',

    cours: {
      intro: 'L\'automatique des systèmes linéaires continus utilise la <strong>transformée de Laplace</strong> pour convertir les équations différentielles en équations algébriques dans le domaine de $s$.<br/><br/>Transformées essentielles : échelon $\\to 1/s$, rampe $\\to 1/s^2$, exponentielle $e^{-at} \\to 1/(s+a)$, dérivée $\\to s\\cdot F(s)$, intégrale $\\to F(s)/s$.<br/><br/>La <strong>fonction de transfert</strong> $H(s) = S(s)/E(s)$ caractérise le comportement entrée-sortie. Le <strong>1er ordre</strong> $H(s) = K/(1+\\tau s)$ est défini par le gain statique $K$ et la constante de temps $\\tau$. La réponse indicielle est une exponentielle : $63\\%$ à $t = \\tau$, $95\\%$ à $t = 3\\tau$, $99\\%$ à $t = 5\\tau$.<br/><br/>Le <strong>2nd ordre</strong> $H(s) = K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$ dépend de $\\omega_n$ (pulsation naturelle) et $\\xi$ (amortissement). Si $\\xi < 1$ : oscillations amorties avec un <strong>premier dépassement</strong> $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$. Si $\\xi = 1$ : régime critique (le plus rapide sans dépassement). Si $\\xi > 1$ : apériodique.<br/><br/>La <strong>stabilité</strong> en boucle fermée est vérifiée par les marges de gain et de phase sur le diagramme de Bode. On vise $M_\\phi \\geq 45°$ et $M_G \\geq 6$ dB.',
      definitions: [
        { term: 'Transformée de Laplace', def: '$F(s) = \\int_0^{+\\infty} f(t)e^{-st}\\,\\mathrm{d}t$. Transforme les dérivées en multiplications par $s$ et les intégrales en divisions par $s$. Outil fondamental de l\'automatique.' },
        { term: 'Fonction de transfert $H(s)$', def: '$H(s) = S(s)/E(s)$. Rapport sortie/entrée dans le domaine de Laplace. Caractérise complètement le comportement dynamique d\'un système linéaire invariant.' },
        { term: 'Système du 1er ordre', def: '$H(s) = K/(1+\\tau s)$. Gain statique $K = H(0)$, constante de temps $\\tau$. Réponse indicielle sans dépassement. Temps de réponse à 5% : $t_r = 3\\tau$.' },
        { term: 'Système du 2nd ordre', def: '$H(s) = K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$. $\\omega_n$ : pulsation naturelle, $\\xi$ : amortissement. Pseudo-pulsation : $\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$.' },
        { term: 'Marge de phase $M_\\phi$', def: 'Complément de la phase de $H(j\\omega)$ par rapport à $-180°$ à la pulsation de coupure ($|H| = 0$ dB). $M_\\phi > 0$ : stable. On vise $M_\\phi \\geq 45°$.' }
      ],
      method: {
        title: 'Identifier les paramètres d\'une fonction de transfert',
        steps: [
          '<strong>1er ordre</strong> $H(s) = K/(1+\\tau s)$ : le gain $K = H(0)$, la constante de temps $\\tau$ se lit à $63\\%$ de la valeur finale sur la réponse indicielle.<br/><strong>Exemple :</strong> $H(s) = 5/(1+0{,}2s)$ → $K = 5$, $\\tau = 0{,}2$ s, $t_{95\\%} = 3 \\times 0{,}2 = 0{,}6$ s.',
          '<strong>2nd ordre</strong> : identifier $\\omega_n$ et $\\xi$ depuis le dénominateur. Le dépassement donne $\\xi$ : $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$.<br/><strong>Exemple :</strong> $H(s) = 300/(s^2+8s+100)$ → $\\omega_n^2 = 100$ → $\\omega_n = 10$ rad/s, $2\\xi\\omega_n = 8$ → $\\xi = 0{,}4$. $D\\% = e^{-\\pi \\times 0{,}4/\\sqrt{1-0{,}16}} \\times 100 = e^{-1{,}37} \\times 100 \\approx 25{,}4\\%$.',
          '<strong>Stabilité</strong> : un système bouclé est stable si tous les pôles de la FTBF ont une partie réelle négative. En pratique, on utilise les marges de Bode : $M_\\phi \\geq 45°$, $M_G \\geq 6$ dB.'
        ]
      },
      example: {
        statement: 'Un système du 2nd ordre a pour réponse indicielle un premier dépassement de $16{,}3\\%$. Déterminer $\\xi$, puis calculer $\\omega_n$ sachant que la pseudo-période est $T_p = 0{,}5$ s.',
        steps: [
          '$D\\% = 16{,}3\\%$ → $D_1 = 0{,}163$. $\\ln(D_1) = -\\pi\\xi/\\sqrt{1-\\xi^2}$. $\\ln(0{,}163) = -1{,}815$.',
          '$1{,}815 = \\pi\\xi/\\sqrt{1-\\xi^2}$ → $1{,}815^2(1-\\xi^2) = \\pi^2\\xi^2$ → $3{,}294 - 3{,}294\\xi^2 = 9{,}87\\xi^2$.',
          '$3{,}294 = 13{,}16\\xi^2$ → $\\xi^2 = 0{,}25$ → $\\xi = 0{,}5$.',
          '$\\omega_p = 2\\pi/T_p = 2\\pi/0{,}5 = 12{,}57$ rad/s. $\\omega_n = \\omega_p/\\sqrt{1-\\xi^2} = 12{,}57/\\sqrt{0{,}75} = 14{,}5$ rad/s.'
        ],
        answer: '$\\xi = 0{,}5$, $\\omega_n = 14{,}5$ rad/s.'
      },
      formulas: [
        '$H(s) = \\dfrac{K}{1 + \\tau s}$ (1er ordre)',
        '$H(s) = \\dfrac{K\\omega_n^2}{s^2 + 2\\xi\\omega_n s + \\omega_n^2}$ (2nd ordre)',
        '$t_{63\\%} = \\tau$, $t_{95\\%} = 3\\tau$, $t_{99\\%} = 5\\tau$',
        '$D\\% = e^{-\\pi\\xi / \\sqrt{1-\\xi^2}} \\times 100$ ($\\xi < 1$)',
        '$\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$ (pseudo-pulsation)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Propriété</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">1er ordre</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">2nd ordre ($\\xi < 1$)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$H(s)$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{K}{1+\\tau s}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{K\\omega_n^2}{s^2+2\\xi\\omega_n s+\\omega_n^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Réponse indicielle</td><td style="border:1px solid var(--border);padding:8px">Exponentielle (sans dépassement)</td><td style="border:1px solid var(--border);padding:8px">Oscillations amorties (dépassement $D\\%$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Gain statique</td><td style="border:1px solid var(--border);padding:8px">$K$</td><td style="border:1px solid var(--border);padding:8px">$K$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Temps de réponse (5%)</td><td style="border:1px solid var(--border);padding:8px">$t_r = 3\\tau$</td><td style="border:1px solid var(--border);padding:8px">$t_r \\approx 3/(\\xi\\omega_n)$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètres clés</td><td style="border:1px solid var(--border);padding:8px">$K$, $\\tau$</td><td style="border:1px solid var(--border);padding:8px">$K$, $\\omega_n$, $\\xi$</td></tr></table>',
      recap: [
        'La transformée de Laplace convertit les équations différentielles en équations algébriques.',
        '1er ordre : $K$ (valeur finale) et $\\tau$ (vitesse de réponse). À $5\\tau$, régime permanent atteint.',
        '2nd ordre : $\\xi < 1$ → oscillations, $\\xi = 1$ → critique, $\\xi > 1$ → apériodique.',
        'Le dépassement $D\\%$ ne dépend que de $\\xi$ : $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$.',
        'Stabilité en boucle fermée : $M_\\phi \\geq 45°$ et $M_G \\geq 6$ dB sur le Bode de la FTBO.'
      ],
      piege: 'Ne pas confondre $\\omega_n$ et $\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$. Les oscillations observées ont pour pulsation $\\omega_p$, pas $\\omega_n$. La période mesurée sur la réponse temporelle est $T_p = 2\\pi/\\omega_p$, et il faut corriger pour retrouver $\\omega_n$.'
    },

    quiz: [
      {
        q: 'Pour un 1er ordre $H(s) = K/(1+\\tau s)$, le temps pour atteindre $95\\%$ de la valeur finale est :',
        options: [
          '$t = \\tau$',
          '$t = 2\\tau$',
          '$t = 3\\tau$',
          '$t = 5\\tau$'
        ],
        answer: 2,
        correction: 'À $t = 3\\tau$ : $1 - e^{-3} \\approx 0{,}95 = 95\\%$. Repères : $\\tau \\to 63\\%$, $3\\tau \\to 95\\%$, $5\\tau \\to 99\\%$.'
      },
      {
        q: 'Un 2nd ordre avec $\\xi = 0{,}3$ et $\\omega_n = 10$ rad/s : le premier dépassement $D\\%$ vaut environ :',
        options: [
          '$D\\% \\approx 5\\%$',
          '$D\\% \\approx 37\\%$',
          '$D\\% \\approx 60\\%$',
          '$D\\% = 0\\%$ (pas de dépassement)'
        ],
        answer: 1,
        correction: '$D\\% = e^{-\\pi \\times 0{,}3 / \\sqrt{1 - 0{,}09}} \\times 100 = e^{-0{,}942/0{,}954} \\times 100 = e^{-0{,}987} \\times 100 \\approx 37{,}3\\%$. Un $\\xi$ de $0{,}3$ donne un dépassement important.'
      },
      {
        q: 'Le gain statique de $H(s) = 6/(s^2 + 4s + 25)$ vaut :',
        options: [
          '$K = 6$',
          '$K = 6/25 = 0{,}24$',
          '$K = 25$',
          '$K = 6/4 = 1{,}5$'
        ],
        answer: 1,
        correction: '$K = H(0) = 6/25 = 0{,}24$. Forme canonique : $K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$ → $\\omega_n^2 = 25$, $K \\times 25 = 6$, donc $K = 0{,}24$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['1er_ordre', '2nd_ordre_D']);
        if (scenario === '1er_ordre') {
          const K = rand(2, 10);
          const tau = randFloat(0.1, 2.0, 1);
          const t95 = parseFloat((3 * tau).toFixed(1));
          return {
            statement: `Un système du 1er ordre a pour fonction de transfert $H(s) = ${K}/(1 + ${String(tau).replace('.', '{,')}s)$. Calcule le temps de réponse à $95\\%$ (en s, arrondi à $0{,}1$ s).`,
            answer: t95,
            tolerance: 0.1,
            unit: 's',
            hint: 'Pour un 1er ordre, $t_{95\\%} = 3\\tau$. Identifie $\\tau$ dans le dénominateur.',
            solution: [
              `$\\tau = ${String(tau).replace('.', '{,')}$ s (coefficient de $s$).`,
              `$t_{95\\%} = 3\\tau = 3 \\times ${String(tau).replace('.', '{,')} = ${String(t95).replace('.', '{,')}$ s.`
            ]
          };
        } else {
          const xi = randFloat(0.2, 0.8, 1);
          const D = parseFloat((Math.exp(-Math.PI * xi / Math.sqrt(1 - xi * xi)) * 100).toFixed(1));
          return {
            statement: `Un système du 2nd ordre a un amortissement $\\xi = ${String(xi).replace('.', '{,')}$. Calcule le premier dépassement $D\\%$ avec la formule $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$ (arrondi à $0{,}1\\%$).`,
            answer: D,
            tolerance: 0.5,
            unit: '%',
            hint: 'Calcule d\'abord $\\pi\\xi/\\sqrt{1-\\xi^2}$, puis l\'exponentielle, puis multiplie par 100.',
            solution: [
              `$1 - \\xi^2 = 1 - ${String(xi).replace('.', '{,')}^2 = ${String(parseFloat((1 - xi * xi).toFixed(2))).replace('.', '{,')}$`,
              `$\\sqrt{1-\\xi^2} = ${String(parseFloat(Math.sqrt(1 - xi * xi).toFixed(3))).replace('.', '{,')}$`,
              `$\\pi\\xi/\\sqrt{1-\\xi^2} = ${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,')}$`,
              `$D\\% = e^{-${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,')}} \\times 100 = ${String(D).replace('.', '{,')}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un asservissement de vitesse est modélisé par une FTBO du 1er ordre $H_{BO}(s) = 10/(1+0{,}5s)$ avec un retour unitaire. On souhaite analyser les performances du système bouclé.',
      tasks: [
        'Écrire la FTBF $H_{BF}(s) = H_{BO}/(1+H_{BO})$ et l\'identifier comme un 1er ordre. Donner $K_{BF}$ et $\\tau_{BF}$.',
        'Calculer l\'erreur statique en régime permanent pour un échelon de consigne $E_0 = 1$ : $\\varepsilon = E_0 / (1 + K_{BO})$.',
        'Un correcteur proportionnel $K_c = 5$ est ajouté (nouvelle FTBO : $5 \\times 10/(1+0{,}5s) = 50/(1+0{,}5s)$). Recalculer $K_{BF}$, $\\tau_{BF}$ et l\'erreur statique. Conclure.'
      ],
      solutions: [
        '$H_{BF} = \\dfrac{10/(1+0{,}5s)}{1+10/(1+0{,}5s)} = \\dfrac{10}{11+0{,}5s} = \\dfrac{10/11}{1+0{,}5s/11}$. $K_{BF} = 10/11 \\approx 0{,}909$. $\\tau_{BF} = 0{,}5/11 \\approx 0{,}045$ s. Le bouclage réduit le gain mais accélère la réponse.',
        '$\\varepsilon = 1/(1+K_{BO}) = 1/(1+10) = 1/11 \\approx 0{,}091 = 9{,}1\\%$.',
        'Avec $K_c = 5$ : $K_{BO} = 50$. $K_{BF} = 50/51 \\approx 0{,}980$. $\\tau_{BF} = 0{,}5/51 \\approx 0{,}0098$ s. $\\varepsilon = 1/51 \\approx 1{,}96\\%$. Le correcteur réduit l\'erreur statique et accélère la réponse, mais augmente le risque d\'instabilité pour un système plus complexe.'
      ],
      finalAnswer: 'Sans correcteur : $K_{BF} = 0{,}909$, $\\tau_{BF} = 45$ ms, $\\varepsilon = 9{,}1\\%$. Avec $K_c = 5$ : $K_{BF} = 0{,}980$, $\\tau_{BF} = 9{,}8$ ms, $\\varepsilon = 2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Automatique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un 1er ordre $H(s) = 8/(1+0{,}4s)$. Le gain statique est :',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$K = H(0) = 8/(1+0) = 8$. Pour un échelon unitaire, la valeur finale est $y_\\infty = K = 8$.'
        },
        {
          statement: 'Le premier dépassement d\'un 2nd ordre avec $\\xi = 0{,}5$ vaut (en %, arrondi à l\'entier) :',
          type: 'numeric',
          answer: 16,
          tolerance: 1,
          unit: '%',
          points: 3,
          correction: '$D\\% = e^{-\\pi \\times 0{,}5 / \\sqrt{1-0{,}25}} \\times 100 = e^{-1{,}814} \\times 100 = 16{,}3\\% \\approx 16\\%$.'
        },
        {
          statement: 'Un 2nd ordre a $\\omega_n = 20$ rad/s et $\\xi = 0{,}6$. Le régime est :',
          type: 'multiple-choice',
          options: [
            'Apériodique ($\\xi > 1$)',
            'Critique ($\\xi = 1$)',
            'Oscillant amorti ($\\xi < 1$)',
            'Instable'
          ],
          answer: 2,
          points: 2,
          correction: '$\\xi = 0{,}6 < 1$ : régime sous-amorti (oscillations amorties). $\\omega_p = 20\\sqrt{1-0{,}36} = 20 \\times 0{,}8 = 16$ rad/s.'
        },
        {
          statement: 'Pour un 1er ordre avec $\\tau = 0{,}2$ s, le temps de réponse à $99\\%$ est :',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: 's',
          points: 3,
          correction: '$t_{99\\%} = 5\\tau = 5 \\times 0{,}2 = 1$ s.'
        }
      ]
    }
  });
