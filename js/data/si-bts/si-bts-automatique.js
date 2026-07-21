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
      diagram: {
        theme: 'si',
        kicker: 'Schéma-bloc et réponse indicielle',
        title: 'Boucle fermée du 2nd ordre : ξ = 0,5, ωn = 14,5 rad/s',
        description: 'En haut, la structure générale d\'un asservissement (comparateur, correcteur, système, retour). En bas, la réponse à un échelon du système du 2nd ordre étudié dans l\'exemple du cours.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="auto-graph-title auto-graph-desc">
            <title id="auto-graph-title">Schema-bloc d'un asservissement et reponse indicielle du 2nd ordre</title>
            <desc id="auto-graph-desc">En haut, chaine consigne, comparateur, correcteur C(p), systeme G(p), sortie S(p), avec un retour H(p). En bas, la reponse a un echelon d'un systeme du 2nd ordre avec un premier depassement de 16,3 pourcent a t=0,25 seconde avant stabilisation a la valeur 1.</desc>

            <defs>
              <marker id="arrow-si-bts-auto" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== schema-bloc ===== -->
            <line class="curve-main" x1="38" y1="85" x2="86" y2="85" marker-end="url(#arrow-si-bts-auto)"></line>
            <circle class="frame-line" cx="100" cy="85" r="14" fill="none"></circle>
            <text class="annotation-label" x="84" y="76">+</text>
            <text class="annotation-label" x="104" y="107">−</text>

            <line class="curve-main" x1="114" y1="85" x2="140" y2="85" marker-end="url(#arrow-si-bts-auto)"></line>
            <rect class="frame-line" x="140" y="65" width="80" height="40" fill="none"></rect>
            <text class="annotation-label" x="180" y="90" text-anchor="middle">C(p)</text>
            <text class="label-soft" x="180" y="58" text-anchor="middle">Correcteur</text>

            <line class="curve-main" x1="220" y1="85" x2="250" y2="85" marker-end="url(#arrow-si-bts-auto)"></line>
            <rect class="frame-line" x="250" y="65" width="90" height="40" fill="none"></rect>
            <text class="annotation-label" x="295" y="90" text-anchor="middle">G(p)</text>
            <text class="label-soft" x="295" y="58" text-anchor="middle">Système</text>

            <line class="curve-main" x1="340" y1="85" x2="400" y2="85" marker-end="url(#arrow-si-bts-auto)"></line>
            <text class="annotation-label" x="18" y="78">E(p)</text>
            <text class="annotation-label" x="405" y="80">S(p)</text>

            <line class="curve-main" x1="370" y1="85" x2="370" y2="135" marker-end="url(#arrow-si-bts-auto)"></line>
            <line class="curve-main" x1="370" y1="135" x2="220" y2="135" marker-end="url(#arrow-si-bts-auto)"></line>
            <rect class="frame-line" x="140" y="118" width="80" height="34" fill="none"></rect>
            <text class="annotation-label" x="180" y="140" text-anchor="middle">H(p)</text>
            <text class="label-soft" x="180" y="167" text-anchor="middle">Capteur (retour)</text>
            <line class="curve-main" x1="140" y1="135" x2="100" y2="135"></line>
            <line class="curve-main" x1="100" y1="135" x2="100" y2="99" marker-end="url(#arrow-si-bts-auto)"></line>

            <!-- ===== reponse indicielle (exemple du cours : xi=0,5 ; wn=14,5 rad/s) ===== -->
            <rect class="frame-line" x="60" y="190" width="380" height="150" fill="none"></rect>
            <line class="grid-line" x1="60" y1="224.6" x2="440" y2="224.6"></line>
            <line class="guide-line" x1="60" y1="205.8" x2="139.2" y2="205.8"></line>
            <line class="guide-line" x1="139.2" y1="205.8" x2="139.2" y2="340"></line>

            <polyline class="curve-main" points="60.0,340.0 62.7,339.1 65.5,336.7 68.2,332.9 70.9,327.9 73.7,322.0 76.4,315.4 79.1,308.2 81.9,300.6 84.6,292.8 87.3,285.0 90.1,277.1 92.8,269.4 95.5,262.0 98.3,254.9 101.0,248.1 103.7,241.9 106.5,236.1 109.2,230.8 111.9,226.0 114.7,221.8 117.4,218.1 120.1,215.0 122.9,212.3 125.6,210.2 128.3,208.5 131.1,207.3 133.8,206.4 136.5,206.0 139.3,205.8 142.0,206.0 144.7,206.4 147.5,207.0 150.2,207.8 152.9,208.8 155.7,209.8 158.4,211.0 161.2,212.2 163.9,213.5 166.6,214.8 169.4,216.1 172.1,217.3 174.8,218.5 177.6,219.7 180.3,220.8 183.0,221.8 185.8,222.8 188.5,223.6 191.2,224.4 194.0,225.1 196.7,225.7 199.4,226.2 202.2,226.6 204.9,227.0 207.6,227.2 210.4,227.4 213.1,227.6 215.8,227.7 218.6,227.7 221.3,227.7 224.0,227.6 226.8,227.5 229.5,227.4 232.2,227.2 235.0,227.0 237.7,226.8 240.4,226.6 243.2,226.4 245.9,226.2 248.6,226.0 251.4,225.8 254.1,225.6 256.8,225.4 259.6,225.2 262.3,225.1 265.0,224.9 267.8,224.8 270.5,224.6 273.2,224.5 276.0,224.4 278.7,224.4 281.4,224.3 284.2,224.2 286.9,224.2 289.6,224.2 292.4,224.1 295.1,224.1 297.8,224.1 300.6,224.1 303.3,224.1 306.0,224.1 308.8,224.2 311.5,224.2 314.2,224.2 317.0,224.3 319.7,224.3 322.4,224.3 325.2,224.4 327.9,224.4 330.6,224.4 333.4,224.5 336.1,224.5 338.8,224.5 341.6,224.5 344.3,224.6 347.1,224.6 349.8,224.6 352.5,224.6 355.3,224.6 358.0,224.7 360.7,224.7 363.5,224.7 366.2,224.7 368.9,224.7 371.7,224.7 374.4,224.7 377.1,224.7 379.9,224.7 382.6,224.7 385.3,224.7 388.1,224.7 390.8,224.7 393.5,224.7 396.3,224.7 399.0,224.7 401.7,224.7 404.5,224.7 407.2,224.7 409.9,224.6 412.7,224.6 415.4,224.6 418.1,224.6 420.9,224.6 423.6,224.6 426.3,224.6 429.1,224.6 431.8,224.6 434.5,224.6 437.3,224.6 440.0,224.6"></polyline>

            <circle class="plot-point" cx="139.2" cy="205.8" r="5"></circle>
            <text class="annotation-label" x="150" y="200">D ≈ 16,3 %</text>
            <text class="label-soft" x="350" y="218" text-anchor="middle">valeur finale s∞ = 1</text>

            <text class="tick-label" x="60" y="352" text-anchor="middle">0</text>
            <text class="tick-label" x="139.2" y="352" text-anchor="middle">0,25</text>
            <text class="tick-label" x="218.3" y="352" text-anchor="middle">0,5</text>
            <text class="tick-label" x="297.5" y="352" text-anchor="middle">0,75</text>
            <text class="tick-label" x="376.7" y="352" text-anchor="middle">1</text>
            <text class="axis-label" x="250" y="368" text-anchor="middle">t (s)</text>
            <text class="tick-label" x="50" y="344" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="228" text-anchor="end">1</text>
            <text class="axis-label" x="15" y="265" text-anchor="middle" transform="rotate(-90 15 265)">s(t)</text>
          </svg>
        `,
        notes: [
          'Le comparateur calcule l\'écart ε(p) = E(p) − retour, jamais directement E(p) − S(p) si le capteur H(p) n\'est pas unitaire.',
          'Avec ξ = 0,5 < 1, la réponse oscille avant de se stabiliser : premier dépassement D ≈ 16,3 % à t ≈ 0,25 s — exactement la valeur calculée dans l\'exemple du cours.',
          'La pseudo-période mesurée sur la courbe (0,5 s entre deux pics) permet de retrouver ωn à partir de ωp = ωn·√(1−ξ²).'
        ],
        reading: 'Suis d\'abord le trajet du signal dans le schéma-bloc, de la consigne à la sortie, puis repère sur la courbe le premier pic (dépassement) et son instant avant de lire la valeur finale en régime permanent.',
        caption: 'Schéma-bloc générique d\'un asservissement et réponse indicielle du système du 2nd ordre de l\'exemple (ξ = 0,5, ωn = 14,5 rad/s, dépassement 16,3 %).'
      },
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
            statement: `Un système du 1er ordre a pour fonction de transfert $H(s) = ${K}/(1 + ${String(tau).replace('.', '{,}')}s)$. Calcule le temps de réponse à $95\\%$ (en s, arrondi à $0{,}1$ s).`,
            answer: t95,
            tolerance: 0.1,
            unit: 's',
            hint: 'Pour un 1er ordre, $t_{95\\%} = 3\\tau$. Identifie $\\tau$ dans le dénominateur.',
            solution: [
              `$\\tau = ${String(tau).replace('.', '{,}')}$ s (coefficient de $s$).`,
              `$t_{95\\%} = 3\\tau = 3 \\times ${String(tau).replace('.', '{,}')} = ${String(t95).replace('.', '{,}')}$ s.`
            ]
          };
        } else {
          const xi = randFloat(0.2, 0.8, 1);
          const D = parseFloat((Math.exp(-Math.PI * xi / Math.sqrt(1 - xi * xi)) * 100).toFixed(1));
          return {
            statement: `Un système du 2nd ordre a un amortissement $\\xi = ${String(xi).replace('.', '{,}')}$. Calcule le premier dépassement $D\\%$ avec la formule $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$ (arrondi à $0{,}1\\%$).`,
            answer: D,
            tolerance: 0.5,
            unit: '%',
            hint: 'Calcule d\'abord $\\pi\\xi/\\sqrt{1-\\xi^2}$, puis l\'exponentielle, puis multiplie par 100.',
            solution: [
              `$1 - \\xi^2 = 1 - ${String(xi).replace('.', '{,}')}^2 = ${String(parseFloat((1 - xi * xi).toFixed(2))).replace('.', '{,}')}$`,
              `$\\sqrt{1-\\xi^2} = ${String(parseFloat(Math.sqrt(1 - xi * xi).toFixed(3))).replace('.', '{,}')}$`,
              `$\\pi\\xi/\\sqrt{1-\\xi^2} = ${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,}')}$`,
              `$D\\% = e^{-${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,}')}} \\times 100 = ${String(D).replace('.', '{,}')}\\%$`
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
