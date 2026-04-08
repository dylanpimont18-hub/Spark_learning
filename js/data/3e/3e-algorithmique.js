/* =========================================================
   Spark Learning – data/3e/3e-algorithmique.js
   Module : Algorithmes et programmation (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-algorithmique',
    level: 1, subject: 'maths',
    icon: '💻',
    title: 'Algorithmes et programmation',
    subtitle: 'Variables, boucles, conditions, Scratch/Python',
    keywords: ['Algorithme', 'Variable', 'Boucle', 'Condition', 'Instruction', 'Pseudo-code'],
    physics: false,
    cours: {
      intro: 'Un <strong>algorithme</strong> est une suite finie et non ambiguë d\'instructions permettant de résoudre un problème. Les trois <strong>structures fondamentales</strong> — séquence, condition, boucle — suffisent à exprimer n\'importe quel calcul.<br/><br/>' +
        'L\'<strong>affectation</strong> $x \\leftarrow x + 1$ est très différente d\'une équation : en maths, $x = x + 1$ est absurde ; en algorithmique, c\'est une <strong>mise à jour</strong> (lire l\'ancienne valeur, ajouter $1$, stocker le résultat).<br/><br/>' +
        'Pour <strong>déboguer</strong> un algorithme : tracer son exécution ligne par ligne dans un tableau de valeurs des variables — une colonne par variable, une ligne par étape.<br/><br/>' +
        'Deux types de boucles : la boucle <strong>bornée</strong> ($\\mathtt{pour}$) avec un nombre fixé de tours ; la boucle <strong>non bornée</strong> ($\\mathtt{tant\\ que}$) qui continue sous condition.',
      definitions: [
        { term: 'Algorithme', def: 'Suite <strong>finie et non ambiguë</strong> d\'instructions qui résout un problème donné. Chaque étape doit être suffisamment précise pour être exécutée mécaniquement.' },
        { term: 'Variable', def: 'Espace mémoire nommé qui <strong>stocke une valeur</strong>. Une variable peut contenir un nombre, du texte, etc. Sa valeur peut changer au cours de l\'exécution.' },
        { term: 'Affectation', def: 'Instruction $x \\leftarrow \\text{valeur}$ qui <strong>donne une nouvelle valeur</strong> à la variable $x$. Attention : $x \\leftarrow x + 1$ n\'est pas une équation, c\'est une mise à jour.' },
        { term: 'Boucle', def: 'Structure qui <strong>répète un bloc d\'instructions</strong>. La boucle <strong>bornée</strong> ($\\mathtt{pour}$) a un nombre fixé de tours ; la boucle <strong>non bornée</strong> ($\\mathtt{tant que}$) continue jusqu\'à ce qu\'une condition devienne fausse.' }
      ],
      method: {
        title: 'Les trois structures de base',
        steps: [
          '<strong>Séquence</strong> : les instructions s\'exécutent dans l\'ordre, l\'une après l\'autre. C\'est la structure la plus simple.',
          '<strong>Condition</strong> : $\\mathtt{si}$ (condition) $\\mathtt{alors}$ (bloc A) $\\mathtt{sinon}$ (bloc B). Exécution <strong>conditionnelle</strong> — un seul des deux blocs s\'exécute.',
          '<strong>Boucle bornée</strong> : $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$ — nombre de tours <strong>fixé à l\'avance</strong>.<br/><strong>Boucle non bornée</strong> : $\\mathtt{tant\\ que}$ (condition) — continue jusqu\'à ce que la condition devienne fausse.'
        ]
      },
      example: {
        statement: 'Tracer l\'exécution de l\'algorithme suivant :<br/>$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 3\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i^2$<br/>$\\mathtt{fin pour}$',
        steps: [
          '<strong>Initialisation</strong> : $S = 0$.',
          '<strong>Tour $i = 1$</strong> : $S \\leftarrow 0 + 1^2 = 1$.<br/><strong>Tour $i = 2$</strong> : $S \\leftarrow 1 + 2^2 = 1 + 4 = 5$.<br/><strong>Tour $i = 3$</strong> : $S \\leftarrow 5 + 3^2 = 5 + 9 = 14$.',
          'La boucle est terminée ($i$ a atteint $3$). La valeur finale de $S$ est $14 = 1^2 + 2^2 + 3^2$.'
        ],
        answer: '$S = 14$. L\'algorithme calcule la somme des carrés de $1$ à $3$ : $1 + 4 + 9 = 14$.'
      },
      formulas: [
        'Affectation : $x \\leftarrow 5$ (la variable $x$ prend la valeur $5$)',
        'Boucle bornée : $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}\\; \\ldots$',
        'Test : $\\mathtt{si}\\; (x > 0)\\; \\mathtt{alors}\\; \\ldots\\; \\mathtt{sinon}\\; \\ldots$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Étape</th><th style="border:1px solid var(--border);padding:8px">$i$</th><th style="border:1px solid var(--border);padding:8px">$i^2$</th><th style="border:1px solid var(--border);padding:8px">$S$ (après affectation)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Init</td><td style="border:1px solid var(--border);padding:8px">—</td><td style="border:1px solid var(--border);padding:8px">—</td><td style="border:1px solid var(--border);padding:8px">$0$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Tour 1</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$0 + 1 = 1$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Tour 2</td><td style="border:1px solid var(--border);padding:8px">$2$</td><td style="border:1px solid var(--border);padding:8px">$4$</td><td style="border:1px solid var(--border);padding:8px">$1 + 4 = 5$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Tour 3</td><td style="border:1px solid var(--border);padding:8px">$3$</td><td style="border:1px solid var(--border);padding:8px">$9$</td><td style="border:1px solid var(--border);padding:8px">$5 + 9 = 14$</td></tr></table>',
      recap: [
        'Les trois structures fondamentales sont la <strong>séquence</strong>, la <strong>condition</strong> ($\\mathtt{si/sinon}$) et la <strong>boucle</strong> ($\\mathtt{pour}$ ou $\\mathtt{tant que}$).',
        'L\'<strong>affectation</strong> $x \\leftarrow x + 1$ n\'est PAS une équation : c\'est une mise à jour qui lit l\'ancienne valeur, calcule, et stocke le résultat.',
        '<strong>Tracer</strong> l\'exécution dans un tableau (une ligne par étape, une colonne par variable) est la méthode la plus sûre pour comprendre et déboguer.',
        'Une boucle <strong>bornée</strong> ($\\mathtt{pour}$) a un nombre de tours fixé à l\'avance ; une boucle <strong>non bornée</strong> ($\\mathtt{tant que}$) peut tourner indéfiniment si la condition ne devient jamais fausse.'
      ],
      piege: 'Piège : l\'affectation $x \\leftarrow x + 1$ signifie « prendre la valeur actuelle de $x$, y ajouter $1$, et stocker le résultat dans $x$ ». Ce n\'est pas une équation : $x = x + 1$ est impossible en maths, mais parfaitement valide en algorithmique.'
    },
    quiz: [
      {
        q: 'Quelle est la valeur de $S$ à la fin de cet algorithme ?\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 4\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i$',
        options: ['$4$', '$6$', '$10$', '$16$'],
        answer: 2,
        correction: '$S = 0 + 1 + 2 + 3 + 4 = 10$. La boucle additionne tous les entiers de $1$ à $4$.'
      },
      {
        q: 'Un algorithme initialise $S \\leftarrow 1$, puis exécute $S \\leftarrow S \\times i$ pour $i$ allant de $1$ à $3$. Quelle est la valeur finale de $S$ ?',
        options: ['$1$', '$3$', '$6$', '$9$'],
        answer: 2,
        correction: 'Déroulement : $S=1$. $i=1 : S = 1 \\times 1 = 1$. $i=2 : S = 1 \\times 2 = 2$. $i=3 : S = 2 \\times 3 = 6$. L\'erreur fréquente est d\'additionner au lieu de multiplier ($1+2+3 = 6$ ici par coïncidence, mais pas pour $n=4$), ou d\'oublier que $S$ part de $1$ (pas $0$) car on multiplie.'
      },
      {
        q: 'Dans un algorithme, on écrit $x \\leftarrow x + 1$. Que fait cette instruction ?',
        options: [
          'Elle prouve que $x = x + 1$',
          'Elle augmente la valeur de $x$ de $1$',
          'Elle réinitialise $x$ à $0$',
          'Elle est impossible'
        ],
        answer: 1,
        correction: 'En algorithmique, $x \\leftarrow x + 1$ est une affectation : on lit la valeur actuelle de $x$, on lui ajoute $1$, et on stocke le résultat dans $x$. C\'est un incrément.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(3, 8);
        let s = 0;
        for (let i = 1; i <= n; i++) s += i;
        return {
          statement: `Cet algorithme est exécuté avec $n = ${n}$ :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; ${n}\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i$\nQuelle est la valeur finale de $S$ ?`,
          answer: s,
          tolerance: 0,
          unit: '',
          hint: `La boucle calcule $1 + 2 + 3 + \\ldots + ${n}$. Formule : $S = \\dfrac{${n} \\times ${n+1}}{2}$.`,
          solution: [
            `$S = 1 + 2 + \\ldots + ${n} = \\dfrac{${n} \\times ${n+1}}{2} = ${s}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un élève code un algorithme pour calculer la moyenne d\'une liste de $5$ notes.',
      tasks: [
        'Écrire en pseudo-code un algorithme qui demande $5$ notes, les additionne et affiche la moyenne.',
        'Simuler cet algorithme avec les notes $12, 15, 8, 17, 13$.',
        'Modifier l\'algorithme pour compter combien de notes sont supérieures à la moyenne.'
      ],
      solutions: [
        '$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$\n$\\quad$ Saisir $n_i$\n$\\quad S \\leftarrow S + n_i$\n$\\text{Afficher } S / 5$',
        '$S = 12+15+8+17+13 = 65$. Moyenne $= 65/5 = 13$.',
        'Ajouter un compteur $c \\leftarrow 0$ et tester $\\mathtt{si}\\; n_i > 13\\; \\mathtt{alors}\\; c \\leftarrow c + 1$. Ici : $15, 17$ → $c = 2$.'
      ],
      finalAnswer: 'Moyenne $= 13$ ; $2$ notes sur $5$ sont supérieures à la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Algorithmes et programmation',
      duration: '30 min',
      questions: [
        {
          statement: 'On exécute l\'algorithme suivant :\n$x \\leftarrow 3$\n$y \\leftarrow 5$\n$x \\leftarrow x + y$\n$y \\leftarrow x - y$\nQuelle est la valeur de $y$ à la fin ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Ligne par ligne : $x = 3$, $y = 5$. Puis $x \\leftarrow 3 + 5 = 8$. Puis $y \\leftarrow 8 - 5 = 3$. La valeur finale de $y$ est $3$. En fait, cet algorithme échange les valeurs de $x$ et $y$ (sans variable intermédiaire pour $y$).'
        },
        {
          statement: 'Quel est le rôle de cet algorithme ?\n$S \\leftarrow 1$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S \\times 2$',
          type: 'multiple-choice',
          options: ['Il calcule $2n$', 'Il calcule $2^n$', 'Il calcule $n!$', 'Il calcule $n^2$'],
          answer: 1,
          points: 2,
          correction: 'À chaque passage dans la boucle, $S$ est multiplié par $2$. Après $n$ passages : $S = 1 \\times 2^n = 2^n$. Par exemple pour $n = 3$ : $S = 1 \\to 2 \\to 4 \\to 8 = 2^3$.'
        },
        {
          statement: 'On exécute :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$\n$\\quad \\mathtt{si}\\; i\\; \\mathtt{est\\; pair}\\; \\mathtt{alors}$\n$\\quad\\quad S \\leftarrow S + i$\nQuelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les entiers de $1$ à $5$ sont : $1, 2, 3, 4, 5$. Les pairs sont $2$ et $4$. Donc $S = 0 + 2 + 4 = 6$.'
        },
        {
          statement: 'Un algorithme contient la boucle :\n$c \\leftarrow 0$\n$n \\leftarrow 100$\n$\\mathtt{tant\\; que}\\; n > 1\\; \\mathtt{faire}$\n$\\quad n \\leftarrow n \\div 2$ (division entière)\n$\\quad c \\leftarrow c + 1$\nQuelle est la valeur finale de $c$ ?',
          type: 'multiple-choice',
          options: ['$5$', '$6$', '$7$', '$50$'],
          answer: 1,
          points: 2,
          correction: 'On divise $n$ par $2$ (division entière) successivement : $100 \\to 50 \\to 25 \\to 12 \\to 6 \\to 3 \\to 1$. On s\'arrête quand $n \\leq 1$. Le compteur $c$ a été incrémenté $6$ fois (une par passage dans la boucle).'
        },
        {
          statement: 'On exécute l\'algorithme suivant avec $n = 6$ :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i \\times i$\nQuelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 91,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$S = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 = 1 + 4 + 9 + 16 + 25 + 36 = 91$. Cet algorithme calcule la somme des carrés des entiers de $1$ à $n$.'
        }
      ]
    }
  }
);
