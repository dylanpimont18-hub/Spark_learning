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
      intro: 'En physique-chimie, on manipule des nombres qui vont de $10^{-15}$ m (taille d\'un proton) à $10^{26}$ m (taille de l\'univers observable) — un écart de $10^{41}$ ordres de grandeur ! La <strong>notation scientifique</strong> $a \\times 10^n$ (avec $1 \\leq a < 10$) est la seule façon de gérer ces échelles sans erreur.' +
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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Préfixe</th><th style="border:1px solid var(--border);padding:6px 14px">Symbole</th><th style="border:1px solid var(--border);padding:6px 14px">Puissance</th><th style="border:1px solid var(--border);padding:6px 14px">Valeur</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">nano</td><td style="border:1px solid var(--border);padding:6px 14px">n</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{-9}$</td><td style="border:1px solid var(--border);padding:6px 14px">0,000 000 001</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">micro</td><td style="border:1px solid var(--border);padding:6px 14px">μ</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{-6}$</td><td style="border:1px solid var(--border);padding:6px 14px">0,000 001</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">milli</td><td style="border:1px solid var(--border);padding:6px 14px">m</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{-3}$</td><td style="border:1px solid var(--border);padding:6px 14px">0,001</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">kilo</td><td style="border:1px solid var(--border);padding:6px 14px">k</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{3}$</td><td style="border:1px solid var(--border);padding:6px 14px">1 000</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">méga</td><td style="border:1px solid var(--border);padding:6px 14px">M</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{6}$</td><td style="border:1px solid var(--border);padding:6px 14px">1 000 000</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">giga</td><td style="border:1px solid var(--border);padding:6px 14px">G</td><td style="border:1px solid var(--border);padding:6px 14px">$10^{9}$</td><td style="border:1px solid var(--border);padding:6px 14px">1 000 000 000</td></tr></table>',
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
      generate() {
        const ctx = pick([
          {intro:'En astronomie, la distance entre deux étoiles est', emoji:'🌌'},
          {intro:'En chimie, la masse d\'un atome est', emoji:'🧪'},
          {intro:'En biologie, la taille d\'une bactérie est', emoji:'🦠'},
          {intro:'En informatique, la capacité d\'un disque dur est', emoji:'💾'},
          {intro:'En physique nucléaire, l\'énergie libérée est', emoji:'⚛️'}
        ]);
        // Ask to calculate 10^n1 * 10^n2
        const n1 = rand(-4, 2);
        const n2 = rand(-4, 2);
        const resultExp = n1 + n2;
        const mantisse = 3;
        const fullAnswer = parseFloat((mantisse * Math.pow(10, resultExp)).toPrecision(2));
        return {
          statement: `${ctx.emoji} ${ctx.intro} de l'ordre de $3 \\times 10^{${n1}}$. On multiplie cette valeur par $10^{${n2}}$. Calcule $3 \\times 10^{${n1}} \\times 10^{${n2}}$. Donne le résultat sous forme décimale standard.`,
          answer: fullAnswer,
          tolerance: Math.abs(fullAnswer) * 0.01 + 1e-15,
          unit: '',
          hint: 'Pour multiplier des puissances de 10, on additionne les exposants : $10^{a} \\times 10^{b} = 10^{a+b}$. Ici l\'exposant final sera $' + n1 + ' + (' + n2 + ')$.',
          solution: [
            `Regrouper les puissances : $3 \\times 10^{${n1}} \\times 10^{${n2}} = 3 \\times 10^{${n1} + (${n2})}$`,
            `Addition des exposants : $${n1} + (${n2}) = ${resultExp}$`,
            `Résultat : $3 \\times 10^{${resultExp}} = ${fullAnswer}$`
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
        '$\\dfrac{\\lambda_{\\text{UV}}}{d_{\\text{atome}}} = \\dfrac{2{,}00 \\times 10^{-7}}{1{,}06 \\times 10^{-10}} \\approx 1887 \\approx 2000$. La lumière UV a une longueur d\'onde environ 2000 fois plus grande que le diamètre d\'un atome d\'hydrogène !'
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
          statement: 'Combien de nanomètres ($\\text{nm}$) y a-t-il dans $5{,}3 \\times 10^{-6}\\,\\text{m}$ ?',
          type: 'numeric',
          answer: 5300,
          tolerance: 1,
          unit: 'nm',
          points: 2,
          correction: '$1\\,\\text{nm} = 10^{-9}\\,\\text{m}$. Donc $5{,}3 \\times 10^{-6}\\,\\text{m} = \\dfrac{5{,}3 \\times 10^{-6}}{10^{-9}}\\,\\text{nm} = 5{,}3 \\times 10^{3}\\,\\text{nm} = 5300\\,\\text{nm}$.'
        },
        {
          statement: 'Calculer $(4 \\times 10^{3})^2$. Donner le résultat en notation scientifique.',
          type: 'multiple-choice',
          options: ['$4 \\times 10^{6}$', '$8 \\times 10^{6}$', '$16 \\times 10^{6}$', '$1{,}6 \\times 10^{7}$'],
          answer: 3,
          points: 2,
          correction: '$(4 \\times 10^{3})^2 = 4^2 \\times (10^{3})^2 = 16 \\times 10^{6}$. En notation scientifique : $1{,}6 \\times 10^{7}$.'
        },
        {
          statement: 'La distance Terre-Soleil est environ $1{,}5 \\times 10^{11}\\,\\text{m}$. La vitesse de la lumière est $3 \\times 10^{8}\\,\\text{m/s}$. Combien de secondes met la lumière pour parcourir cette distance ?',
          type: 'numeric',
          answer: 500,
          tolerance: 1,
          unit: 's',
          points: 2,
          correction: '$t = \\dfrac{d}{v} = \\dfrac{1{,}5 \\times 10^{11}}{3 \\times 10^{8}} = 0{,}5 \\times 10^{3} = 500\\,\\text{s}$. La lumière met environ $500$ secondes (un peu plus de $8$ minutes) pour aller du Soleil à la Terre.'
        }
      ]
    }
  }
);
