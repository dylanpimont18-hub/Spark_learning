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
    physics: 'Calcul du volume d\'un réservoir sphérique, d\'une planète, d\'une bulle de gaz',
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
      diagram: {
        theme: 'maths',
        kicker: 'Puissance du rayon',
        title: 'Comparer deux sphères : quand le rayon double, le volume est multiplié par 8',
        description: 'Le rayon passe de $r$ à $2r$ : chaque longueur double, mais le volume dépend du <strong>cube</strong> du rayon, donc $V\' = 2^3 \\times V = 8V$.',
        svg: `
          <svg viewBox="0 0 380 290" role="img" aria-labelledby="volumes-graph-title volumes-graph-desc">
            <title id="volumes-graph-title">Deux spheres de rayons r et 2r</title>
            <desc id="volumes-graph-desc">Le schema montre deux spheres, l'une de rayon r = 3 cm et l'autre de rayon double 2r = 6 cm, avec leurs volumes V = 113,04 cm3 et V' = 904,32 cm3, dans un rapport de 8.</desc>
            <rect x="20" y="8" width="340" height="30" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="28">Rayon x 2  -&gt;  Volume x 2^3 = 8</text>
            <circle cx="110" cy="200" r="36" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></circle>
            <circle class="frame-line" cx="110" cy="200" r="36" fill="none"></circle>
            <circle cx="270" cy="160" r="72" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)" stroke="none"></circle>
            <circle class="curve-main" cx="270" cy="160" r="72" fill="none"></circle>
            <line class="guide-line" x1="110" y1="200" x2="146" y2="200"></line>
            <line class="guide-line" x1="270" y1="160" x2="342" y2="160"></line>
            <circle class="plot-point-alt" cx="110" cy="200" r="4"></circle>
            <circle class="plot-point-alt" cx="270" cy="160" r="4"></circle>
            <circle class="plot-point" cx="146" cy="200" r="4"></circle>
            <circle class="plot-point" cx="342" cy="160" r="4"></circle>
            <text class="annotation-label" x="118" y="190">r = 3 cm</text>
            <text class="annotation-label" x="278" y="148">2r = 6 cm</text>
            <text class="label-soft" x="110" y="150" text-anchor="middle">Sphere 1</text>
            <text class="label-soft" x="270" y="74" text-anchor="middle">Sphere 2</text>
            <text class="annotation-label" x="110" y="254" text-anchor="middle">V = 113,04 cm3</text>
            <text class="annotation-label" x="270" y="254" text-anchor="middle">V' = 904,32 cm3</text>
          </svg>
        `,
        notes: [
          'Ici $r = 3$ cm et $2r = 6$ cm : ce sont les mêmes valeurs que dans l\'exemple du cours, pour vérifier la cohérence des deux calculs.',
          '$V = \\dfrac{4}{3}\\pi r^3 \\approx 113{,}04$ cm³ pour la petite sphère, avec $\\pi \\approx 3{,}14$.',
          '$V\' = \\dfrac{4}{3}\\pi (2r)^3 = 2^3 \\times \\dfrac{4}{3}\\pi r^3 = 8V \\approx 904{,}32$ cm³ : on vérifie $904{,}32 \\div 113{,}04 = 8$.'
        ],
        reading: 'Ne confonds pas facteur de longueur et facteur de volume : le rayon double (facteur $2$) mais le volume est multiplié par $2^3 = 8$, pas par $2$.',
        caption: 'Deux sphères de rayons $r = 3$ cm et $2r = 6$ cm : leurs volumes sont dans un rapport de $8 = 2^3$.'
      },
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
        const vStr = String(v).replace('.', '{,}');
        const numStr = String(parseFloat((4*3.14*r*r*r).toFixed(2))).replace('.', '{,}');

        const ctx = pick([
          { build: () => `Un <strong>ballon de basket</strong> a un rayon de $${r}$ cm.<br/><br/>Calcule le <strong>volume d'air</strong> qu'il contient. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` },
          { build: () => `Une <strong>boule de pétanque</strong> en acier a un rayon de $${r}$ cm.<br/><br/>Calcule son <strong>volume</strong> de métal. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` },
          { build: () => `Un globe terrestre miniature (<strong>mappemonde</strong> de bureau) a un rayon de $${r}$ cm.<br/><br/>Calcule son <strong>volume</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` },
          { build: () => `Une <strong>boule à neige</strong> décorative a un rayon intérieur de $${r}$ cm.<br/><br/>Calcule le <strong>volume de liquide</strong> qu'elle contient. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` },
          { build: () => `Une <strong>boule de bowling</strong> a un rayon de $${r}$ cm.<br/><br/>Calcule son <strong>volume</strong>. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` },
          { build: () => `Une <strong>perle</strong> destinée à un collier a un rayon de $${r}$ cm.<br/><br/>Calcule son <strong>volume</strong> de matière. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.` }
        ]);

        return {
          statement: ctx.build(),
          answer: v,
          tolerance: 1,
          unit: 'cm³',
          hint: `$V = \\dfrac{4}{3} \\times 3{,}14 \\times ${r}^3 = \\dfrac{4}{3} \\times 3{,}14 \\times ${r*r*r}$.`,
          solution: [`$V = \\dfrac{4 \\times 3{,}14 \\times ${r*r*r}}{3} = \\dfrac{${numStr}}{3} \\approx ${vStr}$ cm³.`]
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
