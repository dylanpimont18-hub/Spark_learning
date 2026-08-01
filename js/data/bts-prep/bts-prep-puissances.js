/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-puissances.js
   Remise à niveau BTS — Puissances de 10, notation scientifique, préfixes SI
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-puissances',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '🔢',
  title: 'Puissances de 10 & Notation Scientifique',
  subtitle: 'Manipuler les très grands et très petits nombres avec les préfixes SI',
  keywords: ['Puissances', 'Notation scientifique', 'Préfixes SI', 'kilo', 'mega', 'milli', 'BTS', 'Prérequis'],
  physics: 'Résistivité, capacité, fréquence, pression, énergie',

  cours: {
    intro: 'En BTS, on manipule des grandeurs qui s\'étendent sur des dizaines d\'ordres de grandeur : de la résistivité du cuivre ($1{,}7 \\times 10^{-8}$ Ω·m) à la fréquence d\'un réseau électrique (50 Hz) en passant par la puissance d\'une centrale (1 GW = $10^9$ W).<br/><br/>La <strong>notation scientifique</strong> permet d\'écrire tout nombre sous la forme $a \\times 10^n$ avec $1 \\leq |a| < 10$. Les <strong>préfixes SI</strong> sont des abréviations standardisées de puissances de 10 que l\'on place avant l\'unité : kilo (k) = $10^3$, mega (M) = $10^6$, milli (m) = $10^{-3}$…<br/><br/>Maîtriser ces notations évite les erreurs d\'un facteur $10^3$ ou $10^6$ — des erreurs qui conduisent à des dimensionnements faux en bureau d\'études.',

    definitions: [
      {
        term: 'Puissance de 10',
        def: '$10^n$ représente le nombre 1 suivi de $n$ zéros (si $n > 0$) ou 1 précédé de $n$ décimales (si $n < 0$). Exemples : $10^3 = 1000$, $10^{-3} = 0{,}001$, $10^0 = 1$.'
      },
      {
        term: 'Notation scientifique',
        def: 'Écriture d\'un nombre sous la forme $a \\times 10^n$ avec $1 \\leq a < 10$. Exemple : $47\\,500 = 4{,}75 \\times 10^4$ et $0{,}000\\,023 = 2{,}3 \\times 10^{-5}$.'
      },
      {
        term: 'Préfixes SI courants',
        def: 'Abréviations normalisées : T (téra, $10^{12}$), G (giga, $10^9$), M (méga, $10^6$), k (kilo, $10^3$), — (base), m (milli, $10^{-3}$), μ (micro, $10^{-6}$), n (nano, $10^{-9}$), p (pico, $10^{-12}$).'
      },
      {
        term: 'Règles de calcul sur les puissances',
        def: '$10^a \\times 10^b = 10^{a+b}$ ; $10^a / 10^b = 10^{a-b}$ ; $(10^a)^b = 10^{a \\cdot b}$. Exemples : $10^3 \\times 10^{-5} = 10^{-2}$ ; $10^6 / 10^2 = 10^4$.'
      }
    ],

    method: {
      title: 'Convertir avec les préfixes SI',
      steps: [
        '<strong>Identifier le préfixe</strong> de l\'unité donnée et son exposant correspondant.<br/>Exemple : 4{,}7 kΩ → le préfixe k correspond à $10^3$.',
        '<strong>Multiplier</strong> par la puissance de 10 pour revenir à l\'unité de base.<br/>$4{,}7$ kΩ $= 4{,}7 \\times 10^3$ Ω $= 4700$ Ω.',
        '<strong>Effectuer le calcul</strong> en unités de base, puis <strong>reconvertir</strong> si nécessaire.<br/>Exemple : courant $I = U/R = 12/(4{,}7 \\times 10^3) = 2{,}55 \\times 10^{-3}$ A $= 2{,}55$ mA.'
      ]
    },

    example: {
      statement: 'La résistivité du cuivre est $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m. Calculer la résistance d\'un câble de cuivre de longueur $L = 50$ m et de section $S = 2{,}5$ mm² en utilisant $R = \\rho L / S$.',
      steps: [
        'Convertir $S$ en m² : $S = 2{,}5$ mm² $= 2{,}5 \\times 10^{-6}$ m² (car 1 mm² $= 10^{-6}$ m²).',
        '$R = \\dfrac{\\rho L}{S} = \\dfrac{1{,}7 \\times 10^{-8} \\times 50}{2{,}5 \\times 10^{-6}}$.',
        '$R = \\dfrac{8{,}5 \\times 10^{-7}}{2{,}5 \\times 10^{-6}} = \\dfrac{8{,}5}{2{,}5} \\times 10^{-7-(-6)} = 3{,}4 \\times 10^{-1} = 0{,}34$ Ω.'
      ],
      answer: '$R = 0{,}34$ Ω. C\'est la résistance d\'un câble de 50 m de section 2,5 mm² — valeur typique en installation électrique domestique.'
    },

    formulas: [
      '$10^a \\times 10^b = 10^{a+b}$ — multiplication : on additionne les exposants',
      '$10^a / 10^b = 10^{a-b}$ — division : on soustrait les exposants',
      '$(10^a)^b = 10^{ab}$ — puissance d\'une puissance',
      'G = $10^9$, M = $10^6$, k = $10^3$, m = $10^{-3}$, μ = $10^{-6}$, n = $10^{-9}$'
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Mécanique de la notation scientifique',
      title: 'Écrire un nombre en $a \\times 10^{n}$ : la virgule se déplace, l\'exposant compte les rangs',
      description: 'Passer en notation scientifique n\'est pas un tour de magie : on <strong>déplace la virgule</strong> jusqu\'à n\'avoir qu\'un seul chiffre non nul devant elle, et l\'exposant enregistre simplement <strong>combien de rangs</strong> elle a franchis, et dans quel sens.',
      svg: `
        <svg viewBox="0 0 470 260" role="img" aria-labelledby="bts-puissances-virgule-title bts-puissances-virgule-desc">
          <title id="bts-puissances-virgule-title">Deplacement de la virgule en notation scientifique</title>
          <desc id="bts-puissances-virgule-desc">Deux exemples. Pour 47500, la virgule implicite situee apres le dernier zero recule de quatre rangs vers la gauche, ce qui donne 4,75 fois 10 puissance 4. Pour 0,000023, la virgule avance de cinq rangs vers la droite, ce qui donne 2,3 fois 10 puissance moins 5. Un encadre resume la regle de signe.</desc>

          <text class="axis-label" x="30" y="30">Grand nombre — la virgule recule</text>
          <path class="guide-line" fill="none" d="M 186 62 Q 130 24 76 62"></path>
          <text class="annotation-label" x="60" y="76">4</text>
          <text class="annotation-label" x="86" y="76">7</text>
          <text class="annotation-label" x="112" y="76">5</text>
          <text class="annotation-label" x="138" y="76">0</text>
          <text class="annotation-label" x="164" y="76">0</text>
          <text class="annotation-label" x="186" y="76" fill="var(--secondary)">,</text>
          <text class="tick-label" x="80" y="96">← 4 rangs vers la gauche</text>
          <text class="annotation-label" x="250" y="76">= 4,75 × 10⁴</text>
          <text class="tick-label" x="250" y="96">exposant positif : le nombre est grand</text>

          <text class="axis-label" x="30" y="140">Petit nombre — la virgule avance</text>
          <path class="guide-line" fill="none" d="M 78 186 Q 148 224 216 186"></path>
          <text class="annotation-label" x="60" y="180">0</text>
          <text class="annotation-label" x="78" y="180" fill="var(--secondary)">,</text>
          <text class="annotation-label" x="96" y="180">0</text>
          <text class="annotation-label" x="122" y="180">0</text>
          <text class="annotation-label" x="148" y="180">0</text>
          <text class="annotation-label" x="174" y="180">0</text>
          <text class="annotation-label" x="200" y="180">2</text>
          <text class="annotation-label" x="226" y="180">3</text>
          <text class="tick-label" x="100" y="240">5 rangs vers la droite →</text>
          <text class="annotation-label" x="290" y="180">= 2,3 × 10⁻⁵</text>
          <text class="tick-label" x="290" y="200">exposant négatif</text>

          <rect x="30" y="206" width="60" height="28" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 28%, var(--border))"></rect>
          <text class="tick-label" x="60" y="224" text-anchor="middle">n = −5</text>
          <rect x="30" y="42" width="60" height="0" rx="8" fill="none"></rect>
        </svg>
      `,
      notes: [
        '<strong>La règle de signe en une phrase :</strong> si la virgule <em>recule</em> (nombre grand), l\'exposant est <strong>positif</strong> ; si elle <em>avance</em> (nombre petit), l\'exposant est <strong>négatif</strong>.',
        '<strong>La mantisse est contrainte :</strong> en notation scientifique stricte, $1 \\leq |a| < 10$. Écrire $47{,}5 \\times 10^3$ n\'est pas faux numériquement, mais ce n\'est pas de la notation scientifique — la calculatrice, elle, affichera $4{,}75 \\times 10^4$.',
        '<strong>Le contrôle immédiat :</strong> recompte les rangs dans l\'autre sens. $4{,}75 \\times 10^4$ : je décale la virgule de 4 rangs vers la droite → $47\\,500$ ✓. Ce contrôle prend deux secondes et attrape toutes les erreurs d\'exposant.',
        '<strong>Les chiffres significatifs se conservent :</strong> $47\\,500$ s\'écrit $4{,}75 \\times 10^4$ — les zéros de position disparaissent, mais aucun chiffre significatif n\'est perdu ni inventé.'
      ],
      reading: 'La notation scientifique n\'existe pas pour faire savant : elle rend <strong>comparables</strong> des grandeurs séparées par plusieurs décades, et elle rend les calculs de tête possibles (on additionne les exposants au lieu de compter les zéros).',
      caption: 'Mécanique du passage en notation scientifique : sens de déplacement de la virgule et signe de l\'exposant, sur un grand puis un petit nombre.'
    },

    diagrams: [
      {
        theme: 'maths',
        kicker: 'Les trois règles de calcul',
        title: 'Multiplier, diviser, élever : ce que deviennent les exposants',
        description: 'Toute la puissance de cette notation tient en trois règles. Chacune transforme une opération lourde sur les nombres en une opération <strong>simple sur les exposants</strong>.',
        svg: `
          <svg viewBox="0 0 470 230" role="img" aria-labelledby="bts-puissances-regles-title bts-puissances-regles-desc">
            <title id="bts-puissances-regles-title">Les trois regles de calcul sur les puissances de dix</title>
            <desc id="bts-puissances-regles-desc">Trois encadres. Le premier : multiplier revient a additionner les exposants, illustre par le calcul d'une puissance a partir d'une tension et d'un courant. Le deuxieme : diviser revient a soustraire les exposants, illustre par le calcul d'une resistance. Le troisieme : elever a une puissance revient a multiplier les exposants, illustre par la conversion d'une section de millimetres carres en metres carres.</desc>

            <rect x="20" y="30" width="140" height="150" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 26%, var(--border))"></rect>
            <text class="annotation-label" x="90" y="56" text-anchor="middle">× → on ADDITIONNE</text>
            <text class="axis-label" x="90" y="86" text-anchor="middle">10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ</text>
            <line class="grid-line" x1="34" y1="102" x2="146" y2="102"></line>
            <text class="tick-label" x="34" y="122">P = U × I</text>
            <text class="tick-label" x="34" y="138">= 2,3×10² × 1,5×10¹</text>
            <text class="tick-label" x="34" y="154">= 3,45 × 10³ W</text>
            <text class="tick-label label-soft" x="34" y="170">soit 3,45 kW</text>

            <rect x="175" y="30" width="140" height="150" rx="12" fill="color-mix(in srgb, var(--secondary) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 26%, var(--border))"></rect>
            <text class="annotation-label" x="245" y="56" text-anchor="middle" fill="var(--secondary)">÷ → on SOUSTRAIT</text>
            <text class="axis-label" x="245" y="86" text-anchor="middle">10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ</text>
            <line class="grid-line" x1="189" y1="102" x2="301" y2="102"></line>
            <text class="tick-label" x="189" y="122">R = U / I</text>
            <text class="tick-label" x="189" y="138">= 2,3×10² / 5×10⁻²</text>
            <text class="tick-label" x="189" y="154">= 0,46 × 10⁴ Ω</text>
            <text class="tick-label label-soft" x="189" y="170">= 4,6 kΩ</text>

            <rect x="330" y="30" width="140" height="150" rx="12" fill="color-mix(in srgb, var(--accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 30%, var(--border))"></rect>
            <text class="annotation-label" x="400" y="56" text-anchor="middle" fill="var(--accent)">( )ⁿ → on MULTIPLIE</text>
            <text class="axis-label" x="400" y="86" text-anchor="middle">(10ᵃ)ⁿ = 10ᵃⁿ</text>
            <line class="grid-line" x1="344" y1="102" x2="456" y2="102"></line>
            <text class="tick-label" x="344" y="122">1 mm = 10⁻³ m</text>
            <text class="tick-label" x="344" y="138">1 mm² = (10⁻³)²</text>
            <text class="tick-label" x="344" y="154">= 10⁻⁶ m²</text>
            <text class="tick-label label-soft" x="344" y="170">et non 10⁻³ !</text>

            <text class="annotation-label" x="235" y="208" text-anchor="middle">Piège n°1 : le préfixe subit l\'exposant lui aussi</text>
            <text class="tick-label" x="235" y="224" text-anchor="middle">1 cm³ = (10⁻²)³ m³ = 10⁻⁶ m³   —   1 km² = (10³)² m² = 10⁶ m²</text>
          </svg>
        `,
        notes: [
          '<strong>Multiplier = additionner les exposants.</strong> C\'est ce qui permet de calculer $2{,}3\\times 10^2 \\times 1{,}5 \\times 10^1$ de tête : $2{,}3 \\times 1{,}5 = 3{,}45$ et $2+1 = 3$.',
          '<strong>Diviser = soustraire les exposants.</strong> Attention aux exposants négatifs : $10^2 \\div 10^{-2} = 10^{2-(-2)} = 10^{4}$. Diviser par un petit nombre donne un grand résultat.',
          '<strong>Élever = multiplier les exposants.</strong> C\'est la règle la plus mal appliquée : $1\\;\\text{mm}^2$ ne vaut pas $10^{-3}\\;\\text{m}^2$ mais $10^{-6}\\;\\text{m}^2$, parce que le préfixe est élevé au carré lui aussi.',
          '<strong>Le contrôle d\'ordre de grandeur :</strong> avant de valider un résultat, calcule mentalement <em>uniquement les exposants</em>. Si tu trouves $10^{-6}$ là où tu attendais des kilowatts, l\'erreur est repérée avant d\'avoir posé le moindre chiffre.'
        ],
        reading: 'Ces trois règles remplacent le comptage de zéros — qui est la première source d\'erreur en BTS. <strong>Sépare toujours mantisses et exposants</strong> : tu fais un petit calcul sur les uns, une addition sur les autres.',
        caption: 'Les trois règles de calcul sur les puissances de 10, chacune illustrée par un calcul technique réel (puissance, résistance, section de câble).'
      },
      {
        theme: 'maths',
        kicker: 'Ordres de grandeur en électrotechnique',
        title: 'Situer une valeur sur l\'échelle des préfixes',
        description: 'Chaque repère est un préfixe SI cité dans le cours (de pico à téra), avec les exemples numériques réellement utilisés : résistivité du cuivre, capacités, courant, résistances et puissances.',
        svg: `
        <svg viewBox="0 0 480 210" role="img" aria-labelledby="bts-puissances-echelle-title bts-puissances-echelle-desc">
          <title id="bts-puissances-echelle-title">Echelle logarithmique des prefixes SI de pico a tera</title>
          <desc id="bts-puissances-echelle-desc">Un axe gradue de 10 puissance -12 a 10 puissance 12 place les neuf prefixes SI (pico, nano, micro, milli, base, kilo, mega, giga, tera) et sept exemples numeriques cites dans le cours : nanofarad, resistivite du cuivre a 10 puissance -8, microfarad, milliampere et millimetre, kilohm et kilowatt, megohm, gigawatt.</desc>
          <line class="grid-line" x1="55.0" y1="40" x2="55.0" y2="130"></line>
          <line class="grid-line" x1="101.3" y1="40" x2="101.3" y2="130"></line>
          <line class="grid-line" x1="147.5" y1="40" x2="147.5" y2="130"></line>
          <line class="grid-line" x1="193.8" y1="40" x2="193.8" y2="130"></line>
          <line class="grid-line" x1="240.0" y1="40" x2="240.0" y2="130"></line>
          <line class="grid-line" x1="286.3" y1="40" x2="286.3" y2="130"></line>
          <line class="grid-line" x1="332.5" y1="40" x2="332.5" y2="130"></line>
          <line class="grid-line" x1="378.8" y1="40" x2="378.8" y2="130"></line>
          <line class="grid-line" x1="425.0" y1="40" x2="425.0" y2="130"></line>
          <line class="axis" x1="40" y1="130" x2="440" y2="130"></line>
          <line class="axis" x1="55.0" y1="130" x2="55.0" y2="136"></line>
          <line class="axis" x1="101.3" y1="130" x2="101.3" y2="136"></line>
          <line class="axis" x1="147.5" y1="130" x2="147.5" y2="136"></line>
          <line class="axis" x1="193.8" y1="130" x2="193.8" y2="136"></line>
          <line class="axis" x1="240.0" y1="130" x2="240.0" y2="136"></line>
          <line class="axis" x1="286.3" y1="130" x2="286.3" y2="136"></line>
          <line class="axis" x1="332.5" y1="130" x2="332.5" y2="136"></line>
          <line class="axis" x1="378.8" y1="130" x2="378.8" y2="136"></line>
          <line class="axis" x1="425.0" y1="130" x2="425.0" y2="136"></line>
          <text class="label" x="55.0" y="150" text-anchor="middle">p</text>
          <text class="label" x="101.3" y="150" text-anchor="middle">n</text>
          <text class="label" x="147.5" y="150" text-anchor="middle">μ</text>
          <text class="label" x="193.8" y="150" text-anchor="middle">m</text>
          <text class="label" x="240.0" y="150" text-anchor="middle">base</text>
          <text class="label" x="286.3" y="150" text-anchor="middle">k</text>
          <text class="label" x="332.5" y="150" text-anchor="middle">M</text>
          <text class="label" x="378.8" y="150" text-anchor="middle">G</text>
          <text class="label" x="425.0" y="150" text-anchor="middle">T</text>
          <text class="tick-label" x="55.0" y="167" text-anchor="middle">10⁻¹²</text>
          <text class="tick-label" x="101.3" y="167" text-anchor="middle">10⁻⁹</text>
          <text class="tick-label" x="147.5" y="167" text-anchor="middle">10⁻⁶</text>
          <text class="tick-label" x="193.8" y="167" text-anchor="middle">10⁻³</text>
          <text class="tick-label" x="240.0" y="167" text-anchor="middle">10⁰</text>
          <text class="tick-label" x="286.3" y="167" text-anchor="middle">10³</text>
          <text class="tick-label" x="332.5" y="167" text-anchor="middle">10⁶</text>
          <text class="tick-label" x="378.8" y="167" text-anchor="middle">10⁹</text>
          <text class="tick-label" x="425.0" y="167" text-anchor="middle">10¹²</text>
          <text class="axis-label" x="440" y="190" text-anchor="end">Echelle log — facteur 1000 entre prefixes voisins</text>
          <line class="guide-line" x1="101.3" y1="64" x2="101.3" y2="130"></line>
          <line class="guide-line" x1="116.7" y1="86" x2="116.7" y2="130"></line>
          <line class="guide-line" x1="147.5" y1="64" x2="147.5" y2="130"></line>
          <line class="guide-line" x1="193.8" y1="86" x2="193.8" y2="130"></line>
          <line class="guide-line" x1="286.3" y1="64" x2="286.3" y2="130"></line>
          <line class="guide-line" x1="332.5" y1="86" x2="332.5" y2="130"></line>
          <line class="guide-line" x1="378.8" y1="64" x2="378.8" y2="130"></line>
          <circle class="plot-point" cx="101.3" cy="130" r="4"></circle>
          <circle class="plot-point" cx="116.7" cy="130" r="4"></circle>
          <circle class="plot-point" cx="147.5" cy="130" r="4"></circle>
          <circle class="plot-point" cx="193.8" cy="130" r="4"></circle>
          <circle class="plot-point" cx="286.3" cy="130" r="4"></circle>
          <circle class="plot-point" cx="332.5" cy="130" r="4"></circle>
          <circle class="plot-point" cx="378.8" cy="130" r="4"></circle>
          <text class="annotation-label" x="101.3" y="58" text-anchor="middle">10 nF</text>
          <text class="annotation-label" x="116.7" y="80" text-anchor="middle">ρ:10⁻⁸</text>
          <text class="annotation-label" x="147.5" y="58" text-anchor="middle">100 μF</text>
          <text class="annotation-label" x="193.8" y="80" text-anchor="middle">50mA/0,5mm</text>
          <text class="annotation-label" x="286.3" y="58" text-anchor="middle">4,7kΩ/10kW</text>
          <text class="annotation-label" x="332.5" y="80" text-anchor="middle">1 MΩ</text>
          <text class="annotation-label" x="378.8" y="58" text-anchor="middle">1 GW</text>
        </svg>
      `,
      notes: [
        'Le <strong>nanofarad (nF)</strong> illustre le préfixe nano ($10^{-9}$) : $10$ nF, valeur typique en électronique.',
        'La <strong>résistivité du cuivre</strong> $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m (donnée de l\'exemple du cours) se situe entre nano et micro.',
        'Le <strong>microfarad (μF)</strong> illustre le préfixe micro ($10^{-6}$) : $100$ μF, valeur typique d\'un condensateur de filtrage.',
        'Le préfixe <strong>milli</strong> ($10^{-3}$) regroupe deux exemples du cours : un courant $I = 50$ mA et une longueur $0{,}5$ mm.',
        'Le préfixe <strong>kilo</strong> ($10^3$) regroupe $4{,}7$ kΩ (résistance) et $10$ kW (puissance), cités dans le cours.',
        'Le <strong>mégohm (MΩ)</strong> illustre le préfixe méga ($10^6$), utilisé pour une résistance d\'isolement.',
        'Le <strong>gigawatt (GW)</strong> illustre le préfixe giga ($10^9$), échelle d\'une centrale électrique.'
      ],
        reading: 'Chaque graduation multiplie par $1000$ ($10^3$) : c\'est l\'écart entre deux préfixes SI consécutifs (pico → nano → micro → milli → base → kilo → méga → giga → téra). Les préfixes pico et téra bornent l\'axe pour situer les sept exemples numériques réellement traités dans ce cours.',
        caption: 'Échelle logarithmique de $10^{-12}$ à $10^{12}$ avec les préfixes SI et les exemples numériques du cours (résistivité, capacités, courant, résistances, puissances).'
      }
    ],

    recap: [
      'Avant tout calcul, convertir toutes les grandeurs en unités de base SI (m, kg, s, A, K…).',
      'Multiplication des puissances de 10 : additionner les exposants. Division : soustraire.',
      '1 mm² ≠ 1 mm × 1 mm = $10^{-3}$ m × $10^{-3}$ m = $10^{-6}$ m² (les unités de surface et volume se convertissent au carré ou au cube).',
      'Un ordre de grandeur est une puissance de 10 : une erreur d\'un facteur 1000 (k oublié) est fréquente et catastrophique en dimensionnement.'
    ],

    piege: 'Attention à la conversion des unités de surface et de volume : 1 mm² $= 10^{-6}$ m² (pas $10^{-3}$ m²). Et 1 cm³ $= 10^{-6}$ m³. Penser à "convertir l\'unité puis l\'exposer à la bonne puissance".'
  },

  quiz: [
    {
      q: '$3{,}5 \\times 10^3 \\times 2 \\times 10^4$ vaut :',
      options: ['$7 \\times 10^7$', '$5{,}5 \\times 10^7$', '$7 \\times 10^{12}$', '$7 \\times 10^{8}$'],
      answer: 0,
      correction: '$3{,}5 \\times 2 = 7$ et $10^3 \\times 10^4 = 10^{3+4} = 10^7$. Résultat : $7 \\times 10^7$.'
    },
    {
      q: 'La résistance de $4{,}7$ kΩ convertie en Ω vaut :',
      options: ['$0{,}0047$ Ω', '$470$ Ω', '$4700$ Ω', '$47\\,000$ Ω'],
      answer: 2,
      correction: 'k = $10^3$. Donc $4{,}7$ kΩ $= 4{,}7 \\times 10^3$ Ω $= 4700$ Ω.'
    },
    {
      q: 'Le courant $I = 35$ mA converti en A vaut :',
      options: ['$3{,}5$ A', '$0{,}35$ A', '$0{,}035$ A', '$350$ A'],
      answer: 2,
      correction: 'm = $10^{-3}$. Donc $35$ mA $= 35 \\times 10^{-3}$ A $= 0{,}035$ A.'
    },
    {
      q: 'La capacité $C = 100$ μF convertie en F vaut :',
      options: ['$10^{-4}$ F', '$10^{-2}$ F', '$100 \\times 10^{-3}$ F', '$0{,}1$ F'],
      answer: 0,
      correction: 'μ = $10^{-6}$. Donc $100$ μF $= 100 \\times 10^{-6}$ F $= 10^{-4}$ F.'
    },
    {
      q: 'La section $S = 2{,}5$ mm² convertie en m² vaut :',
      figure: {
        svg: `
          <svg viewBox="0 0 360 160" role="img" aria-labelledby="qpuis-mm2-title qpuis-mm2-desc">
            <title id="qpuis-mm2-title">Pourquoi un millimetre carre vaut dix puissance moins six metre carre</title>
            <desc id="qpuis-mm2-desc">Un carre de un millimetre de cote est represente. Chacun de ses cotes vaut dix puissance moins trois metre. Son aire vaut donc le produit des deux, soit dix puissance moins six metre carre, et non dix puissance moins trois.</desc>
            <rect x="60" y="40" width="80" height="80" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 48%, var(--border))" stroke-width="3"></rect>
            <line class="graph-line" x1="60" y1="132" x2="140" y2="132" stroke="var(--secondary)"></line>
            <text class="annotation-label" x="100" y="152" text-anchor="middle" fill="var(--secondary)">1 mm = 10⁻³ m</text>
            <line class="graph-line" x1="48" y1="40" x2="48" y2="120" stroke="var(--accent)"></line>
            <text class="annotation-label" x="44" y="84" fill="var(--accent)">10⁻³ m</text>
            <text class="annotation-label" x="170" y="66">aire = 10⁻³ × 10⁻³</text>
            <text class="axis-label" x="170" y="92">= 10⁻⁶ m²</text>
            <text class="tick-label" x="170" y="116">le préfixe subit l\'exposant :</text>
            <text class="tick-label" x="170" y="132">−3 devient −6, pas −3</text>
          </svg>
        `,
        caption: 'Une unité au carré porte un préfixe au carré : $1\\;\\text{mm}^2 = 10^{-6}\\;\\text{m}^2$.'
      },
      options: ['$2{,}5 \\times 10^{-3}$ m²', '$2{,}5 \\times 10^{-6}$ m²', '$2{,}5 \\times 10^{-4}$ m²', '$2{,}5 \\times 10^{-9}$ m²'],
      answer: 1,
      correction: '1 mm $= 10^{-3}$ m, donc 1 mm² $= (10^{-3})^2 = 10^{-6}$ m². Ainsi $2{,}5$ mm² $= 2{,}5 \\times 10^{-6}$ m².'
    },
    {
      q: '$\\dfrac{8{,}4 \\times 10^{-6}}{2 \\times 10^{-3}}$ vaut :',
      options: ['$4{,}2 \\times 10^{-3}$', '$4{,}2 \\times 10^{-9}$', '$4{,}2 \\times 10^{9}$', '$16{,}8 \\times 10^{-9}$'],
      answer: 0,
      correction: '$\\dfrac{8{,}4}{2} = 4{,}2$ et $10^{-6}/10^{-3} = 10^{-6-(-3)} = 10^{-3}$. Résultat : $4{,}2 \\times 10^{-3}$.'
    },
    {
      q: 'La puissance $P = 7{,}5$ kW en notation scientifique est :',
      options: ['$7{,}5 \\times 10^2$ W', '$7{,}5 \\times 10^3$ W', '$75 \\times 10^2$ W', '$0{,}75 \\times 10^4$ W'],
      answer: 1,
      correction: '$7{,}5$ kW $= 7{,}5 \\times 10^3$ W. En notation scientifique, le coefficient est entre 1 et 10.'
    },
    {
      q: 'La résistivité du cuivre est $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m. Pour un câble de $L = 100$ m et $S = 4$ mm² $= 4 \\times 10^{-6}$ m², la résistance est :',
      options: ['$R = 0{,}425$ Ω', '$R = 4{,}25$ Ω', '$R = 0{,}0425$ Ω', '$R = 425$ mΩ'],
      answer: 0,
      correction: '$R = \\rho L/S = (1{,}7 \\times 10^{-8} \\times 100)/(4 \\times 10^{-6}) = (1{,}7 \\times 10^{-6})/(4 \\times 10^{-6}) = 1{,}7/4 = 0{,}425$ Ω. C\'est la réponse A. Attention à ne pas confondre avec la réponse D ($425$ mΩ) : c\'est la même valeur mais exprimée dans une autre unité, donc elle ne compte pas comme une deuxième bonne réponse dans ce QCM en Ω.'
    },
    {
      q: 'L\'énergie stockée dans un condensateur est $E = \\frac{1}{2}CU^2$ avec $C = 470$ μF et $U = 12$ V. L\'énergie vaut :',
      options: ['$E = 0{,}0338$ J', '$E = 33{,}8$ mJ', '$E = 338$ mJ', '$E = 33800$ μJ'],
      answer: 1,
      correction: '$E = 0{,}5 \\times 470 \\times 10^{-6} \\times 144 = 0{,}5 \\times 0{,}000470 \\times 144 = 0{,}03384$ J $\\approx 33{,}8$ mJ.'
    },
    {
      q: 'Écrire $0{,}000\\,047$ en notation scientifique :',
      options: ['$47 \\times 10^{-6}$', '$4{,}7 \\times 10^{-5}$', '$0{,}47 \\times 10^{-4}$', '$4{,}7 \\times 10^{-4}$'],
      answer: 1,
      correction: '$0{,}000\\,047 = 4{,}7 \\times 10^{-5}$. En notation scientifique, le premier chiffre significatif est entre 1 et 9.'
    },
    {
      q: 'Une mole de gaz contient $N_A = 6{,}02 \\times 10^{23}$ molécules (nombre d\'Avogadro). Combien de molécules y a-t-il dans $0{,}5$ mole ?',
      options: ['$3{,}01 \\times 10^{23}$', '$1{,}204 \\times 10^{24}$', '$6{,}02 \\times 10^{23}$', '$3{,}01 \\times 10^{22}$'],
      answer: 0,
      correction: '$0{,}5 \\times 6{,}02 \\times 10^{23} = 3{,}01 \\times 10^{23}$ molécules.'
    },
    {
      q: 'La masse d\'un atome de carbone est $m = 1{,}99 \\times 10^{-26}$ kg. Exprimée en grammes, cette masse vaut :',
      options: ['$1{,}99 \\times 10^{-23}$ g', '$1{,}99 \\times 10^{-29}$ g', '$1{,}99 \\times 10^{-26}$ g', '$1{,}99 \\times 10^{-20}$ g'],
      answer: 0,
      correction: '$1$ kg $= 10^3$ g, donc $1{,}99 \\times 10^{-26}$ kg $= 1{,}99 \\times 10^{-26} \\times 10^3 = 1{,}99 \\times 10^{-23}$ g.'
    },
    {
      q: 'La fréquence d\'un signal est $f = 2{,}4$ GHz. Exprimée en Hz, elle vaut :',
      options: ['$2{,}4 \\times 10^9$ Hz', '$2{,}4 \\times 10^6$ Hz', '$2{,}4 \\times 10^{-9}$ Hz', '$2{,}4 \\times 10^{-6}$ Hz'],
      answer: 0,
      correction: 'G = $10^9$. Donc $2{,}4$ GHz $= 2{,}4 \\times 10^9$ Hz.'
    },
    {
      q: 'Une force de $F = 2{,}5$ MN (méganewton) exprimée en N vaut :',
      options: ['$2{,}5 \\times 10^6$ N', '$2{,}5 \\times 10^3$ N', '$2{,}5 \\times 10^{-6}$ N', '$2{,}5 \\times 10^9$ N'],
      answer: 0,
      correction: 'M = $10^6$. Donc $2{,}5$ MN $= 2{,}5 \\times 10^6$ N.'
    },
    {
      q: 'Un volume élémentaire mesure $V = 8$ mm³. Exprimé en m³, ce volume vaut :',
      figure: {
        svg: `
          <svg viewBox="0 0 340 155" role="img" aria-labelledby="qpuis-mm3-title qpuis-mm3-desc">
            <title id="qpuis-mm3-title">Un millimetre cube en metres cubes</title>
            <desc id="qpuis-mm3-desc">Un petit cube de un millimetre d'arete est dessine en perspective. Chacune de ses trois aretes vaut dix puissance moins trois metre, si bien que son volume vaut dix puissance moins neuf metre cube.</desc>
            <polygon points="50,50 110,50 110,110 50,110" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 45%, var(--border))" stroke-width="2.5"></polygon>
            <polygon points="50,50 74,30 134,30 110,50" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 45%, var(--border))" stroke-width="2.5"></polygon>
            <polygon points="110,50 134,30 134,90 110,110" fill="color-mix(in srgb, var(--diagram-accent) 22%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 45%, var(--border))" stroke-width="2.5"></polygon>
            <text class="tick-label" x="80" y="128" text-anchor="middle">1 mm</text>
            <text class="tick-label" x="30" y="84" text-anchor="end">1 mm</text>
            <text class="tick-label" x="142" y="66">1 mm</text>
            <text class="annotation-label" x="180" y="56">1 mm³ = (10⁻³)³ m³</text>
            <text class="axis-label" x="180" y="82">= 10⁻⁹ m³</text>
            <text class="tick-label" x="180" y="106">trois arêtes → l\'exposant</text>
            <text class="tick-label" x="180" y="122">est multiplié par 3</text>
          </svg>
        `,
        caption: 'Un volume cumule trois longueurs : le préfixe est donc élevé au cube, $10^{-3} \\to 10^{-9}$.'
      },
      options: ['$8 \\times 10^{-9}$ m³', '$8 \\times 10^{-3}$ m³', '$8 \\times 10^{-6}$ m³', '$8 \\times 10^{-12}$ m³'],
      answer: 0,
      correction: '$1$ mm $= 10^{-3}$ m, donc $1$ mm³ $= (10^{-3})^3 = 10^{-9}$ m³. Ainsi $8$ mm³ $= 8 \\times 10^{-9}$ m³.'
    },
    {
      q: 'Un débit est $\\dot{V} = 250$ L/min. Exprimé en m³/s, il vaut environ :',
      options: ['$4{,}17 \\times 10^{-3}$ m³/s', '$2{,}5 \\times 10^{-1}$ m³/s', '$4{,}17 \\times 10^{-5}$ m³/s', '$1{,}5 \\times 10^{1}$ m³/s'],
      answer: 0,
      correction: '$250$ L/min $= 0{,}25$ m³/min $= 0{,}25/60 \\approx 4{,}17 \\times 10^{-3}$ m³/s.'
    },
    {
      q: 'La puissance d\'une chaudière est $P = 85$ kW. Exprimée en MW, elle vaut :',
      options: ['$8{,}5 \\times 10^{-2}$ MW', '$8{,}5 \\times 10^{1}$ MW', '$8{,}5 \\times 10^{4}$ MW', '$8{,}5 \\times 10^{-5}$ MW'],
      answer: 0,
      correction: '$85$ kW $= 85 \\times 10^3$ W. Comme $1$ MW $= 10^6$ W, on a $85 \\times 10^3/10^6 = 8{,}5 \\times 10^{-2}$ MW.'
    },
    {
      q: '$\\dfrac{5 \\times 10^{8}}{2{,}5 \\times 10^{3}}$ vaut :',
      options: ['$2 \\times 10^5$', '$2{,}5 \\times 10^5$', '$2 \\times 10^{11}$', '$1{,}25 \\times 10^{5}$'],
      answer: 0,
      correction: '$5/2{,}5 = 2$ et $10^8/10^3 = 10^5$. Résultat : $2 \\times 10^5$.'
    },
    {
      q: 'Une eau contient une concentration en nitrates $C = 45$ mg/L. Exprimée en g/L, elle vaut :',
      options: ['$4{,}5 \\times 10^{-2}$ g/L', '$4{,}5 \\times 10^{2}$ g/L', '$4{,}5 \\times 10^{-5}$ g/L', '$4{,}5 \\times 10^{1}$ g/L'],
      answer: 0,
      correction: 'm = $10^{-3}$. Donc $45$ mg $= 45 \\times 10^{-3}$ g $= 4{,}5 \\times 10^{-2}$ g.'
    },
    {
      q: 'Écrire $56\\,300\\,000$ en notation scientifique :',
      options: ['$5{,}63 \\times 10^7$', '$563 \\times 10^5$', '$56{,}3 \\times 10^6$', '$5{,}63 \\times 10^{-7}$'],
      answer: 0,
      correction: '$56\\,300\\,000 = 5{,}63 \\times 10^7$ (coefficient compris entre 1 et 10).'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['conversion_prefix', 'calcul_R', 'puissance_10', 'conversion_carree', 'ecriture_scientifique']);

      if (type === 'conversion_prefix') {
        const pairs = [
          { val: pick([1, 2, 3, 4, 5, 10, 15, 22, 33, 47, 100]), from: 'k', exp: 3, unit: 'Ω', label: 'résistance en Ω' },
          { val: pick([10, 22, 47, 100, 220, 470]), from: 'μ', exp: -6, unit: 'F', label: 'capacité en F' },
          { val: pick([10, 20, 50, 100, 200, 500]), from: 'm', exp: -3, unit: 'A', label: 'courant en A' },
          { val: pick([1, 2, 3, 5, 7.5, 10, 15, 22]), from: 'k', exp: 3, unit: 'W', label: 'puissance en W' }
        ];
        const p = pick(pairs);
        const ans = p.val * Math.pow(10, p.exp);
        return {
          statement: `Convertir $${fr(p.val)}$ ${p.from}${p.unit} en ${p.unit} (${p.label}).`,
          answer: ans,
          tolerance: Math.abs(ans) * 0.001,
          unit: p.unit,
          hint: `Le préfixe ${p.from} correspond à $10^{${p.exp}}$. Multiplier par $10^{${p.exp}}$.`,
          solution: [`$${fr(p.val)}\\,${p.from}${p.unit} = ${fr(p.val)} \\times 10^{${p.exp}}\\,${p.unit} = ${fr(ans)}\\,${p.unit}$`]
        };
      }

      if (type === 'calcul_R') {
        const rho = 1.7e-8;
        const L = pick([10, 20, 30, 50, 100]);
        const S_mm2 = pick([1.5, 2.5, 4, 6, 10]);
        const S_m2 = S_mm2 * 1e-6;
        const R = Math.round(rho * L / S_m2 * 1000) / 1000;
        return {
          statement: `Calculer la résistance d'un câble de cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) de longueur $L = ${L}$ m et de section $S = ${fr(S_mm2)}$ mm² (en Ω, 3 chiffres significatifs).`,
          answer: R,
          tolerance: 0.005,
          unit: 'Ω',
          hint: `$S = ${fr(S_mm2)} \\times 10^{-6}$ m². $R = \\rho L / S$.`,
          solution: [`$S = ${fr(S_mm2)} \\times 10^{-6}$ m²`, `$R = \\dfrac{1{,}7 \\times 10^{-8} \\times ${L}}{${fr(S_mm2)} \\times 10^{-6}} = ${fr(R)}$ Ω`]
        };
      }

      if (type === 'conversion_carree') {
        const items = [
          { val: pick([2, 4, 6, 8, 10, 16, 25]), fromUnit: 'mm²', toUnit: 'm²', exp: -6, rule: '1 mm² = 10⁻⁶ m² (1 mm = 10⁻³ m, au carré)' },
          { val: pick([5, 10, 20, 50]), fromUnit: 'cm²', toUnit: 'm²', exp: -4, rule: '1 cm² = 10⁻⁴ m² (1 cm = 10⁻² m, au carré)' },
          { val: pick([2, 4, 8, 15]), fromUnit: 'mm³', toUnit: 'm³', exp: -9, rule: '1 mm³ = 10⁻⁹ m³ (1 mm = 10⁻³ m, au cube)' },
          { val: pick([10, 25, 50, 100]), fromUnit: 'cm³', toUnit: 'm³', exp: -6, rule: '1 cm³ = 10⁻⁶ m³ (1 cm = 10⁻² m, au cube)' }
        ];
        const it = pick(items);
        const ans = it.val * Math.pow(10, it.exp);
        const context = pick(['section d\'un câble électrique', 'section d\'une conduite hydraulique', 'volume d\'un échantillon prélevé en laboratoire', 'section d\'un profilé métallique en BTP']);
        return {
          statement: `Dans le cadre d'un(e) ${context}, une grandeur mesure ${it.val} ${it.fromUnit}. Convertissez-la en ${it.toUnit} (notation scientifique).`,
          answer: ans,
          tolerance: Math.abs(ans) * 0.01,
          unit: it.toUnit,
          hint: `${it.rule}. Multipliez ${it.val} par $10^{${it.exp}}$.`,
          solution: [`$${it.val}\\,\\text{${it.fromUnit}} = ${it.val} \\times 10^{${it.exp}}\\,\\text{${it.toUnit}} = ${fr(ans)}\\,\\text{${it.toUnit}}$`]
        };
      }

      if (type === 'ecriture_scientifique') {
        const rawNumbers = [
          { disp: '47\\,500', coeff: '4{,}75', exp: 4 },
          { disp: '0{,}000\\,023', coeff: '2{,}3', exp: -5 },
          { disp: '320\\,000', coeff: '3{,}2', exp: 5 },
          { disp: '0{,}000\\,009\\,1', coeff: '9{,}1', exp: -6 },
          { disp: '6\\,700', coeff: '6{,}7', exp: 3 },
          { disp: '0{,}000\\,48', coeff: '4{,}8', exp: -4 }
        ];
        const r = pick(rawNumbers);
        const context = pick(['mesure de résistivité en électrotechnique', 'grandeur relevée lors d\'un essai en laboratoire de chimie', 'mesure de pression en génie climatique', 'tolérance dimensionnelle en BTP']);
        return {
          statement: `Dans le cadre d'un(e) ${context}, une grandeur mesurée vaut $${r.disp}$. Écrivez-la en notation scientifique $a \\times 10^n$ (avec $1 \\leq a < 10$) et donnez la valeur de l'exposant $n$.`,
          answer: r.exp,
          tolerance: 0,
          unit: '',
          hint: `Déplacez la virgule jusqu'à obtenir un coefficient $a$ compris entre 1 et 10, et comptez le nombre de rangs déplacés : c'est l'exposant $n$.`,
          solution: [`$${r.disp} = ${r.coeff} \\times 10^{${r.exp}}$`, `L'exposant est $n = ${r.exp}$.`]
        };
      }

      const a = pick([2, 3, 4, 5, 6]);
      const n1 = pick([-3, -6, 3, 6]);
      const b = pick([2, 3, 4, 5]);
      const n2 = pick([-3, 3]);
      const rawCoeff = a * b;
      const rawExp = n1 + n2;
      let coeff = rawCoeff;
      let exp = rawExp;
      while (coeff >= 10) {
        coeff /= 10;
        exp += 1;
      }
      const needsRenorm = coeff !== rawCoeff;
      return {
        statement: `Calculer $(${a} \\times 10^{${n1}}) \\times (${b} \\times 10^{${n2}})$. Donner l'exposant du résultat en écriture scientifique (coefficient compris entre 1 et 10).`,
        answer: exp,
        tolerance: 0,
        unit: '',
        hint: needsRenorm
          ? `On multiplie d'abord les coefficients : $${a} \\times ${b} = ${rawCoeff}$, puis on additionne les exposants : $${n1} + ${n2} = ${rawExp}$. Comme $${rawCoeff} \\geq 10$, il faut encore renormaliser pour revenir à un coefficient entre 1 et 10.`
          : `On multiplie les coefficients : $${a} \\times ${b} = ${rawCoeff}$. On additionne les exposants : $${n1} + ${n2} = ${rawExp}$.`,
        solution: needsRenorm
          ? [
              `$(${a} \\times ${b}) \\times 10^{${n1}+${n2}} = ${rawCoeff} \\times 10^{${rawExp}}$`,
              `Le coefficient $${rawCoeff}$ n'est pas compris entre 1 et 10 : on écrit $${rawCoeff} = ${fr(coeff)} \\times 10$, donc $${rawCoeff} \\times 10^{${rawExp}} = ${fr(coeff)} \\times 10^{${exp}}$`,
              `En écriture scientifique : $${fr(coeff)} \\times 10^{${exp}}$ — l'exposant du résultat est ${exp}.`
            ]
          : [`$(${a} \\times ${b}) \\times 10^{${n1}+${n2}} = ${rawCoeff} \\times 10^{${rawExp}}$`, `En écriture scientifique : $${rawCoeff} \\times 10^{${exp}}$ — l'exposant du résultat est ${exp}.`]
      };
    }
  },

  probleme: {
    context: 'Un câblage électrique d\'une armoire industrielle utilise 3 types de conducteurs en cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) : câble A ($L = 2$ m, $S = 1{,}5$ mm²), câble B ($L = 5$ m, $S = 2{,}5$ mm²), câble C ($L = 0{,}5$ m, $S = 6$ mm²). Tous portent un courant $I = 16$ A sous $U_{source} = 230$ V.',
    figure: {
      svg: `
        <svg viewBox="0 0 460 200" role="img" aria-labelledby="pb-puissances-title pb-puissances-desc">
          <title id="pb-puissances-title">Trois cables en serie entre la source et la charge</title>
          <desc id="pb-puissances-desc">Un circuit en serie relie une source de 230 volts a une charge, en traversant successivement trois cables en cuivre : le cable A de 2 metres et 1,5 millimetre carre, le cable B de 5 metres et 2,5 millimetres carres, et le cable C de 0,5 metre et 6 millimetres carres. Le meme courant de 16 amperes traverse les trois, et leurs resistances s'additionnent.</desc>

          <rect x="20" y="70" width="60" height="60" rx="8" fill="color-mix(in srgb, var(--primary) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--primary) 36%, var(--border))"></rect>
          <text class="annotation-label" x="50" y="95" text-anchor="middle">Source</text>
          <text class="tick-label" x="50" y="113" text-anchor="middle">230 V</text>

          <line class="curve-main" x1="80" y1="90" x2="120" y2="90"></line>
          <rect x="120" y="76" width="70" height="28" rx="5" fill="color-mix(in srgb, var(--secondary) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 40%, var(--border))"></rect>
          <text class="annotation-label" x="155" y="95" text-anchor="middle">A</text>
          <text class="tick-label" x="155" y="66" text-anchor="middle">2 m — 1,5 mm²</text>

          <line class="curve-main" x1="190" y1="90" x2="215" y2="90"></line>
          <rect x="215" y="76" width="70" height="28" rx="5" fill="color-mix(in srgb, var(--secondary) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 40%, var(--border))"></rect>
          <text class="annotation-label" x="250" y="95" text-anchor="middle">B</text>
          <text class="tick-label" x="250" y="66" text-anchor="middle">5 m — 2,5 mm²</text>

          <line class="curve-main" x1="285" y1="90" x2="310" y2="90"></line>
          <rect x="310" y="76" width="70" height="28" rx="5" fill="color-mix(in srgb, var(--secondary) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 40%, var(--border))"></rect>
          <text class="annotation-label" x="345" y="95" text-anchor="middle">C</text>
          <text class="tick-label" x="345" y="66" text-anchor="middle">0,5 m — 6 mm²</text>

          <line class="curve-main" x1="380" y1="90" x2="410" y2="90"></line>
          <rect x="410" y="70" width="40" height="60" rx="8" fill="color-mix(in srgb, var(--accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 40%, var(--border))"></rect>
          <text class="tick-label" x="430" y="95" text-anchor="middle">charge</text>

          <line class="curve-main" x1="50" y1="130" x2="50" y2="160" stroke="var(--secondary)"></line>
          <line class="curve-main" x1="50" y1="160" x2="430" y2="160" stroke="var(--secondary)"></line>
          <line class="curve-main" x1="430" y1="160" x2="430" y2="130" stroke="var(--secondary)"></line>
          <polygon points="234,154 250,160 234,166" fill="var(--secondary)"></polygon>
          <text class="annotation-label" x="250" y="150" text-anchor="middle" fill="var(--secondary)">I = 16 A (identique partout)</text>

          <text class="annotation-label" x="20" y="40">R = ρL/S  avec ρ = 1,7·10⁻⁸ Ω·m</text>
          <text class="tick-label" x="20" y="190">R total = R_A + R_B + R_C   puis   ΔU = R total × I</text>
        </svg>
      `,
      caption: 'Trois tronçons en série : même courant partout, résistances qui s\'additionnent, chutes de tension qui se cumulent.'
    },
    tasks: [
      'Calculer la résistance de chaque câble : $R = \\rho L / S$ (convertir les sections en m²).',
      'Calculer la résistance totale et la chute de tension totale pour $I = 16$ A.',
      'Exprimer la chute de tension en % de la tension nominale et vérifier si elle respecte la norme NF C 15-100 (chute de tension ≤ 3 % en BT résidentiel).'
    ],
    solutions: [
      '$R_A = 1{,}7 \\times 10^{-8} \\times 2 / (1{,}5 \\times 10^{-6}) = 22{,}7$ mΩ. $R_B = 1{,}7 \\times 10^{-8} \\times 5 / (2{,}5 \\times 10^{-6}) = 34$ mΩ. $R_C = 1{,}7 \\times 10^{-8} \\times 0{,}5 / (6 \\times 10^{-6}) = 1{,}42$ mΩ.',
      '$R_{total} = 22{,}7 + 34 + 1{,}42 \\approx 58{,}1$ mΩ $= 0{,}0581$ Ω. $\\Delta U = R_{total} \\times I = 0{,}0581 \\times 16 = 0{,}93$ V.',
      '$\\Delta U / U = 0{,}93 / 230 \\times 100 \\approx 0{,}4\\%$. Largement inférieur à 3 % — le câblage est conforme.'
    ],
    finalAnswer: '$R_{total} \\approx 58$ mΩ, $\\Delta U \\approx 0{,}93$ V soit $0{,}4\\%$ — conforme NF C 15-100.'
  },

  evaluation: {
    title: 'Évaluation — Puissances & notation scientifique',
    duration: '25 min',
    questions: [
      {
        statement: 'Exprimer $47\\,000$ Ω en kΩ.',
        type: 'numeric',
        answer: 47,
        tolerance: 0,
        unit: 'kΩ',
        points: 1,
        correction: '$47\\,000 = 47 \\times 10^3$ Ω $= 47$ kΩ.'
      },
      {
        statement: 'Calculer $\\dfrac{6 \\times 10^{-4}}{3 \\times 10^{-7}}$ et donner le résultat sous la forme $a \\times 10^n$. Quelle est la valeur de $a$ ?',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 2,
        correction: '$\\dfrac{6}{3} = 2$ et $10^{-4}/10^{-7} = 10^{-4+7} = 10^3$. Résultat : $2 \\times 10^3$.'
      },
      {
        statement: 'La section d\'un câble est $S = 6$ mm². Convertie en m², c\'est :',
        type: 'multiple-choice',
        options: ['$6 \\times 10^{-3}$ m²', '$6 \\times 10^{-6}$ m²', '$6 \\times 10^{-4}$ m²', '$6 \\times 10^{-9}$ m²'],
        answer: 1,
        points: 2,
        correction: '1 mm $= 10^{-3}$ m, donc 1 mm² $= 10^{-6}$ m². Ainsi $6$ mm² $= 6 \\times 10^{-6}$ m².'
      },
      {
        statement: 'Calculer la résistance d\'un câble de cuivre ($\\rho = 1{,}7 \\times 10^{-8}$ Ω·m) de $L = 30$ m et $S = 4$ mm² $= 4 \\times 10^{-6}$ m². Donner $R$ en mΩ.',
        type: 'numeric',
        answer: 127.5,
        tolerance: 1,
        unit: 'mΩ',
        points: 3,
        correction: '$R = 1{,}7 \\times 10^{-8} \\times 30 / (4 \\times 10^{-6}) = 51 \\times 10^{-8} / (4 \\times 10^{-6}) = 12{,}75 \\times 10^{-2}$ Ω $= 127{,}5$ mΩ.'
      },
      {
        statement: 'Un condensateur $C = 220$ μF est chargé sous $U = 24$ V. L\'énergie stockée $E = \\frac{1}{2}CU^2$ vaut (en mJ) :',
        type: 'numeric',
        answer: 63.36,
        tolerance: 0.5,
        unit: 'mJ',
        points: 2,
        correction: '$E = 0{,}5 \\times 220 \\times 10^{-6} \\times 576 = 0{,}06336$ J $= 63{,}36$ mJ.'
      }
    ]
  }
});
