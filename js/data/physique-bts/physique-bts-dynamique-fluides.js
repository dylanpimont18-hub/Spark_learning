/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-dynamique-fluides.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-dynamique-fluides',
    level: 3, subject: 'physique',
    icon: '🌊',
    title: 'Dynamique des fluides (théorème de Bernoulli)',
    subtitle: 'Débit volumique, équation de continuité, théorème de Bernoulli, effet Venturi, formule de Torricelli',
    keywords: ['Bernoulli', 'Continuité', 'Venturi', 'Débit', 'Torricelli'],
    physics: 'La dynamique des fluides explique le fonctionnement des débitmètres à effet Venturi, le dimensionnement des buses et lances à incendie, la vidange des réservoirs, et l\'écoulement dans les réseaux de tuyauterie industriels et sanitaires.',

    cours: {
      intro: 'Contrairement à la statique des fluides (fluide au repos), la <strong>dynamique des fluides</strong> étudie un fluide <strong>en mouvement</strong> dans une conduite ou un réseau. On modélise ce mouvement le long d\'une <strong>ligne de courant</strong>, la trajectoire suivie par une particule de fluide.<br/><br/>Le <strong>débit volumique</strong> $Q_v$ d\'un fluide traversant une section $S$ à la vitesse $v$ est $Q_v = S \\times v$, exprimé en m³/s. Pour un fluide incompressible en écoulement permanent, ce débit reste <strong>constant</strong> tout au long de la conduite : c\'est l\'<strong>équation de continuité</strong>, $S_1 v_1 = S_2 v_2$.<br/><br/>Le <strong>théorème de Bernoulli</strong> relie pression, vitesse et altitude le long d\'une ligne de courant : $P + \\dfrac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$. Il traduit la conservation de l\'énergie du fluide (fluide parfait, incompressible, écoulement permanent, sans échange de travail ni de chaleur).',
      definitions: [
        { term: 'Débit volumique ($Q_v$)', def: 'Volume de fluide traversant une section par unité de temps : $Q_v = S \\times v$, en m³/s. $1$ m³/s $= 1\\,000$ L/s.' },
        { term: 'Équation de continuité', def: 'Pour un fluide incompressible en écoulement permanent, le débit volumique est le même à travers toute section de la conduite : $S_1 v_1 = S_2 v_2$. Une section plus petite impose une vitesse plus grande.' },
        { term: 'Théorème de Bernoulli', def: '$P + \\dfrac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$ le long d\'une ligne de courant, pour un fluide parfait incompressible en écoulement permanent.' },
        { term: 'Effet Venturi', def: 'Conséquence directe du théorème de Bernoulli : dans un étranglement (section réduite), la vitesse augmente et la <strong>pression diminue</strong>. C\'est l\'inverse de l\'intuition naturelle.' }
      ],
      method: {
        title: 'Résoudre un problème de dynamique des fluides en 3 étapes',
        steps: [
          '<strong>Repérer deux sections</strong> le long de la même ligne de courant (souvent une section large et une section étroite), et identifier les grandeurs connues et inconnues : $S_1$, $v_1$, $P_1$, $z_1$ et $S_2$, $v_2$, $P_2$, $z_2$.',
          '<strong>Appliquer l\'équation de continuité</strong> $S_1 v_1 = S_2 v_2$ pour calculer la vitesse manquante, dès que l\'on connaît les deux sections et une des deux vitesses.<br/>Astuce : une conduite qui se rétrécit ($S_2 < S_1$) impose une vitesse plus grande ($v_2 > v_1$).',
          '<strong>Appliquer le théorème de Bernoulli</strong> entre les deux sections pour trouver la pression manquante. Pour une conduite horizontale ($z_1 = z_2$), les termes de hauteur s\'annulent et l\'équation se simplifie en $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Tube de Venturi (effet Venturi)',
        title: 'Accélération du fluide dans un étranglement et théorème de Bernoulli',
        description: 'Une conduite se rétrécit puis s\'élargit à nouveau : dans la section étroite, la vitesse $v_2$ augmente tandis que la pression $P_2$ diminue, conformément au théorème de Bernoulli.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="venturi-title venturi-desc">
            <title id="venturi-title">Schema d'un tube de Venturi illustrant le theoreme de Bernoulli</title>
            <desc id="venturi-desc">Une canalisation horizontale se retrecit progressivement en son milieu puis s'elargit a nouveau. Dans la section large a gauche, le fluide s'ecoule avec une vitesse v1 plus faible et une pression P1 plus elevee. Dans la section etroite au centre, le fluide accelere : sa vitesse v2 devient plus grande tandis que sa pression P2 diminue. Cette relation inverse entre vitesse et pression illustre le theoreme de Bernoulli.</desc>

            <defs>
              <marker id="arrow-physbts-venturi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- parois du tube de Venturi -->
            <path class="frame-line" d="M40,80 L160,80 L220,130 L340,130 L400,80 L520,80" fill="none"></path>
            <path class="frame-line" d="M40,220 L160,220 L220,170 L340,170 L400,220 L520,220" fill="none"></path>

            <!-- axe central (ligne de courant) -->
            <line class="guide-line" x1="40" y1="150" x2="520" y2="150"></line>

            <!-- vecteur vitesse v1 (section large) -->
            <line class="curve-main" x1="70" y1="150" x2="120" y2="150" marker-end="url(#arrow-physbts-venturi)"></line>
            <text class="annotation-label" x="130" y="145">v₁</text>

            <!-- vecteur vitesse v2 (section etroite, plus rapide) -->
            <line class="curve-main" x1="230" y1="150" x2="300" y2="150" marker-end="url(#arrow-physbts-venturi)"></line>
            <text class="annotation-label" x="305" y="145">v₂</text>

            <!-- cotation pression P1 (section large) -->
            <line class="guide-line" x1="100" y1="55" x2="100" y2="80"></line>
            <circle class="plot-point-alt" cx="100" cy="80" r="4"></circle>
            <text class="annotation-label" x="100" y="46" text-anchor="middle">P₁ (haute)</text>

            <!-- cotation pression P2 (section etroite) -->
            <line class="guide-line" x1="280" y1="55" x2="280" y2="130"></line>
            <circle class="plot-point-alt" cx="280" cy="130" r="4"></circle>
            <text class="annotation-label" x="280" y="46" text-anchor="middle">P₂ (basse)</text>

            <!-- cotation sections S1 / S2 -->
            <line class="guide-line" x1="100" y1="230" x2="100" y2="240"></line>
            <text class="tick-label" x="100" y="255" text-anchor="middle">S₁ (large)</text>
            <line class="guide-line" x1="280" y1="180" x2="280" y2="240"></line>
            <text class="tick-label" x="280" y="255" text-anchor="middle">S₂ (étroite)</text>

            <!-- sens de l'ecoulement -->
            <line class="curve-main" x1="440" y1="260" x2="500" y2="260" marker-end="url(#arrow-physbts-venturi)"></line>
            <text class="label-soft" x="470" y="276" text-anchor="middle">Sens de l'écoulement</text>
          </svg>
        `,
        notes: [
          'D\'après l\'<strong>équation de continuité</strong>, la section rétrécie impose une vitesse $v_2$ plus grande que $v_1$ : $S_1 v_1 = S_2 v_2$.',
          'D\'après le <strong>théorème de Bernoulli</strong> (conduite horizontale), $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$ : comme $v_2 > v_1$, on a nécessairement $P_2 < P_1$.',
          'C\'est l\'<strong>effet Venturi</strong> : la pression est plus basse là où la vitesse est plus grande. Ce principe permet de mesurer un débit à partir d\'une simple différence de pression.'
        ],
        reading: 'Repère d\'abord la section large à gauche (vitesse $v_1$ faible, pression $P_1$ élevée), puis suis le rétrécissement jusqu\'à la section étroite au centre (vitesse $v_2$ élevée, pression $P_2$ basse).',
        caption: 'Tube de Venturi : dans la section rétrécie, la vitesse du fluide augmente tandis que sa pression diminue (effet Venturi, théorème de Bernoulli).'
      },
      example: {
        statement: 'Un tube de Venturi (débitmètre) est traversé par de l\'eau ($\\rho = 1\\,000$ kg/m³). La section large a une aire $S_1 = 8$ cm² et la section étroite $S_2 = 2$ cm². La vitesse de l\'eau dans la section large est $v_1 = 1{,}5$ m/s. Le tube est horizontal ($z_1 = z_2$).<br/><br/>Calculer la vitesse $v_2$ dans la section étroite, puis la différence de pression $P_1 - P_2$ entre les deux sections.',
        steps: [
          'Équation de continuité : $S_1 v_1 = S_2 v_2$, donc $v_2 = v_1 \\times \\dfrac{S_1}{S_2} = 1{,}5 \\times \\dfrac{8}{2} = 1{,}5 \\times 4 = 6$ m/s.',
          'Le tube étant horizontal, le théorème de Bernoulli se simplifie en $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$.',
          'On isole la différence de pression : $P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2) = 0{,}5 \\times 1\\,000 \\times (6^2 - 1{,}5^2)$.',
          'Calcul : $6^2 - 1{,}5^2 = 36 - 2{,}25 = 33{,}75$, donc $P_1 - P_2 = 0{,}5 \\times 1\\,000 \\times 33{,}75 = 16\\,875$ Pa.'
        ],
        answer: '$v_2 = 6$ m/s et $P_1 - P_2 \\approx 16\\,875$ Pa. La pression est plus <strong>basse</strong> dans la section étroite, là où la vitesse est plus grande : c\'est l\'effet Venturi, utilisé pour mesurer un débit à partir d\'une simple différence de pression.'
      },
      formulas: [
        '$Q_v = S \\times v$ (débit volumique, en m³/s)',
        'Équation de continuité : $S_1 v_1 = S_2 v_2$',
        'Théorème de Bernoulli : $P + \\dfrac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$',
        'Cas d\'une conduite horizontale ($z_1 = z_2$) : $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$',
        'Formule de Torricelli (vitesse de vidange d\'un réservoir) : $v = \\sqrt{2gh}$'
      ],
      recap: [
        'Le débit volumique $Q_v = S \\times v$ reste <strong>constant</strong> le long d\'une conduite pour un fluide incompressible : c\'est l\'équation de continuité.',
        'Une section qui se rétrécit impose une vitesse plus grande, donc une pression plus basse : c\'est l\'<strong>effet Venturi</strong>, conséquence directe du théorème de Bernoulli.',
        'Pour une conduite horizontale, le théorème de Bernoulli se simplifie car les termes $\\rho g z$ s\'annulent entre les deux sections.',
        'La formule de Torricelli $v = \\sqrt{2gh}$ (vidange d\'un réservoir) est un cas particulier de Bernoulli, avec $P_1 = P_2 = P_{\\text{atm}}$ à la surface libre et à la sortie.'
      ],
      piege: 'Une vitesse plus grande s\'accompagne d\'une pression plus <strong>basse</strong>, et non plus élevée : c\'est l\'<strong>effet Venturi</strong>, souvent contre-intuitif. Attention également à ne pas confondre l\'équation de continuité ($S_1 v_1 = S_2 v_2$, une conservation du débit) avec le théorème de Bernoulli ($P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$, une conservation d\'énergie) : les deux relations sont nécessaires et complémentaires pour résoudre un problème complet, l\'une donnant la vitesse manquante, l\'autre la pression manquante.'
    },

    quiz: [
      {
        q: 'De l\'eau s\'écoule dans une conduite dont la section passe de $S_1 = 12$ cm² à $S_2 = 4$ cm². La vitesse dans la section large est $v_1 = 2$ m/s. Quelle est la vitesse $v_2$ dans la section étroite ?',
        options: [
          '$v_2 = 6$ m/s',
          '$v_2 = 0{,}67$ m/s',
          '$v_2 = 2$ m/s',
          '$v_2 = 24$ m/s'
        ],
        answer: 0,
        correction: 'Équation de continuité : $S_1 v_1 = S_2 v_2$ → $v_2 = v_1 \\times \\dfrac{S_1}{S_2} = 2 \\times \\dfrac{12}{4} = 2 \\times 3 = 6$ m/s. La section est divisée par $3$, donc la vitesse est multipliée par $3$ : le débit reste ainsi constant.'
      },
      {
        q: 'Dans un tube de Venturi horizontal, lorsque le fluide passe de la section large à la section étroite, sa vitesse augmente. Que devient sa pression ?',
        options: [
          'Elle augmente également, dans les mêmes proportions',
          'Elle diminue : c\'est l\'effet Venturi',
          'Elle reste constante, seule la vitesse varie',
          'Elle devient négative'
        ],
        answer: 1,
        correction: 'D\'après le théorème de Bernoulli, $P + \\dfrac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$. À altitude constante, si $v$ augmente, alors $P$ doit diminuer pour que la somme reste constante. C\'est l\'effet Venturi : contre-intuitif, mais bien vérifié expérimentalement.'
      },
      {
        q: 'Un réservoir ouvert est rempli d\'eau jusqu\'à une hauteur $h = 1{,}8$ m au-dessus d\'un petit orifice de vidange situé à sa base. D\'après la formule de Torricelli, quelle est la vitesse d\'écoulement de l\'eau à la sortie de l\'orifice (avec $g = 9{,}81$ m/s²) ?',
        options: [
          '$v \\approx 5{,}94$ m/s',
          '$v \\approx 1{,}8$ m/s',
          '$v \\approx 35{,}3$ m/s',
          '$v \\approx 17{,}7$ m/s'
        ],
        answer: 0,
        correction: 'Formule de Torricelli : $v = \\sqrt{2gh} = \\sqrt{2 \\times 9{,}81 \\times 1{,}8} = \\sqrt{35{,}3} \\approx 5{,}94$ m/s. Cette formule est un cas particulier du théorème de Bernoulli appliqué entre la surface libre et l\'orifice.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['continuite', 'bernoulli']);

        if (typeExo === 'continuite') {
          var S1 = randFloat(6, 20, 1);
          var ratio = randFloat(0.2, 0.6, 2);
          var S2 = parseFloat((S1 * ratio).toFixed(1));
          var v1 = randFloat(0.5, 4, 1);
          var v2 = parseFloat((v1 * S1 / S2).toFixed(1));
          var contexte = pick([
            'un réseau d\'arrosage agricole',
            'une conduite de climatisation industrielle',
            'un circuit de refroidissement de machine',
            'une tuyauterie de chaufferie collective',
            'un réseau de distribution d\'eau potable',
            'une buse de nettoyage haute pression'
          ]);
          return {
            statement: 'Dans ' + contexte + ', une conduite de section $S_1 = ' + fr(S1, 1) + '$ cm² se rétrécit progressivement jusqu\'à une section $S_2 = ' + fr(S2, 1) + '$ cm² (tube de Venturi). Le fluide s\'écoule à une vitesse $v_1 = ' + fr(v1, 1) + '$ m/s dans la section large.<br/><br/>D\'après l\'équation de continuité, calcule la vitesse $v_2$ dans la section étroite (en m/s, arrondie au dixième).',
            answer: v2,
            tolerance: Math.max(0.2, parseFloat((v2 * 0.05).toFixed(2))),
            unit: 'm/s',
            hint: 'Utilise l\'équation de continuité : $S_1 v_1 = S_2 v_2$.',
            solution: [
              'Équation de continuité : $S_1 v_1 = S_2 v_2$.',
              'On isole $v_2$ : $v_2 = v_1 \\times \\dfrac{S_1}{S_2} = ' + fr(v1, 1) + ' \\times \\dfrac{' + fr(S1, 1) + '}{' + fr(S2, 1) + '}$.',
              'Résultat : $v_2 \\approx ' + fr(v2, 1) + '$ m/s.',
              'La section étant divisée par ' + fr(parseFloat((S1 / S2).toFixed(1)), 1) + ', la vitesse est multipliée d\'autant : le débit $Q_v = S \\times v$ reste constant.'
            ]
          };
        } else {
          var liquides = [
            { nom: 'eau', rho: 1000 },
            { nom: 'eau de mer', rho: 1025 },
            { nom: 'huile hydraulique', rho: 850 }
          ];
          var liquide = pick(liquides);
          var vA = randFloat(0.5, 3, 1);
          var facteur = randFloat(2, 5, 1);
          var vB = parseFloat((vA * facteur).toFixed(1));
          var deltaP = Math.round(0.5 * liquide.rho * (vB * vB - vA * vA));
          var contexte = pick([
            'un débitmètre à effet Venturi',
            'une buse d\'injection industrielle',
            'un banc d\'essai hydraulique',
            'une canalisation de process chimique',
            'un système d\'arrosage sous pression'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un fluide assimilé à ' + liquide.nom + ' ($\\rho = ' + liquide.rho + '$ kg/m³) s\'écoule à une vitesse $v_1 = ' + fr(vA, 1) + '$ m/s dans une section large, puis accélère jusqu\'à $v_2 = ' + fr(vB, 1) + '$ m/s dans une section rétrécie (conduite horizontale, $z_1 = z_2$).<br/><br/>D\'après le théorème de Bernoulli, calcule la différence de pression $\\Delta P = P_1 - P_2$ entre la section large et la section étroite (en Pa, arrondie à l\'unité).',
            answer: deltaP,
            tolerance: Math.max(200, Math.round(deltaP * 0.05)),
            unit: 'Pa',
            hint: 'Conduite horizontale : $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$, donc $\\Delta P = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2)$.',
            solution: [
              'Conduite horizontale : $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$, donc $\\Delta P = P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2)$.',
              'Calcul du terme de vitesse : $v_2^2 - v_1^2 = ' + fr(vB, 1) + '^2 - ' + fr(vA, 1) + '^2 \\approx ' + fr(parseFloat((vB * vB - vA * vA).toFixed(2)), 2) + '$.',
              'Application numérique : $\\Delta P = 0{,}5 \\times ' + liquide.rho + ' \\times ' + fr(parseFloat((vB * vB - vA * vA).toFixed(2)), 2) + '$.',
              'Résultat : $\\Delta P \\approx ' + fr(deltaP) + '$ Pa. Une vitesse plus grande dans la section étroite se traduit bien par une pression plus basse.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une lance à incendie est alimentée par un tuyau de diamètre $d_1 = 65$ mm relié à une buse de sortie de diamètre $d_2 = 20$ mm. Le débit volumique dans le tuyau est $Q_v = 1\\,000$ L/min. On assimile l\'eau à un fluide parfait incompressible ($\\rho = 1\\,000$ kg/m³), et on néglige la différence de hauteur entre le tuyau et la buse.',
      tasks: [
        'Convertir le débit $Q_v = 1\\,000$ L/min en m³/s.',
        'Calculer les aires des sections $S_1$ (tuyau) et $S_2$ (buse), puis en déduire les vitesses $v_1$ et $v_2$ à partir du débit $Q_v = S \\times v$.',
        'D\'après le théorème de Bernoulli, calculer la différence de pression $P_1 - P_2$ nécessaire entre le tuyau et la buse, et commenter son ordre de grandeur.'
      ],
      solutions: [
        '$1\\,000$ L $= 1$ m³, et $1$ min $= 60$ s, donc $Q_v = \\dfrac{1}{60} \\approx 0{,}0167$ m³/s.',
        'Aires : $S_1 = \\pi \\dfrac{d_1^2}{4} = \\pi \\times \\dfrac{0{,}065^2}{4} \\approx 0{,}00332$ m² et $S_2 = \\pi \\dfrac{d_2^2}{4} = \\pi \\times \\dfrac{0{,}02^2}{4} \\approx 0{,}000314$ m². Vitesses : $v_1 = \\dfrac{Q_v}{S_1} \\approx \\dfrac{0{,}0167}{0{,}00332} \\approx 5{,}02$ m/s et $v_2 = \\dfrac{Q_v}{S_2} \\approx \\dfrac{0{,}0167}{0{,}000314} \\approx 53{,}1$ m/s.',
        'Bernoulli (conduite horizontale) : $P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2) = 0{,}5 \\times 1\\,000 \\times (53{,}1^2 - 5{,}02^2) \\approx 0{,}5 \\times 1\\,000 \\times 2\\,790 \\approx 1\\,395\\,000$ Pa, soit environ $1{,}40$ MPa (près de $14$ bar).'
      ],
      finalAnswer: '$P_1 - P_2 \\approx 1{,}40$ MPa, une pression considérable pour une simple buse portative. C\'est pourquoi les lances à incendie nécessitent des pompes capables de délivrer une pression d\'alimentation élevée et un matériel (tuyaux, raccords) renforcé : la vitesse de sortie très grande ($\\approx 53$ m/s, soit près de $190$ km/h) est ce qui donne à l\'eau sa portée et sa force d\'impact.'
    },

    evaluation: {
      title: 'Évaluation — Dynamique des fluides (théorème de Bernoulli)',
      duration: '30 min',
      questions: [
        {
          statement: 'De l\'eau s\'écoule dans une conduite dont la section passe de $S_1 = 10$ cm² (vitesse $v_1 = 2$ m/s) à $S_2 = 4$ cm². D\'après l\'équation de continuité, calculer la vitesse $v_2$ dans la section étroite (en m/s).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.2,
          unit: 'm/s',
          points: 2,
          correction: '$S_1 v_1 = S_2 v_2$ → $v_2 = v_1 \\times \\dfrac{S_1}{S_2} = 2 \\times \\dfrac{10}{4} = 5$ m/s.'
        },
        {
          statement: 'Pour un fluide parfait incompressible en écoulement permanent le long d\'une ligne de courant horizontale ($z$ constante), le théorème de Bernoulli s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$P_1 + \\rho v_1 = P_2 + \\rho v_2$',
            '$P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$',
            '$P_1 - \\rho v_1^2 = P_2 - \\rho v_2^2$',
            '$P_1 \\times S_1 = P_2 \\times S_2$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le théorème de Bernoulli complet est $P + \\dfrac{1}{2}\\rho v^2 + \\rho g z = \\text{constante}$. Pour une conduite horizontale, les termes $\\rho g z$ sont égaux des deux côtés et s\'annulent, ce qui donne $P_1 + \\dfrac{1}{2}\\rho v_1^2 = P_2 + \\dfrac{1}{2}\\rho v_2^2$.'
        },
        {
          statement: 'Un fluide traverse une section $S = 15$ cm² à une vitesse $v = 3$ m/s. Calculer le débit volumique $Q_v$ (en L/s).',
          type: 'numeric',
          answer: 4.5,
          tolerance: 0.2,
          unit: 'L/s',
          points: 2,
          correction: '$Q_v = S \\times v = 0{,}0015 \\times 3 = 0{,}0045$ m³/s $= 4{,}5$ L/s (en multipliant par $1\\,000$ pour convertir des m³/s en L/s).'
        },
        {
          statement: 'Dans une conduite horizontale, un fluide de masse volumique $\\rho = 1\\,000$ kg/m³ voit sa vitesse passer de $v_1 = 2$ m/s à $v_2 = 6$ m/s. Calculer la différence de pression $P_1 - P_2$ (en Pa).',
          type: 'numeric',
          answer: 16000,
          tolerance: 300,
          unit: 'Pa',
          points: 3,
          correction: '$P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2) = 0{,}5 \\times 1\\,000 \\times (6^2 - 2^2) = 0{,}5 \\times 1\\,000 \\times 32 = 16\\,000$ Pa.'
        },
        {
          statement: 'Dans une conduite qui se rétrécit (effet Venturi), lorsque la vitesse du fluide augmente, sa pression :',
          type: 'multiple-choice',
          options: [
            'Augmente proportionnellement à la vitesse',
            'Diminue',
            'Reste strictement constante',
            'Devient négative'
          ],
          answer: 1,
          points: 1,
          correction: 'C\'est l\'effet Venturi, conséquence directe du théorème de Bernoulli : à altitude constante, une vitesse plus grande s\'accompagne toujours d\'une pression plus basse, jamais plus élevée.'
        }
      ]
    }
  });
