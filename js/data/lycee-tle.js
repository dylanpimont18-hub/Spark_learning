/* =========================================================
   Spark Learning – data/lycee-tle.js
   Modules Lycée Terminale
   ========================================================= */

window.MODULES.push(

  {
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
          'Logarithme décimal : $\\log(a \\times b) = \\log a + \\log b$ ; $\\log(10^n) = n$ ; $\\log(a/b) = \\log a - \\log b$. Application directe : $pH = -\\log[H_3O^+]$.',
          'Exponentielle naturelle : $(e^x)\' = e^x$ (unique fonction égale à sa dérivée). Propriété : $e^{a+b} = e^a \\cdot e^b$.',
          'Demi-vie : après $k$ demi-vies, la masse restante est $m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$. En continu : $m(t) = m_0 e^{-\\lambda t}$ où $\\lambda = \\ln 2 / t_{1/2}$.'
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
  },

    {
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
          'Trouver la primitive $F(x)$ telle que $F\'(x) = f(x)$. Règle clé : la primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$ (pour $n \\neq -1$).',
          'L\'intégrale définie : $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (le crochet).',
          'En physique, utiliser les conditions initiales pour fixer la constante d\'intégration $C$. Si $v(0) = v_0$, on en déduit $C$.'
        ]
      },
      example: {
        statement: 'Calculer l\'aire entre la courbe de $f(x) = x^2 - 1$ et l\'axe des abscisses sur $[0;2]$.',
        steps: [
          'On cherche la primitive de $f(x) = x^2 - 1$ : $F(x) = \\dfrac{x^3}{3} - x$.',
          'On calcule l\'intégrale : $\\int_0^2 (x^2 - 1)\\,dx = \\left[\\dfrac{x^3}{3} - x\\right]_0^2 = \\left(\\dfrac{8}{3} - 2\\right) - 0 = \\dfrac{2}{3}$.',
          'Attention : $f$ change de signe en $x = 1$. Sur $[0;1]$, $f < 0$ et sur $[1;2]$, $f > 0$.',
          'L\'aire géométrique est : $\\int_0^1 |f(x)|\\,dx + \\int_1^2 f(x)\\,dx = \\dfrac{4}{3} + \\dfrac{2}{3} - \\left(-\\dfrac{2}{3}\\right) = 2$.'
        ],
        answer: 'L\'intégrale vaut $\\dfrac{2}{3}$, mais l\'aire géométrique réelle est $2$ unités d\'aire (il faut tenir compte du changement de signe).'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (pour $n \\neq -1$)',
        '$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
        '$\\int e^x\\,dx = e^x + C$',
        '$\\int \\cos x\\,dx = \\sin x + C$'
      ],
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
  },

    {
    id: 'tle-equations-differentielles',
    level: 2, subject: 'maths',
    icon: '🌊',
    title: 'Équations Différentielles du 1er Ordre',
    subtitle: 'Constante de temps τ, régime transitoire',
    keywords: ['Équation différentielle', 'Constante de temps τ', 'Régime transitoire', 'Circuit RC'],
    physics: 'Charge condensateur RC, chute libre avec frottements',

    cours: {
      intro: 'Une <strong>équation différentielle</strong> relie une grandeur à sa propre dérivée.<br/><br/>Dès que la vitesse de variation d\'une grandeur est proportionnelle à son écart à une valeur cible, on obtient $\\tau \\frac{dy}{dt} + y = y_\\infty$ dont la solution est toujours exponentielle : $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$.<br/><br/>La <strong>constante de temps</strong> $\\tau$ (tau) est l\'empreinte temporelle du système : à $t = \\tau$, la grandeur a parcouru $63{,}2\\%$ du chemin vers $y_\\infty$ — ce n\'est PAS le temps de chargement total.<br/><br/>En pratique, on considère le régime permanent atteint à $5\\tau$ (moins de $1\\%$ d\'écart).<br/><br/>Dans un circuit RC : $\\tau = RC$. Plus $R$ ou $C$ est grand, plus le <strong>transitoire</strong> est lent.',
      definitions: [
        { term: 'Équation différentielle', def: 'Équation reliant une fonction inconnue $y(t)$ à sa dérivée $y\'(t)$ (et éventuellement ses dérivées d\'ordres supérieurs). L\'ordre de l\'ED est celui de la plus haute dérivée présente.' },
        { term: 'Constante de temps $\\tau$', def: 'Paramètre qui caractérise la rapidité de la réponse du système. À $t = \\tau$, la grandeur a atteint $63{,}2\\%$ de sa valeur finale. Le régime permanent est considéré atteint à $5\\tau$.' },
        { term: 'Régime transitoire', def: 'Phase pendant laquelle le système évolue depuis sa condition initiale vers sa valeur d\'équilibre. La durée du transitoire est d\'environ $5\\tau$.' },
        { term: 'Régime permanent', def: 'État atteint quand le transitoire est terminé : la grandeur ne varie plus (ou de manière négligeable). $y(t) \\approx y_\\infty$ pour $t \\gg \\tau$.' }
      ],
      method: {
        title: 'Méthode de résolution',
        steps: [
          'Écrire l\'équation sous la forme canonique : $\\tau \\dfrac{dy}{dt} + y = y_{\\infty}$ où $\\tau$ est la constante de temps et $y_{\\infty}$ la valeur en régime permanent.',
          'La solution générale est : $y(t) = y_{\\infty} + (y_0 - y_{\\infty}) e^{-t/\\tau}$ où $y_0 = y(0)$ est la condition initiale.',
          'Identifier les paramètres physiques : pour un circuit RC, $\\tau = RC$. Pour le circuit RC en charge depuis $U_0 = 0$ : $U_C(t) = E(1 - e^{-t/\\tau})$.'
        ]
      },
      example: {
        statement: 'Un circuit RC avec $R = 5$ kΩ et $C = 200$ μF est alimenté par un générateur $E = 12$ V. Le condensateur est initialement déchargé. Calculer $U_C$ à $t = 2$ s.',
        steps: [
          'Calcul de la constante de temps : $\\tau = RC = 5 \\times 10^3 \\times 200 \\times 10^{-6} = 1$ s.',
          'Expression de $U_C(t)$ : $U_C(t) = E(1 - e^{-t/\\tau}) = 12(1 - e^{-t})$.',
          'À $t = 2$ s : $U_C(2) = 12(1 - e^{-2}) = 12(1 - 0{,}1353) = 12 \\times 0{,}8647$.',
          '$U_C(2) \\approx 10{,}38$ V.'
        ],
        answer: '$U_C(2) \\approx 10{,}38$ V. Après $2\\tau$, le condensateur a atteint $86{,}5\\%$ de la tension finale $E$.'
      },
      formulas: [
        '$\\tau \\dfrac{dU_C}{dt} + U_C = E$ (circuit RC en charge)',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ (solution en charge)',
        '$\\tau = R \\times C$ (circuit RC)',
        'À $t = \\tau$ : $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 E$'
      ],
      recap: [
        'L\'équation $\\tau y\' + y = y_\\infty$ a pour solution $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$ : exponentielle décroissante vers $y_\\infty$.',
        'La constante de temps $\\tau$ fixe la rapidité du transitoire : à $\\tau$, on est à $63{,}2\\%$ ; à $5\\tau$, à $99{,}3\\%$.',
        'Dans un circuit RC : $\\tau = RC$. Les unités $\\Omega \\times F = s$ donnent bien un temps.',
        'Deux cas classiques : charge ($U_C(0) = 0 \\to E$) et décharge ($U_C(0) = E \\to 0$). La décharge suit $U_C(t) = E \\cdot e^{-t/\\tau}$.'
      ],
      piege: 'Le régime permanent est atteint théoriquement à l\'infini.<br/><br/>En pratique, on considère qu\'après $5\\tau$, le transitoire est terminé ($U_C \\approx 0{,}993E$).<br/><br/>Ne pas confondre $\\tau$ (constante de temps en secondes) et la "durée du transitoire" ($5\\tau$).'
    },

    quiz: [
      {
        q: 'Dans un circuit RC série avec $R = 10$ kΩ et $C = 100$ μF, la constante de temps est :',
        options: ['$\\tau = 1$ ms', '$\\tau = 0{,}1$ s', '$\\tau = 1$ s', '$\\tau = 10$ s'],
        answer: 2,
        correction: 'On applique la formule $\\tau = RC$ en convertissant les unités :<br/><br/>$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 10^4 \\times 10^{-4} = 1$ s.'
      },
      {
        q: 'Lors de la charge d\'un condensateur via $RC$, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
        options: ['$0{,}5 E$', '$0{,}632 E$', '$0{,}865 E$', '$E$'],
        answer: 1,
        correction: '$U_C(\\tau) = E(1 - e^{-1}) = E(1 - 0{,}368) = 0{,}632 E$.<br/><br/>La valeur $63{,}2\\%$ est fondamentale : elle permet d\'identifier $\\tau$ expérimentalement sur une courbe de charge.'
      },
      {
        q: 'Un élève dit : "La constante de temps $\\tau = RC$ est le temps nécessaire pour charger complètement le condensateur." Est-il correct ?',
        options: [
          'Non : $\\tau$ est le temps pour atteindre $63{,}2\\%$ de la tension finale. Le chargement "complet" est à $5\\tau$ (pratiquement) ou à l\'infini (théoriquement)',
          'Oui : à $t = \\tau$, $U_C = E$ exactement',
          'Oui : après $\\tau$ secondes, le condensateur est chargé à $100\\%$',
          'Non : $\\tau$ est le temps pour atteindre $50\\%$ de $E$ (demi-vie du circuit)'
        ],
        answer: 0,
        correction: 'À $t = \\tau$, $U_C(\\tau) = E(1-e^{-1}) \\approx 0{,}632\\,E$ soit $63{,}2\\%$ seulement.<br/><br/>La charge n\'atteint théoriquement $E$ qu\'à $t \\to +\\infty$. Par convention, on dit que le régime permanent est atteint à $5\\tau$ car $e^{-5} \\approx 0{,}007$, soit moins de $1\\%$ d\'écart.<br/><br/>L\'option D décrirait la demi-vie radioactive ($50\\%$), pas un circuit RC.'
      },
      {
        q: 'Lors de la DÉCHARGE d\'un condensateur initialement chargé à $E$, l\'expression de $U_C(t)$ est :',
        options: [
          '$U_C(t) = E \\cdot e^{-t/\\tau}$',
          '$U_C(t) = E(1 - e^{-t/\\tau})$',
          '$U_C(t) = E \\cdot e^{t/\\tau}$',
          '$U_C(t) = E(1 + e^{-t/\\tau})$'
        ],
        answer: 0,
        correction: 'En décharge, la valeur finale est $y_\\infty = 0$ et la valeur initiale est $y_0 = E$.<br/><br/>En substituant dans la solution générale : $U_C(t) = 0 + (E - 0)e^{-t/\\tau} = E \\cdot e^{-t/\\tau}$.<br/><br/>La tension décroît exponentiellement vers $0$.'
      },
      {
        q: 'On double la résistance $R$ dans un circuit RC. Quel est l\'effet sur $\\tau$ ?',
        options: [
          '$\\tau$ est divisé par $2$',
          '$\\tau$ est multiplié par $2$',
          '$\\tau$ reste inchangé',
          '$\\tau$ est multiplié par $4$'
        ],
        answer: 1,
        correction: '$\\tau = RC$. Si $R$ est doublée, $\\tau\' = 2R \\times C = 2\\tau$.<br/><br/>Le transitoire dure deux fois plus longtemps : le condensateur se charge plus lentement. C\'est logique car une résistance plus grande limite le courant de charge.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { nom: 'un circuit de temporisation pour une alarme', R: rand(2, 8), C: rand(100, 500) },
          { nom: 'le système de charge d\'un flash d\'appareil photo', R: rand(1, 5), C: rand(200, 800) },
          { nom: 'un capteur de température avec filtre RC', R: rand(3, 10), C: rand(50, 300) },
          { nom: 'un circuit de protection contre les surtensions', R: rand(1, 6), C: rand(100, 600) }
        ]);
        const E = rand(5, 15);
        const tau_s = parseFloat((ctx.R * 1e3 * ctx.C * 1e-6).toFixed(3));
        const UC_tau = parseFloat((E * (1 - Math.exp(-1))).toFixed(2));
        return {
          statement: `On réalise ${ctx.nom} avec $R = ${ctx.R}$ kΩ, $C = ${ctx.C}$ μF et $E = ${E}$ V. Calcule la tension $U_C(\\tau)$ aux bornes du condensateur au bout d'une constante de temps. Arrondir à $0{,}01$ V.`,
          answer: UC_tau,
          tolerance: 0.05,
          unit: 'V',
          hint: `D'abord, rappelle-toi qu'à $t = \\tau$, $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 \\times E$. Ici $E = ${E}$ V.`,
          solution: [
            `$\\tau = RC = ${ctx.R} \\times 10^3 \\times ${ctx.C} \\times 10^{-6} = ${tau_s}$ s`,
            `$U_C(\\tau) = E(1 - e^{-1}) = ${E} \\times 0{,}6321$`,
            `$U_C(\\tau) \\approx ${UC_tau}$ V`
          ]
        };
      }
    },

    probleme: {
      context: 'Un condensateur de capacité $C = 470$ μF est chargé à travers une résistance $R = 2{,}2$ kΩ par un générateur de f.e.m. $E = 9$ V. Le condensateur est initialement déchargé ($U_C(0) = 0$).',
      schema: null,
      tasks: [
        'Calculer la constante de temps $\\tau = RC$.',
        'Exprimer la tension $U_C(t)$ au cours du temps.',
        'Quelle est la tension aux bornes du condensateur à $t = \\tau$ ? Arrondir à 3 chiffres significatifs.'
      ],
      solutions: [
        '$\\tau = RC = 2{,}2 \\times 10^3 \\times 470 \\times 10^{-6} = 2200 \\times 470 \\times 10^{-6} = 1{,}034$ s $\\approx 1{,}03$ s.',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right) = 9\\left(1 - e^{-t/1{,}03}\\right)$ V.',
        '$U_C(\\tau) = 9 \\times (1 - e^{-1}) = 9 \\times 0{,}6321 = 5{,}69$ V $\\approx 5{,}69$ V.'
      ],
      finalAnswer: '$U_C(\\tau) \\approx 5{,}69$ V (soit $63{,}2\\%$ de $E = 9$ V)'
    },

    evaluation: {
      title: 'Évaluation — Équations différentielles du 1er ordre',
      duration: '35 min',
      questions: [
        {
          statement: 'Un circuit RC a $R = 4{,}7$ kΩ et $C = 220$ μF. Calculer $\\tau$ en secondes. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 1.03,
          tolerance: 0.02,
          unit: 's',
          points: 2,
          correction: 'On convertit les unités et on applique $\\tau = RC$ :<br/><br/>$\\tau = 4{,}7 \\times 10^3 \\times 220 \\times 10^{-6} = 4700 \\times 0{,}000220 = 1{,}034$ s $\\approx 1{,}03$ s.'
        },
        {
          statement: 'Dans un circuit RC en charge, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
          type: 'multiple-choice',
          options: ['$50\\%$ de $E$', '$63{,}2\\%$ de $E$', '$86{,}5\\%$ de $E$', '$99{,}3\\%$ de $E$'],
          answer: 1,
          points: 2,
          correction: '$U_C(\\tau) = E(1 - e^{-1}) = E \\times (1 - 0{,}368) = 0{,}632 E$, soit $63{,}2\\%$ de $E$.<br/><br/>Cette valeur caractéristique permet de retrouver $\\tau$ sur un graphe expérimental.'
        },
        {
          statement: 'Un condensateur est chargé par $E = 12$ V avec $\\tau = 2$ s. Calculer $U_C(2)$ en V. Arrondir à $0{,}1$.',
          type: 'numeric',
          answer: 7.6,
          tolerance: 0.1,
          unit: 'V',
          points: 2,
          correction: 'Ici $t = 2 = \\tau$, donc on est exactement à une constante de temps.<br/><br/>$U_C(\\tau) = E(1 - e^{-1}) = 12 \\times 0{,}6321 = 7{,}6$ V.'
        },
        {
          statement: 'On considère le régime permanent comme atteint après :',
          type: 'multiple-choice',
          options: ['$\\tau$', '$2\\tau$', '$3\\tau$', '$5\\tau$'],
          answer: 3,
          points: 2,
          correction: 'Après $5\\tau$, $U_C = E(1 - e^{-5}) \\approx E \\times 0{,}993$, soit moins de $1\\%$ d\'écart avec $E$.<br/><br/>Par convention, le <strong>régime permanent</strong> est considéré comme atteint à $5\\tau$.'
        },
        {
          statement: 'La solution de $\\tau \\dfrac{dy}{dt} + y = 5$ avec $y(0) = 0$ et $\\tau = 3$ est $y(t) = 5(1 - e^{-t/3})$. Calculer $y(3)$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: 'On substitue $t = 3$ dans la solution : $y(3) = 5(1 - e^{-3/3}) = 5(1 - e^{-1})$.<br/><br/>$y(3) = 5 \\times 0{,}6321 = 3{,}16$. On retrouve le fameux $63{,}2\\%$ de la valeur finale.'
        }
      ]
    }
  },

    {
    id: 'tle-limites-continuite',
    level: 2, subject: 'maths',
    icon: '♾️',
    title: 'Limites de fonctions et continuité',
    subtitle: 'Limites en l\'infini, en un point, continuité',
    keywords: ['Limite', 'Continuité', 'Infini', 'Indétermination'],
    physics: true,
    cours: {
      intro: 'La <strong>limite</strong> de $f$ en $a$ décrit le comportement de $f$ quand $x$ se rapproche de $a$ — sans que $f(a)$ soit nécessairement définie. Exemple : $f(x) = \\frac{x^2-4}{x-2}$ n\'est pas définie en $x=2$, mais $\\lim_{x\\to2}f(x) = 4$.<br/><br/>Les <strong>formes indéterminées</strong> ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) ne sont pas des valeurs — ce sont des signaux d\'alarme : la limite peut être n\'importe quel réel ou $\\pm\\infty$ selon le contexte.<br/><br/>L\'erreur classique : conclure "$0/0 = 0$" ou "$0/0$ : pas de limite". Il faut factoriser pour <strong>lever l\'indétermination</strong>.<br/><br/>En $\\pm\\infty$, le terme de plus haut degré domine : $3x^2 - 100x + 500 \\sim 3x^2$ quand $x \\to +\\infty$.<br/><br/>La <strong>continuité</strong> de $f$ en $a$ exige : $f(a)$ existe, $\\lim_{x\\to a} f(x)$ existe, et elles sont égales.',
      definitions: [
        { term: 'Limite finie en $a$', def: '$\\lim_{x \\to a} f(x) = L$ signifie que $f(x)$ se rapproche aussi près que l\'on veut de $L$ quand $x$ se rapproche de $a$. On note aussi $f(x) \\xrightarrow[x \\to a]{} L$.' },
        { term: 'Forme indéterminée (FI)', def: 'Expression du type $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\times \\infty$, $1^\\infty$, $0^0$ ou $\\infty^0$ dont la valeur dépend du contexte. Il faut <strong>lever l\'indétermination</strong> (factoriser, simplifier, croissances comparées).' },
        { term: 'Continuité en $a$', def: '$f$ est continue en $a$ si $\\lim_{x \\to a} f(x) = f(a)$. Intuitivement : on peut tracer la courbe de $f$ sans lever le crayon en $a$.' },
        { term: 'Asymptote', def: 'Droite dont la courbe s\'approche à l\'infini. <strong>Horizontale</strong> $y = L$ si $\\lim_{x \\to \\pm\\infty} f(x) = L$. <strong>Verticale</strong> $x = a$ si $\\lim_{x \\to a} f(x) = \\pm\\infty$.' }
      ],
      method: {
        title: 'Calculer une limite',
        steps: [
          'Substituer directement : si le résultat est défini, c\'est la limite.',
          'Si forme indéterminée ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) : factoriser, simplifier, ou utiliser les croissances comparées.',
          'Limites en $\\pm\\infty$ d\'un polynôme : terme de plus haut degré dominant.',
          '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x\\to a}f(x)=f(a)$.'
        ]
      },
      example: {
        statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 - 1}$.',
        steps: [
          'Substitution directe : $\\dfrac{1-1}{1-1} = \\dfrac{0}{0}$ → forme indéterminée.',
          'Factorisation du numérateur : $x^3 - 1 = (x-1)(x^2+x+1)$.',
          'Factorisation du dénominateur : $x^2 - 1 = (x-1)(x+1)$.',
          'Simplification : $\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\dfrac{x^2+x+1}{x+1}$ pour $x \\neq 1$.',
          'Substitution : $\\dfrac{1+1+1}{1+1} = \\dfrac{3}{2}$.'
        ],
        answer: '$\\lim_{x \\to 1} \\dfrac{x^3-1}{x^2-1} = \\dfrac{3}{2} = 1{,}5$'
      },
      formulas: [
        '$\\lim_{x\\to+\\infty}x^n=+\\infty$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{1}{x^n}=0$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{a_n x^n+\\cdots}{b_m x^m+\\cdots}=\\lim_{x\\to+\\infty}\\frac{a_n x^n}{b_m x^m}$'
      ],
      recap: [
        'En $\\pm\\infty$, le terme de plus haut degré domine : $\\lim \\frac{P(x)}{Q(x)} = \\lim \\frac{\\text{terme dominant de }P}{\\text{terme dominant de }Q}$.',
        'Les formes indéterminées ($0/0$, $\\infty/\\infty$, etc.) exigent un travail algébrique (factorisation, simplification) avant de conclure.',
        '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x \\to a} f(x) = f(a)$ : pas de "saut" ni de "trou" dans la courbe.',
        'Le théorème des valeurs intermédiaires (TVI) : si $f$ est continue sur $[a;b]$ et $f(a) \\times f(b) < 0$, alors $f$ s\'annule au moins une fois sur $]a;b[$.'
      ],
      piege: '$\\infty - \\infty$ est une <strong>forme indéterminée</strong> : on ne peut pas conclure sans calcul.<br/><br/>Il faut factoriser, multiplier par la quantité conjuguée ou utiliser les croissances comparées pour lever l\'indétermination.'
    },
    quiz: [
      { q: 'Un élève évalue $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ et écrit : "en $x=2$, on obtient $\\dfrac{0}{0}$, donc la limite est $0$." Quelle est son erreur ?', options: ['$\\dfrac{0}{0}$ est une forme INDÉTERMINÉE, pas $0$. En factorisant : $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to 4$', 'L\'élève a raison : $\\dfrac{0}{0}=0$ par convention', 'La limite n\'existe pas car $f$ n\'est pas définie en $x=2$', 'La limite est $+\\infty$ car on divise par $0$'], answer: 0, correction: '$\\dfrac{0}{0}$ est une <strong>forme indéterminée</strong> : le résultat peut être $0$, n\'importe quel nombre réel, ou $\\pm\\infty$ selon les fonctions.<br/><br/>Ici $\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\neq2$, donc la limite est $4$.<br/><br/>Ne jamais conclure directement d\'une forme indéterminée sans simplifier !' },
      { q: '$\\lim_{x\\to 2}\\frac{x^2-4}{x-2}=$ ?', options: ['$0$', '$\\infty$', '$4$', '$2$'], answer: 2, correction: 'On factorise pour lever la forme indéterminée $0/0$ :<br/><br/>$\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2 \\to 4$ en $x=2$.' },
      { q: '$f(x)=\\frac{2x^3-x}{x^3+1}$, $\\lim_{x\\to+\\infty}f(x)=$ ?', options: ['$2$', '$0$', '$+\\infty$', '$-1$'], answer: 0, correction: 'En $+\\infty$, seuls les <strong>termes de plus haut degré</strong> comptent.<br/><br/>Termes dominants : $\\frac{2x^3}{x^3}=2$.' },
      { q: '$\\lim_{x \\to +\\infty} (\\sqrt{x^2+1} - x) = $ ?', options: ['$+\\infty$ car $\\sqrt{x^2+1} > x$', '$1$', '$0$', '$\\dfrac{1}{2}$'], answer: 2, correction: 'Forme $\\infty - \\infty$ : il faut lever l\'indétermination !<br/><br/>On multiplie par la <strong>quantité conjuguée</strong> : $\\dfrac{(\\sqrt{x^2+1}-x)(\\sqrt{x^2+1}+x)}{\\sqrt{x^2+1}+x} = \\dfrac{x^2+1-x^2}{\\sqrt{x^2+1}+x} = \\dfrac{1}{\\sqrt{x^2+1}+x}$.<br/><br/>Quand $x \\to +\\infty$, le dénominateur tend vers $+\\infty$, donc la limite est $0$.' },
      { q: '$f$ est continue sur $[0;1]$ avec $f(0) = -2$ et $f(1) = 3$. Que peut-on affirmer ?', options: ['$f$ s\'annule au moins une fois sur $]0;1[$ (TVI)', '$f$ s\'annule exactement une fois', '$f(0{,}5) = 0{,}5$', 'Rien de particulier'], answer: 0, correction: '$f$ est continue et $f(0) < 0 < f(1)$ : par le <strong>théorème des valeurs intermédiaires</strong>, il existe $c \\in ]0;1[$ tel que $f(c) = 0$.<br/><br/>On sait qu\'il y a au moins un zéro, mais pas qu\'il est unique (il pourrait y en avoir plusieurs).' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La concentration d\'un polluant dans un lac (en mg/L) est modélisée par' },
          { intro: 'Le nombre de vues quotidiennes d\'une vidéo virale est modélisé par' },
          { intro: 'La température d\'un métal en refroidissement (en °C) est modélisée par' },
          { intro: 'Le rendement d\'un catalyseur (en %) en fonction de la température est modélisé par' }
        ]);
        const a = rand(2, 7), b = rand(1, 5), c = rand(1, 4);
        const p = rand(1, 2);
        const answer = parseFloat((a / c).toFixed(2));
        return {
          statement: `${ctx.intro} $f(x) = \\dfrac{${a}x^${p} + ${b}}{${c}x^${p} + 1}$. Calculer $\\lim_{x \\to +\\infty} f(x)$. Arrondir à $0{,}01$.`,
          answer: answer,
          tolerance: 0.01,
          unit: '',
          hint: `En $+\\infty$, on ne garde que les termes de plus haut degré. Ici, numérateur $\\sim ${a}x^${p}$ et dénominateur $\\sim ${c}x^${p}$.`,
          solution: [
            `Termes dominants : $\\dfrac{${a}x^${p}}{${c}x^${p}} = \\dfrac{${a}}{${c}}$`,
            `$\\lim_{x \\to +\\infty} f(x) = \\dfrac{${a}}{${c}} = ${answer}$`
          ]
        };
      }
    },
    probleme: {
      context: 'La concentration d\'un médicament dans le sang (en mg/L) est modélisée par $C(t)=\\frac{10t}{t^2+1}$ où $t\\ge 0$ est en heures.',
      tasks: [
        'Calculer la limite de $C(t)$ quand $t\\to+\\infty$.',
        'Interpréter ce résultat.',
        'Calculer $C(1)$ et $C(3)$ pour étudier le comportement.'
      ],
      solutions: [
        '$\\lim_{t\\to+\\infty}C(t)=\\lim_{t\\to+\\infty}\\frac{10t}{t^2}=\\lim\\frac{10}{t}=0$.',
        'La concentration tend vers $0$ : le médicament est éliminé à long terme.',
        '$C(1)=\\frac{10}{2}=5$ mg/L ; $C(3)=\\frac{30}{10}=3$ mg/L.'
      ],
      finalAnswer: '$C(t)\\to 0$ : le médicament est éliminé. Pic à $t=1$ h : $5$ mg/L.'
    },

    evaluation: {
      title: 'Évaluation — Limites et continuité',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{3x^2 - x + 1}{2x^2 + 5}$.',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'En $+\\infty$, on ne garde que les termes de plus haut degré :<br/><br/>$\\dfrac{3x^2}{2x^2} = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          statement: '$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ vaut :',
          type: 'multiple-choice',
          options: ['$0$', '$6$', '$+\\infty$', 'La limite n\'existe pas'],
          answer: 1,
          points: 2,
          correction: 'On factorise pour lever la forme indéterminée $0/0$ :<br/><br/>$\\dfrac{x^2 - 9}{x - 3} = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ pour $x \\neq 3$.<br/><br/>Donc $\\lim_{x \\to 3} = 3 + 3 = 6$.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{5x^3 + 2x}{x^4 - 1}$.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le degré du numérateur ($3$) est inférieur à celui du dénominateur ($4$).<br/><br/>Termes dominants : $\\dfrac{5x^3}{x^4} = \\dfrac{5}{x} \\to 0$ quand $x \\to +\\infty$.'
        },
        {
          statement: 'La forme $\\dfrac{0}{0}$ est :',
          type: 'multiple-choice',
          options: ['Égale à $0$', 'Égale à $1$', 'Une forme indéterminée qu\'il faut lever', 'Égale à $+\\infty$'],
          answer: 2,
          points: 2,
          correction: '$\\dfrac{0}{0}$ est une <strong>forme indéterminée</strong> : le résultat dépend des fonctions en jeu.<br/><br/>Par exemple : $\\dfrac{x^2}{x} \\to 0$, $\\dfrac{x}{x} \\to 1$, $\\dfrac{x}{x^2} \\to +\\infty$ quand $x \\to 0^+$.<br/><br/>Il faut factoriser ou simplifier pour lever l\'indétermination.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x^2 - x}$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On factorise numérateur et dénominateur :<br/><br/>$\\dfrac{x^2 - 1}{x^2 - x} = \\dfrac{(x-1)(x+1)}{x(x-1)} = \\dfrac{x+1}{x}$ pour $x \\neq 1$.<br/><br/>Donc $\\lim_{x \\to 1} = \\dfrac{2}{1} = 2$.'
        }
      ]
    }
  },

    {
    id: 'tle-derivation-complements',
    level: 2, subject: 'maths',
    icon: '🔬',
    title: 'Compléments sur la dérivation',
    subtitle: 'Dérivée de composées, produit, quotient',
    keywords: ['Dérivée', 'Produit', 'Quotient', 'Composée', 'Fonction'],
    physics: true,
    cours: {
      intro: 'La <strong>règle du produit</strong> $(uv)\' = u\'v + uv\'$ s\'explique géométriquement : si une longueur $u$ et une largeur $v$ varient, l\'aire $uv$ varie de $u\\ \\delta v + v\\ \\delta u$ (le terme $\\delta u\\ \\delta v$ est négligeable).<br/><br/>La <strong>règle du quotient</strong> $(u/v)\' = (u\'v - uv\')/v^2$ s\'en déduit algébriquement.<br/><br/>La <strong>règle de la chaîne</strong> $(f\\circ g)\' = g\' \\times f\'(g)$ dit que "les taux de variation se multiplient".<br/><br/>Deux pièges fréquents : croire que $(u/v)\' = u\'/v\'$ (faux — on ne divise pas les dérivées) et inverser l\'ordre dans le numérateur du quotient ($u\'v - uv\'$, et non $uv\' - u\'v$).<br/><br/>Un contre-exemple simple : $(x/(x+1))\' = 1/(x+1)^2$ et non $1/1 = 1$.',
      definitions: [
        { term: 'Dérivée d\'un produit', def: 'Si $f = u \\times v$, alors $f\' = u\'v + uv\'$. Chaque facteur est dérivé à tour de rôle, l\'autre restant inchangé.' },
        { term: 'Dérivée d\'un quotient', def: 'Si $f = \\dfrac{u}{v}$ avec $v \\neq 0$, alors $f\' = \\dfrac{u\'v - uv\'}{v^2}$. L\'ordre du numérateur ($u\'v$ en premier) est crucial.' },
        { term: 'Dérivée d\'une composée (chaîne)', def: 'Si $f(x) = h(g(x))$, alors $f\'(x) = g\'(x) \\times h\'(g(x))$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur.' },
        { term: 'Tangente en un point', def: 'La tangente à la courbe de $f$ en $a$ a pour équation $y = f\'(a)(x - a) + f(a)$. Le coefficient directeur est la dérivée en $a$.' }
      ],
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          'Produit : $(uv)\'=u\'v+uv\'$.',
          'Quotient : $\\left(\\frac{u}{v}\\right)\'=\\frac{u\'v-uv\'}{v^2}$.',
          'Composée : $(f\\circ g)\'(x)=g\'(x)\\cdot f\'(g(x))$.',
          'Cas courant : $[u^n]\'=n\\cdot u^{n-1}\\cdot u\'$.'
        ]
      },
      example: {
        statement: 'Dériver $f(x) = \\dfrac{e^x}{x^2 + 1}$ et calculer $f\'(0)$.',
        steps: [
          'On identifie $u = e^x$ et $v = x^2 + 1$, donc $u\' = e^x$ et $v\' = 2x$.',
          'Règle du quotient : $f\'(x) = \\dfrac{u\'v - uv\'}{v^2} = \\dfrac{e^x(x^2+1) - e^x \\cdot 2x}{(x^2+1)^2}$.',
          'Factorisation : $f\'(x) = \\dfrac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\dfrac{e^x(x-1)^2}{(x^2+1)^2}$.',
          'En $x = 0$ : $f\'(0) = \\dfrac{e^0 \\times (-1)^2}{(0+1)^2} = \\dfrac{1 \\times 1}{1} = 1$.'
        ],
        answer: '$f\'(0) = 1$. On remarque que $f\'(x) \\geq 0$ pour tout $x$ car $(x-1)^2 \\geq 0$ et $e^x > 0$ : $f$ est croissante sur $\\mathbb{R}$.'
      },
      formulas: [
        '$(uv)\'=u\'v+uv\'$',
        '$\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$',
        '$(u^n)\'=nu^{n-1}u\'$',
        '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$'
      ],
      recap: [
        '<strong>Produit</strong> : $(uv)\' = u\'v + uv\'$. Astuce mnémotechnique : "dérive le premier, garde le second, puis l\'inverse".',
        '<strong>Quotient</strong> : $(u/v)\' = (u\'v - uv\')/v^2$. Attention à l\'ordre : c\'est $u\'v$ MOINS $uv\'$, jamais l\'inverse.',
        '<strong>Composée</strong> : $(f \\circ g)\' = g\' \\times f\'(g)$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur ($(e^{3x})\' = 3e^{3x}$).',
        'Vérifier en revenant à la dérivation : si $F$ est une primitive de $f$, alors $F\' = f$. Toujours vérifier la cohérence.'
      ],
      piege: 'Dans la formule du quotient, bien noter $u\'v - uv\'$ (et non $uv\' - u\'v$) au numérateur.<br/><br/>L\'ordre compte ! Un moyen mnémotechnique : "c\'est le haut prime fois le bas, moins le haut fois le bas prime, le tout sur le bas au carré".'
    },
    quiz: [
      { q: 'Dériver $f(x)=x^2 e^x$', options: ['$2xe^x$', '$x^2 e^x$', '$(2x+x^2)e^x$', '$2xe^x + e^x$'], answer: 2, correction: 'On applique la <strong>règle du produit</strong> : $(uv)\' = u\'v + uv\'$.<br/><br/>$(x^2)\'e^x+x^2(e^x)\'=2xe^x+x^2 e^x=(2x+x^2)e^x$.' },
      { q: 'Un élève dérive $f(x)=\\dfrac{x^2}{x+1}$ et écrit $f\'(x)=\\dfrac{2x}{1}=2x$ en "divisant les dérivées". Quelle est son erreur ?', options: ['Il a utilisé $(u/v)\'=u\'/v\'$ (faux) ; la règle correcte donne $f\'=\\dfrac{2x(x+1)-x^2}{(x+1)^2}=\\dfrac{x^2+2x}{(x+1)^2}$', 'L\'élève a raison : $(u/v)\'=u\'/v\'$', 'La bonne formule est $(u/v)\'=\\dfrac{u\'v+uv\'}{v^2}$ (avec un $+$)', 'La dérivée de $x+1$ est $0$, pas $1$'], answer: 0, correction: 'La règle du quotient est $(u/v)\'=\\frac{u\'v-uv\'}{v^2}$.<br/><br/>Avec $u=x^2$, $u\'=2x$, $v=x+1$, $v\'=1$ : $f\'=\\frac{2x(x+1)-x^2\\cdot1}{(x+1)^2}=\\frac{2x^2+2x-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}$.<br/><br/>La règle $(u/v)\'=u\'/v\'$ <strong>n\'existe pas</strong>. Vérification : si $f(x)=\\frac{x}{x+1}$, $f\'=\\frac{1}{(x+1)^2}\\neq\\frac{1}{1}=1$.' },
      { q: 'Dériver $f(x)=(3x+1)^4$', options: ['$4(3x+1)^3$', '$12(3x+1)^3$', '$3(3x+1)^4$', '$(3x+1)^3$'], answer: 1, correction: 'On applique la <strong>règle de la chaîne</strong> : $[u^4]\'=4u^3\\cdot u\'$ avec $u=3x+1$ et $u\'=3$.<br/><br/>Donc $f\'=4\\times3\\times(3x+1)^3=12(3x+1)^3$. Ne pas oublier de multiplier par $u\'$ !' },
      { q: 'Dériver $f(x) = e^{x^2}$', options: ['$e^{x^2}$', '$2xe^{x^2}$', '$x^2 e^{x^2-1}$', '$2xe^{2x}$'], answer: 1, correction: 'C\'est une <strong>composée</strong> : la fonction extérieure est $e^u$ et la fonction intérieure est $u = x^2$.<br/><br/>$u\' = 2x$, donc $(e^{u})\' = u\' e^{u} = 2x e^{x^2}$.' },
      { q: 'Dériver $f(x) = \\ln(x^2 + 1)$', options: ['$\\dfrac{1}{x^2+1}$', '$\\dfrac{2x}{x^2+1}$', '$\\dfrac{x}{x^2+1}$', '$2x\\ln(x^2+1)$'], answer: 1, correction: 'On utilise $(\\ln u)\' = u\'/u$ avec $u = x^2+1$ et $u\' = 2x$.<br/><br/>Donc $f\'(x) = \\dfrac{2x}{x^2+1}$. L\'option A oublie de multiplier par la dérivée de l\'intérieur.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La puissance lumineuse d\'une LED est', fExpr: 'P(x)' },
          { intro: 'Le coût marginal d\'une entreprise est modélisé par', fExpr: 'C(x)' },
          { intro: 'La concentration d\'un réactif est', fExpr: 'c(t)' },
          { intro: 'L\'élongation d\'un ressort est', fExpr: 's(t)' }
        ]);
        const type = pick(['produit', 'composee']);
        if (type === 'produit') {
          const a = rand(2, 5), b = rand(1, 3);
          const x0 = rand(1, 3);
          // f(x) = (ax+b)e^x => f'(x) = ae^x + (ax+b)e^x = (ax+a+b)e^x
          const answer = parseFloat(((a * x0 + a + b) * Math.exp(x0)).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.fExpr} = (${a}x+${b})e^x$. Calculer $f'(${x0})$. Arrondir à $0{,}01$.`,
            answer: answer,
            tolerance: 0.1,
            unit: '',
            hint: `Règle du produit $(uv)' = u'v + uv'$ avec $u = ${a}x+${b}$ et $v = e^x$.`,
            solution: [
              `$u = ${a}x+${b}$, $u' = ${a}$, $v = e^x$, $v' = e^x$`,
              `$f'(x) = ${a}e^x + (${a}x+${b})e^x = (${a}x+${a+b})e^x$`,
              `$f'(${x0}) = (${a*x0+a+b}) \\times e^{${x0}} \\approx ${answer}$`
            ]
          };
        } else {
          const a = rand(2, 5), b = rand(1, 4), n = rand(2, 4);
          const answer = n * a * Math.pow(b, n - 1);
          return {
            statement: `${ctx.intro} $${ctx.fExpr} = (${a}x+${b})^{${n}}$. Calculer $f'(0)$.`,
            answer: answer,
            tolerance: 0,
            unit: '',
            hint: `$[(${a}x+${b})^{${n}}]' = ${n} \\times ${a} \\times (${a}x+${b})^{${n-1}}$. Évaluer en $x = 0$.`,
            solution: [
              `$f'(x) = ${n} \\times ${a} \\times (${a}x+${b})^{${n-1}}$`,
              `$f'(0) = ${n*a} \\times ${b}^{${n-1}} = ${answer}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'La position d\'un objet est $s(t)=\\frac{t^2}{t+1}$ (en m, $t\\ge 0$ en s).',
      tasks: [
        'Calculer $s\'(t)$ (vitesse instantanée).',
        'La vitesse est-elle croissante ?',
        'Quelle est la vitesse à $t=2$ s ?'
      ],
      solutions: [
        '$s\'(t)=\\frac{2t(t+1)-t^2\\cdot1}{(t+1)^2}=\\frac{t^2+2t}{(t+1)^2}=\\frac{t(t+2)}{(t+1)^2}$.',
        'Pour $t\\ge0$ : numérateur $\\ge0$, dénominateur $>0$, donc $s\'(t)\\ge0$ : vitesse croissante.',
        '$s\'(2)=\\frac{2\\times4}{9}=\\frac{8}{9}\\approx0{,}89$ m/s.'
      ],
      finalAnswer: '$s\'(t)=\\frac{t(t+2)}{(t+1)^2}\\ge0$ : objet en accélération. $v(2)\\approx0{,}89$ m/s.'
    },

    evaluation: {
      title: 'Évaluation — Compléments sur la dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Dériver $f(x) = x^3 e^x$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Règle du produit : $f\'(x) = 3x^2 e^x + x^3 e^x = (3x^2 + x^3)e^x = x^2(3+x)e^x$.<br/><br/>En $x = 0$ : $f\'(0) = 0^2 \\times 3 \\times e^0 = 0$.'
        },
        {
          statement: 'Quelle est la dérivée de $f(x) = \\dfrac{x}{x+1}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{(x+1)^2}$', '$\\dfrac{-1}{(x+1)^2}$', '$\\dfrac{x}{(x+1)^2}$', '$\\dfrac{1}{x+1}$'],
          answer: 0,
          points: 2,
          correction: 'On identifie $u = x$, $u\' = 1$, $v = x+1$, $v\' = 1$.<br/><br/>Règle du quotient : $f\' = \\dfrac{1 \\times (x+1) - x \\times 1}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$.'
        },
        {
          statement: 'Calculer la dérivée de $g(x) = (2x+3)^5$ en $x = -1$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Chaîne : $g\'(x) = 5 \\times 2 \\times (2x+3)^4 = 10(2x+3)^4$.<br/><br/>En $x = -1$ : $g\'(-1) = 10 \\times (2(-1)+3)^4 = 10 \\times 1^4 = 10$.'
        },
        {
          statement: 'Dériver $h(x) = \\sqrt{4x+1}$. Que vaut $h\'(2)$ ?',
          type: 'numeric',
          answer: 0.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On réécrit $h(x) = (4x+1)^{1/2}$ pour appliquer la dérivée d\'une composée.<br/><br/>$h\'(x) = \\dfrac{4}{2\\sqrt{4x+1}} = \\dfrac{2}{\\sqrt{4x+1}}$.<br/><br/>$h\'(2) = \\dfrac{2}{\\sqrt{9}} = \\dfrac{2}{3} \\approx 0{,}67$.'
        },
        {
          statement: 'Un élève dérive $\\dfrac{x^2}{\\sin x}$ en écrivant $\\dfrac{2x}{\\cos x}$. A-t-il raison ?',
          type: 'multiple-choice',
          options: ['Oui, on dérive numérateur et dénominateur séparément', 'Non : $(u/v)\' = u\'/v\'$ est faux ; il faut appliquer la règle du quotient $(u\'v - uv\')/v^2$', 'Oui, mais il faut ajouter un signe $-$', 'Non : la dérivée de $\\sin x$ est $-\\cos x$'],
          answer: 1,
          points: 2,
          correction: 'La règle $(u/v)\' = u\'/v\'$ <strong>n\'existe pas</strong>.<br/><br/>La bonne formule est la règle du quotient : $\\dfrac{u\'v - uv\'}{v^2} = \\dfrac{2x \\sin x - x^2 \\cos x}{\\sin^2 x}$.'
        }
      ]
    }
  },

    {
    id: 'tle-logarithme',
    level: 2, subject: 'maths',
    icon: '🌿',
    title: 'Fonction logarithme népérien',
    subtitle: 'Propriétés, dérivée, étude de fonctions',
    keywords: ['Logarithme', 'ln', 'Propriétés', 'Dérivée', 'Croissances comparées'],
    physics: true,
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
          '$\\ln(ab) = \\ln a + \\ln b$ pour $a,b>0$.',
          '$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$.',
          '$\\ln(a^n) = n\\ln a$.',
          'Dérivée : $(\\ln x)\'=\\frac{1}{x}$ ; plus généralement $(\\ln u)\'=\\frac{u\'}{u}$.'
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
  },

    {
    id: 'tle-convexite',
    level: 2, subject: 'maths',
    icon: '🏔️',
    title: 'Convexité',
    subtitle: 'Dérivée seconde, point d\'inflexion',
    keywords: ['Convexe', 'Concave', 'Dérivée seconde', 'Point d\'inflexion'],
    physics: false,
    cours: {
      intro: 'La <strong>convexité</strong> traduit la courbure de la courbe : une fonction convexe a ses tangentes EN-DESSOUS de la courbe (comme $x^2$, un bol), une fonction concave a ses tangentes AU-DESSUS (comme $-x^2$, un dôme).<br/><br/>La <strong>dérivée seconde</strong> $f\'\'$ mesure cette courbure : $f\'\' > 0$ = convexe, $f\'\' < 0$ = concave.<br/><br/>Un <strong>point d\'inflexion</strong> est là où la courbure change de sens, c\'est-à-dire là où $f\'\'$ change de signe.<br/><br/>Attention : $f\'\'(a) = 0$ est NÉCESSAIRE mais PAS SUFFISANT pour un point d\'inflexion. Contre-exemple classique : $f(x) = x^4$ vérifie $f\'\'(0) = 0$, mais $f\'\'(x) = 12x^2 \\geq 0$ partout — pas de changement de signe, donc $x=0$ n\'est PAS un point d\'inflexion.',
      definitions: [
        { term: 'Fonction convexe', def: '$f$ est convexe sur $I$ si sa courbe est "en forme de bol" : toute corde reliant deux points de la courbe est AU-DESSUS de la courbe. Caractérisation : $f\'\' \\geq 0$ sur $I$.' },
        { term: 'Fonction concave', def: '$f$ est concave sur $I$ si sa courbe est "en forme de dôme" : toute corde reliant deux points de la courbe est EN-DESSOUS de la courbe. Caractérisation : $f\'\' \\leq 0$ sur $I$.' },
        { term: 'Point d\'inflexion', def: 'Point de la courbe où la <strong>convexité change de sens</strong> (de convexe à concave ou l\'inverse). En ce point, $f\'\'(a) = 0$ ET $f\'\'$ change de signe. La tangente au point d\'inflexion <strong>traverse</strong> la courbe.' },
        { term: 'Dérivée seconde $f\'\'$', def: 'Dérivée de la dérivée : $f\'\' = (f\')\' $. Elle mesure le taux de variation de la pente. $f\'\' > 0$ : la pente augmente (convexe). $f\'\' < 0$ : la pente diminue (concave).' }
      ],
      method: {
        title: 'Étudier la convexité via $f\'\'$',
        steps: [
          'Calculer $f\'\'(x)$ (dérivée de la dérivée).',
          '$f\'\'(x) > 0$ sur $I$ $\\Rightarrow$ $f$ convexe sur $I$.',
          '$f\'\'(x) < 0$ sur $I$ $\\Rightarrow$ $f$ concave sur $I$.',
          'Un point d\'inflexion est un point où $f\'\'$ change de signe (et $f\'\'(x)=0$).'
        ]
      },
      example: {
        statement: 'Étudier la convexité de $f(x) = x^3 - 3x^2 + 2$ et trouver le(s) point(s) d\'inflexion.',
        steps: [
          '$f\'(x) = 3x^2 - 6x$.',
          '$f\'\'(x) = 6x - 6 = 6(x - 1)$.',
          '$f\'\'(x) = 0 \\Leftrightarrow x = 1$.',
          'Pour $x < 1$ : $f\'\'(x) < 0$ → $f$ est <strong>concave</strong>. Pour $x > 1$ : $f\'\'(x) > 0$ → $f$ est <strong>convexe</strong>.',
          '$f\'\'$ change de signe en $x = 1$ : c\'est un point d\'inflexion. $f(1) = 1 - 3 + 2 = 0$.'
        ],
        answer: 'Point d\'inflexion en $(1;0)$. $f$ est concave sur $]-\\infty;1]$ et convexe sur $[1;+\\infty[$.'
      },
      formulas: [
        '$f$ convexe $\\Leftrightarrow f\'\'\\ge 0$',
        '$f$ concave $\\Leftrightarrow f\'\'\\le 0$',
        'Point d\'inflexion : $f\'\'(a)=0$ et changement de signe de $f\'\'$'
      ],
      recap: [
        '$f\'\' > 0$ → convexe (bol / tangentes en-dessous). $f\'\' < 0$ → concave (dôme / tangentes au-dessus).',
        'Point d\'inflexion = $f\'\'$ change de signe. La condition $f\'\'(a) = 0$ est <strong>nécessaire mais pas suffisante</strong>.',
        'Contre-exemple essentiel : $f(x) = x^4$ vérifie $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout → pas de point d\'inflexion en $0$.',
        'Inégalité de convexité : si $f$ est convexe, alors $f\\left(\\dfrac{a+b}{2}\\right) \\leq \\dfrac{f(a)+f(b)}{2}$ (la courbe est sous la corde).'
      ],
      piege: 'Un zéro de $f\'\'$ n\'est pas forcément un point d\'inflexion : il faut vérifier le <strong>changement de signe</strong>.<br/><br/>Par exemple, $f(x)=x^4$ a $f\'\'(0)=0$ mais $f\'\'(x) = 12x^2 \\geq 0$ ne change pas de signe en $0$.'
    },
    quiz: [
      { q: 'Si $f\'\'(x) > 0$ sur $[a;b]$, la courbe de $f$ est :', options: ['Concave', 'Convexe', 'Décroissante', 'Constante'], answer: 1, correction: '$f\'\'>0 \\Rightarrow$ <strong>convexe</strong> (tournée vers le haut, comme $x^2$).<br/><br/>Les tangentes sont en-dessous de la courbe et la pente est croissante.' },
      { q: 'Pour $f(x)=x^3$, $f\'\'(x)=$ ?', options: ['$3x$', '$6x$', '$3x^2$', '$x^2$'], answer: 1, correction: 'On dérive deux fois : $f\'(x)=3x^2$, puis $f\'\'(x)=6x$.<br/><br/>On remarque que $f\'\'(0)=0$ et $f\'\'$ change de signe en $0$ : c\'est un point d\'inflexion de $x^3$.' },
      { q: '$f(x)=x^4$ vérifie $f\'\'(0)=12\\times0^2=0$. Un élève conclut que $x=0$ est un point d\'inflexion. A-t-il raison ?', options: ['Non : $f\'\'(x)=12x^2\\ge0$ partout et ne change pas de signe en $0$ : ce n\'est PAS un point d\'inflexion', 'Oui : $f\'\'(0)=0$ implique toujours un point d\'inflexion', 'Oui : $x=0$ est le minimum de $f$, donc c\'est un point d\'inflexion', 'Impossible à dire sans calculer $f\'\'\'(0)$'], answer: 0, correction: 'La condition $f\'\'(a)=0$ est <strong>NÉCESSAIRE mais pas SUFFISANTE</strong> pour un point d\'inflexion. Il faut aussi que $f\'\'$ <strong>change de signe</strong> autour de $a$.<br/><br/>Ici $f\'\'(x)=12x^2\\ge0$ pour tout $x$ : jamais négatif, donc pas de changement de signe en $0$. Le point $(0;0)$ est un minimum, pas un inflexion.<br/><br/>Comparer avec $f(x)=x^3$ où $f\'\'(0)=0$ ET $f\'\'$ change de signe : là c\'est bien un inflexion.' },
      { q: 'La fonction $\\ln(x)$ est convexe ou concave sur $]0;+\\infty[$ ?', options: ['Convexe car $\\ln$ est croissante', 'Concave car $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$', 'Ni l\'un ni l\'autre', 'Convexe sur $]0;1]$ et concave sur $[1;+\\infty[$'], answer: 1, correction: '$(\\ln x)\' = 1/x$ et $(\\ln x)\'\' = -1/x^2 < 0$ pour tout $x > 0$.<br/><br/>Donc $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$ : ses tangentes sont toujours au-dessus de la courbe. Croissance et convexité sont deux notions différentes !' },
      { q: 'Au point d\'inflexion, la tangente :', options: ['Est horizontale', 'Traverse la courbe (passe de dessous à dessus ou inversement)', 'Est verticale', 'Ne touche pas la courbe'], answer: 1, correction: 'Au point d\'inflexion, la convexité change : la tangente passe de "en-dessous" (convexe) à "au-dessus" (concave) ou inversement.<br/><br/>Elle <strong>traverse</strong> la courbe en ce point. Attention : la tangente n\'est pas forcément horizontale au point d\'inflexion !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Le coût de production d\'une usine (en milliers d\'euros) est', varName: 'q', varLabel: 'quantité produite' },
          { intro: 'La position d\'un mobile le long d\'un axe (en m) est', varName: 't', varLabel: 'temps en s' },
          { intro: 'La température d\'un four de cuisson (en °C) est', varName: 't', varLabel: 'temps en min' },
          { intro: 'Le bénéfice d\'une start-up (en k€) est modélisé par', varName: 'x', varLabel: 'mois' }
        ]);
        const a = rand(1, 4), b = rand(2, 6);
        // f(x) = ax^3 - bx^2, f'' = 6ax - 2b, inflexion at x = b/(3a)
        const inflX = parseFloat((b / (3 * a)).toFixed(2));
        return {
          statement: `${ctx.intro} $f(${ctx.varName}) = ${a}${ctx.varName}^3 - ${b}${ctx.varName}^2$. Déterminer l'abscisse du point d'inflexion. Arrondir à $0{,}01$.`,
          answer: inflX,
          tolerance: 0.05,
          unit: '',
          hint: `Calcule $f''(${ctx.varName})$ et résous $f'' = 0$. Vérifie que $f''$ change bien de signe.`,
          solution: [
            `$f'(${ctx.varName}) = ${3*a}${ctx.varName}^2 - ${2*b}${ctx.varName}$`,
            `$f''(${ctx.varName}) = ${6*a}${ctx.varName} - ${2*b}$`,
            `$f'' = 0 \\Leftrightarrow ${ctx.varName} = \\dfrac{${2*b}}{${6*a}} = ${inflX}$`,
            `$f''$ passe de négatif à positif en $${ctx.varName} = ${inflX}$ : c'est bien un point d'inflexion.`
          ]
        };
      }
    },
    probleme: {
      context: 'La hauteur d\'eau dans un réservoir est $h(t)=t^3-6t^2+9t$ (en m, $t$ en h, $t\\in[0;4]$).',
      tasks: [
        'Calculer $h\'(t)$ et $h\'\'(t)$.',
        'Sur quel intervalle le niveau monte-t-il de façon convexe (accélération positive) ?',
        'Quel est le point d\'inflexion ?'
      ],
      solutions: [
        '$h\'(t)=3t^2-12t+9$ ; $h\'\'(t)=6t-12$.',
        '$h\'\'>0 \\Leftrightarrow 6t-12>0 \\Leftrightarrow t>2$ : convexe sur $[2;4]$.',
        '$h\'\'(t)=0 \\Rightarrow t=2$ ; $h\'\'$ change de signe : point d\'inflexion en $t=2$, $h(2)=8-24+18=2$ m.'
      ],
      finalAnswer: 'Point d\'inflexion en $(2;2)$. Convexe sur $[2;4]$.'
    },

    evaluation: {
      title: 'Évaluation — Convexité',
      duration: '30 min',
      questions: [
        {
          statement: 'Soit $f(x) = x^3 - 3x$. Calculer $f\'\'(x)$.',
          type: 'multiple-choice',
          options: ['$3x^2 - 3$', '$6x$', '$6$', '$3x$'],
          answer: 1,
          points: 2,
          correction: 'On dérive deux fois :<br/><br/>$f\'(x) = 3x^2 - 3$, puis $f\'\'(x) = 6x$.'
        },
        {
          statement: 'Pour $f(x) = e^x$, la fonction est convexe sur $\\mathbb{R}$. Vrai ou faux ?',
          type: 'multiple-choice',
          options: ['Vrai : $f\'\'(x) = e^x > 0$ pour tout $x$', 'Faux : $e^x$ est concave', 'Vrai seulement pour $x > 0$', 'Faux : $e^x$ n\'a pas de dérivée seconde'],
          answer: 0,
          points: 2,
          correction: '$f\'(x) = e^x$, $f\'\'(x) = e^x > 0$ pour tout $x \\in \\mathbb{R}$.<br/><br/>Comme la dérivée seconde est strictement positive partout, $f$ est <strong>convexe</strong> sur $\\mathbb{R}$ entier.'
        },
        {
          statement: 'Soit $f(x) = x^4 - 6x^2$. Déterminer l\'abscisse du (des) point(s) d\'inflexion. Donner la plus petite valeur.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$.<br/><br/>$f\'\'(x) = 0 \\Leftrightarrow x = -1$ ou $x = 1$. $f\'\'$ change de signe en chacune de ces valeurs : ce sont deux <strong>points d\'inflexion</strong>.<br/><br/>La plus petite abscisse est $x = -1$.'
        },
        {
          statement: 'Si $f\'\'(a) = 0$ mais $f\'\'$ ne change pas de signe en $a$, alors $a$ est :',
          type: 'multiple-choice',
          options: ['Un point d\'inflexion', 'Pas un point d\'inflexion', 'Un maximum local', 'Un minimum local'],
          answer: 1,
          points: 2,
          correction: 'Un point d\'inflexion nécessite un <strong>changement de signe</strong> de $f\'\'$.<br/><br/>Si $f\'\'(a) = 0$ sans changement de signe, $a$ n\'est pas un point d\'inflexion.<br/><br/>Exemple classique : $f(x) = x^4$, $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout.'
        },
        {
          statement: 'Soit $g(x) = \\ln(x)$ pour $x > 0$. Calculer $g\'\'(1)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g\'(x) = \\dfrac{1}{x}$, puis $g\'\'(x) = -\\dfrac{1}{x^2}$.<br/><br/>$g\'\'(1) = -\\dfrac{1}{1} = -1$.<br/><br/>Comme $g\'\'(x) < 0$ pour tout $x > 0$, $\\ln$ est <strong>concave</strong> sur $]0;+\\infty[$.'
        }
      ]
    }
  },

    {
    id: 'tle-suites-complements',
    level: 2, subject: 'maths',
    icon: '🔗',
    title: 'Suites — compléments',
    subtitle: 'Récurrence, limites, raisonnement par récurrence',
    keywords: ['Suite', 'Récurrence', 'Limite', 'Raisonnement par récurrence', 'Monotonie'],
    physics: false,
    cours: {
      intro: 'Le <strong>raisonnement par récurrence</strong> est une "échelle infinie" : si le premier barreau tient (initialisation au rang $n_0$) ET si chaque barreau tient le suivant (hérédité : rang $n$ → rang $n+1$), alors toute l\'échelle est solide.<br/><br/>Les deux étapes sont indispensables : l\'hérédité seule ne suffit pas (on ne monterait pas l\'échelle si le premier barreau est absent).<br/><br/>Dans l\'hérédité, on <strong>SUPPOSE</strong> la propriété vraie au rang $n$ — c\'est l\'hypothèse de récurrence, on ne la démontre pas, on l\'utilise.<br/><br/>Pour les suites définies par $u_{n+1}=f(u_n)$, si la suite converge vers $\\ell$, alors $\\ell$ est un <strong>point fixe</strong> : $\\ell = f(\\ell)$.<br/><br/>Attention : résoudre $\\ell = f(\\ell)$ donne les candidats, mais la convergence doit être prouvée séparément (monotonie + bornage).',
      definitions: [
        { term: 'Raisonnement par récurrence', def: 'Méthode de démonstration en deux étapes : <strong>initialisation</strong> (vérifier $P(n_0)$) et <strong>hérédité</strong> (prouver que $P(n) \\Rightarrow P(n+1)$). Conclusion : la propriété est vraie pour tout $n \\geq n_0$.' },
        { term: 'Suite convergente', def: 'Suite $(u_n)$ telle que $\\lim_{n \\to +\\infty} u_n = \\ell \\in \\mathbb{R}$. Théorème fondamental : toute suite <strong>croissante majorée</strong> (ou décroissante minorée) converge.' },
        { term: 'Point fixe', def: 'Si $(u_n)$ converge vers $\\ell$ et $u_{n+1} = f(u_n)$ avec $f$ continue, alors $\\ell = f(\\ell)$. Résoudre cette équation donne les <strong>candidats</strong> à la limite.' },
        { term: 'Suite auxiliaire', def: 'Pour étudier $u_{n+1} = au_n + b$, on pose $v_n = u_n - \\ell$ (avec $\\ell$ point fixe). Alors $(v_n)$ est géométrique de raison $a$, ce qui permet de trouver $u_n$ explicitement.' }
      ],
      method: {
        title: 'Raisonnement par récurrence',
        steps: [
          'Initialisation : vérifier la propriété pour le rang de départ (souvent $n=0$ ou $n=1$).',
          'Hérédité : supposer la propriété vraie au rang $n$ et montrer qu\'elle est vraie au rang $n+1$.',
          'Conclusion : par le principe de récurrence, la propriété est vraie pour tout $n$.',
          'Pour les suites monotones : étudier le signe de $u_{n+1}-u_n$.'
        ]
      },
      example: {
        statement: 'Soit la suite définie par $u_0 = 5$ et $u_{n+1} = \\dfrac{1}{2}u_n + 3$. Déterminer la limite de $(u_n)$.',
        steps: [
          'On cherche le point fixe : $\\ell = \\dfrac{1}{2}\\ell + 3 \\Rightarrow \\dfrac{1}{2}\\ell = 3 \\Rightarrow \\ell = 6$.',
          'On pose $v_n = u_n - 6$. Alors $v_{n+1} = u_{n+1} - 6 = \\dfrac{1}{2}u_n + 3 - 6 = \\dfrac{1}{2}(u_n - 6) = \\dfrac{1}{2}v_n$.',
          '$(v_n)$ est géométrique de raison $q = \\dfrac{1}{2}$ et de premier terme $v_0 = 5 - 6 = -1$.',
          '$v_n = -1 \\times \\left(\\dfrac{1}{2}\\right)^n$, donc $u_n = 6 - \\left(\\dfrac{1}{2}\\right)^n$.',
          'Comme $|q| = \\dfrac{1}{2} < 1$ : $v_n \\to 0$, donc $u_n \\to 6$.'
        ],
        answer: '$\\lim_{n \\to +\\infty} u_n = 6$. La suite est croissante (car $u_0 = 5 < 6 = \\ell$) et majorée par $6$.'
      },
      formulas: [
        'Suite arithmétique : $u_n = u_0 + nr$',
        'Suite géométrique : $u_n = u_0 \\cdot q^n$',
        '$\\lim_{n\\to+\\infty} q^n = 0$ si $|q|<1$',
        '$\\lim_{n\\to+\\infty} q^n = +\\infty$ si $q>1$'
      ],
      recap: [
        'Récurrence = initialisation + hérédité. Les deux étapes sont <strong>indispensables</strong>.',
        'Suite croissante et majorée → converge. Suite décroissante et minorée → converge. Théorème de la limite monotone.',
        'Si $u_{n+1} = f(u_n)$ converge vers $\\ell$, alors $\\ell = f(\\ell)$ (point fixe). Utiliser la suite auxiliaire $v_n = u_n - \\ell$ pour obtenir une suite géométrique.',
        '$|q| < 1 \\Rightarrow q^n \\to 0$, $q > 1 \\Rightarrow q^n \\to +\\infty$, $q = 1 \\Rightarrow q^n = 1$, $q \\leq -1 \\Rightarrow (q^n)$ diverge.'
      ],
      piege: 'L\'hérédité <strong>suppose</strong> la propriété au rang $n$ (hypothèse de récurrence) : elle ne se démontre pas, elle s\'utilise !<br/><br/>Ne pas confondre "supposer" et "montrer". L\'objectif de l\'hérédité est de prouver $P(n+1)$ en utilisant $P(n)$ comme hypothèse.'
    },
    quiz: [
      { q: 'Pour la suite géométrique $u_n=3\\times2^n$, $\\lim_{n\\to+\\infty}u_n=$ ?', options: ['$0$', '$3$', '$+\\infty$', '$6$'], answer: 2, correction: 'La raison est $q=2>1$, donc $2^n\\to+\\infty$ quand $n \\to +\\infty$.<br/><br/>Par conséquent $u_n = 3 \\times 2^n \\to +\\infty$. La suite diverge vers $+\\infty$.' },
      { q: 'Un élève veut prouver par récurrence que $u_n>0$ pour tout $n\\ge0$. Il prouve l\'hérédité (si $u_n>0$ alors $u_{n+1}>0$) mais oublie l\'initialisation. Sa démonstration est-elle valide ?', options: ['Non : sans initialisation, la chaîne n\'a pas de point de départ et la démonstration est invalide', 'Oui : si l\'hérédité est prouvée, la propriété est vraie pour tout $n$', 'Oui : l\'initialisation n\'est utile que si $u_0=0$', 'Cela dépend de $u_0$ : si $u_0>0$ est donné dans l\'énoncé, l\'initialisation est automatiquement satisfaite'], answer: 0, correction: 'Sans initialisation, la récurrence ne "démarre" pas.<br/><br/>L\'option D est séduisante : $u_0>0$ peut être donné dans l\'énoncé — mais l\'élève doit <strong>EXPLICITEMENT</strong> vérifier le cas de base dans sa démonstration.<br/><br/>Par analogie : l\'hérédité dit "si le barreau $n$ tient, le barreau $n+1$ tient" — mais si aucun barreau de départ n\'est posé, l\'argument ne prouve rien.' },
      { q: '$u_{n+1}-u_n>0$ pour tout $n$ signifie que la suite est :', options: ['Décroissante', 'Constante', 'Croissante', 'Nulle'], answer: 2, correction: '$u_{n+1}-u_n>0$ signifie $u_{n+1}>u_n$ pour tout $n$ : chaque terme est supérieur au précédent.<br/><br/>La suite est donc <strong>strictement croissante</strong>.' },
      { q: 'La suite $u_{n+1} = \\dfrac{u_n}{3} + 4$ converge vers $\\ell$. Que vaut $\\ell$ ?', options: ['$4$', '$6$', '$12$', '$3$'], answer: 1, correction: 'Si la suite converge vers $\\ell$, alors à la limite $u_{n+1} = u_n = \\ell$ :<br/><br/>$\\ell = \\dfrac{\\ell}{3} + 4 \\Rightarrow \\ell - \\dfrac{\\ell}{3} = 4 \\Rightarrow \\dfrac{2\\ell}{3} = 4 \\Rightarrow \\ell = 6$.' },
      { q: 'La suite $u_n = (-1)^n$ est-elle convergente ?', options: ['Oui, vers $0$ (la moyenne de $1$ et $-1$)', 'Oui, vers $1$', 'Non, elle oscille entre $1$ et $-1$ sans se stabiliser', 'Oui, vers $-1$'], answer: 2, correction: '$u_n$ alterne entre $1$ (rang pair) et $-1$ (rang impair) : elle ne se rapproche d\'aucune valeur fixe.<br/><br/>La suite <strong>diverge</strong>, mais elle est bornée. Cela montre qu\'une suite bornée n\'est pas forcément convergente !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Chaque année, une entreprise augmente son capital de', unite: '€' },
          { intro: 'Un lac perd chaque mois une fraction de son volume d\'eau de', unite: 'L' },
          { intro: 'Une colonie de fourmis voit sa population multipliée par', unite: 'individus' },
          { intro: 'La concentration d\'un médicament dans le sang est divisée par', unite: 'mg/L' }
        ]);
        const u0 = rand(1, 8);
        const a = pick([2, 3, 4, 5]);
        const b = rand(1, 5);
        // u_{n+1} = u_n/a + b => l = ab/(a-1)
        const l = parseFloat((a * b / (a - 1)).toFixed(2));
        return {
          statement: `Soit la suite définie par $u_0 = ${u0}$ et $u_{n+1} = \\dfrac{u_n}{${a}} + ${b}$. Si cette suite converge, calculer sa limite $\\ell$. Arrondir à $0{,}01$.`,
          answer: l,
          tolerance: 0.05,
          unit: '',
          hint: `Si la suite converge vers $\\ell$, alors $\\ell = \\dfrac{\\ell}{${a}} + ${b}$. Résous cette équation.`,
          solution: [
            `$\\ell = \\dfrac{\\ell}{${a}} + ${b}$`,
            `$\\ell - \\dfrac{\\ell}{${a}} = ${b} \\Rightarrow \\dfrac{${a-1}\\ell}{${a}} = ${b}$`,
            `$\\ell = \\dfrac{${a} \\times ${b}}{${a-1}} = ${l}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une suite est définie par $u_0=1$ et $u_{n+1}=\\frac{u_n}{2}+1$ pour tout $n\\ge0$.',
      tasks: [
        'Calculer $u_1$, $u_2$, $u_3$.',
        'Conjecturer la limite de $(u_n)$.',
        'Vérifier que la suite est croissante et majorée par $2$.'
      ],
      solutions: [
        '$u_1=\\frac{1}{2}+1=1{,}5$ ; $u_2=\\frac{1{,}5}{2}+1=1{,}75$ ; $u_3=\\frac{1{,}75}{2}+1=1{,}875$.',
        'Les termes semblent converger vers $l=2$ (résoudre $l=l/2+1 \\Rightarrow l=2$).',
        'Si $u_n<2$, alors $u_{n+1}=u_n/2+1<1+1=2$ (majorée). $u_{n+1}-u_n=1-u_n/2>0$ si $u_n<2$ (croissante).'
      ],
      finalAnswer: 'Suite croissante majorée par $2$ : elle converge vers $2$.'
    },

    evaluation: {
      title: 'Évaluation — Suites compléments',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 3$ et de raison $q = 0{,}5$. Calculer $u_5$.',
          type: 'numeric',
          answer: 0.09375,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On applique la formule du terme général d\'une suite géométrique :<br/><br/>$u_5 = u_0 \\times q^5 = 3 \\times (0{,}5)^5 = 3 \\times \\dfrac{1}{32} = \\dfrac{3}{32} = 0{,}09375$.'
        },
        {
          statement: 'Soit $(u_n)$ géométrique avec $|q| < 1$. Quelle est $\\lim_{n \\to +\\infty} u_n$ ?',
          type: 'multiple-choice',
          options: ['$+\\infty$', '$0$', '$u_0$', '$q$'],
          answer: 1,
          points: 2,
          correction: 'Si $|q|<1$, alors $q^n \\to 0$ quand $n \\to +\\infty$. Donc $u_n = u_0 q^n \\to 0$.'
        },
        {
          statement: 'Soit la suite arithmétique $u_0 = 2$, $r = 3$. Calculer $S = u_0 + u_1 + \\cdots + u_{10}$.',
          type: 'numeric',
          answer: 187,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$u_{10} = 2 + 10 \\times 3 = 32$. $S = \\dfrac{(10+1)(u_0 + u_{10})}{2} = \\dfrac{11 \\times 34}{2} = \\dfrac{374}{2} = 187$.'
        },
        {
          statement: 'Quelle est l\'étape manquante dans un raisonnement par récurrence si l\'on prouve uniquement l\'hérédité ?',
          type: 'multiple-choice',
          options: ['La conclusion', 'L\'initialisation (vérification au rang de départ)', 'La vérification au rang $n+2$', 'Le calcul de la limite'],
          answer: 1,
          points: 2,
          correction: 'Un raisonnement par récurrence nécessite deux étapes : l\'initialisation (vérifier la propriété au rang de départ) et l\'hérédité (si vrai au rang $n$, alors vrai au rang $n+1$). Sans initialisation, la démonstration est incomplète.'
        },
        {
          statement: 'Soit $u_0 = 1$ et $u_{n+1} = \\dfrac{u_n}{3} + 2$. Si la suite converge, sa limite $\\ell$ vaut :',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si $(u_n)$ converge vers $\\ell$, alors $\\ell = \\dfrac{\\ell}{3} + 2$, soit $\\ell - \\dfrac{\\ell}{3} = 2$, $\\dfrac{2\\ell}{3} = 2$, $\\ell = 3$.'
        }
      ]
    }
  },

    {
    id: 'tle-denombrement',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Dénombrement et combinatoire',
    subtitle: 'Arrangements, permutations, combinaisons',
    keywords: ['Combinatoire', 'Arrangements', 'Permutations', 'Combinaisons', 'Coefficient binomial'],
    physics: false,
    cours: {
      intro: 'Le dénombrement répond à "combien de façons ?" La clé est de savoir si l\'ordre compte. Quand l\'ordre compte (podium, code PIN, anagramme) → arrangements. Quand l\'ordre ne compte pas (comité, main de cartes, groupe de travail) → combinaisons. La formule $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ donne le nombre de façons de choisir $k$ éléments parmi $n$ sans tenir compte de l\'ordre. Erreur classique : calculer $n \\times (n-1) \\times \\cdots$ (arrangement) sans diviser par $k!$ pour les combinaisons. $\\binom{10}{3} = 720/6 = 120$ et non $720$. Propriété utile : $\\binom{n}{k} = \\binom{n}{n-k}$ (choisir $k$ éléments revient à exclure $n-k$ éléments).',
      definitions: [
        { term: 'Factorielle $n!$', def: '$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$. Convention : $0! = 1$. Interprétation : $n!$ est le nombre de façons d\'ordonner $n$ objets distincts (permutations).' },
        { term: 'Arrangement $A_n^k$', def: 'Nombre de façons de choisir et <strong>ordonner</strong> $k$ éléments parmi $n$ : $A_n^k = \\dfrac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$. L\'ordre compte.' },
        { term: 'Combinaison $\\binom{n}{k}$', def: 'Nombre de façons de choisir $k$ éléments parmi $n$ <strong>sans tenir compte de l\'ordre</strong> : $\\binom{n}{k} = \\dfrac{A_n^k}{k!} = \\dfrac{n!}{k!(n-k)!}$.' },
        { term: 'Formule du binôme de Newton', def: '$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$. Les coefficients $\\binom{n}{k}$ apparaissent dans le triangle de Pascal.' }
      ],
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          'Arrangements de $k$ éléments parmi $n$ (ordre compte, sans remise) : $A_n^k = \\frac{n!}{(n-k)!}$.',
          'Permutations de $n$ éléments : $n!$.',
          'Combinaisons de $k$ éléments parmi $n$ (ordre ne compte pas) : $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$.',
          'Règle du produit : si un choix comporte $p$ façons puis $q$ façons, le total est $p\\times q$.'
        ]
      },
      example: {
        statement: 'Au loto, on tire $5$ numéros parmi $49$ (l\'ordre ne compte pas). Combien de combinaisons possibles ?',
        steps: [
          'L\'ordre ne compte pas : c\'est une combinaison, pas un arrangement.',
          '$\\binom{49}{5} = \\dfrac{49!}{5! \\times 44!} = \\dfrac{49 \\times 48 \\times 47 \\times 46 \\times 45}{5!}$.',
          'Numérateur : $49 \\times 48 \\times 47 \\times 46 \\times 45 = 228\\,673\\,200$.',
          'Dénominateur : $5! = 120$.',
          '$\\binom{49}{5} = \\dfrac{228\\,673\\,200}{120} = 1\\,906\\,884$.'
        ],
        answer: '$\\binom{49}{5} = 1\\,906\\,884$ combinaisons possibles. La probabilité de gagner est d\'environ $1$ chance sur $1{,}9$ million.'
      },
      formulas: [
        '$n! = n\\times(n-1)\\times\\cdots\\times1$',
        '$A_n^k = \\dfrac{n!}{(n-k)!}$',
        '$\\dbinom{n}{k}=\\dfrac{n!}{k!(n-k)!}$',
        '$\\dbinom{n}{k}=\\dbinom{n}{n-k}$'
      ],
      recap: [
        'Question clé : <strong>l\'ordre compte-t-il ?</strong> Oui → arrangement ($A_n^k$). Non → combinaison ($\\binom{n}{k}$).',
        '$\\binom{n}{k} = \\binom{n}{n-k}$ : choisir $k$ éléments revient à exclure $n-k$ éléments.',
        'Règle du produit (principe multiplicatif) : si une opération comporte $p$ étapes avec $n_1, n_2, \\ldots, n_p$ choix, le total est $n_1 \\times n_2 \\times \\cdots \\times n_p$.',
        'Triangle de Pascal : $\\binom{n+1}{k} = \\binom{n}{k-1} + \\binom{n}{k}$. Chaque coefficient est la somme des deux au-dessus.'
      ],
      piege: 'Ne pas confondre arrangements et combinaisons. Former un comité (ordre non important) → combinaisons. Classer des coureurs (ordre important) → arrangements.'
    },
    quiz: [
      { q: '$\\binom{5}{2}=$ ?', options: ['$20$', '$10$', '$5$', '$2$'], answer: 1, correction: '$\\binom{5}{2}=\\frac{5!}{2!3!}=\\frac{5\\times4}{2}=10$.' },
      { q: 'Combien de mots de 3 lettres (distinctes) peut-on former avec les 26 lettres de l\'alphabet ?', options: ['$17576$', '$15600$', '$78$', '$1716$'], answer: 1, correction: '$A_{26}^3=26\\times25\\times24=15600$.' },
      { q: 'Pour choisir $3$ personnes parmi $10$ pour un comité (sans rôle attribué), un élève calcule $10\\times9\\times8=720$. Quelle est son erreur ?', options: ['Il a compté les ARRANGEMENTS ($A_{10}^3=720$) ; pour un comité (ordre non important), il faut diviser par $3!=6$ : $\\binom{10}{3}=120$', 'L\'élève a raison : $10\\times9\\times8=720$', 'Il aurait dû calculer $10\\times9\\times8\\times7$ (4 étapes pour 3 personnes)', 'La bonne formule est $3!=6$'], answer: 0, correction: '$10\\times9\\times8 = A_{10}^3 = 720$ compte les arrangements ordonnés : le groupe $\\{Alice, Bob, Claire\\}$ est compté $3!=6$ fois. Comme dans un comité l\'ordre ne compte pas, on divise par $6$ : $\\binom{10}{3}=720/6=120$. Règle clé : ordre important → arrangement ; ordre non important → combinaison ($\\div k!$).' },
      { q: '$\\binom{100}{98}$ vaut :', options: ['$\\dfrac{100!}{98!}$', '$4950$', '$100 \\times 99 = 9900$', '$\\dfrac{100!}{98! \\times 2!} = 4950$'], answer: 3, correction: 'Par symétrie : $\\binom{100}{98} = \\binom{100}{2} = \\dfrac{100 \\times 99}{2} = 4950$. Choisir $98$ éléments parmi $100$, c\'est exclure $2$ éléments parmi $100$.' },
      { q: 'Combien de mots de passe de $4$ chiffres (avec répétition possible) peut-on former ?', options: ['$5040$', '$10\\,000$', '$10^{10}$', '$\\binom{10}{4} = 210$'], answer: 1, correction: 'Avec répétition : chaque position a $10$ choix (de $0$ à $9$). Par le principe multiplicatif : $10^4 = 10\\,000$. La combinaison $\\binom{10}{4}$ ne s\'applique pas car la répétition est autorisée et l\'ordre compte.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Une classe de', elem: 'élèves', action: 'former une équipe de', unite: 'élèves pour un projet scientifique' },
          { intro: 'Un panier contient', elem: 'fruits différents', action: 'choisir', unite: 'fruits pour une salade' },
          { intro: 'Un club sportif compte', elem: 'joueurs', action: 'sélectionner', unite: 'titulaires pour un match' },
          { intro: 'Un jury doit être composé de', elem: 'candidats potentiels', action: 'retenir', unite: 'membres' }
        ]);
        const n = rand(8, 15), k = rand(3, 5);
        let num = 1, denom = 1;
        for (let i = 0; i < k; i++) { num *= (n - i); denom *= (i + 1); }
        const result = num / denom;
        return {
          statement: `${ctx.intro} $${n}$ ${ctx.elem}. On souhaite ${ctx.action} $${k}$ ${ctx.unite} (l'ordre ne compte pas). Combien de choix possibles ?`,
          answer: result,
          tolerance: 0,
          unit: '',
          hint: `L'ordre ne compte pas → combinaison. $\\binom{${n}}{${k}} = \\dfrac{${Array.from({length:k},(_,i)=>n-i).join(' \\times ')}}{${k}!}$.`,
          solution: [
            `L'ordre ne compte pas : c'est une combinaison.`,
            `$\\binom{${n}}{${k}} = \\dfrac{${Array.from({length:k},(_,i)=>n-i).join(' \\times ')}}{${k}!} = \\dfrac{${num}}{${denom}}$`,
            `$\\binom{${n}}{${k}} = ${result}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Une classe de $20$ élèves doit former un groupe de $4$ élèves pour un projet, puis désigner parmi eux un chef de projet et un secrétaire.',
      tasks: [
        'Combien de groupes de $4$ élèves peut-on former ?',
        'Pour un groupe donné, combien de façons de désigner chef et secrétaire ?',
        'Combien de façons au total (groupe + rôles) ?'
      ],
      solutions: [
        '$\\binom{20}{4}=\\frac{20\\times19\\times18\\times17}{4!}=\\frac{116280}{24}=4845$.',
        '$A_4^2=4\\times3=12$ façons.',
        '$4845\\times12=58140$ façons.'
      ],
      finalAnswer: '$4845$ groupes ; $12$ attributions de rôles ; $58140$ façons au total.'
    },

    evaluation: {
      title: 'Évaluation — Dénombrement et combinatoire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\binom{8}{3}$.',
          type: 'numeric',
          answer: 56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\binom{8}{3} = \\dfrac{8!}{3! \\times 5!} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\dfrac{336}{6} = 56$.'
        },
        {
          statement: 'Un code est formé de $4$ chiffres distincts parmi $\\{0;1;2;\\ldots;9\\}$. Combien de codes peut-on former ?',
          type: 'numeric',
          answer: 5040,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'ordre compte (code) et les chiffres sont distincts : c\'est un arrangement. $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$.'
        },
        {
          statement: 'Quelle est la valeur de $\\binom{n}{0}$ pour tout entier $n \\geq 0$ ?',
          type: 'multiple-choice',
          options: ['$0$', '$1$', '$n$', '$n!$'],
          answer: 1,
          points: 2,
          correction: '$\\binom{n}{0} = \\dfrac{n!}{0! \\times n!} = \\dfrac{1}{1} = 1$. Il n\'y a qu\'une seule façon de choisir $0$ élément : ne rien prendre.'
        },
        {
          statement: 'Combien de façons y a-t-il de répartir $12$ élèves en un groupe de $5$ et un groupe de $7$ ?',
          type: 'numeric',
          answer: 792,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Choisir le groupe de $5$ détermine automatiquement le groupe de $7$. Donc $\\binom{12}{5} = \\dfrac{12!}{5! \\times 7!} = \\dfrac{12 \\times 11 \\times 10 \\times 9 \\times 8}{120} = \\dfrac{95040}{120} = 792$.'
        },
        {
          statement: 'Lequel est un arrangement et non une combinaison ?',
          type: 'multiple-choice',
          options: ['Choisir $3$ fruits dans un panier de $10$', 'Constituer un podium (1er, 2e, 3e) parmi $8$ coureurs', 'Former un comité de $4$ membres parmi $15$', 'Tirer $5$ boules dans une urne'],
          answer: 1,
          points: 2,
          correction: 'Le podium attribue des rangs (1er, 2e, 3e) : l\'ordre compte, c\'est un arrangement. Les autres choix (fruits, comité, boules) ne tiennent pas compte de l\'ordre : ce sont des combinaisons.'
        }
      ]
    }
  },

    {
    id: 'tle-lois-continues',
    level: 2, subject: 'maths',
    icon: '🔔',
    title: 'Lois de probabilité continues',
    subtitle: 'Loi uniforme, loi normale',
    keywords: ['Loi normale', 'Loi uniforme', 'Densité', 'Espérance', 'Écart-type'],
    physics: true,
    cours: {
      intro: 'Pour une loi CONTINUE, la probabilité d\'une valeur EXACTE est nulle : $P(X = 5) = 0$ (on ne peut pas mesurer précisément un point sur une courbe). On calcule uniquement des probabilités sur des intervalles : $P(a \\leq X \\leq b)$ = aire sous la courbe de densité entre $a$ et $b$. La loi normale $\\mathcal{N}(\\mu;\\sigma^2)$ est symétrique autour de $\\mu$ : $P(X \\leq \\mu) = 0{,}5$ exactement. La règle des $2\\sigma$ donne $P(\\mu-2\\sigma \\leq X \\leq \\mu+2\\sigma) \\approx 0{,}954$. Piège classique : en déduire $P(X \\leq \\mu-2\\sigma) \\approx 0{,}046$ en oubliant de diviser par $2$ — la bonne valeur est $(1-0{,}954)/2 \\approx 0{,}023$ par symétrie.',
      definitions: [
        { term: 'Variable aléatoire continue', def: 'Variable $X$ pouvant prendre toute valeur dans un intervalle. Sa loi est définie par une <strong>fonction de densité</strong> $f$ telle que $P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$.' },
        { term: 'Loi normale $\\mathcal{N}(\\mu;\\sigma^2)$', def: 'Loi continue symétrique en cloche autour de $\\mu$ (espérance), d\'écart-type $\\sigma$. C\'est la loi la plus importante en statistique : par le théorème central limite, la moyenne de nombreuses mesures suit approximativement une loi normale.' },
        { term: 'Loi uniforme sur $[a;b]$', def: 'Toutes les valeurs dans $[a;b]$ sont équiprobables. Densité constante $f(x) = \\dfrac{1}{b-a}$. Espérance $E(X) = \\dfrac{a+b}{2}$, variance $V(X) = \\dfrac{(b-a)^2}{12}$.' },
        { term: 'Centrage-réduction', def: 'La transformation $Z = \\dfrac{X - \\mu}{\\sigma}$ ramène toute loi $\\mathcal{N}(\\mu;\\sigma^2)$ à la loi $\\mathcal{N}(0;1)$. On peut alors utiliser les tables ou la calculatrice.' }
      ],
      method: {
        title: 'Utiliser la loi normale',
        steps: [
          'Paramètres : $\\mu$ (espérance/moyenne) et $\\sigma$ (écart-type).',
          'Loi normale centrée réduite : $Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathcal{N}(0;1)$.',
          'Règle des $3\\sigma$ : $P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$.',
          'Règle des $2\\sigma$ : $P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$.'
        ]
      },
      example: {
        statement: 'La durée de vie d\'une ampoule LED suit une loi normale $\\mathcal{N}(20000;2000^2)$ (en heures). Quelle est la probabilité qu\'une ampoule dure entre $16000$ et $24000$ heures ?',
        steps: [
          'On identifie $\\mu = 20000$ et $\\sigma = 2000$.',
          '$16000 = 20000 - 2 \\times 2000 = \\mu - 2\\sigma$.',
          '$24000 = 20000 + 2 \\times 2000 = \\mu + 2\\sigma$.',
          'Par la règle des $2\\sigma$ : $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$.'
        ],
        answer: '$P(16000 \\leq X \\leq 24000) \\approx 0{,}954$ soit $95{,}4\\%$. Environ $95$ ampoules sur $100$ durent entre $16\\,000$ et $24\\,000$ h.'
      },
      formulas: [
        '$P(\\mu-\\sigma\\le X\\le\\mu+\\sigma)\\approx0{,}683$',
        '$P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$',
        '$P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$',
        'Loi uniforme sur $[a;b]$ : $E(X)=\\dfrac{a+b}{2}$, $f(x)=\\dfrac{1}{b-a}$'
      ],
      recap: [
        'Loi continue : $P(X = a) = 0$ toujours. On calcule des probabilités sur des <strong>intervalles</strong> : $P(a \\leq X \\leq b) = $ aire sous la courbe de densité.',
        'Loi normale $\\mathcal{N}(\\mu;\\sigma^2)$ : symétrique autour de $\\mu$, $P(X \\leq \\mu) = 0{,}5$. Les règles $1\\sigma$ / $2\\sigma$ / $3\\sigma$ donnent $68{,}3\\%$ / $95{,}4\\%$ / $99{,}7\\%$.',
        'Pour $P(X \\leq \\mu - k\\sigma)$ ou $P(X \\geq \\mu + k\\sigma)$, diviser la queue par $2$ grâce à la symétrie.',
        'Loi uniforme sur $[a;b]$ : $P(c \\leq X \\leq d) = \\dfrac{d-c}{b-a}$ (proportionnel à la longueur de l\'intervalle).'
      ],
      piege: 'La loi normale est symétrique autour de $\\mu$. Ne pas oublier de centrer-réduire avant de lire dans une table. $P(X\\le\\mu)=0{,}5$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{N}(100;10^2)$, un élève calcule $P(80\\le X\\le120)\\approx0{,}954$ puis conclut $P(X\\le80)\\approx0{,}046$. Quelle est son erreur ?', options: ['Par symétrie, $P(X\\le80)=(1-0{,}954)/2\\approx0{,}023$. L\'élève a oublié de diviser par $2$', 'L\'élève a raison : $P(X\\le80)=1-0{,}954=0{,}046$', '$P(X\\le80)$ ne peut pas être calculé avec la règle des $2\\sigma$', 'La bonne valeur est $P(X\\le80)=0{,}954/2=0{,}477$'], answer: 0, correction: '$[80;120]=[\\mu-2\\sigma;\\mu+2\\sigma]$ donc $P(80\\le X\\le120)\\approx0{,}954$. La probabilité en dehors est $1-0{,}954=0{,}046$, mais par SYMÉTRIE de la loi normale, cette probabilité se répartit également des deux côtés : $P(X\\le80)=P(X\\ge120)=0{,}046/2\\approx0{,}023$. L\'erreur : ne pas diviser par $2$ en oubliant la symétrie.' },
      { q: 'La loi uniforme sur $[2;8]$ a pour espérance :', options: ['$3$', '$5$', '$6$', '$4$'], answer: 1, correction: '$E(X)=(2+8)/2=5$.' },
      { q: 'Pour $X\\sim\\mathcal{N}(\\mu;\\sigma^2)$, $P(X\\le\\mu)=$ ?', options: ['$0{,}68$', '$0{,}25$', '$0{,}5$', '$1$'], answer: 2, correction: 'La loi normale est symétrique autour de $\\mu$, donc $P(X\\le\\mu)=0{,}5$.' },
      { q: 'Pour une loi continue, $P(X = 3{,}14)$ vaut :', options: ['$0$ (la probabilité d\'une valeur exacte est toujours nulle pour une loi continue)', 'Cela dépend de la densité en $3{,}14$', '$f(3{,}14)$ où $f$ est la densité', 'On ne peut pas calculer cette probabilité'], answer: 0, correction: 'Pour une loi CONTINUE, la probabilité d\'une valeur ponctuelle est toujours $0$ : $P(X = a) = \\int_a^a f(x)\\,dx = 0$. On ne peut calculer que des probabilités sur des intervalles. Conséquence : $P(X \\leq 3{,}14) = P(X < 3{,}14)$.' },
      { q: 'Pour $X \\sim \\mathcal{N}(100;10^2)$, que vaut $P(X \\leq 120)$ approximativement ?', options: ['$0{,}5$', '$0{,}683$', '$0{,}954$', '$0{,}977$'], answer: 3, correction: '$120 = 100 + 2 \\times 10 = \\mu + 2\\sigma$. On sait que $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$. Donc $P(X \\leq \\mu + 2\\sigma) = 0{,}5 + 0{,}954/2 = 0{,}5 + 0{,}477 = 0{,}977$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La masse d\'un sachet de bonbons en sortie d\'usine suit', unite: 'g' },
          { intro: 'Le QI d\'une population suit', unite: 'points' },
          { intro: 'La durée de vie d\'un composant électronique suit', unite: 'heures' },
          { intro: 'Le diamètre de roulements à billes en production suit', unite: 'mm' }
        ]);
        const mu = rand(5, 20) * 10;
        const sigma = rand(2, 8);
        const k = pick([1, 2]);
        const lower = mu - k * sigma;
        const upper = mu + k * sigma;
        const probas = { 1: 0.683, 2: 0.954 };
        return {
          statement: `${ctx.intro} une loi $\\mathcal{N}(${mu};${sigma}^2)$ (en ${ctx.unite}). Calculer $P(${lower} \\leq X \\leq ${upper})$.`,
          answer: probas[k],
          tolerance: 0.005,
          unit: '',
          hint: `Identifie combien de $\\sigma$ séparent les bornes de $\\mu$ : $${lower} = ${mu} - ${k} \\times ${sigma}$ et $${upper} = ${mu} + ${k} \\times ${sigma}$. C'est l'intervalle $[\\mu - ${k}\\sigma ; \\mu + ${k}\\sigma]$.`,
          solution: [
            `$${lower} = \\mu - ${k}\\sigma$ et $${upper} = \\mu + ${k}\\sigma$`,
            `$P(\\mu - ${k}\\sigma \\leq X \\leq \\mu + ${k}\\sigma) \\approx ${probas[k].toFixed(3).replace('.', '{,}')}$`,
            `Soit environ $${(probas[k]*100).toFixed(1).replace('.', '{,}')}\\%$.`
          ]
        };
      }
    },
    probleme: {
      context: 'La taille des adultes français suit (approximativement) une loi normale $\\mathcal{N}(175;8^2)$ pour les hommes (en cm).',
      tasks: [
        'Quelle est la probabilité qu\'un homme mesure entre $167$ et $183$ cm ?',
        'Quelle proportion mesure entre $159$ et $191$ cm ?',
        'Un homme mesure plus de $191$ cm. Est-ce rare ?'
      ],
      solutions: [
        '$[167;183]=[\\mu-\\sigma;\\mu+\\sigma]$ : $P\\approx0{,}683$, soit $68{,}3\\%$.',
        '$[159;191]=[\\mu-2\\sigma;\\mu+2\\sigma]$ : $P\\approx0{,}954$, soit $95{,}4\\%$.',
        '$P(X>191)=P(X>\\mu+2\\sigma)\\approx\\frac{1-0{,}954}{2}\\approx2{,}3\\%$ : oui, c\'est rare.'
      ],
      finalAnswer: '$68\\%$ entre $167$-$183$ cm ; $95\\%$ entre $159$-$191$ cm ; être $>191$ cm est rare ($\\approx2{,}3\\%$).'
    },

    evaluation: {
      title: 'Évaluation — Lois de probabilité continues',
      duration: '35 min',
      questions: [
        {
          statement: 'Pour $X \\sim \\mathcal{N}(50;4^2)$, calculer $P(42 \\leq X \\leq 58)$ en utilisant la règle des $k\\sigma$.',
          type: 'numeric',
          answer: 0.954,
          tolerance: 0.005,
          unit: '',
          points: 2,
          correction: '$42 = 50 - 2 \\times 4 = \\mu - 2\\sigma$ et $58 = 50 + 2 \\times 4 = \\mu + 2\\sigma$. Donc $P(42 \\leq X \\leq 58) = P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(100;15^2)$, que vaut $P(X \\leq 100)$ ?',
          type: 'multiple-choice',
          options: ['$0{,}5$', '$0{,}683$', '$1$', '$0{,}954$'],
          answer: 0,
          points: 2,
          correction: 'La loi normale est symétrique autour de $\\mu$. Donc $P(X \\leq \\mu) = P(X \\leq 100) = 0{,}5$.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[2;10]$. Calculer $E(X)$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$E(X) = \\dfrac{a+b}{2} = \\dfrac{2+10}{2} = 6$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(80;5^2)$, quelle est la probabilité approchée $P(X > 90)$ ?',
          type: 'multiple-choice',
          options: ['$\\approx 0{,}023$ (environ $2{,}3\\%$)', '$\\approx 0{,}046$ (environ $4{,}6\\%$)', '$\\approx 0{,}159$ (environ $16\\%$)', '$\\approx 0{,}5$ (environ $50\\%$)'],
          answer: 0,
          points: 2,
          correction: '$90 = 80 + 2 \\times 5 = \\mu + 2\\sigma$. Donc $P(X > 90) = P(X > \\mu + 2\\sigma) = \\dfrac{1 - 0{,}954}{2} \\approx 0{,}023$. Par symétrie, la probabilité au-delà de $\\mu + 2\\sigma$ est la moitié de la queue bilatérale.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[0;6]$. Calculer $P(1 \\leq X \\leq 4)$.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour la loi uniforme sur $[a;b]$ : $P(c \\leq X \\leq d) = \\dfrac{d-c}{b-a}$. Donc $P(1 \\leq X \\leq 4) = \\dfrac{4-1}{6-0} = \\dfrac{3}{6} = 0{,}5$.'
        }
      ]
    }
  },

    {
    id: 'tle-geometrie-espace',
    level: 2, subject: 'maths',
    icon: '🧊',
    title: 'Géométrie dans l\'espace',
    subtitle: 'Vecteurs, droites et plans de l\'espace',
    keywords: ['Espace', 'Vecteur', 'Plan', 'Droite', 'Coplanaire', 'Position relative'],
    physics: true,
    cours: {
      intro: 'En 3D, les droites et plans se comportent de façon plus riche qu\'en 2D. Deux droites de l\'espace peuvent être sécantes (se croisent), parallèles, ou GAUCHES — ni parallèles ni sécantes, passant "l\'une au-dessus de l\'autre" sans se toucher. Les droites gauches n\'existent pas en 2D et constituent le principal piège de la géométrie spatiale : deux droites non parallèles ne se croisent pas forcément ! Un plan est défini par son vecteur NORMAL $\\vec{n}(a;b;c)$ (perpendiculaire au plan) et son équation $ax+by+cz+d=0$. Une droite est perpendiculaire à un plan si son vecteur directeur est colinéaire au vecteur normal. Pour vérifier si deux droites se croisent, il faut résoudre le système et vérifier qu\'il admet une solution.',
      definitions: [
        { term: 'Vecteur normal à un plan', def: 'Vecteur $\\vec{n}(a;b;c)$ perpendiculaire au plan d\'équation $ax+by+cz+d=0$. Il est orthogonal à tout vecteur contenu dans le plan.' },
        { term: 'Droites gauches', def: 'Deux droites de l\'espace qui ne sont <strong>ni parallèles ni sécantes</strong>. Elles ne se croisent pas et ne sont pas dans le même plan. Ce cas n\'existe qu\'en dimension $\\geq 3$.' },
        { term: 'Représentation paramétrique', def: 'Une droite passant par $A(x_A;y_A;z_A)$ de vecteur directeur $\\vec{u}(a;b;c)$ s\'écrit : $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$, $t \\in \\mathbb{R}$.' },
        { term: 'Produit scalaire en 3D', def: '$\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Il vérifie aussi $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cos(\\theta)$ où $\\theta$ est l\'angle entre les vecteurs.' }
      ],
      method: {
        title: 'Positions relatives et équations',
        steps: [
          'Deux droites peuvent être : sécantes, parallèles, ou gauches (ni parallèles ni sécantes).',
          'Equation de plan : $ax+by+cz+d=0$, vecteur normal $\\vec{n}(a;b;c)$.',
          'Droite parallèle à un plan : vecteur directeur orthogonal à $\\vec{n}$.',
          'Droite perpendiculaire à un plan : vecteur directeur colinéaire à $\\vec{n}$.'
        ]
      },
      example: {
        statement: 'Soit le plan $\\mathcal{P}$ d\'équation $2x - y + 3z - 6 = 0$ et la droite $\\mathcal{D}$ de représentation paramétrique $\\begin{cases} x = 1 + 2t \\\\ y = -1 - t \\\\ z = 2 + 3t \\end{cases}$. Montrer que $\\mathcal{D}$ est perpendiculaire à $\\mathcal{P}$.',
        steps: [
          'Le <strong>vecteur normal</strong> au plan est $\\vec{n}(2;-1;3)$ (coefficients de $x$, $y$, $z$).',
          'Le <strong>vecteur directeur</strong> de la droite est $\\vec{u}(2;-1;3)$ (coefficients de $t$).',
          'On compare : $\\vec{u} = \\vec{n}$, ils sont <strong>colinéaires</strong> (rapport $1$).',
          'Puisque le vecteur directeur de la droite est colinéaire au vecteur normal du plan, la droite est <strong>perpendiculaire</strong> au plan $\\mathcal{P}$.'
        ],
        answer: '$\\vec{u} = \\vec{n} = (2;-1;3)$ : la droite $\\mathcal{D}$ est bien perpendiculaire au plan $\\mathcal{P}$.'
      },
      formulas: [
        'Plan : $ax+by+cz+d=0$, $\\vec{n}(a;b;c)$ normal',
        '$\\vec{u}\\cdot\\vec{v}=x_ux_v+y_uy_v+z_uz_v$',
        '$\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$',
        '$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}$'
      ],
      recap: [
        'Un plan est défini par son <strong>vecteur normal</strong> $\\vec{n}(a;b;c)$ et son équation $ax+by+cz+d=0$.',
        'En 3D, deux droites non parallèles peuvent être <strong>gauches</strong> : ni parallèles, ni sécantes. Toujours vérifier l\'existence d\'une intersection.',
        'Le <strong>produit scalaire</strong> en 3D : $\\vec{u} \\cdot \\vec{v} = x_u x_v + y_u y_v + z_u z_v$. Deux vecteurs sont orthogonaux si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$.',
        'Une droite est perpendiculaire à un plan si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan.'
      ],
      piege: 'En 3D, deux droites non parallèles peuvent être gauches (elles ne se croisent pas).<br/><br/>Avant de conclure qu\'elles sont sécantes, il faut résoudre le système et vérifier qu\'il admet une solution.'
    },
    quiz: [
      { q: 'Dans l\'espace, deux droites non parallèles se croisent forcément. Cette affirmation est :', options: ['FAUSSE : deux droites non parallèles peuvent être "gauches" (ni parallèles ni sécantes, elles passent l\'une au-dessus de l\'autre)', 'Vraie : si deux droites ne sont pas parallèles, elles ont forcément un point commun', 'Vraie seulement si les deux droites sont dans le même plan', 'Vraie en 3D, fausse en 2D'], answer: 0, correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles ne sont pas parallèles (directions distinctes) mais ne se croisent pas non plus. Exemple simple : l\'axe $x$ ($z=0$, $y=0$) et la droite $y=1$, $z=1$ ont des directions distinctes mais ne se rencontrent jamais. En 2D, ce cas n\'existe pas car deux droites non parallèles se croisent toujours en un point.' },
      { q: '$\\vec{u}(1;2;-1)\\cdot\\vec{v}(2;-1;0)=$ ?', options: ['$0$', '$3$', '$-3$', '$1$'], answer: 0, correction: '$1\\times2+2\\times(-1)+(-1)\\times0=2-2+0=0$. Les vecteurs sont orthogonaux !' },
      { q: 'La norme de $\\vec{u}(3;0;4)$ est :', options: ['$7$', '$5$', '$25$', '$\\sqrt{7}$'], answer: 1, correction: '$\\|\\vec{u}\\|=\\sqrt{9+0+16}=\\sqrt{25}=5$.<br/><br/>On applique la formule $\\|\\vec{u}\\| = \\sqrt{x^2+y^2+z^2}$ en additionnant les carrés des trois coordonnées.' },
      { q: 'Le plan $\\mathcal{P}$ a pour équation $3x - y + 2z + 5 = 0$. Son vecteur normal est :', options: ['$\\vec{n}(3;-1;2)$', '$\\vec{n}(3;1;2)$', '$\\vec{n}(3;-1;5)$', '$\\vec{n}(5;-1;2)$'], answer: 0, correction: 'Le vecteur normal au plan $ax+by+cz+d=0$ est $\\vec{n}(a;b;c)$.<br/><br/>On lit directement les coefficients de $x$, $y$ et $z$ : ici $a=3$, $b=-1$, $c=2$. La constante $d=5$ ne fait pas partie du vecteur normal.' },
      { q: 'La droite $\\mathcal{D}$ passe par $A(1;2;3)$ avec le vecteur directeur $\\vec{u}(0;0;1)$. Quelle est la nature de cette droite ?', options: ['Parallèle au plan $xOy$', 'Perpendiculaire au plan $xOy$ (elle est verticale, parallèle à l\'axe $z$)', 'Perpendiculaire à l\'axe $z$', 'Confondue avec l\'axe $z$'], answer: 1, correction: 'Le vecteur directeur $\\vec{u}(0;0;1)$ est colinéaire au vecteur normal du plan $xOy$ (dont l\'équation est $z=0$ et le vecteur normal $\\vec{k}(0;0;1)$).<br/><br/>La droite est donc <strong>perpendiculaire</strong> au plan $xOy$ : elle est verticale, parallèle à l\'axe $z$, passant par le point $(1;2;3)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const x = rand(-3, 3), y = rand(-3, 3), z = rand(-3, 3);
        const norm = parseFloat(Math.sqrt(x*x+y*y+z*z).toFixed(4));
        return {
          statement: `Calculer la norme du vecteur $\\vec{u}(${x};${y};${z})$. Arrondir à $0{,}01$.`,
          answer: parseFloat(norm.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: `$\\|\\vec{u}\\|=\\sqrt{${x}^2+${y}^2+${z}^2}$`,
          solution: [`$\\|\\vec{u}\\|=\\sqrt{${x*x}+${y*y}+${z*z}}=\\sqrt{${x*x+y*y+z*z}}\\approx${norm}$`]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé de l\'espace, on donne $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.',
      tasks: [
        'Donner les vecteurs $\\vec{AB}$ et $\\vec{AC}$.',
        'Calculer $\\vec{AB}\\cdot\\vec{AC}$.',
        'Déterminer l\'équation du plan $ABC$ sachant que le vecteur normal est $\\vec{n}(6;3;2)$ (admis).'
      ],
      solutions: [
        '$\\vec{AB}(-1;2;0)$ ; $\\vec{AC}(-1;0;3)$.',
        '$\\vec{AB}\\cdot\\vec{AC}=(-1)(-1)+(2)(0)+(0)(3)=1$.',
        'Plan contenant $A(1;0;0)$, normal $\\vec{n}(6;3;2)$ : $6(x-1)+3(y-0)+2(z-0)=0 \\Rightarrow 6x+3y+2z=6$.'
      ],
      finalAnswer: '$\\vec{AB}\\cdot\\vec{AC}=1$ ; équation du plan : $6x+3y+2z=6$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $A(2;1;-1)$ et $B(4;-1;3)$. Calculer la norme du vecteur $\\vec{AB}$.',
          type: 'numeric',
          answer: 4.90,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$\\vec{AB}(2;-2;4)$. $\\|\\vec{AB}\\| = \\sqrt{4+4+16} = \\sqrt{24} = 2\\sqrt{6} \\approx 4{,}90$.'
        },
        {
          statement: 'Deux droites de l\'espace ont des vecteurs directeurs non colinéaires. Peut-on conclure qu\'elles sont sécantes ?',
          type: 'multiple-choice',
          options: ['Oui, deux droites non parallèles se croisent toujours', 'Non, elles pourraient être gauches (ni parallèles ni sécantes)', 'Oui, si elles ne sont pas parallèles, elles ont un point commun', 'Non, mais elles sont forcément perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles n\'ont pas de point d\'intersection bien qu\'elles ne soient pas parallèles. Il faut résoudre le système pour vérifier l\'existence d\'un point commun.'
        },
        {
          statement: 'Calculer $\\vec{u}(1;3;-2)\\cdot\\vec{v}(2;-1;4)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 2 + 3 \\times (-1) + (-2) \\times 4 = 2 - 3 - 8 = -9$.'
        },
        {
          statement: 'L\'équation du plan passant par $A(1;0;0)$ de vecteur normal $\\vec{n}(2;3;-1)$ est :',
          type: 'multiple-choice',
          options: ['$2x+3y-z-2=0$', '$2x+3y-z+2=0$', '$x+y+z-1=0$', '$2x+3y-z=0$'],
          answer: 0,
          points: 2,
          correction: 'Plan : $2(x-1)+3(y-0)+(-1)(z-0)=0$, soit $2x-2+3y-z=0$, d\'où $2x+3y-z-2=0$.'
        },
        {
          statement: 'Soit $\\vec{u}(a;1;2)$ et $\\vec{v}(3;-6;a)$. Trouver la valeur de $a$ pour que $\\vec{u} \\perp \\vec{v}$.',
          type: 'numeric',
          answer: 1.2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 3a + 1 \\times (-6) + 2a = 3a - 6 + 2a = 5a - 6 = 0$. Donc $a = \\dfrac{6}{5} = 1{,}2$.'
        }
      ]
    }
  },

    {
    id: 'tle-orthogonalite-espace',
    level: 2, subject: 'maths',
    icon: '⊥',
    title: 'Orthogonalité dans l\'espace',
    subtitle: 'Perpendiculaire, distance, produit scalaire 3D',
    keywords: ['Orthogonalité', 'Produit scalaire', 'Distance', 'Perpendiculaire', 'Projection'],
    physics: true,
    cours: {
      intro: 'L\'<strong>orthogonalité</strong> en 3D se teste toujours par le produit scalaire : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>La formule de <strong>distance d\'un point à un plan</strong> $M(x_0;y_0;z_0)$ au plan $ax+by+cz+d=0$ est $d = |ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$.<br/><br/>Le numérateur est en <strong>valeur absolue</strong> car une distance est toujours positive — même si $M$ est du "mauvais côté" du plan (le signe du numérateur indique de quel côté se trouve $M$, mais la distance reste positive).<br/><br/>Intuition : la formule projette le vecteur $\\overrightarrow{HM}$ (où $H$ est le pied de la perpendiculaire) sur le vecteur normal unitaire.',
      definitions: [
        { term: 'Orthogonalité de vecteurs', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. En 3D : $x_u x_v + y_u y_v + z_u z_v = 0$.' },
        { term: 'Projeté orthogonal', def: 'Le projeté orthogonal $H$ de $M$ sur un plan $\\mathcal{P}$ est le point de $\\mathcal{P}$ le plus proche de $M$. Le vecteur $\\overrightarrow{HM}$ est colinéaire au <strong>vecteur normal</strong> du plan.' },
        { term: 'Distance point-plan', def: '$d(M;\\mathcal{P}) = \\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$ pour le plan $ax+by+cz+d=0$ et le point $M(x_0;y_0;z_0)$. Toujours <strong>positive</strong> grâce à la valeur absolue.' },
        { term: 'Plans perpendiculaires', def: 'Deux plans sont <strong>perpendiculaires</strong> si et seulement si leurs vecteurs normaux sont orthogonaux : $\\vec{n_1} \\cdot \\vec{n_2} = 0$.' }
      ],
      method: {
        title: 'Distance d\'un point à un plan',
        steps: [
          'Plan $\\mathcal{P}$ : $ax+by+cz+d=0$, point $M(x_0;y_0;z_0)$.',
          'Distance : $d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.',
          'Droite $\\perp$ à un plan $\\Leftrightarrow$ son vecteur directeur est colinéaire au vecteur normal du plan.',
          'Deux plans $\\perp$ $\\Leftrightarrow$ leurs vecteurs normaux sont $\\perp$ ($\\vec{n_1}\\cdot\\vec{n_2}=0$).'
        ]
      },
      example: {
        statement: 'Calculer la distance du point $A(3;1;-2)$ au plan $\\mathcal{P}$ d\'équation $x - 2y + 2z + 1 = 0$.',
        steps: [
          'On identifie les coefficients du plan : $a=1$, $b=-2$, $c=2$, $d=1$.',
          'On applique la formule : $d = \\dfrac{|1 \\times 3 + (-2) \\times 1 + 2 \\times (-2) + 1|}{\\sqrt{1^2+(-2)^2+2^2}}$.',
          'Numérateur : $|3 - 2 - 4 + 1| = |-2| = 2$.',
          'Dénominateur : $\\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.',
          '$d(A;\\mathcal{P}) = \\dfrac{2}{3} \\approx 0{,}67$.'
        ],
        answer: 'La distance de $A$ au plan $\\mathcal{P}$ est $\\dfrac{2}{3}$ unité de longueur.'
      },
      formulas: [
        '$d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$',
        'Plans $\\perp$ : $\\vec{n_1}\\cdot\\vec{n_2}=0$',
        'Droite $\\perp$ plan : $\\vec{u}=k\\vec{n}$'
      ],
      recap: [
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. En 3D, on calcule la somme des produits coordonnée par coordonnée.',
        'La <strong>distance point-plan</strong> utilise la formule $d = |ax_0+by_0+cz_0+d| / \\sqrt{a^2+b^2+c^2}$. Ne jamais oublier la valeur absolue au numérateur.',
        'Deux plans sont <strong>perpendiculaires</strong> si $\\vec{n_1} \\cdot \\vec{n_2} = 0$. Deux plans sont parallèles si $\\vec{n_1}$ et $\\vec{n_2}$ sont colinéaires.',
        'Le <strong>projeté orthogonal</strong> $H$ de $M$ sur $\\mathcal{P}$ est le point de $\\mathcal{P}$ tel que $\\overrightarrow{HM}$ est colinéaire à $\\vec{n}$. La distance $MH$ est minimale parmi tous les points du plan.'
      ],
      piege: 'La distance d\'un point à un plan se calcule avec la <strong>valeur absolue</strong> au numérateur.<br/><br/>Ne pas oublier le $|\\cdots|$ ! Une distance est toujours positive, même si le calcul brut donne un résultat négatif.'
    },
    quiz: [
      { q: 'Pour calculer la distance de $A(1;2;-1)$ au plan $x+y+z-6=0$, un élève obtient $\\dfrac{1+2-1-6}{\\sqrt{3}}=\\dfrac{-4}{\\sqrt{3}}$. Quelle est son erreur ?', options: ['La distance est toujours positive : il faut la valeur absolue. $d=\\dfrac{|-4|}{\\sqrt{3}}=\\dfrac{4}{\\sqrt{3}}\\approx2{,}31$', 'L\'élève a raison : une distance négative indique que $A$ est de l\'autre côté du plan', 'Le dénominateur devrait être $\\sqrt{1^2+1^2+1^2}=3$, pas $\\sqrt{3}$', 'Le numérateur devrait être $1+2+(-1)-6=-4$ donc $d=-4$'], answer: 0, correction: 'Une distance est toujours une longueur, donc toujours POSITIVE. La formule est $d=|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$. Ici $|1+2-1-6|=|-4|=4$ et $\\sqrt{1+1+1}=\\sqrt{3}$, donc $d=4/\\sqrt{3}\\approx2{,}31$. Le signe négatif du numérateur ($-4$) indique seulement que $A$ est du côté "négatif" du plan — pas que la distance est négative.' },
      { q: 'La distance du point $O(0;0;0)$ au plan $x+y+z-3=0$ est :', options: ['$3$', '$\\sqrt{3}$', '$1$', '$3\\sqrt{3}$'], answer: 1, correction: '$d=\\frac{|0+0+0-3|}{\\sqrt{1+1+1}}=\\frac{3}{\\sqrt{3}}=\\sqrt{3}$.' },
      { q: 'Une droite de vecteur directeur $\\vec{u}(1;2;3)$ est-elle perpendiculaire au plan de normale $\\vec{n}(2;4;6)$ ?', options: ['Non', 'Oui, car $\\vec{u}$ et $\\vec{n}$ sont colinéaires', 'Oui, car $\\vec{u}\\cdot\\vec{n}=0$', 'Impossible à dire'], answer: 1, correction: '$\\vec{n}=2\\vec{u}$ : colinéaires, donc la droite est perpendiculaire au plan.<br/><br/>En effet, une droite est perpendiculaire à un plan si et seulement si son vecteur directeur est <strong>colinéaire</strong> au vecteur normal du plan. Ici le rapport est $k=2$ pour les trois coordonnées.' },
      { q: 'Le projeté orthogonal $H$ de $M(0;0;3)$ sur le plan $z = 0$ est :', options: ['$H(0;0;0)$', '$H(0;0;3)$', '$H(3;0;0)$', '$H(0;3;0)$'], answer: 0, correction: 'Le plan $z=0$ est le plan $xOy$. Le projeté orthogonal consiste à "descendre" perpendiculairement sur le plan : on garde les coordonnées $x$ et $y$ et on met $z=0$.<br/><br/>Donc $H(0;0;0)$. La distance $MH = |3-0| = 3$.' },
      { q: 'Les plans $\\mathcal{P}_1 : x + y + z = 1$ et $\\mathcal{P}_2 : x - y = 0$ sont-ils perpendiculaires ?', options: ['Oui, car $\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 0$', 'Non, car $\\vec{n_1} \\cdot \\vec{n_2} = 2$', 'Oui, car les plans ne sont pas parallèles', 'Non, car $\\vec{n_1} \\cdot \\vec{n_2} = -1$'], answer: 0, correction: '$\\vec{n_1}(1;1;1)$ et $\\vec{n_2}(1;-1;0)$.<br/><br/>$\\vec{n_1} \\cdot \\vec{n_2} = 1 \\times 1 + 1 \\times (-1) + 1 \\times 0 = 1 - 1 + 0 = 0$.<br/><br/>Les vecteurs normaux sont orthogonaux, donc les deux plans sont bien <strong>perpendiculaires</strong>.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 3), b = rand(1, 3), c = rand(1, 3);
        const d = rand(-5, -1);
        const x0 = 0, y0 = 0, z0 = 0;
        const num = Math.abs(a*x0 + b*y0 + c*z0 + d);
        const denom = parseFloat(Math.sqrt(a*a+b*b+c*c).toFixed(4));
        const dist = parseFloat((num/denom).toFixed(4));
        return {
          statement: `Calculer la distance de $O(0;0;0)$ au plan $${a}x+${b}y+${c}z${d}=0$. Arrondir à $0{,}01$.`,
          answer: parseFloat(dist.toFixed(2)),
          tolerance: 0.05,
          unit: 'unités',
          hint: `$d=\\frac{|${a}\\cdot0+${b}\\cdot0+${c}\\cdot0${d}|}{\\sqrt{${a}^2+${b}^2+${c}^2}}$`,
          solution: [
            `$d=\\frac{|${d}|}{\\sqrt{${a*a+b*b+c*c}}}=\\frac{${Math.abs(d)}}{\\sqrt{${a*a+b*b+c*c}}}\\approx${dist}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé, on considère le plan $\\mathcal{P}$ d\'équation $2x+y-2z+3=0$ et le point $A(1;1;1)$.',
      tasks: [
        'Donner le vecteur normal à $\\mathcal{P}$.',
        'Calculer la distance de $A$ à $\\mathcal{P}$.',
        'Écrire une équation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.'
      ],
      solutions: [
        '$\\vec{n}(2;1;-2)$.',
        '$d=\\frac{|2\\times1+1\\times1-2\\times1+3|}{\\sqrt{4+1+4}}=\\frac{|4|}{3}=\\frac{4}{3}$.',
        'Droite : $(x;y;z)=(1;1;1)+t(2;1;-2)$, soit $x=1+2t$, $y=1+t$, $z=1-2t$.'
      ],
      finalAnswer: '$d(A;\\mathcal{P})=\\frac{4}{3}$. Droite perpendiculaire : $(1+2t;1+t;1-2t)$.'
    },

    evaluation: {
      title: 'Évaluation — Orthogonalité dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u}(2;-3;1) \\cdot \\vec{v}(4;2;-5)$.',
          type: 'numeric',
          answer: -3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 2 \\times 4 + (-3) \\times 2 + 1 \\times (-5) = 8 - 6 - 5 = -3$.'
        },
        {
          statement: 'Les vecteurs $\\vec{u}(1;-2;3)$ et $\\vec{v}(6;0;-2)$ sont-ils orthogonaux ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u}\\cdot\\vec{v}=0$', 'Non, car $\\vec{u}\\cdot\\vec{v}=12$', 'Non, car $\\vec{u}\\cdot\\vec{v}=-12$', 'Oui, car $\\vec{u}\\cdot\\vec{v}=6$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 6 + (-2) \\times 0 + 3 \\times (-2) = 6 + 0 - 6 = 0$. Donc $\\vec{u} \\perp \\vec{v}$.'
        },
        {
          statement: 'Calculer la distance du point $M(1;-1;2)$ au plan $2x - y + 2z - 1 = 0$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$d = \\dfrac{|2 \\times 1 + (-1)\\times(-1) + 2 \\times 2 - 1|}{\\sqrt{4+1+4}} = \\dfrac{|2+1+4-1|}{\\sqrt{9}} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Une droite de vecteur directeur $\\vec{u}(3;-6;9)$ est-elle perpendiculaire au plan de vecteur normal $\\vec{n}(1;-2;3)$ ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u} = 3\\vec{n}$ (colinéaires)', 'Non, car $\\vec{u} \\cdot \\vec{n} = 0$', 'Non, car les coordonnées sont différentes', 'Oui, car $\\vec{u} \\cdot \\vec{n} \\neq 0$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u} = (3;-6;9) = 3 \\times (1;-2;3) = 3\\vec{n}$. Les vecteurs sont colinéaires, donc la droite est perpendiculaire au plan.'
        },
        {
          statement: 'Les plans $\\mathcal{P}_1 : x + 2y - z + 1 = 0$ et $\\mathcal{P}_2 : 2x - y + 2z - 3 = 0$ sont-ils perpendiculaires ?',
          type: 'multiple-choice',
          options: ['Non, car $\\vec{n_1}\\cdot\\vec{n_2} = 2 \\neq 0$', 'Non, car $\\vec{n_1}\\cdot\\vec{n_2} = -2 \\neq 0$', 'Oui, car $\\vec{n_1}\\cdot\\vec{n_2} = 0$', 'Oui, car les plans ne sont pas parallèles'],
          answer: 1,
          points: 2,
          correction: '$\\vec{n_1}(1;2;-1)$, $\\vec{n_2}(2;-1;2)$. $\\vec{n_1}\\cdot\\vec{n_2} = 1 \\times 2 + 2 \\times (-1) + (-1) \\times 2 = 2 - 2 - 2 = -2 \\neq 0$. Les plans ne sont PAS perpendiculaires.'
        }
      ]
    }
  }

);
