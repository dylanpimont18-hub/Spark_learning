/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-champ-gravitationnel.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-champ-gravitationnel',
    level: 2, subject: 'physique',
    icon: '🪐',
    title: 'Interactions fondamentales et champ gravitationnel',
    subtitle: 'Loi de gravitation universelle, principe des actions réciproques, vecteur champ de gravitation',
    keywords: ['Gravitation', 'Newton', 'Champ', 'Actions réciproques', 'Poids'],
    physics: 'Le champ de gravitation explique pourquoi tous les objets en chute libre sur Terre subissent la même accélération, permet de calculer le poids d\'un astronaute sur la Lune ou sur Mars, justifie le maintien des satellites en orbite autour de la Terre, et est à l\'origine des marées océaniques dues à l\'attraction combinée de la Lune et du Soleil.',

    cours: {
      intro: 'Toute la matière de l\'univers est soumise à quatre <strong>interactions fondamentales</strong>. Parmi elles, l\'<strong>interaction gravitationnelle</strong> est la plus faible à l\'échelle de deux objets du quotidien, mais elle devient dominante à l\'échelle astronomique : elle est toujours attractive (contrairement à l\'interaction électrique, qui peut être répulsive) et sa portée est infinie.<br/><br/>Isaac Newton a formalisé cette interaction par la <strong>loi de gravitation universelle</strong> : deux corps ponctuels de masses $m_1$ et $m_2$, séparés par une distance $r$, s\'attirent mutuellement avec une force de norme $F = G\\dfrac{m_1 m_2}{r^2}$, où $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻² est la <strong>constante de gravitation universelle</strong>.<br/><br/>Pour décrire l\'effet d\'une masse $M$ sur l\'espace qui l\'entoure, sans se référer à un second objet précis, on introduit le <strong>vecteur champ de gravitation</strong> $\\vec{g}$ : en tout point situé à une distance $r$ de $M$, ce champ est dirigé <strong>vers $M$</strong> et son intensité vaut $g = G\\dfrac{M}{r^2}$. Le poids d\'un objet de masse $m$ n\'est alors rien d\'autre que la force $\\vec{P} = m\\vec{g}$ exercée par ce champ local.',
      definitions: [
        { term: 'Interaction gravitationnelle', def: 'Interaction attractive s\'exerçant entre deux corps massifs quelconques, quelle que soit la distance qui les sépare. Extrêmement faible à l\'échelle de deux objets du quotidien, elle devient prépondérante à l\'échelle des astres en raison de sa portée infinie.' },
        { term: 'Loi de gravitation universelle', def: 'Deux masses ponctuelles $m_1$ et $m_2$ séparées par une distance $r$ s\'attirent avec une force de norme $F = G\\dfrac{m_1 m_2}{r^2}$, où $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻².' },
        { term: 'Principe des actions réciproques', def: 'Troisième loi de Newton : si un corps A exerce une force $\\vec{F}(A\\to B)$ sur un corps B, alors B exerce sur A une force $\\vec{F}(B\\to A)$ de même norme et de même direction, mais de sens opposé — quelles que soient les masses respectives de A et B.' },
        { term: 'Vecteur champ de gravitation ($\\vec{g}$)', def: 'Grandeur vectorielle créée par une masse $M$ en tout point de l\'espace, dirigée vers $M$, d\'intensité $g = G\\dfrac{M}{r^2}$ (en m/s² ou N/kg). Le poids d\'une masse $m$ placée dans ce champ vaut $\\vec{P} = m\\vec{g}$.' }
      ],
      method: {
        title: 'Calculer une force ou un champ de gravitation en 3 étapes',
        steps: [
          '<strong>Identifier les deux masses</strong> en présence ($m_1$, $m_2$, ou $M$ et $m$) et la distance $r$ qui sépare leurs centres — $r$ se mesure toujours entre les <strong>centres</strong> des corps, jamais entre leurs surfaces.<br/>Exemple : pour un satellite en orbite, $r$ est la distance entre le centre de la Terre et le satellite, pas l\'altitude par rapport au sol.',
          '<strong>Appliquer la loi de gravitation universelle</strong> $F = G\\dfrac{m_1 m_2}{r^2}$ pour calculer la norme de la force d\'attraction entre deux masses, ou $g = G\\dfrac{M}{r^2}$ pour calculer directement l\'intensité du champ créé par une seule masse $M$.',
          '<strong>Si nécessaire, en déduire le poids</strong> $P = mg$ d\'un objet de masse $m$ placé dans ce champ, en gardant à l\'esprit que $g$ dépend du lieu (planète, altitude) alors que $m$ reste invariable.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Interaction gravitationnelle (principe des actions réciproques)',
        title: 'Force d\'attraction mutuelle entre deux masses M et m',
        description: 'Les forces $\\vec{F}(M\\to m)$ et $\\vec{F}(m\\to M)$ ont la <strong>même norme</strong> et des sens opposés, quelle que soit la différence entre les masses $M$ et $m$. Le vecteur champ $\\vec{g}$, créé par $M$ au niveau de $m$, est colinéaire à la force qu\'il y exerce.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="gravit-title gravit-desc">
            <title id="gravit-title">Interaction gravitationnelle entre deux masses</title>
            <desc id="gravit-desc">Une masse M, representee par un grand cercle a gauche, et une masse m, representee par un petit cercle a droite, sont separees par une distance r. Deux fleches de meme longueur partent de chaque masse et pointent l'une vers l'autre : la force exercee par M sur m, et la force exercee par m sur M, illustrant le principe des actions reciproques. Une fleche en pointilles, sous la fleche de force exercee sur m, represente le vecteur champ de gravitation g cree par M au niveau de m, oriente dans la meme direction.</desc>

            <defs>
              <marker id="arrow-phy1re-gravit" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- masses -->
            <circle class="frame-line" cx="130" cy="150" r="45" fill="none"></circle>
            <text class="annotation-label" x="130" y="156" text-anchor="middle">M</text>
            <circle class="frame-line" cx="430" cy="150" r="12" fill="none"></circle>
            <text class="annotation-label" x="430" y="177" text-anchor="middle">m</text>

            <!-- cotation distance r -->
            <line class="frame-line" x1="130" y1="245" x2="130" y2="255"></line>
            <line class="frame-line" x1="430" y1="245" x2="430" y2="255"></line>
            <line class="guide-line" x1="130" y1="250" x2="430" y2="250"></line>
            <text class="tick-label" x="280" y="270" text-anchor="middle">r</text>

            <!-- force sur m (due a M), pointant vers M -->
            <line class="curve-main" x1="418" y1="150" x2="330" y2="150" marker-end="url(#arrow-phy1re-gravit)"></line>
            <text class="annotation-label" x="374" y="136" text-anchor="middle">F(M→m)</text>

            <!-- force sur M (due a m), pointant vers m -->
            <line class="curve-main" x1="175" y1="150" x2="263" y2="150" marker-end="url(#arrow-phy1re-gravit)"></line>
            <text class="annotation-label" x="219" y="136" text-anchor="middle">F(m→M)</text>

            <!-- vecteur champ g cree par M au niveau de m -->
            <line class="guide-line" x1="418" y1="195" x2="330" y2="195" marker-end="url(#arrow-phy1re-gravit)"></line>
            <text class="label-soft" x="374" y="212" text-anchor="middle">g</text>
          </svg>
        `,
        notes: [
          'Bien que $M$ soit très supérieure à $m$, les deux forces $\\vec{F}(M\\to m)$ et $\\vec{F}(m\\to M)$ ont exactement la <strong>même norme</strong> : c\'est le principe des actions réciproques, valable quelles que soient les masses en présence.',
          'Les deux forces sont dirigées <strong>l\'une vers l\'autre</strong>, le long de la droite qui joint les centres des deux masses : l\'interaction gravitationnelle est toujours attractive, jamais répulsive.',
          'Le vecteur champ de gravitation $\\vec{g}$, créé par $M$ seule au niveau de $m$, est colinéaire et de même sens que $\\vec{F}(M\\to m)$ : c\'est de ce champ que dérive la force subie par $m$, via $\\vec{F}(M\\to m) = m\\vec{g}$.'
        ],
        reading: 'Repère les deux flèches pleines de même longueur qui pointent l\'une vers l\'autre : ce sont les deux forces du principe des actions réciproques. La flèche en pointillés en dessous représente le champ $g$ créé par $M$ au niveau de $m$.',
        caption: 'Deux masses $M$ et $m$ séparées par une distance $r$ s\'attirent avec des forces de même norme et de sens opposés (principe des actions réciproques). Le vecteur champ de gravitation $\\vec{g}$, créé par $M$, est colinéaire à cette force.'
      },
      example: {
        statement: 'Un satellite de masse $m = 800$ kg est en orbite autour de la Terre (masse $M_{Terre} \\approx 5{,}97\\times10^{24}$ kg), à une distance $r = 7{,}0\\times10^6$ m de son centre.<br/><br/>Calculer la force gravitationnelle $F$ exercée par la Terre sur le satellite, puis en déduire l\'intensité $g$ du champ de gravitation terrestre à cette distance.',
        steps: [
          'Système : le satellite, assimilé à un point matériel de masse $m = 800$ kg, soumis à l\'attraction gravitationnelle de la Terre (masse $M_{Terre} \\approx 5{,}97\\times10^{24}$ kg) à une distance $r = 7{,}0\\times10^6$ m de son centre.',
          'Loi de gravitation universelle : $F = G\\dfrac{M_{Terre} \\times m}{r^2} = 6{,}67\\times10^{-11} \\times \\dfrac{5{,}97\\times10^{24} \\times 800}{(7{,}0\\times10^6)^2}$.',
          'Calcul du numérateur : $6{,}67\\times10^{-11} \\times 5{,}97\\times10^{24} \\times 800 \\approx 3{,}19\\times10^{17}$. Calcul du dénominateur : $(7{,}0\\times10^6)^2 = 4{,}9\\times10^{13}$.',
          'Résultat : $F \\approx \\dfrac{3{,}19\\times10^{17}}{4{,}9\\times10^{13}} \\approx 6{,}50\\times10^3$ N, soit environ $6\\,501$ N.',
          'Le champ de gravitation à cette distance vaut $g = \\dfrac{F}{m} = \\dfrac{6\\,501}{800} \\approx 8{,}13$ m/s².'
        ],
        answer: '$F \\approx 6{,}50\\times10^3$ N et $g \\approx 8{,}13$ m/s². Ce champ est plus faible qu\'à la surface de la Terre ($9{,}81$ m/s²), car le satellite en est plus éloigné : le champ de gravitation décroît avec le carré de la distance.'
      },
      formulas: [
        '$F = G\\dfrac{m_1 m_2}{r^2}$ (loi de gravitation universelle), avec $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻²',
        'Principe des actions réciproques : $\\vec{F}(A\\to B) = -\\vec{F}(B\\to A)$ (même norme, sens opposé)',
        'Champ de gravitation créé par une masse $M$ : $g = G\\dfrac{M}{r^2}$',
        'Poids : $\\vec{P} = m\\vec{g}$, soit $P = mg$'
      ],
      recap: [
        'L\'interaction gravitationnelle est <strong>toujours attractive</strong> et de <strong>portée infinie</strong> : négligeable à l\'échelle du quotidien, elle domine à l\'échelle astronomique.',
        'D\'après le <strong>principe des actions réciproques</strong>, la force qu\'exerce A sur B a exactement la même norme que celle qu\'exerce B sur A, même si leurs masses sont très différentes.',
        'Le champ de gravitation $g = G\\dfrac{M}{r^2}$ décroît avec le <strong>carré de la distance</strong> et ne dépend que de la masse $M$ qui le crée, jamais de la masse de l\'objet qui le subit.',
        'Le poids $P = mg$ n\'est pas une propriété intrinsèque de l\'objet : il varie avec le lieu, contrairement à la masse $m$, qui reste invariable.'
      ],
      piege: 'Une erreur fréquente est de confondre la masse $m$ d\'un objet, propriété intrinsèque exprimée en kilogrammes, avec son poids $P=mg$, une force exprimée en newtons qui dépend du champ de gravitation local. Attention à ne jamais confondre les deux dans un calcul : la masse d\'un astronaute reste rigoureusement la même sur la Lune, alors que son poids y devient environ six fois plus faible que sur Terre.'
    },

    quiz: [
      {
        q: 'Deux masses ponctuelles s\'attirent avec une force gravitationnelle de norme $F$. Si la distance $r$ qui les sépare est doublée (les masses restant inchangées), que devient cette force ?',
        options: [
          'Elle est divisée par 4',
          'Elle est divisée par 2',
          'Elle est multipliée par 2',
          'Elle reste inchangée'
        ],
        answer: 0,
        correction: 'La loi de gravitation universelle donne $F = G\\dfrac{m_1 m_2}{r^2}$ : la force est inversement proportionnelle au <strong>carré</strong> de la distance. En doublant $r$, on multiplie $r^2$ par 4, donc $F$ est divisée par 4.'
      },
      {
        q: 'Un satellite de masse $m = 500$ kg est attiré par la Terre (masse $M$, avec $M \\gg m$) avec une force de norme $F$. Quelle est la norme de la force exercée par le satellite sur la Terre ?',
        options: [
          '$F$, exactement la même norme',
          'Une force quasiment nulle, car la Terre est bien plus massive',
          '$\\dfrac{F}{1000}$, proportionnellement au rapport des masses',
          'Une force qui dépend de la vitesse du satellite'
        ],
        answer: 0,
        correction: 'D\'après le <strong>principe des actions réciproques</strong>, les deux forces d\'un couple d\'interaction ont toujours la même norme, quelle que soit la différence de masse entre les deux corps. La Terre attire le satellite exactement avec la même intensité que le satellite attire la Terre — seule l\'accélération qui en résulte diffère, car elle dépend de la masse de chaque corps ($a = F/m$).'
      },
      {
        q: 'Deux petites sphères de masses $m_1 = 2\\,000$ kg et $m_2 = 1\\,000$ kg, séparées par une distance $r = 10$ m, s\'attirent gravitationnellement. Quel est l\'ordre de grandeur de la force $F$ (avec $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻²) ?',
        options: [
          '$F \\approx 1{,}33\\times10^{-6}$ N',
          '$F \\approx 1{,}33\\times10^{-2}$ N',
          '$F \\approx 13{,}3$ N',
          '$F \\approx 1{,}33\\times10^{6}$ N'
        ],
        answer: 0,
        correction: '$F = G\\dfrac{m_1 m_2}{r^2} = 6{,}67\\times10^{-11}\\times\\dfrac{2\\,000\\times1\\,000}{10^2} \\approx 1{,}33\\times10^{-6}$ N. Cette force est totalement imperceptible : c\'est pour cela que l\'on ne ressent jamais l\'attraction gravitationnelle entre des objets du quotidien, seule celle des astres, bien plus massifs, est perceptible.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['force', 'champ']);

        if (typeExo === 'force') {
          var rKm = pick([6700, 7000, 8000, 10000, 15000, 20000, 30000, 42000]);
          var rM = rKm * 1000;
          var mSat = pick([250, 400, 600, 800, 1200, 1500, 2000]);
          var Mt = 5.97e24;
          var G = 6.67e-11;
          var F = G * Mt * mSat / (rM * rM);
          var Fround = parseFloat(F.toFixed(1));
          var tol = parseFloat(Math.max(1, Fround * 0.05).toFixed(1));
          var contexte = pick([
            'un satellite de télécommunication',
            'un satellite météorologique',
            'un satellite d\'observation de la Terre',
            'un satellite GPS',
            'une capsule en orbite'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', assimilé à un point matériel de masse $m = ' + mSat + '$ kg, en orbite à une distance $r = ' + rKm + '\\,000$ m du centre de la Terre (masse $M_{Terre} \\approx 5{,}97\\times10^{24}$ kg).<br/><br/>Calcule la force gravitationnelle $F$ exercée par la Terre sur ce satellite (en N, arrondie au dixième), avec $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻².',
            answer: Fround,
            tolerance: tol,
            unit: 'N',
            hint: 'Utilise la loi de gravitation universelle $F = G\\dfrac{M_{Terre} \\times m}{r^2}$.',
            solution: [
              'Loi de gravitation universelle : $F = G\\dfrac{M_{Terre} \\times m}{r^2}$, avec $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻² et $M_{Terre} \\approx 5{,}97\\times10^{24}$ kg.',
              'Distance en mètres : $r = ' + rKm + '\\,000 = ' + rM + '$ m (mesurée depuis le centre de la Terre, pas depuis le sol).',
              'Application numérique : $F = 6{,}67\\times10^{-11} \\times \\dfrac{5{,}97\\times10^{24} \\times ' + mSat + '}{' + rM + '^2}$.',
              'Résultat : $F \\approx ' + fr(Fround, 1) + '$ N.'
            ]
          };
        } else {
          var astres = [
            { nom: 'la Lune', Mm: 7.35, Me: 22, M: 7.35e22, Rm: 1.74, Re: 6, R: 1.74e6 },
            { nom: 'Mars', Mm: 6.42, Me: 23, M: 6.42e23, Rm: 3.39, Re: 6, R: 3.39e6 },
            { nom: 'Vénus', Mm: 4.87, Me: 24, M: 4.87e24, Rm: 6.05, Re: 6, R: 6.05e6 },
            { nom: 'Mercure', Mm: 3.30, Me: 23, M: 3.30e23, Rm: 2.44, Re: 6, R: 2.44e6 },
            { nom: 'Titan (lune de Saturne)', Mm: 1.35, Me: 23, M: 1.35e23, Rm: 2.57, Re: 6, R: 2.57e6 }
          ];
          var astre = pick(astres);
          var G2 = 6.67e-11;
          var g = G2 * astre.M / (astre.R * astre.R);
          var gRound = parseFloat(g.toFixed(2));
          var tol2 = parseFloat(Math.max(0.05, gRound * 0.05).toFixed(2));
          return {
            statement: 'À la surface de ' + astre.nom + ', assimilée à une sphère homogène de rayon $R = ' + fr(astre.Rm, 2) + '\\times10^{' + astre.Re + '}$ m et de masse $M = ' + fr(astre.Mm, 2) + '\\times10^{' + astre.Me + '}$ kg.<br/><br/>Calcule l\'intensité $g$ du champ de gravitation à la surface de cet astre (en m/s², arrondie au centième), à l\'aide de $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻².',
            answer: gRound,
            tolerance: tol2,
            unit: 'm/s²',
            hint: 'Le champ de gravitation créé par un astre à sa surface vaut $g = G\\dfrac{M}{R^2}$.',
            solution: [
              'Champ de gravitation créé par un astre à sa surface : $g = G\\dfrac{M}{R^2}$.',
              'Application numérique : $g = 6{,}67\\times10^{-11} \\times \\dfrac{' + fr(astre.Mm, 2) + '\\times10^{' + astre.Me + '}}{(' + fr(astre.Rm, 2) + '\\times10^{' + astre.Re + '})^2}$.',
              'Résultat : $g \\approx ' + fr(gRound, 2) + '$ m/s², à comparer à $g_{Terre} \\approx 9{,}81$ m/s².'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un astronaute de masse $m = 75$ kg s\'entraîne avant une mission lunaire. Sur Terre, le champ de gravitation vaut $g_{Terre} = 9{,}81$ m/s². Sur la Lune, assimilée à une sphère homogène de masse $M_L = 7{,}35\\times10^{22}$ kg et de rayon $R_L = 1{,}74\\times10^6$ m, le champ de gravitation $g_L$ est nettement plus faible (avec $G \\approx 6{,}67\\times10^{-11}$ N·m²·kg⁻²).',
      tasks: [
        'Calculer le poids $P_{Terre}$ de l\'astronaute sur Terre.',
        'Calculer le champ de gravitation $g_L$ à la surface de la Lune à partir de $M_L$ et $R_L$.',
        'En déduire le poids $P_L$ de l\'astronaute sur la Lune, puis comparer $P_{Terre}$ et $P_L$ (calculer le rapport $P_{Terre}/P_L$).'
      ],
      solutions: [
        '$P_{Terre} = m \\times g_{Terre} = 75 \\times 9{,}81 = 735{,}75$ N.',
        '$g_L = G\\dfrac{M_L}{R_L^2} = 6{,}67\\times10^{-11}\\times\\dfrac{7{,}35\\times10^{22}}{(1{,}74\\times10^6)^2} \\approx 1{,}62$ m/s².',
        '$P_L = m \\times g_L \\approx 75 \\times 1{,}62 \\approx 121{,}5$ N. Rapport $\\dfrac{P_{Terre}}{P_L} \\approx \\dfrac{735{,}75}{121{,}5} \\approx 6{,}06$ : le poids de l\'astronaute est environ <strong>6 fois plus faible</strong> sur la Lune que sur Terre.'
      ],
      finalAnswer: '$P_{Terre} \\approx 735{,}75$ N, $g_L \\approx 1{,}62$ m/s², $P_L \\approx 121{,}5$ N : le poids de l\'astronaute sur la Lune est environ 6 fois plus faible que sur Terre, alors que sa masse (75 kg) reste rigoureusement identique — seul le champ de gravitation local a changé.'
    },

    evaluation: {
      title: 'Évaluation — Interactions fondamentales et champ gravitationnel',
      duration: '30 min',
      questions: [
        {
          statement: 'Un satellite de masse $m = 1\\,000$ kg orbite à une distance $r = 8{,}0\\times10^6$ m du centre de la Terre ($M_{Terre} \\approx 5{,}97\\times10^{24}$ kg). Calculer la force gravitationnelle $F$ exercée par la Terre sur ce satellite (en N, arrondie à l\'unité).',
          type: 'numeric',
          answer: 6222,
          tolerance: 100,
          unit: 'N',
          points: 2,
          correction: '$F = G\\dfrac{M_{Terre}\\times m}{r^2} = 6{,}67\\times10^{-11}\\times\\dfrac{5{,}97\\times10^{24}\\times1\\,000}{(8{,}0\\times10^6)^2} \\approx 6\\,222$ N.'
        },
        {
          statement: 'Le principe des actions réciproques appliqué à l\'attraction gravitationnelle entre la Terre et la Lune affirme que :',
          type: 'multiple-choice',
          options: [
            'La force exercée par la Terre sur la Lune a la même norme que celle exercée par la Lune sur la Terre',
            'La Terre attire la Lune, mais la Lune n\'attire pas la Terre',
            'La force dépend uniquement de la masse de la Terre',
            'Les deux forces ont la même direction mais des normes différentes, proportionnelles aux masses'
          ],
          answer: 0,
          points: 2,
          correction: 'Le principe des actions réciproques (3e loi de Newton) impose que les deux forces d\'un couple d\'interaction aient toujours la <strong>même norme</strong>, quelles que soient les masses en présence.'
        },
        {
          statement: 'La distance $r$ entre la Terre et un satellite est multipliée par $1{,}5$, sans changement des masses en présence. Par quel facteur est alors multipliée la force gravitationnelle entre les deux ?',
          type: 'multiple-choice',
          options: [
            'Par un facteur $\\dfrac{1}{1{,}5^2} \\approx 0{,}44$ (elle diminue)',
            'Par un facteur $1{,}5$ (elle augmente)',
            'Par un facteur $\\dfrac{1}{1{,}5} \\approx 0{,}67$',
            'Elle ne change pas, car les masses sont inchangées'
          ],
          answer: 0,
          points: 2,
          correction: 'Comme $F \\propto \\dfrac{1}{r^2}$, multiplier $r$ par $1{,}5$ revient à diviser $F$ par $1{,}5^2 = 2{,}25$, soit à la multiplier par $\\dfrac{1}{2{,}25} \\approx 0{,}44$ : la force diminue, alors que les masses n\'ont pourtant pas changé.'
        },
        {
          statement: 'Mars peut être assimilée à une sphère homogène de masse $M = 6{,}42\\times10^{23}$ kg et de rayon $R = 3{,}39\\times10^6$ m. Calculer l\'intensité du champ de gravitation $g_{Mars}$ à sa surface (en m/s², arrondie au centième).',
          type: 'numeric',
          answer: 3.73,
          tolerance: 0.1,
          unit: 'm/s²',
          points: 2,
          correction: '$g_{Mars} = G\\dfrac{M}{R^2} = 6{,}67\\times10^{-11}\\times\\dfrac{6{,}42\\times10^{23}}{(3{,}39\\times10^6)^2} \\approx 3{,}73$ m/s².'
        },
        {
          statement: 'Sur la Lune, où $g_L \\approx 1{,}62$ m/s², calculer le poids $P$ d\'un objet de masse $m = 60$ kg (en N, arrondi au dixième).',
          type: 'numeric',
          answer: 97.2,
          tolerance: 3,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g_L = 60 \\times 1{,}62 = 97{,}2$ N — un poids bien plus faible que sur Terre ($60\\times9{,}81\\approx588{,}6$ N), bien que la masse de l\'objet n\'ait pas changé.'
        }
      ]
    }
  });
