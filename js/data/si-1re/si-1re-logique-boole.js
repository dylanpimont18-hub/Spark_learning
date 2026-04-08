/* =========================================================
   Spark Learning – data/si-1re/si-1re-logique-boole.js
   Extrait de si-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-1re-logique-boole',
    level: 2, subject: 'si',
    icon: '🔲',
    title: 'Circuits logiques et algèbre de Boole',
    subtitle: 'Opérateurs ET, OU, NON, tables de vérité, lois de De Morgan',
    keywords: ['ET', 'OU', 'NON', 'Table de vérité', 'Logigramme', 'De Morgan'],
    physics: 'Les circuits logiques sont la base de tout système numérique : automates programmables, microcontrôleurs, FPGA. Chaque décision d\'un système automatisé repose sur des opérations logiques.',

    cours: {
      intro: 'L\'<strong>algèbre de Boole</strong> est le fondement mathématique des circuits numériques. Elle manipule des variables qui ne prennent que deux valeurs : $0$ (faux) ou $1$ (vrai).<br/><br/>Les <strong>3 opérateurs de base</strong> sont :<br/>- <strong>ET</strong> (AND) noté $A \\cdot B$ : vaut $1$ si les deux entrées sont à $1$<br/>- <strong>OU</strong> (OR) noté $A + B$ : vaut $1$ si au moins une entrée est à $1$<br/>- <strong>NON</strong> (NOT) noté $\\overline{A}$ : inverse la valeur<br/><br/>À partir de ces opérateurs, on construit les portes dérivées : <strong>NAND</strong> ($\\overline{A \\cdot B}$), <strong>NOR</strong> ($\\overline{A + B}$), <strong>XOR</strong> ($A \\oplus B$).<br/><br/>Les <strong>lois de De Morgan</strong> permettent de simplifier les expressions :<br/>$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ et $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.<br/><br/>Simplifier une expression réduit le nombre de portes dans le circuit, ce qui diminue le coût et la consommation.',
      definitions: [
        { term: 'Variable booléenne', def: 'Variable qui ne prend que deux valeurs : $0$ (faux, niveau bas) ou $1$ (vrai, niveau haut). Exemple : un interrupteur est ouvert ($0$) ou fermé ($1$).' },
        { term: 'Table de vérité', def: 'Tableau listant toutes les combinaisons possibles des entrées ($2^n$ lignes pour $n$ entrées) et la valeur de la sortie correspondante.' },
        { term: 'Porte logique', def: 'Composant électronique élémentaire réalisant une opération booléenne (ET, OU, NON, NAND, NOR, XOR). Le logigramme est le schéma d\'assemblage de portes.' },
        { term: 'Lois de De Morgan', def: '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (le complément d\'un ET = OU des compléments) et $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (le complément d\'un OU = ET des compléments).' }
      ],
      method: {
        title: 'Analyser ou simplifier une expression logique',
        steps: [
          '<strong>Expression booléenne</strong> : Étape 1 — Écrire l\'expression booléenne : traduire le cahier des charges en opérateurs.\nExemple : « la pompe fonctionne si le niveau est bas ET le bouton est appuyé » → $S = N \\cdot B$.',
          '<strong>Table de vérité</strong> : Étape 2 — Construire la table de vérité : lister les $2^n$ combinaisons des $n$ entrées.\nCalculer la sortie pour chaque ligne en appliquant l\'expression.',
          '<strong>Simplification algébrique</strong> : Étape 3 — Simplifier avec les propriétés algébriques :\nAbsorption : $A + A \\cdot B = A$ ; Complémentarité : $A + \\overline{A} = 1$ ; De Morgan pour transformer ET ↔ OU.',
          '<strong>Logigramme</strong> : Étape 4 — Tracer le logigramme : dessiner le circuit avec les portes logiques correspondant à l\'expression simplifiée.'
        ]
      },
      example: {
        statement: 'Simplifier l\'expression $S = \\overline{\\overline{A} \\cdot \\overline{B}}$ en utilisant De Morgan.',
        steps: [
          'Appliquer De Morgan : $\\overline{X \\cdot Y} = \\overline{X} + \\overline{Y}$ avec $X = \\overline{A}$ et $Y = \\overline{B}$.',
          '$S = \\overline{\\overline{A}} + \\overline{\\overline{B}}$.',
          'Or $\\overline{\\overline{A}} = A$ et $\\overline{\\overline{B}} = B$ (double complémentation).',
          'Donc $S = A + B$ : une simple porte OU remplace la porte NAND avec inverseurs.'
        ],
        answer: '$S = A + B$ (une simple porte OU).'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><td style="border:1px solid var(--border);padding:8px"><strong>$A$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>$B$</strong></td><td style="border:1px solid var(--border);padding:8px"><strong>AND</strong><br/>$A \\cdot B$</td><td style="border:1px solid var(--border);padding:8px"><strong>OR</strong><br/>$A + B$</td><td style="border:1px solid var(--border);padding:8px"><strong>XOR</strong><br/>$A \\oplus B$</td><td style="border:1px solid var(--border);padding:8px"><strong>NAND</strong><br/>$\\overline{A \\cdot B}$</td><td style="border:1px solid var(--border);padding:8px"><strong>NOR</strong><br/>$\\overline{A + B}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr></table>',
      formulas: [
        '$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (1ère loi de De Morgan)',
        '$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (2ème loi de De Morgan)',
        '$A + A \\cdot B = A$ (absorption)',
        '$A \\cdot (A + B) = A$ (absorption)',
        '$A \\oplus B = A \\cdot \\overline{B} + \\overline{A} \\cdot B$ (OU exclusif / XOR)'
      ],
      recap: [
        'Les trois opérateurs de base (ET, OU, NON) permettent de construire n\'importe quelle fonction logique.',
        'Les lois de De Morgan transforment un ET en OU (et vice versa) en complémentant les variables et le résultat.',
        'La simplification réduit le nombre de portes logiques et optimise le circuit.',
        'Pour $n$ entrées, la table de vérité comporte $2^n$ lignes.'
      ],
      piege: 'Ne pas confondre <strong>OU logique</strong> ($A + B$) et <strong>OU exclusif</strong> ($A \\oplus B$). Le OU vaut $1$ si au moins une entrée est à $1$ (y compris quand les deux le sont). Le XOR vaut $1$ uniquement si <strong>exactement une</strong> entrée est à $1$. Pour $A = 1, B = 1$ : $A + B = 1$ mais $A \\oplus B = 0$.'
    },

    quiz: [
      {
        q: 'Appliquer la 1ère loi de De Morgan : $\\overline{A \\cdot B \\cdot C}$ est équivalent à :',
        options: [
          '$\\overline{A} \\cdot \\overline{B} \\cdot \\overline{C}$',
          '$\\overline{A} + \\overline{B} + \\overline{C}$',
          '$A + B + C$',
          '$\\overline{A + B + C}$'
        ],
        answer: 1,
        correction: 'La 1ère loi de De Morgan se généralise : $\\overline{A \\cdot B \\cdot C} = \\overline{A} + \\overline{B} + \\overline{C}$. Le complément d\'un produit (ET) est la somme (OU) des compléments. Cela fonctionne pour un nombre quelconque de variables.'
      },
      {
        q: 'Simplifier $S = A + \\overline{A} \\cdot B$ :',
        options: [
          '$A \\cdot B$',
          '$A + B$',
          '$B$',
          '$A$'
        ],
        answer: 1,
        correction: 'On développe : si $A = 1$, alors $S = 1 + 0 = 1$. Si $A = 0$, alors $S = 0 + 1 \\cdot B = B$. Donc $S = 1$ quand $A = 1$ OU $B = 1$ : $S = A + B$.<br/>Preuve algébrique : $A + \\overline{A} \\cdot B = (A + \\overline{A}) \\cdot (A + B) = 1 \\cdot (A + B) = A + B$ (distributivité du $+$ sur le $\\cdot$).'
      },
      {
        q: 'Un circuit à $4$ entrées nécessite une table de vérité de combien de lignes ?',
        options: ['$4$', '$8$', '$16$', '$32$'],
        answer: 2,
        correction: 'Pour $n$ entrées, il y a $2^n$ combinaisons possibles. Avec $n = 4$ : $2^4 = 16$ lignes. Chaque entrée peut valoir $0$ ou $1$, ce qui donne $2 \\times 2 \\times 2 \\times 2 = 16$ combinaisons.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = pick([0, 1]);
        const b = pick([0, 1]);
        const c = pick([0, 1]);

        const expressions = [
          {
            name: 'ET-OU',
            tex: `(A \\cdot B) + C`,
            compute: (a, b, c) => (a & b) | c,
            steps: (a, b, c) => {
              const ab = a & b;
              const result = ab | c;
              return [
                `Calcul du ET : $A \\cdot B = ${a} \\cdot ${b} = ${ab}$`,
                `Calcul du OU : $(A \\cdot B) + C = ${ab} + ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'OU-ET',
            tex: `(A + B) \\cdot C`,
            compute: (a, b, c) => (a | b) & c,
            steps: (a, b, c) => {
              const aob = a | b;
              const result = aob & c;
              return [
                `Calcul du OU : $A + B = ${a} + ${b} = ${aob}$`,
                `Calcul du ET : $(A + B) \\cdot C = ${aob} \\cdot ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'NAND-OU',
            tex: `\\overline{A \\cdot B} + C`,
            compute: (a, b, c) => ((a & b) ^ 1) | c,
            steps: (a, b, c) => {
              const ab = a & b;
              const nand = ab ^ 1;
              const result = nand | c;
              return [
                `Calcul du ET : $A \\cdot B = ${a} \\cdot ${b} = ${ab}$`,
                `Complémentation (NAND) : $\\overline{${ab}} = ${nand}$`,
                `Calcul du OU : $${nand} + ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          },
          {
            name: 'XOR-ET',
            tex: `(A \\oplus B) \\cdot C`,
            compute: (a, b, c) => (a ^ b) & c,
            steps: (a, b, c) => {
              const xor = a ^ b;
              const result = xor & c;
              return [
                `Calcul du XOR : $A \\oplus B = ${a} \\oplus ${b} = ${xor}$ (vaut $1$ si exactement une entrée vaut $1$)`,
                `Calcul du ET : $(A \\oplus B) \\cdot C = ${xor} \\cdot ${c} = ${result}$`,
                `Donc $S = ${result}$`
              ];
            }
          }
        ];

        const expr = pick(expressions);
        const result = expr.compute(a, b, c);

        return {
          statement: `Calcule la sortie $S = ${expr.tex}$ pour $A = ${a}$, $B = ${b}$ et $C = ${c}$.`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `Procède par étapes : calcule d'abord l'opération entre parenthèses, puis applique l'opération extérieure. Rappel : ET → les deux à $1$, OU → au moins un à $1$, XOR → exactement un à $1$.`,
          solution: expr.steps(a, b, c)
        };
      }
    },

    probleme: {
      context: 'Un système de sécurité pour une presse industrielle comporte deux boutons-poussoirs ($A$ et $B$) que l\'opérateur doit appuyer simultanément (commande bimanuelle) et un capteur de protection ($C$) qui vaut $1$ si le carter est fermé. La presse ne doit fonctionner ($S = 1$) que si les deux mains sont sur les boutons ET le carter est fermé.',
      tasks: [
        'Écrire l\'expression logique de la sortie $S$ en fonction de $A$, $B$ et $C$.',
        'Construire la table de vérité complète ($8$ lignes).',
        'Si on ajoute un bouton d\'arrêt d\'urgence $U$ ($U = 1$ quand l\'arrêt est activé), modifier l\'expression pour que $S = 0$ dès que $U = 1$. Simplifier en utilisant De Morgan.'
      ],
      solutions: [
        '$S = A \\cdot B \\cdot C$. La presse fonctionne uniquement si les trois conditions sont réunies (ET logique à trois entrées).',
        'Table de vérité :\n$A=0, B=0, C=0 \\to S=0$ | $A=0, B=0, C=1 \\to S=0$ | $A=0, B=1, C=0 \\to S=0$ | $A=0, B=1, C=1 \\to S=0$\n$A=1, B=0, C=0 \\to S=0$ | $A=1, B=0, C=1 \\to S=0$ | $A=1, B=1, C=0 \\to S=0$ | $A=1, B=1, C=1 \\to S=1$\nUne seule ligne donne $S = 1$ : quand les trois entrées sont à $1$.',
        '$S = A \\cdot B \\cdot C \\cdot \\overline{U}$. Quand $U = 1$ (arrêt activé), $\\overline{U} = 0$ donc $S = 0$ quelles que soient les autres entrées. Par De Morgan, on peut aussi écrire : $\\overline{S} = \\overline{A} + \\overline{B} + \\overline{C} + U$ (au moins une condition non remplie → pas de fonctionnement).'
      ],
      finalAnswer: '$S = A \\cdot B \\cdot C \\cdot \\overline{U}$. La presse ne fonctionne que si $A = B = C = 1$ et $U = 0$.'
    },

    evaluation: {
      title: 'Évaluation — Circuits logiques et algèbre de Boole',
      duration: '20 min',
      questions: [
        {
          statement: 'Combien de lignes comporte une table de vérité pour $4$ entrées ?',
          type: 'numeric',
          answer: 16,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$2^4 = 16$ lignes.'
        },
        {
          statement: 'Simplifier $\\overline{\\overline{A} + \\overline{B}}$ en utilisant De Morgan :',
          type: 'multiple-choice',
          options: ['$A + B$', '$A \\cdot B$', '$\\overline{A} \\cdot \\overline{B}$', '$\\overline{A \\cdot B}$'],
          answer: 1,
          points: 3,
          correction: 'Par De Morgan : $\\overline{X + Y} = \\overline{X} \\cdot \\overline{Y}$ avec $X = \\overline{A}$ et $Y = \\overline{B}$. Donc $S = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}} = A \\cdot B$.'
        },
        {
          statement: 'Quelle est la sortie de la porte XOR pour $A = 1$ et $B = 1$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'XOR : $A \\oplus B = 1$ uniquement si exactement une entrée vaut $1$. Ici $A = B = 1$, donc $A \\oplus B = 0$. C\'est la différence clé avec le OU inclusif qui donnerait $1$.'
        },
        {
          statement: 'L\'expression $S = A \\cdot B + A \\cdot \\overline{B}$ se simplifie en :',
          type: 'multiple-choice',
          options: ['$A \\cdot B$', '$A + B$', '$A$', '$B$'],
          answer: 2,
          points: 2,
          correction: 'Factorisation : $S = A \\cdot (B + \\overline{B}) = A \\cdot 1 = A$. La variable $B$ n\'influence pas le résultat quand $A$ est mise en facteur.'
        },
        {
          statement: 'Pour $A = 0$, $B = 1$, $C = 1$, calculer $S = (A + B) \\cdot \\overline{C}$.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$A + B = 0 + 1 = 1$. $\\overline{C} = \\overline{1} = 0$. Donc $S = 1 \\cdot 0 = 0$. Le ET avec $\\overline{C} = 0$ force la sortie à $0$.'
        }
      ]
    }
  });
