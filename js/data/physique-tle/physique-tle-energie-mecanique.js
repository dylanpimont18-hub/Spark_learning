/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-energie-mecanique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-energie-mecanique',
    level: 2, subject: 'physique',
    icon: '🎢',
    title: 'Énergie mécanique et conservation',
    subtitle: 'Énergie cinétique, énergie potentielle de pesanteur, énergie mécanique, conservation et non-conservation (frottements)',
    keywords: ['Énergie cinétique', 'Énergie potentielle', 'Énergie mécanique', 'Conservation', 'Frottements'],
    physics: 'Le raisonnement énergétique permet de calculer la vitesse maximale d\'une chute libre ou d\'un grand huit sans reconstruire toute la loi horaire, de dimensionner un système de freinage par récupération d\'énergie, ou d\'estimer l\'énergie dissipée par les frottements dans un mécanisme (perte de rendement).',

    cours: {
      intro: 'Un système en mouvement possède une <strong>énergie cinétique</strong> $E_c = \\dfrac{1}{2}mv^2$ (en joules), liée à sa vitesse. S\'il est soumis à la pesanteur, il possède aussi une <strong>énergie potentielle de pesanteur</strong> $E_{pp} = mgz$ (en prenant une origine des altitudes $z=0$ choisie librement), liée à sa position.<br/><br/>La somme de ces deux énergies constitue l\'<strong>énergie mécanique</strong> $E_m = E_c + E_{pp}$. Lorsque seules des forces <strong>conservatives</strong> (comme le poids) travaillent — c\'est-à-dire en l\'<strong>absence de frottement</strong> — l\'énergie mécanique se <strong>conserve</strong> : elle reste constante au cours du mouvement, même si $E_c$ et $E_{pp}$ varient chacune séparément (l\'une se transforme en l\'autre).<br/><br/>En présence de <strong>frottements</strong>, une partie de l\'énergie mécanique est dissipée sous forme de chaleur : l\'énergie mécanique <strong>diminue</strong> au cours du temps. La variation d\'énergie mécanique est alors égale au travail des forces de frottement (négatif) : $\\Delta E_m = W(\\vec{f})$.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: '$E_c = \\dfrac{1}{2}mv^2$, en joules (J), avec $m$ en kg et $v$ en m/s. Elle traduit l\'énergie liée au mouvement d\'un système.' },
        { term: 'Énergie potentielle de pesanteur ($E_{pp}$)', def: '$E_{pp} = mgz$, avec $z$ l\'altitude comptée depuis une <strong>origine choisie</strong> (souvent le point le plus bas de la trajectoire). Elle traduit l\'énergie liée à la position du système dans le champ de pesanteur.' },
        { term: 'Énergie mécanique ($E_m$)', def: '$E_m = E_c + E_{pp}$ (éventuellement additionnée d\'une énergie potentielle élastique si un ressort intervient). C\'est l\'énergie totale associée au mouvement et à la position du système.' },
        { term: 'Conservation de l\'énergie mécanique', def: 'En l\'absence de frottement (seules des forces conservatives travaillent), $E_m$ reste <strong>constante</strong> tout au long du mouvement : $E_c$ et $E_{pp}$ se transforment l\'une en l\'autre sans perte.' },
        { term: 'Non-conservation (frottements)', def: 'En présence de frottements, $E_m$ <strong>diminue</strong> : $\\Delta E_m = E_{m,f} - E_{m,i} = W(\\vec{f}) < 0$, l\'énergie perdue étant dissipée sous forme de chaleur.' }
      ],
      method: {
        title: 'Utiliser la conservation de l\'énergie mécanique en 3 étapes',
        steps: [
          '<strong>Vérifier l\'hypothèse</strong> : le mouvement se fait-il sans frottement (ou avec des frottements négligés) ? Si oui, $E_m$ se conserve ; sinon, il faudra tenir compte du travail des frottements dans le bilan.',
          '<strong>Écrire l\'égalité des énergies mécaniques</strong> entre un état initial et un état final : $E_{c,i} + E_{pp,i} = E_{c,f} + E_{pp,f}$ (avec la même origine des altitudes des deux côtés).',
          '<strong>Isoler la grandeur recherchée</strong> (souvent une vitesse) : cette méthode évite de reconstruire toute la loi horaire du mouvement, et fonctionne même pour des trajectoires complexes (grand huit, pendule…) où le PFD serait plus difficile à intégrer directement.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de l\'énergie mécanique',
        title: 'Énergie cinétique, potentielle et mécanique en fonction de la hauteur',
        description: 'Pour un système en chute libre (ou lancé verticalement) sans frottement, l\'énergie potentielle $E_{pp}$ augmente linéairement avec la hauteur $h$ tandis que l\'énergie cinétique $E_c$ diminue d\'autant : leur somme, l\'énergie mécanique $E_m$, reste constante.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="emeca-title emeca-desc">
            <title id="emeca-title">Graphique de l'energie cinetique, potentielle et mecanique en fonction de la hauteur</title>
            <desc id="emeca-desc">Un graphique represente l'energie en ordonnee en fonction de la hauteur h en abscisse. Une droite montante representant l'energie potentielle part de l'origine et atteint son maximum a la hauteur maximale. Une droite descendante representant l'energie cinetique part de ce meme maximum a hauteur nulle et rejoint zero a la hauteur maximale. Une droite horizontale en pointilles, representant l'energie mecanique totale, reste a la valeur maximale constante sur toute la plage de hauteur, confirmant que la somme des deux premieres energies reste invariante. Une ligne verticale pointillee a une hauteur intermediaire relie un point sur chaque droite oblique, illustrant que leur somme correspond toujours a la valeur constante de l'energie mecanique.</desc>

            <defs>
              <marker id="arrow-phystle-emeca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="260" x2="520" y2="260" marker-end="url(#arrow-phystle-emeca)"></line>
            <line class="frame-line" x1="70" y1="260" x2="70" y2="50" marker-end="url(#arrow-phystle-emeca)"></line>
            <text class="tick-label" x="70" y="35" text-anchor="middle">E (J)</text>
            <text class="tick-label" x="518" y="278" text-anchor="end">h (m)</text>

            <!-- Em constante (pointilles) -->
            <line class="guide-line" x1="70" y1="90" x2="470" y2="90"></line>
            <text class="annotation-label" x="90" y="80" text-anchor="start">E_m (constante)</text>

            <!-- Ep croissante -->
            <line class="curve-main" x1="70" y1="260" x2="470" y2="90"></line>
            <text class="annotation-label" x="400" y="130" text-anchor="start">E_pp</text>

            <!-- Ec decroissante -->
            <line class="curve-main" x1="70" y1="90" x2="470" y2="260" style="stroke: var(--secondary);"></line>
            <text class="annotation-label" x="400" y="220" text-anchor="start">E_c</text>

            <!-- guide vertical illustrant Ec+Ep=Em -->
            <line class="guide-line" x1="190" y1="260" x2="190" y2="90"></line>
            <circle class="plot-point" cx="190" cy="209" r="5"></circle>
            <circle class="plot-point-alt" cx="190" cy="141" r="5"></circle>
            <text class="label-soft" x="200" y="175" text-anchor="start">E_c + E_pp = E_m</text>

            <!-- points remarquables -->
            <circle class="plot-point" cx="70" cy="260" r="5"></circle>
            <text class="label-soft" x="70" y="280" text-anchor="middle">h = 0</text>
            <circle class="plot-point" cx="470" cy="90" r="5"></circle>
            <text class="label-soft" x="470" y="278" text-anchor="middle">h_max</text>
          </svg>
        `,
        notes: [
          'L\'énergie potentielle $E_{pp}$ (courbe montante, en bleu) augmente <strong>linéairement</strong> avec la hauteur $h$, tandis que l\'énergie cinétique $E_c$ (courbe descendante) diminue d\'autant, sans jamais devenir négative.',
          'La droite horizontale en pointillés représente l\'énergie mécanique $E_m$ : elle reste <strong>constante</strong>, quelle que soit la hauteur $h$, tant qu\'aucun frottement ne dissipe d\'énergie.',
          'À toute hauteur intermédiaire, la somme des deux points (sur la droite $E_c$ et sur la droite $E_{pp}$) redonne exactement $E_m$ : c\'est la traduction graphique directe de la conservation de l\'énergie mécanique.'
        ],
        reading: 'Repère d\'abord la droite horizontale en pointillés ($E_m$, constante), puis observe que les deux droites obliques ($E_c$ qui descend, $E_{pp}$ qui monte) se croisent exactement à mi-hauteur, et que leur somme reste toujours égale à $E_m$.',
        caption: 'Conservation de l\'énergie mécanique : l\'énergie potentielle croît linéairement avec la hauteur pendant que l\'énergie cinétique décroît d\'autant, leur somme (énergie mécanique) restant constante en l\'absence de frottement.'
      },
      example: {
        statement: 'Une bille de masse $m = 0{,}200$ kg est lâchée sans vitesse initiale depuis une hauteur $h = 5{,}0$ m au-dessus du sol. On néglige les frottements de l\'air et on prend $g = 9{,}81$ m/s². On choisit l\'origine des altitudes au niveau du sol.<br/><br/>Calculer, par conservation de l\'énergie mécanique, la vitesse de la bille juste avant qu\'elle touche le sol.',
        steps: [
          'État initial (lâcher) : $v_i = 0$, donc $E_{c,i} = 0$. Altitude $z_i = h = 5{,}0$ m, donc $E_{pp,i} = mgh$.',
          'État final (juste avant le sol) : $z_f = 0$, donc $E_{pp,f} = 0$. On cherche $v_f$, avec $E_{c,f} = \\dfrac{1}{2}mv_f^2$.',
          'Conservation de l\'énergie mécanique (pas de frottement) : $E_{c,i}+E_{pp,i} = E_{c,f}+E_{pp,f}$, soit $0 + mgh = \\dfrac{1}{2}mv_f^2 + 0$.',
          'La masse $m$ se simplifie des deux côtés : $gh = \\dfrac{1}{2}v_f^2$, donc $v_f = \\sqrt{2gh} = \\sqrt{2 \\times 9{,}81 \\times 5{,}0} = \\sqrt{98{,}1} \\approx 9{,}90$ m/s.'
        ],
        answer: '$v_f \\approx 9{,}90$ m/s. Remarque : la masse de la bille se simplifie entièrement dans le calcul — la vitesse finale ne dépend que de la hauteur de chute, pas de la masse (ce résultat retrouve d\'ailleurs celui obtenu par la cinématique de la chute libre).'
      },
      formulas: [
        'Énergie cinétique : $E_c = \\dfrac{1}{2}mv^2$',
        'Énergie potentielle de pesanteur : $E_{pp} = mgz$',
        'Énergie mécanique : $E_m = E_c + E_{pp}$',
        'Conservation (sans frottement) : $E_{m,i} = E_{m,f}$, soit $E_{c,i}+E_{pp,i} = E_{c,f}+E_{pp,f}$',
        'Non-conservation (avec frottements) : $\\Delta E_m = W(\\vec{f}) < 0$ (énergie dissipée sous forme de chaleur)'
      ],
      recap: [
        'L\'énergie mécanique $E_m=E_c+E_{pp}$ se conserve uniquement en l\'<strong>absence de frottement</strong> : c\'est une hypothèse à vérifier avant tout calcul.',
        'Lorsqu\'elle se conserve, $E_c$ et $E_{pp}$ varient en sens opposé : ce qui est perdu par l\'une est intégralement gagné par l\'autre.',
        'La méthode énergétique permet de calculer une vitesse (ou une hauteur) sans reconstruire toute la loi horaire du mouvement — un net avantage pour des trajectoires complexes.',
        'En présence de frottements, l\'énergie mécanique <strong>diminue</strong> ($\\Delta E_m < 0$) : l\'énergie perdue est dissipée sous forme de chaleur, ce qui correspond à une perte de rendement mécanique.'
      ],
      piege: 'Une erreur fréquente est d\'oublier de fixer une <strong>origine commune</strong> des altitudes pour calculer $E_{pp,i}$ et $E_{pp,f}$, ce qui fausse tout le bilan énergétique. Attention également à ne pas appliquer la conservation de l\'énergie mécanique lorsque des frottements sont mentionnés dans l\'énoncé : il faut alors utiliser $\\Delta E_m = W(\\vec{f})$, et non l\'égalité $E_{m,i}=E_{m,f}$.'
    },

    quiz: [
      {
        q: 'En l\'absence de frottement, lorsqu\'un objet lancé verticalement vers le haut monte, que devient son énergie mécanique $E_m$ ?',
        options: [
          'Elle augmente avec la hauteur',
          'Elle diminue avec la hauteur',
          'Elle reste constante',
          'Elle devient nulle au sommet de la trajectoire'
        ],
        answer: 2,
        correction: 'En l\'absence de frottement, l\'énergie mécanique $E_m = E_c + E_{pp}$ se <strong>conserve</strong> : elle reste constante tout au long du mouvement, même si $E_c$ diminue (l\'objet ralentit) tandis que $E_{pp}$ augmente (il s\'élève).'
      },
      {
        q: 'Une bille de masse $m=0{,}5$ kg est lâchée sans vitesse initiale d\'une hauteur $h=2$ m ($g=9{,}81$ m/s²). Quelle est sa vitesse juste avant de toucher le sol (sans frottement) ?',
        options: [
          '$v \\approx 3{,}1$ m/s',
          '$v \\approx 6{,}3$ m/s',
          '$v \\approx 9{,}8$ m/s',
          '$v \\approx 19{,}6$ m/s'
        ],
        answer: 1,
        correction: 'Par conservation de l\'énergie mécanique, $mgh = \\frac{1}{2}mv^2$, donc $v = \\sqrt{2gh} = \\sqrt{2 \\times 9{,}81 \\times 2} = \\sqrt{39{,}24} \\approx 6{,}3$ m/s.'
      },
      {
        q: 'Un skieur descend une piste avec des frottements non négligeables. Comment évolue son énergie mécanique entre le haut et le bas de la piste ?',
        options: [
          'Elle reste constante, comme sans frottement',
          'Elle augmente, car il descend',
          'Elle diminue, l\'énergie perdue étant dissipée sous forme de chaleur',
          'Elle devient négative'
        ],
        answer: 2,
        correction: 'En présence de frottements, une partie de l\'énergie mécanique est dissipée sous forme de chaleur : $\\Delta E_m = W(\\vec{f}) < 0$. L\'énergie mécanique du skieur <strong>diminue</strong> par rapport à ce qu\'elle serait sans frottement.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse-finale', 'hauteur-max']);
        var g = 9.81;

        if (typeExo === 'vitesse-finale') {
          var h = rand(2, 25);
          var v = parseFloat(Math.sqrt(2 * g * h).toFixed(2));
          var contexte = pick([
            'une bille lâchée du haut d\'un immeuble',
            'un plongeur qui saute d\'un plongeoir',
            'une goutte de pluie tombant sans vitesse initiale',
            'un colis largué depuis un balcon',
            'un fruit qui tombe d\'une branche'
          ]);
          return {
            statement: 'On modélise ' + contexte + ', lâché(e) sans vitesse initiale depuis une hauteur $h = ' + h + '$ m. On néglige les frottements de l\'air et on prend $g = 9{,}81$ m/s².<br/><br/>Par conservation de l\'énergie mécanique, calcule la vitesse $v$ juste avant l\'impact au sol (en m/s, arrondie au centième).',
            answer: v,
            tolerance: Math.max(0.1, parseFloat((v * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'Conservation de l\'énergie mécanique : $mgh = \\frac{1}{2}mv^2$, la masse se simplifie.',
            solution: [
              'État initial : $E_{c,i}=0$ (vitesse nulle), $E_{pp,i}=mgh$.',
              'État final (sol) : $E_{pp,f}=0$, $E_{c,f}=\\frac{1}{2}mv^2$.',
              'Conservation : $mgh = \\frac{1}{2}mv^2$, donc $v = \\sqrt{2gh} = \\sqrt{2 \\times 9{,}81 \\times ' + h + '}$.',
              'Résultat : $v \\approx ' + fr(v, 2) + '$ m/s.'
            ]
          };
        } else {
          var v0 = rand(5, 25);
          var hmax = parseFloat(((v0 * v0) / (2 * g)).toFixed(2));
          var contexte2 = pick([
            'un ballon de basket lancé verticalement',
            'une balle envoyée à la verticale lors d\'un lancer',
            'un projectile de démonstration en cours de physique',
            'une fusée à eau lancée à la verticale'
          ]);
          return {
            statement: 'On lance verticalement vers le haut ' + contexte2 + ' avec une vitesse initiale $v_0 = ' + v0 + '$ m/s. On néglige les frottements de l\'air et on prend $g = 9{,}81$ m/s².<br/><br/>Par conservation de l\'énergie mécanique, calcule la hauteur maximale $h_{max}$ atteinte (en m, arrondie au centième).',
            answer: hmax,
            tolerance: Math.max(0.1, parseFloat((hmax * 0.03).toFixed(2))),
            unit: 'm',
            hint: 'Au sommet, la vitesse est nulle : $\\frac{1}{2}mv_0^2 = mgh_{max}$.',
            solution: [
              'État initial (lancer) : $E_{c,i}=\\frac{1}{2}mv_0^2$, $E_{pp,i}=0$.',
              'État final (sommet) : $E_{c,f}=0$ (vitesse nulle au sommet), $E_{pp,f}=mgh_{max}$.',
              'Conservation : $\\frac{1}{2}mv_0^2 = mgh_{max}$, donc $h_{max} = \\dfrac{v_0^2}{2g} = \\dfrac{' + v0 + '^2}{2\\times9{,}81}$.',
              'Résultat : $h_{max} \\approx ' + fr(hmax, 2) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un wagonnet de montagnes russes, de masse totale $m = 800$ kg (passagers compris), part sans vitesse initiale du sommet d\'une bosse à $h_1 = 30$ m de hauteur. On néglige les frottements et la résistance de l\'air. On prend $g = 9{,}81$ m/s² et on choisit l\'origine des altitudes au point le plus bas du circuit.',
      tasks: [
        'Calculer l\'énergie mécanique du wagonnet au sommet de la bosse (en J).',
        'En déduire, par conservation de l\'énergie mécanique, la vitesse du wagonnet au point le plus bas du circuit ($h=0$).',
        'Le circuit comporte ensuite une seconde bosse de hauteur $h_2 = 18$ m. Calculer la vitesse du wagonnet au sommet de cette seconde bosse.'
      ],
      solutions: [
        'Au sommet de la première bosse, $v=0$ donc $E_c=0$. $E_m = E_{pp} = mgh_1 = 800 \\times 9{,}81 \\times 30 = 235\\,440$ J.',
        'Au point le plus bas ($h=0$), $E_{pp}=0$, donc toute l\'énergie mécanique est cinétique : $E_m = \\dfrac{1}{2}mv^2$, donc $v = \\sqrt{\\dfrac{2E_m}{m}} = \\sqrt{\\dfrac{2\\times235\\,440}{800}} = \\sqrt{588{,}6} \\approx 24{,}3$ m/s.',
        'L\'énergie mécanique se conserve tout au long du circuit (pas de frottement) : au sommet de la seconde bosse, $E_{pp}=mgh_2=800\\times9{,}81\\times18=141\\,264$ J, donc $E_c=E_m-E_{pp}=235\\,440-141\\,264=94\\,176$ J. $v=\\sqrt{\\dfrac{2\\times94\\,176}{800}}=\\sqrt{235{,}44}\\approx15{,}3$ m/s.'
      ],
      finalAnswer: 'Le wagonnet atteint $v \\approx 24{,}3$ m/s au point le plus bas, puis $v \\approx 15{,}3$ m/s au sommet de la seconde bosse (moins haute que la première, il lui reste donc de la vitesse). En pratique, les frottements et la résistance de l\'air dissipent une partie de cette énergie, ce qui impose de concevoir chaque bosse suivante <strong>moins haute</strong> que la précédente pour garantir que le wagonnet ait toujours assez d\'énergie mécanique pour la franchir.'
    },

    evaluation: {
      title: 'Évaluation — Énergie mécanique et conservation',
      duration: '30 min',
      questions: [
        {
          statement: 'L\'énergie mécanique d\'un système est définie comme :',
          type: 'multiple-choice',
          options: [
            '$E_m = E_c \\times E_{pp}$',
            '$E_m = E_c + E_{pp}$',
            '$E_m = E_c - E_{pp}$',
            '$E_m = \\dfrac{E_c}{E_{pp}}$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'énergie mécanique est la <strong>somme</strong> de l\'énergie cinétique et de l\'énergie potentielle (de pesanteur ou élastique) : $E_m = E_c + E_{pp}$.'
        },
        {
          statement: 'Une bille de masse $m=0{,}3$ kg est lâchée sans vitesse initiale d\'une hauteur $h=8$ m ($g=9{,}81$ m/s², sans frottement). Calculer sa vitesse à l\'arrivée au sol (en m/s, arrondie au dixième).',
          type: 'numeric',
          answer: 12.5,
          tolerance: 0.3,
          unit: 'm/s',
          points: 3,
          correction: '$v=\\sqrt{2gh}=\\sqrt{2\\times9{,}81\\times8}=\\sqrt{156{,}96}\\approx12{,}5$ m/s (la masse ne joue aucun rôle dans le résultat).'
        },
        {
          statement: 'En présence de frottements non négligeables, l\'énergie mécanique d\'un système en mouvement :',
          type: 'multiple-choice',
          options: [
            'Reste constante',
            'Augmente systématiquement',
            'Diminue, l\'énergie perdue étant dissipée en chaleur',
            'Devient immédiatement nulle'
          ],
          answer: 2,
          points: 2,
          correction: 'Les frottements dissipent une partie de l\'énergie mécanique sous forme de chaleur : $\\Delta E_m = W(\\vec f) < 0$, donc $E_m$ diminue au cours du mouvement.'
        },
        {
          statement: 'Un objet est lancé verticalement vers le haut avec $v_0=14$ m/s ($g=9{,}81$ m/s², sans frottement). Calculer la hauteur maximale atteinte (en m, arrondie au dixième).',
          type: 'numeric',
          answer: 10.0,
          tolerance: 0.3,
          unit: 'm',
          points: 3,
          correction: '$h_{max}=\\dfrac{v_0^2}{2g}=\\dfrac{14^2}{2\\times9{,}81}=\\dfrac{196}{19{,}62}\\approx10{,}0$ m.'
        },
        {
          statement: 'Sur un graphique représentant $E_c$, $E_{pp}$ et $E_m$ en fonction de la hauteur $h$ (sans frottement), la courbe de $E_m$ est :',
          type: 'multiple-choice',
          options: [
            'Une droite croissante',
            'Une droite décroissante',
            'Une droite horizontale (constante)',
            'Une parabole'
          ],
          answer: 2,
          points: 1,
          correction: '$E_m$ est conservée : sa représentation en fonction de $h$ est une droite horizontale, à la valeur constante $E_m$, quelle que soit la répartition entre $E_c$ et $E_{pp}$.'
        }
      ]
    }
  });
