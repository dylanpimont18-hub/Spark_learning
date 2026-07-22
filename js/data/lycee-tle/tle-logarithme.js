/* =========================================================
   Spark Learning – data/lycee-tle/tle-logarithme.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-logarithme',
    level: 2, subject: 'maths',
    icon: '🌿',
    title: 'Fonction logarithme népérien',
    subtitle: 'Propriétés, dérivée, étude de fonctions',
    keywords: ['Logarithme', 'ln', 'Propriétés', 'Dérivée', 'Croissances comparées'],
    physics: 'Échelle des décibels en acoustique, pH en chimie, magnitude sismique (échelle de Richter)',
    cours: {
      intro: 'Le <strong>logarithme</strong> $\\ln$ est la fonction réciproque de l\'exponentielle : $\\ln(e^x) = x$ et $e^{\\ln x} = x$ pour $x > 0$.<br/><br/>Intuitivement, $\\ln(x)$ est l\'exposant qu\'il faut donner à $e$ pour obtenir $x$. Sa dérivée $1/x$ en fait un outil clé en physique (résolution des équations différentielles, calcul de temps de demi-vie).<br/><br/>Les règles algébriques s\'appliquent aux <strong>PRODUITS et QUOTIENTS</strong> : $\\ln(ab) = \\ln a + \\ln b$ — mais PAS aux sommes ! $\\ln(a+b) \\neq \\ln a + \\ln b$ est l\'erreur la plus fréquente.<br/><br/>Les <strong>croissances comparées</strong> montrent que $\\ln x$ tend vers $+\\infty$ mais infiniment plus lentement que $x$ : $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0$.',
      definitions: [
        { term: 'Logarithme népérien $\\ln$', def: 'Fonction réciproque de $\\exp$, définie sur $]0;+\\infty[$. $\\ln(1) = 0$, $\\ln(e) = 1$. C\'est la seule primitive de $\\dfrac{1}{x}$ s\'annulant en $1$.' },
        { term: 'Croissances comparées', def: 'En $+\\infty$ : $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^\\alpha} = 0$ pour tout $\\alpha > 0$. Le logarithme croît <strong>infiniment plus lentement</strong> que toute puissance positive.' },
        { term: 'Équation $\\ln(x) = k$', def: 'Cette équation a une unique solution $x = e^k$ pour tout $k \\in \\mathbb{R}$. Plus généralement, $\\ln(f(x)) = k \\Leftrightarrow f(x) = e^k$ (avec $f(x) > 0$).' },
        { term: 'Dérivée logarithmique', def: '$(\\ln u)\' = \\dfrac{u\'}{u}$ pour $u > 0$. Technique utile pour dériver des produits complexes en prenant le logarithme des deux côtés.' }
      ],
      method: {
        title: 'Utiliser les propriétés de ln',
        steps: [
          '<strong>Somme de ln</strong> : $\\ln(ab) = \\ln a + \\ln b$ pour $a,b>0$.',
          '<strong>Différence de ln</strong> : $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$.',
          '<strong>Puissance et ln</strong> : $\\ln(a^n) = n\\ln a$.',
          '<strong>Dérivée de ln</strong> : $(\\ln x)\'=\\frac{1}{x}$ ; généralement $(\\ln u)\'=\\frac{u\'}{u}$.'
        ]
      },
      example: {
        statement: 'Résoudre l\'équation $\\ln(2x - 1) + \\ln(x) = \\ln(3)$ dans $\\mathbb{R}$.',
        steps: [
          'Conditions d\'existence : $2x - 1 > 0$ et $x > 0$, donc $x > \\dfrac{1}{2}$.',
          'On utilise $\\ln a + \\ln b = \\ln(ab)$ : $\\ln(x(2x-1)) = \\ln(3)$.',
          'Par injectivité de $\\ln$ : $x(2x-1) = 3$, soit $2x^2 - x - 3 = 0$.',
          'Discriminant : $\\Delta = 1 + 24 = 25$, donc $x = \\dfrac{1 \\pm 5}{4}$.',
          '$x_1 = \\dfrac{6}{4} = \\dfrac{3}{2} = 1{,}5$ ou $x_2 = \\dfrac{-4}{4} = -1$ (rejeté car $x > 0{,}5$).'
        ],
        answer: '$S = \\left\\{\\dfrac{3}{2}\\right\\}$. Vérification : $\\ln(2) + \\ln(1{,}5) = \\ln(3)$ ✓ car $2 \\times 1{,}5 = 3$.'
      },
      formulas: [
        '$\\ln(ab)=\\ln a+\\ln b$',
        '$\\ln(a/b)=\\ln a-\\ln b$',
        '$(\\ln x)\'=\\dfrac{1}{x}$',
        '$\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$ (croissances comparées)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Croissances comparées',
        title: '$\\ln(x)$ contre $\\sqrt{x}$ : qui domine à l\'infini ?',
        description: 'Les deux courbes sont calculées point par point de $x=0{,}2$ à $x=25$. Le logarithme reste toujours en dessous de la racine carrée, et l\'écart entre les deux se creuse continuellement — la traduction graphique de $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}=0$.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="log-croissances-title log-croissances-desc">
            <title id="log-croissances-title">Comparaison des courbes de ln(x) et racine de x</title>
            <desc id="log-croissances-desc">Deux courbes tracees de x=0,2 a x=25 sur le meme repere. La courbe pleine est ln(x), qui vaut 0 en x=1 et atteint environ 3,22 en x=25. La courbe pointillee est racine de x, qui vaut 1 en x=1 et 5 en x=25. La courbe pointillee reste toujours au-dessus de la courbe pleine et l'ecart entre les deux augmente a mesure que x grandit.</desc>

            <defs>
              <marker id="arrow-tle-logarithme" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- légende -->
            <line class="curve-main" x1="60" y1="16" x2="90" y2="16"></line>
            <text class="annotation-label" x="96" y="20">ln(x)</text>
            <line x1="150" y1="16" x2="180" y2="16" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>
            <text class="annotation-label" x="186" y="20">√x</text>

            <!-- grille verticale (x = 5,10,15,20,25) -->
            <line class="grid-line" x1="118.0" y1="45" x2="118.0" y2="255"></line>
            <line class="grid-line" x1="181.0" y1="45" x2="181.0" y2="255"></line>
            <line class="grid-line" x1="244.0" y1="45" x2="244.0" y2="255"></line>
            <line class="grid-line" x1="307.0" y1="45" x2="307.0" y2="255"></line>
            <line class="grid-line" x1="370.0" y1="45" x2="370.0" y2="255"></line>

            <!-- grille horizontale (y = -1,1,2,3,4,5) -->
            <line class="grid-line" x1="55" y1="227.0" x2="370" y2="227.0"></line>
            <line class="grid-line" x1="55" y1="171.0" x2="370" y2="171.0"></line>
            <line class="grid-line" x1="55" y1="143.0" x2="370" y2="143.0"></line>
            <line class="grid-line" x1="55" y1="115.0" x2="370" y2="115.0"></line>
            <line class="grid-line" x1="55" y1="87.0" x2="370" y2="87.0"></line>
            <line class="grid-line" x1="55" y1="59.0" x2="370" y2="59.0"></line>

            <!-- axes -->
            <line class="axis" x1="50" y1="199.0" x2="382" y2="199.0" marker-end="url(#arrow-tle-logarithme)"></line>
            <line class="axis" x1="55" y1="255" x2="55" y2="40" marker-end="url(#arrow-tle-logarithme)"></line>
            <text class="axis-label" x="376" y="192">x</text>
            <text class="axis-label" x="62" y="46">y</text>

            <!-- graduations x -->
            <text class="tick-label" x="67.6" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="118.0" y="212" text-anchor="middle">5</text>
            <text class="tick-label" x="181.0" y="212" text-anchor="middle">10</text>
            <text class="tick-label" x="244.0" y="212" text-anchor="middle">15</text>
            <text class="tick-label" x="307.0" y="212" text-anchor="middle">20</text>
            <text class="tick-label" x="370.0" y="212" text-anchor="middle">25</text>

            <!-- graduations y -->
            <text class="tick-label" x="47" y="230.0" text-anchor="end">-1</text>
            <text class="tick-label" x="47" y="202.0" text-anchor="end">0</text>
            <text class="tick-label" x="47" y="174.0" text-anchor="end">1</text>
            <text class="tick-label" x="47" y="146.0" text-anchor="end">2</text>
            <text class="tick-label" x="47" y="118.0" text-anchor="end">3</text>
            <text class="tick-label" x="47" y="90.0" text-anchor="end">4</text>
            <text class="tick-label" x="47" y="62.0" text-anchor="end">5</text>

            <!-- courbe ln(x), calculee point par point de x=0,2 a x=25 -->
            <polyline class="curve-main" points="57.5,244.1 61.3,218.4 67.6,199.0 80.2,179.6 92.8,168.2 105.4,160.2 118.0,153.9 130.6,148.8 155.8,140.8 181.0,134.5 206.2,129.4 244.0,123.2 281.8,118.1 307.0,115.1 332.2,112.5 370.0,108.9"></polyline>

            <!-- courbe racine(x), calculee point par point de x=0,2 a x=25 -->
            <polyline fill="none" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round" stroke-linejoin="round" points="57.5,186.5 61.3,179.2 67.6,171.0 80.2,159.4 92.8,150.5 105.4,143.0 118.0,136.4 130.6,130.4 155.8,119.8 181.0,110.5 206.2,102.0 244.0,90.6 281.8,80.2 307.0,73.8 332.2,67.7 370.0,59.0"></polyline>

            <!-- points remarquables : x=1, x=4, x=25 -->
            <circle class="plot-point" cx="67.6" cy="199.0" r="4"></circle>
            <circle class="plot-point-alt" cx="67.6" cy="171.0" r="4"></circle>
            <circle class="plot-point" cx="105.4" cy="160.2" r="4"></circle>
            <circle class="plot-point-alt" cx="105.4" cy="143.0" r="4"></circle>
            <circle class="plot-point" cx="370.0" cy="108.9" r="5"></circle>
            <circle class="plot-point-alt" cx="370.0" cy="59.0" r="5"></circle>

            <!-- écart visualisé en x=25 -->
            <line class="guide-line" x1="370.0" y1="108.9" x2="370.0" y2="59.0"></line>
            <text class="annotation-label" x="315" y="80" text-anchor="end">écart croissant</text>

            <text class="tick-label" x="378" y="112">ln(25)≈3,22</text>
            <text class="tick-label" x="378" y="60">√25=5</text>
          </svg>
        `,
        notes: [
          'En $x=1$ : $\\ln(1)=0$ tandis que $\\sqrt{1}=1$ — la racine carrée est déjà au-dessus.',
          'En $x=4$ : $\\ln(4)\\approx1{,}39$ contre $\\sqrt{4}=2$ — l\'écart reste modeste.',
          'En $x=25$ : $\\ln(25)\\approx3{,}22$ contre $\\sqrt{25}=5$ — l\'écart a presque doublé, alors que $x$ a été multiplié par $6{,}25$.'
        ],
        reading: 'Suis les deux courbes de gauche à droite : la courbe pointillée ($\\sqrt{x}$) s\'échappe vers le haut, tandis que la courbe pleine ($\\ln x$) progresse à peine — c\'est la traduction graphique de la croissance comparée $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}=0$.',
        caption: 'Comparaison des courbes de $\\ln(x)$ et $\\sqrt{x}$ sur $[0{,}2\\,;\\,25]$, points calculés analytiquement.'
      },
      recap: [
        '$\\ln$ est la réciproque de $\\exp$ : $\\ln(e^x) = x$ et $e^{\\ln x} = x$ (pour $x > 0$). $\\ln(1) = 0$, $\\ln(e) = 1$.',
        'Règles algébriques : $\\ln(ab) = \\ln a + \\ln b$, $\\ln(a/b) = \\ln a - \\ln b$, $\\ln(a^n) = n\\ln a$. JAMAIS pour la somme : $\\ln(a+b) \\neq \\ln a + \\ln b$.',
        'Croissances comparées : $\\ln x$ croît plus lentement que toute puissance $x^\\alpha$ ($\\alpha > 0$). Utile pour les limites de la forme $x^n \\ln x$.',
        'Pour résoudre $\\ln(f(x)) = k$ : vérifier les conditions d\'existence ($f(x) > 0$), puis $f(x) = e^k$.'
      ],
      piege: '$\\ln(a+b) \\ne \\ln a + \\ln b$ : la formule s\'applique au <strong>produit</strong>, pas à la somme !<br/><br/>Contre-exemple : $\\ln(1+1) = \\ln 2 \\approx 0{,}693$ mais $\\ln 1 + \\ln 1 = 0 + 0 = 0$.'
    },
    quiz: [
      { q: 'Un élève simplifie $\\ln(5+e)$ en écrivant : "$\\ln(5+e)=\\ln 5+\\ln e=\\ln 5+1$". Quelle est son erreur ?', options: ['La formule $\\ln(ab)=\\ln a+\\ln b$ s\'applique au PRODUIT, pas à la somme. $\\ln(5+e)$ ne se simplifie pas davantage', 'L\'élève a raison : $\\ln(a+b)=\\ln a+\\ln b$', 'L\'erreur est d\'écrire $\\ln e=1$ ; il faut écrire $\\ln e=e$', '$\\ln(5+e)=\\ln 5\\times\\ln e=\\ln 5$'], answer: 0, correction: '$\\ln(ab)=\\ln a+\\ln b$ s\'applique au <strong>PRODUIT</strong> : $\\ln(5\\times e)=\\ln 5+\\ln e=\\ln 5+1$.<br/><br/>Mais $\\ln(5+e)$ est une <strong>SOMME</strong> à l\'intérieur du logarithme : il n\'existe aucune formule pour la décomposer.<br/><br/>L\'analogie : $(a+b)^2\\neq a^2+b^2$ — on ne peut pas "distribuer" les opérations à travers une somme.' },
      { q: 'Simplifier $\\ln 6 - \\ln 2$', options: ['$\\ln 4$', '$\\ln 3$', '$\\ln 12$', '$3$'], answer: 1, correction: 'On utilise la propriété $\\ln a - \\ln b = \\ln(a/b)$ :<br/><br/>$\\ln 6 - \\ln 2 = \\ln(6/2) = \\ln 3$.' },
      { q: 'Dériver $f(x)=\\ln(2x+1)$', options: ['$\\frac{1}{2x+1}$', '$\\frac{2}{2x+1}$', '$\\ln 2$', '$\\frac{1}{2}\\ln(2x+1)$'], answer: 1, correction: 'On applique $(\\ln u)\'=u\'/u$ avec $u=2x+1$ et $u\'=2$.<br/><br/>Donc $f\'=\\frac{2}{2x+1}$. L\'option A oublie de multiplier par la dérivée de l\'intérieur.' },
      { q: '$\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{\\sqrt{x}} = $ ?', options: ['$+\\infty$', '$1$', '$0$', '$\\ln 2$'], answer: 2, correction: 'C\'est un résultat de <strong>croissances comparées</strong> : $\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^\\alpha} = 0$ pour tout $\\alpha > 0$.<br/><br/>Ici $\\alpha = 1/2$, donc la limite vaut $0$. Le logarithme croît toujours moins vite que n\'importe quelle puissance positive.' },
      { q: 'Résoudre $\\ln(x^2) = 4$ :', options: ['$x = e^2$ uniquement', '$x = e^2$ ou $x = -e^2$', '$x = e^4$ uniquement', '$x = 2e$'], answer: 1, correction: '$\\ln(x^2) = 2\\ln|x| = 4$, donc $\\ln|x| = 2$, soit $|x| = e^2$.<br/><br/>Les deux solutions sont $x = e^2$ et $x = -e^2$.<br/><br/>Attention : $\\ln(x^2)$ est définie pour tout $x \\neq 0$, pas seulement $x > 0$, car $x^2 > 0$ dans les deux cas.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Le temps de doublement d\'une population de bactéries', k: rand(2, 8) / 10 },
          { intro: 'Le temps d\'amortissement d\'un signal électronique', k: rand(1, 5) / 10 },
          { intro: 'La durée de dégradation d\'un polluant chimique', k: rand(3, 9) / 10 },
          { intro: 'Le temps de refroidissement d\'un alliage en métallurgie', k: rand(2, 7) / 10 }
        ]);
        const kStr = ctx.k.toFixed(1).replace('.', '{,}');
        const answer = parseFloat((Math.log(2) / ctx.k).toFixed(2));
        return {
          statement: `${ctx.intro} suit le modèle $N(t) = N_0 e^{${kStr}t}$. Calculer le temps de doublement $t_d$ tel que $N(t_d) = 2N_0$. Arrondir à $0{,}01$.`,
          answer: answer,
          tolerance: 0.05,
          unit: '',
          hint: `On résout $e^{${kStr}t} = 2$, soit $${kStr}t = \\ln 2$, donc $t = \\dfrac{\\ln 2}{${kStr}}$.`,
          solution: [
            `$N(t_d) = 2N_0 \\Rightarrow N_0 e^{${kStr}t_d} = 2N_0 \\Rightarrow e^{${kStr}t_d} = 2$`,
            `$${kStr}t_d = \\ln 2 \\approx 0{,}693$`,
            `$t_d = \\dfrac{0{,}693}{${kStr}} \\approx ${answer}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une population bactérienne suit la loi $N(t)=N_0 e^{0{,}3t}$ où $t$ est en heures et $N_0=100$.',
      tasks: [
        'Calculer $N(10)$.',
        'Au bout de combien d\'heures la population double-t-elle ?',
        'Exprimer le temps de doublement avec $\\ln 2$.'
      ],
      solutions: [
        '$N(10)=100e^3\\approx100\\times20{,}09\\approx2009$ bactéries.',
        '$100e^{0{,}3t}=200 \\Rightarrow e^{0{,}3t}=2 \\Rightarrow 0{,}3t=\\ln 2 \\Rightarrow t=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.',
        '$t_{double}=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.'
      ],
      finalAnswer: 'La population double toutes les $\\frac{\\ln 2}{0{,}3}\\approx2{,}3$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Fonction logarithme népérien',
      duration: '30 min',
      questions: [
        {
          statement: 'Simplifier $\\ln(e^5)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\ln(e^5) = 5$ car $\\ln$ et $\\exp$ sont des fonctions <strong>réciproques</strong> : $\\ln(e^n) = n$ pour tout $n$.'
        },
        {
          statement: 'Simplifier $\\ln 12 - \\ln 4$.',
          type: 'multiple-choice',
          options: ['$\\ln 3$', '$\\ln 8$', '$\\ln 48$', '$3$'],
          answer: 0,
          points: 2,
          correction: 'Propriété du logarithme d\'un quotient :<br/><br/>$\\ln 12 - \\ln 4 = \\ln\\left(\\dfrac{12}{4}\\right) = \\ln 3$.'
        },
        {
          statement: 'Dériver $f(x) = \\ln(3x + 2)$ pour $x > -\\frac{2}{3}$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique $(\\ln u)\' = u\'/u$ avec $u = 3x+2$ et $u\' = 3$ :<br/><br/>$f\'(x) = \\dfrac{3}{3x+2}$. Donc $f\'(0) = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          statement: 'Un élève écrit $\\ln(a + b) = \\ln a + \\ln b$. Cette égalité est :',
          type: 'multiple-choice',
          options: ['Vraie pour tout $a, b > 0$', 'Fausse : la formule $\\ln a + \\ln b = \\ln(ab)$ s\'applique au produit, pas à la somme', 'Vraie seulement si $a = b$', 'Vraie si $a$ et $b$ sont entiers'],
          answer: 1,
          points: 2,
          correction: '$\\ln(ab) = \\ln a + \\ln b$ est la formule correcte (logarithme d\'un <strong>PRODUIT</strong>).<br/><br/>$\\ln(a+b)$ ne se simplifie pas en général.<br/><br/>Contre-exemple : $\\ln(1+1) = \\ln 2 \\approx 0{,}693$ mais $\\ln 1 + \\ln 1 = 0 + 0 = 0$.'
        },
        {
          statement: 'Résoudre $\\ln(x) = 3$. Donner la valeur de $x$ arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 20.09,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: 'On "passe à l\'exponentielle" des deux côtés :<br/><br/>$\\ln(x) = 3 \\Leftrightarrow x = e^3 \\approx 20{,}09$.'
        }
      ]
    }
  });
