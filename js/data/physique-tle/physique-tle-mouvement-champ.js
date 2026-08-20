/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-mouvement-champ.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-mouvement-champ',
    level: 2, subject: 'physique',
    icon: '🎯',
    title: 'Mouvement dans un champ uniforme',
    subtitle: 'Chute libre dans le champ de pesanteur, déviation d\'une particule chargée dans un champ électrique uniforme, trajectoire parabolique',
    keywords: ['Champ uniforme', 'PFD', 'Trajectoire parabolique', 'Déviation électrostatique', 'Chute libre'],
    physics: 'Le mouvement dans un champ uniforme explique la trajectoire des projectiles (balistique, sports, arrosage agricole), le principe de déviation électrostatique utilisé dans les oscilloscopes cathodiques et les imprimantes à jet d\'encre, ainsi que le tri de particules chargées dans les spectromètres de masse.',

    cours: {
      intro: 'Un point matériel placé dans un <strong>champ uniforme</strong> — champ de pesanteur $\\vec{g}$ au voisinage du sol, ou champ électrique $\\vec{E}$ entre deux plaques planes parallèles — subit une force <strong>constante</strong> en direction, en sens et en norme.<br/><br/>D\'après le principe fondamental de la dynamique (PFD), une force constante produit une <strong>accélération constante</strong> $\\vec{a}$. Si la vitesse initiale $\\vec{v_0}$ du point matériel est colinéaire à cette accélération, le mouvement reste rectiligne. Mais si $\\vec{v_0}$ n\'est <strong>pas colinéaire</strong> à $\\vec{a}$ — ce qui est le cas général —, le mouvement se décompose en une direction où la vitesse reste constante et une direction où elle varie uniformément : la trajectoire est alors une <strong>parabole</strong>.<br/><br/>Cette méthode s\'applique aussi bien à un projectile dans le champ de pesanteur (chute libre, tir oblique) qu\'à une particule chargée déviée dans un champ électrique uniforme (oscilloscope cathodique, spectromètre de masse) : seule change la force à l\'origine de l\'accélération.',
      definitions: [
        { term: 'Champ uniforme', def: 'Région de l\'espace où un champ vectoriel (de pesanteur $\\vec{g}$ ou électrique $\\vec{E}$) garde la <strong>même direction, le même sens et la même norme</strong> en tout point. Exemples : champ de pesanteur au voisinage du sol, champ électrique entre deux plaques planes parallèles portées à des potentiels différents.' },
        { term: 'Champ de pesanteur ($\\vec{g}$)', def: 'Champ vectoriel responsable du poids $\\vec{P} = m\\vec{g}$ d\'un corps. Au voisinage du sol, il est assimilé à un champ uniforme, vertical, orienté vers le bas, de norme $g \\approx 9{,}81$ m/s².' },
        { term: 'Champ électrique uniforme ($\\vec{E}$)', def: 'Entre deux plaques planes parallèles distantes de $d$ et soumises à une tension $U$, le champ électrique est uniforme, dirigé de la plaque $+$ vers la plaque $-$, de norme $E = \\dfrac{U}{d}$ (en V/m).' },
        { term: 'Trajectoire parabolique', def: 'Trajectoire obtenue lorsqu\'un point matériel est soumis à une force constante <strong>non colinéaire</strong> à sa vitesse initiale $\\vec{v_0}$ : le mouvement se décompose en une composante rectiligne uniforme (direction de $\\vec{v_0}$) et une composante uniformément accélérée (direction de la force).' }
      ],
      method: {
        title: 'Étudier un mouvement dans un champ uniforme en 3 étapes',
        steps: [
          '<strong>Modéliser</strong> : définir le système (point matériel de masse $m$, de charge $q$ le cas échéant), le référentiel (terrestre, supposé galiléen) et faire le bilan des forces.<br/>Exemple : pour une particule chargée entre deux plaques, le poids est presque toujours totalement négligeable devant la force électrique (rapport de l\'ordre de $10^{-13}$ pour un électron) : seule la force électrique $\\vec{F} = q\\vec{E}$ est prise en compte.',
          '<strong>Appliquer le PFD</strong> puis projeter sur deux axes : l\'axe de $\\vec{v_0}$ (accélération nulle, mouvement uniforme) et l\'axe de la force (accélération constante $a = \\dfrac{F}{m}$, mouvement uniformément accéléré).<br/>Exemple : pour un projectile lancé horizontalement dans le champ de pesanteur, l\'axe horizontal est uniforme et l\'axe vertical est uniformément accéléré avec $a = g$.',
          '<strong>Intégrer</strong> deux fois chaque équation horaire à partir des conditions initiales, puis éliminer le temps $t$ (en général $t = \\dfrac{x}{v_0}$) pour obtenir l\'équation de la trajectoire $y = f(x)$, qui est celle d\'une parabole.<br/>Astuce : la moitié du travail est commune aux deux cas (pesanteur ou champ électrique) — seule la force injectée dans le PFD change.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mouvement dans un champ électrique uniforme',
        title: 'Déviation d\'une particule chargée entre deux plaques planes (condensateur plan)',
        description: 'Entre deux plaques planes parallèles portées à des potentiels différents, le champ électrique $\\vec{E}$ est uniforme. Une particule chargée y suit une trajectoire parabolique, exactement comme un projectile dans le champ de pesanteur.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="dev-elec-title dev-elec-desc">
            <title id="dev-elec-title">Deviation d'une particule chargee entre deux plaques planes</title>
            <desc id="dev-elec-desc">Une particule chargee penetre horizontalement au milieu de deux plaques planes paralleles, la plaque superieure positive et la plaque inferieure negative. Le champ electrique uniforme entre les plaques est oriente vers le bas, de la plaque positive vers la plaque negative. La particule, de charge negative, subit une force electrique orientee vers le haut et suit une trajectoire parabolique qui la rapproche de la plaque superieure. A la sortie des plaques, elle poursuit en ligne droite jusqu'a un ecran, ou sa deviation totale est mesuree, nettement plus grande que la deviation a la sortie des plaques. L'echelle de la deviation est exageree par rapport aux dimensions du dispositif pour rester lisible.</desc>

            <defs>
              <marker id="arrow-tle-champ" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- plaques -->
            <rect class="frame-line" x="150" y="76" width="250" height="10" fill="none"></rect>
            <rect class="frame-line" x="150" y="214" width="250" height="10" fill="none"></rect>
            <text class="annotation-label" x="136" y="85" text-anchor="end">+</text>
            <text class="annotation-label" x="136" y="223" text-anchor="end">−</text>

            <!-- champ E (fleches vers le bas) -->
            <line class="curve-main" x1="210" y1="92" x2="210" y2="208" marker-end="url(#arrow-tle-champ)"></line>
            <line class="curve-main" x1="275" y1="92" x2="275" y2="208" marker-end="url(#arrow-tle-champ)"></line>
            <line class="curve-main" x1="340" y1="92" x2="340" y2="208" marker-end="url(#arrow-tle-champ)"></line>
            <text class="tick-label" x="307" y="104" text-anchor="middle">E</text>

            <!-- ligne mediane pointillee -->
            <line class="guide-line" x1="100" y1="150" x2="400" y2="150"></line>

            <!-- vecteur v0 a l'entree -->
            <line class="curve-main" x1="103" y1="150" x2="150" y2="150" marker-end="url(#arrow-tle-champ)"></line>
            <text class="tick-label" x="126" y="138" text-anchor="middle">v₀</text>
            <circle class="plot-point" cx="150" cy="150" r="4"></circle>

            <!-- trajectoire parabolique exacte (Bezier quadratique = parabole) -->
            <path class="curve-main" fill="none" d="M150,150 Q275,150 400,110"></path>
            <!-- continuation rectiligne (tangente a la sortie) jusqu'a l'ecran -->
            <line class="curve-main" x1="400" y1="110" x2="520" y2="71.6"></line>

            <!-- force electrique F, representee au milieu de la traversee -->
            <line class="curve-main" x1="275" y1="140" x2="275" y2="113" marker-end="url(#arrow-tle-champ)"></line>
            <text class="annotation-label" x="284" y="118" text-anchor="start">F</text>

            <!-- point de sortie des plaques + cotation yL -->
            <circle class="plot-point" cx="400" cy="110" r="4"></circle>
            <line class="guide-line" x1="400" y1="150" x2="412" y2="150"></line>
            <line class="guide-line" x1="400" y1="110" x2="412" y2="110"></line>
            <line class="guide-line" x1="412" y1="150" x2="412" y2="110"></line>
            <text class="tick-label" x="418" y="134" text-anchor="start">yₗ</text>

            <!-- ecran -->
            <line class="frame-line" x1="520" y1="50" x2="520" y2="250"></line>
            <text class="label-soft" x="520" y="264" text-anchor="middle">Écran</text>
            <circle class="plot-point-alt" cx="520" cy="71.6" r="4"></circle>

            <!-- cotation deviation totale Y sur l'ecran -->
            <line class="guide-line" x1="520" y1="150" x2="536" y2="150"></line>
            <line class="guide-line" x1="520" y1="71.6" x2="536" y2="71.6"></line>
            <line class="guide-line" x1="536" y1="150" x2="536" y2="71.6"></line>
            <text class="tick-label" x="542" y="114" text-anchor="start">Y</text>
          </svg>
        `,
        notes: [
          'Le champ électrique $\\vec{E}$ entre les plaques est uniforme : il pointe de la plaque <strong>positive</strong> vers la plaque <strong>négative</strong>, avec une norme $E=\\dfrac{U}{d}$.',
          'La particule représentée porte une charge <strong>négative</strong> : la force électrique $\\vec{F}=q\\vec{E}$ est de sens <strong>opposé</strong> à $\\vec{E}$, donc dirigée vers la plaque positive.',
          'Comme pour un projectile dans le champ de pesanteur, le mouvement horizontal est <strong>uniforme</strong> (vitesse $v_0$ constante) tandis que le mouvement vertical est <strong>uniformément accéléré</strong> : la trajectoire entre les plaques est une parabole, puis rectiligne au-delà.'
        ],
        reading: 'Suis la particule depuis son entrée à gauche (vitesse $v_0$ horizontale) jusqu\'à sa sortie des plaques, puis jusqu\'à l\'écran : la déviation $y_L$ à la sortie des plaques est nettement plus petite que la déviation totale $Y$ mesurée sur l\'écran.',
        caption: 'Déviation électrostatique d\'une particule chargée entre deux plaques planes : trajectoire parabolique entre les plaques, puis rectiligne jusqu\'à l\'écran (échelle de la déviation exagérée pour la lisibilité).'
      },
      example: {
        statement: 'Un faisceau d\'électrons pénètre horizontalement, au milieu de deux plaques planes parallèles distantes de $d=2{,}5$ cm et longues de $L=3{,}0$ cm, soumises à une tension $U=200$ V (plaque supérieure au potentiel le plus élevé). La vitesse d\'entrée est $v_0=2{,}5\\times10^7$ m/s. On donne la charge élémentaire $e=1{,}6\\times10^{-19}$ C et la masse de l\'électron $m_e=9{,}11\\times10^{-31}$ kg.<br/><br/>Calculer le champ électrique $E$, l\'accélération subie par un électron, puis sa déviation verticale $y_L$ à la sortie des plaques.',
        steps: [
          'Le champ électrique entre les plaques est uniforme : $E=\\dfrac{U}{d}=\\dfrac{200}{2{,}5\\times10^{-2}}=8\\,000$ V/m.',
          'L\'électron porte la charge $q=-e$. La force électrique $\\vec{F}=q\\vec{E}$ est donc de sens opposé à $\\vec{E}$ : comme $\\vec{E}$ pointe vers la plaque négative (vers le bas), $\\vec{F}$ pointe vers la plaque positive (vers le haut). Par le PFD, l\'accélération a pour norme $a=\\dfrac{eE}{m_e}=\\dfrac{1{,}6\\times10^{-19}\\times8\\,000}{9{,}11\\times10^{-31}}\\approx1{,}41\\times10^{15}$ m/s².',
          'Le mouvement horizontal est uniforme : la durée de traversée des plaques est $t=\\dfrac{L}{v_0}=\\dfrac{3{,}0\\times10^{-2}}{2{,}5\\times10^7}=1{,}2\\times10^{-9}$ s.',
          'Le mouvement vertical est uniformément accéléré à partir d\'une vitesse verticale nulle : $y_L=\\dfrac{1}{2}at^2=\\dfrac{1}{2}\\times1{,}41\\times10^{15}\\times(1{,}2\\times10^{-9})^2\\approx1{,}01\\times10^{-3}$ m, soit environ $1{,}01$ mm.'
        ],
        answer: '$E=8\\,000$ V/m, $a\\approx1{,}41\\times10^{15}$ m/s² et $y_L\\approx1{,}01$ mm. Cette déviation, bien qu\'inférieure au demi-écart entre les plaques ($d/2=12{,}5$ mm), est amplifiée après la sortie des plaques par la poursuite rectiligne du faisceau jusqu\'à un écran : c\'est le principe exploité par les oscilloscopes cathodiques.'
      },
      formulas: [
        '$\\vec{F} = q\\vec{E}$ (force électrique subie par une charge $q$ dans un champ $\\vec{E}$)',
        'Champ uniforme entre deux plaques planes : $E=\\dfrac{U}{d}$',
        'PFD : $\\sum \\vec{F} = m\\vec{a}$, soit $a=\\dfrac{F}{m}$ (accélération constante dans un champ uniforme)',
        'Équations horaires : $x(t)=v_0 t$ (axe de $\\vec{v_0}$) et $y(t)=\\dfrac{1}{2}at^2$ (axe de la force)',
        'Équation de la trajectoire (parabole) : $y=\\dfrac{a}{2v_0^2}x^2$',
        'Chute libre (champ de pesanteur) : $a=g\\approx9{,}81$ m/s², indépendante de la masse'
      ],
      recap: [
        'Dans un champ <strong>uniforme</strong> (pesanteur ou électrique), la force subie par un point matériel est constante : son accélération l\'est donc aussi, quelle que soit sa vitesse.',
        'Si la vitesse initiale $\\vec{v_0}$ n\'est pas colinéaire à la force, le mouvement est <strong>parabolique</strong> : uniforme dans la direction de $\\vec{v_0}$, uniformément accéléré dans la direction de la force.',
        'Pour une particule chargée, le sens de la déviation dépend du <strong>signe de la charge</strong> : une charge négative est déviée vers la plaque positive, une charge positive vers la plaque négative.',
        'La méthode est identique pour un projectile dans le champ de pesanteur et pour une particule chargée dans un champ électrique uniforme : seule change la force à l\'origine de l\'accélération.'
      ],
      piege: 'Une confusion fréquente consiste à penser qu\'une particule chargée se déplace toujours dans le sens du champ électrique $\\vec{E}$ : c\'est vrai uniquement pour une charge positive, alors qu\'une charge négative (comme l\'électron) subit une force $\\vec{F}=q\\vec{E}$ de sens opposé à $\\vec{E}$. Attention à toujours déterminer le signe de la charge avant de tracer le sens de la force et de la déviation, plutôt que de suivre instinctivement le sens des flèches de champ électrique.'
    },

    quiz: [
      {
        q: 'Un point matériel est lancé avec une vitesse initiale $\\vec{v_0}$ non parallèle à un champ uniforme (de pesanteur ou électrique) auquel il est soumis. Pourquoi sa trajectoire est-elle parabolique ?',
        options: [
          'Parce que le mouvement se décompose en une composante rectiligne uniforme (direction de $\\vec{v_0}$) et une composante uniformément accélérée (direction du champ)',
          'Parce que la norme de la vitesse reste constante au cours du mouvement',
          'Parce que le champ varie en direction au cours du temps',
          'Parce que la masse du point matériel varie au cours du mouvement'
        ],
        answer: 0,
        correction: 'Le champ étant uniforme, la force et donc l\'accélération sont constantes. Projetée sur deux axes (celui de $\\vec{v_0}$ et celui du champ), l\'accélération donne un mouvement uniforme sur le premier axe et uniformément accéléré sur le second : la combinaison des deux produit une trajectoire parabolique.'
      },
      {
        q: 'Un électron (charge négative) pénètre entre deux plaques planes horizontales, la plaque supérieure étant portée au potentiel le plus élevé. Vers quelle plaque l\'électron est-il dévié ?',
        options: [
          'Vers la plaque supérieure (positive)',
          'Vers la plaque inférieure (négative)',
          'Il n\'est dévié dans aucune direction',
          'Il oscille entre les deux plaques'
        ],
        answer: 0,
        correction: 'Le champ $\\vec{E}$ pointe de la plaque positive vers la plaque négative, donc vers le bas. La force électrique sur l\'électron, $\\vec{F}=q\\vec{E}$ avec $q=-e &lt; 0$, est de sens opposé à $\\vec{E}$ : elle pointe donc vers le haut, vers la plaque positive.'
      },
      {
        q: 'Une particule de masse $m=2{,}0\\times10^{-6}$ kg et de charge $q=5{,}0\\times10^{-8}$ C est placée dans un champ électrique uniforme $E=4{,}0\\times10^4$ V/m. Quelle est la norme de son accélération ?',
        options: [
          '$a=1{,}0\\times10^{3}$ m/s²',
          '$a=2{,}0\\times10^{-3}$ m/s²',
          '$a=2{,}5\\times10^{-10}$ m/s²',
          '$a=8{,}0\\times10^{-4}$ m/s²'
        ],
        answer: 0,
        correction: '$a=\\dfrac{qE}{m}=\\dfrac{5{,}0\\times10^{-8}\\times4{,}0\\times10^4}{2{,}0\\times10^{-6}}=\\dfrac{2{,}0\\times10^{-3}}{2{,}0\\times10^{-6}}=1{,}0\\times10^3$ m/s². Attention à ne pas s\'arrêter au produit $qE$ (qui est une force, en newtons) : il faut bien diviser par la masse pour obtenir une accélération.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        function sci(value, decimals) {
          if (value === 0) return '0';
          var exp = Math.floor(Math.log10(Math.abs(value)));
          var mant = parseFloat((value / Math.pow(10, exp)).toFixed(decimals));
          if (Math.abs(mant) >= 10) { mant = parseFloat((mant / 10).toFixed(decimals)); exp += 1; }
          return fr(mant, decimals) + ' \\times 10^{' + exp + '}';
        }

        var typeExo = pick(['deviation', 'champPesanteur']);

        if (typeExo === 'deviation') {
          var U = pick([100, 150, 200, 250, 300]);
          var dCm = pick([2, 2.5, 3, 3.5, 4]);
          var LCm = pick([2, 3, 4]);
          var v0 = 2.5e7;
          var e = 1.6e-19, me = 9.11e-31;
          var d = dCm / 100, L = LCm / 100;
          var E = U / d;
          var a = e * E / me;
          var t = L / v0;
          var yL_m = 0.5 * a * t * t;
          var yL_mm = parseFloat((yL_m * 1000).toFixed(2));
          var contexte = pick([
            'un oscilloscope cathodique',
            'un tube à rayons cathodiques',
            'un spectromètre de masse',
            'un dispositif de tri électrostatique de particules',
            'une expérience de déviation électronique en laboratoire'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un faisceau d\'électrons pénètre horizontalement au milieu de deux plaques planes parallèles distantes de $d=' + fr(dCm, 1) + '$ cm et longues de $L=' + LCm + '$ cm, soumises à une tension $U=' + U + '$ V (plaque supérieure au potentiel le plus élevé). La vitesse d\'entrée est $v_0=2{,}5\\times10^7$ m/s (on donne $e=1{,}6\\times10^{-19}$ C et $m_e=9{,}11\\times10^{-31}$ kg).<br/><br/>Calcule la déviation verticale $y_L$ subie par les électrons à la sortie des plaques (en mm, arrondie au centième).',
            answer: yL_mm,
            tolerance: Math.max(0.05, parseFloat((yL_mm * 0.05).toFixed(2))),
            unit: 'mm',
            hint: 'Calcule d\'abord $E=\\dfrac{U}{d}$, puis $a=\\dfrac{eE}{m_e}$, puis $t=\\dfrac{L}{v_0}$, et enfin $y_L=\\dfrac12 at^2$.',
            solution: [
              'Champ électrique : $E=\\dfrac{U}{d}=\\dfrac{' + U + '}{' + fr(d, 3) + '}\\approx' + Math.round(E) + '$ V/m.',
              'Accélération (PFD) : $a=\\dfrac{eE}{m_e}\\approx' + sci(a, 2) + '$ m/s².',
              'Durée de traversée des plaques : $t=\\dfrac{L}{v_0}=\\dfrac{' + fr(L, 3) + '}{2{,}5\\times10^7}\\approx' + sci(t, 2) + '$ s.',
              'Déviation verticale : $y_L=\\dfrac12 at^2\\approx' + fr(yL_mm, 2) + '$ mm.'
            ]
          };
        } else {
          var v0b = pick([3, 4, 5, 6, 8, 10, 12]);
          var dist = randFloat(0.4, 1.2, 2);
          var g = 9.81;
          var tB = dist / v0b;
          var yB_cm = parseFloat((0.5 * g * tB * tB * 100).toFixed(2));
          var contexteB = pick([
            'une fontaine ornementale',
            'un système d\'arrosage automatique',
            'une bille lancée horizontalement depuis le bord d\'une table',
            'un jouet à ressort qui éjecte une bille',
            'la buse horizontale d\'une petite imprimante à jet d\'encre'
          ]);
          return {
            statement: 'Dans ' + contexteB + ', un objet assimilé à un point matériel est lancé horizontalement avec une vitesse $v_0=' + v0b + '$ m/s. On néglige les frottements de l\'air et on prend $g=9{,}81$ m/s².<br/><br/>Calcule la distance verticale $y$ dont il est tombé lorsqu\'il a parcouru une distance horizontale $d=' + fr(dist, 2) + '$ m (en cm, arrondie au centième).',
            answer: yB_cm,
            tolerance: Math.max(0.1, parseFloat((yB_cm * 0.05).toFixed(2))),
            unit: 'cm',
            hint: 'Le mouvement horizontal est uniforme ($t=\\dfrac{d}{v_0}$), le mouvement vertical est uniformément accéléré à partir d\'une vitesse verticale nulle ($y=\\dfrac12 gt^2$).',
            solution: [
              'Durée pour parcourir la distance horizontale : $t=\\dfrac{d}{v_0}=\\dfrac{' + fr(dist, 2) + '}{' + v0b + '}\\approx' + fr(parseFloat(tB.toFixed(3)), 3) + '$ s.',
              'Chute verticale (mouvement uniformément accéléré, vitesse verticale initiale nulle) : $y=\\dfrac12 g t^2=\\dfrac12\\times9{,}81\\times' + fr(parseFloat(tB.toFixed(3)), 3) + '^2$.',
              'Résultat : $y\\approx' + fr(yB_cm, 2) + '$ cm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Dans un oscilloscope cathodique simplifié, un faisceau d\'électrons pénètre horizontalement au milieu de deux plaques planes parallèles distantes de $d=2{,}0$ cm et longues de $L=4{,}0$ cm, soumises à une tension $U=180$ V. La vitesse d\'entrée du faisceau est $v_0=3{,}0\\times10^7$ m/s. À la sortie des plaques, les électrons parcourent encore une distance horizontale $D=20$ cm en ligne droite avant d\'atteindre un écran fluorescent. On donne $e=1{,}6\\times10^{-19}$ C et $m_e=9{,}11\\times10^{-31}$ kg.',
      tasks: [
        'Calculer le champ électrique $E$ entre les plaques, puis l\'accélération $a$ subie par les électrons.',
        'Calculer la durée $t$ de traversée des plaques, puis la déviation verticale $y_L$ à la sortie des plaques.',
        'En admettant qu\'après la sortie des plaques le faisceau se propage en ligne droite avec la vitesse verticale acquise, calculer la déviation totale $Y$ mesurée sur l\'écran (à la distance $D$ après les plaques), et comparer $Y$ à $y_L$.'
      ],
      solutions: [
        '$E=\\dfrac{U}{d}=\\dfrac{180}{2{,}0\\times10^{-2}}=9\\,000$ V/m. Par le PFD, $a=\\dfrac{eE}{m_e}=\\dfrac{1{,}6\\times10^{-19}\\times9\\,000}{9{,}11\\times10^{-31}}\\approx1{,}58\\times10^{15}$ m/s².',
        '$t=\\dfrac{L}{v_0}=\\dfrac{4{,}0\\times10^{-2}}{3{,}0\\times10^7}\\approx1{,}33\\times10^{-9}$ s. Puis $y_L=\\dfrac12 at^2\\approx\\dfrac12\\times1{,}58\\times10^{15}\\times(1{,}33\\times10^{-9})^2\\approx1{,}41\\times10^{-3}$ m, soit environ $1{,}41$ mm.',
        'La vitesse verticale acquise est $v_y=at\\approx1{,}58\\times10^{15}\\times1{,}33\\times10^{-9}\\approx2{,}11\\times10^6$ m/s, soit une pente $\\dfrac{v_y}{v_0}\\approx0{,}0703$. La déviation supplémentaire sur le trajet $D$ est $\\dfrac{v_y}{v_0}\\times D\\approx0{,}0703\\times0{,}20\\approx0{,}0141$ m $=14{,}1$ mm. La déviation totale est donc $Y=y_L+14{,}1\\approx1{,}41+14{,}1\\approx15{,}5$ mm.'
      ],
      finalAnswer: '$Y\\approx15{,}5$ mm, soit plus de dix fois la déviation $y_L\\approx1{,}41$ mm obtenue à la seule sortie des plaques. C\'est ce principe d\'amplification par propagation rectiligne après une courte zone de déviation qui permettait, dans les oscilloscopes cathodiques, de visualiser des tensions très faibles sous la forme d\'un déplacement bien visible du spot lumineux sur l\'écran.'
    },

    evaluation: {
      title: 'Évaluation — Mouvement dans un champ uniforme',
      duration: '30 min',
      questions: [
        {
          statement: 'Deux plaques planes parallèles distantes de $d=4{,}0$ cm sont soumises à une tension $U=120$ V. Calculer le champ électrique $E$ entre les plaques (en V/m).',
          type: 'numeric',
          answer: 3000,
          tolerance: 50,
          unit: 'V/m',
          points: 2,
          correction: '$E=\\dfrac{U}{d}=\\dfrac{120}{4{,}0\\times10^{-2}}=3\\,000$ V/m.'
        },
        {
          statement: 'Un ion positif pénètre entre deux plaques planes horizontales, la plaque supérieure étant portée au potentiel le plus élevé. Vers quelle plaque cet ion est-il dévié ?',
          type: 'multiple-choice',
          options: [
            'Vers la plaque supérieure (positive)',
            'Vers la plaque inférieure (négative)',
            'Il n\'est dévié dans aucune direction',
            'Cela dépend uniquement de sa vitesse initiale'
          ],
          answer: 1,
          points: 2,
          correction: 'Pour une charge positive, $\\vec{F}=q\\vec{E}$ est de même sens que $\\vec{E}$, qui pointe de la plaque $+$ vers la plaque $-$, donc vers le bas : l\'ion positif est dévié vers la plaque inférieure (négative), contrairement à un électron.'
        },
        {
          statement: 'Une particule de masse $m=4{,}0\\times10^{-7}$ kg porte une charge $q=8{,}0\\times10^{-9}$ C. Placée dans un champ électrique $E=5{,}0\\times10^4$ V/m, calculer la norme de son accélération (en m/s²).',
          type: 'numeric',
          answer: 1000,
          tolerance: 30,
          unit: 'm/s²',
          points: 3,
          correction: '$a=\\dfrac{qE}{m}=\\dfrac{8{,}0\\times10^{-9}\\times5{,}0\\times10^4}{4{,}0\\times10^{-7}}=\\dfrac{4{,}0\\times10^{-4}}{4{,}0\\times10^{-7}}=1{,}0\\times10^{3}$ m/s².'
        },
        {
          statement: 'Un objet est lancé horizontalement avec $v_0=6$ m/s dans le champ de pesanteur ($g=9{,}81$ m/s²). Après avoir parcouru $d=1{,}2$ m horizontalement, quelle distance verticale a-t-il chutée (en cm, arrondie au dixième) ?',
          type: 'numeric',
          answer: 19.6,
          tolerance: 1,
          unit: 'cm',
          points: 2,
          correction: '$t=\\dfrac{d}{v_0}=\\dfrac{1{,}2}{6}=0{,}2$ s, puis $y=\\dfrac12 g t^2=0{,}5\\times9{,}81\\times0{,}2^2\\approx19{,}6$ cm.'
        },
        {
          statement: 'Dans un champ uniforme, si la vitesse initiale $\\vec{v_0}$ est colinéaire à la force subie par le point matériel, la trajectoire est :',
          type: 'multiple-choice',
          options: [
            'Une parabole',
            'Une droite',
            'Un cercle',
            'Une ellipse'
          ],
          answer: 1,
          points: 2,
          correction: 'Si $\\vec{v_0}$ est colinéaire à la force (donc à l\'accélération), le mouvement reste sur cette même droite : c\'est un mouvement rectiligne (uniformément accéléré ou retardé selon leur sens relatif), jamais parabolique. La parabole n\'apparaît que si $\\vec{v_0}$ n\'est pas colinéaire à la force.'
        }
      ]
    }
  });
