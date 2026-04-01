window.MODULES.push(
    {
    id: '4e-pythagore',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Théorème de Pythagore',
    subtitle: 'Triangle rectangle, calcul de la troisième longueur',
    keywords: ['Hypoténuse', 'Triangle rectangle', 'Carré', 'Racine carrée', 'Réciproque'],
    physics: 'Norme d\'un vecteur force, distance résultante, calcul de composantes',

    cours: {
      intro: 'Le théorème de Pythagore dit que dans tout triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés : $c^2 = a^2 + b^2$. <strong>L\'hypoténuse est toujours le côté opposé à l\'angle droit</strong> — c\'est aussi le plus long côté.' +
        '<br/><br/>' +
        'La réciproque est puissante : si $c^2 = a^2 + b^2$, alors le triangle est rectangle. En physique, cette formule donne la norme d\'un vecteur résultant ($\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$) et la distance entre deux points.' +
        '<br/><br/>' +
        '<strong>Attention au sens de la formule :</strong> pour trouver un côté adjacent, on utilise $a = \\sqrt{c^2 - b^2}$ — on soustrait, pas on additionne ! Vérification : le résultat doit être inférieur à l\'hypoténuse.',
      definitions: [
        { term: 'Hypoténuse', def: 'Côté le plus long du triangle rectangle, situé en face de l\'angle droit.' },
        { term: 'Triangle rectangle', def: 'Triangle possédant un angle droit (90°).' },
        { term: 'Réciproque', def: 'Si $a^2 + b^2 = c^2$ exactement, alors le triangle est rectangle (l\'angle droit est opposé au côté $c$).' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier le triangle rectangle et son hypoténuse (le côté en face de l\'angle droit — toujours le plus long). <strong>Exemple :</strong> un triangle avec un angle droit en $C$ a son hypoténuse $[AB]$.',
          'Appliquer le théorème : $c^2 = a^2 + b^2$ où $c$ est l\'hypoténuse et $a$, $b$ les deux autres côtés. <strong>Exemple :</strong> $AB^2 = AC^2 + BC^2$.',
          'Si on cherche un côté (non hypoténuse) : $a^2 = c^2 - b^2 \\Rightarrow a = \\sqrt{c^2 - b^2}$. <strong>Exemple :</strong> si $AB = 13$ et $BC = 5$, alors $AC = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$.',
          'Vérifier : l\'hypoténuse est toujours le plus grand côté. Ici $13 > 12 > 5$ ✓'
        ]
      },
      example: {
        statement: 'Un poteau de $4$ m de haut est maintenu par un câble fixé au sol à $3$ m du pied. Quelle est la longueur du câble ?',
        steps: [
          'Le poteau, le sol et le câble forment un triangle rectangle (angle droit entre le poteau et le sol).',
          'Le câble est l\'hypoténuse $c$, le poteau vaut $a = 4$ m et la distance au sol $b = 3$ m.',
          '$c^2 = a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$.',
          '$c = \\sqrt{25} = 5$ m.'
        ],
        answer: 'Le câble mesure $5$ m (triangle 3-4-5).'
      },
      formulas: [
        '$c^2 = a^2 + b^2$ (avec $c$ = hypoténuse)',
        '$a = \\sqrt{c^2 - b^2}$',
        '$\\|\\vec{v}\\| = \\sqrt{v_x^2 + v_y^2}$ (norme d\'un vecteur 2D)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Situation</th><th style="border:1px solid var(--border);padding:6px 14px">Formule</th><th style="border:1px solid var(--border);padding:6px 14px">Opération</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Chercher l\'hypoténuse $c$</td><td style="border:1px solid var(--border);padding:6px 14px">$c = \\sqrt{a^2 + b^2}$</td><td style="border:1px solid var(--border);padding:6px 14px">On additionne les carrés</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Chercher un côté $a$</td><td style="border:1px solid var(--border);padding:6px 14px">$a = \\sqrt{c^2 - b^2}$</td><td style="border:1px solid var(--border);padding:6px 14px">On soustrait les carrés</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Vérifier si rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">$a^2 + b^2 \\stackrel{?}{=} c^2$</td><td style="border:1px solid var(--border);padding:6px 14px">Réciproque (égalité exacte)</td></tr></table>',
      recap: [
        '$c^2 = a^2 + b^2$ ne fonctionne QUE dans un triangle rectangle',
        'L\'hypoténuse est toujours en face de l\'angle droit et c\'est le plus grand côté',
        'Pour trouver un petit côté : on soustrait ($a = \\sqrt{c^2 - b^2}$)',
        'La réciproque permet de prouver qu\'un triangle est rectangle'
      ],
      piege: 'Le théorème ne s\'applique QU\'aux triangles rectangles. Avant de l\'utiliser, identifie l\'angle droit. Le côté en face de l\'angle droit est l\'hypoténuse — c\'est toujours le plus grand côté. Si tu doutes, la réciproque permet de vérifier : si $a^2 + b^2 = c^2$, alors le triangle est rectangle en... l\'angle opposé à $c$.'
    },

    quiz: [
      {
        q: 'Un triangle a deux côtés de $3$ et $4$. Si c\'est un triangle rectangle, quelle est la longueur de son hypoténuse ?',
        options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
        answer: 0,
        correction: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. C\'est le célèbre triangle 3-4-5.'
      },
      {
        q: 'Dans un triangle rectangle, l\'hypoténuse mesure $13\\,\\text{cm}$ et un côté $5\\,\\text{cm}$. Quel est le troisième côté ?',
        options: ['$8\\,\\text{cm}$', '$12\\,\\text{cm}$', '$\\sqrt{18}\\,\\text{cm}$', '$\\sqrt{144}\\,\\text{cm}$'],
        answer: 1,
        correction: '$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\,\\text{cm}$. Triangle 5-12-13.'
      },
      {
        q: 'Un triangle a des côtés $5$, $7$ et $9$. Est-il rectangle ? Un élève vérifie $5^2 + 7^2 = 9^2$ et trouve $25 + 49 = 74 \\neq 81$. Que conclut-il ?',
        options: [
          'Oui, car $74$ est proche de $81$.',
          'Non, le triangle n\'est pas rectangle car $5^2 + 7^2 \\neq 9^2$. La réciproque exige une égalité exacte.',
          'On ne peut pas conclure sans mesurer les angles.',
          'Oui, si on arrondit : $\\sqrt{74} \\approx 8{,}6 \\approx 9$.'
        ],
        answer: 1,
        correction: 'La réciproque du théorème de Pythagore est catégorique : le triangle est rectangle si et seulement si $a^2 + b^2 = c^2$ exactement. $74 \\neq 81$, donc ce triangle n\'est pas rectangle. La proximité de valeurs ne suffit pas — une vérification approchée peut induire en erreur, surtout avec des valeurs irrationnelles.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pythagorean = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15]];
        const triple = pick(pythagorean);
        const [a, b, c] = triple;
        const askHyp = Math.random() > 0.5;
        if (askHyp) {
          return {
            statement: `Un triangle rectangle a ses deux côtés de l'angle droit qui mesurent $${a}$ et $${b}$. Calcule l'hypoténuse (valeur exacte).`,
            answer: c,
            tolerance: 0.01,
            unit: '',
            hint: `Applique $c = \\sqrt{a^2 + b^2} = \\sqrt{${a}^2 + ${b}^2}$.`,
            solution: [`$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a*a} + ${b*b}} = \\sqrt{${c*c}} = ${c}$`]
          };
        } else {
          return {
            statement: `Un triangle rectangle a une hypoténuse de $${c}$ et un côté de $${a}$. Calcule le troisième côté.`,
            answer: b,
            tolerance: 0.01,
            unit: '',
            hint: `$\\text{côté} = \\sqrt{c^2 - a^2} = \\sqrt{${c}^2 - ${a}^2}$.`,
            solution: [`$b = \\sqrt{${c}^2 - ${a}^2} = \\sqrt{${c*c} - ${a*a}} = \\sqrt{${b*b}} = ${b}$`]
          };
        }
      }
    },

    probleme: {
      context: 'Un bateau part du port O. Il navigue $30\\,\\text{km}$ vers l\'Est (direction $Ox$), puis $40\\,\\text{km}$ vers le Nord (direction $Oy$).',
      schema: null,
      tasks: [
        'Dessiner schématiquement le trajet et identifier le triangle rectangle formé.',
        'Calculer la distance en ligne droite entre le port O et la position finale du bateau.',
        'Si le bateau avait navigué en ligne droite jusqu\'à sa position finale, quelle direction aurait-il prise par rapport à l\'Est ? (angle $\\theta = \\arctan(40/30)$, valeur approchée)'
      ],
      solutions: [
        'Le trajet forme deux côtés d\'un triangle rectangle : côté Est = 30 km (horizontal) et côté Nord = 40 km (vertical).',
        '$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\text{km}$.',
        '$\\theta = \\arctan\\left(\\dfrac{40}{30}\\right) = \\arctan(1{,}33) \\approx 53°$ au-dessus de l\'Est.'
      ],
      finalAnswer: 'Distance directe $= 50\\,\\text{km}$, angle $\\approx 53°$ par rapport à l\'Est'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Pythagore',
      duration: '30 min',
      questions: [
        {
          statement: 'Un triangle rectangle a des côtés de l\'angle droit mesurant $6\\,\\text{cm}$ et $8\\,\\text{cm}$. Calculer l\'hypoténuse.',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle rectangle a une hypoténuse de $17\\,\\text{cm}$ et un côté de $15\\,\\text{cm}$. Calculer le troisième côté.',
          type: 'numeric',
          answer: 8,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle a des côtés de $7$, $24$ et $25$. Est-il rectangle ?',
          type: 'multiple-choice',
          options: ['Non, car $7^2 + 24^2 = 625 \\neq 25^2$', 'Oui, car $7^2 + 24^2 = 49 + 576 = 625 = 25^2$', 'On ne peut pas savoir sans mesurer les angles', 'Non, car $7 + 24 > 25$'],
          answer: 1,
          points: 2,
          correction: 'Par la réciproque du théorème de Pythagore : $7^2 + 24^2 = 49 + 576 = 625$ et $25^2 = 625$. Comme $a^2 + b^2 = c^2$, le triangle est rectangle.'
        },
        {
          statement: 'Une échelle de $5\\,\\text{m}$ est posée contre un mur. Le pied de l\'échelle est à $3\\,\\text{m}$ du mur. À quelle hauteur atteint-elle le mur ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0.01,
          unit: 'm',
          points: 2,
          correction: 'Le mur, le sol et l\'échelle forment un triangle rectangle. L\'échelle est l\'hypoténuse ($5\\,\\text{m}$). $h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4\\,\\text{m}$.'
        },
        {
          statement: 'Quelle est la distance entre les points $A(1;2)$ et $B(4;6)$ ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. On utilise Pythagore avec les différences de coordonnées.'
        }
      ]
    }
  },

    {
);
