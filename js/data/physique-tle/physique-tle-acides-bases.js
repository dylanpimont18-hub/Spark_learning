/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-acides-bases.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-acides-bases',
    level: 2, subject: 'physique',
    icon: '⚗️',
    title: 'Acides et bases (pH, Ka)',
    subtitle: 'Couple acide/base, constante d\'acidité Ka et pKa, diagramme de prédominance',
    keywords: ['pH', 'Ka', 'pKa', 'Acide-base', 'Prédominance', 'Henderson-Hasselbalch'],
    physics: 'La chimie des couples acide/base permet de comprendre le contrôle du pH d\'une piscine, d\'un sol agricole ou du sang (pH régulé autour de 7,4 grâce à des couples tampons), et de prévoir quelle espèce chimique domine dans un milieu donné selon son acidité.',

    cours: {
      intro: 'Une réaction acide-base est un <strong>transfert de proton</strong> $H^+$ entre un acide et une base. Un couple acide/base $AH/A^-$ est caractérisé par un équilibre : $AH + H_2O \\rightleftharpoons A^- + H_3O^+$.<br/><br/>Cet équilibre ne se déplace jamais totalement dans un sens pour un acide <strong>faible</strong> : à tout instant, les deux espèces $AH$ et $A^-$ coexistent en solution, dans des proportions qui dépendent du pH. La grandeur qui quantifie cet équilibre est la <strong>constante d\'acidité</strong> $K_a$, et son opposé décimal logarithmique, le <strong>$pK_a$</strong>.<br/><br/>Savoir si c\'est la forme acide $AH$ ou la forme basique $A^-$ qui <strong>domine</strong> dans une solution est essentiel : cela se lit directement en comparant le pH de la solution au $pK_a$ du couple, à l\'aide d\'un <strong>diagramme de prédominance</strong>.',
      definitions: [
        { term: 'Couple acide/base', def: 'Deux espèces $AH$ (forme acide) et $A^-$ (forme basique conjuguée) reliées par l\'échange d\'un unique proton $H^+$ : $AH \\rightleftharpoons A^- + H^+$.' },
        { term: 'Constante d\'acidité $K_a$', def: 'Constante d\'équilibre associée à la réaction $AH + H_2O \\rightleftharpoons A^- + H_3O^+$ : $K_a = \\dfrac{[A^-]_{eq}[H_3O^+]_{eq}}{[AH]_{eq}}$, sans unité (concentrations exprimées en mol/L).' },
        { term: '$pK_a$', def: 'Opposé du logarithme décimal de $K_a$ : $pK_a = -\\log(K_a)$. Plus $pK_a$ est petit, plus l\'acide $AH$ est fort (plus il cède facilement son proton).' },
        { term: 'Diagramme de prédominance', def: 'Représentation graphique sur un axe de pH indiquant, de part et d\'autre de $pH = pK_a$, quelle forme du couple ($AH$ ou $A^-$) est <strong>majoritaire</strong>.' }
      ],
      method: {
        title: 'Déterminer l\'espèce prédominante d\'un couple acide/base en 3 étapes',
        steps: [
          '<strong>Identifier le couple</strong> $AH/A^-$ concerné et relever son $pK_a$ (donné ou calculé à partir de $K_a$ via $pK_a = -\\log(K_a)$).',
          '<strong>Comparer le pH de la solution</strong> au $pK_a$ du couple : c\'est cette comparaison, et elle seule, qui détermine quelle forme domine.',
          '<strong>Conclure</strong> : si $pH < pK_a$, la forme acide $AH$ est majoritaire ; si $pH > pK_a$, la forme basique $A^-$ est majoritaire ; si $pH = pK_a$, les deux formes sont à égalité, $[AH] = [A^-]$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Diagramme de prédominance acide/base',
        title: 'Prédominance de AH ou de A⁻ selon le pH, pour un couple de pKa = 4,8',
        description: 'Sur un axe de pH gradué de $0$ à $14$, le point $pH = pK_a$ sépare le domaine où la forme acide $AH$ domine du domaine où la forme basique $A^-$ domine.',
        svg: `
          <svg viewBox="0 0 560 240" role="img" aria-labelledby="predom-title predom-desc">
            <title id="predom-title">Diagramme de predominance acide/base en fonction du pH</title>
            <desc id="predom-desc">Un axe horizontal gradue de 0 a 14 represente le pH. Un point est place sur cet axe a pH egal au pKa du couple, ici 4,8. A gauche de ce point, un premier segment est etiquete AH majoritaire, forme acide. A droite de ce point, un second segment est etiquete A moins majoritaire, forme basique. Au niveau du point, une etiquette indique l'egalite des concentrations AH et A moins.</desc>

            <defs>
              <marker id="arrow-tle-acidebase" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe de pH -->
            <line class="frame-line" x1="40" y1="100" x2="520" y2="100" marker-end="url(#arrow-tle-acidebase)"></line>

            <!-- graduations 0 / 7 / 14 -->
            <line class="grid-line" x1="60" y1="94" x2="60" y2="106"></line>
            <line class="grid-line" x1="280" y1="94" x2="280" y2="106"></line>
            <line class="grid-line" x1="500" y1="94" x2="500" y2="106"></line>
            <text class="tick-label" x="60" y="122" text-anchor="middle">0</text>
            <text class="tick-label" x="280" y="122" text-anchor="middle">7</text>
            <text class="tick-label" x="500" y="122" text-anchor="middle">14</text>
            <text class="tick-label" x="535" y="104" text-anchor="start">pH</text>

            <!-- point pKa -->
            <circle class="plot-point" cx="210.9" cy="100" r="5"></circle>
            <line class="guide-line" x1="210.9" y1="100" x2="210.9" y2="60"></line>
            <text class="annotation-label" x="210.9" y="48" text-anchor="middle">pKa = 4,8</text>
            <text class="tick-label" x="210.9" y="140" text-anchor="middle">[AH] = [A⁻]</text>

            <!-- bracket AH majoritaire (gauche) -->
            <line class="frame-line" x1="60" y1="185" x2="200" y2="185"></line>
            <line class="frame-line" x1="60" y1="180" x2="60" y2="190"></line>
            <line class="frame-line" x1="200" y1="180" x2="200" y2="190"></line>
            <text class="label-soft" x="130" y="205" text-anchor="middle">AH majoritaire (forme acide)</text>

            <!-- bracket A- majoritaire (droite) -->
            <line class="frame-line" x1="222" y1="185" x2="500" y2="185"></line>
            <line class="frame-line" x1="222" y1="180" x2="222" y2="190"></line>
            <line class="frame-line" x1="500" y1="180" x2="500" y2="190"></line>
            <text class="label-soft" x="361" y="205" text-anchor="middle">A⁻ majoritaire (forme basique)</text>
          </svg>
        `,
        notes: [
          'Le point $pH = pK_a$ est le point d\'<strong>égalité</strong> entre les deux formes du couple : $[AH] = [A^-]$.',
          'À gauche de ce point ($pH < pK_a$), le milieu est plus acide : la forme $AH$ (acide) est <strong>majoritaire</strong>.',
          'À droite de ce point ($pH > pK_a$), le milieu est moins acide : la forme $A^-$ (base conjuguée) est <strong>majoritaire</strong>.'
        ],
        reading: 'Repère le point $pK_a$ sur l\'axe gradué, puis regarde de quel côté se trouve le pH de la solution étudiée : à gauche, $AH$ domine ; à droite, $A^-$ domine.',
        caption: 'Diagramme de prédominance d\'un couple acide/base de $pK_a = 4{,}8$ : la comparaison entre le pH de la solution et le $pK_a$ suffit à déterminer l\'espèce majoritaire.'
      },
      example: {
        statement: 'On dissout de l\'acide méthanoïque $HCOOH$ pour obtenir une solution de concentration apportée $C = 1{,}0\\times10^{-2}$ mol/L. La mesure du pH de cette solution donne $pH = 2{,}9$.<br/><br/>Calculer la concentration en ions oxonium à l\'équilibre, puis en déduire $K_a$ et $pK_a$ du couple $HCOOH/HCOO^-$.',
        steps: [
          'Concentration en ions oxonium à l\'équilibre : $[H_3O^+]_{eq} = 10^{-pH} = 10^{-2{,}9} \\approx 1{,}26\\times10^{-3}$ mol/L.',
          'D\'après la stœchiométrie de la réaction $HCOOH + H_2O \\rightleftharpoons HCOO^- + H_3O^+$, on a $[HCOO^-]_{eq} = [H_3O^+]_{eq}$ (l\'eau seule ne fournit pratiquement pas d\'ions $H_3O^+$).',
          'Conservation de la matière : $[HCOOH]_{eq} = C - [H_3O^+]_{eq} = 1{,}0\\times10^{-2} - 1{,}26\\times10^{-3} \\approx 8{,}74\\times10^{-3}$ mol/L.',
          'Constante d\'acidité : $K_a = \\dfrac{[HCOO^-]_{eq}[H_3O^+]_{eq}}{[HCOOH]_{eq}} = \\dfrac{(1{,}26\\times10^{-3})^2}{8{,}74\\times10^{-3}} \\approx 1{,}81\\times10^{-4}$.',
          'Puis $pK_a = -\\log(K_a) = -\\log(1{,}81\\times10^{-4}) \\approx 3{,}74$.'
        ],
        answer: '$K_a \\approx 1{,}8\\times10^{-4}$ et $pK_a \\approx 3{,}74$ (valeur très proche de la valeur tabulée de l\'acide méthanoïque, $pK_a = 3{,}75$). Comme $pH < pK_a$ dans cette solution, la forme acide $HCOOH$ y est <strong>majoritaire</strong>, ce que confirme le calcul.'
      },
      formulas: [
        '$pH = -\\log[H_3O^+]$ et $[H_3O^+] = 10^{-pH}$',
        'Constante d\'acidité : $K_a = \\dfrac{[A^-]_{eq}[H_3O^+]_{eq}}{[AH]_{eq}}$',
        '$pK_a = -\\log(K_a)$, donc $K_a = 10^{-pK_a}$',
        'Relation d\'Henderson-Hasselbalch : $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$',
        'Ratio des formes : $\\dfrac{[A^-]}{[AH]} = 10^{(pH - pK_a)}$'
      ],
      recap: [
        'Un couple acide/base $AH/A^-$ échange <strong>un seul proton</strong> ; les deux formes coexistent toujours en solution pour un acide faible.',
        'Le $pK_a$ caractérise le couple : plus il est petit, plus l\'acide $AH$ est fort.',
        'La comparaison $pH$ vs $pK_a$ suffit à déterminer l\'espèce prédominante, sans calcul supplémentaire : $pH < pK_a \\Rightarrow AH$ majoritaire, $pH > pK_a \\Rightarrow A^-$ majoritaire.',
        'La relation d\'Henderson-Hasselbalch $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$ permet de quantifier précisément le rapport entre les deux formes.'
      ],
      piege: 'Une erreur fréquente est de confondre le $pK_a$ d\'un couple avec le pH d\'une solution : ce sont deux grandeurs différentes, l\'une caractérise le couple chimique, l\'autre l\'état de la solution à un instant donné. Attention également à ne jamais dire qu\'un acide faible est « totalement dissocié » : par définition, $AH$ et $A^-$ coexistent toujours à l\'équilibre, dans des proportions que seul le pH permet de déterminer.'
    },

    quiz: [
      {
        q: 'Un couple acide/base a un $pK_a = 5{,}2$. Une solution de ce couple a un $pH = 3{,}0$. Quelle forme est majoritaire ?',
        options: [
          'La forme acide $AH$, car $pH < pK_a$',
          'La forme basique $A^-$, car $pH < pK_a$',
          'Les deux formes sont à égalité',
          'On ne peut pas savoir sans connaître les concentrations'
        ],
        answer: 0,
        correction: 'Quand $pH < pK_a$, le milieu est relativement acide : la forme acide $AH$ est majoritaire. Ici $3{,}0 < 5{,}2$, donc $AH$ domine largement sur $A^-$.'
      },
      {
        q: 'Que représente la constante d\'acidité $K_a$ d\'un couple $AH/A^-$ ?',
        options: [
          'La concentration initiale de l\'acide $AH$',
          'La constante d\'équilibre de la réaction $AH + H_2O \\rightleftharpoons A^- + H_3O^+$',
          'Le pH de la solution à l\'équilibre',
          'La masse molaire de l\'acide'
        ],
        answer: 1,
        correction: '$K_a$ est la constante d\'équilibre associée à la réaction entre l\'acide $AH$ et l\'eau, définie par $K_a = \\dfrac{[A^-]_{eq}[H_3O^+]_{eq}}{[AH]_{eq}}$. Elle ne dépend que du couple et de la température, pas des concentrations initiales.'
      },
      {
        q: 'Deux acides ont pour $pK_a$ respectifs $3{,}2$ et $4{,}8$. Lequel est l\'acide le plus fort ?',
        options: [
          'Celui de $pK_a = 4{,}8$, car sa valeur est plus grande',
          'Celui de $pK_a = 3{,}2$, car un $pK_a$ plus petit traduit un acide plus fort',
          'Les deux acides ont la même force, le $pK_a$ n\'a pas d\'influence',
          'Impossible à dire sans connaître le pH des solutions'
        ],
        answer: 1,
        correction: 'Plus le $pK_a$ d\'un couple est petit, plus l\'acide $AH$ correspondant cède facilement son proton, donc plus il est fort. Ici l\'acide de $pK_a = 3{,}2$ est le plus fort des deux.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['Ka', 'ratio']);

        if (typeExo === 'Ka') {
          var Cvals = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05];
          var C = pick(Cvals);
          var pHmin = -Math.log10(C) + 0.3;
          var pHmax = -Math.log10(C) + 1.8;
          var pH = randFloat(pHmin, pHmax, 2);
          var H3O = Math.pow(10, -pH);
          var AH = C - H3O;
          var KaRaw = (H3O * H3O) / AH;
          var pKa = parseFloat((-Math.log10(KaRaw)).toFixed(2));
          var expH = Math.floor(Math.log10(H3O));
          var mantH = parseFloat((H3O / Math.pow(10, expH)).toFixed(2));
          var expKa = Math.floor(Math.log10(KaRaw));
          var mantKa = parseFloat((KaRaw / Math.pow(10, expKa)).toFixed(2));
          var contexte = pick([
            'un acide organique dilué en laboratoire',
            'une solution d\'entretien ménager acide',
            'un échantillon d\'eau minérale analysé en classe',
            'une solution préparée pour un contrôle qualité',
            'un acide faible étudié lors d\'un TP de chimie'
          ]);
          return {
            statement: 'Une solution d\'acide faible $AH$ correspondant à ' + contexte + ' a une concentration apportée $C = ' + fr(C, 3) + '$ mol/L. La mesure de son pH donne $pH = ' + fr(pH, 2) + '$.<br/><br/>Calcule le $pK_a$ du couple $AH/A^-$ (arrondi au centième).',
            answer: pKa,
            tolerance: 0.1,
            unit: '',
            hint: 'Calcule d\'abord $[H_3O^+]_{eq} = 10^{-pH}$, puis $[AH]_{eq} = C - [H_3O^+]_{eq}$, puis $K_a = \\dfrac{[H_3O^+]_{eq}^2}{[AH]_{eq}}$ et enfin $pK_a = -\\log(K_a)$.',
            solution: [
              '$[H_3O^+]_{eq} = 10^{-pH} = 10^{-' + fr(pH, 2) + '} \\approx ' + fr(mantH, 2) + ' \\times 10^{' + expH + '}$ mol/L.',
              '$[AH]_{eq} = C - [H_3O^+]_{eq} \\approx ' + fr(C, 3) + ' - ' + fr(parseFloat(H3O.toFixed(5)), 5) + ' \\approx ' + fr(parseFloat(AH.toFixed(5)), 5) + '$ mol/L.',
              '$K_a = \\dfrac{[H_3O^+]_{eq}^2}{[AH]_{eq}} \\approx ' + fr(mantKa, 2) + ' \\times 10^{' + expKa + '}$.',
              'Résultat : $pK_a = -\\log(K_a) \\approx ' + fr(pKa, 2) + '$.'
            ]
          };
        } else {
          var pKaR = randFloat(3.0, 6.0, 1);
          var pHR = randFloat(pKaR - 2, pKaR + 2, 1);
          var ratio = parseFloat(Math.pow(10, pHR - pKaR).toFixed(2));
          var contexte2 = pick([
            'une solution tampon utilisée en laboratoire',
            'un milieu biologique modélisé en cours',
            'une solution de contrôle en chimie analytique',
            'un couple acide/base étudié en TP'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', un couple acide/base $AH/A^-$ a pour constante $pK_a = ' + fr(pKaR, 1) + '$. La solution étudiée a un $pH = ' + fr(pHR, 1) + '$.<br/><br/>Calcule le rapport $\\dfrac{[A^-]}{[AH]}$ dans cette solution (arrondi au centième).',
            answer: ratio,
            tolerance: Math.max(0.02, parseFloat((ratio * 0.03).toFixed(2))),
            unit: '',
            hint: 'Utilise la relation d\'Henderson-Hasselbalch sous sa forme $\\dfrac{[A^-]}{[AH]} = 10^{(pH - pK_a)}$.',
            solution: [
              'Relation d\'Henderson-Hasselbalch : $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$, donc $\\dfrac{[A^-]}{[AH]} = 10^{(pH - pK_a)}$.',
              'Exposant : $pH - pK_a = ' + fr(pHR, 1) + ' - ' + fr(pKaR, 1) + ' = ' + fr(parseFloat((pHR - pKaR).toFixed(2)), 2) + '$.',
              'Résultat : $\\dfrac{[A^-]}{[AH]} = 10^{' + fr(parseFloat((pHR - pKaR).toFixed(2)), 2) + '} \\approx ' + fr(ratio, 2) + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On compare deux couples acide/base : l\'acide benzoïque ($C_6H_5COOH/C_6H_5COO^-$, $pK_{a1} = 4{,}2$) et l\'acide éthanoïque ($CH_3COOH/CH_3COO^-$, $pK_{a2} = 4{,}8$). On prépare une solution où ces deux couples sont présents, à un pH mesuré de $5{,}0$.',
      tasks: [
        'Comparer la force des deux acides à partir de leurs $pK_a$.',
        'Calculer le rapport $\\dfrac{[A^-]}{[AH]}$ pour chacun des deux couples à $pH = 5{,}0$.',
        'Déterminer, pour chaque couple, la forme prédominante à ce pH.'
      ],
      solutions: [
        'L\'acide benzoïque a le $pK_a$ le plus petit ($4{,}2 < 4{,}8$) : c\'est donc l\'acide le <strong>plus fort</strong> des deux, il cède plus facilement son proton que l\'acide éthanoïque.',
        'Pour l\'acide benzoïque : $\\dfrac{[A^-]}{[AH]} = 10^{(5{,}0 - 4{,}2)} = 10^{0{,}8} \\approx 6{,}31$. Pour l\'acide éthanoïque : $\\dfrac{[A^-]}{[AH]} = 10^{(5{,}0 - 4{,}8)} = 10^{0{,}2} \\approx 1{,}58$.',
        'Dans les deux cas, $pH > pK_a$ : la forme basique $A^-$ est prédominante pour les deux couples à ce pH, mais nettement plus marquée pour le couple benzoïque (rapport $\\approx 6{,}3$) que pour le couple éthanoïque (rapport $\\approx 1{,}6$, les deux formes restant plus proches en proportion).'
      ],
      finalAnswer: 'À $pH = 5{,}0$, les formes basiques $C_6H_5COO^-$ et $CH_3COO^-$ sont toutes deux majoritaires, mais dans des proportions différentes selon le $pK_a$ de chaque couple. Cela illustre que la prédominance ne dépend que de l\'écart entre le pH du milieu et le $pK_a$ propre à chaque couple, jamais d\'une comparaison directe entre couples différents.'
    },

    evaluation: {
      title: 'Évaluation — Acides et bases (pH, Ka)',
      duration: '30 min',
      questions: [
        {
          statement: 'Un couple acide/base a $pK_a = 4{,}5$. Une solution de ce couple a $pH = 6{,}0$. Quelle forme est majoritaire ?',
          type: 'multiple-choice',
          options: [
            'La forme acide $AH$',
            'La forme basique $A^-$',
            'Les deux formes sont rigoureusement égales',
            'On ne peut pas conclure'
          ],
          answer: 1,
          points: 2,
          correction: 'Comme $pH > pK_a$ ($6{,}0 > 4{,}5$), la forme basique $A^-$ est majoritaire.'
        },
        {
          statement: 'Une solution a $[H_3O^+]_{eq} = 2{,}0\\times10^{-4}$ mol/L. Calculer son pH (arrondi au dixième).',
          type: 'numeric',
          answer: 3.7,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$pH = -\\log(2{,}0\\times10^{-4}) \\approx 3{,}7$.'
        },
        {
          statement: 'Un couple a $K_a = 6{,}3\\times10^{-5}$. Calculer son $pK_a$ (arrondi au dixième).',
          type: 'numeric',
          answer: 4.2,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$pK_a = -\\log(6{,}3\\times10^{-5}) \\approx 4{,}2$.'
        },
        {
          statement: 'Un couple $AH/A^-$ a $pK_a = 5{,}0$, dans une solution de $pH = 5{,}0$. Calculer le rapport $\\dfrac{[A^-]}{[AH]}$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: 'Quand $pH = pK_a$, $\\dfrac{[A^-]}{[AH]} = 10^{0} = 1$ : les deux formes sont exactement à égalité.'
        },
        {
          statement: 'Sur un diagramme de prédominance, plus le $pK_a$ d\'un couple est petit :',
          type: 'multiple-choice',
          options: [
            'Plus l\'acide $AH$ associé est fort',
            'Plus l\'acide $AH$ associé est faible',
            'Plus le pH de toute solution de ce couple est élevé',
            'Cela n\'a aucun rapport avec la force de l\'acide'
          ],
          answer: 0,
          points: 2,
          correction: 'Un $pK_a$ petit signifie que l\'équilibre $AH + H_2O \\rightleftharpoons A^- + H_3O^+$ est plus déplacé vers la formation de $H_3O^+$ : l\'acide $AH$ est donc plus fort.'
        }
      ]
    }
  });
