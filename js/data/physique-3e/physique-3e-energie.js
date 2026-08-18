/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-energie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-energie',
    level: 1, subject: 'physique',
    icon: '🎢',
    title: 'L\'énergie cinétique et potentielle',
    subtitle: 'Énergie de mouvement, énergie de position, conservation de l\'énergie mécanique',
    keywords: ['Énergie cinétique', 'Énergie potentielle', 'Énergie mécanique', 'Conservation de l\'énergie', 'Chute'],
    physics: 'La transformation entre énergie potentielle et énergie cinétique explique le fonctionnement des montagnes russes, des barrages hydroélectriques (l\'eau stockée en hauteur actionne des turbines en tombant) et permet de calculer la distance de freinage d\'un véhicule ou l\'énergie libérée par un objet qui chute.',

    cours: {
      intro: 'Un objet en mouvement ou situé en hauteur possède de l\'<strong>énergie</strong>, une grandeur qui se mesure en <strong>joules (J)</strong> et qui peut se transformer d\'une forme à une autre.<br/><br/>L\'<strong>énergie cinétique</strong> $E_c$ est l\'énergie que possède un objet du fait de son <strong>mouvement</strong> : plus il va vite, plus son énergie cinétique est grande. Un objet immobile a une énergie cinétique nulle.<br/><br/>L\'<strong>énergie potentielle de pesanteur</strong> $E_{pp}$ est l\'énergie que possède un objet du fait de sa <strong>position en hauteur</strong> par rapport à un niveau de référence (souvent le sol). Plus il est haut, plus cette énergie est grande.<br/><br/>Quand un objet tombe <strong>sans frottement</strong>, ces deux énergies se transforment l\'une en l\'autre, mais leur somme, l\'<strong>énergie mécanique</strong> $E_m = E_c + E_{pp}$, reste <strong>constante</strong> : c\'est la <strong>conservation de l\'énergie mécanique</strong>.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: 'Énergie liée au mouvement d\'un objet de masse $m$ (en kg) se déplaçant à la vitesse $v$ (en m/s) : $E_c = \\dfrac{1}{2} m v^2$, exprimée en joules (J).' },
        { term: 'Énergie potentielle de pesanteur ($E_{pp}$)', def: 'Énergie liée à la position en hauteur $h$ (en m) d\'un objet de masse $m$ (en kg) par rapport à un niveau de référence : $E_{pp} = m \\times g \\times h$, en joules (J), avec $g$ le champ de pesanteur (on prend $g \\approx 10$ N/kg au collège).' },
        { term: 'Énergie mécanique ($E_m$)', def: 'Somme de l\'énergie cinétique et de l\'énergie potentielle de pesanteur : $E_m = E_c + E_{pp}$. En l\'absence de frottement, elle se <strong>conserve</strong> au cours du mouvement.' },
        { term: 'Frottement', def: 'Force qui s\'oppose au mouvement (air, surface de contact…). En présence de frottements, une partie de l\'énergie mécanique se transforme en chaleur : l\'énergie mécanique <strong>diminue</strong> alors au cours du mouvement.' }
      ],
      method: {
        title: 'Étudier une transformation d\'énergie en 3 étapes',
        steps: [
          '<strong>Identifier la situation</strong> : l\'objet monte, descend, ou se déplace à hauteur constante ? Les frottements sont-ils négligés (énoncé qui le précise, souvent implicitement) ?',
          '<strong>Calculer les énergies</strong> aux instants demandés avec les formules $E_c = \\dfrac{1}{2} m v^2$ et $E_{pp} = m g h$, en veillant à utiliser des unités cohérentes (kg, m/s, m).',
          'Si les frottements sont négligeables, <strong>utiliser la conservation de l\'énergie mécanique</strong> ($E_m$ constante) pour calculer une grandeur manquante (souvent une vitesse à partir d\'une hauteur, ou l\'inverse).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de l\'énergie mécanique',
        title: 'Transformation de l\'énergie potentielle en énergie cinétique lors d\'une chute',
        description: 'Une balle de masse $m = 2$ kg tombe sans frottement depuis $h_0 = 5$ m. À chaque instant, l\'énergie potentielle perdue se retrouve intégralement en énergie cinétique : la somme $E_c + E_{pp}$ reste constante, égale à $100$ J.',
        svg: `
          <svg viewBox="0 0 560 310" role="img" aria-labelledby="energie-title energie-desc">
            <title id="energie-title">Conservation de l'energie mecanique lors d'une chute</title>
            <desc id="energie-desc">A gauche, une trajectoire verticale montre une balle a trois hauteurs : 5 metres avec une vitesse nulle, 2,5 metres avec une vitesse d'environ 7,1 metres par seconde, et 0 metre (juste avant le sol) avec une vitesse de 10 metres par seconde. A droite, pour chacune de ces trois positions, une barre horizontale de longueur totale constante se divise en une portion d'energie potentielle et une portion d'energie cinetique : au depart la barre est entierement d'energie potentielle (100 joules), a mi-hauteur elle est partagee moitie-moitie (50 joules chacune), et juste avant le sol elle est entierement d'energie cinetique (100 joules). La longueur totale des barres ne change jamais, illustrant la conservation de l'energie mecanique.</desc>

            <text class="annotation-label" x="310" y="18" text-anchor="middle">Énergie mécanique totale : Em = Ep + Ec = 100 J (constante)</text>

            <!-- trajectoire verticale -->
            <line class="guide-line" x1="90" y1="60" x2="90" y2="260"></line>
            <line class="frame-line" x1="60" y1="260" x2="140" y2="260"></line>

            <circle class="plot-point" cx="90" cy="60" r="7"></circle>
            <text class="tick-label" x="78" y="50" text-anchor="end">h = 5 m</text>
            <text class="label-soft" x="78" y="76" text-anchor="end">v = 0</text>

            <circle class="plot-point" cx="90" cy="160" r="7"></circle>
            <text class="tick-label" x="78" y="150" text-anchor="end">h = 2,5 m</text>
            <text class="label-soft" x="78" y="176" text-anchor="end">v ≈ 7,1 m/s</text>

            <circle class="plot-point" cx="90" cy="260" r="7"></circle>
            <text class="tick-label" x="78" y="250" text-anchor="end">h = 0 m</text>
            <text class="label-soft" x="78" y="282" text-anchor="end">v = 10 m/s</text>

            <!-- barres d'energie : rangee du haut (Ep=100J, Ec=0J) -->
            <rect x="200" y="47" width="220" height="26" fill="var(--diagram-accent)"></rect>
            <text class="annotation-label" x="310" y="40" text-anchor="middle">Ep = 100 J   Ec = 0 J</text>

            <!-- rangee du milieu (Ep=50J, Ec=50J) -->
            <rect x="200" y="147" width="110" height="26" fill="var(--diagram-accent)"></rect>
            <rect x="310" y="147" width="110" height="26" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="annotation-label" x="310" y="140" text-anchor="middle">Ep = 50 J   Ec = 50 J</text>

            <!-- rangee du bas (Ep=0J, Ec=100J) -->
            <rect x="200" y="247" width="220" height="26" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="annotation-label" x="310" y="240" text-anchor="middle">Ep = 0 J   Ec = 100 J</text>

            <!-- legende -->
            <rect x="200" y="284" width="14" height="14" fill="var(--diagram-accent)"></rect>
            <text class="label-soft" x="218" y="295" text-anchor="start">Énergie potentielle (Ep)</text>
            <rect x="380" y="284" width="14" height="14" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="label-soft" x="398" y="295" text-anchor="start">Énergie cinétique (Ec)</text>
          </svg>
        `,
        notes: [
          'Au départ ($h=5$ m), la balle est immobile ($v=0$) : toute l\'énergie mécanique est de l\'énergie potentielle, $E_{pp} = m g h = 2 \\times 10 \\times 5 = 100$ J et $E_c = 0$ J.',
          'À mi-hauteur ($h=2{,}5$ m), la moitié de l\'énergie potentielle initiale s\'est transformée en énergie cinétique : $E_{pp} = 50$ J et $E_c = 50$ J, la somme restant égale à $100$ J.',
          'Juste avant le sol ($h=0$ m), toute l\'énergie potentielle initiale s\'est transformée en énergie cinétique : $E_c = 100$ J, ce qui correspond à une vitesse $v = \\sqrt{2gh_0} = \\sqrt{2\\times10\\times5} = 10$ m/s.'
        ],
        reading: 'Suis la balle de haut en bas sur la trajectoire de gauche, puis regarde comment la barre d\'énergie correspondante à droite bascule progressivement de l\'énergie potentielle (foncée) vers l\'énergie cinétique (claire), sans jamais changer de longueur totale.',
        caption: 'Conservation de l\'énergie mécanique lors d\'une chute libre : l\'énergie potentielle se transforme intégralement en énergie cinétique, la somme $E_c + E_{pp}$ restant constante.'
      },
      example: {
        statement: 'Une balle de masse $m = 2$ kg est lâchée sans vitesse initiale depuis une hauteur $h_0 = 5$ m. On néglige les frottements de l\'air et on prend $g \\approx 10$ N/kg.<br/><br/>Calcule l\'énergie mécanique de la balle au départ, puis sa vitesse juste avant qu\'elle touche le sol.',
        steps: [
          'Au départ, la balle est immobile : $v_0 = 0$, donc $E_c = \\dfrac{1}{2} \\times 2 \\times 0^2 = 0$ J.',
          'Énergie potentielle au départ : $E_{pp} = m \\times g \\times h_0 = 2 \\times 10 \\times 5 = 100$ J.',
          'Énergie mécanique au départ : $E_m = E_c + E_{pp} = 0 + 100 = 100$ J.',
          'Sans frottement, l\'énergie mécanique se conserve : juste avant le sol ($h=0$), toute l\'énergie mécanique est devenue cinétique, donc $E_c = E_m = 100$ J.',
          'On en déduit la vitesse : $E_c = \\dfrac{1}{2} m v^2 \\Rightarrow v = \\sqrt{\\dfrac{2 E_c}{m}} = \\sqrt{\\dfrac{2 \\times 100}{2}} = \\sqrt{100} = 10$ m/s.'
        ],
        answer: 'Énergie mécanique $E_m = 100$ J (constante), vitesse au sol $v = 10$ m/s.'
      },
      formulas: [
        'Énergie cinétique : $E_c = \\dfrac{1}{2} m v^2$ ($m$ en kg, $v$ en m/s, $E_c$ en J)',
        'Énergie potentielle de pesanteur : $E_{pp} = m \\times g \\times h$ ($h$ en m, $g \\approx 10$ N/kg au collège)',
        'Énergie mécanique : $E_m = E_c + E_{pp}$',
        'Sans frottement : $E_m$ = constante au cours du mouvement'
      ],
      recap: [
        'L\'énergie cinétique dépend du <strong>mouvement</strong> ($E_c = \\frac{1}{2}mv^2$), l\'énergie potentielle de pesanteur dépend de la <strong>hauteur</strong> ($E_{pp} = mgh$).',
        'Sans frottement, l\'énergie mécanique $E_m = E_c + E_{pp}$ reste <strong>constante</strong> : ce qui est perdu par l\'une des deux énergies est intégralement gagné par l\'autre.',
        'Avec frottement, l\'énergie mécanique <strong>diminue</strong> : une partie se transforme en chaleur.',
        'La vitesse intervient au <strong>carré</strong> dans $E_c$ : doubler la vitesse quadruple l\'énergie cinétique.'
      ],
      piege: 'Une erreur fréquente est d\'oublier le facteur $\\dfrac{1}{2}$ dans la formule de l\'énergie cinétique, ou d\'oublier d\'élever la vitesse au carré. Attention à toujours vérifier : $E_c = \\dfrac{1}{2} \\times m \\times v \\times v$, jamais $E_c = \\dfrac{1}{2} \\times m \\times v$ ni $E_c = m \\times v^2$.'
    },

    quiz: [
      {
        q: 'Une voiture roule deux fois plus vite qu\'une seconde voiture identique. Comment se compare leur énergie cinétique ?',
        options: [
          'Elle est deux fois plus grande',
          'Elle est quatre fois plus grande',
          'Elle est identique',
          'Elle est deux fois plus petite'
        ],
        answer: 1,
        correction: 'La vitesse intervient au carré dans $E_c = \\frac{1}{2}mv^2$ : si $v$ est multipliée par $2$, alors $E_c$ est multipliée par $2^2 = 4$.'
      },
      {
        q: 'Un objet est posé au sol, immobile. Que peut-on dire de son énergie potentielle de pesanteur, en prenant le sol comme référence ?',
        options: ['Elle est maximale', 'Elle est nulle', 'Elle est négative', 'On ne peut pas savoir'],
        answer: 1,
        correction: 'L\'énergie potentielle de pesanteur $E_{pp} = mgh$ dépend de la hauteur $h$ par rapport à la référence choisie. Si l\'objet est au niveau du sol (référence), $h=0$, donc $E_{pp}=0$.'
      },
      {
        q: 'Lors d\'une chute sans frottement, l\'énergie potentielle diminue. Que devient cette énergie « perdue » ?',
        options: [
          'Elle disparaît complètement',
          'Elle se transforme intégralement en énergie cinétique',
          'Elle se transforme en chaleur',
          'Elle se transforme en énergie potentielle négative'
        ],
        answer: 1,
        correction: 'Sans frottement, l\'énergie mécanique $E_m = E_c + E_{pp}$ se conserve : toute l\'énergie potentielle perdue se retrouve exactement en énergie cinétique gagnée.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['cinetique', 'potentielle']);

        if (typeExo === 'cinetique') {
          var m = pick([0.5, 1, 1.5, 2, 4, 5, 8, 10]);
          var v = rand(2, 20);
          var Ec = parseFloat((0.5 * m * v * v).toFixed(2));
          var contexte = pick([
            'un skieur',
            'un vélo lancé en descente',
            'une voiturette de golf',
            'un ballon de bowling',
            'un patineur sur glace'
          ]);
          return {
            statement: 'On assimile ' + contexte + ' à un objet de masse $m = ' + fr(m, 1) + '$ kg se déplaçant à la vitesse $v = ' + v + '$ m/s.<br/><br/>Calcule son énergie cinétique $E_c$ (en J).',
            answer: Ec,
            tolerance: Math.max(0.5, parseFloat((Ec * 0.02).toFixed(2))),
            unit: 'J',
            hint: 'Utilise $E_c = \\dfrac{1}{2} m v^2$ : n\'oublie pas d\'élever la vitesse au carré avant de multiplier.',
            solution: [
              'Formule de l\'énergie cinétique : $E_c = \\dfrac{1}{2} m v^2$.',
              'Application numérique : $E_c = \\dfrac{1}{2} \\times ' + fr(m, 1) + ' \\times ' + v + '^2$.',
              'Carré de la vitesse : $' + v + '^2 = ' + (v * v) + '$.',
              'Résultat : $E_c = \\dfrac{1}{2} \\times ' + fr(m, 1) + ' \\times ' + (v * v) + ' = ' + fr(Ec, 2) + '$ J.'
            ]
          };
        } else {
          var m2 = pick([0.5, 1, 2, 3, 5, 10, 20]);
          var h = rand(2, 30);
          var g = 10;
          var Epp = m2 * g * h;
          var contexte2 = pick([
            'un pot de fleurs posé sur un balcon',
            'un grimpeur sur une paroi',
            'un colis stocké en haut d\'une étagère',
            'une benne suspendue sur un chantier',
            'un plongeur sur un plongeoir'
          ]);
          return {
            statement: 'On assimile ' + contexte2 + ' à un objet de masse $m = ' + fr(m2, 1) + '$ kg situé à une hauteur $h = ' + h + '$ m par rapport au sol. On prend $g \\approx 10$ N/kg.<br/><br/>Calcule son énergie potentielle de pesanteur $E_{pp}$ (en J).',
            answer: Epp,
            tolerance: 0,
            unit: 'J',
            hint: 'Utilise $E_{pp} = m \\times g \\times h$.',
            solution: [
              'Formule de l\'énergie potentielle de pesanteur : $E_{pp} = m \\times g \\times h$.',
              'Application numérique : $E_{pp} = ' + fr(m2, 1) + ' \\times 10 \\times ' + h + '$.',
              'Résultat : $E_{pp} = ' + Epp + '$ J.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 60$ kg part sans vitesse initiale du sommet d\'une piste situé à $h_0 = 20$ m au-dessus de l\'arrivée. On néglige les frottements (piste très glissante) et on prend $g \\approx 10$ N/kg.',
      tasks: [
        'Calcule l\'énergie mécanique du skieur au sommet de la piste.',
        'En déduire l\'énergie cinétique du skieur à l\'arrivée (au bas de la piste, $h=0$).',
        'Calcule la vitesse du skieur à l\'arrivée.'
      ],
      solutions: [
        'Au sommet, le skieur est immobile : $E_c = 0$ J. Énergie potentielle : $E_{pp} = m g h_0 = 60 \\times 10 \\times 20 = 12\\,000$ J. Donc $E_m = E_c + E_{pp} = 0 + 12\\,000 = 12\\,000$ J.',
        'Sans frottement, l\'énergie mécanique se conserve : $E_m$ reste égale à $12\\,000$ J tout au long de la descente. À l\'arrivée ($h=0$), $E_{pp} = 0$ J, donc toute l\'énergie mécanique est devenue cinétique : $E_c = 12\\,000$ J.',
        '$E_c = \\dfrac{1}{2} m v^2 \\Rightarrow v = \\sqrt{\\dfrac{2 E_c}{m}} = \\sqrt{\\dfrac{2 \\times 12\\,000}{60}} = \\sqrt{400} = 20$ m/s.'
      ],
      finalAnswer: 'Le skieur arrive à $v = 20$ m/s, soit environ $72$ km/h. En réalité, les frottements de l\'air et du ski sur la neige dissipent une partie de l\'énergie mécanique en chaleur : la vitesse réelle à l\'arrivée est toujours <strong>inférieure</strong> à cette valeur théorique.'
    },

    evaluation: {
      title: 'Évaluation — Énergie cinétique et potentielle',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer l\'énergie cinétique d\'un objet de masse $m = 4$ kg se déplaçant à la vitesse $v = 5$ m/s (en J).',
          type: 'numeric',
          answer: 50,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\dfrac{1}{2} m v^2 = \\dfrac{1}{2} \\times 4 \\times 5^2 = \\dfrac{1}{2} \\times 4 \\times 25 = 50$ J.'
        },
        {
          statement: 'Calculer l\'énergie potentielle de pesanteur d\'un objet de masse $m = 3$ kg situé à $h = 8$ m au-dessus du sol (en J, $g \\approx 10$ N/kg).',
          type: 'numeric',
          answer: 240,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_{pp} = m g h = 3 \\times 10 \\times 8 = 240$ J.'
        },
        {
          statement: 'Sans frottement, l\'énergie mécanique d\'un objet en mouvement :',
          type: 'multiple-choice',
          options: [
            'Augmente toujours',
            'Diminue toujours',
            'Reste constante',
            'Devient nulle'
          ],
          answer: 2,
          points: 2,
          correction: 'En l\'absence de frottement, l\'énergie mécanique $E_m = E_c + E_{pp}$ se conserve : elle reste constante tout au long du mouvement.'
        },
        {
          statement: 'Un objet de masse $m = 1$ kg est lâché sans vitesse initiale d\'une hauteur $h_0 = 5$ m ($g \\approx 10$ N/kg, frottements négligés). Calculer sa vitesse juste avant de toucher le sol (en m/s).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.5,
          unit: 'm/s',
          points: 3,
          correction: 'Énergie mécanique au départ : $E_m = E_{pp} = mgh_0 = 1\\times10\\times5 = 50$ J. À l\'arrivée, $E_c = E_m = 50$ J, donc $v = \\sqrt{\\dfrac{2E_c}{m}} = \\sqrt{\\dfrac{2\\times50}{1}} = \\sqrt{100} = 10$ m/s.'
        },
        {
          statement: 'Une bille roule sur une table horizontale à vitesse constante. Que peut-on dire de son énergie potentielle de pesanteur au cours du mouvement (référence : la table) ?',
          type: 'multiple-choice',
          options: [
            'Elle augmente',
            'Elle diminue',
            'Elle reste constante et nulle, car la hauteur ne change pas',
            'Elle devient négative'
          ],
          answer: 2,
          points: 1,
          correction: 'La hauteur $h$ par rapport à la table (référence) ne change pas : $E_{pp} = mgh$ reste constante, et nulle si la référence est prise au niveau de la table.'
        }
      ]
    }
  });
