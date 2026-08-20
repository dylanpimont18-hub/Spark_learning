/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-solutions.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-solutions',
    level: 2, subject: 'physique',
    icon: '💧',
    title: 'Solutions aqueuses (concentration)',
    subtitle: 'Concentration massique et molaire, dilution, facteur de dilution, verrerie de précision',
    keywords: ['Solution aqueuse', 'Concentration', 'Dilution', 'Soluté', 'Solvant'],
    physics: 'Maîtriser les concentrations et les dilutions permet de préparer un médicament au bon dosage, de contrôler la teneur en chlore d\'une eau de piscine, ou de doser un engrais agricole sans risquer de brûler les cultures.',

    cours: {
      intro: 'Un sirop pour la toux, une solution de sérum physiologique, l\'eau chlorée d\'une piscine : dans tous ces cas, une espèce chimique a été dissoute dans l\'eau. Cette espèce dissoute s\'appelle le <strong>soluté</strong>, l\'eau qui la dissout est le <strong>solvant</strong>, et l\'ensemble forme une <strong>solution aqueuse</strong>.<br/><br/>Pour qu\'un médicament soit efficace sans être dangereux, ou qu\'un traitement de piscine soit assez concentré sans irriter la peau, il faut savoir quantifier précisément la quantité de soluté dissoute : c\'est le rôle de la <strong>concentration</strong>. Ce chapitre présente aussi une opération très courante en laboratoire : la <strong>dilution</strong>, qui permet de préparer une solution moins concentrée à partir d\'une solution mère.',
      definitions: [
        { term: 'Solution aqueuse', def: 'Mélange liquide homogène obtenu en dissolvant une espèce chimique, le <strong>soluté</strong>, dans un solvant, ici l\'<strong>eau</strong>.' },
        { term: 'Concentration massique $c_m$', def: 'Masse de soluté dissoute par litre de solution : $c_m = \\dfrac{m}{V}$, en g/L (avec $m$ en g et $V$ en L).' },
        { term: 'Concentration molaire $c$', def: 'Quantité de matière de soluté dissoute par litre de solution : $c = \\dfrac{n}{V}$, en mol/L, avec $n = \\dfrac{m}{M}$ ($M$ = masse molaire du soluté, en g/mol).' },
        { term: 'Dilution', def: 'Opération qui consiste à diminuer la concentration d\'une solution en y ajoutant du solvant. La quantité de matière de soluté est conservée : $C_{mère} \\times V_{prélevé} = C_{fille} \\times V_{fille}$.' }
      ],
      method: {
        title: 'Réaliser (ou exploiter) une dilution en 3 étapes',
        steps: [
          '<strong>Identifier</strong> la solution mère (concentration $C_{mère}$ connue) et la solution fille souhaitée (volume $V_{fille}$ et concentration $C_{fille}$ visés).',
          '<strong>Calculer le volume à prélever</strong> grâce à la conservation de la quantité de matière de soluté : $C_{mère} \\times V_{prélevé} = C_{fille} \\times V_{fille}$, donc $V_{prélevé} = \\dfrac{C_{fille} \\times V_{fille}}{C_{mère}}$.',
          '<strong>Réaliser la dilution</strong> : prélever $V_{prélevé}$ à la pipette jaugée, le verser dans une fiole jaugée de volume $V_{fille}$, puis compléter avec de l\'eau distillée jusqu\'au trait de jauge (en homogénéisant par retournements).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Préparation d\'une solution par dilution',
        title: 'De la solution mère à la solution fille',
        description: 'On prélève un volume $V_{prélevé} = 10$ mL d\'une solution mère à $C_m = 1{,}0$ mol/L, puis on complète avec de l\'eau distillée jusqu\'au trait de jauge d\'une fiole jaugée de $V_{fille} = 100$ mL.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="solutions2nde-title solutions2nde-desc">
            <title id="solutions2nde-title">Schema de preparation d'une solution fille par dilution</title>
            <desc id="solutions2nde-desc">A gauche, un flacon represente la solution mere concentree. Une fleche horizontale relie ce flacon a une fiole jaugee dessinee a droite, en forme de poire avec un long col etroit portant un trait de jauge horizontal. La fleche est annotee en deux etapes : prelevement d'un petit volume de solution mere, puis complement avec de l'eau distillee jusqu'au trait de jauge. La fiole jaugee, beaucoup plus diluee, represente la solution fille obtenue.</desc>

            <defs>
              <marker id="arrow-phys2-solutions" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- flacon : solution mere -->
            <text class="label-soft" x="120" y="95" text-anchor="middle">Solution mère</text>
            <rect class="frame-line" x="110" y="110" width="20" height="30" fill="none"></rect>
            <rect class="frame-line" x="85" y="140" width="70" height="90" fill="none"></rect>
            <line class="guide-line" x1="85" y1="172" x2="155" y2="172"></line>
            <text class="tick-label" x="120" y="192" text-anchor="middle">Cm = 1,0 mol/L</text>

            <!-- fleche de transfert -->
            <line class="curve-main" x1="170" y1="175" x2="385" y2="175" marker-end="url(#arrow-phys2-solutions)"></line>
            <text class="annotation-label" x="277" y="158" text-anchor="middle">1. Prélever Vprélevé = 10 mL</text>
            <text class="annotation-label" x="277" y="196" text-anchor="middle">2. Compléter à l'eau distillée</text>

            <!-- fiole jaugee : solution fille -->
            <text class="label-soft" x="430" y="75" text-anchor="middle">Solution fille</text>
            <path class="frame-line" fill="none" d="M395,230 L465,230 L440,170 L440,90 L420,90 L420,170 Z"></path>
            <line class="curve-main" x1="416" y1="110" x2="444" y2="110"></line>
            <text class="tick-label" x="452" y="113" text-anchor="start">trait de jauge</text>
            <text class="tick-label" x="430" y="248" text-anchor="middle">Cf = 0,10 mol/L</text>
            <text class="tick-label" x="430" y="264" text-anchor="middle">Vfille = 100 mL</text>

            <text class="label-soft" x="280" y="278" text-anchor="middle">Facteur de dilution : F = Cm / Cf = 10</text>
          </svg>
        `,
        notes: [
          'La quantité de matière de soluté prélevée est <strong>conservée</strong> lors de la dilution : $C_m \\times V_{prélevé} = C_f \\times V_{fille}$, soit $1{,}0 \\times 10 = 0{,}10 \\times 100$ (en mL et mol/L) — les deux produits valent bien $10$.',
          'La fiole jaugée est complétée avec de l\'eau distillée exactement jusqu\'au <strong>trait de jauge</strong> : c\'est ce repère qui garantit un volume final $V_{fille}$ précis, condition indispensable pour une concentration fiable.',
          'Le facteur de dilution $F = \\dfrac{C_m}{C_f} = \\dfrac{1{,}0}{0{,}10} = 10$ indique que la solution fille est $10$ fois moins concentrée que la solution mère.'
        ],
        reading: 'Repère d\'abord le flacon de solution mère à gauche, suis la flèche en deux étapes (prélèvement puis ajout d\'eau), puis observe la fiole jaugée de droite et son trait de jauge, qui fixe le volume final.',
        caption: 'Préparation d\'une solution fille par dilution : prélèvement de $10$ mL de solution mère à $1{,}0$ mol/L, complété à l\'eau distillée jusqu\'au trait de jauge d\'une fiole de $100$ mL (facteur de dilution $F = 10$).'
      },
      example: {
        statement: 'On dissout $m = 4{,}0$ g d\'hydroxyde de sodium (soude, $M = 40$ g/mol) dans de l\'eau distillée, puis on complète jusqu\'à un volume $V = 500$ mL de solution.<br/><br/>Calcule la concentration molaire $c$ de cette solution.',
        steps: [
          'Quantité de matière de soluté dissoute : $n = \\dfrac{m}{M} = \\dfrac{4{,}0}{40} = 0{,}10$ mol.',
          'Volume de solution (attention à l\'unité, en litres) : $V = 500$ mL $= 0{,}500$ L.',
          'Concentration molaire : $c = \\dfrac{n}{V} = \\dfrac{0{,}10}{0{,}500} = 0{,}20$ mol/L.'
        ],
        answer: '$c = 0{,}20$ mol/L. La conversion du volume en litres est une étape à ne jamais oublier : oublier de diviser par $1\\,000$ pour passer des mL aux L est une des erreurs les plus fréquentes sur ce type de calcul.'
      },
      formulas: [
        'Concentration massique : $c_m = \\dfrac{m}{V}$ (en g/L, avec $m$ en g et $V$ en L)',
        'Concentration molaire : $c = \\dfrac{n}{V}$ (en mol/L), avec $n = \\dfrac{m}{M}$',
        'Dilution (conservation de la quantité de matière de soluté) : $C_{mère} \\times V_{prélevé} = C_{fille} \\times V_{fille}$',
        'Facteur de dilution : $F = \\dfrac{C_{mère}}{C_{fille}} = \\dfrac{V_{fille}}{V_{prélevé}}$'
      ],
      recap: [
        'Une <strong>solution aqueuse</strong> résulte de la dissolution d\'un soluté dans l\'eau (solvant).',
        'Concentration massique $c_m = \\dfrac{m}{V}$ (g/L) et concentration molaire $c = \\dfrac{n}{V}$ (mol/L) décrivent la même idée dans des unités différentes.',
        'Une <strong>dilution</strong> conserve la quantité de matière de soluté : $C_{mère} \\times V_{prélevé} = C_{fille} \\times V_{fille}$.',
        'Le facteur de dilution $F = \\dfrac{C_{mère}}{C_{fille}}$ indique combien de fois la concentration a été divisée.'
      ],
      piege: 'Une erreur fréquente est d\'inverser les volumes dans la relation de dilution, en associant $C_{mère}$ au grand volume final et $C_{fille}$ au petit volume prélevé. Attention : c\'est toujours le <strong>petit volume prélevé</strong> dans la solution la plus concentrée qui se combine à $C_{mère}$, et le <strong>grand volume final</strong> $V_{fille}$ qui se combine à $C_{fille}$, la concentration la plus faible.'
    },

    quiz: [
      {
        q: 'On dissout $m = 5{,}0$ g de sel dans de l\'eau pour obtenir $V = 250$ mL de solution. Quelle est sa concentration massique $c_m$ ?',
        options: [
          '$c_m = 20$ g/L',
          '$c_m = 0{,}05$ g/L',
          '$c_m = 1\\,250$ g/L',
          '$c_m = 0{,}02$ g/L'
        ],
        answer: 0,
        correction: '$c_m = \\dfrac{m}{V} = \\dfrac{5{,}0}{0{,}250} = 20$ g/L (attention à bien convertir $250$ mL en $0{,}250$ L avant de diviser).'
      },
      {
        q: 'On prélève $20$ mL d\'une solution mère à $2{,}0$ mol/L, puis on complète jusqu\'à $200$ mL avec de l\'eau distillée. Quelle est la concentration de la solution fille ?',
        options: [
          '$C_f = 0{,}20$ mol/L',
          '$C_f = 20$ mol/L',
          '$C_f = 2{,}0$ mol/L',
          '$C_f = 0{,}02$ mol/L'
        ],
        answer: 0,
        correction: '$C_f = \\dfrac{C_m \\times V_{prélevé}}{V_{fille}} = \\dfrac{2{,}0 \\times 20}{200} = 0{,}20$ mol/L.'
      },
      {
        q: 'Lorsqu\'on dilue une solution mère pour obtenir une solution fille, quelle quantité reste inchangée ?',
        options: [
          'Le volume de la solution',
          'La concentration de la solution',
          'La quantité de matière de soluté dissoute',
          'La masse volumique du solvant'
        ],
        answer: 2,
        correction: 'La dilution ajoute du solvant, ce qui augmente le volume et diminue la concentration — mais la <strong>quantité de matière de soluté</strong> prélevée, elle, ne change pas : c\'est ce principe de conservation qui permet d\'établir $C_{mère}V_{prélevé} = C_{fille}V_{fille}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['concentration_massique', 'dilution']);

        if (typeExo === 'concentration_massique') {
          var m = randFloat(1, 50, 1);
          var Vml = pick([100, 150, 200, 250, 500, 1000]);
          var Vl = Vml / 1000;
          var cm = parseFloat((m / Vl).toFixed(1));
          var contexte = pick([
            'un sérum physiologique préparé en pharmacie',
            'une solution de nettoyage pour piscine',
            'un engrais liquide dilué pour l\'arrosage',
            'une solution saline utilisée en travaux pratiques',
            'un produit de traitement d\'eau potable'
          ]);
          return {
            statement: 'Pour préparer ' + contexte + ', on dissout une masse $m = ' + fr(m, 1) + '$ g de soluté dans de l\'eau, puis on complète jusqu\'à un volume $V = ' + Vml + '$ mL de solution.<br/><br/>Calcule la concentration massique $c_m$ de cette solution (en g/L, arrondie au dixième).',
            answer: cm,
            tolerance: Math.max(0.3, parseFloat((cm * 0.03).toFixed(1))),
            unit: 'g/L',
            hint: 'Convertis d\'abord le volume en litres, puis utilise $c_m = \\dfrac{m}{V}$.',
            solution: [
              'Conversion du volume : $V = ' + Vml + '$ mL $= ' + fr(Vl, 3) + '$ L.',
              'Formule de la concentration massique : $c_m = \\dfrac{m}{V} = \\dfrac{' + fr(m, 1) + '}{' + fr(Vl, 3) + '}$.',
              'Résultat : $c_m \\approx ' + fr(cm, 1) + '$ g/L.'
            ]
          };
        } else {
          var Cm = pick([0.5, 1.0, 1.5, 2.0, 2.5, 3.0]);
          var Vprel = pick([5, 10, 15, 20, 25, 50]);
          var Vfille = pick([100, 200, 250, 500]);
          var Cf = parseFloat((Cm * Vprel / Vfille).toFixed(3));
          var contexte2 = pick([
            'un laboratoire de contrôle qualité',
            'une préparation pharmaceutique',
            'un protocole de travaux pratiques',
            'un service d\'analyse environnementale'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on prélève $V_{prélevé} = ' + Vprel + '$ mL d\'une solution mère à $C_m = ' + fr(Cm, 1) + '$ mol/L, puis on complète avec de l\'eau distillée jusqu\'à un volume $V_{fille} = ' + Vfille + '$ mL.<br/><br/>Calcule la concentration $C_f$ de la solution fille obtenue (en mol/L, arrondie au millième).',
            answer: Cf,
            tolerance: Math.max(0.005, parseFloat((Cf * 0.03).toFixed(3))),
            unit: 'mol/L',
            hint: 'La quantité de matière de soluté est conservée : $C_m \\times V_{prélevé} = C_f \\times V_{fille}$.',
            solution: [
              'Conservation de la quantité de matière : $C_m \\times V_{prélevé} = C_f \\times V_{fille}$.',
              'On isole $C_f$ : $C_f = \\dfrac{C_m \\times V_{prélevé}}{V_{fille}} = \\dfrac{' + fr(Cm, 1) + ' \\times ' + Vprel + '}{' + Vfille + '}$.',
              'Résultat : $C_f \\approx ' + fr(Cf, 3) + '$ mol/L.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une solution mère d\'antiseptique a une concentration $C_m = 5{,}0$ mol/L. Un protocole médical impose une concentration finale $C_f = 0{,}25$ mol/L pour une solution fille de volume $V_{fille} = 500$ mL.',
      tasks: [
        'Calculer le facteur de dilution $F$ à appliquer.',
        'En déduire le volume $V_{prélevé}$ de solution mère à prélever.',
        'Décrire le matériel de verrerie et le protocole à suivre pour réaliser cette dilution.'
      ],
      solutions: [
        'Facteur de dilution : $F = \\dfrac{C_m}{C_f} = \\dfrac{5{,}0}{0{,}25} = 20$.',
        'Comme $F = \\dfrac{V_{fille}}{V_{prélevé}}$, on a $V_{prélevé} = \\dfrac{V_{fille}}{F} = \\dfrac{500}{20} = 25$ mL (on retrouve le même résultat avec $V_{prélevé} = \\dfrac{C_f \\times V_{fille}}{C_m} = \\dfrac{0{,}25 \\times 500}{5{,}0} = 25$ mL).',
        'Il faut prélever $25$ mL de solution mère à l\'aide d\'une <strong>pipette jaugée</strong> de $25$ mL, les verser dans une <strong>fiole jaugée</strong> de $500$ mL, puis compléter avec de l\'eau distillée jusqu\'au trait de jauge, en homogénéisant par retournements successifs.'
      ],
      finalAnswer: '$F = 20$ et $V_{prélevé} = 25$ mL. Ce facteur $20$ signifie qu\'il faudra prélever un volume $20$ fois plus petit que le volume final visé — un contrôle de cohérence rapide avant même de faire le calcul détaillé.'
    },

    evaluation: {
      title: 'Évaluation — Solutions aqueuses (concentration)',
      duration: '30 min',
      questions: [
        {
          statement: 'On dissout $m = 12$ g de soluté dans de l\'eau pour obtenir $V = 400$ mL de solution. Calculer la concentration massique $c_m$ (en g/L).',
          type: 'numeric',
          answer: 30,
          tolerance: 1,
          unit: 'g/L',
          points: 2,
          correction: '$c_m = \\dfrac{m}{V} = \\dfrac{12}{0{,}400} = 30$ g/L.'
        },
        {
          statement: 'Lors d\'une dilution, quelle grandeur reste rigoureusement conservée entre le prélèvement et la solution fille ?',
          type: 'multiple-choice',
          options: [
            'Le volume',
            'La concentration',
            'La quantité de matière de soluté',
            'La couleur de la solution'
          ],
          answer: 2,
          points: 2,
          correction: 'C\'est la <strong>quantité de matière de soluté</strong> qui est conservée lors d\'une dilution : on ajoute seulement du solvant, jamais de soluté supplémentaire.'
        },
        {
          statement: 'On prélève $V_{prélevé} = 50$ mL d\'une solution mère à $C_m = 0{,}50$ mol/L, puis on complète jusqu\'à $V_{fille} = 250$ mL. Calculer $C_f$ (en mol/L).',
          type: 'numeric',
          answer: 0.1,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 3,
          correction: '$C_f = \\dfrac{C_m \\times V_{prélevé}}{V_{fille}} = \\dfrac{0{,}50 \\times 50}{250} = 0{,}10$ mol/L.'
        },
        {
          statement: 'Une quantité de matière $n = 0{,}30$ mol de soluté est dissoute dans $V = 1{,}5$ L de solution. Calculer la concentration molaire $c$ (en mol/L).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 2,
          correction: '$c = \\dfrac{n}{V} = \\dfrac{0{,}30}{1{,}5} = 0{,}20$ mol/L.'
        },
        {
          statement: 'Pour prélever avec précision un volume donné de solution mère lors d\'une dilution, on utilise :',
          type: 'multiple-choice',
          options: [
            'Une éprouvette graduée',
            'Une pipette jaugée',
            'Un bécher',
            'Une balance'
          ],
          answer: 1,
          points: 1,
          correction: 'La <strong>pipette jaugée</strong> est l\'instrument de précision utilisé pour prélever un volume exact de solution mère. L\'éprouvette graduée est moins précise, et le bécher n\'est pas un instrument de mesure précis.'
        }
      ]
    }
  });

