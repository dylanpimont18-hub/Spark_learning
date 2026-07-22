/* =========================================================
   Spark Learning – data/lycee-1re/1re-polynomes-signe.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-polynomes-signe',
    level: 2, subject: 'maths',
    icon: '📉',
    title: 'Signe d\'un trinôme du second degré',
    subtitle: 'Tableau de signe, inéquations du second degré',
    keywords: ['Trinôme', 'Tableau de signe', 'Inéquation', 'Second degré'],
    physics: false,
    cours: {
      intro: 'Le signe d\'un trinôme est entièrement déterminé par deux éléments : le <strong>coefficient $a$</strong> et le <strong>discriminant $\\Delta$</strong>.<br/><br/>L\'intuition géométrique : si $a > 0$, la parabole "sourit" (ouverte vers le haut) — elle est positive aux extrémités et négative dans le creux entre ses racines. Si $a < 0$, la parabole est renversée : positive entre ses racines, négative à l\'extérieur.<br/><br/>C\'est le piège le plus fréquent : les élèves appliquent systématiquement la règle "négatif entre les racines" sans vérifier le <strong>signe de $a$</strong>.<br/><br/>Si $\\Delta < 0$, la parabole ne coupe jamais l\'axe des abscisses : son signe est constant, égal au signe de $a$ sur tout $\\mathbb{R}$.',
      definitions: [
        { term: 'Signe d\'un trinôme', def: 'Le <strong>signe</strong> d\'un trinôme $ax^2 + bx + c$ sur un intervalle indique où l\'expression est positive, négative ou nulle. Il dépend de $a$ et $\\Delta$.' },
        { term: 'Tableau de signe', def: 'Le <strong>tableau de signe</strong> résume les intervalles où le trinôme est positif, négatif ou nul. Les racines (si elles existent) sont les seuls changements de signe.' },
        { term: 'Inéquation du second degré', def: 'Résoudre une <strong>inéquation</strong> $ax^2 + bx + c > 0$ (ou $< 0$, $\\geq 0$, $\\leq 0$) revient à lire les intervalles dans le tableau de signe.' },
        { term: 'Signe de $a$', def: 'Le coefficient $a$ détermine l\'<strong>orientation</strong> de la parabole : si $a > 0$ (parabole vers le haut), le trinôme est du signe de $a$ <strong>à l\'extérieur</strong> des racines ; si $a < 0$, c\'est l\'inverse.' }
      ],
      method: {
        title: 'Établir le tableau de signe',
        steps: [
          '<strong>Calculer le discriminant</strong> $\\Delta$ et les racines éventuelles $x_1 < x_2$.',
          '<strong>Si $\\Delta < 0$</strong> : le signe est celui de $a$ sur $\\mathbb{R}$ entier.',
          '<strong>Si $\\Delta = 0$</strong> : le signe est celui de $a$, sauf en $x_0$ où il est nul.',
          '<strong>Si $\\Delta > 0$</strong> : le trinôme est de signe opposé à $a$ entre $x_1$ et $x_2$, et de même signe que $a$ en dehors.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-x^2 + 4x - 3 \\geq 0$.',
        steps: [
          'On identifie $a = -1$, $b = 4$, $c = -3$. Calcul : $\\Delta = 16 - 12 = 4 > 0$.',
          'Racines : $x_1 = \\dfrac{-4 + 2}{-2} = 1$ et $x_2 = \\dfrac{-4 - 2}{-2} = 3$.',
          '$a = -1 < 0$ : le trinôme est <strong>positif entre les racines</strong>. Donc $-x^2 + 4x - 3 \\geq 0$ pour $x \\in [1\\,;\\,3]$.'
        ],
        answer: 'L\'ensemble solution est $[1\\,;\\,3]$. Attention : $a < 0$ inverse la règle habituelle !'
      },
      formulas: [
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c < 0 \\Leftrightarrow x_1 < x < x_2$',
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c > 0 \\Leftrightarrow x < x_1$ ou $x > x_2$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Deux paraboles, deux signes',
        title: 'Comparer le signe d\'un trinôme selon $a>0$ ou $a<0$',
        description: 'À gauche, $f(x)=x^2-x-6$ ($a=1>0$) : la parabole "sourit", elle est négative entre ses racines. À droite, $g(x)=-x^2+4x-3$ ($a=-1<0$, l\'exemple du cours) : la parabole est renversée, elle est positive entre ses racines.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="poly-signe-title poly-signe-desc">
            <title id="poly-signe-title">Signe de deux trinômes selon le signe de a</title>
            <desc id="poly-signe-desc">Deux paraboles cote a cote. A gauche a=1 positif, courbe vers le haut, negative entre les racines -2 et 3. A droite a=-1 negatif, courbe vers le bas, positive entre les racines 1 et 3. Les zones de signe positif sont teintees en vert, les zones negatives en rouge.</desc>

            <!-- grilles verticales panneau A -->
            <line class="grid-line" x1="40.0" y1="20" x2="40.0" y2="230"></line>
            <line class="grid-line" x1="59.4" y1="20" x2="59.4" y2="230"></line>
            <line class="grid-line" x1="78.9" y1="20" x2="78.9" y2="230"></line>
            <line class="grid-line" x1="98.3" y1="20" x2="98.3" y2="230"></line>
            <line class="grid-line" x1="117.8" y1="20" x2="117.8" y2="230"></line>
            <line class="grid-line" x1="137.2" y1="20" x2="137.2" y2="230"></line>
            <line class="grid-line" x1="156.7" y1="20" x2="156.7" y2="230"></line>
            <line class="grid-line" x1="176.1" y1="20" x2="176.1" y2="230"></line>
            <line class="grid-line" x1="195.6" y1="20" x2="195.6" y2="230"></line>
            <line class="grid-line" x1="215.0" y1="20" x2="215.0" y2="230"></line>

            <!-- grilles verticales panneau B -->
            <line class="grid-line" x1="245.0" y1="20" x2="245.0" y2="230"></line>
            <line class="grid-line" x1="274.2" y1="20" x2="274.2" y2="230"></line>
            <line class="grid-line" x1="303.3" y1="20" x2="303.3" y2="230"></line>
            <line class="grid-line" x1="332.5" y1="20" x2="332.5" y2="230"></line>
            <line class="grid-line" x1="361.7" y1="20" x2="361.7" y2="230"></line>
            <line class="grid-line" x1="390.8" y1="20" x2="390.8" y2="230"></line>
            <line class="grid-line" x1="420.0" y1="20" x2="420.0" y2="230"></line>

            <!-- zones de signe panneau A : f(x) = x^2 - x - 6, racines -2 et 3 -->
            <polygon points="40.0,37.5 44.9,56.6 49.7,74.7 54.6,91.6 59.4,107.5 64.3,122.3 69.2,135.9 74.0,148.5 78.9,160.0 40.0,160.0" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>
            <polygon points="78.9,160.0 83.8,170.4 88.6,179.7 93.5,187.9 98.3,195.0 103.2,201.0 108.1,205.9 112.9,209.8 117.8,212.5 122.6,214.1 127.5,214.7 132.4,214.1 137.2,212.5 142.1,209.8 146.9,205.9 151.8,201.0 156.7,195.0 161.5,187.9 166.4,179.7 171.2,170.4 176.1,160.0" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>
            <polygon points="176.1,160.0 181.0,148.5 185.8,135.9 190.7,122.3 195.6,107.5 200.4,91.6 205.3,74.7 210.1,56.6 215.0,37.5 215.0,160.0" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>

            <!-- zones de signe panneau B : g(x) = -x^2 + 4x - 3, racines 1 et 3 -->
            <polygon points="245.0,212.5 252.3,187.3 259.6,164.4 266.9,143.6 274.2,125.0 281.5,108.6 288.8,94.4 296.0,82.3 303.3,72.5 245.0,72.5" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>
            <polygon points="303.3,72.5 310.6,64.8 317.9,59.4 325.2,56.1 332.5,55.0 339.8,56.1 347.1,59.4 354.4,64.8 361.7,72.5" fill="color-mix(in srgb, var(--success) 20%, transparent)" stroke="none"></polygon>
            <polygon points="361.7,72.5 369.0,82.3 376.2,94.4 383.5,108.6 390.8,125.0 398.1,143.6 405.4,164.4 412.7,187.3 420.0,212.5 420.0,72.5" fill="color-mix(in srgb, var(--error) 20%, transparent)" stroke="none"></polygon>

            <!-- axes panneau A -->
            <line class="axis" x1="33" y1="160.0" x2="222" y2="160.0"></line>
            <line class="axis" x1="117.8" y1="12" x2="117.8" y2="238"></line>
            <!-- axes panneau B -->
            <line class="axis" x1="238" y1="72.5" x2="427" y2="72.5"></line>
            <line class="axis" x1="274.2" y1="12" x2="274.2" y2="238"></line>

            <!-- courbes -->
            <polyline class="curve-main" points="40.0,37.5 44.9,56.6 49.7,74.7 54.6,91.6 59.4,107.5 64.3,122.3 69.2,135.9 74.0,148.5 78.9,160.0 83.8,170.4 88.6,179.7 93.5,187.9 98.3,195.0 103.2,201.0 108.1,205.9 112.9,209.8 117.8,212.5 122.6,214.1 127.5,214.7 132.4,214.1 137.2,212.5 142.1,209.8 146.9,205.9 151.8,201.0 156.7,195.0 161.5,187.9 166.4,179.7 171.2,170.4 176.1,160.0 181.0,148.5 185.8,135.9 190.7,122.3 195.6,107.5 200.4,91.6 205.3,74.7 210.1,56.6 215.0,37.5"></polyline>
            <polyline class="curve-main" points="245.0,212.5 252.3,187.3 259.6,164.4 266.9,143.6 274.2,125.0 281.5,108.6 288.8,94.4 296.0,82.3 303.3,72.5 310.6,64.8 317.9,59.4 325.2,56.1 332.5,55.0 339.8,56.1 347.1,59.4 354.4,64.8 361.7,72.5 369.0,82.3 376.2,94.4 383.5,108.6 390.8,125.0 398.1,143.6 405.4,164.4 412.7,187.3 420.0,212.5"></polyline>

            <!-- racines et sommets -->
            <circle class="plot-point" cx="78.9" cy="160.0" r="5"></circle>
            <circle class="plot-point" cx="176.1" cy="160.0" r="5"></circle>
            <circle class="plot-point-alt" cx="127.5" cy="214.7" r="5"></circle>
            <circle class="plot-point" cx="303.3" cy="72.5" r="5"></circle>
            <circle class="plot-point" cx="361.7" cy="72.5" r="5"></circle>
            <circle class="plot-point-alt" cx="332.5" cy="55.0" r="5"></circle>

            <!-- etiquettes panneau A -->
            <text class="annotation-label" x="127.5" y="14" text-anchor="middle">f(x) = x² − x − 6 (a = 1 &gt; 0)</text>
            <text class="tick-label" x="40.0" y="176" text-anchor="middle">-4</text>
            <text class="tick-label" x="117.8" y="176" text-anchor="middle">0</text>
            <text class="tick-label" x="215.0" y="176" text-anchor="middle">5</text>
            <text class="annotation-label" x="78.9" y="146" text-anchor="middle">x₁ = -2</text>
            <text class="annotation-label" x="176.1" y="146" text-anchor="middle">x₂ = 3</text>
            <text class="tick-label" x="127.5" y="228" text-anchor="middle">S(0,5 ; -6,25)</text>
            <text class="label-soft" x="59.4" y="140">+</text>
            <text class="label-soft" x="127.5" y="196">−</text>
            <text class="label-soft" x="195.6" y="130">+</text>
            <text class="axis-label" x="224" y="164">x</text>
            <text class="axis-label" x="121" y="18">y</text>

            <!-- etiquettes panneau B -->
            <text class="annotation-label" x="332.5" y="14" text-anchor="middle">g(x) = -x² + 4x − 3 (a = -1 &lt; 0)</text>
            <text class="tick-label" x="245.0" y="88" text-anchor="middle">-1</text>
            <text class="tick-label" x="274.2" y="88" text-anchor="middle">0</text>
            <text class="tick-label" x="420.0" y="88" text-anchor="middle">5</text>
            <text class="annotation-label" x="303.3" y="58" text-anchor="middle">x₁ = 1</text>
            <text class="annotation-label" x="361.7" y="58" text-anchor="middle">x₂ = 3</text>
            <text class="tick-label" x="332.5" y="228" text-anchor="middle">S(2 ; 1)</text>
            <text class="label-soft" x="274.2" y="105">−</text>
            <text class="label-soft" x="332.5" y="65">+</text>
            <text class="label-soft" x="390.8" y="115">−</text>
            <text class="axis-label" x="429" y="76.5">x</text>
            <text class="axis-label" x="278" y="18">y</text>
          </svg>
        `,
        notes: [
          'Panneau gauche ($a=1>0$) : la parabole "sourit" vers le haut. Elle est <strong>négative entre les racines</strong> ($-2 < x < 3$, zone rouge) et <strong>positive à l\'extérieur</strong> (zones vertes).',
          'Panneau droit ($a=-1<0$, exemple du cours) : la parabole est renversée. Elle est <strong>positive entre les racines</strong> ($1 < x < 3$, zone verte) et <strong>négative à l\'extérieur</strong> (zones rouges).',
          'Dans les deux cas, le sommet $S$ (point le plus bas ou le plus haut) marque l\'axe de symétrie de la parabole, à mi-chemin entre les deux racines.'
        ],
        reading: 'Repère d\'abord l\'orientation de la parabole (signe de $a$), puis lis directement la couleur des zones : vert = positif, rouge = négatif. Le changement de couleur se produit exactement aux racines.',
        caption: 'Comparaison des deux cas $a>0$ et $a<0$ pour un même type de trinôme, avec zones de signe coloriées.'
      },
      recap: [
        '<strong>Première étape</strong> : toujours identifier le signe de $a$ (orientation de la parabole).',
        '$\\Delta > 0$ : le signe change aux racines. $\\Delta = 0$ : nul au sommet. $\\Delta < 0$ : signe constant (celui de $a$).',
        'Si $a > 0$ : le trinôme est négatif <strong>entre</strong> les racines. Si $a < 0$ : il est positif <strong>entre</strong> les racines.',
        'Pour une inéquation, d\'abord le tableau de signe, ensuite la lecture des intervalles solutions.'
      ],
      piege: 'Si $a < 0$, les inégalités sont <strong>inversées</strong> ! Le trinôme est alors positif entre les racines et négatif à l\'extérieur.<br/><br/>Toujours commencer par vérifier le signe de $a$ avant de dresser le tableau de signe.'
    },
    quiz: [
      { q: 'Le trinôme $-x^2+5x-6$ a pour racines $x_1=2$ et $x_2=3$. Un élève dit : "il est négatif pour $2<x<3$." Quelle est son erreur ?', options: ['Il a oublié que $a=-1<0$ : le trinôme est POSITIF entre les racines ($2<x<3$) et NÉGATIF à l\'extérieur', 'L\'élève a raison, tout trinôme est négatif entre ses racines', 'Les racines sont incorrectes, il faudrait $x_1=-3$ et $x_2=-2$', 'On ne peut pas déterminer le signe sans calculer le discriminant d\'abord'], answer: 0, correction: 'La règle "négatif entre les racines" ne s\'applique qu\'à condition que $a > 0$.<br/><br/>Ici $a = -1 < 0$ : la parabole est renversée, donc le trinôme est <strong>positif</strong> entre les racines ($2 < x < 3$) et <strong>négatif</strong> à l\'extérieur ($x < 2$ ou $x > 3$).<br/><br/>Retiens : toujours commencer par vérifier le signe de $a$ !' },
      { q: 'Si $\\Delta<0$ et $a>0$, le trinôme est :', options: ['Toujours négatif', 'Toujours positif', 'Nul partout', 'Tantôt positif, tantôt négatif'], answer: 1, correction: '$\\Delta < 0$ signifie que la parabole ne coupe pas l\'axe des abscisses : il n\'y a pas de racine réelle.<br/><br/>Comme $a > 0$, le trinôme est du signe de $a$, donc <strong>toujours positif</strong> sur $\\mathbb{R}$.' },
      { q: 'Résoudre $x^2-x-6>0$ (racines $-2$ et $3$, $a=1>0$) :', options: ['$]-2;3[$', '$]-\\infty;-2[\\cup]3;+\\infty[$', '$x>3$', '$x<-2$'], answer: 1, correction: 'Comme $a = 1 > 0$, le trinôme est du signe de $a$ à l\'extérieur des racines, c\'est-à-dire <strong>positif</strong>.<br/><br/>L\'ensemble solution de $x^2 - x - 6 > 0$ est donc $x < -2$ ou $x > 3$, soit $]-\\infty\\,;\\,-2[ \\cup ]3\\,;\\,+\\infty[$.' },
      { q: 'Le trinôme $x^2 + x + 1$ est :', options: ['Toujours positif car $\\Delta = -3 < 0$ et $a = 1 > 0$', 'Toujours négatif', 'Positif uniquement pour $x > 0$', 'Nul en $x = -1$'], answer: 0, correction: 'On calcule $\\Delta = 1 - 4 = -3 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$, c\'est-à-dire <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$.' },
      { q: 'L\'ensemble solution de $-2x^2 + 6x - 4 \\leq 0$ (racines $1$ et $2$) est :', options: ['$[1\\,;\\,2]$', '$]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$', '$\\mathbb{R}$', '$\\emptyset$'], answer: 1, correction: 'On identifie $a = -2 < 0$ : la parabole est retournée.<br/><br/>Le trinôme est <strong>positif entre les racines</strong> ($[1\\,;\\,2]$) et <strong>négatif à l\'extérieur</strong>.<br/><br/>Donc $-2x^2 + 6x - 4 \\leq 0$ pour $x \\in ]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(-4, 0), r2 = rand(1, 5);
        const aSign = pick([1, -1]);
        const a = aSign;
        const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
        const delta = bCoef * bCoef - 4 * a * cCoef;
        const ctx = pick([
          { intro: 'La concentration d\'un produit chimique est modélisée par $C(x) = ', question: 'Pour quelles valeurs de $x$ la concentration est-elle positive ?' },
          { intro: 'Le profit d\'une entreprise est $P(x) = ', question: 'Pour quelles valeurs de $x$ le profit est-il positif ?' },
          { intro: 'On considère le trinôme $f(x) = ', question: 'Résoudre $f(x) > 0$.' }
        ]);
        const borneGauche = a > 0 ? r1 : r2;
        const signeInfo = a > 0 ? `$a = ${a} > 0$ : positif à l'extérieur des racines, négatif entre.` : `$a = ${a} < 0$ : positif entre les racines, négatif à l'extérieur.`;
        const reponse = a > 0 ? r2 : r1;
        return {
          statement: `${ctx.intro}${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${bCoef >= 0 ? '+' + bCoef : bCoef}x ${cCoef >= 0 ? '+' + cCoef : cCoef}$.<br/><br/>Les racines sont $x_1 = ${r1}$ et $x_2 = ${r2}$.<br/><br/>1) Identifier le signe de $a$.<br/>2) Dresser le tableau de signe.<br/>3) ${ctx.question}<br/><br/>Donner la borne ${a > 0 ? 'droite' : 'gauche'} de l'intervalle où le trinôme est positif (la plus ${a > 0 ? 'petite' : 'grande'}).`,
          answer: reponse,
          tolerance: 0,
          unit: '',
          hint: `${signeInfo} Les racines sont $${r1}$ et $${r2}$.`,
          solution: [
            `${signeInfo}`,
            `${a > 0 ? 'Positif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$ ; négatif pour $' + r1 + ' < x < ' + r2 + '$.' : 'Positif pour $' + r1 + ' < x < ' + r2 + '$ ; négatif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$.'}`,
            `Borne demandée : $${reponse}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Le bénéfice d\'une entreprise (en milliers d\'euros) est modélisé par $B(x)=-x^2+6x-5$ où $x$ est le nombre de produits (en centaines) vendus.',
      tasks: [
        'Calculer les racines de $B(x)=0$.',
        'Sur quel intervalle le bénéfice est-il positif ?',
        'Quel nombre de produits maximise le bénéfice, et quelle est cette valeur maximale ?'
      ],
      solutions: [
        '$\\Delta=36-20=16$. $x_1=\\frac{-6+4}{-2}=1$ ; $x_2=\\frac{-6-4}{-2}=5$.',
        '$a=-1<0$ : $B(x)>0$ entre les racines, soit pour $1<x<5$ (100 à 500 produits).',
        'Sommet en $x_s=-b/(2a)=-6/(-2)=3$. $B(3)=-9+18-5=4$ (soit $4000$ €).'
      ],
      finalAnswer: 'Bénéfice positif pour $x\\in]1;5[$. Maximum $4000$ € pour $300$ produits.'
    },

    evaluation: {
      title: 'Évaluation — Signe d\'un trinôme',
      duration: '30 min',
      questions: [
        {
          statement: 'Le trinôme $f(x) = x^2 - 4x - 5$ a pour racines $x_1 = -1$ et $x_2 = 5$. Sur quel intervalle $f(x) < 0$ ?',
          type: 'multiple-choice',
          options: ['$]-\\infty\\,;\\,-1[ \\cup ]5\\,;\\,+\\infty[$', '$]-1\\,;\\,5[$', '$]0\\,;\\,5[$', '$]-5\\,;\\,1[$'],
          answer: 1,
          points: 2,
          correction: 'On identifie $a = 1 > 0$ : la parabole est orientée vers le haut.<br/><br/>Le trinôme est donc <strong>négatif entre les racines</strong>. Ainsi $f(x) < 0$ pour $x \\in ]-1\\,;\\,5[$.'
        },
        {
          statement: 'Le trinôme $g(x) = -2x^2 + 8x - 6$ a pour racines $1$ et $3$. Pour quelles valeurs de $x$ a-t-on $g(x) > 0$ ?',
          type: 'multiple-choice',
          options: ['$x < 1$ ou $x > 3$', '$1 < x < 3$', '$x > 3$', '$x < 1$'],
          answer: 1,
          points: 2,
          correction: 'On note $a = -2 < 0$ : la parabole est retournée (ouverte vers le bas).<br/><br/>Le trinôme est donc <strong>positif entre les racines</strong>. Ainsi $g(x) > 0$ pour $x \\in ]1\\,;\\,3[$.'
        },
        {
          statement: 'Résoudre l\'inéquation $x^2 + 3x + 5 > 0$. Quel est l\'ensemble solution ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$ (toujours vrai)', 'Ensemble vide', '$]-\\infty\\,;\\,-1[$', '$]0\\,;\\,+\\infty[$'],
          answer: 0,
          points: 2,
          correction: 'On calcule $\\Delta = 9 - 20 = -11 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$ partout, donc <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$. L\'ensemble solution est $\\mathbb{R}$ entier.'
        },
        {
          statement: 'Les racines de $2x^2 - 10x + 12 = 0$ sont $x_1 = 2$ et $x_2 = 3$. Calculer $\\Delta$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du discriminant : $\\Delta = (-10)^2 - 4 \\times 2 \\times 12 = 100 - 96 = 4$.<br/><br/>$\\Delta > 0$ confirme bien l\'existence de deux racines réelles distinctes.'
        },
        {
          statement: 'On sait que $-x^2 + 6x - 9 \\leq 0$ pour tout $x$. Quelle est la valeur de $x$ pour laquelle $-x^2 + 6x - 9 = 0$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 36 = 0$ : il y a une <strong>solution double</strong>.<br/><br/>$x_0 = \\dfrac{-6}{2 \\times (-1)} = 3$.<br/><br/>Puisque $a = -1 < 0$ et $\\Delta = 0$, le trinôme est $\\leq 0$ partout, et nul uniquement en $x = 3$.'
        }
      ]
    }
  });
