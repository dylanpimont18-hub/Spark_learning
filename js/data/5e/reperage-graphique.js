/* =========================================================
   Spark Learning – data/5e/reperage-graphique.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'reperage-graphique',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Repérage spatial et Lecture Graphique',
    subtitle: 'Repère cartésien, interpolation, extrapolation',
    keywords: ['Abscisse', 'Ordonnée', 'Graphique', 'Interpolation'],
    physics: 'Suivi de croissance en SVT, relevés météo, mouvement à vitesse constante en physique-chimie',

    cours: {
      intro: 'Un graphique traduit visuellement une relation entre deux grandeurs. L\'axe horizontal (<strong>abscisse</strong>) porte la variable que l\'on contrôle, l\'axe vertical (<strong>ordonnée</strong>) porte ce que l\'on observe.<br/><br/>' +
        '<strong>Interpoler</strong> signifie estimer une valeur entre deux points mesurés — c\'est fiable si la courbe est régulière. <strong>Extrapoler</strong> signifie prolonger au-delà des mesures — c\'est risqué car une courbe linéaire dans une plage peut devenir non linéaire ailleurs.<br/><br/>' +
        'La <strong>pente</strong> d\'une droite $a = \\dfrac{\\Delta y}{\\Delta x}$ a toujours un sens concret : si $y$ = distance parcourue et $x$ = temps, alors $a$ est une <strong>vitesse</strong> (en km/h par exemple) — le nombre de km gagnés à chaque heure qui passe.<br/><br/>' +
        'Ne jamais lire un graphe sans vérifier les <strong>unités sur les axes</strong> et l\'origine. Un graphique sans légende est inutilisable !',
      definitions: [
        { term: 'Abscisse', def: 'Coordonnée horizontale d\'un point dans un repère. Première valeur du couple $(x ; y)$.' },
        { term: 'Ordonnée', def: 'Coordonnée verticale d\'un point dans un repère. Seconde valeur du couple $(x ; y)$.' },
        { term: 'Interpolation', def: 'Estimation d\'une valeur entre deux points de mesure connus. Fiable si la courbe est régulière.' },
        { term: 'Extrapolation', def: 'Prolongation de la tendance au-delà des mesures. Moins fiable — nécessite une justification physique.' }
      ],
      example: {
        statement: 'Une droite passe par $A(1 ; 3)$ et $B(4 ; 9)$. Calcule sa pente et son équation.',
        steps: [
          'Pente : $a = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.',
          'Ordonnée à l\'origine : $b = y_A - a \\cdot x_A = 3 - 2 \\times 1 = 1$.',
          'Équation : $y = 2x + 1$.'
        ],
        answer: '$y = 2x + 1$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Repère cartésien',
        title: 'Lire un point, interpoler et reconnaître une pente',
        description: 'La droite $y = 2x + 1$ passe par $A(1 ; 3)$ et $B(4 ; 9)$. On voit comment lire un point et estimer une valeur intermédiaire sur une tendance régulière.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="reperage-graph-title reperage-graph-desc">
            <title id="reperage-graph-title">Droite de lecture graphique dans un repère</title>
            <desc id="reperage-graph-desc">La droite représente y égale à 2x plus 1, avec deux points connus et une lecture intermédiaire par interpolation.</desc>
            <line class="grid-line" x1="50" y1="30" x2="310" y2="30"></line>
            <line class="grid-line" x1="50" y1="62" x2="310" y2="62"></line>
            <line class="grid-line" x1="50" y1="94" x2="310" y2="94"></line>
            <line class="grid-line" x1="50" y1="126" x2="310" y2="126"></line>
            <line class="grid-line" x1="50" y1="158" x2="310" y2="158"></line>
            <line class="grid-line" x1="50" y1="190" x2="310" y2="190"></line>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="190"></line>
            <line class="grid-line" x1="102" y1="30" x2="102" y2="190"></line>
            <line class="grid-line" x1="154" y1="30" x2="154" y2="190"></line>
            <line class="grid-line" x1="206" y1="30" x2="206" y2="190"></line>
            <line class="grid-line" x1="258" y1="30" x2="258" y2="190"></line>
            <line class="grid-line" x1="310" y1="30" x2="310" y2="190"></line>
            <line class="axis" x1="50" y1="190" x2="318" y2="190"></line>
            <line class="axis" x1="50" y1="198" x2="50" y2="22"></line>
            <polyline class="graph-line" points="50,174 102,142 154,110 206,78 258,46 310,14"></polyline>
            <line class="guide-line" x1="180" y1="94" x2="180" y2="190"></line>
            <line class="guide-line" x1="50" y1="94" x2="180" y2="94"></line>
            <circle class="plot-point-alt" cx="102" cy="142" r="6"></circle>
            <circle class="plot-point-alt" cx="258" cy="46" r="6"></circle>
            <circle class="plot-point" cx="180" cy="94" r="6"></circle>
            <text class="annotation-label" x="112" y="134">A(1 ; 3)</text>
            <text class="annotation-label" x="196" y="86">Interpolation : (2{,}5 ; 6)</text>
            <text class="annotation-label" x="224" y="38">B(4 ; 9)</text>
            <text class="axis-label" x="322" y="194">x</text>
            <text class="axis-label" x="56" y="24">y</text>
            <text class="tick-label" x="46" y="206">0</text>
            <text class="tick-label" x="98" y="206">1</text>
            <text class="tick-label" x="150" y="206">2</text>
            <text class="tick-label" x="202" y="206">3</text>
            <text class="tick-label" x="254" y="206">4</text>
            <text class="tick-label" x="306" y="206">5</text>
            <text class="tick-label" x="36" y="194">0</text>
            <text class="tick-label" x="36" y="162">2</text>
            <text class="tick-label" x="36" y="130">4</text>
            <text class="tick-label" x="36" y="98">6</text>
            <text class="tick-label" x="36" y="66">8</text>
            <text class="tick-label" x="30" y="34">10</text>
          </svg>
        `,
        notes: [
          'Le point $A(1 ; 3)$ se lit en allant d’abord vers la droite jusqu’à $x = 1$, puis vers le haut jusqu’à $y = 3$.',
          'Le point intermédiaire $(2{,}5 ; 6)$ n’a pas été mesuré : on l’estime sur la droite, c’est une interpolation.',
          'Comme la droite monte régulièrement, la pente est positive : quand $x$ augmente d’une unité, $y$ augmente de $2$.'
        ],
        reading: 'Toujours lire l’abscisse sur l’axe horizontal puis l’ordonnée sur l’axe vertical. Le couple s’écrit dans cet ordre : $(x ; y)$.',
        caption: 'Repère cartésien avec lecture d’un point connu, d’un second point et d’une valeur interpolée sur la droite $y = 2x + 1$.'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier les axes</strong> : abscisse $x$ (horizontal) = variable indépendante ; ordonnée $y$ (vertical) = variable dépendante.',
          '<strong>Lire un point $(x_0, y_0)$</strong> : partir de $x_0$ sur l\'axe des x, monter verticalement jusqu\'\u00e0 la courbe, puis lire l\'ordonnée à gauche.',
          '<strong>Interpoler / Extrapoler</strong> : interpoler = trouver une valeur entre deux points mesurés ; extrapoler = prolonger la tendance au-delà des mesures (moins fiable).'
        ]
      },
      formulas: [
        'Pente d\'une droite : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$',
        'Équation d\'une droite : $y = ax + b$',
        'Ordonnée à l\'origine : $b = y_1 - a \\cdot x_1$'
      ],
      recap: [
        'Un point se repère par un couple $(x ; y)$ : abscisse d\'abord, ordonnée ensuite.',
        'La pente $a$ se calcule par $\\dfrac{\\Delta y}{\\Delta x}$ — même ordre de soustraction au numérateur et dénominateur.',
        'Interpoler (entre les données) est plus fiable qu\'extrapoler (au-delà).',
        'Toujours vérifier les unités sur les axes avant de lire un graphique.'
      ],
      piege: 'Ne jamais extrapoler trop loin ! La taille d\'un enfant peut suivre une droite assez régulière pendant quelques années, mais cette tendance ne continue pas indéfiniment (personne ne mesure $3$ mètres à $40$ ans). L\'extrapolation n\'est valide que si on a une bonne raison de croire que la tendance se poursuit.'
    },

    quiz: [
      {
        q: 'Sur un graphe, un point a pour coordonnées $(3 ; 7{,}5)$. Cela signifie que :',
        options: [
          'L\'abscisse est $7{,}5$ et l\'ordonnée est $3$',
          'L\'abscisse est $3$ et l\'ordonnée est $7{,}5$',
          'La pente est $7{,}5 / 3 = 2{,}5$',
          'Le point est à $3 + 7{,}5 = 10{,}5$ unités de l\'origine'
        ],
        answer: 1,
        correction: 'Dans le couple $(x ; y)$, le premier terme est TOUJOURS l\'abscisse (axe horizontal) et le second est l\'ordonnée (axe vertical). Donc abscisse = 3, ordonnée = 7,5.'
      },
      {
        q: 'Un robinet remplit un bassin à débit constant. Le niveau d\'eau suit une droite passant par $(0 ; 0)$ et $(2 ; 0{,}8)$ (temps en minutes ; hauteur en mètres). Quelle est la hauteur d\'eau après $1{,}5$ minute ?',
        options: ['$0{,}4$', '$0{,}5$', '$0{,}6$', '$0{,}75$'],
        answer: 2,
        correction: 'Pente : $a = 0{,}8/2 = 0{,}4$ m/min. Pour $t = 1{,}5$ min : $h = 0{,}4 \\times 1{,}5 = 0{,}6$ m. Interpolation linéaire directe.'
      },
      {
        q: 'Une droite passe par $(0 ; 2)$ et $(4 ; 2)$. Un élève dit que sa pente est $\\dfrac{4}{2} = 2$. Quelle est son erreur ?',
        options: [
          'Il a raison : la pente est $\\dfrac{x}{y} = \\dfrac{4}{2} = 2$.',
          'Il a inversé : la pente est $\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{2-2}{4-0} = \\dfrac{0}{4} = 0$. La droite est horizontale.',
          'Il a mal choisi les points : il faut prendre $(4;2)$ et $(2;4)$.',
          'La pente est $\\dfrac{2}{4} = 0{,}5$.'
        ],
        answer: 1,
        correction: 'La pente se calcule toujours $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$, jamais $\\dfrac{x}{y}$. Ici $y$ ne change pas ($y_1 = y_2 = 2$), donc $\\Delta y = 0$ et la pente est nulle : la droite est horizontale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { name: 'la distance parcourue par un cycliste', unitX: 'h', unitY: 'km' },
          { name: 'le prix total à payer', unitX: 'L', unitY: '€' },
          { name: 'la hauteur d\'un plant', unitX: 'semaines', unitY: 'cm' },
          { name: 'le nombre de pages lues', unitX: 'jours', unitY: 'pages' }
        ]);
        const x1 = rand(1, 5);
        const a = randFloat(0.5, 3.0, 1);
        const b = rand(0, 5);
        const y1 = parseFloat((a * x1 + b).toFixed(1));
        const x2 = x1 + rand(2, 5);
        const y2 = parseFloat((a * x2 + b).toFixed(1));
        const slope = parseFloat(((y2 - y1) / (x2 - x1)).toFixed(2));
        return {
          statement: `On suit ${ctx.name} : à $x_1 = ${x1}$ ${ctx.unitX}, on mesure $y_1 = ${fr(y1)}$ ${ctx.unitY} ; à $x_2 = ${x2}$ ${ctx.unitX}, on mesure $y_2 = ${fr(y2)}$ ${ctx.unitY}. Sur un graphique, ces deux mesures correspondent aux points $A(${x1} ; ${fr(y1)})$ et $B(${x2} ; ${fr(y2)})$.<br/><br/>Calcule le coefficient directeur (la pente) de la droite $(AB)$.`,
          answer: slope,
          tolerance: 0.02,
          unit: `${ctx.unitY}/${ctx.unitX}`,
          hint: `La formule de la pente est $a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${fr(y2)} - ${fr(y1)}}{${x2} - ${x1}}$. Fais bien la soustraction dans le même ordre au numérateur et au dénominateur !`,
          solution: [
            `On applique la formule : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$`,
            `$a = \\dfrac{${fr(y2)} - ${fr(y1)}}{${x2} - ${x1}} = \\dfrac{${fr(y2 - y1, 1)}}{${x2 - x1}}$`,
            `$a = ${fr(slope)}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un pépiniériste mesure chaque semaine la hauteur d\'un jeune plant : à $S = 2$ semaines, il mesure $12$ cm ; à $S = 6$ semaines, il mesure $28$ cm. Sur cette période, la croissance est régulière (le graphique est une droite).',
      schema: 'Droite passant par les points (2 ; 12) et (6 ; 28) dans un repère Semaines / Hauteur (cm).',
      tasks: [
        'Calculer la pente de la droite (la vitesse de croissance, en cm par semaine).',
        'Par interpolation, estimer la hauteur du plant à $S = 4$ semaines.',
        'Peut-on utiliser la même méthode pour prédire la hauteur du plant à $S = 50$ semaines ? Pourquoi ?'
      ],
      solutions: [
        'Pente $a = \\dfrac{28 - 12}{6 - 2} = \\dfrac{16}{4} = 4$ cm par semaine.',
        '$S = 4$ est entre les deux mesures (interpolation) : $12 + 4 \\times (4 - 2) = 12 + 8 = 20$ cm.',
        'Non : cela reviendrait à extrapoler très loin des mesures, en supposant que la croissance reste linéaire indéfiniment — or une plante ralentit en vieillissant. Extrapoler loin des données mesurées n\'est pas fiable.'
      ],
      finalAnswer: 'À $4$ semaines, le plant mesure environ $20$ cm (interpolation fiable) ; on ne peut pas prédire fiablement sa hauteur à $50$ semaines par extrapolation.'
    },

    evaluation: {
      title: 'Évaluation — Repérage spatial et Lecture Graphique',
      duration: '25 min',
      questions: [
        {
          statement: 'Un point $M$ a pour coordonnées $(4 ; -2)$ dans un repère. Quelle est son ordonnée ?',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Dans un couple $(x ; y)$, le premier nombre est l\'abscisse et le second est l\'ordonnée. Ici l\'ordonnée est $-2$.'
        },
        {
          statement: 'Une droite passe par $A(1 ; 3)$ et $B(5 ; 11)$. Quelle est la pente (coefficient directeur) de cette droite ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2$.'
        },
        {
          statement: 'La droite $d$ a pour équation $y = 3x + 1$. Quelle est l\'ordonnée du point de $d$ dont l\'abscisse est $x = 4$ ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On remplace $x$ par $4$ : $y = 3 \\times 4 + 1 = 12 + 1 = 13$.'
        },
        {
          statement: 'Qu\'appelle-t-on « interpoler » sur un graphique ?',
          type: 'multiple-choice',
          options: [
            'Prolonger la courbe au-delà des points mesurés.',
            'Estimer une valeur entre deux points mesurés.',
            'Tracer la tangente à la courbe en un point.',
            'Calculer l\'aire sous la courbe.'
          ],
          answer: 1,
          points: 2,
          correction: 'Interpoler signifie estimer une valeur entre deux points de mesure connus. Extrapoler, en revanche, consiste à prolonger la tendance au-delà des mesures — une démarche moins fiable.'
        },
        {
          statement: 'Une droite passe par $(0 ; 5)$ et $(3 ; 5)$. Quelle est sa pente ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{5 - 5}{3 - 0} = \\dfrac{0}{3} = 0$. La droite est horizontale : l\'ordonnée ne change pas.'
        }
      ]
    }
  });
