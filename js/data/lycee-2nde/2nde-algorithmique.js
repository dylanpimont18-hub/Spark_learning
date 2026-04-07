/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-algorithmique.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-algorithmique',
    level: 2, subject: 'maths',
    icon: '💻',
    title: 'Algorithmique et programmation (Python)',
    subtitle: 'Variables, boucles, conditions en Python',
    keywords: ['Python', 'Boucle', 'Condition', 'Variable', 'Algorithme'],
    physics: false,
    cours: {
      intro: 'Un algorithme est une suite finie d\'instructions non ambiguës permettant de résoudre un problème. En seconde, Python est le langage de référence : sa syntaxe minimaliste force une structuration claire. La boucle $\\texttt{for i in range(n)}$ parcourt les entiers de $0$ à $n-1$ (la borne supérieure est exclue) ; $\\texttt{while condition}$ répète tant que la condition est vraie. L\'indentation (espaces obligatoires en début de bloc) est syntaxiquement obligatoire en Python — une indentation incorrecte cause une erreur ou change silencieusement le sens du programme. Déboguer consiste à suivre l\'exécution pas à pas avec des valeurs test pour identifier où le comportement diverge de l\'attendu.',
      definitions: [
        { term: 'Algorithme', def: 'Suite finie d\'instructions non ambiguës qui, à partir de données d\'entrée, produit un résultat en un nombre fini d\'étapes.' },
        { term: 'Variable', def: 'Espace mémoire nommé qui stocke une valeur. En Python : $\\texttt{x = 5}$ crée la variable $x$ avec la valeur $5$.' },
        { term: 'Boucle $\\texttt{for}$', def: 'Répète un bloc un nombre fixé de fois. $\\texttt{for i in range(n)}$ exécute le bloc $n$ fois avec $i = 0, 1, \\ldots, n-1$.' },
        { term: 'Boucle $\\texttt{while}$', def: 'Répète un bloc tant qu\'une condition est vraie. Risque de boucle infinie si la condition ne devient jamais fausse.' }
      ],
      method: {
        title: 'Écrire un algorithme en Python',
        steps: [
          'Déclarer les variables et leurs valeurs initiales. <strong>Exemple :</strong> $\\texttt{s = 0}$ (accumulateur initialisé à zéro pour une somme).',
          'Utiliser $\\texttt{for i in range(n)}$ pour répéter $n$ fois. <strong>Exemple :</strong> $\\texttt{for i in range(1, 6):}$ fait varier $i$ de $1$ à $5$ inclus.',
          'Utiliser $\\texttt{while condition}$ pour répéter tant qu\'une condition est vraie. <strong>Exemple :</strong> $\\texttt{while n > 1: n = n // 2}$ divise $n$ par $2$ jusqu\'à ce qu\'il atteigne $1$.',
          'Tester avec des exemples pour vérifier la correction de l\'algorithme. <strong>Exemple :</strong> Pour un programme de somme $1+\\ldots+5$, vérifier que le résultat est bien $15$.'
        ]
      },
      example: {
        statement: 'Écrire un algorithme Python qui calcule la factorielle de $n$ (c\'est-à-dire $n! = 1 \\times 2 \\times \\ldots \\times n$). Tester pour $n = 5$.',
        steps: [
          'Initialiser le résultat : $\\texttt{resultat = 1}$.',
          'Boucle : $\\texttt{for i in range(1, n+1):}$ puis $\\texttt{resultat = resultat * i}$.',
          'Exécution pour $n = 5$ : $i = 1$ → $1$, $i = 2$ → $2$, $i = 3$ → $6$, $i = 4$ → $24$, $i = 5$ → $120$.'
        ],
        answer: '$5! = 120$. Le programme affiche $\\texttt{120}$.'
      },
      formulas: [
        '$\\texttt{for i in range(a, b)}$ : $i$ prend les valeurs $a, a+1, \\ldots, b-1$',
        '$\\texttt{range(n)}$ est équivalent à $\\texttt{range(0, n)}$',
        'Indentation obligatoire en Python (4 espaces ou 1 tabulation)'
      ],
      recap: [
        '$\\texttt{range(a, b)}$ produit les entiers de $a$ à $b-1$ : la borne supérieure est toujours exclue.',
        'La boucle $\\texttt{for}$ est utilisée quand le nombre de répétitions est connu à l\'avance ; $\\texttt{while}$ sinon.',
        'L\'indentation est obligatoire en Python : elle délimite les blocs de code (pas d\'accolades).',
        'Pour déboguer, exécuter le code à la main pas à pas avec des valeurs test.'
      ],
      piege: 'En Python, $\\texttt{range(1,6)}$ produit $1,2,3,4,5$ (pas $6$). La borne supérieure est exclue !'
    },
    quiz: [
      { q: 'Que calcule ce code ?\n$\\texttt{s=0}$\n$\\texttt{for i in range(1,5):}$\n$\\quad\\texttt{s=s+i}$', options: ['$s=10$', '$s=15$', '$s=4$', '$s=6$'], answer: 0, correction: '$i$ prend les valeurs $1,2,3,4$. $s=1+2+3+4=10$.' },
      { q: 'Un élève veut calculer $1+2+\\cdots+10$. Il écrit $\\texttt{s=0}$ puis $\\texttt{for i in range(10): s=s+i}$. Pourquoi son résultat sera-t-il incorrect ?', options: ['$\\texttt{range(10)}$ produit $0,1,\\ldots,9$ (le $10$ est exclu). Il faut $\\texttt{range(1,11)}$ pour inclure $10$', 'Il faut initialiser $\\texttt{s=1}$ et non $\\texttt{s=0}$', 'La boucle ne peut pas calculer une somme', 'Il n\'y a pas d\'erreur, le résultat est correct'], answer: 0, correction: '$\\texttt{range(10)}$ produit $0,1,2,\\ldots,9$ — la borne supérieure $10$ est exclue. La somme calculée est $0+1+\\ldots+9=45$ au lieu de $1+\\ldots+10=55$. Pour inclure $10$, il faut $\\texttt{range(1,11)}$.' },
      { q: '$\\texttt{range(3,8)}$ produit :', options: ['$3,4,5,6,7,8$', '$3,4,5,6,7$', '$3,4,5,6$', '$0,1,2,3,4$'], answer: 1, correction: 'La borne supérieure $8$ est exclue : $3,4,5,6,7$.' },
      { q: 'Quelle est la valeur de $x$ après :\n$\\texttt{x = 1}$\n$\\texttt{for i in range(4):}$\n$\\quad\\texttt{x = x * 3}$', options: ['$81$', '$12$', '$64$', '$27$'], answer: 0, correction: 'La boucle s\'exécute $4$ fois. $x$ est multiplié par $3$ à chaque passage : $1 \\to 3 \\to 9 \\to 27 \\to 81$. On calcule $3^4 = 81$. Attention : ce n\'est pas $3 \\times 4 = 12$ (multiplication) mais $3^4 = 81$ (puissance).' },
      { q: 'Ce code contient une erreur. Laquelle ?\n$\\texttt{n = 5}$\n$\\texttt{while n > 0:}$\n$\\quad\\texttt{print(n)}$', options: ['Boucle infinie : $n$ n\'est jamais modifié dans la boucle, la condition $n > 0$ reste toujours vraie', '$\\texttt{print}$ n\'est pas une fonction Python valide', 'Il faut $\\texttt{while n >= 0}$', 'Il manque un $\\texttt{return}$'], answer: 0, correction: 'Le corps de la boucle affiche $n$ mais ne le modifie jamais. Comme $n = 5 > 0$ est toujours vrai, la boucle ne s\'arrête jamais. Il faudrait ajouter $\\texttt{n = n - 1}$ dans le bloc. C\'est le risque principal des boucles $\\texttt{while}$ : toujours vérifier que la condition finira par devenir fausse.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const types = ['produit', 'while_compteur', 'condition'];
        const type = pick(types);
        if (type === 'produit') {
          const base = rand(2, 4);
          const n = rand(3, 6);
          const ans = Math.pow(base, n);
          return {
            statement: `Déterminer la valeur finale de $\\texttt{p}$ après l'exécution du code suivant :<br/><br/>$\\texttt{p = 1}$<br/>$\\texttt{for i in range(${n}):}$<br/>$\\quad\\texttt{p = p * ${base}}$<br/><br/>Vérifie en exécutant le code « à la main » (pas à pas).`,
            answer: ans,
            tolerance: 0,
            unit: '',
            hint: `La boucle multiplie $\\texttt{p}$ par $${base}$ à chaque passage, $${n}$ fois. On calcule $${base}^{${n}}$.`,
            solution: [
              `Exécution pas à pas : $p = 1$`,
              `${Array.from({length: n}, (_, k) => `Passage $i=${k}$ : $p = ${Math.pow(base, k)} \\times ${base} = ${Math.pow(base, k+1)}$`).join('<br/>')}`,
              `Valeur finale : $p = ${base}^{${n}} = ${ans}$`
            ]
          };
        } else if (type === 'while_compteur') {
          const start = rand(50, 200);
          const divisor = pick([2, 3, 5]);
          let val = start, count = 0;
          while (val >= divisor) { val = Math.floor(val / divisor); count++; }
          return {
            statement: `Déterminer la valeur finale de $\\texttt{compteur}$ après l'exécution :<br/><br/>$\\texttt{n = ${start}}$<br/>$\\texttt{compteur = 0}$<br/>$\\texttt{while n >= ${divisor}:}$<br/>$\\quad\\texttt{n = n // ${divisor}}$<br/>$\\quad\\texttt{compteur = compteur + 1}$<br/><br/>Exécute le code à la main en notant les valeurs successives de $n$.`,
            answer: count,
            tolerance: 0,
            unit: '',
            hint: `$\\texttt{//}$ est la division entière. Trace les valeurs de $n$ : $${start}$, puis $${start} // ${divisor} = ${Math.floor(start/divisor)}$, etc. Compte le nombre de passages.`,
            solution: [
              `Valeurs successives de $n$ : ${(() => { let v = start, steps = []; while (v >= divisor) { let nv = Math.floor(v/divisor); steps.push(`$${v} \\to ${nv}$`); v = nv; } return steps.join(', '); })()}`,
              `$\\texttt{compteur} = ${count}$`
            ]
          };
        } else {
          const a = rand(2, 5);
          const b = rand(10, 30);
          const n = rand(5, 10);
          let s = 0;
          for (let i = 1; i <= n; i++) { s += a * i + b; }
          return {
            statement: `On exécute le code suivant :<br/><br/>$\\texttt{s = 0}$<br/>$\\texttt{for i in range(1, ${n+1}):}$<br/>$\\quad\\texttt{s = s + ${a}*i + ${b}}$<br/><br/>Quelle est la valeur finale de $\\texttt{s}$ ? (On calcule $\\sum_{i=1}^{${n}} (${a}i + ${b})$.)`,
            answer: s,
            tolerance: 0,
            unit: '',
            hint: `La somme est $\\sum_{i=1}^{${n}} (${a}i + ${b}) = ${a} \\cdot \\frac{${n}(${n}+1)}{2} + ${b} \\cdot ${n}$.`,
            solution: [
              `$s = \\sum_{i=1}^{${n}} (${a}i + ${b}) = ${a} \\cdot \\frac{${n} \\times ${n+1}}{2} + ${b} \\times ${n}$`,
              `$= ${a} \\times ${n*(n+1)/2} + ${b*n}$`,
              `$= ${a*n*(n+1)/2} + ${b*n} = ${s}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'On place un capital initial $C_0 = 1000$ € sur un livret à taux annuel $t = 3\\%$ ($= 0{,}03$). Chaque année, les intérêts sont ajoutés au capital : $C_{n+1} = C_n \\times (1 + t)$.',
      tasks: [
        'Écrire un programme Python qui calcule le capital après $n$ années (avec une boucle $\\texttt{for}$).',
        'Modifier le programme pour qu\'il affiche le nombre d\'années nécessaires pour doubler le capital initial (utiliser une boucle $\\texttt{while}$).',
        'Exécuter à la main le programme $\\texttt{while}$ et donner le résultat.'
      ],
      solutions: [
        '$\\texttt{C = 1000}$<br/>$\\texttt{t = 0.03}$<br/>$\\texttt{for i in range(n):}$<br/>$\\quad\\texttt{C = C * (1 + t)}$<br/>$\\texttt{print(C)}$',
        '$\\texttt{C = 1000}$<br/>$\\texttt{t = 0.03}$<br/>$\\texttt{annees = 0}$<br/>$\\texttt{while C < 2000:}$<br/>$\\quad\\texttt{C = C * 1.03}$<br/>$\\quad\\texttt{annees = annees + 1}$<br/>$\\texttt{print(annees)}$',
        'Après $23$ ans : $C_{23} = 1000 \\times 1{,}03^{23} \\approx 1974$ € (pas encore doublé). Après $24$ ans : $C_{24} \\approx 2033$ €. Il faut $24$ ans pour doubler le capital.'
      ],
      finalAnswer: 'Il faut $24$ ans pour doubler un capital à $3\\%$ par an (intérêts composés).'
    },

    evaluation: {
      title: 'Évaluation — Algorithmique et programmation (Python)',
      duration: '25 min',
      questions: [
        {
          statement: 'Que produit $\\texttt{range(2, 7)}$ en Python ?',
          type: 'multiple-choice',
          options: ['$2, 3, 4, 5, 6, 7$', '$2, 3, 4, 5, 6$', '$0, 1, 2, 3, 4, 5, 6$', '$2, 4, 6$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(2, 7)}$ produit les entiers de $2$ à $6$ inclus. La borne supérieure $7$ est toujours exclue en Python.'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{s = 0}$\n$\\texttt{for i in range(1, 6):}$\n$\\quad\\texttt{s = s + i}$\nQuelle est la valeur finale de $s$ ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$i$ prend les valeurs $1, 2, 3, 4, 5$. La somme $s = 1 + 2 + 3 + 4 + 5 = 15$.'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{x = 3}$\n$\\texttt{for i in range(4):}$\n$\\quad\\texttt{x = x * 2}$\nQuelle est la valeur finale de $x$ ?',
          type: 'numeric',
          answer: 48,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La boucle s\'exécute $4$ fois ($i = 0, 1, 2, 3$). À chaque passage, $x$ est doublé : $3 \\to 6 \\to 12 \\to 24 \\to 48$.'
        },
        {
          statement: 'Un élève écrit $\\texttt{for i in range(5)}$ pour répéter une action $5$ fois. Quelles valeurs prend $i$ ?',
          type: 'multiple-choice',
          options: ['$1, 2, 3, 4, 5$', '$0, 1, 2, 3, 4$', '$0, 1, 2, 3, 4, 5$', '$1, 2, 3, 4$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(5)}$ est équivalent à $\\texttt{range(0, 5)}$ et produit $0, 1, 2, 3, 4$ (cinq valeurs, la borne supérieure $5$ est exclue).'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{n = 10}$\n$\\texttt{compteur = 0}$\n$\\texttt{while n > 1:}$\n$\\quad\\texttt{n = n // 2}$\n$\\quad\\texttt{compteur = compteur + 1}$\nQuelle est la valeur finale de $\\texttt{compteur}$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Division entière successive : $n = 10 \\to 5$ (compteur $= 1$), $5 \\to 2$ (compteur $= 2$), $2 \\to 1$ (compteur $= 3$). Ensuite $n = 1$, la condition $n > 1$ est fausse et la boucle s\'arrête. $\\texttt{compteur} = 3$.'
        }
      ]
    }
  });
