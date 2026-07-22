/* =========================================================
   Spark Learning – data/5e/5e-probabilites.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités (introduction)',
    subtitle: 'Expériences aléatoires, univers, probabilité',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Fréquence', 'Équiprobabilité'],
    physics: false,

    cours: {
      intro: 'La probabilité quantifie l\'incertitude d\'un événement sur une échelle de <strong>$0$ (impossible) à $1$ (certain)</strong>.<br/><br/>' +
        '<strong>Équiprobabilité :</strong> quand tous les résultats ont la même chance, $P(A) = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$. Attention au raisonnement intuitif : « il y a deux issues (gagner ou perdre), donc $P = \\dfrac{1}{2}$ » est faux si les issues ne sont pas équiprobables.<br/><br/>' +
        'Le <strong>sophisme du joueur</strong> : après 5 piles de suite à pile-ou-face, la probabilité d\'obtenir face reste $\\dfrac{1}{2}$ — la pièce n\'a pas de mémoire. Chaque lancer est indépendant.<br/><br/>' +
        'L\'<strong>événement contraire</strong> $\\bar{A}$ (« $A$ ne se réalise pas ») vérifie $P(\\bar{A}) = 1 - P(A)$ — souvent plus simple à calculer que $P(A)$ directement.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance (lancer de dé, tirage au sort, etc.).' },
        { term: 'Univers ($\\Omega$)', def: 'Ensemble de tous les résultats possibles d\'une expérience aléatoire. Ex : pour un dé, $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers. Ex : « obtenir un nombre pair » = $\\{2, 4, 6\\}$.' },
        { term: 'Événement contraire', def: 'Si $A$ est un événement, $\\bar{A}$ est l\'événement « $A$ ne se réalise pas ». $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      example: {
        statement: 'On tire une carte au hasard dans un jeu de $32$ cartes. Quelle est la probabilité d\'obtenir un cœur ?',
        steps: [
          'Univers : $32$ cartes (équiprobabilité).',
          'Cas favorables : $8$ cœurs (il y a $8$ cartes par couleur dans un jeu de $32$).',
          '$P(\\text{cœur}) = \\dfrac{8}{32} = \\dfrac{1}{4} = 0{,}25$.'
        ],
        answer: '$P = \\dfrac{1}{4} = 0{,}25$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Repère visuel',
        title: 'De l\'impossible au certain',
        description: 'La probabilité d\'un événement est toujours comprise entre $0$ et $1$. Cette règle graduée reprend les trois repères numériques du cours ($0$, $0{,}5$, $1$) et les complète avec le vocabulaire courant utilisé pour décrire une chance intermédiaire.',
        svg: `
          <svg viewBox="0 0 540 240" role="img" aria-labelledby="proba5e-title proba5e-desc">
            <title id="proba5e-title">Echelle des probabilites de 0 a 1</title>
            <desc id="proba5e-desc">Regle graduee horizontale de 0 (impossible) a 1 (certain), avec cinq reperes qualitatifs : impossible, peu probable, equiprobable, probable, certain, places respectivement a 0, 0,25, 0,5, 0,75 et 1.</desc>
            <line class="axis" x1="40" y1="150" x2="520" y2="150"></line>
            <line class="axis" x1="60" y1="150" x2="60" y2="158"></line>
            <line class="axis" x1="170" y1="150" x2="170" y2="158"></line>
            <line class="axis" x1="280" y1="150" x2="280" y2="158"></line>
            <line class="axis" x1="390" y1="150" x2="390" y2="158"></line>
            <line class="axis" x1="500" y1="150" x2="500" y2="158"></line>
            <text class="tick-label" x="60" y="174" text-anchor="middle">0</text>
            <text class="tick-label" x="170" y="174" text-anchor="middle">0,25</text>
            <text class="tick-label" x="280" y="174" text-anchor="middle">0,5</text>
            <text class="tick-label" x="390" y="174" text-anchor="middle">0,75</text>
            <text class="tick-label" x="500" y="174" text-anchor="middle">1</text>
            <line class="guide-line" x1="60" y1="72" x2="60" y2="144"></line>
            <line class="guide-line" x1="170" y1="72" x2="170" y2="144"></line>
            <line class="guide-line" x1="280" y1="72" x2="280" y2="144"></line>
            <line class="guide-line" x1="390" y1="72" x2="390" y2="144"></line>
            <line class="guide-line" x1="500" y1="72" x2="500" y2="144"></line>
            <text class="annotation-label" x="60" y="60" text-anchor="middle">impossible</text>
            <text class="annotation-label" x="170" y="60" text-anchor="middle">peu probable</text>
            <text class="annotation-label" x="280" y="60" text-anchor="middle">équiprobable</text>
            <text class="annotation-label" x="390" y="60" text-anchor="middle">probable</text>
            <text class="annotation-label" x="500" y="60" text-anchor="middle">certain</text>
            <circle class="plot-point" cx="60" cy="150" r="6"></circle>
            <circle class="plot-point-alt" cx="170" cy="150" r="6"></circle>
            <circle class="plot-point" cx="280" cy="150" r="6"></circle>
            <circle class="plot-point-alt" cx="390" cy="150" r="6"></circle>
            <circle class="plot-point" cx="500" cy="150" r="6"></circle>
            <rect x="40" y="192" width="130" height="16" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></rect>
            <rect x="170" y="192" width="110" height="16" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
            <rect x="280" y="192" width="110" height="16" fill="color-mix(in srgb, var(--diagram-accent) 38%, transparent)" stroke="none"></rect>
            <rect x="390" y="192" width="130" height="16" fill="color-mix(in srgb, var(--diagram-accent) 60%, transparent)" stroke="none"></rect>
            <rect class="frame-line" x="40" y="192" width="480" height="16" fill="none"></rect>
            <line class="grid-line" x1="170" y1="192" x2="170" y2="208"></line>
            <line class="grid-line" x1="280" y1="192" x2="280" y2="208"></line>
            <line class="grid-line" x1="390" y1="192" x2="390" y2="208"></line>
            <text class="label-soft" x="40" y="228" text-anchor="start">moins probable</text>
            <text class="label-soft" x="520" y="228" text-anchor="end">plus probable</text>
          </svg>
        `,
        notes: [
          '<strong>Impossible</strong> ($P=0$) : obtenir $7$ avec un dé à $6$ faces, comme dans le tableau du cours — cet événement ne se produit jamais.',
          '<strong>Peu probable</strong> : les cas favorables sont nettement minoritaires (ex. tirer une bille rouge dans un sac qui en compte $3$ sur $10$).',
          '<strong>Équiprobable</strong> ($P=0{,}5$) : pile ou face — les deux issues sont « aussi probables l\'une que l\'autre », comme l\'indique le tableau du cours.',
          '<strong>Probable</strong> : les cas favorables sont nettement majoritaires (ex. tirer une bille verte dans ce même sac, qui en compte $5$ sur $10$).',
          '<strong>Certain</strong> ($P=1$) : obtenir un nombre $\\leq 6$ avec un dé à $6$ faces, comme dans le tableau du cours — cet événement se produit à chaque lancer.'
        ],
        reading: 'Les repères « peu probable » et « probable » n\'ont pas de seuil chiffré officiel — ce sont des mots du langage courant. Un calcul de $P(A)$ doit toujours donner une fraction ou un nombre exact entre $0$ et $1$, jamais une simple impression.',
        caption: 'Échelle qualitative superposée aux trois repères numériques du cours : $0$ (impossible), $0{,}5$ (équiprobable), $1$ (certain).'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Décrire l\'univers $\\Omega$</strong> : ensemble de tous les résultats possibles.',
          '<strong>Identifier l\'événement $A$</strong> : sous-ensemble des résultats favorables.',
          '<strong>Équiprobabilité</strong> : $P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$.'
        ]
      },
      formulas: [
        '$0 \\leq P(A) \\leq 1$',
        '$P(\\Omega) = 1$ (événement certain)',
        '$P(\\emptyset) = 0$ (événement impossible)',
        '$P(\\bar{A}) = 1 - P(A)$ (événement contraire)',
        'Équiprobabilité : $P(A) = \\dfrac{|A|}{|\\Omega|}$'
      ],
      recap: [
        'Une probabilité est toujours entre $0$ (impossible) et $1$ (certain).',
        'Équiprobabilité : $P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$.',
        'Les lancers successifs sont indépendants (la pièce n\'a pas de mémoire).'
      ],
      piege: 'Piège : $P(A) = \\frac{1}{2}$ ne signifie pas qu\'un événement arrive forcément une fois sur deux dans un petit nombre d\'essais. La loi des grands nombres dit que la fréquence tend vers la probabilité quand le nombre d\'essais est grand.'
    },

    quiz: [
      {
        q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre pair ?',
        options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
        answer: 2,
        correction: 'Nombres pairs : $\\{2, 4, 6\\}$ → $3$ cas. Total : $6$. $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
      },
      {
        q: 'Un sac contient $3$ billes rouges, $2$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de ne PAS tirer une bille rouge ?',
        options: ['$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$'],
        answer: 1,
        correction: '$P(\\text{rouge}) = \\frac{3}{10}$. Donc $P(\\overline{\\text{rouge}}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.'
      },
      {
        q: 'On lance une pièce $5$ fois et on obtient pile à chaque fois. Quelle est la probabilité d\'obtenir pile au $6^e$ lancer ?',
        options: [
          'Moins de $\\frac{1}{2}$ : on est « dans la chance du pile », donc face est plus probable.',
          'Exactement $\\frac{1}{2}$ : chaque lancer est indépendant, la pièce n\'a pas de mémoire.',
          'Plus de $\\frac{1}{2}$ : on a eu beaucoup de pile, donc la chance en tire est plus grande.',
          '$\\frac{1}{64}$ : la probabilité d\'obtenir 6 piles de suite est $\\left(\\frac{1}{2}\\right)^6$.'
        ],
        answer: 1,
        correction: 'Chaque lancer est indépendant : les résultats précédents n\'influencent pas le suivant. La probabilité d\'obtenir pile reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le <em>sophisme du joueur</em>.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'roue de loterie', emoji: '🎡' },
          { obj: 'urne avec des boules numérotées', emoji: '🎱' },
          { obj: 'jeu de cartes numérotées', emoji: '🃏' },
          { obj: 'tirage au sort', emoji: '🎲' }
        ]);
        const total = pick([6, 8, 10, 12]);
        const fav = rand(1, total - 1);
        const p = parseFloat((fav / total).toFixed(2));
        return {
          statement: `${ctx.emoji} Un(e) ${ctx.obj} comporte $${total}$ éléments numérotés de $1$ à $${total}$, tous équiprobables. On gagne si le numéro tiré est $\\leq ${fav}$. Quelle est la probabilité de gagner (arrondie à $0{,}01$) ?`,
          answer: p,
          tolerance: 0.01,
          unit: '',
          hint: `$P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}} = \\dfrac{${fav}}{${total}}$.`,
          solution: [`$P = \\dfrac{${fav}}{${total}} = ${p.toString().replace('.', '{,}')}$.`]
        };
      }
    },

    probleme: {
      context: 'Une classe de $30$ élèves tire au sort un délégué. Il y a $13$ filles et $17$ garçons.',
      tasks: [
        'Quelle est la probabilité que le délégué soit une fille ?',
        'Quelle est la probabilité que ce soit un garçon ?',
        'Vérifie que ces deux probabilités sont complémentaires.'
      ],
      solutions: [
        '$P(\\text{fille}) = \\dfrac{13}{30} \\approx 0{,}43$.',
        '$P(\\text{garçon}) = \\dfrac{17}{30} \\approx 0{,}57$.',
        '$\\dfrac{13}{30} + \\dfrac{17}{30} = \\dfrac{30}{30} = 1$ ✓.'
      ],
      finalAnswer: '$P(\\text{fille}) = \\frac{13}{30}$ et $P(\\text{garçon}) = \\frac{17}{30}$, somme $= 1$ ✓.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités (introduction)',
      duration: '20 min',
      questions: [
        {
          statement: 'On lance un dé à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.33,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Cas favorables : $\\{5, 6\\}$ → $2$ cas. Total : $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3} \\approx 0{,}33$.'
        },
        {
          statement: 'Un sac contient $4$ billes rouges, $3$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de tirer une bille bleue ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Total : $4 + 3 + 5 = 12$ billes. Cas favorables : $3$ bleues. $P = \\dfrac{3}{12} = \\dfrac{1}{4} = 0{,}25$.'
        },
        {
          statement: 'La probabilité de gagner à un jeu est $0{,}35$. Quelle est la probabilité de perdre ?',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\text{perdre}) = 1 - P(\\text{gagner}) = 1 - 0{,}35 = 0{,}65$.'
        },
        {
          statement: 'On lance un dé à $6$ faces. Quel événement est impossible ?',
          type: 'multiple-choice',
          options: [
            'Obtenir un nombre pair.',
            'Obtenir $7$.',
            'Obtenir un nombre inférieur à $6$.',
            'Obtenir $1$ deux lancers de suite.'
          ],
          answer: 1,
          points: 2,
          correction: 'Un dé standard a $6$ faces numérotées de $1$ à $6$. Obtenir $7$ est impossible : $P(7) = 0$.'
        },
        {
          statement: 'On lance une pièce $10$ fois et on obtient face $10$ fois. Quelle est la probabilité d\'obtenir face au $11^e$ lancer ?',
          type: 'multiple-choice',
          options: [
            'Presque $0$ car face est « épuisé ».',
            '$\\dfrac{1}{2}$ car chaque lancer est indépendant.',
            'Presque $1$ car la pièce semble favoriser face.',
            '$\\dfrac{1}{2^{11}}$ car il faut multiplier les probabilités.'
          ],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est indépendant des précédents. La pièce n\'a pas de mémoire. La probabilité reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le sophisme du joueur.'
        }
      ]
    }
  });
