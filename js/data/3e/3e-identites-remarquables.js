/* =========================================================
   Spark Learning – data/3e/3e-identites-remarquables.js
   Module : Identités remarquables (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-identites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔣',
    title: 'Identités remarquables',
    subtitle: '$(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$',
    keywords: ['Identités remarquables', 'Développer', 'Factoriser', 'Carré', 'Différence'],
    physics: false,
    cours: {
      intro: 'Les trois <strong>identités remarquables</strong> sont des égalités algébriques vraies pour toutes valeurs de $a$ et $b$. Elles permettent deux opérations inverses : <strong>développer</strong> (produit → somme) et <strong>factoriser</strong> (somme → produit).<br/><br/>' +
        'La troisième identité, $(a+b)(a-b) = a^2 - b^2$, est redoutable pour le <strong>calcul mental</strong> : $99 \\times 101 = (100-1)(100+1) = 10\\,000 - 1 = 9\\,999$ en deux secondes !<br/><br/>' +
        '<strong>Erreur classique à éviter</strong> : $(a+b)^2 \\neq a^2 + b^2$. Le terme croisé $2ab$ est souvent oublié : $(3+4)^2 = 49 \\neq 9 + 16 = 25$.<br/><br/>' +
        'Pour <strong>factoriser</strong> $x^2 - k$ : si $k$ est un carré parfait, appliquer la 3e identité ; sinon, écrire $x^2 - k = (x - \\sqrt{k})(x + \\sqrt{k})$.',
      definitions: [
        { term: 'Développer', def: 'Transformer un <strong>produit</strong> en <strong>somme</strong>.<br/><br/>Exemple : $(a+b)^2$ devient $a^2 + 2ab + b^2$. On « ouvre » les parenthèses.' },
        { term: 'Factoriser', def: 'Transformer une <strong>somme</strong> en <strong>produit</strong> — l\'opération inverse du développement.<br/><br/>Exemple : $a^2 - b^2$ devient $(a+b)(a-b)$.' },
        { term: 'Identité remarquable', def: 'Égalité algébrique <strong>toujours vraie</strong>, quelles que soient les valeurs de $a$ et $b$. Il y en a trois à connaître par cœur en 3e.' },
        { term: 'Double produit', def: 'Le terme $2ab$ qui apparaît dans $(a+b)^2 = a^2 + \\boldsymbol{2ab} + b^2$. C\'est le terme le plus souvent <strong>oublié</strong> — source de l\'erreur classique $(a+b)^2 = a^2 + b^2$.' }
      ],
      method: {
        title: 'Les trois identités à retenir',
        steps: [
          '<strong>Identité 1 — Carré d\'une somme</strong> : $(a + b)^2 = a^2 + 2ab + b^2$.<br/><em>Exemple :</em> $(3+2)^2 = 9 + 12 + 4 = 25$ ✓',
          '<strong>Identité 2 — Carré d\'une différence</strong> : $(a - b)^2 = a^2 - 2ab + b^2$.<br/><em>Exemple :</em> $(7-3)^2 = 49 - 42 + 9 = 16$ ✓',
          '<strong>Identité 3 — Produit somme × différence</strong> : $(a + b)(a - b) = a^2 - b^2$.<br/><em>Exemple :</em> $101 \\times 99 = (100+1)(100-1) = 10\\,000 - 1 = 9\\,999$ ✓'
        ]
      },
      example: {
        statement: 'Développer $(3x + 2)^2$.',
        steps: [
          '<strong>Identifier $a$ et $b$</strong> : ici $a = 3x$ et $b = 2$. On applique la 1ère identité : $(a+b)^2 = a^2 + 2ab + b^2$.',
          '<strong>Calculer chaque terme</strong> : $a^2 = (3x)^2 = 9x^2$, $2ab = 2 \\times 3x \\times 2 = 12x$, $b^2 = 2^2 = 4$.',
          '<strong>Assembler</strong> : $(3x+2)^2 = 9x^2 + 12x + 4$. On vérifie : pour $x = 1$, $(3+2)^2 = 25$ et $9 + 12 + 4 = 25$ ✓'
        ],
        answer: '$(3x+2)^2 = 9x^2 + 12x + 4$.'
      },
      formulas: [
        '$(a+b)^2 = a^2 + 2ab + b^2$',
        '$(a-b)^2 = a^2 - 2ab + b^2$',
        '$(a+b)(a-b) = a^2 - b^2$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Identité</th><th style="border:1px solid var(--border);padding:8px">Formule développée</th><th style="border:1px solid var(--border);padding:8px">Exemple numérique</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$(a+b)^2$</td><td style="border:1px solid var(--border);padding:8px">$a^2 + 2ab + b^2$</td><td style="border:1px solid var(--border);padding:8px">$(3+2)^2 = 9 + 12 + 4 = 25$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$(a-b)^2$</td><td style="border:1px solid var(--border);padding:8px">$a^2 - 2ab + b^2$</td><td style="border:1px solid var(--border);padding:8px">$(7-3)^2 = 49 - 42 + 9 = 16$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$(a+b)(a-b)$</td><td style="border:1px solid var(--border);padding:8px">$a^2 - b^2$</td><td style="border:1px solid var(--border);padding:8px">$101 \\times 99 = 10201 - 1 = 10\\,200 $</td></tr></table>',
      recap: [
        '<strong>Ne jamais oublier $2ab$</strong> : $(a+b)^2 = a^2 + \\boldsymbol{2ab} + b^2$. L\'erreur $(a+b)^2 = a^2 + b^2$ est la plus fréquente en algèbre.',
        '<strong>$(a+b)(a-b) = a^2 - b^2$</strong> : identité idéale pour le calcul mental ($99 \\times 101 = 10000 - 1$) et pour factoriser une différence de deux carrés.',
        '<strong>$(a+b)^2 \\neq a^2 + b^2$</strong> : vérifier systématiquement avec des nombres simples quand on hésite (par exemple $a = 3$, $b = 4$).',
        '<strong>Factoriser</strong> : repérer un carré parfait ou une différence de carrés permet de revenir à un produit, utile pour résoudre des équations.'
      ],
      piege: 'Piège classique : $(a+b)^2 \\neq a^2 + b^2$. Il ne faut pas oublier le terme $2ab$ au milieu ! $(3+4)^2 = 49 \\neq 9 + 16 = 25$.'
    },
    quiz: [
      {
        q: 'Un élève développe $(3 + 4)^2 = 3^2 + 4^2 = 9 + 16 = 25$. Où est l\'erreur ?',
        options: [
          'Il a oublié le terme $2 \\times 3 \\times 4 = 24$ : le résultat correct est $9 + 24 + 16 = 49$',
          'Il a mal calculé $3^2$ et $4^2$',
          'Il n\'y a pas d\'erreur, $(3+4)^2 = 25$',
          'Il fallait calculer $(3+4)^2 = 7^2 = 49$, ce qui confirme que son résultat est faux'
        ],
        answer: 0,
        correction: '$(3+4)^2 = 7^2 = 49$, mais l\'élève a écrit $3^2 + 4^2 = 25$. Il a omis le terme croisé $2ab = 2 \\times 3 \\times 4 = 24$. La formule complète est $(a+b)^2 = a^2 + 2ab + b^2 = 9 + 24 + 16 = 49$. C\'est l\'erreur la plus classique des identités remarquables.'
      },
      {
        q: 'Factorise $x^2 - 9$.',
        options: ['$(x-3)^2$', '$(x+3)(x-3)$', '$(x-9)(x+1)$', 'Impossible'],
        answer: 1,
        correction: '$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$ (différence de deux carrés).'
      },
      {
        q: 'Quel est le résultat de $(2x - 3)^2$ ?',
        options: ['$4x^2 + 9$', '$4x^2 - 9$', '$4x^2 - 12x + 9$', '$4x^2 + 12x + 9$'],
        answer: 2,
        correction: '$(2x-3)^2 = (2x)^2 - 2 \\times 2x \\times 3 + 3^2 = 4x^2 - 12x + 9$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 9), b = rand(1, 7);
        const val = a * a - b * b;
        return {
          statement: `En utilisant $(a+b)(a-b) = a^2 - b^2$, calcule $(${a}+${b})(${a}-${b})$ sans développer.`,
          answer: val,
          tolerance: 0,
          unit: '',
          hint: `Identifie $a = ${a}$ et $b = ${b}$. Résultat : $a^2 - b^2 = ${a}^2 - ${b}^2$.`,
          solution: [`$(${a}+${b})(${a}-${b}) = ${a}^2 - ${b}^2 = ${a*a} - ${b*b} = ${val}$.`]
        };
      }
    },
    probleme: {
      context: 'Un carré de côté $x$ cm subit une modification : on agrandit un côté de $3$ cm et on réduit l\'autre de $3$ cm, formant un rectangle.',
      tasks: [
        'Exprimer l\'aire du rectangle en fonction de $x$.',
        'Utiliser une identité remarquable pour simplifier.',
        'Si $x = 10$ cm, comparer l\'aire du carré original et celle du rectangle.'
      ],
      solutions: [
        'Aire rectangle $= (x+3)(x-3)$.',
        '$(x+3)(x-3) = x^2 - 9$.',
        'Carré : $10^2 = 100$ cm². Rectangle : $10^2 - 9 = 91$ cm². Le rectangle est plus petit de $9$ cm².'
      ],
      finalAnswer: 'L\'aire du rectangle est $x^2 - 9$ cm², toujours $9$ cm² de moins que le carré.'
    },

    evaluation: {
      title: 'Évaluation — Identités remarquables',
      duration: '25 min',
      questions: [
        {
          statement: 'Développer $(3x + 5)^2$. Le coefficient du terme en $x$ est :',
          type: 'numeric',
          answer: 30,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(3x + 5)^2 = (3x)^2 + 2 \\times 3x \\times 5 + 5^2 = 9x^2 + 30x + 25$. Le coefficient du terme en $x$ est $30$.'
        },
        {
          statement: 'Factoriser $x^2 - 16$.',
          type: 'multiple-choice',
          options: ['$(x - 4)^2$', '$(x + 4)(x - 4)$', '$(x - 8)(x + 2)$', '$(x + 16)(x - 1)$'],
          answer: 1,
          points: 2,
          correction: '$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$ (troisième identité remarquable : $a^2 - b^2 = (a+b)(a-b)$).'
        },
        {
          statement: 'Calculer $97^2$ en utilisant une identité remarquable. (Indication : $97 = 100 - 3$.)',
          type: 'numeric',
          answer: 9409,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$97^2 = (100 - 3)^2 = 100^2 - 2 \\times 100 \\times 3 + 3^2 = 10\\,000 - 600 + 9 = 9\\,409$.'
        },
        {
          statement: 'Développer $(4x - 1)(4x + 1)$.',
          type: 'multiple-choice',
          options: ['$16x^2 + 1$', '$16x^2 - 1$', '$16x^2 - 8x + 1$', '$8x^2 - 1$'],
          answer: 1,
          points: 2,
          correction: '$(4x - 1)(4x + 1) = (4x)^2 - 1^2 = 16x^2 - 1$ (identité $a^2 - b^2$).'
        },
        {
          statement: 'Soit $A = (x + 3)^2 - (x - 3)^2$. Après développement et simplification, $A$ est égal à :',
          type: 'multiple-choice',
          options: ['$12x$', '$12$', '$6x + 18$', '$2x^2 + 18$'],
          answer: 0,
          points: 2,
          correction: '$(x+3)^2 = x^2 + 6x + 9$. $(x-3)^2 = x^2 - 6x + 9$. $A = (x^2 + 6x + 9) - (x^2 - 6x + 9) = 12x$. Alternativement, on reconnaît $A = [(x+3)+(x-3)][(x+3)-(x-3)] = 2x \\times 6 = 12x$ (troisième identité).'
        }
      ]
    }
  }
);
