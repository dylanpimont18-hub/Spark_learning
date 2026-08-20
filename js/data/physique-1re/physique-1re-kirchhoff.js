/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-kirchhoff.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-kirchhoff',
    level: 2, subject: 'physique',
    icon: '🔌',
    title: 'Circuits électriques (lois de Kirchhoff)',
    subtitle: 'Loi des nœuds, loi des mailles, associations de résistances, puissance électrique',
    keywords: ['Kirchhoff', 'Loi des nœuds', 'Loi des mailles', 'Résistances', 'Puissance'],
    physics: 'Les lois de Kirchhoff permettent de dimensionner les circuits de distribution électrique domestique (tableau électrique, dérivations), de calculer la répartition du courant entre plusieurs appareils branchés en parallèle, et de vérifier qu\'une installation électrique respecte les limites de courant admissibles par chaque câble.',

    cours: {
      intro: 'Dans un circuit électrique comportant plusieurs branches, deux lois complètent la <strong>loi d\'Ohm</strong> ($U=RI$) pour analyser le comportement du courant et de la tension : les <strong>lois de Kirchhoff</strong>.<br/><br/>La <strong>loi des nœuds</strong> s\'applique en un <strong>nœud</strong> (point où se rejoignent au moins $3$ fils) : la somme des intensités des courants qui <strong>arrivent</strong> est égale à la somme des intensités qui <strong>repartent</strong>. Elle traduit la conservation de la charge électrique : aucun courant ne peut apparaître ni disparaître en un nœud.<br/><br/>La <strong>loi des mailles</strong> s\'applique le long d\'une <strong>maille</strong> (boucle fermée du circuit) : la somme algébrique des tensions, en respectant un sens de parcours choisi, est nulle. Combinées à la loi d\'Ohm et aux associations de résistances (série/parallèle), ces deux lois permettent d\'analyser entièrement n\'importe quel circuit, aussi complexe soit-il.',
      definitions: [
        { term: 'Nœud', def: 'Point d\'un circuit électrique où se rejoignent au moins $3$ fils (ou branches).' },
        { term: 'Loi des nœuds', def: 'En un nœud, la somme des intensités des courants qui arrivent est égale à la somme des intensités qui repartent : $\\sum I_{entrants} = \\sum I_{sortants}$.' },
        { term: 'Maille', def: 'Boucle fermée d\'un circuit électrique, ne passant pas deux fois par le même nœud.' },
        { term: 'Loi des mailles', def: 'Le long d\'une maille, parcourue dans un sens choisi arbitrairement, la somme algébrique des tensions est nulle : $\\sum U = 0$.' }
      ],
      method: {
        title: 'Analyser un circuit à plusieurs branches en 3 étapes',
        steps: [
          '<strong>Repérer les nœuds</strong> du circuit et identifier les branches en <strong>parallèle</strong> (même tension à leurs bornes) et en <strong>série</strong> (même courant).',
          '<strong>Appliquer la loi des nœuds</strong> pour relier le courant total aux courants de chaque branche : $I = I_1 + I_2 + \\dots$',
          '<strong>Appliquer la loi d\'Ohm</strong> (et, si besoin, la loi des mailles) dans chaque branche pour calculer les grandeurs demandées, en n\'oubliant jamais que le courant qui entre dans un composant est rigoureusement égal à celui qui en ressort.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Loi des nœuds (circuit à deux branches en parallèle)',
        title: 'Répartition du courant I en I₁ et I₂ à un nœud',
        description: 'Le courant total $I$, issu du générateur, atteint le nœud $A$ où il se répartit entre deux branches parallèles ($I_1$ à travers $R_1$, $I_2$ à travers $R_2$), avant de se recombiner au nœud $B$ : $I = I_1 + I_2$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="kirchhoff-title kirchhoff-desc">
            <title id="kirchhoff-title">Circuit a deux branches en parallele illustrant la loi des noeuds</title>
            <desc id="kirchhoff-desc">Un circuit rectangulaire ferme comporte un generateur sur le cote gauche. Le courant total I circule sur le rail superieur jusqu'a un noeud A, marque par un point, ou il se divise en deux branches paralleles : une branche centrale contenant la resistance R1 parcourue par le courant I1, et une branche sur le cote droit contenant la resistance R2 parcourue par le courant I2. Les deux branches rejoignent le rail inferieur en un noeud B, marque par un point, ou les courants se recombinent avant de retourner au generateur.</desc>

            <defs>
              <marker id="arrow-phy1re-kirchhoff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- rail superieur -->
            <line class="frame-line" x1="100" y1="90" x2="450" y2="90"></line>
            <!-- rail inferieur -->
            <line class="frame-line" x1="100" y1="230" x2="450" y2="230"></line>

            <!-- generateur (cote gauche) -->
            <line class="frame-line" x1="100" y1="90" x2="100" y2="145"></line>
            <line class="frame-line" x1="80" y1="145" x2="120" y2="145"></line>
            <line class="curve-main" x1="88" y1="165" x2="112" y2="165"></line>
            <line class="frame-line" x1="100" y1="165" x2="100" y2="230"></line>
            <text class="annotation-label" x="66" y="158" text-anchor="end">U</text>

            <!-- branche R1 (milieu) -->
            <line class="frame-line" x1="275" y1="90" x2="275" y2="140"></line>
            <rect class="frame-line" x="265" y="140" width="20" height="40" fill="none"></rect>
            <line class="frame-line" x1="275" y1="180" x2="275" y2="230"></line>
            <text class="tick-label" x="296" y="164" text-anchor="start">R₁</text>

            <!-- branche R2 (droite) -->
            <line class="frame-line" x1="450" y1="90" x2="450" y2="140"></line>
            <rect class="frame-line" x="440" y="140" width="20" height="40" fill="none"></rect>
            <line class="frame-line" x1="450" y1="180" x2="450" y2="230"></line>
            <text class="tick-label" x="471" y="164" text-anchor="start">R₂</text>

            <!-- noeuds A et B -->
            <circle class="plot-point" cx="275" cy="90" r="5"></circle>
            <text class="label-soft" x="275" y="76" text-anchor="middle">A</text>
            <circle class="plot-point" cx="275" cy="230" r="5"></circle>
            <text class="label-soft" x="275" y="252" text-anchor="middle">B</text>

            <!-- fleches de courant -->
            <line class="curve-main" x1="150" y1="90" x2="175" y2="90" marker-end="url(#arrow-phy1re-kirchhoff)"></line>
            <text class="annotation-label" x="162" y="78" text-anchor="middle">I</text>

            <line class="curve-main" x1="275" y1="100" x2="275" y2="120" marker-end="url(#arrow-phy1re-kirchhoff)"></line>
            <text class="annotation-label" x="255" y="112" text-anchor="end">I₁</text>

            <line class="curve-main" x1="350" y1="90" x2="375" y2="90" marker-end="url(#arrow-phy1re-kirchhoff)"></line>
            <text class="annotation-label" x="362" y="78" text-anchor="middle">I₂</text>
          </svg>
        `,
        notes: [
          'Au nœud $A$, le courant $I$ qui arrive se <strong>répartit</strong> entre les deux branches : $I = I_1 + I_2$ (loi des nœuds).',
          'Les deux branches étant en <strong>parallèle</strong>, elles ont la même tension à leurs bornes (celle du générateur), mais des courants $I_1$ et $I_2$ différents si $R_1 \\neq R_2$.',
          'Au nœud $B$, les courants $I_1$ et $I_2$ se <strong>recombinent</strong> pour redonner le courant total $I$, qui repart vers le générateur : la loi des nœuds s\'applique de la même façon à ce second nœud.'
        ],
        reading: 'Suis le courant $I$ depuis le générateur jusqu\'au nœud $A$, où il se divise en $I_1$ (à travers $R_1$) et $I_2$ (à travers $R_2$) ; ces deux courants se recombinent au nœud $B$ avant de revenir au générateur.',
        caption: 'Circuit à deux résistances en parallèle : la loi des nœuds donne $I=I_1+I_2$ au nœud $A$ comme au nœud $B$.'
      },
      example: {
        statement: 'Dans un circuit comportant deux résistances $R_1=100$ Ω et $R_2=150$ Ω placées en parallèle, alimentées sous une tension $U=12$ V, le courant total débité par le générateur vaut $I$.<br/><br/>Calculer les courants $I_1$ et $I_2$ dans chaque branche, puis vérifier la loi des nœuds en calculant $I$.',
        steps: [
          'Les deux résistances étant en parallèle, elles ont la <strong>même tension</strong> $U=12$ V à leurs bornes.',
          'Loi d\'Ohm dans chaque branche : $I_1=\\dfrac{U}{R_1}=\\dfrac{12}{100}=0{,}12$ A et $I_2=\\dfrac{U}{R_2}=\\dfrac{12}{150}=0{,}08$ A.',
          'Loi des nœuds : $I=I_1+I_2=0{,}12+0{,}08=0{,}20$ A.'
        ],
        answer: '$I_1=0{,}12$ A, $I_2=0{,}08$ A, et $I=0{,}20$ A (loi des nœuds). Le courant total débité par le générateur se répartit entre les deux branches, proportionnellement à l\'inverse de leur résistance : la branche de plus faible résistance ($R_1$) reçoit le courant le plus important.'
      },
      formulas: [
        'Loi des nœuds : $\\sum I_{entrants} = \\sum I_{sortants}$',
        'Loi des mailles : $\\sum U = 0$ (le long d\'une maille, sens de parcours choisi)',
        'Résistances en parallèle (même tension) : $I=I_1+I_2+\\dots$, avec $I_k=\\dfrac{U}{R_k}$',
        'Puissance électrique : $P=UI=RI^2=\\dfrac{U^2}{R}$'
      ],
      recap: [
        'La loi des nœuds traduit la <strong>conservation de la charge électrique</strong> : rien ne peut s\'accumuler ni disparaître en un nœud.',
        'Deux résistances en <strong>parallèle</strong> ont la même tension à leurs bornes, mais des courants différents (sauf si $R_1=R_2$).',
        'Le courant total se répartit entre les branches en parallèle : la branche de <strong>plus faible résistance</strong> reçoit le courant le plus élevé.',
        'La loi des mailles et la loi des nœuds, combinées à la loi d\'Ohm, permettent d\'analyser n\'importe quel circuit, aussi complexe soit-il.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'une partie du courant est « consommée » en traversant une résistance, comme si l\'intensité diminuait après le composant. Attention : le courant qui entre dans une résistance est rigoureusement <strong>égal</strong> à celui qui en ressort, la charge électrique se conservant toujours — c\'est l\'énergie qui est dissipée dans la résistance, jamais le courant lui-même.'
    },

    quiz: [
      {
        q: 'En un nœud d\'un circuit où arrivent deux courants $I_1=0{,}3$ A et $I_2=0{,}5$ A, et d\'où repart un seul courant $I_3$, que vaut $I_3$ ?',
        options: [
          '0,8 A',
          '0,2 A',
          '0,15 A',
          '1,6 A'
        ],
        answer: 0,
        correction: 'Loi des nœuds : la somme des courants entrants égale la somme des courants sortants, donc $I_3=I_1+I_2=0{,}3+0{,}5=0{,}8$ A.'
      },
      {
        q: 'Deux résistances sont placées en parallèle sous une même tension $U$. Que peut-on affirmer ?',
        options: [
          'Elles ont la même tension à leurs bornes, mais pas nécessairement le même courant',
          'Elles ont le même courant, mais pas nécessairement la même tension',
          'Elles ont toujours le même courant ET la même tension',
          'Aucune loi ne les relie'
        ],
        answer: 0,
        correction: 'Par définition d\'un montage en parallèle, les deux résistances ont la même tension à leurs bornes ; leurs courants respectifs, donnés par la loi d\'Ohm $I_k=U/R_k$, ne sont égaux que si $R_1=R_2$.'
      },
      {
        q: 'Un courant traverse une résistance $R$. D\'après la loi des nœuds appliquée aux deux bornes de cette résistance, le courant qui en sort est :',
        options: [
          'Rigoureusement égal à celui qui y entre',
          'Toujours plus faible, car une partie est consommée',
          'Toujours plus fort',
          'Nul si $R$ est grande'
        ],
        answer: 0,
        correction: 'La loi des nœuds impose l\'égalité stricte entre courant entrant et courant sortant d\'un composant : le courant n\'est jamais « consommé », seule l\'énergie l\'est.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['noeud', 'parallele']);

        if (typeExo === 'noeud') {
          var I1 = randFloat(0.1, 2, 2);
          var I2 = randFloat(0.1, 2, 2);
          var I3 = parseFloat((I1 + I2).toFixed(2));
          var contexte = pick([
            'un tableau électrique domestique',
            'un boîtier de dérivation',
            'un circuit de distribution basse tension',
            'un montage électrotechnique de laboratoire'
          ]);
          return {
            statement: 'Dans ' + contexte + ', deux courants $I_1=' + fr(I1, 2) + '$ A et $I_2=' + fr(I2, 2) + '$ A arrivent en un nœud, d\'où repart un unique courant $I_3$.<br/><br/>Calcule $I_3$ (en A, arrondi au centième) grâce à la loi des nœuds.',
            answer: I3,
            tolerance: parseFloat(Math.max(0.02, I3 * 0.03).toFixed(2)),
            unit: 'A',
            hint: 'Loi des nœuds : la somme des courants entrants égale la somme des courants sortants.',
            solution: [
              'Loi des nœuds : $I_3 = I_1 + I_2$.',
              'Application numérique : $I_3 = ' + fr(I1, 2) + ' + ' + fr(I2, 2) + '$.',
              'Résultat : $I_3 = ' + fr(I3, 2) + '$ A.'
            ]
          };
        } else {
          var valeurs = [50, 100, 150, 200, 220, 330, 470];
          var R1 = pick(valeurs);
          var R2 = pick(valeurs);
          var U = pick([5, 6, 9, 12, 15, 24]);
          var I1v = U / R1;
          var I2v = U / R2;
          var Itot = parseFloat((I1v + I2v).toFixed(3));
          var contexte2 = pick([
            'un circuit de test en laboratoire',
            'une installation d\'éclairage à deux lampes en parallèle',
            'un banc d\'essai électrotechnique',
            'un module de charge résistive'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', deux résistances $R_1=' + R1 + '$ Ω et $R_2=' + R2 + '$ Ω sont placées en parallèle sous une tension $U=' + U + '$ V.<br/><br/>Calcule le courant total $I$ débité par le générateur (en A, arrondi au millième), en appliquant la loi d\'Ohm dans chaque branche puis la loi des nœuds.',
            answer: Itot,
            tolerance: parseFloat(Math.max(0.002, Itot * 0.04).toFixed(3)),
            unit: 'A',
            hint: 'Calcule $I_1=U/R_1$ et $I_2=U/R_2$, puis applique la loi des nœuds $I=I_1+I_2$.',
            solution: [
              'Loi d\'Ohm dans chaque branche : $I_1=\\dfrac{U}{R_1}=\\dfrac{' + U + '}{' + R1 + '}$ et $I_2=\\dfrac{U}{R_2}=\\dfrac{' + U + '}{' + R2 + '}$.',
              'Valeurs : $I_1 \\approx ' + fr(parseFloat(I1v.toFixed(3)), 3) + '$ A et $I_2 \\approx ' + fr(parseFloat(I2v.toFixed(3)), 3) + '$ A.',
              'Loi des nœuds : $I=I_1+I_2 \\approx ' + fr(Itot, 3) + '$ A.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un générateur alimente trois résistances en parallèle : $R_1=100$ Ω, $R_2=200$ Ω et $R_3=400$ Ω, sous une tension commune $U=20$ V.',
      tasks: [
        'Calculer les courants $I_1$, $I_2$ et $I_3$ dans chaque branche.',
        'En déduire, par la loi des nœuds, le courant total $I$ débité par le générateur.',
        'Calculer la puissance totale $P$ fournie par le générateur, et vérifier qu\'elle est égale à la somme des puissances dissipées dans chaque résistance.'
      ],
      solutions: [
        '$I_1=\\dfrac{U}{R_1}=\\dfrac{20}{100}=0{,}2$ A ; $I_2=\\dfrac{U}{R_2}=\\dfrac{20}{200}=0{,}1$ A ; $I_3=\\dfrac{U}{R_3}=\\dfrac{20}{400}=0{,}05$ A.',
        'Loi des nœuds : $I=I_1+I_2+I_3=0{,}2+0{,}1+0{,}05=0{,}35$ A.',
        '$P=U\\times I=20\\times0{,}35=7$ W. Puissances individuelles : $P_1=UI_1=4$ W, $P_2=UI_2=2$ W, $P_3=UI_3=1$ W. Somme : $4+2+1=7$ W $=P$ : la puissance totale fournie par le générateur est bien intégralement dissipée dans les trois résistances.'
      ],
      finalAnswer: '$I_1=0{,}2$ A, $I_2=0{,}1$ A, $I_3=0{,}05$ A, $I=0{,}35$ A, $P=7$ W (égale à la somme des puissances individuelles). Ce résultat illustre que la loi des nœuds pour les courants a son équivalent énergétique : la puissance totale fournie se répartit intégralement entre les branches, sans perte ni gain.'
    },

    evaluation: {
      title: 'Évaluation — Circuits électriques (lois de Kirchhoff)',
      duration: '30 min',
      questions: [
        {
          statement: 'En un nœud, deux courants $I_1=0{,}45$ A et $I_2=0{,}25$ A arrivent, et un seul courant $I_3$ repart. Calculer $I_3$ (en A).',
          type: 'numeric',
          answer: 0.7,
          tolerance: 0.02,
          unit: 'A',
          points: 2,
          correction: '$I_3=I_1+I_2=0{,}45+0{,}25=0{,}7$ A (loi des nœuds).'
        },
        {
          statement: 'La loi des nœuds traduit physiquement :',
          type: 'multiple-choice',
          options: [
            'La conservation de la charge électrique',
            'La conservation de l\'énergie',
            'La loi d\'Ohm',
            'La présence obligatoire d\'un générateur'
          ],
          answer: 0,
          points: 2,
          correction: 'La loi des nœuds exprime que la charge électrique ne peut ni s\'accumuler ni disparaître en un point du circuit : c\'est une conséquence directe de la conservation de la charge.'
        },
        {
          statement: 'Deux résistances $R_1=60$ Ω et $R_2=120$ Ω sont en parallèle sous $U=6$ V. Calculer le courant $I_1$ dans la branche contenant $R_1$ (en A, arrondi au centième).',
          type: 'numeric',
          answer: 0.1,
          tolerance: 0.01,
          unit: 'A',
          points: 2,
          correction: '$I_1=\\dfrac{U}{R_1}=\\dfrac{6}{60}=0{,}1$ A.'
        },
        {
          statement: 'Un courant $I=2$ A entre dans une résistance $R$. Quel courant en ressort ?',
          type: 'multiple-choice',
          options: [
            '2 A, exactement le même',
            'Moins de 2 A, car une partie est consommée par la résistance',
            'Plus de 2 A',
            '0 A, tout le courant est transformé en chaleur'
          ],
          answer: 0,
          points: 2,
          correction: 'Le courant qui traverse une résistance ne change pas : $2$ A entrent, $2$ A ressortent. Seule l\'énergie électrique est dissipée sous forme de chaleur, jamais le courant lui-même.'
        },
        {
          statement: 'Deux résistances $R_1=200$ Ω et $R_2=400$ Ω sont en parallèle sous $U=8$ V. Calculer le courant total $I$ débité par le générateur (en A, arrondi au centième).',
          type: 'numeric',
          answer: 0.06,
          tolerance: 0.005,
          unit: 'A',
          points: 2,
          correction: '$I_1=\\dfrac{8}{200}=0{,}04$ A, $I_2=\\dfrac{8}{400}=0{,}02$ A. Loi des nœuds : $I=I_1+I_2=0{,}06$ A.'
        }
      ]
    }
  });
