/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-circuits-continu.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-circuits-continu',
    level: 3, subject: 'physique',
    icon: '⚡',
    title: 'Circuits électriques en régime continu',
    subtitle: 'Loi d\'Ohm, associations de résistances, lois de Kirchhoff, diviseur de tension, puissance électrique',
    keywords: ['Ohm', 'Kirchhoff', 'Résistances', 'Puissance', 'Diviseur de tension'],
    physics: 'L\'étude des circuits en régime continu permet de dimensionner les circuits de commande basse tension, les alimentations des équipements domotiques, les protections électriques, et de comprendre le fonctionnement des capteurs résistifs.',

    cours: {
      intro: 'En régime continu, un circuit électrique est parcouru par un courant $I$ (en ampères, A) sous l\'effet d\'une tension $U$ (en volts, V). La <strong>loi d\'Ohm</strong> relie ces deux grandeurs pour un résistor : $U = R \\times I$, où $R$ est la résistance (en ohms, Ω).<br/><br/>Dans un circuit plus complexe comportant plusieurs résistances, deux lois de Kirchhoff permettent d\'analyser le comportement du courant et de la tension : la <strong>loi des nœuds</strong> (la somme des courants entrants dans un nœud est égale à la somme des courants sortants) et la <strong>loi des mailles</strong> (la somme des tensions le long d\'une boucle fermée est nulle).<br/><br/>La <strong>puissance électrique</strong> dissipée par un résistor s\'exprime $P = U \\times I = R I^2 = \\dfrac{U^2}{R}$, en watts (W).',
      definitions: [
        { term: 'Loi d\'Ohm', def: 'Pour un résistor, la tension à ses bornes est proportionnelle au courant qui le traverse : $U = R \\times I$, avec $R$ en ohms (Ω), $U$ en volts (V), $I$ en ampères (A).' },
        { term: 'Résistances en série', def: 'Des résistances en série sont traversées par le <strong>même courant</strong> $I$. Leur résistance équivalente s\'additionne : $R_{eq} = R_1 + R_2 + \\dots$' },
        { term: 'Résistances en parallèle', def: 'Des résistances en parallèle ont la <strong>même tension</strong> $U$ à leurs bornes. L\'inverse de leur résistance équivalente s\'additionne : $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$ (pour deux résistances : $R_{eq} = \\dfrac{R_1 R_2}{R_1 + R_2}$).' },
        { term: 'Lois de Kirchhoff', def: 'Loi des nœuds : la somme des courants entrants dans un nœud est égale à la somme des courants sortants. Loi des mailles : la somme algébrique des tensions le long d\'une boucle fermée est nulle.' }
      ],
      method: {
        title: 'Analyser un circuit en régime continu en 3 étapes',
        steps: [
          '<strong>Identifier la structure du circuit</strong> : les résistances sont-elles en série (même courant), en parallèle (même tension), ou dans une association mixte ?',
          '<strong>Calculer la résistance équivalente</strong> pas à pas, en simplifiant d\'abord les groupements les plus simples, puis appliquer la loi d\'Ohm $U = R_{eq} \\times I$ pour trouver le courant total ou la tension totale.',
          'Pour retrouver une grandeur locale (tension ou courant dans une branche particulière), utiliser le <strong>diviseur de tension</strong> (résistances en série) ou appliquer directement les lois de Kirchhoff.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Circuit résistif en régime continu',
        title: 'Loi d\'Ohm et diviseur de tension dans un circuit série',
        description: 'Un générateur de tension $U$ alimente deux résistances $R_1$ et $R_2$ en série, parcourues par le même courant $I$. La tension $U_2$ aux bornes de $R_2$ est une fraction de $U$ : c\'est le principe du diviseur de tension.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="circuit-title circuit-desc">
            <title id="circuit-title">Schema d'un circuit serie avec generateur et deux resistances</title>
            <desc id="circuit-desc">Un circuit ferme rectangulaire comporte un generateur de tension U sur le cote gauche, une resistance R1 sur le cote superieur et une resistance R2 sur le cote droit, relies par des fils sur le cote inferieur. Le meme courant I circule dans toute la boucle puisque les elements sont en serie. La tension U2 est mesuree aux bornes de la resistance R2.</desc>

            <defs>
              <marker id="arrow-physbts-circuit" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- boucle du circuit -->
            <line class="frame-line" x1="60" y1="80" x2="180" y2="80"></line>
            <line class="frame-line" x1="280" y1="80" x2="480" y2="80"></line>
            <line class="frame-line" x1="480" y1="80" x2="480" y2="110"></line>
            <line class="frame-line" x1="480" y1="210" x2="480" y2="220"></line>
            <line class="frame-line" x1="480" y1="220" x2="60" y2="220"></line>
            <line class="frame-line" x1="60" y1="220" x2="60" y2="160"></line>
            <line class="frame-line" x1="60" y1="140" x2="60" y2="80"></line>

            <!-- symbole du generateur (deux plaques) -->
            <line class="frame-line" x1="40" y1="140" x2="80" y2="140"></line>
            <line class="curve-main" x1="48" y1="160" x2="72" y2="160"></line>

            <!-- resistance R1 (horizontale) -->
            <rect class="frame-line" x="180" y="70" width="100" height="20" fill="none"></rect>

            <!-- resistance R2 (verticale) -->
            <rect class="frame-line" x="470" y="110" width="20" height="100" fill="none"></rect>

            <!-- fleche de courant I -->
            <line class="curve-main" x1="100" y1="80" x2="150" y2="80" marker-end="url(#arrow-physbts-circuit)"></line>
            <text class="annotation-label" x="125" y="68" text-anchor="middle">I</text>

            <!-- etiquettes -->
            <text class="annotation-label" x="32" y="145" text-anchor="end">U</text>
            <text class="tick-label" x="230" y="60" text-anchor="middle">R₁</text>
            <text class="tick-label" x="500" y="95" text-anchor="start">R₂</text>

            <!-- cotation U2 -->
            <line class="guide-line" x1="520" y1="110" x2="520" y2="210"></line>
            <line class="guide-line" x1="515" y1="110" x2="520" y2="110"></line>
            <line class="guide-line" x1="515" y1="210" x2="520" y2="210"></line>
            <text class="annotation-label" x="535" y="165" text-anchor="start">U₂</text>
          </svg>
        `,
        notes: [
          'Les résistances $R_1$ et $R_2$ étant en série, elles sont traversées par le <strong>même courant</strong> $I$, donné par la loi d\'Ohm globale : $I = \\dfrac{U}{R_1 + R_2}$.',
          'La tension aux bornes de $R_2$ se calcule directement grâce au <strong>diviseur de tension</strong> : $U_2 = U \\times \\dfrac{R_2}{R_1 + R_2}$.',
          'Cette formule est très utile en pratique pour obtenir une tension réduite à partir d\'une source, sans calculer explicitement le courant $I$.'
        ],
        reading: 'Repère le générateur $U$ à gauche, puis suis le courant $I$ à travers $R_1$ en haut et $R_2$ à droite : la tension $U_2$ se mesure directement aux bornes de $R_2$.',
        caption: 'Circuit série avec deux résistances : diviseur de tension permettant d\'obtenir $U_2 = U \\times \\dfrac{R_2}{R_1+R_2}$ à partir de la tension source $U$.'
      },
      example: {
        statement: 'Un générateur de tension $U = 12$ V alimente deux résistances en série : $R_1 = 470$ Ω et $R_2 = 330$ Ω.<br/><br/>Calculer le courant $I$ dans le circuit, puis la tension $U_2$ aux bornes de $R_2$.',
        steps: [
          'Résistance équivalente (série) : $R_{eq} = R_1 + R_2 = 470 + 330 = 800$ Ω.',
          'Loi d\'Ohm globale : $I = \\dfrac{U}{R_{eq}} = \\dfrac{12}{800} = 0{,}015$ A, soit $15$ mA.',
          'Tension aux bornes de $R_2$ : $U_2 = R_2 \\times I = 330 \\times 0{,}015 = 4{,}95$ V.',
          'Vérification par le diviseur de tension : $U_2 = U \\times \\dfrac{R_2}{R_1+R_2} = 12 \\times \\dfrac{330}{800} = 12 \\times 0{,}4125 = 4{,}95$ V. Les deux méthodes donnent bien le même résultat.'
        ],
        answer: '$I = 15$ mA et $U_2 \\approx 4{,}95$ V. Le diviseur de tension permet de retrouver directement $U_2$ sans passer par le calcul explicite du courant.'
      },
      formulas: [
        '$U = R \\times I$ (loi d\'Ohm)',
        'Résistances en série : $R_{eq} = R_1 + R_2 + \\dots$',
        'Résistances en parallèle : $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$',
        'Diviseur de tension : $U_2 = U \\times \\dfrac{R_2}{R_1 + R_2}$',
        'Puissance électrique : $P = U \\times I = R I^2 = \\dfrac{U^2}{R}$'
      ],
      recap: [
        'Des résistances en <strong>série</strong> partagent le même courant ; des résistances en <strong>parallèle</strong> partagent la même tension.',
        'La résistance équivalente d\'une série <strong>s\'additionne</strong> ($R_{eq} = R_1+R_2$) ; celle d\'un parallèle est toujours <strong>inférieure</strong> à la plus petite des résistances.',
        'Le diviseur de tension $U_2 = U\\times\\dfrac{R_2}{R_1+R_2}$ permet de calculer une tension partielle sans passer par le courant.',
        'La puissance dissipée par un résistor peut se calculer de trois façons équivalentes : $P=UI$, $P=RI^2$ ou $P=\\dfrac{U^2}{R}$, à choisir selon les grandeurs connues.'
      ],
      piege: 'Une erreur fréquente est de confondre les formules de résistances en <strong>série</strong> ($R_{eq}=R_1+R_2$) et en <strong>parallèle</strong> ($\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}$), ou d\'additionner directement des résistances en parallèle comme si elles étaient en série. Attention à bien retenir que la résistance équivalente d\'un parallèle est toujours <strong>plus petite</strong> que chacune des résistances individuelles, jamais plus grande : c\'est un bon réflexe pour vérifier la cohérence d\'un calcul.'
    },

    quiz: [
      {
        q: 'Un résistor de $R = 220$ Ω est parcouru par un courant $I = 0{,}05$ A. Quelle est la tension $U$ à ses bornes ?',
        options: [
          '$U = 11$ V',
          '$U = 4{,}4$ V',
          '$U = 275$ V',
          '$U = 0{,}00023$ V'
        ],
        answer: 0,
        correction: 'Loi d\'Ohm : $U = R \\times I = 220 \\times 0{,}05 = 11$ V.'
      },
      {
        q: 'Deux résistances $R_1 = 100$ Ω et $R_2 = 400$ Ω sont associées en parallèle. Quelle est la résistance équivalente $R_{eq}$ ?',
        options: [
          '$R_{eq} = 500$ Ω',
          '$R_{eq} = 80$ Ω',
          '$R_{eq} = 250$ Ω',
          '$R_{eq} = 40\\,000$ Ω'
        ],
        answer: 1,
        correction: '$R_{eq} = \\dfrac{R_1 R_2}{R_1+R_2} = \\dfrac{100 \\times 400}{100+400} = \\dfrac{40\\,000}{500} = 80$ Ω. Comme attendu pour un parallèle, $R_{eq}$ est bien inférieure à la plus petite résistance ($100$ Ω).'
      },
      {
        q: 'Dans un circuit série avec $U = 9$ V, $R_1 = 200$ Ω et $R_2 = 100$ Ω, quelle est la tension $U_2$ aux bornes de $R_2$ (diviseur de tension) ?',
        options: [
          '$U_2 = 3$ V',
          '$U_2 = 6$ V',
          '$U_2 = 4{,}5$ V',
          '$U_2 = 9$ V'
        ],
        answer: 0,
        correction: 'Diviseur de tension : $U_2 = U \\times \\dfrac{R_2}{R_1+R_2} = 9 \\times \\dfrac{100}{300} = 9 \\times \\dfrac{1}{3} = 3$ V.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['diviseur', 'parallele']);
        var valeurs = [100, 150, 220, 330, 470, 680, 1000];

        if (typeExo === 'diviseur') {
          var U = rand(5, 24);
          var R1 = pick(valeurs);
          var R2 = pick(valeurs);
          var U2 = parseFloat((U * R2 / (R1 + R2)).toFixed(2));
          var contexte = pick([
            'un circuit de commande basse tension',
            'un pont diviseur pour capteur',
            'un circuit d\'alimentation de relais',
            'une carte électronique domotique',
            'un circuit de mesure résistif'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un générateur de tension $U = ' + U + '$ V alimente deux résistances en série : $R_1 = ' + R1 + '$ Ω et $R_2 = ' + R2 + '$ Ω.<br/><br/>D\'après le diviseur de tension, calcule la tension $U_2$ aux bornes de $R_2$ (en V, arrondie au centième).',
            answer: U2,
            tolerance: Math.max(0.05, parseFloat((U2 * 0.03).toFixed(2))),
            unit: 'V',
            hint: 'Diviseur de tension : $U_2 = U \\times \\dfrac{R_2}{R_1+R_2}$.',
            solution: [
              'Diviseur de tension : $U_2 = U \\times \\dfrac{R_2}{R_1+R_2} = ' + U + ' \\times \\dfrac{' + R2 + '}{' + R1 + ' + ' + R2 + '}$.',
              'Somme au dénominateur : $R_1 + R_2 = ' + R1 + ' + ' + R2 + ' = ' + (R1 + R2) + '$ Ω.',
              'Résultat : $U_2 \\approx ' + fr(U2, 2) + '$ V.'
            ]
          };
        } else {
          var Ra = pick(valeurs);
          var Rb = pick(valeurs);
          var Req = parseFloat((Ra * Rb / (Ra + Rb)).toFixed(2));
          var contexte2 = pick([
            'un boîtier de dérivation électrique',
            'un circuit de charge résistive',
            'un banc d\'essai en électrotechnique',
            'un module de test de composants'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', deux résistances $R_1 = ' + Ra + '$ Ω et $R_2 = ' + Rb + '$ Ω sont associées en parallèle.<br/><br/>Calcule la résistance équivalente $R_{eq}$ de cette association (en Ω, arrondie au centième).',
            answer: Req,
            tolerance: Math.max(0.5, parseFloat((Req * 0.03).toFixed(2))),
            unit: 'Ω',
            hint: 'Résistances en parallèle : $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1}+\\dfrac{1}{R_2}$, soit $R_{eq} = \\dfrac{R_1 R_2}{R_1+R_2}$.',
            solution: [
              'Résistances en parallèle : $R_{eq} = \\dfrac{R_1 R_2}{R_1+R_2} = \\dfrac{' + Ra + ' \\times ' + Rb + '}{' + Ra + ' + ' + Rb + '}$.',
              'Somme au dénominateur : $R_1 + R_2 = ' + (Ra + Rb) + '$ Ω.',
              'Résultat : $R_{eq} \\approx ' + fr(Req, 2) + '$ Ω, une valeur inférieure à la plus petite des deux résistances.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une diode électroluminescente (LED) doit être alimentée à partir d\'une tension $U = 12$ V. Elle nécessite une tension à ses bornes $U_{LED} = 2{,}1$ V et un courant $I = 20$ mA pour fonctionner normalement. On place une résistance de protection $R$ en série avec la LED pour limiter le courant.',
      tasks: [
        'Calculer la tension $U_R$ aux bornes de la résistance de protection.',
        'En déduire, par la loi d\'Ohm, la valeur de la résistance $R$ nécessaire (en Ω).',
        'Calculer la puissance $P_R$ dissipée par cette résistance, puis choisir un calibre adapté parmi $0{,}25$ W, $0{,}5$ W et $1$ W.'
      ],
      solutions: [
        'Loi des mailles : $U = U_R + U_{LED}$, donc $U_R = U - U_{LED} = 12 - 2{,}1 = 9{,}9$ V.',
        'Loi d\'Ohm : $R = \\dfrac{U_R}{I} = \\dfrac{9{,}9}{0{,}02} = 495$ Ω (on choisira une valeur normalisée proche, par exemple $470$ Ω ou $510$ Ω).',
        'Puissance dissipée : $P_R = U_R \\times I = 9{,}9 \\times 0{,}02 \\approx 0{,}198$ W. Le calibre $0{,}25$ W suffit strictement ($0{,}198 < 0{,}25$), mais on retiendra plutôt $0{,}5$ W en pratique, par marge de sécurité.'
      ],
      finalAnswer: '$R \\approx 495$ Ω et $P_R \\approx 0{,}198$ W. Choisir une résistance de calibre $0{,}5$ W (plutôt que $0{,}25$ W au plus juste) évite tout échauffement excessif du composant en fonctionnement continu, une précaution courante lors du dimensionnement de circuits de protection.'
    },

    evaluation: {
      title: 'Évaluation — Circuits électriques en régime continu',
      duration: '30 min',
      questions: [
        {
          statement: 'Un résistor de $R = 330$ Ω est parcouru par un courant $I = 0{,}03$ A. Calculer la tension $U$ à ses bornes (en V).',
          type: 'numeric',
          answer: 9.9,
          tolerance: 0.3,
          unit: 'V',
          points: 2,
          correction: '$U = R \\times I = 330 \\times 0{,}03 = 9{,}9$ V.'
        },
        {
          statement: 'Des résistances associées en parallèle partagent toujours :',
          type: 'multiple-choice',
          options: [
            'Le même courant',
            'La même tension',
            'La même puissance',
            'La même résistance'
          ],
          answer: 1,
          points: 2,
          correction: 'Des résistances en parallèle sont branchées entre les deux mêmes nœuds : elles ont donc nécessairement la même tension à leurs bornes, mais pas forcément le même courant (qui dépend de chaque résistance).'
        },
        {
          statement: 'Trois résistances $R_1 = 100$ Ω, $R_2 = 220$ Ω et $R_3 = 180$ Ω sont associées en série. Calculer la résistance équivalente $R_{eq}$ (en Ω).',
          type: 'numeric',
          answer: 500,
          tolerance: 5,
          unit: 'Ω',
          points: 2,
          correction: '$R_{eq} = R_1 + R_2 + R_3 = 100 + 220 + 180 = 500$ Ω.'
        },
        {
          statement: 'Un générateur $U = 15$ V alimente $R_1 = 560$ Ω et $R_2 = 440$ Ω en série. Calculer la tension $U_2$ aux bornes de $R_2$ (en V, arrondie au dixième).',
          type: 'numeric',
          answer: 6.6,
          tolerance: 0.2,
          unit: 'V',
          points: 2,
          correction: '$U_2 = U \\times \\dfrac{R_2}{R_1+R_2} = 15 \\times \\dfrac{440}{1\\,000} = 15 \\times 0{,}44 = 6{,}6$ V.'
        },
        {
          statement: 'Un résistor de $R = 100$ Ω est parcouru par un courant $I = 0{,}5$ A. Calculer la puissance $P$ qu\'il dissipe (en W).',
          type: 'numeric',
          answer: 25,
          tolerance: 1,
          unit: 'W',
          points: 2,
          correction: '$P = R I^2 = 100 \\times 0{,}5^2 = 100 \\times 0{,}25 = 25$ W.'
        }
      ]
    }
  });
