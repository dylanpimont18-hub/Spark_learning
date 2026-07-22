/* =========================================================
   Spark Learning – data/5e/5e-priorites-operations.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-priorites-operations',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Priorités des opérations',
    subtitle: 'Règles de calcul, parenthèses, PEMDAS',
    keywords: ['Parenthèses', 'Puissances', 'Multiplication', 'Division', 'Addition', 'Soustraction'],
    physics: 'Calcul numérique de formules physiques : $E = \\frac{1}{2}mv^2$, $P = RI^2$',

    cours: {
      intro: 'Les priorités des opérations sont une <strong>convention universelle</strong> qui garantit qu\'une expression mathématique a une seule interprétation. Sans cette convention, $2 + 3 \\times 4$ pourrait valoir $20$ ou $14$ selon l\'ordre de lecture.<br/><br/>' +
        'L\'ordre est : <strong>Parenthèses → Exposants/Racines → Multiplications/Divisions → Additions/Soustractions</strong> (mémo : PEMDAS ou « Cher Ami »).<br/><br/>' +
        '<strong>Le trait de fraction agit comme des parenthèses</strong> : $\\dfrac{8+4}{2} = (8+4) \\div 2 = 6$, mais $8 + 4 \\div 2 = 8 + 2 = 10$.<br/><br/>' +
        'En physique, cela évite les erreurs classiques : dans $E_c = \\dfrac{1}{2}mv^2$, c\'est $v$ seul qui est au carré (pas $mv$), et dans $P = RI^2$, c\'est $I$ seul (pas $RI$).',
      definitions: [
        { term: 'Priorité opératoire', def: 'Ordre dans lequel les opérations doivent être effectuées. La multiplication est prioritaire sur l\'addition.' },
        { term: 'Parenthèses', def: 'Symboles $()$ qui forcent un calcul à être effectué en premier, quel que soit son rang de priorité.' },
        { term: 'PEMDAS', def: 'Moyen mnémotechnique : Parenthèses, Exposants, Multiplication/Division, Addition/Soustraction.' },
        { term: 'Trait de fraction', def: 'Agit comme des parenthèses implicites autour du numérateur et du dénominateur.' }
      ],
      example: {
        statement: 'Calculer $3 + 2 \\times (5 - 1)^2 \\div 4$.',
        steps: [
          'Parenthèses : $5 - 1 = 4$.',
          'Exposant : $4^2 = 16$.',
          'Multiplication/division (gauche à droite) : $2 \\times 16 = 32$, puis $32 \\div 4 = 8$.',
          'Addition : $3 + 8 = 11$.'
        ],
        answer: '$11$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Priorités des opérations — pas à pas',
        title: 'Un même calcul, quatre étapes : dans quel ordre calculer ?',
        description: 'Reprenons un calcul qui mobilise <strong>les quatre niveaux de priorité</strong> : $2 + 3^2 \\times (7 - 4) \\div 3 - 1$.<br/><br/>' +
          'Plutôt que de calculer dans l\'ordre de lecture, on traite <strong>une priorité à la fois</strong> : d\'abord les parenthèses, puis les puissances, puis les multiplications/divisions, et enfin les additions/soustractions.',
        svg: `
          <svg viewBox="0 0 1220 240" role="img" aria-labelledby="priorites-diag-title priorites-diag-desc">
            <title id="priorites-diag-title">Résolution de 2 + 3² × (7 − 4) ÷ 3 − 1 en 4 étapes</title>
            <desc id="priorites-diag-desc">Quatre colonnes montrent l'expression 2 + 3 au carre fois (7 moins 4) divise par 3 moins 1, resolue etape par etape : d'abord la partie entre parentheses est mise en evidence et calculee (7 moins 4 egale 3), puis la puissance 3 au carre est mise en evidence et calculee (egale 9), puis la multiplication et la division sont mises en evidence et calculees de gauche a droite (9 fois 3 egale 27, puis 27 divise par 3 egale 9), puis enfin l'addition et la soustraction sont mises en evidence et calculees de gauche a droite (2 plus 9 egale 11, puis 11 moins 1 egale 10), pour un resultat final de 10. Des fleches relient chaque colonne a la suivante.</desc>

            <text class="axis-label" x="150" y="28" text-anchor="middle">1. Parenthèses</text>
            <rect class="frame-line" fill="none" rx="5" x="116" y="76" width="77" height="27"></rect>
            <text class="label" x="35" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 3² × (7 − 4) ÷ 3 − 1</text>
            <text class="label-soft" x="150" y="135" text-anchor="middle" style="font-size:13px">7 − 4 = 3</text>
            <text class="annotation-label" x="150" y="182" text-anchor="middle">2 + 3² × 3 ÷ 3 − 1</text>

            <line class="graph-line" x1="278" y1="95" x2="317" y2="95"></line>
            <polygon class="plot-point" points="317,88 329,95 317,102"></polygon>

            <text class="axis-label" x="450" y="28" text-anchor="middle">2. Puissances</text>
            <rect class="frame-line" fill="none" rx="5" x="367" y="76" width="31" height="27"></rect>
            <text class="label" x="335" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 3² × 3 ÷ 3 − 1</text>
            <text class="label-soft" x="450" y="135" text-anchor="middle" style="font-size:13px">3² = 9</text>
            <text class="annotation-label" x="450" y="182" text-anchor="middle">2 + 9 × 3 ÷ 3 − 1</text>

            <line class="graph-line" x1="578" y1="95" x2="617" y2="95"></line>
            <polygon class="plot-point" points="617,88 629,95 617,102"></polygon>

            <text class="axis-label" x="750" y="28" text-anchor="middle">3. Multiplication / Division</text>
            <rect class="frame-line" fill="none" rx="5" x="668" y="76" width="96" height="27"></rect>
            <text class="label" x="635" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 9 × 3 ÷ 3 − 1</text>
            <text class="label-soft" x="750" y="124" text-anchor="middle" style="font-size:13px">9 × 3 = 27</text>
            <text class="label-soft" x="750" y="146" text-anchor="middle" style="font-size:13px">27 ÷ 3 = 9</text>
            <text class="annotation-label" x="750" y="182" text-anchor="middle">2 + 9 − 1</text>

            <line class="graph-line" x1="878" y1="95" x2="917" y2="95"></line>
            <polygon class="plot-point" points="917,88 929,95 917,102"></polygon>

            <text class="axis-label" x="1050" y="28" text-anchor="middle">4. Addition / Soustraction</text>
            <rect class="frame-line" fill="none" rx="5" x="930" y="76" width="96" height="27"></rect>
            <text class="label" x="935" y="95" style="font-family:monospace;font-size:16px;font-weight:600">2 + 9 − 1</text>
            <text class="label-soft" x="1050" y="124" text-anchor="middle" style="font-size:13px">2 + 9 = 11</text>
            <text class="label-soft" x="1050" y="146" text-anchor="middle" style="font-size:13px">11 − 1 = 10</text>
            <text class="label-soft" x="1050" y="176" text-anchor="middle" style="font-size:12px">Résultat final</text>
            <text class="plot-point" x="1050" y="216" text-anchor="middle" style="font-family:'Poppins',sans-serif;font-weight:800;font-size:26px">= 10</text>
          </svg>
        `,
        notes: [
          '<strong>Parenthèses :</strong> on calcule d\'abord ce qui est entre parenthèses, même si ce n\'est pas la première opération rencontrée en lisant de gauche à droite. $7 - 4 = 3$.',
          '<strong>Puissances :</strong> une fois les parenthèses résolues, on calcule les puissances avant tout le reste. $3^2 = 9$.',
          '<strong>Multiplications et divisions :</strong> elles ont la même priorité, donc on les effectue dans l\'ordre de lecture, de gauche à droite. $9 \\times 3 = 27$, puis $27 \\div 3 = 9$.',
          '<strong>Additions et soustractions :</strong> en dernier, toujours de gauche à droite. $2 + 9 = 11$, puis $11 - 1 = 10$.'
        ],
        reading: 'Le résultat final est <strong>$10$</strong>.<br/><br/>Ce n\'est ni un calcul « de gauche à droite », ni un calcul « au hasard » : c\'est un <strong>ordre fixe et universel</strong>, le même pour tout le monde, ce qui garantit qu\'une expression mathématique a toujours une seule valeur.',
        caption: 'Résolution de $2 + 3^2 \\times (7 - 4) \\div 3 - 1$ en 4 étapes, en respectant l\'ordre <strong>parenthèses → puissances → multiplications/divisions → additions/soustractions</strong>.'
      },
      method: {
        title: 'Ordre de priorité (de la plus haute à la plus basse)',
        steps: [
          '<strong>1. Parenthèses</strong> : calculer en premier tout ce qui est entre parenthèses, de l\'intérieur vers l\'extérieur.',
          '<strong>2. Puissances et racines</strong> : calculer $a^n$ et $\\sqrt{a}$ avant de multiplier ou additionner.',
          '<strong>3. Multiplications et divisions</strong> : de gauche à droite, avant les additions/soustractions.',
          '<strong>4. Additions et soustractions</strong> : en dernier, de gauche à droite.'
        ]
      },
      formulas: [
        'Ordre : $()$ → $x^n$ → $\\times \\div$ → $+ -$',
        '$a + b \\times c = a + (b \\times c)$ (la multiplication est prioritaire)',
        '$\\dfrac{a + b}{c} = (a + b) \\div c$ (le trait de fraction fait office de parenthèses)'
      ],
      recap: [
        'Toujours commencer par les parenthèses (de l\'intérieur vers l\'extérieur).',
        'La multiplication et la division passent AVANT l\'addition et la soustraction.',
        'Le trait de fraction agit comme des parenthèses implicites.',
        'En cas de doute, ajouter des parenthèses pour lever l\'ambiguïté.'
      ],
      piege: 'Le signe de division $\\div$ et le trait de fraction se comportent différemment : $10 - 4 \\div 2 = 10 - 2 = 8$ (on divise d\'abord). Mais $\\dfrac{10 - 4}{2} = \\dfrac{6}{2} = 3$ (le trait de fraction groupe le numérateur).'
    },

    quiz: [
      {
        q: 'Calculer $3 + 4 \\times 2 - 1$.',
        options: ['$13$', '$10$', '$15$', '$7$'],
        answer: 1,
        correction: 'Priorité à la multiplication : $4 \\times 2 = 8$. Puis : $3 + 8 - 1 = 10$.'
      },
      {
        q: 'Calculer $(5 + 3)^2 \\div 4$.',
        options: ['$28$', '$16$', '$36$', '$17$'],
        answer: 1,
        correction: 'Parenthèses d\'abord : $5 + 3 = 8$. Puis puissance : $8^2 = 64$. Puis division : $64 \\div 4 = 16$.'
      },
      {
        q: 'Un élève calcule $2 + 3 \\times 4$ en faisant $(2+3) \\times 4 = 20$. Laquelle de ces corrections est juste ?',
        options: [
          'Il a raison : on lit de gauche à droite, donc $(2+3)$ d\'abord.',
          'Non : la multiplication est prioritaire sur l\'addition. Il faut d\'abord $3 \\times 4 = 12$, puis $2 + 12 = 14$.',
          'Non : il faut d\'abord $2 + 3 = 5$, puis $5 \\times 4 = 20$, mais ensuite diviser par $2$.',
          'Non : il faut calculer $2 \\times 3 + 4 = 10$.'
        ],
        answer: 1,
        correction: 'La règle de priorité dit que la multiplication est toujours calculée <em>avant</em> l\'addition, sans parenthèses. Donc $2 + 3 \\times 4 = 2 + (3 \\times 4) = 2 + 12 = 14$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick(['contexte1', 'contexte2', 'contexte3', 'contexte4', 'contexte5']);

        if (type === 'contexte1') {
          // Note finale pondérée
          const noteDS = rand(8, 18), noteInterro = rand(5, 16), coef = rand(2, 3), bonus = rand(1, 3);
          const answer = noteDS + noteInterro * coef - bonus;
          return {
            statement: `Un élève a $${noteDS}$ au DS et $${noteInterro}$ à l'interrogation (coefficient $${coef}$). On retire $${bonus}$ point(s) de malus retard.<br/>La note finale est : $${noteDS} + ${noteInterro} \\times ${coef} - ${bonus}$.<br/>Calcule cette note en respectant les <strong>priorités</strong>.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `La multiplication est prioritaire : commence par $${noteInterro} \\times ${coef}$, puis effectue les additions et soustractions.`,
            solution: [
              `Priorité (multiplication) : $${noteInterro} \\times ${coef} = ${noteInterro * coef}$`,
              `Puis de gauche à droite : $${noteDS} + ${noteInterro * coef} - ${bonus} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte2') {
          // Budget avec parenthèses : (a + b) × c
          const prixUnit = rand(3, 8), fraisLiv = rand(2, 5), nb = rand(2, 5);
          const answer = (prixUnit + fraisLiv) * nb;
          return {
            statement: `Un livre coûte $${prixUnit}$ € et les frais de livraison sont de $${fraisLiv}$ € par livre. Tu commandes $${nb}$ livres.<br/>Le coût total est : $(${prixUnit} + ${fraisLiv}) \\times ${nb}$.<br/>Combien paies-tu au total ?`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Les parenthèses d'abord : calcule $${prixUnit} + ${fraisLiv}$, puis multiplie par $${nb}$.`,
            solution: [
              `Parenthèses : $${prixUnit} + ${fraisLiv} = ${prixUnit + fraisLiv}$`,
              `Multiplication : $${prixUnit + fraisLiv} \\times ${nb} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte3') {
          // Vitesse : a × b + c × d
          const v1 = rand(2, 5), t1 = rand(1, 3), v2 = rand(3, 7), t2 = rand(1, 3);
          const answer = v1 * t1 + v2 * t2;
          return {
            statement: `Un cycliste roule à $${v1}\\,\\text{km/h}$ pendant $${t1}\\,\\text{h}$, puis accélère à $${v2}\\,\\text{km/h}$ pendant $${t2}\\,\\text{h}$.<br/>La distance totale est : $${v1} \\times ${t1} + ${v2} \\times ${t2}$.<br/>Calcule cette distance.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Il y a deux multiplications prioritaires : $${v1} \\times ${t1}$ et $${v2} \\times ${t2}$. Additionne ensuite.`,
            solution: [
              `Priorité : $${v1} \\times ${t1} = ${v1 * t1}$ et $${v2} \\times ${t2} = ${v2 * t2}$`,
              `Addition : $${v1 * t1} + ${v2 * t2} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte4') {
          // Physique : énergie avec parenthèses et puissance : (a + b)² - c
          const a = rand(2, 5), b = rand(1, 4), c = rand(1, 6);
          const somme = a + b;
          const answer = somme * somme - c;
          return {
            statement: `En physique, on doit calculer l'expression $(${a} + ${b})^2 - ${c}$.<br/>Applique les <strong>priorités</strong> (parenthèses, puis puissance, puis soustraction).`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Étape 1 : parenthèses $${a} + ${b} = ${somme}$. Étape 2 : puissance $${somme}^2$. Étape 3 : soustraction.`,
            solution: [
              `Parenthèses : $${a} + ${b} = ${somme}$`,
              `Puissance : $${somme}^2 = ${somme * somme}$`,
              `Soustraction : $${somme * somme} - ${c} = ${answer}$`
            ]
          };
        }
        // contexte5 : Budget courses avec structure a × b + c
        const prixPommes = rand(2, 5), nbKg = rand(2, 4), prixSac = rand(1, 3);
        const answer = prixPommes * nbKg + prixSac;
        return {
          statement: `Au marché, les pommes coûtent $${prixPommes}$ €/kg. Tu en achètes $${nbKg}\\,\\text{kg}$ et tu prends un sac à $${prixSac}$ €.<br/>Le prix total est : $${prixPommes} \\times ${nbKg} + ${prixSac}$.<br/>Combien paies-tu ?`,
          answer,
          tolerance: 0,
          unit: '',
          hint: `Multiplication d'abord : $${prixPommes} \\times ${nbKg}$, puis ajoute $${prixSac}$.`,
          solution: [
            `Priorité : $${prixPommes} \\times ${nbKg} = ${prixPommes * nbKg}$`,
            `Addition : $${prixPommes * nbKg} + ${prixSac} = ${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circuit électrique a une résistance $R = 3\\,\\Omega$, parcouru par un courant $I = 2\\,\\text{A}$. La puissance dissipée est $P = R \\times I^2$ et l\'énergie dissipée en $t = 10\\,\\text{s}$ est $E = P \\times t$.',
      schema: null,
      tasks: [
        'Calculer $P = R \\times I^2$ en respectant les priorités (exposant avant multiplication).',
        'Calculer $E = P \\times t$.',
        'Un élève calcule $P = (R \\times I)^2 = 6^2 = 36\\,\\text{W}$. Quelle est son erreur ?'
      ],
      solutions: [
        '$P = R \\times I^2 = 3 \\times (2)^2 = 3 \\times 4 = 12\\,\\text{W}$. La puissance est prioritaire sur la multiplication.',
        '$E = P \\times t = 12 \\times 10 = 120\\,\\text{J}$.',
        'L\'élève a mis des parenthèses autour de $R \\times I$ ce qui change le calcul. La formule est $P = R \\times I^2$, pas $(R \\times I)^2$. Seul $I$ est élevé au carré, pas le produit $RI$.'
      ],
      finalAnswer: '$P = 12\\,\\text{W}$, $E = 120\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Priorités des opérations',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $5 + 3 \\times 6 - 2$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Multiplication d\'abord : $3 \\times 6 = 18$. Puis : $5 + 18 - 2 = 21$.'
        },
        {
          statement: 'Calculer $(7 - 3)^2 + 5$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Parenthèses d\'abord : $7 - 3 = 4$. Puissance : $4^2 = 16$. Addition : $16 + 5 = 21$.'
        },
        {
          statement: 'Calculer $\\dfrac{12 + 8}{4}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le trait de fraction agit comme des parenthèses : on calcule le numérateur d\'abord : $12 + 8 = 20$. Puis $20 \\div 4 = 5$.'
        },
        {
          statement: 'Quelle est la valeur de $2 \\times 3^2$ ?',
          type: 'multiple-choice',
          options: [
            '$36$ car $(2 \\times 3)^2 = 6^2 = 36$.',
            '$18$ car la puissance est prioritaire : $3^2 = 9$, puis $2 \\times 9 = 18$.',
            '$12$ car $2 \\times 3 \\times 2 = 12$.',
            '$8$ car $2^3 \\times 1 = 8$.'
          ],
          answer: 1,
          points: 2,
          correction: 'La puissance est prioritaire sur la multiplication. On calcule d\'abord $3^2 = 9$, puis $2 \\times 9 = 18$.'
        },
        {
          statement: 'Calculer $4 + 2 \\times (8 - 3) - 1$.',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Parenthèses : $8 - 3 = 5$. Multiplication : $2 \\times 5 = 10$. Puis : $4 + 10 - 1 = 13$.'
        }
      ]
    }
  });
