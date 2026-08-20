/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-acides-bases.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-acides-bases',
    level: 2, subject: 'physique',
    icon: '🧪',
    title: 'Acides et bases : pH et constante d\'acidité',
    subtitle: 'Couple acide/base, constante d\'acidité Ka, pKa, diagramme de prédominance, pH de solutions acido-basiques',
    keywords: ['Couple acide/base', 'Constante d\'acidité', 'pKa', 'Diagramme de prédominance', 'pH'],
    physics: 'Le diagramme de prédominance permet de contrôler le pH des eaux de piscine ou d\'effluents, de comprendre la régulation du pH sanguin (couple CO2/HCO3-), et de choisir un indicateur coloré adapté à un titrage en fonction du pKa des espèces en présence.',

    cours: {
      intro: 'Un <strong>couple acide/base</strong> de Brønsted est formé de deux espèces, l\'acide $AH$ et sa base conjuguée $A^-$, reliées par l\'échange d\'un ion $H^+$ : en solution aqueuse, $AH+H_2O\\rightleftharpoons A^-+H_3O^+$.<br/><br/>La <strong>constante d\'acidité</strong> $K_a$ de ce couple caractérise la position de cet équilibre : $K_a=\\dfrac{[A^-][H_3O^+]}{[AH]}$. On lui associe le $pK_a=-\\log K_a$, une grandeur bien plus pratique à manipuler que $K_a$ lui-même.<br/><br/>En combinant cette expression avec la définition du pH, on obtient une relation qui permet de savoir, à un pH donné, quelle est l\'espèce <strong>prédominante</strong> du couple : c\'est le principe du <strong>diagramme de prédominance</strong>.',
      definitions: [
        { term: 'Couple acide/base ($AH/A^-$)', def: 'Deux espèces reliées par l\'échange d\'un ion $H^+$ : $AH\\rightleftharpoons A^-+H^+$. $AH$ est l\'acide (donneur de $H^+$), $A^-$ sa base conjuguée (accepteur de $H^+$).' },
        { term: 'Constante d\'acidité ($K_a$)', def: 'Constante d\'équilibre associée à la réaction $AH+H_2O\\rightleftharpoons A^-+H_3O^+$ : $K_a=\\dfrac{[A^-][H_3O^+]}{[AH]}$. Elle ne dépend que de la température.' },
        { term: '$pK_a$', def: 'Grandeur définie par $pK_a=-\\log K_a$, sans unité, généralement comprise entre 0 et 14 pour les couples usuels. Plus $pK_a$ est petit, plus l\'acide $AH$ est fort (dissocié).' },
        { term: 'Diagramme de prédominance', def: 'Représentation graphique, sur un axe de pH, des zones où $AH$ ou $A^-$ est majoritaire : $AH$ prédomine si $pH \\lt pK_a$, $A^-$ prédomine si $pH \\gt pK_a$, les deux espèces sont en quantités égales si $pH=pK_a$.' }
      ],
      method: {
        title: 'Exploiter un diagramme de prédominance en 3 étapes',
        steps: [
          '<strong>Identifier</strong> le couple acide/base $AH/A^-$ concerné et sa constante $pK_a$ (donnée ou calculée à partir d\'un état d\'équilibre connu).',
          '<strong>Comparer</strong> le pH de la solution à $pK_a$ : si $pH \\lt pK_a$, $AH$ prédomine ; si $pH \\gt pK_a$, $A^-$ prédomine.',
          '<strong>Quantifier</strong>, si besoin, la proportion des deux espèces avec $pH=pK_a+\\log\\dfrac{[A^-]}{[AH]}$ : cette relation donne le rapport $\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}$ à partir du pH, ou inversement le pH à partir du rapport.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Diagramme de prédominance acido-basique',
        title: 'Zones de prédominance de AH et A⁻ selon le pH',
        description: 'Sur l\'axe du pH, la position de $pK_a$ sépare deux zones : $AH$ prédomine pour $pH \\lt pK_a$, $A^-$ prédomine pour $pH \\gt pK_a$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="predom-title predom-desc">
            <title id="predom-title">Diagramme de predominance d'un couple acide-base</title>
            <desc id="predom-desc">Un axe gradue horizontal represente le pH, de 0 a 14. Une zone claire a gauche d'une frontiere marquee pKa est etiquetee AH predominant, et une zone plus foncee a droite de cette frontiere est etiquetee A moins predominant. Un repere vertical marque la position exacte de pKa sur l'axe, avec sa valeur numerique indiquee en dessous.</desc>

            <!-- zone AH predominant -->
            <rect x="60" y="90" width="151" height="60" fill="var(--diagram-accent)" opacity="0.15"></rect>
            <!-- zone A- predominant -->
            <rect x="211" y="90" width="289" height="60" fill="var(--diagram-accent)" opacity="0.35"></rect>

            <text class="tick-label" x="135" y="125" text-anchor="middle">AH</text>
            <text class="tick-label" x="135" y="140" text-anchor="middle">prédominant</text>
            <text class="tick-label" x="355" y="125" text-anchor="middle">A⁻</text>
            <text class="tick-label" x="355" y="140" text-anchor="middle">prédominant</text>

            <!-- axe pH -->
            <line class="frame-line" x1="60" y1="170" x2="500" y2="170"></line>
            <text class="tick-label" x="60" y="188" text-anchor="middle">0</text>
            <text class="tick-label" x="280" y="188" text-anchor="middle">7</text>
            <text class="tick-label" x="500" y="188" text-anchor="middle">14</text>
            <text class="tick-label" x="515" y="174" text-anchor="start">pH</text>

            <!-- frontiere pKa -->
            <line class="frame-line" x1="211" y1="150" x2="211" y2="178"></line>
            <circle class="plot-point-alt" cx="211" cy="170" r="5"></circle>
            <text class="annotation-label" x="211" y="198" text-anchor="middle">pKa</text>
          </svg>
        `,
        notes: [
          'À gauche de $pK_a$ ($pH \\lt pK_a$, milieu plus acide), c\'est la forme <strong>acide</strong> $AH$ qui prédomine.',
          'À droite de $pK_a$ ($pH \\gt pK_a$, milieu plus basique), c\'est la forme <strong>basique</strong> $A^-$ qui prédomine.',
          'Exactement en $pH=pK_a$, les deux espèces sont présentes en <strong>quantités égales</strong> : $[AH]=[A^-]$.'
        ],
        reading: 'Repère la position de $pK_a$ sur l\'axe du pH, puis regarde de quel côté se situe le pH de la solution étudiée : la zone correspondante indique l\'espèce prédominante.',
        caption: 'Diagramme de prédominance du couple $AH/A^-$ : la position de $pK_a$ sur l\'axe du pH sépare la zone où $AH$ prédomine de celle où $A^-$ prédomine.'
      },
      example: {
        statement: 'Le couple acide éthanoïque / ion éthanoate a pour constante $pK_a=4{,}8$. Une solution de ce couple a un pH mesuré de $5{,}2$.<br/><br/>Déterminer l\'espèce prédominante, puis calculer le rapport $\\dfrac{[A^-]}{[AH]}$.',
        steps: [
          'Comparaison du pH à $pK_a$ : $pH=5{,}2 \\gt pK_a=4{,}8$. C\'est donc la base conjuguée $A^-$ (l\'ion éthanoate) qui prédomine.',
          'Relation entre pH et rapport des concentrations : $pH=pK_a+\\log\\dfrac{[A^-]}{[AH]}$, donc $\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}$.',
          'Application numérique : $\\dfrac{[A^-]}{[AH]}=10^{(5{,}2-4{,}8)}=10^{0{,}4}\\approx2{,}51$.'
        ],
        answer: 'L\'ion éthanoate $A^-$ prédomine, avec $\\dfrac{[A^-]}{[AH]}\\approx2{,}51$ : il y a environ $2{,}5$ fois plus d\'ions éthanoate que de molécules d\'acide éthanoïque non dissociées dans cette solution.'
      },
      formulas: [
        '$K_a=\\dfrac{[A^-][H_3O^+]}{[AH]}$ (constante d\'acidité)',
        '$pK_a=-\\log K_a$',
        'Relation pH / rapport des concentrations : $pH=pK_a+\\log\\dfrac{[A^-]}{[AH]}$',
        'Rapport des concentrations à partir du pH : $\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}$',
        'Critère de prédominance : $pH \\lt pK_a \\Rightarrow AH$ prédomine ; $pH \\gt pK_a \\Rightarrow A^-$ prédomine'
      ],
      recap: [
        'Le $pK_a$ d\'un couple acide/base est la valeur de pH pour laquelle $[AH]=[A^-]$ : c\'est la <strong>frontière</strong> du diagramme de prédominance.',
        'Plus le pH s\'éloigne de $pK_a$, plus le rapport $\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}$ s\'éloigne de 1 : l\'espèce prédominante devient largement majoritaire.',
        'Un écart d\'une seule unité de pH par rapport à $pK_a$ multiplie (ou divise) le rapport $\\dfrac{[A^-]}{[AH]}$ par <strong>10</strong> : conséquence directe de l\'échelle logarithmique du pH.',
        'Le diagramme de prédominance ne dépend que du $pK_a$ du couple, jamais des concentrations absolues des espèces en solution.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'un $pK_a$ élevé signifie un acide fort : c\'est l\'inverse, plus $pK_a$ est petit, plus l\'acide $AH$ est dissocié (fort), car cela correspond à un $K_a$ grand. Attention également à ne pas inverser le sens du critère de prédominance : c\'est bien la forme acide $AH$ qui prédomine à pH bas (milieu acide), pas l\'inverse.'
    },

    quiz: [
      {
        q: 'Pour le couple $NH_4^+/NH_3$, $pK_a=9{,}2$. Dans une solution de $pH=7{,}0$, quelle espèce prédomine ?',
        options: [
          '$NH_4^+$ (l\'acide), car $pH \\lt pK_a$',
          '$NH_3$ (la base), car $pH \\lt pK_a$',
          'Les deux espèces sont en quantités égales',
          'Impossible à déterminer sans connaître les concentrations'
        ],
        answer: 0,
        correction: '$pH=7{,}0 \\lt pK_a=9{,}2$ : c\'est donc la forme acide, $NH_4^+$, qui prédomine.'
      },
      {
        q: 'Parmi deux acides $AH_1$ ($pK_{a1}=2{,}0$) et $AH_2$ ($pK_{a2}=8{,}0$), lequel est le plus fort (le plus dissocié) ?',
        options: [
          '$AH_1$, car son $pK_a$ est plus petit',
          '$AH_2$, car son $pK_a$ est plus grand',
          'Les deux acides sont également forts',
          'Impossible à dire sans connaître les concentrations'
        ],
        answer: 0,
        correction: 'Un $pK_a$ petit correspond à un $K_a$ grand, donc à un équilibre de dissociation davantage déplacé vers $A^-$ : l\'acide est plus fort. $AH_1$ ($pK_{a1}=2{,}0$) est donc plus fort que $AH_2$ ($pK_{a2}=8{,}0$).'
      },
      {
        q: 'Pour un couple de $pK_a=4{,}8$, une solution a un $pH=3{,}8$. Calculer le rapport $\\dfrac{[A^-]}{[AH]}$.',
        options: [
          '$0{,}1$',
          '$10$',
          '$1$',
          '$-1$'
        ],
        answer: 0,
        correction: '$\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}=10^{(3{,}8-4{,}8)}=10^{-1}=0{,}1$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var pKaValues = [3.2, 3.8, 4.2, 4.8, 5.0, 7.2, 9.2];
        var typeExo = pick(['ratio', 'pH']);
        var contexte = pick([
          'une solution tampon de laboratoire',
          'un milieu biologique régulé (sang, sol agricole)',
          'une solution de contrôle qualité en chimie analytique',
          'un bain de traitement en agroalimentaire',
          'une solution utilisée en travaux pratiques de chimie'
        ]);

        if (typeExo === 'ratio') {
          var pKa1 = pick(pKaValues);
          var offset = randFloat(-2, 2, 1);
          var pH1 = parseFloat((pKa1 + offset).toFixed(1));
          var ratio1 = parseFloat(Math.pow(10, offset).toFixed(3));
          return {
            statement: 'Dans ' + contexte + ', un couple acide/base a pour constante $pK_a=' + fr(pKa1, 1) + '$. La solution étudiée a un $pH=' + fr(pH1, 1) + '$.<br/><br/>Calcule le rapport $\\dfrac{[A^-]}{[AH]}$ de cette solution (sans unité, arrondi au millième).',
            answer: ratio1,
            tolerance: Math.max(0.005, parseFloat((ratio1 * 0.03).toFixed(3))),
            unit: '',
            hint: '$\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}$.',
            solution: [
              'Relation : $\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}=10^{(' + fr(pH1, 1) + '-' + fr(pKa1, 1) + ')}$.',
              'Exposant : $' + fr(pH1, 1) + '-' + fr(pKa1, 1) + '=' + fr(offset, 1) + '$.',
              'Résultat : $\\dfrac{[A^-]}{[AH]}\\approx' + fr(ratio1, 3) + '$.'
            ]
          };
        } else {
          var pKa2 = pick(pKaValues);
          var ratio2 = pick([0.1, 0.2, 0.5, 1, 2, 5, 10, 20]);
          var pH2 = parseFloat((pKa2 + Math.log10(ratio2)).toFixed(2));
          return {
            statement: 'Dans ' + contexte + ', un couple acide/base a pour constante $pK_a=' + fr(pKa2, 1) + '$. On y mesure un rapport $\\dfrac{[A^-]}{[AH]}=' + fr(ratio2, 1) + '$.<br/><br/>Calcule le pH de cette solution (arrondi au centième).',
            answer: pH2,
            tolerance: 0.05,
            unit: '',
            hint: '$pH=pK_a+\\log\\dfrac{[A^-]}{[AH]}$.',
            solution: [
              'Relation : $pH=pK_a+\\log\\dfrac{[A^-]}{[AH]}=' + fr(pKa2, 1) + '+\\log(' + fr(ratio2, 1) + ')$.',
              'Résultat : $pH\\approx' + fr(pH2, 2) + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le couple ion ammonium / ammoniac ($NH_4^+/NH_3$) a pour constante $pK_a=9{,}2$. Une solution de ce couple a un pH mesuré de $8{,}5$.',
      tasks: [
        'Déterminer l\'espèce prédominante dans cette solution.',
        'Calculer le rapport $\\dfrac{[NH_3]}{[NH_4^+]}$ de cette solution.',
        'Calculer le pH auquel il faudrait amener cette solution pour que $NH_3$ devienne $10$ fois plus concentré que $NH_4^+$.'
      ],
      solutions: [
        '$pH=8{,}5 \\lt pK_a=9{,}2$ : c\'est donc la forme acide, $NH_4^+$, qui prédomine dans cette solution.',
        '$\\dfrac{[NH_3]}{[NH_4^+]}=10^{(pH-pK_a)}=10^{(8{,}5-9{,}2)}=10^{-0{,}7}\\approx0{,}20$.',
        'On veut $\\dfrac{[NH_3]}{[NH_4^+]}=10$ : $pH=pK_a+\\log(10)=9{,}2+1=10{,}2$.'
      ],
      finalAnswer: 'À $pH=8{,}5$, $NH_4^+$ prédomine largement ($\\dfrac{[NH_3]}{[NH_4^+]}\\approx0{,}20$, soit environ $5$ fois moins de $NH_3$ que de $NH_4^+$). Il faudrait élever le pH jusqu\'à $10{,}2$ (soit $1$ unité au-dessus du $pK_a$) pour inverser complètement la situation et obtenir $10$ fois plus de $NH_3$ que de $NH_4^+$ : c\'est ce type de calcul qui guide, par exemple, le choix du pH pour éliminer l\'azote ammoniacal d\'un effluent par stripping.'
    },

    evaluation: {
      title: 'Évaluation — Acides et bases : pH et constante d\'acidité',
      duration: '30 min',
      questions: [
        {
          statement: 'Pour un couple $AH/A^-$ de $pK_a=6{,}0$, une solution a un $pH=6{,}0$. Que peut-on affirmer ?',
          type: 'multiple-choice',
          options: [
            '$AH$ prédomine largement',
            '$A^-$ prédomine largement',
            '$[AH]=[A^-]$',
            'Le pH n\'a pas de sens à cette valeur'
          ],
          answer: 2,
          points: 2,
          correction: 'Lorsque $pH=pK_a$, les deux espèces du couple sont présentes en quantités égales : $[AH]=[A^-]$, par définition même du $pK_a$.'
        },
        {
          statement: 'Un couple acide/base a $pK_a=5{,}0$. Une solution a un $pH=6{,}0$. Calculer le rapport $\\dfrac{[A^-]}{[AH]}$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0.5,
          unit: '',
          points: 3,
          correction: '$\\dfrac{[A^-]}{[AH]}=10^{(pH-pK_a)}=10^{(6{,}0-5{,}0)}=10^1=10$.'
        },
        {
          statement: 'Un acide $AH$ est d\'autant plus fort (plus dissocié) que :',
          type: 'multiple-choice',
          options: [
            'Son $pK_a$ est grand',
            'Son $pK_a$ est petit',
            'Sa concentration est grande',
            'Le volume de solution est grand'
          ],
          answer: 1,
          points: 2,
          correction: 'Un $pK_a$ petit correspond à un $K_a$ grand ($K_a=10^{-pK_a}$), donc à un équilibre plus déplacé vers la forme dissociée $A^-$ : l\'acide est plus fort.'
        },
        {
          statement: 'Un couple acide/base a $pK_a=4{,}0$. On y mesure un rapport $\\dfrac{[A^-]}{[AH]}=100$. Calculer le pH de la solution.',
          type: 'numeric',
          answer: 6,
          tolerance: 0.1,
          unit: '',
          points: 3,
          correction: '$pH=pK_a+\\log\\left(\\dfrac{[A^-]}{[AH]}\\right)=4{,}0+\\log(100)=4{,}0+2=6{,}0$.'
        },
        {
          statement: 'Sur un diagramme de prédominance, la zone où $A^-$ prédomine se situe :',
          type: 'multiple-choice',
          options: [
            'À gauche de $pK_a$ (pH plus faible)',
            'À droite de $pK_a$ (pH plus élevé)',
            'Toujours entre $pH=0$ et $pH=7$',
            'Toujours entre $pH=7$ et $pH=14$'
          ],
          answer: 1,
          points: 2,
          correction: 'La base conjuguée $A^-$ prédomine lorsque $pH \\gt pK_a$, c\'est-à-dire dans la zone à droite de $pK_a$ sur l\'axe du pH — quelle que soit la valeur exacte de $pK_a$.'
        }
      ]
    }
  });
