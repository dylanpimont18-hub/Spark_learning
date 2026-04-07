/* =========================================================
   Spark Learning – data/si-tle/si-tle-transmission.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
  });
