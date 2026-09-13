window.MODULES.push(
    {
    id: '4e-volumes',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Volumes des pyramides et cônes',
    subtitle: 'Formule du tiers, cas particuliers',
    keywords: ['Pyramide', 'Cône', 'Volume', 'Base', 'Hauteur', 'Tiers'],
    physics: 'Calcul du volume d\'un silo conique, d\'une pyramide, d\'un tas de sable en génie civil',
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro donnait la formule, donc le
         resultat, des la premiere phrase. On ouvre sur l'experience du
         transvasement : l'eleve peut PREDIRE (la plupart repondent « deux
         fois ») puis se tromper. Le tiers cesse d'etre un coefficient a retenir
         pour devenir un fait constate, que le chapitre explique ensuite. */
      intro: 'Prends un cône et un cylindre qui ont exactement la même base et la même hauteur. Tu remplis le cône d\'eau et tu le verses dans le cylindre. Combien de cônes faut-il pour le remplir ?<br/><br/>' +
        'Réponds avant de lire la suite. La plupart des élèves disent « deux », parce que le cône paraît occuper à peu près la moitié du cylindre.<br/><br/>' +
        'Il en faut <strong>trois</strong>, exactement trois, et jamais un peu plus ou un peu moins. Ce nombre n\'a rien d\'un hasard de fabrication, et c\'est ce que ce chapitre explique.<br/><br/>' +
        'La pyramide et le cône ont un volume égal au tiers du prisme ou cylindre qui les contient : $V = \\frac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$.' +
        '<br/><br/>' +
        '<strong>Intuition :</strong> en versant un cône rempli de sable dans le cylindre de même base et même hauteur, il faut exactement 3 remplissages — vérifiable expérimentalement ! Cette formule s\'applique à toute pyramide quelle que soit la forme de sa base (carrée, triangulaire, hexagonale…).' +
        '<br/><br/>' +
        'Le point crucial est que $h$ désigne la <strong>hauteur perpendiculaire</strong> — la distance du sommet à la base — jamais l\'arête latérale qui relie le sommet à un coin de la base.' +
        '<br/><br/>' +
        'En physique, ces formules servent à calculer le volume de réservoirs coniques, de silos, d\'entonnoirs, ou de toitures en pyramide.',
      definitions: [
        { term: 'Pyramide', def: 'Solide dont la base est un polygone et dont les faces latérales sont des triangles qui se rejoignent en un sommet appelé apex.' },
        { term: 'Cône de révolution', def: 'Solide obtenu en faisant tourner un triangle rectangle autour d\'un de ses côtés de l\'angle droit. Là base est un disque.' },
        { term: 'Hauteur d\'une pyramide ou d\'un cône', def: 'Distance perpendiculaire du sommet (apex) au plan de la base. Ce n\'est pas l\'arête latérale.' },
        { term: 'Apothème', def: 'Arête latérale d\'une pyramide régulière, ou génératrice d\'un cône. Toujours plus longue que la hauteur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer l\'aire de la base</strong> $\\mathcal{A}_{\\text{base}}$. <strong>Exemple :</strong> base carrée de côté $5$ cm → $\\mathcal{A} = 5^2 = 25$ cm² ; base circulaire de rayon $3$ cm → $\\mathcal{A} = \\pi \\times 3^2 \\approx 28{,}3$ cm².',
          '<strong>Mesurer la hauteur $h$</strong> (distance perpendiculaire du sommet à la base). <strong>Exemple :</strong> si l\'arête latérale vaut $13$ cm et la demi-diagonale de la base carrée vaut $5$ cm, alors $h = \\sqrt{13^2 - 5^2} = 12$ cm (Pythagore).',
          '<strong>Appliquer la formule</strong> : $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$. <strong>Exemple :</strong> $V = \\dfrac{1}{3} \\times 25 \\times 12 = 100$ cm³.'
        ]
      },
      example: {
        statement: 'Un entonnoir a la forme d\'un cône de rayon $4$ cm et de hauteur $9$ cm. Quel volume de liquide peut-il contenir ? (Prendre $\\pi \\approx 3{,}14$.)',
        steps: [
          'Aire de la base circulaire : $\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 4^2 = 3{,}14 \\times 16 = 50{,}24$ cm².',
          'Volume du cône : $V = \\dfrac{1}{3} \\times 50{,}24 \\times 9 = \\dfrac{452{,}16}{3} = 150{,}72$ cm³.',
          'Conversion : $150{,}72$ cm³ $= 150{,}72$ mL $\\approx 0{,}15$ L.'
        ],
        answer: 'L\'entonnoir peut contenir environ $150{,}7$ cm³ soit $\\approx 0{,}15$ L.'
      },
      formulas: [
        'Pyramide : $V = \\dfrac{1}{3} \\mathcal{A}_{\\text{base}} \\times h$',
        'Cône : $V = \\dfrac{1}{3} \\pi r^2 h$',
        'Pyramide à base carrée de côté $a$ : $V = \\dfrac{1}{3} a^2 h$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Coupe d\'un cône',
        title: 'Hauteur perpendiculaire et génératrice : ne pas confondre',
        description: 'Coupe de l\'entonnoir de l\'exemple du cours : un cône de rayon $r = 4$ cm et de hauteur $h = 9$ cm. La hauteur (en pointillés) relie le sommet au centre de la base ; la génératrice (trait plein) relie le sommet au bord de la base et sert de côté visible du cône.',
        svg: `
          <svg viewBox="0 0 360 260" role="img" aria-labelledby="volumes-cône-title volumes-cône-desc">
            <title id="volumes-cône-title">Coupe d'un cône avec hauteur et generatrice</title>
            <desc id="volumes-cône-desc">Un cône est représente en perspective avec sa base elliptique, sa hauteur perpendiculaire en pointilles reliant le sommet au centre de la base, et sa generatrice en trait plein reliant le sommet au bord de la base, plus longue que la hauteur.</desc>
            <path class="guide-line" d="M80 195 A100 24 0 0 1 280 195"></path>
            <path class="frame-line" d="M80 195 A100 24 0 0 0 280 195" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></path>
            <line class="curve-main" x1="180" y1="45" x2="80" y2="195"></line>
            <line class="curve-main" x1="180" y1="45" x2="280" y2="195"></line>
            <line class="guide-line" x1="180" y1="45" x2="180" y2="195"></line>
            <line class="axis" x1="180" y1="195" x2="280" y2="195"></line>
            <path class="axis" d="M180 181 L194 181 L194 195"></path>
            <circle class="plot-point" cx="180" cy="45" r="4"></circle>
            <circle class="plot-point-alt" cx="180" cy="195" r="4"></circle>
            <circle class="plot-point-alt" cx="280" cy="195" r="4"></circle>
            <text class="annotation-label" x="180" y="30" text-anchor="middle">Sommet</text>
            <text class="annotation-label" x="172" y="120" text-anchor="end">h = 9 cm</text>
            <text class="annotation-label" x="230" y="214" text-anchor="middle">r = 4 cm</text>
            <text class="annotation-label" x="245" y="115" text-anchor="start">Génératrice</text>
            <text class="tick-label" x="245" y="130" text-anchor="start">(l ≈ 9,85 cm)</text>
          </svg>
        `,
        notes: [
          'La hauteur $h$ (en pointillés) est la distance perpendiculaire entre le sommet et le centre de la base — c\'est elle qui sert dans la formule du volume.',
          'La génératrice (trait plein) relie le sommet à un point du bord de la base : elle est toujours plus longue que $h$. Ici $l = \\sqrt{r^2+h^2} = \\sqrt{4^2+9^2} = \\sqrt{97} \\approx 9{,}85$ cm.',
          'Le petit carré marque l\'angle droit entre la hauteur et le rayon de la base.',
          'Volume : $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\times 3{,}14\\times 4^2\\times 9 = 150{,}72$ cm³ (voir l\'exemple du cours).'
        ],
        reading: 'Repère d\'abord l\'angle droit entre la hauteur et le rayon de la base : c\'est ce qui distingue $h$ de la génératrice, plus longue et oblique.',
        caption: 'Coupe d\'un cône (entonnoir de l\'exemple du cours) avec hauteur perpendiculaire en pointillés et génératrice en trait plein.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. le tiers ne se retient pas, il se CONSTATE (trois cones remplissent
            le cylindre) — c'est la reponse a la question d'ouverture ;
         2. la HAUTEUR n'est pas la generatrice : c'est l'erreur qui fausse
            silencieusement tous les calculs de cone ;
         3. doubler une longueur ne double pas le volume, il le multiplie par
            huit — obstacle classique sur les agrandissements. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'La réponse à la question d\'ouverture',
          title: 'Trois cônes remplissent exactement le cylindre',
          description: 'Le tiers de la formule n\'est pas un coefficient à retenir : c\'est un fait que l\'on peut <strong>constater</strong>. Avec la même base et la même hauteur, il faut exactement trois cônes pour remplir le cylindre.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="vol-tiers-title vol-tiers-desc">
              <title id="vol-tiers-title">Trois cones remplissent un cylindre de meme base et de meme hauteur</title>
              <desc id="vol-tiers-desc">A gauche, trois cones identiques sont dessines cote a cote. A droite, un cylindre de meme rayon de base et de meme hauteur que les cones. Une fleche indique que le contenu des trois cones remplit exactement le cylindre, sans qu'il reste de place ni qu'il y ait debordement. Le remplissage du cylindre est represente par trois bandes horizontales egales, une par cone verse.</desc>

              <!-- MEME hauteur (60) et MEME rayon (24) partout, MEME ligne de
                   base a y = 150 : c'est la condition du theoreme, elle doit
                   etre visible et non affirmee. -->
              <line class="grid-line" x1="16" y1="150" x2="384" y2="150"></line>

              <polygon class="frame-line" points="30,150 78,150 54,90" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></polygon>
              <polygon class="frame-line" points="94,150 142,150 118,90" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></polygon>
              <polygon class="frame-line" points="158,150 206,150 182,90" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)"></polygon>
              <text class="tick-label" x="118" y="170" text-anchor="middle">trois cônes</text>

              <text class="annotation-label" x="240" y="124" text-anchor="middle">versés dans</text>

              <!-- Cylindre : meme rayon 24 (largeur 48) et meme hauteur 60. -->
              <rect class="frame-line" x="300" y="90" width="48" height="60" fill="none"></rect>
              <line class="grid-line" x1="300" y1="110" x2="348" y2="110"></line>
              <line class="grid-line" x1="300" y1="130" x2="348" y2="130"></line>
              <rect x="300" y="90" width="48" height="60" fill="color-mix(in srgb, var(--diagram-accent) 20%, transparent)" stroke="none"></rect>
              <text class="tick-label" x="324" y="170" text-anchor="middle">un cylindre plein</text>
              <text class="tick-label" x="360" y="106" text-anchor="start">1</text>
              <text class="tick-label" x="360" y="126" text-anchor="start">2</text>
              <text class="tick-label" x="360" y="146" text-anchor="start">3</text>
              <text class="tick-label" x="200" y="192" text-anchor="middle">même base et même hauteur des deux côtés</text>
            </svg>
          `,
          notes: [
            'La condition est essentielle : <strong>même base</strong> et <strong>même hauteur</strong>. Sans elle, le rapport de trois ne vaut plus.',
            'Les trois bandes du cylindre montrent les trois versements successifs : chacun remplit exactement un tiers de la hauteur… en volume, pas en hauteur d\'eau.',
            'D\'où la formule : $V_{\\text{cône}} = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$, où le tiers vient de cette expérience.'
          ],
          reading: 'Retiens l\'image plutôt que le nombre : trois cônes pour un cylindre. Si un jour tu hésites entre diviser par $2$ ou par $3$, c\'est cette expérience qui tranche.',
          caption: 'Trois cônes de même base et même hauteur remplissent exactement le cylindre : d\'où le tiers de la formule.'
        },
        {
          theme: 'maths',
          kicker: 'L\'erreur qui ne se voit pas',
          title: 'La hauteur n\'est pas le côté du cône',
          description: 'Sur un cône, la longueur qu\'on lit le plus facilement est le côté incliné — la <strong>génératrice</strong>. Mais la formule réclame la <strong>hauteur</strong>, celle qui tombe droit du sommet au centre de la base. Confondre les deux fausse le volume sans jamais donner un résultat absurde.',
          svg: `
            <svg viewBox="0 0 400 190" role="img" aria-labelledby="vol-haut-title vol-haut-desc">
              <title id="vol-haut-title">Difference entre la hauteur et la generatrice d'un cone</title>
              <desc id="vol-haut-desc">Un cone est dessine de profil. La hauteur, tracee en trait plein depuis le sommet jusqu'au centre de la base, mesure 8 centimetres et forme un angle droit avec la base, marque par un petit carre. La generatrice, tracee en trait tirete du sommet jusqu'au bord de la base, mesure 10 centimetres : elle est plus longue car elle est inclinee. Le rayon de la base vaut 6 centimetres. Les trois longueurs forment un triangle rectangle, si bien que Pythagore relie la generatrice, la hauteur et le rayon.</desc>

              <!-- Triangle rectangle 6-8-10 a l'echelle 14 : rayon 84,
                   hauteur 112, generatrice 140. Angle droit EXACT entre la
                   hauteur et le rayon, par construction (vertical/horizontal).
                   L'eleve peut donc verifier au theoreme de Pythagore, vu au
                   chapitre 5, que 6 au carre plus 8 au carre font 10 au carre. -->
              <polygon class="frame-line" points="116,150 284,150 200,38" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <line class="grid-line" x1="116" y1="150" x2="284" y2="150"></line>

              <line class="curve-main" x1="200" y1="38" x2="200" y2="150"></line>
              <path class="grid-line" fill="none" d="M191 150 L191 141 L200 141"></path>
              <text class="annotation-label" x="192" y="100" text-anchor="end">hauteur = 8</text>

              <line class="guide-line" x1="200" y1="38" x2="284" y2="150"></line>
              <text class="tick-label" x="256" y="86" text-anchor="start">génératrice = 10</text>

              <text class="tick-label" x="242" y="168" text-anchor="middle">rayon = 6</text>
              <text class="tick-label" x="200" y="186" text-anchor="middle">la hauteur tombe droit, la génératrice est inclinée</text>
            </svg>
          `,
          notes: [
            'La hauteur est <strong>perpendiculaire</strong> à la base : c\'est elle, et elle seule, qui entre dans la formule du volume.',
            'La génératrice est toujours <strong>plus longue</strong> que la hauteur, puisqu\'elle est l\'hypoténuse du triangle rectangle formé par la hauteur et le rayon.',
            'Les trois longueurs sont liées par Pythagore : $6^2 + 8^2 = 10^2$. Si on te donne la génératrice, commence par en déduire la hauteur.'
          ],
          reading: 'Avant d\'appliquer la formule, demande-toi si la longueur donnée touche le <strong>centre</strong> de la base ou son <strong>bord</strong>. Le centre, c\'est la hauteur ; le bord, c\'est la génératrice.',
          caption: 'Hauteur et génératrice d\'un cône : deux longueurs différentes, reliées par le théorème de Pythagore.'
        },
        {
          theme: 'maths',
          kicker: 'Doubler ne double pas',
          title: 'Si on double toutes les longueurs, le volume est multiplié par huit',
          description: 'C\'est l\'un des résultats les plus contre-intuitifs du chapitre. Une pyramide deux fois plus grande dans toutes ses dimensions ne contient pas deux fois plus, mais <strong>huit fois plus</strong>.',
          svg: `
            <svg viewBox="0 0 400 196" role="img" aria-labelledby="vol-double-title vol-double-desc">
              <title id="vol-double-title">Effet du doublement des longueurs sur le volume</title>
              <desc id="vol-double-desc">Deux cubes sont poses sur la meme ligne de base. Le petit mesure une unite de cote et contient un cube unite. Le grand mesure deux unites de cote : il est deux fois plus large, deux fois plus profond et deux fois plus haut, si bien qu'il contient huit petits cubes. Le grand cube est quadrille pour montrer les huit cubes unites qui le composent, quatre visibles devant et quatre caches derriere.</desc>

              <!-- COMPARAISON : meme ligne de base y = 160, meme echelle
                   (40 unites de viewBox par unite de longueur). Le grand a
                   exactement le double du cote du petit. -->
              <line class="grid-line" x1="20" y1="160" x2="380" y2="160"></line>

              <rect class="frame-line" x="60" y="120" width="40" height="40" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <text class="tick-label" x="80" y="178" text-anchor="middle">côté 1</text>
              <text class="annotation-label" x="80" y="110" text-anchor="middle">volume 1</text>

              <rect class="frame-line" x="240" y="80" width="80" height="80" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <line class="grid-line" x1="280" y1="80" x2="280" y2="160"></line>
              <line class="grid-line" x1="240" y1="120" x2="320" y2="120"></line>
              <text class="tick-label" x="280" y="178" text-anchor="middle">côté 2</text>
              <text class="annotation-label" x="280" y="70" text-anchor="middle">volume 8</text>

              <text class="tick-label" x="170" y="130" text-anchor="middle">côté fois 2</text>
              <text class="tick-label" x="170" y="148" text-anchor="middle">volume fois 8</text>
            </svg>
          `,
          notes: [
            'Le volume dépend de <strong>trois</strong> dimensions : longueur, largeur et hauteur. Doubler chacune revient à multiplier par $2 \\times 2 \\times 2 = 8$.',
            'Le dessin ne montre que quatre carrés, parce qu\'il est plat : les quatre autres cubes sont <strong>derrière</strong>, cachés par la profondeur.',
            'Même logique pour les aires, mais avec deux dimensions seulement : une surface est multipliée par $4$, pas par $8$.'
          ],
          reading: 'Compte les petits cubes du grand : quatre devant, quatre derrière. Le grand cube n\'est pas « deux fois » le petit, il en contient huit.',
          caption: 'Doubler toutes les longueurs multiplie le volume par $8$, car le volume dépend de trois dimensions.'
        }
      ],
      recap: [
        'Volume d\'une pyramide ou d\'un cône = $\\dfrac{1}{3}$ du prisme ou cylindre de même base et même hauteur.',
        'La hauteur $h$ est toujours perpendiculaire à la base — ne pas confondre avec l\'arête latérale.',
        'Cône : $V = \\dfrac{1}{3} \\pi r^2 h$ ; pyramide à base carrée : $V = \\dfrac{1}{3} a^2 h$.',
        'Il faut $3$ cônes pour remplir un cylindre de même base et même hauteur.'
      ],
      piege: 'Piège : la hauteur d\'une pyramide est la distance perpendiculaire du sommet à sa base, PAS l\'arête latérale (apothème). Sur les figures obliques, la hauteur est souvent différente de ce qu\'on voit de prime abord.'
    },
    quiz: [
      {
        q: 'Un élève calcule le volume d\'une pyramide à base carrée de côté $4$ cm. Il mesure l\'arête latérale $= 5$ cm et écrit : $V = \\frac{1}{3} \\times 16 \\times 5 \\approx 26{,}7$ cm³. Quelle est son erreur ?',
        options: [
          'Il a utilisé l\'arête latérale au lieu de la hauteur perpendiculaire',
          'Il a oublié le facteur $\\frac{1}{3}$ dans la formule',
          'L\'aire de la base est $4$ cm², pas $16$ cm²',
          'Il n\'y a pas d\'erreur, le résultat est correct'
        ],
        answer: 0,
        correction: 'L\'arête latérale ($5$ cm) relie le sommet à un coin de la base ; ce n\'est pas la hauteur. La hauteur $h$ est la distance perpendiculaire du sommet au centre de la base — elle est toujours différente de l\'arête latérale (ici plus courte). Il faut calculer $h$ avec Pythagore avant d\'appliquer $V = \\frac{1}{3} \\times 16 \\times h$.'
      },
      {
        q: 'Un cône a un rayon de base de $3$ cm et une hauteur de $10$ cm. Quel est son volume (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$94{,}2$ cm³', '$282{,}6$ cm³', '$31{,}4$ cm³', '$188{,}4$ cm³'],
        answer: 0,
        correction: '$V = \\dfrac{1}{3} \\times 3{,}14 \\times 9 \\times 10 = \\dfrac{282{,}6}{3} = 94{,}2$ cm³.'
      },
      {
        q: 'Un prisme et une pyramide ont la même base et la même hauteur. Quel est le rapport de leurs volumes ?',
        options: ['$1:1$', '$3:1$', '$1:3$', '$2:1$'],
        answer: 1,
        correction: 'Le prisme a $V = \\mathcal{A} \\times h$, la pyramide $V = \\frac{1}{3}\\mathcal{A} \\times h$. Rapport : $3:1$ (le prisme est trois fois plus grand).'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le chapitre s'intitule « Volumes des pyramides et
         cones » et le generateur ne tirait QUE des pyramides a base carree :
         5 moules, 15 enonces, 3 de banque, et le cone jamais exerce alors qu'il
         occupe la moitie du titre, la moitie du cours et deux questions de
         l'evaluation.

         Quatre taches : pyramide a base carree, cone, pyramide a base
         quelconque (aire donnee, ce qui separe la formule du calcul d'aire), et
         la tache INVERSE — retrouver la hauteur a partir du volume — qui est
         celle ou l'oubli du facteur un tiers se voit le mieux. */
      generate() {
        const tache = pick(['pyramide-carree', 'cone', 'base-donnee', 'hauteur-inverse']);

        if (tache === 'pyramide-carree') {
          const ctx = pick([
            { intro: 'Un toit en forme de pyramide a une base carrée de côté', emoji: '🏠' },
            { intro: 'Un monument en forme de pyramide a une base carrée de côté', emoji: '🏛️' },
            { intro: 'Un emballage décoratif en forme de pyramide a une base carrée de côté', emoji: '🎁' },
            { intro: 'Un cristal en forme de pyramide a une base carrée de côté', emoji: '💎' },
            { intro: 'Un silo à grain en forme de pyramide a une base carrée de côté', emoji: '🌾' }
          ]);
          const a = rand(3, 10), h = rand(3, 12);
          const v = parseFloat(((a * a * h) / 3).toFixed(1));
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' $' + a + '$ cm et une hauteur de $' + h + '$ cm. Calcule son volume en cm³.',
            answer: v,
            tolerance: 0.2,
            unit: 'cm³',
            hint: 'L\'aire de la base carrée vaut $' + a + '^2 = ' + (a * a) + '$ cm², puis $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$.',
            solution: [
              'Aire de la base : $' + a + '^2 = ' + (a * a) + '$ cm².',
              '$V = \\dfrac{' + (a * a) + ' \\times ' + h + '}{3} = \\dfrac{' + (a * a * h) + '}{3} = ' + fr(v) + '$ cm³.',
              'Contrôle : ce volume est bien le tiers de celui du prisme de même base et même hauteur, qui vaudrait $' + fr(a * a * h) + '$ cm³.'
            ]
          };
        }

        if (tache === 'cone') {
          const ctx = pick([
            { intro: 'Un cornet de glace en forme de cône a un rayon de base de', emoji: '🍦' },
            { intro: 'Un chapeau de fête en forme de cône a un rayon de base de', emoji: '🎉' },
            { intro: 'Un tas de sable en forme de cône a un rayon de base de', emoji: '⛱️' },
            { intro: 'Un entonnoir conique a un rayon de base de', emoji: '🔻' }
          ]);
          const r = rand(2, 9), h = rand(4, 15);
          const v = parseFloat(((3.14 * r * r * h) / 3).toFixed(1));
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' $' + r + '$ cm et une hauteur de $' + h + '$ cm. Calcule son volume en cm³ (prendre $\\pi \\approx 3{,}14$).',
            answer: v,
            tolerance: 1,
            unit: 'cm³',
            hint: 'Là base est un disque : son aire vaut $\\pi r^2$. Ensuite, comme pour toute pyramide, on prend le tiers.',
            solution: [
              'Aire de la base (un disque) : $\\pi \\times ' + r + '^2 \\approx 3{,}14 \\times ' + (r * r) + ' = ' + fr(parseFloat((3.14 * r * r).toFixed(2))) + '$ cm².',
              '$V = \\dfrac{1}{3} \\times ' + fr(parseFloat((3.14 * r * r).toFixed(2))) + ' \\times ' + h + ' \\approx ' + fr(v) + '$ cm³.',
              'Attention : dans $\\pi r^2$, c\'est le rayon qui est au carre, jamais $\\pi r$ tout entier.'
            ]
          };
        }

        if (tache === 'base-donnee') {
          // L'aire de base est DONNEE : la tache isole la formule du volume et
          // ne teste plus, au passage, le calcul d'une aire.
          const ctx = pick([
            'Une pyramide à base triangulaire',
            'Une pyramide à base hexagonale',
            'Une pyramide à base pentagonale',
            'Un solide en forme de pyramide dont la base est un polygone quelconque'
          ]);
          const base = pick([12, 15, 18, 20, 24, 30, 36]);
          const h = rand(4, 15);
          const v = parseFloat(((base * h) / 3).toFixed(1));
          return {
            statement: ctx + ' à une base d\'aire $' + base + '$ cm² et une hauteur de $' + h + '$ cm. Calcule son volume en cm³.',
            answer: v,
            tolerance: 0.2,
            unit: 'cm³',
            hint: 'La forme de la base ne change rien : $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$ vaut pour toute pyramide.',
            solution: [
              'La formule ne depend pas de la forme de la base, seulement de son AIRE.',
              '$V = \\dfrac{' + base + ' \\times ' + h + '}{3} = \\dfrac{' + (base * h) + '}{3} = ' + fr(v) + '$ cm³.'
            ]
          };
        }

        // tache === 'hauteur-inverse' : on remonte du volume a la hauteur.
        const base = pick([12, 15, 18, 24, 27, 36]);
        const h = rand(4, 12);
        const v = parseFloat(((base * h) / 3).toFixed(1));
        const ctx = pick([
          'Un vase en forme de pyramide contient $' + fr(v) + '$ cm³ quand il est plein.',
          'Un moule a gateau en forme de pyramide a un volume de $' + fr(v) + '$ cm³.',
          'Une pièce usinée en forme de pyramide occupe $' + fr(v) + '$ cm³.'
        ]);
        return {
          statement: ctx + ' Son aire de base vaut $' + base + '$ cm². Quelle est sa hauteur en cm ?',
          answer: h,
          tolerance: 0.2,
          unit: 'cm',
          hint: 'Repars de $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$ et isole $h$ : multiplie d\'abord les deux membres par $3$.',
          solution: [
            'On part de $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$, soit $' + fr(v) + ' = \\dfrac{' + base + ' \\times h}{3}$.',
            'On multiplie les deux membres par $3$ : $' + fr(parseFloat((3 * v).toFixed(1))) + ' = ' + base + ' \\times h$.',
            'On divise par $' + base + '$ : $h = ' + h + '$ cm. Oublier le facteur $3$ donnerait une hauteur trois fois trop petite.'
          ]
        };
      }
    },
    probleme: {
      context: 'La Grande Pyramide de Gizeh a une base carrée de $230$ m de côté et une hauteur d\'origine de $146$ m.',
      tasks: [
        'Calculer le volume de la pyramide en m³.',
        'Convertir en km³ ($1\\,\\text{km}^3 = 10^9\\,\\text{m}^3$).',
        'Un bloc de pierre occupe environ $1\\,\\text{m}^3$. Estimer le nombre de blocs.'
      ],
      solutions: [
        '$V = \\dfrac{1}{3} \\times 230^2 \\times 146 = \\dfrac{1}{3} \\times 52\\,900 \\times 146 = \\dfrac{7\\,723\\,400}{3} \\approx 2\\,574\\,467$ m³.',
        '$\\approx 2{,}57 \\times 10^{-3}$ km³.',
        '$\\approx 2{,}57$ millions de blocs.'
      ],
      finalAnswer: 'La Grande Pyramide contient environ $2{,}57$ millions de m³ de pierres.'
    },

    evaluation: {
      title: 'Évaluation — Volumes des pyramides et cônes',
      duration: '30 min',
      questions: [
        {
          statement: 'Une pyramide à base carrée de côté $6\\,\\text{cm}$ a une hauteur de $9\\,\\text{cm}$. Calculer son volume en cm³.',
          type: 'numeric',
          answer: 108,
          tolerance: 0.1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\times 6^2 \\times 9 = \\dfrac{1}{3} \\times 36 \\times 9 = \\dfrac{324}{3} = 108\\,\\text{cm}^3$.'
        },
        {
          /* Q2 — « modéliser ». L'énoncé est conservé : la tâche consiste bien à
             construire l'aire de la base (un disque) avant d'appliquer la formule
             du volume, c'est-à-dire à mettre la situation en modèle. Le corrigé a
             été détaillé le 2026-09-13 pour faire apparaître cette étape, qui
             était implicite. */
          statement: 'Un cône a un rayon de base $r = 5\\,\\text{cm}$ et une hauteur $h = 12\\,\\text{cm}$. Calculer son volume (prendre $\\pi \\approx 3{,}14$).',
          type: 'numeric',
          answer: 314,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: 'La formule $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$ vaut pour tout cône comme pour toute pyramide : la seule chose à construire est l\'aire de la base.<br/><br/>' +
            'Ici la base est un <strong>disque</strong> de rayon $5\\,\\text{cm}$ : $\\mathcal{A}_{\\text{base}} = \\pi r^2 \\approx 3{,}14 \\times 25 = 78{,}5\\,\\text{cm}^2$.<br/><br/>' +
            '$V \\approx \\dfrac{78{,}5 \\times 12}{3} = \\dfrac{942}{3} = 314\\,\\text{cm}^3$.<br/><br/>' +
            'Attention : dans $\\pi r^2$, c\'est le rayon qui est au carré, jamais $\\pi r$ tout entier.'
        },
        {
          statement: 'On remplit un cône d\'eau et on le verse dans un cylindre de même base et même hauteur. Combien de cônes faut-il pour remplir le cylindre ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$V_{\\text{cylindre}} = \\pi r^2 h$ et $V_{\\text{cône}} = \\dfrac{1}{3} \\pi r^2 h$. Le rapport est $\\dfrac{V_{\\text{cylindre}}}{V_{\\text{cône}}} = 3$. Il faut donc $3$ cônes.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancienne
             question demandait de reconnaître la définition de la hauteur parmi
             quatre propositions, soit du vocabulaire. Ici l'élève doit inverser
             la formule du volume, et rien ne le lui dit. */
          statement: 'Une pyramide a une base carrée de $6\\,\\text{cm}$ de côté et un volume de $96\\,\\text{cm}^3$. Quelle est sa hauteur, en cm ?',
          type: 'numeric',
          answer: 8,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'La formule du volume est connue, mais c\'est la hauteur qui est cherchée : il faut la faire sortir de la formule.<br/><br/>' +
            'Aire de la base : $6^2 = 36\\,\\text{cm}^2$. La formule donne $96 = \\dfrac{36 \\times h}{3}$.<br/><br/>' +
            'On multiplie les deux membres par $3$ : $288 = 36 \\times h$. On divise par $36$ : $h = 8\\,\\text{cm}$.<br/><br/>' +
            'Contrôle : $\\dfrac{36 \\times 8}{3} = 96$. ✓ Oublier de multiplier par $3$ aurait donné $h \\approx 2{,}7\\,\\text{cm}$, une hauteur trois fois trop petite.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question était une application directe de la formule. Celle-ci
             demande d'expliquer d'où vient le facteur un tiers et de réfuter une
             explication plausible mais fausse — le coeur conceptuel du chapitre. */
          statement: 'Un élève affirme : « le volume d\'une pyramide vaut le tiers de celui du prisme de même base et même hauteur parce qu\'une pyramide a trois faces de moins. » Quelle explication corrige le mieux son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Il a raison, et c\'est pour cela que le facteur est $\\dfrac{1}{3}$.',
            'Sa conclusion est juste mais sa raison est fausse : le facteur $\\dfrac{1}{3}$ ne dépend pas du nombre de faces. On le vérifie en versant trois pyramides pleines d\'eau dans le prisme de même base et même hauteur, quelle que soit la forme de cette base.',
            'Sa conclusion est fausse : le volume d\'une pyramide vaut la moitié de celui du prisme.',
            'Sa conclusion est juste, mais elle ne vaut que pour les pyramides à base carrée.'
          ],
          answer: 1,
          points: 2,
          correction: 'La conclusion est exacte : $V_{\\text{pyramide}} = \\dfrac{1}{3} V_{\\text{prisme}}$ à base et hauteur égales. Mais la raison invoquée ne tient pas.<br/><br/>' +
            'Le nombre de faces ne décide de rien. Une pyramide à base hexagonale a sept faces, une pyramide à base triangulaire en a quatre, et le facteur $\\dfrac{1}{3}$ est le même pour les deux. Un cône, qui n\'a même pas de face plane latérale, le vérifie aussi.<br/><br/>' +
            'La preuve tient dans une expérience : trois pyramides remplies d\'eau remplissent exactement le prisme de même base et même hauteur. Le facteur vient du <strong>rapprochement du solide vers son sommet</strong>, pas de son nombre de faces.<br/><br/>' +
            'La proposition 4 est fausse pour la même raison : la forme de la base n\'intervient pas.'
        }
      ]
    }
  }
);
