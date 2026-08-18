/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-solutions.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-solutions',
    level: 2, subject: 'physique',
    icon: '🧪',
    title: `Solutions aqueuses (concentration)`,
    subtitle: `Concentration molaire, concentration massique, dilution`,
    keywords: ['Solution aqueuse', 'Concentration molaire', 'Concentration massique', 'Dilution', `Soluté`],
    physics: `La notion de concentration permet de doser le sel dans un sérum physiologique, de préparer une solution désinfectante à la bonne dilution, de vérifier la conformité d'une eau minérale, ou de comprendre les étiquettes indiquant la teneur en principe actif d'un médicament en solution.`,

    cours: {
      intro: `Une <strong>solution aqueuse</strong> est obtenue en dissolvant une espèce chimique, le <strong>soluté</strong>, dans un grand volume d'eau, le <strong>solvant</strong>. La quantité de soluté dissoute dans un volume donné de solution définit sa <strong>concentration</strong>.<br/><br/>On distingue deux façons d'exprimer cette concentration. La <strong>concentration molaire</strong> $C = \\dfrac{n}{V}$ (en mol/L) utilise la quantité de matière $n$ (en mol) de soluté dissoute dans le volume $V$ (en L) de solution. La <strong>concentration massique</strong> $C_m = \\dfrac{m}{V}$ (en g/L) utilise directement la masse $m$ (en g) de soluté dissoute. Les deux sont reliées par la masse molaire $M$ du soluté : $C_m = C \\times M$.<br/><br/>Lorsqu'on ajoute du solvant à une solution existante, on effectue une <strong>dilution</strong> : le volume augmente, mais la quantité de matière de soluté prélevée reste inchangée. La concentration diminue donc, selon la relation $C_1 V_1 = C_2 V_2$.`,
      definitions: [
        { term: `Solution aqueuse`, def: `Mélange homogène obtenu en dissolvant une espèce chimique, le <strong>soluté</strong>, dans l'eau, le <strong>solvant</strong>.` },
        { term: `Concentration molaire`, def: `Quantité de matière $n$ (en mol) de soluté dissoute par litre de solution : $C = \\dfrac{n}{V}$, en mol/L.` },
        { term: `Concentration massique`, def: `Masse $m$ (en g) de soluté dissoute par litre de solution : $C_m = \\dfrac{m}{V}$, en g/L. Reliée à la concentration molaire par $C_m = C \\times M$, où $M$ est la masse molaire du soluté (en g/mol).` },
        { term: `Dilution`, def: `Opération consistant à ajouter du solvant à une solution pour diminuer sa concentration, sans changer la quantité de matière de soluté prélevée : $C_1 V_1 = C_2 V_2$ (indices 1 pour la solution mère, 2 pour la solution diluée).` },
        { term: `Facteur de dilution`, def: `Nombre $F = \\dfrac{C_1}{C_2} = \\dfrac{V_2}{V_1}$ qui indique combien de fois la concentration a été divisée lors de la dilution (par exemple $F = 10$ pour une dilution au dixième).` }
      ],
      method: {
        title: `Réaliser et calculer une dilution, en 3 étapes`,
        steps: [
          `<strong>Prélever un volume $V_1$</strong> de solution mère (de concentration $C_1$ connue) à l'aide d'une pipette jaugée.`,
          `<strong>Introduire ce volume dans une fiole jaugée</strong> de volume final $V_2 > V_1$, puis compléter avec de l'eau distillée jusqu'au <strong>trait de jauge</strong> (repère précis gravé sur le col de la fiole).`,
          `<strong>Calculer la nouvelle concentration</strong> $C_2$ grâce à la relation de conservation de la quantité de matière de soluté : $C_1 V_1 = C_2 V_2$, donc $C_2 = \\dfrac{C_1 V_1}{V_2}$.`
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: `Dilution d'une solution`,
        title: `Conservation de la quantité de matière de soluté lors d'une dilution`,
        description: `Le même nombre de particules de soluté prélevées dans la solution mère ($C_1, V_1$) se retrouve dans un volume plus grand après ajout de solvant jusqu'au trait de jauge, donnant la solution fille diluée ($C_2, V_2$).`,
        svg: `
          <svg viewBox="0 0 560 330" role="img" aria-labelledby="solutions-2nde-title solutions-2nde-desc">
            <title id="solutions-2nde-title">Schema d'une dilution entre une solution mere et une solution fille</title>
            <desc id="solutions-2nde-desc">Deux flacons en forme de ballon a col sont representes cote a cote. Le flacon de gauche, la solution mere, contient douze points representant des particules de solute, denses dans un petit volume. Une fleche horizontale relie ce flacon a celui de droite, une fiole jaugee munie d'un trait de jauge sur son col. Le flacon de droite contient exactement le meme nombre de douze points, mais repartis dans un volume plus grand incluant le col, jusqu'au trait de jauge, traduisant une concentration plus faible pour la meme quantite de matiere.</desc>

            <defs>
              <marker id="arrow-phys2nde-solutions" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- flacon de gauche : solution mere -->
            <ellipse class="frame-line" cx="140" cy="220" rx="70" ry="55" fill="none"></ellipse>
            <rect class="frame-line" x="120" y="110" width="40" height="55" fill="none"></rect>

            <g>
              <circle class="plot-point" cx="110" cy="200" r="4"></circle>
              <circle class="plot-point" cx="140" cy="195" r="4"></circle>
              <circle class="plot-point" cx="170" cy="200" r="4"></circle>
              <circle class="plot-point" cx="120" cy="220" r="4"></circle>
              <circle class="plot-point" cx="150" cy="215" r="4"></circle>
              <circle class="plot-point" cx="180" cy="222" r="4"></circle>
              <circle class="plot-point" cx="105" cy="240" r="4"></circle>
              <circle class="plot-point" cx="135" cy="245" r="4"></circle>
              <circle class="plot-point" cx="165" cy="242" r="4"></circle>
              <circle class="plot-point" cx="190" cy="235" r="4"></circle>
              <circle class="plot-point" cx="125" cy="205" r="4"></circle>
              <circle class="plot-point" cx="155" cy="235" r="4"></circle>
            </g>

            <text class="label-soft" x="140" y="298" text-anchor="middle">Solution mère (C₁, V₁)</text>

            <!-- fleche de dilution -->
            <line class="curve-main" x1="228" y1="195" x2="382" y2="195" marker-end="url(#arrow-phys2nde-solutions)"></line>
            <text class="tick-label" x="305" y="180" text-anchor="middle">+ solvant, jusqu'au trait de jauge</text>

            <!-- flacon de droite : fiole jaugee, solution fille -->
            <ellipse class="frame-line" cx="420" cy="220" rx="70" ry="55" fill="none"></ellipse>
            <rect class="frame-line" x="400" y="90" width="40" height="75" fill="none"></rect>
            <line class="frame-line" x1="394" y1="140" x2="446" y2="140"></line>
            <text class="tick-label" x="452" y="144" text-anchor="start">Trait de jauge</text>

            <g>
              <circle class="plot-point" cx="390" cy="205" r="4"></circle>
              <circle class="plot-point" cx="420" cy="195" r="4"></circle>
              <circle class="plot-point" cx="450" cy="205" r="4"></circle>
              <circle class="plot-point" cx="400" cy="225" r="4"></circle>
              <circle class="plot-point" cx="430" cy="220" r="4"></circle>
              <circle class="plot-point" cx="455" cy="230" r="4"></circle>
              <circle class="plot-point" cx="385" cy="245" r="4"></circle>
              <circle class="plot-point" cx="415" cy="250" r="4"></circle>
              <circle class="plot-point" cx="445" cy="242" r="4"></circle>
              <circle class="plot-point" cx="465" cy="235" r="4"></circle>
              <circle class="plot-point" cx="405" cy="150" r="4"></circle>
              <circle class="plot-point" cx="435" cy="150" r="4"></circle>
            </g>

            <text class="label-soft" x="420" y="298" text-anchor="middle">Solution fille (C₂, V₂)</text>
          </svg>
        `,
        notes: [
          `La solution mère contient une certaine quantité de matière de soluté $n$ dissoute dans un volume $V_1$ : c'est le rapport $\\dfrac{n}{V_1}$ qui définit sa concentration molaire $C_1$.`,
          `Lors d'une <strong>dilution</strong>, on prélève un volume $V_1$ de solution mère que l'on introduit dans une fiole jaugée, puis on complète avec du solvant jusqu'au <strong>trait de jauge</strong> pour atteindre un volume final $V_2 > V_1$.`,
          `La quantité de matière de soluté prélevée ne change pas pendant la dilution (même nombre de points sur le schéma) : seul le volume augmente, donc la concentration diminue. C'est ce que traduit la relation $C_1 V_1 = C_2 V_2$.`
        ],
        reading: `Compare le nombre de particules de soluté (points) dans les deux flacons : il est identique, mais réparti dans un volume plus grand à droite — c'est pour cela que la solution est plus diluée.`,
        caption: `Schéma d'une dilution : le même nombre de particules de soluté prélevées dans la solution mère ($C_1, V_1$) se retrouve dans un plus grand volume de solvant, jusqu'au trait de jauge, donnant la solution fille diluée ($C_2, V_2$).`
      },
      example: {
        statement: `On dissout $n = 0{,}2$ mol de chlorure de sodium (sel) dans une fiole jaugée que l'on complète avec de l'eau distillée jusqu'à un volume final $V = 500$ mL.<br/><br/>Calculer la concentration molaire $C$ de la solution obtenue.`,
        steps: [
          `Convertir le volume en litres : $V = 500$ mL $= 0{,}5$ L.`,
          `Appliquer la formule de la concentration molaire : $C = \\dfrac{n}{V} = \\dfrac{0{,}2}{0{,}5}$.`,
          `Résultat : $C = 0{,}4$ mol/L.`
        ],
        answer: `$C = 0{,}4$ mol/L. Cette concentration ne dépend que de la quantité de matière dissoute et du volume final de la solution — peu importe l'ordre dans lequel le soluté et le solvant ont été ajoutés.`
      },
      formulas: [
        `Concentration molaire : $C = \\dfrac{n}{V}$, en mol/L`,
        `Concentration massique : $C_m = \\dfrac{m}{V}$, en g/L`,
        `Relation entre les deux : $C_m = C \\times M$`,
        `Dilution : $C_1 V_1 = C_2 V_2$`,
        `Facteur de dilution : $F = \\dfrac{C_1}{C_2} = \\dfrac{V_2}{V_1}$`
      ],
      recap: [
        `La <strong>concentration molaire</strong> ($C = n/V$, en mol/L) et la <strong>concentration massique</strong> ($C_m = m/V$, en g/L) décrivent toutes deux la quantité de soluté dissoute dans un volume de solution, reliées par $C_m = C \\times M$.`,
        `Une <strong>dilution</strong> ajoute du solvant sans changer la quantité de matière de soluté : le volume augmente, la concentration diminue.`,
        `La relation $C_1 V_1 = C_2 V_2$ traduit cette conservation de la quantité de matière lors d'une dilution.`,
        `Le <strong>trait de jauge</strong> d'une fiole jaugée garantit un volume final précis, indispensable pour calculer une concentration fiable.`
      ],
      piege: `Une confusion fréquente consiste à croire qu'une dilution modifie la quantité de matière de soluté prélevée. Attention, c'est faux : diluer ne fait qu'ajouter du solvant, la quantité de matière de soluté reste rigoureusement la même avant et après — c'est justement parce que cette quantité est répartie dans un plus grand volume que la concentration diminue.`
    },

    quiz: [
      {
        q: `La concentration molaire d'une solution se calcule par :`,
        options: [
          `$C = n \\times V$`,
          `$C = \\dfrac{n}{V}$`,
          `$C = \\dfrac{V}{n}$`,
          `$C = n + V$`
        ],
        answer: 1,
        correction: `La concentration molaire est le rapport de la quantité de matière de soluté sur le volume de solution : $C = \\dfrac{n}{V}$, en mol/L.`
      },
      {
        q: `Lors d'une dilution, la quantité de matière de soluté prélevée :`,
        options: [
          `Augmente`,
          `Diminue`,
          `Reste inchangée`,
          `Devient nulle`
        ],
        answer: 2,
        correction: `Diluer consiste uniquement à ajouter du solvant : la quantité de matière de soluté prélevée dans la solution mère <strong>reste inchangée</strong>. C'est la répartition de cette même quantité dans un plus grand volume qui fait diminuer la concentration.`
      },
      {
        q: `On prélève $V_1 = 10$ mL d'une solution mère de concentration $C_1 = 0{,}5$ mol/L, que l'on dilue jusqu'à un volume final $V_2 = 100$ mL. Quelle est la concentration $C_2$ de la solution diluée ?`,
        options: [
          `$C_2 = 5$ mol/L`,
          `$C_2 = 0{,}05$ mol/L`,
          `$C_2 = 0{,}5$ mol/L`,
          `$C_2 = 50$ mol/L`
        ],
        answer: 1,
        correction: `$C_2 = \\dfrac{C_1 V_1}{V_2} = \\dfrac{0{,}5 \\times 10}{100} = \\dfrac{5}{100} = 0{,}05$ mol/L.`
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['concentration_molaire', 'dilution']);

        if (typeExo === 'concentration_molaire') {
          var n = randFloat(0.05, 2, 2);
          var V = randFloat(0.1, 2, 2);
          var C = parseFloat((n / V).toFixed(3));
          var contexte = pick([
            `une solution préparée en laboratoire`,
            `un flacon de sérum physiologique reconstitué`,
            `une solution utilisée pour un contrôle qualité`,
            `un bain de traitement de surface`
          ]);
          return {
            statement: 'On dissout une quantité de matière $n = ' + fr(n, 2) + '$ mol de soluté dans ' + contexte + ', pour obtenir un volume final $V = ' + fr(V, 2) + '$ L.<br/><br/>Calcule la concentration molaire $C$ de cette solution (en mol/L, arrondie au millième).',
            answer: C,
            tolerance: Math.max(0.005, parseFloat((C * 0.03).toFixed(3))),
            unit: 'mol/L',
            hint: 'La concentration molaire se calcule par $C = \\dfrac{n}{V}$.',
            solution: [
              'Formule : $C = \\dfrac{n}{V}$.',
              'Application numérique : $C = \\dfrac{' + fr(n, 2) + '}{' + fr(V, 2) + '}$.',
              'Résultat : $C \\approx ' + fr(C, 3) + '$ mol/L.'
            ]
          };
        } else {
          var C1 = pick([0.1, 0.2, 0.5, 1, 2]);
          var V1 = pick([5, 10, 15, 20, 25]);
          var V2 = pick([50, 100, 200, 250, 500]);
          var C2 = parseFloat((C1 * V1 / V2).toFixed(4));
          var contexte2 = pick([
            `un protocole de dilution en travaux pratiques`,
            `la préparation d'une solution diluée pour un titrage`,
            `un contrôle qualité en laboratoire d'analyses`,
            `la préparation d'un désinfectant de surface`
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte2 + ', on prélève un volume $V_1 = ' + V1 + '$ mL d\'une solution mère de concentration $C_1 = ' + fr(C1, 1) + '$ mol/L, que l\'on dilue jusqu\'à un volume final $V_2 = ' + V2 + '$ mL.<br/><br/>Calcule la concentration $C_2$ de la solution diluée (en mol/L, arrondie au dix-millième).',
            answer: C2,
            tolerance: Math.max(0.0005, parseFloat((C2 * 0.03).toFixed(4))),
            unit: 'mol/L',
            hint: 'Utilise la relation de dilution $C_1 V_1 = C_2 V_2$, donc $C_2 = \\dfrac{C_1 V_1}{V_2}$.',
            solution: [
              'Relation de dilution : $C_1 V_1 = C_2 V_2$, donc $C_2 = \\dfrac{C_1 V_1}{V_2}$.',
              'Application numérique : $C_2 = \\dfrac{' + fr(C1, 1) + ' \\times ' + V1 + '}{' + V2 + '}$.',
              'Résultat : $C_2 \\approx ' + fr(C2, 4) + '$ mol/L.'
            ]
          };
        }
      }
    },

    probleme: {
      context: `Un laboratoire dispose d'une solution mère de sulfate de cuivre de concentration $C_1 = 1$ mol/L. On souhaite préparer un volume $V_2 = 250$ mL d'une solution diluée de concentration $C_2 = 0{,}1$ mol/L.`,
      tasks: [
        `Calculer le volume $V_1$ de solution mère à prélever pour réaliser cette dilution.`,
        `Décrire le protocole expérimental (verrerie utilisée, étapes) permettant de réaliser cette dilution au laboratoire.`,
        `Calculer le facteur de dilution $F$ appliqué, et vérifier sa cohérence par un second calcul.`
      ],
      solutions: [
        `D'après $C_1 V_1 = C_2 V_2$ : $V_1 = \\dfrac{C_2 V_2}{C_1} = \\dfrac{0{,}1 \\times 250}{1} = 25$ mL.`,
        `On prélève $V_1 = 25$ mL de solution mère à l'aide d'une <strong>pipette jaugée</strong>, on l'introduit dans une <strong>fiole jaugée</strong> de $250$ mL, puis on complète avec de l'eau distillée jusqu'au <strong>trait de jauge</strong>. On homogénéise enfin la solution en retournant la fiole plusieurs fois, bouchon fermé.`,
        `Facteur de dilution : $F = \\dfrac{C_1}{C_2} = \\dfrac{1}{0{,}1} = 10$. Vérification par les volumes : $F = \\dfrac{V_2}{V_1} = \\dfrac{250}{25} = 10$ — les deux calculs sont cohérents, la dilution est bien « au dixième ».`
      ],
      finalAnswer: `Il faut prélever $V_1 = 25$ mL de solution mère et compléter jusqu'à $250$ mL, ce qui correspond à un facteur de dilution $F = 10$, confirmé par les deux méthodes de calcul.`
    },

    evaluation: {
      title: `Évaluation — Solutions aqueuses (concentration)`,
      duration: '25 min',
      questions: [
        {
          statement: `On dissout $n = 0{,}3$ mol de soluté dans une solution de volume $V = 0{,}6$ L. Calculer la concentration molaire $C$ (en mol/L).`,
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.02,
          unit: 'mol/L',
          points: 2,
          correction: `$C = \\dfrac{n}{V} = \\dfrac{0{,}3}{0{,}6} = 0{,}5$ mol/L.`
        },
        {
          statement: `Dans une solution aqueuse, le solvant est :`,
          type: 'multiple-choice',
          options: [
            `L'espèce chimique dissoute`,
            `L'eau`,
            `Le récipient utilisé pour la dissolution`,
            `Le trait de jauge de la fiole`
          ],
          answer: 1,
          points: 2,
          correction: `Dans une solution <strong>aqueuse</strong>, le solvant est toujours l'<strong>eau</strong> : c'est le liquide dans lequel le soluté (l'espèce chimique dissoute) est dispersé.`
        },
        {
          statement: `On dilue $V_1 = 20$ mL d'une solution mère de concentration $C_1 = 0{,}8$ mol/L jusqu'à un volume final $V_2 = 200$ mL. Calculer la concentration $C_2$ obtenue (en mol/L).`,
          type: 'numeric',
          answer: 0.08,
          tolerance: 0.005,
          unit: 'mol/L',
          points: 2,
          correction: `$C_2 = \\dfrac{C_1 V_1}{V_2} = \\dfrac{0{,}8 \\times 20}{200} = \\dfrac{16}{200} = 0{,}08$ mol/L.`
        },
        {
          statement: `Lors d'une dilution, le volume de la solution :`,
          type: 'multiple-choice',
          options: [
            `Diminue`,
            `Augmente`,
            `Reste constant`,
            `Devient nul`
          ],
          answer: 1,
          points: 2,
          correction: `Diluer consiste à ajouter du solvant : le volume de la solution <strong>augmente</strong>, alors que la quantité de matière de soluté reste la même — d'où la diminution de la concentration.`
        },
        {
          statement: `On dissout une masse $m = 5$ g de soluté dans une solution de volume $V = 250$ mL. Calculer la concentration massique $C_m$ (en g/L).`,
          type: 'numeric',
          answer: 20,
          tolerance: 1,
          unit: 'g/L',
          points: 2,
          correction: `$V = 250$ mL $= 0{,}25$ L. $C_m = \\dfrac{m}{V} = \\dfrac{5}{0{,}25} = 20$ g/L.`
        }
      ]
    }
  });
