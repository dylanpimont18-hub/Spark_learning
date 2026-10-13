window.MODULES.push(
    {
    id: '4e-fractions-mult-div',
    level: 1, subject: 'maths',
    icon: '✖️',
    title: 'Fractions : Multiplication et Division',
    subtitle: 'Produit et quotient de fractions',
    keywords: ['Produit de fractions', 'Quotient', 'Fraction inverse', 'Simplification croisée'],
    physics: 'Formules enchaînées : $v = \\frac{d}{t}$, $\\rho = \\frac{m}{V}$, changements d\'unités',

    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro annoncait la regle de calcul
         avant toute question. Ici le « des trois quarts d'une demi-plaque »
         resiste : l'eleve de quatrieme sait multiplier des entiers et sait
         qu'une multiplication AGRANDIT — or le resultat est plus petit que
         chacun des deux facteurs. C'est ce heurt, et non la regle, qui ouvre
         le chapitre. */
      intro: 'Tu as une demi-plaque de chocolat, et tu en manges les trois quarts. Quelle part de la plaque entière as-tu mangée ?<br/><br/>' +
        'Tu sens que c\'est une multiplication : « les trois quarts <strong>de</strong> la moitié ». Mais quelque chose cloche. Depuis l\'école primaire, multiplier veut dire agrandir — et ici tu obtiens $\\dfrac{3}{8}$, c\'est-à-dire <strong>moins que la moitié</strong> dont tu es parti, et moins que les trois quarts aussi.<br/><br/>' +
        'Ce chapitre explique pourquoi multiplier peut réduire, et comment calculer ces parts de parts.<br/><br/>' +
        'Multiplier des fractions est plus simple que de les additionner : pas besoin de dénominateur commun — on multiplie numérateurs entre eux et dénominateurs entre eux.' +
        '<br/><br/>' +
        'La <strong>simplification croisée</strong> évite les grands nombres : avant de multiplier, simplifier en diagonale ($\\frac{3}{4} \\times \\frac{8}{9}$ → simplifier $3$ et $9$ par $3$, $4$ et $8$ par $4$ → $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$).' +
        '<br/><br/>' +
        'Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$. <strong>Intuition :</strong> diviser par $\\dfrac{1}{2}$ revient à multiplier par $2$ (couper en demi → deux fois plus de morceaux).' +
        '<br/><br/>' +
        'En physique, les conversions d\'unités enchaînent des multiplications/divisions de fractions : $1$ m/s $= \\dfrac{1\\,\\text{m}}{1\\,\\text{s}} \\times \\dfrac{3600\\,\\text{s}}{1\\,\\text{h}} = 3600$ m/h = $3{,}6$ km/h.',
      definitions: [
        { term: 'Produit de fractions', def: 'On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$.' },
        { term: 'Inverse d\'une fraction', def: 'L\'inverse de $\\dfrac{a}{b}$ (avec $a \\neq 0$) est $\\dfrac{b}{a}$. Leur produit vaut $1$ : $\\dfrac{a}{b} \\times \\dfrac{b}{a} = 1$.' },
        { term: 'Quotient de fractions', def: 'Diviser par une fraction, c\'est multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$.' },
        { term: 'Simplification croisée', def: 'Avant de multiplier, on simplifie un numérateur avec le dénominateur de l\'autre fraction (en diagonale) par un diviseur commun.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
           '<strong>Multiplication</strong> : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$. Simplifier avant de multiplier si possible (simplification croisée). <strong>Exemple :</strong> $\\dfrac{2}{5} \\times \\dfrac{3}{7} = \\dfrac{2 \\times 3}{5 \\times 7} = \\dfrac{6}{35}$.',
           '<strong>Division</strong> : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{a \\times d}{b \\times c}$. Diviser par une fraction = multiplier par son inverse. <strong>Exemple :</strong> $\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8}$.',
           '<strong>Simplification croisée</strong> : avant de multiplier, simplifier numérateur avec dénominateur en diagonale. <strong>Exemple :</strong> $\\dfrac{6}{7} \\times \\dfrac{14}{9}$ → on simplifie $6$ et $9$ par $3$ ($\\to 2$ et $3$), $7$ et $14$ par $7$ ($\\to 1$ et $2$) → $\\dfrac{2}{1} \\times \\dfrac{2}{3} = \\dfrac{4}{3}$.'
        ]
      },
      example: {
        statement: 'Une recette de gâteau nécessite $\\dfrac{3}{4}$ de litre de lait. On veut préparer $\\dfrac{2}{3}$ de la recette. Quel volume de lait faut-il ?',
        steps: [
          'Il faut calculer $\\dfrac{2}{3}$ de $\\dfrac{3}{4}$ L, c\'est-à-dire $\\dfrac{2}{3} \\times \\dfrac{3}{4}$.',
          'Simplification croisée : $3$ au numérateur et $3$ au dénominateur se simplifient → $\\dfrac{2}{1} \\times \\dfrac{1}{4} = \\dfrac{2}{4}$.',
          'On simplifie : $\\dfrac{2}{4} = \\dfrac{1}{2}$.'
        ],
        answer: 'Il faut $\\dfrac{1}{2}$ litre de lait, soit $0{,}5$ L.'
      },
      formulas: [
        '$\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{ac}{bd}$',
        '$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{ad}{bc}$',
        '$\\dfrac{a}{b} \\div a = \\dfrac{1}{b}$ et $a \\times \\dfrac{1}{b} = \\dfrac{a}{b}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Modèle d\'aire pour la multiplication de fractions',
        title: 'Le rectangle unité découpé en 21 cases pour visualiser $\\dfrac{2}{3} \\times \\dfrac{5}{7}$',
        description: 'Le rectangle représente le nombre $1$.<br/><br/>On le partage en $3$ colonnes (des <strong>tiers</strong>) et en $7$ lignes (des <strong>septièmes</strong>) : cela crée $3 \\times 7 = 21$ petites cases identiques.',
        svg: `
          <svg viewBox="0 0 420 340" role="img" aria-labelledby="fracmultdiv-graph-title fracmultdiv-graph-desc">
            <title id="fracmultdiv-graph-title">Rectangle unité découpé pour illustrer 2/3 fois 5/7</title>
            <desc id="fracmultdiv-graph-desc">Un rectangle representant 1 est quadrille en 3 colonnes et 7 lignes, soit 21 petites cases. La bande des 2 premières colonnes (2/3) et la bande des 5 premières lignes (5/7) se superposent sur une zone de 10 cases, illustrant 2/3 fois 5/7 égale 10/21.</desc>
            <rect x="110" y="50" width="100" height="210" fill="var(--diagram-accent)" fill-opacity="0.10"></rect>
            <rect x="110" y="50" width="150" height="150" fill="var(--secondary)" fill-opacity="0.10"></rect>
            <rect x="110" y="50" width="100" height="150" fill="var(--diagram-accent)" fill-opacity="0.38"></rect>
            <line class="grid-line" x1="160" y1="50" x2="160" y2="260"></line>
            <line class="grid-line" x1="210" y1="50" x2="210" y2="260"></line>
            <line class="grid-line" x1="110" y1="80" x2="260" y2="80"></line>
            <line class="grid-line" x1="110" y1="110" x2="260" y2="110"></line>
            <line class="grid-line" x1="110" y1="140" x2="260" y2="140"></line>
            <line class="grid-line" x1="110" y1="170" x2="260" y2="170"></line>
            <line class="grid-line" x1="110" y1="200" x2="260" y2="200"></line>
            <line class="grid-line" x1="110" y1="230" x2="260" y2="230"></line>
            <rect x="110" y="50" width="150" height="210" fill="none" class="frame-line"></rect>
            <rect x="110" y="50" width="100" height="150" fill="none" stroke="var(--diagram-accent)" stroke-width="3"></rect>
            <line class="frame-line" x1="110" y1="34" x2="110" y2="40"></line>
            <line class="frame-line" x1="210" y1="34" x2="210" y2="40"></line>
            <line class="frame-line" x1="110" y1="34" x2="210" y2="34"></line>
            <line class="frame-line" x1="92" y1="50" x2="98" y2="50"></line>
            <line class="frame-line" x1="92" y1="200" x2="98" y2="200"></line>
            <line class="frame-line" x1="92" y1="50" x2="92" y2="200"></line>
            <text class="axis-label" x="160" y="26" text-anchor="middle">2/3</text>
            <text class="tick-label" x="235" y="26" text-anchor="middle">1/3</text>
            <text class="axis-label" x="60" y="129" text-anchor="middle">5/7</text>
            <text class="tick-label" x="60" y="234" text-anchor="middle">2/7</text>
            <rect x="128" y="112" width="64" height="26" rx="8" fill="var(--bg-card)" fill-opacity="0.9" stroke="var(--diagram-accent)" stroke-width="1"></rect>
            <text class="annotation-label" x="160" y="129" text-anchor="middle">10/21</text>
            <rect x="60" y="274" width="300" height="48" rx="12" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="80" y="292" text-anchor="start">3 × 7 = 21 cases au total</text>
            <text class="annotation-label" x="80" y="310" text-anchor="start">2 × 5 = 10 cases coloriées</text>
          </svg>
        `,
        notes: [
          '<strong>Étape 1 :</strong> Le rectangle entier vaut $1$. On le découpe en $3$ colonnes verticales : chaque colonne vaut $\\dfrac{1}{3}$.',
          '<strong>Étape 2 :</strong> On découpe aussi en $7$ lignes horizontales : chaque ligne vaut $\\dfrac{1}{7}$. Le quadrillage complet compte $3 \\times 7 = 21$ petites cases, chacune valant $\\dfrac{1}{21}$.',
          '<strong>Étape 3 :</strong> La bande verticale des $2$ premières colonnes représente $\\dfrac{2}{3}$ ; la bande horizontale des $5$ premières lignes représente $\\dfrac{5}{7}$.',
          '<strong>Étape 4 :</strong> La zone où les deux bandes se superposent (en couleur foncée) contient $2 \\times 5 = 10$ petites cases sur les $21$ : c\'est exactement $\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$.'
        ],
        reading: 'Multiplier deux fractions, c\'est croiser deux découpages du même rectangle : le nombre de petites cases coloriées (produit des numérateurs) sur le nombre total de petites cases (produit des dénominateurs) donne directement $\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$.',
        caption: 'Modèle d\'aire : $3 \\times 7 = 21$ petites cases au total, dont $2 \\times 5 = 10$ coloriées, soit $\\dfrac{2}{3} \\times \\dfrac{5}{7} = \\dfrac{10}{21}$.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). DEUX figures et non trois : le
         chapitre a deja une figure principale (le modele d'aire) qui traite la
         multiplication, et le cahier des charges demande une figure par
         MALENTENDU, pas un quota. Les deux malentendus qui restent sont :
         1. multiplier peut REDUIRE, ce qui heurte tout l'acquis du primaire —
            c'est la question d'ouverture du chapitre ;
         2. diviser par une fraction, c'est multiplier par son inverse, et
            l'eleve renverse la MAUVAISE fraction.
         Ajouter une troisieme figure ici reviendrait a illustrer une formule
         deja lisible dans l'encadre. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'La réponse à la question d\'ouverture',
          title: 'Multiplier par un nombre plus petit que 1 fait diminuer',
          description: 'Depuis le primaire, multiplier veut dire agrandir. C\'est vrai <strong>tant qu\'on multiplie par un nombre plus grand que $1$</strong>. En dessous de $1$, la multiplication réduit.',
          svg: `
            <svg viewBox="0 0 400 184" role="img" aria-labelledby="frac-reduit-title frac-reduit-desc">
              <title id="frac-reduit-title">Effet de la multiplication selon la taille du facteur</title>
              <desc id="frac-reduit-desc">Une barre de reference de longueur huit est dessinee en haut. En dessous, la meme barre multipliee par deux mesure seize : elle est plus longue. Encore en dessous, la meme barre multipliee par trois quarts ne mesure plus que six : elle est plus courte que la barre de depart. Les trois barres partent du meme bord gauche et sont dessinees a la meme echelle, si bien que la comparaison des longueurs est directe.</desc>

              <!-- MEME bord gauche (x = 60) et MEME echelle (16 unites de
                   viewBox par unite) pour les trois barres : la longueur est la
                   seule chose qui doit varier. -->
              <text class="tick-label" x="52" y="46" text-anchor="end">départ</text>
              <rect class="frame-line" x="60" y="34" width="128" height="18" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
              <text class="tick-label" x="196" y="46" text-anchor="start">8</text>

              <text class="tick-label" x="52" y="90" text-anchor="end">× 2</text>
              <rect class="frame-line" x="60" y="78" width="256" height="18" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
              <text class="annotation-label" x="324" y="90" text-anchor="start">16 : plus long</text>

              <text class="tick-label" x="52" y="134" text-anchor="end">× 3/4</text>
              <rect class="frame-line" x="60" y="122" width="96" height="18" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
              <text class="annotation-label" x="164" y="134" text-anchor="start">6 : plus court</text>

              <line class="guide-line" x1="188" y1="30" x2="188" y2="146"></line>
              <text class="tick-label" x="200" y="170" text-anchor="middle">le trait marque la longueur de départ</text>
            </svg>
          `,
          notes: [
            'Multiplier $8$ par $2$ donne $16$ : le facteur dépasse $1$, donc le résultat grandit.',
            'Multiplier $8$ par $\\dfrac{3}{4}$ donne $6$ : le facteur est plus petit que $1$, donc le résultat <strong>diminue</strong>.',
            'Le repère est toujours le nombre $1$ : au-dessus on agrandit, en dessous on réduit, et à $1$ exactement rien ne bouge.'
          ],
          reading: 'Avant de calculer, regarde le facteur. S\'il est plus petit que $1$, tu sais déjà que ton résultat sera plus petit que le nombre de départ — un contrôle gratuit.',
          caption: 'Multiplier par $\\dfrac{3}{4}$ réduit la longueur, alors que multiplier par $2$ l\'augmente.'
        },
        {
          theme: 'maths',
          kicker: 'Laquelle retourner ?',
          title: 'C\'est la deuxième fraction qu\'on renverse',
          description: 'Diviser par une fraction revient à multiplier par son inverse. Encore faut-il renverser <strong>la bonne</strong> : c\'est toujours celle qui suit le signe de division, jamais la première.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="frac-inverse-title frac-inverse-desc">
              <title id="frac-inverse-title">Division de fractions, calcul juste et erreur de fraction renversee</title>
              <desc id="frac-inverse-desc">On part de la division de trois quarts par trois cinquiemes. Le calcul juste renverse la seconde fraction et multiplie trois quarts par cinq tiers, ce qui donne quinze douziemes, soit un et quart. En dessous, en trait tirete, l'erreur frequente : l'eleve renverse la premiere fraction et calcule quatre tiers fois trois cinquiemes, ce qui donne douze quinziemes, soit quatre cinquiemes. Les deux resultats different, l'un est superieur a un et l'autre inferieur.</desc>

              <text class="tick-label" x="200" y="32" text-anchor="middle">calcul de départ : 3/4 ÷ 3/5</text>

              <!-- Le JUSTE en premier, en teinte d'accent ; l'erreur dessous,
                   en teinte faible et tiretee. -->
              <text class="annotation-label" x="30" y="76" text-anchor="start">juste</text>
              <text class="tick-label" x="104" y="76" text-anchor="start">on renverse la SECONDE : 3/4 × 5/3</text>
              <text class="annotation-label" x="104" y="98" text-anchor="start">= 15/12 = 1,25</text>

              <text class="label-soft" x="30" y="132" text-anchor="start">erreur</text>
              <text class="tick-label" x="104" y="132" text-anchor="start">on renverse la première : 4/3 × 3/5</text>
              <line class="guide-line" x1="100" y1="140" x2="340" y2="140"></line>
              <text class="label-soft" x="104" y="158" text-anchor="start">= 12/15 = 0,8, ce qui ne convient pas</text>
            </svg>
          `,
          notes: [
            'Le contrôle qui tranche : on divise par $\\dfrac{3}{5}$, un nombre <strong>plus petit que $1$</strong>, donc le résultat doit être <strong>plus grand</strong> que $\\dfrac{3}{4}$.',
            'Le calcul juste donne $1{,}25$, effectivement plus grand que $0{,}75$. L\'erreur donne $0{,}8$… mais aussi plus grand, donc ce seul contrôle ne suffit pas ici.',
            'La règle reste la seule garantie : la fraction renversée est celle qui vient <strong>après</strong> le signe de division.'
          ],
          reading: 'Repère le signe de division et pose ton doigt dessus. La fraction à retourner est celle qui se trouve juste à sa droite.',
          caption: 'Diviser par une fraction, c\'est multiplier par l\'inverse de la <strong>seconde</strong> fraction.'
        }
      ],
      recap: [
        'Multiplier deux fractions : on multiplie numérateurs entre eux et dénominateurs entre eux.',
        'Diviser par une fraction = multiplier par son inverse (on « retourne » la deuxième fraction).',
        'Toujours simplifier avant de multiplier (simplification croisée) pour éviter les grands nombres.',
        'L\'inverse de $\\dfrac{a}{b}$ est $\\dfrac{b}{a}$ — attention, $0$ n\'a pas d\'inverse.'
      ],
      piege: 'Erreur fréquente en division : diviser les numérateurs entre eux et les dénominateurs entre eux, comme en multiplication. $\\dfrac{6}{4} \\div \\dfrac{3}{2}$ ne vaut PAS $\\dfrac{6 \\div 3}{4 \\div 2} = \\dfrac{2}{2} = 1$. La bonne méthode : $\\dfrac{6}{4} \\times \\dfrac{2}{3} = \\dfrac{12}{12} = 1$. Même résultat ici, mais par chance !'
    },

    quiz: [
      {
        q: 'Calculer $\\dfrac{3}{4} \\times \\dfrac{8}{9}$.',
        options: ['$\\dfrac{24}{36}$', '$\\dfrac{2}{3}$', '$\\dfrac{11}{13}$', '$\\dfrac{24}{13}$'],
        answer: 1,
        correction: 'Simplification croisée : $\\dfrac{3}{4} \\times \\dfrac{8}{9} = \\dfrac{3 \\times 8}{4 \\times 9} = \\dfrac{24}{36} = \\dfrac{2}{3}$. (On pouvait simplifier : $3/9 = 1/3$ et $8/4 = 2$.)'
      },
      {
        q: 'Calculer $\\dfrac{5}{6} \\div \\dfrac{10}{3}$.',
        options: ['$\\dfrac{50}{18}$', '$\\dfrac{1}{4}$', '$\\dfrac{25}{9}$', '$\\dfrac{4}{1}$'],
        answer: 1,
        correction: '$\\dfrac{5}{6} \\div \\dfrac{10}{3} = \\dfrac{5}{6} \\times \\dfrac{3}{10} = \\dfrac{15}{60} = \\dfrac{1}{4}$.'
      },
      {
        q: 'Un élève calcule $\\dfrac{2}{3} \\div \\dfrac{4}{5}$ et trouve $\\dfrac{8}{15}$. Quelle est son erreur ?',
        options: [
          'Il a raison : $2 \\times 4 = 8$ et $3 \\times 5 = 15$, donc $\\dfrac{8}{15}$.',
          'Il a multiplié au lieu de diviser. Pour diviser, on inverse le second terme : $\\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$.',
          'Il faut d\'abord trouver un dénominateur commun : $\\dfrac{2}{3} - \\dfrac{4}{5} = \\dfrac{10-12}{15} = \\dfrac{-2}{15}$.',
          'Il faut diviser numérateurs et dénominateurs séparément : $\\dfrac{2 \\div 4}{3 \\div 5} = \\dfrac{0{,}5}{0{,}6}$.'
        ],
        answer: 1,
        correction: 'L\'élève a multiplié les deux fractions au lieu de diviser ! Pour diviser par $\\dfrac{4}{5}$, on multiplie par son inverse $\\dfrac{5}{4}$ : $\\dfrac{2}{3} \\div \\dfrac{4}{5} = \\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{10}{12} = \\dfrac{5}{6}$. Vérification : $\\dfrac{5}{6} \\times \\dfrac{4}{5} = \\dfrac{20}{30} = \\dfrac{2}{3}$ ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le chapitre s'intitule « Multiplication ET
         division » et le generateur ne tirait QUE des multiplications :
         5 moules, 15 enonces, 3 de banque, et la division — la moitie du titre,
         et la vraie difficulte du chapitre puisqu'elle demande de passer par
         l'inverse — jamais exercee. L'evaluation la pose pourtant deux fois.

         Quatre taches : multiplication, division, inverse d'une fraction, et
         fraction d'une quantite (le « des deux tiers de » du langage courant,
         qui est la traduction que les eleves ratent). */
      generate() {
        const tache = pick(['produit', 'quotient', 'inverse', 'fraction-de']);
        const ctx = pick([
          { intro: 'En cuisine, on prépare', emoji: '🍳' },
          { intro: 'En pharmacie, on dose', emoji: '💊' },
          { intro: 'En bricolage, on mesure', emoji: '🔨' },
          { intro: 'En couture, on coupe', emoji: '✂️' },
          { intro: 'En jardinage, on mélange', emoji: '🌱' }
        ]);
        const pgcd = (x, y) => y === 0 ? x : pgcd(y, x % y);

        if (tache === 'produit') {
          const a = rand(2, 7), b = rand(2, 8), c = rand(2, 6), d = rand(2, 7);
          const num = a * c, den = b * d, g = pgcd(num, den);
          const rep = parseFloat((num / den).toFixed(4));
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' une quantité qui vaut $\\dfrac{' + a + '}{' + b + '}$ d\'un lot de $\\dfrac{' + c + '}{' + d + '}$. ' +
              'Calcule $\\dfrac{' + a + '}{' + b + '} \\times \\dfrac{' + c + '}{' + d + '}$ et donne le résultat décimal.',
            answer: rep,
            tolerance: 0.001,
            unit: '',
            hint: 'Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux. Aucun dénominateur commun n\'est necessaire.',
            solution: [
              '$\\dfrac{' + a + '}{' + b + '} \\times \\dfrac{' + c + '}{' + d + '} = \\dfrac{' + a + ' \\times ' + c + '}{' + b + ' \\times ' + d + '} = \\dfrac{' + num + '}{' + den + '} = \\dfrac{' + (num / g) + '}{' + (den / g) + '}$.',
              'Valeur décimale : $' + fr(rep) + '$.'
            ]
          };
        }

        if (tache === 'quotient') {
          const a = rand(2, 8), b = rand(2, 7), c = rand(2, 7), d = rand(2, 8);
          const num = a * d, den = b * c, g = pgcd(num, den);
          const rep = parseFloat((num / den).toFixed(4));
          return {
            statement: ctx.emoji + ' Calcule $\\dfrac{' + a + '}{' + b + '} \\div \\dfrac{' + c + '}{' + d + '}$ et donne le résultat décimal.',
            answer: rep,
            tolerance: 0.001,
            unit: '',
            hint: 'Diviser par une fraction, c\'est multiplier par son inverse : l\'inverse de $\\dfrac{' + c + '}{' + d + '}$ est $\\dfrac{' + d + '}{' + c + '}$.',
            solution: [
              'Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{' + a + '}{' + b + '} \\div \\dfrac{' + c + '}{' + d + '} = \\dfrac{' + a + '}{' + b + '} \\times \\dfrac{' + d + '}{' + c + '}$.',
              '$= \\dfrac{' + a + ' \\times ' + d + '}{' + b + ' \\times ' + c + '} = \\dfrac{' + num + '}{' + den + '} = \\dfrac{' + (num / g) + '}{' + (den / g) + '}$.',
              'Valeur décimale : $' + fr(rep) + '$. Piege : on retourne la SECONDE fraction, jamais la première.'
            ]
          };
        }

        if (tache === 'inverse') {
          const a = rand(2, 9), b = rand(2, 9);
          const rep = parseFloat((b / a).toFixed(4));
          return {
            statement: 'Quel est l\'inverse de $\\dfrac{' + a + '}{' + b + '}$ ? Donne le résultat décimal.',
            answer: rep,
            tolerance: 0.001,
            unit: '',
            hint: 'L\'inverse d\'une fraction s\'obtient en echangeant son numérateur et son dénominateur. Vérification : le produit des deux doit valoir $1$.',
            solution: [
              'L\'inverse de $\\dfrac{' + a + '}{' + b + '}$ est $\\dfrac{' + b + '}{' + a + '}$, obtenu en echangeant les deux termes.',
              'Valeur décimale : $' + fr(rep) + '$.',
              'Vérification : $\\dfrac{' + a + '}{' + b + '} \\times \\dfrac{' + b + '}{' + a + '} = \\dfrac{' + (a * b) + '}{' + (a * b) + '} = 1$. C\'est la definition de l\'inverse — a ne pas confondre avec l\'opposé, dont la somme fait $0$.'
            ]
          };
        }

        // tache === 'fraction-de' : traduire « les deux tiers de » en produit.
        const b = pick([2, 3, 4, 5, 6, 8]);
        const a = rand(1, b - 1) || 1;
        const total = b * rand(2, 9);
        const rep = a * total / b;
        const objet = pick([
          { q: 'litrès de sirop', s: 'On en utilise' },
          { q: 'mètrès de tissu', s: 'On en coupe' },
          { q: 'grammes de farine', s: 'On en verse' },
          { q: 'centilitrès de solution', s: 'On en prélève' }
        ]);
        return {
          statement: ctx.emoji + ' Un récipient contient $' + total + '$ ' + objet.q + '. ' + objet.s + ' les $\\dfrac{' + a + '}{' + b + '}$. ' +
            'Quelle quantité cela représente-t-il ?',
          answer: rep,
          tolerance: 0.001,
          unit: '',
          hint: 'Prendre les $\\dfrac{' + a + '}{' + b + '}$ d\'une quantité, c\'est la MULTIPLIER par $\\dfrac{' + a + '}{' + b + '}$.',
          solution: [
            'Le mot « des » se traduit ici par une multiplication : $\\dfrac{' + a + '}{' + b + '} \\times ' + total + '$.',
            'On peut diviser d\'abord : $' + total + ' \\div ' + b + ' = ' + (total / b) + '$, puis multiplier par $' + a + '$ : $' + rep + '$.',
            'Contrôle de bon sens : $\\dfrac{' + a + '}{' + b + '}$ est plus petit que $1$, donc le résultat doit être plus petit que $' + total + '$.'
          ]
        };
      }
    },
    probleme: {
      context: 'Un laboratoire prépare $\\dfrac{3}{4}$ de litre d\'une solution à partir d\'une solution mère de concentration $C_0 = \\dfrac{2}{5}\\,\\text{mol/L}$. La relation de dilution est $C_1 V_1 = C_0 V_0$.',
      schema: null,
      tasks: [
        'Calculer le nombre de moles $n = C_0 \\times V_0$ dans le volume prélevé $V_0 = \\dfrac{1}{5}\\,\\text{L}$.',
        'On dilue cette quantité dans le volume final $V_1 = \\dfrac{3}{4}\\,\\text{L}$. Calculer $C_1 = \\dfrac{n}{V_1}$.',
        'Exprimer $C_1$ sous forme de fraction irréductible.'
      ],
      solutions: [
        '$n = C_0 \\times V_0 = \\dfrac{2}{5} \\times \\dfrac{1}{5} = \\dfrac{2}{25}\\,\\text{mol}$.',
        '$C_1 = \\dfrac{n}{V_1} = \\dfrac{2/25}{3/4} = \\dfrac{2}{25} \\times \\dfrac{4}{3} = \\dfrac{8}{75}\\,\\text{mol/L}$.',
        '$\\dfrac{8}{75}$ est déjà irréductible (PGCD(8,75) = 1). $C_1 \\approx 0{,}107\\,\\text{mol/L}$.'
      ],
      finalAnswer: '$C_1 = \\dfrac{8}{75}\\,\\text{mol/L} \\approx 0{,}107\\,\\text{mol/L}$'
    },

    evaluation: {
      title: 'Évaluation — Fractions : Multiplication et Division',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $\\dfrac{5}{7} \\times \\dfrac{14}{15}$. Donner le résultat sous forme de fraction irréductible.',
          type: 'multiple-choice',
          options: ['$\\dfrac{70}{105}$', '$\\dfrac{2}{3}$', '$\\dfrac{10}{15}$', '$\\dfrac{1}{3}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{5}{7} \\times \\dfrac{14}{15}$. Simplification croisée : $5$ et $15$ se simplifient par $5$ ($\\to 1$ et $3$), $7$ et $14$ par $7$ ($\\to 1$ et $2$). Résultat : $\\dfrac{1 \\times 2}{1 \\times 3} = \\dfrac{2}{3}$.'
        },
        {
          statement: 'Calculer $\\dfrac{3}{8} \\div \\dfrac{9}{4}$. Donner le résultat décimal.',
          type: 'numeric',
          answer: 1/6,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$\\dfrac{3}{8} \\div \\dfrac{9}{4} = \\dfrac{3}{8} \\times \\dfrac{4}{9} = \\dfrac{12}{72} = \\dfrac{1}{6} \\approx 0{,}167$.'
        },
        {
          /* Q3 — « modéliser ». L'énoncé a été précisé le 2026-09-13 (« les
             $\frac{2}{3}$ » et non « $\frac{2}{3}$ ») : c'est la tournure du
             langage courant, et c'est justement elle que les élèves traduisent
             par une soustraction. La difficulté n'est pas le produit, c'est la
             mise en opération. */
          statement: 'Un réservoir contient $\\dfrac{3}{5}$ de litre d\'eau. On en utilise les $\\dfrac{2}{3}$. Quel volume d\'eau a-t-on utilisé (en litres) ?',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.001,
          unit: 'L',
          points: 2,
          correction: 'Le mot « des » se traduit ici par une <strong>multiplication</strong>, et non par une soustraction : prendre les $\\dfrac{2}{3}$ d\'une quantité, c\'est la multiplier par $\\dfrac{2}{3}$.<br/><br/>' +
            'Volume utilisé $= \\dfrac{2}{3} \\times \\dfrac{3}{5} = \\dfrac{6}{15} = \\dfrac{2}{5} = 0{,}4\\,\\text{L}$.<br/><br/>' +
            'Contrôle de bon sens : $\\dfrac{2}{3}$ est plus petit que $1$, donc le résultat doit être plus petit que $\\dfrac{3}{5} = 0{,}6$. C\'est le cas.'
        },
        {
          /* Q4 — « représenter ». L'énoncé a été complété le 2026-09-13 par le
             rappel de la propriété caractéristique : l'élève doit produire
             l'autre écriture du même nombre ET la contrôler par le produit, ce
             qui fait de la tâche une mise en correspondance de deux
             représentations, non un calcul. */
          statement: 'Quel est l\'inverse de $\\dfrac{7}{3}$ ? (On rappelle que le produit d\'un nombre par son inverse vaut $1$.)',
          type: 'multiple-choice',
          options: ['$\\dfrac{-7}{3}$', '$\\dfrac{3}{7}$', '$\\dfrac{-3}{7}$', '$\\dfrac{7}{3}$'],
          answer: 1,
          points: 2,
          correction: 'L\'inverse de $\\dfrac{a}{b}$ est $\\dfrac{b}{a}$ : on échange numérateur et dénominateur. L\'inverse de $\\dfrac{7}{3}$ est donc $\\dfrac{3}{7}$.<br/><br/>' +
            'Vérification par la propriété rappelée : $\\dfrac{7}{3} \\times \\dfrac{3}{7} = \\dfrac{21}{21} = 1$. ✓<br/><br/>' +
            'Ne pas confondre avec l\'<strong>opposé</strong>, $-\\dfrac{7}{3}$, dont la SOMME avec le nombre vaut $0$. Les deux premières propositions fausses jouent précisément sur cette confusion.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancien
             énoncé était un calcul en chaîne. Celui-ci demande d'expliquer
             l'effet exact d'une erreur — retourner la mauvaise fraction retourne
             le résultat — ce qui est plus exigeant que de dire « c'est faux ». */
          statement: 'Pour calculer $\\dfrac{3}{4} \\div \\dfrac{3}{5}$, Inès retourne la <strong>première</strong> fraction au lieu de la seconde et écrit $\\dfrac{4}{3} \\times \\dfrac{3}{5} = \\dfrac{12}{15}$. Quelle explication décrit le mieux son erreur ?',
          type: 'multiple-choice',
          options: [
            'Sa méthode est correcte : dans une division de fractions, on peut retourner celle que l\'on veut.',
            'Elle a retourné la mauvaise fraction : diviser par $\\dfrac{3}{5}$, c\'est multiplier par $\\dfrac{5}{3}$, donc le calcul juste est $\\dfrac{3}{4} \\times \\dfrac{5}{3} = \\dfrac{15}{12}$ — l\'<strong>inverse</strong> de son résultat.',
            'Elle aurait dû chercher un dénominateur commun avant de diviser.',
            'Son erreur est sans conséquence, car $\\dfrac{12}{15}$ et $\\dfrac{15}{12}$ désignent le même nombre.'
          ],
          answer: 1,
          points: 2,
          correction: 'La règle est précise : diviser par une fraction, c\'est multiplier par l\'inverse de la <strong>seconde</strong>, jamais de la première.<br/><br/>' +
            'Le calcul juste est $\\dfrac{3}{4} \\times \\dfrac{5}{3} = \\dfrac{15}{12} = 1{,}25$. Inès a obtenu $\\dfrac{12}{15} = 0{,}8$, qui en est exactement l\'inverse : retourner la mauvaise fraction retourne le résultat.<br/><br/>' +
            'Un contrôle d\'ordre de grandeur l\'aurait alertée : on divise par $\\dfrac{3}{5}$, un nombre plus petit que $1$, donc le résultat doit être plus GRAND que $\\dfrac{3}{4} = 0{,}75$. Or $0{,}8$ l\'est à peine, tandis que $1{,}25$ l\'est franchement.'
        }
      ]
    }
  }
);
