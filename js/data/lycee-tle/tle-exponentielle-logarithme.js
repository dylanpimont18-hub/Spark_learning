/* =========================================================
   Spark Learning – data/lycee-tle/tle-exponentielle-logarithme.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-exponentielle-logarithme',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Fonctions Exponentielle et Logarithme',
    subtitle: 'pH, demi-vie radioactive, décroissance',
    keywords: ['Logarithme', 'pH', 'Exponentielle', 'Demi-vie'],
    physics: 'pH = −log[H₃O⁺], décroissance radioactive, décibels',

    cours: {
      intro: 'L\'<strong>exponentielle</strong> $e^x$ est l\'unique fonction égale à sa propre dérivée : $(e^x)\' = e^x$.<br/><br/>Cette propriété en fait l\'outil naturel pour tout phénomène dont la vitesse de variation est <strong>proportionnelle à la grandeur elle-même</strong> : croissance bactérienne, décroissance radioactive, charge de condensateur.<br/><br/>Le <strong>logarithme naturel</strong> $\\ln$ est l\'inverse de $e^x$ : $\\ln(e^x) = x$ et $e^{\\ln x} = x$.<br/><br/>Le logarithme DÉCIMAL $\\log = \\log_{10}$ est différent : $\\log(x) = \\ln(x)/\\ln(10) \\approx \\ln(x)/2{,}303$ — confondre $\\log$ et $\\ln$ est l\'erreur classique.<br/><br/>En chimie, $pH = -\\log_{10}[H_3O^+]$ : une solution de $pH = 4$ a $[H_3O^+] = 10^{-4}$ mol/L. Une unité de pH correspond à un facteur $10$ sur la concentration en ions.',
      definitions: [
        { term: 'Fonction exponentielle', def: 'Unique fonction $f$ définie sur $\\mathbb{R}$ telle que $f\' = f$ et $f(0) = 1$. On la note $\\exp$ ou $e^x$. Elle est strictement positive et strictement croissante sur $\\mathbb{R}$.' },
        { term: 'Logarithme népérien', def: 'Fonction réciproque de l\'exponentielle, définie sur $]0;+\\infty[$. Pour tout $x > 0$ : $\\ln(x) = y \\Leftrightarrow e^y = x$. Sa dérivée est $(\\ln x)\' = \\dfrac{1}{x}$.' },
        { term: 'Logarithme décimal', def: 'Logarithme en base $10$ : $\\log_{10}(x) = \\dfrac{\\ln x}{\\ln 10}$. Propriété clé : $\\log_{10}(10^n) = n$. Utilisé en chimie (pH) et en acoustique (décibels).' },
        { term: 'Demi-vie ($t_{1/2}$)', def: 'Durée au bout de laquelle la moitié d\'un échantillon radioactif s\'est désintégrée. Reliée à la constante de décroissance par $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$.' }
      ],
      method: {
        title: 'Propriétés essentielles',
        steps: [
          '<strong>Logarithme décimal et pH</strong> : $\\log(a \\times b) = \\log a + \\log b$ ; $\\log(10^n) = n$ ; $pH = -\\log[H_3O^+]$.',
          '<strong>Exponentielle naturelle</strong> : $(e^x)\' = e^x$ (unique égale à sa dérivée). Propriété : $e^{a+b} = e^a \\cdot e^b$.',
          '<strong>Croissance exponentielle</strong> : demi-vie après $k$ périodes : $m = m_0 \\times (1/2)^k$ ; continu : $m(t) = m_0 e^{-\\lambda t}$ où $\\lambda = \\ln 2 / t_{1/2}$.'
        ]
      },
      example: {
        statement: 'Le strontium 90 ($^{90}$Sr) a une demi-vie $t_{1/2} = 28{,}8$ ans. Un échantillon contient initialement $m_0 = 200$ mg. Quelle masse reste après $50$ ans ?',
        steps: [
          'On calcule la constante de décroissance : $\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}693}{28{,}8} \\approx 0{,}02407\\ \\text{an}^{-1}$.',
          'On applique la loi de décroissance : $m(t) = m_0 e^{-\\lambda t} = 200 \\times e^{-0{,}02407 \\times 50}$.',
          'On calcule l\'exposant : $-0{,}02407 \\times 50 = -1{,}2035$, donc $e^{-1{,}2035} \\approx 0{,}3005$.',
          '$m(50) = 200 \\times 0{,}3005 \\approx 60{,}1$ mg.'
        ],
        answer: 'Après $50$ ans, il reste environ $60{,}1$ mg sur les $200$ mg initiaux, soit $30\\%$ de l\'échantillon.'
      },
      formulas: [
        '$pH = -\\log[H_3O^+]$',
        '$[H_3O^+] = 10^{-pH}$',
        '$m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{t/t_{1/2}} = m_0 e^{-\\lambda t}$',
        '$\\log(10^n) = n$ ; $\\ln(e^n) = n$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Décroissance radioactive',
        title: '$m(t) = m_0 e^{-\\lambda t}$ avec $m_0 = 200$ mg et $t_{1/2} = 28{,}8$ ans (strontium 90, exemple du cours)',
        description: 'Tracé point par point de la masse restante de strontium 90 au cours du temps, avec les paliers de demi-vie ($t_{1/2}$, $2t_{1/2}$, $3t_{1/2}$) marqués et vérifiés par calcul.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="decay-graph-title decay-graph-desc">
            <title id="decay-graph-title">Decroissance radioactive du strontium 90</title>
            <desc id="decay-graph-desc">Courbe de la masse restante m(t) en fonction du temps pour le strontium 90, avec m0 = 200 mg et une demi-vie de 28,8 ans. Trois paliers de demi-vie sont marques : a 28,8 ans il reste 100 mg (la moitie), a 57,6 ans il reste 50 mg (le quart), a 86,4 ans il reste 25 mg (le huitieme). Le point a t = 50 ans, repris de l'exemple du cours, est egalement marque avec une masse restante d'environ 60 mg.</desc>

            <!-- grille -->
            <line class="grid-line" x1="60" y1="169.5" x2="440" y2="169.5"></line>
            <line class="grid-line" x1="60" y1="88.6" x2="440" y2="88.6"></line>
            <line class="grid-line" x1="186.7" y1="20" x2="186.7" y2="210"></line>
            <line class="grid-line" x1="313.3" y1="20" x2="313.3" y2="210"></line>

            <!-- axes -->
            <line class="axis" x1="60" y1="210" x2="460" y2="210"></line>
            <line class="axis" x1="60" y1="210" x2="60" y2="20"></line>

            <!-- valeur initiale m0 -->
            <line class="guide-line" x1="60" y1="48.1" x2="440" y2="48.1"></line>
            <text class="annotation-label" x="436" y="41" text-anchor="end">m0 = 200 mg</text>

            <!-- courbe m(t) = m0 * e^(-lambda t) -->
            <path class="curve-main" d="M60.0 48.1 L72.7 58.9 L85.3 69.1 L98.0 78.5 L110.7 87.3 L123.3 95.5 L136.0 103.2 L148.7 110.3 L161.3 117.0 L174.0 123.2 L186.7 129.0 L199.3 134.5 L212.0 139.5 L224.7 144.2 L237.3 148.6 L250.0 152.8 L262.7 156.6 L275.3 160.2 L288.0 163.5 L300.7 166.6 L313.3 169.5 L326.0 172.2 L338.7 174.8 L351.3 177.1 L364.0 179.3 L376.7 181.4 L389.3 183.3 L402.0 185.1 L414.7 186.8 L427.3 188.3 L440.0 189.8"></path>

            <!-- repere a 1 demi-vie : 100 mg -->
            <line class="guide-line" x1="186.7" y1="210" x2="186.7" y2="129.0"></line>
            <line class="guide-line" x1="60" y1="129.0" x2="186.7" y2="129.0"></line>
            <circle class="plot-point" cx="186.7" cy="129.0" r="5"></circle>
            <text class="annotation-label" x="191.7" y="124" text-anchor="start">100 mg (1/2)</text>

            <!-- repere a 2 demi-vies : 50 mg -->
            <line class="guide-line" x1="313.3" y1="210" x2="313.3" y2="169.5"></line>
            <circle class="plot-point-alt" cx="313.3" cy="169.5" r="5"></circle>
            <text class="annotation-label" x="318.3" y="150" text-anchor="start">50 mg (1/4)</text>

            <!-- repere a 3 demi-vies : 25 mg -->
            <circle class="plot-point-alt" cx="440" cy="189.8" r="4"></circle>
            <text class="annotation-label" x="435" y="206" text-anchor="end">25 mg (1/8)</text>

            <!-- point exemple t = 50 ans (repris de l'exemple du cours) -->
            <circle class="plot-point-alt" cx="279.9" cy="161.4" r="4"></circle>
            <text class="annotation-label" x="225" y="188" text-anchor="start">t = 50 ans</text>

            <!-- ticks x -->
            <text class="tick-label" x="60" y="228" text-anchor="middle">0</text>
            <text class="tick-label" x="186.7" y="228" text-anchor="middle">t½ = 28,8 ans</text>
            <text class="tick-label" x="313.3" y="228" text-anchor="middle">2t½ = 57,6 ans</text>
            <text class="tick-label" x="440" y="228" text-anchor="end">3t½ = 86,4 ans</text>
            <text class="axis-label" x="440" y="245" text-anchor="end">t (années)</text>

            <!-- ticks y -->
            <text class="tick-label" x="50" y="213" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="172.5" text-anchor="end">50</text>
            <text class="tick-label" x="50" y="91.6" text-anchor="end">150</text>
            <text class="axis-label" x="16" y="13" text-anchor="start">m (mg)</text>
          </svg>
        `,
        notes: [
          'À chaque demi-vie $t_{1/2}=28{,}8$ ans, la masse est divisée par $2$ : $200 \\to 100 \\to 50 \\to 25$ mg — c\'est la définition même de la demi-vie, vérifiée par $\\lambda = \\ln 2 / t_{1/2} \\approx 0{,}02407$ an$^{-1}$.',
          'À $t=50$ ans (l\'exemple du cours, entre $1$ et $2$ demi-vies), il reste $m(50) = 200\\,e^{-\\lambda \\times 50} \\approx 60{,}0$ mg, soit environ $30\\%$ de la masse initiale.',
          'La courbe s\'aplatit progressivement mais ne touche jamais l\'axe $m=0$ : en théorie, il reste toujours une trace de l\'échantillon, aussi petite soit-elle.'
        ],
        reading: 'Repère d\'abord les trois paliers régulièrement espacés dans le temps (une demi-vie à chaque fois) : la masse y est systématiquement divisée par $2$, ce qui donne la forme caractéristique en "marches qui s\'aplatissent" d\'une décroissance exponentielle.',
        caption: 'Décroissance radioactive du strontium 90 : $m(t) = m_0\\,e^{-\\lambda t}$, avec $m_0 = 200$ mg et $t_{1/2} = 28{,}8$ ans (mêmes valeurs que l\'exemple du cours).'
      },
      recap: [
        '$e^x$ est l\'unique fonction égale à sa propre dérivée, strictement positive, avec $e^0 = 1$ et $e^{a+b} = e^a \\cdot e^b$.',
        '$\\ln$ et $\\exp$ sont réciproques : $\\ln(e^x) = x$ et $e^{\\ln x} = x$. Ne jamais confondre $\\ln$ (base $e$) et $\\log$ (base $10$).',
        'La décroissance radioactive suit $m(t) = m_0 e^{-\\lambda t}$ avec $\\lambda = \\ln 2 / t_{1/2}$ — après $k$ demi-vies, il reste $m_0 / 2^k$.',
        'Le pH utilise le logarithme DÉCIMAL : $pH = -\\log_{10}[H_3O^+]$. Une unité de pH = un facteur $10$ sur la concentration.'
      ],
      piege: 'Ne confonds pas $\\log$ (logarithme base 10) et $\\ln$ (logarithme naturel, base $e$).<br/><br/>En chimie, le pH utilise le $\\log$ base 10. Dans les équations différentielles de la radioactivité, on utilise $\\ln$.<br/><br/>Relation : $\\log(x) = \\ln(x) / \\ln(10) \\approx \\ln(x) / 2{,}303$.'
    },

    quiz: [
      {
        q: 'Un élève calcule $\\ln(10^{-4})$ et trouve $-4$. Est-il correct ?',
        options: [
          'Non : $\\ln(10^{-4}) = -4\\ln(10) \\approx -9{,}21$. C\'est $\\log_{10}(10^{-4}) = -4$, pas le logarithme naturel',
          'Oui : $\\ln(10^n) = n$ quelle que soit la base du logarithme',
          'Oui : $\\ln(10) = 1$ donc $\\ln(10^{-4}) = -4$',
          'Non : $\\ln(10^{-4}) = -4 \\times 10 = -40$ car $\\ln(10) = 10$'
        ],
        answer: 0,
        correction: '$\\ln(10^{-4}) = -4\\ln(10) \\approx -4 \\times 2{,}303 \\approx -9{,}21$.<br/><br/>La formule $\\log_{10}(10^n) = n$ est vraie pour le logarithme <strong>BASE 10</strong>, pas pour le logarithme naturel $\\ln$.<br/><br/>En chimie, le pH utilise $\\log_{10}$ : $pH = -\\log_{10}[H_3O^+] = -(-4) = 4$. Toujours vérifier quelle base est utilisée !'
      },
      {
        q: 'La constante de décroissance radioactive est liée à la demi-vie par :',
        options: [
          '$\\lambda = t_{1/2}$',
          '$\\lambda = \\ln 2 \\cdot t_{1/2}$',
          '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$',
          '$\\lambda = \\dfrac{t_{1/2}}{\\ln 2}$'
        ],
        answer: 2,
        correction: 'À $t = t_{1/2}$, la masse restante est $m = m_0/2$ par définition de la demi-vie.<br/><br/>Donc $m_0/2 = m_0 e^{-\\lambda t_{1/2}}$, ce qui donne $1/2 = e^{-\\lambda t_{1/2}}$.<br/><br/>En passant au logarithme : $\\ln(1/2) = -\\lambda t_{1/2}$, d\'où $\\lambda = \\ln 2 / t_{1/2}$.'
      },
      {
        q: 'Le pH d\'une solution de jus de citron est $2{,}5$. Sa concentration en ions $H_3O^+$ est :',
        options: [
          '$3{,}16 \\times 10^{-3}$ mol/L',
          '$2{,}5 \\times 10^{-1}$ mol/L',
          '$10^{2{,}5}$ mol/L',
          '$2{,}5$ mol/L'
        ],
        answer: 0,
        correction: '$[H_3O^+] = 10^{-pH} = 10^{-2{,}5} = 3{,}16 \\times 10^{-3}$ mol/L.<br/><br/>On utilise la relation inverse du pH : si $pH = -\\log[H_3O^+]$, alors $[H_3O^+] = 10^{-pH}$.'
      },
      {
        q: 'Simplifier $e^{2\\ln 3}$ :',
        options: [
          '$6$',
          '$9$',
          '$e^6$',
          '$3^e$'
        ],
        answer: 1,
        correction: '$e^{2\\ln 3} = e^{\\ln(3^2)} = e^{\\ln 9} = 9$.<br/><br/>On utilise d\'abord la propriété $n\\ln a = \\ln(a^n)$ pour réécrire l\'exposant, puis la relation fondamentale $e^{\\ln x} = x$ pour simplifier.'
      },
      {
        q: 'La fonction $f(x) = e^x - x$ admet-elle un minimum ? Si oui, en quel point ?',
        options: [
          'Oui, en $x = 0$ car $f\'(0) = e^0 - 1 = 0$ et $f\'\'(0) = e^0 = 1 > 0$',
          'Non, $e^x - x$ est toujours croissante',
          'Oui, en $x = 1$ car $f(1) = e - 1$',
          'Non, $f$ n\'a pas de dérivée seconde'
        ],
        answer: 0,
        correction: '$f\'(x) = e^x - 1 = 0 \\Rightarrow x = 0$.<br/><br/>$f\'\'(x) = e^x > 0$ partout : $f$ est convexe, donc $x = 0$ est bien un <strong>minimum global</strong>.<br/><br/>$f(0) = e^0 - 0 = 1$. La valeur minimale de $f$ est donc $1$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { substance: 'un détartrant ménager', t12: 8, m0: 120, unit: 'jours' },
          { substance: 'un échantillon de césium 137', t12: 30, m0: 500, unit: 'ans' },
          { substance: 'un médicament radioactif (technétium 99m)', t12: 6, m0: 80, unit: 'heures' },
          { substance: 'un isotope d\'iode 131 en médecine nucléaire', t12: 8, m0: 200, unit: 'jours' }
        ]);
        const k = rand(2, 4);
        const t = k * ctx.t12;
        const mFinal = ctx.m0 / Math.pow(2, k);
        return {
          statement: `On dispose de ${ctx.substance} contenant $m_0 = ${ctx.m0}$ mg d'un isotope radioactif de demi-vie $t_{1/2} = ${ctx.t12}$ ${ctx.unit}. Quelle masse (en mg) reste-t-il après $t = ${t}$ ${ctx.unit} ?`,
          answer: mFinal,
          tolerance: 0.01,
          unit: 'mg',
          hint: `Commence par déterminer combien de demi-vies se sont écoulées : $k = \\dfrac{t}{t_{1/2}} = \\dfrac{${t}}{${ctx.t12}} = ${k}$. Puis applique $m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$.`,
          solution: [
            `Nombre de demi-vies : $k = \\dfrac{${t}}{${ctx.t12}} = ${k}$`,
            `Masse restante : $m = ${ctx.m0} \\times \\left(\\dfrac{1}{2}\\right)^{${k}} = ${ctx.m0} \\times \\dfrac{1}{${Math.pow(2, k)}}$`,
            `$m = ${mFinal}$ mg`
          ]
        };
      }
    },

    probleme: {
      context: 'Le carbone 14 ($^{14}$C) est un isotope radioactif utilisé en archéologie pour dater des matériaux organiques. Sa demi-vie est $t_{1/2} = 5730$ ans. Un objet ancien contient initialement $m_0$ de carbone 14. On cherche à savoir quelle fraction de la masse initiale reste après $k$ demi-vies.',
      schema: null,
      tasks: [
        'Exprimer la masse restante $m$ après $k$ demi-vies à partir de la formule de décroissance radioactive.',
        'Calculer la fraction $m / m_0$ après $k = 3$ demi-vies (soit $3 \\times 5730 = 17190$ ans).',
        'Si initialement $m_0 = 80$ mg, quelle masse reste après 3 demi-vies ?'
      ],
      solutions: [
        '$m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$. Après chaque demi-vie, la moitié se désintègre.',
        '$\\dfrac{m}{m_0} = \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8} = 0{,}125 = 12{,}5\\%$.',
        '$m = 80 \\times \\dfrac{1}{8} = 10$ mg. Après 17 190 ans, il ne reste que 10 mg sur 80 mg initiaux.'
      ],
      finalAnswer: '$m = 10$ mg (12,5 % de la masse initiale restante après 3 demi-vies)'
    },

    evaluation: {
      title: 'Évaluation — Exponentielle et Logarithme',
      duration: '35 min',
      questions: [
        {
          statement: 'Une solution a un pH de $3{,}5$. Calculer la concentration $[H_3O^+]$ en mol/L. Donner la réponse en notation scientifique (arrondir le coefficient à $0{,}01$). Répondre la valeur en puissance de $10$ : $[H_3O^+] \\approx a \\times 10^{-4}$. Que vaut $a$ ?',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$[H_3O^+] = 10^{-pH} = 10^{-3{,}5} = 10^{-3} \\times 10^{-0{,}5}$.<br/><br/>Or $10^{-0{,}5} \\approx 0{,}3162$, donc $[H_3O^+] \\approx 10^{-3} \\times 0{,}3162 = 3{,}162 \\times 10^{-4}$ mol/L.<br/><br/>Donc $a \\approx 3{,}16$.'
        },
        {
          statement: 'La demi-vie du carbone 14 est $t_{1/2} = 5730$ ans. Quelle est la constante de décroissance $\\lambda$ (en $\\mathrm{an}^{-1}$) ? Donner $\\lambda \\times 10^4$ arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 1.21,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}6931}{5730} \\approx 1{,}21 \\times 10^{-4}$ an$^{-1}$.<br/><br/>On multiplie par $10^4$ pour obtenir $\\lambda \\times 10^4 \\approx 1{,}21$.'
        },
        {
          statement: 'Quelle est la dérivée de $f(x) = e^{3x}$ ?',
          type: 'multiple-choice',
          options: ['$e^{3x}$', '$3e^{3x}$', '$3xe^{3x}$', '$e^{3x+1}$'],
          answer: 1,
          points: 2,
          correction: 'On applique la règle de la <strong>dérivée d\'une composée</strong> : $(e^{u})\' = u\' e^{u}$.<br/><br/>Avec $u = 3x$ et $u\' = 3$, on obtient $f\'(x) = 3e^{3x}$.'
        },
        {
          statement: 'Simplifier $\\log_{10}(10^{-2} \\times 10^{5})$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On regroupe les puissances de $10$ : $10^{-2} \\times 10^{5} = 10^{-2+5} = 10^3$.<br/><br/>Puis on applique la propriété fondamentale : $\\log(10^3) = 3$.'
        },
        {
          statement: 'Un isotope a une masse initiale de $m_0 = 160$ mg et une demi-vie de $8$ jours. Quelle masse reste après $24$ jours ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: 'mg',
          points: 2,
          correction: 'On détermine le nombre de demi-vies : $k = 24/8 = 3$ demi-vies.<br/><br/>La masse restante est $m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^3 = 160 \\times \\dfrac{1}{8} = 20$ mg.'
        }
      ]
    }
  });
