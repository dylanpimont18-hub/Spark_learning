window.MODULES.push(
  {
    id: 'puissances',
    level: 1, subject: 'maths',
    icon: '🔬',
    title: 'Puissances de 10 et Notation Scientifique',
    subtitle: 'Notation a×10ⁿ, préfixes SI, conversions',
    keywords: ['Notation scientifique', 'Préfixes SI', 'Exposant', 'Conversion'],
    physics: 'Échelles atomiques à cosmiques, conversions d\'unités',

    cours: {
      intro: 'En physique-chimie, on manipule des nombres qui vont de $10^{-15}$ m (taille d\'un proton) à $10^{26}$ m (taille de l\'univers observable) — un écart de $41$ ordres de grandeur ! La <strong>notation scientifique</strong> $a \\times 10^n$ (avec $1 \\leq a < 10$) est la seule façon de gérer ces échelles sans erreur.' +
        '<br/><br/>' +
        '<strong>Pourquoi cette contrainte sur $a$ ?</strong> Pour avoir une représentation unique : $0{,}47 \\times 10^{-4}$ et $4{,}7 \\times 10^{-5}$ sont égaux, mais seule la seconde est en notation scientifique standard.' +
        '<br/><br/>' +
        'Pour convertir, il suffit de compter combien de rangs on déplace la virgule vers la droite (exposant positif si le nombre est grand, négatif si petit). Les <strong>préfixes SI</strong> (nano, micro, milli, kilo…) sont des raccourcis pour des puissances de 10 fréquentes.' +
        '<br/><br/>' +
        '<strong>Attention :</strong> l\'erreur la plus courante est de mal compter le nombre de décalages de la virgule. Vérifie toujours que ta mantisse $a$ a un seul chiffre avant la virgule.',
      definitions: [
        { term: 'Notation scientifique', def: 'Écriture d\'un nombre sous la forme $a \\times 10^n$ avec $1 \\leq a < 10$ et $n$ entier relatif.' },
        { term: 'Ordre de grandeur', def: 'Puissance de 10 la plus proche d\'un nombre. Ex : l\'ordre de grandeur de $350$ est $10^2$.' },
        { term: 'Mantisse', def: 'Le nombre $a$ dans $a \\times 10^n$ (la partie « significative »).' },
        { term: 'Préfixe SI', def: 'Raccourci pour une puissance de 10 dans le système international (ex : kilo = $10^3$).' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Écrire en notation scientifique</strong> : déplacer la virgule jusqu\'à obtenir un seul chiffre avant la virgule, et compter le nombre de déplacements (= exposant $n$). <strong>Exemple :</strong> $0{,}000\\ 47 \\rightarrow 4{,}7$ (virgule décalée de 5 rangs à droite) donc $4{,}7 \\times 10^{-5}$.',
          '<strong>Calculer avec les puissances</strong> : $10^a \\times 10^b = 10^{a+b}$ ; $\\frac{10^a}{10^b} = 10^{a-b}$. <strong>Exemple :</strong> $3 \\times 10^4 \\times 2 \\times 10^{-2} = 6 \\times 10^{4+(-2)} = 6 \\times 10^{2}$.',
          '<strong>Préfixes SI</strong> essentiels : nano ($10^{-9}$), micro ($10^{-6}$), milli ($10^{-3}$), kilo ($10^3$), méga ($10^6$), giga ($10^9$). <strong>Exemple :</strong> $2{,}5\\,\\text{km} = 2{,}5 \\times 10^3\\,\\text{m} = 2500\\,\\text{m}$.'
        ]
      },
      example: {
        statement: 'La longueur d\'onde de la lumière rouge vaut $0{,}000\\,000\\,65$ m. Écrire en notation scientifique puis convertir en nanomètres.',
        steps: [
          'On déplace la virgule de 7 rangs vers la droite pour obtenir $6{,}5$. L\'exposant est donc $-7$.',
          'Notation scientifique : $6{,}5 \\times 10^{-7}$ m.',
          'Conversion : $1\\,\\text{nm} = 10^{-9}\\,\\text{m}$, donc $6{,}5 \\times 10^{-7} = 6{,}5 \\times 10^{2}\\,\\text{nm} = 650\\,\\text{nm}$.'
        ],
        answer: '$\\lambda = 6{,}5 \\times 10^{-7}\\,\\text{m} = 650\\,\\text{nm}$'
      },
      formulas: [
        '$10^a \\times 10^b = 10^{a+b}$',
        '$\\dfrac{10^a}{10^b} = 10^{a-b}$',
        '$(10^a)^b = 10^{a \\times b}$',
        '$1\\,\\text{nm} = 10^{-9}\\,\\text{m}$, $1\\,\\text{μm} = 10^{-6}\\,\\text{m}$, $1\\,\\text{mm} = 10^{-3}\\,\\text{m}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Ordres de grandeur',
        title: 'Une échelle de $10^{-15}$ m à $10^{26}$ m',
        description: 'Chaque repère correspond à une valeur citée dans le cours (proton, atome, lumière, distance Terre-Soleil, univers observable), placée sur une échelle logarithmique où chaque graduation multiplie par $10$.',
        svg: `
          <svg viewBox="0 0 480 210" role="img" aria-labelledby="puissances-echelle-title puissances-echelle-desc">
            <title id="puissances-echelle-title">Echelle logarithmique de 10 puissance -15 mètres a 10 puissance 26 mètres</title>
            <desc id="puissances-echelle-desc">Un axe gradue de dix en dix puissances place cinq reperes reels cites dans le cours : le proton a 10 puissance -15 m, l'atome d'hydrogene pres de 10 puissance -10 m, la lumiere rouge pres de 10 puissance -6 m, la distance Terre-Soleil pres de 10 puissance 11 m, et l'univers observable a 10 puissance 26 m.</desc>
            <line class="grid-line" x1="60.0" y1="40" x2="60.0" y2="120"></line>
            <line class="grid-line" x1="95.2" y1="40" x2="95.2" y2="120"></line>
            <line class="grid-line" x1="140.5" y1="40" x2="140.5" y2="120"></line>
            <line class="grid-line" x1="185.7" y1="40" x2="185.7" y2="120"></line>
            <line class="grid-line" x1="231.0" y1="40" x2="231.0" y2="120"></line>
            <line class="grid-line" x1="276.2" y1="40" x2="276.2" y2="120"></line>
            <line class="grid-line" x1="321.4" y1="40" x2="321.4" y2="120"></line>
            <line class="grid-line" x1="366.7" y1="40" x2="366.7" y2="120"></line>
            <line class="grid-line" x1="411.9" y1="40" x2="411.9" y2="120"></line>
            <line class="axis" x1="50" y1="120" x2="430" y2="120"></line>
            <line class="axis" x1="60.0" y1="120" x2="60.0" y2="126"></line>
            <line class="axis" x1="95.2" y1="120" x2="95.2" y2="126"></line>
            <line class="axis" x1="140.5" y1="120" x2="140.5" y2="126"></line>
            <line class="axis" x1="185.7" y1="120" x2="185.7" y2="126"></line>
            <line class="axis" x1="231.0" y1="120" x2="231.0" y2="126"></line>
            <line class="axis" x1="276.2" y1="120" x2="276.2" y2="126"></line>
            <line class="axis" x1="321.4" y1="120" x2="321.4" y2="126"></line>
            <line class="axis" x1="366.7" y1="120" x2="366.7" y2="126"></line>
            <line class="axis" x1="411.9" y1="120" x2="411.9" y2="126"></line>
            <text class="tick-label" x="60.0" y="142" text-anchor="middle">10⁻¹⁵</text>
            <text class="tick-label" x="95.2" y="142" text-anchor="middle">10⁻¹⁰</text>
            <text class="tick-label" x="140.5" y="142" text-anchor="middle">10⁻⁵</text>
            <text class="tick-label" x="185.7" y="142" text-anchor="middle">10⁰</text>
            <text class="tick-label" x="231.0" y="142" text-anchor="middle">10⁵</text>
            <text class="tick-label" x="276.2" y="142" text-anchor="middle">10¹⁰</text>
            <text class="tick-label" x="321.4" y="142" text-anchor="middle">10¹⁵</text>
            <text class="tick-label" x="366.7" y="142" text-anchor="middle">10²⁰</text>
            <text class="tick-label" x="411.9" y="142" text-anchor="middle">10²⁵</text>
            <text class="tick-label" x="430" y="160" text-anchor="end">Taille / distance (m), échelle log</text>
            <line class="guide-line" x1="50.0" y1="58" x2="50.0" y2="116"></line>
            <line class="guide-line" x1="129.7" y1="58" x2="129.7" y2="116"></line>
            <line class="guide-line" x1="286.8" y1="58" x2="286.8" y2="116"></line>
            <line class="guide-line" x1="95.5" y1="78" x2="95.5" y2="116"></line>
            <line class="guide-line" x1="421.0" y1="78" x2="421.0" y2="116"></line>
            <circle class="plot-point" cx="50.0" cy="120" r="4"></circle>
            <circle class="plot-point" cx="95.5" cy="120" r="4"></circle>
            <circle class="plot-point" cx="129.7" cy="120" r="4"></circle>
            <circle class="plot-point" cx="286.8" cy="120" r="4"></circle>
            <circle class="plot-point" cx="421.0" cy="120" r="4"></circle>
            <text class="annotation-label" x="50.0" y="52" text-anchor="start">Proton</text>
            <text class="annotation-label" x="129.7" y="52" text-anchor="middle">Lumière</text>
            <text class="annotation-label" x="286.8" y="52" text-anchor="middle">Terre-Soleil</text>
            <text class="annotation-label" x="95.5" y="72" text-anchor="middle">Atome</text>
            <text class="annotation-label" x="421.0" y="72" text-anchor="end">Univers</text>
          </svg>
        `,
        notes: [
          'Le <strong>proton</strong> mesure environ $10^{-15}$ m, l\'échelle la plus petite citée en introduction du cours.',
          'L\'<strong>atome d\'hydrogène</strong> a un diamètre $d \\approx 1{,}06 \\times 10^{-10}$ m (voir le problème du cours) — environ $100\\,000$ fois plus grand qu\'un proton.',
          'La <strong>lumière rouge</strong> à une longueur d\'onde $\\lambda \\approx 6{,}5 \\times 10^{-7}$ m $= 650$ nm (exemple du cours).',
          'La <strong>distance Terre-Soleil</strong> vaut $\\approx 1{,}5 \\times 10^{11}$ m (donnée de l\'évaluation).',
          'L\'<strong>univers observable</strong> s\'étend sur $\\approx 10^{26}$ m, cité en introduction du cours.'
        ],
        reading: 'Chaque graduation représente un facteur $10$ : passer d\'une graduation à la suivante, c\'est multiplier par dix. L\'écart entre le proton ($10^{-15}$ m) et l\'univers observable ($10^{26}$ m) est de $41$ ordres de grandeur.',
        caption: 'Échelle logarithmique de $10^{-15}$ m à $10^{26}$ m, avec des repères réels cités dans le cours.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. un exposant negatif ne rend pas le nombre negatif — confusion
            massive entre « petit » et « negatif » ;
         2. la notation scientifique impose UN SEUL chiffre non nul avant la
            virgule : 45 x 10^6 n'est pas une notation scientifique ;
         3. ajouter un a l'exposant multiplie par dix, ce qui explique qu'un
            ecart de deux exposants soit un facteur cent et non deux. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Petit n\'est pas négatif',
          title: 'Un exposant négatif donne un nombre positif, mais petit',
          description: 'Le signe moins de l\'exposant agit sur la <strong>taille</strong> du nombre, jamais sur son signe. $10^{-3}$ est un nombre <strong>positif</strong>, simplement plus petit que $1$.',
          svg: `
            <svg viewBox="0 0 400 168" role="img" aria-labelledby="puiss-neg-title puiss-neg-desc">
              <title id="puiss-neg-title">Position des puissances de dix sur un axe</title>
              <desc id="puiss-neg-desc">Un axe gradue porte le zero a gauche et le nombre un au milieu. Les puissances de dix a exposant positif, comme dix et cent, se placent a droite du un. Les puissances a exposant negatif, comme un dixieme et un millieme, se placent entre zero et un : elles sont plus petites que un mais restent strictement positives, donc a droite du zero. Aucune puissance de dix ne se trouve dans la zone des nombres negatifs, situee a gauche du zero et grisee.</desc>

              <!-- La zone des negatifs est dessinee mais VIDE : c'est le
                   propos de la figure, montrer qu'aucune puissance de dix n'y
                   tombe jamais. Aplat discret, c'est du decor. -->
              <rect x="24" y="76" width="76" height="20" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></rect>
              <text class="tick-label" x="62" y="66" text-anchor="middle">nombres négatifs</text>
              <text class="label-soft" x="62" y="112" text-anchor="middle">aucune puissance ici</text>

              <line class="axis" x1="24" y1="86" x2="376" y2="86"></line>
              <line class="frame-line" x1="100" y1="78" x2="100" y2="94"></line>
              <text class="annotation-label" x="100" y="112" text-anchor="middle">0</text>
              <line class="frame-line" x1="240" y1="78" x2="240" y2="94"></line>
              <text class="annotation-label" x="240" y="112" text-anchor="middle">1</text>

              <circle class="plot-point" cx="150" cy="86" r="4"></circle>
              <text class="tick-label" x="150" y="66" text-anchor="middle">0,001</text>
              <circle class="plot-point" cx="190" cy="86" r="4"></circle>
              <text class="tick-label" x="190" y="48" text-anchor="middle">0,1</text>

              <circle class="plot-point" cx="290" cy="86" r="4"></circle>
              <text class="tick-label" x="290" y="66" text-anchor="middle">10</text>
              <circle class="plot-point" cx="340" cy="86" r="4"></circle>
              <text class="tick-label" x="340" y="48" text-anchor="middle">100</text>

              <text class="tick-label" x="170" y="140" text-anchor="middle">exposant négatif : entre 0 et 1</text>
              <text class="tick-label" x="315" y="140" text-anchor="middle">exposant positif : au-delà de 1</text>
            </svg>
          `,
          notes: [
            '$10^{-3} = \\dfrac{1}{1000} = 0{,}001$ : c\'est bien un nombre <strong>positif</strong>, situé entre $0$ et $1$.',
            'Le signe de l\'exposant dit seulement de quel côté du $1$ on se trouve : à droite s\'il est positif, entre $0$ et $1$ s\'il est négatif.',
            'Pour obtenir un nombre négatif, il faudrait un signe moins <strong>devant</strong> : $-10^{3} = -1000$, ce qui n\'a rien à voir avec $10^{-3}$.'
          ],
          reading: 'Regarde la bande de gauche : elle est vide. Aucune puissance de $10$, quel que soit son exposant, ne tombe du côté des nombres négatifs.',
          caption: 'Un exposant négatif place le nombre entre $0$ et $1$ : il reste strictement positif.'
        },
        {
          theme: 'maths',
          kicker: 'La règle du seul chiffre',
          title: 'Un seul chiffre non nul avant la virgule',
          description: 'Une écriture $a \\times 10^n$ n\'est en notation scientifique que si $a$ possède <strong>exactement un chiffre non nul</strong> avant la virgule, c\'est-à-dire si $1 \\leq a < 10$.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="puiss-forme-title puiss-forme-desc">
              <title id="puiss-forme-title">Trois ecritures d'un meme nombre, une seule est scientifique</title>
              <desc id="puiss-forme-desc">Le meme nombre est ecrit de trois facons. La premiere, 45 fois dix puissance six, a deux chiffres avant la virgule : elle est refusee. La deuxieme, 0,45 fois dix puissance huit, a un zero avant la virgule : elle est refusee aussi. La troisieme, 4,5 fois dix puissance sept, a exactement un chiffre non nul avant la virgule : c'est la seule ecriture scientifique correcte. Les trois designent pourtant le meme nombre, quarante-cinq millions.</desc>

              <!-- PATRON PIEGE : la forme JUSTE est mise en avant (accent,
                   annotation-label) et les deux formes refusees sont en teinte
                   faible avec un trait tirete. -->
              <text class="label-soft" x="40" y="42" text-anchor="start">45 × 10⁶</text>
              <line class="guide-line" x1="36" y1="50" x2="150" y2="50"></line>
              <text class="tick-label" x="176" y="42" text-anchor="start">deux chiffres avant la virgule</text>

              <text class="label-soft" x="40" y="82" text-anchor="start">0,45 × 10⁸</text>
              <line class="guide-line" x1="36" y1="90" x2="150" y2="90"></line>
              <text class="tick-label" x="176" y="82" text-anchor="start">un zéro avant la virgule</text>

              <rect x="30" y="104" width="130" height="30" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)" stroke="none"></rect>
              <text class="annotation-label" x="40" y="124" text-anchor="start">4,5 × 10⁷</text>
              <text class="tick-label" x="176" y="124" text-anchor="start">un seul chiffre non nul : correct</text>

              <text class="tick-label" x="200" y="162" text-anchor="middle">les trois valent 45 000 000</text>
            </svg>
          `,
          notes: [
            'Les trois écritures désignent le <strong>même nombre</strong>, $45\\,000\\,000$ : aucune n\'est fausse en tant que calcul.',
            'Mais une seule respecte la <strong>forme</strong> imposée : le facteur doit être compris entre $1$ inclus et $10$ exclu.',
            'Pour corriger $45 \\times 10^6$, on décale la virgule d\'un rang à gauche et on ajoute $1$ à l\'exposant : $4{,}5 \\times 10^7$.'
          ],
          reading: 'Couvre la puissance de $10$ avec ton doigt et regarde seulement le nombre de gauche. S\'il est plus petit que $1$ ou plus grand que $10$, l\'écriture n\'est pas scientifique.',
          caption: 'Trois écritures du même nombre : seule $4{,}5 \\times 10^7$ est en notation scientifique.'
        },
        {
          theme: 'maths',
          kicker: 'Un rang, pas une unité',
          title: 'Ajouter 1 à l\'exposant multiplie par 10',
          description: 'Deux exposants qui se suivent ne diffèrent pas de $1$ : ils diffèrent d\'un <strong>facteur $10$</strong>. C\'est pourquoi un écart de deux exposants représente un facteur $100$, et non $2$.',
          svg: `
            <svg viewBox="0 0 400 172" role="img" aria-labelledby="puiss-rang-title puiss-rang-desc">
              <title id="puiss-rang-title">Progression des puissances de dix par multiplication</title>
              <desc id="puiss-rang-desc">Quatre puissances de dix successives sont alignees : dix puissance un vaut dix, dix puissance deux vaut cent, dix puissance trois vaut mille et dix puissance quatre vaut dix mille. Entre chaque etape, une fleche indique que l'on multiplie par dix. En passant de dix puissance un a dix puissance trois, on multiplie donc par mille et non par deux, bien que les exposants ne different que de deux unites.</desc>

              <text class="annotation-label" x="52" y="72" text-anchor="middle">10¹</text>
              <text class="tick-label" x="52" y="92" text-anchor="middle">10</text>
              <text class="annotation-label" x="148" y="72" text-anchor="middle">10²</text>
              <text class="tick-label" x="148" y="92" text-anchor="middle">100</text>
              <text class="annotation-label" x="244" y="72" text-anchor="middle">10³</text>
              <text class="tick-label" x="244" y="92" text-anchor="middle">1000</text>
              <text class="annotation-label" x="340" y="72" text-anchor="middle">10⁴</text>
              <text class="tick-label" x="340" y="92" text-anchor="middle">10 000</text>

              <!-- Une seule pointe de fleche par trait, comme l'exige le
                   convertisseur. -->
              <line class="curve-main" x1="72" y1="58" x2="126" y2="58"></line>
              <polygon class="plot-point" points="132,58 122,54 122,62"></polygon>
              <text class="tick-label" x="99" y="44" text-anchor="middle">× 10</text>

              <line class="curve-main" x1="168" y1="58" x2="222" y2="58"></line>
              <polygon class="plot-point" points="228,58 218,54 218,62"></polygon>
              <text class="tick-label" x="195" y="44" text-anchor="middle">× 10</text>

              <line class="curve-main" x1="264" y1="58" x2="318" y2="58"></line>
              <polygon class="plot-point" points="324,58 314,54 314,62"></polygon>
              <text class="tick-label" x="291" y="44" text-anchor="middle">× 10</text>

              <path class="guide-line" fill="none" d="M52 108 L52 126 L244 126 L244 108"></path>
              <text class="tick-label" x="148" y="146" text-anchor="middle">deux exposants d’écart : facteur 100</text>
            </svg>
          `,
          notes: [
            'Chaque pas vers la droite <strong>multiplie par $10$</strong> : c\'est ce que signifie ajouter $1$ à l\'exposant.',
            'De $10^1$ à $10^3$, on fait deux pas, donc $10 \\times 10 = 100$ fois plus — pas deux fois plus.',
            'C\'est ce qui rend la notation scientifique si pratique : quelques unités d\'exposant couvrent des écarts gigantesques.'
          ],
          reading: 'Compte les flèches entre deux puissances, pas la différence des exposants. Chaque flèche vaut une multiplication par $10$.',
          caption: 'Chaque unité d\'exposant correspond à une multiplication par $10$.'
        }
      ],
      recap: [
        'Notation scientifique : $a \\times 10^n$ avec $1 \\leq a < 10$',
        'Multiplier → additionner les exposants ; diviser → soustraire les exposants',
        'Virgule à droite → exposant négatif ; virgule à gauche → exposant positif',
        'Toujours vérifier que $a$ a un seul chiffre avant la virgule'
      ],
      piege: 'Piège classique : $0{,}005$ en notation scientifique ne s\'écrit pas $5 \\times 10^{-2}$ mais $5 \\times 10^{-3}$ ! Compte bien : $0{,}005 = \\frac{5}{1000} = 5 \\times 10^{-3}$. Déplace la virgule de 3 rangs vers la droite.'
    },

    quiz: [
      {
        q: 'Quelle est la notation scientifique de $0{,}000\\ 047$ ?',
        options: ['$4{,}7 \\times 10^{-5}$', '$4{,}7 \\times 10^{-4}$', '$47 \\times 10^{-6}$', '$0{,}47 \\times 10^{-4}$'],
        answer: 0,
        correction: 'On déplace la virgule de 5 rangs vers la droite pour obtenir $4{,}7$. L\'exposant est donc $-5$. Résultat : $4{,}7 \\times 10^{-5}$.'
      },
      {
        q: 'Calculer $3 \\times 10^4 \\times 2 \\times 10^{-2}$.',
        options: ['$6 \\times 10^{-8}$', '$5 \\times 10^2$', '$6 \\times 10^2$', '$6 \\times 10^6$'],
        answer: 2,
        correction: 'On multiplie les mantisses ($3 \\times 2 = 6$) et on additionne les exposants ($4 + (-2) = 2$). Résultat : $6 \\times 10^2 = 600$.'
      },
      {
        q: 'Un élève écrit $5{,}0 \\times 10^3 + 3{,}0 \\times 10^2 = 8{,}0 \\times 10^5$. Quelle est son erreur ?',
        options: [
          'Il a bien calculé : $5 + 3 = 8$ et $3 + 2 = 5$.',
          'On ne peut additionner que des nombres avec le même exposant. $5{,}0 \\times 10^3 = 50 \\times 10^2$, donc $50 \\times 10^2 + 3 \\times 10^2 = 53 \\times 10^2 = 5{,}3 \\times 10^3$.',
          'L\'addition des mantisses doit se faire avant les exposants : $8{,}0 \\times 10^{3+2} = 8 \\times 10^5$.',
          'Il faut d\'abord convertir en m² avant d\'additionner.'
        ],
        answer: 1,
        correction: 'La règle des exposants ($10^a \\times 10^b = 10^{a+b}$) s\'applique à la multiplication, pas à l\'addition ! Pour additionner, il faut ramener au même exposant : $5{,}0 \\times 10^3 + 0{,}3 \\times 10^3 = 5{,}3 \\times 10^3 = 5300$. Vérification : $5000 + 300 = 5300$ ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      /* REECRIT LE 2026-09-13.

         AVANT : une seule tache (multiplier par une puissance de 10), mantisse
         FIGEE a 3, et surtout une reponse rendue en notation exponentielle
         JavaScript des que l'exposant descendait sous -6 — « 3e-7 » imprime tel
         quel dans un manuel francais, sur 27 tirages sur 120. Le defaut datait
         de la creation du module et aucun controle ne le voyait : celui qui
         traque la notation decimale anglaise cherche un point decimal, pas un
         « e ».

         APRES : quatre taches, mantisse tiree, et la forme decimale n'est
         demandee que lorsqu'elle s'ecrit sans exces de zeros. Au-dela, on
         demande l'EXPOSANT de l'ecriture scientifique — une reponse entiere,
         donc toujours lisible, et c'est la competence que le chapitre vise. */
      generate() {
        const tache = pick(['produit', 'produit', 'scientifique', 'quotient', 'ordre']);
        const ctx = pick([
          { intro: 'En astronomie, la distance entre deux etoiles est', emoji: '🌌' },
          { intro: 'En chimie, la masse d\'un atome est', emoji: '🧪' },
          { intro: 'En biologie, la taille d\'une bacterie est', emoji: '🦠' },
          { intro: 'En informatique, la capacite d\'un disque dur est', emoji: '💾' },
          { intro: 'En physique nucleaire, l\'energie liberee est', emoji: '⚛️' }
        ]);

        if (tache === 'produit') {
          const m = rand(2, 9);
          const n1 = rand(-4, 3), n2 = rand(-4, 3);
          const exp = n1 + n2;
          /* SEUIL D'ECRITURE DECIMALE. Au-dela de 4 decimales ou de 5 chiffres
             avant la virgule, la forme decimale devient une file de zeros que
             personne ne lit, et JavaScript basculerait en notation « e ». On
             demande alors l'exposant de l'ecriture scientifique : reponse
             entiere, lisible, et c'est l'objectif du chapitre. */
          if (exp >= -4 && exp <= 4) {
            const val = parseFloat((m * Math.pow(10, exp)).toFixed(Math.max(0, -exp)));
            return {
              statement: ctx.emoji + ' ' + ctx.intro + ' de l\'ordre de $' + m + ' \\times 10^{' + n1 + '}$. ' +
                'On multiplie cette valeur par $10^{' + n2 + '}$. Calcule $' + m + ' \\times 10^{' + n1 + '} \\times 10^{' + n2 + '}$ ' +
                'et donne le résultat en écriture décimale.',
              answer: val,
              tolerance: Math.abs(val) * 0.001 + 1e-12,
              unit: '',
              hint: 'Pour multiplier des puissances de $10$, on ADDITIONNE les exposants : $10^{a} \\times 10^{b} = 10^{a+b}$.',
              solution: [
                'On regroupe les puissances de $10$ : $' + m + ' \\times 10^{' + n1 + '} \\times 10^{' + n2 + '} = ' + m + ' \\times 10^{' + n1 + ' + (' + n2 + ')}$.',
                'Addition des exposants : $' + n1 + ' + (' + n2 + ') = ' + exp + '$, donc le résultat vaut $' + m + ' \\times 10^{' + exp + '}$.',
                'En écriture décimale : $' + fr(val, Math.max(0, -exp)) + '$.'
              ]
            };
          }
          return {
            statement: ctx.emoji + ' ' + ctx.intro + ' de l\'ordre de $' + m + ' \\times 10^{' + n1 + '}$. ' +
              'On multiplie cette valeur par $10^{' + n2 + '}$. Le résultat s\'ecrit $' + m + ' \\times 10^{n}$ : quelle est la valeur de $n$ ?',
            answer: exp,
            tolerance: 0,
            unit: '',
            hint: 'Pour multiplier des puissances de $10$, on ADDITIONNE les exposants. La mantisse $' + m + '$ ne change pas.',
            solution: [
              'On regroupe les puissances de $10$ : $' + m + ' \\times 10^{' + n1 + '} \\times 10^{' + n2 + '} = ' + m + ' \\times 10^{' + n1 + ' + (' + n2 + ')}$.',
              'Addition des exposants : $n = ' + n1 + ' + (' + n2 + ') = ' + exp + '$.',
              'Le résultat vaut donc $' + m + ' \\times 10^{' + exp + '}$. L\'ecrire en décimal demanderait ici ' +
                (exp < 0 ? 'd\'aligner ' + (-exp) + ' décimales' : 'd\'écrire ' + exp + ' zéros') + ' : c\'est précisément pour cela que la notation scientifique existe.'
            ]
          };
        }

        if (tache === 'scientifique') {
          /* Passer d'une ecriture decimale a la notation scientifique. On tire
             la valeur de facon a ce qu'elle s'ecrive proprement, et la reponse
             demandee est l'EXPOSANT : un entier, donc jamais de notation
             exponentielle en sortie. */
          const m = rand(1, 9);
          const d = rand(0, 2);
          const mant = d ? parseFloat((m + rand(1, 9) / 10).toFixed(1)) : m;
          const exp = pick([-4, -3, -2, 2, 3, 4, 5]);
          const val = mant * Math.pow(10, exp);
          const dec = Math.max(0, -exp + (d ? 1 : 0));
          return {
            statement: ctx.emoji + ' Une mesure vaut $' + fr(parseFloat(val.toFixed(dec)), dec) + '$. ' +
              'Ecrite en notation scientifique, elle se met sous la forme $a \\times 10^{n}$ avec $1 \\leqslant a < 10$. Quelle est la valeur de $n$ ?',
            answer: exp,
            tolerance: 0,
            unit: '',
            hint: 'Déplace la virgule jusqu\'a n\'avoir qu\'un seul chiffre non nul devant elle, et compte les rangs parcourus. Vers la gauche l\'exposant est positif, vers la droite il est négatif.',
            solution: [
              'La mantisse doit être comprise entre $1$ et $10$ : ici $a = ' + fr(mant, d ? 1 : 0) + '$.',
              'Il faut donc déplacer la virgule de $' + Math.abs(exp) + '$ rang(s) vers la ' + (exp > 0 ? 'gauche' : 'droite') + ', ce qui donne $n = ' + exp + '$.',
              'Vérification : $' + fr(mant, d ? 1 : 0) + ' \\times 10^{' + exp + '} = ' + fr(parseFloat(val.toFixed(dec)), dec) + '$.'
            ]
          };
        }

        if (tache === 'quotient') {
          const m1 = pick([2, 4, 6, 8, 9]);
          const m2 = pick([2, 3, 4]);
          // On choisit m1 multiple de m2 : la mantisse du quotient reste simple.
          const mant = (m1 % m2 === 0) ? m1 / m2 : m1;
          const mm2 = (m1 % m2 === 0) ? m2 : 1;
          const n1 = rand(-2, 6), n2 = rand(-2, 4);
          const exp = n1 - n2;
          return {
            statement: ctx.emoji + ' Calcule $\\dfrac{' + m1 + ' \\times 10^{' + n1 + '}}{' + mm2 + ' \\times 10^{' + n2 + '}}$. ' +
              'Le résultat s\'ecrit $' + mant + ' \\times 10^{n}$ : quelle est la valeur de $n$ ?',
            answer: exp,
            tolerance: 0,
            unit: '',
            hint: 'Pour diviser des puissances de $10$, on SOUSTRAIT les exposants : $\\dfrac{10^{a}}{10^{b}} = 10^{a-b}$.',
            solution: [
              'On traite séparement les mantisses et les puissances : $\\dfrac{' + m1 + '}{' + mm2 + '} = ' + mant + '$ et $\\dfrac{10^{' + n1 + '}}{10^{' + n2 + '}} = 10^{' + n1 + ' - (' + n2 + ')}$.',
              'Soustraction des exposants : $n = ' + n1 + ' - (' + n2 + ') = ' + exp + '$.',
              'Le quotient vaut donc $' + mant + ' \\times 10^{' + exp + '}$. Piege frequent : additionner les exposants par reflexe, alors qu\'une division les soustrait.'
            ]
          };
        }

        // tache === 'ordre' : comparer deux ordres de grandeur. C'est l'usage le
        // plus durable du chapitre, et il ne demande aucun calcul decimal.
        const e1 = rand(-9, 9);
        const ecart = rand(1, 8);
        const e2 = e1 - ecart;
        const paire = pick([
          { a: 'la taille d\'une cellule', b: 'la taille d\'un atome' },
          { a: 'la masse de la Terre', b: 'la masse de la Lune' },
          { a: 'la distance Terre-Soleil', b: 'le diamètre de la Terre' },
          { a: 'la duree d\'une vie humaine', b: 'la duree d\'un battement de coeur' }
        ]);
        return {
          statement: '📏 On mesure ' + paire.a + ' a $10^{' + e1 + '}$ et ' + paire.b + ' a $10^{' + e2 + '}$ (dans la même unité). ' +
            'Combien de fois la première est-elle plus grande que la seconde ? Le rapport vaut $10^{n}$ : quelle est la valeur de $n$ ?',
          answer: ecart,
          tolerance: 0,
          unit: '',
          hint: 'Un rapport est un quotient : on soustrait les exposants, $10^{' + e1 + '} \\div 10^{' + e2 + '} = 10^{' + e1 + ' - (' + e2 + ')}$.',
          solution: [
            'Le rapport cherche est $\\dfrac{10^{' + e1 + '}}{10^{' + e2 + '}} = 10^{' + e1 + ' - (' + e2 + ')}$.',
            '$n = ' + e1 + ' - (' + e2 + ') = ' + ecart + '$, donc la première grandeur est $10^{' + ecart + '}$ fois plus grande.',
            'C\'est l\'interet des ordres de grandeur : une simple soustraction d\'exposants remplace une division de nombres a ' + (Math.abs(e1) + 1) + ' chiffres.'
          ]
        };
      }
    },

    probleme: {
      context: 'En chimie, le diamètre d\'un atome d\'hydrogène est d\'environ $d_{\\text{atome}} = 1{,}06 \\times 10^{-10}$ m. La longueur d\'onde de la lumière ultra-violette est $\\lambda_{\\text{UV}} = 200$ nm $ = 200 \\times 10^{-9}$ m.',
      schema: null,
      tasks: [
        'Convertir $d_{\\text{atome}}$ en nanomètres.',
        'Exprimer $\\lambda_{\\text{UV}}$ en notation scientifique avec l\'unité de base (mètre).',
        'Calculer le rapport $\\dfrac{\\lambda_{\\text{UV}}}{d_{\\text{atome}}}$ et interpréter physiquement ce résultat.'
      ],
      solutions: [
        '$d_{\\text{atome}} = 1{,}06 \\times 10^{-10}$ m. Or $1$ nm $= 10^{-9}$ m, donc $d_{\\text{atome}} = 1{,}06 \\times 10^{-10} / 10^{-9}$ nm $= 0{,}106$ nm $\\approx 0{,}1$ nm.',
        '$\\lambda_{\\text{UV}} = 200 \\times 10^{-9}$ m $= 2{,}00 \\times 10^{-7}$ m.',
        '$\\dfrac{\\lambda_{\\text{UV}}}{d_{\\text{atome}}} = \\dfrac{2{,}00 \\times 10^{-7}}{1{,}06 \\times 10^{-10}} \\approx 1887 \\approx 2000$. La lumière UV à une longueur d\'onde environ 2000 fois plus grande que le diamètre d\'un atome d\'hydrogène !'
      ],
      finalAnswer: 'Rapport $\\approx 1{,}89 \\times 10^3$ (la lumière UV est ~1900 fois plus grande qu\'un atome)'
    },

    evaluation: {
      title: 'Évaluation — Puissances de 10 et Notation Scientifique',
      duration: '25 min',
      questions: [
        {
          statement: 'Écrire $0{,}000\\,72$ en notation scientifique.',
          type: 'multiple-choice',
          options: ['$72 \\times 10^{-5}$', '$7{,}2 \\times 10^{-4}$', '$7{,}2 \\times 10^{-3}$', '$0{,}72 \\times 10^{-3}$'],
          answer: 1,
          points: 2,
          correction: 'On déplace la virgule de 4 rangs vers la droite pour obtenir $7{,}2$. L\'exposant est donc $-4$. Résultat : $7{,}2 \\times 10^{-4}$.'
        },
        {
          statement: 'Calculer $\\dfrac{6 \\times 10^{5}}{3 \\times 10^{-2}}$. Donner le résultat en notation scientifique.',
          type: 'numeric',
          answer: 2e7,
          tolerance: 1,
          unit: '',
          points: 2,
          correction: 'On divise les mantisses : $6 \\div 3 = 2$. On soustrait les exposants : $5 - (-2) = 7$. Résultat : $2 \\times 10^{7}$.'
        },
        {
          /* Q3 — « modéliser ». Le rappel « un nanomètre vaut $10^{-9}$ m » a été
             AJOUTÉ le 2026-09-13 : sans lui, la question testait la mémoire du
             préfixe et non la mise en opération. Avec lui, la seule difficulté
             restante est de choisir le sens de la conversion, ce qui est
             exactement modéliser. */
          statement: 'Un nanomètre vaut $10^{-9}\\,\\text{m}$. Combien de nanomètres ($\\text{nm}$) y a-t-il dans $5{,}3 \\times 10^{-6}\\,\\text{m}$ ?',
          type: 'numeric',
          answer: 5300,
          tolerance: 1,
          unit: 'nm',
          points: 2,
          correction: 'Le sens de la conversion se décide avant tout calcul : un nanomètre est beaucoup plus petit qu\'un mètre, donc il y en a beaucoup dans la longueur donnée — le résultat sera grand.<br/><br/>' +
            'On divise la longueur par la valeur d\'un nanomètre : $\\dfrac{5{,}3 \\times 10^{-6}}{10^{-9}} = 5{,}3 \\times 10^{-6-(-9)} = 5{,}3 \\times 10^{3}$.<br/><br/>' +
            'Soit $5\\,300\\,\\text{nm}$. Un résultat plus petit que $1$ aurait signalé une conversion prise à l\'envers.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancien
             énoncé, « calculer $(4 \times 10^3)^2$ », était l'application
             directe d'une règle du cours. Ici aucune opération n'est nommée :
             l'élève doit reconnaître derrière « combien de fois plus grande » un
             RAPPORT, donc un quotient, et se garder du réflexe d'addition des
             exposants. */
          statement: 'Une bactérie mesure $2 \\times 10^{-6}\\,\\text{m}$ et un atome $1 \\times 10^{-10}\\,\\text{m}$. Combien de fois la bactérie est-elle plus grande que l\'atome ? Le rapport s\'écrit $2 \\times 10^{n}$ : donner la valeur de $n$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '« Combien de fois plus grande » désigne un <strong>rapport</strong>, donc un quotient : il faut diviser, alors que l\'énoncé ne prononce jamais le mot.<br/><br/>' +
            'On sépare mantisses et puissances : $\\dfrac{2}{1} = 2$ et $\\dfrac{10^{-6}}{10^{-10}} = 10^{-6-(-10)} = 10^{4}$.<br/><br/>' +
            'Le rapport vaut $2 \\times 10^{4}$, donc $n = 4$ : la bactérie est $20\\,000$ fois plus grande. Le piège est d\'additionner les exposants, ce qui donnerait $10^{-16}$ — un rapport inférieur à $1$, absurde pour une grandeur annoncée plus grande.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancien
             énoncé (durée du trajet de la lumière) était un quotient à poser.
             Celui-ci demande de distinguer une erreur de FORME d'une erreur de
             VALEUR et de le dire : une explication, pas un nombre. C'est aussi
             la distinction la plus utile du chapitre. */
          statement: 'Un élève écrit le résultat d\'un calcul sous la forme $45 \\times 10^{6}$ et affirme qu\'il est en notation scientifique. Quelle explication est la plus juste ?',
          type: 'multiple-choice',
          options: [
            'Il a raison : tout produit d\'un nombre par une puissance de $10$ est en notation scientifique.',
            'Il a tort, et sa valeur est fausse : $45 \\times 10^{6}$ ne correspond à aucun nombre.',
            'Il a tort sur la FORME seulement : la valeur est juste, mais la notation scientifique impose une mantisse $a$ telle que $1 \\leqslant a < 10$, et $45$ ne l\'est pas. L\'écriture correcte est $4{,}5 \\times 10^{7}$.',
            'Il a tort parce que l\'exposant d\'une notation scientifique doit rester inférieur à $6$.'
          ],
          answer: 2,
          points: 2,
          correction: 'La <strong>valeur</strong> est correcte : $45 \\times 10^{6} = 45\\,000\\,000$. L\'erreur ne porte que sur la forme, et c\'est tout l\'intérêt de la question.<br/><br/>' +
            'La notation scientifique exige une mantisse comprise entre $1$ inclus et $10$ exclu. Ici $45 \\geqslant 10$ : on déplace la virgule d\'un rang vers la gauche, ce qui divise la mantisse par $10$, et on augmente l\'exposant de $1$ pour compenser.<br/><br/>' +
            '$45 \\times 10^{6} = 4{,}5 \\times 10^{7}$. Les deux écritures désignent le même nombre ; une seule est la notation scientifique.'
        }
      ]
    }
  }
);
