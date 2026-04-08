/* =========================================================
   Spark Learning – data/3e/3e-volumes.js
   Module : Volumes : sphère et solides composés (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-volumes',
    level: 1, subject: 'maths',
    icon: '🌐',
    title: 'Volumes : sphère et solides composés',
    subtitle: 'Formule de la sphère, assemblages',
    keywords: ['Sphère', 'Boule', 'Volume', 'Solides composés', 'Rayon'],
    physics: true,
    cours: {
      intro: 'La <strong>sphère</strong> est la surface des points à distance $r$ d\'un centre ; la <strong>boule</strong> est le volume plein qu\'elle délimite. La formule $V = \\dfrac{4}{3}\\pi r^3$ porte le <strong>cube du rayon</strong> : doubler le rayon multiplie le volume par $8$, pas par $2$ !<br/><br/>' +
        'Cette sensibilité au rayon explique pourquoi les cellules biologiques ne dépassent pas une certaine taille : leur surface (en $r^2$) ne peut plus suffire aux échanges si le volume (en $r^3$) croît trop vite.<br/><br/>' +
        'Pour les <strong>solides composés</strong> : décomposer en formes simples (boule, cylindre, cône, pyramide), calculer chaque volume, puis <strong>additionner</strong> — ou <strong>soustraire</strong> si un solide est creusé dans un autre.',
      definitions: [
        { term: 'Sphère', def: 'La <strong>surface</strong> formée par tous les points situés à la même distance $r$ d\'un point central. La sphère est « creuse » : elle n\'inclut que la surface.' },
        { term: 'Boule', def: 'Le <strong>volume</strong> délimité par une sphère : la boule contient tous les points à distance $\\leq r$ du centre. C\'est la sphère « pleine ».' },
        { term: 'Rayon', def: 'La distance $r$ du centre à n\'importe quel point de la sphère. <strong>Attention</strong> : si l\'énoncé donne le diamètre $d$, il faut calculer $r = \\dfrac{d}{2}$ avant d\'appliquer les formules.' },
        { term: 'Solide composé', def: 'Solide formé par <strong>assemblage de solides simples</strong> (cylindre + cône, boule creusée, etc.). Son volume se calcule par addition ou soustraction des volumes des parties.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> les composantes du solide (boule, cône, cylindre, pyramide…).<br/><em>Exemple :</em> une figurine = cylindre + demi-sphère.',
          '<strong>Étape 2 : Calculer</strong> le volume de chaque partie avec la formule adaptée.<br/><em>Exemple :</em> $V_{\\text{boule}} = \\dfrac{4}{3}\\pi r^3$, $V_{\\text{cylindre}} = \\pi r^2 h$.',
          '<strong>Étape 3 : Combiner</strong> — additionner les volumes si juxtaposés, <strong>soustraire</strong> si un solide est creusé dans un autre.'
        ]
      },
      example: {
        statement: 'Calculer le volume d\'une boule de rayon $r = 6$ cm. On prendra $\\pi \\approx 3{,}14$.',
        steps: [
          '<strong>Formule</strong> : $V = \\dfrac{4}{3}\\pi r^3$.',
          '<strong>Calcul de $r^3$</strong> : $6^3 = 216$. Puis $V = \\dfrac{4}{3} \\times 3{,}14 \\times 216 = \\dfrac{4 \\times 3{,}14 \\times 216}{3}$.',
          '<strong>Résultat</strong> : $V = \\dfrac{2\\,713{,}44}{3} \\approx 904{,}32$ cm³.'
        ],
        answer: '$V \\approx 904{,}32$ cm³.'
      },
      formulas: [
        'Boule : $V = \\dfrac{4}{3}\\pi r^3$',
        'Surface d\'une sphère : $S = 4\\pi r^2$',
        'Hémisphère : $V = \\dfrac{2}{3}\\pi r^3$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Solide</th><th style="border:1px solid var(--border);padding:8px">Formule du volume</th><th style="border:1px solid var(--border);padding:8px">Exemple ($r = 3$ cm)</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Boule</strong></td><td style="border:1px solid var(--border);padding:8px">$V = \\dfrac{4}{3}\\pi r^3$</td><td style="border:1px solid var(--border);padding:8px">$V = \\dfrac{4}{3} \\times 3{,}14 \\times 27 \\approx 113{,}04$ cm³</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Cylindre</strong></td><td style="border:1px solid var(--border);padding:8px">$V = \\pi r^2 h$</td><td style="border:1px solid var(--border);padding:8px">$V = 3{,}14 \\times 9 \\times 5 = 141{,}3$ cm³ ($h = 5$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Cône</strong></td><td style="border:1px solid var(--border);padding:8px">$V = \\dfrac{1}{3}\\pi r^2 h$</td><td style="border:1px solid var(--border);padding:8px">$V = \\dfrac{1}{3} \\times 3{,}14 \\times 9 \\times 5 = 47{,}1$ cm³</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Pyramide</strong></td><td style="border:1px solid var(--border);padding:8px">$V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$</td><td style="border:1px solid var(--border);padding:8px">Base $4 \\times 4$, $h = 5$ : $V = \\dfrac{1}{3} \\times 16 \\times 5 \\approx 26{,}67$ cm³</td></tr></table>',
      recap: [
        'La formule de la boule est $V = \\dfrac{4}{3}\\pi r^3$ — le volume dépend du <strong>cube</strong> du rayon.',
        'Doubler le rayon multiplie le volume par $2^3 = 8$ — pas par $2$ ! C\'est la principale source d\'erreur.',
        'Toujours vérifier si l\'énoncé donne le <strong>rayon</strong> ou le <strong>diamètre</strong> ($r = d/2$).',
        'Pour un solide composé : <strong>décomposer</strong> en formes simples, calculer chaque volume, puis additionner (ou soustraire).'
      ],
      piege: 'Piège : $V = \\frac{4}{3}\\pi r^3$ — c\'est le RAYON au cube, pas le diamètre ! Si on donne le diamètre $d$, ne pas oublier $r = d/2$ avant de calculer $r^3$.'
    },
    quiz: [
      {
        q: 'On double le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
        options: ['$2$', '$4$', '$8$', '$6$'],
        answer: 2,
        correction: '$V = \\frac{4}{3}\\pi r^3$. Avec $2r$ : $V\' = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\times 8r^3 = 8V$. Le volume est multiplié par $8 = 2^3$. L\'erreur courante est de répondre $\\times 2$ (confusion avec les longueurs) ou $\\times 4$ (confusion avec les aires).'
      },
      {
        q: 'Une boule de diamètre $6$ cm a un volume de :',
        options: ['$904{,}32$ cm³', '$113{,}04$ cm³', '$56{,}52$ cm³', '$452{,}16$ cm³'],
        answer: 1,
        correction: 'Rayon $r = 3$ cm. $V = \\frac{4}{3} \\times 3{,}14 \\times 27 = 113{,}04$ cm³.'
      },
      {
        q: 'Une figurine est formée d\'un cylindre surmonté d\'une demi-sphère de même rayon $r = 2$ cm. Le cylindre a une hauteur de $5$ cm. Quel est le volume total (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$79{,}48$ cm³', '$62{,}8$ cm³', '$96{,}97$ cm³', '$45{,}73$ cm³'],
        answer: 0,
        correction: 'Cylindre : $3{,}14 \\times 4 \\times 5 = 62{,}8$ cm³. Demi-sphère : $\\frac{2}{3} \\times 3{,}14 \\times 8 = 16{,}75$ cm³. Total : $\\approx 79{,}55$ cm³.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r = rand(2, 8);
        const v = parseFloat((4/3 * 3.14 * r * r * r).toFixed(1));
        return {
          statement: `Calcule le volume d'une boule de rayon $${r}$ cm. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
          answer: v,
          tolerance: 1,
          unit: 'cm³',
          hint: `$V = \\dfrac{4}{3} \\times 3{,}14 \\times ${r}^3 = \\dfrac{4}{3} \\times 3{,}14 \\times ${r*r*r}$.`,
          solution: [`$V = \\dfrac{4 \\times 3{,}14 \\times ${r*r*r}}{3} = \\dfrac{${parseFloat((4*3.14*r*r*r).toFixed(2))}}{3} \\approx ${v}$ cm³.`]
        };
      }
    },
    probleme: {
      context: 'Une bougie est fabriquée en forme de cylindre surmonté d\'un cône. Le cylindre a rayon $2$ cm et hauteur $8$ cm. Le cône a même rayon et hauteur $3$ cm.',
      tasks: [
        'Calculer le volume du cylindre.',
        'Calculer le volume du cône.',
        'Calculer le volume total de la bougie.'
      ],
      solutions: [
        '$V_{\\text{cyl}} = 3{,}14 \\times 4 \\times 8 = 100{,}48$ cm³.',
        '$V_{\\text{cône}} = \\frac{1}{3} \\times 3{,}14 \\times 4 \\times 3 = 12{,}56$ cm³.',
        '$V_{\\text{total}} = 100{,}48 + 12{,}56 = 113{,}04$ cm³.'
      ],
      finalAnswer: 'La bougie a un volume de $113{,}04$ cm³.'
    },

    evaluation: {
      title: 'Évaluation — Volumes : sphère et solides composés',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le volume d\'une boule de rayon $5$ cm. On prendra $\\pi \\approx 3{,}14$. Arrondir au centième.',
          type: 'numeric',
          answer: 523.33,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{4}{3} \\times 3{,}14 \\times 5^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 125 = \\dfrac{1570}{3} \\approx 523{,}33$ cm³.'
        },
        {
          statement: 'Une balle de tennis a un diamètre de $6{,}8$ cm. Quel est son volume ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 164.6,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: 'Rayon $r = \\dfrac{6{,}8}{2} = 3{,}4$ cm. $V = \\dfrac{4}{3} \\times 3{,}14 \\times 3{,}4^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 39{,}304 \\approx 164{,}6$ cm³. Attention à bien prendre le rayon et non le diamètre.'
        },
        {
          statement: 'On triple le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
          type: 'multiple-choice',
          options: ['$3$', '$9$', '$27$', '$6$'],
          answer: 2,
          points: 2,
          correction: '$V = \\dfrac{4}{3}\\pi r^3$. Avec $3r$ : $V\' = \\dfrac{4}{3}\\pi (3r)^3 = \\dfrac{4}{3}\\pi \\times 27r^3 = 27V$. Le volume est multiplié par $3^3 = 27$.'
        },
        {
          statement: 'Un solide est composé d\'un cylindre de rayon $3$ cm et de hauteur $10$ cm surmonté d\'une demi-sphère de même rayon. Quel est le volume total ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 339.1,
          tolerance: 2,
          unit: 'cm³',
          points: 2,
          correction: 'Cylindre : $V_c = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³. Demi-sphère : $V_s = \\dfrac{2}{3} \\times 3{,}14 \\times 27 = 56{,}52$ cm³. Total : $282{,}6 + 56{,}52 = 339{,}12 \\approx 339{,}1$ cm³.'
        },
        {
          statement: 'Un récipient sphérique de diamètre $20$ cm est rempli d\'eau à moitié. Quel volume d\'eau contient-il ? ($\\pi \\approx 3{,}14$)',
          type: 'multiple-choice',
          options: ['$4\\,186{,}67$ cm³', '$2\\,093{,}33$ cm³', '$1\\,046{,}67$ cm³', '$523{,}33$ cm³'],
          answer: 1,
          points: 2,
          correction: 'Rayon $r = 10$ cm. Volume total : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 = \\dfrac{4}{3} \\times 3140 \\approx 4\\,186{,}67$ cm³. Moitié : $\\dfrac{4\\,186{,}67}{2} \\approx 2\\,093{,}33$ cm³.'
        }
      ]
    }
  }
);
