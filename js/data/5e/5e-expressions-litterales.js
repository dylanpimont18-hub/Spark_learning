/* =========================================================
   Spark Learning – data/5e/5e-expressions-litterales.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-expressions-litterales',
    level: 1, subject: 'maths',
    icon: '🔤',
    title: 'Expressions littérales',
    subtitle: 'Calculer, réduire, substituer',
    keywords: ['Expression littérale', 'Variable', 'Substitution', 'Réduire', 'Termes semblables'],
    physics: false,

    cours: {
      intro: 'Jusqu\'ici, en arithmétique, tu calcules avec des <strong>nombres précis</strong> : « combien font $3 + 5$ ? ». Avec les expressions littérales, on franchit une étape fondamentale : on remplace « un nombre inconnu » par une <strong>lettre</strong> (souvent $x$, $a$, $n$…). C\'est le début de l\'<strong>algèbre</strong> !<br/><br/>' +
        'Imagine une formule de prix : « le prix est 5 € par kilo, plus 2 € de frais fixes ». En arithmétique, tu calculerais cas par cas ($5 \\times 1 + 2 = 7$, $5 \\times 2 + 2 = 12$…). Avec l\'algèbre, tu écris une seule formule : $P = 5x + 2$, et elle fonctionne <strong>pour toutes les valeurs</strong> de $x$ (le nombre de kilos). C\'est plus puissant, plus rapide, plus général.<br/><br/>' +
        '<strong>Termes semblables :</strong> on ne peut additionner que des termes avec la même variable au même degré — $3x$ et $5x$ sont semblables ($\\to 8x$), mais $3x$ et $5x^2$ ne le sont pas. De même, $2$ et $3x$ ne sont pas semblables. Pense à des unités : on n\'additionne pas des mètres et des mètres carrés !<br/><br/>' +
        'La <strong>substitution</strong> (remplacer la lettre par un nombre) permet de vérifier un résultat ou de calculer une formule physique comme $E_c = \\dfrac{1}{2}mv^2$ ou $U = RI$. C\'est un outil essentiel en sciences : on écrit la formule générale, puis on « injecte » les valeurs pour obtenir le résultat numérique.<br/><br/>' +
        'Pour vérifier qu\'une simplification est correcte, on peut substituer une valeur test : si $2 + 3x = 5x$ était vrai, alors pour $x = 2$ on aurait $2 + 6 = 10$, soit $8 = 10$, ce qui est faux. Cet outil de vérification te sera très utile tout au long du collège et au lycée.',
      definitions: [
        { term: 'Expression littérale', def: 'Expression contenant des lettres (variables) et des nombres liés par des opérations. Ex : $3x + 2y - 5$.' },
        { term: 'Termes semblables', def: 'Termes ayant exactement la même partie littérale (même variable, même exposant). $3x$ et $-5x$ sont semblables ; $3x$ et $3x^2$ ne le sont pas.' },
        { term: 'Substitution', def: 'Action de remplacer chaque lettre par une valeur numérique pour calculer le résultat.' },
        { term: 'Forme réduite', def: 'Expression dans laquelle tous les termes semblables ont été regroupés. Ex : $5a + 3b - 2a = 3a + 3b$.' }
      ],
      example: {
        statement: 'Réduire $7x - 3 + 2x + 5$, puis calculer pour $x = 4$.',
        steps: [
          'Regrouper les termes en $x$ : $7x + 2x = 9x$.',
          'Regrouper les constantes : $-3 + 5 = 2$.',
          'Forme réduite : $9x + 2$.',
          'Pour $x = 4$ : $9 \\times 4 + 2 = 36 + 2 = 38$.'
        ],
        answer: 'Forme réduite : $9x + 2$ ; pour $x = 4$ : $38$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Expression</th><th style="border:1px solid var(--border);padding:6px 14px">Semblables ?</th><th style="border:1px solid var(--border);padding:6px 14px">Résultat</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x$</td><td style="border:1px solid var(--border);padding:6px 14px">✅ Oui</td><td style="border:1px solid var(--border);padding:6px 14px">$8x$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$2 + 3x$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td><td style="border:1px solid var(--border);padding:6px 14px">$2 + 3x$ (déjà réduit)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x^2$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x^2$ (déjà réduit)</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Pour calculer la valeur : remplacer chaque lettre par sa valeur numérique, puis effectuer les calculs dans l\'ordre (priorités).',
          'Pour réduire : regrouper les termes semblables (même variable avec même exposant). Ex : $3x + 2x = 5x$.',
          'Attention aux signes : $-2x - 3x = -5x$ (les signes se combinent).'
        ]
      },
      formulas: [
        '$ax + bx = (a + b)x$ (factorisation par $x$)',
        '$a \\times b = ab$ (on peut omettre le signe $\\times$)',
        '$-a \\times (-b) = ab$ et $a \\times (-b) = -ab$',
        'Substitution : si $x = 3$, alors $2x + 1 = 2 \\times 3 + 1 = 7$'
      ],
      recap: [
        'Seuls les termes semblables (même variable, même degré) peuvent être additionnés.',
        '$2 + 3x \\neq 5x$ — une constante et un terme en $x$ ne se combinent pas.',
        'La substitution permet de vérifier une simplification.',
        'Les signes se combinent : $-2x - 3x = -5x$ (pas $-1x$).'
      ],
      piege: 'Piège : $2 + 3x \\neq 5x$. On ne peut pas additionner un terme constant ($2$) et un terme en $x$ ($3x$) — ce ne sont pas des termes semblables. $2 + 3x$ est déjà simplifié !'
    },

    quiz: [
      {
        q: 'Si $x = 4$, combien vaut $3x - 5$ ?',
        options: ['$7$', '$17$', '$8$', '$-2$'],
        answer: 0,
        correction: '$3x - 5 = 3 \\times 4 - 5 = 12 - 5 = 7$.'
      },
      {
        q: 'Quelle est la forme réduite de $5a + 3b - 2a + b$ ?',
        options: ['$3a + 4b$', '$7a + 4b$', '$3a + 2b$', '$6ab$'],
        answer: 0,
        correction: 'On regroupe les termes en $a$ : $5a - 2a = 3a$. Les termes en $b$ : $3b + b = 4b$. Résultat : $3a + 4b$.'
      },
      {
        q: 'Un élève simplifie $2 + 3x$ et trouve $5x$. Quelle est son erreur ?',
        options: [
          'Il a raison : $2 + 3 = 5$, donc $2 + 3x = 5x$.',
          '$2$ est une constante et $3x$ est un terme en $x$ — ce ne sont pas des termes semblables. $2 + 3x$ est déjà la forme la plus simple.',
          'L\'erreur est différente : il fallait écrire $2 \\times 3x = 6x$.',
          'Il fallait d\'abord substituer une valeur de $x$ avant de simplifier.'
        ],
        answer: 1,
        correction: 'On ne peut additionner que des termes semblables (même variable, même degré). $2$ est une constante (terme de degré 0) et $3x$ est de degré 1 — ils ne se combinent pas.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Calcule la valeur de', letter: 'x' },
          { intro: 'Évalue l\'expression', letter: 'x' },
          { intro: 'Calcule', letter: 'a' },
          { intro: 'Détermine la valeur de', letter: 't' }
        ]);
        const a = rand(2, 6);
        const b = rand(1, 5);
        const x = rand(1, 8);
        const val = a * x + b;
        return {
          statement: `${ctx.intro} $${a}${ctx.letter} + ${b}$ pour $${ctx.letter} = ${x}$.`,
          answer: val,
          tolerance: 0,
          unit: '',
          hint: `Substitue $${ctx.letter}$ par $${x}$ : $${a} \\times ${x} + ${b}$.`,
          solution: [
            `On remplace $${ctx.letter}$ par $${x}$ :`,
            `$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${val}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un maraîcher vend des tomates $t$ € le kg et des salades $s$ € la pièce. Un client achète $3$ kg de tomates et $4$ salades.',
      tasks: [
        'Écrire une expression littérale du prix total payé par le client.',
        'Calculer le prix total si $t = 2{,}50$ € et $s = 0{,}80$ €.',
        'Un second client achète $5$ kg de tomates et $2$ salades. Écrire son prix total et le calculer avec les mêmes prix.'
      ],
      solutions: [
        'Prix total : $3t + 4s$.',
        '$3 \\times 2{,}50 + 4 \\times 0{,}80 = 7{,}50 + 3{,}20 = 10{,}70$ €.',
        'Second client : $5t + 2s = 5 \\times 2{,}50 + 2 \\times 0{,}80 = 12{,}50 + 1{,}60 = 14{,}10$ €.'
      ],
      finalAnswer: 'Le premier client paie $10{,}70$ €, le second $14{,}10$ €.'
    },

    evaluation: {
      title: 'Évaluation — Expressions littérales',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la valeur de $4x - 3$ pour $x = 5$.',
          type: 'numeric',
          answer: 17,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$4x - 3 = 4 \\times 5 - 3 = 20 - 3 = 17$.'
        },
        {
          statement: 'Réduire l\'expression $7a - 2b + 3a + 5b$. L\'expression réduite a un coefficient devant $a$ de :',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On regroupe les termes semblables : $7a + 3a = 10a$ et $-2b + 5b = 3b$. L\'expression réduite est $10a + 3b$. Le coefficient devant $a$ est $10$.'
        },
        {
          statement: 'Laquelle de ces simplifications est correcte ?',
          type: 'multiple-choice',
          options: [
            '$3 + 5x = 8x$',
            '$3x + 5x = 8x$',
            '$3x \\times 5x = 15x$',
            '$3x + 5 = 8x$'
          ],
          answer: 1,
          points: 2,
          correction: 'Seuls les termes semblables peuvent s\'additionner. $3x + 5x = (3+5)x = 8x$ est correct.'
        },
        {
          statement: 'Calculer la valeur de $2x^2 + 3x - 1$ pour $x = 3$.',
          type: 'numeric',
          answer: 26,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$2 \\times 3^2 + 3 \\times 3 - 1 = 2 \\times 9 + 9 - 1 = 18 + 9 - 1 = 26$.'
        },
        {
          statement: 'Calculer la valeur de $5(x + 2) - 3x$ pour $x = 4$.',
          type: 'numeric',
          answer: 18,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5(4 + 2) - 3 \\times 4 = 5 \\times 6 - 12 = 30 - 12 = 18$.'
        }
      ]
    }
  });
