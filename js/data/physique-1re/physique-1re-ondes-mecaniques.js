/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-ondes-mecaniques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-ondes-mecaniques',
    level: 2, subject: 'physique',
    icon: '🌊',
    title: 'Ondes mécaniques',
    subtitle: 'Onde progressive, célérité, retard, ondes périodiques, période et longueur d\'onde',
    keywords: ['Onde mécanique', 'Célérité', 'Retard', 'Période', 'Longueur d\'onde'],
    physics: 'La propagation des ondes mécaniques explique le fonctionnement des sonars et de l\'échographie médicale (ondes ultrasonores), permet de localiser l\'épicentre d\'un séisme à partir du retard entre stations sismiques, et est à la base du fonctionnement des haut-parleurs, microphones et instruments de musique.',

    cours: {
      intro: 'Une <strong>onde mécanique progressive</strong> correspond à la propagation d\'une perturbation (déformation, ébranlement) dans un milieu matériel, <strong>sans transport de matière</strong> : seule l\'énergie de la perturbation se propage, chaque point du milieu retrouvant sa position d\'équilibre après le passage de l\'onde. Sa vitesse de propagation, la <strong>célérité</strong> $v$, ne dépend que du milieu traversé.<br/><br/>On distingue les ondes <strong>transversales</strong> (la perturbation est perpendiculaire à la direction de propagation, comme une onde le long d\'une corde) et les ondes <strong>longitudinales</strong> (la perturbation est parallèle à la direction de propagation, comme une onde sonore). Deux points du milieu, distants de $d$, reproduisent le même signal avec un <strong>retard</strong> $\\tau = \\dfrac{d}{v}$.<br/><br/>Une onde progressive <strong>périodique</strong> se répète identique à elle-même après une durée $T$ (période). Si elle est de plus <strong>sinusoïdale</strong>, elle possède aussi une période spatiale, la <strong>longueur d\'onde</strong> $\\lambda$, reliée à la célérité et à la période par $\\lambda = v\\times T = \\dfrac{v}{f}$.',
      definitions: [
        { term: 'Onde mécanique progressive', def: 'Propagation d\'une perturbation dans un milieu matériel, sans transport de matière, à une vitesse appelée célérité $v$ (dépend uniquement du milieu de propagation).' },
        { term: 'Retard ($\\tau$)', def: 'Durée mise par la perturbation pour parcourir une distance $d$ entre deux points du milieu, le long de la direction de propagation : $\\tau = \\dfrac{d}{v}$.' },
        { term: 'Onde progressive périodique', def: 'Onde qui se reproduit identique à elle-même après une durée $T$ (la période, en s), de fréquence associée $f = \\dfrac{1}{T}$ (en Hz).' },
        { term: 'Longueur d\'onde ($\\lambda$)', def: 'Pour une onde progressive périodique sinusoïdale, période <strong>spatiale</strong> du phénomène : distance parcourue par l\'onde pendant une période $T$, soit $\\lambda = v\\times T$.' }
      ],
      method: {
        title: 'Analyser une onde mécanique progressive en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'onde</strong> (transversale ou longitudinale) et le milieu de propagation, pour déterminer ou utiliser la célérité $v$ (donnée, ou mesurée expérimentalement).',
          '<strong>Pour calculer un retard</strong> entre deux points distants de $d$ le long de la direction de propagation : $\\tau = \\dfrac{d}{v}$.',
          '<strong>Pour une onde sinusoïdale</strong>, relier célérité, période et longueur d\'onde par $\\lambda = v\\times T = \\dfrac{v}{f}$ ; mesurer $\\lambda$ ou $T$ graphiquement permet d\'en déduire la célérité $v$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Onde progressive sinusoïdale (photographie à un instant donné)',
        title: 'Amplitude A et longueur d\'onde λ',
        description: 'Pour une onde progressive sinusoïdale, la <strong>longueur d\'onde</strong> $\\lambda$ est la distance qui sépare deux points consécutifs vibrant <strong>en phase</strong> (par exemple deux crêtes successives), tandis que l\'<strong>amplitude</strong> $A$ mesure l\'écart maximal par rapport à la position d\'équilibre.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="onde-title onde-desc">
            <title id="onde-title">Photographie d'une onde progressive sinusoidale a un instant donne</title>
            <desc id="onde-desc">Un graphique represente l'elongation en fonction de la position le long de la direction de propagation. La courbe sinusoidale oscille au-dessus et en dessous d'une ligne centrale horizontale, dessinant deux periodes completes. Une ligne de cotation verticale, avec un petit trait perpendiculaire a chaque extremite et sans pointe de fleche, entre la ligne centrale et le sommet de la premiere crete indique l'amplitude A. Une accolade horizontale entre les sommets de la premiere et de la deuxieme crete indique la longueur d'onde lambda.</desc>

            <defs>
              <marker id="arrow-phy1re-onde" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="220" x2="70" y2="55" marker-end="url(#arrow-phy1re-onde)"></line>
            <line class="frame-line" x1="55" y1="150" x2="415" y2="150" marker-end="url(#arrow-phy1re-onde)"></line>
            <text class="tick-label" x="70" y="46" text-anchor="middle">y</text>
            <text class="tick-label" x="420" y="145" text-anchor="start">x</text>

            <!-- courbe sinusoidale (2 periodes) -->
            <path class="curve-main" fill="none" d="M70,150 L78,131.5 L86,114.7 L94,101.5 L102,92.9 L110,90 L118,92.9 L126,101.5 L134,114.7 L142,131.5 L150,150 L158,168.5 L166,185.3 L174,198.5 L182,207.1 L190,210 L198,207.1 L206,198.5 L214,185.3 L222,168.5 L230,150 L238,131.5 L246,114.7 L254,101.5 L262,92.9 L270,90 L278,92.9 L286,101.5 L294,114.7 L302,131.5 L310,150 L318,168.5 L326,185.3 L334,198.5 L342,207.1 L350,210 L358,207.1 L366,198.5 L374,185.3 L382,168.5 L390,150"></path>

            <!-- amplitude A -->
            <line class="guide-line" x1="110" y1="150" x2="110" y2="90"></line>
            <line class="frame-line" x1="104" y1="150" x2="116" y2="150"></line>
            <line class="frame-line" x1="104" y1="90" x2="116" y2="90"></line>
            <text class="annotation-label" x="122" y="122" text-anchor="start">A</text>

            <!-- longueur d'onde lambda -->
            <line class="guide-line" x1="110" y1="72" x2="270" y2="72"></line>
            <line class="frame-line" x1="110" y1="66" x2="110" y2="90"></line>
            <line class="frame-line" x1="270" y1="66" x2="270" y2="90"></line>
            <text class="annotation-label" x="190" y="62" text-anchor="middle">λ</text>
          </svg>
        `,
        notes: [
          'L\'<strong>amplitude</strong> $A$ se mesure verticalement, de la ligne d\'équilibre (centrale) jusqu\'au sommet d\'une crête : c\'est l\'écart maximal du milieu par rapport à sa position de repos.',
          'La <strong>longueur d\'onde</strong> $\\lambda$ se mesure horizontalement, entre deux points qui vibrent <strong>en phase</strong> — ici, entre les sommets de deux crêtes consécutives.',
          'La courbe représente une <strong>photographie</strong> de l\'onde à un instant donné : elle montre comment l\'élongation varie avec la position, pas avec le temps (une autre courbe, $y=f(t)$ en un point fixe, ferait apparaître la période $T$ à la place de $\\lambda$).'
        ],
        reading: 'Repère une crête de la courbe : la ligne de cotation verticale à sa base donne l\'amplitude $A$, et l\'accolade horizontale jusqu\'à la crête suivante donne la longueur d\'onde $\\lambda$.',
        caption: 'Onde progressive sinusoïdale photographiée à un instant donné : l\'amplitude $A$ et la longueur d\'onde $\\lambda$ caractérisent entièrement sa forme spatiale.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Retard τ entre deux points du milieu (signal en fonction du temps)',
          title: 'Le même signal, reçu avec un retard τ = d/v',
          description: 'Contrairement au schéma précédent (photographie de l\'onde à un instant donné), on représente ici l\'élongation <strong>en fonction du temps</strong> en deux points fixes du milieu : $M_1$, proche de la source, et $M_2$, plus loin. $M_2$ reproduit exactement le même signal que $M_1$, mais avec un <strong>retard</strong> $\\tau = \\dfrac{d}{v}$.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="onde-retard-title onde-retard-desc">
              <title id="onde-retard-title">Retard entre deux points du milieu, signal en fonction du temps</title>
              <desc id="onde-retard-desc">Deux courbes sinusoidales superposees verticalement representent l'elongation en fonction du temps en deux points du milieu. La courbe du haut, notee M1, et la courbe du bas, notee M2, ont exactement la meme forme et la meme amplitude, mais la courbe M2 est decalee vers la droite par rapport a M1 : le sommet de sa premiere crete apparait plus tard. Une cotation horizontale entre les deux sommets correspondants indique ce retard tau.</desc>

              <defs>
                <marker id="arrow-phy1re-onde-retard" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- reperes horizontaux (niveau d'equilibre de chaque point) -->
              <line class="grid-line" x1="55" y1="95" x2="400" y2="95"></line>
              <line class="grid-line" x1="55" y1="225" x2="400" y2="225" marker-end="url(#arrow-phy1re-onde-retard)"></line>
              <text class="tick-label" x="46" y="99" text-anchor="end">M₁</text>
              <text class="tick-label" x="46" y="229" text-anchor="end">M₂</text>
              <text class="tick-label" x="412" y="229" text-anchor="start">t</text>

              <!-- signal recu au point M1 (proche) -->
              <path class="curve-main" fill="none" d="M70,95 L78,81.1 L86,68.5 L94,58.6 L102,52.2 L110,50 L118,52.2 L126,58.6 L134,68.5 L142,81.1 L150,95 L158,108.9 L166,121.5 L174,131.4 L182,137.8 L190,140 L198,137.8 L206,131.4 L214,121.5 L222,108.9 L230,95 L238,81.1 L246,68.5 L254,58.6 L262,52.2 L270,50 L278,52.2 L286,58.6 L294,68.5 L302,81.1 L310,95 L318,108.9 L326,121.5 L334,131.4 L342,137.8 L350,140 L358,137.8 L366,131.4 L374,121.5 L382,108.9 L390,95"></path>

              <!-- signal recu au point M2 (eloigne de d, retarde de tau) -->
              <path class="curve-main" fill="none" d="M70,270 L78,267.8 L86,261.4 L94,251.5 L102,238.9 L110,225 L118,211.1 L126,198.5 L134,188.6 L142,182.2 L150,180 L158,182.2 L166,188.6 L174,198.5 L182,211.1 L190,225 L198,238.9 L206,251.5 L214,261.4 L222,267.8 L230,270 L238,267.8 L246,261.4 L254,251.5 L262,238.9 L270,225 L278,211.1 L286,198.5 L294,188.6 L302,182.2 L310,180 L318,182.2 L326,188.6 L334,198.5 L342,211.1 L350,225 L358,238.9 L366,251.5 L374,261.4 L382,267.8 L390,270"></path>

              <!-- marqueurs de crete correspondants -->
              <circle class="plot-point" cx="110" cy="50" r="3"></circle>
              <circle class="plot-point-alt" cx="150" cy="180" r="3"></circle>

              <!-- cotation du retard tau -->
              <line class="frame-line" x1="110" y1="150" x2="110" y2="170"></line>
              <line class="frame-line" x1="150" y1="150" x2="150" y2="170"></line>
              <line class="guide-line" x1="110" y1="160" x2="150" y2="160"></line>
              <text class="annotation-label" x="130" y="144" text-anchor="middle">τ</text>
            </svg>
          `,
          notes: [
            'Les deux courbes ont exactement la <strong>même forme</strong> et la <strong>même amplitude</strong> : $M_2$ ne fait que reproduire, plus tard, le signal déjà passé par $M_1$ — aucune information n\'est perdue ni modifiée en chemin.',
            'La cotation $\\tau$ relie deux points <strong>correspondants</strong> des deux courbes (ici, les deux sommets de crête) : c\'est le décalage temporel entre le passage du même point du signal en $M_1$ puis en $M_2$.',
            'Ce retard ne dépend que de la distance $d$ entre $M_1$ et $M_2$ et de la célérité $v$ : $\\tau = \\dfrac{d}{v}$, jamais de la fréquence ou de l\'amplitude du signal.'
          ],
          reading: 'Compare la position du sommet de crête sur la courbe $M_1$ à celle du sommet correspondant sur la courbe $M_2$ : ce dernier apparaît plus tard sur l\'axe des temps, d\'une durée $\\tau$.',
          caption: 'Deux points $M_1$ et $M_2$ du milieu reçoivent le même signal, mais $M_2$ (plus éloigné de la source) le reçoit avec un retard $\\tau = \\dfrac{d}{v}$ par rapport à $M_1$.'
        }
      ],
      example: {
        statement: 'Une onde sonore se propage dans l\'air à la célérité $v = 340$ m/s. Deux microphones sont placés le long du trajet de l\'onde, distants de $d = 8{,}5$ m.<br/><br/>Calculer le retard $\\tau$ entre les signaux perçus par les deux microphones. Puis, si le son émis est un signal sinusoïdal de fréquence $f = 440$ Hz, calculer sa longueur d\'onde $\\lambda$.',
        steps: [
          'Retard entre les deux points : $\\tau = \\dfrac{d}{v} = \\dfrac{8{,}5}{340} = 0{,}025$ s, soit $25$ ms.',
          'Période du signal sonore : $T = \\dfrac{1}{f} = \\dfrac{1}{440} \\approx 2{,}27\\times10^{-3}$ s.',
          'Longueur d\'onde : $\\lambda = v\\times T = 340\\times2{,}27\\times10^{-3} \\approx 0{,}77$ m, soit environ $77$ cm.'
        ],
        answer: '$\\tau = 25$ ms et $\\lambda \\approx 0{,}77$ m. Le retard ne dépend que de la distance et de la célérité (pas de la fréquence), alors que la longueur d\'onde dépend à la fois de la célérité et de la fréquence du signal.'
      },
      formulas: [
        'Retard : $\\tau = \\dfrac{d}{v}$ ($d$ : distance entre deux points, $v$ : célérité)',
        'Période et fréquence : $T = \\dfrac{1}{f}$',
        'Longueur d\'onde (onde sinusoïdale) : $\\lambda = v\\times T = \\dfrac{v}{f}$',
        'Onde transversale (perturbation $\\perp$ propagation) ou longitudinale (perturbation $\\parallel$ propagation)'
      ],
      recap: [
        'Une onde mécanique transporte de l\'<strong>énergie</strong> mais jamais de matière : chaque point du milieu oscille autour de sa position d\'équilibre sans être déplacé durablement.',
        'Le retard $\\tau = d/v$ ne dépend que de la distance et de la célérité, jamais de la fréquence du signal.',
        'Pour une onde sinusoïdale, la longueur d\'onde $\\lambda = v\\times T$ est la distance parcourue par l\'onde pendant une période complète.',
        'La célérité $v$ dépend uniquement du <strong>milieu</strong> de propagation, jamais des caractéristiques propres de l\'onde (fréquence, amplitude).'
      ],
      piege: 'Une erreur fréquente est de croire qu\'une onde mécanique déplace la matière du milieu sur toute la distance parcourue, comme si un bouchon flottant sur l\'eau était emporté au loin par une vague. Attention : seule l\'énergie de la perturbation se propage — chaque point du milieu, bouchon compris, oscille autour de sa position d\'équilibre et y revient après le passage de l\'onde, sans être transporté.'
    },

    quiz: [
      {
        q: 'Une onde mécanique progressive se propage dans un milieu. Que transporte-t-elle réellement ?',
        options: [
          'De l\'énergie, sans transport de matière',
          'De la matière, qui se déplace avec l\'onde',
          'À la fois de la matière et de l\'énergie',
          'Rien, l\'onde est purement visuelle'
        ],
        answer: 0,
        correction: 'Une onde mécanique propage une perturbation et donc de l\'énergie, mais jamais de matière : chaque point du milieu revient à sa position d\'équilibre après le passage de l\'onde.'
      },
      {
        q: 'Une onde progresse à une célérité $v=1500$ m/s dans l\'eau. Deux points du milieu sont distants de $d=300$ m. Quel est le retard $\\tau$ entre les signaux perçus en ces deux points ?',
        options: [
          '0,2 s',
          '5 s',
          '450 000 s',
          '2 s'
        ],
        answer: 0,
        correction: '$\\tau = \\dfrac{d}{v} = \\dfrac{300}{1500} = 0{,}2$ s. Attention à ne pas inverser la division (ce qui donnerait $5$ s).'
      },
      {
        q: 'Pour une onde progressive sinusoïdale de célérité $v$ et de période $T$, la longueur d\'onde $\\lambda$ vaut :',
        options: [
          '$\\lambda = v\\times T$',
          '$\\lambda = v/T$',
          '$\\lambda = T/v$',
          '$\\lambda = v+T$'
        ],
        answer: 0,
        correction: 'La longueur d\'onde est la distance parcourue par l\'onde pendant une période complète : $\\lambda = v\\times T$ (cohérent avec une distance = vitesse $\\times$ temps).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['retard', 'longueur_onde']);

        if (typeExo === 'retard') {
          var media = [
            { nom: 'dans l\'air', v: 340, dmin: 10, dmax: 300 },
            { nom: 'dans l\'eau', v: 1500, dmin: 50, dmax: 1000 },
            { nom: 'le long d\'une corde tendue', v: 120, dmin: 2, dmax: 20 },
            { nom: 'dans une tige d\'acier', v: 5000, dmin: 100, dmax: 2000 },
            { nom: 'à la surface de l\'eau (onde de surface)', v: 5, dmin: 1, dmax: 10 }
          ];
          var milieu = pick(media);
          var d = randFloat(milieu.dmin, milieu.dmax, 1);
          var tau = d / milieu.v;
          var tauRound = parseFloat(tau.toFixed(3));
          var tol = parseFloat(Math.max(0.001, tauRound * 0.05).toFixed(3));
          return {
            statement: 'Une onde mécanique se propage ' + milieu.nom + ' à la célérité $v = ' + milieu.v + '$ m/s. Deux points du milieu sont distants de $d = ' + fr(d, 1) + '$ m.<br/><br/>Calcule le retard $\\tau$ entre les signaux perçus en ces deux points (en s, arrondi au millième).',
            answer: tauRound,
            tolerance: tol,
            unit: 's',
            hint: 'Utilise $\\tau = \\dfrac{d}{v}$.',
            solution: [
              'Formule du retard : $\\tau = \\dfrac{d}{v} = \\dfrac{' + fr(d, 1) + '}{' + milieu.v + '}$.',
              'Résultat : $\\tau \\approx ' + fr(tauRound, 3) + '$ s.'
            ]
          };
        } else {
          var media2 = [
            { nom: 'une onde sonore dans l\'air', v: 340 },
            { nom: 'une onde sonore dans l\'eau', v: 1500 },
            { nom: 'une onde le long d\'une corde vibrante', v: 120 }
          ];
          var milieu2 = pick(media2);
          var f = pick([50, 100, 200, 250, 440, 500, 800, 1000]);
          var lambda = milieu2.v / f;
          var lambdaRound = parseFloat(lambda.toFixed(2));
          var tol2 = parseFloat(Math.max(0.02, lambdaRound * 0.05).toFixed(2));
          return {
            statement: 'Pour ' + milieu2.nom + ', de célérité $v = ' + milieu2.v + '$ m/s et de fréquence $f = ' + f + '$ Hz, calcule la longueur d\'onde $\\lambda$ (en m, arrondie au centième).',
            answer: lambdaRound,
            tolerance: tol2,
            unit: 'm',
            hint: 'Utilise $\\lambda = \\dfrac{v}{f}$.',
            solution: [
              'Formule de la longueur d\'onde : $\\lambda = \\dfrac{v}{f} = \\dfrac{' + milieu2.v + '}{' + f + '}$.',
              'Résultat : $\\lambda \\approx ' + fr(lambdaRound, 2) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie une onde progressive sinusoïdale se propageant le long d\'une corde. Une photographie de la corde à un instant donné permet de mesurer une longueur d\'onde $\\lambda = 0{,}60$ m. Un capteur, placé en un point fixe de la corde, enregistre une période $T = 0{,}50$ s pour cette même onde.',
      tasks: [
        'Calculer la célérité $v$ de l\'onde le long de la corde.',
        'Un second capteur est placé $d = 1{,}5$ m plus loin sur la corde. Calculer le retard $\\tau$ entre les signaux enregistrés par les deux capteurs.',
        'Exprimer ce retard $\\tau$ en fonction de la période $T$ (sous la forme $\\tau = k\\times T$), et interpréter physiquement ce résultat.'
      ],
      solutions: [
        '$v = \\dfrac{\\lambda}{T} = \\dfrac{0{,}60}{0{,}50} = 1{,}2$ m/s.',
        '$\\tau = \\dfrac{d}{v} = \\dfrac{1{,}5}{1{,}2} = 1{,}25$ s.',
        '$\\dfrac{\\tau}{T} = \\dfrac{1{,}25}{0{,}50} = 2{,}5$, donc $\\tau = 2{,}5\\times T$ : le second capteur perçoit le signal avec un retard de $2$ périodes complètes (soit un signal identique en phase) plus une <strong>demi-période</strong> supplémentaire, ce qui correspond à une opposition de phase par rapport au premier capteur.'
      ],
      finalAnswer: '$v = 1{,}2$ m/s, $\\tau = 1{,}25$ s $= 2{,}5\\times T$. Ce résultat illustre que le retard entre deux points d\'un milieu ondulatoire peut toujours s\'exprimer comme un nombre de périodes : en phase si ce nombre est entier, en opposition de phase s\'il comporte une moitié supplémentaire, comme ici.'
    },

    evaluation: {
      title: 'Évaluation — Ondes mécaniques',
      duration: '30 min',
      questions: [
        {
          statement: 'Une onde se propage à $v=1500$ m/s dans l\'eau. Deux points sont distants de $d=45$ m. Calculer le retard $\\tau$ (en s, arrondi au millième).',
          type: 'numeric',
          answer: 0.03,
          tolerance: 0.002,
          unit: 's',
          points: 2,
          correction: '$\\tau = \\dfrac{d}{v} = \\dfrac{45}{1500} = 0{,}03$ s.'
        },
        {
          statement: 'Lors du passage d\'une onde mécanique le long d\'une corde tendue, un petit ruban attaché à la corde :',
          type: 'multiple-choice',
          options: [
            'Oscille autour de sa position, sans être emporté par l\'onde',
            'Est transporté avec l\'onde jusqu\'à l\'autre extrémité',
            'Reste immobile, car l\'onde ne l\'affecte pas',
            'Se déplace uniquement dans le sens de propagation'
          ],
          answer: 0,
          points: 2,
          correction: 'Une onde mécanique ne transporte pas de matière : le ruban oscille autour de sa position d\'équilibre, sans être emporté le long de la corde.'
        },
        {
          statement: 'Une onde sonore de fréquence $f=250$ Hz se propage dans l\'air à $v=340$ m/s. Calculer sa longueur d\'onde $\\lambda$ (en m, arrondie au centième).',
          type: 'numeric',
          answer: 1.36,
          tolerance: 0.05,
          unit: 'm',
          points: 2,
          correction: '$\\lambda = \\dfrac{v}{f} = \\dfrac{340}{250} = 1{,}36$ m.'
        },
        {
          statement: 'Le son se propageant dans l\'air est une onde :',
          type: 'multiple-choice',
          options: [
            'Longitudinale (la perturbation est parallèle à la direction de propagation)',
            'Transversale (la perturbation est perpendiculaire à la direction de propagation)',
            'Ni longitudinale ni transversale',
            'Électromagnétique'
          ],
          answer: 0,
          points: 2,
          correction: 'Le son correspond à des compressions et détentes successives de l\'air, parallèles à la direction de propagation : c\'est une onde longitudinale.'
        },
        {
          statement: 'Une onde progressive sinusoïdale a une longueur d\'onde $\\lambda=2{,}0$ m et une période $T=0{,}25$ s. Calculer sa célérité $v$ (en m/s).',
          type: 'numeric',
          answer: 8,
          tolerance: 0.3,
          unit: 'm/s',
          points: 2,
          correction: '$v = \\dfrac{\\lambda}{T} = \\dfrac{2{,}0}{0{,}25} = 8$ m/s.'
        }
      ]
    }
  });
