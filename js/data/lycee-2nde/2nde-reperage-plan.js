/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-reperage-plan.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-reperage-plan',
    level: 2, subject: 'maths',
    icon: '📐',
    title: 'Repérage dans le plan',
    subtitle: 'Distances, milieux, coordonnées',
    keywords: ['Distance', 'Milieu', 'Coordonnées', 'Repère orthonormé'],
    physics: false,
    cours: {
      intro: 'Dans un repère orthonormé, chaque point du plan est identifié de façon unique par ses deux coordonnées $(x ; y)$. La formule $AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ est le théorème de Pythagore appliqué au triangle rectangle dont les côtés sont $|x_B-x_A|$ et $|y_B-y_A|$. Le milieu de $[AB]$ a pour coordonnées la moyenne arithmétique de celles des extrémités. Ces formules permettent de prouver des propriétés géométriques (isocèle, rectangle, parallélogramme) par le calcul, sans dessin — c\'est l\'approche de la géométrie analytique.',
      definitions: [
        { term: 'Repère orthonormé', def: 'Système d\'axes perpendiculaires $(Ox, Oy)$ avec la même unité sur chaque axe. Chaque point est repéré par $(x ; y)$.' },
        { term: 'Distance', def: 'Longueur du segment $[AB]$ : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, application directe du théorème de Pythagore.' },
        { term: 'Milieu', def: 'Point $M$ situé à égale distance de $A$ et $B$ : $M\\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$.' },
        { term: 'Géométrie analytique', def: 'Méthode qui utilise les coordonnées et le calcul pour prouver des propriétés géométriques (au lieu du raisonnement purement graphique).' }
      ],
      method: {
        title: 'Calculer distance et milieu',
        steps: [
          'Distance $AB$ : $d = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $AB = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
          'Milieu $M$ de $[AB]$ : $M\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2}\\right)$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $M\\left(\\frac{5}{2} ; 4\\right) = (2{,}5 ; 4)$.',
          'Vérifier en recalculant $MA = MB$. <strong>Exemple :</strong> $MA = \\sqrt{(2{,}5-1)^2+(4-2)^2} = \\sqrt{2{,}25+4} = \\sqrt{6{,}25} = 2{,}5$ et $MB = 2{,}5$ ✓.',
          'Attention aux signes lors des soustractions de coordonnées. <strong>Exemple :</strong> $A(-3 ; 5)$, $B(2 ; -1)$ → $x_B - x_A = 2 - (-3) = 5$ (pas $-1$).'
        ]
      },
      example: {
        statement: 'On donne $A(−2 ; 3)$ et $B(4 ; −1)$. Calculer $AB$ et les coordonnées du milieu $M$.',
        steps: [
          '$AB = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2} = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52}$.',
          '$\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13} \\approx 7{,}21$.',
          'Milieu : $M\\left(\\dfrac{-2+4}{2} ; \\dfrac{3+(-1)}{2}\\right) = M(1 ; 1)$.'
        ],
        answer: '$AB = 2\\sqrt{13} \\approx 7{,}21$ et $M(1 ; 1)$.'
      },
      formulas: [
        '$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$',
        '$M = \\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Repère orthonormé',
        title: 'Voir le triangle des écarts entre deux points',
        description: 'Avec $A(-2 ; 3)$ et $B(4 ; -1)$, le triangle rectangle formé par $\\Delta x$ et $\\Delta y$ rend visible la formule de la distance $AB = \\sqrt{\\Delta x^2 + \\Delta y^2}$ et prépare le calcul du milieu $M$.',
        svg: `
          <svg viewBox="0 0 380 300" role="img" aria-labelledby="reperage2nde-graph-title reperage2nde-graph-desc">
            <title id="reperage2nde-graph-title">Repere avec deux points et le triangle des ecarts</title>
            <desc id="reperage2nde-graph-desc">Repere orthonorme avec les points A(-2;3) et B(4;-1), et le triangle rectangle forme par les ecarts delta x et delta y entre les deux points.</desc>
            <line class="grid-line" x1="40" y1="20" x2="40" y2="236"></line>
            <line class="grid-line" x1="76" y1="20" x2="76" y2="236"></line>
            <line class="grid-line" x1="112" y1="20" x2="112" y2="236"></line>
            <line class="grid-line" x1="184" y1="20" x2="184" y2="236"></line>
            <line class="grid-line" x1="220" y1="20" x2="220" y2="236"></line>
            <line class="grid-line" x1="256" y1="20" x2="256" y2="236"></line>
            <line class="grid-line" x1="292" y1="20" x2="292" y2="236"></line>
            <line class="grid-line" x1="328" y1="20" x2="328" y2="236"></line>
            <line class="grid-line" x1="40" y1="20" x2="328" y2="20"></line>
            <line class="grid-line" x1="40" y1="56" x2="328" y2="56"></line>
            <line class="grid-line" x1="40" y1="92" x2="328" y2="92"></line>
            <line class="grid-line" x1="40" y1="128" x2="328" y2="128"></line>
            <line class="grid-line" x1="40" y1="200" x2="328" y2="200"></line>
            <line class="grid-line" x1="40" y1="236" x2="328" y2="236"></line>
            <line class="axis" x1="34" y1="164" x2="344" y2="164"></line>
            <line class="axis" x1="148" y1="246" x2="148" y2="10"></line>
            <line class="guide-line" x1="76" y1="56" x2="292" y2="56"></line>
            <line class="guide-line" x1="292" y1="56" x2="292" y2="200"></line>
            <line class="curve-main" x1="76" y1="56" x2="292" y2="200"></line>
            <circle class="plot-point" cx="76" cy="56" r="6"></circle>
            <circle class="plot-point" cx="292" cy="200" r="6"></circle>
            <circle class="plot-point-alt" cx="184" cy="128" r="5"></circle>
            <text class="annotation-label" x="16" y="44">A(-2 ; 3)</text>
            <text class="annotation-label" x="296" y="222">B(4 ; -1)</text>
            <text class="annotation-label" x="190" y="146">M(1 ; 1)</text>
            <text class="annotation-label" x="160" y="48">&#916;x = 6</text>
            <text class="annotation-label" x="225" y="132">&#916;y = -4</text>
            <text class="label-soft" x="94" y="94">AB &#8776; 7,21</text>
            <text class="axis-label" x="348" y="168">x</text>
            <text class="axis-label" x="152" y="16">y</text>
            <text class="tick-label" x="34" y="180">-3</text>
            <text class="tick-label" x="70" y="180">-2</text>
            <text class="tick-label" x="106" y="180">-1</text>
            <text class="tick-label" x="180" y="180">1</text>
            <text class="tick-label" x="216" y="180">2</text>
            <text class="tick-label" x="252" y="180">3</text>
            <text class="tick-label" x="288" y="180">4</text>
            <text class="tick-label" x="324" y="180">5</text>
            <text class="tick-label" x="126" y="24">4</text>
            <text class="tick-label" x="126" y="60">3</text>
            <text class="tick-label" x="126" y="96">2</text>
            <text class="tick-label" x="126" y="132">1</text>
            <text class="tick-label" x="130" y="204">-1</text>
            <text class="tick-label" x="130" y="240">-2</text>
            <text class="tick-label" x="140" y="176">0</text>
          </svg>
        `,
        notes: [
          'Le segment horizontal en pointillés mesure $\\Delta x = x_B - x_A = 4 - (-2) = 6$ : c\'est l\'écart entre les deux abscisses.',
          'Le segment vertical en pointillés mesure $\\Delta y = y_B - y_A = -1 - 3 = -4$ : c\'est l\'écart entre les deux ordonnées (négatif car $B$ est plus bas que $A$).',
          'La distance $AB$ est l\'hypoténuse de ce triangle rectangle : $AB = \\sqrt{\\Delta x^2 + \\Delta y^2} = \\sqrt{6^2+(-4)^2} = \\sqrt{52} = 2\\sqrt{13} \\approx 7{,}21$.'
        ],
        reading: 'Le point $M$ marqué sur $[AB]$ est le milieu : $M\\left(\\dfrac{-2+4}{2} ; \\dfrac{3+(-1)}{2}\\right) = M(1 ; 1)$, exactement au centre du segment.',
        caption: 'Repère orthonormé avec $A(-2 ; 3)$, $B(4 ; -1)$, le triangle des écarts $\\Delta x$/$\\Delta y$ et le milieu $M(1 ; 1)$, conformément à l\'exemple du cours.'
      },
      recap: [
        'La distance entre deux points est le théorème de Pythagore appliqué aux écarts de coordonnées.',
        'Le milieu a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées.',
        'Le sens de la soustraction n\'importe pas grâce au carré : $(x_A - x_B)^2 = (x_B - x_A)^2$.',
        'Pour prouver un triangle isocèle : calculer les trois côtés et comparer les longueurs.'
      ],
      piege: 'Ne pas confondre $AB^2 = (x_B-x_A)^2+(y_B-y_A)^2$ (pas de $2\\times$, c\'est la somme de deux carrés).'
    },
    quiz: [
      { q: 'Un élève calcule $AB$ avec $A(-3;2)$ et $B(5;-1)$ et écrit $AB = \\sqrt{(-3-5)^2+(2-(-1))^2}$. Ce calcul est-il correct ?', options: ['Oui : $(-8)^2+3^2 = 73$, donc $AB=\\sqrt{73}$ (le sens de la soustraction ne change pas le carré)', 'Non : il faut toujours faire $x_B - x_A$, jamais $x_A - x_B$', 'Non : il faut utiliser $|x_B-x_A|+|y_B-y_A|$ sans carré', 'Non : les coordonnées négatives s\'additionnent'], answer: 0, correction: 'Les deux écritures donnent le même résultat car $(x_A-x_B)^2 = (x_B-x_A)^2$. $AB = \\sqrt{(-8)^2+3^2} = \\sqrt{64+9} = \\sqrt{73}$ ✓ — le sens de la soustraction n\'importe pas grâce au carré.' },
      { q: 'Distance entre $O(0;0)$ et $A(3;4)$ ?', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], answer: 0, correction: '$OA=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.' },
      { q: 'Si $M(3;5)$ est le milieu de $[AB]$ et $A(1;3)$, alors $B$ est :', options: ['$(5;7)$', '$(2;4)$', '$(4;6)$', '$(6;10)$'], answer: 0, correction: '$x_B=2\\times 3-1=5$ ; $y_B=2\\times 5-3=7$. Donc $B(5;7)$.' },
      { q: 'On donne $A(0;0)$, $B(4;0)$ et $C(2;3)$. Le triangle $ABC$ est-il isocèle ?', options: ['Oui, car $AC = BC = \\sqrt{13}$', 'Non, car les trois côtés sont différents', 'Oui, car $AB = AC$', 'Impossible à déterminer sans dessiner'], answer: 0, correction: '$AB = 4$. $AC = \\sqrt{4 + 9} = \\sqrt{13}$. $BC = \\sqrt{4 + 9} = \\sqrt{13}$. Comme $AC = BC$, le triangle est isocèle en $C$. La géométrie analytique permet de prouver des propriétés par le calcul, sans dessin.' },
      { q: 'Un élève confond $AB^2$ avec $(x_B - x_A)^2 + 2(y_B - y_A)^2$. Pourquoi est-ce faux ?', options: ['La formule correcte est $(x_B-x_A)^2 + (y_B-y_A)^2$ sans coefficient $2$ — c\'est Pythagore, pas une identité remarquable', 'Le coefficient $2$ est correct dans un repère non orthonormé', 'L\'erreur est le signe, pas le coefficient', 'C\'est correct si l\'on divise par $2$ à la fin'], answer: 0, correction: 'La formule de la distance vient du théorème de Pythagore appliqué au triangle rectangle formé par les écarts horizontaux et verticaux. C\'est $AB^2 = \\Delta x^2 + \\Delta y^2$, jamais $2 \\cdot \\Delta y^2$. L\'ajout d\'un coefficient $2$ est probablement une confusion avec l\'identité $(a+b)^2 = a^2 + 2ab + b^2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

           MESURE DE DÉPART : 54 exercices retenus pour UNE SEULE tâche
           réelle. Les trois habillages (plan de ville, carte au trésor,
           robot) et les triplets pythagoriciens donnaient l'illusion de la
           variété, mais la question posée était invariablement « calcule AB
           puis le milieu ». C'est le cas d'école décrit par la section 11 du
           cahier des charges : la variété des NOMBRES masque l'absence de
           variété des TÂCHES.

           DÉFAUT DE FOND : le chapitre s'intitule « repérage dans le plan »
           et annonce la géométrie analytique — prouver des propriétés par le
           calcul —, mais aucune tâche ne demandait de PROUVER quoi que ce
           soit. L'attendu central du chapitre n'était pas travaillé.

           On passe à SEPT tâches, dont trois de preuve (isocèle, rectangle,
           parallélogramme) et une de symétrique, qui est la lecture inverse
           de la formule du milieu. */
        /* Le tirage est PONDÉRÉ, et non uniforme. La tâche
           « parallélogramme » a beaucoup plus de paramètres libres que les
           autres, donc beaucoup plus de moules distincts : à tirage uniforme
           elle survivait au plafond de répétitions bien mieux que ses
           voisines et occupait 126 des 300 exercices retenus, reléguant les
           preuves par Pythagore à 18.

           On la tire donc moins souvent. La pondération corrige la
           COMBINATOIRE du générateur, pas son importance pédagogique :
           mesurée le 2026-09-13, elle ramène la banque à une répartition
           lisible pour l'enseignant qui la feuillette. */
        const tache = pick([
          'distanceMilieu', 'distanceMilieu',
          'distanceSeule', 'distanceSeule',
          'milieuSeul', 'milieuSeul',
          'symetrique', 'symetrique',
          'isocele', 'isocele', 'isocele',
          'rectangle', 'rectangle', 'rectangle',
          'parallelogramme'
        ]);

        /* 1. Tache HISTORIQUE du chapitre : distance ET milieu en une
              seule question, dans un contexte. Conservee telle quelle,
              elle reste la tache de fond ; elle etait simplement la
              SEULE avant le 2026-09-13. */
        if (tache === 'distanceMilieu') {
          const contexts = [
            { intro: 'Sur un plan de ville (1 unité = 100 m), un piéton part de', dest: 'et se rend à', unit: 'unités' },
            { intro: 'Sur une carte au trésor (1 unité = 1 pas), le point de départ est', dest: 'et le trésor est en', unit: 'pas' },
            { intro: 'Dans un repère orthonormé, un robot part du point', dest: 'et doit atteindre', unit: 'unités' }
          ];
          const ctx = pick(contexts);
          const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];
          const t = pick(triples);
          const signX = pick([1, -1]);
          const signY = pick([1, -1]);
          const x1 = rand(-3, 5);
          const y1 = rand(-3, 5);
          const x2 = x1 + signX * t[0];
          const y2 = y1 + signY * t[1];
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          return {
            statement: `${ctx.intro} $A(${x1};${y1})$ ${ctx.dest} $B(${x2};${y2})$.<br/><br/><strong>1.</strong> Calculer la distance $AB$.<br/><strong>2.</strong> Déterminer les coordonnées du milieu $M$ de $[AB]$.<br/><strong>3.</strong> Vérifier que $MA = MB = AB/2$.<br/><br/>Donne la distance $AB$.`,
            answer: t[2],
            tolerance: 0.01,
            unit: ctx.unit,
            hint: `$AB = \\sqrt{(${x2}-${x1 < 0 ? '('+x1+')' : x1})^2+(${y2}-${y1 < 0 ? '('+y1+')' : y1})^2}$. Attention aux signes !`,
            solution: [
              `$AB = \\sqrt{(${x2}-(${x1}))^2+(${y2}-(${y1}))^2} = \\sqrt{${t[0]}^2+${t[1]}^2} = \\sqrt{${t[0]*t[0]}+${t[1]*t[1]}} = \\sqrt{${t[2]*t[2]}} = ${t[2]}$`,
              `Milieu $M\\left(\\frac{${x1}+${x2}}{2};\\frac{${y1}+${y2}}{2}\\right) = M(${fr(mx)};${fr(my)})$`,
              `Vérification : $MA = ${fr(t[2] / 2)}$ et $MB = ${fr(t[2] / 2)}$ ✓`
            ]
          };
        }


        /* 2. Distance seule, sans contexte : la formule nue, sur un triplet
              pythagoricien pour que le résultat soit entier. */
        if (tache === 'distanceSeule') {
          const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25]];
          const t = pick(triples);
          const sx = pick([1, -1]), sy = pick([1, -1]);
          const x1 = rand(-4, 4), y1 = rand(-4, 4);
          const x2 = x1 + sx * t[0], y2 = y1 + sy * t[1];
          return {
            statement: `On donne $A(${x1}\\,;\\,${y1})$ et $B(${x2}\\,;\\,${y2})$ dans un repère orthonormé.<br/><br/>Calcule la distance $AB$.`,
            answer: t[2],
            tolerance: 0.01,
            unit: '',
            hint: `$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$. Parenthèse chaque coordonnée négative avant de soustraire.`,
            solution: [
              `Distance entre deux points : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$`,
              `$AB = \\sqrt{(${x2} - (${x1}))^2 + (${y2} - (${y1}))^2} = \\sqrt{(${x2 - x1})^2 + (${y2 - y1})^2}$`,
              `$AB = \\sqrt{${(x2 - x1) * (x2 - x1)} + ${(y2 - y1) * (y2 - y1)}} = \\sqrt{${t[2] * t[2]}} = ${t[2]}$`
            ]
          };
        }

        /* 3. Milieu seul, à coordonnées entières. */
        if (tache === 'milieuSeul') {
          const xm = rand(-5, 6), ym = rand(-5, 6);
          const dx = rand(1, 6), dy = rand(1, 6);
          const x1 = xm - dx, y1 = ym - dy;
          const x2 = xm + dx, y2 = ym + dy;
          return {
            statement: `On donne $A(${x1}\\,;\\,${y1})$ et $B(${x2}\\,;\\,${y2})$.<br/><br/>Détermine les coordonnées du <strong>milieu</strong> $M$ de $[AB]$.<br/><br/>Donne l'abscisse de $M$.`,
            answer: xm,
            tolerance: 0,
            unit: '',
            hint: `Les coordonnées du milieu sont les <strong>moyennes</strong> de celles des extrémités : $x_M = \\dfrac{x_A + x_B}{2}$.`,
            solution: [
              `Milieu d'un segment : $M\\left(\\dfrac{x_A + x_B}{2}\\,;\\,\\dfrac{y_A + y_B}{2}\\right)$`,
              `$x_M = \\dfrac{${x1} + ${x2}}{2} = \\dfrac{${x1 + x2}}{2} = ${xm}$`,
              `$y_M = \\dfrac{${y1} + ${y2}}{2} = \\dfrac{${y1 + y2}}{2} = ${ym}$, donc $M(${xm}\\,;\\,${ym})$.`
            ]
          };
        }

        /* 4. Symétrique : la formule du milieu lue À L'ENVERS. Tâche ajoutée
              le 2026-09-13 — c'est elle qui distingue un élève qui a compris
              d'un élève qui applique. */
        if (tache === 'symetrique') {
          const xm = rand(-5, 6), ym = rand(-5, 6);
          const dx = rand(1, 7), dy = rand(1, 7);
          const x1 = xm - dx, y1 = ym - dy;
          const x2 = xm + dx, y2 = ym + dy;
          return {
            statement: `Le point $M(${xm}\\,;\\,${ym})$ est le <strong>milieu</strong> du segment $[AB]$, et l'on connaît $A(${x1}\\,;\\,${y1})$.<br/><br/>Détermine les coordonnées de $B$.<br/><br/>Donne l'abscisse de $B$.`,
            answer: x2,
            tolerance: 0,
            unit: '',
            hint: `Pars de $x_M = \\dfrac{x_A + x_B}{2}$ et cherche $x_B$ : multiplie d'abord les deux membres par $2$. Ne divise pas, c'est l'erreur classique ici.`,
            solution: [
              `Symétrique d'un point : je pars de $x_M = \\dfrac{x_A + x_B}{2}$`,
              `Je multiplie par $2$ : $x_A + x_B = 2 x_M = ${2 * xm}$, donc $x_B = ${2 * xm} - (${x1}) = ${x2}$.`,
              `De même $y_B = ${2 * ym} - (${y1}) = ${y2}$, donc $B(${x2}\\,;\\,${y2})$.`,
              `Contrôle : $M$ doit être à égale distance de $A$ et de $B$, ce qui se vérifie ici puisque $M$ est bien entre les deux.`
            ]
          };
        }

        /* 5, 6, 7 — les trois tâches de PREUVE, cœur annoncé du chapitre et
              entièrement absentes de la banque avant ce jour. */
        if (tache === 'isocele') {
          // Triangle isocele en C, par construction symetrique.
          const xa = rand(-4, 2), ya = rand(-4, 4);
          const base = pick([4, 6, 8, 10]);
          const xb = xa + base, yb = ya;
          const h = pick([3, 4, 5, 6]);
          const xc = xa + base / 2, yc = ya + h;
          const cote = Math.sqrt((base / 2) * (base / 2) + h * h);
          const estEntier = Number.isInteger(cote);
          return {
            statement: `On donne $A(${xa}\\,;\\,${ya})$, $B(${xb}\\,;\\,${yb})$ et $C(${xc}\\,;\\,${yc})$.<br/><br/>Démontre, <strong>par le calcul</strong>, que le triangle $ABC$ est isocèle.<br/><br/>Donne la longueur $AB$ (celle du côté qui n'est pas répété).`,
            answer: base,
            tolerance: 0.01,
            unit: '',
            hint: `Calcule les <strong>trois</strong> longueurs $AB$, $AC$ et $BC$, puis compare-les. Un triangle est isocèle dès que deux côtés sont égaux.`,
            solution: [
              `Preuve par le calcul : je compare les trois longueurs`,
              `$AB = \\sqrt{${base}^2 + 0^2} = ${base}$`,
              `$AC = \\sqrt{${base / 2}^2 + ${h}^2} = \\sqrt{${(base / 2) * (base / 2) + h * h}}${estEntier ? ' = ' + cote : ' \\approx ' + fr(cote, 2)}$`,
              `$BC = \\sqrt{(-${base / 2})^2 + ${h}^2} = \\sqrt{${(base / 2) * (base / 2) + h * h}}${estEntier ? ' = ' + cote : ' \\approx ' + fr(cote, 2)}$`,
              `Comme $AC = BC$, le triangle est <strong>isocèle en $C$</strong>. Aucun dessin n'a été nécessaire : c'est tout l'intérêt de la géométrie analytique.`
            ]
          };
        }

        if (tache === 'rectangle') {
          // Triangle rectangle en A : les deux cotes de l'angle droit sont
          // portes par des directions perpendiculaires, par construction.
          const xa = rand(-4, 3), ya = rand(-4, 3);
          const t = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]);
          const sx = pick([1, -1]), sy = pick([1, -1]);
          const xb = xa + sx * t[0], yb = ya;
          const xc = xa, yc = ya + sy * t[1];
          return {
            statement: `On donne $A(${xa}\\,;\\,${ya})$, $B(${xb}\\,;\\,${yb})$ et $C(${xc}\\,;\\,${yc})$.<br/><br/><strong>1.</strong> Calcule $AB$, $AC$ et $BC$.<br/><strong>2.</strong> Montre, par la réciproque du théorème de Pythagore, que $ABC$ est rectangle en $A$.<br/><br/>Donne la longueur $BC$ (l'hypoténuse).`,
            answer: t[2],
            tolerance: 0.01,
            unit: '',
            hint: `Calcule les trois longueurs, puis compare $BC^2$ à $AB^2 + AC^2$. Si les deux sont égaux, le triangle est rectangle.`,
            solution: [
              `Preuve par la réciproque de Pythagore : je calcule les trois longueurs`,
              `$AB = ${t[0]}$ et $AC = ${t[1]}$ (les deux points sont alignés avec $A$ sur un axe)`,
              `$BC = \\sqrt{${t[0]}^2 + ${t[1]}^2} = \\sqrt{${t[0] * t[0] + t[1] * t[1]}} = ${t[2]}$`,
              `Or $AB^2 + AC^2 = ${t[0] * t[0]} + ${t[1] * t[1]} = ${t[0] * t[0] + t[1] * t[1]}$ et $BC^2 = ${t[2] * t[2]}$.`,
              `Les deux sont égaux, donc par la <strong>réciproque du théorème de Pythagore</strong>, le triangle est rectangle en $A$.`
            ]
          };
        }

        /* 7. Parallelogramme : caracterisation par les MILIEUX des diagonales.

           LES DEUX VECTEURS NE DOIVENT JAMAIS ETRE COLINEAIRES, sinon le
           quadrilatere est APLATI : ses quatre sommets sont alignes, deux
           d'entre eux peuvent meme se confondre, et l'enonce demande alors
           de prouver qu'un segment est un parallelogramme.

           Defaut trouve le 2026-09-13 PAR LE CALCUL, sur 1200 tirages : sept
           cas degeneres, dont « A(1;-1) et C(1;-1) », c'est-a-dire deux
           sommets superposes. Aucun n'etait visible a la relecture du code,
           et la propriete des milieux restait vraie — le quadrilatere etait
           donc bien un parallelogramme au sens strict, mais impossible a
           dessiner et absurde a demontrer.

           On impose donc un determinant non nul, qui est exactement la
           condition de non-alignement. */
        /* Les deux vecteurs sont choisis dans une LISTE COURTE de couples
           non colinéaires, plutôt que tirés indépendamment.

           Deux raisons, la seconde mesurée le 2026-09-13 :
           — le déterminant est non nul PAR CONSTRUCTION, donc aucun cas
             dégénéré n'est possible ;
           — surtout, le nombre de MOULES devient fini. Avec quatre
             coordonnées tirées librement, cette tâche produisait des
             centaines de moules distincts ; comme le plafond de répétitions
             s'applique PAR MOULE, elle survivait au filtrage bien mieux que
             ses voisines et raflait 126 des 300 exercices retenus. Pondérer
             le tirage n'y changeait rien — c'est la combinatoire qu'il
             fallait réduire, pas la fréquence. */
        const xa = rand(-5, 2), ya = rand(-4, 3);
        const couple = pick([
          { ux: 4, uy: 1, vx: -2, vy: 3 },
          { ux: 5, uy: -2, vx: -1, vy: 4 },
          { ux: 3, uy: 2, vx: -4, vy: 2 },
          { ux: 6, uy: 0, vx: -2, vy: 5 },
          { ux: 2, uy: -3, vx: -5, vy: 2 },
          { ux: 4, uy: 3, vx: -3, vy: 3 }
        ]);
        const ux = couple.ux, uy = couple.uy, vx = couple.vx, vy = couple.vy;
        const xb = xa + ux, yb = ya + uy;
        const xc = xb + vx, yc = yb + vy;
        const xd = xa + vx, yd = ya + vy;
        const mx = (xa + xc) / 2, my = (ya + yc) / 2;
        return {
          statement: `On donne $A(${xa}\\,;\\,${ya})$, $B(${xb}\\,;\\,${yb})$, $C(${xc}\\,;\\,${yc})$ et $D(${xd}\\,;\\,${yd})$.<br/><br/>Démontre que $ABCD$ est un <strong>parallélogramme</strong>, en montrant que ses deux diagonales ont le même milieu.<br/><br/>Donne l'abscisse de ce milieu commun.`,
          answer: mx,
          tolerance: 0.01,
          unit: '',
          hint: `Calcule le milieu de $[AC]$, puis celui de $[BD]$. Un quadrilatère est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.`,
          solution: [
            `Preuve par les milieux des diagonales : je calcule les deux milieux`,
            `Milieu de $[AC]$ : $\\left(\\dfrac{${xa} + ${xc}}{2}\\,;\\,\\dfrac{${ya} + ${yc}}{2}\\right) = (${fr(mx)}\\,;\\,${fr(my)})$`,
            `Milieu de $[BD]$ : $\\left(\\dfrac{${xb} + ${xd}}{2}\\,;\\,\\dfrac{${yb} + ${yd}}{2}\\right) = (${fr((xb + xd) / 2)}\\,;\\,${fr((yb + yd) / 2)})$`,
            `Les deux milieux sont <strong>confondus</strong>, donc les diagonales se coupent en leur milieu : $ABCD$ est un parallélogramme.`
          ]
        };
      }
    },
    probleme: {
      context: 'Sur une carte (1 unité = 1 km), trois villes : $A(1;2)$, $B(7;2)$, $C(4;6)$.',
      tasks: [
        'Calculer les longueurs $AB$, $AC$ et $BC$.',
        'Déterminer les coordonnées du milieu $M$ de $[BC]$.',
        'Vérifier que $AM$ est la médiane issue de $A$.'
      ],
      solutions: [
        '$AB=6$ km ; $AC=\\sqrt{9+16}=5$ km ; $BC=\\sqrt{9+16}=5$ km.',
        '$M=\\left(\\frac{7+4}{2};\\frac{2+6}{2}\\right)=(5{,}5;4)$.',
        '$AM=\\sqrt{(5{,}5-1)^2+(4-2)^2}=\\sqrt{20{,}25+4}=\\sqrt{24{,}25}\\approx 4{,}92$ km.'
      ],
      finalAnswer: 'Triangle isocèle : $AC=BC=5$ km. Milieu de $BC$ : $M(5{,}5;4)$.'
    },

    evaluation: {
      title: 'Évaluation — Repérage dans le plan',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la distance entre les points $A(1 ; 3)$ et $B(4 ; 7)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$AB = \\sqrt{(4-1)^2 + (7-3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-13. L'ancienne appliquait la formule du
             milieu et demandait un nombre : « calculer », déjà porté par Q1 et
             Q5 du même devoir. La nouvelle demande de LIRE une configuration
             sur un repère et d'y reconnaître une propriété géométrique, sans
             changer ni les points ni la réponse ($x_M = 5$) : c'est
             « représenter ». */
          statement: 'Dans un repère, on place $A(2 ; 6)$ et $B(8 ; 4)$, puis le point $M$ qui est le <strong>centre de symétrie</strong> du segment $[AB]$.<br/><br/>Donne l\'abscisse de $M$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le centre de symétrie d\'un segment est son <strong>milieu</strong> : c\'est le seul point qui échange $A$ et $B$ par symétrie centrale.<br/><br/>Ses coordonnées sont donc les moyennes de celles des extrémités : $x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{2 + 8}{2} = 5$.<br/><br/>De même $y_M = \\dfrac{6+4}{2} = 5$, donc $M(5 ; 5)$. Si tu places les trois points, tu vois que $M$ est bien à égale distance de $A$ et de $B$, sur le segment.'
        },
        {
          statement: 'Si $M(3 ; 4)$ est le milieu de $[AB]$ et $A(-1 ; 2)$, calculer l\'ordonnée de $B$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y_M = \\dfrac{y_A + y_B}{2} \\Rightarrow 4 = \\dfrac{2 + y_B}{2} \\Rightarrow 8 = 2 + y_B \\Rightarrow y_B = 6$.'
        },
        {
          statement: 'On donne $A(0;0)$, $B(6;0)$ et $C(3;4)$. Le triangle $ABC$ est-il isocèle ?',
          type: 'multiple-choice',
          options: ['Oui, car $AC = BC = 5$', 'Oui, car $AB = AC$', 'Non, tous les côtés sont différents', 'Oui, car $AB = BC$'],
          answer: 0,
          points: 2,
          correction: '$AB = 6$. $AC = \\sqrt{9 + 16} = 5$. $BC = \\sqrt{9 + 16} = 5$. Comme $AC = BC = 5$, le triangle est isocèle en $C$.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13. L'ancienne, « Calculer la
             distance entre P(-2;5) et Q(3;-7) », doublait la Q1 du même
             devoir : deux fois la même formule sur deux couples de points.
             La nouvelle pose une situation concrète que l'élève doit
             traduire en coordonnées avant de pouvoir calculer, ce qui est
             « modéliser ». La réponse reste $13$. */
          statement: 'Une ville est quadrillée par des rues perpendiculaires, et l\'on repère chaque lieu par ses coordonnées (une unité vaut $100$ m).<br/><br/>La poste est en $P(-2 ; 5)$ et la gare en $Q(3 ; -7)$.<br/><br/>Un drone relie les deux en ligne droite. Quelle distance parcourt-il, en unités ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La situation se traduit directement par un calcul de distance entre deux points du repère.<br/><br/>$PQ = \\sqrt{(3-(-2))^2 + (-7-5)^2} = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>Le drone parcourt donc $13$ unités, soit $1\\,300$ m. Un piéton, lui, devrait suivre les rues : il marcherait $5 + 12 = 17$ unités. C\'est tout l\'écart entre la ligne droite et le trajet à angle droit.'
        }
      ]
    }
  });
