/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-energie-mecanique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-energie-mecanique',
    level: 2, subject: 'physique',
    icon: '🎢',
    title: 'Énergie mécanique et conservation',
    subtitle: 'Énergie cinétique, énergie potentielle de pesanteur, énergie mécanique, conservation et non-conservation (frottements), théorème de l\'énergie cinétique',
    keywords: ['Énergie cinétique', 'Énergie potentielle', 'Énergie mécanique', 'Conservation', 'Frottements'],
    physics: 'La conservation de l\'énergie mécanique permet de calculer la vitesse d\'un skieur ou d\'un cycliste en descente, de dimensionner les montagnes russes et les toboggans aquatiques, et d\'estimer les pertes énergétiques par frottement dans les systèmes mécaniques industriels.',

    cours: {
      intro: 'Un système en mouvement possède une <strong>énergie cinétique</strong> $E_c=\\dfrac12 mv^2$, liée à sa vitesse. S\'il est soumis à la pesanteur, il possède aussi une <strong>énergie potentielle de pesanteur</strong> $E_{pp}=mgz$, liée à son altitude $z$ par rapport à une référence choisie.<br/><br/>La somme de ces deux énergies forme l\'<strong>énergie mécanique</strong> $E_m=E_c+E_{pp}$. Lorsque seules des forces <strong>conservatives</strong> travaillent (le poids, essentiellement) — c\'est-à-dire en l\'absence de frottement ou de force motrice —, cette énergie mécanique se <strong>conserve</strong> : elle ne fait que se transformer, d\'énergie cinétique en énergie potentielle et réciproquement.<br/><br/>Dès qu\'une force non conservative travaille (frottements, résistance de l\'air, force motrice), l\'énergie mécanique <strong>varie</strong> : le théorème de l\'énergie mécanique relie cette variation au travail de ces forces, $\\Delta E_m=\\sum W(\\vec F_{nc})$.',
      definitions: [
        { term: 'Énergie cinétique ($E_c$)', def: 'Énergie associée au mouvement d\'un système de masse $m$ et de vitesse $v$ : $E_c=\\dfrac12 mv^2$ (en joules, J). Elle est toujours positive ou nulle.' },
        { term: 'Énergie potentielle de pesanteur ($E_{pp}$)', def: 'Énergie associée à l\'altitude $z$ d\'un système dans le champ de pesanteur : $E_{pp}=mgz+\\text{cste}$. Seule sa <strong>variation</strong> a un sens physique : on choisit librement une origine ($E_{pp}=0$ à une altitude de référence).' },
        { term: 'Énergie mécanique ($E_m$)', def: 'Somme de l\'énergie cinétique et de l\'énergie potentielle : $E_m=E_c+E_{pp}$. Elle se conserve si seules des forces conservatives (le poids) travaillent.' },
        { term: 'Théorème de l\'énergie cinétique', def: 'Entre deux instants, la variation d\'énergie cinétique d\'un système est égale à la somme des travaux de <strong>toutes</strong> les forces qui s\'exercent sur lui : $\\Delta E_c=\\sum W(\\vec F)$.' }
      ],
      method: {
        title: 'Étudier une conservation (ou non) d\'énergie mécanique en 3 étapes',
        steps: [
          '<strong>Choisir</strong> un système, un référentiel galiléen, une origine des altitudes (souvent le point le plus bas de la trajectoire étudiée), et faire le bilan des forces.',
          '<strong>Identifier</strong> si toutes les forces qui travaillent sont conservatives : le poids l\'est, mais la réaction normale et la tension d\'un fil ne travaillent <strong>jamais</strong> (perpendiculaires au déplacement). Si oui, $E_m$ se conserve ($E_{m,A}=E_{m,B}$) ; sinon, appliquer $\\Delta E_m=W(\\vec F_{nc})$.',
          '<strong>Exprimer</strong> $E_c$ et $E_{pp}$ aux points étudiés, puis résoudre l\'équation obtenue pour la grandeur cherchée (le plus souvent une vitesse ou une énergie dissipée).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de l\'énergie mécanique',
        title: 'Transformation entre énergie potentielle et énergie cinétique le long d\'une descente',
        description: 'Le long de la descente, sans frottement, l\'énergie mécanique $E_m=E_c+E_{pp}$ reste constante : l\'énergie potentielle se transforme progressivement en énergie cinétique.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="em-title em-desc">
            <title id="em-title">Conservation de l'energie mecanique le long d'une descente</title>
            <desc id="em-desc">En haut du schema, trois diagrammes en barres empilees, tous de la meme hauteur totale, representent l'energie mecanique aux points A, C et B d'une descente. Au point A, la barre est entierement composee d'energie potentielle. Au point C, a mi-parcours, la barre se compose d'une part d'energie potentielle en haut et d'une part d'energie cinetique en bas, de tailles comparables. Au point B, en bas de la descente, la barre est entierement composee d'energie cinetique. En dessous, une courbe descendante relie les points A, C et B, representant le profil physique de la piste, chaque point etant relie a sa barre par un trait pointille vertical. Une ligne pointillee horizontale au sommet des trois barres marque le niveau constant de l'energie mecanique totale.</desc>

            <defs>
              <marker id="arrow-tle-em" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- niveau Em constant -->
            <line class="guide-line" x1="65" y1="50" x2="335" y2="50"></line>
            <text class="tick-label" x="340" y="54" text-anchor="start">Eₘ constante</text>

            <!-- socle des barres -->
            <line class="frame-line" x1="65" y1="150" x2="335" y2="150"></line>

            <!-- Barre A : 100% Ep -->
            <rect x="73" y="50" width="34" height="100" fill="var(--diagram-accent)" opacity="0.35"></rect>

            <!-- Barre C : Ep (haut) + Ec (bas) -->
            <rect x="128" y="50" width="34" height="40" fill="var(--diagram-accent)" opacity="0.35"></rect>
            <rect x="128" y="90" width="34" height="60" fill="var(--diagram-accent)"></rect>
            <text class="tick-label" x="168" y="68" text-anchor="start">Ep</text>
            <text class="tick-label" x="168" y="122" text-anchor="start">Ec</text>

            <!-- Barre B : 100% Ec -->
            <rect x="293" y="50" width="34" height="100" fill="var(--diagram-accent)"></rect>

            <!-- guides verticaux vers la piste -->
            <line class="guide-line" x1="90" y1="150" x2="90" y2="170"></line>
            <line class="guide-line" x1="145" y1="150" x2="145" y2="252"></line>
            <line class="guide-line" x1="310" y1="150" x2="310" y2="280"></line>

            <!-- profil de la piste -->
            <path class="curve-main" fill="none" d="M90,170 Q90,280 310,280"></path>

            <!-- points A, C, B -->
            <circle class="plot-point" cx="90" cy="170" r="4"></circle>
            <circle class="plot-point" cx="145" cy="252" r="4"></circle>
            <circle class="plot-point" cx="310" cy="280" r="4"></circle>
            <text class="tick-label" x="74" y="174" text-anchor="end">A</text>
            <text class="tick-label" x="158" y="256" text-anchor="start">C</text>
            <text class="tick-label" x="326" y="284" text-anchor="start">B</text>
          </svg>
        `,
        notes: [
          'Au point $A$ (départ, vitesse nulle), toute l\'énergie mécanique est <strong>potentielle</strong> : la barre est entièrement claire.',
          'Au point $C$, à mi-descente, l\'énergie s\'est en partie transformée : une part est devenue <strong>cinétique</strong> (barre foncée), le reste est encore potentielle.',
          'Au point $B$ (bas de la piste, altitude de référence), toute l\'énergie mécanique est devenue <strong>cinétique</strong> : la barre est entièrement foncée — mais sa hauteur totale, comme celle des trois barres, reste identique.'
        ],
        reading: 'Compare la hauteur totale des trois barres (identique partout : c\'est $E_m$ qui se conserve), puis observe comment la part claire (Ep) diminue au profit de la part foncée (Ec) à mesure que le point descend le long de la piste.',
        caption: 'Conservation de l\'énergie mécanique le long d\'une descente sans frottement : l\'énergie potentielle $E_{pp}$ se transforme progressivement en énergie cinétique $E_c$, la somme $E_m=E_c+E_{pp}$ restant constante.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Non-conservation avec frottement',
          title: 'Énergie mécanique dissipée par les frottements',
          description: 'Lorsque des frottements travaillent, l\'énergie mécanique ne se conserve plus : une partie de l\'énergie initiale est <strong>dissipée</strong> sous forme de chaleur, et manque à l\'arrivée.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="em2-title em2-desc">
              <title id="em2-title">Non-conservation de l'energie mecanique avec frottement</title>
              <desc id="em2-desc">Deux barres comparent l'energie mecanique au depart et a l'arrivee d'une descente avec frottement. Au depart, une barre pleine represente l'energie mecanique initiale, entierement potentielle. Une ligne pointillee horizontale prolonge le sommet de cette barre vers la droite, au-dessus de la seconde barre, marquant le niveau qu'atteindrait l'energie mecanique a l'arrivee en l'absence de frottement. A l'arrivee, la barre reellement observee est plus courte : elle est surmontee d'un rectangle en pointilles, non rempli, qui comble l'ecart jusqu'a la ligne de reference. Ce rectangle en pointilles represente l'energie mecanique dissipee par les frottements sous forme de chaleur, tandis que la partie pleine represente l'energie cinetique restante.</desc>

              <!-- niveau de reference Em(depart) -->
              <line class="guide-line" x1="170" y1="50" x2="440" y2="50"></line>
              <text class="tick-label" x="446" y="54" text-anchor="start">Eₘ(départ)</text>

              <!-- socle -->
              <line class="frame-line" x1="170" y1="150" x2="440" y2="150"></line>

              <!-- barre depart : 100% Ep -->
              <rect x="170" y="50" width="50" height="100" fill="var(--diagram-accent)" opacity="0.35"></rect>
              <text class="tick-label" x="228" y="104" text-anchor="start">Ep</text>
              <text class="tick-label" x="195" y="168" text-anchor="middle">Départ</text>

              <!-- barre arrivee : Ec restante (pleine) + Q dissipee (pointilles, non rempli) -->
              <rect x="390" y="95" width="50" height="55" fill="var(--diagram-accent)"></rect>
              <text class="tick-label" x="448" y="126" text-anchor="start">Ec</text>
              <rect class="guide-line" x="390" y="50" width="50" height="45" fill="none"></rect>
              <text class="tick-label" x="448" y="76" text-anchor="start">Q</text>
              <text class="tick-label" x="415" y="168" text-anchor="middle">Arrivée</text>
            </svg>
          `,
          notes: [
            'Au <strong>départ</strong>, l\'énergie mécanique est entièrement potentielle : la barre pleine atteint le niveau de référence $E_{m,départ}$.',
            'À l\'<strong>arrivée</strong>, en présence de frottements, l\'énergie mécanique restante (barre pleine, uniquement cinétique puisque l\'altitude y est nulle) n\'atteint plus ce niveau : l\'écart, représenté par le rectangle en pointillés, est l\'énergie $Q$ <strong>dissipée</strong> par les frottements sous forme de chaleur.',
            'Contrairement au cas sans frottement (diagramme précédent), la hauteur totale utile diminue entre le départ et l\'arrivée : c\'est la signature visuelle d\'une <strong>non-conservation</strong> de l\'énergie mécanique.'
          ],
          reading: 'Compare la hauteur de la barre « Arrivée » à la ligne pointillée de référence $E_{m,départ}$ : l\'écart entre les deux, matérialisé par le rectangle en pointillés, correspond exactement à l\'énergie dissipée par les frottements.',
          caption: 'Non-conservation de l\'énergie mécanique en présence de frottements : l\'énergie disponible à l\'arrivée (uniquement cinétique) est inférieure à l\'énergie mécanique de départ, l\'écart $Q$ étant dissipé sous forme de chaleur.'
        }
      ],
      example: {
        statement: 'Un skieur de masse $m=70$ kg part sans vitesse initiale du sommet d\'une piste située à une hauteur $h=45$ m au-dessus de l\'arrivée. On néglige les frottements et la résistance de l\'air, et on prend $g=9{,}81$ m/s².<br/><br/>Calculer la vitesse du skieur à l\'arrivée.',
        steps: [
          'Système : le skieur. Forces : le poids (conservatif) et la réaction de la piste (perpendiculaire au déplacement, ne travaille pas). L\'énergie mécanique se conserve donc entre le sommet (A) et l\'arrivée (B).',
          'On choisit l\'arrivée comme origine des altitudes ($z_B=0$). Au sommet, $E_{m,A}=E_{c,A}+E_{pp,A}=0+mgh$ (vitesse nulle au départ). À l\'arrivée, $E_{m,B}=E_{c,B}+E_{pp,B}=\\dfrac12 mv_B^2+0$.',
          'Conservation de l\'énergie mécanique : $E_{m,A}=E_{m,B}$, soit $mgh=\\dfrac12 mv_B^2$. La masse $m$ se simplifie : $v_B=\\sqrt{2gh}$.',
          'Application numérique : $v_B=\\sqrt{2\\times9{,}81\\times45}=\\sqrt{882{,}9}\\approx29{,}7$ m/s.'
        ],
        answer: '$v_B\\approx29{,}7$ m/s, soit environ $107$ km/h. Remarque : cette vitesse ne dépend pas de la masse du skieur — deux skieurs de masses différentes, sans frottement, arriveraient exactement à la même vitesse.'
      },
      formulas: [
        '$E_c=\\dfrac12 mv^2$ (énergie cinétique, en J)',
        '$E_{pp}=mgz+\\text{cste}$ (énergie potentielle de pesanteur)',
        '$E_m=E_c+E_{pp}$ (énergie mécanique)',
        'Conservation (forces conservatives uniquement) : $E_{m,A}=E_{m,B}$',
        'Théorème de l\'énergie mécanique : $\\Delta E_m=\\sum W(\\vec F_{nc})$ (forces non conservatives)',
        'Théorème de l\'énergie cinétique : $\\Delta E_c=\\sum W(\\vec F)$ (toutes les forces, toujours valable)'
      ],
      recap: [
        'L\'énergie mécanique $E_m=E_c+E_{pp}$ se <strong>conserve</strong> si seules des forces conservatives (le poids) travaillent : elle se transforme alors, d\'énergie potentielle en énergie cinétique ou réciproquement.',
        'Une force perpendiculaire au déplacement (réaction normale, tension d\'un fil dans un mouvement circulaire) ne travaille <strong>jamais</strong> : elle ne modifie pas l\'énergie mécanique.',
        'En présence de frottements, l\'énergie mécanique <strong>diminue</strong> : $\\Delta E_m=W(\\vec F_{frottements}) &lt; 0$, l\'énergie perdue étant dissipée sous forme de chaleur.',
        'Le théorème de l\'énergie cinétique ($\\Delta E_c=\\sum W(\\vec F)$) reste valable dans <strong>tous les cas</strong>, avec ou sans frottement : c\'est l\'outil le plus général.'
      ],
      piege: 'Une erreur fréquente est d\'oublier qu\'une force perpendiculaire à la vitesse, comme la réaction normale d\'un support ou la tension d\'un fil dans un mouvement circulaire, ne travaille jamais et ne peut donc jamais faire varier l\'énergie mécanique, même si elle est intense. Attention à toujours identifier la nature de chaque force (conservative, non conservative, ou à travail nul) avant de décider si l\'énergie mécanique se conserve ou non.'
    },

    quiz: [
      {
        q: 'Un pendule oscille librement dans l\'air (frottements de l\'air négligés) : seuls son poids et la tension du fil s\'exercent sur la masse. Que peut-on dire de son énergie mécanique au cours de l\'oscillation ?',
        options: [
          'Elle se conserve, car le poids est conservatif et la tension du fil ne travaille jamais (toujours perpendiculaire à la vitesse)',
          'Elle augmente à chaque oscillation',
          'Elle diminue progressivement à cause de la tension du fil',
          'Elle est nulle en permanence'
        ],
        answer: 0,
        correction: 'Le poids est une force conservative, et la tension du fil, toujours perpendiculaire à la vitesse dans ce mouvement de rotation autour du point d\'attache, ne travaille jamais. L\'énergie mécanique se conserve donc : seule sa répartition entre énergie cinétique et énergie potentielle change au cours de l\'oscillation.'
      },
      {
        q: 'Un objet de masse $m=2$ kg tombe en chute libre sans vitesse initiale depuis une hauteur $h=10$ m (frottements négligés, $g=9{,}81$ m/s²). Quelle est sa vitesse juste avant l\'impact au sol ?',
        options: [
          '$v\\approx14{,}0$ m/s',
          '$v\\approx19{,}6$ m/s',
          '$v\\approx9{,}81$ m/s',
          '$v\\approx196$ m/s'
        ],
        answer: 0,
        correction: 'Conservation de l\'énergie mécanique : $mgh=\\dfrac12 mv^2$, donc $v=\\sqrt{2gh}=\\sqrt{2\\times9{,}81\\times10}=\\sqrt{196{,}2}\\approx14{,}0$ m/s. La masse ne change rien au résultat.'
      },
      {
        q: 'Un skieur descend une piste réelle, avec frottements. Comment évolue son énergie mécanique entre le sommet et l\'arrivée ?',
        options: [
          'Elle diminue, car les frottements dissipent de l\'énergie sous forme de chaleur',
          'Elle reste constante, comme sans frottement',
          'Elle augmente progressivement',
          'Elle est toujours nulle'
        ],
        answer: 0,
        correction: 'Les frottements sont une force non conservative dont le travail est négatif (ils s\'opposent toujours au mouvement) : $\\Delta E_m=W(\\vec F_{frottements}) &lt; 0$. L\'énergie mécanique diminue, l\'énergie perdue étant dissipée sous forme de chaleur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var g = 9.81;
        var typeExo = pick(['sansFrottement', 'avecFrottement']);

        if (typeExo === 'sansFrottement') {
          var m = pick([50, 60, 65, 70, 75, 80, 90]);
          var h = pick([15, 20, 25, 30, 35, 40]);
          var v = parseFloat(Math.sqrt(2 * g * h).toFixed(2));
          var contexte = pick([
            'un skieur qui descend une piste damée',
            'un cycliste lancé dans une descente',
            'une luge sur une piste enneigée',
            'une bille lâchée sur un rail incurvé',
            'un chariot sur un toboggan de parc d\'attractions'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', de masse $m=' + m + '$ kg, partant sans vitesse initiale d\'une hauteur $h=' + h + '$ m au-dessus de l\'arrivée. On néglige tout frottement ($g=9{,}81$ m/s²).<br/><br/>Calcule la vitesse à l\'arrivée (en m/s, arrondie au centième).',
            answer: v,
            tolerance: Math.max(0.1, parseFloat((v * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'Conservation de l\'énergie mécanique : $mgh=\\dfrac12 mv^2$, donc $v=\\sqrt{2gh}$ (la masse se simplifie).',
            solution: [
              'Conservation de l\'énergie mécanique (poids seul travaille) : $mgh=\\dfrac12 mv^2$, donc $v=\\sqrt{2gh}$.',
              'Application numérique : $v=\\sqrt{2\\times9{,}81\\times' + h + '}$.',
              'Résultat : $v\\approx' + fr(v, 2) + '$ m/s.'
            ]
          };
        } else {
          var m2 = pick([50, 60, 70, 80, 90]);
          var h2 = pick([15, 18, 20, 25, 30]);
          var frac = randFloat(0.7, 0.95, 2);
          var vIdeal = Math.sqrt(2 * g * h2);
          var vReel = parseFloat((vIdeal * frac).toFixed(2));
          var EmTop = m2 * g * h2;
          var EmBottom = 0.5 * m2 * vReel * vReel;
          var Q = parseFloat((EmTop - EmBottom).toFixed(0));
          var contexte2 = pick([
            'un skieur freinant légèrement sur une piste damée',
            'un chariot de manutention descendant un plan incliné',
            'une luge freinée par la neige fraîche',
            'un traîneau tracté descendant une pente enneigée',
            'un wagonnet de mine descendant une galerie inclinée'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', de masse $m=' + m2 + '$ kg, partant sans vitesse initiale d\'une hauteur $h=' + h2 + '$ m au-dessus de l\'arrivée ($g=9{,}81$ m/s²). En raison des frottements, la vitesse mesurée à l\'arrivée n\'est que $v=' + fr(vReel, 2) + '$ m/s (au lieu de la valeur idéale sans frottement).<br/><br/>Calcule l\'énergie mécanique dissipée par les frottements entre le départ et l\'arrivée (en J, arrondie à l\'unité).',
            answer: Q,
            tolerance: Math.max(20, parseFloat((Q * 0.05).toFixed(0))),
            unit: 'J',
            hint: 'Calcule $E_{m,départ}=mgh$ et $E_{m,arrivée}=\\dfrac12 mv^2$ (arrivée = origine des altitudes) : l\'énergie dissipée est leur différence.',
            solution: [
              'Énergie mécanique au départ (vitesse nulle) : $E_{m,départ}=mgh=' + m2 + '\\times9{,}81\\times' + h2 + '\\approx' + fr(Math.round(EmTop)) + '$ J.',
              'Énergie mécanique à l\'arrivée (altitude nulle) : $E_{m,arrivée}=\\dfrac12 mv^2=0{,}5\\times' + m2 + '\\times' + fr(vReel, 2) + '^2\\approx' + fr(Math.round(EmBottom)) + '$ J.',
              'Énergie dissipée par les frottements : $Q=E_{m,départ}-E_{m,arrivée}\\approx' + fr(Q) + '$ J.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un chariot de manutention de masse $m=150$ kg part sans vitesse initiale du sommet d\'un plan incliné, à une hauteur $h=4{,}0$ m au-dessus du sol horizontal. Il parcourt une distance totale $d=12$ m le long du plan incliné jusqu\'en bas, où sa vitesse est mesurée à $v=6{,}5$ m/s. On prend $g=9{,}81$ m/s².',
      tasks: [
        'Calculer la vitesse qu\'aurait le chariot en bas du plan incliné en l\'absence de tout frottement, et la comparer à la vitesse réellement mesurée.',
        'Calculer l\'énergie mécanique perdue $|\\Delta E_m|$ entre le sommet et le bas du plan incliné.',
        'En déduire la norme de la force de frottement moyenne $f$ (supposée constante et opposée au mouvement) subie par le chariot le long du plan incliné.'
      ],
      solutions: [
        'Sans frottement, $v_{idéal}=\\sqrt{2gh}=\\sqrt{2\\times9{,}81\\times4{,}0}=\\sqrt{78{,}48}\\approx8{,}86$ m/s. La vitesse réellement mesurée ($6{,}5$ m/s) est nettement inférieure : les frottements ont dissipé une partie de l\'énergie mécanique.',
        'Avec le bas du plan incliné comme origine des altitudes : $E_{m,haut}=mgh=150\\times9{,}81\\times4{,}0=5\\,886$ J et $E_{m,bas}=\\dfrac12 mv^2=0{,}5\\times150\\times6{,}5^2=3\\,168{,}75$ J. L\'énergie perdue est $|\\Delta E_m|=5\\,886-3\\,168{,}75\\approx2\\,717$ J.',
        'Le travail de la force de frottement, constante et opposée au déplacement sur la distance $d$, vaut $W(\\vec f)=-fd=\\Delta E_m$, donc $f=\\dfrac{|\\Delta E_m|}{d}=\\dfrac{2\\,717}{12}\\approx226$ N.'
      ],
      finalAnswer: '$f\\approx226$ N. Cette force de frottement moyenne, à elle seule, dissipe près de $46\\,\\%$ de l\'énergie mécanique initiale du chariot ($2\\,717$ J sur $5\\,886$ J) : un ordre de grandeur qui illustre l\'importance de limiter les frottements dans les systèmes de manutention pour préserver l\'énergie disponible en fin de course.'
    },

    evaluation: {
      title: 'Évaluation — Énergie mécanique et conservation',
      duration: '30 min',
      questions: [
        {
          statement: 'Un objet de masse $m=3$ kg tombe en chute libre sans vitesse initiale depuis une hauteur $h=20$ m (frottements négligés, $g=9{,}81$ m/s²). Calculer sa vitesse juste avant l\'impact (en m/s, arrondie au dixième).',
          type: 'numeric',
          answer: 19.8,
          tolerance: 0.3,
          unit: 'm/s',
          points: 2,
          correction: '$v=\\sqrt{2gh}=\\sqrt{2\\times9{,}81\\times20}=\\sqrt{392{,}4}\\approx19{,}8$ m/s.'
        },
        {
          statement: 'Laquelle de ces forces ne travaille jamais, quel que soit le mouvement, car elle est toujours perpendiculaire au déplacement ?',
          type: 'multiple-choice',
          options: [
            'Le poids',
            'Une force de frottement',
            'La réaction normale d\'un support',
            'Une force motrice'
          ],
          answer: 2,
          points: 2,
          correction: 'La réaction normale d\'un support est, par définition, perpendiculaire à la surface de contact et donc au déplacement le long de cette surface : son travail est nul, quel que soit le mouvement.'
        },
        {
          statement: 'Un objet de masse $m=100$ kg part sans vitesse initiale d\'une hauteur $h=5$ m ($g=9{,}81$ m/s²). Sa vitesse mesurée à l\'arrivée n\'est que $v=8$ m/s à cause des frottements. Calculer l\'énergie mécanique dissipée (en J).',
          type: 'numeric',
          answer: 1705,
          tolerance: 50,
          unit: 'J',
          points: 3,
          correction: '$E_{m,départ}=mgh=100\\times9{,}81\\times5=4\\,905$ J. $E_{m,arrivée}=\\dfrac12 mv^2=0{,}5\\times100\\times8^2=3\\,200$ J. Énergie dissipée : $4\\,905-3\\,200=1\\,705$ J.'
        },
        {
          statement: 'L\'énergie mécanique d\'un système se définit comme :',
          type: 'multiple-choice',
          options: [
            '$E_m=E_c\\times E_{pp}$',
            '$E_m=E_c+E_{pp}$',
            '$E_m=E_c-E_{pp}$',
            '$E_m=\\sqrt{E_c\\times E_{pp}}$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'énergie mécanique est la <strong>somme</strong> de l\'énergie cinétique et de l\'énergie potentielle : $E_m=E_c+E_{pp}$.'
        },
        {
          statement: 'Le théorème de l\'énergie cinétique ($\\Delta E_c=\\sum W(\\vec F)$) est valable :',
          type: 'multiple-choice',
          options: [
            'Uniquement en l\'absence de frottement',
            'Uniquement si toutes les forces sont conservatives',
            'Dans tous les cas, avec ou sans frottement',
            'Uniquement pour un mouvement rectiligne'
          ],
          answer: 2,
          points: 2,
          correction: 'Contrairement à la conservation de l\'énergie mécanique (valable seulement sans force non conservative), le théorème de l\'énergie cinétique prend en compte le travail de <strong>toutes</strong> les forces : il reste donc valable dans tous les cas, y compris avec frottement.'
        }
      ]
    }
  });
