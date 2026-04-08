window.MODULES.push(
    id: '4e-relatifs-mult-div',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Relatifs : multiplication et division',
    subtitle: 'Règle des signes, produit, quotient',
    keywords: ['Nombres relatifs', 'Règle des signes', 'Produit', 'Quotient', 'Négatif'],
    physics: true,
    cours: {
      intro: 'La règle des signes pour la multiplication est intuitive si on pense aux opposés : multiplier par $-1$ inverse le signe. Donc $(-1) \\times (-1) = 1$ car « l\'opposé de l\'opposé ». Règle générale : pair de $-$ → $+$, impair de $-$ → $-$.' +
        '<br/><br/>' +
        '<strong>Piège classique avec les exposants :</strong> $(-3)^2 = (-3) \\times (-3) = +9$ (le $-$ est dans la base), mais $-3^2 = -(3 \\times 3) = -9$ (l\'exposant s\'applique uniquement au $3$). Les parenthèses sont essentielles.' +
        '<br/><br/>' +
        'En physique, les grandeurs algébriques (tension, position, vitesse) peuvent être négatives — le signe indique un sens (opposé à la convention positive choisie). Par exemple, une vitesse de $-5$ m/s signifie un déplacement dans le sens opposé à l\'axe choisi.',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe ($+$ ou $-$) et d\'une valeur absolue. Exemples : $+7$, $-3{,}5$.' },
        { term: 'Valeur absolue', def: 'Distance à zéro sur la droite graduée, toujours positive. $|{-5}| = 5$ et $|{+5}| = 5$.' },
        { term: 'Règle des signes', def: 'Deux facteurs de même signe donnent un produit positif ; deux facteurs de signes contraires donnent un produit négatif.' },
        { term: 'Opposé d\'un nombre', def: 'L\'opposé de $a$ est $-a$. Leur somme vaut $0$ : $a + (-a) = 0$.' }
      ],
      method: {
        title: 'Règle des signes',
        steps: [
          '<strong>Valeur absolue</strong> : calculer la valeur du résultat comme si les nombres étaient positifs. <strong>Exemple :</strong> pour $(-6) \\times (+4)$, la valeur absolue est $6 \\times 4 = 24$.',
          '<strong>Déterminer le signe</strong> : $(+) \\times (+) = (+)$, $(-) \\times (-) = (+)$, $(+) \\times (-) = (-)$, $(-) \\times (+) = (-)$. <strong>Exemple :</strong> $(-6) \\times (+4)$ → signes contraires → résultat négatif → $-24$.',
          '<strong>Suite de multiplications</strong> : compter le nombre de facteurs négatifs. Pair → positif ; impair → négatif. <strong>Exemple :</strong> $(-2) \\times (-3) \\times (-1)$ → $3$ facteurs négatifs (impair) → résultat négatif → $-6$.',
          '<strong>Division</strong> : suit les mêmes règles de signes que la multiplication. <strong>Exemple :</strong> $(-15) \\div (-3) = +5$ (deux négatifs → positif).'
        ]
      },
      example: {
        statement: 'Un sous-marin plonge de $8$ m par minute pendant $5$ minutes, puis remonte de $3$ m par minute pendant $4$ minutes. Quelle est la variation totale de profondeur ?',
        steps: [
          'Descente : $(-8) \\times 5 = -40$ m (le signe $-$ indique qu\'on descend).',
          'Remontée : $(+3) \\times 4 = +12$ m (le signe $+$ indique qu\'on remonte).',
          'Variation totale : $(-40) + (+12) = -28$ m.'
        ],
        answer: 'Le sous-marin a une variation totale de $-28$ m (il est $28$ m plus profond qu\'au départ).'
      },
      formulas: [
        '$(+a) \\times (+b) = +ab$',
        '$(-a) \\times (-b) = +ab$',
        '$(+a) \\times (-b) = -ab$',
        '$(-a) \\div (+b) = -\\dfrac{a}{b}$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">$\\times$</th><th style="border:1px solid var(--border);padding:6px 14px">$+$</th><th style="border:1px solid var(--border);padding:6px 14px">$-$</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>$+$</strong></td><td style="border:1px solid var(--border);padding:6px 14px">$+$</td><td style="border:1px solid var(--border);padding:6px 14px">$-$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>$-$</strong></td><td style="border:1px solid var(--border);padding:6px 14px">$-$</td><td style="border:1px solid var(--border);padding:6px 14px">$+$</td></tr></table>',
      recap: [
        'Mêmes signes → produit positif ; signes contraires → produit négatif.',
        'La division suit exactement les mêmes règles de signes que la multiplication.',
        'Pour un produit de plusieurs facteurs : compter les facteurs négatifs. Pair → $+$, impair → $-$.',
        'Attention aux parenthèses : $(-3)^2 = +9$ mais $-3^2 = -9$.'
      ],
      piege: 'Piège : $(-3)^2 = (-3) \\times (-3) = +9$, mais $-3^2 = -(3 \\times 3) = -9$. Les parenthèses changent tout ! Sans parenthèses, l\'exposant s\'applique uniquement au $3$, pas au signe.'
    },
    quiz: [
      {
        q: 'Quel est le résultat de $(-4) \\times (-5)$ ?',
        options: ['$-20$', '$+20$', '$-9$', '$+9$'],
        answer: 1,
        correction: 'Deux négatifs → positif. $(-4) \\times (-5) = +20$.'
      },
      {
        q: 'Quel est le signe de $(-2) \\times (+3) \\times (-1) \\times (-4)$ ?',
        options: ['Positif', 'Négatif', 'Nul', 'Indéterminé'],
        answer: 1,
        correction: 'On compte les facteurs négatifs : $(-2)$, $(-1)$, $(-4)$ → $3$ facteurs négatifs. $3$ est impair → résultat négatif. Valeur : $-(2 \\times 3 \\times 1 \\times 4) = -24$.'
      },
      {
        q: 'Quel est le signe de $(-2)^3$ ? Et de $(-2)^4$ ?',
        options: [
          '$(-2)^3 > 0$ et $(-2)^4 > 0$ : les exposants impairs et pairs donnent tous des positifs.',
          '$(-2)^3 < 0$ et $(-2)^4 > 0$ : exposant impair → négatif, exposant pair → positif.',
          '$(-2)^3 > 0$ et $(-2)^4 < 0$ : l\'inverse.',
          'Les deux sont négatifs car la base est négative.'
        ],
        answer: 1,
        correction: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = 4 \\times (-2) = -8 < 0$ (3 facteurs négatifs = nombre impair de $-$). $(-2)^4 = (-2)^3 \\times (-2) = (-8) \\times (-2) = +16 > 0$ (4 facteurs = pair). Règle : $(-a)^n$ est positif si $n$ est pair, négatif si $n$ est impair.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = pick([-7,-6,-5,-4,-3,3,4,5,6,7]);
        const b = pick([-6,-5,-4,-3,3,4,5,6]);
        const result = a * b;
        const scenario = pick([
          { emoji: '🧮', statement: `Calcule $(${a}) \\times (${b})$.` },
          { emoji: '💰', statement: `Un commerçant enregistre une variation de $(${a})$ € par jour pendant $(${b})$ jours. Quelle est la variation totale ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` },
          { emoji: '🌡️', statement: `La température change de $(${a})°C$ chaque heure pendant $(${b})$ heures. Quelle est la variation totale ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` },
          { emoji: '🏔️', statement: `Un randonneur ${a < 0 ? 'descend' : 'monte'} de $${Math.abs(a)}$ m d'altitude par étape. Après $(${b})$ étapes, quelle est la variation d'altitude totale ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` },
          { emoji: '🚰', statement: `Un réservoir ${a < 0 ? 'perd' : 'gagne'} $(${a})$ litres par minute pendant $(${b})$ minutes. Quelle est la variation totale ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` },
          { emoji: '📊', statement: `Une action en bourse varie de $(${a})$ points par séance pendant $(${b})$ séances. Quelle est la variation totale ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` },
          { emoji: '🤿', statement: `Un plongeur ${a < 0 ? 'descend' : 'remonte'} de $${Math.abs(a)}$ m par minute pendant $(${b})$ minutes. Quelle est la variation de profondeur ? <br/><em>Calcul : $(${a}) \\times (${b})$</em>` }
        ]);
        return {
          statement: `${scenario.emoji} ${scenario.statement}`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `Règle des signes : les signes sont ${a < 0 && b < 0 ? 'identiques (deux négatifs) → résultat positif' : a > 0 && b > 0 ? 'identiques (deux positifs) → résultat positif' : 'contraires → résultat négatif'}.`,
          solution: [
            `Valeur absolue : $${Math.abs(a)} \\times ${Math.abs(b)} = ${Math.abs(result)}$.`,
            `Signe : ${(a < 0) === (b < 0) ? 'mêmes signes → positif' : 'signes contraires → négatif'}.`,
            `Résultat : $${result}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'La température dans une ville chute de $3°C$ par heure pendant $5$ heures consécutives, puis remonte de $2°C$ par heure pendant $3$ heures.',
      tasks: [
        'Calculer la variation totale de température durant la baisse.',
        'Calculer la variation totale durant la remontée.',
        'Si la température initiale était $4°C$, quelle est la température finale ?'
      ],
      solutions: [
        'Baisse : $(-3) \\times 5 = -15°C$.',
        'Remontée : $(+2) \\times 3 = +6°C$.',
        'Température finale : $4 + (-15) + 6 = -5°C$.'
      ],
      finalAnswer: 'La température finale est $-5°C$.'
    },

    evaluation: {
      title: 'Évaluation — Relatifs : Multiplication et Division',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $(-7) \\times (+8)$.',
          type: 'numeric',
          answer: -56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes contraires → résultat négatif. $7 \\times 8 = 56$. Donc $(-7) \\times (+8) = -56$.'
        },
        {
          statement: 'Calculer $(-3) \\times (-4) \\times (-2)$.',
          type: 'numeric',
          answer: -24,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On compte les facteurs négatifs : $3$ (nombre impair) → résultat négatif. Valeur : $3 \\times 4 \\times 2 = 24$. Résultat : $-24$.'
        },
        {
          statement: 'Quelle est la différence entre $(-5)^2$ et $-5^2$ ?',
          type: 'multiple-choice',
          options: [
            'Les deux valent $25$',
            'Les deux valent $-25$',
            '$(-5)^2 = 25$ et $-5^2 = -25$',
            '$(-5)^2 = -25$ et $-5^2 = 25$'
          ],
          answer: 2,
          points: 2,
          correction: '$(-5)^2 = (-5) \\times (-5) = 25$ (le $-$ est dans la base, élevé au carré). $-5^2 = -(5 \\times 5) = -25$ (l\'exposant s\'applique uniquement au $5$, puis on applique le signe $-$). Les parenthèses changent tout !'
        },
        {
          statement: 'Calculer $\\dfrac{(-36)}{(+9)}$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes contraires → résultat négatif. $36 \\div 9 = 4$. Donc $\\dfrac{-36}{+9} = -4$.'
        },
        {
          statement: 'Un sous-marin descend de $15\\,\\text{m}$ toutes les $3\\,\\text{min}$. Quelle variation de profondeur subit-il en $12\\,\\text{min}$ ?',
          type: 'numeric',
          answer: -60,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: 'Variation par minute : $\\dfrac{-15}{3} = -5\\,\\text{m/min}$. En $12\\,\\text{min}$ : $(-5) \\times 12 = -60\\,\\text{m}$. Le sous-marin descend de $60\\,\\text{m}$.'
        }
      ]
    }
  },

    {
);
