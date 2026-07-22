/* =========================================================
   Spark Learning – data/lycee-tle/tle-primitives-integrales.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-primitives-integrales',
    level: 2, subject: 'maths',
    icon: '∫',
    title: 'Intégration et Primitives',
    subtitle: 'Intégrale définie, aire sous la courbe, primitives',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Conditions initiales'],
    physics: 'Calcul du travail d\'une force, équations horaires',

    cours: {
      intro: 'L\'<strong>intégrale</strong> est à la fois la "somme infinie de tranches infiniment minces" et l\'opération inverse de la dérivation.<br/><br/>$\\int_a^b f(x)\\,dx$ représente l\'<strong>aire signée</strong> entre la courbe et l\'axe des abscisses sur $[a;b]$ : positive si $f > 0$, négative si $f < 0$.<br/><br/>En physique : $\\int_{t_1}^{t_2} v(t)\\,dt$ est la distance parcourue, $\\int_0^d F(x)\\,dx$ est le travail d\'une force.<br/><br/>Pour trouver une <strong>primitive</strong> $F$ de $f$, on "remonte" les règles de dérivation : la primitive de $x^n$ est $x^{n+1}/(n+1)$ — on DIVISE par $n+1$, on ne multiplie pas.<br/><br/>L\'erreur classique : appliquer la règle de la dérivée (multiplier par l\'exposant) au lieu de la règle de la primitive (diviser par l\'exposant+1).',
      definitions: [
        { term: 'Primitive', def: 'Une fonction $F$ est une <strong>primitive</strong> de $f$ sur un intervalle $I$ si $F\'(x) = f(x)$ pour tout $x \\in I$. Deux primitives d\'une même fonction diffèrent d\'une constante : si $F$ est une primitive de $f$, toutes les primitives sont $F + C$ avec $C \\in \\mathbb{R}$.' },
        { term: 'Intégrale définie', def: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$ où $F$ est une primitive quelconque de $f$. C\'est l\'<strong>aire signée</strong> entre la courbe de $f$ et l\'axe des abscisses sur $[a;b]$.' },
        { term: 'Aire signée', def: 'L\'intégrale peut être négative si la courbe est SOUS l\'axe $Ox$. L\'aire géométrique (toujours positive) est $\\int_a^b |f(x)|\\,dx$.' },
        { term: 'Valeur moyenne', def: 'La valeur moyenne de $f$ sur $[a;b]$ est $\\mu = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx$. C\'est la hauteur du rectangle de même aire que la surface sous la courbe.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Primitive de fonctions usuelles</strong> : trouver $F(x)$ telle que $F\'(x) = f(x)$ ; la primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$ (pour $n \\neq -1$).',
          '<strong>Intégrale définie</strong> : $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (le crochet).',
          '<strong>Conditions initiales</strong> : utiliser les conditions initiales pour fixer la constante d\'intégration $C$. Si $v(0) = v_0$, on en déduit $C$.'
        ]
      },
      example: {
        statement: 'Calculer l\'aire entre la courbe de $f(x) = x^2 - 1$ et l\'axe des abscisses sur $[0;2]$.',
        steps: [
          'On cherche la primitive de $f(x) = x^2 - 1$ : $F(x) = \\dfrac{x^3}{3} - x$.',
          'On calcule l\'intégrale : $\\int_0^2 (x^2 - 1)\\,dx = \\left[\\dfrac{x^3}{3} - x\\right]_0^2 = \\left(\\dfrac{8}{3} - 2\\right) - 0 = \\dfrac{2}{3}$.',
          'Attention : $f$ change de signe en $x = 1$. Sur $[0;1]$, $f < 0$ et sur $[1;2]$, $f > 0$.',
          'L\'aire géométrique est : $\\int_0^1 |f(x)|\\,dx + \\int_1^2 f(x)\\,dx = \\dfrac{2}{3} + \\dfrac{4}{3} = 2$.'
        ],
        answer: 'L\'intégrale vaut $\\dfrac{2}{3}$, mais l\'aire géométrique réelle est $2$ unités d\'aire (il faut tenir compte du changement de signe).'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (pour $n \\neq -1$)',
        '$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
        '$\\int e^x\\,dx = e^x + C$',
        '$\\int \\cos x\\,dx = \\sin x + C$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Aire signée',
        title: 'Intégrale de $f(x) = x^2 - 1$ sur $[0\\,;\\,2]$ (exemple du cours)',
        description: 'La courbe passe sous l\'axe des abscisses sur $[0\\,;\\,1]$ (aire hachurée en rouge, contribution <strong>négative</strong>) puis au-dessus sur $[1\\,;\\,2]$ (aire hachurée en vert, contribution <strong>positive</strong>). L\'intégrale $\\int_0^2 f(x)\\,dx = \\dfrac{2}{3}$ est la somme signée de ces deux aires ; l\'aire géométrique réelle (sans compensation de signe) vaut $2$.',
        svg: `
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="integrale-title integrale-desc">
            <title id="integrale-title">Aires positive et negative de f(x) = x^2 - 1 sur [0;2]</title>
            <desc id="integrale-desc">Courbe parabolique passant sous l'axe des abscisses entre 0 et 1 (aire negative hachuree en rouge) puis au-dessus entre 1 et 2 (aire positive hachuree en vert). L'integrale signee vaut 2/3 et l'aire geometrique totale vaut 2.</desc>

            <defs>
              <pattern id="conv-int-hatch-neg" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="color-mix(in srgb, var(--error) 10%, transparent)"></rect>
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--error)" stroke-width="1.6" opacity="0.6"></line>
              </pattern>
              <pattern id="conv-int-hatch-pos" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="color-mix(in srgb, var(--success) 10%, transparent)"></rect>
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--success)" stroke-width="1.6" opacity="0.6"></line>
              </pattern>
            </defs>

            <!-- grille verticale -->
            <line class="grid-line" x1="94.2" y1="40" x2="94.2" y2="235"></line>
            <line class="grid-line" x1="225.0" y1="40" x2="225.0" y2="235"></line>
            <line class="grid-line" x1="355.8" y1="40" x2="355.8" y2="235"></line>

            <!-- grille horizontale -->
            <line class="grid-line" x1="55" y1="225.1" x2="395" y2="225.1"></line>
            <line class="grid-line" x1="55" y1="159.0" x2="395" y2="159.0"></line>
            <line class="grid-line" x1="55" y1="125.9" x2="395" y2="125.9"></line>
            <line class="grid-line" x1="55" y1="92.9" x2="395" y2="92.9"></line>

            <!-- aire negative [0;1], hachures rouges -->
            <polygon points="94.2,192.0 94.2,225.1 107.3,224.8 120.4,223.8 133.5,222.1 146.5,219.8 159.6,216.8 172.7,213.2 185.8,208.9 198.8,203.9 211.9,198.3 225.0,192.0" fill="url(#conv-int-hatch-neg)" stroke="none"></polygon>

            <!-- aire positive [1;2], hachures vertes -->
            <polygon points="225.0,192.0 238.1,185.1 251.2,177.5 264.2,169.2 277.3,160.3 290.4,150.7 303.5,140.5 316.5,129.6 329.6,118.0 342.7,105.8 355.8,92.9 355.8,192.0" fill="url(#conv-int-hatch-pos)" stroke="none"></polygon>

            <!-- axes -->
            <line class="axis" x1="48" y1="192.0" x2="402" y2="192.0"></line>
            <line class="axis" x1="94.2" y1="30" x2="94.2" y2="245"></line>

            <!-- courbe -->
            <polyline class="curve-main" points="55.0,222.1 68.1,223.8 81.2,224.8 94.2,225.1 107.3,224.8 120.4,223.8 133.5,222.1 146.5,219.8 159.6,216.8 172.7,213.2 185.8,208.9 198.8,203.9 211.9,198.3 225.0,192.0 238.1,185.1 251.2,177.5 264.2,169.2 277.3,160.3 290.4,150.7 303.5,140.5 316.5,129.6 329.6,118.0 342.7,105.8 355.8,92.9 368.8,79.3 381.9,65.1 395.0,50.2"></polyline>

            <!-- points cles -->
            <circle class="plot-point" cx="94.2" cy="225.1" r="5"></circle>
            <circle class="plot-point-alt" cx="225.0" cy="192.0" r="5"></circle>
            <circle class="plot-point" cx="355.8" cy="92.9" r="5"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="210" y="18" text-anchor="middle">f(x) = x² − 1</text>
            <text class="annotation-label" x="115" y="207" text-anchor="middle">Aire négative</text>
            <text class="label-soft" x="115" y="220" text-anchor="middle">2/3</text>
            <text class="annotation-label" x="333" y="140" text-anchor="middle">Aire positive</text>
            <text class="label-soft" x="333" y="154" text-anchor="middle">4/3</text>

            <text class="tick-label" x="94.2" y="250" text-anchor="middle">0</text>
            <text class="tick-label" x="225.0" y="250" text-anchor="middle">1</text>
            <text class="tick-label" x="355.8" y="250" text-anchor="middle">2</text>

            <text class="tick-label" x="35" y="229" text-anchor="middle">-1</text>
            <text class="tick-label" x="35" y="163" text-anchor="middle">1</text>
            <text class="tick-label" x="35" y="130" text-anchor="middle">2</text>
            <text class="tick-label" x="35" y="97" text-anchor="middle">3</text>

            <text class="axis-label" x="406" y="196">x</text>
            <text class="axis-label" x="99" y="24">y</text>
          </svg>
        `,
        notes: [
          'Sur $[0\\,;\\,1]$, $f(x) < 0$ : la courbe est sous l\'axe. La contribution signée à l\'intégrale est <strong>négative</strong> ($-\\dfrac{2}{3}$), hachurée en rouge.',
          'Sur $[1\\,;\\,2]$, $f(x) > 0$ : la courbe est au-dessus de l\'axe. La contribution signée est <strong>positive</strong> ($\\dfrac{4}{3}$), hachurée en vert.',
          'L\'intégrale $\\int_0^2 f(x)\\,dx = -\\dfrac{2}{3} + \\dfrac{4}{3} = \\dfrac{2}{3}$ additionne les deux contributions AVEC leur signe. L\'aire géométrique réelle (toujours positive) est $\\dfrac{2}{3} + \\dfrac{4}{3} = 2$.'
        ],
        reading: 'Le rouge et le vert distinguent les deux zones où la courbe change de côté par rapport à l\'axe. L\'intégrale les additionne avec leur signe ; l\'aire géométrique les additionne en valeur absolue.',
        caption: 'Aires signées de $f(x) = x^2 - 1$ sur $[0\\,;\\,2]$ : $-\\dfrac{2}{3}$ (rouge) et $\\dfrac{4}{3}$ (vert), soit $\\int_0^2 f(x)\\,dx = \\dfrac{2}{3}$ et une aire géométrique de $2$.'
      },
      recap: [
        'La primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1} + C$ — on augmente l\'exposant de $1$ et on divise par le nouvel exposant.',
        'L\'intégrale définie $\\int_a^b f(x)\\,dx = F(b) - F(a)$ : le crochet évalue la primitive aux bornes.',
        'L\'intégrale est une aire SIGNÉE : si $f < 0$, la contribution est négative. Pour l\'aire géométrique, intégrer $|f|$.',
        'Ne jamais oublier la constante $+C$ pour une primitive indéfinie, et utiliser les conditions initiales pour la déterminer en physique.'
      ],
      piege: 'On divise par $(n+1)$, on ne multiplie pas ! La primitive de $3x^2$ est $\\dfrac{3x^3}{3} = x^3$, PAS $6x^3$.<br/><br/>Et n\'oublie jamais la constante $+C$ pour une primitive indéfinie !'
    },

    quiz: [
      {
        q: 'Pour trouver la primitive de $f(x) = 5x^4$, un élève écrit : "la primitive est $5 \\times 4 \\times x^3 = 20x^3 + C$." Quelle est son erreur ?',
        options: [
          'Il a DÉRIVÉ au lieu d\'intégrer. La primitive de $5x^4$ est $\\dfrac{5x^5}{5} = x^5 + C$',
          'Il a raison, mais il faut écrire $+C$ à la fin',
          'La primitive est $\\dfrac{5}{4}x^5 + C$ car on divise par l\'exposant',
          'La primitive de $5x^4$ est $20x^5 + C$ car on multiplie par $x$'
        ],
        answer: 0,
        correction: 'L\'élève a appliqué la règle de la <strong>DÉRIVÉE</strong> (multiplier par l\'exposant et baisser d\'un degré) au lieu de la règle de la <strong>PRIMITIVE</strong> (augmenter d\'un degré et diviser par le nouvel exposant).<br/><br/>La primitive de $5x^4$ est $\\frac{5x^{4+1}}{4+1} = \\frac{5x^5}{5} = x^5 + C$.<br/><br/>Vérification : $(x^5)\' = 5x^4$ ✓'
      },
      {
        q: 'Calculer $\\int_1^3 2x\\,dx$.',
        options: ['$4$', '$8$', '$6$', '$16$'],
        answer: 1,
        correction: 'La primitive de $2x$ est $x^2$.<br/><br/>On évalue aux bornes : $\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.'
      },
      {
        q: 'En physique, si $v(t) = at$ (accélération constante) et $x(0) = 0$, alors $x(t) = ?$',
        options: ['$x(t) = a$', '$x(t) = \\dfrac{a}{2}$', '$x(t) = at^2$', '$x(t) = \\dfrac{1}{2}at^2$'],
        answer: 3,
        correction: 'La position est la <strong>primitive de la vitesse</strong> : $x(t) = \\int v(t)\\,dt = \\int at\\,dt = \\dfrac{at^2}{2} + C$.<br/><br/>Avec la condition initiale $x(0) = 0$, on trouve $C = 0$.<br/><br/>Donc $x(t) = \\dfrac{1}{2}at^2$.'
      },
      {
        q: 'La valeur moyenne de $f(x) = 2x$ sur $[0;4]$ est :',
        options: ['$2$', '$4$', '$8$', '$16$'],
        answer: 1,
        correction: '$\\mu = \\dfrac{1}{4-0}\\int_0^4 2x\\,dx = \\dfrac{1}{4}[x^2]_0^4 = \\dfrac{16}{4} = 4$.<br/><br/>Intuitivement, la <strong>valeur moyenne</strong> est la hauteur du rectangle de même base et de même aire que la surface sous la courbe.'
      },
      {
        q: 'Un élève écrit : "$\\int_0^1 e^x\\,dx = [xe^x]_0^1 = e$". Quelle est son erreur ?',
        options: [
          'La primitive de $e^x$ est $e^x$ (et non $xe^x$). Le résultat correct est $[e^x]_0^1 = e - 1$',
          'L\'élève a raison, $\\int e^x\\,dx = xe^x + C$',
          'La primitive de $e^x$ est $e^{x+1}/(x+1) + C$',
          'L\'intégrale de $e^x$ n\'existe pas sur $[0;1]$'
        ],
        answer: 0,
        correction: 'La primitive de $e^x$ est $e^x + C$ (et non $xe^x$).<br/><br/>Donc $\\int_0^1 e^x\\,dx = [e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 1{,}718$.<br/><br/>L\'erreur vient d\'une confusion avec la règle $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ qui ne s\'applique pas à $e^x$. L\'exponentielle est sa propre primitive !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La vitesse d\'un mobile est', fLabel: 'v(t)', varName: 't', unit: 's', bLabel: 'm' },
          { intro: 'La puissance instantanée d\'une machine est', fLabel: 'P(t)', varName: 't', unit: 's', bLabel: 'J' },
          { intro: 'Le débit d\'eau d\'une fontaine est', fLabel: 'q(t)', varName: 't', unit: 'min', bLabel: 'L' },
          { intro: 'L\'intensité du courant dans un circuit est', fLabel: 'i(t)', varName: 't', unit: 's', bLabel: 'C' }
        ]);
        const a = rand(2, 6);
        const borneSup = rand(2, 4);
        // f(t) = a*t^2, integral from 0 to b = a*b^3/3
        const result = parseFloat((a * Math.pow(borneSup, 3) / 3).toFixed(2));
        return {
          statement: `${ctx.intro} $${ctx.fLabel} = ${a}${ctx.varName}^2$. Calculer $\\int_0^{${borneSup}} ${a}${ctx.varName}^2\\,d${ctx.varName}$. Arrondir à $0{,}01$.`,
          answer: result,
          tolerance: 0.05,
          unit: ctx.bLabel,
          hint: `La primitive de $${a}${ctx.varName}^2$ est $\\dfrac{${a}${ctx.varName}^3}{3}$. Applique le crochet : $\\left[\\dfrac{${a}${ctx.varName}^3}{3}\\right]_0^{${borneSup}}$.`,
          solution: [
            `Primitive de $${a}${ctx.varName}^2$ : $F(${ctx.varName}) = \\dfrac{${a}}{3}${ctx.varName}^3$`,
            `$\\int_0^{${borneSup}} ${a}${ctx.varName}^2\\,d${ctx.varName} = \\left[\\dfrac{${a}}{3}${ctx.varName}^3\\right]_0^{${borneSup}} = \\dfrac{${a}}{3} \\times ${Math.pow(borneSup, 3)} - 0$`,
            `$= \\dfrac{${a * Math.pow(borneSup, 3)}}{3} = ${result}$ ${ctx.bLabel}`
          ]
        };
      }
    },

    probleme: {
      context: 'En thermodynamique, le travail élémentaire d\'une force de rappel élastique est $dW = F\\,dx$ avec $F = kx$ (loi de Hooke). On veut calculer le travail total $W$ pour étirer un ressort de $x = 0$ à $x = d$, avec $k = 200$ N/m et $d = 0{,}15$ m.',
      schema: null,
      tasks: [
        'Écrire l\'intégrale à calculer : $W = \\int_0^d kx\\,dx$.',
        'Calculer la primitive de $kx$ par rapport à $x$.',
        'Calculer numériquement $W$ en substituant $k = 200$ N/m et $d = 0{,}15$ m.'
      ],
      solutions: [
        '$W = \\int_0^d kx\\,dx = k \\int_0^d x\\,dx$.',
        'Primitive de $x$ : $\\dfrac{x^2}{2}$. Donc $W = k \\left[\\dfrac{x^2}{2}\\right]_0^d = k \\dfrac{d^2}{2}$.',
        '$W = 200 \\times \\dfrac{(0{,}15)^2}{2} = 200 \\times \\dfrac{0{,}0225}{2} = 200 \\times 0{,}01125 = 2{,}25$ J.'
      ],
      finalAnswer: '$W = 2{,}25$ J'
    },

    evaluation: {
      title: 'Évaluation — Intégration et primitives',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\int_0^2 3x^2\\,dx$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La primitive de $3x^2$ est $x^3$ (on divise le coefficient $3$ par le nouvel exposant $3$).<br/><br/>$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$.'
        },
        {
          statement: 'Quelle est la primitive de $f(x) = 4x^3 + 2x$ ?',
          type: 'multiple-choice',
          options: ['$12x^2 + 2 + C$', '$x^4 + x^2 + C$', '$4x^4 + 2x^2 + C$', '$x^4 + x + C$'],
          answer: 1,
          points: 2,
          correction: 'Primitive de $4x^3$ : $\\dfrac{4x^4}{4} = x^4$.<br/><br/>Primitive de $2x$ : $\\dfrac{2x^2}{2} = x^2$.<br/><br/>Donc $F(x) = x^4 + x^2 + C$.'
        },
        {
          statement: 'Calculer $\\int_1^4 \\dfrac{1}{\\sqrt{x}}\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On réécrit : $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$.<br/><br/>La primitive est $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$.<br/><br/>On évalue : $[2\\sqrt{x}]_1^4 = 2 \\times 2 - 2 \\times 1 = 4 - 2 = 2$.'
        },
        {
          statement: 'Si $v(t) = 6t$ (accélération constante $a = 6$ m/s²) et $x(0) = 5$ m, alors $x(t) = ?$',
          type: 'multiple-choice',
          options: ['$6t + 5$', '$3t^2$', '$3t^2 + 5$', '$6t^2 + 5$'],
          answer: 2,
          points: 2,
          correction: 'La position est la primitive de la vitesse : $x(t) = \\int 6t\\,dt = 3t^2 + C$.<br/><br/>On utilise la condition initiale pour trouver $C$ : $x(0) = 3 \\times 0 + C = 5$, donc $C = 5$.<br/><br/>Finalement, $x(t) = 3t^2 + 5$.'
        },
        {
          statement: 'Calculer $\\int_0^{\\pi} \\sin x\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La primitive de $\\sin x$ est $-\\cos x$.<br/><br/>$[-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) + 1 = 1 + 1 = 2$.'
        }
      ]
    }
  });
