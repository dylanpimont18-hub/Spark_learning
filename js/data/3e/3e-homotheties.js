/* =========================================================
   Spark Learning – data/3e/3e-homotheties.js
   Module : Homothéties (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-homotheties',
    level: 1, subject: 'maths',
    icon: '🔍',
    title: 'Homothéties',
    subtitle: 'Centre, rapport, image d\'une figure',
    keywords: ['Homothétie', 'Rapport', 'Centre', 'Agrandissement', 'Réduction', 'Similitude'],
    physics: false,
    cours: {
      intro: 'L\'homothétie est la transformation géométrique qui réalise tous les agrandissements et réductions : elle conserve les angles et multiplie toutes les longueurs par $|k|$. Le centre $O$ est le seul point qui reste fixe ; tous les autres « glissent » sur leur droite passant par $O$. Si $k > 0$, l\'image est du même côté que l\'original ; si $k < 0$, elle passe de l\'autre côté du centre (retournement). En optique, une lentille réalise une homothétie entre objet et image. La propriété sur les aires est souvent sous-estimée : multiplier les longueurs par $k$ multiplie les aires par $k^2$ — un agrandissement de facteur $3$ donne une aire $9$ fois plus grande.',
      definitions: [
        { term: 'Homothétie', def: 'Transformation géométrique qui associe à tout point $A$ un point $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$. Elle <strong>conserve les formes</strong> mais change les dimensions.' },
        { term: 'Centre', def: 'Le point fixe $O$ de l\'homothétie : c\'est le <strong>seul point qui ne bouge pas</strong>. Tous les autres points « glissent » le long de la droite qui les relie à $O$.' },
        { term: 'Rapport', def: 'Le nombre $k$ qui détermine l\'<strong>agrandissement</strong> ($|k| > 1$), la <strong>réduction</strong> ($0 < |k| < 1$) ou le <strong>retournement</strong> ($k < 0$). $k = 1$ donne l\'identité.' },
        { term: 'Similitude', def: 'Transformation qui conserve les <strong>angles</strong> et multiplie les longueurs par un même facteur. L\'homothétie est un cas particulier de similitude.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier le centre $O$ et le rapport $k$.',
          'Image de $A$ : $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$. En coordonnées : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.',
          'Les longueurs sont multipliées par $|k|$ ; les aires par $k^2$ ; le périmètre par $|k|$.'
        ]
      },
      example: {
        statement: 'On considère l\'homothétie de centre $O(0\\,;\\,0)$ et de rapport $k = 2$. Déterminer l\'image du point $A(3\\,;\\,1)$.',
        steps: [
          '<strong>Formule</strong> : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.<br/>Ici $O$ est l\'origine, donc $A\'(k \\cdot x_A \\,;\\, k \\cdot y_A)$.',
          '<strong>Calcul</strong> : $A\'(2 \\times 3 \\,;\\, 2 \\times 1) = A\'(6\\,;\\,2)$.',
          '<strong>Vérification</strong> : $OA = \\sqrt{3^2 + 1^2} = \\sqrt{10}$ et $OA\' = \\sqrt{6^2 + 2^2} = \\sqrt{40} = 2\\sqrt{10}$. On a bien $OA\' = 2 \\times OA$ ✓.'
        ],
        answer: '$A\'(6\\,;\\,2)$. La distance au centre est bien multipliée par $k = 2$.'
      },
      formulas: [
        '$\\vec{OA\'} = k \\cdot \\vec{OA}$',
        'Longueurs : $A\'B\' = |k| \\times AB$',
        'Aires : $\\mathcal{A}_{\\text{image}} = k^2 \\times \\mathcal{A}_{\\text{original}}$',
        'Les angles sont conservés (similitude)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Rapport $k$</th><th style="border:1px solid var(--border);padding:8px">Effet géométrique</th><th style="border:1px solid var(--border);padding:8px">Longueurs</th><th style="border:1px solid var(--border);padding:8px">Aires</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$k > 1$</td><td style="border:1px solid var(--border);padding:8px">Agrandissement (même côté)</td><td style="border:1px solid var(--border);padding:8px">$\\times |k|$</td><td style="border:1px solid var(--border);padding:8px">$\\times k^2$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0 < k < 1$</td><td style="border:1px solid var(--border);padding:8px">Réduction (même côté)</td><td style="border:1px solid var(--border);padding:8px">$\\times k$</td><td style="border:1px solid var(--border);padding:8px">$\\times k^2$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$k < 0$</td><td style="border:1px solid var(--border);padding:8px">Retournement (côté opposé)</td><td style="border:1px solid var(--border);padding:8px">$\\times |k|$</td><td style="border:1px solid var(--border);padding:8px">$\\times k^2$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$k = -1$</td><td style="border:1px solid var(--border);padding:8px">Symétrie centrale</td><td style="border:1px solid var(--border);padding:8px">$\\times 1$ (conservées)</td><td style="border:1px solid var(--border);padding:8px">$\\times 1$ (conservées)</td></tr></table>',
      recap: [
        'Les <strong>longueurs</strong> sont multipliées par $|k|$ et les <strong>aires</strong> par $k^2$ — ne pas confondre !',
        'Les <strong>angles</strong> sont toujours conservés : l\'image d\'un triangle équilatéral reste équilatéral.',
        'Si $k = -1$, l\'homothétie est une <strong>symétrie centrale</strong> par rapport au centre $O$.',
        'Pour trouver l\'image d\'un point en coordonnées : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.'
      ],
      piege: 'Piège : l\'homothétie multiplie les LONGUEURS par $|k|$ mais les AIRES par $k^2$. Si on agrandit d\'un facteur $3$, les longueurs sont $\\times 3$ mais l\'aire est $\\times 9$ !'
    },
    quiz: [
      {
        q: 'Une homothétie de rapport $k = 2$ agrandit un carré d\'aire $5$ cm². Quelle est l\'aire de l\'image ?',
        options: ['$10$ cm²', '$20$ cm²', '$40$ cm²', '$25$ cm²'],
        answer: 1,
        correction: 'L\'aire est multipliée par $k^2 = 2^2 = 4$. Aire image $= 5 \\times 4 = 20$ cm².'
      },
      {
        q: 'Sur un plan au $\\frac{1}{100}$, un salon mesure $3$ cm $\\times$ $4$ cm. Quelle est la superficie réelle du salon ?',
        options: ['$12$ cm²', '$1\\,200$ cm²', '$120\\,000$ cm²', '$12\\,000$ cm²'],
        answer: 2,
        correction: 'Le rapport est $k = 100$. Les longueurs réelles sont $300$ cm et $400$ cm. L\'aire réelle est $300 \\times 400 = 120\\,000$ cm² $= 12$ m². L\'erreur classique est de multiplier l\'aire du plan par $100$ au lieu de $100^2 = 10\\,000$, car les aires se multiplient par $k^2$, pas par $k$.'
      },
      {
        q: 'Qu\'est-ce qu\'une homothétie de rapport $k = -1$ réalise ?',
        options: ['Une réduction de moitié', 'Une symétrie centrale par rapport au centre', 'Un agrandissement', 'Une rotation de $90°$'],
        answer: 1,
        correction: '$k = -1$ : $\\vec{OA\'} = -1 \\cdot \\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const k = pick([2, 3, 0.5]);
        const ab = rand(3, 12);
        return {
          statement: `Une homothétie de rapport $k = ${k}$ transforme un segment de longueur $${ab}$ cm. Quelle est la longueur de l'image (en cm) ?`,
          answer: parseFloat((Math.abs(k) * ab).toFixed(1)),
          tolerance: 0.1,
          unit: 'cm',
          hint: `Longueur image $= |k| \\times$ longueur originale $= ${Math.abs(k)} \\times ${ab}$.`,
          solution: [`$A'B' = |${k}| \\times ${ab} = ${Math.abs(k) * ab}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un photographe veut agrandir une photo de $10$ cm × $15$ cm pour en faire une affiche.',
      tasks: [
        'L\'agrandissement a un rapport $k = 4$. Quelles sont les dimensions de l\'affiche ?',
        'Quelle est l\'aire de la photo originale ? Et de l\'affiche ?',
        'Par quel facteur l\'aire a-t-elle été multipliée ?'
      ],
      solutions: [
        'Affiche : $10 \\times 4 = 40$ cm et $15 \\times 4 = 60$ cm.',
        'Photo : $10 \\times 15 = 150$ cm². Affiche : $40 \\times 60 = 2400$ cm².',
        '$\\dfrac{2400}{150} = 16 = k^2 = 4^2$ ✓.'
      ],
      finalAnswer: 'L\'affiche mesure $40 \\times 60$ cm. Son aire est $16$ fois celle de la photo.'
    },

    evaluation: {
      title: 'Évaluation — Homothéties',
      duration: '25 min',
      questions: [
        {
          statement: 'Une homothétie de centre $O$ et de rapport $k = 3$ transforme un triangle d\'aire $8$ cm². Quelle est l\'aire de l\'image ?',
          type: 'numeric',
          answer: 72,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: 'L\'aire est multipliée par $k^2 = 3^2 = 9$. Aire image $= 8 \\times 9 = 72$ cm².'
        },
        {
          statement: 'Sur un plan à l\'échelle $\\dfrac{1}{200}$, une pièce mesure $4$ cm de long. Quelle est la longueur réelle de la pièce ?',
          type: 'numeric',
          answer: 800,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le rapport d\'homothétie est $k = 200$. Longueur réelle $= 4 \\times 200 = 800$ cm $= 8$ m.'
        },
        {
          statement: 'Une homothétie de rapport $k = -2$ transforme un point $A$ tel que $OA = 5$ cm. Quelle est la distance $OA\'$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$OA\' = |k| \\times OA = |-2| \\times 5 = 2 \\times 5 = 10$ cm. Le signe négatif signifie que $A\'$ est de l\'autre côté de $O$ par rapport à $A$, mais la distance est bien $10$ cm.'
        },
        {
          statement: 'Une homothétie de rapport $k = -1$ est équivalente à :',
          type: 'multiple-choice',
          options: ['Une translation', 'Une rotation de $90°$', 'Une symétrie centrale', 'L\'identité'],
          answer: 2,
          points: 2,
          correction: 'Pour $k = -1$ : $\\vec{OA\'} = -\\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
        },
        {
          statement: 'Un plan au $\\dfrac{1}{50}$ représente un jardin carré de côté $6$ cm sur le plan. Quelle est l\'aire réelle du jardin en m² ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'm²',
          points: 2,
          correction: 'Côté réel $= 6 \\times 50 = 300$ cm $= 3$ m. Aire réelle $= 3 \\times 3 = 9$ m². Attention : l\'aire se multiplie par $k^2 = 50^2 = 2500$, pas par $50$. Vérification : $6^2 \\times 2500 = 36 \\times 2500 = 90\\,000$ cm² $= 9$ m² ✓.'
        }
      ]
    }
  }
);
