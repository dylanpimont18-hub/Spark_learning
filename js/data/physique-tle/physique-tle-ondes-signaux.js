/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-ondes-signaux.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-ondes-signaux',
    level: 2, subject: 'physique',
    icon: '🌊',
    title: 'Ondes et signaux : diffraction et interférences',
    subtitle: 'Diffraction d\'une onde, interférences lumineuses (fentes de Young), interfrange, ondes cohérentes',
    keywords: ['Diffraction', 'Interférences', 'Fentes de Young', 'Interfrange', 'Onde lumineuse'],
    physics: 'Ces phénomènes ondulatoires expliquent le pouvoir de résolution des instruments d\'optique (télescopes, microscopes), guident la conception des réseaux de diffraction utilisés en spectroscopie, et sont exploités dans les capteurs interférométriques de haute précision (mesure de distances, détection d\'ondes gravitationnelles).',

    cours: {
      intro: 'Une onde qui rencontre une ouverture ou un obstacle de dimension comparable à sa longueur d\'onde $\\lambda$ ne se propage plus en ligne droite : elle s\'étale au-delà de l\'obstacle. C\'est le phénomène de <strong>diffraction</strong>, caractérisé, pour une ouverture de largeur $a\\gg\\lambda$, par un écart angulaire $\\theta\\approx\\dfrac{\\lambda}{a}$ (en radians).<br/><br/>Lorsque deux ondes <strong>cohérentes</strong> (même fréquence, déphasage constant), issues par exemple de deux fentes fines et proches (fentes de Young), se superposent, elles produisent une figure d\'<strong>interférences</strong> : une alternance de zones où les ondes s\'additionnent (franges brillantes) et de zones où elles s\'annulent (franges sombres).<br/><br/>L\'écart entre deux franges brillantes consécutives, l\'<strong>interfrange</strong> $i$, dépend de la longueur d\'onde $\\lambda$, de la distance $a$ entre les deux fentes et de la distance $D$ à l\'écran d\'observation : $i=\\dfrac{\\lambda D}{a}$.',
      definitions: [
        { term: 'Diffraction', def: 'Déviation d\'une onde franchissant une ouverture de largeur $a$, ou contournant un obstacle, de dimension comparable à sa longueur d\'onde $\\lambda$. Pour $a\\gg\\lambda$, l\'écart angulaire du faisceau diffracté vaut $\\theta\\approx\\dfrac{\\lambda}{a}$ (en radians).' },
        { term: 'Ondes cohérentes', def: 'Deux ondes sont dites cohérentes si elles ont la <strong>même fréquence</strong> et un <strong>déphasage constant</strong> au cours du temps : c\'est la condition nécessaire pour observer une figure d\'interférences stable.' },
        { term: 'Interférences', def: 'Superposition de deux ondes cohérentes, produisant une alternance de zones de renforcement (franges brillantes, ondes en phase) et de zones d\'annulation (franges sombres, ondes en opposition de phase).' },
        { term: 'Interfrange ($i$)', def: 'Distance séparant deux franges brillantes (ou deux franges sombres) consécutives sur l\'écran d\'observation : $i=\\dfrac{\\lambda D}{a}$, où $a$ est la distance entre les deux fentes et $D$ la distance fentes-écran.' }
      ],
      method: {
        title: 'Résoudre un problème de diffraction ou d\'interférences en 3 étapes',
        steps: [
          '<strong>Identifier</strong> le phénomène étudié : diffraction par une ouverture unique (calcul d\'un écart angulaire $\\theta$), ou interférences entre deux fentes (calcul d\'un interfrange $i$) ?',
          '<strong>Repérer</strong> les grandeurs données et leurs unités : longueur d\'onde $\\lambda$ (m, souvent donnée en nm à convertir), largeur de fente ou distance entre fentes $a$ (m), distance à l\'écran $D$ (m).',
          '<strong>Appliquer</strong> la formule adaptée — $\\theta\\approx\\dfrac{\\lambda}{a}$ pour la diffraction, $i=\\dfrac{\\lambda D}{a}$ pour l\'interfrange — en veillant à l\'homogénéité des unités (tout convertir en mètres).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Interférences lumineuses (fentes de Young)',
        title: 'Dispositif des fentes de Young et figure d\'interférences',
        description: 'Deux fentes fines, distantes de $a$, sont éclairées par une source cohérente. Sur un écran situé à une distance $D$, on observe une alternance de franges brillantes et sombres, espacées de l\'interfrange $i=\\dfrac{\\lambda D}{a}$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="young-title young-desc">
            <title id="young-title">Dispositif des fentes de Young</title>
            <desc id="young-desc">Un laser a gauche emet un faisceau vers une barriere opaque percee de deux fentes fines et proches, distantes d'une longueur notee a. Des faisceaux divergents partent de chaque fente en direction d'un ecran place a droite, a une distance notee D de la barriere. Sur l'ecran apparait une serie de petites marques regulierement espacees representant les franges brillantes d'interference, avec une cotation indiquant l'interfrange note i entre deux franges consecutives.</desc>

            <defs>
              <marker id="arrow-tle-young" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- laser -->
            <rect class="frame-line" x="60" y="142" width="35" height="16" fill="var(--diagram-soft)"></rect>
            <text class="label-soft" x="77" y="172" text-anchor="middle">Laser</text>
            <line class="curve-main" x1="95" y1="150" x2="195" y2="150" marker-end="url(#arrow-tle-young)"></line>

            <!-- barriere avec deux fentes -->
            <rect class="frame-line" x="198" y="60" width="4" height="65" fill="var(--diagram-accent)"></rect>
            <rect class="frame-line" x="198" y="135" width="4" height="30" fill="var(--diagram-accent)"></rect>
            <rect class="frame-line" x="198" y="175" width="4" height="65" fill="var(--diagram-accent)"></rect>

            <!-- cotation a -->
            <line class="guide-line" x1="188" y1="130" x2="198" y2="130"></line>
            <line class="guide-line" x1="188" y1="170" x2="198" y2="170"></line>
            <line class="guide-line" x1="188" y1="130" x2="188" y2="170"></line>
            <text class="tick-label" x="180" y="154" text-anchor="end">a</text>

            <!-- faisceaux divergents vers l'ecran -->
            <line class="guide-line" x1="202" y1="130" x2="480" y2="70"></line>
            <line class="guide-line" x1="202" y1="130" x2="480" y2="270"></line>
            <line class="guide-line" x1="202" y1="170" x2="480" y2="70"></line>
            <line class="guide-line" x1="202" y1="170" x2="480" y2="270"></line>

            <!-- ecran -->
            <line class="frame-line" x1="480" y1="60" x2="480" y2="280"></line>
            <text class="label-soft" x="480" y="294" text-anchor="middle">Écran</text>

            <!-- franges brillantes -->
            <rect x="476" y="77" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="107" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="137" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="167" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="197" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="227" width="8" height="6" fill="var(--diagram-accent)"></rect>
            <rect x="476" y="257" width="8" height="6" fill="var(--diagram-accent)"></rect>

            <!-- cotation interfrange i -->
            <line class="guide-line" x1="484" y1="170" x2="500" y2="170"></line>
            <line class="guide-line" x1="484" y1="200" x2="500" y2="200"></line>
            <line class="guide-line" x1="500" y1="170" x2="500" y2="200"></line>
            <text class="tick-label" x="506" y="189" text-anchor="start">i</text>

            <!-- cotation D -->
            <line class="guide-line" x1="200" y1="45" x2="480" y2="45"></line>
            <line class="guide-line" x1="200" y1="45" x2="200" y2="55"></line>
            <line class="guide-line" x1="480" y1="45" x2="480" y2="55"></line>
            <text class="tick-label" x="340" y="38" text-anchor="middle">D</text>
          </svg>
        `,
        notes: [
          'Les deux fentes, distantes de $a$, se comportent comme deux sources <strong>cohérentes</strong> : elles émettent des ondes de même fréquence, en phase.',
          'Sur l\'écran, à la distance $D$ des fentes, les ondes issues des deux fentes se superposent : selon le point considéré, elles s\'additionnent (frange brillante) ou s\'annulent (frange sombre).',
          'L\'interfrange $i$, distance entre deux franges brillantes consécutives, augmente avec $\\lambda$ et $D$, mais diminue si les fentes sont plus <strong>écartées</strong> (grand $a$).'
        ],
        reading: 'Suis le trajet de la lumière depuis la source, à travers les deux fentes distantes de $a$, jusqu\'à l\'écran situé à la distance $D$ : la figure obtenue montre des franges régulièrement espacées de l\'interfrange $i$.',
        caption: 'Dispositif des fentes de Young : deux fentes cohérentes, distantes de $a$, produisent sur un écran à la distance $D$ une figure d\'interférences de franges espacées de $i=\\dfrac{\\lambda D}{a}$.'
      },
      example: {
        statement: 'Des fentes de Young distantes de $a=0{,}50$ mm sont éclairées par un laser de longueur d\'onde $\\lambda=500$ nm. L\'écran d\'observation est situé à $D=2{,}0$ m.<br/><br/>Calculer l\'interfrange $i$ observé sur l\'écran.',
        steps: [
          'Conversion des données en mètres : $\\lambda=500$ nm $=500\\times10^{-9}$ m $=5{,}0\\times10^{-7}$ m ; $a=0{,}50$ mm $=5{,}0\\times10^{-4}$ m.',
          'Formule de l\'interfrange : $i=\\dfrac{\\lambda D}{a}$.',
          'Application numérique : $i=\\dfrac{5{,}0\\times10^{-7}\\times2{,}0}{5{,}0\\times10^{-4}}=\\dfrac{1{,}0\\times10^{-6}}{5{,}0\\times10^{-4}}=2{,}0\\times10^{-3}$ m.'
        ],
        answer: '$i=2{,}0\\times10^{-3}$ m $=2{,}0$ mm. Cet interfrange, de l\'ordre du millimètre, est facilement observable et mesurable à l\'œil nu ou avec un simple capteur, ce qui rend l\'expérience des fentes de Young accessible en travaux pratiques.'
      },
      formulas: [
        'Diffraction (ouverture de largeur $a\\gg\\lambda$) : $\\theta\\approx\\dfrac{\\lambda}{a}$ (en radians)',
        'Interfrange (fentes de Young) : $i=\\dfrac{\\lambda D}{a}$',
        'Interférence constructive (frange brillante) : différence de marche $\\delta=k\\lambda$ ($k$ entier)',
        'Interférence destructive (frange sombre) : $\\delta=\\left(k+\\dfrac12\\right)\\lambda$',
        'Conversion usuelle : $1$ nm $=10^{-9}$ m'
      ],
      recap: [
        'La diffraction et les interférences sont deux manifestations du caractère <strong>ondulatoire</strong> de la lumière : elles ne s\'expliquent pas par un modèle purement géométrique (rayons rectilignes).',
        'Plus l\'ouverture ou l\'écart entre les fentes est <strong>petit</strong>, plus les effets de diffraction et d\'interférences sont <strong>marqués</strong> (angle $\\theta$ ou interfrange $i$ plus grands).',
        'L\'interfrange $i=\\dfrac{\\lambda D}{a}$ augmente avec la longueur d\'onde $\\lambda$ et la distance à l\'écran $D$, mais diminue si les fentes sont plus écartées.',
        'Deux ondes ne produisent une figure d\'interférences stable que si elles sont <strong>cohérentes</strong> : même fréquence, déphasage constant.'
      ],
      piege: 'Une erreur fréquente est de confondre la largeur d\'une fente unique $a$ (utilisée pour la diffraction, $\\theta\\approx\\lambda/a$) avec la distance entre deux fentes $a$ (utilisée pour l\'interfrange, $i=\\lambda D/a$) : ce sont deux grandeurs physiquement différentes qui portent la même notation par convention. Attention également à toujours convertir la longueur d\'onde (souvent donnée en nanomètres) en mètres avant tout calcul, sous peine d\'obtenir un résultat erroné d\'un facteur $10^9$.'
    },

    quiz: [
      {
        q: 'Pour observer un effet de diffraction nettement marqué en traversant une ouverture de largeur $a$, il faut que :',
        options: [
          '$a$ soit du même ordre de grandeur que $\\lambda$ (pas beaucoup plus grand)',
          '$a$ soit très supérieur à $\\lambda$',
          '$a$ soit nul',
          'Cela ne dépend pas de la taille de l\'ouverture'
        ],
        answer: 0,
        correction: 'La diffraction est d\'autant plus marquée que la taille de l\'ouverture se rapproche de la longueur d\'onde. Si $a\\gg\\lambda$, l\'écart angulaire $\\theta\\approx\\lambda/a$ devient négligeable et la propagation redevient quasi rectiligne.'
      },
      {
        q: 'Deux ondes sont dites cohérentes si :',
        options: [
          'Elles ont la même fréquence et un déphasage constant',
          'Elles ont nécessairement la même amplitude',
          'Elles se propagent dans des directions opposées',
          'Elles ont des fréquences différentes'
        ],
        answer: 0,
        correction: 'La cohérence exige une fréquence identique et un déphasage constant au cours du temps : c\'est cette condition qui permet une figure d\'interférences stable, observable dans le temps.'
      },
      {
        q: 'Des fentes de Young distantes de $a=0{,}50$ mm sont éclairées par un laser de longueur d\'onde $\\lambda=500$ nm. L\'écran est à $D=2{,}0$ m. Calculer l\'interfrange $i$.',
        options: [
          '$i=2{,}0$ mm',
          '$i=0{,}2$ mm',
          '$i=20$ mm',
          '$i=0{,}5$ mm'
        ],
        answer: 0,
        correction: '$i=\\dfrac{\\lambda D}{a}=\\dfrac{500\\times10^{-9}\\times2{,}0}{0{,}50\\times10^{-3}}=2{,}0\\times10^{-3}$ m $=2{,}0$ mm.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['diffraction', 'interference']);
        var lambdaNm = pick([450, 500, 650, 780]);
        var lambda = lambdaNm * 1e-9;
        var contexte = pick([
          'un pointeur laser de démonstration',
          'une diode laser de laboratoire',
          'un banc d\'optique de travaux pratiques',
          'un dispositif de contrôle qualité optique',
          'une expérience d\'optique ondulatoire au lycée'
        ]);

        if (typeExo === 'diffraction') {
          var aMm1 = pick([0.05, 0.08, 0.10, 0.15]);
          var a1 = aMm1 * 1e-3;
          var thetaMrad = parseFloat(((lambda / a1) * 1000).toFixed(3));
          return {
            statement: 'Dans ' + contexte + ', un faisceau de longueur d\'onde $\\lambda=' + lambdaNm + '$ nm traverse une fente de largeur $a=' + fr(aMm1, 2) + '$ mm.<br/><br/>Calcule l\'écart angulaire de diffraction $\\theta$ (en mrad, arrondi au millième).',
            answer: thetaMrad,
            tolerance: Math.max(0.05, parseFloat((thetaMrad * 0.03).toFixed(3))),
            unit: 'mrad',
            hint: 'Convertis $\\lambda$ et $a$ en mètres, puis utilise $\\theta\\approx\\dfrac{\\lambda}{a}$.',
            solution: [
              'Conversion : $\\lambda=' + lambdaNm + '\\times10^{-9}$ m ; $a=' + fr(aMm1, 2) + '\\times10^{-3}$ m.',
              'Formule de diffraction : $\\theta\\approx\\dfrac{\\lambda}{a}$.',
              'Résultat : $\\theta\\approx' + fr(thetaMrad, 3) + '$ mrad.'
            ]
          };
        } else {
          var aMm2 = pick([0.1, 0.15, 0.2, 0.3, 0.5]);
          var Dm = pick([1.0, 1.5, 2.0, 3.0]);
          var a2 = aMm2 * 1e-3;
          var iMm = parseFloat(((lambda * Dm / a2) * 1000).toFixed(3));
          return {
            statement: 'Dans ' + contexte + ', des fentes de Young distantes de $a=' + fr(aMm2, 2) + '$ mm sont éclairées par une lumière de longueur d\'onde $\\lambda=' + lambdaNm + '$ nm. L\'écran est situé à $D=' + fr(Dm, 1) + '$ m.<br/><br/>Calcule l\'interfrange $i$ (en mm, arrondi au centième).',
            answer: iMm,
            tolerance: Math.max(0.05, parseFloat((iMm * 0.03).toFixed(2))),
            unit: 'mm',
            hint: 'Convertis $\\lambda$ et $a$ en mètres, puis utilise $i=\\dfrac{\\lambda D}{a}$.',
            solution: [
              'Conversion : $\\lambda=' + lambdaNm + '\\times10^{-9}$ m ; $a=' + fr(aMm2, 2) + '\\times10^{-3}$ m.',
              'Formule de l\'interfrange : $i=\\dfrac{\\lambda D}{a}=\\dfrac{' + lambdaNm + '\\times10^{-9}\\times' + fr(Dm, 1) + '}{' + fr(aMm2, 2) + '\\times10^{-3}}$.',
              'Résultat : $i\\approx' + fr(iMm, 2) + '$ mm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On réalise l\'expérience des fentes de Young avec un laser hélium-néon de longueur d\'onde $\\lambda=632{,}8$ nm et deux fentes séparées de $a=0{,}40$ mm. L\'écran d\'observation est placé à $D=2{,}50$ m des fentes. L\'interfrange mesuré expérimentalement sur l\'écran est $i_{exp}=3{,}9$ mm.',
      tasks: [
        'Calculer la valeur théorique de l\'interfrange $i_{théo}$, et la comparer à la valeur mesurée $i_{exp}$.',
        'On éloigne l\'écran à une nouvelle distance $D\'=1{,}5\\times D$. Calculer le nouvel interfrange $i\'$.',
        'On revient à la distance initiale $D$, mais on remplace les fentes par une paire deux fois plus rapprochées ($a\'\'=a/2$). Calculer le nouvel interfrange $i\'\'$, et comparer les effets d\'un changement de $D$ et d\'un changement de $a$ sur l\'interfrange.'
      ],
      solutions: [
        '$i_{théo}=\\dfrac{\\lambda D}{a}=\\dfrac{632{,}8\\times10^{-9}\\times2{,}50}{0{,}40\\times10^{-3}}\\approx3{,}96\\times10^{-3}$ m $=3{,}96$ mm. Cette valeur théorique est très proche de la valeur mesurée $i_{exp}=3{,}9$ mm (écart inférieur à $2\\,\\%$), ce qui valide le modèle.',
        '$i\'=\\dfrac{\\lambda D\'}{a}=\\dfrac{\\lambda\\times1{,}5D}{a}=1{,}5\\times i_{théo}\\approx1{,}5\\times3{,}96\\approx5{,}93$ mm.',
        '$i\'\'=\\dfrac{\\lambda D}{a/2}=2\\times\\dfrac{\\lambda D}{a}=2\\times i_{théo}\\approx2\\times3{,}96\\approx7{,}91$ mm. Rapprocher les fentes (diviser $a$ par $2$) a donc un effet <strong>deux fois plus important</strong> sur l\'interfrange qu\'éloigner l\'écran du même facteur ($D\'=1{,}5D$ ne multiplie $i$ que par $1{,}5$, alors que $a\'\'=a/2$ le multiplie par $2$).'
      ],
      finalAnswer: '$i_{théo}\\approx3{,}96$ mm (cohérent avec la mesure), $i\'\\approx5{,}93$ mm et $i\'\'\\approx7{,}91$ mm. Cette expérience illustre la sensibilité de l\'interfrange aux paramètres géométriques du montage : c\'est un principe exploité dans les capteurs interférométriques pour mesurer de très petites variations de distance avec une grande précision.'
    },

    evaluation: {
      title: 'Évaluation — Ondes et signaux : diffraction et interférences',
      duration: '30 min',
      questions: [
        {
          statement: 'Un faisceau de longueur d\'onde $\\lambda=400$ nm traverse une fente de largeur $a=0{,}05$ mm. Calculer l\'écart angulaire de diffraction $\\theta$ (en mrad).',
          type: 'numeric',
          answer: 8,
          tolerance: 0.3,
          unit: 'mrad',
          points: 3,
          correction: '$\\theta\\approx\\dfrac{\\lambda}{a}=\\dfrac{400\\times10^{-9}}{0{,}05\\times10^{-3}}=8\\times10^{-3}$ rad $=8$ mrad.'
        },
        {
          statement: 'Des fentes de Young distantes de $a=0{,}25$ mm sont éclairées par une lumière de $\\lambda=600$ nm. L\'écran est à $D=1{,}8$ m. Calculer l\'interfrange $i$ (en mm).',
          type: 'numeric',
          answer: 4.32,
          tolerance: 0.2,
          unit: 'mm',
          points: 3,
          correction: '$i=\\dfrac{\\lambda D}{a}=\\dfrac{600\\times10^{-9}\\times1{,}8}{0{,}25\\times10^{-3}}\\approx4{,}32\\times10^{-3}$ m $=4{,}32$ mm.'
        },
        {
          statement: 'Sur une figure d\'interférences, une frange sombre correspond à une différence de marche $\\delta$ telle que :',
          type: 'multiple-choice',
          options: [
            '$\\delta=k\\lambda$ ($k$ entier)',
            '$\\delta=\\left(k+\\dfrac12\\right)\\lambda$ ($k$ entier)',
            '$\\delta=0$ obligatoirement',
            '$\\delta=\\lambda^2$'
          ],
          answer: 1,
          points: 2,
          correction: 'Une frange sombre correspond à une interférence destructive : les deux ondes arrivent en opposition de phase, ce qui correspond à une différence de marche $\\delta=\\left(k+\\dfrac12\\right)\\lambda$.'
        },
        {
          statement: 'Si l\'on rapproche les deux fentes de Young (diminution de $a$), sans changer $\\lambda$ ni $D$, l\'interfrange $i$ :',
          type: 'multiple-choice',
          options: [
            'Augmente',
            'Diminue',
            'Reste inchangé',
            'Devient nul'
          ],
          answer: 0,
          points: 2,
          correction: '$i=\\dfrac{\\lambda D}{a}$ : $i$ est inversement proportionnel à $a$. Rapprocher les fentes (diminuer $a$) augmente donc l\'interfrange.'
        },
        {
          statement: 'La diffraction et les interférences sont des phénomènes caractéristiques :',
          type: 'multiple-choice',
          options: [
            'Du comportement corpusculaire de la lumière uniquement',
            'Du comportement ondulatoire de la lumière',
            'Uniquement des ondes sonores, jamais de la lumière',
            'Des rayons lumineux rectilignes'
          ],
          answer: 1,
          points: 2,
          correction: 'La diffraction et les interférences ne s\'expliquent que par le modèle ondulatoire : elles sont impossibles à décrire avec un modèle purement géométrique de rayons rectilignes.'
        }
      ]
    }
  });
