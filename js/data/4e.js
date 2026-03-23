/* =========================================================
   Spark Learning – data/4e.js
   Modules 4e (Collège – classe de Quatrième)
   ========================================================= */

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
      intro: 'En physique-chimie, on manipule des nombres qui vont de $10^{-15}$ m (taille d\'un proton) à $10^{26}$ m (taille de l\'univers observable) — un écart de $10^{41}$ ordres de grandeur ! La notation scientifique $a \\times 10^n$ (avec $1 \\leq a < 10$) est la seule façon de gérer ces échelles sans erreur. <strong>Pourquoi cette contrainte sur $a$ ?</strong> Pour avoir une représentation unique : $0{,}47 \\times 10^{-4}$ et $4{,}7 \\times 10^{-5}$ sont égaux, mais seule la seconde est en notation scientifique standard. Pour convertir, il suffit de compter combien de rangs on déplace la virgule vers la droite (exposant positif si le nombre est grand, négatif si petit). Les préfixes SI (nano, micro, milli, kilo…) sont des raccourcis pour des puissances de 10 fréquentes.',
      definitions: [
        { term: 'Notation scientifique', def: 'Écriture d\'un nombre sous la forme $a \\times 10^n$ avec $1 \\leq a < 10$ et $n$ entier relatif.' },
        { term: 'Ordre de grandeur', def: 'Puissance de 10 la plus proche d\'un nombre. Ex : l\'ordre de grandeur de $350$ est $10^2$.' },
        { term: 'Mantisse', def: 'Le nombre $a$ dans $a \\times 10^n$ (la partie « significative »).' },
        { term: 'Préfixe SI', def: 'Raccourci pour une puissance de 10 dans le système international (ex : kilo = $10^3$).' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Écrire le nombre sous la forme $a \\times 10^n$ où $1 \\leq a < 10$. Pour cela, déplacer la virgule jusqu\'à obtenir un seul chiffre avant la virgule, et compter le nombre de déplacements (= exposant $n$). <strong>Exemple :</strong> $0{,}000\\ 47 \\rightarrow 4{,}7$ (virgule décalée de 5 rangs à droite) donc $4{,}7 \\times 10^{-5}$.',
          'Pour multiplier deux puissances : $10^a \\times 10^b = 10^{a+b}$. Pour diviser : $\\frac{10^a}{10^b} = 10^{a-b}$. <strong>Exemple :</strong> $3 \\times 10^4 \\times 2 \\times 10^{-2} = 6 \\times 10^{4+(-2)} = 6 \\times 10^{2}$.',
          'Connaître les préfixes SI : nano ($10^{-9}$), micro ($10^{-6}$), milli ($10^{-3}$), kilo ($10^3$), méga ($10^6$), giga ($10^9$). <strong>Exemple :</strong> $2{,}5\\,\\text{km} = 2{,}5 \\times 10^3\\,\\text{m} = 2500\\,\\text{m}$.'
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
      diagram: '<table><tr><th>Préfixe</th><th>Symbole</th><th>Puissance</th><th>Valeur</th></tr><tr><td>nano</td><td>n</td><td>$10^{-9}$</td><td>0,000 000 001</td></tr><tr><td>micro</td><td>μ</td><td>$10^{-6}$</td><td>0,000 001</td></tr><tr><td>milli</td><td>m</td><td>$10^{-3}$</td><td>0,001</td></tr><tr><td>kilo</td><td>k</td><td>$10^{3}$</td><td>1 000</td></tr><tr><td>méga</td><td>M</td><td>$10^{6}$</td><td>1 000 000</td></tr><tr><td>giga</td><td>G</td><td>$10^{9}$</td><td>1 000 000 000</td></tr></table>',
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
        // Ask to calculate 10^n1 * 10^n2
        const n1 = rand(-4, 2);
        const n2 = rand(-4, 2);
        const resultExp = n1 + n2;
        const mantisse = 3;
        const fullAnswer = parseFloat((mantisse * Math.pow(10, resultExp)).toPrecision(2));
        return {
          statement: `Calcule $3 \\times 10^{${n1}} \\times 10^{${n2}}$. Donne le résultat sous forme décimale standard.`,
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
  },

    {
    id: 'calcul-algebrique',
    level: 1, subject: 'maths',
    icon: '🔧',
    title: 'Calcul Algébrique – Isoler une inconnue',
    subtitle: 'Équations 1er degré, calcul littéral',
    keywords: ['Équation', 'Isoler x', 'Calcul littéral', 'Factorisation'],
    physics: 'Transformer toute formule physique : $\\rho = m/V$ → trouver $m$',

    cours: {
      intro: 'Isoler une inconnue, c\'est comme défaire un nœud : on défait les opérations dans l\'ordre inverse. <strong>Principe fondamental :</strong> l\'égalité est une balance — toute opération effectuée d\'un côté doit l\'être de l\'autre. En physique, la même formule sert dans les deux sens : $\\rho = \\dfrac{m}{V}$ permet de calculer $m$ (si on connaît $\\rho$ et $V$), ou $V$ (si on connaît $m$ et $\\rho$). Il n\'y a pas de "nouvelle formule" — juste de l\'algèbre. <strong>Mémo pour ne pas se perdre :</strong> identifier d\'abord ce que l\'on cherche ($x$), repérer ce qui l\'entoure (additions, multiplications…), défaire de l\'extérieur vers l\'intérieur. Toujours vérifier en réinjectant la solution dans l\'équation de départ.',
      definitions: [
        { term: 'Équation', def: 'Égalité comportant une (ou plusieurs) inconnue(s), vraie seulement pour certaines valeurs.' },
        { term: 'Inconnue', def: 'Quantité que l\'on cherche, souvent notée $x$, $I$, $V$, etc.' },
        { term: 'Opération inverse', def: 'L\'opération qui « annule » une autre : l\'addition annule la soustraction, la multiplication annule la division.' },
        { term: 'Vérification', def: 'Remplacer l\'inconnue par la valeur trouvée dans l\'équation de départ pour s\'assurer que l\'égalité est vraie.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier l\'inconnue à isoler et repérer les opérations qui "l\'entourent" (addition, multiplication, puissance, etc.). <strong>Exemple :</strong> dans $3x + 7 = 22$, l\'inconnue est $x$, elle est d\'abord multipliée par 3, puis on ajoute 7.',
          'Défaire les opérations dans l\'ordre inverse (de l\'extérieur vers l\'intérieur) en faisant la même chose des deux côtés. <strong>Exemple :</strong> $3x + 7 = 22 \\Rightarrow 3x = 22 - 7 = 15 \\Rightarrow x = \\frac{15}{3} = 5$.',
          'Vérifier en réinjectant le résultat. <strong>Exemple :</strong> $3 \\times 5 + 7 = 15 + 7 = 22$ ✓ C\'est cohérent !'
        ]
      },
      example: {
        statement: 'La formule de la vitesse est $v = \\dfrac{d}{t}$. Un train parcourt $d = 180$ km en $t = 1{,}5$ h. Calcule $v$, puis isole $d$ si $v = 90$ km/h et $t = 2{,}5$ h.',
        steps: [
          'Calcul direct : $v = \\dfrac{180}{1{,}5} = 120$ km/h.',
          'On veut isoler $d$ dans $v = \\dfrac{d}{t}$. On multiplie les deux côtés par $t$ : $d = v \\times t$.',
          'Application : $d = 90 \\times 2{,}5 = 225$ km.',
          'Vérification : $\\dfrac{225}{2{,}5} = 90$ km/h ✓'
        ],
        answer: '$v = 120$ km/h puis $d = 225$ km'
      },
      formulas: [
        'Si $ax + b = c$ alors $x = \\dfrac{c - b}{a}$ (avec $a \\neq 0$)',
        'Si $\\dfrac{a}{b} = c$ alors $a = b \\times c$ et $b = \\dfrac{a}{c}$',
        'Si $a \\cdot b = c$ alors $a = \\dfrac{c}{b}$ et $b = \\dfrac{c}{a}$'
      ],
      recap: [
        'L\'égalité est une balance : même opération des deux côtés',
        'Défaire les opérations de l\'extérieur vers l\'intérieur (inverse de la construction)',
        'Toujours vérifier en substituant la valeur trouvée',
        'En physique, isoler une grandeur dans une formule = même technique qu\'en algèbre'
      ],
      piege: 'Le piège numéro 1 : oublier d\'appliquer l\'opération des deux côtés. Si tu soustrais 5 à gauche, tu dois soustraire 5 à droite aussi. L\'égalité est une balance : ce que tu fais d\'un côté, tu le fais de l\'autre !'
    },

    quiz: [
      {
        q: 'Résoudre $3x + 7 = 22$.',
        options: ['$x = 5$', '$x = 9{,}67$', '$x = 4{,}33$', '$x = 15$'],
        answer: 0,
        correction: '$3x + 7 = 22 \\Rightarrow 3x = 22 - 7 = 15 \\Rightarrow x = \\frac{15}{3} = 5$. Vérification : $3 \\times 5 + 7 = 15 + 7 = 22$ ✓'
      },
      {
        q: 'Dans la formule $P = U \\cdot I$, si $P = 60$ W et $U = 12$ V, quelle est la valeur de $I$ ?',
        options: ['$I = 720$ A', '$I = 5$ A', '$I = 48$ A', '$I = 0{,}2$ A'],
        answer: 1,
        correction: 'On isole $I$ : $I = \\frac{P}{U} = \\frac{60}{12} = 5$ A. En physique, isoler une inconnue dans une formule, c\'est exactement la même technique qu\'en algèbre pur !'
      },
      {
        q: 'Un élève résout $2x - 6 = 10$ et trouve $x = 2$. Quelle vérification montre que c\'est faux ?',
        options: [
          'On vérifie : $2 \\times 2 - 6 = -2 \\neq 10$. L\'élève a divisé par $2$ avant de soustraire $6$, au lieu de l\'inverse.',
          'On vérifie : $2 \\times 2 - 6 = -2 = 10$ ✓. L\'élève a bien calculé.',
          'Il n\'y a pas de vérification possible pour les équations.',
          'On vérifie : $2 \\times 2 = 4$, puis $4 - 6 = -2$, et $-2 = 10$ ✓.'
        ],
        answer: 0,
        correction: 'Vérification : $2 \\times 2 - 6 = 4 - 6 = -2 \\neq 10$. Faux ! La bonne résolution : $2x - 6 = 10 \\Rightarrow 2x = 10 + 6 = 16 \\Rightarrow x = 8$. Vérification : $2 \\times 8 - 6 = 16 - 6 = 10$ ✓. L\'élève a sûrement divisé par 2 en premier ($10 / 2 = 5$, puis $5 - 6 + ?$)  — il faut toujours isoler le terme en $x$ avant de diviser.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 9);
        const x = rand(2, 12);
        const b = rand(1, 20);
        const c = a * x + b;
        return {
          statement: `Résoudre l'équation : $${a}x + ${b} = ${c}$. Quelle est la valeur de $x$ ?`,
          answer: x,
          tolerance: 0.001,
          unit: '',
          hint: `Commence par soustraire $${b}$ des deux côtés de l'égalité pour obtenir $${a}x$ seul à gauche. Ensuite, divise par $${a}$.`,
          solution: [
            `Équation de départ : $${a}x + ${b} = ${c}$`,
            `Soustraction de $${b}$ des deux membres : $${a}x = ${c} - ${b} = ${c - b}$`,
            `Division par $${a}$ : $x = \\dfrac{${c - b}}{${a}} = ${x}$`
          ]
        };
      }
    },

    probleme: {
      context: 'La masse volumique (densité) d\'une substance est définie par la relation $\\rho = \\dfrac{m}{V}$ où $\\rho$ est en kg/m³, $m$ est la masse en kg et $V$ est le volume en m³. L\'aluminium a une masse volumique $\\rho = 2700$ kg/m³. On souhaite fabriquer une pièce en aluminium de volume $V = 5 \\times 10^{-4}$ m³.',
      schema: null,
      tasks: [
        'À partir de la formule $\\rho = \\dfrac{m}{V}$, isoler la masse $m$.',
        'Calculer numériquement la masse $m$ de la pièce.',
        'Exprimer le résultat en grammes et vérifier que l\'ordre de grandeur est cohérent.'
      ],
      solutions: [
        'On isole $m$ : $\\rho = \\frac{m}{V}$. En multipliant les deux membres par $V$ : $m = \\rho \\times V$.',
        '$m = 2700 \\times 5 \\times 10^{-4} = 2700 \\times 0{,}0005 = 1{,}35$ kg.',
        '$m = 1{,}35$ kg $ = 1350$ g. C\'est cohérent : une pièce d\'aluminium d\'un demi-litre (~500 cm³) pèse environ 1,35 kg.'
      ],
      finalAnswer: '$m = 1{,}35$ kg $= 1350$ g'
    },

    evaluation: {
      title: 'Évaluation — Calcul Algébrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre l\'équation $5x - 3 = 27$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$5x - 3 = 27 \\Rightarrow 5x = 27 + 3 = 30 \\Rightarrow x = \\dfrac{30}{5} = 6$. Vérification : $5 \\times 6 - 3 = 30 - 3 = 27$ ✓'
        },
        {
          statement: 'Dans la formule $v = \\dfrac{d}{t}$, exprimer $t$ en fonction de $v$ et $d$.',
          type: 'multiple-choice',
          options: ['$t = v \\times d$', '$t = \\dfrac{d}{v}$', '$t = \\dfrac{v}{d}$', '$t = d - v$'],
          answer: 1,
          points: 2,
          correction: '$v = \\dfrac{d}{t}$. On multiplie les deux côtés par $t$ : $v \\times t = d$. Puis on divise par $v$ : $t = \\dfrac{d}{v}$.'
        },
        {
          statement: 'Résoudre $\\dfrac{x}{4} + 7 = 10$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{x}{4} + 7 = 10 \\Rightarrow \\dfrac{x}{4} = 10 - 7 = 3 \\Rightarrow x = 3 \\times 4 = 12$. Vérification : $\\dfrac{12}{4} + 7 = 3 + 7 = 10$ ✓'
        },
        {
          statement: 'L\'énergie cinétique est $E_c = \\dfrac{1}{2}mv^2$. Si $E_c = 100\\,\\text{J}$ et $m = 8\\,\\text{kg}$, quelle est la valeur de $v$ ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: 'm/s',
          points: 2,
          correction: '$E_c = \\dfrac{1}{2}mv^2 \\Rightarrow v^2 = \\dfrac{2E_c}{m} = \\dfrac{2 \\times 100}{8} = 25 \\Rightarrow v = \\sqrt{25} = 5\\,\\text{m/s}$.'
        },
        {
          statement: 'Quelle est la bonne résolution de $-2x + 8 = 14$ ?',
          type: 'multiple-choice',
          options: ['$x = 11$', '$x = 3$', '$x = -3$', '$x = -11$'],
          answer: 2,
          points: 2,
          correction: '$-2x + 8 = 14 \\Rightarrow -2x = 14 - 8 = 6 \\Rightarrow x = \\dfrac{6}{-2} = -3$. Vérification : $-2 \\times (-3) + 8 = 6 + 8 = 14$ ✓'
        }
      ]
    }
  },

    {
    id: '4e-pythagore',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Théorème de Pythagore',
    subtitle: 'Triangle rectangle, calcul de la troisième longueur',
    keywords: ['Hypoténuse', 'Triangle rectangle', 'Carré', 'Racine carrée', 'Réciproque'],
    physics: 'Norme d\'un vecteur force, distance résultante, calcul de composantes',

    cours: {
      intro: 'Le théorème de Pythagore dit que dans tout triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés : $c^2 = a^2 + b^2$. <strong>L\'hypoténuse est toujours le côté opposé à l\'angle droit</strong> — c\'est aussi le plus long côté. La réciproque est puissante : si $c^2 = a^2 + b^2$, alors le triangle est rectangle. En physique, cette formule donne la norme d\'un vecteur résultant ($\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$) et la distance entre deux points. <strong>Attention au sens de la formule :</strong> pour trouver un côté adjacent, on utilise $a = \\sqrt{c^2 - b^2}$ — on soustrait, pas on additionne ! Vérification : le résultat doit être inférieur à l\'hypoténuse.',
      definitions: [
        { term: 'Hypoténuse', def: 'Côté le plus long du triangle rectangle, situé en face de l\'angle droit.' },
        { term: 'Triangle rectangle', def: 'Triangle possédant un angle droit (90°).' },
        { term: 'Réciproque', def: 'Si $a^2 + b^2 = c^2$ exactement, alors le triangle est rectangle (l\'angle droit est opposé au côté $c$).' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier le triangle rectangle et son hypoténuse (le côté en face de l\'angle droit — toujours le plus long). <strong>Exemple :</strong> un triangle avec un angle droit en $C$ a son hypoténuse $[AB]$.',
          'Appliquer le théorème : $c^2 = a^2 + b^2$ où $c$ est l\'hypoténuse et $a$, $b$ les deux autres côtés. <strong>Exemple :</strong> $AB^2 = AC^2 + BC^2$.',
          'Si on cherche un côté (non hypoténuse) : $a^2 = c^2 - b^2 \\Rightarrow a = \\sqrt{c^2 - b^2}$. <strong>Exemple :</strong> si $AB = 13$ et $BC = 5$, alors $AC = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$.',
          'Vérifier : l\'hypoténuse est toujours le plus grand côté. Ici $13 > 12 > 5$ ✓'
        ]
      },
      example: {
        statement: 'Un poteau de $4$ m de haut est maintenu par un câble fixé au sol à $3$ m du pied. Quelle est la longueur du câble ?',
        steps: [
          'Le poteau, le sol et le câble forment un triangle rectangle (angle droit entre le poteau et le sol).',
          'Le câble est l\'hypoténuse $c$, le poteau vaut $a = 4$ m et la distance au sol $b = 3$ m.',
          '$c^2 = a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$.',
          '$c = \\sqrt{25} = 5$ m.'
        ],
        answer: 'Le câble mesure $5$ m (triangle 3-4-5).'
      },
      formulas: [
        '$c^2 = a^2 + b^2$ (avec $c$ = hypoténuse)',
        '$a = \\sqrt{c^2 - b^2}$',
        '$\\|\\vec{v}\\| = \\sqrt{v_x^2 + v_y^2}$ (norme d\'un vecteur 2D)'
      ],
      recap: [
        '$c^2 = a^2 + b^2$ ne fonctionne QUE dans un triangle rectangle',
        'L\'hypoténuse est toujours en face de l\'angle droit et c\'est le plus grand côté',
        'Pour trouver un petit côté : on soustrait ($a = \\sqrt{c^2 - b^2}$)',
        'La réciproque permet de prouver qu\'un triangle est rectangle'
      ],
      piege: 'Le théorème ne s\'applique QU\'aux triangles rectangles. Avant de l\'utiliser, identifie l\'angle droit. Le côté en face de l\'angle droit est l\'hypoténuse — c\'est toujours le plus grand côté. Si tu doutes, la réciproque permet de vérifier : si $a^2 + b^2 = c^2$, alors le triangle est rectangle en... l\'angle opposé à $c$.'
    },

    quiz: [
      {
        q: 'Un triangle a deux côtés de $3$ et $4$. Si c\'est un triangle rectangle, quelle est la longueur de son hypoténuse ?',
        options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
        answer: 0,
        correction: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. C\'est le célèbre triangle 3-4-5.'
      },
      {
        q: 'Dans un triangle rectangle, l\'hypoténuse mesure $13\\,\\text{cm}$ et un côté $5\\,\\text{cm}$. Quel est le troisième côté ?',
        options: ['$8\\,\\text{cm}$', '$12\\,\\text{cm}$', '$\\sqrt{18}\\,\\text{cm}$', '$\\sqrt{144}\\,\\text{cm}$'],
        answer: 1,
        correction: '$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\,\\text{cm}$. Triangle 5-12-13.'
      },
      {
        q: 'Un triangle a des côtés $5$, $7$ et $9$. Est-il rectangle ? Un élève vérifie $5^2 + 7^2 = 9^2$ et trouve $25 + 49 = 74 \\neq 81$. Que conclut-il ?',
        options: [
          'Oui, car $74$ est proche de $81$.',
          'Non, le triangle n\'est pas rectangle car $5^2 + 7^2 \\neq 9^2$. La réciproque exige une égalité exacte.',
          'On ne peut pas conclure sans mesurer les angles.',
          'Oui, si on arrondit : $\\sqrt{74} \\approx 8{,}6 \\approx 9$.'
        ],
        answer: 1,
        correction: 'La réciproque du théorème de Pythagore est catégorique : le triangle est rectangle si et seulement si $a^2 + b^2 = c^2$ exactement. $74 \\neq 81$, donc ce triangle n\'est pas rectangle. La proximité de valeurs ne suffit pas — une vérification approchée peut induire en erreur, surtout avec des valeurs irrationnelles.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pythagorean = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15]];
        const triple = pick(pythagorean);
        const [a, b, c] = triple;
        const askHyp = Math.random() > 0.5;
        if (askHyp) {
          return {
            statement: `Un triangle rectangle a ses deux côtés de l'angle droit qui mesurent $${a}$ et $${b}$. Calcule l'hypoténuse (valeur exacte).`,
            answer: c,
            tolerance: 0.01,
            unit: '',
            hint: `Applique $c = \\sqrt{a^2 + b^2} = \\sqrt{${a}^2 + ${b}^2}$.`,
            solution: [`$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a*a} + ${b*b}} = \\sqrt{${c*c}} = ${c}$`]
          };
        } else {
          return {
            statement: `Un triangle rectangle a une hypoténuse de $${c}$ et un côté de $${a}$. Calcule le troisième côté.`,
            answer: b,
            tolerance: 0.01,
            unit: '',
            hint: `$\\text{côté} = \\sqrt{c^2 - a^2} = \\sqrt{${c}^2 - ${a}^2}$.`,
            solution: [`$b = \\sqrt{${c}^2 - ${a}^2} = \\sqrt{${c*c} - ${a*a}} = \\sqrt{${b*b}} = ${b}$`]
          };
        }
      }
    },

    probleme: {
      context: 'Un bateau part du port O. Il navigue $30\\,\\text{km}$ vers l\'Est (direction $Ox$), puis $40\\,\\text{km}$ vers le Nord (direction $Oy$).',
      schema: null,
      tasks: [
        'Dessiner schématiquement le trajet et identifier le triangle rectangle formé.',
        'Calculer la distance en ligne droite entre le port O et la position finale du bateau.',
        'Si le bateau avait navigué en ligne droite jusqu\'à sa position finale, quelle direction aurait-il prise par rapport à l\'Est ? (angle $\\theta = \\arctan(40/30)$, valeur approchée)'
      ],
      solutions: [
        'Le trajet forme deux côtés d\'un triangle rectangle : côté Est = 30 km (horizontal) et côté Nord = 40 km (vertical).',
        '$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\text{km}$.',
        '$\\theta = \\arctan\\left(\\dfrac{40}{30}\\right) = \\arctan(1{,}33) \\approx 53°$ au-dessus de l\'Est.'
      ],
      finalAnswer: 'Distance directe $= 50\\,\\text{km}$, angle $\\approx 53°$ par rapport à l\'Est'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Pythagore',
      duration: '30 min',
      questions: [
        {
          statement: 'Un triangle rectangle a des côtés de l\'angle droit mesurant $6\\,\\text{cm}$ et $8\\,\\text{cm}$. Calculer l\'hypoténuse.',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle rectangle a une hypoténuse de $17\\,\\text{cm}$ et un côté de $15\\,\\text{cm}$. Calculer le troisième côté.',
          type: 'numeric',
          answer: 8,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle a des côtés de $7$, $24$ et $25$. Est-il rectangle ?',
          type: 'multiple-choice',
          options: ['Non, car $7^2 + 24^2 = 625 \\neq 25^2$', 'Oui, car $7^2 + 24^2 = 49 + 576 = 625 = 25^2$', 'On ne peut pas savoir sans mesurer les angles', 'Non, car $7 + 24 > 25$'],
          answer: 1,
          points: 2,
          correction: 'Par la réciproque du théorème de Pythagore : $7^2 + 24^2 = 49 + 576 = 625$ et $25^2 = 625$. Comme $a^2 + b^2 = c^2$, le triangle est rectangle.'
        },
        {
          statement: 'Une échelle de $5\\,\\text{m}$ est posée contre un mur. Le pied de l\'échelle est à $3\\,\\text{m}$ du mur. À quelle hauteur atteint-elle le mur ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0.01,
          unit: 'm',
          points: 2,
          correction: 'Le mur, le sol et l\'échelle forment un triangle rectangle. L\'échelle est l\'hypoténuse ($5\\,\\text{m}$). $h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4\\,\\text{m}$.'
        },
        {
          statement: 'Quelle est la distance entre les points $A(1;2)$ et $B(4;6)$ ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. On utilise Pythagore avec les différences de coordonnées.'
        }
      ]
    }
  },

    {
    id: '4e-fractions-mult-div',
    level: 1, subject: 'maths',
    icon: '✖️',
    title: 'Fractions : Multiplication et Division',
    subtitle: 'Produit et quotient de fractions',
    keywords: ['Produit de fractions', 'Quotient', 'Fraction inverse', 'Simplification croisée'],
    physics: 'Formules enchaînées : $v = \\frac{d}{t}$, $\\rho = \\frac{m}{V}$, changements d\'unités',

    cours: {
      intro: 'Multiplier des fractions est plus simple que de les additionner : pas besoin de dénominateur commun — on multiplie numérateurs entre eux et dénominateurs entre eux. La <strong>simplification croisée</strong> évite les grands nombres : avant de multiplier, simplifier en diagonale ($\\frac{3}{4} \\times \\frac{8}{9}$ → simplifier $3$ et $9$ par $3$, $4$ et $8$ par $4$ → $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$). Diviser par une fraction revient à multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$. <strong>Intuition :</strong> diviser par $\\dfrac{1}{2}$ revient à multiplier par $2$ (couper en demi → deux fois plus de morceaux). En physique, les conversions d\'unités enchaînent des multiplications/divisions de fractions : $1$ m/s $= \\dfrac{1\\,\\text{m}}{1\\,\\text{s}} = \\dfrac{1\\,\\text{m}}{1\\,\\text{s}} \\times \\dfrac{3600\\,\\text{s}}{1\\,\\text{h}} = 3600$ m/h = $3{,}6$ km/h.',
      definitions: [
        { term: 'Produit de fractions', def: 'On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$.' },
        { term: 'Inverse d\'une fraction', def: 'L\'inverse de $\\dfrac{a}{b}$ (avec $a \\neq 0$) est $\\dfrac{b}{a}$. Leur produit vaut $1$ : $\\dfrac{a}{b} \\times \\dfrac{b}{a} = 1$.' },
        { term: 'Quotient de fractions', def: 'Diviser par une fraction, c\'est multiplier par son inverse : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c}$.' },
        { term: 'Simplification croisée', def: 'Avant de multiplier, on simplifie un numérateur avec le dénominateur de l\'autre fraction (en diagonale) par un diviseur commun.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Multiplication : $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}$. Simplifier avant de multiplier si possible (simplification croisée). <strong>Exemple :</strong> $\\dfrac{2}{5} \\times \\dfrac{3}{7} = \\dfrac{2 \\times 3}{5 \\times 7} = \\dfrac{6}{35}$.',
          'Division : $\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{a \\times d}{b \\times c}$. Diviser par une fraction = multiplier par son inverse. <strong>Exemple :</strong> $\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8}$.',
          'Simplification croisée : avant de multiplier, simplifier numérateur avec dénominateur en diagonale. <strong>Exemple :</strong> $\\dfrac{6}{7} \\times \\dfrac{14}{9}$ → on simplifie $6$ et $9$ par $3$ ($\\to 2$ et $3$), $7$ et $14$ par $7$ ($\\to 1$ et $2$) → $\\dfrac{2}{1} \\times \\dfrac{2}{3} = \\dfrac{4}{3}$.'
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
      generate() {
        const a = rand(2, 7), b = rand(2, 8), c = rand(2, 6), d = rand(2, 7);
        const num = a * c, den = b * d;
        const pgcd = (x, y) => y === 0 ? x : pgcd(y, x % y);
        const g = pgcd(num, den);
        const answer = parseFloat((num / den).toFixed(4));
        return {
          statement: `Calculer $\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${d}}$. Donner le résultat décimal.`,
          answer,
          tolerance: 0.001,
          unit: '',
          hint: `Multiplier numérateurs ensemble et dénominateurs ensemble : $\\dfrac{${a} \\times ${c}}{${b} \\times ${d}}$.`,
          solution: [
            `$\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${d}} = \\dfrac{${num}}{${den}} = \\dfrac{${num/g}}{${den/g}}$`,
            `Valeur décimale : $${answer}$`
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
          statement: 'Un réservoir contient $\\dfrac{3}{5}$ de litre d\'eau. On en utilise $\\dfrac{2}{3}$. Quel volume d\'eau a-t-on utilisé (en litres) ?',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.001,
          unit: 'L',
          points: 2,
          correction: 'Volume utilisé $= \\dfrac{2}{3} \\times \\dfrac{3}{5} = \\dfrac{6}{15} = \\dfrac{2}{5} = 0{,}4\\,\\text{L}$.'
        },
        {
          statement: 'Quel est l\'inverse de $\\dfrac{7}{3}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{-7}{3}$', '$\\dfrac{3}{7}$', '$\\dfrac{-3}{7}$', '$\\dfrac{7}{3}$'],
          answer: 1,
          points: 2,
          correction: 'L\'inverse d\'une fraction $\\dfrac{a}{b}$ est $\\dfrac{b}{a}$. L\'inverse de $\\dfrac{7}{3}$ est $\\dfrac{3}{7}$. Vérification : $\\dfrac{7}{3} \\times \\dfrac{3}{7} = \\dfrac{21}{21} = 1$ ✓'
        },
        {
          statement: 'Calculer $\\dfrac{4}{5} \\times \\dfrac{3}{2} \\div \\dfrac{6}{5}$. Donner le résultat décimal.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{4}{5} \\times \\dfrac{3}{2} \\div \\dfrac{6}{5} = \\dfrac{4}{5} \\times \\dfrac{3}{2} \\times \\dfrac{5}{6} = \\dfrac{4 \\times 3 \\times 5}{5 \\times 2 \\times 6} = \\dfrac{60}{60} = 1$.'
        }
      ]
    }
  },

    {
    id: '4e-relatifs-mult-div',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Relatifs : multiplication et division',
    subtitle: 'Règle des signes, produit, quotient',
    keywords: ['Nombres relatifs', 'Règle des signes', 'Produit', 'Quotient', 'Négatif'],
    physics: true,
    cours: {
      intro: 'La règle des signes pour la multiplication est intuitive si on pense aux opposés : multiplier par $-1$ inverse le signe. Donc $(-1) \\times (-1) = 1$ car « l\'opposé de l\'opposé ». Règle générale : pair de $-$ → $+$, impair de $-$ → $-$. <strong>Piège classique avec les exposants :</strong> $(-3)^2 = (-3) \\times (-3) = +9$ (le $-$ est dans la base), mais $-3^2 = -(3 \\times 3) = -9$ (l\'exposant s\'applique uniquement au $3$). Les parenthèses sont essentielles. En physique, les grandeurs algébriques (tension, position, vitesse) peuvent être négatives — le signe indique un sens (opposé à la convention positive choisie).',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe ($+$ ou $-$) et d\'une valeur absolue. Exemples : $+7$, $-3{,}5$.' },
        { term: 'Valeur absolue', def: 'Distance à zéro sur la droite graduée, toujours positive. $|{-5}| = 5$ et $|{+5}| = 5$.' },
        { term: 'Règle des signes', def: 'Deux facteurs de même signe donnent un produit positif ; deux facteurs de signes contraires donnent un produit négatif.' },
        { term: 'Opposé d\'un nombre', def: 'L\'opposé de $a$ est $-a$. Leur somme vaut $0$ : $a + (-a) = 0$.' }
      ],
      method: {
        title: 'Règle des signes',
        steps: [
          'Calculer la valeur absolue du résultat (comme si les nombres étaient positifs). <strong>Exemple :</strong> pour $(-6) \\times (+4)$, la valeur absolue est $6 \\times 4 = 24$.',
          'Déterminer le signe : $(+) \\times (+) = (+)$, $(-) \\times (-) = (+)$, $(+) \\times (-) = (-)$, $(-) \\times (+) = (-)$. <strong>Exemple :</strong> $(-6) \\times (+4)$ → signes contraires → résultat négatif → $-24$.',
          'Pour une suite de multiplications : compter le nombre de facteurs négatifs. Pair → positif ; impair → négatif. <strong>Exemple :</strong> $(-2) \\times (-3) \\times (-1)$ → $3$ facteurs négatifs (impair) → résultat négatif → $-6$.',
          'La division suit les mêmes règles de signes que la multiplication. <strong>Exemple :</strong> $(-15) \\div (-3) = +5$ (deux négatifs → positif).'
        ]
      },
      example: {
        statement: 'Un sous-marin plonge de $8$ m par minute pendant $5$ minutes, puis remonte de $3$ m par minute pendant $4$ minutes. Quelle est la variation totale de profondeur ?',
        steps: [
          'Descente : $(-8) \\times 5 = -40$ m (le signe $-$ indique qu\'on descend).',
          'Remontée : $(+3) \\times 4 = +12$ m (le signe $+$ indique qu\'on remonte).',
          'Variation totale : $(-40) + (+12) = -28$ m.'
        ],
        answer: 'Le sous-marin a une variation totale de $-28$ m (il est $28$ m plus profond qu\'au départ).'
      },
      formulas: [
        '$(+a) \\times (+b) = +ab$',
        '$(-a) \\times (-b) = +ab$',
        '$(+a) \\times (-b) = -ab$',
        '$(-a) \\div (+b) = -\\dfrac{a}{b}$'
      ],
      recap: [
        'Mêmes signes → produit positif ; signes contraires → produit négatif.',
        'La division suit exactement les mêmes règles de signes que la multiplication.',
        'Pour un produit de plusieurs facteurs : compter les facteurs négatifs. Pair → $+$, impair → $-$.',
        'Attention aux parenthèses : $(-3)^2 = +9$ mais $-3^2 = -9$.'
      ],
      piege: 'Piège : $(-3)^2 = (-3) \\times (-3) = +9$, mais $-3^2 = -(3 \\times 3) = -9$. Les parenthèses changent tout ! Sans parenthèses, l\'exposant s\'applique uniquement au $3$, pas au signe.'
    },
    quiz: [
      {
        q: 'Quel est le résultat de $(-4) \\times (-5)$ ?',
        options: ['$-20$', '$+20$', '$-9$', '$+9$'],
        answer: 1,
        correction: 'Deux négatifs → positif. $(-4) \\times (-5) = +20$.'
      },
      {
        q: 'Quel est le signe de $(-2) \\times (+3) \\times (-1) \\times (-4)$ ?',
        options: ['Positif', 'Négatif', 'Nul', 'Indéterminé'],
        answer: 1,
        correction: 'On compte les facteurs négatifs : $(-2)$, $(-1)$, $(-4)$ → $3$ facteurs négatifs. $3$ est impair → résultat négatif. Valeur : $-(2 \\times 3 \\times 1 \\times 4) = -24$.'
      },
      {
        q: 'Quel est le signe de $(-2)^3$ ? Et de $(-2)^4$ ?',
        options: [
          '$(-2)^3 > 0$ et $(-2)^4 > 0$ : les exposants impairs et pairs donnent tous des positifs.',
          '$(-2)^3 < 0$ et $(-2)^4 > 0$ : exposant impair → négatif, exposant pair → positif.',
          '$(-2)^3 > 0$ et $(-2)^4 < 0$ : l\'inverse.',
          'Les deux sont négatifs car la base est négative.'
        ],
        answer: 1,
        correction: '$(-2)^3 = (-2) \\times (-2) \\times (-2) = 4 \\times (-2) = -8 < 0$ (3 facteurs négatifs = nombre impair de $-$). $(-2)^4 = (-2)^3 \\times (-2) = (-8) \\times (-2) = +16 > 0$ (4 facteurs = pair). Règle : $(-a)^n$ est positif si $n$ est pair, négatif si $n$ est impair.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = pick([-7,-6,-5,-4,-3,3,4,5,6,7]);
        const b = pick([-6,-5,-4,-3,3,4,5,6]);
        return {
          statement: `Calcule $(${a}) \\times (${b})$.`,
          answer: a * b,
          tolerance: 0,
          unit: '',
          hint: `Règle des signes : les signes sont ${a < 0 && b < 0 ? 'identiques (deux négatifs) → résultat positif' : a > 0 && b > 0 ? 'identiques (deux positifs) → résultat positif' : 'contraires → résultat négatif'}.`,
          solution: [
            `Valeur absolue : $${Math.abs(a)} \\times ${Math.abs(b)} = ${Math.abs(a * b)}$.`,
            `Signe : ${(a < 0) === (b < 0) ? 'mêmes signes → positif' : 'signes contraires → négatif'}.`,
            `Résultat : $${a * b}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'La température dans une ville chute de $3°C$ par heure pendant $5$ heures consécutives, puis remonte de $2°C$ par heure pendant $3$ heures.',
      tasks: [
        'Calculer la variation totale de température durant la baisse.',
        'Calculer la variation totale durant la remontée.',
        'Si la température initiale était $4°C$, quelle est la température finale ?'
      ],
      solutions: [
        'Baisse : $(-3) \\times 5 = -15°C$.',
        'Remontée : $(+2) \\times 3 = +6°C$.',
        'Température finale : $4 + (-15) + 6 = -5°C$.'
      ],
      finalAnswer: 'La température finale est $-5°C$.'
    },

    evaluation: {
      title: 'Évaluation — Relatifs : Multiplication et Division',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $(-7) \\times (+8)$.',
          type: 'numeric',
          answer: -56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes contraires → résultat négatif. $7 \\times 8 = 56$. Donc $(-7) \\times (+8) = -56$.'
        },
        {
          statement: 'Calculer $(-3) \\times (-4) \\times (-2)$.',
          type: 'numeric',
          answer: -24,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On compte les facteurs négatifs : $3$ (nombre impair) → résultat négatif. Valeur : $3 \\times 4 \\times 2 = 24$. Résultat : $-24$.'
        },
        {
          statement: 'Quelle est la différence entre $(-5)^2$ et $-5^2$ ?',
          type: 'multiple-choice',
          options: [
            'Les deux valent $25$',
            'Les deux valent $-25$',
            '$(-5)^2 = 25$ et $-5^2 = -25$',
            '$(-5)^2 = -25$ et $-5^2 = 25$'
          ],
          answer: 2,
          points: 2,
          correction: '$(-5)^2 = (-5) \\times (-5) = 25$ (le $-$ est dans la base, élevé au carré). $-5^2 = -(5 \\times 5) = -25$ (l\'exposant s\'applique uniquement au $5$, puis on applique le signe $-$). Les parenthèses changent tout !'
        },
        {
          statement: 'Calculer $\\dfrac{(-36)}{(+9)}$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes contraires → résultat négatif. $36 \\div 9 = 4$. Donc $\\dfrac{-36}{+9} = -4$.'
        },
        {
          statement: 'Un sous-marin descend de $15\\,\\text{m}$ toutes les $3\\,\\text{min}$. Quelle variation de profondeur subit-il en $12\\,\\text{min}$ ?',
          type: 'numeric',
          answer: -60,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: 'Variation par minute : $\\dfrac{-15}{3} = -5\\,\\text{m/min}$. En $12\\,\\text{min}$ : $(-5) \\times 12 = -60\\,\\text{m}$. Le sous-marin descend de $60\\,\\text{m}$.'
        }
      ]
    }
  },

    {
    id: '4e-triangle-rectangle-cercle',
    level: 1, subject: 'maths',
    icon: '⭕',
    title: 'Triangle rectangle et cercle circonscrit',
    subtitle: 'Angle inscrit dans un demi-cercle (Thalès)',
    keywords: ['Triangle rectangle', 'Cercle circonscrit', 'Angle inscrit', 'Diamètre', 'Hypoténuse'],
    physics: false,
    cours: {
      intro: 'Le théorème de l\'angle inscrit dans un demi-cercle est un résultat élégant : si un triangle $ABC$ est inscrit dans un cercle et que $[BC]$ est un diamètre, alors l\'angle $\\hat{A}$ est nécessairement droit — et ce quel que soit l\'emplacement de $A$ sur le cercle (tant qu\'il n\'est pas sur le diamètre). <strong>Intuition géométrique :</strong> le centre $O$ du cercle est le milieu de $[BC]$, et $OA = OB = OC = R$ (rayons). Le triangle $OAB$ et $OAC$ sont isocèles. En additionnant les angles on obtient $\\hat{A} = 90°$. La réciproque est aussi vraie et utile : si $\\hat{A} = 90°$ dans $ABC$, alors $[BC]$ est un diamètre du cercle circonscrit, et son rayon est $R = \\dfrac{BC}{2}$.',
      definitions: [
        { term: 'Cercle circonscrit', def: 'Cercle passant par les trois sommets d\'un triangle. Son centre est équidistant des trois sommets.' },
        { term: 'Angle inscrit', def: 'Angle dont le sommet est sur le cercle et dont les côtés sont des cordes du cercle.' },
        { term: 'Diamètre', def: 'Corde passant par le centre du cercle. C\'est la plus grande corde possible : $d = 2R$.' },
        { term: 'Hypoténuse', def: 'Côté le plus long d\'un triangle rectangle, situé en face de l\'angle droit.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier si l\'un des côtés du triangle est un diamètre du cercle. <strong>Exemple :</strong> si $O$ est le centre du cercle et le milieu de $[BC]$, alors $[BC]$ est un diamètre.',
          'Si oui : l\'angle opposé à ce diamètre est nécessairement droit ($90°$). <strong>Exemple :</strong> $[BC]$ est un diamètre et $A$ est sur le cercle → $\\hat{A} = 90°$.',
          'Réciproquement : si un angle d\'un triangle est droit, le côté opposé (hypoténuse) est un diamètre du cercle circonscrit. <strong>Exemple :</strong> $\\hat{A} = 90°$ et $BC = 14$ cm → le cercle circonscrit a pour rayon $R = \\dfrac{14}{2} = 7$ cm.'
        ]
      },
      example: {
        statement: 'Un pont en arc a la forme d\'un demi-cercle de diamètre $[BC] = 20$ m. Un câble relie un point $A$ situé sur l\'arc aux deux extrémités $B$ et $C$. Quel est l\'angle $\\hat{A}$ formé par les deux câbles ? Si $AB = 12$ m, quelle est la longueur $AC$ ?',
        steps: [
          '$[BC]$ est un diamètre et $A$ est sur le cercle → d\'après le théorème, $\\hat{A} = 90°$.',
          'Le triangle $ABC$ est rectangle en $A$. On applique Pythagore : $AC = \\sqrt{BC^2 - AB^2}$.',
          '$AC = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ m.'
        ],
        answer: 'L\'angle $\\hat{A} = 90°$ et le câble $AC$ mesure $16$ m.'
      },
      formulas: [
        'Théorème : $[BC]$ diamètre et $A$ sur le cercle $\\Rightarrow \\hat{A} = 90°$',
        'Réciproque : $\\hat{A} = 90°$ dans $ABC$ $\\Rightarrow$ $[BC]$ est un diamètre du cercle circonscrit',
        'Rayon du cercle circonscrit : $R = \\dfrac{BC}{2}$ (BC = hypoténuse)'
      ],
      recap: [
        'Si un côté d\'un triangle inscrit est un diamètre, l\'angle opposé vaut $90°$.',
        'Réciproque : si un triangle est rectangle, l\'hypoténuse est un diamètre du cercle circonscrit.',
        'Le centre du cercle circonscrit à un triangle rectangle est le milieu de l\'hypoténuse.',
        'Le rayon du cercle circonscrit vaut la moitié de l\'hypoténuse : $R = \\dfrac{BC}{2}$.'
      ],
      piege: 'Piège : le théorème s\'applique uniquement quand le côté est un DIAMÈTRE, pas juste une corde du cercle. Un côté = diamètre signifie que son milieu est le centre du cercle.'
    },
    quiz: [
      {
        q: 'Un triangle $ABC$ est inscrit dans un cercle de diamètre $[BC]$. Quel est l\'angle $\\hat{A}$ ?',
        options: ['$45°$', '$60°$', '$90°$', '$180°$'],
        answer: 2,
        correction: 'Théorème de l\'angle inscrit dans un demi-cercle : si $[BC]$ est un diamètre, alors $\\hat{A} = 90°$.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $A$) avec $BC = 10$ cm, quel est le rayon du cercle circonscrit ?',
        options: ['$10$ cm', '$5$ cm', '$20$ cm', '$7{,}07$ cm'],
        answer: 1,
        correction: 'L\'hypoténuse $BC$ est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$ cm.'
      },
      {
        q: 'Le milieu d\'une hypoténuse d\'un triangle rectangle est :',
        options: ['Le centre de gravité', 'Le centre du cercle inscrit', 'Le centre du cercle circonscrit', 'L\'orthocentre'],
        answer: 2,
        correction: 'Dans un triangle rectangle, le milieu de l\'hypoténuse est le centre du cercle circonscrit, et le rayon vaut la moitié de l\'hypoténuse.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const diam = rand(6, 20);
        return {
          statement: `Un triangle rectangle est inscrit dans un cercle. L'hypoténuse (diamètre) mesure $${diam}$ cm. Quel est le rayon du cercle (en cm) ?`,
          answer: diam / 2,
          tolerance: 0,
          unit: 'cm',
          hint: `Le rayon est la moitié du diamètre : $R = \\dfrac{${diam}}{2}$.`,
          solution: [`$R = \\dfrac{${diam}}{2} = ${diam / 2}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un vitrail circulaire de rayon $30$ cm. Il y inscrit un triangle $ABC$ avec $[BC]$ comme diamètre et $A$ sur le cercle.',
      tasks: [
        'Quelle est la longueur du diamètre $BC$ ?',
        'Quel est l\'angle $\\hat{A}$ dans ce triangle ?',
        'Si $AB = 36$ cm, calculer $AC$ en utilisant Pythagore.'
      ],
      solutions: [
        '$BC = 2 \\times 30 = 60$ cm.',
        '$\\hat{A} = 90°$ (angle inscrit dans un demi-cercle).',
        '$AC = \\sqrt{BC^2 - AB^2} = \\sqrt{3600 - 1296} = \\sqrt{2304} = 48$ cm.'
      ],
      finalAnswer: 'Le triangle a $BC = 60$ cm, $AB = 36$ cm, $AC = 48$ cm et $\\hat{A} = 90°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangle rectangle et cercle circonscrit',
      duration: '25 min',
      questions: [
        {
          statement: 'Un triangle $ABC$ est inscrit dans un cercle de centre $O$ et $[BC]$ est un diamètre. Que vaut l\'angle $\\hat{A}$ ?',
          type: 'numeric',
          answer: 90,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'D\'après le théorème de l\'angle inscrit dans un demi-cercle, si $[BC]$ est un diamètre et que $A$ est sur le cercle, alors $\\hat{A} = 90°$.'
        },
        {
          statement: 'Un triangle rectangle en $A$ a pour hypoténuse $BC = 26\\,\\text{cm}$. Quel est le rayon du cercle circonscrit ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Dans un triangle rectangle, l\'hypoténuse est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{26}{2} = 13\\,\\text{cm}$.'
        },
        {
          statement: 'Le centre du cercle circonscrit à un triangle rectangle se trouve :',
          type: 'multiple-choice',
          options: [
            'Au centre de gravité du triangle',
            'Au milieu de l\'hypoténuse',
            'Au sommet de l\'angle droit',
            'À l\'intersection des hauteurs'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l\'hypoténuse. Ce point est équidistant des trois sommets (distance = rayon $R = \\dfrac{\\text{hypoténuse}}{2}$).'
        },
        {
          statement: 'Un triangle rectangle inscrit dans un cercle de rayon $R = 10\\,\\text{cm}$ a un côté $AB = 12\\,\\text{cm}$. L\'angle droit est en $A$. Calculer le côté $AC$.',
          type: 'numeric',
          answer: 16,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'L\'hypoténuse $BC$ est le diamètre : $BC = 2R = 20\\,\\text{cm}$. Par Pythagore : $AC = \\sqrt{BC^2 - AB^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16\\,\\text{cm}$.'
        },
        {
          statement: 'Si le milieu de l\'hypoténuse d\'un triangle est le centre d\'un cercle passant par les trois sommets, que peut-on conclure sur ce triangle ?',
          type: 'multiple-choice',
          options: [
            'Il est isocèle',
            'Il est équilatéral',
            'Il est rectangle',
            'Il est quelconque'
          ],
          answer: 2,
          points: 2,
          correction: 'C\'est la réciproque du théorème : si le milieu d\'un côté d\'un triangle est le centre du cercle passant par les trois sommets, alors ce côté est un diamètre et l\'angle opposé vaut $90°$. Le triangle est rectangle.'
        }
      ]
    }
  },

    {
    id: '4e-translations',
    level: 1, subject: 'maths',
    icon: '➡️',
    title: 'Translations et rotations',
    subtitle: 'Image d\'un point, vecteur de translation',
    keywords: ['Translation', 'Rotation', 'Vecteur', 'Image', 'Isométrie'],
    physics: false,
    cours: {
      intro: 'Une translation déplace tous les points du plan du <strong>même vecteur</strong> $\\vec{v}$ — même direction, même sens, même longueur. Ce n\'est pas une rotation ni une symétrie : l\'orientation reste identique, les figures ne sont pas retournées. Une rotation de centre $O$ et d\'angle $\\theta$ tourne chaque point autour de $O$, en conservant la distance $OA$. Ces deux transformations sont des <strong>isométries directes</strong> : elles conservent distances, angles, aires, et l\'orientation (sens des sommets). La translation et la rotation sont omniprésentes en physique : déplacement d\'un solide en translation pure (toutes les parties ont la même vitesse), rotation d\'une roue, mouvement orbital. Composition de deux translations = une translation (les vecteurs s\'additionnent).',
      definitions: [
        { term: 'Translation', def: 'Transformation qui déplace chaque point du plan d\'un même vecteur $\\vec{v}$. La figure glisse sans tourner ni se déformer.' },
        { term: 'Vecteur de translation', def: 'Caractérisé par sa direction, son sens et sa longueur (norme). Noté $\\vec{v}(a ; b)$ en coordonnées.' },
        { term: 'Rotation', def: 'Transformation qui fait tourner chaque point autour d\'un centre $O$ d\'un angle $\\theta$, en conservant la distance au centre.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La translation et la rotation sont des isométries directes (elles conservent aussi l\'orientation).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Translation de vecteur $\\vec{v}(a ; b)$ : image de $A(x ; y)$ → $A\'(x + a ; y + b)$. <strong>Exemple :</strong> $A(3 ; 1)$ et $\\vec{v}(2 ; -4)$ → $A\'(3+2 ; 1+(-4)) = A\'(5 ; -3)$.',
          'Rotation de centre $O$ et d\'angle $\\theta$ : l\'image $A\'$ est telle que $OA\' = OA$ et l\'angle $\\widehat{AOA\'} = \\theta$. <strong>Exemple :</strong> rotation de $180°$ autour de l\'origine : $A(2 ; 3)$ → $A\'(-2 ; -3)$.',
          'Les deux transformations conservent longueurs, angles et aires (isométries directes). <strong>Exemple :</strong> un carré de côté $5$ cm translaté reste un carré de côté $5$ cm.'
        ]
      },
      example: {
        statement: 'Sur un plan quadrillé, un bateau $B$ est en $(1 ; 3)$. Le courant le déplace selon le vecteur $\\vec{v}(4 ; -2)$. Où se trouve le bateau après ce déplacement ?',
        steps: [
          'On applique la formule de la translation : $B\'(x_B + a \\,;\\, y_B + b)$.',
          '$B\'(1 + 4 \\,;\\, 3 + (-2)) = B\'(5 \\,;\\, 1)$.',
          'Vérification : la distance parcourue est $\\|\\vec{v}\\| = \\sqrt{4^2 + (-2)^2} = \\sqrt{20} \\approx 4{,}5$ unités.'
        ],
        answer: 'Le bateau arrive en $B\'(5 ; 1)$, ayant parcouru environ $4{,}5$ unités.'
      },
      formulas: [
        'Translation $\\vec{v}(a;b)$ : $A(x;y) \\to A\'(x+a\\,;\\,y+b)$',
        'Rotation de $180°$ autour de $O$ : $A(x;y) \\to A\'(2x_O - x\\,;\\,2y_O - y)$',
        '$|OA\'| = |OA|$ (rotation conserve les distances)'
      ],
      recap: [
        'Translation : chaque point se déplace du même vecteur $\\vec{v}(a ; b)$ → on ajoute $a$ à l\'abscisse et $b$ à l\'ordonnée.',
        'Rotation : chaque point tourne autour d\'un centre $O$ en conservant sa distance à $O$.',
        'Ces deux transformations sont des isométries : elles conservent distances, angles et aires.',
        'La composition de deux translations est une translation dont le vecteur est la somme des deux vecteurs.'
      ],
      piege: 'Piège : lors d\'une translation, tous les points se déplacent du MÊME vecteur. On ne tourne pas, on ne dilate pas. Le vecteur $\\vec{v}$ a une direction, un sens ET une longueur.'
    },
    quiz: [
      {
        q: 'Le point $A(2 ; 3)$ subit une translation de vecteur $\\vec{v}(4 ; -1)$. Quelle est l\'image $A\'$ ?',
        options: ['$(6 ; 2)$', '$(-2 ; 4)$', '$(6 ; -3)$', '$(8 ; -3)$'],
        answer: 0,
        correction: '$A\'(2 + 4 \\,;\\, 3 + (-1)) = A\'(6 \\,;\\, 2)$.'
      },
      {
        q: 'Une rotation conserve-t-elle les aires des figures ?',
        options: ['Non, elle les agrandit', 'Non, elle les réduit', 'Oui, c\'est une isométrie', 'Seulement pour les cercles'],
        answer: 2,
        correction: 'La rotation est une isométrie directe : elle conserve toutes les distances, les angles, et donc les aires.'
      },
      {
        q: 'Un triangle $ABC$ subit une rotation de $90°$ autour de l\'origine. L\'élève affirme que les longueurs des côtés changent car le triangle « pivote ». A-t-il raison ?',
        options: [
          'Oui : tourner un triangle modifie ses proportions.',
          'Non : la rotation est une isométrie — elle conserve exactement toutes les distances et tous les angles.',
          'Oui, mais seulement si l\'angle de rotation est supérieur à $90°$.',
          'Cela dépend de la position du centre de rotation.'
        ],
        answer: 1,
        correction: 'La rotation est une isométrie : distances, angles et aires sont rigoureusement conservés, quelle que soit l\'amplitude de la rotation ou la position du centre. Le triangle conserve sa forme exacte — il est seulement « orienté » différemment dans le plan. C\'est la même propriété que pour la symétrie axiale et la translation.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ax = rand(-5, 5), ay = rand(-5, 5);
        const vx = rand(-4, 4), vy = rand(-4, 4);
        return {
          statement: `Le point $A(${ax} ; ${ay})$ subit une translation de vecteur $\\vec{v}(${vx} ; ${vy})$. Quelle est l'abscisse de l'image $A'$ ?`,
          answer: ax + vx,
          tolerance: 0,
          unit: '',
          hint: `$x_{A'} = x_A + v_x = ${ax} + (${vx})$.`,
          solution: [`$x_{A'} = ${ax} + (${vx}) = ${ax + vx}$ et $y_{A'} = ${ay} + (${vy}) = ${ay + vy}$.`]
        };
      }
    },
    probleme: {
      context: 'Sur un plan de ville, le parc $P$ est en $(1 ; 2)$, la mairie $M$ est en $(5 ; 4)$. Une nouvelle fontaine $F$ sera placée par translation de $\\vec{PM}$ à partir du marché $C(3 ; 1)$.',
      tasks: [
        'Calculer le vecteur $\\vec{PM}$.',
        'Calculer les coordonnées de la fontaine $F$ (image de $C$ par la translation $\\vec{PM}$).',
        'Vérifier que $CF = PM$ (la translation conserve les distances).'
      ],
      solutions: [
        '$\\vec{PM}(5-1 \\,;\\, 4-2) = \\vec{PM}(4 ; 2)$.',
        '$F(3+4 \\,;\\, 1+2) = F(7 ; 3)$.',
        '$CF = \\sqrt{(7-3)^2+(3-1)^2} = \\sqrt{16+4} = \\sqrt{20}$ et $PM = \\sqrt{4^2+2^2} = \\sqrt{20}$ ✓.'
      ],
      finalAnswer: 'La fontaine est placée en $F(7 ; 3)$.'
    },

    evaluation: {
      title: 'Évaluation — Translations et Rotations',
      duration: '25 min',
      questions: [
        {
          statement: 'Le point $A(3 ; -2)$ subit une translation de vecteur $\\vec{v}(-5 ; 4)$. Quelles sont les coordonnées de l\'image $A\'$ ?',
          type: 'multiple-choice',
          options: ['$(-2 ; 2)$', '$(8 ; -6)$', '$(-2 ; -6)$', '$(8 ; 2)$'],
          answer: 0,
          points: 2,
          correction: '$A\'(3 + (-5) \\;;\\; -2 + 4) = A\'(-2 \\;;\\; 2)$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $a$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = x_{B\'} - x_B = 2 - (-1) = 3$.'
        },
        {
          statement: 'Le point $B(-1 ; 5)$ a pour image $B\'(2 ; 1)$ par une translation de vecteur $\\vec{v}(a ; b)$. Calculer $b$.',
          type: 'numeric',
          answer: -4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$b = y_{B\'} - y_B = 1 - 5 = -4$.'
        },
        {
          statement: 'Une rotation de centre $O$ et d\'angle $180°$ transforme $A(3 ; 2)$ en $A\'$. Si $O$ est l\'origine $(0 ; 0)$, quelles sont les coordonnées de $A\'$ ?',
          type: 'multiple-choice',
          options: ['$(3 ; -2)$', '$(-3 ; -2)$', '$(-3 ; 2)$', '$(2 ; 3)$'],
          answer: 1,
          points: 2,
          correction: 'Rotation de $180°$ autour de l\'origine : $A\'(-x ; -y) = A\'(-3 ; -2)$.'
        },
        {
          statement: 'Un segment $[AB]$ de longueur $7\\,\\text{cm}$ subit une translation. Quelle est la longueur de l\'image $[A\'B\']$ ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'La translation est une isométrie : elle conserve toutes les distances. Donc $A\'B\' = AB = 7\\,\\text{cm}$.'
        }
      ]
    }
  },

    {
    id: '4e-droites-remarquables',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Droites remarquables du triangle',
    subtitle: 'Médiatrice, bissectrice, médiane, hauteur',
    keywords: ['Médiatrice', 'Bissectrice', 'Médiane', 'Hauteur', 'Cercle inscrit', 'Cercle circonscrit'],
    physics: false,
    cours: {
      intro: 'Chaque triangle possède quatre familles de droites remarquables, chacune associée à un point de concours unique. <strong>Médiatrices</strong> → circumcentre (équidistant des 3 sommets = centre du cercle circonscrit). <strong>Bissectrices</strong> → incentre (équidistant des 3 côtés = centre du cercle inscrit). <strong>Médianes</strong> → centroïde ou isobarycentre (centre de gravité, à $\\frac{2}{3}$ de chaque sommet). <strong>Hauteurs</strong> → orthocentre (peut être extérieur au triangle si obtus). <strong>Piège fréquent :</strong> ne pas confondre médiane (joint un sommet au milieu du côté opposé) et médiatrice (perpendiculaire à un côté en son milieu — elle ne passe pas nécessairement par un sommet). Ces droites sont utiles en ingénierie : le centroïde est le centre de masse, le circumcentre sert à trouver le cercle passant par 3 points.',
      definitions: [
        { term: 'Médiatrice', def: 'Droite perpendiculaire à un côté en son milieu. Lieu des points équidistants des deux extrémités de ce côté.' },
        { term: 'Bissectrice', def: 'Demi-droite issue d\'un sommet qui partage l\'angle en deux angles égaux.' },
        { term: 'Médiane', def: 'Segment (ou droite) qui joint un sommet au milieu du côté opposé.' },
        { term: 'Hauteur', def: 'Droite perpendiculaire à un côté passant par le sommet opposé. Elle peut être extérieure au triangle si celui-ci est obtus.' }
      ],
      method: {
        title: 'Les quatre droites remarquables',
        steps: [
          'Médiatrice d\'un côté : perpendiculaire à ce côté en son milieu. Les trois médiatrices se coupent au CIRCUMCENTRE (centre du cercle circonscrit). <strong>Exemple :</strong> pour $[AB]$ avec $A(0;0)$ et $B(6;0)$, le milieu est $(3;0)$ et la médiatrice est la droite $x = 3$.',
          'Bissectrice d\'un angle : partage l\'angle en deux angles égaux. Les trois bissectrices se coupent à l\'INCENTRE (centre du cercle inscrit). <strong>Exemple :</strong> la bissectrice d\'un angle de $80°$ crée deux angles de $40°$.',
          'Médiane : joint un sommet au milieu du côté opposé. Les trois médianes se coupent au CENTROÏDE (ou ISOBARYCENTRE), à $\\frac{2}{3}$ de chaque sommet. <strong>Exemple :</strong> si la médiane issue de $A$ mesure $12$ cm, alors $AG = \\frac{2}{3} \\times 12 = 8$ cm.',
          'Hauteur : perpendiculaire issue d\'un sommet sur le côté opposé. Les trois hauteurs se coupent à l\'ORTHOCENTRE. <strong>Exemple :</strong> dans un triangle rectangle, les deux hauteurs issues des angles aigus sont les deux côtés de l\'angle droit.'
        ]
      },
      example: {
        statement: 'Un triangle $ABC$ a pour sommets $A(0 ; 0)$, $B(8 ; 0)$ et $C(2 ; 6)$. Calculer les coordonnées du centroïde $G$ et la longueur $AG$ sachant que la médiane issue de $A$ va au milieu $M$ de $[BC]$.',
        steps: [
          'Milieu de $[BC]$ : $M = \\left(\\dfrac{8+2}{2} ; \\dfrac{0+6}{2}\\right) = (5 ; 3)$.',
          'Centroïde : $G = \\left(\\dfrac{0+8+2}{3} ; \\dfrac{0+0+6}{3}\\right) = \\left(\\dfrac{10}{3} ; 2\\right)$.',
          'Longueur $AM = \\sqrt{5^2 + 3^2} = \\sqrt{34} \\approx 5{,}83$ cm. Donc $AG = \\dfrac{2}{3} \\times \\sqrt{34} \\approx 3{,}89$ cm.'
        ],
        answer: 'Le centroïde est en $G\\left(\\dfrac{10}{3} ; 2\\right)$ et $AG \\approx 3{,}89$ unités.'
      },
      formulas: [
        'Médiatrice : locus des points équidistants des deux extrémités',
        'Centroïde $G$ : $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$',
        'Sur une médiane : $AG = \\frac{2}{3} AM$ (M = milieu du côté opposé)'
      ],
      recap: [
        'Quatre familles de droites : médiatrices, bissectrices, médianes, hauteurs — chacune a un point de concours.',
        'Médiatrices → circumcentre (cercle circonscrit) ; bissectrices → incentre (cercle inscrit).',
        'Médianes → centroïde (centre de gravité, à $\\frac{2}{3}$ du sommet) ; hauteurs → orthocentre.',
        'Ne pas confondre médiane (passe par un sommet) et médiatrice (perpendiculaire au milieu d\'un côté).'
      ],
      piege: 'Piège : confondre médiane et médiatrice. La médiane joint un sommet au milieu du côté opposé (elle passe par un sommet). La médiatrice est perpendiculaire à un côté en son milieu (elle ne passe pas forcément par un sommet).'
    },
    quiz: [
      {
        q: 'Un élève confond médiane et médiatrice. Laquelle de ces affirmations distingue correctement les deux ?',
        options: [
          'La médiane est perpendiculaire à un côté ; la médiatrice joint un sommet au milieu du côté opposé.',
          'La médiane joint un sommet au milieu du côté opposé ; la médiatrice est perpendiculaire à un côté en son milieu.',
          'Médiane et médiatrice sont identiques dans un triangle isocèle.',
          'La médiane passe par le milieu de deux côtés ; la médiatrice passe par un sommet.'
        ],
        answer: 1,
        correction: 'La <strong>médiane</strong> joint un sommet au milieu du côté opposé → elle passe toujours par un sommet. La <strong>médiatrice</strong> est perpendiculaire à un côté en son milieu → elle passe par le milieu du côté, mais pas nécessairement par un sommet. Seul cas particulier : dans un triangle équilatéral ou isocèle, médiane, médiatrice, bissectrice et hauteur coïncident sur le même côté.'
      },
      {
        q: 'La médiatrice d\'un segment $[AB]$ est l\'ensemble des points :',
        options: ['À égale distance de $A$ et $B$', 'Sur le segment $[AB]$', 'Formant un angle de $45°$ avec $[AB]$', 'À mi-chemin entre $A$ et $B$'],
        answer: 0,
        correction: 'La médiatrice de $[AB]$ est la droite perpendiculaire à $[AB]$ en son milieu. Elle est le lieu des points équidistants de $A$ et $B$.'
      },
      {
        q: 'Le centroïde $G$ se trouve à quelle fraction de la longueur d\'une médiane depuis le sommet ?',
        options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{4}$'],
        answer: 2,
        correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. Il se trouve aux $\\frac{2}{3}$ de la médiane depuis le sommet.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const am = rand(6, 18);
        const ag = parseFloat((2 * am / 3).toFixed(1));
        return {
          statement: `Dans un triangle, la médiane issue de $A$ mesure $${am}$ cm. Le centroïde $G$ se trouve à $\\frac{2}{3}$ de $A$. Quelle est la longueur $AG$ en cm ?`,
          answer: ag,
          tolerance: 0.1,
          unit: 'cm',
          hint: `$AG = \\dfrac{2}{3} \\times AM = \\dfrac{2}{3} \\times ${am}$.`,
          solution: [`$AG = \\dfrac{2}{3} \\times ${am} = \\dfrac{${2*am}}{3} = ${ag}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un triangle $ABC$ a pour sommets $A(0;0)$, $B(6;0)$ et $C(3;6)$.',
      tasks: [
        'Calculer le milieu $M$ de $[BC]$.',
        'Vérifier que $A$, $M$ et le centroïde $G\\left(3; 2\\right)$ sont alignés.',
        'Calculer $AG$ et $GM$ pour vérifier que $AG = 2 \\times GM$.'
      ],
      solutions: [
        '$M = \\left(\\frac{6+3}{2}; \\frac{0+6}{2}\\right) = (4{,}5 ; 3)$.',
        'Vecteurs $\\vec{AM}(4{,}5;3)$ et $\\vec{AG}(3;2)$ : $\\frac{4{,}5}{3} = \\frac{3}{2} = 1{,}5$. Colinéaires ✓.',
        '$AG = \\sqrt{9+4} = \\sqrt{13}$, $GM = \\sqrt{2{,}25+1} = \\sqrt{3{,}25}$. $\\frac{\\sqrt{13}}{\\sqrt{3{,}25}} = \\sqrt{4} = 2$ ✓.'
      ],
      finalAnswer: 'Le centroïde $G(3;2)$ se trouve bien aux $\\frac{2}{3}$ de la médiane depuis $A$.'
    },

    evaluation: {
      title: 'Évaluation — Droites remarquables du triangle',
      duration: '25 min',
      questions: [
        {
          statement: 'Les trois médiatrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['L\'orthocentre', 'Le centroïde', 'Le circumcentre', 'L\'incentre'],
          answer: 2,
          points: 2,
          correction: 'Les trois médiatrices se coupent au circumcentre, qui est le centre du cercle circonscrit au triangle (équidistant des trois sommets).'
        },
        {
          statement: 'Les trois bissectrices d\'un triangle se coupent en un point appelé :',
          type: 'multiple-choice',
          options: ['Le circumcentre', 'L\'orthocentre', 'Le centroïde', 'L\'incentre'],
          answer: 3,
          points: 2,
          correction: 'Les trois bissectrices se coupent à l\'incentre, qui est le centre du cercle inscrit dans le triangle (équidistant des trois côtés).'
        },
        {
          statement: 'Dans un triangle, une médiane issue de $A$ mesure $15\\,\\text{cm}$. Le centroïde $G$ se trouve à quelle distance de $A$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Le centroïde divise chaque médiane dans le rapport $2:1$ depuis le sommet. $AG = \\dfrac{2}{3} \\times 15 = 10\\,\\text{cm}$.'
        },
        {
          statement: 'Quelle droite remarquable joint un sommet du triangle au milieu du côté opposé ?',
          type: 'multiple-choice',
          options: ['La médiatrice', 'La hauteur', 'La médiane', 'La bissectrice'],
          answer: 2,
          points: 2,
          correction: 'La médiane joint un sommet au milieu du côté opposé. La médiatrice, elle, est perpendiculaire à un côté en son milieu mais ne passe pas nécessairement par un sommet.'
        },
        {
          statement: 'Dans un triangle $ABC$, la médiane issue de $A$ a pour milieu le point $M$ milieu de $[BC]$. Si $B(2;0)$ et $C(8;6)$, quelles sont les coordonnées de $M$ ?',
          type: 'multiple-choice',
          options: ['$(10 ; 6)$', '$(5 ; 3)$', '$(6 ; 3)$', '$(4 ; 3)$'],
          answer: 1,
          points: 2,
          correction: '$M = \\left(\\dfrac{2+8}{2} \\;;\\; \\dfrac{0+6}{2}\\right) = (5 ; 3)$.'
        }
      ]
    }
  },

    {
    id: '4e-cosinus',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Cosinus d\'un angle aigu',
    subtitle: 'cos = adjacent / hypoténuse',
    keywords: ['Cosinus', 'Angle aigu', 'Triangle rectangle', 'Adjacent', 'Hypoténuse'],
    physics: true,
    cours: {
      intro: 'Dans un triangle rectangle, le cosinus d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$. L\'idée clé est que tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est toujours identique, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$ : $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit). Attention : le côté « adjacent » dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'hypoténuse ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.',
      definitions: [
        { term: 'Cosinus d\'un angle aigu', def: 'Rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
        { term: 'Côté adjacent', def: 'Côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
        { term: 'Hypoténuse', def: 'Plus grand côté du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans le cosinus.' },
        { term: 'Arc cosinus ($\\arccos$)', def: 'Fonction inverse du cosinus : si $\\cos(\\hat{A}) = k$, alors $\\hat{A} = \\arccos(k)$. Permet de retrouver un angle à partir d\'un rapport.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit) et le côté adjacent (côté de l\'angle, autre que l\'hypoténuse). <strong>Exemple :</strong> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
          'Appliquer : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$. <strong>Exemple :</strong> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
          'Pour trouver un côté : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$ ou $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$. <strong>Exemple :</strong> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
        ]
      },
      example: {
        statement: 'Une échelle de $5$ m est posée contre un mur en formant un angle de $60°$ avec le sol. À quelle distance du mur se trouve le pied de l\'échelle ?',
        steps: [
          'L\'échelle forme l\'hypoténuse d\'un triangle rectangle. L\'angle au sol est $60°$ et le côté adjacent est la distance au mur.',
          '$\\cos(60°) = \\dfrac{\\text{distance au mur}}{\\text{échelle}} = \\dfrac{d}{5}$.',
          '$d = 5 \\times \\cos(60°) = 5 \\times 0{,}5 = 2{,}5$ m.'
        ],
        answer: 'Le pied de l\'échelle est à $2{,}5$ m du mur.'
      },
      formulas: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$',
        '$\\cos(0°) = 1$, $\\cos(30°) = \\frac{\\sqrt{3}}{2}$, $\\cos(45°) = \\frac{\\sqrt{2}}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\cos(90°) = 0$',
        'Pour trouver l\'angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$'
      ],
      recap: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours compris entre $0$ et $1$.',
        'Le côté adjacent change selon l\'angle considéré : c\'est le côté qui touche l\'angle (sans être l\'hypoténuse).',
        'Pour trouver un côté : adj $= $ hyp $\\times \\cos(\\hat{A})$ ; pour trouver un angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$.',
        'Valeurs clés : $\\cos(0°) = 1$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$.'
      ],
      piege: 'Piège : le côté adjacent change selon l\'angle considéré. Pour l\'angle $\\hat{A}$, l\'adjacent est le côté qui « touche » $\\hat{A}$ (autre que l\'hypoténuse). Ne pas confondre avec le côté opposé.'
    },
    quiz: [
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm et $AC = 6$ cm. Quel est $\\cos(\\hat{A})$ ?',
        options: ['$0{,}6$', '$0{,}8$', '$0{,}75$', '$1{,}67$'],
        answer: 0,
        correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{AC}{AB} = \\dfrac{6}{10} = 0{,}6$.'
      },
      {
        q: 'Dans un triangle rectangle, un angle aigu mesure $60°$. L\'hypoténuse vaut $14$ cm. Quel est le côté adjacent ?',
        options: ['$7$ cm', '$12{,}12$ cm', '$7{,}27$ cm', '$28$ cm'],
        answer: 0,
        correction: '$\\text{adj} = \\text{hyp} \\times \\cos(60°) = 14 \\times 0{,}5 = 7$ cm.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm, $BC = 6$ cm, $AC = 8$ cm, un élève écrit : $\\cos(\\hat{A}) = \\dfrac{BC}{AB} = 0{,}6$. Quelle est son erreur ?',
        options: [
          'Il a confondu côté adjacent et côté opposé : $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = 0{,}8$',
          'Il a mal identifié l\'hypoténuse : ce n\'est pas $AB$',
          'Le résultat $0{,}6$ est correct, il n\'y a pas d\'erreur',
          'Il aurait dû diviser $AB$ par $BC$'
        ],
        answer: 0,
        correction: 'Pour l\'angle $\\hat{A}$, le côté adjacent est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$ (qui est le côté opposé à $\\hat{A}$). Donc $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$, pas $0{,}6$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [{a:30, cos:0.866},{a:45, cos:0.707},{a:60, cos:0.5}];
        const {a, cos} = pick(angles);
        const hyp = rand(5, 20);
        const adj = parseFloat((hyp * cos).toFixed(1));
        return {
          statement: `Dans un triangle rectangle, un angle mesure $${a}°$ et l'hypoténuse vaut $${hyp}$ cm. Calcule le côté adjacent (en cm, arrondi à $0{,}1$).`,
          answer: adj,
          tolerance: 0.2,
          unit: 'cm',
          hint: `$\\text{adj} = \\text{hyp} \\times \\cos(${a}°) = ${hyp} \\times ${cos}$.`,
          solution: [`$\\text{adj} = ${hyp} \\times \\cos(${a}°) = ${hyp} \\times ${cos} = ${adj}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Une rampe d\'accès pour personnes à mobilité réduite forme un angle de $5°$ avec le sol horizontal. La longueur de la rampe est $4$ m ($\\cos 5° \\approx 0{,}996$).',
      tasks: [
        'Calculer la longueur horizontale couverte par la rampe.',
        'La hauteur de la marche surmontée est $h$. Sachant que $\\sin 5° \\approx 0{,}087$, calculer $h$.',
        'La norme impose un angle $\\leq 5°$ pour $h = 18$ cm. Quelle longueur minimale de rampe faut-il ?'
      ],
      solutions: [
        '$\\text{adj} = 4 \\times \\cos(5°) \\approx 4 \\times 0{,}996 = 3{,}98$ m.',
        '$h = 4 \\times \\sin(5°) \\approx 4 \\times 0{,}087 = 0{,}35$ m $= 35$ cm.',
        '$\\sin(5°) = \\frac{0{,}18}{L} \\Rightarrow L = \\frac{0{,}18}{0{,}087} \\approx 2{,}07$ m.'
      ],
      finalAnswer: 'La rampe couvre $\\approx 3{,}98$ m horizontalement ; pour $18$ cm de hauteur il faut au moins $\\approx 2{,}07$ m de rampe.'
    },

    evaluation: {
      title: 'Évaluation — Cosinus d\'un angle aigu',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 13\\,\\text{cm}$ et $AC = 5\\,\\text{cm}$, calculer $\\cos(\\hat{A})$. Donner le résultat décimal arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{AC}{AB} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        {
          statement: 'Un triangle rectangle a un angle de $45°$ et une hypoténuse de $10\\,\\text{cm}$. Calculer le côté adjacent (en cm, arrondi à $0{,}1$). On donne $\\cos(45°) \\approx 0{,}707$.',
          type: 'numeric',
          answer: 7.07,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(45°) = 10 \\times 0{,}707 = 7{,}07\\,\\text{cm}$.'
        },
        {
          statement: 'Dans un triangle rectangle, $\\cos(\\hat{A}) = 0{,}6$ et l\'hypoténuse vaut $15\\,\\text{cm}$. Que vaut le côté adjacent à $\\hat{A}$ ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(\\hat{A}) = 15 \\times 0{,}6 = 9\\,\\text{cm}$.'
        },
        {
          statement: 'Un élève écrit $\\cos(\\hat{B}) = \\dfrac{\\text{hypoténuse}}{\\text{adjacent}}$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur',
            'Il a inversé le rapport : le cosinus est $\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
            'Le cosinus utilise le côté opposé, pas l\'adjacent',
            'Le cosinus n\'existe que pour l\'angle de $90°$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le cosinus d\'un angle aigu est $\\cos(\\hat{B}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$. L\'élève a inversé numérateur et dénominateur. Le rapport $\\dfrac{\\text{hyp}}{\\text{adj}}$ est toujours $\\geq 1$, ce qui est impossible pour un cosinus d\'angle aigu.'
        },
        {
          statement: 'Sachant que $\\cos(60°) = 0{,}5$, quelle est la mesure de l\'angle $\\hat{A}$ dans un triangle rectangle si $\\cos(\\hat{A}) = 0{,}5$ ?',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\cos(\\hat{A}) = 0{,}5 = \\cos(60°)$, donc $\\hat{A} = 60°$.'
        }
      ]
    }
  },

    {
    id: '4e-volumes',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Volumes des pyramides et cônes',
    subtitle: 'Formule du tiers, cas particuliers',
    keywords: ['Pyramide', 'Cône', 'Volume', 'Base', 'Hauteur', 'Tiers'],
    physics: true,
    cours: {
      intro: 'La pyramide et le cône ont un volume égal au tiers du prisme ou cylindre qui les contient : $V = \\frac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$. Intuition : en versant un cône rempli de sable dans le cylindre de même base et même hauteur, il faut exactement 3 remplissages — vérifiable expérimentalement ! Cette formule s\'applique à toute pyramide quelle que soit la forme de sa base (carrée, triangulaire, hexagonale…). Le point crucial est que $h$ désigne la hauteur perpendiculaire — la distance du sommet à la base — jamais l\'arête latérale qui relie le sommet à un coin de la base.',
      definitions: [
        { term: 'Pyramide', def: 'Solide dont la base est un polygone et dont les faces latérales sont des triangles qui se rejoignent en un sommet appelé apex.' },
        { term: 'Cône de révolution', def: 'Solide obtenu en faisant tourner un triangle rectangle autour d\'un de ses côtés de l\'angle droit. La base est un disque.' },
        { term: 'Hauteur d\'une pyramide ou d\'un cône', def: 'Distance perpendiculaire du sommet (apex) au plan de la base. Ce n\'est pas l\'arête latérale.' },
        { term: 'Apothème', def: 'Arête latérale d\'une pyramide régulière, ou génératrice d\'un cône. Toujours plus longue que la hauteur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la base et calculer son aire $\\mathcal{A}_{\\text{base}}$. <strong>Exemple :</strong> base carrée de côté $5$ cm → $\\mathcal{A} = 5^2 = 25$ cm² ; base circulaire de rayon $3$ cm → $\\mathcal{A} = \\pi \\times 3^2 \\approx 28{,}3$ cm².',
          'Mesurer la hauteur $h$ (distance perpendiculaire du sommet à la base). <strong>Exemple :</strong> si l\'arête latérale vaut $13$ cm et la demi-diagonale de la base carrée vaut $5$ cm, alors $h = \\sqrt{13^2 - 5^2} = 12$ cm (Pythagore).',
          'Appliquer : $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$. <strong>Exemple :</strong> $V = \\dfrac{1}{3} \\times 25 \\times 12 = 100$ cm³.'
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
      generate() {
        const a = rand(3, 10);
        const h = rand(3, 12);
        const v = parseFloat(((a * a * h) / 3).toFixed(1));
        return {
          statement: `Une pyramide à base carrée de côté $${a}$ cm a une hauteur de $${h}$ cm. Calcule son volume en cm³.`,
          answer: v,
          tolerance: 0.2,
          unit: 'cm³',
          hint: `$V = \\dfrac{1}{3} \\times ${a}^2 \\times ${h} = \\dfrac{1}{3} \\times ${a*a} \\times ${h}$.`,
          solution: [`$V = \\dfrac{${a*a} \\times ${h}}{3} = \\dfrac{${a*a*h}}{3} = ${v}$ cm³.`]
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
        '$V = \\dfrac{1}{3} \\times 230^2 \\times 146 = \\dfrac{1}{3} \\times 52900 \\times 146 \\approx 2\\,573\\,133$ m³.',
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
          statement: 'Un cône a un rayon de base $r = 5\\,\\text{cm}$ et une hauteur $h = 12\\,\\text{cm}$. Calculer son volume (prendre $\\pi \\approx 3{,}14$).',
          type: 'numeric',
          answer: 314,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\pi r^2 h = \\dfrac{1}{3} \\times 3{,}14 \\times 25 \\times 12 = \\dfrac{942}{3} = 314\\,\\text{cm}^3$.'
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
          statement: 'La hauteur d\'une pyramide est :',
          type: 'multiple-choice',
          options: [
            'L\'arête latérale reliant le sommet à un coin de la base',
            'La distance perpendiculaire du sommet à la base',
            'La diagonale de la base',
            'La longueur d\'une face latérale'
          ],
          answer: 1,
          points: 2,
          correction: 'La hauteur d\'une pyramide est la distance perpendiculaire du sommet au plan de la base. Ce n\'est jamais l\'arête latérale (qui relie le sommet à un sommet de la base et qui est plus longue que la hauteur).'
        },
        {
          statement: 'Une pyramide à base triangulaire a une base de $20\\,\\text{cm}^2$ d\'aire et une hauteur de $15\\,\\text{cm}$. Calculer son volume.',
          type: 'numeric',
          answer: 100,
          tolerance: 0.1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{1}{3} \\times 20 \\times 15 = \\dfrac{300}{3} = 100\\,\\text{cm}^3$.'
        }
      ]
    }
  },

    {
    id: '4e-statistiques',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Statistiques : médiane et quartiles',
    subtitle: 'Médiane, Q1, Q3, boîte à moustaches',
    keywords: ['Médiane', 'Quartile', 'Étendue', 'Boîte à moustaches', 'Série ordonnée'],
    physics: false,
    cours: {
      intro: 'La médiane est la valeur qui partage une série ordonnée en deux groupes d\'effectif égal : autant de valeurs en dessous qu\'au-dessus. Contrairement à la moyenne, elle n\'est pas perturbée par les valeurs extrêmes (salaires de PDG, erreurs de mesure…). Les quartiles $Q_1$ et $Q_3$ affinent cette idée : $25\\%$ des valeurs sont inférieures à $Q_1$ et $75\\%$ sont inférieures à $Q_3$. L\'écart interquartile $IQR = Q_3 - Q_1$ mesure la dispersion de la moitié centrale des données, sans être biaisé par les extrêmes. La boîte à moustaches représente graphiquement la médiane et les quartiles pour visualiser rapidement la distribution.',
      definitions: [
        { term: 'Médiane', def: 'Valeur qui partage une série ordonnée en deux moitiés d\'effectif égal. Pour $n$ impair : valeur centrale ; pour $n$ pair : moyenne des deux valeurs centrales.' },
        { term: 'Premier quartile $Q_1$', def: 'Valeur en dessous de laquelle se trouvent $25\\%$ des données. C\'est la médiane de la moitié inférieure de la série.' },
        { term: 'Troisième quartile $Q_3$', def: 'Valeur en dessous de laquelle se trouvent $75\\%$ des données. C\'est la médiane de la moitié supérieure de la série.' },
        { term: 'Écart interquartile', def: '$IQR = Q_3 - Q_1$. Mesure la dispersion des $50\\%$ centraux des données, sans être affecté par les valeurs extrêmes.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Ordonner la série dans l\'ordre croissant. <strong>Exemple :</strong> $7, 3, 9, 1, 5$ → $1, 3, 5, 7, 9$.',
          'Médiane $Me$ : valeur centrale si $n$ est impair ; moyenne des deux valeurs centrales si $n$ est pair. <strong>Exemple :</strong> série $1, 3, 5, 7, 9$ ($n = 5$) → $Me = 5$ (la $3^e$ valeur).',
          '$Q_1$ : médiane de la moitié inférieure (valeurs $< Me$). <strong>Exemple :</strong> moitié inférieure $\\{1, 3\\}$ → $Q_1 = \\dfrac{1+3}{2} = 2$.',
          '$Q_3$ : médiane de la moitié supérieure (valeurs $> Me$). <strong>Exemple :</strong> moitié supérieure $\\{7, 9\\}$ → $Q_3 = \\dfrac{7+9}{2} = 8$. $IQR = 8 - 2 = 6$.'
        ]
      },
      example: {
        statement: 'Les temps (en secondes) de $8$ coureurs au $100$ m sont : $12{,}3$ ; $11{,}8$ ; $13{,}5$ ; $11{,}2$ ; $12{,}7$ ; $14{,}1$ ; $11{,}5$ ; $12{,}0$. Calculer la médiane et les quartiles.',
        steps: [
          'Série ordonnée : $11{,}2$ ; $11{,}5$ ; $11{,}8$ ; $12{,}0$ ; $12{,}3$ ; $12{,}7$ ; $13{,}5$ ; $14{,}1$.',
          '$n = 8$ (pair) → $Me = \\dfrac{x_4 + x_5}{2} = \\dfrac{12{,}0 + 12{,}3}{2} = 12{,}15$ s.',
          'Moitié inférieure $\\{11{,}2 ; 11{,}5 ; 11{,}8 ; 12{,}0\\}$ → $Q_1 = \\dfrac{11{,}5 + 11{,}8}{2} = 11{,}65$ s. Moitié supérieure $\\{12{,}3 ; 12{,}7 ; 13{,}5 ; 14{,}1\\}$ → $Q_3 = \\dfrac{12{,}7 + 13{,}5}{2} = 13{,}1$ s.'
        ],
        answer: '$Me = 12{,}15$ s, $Q_1 = 11{,}65$ s, $Q_3 = 13{,}1$ s, $IQR = 13{,}1 - 11{,}65 = 1{,}45$ s.'
      },
      formulas: [
        'Écart interquartile : $IQR = Q_3 - Q_1$',
        'Série de $n$ valeurs ordonnées : $Me = x_{(n+1)/2}$ si $n$ impair',
        'Si $n$ pair : $Me = \\dfrac{x_{n/2} + x_{n/2+1}}{2}$'
      ],
      recap: [
        'Toujours ordonner la série avant de calculer médiane et quartiles.',
        '$n$ impair → la médiane est la valeur centrale ; $n$ pair → c\'est la moyenne des deux valeurs centrales.',
        'La médiane résiste aux valeurs extrêmes, contrairement à la moyenne.',
        '$IQR = Q_3 - Q_1$ mesure la dispersion des $50\\%$ centraux des données.'
      ],
      piege: 'Piège : la médiane d\'une série impaire est la valeur du milieu (pas la moyenne). Pour $n = 7$, la médiane est la $4^e$ valeur (pas la moyenne des $3^e$ et $4^e$).'
    },
    quiz: [
      {
        q: 'Quelle est la médiane de la série : $3, 5, 7, 9, 11$ ?',
        options: ['$6$', '$7$', '$5$', '$9$'],
        answer: 1,
        correction: 'Série déjà ordonnée, $n = 5$ (impair). La médiane est la $3^e$ valeur : $7$.'
      },
      {
        q: 'Pour la série $2, 4, 6, 8, 10, 12$, quelle est la médiane ?',
        options: ['$6$', '$7$', '$6{,}5$', '$8$'],
        answer: 1,
        correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{6 + 8}{2} = 7$.'
      },
      {
        q: 'Un élève calcule la médiane de la série $1, 3, 5, 7, 9, 11$ ($6$ valeurs). Il prend la $3^e$ valeur et écrit : médiane $= 5$. Quelle est son erreur ?',
        options: [
          'Pour $n$ pair, la médiane est la moyenne des $3^e$ et $4^e$ valeurs : $(5+7)/2 = 6$',
          'Il devait prendre la $4^e$ valeur : médiane $= 7$',
          'Il devait d\'abord trier la série dans l\'ordre croissant',
          'Il n\'y a pas d\'erreur, médiane $= 5$'
        ],
        answer: 0,
        correction: 'Pour une série de $n = 6$ valeurs (nombre pair), la médiane n\'est pas une valeur de la série : c\'est la moyenne des deux valeurs centrales, soit la $3^e$ et la $4^e$. Ici, médiane $= \\dfrac{5 + 7}{2} = 6$. Prendre uniquement la $3^e$ valeur est l\'erreur classique quand $n$ est pair.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = pick([5, 7, 9]);
        const vals = Array.from({length: n}, () => rand(1, 20)).sort((a,b) => a-b);
        const med = vals[Math.floor(n / 2)];
        return {
          statement: `Calcule la médiane de la série ordonnée : $${vals.join(', ')}$.`,
          answer: med,
          tolerance: 0,
          unit: '',
          hint: `La série a $${n}$ valeurs (impair). La médiane est la valeur à la position $${Math.floor(n/2)+1}$.`,
          solution: [
            `Série ordonnée : $${vals.join(', ')}$.`,
            `$n = ${n}$ impair → médiane = $${Math.floor(n/2)+1}^e$ valeur = $${med}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Les salaires mensuels (en k€) dans une petite entreprise de $9$ employés sont : $1{,}5$ ; $1{,}8$ ; $2{,}0$ ; $2{,}1$ ; $2{,}3$ ; $2{,}5$ ; $2{,}8$ ; $3{,}0$ ; $12{,}0$ (le dirigeant).',
      tasks: [
        'Calculer la moyenne des salaires.',
        'Calculer la médiane.',
        'Laquelle est plus représentative de la majorité des employés ? Pourquoi ?'
      ],
      solutions: [
        'Somme : $1{,}5+1{,}8+2{,}0+2{,}1+2{,}3+2{,}5+2{,}8+3{,}0+12{,}0 = 30$ k€. Moyenne : $30/9 \\approx 3{,}33$ k€.',
        '$n = 9$ impair → $5^e$ valeur : $2{,}3$ k€.',
        'La médiane ($2{,}3$ k€) est plus représentative : la moyenne est tirée vers le haut par le salaire élevé du dirigeant ($12$ k€).'
      ],
      finalAnswer: 'Médiane $= 2{,}3$ k€, bien plus représentative que la moyenne $\\approx 3{,}33$ k€ biaisée par le dirigeant.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques : médiane et quartiles',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la médiane de la série : $4, 7, 9, 12, 15, 18, 21$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Série déjà ordonnée, $n = 7$ (impair). La médiane est la $4^e$ valeur : $12$.'
        },
        {
          statement: 'Calculer la médiane de la série : $3, 5, 8, 11, 14, 20$.',
          type: 'numeric',
          answer: 9.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{8 + 11}{2} = 9{,}5$.'
        },
        {
          statement: 'Pour la série ordonnée $2, 5, 7, 9, 11, 14, 17, 20$, le premier quartile $Q_1$ est la médiane de la moitié inférieure $\\{2, 5, 7, 9\\}$. Que vaut $Q_1$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Moitié inférieure : $\\{2, 5, 7, 9\\}$. $n = 4$ (pair) → $Q_1 = \\dfrac{5 + 7}{2} = 6$.'
        },
        {
          statement: 'Quel indicateur statistique n\'est pas affecté par les valeurs extrêmes ?',
          type: 'multiple-choice',
          options: ['La moyenne', 'La médiane', 'La somme', 'L\'étendue'],
          answer: 1,
          points: 2,
          correction: 'La médiane est robuste aux valeurs extrêmes car elle dépend uniquement de la position centrale, pas de la grandeur des valeurs. La moyenne, la somme et l\'étendue sont toutes sensibles aux valeurs extrêmes.'
        },
        {
          statement: 'Pour la série $2, 5, 7, 9, 11, 14, 17, 20$, le troisième quartile $Q_3$ est la médiane de la moitié supérieure $\\{11, 14, 17, 20\\}$. Calculer l\'écart interquartile $IQR = Q_3 - Q_1$. (On donne $Q_1 = 6$.)',
          type: 'numeric',
          answer: 9.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$Q_3 = \\dfrac{14 + 17}{2} = 15{,}5$. $IQR = Q_3 - Q_1 = 15{,}5 - 6 = 9{,}5$.'
        }
      ]
    }
  },

    {
    id: '4e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités : calcul et événements',
    subtitle: 'Union, intersection, complémentaire',
    keywords: ['Probabilité', 'Événement', 'Union', 'Intersection', 'Complémentaire', 'Incompatibles'],
    physics: false,
    cours: {
      intro: 'La probabilité mesure la fréquence à long terme d\'un événement dans une expérience aléatoire. En 4e, on apprend à combiner des événements : la réunion $A \\cup B$ (« au moins l\'un des deux se réalise ») et l\'intersection $A \\cap B$ (« les deux se réalisent simultanément »). La formule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ évite de compter deux fois les résultats favorables aux deux événements à la fois. Deux événements sont incompatibles si $A \\cap B = \\emptyset$ : ils ne peuvent jamais se produire ensemble, et la formule se simplifie en $P(A \\cup B) = P(A) + P(B)$. Enfin, $P(\\bar{A}) = 1 - P(A)$ car $A$ et son contraire couvrent tous les cas possibles.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance. L\'ensemble de tous les résultats possibles est l\'univers $\\Omega$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers $\\Omega$. Un événement est réalisé si le résultat de l\'expérience lui appartient.' },
        { term: 'Événements incompatibles', def: 'Deux événements $A$ et $B$ qui ne peuvent pas se produire simultanément : $A \\cap B = \\emptyset$.' },
        { term: 'Événement contraire', def: 'Le contraire de $A$, noté $\\bar{A}$, est l\'ensemble des résultats qui ne sont pas dans $A$. $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Définir clairement les événements et l\'univers $\\Omega$. <strong>Exemple :</strong> on lance un dé → $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. $A$ = « obtenir un pair » = $\\{2, 4, 6\\}$.',
          'Calculer $P(A)$, $P(B)$, et si nécessaire $P(A \\cap B)$. <strong>Exemple :</strong> $P(A) = \\dfrac{3}{6} = 0{,}5$. Si $B$ = « obtenir un $6$ », alors $P(A \\cap B) = P(\\{6\\}) = \\dfrac{1}{6}$.',
          'Appliquer les formules : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si incompatibles : $P(A \\cap B) = 0$. <strong>Exemple :</strong> $P(A \\cup B) = \\dfrac{3}{6} + \\dfrac{1}{6} - \\dfrac{1}{6} = \\dfrac{3}{6} = 0{,}5$.'
        ]
      },
      example: {
        statement: 'Dans un jeu de $32$ cartes, on tire une carte au hasard. $A$ = « obtenir un cœur » ($8$ cartes) et $B$ = « obtenir un roi » ($4$ cartes). Quelle est la probabilité d\'obtenir un cœur ou un roi ?',
        steps: [
          '$P(A) = \\dfrac{8}{32} = \\dfrac{1}{4}$ et $P(B) = \\dfrac{4}{32} = \\dfrac{1}{8}$.',
          '$A \\cap B$ = « obtenir le roi de cœur » → $P(A \\cap B) = \\dfrac{1}{32}$.',
          '$P(A \\cup B) = \\dfrac{1}{4} + \\dfrac{1}{8} - \\dfrac{1}{32} = \\dfrac{8 + 4 - 1}{32} = \\dfrac{11}{32} \\approx 0{,}34$.'
        ],
        answer: 'La probabilité d\'obtenir un cœur ou un roi est $\\dfrac{11}{32} \\approx 0{,}34$.'
      },
      formulas: [
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        'Événements incompatibles : $P(A \\cap B) = 0 \\Rightarrow P(A \\cup B) = P(A) + P(B)$',
        '$0 \\leq P(A) \\leq 1$ et $P(\\Omega) = 1$'
      ],
      recap: [
        '$P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$ (équiprobabilité).',
        'Union : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — ne pas oublier de soustraire l\'intersection.',
        'Si $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$), alors $P(A \\cup B) = P(A) + P(B)$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$ — utile quand le contraire est plus simple à calculer.'
      ],
      piege: 'Piège : ne pas oublier de soustraire $P(A \\cap B)$ dans la formule de l\'union ! Si on additionne simplement $P(A) + P(B)$, on compte deux fois les cas où $A$ et $B$ se produisent simultanément.'
    },
    quiz: [
      {
        q: 'On lance un dé. $A$ = « obtenir un pair » et $B$ = « obtenir un multiple de $3$ ». Quelle est $P(A \\cup B)$ ?',
        options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$'],
        answer: 1,
        correction: '$A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$. $P(A) = \\frac{3}{6}$, $P(B) = \\frac{2}{6}$, $P(A \\cap B) = \\frac{1}{6}$. $P(A \\cup B) = \\frac{3+2-1}{6} = \\frac{4}{6} = \\frac{2}{3}$.'
      },
      {
        q: 'Un élève dit : « $P(A) = 0{,}7$ et $P(B) = 0{,}5$, donc $P(A \\cup B) = 0{,}7 + 0{,}5 = 1{,}2$ ». Pourquoi est-ce impossible ?',
        options: [
          'Une probabilité ne peut jamais dépasser $1$ ; il faut soustraire $P(A \\cap B)$',
          'Les deux événements sont incompatibles donc on ne peut pas les additionner',
          'Il aurait dû multiplier : $P(A \\cup B) = 0{,}7 \\times 0{,}5 = 0{,}35$',
          'Le résultat est correct, une probabilité peut dépasser $1$'
        ],
        answer: 0,
        correction: 'Une probabilité est toujours comprise entre $0$ et $1$. En additionnant sans soustraire, l\'élève compte deux fois les résultats favorables aux deux événements. La formule correcte est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si $P(A \\cap B) = 0{,}3$, alors $P(A \\cup B) = 0{,}7 + 0{,}5 - 0{,}3 = 0{,}9 \\leq 1$.'
      },
      {
        q: '$P(A) = 0{,}6$ et $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Quelle est $P(\\overline{A \\cup B})$ ?',
        options: ['$0{,}1$', '$0{,}9$', '$0{,}7$', '$0{,}4$'],
        answer: 0,
        correction: '$P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}2 = 0{,}9$. Donc $P(\\overline{A \\cup B}) = 1 - 0{,}9 = 0{,}1$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pa = pick([0.3, 0.4, 0.5, 0.6]);
        const pb = pick([0.2, 0.3, 0.4]);
        const pab = parseFloat((Math.min(pa, pb) * 0.5).toFixed(1));
        const punion = parseFloat((pa + pb - pab).toFixed(1));
        return {
          statement: `$P(A) = ${pa}$, $P(B) = ${pb}$, $P(A \\cap B) = ${pab}$. Calculer $P(A \\cup B)$.`,
          answer: punion,
          tolerance: 0.01,
          unit: '',
          hint: `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ${pa} + ${pb} - ${pab}$.`,
          solution: [`$P(A \\cup B) = ${pa} + ${pb} - ${pab} = ${punion}$.`]
        };
      }
    },
    probleme: {
      context: 'Dans une classe de $30$ élèves : $18$ pratiquent un sport, $12$ jouent d\'un instrument, et $6$ font les deux activités.',
      tasks: [
        'Calculer la probabilité qu\'un élève tiré au sort pratique un sport.',
        'Calculer la probabilité qu\'il joue d\'un instrument.',
        'Calculer la probabilité qu\'il pratique au moins une des deux activités (sport ou instrument).',
        'Calculer la probabilité qu\'il ne fasse ni sport ni instrument.'
      ],
      solutions: [
        '$P(S) = \\dfrac{18}{30} = 0{,}6$.',
        '$P(I) = \\dfrac{12}{30} = 0{,}4$.',
        '$P(S \\cup I) = 0{,}6 + 0{,}4 - \\dfrac{6}{30} = 1 - 0{,}2 = 0{,}8$.',
        '$P(\\overline{S \\cup I}) = 1 - 0{,}8 = 0{,}2$.'
      ],
      finalAnswer: '$20\\%$ des élèves ne font ni sport ni instrument.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités : calcul et événements',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{2}$'],
          answer: 1,
          points: 2,
          correction: 'Les résultats favorables sont $\\{5, 6\\}$ → $2$ cas favorables sur $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3}$.'
        },
        {
          statement: '$P(A) = 0{,}4$ et $P(B) = 0{,}3$ et $P(A \\cap B) = 0{,}1$. Calculer $P(A \\cup B)$.',
          type: 'numeric',
          answer: 0.6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}4 + 0{,}3 - 0{,}1 = 0{,}6$.'
        },
        {
          statement: 'Si $P(A) = 0{,}75$, que vaut $P(\\bar{A})$ ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}75 = 0{,}25$.'
        },
        {
          statement: 'Deux événements $A$ et $B$ sont incompatibles. Que vaut $P(A \\cap B)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Deux événements incompatibles ne peuvent pas se produire simultanément. Donc $A \\cap B = \\emptyset$ et $P(A \\cap B) = 0$.'
        },
        {
          statement: 'Dans un sac, il y a $5$ billes rouges, $3$ billes bleues et $2$ billes vertes. Quelle est la probabilité de tirer une bille qui n\'est pas verte ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{2}{10}$', '$\\dfrac{8}{10}$', '$\\dfrac{5}{10}$', '$\\dfrac{3}{10}$'],
          answer: 1,
          points: 2,
          correction: '$P(\\text{verte}) = \\dfrac{2}{10}$. $P(\\overline{\\text{verte}}) = 1 - \\dfrac{2}{10} = \\dfrac{8}{10} = 0{,}8$. Il y a $8$ billes non vertes sur $10$.'
        }
      ]
    }
  }

);
