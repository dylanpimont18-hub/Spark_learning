/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-mouvement-champ.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-mouvement-champ',
    level: 2, subject: 'physique',
    icon: '🎯',
    title: 'Mouvement dans un champ uniforme',
    subtitle: 'Vecteur champ, principe fondamental de la dynamique en 3D, équations horaires, trajectoire parabolique dans un champ de pesanteur ou un champ électrique',
    keywords: ['Champ uniforme', 'PFD vectoriel', 'Trajectoire parabolique', 'Champ électrique', 'Champ de pesanteur'],
    physics: 'Le mouvement dans un champ uniforme explique la trajectoire d\'un ballon ou d\'un skieur (champ de pesanteur), la déviation d\'un faisceau d\'électrons dans un ancien tube cathodique, le tri des ions dans un spectromètre de masse, ou encore la déviation contrôlée des gouttelettes d\'encre chargées dans une imprimante à jet d\'encre (champ électrique).',

    cours: {
      intro: 'Un <strong>champ uniforme</strong> est une région de l\'espace où un vecteur (champ de pesanteur $\\vec{g}$, champ électrique $\\vec{E}$…) garde la <strong>même norme, la même direction et le même sens</strong> en tout point. Au voisinage du sol, le champ de pesanteur terrestre $\\vec{g}$ est ainsi considéré comme uniforme ; entre les plaques d\'un condensateur plan, le champ électrique $\\vec{E}$ l\'est aussi.<br/><br/>Un système placé dans un champ uniforme subit une <strong>force constante</strong> : le poids $\\vec{P} = m\\vec{g}$ pour un champ de pesanteur, ou la force électrique $\\vec{F} = q\\vec{E}$ pour une particule de charge $q$ dans un champ électrique. D\'après le <strong>principe fondamental de la dynamique</strong>, $\\sum \\vec{F} = m\\vec{a}$, cette force constante produit une <strong>accélération $\\vec{a}$ elle aussi constante</strong>, en norme, direction et sens, tout au long du mouvement.<br/><br/>C\'est cette accélération constante qui donne au mouvement sa forme caractéristique : une <strong>trajectoire parabolique</strong>, exactement comme pour un projectile lancé obliquement dans le champ de pesanteur.',
      definitions: [
        { term: 'Champ uniforme', def: 'Champ vectoriel dont la valeur (norme, direction, sens) est identique en tout point de la région étudiée. Exemples : $\\vec{g}$ au voisinage du sol, $\\vec{E}$ entre les plaques d\'un condensateur plan.' },
        { term: 'Force dans un champ uniforme', def: 'Poids $\\vec{P} = m\\vec{g}$ (champ de pesanteur) ou force électrique $\\vec{F} = q\\vec{E}$ (champ électrique). Dans les deux cas, la force est <strong>constante</strong> tant que le système reste dans le champ.' },
        { term: 'Accélération constante ($\\vec{a}$)', def: 'D\'après le PFD, $\\vec{a} = \\dfrac{\\sum \\vec{F}}{m}$. Pour le champ de pesanteur, $\\vec{a} = \\vec{g}$ (indépendante de $m$) ; pour le champ électrique, $\\vec{a} = \\dfrac{q}{m}\\vec{E}$ (dépend du rapport charge sur masse $\\frac{q}{m}$).' },
        { term: 'Mouvement plan', def: 'Si la vitesse initiale $\\vec{v_0}$ et l\'accélération $\\vec{a}$ appartiennent à un même plan, tout le mouvement reste dans ce plan : la composante de position perpendiculaire à ce plan reste nulle à chaque instant.' },
        { term: 'Trajectoire parabolique', def: 'Courbe décrite par un point soumis à une accélération constante non colinéaire à sa vitesse initiale : une composante de la position varie linéairement avec le temps, l\'autre varie de façon quadratique.' }
      ],
      method: {
        title: 'Étudier un mouvement dans un champ uniforme en 3 étapes',
        steps: [
          '<strong>Choisir un repère</strong> $(O, \\vec{i}, \\vec{j}, \\vec{k})$ adapté, avec un axe aligné sur le champ (donc sur $\\vec{a}$) et un axe aligné sur $\\vec{v_0}$. Faire le bilan des forces, puis appliquer le PFD projeté sur les <strong>trois axes</strong> : $a_x = \\dfrac{\\sum F_x}{m}$, $a_y = \\dfrac{\\sum F_y}{m}$, $a_z = \\dfrac{\\sum F_z}{m}$. Si $\\vec{v_0}$ et $\\vec{a}$ sont dans le plan $(x,y)$, alors $a_z = 0$ et $v_{0z} = 0$, donc $z(t) = 0$ à tout instant : le mouvement est plan.',
          '<strong>Intégrer deux fois</strong> chaque composante pour obtenir la vitesse puis la position, en utilisant les conditions initiales $\\vec{v_0}$ et $\\vec{OM_0}$ à $t=0$ : $v_x(t) = v_{0x} + a_x t$, $x(t) = x_0 + v_{0x} t + \\frac{1}{2} a_x t^2$ (et de même pour $y$).<br/>Exemple typique : $\\vec{v_0}$ horizontal ($v_{0x}=v_0$, $v_{0y}=0$) et $\\vec{a}$ vertical ($a_x=0$, $a_y=a$) → $x(t)=v_0 t$ (mouvement uniforme) et $y(t) = \\frac{1}{2}at^2$ (mouvement uniformément accéléré).',
          '<strong>Éliminer le temps</strong> entre $x(t)$ et $y(t)$ pour obtenir l\'équation de la trajectoire $y = f(x)$, qui est une <strong>parabole</strong> : $y = \\dfrac{a}{2v_0^2}x^2$ dans le cas ci-dessus. C\'est cette équation qui permet de calculer une déviation ou une portée sans reconstruire toute la loi horaire.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mouvement dans un champ électrique uniforme',
        title: 'Déviation d\'une particule chargée entre deux plaques (champ uniforme)',
        description: 'Une particule chargée pénètre horizontalement entre deux plaques planes créant un champ électrique uniforme $\\vec{E}$. Elle subit une déviation parabolique à l\'intérieur du champ, puis poursuit en ligne droite après en être sortie.',
        svg: `
          <svg viewBox="0 0 640 320" role="img" aria-labelledby="champuni-title champuni-desc">
            <title id="champuni-title">Deviation d'une particule chargee dans un champ electrique uniforme entre deux plaques</title>
            <desc id="champuni-desc">Une particule chargee negativement entre horizontalement avec une vitesse v0 dans la region comprise entre deux plaques planes paralleles, la plaque superieure etant chargee positivement et la plaque inferieure negativement, creant un champ electrique uniforme oriente vers le bas. La particule est deviee vers la plaque positive, decrivant une trajectoire parabolique a l'interieur des plaques, avec une deviation notee ys a la sortie du champ. Apres la sortie des plaques, la particule poursuit en ligne droite jusqu'a un ecran, ou elle atteint une deviation totale notee Y, superieure a ys car la trajectoire rectiligne prolonge la pente acquise dans le champ.</desc>

            <defs>
              <marker id="arrow-phystle-champuni" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- plaques -->
            <rect class="frame-line" x="140" y="80" width="200" height="10" fill="none"></rect>
            <rect class="frame-line" x="140" y="220" width="200" height="10" fill="none"></rect>
            <text class="annotation-label" x="130" y="88" text-anchor="end">+</text>
            <text class="annotation-label" x="130" y="235" text-anchor="end">−</text>

            <!-- champ E (fleches vers le bas dans l'entrefer) -->
            <line class="guide-line" x1="190" y1="100" x2="190" y2="215" marker-end="url(#arrow-phystle-champuni)"></line>
            <line class="guide-line" x1="240" y1="100" x2="240" y2="215" marker-end="url(#arrow-phystle-champuni)"></line>
            <line class="guide-line" x1="290" y1="100" x2="290" y2="215" marker-end="url(#arrow-phystle-champuni)"></line>
            <text class="tick-label" x="240" y="65" text-anchor="middle">E</text>

            <!-- axe de reference (trajectoire sans champ) -->
            <line class="guide-line" x1="20" y1="160" x2="620" y2="160"></line>

            <!-- vitesse initiale v0 -->
            <line class="curve-main" x1="80" y1="160" x2="140" y2="160" marker-end="url(#arrow-phystle-champuni)"></line>
            <text class="annotation-label" x="90" y="150">v₀</text>
            <circle class="plot-point" cx="80" cy="160" r="5"></circle>

            <!-- trajectoire parabolique dans le champ -->
            <path class="curve-main" fill="none" d="M140,160 Q240,160 340,120"></path>
            <circle class="plot-point-alt" cx="340" cy="120" r="5"></circle>

            <!-- trajectoire rectiligne apres le champ -->
            <path class="curve-main" fill="none" stroke-dasharray="0" d="M340,120 L520,48"></path>

            <!-- ecran -->
            <line class="frame-line" x1="520" y1="20" x2="520" y2="300"></line>
            <text class="label-soft" x="520" y="312" text-anchor="middle">Écran</text>
            <circle class="plot-point" cx="520" cy="48" r="5"></circle>

            <!-- cotation ys (deviation en sortie de plaques) -->
            <line class="guide-line" x1="340" y1="160" x2="340" y2="120"></line>
            <text class="tick-label" x="352" y="142" text-anchor="start">y_s</text>

            <!-- cotation Y (deviation totale sur l'ecran) -->
            <line class="guide-line" x1="540" y1="160" x2="540" y2="48"></line>
            <line class="guide-line" x1="520" y1="160" x2="540" y2="160"></line>
            <line class="guide-line" x1="520" y1="48" x2="540" y2="48"></line>
            <text class="tick-label" x="552" y="105" text-anchor="start">Y</text>

            <!-- reperes bas -->
            <text class="label-soft" x="80" y="178" text-anchor="middle">Entrée</text>
            <text class="label-soft" x="240" y="255" text-anchor="middle">Longueur des plaques L</text>
          </svg>
        `,
        notes: [
          'Entre les plaques, la particule chargée négativement est soumise à une force électrique $\\vec{F}=q\\vec{E}$ dirigée <strong>vers la plaque positive</strong> (sens opposé à $\\vec{E}$ car $q<0$) : c\'est un champ uniforme, donc une accélération constante, donc une trajectoire <strong>parabolique</strong> à l\'intérieur des plaques.',
          'À la sortie des plaques (abscisse $L$), la particule n\'est plus soumise à aucune force : elle poursuit en <strong>ligne droite</strong>, dans la direction acquise à la sortie du champ, jusqu\'à l\'écran.',
          'La déviation totale $Y$ sur l\'écran est <strong>plus grande</strong> que la déviation $y_s$ en sortie de plaques : la pente acquise dans le champ continue à faire dévier la trajectoire tout le long du parcours rectiligne jusqu\'à l\'écran.'
        ],
        reading: 'Suis la particule depuis son entrée à gauche (vitesse $v_0$ horizontale), observe la courbure vers la plaque positive à l\'intérieur du champ, puis la trajectoire rectiligne après la sortie des plaques jusqu\'à l\'impact sur l\'écran.',
        caption: 'Déviation d\'une particule chargée dans un champ électrique uniforme : trajectoire parabolique entre les plaques (déviation $y_s$), puis rectiligne jusqu\'à l\'écran (déviation totale $Y > y_s$).'
      },
      example: {
        statement: 'Un électron (charge $q = -1{,}6\\times10^{-19}$ C, masse $m = 9{,}1\\times10^{-31}$ kg) pénètre avec une vitesse horizontale $v_0 = 2{,}0\\times10^7$ m/s entre deux plaques horizontales distantes de $d = 2{,}0$ cm, créant un champ électrique uniforme $E = 4{,}0\\times10^4$ V/m, sur une longueur de plaques $L = 4{,}0$ cm.<br/><br/>Calculer la déviation $y_s$ subie par l\'électron à la sortie des plaques.',
        steps: [
          'Le poids de l\'électron est totalement négligeable devant la force électrique (particule très légère) : seule la force électrique $\\vec{F}=q\\vec{E}$ est prise en compte.',
          'PFD projeté sur l\'axe perpendiculaire aux plaques : $ma = |q|E$, donc $a = \\dfrac{|q|E}{m} = \\dfrac{1{,}6\\times10^{-19} \\times 4{,}0\\times10^{4}}{9{,}1\\times10^{-31}} \\approx 7{,}03\\times10^{15}$ m/s².',
          'Durée de traversée des plaques (mouvement uniforme selon l\'axe horizontal) : $t = \\dfrac{L}{v_0} = \\dfrac{4{,}0\\times10^{-2}}{2{,}0\\times10^{7}} = 2{,}0\\times10^{-9}$ s.',
          'Déviation perpendiculaire (mouvement uniformément accéléré, sans vitesse initiale sur cet axe) : $y_s = \\dfrac{1}{2}at^2 = \\dfrac{1}{2} \\times 7{,}03\\times10^{15} \\times (2{,}0\\times10^{-9})^2 \\approx 1{,}41\\times10^{-2}$ m, soit $1{,}41$ cm.'
        ],
        answer: '$y_s \\approx 1{,}41$ cm, ce qui reste inférieur à $\\dfrac{d}{2}=1{,}0$ cm… <strong>attention</strong>, ici $y_s > d/2$ : l\'électron heurterait en réalité la plaque positive avant la fin du parcours ! Ce résultat illustre l\'importance de vérifier que $y_s$ reste bien inférieur au demi-écartement des plaques pour que le modèle reste valide.'
      },
      formulas: [
        'PFD dans un champ uniforme : $\\vec{a} = \\dfrac{\\sum\\vec{F}}{m}$, constante en norme, direction et sens',
        'Champ de pesanteur : $\\vec{a} = \\vec{g}$ (indépendante de $m$) — Champ électrique : $\\vec{a} = \\dfrac{q}{m}\\vec{E}$ (dépend de $\\frac{q}{m}$)',
        'Équations horaires (axe $x$ selon $v_0$, axe $y$ selon $a$) : $x(t)=v_0 t$ et $y(t) = \\dfrac{1}{2}at^2$',
        'Équation de la trajectoire (parabole) : $y = \\dfrac{a}{2v_0^2}x^2$',
        'Déviation en sortie de champ (longueur de plaques $L$) : $y_s = \\dfrac{aL^2}{2v_0^2}$'
      ],
      recap: [
        'Un champ uniforme produit une <strong>force constante</strong>, donc, via le PFD, une <strong>accélération constante</strong> : c\'est cette constance qui rend la trajectoire parabolique.',
        'Si $\\vec{v_0}$ et $\\vec{a}$ appartiennent au même plan, le mouvement reste entièrement dans ce plan : projeter le PFD sur trois axes fait apparaître une troisième équation triviale ($a_z=0$, $v_{0z}=0$ donc $z(t)=0$).',
        'Le champ de pesanteur $\\vec{g}$ donne une accélération indépendante de la masse ; le champ électrique $\\vec{E}$ donne une accélération qui dépend du rapport $\\frac{q}{m}$ de la particule chargée.',
        'Après la sortie du champ, aucune force ne s\'exerce plus : le mouvement redevient rectiligne uniforme, dans la direction acquise à la sortie — la déviation continue donc d\'augmenter jusqu\'à l\'écran.'
      ],
      piege: 'Une confusion fréquente consiste à croire que la trajectoire reste parabolique après la sortie du champ, alors que la particule n\'est plus soumise à aucune force dès qu\'elle a quitté la région où règne le champ uniforme. Attention à toujours identifier la <strong>zone où le champ existe réellement</strong> (les plaques, la portée du champ de pesanteur…) : au-delà, le mouvement est rectiligne uniforme, dans la direction acquise à la sortie.'
    },

    quiz: [
      {
        q: 'Un système est soumis à un champ uniforme. Que peut-on dire de la force qu\'il subit tout au long de son mouvement dans ce champ ?',
        options: [
          'Elle varie en direction mais garde une norme constante',
          'Elle est constante en norme, en direction et en sens',
          'Elle est nulle car le champ est uniforme',
          'Elle varie proportionnellement à la vitesse du système'
        ],
        answer: 1,
        correction: 'Par définition, un champ uniforme a la même valeur (norme, direction, sens) en tout point de la région étudiée. La force qui en résulte ($\\vec{P}=m\\vec{g}$ ou $\\vec{F}=q\\vec{E}$) est donc elle aussi <strong>constante</strong>, ce qui entraîne, via le PFD, une accélération constante.'
      },
      {
        q: 'Une particule entre dans un champ électrique uniforme avec une vitesse initiale $\\vec{v_0}$ perpendiculaire au champ $\\vec{E}$. Quelle est la nature de sa trajectoire à l\'intérieur du champ ?',
        options: [
          'Rectiligne uniforme',
          'Circulaire',
          'Parabolique',
          'Rectiligne uniformément accéléré'
        ],
        answer: 2,
        correction: 'La composante de la vitesse selon $\\vec{v_0}$ reste uniforme (aucune force sur cet axe), tandis que la composante selon $\\vec{E}$ est uniformément accélérée : la combinaison des deux donne une trajectoire <strong>parabolique</strong>, exactement comme un projectile dans le champ de pesanteur.'
      },
      {
        q: 'Après être sortie d\'un champ électrique uniforme (entre deux plaques), une particule chargée poursuit son mouvement :',
        options: [
          'En ralentissant progressivement jusqu\'à s\'arrêter',
          'En ligne droite, à vitesse constante, dans la direction acquise à la sortie',
          'En suivant une nouvelle parabole, inversée',
          'En revenant vers son point de départ'
        ],
        answer: 1,
        correction: 'Une fois sortie du champ, la particule n\'est plus soumise à aucune force (poids négligeable devant la force électrique pour une particule chargée légère) : d\'après le principe d\'inertie, son mouvement devient <strong>rectiligne uniforme</strong>, dans la direction de la vitesse acquise à la sortie du champ.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['projectile', 'deflexion']);
        var g = 9.81;

        if (typeExo === 'projectile') {
          var v0 = rand(8, 30);
          var h = rand(10, 60);
          var t = parseFloat(Math.sqrt(2 * h / g).toFixed(2));
          var contexte = pick([
            'un ballon de basket lancé horizontalement depuis un balcon',
            'une balle de golf frappée au sommet d\'une falaise',
            'un colis largué horizontalement par un drone',
            'un plongeur s\'élançant horizontalement d\'un plongeoir',
            'un skieur s\'élançant horizontalement au sommet d\'un tremplin'
          ]);
          var xVal = parseFloat((v0 * t).toFixed(1));
          return {
            statement: 'Dans une modélisation représentant ' + contexte + ', un point matériel est lancé horizontalement avec une vitesse $v_0 = ' + v0 + '$ m/s depuis une hauteur $h = ' + h + '$ m. On néglige les frottements de l\'air et on prend $g = 9{,}81$ m/s².<br/><br/>Calcule la portée horizontale $x$ parcourue avant que le point matériel touche le sol (en m, arrondie au dixième).',
            answer: xVal,
            tolerance: Math.max(0.3, parseFloat((xVal * 0.03).toFixed(2))),
            unit: 'm',
            hint: 'Le champ de pesanteur est uniforme : $x(t)=v_0 t$ (axe horizontal) et $y(t)=\\frac{1}{2}gt^2$ (axe vertical). Trouve d\'abord $t$ tel que $y(t)=h$.',
            solution: [
              'Sur l\'axe vertical (accélération $g$, vitesse initiale nulle) : $h = \\dfrac{1}{2}gt^2$, donc $t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2 \\times ' + h + '}{9{,}81}} \\approx ' + fr(t, 2) + '$ s.',
              'Sur l\'axe horizontal, aucune force n\'agit : le mouvement est uniforme, $x(t) = v_0 \\times t$.',
              'Application numérique : $x = ' + v0 + ' \\times ' + fr(t, 2) + '$.',
              'Résultat : $x \\approx ' + fr(xVal, 1) + '$ m.'
            ]
          };
        } else {
          var qm = pick([2, 3, 4, 5, 6, 8]) * 1e10;
          var qmCoeff = qm / 1e10;
          var E = pick([1000, 2000, 3000, 4000, 5000]);
          var L = randFloat(2, 6, 1);
          var v0e = pick([1, 1.5, 2, 2.5, 3]) * 1e6;
          var v0Coeff = v0e / 1e6;
          var Lm = L / 100;
          var a = qm * E;
          var ys = parseFloat(((a * Lm * Lm) / (2 * v0e * v0e) * 1000).toFixed(2));
          var contexte2 = pick([
            'un spectromètre de masse de laboratoire',
            'un ancien tube cathodique d\'oscilloscope',
            'une expérience de déviation de particules chargées',
            'un dispositif pédagogique de déviation électrostatique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', une particule chargée de rapport charge sur masse $\\dfrac{q}{m} = ' + fr(qmCoeff, 0) + '\\times10^{10}$ C/kg pénètre avec une vitesse horizontale $v_0 = ' + fr(v0Coeff, 1) + '\\times10^{6}$ m/s entre deux plaques créant un champ électrique uniforme $E = ' + E + '$ V/m, sur une longueur de plaques $L = ' + fr(L, 1) + '$ cm.<br/><br/>Calcule la déviation $y_s$ subie par la particule à la sortie des plaques (en mm, arrondie au centième).',
            answer: ys,
            tolerance: Math.max(0.05, parseFloat((ys * 0.05).toFixed(2))),
            unit: 'mm',
            hint: 'Accélération $a = \\dfrac{q}{m}E$, puis $y_s = \\dfrac{1}{2}at^2$ avec $t=\\dfrac{L}{v_0}$ (convertis $L$ en mètres).',
            solution: [
              'Accélération : $a = \\dfrac{q}{m}E = ' + fr(qmCoeff, 0) + '\\times10^{10} \\times ' + E + '$ m/s².',
              'Durée de traversée : $t = \\dfrac{L}{v_0}$, avec $L = ' + fr(L, 1) + '$ cm $= ' + fr(Lm, 4) + '$ m.',
              'Déviation : $y_s = \\dfrac{1}{2}at^2$ (vitesse initiale nulle sur cet axe).',
              'Résultat : $y_s \\approx ' + fr(ys, 2) + '$ mm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une goutte d\'encre chargée, de masse $m = 1{,}0\\times10^{-10}$ kg et de charge $q = 2{,}0\\times10^{-13}$ C, pénètre horizontalement avec une vitesse $v_0 = 20$ m/s entre deux électrodes déviatrices d\'une imprimante à jet d\'encre, distantes créant un champ électrique uniforme $E = 5{,}0\\times10^5$ V/m, sur une longueur de plaques $L = 1{,}0$ cm. On néglige le poids de la goutte devant la force électrique.',
      tasks: [
        'Calculer l\'accélération $a$ subie par la goutte d\'encre à l\'intérieur du champ.',
        'Calculer la durée $t$ de traversée des plaques.',
        'En déduire la déviation $y_s$ de la goutte d\'encre à la sortie des plaques.'
      ],
      solutions: [
        'PFD projeté sur l\'axe perpendiculaire à $v_0$ : $ma = qE$, donc $a = \\dfrac{qE}{m} = \\dfrac{2{,}0\\times10^{-13} \\times 5{,}0\\times10^{5}}{1{,}0\\times10^{-10}} = 1{,}0\\times10^{3}$ m/s².',
        'Mouvement uniforme sur l\'axe horizontal : $t = \\dfrac{L}{v_0} = \\dfrac{1{,}0\\times10^{-2}}{20} = 5{,}0\\times10^{-4}$ s.',
        '$y_s = \\dfrac{1}{2}at^2 = \\dfrac{1}{2} \\times 1{,}0\\times10^{3} \\times (5{,}0\\times10^{-4})^2 = \\dfrac{1}{2} \\times 1{,}0\\times10^{3} \\times 2{,}5\\times10^{-7} = 1{,}25\\times10^{-4}$ m, soit $0{,}125$ mm.'
      ],
      finalAnswer: '$y_s \\approx 0{,}125$ mm. En ajustant la charge $q$ déposée sur chaque goutte, une imprimante à jet d\'encre contrôle précisément la déviation de chaque goutte pour former les caractères sur le papier : c\'est une application directe et très concrète du mouvement dans un champ électrique uniforme.'
    },

    evaluation: {
      title: 'Évaluation — Mouvement dans un champ uniforme',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un champ uniforme, l\'accélération $\\vec{a}$ subie par un système est :',
          type: 'multiple-choice',
          options: [
            'Variable en direction, constante en norme',
            'Constante en norme, en direction et en sens',
            'Toujours nulle',
            'Proportionnelle à la vitesse'
          ],
          answer: 1,
          points: 2,
          correction: 'Un champ uniforme produit une force constante, donc, via le PFD ($\\vec{a}=\\sum\\vec{F}/m$), une accélération constante en norme, direction et sens.'
        },
        {
          statement: 'Un point matériel est lancé horizontalement avec $v_0 = 12$ m/s depuis une hauteur $h = 20$ m ($g = 9{,}81$ m/s²). Calculer la durée de chute (en s, arrondie au dixième).',
          type: 'numeric',
          answer: 2.0,
          tolerance: 0.1,
          unit: 's',
          points: 2,
          correction: '$h = \\dfrac{1}{2}gt^2$, donc $t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2 \\times 20}{9{,}81}} \\approx 2{,}0$ s.'
        },
        {
          statement: 'Avec les données de la question précédente, calculer la portée horizontale $x$ (en m, arrondie à l\'unité).',
          type: 'numeric',
          answer: 24,
          tolerance: 1,
          unit: 'm',
          points: 2,
          correction: '$x = v_0 \\times t = 12 \\times 2{,}0 = 24$ m.'
        },
        {
          statement: 'Une particule chargée sort d\'un champ électrique uniforme (entre deux plaques) avec une déviation $y_s$. Après la sortie des plaques, sans aucun autre champ, la déviation totale sur un écran situé plus loin :',
          type: 'multiple-choice',
          options: [
            'Reste strictement égale à $y_s$',
            'Continue d\'augmenter, le mouvement devenant rectiligne uniforme',
            'Diminue progressivement jusqu\'à s\'annuler',
            'Devient à nouveau parabolique, mais inversée'
          ],
          answer: 1,
          points: 2,
          correction: 'Après la sortie du champ, plus aucune force ne s\'exerce (poids négligé) : le mouvement devient rectiligne uniforme dans la direction acquise à la sortie, donc la déviation continue d\'augmenter jusqu\'à l\'écran.'
        },
        {
          statement: 'Pourquoi la trajectoire d\'un système dans un champ de pesanteur uniforme est-elle indépendante de sa masse ?',
          type: 'multiple-choice',
          options: [
            'Parce que le poids est toujours négligeable',
            'Parce que $\\vec{a}=\\vec{g}$ ne dépend pas de $m$ : le poids ($m\\vec{g}$) et l\'inertie ($m\\vec{a}$) font intervenir la même masse, qui se simplifie',
            'Parce que la masse n\'intervient jamais dans le PFD',
            'Parce que le champ de pesanteur dépend de la masse du système'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PFD donne $m\\vec{a} = m\\vec{g}$, donc $\\vec{a}=\\vec{g}$ : la masse se simplifie car elle intervient à la fois dans la force (poids) et dans l\'inertie (terme $m\\vec{a}$). C\'est pourquoi deux objets de masses différentes suivent la même trajectoire dans le champ de pesanteur (en l\'absence de frottement).'
        }
      ]
    }
  });
