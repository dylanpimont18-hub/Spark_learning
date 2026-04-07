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
          'Étape 1 — Identifier la structure : boucle ouverte (pas de capteur de retour) ou boucle fermée (avec retour) ?<br/>En boucle fermée, repérer les $5$ éléments : comparateur, correcteur, actionneur, système, capteur.',
          'Étape 2 — Identifier les grandeurs : quelle est la consigne $C$ ? Quelle est la mesure $M$ ? Quelles sont les unités ?<br/>Exemple : pour un régulateur de vitesse, $C$ = vitesse souhaitée (km/h), $M$ = vitesse mesurée.',
          'Étape 3 — Calculer l\'écart : $\\varepsilon = C - M$.<br/>Signe positif → la sortie est insuffisante → le correcteur doit augmenter la commande.<br/>Signe négatif → la sortie est excessive → le correcteur doit diminuer la commande.',
          'Étape 4 — Calculer la commande : pour un correcteur proportionnel, $U = K_p \\cdot \\varepsilon$.<br/>Vérifier que la commande est physiquement réalisable (pas de saturation de l\'actionneur).'
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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>Critère</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Boucle ouverte</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>Boucle fermée</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px">Capteur de retour</td><td style="border:1px solid var(--border);padding:8px">Absent</td><td style="border:1px solid var(--border);padding:8px">Présent</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Calcul d\'écart</td><td style="border:1px solid var(--border);padding:8px">Aucun</td><td style="border:1px solid var(--border);padding:8px">$\\varepsilon = C - M$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Correction auto.</td><td style="border:1px solid var(--border);padding:8px">Non</td><td style="border:1px solid var(--border);padding:8px">Oui</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Sensibilité aux perturbations</td><td style="border:1px solid var(--border);padding:8px">Forte (pas de correction)</td><td style="border:1px solid var(--border);padding:8px">Faible (correction auto.)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Précision</td><td style="border:1px solid var(--border);padding:8px">Faible</td><td style="border:1px solid var(--border);padding:8px">Élevée</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Risque d\'instabilité</td><td style="border:1px solid var(--border);padding:8px">Aucun</td><td style="border:1px solid var(--border);padding:8px">Possible (si $K_p$ trop grand)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Exemple</td><td style="border:1px solid var(--border);padding:8px">Grille-pain (minuterie)</td><td style="border:1px solid var(--border);padding:8px">Thermostat, cruise control</td></tr></table>',
      formulas: [
        '$\\varepsilon = C - M$ (écart = consigne − mesure)',
        '$U = K_p \\times \\varepsilon$ (commande du correcteur proportionnel)',
        'Boucle fermée : $C \\to [\\text{Comparateur}] \\to [\\text{Correcteur}] \\to [\\text{Actionneur}] \\to [\\text{Système}] \\to M$',
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
