/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-electromagnetisme.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-electromagnetisme',
    level: 3, subject: 'physique',
    icon: '🧲',
    title: 'Électromagnétisme (champs, induction)',
    subtitle: 'Champ magnétique, force de Laplace, flux magnétique, loi de Faraday, induction électromagnétique',
    keywords: ['Champ magnétique', 'Force de Laplace', 'Flux magnétique', 'Loi de Faraday', 'Induction'],
    physics: 'L\'électromagnétisme est au cœur du fonctionnement des moteurs électriques, des générateurs, des transformateurs et des capteurs de proximité inductifs largement utilisés dans les systèmes automatisés.',

    cours: {
      intro: 'Un courant électrique crée autour de lui un <strong>champ magnétique</strong> $\\vec{B}$ (en teslas, T), que l\'on peut mettre en évidence à l\'aide d\'une boussole ou de limaille de fer. Réciproquement, un conducteur parcouru par un courant et placé dans un champ magnétique subit une force, la <strong>force de Laplace</strong>.<br/><br/>Le <strong>flux magnétique</strong> $\\Phi$ à travers une surface traduit la quantité de champ magnétique qui la traverse. Lorsque ce flux <strong>varie au cours du temps</strong> (déplacement d\'un aimant, rotation d\'une bobine, variation d\'un courant), un phénomène remarquable apparaît : l\'<strong>induction électromagnétique</strong>, décrite par la <strong>loi de Faraday</strong>.<br/><br/>Ce principe d\'induction est à la base du fonctionnement des générateurs électriques, des transformateurs et de nombreux capteurs de proximité utilisés en milieu industriel.',
      definitions: [
        { term: 'Champ magnétique $\\vec{B}$', def: 'Grandeur vectorielle (en teslas, T) créée par un aimant ou un courant électrique, qui traduit l\'influence magnétique en un point de l\'espace. Sa direction est donnée, pour un fil rectiligne, par la règle de la main droite.' },
        { term: 'Force de Laplace', def: 'Force $\\vec{F}$ subie par un conducteur de longueur $\\ell$, parcouru par un courant $I$, placé dans un champ magnétique $\\vec{B}$ perpendiculaire au conducteur. Son intensité vaut $F = B \\times I \\times \\ell$ (en newtons, N).' },
        { term: 'Flux magnétique $\\Phi$', def: 'Grandeur scalaire (en webers, Wb) traduisant la quantité de champ magnétique traversant une surface $S$ : $\\Phi = B \\times S \\times \\cos(\\theta)$, où $\\theta$ est l\'angle entre $\\vec{B}$ et la normale à la surface. Le flux est maximal quand $\\vec{B}$ est perpendiculaire à la surface ($\\theta = 0$).' },
        { term: 'Loi de Faraday (induction)', def: 'Une variation du flux magnétique $\\Phi$ à travers un circuit fait apparaître une <strong>force électromotrice induite</strong> $e$ (en volts, V) aux bornes de ce circuit : $e = -\\dfrac{d\\Phi}{dt}$. Plus le flux varie rapidement, plus la tension induite est grande.' }
      ],
      method: {
        title: 'Calculer une grandeur électromagnétique en 3 étapes',
        steps: [
          '<strong>Identifier le phénomène en jeu</strong> : force subie par un conducteur dans un champ (force de Laplace), ou variation de flux générant une tension (induction/loi de Faraday) ?',
          '<strong>Repérer les grandeurs données</strong> et leurs unités : champ $B$ (T), courant $I$ (A), longueur $\\ell$ (m) pour Laplace ; surface $S$ (m²), angle $\\theta$, variation de temps $\\Delta t$ (s) pour le flux et l\'induction.',
          '<strong>Appliquer la formule adaptée</strong> — $F = B I \\ell$ pour la force de Laplace, ou $e = -\\dfrac{\\Delta\\Phi}{\\Delta t}$ pour la force électromotrice induite — puis vérifier la cohérence de l\'unité du résultat.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Induction électromagnétique',
        title: 'Variation du flux magnétique et f.é.m. induite dans une bobine',
        description: 'Quand un aimant se rapproche d\'une bobine, le flux magnétique $\\Phi$ à travers celle-ci <strong>augmente</strong> au cours du temps, ce qui fait apparaître une <strong>tension induite</strong> $e$ à ses bornes, mesurable par un voltmètre.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="induction-title induction-desc">
            <title id="induction-title">Schema d'induction electromagnetique par approche d'un aimant</title>
            <desc id="induction-desc">Un aimant se deplace vers une bobine de fil conducteur, representee par une serie de spires. Une fleche indique le sens de deplacement de l'aimant vers la bobine. Un voltmetre branche aux bornes de la bobine indique une tension induite non nulle, notee e, qui apparait lorsque l'aimant se deplace.</desc>

            <defs>
              <marker id="arrow-physbts-induction" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- aimant -->
            <rect class="frame-line" x="70" y="120" width="90" height="40" fill="none"></rect>
            <line class="frame-line" x1="115" y1="120" x2="115" y2="160"></line>
            <text class="tick-label" x="92" y="145" text-anchor="middle">N</text>
            <text class="tick-label" x="138" y="145" text-anchor="middle">S</text>

            <!-- fleche de deplacement -->
            <line class="curve-main" x1="170" y1="140" x2="230" y2="140" marker-end="url(#arrow-physbts-induction)"></line>
            <text class="annotation-label" x="200" y="128" text-anchor="middle">v</text>

            <!-- bobine (spires) -->
            <ellipse class="frame-line" cx="270" cy="140" rx="18" ry="40" fill="none"></ellipse>
            <ellipse class="frame-line" cx="300" cy="140" rx="18" ry="40" fill="none"></ellipse>
            <ellipse class="frame-line" cx="330" cy="140" rx="18" ry="40" fill="none"></ellipse>
            <ellipse class="frame-line" cx="360" cy="140" rx="18" ry="40" fill="none"></ellipse>
            <text class="tick-label" x="315" y="200" text-anchor="middle">Bobine</text>

            <!-- fils vers le voltmetre -->
            <line class="frame-line" x1="360" y1="100" x2="460" y2="100"></line>
            <line class="frame-line" x1="360" y1="180" x2="460" y2="180"></line>
            <line class="frame-line" x1="460" y1="100" x2="460" y2="120"></line>
            <line class="frame-line" x1="460" y1="160" x2="460" y2="180"></line>

            <!-- voltmetre -->
            <circle class="frame-line" cx="460" cy="140" r="20" fill="none"></circle>
            <text class="tick-label" x="460" y="146" text-anchor="middle">V</text>
            <text class="annotation-label" x="460" y="100" text-anchor="middle" dy="-8">e ≠ 0</text>
          </svg>
        `,
        notes: [
          'Tant que l\'aimant est <strong>immobile</strong>, le flux magnétique à travers la bobine ne varie pas, et aucune tension n\'est induite ($e = 0$).',
          'Dès que l\'aimant <strong>se déplace</strong> (se rapproche ou s\'éloigne), le flux $\\Phi$ varie au cours du temps, ce qui fait apparaître une tension induite $e = -\\dfrac{d\\Phi}{dt}$, mesurable par le voltmètre.',
          'Plus le déplacement de l\'aimant est <strong>rapide</strong>, plus la variation de flux est rapide, et plus la tension induite $e$ est grande en valeur absolue.'
        ],
        reading: 'Suis le déplacement de l\'aimant vers la bobine : ce mouvement fait varier le flux magnétique à travers les spires, ce qui provoque l\'apparition d\'une tension mesurée par le voltmètre.',
        caption: 'Principe de l\'induction électromagnétique : le déplacement de l\'aimant fait varier le flux magnétique à travers la bobine, ce qui induit une tension $e$ à ses bornes.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Force de Laplace',
          title: 'Comment trouver le sens de la force de Laplace ?',
          description: 'Un conducteur rectiligne parcouru par un courant $I$ et placé perpendiculairement à un champ magnétique $\\vec{B}$ subit une <strong>force de Laplace</strong> $\\vec{F}$, perpendiculaire à la fois à $I$ et à $B$.<br/><br/>Ce schéma reprend exactement les valeurs de l\'exemple du cours : $\\ell = 0{,}20$ m, $I = 3$ A, $B = 0{,}5$ T, donc $F = B \\times I \\times \\ell = 0{,}3$ N.',
          svg: `
            <svg viewBox="0 0 560 370" role="img" aria-labelledby="laplace-diagram-title laplace-diagram-desc">
              <title id="laplace-diagram-title">Schema de la force de Laplace sur un conducteur rectiligne</title>
              <desc id="laplace-diagram-desc">Un conducteur rectiligne horizontal est parcouru par un courant I vers la droite. Un champ magnetique B, vertical et perpendiculaire au conducteur, traverse le fil ; deux fleches paralleles plus fines rappellent qu'il s'agit d'un champ uniforme. Une fleche de force F part du meme point que I et B et pointe en oblique vers le bas-gauche, hors du plan de la figure, vers le lecteur : elle est perpendiculaire aux deux autres vecteurs dans l'espace, meme si son angle sur le dessin n'est pas de 90 degres avec eux, du fait de la perspective. Un petit repere d'angle droit indique la perpendicularite entre I et B au point d'origine commun. Une cote sous le conducteur indique sa longueur, 0,20 metre. Un texte en bas rappelle la regle de la main droite : pouce vers I, index vers B, majeur vers F.</desc>

              <defs>
                <marker id="em-laplace-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- conducteur rectiligne -->
              <line class="frame-line" x1="140" y1="190" x2="400" y2="190"></line>
              <line class="frame-line" x1="140" y1="182" x2="140" y2="198"></line>
              <line class="frame-line" x1="400" y1="182" x2="400" y2="198"></line>

              <!-- champ B : lignes de champ secondaires (uniformite) -->
              <line class="guide-line" x1="180" y1="190" x2="180" y2="110" marker-end="url(#em-laplace-arrow)"></line>
              <line class="guide-line" x1="360" y1="190" x2="360" y2="110" marker-end="url(#em-laplace-arrow)"></line>

              <!-- vecteur I (courant), le long du conducteur -->
              <line class="curve-main" x1="270" y1="190" x2="380" y2="190" marker-end="url(#em-laplace-arrow)"></line>
              <text class="annotation-label" x="325" y="176" text-anchor="middle">I = 3 A</text>

              <!-- vecteur B (champ), perpendiculaire a I dans le plan de la figure -->
              <line class="curve-main" x1="270" y1="190" x2="270" y2="80" marker-end="url(#em-laplace-arrow)"></line>
              <text class="annotation-label" x="284" y="76" text-anchor="start">B = 0,5 T</text>

              <!-- vecteur F (force), perpendiculaire a I et B : sort du plan vers le lecteur -->
              <line class="curve-main" x1="270" y1="190" x2="202.8" y2="257.2" marker-end="url(#em-laplace-arrow)"></line>
              <text class="annotation-label" x="150" y="274" text-anchor="middle">F = 0,3 N</text>

              <!-- repere d'angle droit entre I et B -->
              <polyline points="286,190 286,174 270,174" class="frame-line" fill="none"></polyline>

              <!-- origine commune des 3 vecteurs -->
              <circle class="plot-point-alt" cx="270" cy="190" r="4"></circle>

              <!-- cote de longueur du conducteur -->
              <line class="guide-line" x1="140" y1="285" x2="400" y2="285" marker-start="url(#em-laplace-arrow)" marker-end="url(#em-laplace-arrow)"></line>
              <text class="tick-label" x="270" y="304" text-anchor="middle">ℓ = 0,20 m</text>

              <!-- rappel de la regle de la main droite -->
              <text class="tick-label" x="270" y="332" text-anchor="middle">Règle de la main droite (trois doigts) :</text>
              <text class="tick-label" x="270" y="349" text-anchor="middle">pouce → I, index → B, majeur (⊥ aux deux) → F</text>
            </svg>
          `,
          notes: [
            'Le courant $I$ et le champ $\\vec{B}$ sont <strong>tous les deux dans le plan de la figure</strong>, et réellement perpendiculaires entre eux — conforme à l\'énoncé : le conducteur est placé perpendiculairement au champ.',
            'La force $\\vec{F}$ est perpendiculaire à la fois à $I$ et à $\\vec{B}$ : elle <strong>sort du plan de la figure</strong>, vers toi. Sur le dessin, son angle avec $I$ et $B$ n\'est pas de 90° — c\'est un simple effet de perspective (le schéma représente les 3 dimensions de l\'espace sur une feuille plane) : dans la réalité, les trois vecteurs restent bien mutuellement perpendiculaires.',
            'La <strong>règle de la main droite</strong> (règle des trois doigts) donne le sens de $\\vec{F}$ à partir de $I$ et $\\vec{B}$ : pouce → $I$, index → $\\vec{B}$, majeur (perpendiculaire aux deux autres doigts) → $\\vec{F}$.',
            'Application numérique, avec les valeurs de l\'exemple du cours : $F = B \\times I \\times \\ell = 0{,}5 \\times 3 \\times 0{,}20 = 0{,}3$ N.'
          ],
          reading: 'Repère d\'abord le conducteur (le trait horizontal épais) et le sens du courant $I$. Cherche ensuite la direction du champ $\\vec{B}$, perpendiculaire au conducteur dans le plan de la figure. La force $\\vec{F}$ est alors donnée par la règle de la main droite : perpendiculaire aux deux, elle sort du plan de la figure vers toi sur ce schéma.',
          caption: 'Force de Laplace $\\vec{F} = I\\vec{\\ell} \\times \\vec{B}$ sur le conducteur de l\'exemple du cours ($\\ell = 0{,}20$ m, $I = 3$ A, $B = 0{,}5$ T perpendiculaire) : $F = 0{,}3$ N, orientée selon la règle de la main droite.'
        }
      ],
      example: {
        statement: 'Un conducteur rectiligne de longueur $\\ell = 0{,}20$ m, parcouru par un courant $I = 3$ A, est placé perpendiculairement à un champ magnétique uniforme $B = 0{,}5$ T.<br/><br/>Calculer l\'intensité de la force de Laplace $F$ subie par ce conducteur.',
        steps: [
          'Le conducteur est perpendiculaire au champ $\\vec{B}$ : on peut appliquer directement la formule de la force de Laplace $F = B \\times I \\times \\ell$.',
          'Application numérique : $F = 0{,}5 \\times 3 \\times 0{,}20$.',
          'Calcul : $F = 0{,}5 \\times 3 \\times 0{,}20 = 0{,}3$ N.'
        ],
        answer: '$F = 0{,}3$ N. Cette force, perpendiculaire à la fois au conducteur et au champ magnétique, est le principe de base du fonctionnement des moteurs électriques.'
      },
      formulas: [
        'Force de Laplace : $F = B \\times I \\times \\ell$ (champ perpendiculaire au conducteur)',
        'Flux magnétique à travers une surface : $\\Phi = B \\times S \\times \\cos(\\theta)$',
        'Loi de Faraday (f.é.m. induite) : $e = -\\dfrac{\\Delta\\Phi}{\\Delta t}$',
        'Flux maximal (champ perpendiculaire à la surface, $\\theta = 0$) : $\\Phi_{max} = B \\times S$'
      ],
      recap: [
        'Un conducteur parcouru par un courant $I$, placé dans un champ magnétique $B$ perpendiculaire, subit une <strong>force de Laplace</strong> $F = BI\\ell$.',
        'Le <strong>flux magnétique</strong> $\\Phi = B S \\cos(\\theta)$ est maximal quand le champ est perpendiculaire à la surface, nul quand il lui est parallèle.',
        'Une <strong>variation du flux</strong> magnétique à travers un circuit induit une tension $e = -\\dfrac{\\Delta\\Phi}{\\Delta t}$ : c\'est le principe de l\'<strong>induction électromagnétique</strong>.',
        'Plus la variation de flux est <strong>rapide</strong>, plus la tension induite est grande : un aimant immobile n\'induit rien, un aimant en mouvement rapide induit une forte tension.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'un champ magnétique constant, même intense, induit une tension dans un circuit fixe : c\'est faux, seule une <strong>variation</strong> du flux magnétique dans le temps produit une f.é.m. induite. Attention également à ne pas oublier l\'angle $\\theta$ dans le calcul du flux $\\Phi = BS\\cos(\\theta)$ : si le champ est parallèle à la surface plutôt que perpendiculaire, le flux est nul.'
    },

    quiz: [
      {
        q: 'Un conducteur de longueur $\\ell = 0{,}5$ m, parcouru par un courant $I = 2$ A, est placé perpendiculairement à un champ magnétique $B = 0{,}4$ T. Quelle est l\'intensité de la force de Laplace ?',
        options: [
          '$F = 0{,}4$ N',
          '$F = 0{,}8$ N',
          '$F = 1{,}6$ N',
          '$F = 4$ N'
        ],
        answer: 0,
        correction: 'Force de Laplace : $F = B \\times I \\times \\ell = 0{,}4 \\times 2 \\times 0{,}5 = 0{,}4$ N.'
      },
      {
        q: 'Un aimant reste parfaitement immobile devant une bobine fermée. Que vaut la tension induite $e$ à ses bornes ?',
        options: [
          '$e = 0$, car le flux magnétique ne varie pas',
          '$e$ est maximale, car le champ magnétique est présent',
          '$e$ dépend uniquement de l\'intensité du champ, pas de son mouvement',
          '$e$ oscille en permanence'
        ],
        answer: 0,
        correction: 'La loi de Faraday donne $e = -\\dfrac{d\\Phi}{dt}$ : si l\'aimant est immobile, le flux $\\Phi$ ne varie pas, donc $e = 0$, même si le champ magnétique est intense.'
      },
      {
        q: 'Une surface $S = 0{,}02$ m² est placée dans un champ magnétique uniforme $B = 0{,}3$ T, parfaitement perpendiculaire à la surface. Quel est le flux magnétique $\\Phi$ à travers cette surface ?',
        options: [
          '$\\Phi = 0{,}006$ Wb',
          '$\\Phi = 0{,}32$ Wb',
          '$\\Phi = 15$ Wb',
          '$\\Phi = 0$ Wb'
        ],
        answer: 0,
        correction: 'Le champ étant perpendiculaire à la surface, $\\theta=0$ et $\\cos(\\theta)=1$ : $\\Phi = B \\times S = 0{,}3 \\times 0{,}02 = 0{,}006$ Wb.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['laplace', 'flux']);

        if (typeExo === 'laplace') {
          var B = pick([0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 1]);
          var I = pick([1, 1.5, 2, 2.5, 3, 4, 5]);
          var L = pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.5]);
          var F = parseFloat((B * I * L).toFixed(4));
          var contexte = pick([
            'un petit moteur électrique en atelier',
            'un banc d\'essai électrotechnique',
            'un actionneur électromagnétique',
            'un dispositif de mesure en laboratoire'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un conducteur rectiligne de longueur $\\ell = ' + fr(L, 2) + '$ m, parcouru par un courant $I = ' + fr(I, 1) + '$ A, est placé perpendiculairement à un champ magnétique uniforme $B = ' + fr(B, 1) + '$ T.<br/><br/>Calcule l\'intensité de la force de Laplace $F$ subie par ce conducteur (en N).',
            answer: F,
            tolerance: Math.max(0.005, parseFloat((F * 0.03).toFixed(4))),
            unit: 'N',
            hint: 'Force de Laplace : $F = B \\times I \\times \\ell$.',
            solution: [
              'Formule : $F = B \\times I \\times \\ell = ' + fr(B, 1) + ' \\times ' + fr(I, 1) + ' \\times ' + fr(L, 2) + '$.',
              'Résultat : $F \\approx ' + fr(F, 3) + '$ N.'
            ]
          };
        } else {
          var Bf = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5]);
          var S = pick([0.01, 0.02, 0.03, 0.05, 0.08, 0.1]);
          var Phi = parseFloat((Bf * S).toFixed(5));
          var contexte2 = pick([
            'une bobine de capteur inductif',
            'un enroulement de transformateur',
            'une spire de mesure en laboratoire',
            'un capteur de proximité industriel'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', une surface $S = ' + fr(S, 2) + '$ m² est placée dans un champ magnétique uniforme $B = ' + fr(Bf, 2) + '$ T, parfaitement perpendiculaire à la surface.<br/><br/>Calcule le flux magnétique $\\Phi$ à travers cette surface (en Wb).',
            answer: Phi,
            tolerance: Math.max(0.0005, parseFloat((Phi * 0.03).toFixed(5))),
            unit: 'Wb',
            hint: 'Champ perpendiculaire à la surface : $\\Phi = B \\times S$.',
            solution: [
              'Formule (champ perpendiculaire, $\\theta=0$) : $\\Phi = B \\times S = ' + fr(Bf, 2) + ' \\times ' + fr(S, 2) + '$.',
              'Résultat : $\\Phi \\approx ' + fr(Phi, 4) + '$ Wb.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une bobine plate de surface $S = 0{,}05$ m² est traversée par un champ magnétique perpendiculaire dont l\'intensité varie régulièrement au cours du temps : $B = 0{,}2$ T à $t=0$ s, puis $B = 0{,}6$ T à $t=0{,}4$ s.',
      tasks: [
        'Calculer le flux magnétique $\\Phi_1$ à travers la bobine à $t=0$ s.',
        'Calculer le flux magnétique $\\Phi_2$ à travers la bobine à $t=0{,}4$ s.',
        'En déduire la valeur absolue de la force électromotrice induite $|e|$ dans la bobine pendant cet intervalle de temps.'
      ],
      solutions: [
        'Champ perpendiculaire à la surface : $\\Phi_1 = B_1 \\times S = 0{,}2 \\times 0{,}05 = 0{,}01$ Wb.',
        '$\\Phi_2 = B_2 \\times S = 0{,}6 \\times 0{,}05 = 0{,}03$ Wb.',
        'Variation de flux : $\\Delta\\Phi = \\Phi_2 - \\Phi_1 = 0{,}03 - 0{,}01 = 0{,}02$ Wb, sur une durée $\\Delta t = 0{,}4$ s. D\'où $|e| = \\left|\\dfrac{\\Delta\\Phi}{\\Delta t}\\right| = \\dfrac{0{,}02}{0{,}4} = 0{,}05$ V.'
      ],
      finalAnswer: '$\\Phi_1 = 0{,}01$ Wb, $\\Phi_2 = 0{,}03$ Wb, et $|e| = 0{,}05$ V. Cette tension induite, bien que faible ici, illustre le principe exploité dans les générateurs : une variation de champ magnétique, obtenue par exemple en faisant tourner une bobine, permet de produire de l\'électricité en continu.'
    },

    evaluation: {
      title: 'Évaluation — Électromagnétisme (champs, induction)',
      duration: '30 min',
      questions: [
        {
          statement: 'Un conducteur de longueur $\\ell = 0{,}3$ m, parcouru par un courant $I = 4$ A, est perpendiculaire à un champ $B = 0{,}25$ T. Calculer la force de Laplace $F$ (en N).',
          type: 'numeric',
          answer: 0.3,
          tolerance: 0.01,
          unit: 'N',
          points: 2,
          correction: '$F = B \\times I \\times \\ell = 0{,}25 \\times 4 \\times 0{,}3 = 0{,}3$ N.'
        },
        {
          statement: 'Le flux magnétique $\\Phi = B \\times S \\times \\cos(\\theta)$ à travers une surface est nul lorsque :',
          type: 'multiple-choice',
          options: [
            'Le champ $\\vec{B}$ est perpendiculaire à la surface',
            'Le champ $\\vec{B}$ est parallèle à la surface ($\\theta = 90°$)',
            'Le champ $\\vec{B}$ est nul uniquement',
            'La surface est très grande'
          ],
          answer: 1,
          points: 2,
          correction: 'Quand $\\vec{B}$ est parallèle à la surface, l\'angle $\\theta = 90°$ et $\\cos(90°) = 0$, donc $\\Phi = 0$, même si $B$ est intense.'
        },
        {
          statement: 'Une surface $S = 0{,}04$ m² est perpendiculaire à un champ $B = 0{,}5$ T. Calculer le flux magnétique $\\Phi$ (en Wb).',
          type: 'numeric',
          answer: 0.02,
          tolerance: 0.001,
          unit: 'Wb',
          points: 2,
          correction: '$\\Phi = B \\times S = 0{,}5 \\times 0{,}04 = 0{,}02$ Wb.'
        },
        {
          statement: 'Le flux à travers une bobine passe de $\\Phi_1 = 0{,}02$ Wb à $\\Phi_2 = 0{,}05$ Wb en $\\Delta t = 0{,}2$ s. Calculer la valeur absolue de la f.é.m. induite $|e|$ (en V).',
          type: 'numeric',
          answer: 0.15,
          tolerance: 0.01,
          unit: 'V',
          points: 3,
          correction: '$|e| = \\left|\\dfrac{\\Delta\\Phi}{\\Delta t}\\right| = \\dfrac{0{,}05-0{,}02}{0{,}2} = \\dfrac{0{,}03}{0{,}2} = 0{,}15$ V.'
        },
        {
          statement: 'Un aimant se déplace très rapidement devant une bobine, contre un déplacement lent avec la même bobine. Dans quel cas la tension induite $|e|$ est-elle la plus grande ?',
          type: 'multiple-choice',
          options: [
            'Avec le déplacement rapide, car le flux varie plus vite',
            'Avec le déplacement lent, car le flux a plus de temps pour s\'établir',
            'La tension induite est la même dans les deux cas',
            'Aucune tension n\'est induite dans les deux cas'
          ],
          answer: 0,
          points: 2,
          correction: 'D\'après $e = -\\dfrac{\\Delta\\Phi}{\\Delta t}$, plus le déplacement est rapide, plus $\\Delta t$ est petit pour une même variation de flux $\\Delta\\Phi$, donc plus $|e|$ est grande.'
        }
      ]
    }
  });
