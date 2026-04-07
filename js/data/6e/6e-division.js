/* =========================================================
   Spark Learning – data/6e/6e-division.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-division',
    level: 1, subject: 'maths',
    icon: '➗',
    title: 'Division euclidienne et décimale',
    subtitle: 'Quotient, reste, division posée',
    keywords: ['Division', 'Quotient', 'Reste', 'Dividende', 'Diviseur', 'Décimale'],
    physics: false,

    cours: {
      intro: 'La division répond à la question : « Combien de fois $b$ tient-il dans $a$ ? » La <strong>division euclidienne</strong> donne un quotient entier et un reste.<br/><br/>' +
        'La formule fondamentale : $a = b \\times q + r$ avec $0 \\leq r < b$. <strong>Exemple :</strong> $17 = 5 \\times 3 + 2$ — on fait $3$ groupes de $5$ et il reste $2$.<br/><br/>' +
        'La <strong>division décimale</strong> prolonge le calcul en ajoutant des zéros au reste pour obtenir des décimales. Attention : la division n\'est <strong>pas commutative</strong> ! $12 \\div 4 \\neq 4 \\div 12$.',
      definitions: [
        { term: 'Dividende', def: 'Le nombre que l\'on divise. Dans $a \\div b$, $a$ est le dividende.' },
        { term: 'Diviseur', def: 'Le nombre par lequel on divise. Dans $a \\div b$, $b$ est le diviseur.' },
        { term: 'Quotient', def: 'Résultat de la division. En division euclidienne, c\'est un entier.' },
        { term: 'Reste', def: 'Ce qui reste après la division euclidienne. Il vérifie $0 \\leq r < b$.' }
      ],
      method: {
        title: 'Méthode en 5 étapes',
        steps: [
          '<strong>Identifier</strong> le dividende et le diviseur.',
          '<strong>Chercher</strong> combien de fois le diviseur « tient » dans les premiers chiffres. <em>Exemple :</em> $87 \\div 5$ → $5$ tient $17$ fois dans $87$.',
          '<strong>Multiplier et soustraire</strong> pour trouver le reste partiel.',
          '<strong>Abaisser</strong> le chiffre suivant et recommencer.',
          '<strong>Vérifier</strong> : $b \\times q + r = a$. <em>Exemple :</em> $5 \\times 17 + 2 = 87$ ✓'
        ]
      },
      example: {
        statement: 'Effectuer la division euclidienne de $157$ par $12$.',
        steps: [
          '$12 \\times 13 = 156$ (le plus grand multiple de $12$ inférieur ou égal à $157$).',
          'Reste : $157 - 156 = 1$.',
          'Donc $157 = 12 \\times 13 + 1$.',
          'Vérification : $12 \\times 13 + 1 = 156 + 1 = 157$ ✓'
        ],
        answer: 'Quotient $= 13$, reste $= 1$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Terme</th><th style="border:1px solid var(--border);padding:8px">Symbole</th><th style="border:1px solid var(--border);padding:8px">Exemple ($87 \\div 5$)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Dividende</td><td style="border:1px solid var(--border);padding:8px">$a$</td><td style="border:1px solid var(--border);padding:8px">$87$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Diviseur</td><td style="border:1px solid var(--border);padding:8px">$b$</td><td style="border:1px solid var(--border);padding:8px">$5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Quotient</td><td style="border:1px solid var(--border);padding:8px">$q$</td><td style="border:1px solid var(--border);padding:8px">$17$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Reste</td><td style="border:1px solid var(--border);padding:8px">$r$</td><td style="border:1px solid var(--border);padding:8px">$2$</td></tr></table>',
      formulas: [
        'Division euclidienne : $a = b \\times q + r$ avec $0 \\leq r < b$',
        'Vérification : $b \\times q + r = a$',
        'Division exacte : $r = 0 \\Rightarrow a = b \\times q$'
      ],
      recap: [
        'La division euclidienne de $a$ par $b$ donne : $a = b \\times q + r$ avec $0 \\leq r < b$.',
        'Pour vérifier, on recalcule $b \\times q + r$ et on vérifie qu\'on retrouve $a$.',
        'La division n\'est pas commutative : $a \\div b \\neq b \\div a$ en général.',
        'La division décimale prolonge le calcul en ajoutant des zéros au reste.'
      ],
      piege: 'Piège : la division n\'est pas commutative ! $12 \\div 4 \\neq 4 \\div 12$. Toujours vérifier en multipliant : quotient $\\times$ diviseur + reste = dividende.'
    },

    quiz: [
      { q: 'Dans la division euclidienne de $87$ par $5$, quel est le reste ?', options: ['$2$', '$1$', '$3$', '$0$'], answer: 0, correction: '$87 = 5 \\times 17 + 2$. Le reste est $2$.' },
      { q: 'Combien vaut $13{,}5 \\div 4$ ?', options: ['$3{,}275$', '$3{,}375$', '$3{,}475$', '$3{,}125$'], answer: 1, correction: '$13{,}5 \\div 4 = 3{,}375$.' },
      { q: 'Un élève obtient quotient $= 8$ et reste $= 5$ pour $43 \\div 6$. Comment vérifier ?', options: ['$43 \\div 8$', '$6 \\times 8 + 5 = 53 \\neq 43$ → faux', '$6 \\times 8 + 5 = 53$', '$43 - 6 = 37$'], answer: 1, correction: '$6 \\times 8 + 5 = 53 \\neq 43$. Correct : $43 = 6 \\times 7 + 1$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { emoji: '🍰', intro: 'On partage', objet: 'parts de gâteau', action: 'entre', groupeLabel: 'convives' },
          { emoji: '🍬', intro: 'On distribue', objet: 'bonbons', action: 'à', groupeLabel: 'enfants' },
          { emoji: '⚽', intro: 'On forme des équipes avec', objet: 'joueurs', action: 'en équipes de', groupeLabel: '' },
          { emoji: '✂️', intro: 'Un couturier découpe', objet: 'cm de tissu', action: 'en morceaux de', groupeLabel: 'cm chacun' },
          { emoji: '📚', intro: 'Le bibliothécaire range', objet: 'livres', action: 'sur', groupeLabel: 'étagères' },
          { emoji: '🏃', intro: 'Un entraîneur répartit', objet: 'coureurs', action: 'en', groupeLabel: 'groupes égaux' },
          { emoji: '🧁', intro: 'Un pâtissier répartit', objet: 'cupcakes', action: 'dans', groupeLabel: 'boîtes' },
          { emoji: '🪴', intro: 'Un jardinier plante', objet: 'graines', action: 'en', groupeLabel: 'rangées égales' }
        ]);
        const b = rand(2, 9);
        const q = rand(5, 20);
        const r = rand(0, b - 1);
        const a = b * q + r;
        const statement = scenario.groupeLabel
          ? `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.objet} ${scenario.action} $${b}$ ${scenario.groupeLabel}. Quel est le quotient entier ?`
          : `${scenario.emoji} ${scenario.intro} $${a}$ ${scenario.objet} ${scenario.action} $${b}$. Quel est le quotient entier ?`;
        return {
          statement,
          answer: q,
          tolerance: 0,
          unit: '',
          hint: `Cherche combien de fois $${b}$ « tient » dans $${a}$. Essaie $${b} \\times ${q}$.`,
          solution: [
            `$${a} = ${b} \\times ${q} + ${r}$`,
            `Vérification : $${b} \\times ${q} = ${b * q}$ et $${b * q} + ${r} = ${a}$ ✓`,
            `Le quotient entier est $${q}$ et le reste est $${r}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une école organise un voyage scolaire pour $157$ élèves. Chaque car peut transporter au maximum $45$ élèves.',
      tasks: [
        'Effectue la division euclidienne de $157$ par $45$.',
        'Combien de cars complets peut-on remplir ? Combien d\'élèves restent ?',
        'Combien de cars faut-il réserver au total pour que tous les élèves partent ?'
      ],
      solutions: [
        '$157 = 45 \\times 3 + 22$.',
        '$3$ cars complets, $22$ élèves restants.',
        '$3 + 1 = 4$ cars au total.'
      ],
      finalAnswer: 'Il faut réserver $4$ cars.'
    },

    evaluation: {
      title: 'Évaluation — Division',
      duration: '20 min',
      questions: [
        { statement: 'Effectue la division euclidienne de $97$ par $6$. Quel est le quotient entier ?', type: 'numeric', answer: 16, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Quotient $= 16$.' },
        { statement: 'Quel est le reste de la division euclidienne de $97$ par $6$ ?', type: 'numeric', answer: 1, tolerance: 0, unit: '', points: 2, correction: '$97 = 6 \\times 16 + 1$. Reste $= 1$.' },
        { statement: 'Calcule $17{,}5 \\div 4$.', type: 'numeric', answer: 4.375, tolerance: 0.001, unit: '', points: 2, correction: '$17{,}5 \\div 4 = 4{,}375$.' },
        { statement: 'Dans la formule $a = b \\times q + r$, que représente $r$ ?', type: 'multiple-choice', options: ['Le quotient', 'Le diviseur', 'Le reste', 'Le dividende'], answer: 2, points: 2, correction: '$r$ est le reste.' },
        { statement: 'On partage $250$ billes entre $8$ enfants. Combien chacun et combien de reste ?', type: 'multiple-choice', options: ['$31$ chacun, reste $2$', '$30$ chacun, reste $10$', '$32$ chacun, reste $0$', '$31$ chacun, reste $0$'], answer: 0, points: 2, correction: '$250 = 8 \\times 31 + 2$.' }
      ]
    }
  });
