/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-kirchhoff.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-kirchhoff',
    level: 2, subject: 'physique',
    icon: '⚡',
    title: 'Circuits électriques : lois de Kirchhoff',
    subtitle: 'Loi des nœuds, loi des mailles, résolution d\'un circuit à plusieurs branches',
    keywords: ['Kirchhoff', 'Loi des nœuds', 'Loi des mailles', 'Circuit électrique'],
    physics: 'Les lois de Kirchhoff sont l\'outil de base pour analyser tout circuit électrique un peu complexe : dimensionnement d\'une installation domestique ou industrielle, diagnostic de panne sur un tableau électrique, conception de circuits électroniques. Elles traduisent deux principes physiques universels : la conservation de la charge électrique et la conservation de l\'énergie.',

    cours: {
      intro: 'Dans un circuit électrique comportant plusieurs branches, deux lois permettent de déterminer entièrement les intensités et les tensions : les <strong>lois de Kirchhoff</strong>.<br/><br/>Un <strong>nœud</strong> est un point du circuit où se rejoignent au moins trois fils. Une <strong>branche</strong> est une portion de circuit entre deux nœuds consécutifs. Une <strong>maille</strong> est un parcours fermé du circuit, obtenu en suivant des branches sans repasser deux fois par le même nœud.<br/><br/>La <strong>loi des nœuds</strong> traduit la conservation de la charge électrique : en régime permanent, la somme des intensités qui entrent dans un nœud est égale à la somme des intensités qui en sortent. La <strong>loi des mailles</strong> traduit la conservation de l\'énergie : le long d\'une maille parcourue dans un sens donné, la somme algébrique des tensions rencontrées est nulle.',
      definitions: [
        { term: 'Nœud', def: 'Point d\'un circuit où se rejoignent au moins trois fils (donc au moins trois branches).' },
        { term: 'Branche', def: 'Portion de circuit reliant deux nœuds consécutifs, parcourue par un courant unique.' },
        { term: 'Maille', def: 'Parcours fermé du circuit, formé de plusieurs branches, ne repassant jamais deux fois par le même nœud.' },
        { term: 'Loi des nœuds', def: 'En un nœud, la somme des intensités <strong>entrantes</strong> est égale à la somme des intensités <strong>sortantes</strong>. Elle ne concerne que les <strong>courants</strong>.' },
        { term: 'Loi des mailles', def: 'Le long d\'une maille parcourue dans un sens choisi, la somme algébrique des <strong>tensions</strong> rencontrées est nulle (une tension comptée positivement si elle est parcourue dans le sens de la flèche tension, négativement sinon).' }
      ],
      method: {
        title: 'Résoudre un circuit à plusieurs branches en 3 étapes',
        steps: [
          '<strong>Repérer</strong> les nœuds et les mailles du circuit, puis <strong>orienter arbitrairement</strong> chaque intensité inconnue par une flèche (le calcul donnera une valeur négative si le sens réel est opposé).',
          '<strong>Appliquer la loi des nœuds</strong> à chaque nœud utile, ce qui donne une ou plusieurs relations entre les intensités.',
          '<strong>Appliquer la loi des mailles</strong> à chaque maille indépendante du circuit (en s\'aidant si besoin de la loi d\'Ohm $U = R I$ sur chaque résistance), puis résoudre le système d\'équations obtenu.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Circuit à deux branches en parallèle',
        title: 'Loi des nœuds et loi des mailles sur un circuit à deux branches',
        description: 'Un générateur de tension $U$ alimente deux résistances $R_1$ et $R_2$ placées en parallèle. Au nœud $A$, le courant total $I$ se répartit en $I_1$ (vers $R_1$) et $I_2$ (vers $R_2$) : c\'est la loi des nœuds. Chacune des deux boucles fermées (mailles) permet d\'écrire une relation entre tensions.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="kirchhoff1re-title kirchhoff1re-desc">
            <title id="kirchhoff1re-title">Circuit a deux branches en parallele avec generateur, deux resistances, un noeud et deux mailles</title>
            <desc id="kirchhoff1re-desc">Un circuit ferme comporte un generateur de tension U sur la branche de gauche. Un fil superieur part du generateur, traverse un noeud A, puis continue jusqu'a une deuxieme derivation. Au niveau du noeud A, une branche verticale contenant la resistance R1 rejoint le fil inferieur qui revient au generateur. Plus a droite, une seconde branche verticale contenant la resistance R2 rejoint egalement ce fil inferieur. Le courant total I circule depuis le generateur jusqu'au noeud A, ou il se divise en un courant I1 traversant R1 et un courant I2 poursuivant vers R2. Deux rectangles en pointilles delimitent deux mailles independantes du circuit : la maille 1 entre le generateur et R1, la maille 2 entre R1 et R2.</desc>

            <defs>
              <marker id="arrow-phys1re-kirch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- fils du circuit -->
            <line class="frame-line" x1="60" y1="80" x2="200" y2="80"></line>
            <line class="frame-line" x1="200" y1="80" x2="380" y2="80"></line>
            <line class="frame-line" x1="60" y1="140" x2="60" y2="80"></line>
            <line class="frame-line" x1="60" y1="220" x2="60" y2="160"></line>
            <line class="frame-line" x1="200" y1="80" x2="200" y2="110"></line>
            <line class="frame-line" x1="200" y1="190" x2="200" y2="220"></line>
            <line class="frame-line" x1="380" y1="80" x2="380" y2="110"></line>
            <line class="frame-line" x1="380" y1="190" x2="380" y2="220"></line>
            <line class="frame-line" x1="60" y1="220" x2="380" y2="220"></line>

            <!-- symbole du generateur -->
            <line class="frame-line" x1="40" y1="140" x2="80" y2="140"></line>
            <line class="curve-main" x1="48" y1="160" x2="72" y2="160"></line>
            <text class="annotation-label" x="30" y="154" text-anchor="end">U</text>

            <!-- resistances -->
            <rect class="frame-line" x="190" y="110" width="20" height="80" fill="none"></rect>
            <rect class="frame-line" x="370" y="110" width="20" height="80" fill="none"></rect>
            <text class="tick-label" x="175" y="155" text-anchor="end">R₁</text>
            <text class="tick-label" x="405" y="155" text-anchor="start">R₂</text>

            <!-- noeud A -->
            <circle class="plot-point" cx="200" cy="80" r="4.5"></circle>
            <text class="tick-label" x="200" y="60" text-anchor="middle">Nœud A</text>

            <!-- courants -->
            <line class="curve-main" x1="95" y1="80" x2="170" y2="80" marker-end="url(#arrow-phys1re-kirch)"></line>
            <text class="annotation-label" x="132" y="68" text-anchor="middle">I</text>
            <line class="curve-main" x1="200" y1="92" x2="200" y2="106" marker-end="url(#arrow-phys1re-kirch)"></line>
            <text class="tick-label" x="216" y="102" text-anchor="start">I₁</text>
            <line class="curve-main" x1="215" y1="80" x2="355" y2="80" marker-end="url(#arrow-phys1re-kirch)"></line>
            <text class="annotation-label" x="290" y="68" text-anchor="middle">I₂</text>

            <!-- mailles (pointilles) -->
            <rect class="guide-line" x="90" y="95" width="90" height="110" fill="none"></rect>
            <text class="label-soft" x="135" y="88" text-anchor="middle">Maille 1</text>
            <rect class="guide-line" x="220" y="95" width="140" height="110" fill="none"></rect>
            <text class="label-soft" x="290" y="88" text-anchor="middle">Maille 2</text>

            <text class="label-soft" x="230" y="256" text-anchor="middle">Loi des nœuds au nœud A : I = I₁ + I₂</text>
          </svg>
        `,
        notes: [
          'Au <strong>nœud A</strong>, le courant $I$ venu du générateur se divise en $I_1$ (vers $R_1$) et $I_2$ (vers $R_2$) : la loi des nœuds donne $I = I_1 + I_2$.',
          'La <strong>maille 1</strong> (générateur + $R_1$) donne, par la loi des mailles, $U = R_1 I_1$ ; la <strong>maille 2</strong> ($R_1$ + $R_2$, toutes deux soumises à la même tension $U$) donne $R_1 I_1 = R_2 I_2$.',
          'Ces deux mailles ne sont pas indépendantes du hasard : avec $3$ branches, un circuit compte toujours $2$ mailles indépendantes, exactement comme il compte $1$ relation de nœuds utile.'
        ],
        reading: 'Repère le nœud A où le fil se divise, suis le courant $I$ qui arrive puis les deux courants $I_1$ et $I_2$ qui repartent vers chaque résistance, et repère les deux boucles en pointillés qui définissent les deux mailles.',
        caption: 'Circuit à deux branches en parallèle : la loi des nœuds relie $I$, $I_1$ et $I_2$ au nœud A, la loi des mailles relie les tensions le long de chacune des deux boucles fermées.'
      },
      example: {
        statement: 'Un générateur de tension $U = 12$ V alimente deux résistances $R_1 = 60$ Ω et $R_2 = 30$ Ω, placées en parallèle (comme sur le schéma ci-dessus).<br/><br/>Calculer les intensités $I_1$, $I_2$, puis l\'intensité totale $I$ délivrée par le générateur, en utilisant les lois de Kirchhoff.',
        steps: [
          'Loi des mailles sur la maille 1 (générateur + $R_1$) : $U = R_1 I_1$, donc $I_1 = \\dfrac{U}{R_1} = \\dfrac{12}{60} = 0{,}2$ A.',
          'Loi des mailles sur la maille 2 (générateur + $R_2$, car $R_2$ est elle aussi directement soumise à la tension $U$) : $U = R_2 I_2$, donc $I_2 = \\dfrac{U}{R_2} = \\dfrac{12}{30} = 0{,}4$ A.',
          'Loi des nœuds au nœud A : $I = I_1 + I_2 = 0{,}2 + 0{,}4 = 0{,}6$ A.'
        ],
        answer: '$I_1 = 0{,}2$ A, $I_2 = 0{,}4$ A et $I = 0{,}6$ A. On retrouve bien que $I_2 > I_1$ : le courant se répartit davantage dans la résistance la plus faible ($R_2 < R_1$), qui offre moins d\'opposition au passage du courant.'
      },
      formulas: [
        'Loi des nœuds : $\\sum I_{entrants} = \\sum I_{sortants}$',
        'Loi des mailles : $\\sum U_{maille} = 0$ (somme algébrique sur une boucle fermée)',
        'Loi d\'Ohm (rappel) : $U = R \\times I$',
        'Puissance électrique reçue par un récepteur : $P = U \\times I$'
      ],
      recap: [
        'La <strong>loi des nœuds</strong> ne concerne que les <strong>intensités</strong> : la somme des courants entrants dans un nœud égale la somme des courants sortants.',
        'La <strong>loi des mailles</strong> ne concerne que les <strong>tensions</strong> : leur somme algébrique le long d\'une boucle fermée est nulle.',
        'Deux résistances directement reliées aux deux mêmes nœuds (en parallèle) sont soumises à la <strong>même tension</strong>, ce qui permet d\'appliquer la loi des mailles séparément à chaque branche.',
        'Avant tout calcul, il faut <strong>orienter arbitrairement</strong> chaque intensité inconnue par une flèche : un résultat négatif signalera simplement que le sens réel est opposé à celui choisi.'
      ],
      piege: 'Une confusion fréquente consiste à appliquer la loi des nœuds à des tensions, ou la loi des mailles à des courants. Attention, la loi des nœuds ne porte <strong>que</strong> sur les intensités (conservation du courant en un point), tandis que la loi des mailles ne porte <strong>que</strong> sur les tensions (somme algébrique nulle le long d\'une boucle) : ces deux lois ne s\'appliquent jamais à la même grandeur physique.'
    },

    quiz: [
      {
        q: 'La loi des nœuds d\'un circuit électrique s\'applique :',
        options: [
          'Aux tensions uniquement',
          'Aux intensités uniquement',
          'Aux tensions et aux intensités indifféremment',
          'Uniquement aux résistances'
        ],
        answer: 1,
        correction: 'La loi des nœuds traduit la conservation de la charge électrique : elle ne concerne que les <strong>intensités</strong> (somme des courants entrants = somme des courants sortants en un nœud).'
      },
      {
        q: 'Au nœud A d\'un circuit, un courant $I_1 = 0{,}3$ A et un courant $I_2 = 0{,}5$ A entrent, tandis qu\'un seul courant $I_3$ en sort. Quelle est la valeur de $I_3$ ?',
        options: [
          '$I_3 = 0{,}2$ A',
          '$I_3 = 0{,}8$ A',
          '$I_3 = 0{,}15$ A',
          '$I_3 = 1{,}6$ A'
        ],
        answer: 1,
        correction: 'D\'après la loi des nœuds, la somme des courants entrants égale la somme des courants sortants : $I_3 = I_1 + I_2 = 0{,}3 + 0{,}5 = 0{,}8$ A.'
      },
      {
        q: 'Deux résistances $R_1$ et $R_2$ sont placées en parallèle, directement reliées aux deux mêmes nœuds d\'un circuit. Que peut-on affirmer, d\'après la loi des mailles ?',
        options: [
          'Elles sont parcourues par le même courant',
          'Elles sont soumises à la même tension',
          'Elles dissipent la même puissance',
          'On ne peut rien affirmer sans connaître leurs valeurs'
        ],
        answer: 1,
        correction: 'Deux branches reliées aux deux mêmes nœuds forment chacune une maille avec le reste du circuit : la loi des mailles montre qu\'elles sont soumises à la <strong>même tension</strong>, même si elles ne sont pas parcourues par le même courant.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['noeuds', 'mailles']);

        if (typeExo === 'noeuds') {
          var I1 = randFloat(0.1, 2, 2);
          var I2 = randFloat(0.1, 2, 2);
          var I3 = parseFloat((I1 + I2).toFixed(2));
          var contexte = pick([
            'un tableau de répartition électrique domestique',
            'un boîtier de dérivation industriel',
            'un nœud d\'un circuit imprimé',
            'un poste de distribution basse tension'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un nœud du circuit voit arriver deux courants $I_1 = ' + fr(I1, 2) + '$ A et $I_2 = ' + fr(I2, 2) + '$ A, et un seul courant $I_3$ en repart.<br/><br/>D\'après la loi des nœuds, calcule l\'intensité $I_3$ (en A, arrondie au centième).',
            answer: I3,
            tolerance: 0.02,
            unit: 'A',
            hint: 'La loi des nœuds donne : somme des courants entrants = somme des courants sortants, donc $I_3 = I_1 + I_2$.',
            solution: [
              'Loi des nœuds : $I_3 = I_1 + I_2 = ' + fr(I1, 2) + ' + ' + fr(I2, 2) + '$.',
              'Résultat : $I_3 = ' + fr(I3, 2) + '$ A.'
            ]
          };
        } else {
          var U = pick([5, 6, 9, 12, 15, 24]);
          var U1 = randFloat(1, U - 1, 1);
          var U2 = parseFloat((U - U1).toFixed(1));
          var contexte2 = pick([
            'une maille d\'un circuit de commande',
            'une boucle d\'un circuit électronique de contrôle',
            'une maille étudiée en travaux pratiques d\'électricité',
            'un circuit d\'alimentation basse tension'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte2 + ', une maille comporte un générateur de tension $U = ' + U + '$ V et deux récepteurs en série, aux bornes desquels on mesure les tensions $U_1 = ' + fr(U1, 1) + '$ V et $U_2$ (inconnue).<br/><br/>D\'après la loi des mailles, calcule la tension $U_2$ (en V, arrondie au dixième).',
            answer: U2,
            tolerance: 0.1,
            unit: 'V',
            hint: 'La loi des mailles donne, pour cette maille : $U = U_1 + U_2$, donc $U_2 = U - U_1$.',
            solution: [
              'Loi des mailles : $U = U_1 + U_2$, donc $U_2 = U - U_1 = ' + U + ' - ' + fr(U1, 1) + '$.',
              'Résultat : $U_2 = ' + fr(U2, 1) + '$ V.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un générateur de tension $U = 18$ V alimente deux résistances $R_1 = 90$ Ω et $R_2 = 45$ Ω, placées en parallèle (même schéma que dans le cours).',
      tasks: [
        'Calculer l\'intensité $I_1$ traversant $R_1$, puis l\'intensité $I_2$ traversant $R_2$, en appliquant la loi des mailles à chaque branche.',
        'En déduire, par la loi des nœuds, l\'intensité totale $I$ délivrée par le générateur.',
        'Calculer la puissance $P_{gen} = U \\times I$ délivrée par le générateur, ainsi que les puissances $P_1$ et $P_2$ reçues par $R_1$ et $R_2$, et vérifier que $P_{gen} = P_1 + P_2$.'
      ],
      solutions: [
        'Maille générateur + $R_1$ : $U = R_1 I_1$, donc $I_1 = \\dfrac{U}{R_1} = \\dfrac{18}{90} = 0{,}2$ A. Maille générateur + $R_2$ : $U = R_2 I_2$, donc $I_2 = \\dfrac{U}{R_2} = \\dfrac{18}{45} = 0{,}4$ A.',
        'Loi des nœuds : $I = I_1 + I_2 = 0{,}2 + 0{,}4 = 0{,}6$ A.',
        '$P_{gen} = U \\times I = 18 \\times 0{,}6 = 10{,}8$ W. $P_1 = U \\times I_1 = 18 \\times 0{,}2 = 3{,}6$ W et $P_2 = U \\times I_2 = 18 \\times 0{,}4 = 7{,}2$ W. Somme : $P_1 + P_2 = 3{,}6 + 7{,}2 = 10{,}8$ W $= P_{gen}$ : l\'égalité est bien vérifiée.'
      ],
      finalAnswer: '$I_1 = 0{,}2$ A, $I_2 = 0{,}4$ A, $I = 0{,}6$ A, et $P_{gen} = P_1 + P_2 = 10{,}8$ W. Cette égalité des puissances traduit la <strong>conservation de l\'énergie</strong> : toute la puissance fournie par le générateur est intégralement reçue par les deux résistances, sans perte ni création d\'énergie dans les fils supposés parfaits.'
    },

    evaluation: {
      title: 'Évaluation — Circuits électriques : lois de Kirchhoff',
      duration: '30 min',
      questions: [
        {
          statement: 'La loi des mailles d\'un circuit électrique s\'applique :',
          type: 'multiple-choice',
          options: [
            'Aux intensités uniquement',
            'Aux tensions uniquement',
            'Aux résistances uniquement',
            'Aux puissances uniquement'
          ],
          answer: 1,
          points: 2,
          correction: 'La loi des mailles traduit la conservation de l\'énergie le long d\'une boucle fermée : elle ne porte que sur les <strong>tensions</strong> (somme algébrique nulle).'
        },
        {
          statement: 'Au nœud d\'un circuit, deux courants entrants $I_1 = 0{,}4$ A et $I_2 = 0{,}9$ A alimentent un seul courant sortant $I_3$. Calculer $I_3$ (en A).',
          type: 'numeric',
          answer: 1.3,
          tolerance: 0.02,
          unit: 'A',
          points: 2,
          correction: 'Loi des nœuds : $I_3 = I_1 + I_2 = 0{,}4 + 0{,}9 = 1{,}3$ A.'
        },
        {
          statement: 'Une maille comporte un générateur $U = 20$ V et deux récepteurs en série de tensions $U_1 = 8$ V et $U_2$ (inconnue). Calculer $U_2$ (en V).',
          type: 'numeric',
          answer: 12,
          tolerance: 0.2,
          unit: 'V',
          points: 2,
          correction: 'Loi des mailles : $U = U_1 + U_2$, donc $U_2 = U - U_1 = 20 - 8 = 12$ V.'
        },
        {
          statement: 'Deux résistances $R_1$ et $R_2$ sont branchées en parallèle aux bornes d\'un générateur $U = 10$ V, avec $R_1 = 50$ Ω. Calculer l\'intensité $I_1$ traversant $R_1$ (en A).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'A',
          points: 2,
          correction: 'La maille générateur + $R_1$ donne $U = R_1 I_1$, donc $I_1 = \\dfrac{U}{R_1} = \\dfrac{10}{50} = 0{,}2$ A.'
        },
        {
          statement: 'Deux résistances directement reliées aux deux mêmes nœuds d\'un circuit (association en parallèle) sont nécessairement :',
          type: 'multiple-choice',
          options: [
            'Parcourues par le même courant',
            'Soumises à la même tension',
            'De même valeur de résistance',
            'Soumises à des tensions opposées'
          ],
          answer: 1,
          points: 2,
          correction: 'D\'après la loi des mailles, deux branches reliées aux deux mêmes nœuds sont soumises à la même tension, même si le courant qui les traverse peut être différent selon leur résistance.'
        }
      ]
    }
  });
