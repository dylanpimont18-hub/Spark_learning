window.MODULES.push(
    {
    id: '4e-relatifs-mult-div',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Relatifs : multiplication et division',
    subtitle: 'Règle des signes, produit, quotient',
    keywords: ['Nombres relatifs', 'Règle des signes', 'Produit', 'Quotient', 'Négatif'],
    physics: 'Calcul de variations de température, produit de charges électriques de signes opposés',
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
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée — sauts et changement de sens',
        title: 'Multiplier par un relatif : une histoire de sens',
        description: 'La longueur du saut ne change pas, mais quand on multiplie par un nombre <strong>négatif</strong>, on inverse le sens de la répétition.' +
          '<br/><br/>' +
          'Comparons $(-2) \\times 3$ et $(-2) \\times (-3)$ sur deux droites graduées superposées.',
        svg: `
          <svg viewBox="0 0 640 300" role="img" aria-labelledby="relatifs-multdiv-title relatifs-multdiv-desc">
            <title id="relatifs-multdiv-title">Deux droites graduées comparant (-2) x 3 et (-2) x (-3)</title>
            <desc id="relatifs-multdiv-desc">En haut, une droite graduée de -8 a 8 montre trois sauts de -2 vers la gauche partant de 0 et arrivant a -6, illustrant (-2) x 3 = -6. En bas, une deuxieme droite graduee identique montre trois sauts de +2 vers la droite partant de 0 et arrivant a +6, illustrant (-2) x (-3) = +6 : le sens des sauts s'est inverse.</desc>

            <text class="annotation-label" x="320" y="22" text-anchor="middle">(-2) x 3 = -6</text>
            <text class="label-soft" x="320" y="40" text-anchor="middle">3 sauts de -2, vers la gauche</text>

            <line class="graph-line" x1="316" y1="90" x2="260" y2="90"></line>
            <polygon class="plot-point" points="250,90 260,84 260,96"></polygon>
            <text class="annotation-label" x="285" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="250" y1="96" x2="250" y2="104"></line>

            <line class="graph-line" x1="246" y1="90" x2="190" y2="90"></line>
            <polygon class="plot-point" points="180,90 190,84 190,96"></polygon>
            <text class="annotation-label" x="215" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="180" y1="96" x2="180" y2="104"></line>

            <line class="graph-line" x1="176" y1="90" x2="120" y2="90"></line>
            <polygon class="plot-point" points="110,90 120,84 120,96"></polygon>
            <text class="annotation-label" x="145" y="78" text-anchor="middle">-2</text>
            <line class="guide-line" x1="110" y1="96" x2="110" y2="104"></line>

            <line class="axis" x1="40" y1="110" x2="600" y2="110"></line>
            <line class="grid-line" x1="40" y1="104" x2="40" y2="116"></line>
            <line class="grid-line" x1="75" y1="104" x2="75" y2="116"></line>
            <line class="grid-line" x1="110" y1="104" x2="110" y2="116"></line>
            <line class="grid-line" x1="145" y1="104" x2="145" y2="116"></line>
            <line class="grid-line" x1="180" y1="104" x2="180" y2="116"></line>
            <line class="grid-line" x1="215" y1="104" x2="215" y2="116"></line>
            <line class="grid-line" x1="250" y1="104" x2="250" y2="116"></line>
            <line class="grid-line" x1="285" y1="104" x2="285" y2="116"></line>
            <line class="grid-line" x1="320" y1="104" x2="320" y2="116"></line>
            <line class="grid-line" x1="355" y1="104" x2="355" y2="116"></line>
            <line class="grid-line" x1="390" y1="104" x2="390" y2="116"></line>
            <line class="grid-line" x1="425" y1="104" x2="425" y2="116"></line>
            <line class="grid-line" x1="460" y1="104" x2="460" y2="116"></line>
            <line class="grid-line" x1="495" y1="104" x2="495" y2="116"></line>
            <line class="grid-line" x1="530" y1="104" x2="530" y2="116"></line>
            <line class="grid-line" x1="565" y1="104" x2="565" y2="116"></line>
            <line class="grid-line" x1="600" y1="104" x2="600" y2="116"></line>

            <text class="tick-label" x="40" y="132" text-anchor="middle">-8</text>
            <text class="tick-label" x="180" y="132" text-anchor="middle">-4</text>
            <text class="tick-label" x="250" y="132" text-anchor="middle">-2</text>
            <text class="axis-label" x="110" y="132" text-anchor="middle">-6</text>
            <text class="axis-label" x="320" y="132" text-anchor="middle">0</text>
            <text class="tick-label" x="390" y="132" text-anchor="middle">+2</text>
            <text class="tick-label" x="460" y="132" text-anchor="middle">+4</text>
            <text class="tick-label" x="530" y="132" text-anchor="middle">+6</text>
            <text class="tick-label" x="600" y="132" text-anchor="middle">+8</text>

            <circle class="plot-point-alt" cx="320" cy="110" r="5"></circle>
            <circle class="plot-point" cx="110" cy="110" r="5"></circle>

            <text class="annotation-label" x="320" y="168" text-anchor="middle">(-2) x (-3) = +6</text>
            <text class="label-soft" x="320" y="186" text-anchor="middle">3 sauts de +2, vers la droite (sens inverse !)</text>

            <line class="graph-line" x1="324" y1="236" x2="380" y2="236"></line>
            <polygon class="plot-point" points="390,236 380,230 380,242"></polygon>
            <text class="annotation-label" x="355" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="390" y1="242" x2="390" y2="250"></line>

            <line class="graph-line" x1="394" y1="236" x2="450" y2="236"></line>
            <polygon class="plot-point" points="460,236 450,230 450,242"></polygon>
            <text class="annotation-label" x="425" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="460" y1="242" x2="460" y2="250"></line>

            <line class="graph-line" x1="464" y1="236" x2="520" y2="236"></line>
            <polygon class="plot-point" points="530,236 520,230 520,242"></polygon>
            <text class="annotation-label" x="495" y="224" text-anchor="middle">+2</text>
            <line class="guide-line" x1="530" y1="242" x2="530" y2="250"></line>

            <line class="axis" x1="40" y1="256" x2="600" y2="256"></line>
            <line class="grid-line" x1="40" y1="250" x2="40" y2="262"></line>
            <line class="grid-line" x1="75" y1="250" x2="75" y2="262"></line>
            <line class="grid-line" x1="110" y1="250" x2="110" y2="262"></line>
            <line class="grid-line" x1="145" y1="250" x2="145" y2="262"></line>
            <line class="grid-line" x1="180" y1="250" x2="180" y2="262"></line>
            <line class="grid-line" x1="215" y1="250" x2="215" y2="262"></line>
            <line class="grid-line" x1="250" y1="250" x2="250" y2="262"></line>
            <line class="grid-line" x1="285" y1="250" x2="285" y2="262"></line>
            <line class="grid-line" x1="320" y1="250" x2="320" y2="262"></line>
            <line class="grid-line" x1="355" y1="250" x2="355" y2="262"></line>
            <line class="grid-line" x1="390" y1="250" x2="390" y2="262"></line>
            <line class="grid-line" x1="425" y1="250" x2="425" y2="262"></line>
            <line class="grid-line" x1="460" y1="250" x2="460" y2="262"></line>
            <line class="grid-line" x1="495" y1="250" x2="495" y2="262"></line>
            <line class="grid-line" x1="530" y1="250" x2="530" y2="262"></line>
            <line class="grid-line" x1="565" y1="250" x2="565" y2="262"></line>
            <line class="grid-line" x1="600" y1="250" x2="600" y2="262"></line>

            <text class="tick-label" x="40" y="278" text-anchor="middle">-8</text>
            <text class="tick-label" x="110" y="278" text-anchor="middle">-6</text>
            <text class="tick-label" x="180" y="278" text-anchor="middle">-4</text>
            <text class="tick-label" x="250" y="278" text-anchor="middle">-2</text>
            <text class="axis-label" x="320" y="278" text-anchor="middle">0</text>
            <text class="tick-label" x="390" y="278" text-anchor="middle">+2</text>
            <text class="tick-label" x="460" y="278" text-anchor="middle">+4</text>
            <text class="axis-label" x="530" y="278" text-anchor="middle">+6</text>
            <text class="tick-label" x="600" y="278" text-anchor="middle">+8</text>

            <circle class="plot-point-alt" cx="320" cy="256" r="5"></circle>
            <circle class="plot-point" cx="530" cy="256" r="5"></circle>
          </svg>
        `,
        notes: [
          '<strong>Ligne du haut — $(-2) \\times 3$ :</strong> on répète $3$ fois le saut de $-2$, toujours dans le même sens (vers la gauche), comme une addition répétée. On part de $0$ et on arrive à $-6$.',
          '<strong>Ligne du bas — $(-2) \\times (-3)$ :</strong> multiplier par $-3$ revient à faire l\'opposé de « $3$ sauts de $-2$ ». Le sens s\'inverse : ce sont désormais $3$ sauts de $+2$ vers la droite. On part de $0$ et on arrive à $+6$.',
          '<strong>Ce qui ne change pas :</strong> la longueur du saut reste $2$ dans les deux cas — seul le signe du deuxième facteur décide de la direction.',
          '<strong>Règle des signes retrouvée :</strong> $(-) \\times (+) = (-)$ (même sens → résultat négatif) et $(-) \\times (-) = (+)$ (sens inversé → résultat positif).'
        ],
        reading: 'Multiplier par un nombre négatif <strong>inverse le sens</strong> des sauts sur la droite graduée : $(-2) \\times 3 = -6$ (vers la gauche) devient $(-2) \\times (-3) = +6$ (mêmes sauts, mais vers la droite).',
        caption: 'Deux droites graduées superposées : en haut $(-2) \\times 3 = -6$, en bas $(-2) \\times (-3) = +6$, pour visualiser le renversement de sens.'
      },
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
  }
);
