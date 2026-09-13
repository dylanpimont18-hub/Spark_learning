window.MODULES.push(
    {
    id: 'calcul-algebrique',
    level: 1, subject: 'maths',
    icon: '🔧',
    title: 'Calcul Algébrique – Isoler une inconnue',
    subtitle: 'Équations 1er degré, calcul littéral',
    keywords: ['Équation', 'Isoler x', 'Calcul littéral', 'Factorisation'],
    physics: 'Transformer toute formule physique : $\\rho = m/V$ → trouver $m$',

    cours: {
      intro: 'Isoler une inconnue, c\'est comme défaire un nœud : on défait les opérations dans l\'ordre inverse. <strong>Principe fondamental :</strong> l\'égalité est une balance — toute opération effectuée d\'un côté doit l\'être de l\'autre.' +
        '<br/><br/>' +
        'En physique, la même formule sert dans les deux sens : $\\rho = \\dfrac{m}{V}$ permet de calculer $m$ (si on connaît $\\rho$ et $V$), ou $V$ (si on connaît $m$ et $\\rho$). Il n\'y a pas de "nouvelle formule" — juste de l\'algèbre.' +
        '<br/><br/>' +
        '<strong>Mémo pour ne pas se perdre :</strong> identifier d\'abord ce que l\'on cherche ($x$), repérer ce qui l\'entoure (additions, multiplications…), défaire de l\'extérieur vers l\'intérieur.' +
        '<br/><br/>' +
        'Toujours vérifier en réinjectant la solution dans l\'équation de départ : c\'est la seule façon d\'être sûr à 100% du résultat.',
      definitions: [
        { term: 'Équation', def: 'Égalité comportant une (ou plusieurs) inconnue(s), vraie seulement pour certaines valeurs.' },
        { term: 'Inconnue', def: 'Quantité que l\'on cherche, souvent notée $x$, $I$, $V$, etc.' },
        { term: 'Opération inverse', def: 'L\'opération qui « annule » une autre : l\'addition annule la soustraction, la multiplication annule la division.' },
        { term: 'Vérification', def: 'Remplacer l\'inconnue par la valeur trouvée dans l\'équation de départ pour s\'assurer que l\'égalité est vraie.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier l\'inconnue</strong> à isoler et les opérations qui l\'entourent (addition, multiplication, puissance, etc.). <strong>Exemple :</strong> dans $3x + 7 = 22$, l\'inconnue est $x$, elle est d\'abord multipliée par 3, puis on ajoute 7.',
          '<strong>Défaire les opérations</strong> dans l\'ordre inverse (de l\'extérieur vers l\'intérieur) en faisant la même chose des deux côtés. <strong>Exemple :</strong> $3x + 7 = 22 \\Rightarrow 3x = 22 - 7 = 15 \\Rightarrow x = \\frac{15}{3} = 5$.',
          '<strong>Vérifier</strong> en réinjectant le résultat dans l\'équation de départ. <strong>Exemple :</strong> $3 \\times 5 + 7 = 15 + 7 = 22$ ✓ C\'est cohérent !'
        ]
      },
      example: {
        statement: 'La formule de la vitesse est $v = \\dfrac{d}{t}$. Un train parcourt $d = 180$ km en $t = 1{,}5$ h. Calcule $v$, puis isole $d$ si $v = 90$ km/h et $t = 2{,}5$ h.',
        steps: [
          'Calcul direct : $v = \\dfrac{180}{1{,}5} = 120$ km/h.',
          'On veut isoler $d$ dans $v = \\dfrac{d}{t}$. On multiplie les deux côtés par $t$ : $d = v \\times t$.',
          'Application : $d = 90 \\times 2{,}5 = 225$ km.',
          'Vérification : $\\dfrac{225}{2{,}5} = 90$ km/h ✓'
        ],
        answer: '$v = 120$ km/h puis $d = 225$ km'
      },
      formulas: [
        'Si $ax + b = c$ alors $x = \\dfrac{c - b}{a}$ (avec $a \\neq 0$)',
        'Si $\\dfrac{a}{b} = c$ alors $a = b \\times c$ et $b = \\dfrac{a}{c}$',
        'Si $a \\cdot b = c$ alors $a = \\dfrac{c}{b}$ et $b = \\dfrac{c}{a}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Résoudre une équation — la balance à deux plateaux',
        title: 'Isoler $x$ en gardant l\'égalité en équilibre',
        description: 'Reprenons l\'exemple du tableau ci-dessus : <strong>$4x = 20$</strong>.' +
          '<br/><br/>' +
          'Pour isoler $x$, on applique la <strong>même opération aux deux plateaux</strong> de la balance : ici, diviser par $4$ des deux côtés.',
        svg: `
          <svg viewBox="0 0 480 280" role="img" aria-labelledby="calcalg-balance-title calcalg-balance-desc">
            <title id="calcalg-balance-title">Isoler x par la métaphore de la balance</title>
            <desc id="calcalg-balance-desc">Deux balances a deux plateaux montrent comment isoler x dans l'equation 4x = 20 : la balance de depart avec 4x sur un plateau et 20 sur l'autre, puis apres division des deux cotes par 4, la balance montre x seul face a 5.</desc>

            <text class="axis-label" x="110" y="30" text-anchor="middle">Départ</text>
            <line class="frame-line" x1="55" y1="120" x2="165" y2="120"></line>
            <polygon class="plot-point" points="94,158 126,158 110,120"></polygon>
            <circle class="plot-point-alt" cx="110" cy="120" r="4"></circle>
            <line class="grid-line" x1="55" y1="120" x2="55" y2="170"></line>
            <line class="grid-line" x1="165" y1="120" x2="165" y2="170"></line>
            <line class="frame-line" x1="33" y1="170" x2="77" y2="170"></line>
            <line class="frame-line" x1="143" y1="170" x2="187" y2="170"></line>
            <text class="annotation-label" x="55" y="165" text-anchor="middle">4x</text>
            <text class="label-soft" x="165" y="165" text-anchor="middle">20</text>
            <text class="label-soft" x="110" y="108" text-anchor="middle">=</text>

            <line class="graph-line" x1="180" y1="120" x2="292" y2="120"></line>
            <polygon class="plot-point" points="292,113 304,120 292,127"></polygon>
            <text class="annotation-label" x="240" y="102" text-anchor="middle">÷ 4</text>
            <text class="label-soft" x="240" y="145" text-anchor="middle">(les deux côtés)</text>

            <text class="axis-label" x="370" y="30" text-anchor="middle">Résultat</text>
            <line class="frame-line" x1="315" y1="120" x2="425" y2="120"></line>
            <polygon class="plot-point" points="354,158 386,158 370,120"></polygon>
            <circle class="plot-point-alt" cx="370" cy="120" r="4"></circle>
            <line class="grid-line" x1="315" y1="120" x2="315" y2="170"></line>
            <line class="grid-line" x1="425" y1="120" x2="425" y2="170"></line>
            <line class="frame-line" x1="293" y1="170" x2="337" y2="170"></line>
            <line class="frame-line" x1="403" y1="170" x2="447" y2="170"></line>
            <text class="annotation-label" x="315" y="165" text-anchor="middle">x</text>
            <text class="label-soft" x="425" y="165" text-anchor="middle">5</text>
            <text class="label-soft" x="370" y="108" text-anchor="middle">=</text>

            <text class="annotation-label" x="240" y="250" text-anchor="middle">x = 5</text>
          </svg>
        `,
        notes: [
          '<strong>Étape 1 — Départ :</strong> la balance est en équilibre, avec $4x$ sur un plateau et $20$ sur l\'autre.',
          '<strong>Étape 2 — Diviser les deux côtés par $4$ :</strong> le plateau de gauche passe de $4x$ à $x$ (le facteur $4$ disparaît), et celui de droite passe de $20$ à $20 \\div 4 = 5$.',
          '<strong>Résultat :</strong> $x$ se retrouve seul sur son plateau, face à $5$ — l\'égalité reste vraie tout au long de la manipulation.'
        ],
        reading: 'Le principe est toujours le même : <strong>ce qu\'on fait à un plateau, on le fait à l\'autre</strong> — sinon la balance penche et l\'égalité n\'est plus vraie.',
        caption: 'Résolution de $4x = 20$ par la métaphore de la balance à deux plateaux : diviser les deux côtés par $4$ pour isoler $x = 5$.'
      },
      recap: [
        'L\'égalité est une balance : même opération des deux côtés',
        'Défaire les opérations de l\'extérieur vers l\'intérieur (inverse de la construction)',
        'Toujours vérifier en substituant la valeur trouvée',
        'En physique, isoler une grandeur dans une formule = même technique qu\'en algèbre'
      ],
      piege: 'Le piège numéro 1 : oublier d\'appliquer l\'opération des deux côtés. Si tu soustrais 5 à gauche, tu dois soustraire 5 à droite aussi. L\'égalité est une balance : ce que tu fais d\'un côté, tu le fais de l\'autre !'
    },

    quiz: [
      {
        q: 'Résoudre $3x + 7 = 22$.',
        options: ['$x = 5$', '$x = 9{,}67$', '$x = 4{,}33$', '$x = 15$'],
        answer: 0,
        correction: '$3x + 7 = 22 \\Rightarrow 3x = 22 - 7 = 15 \\Rightarrow x = \\frac{15}{3} = 5$. Vérification : $3 \\times 5 + 7 = 15 + 7 = 22$ ✓'
      },
      {
        q: 'Dans la formule $P = U \\cdot I$, si $P = 60$ W et $U = 12$ V, quelle est la valeur de $I$ ?',
        options: ['$I = 720$ A', '$I = 5$ A', '$I = 48$ A', '$I = 0{,}2$ A'],
        answer: 1,
        correction: 'On isole $I$ : $I = \\frac{P}{U} = \\frac{60}{12} = 5$ A. En physique, isoler une inconnue dans une formule, c\'est exactement la même technique qu\'en algèbre pur !'
      },
      {
        q: 'Un élève résout $2x - 6 = 10$ et trouve $x = 2$. Quelle vérification montre que c\'est faux ?',
        options: [
          'On vérifie : $2 \\times 2 - 6 = -2 \\neq 10$. L\'élève a divisé par $2$ avant de soustraire $6$, au lieu de l\'inverse.',
          'On vérifie : $2 \\times 2 - 6 = -2 = 10$ ✓. L\'élève a bien calculé.',
          'Il n\'y a pas de vérification possible pour les équations.',
          'On vérifie : $2 \\times 2 = 4$, puis $4 - 6 = -2$, et $-2 = 10$ ✓.'
        ],
        answer: 0,
        correction: 'Vérification : $2 \\times 2 - 6 = 4 - 6 = -2 \\neq 10$, ce qui ne correspond pas à l\'équation de départ : l\'élève s\'est trompé dans l\'ordre des étapes. La bonne résolution : $2x - 6 = 10 \\Rightarrow 2x = 10 + 6 = 16 \\Rightarrow x = 8$. Vérification : $2 \\times 8 - 6 = 16 - 6 = 10$ ✓. Il faut toujours isoler le terme en $x$ avant de diviser.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le generateur ne tirait qu'une forme d'equation,
         $ax + b = c$ avec a, b et c POSITIFS : 5 moules, 15 enonces, 3 de
         banque. Le chapitre s'intitule pourtant « isoler une inconnue », et
         l'evaluation interroge la soustraction d'un coefficient negatif, la
         division par une fraction et l'isolation d'une variable dans une
         formule — trois formes que les exercices ne presentaient jamais.

         Cinq taches maintenant. Elles suivent l'ordre de difficulte reel :
         addition seule, coefficient negatif (ou la division par un negatif
         renverse le raisonnement), inconnue des deux cotes, quotient, et
         isolation dans une formule de physique. */
      generate() {
        const tache = pick(['simple', 'negatif', 'deux-cotes', 'quotient', 'formule']);
        const ctx = pick([
          { intro: 'En mecanique, la relation entre force, masse et acceleration donne l\'equation', emoji: '🔧' },
          { intro: 'Pour calculer la tension electrique dans un circuit, on resout', emoji: '⚡' },
          { intro: 'En chimie, l\'equilibre des masses donne l\'equation', emoji: '⚗️' },
          { intro: 'Pour determiner la vitesse d\'un mobile, on resout', emoji: '🚀' },
          { intro: 'En economie, le calcul du prix de revient conduit a l\'equation', emoji: '💰' }
        ]);

        if (tache === 'simple') {
          const a = rand(2, 9), x = rand(2, 12), b = rand(1, 20);
          const c = a * x + b;
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' : $' + a + 'x + ' + b + ' = ' + c + '$. Quelle est la valeur de $x$ ?',
            answer: x,
            tolerance: 0.001,
            unit: '',
            hint: 'Retire d\'abord $' + b + '$ aux deux membres pour isoler $' + a + 'x$, puis divise par $' + a + '$.',
            solution: [
              'Equation de depart : $' + a + 'x + ' + b + ' = ' + c + '$.',
              'On retire $' + b + '$ aux DEUX membres : $' + a + 'x = ' + c + ' - ' + b + ' = ' + (c - b) + '$.',
              'On divise les deux membres par $' + a + '$ : $x = \\dfrac{' + (c - b) + '}{' + a + '} = ' + x + '$.'
            ]
          };
        }

        if (tache === 'negatif') {
          // Coefficient NEGATIF : c'est la forme ou le signe se perd le plus
          // souvent, et elle etait totalement absente du generateur.
          const a = rand(2, 8), x = rand(2, 10), b = rand(5, 30);
          const c = -a * x + b;
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' : $-' + a + 'x + ' + b + ' = ' + c + '$. Quelle est la valeur de $x$ ?',
            answer: x,
            tolerance: 0.001,
            unit: '',
            hint: 'Isole d\'abord $-' + a + 'x$, puis divise par $-' + a + '$. Diviser par un nombre negatif change le signe du resultat.',
            solution: [
              'Equation de depart : $-' + a + 'x + ' + b + ' = ' + c + '$.',
              'On retire $' + b + '$ aux deux membres : $-' + a + 'x = ' + c + ' - ' + b + ' = ' + (c - b) + '$.',
              'On divise par $-' + a + '$ : $x = \\dfrac{' + (c - b) + '}{-' + a + '} = ' + x + '$. Deux nombres negatifs se divisent en un resultat positif.'
            ]
          };
        }

        if (tache === 'deux-cotes') {
          // Inconnue des DEUX cotes : le vrai saut de la quatrieme.
          const x = rand(2, 10);
          const a = rand(4, 9), b = rand(2, 3);
          const p = rand(1, 12);
          // a*x + p = b*x + q  =>  q = (a-b)*x + p
          const q = (a - b) * x + p;
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' : $' + a + 'x + ' + p + ' = ' + b + 'x + ' + q + '$. Quelle est la valeur de $x$ ?',
            answer: x,
            tolerance: 0.001,
            unit: '',
            hint: 'Commence par rassembler les $x$ d\'un seul cote : retire $' + b + 'x$ aux deux membres.',
            solution: [
              'Equation de depart : $' + a + 'x + ' + p + ' = ' + b + 'x + ' + q + '$.',
              'On retire $' + b + 'x$ aux deux membres : $' + (a - b) + 'x + ' + p + ' = ' + q + '$.',
              'On retire $' + p + '$ : $' + (a - b) + 'x = ' + (q - p) + '$, puis on divise par $' + (a - b) + '$ : $x = ' + x + '$.'
            ]
          };
        }

        if (tache === 'quotient') {
          const d = rand(2, 8), x = rand(2, 12), b = rand(1, 15);
          const c = x / d + b;
          const cAff = Number.isInteger(c) ? String(c) : fr(parseFloat(c.toFixed(3)));
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' : $\\dfrac{x}{' + d + '} + ' + b + ' = ' + cAff + '$. Quelle est la valeur de $x$ ?',
            answer: x,
            tolerance: 0.001,
            unit: '',
            hint: 'Isole d\'abord la fraction, puis multiplie les deux membres par $' + d + '$ : multiplier annule la division.',
            solution: [
              'On retire $' + b + '$ aux deux membres : $\\dfrac{x}{' + d + '} = ' + fr(parseFloat((c - b).toFixed(3))) + '$.',
              'On multiplie les deux membres par $' + d + '$ : $x = ' + fr(parseFloat((c - b).toFixed(3))) + ' \\times ' + d + ' = ' + x + '$.',
              'Erreur frequente : diviser par $' + d + '$ au lieu de multiplier. Pour defaire une division, on multiplie.'
            ]
          };
        }

        // tache === 'formule' : isoler une lettre dans une formule de physique,
        // ce que l'evaluation demande et que rien n'exercait.
        const cas = pick([
          { f: 'v = \\dfrac{d}{t}', cherche: 'd', don: 'v = ' + rand(2, 9) + '$ et $t = ' + rand(2, 9), calc: null },
          { f: 'P = U \\times I', cherche: 'U', don: null, calc: null }
        ]);
        if (cas.cherche === 'd') {
          const v = rand(2, 9), t = rand(2, 9);
          return {
            statement: '🚀 La vitesse d\'un mobile verifie $v = \\dfrac{d}{t}$, ou $d$ est la distance et $t$ la duree. ' +
              'On mesure $v = ' + v + '$ et $t = ' + t + '$. Quelle est la valeur de $d$ ?',
            answer: v * t,
            tolerance: 0.001,
            unit: '',
            hint: 'Isole $d$ dans la formule AVANT de remplacer par les nombres : multiplie les deux membres par $t$.',
            solution: [
              'On part de $v = \\dfrac{d}{t}$ et on multiplie les deux membres par $t$ : $d = v \\times t$.',
              'On remplace seulement maintenant : $d = ' + v + ' \\times ' + t + ' = ' + (v * t) + '$.',
              'Isoler d\'abord, remplacer ensuite : c\'est plus sur, et la formule obtenue resservira.'
            ]
          };
        }
        const P = rand(2, 12) * rand(2, 9), I = pick([2, 3, 4, 6]);
        const U = P / I;
        const Puse = U * I;
        return {
          statement: '⚡ La puissance electrique verifie $P = U \\times I$. On mesure $P = ' + Puse + '$ et $I = ' + I + '$. Quelle est la valeur de $U$ ?',
          answer: U,
          tolerance: 0.001,
          unit: '',
          hint: 'Isole $U$ : divise les deux membres par $I$.',
          solution: [
            'On part de $P = U \\times I$ et on divise les deux membres par $I$ : $U = \\dfrac{P}{I}$.',
            'On remplace : $U = \\dfrac{' + Puse + '}{' + I + '} = ' + fr(U) + '$.'
          ]
        };
      }
    },
    probleme: {
      context: 'La masse volumique (densité) d\'une substance est définie par la relation $\\rho = \\dfrac{m}{V}$ où $\\rho$ est en kg/m³, $m$ est la masse en kg et $V$ est le volume en m³. L\'aluminium a une masse volumique $\\rho = 2700$ kg/m³. On souhaite fabriquer une pièce en aluminium de volume $V = 5 \\times 10^{-4}$ m³.',
      schema: null,
      tasks: [
        'À partir de la formule $\\rho = \\dfrac{m}{V}$, isoler la masse $m$.',
        'Calculer numériquement la masse $m$ de la pièce.',
        'Exprimer le résultat en grammes et vérifier que l\'ordre de grandeur est cohérent.'
      ],
      solutions: [
        'On isole $m$ : $\\rho = \\frac{m}{V}$. En multipliant les deux membres par $V$ : $m = \\rho \\times V$.',
        '$m = 2700 \\times 5 \\times 10^{-4} = 2700 \\times 0{,}0005 = 1{,}35$ kg.',
        '$m = 1{,}35$ kg $ = 1350$ g. C\'est cohérent : une pièce d\'aluminium d\'un demi-litre (~500 cm³) pèse environ 1,35 kg.'
      ],
      finalAnswer: '$m = 1{,}35$ kg $= 1350$ g'
    },

    evaluation: {
      title: 'Évaluation — Calcul Algébrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre l\'équation $5x - 3 = 27$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$5x - 3 = 27 \\Rightarrow 5x = 27 + 3 = 30 \\Rightarrow x = \\dfrac{30}{5} = 6$. Vérification : $5 \\times 6 - 3 = 30 - 3 = 27$ ✓'
        },
        {
          statement: 'Dans la formule $v = \\dfrac{d}{t}$, exprimer $t$ en fonction de $v$ et $d$.',
          type: 'multiple-choice',
          options: ['$t = v \\times d$', '$t = \\dfrac{d}{v}$', '$t = \\dfrac{v}{d}$', '$t = d - v$'],
          answer: 1,
          points: 2,
          correction: '$v = \\dfrac{d}{t}$. On multiplie les deux côtés par $t$ : $v \\times t = d$. Puis on divise par $v$ : $t = \\dfrac{d}{v}$.'
        },
        {
          statement: 'Résoudre $\\dfrac{x}{4} + 7 = 10$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{x}{4} + 7 = 10 \\Rightarrow \\dfrac{x}{4} = 10 - 7 = 3 \\Rightarrow x = 3 \\times 4 = 12$. Vérification : $\\dfrac{12}{4} + 7 = 3 + 7 = 10$ ✓'
        },
        {
          statement: 'L\'énergie cinétique est $E_c = \\dfrac{1}{2}mv^2$. Si $E_c = 100\\,\\text{J}$ et $m = 8\\,\\text{kg}$, quelle est la valeur de $v$ ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: 'm/s',
          points: 2,
          correction: '$E_c = \\dfrac{1}{2}mv^2 \\Rightarrow v^2 = \\dfrac{2E_c}{m} = \\dfrac{2 \\times 100}{8} = 25 \\Rightarrow v = \\sqrt{25} = 5\\,\\text{m/s}$.'
        },
        {
          statement: 'Quelle est la bonne résolution de $-2x + 8 = 14$ ?',
          type: 'multiple-choice',
          options: ['$x = 11$', '$x = 3$', '$x = -3$', '$x = -11$'],
          answer: 2,
          points: 2,
          correction: '$-2x + 8 = 14 \\Rightarrow -2x = 14 - 8 = 6 \\Rightarrow x = \\dfrac{6}{-2} = -3$. Vérification : $-2 \\times (-3) + 8 = 6 + 8 = 14$ ✓'
        }
      ]
    }
  }
);
