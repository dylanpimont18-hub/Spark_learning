/* =========================================================
   Spark Learning – data/6e/6e-fractions.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-fractions',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Fractions',
    subtitle: 'Nommer, simplifier, comparer',
    keywords: ['Numérateur', 'Dénominateur', 'Simplification', 'Fraction irréductible', 'Comparaison'],
    physics: 'Fraction massique, fraction volumique, rapport de grandeurs en chimie',

    cours: {
      intro: 'Une <strong>fraction</strong> $\\dfrac{a}{b}$ représente $a$ parts d\'un tout divisé en $b$ parts égales. C\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion.<br/><br/>' +
        'Quand $a > b$, la fraction est <strong>supérieure à $1$</strong> ($\\dfrac{7}{3} > 1$) : elle représente plus d\'un entier. Deux fractions peuvent être égales avec des chiffres différents : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$, car $\\dfrac{k \\times a}{k \\times b} = \\dfrac{a}{b}$.<br/><br/>' +
        'Une <strong>part de gâteau</strong>, une <strong>remise de $\\dfrac{1}{4}$</strong> sur un prix, une <strong>échelle de carte</strong> : dès qu\'on partage ou qu\'on compare deux grandeurs, on écrit une fraction. Savoir la simplifier et la comparer, c\'est pouvoir lire toutes ces situations avec les mêmes outils.',
      definitions: [
        { term: 'Fraction', def: 'Écriture $\\dfrac{a}{b}$ où $a$ est le numérateur et $b$ le dénominateur ($b \\neq 0$). Elle représente $a$ parts sur $b$.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun autre que $1$ : on ne peut plus la simplifier.' },
        { term: 'Diviseur commun', def: 'Nombre qui divise à la fois le numérateur et le dénominateur. Par exemple $3$ divise $6$ et $9$ : c\'est un diviseur commun de $\\dfrac{6}{9}$.' },
        { term: 'Fractions égales', def: '$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$ pour tout $k \\neq 0$. Multiplier ou diviser les deux termes par un même nombre ne change pas la valeur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Simplifier</strong> : chercher un diviseur commun au numérateur et au dénominateur, diviser les deux par ce nombre, puis recommencer tant qu\'on en trouve un. <em>Exemple :</em> $\\dfrac{18}{24}$ — les deux sont pairs, on divise par $2$ : $\\dfrac{9}{12}$. Les deux sont dans la table de $3$, on divise par $3$ : $\\dfrac{3}{4}$. Vérifie : $3$ et $4$ n\'ont plus de diviseur commun → irréductible ✓',
          '<strong>Comparer</strong> : mettre les deux fractions au même dénominateur. Le plus simple est de multiplier les dénominateurs entre eux. <em>Exemple :</em> comparer $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ → dénominateur commun $3 \\times 5 = 15$. On amplifie : $\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$. Comme $10 > 9$, on conclut $\\dfrac{2}{3} > \\dfrac{3}{5}$. Astuce rapide : $\\dfrac{a}{b}$ vs $\\dfrac{c}{d}$ → comparer $a \\times d$ et $b \\times c$ (produit en croix).',
          '<strong>Convertir en décimal</strong> : poser la division du numérateur par le dénominateur. <em>Exemple :</em> $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Certaines divisions <strong>tombent juste</strong> et donnent une valeur exacte ; d\'autres ne s\'arrêtent jamais et se répètent indéfiniment : $\\dfrac{1}{3} = 0{,}333\\ldots$ On arrondit alors au rang demandé.'
        ]
      },
      example: {
        statement: 'Simplifier $\\dfrac{42}{56}$ et donner sa valeur décimale.',
        steps: [
          'Les deux nombres sont pairs : on divise par $2$. $\\dfrac{42}{56} = \\dfrac{21}{28}$.',
          'Les deux sont maintenant dans la table de $7$ : on divise par $7$. $\\dfrac{21}{28} = \\dfrac{3}{4}$.',
          'Vérification : $3$ et $4$ n\'ont plus aucun diviseur commun → irréductible ✓',
          'Valeur décimale : $3 \\div 4 = 0{,}75$.'
        ],
        answer: '$\\dfrac{42}{56} = \\dfrac{3}{4} = 0{,}75$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Équivalence de fractions',
        title: 'Trois façons de colorier la même moitié',
        description: 'Un disque, une bande de $6$ parts et une grille de $100$ cases : dans chaque cas, exactement la moitié est coloriée, donc $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.',
        svg: `
          <svg viewBox="0 0 400 205" role="img" aria-labelledby="fractions-diagram-title fractions-diagram-desc">
            <title id="fractions-diagram-title">Equivalence de fractions 1/2, 3/6 et 50/100</title>
            <desc id="fractions-diagram-desc">Un disque coupe en 2 parts avec une moitie coloree, une bande coupee en 6 parts avec 3 parts colorees, et une grille de 100 cases avec 50 cases colorees : les trois figures representent la meme proportion.</desc>
            <circle class="frame-line" cx="70" cy="100" r="54" fill="none"></circle>
            <path d="M70 46 A54 54 0 0 0 70 154 Z" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></path>
            <line class="grid-line" x1="70" y1="46" x2="70" y2="154"></line>
            <text class="annotation-label" x="70" y="188" text-anchor="middle" font-size="20">1/2</text>
            <text x="140" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="160" y="70" width="120" height="60" fill="none"></rect>
            <rect x="160" y="70" width="60" height="60" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="180" y1="70" x2="180" y2="130"></line>
            <line class="grid-line" x1="200" y1="70" x2="200" y2="130"></line>
            <line class="grid-line" x1="220" y1="70" x2="220" y2="130"></line>
            <line class="grid-line" x1="240" y1="70" x2="240" y2="130"></line>
            <line class="grid-line" x1="260" y1="70" x2="260" y2="130"></line>
            <text class="annotation-label" x="220" y="188" text-anchor="middle" font-size="20">3/6</text>
            <text x="296" y="107" text-anchor="middle" fill="var(--text)" font-size="22" font-weight="700">=</text>
            <rect class="frame-line" x="312" y="60" width="80" height="80" fill="none"></rect>
            <rect x="312" y="60" width="80" height="40" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)" stroke="none"></rect>
            <line class="grid-line" x1="320" y1="60" x2="320" y2="140"></line>
            <line class="grid-line" x1="328" y1="60" x2="328" y2="140"></line>
            <line class="grid-line" x1="336" y1="60" x2="336" y2="140"></line>
            <line class="grid-line" x1="344" y1="60" x2="344" y2="140"></line>
            <line class="grid-line" x1="352" y1="60" x2="352" y2="140"></line>
            <line class="grid-line" x1="360" y1="60" x2="360" y2="140"></line>
            <line class="grid-line" x1="368" y1="60" x2="368" y2="140"></line>
            <line class="grid-line" x1="376" y1="60" x2="376" y2="140"></line>
            <line class="grid-line" x1="384" y1="60" x2="384" y2="140"></line>
            <line class="grid-line" x1="312" y1="68" x2="392" y2="68"></line>
            <line class="grid-line" x1="312" y1="76" x2="392" y2="76"></line>
            <line class="grid-line" x1="312" y1="84" x2="392" y2="84"></line>
            <line class="grid-line" x1="312" y1="92" x2="392" y2="92"></line>
            <line class="grid-line" x1="312" y1="100" x2="392" y2="100"></line>
            <line class="grid-line" x1="312" y1="108" x2="392" y2="108"></line>
            <line class="grid-line" x1="312" y1="116" x2="392" y2="116"></line>
            <line class="grid-line" x1="312" y1="124" x2="392" y2="124"></line>
            <line class="grid-line" x1="312" y1="132" x2="392" y2="132"></line>
            <text class="annotation-label" x="352" y="188" text-anchor="middle" font-size="20">50/100</text>
          </svg>
        `,
        notes: [
          'Le disque est coupé en $2$ parts égales, la bande en $6$ parts égales, la grille en $100$ cases égales : dans chaque figure, on colorie exactement la moitié de la surface.',
          'On passe de $\\dfrac{1}{2}$ à $\\dfrac{3}{6}$ en multipliant numérateur et dénominateur par $3$, et de $\\dfrac{1}{2}$ à $\\dfrac{50}{100}$ en multipliant par $50$ : c\'est la propriété $\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$.',
          'Pour retrouver la forme la plus simple $\\dfrac{1}{2}$ à partir de $\\dfrac{50}{100}$, on divise les deux termes par un même diviseur commun, ici $50$.'
        ],
        reading: 'Compte les parts coloriées et le nombre total de parts dans chaque figure : le rapport colorié/total reste toujours $1$ sur $2$.',
        caption: 'Trois représentations visuelles de la même fraction : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$.'
      },
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ (simplification par $k$)',
        '$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$ (amplification par $n$)',
        '$\\dfrac{a}{b} < \\dfrac{c}{d} \\Leftrightarrow a \\times d < b \\times c$ (si $b, d > 0$)'
      ],
      recap: [
        'Une fraction $\\dfrac{a}{b}$ est irréductible quand $a$ et $b$ n\'ont plus aucun diviseur commun autre que $1$.',
        'Pour simplifier, on divise numérateur et dénominateur par un même diviseur commun, autant de fois que possible.',
        'Pour comparer, on utilise le même dénominateur ou les produits en croix.',
        'On ne simplifie JAMAIS par addition/soustraction, seulement par multiplication/division.'
      ],
      piege: 'Erreur fréquente : simplifier $\\dfrac{a + k}{b + k}$ en divisant par $k$. IMPOSSIBLE ! On ne peut simplifier qu\'en multipliant ou divisant numérateur ET dénominateur par un même facteur. $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓ mais $\\dfrac{6+3}{9+3} \\neq \\dfrac{2}{3}$ ✗.'
    },

    quiz: [
      {
        q: 'Quelle est la forme irréductible de $\\dfrac{24}{36}$ ?',
        options: ['$\\dfrac{4}{6}$', '$\\dfrac{2}{3}$', '$\\dfrac{6}{9}$', '$\\dfrac{12}{18}$'],
        answer: 1,
        correction: '$24$ et $36$ sont tous deux divisibles par $12$ : $\\dfrac{24}{36} = \\dfrac{24 \\div 12}{36 \\div 12} = \\dfrac{2}{3}$. C\'est la seule des quatre qu\'on ne peut plus simplifier.'
      },
      {
        q: 'Laquelle de ces simplifications est <strong>incorrecte</strong> ?',
        options: ['$\\dfrac{12}{18} = \\dfrac{2}{3}$', '$\\dfrac{15}{25} = \\dfrac{3}{5}$', '$\\dfrac{6+4}{9+4} = \\dfrac{6}{9}$', '$\\dfrac{8}{12} = \\dfrac{2}{3}$'],
        answer: 2,
        correction: 'On ne peut pas simplifier une fraction en ajoutant (ou soustrayant) la même valeur au numérateur et au dénominateur ! $\\dfrac{6+4}{9+4} = \\dfrac{10}{13} \\neq \\dfrac{6}{9}$. Pour simplifier, on ne peut que multiplier ou diviser numérateur ET dénominateur par un même facteur : $\\dfrac{6}{9} = \\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$ ✓.'
      },
      {
        q: 'Dans une classe de $30$ élèves, $18$ sont demi-pensionnaires. Quelle fraction irréductible représente leur part ?',
        options: ['$\\dfrac{3}{5}$', '$\\dfrac{18}{30}$', '$\\dfrac{9}{15}$', '$\\dfrac{2}{3}$'],
        answer: 0,
        correction: '$\\dfrac{18}{30}$ : les deux sont divisibles par $6$, donc $\\dfrac{18 \\div 6}{30 \\div 6} = \\dfrac{3}{5}$. $\\dfrac{18}{30}$ et $\\dfrac{9}{15}$ sont justes mais pas encore simplifiées.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
        // Chaque contexte doit se terminer par un imperatif : la suite du gabarit
        // enchaine sur « et donne sa valeur decimale », qui ne peut pas suivre
        // une proposition declarative sans rendre la phrase bancale.
        const context = pick([
          'Simplifie la fraction',
          'Un chimiste note une proportion : simplifie la fraction',
          'En cuisine, une recette impose une proportion : simplifie la fraction',
          'Un cartographe relève une échelle : simplifie la fraction'
        ]);
        const k = rand(2, 6);
        let a = rand(2, 9), b = rand(2, 9);
        let attempts = 0;
        while ((pgcd(a, b) !== 1 || a === b) && attempts < 20) { b = rand(2, 9); attempts++; }
        const num = k * a, den = k * b;
        // L'enonce demande un arrondi au MILLIEME : arrondir a 4 decimales
        // faisait repondre 0,2857 a une question qui attend 0,286 — enonce et
        // corrige se contredisaient (audit du 2026-08-16).
        const val = parseFloat((a / b).toFixed(3));
        return {
          statement: `${context} $\\dfrac{${num}}{${den}}$ et donne sa valeur décimale arrondie au millième.`,
          answer: val,
          tolerance: 0.001,
          unit: '',
          hint: `La fraction n'est pas irréductible : ${num} et ${den} ont un diviseur commun. Essaie de diviser les deux par ${k}.`,
          solution: [
            `Cherchons un diviseur commun à $${num}$ et $${den}$.`,
            `On observe : $${num} = ${k} \\times ${a}$ et $${den} = ${k} \\times ${b}$.`,
            `On divise numérateur et dénominateur par $${k}$ : $\\dfrac{${num}}{${den}} = \\dfrac{${a}}{${b}}$.`,
            `Vérification : $${a}$ et $${b}$ n'ont plus de diviseur commun → la fraction $\\dfrac{${a}}{${b}}$ est irréductible ✓`,
            `Valeur décimale arrondie au millième : $${a} \\div ${b} \\approx ${fr(val)}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un collège compte $250$ élèves au total. Parmi eux, $45$ sont inscrits à l\'association sportive.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Simplifier la fraction $\\dfrac{45}{250}$ pour exprimer sous forme irréductible la part des élèves inscrits.',
        '(Étape 3 de la méthode) Convertir cette fraction en nombre décimal, puis exprimer le pourcentage d\'élèves inscrits.',
        'Réflexion : si le collège doublait ET son nombre d\'inscrits ET son effectif total, la part des inscrits changerait-elle ? Justifie avec la propriété d\'amplification vue en cours.'
      ],
      solutions: [
        'Part des inscrits : $\\dfrac{45}{250}$. Les deux nombres sont divisibles par $5$ : $\\dfrac{45 \\div 5}{250 \\div 5} = \\dfrac{9}{50}$.',
        '$\\dfrac{9}{50} = 9 \\div 50 = 0{,}18$, soit $0{,}18 \\times 100 = 18\\%$ des élèves.',
        'Non. $\\dfrac{90}{500} = \\dfrac{9}{50} = 0{,}18$. Multiplier numérateur et dénominateur par le même facteur ne change pas la fraction.'
      ],
      finalAnswer: '$\\dfrac{45}{250} = \\dfrac{9}{50} = 18\\%$'
    },

    evaluation: {
      title: 'Évaluation — Fractions',
      duration: '20 min',
      questions: [
        {
          statement: 'Simplifie la fraction $\\dfrac{36}{48}$ et donne le numérateur de la fraction irréductible.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$36$ et $48$ sont tous deux divisibles par $12$. On divise : $\\dfrac{36}{48} = \\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$. Le numérateur est $3$.'
        },
        {
          statement: 'Quelle fraction est égale à $\\dfrac{5}{8}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{10}{24}$', '$\\dfrac{15}{24}$', '$\\dfrac{20}{40}$', '$\\dfrac{25}{35}$'],
          answer: 1,
          points: 2,
          correction: 'On amplifie $\\dfrac{5}{8}$ par $3$ : $\\dfrac{5 \\times 3}{8 \\times 3} = \\dfrac{15}{24}$. Vérification : $\\dfrac{15}{24} = \\dfrac{15 \\div 3}{24 \\div 3} = \\dfrac{5}{8}$ ✓.'
        },
        {
          // L'enonce demandait de comparer PUIS de donner 3 x 9 : l'eleve etait
          // note sur 27, pas sur la comparaison. La question porte desormais sur
          // ce qu'elle pretend evaluer (audit du 2026-08-16).
          statement: 'Compare $\\dfrac{3}{7}$ et $\\dfrac{5}{9}$ en utilisant les produits en croix.',
          type: 'multiple-choice',
          options: ['$\\dfrac{3}{7} < \\dfrac{5}{9}$', '$\\dfrac{3}{7} > \\dfrac{5}{9}$', '$\\dfrac{3}{7} = \\dfrac{5}{9}$', 'Les produits en croix ne permettent pas de conclure'],
          answer: 0,
          points: 2,
          correction: 'Produits en croix : $3 \\times 9 = 27$ et $7 \\times 5 = 35$. Comme $27 < 35$, on conclut $\\dfrac{3}{7} < \\dfrac{5}{9}$.'
        },
        {
          statement: 'Convertis $\\dfrac{7}{4}$ en nombre décimal.',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{7}{4} = 7 \\div 4 = 1{,}75$. Le numérateur est plus grand que le dénominateur ($7 > 4$), donc le résultat est supérieur à $1$.'
        },
        {
          statement: 'Parmi ces simplifications, laquelle est correcte ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{8+4}{12+4} = \\dfrac{8}{12}$', '$\\dfrac{14}{21} = \\dfrac{2}{3}$', '$\\dfrac{9}{15} = \\dfrac{2}{5}$', '$\\dfrac{6}{10} = \\dfrac{2}{5}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{14}{21}$ : $14$ et $21$ sont divisibles par $7$, donc $\\dfrac{14 \\div 7}{21 \\div 7} = \\dfrac{2}{3}$ ✓. Les autres : la première additionne au lieu de diviser (interdit), $\\dfrac{9}{15} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$, et $\\dfrac{6}{10} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$.'
        }
      ]
    }
  });
