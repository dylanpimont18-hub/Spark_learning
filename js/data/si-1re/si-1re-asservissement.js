/* =========================================================
   Spark Learning – data/si-1re/si-1re-asservissement.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-asservissement',
    level: 2, subject: 'si',
    icon: '🎯',
    title: 'Asservissement et régulation',
    subtitle: 'Boucle ouverte, boucle fermée, consigne, mesure, écart',
    keywords: ['Consigne', 'Mesure', 'Écart', 'Boucle fermée', 'Correcteur'],
    physics: 'L\'asservissement est omniprésent : régulation de vitesse (cruise control), thermostat, pilote automatique, stabilisation de drone. Tout système qui corrige automatiquement une erreur utilise une boucle fermée.',

    cours: {
      intro: 'Un <strong>système asservi</strong> est un système capable de se corriger automatiquement pour que la grandeur de sortie suive la consigne imposée.<br/><br/><strong>Boucle ouverte</strong> : pas de retour d\'information. Si une perturbation survient, le système ne se corrige pas.<br/><br/><strong>Boucle fermée</strong> : un capteur mesure la sortie et la compare à la consigne. La structure est :<br/>Consigne $C$ → Comparateur → Correcteur → Actionneur → Système → Sortie $S$<br/>avec retour par le <strong>Capteur</strong> vers le Comparateur.<br/><br/>Le <strong>signal d\'erreur</strong> (écart) est $\\varepsilon = C - M$ où $M$ est la mesure du capteur. Le correcteur utilise cet écart pour ajuster la commande. L\'objectif est $\\varepsilon \\to 0$.<br/><br/>Un <strong>correcteur proportionnel</strong> de gain $K_p$ produit une commande $U = K_p \\cdot \\varepsilon$. Plus l\'écart est grand, plus la correction est forte.',
      definitions: [
        { term: 'Consigne ($C$)', def: 'Valeur souhaitée de la grandeur de sortie, imposée par l\'utilisateur. Exemple : température souhaitée $= 20°$C.' },
        { term: 'Mesure ($M$)', def: 'Valeur réelle de la sortie, captée par le capteur de retour. Elle peut différer de la consigne à cause de perturbations.' },
        { term: 'Signal d\'erreur ($\\varepsilon$)', def: 'Différence entre consigne et mesure : $\\varepsilon = C - M$. Si $\\varepsilon > 0$, la sortie est trop faible ; si $\\varepsilon < 0$, la sortie dépasse la consigne.' },
        { term: 'Correcteur proportionnel ($K_p$)', def: 'Correcteur qui multiplie l\'écart par un gain constant : $U = K_p \\cdot \\varepsilon$. Simple mais laisse une erreur statique résiduelle en régime permanent.' }
      ],
      method: {
        title: 'Analyser un système asservi',
        steps: [
          '<strong>Boucle ouverte ou fermée</strong> : Étape 1 — Identifier la structure : boucle ouverte (pas de capteur de retour) ou boucle fermée (avec retour) ?\nEn boucle fermée, repérer les $5$ éléments : comparateur, correcteur, actionneur, système, capteur.',
          '<strong>Consigne et mesure</strong> : Étape 2 — Identifier les grandeurs : quelle est la consigne $C$ ? Quelle est la mesure $M$ ? Quelles sont les unités ?\nExemple : pour un régulateur de vitesse, $C$ = vitesse souhaitée (km/h), $M$ = vitesse mesurée.',
          '<strong>Calcul de l\'écart</strong> : Étape 3 — Calculer l\'écart : $\\varepsilon = C - M$.\nSigne positif → la sortie est insuffisante → le correcteur doit augmenter la commande.\nSigne négatif → la sortie est excessive → le correcteur doit diminuer la commande.',
          '<strong>Commande du correcteur</strong> : Étape 4 — Calculer la commande : pour un correcteur proportionnel, $U = K_p \\cdot \\varepsilon$.\nVérifier que la commande est physiquement réalisable (pas de saturation de l\'actionneur).'
        ]
      },
      example: {
        statement: 'Un thermostat est réglé sur $C = 20°$C. Le capteur mesure $M = 18°$C. Le correcteur proportionnel a un gain $K_p = 50$ W/°C. Calculer l\'écart et la puissance de chauffe.',
        steps: [
          'Écart : $\\varepsilon = C - M = 20 - 18 = 2°$C.',
          'Commande (puissance de chauffe) : $P = K_p \\times \\varepsilon = 50 \\times 2 = 100$ W.',
          'Interprétation : la température est en dessous de la consigne ($\\varepsilon > 0$), le chauffage fournit $100$ W pour la faire monter.',
          'Quand la température atteindra $20°$C, $\\varepsilon = 0$ et $P = 0$ W : le chauffage s\'arrêtera.'
        ],
        answer: '$\\varepsilon = 2°$C et $P = 100$ W.'
      },
      diagram: {
        theme: 'si',
        kicker: 'Schéma-bloc de la boucle fermée',
        title: 'Structure d\'un système asservi : les 5 éléments de la boucle fermée',
        description: 'Le comparateur calcule l\'écart ε = C − M entre la consigne et la mesure. Le correcteur, l\'actionneur et le système traduisent cet écart en action physique ; le capteur referme la boucle en mesurant la sortie.',
        svg: `
          <svg viewBox="0 0 500 195" role="img" aria-labelledby="asser-diagram-title asser-diagram-desc">
            <title id="asser-diagram-title">Schema-bloc d'un systeme asservi en boucle fermee</title>
            <desc id="asser-diagram-desc">La consigne C entre dans un comparateur avec la mesure M en retour. L'ecart epsilon alimente le correcteur qui calcule la commande U. L'actionneur agit alors sur le systeme, dont la sortie S est mesuree par le capteur qui renvoie M au comparateur.</desc>

            <defs>
              <marker id="arrow-si-1re-asser" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== entree : consigne C ===== -->
            <line class="curve-main" x1="34" y1="85" x2="56" y2="85" marker-end="url(#arrow-si-1re-asser)"></line>
            <text class="annotation-label" x="10" y="78" text-anchor="start">C</text>

            <!-- ===== comparateur ===== -->
            <circle class="frame-line" cx="70" cy="85" r="14" fill="none"></circle>
            <text class="annotation-label" x="53" y="75">+</text>
            <text class="annotation-label" x="75" y="109">−</text>

            <!-- comparateur -> correcteur : ecart epsilon -->
            <line class="curve-main" x1="84" y1="85" x2="112" y2="85" marker-end="url(#arrow-si-1re-asser)"></line>
            <text class="annotation-label" x="97" y="76" text-anchor="middle">ε</text>

            <!-- ===== correcteur ===== -->
            <rect class="frame-line" x="112" y="65" width="80" height="40" fill="none"></rect>
            <text class="annotation-label" x="152" y="90" text-anchor="middle">Correcteur</text>
            <text class="label-soft" x="152" y="58" text-anchor="middle">gain Kp</text>

            <!-- correcteur -> actionneur : commande U -->
            <line class="curve-main" x1="192" y1="85" x2="218" y2="85" marker-end="url(#arrow-si-1re-asser)"></line>
            <text class="annotation-label" x="205" y="76" text-anchor="middle">U</text>

            <!-- ===== actionneur ===== -->
            <rect class="frame-line" x="218" y="65" width="78" height="40" fill="none"></rect>
            <text class="annotation-label" x="257" y="90" text-anchor="middle">Actionneur</text>

            <!-- actionneur -> systeme -->
            <line class="curve-main" x1="296" y1="85" x2="322" y2="85" marker-end="url(#arrow-si-1re-asser)"></line>

            <!-- ===== systeme ===== -->
            <rect class="frame-line" x="322" y="65" width="88" height="40" fill="none"></rect>
            <text class="annotation-label" x="366" y="90" text-anchor="middle">Système</text>

            <!-- systeme -> sortie S -->
            <line class="curve-main" x1="410" y1="85" x2="452" y2="85" marker-end="url(#arrow-si-1re-asser)"></line>
            <text class="annotation-label" x="459" y="88" text-anchor="start">S</text>

            <!-- ===== retour : sortie S vers capteur ===== -->
            <line class="curve-main" x1="430" y1="85" x2="430" y2="150" marker-end="url(#arrow-si-1re-asser)"></line>
            <line class="curve-main" x1="430" y1="150" x2="338" y2="150" marker-end="url(#arrow-si-1re-asser)"></line>

            <rect class="frame-line" x="258" y="133" width="80" height="34" fill="none"></rect>
            <text class="annotation-label" x="298" y="154" text-anchor="middle">Capteur</text>
            <text class="label-soft" x="298" y="180" text-anchor="middle">mesure la sortie S</text>

            <!-- capteur -> comparateur : mesure M -->
            <line class="curve-main" x1="258" y1="150" x2="70" y2="150"></line>
            <text class="annotation-label" x="164" y="144" text-anchor="middle">M</text>
            <line class="curve-main" x1="70" y1="150" x2="70" y2="99" marker-end="url(#arrow-si-1re-asser)"></line>
          </svg>
        `,
        notes: [
          'Le comparateur calcule l\'écart ε = C − M en soustrayant la mesure du capteur à la consigne — jamais l\'inverse.',
          'Le correcteur proportionnel transforme l\'écart ε en commande U = Kp·ε ; cette commande pilote l\'actionneur, qui agit à son tour sur le système physique.',
          'Le capteur ne mesure pas la consigne mais la sortie réelle S du système, et renvoie cette mesure M au comparateur : c\'est ce retour qui distingue la boucle fermée de la boucle ouverte.'
        ],
        reading: 'Suis d\'abord le trajet du signal de la consigne C à la sortie S, en passant par le comparateur, le correcteur, l\'actionneur et le système, puis repère le chemin de retour du capteur vers le comparateur.',
        caption: 'Schéma-bloc d\'un système asservi en boucle fermée : consigne C, comparateur (± ), correcteur proportionnel (gain Kp), actionneur, système, sortie S, et retour par le capteur (mesure M).'
      },
      formulas: [
        '$\\varepsilon = C - M$ (écart = consigne − mesure)',
        '$U = K_p \\times \\varepsilon$ (commande du correcteur proportionnel)',
        'Boucle fermée : $C \\to [\\text{Comparateur}] \\to [\\text{Correcteur}] \\to [\\text{Actionneur}] \\to [\\text{Système}] \\to S$, puis retour $S \\to [\\text{Capteur}] \\to M$ vers le comparateur',
        'Objectif : $\\varepsilon \\to 0$ (la sortie rejoint la consigne)'
      ],
      recap: [
        'Un système en boucle fermée utilise un capteur pour mesurer la sortie et la comparer à la consigne.',
        'L\'écart $\\varepsilon = C - M$ quantifie l\'erreur entre ce qu\'on veut et ce qu\'on obtient.',
        'Le correcteur proportionnel ajuste la commande : $U = K_p \\cdot \\varepsilon$. Plus $K_p$ est grand, plus la réponse est rapide mais le risque d\'instabilité augmente.',
        'Un correcteur P seul laisse une erreur statique résiduelle. Pour l\'annuler, on ajoute une action intégrale (PI ou PID, vu en Terminale).'
      ],
      piege: 'Un correcteur proportionnel pur <strong>ne garantit pas</strong> un écart nul en régime permanent (il reste une erreur statique). Pour atteindre $\\varepsilon = 0$, il faut ajouter une action intégrale (correcteur PI ou PID, vu en Terminale). Augmenter $K_p$ réduit l\'erreur statique mais peut provoquer des oscillations voire l\'instabilité.'
    },

    quiz: [
      {
        q: 'Un système a une consigne $C = 50$ et une mesure $M = 53$. L\'écart $\\varepsilon$ vaut $-3$. Cela signifie que :',
        options: [
          'La sortie est insuffisante, le correcteur doit augmenter la commande',
          'La sortie dépasse la consigne, le correcteur doit diminuer la commande',
          'Le système est en panne',
          'Le capteur est défaillant'
        ],
        answer: 1,
        correction: '$\\varepsilon = C - M = 50 - 53 = -3$. L\'écart négatif signifie que la mesure <strong>dépasse</strong> la consigne : le correcteur doit réduire la commande pour ramener la sortie vers $50$.'
      },
      {
        q: 'Un correcteur proportionnel de gain $K_p = 10$ reçoit un écart $\\varepsilon = 4$. Si le gain passe à $K_p = 20$, la commande :',
        options: [
          'Reste à $40$',
          'Double et passe à $80$',
          'Diminue de moitié à $20$',
          'Est divisée par $4$'
        ],
        answer: 1,
        correction: 'Avec $K_p = 10$ : $U = 10 \\times 4 = 40$. Avec $K_p = 20$ : $U = 20 \\times 4 = 80$. La commande est <strong>proportionnelle</strong> au gain $K_p$ : doubler le gain double la commande pour un même écart.'
      },
      {
        q: 'Pourquoi un grille-pain avec minuterie est-il considéré comme un système en boucle ouverte ?',
        options: [
          'Parce qu\'il n\'a pas de capteur mesurant le degré de cuisson pour ajuster la durée',
          'Parce qu\'il ne consomme pas d\'énergie',
          'Parce qu\'il n\'a pas de consigne',
          'Parce qu\'il est trop simple pour être un système'
        ],
        answer: 0,
        correction: 'Le grille-pain fonctionne pendant une durée fixée (minuterie) sans mesurer le résultat (degré de cuisson). S\'il n\'y a pas de capteur de retour pour comparer la sortie à la consigne, le système est en <strong>boucle ouverte</strong>. Il ne peut pas corriger les perturbations (pain plus épais, température ambiante différente).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { name: 'un four industriel', consigne: 'température', unite: '°C', C_range: [100, 500], Kp_range: [5, 50], Kp_unit: 'W/°C' },
          { name: 'un régulateur de vitesse', consigne: 'vitesse', unite: 'km/h', C_range: [50, 130], Kp_range: [10, 100], Kp_unit: 'N/(km/h)' },
          { name: 'un système de remplissage', consigne: 'niveau', unite: 'cm', C_range: [20, 80], Kp_range: [2, 30], Kp_unit: 'L/(min·cm)' }
        ]);

        const C = rand(scenario.C_range[0], scenario.C_range[1]);
        const ecart = rand(1, 15);
        const M_val = C - ecart;
        const Kp = rand(scenario.Kp_range[0], scenario.Kp_range[1]);
        const commande = Kp * ecart;

        const askWhat = pick(['ecart', 'commande', 'mesure']);

        if (askWhat === 'ecart') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} est asservi en ${scenario.consigne}. La consigne est $C = ${C}$ ${scenario.unite} et la mesure est $M = ${M_val}$ ${scenario.unite}. Calcule l'écart $\\varepsilon$.`,
            answer: ecart,
            tolerance: 0,
            unit: scenario.unite,
            hint: 'L\'écart est la différence entre la consigne et la mesure : $\\varepsilon = C - M$.',
            solution: [
              'On identifie les grandeurs : $C = ' + C + '$ ' + scenario.unite + ' et $M = ' + M_val + '$ ' + scenario.unite + '.',
              'Formule : $\\varepsilon = C - M$',
              '$\\varepsilon = ' + C + ' - ' + M_val + ' = ' + ecart + '$ ' + scenario.unite
            ]
          };
        } else if (askWhat === 'commande') {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} utilise un correcteur proportionnel de gain $K_p = ${Kp}$ ${scenario.Kp_unit}. L'écart mesuré est $\\varepsilon = ${ecart}$ ${scenario.unite}. Calcule la commande $U$.`,
            answer: commande,
            tolerance: 0.5,
            unit: '',
            hint: 'La commande d\'un correcteur proportionnel est $U = K_p \\times \\varepsilon$.',
            solution: [
              'Formule du correcteur proportionnel : $U = K_p \\times \\varepsilon$',
              `$U = ${Kp} \\times ${ecart}$`,
              `$U = ${commande}$`
            ]
          };
        } else {
          return {
            statement: `${scenario.name.charAt(0).toUpperCase() + scenario.name.slice(1)} a une consigne $C = ${C}$ ${scenario.unite} et un écart $\\varepsilon = ${ecart}$ ${scenario.unite}. Calcule la mesure $M$ du capteur.`,
            answer: M_val,
            tolerance: 0,
            unit: scenario.unite,
            hint: 'On sait que $\\varepsilon = C - M$. Donc $M = C - \\varepsilon$.',
            solution: [
              'On isole $M$ dans la formule de l\'écart : $\\varepsilon = C - M \\Rightarrow M = C - \\varepsilon$',
              `$M = ${C} - ${ecart}$`,
              `$M = ${M_val}$ ${scenario.unite}`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie le système de régulation de température d\'une serre agricole. La consigne est $C = 25°$C. Le capteur de température mesure $M = 21°$C. Le correcteur proportionnel a un gain $K_p = 200$ W/°C. Le radiateur électrique a une puissance maximale de $1000$ W.',
      tasks: [
        'Calculer l\'écart $\\varepsilon$ et la commande de puissance théorique du correcteur.',
        'La puissance commandée dépasse-t-elle la puissance maximale du radiateur ? Que se passe-t-il physiquement ?',
        'Si la température monte à $M = 24°$C, recalculer l\'écart et la nouvelle commande. Commenter l\'évolution.'
      ],
      solutions: [
        '$\\varepsilon = C - M = 25 - 21 = 4°$C. Commande théorique : $P = K_p \\times \\varepsilon = 200 \\times 4 = 800$ W.',
        '$800$ W $< 1000$ W max : la puissance ne dépasse pas la limite, le radiateur peut fournir les $800$ W demandés. Si la commande avait dépassé $1000$ W, le radiateur serait en saturation ($P = 1000$ W max, l\'écart ne diminuerait pas aussi vite).',
        '$\\varepsilon = 25 - 24 = 1°$C. $P = 200 \\times 1 = 200$ W. La puissance décroît au fur et à mesure que la température se rapproche de la consigne : c\'est le principe même de la régulation proportionnelle. L\'écart a été divisé par $4$, la puissance aussi.'
      ],
      finalAnswer: 'Initialement : $\\varepsilon = 4°$C, $P = 800$ W. Après montée : $\\varepsilon = 1°$C, $P = 200$ W. La régulation réduit progressivement la puissance.'
    },

    evaluation: {
      title: 'Évaluation — Asservissement et régulation',
      duration: '20 min',
      questions: [
        {
          statement: 'Quel élément différencie une boucle fermée d\'une boucle ouverte ?',
          type: 'multiple-choice',
          options: [
            'La présence d\'un actionneur',
            'La présence d\'un capteur de retour et d\'un comparateur',
            'La présence d\'une consigne',
            'La présence d\'une perturbation'
          ],
          answer: 1,
          points: 2,
          correction: 'La boucle fermée ajoute un <strong>capteur de retour</strong> (qui mesure la sortie) et un <strong>comparateur</strong> (qui calcule $\\varepsilon = C - M$). C\'est ce retour d\'information qui permet la correction automatique.'
        },
        {
          statement: 'La consigne est $C = 100$ tr/min et la mesure est $M = 85$ tr/min. Calculer l\'écart $\\varepsilon$.',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: 'tr/min',
          points: 2,
          correction: '$\\varepsilon = C - M = 100 - 85 = 15$ tr/min.'
        },
        {
          statement: 'Un correcteur proportionnel de gain $K_p = 0{,}5$ V/(tr/min) reçoit un écart de $15$ tr/min. Quelle est la tension de commande ?',
          type: 'numeric',
          answer: 7.5,
          tolerance: 0.1,
          unit: 'V',
          points: 3,
          correction: '$U = K_p \\times \\varepsilon = 0{,}5 \\times 15 = 7{,}5$ V.'
        },
        {
          statement: 'Un écart négatif ($\\varepsilon < 0$) signifie que :',
          type: 'multiple-choice',
          options: [
            'La mesure est inférieure à la consigne',
            'La mesure dépasse la consigne',
            'Le système est en panne',
            'Le capteur est défaillant'
          ],
          answer: 1,
          points: 1,
          correction: '$\\varepsilon = C - M < 0$ signifie $M > C$ : la sortie <strong>dépasse</strong> la consigne. Le correcteur doit réduire la commande.'
        },
        {
          statement: 'Dans un schéma-bloc d\'asservissement, l\'élément qui calcule $\\varepsilon = C - M$ s\'appelle :',
          type: 'multiple-choice',
          options: ['Le correcteur', 'L\'actionneur', 'Le comparateur', 'Le capteur'],
          answer: 2,
          points: 2,
          correction: 'Le <strong>comparateur</strong> (ou sommateur) effectue la soustraction $\\varepsilon = C - M$. Le correcteur utilise ensuite cet écart pour calculer la commande.'
        }
      ]
    }
  });
