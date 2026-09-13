/* =========================================================
   Spark Learning – data/5e/5e-aires-perimetres.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-aires-perimetres',
    level: 1, subject: 'maths',
    icon: '🔷',
    title: 'Aires et périmètres (approfondissement)',
    subtitle: 'Disque, figures composées, conversions',
    keywords: ['Aire', 'Périmètre', 'Disque', 'Secteur', 'Figures composées', 'Conversion'],
    physics: false,

    cours: {
      intro: 'Les figures complexes se décomposent toujours en <strong>figures simples</strong> (rectangles, triangles, disques). L\'aire totale est la somme (ou différence) des aires des parties.<br/><br/>' +
        '<strong>Règle de conversion des aires :</strong> quand on passe d\'une unité de longueur à une autre, l\'exposant $2$ s\'applique aussi au facteur de conversion : $1$ m $= 100$ cm, donc $1$ m² $= 100^2$ cm² $= 10\\,000$ cm². Beaucoup d\'élèves multiplient par $100$ au lieu de $10\\,000$ !<br/><br/>' +
        'Le <strong>disque</strong> de rayon $r$ a une aire $\\pi r^2$ — c\'est $r$ seul au carré, pas $\\pi r$ entier. Le périmètre (ou <strong>circonférence</strong>) vaut $2\\pi r$.<br/><br/>' +
        'Pour les <strong>figures composées</strong>, bien identifier si on ajoute une partie (rectangle + demi-disque) ou si on soustrait (carré avec un trou circulaire).',
      definitions: [
        { term: 'Aire', def: 'Mesure de la surface d\'une figure plane. S\'exprime en unités au carré (cm², m², etc.).' },
        { term: 'Périmètre', def: 'Longueur du contour d\'une figure. S\'exprime en unités de longueur (cm, m, etc.).' },
        { term: 'Disque', def: 'Surface délimitée par un cercle. Aire = $\\pi r^2$, périmètre = $2\\pi r$.' },
        { term: 'Figure composée', def: 'Figure obtenue en assemblant ou en retranchant des figures simples. Son aire est la somme (ou différence) des aires des parties.' }
      ],
      example: {
        statement: 'Calcule l\'aire d\'un terrain rectangulaire de $30$ m × $20$ m dans lequel on a creusé une piscine circulaire de rayon $4$ m.',
        steps: [
          'Aire du rectangle : $30 \\times 20 = 600$ m².',
          'Aire du disque (piscine) : $\\pi \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Aire restante : $600 - 50{,}3 = 549{,}7$ m².'
        ],
        answer: '$\\approx 549{,}7$ m²'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Figure composée',
        title: 'Décomposer une aire composée : additionner ou soustraire ?',
        description: 'Terrain rectangulaire de $30$ m $\\times$ $20$ m dans lequel une piscine circulaire de rayon $4$ m est retirée : l\'aire restante est une différence d\'aires, l\'exemple du cours.',
        svg: `
          <svg viewBox="0 0 360 250" role="img" aria-labelledby="aires-terrain-title aires-terrain-desc">
            <title id="aires-terrain-title">Terrain rectangulaire avec piscine circulaire retiree</title>
            <desc id="aires-terrain-desc">Un rectangle de 30 metres sur 20 metres represente un terrain. Un disque de rayon 4 metres est retire en son centre pour figurer une piscine : l'aire restante est l'aire du rectangle moins l'aire du disque.</desc>
            <rect class="frame-line" x="60" y="40" width="240" height="160" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></rect>
            <circle class="curve-main" cx="200" cy="120" r="32" fill="var(--bg-card)"></circle>
            <line class="guide-line" x1="200" y1="120" x2="232" y2="120"></line>
            <circle class="plot-point" cx="200" cy="120" r="4"></circle>
            <circle class="plot-point-alt" cx="232" cy="120" r="4"></circle>
            <line class="frame-line" x1="60" y1="210" x2="60" y2="222"></line>
            <line class="frame-line" x1="300" y1="210" x2="300" y2="222"></line>
            <line class="guide-line" x1="60" y1="216" x2="300" y2="216"></line>
            <line class="frame-line" x1="38" y1="40" x2="50" y2="40"></line>
            <line class="frame-line" x1="38" y1="200" x2="50" y2="200"></line>
            <line class="guide-line" x1="44" y1="40" x2="44" y2="200"></line>
            <text class="label-soft" x="70" y="58">Terrain</text>
            <text class="label-soft" x="182" y="124">Piscine</text>
            <text class="annotation-label" x="204" y="112">r = 4 m</text>
            <text class="axis-label" x="150" y="234">30 m</text>
            <text class="axis-label" x="14" y="124" transform="rotate(-90 14 124)">20 m</text>
          </svg>
        `,
        notes: [
          'L\'aire du rectangle (le terrain) vaut $30 \\times 20 = 600$ m².',
          'Le disque retiré (la piscine) a un rayon de $4$ m : son aire vaut $\\pi \\times 4^2 \\approx 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Le disque est creusé DANS le rectangle : on soustrait. Aire restante $\\approx 600 - 50{,}3 \\approx 549{,}7$ m².'
        ],
        reading: 'Face à une figure composée, identifie d\'abord si une partie est ajoutée (on additionne) ou retirée comme ici (on soustrait), avant de calculer quoi que ce soit.',
        caption: 'Terrain rectangulaire de $30$ m $\\times$ $20$ m avec une piscine circulaire de rayon $4$ m retirée en son centre — aire restante $\\approx 549{,}7$ m², exemple du cours.'
      },
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Décomposer</strong> la figure complexe en figures simples connues.',
          '<strong>Calculer l\'aire</strong> de chaque partie séparément.',
          '<strong>Additionner</strong> (ou soustraire si une partie est retirée).',
          '<strong>Conversions</strong> : $1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$.'
        ]
      },
      formulas: [
        'Disque : $\\mathcal{A} = \\pi r^2$, $\\mathcal{P} = 2\\pi r$',
        'Demi-disque : $\\mathcal{A} = \\dfrac{\\pi r^2}{2}$',
        '$1\\,\\text{m}^2 = 10^4\\,\\text{cm}^2 = 10^6\\,\\text{mm}^2$',
        'Figures composées : $\\mathcal{A}_{\\text{tot}} = \\mathcal{A}_1 + \\mathcal{A}_2 \\pm \\ldots$'
      ],
      recap: [
        'Aire du disque : $\\pi r^2$ (bien utiliser le rayon, pas le diamètre !).',
        'Conversion d\'aires : élever le facteur de conversion au carré ($1$ m² = $10\\,000$ cm²).',
        'Figure composée = somme ou différence de figures simples.',
        'Périmètre d\'un cercle : $2\\pi r$ (ou $\\pi d$ avec le diamètre).'
      ],
      piege: 'Piège de conversion : $2\\,\\text{cm} = 20\\,\\text{mm}$ mais $2\\,\\text{cm}^2 \\neq 20\\,\\text{mm}^2$. En réalité $2\\,\\text{cm}^2 = 200\\,\\text{mm}^2$ (on multiplie par $100$, pas par $10$).'
    },

    quiz: [
      {
        q: 'Quelle est l\'aire d\'un demi-disque de rayon $6$ cm (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$56{,}52$ cm²', '$113{,}04$ cm²', '$18{,}84$ cm²', '$37{,}68$ cm²'],
        answer: 0,
        correction: '$\\mathcal{A} = \\dfrac{\\pi r^2}{2} = \\dfrac{3{,}14 \\times 36}{2} = \\dfrac{113{,}04}{2} = 56{,}52$ cm².'
      },
      {
        q: '$3{,}5\\,\\text{m}^2$ correspond à combien de cm² ?',
        options: ['$350$ cm²', '$3500$ cm²', '$35\\,000$ cm²', '$350\\,000$ cm²'],
        answer: 2,
        correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, donc $3{,}5 \\times 10\\,000 = 35\\,000$ cm².'
      },
      {
        q: 'Un élève convertit $5$ cm² en mm² et trouve $50$ mm². Quelle est son erreur ?',
        options: [
          'Il a raison : $1$ cm $= 10$ mm, donc $5$ cm² $= 50$ mm².',
          'Il faut multiplier par $100$ (pas $10$) : $1$ cm² $= 10^2 = 100$ mm². Donc $5$ cm² $= 500$ mm².',
          'Il faut multiplier par $1000$ : $5$ cm² $= 5000$ mm².',
          'Les cm² et mm² ne sont pas convertibles directement.'
        ],
        answer: 1,
        correction: '$1$ cm $= 10$ mm, donc $1$ cm² $= (10\\,\\text{mm})^2 = 100$ mm². Ainsi $5$ cm² $= 5 \\times 100 = 500$ mm².'
      }
    ],

    /* ELARGISSEMENT ET CORRECTIONS DU 2026-09-13.

       DEFAUT D'ACCORD, corrige d'abord : l'enonce ecrivait « un(e) pizza »,
       « un(e) horloge », une parenthese de complaisance qui s'IMPRIME telle
       quelle dans le livre. Chaque contexte porte desormais son article.

       ETAT DE DEPART : le generateur ne rendait QU'UNE tache, l'aire d'un disque
       connaissant le rayon — 5 moules, 3 enonces de banque. L'evaluation teste
       pourtant cinq choses : aire du disque, conversion m² vers cm², perimetre a
       partir du DIAMETRE, figure composee par difference, et conversion cm² vers
       mm². Quatre questions sur cinq n'avaient donc aucun exercice
       d'entrainement, et trois remediations de la fiche professeur n'avaient
       nulle part ou renvoyer.

       On ajoute trois taches, chacune adossee a une erreur frequente reelle :
         - le perimetre a partir du diametre, ou l'eleve confond r et d ;
         - la conversion d'aire, ou il multiplie par 100 au lieu de 10 000 ;
         - la figure composee, ou il additionne au lieu de soustraire. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['aireDisque', 'perimetreDiametre', 'conversion', 'composee']);

        if (tache === 'perimetreDiametre') {
          /* On donne le DIAMETRE, jamais le rayon : c'est la confusion du
             chapitre. Diametre PAIR pour que le rayon reste entier. */
          const ctx = pick([
            { obj: 'une roue de vélo', emoji: '🚲' },
            { obj: 'un couvercle de casserole', emoji: '🍳' },
            { obj: 'une bouche d\'égout', emoji: '🕳️' },
            { obj: 'un cerceau de gymnastique', emoji: '⭕' }
          ]);
          const d = 2 * rand(3, 15);
          const p = parseFloat((3.14 * d).toFixed(1));
          return {
            statement: `${ctx.emoji} Calcule le périmètre d'${ctx.obj} de <strong>diamètre</strong> $${d}$ cm.<br/>Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm.`,
            /* La figure trace le DIAMETRE d'un bord a l'autre en passant par le
               centre : voir le trait traverser tout le disque est ce qui rend
               evident que le rayon n'en est que la moitie. */
            figure: figureDisque(d / 2, { diametre: true }),
            answer: p,
            tolerance: 0.2,
            unit: 'cm',
            hint: `Le périmètre d'un cercle vaut $2\\pi r$, où $r$ est le <strong>rayon</strong>.<br/><br/>On te donne le diamètre : commence par en prendre la moitié. Ou utilise directement $\\pi d$, qui est la même formule.`,
            solution: [
              `Le périmètre d'un cercle utilise le rayon, pas le diamètre.`,
              `Rayon : $r = ${d} \\div 2 = ${d / 2}$ cm.`,
              `Périmètre : $\\mathcal{P} = 2 \\times 3{,}14 \\times ${d / 2} = ${fr(p, 1)}$ cm.`,
              `Contrôle : $\\pi d = 3{,}14 \\times ${d} = ${fr(p, 1)}$ cm, le même résultat — $2\\pi r$ et $\\pi d$ sont deux écritures de la même formule.`
            ]
          };
        }

        if (tache === 'conversion') {
          /* Conversion d'aire, dans les deux sens, avec le facteur au CARRE.
             Les couples d'unites sont ceux du programme, et le facteur est
             toujours une puissance de 10 au carre. */
          const cas = pick([
            { de: 'm²', vers: 'cm²', facteur: 10000, lon: '1 m = 100 cm', base: 100 },
            { de: 'cm²', vers: 'mm²', facteur: 100, lon: '1 cm = 10 mm', base: 10 },
            { de: 'dm²', vers: 'cm²', facteur: 100, lon: '1 dm = 10 cm', base: 10 },
            { de: 'km²', vers: 'm²', facteur: 1000000, lon: '1 km = 1 000 m', base: 1000 }
          ]);
          const val = pick([2, 2.5, 3, 4, 5, 7.5]);
          const res = val * cas.facteur;
          return {
            statement: `📐 Convertis $${fr(val)}$ ${cas.de} en ${cas.vers}.<br/>Attention : pour une <strong>aire</strong>, le facteur de conversion s'élève au carré.`,
            answer: res,
            tolerance: 0,
            unit: cas.vers,
            hint: `Pour les longueurs, $${cas.lon}$.<br/><br/>Pour les aires, le facteur est donc $${cas.base}^2$, et non $${cas.base}$.`,
            solution: [
              `Longueurs : $${cas.lon}$.`,
              `Aires : $1$ ${cas.de} $= ${cas.base}^2$ ${cas.vers} $= ${fr(cas.facteur)}$ ${cas.vers}.`,
              `Donc $${fr(val)}$ ${cas.de} $= ${fr(val)} \\times ${fr(cas.facteur)} = ${fr(res)}$ ${cas.vers}.`
            ]
          };
        }

        if (tache === 'composee') {
          /* Figure composee par DIFFERENCE : un rectangle dont on retire un
             disque. L'eleve doit decider de SOUSTRAIRE, ce qui est la tache, et
             non simplement calculer deux aires. Le rayon est borne pour que le
             disque tienne dans le rectangle — sans quoi l'enonce serait
             geometriquement impossible. */
          const ctx = pick([
            { obj: 'un terrain', trou: 'une piscine circulaire', emoji: '🏡' },
            { obj: 'une plaque de métal', trou: 'un trou circulaire', emoji: '🔧' },
            { obj: 'une pelouse', trou: 'un massif circulaire', emoji: '🌿' },
            { obj: 'un plateau de table', trou: 'une découpe circulaire', emoji: '🪵' }
          ]);
          const L = rand(20, 40);
          const l = rand(10, 20);
          const r = rand(2, Math.floor(Math.min(L, l) / 2) - 1);
          const aire = parseFloat((L * l - 3.14 * r * r).toFixed(1));
          return {
            statement: `${ctx.emoji} ${ctx.obj.charAt(0).toUpperCase() + ctx.obj.slice(1)} rectangulaire mesure $${L}$ m sur $${l}$ m. On y aménage ${ctx.trou} de rayon $${r}$ m.<br/>Quelle est l'aire restante, en m² ? Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$.`,
            answer: aire,
            tolerance: 0.3,
            unit: 'm²',
            hint: `La partie circulaire est <strong>retirée</strong> du rectangle : il faut donc une soustraction.<br/><br/>Calcule les deux aires séparément, puis retire la plus petite.`,
            solution: [
              `On retire l'aire du disque à celle du rectangle.`,
              `Aire du rectangle : $${L} \\times ${l} = ${fr(L * l)}$ m².`,
              `Aire du disque : $3{,}14 \\times ${r}^2 = ${fr(parseFloat((3.14 * r * r).toFixed(1)), 1)}$ m².`,
              `Aire restante : $${fr(L * l)} - ${fr(parseFloat((3.14 * r * r).toFixed(1)), 1)} = ${fr(aire, 1)}$ m².`,
              `Contrôle : le résultat doit être plus PETIT que l'aire du rectangle, puisqu'on a retiré quelque chose.`
            ]
          };
        }

        // Tache d'origine, avec l'accord corrige : « un(e) pizza » s'imprimait
        // tel quel dans le livre.
        const ctx = pick([
          { obj: 'une pizza', emoji: '🍕' },
          { obj: 'une horloge', emoji: '🕐' },
          { obj: 'un frisbee', emoji: '🥏' },
          { obj: 'une assiette', emoji: '🍽️' },
          { obj: 'une piscine ronde', emoji: '🏊' }
        ]);
        const r = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule l'aire d'${ctx.obj} circulaire de <strong>rayon</strong> $${r}$ cm.<br/>Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm².`,
          figure: figureDisque(r),
          answer: parseFloat((3.14 * r * r).toFixed(1)),
          tolerance: 0.2,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2$ : c'est le <strong>rayon seul</strong> qui est au carré, jamais le produit $\\pi r$.<br/><br/>Commence par $${r}^2$.`,
          solution: [
            `Dans $\\pi r^2$, c'est le rayon seul qui est élevé au carré.`,
            `Rayon au carré : $${r}^2 = ${r * r}$.`,
            `$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${fr(3.14 * r * r, 1)}$ cm².`
          ]
        };
      }
    },
    probleme: {
      context: 'Un stade a une piste d\'athlétisme composée de deux lignes droites de $100$ m chacune et de deux demi-cercles de rayon $36$ m.',
      tasks: [
        'Calcule la longueur des deux demi-cercles (périmètre total des parties courbes).',
        'Calcule le périmètre total de la piste.',
        'Calcule l\'aire totale intérieure de la piste (rectangle central + deux demi-disques).'
      ],
      solutions: [
        'Périmètre des deux demi-cercles = périmètre d\'un cercle de rayon $36$ m : $2\\pi \\times 36 \\approx 2 \\times 3{,}14 \\times 36 \\approx 226$ m.',
        'Périmètre total : $2 \\times 100 + 226 = 426$ m.',
        'Aire rectangle : $100 \\times 72 = 7200$ m². Aire disque : $\\pi \\times 36^2 \\approx 4069$ m². Total $\\approx 11\\,269$ m².'
      ],
      finalAnswer: 'La piste fait environ $426$ m de périmètre pour une aire intérieure de $\\approx 11\\,269$ m².'
    },

    evaluation: {
      title: 'Évaluation — Aires et périmètres',
      duration: '25 min',
      questions: [
        {
          statement: 'Quelle est l\'aire d\'un disque de rayon $5$ cm ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm².)',
          type: 'numeric',
          answer: 78.5,
          tolerance: 0.2,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm².'
        },
        {
          statement: '$2{,}5$ m² correspondent à combien de cm² ?',
          type: 'numeric',
          answer: 25000,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$. Donc $2{,}5 \\times 10\\,000 = 25\\,000$ cm².'
        },
        {
          statement: 'Le périmètre d\'un cercle de diamètre $10$ cm vaut (avec $\\pi \\approx 3{,}14$) :',
          type: 'numeric',
          answer: 31.4,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm.'
        },
        {
          statement: 'Un terrain rectangulaire mesure $40$ m par $25$ m. On y creuse une piscine circulaire de rayon $5$ m. Quelle est l\'aire du terrain restant (avec $\\pi \\approx 3{,}14$) ?',
          type: 'numeric',
          answer: 921.5,
          tolerance: 0.5,
          unit: 'm²',
          points: 2,
          correction: 'Aire du rectangle : $40 \\times 25 = 1000$ m². Aire du disque : $3{,}14 \\times 25 = 78{,}5$ m². Aire restante : $1000 - 78{,}5 = 921{,}5$ m².'
        },
        {
          statement: '$8$ cm² est égal à :',
          type: 'multiple-choice',
          options: [
            '$80$ mm²',
            '$800$ mm²',
            '$8000$ mm²',
            '$0{,}8$ mm²'
          ],
          answer: 1,
          points: 2,
          correction: '$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$. Ainsi $8$ cm² $= 8 \\times 100 = 800$ mm².'
        }
      ]
    }
  });
