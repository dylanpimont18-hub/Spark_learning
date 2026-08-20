/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-evolution-chimique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-evolution-chimique',
    level: 2, subject: 'physique',
    icon: '⚗️',
    title: 'Évolution spontanée d\'un système chimique',
    subtitle: 'Quotient de réaction, constante d\'équilibre, critère d\'évolution spontanée, sens d\'évolution d\'un système chimique',
    keywords: ['Quotient de réaction', 'Constante d\'équilibre', 'Critère d\'évolution', 'Système chimique', 'Équilibre chimique'],
    physics: 'Le critère d\'évolution spontanée permet de prévoir le rendement d\'une synthèse chimique industrielle (estérification pour parfums et biocarburants), d\'anticiper le sens d\'une réaction de précipitation en traitement des eaux, et d\'orienter le choix des conditions opératoires pour favoriser un produit recherché.',

    cours: {
      intro: 'Une transformation chimique n\'est pas toujours totale : de nombreuses réactions atteignent un <strong>état d\'équilibre</strong>, où les quantités de réactifs et de produits n\'évoluent plus macroscopiquement, sans que les réactifs aient totalement disparu.<br/><br/>Pour prévoir <strong>dans quel sens</strong> un système chimique va évoluer spontanément, on compare deux grandeurs : le <strong>quotient de réaction</strong> $Q_r$, calculé à partir de la composition du système à un instant donné, et la <strong>constante d\'équilibre</strong> $K$, qui ne dépend que de la température et caractérise l\'état d\'équilibre de la réaction.<br/><br/>Cette comparaison constitue le <strong>critère d\'évolution spontanée</strong> : un système hors équilibre évolue toujours de façon à rapprocher $Q_r$ de $K$, jamais dans le sens qui l\'en éloignerait.',
      definitions: [
        { term: 'Quotient de réaction ($Q_r$)', def: 'Grandeur sans dimension calculée, à un instant donné, à partir des concentrations des espèces dissoutes intervenant dans la réaction $aA+bB\\rightleftharpoons cC+dD$ : $Q_r=\\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ (les solides purs, le solvant et les liquides purs n\'apparaissent pas dans cette expression).' },
        { term: 'Constante d\'équilibre ($K$)', def: 'Valeur particulière que prend $Q_r$ lorsque le système chimique est <strong>à l\'équilibre</strong> ($Q_{r,éq}=K$). Elle ne dépend que de la température et caractérise entièrement l\'équilibre associé à une réaction donnée.' },
        { term: 'Système à l\'équilibre', def: 'État d\'un système chimique dans lequel les quantités de matière de chaque espèce n\'évoluent plus macroscopiquement au cours du temps, sans que la réaction ait été totale : $Q_{r,éq}=K$.' },
        { term: 'Critère d\'évolution spontanée', def: 'Règle qui prévoit le sens d\'évolution d\'un système chimique hors équilibre, par comparaison entre $Q_{r,i}$ (état initial) et $K$ : le système évolue toujours de façon à rapprocher $Q_r$ de $K$.' }
      ],
      method: {
        title: 'Prévoir le sens d\'évolution d\'un système chimique en 3 étapes',
        steps: [
          '<strong>Écrire</strong> l\'équation de la réaction étudiée, puis exprimer le quotient de réaction $Q_r$ à partir des concentrations (ou, pour certaines réactions équilibrées en moles, des quantités de matière) des espèces dissoutes.',
          '<strong>Calculer</strong> la valeur numérique de $Q_{r,i}$ dans l\'état initial du système, et la comparer à la constante d\'équilibre $K$ (donnée ou calculée à partir d\'un état d\'équilibre connu).',
          '<strong>Appliquer le critère d\'évolution</strong> : si $Q_{r,i} &lt; K$, le système évolue dans le sens direct (1) ; si $Q_{r,i} &gt; K$, il évolue dans le sens indirect (2) ; si $Q_{r,i}=K$, le système est déjà à l\'équilibre, il n\'évolue pas.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Critère d\'évolution spontanée',
        title: 'Comparaison du quotient de réaction Qr à la constante d\'équilibre K',
        description: 'Un système chimique hors équilibre évolue toujours de façon à rapprocher son quotient de réaction $Q_r$ de la constante d\'équilibre $K$ : vers la droite si $Q_{r,i} &lt; K$ (sens direct), vers la gauche si $Q_{r,i} &gt; K$ (sens indirect).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="evochim-title evochim-desc">
            <title id="evochim-title">Critere d'evolution spontanee : comparaison de Qr a K</title>
            <desc id="evochim-desc">Un axe gradue horizontal represente les valeurs possibles du quotient de reaction Qr, de 0 vers la droite. Un point marque au milieu de l'axe represente la constante d'equilibre K. A gauche de K, un point represente un etat initial ou Qr,i est inferieur a K ; une fleche courbe au-dessus de l'axe part de ce point et se dirige vers K, etiquetee sens direct. A droite de K, un autre point represente un etat initial ou Qr,i prime est superieur a K ; une fleche courbe part de ce point et se dirige egalement vers K mais en venant de la droite, etiquetee sens indirect. Dans les deux cas, les fleches convergent vers le point K, illustrant que le systeme evolue toujours pour rapprocher Qr de K.</desc>

            <defs>
              <marker id="arrow-tle-evochim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe Qr -->
            <line class="frame-line" x1="60" y1="170" x2="500" y2="170" marker-end="url(#arrow-tle-evochim)"></line>
            <text class="tick-label" x="60" y="188" text-anchor="middle">0</text>
            <text class="tick-label" x="515" y="174" text-anchor="start">Qr</text>

            <!-- point K -->
            <line class="frame-line" x1="280" y1="162" x2="280" y2="178"></line>
            <circle class="plot-point-alt" cx="280" cy="170" r="5"></circle>
            <text class="annotation-label" x="280" y="196" text-anchor="middle">K</text>

            <!-- point Qr,i (sens direct) -->
            <circle class="plot-point" cx="150" cy="170" r="4"></circle>
            <text class="tick-label" x="150" y="192" text-anchor="middle">Qr,i</text>

            <!-- point Qr,i' (sens indirect) -->
            <circle class="plot-point" cx="400" cy="170" r="4"></circle>
            <text class="tick-label" x="400" y="192" text-anchor="middle">Qr,i'</text>

            <!-- fleche sens direct -->
            <path class="curve-main" fill="none" d="M150,164 Q210,125 268,164" marker-end="url(#arrow-tle-evochim)"></path>
            <text class="tick-label" x="207" y="112" text-anchor="middle">sens direct (1)</text>

            <!-- fleche sens indirect -->
            <path class="curve-main" fill="none" d="M400,164 Q340,125 292,164" marker-end="url(#arrow-tle-evochim)"></path>
            <text class="tick-label" x="347" y="112" text-anchor="middle">sens indirect (2)</text>
          </svg>
        `,
        notes: [
          'Si $Q_{r,i} &lt; K$ (à gauche de $K$ sur l\'axe), le système évolue dans le <strong>sens direct</strong> (1) : les réactifs sont consommés, les produits se forment, jusqu\'à ce que $Q_r$ atteigne $K$.',
          'Si $Q_{r,i} &gt; K$ (à droite de $K$), le système évolue dans le <strong>sens indirect</strong> (2) : les produits sont consommés, les réactifs se reforment.',
          'Dans les deux cas, l\'évolution s\'arrête dès que $Q_r=K$ : le système a alors atteint son état d\'équilibre, et n\'évolue plus macroscopiquement.'
        ],
        reading: 'Repère la position de $K$ sur l\'axe, puis celle de $Q_{r,i}$ : la flèche indique toujours le sens vers lequel le système évolue spontanément, en direction de $K$.',
        caption: 'Critère d\'évolution spontanée d\'un système chimique : quel que soit l\'état initial ($Q_{r,i} &lt; K$ ou $Q_{r,i} &gt; K$), le système évolue toujours vers $Q_r=K$.'
      },
      example: {
        statement: 'On étudie la réaction (limitée, non totale) d\'estérification entre l\'acide éthanoïque et l\'éthanol : $CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$, de constante d\'équilibre $K=4{,}0$ à la température de l\'expérience. Pour cette réaction, où les 2 réactifs et les 2 produits ont des coefficients stœchiométriques égaux à 1, le volume se simplifie et on peut exprimer $Q_r$ directement à partir des quantités de matière (en mol).<br/><br/>On mélange $n_{acide}=0{,}50$ mol d\'acide, $n_{alcool}=0{,}50$ mol d\'alcool, en présence de $n_{ester}=0{,}30$ mol d\'ester et $n_{eau}=0{,}30$ mol d\'eau déjà formés. Déterminer le sens d\'évolution spontanée de ce système.',
        steps: [
          'Expression du quotient de réaction pour cette réaction équilibrée en moles : $Q_r=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}$.',
          'Calcul de $Q_{r,i}$ : $Q_{r,i}=\\dfrac{0{,}30\\times0{,}30}{0{,}50\\times0{,}50}=\\dfrac{0{,}09}{0{,}25}=0{,}36$.',
          'Comparaison à la constante d\'équilibre : $Q_{r,i}=0{,}36 &lt; K=4{,}0$.'
        ],
        answer: '$Q_{r,i}=0{,}36 &lt; K=4{,}0$ : le système évolue dans le <strong>sens direct</strong> (estérification), les quantités d\'ester et d\'eau vont continuer à augmenter jusqu\'à ce que $Q_r$ atteigne $4{,}0$.'
      },
      formulas: [
        '$Q_r=\\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ (quotient de réaction, pour $aA+bB\\rightleftharpoons cC+dD$)',
        'À l\'équilibre : $Q_{r,éq}=K$',
        'Critère d\'évolution : $Q_{r,i} &lt; K \\Rightarrow$ évolution en sens direct (1)',
        'Critère d\'évolution : $Q_{r,i} &gt; K \\Rightarrow$ évolution en sens indirect (2)',
        'Estérification/hydrolyse (réaction équilibrée en moles) : $Q_r=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}$'
      ],
      recap: [
        'Le quotient de réaction $Q_r$ se calcule à <strong>tout instant</strong>, contrairement à $K$ qui ne caractérise que l\'état d\'équilibre.',
        'Le critère d\'évolution spontanée compare $Q_{r,i}$ à $K$ : le système évolue toujours de façon à <strong>rapprocher</strong> $Q_r$ de $K$, jamais à l\'en éloigner.',
        'Les solides purs, le solvant et les liquides purs <strong>n\'apparaissent jamais</strong> dans l\'expression de $Q_r$ : seules les espèces dissoutes y figurent.',
        'Lorsque $Q_{r,i}=K$, le système est déjà à l\'équilibre : il n\'évolue pas, quelles que soient les quantités de réactifs ou de produits présentes.'
      ],
      piege: 'Une erreur fréquente est de croire que le sens d\'évolution dépend de la quantité de réactifs ou de produits présents en valeur absolue : ce n\'est pas le cas, seule la comparaison du quotient de réaction $Q_{r,i}$ à la constante d\'équilibre $K$ permet de prévoir le sens d\'évolution, quelles que soient les quantités en présence. Attention également à ne jamais inclure un solide pur, un liquide pur ou le solvant dans l\'expression de $Q_r$, contrairement aux espèces dissoutes.'
    },

    quiz: [
      {
        q: 'Pour une réaction $aA+bB\\rightleftharpoons cC+dD$ en solution aqueuse, à un instant où $Q_{r,i} &gt; K$, dans quel sens le système évolue-t-il spontanément ?',
        options: [
          'Dans le sens indirect (2) : les produits sont consommés, les réactifs se reforment',
          'Dans le sens direct (1) : les réactifs sont consommés, les produits se forment',
          'Il n\'évolue pas, quelle que soit la valeur de $Q_{r,i}$',
          'Cela dépend uniquement du volume du système'
        ],
        answer: 0,
        correction: 'Si $Q_{r,i} &gt; K$, le système doit diminuer $Q_r$ pour se rapprocher de $K$ : il évolue donc dans le sens indirect (2), qui consomme les produits et reforme les réactifs.'
      },
      {
        q: 'Laquelle de ces espèces n\'apparaît jamais dans l\'expression du quotient de réaction $Q_r$ ?',
        options: [
          'Le solvant (l\'eau, par exemple)',
          'Un ion dissous dans la solution',
          'Une molécule dissoute dans la solution',
          'Un gaz participant à la réaction'
        ],
        answer: 0,
        correction: 'Le solvant, tout comme les solides purs et les liquides purs, n\'apparaît jamais dans l\'expression de $Q_r$ : seules les espèces dissoutes (et les gaz, via leur pression) y figurent, car leur "concentration" reste conventionnellement constante et n\'a pas d\'influence sur l\'évolution du système.'
      },
      {
        q: 'Pour la réaction $A+B\\rightleftharpoons C+D$, un système contient $[A]=0{,}20$ mol/L, $[B]=0{,}10$ mol/L, $[C]=0{,}30$ mol/L et $[D]=0{,}40$ mol/L. Sachant que $K=4{,}0$ pour cette réaction à cette température, quel est le sens d\'évolution spontanée du système ?',
        options: [
          'Sens indirect, car $Q_{r,i}=6{,}0 &gt; K=4{,}0$',
          'Sens direct, car $Q_{r,i}=6{,}0 &gt; K=4{,}0$',
          'Le système est déjà à l\'équilibre',
          'Impossible à déterminer sans connaître le volume de la solution'
        ],
        answer: 0,
        correction: '$Q_{r,i}=\\dfrac{[C][D]}{[A][B]}=\\dfrac{0{,}30\\times0{,}40}{0{,}20\\times0{,}10}=\\dfrac{0{,}12}{0{,}02}=6{,}0$. Comme $Q_{r,i}=6{,}0 &gt; K=4{,}0$, le système évolue dans le sens indirect, pour faire diminuer $Q_r$ vers $K$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['esterification', 'concentrations']);

        if (typeExo === 'esterification') {
          var nAcide = pick([0.2, 0.3, 0.4, 0.5, 0.6]);
          var nAlcool = pick([0.2, 0.3, 0.4, 0.5, 0.6]);
          var nEster = pick([0.2, 0.4, 0.6, 0.8, 1.0]);
          var nEau = pick([0.2, 0.4, 0.6, 0.8, 1.0]);
          var Qr = parseFloat(((nEster * nEau) / (nAcide * nAlcool)).toFixed(3));
          var contexte = pick([
            'un ballon de synthèse en travaux pratiques',
            'un réacteur d\'estérification pilote',
            'un flacon de contrôle qualité en laboratoire',
            'un montage de chimie organique au lycée',
            'une cuve de production de biocarburant'
          ]);
          return {
            statement: 'Dans ' + contexte + ', on étudie la réaction équilibrée $CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$ (estérification, $K=4{,}0$ à cette température). Le système contient $n_{acide}=' + fr(nAcide, 1) + '$ mol, $n_{alcool}=' + fr(nAlcool, 1) + '$ mol, $n_{ester}=' + fr(nEster, 1) + '$ mol et $n_{eau}=' + fr(nEau, 1) + '$ mol.<br/><br/>Calcule la valeur du quotient de réaction $Q_{r,i}$ de ce système (sans unité, arrondie au millième).',
            answer: Qr,
            tolerance: Math.max(0.01, parseFloat((Qr * 0.03).toFixed(3))),
            unit: '',
            hint: 'Pour cette réaction équilibrée en moles (2 réactifs, 2 produits, coefficients 1), $Q_r=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}$.',
            solution: [
              'Expression du quotient de réaction : $Q_r=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}=\\dfrac{' + fr(nEster, 1) + '\\times' + fr(nEau, 1) + '}{' + fr(nAcide, 1) + '\\times' + fr(nAlcool, 1) + '}$.',
              'Résultat : $Q_{r,i}\\approx' + fr(Qr, 3) + '$.'
            ]
          };
        } else {
          var A = pick([0.1, 0.2, 0.3, 0.4, 0.5]);
          var B = pick([0.1, 0.2, 0.3, 0.4, 0.5]);
          var C = pick([0.05, 0.1, 0.15, 0.2, 0.3]);
          var D = pick([0.05, 0.1, 0.15, 0.2, 0.3]);
          var Qr2 = parseFloat(((C * D) / (A * B)).toFixed(3));
          var contexte2 = pick([
            'une réaction de précipitation contrôlée en laboratoire',
            'un équilibre de complexation étudié en chimie analytique',
            'un procédé industriel de synthèse en réacteur fermé',
            'un équilibre chimique modélisé en travaux pratiques'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', pour la réaction $A+B\\rightleftharpoons C+D$, un système contient $[A]=' + fr(A, 2) + '$ mol/L, $[B]=' + fr(B, 2) + '$ mol/L, $[C]=' + fr(C, 2) + '$ mol/L et $[D]=' + fr(D, 2) + '$ mol/L.<br/><br/>Calcule la valeur du quotient de réaction $Q_{r,i}$ de ce système (sans unité, arrondie au millième).',
            answer: Qr2,
            tolerance: Math.max(0.01, parseFloat((Qr2 * 0.03).toFixed(3))),
            unit: '',
            hint: '$Q_r=\\dfrac{[C][D]}{[A][B]}$.',
            solution: [
              'Expression du quotient de réaction : $Q_r=\\dfrac{[C][D]}{[A][B]}=\\dfrac{' + fr(C, 2) + '\\times' + fr(D, 2) + '}{' + fr(A, 2) + '\\times' + fr(B, 2) + '}$.',
              'Résultat : $Q_{r,i}\\approx' + fr(Qr2, 3) + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie la réaction (limitée) $CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$, de constante d\'équilibre $K=4{,}0$. Deux flacons contiennent des mélanges différents de ces quatre espèces (en mol) : Flacon 1 : $n_{acide}=0{,}80$ mol, $n_{alcool}=0{,}80$ mol, $n_{ester}=0{,}20$ mol, $n_{eau}=0{,}20$ mol. Flacon 2 : $n_{acide}=0{,}20$ mol, $n_{alcool}=0{,}20$ mol, $n_{ester}=0{,}90$ mol, $n_{eau}=0{,}90$ mol.',
      tasks: [
        'Calculer le quotient de réaction $Q_{r,1}$ du flacon 1, et déterminer son sens d\'évolution spontanée.',
        'Calculer le quotient de réaction $Q_{r,2}$ du flacon 2, et déterminer son sens d\'évolution spontanée.',
        'Expliquer pourquoi, malgré des compositions très différentes, les deux systèmes évoluent vers le même type d\'état final.'
      ],
      solutions: [
        '$Q_{r,1}=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}=\\dfrac{0{,}20\\times0{,}20}{0{,}80\\times0{,}80}=\\dfrac{0{,}04}{0{,}64}=0{,}0625$. Comme $Q_{r,1}=0{,}0625 &lt; K=4{,}0$, le flacon 1 évolue dans le sens direct (l\'estérification se poursuit).',
        '$Q_{r,2}=\\dfrac{0{,}90\\times0{,}90}{0{,}20\\times0{,}20}=\\dfrac{0{,}81}{0{,}04}=20{,}25$. Comme $Q_{r,2}=20{,}25 &gt; K=4{,}0$, le flacon 2 évolue dans le sens indirect (l\'hydrolyse de l\'ester prédomine).',
        'Dans les deux cas, le système évolue spontanément de façon à rapprocher $Q_r$ de $K=4{,}0$ : le flacon 1 voit $Q_r$ augmenter (sens direct), le flacon 2 voit $Q_r$ diminuer (sens indirect). Quel que soit le point de départ, tout système contenant ces quatre espèces finit par atteindre le <strong>même état d\'équilibre</strong>, caractérisé par $Q_{r,éq}=K=4{,}0$, à condition que la température reste la même.'
      ],
      finalAnswer: '$Q_{r,1}\\approx0{,}063$ (sens direct) et $Q_{r,2}=20{,}25$ (sens indirect) : deux évolutions opposées, mais qui convergent toutes deux vers le même équilibre chimique ($Q_r=K=4{,}0$). C\'est cette convergence vers un état d\'équilibre unique, indépendant du chemin suivi, qui caractérise une constante d\'équilibre.'
    },

    evaluation: {
      title: 'Évaluation — Évolution spontanée d\'un système chimique',
      duration: '30 min',
      questions: [
        {
          statement: 'Pour la réaction $A+B\\rightleftharpoons C+D$, un système contient $[A]=0{,}50$ mol/L, $[B]=0{,}20$ mol/L, $[C]=0{,}10$ mol/L et $[D]=0{,}20$ mol/L. Calculer le quotient de réaction $Q_{r,i}$ (sans unité, arrondi au centième).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$Q_{r,i}=\\dfrac{[C][D]}{[A][B]}=\\dfrac{0{,}10\\times0{,}20}{0{,}50\\times0{,}20}=\\dfrac{0{,}02}{0{,}10}=0{,}20$.'
        },
        {
          statement: 'Un système chimique évolue dans le sens direct (1) lorsque :',
          type: 'multiple-choice',
          options: [
            '$Q_{r,i} &lt; K$',
            '$Q_{r,i} &gt; K$',
            '$Q_{r,i}=K$',
            '$Q_{r,i}=0$ obligatoirement'
          ],
          answer: 0,
          points: 2,
          correction: 'Si $Q_{r,i} &lt; K$, le système doit augmenter $Q_r$ pour rejoindre $K$ : il évolue dans le sens direct, qui forme davantage de produits.'
        },
        {
          statement: 'Pour l\'estérification $CH_3COOH+C_2H_5OH\\rightleftharpoons CH_3COOC_2H_5+H_2O$ ($K=4{,}0$), un système contient $n_{acide}=0{,}40$ mol, $n_{alcool}=0{,}60$ mol, $n_{ester}=0{,}50$ mol et $n_{eau}=0{,}40$ mol. Calculer $Q_{r,i}$ (sans unité, arrondi au centième).',
          type: 'numeric',
          answer: 0.83,
          tolerance: 0.03,
          unit: '',
          points: 3,
          correction: '$Q_{r,i}=\\dfrac{n_{ester}\\times n_{eau}}{n_{acide}\\times n_{alcool}}=\\dfrac{0{,}50\\times0{,}40}{0{,}40\\times0{,}60}=\\dfrac{0{,}20}{0{,}24}\\approx0{,}83$.'
        },
        {
          statement: 'La constante d\'équilibre $K$ d\'une réaction chimique dépend :',
          type: 'multiple-choice',
          options: [
            'Des quantités initiales de réactifs et de produits',
            'Uniquement de la température',
            'Du volume du système',
            'Du sens dans lequel la réaction a été écrite, mais pas de la température'
          ],
          answer: 1,
          points: 2,
          correction: 'La constante d\'équilibre $K$ est une caractéristique de la réaction à une température donnée : elle ne dépend ni des quantités initiales, ni du volume du système, seulement de la température.'
        },
        {
          statement: 'Dans l\'expression du quotient de réaction $Q_r$, on omet toujours :',
          type: 'multiple-choice',
          options: [
            'Les ions dissous',
            'Les molécules dissoutes',
            'Les solides purs et le solvant',
            'Les gaz'
          ],
          answer: 2,
          points: 2,
          correction: 'Les solides purs, les liquides purs et le solvant n\'apparaissent jamais dans l\'expression de $Q_r$ : seules les espèces dissoutes et les gaz (via leur pression) y figurent.'
        }
      ]
    }
  });
