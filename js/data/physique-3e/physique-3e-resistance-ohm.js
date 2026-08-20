/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-resistance-ohm.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-resistance-ohm',
    level: 1, subject: 'physique',
    icon: '🔌',
    title: 'La résistance électrique et la loi d\'Ohm',
    subtitle: 'Résistor, loi d\'Ohm $U=RI$, caractéristique tension-courant, mesure de la résistance',
    keywords: ['Résistance', 'Loi d\'Ohm', 'Résistor', 'Caractéristique', 'Ohmmètre'],
    physics: 'La loi d\'Ohm permet de dimensionner une résistance de protection pour une diode, de calculer le courant traversant un appareil de chauffage, ou de comprendre le rôle d\'un rhéostat dans le réglage de l\'intensité lumineuse d\'une lampe ou de la vitesse d\'un petit moteur.',

    cours: {
      intro: 'Un <strong>résistor</strong> (couramment appelé « résistance ») est un composant électrique qui s\'oppose au passage du courant. Cette opposition, appelée <strong>résistance électrique</strong> $R$, se mesure en ohms (symbole Ω).<br/><br/>Pour un résistor, la tension $U$ à ses bornes et l\'intensité $I$ du courant qui le traverse sont <strong>proportionnelles</strong> : c\'est la <strong>loi d\'Ohm</strong>, $U = R \\times I$. Plus la résistance est grande, plus l\'intensité est faible pour une même tension appliquée.<br/><br/>Cette proportionnalité se lit directement sur la <strong>caractéristique tension-courant</strong> du résistor, c\'est-à-dire le graphique de $U$ en fonction de $I$ : c\'est une droite passant par l\'origine, dont le coefficient directeur (la pente) est justement la valeur de $R$.',
      definitions: [
        { term: 'Résistance électrique ($R$)', def: 'Grandeur qui caractérise l\'opposition d\'un résistor au passage du courant électrique, mesurée en ohms (Ω) à l\'aide d\'un ohmmètre. Elle dépend de la nature du matériau, de la longueur et de la section du conducteur.' },
        { term: 'Loi d\'Ohm', def: 'Pour un résistor, la tension à ses bornes est proportionnelle au courant qui le traverse : $U = R \\times I$, avec $R$ en ohms (Ω), $U$ en volts (V) et $I$ en ampères (A).' },
        { term: 'Caractéristique tension-courant', def: 'Représentation graphique de la tension $U$ aux bornes d\'un dipôle en fonction du courant $I$ qui le traverse. Pour un résistor, c\'est une <strong>droite passant par l\'origine</strong>, dont le coefficient directeur est égal à $R$.' },
        { term: 'Mesure en circuit', def: 'L\'<strong>ampèremètre</strong> se branche <strong>en série</strong> dans le circuit pour mesurer $I$ ; le <strong>voltmètre</strong> se branche <strong>en dérivation</strong> (en parallèle) aux bornes du composant pour mesurer $U$ ; l\'<strong>ohmmètre</strong> mesure directement $R$, mais uniquement hors tension, sur un composant isolé du circuit.' }
      ],
      method: {
        title: 'Exploiter la loi d\'Ohm en 3 étapes',
        steps: [
          '<strong>Identifier les grandeurs connues et l\'inconnue</strong> parmi $U$, $R$ et $I$ dans la situation étudiée.<br/>Exemple : un radiateur électrique de résistance $R=50$ Ω est branché sous une tension $U=230$ V ; on cherche l\'intensité $I$.',
          '<strong>Réécrire la loi d\'Ohm</strong> $U=R\\times I$ sous la forme adaptée à l\'inconnue recherchée : $I=\\dfrac{U}{R}$ pour trouver le courant, ou $R=\\dfrac{U}{I}$ pour trouver la résistance.<br/>Exemple (suite) : $I=\\dfrac{U}{R}=\\dfrac{230}{50}=4{,}6$ A.',
          '<strong>Vérifier la cohérence du résultat</strong> par une lecture graphique si une caractéristique $U=f(I)$ est disponible : le point $(I,U)$ calculé doit se trouver exactement sur la droite tracée.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Caractéristique d\'un résistor',
        title: 'Caractéristique tension-courant $U=f(I)$ et lecture graphique de la résistance',
        description: 'La caractéristique d\'un résistor est une droite passant par l\'origine : son coefficient directeur, lu à partir de deux points de mesure grâce au triangle $\\Delta U / \\Delta I$, donne directement la valeur de la résistance $R$.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="ohm-title ohm-desc">
            <title id="ohm-title">Caracteristique tension-courant d'un resistor</title>
            <desc id="ohm-desc">Un graphique represente la tension U en ordonnee en fonction de l'intensite I en abscisse. Une droite part de l'origine et monte regulierement, passant par deux points mesures. Un triangle rectangle pointille, construit entre ces deux points, met en evidence la variation de tension delta U et la variation de courant delta I, dont le rapport donne la resistance R.</desc>

            <defs>
              <marker id="arrow-phys3e-ohm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-phys3e-ohm)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="40" marker-end="url(#arrow-phys3e-ohm)"></line>
            <text class="tick-label" x="60" y="30" text-anchor="middle">U (V)</text>
            <text class="tick-label" x="518" y="278" text-anchor="end">I (A)</text>

            <!-- graduations -->
            <line class="grid-line" x1="260" y1="260" x2="260" y2="266"></line>
            <text class="tick-label" x="260" y="278" text-anchor="middle">0,1</text>
            <line class="grid-line" x1="460" y1="260" x2="460" y2="266"></line>
            <text class="tick-label" x="460" y="278" text-anchor="middle">0,2</text>
            <line class="grid-line" x1="54" y1="160" x2="60" y2="160"></line>
            <text class="tick-label" x="44" y="164" text-anchor="end">5</text>
            <line class="grid-line" x1="54" y1="60" x2="60" y2="60"></line>
            <text class="tick-label" x="44" y="64" text-anchor="end">10</text>

            <!-- droite caracteristique -->
            <line class="curve-main" x1="60" y1="260" x2="460" y2="60"></line>

            <!-- points de mesure -->
            <circle class="plot-point" cx="260" cy="160" r="5"></circle>
            <circle class="plot-point" cx="460" cy="60" r="5"></circle>

            <!-- triangle des pentes -->
            <line class="guide-line" x1="260" y1="160" x2="460" y2="160"></line>
            <line class="guide-line" x1="460" y1="160" x2="460" y2="60"></line>
            <text class="tick-label" x="360" y="178" text-anchor="middle">ΔI</text>
            <text class="tick-label" x="478" y="112" text-anchor="start">ΔU</text>

            <text class="annotation-label" x="330" y="110" text-anchor="middle">R = ΔU / ΔI</text>
          </svg>
        `,
        notes: [
          'Deux points de mesure sont relevés : $(I_1=0{,}1\\text{ A}, U_1=5\\text{ V})$ et $(I_2=0{,}2\\text{ A}, U_2=10\\text{ V})$, tous deux alignés avec l\'origine.',
          'Le triangle pointillé donne les variations $\\Delta I = 0{,}2-0{,}1=0{,}1$ A et $\\Delta U = 10-5=5$ V entre ces deux points.',
          'Le coefficient directeur de la droite est $R=\\dfrac{\\Delta U}{\\Delta I}=\\dfrac{5}{0{,}1}=50$ Ω : c\'est la valeur de la résistance de ce résistor.'
        ],
        reading: 'Repère les deux points mesurés sur la droite, puis lis le triangle pointillé : le rapport de la hauteur ($\\Delta U$) sur la base ($\\Delta I$) donne directement la résistance $R$.',
        caption: 'Caractéristique tension-courant d\'un résistor de $R=50$ Ω : une droite passant par l\'origine, dont le coefficient directeur $\\Delta U/\\Delta I$ est égal à la résistance.'
      },
      example: {
        statement: 'On relève expérimentalement deux points de la caractéristique tension-courant d\'un résistor : pour $I_1=0{,}1$ A, on mesure $U_1=5$ V ; pour $I_2=0{,}2$ A, on mesure $U_2=10$ V.<br/><br/>Vérifie que ces deux mesures sont cohérentes avec la loi d\'Ohm, puis détermine la valeur de la résistance $R$.',
        steps: [
          'Si le dipôle suit la loi d\'Ohm, le rapport $\\dfrac{U}{I}$ doit être le même pour les deux mesures.',
          'Première mesure : $\\dfrac{U_1}{I_1}=\\dfrac{5}{0{,}1}=50$ Ω.',
          'Deuxième mesure : $\\dfrac{U_2}{I_2}=\\dfrac{10}{0{,}2}=50$ Ω.',
          'Les deux rapports sont identiques : les mesures sont bien cohérentes avec la loi d\'Ohm, et $R=50$ Ω.'
        ],
        answer: 'La résistance de ce résistor est $R=50$ Ω. Sur la caractéristique $U=f(I)$, les deux points mesurés sont alignés sur une droite passant par l\'origine, de coefficient directeur $50$ — exactement ce que prévoit la loi d\'Ohm pour un résistor.'
      },
      formulas: [
        '$U = R \\times I$ (loi d\'Ohm)',
        '$R = \\dfrac{U}{I}$ (résistance à partir de $U$ et $I$)',
        '$I = \\dfrac{U}{R}$ (intensité à partir de $U$ et $R$)',
        'Coefficient directeur de la caractéristique $U=f(I)$ : $R = \\dfrac{\\Delta U}{\\Delta I}$',
        'Unités : $U$ en volts (V), $I$ en ampères (A), $R$ en ohms (Ω)'
      ],
      recap: [
        'La loi d\'Ohm $U=R\\times I$ relie la tension aux bornes d\'un résistor à l\'intensité qui le traverse.',
        'La caractéristique $U=f(I)$ d\'un résistor est une <strong>droite passant par l\'origine</strong> : c\'est la signature graphique de la proportionnalité entre $U$ et $I$.',
        'Le coefficient directeur de cette droite est directement la valeur de la résistance $R$, en ohms.',
        'L\'ampèremètre se branche en <strong>série</strong> (mesure $I$), le voltmètre en <strong>dérivation</strong> (mesure $U$) — ne jamais les intervertir.'
      ],
      piege: 'Une confusion fréquente est d\'intervertir la loi d\'Ohm, en écrivant $I=R\\times U$ au lieu de $U=R\\times I$, ou de brancher l\'ampèremètre en dérivation au lieu de en série. Attention : un ampèremètre branché en dérivation risque de créer un court-circuit et d\'endommager l\'appareil — il doit toujours être inséré directement dans le fil du circuit.'
    },

    quiz: [
      {
        q: 'Un résistor de $R=100$ Ω est parcouru par un courant $I=0{,}3$ A. Quelle est la tension $U$ à ses bornes ?',
        options: ['$U=30$ V', '$U=333$ V', '$U=100{,}3$ V', '$U=0{,}003$ V'],
        answer: 0,
        correction: 'Loi d\'Ohm : $U=R\\times I=100\\times0{,}3=30$ V.'
      },
      {
        q: 'La caractéristique tension-courant d\'un résistor est une droite passant par l\'origine. Que représente son coefficient directeur ?',
        options: ['La valeur de la résistance $R$', 'La valeur de l\'intensité maximale', 'La valeur de la tension maximale', 'La puissance du résistor'],
        answer: 0,
        correction: 'Le coefficient directeur d\'une droite $U=f(I)$ passant par l\'origine est le rapport $\\dfrac{U}{I}$, constant : c\'est exactement la définition de la résistance $R$ selon la loi d\'Ohm.'
      },
      {
        q: 'Pour mesurer l\'intensité du courant traversant une lampe, comment doit-on brancher l\'ampèremètre ?',
        options: ['En série, directement dans le fil du circuit', 'En dérivation, aux bornes de la lampe', 'Cela n\'a pas d\'importance', 'Uniquement hors tension, jamais en fonctionnement'],
        answer: 0,
        correction: 'L\'ampèremètre mesure le courant qui le traverse : il doit donc être placé <strong>en série</strong>, dans le circuit lui-même. Le brancher en dérivation créerait un court-circuit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['direct', 'pente']);
        var valeurs = [10, 22, 33, 47, 68, 100, 150, 220, 330, 470];

        if (typeExo === 'direct') {
          var R = pick(valeurs);
          var I = randFloat(0.05, 2, 2);
          var U = parseFloat((R * I).toFixed(2));
          var contexte = pick([
            'un circuit de commande de club de robotique',
            'un montage de test en atelier',
            'une carte électronique domestique',
            'un circuit de protection d\'une DEL',
            'un banc de mesure du laboratoire de sciences'
          ]);
          return {
            statement: 'Un résistor de résistance $R=' + R + '$ Ω, utilisé dans ' + contexte + ', est parcouru par un courant d\'intensité $I=' + fr(I, 2) + '$ A.<br/><br/>Calcule la tension $U$ à ses bornes (en V, arrondie au centième).',
            answer: U,
            tolerance: Math.max(0.05, parseFloat((U * 0.03).toFixed(2))),
            unit: 'V',
            hint: 'Loi d\'Ohm : $U = R \\times I$.',
            solution: [
              'Loi d\'Ohm : $U = R \\times I = ' + R + ' \\times ' + fr(I, 2) + '$.',
              'Résultat : $U \\approx ' + fr(U, 2) + '$ V.'
            ]
          };
        } else {
          var Rref = pick([10, 20, 25, 40, 50, 60, 75, 80, 100, 120]);
          var I1 = randFloat(0.05, 0.15, 2);
          var I2 = randFloat(0.25, 0.45, 2);
          var U1 = Rref * I1;
          var U2 = Rref * I2;
          var deltaU = parseFloat((U2 - U1).toFixed(2));
          var deltaI = parseFloat((I2 - I1).toFixed(2));
          var Rcalc = parseFloat((deltaU / deltaI).toFixed(2));
          var contexte2 = pick([
            'lors d\'un TP de caractérisation de dipôle',
            'sur un banc de mesure du laboratoire',
            'dans un exercice sur la caractéristique tension-courant',
            'lors d\'une séance de club électronique'
          ]);
          return {
            statement: contexte2.charAt(0).toUpperCase() + contexte2.slice(1) + ', on trace la caractéristique d\'un résistor : pour $I_1=' + fr(I1, 2) + '$ A, on mesure $U_1=' + fr(U1, 2) + '$ V ; pour $I_2=' + fr(I2, 2) + '$ A, on mesure $U_2=' + fr(U2, 2) + '$ V.<br/><br/>Calcule la résistance $R$ à partir du coefficient directeur de la droite (en Ω, arrondie au centième).',
            answer: Rcalc,
            tolerance: Math.max(0.5, parseFloat((Rcalc * 0.03).toFixed(2))),
            unit: 'Ω',
            hint: 'Le coefficient directeur d\'une caractéristique $U=f(I)$ passant par l\'origine se calcule par $R=\\dfrac{\\Delta U}{\\Delta I}$.',
            solution: [
              'Coefficient directeur : $R=\\dfrac{\\Delta U}{\\Delta I}=\\dfrac{U_2-U_1}{I_2-I_1}$.',
              'Variation de tension : $\\Delta U = ' + fr(U2, 2) + ' - ' + fr(U1, 2) + ' = ' + fr(deltaU, 2) + '$ V.',
              'Variation de courant : $\\Delta I = ' + fr(I2, 2) + ' - ' + fr(I1, 2) + ' = ' + fr(deltaI, 2) + '$ A.',
              'Résultat : $R = \\dfrac{' + fr(deltaU, 2) + '}{' + fr(deltaI, 2) + '} \\approx ' + fr(Rcalc, 2) + '$ Ω.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un professeur trace, sur un même graphique, les caractéristiques tension-courant de deux résistors différents, notés $R_A$ et $R_B$, utilisés dans un club de robotique pour régler la luminosité de deux DEL. Pour le résistor $R_A$ : à $I=0{,}2$ A, on mesure $U=6$ V. Pour le résistor $R_B$ : à $I=0{,}2$ A, on mesure $U=15$ V.',
      tasks: [
        'Calculer la valeur de la résistance $R_A$, puis celle de $R_B$.',
        'Sur le graphique $U=f(I)$, laquelle des deux droites a la pente la plus forte ? Justifier.',
        'Les deux résistors sont maintenant branchés, chacun à leur tour, sous la même tension $U=9$ V. Lequel des deux laisse passer le courant le plus intense ? Calculer les deux intensités pour le vérifier.'
      ],
      solutions: [
        '$R_A=\\dfrac{U}{I}=\\dfrac{6}{0{,}2}=30$ Ω. $R_B=\\dfrac{U}{I}=\\dfrac{15}{0{,}2}=75$ Ω.',
        'Le coefficient directeur de la caractéristique $U=f(I)$ est égal à $R$ : c\'est donc la droite de $R_B$ ($75$ Ω, la résistance la plus grande) qui a la pente la plus forte.',
        'Sous $U=9$ V : pour $R_A$, $I_A=\\dfrac{U}{R_A}=\\dfrac{9}{30}=0{,}3$ A. Pour $R_B$, $I_B=\\dfrac{U}{R_B}=\\dfrac{9}{75}=0{,}12$ A. C\'est donc $R_A$, la résistance la plus faible, qui laisse passer le courant le plus intense.'
      ],
      finalAnswer: '$R_A=30$ Ω et $R_B=75$ Ω : plus la résistance est grande, plus sa caractéristique $U=f(I)$ est pentue, et moins elle laisse passer de courant sous une même tension ($I_A=0{,}3$ A contre $I_B=0{,}12$ A sous $9$ V). C\'est ce principe qui permet de choisir un résistor pour régler précisément l\'intensité dans un circuit.'
    },

    evaluation: {
      title: 'Évaluation — La résistance électrique et la loi d\'Ohm',
      duration: '30 min',
      questions: [
        {
          statement: 'Un résistor de $R=220$ Ω est parcouru par un courant $I=0{,}05$ A. Calculer la tension $U$ à ses bornes (en V).',
          type: 'numeric',
          answer: 11,
          tolerance: 0.3,
          unit: 'V',
          points: 2,
          correction: '$U=R\\times I=220\\times0{,}05=11$ V.'
        },
        {
          statement: 'La loi d\'Ohm pour un résistor s\'écrit :',
          type: 'multiple-choice',
          options: ['$U = R \\times I$', '$I = R \\times U$', '$R = U \\times I$', '$U = R + I$'],
          answer: 0,
          points: 2,
          correction: 'La tension est le produit de la résistance par l\'intensité : $U=R\\times I$. Les deux autres écritures ne correspondent à aucune loi physique valide ici.'
        },
        {
          statement: 'Sous une tension $U=12$ V, un résistor est parcouru par un courant $I=0{,}024$ A. Calculer sa résistance $R$ (en Ω).',
          type: 'numeric',
          answer: 500,
          tolerance: 10,
          unit: 'Ω',
          points: 3,
          correction: '$R=\\dfrac{U}{I}=\\dfrac{12}{0{,}024}=500$ Ω.'
        },
        {
          statement: 'La caractéristique tension-courant d\'un résistor étant une droite passant par l\'origine, son coefficient directeur donne :',
          type: 'multiple-choice',
          options: ['La résistance $R$ du résistor', 'La tension maximale supportée', 'Le courant de court-circuit', 'La puissance dissipée'],
          answer: 0,
          points: 2,
          correction: 'Le coefficient directeur d\'une droite $U=f(I)$ passant par l\'origine est constant et égal à $\\dfrac{U}{I}=R$.'
        },
        {
          statement: 'Pour mesurer la tension aux bornes d\'un résistor, le voltmètre doit être branché :',
          type: 'multiple-choice',
          options: ['En dérivation, aux bornes du résistor', 'En série, dans le fil du circuit', 'Uniquement à l\'aide d\'un ohmmètre', 'Peu importe le sens de branchement'],
          answer: 0,
          points: 1,
          correction: 'Le voltmètre mesure une différence de potentiel entre deux points : il se branche toujours en <strong>dérivation</strong> (en parallèle) aux bornes du composant étudié.'
        }
      ]
    }
  });
