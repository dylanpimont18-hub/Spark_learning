/* =========================================================
   Spark Learning – data/lycee-1re/1re-second-degre.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-second-degre',
    level: 2, subject: 'maths',
    icon: '🔵',
    title: 'Second degré',
    subtitle: 'Équations, discriminant, factorisation',
    keywords: ['Trinôme', 'Discriminant', 'Racine', 'Factorisation'],
    physics: 'Trajectoire parabolique d\'un projectile, étude de la chute libre',
    cours: {
      intro: 'Une équation du <strong>second degré</strong> modélise toute situation où une quantité dépend du carré d\'une autre : trajectoire d\'un projectile, aire d\'un carré, bénéfice d\'une entreprise.<br/><br/>Le <strong>discriminant</strong> $\\Delta = b^2 - 4ac$ agit comme un capteur : $\\Delta > 0$ signifie que la parabole coupe l\'axe des abscisses en 2 points distincts, $\\Delta = 0$ en 1 point (sommet sur l\'axe), $\\Delta < 0$ jamais.<br/><br/>Une erreur très fréquente : résoudre $x^2 = 9$ et n\'écrire que $x = 3$, en oubliant que $(-3)^2 = 9$ aussi — il y a <strong>deux solutions</strong> $x = 3$ et $x = -3$.<br/><br/>La forme factorisée $a(x-x_1)(x-x_2)$ est très utile en physique pour trouver les instants où une grandeur s\'annule.',
      definitions: [
        { term: 'Trinôme du second degré', def: 'Un <strong>trinôme</strong> est un polynôme de la forme $ax^2 + bx + c$ avec $a \\neq 0$. Sa courbe représentative est une <strong>parabole</strong>.' },
        { term: 'Discriminant', def: 'Le <strong>discriminant</strong> $\\Delta = b^2 - 4ac$ détermine le nombre de racines réelles : $\\Delta > 0$ (deux racines), $\\Delta = 0$ (racine double), $\\Delta < 0$ (aucune racine réelle).' },
        { term: 'Racine', def: 'Une <strong>racine</strong> (ou zéro) de $ax^2 + bx + c$ est une valeur $x_0$ telle que $ax_0^2 + bx_0 + c = 0$. Graphiquement, c\'est un point d\'intersection avec l\'axe des abscisses.' },
        { term: 'Sommet de la parabole', def: 'Le <strong>sommet</strong> a pour abscisse $x_S = -\\dfrac{b}{2a}$ et pour ordonnée $f(x_S)$. C\'est le <strong>maximum</strong> si $a < 0$ ou le <strong>minimum</strong> si $a > 0$.' }
      ],
      method: {
        title: 'Résoudre $ax^2+bx+c=0$',
        steps: [
          '<strong>Calculer le discriminant</strong> $\\Delta = b^2-4ac$.',
          '<strong>Si $\\Delta < 0$</strong> : pas de solution réelle.',
          '<strong>Si $\\Delta = 0$</strong> : une solution double $x_0 = -\\dfrac{b}{2a}$.',
          '<strong>Si $\\Delta > 0$</strong> : deux solutions $x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.'
        ]
      },
      example: {
        statement: 'Résoudre $2x^2 - 8x + 6 = 0$ et donner la forme factorisée.',
        steps: [
          'On identifie $a = 2$, $b = -8$, $c = 6$. Calcul du discriminant : $\\Delta = (-8)^2 - 4 \\times 2 \\times 6 = 64 - 48 = 16$.',
          '$\\Delta = 16 > 0$ : deux racines distinctes. $\\sqrt{\\Delta} = 4$.',
          '$x_1 = \\dfrac{8 - 4}{4} = 1$ et $x_2 = \\dfrac{8 + 4}{4} = 3$.'
        ],
        answer: 'Les solutions sont $x_1 = 1$ et $x_2 = 3$. Forme factorisée : $2(x - 1)(x - 3)$.'
      },
      formulas: [
        '$\\Delta = b^2-4ac$',
        '$x_{1,2}=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$ si $\\Delta>0$',
        'Forme factorisée : $a(x-x_1)(x-x_2)$ si $\\Delta>0$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Racines et sommet',
        title: 'Repérer les racines et le sommet sur la parabole',
        description: 'La parabole de $g(x) = 2x^2 - 8x + 6$ (l\'exemple du cours), calculée point par point entre $x=-0{,}5$ et $x=4{,}5$, avec ses deux racines $x_1=1$ et $x_2=3$ et son sommet $S(2\\,;\\,-2)$.',
        svg: `
          <svg viewBox="0 0 430 300" role="img" aria-labelledby="second-degre-graph-title second-degre-graph-desc">
            <title id="second-degre-graph-title">Parabole de g(x) = 2x carre - 8x + 6 avec racines et sommet</title>
            <desc id="second-degre-graph-desc">Parabole tracee entre x=-0,5 et x=4,5. Elle coupe l'axe des abscisses en x=1 et x=3, et son sommet, minimum de la parabole, est au point (2 ; -2), a mi-chemin entre les deux racines.</desc>

            <!-- grille verticale -->
            <line class="grid-line" x1="89.5" y1="30" x2="89.5" y2="250"></line>
            <line class="grid-line" x1="158.5" y1="30" x2="158.5" y2="250"></line>
            <line class="grid-line" x1="227.5" y1="30" x2="227.5" y2="250"></line>
            <line class="grid-line" x1="296.5" y1="30" x2="296.5" y2="250"></line>
            <line class="grid-line" x1="365.5" y1="30" x2="365.5" y2="250"></line>

            <!-- axe de symetrie x = 2 -->
            <line class="guide-line" x1="227.5" y1="30" x2="227.5" y2="250"></line>

            <!-- axes -->
            <line class="axis" x1="48" y1="206.8" x2="407" y2="206.8"></line>
            <line class="axis" x1="89.5" y1="23" x2="89.5" y2="257"></line>

            <!-- parabole calculee point par point -->
            <polyline class="curve-main" points="55.0,41.8 66.5,67.1 78.0,90.7 89.5,112.5 101.0,132.6 112.5,150.9 124.0,167.5 135.5,182.3 147.0,195.4 158.5,206.8 170.0,216.4 181.5,224.2 193.0,230.4 204.5,234.7 216.0,237.3 227.5,238.2 239.0,237.3 250.5,234.7 262.0,230.4 273.5,224.2 285.0,216.4 296.5,206.8 308.0,195.4 319.5,182.3 331.0,167.5 342.5,150.9 354.0,132.6 365.5,112.5 377.0,90.7 388.5,67.1 400.0,41.8"></polyline>

            <!-- racines -->
            <circle class="plot-point" cx="158.5" cy="206.8" r="5"></circle>
            <circle class="plot-point" cx="296.5" cy="206.8" r="5"></circle>
            <!-- sommet -->
            <circle class="plot-point-alt" cx="227.5" cy="238.2" r="5"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="227" y="16" text-anchor="middle">g(x) = 2x² − 8x + 6</text>
            <text class="annotation-label" x="158.5" y="194" text-anchor="middle">x₁ = 1</text>
            <text class="annotation-label" x="296.5" y="194" text-anchor="middle">x₂ = 3</text>
            <text class="annotation-label" x="236" y="248" text-anchor="start">S(2 ; -2)</text>
            <text class="label-soft" x="227.5" y="44" text-anchor="middle">axe de symétrie (x = 2)</text>

            <text class="tick-label" x="89.5" y="222" text-anchor="middle">0</text>
            <text class="tick-label" x="158.5" y="222" text-anchor="middle">1</text>
            <text class="tick-label" x="227.5" y="222" text-anchor="middle">2</text>
            <text class="tick-label" x="296.5" y="222" text-anchor="middle">3</text>
            <text class="tick-label" x="365.5" y="222" text-anchor="middle">4</text>
            <text class="tick-label" x="79" y="242" text-anchor="end">-2</text>
            <text class="tick-label" x="79" y="116" text-anchor="end">6</text>
            <text class="tick-label" x="79" y="53" text-anchor="end">10</text>
            <text class="axis-label" x="412" y="211">x</text>
            <text class="axis-label" x="94" y="20">y</text>
          </svg>
        `,
        notes: [
          'Le discriminant vaut $\\Delta = (-8)^2 - 4\\times2\\times6 = 64-48=16$, donc $\\sqrt{\\Delta}=4$ : il y a deux racines distinctes.',
          'Les racines sont $x_1=\\dfrac{8-4}{4}=1$ et $x_2=\\dfrac{8+4}{4}=3$ : ce sont les deux points où la parabole coupe l\'axe des abscisses (points pleins sur le graphique).',
          'Le sommet est en $x_S=-\\dfrac{b}{2a}=\\dfrac{8}{4}=2$, à mi-chemin entre les deux racines (axe de symétrie en tirets). Son ordonnée est $g(2)=8-16+6=-2$.',
          'Comme $a=2>0$, la parabole "sourit" vers le haut : le sommet $S(2\\,;\\,-2)$ est un <strong>minimum</strong>.'
        ],
        reading: 'Repère d\'abord les deux racines (là où la courbe touche l\'axe horizontal), puis le sommet exactement à mi-chemin entre elles : c\'est l\'axe de symétrie de la parabole.',
        caption: 'Parabole de $g(x)=2x^2-8x+6$, exemple du cours, avec racines et sommet vérifiés indépendamment ($\\Delta=16$, $x_1=1$, $x_2=3$, $S(2\\,;\\,-2)$).'
      },
      recap: [
        'Toujours calculer $\\Delta = b^2 - 4ac$ <strong>en premier</strong> : c\'est lui qui dicte le nombre de solutions.',
        '$\\Delta > 0$ : deux racines ; $\\Delta = 0$ : racine double ; $\\Delta < 0$ : aucune racine réelle.',
        'Le sommet de la parabole est en $x_S = -b/(2a)$ : c\'est l\'abscisse de l\'extremum.',
        'Si $a > 0$ : parabole "souriante" (minimum). Si $a < 0$ : parabole "triste" (maximum).'
      ],
      piege: 'Attention au <strong>signe de $a$</strong> : si $a<0$ le coefficient de $x^2$ est négatif, ne pas oublier de l\'inclure dans $\\Delta$.<br/><br/>Autre piège classique : résoudre $x^2 = k$ et ne donner qu\'une seule solution. Il y en a toujours <strong>deux</strong> si $k > 0$ : $x = \\sqrt{k}$ et $x = -\\sqrt{k}$.'
    },
    quiz: [
      { q: 'Résoudre $x^2 = 9$. Laquelle de ces affirmations est CORRECTE ?', options: ['La seule solution est $x = 3$ car $\\sqrt{9} = 3$', 'Les solutions sont $x = 3$ et $x = -3$ car $(\\pm 3)^2 = 9$', 'La seule solution est $x = -3$ car le discriminant donne une solution négative', 'Il n\'y a pas de solution car $b = c = 0$'], answer: 1, correction: '$x^2 = 9$ revient à $x^2 - 9 = 0$, soit $(x-3)(x+3) = 0$.<br/><br/>Il y a bien <strong>deux solutions</strong> : $x = 3$ et $x = -3$. L\'erreur classique est d\'écrire uniquement $x = \\sqrt{9} = 3$ car on oublie que $(-3)^2 = 9$ également.<br/><br/>Retiens : toujours vérifier les deux signes !' },
      { q: 'Si $\\Delta=0$, l\'équation $ax^2+bx+c=0$ a :', options: ['Deux solutions distinctes', 'Pas de solution', 'Une solution double', 'Une infinité de solutions'], answer: 2, correction: 'Quand le discriminant est nul ($\\Delta = 0$), la parabole est tangente à l\'axe des abscisses.<br/><br/>Il y a une <strong>solution double</strong> : $x_0 = -b/(2a)$.' },
      { q: 'Les solutions de $x^2-5x+6=0$ sont :', options: ['$x=1$ et $x=6$', '$x=2$ et $x=3$', '$x=-2$ et $x=-3$', '$x=5$ et $x=1$'], answer: 1, correction: 'On identifie $a = 1$, $b = -5$, $c = 6$. Le discriminant vaut $\\Delta = 25 - 24 = 1 > 0$.<br/><br/>Les deux racines sont $x_1 = \\frac{5-1}{2} = 2$ et $x_2 = \\frac{5+1}{2} = 3$.' },
      { q: 'Le sommet de la parabole $f(x) = -2x^2 + 8x - 3$ est en :', options: ['$(2\\,;\\,5)$', '$(4\\,;\\,-3)$', '$(-2\\,;\\,-27)$', '$(2\\,;\\,-3)$'], answer: 0, correction: 'L\'abscisse du sommet est $x_S = -\\dfrac{b}{2a} = -\\dfrac{8}{2 \\times (-2)} = -\\dfrac{8}{-4} = 2$.<br/><br/>L\'ordonnée du sommet est $f(2) = -2 \\times 4 + 8 \\times 2 - 3 = -8 + 16 - 3 = 5$.<br/><br/>Le sommet est donc $(2\\,;\\,5)$. Comme $a = -2 < 0$, c\'est un <strong>maximum</strong>.' },
      { q: 'L\'équation $3x^2 + 2x + 1 = 0$ a pour discriminant :', options: ['$\\Delta = 16$', '$\\Delta = -8$', '$\\Delta = 8$', '$\\Delta = -16$'], answer: 1, correction: 'On calcule le discriminant : $\\Delta = 2^2 - 4 \\times 3 \\times 1 = 4 - 12 = -8$.<br/><br/>Comme $\\Delta < 0$, l\'équation n\'a <strong>aucune solution réelle</strong>. La parabole ne coupe jamais l\'axe des abscisses.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(1, 5), r2 = rand(r1 + 1, r1 + 5);
        const a = pick([1, 2]);
        const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
        const delta = bCoef * bCoef - 4 * a * cCoef;
        const sqrtDelta = Math.sqrt(delta);
        const ctx = pick([
          { intro: 'La trajectoire d\'un ballon est modélisée par $h(x) = ', question: 'Déterminer les distances $x$ auxquelles le ballon touche le sol ($h = 0$).' },
          { intro: 'Le bénéfice d\'une start-up (en k€) est donné par $B(x) = ', question: 'Pour quelles valeurs de $x$ le bénéfice est-il nul ?' },
          { intro: 'Soit l\'équation $', question: 'Résoudre cette équation.' }
        ]);
        return {
          statement: `${ctx.intro}${a === 1 ? '' : a}x^2 ${bCoef >= 0 ? '+' + bCoef : bCoef}x ${cCoef >= 0 ? '+' + cCoef : cCoef}${ctx.intro.includes('équation') ? ' = 0$.' : '$.'}<br/><br/>${ctx.question}<br/>1) Calculer $\\Delta$.<br/>2) En déduire les solutions.<br/><br/>Donner la <strong>plus grande</strong> racine.`,
          answer: r2,
          tolerance: 0.01,
          unit: '',
          hint: `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef}$. Puis $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.`,
          solution: [
            `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef} = ${bCoef*bCoef} - ${4*a*cCoef} = ${delta}$.`,
            `$\\sqrt{\\Delta} = ${sqrtDelta}$. $x_1 = \\dfrac{${-bCoef} - ${sqrtDelta}}{${2*a}} = ${r1}$ et $x_2 = \\dfrac{${-bCoef} + ${sqrtDelta}}{${2*a}} = ${r2}$.`,
            `La plus grande racine est $x_2 = ${r2}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une balle est lancée verticalement. Sa hauteur (en m) est $h(t)=-5t^2+20t+1$ où $t$ est en secondes.',
      tasks: [
        'À quel instant la balle est-elle à $h=16$ m ?',
        'Calculer le discriminant et résoudre.',
        'Quand la balle touche-t-elle le sol ($h=0$) ?'
      ],
      solutions: [
        '$-5t^2+20t+1=16 \\Rightarrow -5t^2+20t-15=0 \\Rightarrow t^2-4t+3=0$.',
        '$\\Delta=16-12=4$. $t_1=\\frac{4-2}{2}=1$ s et $t_2=\\frac{4+2}{2}=3$ s.',
        '$-5t^2+20t+1=0$ ; $\\Delta=400+20=420$ ; $t=\\frac{-20+\\sqrt{420}}{-10}\\approx 4{,}05$ s.'
      ],
      finalAnswer: 'La balle est à $16$ m en $t=1$ s et $t=3$ s. Elle touche le sol vers $t\\approx 4{,}05$ s.'
    },

    evaluation: {
      title: 'Évaluation — Second degré',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le discriminant de $2x^2 - 7x + 3 = 0$.',
          type: 'numeric',
          answer: 25,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On identifie $a = 2$, $b = -7$, $c = 3$ et on applique la formule du discriminant.<br/><br/>$\\Delta = b^2 - 4ac = (-7)^2 - 4 \\times 2 \\times 3 = 49 - 24 = 25$.'
        },
        {
          statement: 'Résoudre $2x^2 - 7x + 3 = 0$. Donner la plus grande racine.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On a trouvé $\\Delta = 25$, donc $\\sqrt{\\Delta} = 5$.<br/><br/>Les racines sont $x_1 = \\dfrac{7 - 5}{4} = \\dfrac{1}{2}$ et $x_2 = \\dfrac{7 + 5}{4} = 3$.<br/><br/>La plus grande racine est $x_2 = 3$.'
        },
        {
          statement: 'L\'équation $x^2 + 2x + 5 = 0$ admet :',
          type: 'multiple-choice',
          options: ['Deux solutions réelles distinctes', 'Une solution double', 'Aucune solution réelle', 'Une infinité de solutions'],
          answer: 2,
          points: 2,
          correction: 'On calcule $\\Delta = b^2 - 4ac = 4 - 20 = -16$.<br/><br/>Le discriminant est strictement négatif ($\\Delta < 0$), donc l\'équation n\'admet <strong>aucune solution réelle</strong>. La parabole ne coupe pas l\'axe des abscisses.'
        },
        {
          statement: 'La forme factorisée de $x^2 - 6x + 8$ est :',
          type: 'multiple-choice',
          options: ['$(x - 2)(x + 4)$', '$(x - 2)(x - 4)$', '$(x + 2)(x - 4)$', '$(x - 1)(x - 8)$'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 32 = 4 > 0$, donc $\\sqrt{\\Delta} = 2$.<br/><br/>Les racines sont $x_1 = \\dfrac{6 - 2}{2} = 2$ et $x_2 = \\dfrac{6 + 2}{2} = 4$.<br/><br/>La forme factorisée s\'écrit $a(x - x_1)(x - x_2) = (x - 2)(x - 4)$ (ici $a = 1$).'
        },
        {
          statement: 'Le sommet de la parabole $f(x) = -3x^2 + 12x - 7$ a pour abscisse :',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule de l\'abscisse du sommet : $x_s = -\\dfrac{b}{2a}$.<br/><br/>$x_s = -\\dfrac{12}{2 \\times (-3)} = -\\dfrac{12}{-6} = 2$. Comme $a = -3 < 0$, ce sommet correspond à un <strong>maximum</strong>.'
        }
      ]
    }
  });
