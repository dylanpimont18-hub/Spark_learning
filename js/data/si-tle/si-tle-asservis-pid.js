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

      diagram: {
        theme: 'si',
        kicker: 'Schéma-bloc et réponses indicielles comparées',
        title: 'Correcteurs P, PI, PID : erreur statique et dépassement',
        description: 'En haut, la structure générale d\'un asservissement avec correcteur $C(p)$ (réglé en P, PI ou PID) et procédé $G(p)$. En bas, la réponse à un échelon de consigne pour les trois réglages : le P se stabilise sous la consigne (erreur statique), le PI atteint la consigne mais avec un dépassement marqué, le PID l\'atteint plus vite avec un dépassement réduit.',
        svg: `
          <svg viewBox="0 0 500 470" role="img" aria-labelledby="pid-graph-title pid-graph-desc">
            <title id="pid-graph-title">Schema-bloc d'un asservissement et reponses indicielles comparees P, PI, PID</title>
            <desc id="pid-graph-desc">En haut, chaine consigne, comparateur, correcteur C(p), procede G(p), sortie S(p), avec un retour capteur H(p). En bas, trois courbes de reponse a un echelon : le correcteur P se stabilise en dessous de la consigne (erreur statique residuelle), le correcteur PI rejoint la consigne avec un depassement d'environ 31 pourcent, le correcteur PID rejoint la consigne plus vite avec un depassement reduit a environ 3 pourcent.</desc>

            <defs>
              <marker id="arrow-si-tle-pid" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== schema-bloc ===== -->
            <line class="curve-main" x1="38" y1="85" x2="86" y2="85" marker-end="url(#arrow-si-tle-pid)"></line>
            <circle class="frame-line" cx="100" cy="85" r="14" fill="none"></circle>
            <text class="annotation-label" x="84" y="76">+</text>
            <text class="annotation-label" x="104" y="107">−</text>

            <line class="curve-main" x1="114" y1="85" x2="140" y2="85" marker-end="url(#arrow-si-tle-pid)"></line>
            <rect class="frame-line" x="140" y="65" width="80" height="40" fill="none"></rect>
            <text class="annotation-label" x="180" y="90" text-anchor="middle">C(p)</text>
            <text class="label-soft" x="180" y="58" text-anchor="middle">Correcteur (P, PI ou PID)</text>

            <line class="curve-main" x1="220" y1="85" x2="250" y2="85" marker-end="url(#arrow-si-tle-pid)"></line>
            <rect class="frame-line" x="250" y="65" width="90" height="40" fill="none"></rect>
            <text class="annotation-label" x="295" y="90" text-anchor="middle">G(p)</text>
            <text class="label-soft" x="295" y="58" text-anchor="middle">Procédé</text>

            <line class="curve-main" x1="340" y1="85" x2="400" y2="85" marker-end="url(#arrow-si-tle-pid)"></line>
            <text class="annotation-label" x="18" y="78">E(p)</text>
            <text class="annotation-label" x="405" y="80">S(p)</text>

            <line class="curve-main" x1="370" y1="85" x2="370" y2="135" marker-end="url(#arrow-si-tle-pid)"></line>
            <line class="curve-main" x1="370" y1="135" x2="220" y2="135" marker-end="url(#arrow-si-tle-pid)"></line>
            <rect class="frame-line" x="140" y="118" width="80" height="34" fill="none"></rect>
            <text class="annotation-label" x="180" y="140" text-anchor="middle">H(p)</text>
            <text class="label-soft" x="180" y="167" text-anchor="middle">Capteur (retour), H(p) = 1 dans les exemples</text>
            <line class="curve-main" x1="140" y1="135" x2="100" y2="135"></line>
            <line class="curve-main" x1="100" y1="135" x2="100" y2="99" marker-end="url(#arrow-si-tle-pid)"></line>

            <!-- ===== reponses indicielles comparees P / PI / PID (illustration qualitative) ===== -->
            <rect class="frame-line" x="60" y="200" width="400" height="220" fill="none"></rect>
            <line class="grid-line" x1="140" y1="200" x2="140" y2="420"></line>
            <line class="grid-line" x1="220" y1="200" x2="220" y2="420"></line>
            <line class="grid-line" x1="300" y1="200" x2="300" y2="420"></line>
            <line class="grid-line" x1="380" y1="200" x2="380" y2="420"></line>
            <line class="guide-line" x1="60" y1="260" x2="460" y2="260"></line>
            <text class="label-soft" x="250" y="253" text-anchor="middle">consigne E(p) = 1</text>

            <polyline class="curve-main" stroke-dasharray="2 6" points="60,420 68,399.1 76,381.4 84,366.5 92,353.8 100,343.1 108,334 116,326.4 124,319.8 132,314.3 140,309.7 148,305.7 156,302.4 164,299.6 172,297.2 180,295.2 188,293.4 196,292 204,290.8 212,289.7 220,288.9 228,288.1 236,287.5 244,286.9 252,286.5 260,286.1 268,285.8 276,285.5 284,285.3 292,285.1 300,284.9 308,284.8 316,284.7 324,284.6 332,284.5 340,284.4 348,284.3 356,284.3 364,284.2 372,284.2 380,284.2 388,284.1 396,284.1 404,284.1 412,284.1 420,284.1 428,284.1 436,284.1 444,284 452,284 460,284"></polyline>

            <polyline class="curve-main" stroke-dasharray="10 6" points="60,420 68,413.3 76,395.6 84,370.2 92,340.8 100,310.5 108,281.8 116,256.8 124,236.8 132,222.5 140,213.9 148,210.6 156,211.9 164,216.9 172,224.4 180,233.3 188,242.7 196,251.7 204,259.7 212,266.2 220,270.9 228,273.9 236,275.2 244,275 252,273.7 260,271.5 268,268.8 276,265.9 284,263 292,260.5 300,258.4 308,256.8 316,255.8 324,255.3 332,255.3 340,255.7 348,256.3 356,257.1 364,258 372,258.9 380,259.7 388,260.4 396,260.9 404,261.2 412,261.4 420,261.5 428,261.4 436,261.2 444,260.9 452,260.7 460,260.4"></polyline>

            <polyline class="curve-main" points="60,420 68,409.6 76,386.1 84,358.2 92,331.3 100,308 108,289.5 116,275.9 124,266.5 132,260.6 140,257.3 148,255.8 156,255.5 164,255.8 172,256.5 180,257.3 188,258.1 196,258.7 204,259.2 212,259.6 220,259.8 228,260 236,260.1 244,260.1 252,260.1 260,260.1 268,260.1 276,260.1 284,260.1 292,260 300,260 308,260 316,260 324,260 332,260 340,260 348,260 356,260 364,260 372,260 380,260 388,260 396,260 404,260 412,260 420,260 428,260 436,260 444,260 452,260 460,260"></polyline>

            <circle class="plot-point" cx="149.4" cy="210.5" r="5"></circle>
            <text class="annotation-label" x="158" y="200">D(PI) ≈ 31 %</text>
            <circle class="plot-point-alt" cx="155" cy="255.5" r="5"></circle>
            <text class="annotation-label" x="164" y="245">D(PID) ≈ 3 %</text>
            <circle class="plot-point" cx="460" cy="284" r="5"></circle>
            <text class="annotation-label" x="345" y="272" text-anchor="end">erreur résiduelle du P (ε &gt; 0)</text>

            <!-- légende (distinction par pointillés, pas par couleur) -->
            <rect class="grid-line" fill="none" x="354" y="204" width="100" height="48"></rect>
            <line class="curve-main" stroke-dasharray="2 6" x1="360" y1="214" x2="386" y2="214"></line>
            <text class="annotation-label" x="392" y="218">P</text>
            <line class="curve-main" stroke-dasharray="10 6" x1="360" y1="228" x2="386" y2="228"></line>
            <text class="annotation-label" x="392" y="232">PI</text>
            <line class="curve-main" x1="360" y1="242" x2="386" y2="242"></line>
            <text class="annotation-label" x="392" y="246">PID</text>

            <text class="tick-label" x="60" y="435" text-anchor="middle">0</text>
            <text class="tick-label" x="140" y="435" text-anchor="middle">1</text>
            <text class="tick-label" x="220" y="435" text-anchor="middle">2</text>
            <text class="tick-label" x="300" y="435" text-anchor="middle">3</text>
            <text class="tick-label" x="380" y="435" text-anchor="middle">4</text>
            <text class="tick-label" x="460" y="435" text-anchor="middle">5</text>
            <text class="axis-label" x="260" y="452" text-anchor="middle">t (temps, échelle qualitative)</text>
            <text class="tick-label" x="50" y="424" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="264" text-anchor="end">1</text>
            <text class="axis-label" x="15" y="310" text-anchor="middle" transform="rotate(-90 15 310)">s(t)</text>
          </svg>
        `,
        notes: [
          'Correcteur P (proportionnel seul) : la boucle reste du 1er ordre, donc jamais de dépassement, mais une erreur statique subsiste toujours — $\\varepsilon = \\frac{1}{1+K} > 0$ quel que soit le gain de boucle $K$ choisi (formule du cours).',
          'Correcteur PI : le terme intégral $K_i/p$ ajoute un pôle à l\'origine qui annule l\'erreur statique (la sortie rejoint la consigne), mais peut faire apparaître un dépassement plus marqué et ralentir la stabilisation.',
          'Correcteur PID : le terme dérivé $K_d \\cdot p$ amortit les oscillations introduites par l\'intégrateur — dépassement réduit et stabilisation plus rapide qu\'avec le PI seul, tout en conservant une erreur statique nulle.'
        ],
        reading: 'Suis d\'abord le trajet du signal dans le schéma-bloc (consigne → comparateur → correcteur → procédé → sortie, avec le retour du capteur H(p)), puis compare les trois courbes en bas : seule la courbe du P se stabilise sous la ligne pointillée de consigne, les trois courbes sont distinguées par leur tracé (pointillé fin, tirets, trait plein) et non par leur couleur.',
        caption: 'Illustration qualitative des trois réglages P / PI / PID sur un même procédé de principe : les courbes respectent les propriétés démontrées dans le cours (erreur statique du P, annulation par l\'intégrateur, amortissement par le dérivateur) mais ne sont pas le recalcul littéral de l\'exemple chiffré du « Problème » du cours.'
      },

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
              `$\\varepsilon = ${(1 / (1 + K)).toFixed(4).replace('.', '{,}')} = ${String(eps).replace('.', '{,}')}\\%$`
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
              `$\\text{FTBF}(0) = ${String(ftbf0).replace('.', '{,}')}$`
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
            hint: `L'erreur statique est $\\varepsilon = \\dfrac{1}{1 + K_p G_0}$. Résous pour $K_p$ avec $\\varepsilon = ${String(eps_target / 100).replace('.', '{,}')}$.`,
            solution: [
              `$\\varepsilon = \\dfrac{1}{1 + K_p G_0} = ${String(eps_target / 100).replace('.', '{,}')}$`,
              `$1 + K_p \\times ${G0} = ${100 / eps_target}$, donc $K_p \\times ${G0} = ${K_needed}$`,
              `$K_p = \\dfrac{${K_needed}}{${G0}} = ${String(Kp_needed).replace('.', '{,}')}$`
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
