/* =========================================================
   Spark Learning – data/3e/3e-arithmetique.js
   Module : Arithmétique (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-arithmetique',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Arithmétique',
    subtitle: 'PGCD, nombres premiers, décomposition',
    keywords: ['PGCD', 'PPCM', 'Nombre premier', 'Décomposition', 'Divisibilité'],
    physics: false,
    cours: {
      intro: 'Tout entier $n \\geq 2$ admet une décomposition en <strong>facteurs premiers</strong> unique (à l\'ordre près) — c\'est le <strong>théorème fondamental de l\'arithmétique</strong>. Cette décomposition est le « code-barres » du nombre : elle révèle instantanément tous ses diviseurs, son PGCD et son PPCM.<br/><br/>' +
        'Le <strong>PGCD</strong> (Plus Grand Commun Diviseur) donne la taille maximale d\'une part équitable. Le <strong>PPCM</strong> (Plus Petit Commun Multiple) indique le premier moment où deux cycles se synchronisent.<br/><br/>' +
        'L\'<strong>algorithme d\'Euclide</strong> calcule le PGCD en quelques divisions successives, sans décomposer en facteurs premiers — très pratique pour les grands nombres.<br/><br/>' +
        '<strong>Relation clé</strong> : $a \\times b = \\text{PGCD}(a,b) \\times \\text{PPCM}(a,b)$ — connaître l\'un permet de calculer l\'autre.',
      definitions: [
        { term: 'Nombre premier', def: 'Entier $n \\geq 2$ qui n\'a que <strong>deux diviseurs distincts</strong> : $1$ et lui-même.<br/><br/>Exemples : $2, 3, 5, 7, 11, 13\\ldots$ Le nombre $1$ n\'est <strong>pas</strong> premier.' },
        { term: 'PGCD', def: '<strong>Plus Grand Commun Diviseur</strong> de deux entiers $a$ et $b$ : c\'est le plus grand entier qui divise à la fois $a$ et $b$.<br/><br/>Exemple : $\\text{PGCD}(12, 18) = 6$.' },
        { term: 'PPCM', def: '<strong>Plus Petit Commun Multiple</strong> de deux entiers $a$ et $b$ : c\'est le plus petit entier strictement positif qui est multiple de $a$ et de $b$ simultanément.<br/><br/>Exemple : $\\text{PPCM}(4, 6) = 12$.' },
        { term: 'Algorithme d\'Euclide', def: 'Méthode de calcul du PGCD par <strong>divisions euclidiennes successives</strong> : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$, jusqu\'à obtenir un reste nul. Le dernier diviseur non nul est le PGCD.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Décomposer</strong> chaque nombre en produit de facteurs premiers (diviser successivement par $2$, $3$, $5$, $7$, $11\\ldots$ jusqu\'à $1$).',
          '<strong>Étape 2 : PGCD</strong> — prendre les facteurs premiers <strong>communs</strong> avec le <strong>plus petit exposant</strong>.',
          '<strong>Étape 3 : PPCM</strong> — prendre <strong>tous</strong> les facteurs premiers (communs ou non) avec le <strong>plus grand exposant</strong>.'
        ]
      },
      example: {
        statement: 'Trouver le PGCD de $84$ et $56$ par l\'algorithme d\'Euclide.',
        steps: [
          '<strong>1ère division</strong> : $84 = 56 \\times 1 + 28$. Le reste est $28 \\neq 0$, on continue avec $\\text{PGCD}(56, 28)$.',
          '<strong>2e division</strong> : $56 = 28 \\times 2 + 0$. Le reste est $0$, on s\'arrête.',
          '<strong>Conclusion</strong> : le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$. Vérification : $84 = 28 \\times 3$ et $56 = 28 \\times 2$ ✓'
        ],
        answer: '$\\text{PGCD}(84, 56) = 28$.'
      },
      formulas: [
        'PGCD × PPCM $= a \\times b$',
        'Fraction irréductible : diviser numérateur et dénominateur par le PGCD',
        'Algorithme d\'Euclide : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Décomposition en facteurs premiers',
        title: 'Un arbre pour décomposer 180 en facteurs premiers',
        description: 'Chaque nombre composé se sépare en deux facteurs jusqu\'à n\'obtenir que des nombres premiers, en bout de branche.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="arithmetique-graph-title arithmetique-graph-desc">
            <title id="arithmetique-graph-title">Arbre de decomposition en facteurs premiers de 180</title>
            <desc id="arithmetique-graph-desc">Le schema montre 180 se separant en 4 et 45, puis 4 en 2 et 2, 45 en 9 et 5, et 9 en 3 et 3, jusqu'a n'obtenir que des nombres premiers.</desc>
            <rect x="16" y="12" width="230" height="26" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 24%, var(--border))"></rect>
            <circle class="plot-point-alt" cx="30" cy="25" r="7"></circle>
            <text class="tick-label" x="44" y="29">Nombre compose : on continue</text>
            <rect x="16" y="44" width="230" height="26" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 24%, var(--border))"></rect>
            <circle class="plot-point" cx="30" cy="57" r="7"></circle>
            <text class="tick-label" x="44" y="61">Nombre premier : on s'arrete</text>
            <line class="frame-line" x1="240" y1="110" x2="120" y2="185"></line>
            <line class="frame-line" x1="240" y1="110" x2="360" y2="185"></line>
            <line class="frame-line" x1="120" y1="185" x2="70" y2="255"></line>
            <line class="frame-line" x1="120" y1="185" x2="170" y2="255"></line>
            <line class="frame-line" x1="360" y1="185" x2="310" y2="255"></line>
            <line class="frame-line" x1="360" y1="185" x2="410" y2="255"></line>
            <line class="frame-line" x1="310" y1="255" x2="280" y2="320"></line>
            <line class="frame-line" x1="310" y1="255" x2="340" y2="320"></line>
            <circle class="plot-point-alt" cx="240" cy="110" r="22"></circle>
            <text class="annotation-label" text-anchor="middle" x="240" y="115">180</text>
            <circle class="plot-point-alt" cx="120" cy="185" r="19"></circle>
            <text class="annotation-label" text-anchor="middle" x="120" y="190">4</text>
            <circle class="plot-point-alt" cx="360" cy="185" r="19"></circle>
            <text class="annotation-label" text-anchor="middle" x="360" y="190">45</text>
            <circle class="plot-point" cx="70" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="70" y="260" style="fill:var(--bg-card)">2</text>
            <circle class="plot-point" cx="170" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="170" y="260" style="fill:var(--bg-card)">2</text>
            <circle class="plot-point-alt" cx="310" cy="255" r="18"></circle>
            <text class="annotation-label" text-anchor="middle" x="310" y="260">9</text>
            <circle class="plot-point" cx="410" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="410" y="260" style="fill:var(--bg-card)">5</text>
            <circle class="plot-point" cx="280" cy="320" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="280" y="325" style="fill:var(--bg-card)">3</text>
            <circle class="plot-point" cx="340" cy="320" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="340" y="325" style="fill:var(--bg-card)">3</text>
            <text class="annotation-label" text-anchor="middle" x="240" y="362">180 = 2² × 3² × 5</text>
          </svg>
        `,
        notes: [
          'Peu importe la paire de facteurs choisie au depart (ici 4 et 45) : on retombe toujours sur la meme decomposition finale. C\'est le theoreme fondamental de l\'arithmetique.',
          'Les cercles bordes (180, 4, 45, 9) sont des nombres composes : on continue a les decomposer. Les cercles pleins (2, 2, 3, 3, 5) sont des nombres premiers : la branche s\'arrete.',
          'On regroupe ensuite les facteurs identiques avec des exposants : $180 = 2^2 \\times 3^2 \\times 5$.'
        ],
        reading: 'Un arbre de decomposition se lit de haut en bas : a chaque noeud compose, on choisit deux facteurs dont le produit redonne le nombre, jusqu\'a n\'obtenir que des nombres premiers.',
        caption: 'Decomposition de $180$ en produit de facteurs premiers : $180 = 2^2 \\times 3^2 \\times 5$.'
      },
      recap: [
        '<strong>Théorème fondamental</strong> : tout entier $\\geq 2$ se décompose de manière <strong>unique</strong> en produit de nombres premiers.',
        '<strong>Relation PGCD-PPCM</strong> : $\\text{PGCD}(a, b) \\times \\text{PPCM}(a, b) = a \\times b$. Connaître l\'un permet de calculer l\'autre.',
        '<strong>$1$ n\'est pas premier</strong> : un nombre premier a exactement deux diviseurs distincts. $1$ n\'en a qu\'un.',
        '<strong>Algorithme d\'Euclide</strong> : méthode rapide pour calculer le PGCD sans décomposer en facteurs premiers — idéal pour les grands nombres.'
      ],
      piege: 'Piège : $1$ n\'est PAS un nombre premier (il faut exactement deux diviseurs distincts). Le plus petit nombre premier est $2$. Et $2$ est le seul nombre premier pair.'
    },
    quiz: [
      {
        q: 'Quel est le PGCD de $36$ et $48$ ?',
        options: ['$6$', '$12$', '$9$', '$144$'],
        answer: 1,
        correction: '$36 = 2^2 \\times 3^2$ et $48 = 2^4 \\times 3$. PGCD $= 2^2 \\times 3 = 12$.'
      },
      {
        q: 'Un élève dit : « $1$ est un nombre premier car il n\'est divisible que par lui-même ». Où est l\'erreur ?',
        options: [
          'Un nombre premier doit avoir exactement DEUX diviseurs distincts ; $1$ n\'en a qu\'un seul ($1$ lui-même)',
          'L\'élève a raison, $1$ est bien premier',
          '$1$ n\'est pas premier car il est inférieur à $2$, mais pas pour la raison citée',
          '$1$ n\'est pas premier car il est pair'
        ],
        answer: 0,
        correction: 'Un nombre premier est un entier $\\geq 2$ ayant exactement deux diviseurs distincts : $1$ et lui-même. Le nombre $1$ n\'a qu\'un seul diviseur ($1 = 1 \\times 1$), donc il ne satisfait pas la définition. Exclure $1$ est crucial pour garantir l\'unicité de la décomposition en facteurs premiers.'
      },
      {
        q: 'Parmi ces nombres, lequel est premier ?',
        options: ['$1$', '$27$', '$51$', '$37$'],
        answer: 3,
        correction: '$1$ n\'est pas premier. $27 = 3^3$, $51 = 3 \\times 17$. $37$ n\'est divisible que par $1$ et $37$ : il est premier.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pairs = [[12,18],[15,25],[24,36],[18,30],[20,28],[12,8]];
        const [a,b] = pick(pairs);
        function gcd(x,y){return y===0?x:gcd(y,x%y);}

        const ctx = pick([
          { build: () => `Un fleuriste veut confectionner des <strong>bouquets identiques</strong> à partir de $${a}$ roses et $${b}$ tulipes, sans qu'il ne reste aucune fleur de côté.<br/><br/>Quel est le <strong>nombre maximal de bouquets</strong> qu'il peut réaliser ?` },
          { build: () => `Un traiteur veut préparer des <strong>sachets identiques</strong> à partir de $${a}$ chocolats et $${b}$ bonbons, sans rien gaspiller.<br/><br/>Quel est le <strong>nombre maximal de sachets</strong> identiques qu'il peut composer ?` },
          { build: () => `Un professeur veut répartir $${a}$ garçons et $${b}$ filles en <strong>équipes identiques</strong> (même nombre de garçons et même nombre de filles dans chaque équipe).<br/><br/>Quel est le <strong>nombre maximal d'équipes</strong> qu'il peut former ?` },
          { build: () => `Un artisan possède un ruban de $${a}\\,\\text{cm}$ et un ruban de $${b}\\,\\text{cm}$. Il veut les <strong>découper en morceaux de même longueur</strong>, la plus grande possible, sans perte.<br/><br/>Quelle est la <strong>longueur maximale</strong> de chaque morceau (en cm) ?` },
          { build: () => `Un carreleur doit paver une pièce de $${a}\\,\\text{cm}$ sur $${b}\\,\\text{cm}$ avec des <strong>carreaux carrés identiques</strong>, les plus grands possible, sans découpe.<br/><br/>Quelle est la <strong>longueur du côté</strong> d'un carreau (en cm) ?` },
          { build: () => `Un jardinier veut planter $${a}$ tulipes et $${b}$ roses en <strong>rangées identiques</strong> (même nombre de tulipes et même nombre de roses par rangée).<br/><br/>Quel est le <strong>nombre maximal de rangées</strong> qu'il peut créer ?` }
        ]);

        return {
          statement: ctx.build(),
          answer: gcd(a,b),
          tolerance: 0,
          unit: '',
          hint: `Utilise l'<strong>algorithme d'Euclide</strong> : $\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a % b})$…`,
          solution: [
            `Algorithme d'Euclide : $${a} = ${b} \\times ${Math.floor(a/b)} + ${a%b}$.`,
            `$\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a%b}) = ${gcd(a,b)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un maître-fromager coupe des meules de fromage en parts de même taille. Il a une meule de $360$ g et une autre de $252$ g.',
      tasks: [
        'Trouver le PGCD de $360$ et $252$.',
        'Quelle est la masse maximale de chaque part pour que les deux meules donnent un nombre entier de parts ?',
        'Combien de parts obtient-on de chaque meule ?'
      ],
      solutions: [
        'PGCD$(360, 252)$ : $360 = 252 \\times 1 + 108$ ; $252 = 108 \\times 2 + 36$ ; $108 = 36 \\times 3 + 0$. PGCD $= 36$.',
        'Chaque part pèse $36$ g.',
        '$360 \\div 36 = 10$ parts et $252 \\div 36 = 7$ parts.'
      ],
      finalAnswer: 'Le PGCD est $36$ g : on obtient $10$ parts de la première meule et $7$ de la seconde.'
    },

    evaluation: {
      title: 'Évaluation — Arithmétique',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le PGCD de $84$ et $56$ en utilisant l\'algorithme d\'Euclide.',
          type: 'numeric',
          answer: 28,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$84 = 56 \\times 1 + 28$. $56 = 28 \\times 2 + 0$. Le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$.'
        },
        {
          statement: 'La décomposition en facteurs premiers de $180$ est :',
          type: 'multiple-choice',
          options: ['$2^2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 5^2$', '$2^3 \\times 3 \\times 5$', '$4 \\times 9 \\times 5$'],
          answer: 0,
          points: 2,
          correction: '$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$. La réponse d) n\'est pas valide car $4$ et $9$ ne sont pas des nombres premiers.'
        },
        {
          statement: 'Rendre la fraction $\\dfrac{48}{72}$ irréductible. Le dénominateur de la fraction irréductible est :',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\text{PGCD}(48, 72) = 24$. $\\dfrac{48}{72} = \\dfrac{48 \\div 24}{72 \\div 24} = \\dfrac{2}{3}$. Le dénominateur est $3$.'
        },
        {
          statement: 'Quel est le PPCM de $12$ et $18$ ?',
          type: 'numeric',
          answer: 36,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. PPCM $= 2^2 \\times 3^2 = 4 \\times 9 = 36$. Vérification : $\\text{PGCD} \\times \\text{PPCM} = 6 \\times 36 = 216 = 12 \\times 18$ ✓.'
        },
        {
          statement: 'Parmi ces nombres, lequel est premier ?',
          type: 'multiple-choice',
          options: ['$91$', '$87$', '$83$', '$93$'],
          answer: 2,
          points: 2,
          correction: '$91 = 7 \\times 13$, $87 = 3 \\times 29$, $93 = 3 \\times 31$. $83$ n\'est divisible par aucun nombre premier $\\leq \\sqrt{83} \\approx 9{,}1$ (on teste $2, 3, 5, 7$) : $83$ est premier.'
        }
      ]
    }
  }
);
