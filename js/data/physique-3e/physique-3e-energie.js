/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-energie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-energie',
    level: 1, subject: 'physique',
    icon: '🎢',
    title: 'L\'énergie cinétique et potentielle',
    subtitle: 'Énergie cinétique, énergie potentielle de pesanteur, énergie mécanique et sa conservation',
    keywords: ['Énergie cinétique', 'Énergie potentielle', 'Énergie mécanique', 'Conservation de l\'énergie'],
    physics: 'Les notions d\'énergie cinétique et potentielle permettent de comprendre le fonctionnement des montagnes russes, le freinage d\'un véhicule, le dimensionnement d\'un barrage hydroélectrique, ou encore pourquoi une chute de plus haut est plus dangereuse : à chaque fois, c\'est un transfert entre énergie de position et énergie de mouvement qui est en jeu.',

    cours: {
      intro: 'Un système en mouvement possède de l\'<strong>énergie cinétique</strong> $E_c$, qui dépend de sa masse et de sa vitesse. Un système situé en hauteur, dans le champ de pesanteur terrestre, possède de l\'<strong>énergie potentielle de pesanteur</strong> $E_{pp}$, qui dépend de sa masse et de son altitude.<br/><br/>La somme de ces deux formes d\'énergie constitue l\'<strong>énergie mécanique</strong> $E_m = E_c + E_{pp}$ du système. Lorsqu\'un objet tombe ou glisse le long d\'une pente <strong>sans frottement</strong>, son énergie mécanique reste constante : elle se transforme continuellement entre énergie potentielle et énergie cinétique, sans jamais se perdre.<br/><br/>En présence de frottements (air, contact), une partie de cette énergie mécanique est <strong>dissipée</strong> sous forme de chaleur : l\'énergie mécanique du système diminue alors progressivement.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: 'Énergie que possède un système du fait de son mouvement : $E_c = \\dfrac{1}{2} m v^2$, avec $m$ en kg, $v$ en m/s et $E_c$ en joules (J). Elle augmente avec le carré de la vitesse : doubler la vitesse quadruple l\'énergie cinétique.' },
        { term: 'Énergie potentielle de pesanteur ($E_{pp}$)', def: 'Énergie que possède un système du fait de son altitude $h$ dans le champ de pesanteur : $E_{pp} = m \\times g \\times h$, avec $g \\approx 9{,}8$ N/kg à la surface de la Terre. Elle se compte par rapport à une altitude de référence choisie (souvent $E_{pp}=0$ au niveau du sol).' },
        { term: 'Énergie mécanique ($E_m$)', def: 'Somme de l\'énergie cinétique et de l\'énergie potentielle de pesanteur : $E_m = E_c + E_{pp}$. Elle se conserve en l\'absence de frottement.' },
        { term: 'Frottement', def: 'Force qui s\'oppose au mouvement (air, contact entre surfaces) et convertit une partie de l\'énergie mécanique en chaleur : en sa présence, l\'énergie mécanique du système <strong>diminue</strong> au cours du mouvement.' }
      ],
      method: {
        title: 'Étudier un transfert d\'énergie mécanique en 3 étapes',
        steps: [
          '<strong>Identifier le système et les deux instants à comparer</strong> (par exemple le sommet et le bas d\'une pente), et calculer l\'énergie cinétique et l\'énergie potentielle à chacun de ces instants.<br/>Exemple : au sommet d\'un toboggan, un enfant est immobile ($v=0$, donc $E_c=0$) à une hauteur $h$ ($E_{pp}=mgh$).',
          '<strong>Déterminer si le mouvement se fait sans frottement</strong> : si c\'est le cas, l\'énergie mécanique se conserve entre les deux instants, donc $E_{m,1} = E_{m,2}$.<br/>Exemple : en bas du toboggan (sans frottement), $E_{pp}=0$ (référence au sol) et toute l\'énergie s\'est transformée en énergie cinétique.',
          '<strong>Écrire l\'égalité des énergies mécaniques</strong> et en déduire la grandeur cherchée (souvent une vitesse).<br/>Exemple : $E_{c,bas} = E_{pp,haut}$ donne $\\dfrac{1}{2}mv^2 = mgh$, soit $v = \\sqrt{2gh}$ — la masse se simplifie, la vitesse ne dépend que de la hauteur de chute.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de l\'énergie mécanique',
        title: 'Transformation de l\'énergie potentielle en énergie cinétique le long d\'une pente sans frottement',
        description: 'Un objet glisse sans frottement d\'un point A en hauteur (immobile, uniquement de l\'énergie potentielle) vers un point B au sol (uniquement de l\'énergie cinétique). Les diagrammes en barres montrent que la somme $E_c+E_{pp}$ reste constante entre les deux états.',
        svg: `
          <svg viewBox="0 0 600 340" role="img" aria-labelledby="energie-title energie-desc">
            <title id="energie-title">Conservation de l'energie mecanique le long d'une pente</title>
            <desc id="energie-desc">Une courbe descend d'un point A en hauteur, ou l'objet est immobile, jusqu'a un point B au niveau du sol, ou sa vitesse est maximale. A droite, deux paires de barres verticales de meme hauteur totale representent la repartition de l'energie entre potentielle et cinetique a chacun des deux points : au point A la barre d'energie potentielle est pleine et celle d'energie cinetique est vide, tandis qu'au point B c'est l'inverse, illustrant la conservation de l'energie mecanique.</desc>

            <defs>
              <marker id="arrow-phys3e-energie" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="40" y1="300" x2="570" y2="300"></line>
            <line class="grid-line" x1="55" y1="300" x2="45" y2="312"></line>
            <line class="grid-line" x1="80" y1="300" x2="70" y2="312"></line>
            <line class="grid-line" x1="105" y1="300" x2="95" y2="312"></line>
            <line class="grid-line" x1="130" y1="300" x2="120" y2="312"></line>
            <line class="grid-line" x1="155" y1="300" x2="145" y2="312"></line>

            <!-- pente (toboggan) -->
            <path class="curve-main" d="M100,100 Q100,300 300,300" fill="none"></path>

            <!-- point A (sommet) -->
            <circle class="plot-point" cx="100" cy="100" r="5"></circle>
            <text class="label-soft" x="100" y="86" text-anchor="middle">A (v = 0)</text>

            <!-- point B (bas) -->
            <circle class="plot-point-alt" cx="300" cy="300" r="5"></circle>
            <text class="label-soft" x="300" y="322" text-anchor="middle">B (sol)</text>
            <line class="curve-main" x1="300" y1="300" x2="335" y2="300" marker-end="url(#arrow-phys3e-energie)"></line>
            <text class="tick-label" x="350" y="292" text-anchor="start">v_max</text>

            <!-- cotation hauteur h -->
            <line class="frame-line" x1="55" y1="100" x2="41" y2="100"></line>
            <line class="frame-line" x1="55" y1="300" x2="41" y2="300"></line>
            <line class="guide-line" x1="48" y1="100" x2="48" y2="300"></line>
            <text class="tick-label" x="30" y="200" text-anchor="middle" transform="rotate(-90 30 200)">h</text>

            <!-- diagrammes en barres : etat en A -->
            <text class="annotation-label" x="430" y="130" text-anchor="middle">A</text>
            <rect x="395" y="140" width="30" height="160" fill="var(--diagram-accent)"></rect>
            <rect class="frame-line" x="435" y="294" width="30" height="6" fill="none"></rect>
            <text class="tick-label" x="410" y="314" text-anchor="middle">Epp</text>
            <text class="tick-label" x="450" y="314" text-anchor="middle">Ec</text>

            <!-- diagrammes en barres : etat en B -->
            <text class="annotation-label" x="525" y="130" text-anchor="middle">B</text>
            <rect class="frame-line" x="490" y="294" width="30" height="6" fill="none"></rect>
            <rect x="530" y="140" width="30" height="160" fill="var(--diagram-accent)"></rect>
            <text class="tick-label" x="505" y="314" text-anchor="middle">Epp</text>
            <text class="tick-label" x="545" y="314" text-anchor="middle">Ec</text>

            <!-- ligne pointillee Em constante -->
            <line class="guide-line" x1="390" y1="140" x2="565" y2="140"></line>
            <text class="annotation-label" x="388" y="133" text-anchor="end">Em constante</text>
          </svg>
        `,
        notes: [
          'Au point A (sommet), l\'objet est immobile : toute l\'énergie mécanique est de l\'énergie potentielle de pesanteur ($E_c=0$).',
          'Au point B (sol, référence d\'altitude choisie), l\'énergie potentielle est nulle : toute l\'énergie mécanique s\'est transformée en énergie cinétique.',
          'Les deux diagrammes en barres ont la <strong>même hauteur totale</strong> : c\'est la traduction visuelle de la conservation de l\'énergie mécanique $E_m=E_c+E_{pp}$ en l\'absence de frottement.'
        ],
        reading: 'Suis la trajectoire du point A (en haut) au point B (en bas), puis compare les deux paires de barres à droite : la partie pleine « bascule » de l\'énergie potentielle vers l\'énergie cinétique, mais leur somme ne change pas.',
        caption: 'Conservation de l\'énergie mécanique le long d\'une pente sans frottement : l\'énergie potentielle de pesanteur au point A se retrouve intégralement transformée en énergie cinétique au point B.'
      },
      example: {
        statement: 'Un skieur de masse $m=60$ kg part sans vitesse initiale du sommet d\'une piste située à $h=20$ m d\'altitude par rapport au bas de la piste. On néglige tous les frottements (neige très glissante, air négligé) et on prend $g=9{,}8$ N/kg.<br/><br/>Calcule l\'énergie mécanique du skieur au sommet, puis sa vitesse en bas de la piste.',
        steps: [
          'Au sommet, le skieur est immobile : $v=0$, donc $E_c=0$ J. Son énergie potentielle de pesanteur (référence au bas de la piste) est $E_{pp}=mgh=60\\times9{,}8\\times20=11\\,760$ J.',
          'L\'énergie mécanique au sommet est donc $E_m = E_c+E_{pp} = 0+11\\,760 = 11\\,760$ J.',
          'Sans frottement, l\'énergie mécanique se conserve : elle vaut encore $11\\,760$ J en bas de la piste. Or en bas, $h=0$ (référence), donc $E_{pp}=0$ : toute l\'énergie mécanique est devenue énergie cinétique, $E_c = 11\\,760$ J.',
          'On isole $v$ dans $E_c=\\dfrac{1}{2}mv^2$ : $v=\\sqrt{\\dfrac{2E_c}{m}}=\\sqrt{\\dfrac{2\\times11\\,760}{60}}=\\sqrt{392}\\approx19{,}8$ m/s.'
        ],
        answer: 'L\'énergie mécanique du skieur, constante tout au long de la descente sans frottement, vaut $E_m=11\\,760$ J. Il arrive en bas de piste avec une vitesse $v\\approx19{,}8$ m/s (plus de $70$ km/h), entièrement due à la conversion de l\'énergie potentielle initiale en énergie cinétique.'
      },
      formulas: [
        '$E_c = \\dfrac{1}{2} m v^2$ (énergie cinétique, en J)',
        '$E_{pp} = m \\times g \\times h$ (énergie potentielle de pesanteur, en J)',
        '$E_m = E_c + E_{pp}$ (énergie mécanique)',
        'Sans frottement : $E_m$ constante, donc $E_{m,1}=E_{m,2}$',
        'Glissement/chute sans frottement, départ immobile : $v = \\sqrt{2gh}$'
      ],
      recap: [
        'L\'énergie cinétique $E_c=\\frac12mv^2$ dépend du carré de la vitesse : doubler la vitesse quadruple l\'énergie cinétique.',
        'L\'énergie potentielle de pesanteur $E_{pp}=mgh$ dépend de la masse, de l\'altitude, et de la référence choisie pour $h$.',
        'En l\'absence de frottement, l\'énergie mécanique $E_m=E_c+E_{pp}$ se <strong>conserve</strong> : elle se transforme entre les deux formes sans se perdre.',
        'En présence de frottements, une partie de l\'énergie mécanique est dissipée sous forme de chaleur : $E_m$ diminue au cours du mouvement.'
      ],
      piege: 'Une erreur fréquente est d\'oublier le carré dans la formule de l\'énergie cinétique, en calculant $\\frac12 m v$ au lieu de $\\frac12 m v^2$, ou de croire que l\'énergie mécanique se conserve même en présence de frottements. Attention : le carré de la vitesse ne doit jamais être omis, et la conservation de $E_m$ ne s\'applique que si les frottements sont négligeables.'
    },

    quiz: [
      {
        q: 'Un objet de masse $m=2$ kg se déplace à une vitesse $v=3$ m/s. Quelle est son énergie cinétique ?',
        options: ['$E_c=9$ J', '$E_c=18$ J', '$E_c=6$ J', '$E_c=36$ J'],
        answer: 0,
        correction: '$E_c=\\dfrac12mv^2=\\dfrac12\\times2\\times3^2=\\dfrac12\\times2\\times9=9$ J. Attention à bien élever la vitesse au carré avant de multiplier.'
      },
      {
        q: 'Doubler la vitesse d\'un objet, à masse constante, multiplie son énergie cinétique par :',
        options: ['2', '4', '8', 'Elle ne change pas'],
        answer: 1,
        correction: 'Comme $E_c=\\frac12mv^2$ dépend du <strong>carré</strong> de la vitesse, doubler $v$ multiplie $E_c$ par $2^2=4$, pas par 2.'
      },
      {
        q: 'Un pendule oscille sans frottement. Au point le plus bas de sa trajectoire, sa vitesse est maximale. Que peut-on dire de son énergie potentielle de pesanteur à cet instant ?',
        options: [
          'Elle est minimale, car l\'énergie mécanique se conserve et l\'énergie cinétique est maximale',
          'Elle est maximale également',
          'Elle est nulle en permanence, quel que soit l\'instant',
          'Elle est toujours égale à l\'énergie cinétique'
        ],
        answer: 0,
        correction: 'Sans frottement, $E_m=E_c+E_{pp}$ est constante. Quand $E_c$ est maximale (vitesse maximale, point bas), $E_{pp}$ est donc minimale : c\'est un transfert continu entre les deux formes d\'énergie.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['cinetique', 'conservation']);

        if (typeExo === 'cinetique') {
          var m = randFloat(2, 90, 1);
          var v = rand(2, 25);
          var Ec = parseFloat((0.5 * m * v * v).toFixed(1));
          var contexte = pick([
            'un cycliste et son vélo', 'un skateboard avec son utilisateur',
            'un ballon de bowling lancé sur la piste', 'un chariot de manutention',
            'une luge avec son occupant'
          ]);
          return {
            statement: 'Sur une piste, ' + contexte + ', de masse totale $m=' + fr(m, 1) + '$ kg, se déplace à une vitesse $v=' + v + '$ m/s.<br/><br/>Calcule son énergie cinétique $E_c$ (en J, arrondie au dixième).',
            answer: Ec,
            tolerance: Math.max(0.5, parseFloat((Ec * 0.03).toFixed(1))),
            unit: 'J',
            hint: '$E_c=\\dfrac12mv^2$ : élève d\'abord la vitesse au carré, multiplie ensuite par la masse et par $0{,}5$.',
            solution: [
              'Formule : $E_c=\\dfrac12 m v^2 = \\dfrac12\\times' + fr(m, 1) + '\\times' + v + '^2$.',
              'Carré de la vitesse : $' + v + '^2 = ' + (v * v) + '$.',
              'Résultat : $E_c = 0{,}5\\times' + fr(m, 1) + '\\times' + (v * v) + ' \\approx ' + fr(Ec, 1) + '$ J.'
            ]
          };
        } else {
          var h = randFloat(2, 50, 1);
          var g = 9.8;
          var vBas = parseFloat(Math.sqrt(2 * g * h).toFixed(1));
          var contexte2 = pick([
            'un toboggan aquatique', 'une piste de VTT en descente',
            'un plan incliné de laboratoire', 'une tyrolienne', 'un module de montagnes russes'
          ]);
          return {
            statement: 'On modélise ' + contexte2 + ' de hauteur $h=' + fr(h, 1) + '$ m, en négligeant tous les frottements. Un objet part sans vitesse initiale du sommet.<br/><br/>Calcule la vitesse $v$ atteinte en bas (en m/s, arrondie au dixième), avec $g=9{,}8$ N/kg.',
            answer: vBas,
            tolerance: 0.3,
            unit: 'm/s',
            hint: 'Sans frottement, l\'énergie mécanique se conserve : $E_{pp,haut}=E_{c,bas}$, ce qui donne $v=\\sqrt{2gh}$.',
            solution: [
              'Conservation de l\'énergie mécanique : $E_{pp,haut} = E_{c,bas}$, soit $mgh=\\dfrac12mv^2$ (la masse se simplifie).',
              'On isole $v$ : $v=\\sqrt{2gh}=\\sqrt{2\\times9{,}8\\times' + fr(h, 1) + '}$.',
              'Calcul sous la racine : $2\\times9{,}8\\times' + fr(h, 1) + ' \\approx ' + fr(parseFloat((2 * g * h).toFixed(1)), 1) + '$.',
              'Résultat : $v \\approx ' + fr(vBas, 1) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Dans une attraction de type montagnes russes, un wagon de masse $m=800$ kg (passagers compris) part sans vitesse initiale du point le plus haut du circuit, situé à $h=45$ m au-dessus du point le plus bas. On néglige les frottements et la résistance de l\'air, et on prend $g=9{,}8$ N/kg.',
      tasks: [
        'Calculer l\'énergie potentielle de pesanteur du wagon au point le plus haut (référence au point le plus bas).',
        'En déduire l\'énergie mécanique du wagon, puis sa vitesse au point le plus bas du circuit.',
        'En réalité, des frottements existent (rails, air), et la vitesse mesurée au point le plus bas est légèrement inférieure à la valeur calculée. Expliquer, en termes d\'énergie, où « passe » l\'énergie mécanique manquante.'
      ],
      solutions: [
        '$E_{pp}=mgh=800\\times9{,}8\\times45=352\\,800$ J.',
        'Au sommet, $v=0$ donc $E_c=0$ : $E_m=E_c+E_{pp}=0+352\\,800=352\\,800$ J. Sans frottement, cette énergie mécanique se conserve. Au point le plus bas, $h=0$ donc $E_{pp}=0$ : $E_c=E_m=352\\,800$ J. On isole $v$ : $v=\\sqrt{\\dfrac{2E_c}{m}}=\\sqrt{\\dfrac{2\\times352\\,800}{800}}=\\sqrt{882}\\approx29{,}7$ m/s.',
        'Avec des frottements réels, une partie de l\'énergie mécanique initiale est convertie en <strong>chaleur</strong> (par frottement entre les roues et le rail, et par résistance de l\'air) plutôt qu\'intégralement en énergie cinétique. L\'énergie mécanique totale du wagon diminue donc légèrement au cours de la descente, ce qui explique une vitesse finale un peu plus faible que la valeur théorique calculée sans frottement.'
      ],
      finalAnswer: 'Avec le modèle sans frottement, le wagon atteindrait $v\\approx29{,}7$ m/s (environ $107$ km/h) au point le plus bas, pour une énergie mécanique constante de $352\\,800$ J. Dans la réalité, les frottements dissipent une partie de cette énergie en chaleur, donc la vitesse réellement atteinte est un peu inférieure à cette valeur théorique.'
    },

    evaluation: {
      title: 'Évaluation — L\'énergie cinétique et potentielle',
      duration: '30 min',
      questions: [
        {
          statement: 'Un objet de masse $m=5$ kg se déplace à $v=4$ m/s. Calculer son énergie cinétique (en J).',
          type: 'numeric',
          answer: 40,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_c=\\dfrac12mv^2=\\dfrac12\\times5\\times4^2=\\dfrac12\\times5\\times16=40$ J.'
        },
        {
          statement: 'L\'énergie potentielle de pesanteur d\'un système de masse $m$, à l\'altitude $h$, s\'écrit :',
          type: 'multiple-choice',
          options: ['$E_{pp}=mgh$', '$E_{pp}=\\dfrac{mg}{h}$', '$E_{pp}=\\dfrac12mv^2$', '$E_{pp}=m+g+h$'],
          answer: 0,
          points: 2,
          correction: 'L\'énergie potentielle de pesanteur est $E_{pp}=m\\times g\\times h$ : un produit des trois grandeurs, pas une somme ni une division.'
        },
        {
          statement: 'Un objet part sans vitesse initiale du sommet d\'une pente de hauteur $h=10$ m, sans frottement ($g=9{,}8$ N/kg). Calculer sa vitesse en bas (en m/s).',
          type: 'numeric',
          answer: 14,
          tolerance: 0.3,
          unit: 'm/s',
          points: 3,
          correction: '$v=\\sqrt{2gh}=\\sqrt{2\\times9{,}8\\times10}=\\sqrt{196}=14$ m/s.'
        },
        {
          statement: 'En l\'absence de frottement, au cours du mouvement d\'un système, ce qui reste constant est :',
          type: 'multiple-choice',
          options: ['L\'énergie cinétique seule', 'L\'énergie potentielle seule', 'L\'énergie mécanique $E_m=E_c+E_{pp}$', 'Rien ne reste constant'],
          answer: 2,
          points: 2,
          correction: 'Ni $E_c$ ni $E_{pp}$ ne sont constantes séparément (elles varient en sens opposé) : c\'est leur somme, l\'énergie mécanique $E_m$, qui se conserve sans frottement.'
        },
        {
          statement: 'Lorsqu\'un système glisse avec des frottements non négligeables, son énergie mécanique :',
          type: 'multiple-choice',
          options: ['Augmente progressivement', 'Reste rigoureusement constante', 'Diminue progressivement, convertie en chaleur', 'Devient immédiatement nulle'],
          answer: 2,
          points: 1,
          correction: 'Les frottements convertissent une partie de l\'énergie mécanique en chaleur : celle-ci diminue donc progressivement au cours du mouvement, contrairement au cas idéal sans frottement.'
        }
      ]
    }
  });
